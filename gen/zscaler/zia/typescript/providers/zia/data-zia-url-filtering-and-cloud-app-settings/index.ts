// https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/data-sources/url_filtering_and_cloud_app_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataZiaUrlFilteringAndCloudAppSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/data-sources/url_filtering_and_cloud_app_settings#id DataZiaUrlFilteringAndCloudAppSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/data-sources/url_filtering_and_cloud_app_settings zia_url_filtering_and_cloud_app_settings}
*/
export class DataZiaUrlFilteringAndCloudAppSettings extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zia_url_filtering_and_cloud_app_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataZiaUrlFilteringAndCloudAppSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataZiaUrlFilteringAndCloudAppSettings to import
  * @param importFromId The id of the existing DataZiaUrlFilteringAndCloudAppSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/data-sources/url_filtering_and_cloud_app_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataZiaUrlFilteringAndCloudAppSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zia_url_filtering_and_cloud_app_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/data-sources/url_filtering_and_cloud_app_settings zia_url_filtering_and_cloud_app_settings} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataZiaUrlFilteringAndCloudAppSettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataZiaUrlFilteringAndCloudAppSettingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'zia_url_filtering_and_cloud_app_settings',
      terraformGeneratorMetadata: {
        providerName: 'zia',
        providerVersion: '4.5.3',
        providerVersionConstraint: '4.5.3'
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

  // block_skype - computed: true, optional: false, required: false
  public get blockSkype() {
    return this.getBooleanAttribute('block_skype');
  }

  // consider_embedded_sites - computed: true, optional: false, required: false
  public get considerEmbeddedSites() {
    return this.getBooleanAttribute('consider_embedded_sites');
  }

  // enable_block_override_for_non_auth_user - computed: true, optional: false, required: false
  public get enableBlockOverrideForNonAuthUser() {
    return this.getBooleanAttribute('enable_block_override_for_non_auth_user');
  }

  // enable_chatgpt_prompt - computed: true, optional: false, required: false
  public get enableChatgptPrompt() {
    return this.getBooleanAttribute('enable_chatgpt_prompt');
  }

  // enable_cipa_compliance - computed: true, optional: false, required: false
  public get enableCipaCompliance() {
    return this.getBooleanAttribute('enable_cipa_compliance');
  }

  // enable_dynamic_content_cat - computed: true, optional: false, required: false
  public get enableDynamicContentCat() {
    return this.getBooleanAttribute('enable_dynamic_content_cat');
  }

  // enable_gemini_prompt - computed: true, optional: false, required: false
  public get enableGeminiPrompt() {
    return this.getBooleanAttribute('enable_gemini_prompt');
  }

  // enable_meta_prompt - computed: true, optional: false, required: false
  public get enableMetaPrompt() {
    return this.getBooleanAttribute('enable_meta_prompt');
  }

  // enable_microsoft_copilot_prompt - computed: true, optional: false, required: false
  public get enableMicrosoftCopilotPrompt() {
    return this.getBooleanAttribute('enable_microsoft_copilot_prompt');
  }

  // enable_msft_o365 - computed: true, optional: false, required: false
  public get enableMsftO365() {
    return this.getBooleanAttribute('enable_msft_o365');
  }

  // enable_newly_registered_domains - computed: true, optional: false, required: false
  public get enableNewlyRegisteredDomains() {
    return this.getBooleanAttribute('enable_newly_registered_domains');
  }

  // enable_office365 - computed: true, optional: false, required: false
  public get enableOffice365() {
    return this.getBooleanAttribute('enable_office365');
  }

  // enable_per_plexity_prompt - computed: true, optional: false, required: false
  public get enablePerPlexityPrompt() {
    return this.getBooleanAttribute('enable_per_plexity_prompt');
  }

  // enable_poep_prompt - computed: true, optional: false, required: false
  public get enablePoepPrompt() {
    return this.getBooleanAttribute('enable_poep_prompt');
  }

  // enable_ucaas_logmein - computed: true, optional: false, required: false
  public get enableUcaasLogmein() {
    return this.getBooleanAttribute('enable_ucaas_logmein');
  }

  // enable_ucaas_ring_central - computed: true, optional: false, required: false
  public get enableUcaasRingCentral() {
    return this.getBooleanAttribute('enable_ucaas_ring_central');
  }

  // enable_ucaas_talkdesk - computed: true, optional: false, required: false
  public get enableUcaasTalkdesk() {
    return this.getBooleanAttribute('enable_ucaas_talkdesk');
  }

  // enable_ucaas_webex - computed: true, optional: false, required: false
  public get enableUcaasWebex() {
    return this.getBooleanAttribute('enable_ucaas_webex');
  }

  // enable_ucaas_zoom - computed: true, optional: false, required: false
  public get enableUcaasZoom() {
    return this.getBooleanAttribute('enable_ucaas_zoom');
  }

  // enforce_safe_search - computed: true, optional: false, required: false
  public get enforceSafeSearch() {
    return this.getBooleanAttribute('enforce_safe_search');
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
