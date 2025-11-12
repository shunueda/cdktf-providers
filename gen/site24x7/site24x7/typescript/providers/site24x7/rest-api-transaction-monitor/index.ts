// https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/rest_api_transaction_monitor
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RestApiTransactionMonitorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Action to be performed on monitor IT Automation templates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/rest_api_transaction_monitor#actions RestApiTransactionMonitor#actions}
  */
  readonly actions?: { [key: string]: string };
  /**
  * Interval at which your RESRAPI has to be monitored. Default value is 5 minute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/rest_api_transaction_monitor#check_frequency RestApiTransactionMonitor#check_frequency}
  */
  readonly checkFrequency?: string;
  /**
  * List of dependent resource IDs. Suppress alert when dependent monitor(s) is down.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/rest_api_transaction_monitor#dependency_resource_ids RestApiTransactionMonitor#dependency_resource_ids}
  */
  readonly dependencyResourceIds?: string[];
  /**
  * Display Name for the monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/rest_api_transaction_monitor#display_name RestApiTransactionMonitor#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/rest_api_transaction_monitor#id RestApiTransactionMonitor#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Location profile to be associated with the monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/rest_api_transaction_monitor#location_profile_id RestApiTransactionMonitor#location_profile_id}
  */
  readonly locationProfileId?: string;
  /**
  * Name of the location profile to be associated with the monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/rest_api_transaction_monitor#location_profile_name RestApiTransactionMonitor#location_profile_name}
  */
  readonly locationProfileName?: string;
  /**
  * List of monitor groups to which the monitor has to be associated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/rest_api_transaction_monitor#monitor_groups RestApiTransactionMonitor#monitor_groups}
  */
  readonly monitorGroups?: string[];
  /**
  * Notification profile to be associated with the monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/rest_api_transaction_monitor#notification_profile_id RestApiTransactionMonitor#notification_profile_id}
  */
  readonly notificationProfileId?: string;
  /**
  * Name of the notification profile to be associated with the monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/rest_api_transaction_monitor#notification_profile_name RestApiTransactionMonitor#notification_profile_name}
  */
  readonly notificationProfileName?: string;
  /**
  * List of tag IDs to be associated to the monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/rest_api_transaction_monitor#tag_ids RestApiTransactionMonitor#tag_ids}
  */
  readonly tagIds?: string[];
  /**
  * List of tag names to be associated to the monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/rest_api_transaction_monitor#tag_names RestApiTransactionMonitor#tag_names}
  */
  readonly tagNames?: string[];
  /**
  * List of Third Party Service IDs to be associated to the monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/rest_api_transaction_monitor#third_party_service_ids RestApiTransactionMonitor#third_party_service_ids}
  */
  readonly thirdPartyServiceIds?: string[];
  /**
  * Threshold profile to be associated with the monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/rest_api_transaction_monitor#threshold_profile_id RestApiTransactionMonitor#threshold_profile_id}
  */
  readonly thresholdProfileId?: string;
  /**
  * List of user groups to be notified when the monitor is down.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/rest_api_transaction_monitor#user_group_ids RestApiTransactionMonitor#user_group_ids}
  */
  readonly userGroupIds?: string[];
  /**
  * Name of the user groups to be associated with the monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/rest_api_transaction_monitor#user_group_names RestApiTransactionMonitor#user_group_names}
  */
  readonly userGroupNames?: string[];
  /**
  * steps block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/rest_api_transaction_monitor#steps RestApiTransactionMonitor#steps}
  */
  readonly steps?: RestApiTransactionMonitorSteps[] | cdktf.IResolvable;
}
export interface RestApiTransactionMonitorStepsStepDetails {
  /**
  * Authentication method to access the website. Default value is 'B'. 'B' denotes Basic/NTLM. 'O' denotes OAuth 2 and 'W' denotes Web Token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/rest_api_transaction_monitor#auth_method RestApiTransactionMonitor#auth_method}
  */
  readonly authMethod?: string;
  /**
  * Authentication password to access the website.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/rest_api_transaction_monitor#auth_pass RestApiTransactionMonitor#auth_pass}
  */
  readonly authPass?: string;
  /**
  * Authentication user name to access the website.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/rest_api_transaction_monitor#auth_user RestApiTransactionMonitor#auth_user}
  */
  readonly authUser?: string;
  /**
  * Password of the client certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/rest_api_transaction_monitor#client_certificate_password RestApiTransactionMonitor#client_certificate_password}
  */
  readonly clientCertificatePassword?: string;
  /**
  * Provide the Response Header/Cookies for parameter forwarding in Map format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/rest_api_transaction_monitor#dynamic_header_params RestApiTransactionMonitor#dynamic_header_params}
  */
  readonly dynamicHeaderParams?: { [key: string]: string };
  /**
  * Store the Response Format of Parameter forwarding
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/rest_api_transaction_monitor#dynamic_param_response_type RestApiTransactionMonitor#dynamic_param_response_type}
  */
  readonly dynamicParamResponseType?: string;
  /**
  * Provide the GraphQL query to get specific response from GraphQL based API service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/rest_api_transaction_monitor#graphql_query RestApiTransactionMonitor#graphql_query}
  */
  readonly graphqlQuery?: string;
  /**
  * Provide the GraphQL variables to get specific response from GraphQL based API service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/rest_api_transaction_monitor#graphql_variables RestApiTransactionMonitor#graphql_variables}
  */
  readonly graphqlVariables?: string;
  /**
  * HTTP Method to be used for accessing the website. Default value is 'G'. 'G' denotes GET, 'P' denotes POST, 'U' denotes PUT and 'D' denotes DELETE. HEAD is not supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/rest_api_transaction_monitor#http_method RestApiTransactionMonitor#http_method}
  */
  readonly httpMethod?: string;
  /**
  * Specify the version of the HTTP protocol. Default value is H1.1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/rest_api_transaction_monitor#http_protocol RestApiTransactionMonitor#http_protocol}
  */
  readonly httpProtocol?: string;
  /**
  * JSON schema to be validated against the JSON response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/rest_api_transaction_monitor#json_schema RestApiTransactionMonitor#json_schema}
  */
  readonly jsonSchema?: string;
  /**
  * JSON Schema check allows you to annotate and validate all JSON endpoints for your web service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/rest_api_transaction_monitor#json_schema_check RestApiTransactionMonitor#json_schema_check}
  */
  readonly jsonSchemaCheck?: boolean | cdktf.IResolvable;
  /**
  * Trigger an alert when the JSON schema assertion fails during a test. Alert type constant. Can be either 0 or 2. '0' denotes Down and '2' denotes Trouble. Default value is 2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/rest_api_transaction_monitor#json_schema_severity RestApiTransactionMonitor#json_schema_severity}
  */
  readonly jsonSchemaSeverity?: number;
  /**
  * Token ID of the Web Token to be associated with the monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/rest_api_transaction_monitor#jwt_id RestApiTransactionMonitor#jwt_id}
  */
  readonly jwtId?: string;
  /**
  * Perform case sensitive keyword search or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/rest_api_transaction_monitor#match_case RestApiTransactionMonitor#match_case}
  */
  readonly matchCase?: boolean | cdktf.IResolvable;
  /**
  * Provide multiple JSON Path expressions to enable evaluation of JSON Path expression assertions. The assertions must successfully parse the JSON Path in the JSON. JSON expression assertions fails if the expressions does not match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/rest_api_transaction_monitor#match_json_path RestApiTransactionMonitor#match_json_path}
  */
  readonly matchJsonPath?: string[];
  /**
  * Trigger an alert when the JSON path assertion fails during a test. Alert type constant. Can be either 0 or 2. '0' denotes Down and '2' denotes Trouble. Default value is 2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/rest_api_transaction_monitor#match_json_path_severity RestApiTransactionMonitor#match_json_path_severity}
  */
  readonly matchJsonPathSeverity?: number;
  /**
  * Match the regular expression in the website response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/rest_api_transaction_monitor#match_regex RestApiTransactionMonitor#match_regex}
  */
  readonly matchRegex?: { [key: string]: string };
  /**
  * Check for the keyword in the website response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/rest_api_transaction_monitor#matching_keyword RestApiTransactionMonitor#matching_keyword}
  */
  readonly matchingKeyword?: { [key: string]: string };
  /**
  * Provider ID of the OAuth Provider to be associated with the monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/rest_api_transaction_monitor#oauth2_provider RestApiTransactionMonitor#oauth2_provider}
  */
  readonly oauth2Provider?: string;
  /**
  * Stop on Error severity for the step. '0' means Stop and Notify, '1' means Proceed , '2' means Notify and Proceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/rest_api_transaction_monitor#on_error RestApiTransactionMonitor#on_error}
  */
  readonly onError?: number;
  /**
  * Provide the content to be passed in the request body while accessing the website.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/rest_api_transaction_monitor#request_body RestApiTransactionMonitor#request_body}
  */
  readonly requestBody?: string;
  /**
  * Provide content type for request params when http_method is 'P'. 'J' denotes JSON, 'T' denotes TEXT, 'X' denotes XML and 'F' denotes FORM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/rest_api_transaction_monitor#request_content_type RestApiTransactionMonitor#request_content_type}
  */
  readonly requestContentType?: string;
  /**
  * A Map of request header name and value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/rest_api_transaction_monitor#request_headers RestApiTransactionMonitor#request_headers}
  */
  readonly requestHeaders?: { [key: string]: string };
  /**
  * Response content type. Default value is 'T'. 'J' denotes JSON, 'T' denotes TEXT, 'X' denotes XML
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/rest_api_transaction_monitor#response_content_type RestApiTransactionMonitor#response_content_type}
  */
  readonly responseContentType?: string;
  /**
  * A Map of Header name and value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/rest_api_transaction_monitor#response_headers RestApiTransactionMonitor#response_headers}
  */
  readonly responseHeaders?: { [key: string]: string };
  /**
  * Alert type constant. Can be either 0 or 2. '0' denotes Down and '2' denotes Trouble
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/rest_api_transaction_monitor#response_headers_severity RestApiTransactionMonitor#response_headers_severity}
  */
  readonly responseHeadersSeverity?: number;
  /**
  * Provide the Response Variable for parameter forwarding in Map format. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/rest_api_transaction_monitor#response_variables RestApiTransactionMonitor#response_variables}
  */
  readonly responseVariables?: { [key: string]: string };
  /**
  * Specify the version of the SSL protocol. If you are not sure about the version, use Auto.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/rest_api_transaction_monitor#ssl_protocol RestApiTransactionMonitor#ssl_protocol}
  */
  readonly sslProtocol?: string;
  /**
  * Rest API Url to monitors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/rest_api_transaction_monitor#step_url RestApiTransactionMonitor#step_url}
  */
  readonly stepUrl: string;
  /**
  * Timeout for connecting to website. Default value is 10. Range 1 - 45.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/rest_api_transaction_monitor#timeout RestApiTransactionMonitor#timeout}
  */
  readonly timeout?: string;
  /**
  * Check for non existence of keyword in the website response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/rest_api_transaction_monitor#unmatching_keyword RestApiTransactionMonitor#unmatching_keyword}
  */
  readonly unmatchingKeyword?: { [key: string]: string };
  /**
  * Provide a comma-separated list of HTTP status codes that indicate a successful response. You can specify individual status codes, as well as ranges separated with a colon.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/rest_api_transaction_monitor#up_status_codes RestApiTransactionMonitor#up_status_codes}
  */
  readonly upStatusCodes?: string;
  /**
  * Enable ALPN to send supported protocols as part of the TLS handshake.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/rest_api_transaction_monitor#use_alpn RestApiTransactionMonitor#use_alpn}
  */
  readonly useAlpn?: boolean | cdktf.IResolvable;
  /**
  * Monitoring is performed over IPv6 from supported locations. IPv6 locations do not fall back to IPv4 on failure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/rest_api_transaction_monitor#use_ipv6 RestApiTransactionMonitor#use_ipv6}
  */
  readonly useIpv6?: boolean | cdktf.IResolvable;
  /**
  * Resolve the IP address using Domain Name Server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/rest_api_transaction_monitor#use_name_server RestApiTransactionMonitor#use_name_server}
  */
  readonly useNameServer?: boolean | cdktf.IResolvable;
  /**
  * User Agent to be used while monitoring the website.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/rest_api_transaction_monitor#user_agent RestApiTransactionMonitor#user_agent}
  */
  readonly userAgent?: string;
}

