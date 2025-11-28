// https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/status_page
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StatusPageConfig extends cdktf.TerraformMetaArguments {
  /**
  * Allow search engines to include your public status page in search results. Value must be one of true or false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/status_page#allow_search_engine_index StatusPage#allow_search_engine_index}
  */
  readonly allowSearchEngineIndex?: boolean | cdktf.IResolvable;
  /**
  * Enable authentication (deprecated - use authentication_method instead). Value must be one of true or false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/status_page#authentication_enabled StatusPage#authentication_enabled}
  */
  readonly authenticationEnabled?: boolean | cdktf.IResolvable;
  /**
  * Authentication method. Value must be one of `none`, `password`, `saml`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/status_page#authentication_method StatusPage#authentication_method}
  */
  readonly authenticationMethod?: string;
  /**
  * Authentication password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/status_page#authentication_password StatusPage#authentication_password}
  */
  readonly authenticationPassword?: string;
  /**
  * The description of the status page
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/status_page#description StatusPage#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/status_page#enabled StatusPage#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * External domain names attached to the status page
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/status_page#external_domain_names StatusPage#external_domain_names}
  */
  readonly externalDomainNames?: string[];
  /**
  * Message showing when at least one component is not operational
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/status_page#failure_message StatusPage#failure_message}
  */
  readonly failureMessage?: string;
  /**
  * The color of the footer. Eg. "#1F2F41"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/status_page#footer_color StatusPage#footer_color}
  */
  readonly footerColor?: string;
  /**
  * Functionalities attached to the status page
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/status_page#functionality_ids StatusPage#functionality_ids}
  */
  readonly functionalityIds?: string[];
  /**
  * Google Analytics tracking ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/status_page#ga_tracking_id StatusPage#ga_tracking_id}
  */
  readonly gaTrackingId?: string;
  /**
  * The color of the header. Eg. "#0061F2"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/status_page#header_color StatusPage#header_color}
  */
  readonly headerColor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/status_page#id StatusPage#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Make the status page accessible to the public. Value must be one of true or false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/status_page#public StatusPage#public}
  */
  readonly public?: boolean | cdktf.IResolvable;
  /**
  * The public description of the status page
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/status_page#public_description StatusPage#public_description}
  */
  readonly publicDescription?: string;
  /**
  * The public title of the status page
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/status_page#public_title StatusPage#public_title}
  */
  readonly publicTitle?: string;
  /**
  * SAML IdP certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/status_page#saml_idp_cert StatusPage#saml_idp_cert}
  */
  readonly samlIdpCert?: string;
  /**
  * SAML IdP certificate fingerprint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/status_page#saml_idp_cert_fingerprint StatusPage#saml_idp_cert_fingerprint}
  */
  readonly samlIdpCertFingerprint?: string;
  /**
  * SAML IdP SLO service URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/status_page#saml_idp_slo_service_url StatusPage#saml_idp_slo_service_url}
  */
  readonly samlIdpSloServiceUrl?: string;
  /**
  * SAML IdP SSO service URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/status_page#saml_idp_sso_service_url StatusPage#saml_idp_sso_service_url}
  */
  readonly samlIdpSsoServiceUrl?: string;
  /**
  * SAML name identifier format. Value must be one of `urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress`, `urn:oasis:names:tc:SAML:2.0:nameid-format:persistent`, `urn:oasis:names:tc:SAML:2.0:nameid-format:transient`, `urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/status_page#saml_name_identifier_format StatusPage#saml_name_identifier_format}
  */
  readonly samlNameIdentifierFormat?: string;
  /**
  * Services attached to the status page
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/status_page#service_ids StatusPage#service_ids}
  */
  readonly serviceIds?: string[];
  /**
  * Show uptime. Value must be one of true or false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/status_page#show_uptime StatusPage#show_uptime}
  */
  readonly showUptime?: boolean | cdktf.IResolvable;
  /**
  * Show uptime over x days. Value must be one of `30`, `60`, `90`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/status_page#show_uptime_last_days StatusPage#show_uptime_last_days}
  */
  readonly showUptimeLastDays?: number;
  /**
  * The slug of the status page
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/status_page#slug StatusPage#slug}
  */
  readonly slug?: string;
  /**
  * Message showing when all components are operational
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/status_page#success_message StatusPage#success_message}
  */
  readonly successMessage?: string;
  /**
  * A valid IANA time zone name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/status_page#time_zone StatusPage#time_zone}
  */
  readonly timeZone?: string;
  /**
  * The title of the status page
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/status_page#title StatusPage#title}
  */
  readonly title: string;
  /**
  * Website Privacy URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/status_page#website_privacy_url StatusPage#website_privacy_url}
  */
  readonly websitePrivacyUrl?: string;
  /**
  * Website Support URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/status_page#website_support_url StatusPage#website_support_url}
  */
  readonly websiteSupportUrl?: string;
  /**
  * Website URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/status_page#website_url StatusPage#website_url}
  */
  readonly websiteUrl?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/status_page rootly_status_page}
