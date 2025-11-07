// https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/soap_monitor
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SoapMonitorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Action to be performed on monitor status changes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/soap_monitor#actions SoapMonitor#actions}
  */
  readonly actions?: { [key: string]: string };
  /**
  * Interval at which your website has to be monitored. Default value is 5 minute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/soap_monitor#check_frequency SoapMonitor#check_frequency}
  */
  readonly checkFrequency?: string;
  /**
  * Credential Profile to associate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/soap_monitor#credential_profile_id SoapMonitor#credential_profile_id}
  */
  readonly credentialProfileId?: string;
  /**
  * List of dependent resource IDs. Suppress alert when dependent monitor(s) is down.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/soap_monitor#dependency_resource_ids SoapMonitor#dependency_resource_ids}
  */
  readonly dependencyResourceIds?: string[];
  /**
  * Name for the monitor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/soap_monitor#display_name SoapMonitor#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/soap_monitor#http_method SoapMonitor#http_method}
  */
  readonly httpMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/soap_monitor#http_protocol SoapMonitor#http_protocol}
  */
  readonly httpProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/soap_monitor#id SoapMonitor#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Location profile to be associated with the monitor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/soap_monitor#location_profile_id SoapMonitor#location_profile_id}
  */
  readonly locationProfileId?: string;
  /**
  * Name of the location profile to be associated with the monitor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/soap_monitor#location_profile_name SoapMonitor#location_profile_name}
  */
  readonly locationProfileName?: string;
  /**
  * List of monitor groups to which the monitor has to be associated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/soap_monitor#monitor_groups SoapMonitor#monitor_groups}
  */
  readonly monitorGroups?: string[];
  /**
  * Notification profile to be associated with the monitor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/soap_monitor#notification_profile_id SoapMonitor#notification_profile_id}
  */
  readonly notificationProfileId?: string;
  /**
  * Name of the notification profile to be associated with the monitor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/soap_monitor#notification_profile_name SoapMonitor#notification_profile_name}
  */
  readonly notificationProfileName?: string;
  /**
  * A new On Call schedule to be associated with monitors when user group id  is not chosen
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/soap_monitor#on_call_schedule_id SoapMonitor#on_call_schedule_id}
  */
  readonly onCallScheduleId?: string;
  /**
  * To perform automation or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/soap_monitor#perform_automation SoapMonitor#perform_automation}
  */
  readonly performAutomation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/soap_monitor#request_content_type SoapMonitor#request_content_type}
  */
  readonly requestContentType?: string;
  /**
  * Request params to given for the soap monitor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/soap_monitor#request_param SoapMonitor#request_param}
  */
  readonly requestParam: string;
  /**
  * A Map of respone header name and value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/soap_monitor#response_headers SoapMonitor#response_headers}
  */
  readonly responseHeaders?: { [key: string]: string };
  /**
  * Alert type constant. Can be either 0 or 2. '0' denotes Down and '2' denotes Trouble
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/soap_monitor#response_headers_severity SoapMonitor#response_headers_severity}
  */
  readonly responseHeadersSeverity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/soap_monitor#response_type SoapMonitor#response_type}
  */
  readonly responseType?: string;
  /**
  * A Map of respone header name and value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/soap_monitor#soap_attributes SoapMonitor#soap_attributes}
  */
  readonly soapAttributes?: { [key: string]: string };
  /**
  * Registered domain name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/soap_monitor#soap_attributes_severity SoapMonitor#soap_attributes_severity}
  */
  readonly soapAttributesSeverity?: number;
  /**
  * SSL Protocol to be associated with the monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/soap_monitor#ssl_protocol SoapMonitor#ssl_protocol}
  */
  readonly sslProtocol?: string;
  /**
  * List of tag IDs to be associated to the monitor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/soap_monitor#tag_ids SoapMonitor#tag_ids}
  */
  readonly tagIds?: string[];
  /**
  * List of tag names to be associated to the monitor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/soap_monitor#tag_names SoapMonitor#tag_names}
  */
  readonly tagNames?: string[];
  /**
  * List of Third Party Service IDs to be associated to the monitor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/soap_monitor#third_party_services SoapMonitor#third_party_services}
  */
  readonly thirdPartyServices?: string[];
  /**
  * Threshold profile to be associated with the monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/soap_monitor#threshold_profile_id SoapMonitor#threshold_profile_id}
  */
  readonly thresholdProfileId?: string;
  /**
  * Timeout for connecting to website. Default value is 10. Range 1 - 45
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/soap_monitor#timeout SoapMonitor#timeout}
  */
  readonly timeout?: number;
  /**
  * Provide a comma-separated list of HTTP status codes that indicate a successful response. You can specify individual status codes, as well as ranges separated with a colon.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/soap_monitor#up_status_codes SoapMonitor#up_status_codes}
  */
  readonly upStatusCodes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/soap_monitor#use_alpn SoapMonitor#use_alpn}
  */
  readonly useAlpn?: boolean | cdktf.IResolvable;
  /**
  * Monitoring is performed over IPv6 from supported locations. IPv6 locations do not fall back to IPv4 on failure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/soap_monitor#use_ipv6 SoapMonitor#use_ipv6}
  */
  readonly useIpv6?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/soap_monitor#use_name_server SoapMonitor#use_name_server}
  */
  readonly useNameServer?: boolean | cdktf.IResolvable;
  /**
  * List of user groups to be notified when the monitor is down
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/soap_monitor#user_group_ids SoapMonitor#user_group_ids}
  */
  readonly userGroupIds?: string[];
  /**
  * Name of the user groups to be associated with the monitor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/soap_monitor#user_group_names SoapMonitor#user_group_names}
  */
  readonly userGroupNames?: string[];
  /**
  * Registered domain name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/soap_monitor#website SoapMonitor#website}
  */
  readonly website: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/soap_monitor site24x7_soap_monitor}
