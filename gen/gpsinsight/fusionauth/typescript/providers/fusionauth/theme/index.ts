// https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/theme
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ThemeConfig extends cdktf.TerraformMetaArguments {
  /**
  * A FreeMarker template that is rendered when the user requests the /account/edit path. This page contains a form that enables authenticated users to update their profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/theme#account_edit Theme#account_edit}
  */
  readonly accountEdit?: string;
  /**
  * A FreeMarker template that is rendered when the user requests the /account path. This is the self-service account landing page. An authenticated user may use this as a starting point for operations such as updating their profile or configuring multi-factor authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/theme#account_index Theme#account_index}
  */
  readonly accountIndex?: string;
  /**
  * A FreeMarker template that is rendered when the user requests the /account/two-factor/disable path. This page contains a form that accepts a verification code used to disable a multi-factor authentication method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/theme#account_two_factor_disable Theme#account_two_factor_disable}
  */
  readonly accountTwoFactorDisable?: string;
  /**
  * A FreeMarker template that is rendered when the user requests the /account/two-factor/enable path. This page contains a form that accepts a verification code used to enable a multi-factor authentication method. Additionally, this page contains presentation of recovery codes when a user enables multi-factor authentication for the first time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/theme#account_two_factor_enable Theme#account_two_factor_enable}
  */
  readonly accountTwoFactorEnable?: string;
  /**
  * A FreeMarker template that is rendered when the user requests the /account/two-factor path. This page displays an authenticated user’s configured multi-factor authentication methods. Additionally, it provides links to enable and disable a method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/theme#account_two_factor_index Theme#account_two_factor_index}
  */
  readonly accountTwoFactorIndex?: string;
  /**
  * A FreeMarker template that is rendered when the user requests the /account/webauthn/add path. This page contains a form that allows a user to register a new WebAuthn passkey.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/theme#account_webauthn_add Theme#account_webauthn_add}
  */
  readonly accountWebauthnAdd?: string;
  /**
  * A FreeMarker template that is rendered when the user requests the /account/webauthn/delete path. This page contains a form that allows a user to delete a WebAuthn passkey.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/theme#account_webauthn_delete Theme#account_webauthn_delete}
  */
  readonly accountWebauthnDelete?: string;
  /**
  * A FreeMarker template that is rendered when the user requests the /account/webauthn/ path. This page displays an authenticated user’s registered WebAuthn passkeys. Additionally, it provides links to delete an existing passkey and register a new passkey.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/theme#account_webauthn_index Theme#account_webauthn_index}
  */
  readonly accountWebauthnIndex?: string;
  /**
  * A properties file formatted String containing at least all of the message keys defined in the FusionAuth shipped messages file. Required if not copying an existing Theme.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/theme#default_messages Theme#default_messages}
  */
  readonly defaultMessages?: string;
  /**
  * A FreeMarker template that is rendered when the user requests the /email/complete path. This page is used after a user has verified their email address by clicking the URL in the email. After FusionAuth has updated their user object to indicate that their email was verified, the browser is redirected to this page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/theme#email_complete Theme#email_complete}
  */
  readonly emailComplete?: string;
  /**
  * A FreeMarker template that is rendered when the user requests the /email/send page. This page is used after a user has asked for the verification email to be resent. This can happen if the URL in the email expired and the user clicked it. In this case, the user can provide their email address again and FusionAuth will resend the email. After the user submits their email and FusionAuth re-sends a verification email to them, the browser is redirected to this page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/theme#email_send Theme#email_send}
  */
  readonly emailSend?: string;
  /**
  * A FreeMarker template that is rendered when the user requests the /email/sent path. This page is used after a user has asked for the verification email to be resent. This can happen if the URL in the email expired and the user clicked it. In this case, the user can provide their email address again and FusionAuth will resend the email. After the user submits their email and FusionAuth re-sends a verification email to them, the browser is redirected to this page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/theme#email_sent Theme#email_sent}
  */
  readonly emailSent?: string;
  /**
  * A FreeMarker template that is rendered when the user requests the /email/verification-required path. This page is rendered when a user is required to verify their email address prior to being allowed to proceed with login. This occurs when Unverified behavior is set to Gated in email verification settings on the Tenant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/theme#email_verification_required Theme#email_verification_required}
  */
  readonly emailVerificationRequired?: string;
  /**
  * A FreeMarker template that is rendered when the user requests the /email/verify path. This page is rendered when a user clicks the URL from the verification email and the verificationId has expired. FusionAuth expires verificationId after a period of time (which is configurable). If the user has a URL from the verification email that has expired, this page will be rendered and the error will be displayed to the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/theme#email_verify Theme#email_verify}
  */
  readonly emailVerify?: string;
  /**
  * A FreeMarker template that contains all of the macros and templates used by the rest of the login Theme FreeMarker templates. This allows you to configure the general layout of your UI configuration and login theme without having to copy and paste HTML into each of the templates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/theme#helpers Theme#helpers}
  */
  readonly helpers?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/theme#id Theme#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A FreeMarker template that is rendered when the user requests the / path. This is the root landing page. This page is available to unauthenticated users and will be displayed whenever someone navigates to the FusionAuth host’s root page. Prior to version 1.27.0, navigating to this URL would redirect to /admin and would subsequently render the FusionAuth admin login page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/theme#index Theme#index}
  */
  readonly index?: string;
  /**
  * A Map of localized versions of the messages. The key is the Locale and the value is a properties file formatted String.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/theme#localized_messages Theme#localized_messages}
  */
  readonly localizedMessages?: { [key: string]: string };
  /**
  * A unique name for the Theme.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/theme#name Theme#name}
  */
  readonly name: string;
  /**
  * A FreeMarker template that is rendered when the user requests the /oauth2/authorize path. This is the main login page for FusionAuth and is used for all interactive OAuth2 and OpenID Connect workflows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/theme#oauth2_authorize Theme#oauth2_authorize}
  */
  readonly oauth2Authorize?: string;
  /**
  * A FreeMarker template that is rendered when the user requests the /oauth2/authorized-not-registered path. This page is rendered when a user is not registered and the Application configuration requires registration before FusionAuth will complete the redirect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/theme#oauth2_authorized_not_registered Theme#oauth2_authorized_not_registered}
  */
  readonly oauth2AuthorizedNotRegistered?: string;
  /**
  * A FreeMarker template that is rendered when the user requests the /oauth2/child-registration-not-allowed path. This page contains a form where a child must provide their parent’s email address to ask their parent to create an account for them in a Consent workflow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/theme#oauth2_child_registration_not_allowed Theme#oauth2_child_registration_not_allowed}
  */
  readonly oauth2ChildRegistrationNotAllowed?: string;
  /**
  * A FreeMarker template that is rendered when the user requests the /oauth2/child-registration-not-allowed-complete path. This page is rendered is rendered after a child provides their parent’s email address for parental consent in a Consent workflow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/theme#oauth2_child_registration_not_allowed_complete Theme#oauth2_child_registration_not_allowed_complete}
  */
  readonly oauth2ChildRegistrationNotAllowedComplete?: string;
  /**
  * A FreeMarker template that is rendered when the user requests the /oauth2/complete-registration path. This page contains a form that is used for users that have accounts but might be missing required fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/theme#oauth2_complete_registration Theme#oauth2_complete_registration}
  */
  readonly oauth2CompleteRegistration?: string;
  /**
  * A FreeMarker template that is rendered when the user requests the /oauth2/device path. This page contains a form for accepting an end user’s short code for the interactive portion of the OAuth Device Authorization Grant workflow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/theme#oauth2_device Theme#oauth2_device}
  */
  readonly oauth2Device?: string;
  /**
  * A FreeMarker template that is rendered when the user requests the /oauth2/device-complete path. This page contains a complete message indicating the device authentication has completed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/theme#oauth2_device_complete Theme#oauth2_device_complete}
  */
  readonly oauth2DeviceComplete?: string;
  /**
  * This page is used if the user starts or is in the middle of the OAuth workflow and any type of error occurs. This could be caused by the user messing with the URL or internally some type of information wasn’t passed between the OAuth endpoints correctly. For example, if you are federating login to an external IdP and that IdP does not properly echo the state parameter, FusionAuth’s OAuth workflow will break and this page will be displayed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/theme#oauth2_error Theme#oauth2_error}
  */
  readonly oauth2Error?: string;
  /**
  * A FreeMarker template that is rendered when the user requests the /oauth2/logout page. This page is used if the user initiates a logout. This page causes the user to be logged out of all associated applications via a front-channel mechanism before being redirected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/theme#oauth2_logout Theme#oauth2_logout}
  */
  readonly oauth2Logout?: string;
  /**
  * A FreeMarker template that is rendered when the user requests the /oauth2/passwordless path. This page is rendered when the user starts the passwordless login workflow. The page renders the form where the user types in their email address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/theme#oauth2_passwordless Theme#oauth2_passwordless}
  */
  readonly oauth2Passwordless?: string;
  /**
  * A FreeMarker template that is rendered when the user requests the /oauth2/register path. This page is used to register or sign up the user for the application when self-service registration is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/theme#oauth2_register Theme#oauth2_register}
  */
  readonly oauth2Register?: string;
  /**
  * A FreeMarker template that is rendered when the user requests the /oauth2/start-idp-link path. This page is used if the Identity Provider is configured to have a pending link. The user is presented with the option to link their account with an existing FusionAuth user account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/theme#oauth2_start_idp_link Theme#oauth2_start_idp_link}
  */
  readonly oauth2StartIdpLink?: string;
  /**
  * A FreeMarker template that is rendered when the user requests the /oauth2/two-factor path. This page is used if the user has two-factor authentication enabled and they need to type in their code again. FusionAuth will properly handle the processing on the back end. This page contains the form that the user will put their code into.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/theme#oauth2_two_factor Theme#oauth2_two_factor}
  */
  readonly oauth2TwoFactor?: string;
  /**
  * A FreeMarker template that contains the OAuth2 two-factor enable form.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/theme#oauth2_two_factor_enable Theme#oauth2_two_factor_enable}
  */
  readonly oauth2TwoFactorEnable?: string;
  /**
  * A FreeMarker template that contains the OAuth2 two-factor enable complete form.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/theme#oauth2_two_factor_enable_complete Theme#oauth2_two_factor_enable_complete}
  */
  readonly oauth2TwoFactorEnableComplete?: string;
  /**
  * A FreeMarker template that is rendered when the user requests the /oauth2/two-factor-methods path. This page contains a form providing a user with their configured multi-factor authentication options that they may use to complete the authentication challenge.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/theme#oauth2_two_factor_methods Theme#oauth2_two_factor_methods}
  */
  readonly oauth2TwoFactorMethods?: string;
  /**
  * A FreeMarker template that is rendered when the user requests the /oauth2/wait path. This page is rendered when FusionAuth is waiting for an external provider to complete an out of band authentication request. For example, during a HYPR login this page will be displayed until the user completes authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/theme#oauth2_wait Theme#oauth2_wait}
  */
  readonly oauth2Wait?: string;
  /**
  * A FreeMarker template that is rendered when the user requests the /oauth2/webauthn path. This page contains a form where a user can enter their loginId (username or email address) to authenticate with one of their registered WebAuthn passkeys. This page uses the WebAuthn bootstrap workflow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/theme#oauth2_webauthn Theme#oauth2_webauthn}
  */
  readonly oauth2Webauthn?: string;
  /**
  * A FreeMarker template that is rendered when the user requests the /oauth2/webauthn-reauth path. This page contains a form that lists the WebAuthn passkeys currently available for re-authentication. A user can select one of the listed passkeys to authenticate using the corresponding passkey and user account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/theme#oauth2_webauthn_reauth Theme#oauth2_webauthn_reauth}
  */
  readonly oauth2WebauthnReauth?: string;
  /**
  * A FreeMarker template that is rendered when the user requests the /oauth2/webauthn-reauth-enable path. This page contains two forms. One allows the user to select one of their existing WebAuthn passkeys to use for re-authentication. The other allows the user to register a new WebAuthn passkey for re-authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/theme#oauth2_webauthn_reauth_enable Theme#oauth2_webauthn_reauth_enable}
  */
  readonly oauth2WebauthnReauthEnable?: string;
  /**
  * A FreeMarker template that is rendered when the user requests the /password/change path. This page is used if the user is required to change their password or if they have requested a password reset. This page contains the form that allows the user to provide a new password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/theme#password_change Theme#password_change}
  */
  readonly passwordChange?: string;
  /**
  * A FreeMarker template that is rendered when the user requests the /password/complete path. This page is used after the user has successfully updated their password, or reset it. This page should instruct the user that their password was updated and that they need to login again.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/theme#password_complete Theme#password_complete}
  */
  readonly passwordComplete?: string;
  /**
  * A FreeMarker template that is rendered when the user requests the /password/forgot path. This page is used when a user starts the forgot password workflow. This page renders the form where the user types in their email address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/theme#password_forgot Theme#password_forgot}
  */
  readonly passwordForgot?: string;
  /**
  * A FreeMarker template that is rendered when the user requests the /password/sent path. This page is used when a user has submitted the forgot password form with their email. FusionAuth does not indicate back to the user if their email address was valid in order to prevent malicious activity that could reveal valid email addresses. Therefore, this page should indicate to the user that if their email was valid, they will receive an email shortly with a link to reset their password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/theme#password_sent Theme#password_sent}
  */
  readonly passwordSent?: string;
  /**
  * A FreeMarker template that is rendered when the user requests the /registration/complete path. This page is used after a user has verified their email address for a specific application (i.e. a user registration) by clicking the URL in the email. After FusionAuth has updated their registration object to indicate that their email was verified, the browser is redirected to this page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/theme#registration_complete Theme#registration_complete}
  */
  readonly registrationComplete?: string;
  /**
  * A FreeMarker template that is rendered when the user requests the /registration/send page. This page is used after a user has asked for the application specific verification email to be resent. This can happen if the URL in the email expired and the user clicked it. In this case, the user can provide their email address again and FusionAuth will resend the email. After the user submits their email and FusionAuth re-sends a verification email to them, the browser is redirected to this page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/theme#registration_send Theme#registration_send}
  */
  readonly registrationSend?: string;
  /**
  * A FreeMarker template that is rendered when the user requests the /registration/sent path. This page is used after a user has asked for the application specific verification email to be resent. This can happen if the URL in the email expired and the user clicked it. In this case, the user can provide their email address again and FusionAuth will resend the email. After the user submits their email and FusionAuth re-sends a verification email to them, the browser is redirected to this page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/theme#registration_sent Theme#registration_sent}
  */
  readonly registrationSent?: string;
  /**
  * A FreeMarker template that is rendered when the user requests the /registration/verification-required path. This page is rendered when a user is required to verify their registration prior to being allowed to proceed with the registration flow. This occurs when Unverified behavior is set to Gated in registration verification settings on the Application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/theme#registration_verification_required Theme#registration_verification_required}
  */
  readonly registrationVerificationRequired?: string;
  /**
  * A FreeMarker template that is rendered when the user requests the /registration/verify path. This page is used when a user clicks the URL from the application specific verification email and the verificationId has expired. FusionAuth expires verificationId after a period of time (which is configurable). If the user has a URL from the verification email that has expired, this page will be rendered and the error will be displayed to the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/theme#registration_verify Theme#registration_verify}
  */
  readonly registrationVerify?: string;
  /**
  * A FreeMarker template that is rendered when the user requests the /samlv2/logout path. This page is used if the user initiates a SAML logout. This page causes the user to be logged out of all associated applications via a front-channel mechanism before being redirected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/theme#samlv2_logout Theme#samlv2_logout}
  */
  readonly samlv2Logout?: string;
  /**
  * The optional Id of an existing Theme to make a copy of. If present, the defaultMessages, localizedMessages, templates, and stylesheet from the source Theme will be copied to the new Theme.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/theme#source_theme_id Theme#source_theme_id}
  */
  readonly sourceThemeId?: string;
  /**
  * A CSS stylesheet used to style the templates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/theme#stylesheet Theme#stylesheet}
  */
  readonly stylesheet?: string;
  /**
  * An optional FreeMarker template that contains the unauthorized page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/theme#unauthorized Theme#unauthorized}
  */
  readonly unauthorized?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/theme fusionauth_theme}
