// https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/data-sources/end_user_notification
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataZiaEndUserNotificationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/data-sources/end_user_notification#id DataZiaEndUserNotification#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/data-sources/end_user_notification zia_end_user_notification}
*/
export class DataZiaEndUserNotification extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zia_end_user_notification";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataZiaEndUserNotification resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataZiaEndUserNotification to import
  * @param importFromId The id of the existing DataZiaEndUserNotification that should be imported. Refer to the {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/data-sources/end_user_notification#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataZiaEndUserNotification to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zia_end_user_notification", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/data-sources/end_user_notification zia_end_user_notification} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataZiaEndUserNotificationConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataZiaEndUserNotificationConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'zia_end_user_notification',
      terraformGeneratorMetadata: {
        providerName: 'zia',
        providerVersion: '4.6.4',
        providerVersionConstraint: '4.6.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aup_custom_frequency - computed: true, optional: false, required: false
  public get aupCustomFrequency() {
    return this.getNumberAttribute('aup_custom_frequency');
  }

  // aup_day_offset - computed: true, optional: false, required: false
  public get aupDayOffset() {
    return this.getNumberAttribute('aup_day_offset');
  }

  // aup_frequency - computed: true, optional: false, required: false
  public get aupFrequency() {
    return this.getStringAttribute('aup_frequency');
  }

  // aup_message - computed: true, optional: false, required: false
  public get aupMessage() {
    return this.getStringAttribute('aup_message');
  }

  // caution_again_after - computed: true, optional: false, required: false
  public get cautionAgainAfter() {
    return this.getNumberAttribute('caution_again_after');
  }

  // caution_custom_text - computed: true, optional: false, required: false
  public get cautionCustomText() {
    return this.getStringAttribute('caution_custom_text');
  }

  // caution_per_domain - computed: true, optional: false, required: false
  public get cautionPerDomain() {
    return this.getBooleanAttribute('caution_per_domain');
  }

  // custom_text - computed: true, optional: false, required: false
  public get customText() {
    return this.getStringAttribute('custom_text');
  }

  // display_company_logo - computed: true, optional: false, required: false
  public get displayCompanyLogo() {
    return this.getBooleanAttribute('display_company_logo');
  }

  // display_company_name - computed: true, optional: false, required: false
  public get displayCompanyName() {
    return this.getBooleanAttribute('display_company_name');
  }

  // display_reason - computed: true, optional: false, required: false
  public get displayReason() {
    return this.getBooleanAttribute('display_reason');
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

  // idp_proxy_notification_text - computed: true, optional: false, required: false
  public get idpProxyNotificationText() {
    return this.getStringAttribute('idp_proxy_notification_text');
  }

  // notification_type - computed: true, optional: false, required: false
  public get notificationType() {
    return this.getStringAttribute('notification_type');
  }

  // org_policy_link - computed: true, optional: false, required: false
  public get orgPolicyLink() {
    return this.getStringAttribute('org_policy_link');
  }

  // quarantine_custom_notification_text - computed: true, optional: false, required: false
  public get quarantineCustomNotificationText() {
    return this.getStringAttribute('quarantine_custom_notification_text');
  }

  // redirect_url - computed: true, optional: false, required: false
  public get redirectUrl() {
    return this.getStringAttribute('redirect_url');
  }

  // security_review_custom_location - computed: true, optional: false, required: false
  public get securityReviewCustomLocation() {
    return this.getStringAttribute('security_review_custom_location');
  }

  // security_review_enabled - computed: true, optional: false, required: false
  public get securityReviewEnabled() {
    return this.getBooleanAttribute('security_review_enabled');
  }

  // security_review_submit_to_security_cloud - computed: true, optional: false, required: false
  public get securityReviewSubmitToSecurityCloud() {
    return this.getBooleanAttribute('security_review_submit_to_security_cloud');
  }

  // security_review_text - computed: true, optional: false, required: false
  public get securityReviewText() {
    return this.getStringAttribute('security_review_text');
  }

  // support_email - computed: true, optional: false, required: false
  public get supportEmail() {
    return this.getStringAttribute('support_email');
  }

  // support_phone - computed: true, optional: false, required: false
  public get supportPhone() {
    return this.getStringAttribute('support_phone');
  }

  // url_cat_review_custom_location - computed: true, optional: false, required: false
  public get urlCatReviewCustomLocation() {
    return this.getStringAttribute('url_cat_review_custom_location');
  }

  // url_cat_review_enabled - computed: true, optional: false, required: false
  public get urlCatReviewEnabled() {
    return this.getBooleanAttribute('url_cat_review_enabled');
  }

  // url_cat_review_submit_to_security_cloud - computed: true, optional: false, required: false
  public get urlCatReviewSubmitToSecurityCloud() {
    return this.getBooleanAttribute('url_cat_review_submit_to_security_cloud');
  }

  // url_cat_review_text - computed: true, optional: false, required: false
  public get urlCatReviewText() {
    return this.getStringAttribute('url_cat_review_text');
  }

  // web_dlp_review_custom_location - computed: true, optional: false, required: false
  public get webDlpReviewCustomLocation() {
    return this.getStringAttribute('web_dlp_review_custom_location');
  }

  // web_dlp_review_enabled - computed: true, optional: false, required: false
  public get webDlpReviewEnabled() {
    return this.getBooleanAttribute('web_dlp_review_enabled');
  }

  // web_dlp_review_submit_to_security_cloud - computed: true, optional: false, required: false
  public get webDlpReviewSubmitToSecurityCloud() {
    return this.getBooleanAttribute('web_dlp_review_submit_to_security_cloud');
  }

  // web_dlp_review_text - computed: true, optional: false, required: false
  public get webDlpReviewText() {
    return this.getStringAttribute('web_dlp_review_text');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
