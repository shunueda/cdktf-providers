// https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/wireless_ssid_splash_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMerakiWirelessSsidSplashSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Network ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/wireless_ssid_splash_settings#network_id DataMerakiWirelessSsidSplashSettings#network_id}
  */
  readonly networkId: string;
  /**
  * Wireless SSID number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/wireless_ssid_splash_settings#number DataMerakiWirelessSsidSplashSettings#number}
  */
  readonly number: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/wireless_ssid_splash_settings meraki_wireless_ssid_splash_settings}
*/
export class DataMerakiWirelessSsidSplashSettings extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_wireless_ssid_splash_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMerakiWirelessSsidSplashSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMerakiWirelessSsidSplashSettings to import
  * @param importFromId The id of the existing DataMerakiWirelessSsidSplashSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/wireless_ssid_splash_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMerakiWirelessSsidSplashSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_wireless_ssid_splash_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/wireless_ssid_splash_settings meraki_wireless_ssid_splash_settings} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMerakiWirelessSsidSplashSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: DataMerakiWirelessSsidSplashSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_wireless_ssid_splash_settings',
      terraformGeneratorMetadata: {
        providerName: 'meraki',
        providerVersion: '1.7.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._networkId = config.networkId;
    this._number = config.number;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_simultaneous_logins - computed: true, optional: false, required: false
  public get allowSimultaneousLogins() {
    return this.getBooleanAttribute('allow_simultaneous_logins');
  }

  // billing_free_access_duration_in_minutes - computed: true, optional: false, required: false
  public get billingFreeAccessDurationInMinutes() {
    return this.getNumberAttribute('billing_free_access_duration_in_minutes');
  }

  // billing_free_access_enabled - computed: true, optional: false, required: false
  public get billingFreeAccessEnabled() {
    return this.getBooleanAttribute('billing_free_access_enabled');
  }

  // billing_prepaid_access_fast_login_enabled - computed: true, optional: false, required: false
  public get billingPrepaidAccessFastLoginEnabled() {
    return this.getBooleanAttribute('billing_prepaid_access_fast_login_enabled');
  }

  // billing_reply_to_email_address - computed: true, optional: false, required: false
  public get billingReplyToEmailAddress() {
    return this.getStringAttribute('billing_reply_to_email_address');
  }

  // block_all_traffic_before_sign_on - computed: true, optional: false, required: false
  public get blockAllTrafficBeforeSignOn() {
    return this.getBooleanAttribute('block_all_traffic_before_sign_on');
  }

  // controller_disconnection_behavior - computed: true, optional: false, required: false
  public get controllerDisconnectionBehavior() {
    return this.getStringAttribute('controller_disconnection_behavior');
  }

  // guest_sponsorship_duration_in_minutes - computed: true, optional: false, required: false
  public get guestSponsorshipDurationInMinutes() {
    return this.getNumberAttribute('guest_sponsorship_duration_in_minutes');
  }

  // guest_sponsorship_guest_can_request_timeframe - computed: true, optional: false, required: false
  public get guestSponsorshipGuestCanRequestTimeframe() {
    return this.getBooleanAttribute('guest_sponsorship_guest_can_request_timeframe');
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

  // redirect_url - computed: true, optional: false, required: false
  public get redirectUrl() {
    return this.getStringAttribute('redirect_url');
  }

  // self_registration_authorization_type - computed: true, optional: false, required: false
  public get selfRegistrationAuthorizationType() {
    return this.getStringAttribute('self_registration_authorization_type');
  }

  // self_registration_enabled - computed: true, optional: false, required: false
  public get selfRegistrationEnabled() {
    return this.getBooleanAttribute('self_registration_enabled');
  }

  // sentry_enrollment_enforced_systems - computed: true, optional: false, required: false
  public get sentryEnrollmentEnforcedSystems() {
    return cdktf.Fn.tolist(this.getListAttribute('sentry_enrollment_enforced_systems'));
  }

  // sentry_enrollment_strength - computed: true, optional: false, required: false
  public get sentryEnrollmentStrength() {
    return this.getStringAttribute('sentry_enrollment_strength');
  }

  // sentry_enrollment_systems_manager_network_id - computed: true, optional: false, required: false
  public get sentryEnrollmentSystemsManagerNetworkId() {
    return this.getStringAttribute('sentry_enrollment_systems_manager_network_id');
  }

  // splash_image_extension - computed: true, optional: false, required: false
  public get splashImageExtension() {
    return this.getStringAttribute('splash_image_extension');
  }

  // splash_image_image_contents - computed: true, optional: false, required: false
  public get splashImageImageContents() {
    return this.getStringAttribute('splash_image_image_contents');
  }

  // splash_image_image_format - computed: true, optional: false, required: false
  public get splashImageImageFormat() {
    return this.getStringAttribute('splash_image_image_format');
  }

  // splash_image_md5 - computed: true, optional: false, required: false
  public get splashImageMd5() {
    return this.getStringAttribute('splash_image_md5');
  }

  // splash_logo_extension - computed: true, optional: false, required: false
  public get splashLogoExtension() {
    return this.getStringAttribute('splash_logo_extension');
  }

  // splash_logo_image_contents - computed: true, optional: false, required: false
  public get splashLogoImageContents() {
    return this.getStringAttribute('splash_logo_image_contents');
  }

  // splash_logo_image_format - computed: true, optional: false, required: false
  public get splashLogoImageFormat() {
    return this.getStringAttribute('splash_logo_image_format');
  }

  // splash_logo_md5 - computed: true, optional: false, required: false
  public get splashLogoMd5() {
    return this.getStringAttribute('splash_logo_md5');
  }

  // splash_prepaid_front_extension - computed: true, optional: false, required: false
  public get splashPrepaidFrontExtension() {
    return this.getStringAttribute('splash_prepaid_front_extension');
  }

  // splash_prepaid_front_image_contents - computed: true, optional: false, required: false
  public get splashPrepaidFrontImageContents() {
    return this.getStringAttribute('splash_prepaid_front_image_contents');
  }

  // splash_prepaid_front_image_format - computed: true, optional: false, required: false
  public get splashPrepaidFrontImageFormat() {
    return this.getStringAttribute('splash_prepaid_front_image_format');
  }

  // splash_prepaid_front_md5 - computed: true, optional: false, required: false
  public get splashPrepaidFrontMd5() {
    return this.getStringAttribute('splash_prepaid_front_md5');
  }

  // splash_timeout - computed: true, optional: false, required: false
  public get splashTimeout() {
    return this.getNumberAttribute('splash_timeout');
  }

  // splash_url - computed: true, optional: false, required: false
  public get splashUrl() {
    return this.getStringAttribute('splash_url');
  }

  // theme_id - computed: true, optional: false, required: false
  public get themeId() {
    return this.getStringAttribute('theme_id');
  }

  // use_redirect_url - computed: true, optional: false, required: false
  public get useRedirectUrl() {
    return this.getBooleanAttribute('use_redirect_url');
  }

  // use_splash_url - computed: true, optional: false, required: false
  public get useSplashUrl() {
    return this.getBooleanAttribute('use_splash_url');
  }

  // welcome_message - computed: true, optional: false, required: false
  public get welcomeMessage() {
    return this.getStringAttribute('welcome_message');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      network_id: cdktf.stringToTerraform(this._networkId),
      number: cdktf.stringToTerraform(this._number),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