*/
export class SoapMonitor extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "site24x7_soap_monitor";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SoapMonitor resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SoapMonitor to import
  * @param importFromId The id of the existing SoapMonitor that should be imported. Refer to the {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/soap_monitor#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SoapMonitor to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "site24x7_soap_monitor", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/soap_monitor site24x7_soap_monitor} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SoapMonitorConfig
  */
  public constructor(scope: Construct, id: string, config: SoapMonitorConfig) {
    super(scope, id, {
      terraformResourceType: 'site24x7_soap_monitor',
      terraformGeneratorMetadata: {
        providerName: 'site24x7',
        providerVersion: '2.0.3'
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
    this._checkFrequency = config.checkFrequency;
    this._credentialProfileId = config.credentialProfileId;
    this._dependencyResourceIds = config.dependencyResourceIds;
    this._displayName = config.displayName;
    this._httpMethod = config.httpMethod;
    this._httpProtocol = config.httpProtocol;
    this._id = config.id;
    this._locationProfileId = config.locationProfileId;
    this._locationProfileName = config.locationProfileName;
    this._monitorGroups = config.monitorGroups;
    this._notificationProfileId = config.notificationProfileId;
    this._notificationProfileName = config.notificationProfileName;
    this._onCallScheduleId = config.onCallScheduleId;
    this._performAutomation = config.performAutomation;
    this._requestContentType = config.requestContentType;
    this._requestParam = config.requestParam;
    this._responseHeaders = config.responseHeaders;
    this._responseHeadersSeverity = config.responseHeadersSeverity;
    this._responseType = config.responseType;
    this._soapAttributes = config.soapAttributes;
    this._soapAttributesSeverity = config.soapAttributesSeverity;
    this._sslProtocol = config.sslProtocol;
    this._tagIds = config.tagIds;
    this._tagNames = config.tagNames;
    this._thirdPartyServices = config.thirdPartyServices;
    this._thresholdProfileId = config.thresholdProfileId;
    this._timeout = config.timeout;
    this._upStatusCodes = config.upStatusCodes;
    this._useAlpn = config.useAlpn;
    this._useIpv6 = config.useIpv6;
    this._useNameServer = config.useNameServer;
    this._userGroupIds = config.userGroupIds;
    this._userGroupNames = config.userGroupNames;
    this._website = config.website;
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

  // http_protocol - computed: false, optional: true, required: false
  private _httpProtocol?: string; 
  public get httpProtocol() {
    return this.getStringAttribute('http_protocol');
  }
  public set httpProtocol(value: string) {
    this._httpProtocol = value;
  }
  public resetHttpProtocol() {
    this._httpProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpProtocolInput() {
    return this._httpProtocol;
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

  // request_content_type - computed: false, optional: true, required: false
  private _requestContentType?: string; 
  public get requestContentType() {
    return this.getStringAttribute('request_content_type');
  }
  public set requestContentType(value: string) {
    this._requestContentType = value;
  }
  public resetRequestContentType() {
    this._requestContentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestContentTypeInput() {
    return this._requestContentType;
  }

  // request_param - computed: false, optional: false, required: true
  private _requestParam?: string; 
  public get requestParam() {
    return this.getStringAttribute('request_param');
  }
  public set requestParam(value: string) {
    this._requestParam = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requestParamInput() {
    return this._requestParam;
  }

  // response_headers - computed: false, optional: true, required: false
  private _responseHeaders?: { [key: string]: string }; 
  public get responseHeaders() {
    return this.getStringMapAttribute('response_headers');
  }
  public set responseHeaders(value: { [key: string]: string }) {
    this._responseHeaders = value;
  }
  public resetResponseHeaders() {
    this._responseHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseHeadersInput() {
    return this._responseHeaders;
  }

  // response_headers_severity - computed: false, optional: true, required: false
  private _responseHeadersSeverity?: number; 
  public get responseHeadersSeverity() {
    return this.getNumberAttribute('response_headers_severity');
  }
  public set responseHeadersSeverity(value: number) {
    this._responseHeadersSeverity = value;
  }
  public resetResponseHeadersSeverity() {
    this._responseHeadersSeverity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseHeadersSeverityInput() {
    return this._responseHeadersSeverity;
  }

  // response_type - computed: false, optional: true, required: false
  private _responseType?: string; 
  public get responseType() {
    return this.getStringAttribute('response_type');
  }
  public set responseType(value: string) {
    this._responseType = value;
  }
  public resetResponseType() {
    this._responseType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseTypeInput() {
    return this._responseType;
  }

  // soap_attributes - computed: false, optional: true, required: false
  private _soapAttributes?: { [key: string]: string }; 
  public get soapAttributes() {
    return this.getStringMapAttribute('soap_attributes');
  }
  public set soapAttributes(value: { [key: string]: string }) {
    this._soapAttributes = value;
  }
  public resetSoapAttributes() {
    this._soapAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get soapAttributesInput() {
    return this._soapAttributes;
  }

  // soap_attributes_severity - computed: false, optional: true, required: false
  private _soapAttributesSeverity?: number; 
  public get soapAttributesSeverity() {
    return this.getNumberAttribute('soap_attributes_severity');
  }
  public set soapAttributesSeverity(value: number) {
    this._soapAttributesSeverity = value;
  }
  public resetSoapAttributesSeverity() {
    this._soapAttributesSeverity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get soapAttributesSeverityInput() {
    return this._soapAttributesSeverity;
  }

  // ssl_protocol - computed: false, optional: true, required: false
  private _sslProtocol?: string; 
  public get sslProtocol() {
    return this.getStringAttribute('ssl_protocol');
  }
  public set sslProtocol(value: string) {
    this._sslProtocol = value;
  }
  public resetSslProtocol() {
    this._sslProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslProtocolInput() {
    return this._sslProtocol;
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

  // third_party_services - computed: false, optional: true, required: false
  private _thirdPartyServices?: string[]; 
  public get thirdPartyServices() {
    return this.getListAttribute('third_party_services');
  }
  public set thirdPartyServices(value: string[]) {
    this._thirdPartyServices = value;
  }
  public resetThirdPartyServices() {
    this._thirdPartyServices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thirdPartyServicesInput() {
    return this._thirdPartyServices;
  }

  // threshold_profile_id - computed: false, optional: true, required: false
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

  // use_alpn - computed: false, optional: true, required: false
  private _useAlpn?: boolean | cdktf.IResolvable; 
  public get useAlpn() {
    return this.getBooleanAttribute('use_alpn');
  }
  public set useAlpn(value: boolean | cdktf.IResolvable) {
    this._useAlpn = value;
  }
  public resetUseAlpn() {
    this._useAlpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useAlpnInput() {
    return this._useAlpn;
  }

  // use_ipv6 - computed: false, optional: true, required: false
  private _useIpv6?: boolean | cdktf.IResolvable; 
  public get useIpv6() {
    return this.getBooleanAttribute('use_ipv6');
  }
  public set useIpv6(value: boolean | cdktf.IResolvable) {
    this._useIpv6 = value;
  }
  public resetUseIpv6() {
    this._useIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useIpv6Input() {
    return this._useIpv6;
  }

  // use_name_server - computed: false, optional: true, required: false
  private _useNameServer?: boolean | cdktf.IResolvable; 
  public get useNameServer() {
    return this.getBooleanAttribute('use_name_server');
  }
  public set useNameServer(value: boolean | cdktf.IResolvable) {
    this._useNameServer = value;
  }
  public resetUseNameServer() {
    this._useNameServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useNameServerInput() {
    return this._useNameServer;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      actions: cdktf.hashMapper(cdktf.stringToTerraform)(this._actions),
      check_frequency: cdktf.stringToTerraform(this._checkFrequency),
      credential_profile_id: cdktf.stringToTerraform(this._credentialProfileId),
      dependency_resource_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dependencyResourceIds),
      display_name: cdktf.stringToTerraform(this._displayName),
      http_method: cdktf.stringToTerraform(this._httpMethod),
      http_protocol: cdktf.stringToTerraform(this._httpProtocol),
      id: cdktf.stringToTerraform(this._id),
      location_profile_id: cdktf.stringToTerraform(this._locationProfileId),
      location_profile_name: cdktf.stringToTerraform(this._locationProfileName),
      monitor_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._monitorGroups),
      notification_profile_id: cdktf.stringToTerraform(this._notificationProfileId),
      notification_profile_name: cdktf.stringToTerraform(this._notificationProfileName),
      on_call_schedule_id: cdktf.stringToTerraform(this._onCallScheduleId),
      perform_automation: cdktf.booleanToTerraform(this._performAutomation),
      request_content_type: cdktf.stringToTerraform(this._requestContentType),
      request_param: cdktf.stringToTerraform(this._requestParam),
      response_headers: cdktf.hashMapper(cdktf.stringToTerraform)(this._responseHeaders),
      response_headers_severity: cdktf.numberToTerraform(this._responseHeadersSeverity),
      response_type: cdktf.stringToTerraform(this._responseType),
      soap_attributes: cdktf.hashMapper(cdktf.stringToTerraform)(this._soapAttributes),
      soap_attributes_severity: cdktf.numberToTerraform(this._soapAttributesSeverity),
      ssl_protocol: cdktf.stringToTerraform(this._sslProtocol),
      tag_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tagIds),
      tag_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tagNames),
      third_party_services: cdktf.listMapper(cdktf.stringToTerraform, false)(this._thirdPartyServices),
      threshold_profile_id: cdktf.stringToTerraform(this._thresholdProfileId),
      timeout: cdktf.numberToTerraform(this._timeout),
      up_status_codes: cdktf.stringToTerraform(this._upStatusCodes),
      use_alpn: cdktf.booleanToTerraform(this._useAlpn),
      use_ipv6: cdktf.booleanToTerraform(this._useIpv6),
      use_name_server: cdktf.booleanToTerraform(this._useNameServer),
      user_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._userGroupIds),
      user_group_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._userGroupNames),
      website: cdktf.stringToTerraform(this._website),
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
      http_method: {
        value: cdktf.stringToHclTerraform(this._httpMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_protocol: {
        value: cdktf.stringToHclTerraform(this._httpProtocol),
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
      perform_automation: {
        value: cdktf.booleanToHclTerraform(this._performAutomation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      request_content_type: {
        value: cdktf.stringToHclTerraform(this._requestContentType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      request_param: {
        value: cdktf.stringToHclTerraform(this._requestParam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      response_headers: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._responseHeaders),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      response_headers_severity: {
        value: cdktf.numberToHclTerraform(this._responseHeadersSeverity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      response_type: {
        value: cdktf.stringToHclTerraform(this._responseType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      soap_attributes: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._soapAttributes),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      soap_attributes_severity: {
        value: cdktf.numberToHclTerraform(this._soapAttributesSeverity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ssl_protocol: {
        value: cdktf.stringToHclTerraform(this._sslProtocol),
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
      third_party_services: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._thirdPartyServices),
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
      up_status_codes: {
        value: cdktf.stringToHclTerraform(this._upStatusCodes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_alpn: {
        value: cdktf.booleanToHclTerraform(this._useAlpn),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_ipv6: {
        value: cdktf.booleanToHclTerraform(this._useIpv6),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_name_server: {
        value: cdktf.booleanToHclTerraform(this._useNameServer),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
