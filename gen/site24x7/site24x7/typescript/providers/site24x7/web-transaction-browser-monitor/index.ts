// https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/web_transaction_browser_monitor
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WebTransactionBrowserMonitorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Action to be performed on monitor IT Automation templates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/web_transaction_browser_monitor#actions WebTransactionBrowserMonitor#actions}
  */
  readonly actions?: { [key: string]: string };
  /**
  * When asynchronous data collection is enabled, polling will be carried out from all the locations at the same time. If it is disabled, polling will be done consecutively from the selected locations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/web_transaction_browser_monitor#async_dc_enabled WebTransactionBrowserMonitor#async_dc_enabled}
  */
  readonly asyncDcEnabled?: boolean | cdktf.IResolvable;
  /**
  * Check for the auth details in the website response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/web_transaction_browser_monitor#auth_details WebTransactionBrowserMonitor#auth_details}
  */
  readonly authDetails?: { [key: string]: string };
  /**
  * BaseURL of the transaction
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/web_transaction_browser_monitor#base_url WebTransactionBrowserMonitor#base_url}
  */
  readonly baseUrl: string;
  /**
  * Choose the browser type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/web_transaction_browser_monitor#browser_type WebTransactionBrowserMonitor#browser_type}
  */
  readonly browserType?: number;
  /**
  * Choose the browser version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/web_transaction_browser_monitor#browser_version WebTransactionBrowserMonitor#browser_version}
  */
  readonly browserVersion?: number;
  /**
  * Check interval for monitoring.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/web_transaction_browser_monitor#check_frequency WebTransactionBrowserMonitor#check_frequency}
  */
  readonly checkFrequency?: string;
  /**
  * A Map of cookies name and value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/web_transaction_browser_monitor#cookies WebTransactionBrowserMonitor#cookies}
  */
  readonly cookies?: { [key: string]: string };
  /**
  * A Map of Header name and value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/web_transaction_browser_monitor#custom_headers WebTransactionBrowserMonitor#custom_headers}
  */
  readonly customHeaders?: { [key: string]: string };
  /**
  * List of dependent resource IDs. Suppress alert when dependent monitor(s) is down.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/web_transaction_browser_monitor#dependency_resource_ids WebTransactionBrowserMonitor#dependency_resource_ids}
  */
  readonly dependencyResourceIds?: string[];
  /**
  * Name for the monitor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/web_transaction_browser_monitor#display_name WebTransactionBrowserMonitor#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/web_transaction_browser_monitor#id WebTransactionBrowserMonitor#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Enter true or false to Trust the Server SSL Certificate. Default value is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/web_transaction_browser_monitor#ignore_cert_err WebTransactionBrowserMonitor#ignore_cert_err}
  */
  readonly ignoreCertErr?: boolean | cdktf.IResolvable;
  /**
  * IP Type for monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/web_transaction_browser_monitor#ip_type WebTransactionBrowserMonitor#ip_type}
  */
  readonly ipType?: number;
  /**
  * Location profile to be associated with the monitor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/web_transaction_browser_monitor#location_profile_id WebTransactionBrowserMonitor#location_profile_id}
  */
  readonly locationProfileId?: string;
  /**
  * Name of the location profile to be associated with the monitor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/web_transaction_browser_monitor#location_profile_name WebTransactionBrowserMonitor#location_profile_name}
  */
  readonly locationProfileName?: string;
  /**
  * List of monitor groups to which the monitor has to be associated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/web_transaction_browser_monitor#monitor_groups WebTransactionBrowserMonitor#monitor_groups}
  */
  readonly monitorGroups?: string[];
  /**
  * Notification profile to be associated with the monitor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/web_transaction_browser_monitor#notification_profile_id WebTransactionBrowserMonitor#notification_profile_id}
  */
  readonly notificationProfileId?: string;
  /**
  * Name of the notification profile to be associated with the monitor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/web_transaction_browser_monitor#notification_profile_name WebTransactionBrowserMonitor#notification_profile_name}
  */
  readonly notificationProfileName?: string;
  /**
  * A new On Call schedule to be associated with monitors when user group id  is not chosen
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/web_transaction_browser_monitor#on_call_schedule_id WebTransactionBrowserMonitor#on_call_schedule_id}
  */
  readonly onCallScheduleId?: string;
  /**
  * Timeout for page load.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/web_transaction_browser_monitor#page_load_time WebTransactionBrowserMonitor#page_load_time}
  */
  readonly pageLoadTime?: number;
  /**
  * To perform automation or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/web_transaction_browser_monitor#perform_automation WebTransactionBrowserMonitor#perform_automation}
  */
  readonly performAutomation?: boolean | cdktf.IResolvable;
  /**
  * Check for the proxy in the website response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/web_transaction_browser_monitor#proxy_details WebTransactionBrowserMonitor#proxy_details}
  */
  readonly proxyDetails?: { [key: string]: string };
  /**
  * Screen resolution for running the script.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/web_transaction_browser_monitor#resolution WebTransactionBrowserMonitor#resolution}
  */
  readonly resolution?: string;
  /**
  * Recorded transaction script type.(txt , side)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/web_transaction_browser_monitor#script_type WebTransactionBrowserMonitor#script_type}
  */
  readonly scriptType?: string;
  /**
  * Recorded Trasanction script to create a monitor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/web_transaction_browser_monitor#selenium_script WebTransactionBrowserMonitor#selenium_script}
  */
  readonly seleniumScript?: string;
  /**
  * List of tag IDs to be associated to the monitor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/web_transaction_browser_monitor#tag_ids WebTransactionBrowserMonitor#tag_ids}
  */
  readonly tagIds?: string[];
  /**
  * List of tag names to be associated to the monitor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/web_transaction_browser_monitor#tag_names WebTransactionBrowserMonitor#tag_names}
  */
  readonly tagNames?: string[];
  /**
  * Think time between each steps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/web_transaction_browser_monitor#think_time WebTransactionBrowserMonitor#think_time}
  */
  readonly thinkTime?: number;
  /**
  * List of Third Party Service IDs to be associated to the monitor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/web_transaction_browser_monitor#third_party_service_ids WebTransactionBrowserMonitor#third_party_service_ids}
  */
  readonly thirdPartyServiceIds?: string[];
  /**
  * Threshold profile to be associated with the monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/web_transaction_browser_monitor#threshold_profile_id WebTransactionBrowserMonitor#threshold_profile_id}
  */
  readonly thresholdProfileId?: string;
  /**
  * User Agent to be used while monitoring the website.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/web_transaction_browser_monitor#user_agent WebTransactionBrowserMonitor#user_agent}
  */
  readonly userAgent?: string;
  /**
  * List of user groups to be notified when the monitor is down
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/web_transaction_browser_monitor#user_group_ids WebTransactionBrowserMonitor#user_group_ids}
  */
  readonly userGroupIds?: string[];
  /**
  * Name of the user groups to be associated with the monitor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/web_transaction_browser_monitor#user_group_names WebTransactionBrowserMonitor#user_group_names}
  */
  readonly userGroupNames?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/web_transaction_browser_monitor site24x7_web_transaction_browser_monitor}
