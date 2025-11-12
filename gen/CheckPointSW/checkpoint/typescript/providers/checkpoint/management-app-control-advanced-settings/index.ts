// https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_app_control_advanced_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagementAppControlAdvancedSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Block requests when the web service is unavailable. <br>When selected, requests are blocked when there is no connectivity to the Check Point Online Web Service.<br>When cleared, requests are allowed when there is no connectivity.<br>This property is not available in the Global domain of an MDS machine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_app_control_advanced_settings#block_request_when_web_service_is_unavailable ManagementAppControlAdvancedSettings#block_request_when_web_service_is_unavailable}
  */
  readonly blockRequestWhenWebServiceIsUnavailable?: boolean | cdktf.IResolvable;
  /**
  * When selected, the Security Gateway connects to the Check Point Online Web Service to identify social networking widgets that it does not recognize.<br>When cleared or there is no connectivity between the Security Gateway and the Check Point Online Web, the unknown widget is treated as Web Browsing traffic.<br>This property is not available in the Global domain of an MDS machine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_app_control_advanced_settings#categorize_social_network_widgets ManagementAppControlAdvancedSettings#categorize_social_network_widgets}
  */
  readonly categorizeSocialNetworkWidgets?: boolean | cdktf.IResolvable;
  /**
  * Website categorization mode - select the mode that is used for website categorization.<br>This property is not available in the Global domain of an MDS machine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_app_control_advanced_settings#custom_categorization_settings ManagementAppControlAdvancedSettings#custom_categorization_settings}
  */
  readonly customCategorizationSettings?: { [key: string]: string };
  /**
  * Allows the editing of applications, categories, and services. This property is used only in the Global Domain of an MDS machine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_app_control_advanced_settings#domain_level_permission ManagementAppControlAdvancedSettings#domain_level_permission}
  */
  readonly domainLevelPermission?: boolean | cdktf.IResolvable;
  /**
  * If you do not enable URL Filtering on the Security Gateway, you can use a generic Web browser application called Web Browsing in the rule.<br>This application includes all HTTP traffic that is not a defined application Application and URL Filtering assigns Web Browsing as the default application for all HTTP traffic that does not match an application in the Application and URL Filtering Database.<br>This property is not available in the Global domain of an MDS machine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_app_control_advanced_settings#enable_web_browsing ManagementAppControlAdvancedSettings#enable_web_browsing}
  */
  readonly enableWebBrowsing?: boolean | cdktf.IResolvable;
  /**
  * Enable HTTP inspection on non standard ports for application and URL filtering.<br>This property is not available in the Global domain of an MDS machine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_app_control_advanced_settings#httpi_non_standard_ports ManagementAppControlAdvancedSettings#httpi_non_standard_ports}
  */
  readonly httpiNonStandardPorts?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_app_control_advanced_settings#id ManagementAppControlAdvancedSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * In case of internal system error, allow or block all connections.<br>This property is not available in the Global domain of an MDS machine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_app_control_advanced_settings#internal_error_fail_mode ManagementAppControlAdvancedSettings#internal_error_fail_mode}
  */
  readonly internalErrorFailMode?: string;
  /**
  * Match Web application on 'Any' port when used in Block rule - By default this is set to true. and so applications are matched on all services when used in a Block rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_app_control_advanced_settings#match_application_on_any_port ManagementAppControlAdvancedSettings#match_application_on_any_port}
  */
  readonly matchApplicationOnAnyPort?: boolean | cdktf.IResolvable;
  /**
  * In this section user can enable  URL Filtering features.<br>This property is not available in the Global domain of an MDS machine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_app_control_advanced_settings#url_filtering_settings ManagementAppControlAdvancedSettings#url_filtering_settings}
  */
  readonly urlFilteringSettings?: { [key: string]: string };
  /**
  * Web browsing services are the services that match a Web-based custom Application/Site.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_app_control_advanced_settings#web_browsing_services ManagementAppControlAdvancedSettings#web_browsing_services}
  */
  readonly webBrowsingServices?: string[];
  /**
  * Hold - Requests are blocked until categorization is complete.<br>Background - Requests are allowed until categorization is complete.<br>Custom - configure different settings depending on the service -Lets you set different modes for URL Filtering and Social Networking Widgets.<br>This property is not available in the Global domain of an MDS machine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_app_control_advanced_settings#website_categorization_mode ManagementAppControlAdvancedSettings#website_categorization_mode}
  */
  readonly websiteCategorizationMode?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_app_control_advanced_settings checkpoint_management_app_control_advanced_settings}
