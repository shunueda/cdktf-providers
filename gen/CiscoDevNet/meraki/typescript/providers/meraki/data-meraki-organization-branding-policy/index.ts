// https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/organization_branding_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMerakiOrganizationBrandingPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * The id of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/organization_branding_policy#id DataMerakiOrganizationBrandingPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the Dashboard branding policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/organization_branding_policy#name DataMerakiOrganizationBrandingPolicy#name}
  */
  readonly name?: string;
  /**
  * Organization ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/organization_branding_policy#organization_id DataMerakiOrganizationBrandingPolicy#organization_id}
  */
  readonly organizationId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/organization_branding_policy meraki_organization_branding_policy}
*/
export class DataMerakiOrganizationBrandingPolicy extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_organization_branding_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMerakiOrganizationBrandingPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMerakiOrganizationBrandingPolicy to import
  * @param importFromId The id of the existing DataMerakiOrganizationBrandingPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/organization_branding_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMerakiOrganizationBrandingPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_organization_branding_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/organization_branding_policy meraki_organization_branding_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMerakiOrganizationBrandingPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DataMerakiOrganizationBrandingPolicyConfig) {
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
    this._id = config.id;
    this._name = config.name;
    this._organizationId = config.organizationId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_settings_applies_to - computed: true, optional: false, required: false
  public get adminSettingsAppliesTo() {
    return this.getStringAttribute('admin_settings_applies_to');
  }

  // admin_settings_values - computed: true, optional: false, required: false
  public get adminSettingsValues() {
    return this.getListAttribute('admin_settings_values');
  }

  // custom_logo_enabled - computed: true, optional: false, required: false
  public get customLogoEnabled() {
    return this.getBooleanAttribute('custom_logo_enabled');
  }

  // custom_logo_image_contents - computed: true, optional: false, required: false
  public get customLogoImageContents() {
    return this.getStringAttribute('custom_logo_image_contents');
  }

  // custom_logo_image_format - computed: true, optional: false, required: false
  public get customLogoImageFormat() {
    return this.getStringAttribute('custom_logo_image_format');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // help_settings_api_docs_subtab - computed: true, optional: false, required: false
  public get helpSettingsApiDocsSubtab() {
    return this.getStringAttribute('help_settings_api_docs_subtab');
  }

  // help_settings_cases_subtab - computed: true, optional: false, required: false
  public get helpSettingsCasesSubtab() {
    return this.getStringAttribute('help_settings_cases_subtab');
  }

  // help_settings_cisco_meraki_product_documentation - computed: true, optional: false, required: false
  public get helpSettingsCiscoMerakiProductDocumentation() {
    return this.getStringAttribute('help_settings_cisco_meraki_product_documentation');
  }

  // help_settings_community_subtab - computed: true, optional: false, required: false
  public get helpSettingsCommunitySubtab() {
    return this.getStringAttribute('help_settings_community_subtab');
  }

  // help_settings_data_protection_requests_subtab - computed: true, optional: false, required: false
  public get helpSettingsDataProtectionRequestsSubtab() {
    return this.getStringAttribute('help_settings_data_protection_requests_subtab');
  }

  // help_settings_firewall_info_subtab - computed: true, optional: false, required: false
  public get helpSettingsFirewallInfoSubtab() {
    return this.getStringAttribute('help_settings_firewall_info_subtab');
  }

  // help_settings_get_help_subtab - computed: true, optional: false, required: false
  public get helpSettingsGetHelpSubtab() {
    return this.getStringAttribute('help_settings_get_help_subtab');
  }

  // help_settings_get_help_subtab_knowledge_base_search - computed: true, optional: false, required: false
  public get helpSettingsGetHelpSubtabKnowledgeBaseSearch() {
    return this.getStringAttribute('help_settings_get_help_subtab_knowledge_base_search');
  }

  // help_settings_hardware_replacements_subtab - computed: true, optional: false, required: false
  public get helpSettingsHardwareReplacementsSubtab() {
    return this.getStringAttribute('help_settings_hardware_replacements_subtab');
  }

  // help_settings_help_tab - computed: true, optional: false, required: false
  public get helpSettingsHelpTab() {
    return this.getStringAttribute('help_settings_help_tab');
  }

  // help_settings_help_widget - computed: true, optional: false, required: false
  public get helpSettingsHelpWidget() {
    return this.getStringAttribute('help_settings_help_widget');
  }

  // help_settings_new_features_subtab - computed: true, optional: false, required: false
  public get helpSettingsNewFeaturesSubtab() {
    return this.getStringAttribute('help_settings_new_features_subtab');
  }

  // help_settings_sm_forums - computed: true, optional: false, required: false
  public get helpSettingsSmForums() {
    return this.getStringAttribute('help_settings_sm_forums');
  }

  // help_settings_support_contact_info - computed: true, optional: false, required: false
  public get helpSettingsSupportContactInfo() {
    return this.getStringAttribute('help_settings_support_contact_info');
  }

  // help_settings_universal_search_knowledge_base_search - computed: true, optional: false, required: false
  public get helpSettingsUniversalSearchKnowledgeBaseSearch() {
    return this.getStringAttribute('help_settings_universal_search_knowledge_base_search');
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

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
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
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      organization_id: cdktf.stringToTerraform(this._organizationId),
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
