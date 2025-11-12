// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_http_servlet_extension
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DefaultHttpServletExtensionConfig extends cdktf.TerraformMetaArguments {
  /**
  * When the `type` attribute is set to:
  *   - `delegated-admin`: The name of a scope that must be present in an access token accepted by the Delegated Admin HTTP Servlet Extension.
  *   - `directory-rest-api`: The name of a scope that must be present in an access token accepted by the Directory REST API HTTP Servlet Extension.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_http_servlet_extension#access_token_scope DefaultHttpServletExtension#access_token_scope}
  */
  readonly accessTokenScope?: string;
  /**
  * When the `type` attribute is set to:
  *   - `delegated-admin`: If specified, the Access Token Validator(s) that may be used to validate access tokens for requests submitted to this Delegated Admin HTTP Servlet Extension.
  *   - `consent`: If specified, the Access Token Validator(s) that may be used to validate access tokens for requests submitted to this Consent HTTP Servlet Extension.
  *   - `file-server`: The access token validators that may be used to verify the authenticity of an OAuth 2.0 bearer token.
  *   - `scim2`: If specified, the Access Token Validator(s) that may be used to validate access tokens for requests submitted to this SCIM2 HTTP Servlet Extension.
  *   - `directory-rest-api`: If specified, the Access Token Validator(s) that may be used to validate access tokens for requests submitted to this Directory REST API HTTP Servlet Extension.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_http_servlet_extension#access_token_validator DefaultHttpServletExtension#access_token_validator}
  */
  readonly accessTokenValidator?: string[];
  /**
  * A JSON-formatted string containing additional fields to be returned in the response body. For example, an additional-response-contents value of '{ "key": "value" }' would add the key and value to the root of the JSON response body.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_http_servlet_extension#additional_response_contents DefaultHttpServletExtension#additional_response_contents}
  */
  readonly additionalResponseContents?: string;
  /**
  * Indicates whether context providers may override existing context objects with new values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_http_servlet_extension#allow_context_override DefaultHttpServletExtension#allow_context_override}
  */
  readonly allowContextOverride?: boolean | cdktf.IResolvable;
  /**
  * The types of authentication that may be used to authenticate to the file servlet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_http_servlet_extension#allowed_authentication_type DefaultHttpServletExtension#allowed_authentication_type}
  */
  readonly allowedAuthenticationType?: string[];
  /**
  * Specifies the names of any request controls that should be allowed by the Directory REST API. Any request that contains a critical control not in this list will be rejected. Any non-critical request control which is not supported by the Directory REST API will be removed from the request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_http_servlet_extension#allowed_control DefaultHttpServletExtension#allowed_control}
  */
  readonly allowedControl?: string[];
  /**
  * Indicates whether generated metrics should always include a "monitor_entry" label whose value is the name of the monitor entry from which the metric was obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_http_servlet_extension#always_include_monitor_entry_name_label DefaultHttpServletExtension#always_include_monitor_entry_name_label}
  */
  readonly alwaysIncludeMonitorEntryNameLabel?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether to always use permissive modify behavior for PATCH requests, even if the request did not include the permissive modify request control.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_http_servlet_extension#always_use_permissive_modify DefaultHttpServletExtension#always_use_permissive_modify}
  */
  readonly alwaysUsePermissiveModify?: boolean | cdktf.IResolvable;
  /**
  * When the `type` attribute is set to:
  *   - `delegated-admin`: A string or URI that identifies the Delegated Admin HTTP Servlet Extension in the context of OAuth2 authorization.
  *   - `directory-rest-api`: A string or URI that identifies the Directory REST API HTTP Servlet Extension in the context of OAuth2 authorization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_http_servlet_extension#audience DefaultHttpServletExtension#audience}
  */
  readonly audience?: string;
  /**
  * Specifies the HTTP status code that the servlet should return if the server considers itself to be available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_http_servlet_extension#available_status_code DefaultHttpServletExtension#available_status_code}
  */
  readonly availableStatusCode?: number;
  /**
  * When the `type` attribute is set to:
  *   - One of [`availability-state`, `prometheus-monitoring`]: Specifies the base context path that HTTP clients should use to access this servlet. The value must start with a forward slash and must represent a valid HTTP context path.
  *   - `velocity`: The context path to use to access all template-based and static content. The value must start with a forward slash and must represent a valid HTTP context path.
  *   - `ldap-mapped-scim`: The context path to use to access the SCIM interface. The value must start with a forward slash and must represent a valid HTTP context path.
  *   - `file-server`: Specifies the base context path that should be used by HTTP clients to reference content. The value must start with a forward slash and must represent a valid HTTP context path.
  *   - `scim2`: The context path to use to access the SCIM 2.0 interface. The value must start with a forward slash and must represent a valid HTTP context path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_http_servlet_extension#base_context_path DefaultHttpServletExtension#base_context_path}
  */
  readonly baseContextPath?: string;
  /**
  * When the `type` attribute is set to:
  *   - One of [`delegated-admin`, `consent`, `directory-rest-api`]: Enables HTTP Basic authentication, using a username and password. The Identity Mapper specified by the identity-mapper property will be used to map the username to a DN.  NOTE: Basic authentication is considered less secure than OAuth2 bearer token authentication.
  *   - `ldap-mapped-scim`: Enables HTTP Basic authentication, using a username and password.  NOTE: Basic authentication is considered less secure than OAuth2 bearer token authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_http_servlet_extension#basic_auth_enabled DefaultHttpServletExtension#basic_auth_enabled}
  */
  readonly basicAuthEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enables HTTP bearer token authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_http_servlet_extension#bearer_token_auth_enabled DefaultHttpServletExtension#bearer_token_auth_enabled}
  */
  readonly bearerTokenAuthEnabled?: boolean | cdktf.IResolvable;
  /**
  * The maximum number of bulk requests that may be processed concurrently by the server. Any bulk request that would cause this limit to be exceeded is rejected with HTTP status code 503.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_http_servlet_extension#bulk_max_concurrent_requests DefaultHttpServletExtension#bulk_max_concurrent_requests}
  */
  readonly bulkMaxConcurrentRequests?: number;
  /**
  * The maximum number of operations that are permitted in a bulk request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_http_servlet_extension#bulk_max_operations DefaultHttpServletExtension#bulk_max_operations}
  */
  readonly bulkMaxOperations?: number;
  /**
  * The maximum payload size in bytes of a bulk request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_http_servlet_extension#bulk_max_payload_size DefaultHttpServletExtension#bulk_max_payload_size}
  */
  readonly bulkMaxPayloadSize?: string;
  /**
  * Specifies the value that will be used for all responses' Content-Type headers' charset parameter that indicates the character encoding of the document.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_http_servlet_extension#character_encoding DefaultHttpServletExtension#character_encoding}
  */
  readonly characterEncoding?: string;
  /**
  * Specifies the name of the HTTP response header that will contain a correlation ID value. Example values are "Correlation-Id", "X-Amzn-Trace-Id", and "X-Request-Id".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_http_servlet_extension#correlation_id_response_header DefaultHttpServletExtension#correlation_id_response_header}
  */
  readonly correlationIdResponseHeader?: string;
  /**
  * The cross-origin request policy to use for the HTTP Servlet Extension.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_http_servlet_extension#cross_origin_policy DefaultHttpServletExtension#cross_origin_policy}
  */
  readonly crossOriginPolicy?: string;
  /**
  * When the `type` attribute is set to:
  *   - `ldap-mapped-scim`: Enables debug logging of the SCIM SDK. Debug messages will be forwarded to the Directory Server debug logger with the scope of com.unboundid.directory.server.extensions.scim.SCIMHTTPServletExtension.
  *   - `scim2`: Enables debug logging of the SCIM 2.0 SDK. Debug messages will be forwarded to the Directory Server debug logger with the scope of com.unboundid.directory.broker.http.scim2.extension.SCIM2HTTPServletExtension.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_http_servlet_extension#debug_enabled DefaultHttpServletExtension#debug_enabled}
  */
  readonly debugEnabled?: boolean | cdktf.IResolvable;
  /**
  * The minimum debug level that should be used for messages to be logged.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_http_servlet_extension#debug_level DefaultHttpServletExtension#debug_level}
  */
  readonly debugLevel?: string;
  /**
  * The types of debug messages that should be logged.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_http_servlet_extension#debug_type DefaultHttpServletExtension#debug_type}
  */
  readonly debugType?: string[];
  /**
  * When the `type` attribute is set to:
  *   - `velocity`: Specifies the default value that will be used in the response's Content-Type header that indicates the type of content to return.
  *   - `file-server`: Specifies the default MIME type to use for the Content-Type header when a mapping cannot be found.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_http_servlet_extension#default_mime_type DefaultHttpServletExtension#default_mime_type}
  */
  readonly defaultMimeType?: string;
  /**
  * A set of operational attributes that will be returned with entries by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_http_servlet_extension#default_operational_attribute DefaultHttpServletExtension#default_operational_attribute}
  */
  readonly defaultOperationalAttribute?: string[];
  /**
  * Specifies the HTTP status code that the servlet should return if the server considers itself to be degraded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_http_servlet_extension#degraded_status_code DefaultHttpServletExtension#degraded_status_code}
  */
  readonly degradedStatusCode?: number;
  /**
  * A description for this HTTP Servlet Extension
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_http_servlet_extension#description DefaultHttpServletExtension#description}
  */
  readonly description?: string;
  /**
  * Specifies the path to the directory on the local filesystem containing the files to be served by this File Server HTTP Servlet Extension. The path must exist, and it must be a directory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_http_servlet_extension#document_root_directory DefaultHttpServletExtension#document_root_directory}
  */
  readonly documentRootDirectory?: string;
  /**
  * Indicates whether to generate a default HTML page with a listing of available files if the requested path refers to a directory rather than a file, and that directory does not contain an index file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_http_servlet_extension#enable_directory_indexing DefaultHttpServletExtension#enable_directory_indexing}
  */
  readonly enableDirectoryIndexing?: boolean | cdktf.IResolvable;
  /**
  * Specifies the LDAP attribute whose value should be used as the entity tag value to enable SCIM resource versioning support.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_http_servlet_extension#entity_tag_ldap_attribute DefaultHttpServletExtension#entity_tag_ldap_attribute}
  */
  readonly entityTagLdapAttribute?: string;
  /**
  * Specifies the base DNs for the branches of the DIT that should not be exposed via the Identity Access API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_http_servlet_extension#exclude_ldap_base_dn DefaultHttpServletExtension#exclude_ldap_base_dn}
  */
  readonly excludeLdapBaseDn?: string[];
  /**
  * Specifies the LDAP object classes that should be not be exposed directly as SCIM resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_http_servlet_extension#exclude_ldap_objectclass DefaultHttpServletExtension#exclude_ldap_objectclass}
  */
  readonly excludeLdapObjectclass?: string[];
  /**
  * Specifies whether the HTTP request will be exposed to templates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_http_servlet_extension#expose_request_attributes DefaultHttpServletExtension#expose_request_attributes}
  */
  readonly exposeRequestAttributes?: boolean | cdktf.IResolvable;
  /**
  * Specifies whether a server context will be exposed under context key 'ubid_server' for all template contexts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_http_servlet_extension#expose_server_context DefaultHttpServletExtension#expose_server_context}
  */
  readonly exposeServerContext?: boolean | cdktf.IResolvable;
  /**
  * Specifies whether the HTTP session will be exposed to templates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_http_servlet_extension#expose_session_attributes DefaultHttpServletExtension#expose_session_attributes}
  */
  readonly exposeSessionAttributes?: boolean | cdktf.IResolvable;
  /**
  * The set of arguments used to customize the behavior for the Third Party HTTP Servlet Extension. Each configuration property should be given in the form 'name=value'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_http_servlet_extension#extension_argument DefaultHttpServletExtension#extension_argument}
  */
  readonly extensionArgument?: string[];
  /**
  * The fully-qualified name of the Java class providing the logic for the Third Party HTTP Servlet Extension.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_http_servlet_extension#extension_class DefaultHttpServletExtension#extension_class}
  */
  readonly extensionClass?: string;
  /**
  * The ID token validators that may be used to verify the authenticity of an of an OpenID Connect ID token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_http_servlet_extension#id_token_validator DefaultHttpServletExtension#id_token_validator}
  */
  readonly idTokenValidator?: string[];
  /**
  * When the `type` attribute is set to:
  *   - `delegated-admin`: Specifies the Identity Mapper that is to be used for associating user entries with basic authentication user names.
  *   - `velocity`: Specifies the name of the identity mapper that is to be used for associating basic authentication credentials with user entries.
  *   - `consent`: Specifies the Identity Mapper that is to be used for associating basic authentication usernames with DNs.
  *   - `ldap-mapped-scim`: Specifies the name of the identity mapper that is to be used to match the username included in the HTTP Basic authentication header to the corresponding user in the directory.
  *   - `file-server`: The identity mapper that will be used to identify the entry with which a username is associated.
  *   - `config`: Specifies the name of the identity mapper that is to be used for associating user entries with basic authentication user names.
  *   - `directory-rest-api`: Specifies the Identity Mapper that is to be used for associating user entries with basic authentication usernames.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_http_servlet_extension#identity_mapper DefaultHttpServletExtension#identity_mapper}
  */
  readonly identityMapper?: string;
  /**
  * Indicates whether generated metrics should include an "instance" label whose value is the instance name for this Directory Server instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_http_servlet_extension#include_instance_name_label DefaultHttpServletExtension#include_instance_name_label}
  */
  readonly includeInstanceNameLabel?: boolean | cdktf.IResolvable;
  /**
  * Specifies the base DNs for the branches of the DIT that should be exposed via the Identity Access API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_http_servlet_extension#include_ldap_base_dn DefaultHttpServletExtension#include_ldap_base_dn}
  */
  readonly includeLdapBaseDn?: string[];
  /**
  * Specifies the LDAP object classes that should be exposed directly as SCIM resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_http_servlet_extension#include_ldap_objectclass DefaultHttpServletExtension#include_ldap_objectclass}
  */
  readonly includeLdapObjectclass?: string[];
  /**
  * Indicates whether generated metrics should include a "location" label whose value is the location name for this Directory Server instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_http_servlet_extension#include_location_name_label DefaultHttpServletExtension#include_location_name_label}
  */
  readonly includeLocationNameLabel?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether generated metrics should include a "monitor_attribute" label whose value is the name of the monitor attribute from which the metric was obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_http_servlet_extension#include_monitor_attribute_name_label DefaultHttpServletExtension#include_monitor_attribute_name_label}
  */
  readonly includeMonitorAttributeNameLabel?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether generated metrics should include a "monitor_object_class" label whose value is the name of the object class for the monitor entry from which the metric was obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_http_servlet_extension#include_monitor_object_class_name_label DefaultHttpServletExtension#include_monitor_object_class_name_label}
  */
  readonly includeMonitorObjectClassNameLabel?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether generated metrics should include a "product" label whose value is the product name for this Directory Server instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_http_servlet_extension#include_product_name_label DefaultHttpServletExtension#include_product_name_label}
  */
  readonly includeProductNameLabel?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether the response should include a body that is a JSON object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_http_servlet_extension#include_response_body DefaultHttpServletExtension#include_response_body}
  */
  readonly includeResponseBody?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether a stack trace of the thread which called the debug method should be included in debug log messages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_http_servlet_extension#include_stack_trace DefaultHttpServletExtension#include_stack_trace}
  */
  readonly includeStackTrace?: boolean | cdktf.IResolvable;
  /**
  * Specifies the name of a file whose contents may be returned to the client if the requested path refers to a directory rather than a file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_http_servlet_extension#index_file DefaultHttpServletExtension#index_file}
  */
  readonly indexFile?: string[];
  /**
  * A set of name-value pairs for labels that should be included in all metrics exposed by this Directory Server instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_http_servlet_extension#label_name_value_pair DefaultHttpServletExtension#label_name_value_pair}
  */
  readonly labelNameValuePair?: string[];
  /**
  * Indicates whether the SCIM2 servlet should attempt to map the presented access token to a local user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_http_servlet_extension#map_access_tokens_to_local_users DefaultHttpServletExtension#map_access_tokens_to_local_users}
  */
  readonly mapAccessTokensToLocalUsers?: string;
  /**
  * The maximum number of entries to be returned in one page of search results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_http_servlet_extension#max_page_size DefaultHttpServletExtension#max_page_size}
  */
  readonly maxPageSize?: number;
  /**
  * The maximum number of resources that are returned in a response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_http_servlet_extension#max_results DefaultHttpServletExtension#max_results}
  */
  readonly maxResults?: number;
  /**
  * When the `type` attribute is set to:
  *   - `velocity`: Specifies the path to a file that contains MIME type mappings that will be used to determine the appropriate value to return for the Content-Type header based on the extension of the requested static content file.
  *   - `file-server`: Specifies the path to a file that contains MIME type mappings that will be used to determine the appropriate value to return for the Content-Type header based on the extension of the requested file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_http_servlet_extension#mime_types_file DefaultHttpServletExtension#mime_types_file}
  */
  readonly mimeTypesFile?: string;
  /**
  * Name of this config object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_http_servlet_extension#name DefaultHttpServletExtension#name}
  */
  readonly name: string;
  /**
  * Specifies the OAuth Token Handler implementation that should be used to validate OAuth 2.0 bearer tokens when they are included in a SCIM request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_http_servlet_extension#oauth_token_handler DefaultHttpServletExtension#oauth_token_handler}
  */
  readonly oauthTokenHandler?: string;
  /**
  * Specifies a HTTP status code that the servlet should always return, regardless of the server's availability. If this value is defined, it will override the availability-based return codes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_http_servlet_extension#override_status_code DefaultHttpServletExtension#override_status_code}
  */
  readonly overrideStatusCode?: number;
  /**
  * A set of attributes which the client is not allowed to provide for the expand query parameters. This should be used for attributes that could either have a large number of values or that reference entries that are very large like groups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_http_servlet_extension#reject_expansion_attribute DefaultHttpServletExtension#reject_expansion_attribute}
  */
  readonly rejectExpansionAttribute?: string[];
  /**
  * When the `type` attribute is set to:
  *   - `velocity`: Require authentication when accessing Velocity templates.
  *   - `file-server`: Indicates whether the servlet extension should only accept requests from authenticated clients.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_http_servlet_extension#require_authentication DefaultHttpServletExtension#require_authentication}
  */
  readonly requireAuthentication?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether the servlet extension should only accept requests from authenticated clients that have the file-servlet-access privilege.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_http_servlet_extension#require_file_servlet_access_privilege DefaultHttpServletExtension#require_file_servlet_access_privilege}
  */
  readonly requireFileServletAccessPrivilege?: boolean | cdktf.IResolvable;
  /**
  * The DN of a group whose members will be permitted to access to the associated files. If multiple group DNs are configured, then anyone who is a member of at least one of those groups will be granted access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_http_servlet_extension#require_group DefaultHttpServletExtension#require_group}
  */
  readonly requireGroup?: string[];
  /**
  * The path to an XML file defining the resources supported by the SCIM interface and the SCIM-to-LDAP attribute mappings to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_http_servlet_extension#resource_mapping_file DefaultHttpServletExtension#resource_mapping_file}
  */
  readonly resourceMappingFile?: string;
  /**
  * When the `type` attribute is set to:
  *   - One of [`delegated-admin`, `quickstart`, `availability-state`, `prometheus-monitoring`, `consent`, `ldap-mapped-scim`, `groovy-scripted`, `file-server`, `config`, `scim2`, `directory-rest-api`, `third-party`]: Specifies HTTP header fields and values added to response headers for all requests.
  *   - `velocity`: Specifies HTTP header fields and values added to response headers for all template page requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_http_servlet_extension#response_header DefaultHttpServletExtension#response_header}
  */
  readonly responseHeader?: string[];
  /**
  * The list of object classes which will be returned by the schemas endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_http_servlet_extension#schemas_endpoint_objectclass DefaultHttpServletExtension#schemas_endpoint_objectclass}
  */
  readonly schemasEndpointObjectclass?: string[];
  /**
  * The set of arguments used to customize the behavior for the Scripted HTTP Servlet Extension. Each configuration property should be given in the form 'name=value'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_http_servlet_extension#script_argument DefaultHttpServletExtension#script_argument}
  */
  readonly scriptArgument?: string[];
  /**
  * The fully-qualified name of the Groovy class providing the logic for the Groovy Scripted HTTP Servlet Extension.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_http_servlet_extension#script_class DefaultHttpServletExtension#script_class}
  */
  readonly scriptClass?: string;
  /**
  * Specifies the PingFederate server to be configured.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_http_servlet_extension#server DefaultHttpServletExtension#server}
  */
  readonly server?: string;
  /**
  * Specifies the base directory in which static, non-template content such as images, CSS, and Javascript files are stored on the filesystem.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_http_servlet_extension#static_content_directory DefaultHttpServletExtension#static_content_directory}
  */
  readonly staticContentDirectory?: string;
  /**
  * The path below the base context path by which static, non-template content such as images, CSS, and Javascript files are accessible.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_http_servlet_extension#static_context_path DefaultHttpServletExtension#static_context_path}
  */
  readonly staticContextPath?: string;
  /**
  * Specifies the base directory in which custom static, non-template content such as images, CSS, and Javascript files are stored on the filesystem. Files in this directory will override those with the same name in the directory specified by the static-content-directory property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_http_servlet_extension#static_custom_directory DefaultHttpServletExtension#static_custom_directory}
  */
  readonly staticCustomDirectory?: string;
  /**
  * Specifies HTTP header fields and values added to response headers for static content requests such as images and scripts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_http_servlet_extension#static_response_header DefaultHttpServletExtension#static_response_header}
  */
  readonly staticResponseHeader?: string[];
  /**
  * Indicates whether the SCIM2 HTTP Servlet Extension will generate a Swagger specification document.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_http_servlet_extension#swagger_enabled DefaultHttpServletExtension#swagger_enabled}
  */
  readonly swaggerEnabled?: boolean | cdktf.IResolvable;
  /**
  * Specifies an ordered list of directories in which to search for the template files.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_http_servlet_extension#template_directory DefaultHttpServletExtension#template_directory}
  */
  readonly templateDirectory?: string[];
  /**
  * Specifies the location of the directory that is used to create temporary files containing SCIM request data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_http_servlet_extension#temporary_directory DefaultHttpServletExtension#temporary_directory}
  */
  readonly temporaryDirectory?: string;
  /**
  * Specifies the permissions that should be applied to the directory that is used to create temporary files.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_http_servlet_extension#temporary_directory_permissions DefaultHttpServletExtension#temporary_directory_permissions}
  */
  readonly temporaryDirectoryPermissions?: string;
  /**
  * Specifies the HTTP status code that the servlet should return if the server considers itself to be unavailable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_http_servlet_extension#unavailable_status_code DefaultHttpServletExtension#unavailable_status_code}
  */
  readonly unavailableStatusCode?: number;
}
export interface DefaultHttpServletExtensionRequiredActions {
}