export function restApiTransactionMonitorStepsStepDetailsToTerraform(struct?: RestApiTransactionMonitorStepsStepDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_method: cdktf.stringToTerraform(struct!.authMethod),
    auth_pass: cdktf.stringToTerraform(struct!.authPass),
    auth_user: cdktf.stringToTerraform(struct!.authUser),
    client_certificate_password: cdktf.stringToTerraform(struct!.clientCertificatePassword),
    dynamic_header_params: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.dynamicHeaderParams),
    dynamic_param_response_type: cdktf.stringToTerraform(struct!.dynamicParamResponseType),
    graphql_query: cdktf.stringToTerraform(struct!.graphqlQuery),
    graphql_variables: cdktf.stringToTerraform(struct!.graphqlVariables),
    http_method: cdktf.stringToTerraform(struct!.httpMethod),
    http_protocol: cdktf.stringToTerraform(struct!.httpProtocol),
    json_schema: cdktf.stringToTerraform(struct!.jsonSchema),
    json_schema_check: cdktf.booleanToTerraform(struct!.jsonSchemaCheck),
    json_schema_severity: cdktf.numberToTerraform(struct!.jsonSchemaSeverity),
    jwt_id: cdktf.stringToTerraform(struct!.jwtId),
    match_case: cdktf.booleanToTerraform(struct!.matchCase),
    match_json_path: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchJsonPath),
    match_json_path_severity: cdktf.numberToTerraform(struct!.matchJsonPathSeverity),
    match_regex: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchRegex),
    matching_keyword: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchingKeyword),
    oauth2_provider: cdktf.stringToTerraform(struct!.oauth2Provider),
    on_error: cdktf.numberToTerraform(struct!.onError),
    request_body: cdktf.stringToTerraform(struct!.requestBody),
    request_content_type: cdktf.stringToTerraform(struct!.requestContentType),
    request_headers: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requestHeaders),
    response_content_type: cdktf.stringToTerraform(struct!.responseContentType),
    response_headers: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.responseHeaders),
    response_headers_severity: cdktf.numberToTerraform(struct!.responseHeadersSeverity),
    response_variables: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.responseVariables),
    ssl_protocol: cdktf.stringToTerraform(struct!.sslProtocol),
    step_url: cdktf.stringToTerraform(struct!.stepUrl),
    timeout: cdktf.stringToTerraform(struct!.timeout),
    unmatching_keyword: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.unmatchingKeyword),
    up_status_codes: cdktf.stringToTerraform(struct!.upStatusCodes),
    use_alpn: cdktf.booleanToTerraform(struct!.useAlpn),
    use_ipv6: cdktf.booleanToTerraform(struct!.useIpv6),
    use_name_server: cdktf.booleanToTerraform(struct!.useNameServer),
    user_agent: cdktf.stringToTerraform(struct!.userAgent),
  }
}


