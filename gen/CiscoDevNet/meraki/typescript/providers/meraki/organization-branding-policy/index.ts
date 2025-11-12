// https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/organization_branding_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrganizationBrandingPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Which kinds of admins this policy applies to. Can be one of `All organization admins`, `All enterprise admins`, `All network admins`, `All admins of networks...`, `All admins of networks tagged...`, `Specific admins...`, `All admins` or `All SAML admins`.
  *   - Choices: `All SAML admins`, `All admins`, `All admins of networks tagged...`, `All admins of networks...`, `All enterprise admins`, `All network admins`, `All organization admins`, `Specific admins...`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/organization_branding_policy#admin_settings_applies_to OrganizationBrandingPolicy#admin_settings_applies_to}
  */
  readonly adminSettingsAppliesTo?: string;
  /**
  * If `appliesTo` is set to one of `Specific admins...`, `All admins of networks...` or `All admins of networks tagged...`, then you must specify this `values` property to provide the set of entities to apply the branding policy to. For `Specific admins...`, specify an array of admin IDs. For `All admins of networks...`, specify an array of network IDs and/or configuration template IDs. For `All admins of networks tagged...`, specify an array of tag names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/organization_branding_policy#admin_settings_values OrganizationBrandingPolicy#admin_settings_values}
  */
  readonly adminSettingsValues?: string[];
  /**
  * Whether or not there is a custom logo enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/organization_branding_policy#custom_logo_enabled OrganizationBrandingPolicy#custom_logo_enabled}
  */
  readonly customLogoEnabled?: boolean | cdktf.IResolvable;
  /**
  * The file contents (a base 64 encoded string) of your new logo.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/organization_branding_policy#custom_logo_image_contents OrganizationBrandingPolicy#custom_logo_image_contents}
  */
  readonly customLogoImageContents?: string;
  /**
  * The format of the encoded contents. Supported formats are `png`, `gif`, and jpg`.
  *   - Choices: `gif`, `jpg`, `png`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/organization_branding_policy#custom_logo_image_format OrganizationBrandingPolicy#custom_logo_image_format}
  */
  readonly customLogoImageFormat?: string;
  /**
  * Boolean indicating whether this policy is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/organization_branding_policy#enabled OrganizationBrandingPolicy#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The `Help -> API docs` subtab where a detailed description of the Dashboard API is listed. Can be one of `default or inherit`, `hide` or `show`.
  *   - Choices: `default or inherit`, `hide`, `show`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/organization_branding_policy#help_settings_api_docs_subtab OrganizationBrandingPolicy#help_settings_api_docs_subtab}
  */
  readonly helpSettingsApiDocsSubtab?: string;
  /**
  * The `Help -> Cases` Dashboard subtab on which Cisco Meraki support cases for this organization can be managed. Can be one of `default or inherit`, `hide` or `show`.
  *   - Choices: `default or inherit`, `hide`, `show`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/organization_branding_policy#help_settings_cases_subtab OrganizationBrandingPolicy#help_settings_cases_subtab}
  */
  readonly helpSettingsCasesSubtab?: string;
  /**
  * The `Product Manuals` section of the `Help -> Get Help` subtab. Can be one of `default or inherit`, `hide`, `show`, or a replacement custom HTML string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/organization_branding_policy#help_settings_cisco_meraki_product_documentation OrganizationBrandingPolicy#help_settings_cisco_meraki_product_documentation}
  */
  readonly helpSettingsCiscoMerakiProductDocumentation?: string;
  /**
  * The `Help -> Community` subtab which provides a link to Meraki Community. Can be one of `default or inherit`, `hide` or `show`.
  *   - Choices: `default or inherit`, `hide`, `show`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/organization_branding_policy#help_settings_community_subtab OrganizationBrandingPolicy#help_settings_community_subtab}
  */
  readonly helpSettingsCommunitySubtab?: string;
  /**
  * The `Help -> Data protection requests` Dashboard subtab on which requests to delete, restrict, or export end-user data can be audited. Can be one of `default or inherit`, `hide` or `show`.
  *   - Choices: `default or inherit`, `hide`, `show`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/organization_branding_policy#help_settings_data_protection_requests_subtab OrganizationBrandingPolicy#help_settings_data_protection_requests_subtab}
  */
  readonly helpSettingsDataProtectionRequestsSubtab?: string;
  /**
  * The `Help -> Firewall info` subtab where necessary upstream firewall rules for communication to the Cisco Meraki cloud are listed. Can be one of `default or inherit`, `hide` or `show`.
  *   - Choices: `default or inherit`, `hide`, `show`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/organization_branding_policy#help_settings_firewall_info_subtab OrganizationBrandingPolicy#help_settings_firewall_info_subtab}
  */
  readonly helpSettingsFirewallInfoSubtab?: string;
  /**
  * The `Help -> Get Help` subtab on which Cisco Meraki KB, Product Manuals, and Support/Case Information are displayed. Note that if this subtab is hidden, branding customizations for the KB on `Get help`, Cisco Meraki product documentation, and support contact info will not be visible. Can be one of `default or inherit`, `hide` or `show`.
  *   - Choices: `default or inherit`, `hide`, `show`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/organization_branding_policy#help_settings_get_help_subtab OrganizationBrandingPolicy#help_settings_get_help_subtab}
  */
  readonly helpSettingsGetHelpSubtab?: string;
  /**
  * The KB search box which appears on the Help page. Can be one of `default or inherit`, `hide`, `show`, or a replacement custom HTML string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/organization_branding_policy#help_settings_get_help_subtab_knowledge_base_search OrganizationBrandingPolicy#help_settings_get_help_subtab_knowledge_base_search}
  */
  readonly helpSettingsGetHelpSubtabKnowledgeBaseSearch?: string;
  /**
  * The `Help -> Replacement info` subtab where important information regarding device replacements is detailed. Can be one of `default or inherit`, `hide` or `show`.
  *   - Choices: `default or inherit`, `hide`, `show`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/organization_branding_policy#help_settings_hardware_replacements_subtab OrganizationBrandingPolicy#help_settings_hardware_replacements_subtab}
  */
  readonly helpSettingsHardwareReplacementsSubtab?: string;
  /**
  * The Help tab, under which all support information resides. If this tab is hidden, no other `Help` branding customizations will be visible. Can be one of `default or inherit`, `hide` or `show`.
  *   - Choices: `default or inherit`, `hide`, `show`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/organization_branding_policy#help_settings_help_tab OrganizationBrandingPolicy#help_settings_help_tab}
  */
  readonly helpSettingsHelpTab?: string;
  /**
  * The `Help Widget` is a support widget which provides access to live chat, documentation links, Sales contact info, and other contact avenues to reach Meraki Support. Can be one of `default or inherit`, `hide` or `show`.
  *   - Choices: `default or inherit`, `hide`, `show`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/organization_branding_policy#help_settings_help_widget OrganizationBrandingPolicy#help_settings_help_widget}
  */
  readonly helpSettingsHelpWidget?: string;
  /**
  * The `Help -> New features` subtab where new Dashboard features are detailed. Can be one of `default or inherit`, `hide` or `show`.
  *   - Choices: `default or inherit`, `hide`, `show`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/organization_branding_policy#help_settings_new_features_subtab OrganizationBrandingPolicy#help_settings_new_features_subtab}
  */
  readonly helpSettingsNewFeaturesSubtab?: string;
  /**
  * The `SM Forums` subtab which links to community-based support for Cisco Meraki Systems Manager. Only configurable for organizations that contain Systems Manager networks. Can be one of `default or inherit`, `hide` or `show`.
  *   - Choices: `default or inherit`, `hide`, `show`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/organization_branding_policy#help_settings_sm_forums OrganizationBrandingPolicy#help_settings_sm_forums}
  */
  readonly helpSettingsSmForums?: string;
  /**
  * The `Contact Meraki Support` section of the `Help -> Get Help` subtab. Can be one of `default or inherit`, `hide`, `show`, or a replacement custom HTML string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/organization_branding_policy#help_settings_support_contact_info OrganizationBrandingPolicy#help_settings_support_contact_info}
  */
  readonly helpSettingsSupportContactInfo?: string;
  /**
  * The universal search box always visible on Dashboard will, by default, present results from the Meraki KB. This configures whether these Meraki KB results should be returned. Can be one of `default or inherit`, `hide` or `show`.
  *   - Choices: `default or inherit`, `hide`, `show`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/organization_branding_policy#help_settings_universal_search_knowledge_base_search OrganizationBrandingPolicy#help_settings_universal_search_knowledge_base_search}
  */
  readonly helpSettingsUniversalSearchKnowledgeBaseSearch?: string;
  /**
  * Name of the Dashboard branding policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/organization_branding_policy#name OrganizationBrandingPolicy#name}
  */
  readonly name: string;
  /**
  * Organization ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/organization_branding_policy#organization_id OrganizationBrandingPolicy#organization_id}
  */
  readonly organizationId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/organization_branding_policy meraki_organization_branding_policy}
