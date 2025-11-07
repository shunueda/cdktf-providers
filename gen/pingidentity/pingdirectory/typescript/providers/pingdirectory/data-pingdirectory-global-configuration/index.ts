// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/global_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPingdirectoryGlobalConfigurationConfig extends cdktf.TerraformMetaArguments {
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/global_configuration pingdirectory_global_configuration}
*/
export class DataPingdirectoryGlobalConfiguration extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_global_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPingdirectoryGlobalConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPingdirectoryGlobalConfiguration to import
  * @param importFromId The id of the existing DataPingdirectoryGlobalConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/global_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPingdirectoryGlobalConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_global_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/global_configuration pingdirectory_global_configuration} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPingdirectoryGlobalConfigurationConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataPingdirectoryGlobalConfigurationConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_global_configuration',
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_attribute_name_exceptions - computed: true, optional: false, required: false
  public get allowAttributeNameExceptions() {
    return this.getBooleanAttribute('allow_attribute_name_exceptions');
  }

  // allow_inherited_replication_of_subordinate_backends - computed: true, optional: false, required: false
  public get allowInheritedReplicationOfSubordinateBackends() {
    return this.getBooleanAttribute('allow_inherited_replication_of_subordinate_backends');
  }

  // allow_insecure_local_jmx_connections - computed: true, optional: false, required: false
  public get allowInsecureLocalJmxConnections() {
    return this.getBooleanAttribute('allow_insecure_local_jmx_connections');
  }

  // allowed_insecure_request_criteria - computed: true, optional: false, required: false
  public get allowedInsecureRequestCriteria() {
    return this.getStringAttribute('allowed_insecure_request_criteria');
  }

  // allowed_insecure_tls_protocol - computed: true, optional: false, required: false
  public get allowedInsecureTlsProtocol() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_insecure_tls_protocol'));
  }

  // allowed_task - computed: true, optional: false, required: false
  public get allowedTask() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_task'));
  }

  // allowed_unauthenticated_request_criteria - computed: true, optional: false, required: false
  public get allowedUnauthenticatedRequestCriteria() {
    return this.getStringAttribute('allowed_unauthenticated_request_criteria');
  }

  // attributes_modifiable_with_ignore_no_user_modification_request_control - computed: true, optional: false, required: false
  public get attributesModifiableWithIgnoreNoUserModificationRequestControl() {
    return cdktf.Fn.tolist(this.getListAttribute('attributes_modifiable_with_ignore_no_user_modification_request_control'));
  }

  // auto_name_with_entry_uuid_connection_criteria - computed: true, optional: false, required: false
  public get autoNameWithEntryUuidConnectionCriteria() {
    return this.getStringAttribute('auto_name_with_entry_uuid_connection_criteria');
  }

  // auto_name_with_entry_uuid_request_criteria - computed: true, optional: false, required: false
  public get autoNameWithEntryUuidRequestCriteria() {
    return this.getStringAttribute('auto_name_with_entry_uuid_request_criteria');
  }

  // automatically_compress_encrypted_ldif_exports - computed: true, optional: false, required: false
  public get automaticallyCompressEncryptedLdifExports() {
    return this.getBooleanAttribute('automatically_compress_encrypted_ldif_exports');
  }

  // background_thread_for_each_persistent_search - computed: true, optional: false, required: false
  public get backgroundThreadForEachPersistentSearch() {
    return this.getBooleanAttribute('background_thread_for_each_persistent_search');
  }

  // backup_encryption_settings_definition_id - computed: true, optional: false, required: false
  public get backupEncryptionSettingsDefinitionId() {
    return this.getStringAttribute('backup_encryption_settings_definition_id');
  }

  // bind_with_dn_requires_password - computed: true, optional: false, required: false
  public get bindWithDnRequiresPassword() {
    return this.getBooleanAttribute('bind_with_dn_requires_password');
  }

  // configuration_server_group - computed: true, optional: false, required: false
  public get configurationServerGroup() {
    return this.getStringAttribute('configuration_server_group');
  }

  // database_on_virtualized_or_network_storage - computed: true, optional: false, required: false
  public get databaseOnVirtualizedOrNetworkStorage() {
    return this.getBooleanAttribute('database_on_virtualized_or_network_storage');
  }

  // default_internal_operation_client_connection_policy - computed: true, optional: false, required: false
  public get defaultInternalOperationClientConnectionPolicy() {
    return this.getStringAttribute('default_internal_operation_client_connection_policy');
  }

  // default_password_policy - computed: true, optional: false, required: false
  public get defaultPasswordPolicy() {
    return this.getStringAttribute('default_password_policy');
  }

  // disabled_privilege - computed: true, optional: false, required: false
  public get disabledPrivilege() {
    return cdktf.Fn.tolist(this.getListAttribute('disabled_privilege'));
  }

  // duplicate_alert_limit - computed: true, optional: false, required: false
  public get duplicateAlertLimit() {
    return this.getNumberAttribute('duplicate_alert_limit');
  }

  // duplicate_alert_time_limit - computed: true, optional: false, required: false
  public get duplicateAlertTimeLimit() {
    return this.getStringAttribute('duplicate_alert_time_limit');
  }

  // duplicate_error_log_limit - computed: true, optional: false, required: false
  public get duplicateErrorLogLimit() {
    return this.getNumberAttribute('duplicate_error_log_limit');
  }

  // duplicate_error_log_time_limit - computed: true, optional: false, required: false
  public get duplicateErrorLogTimeLimit() {
    return this.getStringAttribute('duplicate_error_log_time_limit');
  }

  // enable_sub_operation_timer - computed: true, optional: false, required: false
  public get enableSubOperationTimer() {
    return this.getBooleanAttribute('enable_sub_operation_timer');
  }

  // encrypt_backups_by_default - computed: true, optional: false, required: false
  public get encryptBackupsByDefault() {
    return this.getBooleanAttribute('encrypt_backups_by_default');
  }

  // encrypt_data - computed: true, optional: false, required: false
  public get encryptData() {
    return this.getBooleanAttribute('encrypt_data');
  }

  // encrypt_ldif_exports_by_default - computed: true, optional: false, required: false
  public get encryptLdifExportsByDefault() {
    return this.getBooleanAttribute('encrypt_ldif_exports_by_default');
  }

  // encryption_settings_cipher_stream_provider - computed: true, optional: false, required: false
  public get encryptionSettingsCipherStreamProvider() {
    return this.getStringAttribute('encryption_settings_cipher_stream_provider');
  }

  // exit_on_jvm_error - computed: true, optional: false, required: false
  public get exitOnJvmError() {
    return this.getBooleanAttribute('exit_on_jvm_error');
  }

  // force_as_master_for_mirrored_data - computed: true, optional: false, required: false
  public get forceAsMasterForMirroredData() {
    return this.getBooleanAttribute('force_as_master_for_mirrored_data');
  }

  // forced_gc_prime_duration - computed: true, optional: false, required: false
  public get forcedGcPrimeDuration() {
    return this.getStringAttribute('forced_gc_prime_duration');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // idle_time_limit - computed: true, optional: false, required: false
  public get idleTimeLimit() {
    return this.getStringAttribute('idle_time_limit');
  }

  // instance_name - computed: true, optional: false, required: false
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }

  // invalid_attribute_syntax_behavior - computed: true, optional: false, required: false
  public get invalidAttributeSyntaxBehavior() {
    return this.getStringAttribute('invalid_attribute_syntax_behavior');
  }

  // jmx_use_legacy_mbean_names - computed: true, optional: false, required: false
  public get jmxUseLegacyMbeanNames() {
    return this.getBooleanAttribute('jmx_use_legacy_mbean_names');
  }

  // jmx_value_behavior - computed: true, optional: false, required: false
  public get jmxValueBehavior() {
    return this.getStringAttribute('jmx_value_behavior');
  }

  // ldap_join_size_limit - computed: true, optional: false, required: false
  public get ldapJoinSizeLimit() {
    return this.getNumberAttribute('ldap_join_size_limit');
  }

  // ldif_export_encryption_settings_definition_id - computed: true, optional: false, required: false
  public get ldifExportEncryptionSettingsDefinitionId() {
    return this.getStringAttribute('ldif_export_encryption_settings_definition_id');
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
  }

  // lookthrough_limit - computed: true, optional: false, required: false
  public get lookthroughLimit() {
    return this.getNumberAttribute('lookthrough_limit');
  }

  // max_smtp_connection_age - computed: true, optional: false, required: false
  public get maxSmtpConnectionAge() {
    return this.getStringAttribute('max_smtp_connection_age');
  }

  // max_smtp_connection_count - computed: true, optional: false, required: false
  public get maxSmtpConnectionCount() {
    return this.getNumberAttribute('max_smtp_connection_count');
  }

  // maximum_attributes_per_add_request - computed: true, optional: false, required: false
  public get maximumAttributesPerAddRequest() {
    return this.getNumberAttribute('maximum_attributes_per_add_request');
  }

  // maximum_concurrent_connections - computed: true, optional: false, required: false
  public get maximumConcurrentConnections() {
    return this.getNumberAttribute('maximum_concurrent_connections');
  }

  // maximum_concurrent_connections_per_bind_dn - computed: true, optional: false, required: false
  public get maximumConcurrentConnectionsPerBindDn() {
    return this.getNumberAttribute('maximum_concurrent_connections_per_bind_dn');
  }

  // maximum_concurrent_connections_per_ip_address - computed: true, optional: false, required: false
  public get maximumConcurrentConnectionsPerIpAddress() {
    return this.getNumberAttribute('maximum_concurrent_connections_per_ip_address');
  }

  // maximum_concurrent_unindexed_searches - computed: true, optional: false, required: false
  public get maximumConcurrentUnindexedSearches() {
    return this.getNumberAttribute('maximum_concurrent_unindexed_searches');
  }

  // maximum_modifications_per_modify_request - computed: true, optional: false, required: false
  public get maximumModificationsPerModifyRequest() {
    return this.getNumberAttribute('maximum_modifications_per_modify_request');
  }

  // maximum_server_out_log_file_count - computed: true, optional: false, required: false
  public get maximumServerOutLogFileCount() {
    return this.getNumberAttribute('maximum_server_out_log_file_count');
  }

  // maximum_server_out_log_file_size - computed: true, optional: false, required: false
  public get maximumServerOutLogFileSize() {
    return this.getStringAttribute('maximum_server_out_log_file_size');
  }

  // maximum_shutdown_time - computed: true, optional: false, required: false
  public get maximumShutdownTime() {
    return this.getStringAttribute('maximum_shutdown_time');
  }

  // maximum_user_data_password_policies_to_cache - computed: true, optional: false, required: false
  public get maximumUserDataPasswordPoliciesToCache() {
    return this.getNumberAttribute('maximum_user_data_password_policies_to_cache');
  }

  // network_address_cache_ttl - computed: true, optional: false, required: false
  public get networkAddressCacheTtl() {
    return this.getStringAttribute('network_address_cache_ttl');
  }

  // network_address_outage_cache_enabled - computed: true, optional: false, required: false
  public get networkAddressOutageCacheEnabled() {
    return this.getBooleanAttribute('network_address_outage_cache_enabled');
  }

  // notify_abandoned_operations - computed: true, optional: false, required: false
  public get notifyAbandonedOperations() {
    return this.getBooleanAttribute('notify_abandoned_operations');
  }

  // permit_syntax_violations_for_attribute - computed: true, optional: false, required: false
  public get permitSyntaxViolationsForAttribute() {
    return cdktf.Fn.tolist(this.getListAttribute('permit_syntax_violations_for_attribute'));
  }

  // proxied_authorization_identity_mapper - computed: true, optional: false, required: false
  public get proxiedAuthorizationIdentityMapper() {
    return this.getStringAttribute('proxied_authorization_identity_mapper');
  }

  // redact_sensitive_values_in_config_logs - computed: true, optional: false, required: false
  public get redactSensitiveValuesInConfigLogs() {
    return this.getBooleanAttribute('redact_sensitive_values_in_config_logs');
  }

  // reject_insecure_requests - computed: true, optional: false, required: false
  public get rejectInsecureRequests() {
    return this.getBooleanAttribute('reject_insecure_requests');
  }

  // reject_unauthenticated_requests - computed: true, optional: false, required: false
  public get rejectUnauthenticatedRequests() {
    return this.getBooleanAttribute('reject_unauthenticated_requests');
  }

  // replication_assurance_source_backlog_fast_start_threshold - computed: true, optional: false, required: false
  public get replicationAssuranceSourceBacklogFastStartThreshold() {
    return this.getNumberAttribute('replication_assurance_source_backlog_fast_start_threshold');
  }

  // replication_assurance_source_timeout_suspend_duration - computed: true, optional: false, required: false
  public get replicationAssuranceSourceTimeoutSuspendDuration() {
    return this.getStringAttribute('replication_assurance_source_timeout_suspend_duration');
  }

  // replication_backlog_count_alert_threshold - computed: true, optional: false, required: false
  public get replicationBacklogCountAlertThreshold() {
    return this.getNumberAttribute('replication_backlog_count_alert_threshold');
  }

  // replication_backlog_duration_alert_threshold - computed: true, optional: false, required: false
  public get replicationBacklogDurationAlertThreshold() {
    return this.getStringAttribute('replication_backlog_duration_alert_threshold');
  }

  // replication_history_limit - computed: true, optional: false, required: false
  public get replicationHistoryLimit() {
    return this.getNumberAttribute('replication_history_limit');
  }

  // replication_purge_obsolete_replicas - computed: true, optional: false, required: false
  public get replicationPurgeObsoleteReplicas() {
    return this.getBooleanAttribute('replication_purge_obsolete_replicas');
  }

  // replication_set_name - computed: true, optional: false, required: false
  public get replicationSetName() {
    return this.getStringAttribute('replication_set_name');
  }

  // result_code_map - computed: true, optional: false, required: false
  public get resultCodeMap() {
    return this.getStringAttribute('result_code_map');
  }

  // return_bind_error_messages - computed: true, optional: false, required: false
  public get returnBindErrorMessages() {
    return this.getBooleanAttribute('return_bind_error_messages');
  }

  // sensitive_attribute - computed: true, optional: false, required: false
  public get sensitiveAttribute() {
    return cdktf.Fn.tolist(this.getListAttribute('sensitive_attribute'));
  }

  // server_error_result_code - computed: true, optional: false, required: false
  public get serverErrorResultCode() {
    return this.getNumberAttribute('server_error_result_code');
  }

  // shared_local_db_backend_database_cache_percent - computed: true, optional: false, required: false
  public get sharedLocalDbBackendDatabaseCachePercent() {
    return this.getNumberAttribute('shared_local_db_backend_database_cache_percent');
  }

  // single_structural_objectclass_behavior - computed: true, optional: false, required: false
  public get singleStructuralObjectclassBehavior() {
    return this.getStringAttribute('single_structural_objectclass_behavior');
  }

  // size_limit - computed: true, optional: false, required: false
  public get sizeLimit() {
    return this.getNumberAttribute('size_limit');
  }

  // smtp_connection_health_check_interval - computed: true, optional: false, required: false
  public get smtpConnectionHealthCheckInterval() {
    return this.getStringAttribute('smtp_connection_health_check_interval');
  }

  // smtp_server - computed: true, optional: false, required: false
  public get smtpServer() {
    return cdktf.Fn.tolist(this.getListAttribute('smtp_server'));
  }

  // soft_delete_policy - computed: true, optional: false, required: false
  public get softDeletePolicy() {
    return this.getStringAttribute('soft_delete_policy');
  }

  // startup_error_logger_output_location - computed: true, optional: false, required: false
  public get startupErrorLoggerOutputLocation() {
    return this.getStringAttribute('startup_error_logger_output_location');
  }

  // startup_min_replication_backlog_count - computed: true, optional: false, required: false
  public get startupMinReplicationBacklogCount() {
    return this.getNumberAttribute('startup_min_replication_backlog_count');
  }

  // subtree_accessibility_alert_time_limit - computed: true, optional: false, required: false
  public get subtreeAccessibilityAlertTimeLimit() {
    return this.getStringAttribute('subtree_accessibility_alert_time_limit');
  }

  // system_property - computed: true, optional: false, required: false
  public get systemProperty() {
    return cdktf.Fn.tolist(this.getListAttribute('system_property'));
  }

  // time_limit - computed: true, optional: false, required: false
  public get timeLimit() {
    return this.getStringAttribute('time_limit');
  }

  // tracked_application - computed: true, optional: false, required: false
  public get trackedApplication() {
    return cdktf.Fn.tolist(this.getListAttribute('tracked_application'));
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // unauthenticated_idle_time_limit - computed: true, optional: false, required: false
  public get unauthenticatedIdleTimeLimit() {
    return this.getStringAttribute('unauthenticated_idle_time_limit');
  }

  // unauthenticated_lookthrough_limit - computed: true, optional: false, required: false
  public get unauthenticatedLookthroughLimit() {
    return this.getNumberAttribute('unauthenticated_lookthrough_limit');
  }

  // unauthenticated_size_limit - computed: true, optional: false, required: false
  public get unauthenticatedSizeLimit() {
    return this.getNumberAttribute('unauthenticated_size_limit');
  }

  // unauthenticated_time_limit - computed: true, optional: false, required: false
  public get unauthenticatedTimeLimit() {
    return this.getStringAttribute('unauthenticated_time_limit');
  }

  // unrecoverable_database_error_mode - computed: true, optional: false, required: false
  public get unrecoverableDatabaseErrorMode() {
    return this.getStringAttribute('unrecoverable_database_error_mode');
  }

  // use_shared_database_cache_across_all_local_db_backends - computed: true, optional: false, required: false
  public get useSharedDatabaseCacheAcrossAllLocalDbBackends() {
    return this.getBooleanAttribute('use_shared_database_cache_across_all_local_db_backends');
  }

  // verify_entry_digests - computed: true, optional: false, required: false
  public get verifyEntryDigests() {
    return this.getBooleanAttribute('verify_entry_digests');
  }

  // warn_for_backends_with_multiple_base_dns - computed: true, optional: false, required: false
  public get warnForBackendsWithMultipleBaseDns() {
    return this.getBooleanAttribute('warn_for_backends_with_multiple_base_dns');
  }

  // writability_mode - computed: true, optional: false, required: false
  public get writabilityMode() {
    return this.getStringAttribute('writability_mode');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
    };
    return attrs;
  }
}
