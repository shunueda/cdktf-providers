// https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/end_user_notification
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EndUserNotificationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The custom frequency (in days) for showing the AUP to the end users. Valid range is 0 to 180.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/end_user_notification#aup_custom_frequency EndUserNotification#aup_custom_frequency}
  */
  readonly aupCustomFrequency?: number;
  /**
  * Specifies which day of the week or month the AUP is shown for users when aupFrequency is set. Valid range is 0 to 31.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/end_user_notification#aup_day_offset EndUserNotification#aup_day_offset}
  */
  readonly aupDayOffset?: number;
  /**
  * The frequency at which the Acceptable Use Policy (AUP) is shown to the end users
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/end_user_notification#aup_frequency EndUserNotification#aup_frequency}
  */
  readonly aupFrequency?: string;
  /**
  * The acceptable use statement that is shown in the AUP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/end_user_notification#aup_message EndUserNotification#aup_message}
  */
  readonly aupMessage?: string;
  /**
  * The time interval at which the caution notification is shown when users continue browsing a restricted site.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/end_user_notification#caution_again_after EndUserNotification#caution_again_after}
  */
  readonly cautionAgainAfter?: number;
  /**
  * The custom message that appears in the caution notification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/end_user_notification#caution_custom_text EndUserNotification#caution_custom_text}
  */
  readonly cautionCustomText?: string;
  /**
  * Specifies whether to display the caution notification at a specific time interval for URLs in the Miscellaneous or Unknown category.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/end_user_notification#caution_per_domain EndUserNotification#caution_per_domain}
  */
  readonly cautionPerDomain?: boolean | cdktf.IResolvable;
  /**
  * The custom text shown in the EUN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/end_user_notification#custom_text EndUserNotification#custom_text}
  */
  readonly customText?: string;
  /**
  * A Boolean value indicating whether your organization's logo appears in the EUN or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/end_user_notification#display_company_logo EndUserNotification#display_company_logo}
  */
  readonly displayCompanyLogo?: boolean | cdktf.IResolvable;
  /**
  * A Boolean value indicating whether the organization's name appears in the EUN or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/end_user_notification#display_company_name EndUserNotification#display_company_name}
  */
  readonly displayCompanyName?: boolean | cdktf.IResolvable;
  /**
  * A Boolean value indicating whether or not the reason for cautioning or blocking access to a site, file, or application is shown when the respective notification is triggered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/end_user_notification#display_reason EndUserNotification#display_reason}
  */
  readonly displayReason?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/end_user_notification#id EndUserNotification#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The message that appears in the IdP Proxy notification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/end_user_notification#idp_proxy_notification_text EndUserNotification#idp_proxy_notification_text}
  */
  readonly idpProxyNotificationText?: string;
  /**
  * The type of EUN as default or custom
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/end_user_notification#notification_type EndUserNotification#notification_type}
  */
  readonly notificationType?: string;
  /**
  * The URL of the organization's policy page. This field is required for the default notification type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/end_user_notification#org_policy_link EndUserNotification#org_policy_link}
  */
  readonly orgPolicyLink?: string;
  /**
  * The message that appears in the quarantine notification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/end_user_notification#quarantine_custom_notification_text EndUserNotification#quarantine_custom_notification_text}
  */
  readonly quarantineCustomNotificationText?: string;
  /**
  * The redirect URL for the external site hosting the EUN specified when the custom notification type is selected
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/end_user_notification#redirect_url EndUserNotification#redirect_url}
  */
  readonly redirectUrl?: string;
  /**
  * Value indicating whether or not to include the ECS option in all DNS queries, originating from all locations and remote users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/end_user_notification#security_review_custom_location EndUserNotification#security_review_custom_location}
  */
  readonly securityReviewCustomLocation?: string;
  /**
  * A Boolean value indicating whether the Security Violation notification is enabled or disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/end_user_notification#security_review_enabled EndUserNotification#security_review_enabled}
  */
  readonly securityReviewEnabled?: boolean | cdktf.IResolvable;
  /**
  * A Boolean value indicating whether users' review requests for blocked URLs are submitted to the Zscaler service (i.e., Security Cloud) or a custom location.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/end_user_notification#security_review_submit_to_security_cloud EndUserNotification#security_review_submit_to_security_cloud}
  */
  readonly securityReviewSubmitToSecurityCloud?: boolean | cdktf.IResolvable;
  /**
  * The message that appears in the Security Violation notification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/end_user_notification#security_review_text EndUserNotification#security_review_text}
  */
  readonly securityReviewText?: string;
  /**
  * The email address for writing to IT Support
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/end_user_notification#support_email EndUserNotification#support_email}
  */
  readonly supportEmail?: string;
  /**
  * The phone number for contacting IT Support
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/end_user_notification#support_phone EndUserNotification#support_phone}
  */
  readonly supportPhone?: string;
  /**
  * A custom URL location where users' review requests for blocked URLs are sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/end_user_notification#url_cat_review_custom_location EndUserNotification#url_cat_review_custom_location}
  */
  readonly urlCatReviewCustomLocation?: string;
  /**
  * A Boolean value indicating whether the URL Categorization notification is enabled or disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/end_user_notification#url_cat_review_enabled EndUserNotification#url_cat_review_enabled}
  */
  readonly urlCatReviewEnabled?: boolean | cdktf.IResolvable;
  /**
  * A Boolean value indicating whether users' review requests for possibly misclassified URLs are submitted to the Zscaler service (i.e., Security Cloud) or a custom location.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/end_user_notification#url_cat_review_submit_to_security_cloud EndUserNotification#url_cat_review_submit_to_security_cloud}
  */
  readonly urlCatReviewSubmitToSecurityCloud?: boolean | cdktf.IResolvable;
  /**
  * The message that appears in the URL Categorization notification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/end_user_notification#url_cat_review_text EndUserNotification#url_cat_review_text}
  */
  readonly urlCatReviewText?: string;
  /**
  * A custom URL location where users' review requests for the web DLP policy violation are sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/end_user_notification#web_dlp_review_custom_location EndUserNotification#web_dlp_review_custom_location}
  */
  readonly webDlpReviewCustomLocation?: string;
  /**
  * A Boolean value indicating whether the Web DLP Violation notification is enabled or disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/end_user_notification#web_dlp_review_enabled EndUserNotification#web_dlp_review_enabled}
  */
  readonly webDlpReviewEnabled?: boolean | cdktf.IResolvable;
  /**
  * A Boolean value indicating whether users' review requests for web DLP policy violation are submitted to the Zscaler service (i.e., Security Cloud) or a custom location.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/end_user_notification#web_dlp_review_submit_to_security_cloud EndUserNotification#web_dlp_review_submit_to_security_cloud}
  */
  readonly webDlpReviewSubmitToSecurityCloud?: boolean | cdktf.IResolvable;
  /**
  * The message that appears in the Web DLP Violation notification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/end_user_notification#web_dlp_review_text EndUserNotification#web_dlp_review_text}
  */
  readonly webDlpReviewText?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/end_user_notification zia_end_user_notification}
