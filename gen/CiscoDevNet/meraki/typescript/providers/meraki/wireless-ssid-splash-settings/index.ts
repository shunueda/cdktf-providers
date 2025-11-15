// https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/wireless_ssid_splash_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WirelessSsidSplashSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether or not to allow simultaneous logins from different devices.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/wireless_ssid_splash_settings#allow_simultaneous_logins WirelessSsidSplashSettings#allow_simultaneous_logins}
  */
  readonly allowSimultaneousLogins?: boolean | cdktf.IResolvable;
  /**
  * How long a device can use a network for free.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/wireless_ssid_splash_settings#billing_free_access_duration_in_minutes WirelessSsidSplashSettings#billing_free_access_duration_in_minutes}
  */
  readonly billingFreeAccessDurationInMinutes?: number;
  /**
  * Whether or not free access is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/wireless_ssid_splash_settings#billing_free_access_enabled WirelessSsidSplashSettings#billing_free_access_enabled}
  */
  readonly billingFreeAccessEnabled?: boolean | cdktf.IResolvable;
  /**
  * Whether or not billing uses the fast login prepaid access option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/wireless_ssid_splash_settings#billing_prepaid_access_fast_login_enabled WirelessSsidSplashSettings#billing_prepaid_access_fast_login_enabled}
  */
  readonly billingPrepaidAccessFastLoginEnabled?: boolean | cdktf.IResolvable;
  /**
  * The email address that receives replies from clients.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/wireless_ssid_splash_settings#billing_reply_to_email_address WirelessSsidSplashSettings#billing_reply_to_email_address}
  */
  readonly billingReplyToEmailAddress?: string;
  /**
  * How restricted allowing traffic should be. If true, all traffic types are blocked until the splash page is acknowledged. If false, all non-HTTP traffic is allowed before the splash page is acknowledged.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/wireless_ssid_splash_settings#block_all_traffic_before_sign_on WirelessSsidSplashSettings#block_all_traffic_before_sign_on}
  */
  readonly blockAllTrafficBeforeSignOn?: boolean | cdktf.IResolvable;
  /**
  * How login attempts should be handled when the controller is unreachable. Can be either `open`, `restricted`, or `default`.
  *   - Choices: `default`, `open`, `restricted`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/wireless_ssid_splash_settings#controller_disconnection_behavior WirelessSsidSplashSettings#controller_disconnection_behavior}
  */
  readonly controllerDisconnectionBehavior?: string;
  /**
  * Duration in minutes of sponsored guest authorization. Must be between 1 and 60480 (6 weeks)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/wireless_ssid_splash_settings#guest_sponsorship_duration_in_minutes WirelessSsidSplashSettings#guest_sponsorship_duration_in_minutes}
  */
  readonly guestSponsorshipDurationInMinutes?: number;
  /**
  * Whether or not guests can specify how much time they are requesting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/wireless_ssid_splash_settings#guest_sponsorship_guest_can_request_timeframe WirelessSsidSplashSettings#guest_sponsorship_guest_can_request_timeframe}
  */
  readonly guestSponsorshipGuestCanRequestTimeframe?: boolean | cdktf.IResolvable;
  /**
  * Network ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/wireless_ssid_splash_settings#network_id WirelessSsidSplashSettings#network_id}
  */
  readonly networkId: string;
  /**
  * Wireless SSID number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/wireless_ssid_splash_settings#number WirelessSsidSplashSettings#number}
  */
  readonly number: string;
  /**
  * The custom redirect URL where the users will go after the splash page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/wireless_ssid_splash_settings#redirect_url WirelessSsidSplashSettings#redirect_url}
  */
  readonly redirectUrl?: string;
  /**
  * How created user accounts should be authorized. Must be included in: [admin, auto, self_email]
  *   - Choices: `admin`, `auto`, `self_email`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/wireless_ssid_splash_settings#self_registration_authorization_type WirelessSsidSplashSettings#self_registration_authorization_type}
  */
  readonly selfRegistrationAuthorizationType?: string;
  /**
  * Whether or not to allow users to create their own account on the network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/wireless_ssid_splash_settings#self_registration_enabled WirelessSsidSplashSettings#self_registration_enabled}
  */
  readonly selfRegistrationEnabled?: boolean | cdktf.IResolvable;
  /**
  * The system types that the Sentry enforces. Must be included in: `iOS, `Android`, `macOS`, and `Windows`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/wireless_ssid_splash_settings#sentry_enrollment_enforced_systems WirelessSsidSplashSettings#sentry_enrollment_enforced_systems}
  */
  readonly sentryEnrollmentEnforcedSystems?: string[];
  /**
  * The strength of the enforcement of selected system types. Must be one of: `focused`, `click-through`, and `strict`.
  *   - Choices: `click-through`, `focused`, `strict`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/wireless_ssid_splash_settings#sentry_enrollment_strength WirelessSsidSplashSettings#sentry_enrollment_strength}
  */
  readonly sentryEnrollmentStrength?: string;
  /**
  * The network ID of the Systems Manager network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/wireless_ssid_splash_settings#sentry_enrollment_systems_manager_network_id WirelessSsidSplashSettings#sentry_enrollment_systems_manager_network_id}
  */
  readonly sentryEnrollmentSystemsManagerNetworkId?: string;
  /**
  * The extension of the image file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/wireless_ssid_splash_settings#splash_image_extension WirelessSsidSplashSettings#splash_image_extension}
  */
  readonly splashImageExtension?: string;
  /**
  * The file contents (a base 64 encoded string) of your new image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/wireless_ssid_splash_settings#splash_image_image_contents WirelessSsidSplashSettings#splash_image_image_contents}
  */
  readonly splashImageImageContents?: string;
  /**
  * The format of the encoded contents. Supported formats are `png`, `gif`, and jpg`.
  *   - Choices: `gif`, `jpg`, `png`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/wireless_ssid_splash_settings#splash_image_image_format WirelessSsidSplashSettings#splash_image_image_format}
  */
  readonly splashImageImageFormat?: string;
  /**
  * The MD5 value of the image file. Setting this to null will remove the image from the splash page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/wireless_ssid_splash_settings#splash_image_md5 WirelessSsidSplashSettings#splash_image_md5}
  */
  readonly splashImageMd5?: string;
  /**
  * The extension of the logo file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/wireless_ssid_splash_settings#splash_logo_extension WirelessSsidSplashSettings#splash_logo_extension}
  */
  readonly splashLogoExtension?: string;
  /**
  * The file contents (a base 64 encoded string) of your new logo.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/wireless_ssid_splash_settings#splash_logo_image_contents WirelessSsidSplashSettings#splash_logo_image_contents}
  */
  readonly splashLogoImageContents?: string;
  /**
  * The format of the encoded contents. Supported formats are `png`, `gif`, and jpg`.
  *   - Choices: `gif`, `jpg`, `png`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/wireless_ssid_splash_settings#splash_logo_image_format WirelessSsidSplashSettings#splash_logo_image_format}
  */
  readonly splashLogoImageFormat?: string;
  /**
  * The MD5 value of the logo file. Setting this to null will remove the logo from the splash page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/wireless_ssid_splash_settings#splash_logo_md5 WirelessSsidSplashSettings#splash_logo_md5}
  */
  readonly splashLogoMd5?: string;
  /**
  * The extension of the prepaid front image file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/wireless_ssid_splash_settings#splash_prepaid_front_extension WirelessSsidSplashSettings#splash_prepaid_front_extension}
  */
  readonly splashPrepaidFrontExtension?: string;
  /**
  * The file contents (a base 64 encoded string) of your new prepaid front.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/wireless_ssid_splash_settings#splash_prepaid_front_image_contents WirelessSsidSplashSettings#splash_prepaid_front_image_contents}
  */
  readonly splashPrepaidFrontImageContents?: string;
  /**
  * The format of the encoded contents. Supported formats are `png`, `gif`, and jpg`.
  *   - Choices: `gif`, `jpg`, `png`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/wireless_ssid_splash_settings#splash_prepaid_front_image_format WirelessSsidSplashSettings#splash_prepaid_front_image_format}
  */
  readonly splashPrepaidFrontImageFormat?: string;
  /**
  * The MD5 value of the prepaid front image file. Setting this to null will remove the prepaid front from the splash page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/wireless_ssid_splash_settings#splash_prepaid_front_md5 WirelessSsidSplashSettings#splash_prepaid_front_md5}
  */
  readonly splashPrepaidFrontMd5?: string;
  /**
  * Splash timeout in minutes. This will determine how often users will see the splash page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/wireless_ssid_splash_settings#splash_timeout WirelessSsidSplashSettings#splash_timeout}
  */
  readonly splashTimeout?: number;
  /**
  * [optional] The custom splash URL of the click-through splash page. Note that the URL can be configured without necessarily being used. In order to enable the custom URL, see `useSplashUrl`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/wireless_ssid_splash_settings#splash_url WirelessSsidSplashSettings#splash_url}
  */
  readonly splashUrl?: string;
  /**
  * The id of the selected splash theme.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/wireless_ssid_splash_settings#theme_id WirelessSsidSplashSettings#theme_id}
  */
  readonly themeId?: string;
  /**
  * The Boolean indicating whether the the user will be redirected to the custom redirect URL after the splash page. A custom redirect URL must be set if this is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/wireless_ssid_splash_settings#use_redirect_url WirelessSsidSplashSettings#use_redirect_url}
  */
  readonly useRedirectUrl?: boolean | cdktf.IResolvable;
  /**
  * [optional] Boolean indicating whether the users will be redirected to the custom splash url. A custom splash URL must be set if this is true. Note that depending on your SSID`s access control settings, it may not be possible to use the custom splash URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/wireless_ssid_splash_settings#use_splash_url WirelessSsidSplashSettings#use_splash_url}
  */
  readonly useSplashUrl?: boolean | cdktf.IResolvable;
  /**
  * The welcome message for the users on the splash page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/wireless_ssid_splash_settings#welcome_message WirelessSsidSplashSettings#welcome_message}
  */
  readonly welcomeMessage?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/wireless_ssid_splash_settings meraki_wireless_ssid_splash_settings}
