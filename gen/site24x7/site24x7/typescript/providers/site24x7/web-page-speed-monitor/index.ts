// https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/web_page_speed_monitor
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WebPageSpeedMonitorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Action to be performed on monitor IT Automation templates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/web_page_speed_monitor#actions WebPageSpeedMonitor#actions}
  */
  readonly actions?: { [key: string]: string };
  /**
  * Authentication password to access the website.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/web_page_speed_monitor#auth_pass WebPageSpeedMonitor#auth_pass}
  */
  readonly authPass?: string;
  /**
  * Authentication user name to access the website.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/web_page_speed_monitor#auth_user WebPageSpeedMonitor#auth_user}
  */
  readonly authUser?: string;
  /**
  * Type of the browser. 1 - Firefox, 2 - Chrome.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/web_page_speed_monitor#browser_type WebPageSpeedMonitor#browser_type}
  */
  readonly browserType?: number;
  /**
  * Type of the browser. 83 - Firefox, 88 - Chrome.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/web_page_speed_monitor#browser_version WebPageSpeedMonitor#browser_version}
  */
  readonly browserVersion?: number;
  /**
  * Interval at which your website has to be monitored. Default value is 5 minute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/web_page_speed_monitor#check_frequency WebPageSpeedMonitor#check_frequency}
  */
  readonly checkFrequency?: string;
  /**
  * Credential Profile to associate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/web_page_speed_monitor#credential_profile_id WebPageSpeedMonitor#credential_profile_id}
  */
  readonly credentialProfileId?: string;
  /**
  * A Map of Header name and value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/web_page_speed_monitor#custom_headers WebPageSpeedMonitor#custom_headers}
  */
  readonly customHeaders?: { [key: string]: string };
  /**
  * List of dependent resource IDs. Suppress alert when dependent monitor(s) is down.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/web_page_speed_monitor#dependency_resource_ids WebPageSpeedMonitor#dependency_resource_ids}
  */
  readonly dependencyResourceIds?: string[];
  /**
  * Type of the device used for running the speed test. 1 - Desktop, 2 - Mobile, 3 - Tab.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/web_page_speed_monitor#device_type WebPageSpeedMonitor#device_type}
  */
  readonly deviceType?: string;
  /**
  * Display Name for the monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/web_page_speed_monitor#display_name WebPageSpeedMonitor#display_name}
  */
  readonly displayName: string;
  /**
  * Verify the presence of specified keywords within a particular HTML element by providing element identifiers and by specifying the element locator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/web_page_speed_monitor#element_check WebPageSpeedMonitor#element_check}
  */
  readonly elementCheck?: string;
  /**
  * HTTP Method to be used for accessing the website. PUT, PATCH and DELETE are not supported. Default value is 'G'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/web_page_speed_monitor#http_method WebPageSpeedMonitor#http_method}
  */
  readonly httpMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/web_page_speed_monitor#id WebPageSpeedMonitor#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Monitoring is performed over IPv4 or IPv6 based on the value specified. 0 - use only IPv4, 1 - use only IPv6, 2 - use both IPv4 and IPv6.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/web_page_speed_monitor#ip_type WebPageSpeedMonitor#ip_type}
  */
  readonly ipType?: number;
  /**
  * Token ID of the Web Token to be associated with the monitor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/web_page_speed_monitor#jwt_id WebPageSpeedMonitor#jwt_id}
  */
  readonly jwtId?: string;
  /**
  * Location profile to be associated with the monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/web_page_speed_monitor#location_profile_id WebPageSpeedMonitor#location_profile_id}
  */
  readonly locationProfileId?: string;
  /**
  * Name of the location profile to be associated with the monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/web_page_speed_monitor#location_profile_name WebPageSpeedMonitor#location_profile_name}
  */
  readonly locationProfileName?: string;
  /**
  * Perform case sensitive keyword search or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/web_page_speed_monitor#match_case WebPageSpeedMonitor#match_case}
  */
  readonly matchCase?: boolean | cdktf.IResolvable;
  /**
  * Severity with which alert has to raised when the matching regex is found in the website response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/web_page_speed_monitor#match_regex_severity WebPageSpeedMonitor#match_regex_severity}
  */
  readonly matchRegexSeverity?: number;
  /**
  * Match the regular expression in the website response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/web_page_speed_monitor#match_regex_value WebPageSpeedMonitor#match_regex_value}
  */
  readonly matchRegexValue?: string;
  /**
  * Severity with which alert has to raised when the matching keyword is found in the website response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/web_page_speed_monitor#matching_keyword_severity WebPageSpeedMonitor#matching_keyword_severity}
  */
  readonly matchingKeywordSeverity?: number;
  /**
  * Check for the keyword in the website response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/web_page_speed_monitor#matching_keyword_value WebPageSpeedMonitor#matching_keyword_value}
  */
  readonly matchingKeywordValue?: string;
  /**
  * List of monitor groups to which the monitor has to be associated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/web_page_speed_monitor#monitor_groups WebPageSpeedMonitor#monitor_groups}
  */
  readonly monitorGroups?: string[];
  /**
  * Notification profile to be associated with the monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/web_page_speed_monitor#notification_profile_id WebPageSpeedMonitor#notification_profile_id}
  */
  readonly notificationProfileId?: string;
  /**
  * Name of the notification profile to be associated with the monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/web_page_speed_monitor#notification_profile_name WebPageSpeedMonitor#notification_profile_name}
  */
  readonly notificationProfileName?: string;
  /**
  * List of tag IDs to be associated to the monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/web_page_speed_monitor#tag_ids WebPageSpeedMonitor#tag_ids}
  */
  readonly tagIds?: string[];
  /**
  * List of tag names to be associated to the monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/web_page_speed_monitor#tag_names WebPageSpeedMonitor#tag_names}
  */
  readonly tagNames?: string[];
  /**
  * List of Third Party Service IDs to be associated to the monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/web_page_speed_monitor#third_party_service_ids WebPageSpeedMonitor#third_party_service_ids}
  */
  readonly thirdPartyServiceIds?: string[];
  /**
  * Threshold profile to be associated with the monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/web_page_speed_monitor#threshold_profile_id WebPageSpeedMonitor#threshold_profile_id}
  */
  readonly thresholdProfileId?: string;
  /**
  * Timeout for connecting to website. Default value is 30. Range 1 - 45.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/web_page_speed_monitor#timeout WebPageSpeedMonitor#timeout}
  */
  readonly timeout?: number;
  /**
  * Severity with which alert has to raised when the keyword is not present in the website response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/web_page_speed_monitor#unmatching_keyword_severity WebPageSpeedMonitor#unmatching_keyword_severity}
  */
  readonly unmatchingKeywordSeverity?: number;
  /**
  * Check for the absence of the keyword in the website response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/web_page_speed_monitor#unmatching_keyword_value WebPageSpeedMonitor#unmatching_keyword_value}
  */
  readonly unmatchingKeywordValue?: string;
  /**
  * Provide a comma-separated list of HTTP status codes that indicate a successful response. You can specify individual status codes, as well as ranges separated with a colon.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/web_page_speed_monitor#up_status_codes WebPageSpeedMonitor#up_status_codes}
  */
  readonly upStatusCodes?: string;
  /**
  * User Agent to be used while monitoring the website.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/web_page_speed_monitor#user_agent WebPageSpeedMonitor#user_agent}
  */
  readonly userAgent?: string;
  /**
  * List of user groups to be notified when the monitor is down.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/web_page_speed_monitor#user_group_ids WebPageSpeedMonitor#user_group_ids}
  */
  readonly userGroupIds?: string[];
  /**
  * Name of the user groups to be associated with the monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/web_page_speed_monitor#user_group_names WebPageSpeedMonitor#user_group_names}
  */
  readonly userGroupNames?: string[];
  /**
  * Website address to monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/web_page_speed_monitor#website WebPageSpeedMonitor#website}
  */
  readonly website: string;
  /**
  * Type of content the website page has. 1 - Static Website,	2 - Dynamic Website, 3 - Flash-Based Website.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/web_page_speed_monitor#website_type WebPageSpeedMonitor#website_type}
  */
  readonly websiteType?: number;
  /**
  * Set a resolution based on your preferred device type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/web_page_speed_monitor#wpa_resolution WebPageSpeedMonitor#wpa_resolution}
  */
  readonly wpaResolution?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/web_page_speed_monitor site24x7_web_page_speed_monitor}
