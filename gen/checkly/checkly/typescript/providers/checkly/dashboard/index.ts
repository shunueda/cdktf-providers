// https://registry.terraform.io/providers/checkly/checkly/1.16.0/docs/resources/dashboard
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DashboardConfig extends cdktf.TerraformMetaArguments {
  /**
  * Determines how many checks to show per page. Possible values are between 1 and 20. (Default `15`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.16.0/docs/resources/dashboard#checks_per_page Dashboard#checks_per_page}
  */
  readonly checksPerPage?: number;
  /**
  * Custom CSS to be applied to the dashboard.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.16.0/docs/resources/dashboard#custom_css Dashboard#custom_css}
  */
  readonly customCss?: string;
  /**
  * A custom user domain, e.g. 'status.example.com'. See the docs on updating your DNS and SSL usage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.16.0/docs/resources/dashboard#custom_domain Dashboard#custom_domain}
  */
  readonly customDomain?: string;
  /**
  * A subdomain name under 'checklyhq.com'. Needs to be unique across all users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.16.0/docs/resources/dashboard#custom_url Dashboard#custom_url}
  */
  readonly customUrl: string;
  /**
  * HTML <meta> description for the dashboard.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.16.0/docs/resources/dashboard#description Dashboard#description}
  */
  readonly description?: string;
  /**
  * Enable incident support for the dashboard. (Default `false`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.16.0/docs/resources/dashboard#enable_incidents Dashboard#enable_incidents}
  */
  readonly enableIncidents?: boolean | cdktf.IResolvable;
  /**
  * Expand or collapse checks on the dashboard. (Default `false`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.16.0/docs/resources/dashboard#expand_checks Dashboard#expand_checks}
  */
  readonly expandChecks?: boolean | cdktf.IResolvable;
  /**
  * A URL pointing to an image file to use as browser favicon.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.16.0/docs/resources/dashboard#favicon Dashboard#favicon}
  */
  readonly favicon?: string;
  /**
  * A piece of text displayed at the top of your dashboard.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.16.0/docs/resources/dashboard#header Dashboard#header}
  */
  readonly header: string;
  /**
  * Show or hide the tags on the dashboard. (Default `false`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.16.0/docs/resources/dashboard#hide_tags Dashboard#hide_tags}
  */
  readonly hideTags?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.16.0/docs/resources/dashboard#id Dashboard#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Set your dashboard as private and generate key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.16.0/docs/resources/dashboard#is_private Dashboard#is_private}
  */
  readonly isPrivate?: boolean | cdktf.IResolvable;
  /**
  * A link to for the dashboard logo.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.16.0/docs/resources/dashboard#link Dashboard#link}
  */
  readonly link?: string;
  /**
  * A URL pointing to an image file to use for the dashboard logo.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.16.0/docs/resources/dashboard#logo Dashboard#logo}
  */
  readonly logo?: string;
  /**
  * Determines if pagination is on or off. (Default `true`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.16.0/docs/resources/dashboard#paginate Dashboard#paginate}
  */
  readonly paginate?: boolean | cdktf.IResolvable;
  /**
  * How often to trigger pagination in seconds. Possible values `30`, `60` and `300`. (Default `60`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.16.0/docs/resources/dashboard#pagination_rate Dashboard#pagination_rate}
  */
  readonly paginationRate?: number;
  /**
  * How often to refresh the dashboard in seconds. Possible values `60`, '300' and `600`. (Default `60`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.16.0/docs/resources/dashboard#refresh_rate Dashboard#refresh_rate}
  */
  readonly refreshRate?: number;
  /**
  * Show or hide check run links on the dashboard. (Default `false`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.16.0/docs/resources/dashboard#show_check_run_links Dashboard#show_check_run_links}
  */
  readonly showCheckRunLinks?: boolean | cdktf.IResolvable;
  /**
  * Show or hide header and description on the dashboard. (Default `true`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.16.0/docs/resources/dashboard#show_header Dashboard#show_header}
  */
  readonly showHeader?: boolean | cdktf.IResolvable;
  /**
  * Show or hide the P95 stats on the dashboard. (Default `true`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.16.0/docs/resources/dashboard#show_p95 Dashboard#show_p95}
  */
  readonly showP95?: boolean | cdktf.IResolvable;
  /**
  * Show or hide the P99 stats on the dashboard. (Default `true`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.16.0/docs/resources/dashboard#show_p99 Dashboard#show_p99}
  */
  readonly showP99?: boolean | cdktf.IResolvable;
  /**
  * A list of one or more tags that filter which checks to display on the dashboard.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.16.0/docs/resources/dashboard#tags Dashboard#tags}
  */
  readonly tags?: string[];
  /**
  * Set when to use AND operator for fetching dashboard tags. (Default `false`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.16.0/docs/resources/dashboard#use_tags_and_operator Dashboard#use_tags_and_operator}
  */
  readonly useTagsAndOperator?: boolean | cdktf.IResolvable;
  /**
  * Determines whether to use the full screen or focus in the center. Possible values are `FULL` and `960PX`. (Default `FULL`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.16.0/docs/resources/dashboard#width Dashboard#width}
  */
  readonly width?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkly/checkly/1.16.0/docs/resources/dashboard checkly_dashboard}
