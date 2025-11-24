// https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/url_filtering_and_cloud_app_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UrlFilteringAndCloudAppSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * A Boolean value indicating whether access to Skype is blocked or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/url_filtering_and_cloud_app_settings#block_skype UrlFilteringAndCloudAppSettings#block_skype}
  */
  readonly blockSkype?: boolean | cdktf.IResolvable;
  /**
  * A Boolean value that indicates if URL filtering rules must be applied to sites that are translated using translation services or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/url_filtering_and_cloud_app_settings#consider_embedded_sites UrlFilteringAndCloudAppSettings#consider_embedded_sites}
  */
  readonly considerEmbeddedSites?: boolean | cdktf.IResolvable;
  /**
  * A Boolean value indicating if authorized users can temporarily override block action on websites by providing their authentication information
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/url_filtering_and_cloud_app_settings#enable_block_override_for_non_auth_user UrlFilteringAndCloudAppSettings#enable_block_override_for_non_auth_user}
  */
  readonly enableBlockOverrideForNonAuthUser?: boolean | cdktf.IResolvable;
  /**
  * A Boolean value indicating if the use of generative AI prompts with ChatGPT by users should be categorized and logged
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/url_filtering_and_cloud_app_settings#enable_chatgpt_prompt UrlFilteringAndCloudAppSettings#enable_chatgpt_prompt}
  */
  readonly enableChatgptPrompt?: boolean | cdktf.IResolvable;
  /**
  * A Boolean value indicating if the predefined CIPA Compliance Rule is enabled or not. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/url_filtering_and_cloud_app_settings#enable_cipa_compliance UrlFilteringAndCloudAppSettings#enable_cipa_compliance}
  */
  readonly enableCipaCompliance?: boolean | cdktf.IResolvable;
  /**
  * A Boolean value that indicates if dynamic categorization of URLs by analyzing content of uncategorized websites using AI/ML tools is enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/url_filtering_and_cloud_app_settings#enable_dynamic_content_cat UrlFilteringAndCloudAppSettings#enable_dynamic_content_cat}
  */
  readonly enableDynamicContentCat?: boolean | cdktf.IResolvable;
  /**
  * A Boolean value indicating if the use of generative AI prompts with Google Gemini by users should be categorized and logged
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/url_filtering_and_cloud_app_settings#enable_gemini_prompt UrlFilteringAndCloudAppSettings#enable_gemini_prompt}
  */
  readonly enableGeminiPrompt?: boolean | cdktf.IResolvable;
  /**
  * A Boolean value indicating if the use of generative AI prompts with Meta AI by users should be categorized and logged
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/url_filtering_and_cloud_app_settings#enable_meta_prompt UrlFilteringAndCloudAppSettings#enable_meta_prompt}
  */
  readonly enableMetaPrompt?: boolean | cdktf.IResolvable;
  /**
  * A Boolean value indicating if the use of generative AI prompts with Microsoft Copilot by users should be categorized and logged
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/url_filtering_and_cloud_app_settings#enable_microsoft_copilot_prompt UrlFilteringAndCloudAppSettings#enable_microsoft_copilot_prompt}
  */
  readonly enableMicrosoftCopilotPrompt?: boolean | cdktf.IResolvable;
  /**
  * A Boolean value indicating if the Zscaler service is allowed to permit secure local breakout for Office 365 traffic automatically without any manual configuration needed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/url_filtering_and_cloud_app_settings#enable_msft_o365 UrlFilteringAndCloudAppSettings#enable_msft_o365}
  */
  readonly enableMsftO365?: boolean | cdktf.IResolvable;
  /**
  * A Boolean value indicating whether newly registered and observed domains that are identified within hours of going live are allowed or blocked
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/url_filtering_and_cloud_app_settings#enable_newly_registered_domains UrlFilteringAndCloudAppSettings#enable_newly_registered_domains}
  */
  readonly enableNewlyRegisteredDomains?: boolean | cdktf.IResolvable;
  /**
  * A Boolean value that enables or disables Microsoft Office 365 configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/url_filtering_and_cloud_app_settings#enable_office365 UrlFilteringAndCloudAppSettings#enable_office365}
  */
  readonly enableOffice365?: boolean | cdktf.IResolvable;
  /**
  * A Boolean value indicating if the use of generative AI prompts with Perplexity by users should be categorized and logged
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/url_filtering_and_cloud_app_settings#enable_per_plexity_prompt UrlFilteringAndCloudAppSettings#enable_per_plexity_prompt}
  */
  readonly enablePerPlexityPrompt?: boolean | cdktf.IResolvable;
  /**
  * A Boolean value indicating if the use of generative AI prompts with Poe by users should be categorized and logged
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/url_filtering_and_cloud_app_settings#enable_poep_prompt UrlFilteringAndCloudAppSettings#enable_poep_prompt}
  */
  readonly enablePoepPrompt?: boolean | cdktf.IResolvable;
  /**
  * A Boolean value indicating if the Zscaler service is allowed to automatically permit secure local breakout for GoTo traffic, without any manual configuration needed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/url_filtering_and_cloud_app_settings#enable_ucaas_logmein UrlFilteringAndCloudAppSettings#enable_ucaas_logmein}
  */
  readonly enableUcaasLogmein?: boolean | cdktf.IResolvable;
  /**
  * A Boolean value indicating if the Zscaler service is allowed to automatically permit secure local breakout for RingCentral traffic, without any manual configuration needed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/url_filtering_and_cloud_app_settings#enable_ucaas_ring_central UrlFilteringAndCloudAppSettings#enable_ucaas_ring_central}
  */
  readonly enableUcaasRingCentral?: boolean | cdktf.IResolvable;
  /**
  * A Boolean value indicating if the Zscaler service is allowed to automatically permit secure local breakout for Talkdesk traffic, with minimal or no manual configuration needed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/url_filtering_and_cloud_app_settings#enable_ucaas_talkdesk UrlFilteringAndCloudAppSettings#enable_ucaas_talkdesk}
  */
  readonly enableUcaasTalkdesk?: boolean | cdktf.IResolvable;
  /**
  * A Boolean value indicating if the Zscaler service is allowed to automatically permit secure local breakout for Webex traffic, without any manual configuration needed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/url_filtering_and_cloud_app_settings#enable_ucaas_webex UrlFilteringAndCloudAppSettings#enable_ucaas_webex}
  */
  readonly enableUcaasWebex?: boolean | cdktf.IResolvable;
  /**
  * A Boolean value indicating if the Zscaler service is allowed to automatically permit secure local breakout for Zoom traffic, without any manual configuration needed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/url_filtering_and_cloud_app_settings#enable_ucaas_zoom UrlFilteringAndCloudAppSettings#enable_ucaas_zoom}
  */
  readonly enableUcaasZoom?: boolean | cdktf.IResolvable;
  /**
  * A Boolean value that indicates whether only safe content must be returned for web, image, and video search.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/url_filtering_and_cloud_app_settings#enforce_safe_search UrlFilteringAndCloudAppSettings#enforce_safe_search}
  */
  readonly enforceSafeSearch?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/url_filtering_and_cloud_app_settings#id UrlFilteringAndCloudAppSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A list of applications for which the SafeSearch enforcement applies. You cannot modify this field when the enforceSafeSearch field is disabled.
  * 				See the URL & Cloud App Control Policy Settings for the list of available apps:
  * 				https://help.zscaler.com/zia/url-cloud-app-control-policy-settings#/advancedUrlFilterAndCloudAppSettings-get
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/url_filtering_and_cloud_app_settings#safe_search_apps UrlFilteringAndCloudAppSettings#safe_search_apps}
  */
  readonly safeSearchApps?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/url_filtering_and_cloud_app_settings zia_url_filtering_and_cloud_app_settings}
