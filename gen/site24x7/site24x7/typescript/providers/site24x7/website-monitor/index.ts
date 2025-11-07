// https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/website_monitor
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WebsiteMonitorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Action to be performed on monitor IT Automation templates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/website_monitor#actions WebsiteMonitor#actions}
  */
  readonly actions?: { [key: string]: string };
  /**
  * Authentication method to access the website. Default value is 'B'. 'B' denotes Basic/NTLM. 'O' denotes OAuth 2 and 'W' denotes Web Token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/website_monitor#auth_method WebsiteMonitor#auth_method}
  */
  readonly authMethod?: string;
  /**
  * Authentication password to access the website.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/website_monitor#auth_pass WebsiteMonitor#auth_pass}
  */
  readonly authPass?: string;
  /**
  * Authentication user name to access the website.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/website_monitor#auth_user WebsiteMonitor#auth_user}
  */
  readonly authUser?: string;
  /**
  * Interval at which your website has to be monitored. Default value is 1 minute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/website_monitor#check_frequency WebsiteMonitor#check_frequency}
  */
  readonly checkFrequency?: string;
  /**
  * Password of the client certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/website_monitor#client_certificate_password WebsiteMonitor#client_certificate_password}
  */
  readonly clientCertificatePassword?: string;
  /**
  * Credential Profile to associate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/website_monitor#credential_profile_id WebsiteMonitor#credential_profile_id}
  */
  readonly credentialProfileId?: string;
  /**
  * List of dependent resource IDs. Suppress alert when dependent monitor(s) is down.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/website_monitor#dependency_resource_ids WebsiteMonitor#dependency_resource_ids}
  */
  readonly dependencyResourceIds?: string[];
  /**
  * Display Name for the monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/website_monitor#display_name WebsiteMonitor#display_name}
  */
  readonly displayName: string;
  /**
  * Enter true to follow up to 10 HTTP redirection responses or false not to follow HTTP redirections. Default value is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/website_monitor#follow_http_redirection WebsiteMonitor#follow_http_redirection}
  */
  readonly followHttpRedirection?: boolean | cdktf.IResolvable;
  /**
  * Provide the domain name or IP addresses to be used for monitoring instead of using the IPs resolved from the given URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/website_monitor#forced_ips WebsiteMonitor#forced_ips}
  */
  readonly forcedIps?: string;
  /**
  * To Edit the existing secondary protocol resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/website_monitor#hidden_mon_added WebsiteMonitor#hidden_mon_added}
  */
  readonly hiddenMonAdded?: number;
  /**
  * HTTP Method to be used for accessing the website. Default value is 'G'. 'G' denotes GET, 'P' denotes POST and 'H' denotes HEAD. PUT, PATCH and DELETE are not supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/website_monitor#http_method WebsiteMonitor#http_method}
  */
  readonly httpMethod?: string;
  /**
  * Specify the version of the HTTP protocol. Default value is H1.1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/website_monitor#http_protocol WebsiteMonitor#http_protocol}
  */
  readonly httpProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/website_monitor#id WebsiteMonitor#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Enter true or false to Trust the Server SSL Certificate. Default value is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/website_monitor#ignore_cert_err WebsiteMonitor#ignore_cert_err}
  */
  readonly ignoreCertErr?: boolean | cdktf.IResolvable;
  /**
  * Monitoring is performed over the selected internet protocol. 0 - Monitoring is performed over IPv4 from supported locations. 1 - Monitoring is performed over IPv6 from supported locations. 2 - IPv4 or IPv6 option will help in flexibly switching to the protocol that is supported in a particular location if one protocol fails. 3 - IPv4 and IPv6 will create two connections for each protocol. Default value is 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/website_monitor#ip_type WebsiteMonitor#ip_type}
  */
  readonly ipType?: number;
  /**
  * Location profile to be associated with the monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/website_monitor#location_profile_id WebsiteMonitor#location_profile_id}
  */
  readonly locationProfileId?: string;
  /**
  * Name of the location profile to be associated with the monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/website_monitor#location_profile_name WebsiteMonitor#location_profile_name}
  */
  readonly locationProfileName?: string;
  /**
  * Perform case sensitive keyword search or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/website_monitor#match_case WebsiteMonitor#match_case}
  */
  readonly matchCase?: boolean | cdktf.IResolvable;
  /**
  * Severity with which alert has to raised when the matching regex is found in the website response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/website_monitor#match_regex_severity WebsiteMonitor#match_regex_severity}
  */
  readonly matchRegexSeverity?: number;
  /**
  * Match the regular expression in the website response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/website_monitor#match_regex_value WebsiteMonitor#match_regex_value}
  */
  readonly matchRegexValue?: string;
  /**
  * Severity with which alert has to raised when the matching keyword is found in the website response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/website_monitor#matching_keyword_severity WebsiteMonitor#matching_keyword_severity}
  */
  readonly matchingKeywordSeverity?: number;
  /**
  * Check for the keyword in the website response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/website_monitor#matching_keyword_value WebsiteMonitor#matching_keyword_value}
  */
  readonly matchingKeywordValue?: string;
  /**
  * List of monitor groups to which the monitor has to be associated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/website_monitor#monitor_groups WebsiteMonitor#monitor_groups}
  */
  readonly monitorGroups?: string[];
  /**
  * Notification profile to be associated with the monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/website_monitor#notification_profile_id WebsiteMonitor#notification_profile_id}
  */
  readonly notificationProfileId?: string;
  /**
  * Name of the notification profile to be associated with the monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/website_monitor#notification_profile_name WebsiteMonitor#notification_profile_name}
  */
  readonly notificationProfileName?: string;
  /**
  * Choose the primary internet protocol for the resources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/website_monitor#primary_protocol WebsiteMonitor#primary_protocol}
  */
  readonly primaryProtocol?: number;
  /**
  * Provide the content to be passed in the request body while accessing the website.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/website_monitor#request_body WebsiteMonitor#request_body}
  */
  readonly requestBody?: string;
  /**
  * Provide content type for request params when http_method is 'P'. 'J' denotes JSON, 'T' denotes TEXT, 'X' denotes XML and 'F' denotes FORM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/website_monitor#request_content_type WebsiteMonitor#request_content_type}
  */
  readonly requestContentType?: string;
  /**
  * A Map of request header name and value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/website_monitor#request_headers WebsiteMonitor#request_headers}
  */
  readonly requestHeaders?: { [key: string]: string };
  /**
  * A Map of respone header name and value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/website_monitor#response_headers WebsiteMonitor#response_headers}
  */
  readonly responseHeaders?: { [key: string]: string };
  /**
  * Alert type constant. Can be either 0 or 2. '0' denotes Down and '2' denotes Trouble
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/website_monitor#response_headers_severity WebsiteMonitor#response_headers_severity}
  */
  readonly responseHeadersSeverity?: number;
  /**
  * Configure the change for the secondary resource for which you want to get notified
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/website_monitor#secondary_protocol_severity WebsiteMonitor#secondary_protocol_severity}
  */
  readonly secondaryProtocolSeverity?: number;
  /**
  * Specify the version of the SSL protocol. If you are not sure about the version, use Auto.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/website_monitor#ssl_protocol WebsiteMonitor#ssl_protocol}
  */
  readonly sslProtocol?: string;
  /**
  * Set the state of the monitor, 0 for enabled, 5 for suspended.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/website_monitor#state WebsiteMonitor#state}
  */
  readonly state?: number;
  /**
  * List of tag IDs to be associated to the monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/website_monitor#tag_ids WebsiteMonitor#tag_ids}
  */
  readonly tagIds?: string[];
  /**
  * List of tag names to be associated to the monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/website_monitor#tag_names WebsiteMonitor#tag_names}
  */
  readonly tagNames?: string[];
  /**
  * List of Third Party Service IDs to be associated to the monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/website_monitor#third_party_service_ids WebsiteMonitor#third_party_service_ids}
  */
  readonly thirdPartyServiceIds?: string[];
  /**
  * Threshold profile to be associated with the monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/website_monitor#threshold_profile_id WebsiteMonitor#threshold_profile_id}
  */
  readonly thresholdProfileId?: string;
  /**
  * Timeout for connecting to website. Default value is 10. Range 1 - 45.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/website_monitor#timeout WebsiteMonitor#timeout}
  */
  readonly timeout?: number;
  /**
  * Severity with which alert has to raised when the keyword is not present in the website response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/website_monitor#unmatching_keyword_severity WebsiteMonitor#unmatching_keyword_severity}
  */
  readonly unmatchingKeywordSeverity?: number;
  /**
  * Check for the absence of the keyword in the website response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/website_monitor#unmatching_keyword_value WebsiteMonitor#unmatching_keyword_value}
  */
  readonly unmatchingKeywordValue?: string;
  /**
  * Provide a comma-separated list of HTTP status codes that indicate a successful response. You can specify individual status codes, as well as ranges separated with a colon.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/website_monitor#up_status_codes WebsiteMonitor#up_status_codes}
  */
  readonly upStatusCodes?: string;
  /**
  * Enable ALPN to send supported protocols as part of the TLS handshake.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/website_monitor#use_alpn WebsiteMonitor#use_alpn}
  */
  readonly useAlpn?: boolean | cdktf.IResolvable;
  /**
  * Resolve the IP address using Domain Name Server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/website_monitor#use_name_server WebsiteMonitor#use_name_server}
  */
  readonly useNameServer?: boolean | cdktf.IResolvable;
  /**
  * User Agent to be used while monitoring the website.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/website_monitor#user_agent WebsiteMonitor#user_agent}
  */
  readonly userAgent?: string;
  /**
  * List of user groups to be notified when the monitor is down.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/website_monitor#user_group_ids WebsiteMonitor#user_group_ids}
  */
  readonly userGroupIds?: string[];
  /**
  * Name of the user groups to be associated with the monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/website_monitor#user_group_names WebsiteMonitor#user_group_names}
  */
  readonly userGroupNames?: string[];
  /**
  * Website address to monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/website_monitor#website WebsiteMonitor#website}
  */
  readonly website: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/website_monitor site24x7_website_monitor}
