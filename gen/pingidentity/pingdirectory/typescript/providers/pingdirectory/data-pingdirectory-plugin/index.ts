// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/plugin
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPingdirectoryPluginConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of this config object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/plugin#name DataPingdirectoryPlugin#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/plugin pingdirectory_plugin}
*/
export class DataPingdirectoryPlugin extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_plugin";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPingdirectoryPlugin resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPingdirectoryPlugin to import
  * @param importFromId The id of the existing DataPingdirectoryPlugin that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/plugin#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPingdirectoryPlugin to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_plugin", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/plugin pingdirectory_plugin} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPingdirectoryPluginConfig
  */
  public constructor(scope: Construct, id: string, config: DataPingdirectoryPluginConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_plugin',
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

  // additional_user_mapping_scim_filter - computed: true, optional: false, required: false
  public get additionalUserMappingScimFilter() {
    return this.getStringAttribute('additional_user_mapping_scim_filter');
  }

  // agentx_address - computed: true, optional: false, required: false
  public get agentxAddress() {
    return this.getStringAttribute('agentx_address');
  }

  // agentx_port - computed: true, optional: false, required: false
  public get agentxPort() {
    return this.getNumberAttribute('agentx_port');
  }

  // allow_lax_pass_through_authentication_passwords - computed: true, optional: false, required: false
  public get allowLaxPassThroughAuthenticationPasswords() {
    return this.getBooleanAttribute('allow_lax_pass_through_authentication_passwords');
  }

  // allowed_request_control - computed: true, optional: false, required: false
  public get allowedRequestControl() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_request_control'));
  }

  // always_map_responses - computed: true, optional: false, required: false
  public get alwaysMapResponses() {
    return this.getBooleanAttribute('always_map_responses');
  }

  // api_url - computed: true, optional: false, required: false
  public get apiUrl() {
    return this.getStringAttribute('api_url');
  }

  // append - computed: true, optional: false, required: false
  public get append() {
    return this.getBooleanAttribute('append');
  }

  // attribute_type - computed: true, optional: false, required: false
  public get attributeType() {
    return cdktf.Fn.tolist(this.getListAttribute('attribute_type'));
  }

  // auth_url - computed: true, optional: false, required: false
  public get authUrl() {
    return this.getStringAttribute('auth_url');
  }

  // base_dn - computed: true, optional: false, required: false
  public get baseDn() {
    return cdktf.Fn.tolist(this.getListAttribute('base_dn'));
  }

  // bind_dn_pattern - computed: true, optional: false, required: false
  public get bindDnPattern() {
    return this.getStringAttribute('bind_dn_pattern');
  }

  // changelog_password_encryption_key - computed: true, optional: false, required: false
  public get changelogPasswordEncryptionKey() {
    return this.getStringAttribute('changelog_password_encryption_key');
  }

  // changelog_password_encryption_key_passphrase_provider - computed: true, optional: false, required: false
  public get changelogPasswordEncryptionKeyPassphraseProvider() {
    return this.getStringAttribute('changelog_password_encryption_key_passphrase_provider');
  }

  // collection_interval - computed: true, optional: false, required: false
  public get collectionInterval() {
    return this.getStringAttribute('collection_interval');
  }

  // connect_retry_max_wait - computed: true, optional: false, required: false
  public get connectRetryMaxWait() {
    return this.getStringAttribute('connect_retry_max_wait');
  }

  // connection_criteria - computed: true, optional: false, required: false
  public get connectionCriteria() {
    return this.getStringAttribute('connection_criteria');
  }

  // context_name - computed: true, optional: false, required: false
  public get contextName() {
    return this.getStringAttribute('context_name');
  }

  // custom_datetime_format - computed: true, optional: false, required: false
  public get customDatetimeFormat() {
    return this.getStringAttribute('custom_datetime_format');
  }

  // custom_timezone - computed: true, optional: false, required: false
  public get customTimezone() {
    return this.getStringAttribute('custom_timezone');
  }

  // datetime_attribute - computed: true, optional: false, required: false
  public get datetimeAttribute() {
    return this.getStringAttribute('datetime_attribute');
  }

  // datetime_format - computed: true, optional: false, required: false
  public get datetimeFormat() {
    return this.getStringAttribute('datetime_format');
  }

  // datetime_json_field - computed: true, optional: false, required: false
  public get datetimeJsonField() {
    return this.getStringAttribute('datetime_json_field');
  }

  // default_auth_password_storage_scheme - computed: true, optional: false, required: false
  public get defaultAuthPasswordStorageScheme() {
    return cdktf.Fn.tolist(this.getListAttribute('default_auth_password_storage_scheme'));
  }

  // default_user_password_storage_scheme - computed: true, optional: false, required: false
  public get defaultUserPasswordStorageScheme() {
    return cdktf.Fn.tolist(this.getListAttribute('default_user_password_storage_scheme'));
  }

  // delay - computed: true, optional: false, required: false
  public get delay() {
    return this.getStringAttribute('delay');
  }

  // delay_after_alert - computed: true, optional: false, required: false
  public get delayAfterAlert() {
    return this.getStringAttribute('delay_after_alert');
  }

  // delay_post_gc - computed: true, optional: false, required: false
  public get delayPostGc() {
    return this.getStringAttribute('delay_post_gc');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // dn_map - computed: true, optional: false, required: false
  public get dnMap() {
    return cdktf.Fn.tolist(this.getListAttribute('dn_map'));
  }

  // empty_instead_of_zero - computed: true, optional: false, required: false
  public get emptyInsteadOfZero() {
    return this.getBooleanAttribute('empty_instead_of_zero');
  }

  // enable_attribute_mapping - computed: true, optional: false, required: false
  public get enableAttributeMapping() {
    return this.getBooleanAttribute('enable_attribute_mapping');
  }

  // enable_control_mapping - computed: true, optional: false, required: false
  public get enableControlMapping() {
    return this.getBooleanAttribute('enable_control_mapping');
  }

  // enable_profiling_on_startup - computed: true, optional: false, required: false
  public get enableProfilingOnStartup() {
    return this.getBooleanAttribute('enable_profiling_on_startup');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // encryption_settings_definition_id - computed: true, optional: false, required: false
  public get encryptionSettingsDefinitionId() {
    return this.getStringAttribute('encryption_settings_definition_id');
  }

  // entry_cache_info - computed: true, optional: false, required: false
  public get entryCacheInfo() {
    return this.getStringAttribute('entry_cache_info');
  }

  // environment_id - computed: true, optional: false, required: false
  public get environmentId() {
    return this.getStringAttribute('environment_id');
  }

  // exclude_attribute - computed: true, optional: false, required: false
  public get excludeAttribute() {
    return cdktf.Fn.tolist(this.getListAttribute('exclude_attribute'));
  }

  // exclude_base_dn - computed: true, optional: false, required: false
  public get excludeBaseDn() {
    return cdktf.Fn.tolist(this.getListAttribute('exclude_base_dn'));
  }

  // exclude_filter - computed: true, optional: false, required: false
  public get excludeFilter() {
    return cdktf.Fn.tolist(this.getListAttribute('exclude_filter'));
  }

  // expiration_offset - computed: true, optional: false, required: false
  public get expirationOffset() {
    return this.getStringAttribute('expiration_offset');
  }

  // extension_argument - computed: true, optional: false, required: false
  public get extensionArgument() {
    return cdktf.Fn.tolist(this.getListAttribute('extension_argument'));
  }

  // extension_class - computed: true, optional: false, required: false
  public get extensionClass() {
    return this.getStringAttribute('extension_class');
  }

  // filter - computed: true, optional: false, required: false
  public get filter() {
    return cdktf.Fn.tolist(this.getListAttribute('filter'));
  }

  // filter_prefix - computed: true, optional: false, required: false
  public get filterPrefix() {
    return this.getStringAttribute('filter_prefix');
  }

  // filter_suffix - computed: true, optional: false, required: false
  public get filterSuffix() {
    return this.getStringAttribute('filter_suffix');
  }

  // gauge_info - computed: true, optional: false, required: false
  public get gaugeInfo() {
    return this.getStringAttribute('gauge_info');
  }

  // generate_collector_files - computed: true, optional: false, required: false
  public get generateCollectorFiles() {
    return this.getBooleanAttribute('generate_collector_files');
  }

  // header_prefix_per_column - computed: true, optional: false, required: false
  public get headerPrefixPerColumn() {
    return this.getBooleanAttribute('header_prefix_per_column');
  }

  // histogram_category_boundary - computed: true, optional: false, required: false
  public get histogramCategoryBoundary() {
    return cdktf.Fn.tolist(this.getListAttribute('histogram_category_boundary'));
  }

  // histogram_format - computed: true, optional: false, required: false
  public get histogramFormat() {
    return this.getStringAttribute('histogram_format');
  }

  // histogram_op_type - computed: true, optional: false, required: false
  public get histogramOpType() {
    return cdktf.Fn.tolist(this.getListAttribute('histogram_op_type'));
  }

  // host_info - computed: true, optional: false, required: false
  public get hostInfo() {
    return cdktf.Fn.tolist(this.getListAttribute('host_info'));
  }

  // http_proxy_external_server - computed: true, optional: false, required: false
  public get httpProxyExternalServer() {
    return this.getStringAttribute('http_proxy_external_server');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ignored_password_policy_state_error_condition - computed: true, optional: false, required: false
  public get ignoredPasswordPolicyStateErrorCondition() {
    return cdktf.Fn.tolist(this.getListAttribute('ignored_password_policy_state_error_condition'));
  }

  // include_attribute - computed: true, optional: false, required: false
  public get includeAttribute() {
    return cdktf.Fn.tolist(this.getListAttribute('include_attribute'));
  }

  // include_base_dn - computed: true, optional: false, required: false
  public get includeBaseDn() {
    return cdktf.Fn.tolist(this.getListAttribute('include_base_dn'));
  }

  // include_filter - computed: true, optional: false, required: false
  public get includeFilter() {
    return cdktf.Fn.tolist(this.getListAttribute('include_filter'));
  }

  // include_http_metrics - computed: true, optional: false, required: false
  public get includeHttpMetrics() {
    return this.getBooleanAttribute('include_http_metrics');
  }

  // include_parseable_attribute_names - computed: true, optional: false, required: false
  public get includeParseableAttributeNames() {
    return this.getBooleanAttribute('include_parseable_attribute_names');
  }

  // include_queue_time - computed: true, optional: false, required: false
  public get includeQueueTime() {
    return this.getBooleanAttribute('include_queue_time');
  }

  // included_ldap_application - computed: true, optional: false, required: false
  public get includedLdapApplication() {
    return cdktf.Fn.tolist(this.getListAttribute('included_ldap_application'));
  }

  // included_ldap_stat - computed: true, optional: false, required: false
  public get includedLdapStat() {
    return cdktf.Fn.tolist(this.getListAttribute('included_ldap_stat'));
  }

  // included_local_entry_base_dn - computed: true, optional: false, required: false
  public get includedLocalEntryBaseDn() {
    return cdktf.Fn.tolist(this.getListAttribute('included_local_entry_base_dn'));
  }

  // included_resource_stat - computed: true, optional: false, required: false
  public get includedResourceStat() {
    return cdktf.Fn.tolist(this.getListAttribute('included_resource_stat'));
  }

  // initial_connections - computed: true, optional: false, required: false
  public get initialConnections() {
    return this.getNumberAttribute('initial_connections');
  }

  // invoke_for_failed_binds - computed: true, optional: false, required: false
  public get invokeForFailedBinds() {
    return this.getBooleanAttribute('invoke_for_failed_binds');
  }

  // invoke_for_internal_operations - computed: true, optional: false, required: false
  public get invokeForInternalOperations() {
    return this.getBooleanAttribute('invoke_for_internal_operations');
  }

  // invoke_gc_day_of_week - computed: true, optional: false, required: false
  public get invokeGcDayOfWeek() {
    return cdktf.Fn.tolist(this.getListAttribute('invoke_gc_day_of_week'));
  }

  // invoke_gc_time_utc - computed: true, optional: false, required: false
  public get invokeGcTimeUtc() {
    return cdktf.Fn.tolist(this.getListAttribute('invoke_gc_time_utc'));
  }

  // ldap_changelog_info - computed: true, optional: false, required: false
  public get ldapChangelogInfo() {
    return this.getStringAttribute('ldap_changelog_info');
  }

  // ldap_info - computed: true, optional: false, required: false
  public get ldapInfo() {
    return this.getStringAttribute('ldap_info');
  }

  // lines_between_header - computed: true, optional: false, required: false
  public get linesBetweenHeader() {
    return this.getNumberAttribute('lines_between_header');
  }

  // local_db_backend_info - computed: true, optional: false, required: false
  public get localDbBackendInfo() {
    return this.getStringAttribute('local_db_backend_info');
  }

  // log_file - computed: true, optional: false, required: false
  public get logFile() {
    return this.getStringAttribute('log_file');
  }

  // log_file_format - computed: true, optional: false, required: false
  public get logFileFormat() {
    return this.getStringAttribute('log_file_format');
  }

  // log_file_permissions - computed: true, optional: false, required: false
  public get logFilePermissions() {
    return this.getStringAttribute('log_file_permissions');
  }

  // log_interval - computed: true, optional: false, required: false
  public get logInterval() {
    return this.getStringAttribute('log_interval');
  }

  // logging_error_behavior - computed: true, optional: false, required: false
  public get loggingErrorBehavior() {
    return this.getStringAttribute('logging_error_behavior');
  }

  // lower_bound - computed: true, optional: false, required: false
  public get lowerBound() {
    return this.getNumberAttribute('lower_bound');
  }

  // map_attribute - computed: true, optional: false, required: false
  public get mapAttribute() {
    return cdktf.Fn.tolist(this.getListAttribute('map_attribute'));
  }

  // max_connections - computed: true, optional: false, required: false
  public get maxConnections() {
    return this.getNumberAttribute('max_connections');
  }

  // max_search_result_entries_to_update - computed: true, optional: false, required: false
  public get maxSearchResultEntriesToUpdate() {
    return this.getNumberAttribute('max_search_result_entries_to_update');
  }

  // max_update_frequency - computed: true, optional: false, required: false
  public get maxUpdateFrequency() {
    return this.getStringAttribute('max_update_frequency');
  }

  // max_updates_per_second - computed: true, optional: false, required: false
  public get maxUpdatesPerSecond() {
    return this.getNumberAttribute('max_updates_per_second');
  }

  // maximum_membership_updates_per_modify - computed: true, optional: false, required: false
  public get maximumMembershipUpdatesPerModify() {
    return this.getNumberAttribute('maximum_membership_updates_per_modify');
  }

  // multi_valued_attribute_behavior - computed: true, optional: false, required: false
  public get multiValuedAttributeBehavior() {
    return this.getStringAttribute('multi_valued_attribute_behavior');
  }

  // multiple_attribute_behavior - computed: true, optional: false, required: false
  public get multipleAttributeBehavior() {
    return this.getStringAttribute('multiple_attribute_behavior');
  }

  // multiple_value_pattern_behavior - computed: true, optional: false, required: false
  public get multipleValuePatternBehavior() {
    return this.getStringAttribute('multiple_value_pattern_behavior');
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

  // num_delete_threads - computed: true, optional: false, required: false
  public get numDeleteThreads() {
    return this.getNumberAttribute('num_delete_threads');
  }

  // num_most_expensive_phases_shown - computed: true, optional: false, required: false
  public get numMostExpensivePhasesShown() {
    return this.getNumberAttribute('num_most_expensive_phases_shown');
  }

  // num_threads - computed: true, optional: false, required: false
  public get numThreads() {
    return this.getNumberAttribute('num_threads');
  }

  // num_worker_threads - computed: true, optional: false, required: false
  public get numWorkerThreads() {
    return this.getNumberAttribute('num_worker_threads');
  }

  // oauth_client_id - computed: true, optional: false, required: false
  public get oauthClientId() {
    return this.getStringAttribute('oauth_client_id');
  }

  // oauth_client_secret - computed: true, optional: false, required: false
  public get oauthClientSecret() {
    return this.getStringAttribute('oauth_client_secret');
  }

  // oauth_client_secret_passphrase_provider - computed: true, optional: false, required: false
  public get oauthClientSecretPassphraseProvider() {
    return this.getStringAttribute('oauth_client_secret_passphrase_provider');
  }

  // operation_type - computed: true, optional: false, required: false
  public get operationType() {
    return cdktf.Fn.tolist(this.getListAttribute('operation_type'));
  }

  // output_file - computed: true, optional: false, required: false
  public get outputFile() {
    return this.getStringAttribute('output_file');
  }

  // override_local_password - computed: true, optional: false, required: false
  public get overrideLocalPassword() {
    return this.getBooleanAttribute('override_local_password');
  }

  // pass_through_authentication_handler - computed: true, optional: false, required: false
  public get passThroughAuthenticationHandler() {
    return this.getStringAttribute('pass_through_authentication_handler');
  }

  // peer_server_priority_index - computed: true, optional: false, required: false
  public get peerServerPriorityIndex() {
    return this.getNumberAttribute('peer_server_priority_index');
  }

  // per_application_ldap_stats - computed: true, optional: false, required: false
  public get perApplicationLdapStats() {
    return this.getStringAttribute('per_application_ldap_stats');
  }

  // ping_interval - computed: true, optional: false, required: false
  public get pingInterval() {
    return this.getStringAttribute('ping_interval');
  }

  // plugin_type - computed: true, optional: false, required: false
  public get pluginType() {
    return cdktf.Fn.tolist(this.getListAttribute('plugin_type'));
  }

  // polling_interval - computed: true, optional: false, required: false
  public get pollingInterval() {
    return this.getStringAttribute('polling_interval');
  }

  // prevent_adding_groups_as_inverted_static_group_members - computed: true, optional: false, required: false
  public get preventAddingGroupsAsInvertedStaticGroupMembers() {
    return this.getBooleanAttribute('prevent_adding_groups_as_inverted_static_group_members');
  }

  // prevent_adding_members_to_nonexistent_groups - computed: true, optional: false, required: false
  public get preventAddingMembersToNonexistentGroups() {
    return this.getBooleanAttribute('prevent_adding_members_to_nonexistent_groups');
  }

  // prevent_conflicts_with_soft_deleted_entries - computed: true, optional: false, required: false
  public get preventConflictsWithSoftDeletedEntries() {
    return this.getBooleanAttribute('prevent_conflicts_with_soft_deleted_entries');
  }

  // prevent_nesting_nonexistent_groups - computed: true, optional: false, required: false
  public get preventNestingNonexistentGroups() {
    return this.getBooleanAttribute('prevent_nesting_nonexistent_groups');
  }

  // previous_file_extension - computed: true, optional: false, required: false
  public get previousFileExtension() {
    return this.getStringAttribute('previous_file_extension');
  }

  // profile_action - computed: true, optional: false, required: false
  public get profileAction() {
    return this.getStringAttribute('profile_action');
  }

  // profile_directory - computed: true, optional: false, required: false
  public get profileDirectory() {
    return this.getStringAttribute('profile_directory');
  }

  // profile_sample_interval - computed: true, optional: false, required: false
  public get profileSampleInterval() {
    return this.getStringAttribute('profile_sample_interval');
  }

  // purge_behavior - computed: true, optional: false, required: false
  public get purgeBehavior() {
    return this.getStringAttribute('purge_behavior');
  }

  // read_operation_support - computed: true, optional: false, required: false
  public get readOperationSupport() {
    return this.getStringAttribute('read_operation_support');
  }

  // referral_base_url - computed: true, optional: false, required: false
  public get referralBaseUrl() {
    return cdktf.Fn.tolist(this.getListAttribute('referral_base_url'));
  }

  // replication_info - computed: true, optional: false, required: false
  public get replicationInfo() {
    return this.getStringAttribute('replication_info');
  }

  // request_criteria - computed: true, optional: false, required: false
  public get requestCriteria() {
    return this.getStringAttribute('request_criteria');
  }

  // resource_type - computed: true, optional: false, required: false
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }

  // retain_files_sparsely_by_age - computed: true, optional: false, required: false
  public get retainFilesSparselyByAge() {
    return this.getBooleanAttribute('retain_files_sparsely_by_age');
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

  // sample_interval - computed: true, optional: false, required: false
  public get sampleInterval() {
    return this.getStringAttribute('sample_interval');
  }

  // sanitize - computed: true, optional: false, required: false
  public get sanitize() {
    return this.getBooleanAttribute('sanitize');
  }

  // scope - computed: true, optional: false, required: false
  public get scope() {
    return this.getStringAttribute('scope');
  }

  // script_argument - computed: true, optional: false, required: false
  public get scriptArgument() {
    return cdktf.Fn.tolist(this.getListAttribute('script_argument'));
  }

  // script_class - computed: true, optional: false, required: false
  public get scriptClass() {
    return this.getStringAttribute('script_class');
  }

  // search_base_dn - computed: true, optional: false, required: false
  public get searchBaseDn() {
    return this.getStringAttribute('search_base_dn');
  }

  // search_filter_pattern - computed: true, optional: false, required: false
  public get searchFilterPattern() {
    return this.getStringAttribute('search_filter_pattern');
  }

  // separate_monitor_entry_per_tracked_application - computed: true, optional: false, required: false
  public get separateMonitorEntryPerTrackedApplication() {
    return this.getBooleanAttribute('separate_monitor_entry_per_tracked_application');
  }

  // server - computed: true, optional: false, required: false
  public get server() {
    return cdktf.Fn.tolist(this.getListAttribute('server'));
  }

  // server_access_mode - computed: true, optional: false, required: false
  public get serverAccessMode() {
    return this.getStringAttribute('server_access_mode');
  }

  // server_info - computed: true, optional: false, required: false
  public get serverInfo() {
    return this.getStringAttribute('server_info');
  }

  // session_timeout - computed: true, optional: false, required: false
  public get sessionTimeout() {
    return this.getStringAttribute('session_timeout');
  }

  // source_attribute - computed: true, optional: false, required: false
  public get sourceAttribute() {
    return this.getStringAttribute('source_attribute');
  }

  // source_attribute_removal_behavior - computed: true, optional: false, required: false
  public get sourceAttributeRemovalBehavior() {
    return this.getStringAttribute('source_attribute_removal_behavior');
  }

  // source_dn - computed: true, optional: false, required: false
  public get sourceDn() {
    return this.getStringAttribute('source_dn');
  }

  // status_summary_info - computed: true, optional: false, required: false
  public get statusSummaryInfo() {
    return this.getStringAttribute('status_summary_info');
  }

  // suppress_if_idle - computed: true, optional: false, required: false
  public get suppressIfIdle() {
    return this.getBooleanAttribute('suppress_if_idle');
  }

  // target_attribute - computed: true, optional: false, required: false
  public get targetAttribute() {
    return this.getStringAttribute('target_attribute');
  }

  // target_attribute_exists_during_initial_population_behavior - computed: true, optional: false, required: false
  public get targetAttributeExistsDuringInitialPopulationBehavior() {
    return this.getStringAttribute('target_attribute_exists_during_initial_population_behavior');
  }

  // target_dn - computed: true, optional: false, required: false
  public get targetDn() {
    return this.getStringAttribute('target_dn');
  }

  // time_between_searches - computed: true, optional: false, required: false
  public get timeBetweenSearches() {
    return this.getStringAttribute('time_between_searches');
  }

  // traditional_static_group_object_class - computed: true, optional: false, required: false
  public get traditionalStaticGroupObjectClass() {
    return this.getStringAttribute('traditional_static_group_object_class');
  }

  // try_local_bind - computed: true, optional: false, required: false
  public get tryLocalBind() {
    return this.getBooleanAttribute('try_local_bind');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return cdktf.Fn.tolist(this.getListAttribute('type'));
  }

  // update_interval - computed: true, optional: false, required: false
  public get updateInterval() {
    return this.getStringAttribute('update_interval');
  }

  // update_local_password - computed: true, optional: false, required: false
  public get updateLocalPassword() {
    return this.getBooleanAttribute('update_local_password');
  }

  // update_local_password_dn - computed: true, optional: false, required: false
  public get updateLocalPasswordDn() {
    return this.getStringAttribute('update_local_password_dn');
  }

  // update_source_attribute_behavior - computed: true, optional: false, required: false
  public get updateSourceAttributeBehavior() {
    return this.getStringAttribute('update_source_attribute_behavior');
  }

  // update_target_attribute_behavior - computed: true, optional: false, required: false
  public get updateTargetAttributeBehavior() {
    return this.getStringAttribute('update_target_attribute_behavior');
  }

  // updated_entry_newly_matches_criteria_behavior - computed: true, optional: false, required: false
  public get updatedEntryNewlyMatchesCriteriaBehavior() {
    return this.getStringAttribute('updated_entry_newly_matches_criteria_behavior');
  }

  // updated_entry_no_longer_matches_criteria_behavior - computed: true, optional: false, required: false
  public get updatedEntryNoLongerMatchesCriteriaBehavior() {
    return this.getStringAttribute('updated_entry_no_longer_matches_criteria_behavior');
  }

  // upper_bound - computed: true, optional: false, required: false
  public get upperBound() {
    return this.getNumberAttribute('upper_bound');
  }

  // user_mapping_local_attribute - computed: true, optional: false, required: false
  public get userMappingLocalAttribute() {
    return cdktf.Fn.tolist(this.getListAttribute('user_mapping_local_attribute'));
  }

  // user_mapping_remote_json_field - computed: true, optional: false, required: false
  public get userMappingRemoteJsonField() {
    return cdktf.Fn.tolist(this.getListAttribute('user_mapping_remote_json_field'));
  }

  // value_pattern - computed: true, optional: false, required: false
  public get valuePattern() {
    return cdktf.Fn.tolist(this.getListAttribute('value_pattern'));
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
