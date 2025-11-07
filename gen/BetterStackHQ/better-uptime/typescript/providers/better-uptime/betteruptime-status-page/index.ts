// https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_status_page
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BetteruptimeStatusPageConfig extends cdktf.TerraformMetaArguments {
  /**
  * Add an announcement to your status page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_status_page#announcement BetteruptimeStatusPage#announcement}
  */
  readonly announcement?: string;
  /**
  * Modify the design of the announcement embed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_status_page#announcement_embed_css BetteruptimeStatusPage#announcement_embed_css}
  */
  readonly announcementEmbedCss?: string;
  /**
  * Point your embedded announcement to a specified URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_status_page#announcement_embed_link BetteruptimeStatusPage#announcement_embed_link}
  */
  readonly announcementEmbedLink?: string;
  /**
  * Toggle this field if you want to show an announcement in your embed. You can embed the announcement using this snippet: `<script src="https://uptime.betterstack.com/widgets/announcement.js" data-id="<SET STATUS_PAGE_ID>" async="async" type="text/javascript"></script>`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_status_page#announcement_embed_visible BetteruptimeStatusPage#announcement_embed_visible}
  */
  readonly announcementEmbedVisible?: boolean | cdktf.IResolvable;
  /**
  * Generate automatic reports when your services go down
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_status_page#automatic_reports BetteruptimeStatusPage#automatic_reports}
  */
  readonly automaticReports?: boolean | cdktf.IResolvable;
  /**
  * Name of your company.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_status_page#company_name BetteruptimeStatusPage#company_name}
  */
  readonly companyName: string;
  /**
  * URL of your company's website.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_status_page#company_url BetteruptimeStatusPage#company_url}
  */
  readonly companyUrl: string;
  /**
  * URL that should be used for contacting you in case of an emergency.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_status_page#contact_url BetteruptimeStatusPage#contact_url}
  */
  readonly contactUrl?: string;
  /**
  * Unleash your inner designer and tweak our status page design to fit your branding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_status_page#custom_css BetteruptimeStatusPage#custom_css}
  */
  readonly customCss?: string;
  /**
  * Do you want a custom domain on your status page? Add a CNAME record that points your domain to status.betteruptime.com. Example: `CNAME status.walmine.com statuspage.betteruptime.com`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_status_page#custom_domain BetteruptimeStatusPage#custom_domain}
  */
  readonly customDomain?: string;
  /**
  * Add custom behavior to your status page. It is only allowed for status pages with a custom domain name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_status_page#custom_javascript BetteruptimeStatusPage#custom_javascript}
  */
  readonly customJavascript?: string;
  /**
  * Choose between classic and modern status page design. Possible values: 'v1', 'v2'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_status_page#design BetteruptimeStatusPage#design}
  */
  readonly design?: string;
  /**
  * Specify your own Google Analytics ID if you want to receive hits on your status page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_status_page#google_analytics_id BetteruptimeStatusPage#google_analytics_id}
  */
  readonly googleAnalyticsId?: string;
  /**
  * Hide your status page from search engines.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_status_page#hide_from_search_engines BetteruptimeStatusPage#hide_from_search_engines}
  */
  readonly hideFromSearchEngines?: boolean | cdktf.IResolvable;
  /**
  * Number of days to display on the status page. Between 7 and 365 days.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_status_page#history BetteruptimeStatusPage#history}
  */
  readonly history?: number;
  /**
  * List of IP addresses or CIDR ranges that are allowed to access the status page. Accepts IPv4, IPv6, CIDR ranges, and comments starting with `#`. To remove all IP restrictions, set to an empty list `[]`. This is a [billable feature](https://betterstack.com/pricing#status-pages).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_status_page#ip_allowlist BetteruptimeStatusPage#ip_allowlist}
  */
  readonly ipAllowlist?: string[];
  /**
  * Choose usual vertical layout or space-saving horizontal layout. Only applicable when design: v2. Possible values: 'vertical', 'horizontal'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_status_page#layout BetteruptimeStatusPage#layout}
  */
  readonly layout?: string;
  /**
  * A direct link to your company's logo. The image should be under 20MB in size.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_status_page#logo_url BetteruptimeStatusPage#logo_url}
  */
  readonly logoUrl?: string;
  /**
  * If you don't want to display short incidents on your status page, this attribute is for you.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_status_page#min_incident_length BetteruptimeStatusPage#min_incident_length}
  */
  readonly minIncidentLength?: number;
  /**
  * Set a password of your status page (we won't store it as plaintext, promise). Required when password_enabled: true. We will set password_enabled: false automatically when you send us an empty password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_status_page#password BetteruptimeStatusPage#password}
  */
  readonly password?: string;
  /**
  * Do you want to enable password protection on your status page?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_status_page#password_enabled BetteruptimeStatusPage#password_enabled}
  */
  readonly passwordEnabled?: boolean | cdktf.IResolvable;
  /**
  * Set this attribute if you want to add this status page to a status page group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_status_page#status_page_group_id BetteruptimeStatusPage#status_page_group_id}
  */
  readonly statusPageGroupId?: number;
  /**
  * What subdomain should we use for your status page? This needs to be unique across our entire application, so choose carefully
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_status_page#subdomain BetteruptimeStatusPage#subdomain}
  */
  readonly subdomain: string;
  /**
  * Do you want to allow users to subscribe to your status page changes?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_status_page#subscribable BetteruptimeStatusPage#subscribable}
  */
  readonly subscribable?: boolean | cdktf.IResolvable;
  /**
  * Choose theme of your status page. Only applicable when design: v2. Possible values: 'light', 'dark'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_status_page#theme BetteruptimeStatusPage#theme}
  */
  readonly theme?: string;
  /**
  * What timezone should we display your status page in? The accepted values can be found in the Rails TimeZone documentation. https://api.rubyonrails.org/classes/ActiveSupport/TimeZone.html
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_status_page#timezone BetteruptimeStatusPage#timezone}
  */
  readonly timezone: string;
  /**
  * navigation_links block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_status_page#navigation_links BetteruptimeStatusPage#navigation_links}
  */
  readonly navigationLinks?: BetteruptimeStatusPageNavigationLinks[] | cdktf.IResolvable;
}
export interface BetteruptimeStatusPageNavigationLinks {
  /**
  * Href of the link. Use full URL for external links. Use `/`, `/maintenance` and `/incidents` for built-in links.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_status_page#href BetteruptimeStatusPage#href}
  */
  readonly href: string;
  /**
  * Label of the link.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_status_page#text BetteruptimeStatusPage#text}
  */
  readonly text: string;
}

