// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/http_servlet_extension
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HttpServletExtensionConfig extends cdktf.TerraformMetaArguments {
  /**
  * When the `type` attribute is set to:
  *   - `delegated-admin`: If specified, the Access Token Validator(s) that may be used to validate access tokens for requests submitted to this Delegated Admin HTTP Servlet Extension.
  *   - `consent`: If specified, the Access Token Validator(s) that may be used to validate access tokens for requests submitted to this Consent HTTP Servlet Extension.
  *   - `file-server`: The access token validators that may be used to verify the authenticity of an OAuth 2.0 bearer token.
  *   - `scim2`: If specified, the Access Token Validator(s) that may be used to validate access tokens for requests submitted to this SCIM2 HTTP Servlet Extension.
  *   - `directory-rest-api`: If specified, the Access Token Validator(s) that may be used to validate access tokens for requests submitted to this Directory REST API HTTP Servlet Extension.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/http_servlet_extension#access_token_validator HttpServletExtension#access_token_validator}
  */
  readonly accessTokenValidator?: string[];
  /**
  * A JSON-formatted string containing additional fields to be returned in the response body. For example, an additional-response-contents value of '{ "key": "value" }' would add the key and value to the root of the JSON response body.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/http_servlet_extension#additional_response_contents HttpServletExtension#additional_response_contents}
  */
  readonly additionalResponseContents?: string;
  /**
  * The types of authentication that may be used to authenticate to the file servlet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/http_servlet_extension#allowed_authentication_type HttpServletExtension#allowed_authentication_type}
  */
  readonly allowedAuthenticationType?: string[];
  /**
  * Indicates whether generated metrics should always include a "monitor_entry" label whose value is the name of the monitor entry from which the metric was obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/http_servlet_extension#always_include_monitor_entry_name_label HttpServletExtension#always_include_monitor_entry_name_label}
  */
  readonly alwaysIncludeMonitorEntryNameLabel?: boolean | cdktf.IResolvable;
  /**
  * Specifies the HTTP status code that the servlet should return if the server considers itself to be available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/http_servlet_extension#available_status_code HttpServletExtension#available_status_code}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/http_servlet_extension#base_context_path HttpServletExtension#base_context_path}
  */
  readonly baseContextPath?: string;
  /**
  * When the `type` attribute is set to:
  *   - One of [`delegated-admin`, `consent`, `directory-rest-api`]: Enables HTTP Basic authentication, using a username and password. The Identity Mapper specified by the identity-mapper property will be used to map the username to a DN.  NOTE: Basic authentication is considered less secure than OAuth2 bearer token authentication.
  *   - `ldap-mapped-scim`: Enables HTTP Basic authentication, using a username and password.  NOTE: Basic authentication is considered less secure than OAuth2 bearer token authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/http_servlet_extension#basic_auth_enabled HttpServletExtension#basic_auth_enabled}
  */
  readonly basicAuthEnabled?: boolean | cdktf.IResolvable;
  /**
  * The maximum number of bulk requests that may be processed concurrently by the server. Any bulk request that would cause this limit to be exceeded is rejected with HTTP status code 503.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/http_servlet_extension#bulk_max_concurrent_requests HttpServletExtension#bulk_max_concurrent_requests}
  */
  readonly bulkMaxConcurrentRequests?: number;
  /**
  * The maximum number of operations that are permitted in a bulk request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/http_servlet_extension#bulk_max_operations HttpServletExtension#bulk_max_operations}
  */
  readonly bulkMaxOperations?: number;
  /**
  * The maximum payload size in bytes of a bulk request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/http_servlet_extension#bulk_max_payload_size HttpServletExtension#bulk_max_payload_size}
  */
  readonly bulkMaxPayloadSize?: string;
  /**
  * Specifies the name of the HTTP response header that will contain a correlation ID value. Example values are "Correlation-Id", "X-Amzn-Trace-Id", and "X-Request-Id".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/http_servlet_extension#correlation_id_response_header HttpServletExtension#correlation_id_response_header}
  */
  readonly correlationIdResponseHeader?: string;
  /**
  * The cross-origin request policy to use for the HTTP Servlet Extension.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/http_servlet_extension#cross_origin_policy HttpServletExtension#cross_origin_policy}
  */
  readonly crossOriginPolicy?: string;
  /**
  * When the `type` attribute is set to:
  *   - `ldap-mapped-scim`: Enables debug logging of the SCIM SDK. Debug messages will be forwarded to the Directory Server debug logger with the scope of com.unboundid.directory.server.extensions.scim.SCIMHTTPServletExtension.
  *   - `scim2`: Enables debug logging of the SCIM 2.0 SDK. Debug messages will be forwarded to the Directory Server debug logger with the scope of com.unboundid.directory.broker.http.scim2.extension.SCIM2HTTPServletExtension.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/http_servlet_extension#debug_enabled HttpServletExtension#debug_enabled}
  */
  readonly debugEnabled?: boolean | cdktf.IResolvable;
  /**
  * The minimum debug level that should be used for messages to be logged.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/http_servlet_extension#debug_level HttpServletExtension#debug_level}
  */
  readonly debugLevel?: string;
  /**
  * The types of debug messages that should be logged.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/http_servlet_extension#debug_type HttpServletExtension#debug_type}
  */
  readonly debugType?: string[];
  /**
  * When the `type` attribute is set to:
  *   - `velocity`: Specifies the default value that will be used in the response's Content-Type header that indicates the type of content to return.
  *   - `file-server`: Specifies the default MIME type to use for the Content-Type header when a mapping cannot be found.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/http_servlet_extension#default_mime_type HttpServletExtension#default_mime_type}
  */
  readonly defaultMimeType?: string;
  /**
  * Specifies the HTTP status code that the servlet should return if the server considers itself to be degraded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/http_servlet_extension#degraded_status_code HttpServletExtension#degraded_status_code}
  */
  readonly degradedStatusCode?: number;
  /**
  * A description for this HTTP Servlet Extension
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/http_servlet_extension#description HttpServletExtension#description}
  */
  readonly description?: string;
  /**
  * Specifies the path to the directory on the local filesystem containing the files to be served by this File Server HTTP Servlet Extension. The path must exist, and it must be a directory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/http_servlet_extension#document_root_directory HttpServletExtension#document_root_directory}
  */
  readonly documentRootDirectory?: string;
  /**
  * Indicates whether to generate a default HTML page with a listing of available files if the requested path refers to a directory rather than a file, and that directory does not contain an index file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/http_servlet_extension#enable_directory_indexing HttpServletExtension#enable_directory_indexing}
  */
  readonly enableDirectoryIndexing?: boolean | cdktf.IResolvable;
  /**
  * Specifies the LDAP attribute whose value should be used as the entity tag value to enable SCIM resource versioning support.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/http_servlet_extension#entity_tag_ldap_attribute HttpServletExtension#entity_tag_ldap_attribute}
  */
  readonly entityTagLdapAttribute?: string;
  /**
  * Specifies the base DNs for the branches of the DIT that should not be exposed via the Identity Access API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/http_servlet_extension#exclude_ldap_base_dn HttpServletExtension#exclude_ldap_base_dn}
  */
  readonly excludeLdapBaseDn?: string[];
  /**
  * Specifies the LDAP object classes that should be not be exposed directly as SCIM resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/http_servlet_extension#exclude_ldap_objectclass HttpServletExtension#exclude_ldap_objectclass}
  */
  readonly excludeLdapObjectclass?: string[];
  /**
  * The set of arguments used to customize the behavior for the Third Party HTTP Servlet Extension. Each configuration property should be given in the form 'name=value'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/http_servlet_extension#extension_argument HttpServletExtension#extension_argument}
  */
  readonly extensionArgument?: string[];
  /**
  * The fully-qualified name of the Java class providing the logic for the Third Party HTTP Servlet Extension.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/http_servlet_extension#extension_class HttpServletExtension#extension_class}
  */
  readonly extensionClass?: string;
  /**
  * The ID token validators that may be used to verify the authenticity of an of an OpenID Connect ID token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/http_servlet_extension#id_token_validator HttpServletExtension#id_token_validator}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/http_servlet_extension#identity_mapper HttpServletExtension#identity_mapper}
  */
  readonly identityMapper?: string;
  /**
  * Indicates whether generated metrics should include an "instance" label whose value is the instance name for this Directory Server instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/http_servlet_extension#include_instance_name_label HttpServletExtension#include_instance_name_label}
  */
  readonly includeInstanceNameLabel?: boolean | cdktf.IResolvable;
  /**
  * Specifies the base DNs for the branches of the DIT that should be exposed via the Identity Access API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/http_servlet_extension#include_ldap_base_dn HttpServletExtension#include_ldap_base_dn}
  */
  readonly includeLdapBaseDn?: string[];
  /**
  * Specifies the LDAP object classes that should be exposed directly as SCIM resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/http_servlet_extension#include_ldap_objectclass HttpServletExtension#include_ldap_objectclass}
  */
  readonly includeLdapObjectclass?: string[];
  /**
  * Indicates whether generated metrics should include a "location" label whose value is the location name for this Directory Server instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/http_servlet_extension#include_location_name_label HttpServletExtension#include_location_name_label}
  */
  readonly includeLocationNameLabel?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether generated metrics should include a "monitor_attribute" label whose value is the name of the monitor attribute from which the metric was obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/http_servlet_extension#include_monitor_attribute_name_label HttpServletExtension#include_monitor_attribute_name_label}
  */
  readonly includeMonitorAttributeNameLabel?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether generated metrics should include a "monitor_object_class" label whose value is the name of the object class for the monitor entry from which the metric was obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/http_servlet_extension#include_monitor_object_class_name_label HttpServletExtension#include_monitor_object_class_name_label}
  */
  readonly includeMonitorObjectClassNameLabel?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether generated metrics should include a "product" label whose value is the product name for this Directory Server instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/http_servlet_extension#include_product_name_label HttpServletExtension#include_product_name_label}
  */
  readonly includeProductNameLabel?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether the response should include a body that is a JSON object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/http_servlet_extension#include_response_body HttpServletExtension#include_response_body}
  */
  readonly includeResponseBody?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether a stack trace of the thread which called the debug method should be included in debug log messages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/http_servlet_extension#include_stack_trace HttpServletExtension#include_stack_trace}
  */
  readonly includeStackTrace?: boolean | cdktf.IResolvable;
  /**
  * Specifies the name of a file whose contents may be returned to the client if the requested path refers to a directory rather than a file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/http_servlet_extension#index_file HttpServletExtension#index_file}
  */
  readonly indexFile?: string[];
  /**
  * A set of name-value pairs for labels that should be included in all metrics exposed by this Directory Server instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/http_servlet_extension#label_name_value_pair HttpServletExtension#label_name_value_pair}
  */
  readonly labelNameValuePair?: string[];
  /**
  * The maximum number of resources that are returned in a response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/http_servlet_extension#max_results HttpServletExtension#max_results}
  */
  readonly maxResults?: number;
  /**
  * When the `type` attribute is set to:
  *   - `velocity`: Specifies the path to a file that contains MIME type mappings that will be used to determine the appropriate value to return for the Content-Type header based on the extension of the requested static content file.
  *   - `file-server`: Specifies the path to a file that contains MIME type mappings that will be used to determine the appropriate value to return for the Content-Type header based on the extension of the requested file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/http_servlet_extension#mime_types_file HttpServletExtension#mime_types_file}
  */
  readonly mimeTypesFile?: string;
  /**
  * Name of this config object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/http_servlet_extension#name HttpServletExtension#name}
  */
  readonly name: string;
  /**
  * Specifies the OAuth Token Handler implementation that should be used to validate OAuth 2.0 bearer tokens when they are included in a SCIM request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/http_servlet_extension#oauth_token_handler HttpServletExtension#oauth_token_handler}
  */
  readonly oauthTokenHandler?: string;
  /**
  * Specifies a HTTP status code that the servlet should always return, regardless of the server's availability. If this value is defined, it will override the availability-based return codes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/http_servlet_extension#override_status_code HttpServletExtension#override_status_code}
  */
  readonly overrideStatusCode?: number;
  /**
  * When the `type` attribute is set to:
  *   - `velocity`: Require authentication when accessing Velocity templates.
  *   - `file-server`: Indicates whether the servlet extension should only accept requests from authenticated clients.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/http_servlet_extension#require_authentication HttpServletExtension#require_authentication}
  */
  readonly requireAuthentication?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether the servlet extension should only accept requests from authenticated clients that have the file-servlet-access privilege.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/http_servlet_extension#require_file_servlet_access_privilege HttpServletExtension#require_file_servlet_access_privilege}
  */
  readonly requireFileServletAccessPrivilege?: boolean | cdktf.IResolvable;
  /**
  * The DN of a group whose members will be permitted to access to the associated files. If multiple group DNs are configured, then anyone who is a member of at least one of those groups will be granted access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/http_servlet_extension#require_group HttpServletExtension#require_group}
  */
  readonly requireGroup?: string[];
  /**
  * The path to an XML file defining the resources supported by the SCIM interface and the SCIM-to-LDAP attribute mappings to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/http_servlet_extension#resource_mapping_file HttpServletExtension#resource_mapping_file}
  */
  readonly resourceMappingFile?: string;
  /**
  * When the `type` attribute is set to:
  *   - One of [`delegated-admin`, `quickstart`, `availability-state`, `prometheus-monitoring`, `consent`, `ldap-mapped-scim`, `groovy-scripted`, `file-server`, `config`, `scim2`, `directory-rest-api`, `third-party`]: Specifies HTTP header fields and values added to response headers for all requests.
  *   - `velocity`: Specifies HTTP header fields and values added to response headers for all template page requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/http_servlet_extension#response_header HttpServletExtension#response_header}
  */
  readonly responseHeader?: string[];
  /**
  * The set of arguments used to customize the behavior for the Scripted HTTP Servlet Extension. Each configuration property should be given in the form 'name=value'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/http_servlet_extension#script_argument HttpServletExtension#script_argument}
  */
  readonly scriptArgument?: string[];
  /**
  * The fully-qualified name of the Groovy class providing the logic for the Groovy Scripted HTTP Servlet Extension.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/http_servlet_extension#script_class HttpServletExtension#script_class}
  */
  readonly scriptClass?: string;
  /**
  * Specifies the PingFederate server to be configured.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/http_servlet_extension#server HttpServletExtension#server}
  */
  readonly server?: string;
  /**
  * Specifies the location of the directory that is used to create temporary files containing SCIM request data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/http_servlet_extension#temporary_directory HttpServletExtension#temporary_directory}
  */
  readonly temporaryDirectory?: string;
  /**
  * Specifies the permissions that should be applied to the directory that is used to create temporary files.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/http_servlet_extension#temporary_directory_permissions HttpServletExtension#temporary_directory_permissions}
  */
  readonly temporaryDirectoryPermissions?: string;
  /**
  * The type of HTTP Servlet Extension resource. Options are ['delegated-admin', 'quickstart', 'availability-state', 'prometheus-monitoring', 'velocity', 'consent', 'ldap-mapped-scim', 'groovy-scripted', 'file-server', 'config', 'scim2', 'directory-rest-api', 'third-party']
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/http_servlet_extension#type HttpServletExtension#type}
  */
  readonly type: string;
  /**
  * Specifies the HTTP status code that the servlet should return if the server considers itself to be unavailable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/http_servlet_extension#unavailable_status_code HttpServletExtension#unavailable_status_code}
  */
  readonly unavailableStatusCode?: number;
}
export interface HttpServletExtensionRequiredActions {
}

