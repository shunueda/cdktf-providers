// https://registry.terraform.io/providers/uptime-com/uptime/2.16.0/docs/resources/statuspage
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StatuspageConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.16.0/docs/resources/statuspage#allow_drill_down Statuspage#allow_drill_down}
  */
  readonly allowDrillDown?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.16.0/docs/resources/statuspage#allow_pdf_report Statuspage#allow_pdf_report}
  */
  readonly allowPdfReport?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.16.0/docs/resources/statuspage#allow_search_indexing Statuspage#allow_search_indexing}
  */
  readonly allowSearchIndexing?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.16.0/docs/resources/statuspage#allow_subscriptions Statuspage#allow_subscriptions}
  */
  readonly allowSubscriptions?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.16.0/docs/resources/statuspage#allow_subscriptions_email Statuspage#allow_subscriptions_email}
  */
  readonly allowSubscriptionsEmail?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.16.0/docs/resources/statuspage#allow_subscriptions_rss Statuspage#allow_subscriptions_rss}
  */
  readonly allowSubscriptionsRss?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.16.0/docs/resources/statuspage#allow_subscriptions_slack Statuspage#allow_subscriptions_slack}
  */
  readonly allowSubscriptionsSlack?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.16.0/docs/resources/statuspage#allow_subscriptions_sms Statuspage#allow_subscriptions_sms}
  */
  readonly allowSubscriptionsSms?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.16.0/docs/resources/statuspage#allow_subscriptions_webhook Statuspage#allow_subscriptions_webhook}
  */
  readonly allowSubscriptionsWebhook?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.16.0/docs/resources/statuspage#auth_password Statuspage#auth_password}
  */
  readonly authPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.16.0/docs/resources/statuspage#auth_username Statuspage#auth_username}
  */
  readonly authUsername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.16.0/docs/resources/statuspage#cname Statuspage#cname}
  */
  readonly cname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.16.0/docs/resources/statuspage#company_website_url Statuspage#company_website_url}
  */
  readonly companyWebsiteUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.16.0/docs/resources/statuspage#contact_email Statuspage#contact_email}
  */
  readonly contactEmail?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.16.0/docs/resources/statuspage#custom_css Statuspage#custom_css}
  */
  readonly customCss?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.16.0/docs/resources/statuspage#custom_footer_html Statuspage#custom_footer_html}
  */
  readonly customFooterHtml?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.16.0/docs/resources/statuspage#custom_header_bg_color_hex Statuspage#custom_header_bg_color_hex}
  */
  readonly customHeaderBgColorHex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.16.0/docs/resources/statuspage#custom_header_html Statuspage#custom_header_html}
  */
  readonly customHeaderHtml?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.16.0/docs/resources/statuspage#custom_header_text_color_hex Statuspage#custom_header_text_color_hex}
  */
  readonly customHeaderTextColorHex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.16.0/docs/resources/statuspage#default_history_date_range Statuspage#default_history_date_range}
  */
  readonly defaultHistoryDateRange?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.16.0/docs/resources/statuspage#description Statuspage#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.16.0/docs/resources/statuspage#email_from Statuspage#email_from}
  */
  readonly emailFrom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.16.0/docs/resources/statuspage#email_reply_to Statuspage#email_reply_to}
  */
  readonly emailReplyTo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.16.0/docs/resources/statuspage#google_analytics_code Statuspage#google_analytics_code}
  */
  readonly googleAnalyticsCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.16.0/docs/resources/statuspage#hide_empty_tabs_history Statuspage#hide_empty_tabs_history}
  */
  readonly hideEmptyTabsHistory?: boolean | cdktf.IResolvable;
  /**
  * Defines the widest range of time users can select or view on the date picker on the check drill-down, by default all data is available when no value is provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.16.0/docs/resources/statuspage#max_visible_component_days Statuspage#max_visible_component_days}
  */
  readonly maxVisibleComponentDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.16.0/docs/resources/statuspage#name Statuspage#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.16.0/docs/resources/statuspage#page_type Statuspage#page_type}
  */
  readonly pageType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.16.0/docs/resources/statuspage#show_active_incidents Statuspage#show_active_incidents}
  */
  readonly showActiveIncidents?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.16.0/docs/resources/statuspage#show_component_history Statuspage#show_component_history}
  */
  readonly showComponentHistory?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.16.0/docs/resources/statuspage#show_component_response_time Statuspage#show_component_response_time}
  */
  readonly showComponentResponseTime?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.16.0/docs/resources/statuspage#show_history_snake Statuspage#show_history_snake}
  */
  readonly showHistorySnake?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.16.0/docs/resources/statuspage#show_history_tab Statuspage#show_history_tab}
  */
  readonly showHistoryTab?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.16.0/docs/resources/statuspage#show_past_incidents Statuspage#show_past_incidents}
  */
  readonly showPastIncidents?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.16.0/docs/resources/statuspage#show_status_tab Statuspage#show_status_tab}
  */
  readonly showStatusTab?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.16.0/docs/resources/statuspage#show_summary_metrics Statuspage#show_summary_metrics}
  */
  readonly showSummaryMetrics?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.16.0/docs/resources/statuspage#slug Statuspage#slug}
  */
  readonly slug?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.16.0/docs/resources/statuspage#theme Statuspage#theme}
  */
  readonly theme?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.16.0/docs/resources/statuspage#timezone Statuspage#timezone}
  */
  readonly timezone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.16.0/docs/resources/statuspage#uptime_calculation_type Statuspage#uptime_calculation_type}
  */
  readonly uptimeCalculationType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.16.0/docs/resources/statuspage#visibility_level Statuspage#visibility_level}
  */
  readonly visibilityLevel?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/uptime-com/uptime/2.16.0/docs/resources/statuspage uptime_statuspage}
