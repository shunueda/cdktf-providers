// https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/rest_api_monitor
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RestApiMonitorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Action to be performed on monitor IT Automation templates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/rest_api_monitor#actions RestApiMonitor#actions}
  */
  readonly actions?: { [key: string]: string };
  /**
  * Authentication method to access the website. Default value is 'B'. 'B' denotes Basic/NTLM. 'O' denotes OAuth 2 and 'W' denotes Web Token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/rest_api_monitor#auth_method RestApiMonitor#auth_method}
  */
  readonly authMethod?: string;
  /**
  * Authentication password to access the website.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/rest_api_monitor#auth_pass RestApiMonitor#auth_pass}
  */
  readonly authPass?: string;
  /**
  * Authentication user name to access the website.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/rest_api_monitor#auth_user RestApiMonitor#auth_user}
  */
  readonly authUser?: string;
  /**
  * Interval at which your website has to be monitored. Default value is 1 minute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/rest_api_monitor#check_frequency RestApiMonitor#check_frequency}
  */
  readonly checkFrequency?: string;
  /**
  * Password of the client certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/rest_api_monitor#client_certificate_password RestApiMonitor#client_certificate_password}
  */
  readonly clientCertificatePassword?: string;
  /**
  * Credential Profile to associate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/rest_api_monitor#credential_profile_id RestApiMonitor#credential_profile_id}
  */
  readonly credentialProfileId?: string;
  /**
  * List of dependent resource IDs. Suppress alert when dependent monitor(s) is down.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/rest_api_monitor#dependency_resource_ids RestApiMonitor#dependency_resource_ids}
  */
  readonly dependencyResourceIds?: string[];
  /**
  * Display Name for the monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/rest_api_monitor#display_name RestApiMonitor#display_name}
  */
  readonly displayName: string;
  /**
  * Check for the keyword in the website response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/rest_api_monitor#graphql RestApiMonitor#graphql}
  */
  readonly graphql?: { [key: string]: string };
  /**
  * HTTP Method to be used for accessing the website. Default value is 'G'. 'G' denotes GET, 'P' denotes POST, 'U' denotes PUT and 'D' denotes DELETE. HEAD is not supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/rest_api_monitor#http_method RestApiMonitor#http_method}
  */
  readonly httpMethod?: string;
  /**
  * Specify the version of the HTTP protocol. Default value is H1.1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/rest_api_monitor#http_protocol RestApiMonitor#http_protocol}
  */
  readonly httpProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/rest_api_monitor#id RestApiMonitor#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * JSON schema to be validated against the JSON response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/rest_api_monitor#json_schema RestApiMonitor#json_schema}
  */
  readonly jsonSchema?: string;
  /**
  * JSON Schema check allows you to annotate and validate all JSON endpoints for your web service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/rest_api_monitor#json_schema_check RestApiMonitor#json_schema_check}
  */
  readonly jsonSchemaCheck?: boolean | cdktf.IResolvable;
  /**
  * Trigger an alert when the JSON schema assertion fails during a test. Alert type constant. Can be either 0 or 2. '0' denotes Down and '2' denotes Trouble. Default value is 2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/rest_api_monitor#json_schema_severity RestApiMonitor#json_schema_severity}
  */
  readonly jsonSchemaSeverity?: number;
  /**
  * Token ID of the Web Token to be associated with the monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/rest_api_monitor#jwt_id RestApiMonitor#jwt_id}
  */
  readonly jwtId?: string;
  /**
  * Location profile to be associated with the monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/rest_api_monitor#location_profile_id RestApiMonitor#location_profile_id}
  */
  readonly locationProfileId?: string;
  /**
  * Name of the location profile to be associated with the monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/rest_api_monitor#location_profile_name RestApiMonitor#location_profile_name}
  */
  readonly locationProfileName?: string;
  /**
  * Perform case sensitive keyword search or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/rest_api_monitor#match_case RestApiMonitor#match_case}
  */
  readonly matchCase?: boolean | cdktf.IResolvable;
  /**
  * Provide multiple JSON Path expressions to enable evaluation of JSON Path expression assertions. The assertions must successfully parse the JSON Path in the JSON. JSON expression assertions fails if the expressions does not match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/rest_api_monitor#match_json_path RestApiMonitor#match_json_path}
  */
  readonly matchJsonPath?: string[];
  /**
  * Trigger an alert when the JSON path assertion fails during a test. Alert type constant. Can be either 0 or 2. '0' denotes Down and '2' denotes Trouble. Default value is 2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/rest_api_monitor#match_json_path_severity RestApiMonitor#match_json_path_severity}
  */
  readonly matchJsonPathSeverity?: number;
  /**
  * Match the regular expression in the website response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/rest_api_monitor#match_regex RestApiMonitor#match_regex}
  */
  readonly matchRegex?: { [key: string]: string };
  /**
  * Check for the keyword in the website response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/rest_api_monitor#matching_keyword RestApiMonitor#matching_keyword}
  */
  readonly matchingKeyword?: { [key: string]: string };
  /**
  * List of monitor groups to which the monitor has to be associated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/rest_api_monitor#monitor_groups RestApiMonitor#monitor_groups}
  */
  readonly monitorGroups?: string[];
  /**
  * Notification profile to be associated with the monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/rest_api_monitor#notification_profile_id RestApiMonitor#notification_profile_id}
  */
  readonly notificationProfileId?: string;
  /**
  * Name of the notification profile to be associated with the monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/rest_api_monitor#notification_profile_name RestApiMonitor#notification_profile_name}
  */
  readonly notificationProfileName?: string;
  /**
  * Provider ID of the OAuth Provider to be associated with the monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/rest_api_monitor#oauth2_provider RestApiMonitor#oauth2_provider}
  */
  readonly oauth2Provider?: string;
  /**
  * Provide the content to be passed in the request body while accessing the website.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/rest_api_monitor#request_body RestApiMonitor#request_body}
  */
  readonly requestBody?: string;
  /**
  * Provide content type for request params when http_method is 'P'. 'J' denotes JSON, 'T' denotes TEXT, 'X' denotes XML and 'F' denotes FORM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/rest_api_monitor#request_content_type RestApiMonitor#request_content_type}
  */
  readonly requestContentType?: string;
  /**
  * A Map of request header name and value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/rest_api_monitor#request_headers RestApiMonitor#request_headers}
  */
  readonly requestHeaders?: { [key: string]: string };
  /**
  * Response content type. Default value is 'T'. 'J' denotes JSON, 'T' denotes TEXT, 'X' denotes XML
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/rest_api_monitor#response_content_type RestApiMonitor#response_content_type}
  */
  readonly responseContentType?: string;
  /**
  * A Map of Header name and value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/rest_api_monitor#response_headers RestApiMonitor#response_headers}
  */
  readonly responseHeaders?: { [key: string]: string };
  /**
  * Alert type constant. Can be either 0 or 2. '0' denotes Down and '2' denotes Trouble
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/rest_api_monitor#response_headers_severity RestApiMonitor#response_headers_severity}
  */
  readonly responseHeadersSeverity?: number;
  /**
  * Specify the version of the SSL protocol. If you are not sure about the version, use Auto.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/rest_api_monitor#ssl_protocol RestApiMonitor#ssl_protocol}
  */
  readonly sslProtocol?: string;
  /**
  * List of tag IDs to be associated to the monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/rest_api_monitor#tag_ids RestApiMonitor#tag_ids}
  */
  readonly tagIds?: string[];
  /**
  * List of tag names to be associated to the monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/rest_api_monitor#tag_names RestApiMonitor#tag_names}
  */
  readonly tagNames?: string[];
  /**
  * List of Third Party Service IDs to be associated to the monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/rest_api_monitor#third_party_service_ids RestApiMonitor#third_party_service_ids}
  */
  readonly thirdPartyServiceIds?: string[];
  /**
  * Threshold profile to be associated with the monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/rest_api_monitor#threshold_profile_id RestApiMonitor#threshold_profile_id}
  */
  readonly thresholdProfileId?: string;
  /**
  * Timeout for connecting to website. Default value is 10. Range 1 - 45.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/rest_api_monitor#timeout RestApiMonitor#timeout}
  */
  readonly timeout?: number;
  /**
  * Check for non existence of keyword in the website response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/rest_api_monitor#unmatching_keyword RestApiMonitor#unmatching_keyword}
  */
  readonly unmatchingKeyword?: { [key: string]: string };
  /**
  * Provide a comma-separated list of HTTP status codes that indicate a successful response. You can specify individual status codes, as well as ranges separated with a colon.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/rest_api_monitor#up_status_codes RestApiMonitor#up_status_codes}
  */
  readonly upStatusCodes?: string;
  /**
  * Enable ALPN to send supported protocols as part of the TLS handshake.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/rest_api_monitor#use_alpn RestApiMonitor#use_alpn}
  */
  readonly useAlpn?: boolean | cdktf.IResolvable;
  /**
  * Monitoring is performed over IPv6 from supported locations. IPv6 locations do not fall back to IPv4 on failure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/rest_api_monitor#use_ipv6 RestApiMonitor#use_ipv6}
  */
  readonly useIpv6?: boolean | cdktf.IResolvable;
  /**
  * Resolve the IP address using Domain Name Server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/rest_api_monitor#use_name_server RestApiMonitor#use_name_server}
  */
  readonly useNameServer?: boolean | cdktf.IResolvable;
  /**
  * User Agent to be used while monitoring the website.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/rest_api_monitor#user_agent RestApiMonitor#user_agent}
  */
  readonly userAgent?: string;
  /**
  * List of user groups to be notified when the monitor is down.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/rest_api_monitor#user_group_ids RestApiMonitor#user_group_ids}
  */
  readonly userGroupIds?: string[];
  /**
  * Name of the user groups to be associated with the monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/rest_api_monitor#user_group_names RestApiMonitor#user_group_names}
  */
  readonly userGroupNames?: string[];
  /**
  * Website address to monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/rest_api_monitor#website RestApiMonitor#website}
  */
  readonly website: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/rest_api_monitor site24x7_rest_api_monitor}
