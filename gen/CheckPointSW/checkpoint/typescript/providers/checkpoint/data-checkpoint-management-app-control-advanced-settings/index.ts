// https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/data-sources/management_app_control_advanced_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCheckpointManagementAppControlAdvancedSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/data-sources/management_app_control_advanced_settings#id DataCheckpointManagementAppControlAdvancedSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}
export interface DataCheckpointManagementAppControlAdvancedSettingsUrlFilteringSettings {
}

export function dataCheckpointManagementAppControlAdvancedSettingsUrlFilteringSettingsToTerraform(struct?: DataCheckpointManagementAppControlAdvancedSettingsUrlFilteringSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementAppControlAdvancedSettingsUrlFilteringSettingsToHclTerraform(struct?: DataCheckpointManagementAppControlAdvancedSettingsUrlFilteringSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementAppControlAdvancedSettingsUrlFilteringSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementAppControlAdvancedSettingsUrlFilteringSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementAppControlAdvancedSettingsUrlFilteringSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // categorize_cached_and_translated_pages - computed: true, optional: false, required: false
  public get categorizeCachedAndTranslatedPages() {
    return this.getBooleanAttribute('categorize_cached_and_translated_pages');
  }

  // categorize_https_websites - computed: true, optional: false, required: false
  public get categorizeHttpsWebsites() {
    return this.getBooleanAttribute('categorize_https_websites');
  }

  // enforce_safe_search - computed: true, optional: false, required: false
  public get enforceSafeSearch() {
    return this.getBooleanAttribute('enforce_safe_search');
  }
}

export class DataCheckpointManagementAppControlAdvancedSettingsUrlFilteringSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementAppControlAdvancedSettingsUrlFilteringSettingsOutputReference {
    return new DataCheckpointManagementAppControlAdvancedSettingsUrlFilteringSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/data-sources/management_app_control_advanced_settings checkpoint_management_app_control_advanced_settings}
*/
export class DataCheckpointManagementAppControlAdvancedSettings extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "checkpoint_management_app_control_advanced_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCheckpointManagementAppControlAdvancedSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCheckpointManagementAppControlAdvancedSettings to import
  * @param importFromId The id of the existing DataCheckpointManagementAppControlAdvancedSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/data-sources/management_app_control_advanced_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCheckpointManagementAppControlAdvancedSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "checkpoint_management_app_control_advanced_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/data-sources/management_app_control_advanced_settings checkpoint_management_app_control_advanced_settings} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCheckpointManagementAppControlAdvancedSettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataCheckpointManagementAppControlAdvancedSettingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'checkpoint_management_app_control_advanced_settings',
      terraformGeneratorMetadata: {
        providerName: 'checkpoint',
        providerVersion: '2.12.0',
        providerVersionConstraint: '2.12.0'
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

  // block_request_when_web_service_is_unavailable - computed: true, optional: false, required: false
  public get blockRequestWhenWebServiceIsUnavailable() {
    return this.getBooleanAttribute('block_request_when_web_service_is_unavailable');
  }

  // categorize_social_network_widgets - computed: true, optional: false, required: false
  public get categorizeSocialNetworkWidgets() {
    return this.getBooleanAttribute('categorize_social_network_widgets');
  }

  // custom_categorization_settings - computed: true, optional: false, required: false
  private _customCategorizationSettings = new cdktf.StringMap(this, "custom_categorization_settings");
  public get customCategorizationSettings() {
    return this._customCategorizationSettings;
  }

  // domain_level_permission - computed: true, optional: false, required: false
  public get domainLevelPermission() {
    return this.getBooleanAttribute('domain_level_permission');
  }

  // enable_web_browsing - computed: true, optional: false, required: false
  public get enableWebBrowsing() {
    return this.getBooleanAttribute('enable_web_browsing');
  }

  // httpi_non_standard_ports - computed: true, optional: false, required: false
  public get httpiNonStandardPorts() {
    return this.getBooleanAttribute('httpi_non_standard_ports');
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

  // internal_error_fail_mode - computed: true, optional: false, required: false
  public get internalErrorFailMode() {
    return this.getStringAttribute('internal_error_fail_mode');
  }

  // match_application_on_any_port - computed: true, optional: false, required: false
  public get matchApplicationOnAnyPort() {
    return this.getBooleanAttribute('match_application_on_any_port');
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }

  // url_filtering_settings - computed: true, optional: false, required: false
  private _urlFilteringSettings = new DataCheckpointManagementAppControlAdvancedSettingsUrlFilteringSettingsList(this, "url_filtering_settings", false);
  public get urlFilteringSettings() {
    return this._urlFilteringSettings;
  }

  // web_browsing_services - computed: true, optional: false, required: false
  public get webBrowsingServices() {
    return cdktf.Fn.tolist(this.getListAttribute('web_browsing_services'));
  }

  // website_categorization_mode - computed: true, optional: false, required: false
  public get websiteCategorizationMode() {
    return this.getStringAttribute('website_categorization_mode');
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