export function restApiTransactionMonitorStepsStepDetailsToHclTerraform(struct?: RestApiTransactionMonitorStepsStepDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_method: {
      value: cdktf.stringToHclTerraform(struct!.authMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_pass: {
      value: cdktf.stringToHclTerraform(struct!.authPass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_user: {
      value: cdktf.stringToHclTerraform(struct!.authUser),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_certificate_password: {
      value: cdktf.stringToHclTerraform(struct!.clientCertificatePassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dynamic_header_params: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.dynamicHeaderParams),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    dynamic_param_response_type: {
      value: cdktf.stringToHclTerraform(struct!.dynamicParamResponseType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    graphql_query: {
      value: cdktf.stringToHclTerraform(struct!.graphqlQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    graphql_variables: {
      value: cdktf.stringToHclTerraform(struct!.graphqlVariables),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_method: {
      value: cdktf.stringToHclTerraform(struct!.httpMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_protocol: {
      value: cdktf.stringToHclTerraform(struct!.httpProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    json_schema: {
      value: cdktf.stringToHclTerraform(struct!.jsonSchema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    json_schema_check: {
      value: cdktf.booleanToHclTerraform(struct!.jsonSchemaCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    json_schema_severity: {
      value: cdktf.numberToHclTerraform(struct!.jsonSchemaSeverity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    jwt_id: {
      value: cdktf.stringToHclTerraform(struct!.jwtId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_case: {
      value: cdktf.booleanToHclTerraform(struct!.matchCase),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match_json_path: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchJsonPath),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    match_json_path_severity: {
      value: cdktf.numberToHclTerraform(struct!.matchJsonPathSeverity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    match_regex: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchRegex),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    matching_keyword: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchingKeyword),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    oauth2_provider: {
      value: cdktf.stringToHclTerraform(struct!.oauth2Provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    on_error: {
      value: cdktf.numberToHclTerraform(struct!.onError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    request_body: {
      value: cdktf.stringToHclTerraform(struct!.requestBody),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request_content_type: {
      value: cdktf.stringToHclTerraform(struct!.requestContentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request_headers: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.requestHeaders),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    response_content_type: {
      value: cdktf.stringToHclTerraform(struct!.responseContentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response_headers: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.responseHeaders),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    response_headers_severity: {
      value: cdktf.numberToHclTerraform(struct!.responseHeadersSeverity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_variables: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.responseVariables),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    ssl_protocol: {
      value: cdktf.stringToHclTerraform(struct!.sslProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    step_url: {
      value: cdktf.stringToHclTerraform(struct!.stepUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout: {
      value: cdktf.stringToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unmatching_keyword: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.unmatchingKeyword),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    up_status_codes: {
      value: cdktf.stringToHclTerraform(struct!.upStatusCodes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_alpn: {
      value: cdktf.booleanToHclTerraform(struct!.useAlpn),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_ipv6: {
      value: cdktf.booleanToHclTerraform(struct!.useIpv6),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_name_server: {
      value: cdktf.booleanToHclTerraform(struct!.useNameServer),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    user_agent: {
      value: cdktf.stringToHclTerraform(struct!.userAgent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RestApiTransactionMonitorStepsStepDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): RestApiTransactionMonitorStepsStepDetails | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.authMethod = this._authMethod;
    }
    if (this._authPass !== undefined) {
      hasAnyValues = true;
      internalValueResult.authPass = this._authPass;
    }
    if (this._authUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.authUser = this._authUser;
    }
    if (this._clientCertificatePassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCertificatePassword = this._clientCertificatePassword;
    }
    if (this._dynamicHeaderParams !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicHeaderParams = this._dynamicHeaderParams;
    }
    if (this._dynamicParamResponseType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicParamResponseType = this._dynamicParamResponseType;
    }
    if (this._graphqlQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.graphqlQuery = this._graphqlQuery;
    }
    if (this._graphqlVariables !== undefined) {
      hasAnyValues = true;
      internalValueResult.graphqlVariables = this._graphqlVariables;
    }
    if (this._httpMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpMethod = this._httpMethod;
    }
    if (this._httpProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpProtocol = this._httpProtocol;
    }
    if (this._jsonSchema !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonSchema = this._jsonSchema;
    }
    if (this._jsonSchemaCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonSchemaCheck = this._jsonSchemaCheck;
    }
    if (this._jsonSchemaSeverity !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonSchemaSeverity = this._jsonSchemaSeverity;
    }
    if (this._jwtId !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwtId = this._jwtId;
    }
    if (this._matchCase !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchCase = this._matchCase;
    }
    if (this._matchJsonPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchJsonPath = this._matchJsonPath;
    }
    if (this._matchJsonPathSeverity !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchJsonPathSeverity = this._matchJsonPathSeverity;
    }
    if (this._matchRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchRegex = this._matchRegex;
    }
    if (this._matchingKeyword !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchingKeyword = this._matchingKeyword;
    }
    if (this._oauth2Provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauth2Provider = this._oauth2Provider;
    }
    if (this._onError !== undefined) {
      hasAnyValues = true;
      internalValueResult.onError = this._onError;
    }
    if (this._requestBody !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestBody = this._requestBody;
    }
    if (this._requestContentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestContentType = this._requestContentType;
    }
    if (this._requestHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestHeaders = this._requestHeaders;
    }
    if (this._responseContentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseContentType = this._responseContentType;
    }
    if (this._responseHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseHeaders = this._responseHeaders;
    }
    if (this._responseHeadersSeverity !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseHeadersSeverity = this._responseHeadersSeverity;
    }
    if (this._responseVariables !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseVariables = this._responseVariables;
    }
    if (this._sslProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslProtocol = this._sslProtocol;
    }
    if (this._stepUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.stepUrl = this._stepUrl;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._unmatchingKeyword !== undefined) {
      hasAnyValues = true;
      internalValueResult.unmatchingKeyword = this._unmatchingKeyword;
    }
    if (this._upStatusCodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.upStatusCodes = this._upStatusCodes;
    }
    if (this._useAlpn !== undefined) {
      hasAnyValues = true;
      internalValueResult.useAlpn = this._useAlpn;
    }
    if (this._useIpv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.useIpv6 = this._useIpv6;
    }
    if (this._useNameServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.useNameServer = this._useNameServer;
    }
    if (this._userAgent !== undefined) {
      hasAnyValues = true;
      internalValueResult.userAgent = this._userAgent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RestApiTransactionMonitorStepsStepDetails | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authMethod = undefined;
      this._authPass = undefined;
      this._authUser = undefined;
      this._clientCertificatePassword = undefined;
      this._dynamicHeaderParams = undefined;
      this._dynamicParamResponseType = undefined;
      this._graphqlQuery = undefined;
      this._graphqlVariables = undefined;
      this._httpMethod = undefined;
      this._httpProtocol = undefined;
      this._jsonSchema = undefined;
      this._jsonSchemaCheck = undefined;
      this._jsonSchemaSeverity = undefined;
      this._jwtId = undefined;
      this._matchCase = undefined;
      this._matchJsonPath = undefined;
      this._matchJsonPathSeverity = undefined;
      this._matchRegex = undefined;
      this._matchingKeyword = undefined;
      this._oauth2Provider = undefined;
      this._onError = undefined;
      this._requestBody = undefined;
      this._requestContentType = undefined;
      this._requestHeaders = undefined;
      this._responseContentType = undefined;
      this._responseHeaders = undefined;
      this._responseHeadersSeverity = undefined;
      this._responseVariables = undefined;
      this._sslProtocol = undefined;
      this._stepUrl = undefined;
      this._timeout = undefined;
      this._unmatchingKeyword = undefined;
      this._upStatusCodes = undefined;
      this._useAlpn = undefined;
      this._useIpv6 = undefined;
      this._useNameServer = undefined;
      this._userAgent = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authMethod = value.authMethod;
      this._authPass = value.authPass;
      this._authUser = value.authUser;
      this._clientCertificatePassword = value.clientCertificatePassword;
      this._dynamicHeaderParams = value.dynamicHeaderParams;
      this._dynamicParamResponseType = value.dynamicParamResponseType;
      this._graphqlQuery = value.graphqlQuery;
      this._graphqlVariables = value.graphqlVariables;
      this._httpMethod = value.httpMethod;
      this._httpProtocol = value.httpProtocol;
      this._jsonSchema = value.jsonSchema;
      this._jsonSchemaCheck = value.jsonSchemaCheck;
      this._jsonSchemaSeverity = value.jsonSchemaSeverity;
      this._jwtId = value.jwtId;
      this._matchCase = value.matchCase;
      this._matchJsonPath = value.matchJsonPath;
      this._matchJsonPathSeverity = value.matchJsonPathSeverity;
      this._matchRegex = value.matchRegex;
      this._matchingKeyword = value.matchingKeyword;
      this._oauth2Provider = value.oauth2Provider;
      this._onError = value.onError;
      this._requestBody = value.requestBody;
      this._requestContentType = value.requestContentType;
      this._requestHeaders = value.requestHeaders;
      this._responseContentType = value.responseContentType;
      this._responseHeaders = value.responseHeaders;
      this._responseHeadersSeverity = value.responseHeadersSeverity;
      this._responseVariables = value.responseVariables;
      this._sslProtocol = value.sslProtocol;
      this._stepUrl = value.stepUrl;
      this._timeout = value.timeout;
      this._unmatchingKeyword = value.unmatchingKeyword;
      this._upStatusCodes = value.upStatusCodes;
      this._useAlpn = value.useAlpn;
      this._useIpv6 = value.useIpv6;
      this._useNameServer = value.useNameServer;
      this._userAgent = value.userAgent;
    }
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

  // dynamic_header_params - computed: false, optional: true, required: false
  private _dynamicHeaderParams?: { [key: string]: string }; 
  public get dynamicHeaderParams() {
    return this.getStringMapAttribute('dynamic_header_params');
  }
  public set dynamicHeaderParams(value: { [key: string]: string }) {
    this._dynamicHeaderParams = value;
  }
  public resetDynamicHeaderParams() {
    this._dynamicHeaderParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicHeaderParamsInput() {
    return this._dynamicHeaderParams;
  }

  // dynamic_param_response_type - computed: false, optional: true, required: false
  private _dynamicParamResponseType?: string; 
  public get dynamicParamResponseType() {
    return this.getStringAttribute('dynamic_param_response_type');
  }
  public set dynamicParamResponseType(value: string) {
    this._dynamicParamResponseType = value;
  }
  public resetDynamicParamResponseType() {
    this._dynamicParamResponseType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicParamResponseTypeInput() {
    return this._dynamicParamResponseType;
  }

  // graphql_query - computed: false, optional: true, required: false
  private _graphqlQuery?: string; 
  public get graphqlQuery() {
    return this.getStringAttribute('graphql_query');
  }
  public set graphqlQuery(value: string) {
    this._graphqlQuery = value;
  }
  public resetGraphqlQuery() {
    this._graphqlQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get graphqlQueryInput() {
    return this._graphqlQuery;
  }

  // graphql_variables - computed: false, optional: true, required: false
  private _graphqlVariables?: string; 
  public get graphqlVariables() {
    return this.getStringAttribute('graphql_variables');
  }
  public set graphqlVariables(value: string) {
    this._graphqlVariables = value;
  }
  public resetGraphqlVariables() {
    this._graphqlVariables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get graphqlVariablesInput() {
    return this._graphqlVariables;
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

  // on_error - computed: false, optional: true, required: false
  private _onError?: number; 
  public get onError() {
    return this.getNumberAttribute('on_error');
  }
  public set onError(value: number) {
    this._onError = value;
  }
  public resetOnError() {
    this._onError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onErrorInput() {
    return this._onError;
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

  // response_variables - computed: false, optional: true, required: false
  private _responseVariables?: { [key: string]: string }; 
  public get responseVariables() {
    return this.getStringMapAttribute('response_variables');
  }
  public set responseVariables(value: { [key: string]: string }) {
    this._responseVariables = value;
  }
  public resetResponseVariables() {
    this._responseVariables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseVariablesInput() {
    return this._responseVariables;
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

  // step_url - computed: false, optional: false, required: true
  private _stepUrl?: string; 
  public get stepUrl() {
    return this.getStringAttribute('step_url');
  }
  public set stepUrl(value: string) {
    this._stepUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stepUrlInput() {
    return this._stepUrl;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: string; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string) {
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
}

export class RestApiTransactionMonitorStepsStepDetailsList extends cdktf.ComplexList {
  public internalValue? : RestApiTransactionMonitorStepsStepDetails[] | cdktf.IResolvable

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
  public get(index: number): RestApiTransactionMonitorStepsStepDetailsOutputReference {
    return new RestApiTransactionMonitorStepsStepDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RestApiTransactionMonitorSteps {
  /**
  * Display Name for the monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/rest_api_transaction_monitor#display_name RestApiTransactionMonitor#display_name}
  */
  readonly displayName: string;
  /**
  * step_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/rest_api_transaction_monitor#step_details RestApiTransactionMonitor#step_details}
  */
  readonly stepDetails?: RestApiTransactionMonitorStepsStepDetails[] | cdktf.IResolvable;
}

export function restApiTransactionMonitorStepsToTerraform(struct?: RestApiTransactionMonitorSteps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_name: cdktf.stringToTerraform(struct!.displayName),
    step_details: cdktf.listMapper(restApiTransactionMonitorStepsStepDetailsToTerraform, true)(struct!.stepDetails),
  }
}


export function restApiTransactionMonitorStepsToHclTerraform(struct?: RestApiTransactionMonitorSteps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    step_details: {
      value: cdktf.listMapperHcl(restApiTransactionMonitorStepsStepDetailsToHclTerraform, true)(struct!.stepDetails),
      isBlock: true,
      type: "list",
      storageClassType: "RestApiTransactionMonitorStepsStepDetailsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RestApiTransactionMonitorStepsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): RestApiTransactionMonitorSteps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._stepDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stepDetails = this._stepDetails?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RestApiTransactionMonitorSteps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._displayName = undefined;
      this._stepDetails.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._displayName = value.displayName;
      this._stepDetails.internalValue = value.stepDetails;
    }
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

  // step_details - computed: false, optional: true, required: false
  private _stepDetails = new RestApiTransactionMonitorStepsStepDetailsList(this, "step_details", false);
  public get stepDetails() {
    return this._stepDetails;
  }
  public putStepDetails(value: RestApiTransactionMonitorStepsStepDetails[] | cdktf.IResolvable) {
    this._stepDetails.internalValue = value;
  }
  public resetStepDetails() {
    this._stepDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stepDetailsInput() {
    return this._stepDetails.internalValue;
  }
}

export class RestApiTransactionMonitorStepsList extends cdktf.ComplexList {
  public internalValue? : RestApiTransactionMonitorSteps[] | cdktf.IResolvable

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
  public get(index: number): RestApiTransactionMonitorStepsOutputReference {
    return new RestApiTransactionMonitorStepsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/rest_api_transaction_monitor site24x7_rest_api_transaction_monitor}
*/
export class RestApiTransactionMonitor extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "site24x7_rest_api_transaction_monitor";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RestApiTransactionMonitor resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RestApiTransactionMonitor to import
  * @param importFromId The id of the existing RestApiTransactionMonitor that should be imported. Refer to the {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/rest_api_transaction_monitor#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RestApiTransactionMonitor to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "site24x7_rest_api_transaction_monitor", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/rest_api_transaction_monitor site24x7_rest_api_transaction_monitor} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RestApiTransactionMonitorConfig
  */
  public constructor(scope: Construct, id: string, config: RestApiTransactionMonitorConfig) {
    super(scope, id, {
      terraformResourceType: 'site24x7_rest_api_transaction_monitor',
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
    this._checkFrequency = config.checkFrequency;
    this._dependencyResourceIds = config.dependencyResourceIds;
    this._displayName = config.displayName;
    this._id = config.id;
    this._locationProfileId = config.locationProfileId;
    this._locationProfileName = config.locationProfileName;
    this._monitorGroups = config.monitorGroups;
    this._notificationProfileId = config.notificationProfileId;
    this._notificationProfileName = config.notificationProfileName;
    this._tagIds = config.tagIds;
    this._tagNames = config.tagNames;
    this._thirdPartyServiceIds = config.thirdPartyServiceIds;
    this._thresholdProfileId = config.thresholdProfileId;
    this._userGroupIds = config.userGroupIds;
    this._userGroupNames = config.userGroupNames;
    this._steps.internalValue = config.steps;
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

  // steps - computed: false, optional: true, required: false
  private _steps = new RestApiTransactionMonitorStepsList(this, "steps", false);
  public get steps() {
    return this._steps;
  }
  public putSteps(value: RestApiTransactionMonitorSteps[] | cdktf.IResolvable) {
    this._steps.internalValue = value;
  }
  public resetSteps() {
    this._steps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stepsInput() {
    return this._steps.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      actions: cdktf.hashMapper(cdktf.stringToTerraform)(this._actions),
      check_frequency: cdktf.stringToTerraform(this._checkFrequency),
      dependency_resource_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dependencyResourceIds),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      location_profile_id: cdktf.stringToTerraform(this._locationProfileId),
      location_profile_name: cdktf.stringToTerraform(this._locationProfileName),
      monitor_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._monitorGroups),
      notification_profile_id: cdktf.stringToTerraform(this._notificationProfileId),
      notification_profile_name: cdktf.stringToTerraform(this._notificationProfileName),
      tag_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tagIds),
      tag_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tagNames),
      third_party_service_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._thirdPartyServiceIds),
      threshold_profile_id: cdktf.stringToTerraform(this._thresholdProfileId),
      user_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._userGroupIds),
      user_group_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._userGroupNames),
      steps: cdktf.listMapper(restApiTransactionMonitorStepsToTerraform, true)(this._steps.internalValue),
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
      steps: {
        value: cdktf.listMapperHcl(restApiTransactionMonitorStepsToHclTerraform, true)(this._steps.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RestApiTransactionMonitorStepsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