*/
export class UrlFilteringAndCloudAppSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zia_url_filtering_and_cloud_app_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a UrlFilteringAndCloudAppSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UrlFilteringAndCloudAppSettings to import
  * @param importFromId The id of the existing UrlFilteringAndCloudAppSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/url_filtering_and_cloud_app_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UrlFilteringAndCloudAppSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zia_url_filtering_and_cloud_app_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/url_filtering_and_cloud_app_settings zia_url_filtering_and_cloud_app_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UrlFilteringAndCloudAppSettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: UrlFilteringAndCloudAppSettingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'zia_url_filtering_and_cloud_app_settings',
      terraformGeneratorMetadata: {
        providerName: 'zia',
        providerVersion: '4.6.3',
        providerVersionConstraint: '4.6.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._blockSkype = config.blockSkype;
    this._considerEmbeddedSites = config.considerEmbeddedSites;
    this._enableBlockOverrideForNonAuthUser = config.enableBlockOverrideForNonAuthUser;
    this._enableChatgptPrompt = config.enableChatgptPrompt;
    this._enableCipaCompliance = config.enableCipaCompliance;
    this._enableDynamicContentCat = config.enableDynamicContentCat;
    this._enableGeminiPrompt = config.enableGeminiPrompt;
    this._enableMetaPrompt = config.enableMetaPrompt;
    this._enableMicrosoftCopilotPrompt = config.enableMicrosoftCopilotPrompt;
    this._enableMsftO365 = config.enableMsftO365;
    this._enableNewlyRegisteredDomains = config.enableNewlyRegisteredDomains;
    this._enableOffice365 = config.enableOffice365;
    this._enablePerPlexityPrompt = config.enablePerPlexityPrompt;
    this._enablePoepPrompt = config.enablePoepPrompt;
    this._enableUcaasLogmein = config.enableUcaasLogmein;
    this._enableUcaasRingCentral = config.enableUcaasRingCentral;
    this._enableUcaasTalkdesk = config.enableUcaasTalkdesk;
    this._enableUcaasWebex = config.enableUcaasWebex;
    this._enableUcaasZoom = config.enableUcaasZoom;
    this._enforceSafeSearch = config.enforceSafeSearch;
    this._id = config.id;
    this._safeSearchApps = config.safeSearchApps;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // block_skype - computed: true, optional: true, required: false
  private _blockSkype?: boolean | cdktf.IResolvable; 
  public get blockSkype() {
    return this.getBooleanAttribute('block_skype');
  }
  public set blockSkype(value: boolean | cdktf.IResolvable) {
    this._blockSkype = value;
  }
  public resetBlockSkype() {
    this._blockSkype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockSkypeInput() {
    return this._blockSkype;
  }

  // consider_embedded_sites - computed: true, optional: true, required: false
  private _considerEmbeddedSites?: boolean | cdktf.IResolvable; 
  public get considerEmbeddedSites() {
    return this.getBooleanAttribute('consider_embedded_sites');
  }
  public set considerEmbeddedSites(value: boolean | cdktf.IResolvable) {
    this._considerEmbeddedSites = value;
  }
  public resetConsiderEmbeddedSites() {
    this._considerEmbeddedSites = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get considerEmbeddedSitesInput() {
    return this._considerEmbeddedSites;
  }

  // enable_block_override_for_non_auth_user - computed: true, optional: true, required: false
  private _enableBlockOverrideForNonAuthUser?: boolean | cdktf.IResolvable; 
  public get enableBlockOverrideForNonAuthUser() {
    return this.getBooleanAttribute('enable_block_override_for_non_auth_user');
  }
  public set enableBlockOverrideForNonAuthUser(value: boolean | cdktf.IResolvable) {
    this._enableBlockOverrideForNonAuthUser = value;
  }
  public resetEnableBlockOverrideForNonAuthUser() {
    this._enableBlockOverrideForNonAuthUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableBlockOverrideForNonAuthUserInput() {
    return this._enableBlockOverrideForNonAuthUser;
  }

  // enable_chatgpt_prompt - computed: true, optional: true, required: false
  private _enableChatgptPrompt?: boolean | cdktf.IResolvable; 
  public get enableChatgptPrompt() {
    return this.getBooleanAttribute('enable_chatgpt_prompt');
  }
  public set enableChatgptPrompt(value: boolean | cdktf.IResolvable) {
    this._enableChatgptPrompt = value;
  }
  public resetEnableChatgptPrompt() {
    this._enableChatgptPrompt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableChatgptPromptInput() {
    return this._enableChatgptPrompt;
  }

  // enable_cipa_compliance - computed: true, optional: true, required: false
  private _enableCipaCompliance?: boolean | cdktf.IResolvable; 
  public get enableCipaCompliance() {
    return this.getBooleanAttribute('enable_cipa_compliance');
  }
  public set enableCipaCompliance(value: boolean | cdktf.IResolvable) {
    this._enableCipaCompliance = value;
  }
  public resetEnableCipaCompliance() {
    this._enableCipaCompliance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableCipaComplianceInput() {
    return this._enableCipaCompliance;
  }

  // enable_dynamic_content_cat - computed: true, optional: true, required: false
  private _enableDynamicContentCat?: boolean | cdktf.IResolvable; 
  public get enableDynamicContentCat() {
    return this.getBooleanAttribute('enable_dynamic_content_cat');
  }
  public set enableDynamicContentCat(value: boolean | cdktf.IResolvable) {
    this._enableDynamicContentCat = value;
  }
  public resetEnableDynamicContentCat() {
    this._enableDynamicContentCat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDynamicContentCatInput() {
    return this._enableDynamicContentCat;
  }

  // enable_gemini_prompt - computed: true, optional: true, required: false
  private _enableGeminiPrompt?: boolean | cdktf.IResolvable; 
  public get enableGeminiPrompt() {
    return this.getBooleanAttribute('enable_gemini_prompt');
  }
  public set enableGeminiPrompt(value: boolean | cdktf.IResolvable) {
    this._enableGeminiPrompt = value;
  }
  public resetEnableGeminiPrompt() {
    this._enableGeminiPrompt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableGeminiPromptInput() {
    return this._enableGeminiPrompt;
  }

  // enable_meta_prompt - computed: true, optional: true, required: false
  private _enableMetaPrompt?: boolean | cdktf.IResolvable; 
  public get enableMetaPrompt() {
    return this.getBooleanAttribute('enable_meta_prompt');
  }
  public set enableMetaPrompt(value: boolean | cdktf.IResolvable) {
    this._enableMetaPrompt = value;
  }
  public resetEnableMetaPrompt() {
    this._enableMetaPrompt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableMetaPromptInput() {
    return this._enableMetaPrompt;
  }

  // enable_microsoft_copilot_prompt - computed: true, optional: true, required: false
  private _enableMicrosoftCopilotPrompt?: boolean | cdktf.IResolvable; 
  public get enableMicrosoftCopilotPrompt() {
    return this.getBooleanAttribute('enable_microsoft_copilot_prompt');
  }
  public set enableMicrosoftCopilotPrompt(value: boolean | cdktf.IResolvable) {
    this._enableMicrosoftCopilotPrompt = value;
  }
  public resetEnableMicrosoftCopilotPrompt() {
    this._enableMicrosoftCopilotPrompt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableMicrosoftCopilotPromptInput() {
    return this._enableMicrosoftCopilotPrompt;
  }

  // enable_msft_o365 - computed: false, optional: true, required: false
  private _enableMsftO365?: boolean | cdktf.IResolvable; 
  public get enableMsftO365() {
    return this.getBooleanAttribute('enable_msft_o365');
  }
  public set enableMsftO365(value: boolean | cdktf.IResolvable) {
    this._enableMsftO365 = value;
  }
  public resetEnableMsftO365() {
    this._enableMsftO365 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableMsftO365Input() {
    return this._enableMsftO365;
  }

  // enable_newly_registered_domains - computed: true, optional: true, required: false
  private _enableNewlyRegisteredDomains?: boolean | cdktf.IResolvable; 
  public get enableNewlyRegisteredDomains() {
    return this.getBooleanAttribute('enable_newly_registered_domains');
  }
  public set enableNewlyRegisteredDomains(value: boolean | cdktf.IResolvable) {
    this._enableNewlyRegisteredDomains = value;
  }
  public resetEnableNewlyRegisteredDomains() {
    this._enableNewlyRegisteredDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableNewlyRegisteredDomainsInput() {
    return this._enableNewlyRegisteredDomains;
  }

  // enable_office365 - computed: false, optional: true, required: false
  private _enableOffice365?: boolean | cdktf.IResolvable; 
  public get enableOffice365() {
    return this.getBooleanAttribute('enable_office365');
  }
  public set enableOffice365(value: boolean | cdktf.IResolvable) {
    this._enableOffice365 = value;
  }
  public resetEnableOffice365() {
    this._enableOffice365 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableOffice365Input() {
    return this._enableOffice365;
  }

  // enable_per_plexity_prompt - computed: true, optional: true, required: false
  private _enablePerPlexityPrompt?: boolean | cdktf.IResolvable; 
  public get enablePerPlexityPrompt() {
    return this.getBooleanAttribute('enable_per_plexity_prompt');
  }
  public set enablePerPlexityPrompt(value: boolean | cdktf.IResolvable) {
    this._enablePerPlexityPrompt = value;
  }
  public resetEnablePerPlexityPrompt() {
    this._enablePerPlexityPrompt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePerPlexityPromptInput() {
    return this._enablePerPlexityPrompt;
  }

  // enable_poep_prompt - computed: true, optional: true, required: false
  private _enablePoepPrompt?: boolean | cdktf.IResolvable; 
  public get enablePoepPrompt() {
    return this.getBooleanAttribute('enable_poep_prompt');
  }
  public set enablePoepPrompt(value: boolean | cdktf.IResolvable) {
    this._enablePoepPrompt = value;
  }
  public resetEnablePoepPrompt() {
    this._enablePoepPrompt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePoepPromptInput() {
    return this._enablePoepPrompt;
  }

  // enable_ucaas_logmein - computed: true, optional: true, required: false
  private _enableUcaasLogmein?: boolean | cdktf.IResolvable; 
  public get enableUcaasLogmein() {
    return this.getBooleanAttribute('enable_ucaas_logmein');
  }
  public set enableUcaasLogmein(value: boolean | cdktf.IResolvable) {
    this._enableUcaasLogmein = value;
  }
  public resetEnableUcaasLogmein() {
    this._enableUcaasLogmein = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableUcaasLogmeinInput() {
    return this._enableUcaasLogmein;
  }

  // enable_ucaas_ring_central - computed: true, optional: true, required: false
  private _enableUcaasRingCentral?: boolean | cdktf.IResolvable; 
  public get enableUcaasRingCentral() {
    return this.getBooleanAttribute('enable_ucaas_ring_central');
  }
  public set enableUcaasRingCentral(value: boolean | cdktf.IResolvable) {
    this._enableUcaasRingCentral = value;
  }
  public resetEnableUcaasRingCentral() {
    this._enableUcaasRingCentral = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableUcaasRingCentralInput() {
    return this._enableUcaasRingCentral;
  }

  // enable_ucaas_talkdesk - computed: true, optional: true, required: false
  private _enableUcaasTalkdesk?: boolean | cdktf.IResolvable; 
  public get enableUcaasTalkdesk() {
    return this.getBooleanAttribute('enable_ucaas_talkdesk');
  }
  public set enableUcaasTalkdesk(value: boolean | cdktf.IResolvable) {
    this._enableUcaasTalkdesk = value;
  }
  public resetEnableUcaasTalkdesk() {
    this._enableUcaasTalkdesk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableUcaasTalkdeskInput() {
    return this._enableUcaasTalkdesk;
  }

  // enable_ucaas_webex - computed: true, optional: true, required: false
  private _enableUcaasWebex?: boolean | cdktf.IResolvable; 
  public get enableUcaasWebex() {
    return this.getBooleanAttribute('enable_ucaas_webex');
  }
  public set enableUcaasWebex(value: boolean | cdktf.IResolvable) {
    this._enableUcaasWebex = value;
  }
  public resetEnableUcaasWebex() {
    this._enableUcaasWebex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableUcaasWebexInput() {
    return this._enableUcaasWebex;
  }

  // enable_ucaas_zoom - computed: true, optional: true, required: false
  private _enableUcaasZoom?: boolean | cdktf.IResolvable; 
  public get enableUcaasZoom() {
    return this.getBooleanAttribute('enable_ucaas_zoom');
  }
  public set enableUcaasZoom(value: boolean | cdktf.IResolvable) {
    this._enableUcaasZoom = value;
  }
  public resetEnableUcaasZoom() {
    this._enableUcaasZoom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableUcaasZoomInput() {
    return this._enableUcaasZoom;
  }

  // enforce_safe_search - computed: false, optional: true, required: false
  private _enforceSafeSearch?: boolean | cdktf.IResolvable; 
  public get enforceSafeSearch() {
    return this.getBooleanAttribute('enforce_safe_search');
  }
  public set enforceSafeSearch(value: boolean | cdktf.IResolvable) {
    this._enforceSafeSearch = value;
  }
  public resetEnforceSafeSearch() {
    this._enforceSafeSearch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceSafeSearchInput() {
    return this._enforceSafeSearch;
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

  // safe_search_apps - computed: false, optional: true, required: false
  private _safeSearchApps?: string[]; 
  public get safeSearchApps() {
    return cdktf.Fn.tolist(this.getListAttribute('safe_search_apps'));
  }
  public set safeSearchApps(value: string[]) {
    this._safeSearchApps = value;
  }
  public resetSafeSearchApps() {
    this._safeSearchApps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get safeSearchAppsInput() {
    return this._safeSearchApps;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      block_skype: cdktf.booleanToTerraform(this._blockSkype),
      consider_embedded_sites: cdktf.booleanToTerraform(this._considerEmbeddedSites),
      enable_block_override_for_non_auth_user: cdktf.booleanToTerraform(this._enableBlockOverrideForNonAuthUser),
      enable_chatgpt_prompt: cdktf.booleanToTerraform(this._enableChatgptPrompt),
      enable_cipa_compliance: cdktf.booleanToTerraform(this._enableCipaCompliance),
      enable_dynamic_content_cat: cdktf.booleanToTerraform(this._enableDynamicContentCat),
      enable_gemini_prompt: cdktf.booleanToTerraform(this._enableGeminiPrompt),
      enable_meta_prompt: cdktf.booleanToTerraform(this._enableMetaPrompt),
      enable_microsoft_copilot_prompt: cdktf.booleanToTerraform(this._enableMicrosoftCopilotPrompt),
      enable_msft_o365: cdktf.booleanToTerraform(this._enableMsftO365),
      enable_newly_registered_domains: cdktf.booleanToTerraform(this._enableNewlyRegisteredDomains),
      enable_office365: cdktf.booleanToTerraform(this._enableOffice365),
      enable_per_plexity_prompt: cdktf.booleanToTerraform(this._enablePerPlexityPrompt),
      enable_poep_prompt: cdktf.booleanToTerraform(this._enablePoepPrompt),
      enable_ucaas_logmein: cdktf.booleanToTerraform(this._enableUcaasLogmein),
      enable_ucaas_ring_central: cdktf.booleanToTerraform(this._enableUcaasRingCentral),
      enable_ucaas_talkdesk: cdktf.booleanToTerraform(this._enableUcaasTalkdesk),
      enable_ucaas_webex: cdktf.booleanToTerraform(this._enableUcaasWebex),
      enable_ucaas_zoom: cdktf.booleanToTerraform(this._enableUcaasZoom),
      enforce_safe_search: cdktf.booleanToTerraform(this._enforceSafeSearch),
      id: cdktf.stringToTerraform(this._id),
      safe_search_apps: cdktf.listMapper(cdktf.stringToTerraform, false)(this._safeSearchApps),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      block_skype: {
        value: cdktf.booleanToHclTerraform(this._blockSkype),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      consider_embedded_sites: {
        value: cdktf.booleanToHclTerraform(this._considerEmbeddedSites),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_block_override_for_non_auth_user: {
        value: cdktf.booleanToHclTerraform(this._enableBlockOverrideForNonAuthUser),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_chatgpt_prompt: {
        value: cdktf.booleanToHclTerraform(this._enableChatgptPrompt),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_cipa_compliance: {
        value: cdktf.booleanToHclTerraform(this._enableCipaCompliance),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_dynamic_content_cat: {
        value: cdktf.booleanToHclTerraform(this._enableDynamicContentCat),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_gemini_prompt: {
        value: cdktf.booleanToHclTerraform(this._enableGeminiPrompt),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_meta_prompt: {
        value: cdktf.booleanToHclTerraform(this._enableMetaPrompt),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_microsoft_copilot_prompt: {
        value: cdktf.booleanToHclTerraform(this._enableMicrosoftCopilotPrompt),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_msft_o365: {
        value: cdktf.booleanToHclTerraform(this._enableMsftO365),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_newly_registered_domains: {
        value: cdktf.booleanToHclTerraform(this._enableNewlyRegisteredDomains),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_office365: {
        value: cdktf.booleanToHclTerraform(this._enableOffice365),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_per_plexity_prompt: {
        value: cdktf.booleanToHclTerraform(this._enablePerPlexityPrompt),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_poep_prompt: {
        value: cdktf.booleanToHclTerraform(this._enablePoepPrompt),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_ucaas_logmein: {
        value: cdktf.booleanToHclTerraform(this._enableUcaasLogmein),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_ucaas_ring_central: {
        value: cdktf.booleanToHclTerraform(this._enableUcaasRingCentral),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_ucaas_talkdesk: {
        value: cdktf.booleanToHclTerraform(this._enableUcaasTalkdesk),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_ucaas_webex: {
        value: cdktf.booleanToHclTerraform(this._enableUcaasWebex),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_ucaas_zoom: {
        value: cdktf.booleanToHclTerraform(this._enableUcaasZoom),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enforce_safe_search: {
        value: cdktf.booleanToHclTerraform(this._enforceSafeSearch),
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
      safe_search_apps: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._safeSearchApps),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