*/
export class RestApiMonitor extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "site24x7_rest_api_monitor";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RestApiMonitor resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RestApiMonitor to import
  * @param importFromId The id of the existing RestApiMonitor that should be imported. Refer to the {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/rest_api_monitor#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RestApiMonitor to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "site24x7_rest_api_monitor", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/rest_api_monitor site24x7_rest_api_monitor} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RestApiMonitorConfig
  */
  public constructor(scope: Construct, id: string, config: RestApiMonitorConfig) {
    super(scope, id, {
      terraformResourceType: 'site24x7_rest_api_monitor',
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
    this._authMethod = config.authMethod;
    this._authPass = config.authPass;
    this._authUser = config.authUser;
    this._checkFrequency = config.checkFrequency;
    this._clientCertificatePassword = config.clientCertificatePassword;
    this._credentialProfileId = config.credentialProfileId;
    this._dependencyResourceIds = config.dependencyResourceIds;
    this._displayName = config.displayName;
    this._graphql = config.graphql;
    this._httpMethod = config.httpMethod;
    this._httpProtocol = config.httpProtocol;
    this._id = config.id;
    this._jsonSchema = config.jsonSchema;
    this._jsonSchemaCheck = config.jsonSchemaCheck;
    this._jsonSchemaSeverity = config.jsonSchemaSeverity;
    this._jwtId = config.jwtId;
    this._locationProfileId = config.locationProfileId;
    this._locationProfileName = config.locationProfileName;
    this._matchCase = config.matchCase;
    this._matchJsonPath = config.matchJsonPath;
    this._matchJsonPathSeverity = config.matchJsonPathSeverity;
    this._matchRegex = config.matchRegex;
    this._matchingKeyword = config.matchingKeyword;
    this._monitorGroups = config.monitorGroups;
    this._notificationProfileId = config.notificationProfileId;
    this._notificationProfileName = config.notificationProfileName;
    this._oauth2Provider = config.oauth2Provider;
    this._requestBody = config.requestBody;
    this._requestContentType = config.requestContentType;
    this._requestHeaders = config.requestHeaders;
    this._responseContentType = config.responseContentType;
    this._responseHeaders = config.responseHeaders;
    this._responseHeadersSeverity = config.responseHeadersSeverity;
    this._sslProtocol = config.sslProtocol;
    this._tagIds = config.tagIds;
    this._tagNames = config.tagNames;
    this._thirdPartyServiceIds = config.thirdPartyServiceIds;
    this._thresholdProfileId = config.thresholdProfileId;
    this._timeout = config.timeout;
    this._unmatchingKeyword = config.unmatchingKeyword;
    this._upStatusCodes = config.upStatusCodes;
    this._useAlpn = config.useAlpn;
    this._useIpv6 = config.useIpv6;
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

  // graphql - computed: false, optional: true, required: false
  private _graphql?: { [key: string]: string }; 
  public get graphql() {
    return this.getStringMapAttribute('graphql');
  }
  public set graphql(value: { [key: string]: string }) {
    this._graphql = value;
  }
  public resetGraphql() {
    this._graphql = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get graphqlInput() {
    return this._graphql;
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

  // json_schema - computed: false, optional: true, required: false
  private _jsonSchema?: string; 
  public get jsonSchema() {
    return this.getStringAttribute('json_schema');
  }
  public set jsonSchema(value: string) {
    this._jsonSchema = value;
  }
  public resetJsonSchema() {
    this._jsonSchema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonSchemaInput() {
    return this._jsonSchema;
  }

  // json_schema_check - computed: false, optional: true, required: false
  private _jsonSchemaCheck?: boolean | cdktf.IResolvable; 
  public get jsonSchemaCheck() {
    return this.getBooleanAttribute('json_schema_check');
  }
  public set jsonSchemaCheck(value: boolean | cdktf.IResolvable) {
    this._jsonSchemaCheck = value;
  }
  public resetJsonSchemaCheck() {
    this._jsonSchemaCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonSchemaCheckInput() {
    return this._jsonSchemaCheck;
  }

  // json_schema_severity - computed: false, optional: true, required: false
  private _jsonSchemaSeverity?: number; 
  public get jsonSchemaSeverity() {
    return this.getNumberAttribute('json_schema_severity');
  }
  public set jsonSchemaSeverity(value: number) {
    this._jsonSchemaSeverity = value;
  }
  public resetJsonSchemaSeverity() {
    this._jsonSchemaSeverity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonSchemaSeverityInput() {
    return this._jsonSchemaSeverity;
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

  // match_json_path - computed: false, optional: true, required: false
  private _matchJsonPath?: string[]; 
  public get matchJsonPath() {
    return this.getListAttribute('match_json_path');
  }
  public set matchJsonPath(value: string[]) {
    this._matchJsonPath = value;
  }
  public resetMatchJsonPath() {
    this._matchJsonPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchJsonPathInput() {
    return this._matchJsonPath;
  }

  // match_json_path_severity - computed: false, optional: true, required: false
  private _matchJsonPathSeverity?: number; 
  public get matchJsonPathSeverity() {
    return this.getNumberAttribute('match_json_path_severity');
  }
  public set matchJsonPathSeverity(value: number) {
    this._matchJsonPathSeverity = value;
  }
  public resetMatchJsonPathSeverity() {
    this._matchJsonPathSeverity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchJsonPathSeverityInput() {
    return this._matchJsonPathSeverity;
  }

  // match_regex - computed: false, optional: true, required: false
  private _matchRegex?: { [key: string]: string }; 
  public get matchRegex() {
    return this.getStringMapAttribute('match_regex');
  }
  public set matchRegex(value: { [key: string]: string }) {
    this._matchRegex = value;
  }
  public resetMatchRegex() {
    this._matchRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchRegexInput() {
    return this._matchRegex;
  }

  // matching_keyword - computed: false, optional: true, required: false
  private _matchingKeyword?: { [key: string]: string }; 
  public get matchingKeyword() {
    return this.getStringMapAttribute('matching_keyword');
  }
  public set matchingKeyword(value: { [key: string]: string }) {
    this._matchingKeyword = value;
  }
  public resetMatchingKeyword() {
    this._matchingKeyword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchingKeywordInput() {
    return this._matchingKeyword;
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

  // oauth2_provider - computed: false, optional: true, required: false
  private _oauth2Provider?: string; 
  public get oauth2Provider() {
    return this.getStringAttribute('oauth2_provider');
  }
  public set oauth2Provider(value: string) {
    this._oauth2Provider = value;
  }
  public resetOauth2Provider() {
    this._oauth2Provider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauth2ProviderInput() {
    return this._oauth2Provider;
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

  // response_content_type - computed: false, optional: true, required: false
  private _responseContentType?: string; 
  public get responseContentType() {
    return this.getStringAttribute('response_content_type');
  }
  public set responseContentType(value: string) {
    this._responseContentType = value;
  }
  public resetResponseContentType() {
    this._responseContentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseContentTypeInput() {
    return this._responseContentType;
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

  // unmatching_keyword - computed: false, optional: true, required: false
  private _unmatchingKeyword?: { [key: string]: string }; 
  public get unmatchingKeyword() {
    return this.getStringMapAttribute('unmatching_keyword');
  }
  public set unmatchingKeyword(value: { [key: string]: string }) {
    this._unmatchingKeyword = value;
  }
  public resetUnmatchingKeyword() {
    this._unmatchingKeyword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unmatchingKeywordInput() {
    return this._unmatchingKeyword;
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
      graphql: cdktf.hashMapper(cdktf.stringToTerraform)(this._graphql),
      http_method: cdktf.stringToTerraform(this._httpMethod),
      http_protocol: cdktf.stringToTerraform(this._httpProtocol),
      id: cdktf.stringToTerraform(this._id),
      json_schema: cdktf.stringToTerraform(this._jsonSchema),
      json_schema_check: cdktf.booleanToTerraform(this._jsonSchemaCheck),
      json_schema_severity: cdktf.numberToTerraform(this._jsonSchemaSeverity),
      jwt_id: cdktf.stringToTerraform(this._jwtId),
      location_profile_id: cdktf.stringToTerraform(this._locationProfileId),
      location_profile_name: cdktf.stringToTerraform(this._locationProfileName),
      match_case: cdktf.booleanToTerraform(this._matchCase),
      match_json_path: cdktf.listMapper(cdktf.stringToTerraform, false)(this._matchJsonPath),
      match_json_path_severity: cdktf.numberToTerraform(this._matchJsonPathSeverity),
      match_regex: cdktf.hashMapper(cdktf.stringToTerraform)(this._matchRegex),
      matching_keyword: cdktf.hashMapper(cdktf.stringToTerraform)(this._matchingKeyword),
      monitor_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._monitorGroups),
      notification_profile_id: cdktf.stringToTerraform(this._notificationProfileId),
      notification_profile_name: cdktf.stringToTerraform(this._notificationProfileName),
      oauth2_provider: cdktf.stringToTerraform(this._oauth2Provider),
      request_body: cdktf.stringToTerraform(this._requestBody),
      request_content_type: cdktf.stringToTerraform(this._requestContentType),
      request_headers: cdktf.hashMapper(cdktf.stringToTerraform)(this._requestHeaders),
      response_content_type: cdktf.stringToTerraform(this._responseContentType),
      response_headers: cdktf.hashMapper(cdktf.stringToTerraform)(this._responseHeaders),
      response_headers_severity: cdktf.numberToTerraform(this._responseHeadersSeverity),
      ssl_protocol: cdktf.stringToTerraform(this._sslProtocol),
      tag_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tagIds),
      tag_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tagNames),
      third_party_service_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._thirdPartyServiceIds),
      threshold_profile_id: cdktf.stringToTerraform(this._thresholdProfileId),
      timeout: cdktf.numberToTerraform(this._timeout),
      unmatching_keyword: cdktf.hashMapper(cdktf.stringToTerraform)(this._unmatchingKeyword),
      up_status_codes: cdktf.stringToTerraform(this._upStatusCodes),
      use_alpn: cdktf.booleanToTerraform(this._useAlpn),
      use_ipv6: cdktf.booleanToTerraform(this._useIpv6),
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
      graphql: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._graphql),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
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
      json_schema: {
        value: cdktf.stringToHclTerraform(this._jsonSchema),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      json_schema_check: {
        value: cdktf.booleanToHclTerraform(this._jsonSchemaCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      json_schema_severity: {
        value: cdktf.numberToHclTerraform(this._jsonSchemaSeverity),
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
      match_json_path: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._matchJsonPath),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      match_json_path_severity: {
        value: cdktf.numberToHclTerraform(this._matchJsonPathSeverity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      match_regex: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._matchRegex),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      matching_keyword: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._matchingKeyword),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
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
      oauth2_provider: {
        value: cdktf.stringToHclTerraform(this._oauth2Provider),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      response_content_type: {
        value: cdktf.stringToHclTerraform(this._responseContentType),
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
      unmatching_keyword: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._unmatchingKeyword),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
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