export function httpServletExtensionRequiredActionsToTerraform(struct?: HttpServletExtensionRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function httpServletExtensionRequiredActionsToHclTerraform(struct?: HttpServletExtensionRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class HttpServletExtensionRequiredActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttpServletExtensionRequiredActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpServletExtensionRequiredActions | undefined) {
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

export class HttpServletExtensionRequiredActionsList extends cdktf.ComplexList {

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
  public get(index: number): HttpServletExtensionRequiredActionsOutputReference {
    return new HttpServletExtensionRequiredActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/http_servlet_extension pingdirectory_http_servlet_extension}
*/
export class HttpServletExtension extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_http_servlet_extension";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a HttpServletExtension resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the HttpServletExtension to import
  * @param importFromId The id of the existing HttpServletExtension that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/http_servlet_extension#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the HttpServletExtension to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_http_servlet_extension", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/http_servlet_extension pingdirectory_http_servlet_extension} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HttpServletExtensionConfig
  */
  public constructor(scope: Construct, id: string, config: HttpServletExtensionConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_http_servlet_extension',
      terraformGeneratorMetadata: {
        providerName: 'pingdirectory',
        providerVersion: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessTokenValidator = config.accessTokenValidator;
    this._additionalResponseContents = config.additionalResponseContents;
    this._allowedAuthenticationType = config.allowedAuthenticationType;
    this._alwaysIncludeMonitorEntryNameLabel = config.alwaysIncludeMonitorEntryNameLabel;
    this._availableStatusCode = config.availableStatusCode;
    this._baseContextPath = config.baseContextPath;
    this._basicAuthEnabled = config.basicAuthEnabled;
    this._bulkMaxConcurrentRequests = config.bulkMaxConcurrentRequests;
    this._bulkMaxOperations = config.bulkMaxOperations;
    this._bulkMaxPayloadSize = config.bulkMaxPayloadSize;
    this._correlationIdResponseHeader = config.correlationIdResponseHeader;
    this._crossOriginPolicy = config.crossOriginPolicy;
    this._debugEnabled = config.debugEnabled;
    this._debugLevel = config.debugLevel;
    this._debugType = config.debugType;
    this._defaultMimeType = config.defaultMimeType;
    this._degradedStatusCode = config.degradedStatusCode;
    this._description = config.description;
    this._documentRootDirectory = config.documentRootDirectory;
    this._enableDirectoryIndexing = config.enableDirectoryIndexing;
    this._entityTagLdapAttribute = config.entityTagLdapAttribute;
    this._excludeLdapBaseDn = config.excludeLdapBaseDn;
    this._excludeLdapObjectclass = config.excludeLdapObjectclass;
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
    this._maxResults = config.maxResults;
    this._mimeTypesFile = config.mimeTypesFile;
    this._name = config.name;
    this._oauthTokenHandler = config.oauthTokenHandler;
    this._overrideStatusCode = config.overrideStatusCode;
    this._requireAuthentication = config.requireAuthentication;
    this._requireFileServletAccessPrivilege = config.requireFileServletAccessPrivilege;
    this._requireGroup = config.requireGroup;
    this._resourceMappingFile = config.resourceMappingFile;
    this._responseHeader = config.responseHeader;
    this._scriptArgument = config.scriptArgument;
    this._scriptClass = config.scriptClass;
    this._server = config.server;
    this._temporaryDirectory = config.temporaryDirectory;
    this._temporaryDirectoryPermissions = config.temporaryDirectoryPermissions;
    this._type = config.type;
    this._unavailableStatusCode = config.unavailableStatusCode;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // additional_response_contents - computed: false, optional: true, required: false
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

  // available_status_code - computed: false, optional: true, required: false
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

  // correlation_id_response_header - computed: false, optional: true, required: false
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

  // cross_origin_policy - computed: false, optional: true, required: false
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

  // degraded_status_code - computed: false, optional: true, required: false
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

  // description - computed: false, optional: true, required: false
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

  // document_root_directory - computed: false, optional: true, required: false
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

  // entity_tag_ldap_attribute - computed: false, optional: true, required: false
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

  // extension_class - computed: false, optional: true, required: false
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

  // identity_mapper - computed: false, optional: true, required: false
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

  // mime_types_file - computed: false, optional: true, required: false
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

  // oauth_token_handler - computed: false, optional: true, required: false
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

  // override_status_code - computed: false, optional: true, required: false
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
  private _requiredActions = new HttpServletExtensionRequiredActionsList(this, "required_actions", true);
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

  // script_class - computed: false, optional: true, required: false
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

  // server - computed: false, optional: true, required: false
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

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unavailable_status_code - computed: false, optional: true, required: false
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
      access_token_validator: cdktf.listMapper(cdktf.stringToTerraform, false)(this._accessTokenValidator),
      additional_response_contents: cdktf.stringToTerraform(this._additionalResponseContents),
      allowed_authentication_type: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedAuthenticationType),
      always_include_monitor_entry_name_label: cdktf.booleanToTerraform(this._alwaysIncludeMonitorEntryNameLabel),
      available_status_code: cdktf.numberToTerraform(this._availableStatusCode),
      base_context_path: cdktf.stringToTerraform(this._baseContextPath),
      basic_auth_enabled: cdktf.booleanToTerraform(this._basicAuthEnabled),
      bulk_max_concurrent_requests: cdktf.numberToTerraform(this._bulkMaxConcurrentRequests),
      bulk_max_operations: cdktf.numberToTerraform(this._bulkMaxOperations),
      bulk_max_payload_size: cdktf.stringToTerraform(this._bulkMaxPayloadSize),
      correlation_id_response_header: cdktf.stringToTerraform(this._correlationIdResponseHeader),
      cross_origin_policy: cdktf.stringToTerraform(this._crossOriginPolicy),
      debug_enabled: cdktf.booleanToTerraform(this._debugEnabled),
      debug_level: cdktf.stringToTerraform(this._debugLevel),
      debug_type: cdktf.listMapper(cdktf.stringToTerraform, false)(this._debugType),
      default_mime_type: cdktf.stringToTerraform(this._defaultMimeType),
      degraded_status_code: cdktf.numberToTerraform(this._degradedStatusCode),
      description: cdktf.stringToTerraform(this._description),
      document_root_directory: cdktf.stringToTerraform(this._documentRootDirectory),
      enable_directory_indexing: cdktf.booleanToTerraform(this._enableDirectoryIndexing),
      entity_tag_ldap_attribute: cdktf.stringToTerraform(this._entityTagLdapAttribute),
      exclude_ldap_base_dn: cdktf.listMapper(cdktf.stringToTerraform, false)(this._excludeLdapBaseDn),
      exclude_ldap_objectclass: cdktf.listMapper(cdktf.stringToTerraform, false)(this._excludeLdapObjectclass),
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
      max_results: cdktf.numberToTerraform(this._maxResults),
      mime_types_file: cdktf.stringToTerraform(this._mimeTypesFile),
      name: cdktf.stringToTerraform(this._name),
      oauth_token_handler: cdktf.stringToTerraform(this._oauthTokenHandler),
      override_status_code: cdktf.numberToTerraform(this._overrideStatusCode),
      require_authentication: cdktf.booleanToTerraform(this._requireAuthentication),
      require_file_servlet_access_privilege: cdktf.booleanToTerraform(this._requireFileServletAccessPrivilege),
      require_group: cdktf.listMapper(cdktf.stringToTerraform, false)(this._requireGroup),
      resource_mapping_file: cdktf.stringToTerraform(this._resourceMappingFile),
      response_header: cdktf.listMapper(cdktf.stringToTerraform, false)(this._responseHeader),
      script_argument: cdktf.listMapper(cdktf.stringToTerraform, false)(this._scriptArgument),
      script_class: cdktf.stringToTerraform(this._scriptClass),
      server: cdktf.stringToTerraform(this._server),
      temporary_directory: cdktf.stringToTerraform(this._temporaryDirectory),
      temporary_directory_permissions: cdktf.stringToTerraform(this._temporaryDirectoryPermissions),
      type: cdktf.stringToTerraform(this._type),
      unavailable_status_code: cdktf.numberToTerraform(this._unavailableStatusCode),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      allowed_authentication_type: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedAuthenticationType),
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
      type: {
        value: cdktf.stringToHclTerraform(this._type),
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