*/
export class ManagementAppControlAdvancedSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "checkpoint_management_app_control_advanced_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ManagementAppControlAdvancedSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ManagementAppControlAdvancedSettings to import
  * @param importFromId The id of the existing ManagementAppControlAdvancedSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_app_control_advanced_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ManagementAppControlAdvancedSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "checkpoint_management_app_control_advanced_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_app_control_advanced_settings checkpoint_management_app_control_advanced_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManagementAppControlAdvancedSettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ManagementAppControlAdvancedSettingsConfig = {}) {
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
    this._blockRequestWhenWebServiceIsUnavailable = config.blockRequestWhenWebServiceIsUnavailable;
    this._categorizeSocialNetworkWidgets = config.categorizeSocialNetworkWidgets;
    this._customCategorizationSettings = config.customCategorizationSettings;
    this._domainLevelPermission = config.domainLevelPermission;
    this._enableWebBrowsing = config.enableWebBrowsing;
    this._httpiNonStandardPorts = config.httpiNonStandardPorts;
    this._id = config.id;
    this._internalErrorFailMode = config.internalErrorFailMode;
    this._matchApplicationOnAnyPort = config.matchApplicationOnAnyPort;
    this._urlFilteringSettings = config.urlFilteringSettings;
    this._webBrowsingServices = config.webBrowsingServices;
    this._websiteCategorizationMode = config.websiteCategorizationMode;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // block_request_when_web_service_is_unavailable - computed: false, optional: true, required: false
  private _blockRequestWhenWebServiceIsUnavailable?: boolean | cdktf.IResolvable; 
  public get blockRequestWhenWebServiceIsUnavailable() {
    return this.getBooleanAttribute('block_request_when_web_service_is_unavailable');
  }
  public set blockRequestWhenWebServiceIsUnavailable(value: boolean | cdktf.IResolvable) {
    this._blockRequestWhenWebServiceIsUnavailable = value;
  }
  public resetBlockRequestWhenWebServiceIsUnavailable() {
    this._blockRequestWhenWebServiceIsUnavailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockRequestWhenWebServiceIsUnavailableInput() {
    return this._blockRequestWhenWebServiceIsUnavailable;
  }

  // categorize_social_network_widgets - computed: false, optional: true, required: false
  private _categorizeSocialNetworkWidgets?: boolean | cdktf.IResolvable; 
  public get categorizeSocialNetworkWidgets() {
    return this.getBooleanAttribute('categorize_social_network_widgets');
  }
  public set categorizeSocialNetworkWidgets(value: boolean | cdktf.IResolvable) {
    this._categorizeSocialNetworkWidgets = value;
  }
  public resetCategorizeSocialNetworkWidgets() {
    this._categorizeSocialNetworkWidgets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorizeSocialNetworkWidgetsInput() {
    return this._categorizeSocialNetworkWidgets;
  }

  // custom_categorization_settings - computed: false, optional: true, required: false
  private _customCategorizationSettings?: { [key: string]: string }; 
  public get customCategorizationSettings() {
    return this.getStringMapAttribute('custom_categorization_settings');
  }
  public set customCategorizationSettings(value: { [key: string]: string }) {
    this._customCategorizationSettings = value;
  }
  public resetCustomCategorizationSettings() {
    this._customCategorizationSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customCategorizationSettingsInput() {
    return this._customCategorizationSettings;
  }

  // domain_level_permission - computed: false, optional: true, required: false
  private _domainLevelPermission?: boolean | cdktf.IResolvable; 
  public get domainLevelPermission() {
    return this.getBooleanAttribute('domain_level_permission');
  }
  public set domainLevelPermission(value: boolean | cdktf.IResolvable) {
    this._domainLevelPermission = value;
  }
  public resetDomainLevelPermission() {
    this._domainLevelPermission = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainLevelPermissionInput() {
    return this._domainLevelPermission;
  }

  // enable_web_browsing - computed: false, optional: true, required: false
  private _enableWebBrowsing?: boolean | cdktf.IResolvable; 
  public get enableWebBrowsing() {
    return this.getBooleanAttribute('enable_web_browsing');
  }
  public set enableWebBrowsing(value: boolean | cdktf.IResolvable) {
    this._enableWebBrowsing = value;
  }
  public resetEnableWebBrowsing() {
    this._enableWebBrowsing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableWebBrowsingInput() {
    return this._enableWebBrowsing;
  }

  // httpi_non_standard_ports - computed: false, optional: true, required: false
  private _httpiNonStandardPorts?: boolean | cdktf.IResolvable; 
  public get httpiNonStandardPorts() {
    return this.getBooleanAttribute('httpi_non_standard_ports');
  }
  public set httpiNonStandardPorts(value: boolean | cdktf.IResolvable) {
    this._httpiNonStandardPorts = value;
  }
  public resetHttpiNonStandardPorts() {
    this._httpiNonStandardPorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpiNonStandardPortsInput() {
    return this._httpiNonStandardPorts;
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

  // internal_error_fail_mode - computed: false, optional: true, required: false
  private _internalErrorFailMode?: string; 
  public get internalErrorFailMode() {
    return this.getStringAttribute('internal_error_fail_mode');
  }
  public set internalErrorFailMode(value: string) {
    this._internalErrorFailMode = value;
  }
  public resetInternalErrorFailMode() {
    this._internalErrorFailMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalErrorFailModeInput() {
    return this._internalErrorFailMode;
  }

  // match_application_on_any_port - computed: false, optional: true, required: false
  private _matchApplicationOnAnyPort?: boolean | cdktf.IResolvable; 
  public get matchApplicationOnAnyPort() {
    return this.getBooleanAttribute('match_application_on_any_port');
  }
  public set matchApplicationOnAnyPort(value: boolean | cdktf.IResolvable) {
    this._matchApplicationOnAnyPort = value;
  }
  public resetMatchApplicationOnAnyPort() {
    this._matchApplicationOnAnyPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchApplicationOnAnyPortInput() {
    return this._matchApplicationOnAnyPort;
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }

  // url_filtering_settings - computed: false, optional: true, required: false
  private _urlFilteringSettings?: { [key: string]: string }; 
  public get urlFilteringSettings() {
    return this.getStringMapAttribute('url_filtering_settings');
  }
  public set urlFilteringSettings(value: { [key: string]: string }) {
    this._urlFilteringSettings = value;
  }
  public resetUrlFilteringSettings() {
    this._urlFilteringSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlFilteringSettingsInput() {
    return this._urlFilteringSettings;
  }

  // web_browsing_services - computed: false, optional: true, required: false
  private _webBrowsingServices?: string[]; 
  public get webBrowsingServices() {
    return cdktf.Fn.tolist(this.getListAttribute('web_browsing_services'));
  }
  public set webBrowsingServices(value: string[]) {
    this._webBrowsingServices = value;
  }
  public resetWebBrowsingServices() {
    this._webBrowsingServices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webBrowsingServicesInput() {
    return this._webBrowsingServices;
  }

  // website_categorization_mode - computed: false, optional: true, required: false
  private _websiteCategorizationMode?: string; 
  public get websiteCategorizationMode() {
    return this.getStringAttribute('website_categorization_mode');
  }
  public set websiteCategorizationMode(value: string) {
    this._websiteCategorizationMode = value;
  }
  public resetWebsiteCategorizationMode() {
    this._websiteCategorizationMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get websiteCategorizationModeInput() {
    return this._websiteCategorizationMode;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      block_request_when_web_service_is_unavailable: cdktf.booleanToTerraform(this._blockRequestWhenWebServiceIsUnavailable),
      categorize_social_network_widgets: cdktf.booleanToTerraform(this._categorizeSocialNetworkWidgets),
      custom_categorization_settings: cdktf.hashMapper(cdktf.stringToTerraform)(this._customCategorizationSettings),
      domain_level_permission: cdktf.booleanToTerraform(this._domainLevelPermission),
      enable_web_browsing: cdktf.booleanToTerraform(this._enableWebBrowsing),
      httpi_non_standard_ports: cdktf.booleanToTerraform(this._httpiNonStandardPorts),
      id: cdktf.stringToTerraform(this._id),
      internal_error_fail_mode: cdktf.stringToTerraform(this._internalErrorFailMode),
      match_application_on_any_port: cdktf.booleanToTerraform(this._matchApplicationOnAnyPort),
      url_filtering_settings: cdktf.hashMapper(cdktf.stringToTerraform)(this._urlFilteringSettings),
      web_browsing_services: cdktf.listMapper(cdktf.stringToTerraform, false)(this._webBrowsingServices),
      website_categorization_mode: cdktf.stringToTerraform(this._websiteCategorizationMode),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      block_request_when_web_service_is_unavailable: {
        value: cdktf.booleanToHclTerraform(this._blockRequestWhenWebServiceIsUnavailable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      categorize_social_network_widgets: {
        value: cdktf.booleanToHclTerraform(this._categorizeSocialNetworkWidgets),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      custom_categorization_settings: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._customCategorizationSettings),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      domain_level_permission: {
        value: cdktf.booleanToHclTerraform(this._domainLevelPermission),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_web_browsing: {
        value: cdktf.booleanToHclTerraform(this._enableWebBrowsing),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      httpi_non_standard_ports: {
        value: cdktf.booleanToHclTerraform(this._httpiNonStandardPorts),
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
      internal_error_fail_mode: {
        value: cdktf.stringToHclTerraform(this._internalErrorFailMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      match_application_on_any_port: {
        value: cdktf.booleanToHclTerraform(this._matchApplicationOnAnyPort),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      url_filtering_settings: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._urlFilteringSettings),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      web_browsing_services: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._webBrowsingServices),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      website_categorization_mode: {
        value: cdktf.stringToHclTerraform(this._websiteCategorizationMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