*/
export class WebTransactionBrowserMonitor extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "site24x7_web_transaction_browser_monitor";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WebTransactionBrowserMonitor resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WebTransactionBrowserMonitor to import
  * @param importFromId The id of the existing WebTransactionBrowserMonitor that should be imported. Refer to the {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/web_transaction_browser_monitor#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WebTransactionBrowserMonitor to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "site24x7_web_transaction_browser_monitor", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/web_transaction_browser_monitor site24x7_web_transaction_browser_monitor} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WebTransactionBrowserMonitorConfig
  */
  public constructor(scope: Construct, id: string, config: WebTransactionBrowserMonitorConfig) {
    super(scope, id, {
      terraformResourceType: 'site24x7_web_transaction_browser_monitor',
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
    this._asyncDcEnabled = config.asyncDcEnabled;
    this._authDetails = config.authDetails;
    this._baseUrl = config.baseUrl;
    this._browserType = config.browserType;
    this._browserVersion = config.browserVersion;
    this._checkFrequency = config.checkFrequency;
    this._cookies = config.cookies;
    this._customHeaders = config.customHeaders;
    this._dependencyResourceIds = config.dependencyResourceIds;
    this._displayName = config.displayName;
    this._id = config.id;
    this._ignoreCertErr = config.ignoreCertErr;
    this._ipType = config.ipType;
    this._locationProfileId = config.locationProfileId;
    this._locationProfileName = config.locationProfileName;
    this._monitorGroups = config.monitorGroups;
    this._notificationProfileId = config.notificationProfileId;
    this._notificationProfileName = config.notificationProfileName;
    this._onCallScheduleId = config.onCallScheduleId;
    this._pageLoadTime = config.pageLoadTime;
    this._performAutomation = config.performAutomation;
    this._proxyDetails = config.proxyDetails;
    this._resolution = config.resolution;
    this._scriptType = config.scriptType;
    this._seleniumScript = config.seleniumScript;
    this._tagIds = config.tagIds;
    this._tagNames = config.tagNames;
    this._thinkTime = config.thinkTime;
    this._thirdPartyServiceIds = config.thirdPartyServiceIds;
    this._thresholdProfileId = config.thresholdProfileId;
    this._userAgent = config.userAgent;
    this._userGroupIds = config.userGroupIds;
    this._userGroupNames = config.userGroupNames;
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

  // async_dc_enabled - computed: false, optional: true, required: false
  private _asyncDcEnabled?: boolean | cdktf.IResolvable; 
  public get asyncDcEnabled() {
    return this.getBooleanAttribute('async_dc_enabled');
  }
  public set asyncDcEnabled(value: boolean | cdktf.IResolvable) {
    this._asyncDcEnabled = value;
  }
  public resetAsyncDcEnabled() {
    this._asyncDcEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asyncDcEnabledInput() {
    return this._asyncDcEnabled;
  }

  // auth_details - computed: false, optional: true, required: false
  private _authDetails?: { [key: string]: string }; 
  public get authDetails() {
    return this.getStringMapAttribute('auth_details');
  }
  public set authDetails(value: { [key: string]: string }) {
    this._authDetails = value;
  }
  public resetAuthDetails() {
    this._authDetails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authDetailsInput() {
    return this._authDetails;
  }

  // base_url - computed: false, optional: false, required: true
  private _baseUrl?: string; 
  public get baseUrl() {
    return this.getStringAttribute('base_url');
  }
  public set baseUrl(value: string) {
    this._baseUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get baseUrlInput() {
    return this._baseUrl;
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

  // cookies - computed: false, optional: true, required: false
  private _cookies?: { [key: string]: string }; 
  public get cookies() {
    return this.getStringMapAttribute('cookies');
  }
  public set cookies(value: { [key: string]: string }) {
    this._cookies = value;
  }
  public resetCookies() {
    this._cookies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookiesInput() {
    return this._cookies;
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

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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

  // ignore_cert_err - computed: false, optional: true, required: false
  private _ignoreCertErr?: boolean | cdktf.IResolvable; 
  public get ignoreCertErr() {
    return this.getBooleanAttribute('ignore_cert_err');
  }
  public set ignoreCertErr(value: boolean | cdktf.IResolvable) {
    this._ignoreCertErr = value;
  }
  public resetIgnoreCertErr() {
    this._ignoreCertErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreCertErrInput() {
    return this._ignoreCertErr;
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

  // on_call_schedule_id - computed: false, optional: true, required: false
  private _onCallScheduleId?: string; 
  public get onCallScheduleId() {
    return this.getStringAttribute('on_call_schedule_id');
  }
  public set onCallScheduleId(value: string) {
    this._onCallScheduleId = value;
  }
  public resetOnCallScheduleId() {
    this._onCallScheduleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onCallScheduleIdInput() {
    return this._onCallScheduleId;
  }

  // page_load_time - computed: false, optional: true, required: false
  private _pageLoadTime?: number; 
  public get pageLoadTime() {
    return this.getNumberAttribute('page_load_time');
  }
  public set pageLoadTime(value: number) {
    this._pageLoadTime = value;
  }
  public resetPageLoadTime() {
    this._pageLoadTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pageLoadTimeInput() {
    return this._pageLoadTime;
  }

  // perform_automation - computed: false, optional: true, required: false
  private _performAutomation?: boolean | cdktf.IResolvable; 
  public get performAutomation() {
    return this.getBooleanAttribute('perform_automation');
  }
  public set performAutomation(value: boolean | cdktf.IResolvable) {
    this._performAutomation = value;
  }
  public resetPerformAutomation() {
    this._performAutomation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get performAutomationInput() {
    return this._performAutomation;
  }

  // proxy_details - computed: false, optional: true, required: false
  private _proxyDetails?: { [key: string]: string }; 
  public get proxyDetails() {
    return this.getStringMapAttribute('proxy_details');
  }
  public set proxyDetails(value: { [key: string]: string }) {
    this._proxyDetails = value;
  }
  public resetProxyDetails() {
    this._proxyDetails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyDetailsInput() {
    return this._proxyDetails;
  }

  // resolution - computed: false, optional: true, required: false
  private _resolution?: string; 
  public get resolution() {
    return this.getStringAttribute('resolution');
  }
  public set resolution(value: string) {
    this._resolution = value;
  }
  public resetResolution() {
    this._resolution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resolutionInput() {
    return this._resolution;
  }

  // script_type - computed: false, optional: true, required: false
  private _scriptType?: string; 
  public get scriptType() {
    return this.getStringAttribute('script_type');
  }
  public set scriptType(value: string) {
    this._scriptType = value;
  }
  public resetScriptType() {
    this._scriptType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptTypeInput() {
    return this._scriptType;
  }

  // selenium_script - computed: false, optional: true, required: false
  private _seleniumScript?: string; 
  public get seleniumScript() {
    return this.getStringAttribute('selenium_script');
  }
  public set seleniumScript(value: string) {
    this._seleniumScript = value;
  }
  public resetSeleniumScript() {
    this._seleniumScript = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seleniumScriptInput() {
    return this._seleniumScript;
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

  // think_time - computed: false, optional: true, required: false
  private _thinkTime?: number; 
  public get thinkTime() {
    return this.getNumberAttribute('think_time');
  }
  public set thinkTime(value: number) {
    this._thinkTime = value;
  }
  public resetThinkTime() {
    this._thinkTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thinkTimeInput() {
    return this._thinkTime;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      actions: cdktf.hashMapper(cdktf.stringToTerraform)(this._actions),
      async_dc_enabled: cdktf.booleanToTerraform(this._asyncDcEnabled),
      auth_details: cdktf.hashMapper(cdktf.stringToTerraform)(this._authDetails),
      base_url: cdktf.stringToTerraform(this._baseUrl),
      browser_type: cdktf.numberToTerraform(this._browserType),
      browser_version: cdktf.numberToTerraform(this._browserVersion),
      check_frequency: cdktf.stringToTerraform(this._checkFrequency),
      cookies: cdktf.hashMapper(cdktf.stringToTerraform)(this._cookies),
      custom_headers: cdktf.hashMapper(cdktf.stringToTerraform)(this._customHeaders),
      dependency_resource_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dependencyResourceIds),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      ignore_cert_err: cdktf.booleanToTerraform(this._ignoreCertErr),
      ip_type: cdktf.numberToTerraform(this._ipType),
      location_profile_id: cdktf.stringToTerraform(this._locationProfileId),
      location_profile_name: cdktf.stringToTerraform(this._locationProfileName),
      monitor_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._monitorGroups),
      notification_profile_id: cdktf.stringToTerraform(this._notificationProfileId),
      notification_profile_name: cdktf.stringToTerraform(this._notificationProfileName),
      on_call_schedule_id: cdktf.stringToTerraform(this._onCallScheduleId),
      page_load_time: cdktf.numberToTerraform(this._pageLoadTime),
      perform_automation: cdktf.booleanToTerraform(this._performAutomation),
      proxy_details: cdktf.hashMapper(cdktf.stringToTerraform)(this._proxyDetails),
      resolution: cdktf.stringToTerraform(this._resolution),
      script_type: cdktf.stringToTerraform(this._scriptType),
      selenium_script: cdktf.stringToTerraform(this._seleniumScript),
      tag_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tagIds),
      tag_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tagNames),
      think_time: cdktf.numberToTerraform(this._thinkTime),
      third_party_service_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._thirdPartyServiceIds),
      threshold_profile_id: cdktf.stringToTerraform(this._thresholdProfileId),
      user_agent: cdktf.stringToTerraform(this._userAgent),
      user_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._userGroupIds),
      user_group_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._userGroupNames),
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
      async_dc_enabled: {
        value: cdktf.booleanToHclTerraform(this._asyncDcEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auth_details: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._authDetails),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      base_url: {
        value: cdktf.stringToHclTerraform(this._baseUrl),
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
      cookies: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._cookies),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
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
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
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
      ignore_cert_err: {
        value: cdktf.booleanToHclTerraform(this._ignoreCertErr),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ip_type: {
        value: cdktf.numberToHclTerraform(this._ipType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      on_call_schedule_id: {
        value: cdktf.stringToHclTerraform(this._onCallScheduleId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      page_load_time: {
        value: cdktf.numberToHclTerraform(this._pageLoadTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      perform_automation: {
        value: cdktf.booleanToHclTerraform(this._performAutomation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      proxy_details: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._proxyDetails),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      resolution: {
        value: cdktf.stringToHclTerraform(this._resolution),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      script_type: {
        value: cdktf.stringToHclTerraform(this._scriptType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      selenium_script: {
        value: cdktf.stringToHclTerraform(this._seleniumScript),
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
      think_time: {
        value: cdktf.numberToHclTerraform(this._thinkTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