*/
export class StatusPage extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rootly_status_page";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a StatusPage resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the StatusPage to import
  * @param importFromId The id of the existing StatusPage that should be imported. Refer to the {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/status_page#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the StatusPage to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rootly_status_page", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/status_page rootly_status_page} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StatusPageConfig
  */
  public constructor(scope: Construct, id: string, config: StatusPageConfig) {
    super(scope, id, {
      terraformResourceType: 'rootly_status_page',
      terraformGeneratorMetadata: {
        providerName: 'rootly',
        providerVersion: '4.3.9',
        providerVersionConstraint: '4.3.9'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowSearchEngineIndex = config.allowSearchEngineIndex;
    this._authenticationEnabled = config.authenticationEnabled;
    this._authenticationMethod = config.authenticationMethod;
    this._authenticationPassword = config.authenticationPassword;
    this._description = config.description;
    this._enabled = config.enabled;
    this._externalDomainNames = config.externalDomainNames;
    this._failureMessage = config.failureMessage;
    this._footerColor = config.footerColor;
    this._functionalityIds = config.functionalityIds;
    this._gaTrackingId = config.gaTrackingId;
    this._headerColor = config.headerColor;
    this._id = config.id;
    this._public = config.public;
    this._publicDescription = config.publicDescription;
    this._publicTitle = config.publicTitle;
    this._samlIdpCert = config.samlIdpCert;
    this._samlIdpCertFingerprint = config.samlIdpCertFingerprint;
    this._samlIdpSloServiceUrl = config.samlIdpSloServiceUrl;
    this._samlIdpSsoServiceUrl = config.samlIdpSsoServiceUrl;
    this._samlNameIdentifierFormat = config.samlNameIdentifierFormat;
    this._serviceIds = config.serviceIds;
    this._showUptime = config.showUptime;
    this._showUptimeLastDays = config.showUptimeLastDays;
    this._slug = config.slug;
    this._successMessage = config.successMessage;
    this._timeZone = config.timeZone;
    this._title = config.title;
    this._websitePrivacyUrl = config.websitePrivacyUrl;
    this._websiteSupportUrl = config.websiteSupportUrl;
    this._websiteUrl = config.websiteUrl;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_search_engine_index - computed: true, optional: true, required: false
  private _allowSearchEngineIndex?: boolean | cdktf.IResolvable; 
  public get allowSearchEngineIndex() {
    return this.getBooleanAttribute('allow_search_engine_index');
  }
  public set allowSearchEngineIndex(value: boolean | cdktf.IResolvable) {
    this._allowSearchEngineIndex = value;
  }
  public resetAllowSearchEngineIndex() {
    this._allowSearchEngineIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowSearchEngineIndexInput() {
    return this._allowSearchEngineIndex;
  }

  // authentication_enabled - computed: true, optional: true, required: false
  private _authenticationEnabled?: boolean | cdktf.IResolvable; 
  public get authenticationEnabled() {
    return this.getBooleanAttribute('authentication_enabled');
  }
  public set authenticationEnabled(value: boolean | cdktf.IResolvable) {
    this._authenticationEnabled = value;
  }
  public resetAuthenticationEnabled() {
    this._authenticationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationEnabledInput() {
    return this._authenticationEnabled;
  }

  // authentication_method - computed: false, optional: true, required: false
  private _authenticationMethod?: string; 
  public get authenticationMethod() {
    return this.getStringAttribute('authentication_method');
  }
  public set authenticationMethod(value: string) {
    this._authenticationMethod = value;
  }
  public resetAuthenticationMethod() {
    this._authenticationMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationMethodInput() {
    return this._authenticationMethod;
  }

  // authentication_password - computed: true, optional: true, required: false
  private _authenticationPassword?: string; 
  public get authenticationPassword() {
    return this.getStringAttribute('authentication_password');
  }
  public set authenticationPassword(value: string) {
    this._authenticationPassword = value;
  }
  public resetAuthenticationPassword() {
    this._authenticationPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationPasswordInput() {
    return this._authenticationPassword;
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

  // external_domain_names - computed: false, optional: true, required: false
  private _externalDomainNames?: string[]; 
  public get externalDomainNames() {
    return this.getListAttribute('external_domain_names');
  }
  public set externalDomainNames(value: string[]) {
    this._externalDomainNames = value;
  }
  public resetExternalDomainNames() {
    this._externalDomainNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalDomainNamesInput() {
    return this._externalDomainNames;
  }

  // failure_message - computed: true, optional: true, required: false
  private _failureMessage?: string; 
  public get failureMessage() {
    return this.getStringAttribute('failure_message');
  }
  public set failureMessage(value: string) {
    this._failureMessage = value;
  }
  public resetFailureMessage() {
    this._failureMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureMessageInput() {
    return this._failureMessage;
  }

  // footer_color - computed: true, optional: true, required: false
  private _footerColor?: string; 
  public get footerColor() {
    return this.getStringAttribute('footer_color');
  }
  public set footerColor(value: string) {
    this._footerColor = value;
  }
  public resetFooterColor() {
    this._footerColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get footerColorInput() {
    return this._footerColor;
  }

  // functionality_ids - computed: false, optional: true, required: false
  private _functionalityIds?: string[]; 
  public get functionalityIds() {
    return this.getListAttribute('functionality_ids');
  }
  public set functionalityIds(value: string[]) {
    this._functionalityIds = value;
  }
  public resetFunctionalityIds() {
    this._functionalityIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionalityIdsInput() {
    return this._functionalityIds;
  }

  // ga_tracking_id - computed: true, optional: true, required: false
  private _gaTrackingId?: string; 
  public get gaTrackingId() {
    return this.getStringAttribute('ga_tracking_id');
  }
  public set gaTrackingId(value: string) {
    this._gaTrackingId = value;
  }
  public resetGaTrackingId() {
    this._gaTrackingId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gaTrackingIdInput() {
    return this._gaTrackingId;
  }

  // header_color - computed: true, optional: true, required: false
  private _headerColor?: string; 
  public get headerColor() {
    return this.getStringAttribute('header_color');
  }
  public set headerColor(value: string) {
    this._headerColor = value;
  }
  public resetHeaderColor() {
    this._headerColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerColorInput() {
    return this._headerColor;
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

  // public - computed: true, optional: true, required: false
  private _public?: boolean | cdktf.IResolvable; 
  public get public() {
    return this.getBooleanAttribute('public');
  }
  public set public(value: boolean | cdktf.IResolvable) {
    this._public = value;
  }
  public resetPublic() {
    this._public = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicInput() {
    return this._public;
  }

  // public_description - computed: true, optional: true, required: false
  private _publicDescription?: string; 
  public get publicDescription() {
    return this.getStringAttribute('public_description');
  }
  public set publicDescription(value: string) {
    this._publicDescription = value;
  }
  public resetPublicDescription() {
    this._publicDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicDescriptionInput() {
    return this._publicDescription;
  }

  // public_title - computed: true, optional: true, required: false
  private _publicTitle?: string; 
  public get publicTitle() {
    return this.getStringAttribute('public_title');
  }
  public set publicTitle(value: string) {
    this._publicTitle = value;
  }
  public resetPublicTitle() {
    this._publicTitle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicTitleInput() {
    return this._publicTitle;
  }

  // saml_idp_cert - computed: true, optional: true, required: false
  private _samlIdpCert?: string; 
  public get samlIdpCert() {
    return this.getStringAttribute('saml_idp_cert');
  }
  public set samlIdpCert(value: string) {
    this._samlIdpCert = value;
  }
  public resetSamlIdpCert() {
    this._samlIdpCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samlIdpCertInput() {
    return this._samlIdpCert;
  }

  // saml_idp_cert_fingerprint - computed: true, optional: true, required: false
  private _samlIdpCertFingerprint?: string; 
  public get samlIdpCertFingerprint() {
    return this.getStringAttribute('saml_idp_cert_fingerprint');
  }
  public set samlIdpCertFingerprint(value: string) {
    this._samlIdpCertFingerprint = value;
  }
  public resetSamlIdpCertFingerprint() {
    this._samlIdpCertFingerprint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samlIdpCertFingerprintInput() {
    return this._samlIdpCertFingerprint;
  }

  // saml_idp_slo_service_url - computed: true, optional: true, required: false
  private _samlIdpSloServiceUrl?: string; 
  public get samlIdpSloServiceUrl() {
    return this.getStringAttribute('saml_idp_slo_service_url');
  }
  public set samlIdpSloServiceUrl(value: string) {
    this._samlIdpSloServiceUrl = value;
  }
  public resetSamlIdpSloServiceUrl() {
    this._samlIdpSloServiceUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samlIdpSloServiceUrlInput() {
    return this._samlIdpSloServiceUrl;
  }

  // saml_idp_sso_service_url - computed: true, optional: true, required: false
  private _samlIdpSsoServiceUrl?: string; 
  public get samlIdpSsoServiceUrl() {
    return this.getStringAttribute('saml_idp_sso_service_url');
  }
  public set samlIdpSsoServiceUrl(value: string) {
    this._samlIdpSsoServiceUrl = value;
  }
  public resetSamlIdpSsoServiceUrl() {
    this._samlIdpSsoServiceUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samlIdpSsoServiceUrlInput() {
    return this._samlIdpSsoServiceUrl;
  }

  // saml_name_identifier_format - computed: false, optional: true, required: false
  private _samlNameIdentifierFormat?: string; 
  public get samlNameIdentifierFormat() {
    return this.getStringAttribute('saml_name_identifier_format');
  }
  public set samlNameIdentifierFormat(value: string) {
    this._samlNameIdentifierFormat = value;
  }
  public resetSamlNameIdentifierFormat() {
    this._samlNameIdentifierFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samlNameIdentifierFormatInput() {
    return this._samlNameIdentifierFormat;
  }

  // service_ids - computed: false, optional: true, required: false
  private _serviceIds?: string[]; 
  public get serviceIds() {
    return this.getListAttribute('service_ids');
  }
  public set serviceIds(value: string[]) {
    this._serviceIds = value;
  }
  public resetServiceIds() {
    this._serviceIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceIdsInput() {
    return this._serviceIds;
  }

  // show_uptime - computed: true, optional: true, required: false
  private _showUptime?: boolean | cdktf.IResolvable; 
  public get showUptime() {
    return this.getBooleanAttribute('show_uptime');
  }
  public set showUptime(value: boolean | cdktf.IResolvable) {
    this._showUptime = value;
  }
  public resetShowUptime() {
    this._showUptime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showUptimeInput() {
    return this._showUptime;
  }

  // show_uptime_last_days - computed: true, optional: true, required: false
  private _showUptimeLastDays?: number; 
  public get showUptimeLastDays() {
    return this.getNumberAttribute('show_uptime_last_days');
  }
  public set showUptimeLastDays(value: number) {
    this._showUptimeLastDays = value;
  }
  public resetShowUptimeLastDays() {
    this._showUptimeLastDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showUptimeLastDaysInput() {
    return this._showUptimeLastDays;
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

  // success_message - computed: true, optional: true, required: false
  private _successMessage?: string; 
  public get successMessage() {
    return this.getStringAttribute('success_message');
  }
  public set successMessage(value: string) {
    this._successMessage = value;
  }
  public resetSuccessMessage() {
    this._successMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successMessageInput() {
    return this._successMessage;
  }

  // time_zone - computed: false, optional: true, required: false
  private _timeZone?: string; 
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
  public set timeZone(value: string) {
    this._timeZone = value;
  }
  public resetTimeZone() {
    this._timeZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneInput() {
    return this._timeZone;
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // website_privacy_url - computed: true, optional: true, required: false
  private _websitePrivacyUrl?: string; 
  public get websitePrivacyUrl() {
    return this.getStringAttribute('website_privacy_url');
  }
  public set websitePrivacyUrl(value: string) {
    this._websitePrivacyUrl = value;
  }
  public resetWebsitePrivacyUrl() {
    this._websitePrivacyUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get websitePrivacyUrlInput() {
    return this._websitePrivacyUrl;
  }

  // website_support_url - computed: true, optional: true, required: false
  private _websiteSupportUrl?: string; 
  public get websiteSupportUrl() {
    return this.getStringAttribute('website_support_url');
  }
  public set websiteSupportUrl(value: string) {
    this._websiteSupportUrl = value;
  }
  public resetWebsiteSupportUrl() {
    this._websiteSupportUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get websiteSupportUrlInput() {
    return this._websiteSupportUrl;
  }

  // website_url - computed: true, optional: true, required: false
  private _websiteUrl?: string; 
  public get websiteUrl() {
    return this.getStringAttribute('website_url');
  }
  public set websiteUrl(value: string) {
    this._websiteUrl = value;
  }
  public resetWebsiteUrl() {
    this._websiteUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get websiteUrlInput() {
    return this._websiteUrl;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_search_engine_index: cdktf.booleanToTerraform(this._allowSearchEngineIndex),
      authentication_enabled: cdktf.booleanToTerraform(this._authenticationEnabled),
      authentication_method: cdktf.stringToTerraform(this._authenticationMethod),
      authentication_password: cdktf.stringToTerraform(this._authenticationPassword),
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      external_domain_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._externalDomainNames),
      failure_message: cdktf.stringToTerraform(this._failureMessage),
      footer_color: cdktf.stringToTerraform(this._footerColor),
      functionality_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._functionalityIds),
      ga_tracking_id: cdktf.stringToTerraform(this._gaTrackingId),
      header_color: cdktf.stringToTerraform(this._headerColor),
      id: cdktf.stringToTerraform(this._id),
      public: cdktf.booleanToTerraform(this._public),
      public_description: cdktf.stringToTerraform(this._publicDescription),
      public_title: cdktf.stringToTerraform(this._publicTitle),
      saml_idp_cert: cdktf.stringToTerraform(this._samlIdpCert),
      saml_idp_cert_fingerprint: cdktf.stringToTerraform(this._samlIdpCertFingerprint),
      saml_idp_slo_service_url: cdktf.stringToTerraform(this._samlIdpSloServiceUrl),
      saml_idp_sso_service_url: cdktf.stringToTerraform(this._samlIdpSsoServiceUrl),
      saml_name_identifier_format: cdktf.stringToTerraform(this._samlNameIdentifierFormat),
      service_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._serviceIds),
      show_uptime: cdktf.booleanToTerraform(this._showUptime),
      show_uptime_last_days: cdktf.numberToTerraform(this._showUptimeLastDays),
      slug: cdktf.stringToTerraform(this._slug),
      success_message: cdktf.stringToTerraform(this._successMessage),
      time_zone: cdktf.stringToTerraform(this._timeZone),
      title: cdktf.stringToTerraform(this._title),
      website_privacy_url: cdktf.stringToTerraform(this._websitePrivacyUrl),
      website_support_url: cdktf.stringToTerraform(this._websiteSupportUrl),
      website_url: cdktf.stringToTerraform(this._websiteUrl),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_search_engine_index: {
        value: cdktf.booleanToHclTerraform(this._allowSearchEngineIndex),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      authentication_enabled: {
        value: cdktf.booleanToHclTerraform(this._authenticationEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      authentication_method: {
        value: cdktf.stringToHclTerraform(this._authenticationMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authentication_password: {
        value: cdktf.stringToHclTerraform(this._authenticationPassword),
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
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      external_domain_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._externalDomainNames),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      failure_message: {
        value: cdktf.stringToHclTerraform(this._failureMessage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      footer_color: {
        value: cdktf.stringToHclTerraform(this._footerColor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      functionality_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._functionalityIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      ga_tracking_id: {
        value: cdktf.stringToHclTerraform(this._gaTrackingId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      header_color: {
        value: cdktf.stringToHclTerraform(this._headerColor),
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
      public: {
        value: cdktf.booleanToHclTerraform(this._public),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      public_description: {
        value: cdktf.stringToHclTerraform(this._publicDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      public_title: {
        value: cdktf.stringToHclTerraform(this._publicTitle),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      saml_idp_cert: {
        value: cdktf.stringToHclTerraform(this._samlIdpCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      saml_idp_cert_fingerprint: {
        value: cdktf.stringToHclTerraform(this._samlIdpCertFingerprint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      saml_idp_slo_service_url: {
        value: cdktf.stringToHclTerraform(this._samlIdpSloServiceUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      saml_idp_sso_service_url: {
        value: cdktf.stringToHclTerraform(this._samlIdpSsoServiceUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      saml_name_identifier_format: {
        value: cdktf.stringToHclTerraform(this._samlNameIdentifierFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._serviceIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      show_uptime: {
        value: cdktf.booleanToHclTerraform(this._showUptime),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      show_uptime_last_days: {
        value: cdktf.numberToHclTerraform(this._showUptimeLastDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      slug: {
        value: cdktf.stringToHclTerraform(this._slug),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      success_message: {
        value: cdktf.stringToHclTerraform(this._successMessage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_zone: {
        value: cdktf.stringToHclTerraform(this._timeZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      title: {
        value: cdktf.stringToHclTerraform(this._title),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      website_privacy_url: {
        value: cdktf.stringToHclTerraform(this._websitePrivacyUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      website_support_url: {
        value: cdktf.stringToHclTerraform(this._websiteSupportUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      website_url: {
        value: cdktf.stringToHclTerraform(this._websiteUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