export function defaultHttpServletExtensionRequiredActionsToTerraform(struct?: DefaultHttpServletExtensionRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function defaultHttpServletExtensionRequiredActionsToHclTerraform(struct?: DefaultHttpServletExtensionRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DefaultHttpServletExtensionRequiredActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DefaultHttpServletExtensionRequiredActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultHttpServletExtensionRequiredActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // property - computed: true, optional: false, required: false
  public get property() {
    return this.getStringAttribute('property');
  }

  // synopsis - computed: true, optional: false, required: false
  public get synopsis() {
    return this.getStringAttribute('synopsis');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DefaultHttpServletExtensionRequiredActionsList extends cdktf.ComplexList {

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
  public get(index: number): DefaultHttpServletExtensionRequiredActionsOutputReference {
    return new DefaultHttpServletExtensionRequiredActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_http_servlet_extension pingdirectory_default_http_servlet_extension}
*/
export class DefaultHttpServletExtension extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_default_http_servlet_extension";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DefaultHttpServletExtension resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DefaultHttpServletExtension to import
  * @param importFromId The id of the existing DefaultHttpServletExtension that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_http_servlet_extension#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DefaultHttpServletExtension to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_default_http_servlet_extension", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_http_servlet_extension pingdirectory_default_http_servlet_extension} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DefaultHttpServletExtensionConfig
  */
  public constructor(scope: Construct, id: string, config: DefaultHttpServletExtensionConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_default_http_servlet_extension',
      terraformGeneratorMetadata: {
        providerName: 'pingdirectory',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessTokenScope = config.accessTokenScope;
    this._accessTokenValidator = config.accessTokenValidator;
    this._additionalResponseContents = config.additionalResponseContents;
    this._allowContextOverride = config.allowContextOverride;
    this._allowedAuthenticationType = config.allowedAuthenticationType;
    this._allowedControl = config.allowedControl;
    this._alwaysIncludeMonitorEntryNameLabel = config.alwaysIncludeMonitorEntryNameLabel;
    this._alwaysUsePermissiveModify = config.alwaysUsePermissiveModify;
    this._audience = config.audience;
    this._availableStatusCode = config.availableStatusCode;
    this._baseContextPath = config.baseContextPath;
    this._basicAuthEnabled = config.basicAuthEnabled;
    this._bearerTokenAuthEnabled = config.bearerTokenAuthEnabled;
    this._bulkMaxConcurrentRequests = config.bulkMaxConcurrentRequests;
    this._bulkMaxOperations = config.bulkMaxOperations;
    this._bulkMaxPayloadSize = config.bulkMaxPayloadSize;
    this._characterEncoding = config.characterEncoding;
    this._correlationIdResponseHeader = config.correlationIdResponseHeader;
    this._crossOriginPolicy = config.crossOriginPolicy;
    this._debugEnabled = config.debugEnabled;
    this._debugLevel = config.debugLevel;
    this._debugType = config.debugType;
    this._defaultMimeType = config.defaultMimeType;
    this._defaultOperationalAttribute = config.defaultOperationalAttribute;
    this._degradedStatusCode = config.degradedStatusCode;
    this._description = config.description;
    this._documentRootDirectory = config.documentRootDirectory;
    this._enableDirectoryIndexing = config.enableDirectoryIndexing;
    this._entityTagLdapAttribute = config.entityTagLdapAttribute;
    this._excludeLdapBaseDn = config.excludeLdapBaseDn;
    this._excludeLdapObjectclass = config.excludeLdapObjectclass;
    this._exposeRequestAttributes = config.exposeRequestAttributes;
    this._exposeServerContext = config.exposeServerContext;
    this._exposeSessionAttributes = config.exposeSessionAttributes;
    this._extensionArgument = config.extensionArgument;
    this._extensionClass = config.extensionClass;
    this._idTokenValidator = config.idTokenValidator;
    this._identityMapper = config.identityMapper;
    this._includeInstanceNameLabel = config.includeInstanceNameLabel;
    this._includeLdapBaseDn = config.includeLdapBaseDn;
    this._includeLdapObjectclass = config.includeLdapObjectclass;
    this._includeLocationNameLabel = config.includeLocationNameLabel;
    this._includeMonitorAttributeNameLabel = config.includeMonitorAttributeNameLabel;
    this._includeMonitorObjectClassNameLabel = config.includeMonitorObjectClassNameLabel;
    this._includeProductNameLabel = config.includeProductNameLabel;
    this._includeResponseBody = config.includeResponseBody;
    this._includeStackTrace = config.includeStackTrace;
    this._indexFile = config.indexFile;
    this._labelNameValuePair = config.labelNameValuePair;
    this._mapAccessTokensToLocalUsers = config.mapAccessTokensToLocalUsers;
    this._maxPageSize = config.maxPageSize;
    this._maxResults = config.maxResults;
    this._mimeTypesFile = config.mimeTypesFile;
    this._name = config.name;
    this._oauthTokenHandler = config.oauthTokenHandler;
    this._overrideStatusCode = config.overrideStatusCode;
    this._rejectExpansionAttribute = config.rejectExpansionAttribute;
    this._requireAuthentication = config.requireAuthentication;
    this._requireFileServletAccessPrivilege = config.requireFileServletAccessPrivilege;
    this._requireGroup = config.requireGroup;
    this._resourceMappingFile = config.resourceMappingFile;
    this._responseHeader = config.responseHeader;
    this._schemasEndpointObjectclass = config.schemasEndpointObjectclass;
    this._scriptArgument = config.scriptArgument;
    this._scriptClass = config.scriptClass;
    this._server = config.server;
    this._staticContentDirectory = config.staticContentDirectory;
    this._staticContextPath = config.staticContextPath;
    this._staticCustomDirectory = config.staticCustomDirectory;
    this._staticResponseHeader = config.staticResponseHeader;
    this._swaggerEnabled = config.swaggerEnabled;
    this._templateDirectory = config.templateDirectory;
    this._temporaryDirectory = config.temporaryDirectory;
    this._temporaryDirectoryPermissions = config.temporaryDirectoryPermissions;
    this._unavailableStatusCode = config.unavailableStatusCode;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_token_scope - computed: true, optional: true, required: false
  private _accessTokenScope?: string; 
  public get accessTokenScope() {
    return this.getStringAttribute('access_token_scope');
  }
  public set accessTokenScope(value: string) {
    this._accessTokenScope = value;
  }
  public resetAccessTokenScope() {
    this._accessTokenScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenScopeInput() {
    return this._accessTokenScope;
  }

  // access_token_validator - computed: true, optional: true, required: false
  private _accessTokenValidator?: string[]; 
  public get accessTokenValidator() {
    return cdktf.Fn.tolist(this.getListAttribute('access_token_validator'));
  }
  public set accessTokenValidator(value: string[]) {
    this._accessTokenValidator = value;
  }
  public resetAccessTokenValidator() {
    this._accessTokenValidator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenValidatorInput() {
    return this._accessTokenValidator;
  }

  // additional_response_contents - computed: true, optional: true, required: false
  private _additionalResponseContents?: string; 
  public get additionalResponseContents() {
    return this.getStringAttribute('additional_response_contents');
  }
  public set additionalResponseContents(value: string) {
    this._additionalResponseContents = value;
  }
  public resetAdditionalResponseContents() {
    this._additionalResponseContents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalResponseContentsInput() {
    return this._additionalResponseContents;
  }

  // allow_context_override - computed: true, optional: true, required: false
  private _allowContextOverride?: boolean | cdktf.IResolvable; 
  public get allowContextOverride() {
    return this.getBooleanAttribute('allow_context_override');
  }
  public set allowContextOverride(value: boolean | cdktf.IResolvable) {
    this._allowContextOverride = value;
  }
  public resetAllowContextOverride() {
    this._allowContextOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowContextOverrideInput() {
    return this._allowContextOverride;
  }

  // allowed_authentication_type - computed: true, optional: true, required: false
  private _allowedAuthenticationType?: string[]; 
  public get allowedAuthenticationType() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_authentication_type'));
  }
  public set allowedAuthenticationType(value: string[]) {
    this._allowedAuthenticationType = value;
  }
  public resetAllowedAuthenticationType() {
    this._allowedAuthenticationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedAuthenticationTypeInput() {
    return this._allowedAuthenticationType;
  }

  // allowed_control - computed: true, optional: true, required: false
  private _allowedControl?: string[]; 
  public get allowedControl() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_control'));
  }
  public set allowedControl(value: string[]) {
    this._allowedControl = value;
  }
  public resetAllowedControl() {
    this._allowedControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedControlInput() {
    return this._allowedControl;
  }

  // always_include_monitor_entry_name_label - computed: true, optional: true, required: false
  private _alwaysIncludeMonitorEntryNameLabel?: boolean | cdktf.IResolvable; 
  public get alwaysIncludeMonitorEntryNameLabel() {
    return this.getBooleanAttribute('always_include_monitor_entry_name_label');
  }
  public set alwaysIncludeMonitorEntryNameLabel(value: boolean | cdktf.IResolvable) {
    this._alwaysIncludeMonitorEntryNameLabel = value;
  }
  public resetAlwaysIncludeMonitorEntryNameLabel() {
    this._alwaysIncludeMonitorEntryNameLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alwaysIncludeMonitorEntryNameLabelInput() {
    return this._alwaysIncludeMonitorEntryNameLabel;
  }

  // always_use_permissive_modify - computed: true, optional: true, required: false
  private _alwaysUsePermissiveModify?: boolean | cdktf.IResolvable; 
  public get alwaysUsePermissiveModify() {
    return this.getBooleanAttribute('always_use_permissive_modify');
  }
  public set alwaysUsePermissiveModify(value: boolean | cdktf.IResolvable) {
    this._alwaysUsePermissiveModify = value;
  }
  public resetAlwaysUsePermissiveModify() {
    this._alwaysUsePermissiveModify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alwaysUsePermissiveModifyInput() {
    return this._alwaysUsePermissiveModify;
  }

  // audience - computed: true, optional: true, required: false
  private _audience?: string; 
  public get audience() {
    return this.getStringAttribute('audience');
  }
  public set audience(value: string) {
    this._audience = value;
  }
  public resetAudience() {
    this._audience = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audienceInput() {
    return this._audience;
  }

  // available_status_code - computed: true, optional: true, required: false
  private _availableStatusCode?: number; 
  public get availableStatusCode() {
    return this.getNumberAttribute('available_status_code');
  }
  public set availableStatusCode(value: number) {
    this._availableStatusCode = value;
  }
  public resetAvailableStatusCode() {
    this._availableStatusCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availableStatusCodeInput() {
    return this._availableStatusCode;
  }

  // base_context_path - computed: true, optional: true, required: false
  private _baseContextPath?: string; 
  public get baseContextPath() {
    return this.getStringAttribute('base_context_path');
  }
  public set baseContextPath(value: string) {
    this._baseContextPath = value;
  }
  public resetBaseContextPath() {
    this._baseContextPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseContextPathInput() {
    return this._baseContextPath;
  }

  // basic_auth_enabled - computed: true, optional: true, required: false
  private _basicAuthEnabled?: boolean | cdktf.IResolvable; 
  public get basicAuthEnabled() {
    return this.getBooleanAttribute('basic_auth_enabled');
  }
  public set basicAuthEnabled(value: boolean | cdktf.IResolvable) {
    this._basicAuthEnabled = value;
  }
  public resetBasicAuthEnabled() {
    this._basicAuthEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicAuthEnabledInput() {
    return this._basicAuthEnabled;
  }

  // bearer_token_auth_enabled - computed: true, optional: true, required: false
  private _bearerTokenAuthEnabled?: boolean | cdktf.IResolvable; 
  public get bearerTokenAuthEnabled() {
    return this.getBooleanAttribute('bearer_token_auth_enabled');
  }
  public set bearerTokenAuthEnabled(value: boolean | cdktf.IResolvable) {
    this._bearerTokenAuthEnabled = value;
  }
  public resetBearerTokenAuthEnabled() {
    this._bearerTokenAuthEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bearerTokenAuthEnabledInput() {
    return this._bearerTokenAuthEnabled;
  }

  // bulk_max_concurrent_requests - computed: true, optional: true, required: false
  private _bulkMaxConcurrentRequests?: number; 
  public get bulkMaxConcurrentRequests() {
    return this.getNumberAttribute('bulk_max_concurrent_requests');
  }
  public set bulkMaxConcurrentRequests(value: number) {
    this._bulkMaxConcurrentRequests = value;
  }
  public resetBulkMaxConcurrentRequests() {
    this._bulkMaxConcurrentRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bulkMaxConcurrentRequestsInput() {
    return this._bulkMaxConcurrentRequests;
  }

  // bulk_max_operations - computed: true, optional: true, required: false
  private _bulkMaxOperations?: number; 
  public get bulkMaxOperations() {
    return this.getNumberAttribute('bulk_max_operations');
  }
  public set bulkMaxOperations(value: number) {
    this._bulkMaxOperations = value;
  }
  public resetBulkMaxOperations() {
    this._bulkMaxOperations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bulkMaxOperationsInput() {
    return this._bulkMaxOperations;
  }

  // bulk_max_payload_size - computed: true, optional: true, required: false
  private _bulkMaxPayloadSize?: string; 
  public get bulkMaxPayloadSize() {
    return this.getStringAttribute('bulk_max_payload_size');
  }
  public set bulkMaxPayloadSize(value: string) {
    this._bulkMaxPayloadSize = value;
  }
  public resetBulkMaxPayloadSize() {
    this._bulkMaxPayloadSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bulkMaxPayloadSizeInput() {
    return this._bulkMaxPayloadSize;
  }

  // character_encoding - computed: true, optional: true, required: false
  private _characterEncoding?: string; 
  public get characterEncoding() {
    return this.getStringAttribute('character_encoding');
  }
  public set characterEncoding(value: string) {
    this._characterEncoding = value;
  }
  public resetCharacterEncoding() {
    this._characterEncoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get characterEncodingInput() {
    return this._characterEncoding;
  }

  // correlation_id_response_header - computed: true, optional: true, required: false
  private _correlationIdResponseHeader?: string; 
  public get correlationIdResponseHeader() {
    return this.getStringAttribute('correlation_id_response_header');
  }
  public set correlationIdResponseHeader(value: string) {
    this._correlationIdResponseHeader = value;
  }
  public resetCorrelationIdResponseHeader() {
    this._correlationIdResponseHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get correlationIdResponseHeaderInput() {
    return this._correlationIdResponseHeader;
  }

  // cross_origin_policy - computed: true, optional: true, required: false
  private _crossOriginPolicy?: string; 
  public get crossOriginPolicy() {
    return this.getStringAttribute('cross_origin_policy');
  }
  public set crossOriginPolicy(value: string) {
    this._crossOriginPolicy = value;
  }
  public resetCrossOriginPolicy() {
    this._crossOriginPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossOriginPolicyInput() {
    return this._crossOriginPolicy;
  }

  // debug_enabled - computed: true, optional: true, required: false
  private _debugEnabled?: boolean | cdktf.IResolvable; 
  public get debugEnabled() {
    return this.getBooleanAttribute('debug_enabled');
  }
  public set debugEnabled(value: boolean | cdktf.IResolvable) {
    this._debugEnabled = value;
  }
  public resetDebugEnabled() {
    this._debugEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugEnabledInput() {
    return this._debugEnabled;
  }

  // debug_level - computed: true, optional: true, required: false
  private _debugLevel?: string; 
  public get debugLevel() {
    return this.getStringAttribute('debug_level');
  }
  public set debugLevel(value: string) {
    this._debugLevel = value;
  }
  public resetDebugLevel() {
    this._debugLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugLevelInput() {
    return this._debugLevel;
  }

  // debug_type - computed: true, optional: true, required: false
  private _debugType?: string[]; 
  public get debugType() {
    return cdktf.Fn.tolist(this.getListAttribute('debug_type'));
  }
  public set debugType(value: string[]) {
    this._debugType = value;
  }
  public resetDebugType() {
    this._debugType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugTypeInput() {
    return this._debugType;
  }

  // default_mime_type - computed: true, optional: true, required: false
  private _defaultMimeType?: string; 
  public get defaultMimeType() {
    return this.getStringAttribute('default_mime_type');
  }
  public set defaultMimeType(value: string) {
    this._defaultMimeType = value;
  }
  public resetDefaultMimeType() {
    this._defaultMimeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultMimeTypeInput() {
    return this._defaultMimeType;
  }

  // default_operational_attribute - computed: true, optional: true, required: false
  private _defaultOperationalAttribute?: string[]; 
  public get defaultOperationalAttribute() {
    return cdktf.Fn.tolist(this.getListAttribute('default_operational_attribute'));
  }
  public set defaultOperationalAttribute(value: string[]) {
    this._defaultOperationalAttribute = value;
  }
  public resetDefaultOperationalAttribute() {
    this._defaultOperationalAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultOperationalAttributeInput() {
    return this._defaultOperationalAttribute;
  }

  // degraded_status_code - computed: true, optional: true, required: false
  private _degradedStatusCode?: number; 
  public get degradedStatusCode() {
    return this.getNumberAttribute('degraded_status_code');
  }
  public set degradedStatusCode(value: number) {
    this._degradedStatusCode = value;
  }
  public resetDegradedStatusCode() {
    this._degradedStatusCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get degradedStatusCodeInput() {
    return this._degradedStatusCode;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // document_root_directory - computed: true, optional: true, required: false
  private _documentRootDirectory?: string; 
  public get documentRootDirectory() {
    return this.getStringAttribute('document_root_directory');
  }
  public set documentRootDirectory(value: string) {
    this._documentRootDirectory = value;
  }
  public resetDocumentRootDirectory() {
    this._documentRootDirectory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get documentRootDirectoryInput() {
    return this._documentRootDirectory;
  }

  // enable_directory_indexing - computed: true, optional: true, required: false
  private _enableDirectoryIndexing?: boolean | cdktf.IResolvable; 
  public get enableDirectoryIndexing() {
    return this.getBooleanAttribute('enable_directory_indexing');
  }
  public set enableDirectoryIndexing(value: boolean | cdktf.IResolvable) {
    this._enableDirectoryIndexing = value;
  }
  public resetEnableDirectoryIndexing() {
    this._enableDirectoryIndexing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDirectoryIndexingInput() {
    return this._enableDirectoryIndexing;
  }

  // entity_tag_ldap_attribute - computed: true, optional: true, required: false
  private _entityTagLdapAttribute?: string; 
  public get entityTagLdapAttribute() {
    return this.getStringAttribute('entity_tag_ldap_attribute');
  }
  public set entityTagLdapAttribute(value: string) {
    this._entityTagLdapAttribute = value;
  }
  public resetEntityTagLdapAttribute() {
    this._entityTagLdapAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityTagLdapAttributeInput() {
    return this._entityTagLdapAttribute;
  }

  // exclude_ldap_base_dn - computed: true, optional: true, required: false
  private _excludeLdapBaseDn?: string[]; 
  public get excludeLdapBaseDn() {
    return cdktf.Fn.tolist(this.getListAttribute('exclude_ldap_base_dn'));
  }
  public set excludeLdapBaseDn(value: string[]) {
    this._excludeLdapBaseDn = value;
  }
  public resetExcludeLdapBaseDn() {
    this._excludeLdapBaseDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeLdapBaseDnInput() {
    return this._excludeLdapBaseDn;
  }

  // exclude_ldap_objectclass - computed: true, optional: true, required: false
  private _excludeLdapObjectclass?: string[]; 
  public get excludeLdapObjectclass() {
    return cdktf.Fn.tolist(this.getListAttribute('exclude_ldap_objectclass'));
  }
  public set excludeLdapObjectclass(value: string[]) {
    this._excludeLdapObjectclass = value;
  }
  public resetExcludeLdapObjectclass() {
    this._excludeLdapObjectclass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeLdapObjectclassInput() {
    return this._excludeLdapObjectclass;
  }

  // expose_request_attributes - computed: true, optional: true, required: false
  private _exposeRequestAttributes?: boolean | cdktf.IResolvable; 
  public get exposeRequestAttributes() {
    return this.getBooleanAttribute('expose_request_attributes');
  }
  public set exposeRequestAttributes(value: boolean | cdktf.IResolvable) {
    this._exposeRequestAttributes = value;
  }
  public resetExposeRequestAttributes() {
    this._exposeRequestAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exposeRequestAttributesInput() {
    return this._exposeRequestAttributes;
  }

  // expose_server_context - computed: true, optional: true, required: false
  private _exposeServerContext?: boolean | cdktf.IResolvable; 
  public get exposeServerContext() {
    return this.getBooleanAttribute('expose_server_context');
  }
  public set exposeServerContext(value: boolean | cdktf.IResolvable) {
    this._exposeServerContext = value;
  }
  public resetExposeServerContext() {
    this._exposeServerContext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exposeServerContextInput() {
    return this._exposeServerContext;
  }

  // expose_session_attributes - computed: true, optional: true, required: false
  private _exposeSessionAttributes?: boolean | cdktf.IResolvable; 
  public get exposeSessionAttributes() {
    return this.getBooleanAttribute('expose_session_attributes');
  }
  public set exposeSessionAttributes(value: boolean | cdktf.IResolvable) {
    this._exposeSessionAttributes = value;
  }
  public resetExposeSessionAttributes() {
    this._exposeSessionAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exposeSessionAttributesInput() {
    return this._exposeSessionAttributes;
  }

  // extension_argument - computed: true, optional: true, required: false
  private _extensionArgument?: string[]; 
  public get extensionArgument() {
    return cdktf.Fn.tolist(this.getListAttribute('extension_argument'));
  }
  public set extensionArgument(value: string[]) {
    this._extensionArgument = value;
  }
  public resetExtensionArgument() {
    this._extensionArgument = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionArgumentInput() {
    return this._extensionArgument;
  }

  // extension_class - computed: true, optional: true, required: false
  private _extensionClass?: string; 
  public get extensionClass() {
    return this.getStringAttribute('extension_class');
  }
  public set extensionClass(value: string) {
    this._extensionClass = value;
  }
  public resetExtensionClass() {
    this._extensionClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionClassInput() {
    return this._extensionClass;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // id_token_validator - computed: true, optional: true, required: false
  private _idTokenValidator?: string[]; 
  public get idTokenValidator() {
    return cdktf.Fn.tolist(this.getListAttribute('id_token_validator'));
  }
  public set idTokenValidator(value: string[]) {
    this._idTokenValidator = value;
  }
  public resetIdTokenValidator() {
    this._idTokenValidator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idTokenValidatorInput() {
    return this._idTokenValidator;
  }

  // identity_mapper - computed: true, optional: true, required: false
  private _identityMapper?: string; 
  public get identityMapper() {
    return this.getStringAttribute('identity_mapper');
  }
  public set identityMapper(value: string) {
    this._identityMapper = value;
  }
  public resetIdentityMapper() {
    this._identityMapper = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityMapperInput() {
    return this._identityMapper;
  }

  // include_instance_name_label - computed: true, optional: true, required: false
  private _includeInstanceNameLabel?: boolean | cdktf.IResolvable; 
  public get includeInstanceNameLabel() {
    return this.getBooleanAttribute('include_instance_name_label');
  }
  public set includeInstanceNameLabel(value: boolean | cdktf.IResolvable) {
    this._includeInstanceNameLabel = value;
  }
  public resetIncludeInstanceNameLabel() {
    this._includeInstanceNameLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInstanceNameLabelInput() {
    return this._includeInstanceNameLabel;
  }

  // include_ldap_base_dn - computed: true, optional: true, required: false
  private _includeLdapBaseDn?: string[]; 
  public get includeLdapBaseDn() {
    return cdktf.Fn.tolist(this.getListAttribute('include_ldap_base_dn'));
  }
  public set includeLdapBaseDn(value: string[]) {
    this._includeLdapBaseDn = value;
  }
  public resetIncludeLdapBaseDn() {
    this._includeLdapBaseDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeLdapBaseDnInput() {
    return this._includeLdapBaseDn;
  }

  // include_ldap_objectclass - computed: true, optional: true, required: false
  private _includeLdapObjectclass?: string[]; 
  public get includeLdapObjectclass() {
    return cdktf.Fn.tolist(this.getListAttribute('include_ldap_objectclass'));
  }
  public set includeLdapObjectclass(value: string[]) {
    this._includeLdapObjectclass = value;
  }
  public resetIncludeLdapObjectclass() {
    this._includeLdapObjectclass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeLdapObjectclassInput() {
    return this._includeLdapObjectclass;
  }

  // include_location_name_label - computed: true, optional: true, required: false
  private _includeLocationNameLabel?: boolean | cdktf.IResolvable; 
  public get includeLocationNameLabel() {
    return this.getBooleanAttribute('include_location_name_label');
  }
  public set includeLocationNameLabel(value: boolean | cdktf.IResolvable) {
    this._includeLocationNameLabel = value;
  }
  public resetIncludeLocationNameLabel() {
    this._includeLocationNameLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeLocationNameLabelInput() {
    return this._includeLocationNameLabel;
  }

  // include_monitor_attribute_name_label - computed: true, optional: true, required: false
  private _includeMonitorAttributeNameLabel?: boolean | cdktf.IResolvable; 
  public get includeMonitorAttributeNameLabel() {
    return this.getBooleanAttribute('include_monitor_attribute_name_label');
  }
  public set includeMonitorAttributeNameLabel(value: boolean | cdktf.IResolvable) {
    this._includeMonitorAttributeNameLabel = value;
  }
  public resetIncludeMonitorAttributeNameLabel() {
    this._includeMonitorAttributeNameLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeMonitorAttributeNameLabelInput() {
    return this._includeMonitorAttributeNameLabel;
  }

  // include_monitor_object_class_name_label - computed: true, optional: true, required: false
  private _includeMonitorObjectClassNameLabel?: boolean | cdktf.IResolvable; 
  public get includeMonitorObjectClassNameLabel() {
    return this.getBooleanAttribute('include_monitor_object_class_name_label');
  }
  public set includeMonitorObjectClassNameLabel(value: boolean | cdktf.IResolvable) {
    this._includeMonitorObjectClassNameLabel = value;
  }
  public resetIncludeMonitorObjectClassNameLabel() {
    this._includeMonitorObjectClassNameLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeMonitorObjectClassNameLabelInput() {
    return this._includeMonitorObjectClassNameLabel;
  }

  // include_product_name_label - computed: true, optional: true, required: false
  private _includeProductNameLabel?: boolean | cdktf.IResolvable; 
  public get includeProductNameLabel() {
    return this.getBooleanAttribute('include_product_name_label');
  }
  public set includeProductNameLabel(value: boolean | cdktf.IResolvable) {
    this._includeProductNameLabel = value;
  }
  public resetIncludeProductNameLabel() {
    this._includeProductNameLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeProductNameLabelInput() {
    return this._includeProductNameLabel;
  }

  // include_response_body - computed: true, optional: true, required: false
  private _includeResponseBody?: boolean | cdktf.IResolvable; 
  public get includeResponseBody() {
    return this.getBooleanAttribute('include_response_body');
  }
  public set includeResponseBody(value: boolean | cdktf.IResolvable) {
    this._includeResponseBody = value;
  }
  public resetIncludeResponseBody() {
    this._includeResponseBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeResponseBodyInput() {
    return this._includeResponseBody;
  }

  // include_stack_trace - computed: true, optional: true, required: false
  private _includeStackTrace?: boolean | cdktf.IResolvable; 
  public get includeStackTrace() {
    return this.getBooleanAttribute('include_stack_trace');
  }
  public set includeStackTrace(value: boolean | cdktf.IResolvable) {
    this._includeStackTrace = value;
  }
  public resetIncludeStackTrace() {
    this._includeStackTrace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeStackTraceInput() {
    return this._includeStackTrace;
  }

  // index_file - computed: true, optional: true, required: false
  private _indexFile?: string[]; 
  public get indexFile() {
    return cdktf.Fn.tolist(this.getListAttribute('index_file'));
  }
  public set indexFile(value: string[]) {
    this._indexFile = value;
  }
  public resetIndexFile() {
    this._indexFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexFileInput() {
    return this._indexFile;
  }

  // label_name_value_pair - computed: true, optional: true, required: false
  private _labelNameValuePair?: string[]; 
  public get labelNameValuePair() {
    return cdktf.Fn.tolist(this.getListAttribute('label_name_value_pair'));
  }
  public set labelNameValuePair(value: string[]) {
    this._labelNameValuePair = value;
  }
  public resetLabelNameValuePair() {
    this._labelNameValuePair = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelNameValuePairInput() {
    return this._labelNameValuePair;
  }

  // map_access_tokens_to_local_users - computed: true, optional: true, required: false
  private _mapAccessTokensToLocalUsers?: string; 
  public get mapAccessTokensToLocalUsers() {
    return this.getStringAttribute('map_access_tokens_to_local_users');
  }
  public set mapAccessTokensToLocalUsers(value: string) {
    this._mapAccessTokensToLocalUsers = value;
  }
  public resetMapAccessTokensToLocalUsers() {
    this._mapAccessTokensToLocalUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mapAccessTokensToLocalUsersInput() {
    return this._mapAccessTokensToLocalUsers;
  }

  // max_page_size - computed: true, optional: true, required: false
  private _maxPageSize?: number; 
  public get maxPageSize() {
    return this.getNumberAttribute('max_page_size');
  }
  public set maxPageSize(value: number) {
    this._maxPageSize = value;
  }
  public resetMaxPageSize() {
    this._maxPageSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPageSizeInput() {
    return this._maxPageSize;
  }

  // max_results - computed: true, optional: true, required: false
  private _maxResults?: number; 
  public get maxResults() {
    return this.getNumberAttribute('max_results');
  }
  public set maxResults(value: number) {
    this._maxResults = value;
  }
  public resetMaxResults() {
    this._maxResults = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxResultsInput() {
    return this._maxResults;
  }

  // mime_types_file - computed: true, optional: true, required: false
  private _mimeTypesFile?: string; 
  public get mimeTypesFile() {
    return this.getStringAttribute('mime_types_file');
  }
  public set mimeTypesFile(value: string) {
    this._mimeTypesFile = value;
  }
  public resetMimeTypesFile() {
    this._mimeTypesFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mimeTypesFileInput() {
    return this._mimeTypesFile;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // notifications - computed: true, optional: false, required: false
  public get notifications() {
    return cdktf.Fn.tolist(this.getListAttribute('notifications'));
  }

  // oauth_token_handler - computed: true, optional: true, required: false
  private _oauthTokenHandler?: string; 
  public get oauthTokenHandler() {
    return this.getStringAttribute('oauth_token_handler');
  }
  public set oauthTokenHandler(value: string) {
    this._oauthTokenHandler = value;
  }
  public resetOauthTokenHandler() {
    this._oauthTokenHandler = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthTokenHandlerInput() {
    return this._oauthTokenHandler;
  }

  // override_status_code - computed: true, optional: true, required: false
  private _overrideStatusCode?: number; 
  public get overrideStatusCode() {
    return this.getNumberAttribute('override_status_code');
  }
  public set overrideStatusCode(value: number) {
    this._overrideStatusCode = value;
  }
  public resetOverrideStatusCode() {
    this._overrideStatusCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideStatusCodeInput() {
    return this._overrideStatusCode;
  }

  // reject_expansion_attribute - computed: true, optional: true, required: false
  private _rejectExpansionAttribute?: string[]; 
  public get rejectExpansionAttribute() {
    return cdktf.Fn.tolist(this.getListAttribute('reject_expansion_attribute'));
  }
  public set rejectExpansionAttribute(value: string[]) {
    this._rejectExpansionAttribute = value;
  }
  public resetRejectExpansionAttribute() {
    this._rejectExpansionAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rejectExpansionAttributeInput() {
    return this._rejectExpansionAttribute;
  }

  // require_authentication - computed: true, optional: true, required: false
  private _requireAuthentication?: boolean | cdktf.IResolvable; 
  public get requireAuthentication() {
    return this.getBooleanAttribute('require_authentication');
  }
  public set requireAuthentication(value: boolean | cdktf.IResolvable) {
    this._requireAuthentication = value;
  }
  public resetRequireAuthentication() {
    this._requireAuthentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireAuthenticationInput() {
    return this._requireAuthentication;
  }

  // require_file_servlet_access_privilege - computed: true, optional: true, required: false
  private _requireFileServletAccessPrivilege?: boolean | cdktf.IResolvable; 
  public get requireFileServletAccessPrivilege() {
    return this.getBooleanAttribute('require_file_servlet_access_privilege');
  }
  public set requireFileServletAccessPrivilege(value: boolean | cdktf.IResolvable) {
    this._requireFileServletAccessPrivilege = value;
  }
  public resetRequireFileServletAccessPrivilege() {
    this._requireFileServletAccessPrivilege = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireFileServletAccessPrivilegeInput() {
    return this._requireFileServletAccessPrivilege;
  }

  // require_group - computed: true, optional: true, required: false
  private _requireGroup?: string[]; 
  public get requireGroup() {
    return cdktf.Fn.tolist(this.getListAttribute('require_group'));
  }
  public set requireGroup(value: string[]) {
    this._requireGroup = value;
  }
  public resetRequireGroup() {
    this._requireGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireGroupInput() {
    return this._requireGroup;
  }

  // required_actions - computed: true, optional: false, required: false
  private _requiredActions = new DefaultHttpServletExtensionRequiredActionsList(this, "required_actions", true);
  public get requiredActions() {
    return this._requiredActions;
  }

  // resource_mapping_file - computed: true, optional: true, required: false
  private _resourceMappingFile?: string; 
  public get resourceMappingFile() {
    return this.getStringAttribute('resource_mapping_file');
  }
  public set resourceMappingFile(value: string) {
    this._resourceMappingFile = value;
  }
  public resetResourceMappingFile() {
    this._resourceMappingFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceMappingFileInput() {
    return this._resourceMappingFile;
  }

  // response_header - computed: true, optional: true, required: false
  private _responseHeader?: string[]; 
  public get responseHeader() {
    return cdktf.Fn.tolist(this.getListAttribute('response_header'));
  }
  public set responseHeader(value: string[]) {
    this._responseHeader = value;
  }
  public resetResponseHeader() {
    this._responseHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseHeaderInput() {
    return this._responseHeader;
  }

  // schemas_endpoint_objectclass - computed: true, optional: true, required: false
  private _schemasEndpointObjectclass?: string[]; 
  public get schemasEndpointObjectclass() {
    return cdktf.Fn.tolist(this.getListAttribute('schemas_endpoint_objectclass'));
  }
  public set schemasEndpointObjectclass(value: string[]) {
    this._schemasEndpointObjectclass = value;
  }
  public resetSchemasEndpointObjectclass() {
    this._schemasEndpointObjectclass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemasEndpointObjectclassInput() {
    return this._schemasEndpointObjectclass;
  }

  // script_argument - computed: true, optional: true, required: false
  private _scriptArgument?: string[]; 
  public get scriptArgument() {
    return cdktf.Fn.tolist(this.getListAttribute('script_argument'));
  }
  public set scriptArgument(value: string[]) {
    this._scriptArgument = value;
  }
  public resetScriptArgument() {
    this._scriptArgument = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptArgumentInput() {
    return this._scriptArgument;
  }

  // script_class - computed: true, optional: true, required: false
  private _scriptClass?: string; 
  public get scriptClass() {
    return this.getStringAttribute('script_class');
  }
  public set scriptClass(value: string) {
    this._scriptClass = value;
  }
  public resetScriptClass() {
    this._scriptClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptClassInput() {
    return this._scriptClass;
  }

  // server - computed: true, optional: true, required: false
  private _server?: string; 
  public get server() {
    return this.getStringAttribute('server');
  }
  public set server(value: string) {
    this._server = value;
  }
  public resetServer() {
    this._server = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }

  // static_content_directory - computed: true, optional: true, required: false
  private _staticContentDirectory?: string; 
  public get staticContentDirectory() {
    return this.getStringAttribute('static_content_directory');
  }
  public set staticContentDirectory(value: string) {
    this._staticContentDirectory = value;
  }
  public resetStaticContentDirectory() {
    this._staticContentDirectory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticContentDirectoryInput() {
    return this._staticContentDirectory;
  }

  // static_context_path - computed: true, optional: true, required: false
  private _staticContextPath?: string; 
  public get staticContextPath() {
    return this.getStringAttribute('static_context_path');
  }
  public set staticContextPath(value: string) {
    this._staticContextPath = value;
  }
  public resetStaticContextPath() {
    this._staticContextPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticContextPathInput() {
    return this._staticContextPath;
  }

  // static_custom_directory - computed: true, optional: true, required: false
  private _staticCustomDirectory?: string; 
  public get staticCustomDirectory() {
    return this.getStringAttribute('static_custom_directory');
  }
  public set staticCustomDirectory(value: string) {
    this._staticCustomDirectory = value;
  }
  public resetStaticCustomDirectory() {
    this._staticCustomDirectory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticCustomDirectoryInput() {
    return this._staticCustomDirectory;
  }

  // static_response_header - computed: true, optional: true, required: false
  private _staticResponseHeader?: string[]; 
  public get staticResponseHeader() {
    return cdktf.Fn.tolist(this.getListAttribute('static_response_header'));
  }
  public set staticResponseHeader(value: string[]) {
    this._staticResponseHeader = value;
  }
  public resetStaticResponseHeader() {
    this._staticResponseHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticResponseHeaderInput() {
    return this._staticResponseHeader;
  }

  // swagger_enabled - computed: true, optional: true, required: false
  private _swaggerEnabled?: boolean | cdktf.IResolvable; 
  public get swaggerEnabled() {
    return this.getBooleanAttribute('swagger_enabled');
  }
  public set swaggerEnabled(value: boolean | cdktf.IResolvable) {
    this._swaggerEnabled = value;
  }
  public resetSwaggerEnabled() {
    this._swaggerEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get swaggerEnabledInput() {
    return this._swaggerEnabled;
  }

  // template_directory - computed: true, optional: true, required: false
  private _templateDirectory?: string[]; 
  public get templateDirectory() {
    return cdktf.Fn.tolist(this.getListAttribute('template_directory'));
  }
  public set templateDirectory(value: string[]) {
    this._templateDirectory = value;
  }
  public resetTemplateDirectory() {
    this._templateDirectory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateDirectoryInput() {
    return this._templateDirectory;
  }

  // temporary_directory - computed: true, optional: true, required: false
  private _temporaryDirectory?: string; 
  public get temporaryDirectory() {
    return this.getStringAttribute('temporary_directory');
  }
  public set temporaryDirectory(value: string) {
    this._temporaryDirectory = value;
  }
  public resetTemporaryDirectory() {
    this._temporaryDirectory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get temporaryDirectoryInput() {
    return this._temporaryDirectory;
  }

  // temporary_directory_permissions - computed: true, optional: true, required: false
  private _temporaryDirectoryPermissions?: string; 
  public get temporaryDirectoryPermissions() {
    return this.getStringAttribute('temporary_directory_permissions');
  }
  public set temporaryDirectoryPermissions(value: string) {
    this._temporaryDirectoryPermissions = value;
  }
  public resetTemporaryDirectoryPermissions() {
    this._temporaryDirectoryPermissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get temporaryDirectoryPermissionsInput() {
    return this._temporaryDirectoryPermissions;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // unavailable_status_code - computed: true, optional: true, required: false
  private _unavailableStatusCode?: number; 
  public get unavailableStatusCode() {
    return this.getNumberAttribute('unavailable_status_code');
  }
  public set unavailableStatusCode(value: number) {
    this._unavailableStatusCode = value;
  }
  public resetUnavailableStatusCode() {
    this._unavailableStatusCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unavailableStatusCodeInput() {
    return this._unavailableStatusCode;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_token_scope: cdktf.stringToTerraform(this._accessTokenScope),
      access_token_validator: cdktf.listMapper(cdktf.stringToTerraform, false)(this._accessTokenValidator),
      additional_response_contents: cdktf.stringToTerraform(this._additionalResponseContents),
      allow_context_override: cdktf.booleanToTerraform(this._allowContextOverride),
      allowed_authentication_type: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedAuthenticationType),
      allowed_control: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedControl),
      always_include_monitor_entry_name_label: cdktf.booleanToTerraform(this._alwaysIncludeMonitorEntryNameLabel),
      always_use_permissive_modify: cdktf.booleanToTerraform(this._alwaysUsePermissiveModify),
      audience: cdktf.stringToTerraform(this._audience),
      available_status_code: cdktf.numberToTerraform(this._availableStatusCode),
      base_context_path: cdktf.stringToTerraform(this._baseContextPath),
      basic_auth_enabled: cdktf.booleanToTerraform(this._basicAuthEnabled),
      bearer_token_auth_enabled: cdktf.booleanToTerraform(this._bearerTokenAuthEnabled),
      bulk_max_concurrent_requests: cdktf.numberToTerraform(this._bulkMaxConcurrentRequests),
      bulk_max_operations: cdktf.numberToTerraform(this._bulkMaxOperations),
      bulk_max_payload_size: cdktf.stringToTerraform(this._bulkMaxPayloadSize),
      character_encoding: cdktf.stringToTerraform(this._characterEncoding),
      correlation_id_response_header: cdktf.stringToTerraform(this._correlationIdResponseHeader),
      cross_origin_policy: cdktf.stringToTerraform(this._crossOriginPolicy),
      debug_enabled: cdktf.booleanToTerraform(this._debugEnabled),
      debug_level: cdktf.stringToTerraform(this._debugLevel),
      debug_type: cdktf.listMapper(cdktf.stringToTerraform, false)(this._debugType),
      default_mime_type: cdktf.stringToTerraform(this._defaultMimeType),
      default_operational_attribute: cdktf.listMapper(cdktf.stringToTerraform, false)(this._defaultOperationalAttribute),
      degraded_status_code: cdktf.numberToTerraform(this._degradedStatusCode),
      description: cdktf.stringToTerraform(this._description),
      document_root_directory: cdktf.stringToTerraform(this._documentRootDirectory),
      enable_directory_indexing: cdktf.booleanToTerraform(this._enableDirectoryIndexing),
      entity_tag_ldap_attribute: cdktf.stringToTerraform(this._entityTagLdapAttribute),
      exclude_ldap_base_dn: cdktf.listMapper(cdktf.stringToTerraform, false)(this._excludeLdapBaseDn),
      exclude_ldap_objectclass: cdktf.listMapper(cdktf.stringToTerraform, false)(this._excludeLdapObjectclass),
      expose_request_attributes: cdktf.booleanToTerraform(this._exposeRequestAttributes),
      expose_server_context: cdktf.booleanToTerraform(this._exposeServerContext),
      expose_session_attributes: cdktf.booleanToTerraform(this._exposeSessionAttributes),
      extension_argument: cdktf.listMapper(cdktf.stringToTerraform, false)(this._extensionArgument),
      extension_class: cdktf.stringToTerraform(this._extensionClass),
      id_token_validator: cdktf.listMapper(cdktf.stringToTerraform, false)(this._idTokenValidator),
      identity_mapper: cdktf.stringToTerraform(this._identityMapper),
      include_instance_name_label: cdktf.booleanToTerraform(this._includeInstanceNameLabel),
      include_ldap_base_dn: cdktf.listMapper(cdktf.stringToTerraform, false)(this._includeLdapBaseDn),
      include_ldap_objectclass: cdktf.listMapper(cdktf.stringToTerraform, false)(this._includeLdapObjectclass),
      include_location_name_label: cdktf.booleanToTerraform(this._includeLocationNameLabel),
      include_monitor_attribute_name_label: cdktf.booleanToTerraform(this._includeMonitorAttributeNameLabel),
      include_monitor_object_class_name_label: cdktf.booleanToTerraform(this._includeMonitorObjectClassNameLabel),
      include_product_name_label: cdktf.booleanToTerraform(this._includeProductNameLabel),
      include_response_body: cdktf.booleanToTerraform(this._includeResponseBody),
      include_stack_trace: cdktf.booleanToTerraform(this._includeStackTrace),
      index_file: cdktf.listMapper(cdktf.stringToTerraform, false)(this._indexFile),
      label_name_value_pair: cdktf.listMapper(cdktf.stringToTerraform, false)(this._labelNameValuePair),
      map_access_tokens_to_local_users: cdktf.stringToTerraform(this._mapAccessTokensToLocalUsers),
      max_page_size: cdktf.numberToTerraform(this._maxPageSize),
      max_results: cdktf.numberToTerraform(this._maxResults),
      mime_types_file: cdktf.stringToTerraform(this._mimeTypesFile),
      name: cdktf.stringToTerraform(this._name),
      oauth_token_handler: cdktf.stringToTerraform(this._oauthTokenHandler),
      override_status_code: cdktf.numberToTerraform(this._overrideStatusCode),
      reject_expansion_attribute: cdktf.listMapper(cdktf.stringToTerraform, false)(this._rejectExpansionAttribute),
      require_authentication: cdktf.booleanToTerraform(this._requireAuthentication),
      require_file_servlet_access_privilege: cdktf.booleanToTerraform(this._requireFileServletAccessPrivilege),
      require_group: cdktf.listMapper(cdktf.stringToTerraform, false)(this._requireGroup),
      resource_mapping_file: cdktf.stringToTerraform(this._resourceMappingFile),
      response_header: cdktf.listMapper(cdktf.stringToTerraform, false)(this._responseHeader),
      schemas_endpoint_objectclass: cdktf.listMapper(cdktf.stringToTerraform, false)(this._schemasEndpointObjectclass),
      script_argument: cdktf.listMapper(cdktf.stringToTerraform, false)(this._scriptArgument),
      script_class: cdktf.stringToTerraform(this._scriptClass),
      server: cdktf.stringToTerraform(this._server),
      static_content_directory: cdktf.stringToTerraform(this._staticContentDirectory),
      static_context_path: cdktf.stringToTerraform(this._staticContextPath),
      static_custom_directory: cdktf.stringToTerraform(this._staticCustomDirectory),
      static_response_header: cdktf.listMapper(cdktf.stringToTerraform, false)(this._staticResponseHeader),
      swagger_enabled: cdktf.booleanToTerraform(this._swaggerEnabled),
      template_directory: cdktf.listMapper(cdktf.stringToTerraform, false)(this._templateDirectory),
      temporary_directory: cdktf.stringToTerraform(this._temporaryDirectory),
      temporary_directory_permissions: cdktf.stringToTerraform(this._temporaryDirectoryPermissions),
      unavailable_status_code: cdktf.numberToTerraform(this._unavailableStatusCode),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_token_scope: {
        value: cdktf.stringToHclTerraform(this._accessTokenScope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      access_token_validator: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._accessTokenValidator),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      additional_response_contents: {
        value: cdktf.stringToHclTerraform(this._additionalResponseContents),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allow_context_override: {
        value: cdktf.booleanToHclTerraform(this._allowContextOverride),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allowed_authentication_type: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedAuthenticationType),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      allowed_control: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedControl),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      always_include_monitor_entry_name_label: {
        value: cdktf.booleanToHclTerraform(this._alwaysIncludeMonitorEntryNameLabel),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      always_use_permissive_modify: {
        value: cdktf.booleanToHclTerraform(this._alwaysUsePermissiveModify),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      audience: {
        value: cdktf.stringToHclTerraform(this._audience),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      available_status_code: {
        value: cdktf.numberToHclTerraform(this._availableStatusCode),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      base_context_path: {
        value: cdktf.stringToHclTerraform(this._baseContextPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      basic_auth_enabled: {
        value: cdktf.booleanToHclTerraform(this._basicAuthEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bearer_token_auth_enabled: {
        value: cdktf.booleanToHclTerraform(this._bearerTokenAuthEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bulk_max_concurrent_requests: {
        value: cdktf.numberToHclTerraform(this._bulkMaxConcurrentRequests),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bulk_max_operations: {
        value: cdktf.numberToHclTerraform(this._bulkMaxOperations),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bulk_max_payload_size: {
        value: cdktf.stringToHclTerraform(this._bulkMaxPayloadSize),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      character_encoding: {
        value: cdktf.stringToHclTerraform(this._characterEncoding),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      correlation_id_response_header: {
        value: cdktf.stringToHclTerraform(this._correlationIdResponseHeader),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cross_origin_policy: {
        value: cdktf.stringToHclTerraform(this._crossOriginPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      debug_enabled: {
        value: cdktf.booleanToHclTerraform(this._debugEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      debug_level: {
        value: cdktf.stringToHclTerraform(this._debugLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      debug_type: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._debugType),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      default_mime_type: {
        value: cdktf.stringToHclTerraform(this._defaultMimeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_operational_attribute: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._defaultOperationalAttribute),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      degraded_status_code: {
        value: cdktf.numberToHclTerraform(this._degradedStatusCode),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      document_root_directory: {
        value: cdktf.stringToHclTerraform(this._documentRootDirectory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_directory_indexing: {
        value: cdktf.booleanToHclTerraform(this._enableDirectoryIndexing),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      entity_tag_ldap_attribute: {
        value: cdktf.stringToHclTerraform(this._entityTagLdapAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      exclude_ldap_base_dn: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._excludeLdapBaseDn),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      exclude_ldap_objectclass: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._excludeLdapObjectclass),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      expose_request_attributes: {
        value: cdktf.booleanToHclTerraform(this._exposeRequestAttributes),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      expose_server_context: {
        value: cdktf.booleanToHclTerraform(this._exposeServerContext),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      expose_session_attributes: {
        value: cdktf.booleanToHclTerraform(this._exposeSessionAttributes),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      extension_argument: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._extensionArgument),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      extension_class: {
        value: cdktf.stringToHclTerraform(this._extensionClass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id_token_validator: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._idTokenValidator),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      identity_mapper: {
        value: cdktf.stringToHclTerraform(this._identityMapper),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      include_instance_name_label: {
        value: cdktf.booleanToHclTerraform(this._includeInstanceNameLabel),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      include_ldap_base_dn: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._includeLdapBaseDn),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      include_ldap_objectclass: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._includeLdapObjectclass),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      include_location_name_label: {
        value: cdktf.booleanToHclTerraform(this._includeLocationNameLabel),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      include_monitor_attribute_name_label: {
        value: cdktf.booleanToHclTerraform(this._includeMonitorAttributeNameLabel),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      include_monitor_object_class_name_label: {
        value: cdktf.booleanToHclTerraform(this._includeMonitorObjectClassNameLabel),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      include_product_name_label: {
        value: cdktf.booleanToHclTerraform(this._includeProductNameLabel),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      include_response_body: {
        value: cdktf.booleanToHclTerraform(this._includeResponseBody),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      include_stack_trace: {
        value: cdktf.booleanToHclTerraform(this._includeStackTrace),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      index_file: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._indexFile),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      label_name_value_pair: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._labelNameValuePair),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      map_access_tokens_to_local_users: {
        value: cdktf.stringToHclTerraform(this._mapAccessTokensToLocalUsers),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_page_size: {
        value: cdktf.numberToHclTerraform(this._maxPageSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_results: {
        value: cdktf.numberToHclTerraform(this._maxResults),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mime_types_file: {
        value: cdktf.stringToHclTerraform(this._mimeTypesFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oauth_token_handler: {
        value: cdktf.stringToHclTerraform(this._oauthTokenHandler),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      override_status_code: {
        value: cdktf.numberToHclTerraform(this._overrideStatusCode),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      reject_expansion_attribute: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._rejectExpansionAttribute),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      require_authentication: {
        value: cdktf.booleanToHclTerraform(this._requireAuthentication),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      require_file_servlet_access_privilege: {
        value: cdktf.booleanToHclTerraform(this._requireFileServletAccessPrivilege),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      require_group: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._requireGroup),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      resource_mapping_file: {
        value: cdktf.stringToHclTerraform(this._resourceMappingFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      response_header: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._responseHeader),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      schemas_endpoint_objectclass: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._schemasEndpointObjectclass),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      script_argument: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._scriptArgument),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      script_class: {
        value: cdktf.stringToHclTerraform(this._scriptClass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server: {
        value: cdktf.stringToHclTerraform(this._server),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      static_content_directory: {
        value: cdktf.stringToHclTerraform(this._staticContentDirectory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      static_context_path: {
        value: cdktf.stringToHclTerraform(this._staticContextPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      static_custom_directory: {
        value: cdktf.stringToHclTerraform(this._staticCustomDirectory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      static_response_header: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._staticResponseHeader),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      swagger_enabled: {
        value: cdktf.booleanToHclTerraform(this._swaggerEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      template_directory: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._templateDirectory),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      temporary_directory: {
        value: cdktf.stringToHclTerraform(this._temporaryDirectory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      temporary_directory_permissions: {
        value: cdktf.stringToHclTerraform(this._temporaryDirectoryPermissions),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unavailable_status_code: {
        value: cdktf.numberToHclTerraform(this._unavailableStatusCode),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
