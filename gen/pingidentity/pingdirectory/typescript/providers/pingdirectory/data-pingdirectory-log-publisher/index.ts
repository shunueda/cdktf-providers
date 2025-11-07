// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/log_publisher
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPingdirectoryLogPublisherConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of this config object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/log_publisher#name DataPingdirectoryLogPublisher#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/log_publisher pingdirectory_log_publisher}
*/
export class DataPingdirectoryLogPublisher extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_log_publisher";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPingdirectoryLogPublisher resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPingdirectoryLogPublisher to import
  * @param importFromId The id of the existing DataPingdirectoryLogPublisher that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/log_publisher#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPingdirectoryLogPublisher to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_log_publisher", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/log_publisher pingdirectory_log_publisher} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPingdirectoryLogPublisherConfig
  */
  public constructor(scope: Construct, id: string, config: DataPingdirectoryLogPublisherConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_log_publisher',
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
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_token_validator_message_type - computed: true, optional: false, required: false
  public get accessTokenValidatorMessageType() {
    return cdktf.Fn.tolist(this.getListAttribute('access_token_validator_message_type'));
  }

  // append - computed: true, optional: false, required: false
  public get append() {
    return this.getBooleanAttribute('append');
  }

  // asynchronous - computed: true, optional: false, required: false
  public get asynchronous() {
    return this.getBooleanAttribute('asynchronous');
  }

  // auto_flush - computed: true, optional: false, required: false
  public get autoFlush() {
    return this.getBooleanAttribute('auto_flush');
  }

  // buffer_size - computed: true, optional: false, required: false
  public get bufferSize() {
    return this.getStringAttribute('buffer_size');
  }

  // compression_mechanism - computed: true, optional: false, required: false
  public get compressionMechanism() {
    return this.getStringAttribute('compression_mechanism');
  }

  // connection_criteria - computed: true, optional: false, required: false
  public get connectionCriteria() {
    return this.getStringAttribute('connection_criteria');
  }

  // consent_message_type - computed: true, optional: false, required: false
  public get consentMessageType() {
    return cdktf.Fn.tolist(this.getListAttribute('consent_message_type'));
  }

  // correlate_requests_and_results - computed: true, optional: false, required: false
  public get correlateRequestsAndResults() {
    return this.getBooleanAttribute('correlate_requests_and_results');
  }

  // debug_aci_enabled - computed: true, optional: false, required: false
  public get debugAciEnabled() {
    return this.getBooleanAttribute('debug_aci_enabled');
  }

  // debug_message_type - computed: true, optional: false, required: false
  public get debugMessageType() {
    return cdktf.Fn.tolist(this.getListAttribute('debug_message_type'));
  }

  // default_debug_category - computed: true, optional: false, required: false
  public get defaultDebugCategory() {
    return cdktf.Fn.tolist(this.getListAttribute('default_debug_category'));
  }

  // default_debug_level - computed: true, optional: false, required: false
  public get defaultDebugLevel() {
    return this.getStringAttribute('default_debug_level');
  }

  // default_include_throwable_cause - computed: true, optional: false, required: false
  public get defaultIncludeThrowableCause() {
    return this.getBooleanAttribute('default_include_throwable_cause');
  }

  // default_omit_method_entry_arguments - computed: true, optional: false, required: false
  public get defaultOmitMethodEntryArguments() {
    return this.getBooleanAttribute('default_omit_method_entry_arguments');
  }

  // default_omit_method_return_value - computed: true, optional: false, required: false
  public get defaultOmitMethodReturnValue() {
    return this.getBooleanAttribute('default_omit_method_return_value');
  }

  // default_severity - computed: true, optional: false, required: false
  public get defaultSeverity() {
    return cdktf.Fn.tolist(this.getListAttribute('default_severity'));
  }

  // default_throwable_stack_frames - computed: true, optional: false, required: false
  public get defaultThrowableStackFrames() {
    return this.getNumberAttribute('default_throwable_stack_frames');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // directory_rest_api_message_type - computed: true, optional: false, required: false
  public get directoryRestApiMessageType() {
    return cdktf.Fn.tolist(this.getListAttribute('directory_rest_api_message_type'));
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // encrypt_log - computed: true, optional: false, required: false
  public get encryptLog() {
    return this.getBooleanAttribute('encrypt_log');
  }

  // encryption_settings_definition_id - computed: true, optional: false, required: false
  public get encryptionSettingsDefinitionId() {
    return this.getStringAttribute('encryption_settings_definition_id');
  }

  // exclude_attribute - computed: true, optional: false, required: false
  public get excludeAttribute() {
    return cdktf.Fn.tolist(this.getListAttribute('exclude_attribute'));
  }

  // exclude_path_pattern - computed: true, optional: false, required: false
  public get excludePathPattern() {
    return cdktf.Fn.tolist(this.getListAttribute('exclude_path_pattern'));
  }

  // extension_argument - computed: true, optional: false, required: false
  public get extensionArgument() {
    return cdktf.Fn.tolist(this.getListAttribute('extension_argument'));
  }

  // extension_class - computed: true, optional: false, required: false
  public get extensionClass() {
    return this.getStringAttribute('extension_class');
  }

  // extension_message_type - computed: true, optional: false, required: false
  public get extensionMessageType() {
    return cdktf.Fn.tolist(this.getListAttribute('extension_message_type'));
  }

  // generify_message_strings_when_possible - computed: true, optional: false, required: false
  public get generifyMessageStringsWhenPossible() {
    return this.getBooleanAttribute('generify_message_strings_when_possible');
  }

  // http_event - computed: true, optional: false, required: false
  public get httpEvent() {
    return cdktf.Fn.tolist(this.getListAttribute('http_event'));
  }

  // http_message_type - computed: true, optional: false, required: false
  public get httpMessageType() {
    return cdktf.Fn.tolist(this.getListAttribute('http_message_type'));
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // id_token_validator_message_type - computed: true, optional: false, required: false
  public get idTokenValidatorMessageType() {
    return cdktf.Fn.tolist(this.getListAttribute('id_token_validator_message_type'));
  }

  // include_add_attribute_names - computed: true, optional: false, required: false
  public get includeAddAttributeNames() {
    return this.getBooleanAttribute('include_add_attribute_names');
  }

  // include_connection_details_in_request_messages - computed: true, optional: false, required: false
  public get includeConnectionDetailsInRequestMessages() {
    return this.getBooleanAttribute('include_connection_details_in_request_messages');
  }

  // include_extended_search_request_details - computed: true, optional: false, required: false
  public get includeExtendedSearchRequestDetails() {
    return this.getBooleanAttribute('include_extended_search_request_details');
  }

  // include_instance_name - computed: true, optional: false, required: false
  public get includeInstanceName() {
    return this.getBooleanAttribute('include_instance_name');
  }

  // include_intermediate_client_request_control - computed: true, optional: false, required: false
  public get includeIntermediateClientRequestControl() {
    return this.getBooleanAttribute('include_intermediate_client_request_control');
  }

  // include_modify_attribute_names - computed: true, optional: false, required: false
  public get includeModifyAttributeNames() {
    return this.getBooleanAttribute('include_modify_attribute_names');
  }

  // include_operation_purpose_request_control - computed: true, optional: false, required: false
  public get includeOperationPurposeRequestControl() {
    return this.getBooleanAttribute('include_operation_purpose_request_control');
  }

  // include_path_pattern - computed: true, optional: false, required: false
  public get includePathPattern() {
    return cdktf.Fn.tolist(this.getListAttribute('include_path_pattern'));
  }

  // include_product_name - computed: true, optional: false, required: false
  public get includeProductName() {
    return this.getBooleanAttribute('include_product_name');
  }

  // include_replication_change_id - computed: true, optional: false, required: false
  public get includeReplicationChangeId() {
    return this.getBooleanAttribute('include_replication_change_id');
  }

  // include_request_controls - computed: true, optional: false, required: false
  public get includeRequestControls() {
    return this.getBooleanAttribute('include_request_controls');
  }

  // include_request_details_in_intermediate_response_messages - computed: true, optional: false, required: false
  public get includeRequestDetailsInIntermediateResponseMessages() {
    return this.getBooleanAttribute('include_request_details_in_intermediate_response_messages');
  }

  // include_request_details_in_result_messages - computed: true, optional: false, required: false
  public get includeRequestDetailsInResultMessages() {
    return this.getBooleanAttribute('include_request_details_in_result_messages');
  }

  // include_request_details_in_search_entry_messages - computed: true, optional: false, required: false
  public get includeRequestDetailsInSearchEntryMessages() {
    return this.getBooleanAttribute('include_request_details_in_search_entry_messages');
  }

  // include_request_details_in_search_reference_messages - computed: true, optional: false, required: false
  public get includeRequestDetailsInSearchReferenceMessages() {
    return this.getBooleanAttribute('include_request_details_in_search_reference_messages');
  }

  // include_requester_dn - computed: true, optional: false, required: false
  public get includeRequesterDn() {
    return this.getBooleanAttribute('include_requester_dn');
  }

  // include_requester_ip_address - computed: true, optional: false, required: false
  public get includeRequesterIpAddress() {
    return this.getBooleanAttribute('include_requester_ip_address');
  }

  // include_response_controls - computed: true, optional: false, required: false
  public get includeResponseControls() {
    return this.getBooleanAttribute('include_response_controls');
  }

  // include_result_code_names - computed: true, optional: false, required: false
  public get includeResultCodeNames() {
    return this.getBooleanAttribute('include_result_code_names');
  }

  // include_search_entry_attribute_names - computed: true, optional: false, required: false
  public get includeSearchEntryAttributeNames() {
    return this.getBooleanAttribute('include_search_entry_attribute_names');
  }

  // include_startup_id - computed: true, optional: false, required: false
  public get includeStartupId() {
    return this.getBooleanAttribute('include_startup_id');
  }

  // include_thread_id - computed: true, optional: false, required: false
  public get includeThreadId() {
    return this.getBooleanAttribute('include_thread_id');
  }

  // log_assurance_completed - computed: true, optional: false, required: false
  public get logAssuranceCompleted() {
    return this.getBooleanAttribute('log_assurance_completed');
  }

  // log_client_certificates - computed: true, optional: false, required: false
  public get logClientCertificates() {
    return this.getBooleanAttribute('log_client_certificates');
  }

  // log_connects - computed: true, optional: false, required: false
  public get logConnects() {
    return this.getBooleanAttribute('log_connects');
  }

  // log_disconnects - computed: true, optional: false, required: false
  public get logDisconnects() {
    return this.getBooleanAttribute('log_disconnects');
  }

  // log_field_behavior - computed: true, optional: false, required: false
  public get logFieldBehavior() {
    return this.getStringAttribute('log_field_behavior');
  }

  // log_field_mapping - computed: true, optional: false, required: false
  public get logFieldMapping() {
    return this.getStringAttribute('log_field_mapping');
  }

  // log_file - computed: true, optional: false, required: false
  public get logFile() {
    return this.getStringAttribute('log_file');
  }

  // log_file_permissions - computed: true, optional: false, required: false
  public get logFilePermissions() {
    return this.getStringAttribute('log_file_permissions');
  }

  // log_intermediate_responses - computed: true, optional: false, required: false
  public get logIntermediateResponses() {
    return this.getBooleanAttribute('log_intermediate_responses');
  }

  // log_message_exclusion_policy - computed: true, optional: false, required: false
  public get logMessageExclusionPolicy() {
    return cdktf.Fn.tolist(this.getListAttribute('log_message_exclusion_policy'));
  }

  // log_redirect_uri - computed: true, optional: false, required: false
  public get logRedirectUri() {
    return this.getBooleanAttribute('log_redirect_uri');
  }

  // log_request_authorization_type - computed: true, optional: false, required: false
  public get logRequestAuthorizationType() {
    return this.getBooleanAttribute('log_request_authorization_type');
  }

  // log_request_cookie_names - computed: true, optional: false, required: false
  public get logRequestCookieNames() {
    return this.getBooleanAttribute('log_request_cookie_names');
  }

  // log_request_headers - computed: true, optional: false, required: false
  public get logRequestHeaders() {
    return this.getStringAttribute('log_request_headers');
  }

  // log_request_parameters - computed: true, optional: false, required: false
  public get logRequestParameters() {
    return this.getStringAttribute('log_request_parameters');
  }

  // log_request_protocol - computed: true, optional: false, required: false
  public get logRequestProtocol() {
    return this.getBooleanAttribute('log_request_protocol');
  }

  // log_requests - computed: true, optional: false, required: false
  public get logRequests() {
    return this.getBooleanAttribute('log_requests');
  }

  // log_response_cookie_names - computed: true, optional: false, required: false
  public get logResponseCookieNames() {
    return this.getBooleanAttribute('log_response_cookie_names');
  }

  // log_response_headers - computed: true, optional: false, required: false
  public get logResponseHeaders() {
    return this.getStringAttribute('log_response_headers');
  }

  // log_results - computed: true, optional: false, required: false
  public get logResults() {
    return this.getBooleanAttribute('log_results');
  }

  // log_search_entries - computed: true, optional: false, required: false
  public get logSearchEntries() {
    return this.getBooleanAttribute('log_search_entries');
  }

  // log_search_references - computed: true, optional: false, required: false
  public get logSearchReferences() {
    return this.getBooleanAttribute('log_search_references');
  }

  // log_security_negotiation - computed: true, optional: false, required: false
  public get logSecurityNegotiation() {
    return this.getBooleanAttribute('log_security_negotiation');
  }

  // log_table_name - computed: true, optional: false, required: false
  public get logTableName() {
    return this.getStringAttribute('log_table_name');
  }

  // logging_error_behavior - computed: true, optional: false, required: false
  public get loggingErrorBehavior() {
    return this.getStringAttribute('logging_error_behavior');
  }

  // max_string_length - computed: true, optional: false, required: false
  public get maxStringLength() {
    return this.getNumberAttribute('max_string_length');
  }

  // min_included_operation_processing_time - computed: true, optional: false, required: false
  public get minIncludedOperationProcessingTime() {
    return this.getStringAttribute('min_included_operation_processing_time');
  }

  // min_included_phase_time_nanos - computed: true, optional: false, required: false
  public get minIncludedPhaseTimeNanos() {
    return this.getNumberAttribute('min_included_phase_time_nanos');
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

  // obscure_attribute - computed: true, optional: false, required: false
  public get obscureAttribute() {
    return cdktf.Fn.tolist(this.getListAttribute('obscure_attribute'));
  }

  // obscure_sensitive_content - computed: true, optional: false, required: false
  public get obscureSensitiveContent() {
    return this.getBooleanAttribute('obscure_sensitive_content');
  }

  // output_location - computed: true, optional: false, required: false
  public get outputLocation() {
    return this.getStringAttribute('output_location');
  }

  // override_severity - computed: true, optional: false, required: false
  public get overrideSeverity() {
    return cdktf.Fn.tolist(this.getListAttribute('override_severity'));
  }

  // queue_size - computed: true, optional: false, required: false
  public get queueSize() {
    return this.getNumberAttribute('queue_size');
  }

  // request_criteria - computed: true, optional: false, required: false
  public get requestCriteria() {
    return this.getStringAttribute('request_criteria');
  }

  // result_criteria - computed: true, optional: false, required: false
  public get resultCriteria() {
    return this.getStringAttribute('result_criteria');
  }

  // retention_policy - computed: true, optional: false, required: false
  public get retentionPolicy() {
    return cdktf.Fn.tolist(this.getListAttribute('retention_policy'));
  }

  // rotation_listener - computed: true, optional: false, required: false
  public get rotationListener() {
    return cdktf.Fn.tolist(this.getListAttribute('rotation_listener'));
  }

  // rotation_policy - computed: true, optional: false, required: false
  public get rotationPolicy() {
    return cdktf.Fn.tolist(this.getListAttribute('rotation_policy'));
  }

  // scim_message_type - computed: true, optional: false, required: false
  public get scimMessageType() {
    return cdktf.Fn.tolist(this.getListAttribute('scim_message_type'));
  }

  // script_argument - computed: true, optional: false, required: false
  public get scriptArgument() {
    return cdktf.Fn.tolist(this.getListAttribute('script_argument'));
  }

  // script_class - computed: true, optional: false, required: false
  public get scriptClass() {
    return this.getStringAttribute('script_class');
  }

  // search_entry_criteria - computed: true, optional: false, required: false
  public get searchEntryCriteria() {
    return this.getStringAttribute('search_entry_criteria');
  }

  // search_reference_criteria - computed: true, optional: false, required: false
  public get searchReferenceCriteria() {
    return this.getStringAttribute('search_reference_criteria');
  }

  // server - computed: true, optional: false, required: false
  public get server() {
    return this.getStringAttribute('server');
  }

  // server_host_name - computed: true, optional: false, required: false
  public get serverHostName() {
    return this.getStringAttribute('server_host_name');
  }

  // server_port - computed: true, optional: false, required: false
  public get serverPort() {
    return this.getNumberAttribute('server_port');
  }

  // sign_log - computed: true, optional: false, required: false
  public get signLog() {
    return this.getBooleanAttribute('sign_log');
  }

  // soft_delete_entry_audit_behavior - computed: true, optional: false, required: false
  public get softDeleteEntryAuditBehavior() {
    return this.getStringAttribute('soft_delete_entry_audit_behavior');
  }

  // suppress_internal_operations - computed: true, optional: false, required: false
  public get suppressInternalOperations() {
    return this.getBooleanAttribute('suppress_internal_operations');
  }

  // suppress_replication_operations - computed: true, optional: false, required: false
  public get suppressReplicationOperations() {
    return this.getBooleanAttribute('suppress_replication_operations');
  }

  // suppress_virtual_attributes_in_delete_records - computed: true, optional: false, required: false
  public get suppressVirtualAttributesInDeleteRecords() {
    return this.getBooleanAttribute('suppress_virtual_attributes_in_delete_records');
  }

  // suppressed_request_header_name - computed: true, optional: false, required: false
  public get suppressedRequestHeaderName() {
    return cdktf.Fn.tolist(this.getListAttribute('suppressed_request_header_name'));
  }

  // suppressed_request_parameter_name - computed: true, optional: false, required: false
  public get suppressedRequestParameterName() {
    return cdktf.Fn.tolist(this.getListAttribute('suppressed_request_parameter_name'));
  }

  // suppressed_response_header_name - computed: true, optional: false, required: false
  public get suppressedResponseHeaderName() {
    return cdktf.Fn.tolist(this.getListAttribute('suppressed_response_header_name'));
  }

  // syslog_external_server - computed: true, optional: false, required: false
  public get syslogExternalServer() {
    return cdktf.Fn.tolist(this.getListAttribute('syslog_external_server'));
  }

  // syslog_facility - computed: true, optional: false, required: false
  public get syslogFacility() {
    return this.getStringAttribute('syslog_facility');
  }

  // syslog_message_application_name - computed: true, optional: false, required: false
  public get syslogMessageApplicationName() {
    return this.getStringAttribute('syslog_message_application_name');
  }

  // syslog_message_host_name - computed: true, optional: false, required: false
  public get syslogMessageHostName() {
    return this.getStringAttribute('syslog_message_host_name');
  }

  // syslog_severity - computed: true, optional: false, required: false
  public get syslogSeverity() {
    return this.getStringAttribute('syslog_severity');
  }

  // time_interval - computed: true, optional: false, required: false
  public get timeInterval() {
    return this.getStringAttribute('time_interval');
  }

  // timestamp_precision - computed: true, optional: false, required: false
  public get timestampPrecision() {
    return this.getStringAttribute('timestamp_precision');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // use_reversible_form - computed: true, optional: false, required: false
  public get useReversibleForm() {
    return this.getBooleanAttribute('use_reversible_form');
  }

  // write_multi_line_messages - computed: true, optional: false, required: false
  public get writeMultiLineMessages() {
    return this.getBooleanAttribute('write_multi_line_messages');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