*/
export class OrganizationBrandingPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_organization_branding_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OrganizationBrandingPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OrganizationBrandingPolicy to import
  * @param importFromId The id of the existing OrganizationBrandingPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/organization_branding_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OrganizationBrandingPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_organization_branding_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/organization_branding_policy meraki_organization_branding_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrganizationBrandingPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: OrganizationBrandingPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_organization_branding_policy',
      terraformGeneratorMetadata: {
        providerName: 'meraki',
        providerVersion: '1.7.1',
        providerVersionConstraint: '1.7.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adminSettingsAppliesTo = config.adminSettingsAppliesTo;
    this._adminSettingsValues = config.adminSettingsValues;
    this._customLogoEnabled = config.customLogoEnabled;
    this._customLogoImageContents = config.customLogoImageContents;
    this._customLogoImageFormat = config.customLogoImageFormat;
    this._enabled = config.enabled;
    this._helpSettingsApiDocsSubtab = config.helpSettingsApiDocsSubtab;
    this._helpSettingsCasesSubtab = config.helpSettingsCasesSubtab;
    this._helpSettingsCiscoMerakiProductDocumentation = config.helpSettingsCiscoMerakiProductDocumentation;
    this._helpSettingsCommunitySubtab = config.helpSettingsCommunitySubtab;
    this._helpSettingsDataProtectionRequestsSubtab = config.helpSettingsDataProtectionRequestsSubtab;
    this._helpSettingsFirewallInfoSubtab = config.helpSettingsFirewallInfoSubtab;
    this._helpSettingsGetHelpSubtab = config.helpSettingsGetHelpSubtab;
    this._helpSettingsGetHelpSubtabKnowledgeBaseSearch = config.helpSettingsGetHelpSubtabKnowledgeBaseSearch;
    this._helpSettingsHardwareReplacementsSubtab = config.helpSettingsHardwareReplacementsSubtab;
    this._helpSettingsHelpTab = config.helpSettingsHelpTab;
    this._helpSettingsHelpWidget = config.helpSettingsHelpWidget;
    this._helpSettingsNewFeaturesSubtab = config.helpSettingsNewFeaturesSubtab;
    this._helpSettingsSmForums = config.helpSettingsSmForums;
    this._helpSettingsSupportContactInfo = config.helpSettingsSupportContactInfo;
    this._helpSettingsUniversalSearchKnowledgeBaseSearch = config.helpSettingsUniversalSearchKnowledgeBaseSearch;
    this._name = config.name;
    this._organizationId = config.organizationId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_settings_applies_to - computed: false, optional: true, required: false
  private _adminSettingsAppliesTo?: string; 
  public get adminSettingsAppliesTo() {
    return this.getStringAttribute('admin_settings_applies_to');
  }
  public set adminSettingsAppliesTo(value: string) {
    this._adminSettingsAppliesTo = value;
  }
  public resetAdminSettingsAppliesTo() {
    this._adminSettingsAppliesTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminSettingsAppliesToInput() {
    return this._adminSettingsAppliesTo;
  }

  // admin_settings_values - computed: false, optional: true, required: false
  private _adminSettingsValues?: string[]; 
  public get adminSettingsValues() {
    return this.getListAttribute('admin_settings_values');
  }
  public set adminSettingsValues(value: string[]) {
    this._adminSettingsValues = value;
  }
  public resetAdminSettingsValues() {
    this._adminSettingsValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminSettingsValuesInput() {
    return this._adminSettingsValues;
  }

  // custom_logo_enabled - computed: false, optional: true, required: false
  private _customLogoEnabled?: boolean | cdktf.IResolvable; 
  public get customLogoEnabled() {
    return this.getBooleanAttribute('custom_logo_enabled');
  }
  public set customLogoEnabled(value: boolean | cdktf.IResolvable) {
    this._customLogoEnabled = value;
  }
  public resetCustomLogoEnabled() {
    this._customLogoEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customLogoEnabledInput() {
    return this._customLogoEnabled;
  }

  // custom_logo_image_contents - computed: false, optional: true, required: false
  private _customLogoImageContents?: string; 
  public get customLogoImageContents() {
    return this.getStringAttribute('custom_logo_image_contents');
  }
  public set customLogoImageContents(value: string) {
    this._customLogoImageContents = value;
  }
  public resetCustomLogoImageContents() {
    this._customLogoImageContents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customLogoImageContentsInput() {
    return this._customLogoImageContents;
  }

  // custom_logo_image_format - computed: false, optional: true, required: false
  private _customLogoImageFormat?: string; 
  public get customLogoImageFormat() {
    return this.getStringAttribute('custom_logo_image_format');
  }
  public set customLogoImageFormat(value: string) {
    this._customLogoImageFormat = value;
  }
  public resetCustomLogoImageFormat() {
    this._customLogoImageFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customLogoImageFormatInput() {
    return this._customLogoImageFormat;
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

  // help_settings_api_docs_subtab - computed: false, optional: true, required: false
  private _helpSettingsApiDocsSubtab?: string; 
  public get helpSettingsApiDocsSubtab() {
    return this.getStringAttribute('help_settings_api_docs_subtab');
  }
  public set helpSettingsApiDocsSubtab(value: string) {
    this._helpSettingsApiDocsSubtab = value;
  }
  public resetHelpSettingsApiDocsSubtab() {
    this._helpSettingsApiDocsSubtab = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helpSettingsApiDocsSubtabInput() {
    return this._helpSettingsApiDocsSubtab;
  }

  // help_settings_cases_subtab - computed: false, optional: true, required: false
  private _helpSettingsCasesSubtab?: string; 
  public get helpSettingsCasesSubtab() {
    return this.getStringAttribute('help_settings_cases_subtab');
  }
  public set helpSettingsCasesSubtab(value: string) {
    this._helpSettingsCasesSubtab = value;
  }
  public resetHelpSettingsCasesSubtab() {
    this._helpSettingsCasesSubtab = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helpSettingsCasesSubtabInput() {
    return this._helpSettingsCasesSubtab;
  }

  // help_settings_cisco_meraki_product_documentation - computed: false, optional: true, required: false
  private _helpSettingsCiscoMerakiProductDocumentation?: string; 
  public get helpSettingsCiscoMerakiProductDocumentation() {
    return this.getStringAttribute('help_settings_cisco_meraki_product_documentation');
  }
  public set helpSettingsCiscoMerakiProductDocumentation(value: string) {
    this._helpSettingsCiscoMerakiProductDocumentation = value;
  }
  public resetHelpSettingsCiscoMerakiProductDocumentation() {
    this._helpSettingsCiscoMerakiProductDocumentation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helpSettingsCiscoMerakiProductDocumentationInput() {
    return this._helpSettingsCiscoMerakiProductDocumentation;
  }

  // help_settings_community_subtab - computed: false, optional: true, required: false
  private _helpSettingsCommunitySubtab?: string; 
  public get helpSettingsCommunitySubtab() {
    return this.getStringAttribute('help_settings_community_subtab');
  }
  public set helpSettingsCommunitySubtab(value: string) {
    this._helpSettingsCommunitySubtab = value;
  }
  public resetHelpSettingsCommunitySubtab() {
    this._helpSettingsCommunitySubtab = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helpSettingsCommunitySubtabInput() {
    return this._helpSettingsCommunitySubtab;
  }

  // help_settings_data_protection_requests_subtab - computed: false, optional: true, required: false
  private _helpSettingsDataProtectionRequestsSubtab?: string; 
  public get helpSettingsDataProtectionRequestsSubtab() {
    return this.getStringAttribute('help_settings_data_protection_requests_subtab');
  }
  public set helpSettingsDataProtectionRequestsSubtab(value: string) {
    this._helpSettingsDataProtectionRequestsSubtab = value;
  }
  public resetHelpSettingsDataProtectionRequestsSubtab() {
    this._helpSettingsDataProtectionRequestsSubtab = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helpSettingsDataProtectionRequestsSubtabInput() {
    return this._helpSettingsDataProtectionRequestsSubtab;
  }

  // help_settings_firewall_info_subtab - computed: false, optional: true, required: false
  private _helpSettingsFirewallInfoSubtab?: string; 
  public get helpSettingsFirewallInfoSubtab() {
    return this.getStringAttribute('help_settings_firewall_info_subtab');
  }
  public set helpSettingsFirewallInfoSubtab(value: string) {
    this._helpSettingsFirewallInfoSubtab = value;
  }
  public resetHelpSettingsFirewallInfoSubtab() {
    this._helpSettingsFirewallInfoSubtab = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helpSettingsFirewallInfoSubtabInput() {
    return this._helpSettingsFirewallInfoSubtab;
  }

  // help_settings_get_help_subtab - computed: false, optional: true, required: false
  private _helpSettingsGetHelpSubtab?: string; 
  public get helpSettingsGetHelpSubtab() {
    return this.getStringAttribute('help_settings_get_help_subtab');
  }
  public set helpSettingsGetHelpSubtab(value: string) {
    this._helpSettingsGetHelpSubtab = value;
  }
  public resetHelpSettingsGetHelpSubtab() {
    this._helpSettingsGetHelpSubtab = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helpSettingsGetHelpSubtabInput() {
    return this._helpSettingsGetHelpSubtab;
  }

  // help_settings_get_help_subtab_knowledge_base_search - computed: false, optional: true, required: false
  private _helpSettingsGetHelpSubtabKnowledgeBaseSearch?: string; 
  public get helpSettingsGetHelpSubtabKnowledgeBaseSearch() {
    return this.getStringAttribute('help_settings_get_help_subtab_knowledge_base_search');
  }
  public set helpSettingsGetHelpSubtabKnowledgeBaseSearch(value: string) {
    this._helpSettingsGetHelpSubtabKnowledgeBaseSearch = value;
  }
  public resetHelpSettingsGetHelpSubtabKnowledgeBaseSearch() {
    this._helpSettingsGetHelpSubtabKnowledgeBaseSearch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helpSettingsGetHelpSubtabKnowledgeBaseSearchInput() {
    return this._helpSettingsGetHelpSubtabKnowledgeBaseSearch;
  }

  // help_settings_hardware_replacements_subtab - computed: false, optional: true, required: false
  private _helpSettingsHardwareReplacementsSubtab?: string; 
  public get helpSettingsHardwareReplacementsSubtab() {
    return this.getStringAttribute('help_settings_hardware_replacements_subtab');
  }
  public set helpSettingsHardwareReplacementsSubtab(value: string) {
    this._helpSettingsHardwareReplacementsSubtab = value;
  }
  public resetHelpSettingsHardwareReplacementsSubtab() {
    this._helpSettingsHardwareReplacementsSubtab = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helpSettingsHardwareReplacementsSubtabInput() {
    return this._helpSettingsHardwareReplacementsSubtab;
  }

  // help_settings_help_tab - computed: false, optional: true, required: false
  private _helpSettingsHelpTab?: string; 
  public get helpSettingsHelpTab() {
    return this.getStringAttribute('help_settings_help_tab');
  }
  public set helpSettingsHelpTab(value: string) {
    this._helpSettingsHelpTab = value;
  }
  public resetHelpSettingsHelpTab() {
    this._helpSettingsHelpTab = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helpSettingsHelpTabInput() {
    return this._helpSettingsHelpTab;
  }

  // help_settings_help_widget - computed: false, optional: true, required: false
  private _helpSettingsHelpWidget?: string; 
  public get helpSettingsHelpWidget() {
    return this.getStringAttribute('help_settings_help_widget');
  }
  public set helpSettingsHelpWidget(value: string) {
    this._helpSettingsHelpWidget = value;
  }
  public resetHelpSettingsHelpWidget() {
    this._helpSettingsHelpWidget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helpSettingsHelpWidgetInput() {
    return this._helpSettingsHelpWidget;
  }

  // help_settings_new_features_subtab - computed: false, optional: true, required: false
  private _helpSettingsNewFeaturesSubtab?: string; 
  public get helpSettingsNewFeaturesSubtab() {
    return this.getStringAttribute('help_settings_new_features_subtab');
  }
  public set helpSettingsNewFeaturesSubtab(value: string) {
    this._helpSettingsNewFeaturesSubtab = value;
  }
  public resetHelpSettingsNewFeaturesSubtab() {
    this._helpSettingsNewFeaturesSubtab = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helpSettingsNewFeaturesSubtabInput() {
    return this._helpSettingsNewFeaturesSubtab;
  }

  // help_settings_sm_forums - computed: false, optional: true, required: false
  private _helpSettingsSmForums?: string; 
  public get helpSettingsSmForums() {
    return this.getStringAttribute('help_settings_sm_forums');
  }
  public set helpSettingsSmForums(value: string) {
    this._helpSettingsSmForums = value;
  }
  public resetHelpSettingsSmForums() {
    this._helpSettingsSmForums = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helpSettingsSmForumsInput() {
    return this._helpSettingsSmForums;
  }

  // help_settings_support_contact_info - computed: false, optional: true, required: false
  private _helpSettingsSupportContactInfo?: string; 
  public get helpSettingsSupportContactInfo() {
    return this.getStringAttribute('help_settings_support_contact_info');
  }
  public set helpSettingsSupportContactInfo(value: string) {
    this._helpSettingsSupportContactInfo = value;
  }
  public resetHelpSettingsSupportContactInfo() {
    this._helpSettingsSupportContactInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helpSettingsSupportContactInfoInput() {
    return this._helpSettingsSupportContactInfo;
  }

  // help_settings_universal_search_knowledge_base_search - computed: false, optional: true, required: false
  private _helpSettingsUniversalSearchKnowledgeBaseSearch?: string; 
  public get helpSettingsUniversalSearchKnowledgeBaseSearch() {
    return this.getStringAttribute('help_settings_universal_search_knowledge_base_search');
  }
  public set helpSettingsUniversalSearchKnowledgeBaseSearch(value: string) {
    this._helpSettingsUniversalSearchKnowledgeBaseSearch = value;
  }
  public resetHelpSettingsUniversalSearchKnowledgeBaseSearch() {
    this._helpSettingsUniversalSearchKnowledgeBaseSearch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helpSettingsUniversalSearchKnowledgeBaseSearchInput() {
    return this._helpSettingsUniversalSearchKnowledgeBaseSearch;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // organization_id - computed: false, optional: false, required: true
  private _organizationId?: string; 
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }
  public set organizationId(value: string) {
    this._organizationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationIdInput() {
    return this._organizationId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      admin_settings_applies_to: cdktf.stringToTerraform(this._adminSettingsAppliesTo),
      admin_settings_values: cdktf.listMapper(cdktf.stringToTerraform, false)(this._adminSettingsValues),
      custom_logo_enabled: cdktf.booleanToTerraform(this._customLogoEnabled),
      custom_logo_image_contents: cdktf.stringToTerraform(this._customLogoImageContents),
      custom_logo_image_format: cdktf.stringToTerraform(this._customLogoImageFormat),
      enabled: cdktf.booleanToTerraform(this._enabled),
      help_settings_api_docs_subtab: cdktf.stringToTerraform(this._helpSettingsApiDocsSubtab),
      help_settings_cases_subtab: cdktf.stringToTerraform(this._helpSettingsCasesSubtab),
      help_settings_cisco_meraki_product_documentation: cdktf.stringToTerraform(this._helpSettingsCiscoMerakiProductDocumentation),
      help_settings_community_subtab: cdktf.stringToTerraform(this._helpSettingsCommunitySubtab),
      help_settings_data_protection_requests_subtab: cdktf.stringToTerraform(this._helpSettingsDataProtectionRequestsSubtab),
      help_settings_firewall_info_subtab: cdktf.stringToTerraform(this._helpSettingsFirewallInfoSubtab),
      help_settings_get_help_subtab: cdktf.stringToTerraform(this._helpSettingsGetHelpSubtab),
      help_settings_get_help_subtab_knowledge_base_search: cdktf.stringToTerraform(this._helpSettingsGetHelpSubtabKnowledgeBaseSearch),
      help_settings_hardware_replacements_subtab: cdktf.stringToTerraform(this._helpSettingsHardwareReplacementsSubtab),
      help_settings_help_tab: cdktf.stringToTerraform(this._helpSettingsHelpTab),
      help_settings_help_widget: cdktf.stringToTerraform(this._helpSettingsHelpWidget),
      help_settings_new_features_subtab: cdktf.stringToTerraform(this._helpSettingsNewFeaturesSubtab),
      help_settings_sm_forums: cdktf.stringToTerraform(this._helpSettingsSmForums),
      help_settings_support_contact_info: cdktf.stringToTerraform(this._helpSettingsSupportContactInfo),
      help_settings_universal_search_knowledge_base_search: cdktf.stringToTerraform(this._helpSettingsUniversalSearchKnowledgeBaseSearch),
      name: cdktf.stringToTerraform(this._name),
      organization_id: cdktf.stringToTerraform(this._organizationId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      admin_settings_applies_to: {
        value: cdktf.stringToHclTerraform(this._adminSettingsAppliesTo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      admin_settings_values: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._adminSettingsValues),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      custom_logo_enabled: {
        value: cdktf.booleanToHclTerraform(this._customLogoEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      custom_logo_image_contents: {
        value: cdktf.stringToHclTerraform(this._customLogoImageContents),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_logo_image_format: {
        value: cdktf.stringToHclTerraform(this._customLogoImageFormat),
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
      help_settings_api_docs_subtab: {
        value: cdktf.stringToHclTerraform(this._helpSettingsApiDocsSubtab),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      help_settings_cases_subtab: {
        value: cdktf.stringToHclTerraform(this._helpSettingsCasesSubtab),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      help_settings_cisco_meraki_product_documentation: {
        value: cdktf.stringToHclTerraform(this._helpSettingsCiscoMerakiProductDocumentation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      help_settings_community_subtab: {
        value: cdktf.stringToHclTerraform(this._helpSettingsCommunitySubtab),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      help_settings_data_protection_requests_subtab: {
        value: cdktf.stringToHclTerraform(this._helpSettingsDataProtectionRequestsSubtab),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      help_settings_firewall_info_subtab: {
        value: cdktf.stringToHclTerraform(this._helpSettingsFirewallInfoSubtab),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      help_settings_get_help_subtab: {
        value: cdktf.stringToHclTerraform(this._helpSettingsGetHelpSubtab),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      help_settings_get_help_subtab_knowledge_base_search: {
        value: cdktf.stringToHclTerraform(this._helpSettingsGetHelpSubtabKnowledgeBaseSearch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      help_settings_hardware_replacements_subtab: {
        value: cdktf.stringToHclTerraform(this._helpSettingsHardwareReplacementsSubtab),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      help_settings_help_tab: {
        value: cdktf.stringToHclTerraform(this._helpSettingsHelpTab),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      help_settings_help_widget: {
        value: cdktf.stringToHclTerraform(this._helpSettingsHelpWidget),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      help_settings_new_features_subtab: {
        value: cdktf.stringToHclTerraform(this._helpSettingsNewFeaturesSubtab),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      help_settings_sm_forums: {
        value: cdktf.stringToHclTerraform(this._helpSettingsSmForums),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      help_settings_support_contact_info: {
        value: cdktf.stringToHclTerraform(this._helpSettingsSupportContactInfo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      help_settings_universal_search_knowledge_base_search: {
        value: cdktf.stringToHclTerraform(this._helpSettingsUniversalSearchKnowledgeBaseSearch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      organization_id: {
        value: cdktf.stringToHclTerraform(this._organizationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