*/
export class WebsiteMonitor extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "site24x7_website_monitor";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WebsiteMonitor resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WebsiteMonitor to import
  * @param importFromId The id of the existing WebsiteMonitor that should be imported. Refer to the {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/website_monitor#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WebsiteMonitor to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "site24x7_website_monitor", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/website_monitor site24x7_website_monitor} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WebsiteMonitorConfig
  */
  public constructor(scope: Construct, id: string, config: WebsiteMonitorConfig) {
    super(scope, id, {
      terraformResourceType: 'site24x7_website_monitor',
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
    this._authMethod = config.authMethod;
    this._authPass = config.authPass;
    this._authUser = config.authUser;
    this._checkFrequency = config.checkFrequency;
    this._clientCertificatePassword = config.clientCertificatePassword;
    this._credentialProfileId = config.credentialProfileId;
    this._dependencyResourceIds = config.dependencyResourceIds;
    this._displayName = config.displayName;
    this._followHttpRedirection = config.followHttpRedirection;
    this._forcedIps = config.forcedIps;
    this._hiddenMonAdded = config.hiddenMonAdded;
    this._httpMethod = config.httpMethod;
    this._httpProtocol = config.httpProtocol;
    this._id = config.id;
    this._ignoreCertErr = config.ignoreCertErr;
    this._ipType = config.ipType;
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
    this._primaryProtocol = config.primaryProtocol;
    this._requestBody = config.requestBody;
    this._requestContentType = config.requestContentType;
    this._requestHeaders = config.requestHeaders;
    this._responseHeaders = config.responseHeaders;
    this._responseHeadersSeverity = config.responseHeadersSeverity;
    this._secondaryProtocolSeverity = config.secondaryProtocolSeverity;
    this._sslProtocol = config.sslProtocol;
    this._state = config.state;
    this._tagIds = config.tagIds;
    this._tagNames = config.tagNames;
    this._thirdPartyServiceIds = config.thirdPartyServiceIds;
    this._thresholdProfileId = config.thresholdProfileId;
    this._timeout = config.timeout;
    this._unmatchingKeywordSeverity = config.unmatchingKeywordSeverity;
    this._unmatchingKeywordValue = config.unmatchingKeywordValue;
    this._upStatusCodes = config.upStatusCodes;
    this._useAlpn = config.useAlpn;
    this._useNameServer = config.useNameServer;
    this._userAgent = config.userAgent;
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

  // auth_method - computed: false, optional: true, required: false
  private _authMethod?: string; 
  public get authMethod() {
    return this.getStringAttribute('auth_method');
  }
  public set authMethod(value: string) {
    this._authMethod = value;
  }
  public resetAuthMethod() {
    this._authMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authMethodInput() {
    return this._authMethod;
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

  // client_certificate_password - computed: false, optional: true, required: false
  private _clientCertificatePassword?: string; 
  public get clientCertificatePassword() {
    return this.getStringAttribute('client_certificate_password');
  }
  public set clientCertificatePassword(value: string) {
    this._clientCertificatePassword = value;
  }
  public resetClientCertificatePassword() {
    this._clientCertificatePassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificatePasswordInput() {
    return this._clientCertificatePassword;
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

  // follow_http_redirection - computed: false, optional: true, required: false
  private _followHttpRedirection?: boolean | cdktf.IResolvable; 
  public get followHttpRedirection() {
    return this.getBooleanAttribute('follow_http_redirection');
  }
  public set followHttpRedirection(value: boolean | cdktf.IResolvable) {
    this._followHttpRedirection = value;
  }
  public resetFollowHttpRedirection() {
    this._followHttpRedirection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get followHttpRedirectionInput() {
    return this._followHttpRedirection;
  }

  // forced_ips - computed: false, optional: true, required: false
  private _forcedIps?: string; 
  public get forcedIps() {
    return this.getStringAttribute('forced_ips');
  }
  public set forcedIps(value: string) {
    this._forcedIps = value;
  }
  public resetForcedIps() {
    this._forcedIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forcedIpsInput() {
    return this._forcedIps;
  }

  // hidden_mon_added - computed: false, optional: true, required: false
  private _hiddenMonAdded?: number; 
  public get hiddenMonAdded() {
    return this.getNumberAttribute('hidden_mon_added');
  }
  public set hiddenMonAdded(value: number) {
    this._hiddenMonAdded = value;
  }
  public resetHiddenMonAdded() {
    this._hiddenMonAdded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hiddenMonAddedInput() {
    return this._hiddenMonAdded;
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
    return cdktf.Fn.tolist(this.getListAttribute('monitor_groups'));
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

  // primary_protocol - computed: false, optional: true, required: false
  private _primaryProtocol?: number; 
  public get primaryProtocol() {
    return this.getNumberAttribute('primary_protocol');
  }
  public set primaryProtocol(value: number) {
    this._primaryProtocol = value;
  }
  public resetPrimaryProtocol() {
    this._primaryProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryProtocolInput() {
    return this._primaryProtocol;
  }

  // request_body - computed: false, optional: true, required: false
  private _requestBody?: string; 
  public get requestBody() {
    return this.getStringAttribute('request_body');
  }
  public set requestBody(value: string) {
    this._requestBody = value;
  }
  public resetRequestBody() {
    this._requestBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestBodyInput() {
    return this._requestBody;
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

  // request_headers - computed: false, optional: true, required: false
  private _requestHeaders?: { [key: string]: string }; 
  public get requestHeaders() {
    return this.getStringMapAttribute('request_headers');
  }
  public set requestHeaders(value: { [key: string]: string }) {
    this._requestHeaders = value;
  }
  public resetRequestHeaders() {
    this._requestHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeadersInput() {
    return this._requestHeaders;
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

  // secondary_protocol_severity - computed: false, optional: true, required: false
  private _secondaryProtocolSeverity?: number; 
  public get secondaryProtocolSeverity() {
    return this.getNumberAttribute('secondary_protocol_severity');
  }
  public set secondaryProtocolSeverity(value: number) {
    this._secondaryProtocolSeverity = value;
  }
  public resetSecondaryProtocolSeverity() {
    this._secondaryProtocolSeverity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryProtocolSeverityInput() {
    return this._secondaryProtocolSeverity;
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

  // state - computed: false, optional: true, required: false
  private _state?: number; 
  public get state() {
    return this.getNumberAttribute('state');
  }
  public set state(value: number) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      actions: cdktf.hashMapper(cdktf.stringToTerraform)(this._actions),
      auth_method: cdktf.stringToTerraform(this._authMethod),
      auth_pass: cdktf.stringToTerraform(this._authPass),
      auth_user: cdktf.stringToTerraform(this._authUser),
      check_frequency: cdktf.stringToTerraform(this._checkFrequency),
      client_certificate_password: cdktf.stringToTerraform(this._clientCertificatePassword),
      credential_profile_id: cdktf.stringToTerraform(this._credentialProfileId),
      dependency_resource_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dependencyResourceIds),
      display_name: cdktf.stringToTerraform(this._displayName),
      follow_http_redirection: cdktf.booleanToTerraform(this._followHttpRedirection),
      forced_ips: cdktf.stringToTerraform(this._forcedIps),
      hidden_mon_added: cdktf.numberToTerraform(this._hiddenMonAdded),
      http_method: cdktf.stringToTerraform(this._httpMethod),
      http_protocol: cdktf.stringToTerraform(this._httpProtocol),
      id: cdktf.stringToTerraform(this._id),
      ignore_cert_err: cdktf.booleanToTerraform(this._ignoreCertErr),
      ip_type: cdktf.numberToTerraform(this._ipType),
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
      primary_protocol: cdktf.numberToTerraform(this._primaryProtocol),
      request_body: cdktf.stringToTerraform(this._requestBody),
      request_content_type: cdktf.stringToTerraform(this._requestContentType),
      request_headers: cdktf.hashMapper(cdktf.stringToTerraform)(this._requestHeaders),
      response_headers: cdktf.hashMapper(cdktf.stringToTerraform)(this._responseHeaders),
      response_headers_severity: cdktf.numberToTerraform(this._responseHeadersSeverity),
      secondary_protocol_severity: cdktf.numberToTerraform(this._secondaryProtocolSeverity),
      ssl_protocol: cdktf.stringToTerraform(this._sslProtocol),
      state: cdktf.numberToTerraform(this._state),
      tag_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tagIds),
      tag_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tagNames),
      third_party_service_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._thirdPartyServiceIds),
      threshold_profile_id: cdktf.stringToTerraform(this._thresholdProfileId),
      timeout: cdktf.numberToTerraform(this._timeout),
      unmatching_keyword_severity: cdktf.numberToTerraform(this._unmatchingKeywordSeverity),
      unmatching_keyword_value: cdktf.stringToTerraform(this._unmatchingKeywordValue),
      up_status_codes: cdktf.stringToTerraform(this._upStatusCodes),
      use_alpn: cdktf.booleanToTerraform(this._useAlpn),
      use_name_server: cdktf.booleanToTerraform(this._useNameServer),
      user_agent: cdktf.stringToTerraform(this._userAgent),
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
      auth_method: {
        value: cdktf.stringToHclTerraform(this._authMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      check_frequency: {
        value: cdktf.stringToHclTerraform(this._checkFrequency),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_certificate_password: {
        value: cdktf.stringToHclTerraform(this._clientCertificatePassword),
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
      follow_http_redirection: {
        value: cdktf.booleanToHclTerraform(this._followHttpRedirection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      forced_ips: {
        value: cdktf.stringToHclTerraform(this._forcedIps),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hidden_mon_added: {
        value: cdktf.numberToHclTerraform(this._hiddenMonAdded),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
        type: "set",
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
      primary_protocol: {
        value: cdktf.numberToHclTerraform(this._primaryProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      request_body: {
        value: cdktf.stringToHclTerraform(this._requestBody),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      request_content_type: {
        value: cdktf.stringToHclTerraform(this._requestContentType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      request_headers: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._requestHeaders),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
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
      secondary_protocol_severity: {
        value: cdktf.numberToHclTerraform(this._secondaryProtocolSeverity),
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
      state: {
        value: cdktf.numberToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      use_alpn: {
        value: cdktf.booleanToHclTerraform(this._useAlpn),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