*/
export class WirelessSsidSplashSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_wireless_ssid_splash_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WirelessSsidSplashSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WirelessSsidSplashSettings to import
  * @param importFromId The id of the existing WirelessSsidSplashSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/wireless_ssid_splash_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WirelessSsidSplashSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_wireless_ssid_splash_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/wireless_ssid_splash_settings meraki_wireless_ssid_splash_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WirelessSsidSplashSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: WirelessSsidSplashSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_wireless_ssid_splash_settings',
      terraformGeneratorMetadata: {
        providerName: 'meraki',
        providerVersion: '1.8.0',
        providerVersionConstraint: '1.8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowSimultaneousLogins = config.allowSimultaneousLogins;
    this._billingFreeAccessDurationInMinutes = config.billingFreeAccessDurationInMinutes;
    this._billingFreeAccessEnabled = config.billingFreeAccessEnabled;
    this._billingPrepaidAccessFastLoginEnabled = config.billingPrepaidAccessFastLoginEnabled;
    this._billingReplyToEmailAddress = config.billingReplyToEmailAddress;
    this._blockAllTrafficBeforeSignOn = config.blockAllTrafficBeforeSignOn;
    this._controllerDisconnectionBehavior = config.controllerDisconnectionBehavior;
    this._guestSponsorshipDurationInMinutes = config.guestSponsorshipDurationInMinutes;
    this._guestSponsorshipGuestCanRequestTimeframe = config.guestSponsorshipGuestCanRequestTimeframe;
    this._networkId = config.networkId;
    this._number = config.number;
    this._redirectUrl = config.redirectUrl;
    this._selfRegistrationAuthorizationType = config.selfRegistrationAuthorizationType;
    this._selfRegistrationEnabled = config.selfRegistrationEnabled;
    this._sentryEnrollmentEnforcedSystems = config.sentryEnrollmentEnforcedSystems;
    this._sentryEnrollmentStrength = config.sentryEnrollmentStrength;
    this._sentryEnrollmentSystemsManagerNetworkId = config.sentryEnrollmentSystemsManagerNetworkId;
    this._splashImageExtension = config.splashImageExtension;
    this._splashImageImageContents = config.splashImageImageContents;
    this._splashImageImageFormat = config.splashImageImageFormat;
    this._splashImageMd5 = config.splashImageMd5;
    this._splashLogoExtension = config.splashLogoExtension;
    this._splashLogoImageContents = config.splashLogoImageContents;
    this._splashLogoImageFormat = config.splashLogoImageFormat;
    this._splashLogoMd5 = config.splashLogoMd5;
    this._splashPrepaidFrontExtension = config.splashPrepaidFrontExtension;
    this._splashPrepaidFrontImageContents = config.splashPrepaidFrontImageContents;
    this._splashPrepaidFrontImageFormat = config.splashPrepaidFrontImageFormat;
    this._splashPrepaidFrontMd5 = config.splashPrepaidFrontMd5;
    this._splashTimeout = config.splashTimeout;
    this._splashUrl = config.splashUrl;
    this._themeId = config.themeId;
    this._useRedirectUrl = config.useRedirectUrl;
    this._useSplashUrl = config.useSplashUrl;
    this._welcomeMessage = config.welcomeMessage;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_simultaneous_logins - computed: false, optional: true, required: false
  private _allowSimultaneousLogins?: boolean | cdktf.IResolvable; 
  public get allowSimultaneousLogins() {
    return this.getBooleanAttribute('allow_simultaneous_logins');
  }
  public set allowSimultaneousLogins(value: boolean | cdktf.IResolvable) {
    this._allowSimultaneousLogins = value;
  }
  public resetAllowSimultaneousLogins() {
    this._allowSimultaneousLogins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowSimultaneousLoginsInput() {
    return this._allowSimultaneousLogins;
  }

  // billing_free_access_duration_in_minutes - computed: false, optional: true, required: false
  private _billingFreeAccessDurationInMinutes?: number; 
  public get billingFreeAccessDurationInMinutes() {
    return this.getNumberAttribute('billing_free_access_duration_in_minutes');
  }
  public set billingFreeAccessDurationInMinutes(value: number) {
    this._billingFreeAccessDurationInMinutes = value;
  }
  public resetBillingFreeAccessDurationInMinutes() {
    this._billingFreeAccessDurationInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get billingFreeAccessDurationInMinutesInput() {
    return this._billingFreeAccessDurationInMinutes;
  }

  // billing_free_access_enabled - computed: false, optional: true, required: false
  private _billingFreeAccessEnabled?: boolean | cdktf.IResolvable; 
  public get billingFreeAccessEnabled() {
    return this.getBooleanAttribute('billing_free_access_enabled');
  }
  public set billingFreeAccessEnabled(value: boolean | cdktf.IResolvable) {
    this._billingFreeAccessEnabled = value;
  }
  public resetBillingFreeAccessEnabled() {
    this._billingFreeAccessEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get billingFreeAccessEnabledInput() {
    return this._billingFreeAccessEnabled;
  }

  // billing_prepaid_access_fast_login_enabled - computed: false, optional: true, required: false
  private _billingPrepaidAccessFastLoginEnabled?: boolean | cdktf.IResolvable; 
  public get billingPrepaidAccessFastLoginEnabled() {
    return this.getBooleanAttribute('billing_prepaid_access_fast_login_enabled');
  }
  public set billingPrepaidAccessFastLoginEnabled(value: boolean | cdktf.IResolvable) {
    this._billingPrepaidAccessFastLoginEnabled = value;
  }
  public resetBillingPrepaidAccessFastLoginEnabled() {
    this._billingPrepaidAccessFastLoginEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get billingPrepaidAccessFastLoginEnabledInput() {
    return this._billingPrepaidAccessFastLoginEnabled;
  }

  // billing_reply_to_email_address - computed: false, optional: true, required: false
  private _billingReplyToEmailAddress?: string; 
  public get billingReplyToEmailAddress() {
    return this.getStringAttribute('billing_reply_to_email_address');
  }
  public set billingReplyToEmailAddress(value: string) {
    this._billingReplyToEmailAddress = value;
  }
  public resetBillingReplyToEmailAddress() {
    this._billingReplyToEmailAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get billingReplyToEmailAddressInput() {
    return this._billingReplyToEmailAddress;
  }

  // block_all_traffic_before_sign_on - computed: false, optional: true, required: false
  private _blockAllTrafficBeforeSignOn?: boolean | cdktf.IResolvable; 
  public get blockAllTrafficBeforeSignOn() {
    return this.getBooleanAttribute('block_all_traffic_before_sign_on');
  }
  public set blockAllTrafficBeforeSignOn(value: boolean | cdktf.IResolvable) {
    this._blockAllTrafficBeforeSignOn = value;
  }
  public resetBlockAllTrafficBeforeSignOn() {
    this._blockAllTrafficBeforeSignOn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockAllTrafficBeforeSignOnInput() {
    return this._blockAllTrafficBeforeSignOn;
  }

  // controller_disconnection_behavior - computed: false, optional: true, required: false
  private _controllerDisconnectionBehavior?: string; 
  public get controllerDisconnectionBehavior() {
    return this.getStringAttribute('controller_disconnection_behavior');
  }
  public set controllerDisconnectionBehavior(value: string) {
    this._controllerDisconnectionBehavior = value;
  }
  public resetControllerDisconnectionBehavior() {
    this._controllerDisconnectionBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerDisconnectionBehaviorInput() {
    return this._controllerDisconnectionBehavior;
  }

  // guest_sponsorship_duration_in_minutes - computed: false, optional: true, required: false
  private _guestSponsorshipDurationInMinutes?: number; 
  public get guestSponsorshipDurationInMinutes() {
    return this.getNumberAttribute('guest_sponsorship_duration_in_minutes');
  }
  public set guestSponsorshipDurationInMinutes(value: number) {
    this._guestSponsorshipDurationInMinutes = value;
  }
  public resetGuestSponsorshipDurationInMinutes() {
    this._guestSponsorshipDurationInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guestSponsorshipDurationInMinutesInput() {
    return this._guestSponsorshipDurationInMinutes;
  }

  // guest_sponsorship_guest_can_request_timeframe - computed: false, optional: true, required: false
  private _guestSponsorshipGuestCanRequestTimeframe?: boolean | cdktf.IResolvable; 
  public get guestSponsorshipGuestCanRequestTimeframe() {
    return this.getBooleanAttribute('guest_sponsorship_guest_can_request_timeframe');
  }
  public set guestSponsorshipGuestCanRequestTimeframe(value: boolean | cdktf.IResolvable) {
    this._guestSponsorshipGuestCanRequestTimeframe = value;
  }
  public resetGuestSponsorshipGuestCanRequestTimeframe() {
    this._guestSponsorshipGuestCanRequestTimeframe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guestSponsorshipGuestCanRequestTimeframeInput() {
    return this._guestSponsorshipGuestCanRequestTimeframe;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // network_id - computed: false, optional: false, required: true
  private _networkId?: string; 
  public get networkId() {
    return this.getStringAttribute('network_id');
  }
  public set networkId(value: string) {
    this._networkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdInput() {
    return this._networkId;
  }

  // number - computed: false, optional: false, required: true
  private _number?: string; 
  public get number() {
    return this.getStringAttribute('number');
  }
  public set number(value: string) {
    this._number = value;
  }
  // Temporarily expose input value. Use with caution.
  public get numberInput() {
    return this._number;
  }

  // redirect_url - computed: false, optional: true, required: false
  private _redirectUrl?: string; 
  public get redirectUrl() {
    return this.getStringAttribute('redirect_url');
  }
  public set redirectUrl(value: string) {
    this._redirectUrl = value;
  }
  public resetRedirectUrl() {
    this._redirectUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectUrlInput() {
    return this._redirectUrl;
  }

  // self_registration_authorization_type - computed: false, optional: true, required: false
  private _selfRegistrationAuthorizationType?: string; 
  public get selfRegistrationAuthorizationType() {
    return this.getStringAttribute('self_registration_authorization_type');
  }
  public set selfRegistrationAuthorizationType(value: string) {
    this._selfRegistrationAuthorizationType = value;
  }
  public resetSelfRegistrationAuthorizationType() {
    this._selfRegistrationAuthorizationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selfRegistrationAuthorizationTypeInput() {
    return this._selfRegistrationAuthorizationType;
  }

  // self_registration_enabled - computed: false, optional: true, required: false
  private _selfRegistrationEnabled?: boolean | cdktf.IResolvable; 
  public get selfRegistrationEnabled() {
    return this.getBooleanAttribute('self_registration_enabled');
  }
  public set selfRegistrationEnabled(value: boolean | cdktf.IResolvable) {
    this._selfRegistrationEnabled = value;
  }
  public resetSelfRegistrationEnabled() {
    this._selfRegistrationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selfRegistrationEnabledInput() {
    return this._selfRegistrationEnabled;
  }

  // sentry_enrollment_enforced_systems - computed: false, optional: true, required: false
  private _sentryEnrollmentEnforcedSystems?: string[]; 
  public get sentryEnrollmentEnforcedSystems() {
    return cdktf.Fn.tolist(this.getListAttribute('sentry_enrollment_enforced_systems'));
  }
  public set sentryEnrollmentEnforcedSystems(value: string[]) {
    this._sentryEnrollmentEnforcedSystems = value;
  }
  public resetSentryEnrollmentEnforcedSystems() {
    this._sentryEnrollmentEnforcedSystems = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sentryEnrollmentEnforcedSystemsInput() {
    return this._sentryEnrollmentEnforcedSystems;
  }

  // sentry_enrollment_strength - computed: false, optional: true, required: false
  private _sentryEnrollmentStrength?: string; 
  public get sentryEnrollmentStrength() {
    return this.getStringAttribute('sentry_enrollment_strength');
  }
  public set sentryEnrollmentStrength(value: string) {
    this._sentryEnrollmentStrength = value;
  }
  public resetSentryEnrollmentStrength() {
    this._sentryEnrollmentStrength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sentryEnrollmentStrengthInput() {
    return this._sentryEnrollmentStrength;
  }

  // sentry_enrollment_systems_manager_network_id - computed: false, optional: true, required: false
  private _sentryEnrollmentSystemsManagerNetworkId?: string; 
  public get sentryEnrollmentSystemsManagerNetworkId() {
    return this.getStringAttribute('sentry_enrollment_systems_manager_network_id');
  }
  public set sentryEnrollmentSystemsManagerNetworkId(value: string) {
    this._sentryEnrollmentSystemsManagerNetworkId = value;
  }
  public resetSentryEnrollmentSystemsManagerNetworkId() {
    this._sentryEnrollmentSystemsManagerNetworkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sentryEnrollmentSystemsManagerNetworkIdInput() {
    return this._sentryEnrollmentSystemsManagerNetworkId;
  }

  // splash_image_extension - computed: false, optional: true, required: false
  private _splashImageExtension?: string; 
  public get splashImageExtension() {
    return this.getStringAttribute('splash_image_extension');
  }
  public set splashImageExtension(value: string) {
    this._splashImageExtension = value;
  }
  public resetSplashImageExtension() {
    this._splashImageExtension = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splashImageExtensionInput() {
    return this._splashImageExtension;
  }

  // splash_image_image_contents - computed: false, optional: true, required: false
  private _splashImageImageContents?: string; 
  public get splashImageImageContents() {
    return this.getStringAttribute('splash_image_image_contents');
  }
  public set splashImageImageContents(value: string) {
    this._splashImageImageContents = value;
  }
  public resetSplashImageImageContents() {
    this._splashImageImageContents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splashImageImageContentsInput() {
    return this._splashImageImageContents;
  }

  // splash_image_image_format - computed: false, optional: true, required: false
  private _splashImageImageFormat?: string; 
  public get splashImageImageFormat() {
    return this.getStringAttribute('splash_image_image_format');
  }
  public set splashImageImageFormat(value: string) {
    this._splashImageImageFormat = value;
  }
  public resetSplashImageImageFormat() {
    this._splashImageImageFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splashImageImageFormatInput() {
    return this._splashImageImageFormat;
  }

  // splash_image_md5 - computed: false, optional: true, required: false
  private _splashImageMd5?: string; 
  public get splashImageMd5() {
    return this.getStringAttribute('splash_image_md5');
  }
  public set splashImageMd5(value: string) {
    this._splashImageMd5 = value;
  }
  public resetSplashImageMd5() {
    this._splashImageMd5 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splashImageMd5Input() {
    return this._splashImageMd5;
  }

  // splash_logo_extension - computed: false, optional: true, required: false
  private _splashLogoExtension?: string; 
  public get splashLogoExtension() {
    return this.getStringAttribute('splash_logo_extension');
  }
  public set splashLogoExtension(value: string) {
    this._splashLogoExtension = value;
  }
  public resetSplashLogoExtension() {
    this._splashLogoExtension = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splashLogoExtensionInput() {
    return this._splashLogoExtension;
  }

  // splash_logo_image_contents - computed: false, optional: true, required: false
  private _splashLogoImageContents?: string; 
  public get splashLogoImageContents() {
    return this.getStringAttribute('splash_logo_image_contents');
  }
  public set splashLogoImageContents(value: string) {
    this._splashLogoImageContents = value;
  }
  public resetSplashLogoImageContents() {
    this._splashLogoImageContents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splashLogoImageContentsInput() {
    return this._splashLogoImageContents;
  }

  // splash_logo_image_format - computed: false, optional: true, required: false
  private _splashLogoImageFormat?: string; 
  public get splashLogoImageFormat() {
    return this.getStringAttribute('splash_logo_image_format');
  }
  public set splashLogoImageFormat(value: string) {
    this._splashLogoImageFormat = value;
  }
  public resetSplashLogoImageFormat() {
    this._splashLogoImageFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splashLogoImageFormatInput() {
    return this._splashLogoImageFormat;
  }

  // splash_logo_md5 - computed: false, optional: true, required: false
  private _splashLogoMd5?: string; 
  public get splashLogoMd5() {
    return this.getStringAttribute('splash_logo_md5');
  }
  public set splashLogoMd5(value: string) {
    this._splashLogoMd5 = value;
  }
  public resetSplashLogoMd5() {
    this._splashLogoMd5 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splashLogoMd5Input() {
    return this._splashLogoMd5;
  }

  // splash_prepaid_front_extension - computed: false, optional: true, required: false
  private _splashPrepaidFrontExtension?: string; 
  public get splashPrepaidFrontExtension() {
    return this.getStringAttribute('splash_prepaid_front_extension');
  }
  public set splashPrepaidFrontExtension(value: string) {
    this._splashPrepaidFrontExtension = value;
  }
  public resetSplashPrepaidFrontExtension() {
    this._splashPrepaidFrontExtension = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splashPrepaidFrontExtensionInput() {
    return this._splashPrepaidFrontExtension;
  }

  // splash_prepaid_front_image_contents - computed: false, optional: true, required: false
  private _splashPrepaidFrontImageContents?: string; 
  public get splashPrepaidFrontImageContents() {
    return this.getStringAttribute('splash_prepaid_front_image_contents');
  }
  public set splashPrepaidFrontImageContents(value: string) {
    this._splashPrepaidFrontImageContents = value;
  }
  public resetSplashPrepaidFrontImageContents() {
    this._splashPrepaidFrontImageContents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splashPrepaidFrontImageContentsInput() {
    return this._splashPrepaidFrontImageContents;
  }

  // splash_prepaid_front_image_format - computed: false, optional: true, required: false
  private _splashPrepaidFrontImageFormat?: string; 
  public get splashPrepaidFrontImageFormat() {
    return this.getStringAttribute('splash_prepaid_front_image_format');
  }
  public set splashPrepaidFrontImageFormat(value: string) {
    this._splashPrepaidFrontImageFormat = value;
  }
  public resetSplashPrepaidFrontImageFormat() {
    this._splashPrepaidFrontImageFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splashPrepaidFrontImageFormatInput() {
    return this._splashPrepaidFrontImageFormat;
  }

  // splash_prepaid_front_md5 - computed: false, optional: true, required: false
  private _splashPrepaidFrontMd5?: string; 
  public get splashPrepaidFrontMd5() {
    return this.getStringAttribute('splash_prepaid_front_md5');
  }
  public set splashPrepaidFrontMd5(value: string) {
    this._splashPrepaidFrontMd5 = value;
  }
  public resetSplashPrepaidFrontMd5() {
    this._splashPrepaidFrontMd5 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splashPrepaidFrontMd5Input() {
    return this._splashPrepaidFrontMd5;
  }

  // splash_timeout - computed: false, optional: true, required: false
  private _splashTimeout?: number; 
  public get splashTimeout() {
    return this.getNumberAttribute('splash_timeout');
  }
  public set splashTimeout(value: number) {
    this._splashTimeout = value;
  }
  public resetSplashTimeout() {
    this._splashTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splashTimeoutInput() {
    return this._splashTimeout;
  }

  // splash_url - computed: false, optional: true, required: false
  private _splashUrl?: string; 
  public get splashUrl() {
    return this.getStringAttribute('splash_url');
  }
  public set splashUrl(value: string) {
    this._splashUrl = value;
  }
  public resetSplashUrl() {
    this._splashUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splashUrlInput() {
    return this._splashUrl;
  }

  // theme_id - computed: false, optional: true, required: false
  private _themeId?: string; 
  public get themeId() {
    return this.getStringAttribute('theme_id');
  }
  public set themeId(value: string) {
    this._themeId = value;
  }
  public resetThemeId() {
    this._themeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get themeIdInput() {
    return this._themeId;
  }

  // use_redirect_url - computed: false, optional: true, required: false
  private _useRedirectUrl?: boolean | cdktf.IResolvable; 
  public get useRedirectUrl() {
    return this.getBooleanAttribute('use_redirect_url');
  }
  public set useRedirectUrl(value: boolean | cdktf.IResolvable) {
    this._useRedirectUrl = value;
  }
  public resetUseRedirectUrl() {
    this._useRedirectUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useRedirectUrlInput() {
    return this._useRedirectUrl;
  }

  // use_splash_url - computed: false, optional: true, required: false
  private _useSplashUrl?: boolean | cdktf.IResolvable; 
  public get useSplashUrl() {
    return this.getBooleanAttribute('use_splash_url');
  }
  public set useSplashUrl(value: boolean | cdktf.IResolvable) {
    this._useSplashUrl = value;
  }
  public resetUseSplashUrl() {
    this._useSplashUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useSplashUrlInput() {
    return this._useSplashUrl;
  }

  // welcome_message - computed: false, optional: true, required: false
  private _welcomeMessage?: string; 
  public get welcomeMessage() {
    return this.getStringAttribute('welcome_message');
  }
  public set welcomeMessage(value: string) {
    this._welcomeMessage = value;
  }
  public resetWelcomeMessage() {
    this._welcomeMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get welcomeMessageInput() {
    return this._welcomeMessage;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_simultaneous_logins: cdktf.booleanToTerraform(this._allowSimultaneousLogins),
      billing_free_access_duration_in_minutes: cdktf.numberToTerraform(this._billingFreeAccessDurationInMinutes),
      billing_free_access_enabled: cdktf.booleanToTerraform(this._billingFreeAccessEnabled),
      billing_prepaid_access_fast_login_enabled: cdktf.booleanToTerraform(this._billingPrepaidAccessFastLoginEnabled),
      billing_reply_to_email_address: cdktf.stringToTerraform(this._billingReplyToEmailAddress),
      block_all_traffic_before_sign_on: cdktf.booleanToTerraform(this._blockAllTrafficBeforeSignOn),
      controller_disconnection_behavior: cdktf.stringToTerraform(this._controllerDisconnectionBehavior),
      guest_sponsorship_duration_in_minutes: cdktf.numberToTerraform(this._guestSponsorshipDurationInMinutes),
      guest_sponsorship_guest_can_request_timeframe: cdktf.booleanToTerraform(this._guestSponsorshipGuestCanRequestTimeframe),
      network_id: cdktf.stringToTerraform(this._networkId),
      number: cdktf.stringToTerraform(this._number),
      redirect_url: cdktf.stringToTerraform(this._redirectUrl),
      self_registration_authorization_type: cdktf.stringToTerraform(this._selfRegistrationAuthorizationType),
      self_registration_enabled: cdktf.booleanToTerraform(this._selfRegistrationEnabled),
      sentry_enrollment_enforced_systems: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sentryEnrollmentEnforcedSystems),
      sentry_enrollment_strength: cdktf.stringToTerraform(this._sentryEnrollmentStrength),
      sentry_enrollment_systems_manager_network_id: cdktf.stringToTerraform(this._sentryEnrollmentSystemsManagerNetworkId),
      splash_image_extension: cdktf.stringToTerraform(this._splashImageExtension),
      splash_image_image_contents: cdktf.stringToTerraform(this._splashImageImageContents),
      splash_image_image_format: cdktf.stringToTerraform(this._splashImageImageFormat),
      splash_image_md5: cdktf.stringToTerraform(this._splashImageMd5),
      splash_logo_extension: cdktf.stringToTerraform(this._splashLogoExtension),
      splash_logo_image_contents: cdktf.stringToTerraform(this._splashLogoImageContents),
      splash_logo_image_format: cdktf.stringToTerraform(this._splashLogoImageFormat),
      splash_logo_md5: cdktf.stringToTerraform(this._splashLogoMd5),
      splash_prepaid_front_extension: cdktf.stringToTerraform(this._splashPrepaidFrontExtension),
      splash_prepaid_front_image_contents: cdktf.stringToTerraform(this._splashPrepaidFrontImageContents),
      splash_prepaid_front_image_format: cdktf.stringToTerraform(this._splashPrepaidFrontImageFormat),
      splash_prepaid_front_md5: cdktf.stringToTerraform(this._splashPrepaidFrontMd5),
      splash_timeout: cdktf.numberToTerraform(this._splashTimeout),
      splash_url: cdktf.stringToTerraform(this._splashUrl),
      theme_id: cdktf.stringToTerraform(this._themeId),
      use_redirect_url: cdktf.booleanToTerraform(this._useRedirectUrl),
      use_splash_url: cdktf.booleanToTerraform(this._useSplashUrl),
      welcome_message: cdktf.stringToTerraform(this._welcomeMessage),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_simultaneous_logins: {
        value: cdktf.booleanToHclTerraform(this._allowSimultaneousLogins),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      billing_free_access_duration_in_minutes: {
        value: cdktf.numberToHclTerraform(this._billingFreeAccessDurationInMinutes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      billing_free_access_enabled: {
        value: cdktf.booleanToHclTerraform(this._billingFreeAccessEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      billing_prepaid_access_fast_login_enabled: {
        value: cdktf.booleanToHclTerraform(this._billingPrepaidAccessFastLoginEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      billing_reply_to_email_address: {
        value: cdktf.stringToHclTerraform(this._billingReplyToEmailAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      block_all_traffic_before_sign_on: {
        value: cdktf.booleanToHclTerraform(this._blockAllTrafficBeforeSignOn),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      controller_disconnection_behavior: {
        value: cdktf.stringToHclTerraform(this._controllerDisconnectionBehavior),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      guest_sponsorship_duration_in_minutes: {
        value: cdktf.numberToHclTerraform(this._guestSponsorshipDurationInMinutes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      guest_sponsorship_guest_can_request_timeframe: {
        value: cdktf.booleanToHclTerraform(this._guestSponsorshipGuestCanRequestTimeframe),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      network_id: {
        value: cdktf.stringToHclTerraform(this._networkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      number: {
        value: cdktf.stringToHclTerraform(this._number),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      redirect_url: {
        value: cdktf.stringToHclTerraform(this._redirectUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      self_registration_authorization_type: {
        value: cdktf.stringToHclTerraform(this._selfRegistrationAuthorizationType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      self_registration_enabled: {
        value: cdktf.booleanToHclTerraform(this._selfRegistrationEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sentry_enrollment_enforced_systems: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sentryEnrollmentEnforcedSystems),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      sentry_enrollment_strength: {
        value: cdktf.stringToHclTerraform(this._sentryEnrollmentStrength),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sentry_enrollment_systems_manager_network_id: {
        value: cdktf.stringToHclTerraform(this._sentryEnrollmentSystemsManagerNetworkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      splash_image_extension: {
        value: cdktf.stringToHclTerraform(this._splashImageExtension),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      splash_image_image_contents: {
        value: cdktf.stringToHclTerraform(this._splashImageImageContents),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      splash_image_image_format: {
        value: cdktf.stringToHclTerraform(this._splashImageImageFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      splash_image_md5: {
        value: cdktf.stringToHclTerraform(this._splashImageMd5),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      splash_logo_extension: {
        value: cdktf.stringToHclTerraform(this._splashLogoExtension),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      splash_logo_image_contents: {
        value: cdktf.stringToHclTerraform(this._splashLogoImageContents),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      splash_logo_image_format: {
        value: cdktf.stringToHclTerraform(this._splashLogoImageFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      splash_logo_md5: {
        value: cdktf.stringToHclTerraform(this._splashLogoMd5),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      splash_prepaid_front_extension: {
        value: cdktf.stringToHclTerraform(this._splashPrepaidFrontExtension),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      splash_prepaid_front_image_contents: {
        value: cdktf.stringToHclTerraform(this._splashPrepaidFrontImageContents),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      splash_prepaid_front_image_format: {
        value: cdktf.stringToHclTerraform(this._splashPrepaidFrontImageFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      splash_prepaid_front_md5: {
        value: cdktf.stringToHclTerraform(this._splashPrepaidFrontMd5),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      splash_timeout: {
        value: cdktf.numberToHclTerraform(this._splashTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      splash_url: {
        value: cdktf.stringToHclTerraform(this._splashUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      theme_id: {
        value: cdktf.stringToHclTerraform(this._themeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_redirect_url: {
        value: cdktf.booleanToHclTerraform(this._useRedirectUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_splash_url: {
        value: cdktf.booleanToHclTerraform(this._useSplashUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      welcome_message: {
        value: cdktf.stringToHclTerraform(this._welcomeMessage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