*/
export class Dashboard extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "checkly_dashboard";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Dashboard resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Dashboard to import
  * @param importFromId The id of the existing Dashboard that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkly/checkly/1.16.0/docs/resources/dashboard#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Dashboard to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "checkly_dashboard", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkly/checkly/1.16.0/docs/resources/dashboard checkly_dashboard} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DashboardConfig
  */
  public constructor(scope: Construct, id: string, config: DashboardConfig) {
    super(scope, id, {
      terraformResourceType: 'checkly_dashboard',
      terraformGeneratorMetadata: {
        providerName: 'checkly',
        providerVersion: '1.16.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._checksPerPage = config.checksPerPage;
    this._customCss = config.customCss;
    this._customDomain = config.customDomain;
    this._customUrl = config.customUrl;
    this._description = config.description;
    this._enableIncidents = config.enableIncidents;
    this._expandChecks = config.expandChecks;
    this._favicon = config.favicon;
    this._header = config.header;
    this._hideTags = config.hideTags;
    this._id = config.id;
    this._isPrivate = config.isPrivate;
    this._link = config.link;
    this._logo = config.logo;
    this._paginate = config.paginate;
    this._paginationRate = config.paginationRate;
    this._refreshRate = config.refreshRate;
    this._showCheckRunLinks = config.showCheckRunLinks;
    this._showHeader = config.showHeader;
    this._showP95 = config.showP95;
    this._showP99 = config.showP99;
    this._tags = config.tags;
    this._useTagsAndOperator = config.useTagsAndOperator;
    this._width = config.width;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // checks_per_page - computed: false, optional: true, required: false
  private _checksPerPage?: number; 
  public get checksPerPage() {
    return this.getNumberAttribute('checks_per_page');
  }
  public set checksPerPage(value: number) {
    this._checksPerPage = value;
  }
  public resetChecksPerPage() {
    this._checksPerPage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checksPerPageInput() {
    return this._checksPerPage;
  }

  // custom_css - computed: false, optional: true, required: false
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

  // custom_domain - computed: false, optional: true, required: false
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

  // custom_url - computed: false, optional: false, required: true
  private _customUrl?: string; 
  public get customUrl() {
    return this.getStringAttribute('custom_url');
  }
  public set customUrl(value: string) {
    this._customUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customUrlInput() {
    return this._customUrl;
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

  // enable_incidents - computed: false, optional: true, required: false
  private _enableIncidents?: boolean | cdktf.IResolvable; 
  public get enableIncidents() {
    return this.getBooleanAttribute('enable_incidents');
  }
  public set enableIncidents(value: boolean | cdktf.IResolvable) {
    this._enableIncidents = value;
  }
  public resetEnableIncidents() {
    this._enableIncidents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableIncidentsInput() {
    return this._enableIncidents;
  }

  // expand_checks - computed: false, optional: true, required: false
  private _expandChecks?: boolean | cdktf.IResolvable; 
  public get expandChecks() {
    return this.getBooleanAttribute('expand_checks');
  }
  public set expandChecks(value: boolean | cdktf.IResolvable) {
    this._expandChecks = value;
  }
  public resetExpandChecks() {
    this._expandChecks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expandChecksInput() {
    return this._expandChecks;
  }

  // favicon - computed: false, optional: true, required: false
  private _favicon?: string; 
  public get favicon() {
    return this.getStringAttribute('favicon');
  }
  public set favicon(value: string) {
    this._favicon = value;
  }
  public resetFavicon() {
    this._favicon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get faviconInput() {
    return this._favicon;
  }

  // header - computed: false, optional: false, required: true
  private _header?: string; 
  public get header() {
    return this.getStringAttribute('header');
  }
  public set header(value: string) {
    this._header = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header;
  }

  // hide_tags - computed: false, optional: true, required: false
  private _hideTags?: boolean | cdktf.IResolvable; 
  public get hideTags() {
    return this.getBooleanAttribute('hide_tags');
  }
  public set hideTags(value: boolean | cdktf.IResolvable) {
    this._hideTags = value;
  }
  public resetHideTags() {
    this._hideTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hideTagsInput() {
    return this._hideTags;
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

  // is_private - computed: false, optional: true, required: false
  private _isPrivate?: boolean | cdktf.IResolvable; 
  public get isPrivate() {
    return this.getBooleanAttribute('is_private');
  }
  public set isPrivate(value: boolean | cdktf.IResolvable) {
    this._isPrivate = value;
  }
  public resetIsPrivate() {
    this._isPrivate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPrivateInput() {
    return this._isPrivate;
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // link - computed: false, optional: true, required: false
  private _link?: string; 
  public get link() {
    return this.getStringAttribute('link');
  }
  public set link(value: string) {
    this._link = value;
  }
  public resetLink() {
    this._link = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkInput() {
    return this._link;
  }

  // logo - computed: false, optional: true, required: false
  private _logo?: string; 
  public get logo() {
    return this.getStringAttribute('logo');
  }
  public set logo(value: string) {
    this._logo = value;
  }
  public resetLogo() {
    this._logo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoInput() {
    return this._logo;
  }

  // paginate - computed: false, optional: true, required: false
  private _paginate?: boolean | cdktf.IResolvable; 
  public get paginate() {
    return this.getBooleanAttribute('paginate');
  }
  public set paginate(value: boolean | cdktf.IResolvable) {
    this._paginate = value;
  }
  public resetPaginate() {
    this._paginate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paginateInput() {
    return this._paginate;
  }

  // pagination_rate - computed: false, optional: true, required: false
  private _paginationRate?: number; 
  public get paginationRate() {
    return this.getNumberAttribute('pagination_rate');
  }
  public set paginationRate(value: number) {
    this._paginationRate = value;
  }
  public resetPaginationRate() {
    this._paginationRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paginationRateInput() {
    return this._paginationRate;
  }

  // refresh_rate - computed: false, optional: true, required: false
  private _refreshRate?: number; 
  public get refreshRate() {
    return this.getNumberAttribute('refresh_rate');
  }
  public set refreshRate(value: number) {
    this._refreshRate = value;
  }
  public resetRefreshRate() {
    this._refreshRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshRateInput() {
    return this._refreshRate;
  }

  // show_check_run_links - computed: false, optional: true, required: false
  private _showCheckRunLinks?: boolean | cdktf.IResolvable; 
  public get showCheckRunLinks() {
    return this.getBooleanAttribute('show_check_run_links');
  }
  public set showCheckRunLinks(value: boolean | cdktf.IResolvable) {
    this._showCheckRunLinks = value;
  }
  public resetShowCheckRunLinks() {
    this._showCheckRunLinks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showCheckRunLinksInput() {
    return this._showCheckRunLinks;
  }

  // show_header - computed: false, optional: true, required: false
  private _showHeader?: boolean | cdktf.IResolvable; 
  public get showHeader() {
    return this.getBooleanAttribute('show_header');
  }
  public set showHeader(value: boolean | cdktf.IResolvable) {
    this._showHeader = value;
  }
  public resetShowHeader() {
    this._showHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showHeaderInput() {
    return this._showHeader;
  }

  // show_p95 - computed: false, optional: true, required: false
  private _showP95?: boolean | cdktf.IResolvable; 
  public get showP95() {
    return this.getBooleanAttribute('show_p95');
  }
  public set showP95(value: boolean | cdktf.IResolvable) {
    this._showP95 = value;
  }
  public resetShowP95() {
    this._showP95 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showP95Input() {
    return this._showP95;
  }

  // show_p99 - computed: false, optional: true, required: false
  private _showP99?: boolean | cdktf.IResolvable; 
  public get showP99() {
    return this.getBooleanAttribute('show_p99');
  }
  public set showP99(value: boolean | cdktf.IResolvable) {
    this._showP99 = value;
  }
  public resetShowP99() {
    this._showP99 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showP99Input() {
    return this._showP99;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // use_tags_and_operator - computed: false, optional: true, required: false
  private _useTagsAndOperator?: boolean | cdktf.IResolvable; 
  public get useTagsAndOperator() {
    return this.getBooleanAttribute('use_tags_and_operator');
  }
  public set useTagsAndOperator(value: boolean | cdktf.IResolvable) {
    this._useTagsAndOperator = value;
  }
  public resetUseTagsAndOperator() {
    this._useTagsAndOperator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useTagsAndOperatorInput() {
    return this._useTagsAndOperator;
  }

  // width - computed: false, optional: true, required: false
  private _width?: string; 
  public get width() {
    return this.getStringAttribute('width');
  }
  public set width(value: string) {
    this._width = value;
  }
  public resetWidth() {
    this._width = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get widthInput() {
    return this._width;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      checks_per_page: cdktf.numberToTerraform(this._checksPerPage),
      custom_css: cdktf.stringToTerraform(this._customCss),
      custom_domain: cdktf.stringToTerraform(this._customDomain),
      custom_url: cdktf.stringToTerraform(this._customUrl),
      description: cdktf.stringToTerraform(this._description),
      enable_incidents: cdktf.booleanToTerraform(this._enableIncidents),
      expand_checks: cdktf.booleanToTerraform(this._expandChecks),
      favicon: cdktf.stringToTerraform(this._favicon),
      header: cdktf.stringToTerraform(this._header),
      hide_tags: cdktf.booleanToTerraform(this._hideTags),
      id: cdktf.stringToTerraform(this._id),
      is_private: cdktf.booleanToTerraform(this._isPrivate),
      link: cdktf.stringToTerraform(this._link),
      logo: cdktf.stringToTerraform(this._logo),
      paginate: cdktf.booleanToTerraform(this._paginate),
      pagination_rate: cdktf.numberToTerraform(this._paginationRate),
      refresh_rate: cdktf.numberToTerraform(this._refreshRate),
      show_check_run_links: cdktf.booleanToTerraform(this._showCheckRunLinks),
      show_header: cdktf.booleanToTerraform(this._showHeader),
      show_p95: cdktf.booleanToTerraform(this._showP95),
      show_p99: cdktf.booleanToTerraform(this._showP99),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      use_tags_and_operator: cdktf.booleanToTerraform(this._useTagsAndOperator),
      width: cdktf.stringToTerraform(this._width),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      checks_per_page: {
        value: cdktf.numberToHclTerraform(this._checksPerPage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      custom_url: {
        value: cdktf.stringToHclTerraform(this._customUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_incidents: {
        value: cdktf.booleanToHclTerraform(this._enableIncidents),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      expand_checks: {
        value: cdktf.booleanToHclTerraform(this._expandChecks),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      favicon: {
        value: cdktf.stringToHclTerraform(this._favicon),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      header: {
        value: cdktf.stringToHclTerraform(this._header),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hide_tags: {
        value: cdktf.booleanToHclTerraform(this._hideTags),
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
      is_private: {
        value: cdktf.booleanToHclTerraform(this._isPrivate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      link: {
        value: cdktf.stringToHclTerraform(this._link),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logo: {
        value: cdktf.stringToHclTerraform(this._logo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      paginate: {
        value: cdktf.booleanToHclTerraform(this._paginate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      pagination_rate: {
        value: cdktf.numberToHclTerraform(this._paginationRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      refresh_rate: {
        value: cdktf.numberToHclTerraform(this._refreshRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      show_check_run_links: {
        value: cdktf.booleanToHclTerraform(this._showCheckRunLinks),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      show_header: {
        value: cdktf.booleanToHclTerraform(this._showHeader),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      show_p95: {
        value: cdktf.booleanToHclTerraform(this._showP95),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      show_p99: {
        value: cdktf.booleanToHclTerraform(this._showP99),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      use_tags_and_operator: {
        value: cdktf.booleanToHclTerraform(this._useTagsAndOperator),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      width: {
        value: cdktf.stringToHclTerraform(this._width),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