*/
export class EndUserNotification extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zia_end_user_notification";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EndUserNotification resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EndUserNotification to import
  * @param importFromId The id of the existing EndUserNotification that should be imported. Refer to the {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/end_user_notification#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EndUserNotification to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zia_end_user_notification", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zscaler/zia/4.6.0/docs/resources/end_user_notification zia_end_user_notification} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EndUserNotificationConfig = {}
  */
  public constructor(scope: Construct, id: string, config: EndUserNotificationConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'zia_end_user_notification',
      terraformGeneratorMetadata: {
        providerName: 'zia',
        providerVersion: '4.6.0',
        providerVersionConstraint: '4.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._aupCustomFrequency = config.aupCustomFrequency;
    this._aupDayOffset = config.aupDayOffset;
    this._aupFrequency = config.aupFrequency;
    this._aupMessage = config.aupMessage;
    this._cautionAgainAfter = config.cautionAgainAfter;
    this._cautionCustomText = config.cautionCustomText;
    this._cautionPerDomain = config.cautionPerDomain;
    this._customText = config.customText;
    this._displayCompanyLogo = config.displayCompanyLogo;
    this._displayCompanyName = config.displayCompanyName;
    this._displayReason = config.displayReason;
    this._id = config.id;
    this._idpProxyNotificationText = config.idpProxyNotificationText;
    this._notificationType = config.notificationType;
    this._orgPolicyLink = config.orgPolicyLink;
    this._quarantineCustomNotificationText = config.quarantineCustomNotificationText;
    this._redirectUrl = config.redirectUrl;
    this._securityReviewCustomLocation = config.securityReviewCustomLocation;
    this._securityReviewEnabled = config.securityReviewEnabled;
    this._securityReviewSubmitToSecurityCloud = config.securityReviewSubmitToSecurityCloud;
    this._securityReviewText = config.securityReviewText;
    this._supportEmail = config.supportEmail;
    this._supportPhone = config.supportPhone;
    this._urlCatReviewCustomLocation = config.urlCatReviewCustomLocation;
    this._urlCatReviewEnabled = config.urlCatReviewEnabled;
    this._urlCatReviewSubmitToSecurityCloud = config.urlCatReviewSubmitToSecurityCloud;
    this._urlCatReviewText = config.urlCatReviewText;
    this._webDlpReviewCustomLocation = config.webDlpReviewCustomLocation;
    this._webDlpReviewEnabled = config.webDlpReviewEnabled;
    this._webDlpReviewSubmitToSecurityCloud = config.webDlpReviewSubmitToSecurityCloud;
    this._webDlpReviewText = config.webDlpReviewText;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aup_custom_frequency - computed: false, optional: true, required: false
  private _aupCustomFrequency?: number; 
  public get aupCustomFrequency() {
    return this.getNumberAttribute('aup_custom_frequency');
  }
  public set aupCustomFrequency(value: number) {
    this._aupCustomFrequency = value;
  }
  public resetAupCustomFrequency() {
    this._aupCustomFrequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aupCustomFrequencyInput() {
    return this._aupCustomFrequency;
  }

  // aup_day_offset - computed: false, optional: true, required: false
  private _aupDayOffset?: number; 
  public get aupDayOffset() {
    return this.getNumberAttribute('aup_day_offset');
  }
  public set aupDayOffset(value: number) {
    this._aupDayOffset = value;
  }
  public resetAupDayOffset() {
    this._aupDayOffset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aupDayOffsetInput() {
    return this._aupDayOffset;
  }

  // aup_frequency - computed: false, optional: true, required: false
  private _aupFrequency?: string; 
  public get aupFrequency() {
    return this.getStringAttribute('aup_frequency');
  }
  public set aupFrequency(value: string) {
    this._aupFrequency = value;
  }
  public resetAupFrequency() {
    this._aupFrequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aupFrequencyInput() {
    return this._aupFrequency;
  }

  // aup_message - computed: false, optional: true, required: false
  private _aupMessage?: string; 
  public get aupMessage() {
    return this.getStringAttribute('aup_message');
  }
  public set aupMessage(value: string) {
    this._aupMessage = value;
  }
  public resetAupMessage() {
    this._aupMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aupMessageInput() {
    return this._aupMessage;
  }

  // caution_again_after - computed: false, optional: true, required: false
  private _cautionAgainAfter?: number; 
  public get cautionAgainAfter() {
    return this.getNumberAttribute('caution_again_after');
  }
  public set cautionAgainAfter(value: number) {
    this._cautionAgainAfter = value;
  }
  public resetCautionAgainAfter() {
    this._cautionAgainAfter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cautionAgainAfterInput() {
    return this._cautionAgainAfter;
  }

  // caution_custom_text - computed: false, optional: true, required: false
  private _cautionCustomText?: string; 
  public get cautionCustomText() {
    return this.getStringAttribute('caution_custom_text');
  }
  public set cautionCustomText(value: string) {
    this._cautionCustomText = value;
  }
  public resetCautionCustomText() {
    this._cautionCustomText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cautionCustomTextInput() {
    return this._cautionCustomText;
  }

  // caution_per_domain - computed: false, optional: true, required: false
  private _cautionPerDomain?: boolean | cdktf.IResolvable; 
  public get cautionPerDomain() {
    return this.getBooleanAttribute('caution_per_domain');
  }
  public set cautionPerDomain(value: boolean | cdktf.IResolvable) {
    this._cautionPerDomain = value;
  }
  public resetCautionPerDomain() {
    this._cautionPerDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cautionPerDomainInput() {
    return this._cautionPerDomain;
  }

  // custom_text - computed: false, optional: true, required: false
  private _customText?: string; 
  public get customText() {
    return this.getStringAttribute('custom_text');
  }
  public set customText(value: string) {
    this._customText = value;
  }
  public resetCustomText() {
    this._customText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customTextInput() {
    return this._customText;
  }

  // display_company_logo - computed: false, optional: true, required: false
  private _displayCompanyLogo?: boolean | cdktf.IResolvable; 
  public get displayCompanyLogo() {
    return this.getBooleanAttribute('display_company_logo');
  }
  public set displayCompanyLogo(value: boolean | cdktf.IResolvable) {
    this._displayCompanyLogo = value;
  }
  public resetDisplayCompanyLogo() {
    this._displayCompanyLogo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayCompanyLogoInput() {
    return this._displayCompanyLogo;
  }

  // display_company_name - computed: false, optional: true, required: false
  private _displayCompanyName?: boolean | cdktf.IResolvable; 
  public get displayCompanyName() {
    return this.getBooleanAttribute('display_company_name');
  }
  public set displayCompanyName(value: boolean | cdktf.IResolvable) {
    this._displayCompanyName = value;
  }
  public resetDisplayCompanyName() {
    this._displayCompanyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayCompanyNameInput() {
    return this._displayCompanyName;
  }

  // display_reason - computed: false, optional: true, required: false
  private _displayReason?: boolean | cdktf.IResolvable; 
  public get displayReason() {
    return this.getBooleanAttribute('display_reason');
  }
  public set displayReason(value: boolean | cdktf.IResolvable) {
    this._displayReason = value;
  }
  public resetDisplayReason() {
    this._displayReason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayReasonInput() {
    return this._displayReason;
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

  // idp_proxy_notification_text - computed: false, optional: true, required: false
  private _idpProxyNotificationText?: string; 
  public get idpProxyNotificationText() {
    return this.getStringAttribute('idp_proxy_notification_text');
  }
  public set idpProxyNotificationText(value: string) {
    this._idpProxyNotificationText = value;
  }
  public resetIdpProxyNotificationText() {
    this._idpProxyNotificationText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idpProxyNotificationTextInput() {
    return this._idpProxyNotificationText;
  }

  // notification_type - computed: false, optional: true, required: false
  private _notificationType?: string; 
  public get notificationType() {
    return this.getStringAttribute('notification_type');
  }
  public set notificationType(value: string) {
    this._notificationType = value;
  }
  public resetNotificationType() {
    this._notificationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationTypeInput() {
    return this._notificationType;
  }

  // org_policy_link - computed: false, optional: true, required: false
  private _orgPolicyLink?: string; 
  public get orgPolicyLink() {
    return this.getStringAttribute('org_policy_link');
  }
  public set orgPolicyLink(value: string) {
    this._orgPolicyLink = value;
  }
  public resetOrgPolicyLink() {
    this._orgPolicyLink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgPolicyLinkInput() {
    return this._orgPolicyLink;
  }

  // quarantine_custom_notification_text - computed: false, optional: true, required: false
  private _quarantineCustomNotificationText?: string; 
  public get quarantineCustomNotificationText() {
    return this.getStringAttribute('quarantine_custom_notification_text');
  }
  public set quarantineCustomNotificationText(value: string) {
    this._quarantineCustomNotificationText = value;
  }
  public resetQuarantineCustomNotificationText() {
    this._quarantineCustomNotificationText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quarantineCustomNotificationTextInput() {
    return this._quarantineCustomNotificationText;
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

  // security_review_custom_location - computed: false, optional: true, required: false
  private _securityReviewCustomLocation?: string; 
  public get securityReviewCustomLocation() {
    return this.getStringAttribute('security_review_custom_location');
  }
  public set securityReviewCustomLocation(value: string) {
    this._securityReviewCustomLocation = value;
  }
  public resetSecurityReviewCustomLocation() {
    this._securityReviewCustomLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityReviewCustomLocationInput() {
    return this._securityReviewCustomLocation;
  }

  // security_review_enabled - computed: false, optional: true, required: false
  private _securityReviewEnabled?: boolean | cdktf.IResolvable; 
  public get securityReviewEnabled() {
    return this.getBooleanAttribute('security_review_enabled');
  }
  public set securityReviewEnabled(value: boolean | cdktf.IResolvable) {
    this._securityReviewEnabled = value;
  }
  public resetSecurityReviewEnabled() {
    this._securityReviewEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityReviewEnabledInput() {
    return this._securityReviewEnabled;
  }

  // security_review_submit_to_security_cloud - computed: false, optional: true, required: false
  private _securityReviewSubmitToSecurityCloud?: boolean | cdktf.IResolvable; 
  public get securityReviewSubmitToSecurityCloud() {
    return this.getBooleanAttribute('security_review_submit_to_security_cloud');
  }
  public set securityReviewSubmitToSecurityCloud(value: boolean | cdktf.IResolvable) {
    this._securityReviewSubmitToSecurityCloud = value;
  }
  public resetSecurityReviewSubmitToSecurityCloud() {
    this._securityReviewSubmitToSecurityCloud = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityReviewSubmitToSecurityCloudInput() {
    return this._securityReviewSubmitToSecurityCloud;
  }

  // security_review_text - computed: false, optional: true, required: false
  private _securityReviewText?: string; 
  public get securityReviewText() {
    return this.getStringAttribute('security_review_text');
  }
  public set securityReviewText(value: string) {
    this._securityReviewText = value;
  }
  public resetSecurityReviewText() {
    this._securityReviewText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityReviewTextInput() {
    return this._securityReviewText;
  }

  // support_email - computed: false, optional: true, required: false
  private _supportEmail?: string; 
  public get supportEmail() {
    return this.getStringAttribute('support_email');
  }
  public set supportEmail(value: string) {
    this._supportEmail = value;
  }
  public resetSupportEmail() {
    this._supportEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportEmailInput() {
    return this._supportEmail;
  }

  // support_phone - computed: false, optional: true, required: false
  private _supportPhone?: string; 
  public get supportPhone() {
    return this.getStringAttribute('support_phone');
  }
  public set supportPhone(value: string) {
    this._supportPhone = value;
  }
  public resetSupportPhone() {
    this._supportPhone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportPhoneInput() {
    return this._supportPhone;
  }

  // url_cat_review_custom_location - computed: false, optional: true, required: false
  private _urlCatReviewCustomLocation?: string; 
  public get urlCatReviewCustomLocation() {
    return this.getStringAttribute('url_cat_review_custom_location');
  }
  public set urlCatReviewCustomLocation(value: string) {
    this._urlCatReviewCustomLocation = value;
  }
  public resetUrlCatReviewCustomLocation() {
    this._urlCatReviewCustomLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlCatReviewCustomLocationInput() {
    return this._urlCatReviewCustomLocation;
  }

  // url_cat_review_enabled - computed: false, optional: true, required: false
  private _urlCatReviewEnabled?: boolean | cdktf.IResolvable; 
  public get urlCatReviewEnabled() {
    return this.getBooleanAttribute('url_cat_review_enabled');
  }
  public set urlCatReviewEnabled(value: boolean | cdktf.IResolvable) {
    this._urlCatReviewEnabled = value;
  }
  public resetUrlCatReviewEnabled() {
    this._urlCatReviewEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlCatReviewEnabledInput() {
    return this._urlCatReviewEnabled;
  }

  // url_cat_review_submit_to_security_cloud - computed: false, optional: true, required: false
  private _urlCatReviewSubmitToSecurityCloud?: boolean | cdktf.IResolvable; 
  public get urlCatReviewSubmitToSecurityCloud() {
    return this.getBooleanAttribute('url_cat_review_submit_to_security_cloud');
  }
  public set urlCatReviewSubmitToSecurityCloud(value: boolean | cdktf.IResolvable) {
    this._urlCatReviewSubmitToSecurityCloud = value;
  }
  public resetUrlCatReviewSubmitToSecurityCloud() {
    this._urlCatReviewSubmitToSecurityCloud = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlCatReviewSubmitToSecurityCloudInput() {
    return this._urlCatReviewSubmitToSecurityCloud;
  }

  // url_cat_review_text - computed: false, optional: true, required: false
  private _urlCatReviewText?: string; 
  public get urlCatReviewText() {
    return this.getStringAttribute('url_cat_review_text');
  }
  public set urlCatReviewText(value: string) {
    this._urlCatReviewText = value;
  }
  public resetUrlCatReviewText() {
    this._urlCatReviewText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlCatReviewTextInput() {
    return this._urlCatReviewText;
  }

  // web_dlp_review_custom_location - computed: false, optional: true, required: false
  private _webDlpReviewCustomLocation?: string; 
  public get webDlpReviewCustomLocation() {
    return this.getStringAttribute('web_dlp_review_custom_location');
  }
  public set webDlpReviewCustomLocation(value: string) {
    this._webDlpReviewCustomLocation = value;
  }
  public resetWebDlpReviewCustomLocation() {
    this._webDlpReviewCustomLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webDlpReviewCustomLocationInput() {
    return this._webDlpReviewCustomLocation;
  }

  // web_dlp_review_enabled - computed: false, optional: true, required: false
  private _webDlpReviewEnabled?: boolean | cdktf.IResolvable; 
  public get webDlpReviewEnabled() {
    return this.getBooleanAttribute('web_dlp_review_enabled');
  }
  public set webDlpReviewEnabled(value: boolean | cdktf.IResolvable) {
    this._webDlpReviewEnabled = value;
  }
  public resetWebDlpReviewEnabled() {
    this._webDlpReviewEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webDlpReviewEnabledInput() {
    return this._webDlpReviewEnabled;
  }

  // web_dlp_review_submit_to_security_cloud - computed: false, optional: true, required: false
  private _webDlpReviewSubmitToSecurityCloud?: boolean | cdktf.IResolvable; 
  public get webDlpReviewSubmitToSecurityCloud() {
    return this.getBooleanAttribute('web_dlp_review_submit_to_security_cloud');
  }
  public set webDlpReviewSubmitToSecurityCloud(value: boolean | cdktf.IResolvable) {
    this._webDlpReviewSubmitToSecurityCloud = value;
  }
  public resetWebDlpReviewSubmitToSecurityCloud() {
    this._webDlpReviewSubmitToSecurityCloud = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webDlpReviewSubmitToSecurityCloudInput() {
    return this._webDlpReviewSubmitToSecurityCloud;
  }

  // web_dlp_review_text - computed: false, optional: true, required: false
  private _webDlpReviewText?: string; 
  public get webDlpReviewText() {
    return this.getStringAttribute('web_dlp_review_text');
  }
  public set webDlpReviewText(value: string) {
    this._webDlpReviewText = value;
  }
  public resetWebDlpReviewText() {
    this._webDlpReviewText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webDlpReviewTextInput() {
    return this._webDlpReviewText;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aup_custom_frequency: cdktf.numberToTerraform(this._aupCustomFrequency),
      aup_day_offset: cdktf.numberToTerraform(this._aupDayOffset),
      aup_frequency: cdktf.stringToTerraform(this._aupFrequency),
      aup_message: cdktf.stringToTerraform(this._aupMessage),
      caution_again_after: cdktf.numberToTerraform(this._cautionAgainAfter),
      caution_custom_text: cdktf.stringToTerraform(this._cautionCustomText),
      caution_per_domain: cdktf.booleanToTerraform(this._cautionPerDomain),
      custom_text: cdktf.stringToTerraform(this._customText),
      display_company_logo: cdktf.booleanToTerraform(this._displayCompanyLogo),
      display_company_name: cdktf.booleanToTerraform(this._displayCompanyName),
      display_reason: cdktf.booleanToTerraform(this._displayReason),
      id: cdktf.stringToTerraform(this._id),
      idp_proxy_notification_text: cdktf.stringToTerraform(this._idpProxyNotificationText),
      notification_type: cdktf.stringToTerraform(this._notificationType),
      org_policy_link: cdktf.stringToTerraform(this._orgPolicyLink),
      quarantine_custom_notification_text: cdktf.stringToTerraform(this._quarantineCustomNotificationText),
      redirect_url: cdktf.stringToTerraform(this._redirectUrl),
      security_review_custom_location: cdktf.stringToTerraform(this._securityReviewCustomLocation),
      security_review_enabled: cdktf.booleanToTerraform(this._securityReviewEnabled),
      security_review_submit_to_security_cloud: cdktf.booleanToTerraform(this._securityReviewSubmitToSecurityCloud),
      security_review_text: cdktf.stringToTerraform(this._securityReviewText),
      support_email: cdktf.stringToTerraform(this._supportEmail),
      support_phone: cdktf.stringToTerraform(this._supportPhone),
      url_cat_review_custom_location: cdktf.stringToTerraform(this._urlCatReviewCustomLocation),
      url_cat_review_enabled: cdktf.booleanToTerraform(this._urlCatReviewEnabled),
      url_cat_review_submit_to_security_cloud: cdktf.booleanToTerraform(this._urlCatReviewSubmitToSecurityCloud),
      url_cat_review_text: cdktf.stringToTerraform(this._urlCatReviewText),
      web_dlp_review_custom_location: cdktf.stringToTerraform(this._webDlpReviewCustomLocation),
      web_dlp_review_enabled: cdktf.booleanToTerraform(this._webDlpReviewEnabled),
      web_dlp_review_submit_to_security_cloud: cdktf.booleanToTerraform(this._webDlpReviewSubmitToSecurityCloud),
      web_dlp_review_text: cdktf.stringToTerraform(this._webDlpReviewText),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aup_custom_frequency: {
        value: cdktf.numberToHclTerraform(this._aupCustomFrequency),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      aup_day_offset: {
        value: cdktf.numberToHclTerraform(this._aupDayOffset),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      aup_frequency: {
        value: cdktf.stringToHclTerraform(this._aupFrequency),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aup_message: {
        value: cdktf.stringToHclTerraform(this._aupMessage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      caution_again_after: {
        value: cdktf.numberToHclTerraform(this._cautionAgainAfter),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      caution_custom_text: {
        value: cdktf.stringToHclTerraform(this._cautionCustomText),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      caution_per_domain: {
        value: cdktf.booleanToHclTerraform(this._cautionPerDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      custom_text: {
        value: cdktf.stringToHclTerraform(this._customText),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_company_logo: {
        value: cdktf.booleanToHclTerraform(this._displayCompanyLogo),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      display_company_name: {
        value: cdktf.booleanToHclTerraform(this._displayCompanyName),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      display_reason: {
        value: cdktf.booleanToHclTerraform(this._displayReason),
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
      idp_proxy_notification_text: {
        value: cdktf.stringToHclTerraform(this._idpProxyNotificationText),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notification_type: {
        value: cdktf.stringToHclTerraform(this._notificationType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      org_policy_link: {
        value: cdktf.stringToHclTerraform(this._orgPolicyLink),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      quarantine_custom_notification_text: {
        value: cdktf.stringToHclTerraform(this._quarantineCustomNotificationText),
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
      security_review_custom_location: {
        value: cdktf.stringToHclTerraform(this._securityReviewCustomLocation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_review_enabled: {
        value: cdktf.booleanToHclTerraform(this._securityReviewEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      security_review_submit_to_security_cloud: {
        value: cdktf.booleanToHclTerraform(this._securityReviewSubmitToSecurityCloud),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      security_review_text: {
        value: cdktf.stringToHclTerraform(this._securityReviewText),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      support_email: {
        value: cdktf.stringToHclTerraform(this._supportEmail),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      support_phone: {
        value: cdktf.stringToHclTerraform(this._supportPhone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url_cat_review_custom_location: {
        value: cdktf.stringToHclTerraform(this._urlCatReviewCustomLocation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url_cat_review_enabled: {
        value: cdktf.booleanToHclTerraform(this._urlCatReviewEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      url_cat_review_submit_to_security_cloud: {
        value: cdktf.booleanToHclTerraform(this._urlCatReviewSubmitToSecurityCloud),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      url_cat_review_text: {
        value: cdktf.stringToHclTerraform(this._urlCatReviewText),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      web_dlp_review_custom_location: {
        value: cdktf.stringToHclTerraform(this._webDlpReviewCustomLocation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      web_dlp_review_enabled: {
        value: cdktf.booleanToHclTerraform(this._webDlpReviewEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      web_dlp_review_submit_to_security_cloud: {
        value: cdktf.booleanToHclTerraform(this._webDlpReviewSubmitToSecurityCloud),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      web_dlp_review_text: {
        value: cdktf.stringToHclTerraform(this._webDlpReviewText),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
