// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_publisher
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DefaultLogPublisherConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies the access token validator message types that can be logged.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_publisher#access_token_validator_message_type DefaultLogPublisher#access_token_validator_message_type}
  */
  readonly accessTokenValidatorMessageType?: string[];
  /**
  * Specifies whether to append to existing log files.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_publisher#append DefaultLogPublisher#append}
  */
  readonly append?: boolean | cdktf.IResolvable;
  /**
  * When the `type` attribute is set to:
  *   - One of [`syslog-based-access`, `syslog-text-access`, `file-based-access`]: Indicates whether the Writer Based Access Log Publisher will publish records asynchronously.
  *   - `syslog-based-error`: Indicates whether the Syslog Based Error Log Publisher will publish records asynchronously.
  *   - `third-party-file-based-access`: Indicates whether the Third Party File Based Access Log Publisher will publish records asynchronously.
  *   - `operation-timing-access`: Indicates whether the Operation Timing Access Log Publisher will publish records asynchronously.
  *   - `admin-alert-access`: Indicates whether the Admin Alert Access Log Publisher will publish records asynchronously.
  *   - `file-based-trace`: Indicates whether the Writer Based Trace Log Publisher will publish records asynchronously.
  *   - `common-log-file-http-operation`: Indicates whether the Common Log File HTTP Operation Log Publisher will publish records asynchronously.
  *   - `file-based-json-audit`: Indicates whether the File Based JSON Audit Log Publisher will publish records asynchronously.
  *   - `file-based-debug`: Indicates whether the File Based Debug Log Publisher will publish records asynchronously.
  *   - `file-based-error`: Indicates whether the File Based Error Log Publisher will publish records asynchronously.
  *   - `detailed-http-operation`: Indicates whether the Detailed HTTP Operation Log Publisher will publish records asynchronously.
  *   - `json-access`: Indicates whether the JSON Access Log Publisher will publish records asynchronously.
  *   - `debug-access`: Indicates whether the Debug Access Log Publisher will publish records asynchronously.
  *   - `file-based-audit`: Indicates whether the File Based Audit Log Publisher will publish records asynchronously.
  *   - `json-error`: Indicates whether the JSON Error Log Publisher will publish records asynchronously.
  *   - `groovy-scripted-file-based-access`: Indicates whether the Scripted File Based Access Log Publisher will publish records asynchronously.
  *   - `groovy-scripted-file-based-error`: Indicates whether the Scripted File Based Error Log Publisher will publish records asynchronously.
  *   - `third-party-file-based-error`: Indicates whether the Third Party File Based Error Log Publisher will publish records asynchronously.
  *   - `file-based-json-http-operation`: Indicates whether the File Based JSON HTTP Operation Log Publisher will publish records asynchronously.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_publisher#asynchronous DefaultLogPublisher#asynchronous}
  */
  readonly asynchronous?: boolean | cdktf.IResolvable;
  /**
  * Specifies whether to flush the writer after every log record.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_publisher#auto_flush DefaultLogPublisher#auto_flush}
  */
  readonly autoFlush?: boolean | cdktf.IResolvable;
  /**
  * Specifies the log file buffer size.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_publisher#buffer_size DefaultLogPublisher#buffer_size}
  */
  readonly bufferSize?: string;
  /**
  * Specifies the type of compression (if any) to use for log files that are written.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_publisher#compression_mechanism DefaultLogPublisher#compression_mechanism}
  */
  readonly compressionMechanism?: string;
  /**
  * Specifies a set of connection criteria that must match the associated client connection in order for a connect, disconnect, request, or result message to be logged.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_publisher#connection_criteria DefaultLogPublisher#connection_criteria}
  */
  readonly connectionCriteria?: string;
  /**
  * Specifies the consent message types that can be logged.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_publisher#consent_message_type DefaultLogPublisher#consent_message_type}
  */
  readonly consentMessageType?: string[];
  /**
  * Indicates whether to automatically log result messages for any operation in which the corresponding request was logged. In such cases, the result, entry, and reference criteria will be ignored, although the log-responses, log-search-entries, and log-search-references properties will be honored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_publisher#correlate_requests_and_results DefaultLogPublisher#correlate_requests_and_results}
  */
  readonly correlateRequestsAndResults?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether to include debugging information about ACIs being used by the operations being logged.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_publisher#debug_aci_enabled DefaultLogPublisher#debug_aci_enabled}
  */
  readonly debugAciEnabled?: boolean | cdktf.IResolvable;
  /**
  * Specifies the debug message types which can be logged. Note that enabling these may result in sensitive information being logged.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_publisher#debug_message_type DefaultLogPublisher#debug_message_type}
  */
  readonly debugMessageType?: string[];
  /**
  * The debug message categories to be logged when none of the defined targets match the message.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_publisher#default_debug_category DefaultLogPublisher#default_debug_category}
  */
  readonly defaultDebugCategory?: string[];
  /**
  * The lowest severity level of debug messages to log when none of the defined targets match the message.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_publisher#default_debug_level DefaultLogPublisher#default_debug_level}
  */
  readonly defaultDebugLevel?: string;
  /**
  * Indicates whether to include the cause of exceptions in exception thrown and caught messages logged by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_publisher#default_include_throwable_cause DefaultLogPublisher#default_include_throwable_cause}
  */
  readonly defaultIncludeThrowableCause?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether to include method arguments in debug messages logged by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_publisher#default_omit_method_entry_arguments DefaultLogPublisher#default_omit_method_entry_arguments}
  */
  readonly defaultOmitMethodEntryArguments?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether to include the return value in debug messages logged by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_publisher#default_omit_method_return_value DefaultLogPublisher#default_omit_method_return_value}
  */
  readonly defaultOmitMethodReturnValue?: boolean | cdktf.IResolvable;
  /**
  * Specifies the default severity levels for the logger.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_publisher#default_severity DefaultLogPublisher#default_severity}
  */
  readonly defaultSeverity?: string[];
  /**
  * Indicates the number of stack frames to include in the stack trace for method entry and exception thrown messages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_publisher#default_throwable_stack_frames DefaultLogPublisher#default_throwable_stack_frames}
  */
  readonly defaultThrowableStackFrames?: number;
  /**
  * A description for this Log Publisher
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_publisher#description DefaultLogPublisher#description}
  */
  readonly description?: string;
  /**
  * Specifies the Directory REST API message types which can be logged.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_publisher#directory_rest_api_message_type DefaultLogPublisher#directory_rest_api_message_type}
  */
  readonly directoryRestApiMessageType?: string[];
  /**
  * When the `type` attribute is set to:
  *   - One of [`syslog-json-audit`, `third-party-file-based-access`, `operation-timing-access`, `third-party-http-operation`, `admin-alert-access`, `file-based-trace`, `jdbc-based-error`, `jdbc-based-access`, `common-log-file-http-operation`, `syslog-text-error`, `file-based-json-audit`, `file-based-debug`, `file-based-error`, `third-party-error`, `syslog-text-access`, `detailed-http-operation`, `json-access`, `debug-access`, `syslog-json-http-operation`, `third-party-access`, `file-based-audit`, `json-error`, `groovy-scripted-file-based-access`, `groovy-scripted-file-based-error`, `syslog-json-access`, `groovy-scripted-access`, `third-party-file-based-error`, `file-based-access`, `groovy-scripted-error`, `file-based-json-http-operation`, `syslog-json-error`, `groovy-scripted-http-operation`]: Indicates whether the Log Publisher is enabled for use.
  *   - `syslog-based-error`: Indicates whether the Syslog Based Error Log Publisher is enabled for use.
  *   - `console-json-error`: Indicates whether the Console JSON Error Log Publisher is enabled for use.
  *   - `syslog-based-access`: Indicates whether the Syslog Based Access Log Publisher is enabled for use.
  *   - `console-json-audit`: Indicates whether the Console JSON Audit Log Publisher is enabled for use.
  *   - `console-json-http-operation`: Indicates whether the Console JSON HTTP Operation Log Publisher is enabled for use.
  *   - `console-json-access`: Indicates whether the Console JSON Access Log Publisher is enabled for use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_publisher#enabled DefaultLogPublisher#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether log files should be encrypted so that their content is not available to unauthorized users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_publisher#encrypt_log DefaultLogPublisher#encrypt_log}
  */
  readonly encryptLog?: boolean | cdktf.IResolvable;
  /**
  * Specifies the ID of the encryption settings definition that should be used to encrypt the data. If this is not provided, the server's preferred encryption settings definition will be used. The "encryption-settings list" command can be used to obtain a list of the encryption settings definitions available in the server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_publisher#encryption_settings_definition_id DefaultLogPublisher#encryption_settings_definition_id}
  */
  readonly encryptionSettingsDefinitionId?: string;
  /**
  * Specifies the names of any attribute types that should be excluded from the audit log.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_publisher#exclude_attribute DefaultLogPublisher#exclude_attribute}
  */
  readonly excludeAttribute?: string[];
  /**
  * Specifies a set of HTTP request URL paths to determine whether log messages are excluded for a HTTP request. Log messages are included for a HTTP request if the request path does not match any exclude-path-pattern, and the request path does match an include-path-pattern (or no include-path-pattern is specified).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_publisher#exclude_path_pattern DefaultLogPublisher#exclude_path_pattern}
  */
  readonly excludePathPattern?: string[];
  /**
  * When the `type` attribute is set to:
  *   - `third-party-file-based-access`: The set of arguments used to customize the behavior for the Third Party File Based Access Log Publisher. Each configuration property should be given in the form 'name=value'.
  *   - `third-party-http-operation`: The set of arguments used to customize the behavior for the Third Party HTTP Operation Log Publisher. Each configuration property should be given in the form 'name=value'.
  *   - `third-party-error`: The set of arguments used to customize the behavior for the Third Party Error Log Publisher. Each configuration property should be given in the form 'name=value'.
  *   - `third-party-access`: The set of arguments used to customize the behavior for the Third Party Access Log Publisher. Each configuration property should be given in the form 'name=value'.
  *   - `third-party-file-based-error`: The set of arguments used to customize the behavior for the Third Party File Based Error Log Publisher. Each configuration property should be given in the form 'name=value'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_publisher#extension_argument DefaultLogPublisher#extension_argument}
  */
  readonly extensionArgument?: string[];
  /**
  * When the `type` attribute is set to:
  *   - `third-party-file-based-access`: The fully-qualified name of the Java class providing the logic for the Third Party File Based Access Log Publisher.
  *   - `third-party-http-operation`: The fully-qualified name of the Java class providing the logic for the Third Party HTTP Operation Log Publisher.
  *   - `third-party-error`: The fully-qualified name of the Java class providing the logic for the Third Party Error Log Publisher.
  *   - `third-party-access`: The fully-qualified name of the Java class providing the logic for the Third Party Access Log Publisher.
  *   - `third-party-file-based-error`: The fully-qualified name of the Java class providing the logic for the Third Party File Based Error Log Publisher.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_publisher#extension_class DefaultLogPublisher#extension_class}
  */
  readonly extensionClass?: string;
  /**
  * Specifies the Server SDK extension message types that can be logged.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_publisher#extension_message_type DefaultLogPublisher#extension_message_type}
  */
  readonly extensionMessageType?: string[];
  /**
  * When the `type` attribute is set to:
  *   - One of [`admin-alert-access`, `syslog-based-access`, `syslog-text-access`, `json-access`, `syslog-json-access`, `console-json-access`, `file-based-access`]: Indicates whether to use generified version of certain message strings, including diagnostic messages, additional information messages, authentication failure reasons, and disconnect messages. Generified versions of those strings may use placeholders (like %s for a string or %d for an integer) rather than the version of the string with those placeholders replaced with specific values.
  *   - One of [`console-json-error`, `syslog-text-error`, `file-based-error`, `json-error`, `syslog-json-error`]: Indicates whether to use the generified version of the log message string (which may use placeholders like %s for a string or %d for an integer), rather than the version of the message with those placeholders replaced with specific values that would normally be written to the log.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_publisher#generify_message_strings_when_possible DefaultLogPublisher#generify_message_strings_when_possible}
  */
  readonly generifyMessageStringsWhenPossible?: boolean | cdktf.IResolvable;
  /**
  * Supported in PingDirectory product version 10.3.0.0+. Specifies the HTTP event types to include in the log.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_publisher#http_event DefaultLogPublisher#http_event}
  */
  readonly httpEvent?: string[];
  /**
  * Specifies the HTTP message types which can be logged.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_publisher#http_message_type DefaultLogPublisher#http_message_type}
  */
  readonly httpMessageType?: string[];
  /**
  * Specifies the ID token validator message types that can be logged.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_publisher#id_token_validator_message_type DefaultLogPublisher#id_token_validator_message_type}
  */
  readonly idTokenValidatorMessageType?: string[];
  /**
  * Indicates whether log messages for add requests should include a list of the names of the attributes included in the entry to add.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_publisher#include_add_attribute_names DefaultLogPublisher#include_add_attribute_names}
  */
  readonly includeAddAttributeNames?: boolean | cdktf.IResolvable;
  /**
  * Supported in PingDirectory product version 10.1.0.0+. Indicates whether to log connection details in request messages, including, where applicable, the client IP address and port, the server IP address and port, and the communication protocol.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_publisher#include_connection_details_in_request_messages DefaultLogPublisher#include_connection_details_in_request_messages}
  */
  readonly includeConnectionDetailsInRequestMessages?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether log messages for search requests should include extended information from the request, including the requested size limit, time limit, alias dereferencing behavior, and types only behavior.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_publisher#include_extended_search_request_details DefaultLogPublisher#include_extended_search_request_details}
  */
  readonly includeExtendedSearchRequestDetails?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether log messages should include the instance name for the Directory Server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_publisher#include_instance_name DefaultLogPublisher#include_instance_name}
  */
  readonly includeInstanceName?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether to include information about any intermediate client request control that may have been included in the request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_publisher#include_intermediate_client_request_control DefaultLogPublisher#include_intermediate_client_request_control}
  */
  readonly includeIntermediateClientRequestControl?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether log messages for modify requests should include a list of the names of the attributes to be modified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_publisher#include_modify_attribute_names DefaultLogPublisher#include_modify_attribute_names}
  */
  readonly includeModifyAttributeNames?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether to include information about any operation purpose request control that may have been included in the request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_publisher#include_operation_purpose_request_control DefaultLogPublisher#include_operation_purpose_request_control}
  */
  readonly includeOperationPurposeRequestControl?: boolean | cdktf.IResolvable;
  /**
  * Specifies a set of HTTP request URL paths to determine whether log messages are included for a HTTP request. Log messages are included for a HTTP request if the request path does not match any exclude-path-pattern, and the request path does match an include-path-pattern (or no include-path-pattern is specified).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_publisher#include_path_pattern DefaultLogPublisher#include_path_pattern}
  */
  readonly includePathPattern?: string[];
  /**
  * Indicates whether log messages should include the product name for the Directory Server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_publisher#include_product_name DefaultLogPublisher#include_product_name}
  */
  readonly includeProductName?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether to log information about the replication change ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_publisher#include_replication_change_id DefaultLogPublisher#include_replication_change_id}
  */
  readonly includeReplicationChangeId?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether log messages for operation requests should include a list of the OIDs of any controls included in the request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_publisher#include_request_controls DefaultLogPublisher#include_request_controls}
  */
  readonly includeRequestControls?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether log messages for intermediate responses should include information about the associated operation request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_publisher#include_request_details_in_intermediate_response_messages DefaultLogPublisher#include_request_details_in_intermediate_response_messages}
  */
  readonly includeRequestDetailsInIntermediateResponseMessages?: boolean | cdktf.IResolvable;
  /**
  * When the `type` attribute is set to:
  *   - One of [`admin-alert-access`, `syslog-based-access`, `syslog-text-access`, `json-access`, `syslog-json-access`, `console-json-access`, `file-based-access`]: Indicates whether log messages for operation results should include information about both the request and the result.
  *   - One of [`detailed-http-operation`, `syslog-json-http-operation`, `console-json-http-operation`, `file-based-json-http-operation`]: Indicates whether result log messages should include all of the elements of request log messages. This may be used to record a single message per operation with details about both the request and response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_publisher#include_request_details_in_result_messages DefaultLogPublisher#include_request_details_in_result_messages}
  */
  readonly includeRequestDetailsInResultMessages?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether log messages for search result entries should include information about the associated search request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_publisher#include_request_details_in_search_entry_messages DefaultLogPublisher#include_request_details_in_search_entry_messages}
  */
  readonly includeRequestDetailsInSearchEntryMessages?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether log messages for search result references should include information about the associated search request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_publisher#include_request_details_in_search_reference_messages DefaultLogPublisher#include_request_details_in_search_reference_messages}
  */
  readonly includeRequestDetailsInSearchReferenceMessages?: boolean | cdktf.IResolvable;
  /**
  * When the `type` attribute is set to:
  *   - One of [`syslog-json-audit`, `admin-alert-access`, `syslog-based-access`, `file-based-json-audit`, `syslog-text-access`, `json-access`, `file-based-audit`, `syslog-json-access`, `console-json-audit`, `console-json-access`, `file-based-access`]: Indicates whether log messages for operation requests should include the DN of the authenticated user for the client connection on which the operation was requested.
  *   - `operation-timing-access`: Indicates whether log messages should include the DN of the authenticated user for the client connection on which the operation was requested.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_publisher#include_requester_dn DefaultLogPublisher#include_requester_dn}
  */
  readonly includeRequesterDn?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether log messages for operation requests should include the IP address of the client that requested the operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_publisher#include_requester_ip_address DefaultLogPublisher#include_requester_ip_address}
  */
  readonly includeRequesterIpAddress?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether log messages for operation results should include a list of the OIDs of any controls included in the result.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_publisher#include_response_controls DefaultLogPublisher#include_response_controls}
  */
  readonly includeResponseControls?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether result log messages should include human-readable names for result codes in addition to their numeric values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_publisher#include_result_code_names DefaultLogPublisher#include_result_code_names}
  */
  readonly includeResultCodeNames?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether log messages for search result entries should include a list of the names of the attributes included in the entry that was returned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_publisher#include_search_entry_attribute_names DefaultLogPublisher#include_search_entry_attribute_names}
  */
  readonly includeSearchEntryAttributeNames?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether log messages should include the startup ID for the Directory Server, which is a value assigned to the server instance at startup and may be used to identify when the server has been restarted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_publisher#include_startup_id DefaultLogPublisher#include_startup_id}
  */
  readonly includeStartupId?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether log messages should include the thread ID for the Directory Server in each log message. This ID can be used to correlate log messages from the same thread within a single log as well as generated by the same thread across different types of log files. More information about the thread with a specific ID can be obtained using the cn=JVM Stack Trace,cn=monitor entry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_publisher#include_thread_id DefaultLogPublisher#include_thread_id}
  */
  readonly includeThreadId?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether to log information about the result of replication assurance processing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_publisher#log_assurance_completed DefaultLogPublisher#log_assurance_completed}
  */
  readonly logAssuranceCompleted?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether to log information about any client certificates presented to the server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_publisher#log_client_certificates DefaultLogPublisher#log_client_certificates}
  */
  readonly logClientCertificates?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether to log information about connections established to the server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_publisher#log_connects DefaultLogPublisher#log_connects}
  */
  readonly logConnects?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether to log information about connections that have been closed by the client or terminated by the server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_publisher#log_disconnects DefaultLogPublisher#log_disconnects}
  */
  readonly logDisconnects?: boolean | cdktf.IResolvable;
  /**
  * The behavior to use for determining which fields to log and whether to transform the values of those fields in any way.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_publisher#log_field_behavior DefaultLogPublisher#log_field_behavior}
  */
  readonly logFieldBehavior?: string;
  /**
  * The log field mapping associates loggable fields to database column names. The table name is not part of this mapping.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_publisher#log_field_mapping DefaultLogPublisher#log_field_mapping}
  */
  readonly logFieldMapping?: string;
  /**
  * When the `type` attribute is set to:
  *   - `third-party-file-based-access`: The file name to use for the log files generated by the Third Party File Based Access Log Publisher. The path to the file can be specified either as relative to the server root or as an absolute path.
  *   - `operation-timing-access`: The file name to use for the log files generated by the Operation Timing Access Log Publisher. The path to the file can be specified either as relative to the server root or as an absolute path.
  *   - `file-based-trace`: The file name to use for the log files generated by the File Based Trace Log Publisher. The path to the file can be specified either as relative to the server root or as an absolute path.
  *   - `common-log-file-http-operation`: The file name to use for the log files generated by the Common Log File HTTP Operation Log Publisher. The path to the file can be specified either as relative to the server root or as an absolute path.
  *   - `file-based-json-audit`: The file name to use for the log files generated by the File Based JSON Audit Log Publisher. The path to the file can be specified either as relative to the server root or as an absolute path.
  *   - `file-based-debug`: The file name to use for the log files generated by the File Based Debug Log Publisher. The path to the file can be specified either as relative to the server root or as an absolute path.
  *   - `file-based-error`: The file name to use for the log files generated by the File Based Error Log Publisher. The path to the file can be specified either as relative to the server root or as an absolute path.
  *   - `detailed-http-operation`: The file name to use for the log files generated by the Detailed HTTP Operation Log Publisher. The path to the file can be specified either as relative to the server root or as an absolute path.
  *   - `json-access`: The file name to use for the log files generated by the JSON Access Log Publisher. The path to the file can be specified either as relative to the server root or as an absolute path.
  *   - `debug-access`: The file name to use for the log files generated by the Debug Access Log Publisher. The path to the file can be specified either as relative to the server root or as an absolute path.
  *   - `file-based-audit`: The file name to use for the log files generated by the File Based Audit Log Publisher. The path to the file can be specified either as relative to the server root or as an absolute path.
  *   - `json-error`: The file name to use for the log files generated by the JSON Error Log Publisher. The path to the file can be specified either as relative to the server root or as an absolute path.
  *   - `groovy-scripted-file-based-access`: The file name to use for the log files generated by the Scripted File Based Access Log Publisher. The path to the file can be specified either as relative to the server root or as an absolute path.
  *   - `groovy-scripted-file-based-error`: The file name to use for the log files generated by the Scripted File Based Error Log Publisher. The path to the file can be specified either as relative to the server root or as an absolute path.
  *   - `third-party-file-based-error`: The file name to use for the log files generated by the Third Party File Based Error Log Publisher. The path to the file can be specified either as relative to the server root or as an absolute path.
  *   - `file-based-access`: The file name to use for the log files generated by the File Based Access Log Publisher. The path to the file can be specified either as relative to the server root or as an absolute path.
  *   - `file-based-json-http-operation`: The file name to use for the log files generated by the File Based JSON HTTP Operation Log Publisher. The path to the file can be specified either as relative to the server root or as an absolute path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_publisher#log_file DefaultLogPublisher#log_file}
  */
  readonly logFile?: string;
  /**
  * When the `type` attribute is set to:
  *   - `third-party-file-based-access`: The UNIX permissions of the log files created by this Third Party File Based Access Log Publisher.
  *   - `operation-timing-access`: The UNIX permissions of the log files created by this Operation Timing Access Log Publisher.
  *   - `file-based-trace`: The UNIX permissions of the log files created by this File Based Trace Log Publisher.
  *   - `common-log-file-http-operation`: The UNIX permissions of the log files created by this Common Log File HTTP Operation Log Publisher.
  *   - `file-based-json-audit`: The UNIX permissions of the log files created by this File Based JSON Audit Log Publisher.
  *   - `file-based-debug`: The UNIX permissions of the log files created by this File Based Debug Log Publisher.
  *   - `file-based-error`: The UNIX permissions of the log files created by this File Based Error Log Publisher.
  *   - `detailed-http-operation`: The UNIX permissions of the log files created by this Detailed HTTP Operation Log Publisher.
  *   - `json-access`: The UNIX permissions of the log files created by this JSON Access Log Publisher.
  *   - `debug-access`: The UNIX permissions of the log files created by this Debug Access Log Publisher.
  *   - `file-based-audit`: The UNIX permissions of the log files created by this File Based Audit Log Publisher.
  *   - `json-error`: The UNIX permissions of the log files created by this JSON Error Log Publisher.
  *   - `groovy-scripted-file-based-access`: The UNIX permissions of the log files created by this Scripted File Based Access Log Publisher.
  *   - `groovy-scripted-file-based-error`: The UNIX permissions of the log files created by this Scripted File Based Error Log Publisher.
  *   - `third-party-file-based-error`: The UNIX permissions of the log files created by this Third Party File Based Error Log Publisher.
  *   - `file-based-access`: The UNIX permissions of the log files created by this File Based Access Log Publisher.
  *   - `file-based-json-http-operation`: The UNIX permissions of the log files created by this File Based JSON HTTP Operation Log Publisher.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_publisher#log_file_permissions DefaultLogPublisher#log_file_permissions}
  */
  readonly logFilePermissions?: string;
  /**
  * Indicates whether to log information about intermediate responses sent to the client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_publisher#log_intermediate_responses DefaultLogPublisher#log_intermediate_responses}
  */
  readonly logIntermediateResponses?: boolean | cdktf.IResolvable;
  /**
  * Supported in PingDirectory product version 10.1.0.0+. Policy to determine whether the Error Log Publisher should print a message to the log.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_publisher#log_message_exclusion_policy DefaultLogPublisher#log_message_exclusion_policy}
  */
  readonly logMessageExclusionPolicy?: string[];
  /**
  * Indicates whether the redirect URI (i.e., the value of the "Location" header from responses) should be included in response log messages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_publisher#log_redirect_uri DefaultLogPublisher#log_redirect_uri}
  */
  readonly logRedirectUri?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether to log the type of credentials given if an "Authorization" header was included in the request. Logging the authorization type may be useful, and is much more secure than logging the entire value of the "Authorization" header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_publisher#log_request_authorization_type DefaultLogPublisher#log_request_authorization_type}
  */
  readonly logRequestAuthorizationType?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether to log the names of any cookies included in an HTTP request. Logging cookie names may be useful and is much more secure than logging the entire content of the cookies (which may include sensitive information).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_publisher#log_request_cookie_names DefaultLogPublisher#log_request_cookie_names}
  */
  readonly logRequestCookieNames?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether request log messages should include information about HTTP headers included in the request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_publisher#log_request_headers DefaultLogPublisher#log_request_headers}
  */
  readonly logRequestHeaders?: string;
  /**
  * Indicates what (if any) information about request parameters should be included in request log messages. Note that this will only be used for requests with a method other than GET, since GET request parameters will be included in the request URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_publisher#log_request_parameters DefaultLogPublisher#log_request_parameters}
  */
  readonly logRequestParameters?: string;
  /**
  * Indicates whether request log messages should include information about the HTTP version specified in the request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_publisher#log_request_protocol DefaultLogPublisher#log_request_protocol}
  */
  readonly logRequestProtocol?: boolean | cdktf.IResolvable;
  /**
  * When the `type` attribute is set to:
  *   - One of [`third-party-file-based-access`, `admin-alert-access`, `jdbc-based-access`, `syslog-based-access`, `syslog-text-access`, `json-access`, `debug-access`, `third-party-access`, `groovy-scripted-file-based-access`, `syslog-json-access`, `groovy-scripted-access`, `console-json-access`, `file-based-access`]: Indicates whether to log information about requests received from clients.
  *   - One of [`detailed-http-operation`, `syslog-json-http-operation`, `console-json-http-operation`, `file-based-json-http-operation`]: Indicates whether to record a log message with information about requests received from the client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_publisher#log_requests DefaultLogPublisher#log_requests}
  */
  readonly logRequests?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether to log the names of any cookies set in an HTTP response. Logging cookie names may be useful and is much more secure than logging the entire content of the cookies (which may include sensitive information).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_publisher#log_response_cookie_names DefaultLogPublisher#log_response_cookie_names}
  */
  readonly logResponseCookieNames?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether response log messages should include information about HTTP headers included in the response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_publisher#log_response_headers DefaultLogPublisher#log_response_headers}
  */
  readonly logResponseHeaders?: string;
  /**
  * When the `type` attribute is set to:
  *   - One of [`third-party-file-based-access`, `admin-alert-access`, `jdbc-based-access`, `syslog-based-access`, `syslog-text-access`, `json-access`, `debug-access`, `third-party-access`, `groovy-scripted-file-based-access`, `syslog-json-access`, `groovy-scripted-access`, `console-json-access`, `file-based-access`]: Indicates whether to log information about the results of client requests.
  *   - One of [`detailed-http-operation`, `syslog-json-http-operation`, `console-json-http-operation`, `file-based-json-http-operation`]: Indicates whether to record a log message with information about the result of processing a requested HTTP operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_publisher#log_results DefaultLogPublisher#log_results}
  */
  readonly logResults?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether to log information about search result entries sent to the client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_publisher#log_search_entries DefaultLogPublisher#log_search_entries}
  */
  readonly logSearchEntries?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether to log information about search result references sent to the client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_publisher#log_search_references DefaultLogPublisher#log_search_references}
  */
  readonly logSearchReferences?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether to log information about the result of any security negotiation (e.g., SSL handshake) processing that has been performed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_publisher#log_security_negotiation DefaultLogPublisher#log_security_negotiation}
  */
  readonly logSecurityNegotiation?: boolean | cdktf.IResolvable;
  /**
  * The table name to log entries to the database server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_publisher#log_table_name DefaultLogPublisher#log_table_name}
  */
  readonly logTableName?: string;
  /**
  * Specifies the behavior that the server should exhibit if an error occurs during logging processing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_publisher#logging_error_behavior DefaultLogPublisher#logging_error_behavior}
  */
  readonly loggingErrorBehavior?: string;
  /**
  * When the `type` attribute is set to:
  *   - One of [`operation-timing-access`, `admin-alert-access`, `file-based-trace`, `syslog-based-access`, `syslog-text-access`, `json-access`, `syslog-json-access`, `console-json-access`, `file-based-access`]: Specifies the maximum number of characters that may be included in any string in a log message before that string is truncated and replaced with a placeholder indicating the number of characters that were omitted. This can help prevent extremely long log messages from being written.
  *   - `detailed-http-operation`: Specifies the maximum length of any individual string that should be logged. If a log message includes a string longer than this number of characters, it will be truncated. A value of zero indicates that no truncation will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_publisher#max_string_length DefaultLogPublisher#max_string_length}
  */
  readonly maxStringLength?: number;
  /**
  * The minimum processing time (i.e., "etime") for operations that should be logged by this Operation Timing Access Log Publisher
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_publisher#min_included_operation_processing_time DefaultLogPublisher#min_included_operation_processing_time}
  */
  readonly minIncludedOperationProcessingTime?: string;
  /**
  * The minimum length of time in nanoseconds that an operation phase should take before it is included in a log message.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_publisher#min_included_phase_time_nanos DefaultLogPublisher#min_included_phase_time_nanos}
  */
  readonly minIncludedPhaseTimeNanos?: number;
  /**
  * Name of this config object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_publisher#name DefaultLogPublisher#name}
  */
  readonly name: string;
  /**
  * When the `type` attribute is set to:
  *   - One of [`syslog-json-audit`, `file-based-json-audit`, `file-based-audit`, `console-json-audit`]: Specifies the names of any attribute types that should have their values obscured in the audit log because they may be considered sensitive.
  *   - `debug-access`: Specifies the names of any attribute types that should have their values obscured if the obscure-sensitive-content property has a value of true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_publisher#obscure_attribute DefaultLogPublisher#obscure_attribute}
  */
  readonly obscureAttribute?: string[];
  /**
  * Indicates whether the resulting log file should attempt to obscure content that may be considered sensitive. This primarily includes the credentials for bind requests, the values of password modify extended requests and responses, and the values of any attributes specified in the obscure-attribute property. Note that the use of this option does not guarantee no sensitive information will be exposed, so the log output should still be carefully guarded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_publisher#obscure_sensitive_content DefaultLogPublisher#obscure_sensitive_content}
  */
  readonly obscureSensitiveContent?: boolean | cdktf.IResolvable;
  /**
  * When the `type` attribute is set to:
  *   - `console-json-error`: Specifies the output stream to which JSON-formatted error log messages should be written.
  *   - `console-json-audit`: Specifies the output stream to which JSON-formatted audit log messages should be written.
  *   - `console-json-http-operation`: Specifies the output stream to which JSON-formatted HTTP operation log messages should be written.
  *   - `console-json-access`: Specifies the output stream to which JSON-formatted access log messages should be written.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_publisher#output_location DefaultLogPublisher#output_location}
  */
  readonly outputLocation?: string;
  /**
  * Specifies the override severity levels for the logger based on the category of the messages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_publisher#override_severity DefaultLogPublisher#override_severity}
  */
  readonly overrideSeverity?: string[];
  /**
  * The maximum number of log records that can be stored in the asynchronous queue.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_publisher#queue_size DefaultLogPublisher#queue_size}
  */
  readonly queueSize?: number;
  /**
  * Specifies a set of request criteria that must match the associated operation request in order for a request or result to be logged by this Access Log Publisher.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_publisher#request_criteria DefaultLogPublisher#request_criteria}
  */
  readonly requestCriteria?: string;
  /**
  * Specifies a set of result criteria that must match the associated operation result in order for that result to be logged by this Access Log Publisher.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_publisher#result_criteria DefaultLogPublisher#result_criteria}
  */
  readonly resultCriteria?: string;
  /**
  * When the `type` attribute is set to:
  *   - `third-party-file-based-access`: The retention policy to use for the Third Party File Based Access Log Publisher .
  *   - `operation-timing-access`: The retention policy to use for the Operation Timing Access Log Publisher .
  *   - `file-based-trace`: The retention policy to use for the File Based Trace Log Publisher .
  *   - `common-log-file-http-operation`: The retention policy to use for the Common Log File HTTP Operation Log Publisher .
  *   - `file-based-json-audit`: The retention policy to use for the File Based JSON Audit Log Publisher .
  *   - `file-based-debug`: The retention policy to use for the File Based Debug Log Publisher .
  *   - `file-based-error`: The retention policy to use for the File Based Error Log Publisher .
  *   - `detailed-http-operation`: The retention policy to use for the Detailed HTTP Operation Log Publisher .
  *   - `json-access`: The retention policy to use for the JSON Access Log Publisher .
  *   - `debug-access`: The retention policy to use for the Debug Access Log Publisher .
  *   - `file-based-audit`: The retention policy to use for the File Based Audit Log Publisher .
  *   - `json-error`: The retention policy to use for the JSON Error Log Publisher .
  *   - `groovy-scripted-file-based-access`: The retention policy to use for the Scripted File Based Access Log Publisher .
  *   - `groovy-scripted-file-based-error`: The retention policy to use for the Scripted File Based Error Log Publisher .
  *   - `third-party-file-based-error`: The retention policy to use for the Third Party File Based Error Log Publisher .
  *   - `file-based-access`: The retention policy to use for the File Based Access Log Publisher .
  *   - `file-based-json-http-operation`: The retention policy to use for the File Based JSON HTTP Operation Log Publisher .
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_publisher#retention_policy DefaultLogPublisher#retention_policy}
  */
  readonly retentionPolicy?: string[];
  /**
  * A listener that should be notified whenever a log file is rotated out of service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_publisher#rotation_listener DefaultLogPublisher#rotation_listener}
  */
  readonly rotationListener?: string[];
  /**
  * When the `type` attribute is set to:
  *   - `third-party-file-based-access`: The rotation policy to use for the Third Party File Based Access Log Publisher .
  *   - `operation-timing-access`: The rotation policy to use for the Operation Timing Access Log Publisher .
  *   - `file-based-trace`: The rotation policy to use for the File Based Trace Log Publisher .
  *   - `common-log-file-http-operation`: The rotation policy to use for the Common Log File HTTP Operation Log Publisher .
  *   - `file-based-json-audit`: The rotation policy to use for the File Based JSON Audit Log Publisher .
  *   - `file-based-debug`: The rotation policy to use for the File Based Debug Log Publisher .
  *   - `file-based-error`: The rotation policy to use for the File Based Error Log Publisher .
  *   - `detailed-http-operation`: The rotation policy to use for the Detailed HTTP Operation Log Publisher .
  *   - `json-access`: The rotation policy to use for the JSON Access Log Publisher .
  *   - `debug-access`: The rotation policy to use for the Debug Access Log Publisher .
  *   - `file-based-audit`: The rotation policy to use for the File Based Audit Log Publisher .
  *   - `json-error`: The rotation policy to use for the JSON Error Log Publisher .
  *   - `groovy-scripted-file-based-access`: The rotation policy to use for the Scripted File Based Access Log Publisher .
  *   - `groovy-scripted-file-based-error`: The rotation policy to use for the Scripted File Based Error Log Publisher .
  *   - `third-party-file-based-error`: The rotation policy to use for the Third Party File Based Error Log Publisher .
  *   - `file-based-access`: The rotation policy to use for the File Based Access Log Publisher .
  *   - `file-based-json-http-operation`: The rotation policy to use for the File Based JSON HTTP Operation Log Publisher .
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_publisher#rotation_policy DefaultLogPublisher#rotation_policy}
  */
  readonly rotationPolicy?: string[];
  /**
  * Specifies the SCIM message types which can be logged.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_publisher#scim_message_type DefaultLogPublisher#scim_message_type}
  */
  readonly scimMessageType?: string[];
  /**
  * When the `type` attribute is set to:
  *   - `groovy-scripted-file-based-access`: The set of arguments used to customize the behavior for the Scripted File Based Access Log Publisher. Each configuration property should be given in the form 'name=value'.
  *   - `groovy-scripted-file-based-error`: The set of arguments used to customize the behavior for the Scripted File Based Error Log Publisher. Each configuration property should be given in the form 'name=value'.
  *   - `groovy-scripted-access`: The set of arguments used to customize the behavior for the Scripted Access Log Publisher. Each configuration property should be given in the form 'name=value'.
  *   - `groovy-scripted-error`: The set of arguments used to customize the behavior for the Scripted Error Log Publisher. Each configuration property should be given in the form 'name=value'.
  *   - `groovy-scripted-http-operation`: The set of arguments used to customize the behavior for the Scripted HTTP Operation Log Publisher. Each configuration property should be given in the form 'name=value'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_publisher#script_argument DefaultLogPublisher#script_argument}
  */
  readonly scriptArgument?: string[];
  /**
  * When the `type` attribute is set to:
  *   - `groovy-scripted-file-based-access`: The fully-qualified name of the Groovy class providing the logic for the Groovy Scripted File Based Access Log Publisher.
  *   - `groovy-scripted-file-based-error`: The fully-qualified name of the Groovy class providing the logic for the Groovy Scripted File Based Error Log Publisher.
  *   - `groovy-scripted-access`: The fully-qualified name of the Groovy class providing the logic for the Groovy Scripted Access Log Publisher.
  *   - `groovy-scripted-error`: The fully-qualified name of the Groovy class providing the logic for the Groovy Scripted Error Log Publisher.
  *   - `groovy-scripted-http-operation`: The fully-qualified name of the Groovy class providing the logic for the Groovy Scripted HTTP Operation Log Publisher.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_publisher#script_class DefaultLogPublisher#script_class}
  */
  readonly scriptClass?: string;
  /**
  * When the `type` attribute is set to:
  *   - One of [`third-party-file-based-access`, `jdbc-based-access`, `syslog-based-access`, `syslog-text-access`, `json-access`, `debug-access`, `third-party-access`, `groovy-scripted-file-based-access`, `syslog-json-access`, `groovy-scripted-access`, `console-json-access`, `file-based-access`]: Specifies a set of search entry criteria that must match the associated search result entry in order for that it to be logged by this Access Log Publisher.
  *   - `admin-alert-access`: Specifies a set of search entry criteria that must match the associated search result entry in order for that it to be logged by this Admin Alert Access Log Publisher.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_publisher#search_entry_criteria DefaultLogPublisher#search_entry_criteria}
  */
  readonly searchEntryCriteria?: string;
  /**
  * When the `type` attribute is set to:
  *   - One of [`third-party-file-based-access`, `jdbc-based-access`, `syslog-based-access`, `syslog-text-access`, `json-access`, `debug-access`, `third-party-access`, `groovy-scripted-file-based-access`, `syslog-json-access`, `groovy-scripted-access`, `console-json-access`, `file-based-access`]: Specifies a set of search reference criteria that must match the associated search result reference in order for that it to be logged by this Access Log Publisher.
  *   - `admin-alert-access`: Specifies a set of search reference criteria that must match the associated search result reference in order for that it to be logged by this Admin Alert Access Log Publisher.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_publisher#search_reference_criteria DefaultLogPublisher#search_reference_criteria}
  */
  readonly searchReferenceCriteria?: string;
  /**
  * The JDBC-based Database Server to use for a connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_publisher#server DefaultLogPublisher#server}
  */
  readonly server?: string;
  /**
  * Specifies the hostname or IP address of the syslogd host to log to. It is highly recommend to use localhost.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_publisher#server_host_name DefaultLogPublisher#server_host_name}
  */
  readonly serverHostName?: string;
  /**
  * Specifies the port number of the syslogd host to log to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_publisher#server_port DefaultLogPublisher#server_port}
  */
  readonly serverPort?: number;
  /**
  * Indicates whether the log should be cryptographically signed so that the log content cannot be altered in an undetectable manner.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_publisher#sign_log DefaultLogPublisher#sign_log}
  */
  readonly signLog?: boolean | cdktf.IResolvable;
  /**
  * Specifies the audit behavior for delete and modify operations on soft-deleted entries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_publisher#soft_delete_entry_audit_behavior DefaultLogPublisher#soft_delete_entry_audit_behavior}
  */
  readonly softDeleteEntryAuditBehavior?: string;
  /**
  * Indicates whether internal operations (for example, operations that are initiated by plugins) should be logged along with the operations that are requested by users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_publisher#suppress_internal_operations DefaultLogPublisher#suppress_internal_operations}
  */
  readonly suppressInternalOperations?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether access messages that are generated by replication operations should be suppressed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_publisher#suppress_replication_operations DefaultLogPublisher#suppress_replication_operations}
  */
  readonly suppressReplicationOperations?: boolean | cdktf.IResolvable;
  /**
  * Supported in PingDirectory product version 10.3.0.0+. Indicates whether to suppress virtual attributes from delete audit log messages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_publisher#suppress_virtual_attributes_in_delete_records DefaultLogPublisher#suppress_virtual_attributes_in_delete_records}
  */
  readonly suppressVirtualAttributesInDeleteRecords?: boolean | cdktf.IResolvable;
  /**
  * Specifies the case-insensitive names of request headers that should be omitted from log messages (e.g., for the purpose of brevity or security). This will only be used if the log-request-headers property has a value of true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_publisher#suppressed_request_header_name DefaultLogPublisher#suppressed_request_header_name}
  */
  readonly suppressedRequestHeaderName?: string[];
  /**
  * Specifies the case-insensitive names of request parameters that should be omitted from log messages (e.g., for the purpose of brevity or security). This will only be used if the log-request-parameters property has a value of parameter-names or parameter-names-and-values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_publisher#suppressed_request_parameter_name DefaultLogPublisher#suppressed_request_parameter_name}
  */
  readonly suppressedRequestParameterName?: string[];
  /**
  * Specifies the case-insensitive names of response headers that should be omitted from log messages (e.g., for the purpose of brevity or security). This will only be used if the log-response-headers property has a value of true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_publisher#suppressed_response_header_name DefaultLogPublisher#suppressed_response_header_name}
  */
  readonly suppressedResponseHeaderName?: string[];
  /**
  * The syslog server to which messages should be sent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_publisher#syslog_external_server DefaultLogPublisher#syslog_external_server}
  */
  readonly syslogExternalServer?: string[];
  /**
  * When the `type` attribute is set to:
  *   - `syslog-json-audit`: The syslog facility to use for the messages that are logged by this Syslog JSON Audit Log Publisher.
  *   - `syslog-based-error`: Specifies the syslog facility to use for this Syslog Based Error Log Publisher
  *   - `syslog-text-error`: The syslog facility to use for the messages that are logged by this Syslog Text Error Log Publisher.
  *   - `syslog-based-access`: Specifies the syslog facility to use for this Syslog Based Access Log Publisher
  *   - `syslog-text-access`: The syslog facility to use for the messages that are logged by this Syslog Text Access Log Publisher.
  *   - `syslog-json-http-operation`: The syslog facility to use for the messages that are logged by this Syslog JSON HTTP Operation Log Publisher.
  *   - `syslog-json-access`: The syslog facility to use for the messages that are logged by this Syslog JSON Access Log Publisher.
  *   - `syslog-json-error`: The syslog facility to use for the messages that are logged by this Syslog JSON Error Log Publisher.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_publisher#syslog_facility DefaultLogPublisher#syslog_facility}
  */
  readonly syslogFacility?: string;
  /**
  * When the `type` attribute is set to:
  *   - `syslog-json-audit`: The application name that will be included in syslog messages that are logged by this Syslog JSON Audit Log Publisher.
  *   - `syslog-text-error`: The application name that will be included in syslog messages that are logged by this Syslog Text Error Log Publisher.
  *   - `syslog-text-access`: The application name that will be included in syslog messages that are logged by this Syslog Text Access Log Publisher.
  *   - `syslog-json-http-operation`: The application name that will be included in syslog messages that are logged by this Syslog JSON HTTP Operation Log Publisher.
  *   - `syslog-json-access`: The application name that will be included in syslog messages that are logged by this Syslog JSON Access Log Publisher.
  *   - `syslog-json-error`: The application name that will be included in syslog messages that are logged by this Syslog JSON Error Log Publisher.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_publisher#syslog_message_application_name DefaultLogPublisher#syslog_message_application_name}
  */
  readonly syslogMessageApplicationName?: string;
  /**
  * When the `type` attribute is set to:
  *   - `syslog-json-audit`: The local host name that will be included in syslog messages that are logged by this Syslog JSON Audit Log Publisher.
  *   - `syslog-text-error`: The local host name that will be included in syslog messages that are logged by this Syslog Text Error Log Publisher.
  *   - `syslog-text-access`: The local host name that will be included in syslog messages that are logged by this Syslog Text Access Log Publisher.
  *   - `syslog-json-http-operation`: The local host name that will be included in syslog messages that are logged by this Syslog JSON HTTP Operation Log Publisher.
  *   - `syslog-json-access`: The local host name that will be included in syslog messages that are logged by this Syslog JSON Access Log Publisher.
  *   - `syslog-json-error`: The local host name that will be included in syslog messages that are logged by this Syslog JSON Error Log Publisher.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_publisher#syslog_message_host_name DefaultLogPublisher#syslog_message_host_name}
  */
  readonly syslogMessageHostName?: string;
  /**
  * When the `type` attribute is set to:
  *   - `syslog-json-audit`: The syslog severity to use for the messages that are logged by this Syslog JSON Audit Log Publisher.
  *   - `syslog-text-error`: The syslog severity to use for the messages that are logged by this Syslog Text Error Log Publisher. If this is not specified, then the severity for each syslog message will be automatically based on the severity for the associated log message.
  *   - `syslog-text-access`: The syslog severity to use for the messages that are logged by this Syslog Text Access Log Publisher.
  *   - `syslog-json-http-operation`: The syslog severity to use for the messages that are logged by this Syslog JSON HTTP Operation Log Publisher.
  *   - `syslog-json-access`: The syslog severity to use for the messages that are logged by this Syslog JSON Access Log Publisher.
  *   - `syslog-json-error`: The syslog severity to use for the messages that are logged by this Syslog JSON Error Log Publisher. If this is not specified, then the severity for each syslog message will be automatically based on the severity for the associated log message.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_publisher#syslog_severity DefaultLogPublisher#syslog_severity}
  */
  readonly syslogSeverity?: string;
  /**
  * Specifies the interval at which to check whether the log files need to be rotated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_publisher#time_interval DefaultLogPublisher#time_interval}
  */
  readonly timeInterval?: string;
  /**
  * Specifies the smallest time unit to be included in timestamps.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_publisher#timestamp_precision DefaultLogPublisher#timestamp_precision}
  */
  readonly timestampPrecision?: string;
  /**
  * Indicates whether the audit log should be written in reversible form so that it is possible to revert the changes if desired.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_publisher#use_reversible_form DefaultLogPublisher#use_reversible_form}
  */
  readonly useReversibleForm?: boolean | cdktf.IResolvable;
  /**
  * When the `type` attribute is set to:
  *   - One of [`syslog-json-audit`, `file-based-json-audit`, `syslog-json-http-operation`, `console-json-audit`, `console-json-http-operation`, `file-based-json-http-operation`]: Indicates whether the JSON objects should use a multi-line representation (with each object field and array value on its own line) that may be easier for administrators to read, but each message will be larger (because of additional spaces and end-of-line markers), and it may be more difficult to consume and parse through some text-oriented tools.
  *   - One of [`console-json-error`, `json-access`, `json-error`, `console-json-access`]: Indicates whether the JSON objects should be formatted to span multiple lines with a single element on each line. The multi-line format is potentially more user friendly (if administrators may need to look at the log files), but each message will be larger because of the additional spaces and end-of-line markers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_publisher#write_multi_line_messages DefaultLogPublisher#write_multi_line_messages}
  */
  readonly writeMultiLineMessages?: boolean | cdktf.IResolvable;
}
export interface DefaultLogPublisherRequiredActions {
}