*/
export class Theme extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fusionauth_theme";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Theme resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Theme to import
  * @param importFromId The id of the existing Theme that should be imported. Refer to the {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/theme#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Theme to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fusionauth_theme", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/theme fusionauth_theme} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ThemeConfig
  */
  public constructor(scope: Construct, id: string, config: ThemeConfig) {
    super(scope, id, {
      terraformResourceType: 'fusionauth_theme',
      terraformGeneratorMetadata: {
        providerName: 'fusionauth',
        providerVersion: '0.1.100'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountEdit = config.accountEdit;
    this._accountIndex = config.accountIndex;
    this._accountTwoFactorDisable = config.accountTwoFactorDisable;
    this._accountTwoFactorEnable = config.accountTwoFactorEnable;
    this._accountTwoFactorIndex = config.accountTwoFactorIndex;
    this._accountWebauthnAdd = config.accountWebauthnAdd;
    this._accountWebauthnDelete = config.accountWebauthnDelete;
    this._accountWebauthnIndex = config.accountWebauthnIndex;
    this._defaultMessages = config.defaultMessages;
    this._emailComplete = config.emailComplete;
    this._emailSend = config.emailSend;
    this._emailSent = config.emailSent;
    this._emailVerificationRequired = config.emailVerificationRequired;
    this._emailVerify = config.emailVerify;
    this._helpers = config.helpers;
    this._id = config.id;
    this._index = config.index;
    this._localizedMessages = config.localizedMessages;
    this._name = config.name;
    this._oauth2Authorize = config.oauth2Authorize;
    this._oauth2AuthorizedNotRegistered = config.oauth2AuthorizedNotRegistered;
    this._oauth2ChildRegistrationNotAllowed = config.oauth2ChildRegistrationNotAllowed;
    this._oauth2ChildRegistrationNotAllowedComplete = config.oauth2ChildRegistrationNotAllowedComplete;
    this._oauth2CompleteRegistration = config.oauth2CompleteRegistration;
    this._oauth2Device = config.oauth2Device;
    this._oauth2DeviceComplete = config.oauth2DeviceComplete;
    this._oauth2Error = config.oauth2Error;
    this._oauth2Logout = config.oauth2Logout;
    this._oauth2Passwordless = config.oauth2Passwordless;
    this._oauth2Register = config.oauth2Register;
    this._oauth2StartIdpLink = config.oauth2StartIdpLink;
    this._oauth2TwoFactor = config.oauth2TwoFactor;
    this._oauth2TwoFactorEnable = config.oauth2TwoFactorEnable;
    this._oauth2TwoFactorEnableComplete = config.oauth2TwoFactorEnableComplete;
    this._oauth2TwoFactorMethods = config.oauth2TwoFactorMethods;
    this._oauth2Wait = config.oauth2Wait;
    this._oauth2Webauthn = config.oauth2Webauthn;
    this._oauth2WebauthnReauth = config.oauth2WebauthnReauth;
    this._oauth2WebauthnReauthEnable = config.oauth2WebauthnReauthEnable;
    this._passwordChange = config.passwordChange;
    this._passwordComplete = config.passwordComplete;
    this._passwordForgot = config.passwordForgot;
    this._passwordSent = config.passwordSent;
    this._registrationComplete = config.registrationComplete;
    this._registrationSend = config.registrationSend;
    this._registrationSent = config.registrationSent;
    this._registrationVerificationRequired = config.registrationVerificationRequired;
    this._registrationVerify = config.registrationVerify;
    this._samlv2Logout = config.samlv2Logout;
    this._sourceThemeId = config.sourceThemeId;
    this._stylesheet = config.stylesheet;
    this._unauthorized = config.unauthorized;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_edit - computed: true, optional: true, required: false
  private _accountEdit?: string; 
  public get accountEdit() {
    return this.getStringAttribute('account_edit');
  }
  public set accountEdit(value: string) {
    this._accountEdit = value;
  }
  public resetAccountEdit() {
    this._accountEdit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountEditInput() {
    return this._accountEdit;
  }

  // account_index - computed: true, optional: true, required: false
  private _accountIndex?: string; 
  public get accountIndex() {
    return this.getStringAttribute('account_index');
  }
  public set accountIndex(value: string) {
    this._accountIndex = value;
  }
  public resetAccountIndex() {
    this._accountIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIndexInput() {
    return this._accountIndex;
  }

  // account_two_factor_disable - computed: true, optional: true, required: false
  private _accountTwoFactorDisable?: string; 
  public get accountTwoFactorDisable() {
    return this.getStringAttribute('account_two_factor_disable');
  }
  public set accountTwoFactorDisable(value: string) {
    this._accountTwoFactorDisable = value;
  }
  public resetAccountTwoFactorDisable() {
    this._accountTwoFactorDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountTwoFactorDisableInput() {
    return this._accountTwoFactorDisable;
  }

  // account_two_factor_enable - computed: true, optional: true, required: false
  private _accountTwoFactorEnable?: string; 
  public get accountTwoFactorEnable() {
    return this.getStringAttribute('account_two_factor_enable');
  }
  public set accountTwoFactorEnable(value: string) {
    this._accountTwoFactorEnable = value;
  }
  public resetAccountTwoFactorEnable() {
    this._accountTwoFactorEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountTwoFactorEnableInput() {
    return this._accountTwoFactorEnable;
  }

  // account_two_factor_index - computed: true, optional: true, required: false
  private _accountTwoFactorIndex?: string; 
  public get accountTwoFactorIndex() {
    return this.getStringAttribute('account_two_factor_index');
  }
  public set accountTwoFactorIndex(value: string) {
    this._accountTwoFactorIndex = value;
  }
  public resetAccountTwoFactorIndex() {
    this._accountTwoFactorIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountTwoFactorIndexInput() {
    return this._accountTwoFactorIndex;
  }

  // account_webauthn_add - computed: true, optional: true, required: false
  private _accountWebauthnAdd?: string; 
  public get accountWebauthnAdd() {
    return this.getStringAttribute('account_webauthn_add');
  }
  public set accountWebauthnAdd(value: string) {
    this._accountWebauthnAdd = value;
  }
  public resetAccountWebauthnAdd() {
    this._accountWebauthnAdd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountWebauthnAddInput() {
    return this._accountWebauthnAdd;
  }

  // account_webauthn_delete - computed: true, optional: true, required: false
  private _accountWebauthnDelete?: string; 
  public get accountWebauthnDelete() {
    return this.getStringAttribute('account_webauthn_delete');
  }
  public set accountWebauthnDelete(value: string) {
    this._accountWebauthnDelete = value;
  }
  public resetAccountWebauthnDelete() {
    this._accountWebauthnDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountWebauthnDeleteInput() {
    return this._accountWebauthnDelete;
  }

  // account_webauthn_index - computed: true, optional: true, required: false
  private _accountWebauthnIndex?: string; 
  public get accountWebauthnIndex() {
    return this.getStringAttribute('account_webauthn_index');
  }
  public set accountWebauthnIndex(value: string) {
    this._accountWebauthnIndex = value;
  }
  public resetAccountWebauthnIndex() {
    this._accountWebauthnIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountWebauthnIndexInput() {
    return this._accountWebauthnIndex;
  }

  // default_messages - computed: true, optional: true, required: false
  private _defaultMessages?: string; 
  public get defaultMessages() {
    return this.getStringAttribute('default_messages');
  }
  public set defaultMessages(value: string) {
    this._defaultMessages = value;
  }
  public resetDefaultMessages() {
    this._defaultMessages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultMessagesInput() {
    return this._defaultMessages;
  }

  // email_complete - computed: true, optional: true, required: false
  private _emailComplete?: string; 
  public get emailComplete() {
    return this.getStringAttribute('email_complete');
  }
  public set emailComplete(value: string) {
    this._emailComplete = value;
  }
  public resetEmailComplete() {
    this._emailComplete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailCompleteInput() {
    return this._emailComplete;
  }

  // email_send - computed: true, optional: true, required: false
  private _emailSend?: string; 
  public get emailSend() {
    return this.getStringAttribute('email_send');
  }
  public set emailSend(value: string) {
    this._emailSend = value;
  }
  public resetEmailSend() {
    this._emailSend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailSendInput() {
    return this._emailSend;
  }

  // email_sent - computed: true, optional: true, required: false
  private _emailSent?: string; 
  public get emailSent() {
    return this.getStringAttribute('email_sent');
  }
  public set emailSent(value: string) {
    this._emailSent = value;
  }
  public resetEmailSent() {
    this._emailSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailSentInput() {
    return this._emailSent;
  }

  // email_verification_required - computed: true, optional: true, required: false
  private _emailVerificationRequired?: string; 
  public get emailVerificationRequired() {
    return this.getStringAttribute('email_verification_required');
  }
  public set emailVerificationRequired(value: string) {
    this._emailVerificationRequired = value;
  }
  public resetEmailVerificationRequired() {
    this._emailVerificationRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailVerificationRequiredInput() {
    return this._emailVerificationRequired;
  }

  // email_verify - computed: true, optional: true, required: false
  private _emailVerify?: string; 
  public get emailVerify() {
    return this.getStringAttribute('email_verify');
  }
  public set emailVerify(value: string) {
    this._emailVerify = value;
  }
  public resetEmailVerify() {
    this._emailVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailVerifyInput() {
    return this._emailVerify;
  }

  // helpers - computed: true, optional: true, required: false
  private _helpers?: string; 
  public get helpers() {
    return this.getStringAttribute('helpers');
  }
  public set helpers(value: string) {
    this._helpers = value;
  }
  public resetHelpers() {
    this._helpers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helpersInput() {
    return this._helpers;
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

  // index - computed: true, optional: true, required: false
  private _index?: string; 
  public get index() {
    return this.getStringAttribute('index');
  }
  public set index(value: string) {
    this._index = value;
  }
  public resetIndex() {
    this._index = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
  }

  // localized_messages - computed: false, optional: true, required: false
  private _localizedMessages?: { [key: string]: string }; 
  public get localizedMessages() {
    return this.getStringMapAttribute('localized_messages');
  }
  public set localizedMessages(value: { [key: string]: string }) {
    this._localizedMessages = value;
  }
  public resetLocalizedMessages() {
    this._localizedMessages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localizedMessagesInput() {
    return this._localizedMessages;
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

  // oauth2_authorize - computed: true, optional: true, required: false
  private _oauth2Authorize?: string; 
  public get oauth2Authorize() {
    return this.getStringAttribute('oauth2_authorize');
  }
  public set oauth2Authorize(value: string) {
    this._oauth2Authorize = value;
  }
  public resetOauth2Authorize() {
    this._oauth2Authorize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauth2AuthorizeInput() {
    return this._oauth2Authorize;
  }

  // oauth2_authorized_not_registered - computed: true, optional: true, required: false
  private _oauth2AuthorizedNotRegistered?: string; 
  public get oauth2AuthorizedNotRegistered() {
    return this.getStringAttribute('oauth2_authorized_not_registered');
  }
  public set oauth2AuthorizedNotRegistered(value: string) {
    this._oauth2AuthorizedNotRegistered = value;
  }
  public resetOauth2AuthorizedNotRegistered() {
    this._oauth2AuthorizedNotRegistered = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauth2AuthorizedNotRegisteredInput() {
    return this._oauth2AuthorizedNotRegistered;
  }

  // oauth2_child_registration_not_allowed - computed: true, optional: true, required: false
  private _oauth2ChildRegistrationNotAllowed?: string; 
  public get oauth2ChildRegistrationNotAllowed() {
    return this.getStringAttribute('oauth2_child_registration_not_allowed');
  }
  public set oauth2ChildRegistrationNotAllowed(value: string) {
    this._oauth2ChildRegistrationNotAllowed = value;
  }
  public resetOauth2ChildRegistrationNotAllowed() {
    this._oauth2ChildRegistrationNotAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauth2ChildRegistrationNotAllowedInput() {
    return this._oauth2ChildRegistrationNotAllowed;
  }

  // oauth2_child_registration_not_allowed_complete - computed: true, optional: true, required: false
  private _oauth2ChildRegistrationNotAllowedComplete?: string; 
  public get oauth2ChildRegistrationNotAllowedComplete() {
    return this.getStringAttribute('oauth2_child_registration_not_allowed_complete');
  }
  public set oauth2ChildRegistrationNotAllowedComplete(value: string) {
    this._oauth2ChildRegistrationNotAllowedComplete = value;
  }
  public resetOauth2ChildRegistrationNotAllowedComplete() {
    this._oauth2ChildRegistrationNotAllowedComplete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauth2ChildRegistrationNotAllowedCompleteInput() {
    return this._oauth2ChildRegistrationNotAllowedComplete;
  }

  // oauth2_complete_registration - computed: true, optional: true, required: false
  private _oauth2CompleteRegistration?: string; 
  public get oauth2CompleteRegistration() {
    return this.getStringAttribute('oauth2_complete_registration');
  }
  public set oauth2CompleteRegistration(value: string) {
    this._oauth2CompleteRegistration = value;
  }
  public resetOauth2CompleteRegistration() {
    this._oauth2CompleteRegistration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauth2CompleteRegistrationInput() {
    return this._oauth2CompleteRegistration;
  }

  // oauth2_device - computed: true, optional: true, required: false
  private _oauth2Device?: string; 
  public get oauth2Device() {
    return this.getStringAttribute('oauth2_device');
  }
  public set oauth2Device(value: string) {
    this._oauth2Device = value;
  }
  public resetOauth2Device() {
    this._oauth2Device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauth2DeviceInput() {
    return this._oauth2Device;
  }

  // oauth2_device_complete - computed: true, optional: true, required: false
  private _oauth2DeviceComplete?: string; 
  public get oauth2DeviceComplete() {
    return this.getStringAttribute('oauth2_device_complete');
  }
  public set oauth2DeviceComplete(value: string) {
    this._oauth2DeviceComplete = value;
  }
  public resetOauth2DeviceComplete() {
    this._oauth2DeviceComplete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauth2DeviceCompleteInput() {
    return this._oauth2DeviceComplete;
  }

  // oauth2_error - computed: true, optional: true, required: false
  private _oauth2Error?: string; 
  public get oauth2Error() {
    return this.getStringAttribute('oauth2_error');
  }
  public set oauth2Error(value: string) {
    this._oauth2Error = value;
  }
  public resetOauth2Error() {
    this._oauth2Error = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauth2ErrorInput() {
    return this._oauth2Error;
  }

  // oauth2_logout - computed: true, optional: true, required: false
  private _oauth2Logout?: string; 
  public get oauth2Logout() {
    return this.getStringAttribute('oauth2_logout');
  }
  public set oauth2Logout(value: string) {
    this._oauth2Logout = value;
  }
  public resetOauth2Logout() {
    this._oauth2Logout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauth2LogoutInput() {
    return this._oauth2Logout;
  }

  // oauth2_passwordless - computed: true, optional: true, required: false
  private _oauth2Passwordless?: string; 
  public get oauth2Passwordless() {
    return this.getStringAttribute('oauth2_passwordless');
  }
  public set oauth2Passwordless(value: string) {
    this._oauth2Passwordless = value;
  }
  public resetOauth2Passwordless() {
    this._oauth2Passwordless = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauth2PasswordlessInput() {
    return this._oauth2Passwordless;
  }

  // oauth2_register - computed: true, optional: true, required: false
  private _oauth2Register?: string; 
  public get oauth2Register() {
    return this.getStringAttribute('oauth2_register');
  }
  public set oauth2Register(value: string) {
    this._oauth2Register = value;
  }
  public resetOauth2Register() {
    this._oauth2Register = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauth2RegisterInput() {
    return this._oauth2Register;
  }

  // oauth2_start_idp_link - computed: true, optional: true, required: false
  private _oauth2StartIdpLink?: string; 
  public get oauth2StartIdpLink() {
    return this.getStringAttribute('oauth2_start_idp_link');
  }
  public set oauth2StartIdpLink(value: string) {
    this._oauth2StartIdpLink = value;
  }
  public resetOauth2StartIdpLink() {
    this._oauth2StartIdpLink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauth2StartIdpLinkInput() {
    return this._oauth2StartIdpLink;
  }

  // oauth2_two_factor - computed: true, optional: true, required: false
  private _oauth2TwoFactor?: string; 
  public get oauth2TwoFactor() {
    return this.getStringAttribute('oauth2_two_factor');
  }
  public set oauth2TwoFactor(value: string) {
    this._oauth2TwoFactor = value;
  }
  public resetOauth2TwoFactor() {
    this._oauth2TwoFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauth2TwoFactorInput() {
    return this._oauth2TwoFactor;
  }

  // oauth2_two_factor_enable - computed: true, optional: true, required: false
  private _oauth2TwoFactorEnable?: string; 
  public get oauth2TwoFactorEnable() {
    return this.getStringAttribute('oauth2_two_factor_enable');
  }
  public set oauth2TwoFactorEnable(value: string) {
    this._oauth2TwoFactorEnable = value;
  }
  public resetOauth2TwoFactorEnable() {
    this._oauth2TwoFactorEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauth2TwoFactorEnableInput() {
    return this._oauth2TwoFactorEnable;
  }

  // oauth2_two_factor_enable_complete - computed: true, optional: true, required: false
  private _oauth2TwoFactorEnableComplete?: string; 
  public get oauth2TwoFactorEnableComplete() {
    return this.getStringAttribute('oauth2_two_factor_enable_complete');
  }
  public set oauth2TwoFactorEnableComplete(value: string) {
    this._oauth2TwoFactorEnableComplete = value;
  }
  public resetOauth2TwoFactorEnableComplete() {
    this._oauth2TwoFactorEnableComplete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauth2TwoFactorEnableCompleteInput() {
    return this._oauth2TwoFactorEnableComplete;
  }

  // oauth2_two_factor_methods - computed: true, optional: true, required: false
  private _oauth2TwoFactorMethods?: string; 
  public get oauth2TwoFactorMethods() {
    return this.getStringAttribute('oauth2_two_factor_methods');
  }
  public set oauth2TwoFactorMethods(value: string) {
    this._oauth2TwoFactorMethods = value;
  }
  public resetOauth2TwoFactorMethods() {
    this._oauth2TwoFactorMethods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauth2TwoFactorMethodsInput() {
    return this._oauth2TwoFactorMethods;
  }

  // oauth2_wait - computed: true, optional: true, required: false
  private _oauth2Wait?: string; 
  public get oauth2Wait() {
    return this.getStringAttribute('oauth2_wait');
  }
  public set oauth2Wait(value: string) {
    this._oauth2Wait = value;
  }
  public resetOauth2Wait() {
    this._oauth2Wait = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauth2WaitInput() {
    return this._oauth2Wait;
  }

  // oauth2_webauthn - computed: true, optional: true, required: false
  private _oauth2Webauthn?: string; 
  public get oauth2Webauthn() {
    return this.getStringAttribute('oauth2_webauthn');
  }
  public set oauth2Webauthn(value: string) {
    this._oauth2Webauthn = value;
  }
  public resetOauth2Webauthn() {
    this._oauth2Webauthn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauth2WebauthnInput() {
    return this._oauth2Webauthn;
  }

  // oauth2_webauthn_reauth - computed: true, optional: true, required: false
  private _oauth2WebauthnReauth?: string; 
  public get oauth2WebauthnReauth() {
    return this.getStringAttribute('oauth2_webauthn_reauth');
  }
  public set oauth2WebauthnReauth(value: string) {
    this._oauth2WebauthnReauth = value;
  }
  public resetOauth2WebauthnReauth() {
    this._oauth2WebauthnReauth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauth2WebauthnReauthInput() {
    return this._oauth2WebauthnReauth;
  }

  // oauth2_webauthn_reauth_enable - computed: true, optional: true, required: false
  private _oauth2WebauthnReauthEnable?: string; 
  public get oauth2WebauthnReauthEnable() {
    return this.getStringAttribute('oauth2_webauthn_reauth_enable');
  }
  public set oauth2WebauthnReauthEnable(value: string) {
    this._oauth2WebauthnReauthEnable = value;
  }
  public resetOauth2WebauthnReauthEnable() {
    this._oauth2WebauthnReauthEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauth2WebauthnReauthEnableInput() {
    return this._oauth2WebauthnReauthEnable;
  }

  // password_change - computed: true, optional: true, required: false
  private _passwordChange?: string; 
  public get passwordChange() {
    return this.getStringAttribute('password_change');
  }
  public set passwordChange(value: string) {
    this._passwordChange = value;
  }
  public resetPasswordChange() {
    this._passwordChange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordChangeInput() {
    return this._passwordChange;
  }

  // password_complete - computed: true, optional: true, required: false
  private _passwordComplete?: string; 
  public get passwordComplete() {
    return this.getStringAttribute('password_complete');
  }
  public set passwordComplete(value: string) {
    this._passwordComplete = value;
  }
  public resetPasswordComplete() {
    this._passwordComplete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordCompleteInput() {
    return this._passwordComplete;
  }

  // password_forgot - computed: true, optional: true, required: false
  private _passwordForgot?: string; 
  public get passwordForgot() {
    return this.getStringAttribute('password_forgot');
  }
  public set passwordForgot(value: string) {
    this._passwordForgot = value;
  }
  public resetPasswordForgot() {
    this._passwordForgot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordForgotInput() {
    return this._passwordForgot;
  }

  // password_sent - computed: true, optional: true, required: false
  private _passwordSent?: string; 
  public get passwordSent() {
    return this.getStringAttribute('password_sent');
  }
  public set passwordSent(value: string) {
    this._passwordSent = value;
  }
  public resetPasswordSent() {
    this._passwordSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordSentInput() {
    return this._passwordSent;
  }

  // registration_complete - computed: true, optional: true, required: false
  private _registrationComplete?: string; 
  public get registrationComplete() {
    return this.getStringAttribute('registration_complete');
  }
  public set registrationComplete(value: string) {
    this._registrationComplete = value;
  }
  public resetRegistrationComplete() {
    this._registrationComplete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registrationCompleteInput() {
    return this._registrationComplete;
  }

  // registration_send - computed: true, optional: true, required: false
  private _registrationSend?: string; 
  public get registrationSend() {
    return this.getStringAttribute('registration_send');
  }
  public set registrationSend(value: string) {
    this._registrationSend = value;
  }
  public resetRegistrationSend() {
    this._registrationSend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registrationSendInput() {
    return this._registrationSend;
  }

  // registration_sent - computed: true, optional: true, required: false
  private _registrationSent?: string; 
  public get registrationSent() {
    return this.getStringAttribute('registration_sent');
  }
  public set registrationSent(value: string) {
    this._registrationSent = value;
  }
  public resetRegistrationSent() {
    this._registrationSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registrationSentInput() {
    return this._registrationSent;
  }

  // registration_verification_required - computed: true, optional: true, required: false
  private _registrationVerificationRequired?: string; 
  public get registrationVerificationRequired() {
    return this.getStringAttribute('registration_verification_required');
  }
  public set registrationVerificationRequired(value: string) {
    this._registrationVerificationRequired = value;
  }
  public resetRegistrationVerificationRequired() {
    this._registrationVerificationRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registrationVerificationRequiredInput() {
    return this._registrationVerificationRequired;
  }

  // registration_verify - computed: true, optional: true, required: false
  private _registrationVerify?: string; 
  public get registrationVerify() {
    return this.getStringAttribute('registration_verify');
  }
  public set registrationVerify(value: string) {
    this._registrationVerify = value;
  }
  public resetRegistrationVerify() {
    this._registrationVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registrationVerifyInput() {
    return this._registrationVerify;
  }

  // samlv2_logout - computed: true, optional: true, required: false
  private _samlv2Logout?: string; 
  public get samlv2Logout() {
    return this.getStringAttribute('samlv2_logout');
  }
  public set samlv2Logout(value: string) {
    this._samlv2Logout = value;
  }
  public resetSamlv2Logout() {
    this._samlv2Logout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samlv2LogoutInput() {
    return this._samlv2Logout;
  }

  // source_theme_id - computed: false, optional: true, required: false
  private _sourceThemeId?: string; 
  public get sourceThemeId() {
    return this.getStringAttribute('source_theme_id');
  }
  public set sourceThemeId(value: string) {
    this._sourceThemeId = value;
  }
  public resetSourceThemeId() {
    this._sourceThemeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceThemeIdInput() {
    return this._sourceThemeId;
  }

  // stylesheet - computed: true, optional: true, required: false
  private _stylesheet?: string; 
  public get stylesheet() {
    return this.getStringAttribute('stylesheet');
  }
  public set stylesheet(value: string) {
    this._stylesheet = value;
  }
  public resetStylesheet() {
    this._stylesheet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stylesheetInput() {
    return this._stylesheet;
  }

  // unauthorized - computed: true, optional: true, required: false
  private _unauthorized?: string; 
  public get unauthorized() {
    return this.getStringAttribute('unauthorized');
  }
  public set unauthorized(value: string) {
    this._unauthorized = value;
  }
  public resetUnauthorized() {
    this._unauthorized = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unauthorizedInput() {
    return this._unauthorized;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_edit: cdktf.stringToTerraform(this._accountEdit),
      account_index: cdktf.stringToTerraform(this._accountIndex),
      account_two_factor_disable: cdktf.stringToTerraform(this._accountTwoFactorDisable),
      account_two_factor_enable: cdktf.stringToTerraform(this._accountTwoFactorEnable),
      account_two_factor_index: cdktf.stringToTerraform(this._accountTwoFactorIndex),
      account_webauthn_add: cdktf.stringToTerraform(this._accountWebauthnAdd),
      account_webauthn_delete: cdktf.stringToTerraform(this._accountWebauthnDelete),
      account_webauthn_index: cdktf.stringToTerraform(this._accountWebauthnIndex),
      default_messages: cdktf.stringToTerraform(this._defaultMessages),
      email_complete: cdktf.stringToTerraform(this._emailComplete),
      email_send: cdktf.stringToTerraform(this._emailSend),
      email_sent: cdktf.stringToTerraform(this._emailSent),
      email_verification_required: cdktf.stringToTerraform(this._emailVerificationRequired),
      email_verify: cdktf.stringToTerraform(this._emailVerify),
      helpers: cdktf.stringToTerraform(this._helpers),
      id: cdktf.stringToTerraform(this._id),
      index: cdktf.stringToTerraform(this._index),
      localized_messages: cdktf.hashMapper(cdktf.stringToTerraform)(this._localizedMessages),
      name: cdktf.stringToTerraform(this._name),
      oauth2_authorize: cdktf.stringToTerraform(this._oauth2Authorize),
      oauth2_authorized_not_registered: cdktf.stringToTerraform(this._oauth2AuthorizedNotRegistered),
      oauth2_child_registration_not_allowed: cdktf.stringToTerraform(this._oauth2ChildRegistrationNotAllowed),
      oauth2_child_registration_not_allowed_complete: cdktf.stringToTerraform(this._oauth2ChildRegistrationNotAllowedComplete),
      oauth2_complete_registration: cdktf.stringToTerraform(this._oauth2CompleteRegistration),
      oauth2_device: cdktf.stringToTerraform(this._oauth2Device),
      oauth2_device_complete: cdktf.stringToTerraform(this._oauth2DeviceComplete),
      oauth2_error: cdktf.stringToTerraform(this._oauth2Error),
      oauth2_logout: cdktf.stringToTerraform(this._oauth2Logout),
      oauth2_passwordless: cdktf.stringToTerraform(this._oauth2Passwordless),
      oauth2_register: cdktf.stringToTerraform(this._oauth2Register),
      oauth2_start_idp_link: cdktf.stringToTerraform(this._oauth2StartIdpLink),
      oauth2_two_factor: cdktf.stringToTerraform(this._oauth2TwoFactor),
      oauth2_two_factor_enable: cdktf.stringToTerraform(this._oauth2TwoFactorEnable),
      oauth2_two_factor_enable_complete: cdktf.stringToTerraform(this._oauth2TwoFactorEnableComplete),
      oauth2_two_factor_methods: cdktf.stringToTerraform(this._oauth2TwoFactorMethods),
      oauth2_wait: cdktf.stringToTerraform(this._oauth2Wait),
      oauth2_webauthn: cdktf.stringToTerraform(this._oauth2Webauthn),
      oauth2_webauthn_reauth: cdktf.stringToTerraform(this._oauth2WebauthnReauth),
      oauth2_webauthn_reauth_enable: cdktf.stringToTerraform(this._oauth2WebauthnReauthEnable),
      password_change: cdktf.stringToTerraform(this._passwordChange),
      password_complete: cdktf.stringToTerraform(this._passwordComplete),
      password_forgot: cdktf.stringToTerraform(this._passwordForgot),
      password_sent: cdktf.stringToTerraform(this._passwordSent),
      registration_complete: cdktf.stringToTerraform(this._registrationComplete),
      registration_send: cdktf.stringToTerraform(this._registrationSend),
      registration_sent: cdktf.stringToTerraform(this._registrationSent),
      registration_verification_required: cdktf.stringToTerraform(this._registrationVerificationRequired),
      registration_verify: cdktf.stringToTerraform(this._registrationVerify),
      samlv2_logout: cdktf.stringToTerraform(this._samlv2Logout),
      source_theme_id: cdktf.stringToTerraform(this._sourceThemeId),
      stylesheet: cdktf.stringToTerraform(this._stylesheet),
      unauthorized: cdktf.stringToTerraform(this._unauthorized),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_edit: {
        value: cdktf.stringToHclTerraform(this._accountEdit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      account_index: {
        value: cdktf.stringToHclTerraform(this._accountIndex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      account_two_factor_disable: {
        value: cdktf.stringToHclTerraform(this._accountTwoFactorDisable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      account_two_factor_enable: {
        value: cdktf.stringToHclTerraform(this._accountTwoFactorEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      account_two_factor_index: {
        value: cdktf.stringToHclTerraform(this._accountTwoFactorIndex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      account_webauthn_add: {
        value: cdktf.stringToHclTerraform(this._accountWebauthnAdd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      account_webauthn_delete: {
        value: cdktf.stringToHclTerraform(this._accountWebauthnDelete),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      account_webauthn_index: {
        value: cdktf.stringToHclTerraform(this._accountWebauthnIndex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_messages: {
        value: cdktf.stringToHclTerraform(this._defaultMessages),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      email_complete: {
        value: cdktf.stringToHclTerraform(this._emailComplete),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      email_send: {
        value: cdktf.stringToHclTerraform(this._emailSend),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      email_sent: {
        value: cdktf.stringToHclTerraform(this._emailSent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      email_verification_required: {
        value: cdktf.stringToHclTerraform(this._emailVerificationRequired),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      email_verify: {
        value: cdktf.stringToHclTerraform(this._emailVerify),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      helpers: {
        value: cdktf.stringToHclTerraform(this._helpers),
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
      index: {
        value: cdktf.stringToHclTerraform(this._index),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      localized_messages: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._localizedMessages),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oauth2_authorize: {
        value: cdktf.stringToHclTerraform(this._oauth2Authorize),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oauth2_authorized_not_registered: {
        value: cdktf.stringToHclTerraform(this._oauth2AuthorizedNotRegistered),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oauth2_child_registration_not_allowed: {
        value: cdktf.stringToHclTerraform(this._oauth2ChildRegistrationNotAllowed),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oauth2_child_registration_not_allowed_complete: {
        value: cdktf.stringToHclTerraform(this._oauth2ChildRegistrationNotAllowedComplete),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oauth2_complete_registration: {
        value: cdktf.stringToHclTerraform(this._oauth2CompleteRegistration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oauth2_device: {
        value: cdktf.stringToHclTerraform(this._oauth2Device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oauth2_device_complete: {
        value: cdktf.stringToHclTerraform(this._oauth2DeviceComplete),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oauth2_error: {
        value: cdktf.stringToHclTerraform(this._oauth2Error),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oauth2_logout: {
        value: cdktf.stringToHclTerraform(this._oauth2Logout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oauth2_passwordless: {
        value: cdktf.stringToHclTerraform(this._oauth2Passwordless),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oauth2_register: {
        value: cdktf.stringToHclTerraform(this._oauth2Register),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oauth2_start_idp_link: {
        value: cdktf.stringToHclTerraform(this._oauth2StartIdpLink),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oauth2_two_factor: {
        value: cdktf.stringToHclTerraform(this._oauth2TwoFactor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oauth2_two_factor_enable: {
        value: cdktf.stringToHclTerraform(this._oauth2TwoFactorEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oauth2_two_factor_enable_complete: {
        value: cdktf.stringToHclTerraform(this._oauth2TwoFactorEnableComplete),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oauth2_two_factor_methods: {
        value: cdktf.stringToHclTerraform(this._oauth2TwoFactorMethods),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oauth2_wait: {
        value: cdktf.stringToHclTerraform(this._oauth2Wait),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oauth2_webauthn: {
        value: cdktf.stringToHclTerraform(this._oauth2Webauthn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oauth2_webauthn_reauth: {
        value: cdktf.stringToHclTerraform(this._oauth2WebauthnReauth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oauth2_webauthn_reauth_enable: {
        value: cdktf.stringToHclTerraform(this._oauth2WebauthnReauthEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password_change: {
        value: cdktf.stringToHclTerraform(this._passwordChange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password_complete: {
        value: cdktf.stringToHclTerraform(this._passwordComplete),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password_forgot: {
        value: cdktf.stringToHclTerraform(this._passwordForgot),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password_sent: {
        value: cdktf.stringToHclTerraform(this._passwordSent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      registration_complete: {
        value: cdktf.stringToHclTerraform(this._registrationComplete),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      registration_send: {
        value: cdktf.stringToHclTerraform(this._registrationSend),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      registration_sent: {
        value: cdktf.stringToHclTerraform(this._registrationSent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      registration_verification_required: {
        value: cdktf.stringToHclTerraform(this._registrationVerificationRequired),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      registration_verify: {
        value: cdktf.stringToHclTerraform(this._registrationVerify),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      samlv2_logout: {
        value: cdktf.stringToHclTerraform(this._samlv2Logout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_theme_id: {
        value: cdktf.stringToHclTerraform(this._sourceThemeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stylesheet: {
        value: cdktf.stringToHclTerraform(this._stylesheet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unauthorized: {
        value: cdktf.stringToHclTerraform(this._unauthorized),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