export function betteruptimeStatusPageNavigationLinksToTerraform(struct?: BetteruptimeStatusPageNavigationLinks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    href: cdktf.stringToTerraform(struct!.href),
    text: cdktf.stringToTerraform(struct!.text),
  }
}


export function betteruptimeStatusPageNavigationLinksToHclTerraform(struct?: BetteruptimeStatusPageNavigationLinks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    href: {
      value: cdktf.stringToHclTerraform(struct!.href),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    text: {
      value: cdktf.stringToHclTerraform(struct!.text),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BetteruptimeStatusPageNavigationLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BetteruptimeStatusPageNavigationLinks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._href !== undefined) {
      hasAnyValues = true;
      internalValueResult.href = this._href;
    }
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BetteruptimeStatusPageNavigationLinks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._href = undefined;
      this._text = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._href = value.href;
      this._text = value.text;
    }
  }

  // href - computed: false, optional: false, required: true
  private _href?: string; 
  public get href() {
    return this.getStringAttribute('href');
  }
  public set href(value: string) {
    this._href = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hrefInput() {
    return this._href;
  }

  // text - computed: false, optional: false, required: true
  private _text?: string; 
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }
}

export class BetteruptimeStatusPageNavigationLinksList extends cdktf.ComplexList {
  public internalValue? : BetteruptimeStatusPageNavigationLinks[] | cdktf.IResolvable

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
  public get(index: number): BetteruptimeStatusPageNavigationLinksOutputReference {
    return new BetteruptimeStatusPageNavigationLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_status_page betteruptime_status_page}
*/
export class BetteruptimeStatusPage extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "betteruptime_status_page";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BetteruptimeStatusPage resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BetteruptimeStatusPage to import
  * @param importFromId The id of the existing BetteruptimeStatusPage that should be imported. Refer to the {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_status_page#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BetteruptimeStatusPage to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "betteruptime_status_page", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_status_page betteruptime_status_page} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BetteruptimeStatusPageConfig
  */
  public constructor(scope: Construct, id: string, config: BetteruptimeStatusPageConfig) {
    super(scope, id, {
      terraformResourceType: 'betteruptime_status_page',
      terraformGeneratorMetadata: {
        providerName: 'better-uptime',
        providerVersion: '0.20.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._announcement = config.announcement;
    this._announcementEmbedCss = config.announcementEmbedCss;
    this._announcementEmbedLink = config.announcementEmbedLink;
    this._announcementEmbedVisible = config.announcementEmbedVisible;
    this._automaticReports = config.automaticReports;
    this._companyName = config.companyName;
    this._companyUrl = config.companyUrl;
    this._contactUrl = config.contactUrl;
    this._customCss = config.customCss;
    this._customDomain = config.customDomain;
    this._customJavascript = config.customJavascript;
    this._design = config.design;
    this._googleAnalyticsId = config.googleAnalyticsId;
    this._hideFromSearchEngines = config.hideFromSearchEngines;
    this._history = config.history;
    this._ipAllowlist = config.ipAllowlist;
    this._layout = config.layout;
    this._logoUrl = config.logoUrl;
    this._minIncidentLength = config.minIncidentLength;
    this._password = config.password;
    this._passwordEnabled = config.passwordEnabled;
    this._statusPageGroupId = config.statusPageGroupId;
    this._subdomain = config.subdomain;
    this._subscribable = config.subscribable;
    this._theme = config.theme;
    this._timezone = config.timezone;
    this._navigationLinks.internalValue = config.navigationLinks;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aggregate_state - computed: true, optional: false, required: false
  public get aggregateState() {
    return this.getStringAttribute('aggregate_state');
  }

  // announcement - computed: true, optional: true, required: false
  private _announcement?: string; 
  public get announcement() {
    return this.getStringAttribute('announcement');
  }
  public set announcement(value: string) {
    this._announcement = value;
  }
  public resetAnnouncement() {
    this._announcement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get announcementInput() {
    return this._announcement;
  }

  // announcement_embed_css - computed: true, optional: true, required: false
  private _announcementEmbedCss?: string; 
  public get announcementEmbedCss() {
    return this.getStringAttribute('announcement_embed_css');
  }
  public set announcementEmbedCss(value: string) {
    this._announcementEmbedCss = value;
  }
  public resetAnnouncementEmbedCss() {
    this._announcementEmbedCss = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get announcementEmbedCssInput() {
    return this._announcementEmbedCss;
  }

  // announcement_embed_link - computed: true, optional: true, required: false
  private _announcementEmbedLink?: string; 
  public get announcementEmbedLink() {
    return this.getStringAttribute('announcement_embed_link');
  }
  public set announcementEmbedLink(value: string) {
    this._announcementEmbedLink = value;
  }
  public resetAnnouncementEmbedLink() {
    this._announcementEmbedLink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get announcementEmbedLinkInput() {
    return this._announcementEmbedLink;
  }

  // announcement_embed_visible - computed: true, optional: true, required: false
  private _announcementEmbedVisible?: boolean | cdktf.IResolvable; 
  public get announcementEmbedVisible() {
    return this.getBooleanAttribute('announcement_embed_visible');
  }
  public set announcementEmbedVisible(value: boolean | cdktf.IResolvable) {
    this._announcementEmbedVisible = value;
  }
  public resetAnnouncementEmbedVisible() {
    this._announcementEmbedVisible = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get announcementEmbedVisibleInput() {
    return this._announcementEmbedVisible;
  }

  // automatic_reports - computed: true, optional: true, required: false
  private _automaticReports?: boolean | cdktf.IResolvable; 
  public get automaticReports() {
    return this.getBooleanAttribute('automatic_reports');
  }
  public set automaticReports(value: boolean | cdktf.IResolvable) {
    this._automaticReports = value;
  }
  public resetAutomaticReports() {
    this._automaticReports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticReportsInput() {
    return this._automaticReports;
  }

  // company_name - computed: false, optional: false, required: true
  private _companyName?: string; 
  public get companyName() {
    return this.getStringAttribute('company_name');
  }
  public set companyName(value: string) {
    this._companyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get companyNameInput() {
    return this._companyName;
  }

  // company_url - computed: false, optional: false, required: true
  private _companyUrl?: string; 
  public get companyUrl() {
    return this.getStringAttribute('company_url');
  }
  public set companyUrl(value: string) {
    this._companyUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get companyUrlInput() {
    return this._companyUrl;
  }

  // contact_url - computed: true, optional: true, required: false
  private _contactUrl?: string; 
  public get contactUrl() {
    return this.getStringAttribute('contact_url');
  }
  public set contactUrl(value: string) {
    this._contactUrl = value;
  }
  public resetContactUrl() {
    this._contactUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contactUrlInput() {
    return this._contactUrl;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
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

  // custom_domain - computed: true, optional: true, required: false
  private _customDomain?: string; 
  public get customDomain() {
    return this.getStringAttribute('custom_domain');
  }
  public set customDomain(value: string) {
    this._customDomain = value;
  }
  public resetCustomDomain() {
    this._customDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customDomainInput() {
    return this._customDomain;
  }

  // custom_javascript - computed: true, optional: true, required: false
  private _customJavascript?: string; 
  public get customJavascript() {
    return this.getStringAttribute('custom_javascript');
  }
  public set customJavascript(value: string) {
    this._customJavascript = value;
  }
  public resetCustomJavascript() {
    this._customJavascript = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customJavascriptInput() {
    return this._customJavascript;
  }

  // design - computed: true, optional: true, required: false
  private _design?: string; 
  public get design() {
    return this.getStringAttribute('design');
  }
  public set design(value: string) {
    this._design = value;
  }
  public resetDesign() {
    this._design = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get designInput() {
    return this._design;
  }

  // google_analytics_id - computed: true, optional: true, required: false
  private _googleAnalyticsId?: string; 
  public get googleAnalyticsId() {
    return this.getStringAttribute('google_analytics_id');
  }
  public set googleAnalyticsId(value: string) {
    this._googleAnalyticsId = value;
  }
  public resetGoogleAnalyticsId() {
    this._googleAnalyticsId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleAnalyticsIdInput() {
    return this._googleAnalyticsId;
  }

  // hide_from_search_engines - computed: true, optional: true, required: false
  private _hideFromSearchEngines?: boolean | cdktf.IResolvable; 
  public get hideFromSearchEngines() {
    return this.getBooleanAttribute('hide_from_search_engines');
  }
  public set hideFromSearchEngines(value: boolean | cdktf.IResolvable) {
    this._hideFromSearchEngines = value;
  }
  public resetHideFromSearchEngines() {
    this._hideFromSearchEngines = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hideFromSearchEnginesInput() {
    return this._hideFromSearchEngines;
  }

  // history - computed: true, optional: true, required: false
  private _history?: number; 
  public get history() {
    return this.getNumberAttribute('history');
  }
  public set history(value: number) {
    this._history = value;
  }
  public resetHistory() {
    this._history = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get historyInput() {
    return this._history;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_allowlist - computed: false, optional: true, required: false
  private _ipAllowlist?: string[]; 
  public get ipAllowlist() {
    return this.getListAttribute('ip_allowlist');
  }
  public set ipAllowlist(value: string[]) {
    this._ipAllowlist = value;
  }
  public resetIpAllowlist() {
    this._ipAllowlist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAllowlistInput() {
    return this._ipAllowlist;
  }

  // layout - computed: true, optional: true, required: false
  private _layout?: string; 
  public get layout() {
    return this.getStringAttribute('layout');
  }
  public set layout(value: string) {
    this._layout = value;
  }
  public resetLayout() {
    this._layout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get layoutInput() {
    return this._layout;
  }

  // logo_url - computed: true, optional: true, required: false
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

  // min_incident_length - computed: true, optional: true, required: false
  private _minIncidentLength?: number; 
  public get minIncidentLength() {
    return this.getNumberAttribute('min_incident_length');
  }
  public set minIncidentLength(value: number) {
    this._minIncidentLength = value;
  }
  public resetMinIncidentLength() {
    this._minIncidentLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minIncidentLengthInput() {
    return this._minIncidentLength;
  }

  // password - computed: true, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // password_enabled - computed: true, optional: true, required: false
  private _passwordEnabled?: boolean | cdktf.IResolvable; 
  public get passwordEnabled() {
    return this.getBooleanAttribute('password_enabled');
  }
  public set passwordEnabled(value: boolean | cdktf.IResolvable) {
    this._passwordEnabled = value;
  }
  public resetPasswordEnabled() {
    this._passwordEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordEnabledInput() {
    return this._passwordEnabled;
  }

  // status_page_group_id - computed: true, optional: true, required: false
  private _statusPageGroupId?: number; 
  public get statusPageGroupId() {
    return this.getNumberAttribute('status_page_group_id');
  }
  public set statusPageGroupId(value: number) {
    this._statusPageGroupId = value;
  }
  public resetStatusPageGroupId() {
    this._statusPageGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusPageGroupIdInput() {
    return this._statusPageGroupId;
  }

  // subdomain - computed: false, optional: false, required: true
  private _subdomain?: string; 
  public get subdomain() {
    return this.getStringAttribute('subdomain');
  }
  public set subdomain(value: string) {
    this._subdomain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subdomainInput() {
    return this._subdomain;
  }

  // subscribable - computed: true, optional: true, required: false
  private _subscribable?: boolean | cdktf.IResolvable; 
  public get subscribable() {
    return this.getBooleanAttribute('subscribable');
  }
  public set subscribable(value: boolean | cdktf.IResolvable) {
    this._subscribable = value;
  }
  public resetSubscribable() {
    this._subscribable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscribableInput() {
    return this._subscribable;
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

  // timezone - computed: false, optional: false, required: true
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // navigation_links - computed: false, optional: true, required: false
  private _navigationLinks = new BetteruptimeStatusPageNavigationLinksList(this, "navigation_links", false);
  public get navigationLinks() {
    return this._navigationLinks;
  }
  public putNavigationLinks(value: BetteruptimeStatusPageNavigationLinks[] | cdktf.IResolvable) {
    this._navigationLinks.internalValue = value;
  }
  public resetNavigationLinks() {
    this._navigationLinks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get navigationLinksInput() {
    return this._navigationLinks.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      announcement: cdktf.stringToTerraform(this._announcement),
      announcement_embed_css: cdktf.stringToTerraform(this._announcementEmbedCss),
      announcement_embed_link: cdktf.stringToTerraform(this._announcementEmbedLink),
      announcement_embed_visible: cdktf.booleanToTerraform(this._announcementEmbedVisible),
      automatic_reports: cdktf.booleanToTerraform(this._automaticReports),
      company_name: cdktf.stringToTerraform(this._companyName),
      company_url: cdktf.stringToTerraform(this._companyUrl),
      contact_url: cdktf.stringToTerraform(this._contactUrl),
      custom_css: cdktf.stringToTerraform(this._customCss),
      custom_domain: cdktf.stringToTerraform(this._customDomain),
      custom_javascript: cdktf.stringToTerraform(this._customJavascript),
      design: cdktf.stringToTerraform(this._design),
      google_analytics_id: cdktf.stringToTerraform(this._googleAnalyticsId),
      hide_from_search_engines: cdktf.booleanToTerraform(this._hideFromSearchEngines),
      history: cdktf.numberToTerraform(this._history),
      ip_allowlist: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipAllowlist),
      layout: cdktf.stringToTerraform(this._layout),
      logo_url: cdktf.stringToTerraform(this._logoUrl),
      min_incident_length: cdktf.numberToTerraform(this._minIncidentLength),
      password: cdktf.stringToTerraform(this._password),
      password_enabled: cdktf.booleanToTerraform(this._passwordEnabled),
      status_page_group_id: cdktf.numberToTerraform(this._statusPageGroupId),
      subdomain: cdktf.stringToTerraform(this._subdomain),
      subscribable: cdktf.booleanToTerraform(this._subscribable),
      theme: cdktf.stringToTerraform(this._theme),
      timezone: cdktf.stringToTerraform(this._timezone),
      navigation_links: cdktf.listMapper(betteruptimeStatusPageNavigationLinksToTerraform, true)(this._navigationLinks.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      announcement: {
        value: cdktf.stringToHclTerraform(this._announcement),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      announcement_embed_css: {
        value: cdktf.stringToHclTerraform(this._announcementEmbedCss),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      announcement_embed_link: {
        value: cdktf.stringToHclTerraform(this._announcementEmbedLink),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      announcement_embed_visible: {
        value: cdktf.booleanToHclTerraform(this._announcementEmbedVisible),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      automatic_reports: {
        value: cdktf.booleanToHclTerraform(this._automaticReports),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      company_name: {
        value: cdktf.stringToHclTerraform(this._companyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      company_url: {
        value: cdktf.stringToHclTerraform(this._companyUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      contact_url: {
        value: cdktf.stringToHclTerraform(this._contactUrl),
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
      custom_domain: {
        value: cdktf.stringToHclTerraform(this._customDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_javascript: {
        value: cdktf.stringToHclTerraform(this._customJavascript),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      design: {
        value: cdktf.stringToHclTerraform(this._design),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      google_analytics_id: {
        value: cdktf.stringToHclTerraform(this._googleAnalyticsId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hide_from_search_engines: {
        value: cdktf.booleanToHclTerraform(this._hideFromSearchEngines),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      history: {
        value: cdktf.numberToHclTerraform(this._history),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ip_allowlist: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ipAllowlist),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      layout: {
        value: cdktf.stringToHclTerraform(this._layout),
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
      min_incident_length: {
        value: cdktf.numberToHclTerraform(this._minIncidentLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password_enabled: {
        value: cdktf.booleanToHclTerraform(this._passwordEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      status_page_group_id: {
        value: cdktf.numberToHclTerraform(this._statusPageGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      subdomain: {
        value: cdktf.stringToHclTerraform(this._subdomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subscribable: {
        value: cdktf.booleanToHclTerraform(this._subscribable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      navigation_links: {
        value: cdktf.listMapperHcl(betteruptimeStatusPageNavigationLinksToHclTerraform, true)(this._navigationLinks.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BetteruptimeStatusPageNavigationLinksList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