export function defaultLogPublisherRequiredActionsToTerraform(struct?: DefaultLogPublisherRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function defaultLogPublisherRequiredActionsToHclTerraform(struct?: DefaultLogPublisherRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DefaultLogPublisherRequiredActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DefaultLogPublisherRequiredActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultLogPublisherRequiredActions | undefined) {
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

export class DefaultLogPublisherRequiredActionsList extends cdktf.ComplexList {

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
  public get(index: number): DefaultLogPublisherRequiredActionsOutputReference {
    return new DefaultLogPublisherRequiredActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_publisher pingdirectory_default_log_publisher}
*/
export class DefaultLogPublisher extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_default_log_publisher";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DefaultLogPublisher resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DefaultLogPublisher to import
  * @param importFromId The id of the existing DefaultLogPublisher that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_publisher#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DefaultLogPublisher to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_default_log_publisher", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_log_publisher pingdirectory_default_log_publisher} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DefaultLogPublisherConfig
  */
  public constructor(scope: Construct, id: string, config: DefaultLogPublisherConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_default_log_publisher',
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
    this._accessTokenValidatorMessageType = config.accessTokenValidatorMessageType;
    this._append = config.append;
    this._asynchronous = config.asynchronous;
    this._autoFlush = config.autoFlush;
    this._bufferSize = config.bufferSize;
    this._compressionMechanism = config.compressionMechanism;
    this._connectionCriteria = config.connectionCriteria;
    this._consentMessageType = config.consentMessageType;
    this._correlateRequestsAndResults = config.correlateRequestsAndResults;
    this._debugAciEnabled = config.debugAciEnabled;
    this._debugMessageType = config.debugMessageType;
    this._defaultDebugCategory = config.defaultDebugCategory;
    this._defaultDebugLevel = config.defaultDebugLevel;
    this._defaultIncludeThrowableCause = config.defaultIncludeThrowableCause;
    this._defaultOmitMethodEntryArguments = config.defaultOmitMethodEntryArguments;
    this._defaultOmitMethodReturnValue = config.defaultOmitMethodReturnValue;
    this._defaultSeverity = config.defaultSeverity;
    this._defaultThrowableStackFrames = config.defaultThrowableStackFrames;
    this._description = config.description;
    this._directoryRestApiMessageType = config.directoryRestApiMessageType;
    this._enabled = config.enabled;
    this._encryptLog = config.encryptLog;
    this._encryptionSettingsDefinitionId = config.encryptionSettingsDefinitionId;
    this._excludeAttribute = config.excludeAttribute;
    this._excludePathPattern = config.excludePathPattern;
    this._extensionArgument = config.extensionArgument;
    this._extensionClass = config.extensionClass;
    this._extensionMessageType = config.extensionMessageType;
    this._generifyMessageStringsWhenPossible = config.generifyMessageStringsWhenPossible;
    this._httpEvent = config.httpEvent;
    this._httpMessageType = config.httpMessageType;
    this._idTokenValidatorMessageType = config.idTokenValidatorMessageType;
    this._includeAddAttributeNames = config.includeAddAttributeNames;
    this._includeConnectionDetailsInRequestMessages = config.includeConnectionDetailsInRequestMessages;
    this._includeExtendedSearchRequestDetails = config.includeExtendedSearchRequestDetails;
    this._includeInstanceName = config.includeInstanceName;
    this._includeIntermediateClientRequestControl = config.includeIntermediateClientRequestControl;
    this._includeModifyAttributeNames = config.includeModifyAttributeNames;
    this._includeOperationPurposeRequestControl = config.includeOperationPurposeRequestControl;
    this._includePathPattern = config.includePathPattern;
    this._includeProductName = config.includeProductName;
    this._includeReplicationChangeId = config.includeReplicationChangeId;
    this._includeRequestControls = config.includeRequestControls;
    this._includeRequestDetailsInIntermediateResponseMessages = config.includeRequestDetailsInIntermediateResponseMessages;
    this._includeRequestDetailsInResultMessages = config.includeRequestDetailsInResultMessages;
    this._includeRequestDetailsInSearchEntryMessages = config.includeRequestDetailsInSearchEntryMessages;
    this._includeRequestDetailsInSearchReferenceMessages = config.includeRequestDetailsInSearchReferenceMessages;
    this._includeRequesterDn = config.includeRequesterDn;
    this._includeRequesterIpAddress = config.includeRequesterIpAddress;
    this._includeResponseControls = config.includeResponseControls;
    this._includeResultCodeNames = config.includeResultCodeNames;
    this._includeSearchEntryAttributeNames = config.includeSearchEntryAttributeNames;
    this._includeStartupId = config.includeStartupId;
    this._includeThreadId = config.includeThreadId;
    this._logAssuranceCompleted = config.logAssuranceCompleted;
    this._logClientCertificates = config.logClientCertificates;
    this._logConnects = config.logConnects;
    this._logDisconnects = config.logDisconnects;
    this._logFieldBehavior = config.logFieldBehavior;
    this._logFieldMapping = config.logFieldMapping;
    this._logFile = config.logFile;
    this._logFilePermissions = config.logFilePermissions;
    this._logIntermediateResponses = config.logIntermediateResponses;
    this._logMessageExclusionPolicy = config.logMessageExclusionPolicy;
    this._logRedirectUri = config.logRedirectUri;
    this._logRequestAuthorizationType = config.logRequestAuthorizationType;
    this._logRequestCookieNames = config.logRequestCookieNames;
    this._logRequestHeaders = config.logRequestHeaders;
    this._logRequestParameters = config.logRequestParameters;
    this._logRequestProtocol = config.logRequestProtocol;
    this._logRequests = config.logRequests;
    this._logResponseCookieNames = config.logResponseCookieNames;
    this._logResponseHeaders = config.logResponseHeaders;
    this._logResults = config.logResults;
    this._logSearchEntries = config.logSearchEntries;
    this._logSearchReferences = config.logSearchReferences;
    this._logSecurityNegotiation = config.logSecurityNegotiation;
    this._logTableName = config.logTableName;
    this._loggingErrorBehavior = config.loggingErrorBehavior;
    this._maxStringLength = config.maxStringLength;
    this._minIncludedOperationProcessingTime = config.minIncludedOperationProcessingTime;
    this._minIncludedPhaseTimeNanos = config.minIncludedPhaseTimeNanos;
    this._name = config.name;
    this._obscureAttribute = config.obscureAttribute;
    this._obscureSensitiveContent = config.obscureSensitiveContent;
    this._outputLocation = config.outputLocation;
    this._overrideSeverity = config.overrideSeverity;
    this._queueSize = config.queueSize;
    this._requestCriteria = config.requestCriteria;
    this._resultCriteria = config.resultCriteria;
    this._retentionPolicy = config.retentionPolicy;
    this._rotationListener = config.rotationListener;
    this._rotationPolicy = config.rotationPolicy;
    this._scimMessageType = config.scimMessageType;
    this._scriptArgument = config.scriptArgument;
    this._scriptClass = config.scriptClass;
    this._searchEntryCriteria = config.searchEntryCriteria;
    this._searchReferenceCriteria = config.searchReferenceCriteria;
    this._server = config.server;
    this._serverHostName = config.serverHostName;
    this._serverPort = config.serverPort;
    this._signLog = config.signLog;
    this._softDeleteEntryAuditBehavior = config.softDeleteEntryAuditBehavior;
    this._suppressInternalOperations = config.suppressInternalOperations;
    this._suppressReplicationOperations = config.suppressReplicationOperations;
    this._suppressVirtualAttributesInDeleteRecords = config.suppressVirtualAttributesInDeleteRecords;
    this._suppressedRequestHeaderName = config.suppressedRequestHeaderName;
    this._suppressedRequestParameterName = config.suppressedRequestParameterName;
    this._suppressedResponseHeaderName = config.suppressedResponseHeaderName;
    this._syslogExternalServer = config.syslogExternalServer;
    this._syslogFacility = config.syslogFacility;
    this._syslogMessageApplicationName = config.syslogMessageApplicationName;
    this._syslogMessageHostName = config.syslogMessageHostName;
    this._syslogSeverity = config.syslogSeverity;
    this._timeInterval = config.timeInterval;
    this._timestampPrecision = config.timestampPrecision;
    this._useReversibleForm = config.useReversibleForm;
    this._writeMultiLineMessages = config.writeMultiLineMessages;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_token_validator_message_type - computed: true, optional: true, required: false
  private _accessTokenValidatorMessageType?: string[]; 
  public get accessTokenValidatorMessageType() {
    return cdktf.Fn.tolist(this.getListAttribute('access_token_validator_message_type'));
  }
  public set accessTokenValidatorMessageType(value: string[]) {
    this._accessTokenValidatorMessageType = value;
  }
  public resetAccessTokenValidatorMessageType() {
    this._accessTokenValidatorMessageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenValidatorMessageTypeInput() {
    return this._accessTokenValidatorMessageType;
  }

  // append - computed: true, optional: true, required: false
  private _append?: boolean | cdktf.IResolvable; 
  public get append() {
    return this.getBooleanAttribute('append');
  }
  public set append(value: boolean | cdktf.IResolvable) {
    this._append = value;
  }
  public resetAppend() {
    this._append = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appendInput() {
    return this._append;
  }

  // asynchronous - computed: true, optional: true, required: false
  private _asynchronous?: boolean | cdktf.IResolvable; 
  public get asynchronous() {
    return this.getBooleanAttribute('asynchronous');
  }
  public set asynchronous(value: boolean | cdktf.IResolvable) {
    this._asynchronous = value;
  }
  public resetAsynchronous() {
    this._asynchronous = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asynchronousInput() {
    return this._asynchronous;
  }

  // auto_flush - computed: true, optional: true, required: false
  private _autoFlush?: boolean | cdktf.IResolvable; 
  public get autoFlush() {
    return this.getBooleanAttribute('auto_flush');
  }
  public set autoFlush(value: boolean | cdktf.IResolvable) {
    this._autoFlush = value;
  }
  public resetAutoFlush() {
    this._autoFlush = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoFlushInput() {
    return this._autoFlush;
  }

  // buffer_size - computed: true, optional: true, required: false
  private _bufferSize?: string; 
  public get bufferSize() {
    return this.getStringAttribute('buffer_size');
  }
  public set bufferSize(value: string) {
    this._bufferSize = value;
  }
  public resetBufferSize() {
    this._bufferSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferSizeInput() {
    return this._bufferSize;
  }

  // compression_mechanism - computed: true, optional: true, required: false
  private _compressionMechanism?: string; 
  public get compressionMechanism() {
    return this.getStringAttribute('compression_mechanism');
  }
  public set compressionMechanism(value: string) {
    this._compressionMechanism = value;
  }
  public resetCompressionMechanism() {
    this._compressionMechanism = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionMechanismInput() {
    return this._compressionMechanism;
  }

  // connection_criteria - computed: true, optional: true, required: false
  private _connectionCriteria?: string; 
  public get connectionCriteria() {
    return this.getStringAttribute('connection_criteria');
  }
  public set connectionCriteria(value: string) {
    this._connectionCriteria = value;
  }
  public resetConnectionCriteria() {
    this._connectionCriteria = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionCriteriaInput() {
    return this._connectionCriteria;
  }

  // consent_message_type - computed: true, optional: true, required: false
  private _consentMessageType?: string[]; 
  public get consentMessageType() {
    return cdktf.Fn.tolist(this.getListAttribute('consent_message_type'));
  }
  public set consentMessageType(value: string[]) {
    this._consentMessageType = value;
  }
  public resetConsentMessageType() {
    this._consentMessageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consentMessageTypeInput() {
    return this._consentMessageType;
  }

  // correlate_requests_and_results - computed: true, optional: true, required: false
  private _correlateRequestsAndResults?: boolean | cdktf.IResolvable; 
  public get correlateRequestsAndResults() {
    return this.getBooleanAttribute('correlate_requests_and_results');
  }
  public set correlateRequestsAndResults(value: boolean | cdktf.IResolvable) {
    this._correlateRequestsAndResults = value;
  }
  public resetCorrelateRequestsAndResults() {
    this._correlateRequestsAndResults = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get correlateRequestsAndResultsInput() {
    return this._correlateRequestsAndResults;
  }

  // debug_aci_enabled - computed: true, optional: true, required: false
  private _debugAciEnabled?: boolean | cdktf.IResolvable; 
  public get debugAciEnabled() {
    return this.getBooleanAttribute('debug_aci_enabled');
  }
  public set debugAciEnabled(value: boolean | cdktf.IResolvable) {
    this._debugAciEnabled = value;
  }
  public resetDebugAciEnabled() {
    this._debugAciEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugAciEnabledInput() {
    return this._debugAciEnabled;
  }

  // debug_message_type - computed: true, optional: true, required: false
  private _debugMessageType?: string[]; 
  public get debugMessageType() {
    return cdktf.Fn.tolist(this.getListAttribute('debug_message_type'));
  }
  public set debugMessageType(value: string[]) {
    this._debugMessageType = value;
  }
  public resetDebugMessageType() {
    this._debugMessageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugMessageTypeInput() {
    return this._debugMessageType;
  }

  // default_debug_category - computed: true, optional: true, required: false
  private _defaultDebugCategory?: string[]; 
  public get defaultDebugCategory() {
    return cdktf.Fn.tolist(this.getListAttribute('default_debug_category'));
  }
  public set defaultDebugCategory(value: string[]) {
    this._defaultDebugCategory = value;
  }
  public resetDefaultDebugCategory() {
    this._defaultDebugCategory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultDebugCategoryInput() {
    return this._defaultDebugCategory;
  }

  // default_debug_level - computed: true, optional: true, required: false
  private _defaultDebugLevel?: string; 
  public get defaultDebugLevel() {
    return this.getStringAttribute('default_debug_level');
  }
  public set defaultDebugLevel(value: string) {
    this._defaultDebugLevel = value;
  }
  public resetDefaultDebugLevel() {
    this._defaultDebugLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultDebugLevelInput() {
    return this._defaultDebugLevel;
  }

  // default_include_throwable_cause - computed: true, optional: true, required: false
  private _defaultIncludeThrowableCause?: boolean | cdktf.IResolvable; 
  public get defaultIncludeThrowableCause() {
    return this.getBooleanAttribute('default_include_throwable_cause');
  }
  public set defaultIncludeThrowableCause(value: boolean | cdktf.IResolvable) {
    this._defaultIncludeThrowableCause = value;
  }
  public resetDefaultIncludeThrowableCause() {
    this._defaultIncludeThrowableCause = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultIncludeThrowableCauseInput() {
    return this._defaultIncludeThrowableCause;
  }

  // default_omit_method_entry_arguments - computed: true, optional: true, required: false
  private _defaultOmitMethodEntryArguments?: boolean | cdktf.IResolvable; 
  public get defaultOmitMethodEntryArguments() {
    return this.getBooleanAttribute('default_omit_method_entry_arguments');
  }
  public set defaultOmitMethodEntryArguments(value: boolean | cdktf.IResolvable) {
    this._defaultOmitMethodEntryArguments = value;
  }
  public resetDefaultOmitMethodEntryArguments() {
    this._defaultOmitMethodEntryArguments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultOmitMethodEntryArgumentsInput() {
    return this._defaultOmitMethodEntryArguments;
  }

  // default_omit_method_return_value - computed: true, optional: true, required: false
  private _defaultOmitMethodReturnValue?: boolean | cdktf.IResolvable; 
  public get defaultOmitMethodReturnValue() {
    return this.getBooleanAttribute('default_omit_method_return_value');
  }
  public set defaultOmitMethodReturnValue(value: boolean | cdktf.IResolvable) {
    this._defaultOmitMethodReturnValue = value;
  }
  public resetDefaultOmitMethodReturnValue() {
    this._defaultOmitMethodReturnValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultOmitMethodReturnValueInput() {
    return this._defaultOmitMethodReturnValue;
  }

  // default_severity - computed: true, optional: true, required: false
  private _defaultSeverity?: string[]; 
  public get defaultSeverity() {
    return cdktf.Fn.tolist(this.getListAttribute('default_severity'));
  }
  public set defaultSeverity(value: string[]) {
    this._defaultSeverity = value;
  }
  public resetDefaultSeverity() {
    this._defaultSeverity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultSeverityInput() {
    return this._defaultSeverity;
  }

  // default_throwable_stack_frames - computed: true, optional: true, required: false
  private _defaultThrowableStackFrames?: number; 
  public get defaultThrowableStackFrames() {
    return this.getNumberAttribute('default_throwable_stack_frames');
  }
  public set defaultThrowableStackFrames(value: number) {
    this._defaultThrowableStackFrames = value;
  }
  public resetDefaultThrowableStackFrames() {
    this._defaultThrowableStackFrames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultThrowableStackFramesInput() {
    return this._defaultThrowableStackFrames;
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

  // directory_rest_api_message_type - computed: true, optional: true, required: false
  private _directoryRestApiMessageType?: string[]; 
  public get directoryRestApiMessageType() {
    return cdktf.Fn.tolist(this.getListAttribute('directory_rest_api_message_type'));
  }
  public set directoryRestApiMessageType(value: string[]) {
    this._directoryRestApiMessageType = value;
  }
  public resetDirectoryRestApiMessageType() {
    this._directoryRestApiMessageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryRestApiMessageTypeInput() {
    return this._directoryRestApiMessageType;
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // encrypt_log - computed: true, optional: true, required: false
  private _encryptLog?: boolean | cdktf.IResolvable; 
  public get encryptLog() {
    return this.getBooleanAttribute('encrypt_log');
  }
  public set encryptLog(value: boolean | cdktf.IResolvable) {
    this._encryptLog = value;
  }
  public resetEncryptLog() {
    this._encryptLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptLogInput() {
    return this._encryptLog;
  }

  // encryption_settings_definition_id - computed: true, optional: true, required: false
  private _encryptionSettingsDefinitionId?: string; 
  public get encryptionSettingsDefinitionId() {
    return this.getStringAttribute('encryption_settings_definition_id');
  }
  public set encryptionSettingsDefinitionId(value: string) {
    this._encryptionSettingsDefinitionId = value;
  }
  public resetEncryptionSettingsDefinitionId() {
    this._encryptionSettingsDefinitionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionSettingsDefinitionIdInput() {
    return this._encryptionSettingsDefinitionId;
  }

  // exclude_attribute - computed: true, optional: true, required: false
  private _excludeAttribute?: string[]; 
  public get excludeAttribute() {
    return cdktf.Fn.tolist(this.getListAttribute('exclude_attribute'));
  }
  public set excludeAttribute(value: string[]) {
    this._excludeAttribute = value;
  }
  public resetExcludeAttribute() {
    this._excludeAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeAttributeInput() {
    return this._excludeAttribute;
  }

  // exclude_path_pattern - computed: true, optional: true, required: false
  private _excludePathPattern?: string[]; 
  public get excludePathPattern() {
    return cdktf.Fn.tolist(this.getListAttribute('exclude_path_pattern'));
  }
  public set excludePathPattern(value: string[]) {
    this._excludePathPattern = value;
  }
  public resetExcludePathPattern() {
    this._excludePathPattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludePathPatternInput() {
    return this._excludePathPattern;
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

  // extension_message_type - computed: true, optional: true, required: false
  private _extensionMessageType?: string[]; 
  public get extensionMessageType() {
    return cdktf.Fn.tolist(this.getListAttribute('extension_message_type'));
  }
  public set extensionMessageType(value: string[]) {
    this._extensionMessageType = value;
  }
  public resetExtensionMessageType() {
    this._extensionMessageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionMessageTypeInput() {
    return this._extensionMessageType;
  }

  // generify_message_strings_when_possible - computed: true, optional: true, required: false
  private _generifyMessageStringsWhenPossible?: boolean | cdktf.IResolvable; 
  public get generifyMessageStringsWhenPossible() {
    return this.getBooleanAttribute('generify_message_strings_when_possible');
  }
  public set generifyMessageStringsWhenPossible(value: boolean | cdktf.IResolvable) {
    this._generifyMessageStringsWhenPossible = value;
  }
  public resetGenerifyMessageStringsWhenPossible() {
    this._generifyMessageStringsWhenPossible = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generifyMessageStringsWhenPossibleInput() {
    return this._generifyMessageStringsWhenPossible;
  }

  // http_event - computed: true, optional: true, required: false
  private _httpEvent?: string[]; 
  public get httpEvent() {
    return cdktf.Fn.tolist(this.getListAttribute('http_event'));
  }
  public set httpEvent(value: string[]) {
    this._httpEvent = value;
  }
  public resetHttpEvent() {
    this._httpEvent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpEventInput() {
    return this._httpEvent;
  }

  // http_message_type - computed: true, optional: true, required: false
  private _httpMessageType?: string[]; 
  public get httpMessageType() {
    return cdktf.Fn.tolist(this.getListAttribute('http_message_type'));
  }
  public set httpMessageType(value: string[]) {
    this._httpMessageType = value;
  }
  public resetHttpMessageType() {
    this._httpMessageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpMessageTypeInput() {
    return this._httpMessageType;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // id_token_validator_message_type - computed: true, optional: true, required: false
  private _idTokenValidatorMessageType?: string[]; 
  public get idTokenValidatorMessageType() {
    return cdktf.Fn.tolist(this.getListAttribute('id_token_validator_message_type'));
  }
  public set idTokenValidatorMessageType(value: string[]) {
    this._idTokenValidatorMessageType = value;
  }
  public resetIdTokenValidatorMessageType() {
    this._idTokenValidatorMessageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idTokenValidatorMessageTypeInput() {
    return this._idTokenValidatorMessageType;
  }

  // include_add_attribute_names - computed: true, optional: true, required: false
  private _includeAddAttributeNames?: boolean | cdktf.IResolvable; 
  public get includeAddAttributeNames() {
    return this.getBooleanAttribute('include_add_attribute_names');
  }
  public set includeAddAttributeNames(value: boolean | cdktf.IResolvable) {
    this._includeAddAttributeNames = value;
  }
  public resetIncludeAddAttributeNames() {
    this._includeAddAttributeNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeAddAttributeNamesInput() {
    return this._includeAddAttributeNames;
  }

  // include_connection_details_in_request_messages - computed: true, optional: true, required: false
  private _includeConnectionDetailsInRequestMessages?: boolean | cdktf.IResolvable; 
  public get includeConnectionDetailsInRequestMessages() {
    return this.getBooleanAttribute('include_connection_details_in_request_messages');
  }
  public set includeConnectionDetailsInRequestMessages(value: boolean | cdktf.IResolvable) {
    this._includeConnectionDetailsInRequestMessages = value;
  }
  public resetIncludeConnectionDetailsInRequestMessages() {
    this._includeConnectionDetailsInRequestMessages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeConnectionDetailsInRequestMessagesInput() {
    return this._includeConnectionDetailsInRequestMessages;
  }

  // include_extended_search_request_details - computed: true, optional: true, required: false
  private _includeExtendedSearchRequestDetails?: boolean | cdktf.IResolvable; 
  public get includeExtendedSearchRequestDetails() {
    return this.getBooleanAttribute('include_extended_search_request_details');
  }
  public set includeExtendedSearchRequestDetails(value: boolean | cdktf.IResolvable) {
    this._includeExtendedSearchRequestDetails = value;
  }
  public resetIncludeExtendedSearchRequestDetails() {
    this._includeExtendedSearchRequestDetails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeExtendedSearchRequestDetailsInput() {
    return this._includeExtendedSearchRequestDetails;
  }

  // include_instance_name - computed: true, optional: true, required: false
  private _includeInstanceName?: boolean | cdktf.IResolvable; 
  public get includeInstanceName() {
    return this.getBooleanAttribute('include_instance_name');
  }
  public set includeInstanceName(value: boolean | cdktf.IResolvable) {
    this._includeInstanceName = value;
  }
  public resetIncludeInstanceName() {
    this._includeInstanceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInstanceNameInput() {
    return this._includeInstanceName;
  }

  // include_intermediate_client_request_control - computed: true, optional: true, required: false
  private _includeIntermediateClientRequestControl?: boolean | cdktf.IResolvable; 
  public get includeIntermediateClientRequestControl() {
    return this.getBooleanAttribute('include_intermediate_client_request_control');
  }
  public set includeIntermediateClientRequestControl(value: boolean | cdktf.IResolvable) {
    this._includeIntermediateClientRequestControl = value;
  }
  public resetIncludeIntermediateClientRequestControl() {
    this._includeIntermediateClientRequestControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeIntermediateClientRequestControlInput() {
    return this._includeIntermediateClientRequestControl;
  }

  // include_modify_attribute_names - computed: true, optional: true, required: false
  private _includeModifyAttributeNames?: boolean | cdktf.IResolvable; 
  public get includeModifyAttributeNames() {
    return this.getBooleanAttribute('include_modify_attribute_names');
  }
  public set includeModifyAttributeNames(value: boolean | cdktf.IResolvable) {
    this._includeModifyAttributeNames = value;
  }
  public resetIncludeModifyAttributeNames() {
    this._includeModifyAttributeNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeModifyAttributeNamesInput() {
    return this._includeModifyAttributeNames;
  }

  // include_operation_purpose_request_control - computed: true, optional: true, required: false
  private _includeOperationPurposeRequestControl?: boolean | cdktf.IResolvable; 
  public get includeOperationPurposeRequestControl() {
    return this.getBooleanAttribute('include_operation_purpose_request_control');
  }
  public set includeOperationPurposeRequestControl(value: boolean | cdktf.IResolvable) {
    this._includeOperationPurposeRequestControl = value;
  }
  public resetIncludeOperationPurposeRequestControl() {
    this._includeOperationPurposeRequestControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeOperationPurposeRequestControlInput() {
    return this._includeOperationPurposeRequestControl;
  }

  // include_path_pattern - computed: true, optional: true, required: false
  private _includePathPattern?: string[]; 
  public get includePathPattern() {
    return cdktf.Fn.tolist(this.getListAttribute('include_path_pattern'));
  }
  public set includePathPattern(value: string[]) {
    this._includePathPattern = value;
  }
  public resetIncludePathPattern() {
    this._includePathPattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includePathPatternInput() {
    return this._includePathPattern;
  }

  // include_product_name - computed: true, optional: true, required: false
  private _includeProductName?: boolean | cdktf.IResolvable; 
  public get includeProductName() {
    return this.getBooleanAttribute('include_product_name');
  }
  public set includeProductName(value: boolean | cdktf.IResolvable) {
    this._includeProductName = value;
  }
  public resetIncludeProductName() {
    this._includeProductName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeProductNameInput() {
    return this._includeProductName;
  }

  // include_replication_change_id - computed: true, optional: true, required: false
  private _includeReplicationChangeId?: boolean | cdktf.IResolvable; 
  public get includeReplicationChangeId() {
    return this.getBooleanAttribute('include_replication_change_id');
  }
  public set includeReplicationChangeId(value: boolean | cdktf.IResolvable) {
    this._includeReplicationChangeId = value;
  }
  public resetIncludeReplicationChangeId() {
    this._includeReplicationChangeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeReplicationChangeIdInput() {
    return this._includeReplicationChangeId;
  }

  // include_request_controls - computed: true, optional: true, required: false
  private _includeRequestControls?: boolean | cdktf.IResolvable; 
  public get includeRequestControls() {
    return this.getBooleanAttribute('include_request_controls');
  }
  public set includeRequestControls(value: boolean | cdktf.IResolvable) {
    this._includeRequestControls = value;
  }
  public resetIncludeRequestControls() {
    this._includeRequestControls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeRequestControlsInput() {
    return this._includeRequestControls;
  }

  // include_request_details_in_intermediate_response_messages - computed: true, optional: true, required: false
  private _includeRequestDetailsInIntermediateResponseMessages?: boolean | cdktf.IResolvable; 
  public get includeRequestDetailsInIntermediateResponseMessages() {
    return this.getBooleanAttribute('include_request_details_in_intermediate_response_messages');
  }
  public set includeRequestDetailsInIntermediateResponseMessages(value: boolean | cdktf.IResolvable) {
    this._includeRequestDetailsInIntermediateResponseMessages = value;
  }
  public resetIncludeRequestDetailsInIntermediateResponseMessages() {
    this._includeRequestDetailsInIntermediateResponseMessages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeRequestDetailsInIntermediateResponseMessagesInput() {
    return this._includeRequestDetailsInIntermediateResponseMessages;
  }

  // include_request_details_in_result_messages - computed: true, optional: true, required: false
  private _includeRequestDetailsInResultMessages?: boolean | cdktf.IResolvable; 
  public get includeRequestDetailsInResultMessages() {
    return this.getBooleanAttribute('include_request_details_in_result_messages');
  }
  public set includeRequestDetailsInResultMessages(value: boolean | cdktf.IResolvable) {
    this._includeRequestDetailsInResultMessages = value;
  }
  public resetIncludeRequestDetailsInResultMessages() {
    this._includeRequestDetailsInResultMessages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeRequestDetailsInResultMessagesInput() {
    return this._includeRequestDetailsInResultMessages;
  }

  // include_request_details_in_search_entry_messages - computed: true, optional: true, required: false
  private _includeRequestDetailsInSearchEntryMessages?: boolean | cdktf.IResolvable; 
  public get includeRequestDetailsInSearchEntryMessages() {
    return this.getBooleanAttribute('include_request_details_in_search_entry_messages');
  }
  public set includeRequestDetailsInSearchEntryMessages(value: boolean | cdktf.IResolvable) {
    this._includeRequestDetailsInSearchEntryMessages = value;
  }
  public resetIncludeRequestDetailsInSearchEntryMessages() {
    this._includeRequestDetailsInSearchEntryMessages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeRequestDetailsInSearchEntryMessagesInput() {
    return this._includeRequestDetailsInSearchEntryMessages;
  }

  // include_request_details_in_search_reference_messages - computed: true, optional: true, required: false
  private _includeRequestDetailsInSearchReferenceMessages?: boolean | cdktf.IResolvable; 
  public get includeRequestDetailsInSearchReferenceMessages() {
    return this.getBooleanAttribute('include_request_details_in_search_reference_messages');
  }
  public set includeRequestDetailsInSearchReferenceMessages(value: boolean | cdktf.IResolvable) {
    this._includeRequestDetailsInSearchReferenceMessages = value;
  }
  public resetIncludeRequestDetailsInSearchReferenceMessages() {
    this._includeRequestDetailsInSearchReferenceMessages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeRequestDetailsInSearchReferenceMessagesInput() {
    return this._includeRequestDetailsInSearchReferenceMessages;
  }

  // include_requester_dn - computed: true, optional: true, required: false
  private _includeRequesterDn?: boolean | cdktf.IResolvable; 
  public get includeRequesterDn() {
    return this.getBooleanAttribute('include_requester_dn');
  }
  public set includeRequesterDn(value: boolean | cdktf.IResolvable) {
    this._includeRequesterDn = value;
  }
  public resetIncludeRequesterDn() {
    this._includeRequesterDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeRequesterDnInput() {
    return this._includeRequesterDn;
  }

  // include_requester_ip_address - computed: true, optional: true, required: false
  private _includeRequesterIpAddress?: boolean | cdktf.IResolvable; 
  public get includeRequesterIpAddress() {
    return this.getBooleanAttribute('include_requester_ip_address');
  }
  public set includeRequesterIpAddress(value: boolean | cdktf.IResolvable) {
    this._includeRequesterIpAddress = value;
  }
  public resetIncludeRequesterIpAddress() {
    this._includeRequesterIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeRequesterIpAddressInput() {
    return this._includeRequesterIpAddress;
  }

  // include_response_controls - computed: true, optional: true, required: false
  private _includeResponseControls?: boolean | cdktf.IResolvable; 
  public get includeResponseControls() {
    return this.getBooleanAttribute('include_response_controls');
  }
  public set includeResponseControls(value: boolean | cdktf.IResolvable) {
    this._includeResponseControls = value;
  }
  public resetIncludeResponseControls() {
    this._includeResponseControls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeResponseControlsInput() {
    return this._includeResponseControls;
  }

  // include_result_code_names - computed: true, optional: true, required: false
  private _includeResultCodeNames?: boolean | cdktf.IResolvable; 
  public get includeResultCodeNames() {
    return this.getBooleanAttribute('include_result_code_names');
  }
  public set includeResultCodeNames(value: boolean | cdktf.IResolvable) {
    this._includeResultCodeNames = value;
  }
  public resetIncludeResultCodeNames() {
    this._includeResultCodeNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeResultCodeNamesInput() {
    return this._includeResultCodeNames;
  }

  // include_search_entry_attribute_names - computed: true, optional: true, required: false
  private _includeSearchEntryAttributeNames?: boolean | cdktf.IResolvable; 
  public get includeSearchEntryAttributeNames() {
    return this.getBooleanAttribute('include_search_entry_attribute_names');
  }
  public set includeSearchEntryAttributeNames(value: boolean | cdktf.IResolvable) {
    this._includeSearchEntryAttributeNames = value;
  }
  public resetIncludeSearchEntryAttributeNames() {
    this._includeSearchEntryAttributeNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeSearchEntryAttributeNamesInput() {
    return this._includeSearchEntryAttributeNames;
  }

  // include_startup_id - computed: true, optional: true, required: false
  private _includeStartupId?: boolean | cdktf.IResolvable; 
  public get includeStartupId() {
    return this.getBooleanAttribute('include_startup_id');
  }
  public set includeStartupId(value: boolean | cdktf.IResolvable) {
    this._includeStartupId = value;
  }
  public resetIncludeStartupId() {
    this._includeStartupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeStartupIdInput() {
    return this._includeStartupId;
  }

  // include_thread_id - computed: true, optional: true, required: false
  private _includeThreadId?: boolean | cdktf.IResolvable; 
  public get includeThreadId() {
    return this.getBooleanAttribute('include_thread_id');
  }
  public set includeThreadId(value: boolean | cdktf.IResolvable) {
    this._includeThreadId = value;
  }
  public resetIncludeThreadId() {
    this._includeThreadId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeThreadIdInput() {
    return this._includeThreadId;
  }

  // log_assurance_completed - computed: true, optional: true, required: false
  private _logAssuranceCompleted?: boolean | cdktf.IResolvable; 
  public get logAssuranceCompleted() {
    return this.getBooleanAttribute('log_assurance_completed');
  }
  public set logAssuranceCompleted(value: boolean | cdktf.IResolvable) {
    this._logAssuranceCompleted = value;
  }
  public resetLogAssuranceCompleted() {
    this._logAssuranceCompleted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logAssuranceCompletedInput() {
    return this._logAssuranceCompleted;
  }

  // log_client_certificates - computed: true, optional: true, required: false
  private _logClientCertificates?: boolean | cdktf.IResolvable; 
  public get logClientCertificates() {
    return this.getBooleanAttribute('log_client_certificates');
  }
  public set logClientCertificates(value: boolean | cdktf.IResolvable) {
    this._logClientCertificates = value;
  }
  public resetLogClientCertificates() {
    this._logClientCertificates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logClientCertificatesInput() {
    return this._logClientCertificates;
  }

  // log_connects - computed: true, optional: true, required: false
  private _logConnects?: boolean | cdktf.IResolvable; 
  public get logConnects() {
    return this.getBooleanAttribute('log_connects');
  }
  public set logConnects(value: boolean | cdktf.IResolvable) {
    this._logConnects = value;
  }
  public resetLogConnects() {
    this._logConnects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logConnectsInput() {
    return this._logConnects;
  }

  // log_disconnects - computed: true, optional: true, required: false
  private _logDisconnects?: boolean | cdktf.IResolvable; 
  public get logDisconnects() {
    return this.getBooleanAttribute('log_disconnects');
  }
  public set logDisconnects(value: boolean | cdktf.IResolvable) {
    this._logDisconnects = value;
  }
  public resetLogDisconnects() {
    this._logDisconnects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logDisconnectsInput() {
    return this._logDisconnects;
  }

  // log_field_behavior - computed: true, optional: true, required: false
  private _logFieldBehavior?: string; 
  public get logFieldBehavior() {
    return this.getStringAttribute('log_field_behavior');
  }
  public set logFieldBehavior(value: string) {
    this._logFieldBehavior = value;
  }
  public resetLogFieldBehavior() {
    this._logFieldBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logFieldBehaviorInput() {
    return this._logFieldBehavior;
  }

  // log_field_mapping - computed: true, optional: true, required: false
  private _logFieldMapping?: string; 
  public get logFieldMapping() {
    return this.getStringAttribute('log_field_mapping');
  }
  public set logFieldMapping(value: string) {
    this._logFieldMapping = value;
  }
  public resetLogFieldMapping() {
    this._logFieldMapping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logFieldMappingInput() {
    return this._logFieldMapping;
  }

  // log_file - computed: true, optional: true, required: false
  private _logFile?: string; 
  public get logFile() {
    return this.getStringAttribute('log_file');
  }
  public set logFile(value: string) {
    this._logFile = value;
  }
  public resetLogFile() {
    this._logFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logFileInput() {
    return this._logFile;
  }

  // log_file_permissions - computed: true, optional: true, required: false
  private _logFilePermissions?: string; 
  public get logFilePermissions() {
    return this.getStringAttribute('log_file_permissions');
  }
  public set logFilePermissions(value: string) {
    this._logFilePermissions = value;
  }
  public resetLogFilePermissions() {
    this._logFilePermissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logFilePermissionsInput() {
    return this._logFilePermissions;
  }

  // log_intermediate_responses - computed: true, optional: true, required: false
  private _logIntermediateResponses?: boolean | cdktf.IResolvable; 
  public get logIntermediateResponses() {
    return this.getBooleanAttribute('log_intermediate_responses');
  }
  public set logIntermediateResponses(value: boolean | cdktf.IResolvable) {
    this._logIntermediateResponses = value;
  }
  public resetLogIntermediateResponses() {
    this._logIntermediateResponses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logIntermediateResponsesInput() {
    return this._logIntermediateResponses;
  }

  // log_message_exclusion_policy - computed: true, optional: true, required: false
  private _logMessageExclusionPolicy?: string[]; 
  public get logMessageExclusionPolicy() {
    return cdktf.Fn.tolist(this.getListAttribute('log_message_exclusion_policy'));
  }
  public set logMessageExclusionPolicy(value: string[]) {
    this._logMessageExclusionPolicy = value;
  }
  public resetLogMessageExclusionPolicy() {
    this._logMessageExclusionPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logMessageExclusionPolicyInput() {
    return this._logMessageExclusionPolicy;
  }

  // log_redirect_uri - computed: true, optional: true, required: false
  private _logRedirectUri?: boolean | cdktf.IResolvable; 
  public get logRedirectUri() {
    return this.getBooleanAttribute('log_redirect_uri');
  }
  public set logRedirectUri(value: boolean | cdktf.IResolvable) {
    this._logRedirectUri = value;
  }
  public resetLogRedirectUri() {
    this._logRedirectUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logRedirectUriInput() {
    return this._logRedirectUri;
  }

  // log_request_authorization_type - computed: true, optional: true, required: false
  private _logRequestAuthorizationType?: boolean | cdktf.IResolvable; 
  public get logRequestAuthorizationType() {
    return this.getBooleanAttribute('log_request_authorization_type');
  }
  public set logRequestAuthorizationType(value: boolean | cdktf.IResolvable) {
    this._logRequestAuthorizationType = value;
  }
  public resetLogRequestAuthorizationType() {
    this._logRequestAuthorizationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logRequestAuthorizationTypeInput() {
    return this._logRequestAuthorizationType;
  }

  // log_request_cookie_names - computed: true, optional: true, required: false
  private _logRequestCookieNames?: boolean | cdktf.IResolvable; 
  public get logRequestCookieNames() {
    return this.getBooleanAttribute('log_request_cookie_names');
  }
  public set logRequestCookieNames(value: boolean | cdktf.IResolvable) {
    this._logRequestCookieNames = value;
  }
  public resetLogRequestCookieNames() {
    this._logRequestCookieNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logRequestCookieNamesInput() {
    return this._logRequestCookieNames;
  }

  // log_request_headers - computed: true, optional: true, required: false
  private _logRequestHeaders?: string; 
  public get logRequestHeaders() {
    return this.getStringAttribute('log_request_headers');
  }
  public set logRequestHeaders(value: string) {
    this._logRequestHeaders = value;
  }
  public resetLogRequestHeaders() {
    this._logRequestHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logRequestHeadersInput() {
    return this._logRequestHeaders;
  }

  // log_request_parameters - computed: true, optional: true, required: false
  private _logRequestParameters?: string; 
  public get logRequestParameters() {
    return this.getStringAttribute('log_request_parameters');
  }
  public set logRequestParameters(value: string) {
    this._logRequestParameters = value;
  }
  public resetLogRequestParameters() {
    this._logRequestParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logRequestParametersInput() {
    return this._logRequestParameters;
  }

  // log_request_protocol - computed: true, optional: true, required: false
  private _logRequestProtocol?: boolean | cdktf.IResolvable; 
  public get logRequestProtocol() {
    return this.getBooleanAttribute('log_request_protocol');
  }
  public set logRequestProtocol(value: boolean | cdktf.IResolvable) {
    this._logRequestProtocol = value;
  }
  public resetLogRequestProtocol() {
    this._logRequestProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logRequestProtocolInput() {
    return this._logRequestProtocol;
  }

  // log_requests - computed: true, optional: true, required: false
  private _logRequests?: boolean | cdktf.IResolvable; 
  public get logRequests() {
    return this.getBooleanAttribute('log_requests');
  }
  public set logRequests(value: boolean | cdktf.IResolvable) {
    this._logRequests = value;
  }
  public resetLogRequests() {
    this._logRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logRequestsInput() {
    return this._logRequests;
  }

  // log_response_cookie_names - computed: true, optional: true, required: false
  private _logResponseCookieNames?: boolean | cdktf.IResolvable; 
  public get logResponseCookieNames() {
    return this.getBooleanAttribute('log_response_cookie_names');
  }
  public set logResponseCookieNames(value: boolean | cdktf.IResolvable) {
    this._logResponseCookieNames = value;
  }
  public resetLogResponseCookieNames() {
    this._logResponseCookieNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logResponseCookieNamesInput() {
    return this._logResponseCookieNames;
  }

  // log_response_headers - computed: true, optional: true, required: false
  private _logResponseHeaders?: string; 
  public get logResponseHeaders() {
    return this.getStringAttribute('log_response_headers');
  }
  public set logResponseHeaders(value: string) {
    this._logResponseHeaders = value;
  }
  public resetLogResponseHeaders() {
    this._logResponseHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logResponseHeadersInput() {
    return this._logResponseHeaders;
  }

  // log_results - computed: true, optional: true, required: false
  private _logResults?: boolean | cdktf.IResolvable; 
  public get logResults() {
    return this.getBooleanAttribute('log_results');
  }
  public set logResults(value: boolean | cdktf.IResolvable) {
    this._logResults = value;
  }
  public resetLogResults() {
    this._logResults = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logResultsInput() {
    return this._logResults;
  }

  // log_search_entries - computed: true, optional: true, required: false
  private _logSearchEntries?: boolean | cdktf.IResolvable; 
  public get logSearchEntries() {
    return this.getBooleanAttribute('log_search_entries');
  }
  public set logSearchEntries(value: boolean | cdktf.IResolvable) {
    this._logSearchEntries = value;
  }
  public resetLogSearchEntries() {
    this._logSearchEntries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logSearchEntriesInput() {
    return this._logSearchEntries;
  }

  // log_search_references - computed: true, optional: true, required: false
  private _logSearchReferences?: boolean | cdktf.IResolvable; 
  public get logSearchReferences() {
    return this.getBooleanAttribute('log_search_references');
  }
  public set logSearchReferences(value: boolean | cdktf.IResolvable) {
    this._logSearchReferences = value;
  }
  public resetLogSearchReferences() {
    this._logSearchReferences = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logSearchReferencesInput() {
    return this._logSearchReferences;
  }

  // log_security_negotiation - computed: true, optional: true, required: false
  private _logSecurityNegotiation?: boolean | cdktf.IResolvable; 
  public get logSecurityNegotiation() {
    return this.getBooleanAttribute('log_security_negotiation');
  }
  public set logSecurityNegotiation(value: boolean | cdktf.IResolvable) {
    this._logSecurityNegotiation = value;
  }
  public resetLogSecurityNegotiation() {
    this._logSecurityNegotiation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logSecurityNegotiationInput() {
    return this._logSecurityNegotiation;
  }

  // log_table_name - computed: true, optional: true, required: false
  private _logTableName?: string; 
  public get logTableName() {
    return this.getStringAttribute('log_table_name');
  }
  public set logTableName(value: string) {
    this._logTableName = value;
  }
  public resetLogTableName() {
    this._logTableName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logTableNameInput() {
    return this._logTableName;
  }

  // logging_error_behavior - computed: true, optional: true, required: false
  private _loggingErrorBehavior?: string; 
  public get loggingErrorBehavior() {
    return this.getStringAttribute('logging_error_behavior');
  }
  public set loggingErrorBehavior(value: string) {
    this._loggingErrorBehavior = value;
  }
  public resetLoggingErrorBehavior() {
    this._loggingErrorBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingErrorBehaviorInput() {
    return this._loggingErrorBehavior;
  }

  // max_string_length - computed: true, optional: true, required: false
  private _maxStringLength?: number; 
  public get maxStringLength() {
    return this.getNumberAttribute('max_string_length');
  }
  public set maxStringLength(value: number) {
    this._maxStringLength = value;
  }
  public resetMaxStringLength() {
    this._maxStringLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxStringLengthInput() {
    return this._maxStringLength;
  }

  // min_included_operation_processing_time - computed: true, optional: true, required: false
  private _minIncludedOperationProcessingTime?: string; 
  public get minIncludedOperationProcessingTime() {
    return this.getStringAttribute('min_included_operation_processing_time');
  }
  public set minIncludedOperationProcessingTime(value: string) {
    this._minIncludedOperationProcessingTime = value;
  }
  public resetMinIncludedOperationProcessingTime() {
    this._minIncludedOperationProcessingTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minIncludedOperationProcessingTimeInput() {
    return this._minIncludedOperationProcessingTime;
  }

  // min_included_phase_time_nanos - computed: true, optional: true, required: false
  private _minIncludedPhaseTimeNanos?: number; 
  public get minIncludedPhaseTimeNanos() {
    return this.getNumberAttribute('min_included_phase_time_nanos');
  }
  public set minIncludedPhaseTimeNanos(value: number) {
    this._minIncludedPhaseTimeNanos = value;
  }
  public resetMinIncludedPhaseTimeNanos() {
    this._minIncludedPhaseTimeNanos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minIncludedPhaseTimeNanosInput() {
    return this._minIncludedPhaseTimeNanos;
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

  // obscure_attribute - computed: true, optional: true, required: false
  private _obscureAttribute?: string[]; 
  public get obscureAttribute() {
    return cdktf.Fn.tolist(this.getListAttribute('obscure_attribute'));
  }
  public set obscureAttribute(value: string[]) {
    this._obscureAttribute = value;
  }
  public resetObscureAttribute() {
    this._obscureAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get obscureAttributeInput() {
    return this._obscureAttribute;
  }

  // obscure_sensitive_content - computed: true, optional: true, required: false
  private _obscureSensitiveContent?: boolean | cdktf.IResolvable; 
  public get obscureSensitiveContent() {
    return this.getBooleanAttribute('obscure_sensitive_content');
  }
  public set obscureSensitiveContent(value: boolean | cdktf.IResolvable) {
    this._obscureSensitiveContent = value;
  }
  public resetObscureSensitiveContent() {
    this._obscureSensitiveContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get obscureSensitiveContentInput() {
    return this._obscureSensitiveContent;
  }

  // output_location - computed: true, optional: true, required: false
  private _outputLocation?: string; 
  public get outputLocation() {
    return this.getStringAttribute('output_location');
  }
  public set outputLocation(value: string) {
    this._outputLocation = value;
  }
  public resetOutputLocation() {
    this._outputLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputLocationInput() {
    return this._outputLocation;
  }

  // override_severity - computed: true, optional: true, required: false
  private _overrideSeverity?: string[]; 
  public get overrideSeverity() {
    return cdktf.Fn.tolist(this.getListAttribute('override_severity'));
  }
  public set overrideSeverity(value: string[]) {
    this._overrideSeverity = value;
  }
  public resetOverrideSeverity() {
    this._overrideSeverity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideSeverityInput() {
    return this._overrideSeverity;
  }

  // queue_size - computed: true, optional: true, required: false
  private _queueSize?: number; 
  public get queueSize() {
    return this.getNumberAttribute('queue_size');
  }
  public set queueSize(value: number) {
    this._queueSize = value;
  }
  public resetQueueSize() {
    this._queueSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueSizeInput() {
    return this._queueSize;
  }

  // request_criteria - computed: true, optional: true, required: false
  private _requestCriteria?: string; 
  public get requestCriteria() {
    return this.getStringAttribute('request_criteria');
  }
  public set requestCriteria(value: string) {
    this._requestCriteria = value;
  }
  public resetRequestCriteria() {
    this._requestCriteria = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestCriteriaInput() {
    return this._requestCriteria;
  }

  // required_actions - computed: true, optional: false, required: false
  private _requiredActions = new DefaultLogPublisherRequiredActionsList(this, "required_actions", true);
  public get requiredActions() {
    return this._requiredActions;
  }

  // result_criteria - computed: true, optional: true, required: false
  private _resultCriteria?: string; 
  public get resultCriteria() {
    return this.getStringAttribute('result_criteria');
  }
  public set resultCriteria(value: string) {
    this._resultCriteria = value;
  }
  public resetResultCriteria() {
    this._resultCriteria = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultCriteriaInput() {
    return this._resultCriteria;
  }

  // retention_policy - computed: true, optional: true, required: false
  private _retentionPolicy?: string[]; 
  public get retentionPolicy() {
    return cdktf.Fn.tolist(this.getListAttribute('retention_policy'));
  }
  public set retentionPolicy(value: string[]) {
    this._retentionPolicy = value;
  }
  public resetRetentionPolicy() {
    this._retentionPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionPolicyInput() {
    return this._retentionPolicy;
  }

  // rotation_listener - computed: true, optional: true, required: false
  private _rotationListener?: string[]; 
  public get rotationListener() {
    return cdktf.Fn.tolist(this.getListAttribute('rotation_listener'));
  }
  public set rotationListener(value: string[]) {
    this._rotationListener = value;
  }
  public resetRotationListener() {
    this._rotationListener = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rotationListenerInput() {
    return this._rotationListener;
  }

  // rotation_policy - computed: true, optional: true, required: false
  private _rotationPolicy?: string[]; 
  public get rotationPolicy() {
    return cdktf.Fn.tolist(this.getListAttribute('rotation_policy'));
  }
  public set rotationPolicy(value: string[]) {
    this._rotationPolicy = value;
  }
  public resetRotationPolicy() {
    this._rotationPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rotationPolicyInput() {
    return this._rotationPolicy;
  }

  // scim_message_type - computed: true, optional: true, required: false
  private _scimMessageType?: string[]; 
  public get scimMessageType() {
    return cdktf.Fn.tolist(this.getListAttribute('scim_message_type'));
  }
  public set scimMessageType(value: string[]) {
    this._scimMessageType = value;
  }
  public resetScimMessageType() {
    this._scimMessageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scimMessageTypeInput() {
    return this._scimMessageType;
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

  // search_entry_criteria - computed: true, optional: true, required: false
  private _searchEntryCriteria?: string; 
  public get searchEntryCriteria() {
    return this.getStringAttribute('search_entry_criteria');
  }
  public set searchEntryCriteria(value: string) {
    this._searchEntryCriteria = value;
  }
  public resetSearchEntryCriteria() {
    this._searchEntryCriteria = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchEntryCriteriaInput() {
    return this._searchEntryCriteria;
  }

  // search_reference_criteria - computed: true, optional: true, required: false
  private _searchReferenceCriteria?: string; 
  public get searchReferenceCriteria() {
    return this.getStringAttribute('search_reference_criteria');
  }
  public set searchReferenceCriteria(value: string) {
    this._searchReferenceCriteria = value;
  }
  public resetSearchReferenceCriteria() {
    this._searchReferenceCriteria = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchReferenceCriteriaInput() {
    return this._searchReferenceCriteria;
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

  // server_host_name - computed: true, optional: true, required: false
  private _serverHostName?: string; 
  public get serverHostName() {
    return this.getStringAttribute('server_host_name');
  }
  public set serverHostName(value: string) {
    this._serverHostName = value;
  }
  public resetServerHostName() {
    this._serverHostName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverHostNameInput() {
    return this._serverHostName;
  }

  // server_port - computed: true, optional: true, required: false
  private _serverPort?: number; 
  public get serverPort() {
    return this.getNumberAttribute('server_port');
  }
  public set serverPort(value: number) {
    this._serverPort = value;
  }
  public resetServerPort() {
    this._serverPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverPortInput() {
    return this._serverPort;
  }

  // sign_log - computed: true, optional: true, required: false
  private _signLog?: boolean | cdktf.IResolvable; 
  public get signLog() {
    return this.getBooleanAttribute('sign_log');
  }
  public set signLog(value: boolean | cdktf.IResolvable) {
    this._signLog = value;
  }
  public resetSignLog() {
    this._signLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signLogInput() {
    return this._signLog;
  }

  // soft_delete_entry_audit_behavior - computed: true, optional: true, required: false
  private _softDeleteEntryAuditBehavior?: string; 
  public get softDeleteEntryAuditBehavior() {
    return this.getStringAttribute('soft_delete_entry_audit_behavior');
  }
  public set softDeleteEntryAuditBehavior(value: string) {
    this._softDeleteEntryAuditBehavior = value;
  }
  public resetSoftDeleteEntryAuditBehavior() {
    this._softDeleteEntryAuditBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get softDeleteEntryAuditBehaviorInput() {
    return this._softDeleteEntryAuditBehavior;
  }

  // suppress_internal_operations - computed: true, optional: true, required: false
  private _suppressInternalOperations?: boolean | cdktf.IResolvable; 
  public get suppressInternalOperations() {
    return this.getBooleanAttribute('suppress_internal_operations');
  }
  public set suppressInternalOperations(value: boolean | cdktf.IResolvable) {
    this._suppressInternalOperations = value;
  }
  public resetSuppressInternalOperations() {
    this._suppressInternalOperations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suppressInternalOperationsInput() {
    return this._suppressInternalOperations;
  }

  // suppress_replication_operations - computed: true, optional: true, required: false
  private _suppressReplicationOperations?: boolean | cdktf.IResolvable; 
  public get suppressReplicationOperations() {
    return this.getBooleanAttribute('suppress_replication_operations');
  }
  public set suppressReplicationOperations(value: boolean | cdktf.IResolvable) {
    this._suppressReplicationOperations = value;
  }
  public resetSuppressReplicationOperations() {
    this._suppressReplicationOperations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suppressReplicationOperationsInput() {
    return this._suppressReplicationOperations;
  }

  // suppress_virtual_attributes_in_delete_records - computed: true, optional: true, required: false
  private _suppressVirtualAttributesInDeleteRecords?: boolean | cdktf.IResolvable; 
  public get suppressVirtualAttributesInDeleteRecords() {
    return this.getBooleanAttribute('suppress_virtual_attributes_in_delete_records');
  }
  public set suppressVirtualAttributesInDeleteRecords(value: boolean | cdktf.IResolvable) {
    this._suppressVirtualAttributesInDeleteRecords = value;
  }
  public resetSuppressVirtualAttributesInDeleteRecords() {
    this._suppressVirtualAttributesInDeleteRecords = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suppressVirtualAttributesInDeleteRecordsInput() {
    return this._suppressVirtualAttributesInDeleteRecords;
  }

  // suppressed_request_header_name - computed: true, optional: true, required: false
  private _suppressedRequestHeaderName?: string[]; 
  public get suppressedRequestHeaderName() {
    return cdktf.Fn.tolist(this.getListAttribute('suppressed_request_header_name'));
  }
  public set suppressedRequestHeaderName(value: string[]) {
    this._suppressedRequestHeaderName = value;
  }
  public resetSuppressedRequestHeaderName() {
    this._suppressedRequestHeaderName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suppressedRequestHeaderNameInput() {
    return this._suppressedRequestHeaderName;
  }

  // suppressed_request_parameter_name - computed: true, optional: true, required: false
  private _suppressedRequestParameterName?: string[]; 
  public get suppressedRequestParameterName() {
    return cdktf.Fn.tolist(this.getListAttribute('suppressed_request_parameter_name'));
  }
  public set suppressedRequestParameterName(value: string[]) {
    this._suppressedRequestParameterName = value;
  }
  public resetSuppressedRequestParameterName() {
    this._suppressedRequestParameterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suppressedRequestParameterNameInput() {
    return this._suppressedRequestParameterName;
  }

  // suppressed_response_header_name - computed: true, optional: true, required: false
  private _suppressedResponseHeaderName?: string[]; 
  public get suppressedResponseHeaderName() {
    return cdktf.Fn.tolist(this.getListAttribute('suppressed_response_header_name'));
  }
  public set suppressedResponseHeaderName(value: string[]) {
    this._suppressedResponseHeaderName = value;
  }
  public resetSuppressedResponseHeaderName() {
    this._suppressedResponseHeaderName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suppressedResponseHeaderNameInput() {
    return this._suppressedResponseHeaderName;
  }

  // syslog_external_server - computed: true, optional: true, required: false
  private _syslogExternalServer?: string[]; 
  public get syslogExternalServer() {
    return cdktf.Fn.tolist(this.getListAttribute('syslog_external_server'));
  }
  public set syslogExternalServer(value: string[]) {
    this._syslogExternalServer = value;
  }
  public resetSyslogExternalServer() {
    this._syslogExternalServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syslogExternalServerInput() {
    return this._syslogExternalServer;
  }

  // syslog_facility - computed: true, optional: true, required: false
  private _syslogFacility?: string; 
  public get syslogFacility() {
    return this.getStringAttribute('syslog_facility');
  }
  public set syslogFacility(value: string) {
    this._syslogFacility = value;
  }
  public resetSyslogFacility() {
    this._syslogFacility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syslogFacilityInput() {
    return this._syslogFacility;
  }

  // syslog_message_application_name - computed: true, optional: true, required: false
  private _syslogMessageApplicationName?: string; 
  public get syslogMessageApplicationName() {
    return this.getStringAttribute('syslog_message_application_name');
  }
  public set syslogMessageApplicationName(value: string) {
    this._syslogMessageApplicationName = value;
  }
  public resetSyslogMessageApplicationName() {
    this._syslogMessageApplicationName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syslogMessageApplicationNameInput() {
    return this._syslogMessageApplicationName;
  }

  // syslog_message_host_name - computed: true, optional: true, required: false
  private _syslogMessageHostName?: string; 
  public get syslogMessageHostName() {
    return this.getStringAttribute('syslog_message_host_name');
  }
  public set syslogMessageHostName(value: string) {
    this._syslogMessageHostName = value;
  }
  public resetSyslogMessageHostName() {
    this._syslogMessageHostName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syslogMessageHostNameInput() {
    return this._syslogMessageHostName;
  }

  // syslog_severity - computed: true, optional: true, required: false
  private _syslogSeverity?: string; 
  public get syslogSeverity() {
    return this.getStringAttribute('syslog_severity');
  }
  public set syslogSeverity(value: string) {
    this._syslogSeverity = value;
  }
  public resetSyslogSeverity() {
    this._syslogSeverity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syslogSeverityInput() {
    return this._syslogSeverity;
  }

  // time_interval - computed: true, optional: true, required: false
  private _timeInterval?: string; 
  public get timeInterval() {
    return this.getStringAttribute('time_interval');
  }
  public set timeInterval(value: string) {
    this._timeInterval = value;
  }
  public resetTimeInterval() {
    this._timeInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeIntervalInput() {
    return this._timeInterval;
  }

  // timestamp_precision - computed: true, optional: true, required: false
  private _timestampPrecision?: string; 
  public get timestampPrecision() {
    return this.getStringAttribute('timestamp_precision');
  }
  public set timestampPrecision(value: string) {
    this._timestampPrecision = value;
  }
  public resetTimestampPrecision() {
    this._timestampPrecision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampPrecisionInput() {
    return this._timestampPrecision;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // use_reversible_form - computed: true, optional: true, required: false
  private _useReversibleForm?: boolean | cdktf.IResolvable; 
  public get useReversibleForm() {
    return this.getBooleanAttribute('use_reversible_form');
  }
  public set useReversibleForm(value: boolean | cdktf.IResolvable) {
    this._useReversibleForm = value;
  }
  public resetUseReversibleForm() {
    this._useReversibleForm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useReversibleFormInput() {
    return this._useReversibleForm;
  }

  // write_multi_line_messages - computed: true, optional: true, required: false
  private _writeMultiLineMessages?: boolean | cdktf.IResolvable; 
  public get writeMultiLineMessages() {
    return this.getBooleanAttribute('write_multi_line_messages');
  }
  public set writeMultiLineMessages(value: boolean | cdktf.IResolvable) {
    this._writeMultiLineMessages = value;
  }
  public resetWriteMultiLineMessages() {
    this._writeMultiLineMessages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeMultiLineMessagesInput() {
    return this._writeMultiLineMessages;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_token_validator_message_type: cdktf.listMapper(cdktf.stringToTerraform, false)(this._accessTokenValidatorMessageType),
      append: cdktf.booleanToTerraform(this._append),
      asynchronous: cdktf.booleanToTerraform(this._asynchronous),
      auto_flush: cdktf.booleanToTerraform(this._autoFlush),
      buffer_size: cdktf.stringToTerraform(this._bufferSize),
      compression_mechanism: cdktf.stringToTerraform(this._compressionMechanism),
      connection_criteria: cdktf.stringToTerraform(this._connectionCriteria),
      consent_message_type: cdktf.listMapper(cdktf.stringToTerraform, false)(this._consentMessageType),
      correlate_requests_and_results: cdktf.booleanToTerraform(this._correlateRequestsAndResults),
      debug_aci_enabled: cdktf.booleanToTerraform(this._debugAciEnabled),
      debug_message_type: cdktf.listMapper(cdktf.stringToTerraform, false)(this._debugMessageType),
      default_debug_category: cdktf.listMapper(cdktf.stringToTerraform, false)(this._defaultDebugCategory),
      default_debug_level: cdktf.stringToTerraform(this._defaultDebugLevel),
      default_include_throwable_cause: cdktf.booleanToTerraform(this._defaultIncludeThrowableCause),
      default_omit_method_entry_arguments: cdktf.booleanToTerraform(this._defaultOmitMethodEntryArguments),
      default_omit_method_return_value: cdktf.booleanToTerraform(this._defaultOmitMethodReturnValue),
      default_severity: cdktf.listMapper(cdktf.stringToTerraform, false)(this._defaultSeverity),
      default_throwable_stack_frames: cdktf.numberToTerraform(this._defaultThrowableStackFrames),
      description: cdktf.stringToTerraform(this._description),
      directory_rest_api_message_type: cdktf.listMapper(cdktf.stringToTerraform, false)(this._directoryRestApiMessageType),
      enabled: cdktf.booleanToTerraform(this._enabled),
      encrypt_log: cdktf.booleanToTerraform(this._encryptLog),
      encryption_settings_definition_id: cdktf.stringToTerraform(this._encryptionSettingsDefinitionId),
      exclude_attribute: cdktf.listMapper(cdktf.stringToTerraform, false)(this._excludeAttribute),
      exclude_path_pattern: cdktf.listMapper(cdktf.stringToTerraform, false)(this._excludePathPattern),
      extension_argument: cdktf.listMapper(cdktf.stringToTerraform, false)(this._extensionArgument),
      extension_class: cdktf.stringToTerraform(this._extensionClass),
      extension_message_type: cdktf.listMapper(cdktf.stringToTerraform, false)(this._extensionMessageType),
      generify_message_strings_when_possible: cdktf.booleanToTerraform(this._generifyMessageStringsWhenPossible),
      http_event: cdktf.listMapper(cdktf.stringToTerraform, false)(this._httpEvent),
      http_message_type: cdktf.listMapper(cdktf.stringToTerraform, false)(this._httpMessageType),
      id_token_validator_message_type: cdktf.listMapper(cdktf.stringToTerraform, false)(this._idTokenValidatorMessageType),
      include_add_attribute_names: cdktf.booleanToTerraform(this._includeAddAttributeNames),
      include_connection_details_in_request_messages: cdktf.booleanToTerraform(this._includeConnectionDetailsInRequestMessages),
      include_extended_search_request_details: cdktf.booleanToTerraform(this._includeExtendedSearchRequestDetails),
      include_instance_name: cdktf.booleanToTerraform(this._includeInstanceName),
      include_intermediate_client_request_control: cdktf.booleanToTerraform(this._includeIntermediateClientRequestControl),
      include_modify_attribute_names: cdktf.booleanToTerraform(this._includeModifyAttributeNames),
      include_operation_purpose_request_control: cdktf.booleanToTerraform(this._includeOperationPurposeRequestControl),
      include_path_pattern: cdktf.listMapper(cdktf.stringToTerraform, false)(this._includePathPattern),
      include_product_name: cdktf.booleanToTerraform(this._includeProductName),
      include_replication_change_id: cdktf.booleanToTerraform(this._includeReplicationChangeId),
      include_request_controls: cdktf.booleanToTerraform(this._includeRequestControls),
      include_request_details_in_intermediate_response_messages: cdktf.booleanToTerraform(this._includeRequestDetailsInIntermediateResponseMessages),
      include_request_details_in_result_messages: cdktf.booleanToTerraform(this._includeRequestDetailsInResultMessages),
      include_request_details_in_search_entry_messages: cdktf.booleanToTerraform(this._includeRequestDetailsInSearchEntryMessages),
      include_request_details_in_search_reference_messages: cdktf.booleanToTerraform(this._includeRequestDetailsInSearchReferenceMessages),
      include_requester_dn: cdktf.booleanToTerraform(this._includeRequesterDn),
      include_requester_ip_address: cdktf.booleanToTerraform(this._includeRequesterIpAddress),
      include_response_controls: cdktf.booleanToTerraform(this._includeResponseControls),
      include_result_code_names: cdktf.booleanToTerraform(this._includeResultCodeNames),
      include_search_entry_attribute_names: cdktf.booleanToTerraform(this._includeSearchEntryAttributeNames),
      include_startup_id: cdktf.booleanToTerraform(this._includeStartupId),
      include_thread_id: cdktf.booleanToTerraform(this._includeThreadId),
      log_assurance_completed: cdktf.booleanToTerraform(this._logAssuranceCompleted),
      log_client_certificates: cdktf.booleanToTerraform(this._logClientCertificates),
      log_connects: cdktf.booleanToTerraform(this._logConnects),
      log_disconnects: cdktf.booleanToTerraform(this._logDisconnects),
      log_field_behavior: cdktf.stringToTerraform(this._logFieldBehavior),
      log_field_mapping: cdktf.stringToTerraform(this._logFieldMapping),
      log_file: cdktf.stringToTerraform(this._logFile),
      log_file_permissions: cdktf.stringToTerraform(this._logFilePermissions),
      log_intermediate_responses: cdktf.booleanToTerraform(this._logIntermediateResponses),
      log_message_exclusion_policy: cdktf.listMapper(cdktf.stringToTerraform, false)(this._logMessageExclusionPolicy),
      log_redirect_uri: cdktf.booleanToTerraform(this._logRedirectUri),
      log_request_authorization_type: cdktf.booleanToTerraform(this._logRequestAuthorizationType),
      log_request_cookie_names: cdktf.booleanToTerraform(this._logRequestCookieNames),
      log_request_headers: cdktf.stringToTerraform(this._logRequestHeaders),
      log_request_parameters: cdktf.stringToTerraform(this._logRequestParameters),
      log_request_protocol: cdktf.booleanToTerraform(this._logRequestProtocol),
      log_requests: cdktf.booleanToTerraform(this._logRequests),
      log_response_cookie_names: cdktf.booleanToTerraform(this._logResponseCookieNames),
      log_response_headers: cdktf.stringToTerraform(this._logResponseHeaders),
      log_results: cdktf.booleanToTerraform(this._logResults),
      log_search_entries: cdktf.booleanToTerraform(this._logSearchEntries),
      log_search_references: cdktf.booleanToTerraform(this._logSearchReferences),
      log_security_negotiation: cdktf.booleanToTerraform(this._logSecurityNegotiation),
      log_table_name: cdktf.stringToTerraform(this._logTableName),
      logging_error_behavior: cdktf.stringToTerraform(this._loggingErrorBehavior),
      max_string_length: cdktf.numberToTerraform(this._maxStringLength),
      min_included_operation_processing_time: cdktf.stringToTerraform(this._minIncludedOperationProcessingTime),
      min_included_phase_time_nanos: cdktf.numberToTerraform(this._minIncludedPhaseTimeNanos),
      name: cdktf.stringToTerraform(this._name),
      obscure_attribute: cdktf.listMapper(cdktf.stringToTerraform, false)(this._obscureAttribute),
      obscure_sensitive_content: cdktf.booleanToTerraform(this._obscureSensitiveContent),
      output_location: cdktf.stringToTerraform(this._outputLocation),
      override_severity: cdktf.listMapper(cdktf.stringToTerraform, false)(this._overrideSeverity),
      queue_size: cdktf.numberToTerraform(this._queueSize),
      request_criteria: cdktf.stringToTerraform(this._requestCriteria),
      result_criteria: cdktf.stringToTerraform(this._resultCriteria),
      retention_policy: cdktf.listMapper(cdktf.stringToTerraform, false)(this._retentionPolicy),
      rotation_listener: cdktf.listMapper(cdktf.stringToTerraform, false)(this._rotationListener),
      rotation_policy: cdktf.listMapper(cdktf.stringToTerraform, false)(this._rotationPolicy),
      scim_message_type: cdktf.listMapper(cdktf.stringToTerraform, false)(this._scimMessageType),
      script_argument: cdktf.listMapper(cdktf.stringToTerraform, false)(this._scriptArgument),
      script_class: cdktf.stringToTerraform(this._scriptClass),
      search_entry_criteria: cdktf.stringToTerraform(this._searchEntryCriteria),
      search_reference_criteria: cdktf.stringToTerraform(this._searchReferenceCriteria),
      server: cdktf.stringToTerraform(this._server),
      server_host_name: cdktf.stringToTerraform(this._serverHostName),
      server_port: cdktf.numberToTerraform(this._serverPort),
      sign_log: cdktf.booleanToTerraform(this._signLog),
      soft_delete_entry_audit_behavior: cdktf.stringToTerraform(this._softDeleteEntryAuditBehavior),
      suppress_internal_operations: cdktf.booleanToTerraform(this._suppressInternalOperations),
      suppress_replication_operations: cdktf.booleanToTerraform(this._suppressReplicationOperations),
      suppress_virtual_attributes_in_delete_records: cdktf.booleanToTerraform(this._suppressVirtualAttributesInDeleteRecords),
      suppressed_request_header_name: cdktf.listMapper(cdktf.stringToTerraform, false)(this._suppressedRequestHeaderName),
      suppressed_request_parameter_name: cdktf.listMapper(cdktf.stringToTerraform, false)(this._suppressedRequestParameterName),
      suppressed_response_header_name: cdktf.listMapper(cdktf.stringToTerraform, false)(this._suppressedResponseHeaderName),
      syslog_external_server: cdktf.listMapper(cdktf.stringToTerraform, false)(this._syslogExternalServer),
      syslog_facility: cdktf.stringToTerraform(this._syslogFacility),
      syslog_message_application_name: cdktf.stringToTerraform(this._syslogMessageApplicationName),
      syslog_message_host_name: cdktf.stringToTerraform(this._syslogMessageHostName),
      syslog_severity: cdktf.stringToTerraform(this._syslogSeverity),
      time_interval: cdktf.stringToTerraform(this._timeInterval),
      timestamp_precision: cdktf.stringToTerraform(this._timestampPrecision),
      use_reversible_form: cdktf.booleanToTerraform(this._useReversibleForm),
      write_multi_line_messages: cdktf.booleanToTerraform(this._writeMultiLineMessages),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_token_validator_message_type: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._accessTokenValidatorMessageType),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      append: {
        value: cdktf.booleanToHclTerraform(this._append),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      asynchronous: {
        value: cdktf.booleanToHclTerraform(this._asynchronous),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_flush: {
        value: cdktf.booleanToHclTerraform(this._autoFlush),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      buffer_size: {
        value: cdktf.stringToHclTerraform(this._bufferSize),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compression_mechanism: {
        value: cdktf.stringToHclTerraform(this._compressionMechanism),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connection_criteria: {
        value: cdktf.stringToHclTerraform(this._connectionCriteria),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      consent_message_type: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._consentMessageType),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      correlate_requests_and_results: {
        value: cdktf.booleanToHclTerraform(this._correlateRequestsAndResults),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      debug_aci_enabled: {
        value: cdktf.booleanToHclTerraform(this._debugAciEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      debug_message_type: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._debugMessageType),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      default_debug_category: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._defaultDebugCategory),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      default_debug_level: {
        value: cdktf.stringToHclTerraform(this._defaultDebugLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_include_throwable_cause: {
        value: cdktf.booleanToHclTerraform(this._defaultIncludeThrowableCause),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      default_omit_method_entry_arguments: {
        value: cdktf.booleanToHclTerraform(this._defaultOmitMethodEntryArguments),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      default_omit_method_return_value: {
        value: cdktf.booleanToHclTerraform(this._defaultOmitMethodReturnValue),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      default_severity: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._defaultSeverity),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      default_throwable_stack_frames: {
        value: cdktf.numberToHclTerraform(this._defaultThrowableStackFrames),
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
      directory_rest_api_message_type: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._directoryRestApiMessageType),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      encrypt_log: {
        value: cdktf.booleanToHclTerraform(this._encryptLog),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      encryption_settings_definition_id: {
        value: cdktf.stringToHclTerraform(this._encryptionSettingsDefinitionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      exclude_attribute: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._excludeAttribute),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      exclude_path_pattern: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._excludePathPattern),
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
      extension_message_type: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._extensionMessageType),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      generify_message_strings_when_possible: {
        value: cdktf.booleanToHclTerraform(this._generifyMessageStringsWhenPossible),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      http_event: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._httpEvent),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      http_message_type: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._httpMessageType),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id_token_validator_message_type: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._idTokenValidatorMessageType),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      include_add_attribute_names: {
        value: cdktf.booleanToHclTerraform(this._includeAddAttributeNames),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      include_connection_details_in_request_messages: {
        value: cdktf.booleanToHclTerraform(this._includeConnectionDetailsInRequestMessages),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      include_extended_search_request_details: {
        value: cdktf.booleanToHclTerraform(this._includeExtendedSearchRequestDetails),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      include_instance_name: {
        value: cdktf.booleanToHclTerraform(this._includeInstanceName),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      include_intermediate_client_request_control: {
        value: cdktf.booleanToHclTerraform(this._includeIntermediateClientRequestControl),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      include_modify_attribute_names: {
        value: cdktf.booleanToHclTerraform(this._includeModifyAttributeNames),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      include_operation_purpose_request_control: {
        value: cdktf.booleanToHclTerraform(this._includeOperationPurposeRequestControl),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      include_path_pattern: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._includePathPattern),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      include_product_name: {
        value: cdktf.booleanToHclTerraform(this._includeProductName),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      include_replication_change_id: {
        value: cdktf.booleanToHclTerraform(this._includeReplicationChangeId),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      include_request_controls: {
        value: cdktf.booleanToHclTerraform(this._includeRequestControls),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      include_request_details_in_intermediate_response_messages: {
        value: cdktf.booleanToHclTerraform(this._includeRequestDetailsInIntermediateResponseMessages),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      include_request_details_in_result_messages: {
        value: cdktf.booleanToHclTerraform(this._includeRequestDetailsInResultMessages),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      include_request_details_in_search_entry_messages: {
        value: cdktf.booleanToHclTerraform(this._includeRequestDetailsInSearchEntryMessages),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      include_request_details_in_search_reference_messages: {
        value: cdktf.booleanToHclTerraform(this._includeRequestDetailsInSearchReferenceMessages),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      include_requester_dn: {
        value: cdktf.booleanToHclTerraform(this._includeRequesterDn),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      include_requester_ip_address: {
        value: cdktf.booleanToHclTerraform(this._includeRequesterIpAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      include_response_controls: {
        value: cdktf.booleanToHclTerraform(this._includeResponseControls),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      include_result_code_names: {
        value: cdktf.booleanToHclTerraform(this._includeResultCodeNames),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      include_search_entry_attribute_names: {
        value: cdktf.booleanToHclTerraform(this._includeSearchEntryAttributeNames),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      include_startup_id: {
        value: cdktf.booleanToHclTerraform(this._includeStartupId),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      include_thread_id: {
        value: cdktf.booleanToHclTerraform(this._includeThreadId),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      log_assurance_completed: {
        value: cdktf.booleanToHclTerraform(this._logAssuranceCompleted),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      log_client_certificates: {
        value: cdktf.booleanToHclTerraform(this._logClientCertificates),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      log_connects: {
        value: cdktf.booleanToHclTerraform(this._logConnects),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      log_disconnects: {
        value: cdktf.booleanToHclTerraform(this._logDisconnects),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      log_field_behavior: {
        value: cdktf.stringToHclTerraform(this._logFieldBehavior),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_field_mapping: {
        value: cdktf.stringToHclTerraform(this._logFieldMapping),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_file: {
        value: cdktf.stringToHclTerraform(this._logFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_file_permissions: {
        value: cdktf.stringToHclTerraform(this._logFilePermissions),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_intermediate_responses: {
        value: cdktf.booleanToHclTerraform(this._logIntermediateResponses),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      log_message_exclusion_policy: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._logMessageExclusionPolicy),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      log_redirect_uri: {
        value: cdktf.booleanToHclTerraform(this._logRedirectUri),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      log_request_authorization_type: {
        value: cdktf.booleanToHclTerraform(this._logRequestAuthorizationType),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      log_request_cookie_names: {
        value: cdktf.booleanToHclTerraform(this._logRequestCookieNames),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      log_request_headers: {
        value: cdktf.stringToHclTerraform(this._logRequestHeaders),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_request_parameters: {
        value: cdktf.stringToHclTerraform(this._logRequestParameters),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_request_protocol: {
        value: cdktf.booleanToHclTerraform(this._logRequestProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      log_requests: {
        value: cdktf.booleanToHclTerraform(this._logRequests),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      log_response_cookie_names: {
        value: cdktf.booleanToHclTerraform(this._logResponseCookieNames),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      log_response_headers: {
        value: cdktf.stringToHclTerraform(this._logResponseHeaders),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_results: {
        value: cdktf.booleanToHclTerraform(this._logResults),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      log_search_entries: {
        value: cdktf.booleanToHclTerraform(this._logSearchEntries),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      log_search_references: {
        value: cdktf.booleanToHclTerraform(this._logSearchReferences),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      log_security_negotiation: {
        value: cdktf.booleanToHclTerraform(this._logSecurityNegotiation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      log_table_name: {
        value: cdktf.stringToHclTerraform(this._logTableName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logging_error_behavior: {
        value: cdktf.stringToHclTerraform(this._loggingErrorBehavior),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_string_length: {
        value: cdktf.numberToHclTerraform(this._maxStringLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_included_operation_processing_time: {
        value: cdktf.stringToHclTerraform(this._minIncludedOperationProcessingTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      min_included_phase_time_nanos: {
        value: cdktf.numberToHclTerraform(this._minIncludedPhaseTimeNanos),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      obscure_attribute: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._obscureAttribute),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      obscure_sensitive_content: {
        value: cdktf.booleanToHclTerraform(this._obscureSensitiveContent),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      output_location: {
        value: cdktf.stringToHclTerraform(this._outputLocation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      override_severity: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._overrideSeverity),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      queue_size: {
        value: cdktf.numberToHclTerraform(this._queueSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      request_criteria: {
        value: cdktf.stringToHclTerraform(this._requestCriteria),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      result_criteria: {
        value: cdktf.stringToHclTerraform(this._resultCriteria),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retention_policy: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._retentionPolicy),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      rotation_listener: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._rotationListener),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      rotation_policy: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._rotationPolicy),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      scim_message_type: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._scimMessageType),
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
      search_entry_criteria: {
        value: cdktf.stringToHclTerraform(this._searchEntryCriteria),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      search_reference_criteria: {
        value: cdktf.stringToHclTerraform(this._searchReferenceCriteria),
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
      server_host_name: {
        value: cdktf.stringToHclTerraform(this._serverHostName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_port: {
        value: cdktf.numberToHclTerraform(this._serverPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sign_log: {
        value: cdktf.booleanToHclTerraform(this._signLog),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      soft_delete_entry_audit_behavior: {
        value: cdktf.stringToHclTerraform(this._softDeleteEntryAuditBehavior),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      suppress_internal_operations: {
        value: cdktf.booleanToHclTerraform(this._suppressInternalOperations),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      suppress_replication_operations: {
        value: cdktf.booleanToHclTerraform(this._suppressReplicationOperations),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      suppress_virtual_attributes_in_delete_records: {
        value: cdktf.booleanToHclTerraform(this._suppressVirtualAttributesInDeleteRecords),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      suppressed_request_header_name: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._suppressedRequestHeaderName),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      suppressed_request_parameter_name: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._suppressedRequestParameterName),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      suppressed_response_header_name: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._suppressedResponseHeaderName),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      syslog_external_server: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._syslogExternalServer),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      syslog_facility: {
        value: cdktf.stringToHclTerraform(this._syslogFacility),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      syslog_message_application_name: {
        value: cdktf.stringToHclTerraform(this._syslogMessageApplicationName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      syslog_message_host_name: {
        value: cdktf.stringToHclTerraform(this._syslogMessageHostName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      syslog_severity: {
        value: cdktf.stringToHclTerraform(this._syslogSeverity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_interval: {
        value: cdktf.stringToHclTerraform(this._timeInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timestamp_precision: {
        value: cdktf.stringToHclTerraform(this._timestampPrecision),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_reversible_form: {
        value: cdktf.booleanToHclTerraform(this._useReversibleForm),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      write_multi_line_messages: {
        value: cdktf.booleanToHclTerraform(this._writeMultiLineMessages),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
