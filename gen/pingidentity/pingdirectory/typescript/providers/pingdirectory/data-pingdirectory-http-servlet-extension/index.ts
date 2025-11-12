// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/http_servlet_extension
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPingdirectoryHttpServletExtensionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of this config object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/http_servlet_extension#name DataPingdirectoryHttpServletExtension#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/http_servlet_extension pingdirectory_http_servlet_extension}
*/
export class DataPingdirectoryHttpServletExtension extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_http_servlet_extension";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPingdirectoryHttpServletExtension resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPingdirectoryHttpServletExtension to import
  * @param importFromId The id of the existing DataPingdirectoryHttpServletExtension that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/http_servlet_extension#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPingdirectoryHttpServletExtension to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_http_servlet_extension", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/http_servlet_extension pingdirectory_http_servlet_extension} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPingdirectoryHttpServletExtensionConfig
  */
  public constructor(scope: Construct, id: string, config: DataPingdirectoryHttpServletExtensionConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_http_servlet_extension',
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
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_token_scope - computed: true, optional: false, required: false
  public get accessTokenScope() {
    return this.getStringAttribute('access_token_scope');
  }

  // access_token_validator - computed: true, optional: false, required: false
  public get accessTokenValidator() {
    return cdktf.Fn.tolist(this.getListAttribute('access_token_validator'));
  }

  // additional_response_contents - computed: true, optional: false, required: false
  public get additionalResponseContents() {
    return this.getStringAttribute('additional_response_contents');
  }

  // allow_context_override - computed: true, optional: false, required: false
  public get allowContextOverride() {
    return this.getBooleanAttribute('allow_context_override');
  }

  // allowed_authentication_type - computed: true, optional: false, required: false
  public get allowedAuthenticationType() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_authentication_type'));
  }

  // allowed_control - computed: true, optional: false, required: false
  public get allowedControl() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_control'));
  }

  // always_include_monitor_entry_name_label - computed: true, optional: false, required: false
  public get alwaysIncludeMonitorEntryNameLabel() {
    return this.getBooleanAttribute('always_include_monitor_entry_name_label');
  }

  // always_use_permissive_modify - computed: true, optional: false, required: false
  public get alwaysUsePermissiveModify() {
    return this.getBooleanAttribute('always_use_permissive_modify');
  }

  // audience - computed: true, optional: false, required: false
  public get audience() {
    return this.getStringAttribute('audience');
  }

  // available_status_code - computed: true, optional: false, required: false
  public get availableStatusCode() {
    return this.getNumberAttribute('available_status_code');
  }

  // base_context_path - computed: true, optional: false, required: false
  public get baseContextPath() {
    return this.getStringAttribute('base_context_path');
  }

  // basic_auth_enabled - computed: true, optional: false, required: false
  public get basicAuthEnabled() {
    return this.getBooleanAttribute('basic_auth_enabled');
  }

  // bearer_token_auth_enabled - computed: true, optional: false, required: false
  public get bearerTokenAuthEnabled() {
    return this.getBooleanAttribute('bearer_token_auth_enabled');
  }

  // bulk_max_concurrent_requests - computed: true, optional: false, required: false
  public get bulkMaxConcurrentRequests() {
    return this.getNumberAttribute('bulk_max_concurrent_requests');
  }

  // bulk_max_operations - computed: true, optional: false, required: false
  public get bulkMaxOperations() {
    return this.getNumberAttribute('bulk_max_operations');
  }

  // bulk_max_payload_size - computed: true, optional: false, required: false
  public get bulkMaxPayloadSize() {
    return this.getStringAttribute('bulk_max_payload_size');
  }

  // character_encoding - computed: true, optional: false, required: false
  public get characterEncoding() {
    return this.getStringAttribute('character_encoding');
  }

  // correlation_id_response_header - computed: true, optional: false, required: false
  public get correlationIdResponseHeader() {
    return this.getStringAttribute('correlation_id_response_header');
  }

  // cross_origin_policy - computed: true, optional: false, required: false
  public get crossOriginPolicy() {
    return this.getStringAttribute('cross_origin_policy');
  }

  // debug_enabled - computed: true, optional: false, required: false
  public get debugEnabled() {
    return this.getBooleanAttribute('debug_enabled');
  }

  // debug_level - computed: true, optional: false, required: false
  public get debugLevel() {
    return this.getStringAttribute('debug_level');
  }

  // debug_type - computed: true, optional: false, required: false
  public get debugType() {
    return cdktf.Fn.tolist(this.getListAttribute('debug_type'));
  }

  // default_mime_type - computed: true, optional: false, required: false
  public get defaultMimeType() {
    return this.getStringAttribute('default_mime_type');
  }

  // default_operational_attribute - computed: true, optional: false, required: false
  public get defaultOperationalAttribute() {
    return cdktf.Fn.tolist(this.getListAttribute('default_operational_attribute'));
  }

  // degraded_status_code - computed: true, optional: false, required: false
  public get degradedStatusCode() {
    return this.getNumberAttribute('degraded_status_code');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // document_root_directory - computed: true, optional: false, required: false
  public get documentRootDirectory() {
    return this.getStringAttribute('document_root_directory');
  }

  // enable_directory_indexing - computed: true, optional: false, required: false
  public get enableDirectoryIndexing() {
    return this.getBooleanAttribute('enable_directory_indexing');
  }

  // entity_tag_ldap_attribute - computed: true, optional: false, required: false
  public get entityTagLdapAttribute() {
    return this.getStringAttribute('entity_tag_ldap_attribute');
  }

  // exclude_ldap_base_dn - computed: true, optional: false, required: false
  public get excludeLdapBaseDn() {
    return cdktf.Fn.tolist(this.getListAttribute('exclude_ldap_base_dn'));
  }

  // exclude_ldap_objectclass - computed: true, optional: false, required: false
  public get excludeLdapObjectclass() {
    return cdktf.Fn.tolist(this.getListAttribute('exclude_ldap_objectclass'));
  }

  // expose_request_attributes - computed: true, optional: false, required: false
  public get exposeRequestAttributes() {
    return this.getBooleanAttribute('expose_request_attributes');
  }

  // expose_server_context - computed: true, optional: false, required: false
  public get exposeServerContext() {
    return this.getBooleanAttribute('expose_server_context');
  }

  // expose_session_attributes - computed: true, optional: false, required: false
  public get exposeSessionAttributes() {
    return this.getBooleanAttribute('expose_session_attributes');
  }

  // extension_argument - computed: true, optional: false, required: false
  public get extensionArgument() {
    return cdktf.Fn.tolist(this.getListAttribute('extension_argument'));
  }

  // extension_class - computed: true, optional: false, required: false
  public get extensionClass() {
    return this.getStringAttribute('extension_class');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // id_token_validator - computed: true, optional: false, required: false
  public get idTokenValidator() {
    return cdktf.Fn.tolist(this.getListAttribute('id_token_validator'));
  }

  // identity_mapper - computed: true, optional: false, required: false
  public get identityMapper() {
    return this.getStringAttribute('identity_mapper');
  }

  // include_instance_name_label - computed: true, optional: false, required: false
  public get includeInstanceNameLabel() {
    return this.getBooleanAttribute('include_instance_name_label');
  }

  // include_ldap_base_dn - computed: true, optional: false, required: false
  public get includeLdapBaseDn() {
    return cdktf.Fn.tolist(this.getListAttribute('include_ldap_base_dn'));
  }

  // include_ldap_objectclass - computed: true, optional: false, required: false
  public get includeLdapObjectclass() {
    return cdktf.Fn.tolist(this.getListAttribute('include_ldap_objectclass'));
  }

  // include_location_name_label - computed: true, optional: false, required: false
  public get includeLocationNameLabel() {
    return this.getBooleanAttribute('include_location_name_label');
  }

  // include_monitor_attribute_name_label - computed: true, optional: false, required: false
  public get includeMonitorAttributeNameLabel() {
    return this.getBooleanAttribute('include_monitor_attribute_name_label');
  }

  // include_monitor_object_class_name_label - computed: true, optional: false, required: false
  public get includeMonitorObjectClassNameLabel() {
    return this.getBooleanAttribute('include_monitor_object_class_name_label');
  }

  // include_product_name_label - computed: true, optional: false, required: false
  public get includeProductNameLabel() {
    return this.getBooleanAttribute('include_product_name_label');
  }

  // include_response_body - computed: true, optional: false, required: false
  public get includeResponseBody() {
    return this.getBooleanAttribute('include_response_body');
  }

  // include_stack_trace - computed: true, optional: false, required: false
  public get includeStackTrace() {
    return this.getBooleanAttribute('include_stack_trace');
  }

  // index_file - computed: true, optional: false, required: false
  public get indexFile() {
    return cdktf.Fn.tolist(this.getListAttribute('index_file'));
  }

  // label_name_value_pair - computed: true, optional: false, required: false
  public get labelNameValuePair() {
    return cdktf.Fn.tolist(this.getListAttribute('label_name_value_pair'));
  }

  // map_access_tokens_to_local_users - computed: true, optional: false, required: false
  public get mapAccessTokensToLocalUsers() {
    return this.getStringAttribute('map_access_tokens_to_local_users');
  }

  // max_page_size - computed: true, optional: false, required: false
  public get maxPageSize() {
    return this.getNumberAttribute('max_page_size');
  }

  // max_results - computed: true, optional: false, required: false
  public get maxResults() {
    return this.getNumberAttribute('max_results');
  }

  // mime_types_file - computed: true, optional: false, required: false
  public get mimeTypesFile() {
    return this.getStringAttribute('mime_types_file');
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

  // oauth_token_handler - computed: true, optional: false, required: false
  public get oauthTokenHandler() {
    return this.getStringAttribute('oauth_token_handler');
  }

  // override_status_code - computed: true, optional: false, required: false
  public get overrideStatusCode() {
    return this.getNumberAttribute('override_status_code');
  }

  // reject_expansion_attribute - computed: true, optional: false, required: false
  public get rejectExpansionAttribute() {
    return cdktf.Fn.tolist(this.getListAttribute('reject_expansion_attribute'));
  }

  // require_authentication - computed: true, optional: false, required: false
  public get requireAuthentication() {
    return this.getBooleanAttribute('require_authentication');
  }

  // require_file_servlet_access_privilege - computed: true, optional: false, required: false
  public get requireFileServletAccessPrivilege() {
    return this.getBooleanAttribute('require_file_servlet_access_privilege');
  }

  // require_group - computed: true, optional: false, required: false
  public get requireGroup() {
    return cdktf.Fn.tolist(this.getListAttribute('require_group'));
  }

  // resource_mapping_file - computed: true, optional: false, required: false
  public get resourceMappingFile() {
    return this.getStringAttribute('resource_mapping_file');
  }

  // response_header - computed: true, optional: false, required: false
  public get responseHeader() {
    return cdktf.Fn.tolist(this.getListAttribute('response_header'));
  }

  // schemas_endpoint_objectclass - computed: true, optional: false, required: false
  public get schemasEndpointObjectclass() {
    return cdktf.Fn.tolist(this.getListAttribute('schemas_endpoint_objectclass'));
  }

  // script_argument - computed: true, optional: false, required: false
  public get scriptArgument() {
    return cdktf.Fn.tolist(this.getListAttribute('script_argument'));
  }

  // script_class - computed: true, optional: false, required: false
  public get scriptClass() {
    return this.getStringAttribute('script_class');
  }

  // server - computed: true, optional: false, required: false
  public get server() {
    return this.getStringAttribute('server');
  }

  // static_content_directory - computed: true, optional: false, required: false
  public get staticContentDirectory() {
    return this.getStringAttribute('static_content_directory');
  }

  // static_context_path - computed: true, optional: false, required: false
  public get staticContextPath() {
    return this.getStringAttribute('static_context_path');
  }

  // static_custom_directory - computed: true, optional: false, required: false
  public get staticCustomDirectory() {
    return this.getStringAttribute('static_custom_directory');
  }

  // static_response_header - computed: true, optional: false, required: false
  public get staticResponseHeader() {
    return cdktf.Fn.tolist(this.getListAttribute('static_response_header'));
  }

  // swagger_enabled - computed: true, optional: false, required: false
  public get swaggerEnabled() {
    return this.getBooleanAttribute('swagger_enabled');
  }

  // template_directory - computed: true, optional: false, required: false
  public get templateDirectory() {
    return cdktf.Fn.tolist(this.getListAttribute('template_directory'));
  }

  // temporary_directory - computed: true, optional: false, required: false
  public get temporaryDirectory() {
    return this.getStringAttribute('temporary_directory');
  }

  // temporary_directory_permissions - computed: true, optional: false, required: false
  public get temporaryDirectoryPermissions() {
    return this.getStringAttribute('temporary_directory_permissions');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // unavailable_status_code - computed: true, optional: false, required: false
  public get unavailableStatusCode() {
    return this.getNumberAttribute('unavailable_status_code');
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