*/
export class Statuspage extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "uptime_statuspage";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Statuspage resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Statuspage to import
  * @param importFromId The id of the existing Statuspage that should be imported. Refer to the {@link https://registry.terraform.io/providers/uptime-com/uptime/2.16.0/docs/resources/statuspage#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Statuspage to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "uptime_statuspage", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/uptime-com/uptime/2.16.0/docs/resources/statuspage uptime_statuspage} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StatuspageConfig
  */
  public constructor(scope: Construct, id: string, config: StatuspageConfig) {
    super(scope, id, {
      terraformResourceType: 'uptime_statuspage',
      terraformGeneratorMetadata: {
        providerName: 'uptime',
        providerVersion: '2.16.0',
        providerVersionConstraint: '2.16.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowDrillDown = config.allowDrillDown;
    this._allowPdfReport = config.allowPdfReport;
    this._allowSearchIndexing = config.allowSearchIndexing;
    this._allowSubscriptions = config.allowSubscriptions;
    this._allowSubscriptionsEmail = config.allowSubscriptionsEmail;
    this._allowSubscriptionsRss = config.allowSubscriptionsRss;
    this._allowSubscriptionsSlack = config.allowSubscriptionsSlack;
    this._allowSubscriptionsSms = config.allowSubscriptionsSms;
    this._allowSubscriptionsWebhook = config.allowSubscriptionsWebhook;
    this._authPassword = config.authPassword;
    this._authUsername = config.authUsername;
    this._cname = config.cname;
    this._companyWebsiteUrl = config.companyWebsiteUrl;
    this._contactEmail = config.contactEmail;
    this._customCss = config.customCss;
    this._customFooterHtml = config.customFooterHtml;
    this._customHeaderBgColorHex = config.customHeaderBgColorHex;
    this._customHeaderHtml = config.customHeaderHtml;
    this._customHeaderTextColorHex = config.customHeaderTextColorHex;
    this._defaultHistoryDateRange = config.defaultHistoryDateRange;
    this._description = config.description;
    this._emailFrom = config.emailFrom;
    this._emailReplyTo = config.emailReplyTo;
    this._googleAnalyticsCode = config.googleAnalyticsCode;
    this._hideEmptyTabsHistory = config.hideEmptyTabsHistory;
    this._maxVisibleComponentDays = config.maxVisibleComponentDays;
    this._name = config.name;
    this._pageType = config.pageType;
    this._showActiveIncidents = config.showActiveIncidents;
    this._showComponentHistory = config.showComponentHistory;
    this._showComponentResponseTime = config.showComponentResponseTime;
    this._showHistorySnake = config.showHistorySnake;
    this._showHistoryTab = config.showHistoryTab;
    this._showPastIncidents = config.showPastIncidents;
    this._showStatusTab = config.showStatusTab;
    this._showSummaryMetrics = config.showSummaryMetrics;
    this._slug = config.slug;
    this._theme = config.theme;
    this._timezone = config.timezone;
    this._uptimeCalculationType = config.uptimeCalculationType;
    this._visibilityLevel = config.visibilityLevel;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_drill_down - computed: true, optional: true, required: false
  private _allowDrillDown?: boolean | cdktf.IResolvable; 
  public get allowDrillDown() {
    return this.getBooleanAttribute('allow_drill_down');
  }
  public set allowDrillDown(value: boolean | cdktf.IResolvable) {
    this._allowDrillDown = value;
  }
  public resetAllowDrillDown() {
    this._allowDrillDown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowDrillDownInput() {
    return this._allowDrillDown;
  }

  // allow_pdf_report - computed: true, optional: true, required: false
  private _allowPdfReport?: boolean | cdktf.IResolvable; 
  public get allowPdfReport() {
    return this.getBooleanAttribute('allow_pdf_report');
  }
  public set allowPdfReport(value: boolean | cdktf.IResolvable) {
    this._allowPdfReport = value;
  }
  public resetAllowPdfReport() {
    this._allowPdfReport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowPdfReportInput() {
    return this._allowPdfReport;
  }

  // allow_search_indexing - computed: true, optional: true, required: false
  private _allowSearchIndexing?: boolean | cdktf.IResolvable; 
  public get allowSearchIndexing() {
    return this.getBooleanAttribute('allow_search_indexing');
  }
  public set allowSearchIndexing(value: boolean | cdktf.IResolvable) {
    this._allowSearchIndexing = value;
  }
  public resetAllowSearchIndexing() {
    this._allowSearchIndexing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowSearchIndexingInput() {
    return this._allowSearchIndexing;
  }

  // allow_subscriptions - computed: true, optional: true, required: false
  private _allowSubscriptions?: boolean | cdktf.IResolvable; 
  public get allowSubscriptions() {
    return this.getBooleanAttribute('allow_subscriptions');
  }
  public set allowSubscriptions(value: boolean | cdktf.IResolvable) {
    this._allowSubscriptions = value;
  }
  public resetAllowSubscriptions() {
    this._allowSubscriptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowSubscriptionsInput() {
    return this._allowSubscriptions;
  }

  // allow_subscriptions_email - computed: true, optional: true, required: false
  private _allowSubscriptionsEmail?: boolean | cdktf.IResolvable; 
  public get allowSubscriptionsEmail() {
    return this.getBooleanAttribute('allow_subscriptions_email');
  }
  public set allowSubscriptionsEmail(value: boolean | cdktf.IResolvable) {
    this._allowSubscriptionsEmail = value;
  }
  public resetAllowSubscriptionsEmail() {
    this._allowSubscriptionsEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowSubscriptionsEmailInput() {
    return this._allowSubscriptionsEmail;
  }

  // allow_subscriptions_rss - computed: true, optional: true, required: false
  private _allowSubscriptionsRss?: boolean | cdktf.IResolvable; 
  public get allowSubscriptionsRss() {
    return this.getBooleanAttribute('allow_subscriptions_rss');
  }
  public set allowSubscriptionsRss(value: boolean | cdktf.IResolvable) {
    this._allowSubscriptionsRss = value;
  }
  public resetAllowSubscriptionsRss() {
    this._allowSubscriptionsRss = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowSubscriptionsRssInput() {
    return this._allowSubscriptionsRss;
  }

  // allow_subscriptions_slack - computed: true, optional: true, required: false
  private _allowSubscriptionsSlack?: boolean | cdktf.IResolvable; 
  public get allowSubscriptionsSlack() {
    return this.getBooleanAttribute('allow_subscriptions_slack');
  }
  public set allowSubscriptionsSlack(value: boolean | cdktf.IResolvable) {
    this._allowSubscriptionsSlack = value;
  }
  public resetAllowSubscriptionsSlack() {
    this._allowSubscriptionsSlack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowSubscriptionsSlackInput() {
    return this._allowSubscriptionsSlack;
  }

  // allow_subscriptions_sms - computed: true, optional: true, required: false
  private _allowSubscriptionsSms?: boolean | cdktf.IResolvable; 
  public get allowSubscriptionsSms() {
    return this.getBooleanAttribute('allow_subscriptions_sms');
  }
  public set allowSubscriptionsSms(value: boolean | cdktf.IResolvable) {
    this._allowSubscriptionsSms = value;
  }
  public resetAllowSubscriptionsSms() {
    this._allowSubscriptionsSms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowSubscriptionsSmsInput() {
    return this._allowSubscriptionsSms;
  }

  // allow_subscriptions_webhook - computed: true, optional: true, required: false
  private _allowSubscriptionsWebhook?: boolean | cdktf.IResolvable; 
  public get allowSubscriptionsWebhook() {
    return this.getBooleanAttribute('allow_subscriptions_webhook');
  }
  public set allowSubscriptionsWebhook(value: boolean | cdktf.IResolvable) {
    this._allowSubscriptionsWebhook = value;
  }
  public resetAllowSubscriptionsWebhook() {
    this._allowSubscriptionsWebhook = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowSubscriptionsWebhookInput() {
    return this._allowSubscriptionsWebhook;
  }

  // auth_password - computed: true, optional: true, required: false
  private _authPassword?: string; 
  public get authPassword() {
    return this.getStringAttribute('auth_password');
  }
  public set authPassword(value: string) {
    this._authPassword = value;
  }
  public resetAuthPassword() {
    this._authPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authPasswordInput() {
    return this._authPassword;
  }

  // auth_username - computed: true, optional: true, required: false
  private _authUsername?: string; 
  public get authUsername() {
    return this.getStringAttribute('auth_username');
  }
  public set authUsername(value: string) {
    this._authUsername = value;
  }
  public resetAuthUsername() {
    this._authUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authUsernameInput() {
    return this._authUsername;
  }

  // cname - computed: true, optional: true, required: false
  private _cname?: string; 
  public get cname() {
    return this.getStringAttribute('cname');
  }
  public set cname(value: string) {
    this._cname = value;
  }
  public resetCname() {
    this._cname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cnameInput() {
    return this._cname;
  }

  // company_website_url - computed: true, optional: true, required: false
  private _companyWebsiteUrl?: string; 
  public get companyWebsiteUrl() {
    return this.getStringAttribute('company_website_url');
  }
  public set companyWebsiteUrl(value: string) {
    this._companyWebsiteUrl = value;
  }
  public resetCompanyWebsiteUrl() {
    this._companyWebsiteUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get companyWebsiteUrlInput() {
    return this._companyWebsiteUrl;
  }

  // contact_email - computed: true, optional: true, required: false
  private _contactEmail?: string; 
  public get contactEmail() {
    return this.getStringAttribute('contact_email');
  }
  public set contactEmail(value: string) {
    this._contactEmail = value;
  }
  public resetContactEmail() {
    this._contactEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contactEmailInput() {
    return this._contactEmail;
  }

  // custom_css - computed: true, optional: true, required: false
  private _customCss?: string; 
  public get customCss() {
    return this.getStringAttribute('custom_css');
  }
  public set customCss(value: string) {
    this._customCss = value;
  }
  public resetCustomCss() {
    this._customCss = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customCssInput() {
    return this._customCss;
  }

  // custom_footer_html - computed: true, optional: true, required: false
  private _customFooterHtml?: string; 
  public get customFooterHtml() {
    return this.getStringAttribute('custom_footer_html');
  }
  public set customFooterHtml(value: string) {
    this._customFooterHtml = value;
  }
  public resetCustomFooterHtml() {
    this._customFooterHtml = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customFooterHtmlInput() {
    return this._customFooterHtml;
  }

  // custom_header_bg_color_hex - computed: true, optional: true, required: false
  private _customHeaderBgColorHex?: string; 
  public get customHeaderBgColorHex() {
    return this.getStringAttribute('custom_header_bg_color_hex');
  }
  public set customHeaderBgColorHex(value: string) {
    this._customHeaderBgColorHex = value;
  }
  public resetCustomHeaderBgColorHex() {
    this._customHeaderBgColorHex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customHeaderBgColorHexInput() {
    return this._customHeaderBgColorHex;
  }

  // custom_header_html - computed: true, optional: true, required: false
  private _customHeaderHtml?: string; 
  public get customHeaderHtml() {
    return this.getStringAttribute('custom_header_html');
  }
  public set customHeaderHtml(value: string) {
    this._customHeaderHtml = value;
  }
  public resetCustomHeaderHtml() {
    this._customHeaderHtml = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customHeaderHtmlInput() {
    return this._customHeaderHtml;
  }

  // custom_header_text_color_hex - computed: true, optional: true, required: false
  private _customHeaderTextColorHex?: string; 
  public get customHeaderTextColorHex() {
    return this.getStringAttribute('custom_header_text_color_hex');
  }
  public set customHeaderTextColorHex(value: string) {
    this._customHeaderTextColorHex = value;
  }
  public resetCustomHeaderTextColorHex() {
    this._customHeaderTextColorHex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customHeaderTextColorHexInput() {
    return this._customHeaderTextColorHex;
  }

  // default_history_date_range - computed: true, optional: true, required: false
  private _defaultHistoryDateRange?: number; 
  public get defaultHistoryDateRange() {
    return this.getNumberAttribute('default_history_date_range');
  }
  public set defaultHistoryDateRange(value: number) {
    this._defaultHistoryDateRange = value;
  }
  public resetDefaultHistoryDateRange() {
    this._defaultHistoryDateRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultHistoryDateRangeInput() {
    return this._defaultHistoryDateRange;
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

  // email_from - computed: true, optional: true, required: false
  private _emailFrom?: string; 
  public get emailFrom() {
    return this.getStringAttribute('email_from');
  }
  public set emailFrom(value: string) {
    this._emailFrom = value;
  }
  public resetEmailFrom() {
    this._emailFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailFromInput() {
    return this._emailFrom;
  }

  // email_reply_to - computed: true, optional: true, required: false
  private _emailReplyTo?: string; 
  public get emailReplyTo() {
    return this.getStringAttribute('email_reply_to');
  }
  public set emailReplyTo(value: string) {
    this._emailReplyTo = value;
  }
  public resetEmailReplyTo() {
    this._emailReplyTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailReplyToInput() {
    return this._emailReplyTo;
  }

  // google_analytics_code - computed: true, optional: true, required: false
  private _googleAnalyticsCode?: string; 
  public get googleAnalyticsCode() {
    return this.getStringAttribute('google_analytics_code');
  }
  public set googleAnalyticsCode(value: string) {
    this._googleAnalyticsCode = value;
  }
  public resetGoogleAnalyticsCode() {
    this._googleAnalyticsCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleAnalyticsCodeInput() {
    return this._googleAnalyticsCode;
  }

  // hide_empty_tabs_history - computed: true, optional: true, required: false
  private _hideEmptyTabsHistory?: boolean | cdktf.IResolvable; 
  public get hideEmptyTabsHistory() {
    return this.getBooleanAttribute('hide_empty_tabs_history');
  }
  public set hideEmptyTabsHistory(value: boolean | cdktf.IResolvable) {
    this._hideEmptyTabsHistory = value;
  }
  public resetHideEmptyTabsHistory() {
    this._hideEmptyTabsHistory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hideEmptyTabsHistoryInput() {
    return this._hideEmptyTabsHistory;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // max_visible_component_days - computed: true, optional: true, required: false
  private _maxVisibleComponentDays?: number; 
  public get maxVisibleComponentDays() {
    return this.getNumberAttribute('max_visible_component_days');
  }
  public set maxVisibleComponentDays(value: number) {
    this._maxVisibleComponentDays = value;
  }
  public resetMaxVisibleComponentDays() {
    this._maxVisibleComponentDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxVisibleComponentDaysInput() {
    return this._maxVisibleComponentDays;
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

  // page_type - computed: true, optional: true, required: false
  private _pageType?: string; 
  public get pageType() {
    return this.getStringAttribute('page_type');
  }
  public set pageType(value: string) {
    this._pageType = value;
  }
  public resetPageType() {
    this._pageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pageTypeInput() {
    return this._pageType;
  }

  // show_active_incidents - computed: true, optional: true, required: false
  private _showActiveIncidents?: boolean | cdktf.IResolvable; 
  public get showActiveIncidents() {
    return this.getBooleanAttribute('show_active_incidents');
  }
  public set showActiveIncidents(value: boolean | cdktf.IResolvable) {
    this._showActiveIncidents = value;
  }
  public resetShowActiveIncidents() {
    this._showActiveIncidents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showActiveIncidentsInput() {
    return this._showActiveIncidents;
  }

  // show_component_history - computed: true, optional: true, required: false
  private _showComponentHistory?: boolean | cdktf.IResolvable; 
  public get showComponentHistory() {
    return this.getBooleanAttribute('show_component_history');
  }
  public set showComponentHistory(value: boolean | cdktf.IResolvable) {
    this._showComponentHistory = value;
  }
  public resetShowComponentHistory() {
    this._showComponentHistory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showComponentHistoryInput() {
    return this._showComponentHistory;
  }

  // show_component_response_time - computed: true, optional: true, required: false
  private _showComponentResponseTime?: boolean | cdktf.IResolvable; 
  public get showComponentResponseTime() {
    return this.getBooleanAttribute('show_component_response_time');
  }
  public set showComponentResponseTime(value: boolean | cdktf.IResolvable) {
    this._showComponentResponseTime = value;
  }
  public resetShowComponentResponseTime() {
    this._showComponentResponseTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showComponentResponseTimeInput() {
    return this._showComponentResponseTime;
  }

  // show_history_snake - computed: true, optional: true, required: false
  private _showHistorySnake?: boolean | cdktf.IResolvable; 
  public get showHistorySnake() {
    return this.getBooleanAttribute('show_history_snake');
  }
  public set showHistorySnake(value: boolean | cdktf.IResolvable) {
    this._showHistorySnake = value;
  }
  public resetShowHistorySnake() {
    this._showHistorySnake = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showHistorySnakeInput() {
    return this._showHistorySnake;
  }

  // show_history_tab - computed: true, optional: true, required: false
  private _showHistoryTab?: boolean | cdktf.IResolvable; 
  public get showHistoryTab() {
    return this.getBooleanAttribute('show_history_tab');
  }
  public set showHistoryTab(value: boolean | cdktf.IResolvable) {
    this._showHistoryTab = value;
  }
  public resetShowHistoryTab() {
    this._showHistoryTab = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showHistoryTabInput() {
    return this._showHistoryTab;
  }

  // show_past_incidents - computed: true, optional: true, required: false
  private _showPastIncidents?: boolean | cdktf.IResolvable; 
  public get showPastIncidents() {
    return this.getBooleanAttribute('show_past_incidents');
  }
  public set showPastIncidents(value: boolean | cdktf.IResolvable) {
    this._showPastIncidents = value;
  }
  public resetShowPastIncidents() {
    this._showPastIncidents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showPastIncidentsInput() {
    return this._showPastIncidents;
  }

  // show_status_tab - computed: true, optional: true, required: false
  private _showStatusTab?: boolean | cdktf.IResolvable; 
  public get showStatusTab() {
    return this.getBooleanAttribute('show_status_tab');
  }
  public set showStatusTab(value: boolean | cdktf.IResolvable) {
    this._showStatusTab = value;
  }
  public resetShowStatusTab() {
    this._showStatusTab = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showStatusTabInput() {
    return this._showStatusTab;
  }

  // show_summary_metrics - computed: true, optional: true, required: false
  private _showSummaryMetrics?: boolean | cdktf.IResolvable; 
  public get showSummaryMetrics() {
    return this.getBooleanAttribute('show_summary_metrics');
  }
  public set showSummaryMetrics(value: boolean | cdktf.IResolvable) {
    this._showSummaryMetrics = value;
  }
  public resetShowSummaryMetrics() {
    this._showSummaryMetrics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showSummaryMetricsInput() {
    return this._showSummaryMetrics;
  }

  // slug - computed: true, optional: true, required: false
  private _slug?: string; 
  public get slug() {
    return this.getStringAttribute('slug');
  }
  public set slug(value: string) {
    this._slug = value;
  }
  public resetSlug() {
    this._slug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slugInput() {
    return this._slug;
  }

  // theme - computed: true, optional: true, required: false
  private _theme?: string; 
  public get theme() {
    return this.getStringAttribute('theme');
  }
  public set theme(value: string) {
    this._theme = value;
  }
  public resetTheme() {
    this._theme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get themeInput() {
    return this._theme;
  }

  // timezone - computed: true, optional: true, required: false
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }

  // uptime_calculation_type - computed: true, optional: true, required: false
  private _uptimeCalculationType?: string; 
  public get uptimeCalculationType() {
    return this.getStringAttribute('uptime_calculation_type');
  }
  public set uptimeCalculationType(value: string) {
    this._uptimeCalculationType = value;
  }
  public resetUptimeCalculationType() {
    this._uptimeCalculationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uptimeCalculationTypeInput() {
    return this._uptimeCalculationType;
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // visibility_level - computed: true, optional: true, required: false
  private _visibilityLevel?: string; 
  public get visibilityLevel() {
    return this.getStringAttribute('visibility_level');
  }
  public set visibilityLevel(value: string) {
    this._visibilityLevel = value;
  }
  public resetVisibilityLevel() {
    this._visibilityLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityLevelInput() {
    return this._visibilityLevel;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_drill_down: cdktf.booleanToTerraform(this._allowDrillDown),
      allow_pdf_report: cdktf.booleanToTerraform(this._allowPdfReport),
      allow_search_indexing: cdktf.booleanToTerraform(this._allowSearchIndexing),
      allow_subscriptions: cdktf.booleanToTerraform(this._allowSubscriptions),
      allow_subscriptions_email: cdktf.booleanToTerraform(this._allowSubscriptionsEmail),
      allow_subscriptions_rss: cdktf.booleanToTerraform(this._allowSubscriptionsRss),
      allow_subscriptions_slack: cdktf.booleanToTerraform(this._allowSubscriptionsSlack),
      allow_subscriptions_sms: cdktf.booleanToTerraform(this._allowSubscriptionsSms),
      allow_subscriptions_webhook: cdktf.booleanToTerraform(this._allowSubscriptionsWebhook),
      auth_password: cdktf.stringToTerraform(this._authPassword),
      auth_username: cdktf.stringToTerraform(this._authUsername),
      cname: cdktf.stringToTerraform(this._cname),
      company_website_url: cdktf.stringToTerraform(this._companyWebsiteUrl),
      contact_email: cdktf.stringToTerraform(this._contactEmail),
      custom_css: cdktf.stringToTerraform(this._customCss),
      custom_footer_html: cdktf.stringToTerraform(this._customFooterHtml),
      custom_header_bg_color_hex: cdktf.stringToTerraform(this._customHeaderBgColorHex),
      custom_header_html: cdktf.stringToTerraform(this._customHeaderHtml),
      custom_header_text_color_hex: cdktf.stringToTerraform(this._customHeaderTextColorHex),
      default_history_date_range: cdktf.numberToTerraform(this._defaultHistoryDateRange),
      description: cdktf.stringToTerraform(this._description),
      email_from: cdktf.stringToTerraform(this._emailFrom),
      email_reply_to: cdktf.stringToTerraform(this._emailReplyTo),
      google_analytics_code: cdktf.stringToTerraform(this._googleAnalyticsCode),
      hide_empty_tabs_history: cdktf.booleanToTerraform(this._hideEmptyTabsHistory),
      max_visible_component_days: cdktf.numberToTerraform(this._maxVisibleComponentDays),
      name: cdktf.stringToTerraform(this._name),
      page_type: cdktf.stringToTerraform(this._pageType),
      show_active_incidents: cdktf.booleanToTerraform(this._showActiveIncidents),
      show_component_history: cdktf.booleanToTerraform(this._showComponentHistory),
      show_component_response_time: cdktf.booleanToTerraform(this._showComponentResponseTime),
      show_history_snake: cdktf.booleanToTerraform(this._showHistorySnake),
      show_history_tab: cdktf.booleanToTerraform(this._showHistoryTab),
      show_past_incidents: cdktf.booleanToTerraform(this._showPastIncidents),
      show_status_tab: cdktf.booleanToTerraform(this._showStatusTab),
      show_summary_metrics: cdktf.booleanToTerraform(this._showSummaryMetrics),
      slug: cdktf.stringToTerraform(this._slug),
      theme: cdktf.stringToTerraform(this._theme),
      timezone: cdktf.stringToTerraform(this._timezone),
      uptime_calculation_type: cdktf.stringToTerraform(this._uptimeCalculationType),
      visibility_level: cdktf.stringToTerraform(this._visibilityLevel),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_drill_down: {
        value: cdktf.booleanToHclTerraform(this._allowDrillDown),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_pdf_report: {
        value: cdktf.booleanToHclTerraform(this._allowPdfReport),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_search_indexing: {
        value: cdktf.booleanToHclTerraform(this._allowSearchIndexing),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_subscriptions: {
        value: cdktf.booleanToHclTerraform(this._allowSubscriptions),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_subscriptions_email: {
        value: cdktf.booleanToHclTerraform(this._allowSubscriptionsEmail),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_subscriptions_rss: {
        value: cdktf.booleanToHclTerraform(this._allowSubscriptionsRss),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_subscriptions_slack: {
        value: cdktf.booleanToHclTerraform(this._allowSubscriptionsSlack),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_subscriptions_sms: {
        value: cdktf.booleanToHclTerraform(this._allowSubscriptionsSms),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_subscriptions_webhook: {
        value: cdktf.booleanToHclTerraform(this._allowSubscriptionsWebhook),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auth_password: {
        value: cdktf.stringToHclTerraform(this._authPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_username: {
        value: cdktf.stringToHclTerraform(this._authUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cname: {
        value: cdktf.stringToHclTerraform(this._cname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      company_website_url: {
        value: cdktf.stringToHclTerraform(this._companyWebsiteUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      contact_email: {
        value: cdktf.stringToHclTerraform(this._contactEmail),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_css: {
        value: cdktf.stringToHclTerraform(this._customCss),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_footer_html: {
        value: cdktf.stringToHclTerraform(this._customFooterHtml),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_header_bg_color_hex: {
        value: cdktf.stringToHclTerraform(this._customHeaderBgColorHex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_header_html: {
        value: cdktf.stringToHclTerraform(this._customHeaderHtml),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_header_text_color_hex: {
        value: cdktf.stringToHclTerraform(this._customHeaderTextColorHex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_history_date_range: {
        value: cdktf.numberToHclTerraform(this._defaultHistoryDateRange),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      email_from: {
        value: cdktf.stringToHclTerraform(this._emailFrom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      email_reply_to: {
        value: cdktf.stringToHclTerraform(this._emailReplyTo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      google_analytics_code: {
        value: cdktf.stringToHclTerraform(this._googleAnalyticsCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hide_empty_tabs_history: {
        value: cdktf.booleanToHclTerraform(this._hideEmptyTabsHistory),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      max_visible_component_days: {
        value: cdktf.numberToHclTerraform(this._maxVisibleComponentDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      page_type: {
        value: cdktf.stringToHclTerraform(this._pageType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      show_active_incidents: {
        value: cdktf.booleanToHclTerraform(this._showActiveIncidents),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      show_component_history: {
        value: cdktf.booleanToHclTerraform(this._showComponentHistory),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      show_component_response_time: {
        value: cdktf.booleanToHclTerraform(this._showComponentResponseTime),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      show_history_snake: {
        value: cdktf.booleanToHclTerraform(this._showHistorySnake),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      show_history_tab: {
        value: cdktf.booleanToHclTerraform(this._showHistoryTab),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      show_past_incidents: {
        value: cdktf.booleanToHclTerraform(this._showPastIncidents),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      show_status_tab: {
        value: cdktf.booleanToHclTerraform(this._showStatusTab),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      show_summary_metrics: {
        value: cdktf.booleanToHclTerraform(this._showSummaryMetrics),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      slug: {
        value: cdktf.stringToHclTerraform(this._slug),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      theme: {
        value: cdktf.stringToHclTerraform(this._theme),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timezone: {
        value: cdktf.stringToHclTerraform(this._timezone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uptime_calculation_type: {
        value: cdktf.stringToHclTerraform(this._uptimeCalculationType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      visibility_level: {
        value: cdktf.stringToHclTerraform(this._visibilityLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
