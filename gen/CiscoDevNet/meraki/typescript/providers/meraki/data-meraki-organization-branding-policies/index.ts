// https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/organization_branding_policies
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMerakiOrganizationBrandingPoliciesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Organization ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/organization_branding_policies#organization_id DataMerakiOrganizationBrandingPolicies#organization_id}
  */
  readonly organizationId: string;
}
export interface DataMerakiOrganizationBrandingPoliciesItems {
}

export function dataMerakiOrganizationBrandingPoliciesItemsToTerraform(struct?: DataMerakiOrganizationBrandingPoliciesItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMerakiOrganizationBrandingPoliciesItemsToHclTerraform(struct?: DataMerakiOrganizationBrandingPoliciesItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMerakiOrganizationBrandingPoliciesItemsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMerakiOrganizationBrandingPoliciesItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMerakiOrganizationBrandingPoliciesItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataMerakiOrganizationBrandingPoliciesItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataMerakiOrganizationBrandingPoliciesItemsOutputReference {
    return new DataMerakiOrganizationBrandingPoliciesItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/organization_branding_policies meraki_organization_branding_policies}
*/
export class DataMerakiOrganizationBrandingPolicies extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_organization_branding_policies";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMerakiOrganizationBrandingPolicies resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMerakiOrganizationBrandingPolicies to import
  * @param importFromId The id of the existing DataMerakiOrganizationBrandingPolicies that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/organization_branding_policies#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMerakiOrganizationBrandingPolicies to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_organization_branding_policies", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/organization_branding_policies meraki_organization_branding_policies} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMerakiOrganizationBrandingPoliciesConfig
  */
  public constructor(scope: Construct, id: string, config: DataMerakiOrganizationBrandingPoliciesConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_organization_branding_policies',
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
    this._organizationId = config.organizationId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // items - computed: true, optional: false, required: false
  private _items = new DataMerakiOrganizationBrandingPoliciesItemsList(this, "items", true);
  public get items() {
    return this._items;
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
      organization_id: cdktf.stringToTerraform(this._organizationId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