*/
export class WebPageSpeedMonitor extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "site24x7_web_page_speed_monitor";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WebPageSpeedMonitor resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WebPageSpeedMonitor to import
  * @param importFromId The id of the existing WebPageSpeedMonitor that should be imported. Refer to the {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/web_page_speed_monitor#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WebPageSpeedMonitor to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "site24x7_web_page_speed_monitor", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/web_page_speed_monitor site24x7_web_page_speed_monitor} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WebPageSpeedMonitorConfig
  */
  public constructor(scope: Construct, id: string, config: WebPageSpeedMonitorConfig) {
    super(scope, id, {
      terraformResourceType: 'site24x7_web_page_speed_monitor',
      terraformGeneratorMetadata: {
        providerName: 'site24x7',
        providerVersion: '2.0.3',
        providerVersionConstraint: '2.0.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._actions = config.actions;
    this._authPass = config.authPass;
    this._authUser = config.authUser;
    this._browserType = config.browserType;
    this._browserVersion = config.browserVersion;
    this._checkFrequency = config.checkFrequency;
    this._credentialProfileId = config.credentialProfileId;
    this._customHeaders = config.customHeaders;
    this._dependencyResourceIds = config.dependencyResourceIds;
    this._deviceType = config.deviceType;
    this._displayName = config.displayName;
    this._elementCheck = config.elementCheck;
    this._httpMethod = config.httpMethod;
    this._id = config.id;
    this._ipType = config.ipType;
    this._jwtId = config.jwtId;
    this._locationProfileId = config.locationProfileId;
    this._locationProfileName = config.locationProfileName;
    this._matchCase = config.matchCase;
    this._matchRegexSeverity = config.matchRegexSeverity;
    this._matchRegexValue = config.matchRegexValue;
    this._matchingKeywordSeverity = config.matchingKeywordSeverity;
    this._matchingKeywordValue = config.matchingKeywordValue;
    this._monitorGroups = config.monitorGroups;
    this._notificationProfileId = config.notificationProfileId;
    this._notificationProfileName = config.notificationProfileName;
    this._tagIds = config.tagIds;
    this._tagNames = config.tagNames;
    this._thirdPartyServiceIds = config.thirdPartyServiceIds;
    this._thresholdProfileId = config.thresholdProfileId;
    this._timeout = config.timeout;
    this._unmatchingKeywordSeverity = config.unmatchingKeywordSeverity;
    this._unmatchingKeywordValue = config.unmatchingKeywordValue;
    this._upStatusCodes = config.upStatusCodes;
    this._userAgent = config.userAgent;
    this._userGroupIds = config.userGroupIds;
    this._userGroupNames = config.userGroupNames;
    this._website = config.website;
    this._websiteType = config.websiteType;
    this._wpaResolution = config.wpaResolution;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // actions - computed: false, optional: true, required: false
  private _actions?: { [key: string]: string }; 
  public get actions() {
    return this.getStringMapAttribute('actions');
  }
  public set actions(value: { [key: string]: string }) {
    this._actions = value;
  }
  public resetActions() {
    this._actions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions;
  }

  // auth_pass - computed: false, optional: true, required: false
  private _authPass?: string; 
  public get authPass() {
    return this.getStringAttribute('auth_pass');
  }
  public set authPass(value: string) {
    this._authPass = value;
  }
  public resetAuthPass() {
    this._authPass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authPassInput() {
    return this._authPass;
  }

  // auth_user - computed: false, optional: true, required: false
  private _authUser?: string; 
  public get authUser() {
    return this.getStringAttribute('auth_user');
  }
  public set authUser(value: string) {
    this._authUser = value;
  }
  public resetAuthUser() {
    this._authUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authUserInput() {
    return this._authUser;
  }

  // browser_type - computed: false, optional: true, required: false
  private _browserType?: number; 
  public get browserType() {
    return this.getNumberAttribute('browser_type');
  }
  public set browserType(value: number) {
    this._browserType = value;
  }
  public resetBrowserType() {
    this._browserType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get browserTypeInput() {
    return this._browserType;
  }

  // browser_version - computed: false, optional: true, required: false
  private _browserVersion?: number; 
  public get browserVersion() {
    return this.getNumberAttribute('browser_version');
  }
  public set browserVersion(value: number) {
    this._browserVersion = value;
  }
  public resetBrowserVersion() {
    this._browserVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get browserVersionInput() {
    return this._browserVersion;
  }

  // check_frequency - computed: false, optional: true, required: false
  private _checkFrequency?: string; 
  public get checkFrequency() {
    return this.getStringAttribute('check_frequency');
  }
  public set checkFrequency(value: string) {
    this._checkFrequency = value;
  }
  public resetCheckFrequency() {
    this._checkFrequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkFrequencyInput() {
    return this._checkFrequency;
  }

  // credential_profile_id - computed: false, optional: true, required: false
  private _credentialProfileId?: string; 
  public get credentialProfileId() {
    return this.getStringAttribute('credential_profile_id');
  }
  public set credentialProfileId(value: string) {
    this._credentialProfileId = value;
  }
  public resetCredentialProfileId() {
    this._credentialProfileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialProfileIdInput() {
    return this._credentialProfileId;
  }

  // custom_headers - computed: false, optional: true, required: false
  private _customHeaders?: { [key: string]: string }; 
  public get customHeaders() {
    return this.getStringMapAttribute('custom_headers');
  }
  public set customHeaders(value: { [key: string]: string }) {
    this._customHeaders = value;
  }
  public resetCustomHeaders() {
    this._customHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customHeadersInput() {
    return this._customHeaders;
  }

  // dependency_resource_ids - computed: false, optional: true, required: false
  private _dependencyResourceIds?: string[]; 
  public get dependencyResourceIds() {
    return cdktf.Fn.tolist(this.getListAttribute('dependency_resource_ids'));
  }
  public set dependencyResourceIds(value: string[]) {
    this._dependencyResourceIds = value;
  }
  public resetDependencyResourceIds() {
    this._dependencyResourceIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dependencyResourceIdsInput() {
    return this._dependencyResourceIds;
  }

  // device_type - computed: false, optional: true, required: false
  private _deviceType?: string; 
  public get deviceType() {
    return this.getStringAttribute('device_type');
  }
  public set deviceType(value: string) {
    this._deviceType = value;
  }
  public resetDeviceType() {
    this._deviceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceTypeInput() {
    return this._deviceType;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // element_check - computed: false, optional: true, required: false
  private _elementCheck?: string; 
  public get elementCheck() {
    return this.getStringAttribute('element_check');
  }
  public set elementCheck(value: string) {
    this._elementCheck = value;
  }
  public resetElementCheck() {
    this._elementCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elementCheckInput() {
    return this._elementCheck;
  }

  // http_method - computed: false, optional: true, required: false
  private _httpMethod?: string; 
  public get httpMethod() {
    return this.getStringAttribute('http_method');
  }
  public set httpMethod(value: string) {
    this._httpMethod = value;
  }
  public resetHttpMethod() {
    this._httpMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpMethodInput() {
    return this._httpMethod;
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

  // ip_type - computed: false, optional: true, required: false
  private _ipType?: number; 
  public get ipType() {
    return this.getNumberAttribute('ip_type');
  }
  public set ipType(value: number) {
    this._ipType = value;
  }
  public resetIpType() {
    this._ipType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipTypeInput() {
    return this._ipType;
  }

  // jwt_id - computed: false, optional: true, required: false
  private _jwtId?: string; 
  public get jwtId() {
    return this.getStringAttribute('jwt_id');
  }
  public set jwtId(value: string) {
    this._jwtId = value;
  }
  public resetJwtId() {
    this._jwtId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtIdInput() {
    return this._jwtId;
  }

  // location_profile_id - computed: true, optional: true, required: false
  private _locationProfileId?: string; 
  public get locationProfileId() {
    return this.getStringAttribute('location_profile_id');
  }
  public set locationProfileId(value: string) {
    this._locationProfileId = value;
  }
  public resetLocationProfileId() {
    this._locationProfileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationProfileIdInput() {
    return this._locationProfileId;
  }

  // location_profile_name - computed: true, optional: true, required: false
  private _locationProfileName?: string; 
  public get locationProfileName() {
    return this.getStringAttribute('location_profile_name');
  }
  public set locationProfileName(value: string) {
    this._locationProfileName = value;
  }
  public resetLocationProfileName() {
    this._locationProfileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationProfileNameInput() {
    return this._locationProfileName;
  }

  // match_case - computed: false, optional: true, required: false
  private _matchCase?: boolean | cdktf.IResolvable; 
  public get matchCase() {
    return this.getBooleanAttribute('match_case');
  }
  public set matchCase(value: boolean | cdktf.IResolvable) {
    this._matchCase = value;
  }
  public resetMatchCase() {
    this._matchCase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchCaseInput() {
    return this._matchCase;
  }

  // match_regex_severity - computed: false, optional: true, required: false
  private _matchRegexSeverity?: number; 
  public get matchRegexSeverity() {
    return this.getNumberAttribute('match_regex_severity');
  }
  public set matchRegexSeverity(value: number) {
    this._matchRegexSeverity = value;
  }
  public resetMatchRegexSeverity() {
    this._matchRegexSeverity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchRegexSeverityInput() {
    return this._matchRegexSeverity;
  }

  // match_regex_value - computed: false, optional: true, required: false
  private _matchRegexValue?: string; 
  public get matchRegexValue() {
    return this.getStringAttribute('match_regex_value');
  }
  public set matchRegexValue(value: string) {
    this._matchRegexValue = value;
  }
  public resetMatchRegexValue() {
    this._matchRegexValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchRegexValueInput() {
    return this._matchRegexValue;
  }

  // matching_keyword_severity - computed: false, optional: true, required: false
  private _matchingKeywordSeverity?: number; 
  public get matchingKeywordSeverity() {
    return this.getNumberAttribute('matching_keyword_severity');
  }
  public set matchingKeywordSeverity(value: number) {
    this._matchingKeywordSeverity = value;
  }
  public resetMatchingKeywordSeverity() {
    this._matchingKeywordSeverity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchingKeywordSeverityInput() {
    return this._matchingKeywordSeverity;
  }

  // matching_keyword_value - computed: false, optional: true, required: false
  private _matchingKeywordValue?: string; 
  public get matchingKeywordValue() {
    return this.getStringAttribute('matching_keyword_value');
  }
  public set matchingKeywordValue(value: string) {
    this._matchingKeywordValue = value;
  }
  public resetMatchingKeywordValue() {
    this._matchingKeywordValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchingKeywordValueInput() {
    return this._matchingKeywordValue;
  }

  // monitor_groups - computed: false, optional: true, required: false
  private _monitorGroups?: string[]; 
  public get monitorGroups() {
    return this.getListAttribute('monitor_groups');
  }
  public set monitorGroups(value: string[]) {
    this._monitorGroups = value;
  }
  public resetMonitorGroups() {
    this._monitorGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorGroupsInput() {
    return this._monitorGroups;
  }

  // notification_profile_id - computed: true, optional: true, required: false
  private _notificationProfileId?: string; 
  public get notificationProfileId() {
    return this.getStringAttribute('notification_profile_id');
  }
  public set notificationProfileId(value: string) {
    this._notificationProfileId = value;
  }
  public resetNotificationProfileId() {
    this._notificationProfileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationProfileIdInput() {
    return this._notificationProfileId;
  }

  // notification_profile_name - computed: false, optional: true, required: false
  private _notificationProfileName?: string; 
  public get notificationProfileName() {
    return this.getStringAttribute('notification_profile_name');
  }
  public set notificationProfileName(value: string) {
    this._notificationProfileName = value;
  }
  public resetNotificationProfileName() {
    this._notificationProfileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationProfileNameInput() {
    return this._notificationProfileName;
  }

  // tag_ids - computed: true, optional: true, required: false
  private _tagIds?: string[]; 
  public get tagIds() {
    return cdktf.Fn.tolist(this.getListAttribute('tag_ids'));
  }
  public set tagIds(value: string[]) {
    this._tagIds = value;
  }
  public resetTagIds() {
    this._tagIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagIdsInput() {
    return this._tagIds;
  }

  // tag_names - computed: false, optional: true, required: false
  private _tagNames?: string[]; 
  public get tagNames() {
    return this.getListAttribute('tag_names');
  }
  public set tagNames(value: string[]) {
    this._tagNames = value;
  }
  public resetTagNames() {
    this._tagNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagNamesInput() {
    return this._tagNames;
  }

  // third_party_service_ids - computed: false, optional: true, required: false
  private _thirdPartyServiceIds?: string[]; 
  public get thirdPartyServiceIds() {
    return this.getListAttribute('third_party_service_ids');
  }
  public set thirdPartyServiceIds(value: string[]) {
    this._thirdPartyServiceIds = value;
  }
  public resetThirdPartyServiceIds() {
    this._thirdPartyServiceIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thirdPartyServiceIdsInput() {
    return this._thirdPartyServiceIds;
  }

  // threshold_profile_id - computed: true, optional: true, required: false
  private _thresholdProfileId?: string; 
  public get thresholdProfileId() {
    return this.getStringAttribute('threshold_profile_id');
  }
  public set thresholdProfileId(value: string) {
    this._thresholdProfileId = value;
  }
  public resetThresholdProfileId() {
    this._thresholdProfileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdProfileIdInput() {
    return this._thresholdProfileId;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // unmatching_keyword_severity - computed: false, optional: true, required: false
  private _unmatchingKeywordSeverity?: number; 
  public get unmatchingKeywordSeverity() {
    return this.getNumberAttribute('unmatching_keyword_severity');
  }
  public set unmatchingKeywordSeverity(value: number) {
    this._unmatchingKeywordSeverity = value;
  }
  public resetUnmatchingKeywordSeverity() {
    this._unmatchingKeywordSeverity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unmatchingKeywordSeverityInput() {
    return this._unmatchingKeywordSeverity;
  }

  // unmatching_keyword_value - computed: false, optional: true, required: false
  private _unmatchingKeywordValue?: string; 
  public get unmatchingKeywordValue() {
    return this.getStringAttribute('unmatching_keyword_value');
  }
  public set unmatchingKeywordValue(value: string) {
    this._unmatchingKeywordValue = value;
  }
  public resetUnmatchingKeywordValue() {
    this._unmatchingKeywordValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unmatchingKeywordValueInput() {
    return this._unmatchingKeywordValue;
  }

  // up_status_codes - computed: false, optional: true, required: false
  private _upStatusCodes?: string; 
  public get upStatusCodes() {
    return this.getStringAttribute('up_status_codes');
  }
  public set upStatusCodes(value: string) {
    this._upStatusCodes = value;
  }
  public resetUpStatusCodes() {
    this._upStatusCodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upStatusCodesInput() {
    return this._upStatusCodes;
  }

  // user_agent - computed: false, optional: true, required: false
  private _userAgent?: string; 
  public get userAgent() {
    return this.getStringAttribute('user_agent');
  }
  public set userAgent(value: string) {
    this._userAgent = value;
  }
  public resetUserAgent() {
    this._userAgent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAgentInput() {
    return this._userAgent;
  }

  // user_group_ids - computed: true, optional: true, required: false
  private _userGroupIds?: string[]; 
  public get userGroupIds() {
    return this.getListAttribute('user_group_ids');
  }
  public set userGroupIds(value: string[]) {
    this._userGroupIds = value;
  }
  public resetUserGroupIds() {
    this._userGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userGroupIdsInput() {
    return this._userGroupIds;
  }

  // user_group_names - computed: false, optional: true, required: false
  private _userGroupNames?: string[]; 
  public get userGroupNames() {
    return this.getListAttribute('user_group_names');
  }
  public set userGroupNames(value: string[]) {
    this._userGroupNames = value;
  }
  public resetUserGroupNames() {
    this._userGroupNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userGroupNamesInput() {
    return this._userGroupNames;
  }

  // website - computed: false, optional: false, required: true
  private _website?: string; 
  public get website() {
    return this.getStringAttribute('website');
  }
  public set website(value: string) {
    this._website = value;
  }
  // Temporarily expose input value. Use with caution.
  public get websiteInput() {
    return this._website;
  }

  // website_type - computed: false, optional: true, required: false
  private _websiteType?: number; 
  public get websiteType() {
    return this.getNumberAttribute('website_type');
  }
  public set websiteType(value: number) {
    this._websiteType = value;
  }
  public resetWebsiteType() {
    this._websiteType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get websiteTypeInput() {
    return this._websiteType;
  }

  // wpa_resolution - computed: false, optional: true, required: false
  private _wpaResolution?: string; 
  public get wpaResolution() {
    return this.getStringAttribute('wpa_resolution');
  }
  public set wpaResolution(value: string) {
    this._wpaResolution = value;
  }
  public resetWpaResolution() {
    this._wpaResolution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wpaResolutionInput() {
    return this._wpaResolution;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      actions: cdktf.hashMapper(cdktf.stringToTerraform)(this._actions),
      auth_pass: cdktf.stringToTerraform(this._authPass),
      auth_user: cdktf.stringToTerraform(this._authUser),
      browser_type: cdktf.numberToTerraform(this._browserType),
      browser_version: cdktf.numberToTerraform(this._browserVersion),
      check_frequency: cdktf.stringToTerraform(this._checkFrequency),
      credential_profile_id: cdktf.stringToTerraform(this._credentialProfileId),
      custom_headers: cdktf.hashMapper(cdktf.stringToTerraform)(this._customHeaders),
      dependency_resource_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dependencyResourceIds),
      device_type: cdktf.stringToTerraform(this._deviceType),
      display_name: cdktf.stringToTerraform(this._displayName),
      element_check: cdktf.stringToTerraform(this._elementCheck),
      http_method: cdktf.stringToTerraform(this._httpMethod),
      id: cdktf.stringToTerraform(this._id),
      ip_type: cdktf.numberToTerraform(this._ipType),
      jwt_id: cdktf.stringToTerraform(this._jwtId),
      location_profile_id: cdktf.stringToTerraform(this._locationProfileId),
      location_profile_name: cdktf.stringToTerraform(this._locationProfileName),
      match_case: cdktf.booleanToTerraform(this._matchCase),
      match_regex_severity: cdktf.numberToTerraform(this._matchRegexSeverity),
      match_regex_value: cdktf.stringToTerraform(this._matchRegexValue),
      matching_keyword_severity: cdktf.numberToTerraform(this._matchingKeywordSeverity),
      matching_keyword_value: cdktf.stringToTerraform(this._matchingKeywordValue),
      monitor_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._monitorGroups),
      notification_profile_id: cdktf.stringToTerraform(this._notificationProfileId),
      notification_profile_name: cdktf.stringToTerraform(this._notificationProfileName),
      tag_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tagIds),
      tag_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tagNames),
      third_party_service_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._thirdPartyServiceIds),
      threshold_profile_id: cdktf.stringToTerraform(this._thresholdProfileId),
      timeout: cdktf.numberToTerraform(this._timeout),
      unmatching_keyword_severity: cdktf.numberToTerraform(this._unmatchingKeywordSeverity),
      unmatching_keyword_value: cdktf.stringToTerraform(this._unmatchingKeywordValue),
      up_status_codes: cdktf.stringToTerraform(this._upStatusCodes),
      user_agent: cdktf.stringToTerraform(this._userAgent),
      user_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._userGroupIds),
      user_group_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._userGroupNames),
      website: cdktf.stringToTerraform(this._website),
      website_type: cdktf.numberToTerraform(this._websiteType),
      wpa_resolution: cdktf.stringToTerraform(this._wpaResolution),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      actions: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._actions),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      auth_pass: {
        value: cdktf.stringToHclTerraform(this._authPass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_user: {
        value: cdktf.stringToHclTerraform(this._authUser),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      browser_type: {
        value: cdktf.numberToHclTerraform(this._browserType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      browser_version: {
        value: cdktf.numberToHclTerraform(this._browserVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      check_frequency: {
        value: cdktf.stringToHclTerraform(this._checkFrequency),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      credential_profile_id: {
        value: cdktf.stringToHclTerraform(this._credentialProfileId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_headers: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._customHeaders),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      dependency_resource_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dependencyResourceIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      device_type: {
        value: cdktf.stringToHclTerraform(this._deviceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      element_check: {
        value: cdktf.stringToHclTerraform(this._elementCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_method: {
        value: cdktf.stringToHclTerraform(this._httpMethod),
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
      ip_type: {
        value: cdktf.numberToHclTerraform(this._ipType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      jwt_id: {
        value: cdktf.stringToHclTerraform(this._jwtId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location_profile_id: {
        value: cdktf.stringToHclTerraform(this._locationProfileId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location_profile_name: {
        value: cdktf.stringToHclTerraform(this._locationProfileName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      match_case: {
        value: cdktf.booleanToHclTerraform(this._matchCase),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      match_regex_severity: {
        value: cdktf.numberToHclTerraform(this._matchRegexSeverity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      match_regex_value: {
        value: cdktf.stringToHclTerraform(this._matchRegexValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      matching_keyword_severity: {
        value: cdktf.numberToHclTerraform(this._matchingKeywordSeverity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      matching_keyword_value: {
        value: cdktf.stringToHclTerraform(this._matchingKeywordValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      monitor_groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._monitorGroups),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      notification_profile_id: {
        value: cdktf.stringToHclTerraform(this._notificationProfileId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notification_profile_name: {
        value: cdktf.stringToHclTerraform(this._notificationProfileName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tag_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tagIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      tag_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tagNames),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      third_party_service_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._thirdPartyServiceIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      threshold_profile_id: {
        value: cdktf.stringToHclTerraform(this._thresholdProfileId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeout: {
        value: cdktf.numberToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      unmatching_keyword_severity: {
        value: cdktf.numberToHclTerraform(this._unmatchingKeywordSeverity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      unmatching_keyword_value: {
        value: cdktf.stringToHclTerraform(this._unmatchingKeywordValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      up_status_codes: {
        value: cdktf.stringToHclTerraform(this._upStatusCodes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_agent: {
        value: cdktf.stringToHclTerraform(this._userAgent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_group_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._userGroupIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      user_group_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._userGroupNames),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      website: {
        value: cdktf.stringToHclTerraform(this._website),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      website_type: {
        value: cdktf.numberToHclTerraform(this._websiteType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      wpa_resolution: {
        value: cdktf.stringToHclTerraform(this._wpaResolution),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
