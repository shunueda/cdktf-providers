// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/backend
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPingdirectoryBackendConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies a name to identify the associated backend.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/backend#backend_id DataPingdirectoryBackend#backend_id}
  */
  readonly backendId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/backend pingdirectory_backend}
*/
export class DataPingdirectoryBackend extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_backend";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPingdirectoryBackend resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPingdirectoryBackend to import
  * @param importFromId The id of the existing DataPingdirectoryBackend that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/backend#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPingdirectoryBackend to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_backend", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/backend pingdirectory_backend} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPingdirectoryBackendConfig
  */
  public constructor(scope: Construct, id: string, config: DataPingdirectoryBackendConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_backend',
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
    this._backendId = config.backendId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alarm_retention_time - computed: true, optional: false, required: false
  public get alarmRetentionTime() {
    return this.getStringAttribute('alarm_retention_time');
  }

  // alert_retention_time - computed: true, optional: false, required: false
  public get alertRetentionTime() {
    return this.getStringAttribute('alert_retention_time');
  }

  // apply_access_controls_to_changelog_entry_contents - computed: true, optional: false, required: false
  public get applyAccessControlsToChangelogEntryContents() {
    return this.getBooleanAttribute('apply_access_controls_to_changelog_entry_contents');
  }

  // backend_id - computed: false, optional: false, required: true
  private _backendId?: string; 
  public get backendId() {
    return this.getStringAttribute('backend_id');
  }
  public set backendId(value: string) {
    this._backendId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backendIdInput() {
    return this._backendId;
  }

  // background_prime - computed: true, optional: false, required: false
  public get backgroundPrime() {
    return this.getBooleanAttribute('background_prime');
  }

  // backup_directory - computed: true, optional: false, required: false
  public get backupDirectory() {
    return cdktf.Fn.tolist(this.getListAttribute('backup_directory'));
  }

  // backup_file_permissions - computed: true, optional: false, required: false
  public get backupFilePermissions() {
    return this.getStringAttribute('backup_file_permissions');
  }

  // base_dn - computed: true, optional: false, required: false
  public get baseDn() {
    return cdktf.Fn.tolist(this.getListAttribute('base_dn'));
  }

  // changelog_deleted_entry_exclude_attribute - computed: true, optional: false, required: false
  public get changelogDeletedEntryExcludeAttribute() {
    return cdktf.Fn.tolist(this.getListAttribute('changelog_deleted_entry_exclude_attribute'));
  }

  // changelog_deleted_entry_include_attribute - computed: true, optional: false, required: false
  public get changelogDeletedEntryIncludeAttribute() {
    return cdktf.Fn.tolist(this.getListAttribute('changelog_deleted_entry_include_attribute'));
  }

  // changelog_entry_exclude_base_dn - computed: true, optional: false, required: false
  public get changelogEntryExcludeBaseDn() {
    return cdktf.Fn.tolist(this.getListAttribute('changelog_entry_exclude_base_dn'));
  }

  // changelog_entry_exclude_filter - computed: true, optional: false, required: false
  public get changelogEntryExcludeFilter() {
    return cdktf.Fn.tolist(this.getListAttribute('changelog_entry_exclude_filter'));
  }

  // changelog_entry_include_base_dn - computed: true, optional: false, required: false
  public get changelogEntryIncludeBaseDn() {
    return cdktf.Fn.tolist(this.getListAttribute('changelog_entry_include_base_dn'));
  }

  // changelog_entry_include_filter - computed: true, optional: false, required: false
  public get changelogEntryIncludeFilter() {
    return cdktf.Fn.tolist(this.getListAttribute('changelog_entry_include_filter'));
  }

  // changelog_exclude_attribute - computed: true, optional: false, required: false
  public get changelogExcludeAttribute() {
    return cdktf.Fn.tolist(this.getListAttribute('changelog_exclude_attribute'));
  }

  // changelog_include_attribute - computed: true, optional: false, required: false
  public get changelogIncludeAttribute() {
    return cdktf.Fn.tolist(this.getListAttribute('changelog_include_attribute'));
  }

  // changelog_include_key_attribute - computed: true, optional: false, required: false
  public get changelogIncludeKeyAttribute() {
    return cdktf.Fn.tolist(this.getListAttribute('changelog_include_key_attribute'));
  }

  // changelog_max_before_after_values - computed: true, optional: false, required: false
  public get changelogMaxBeforeAfterValues() {
    return this.getNumberAttribute('changelog_max_before_after_values');
  }

  // changelog_maximum_age - computed: true, optional: false, required: false
  public get changelogMaximumAge() {
    return this.getStringAttribute('changelog_maximum_age');
  }

  // changelog_purge_batch_size - computed: true, optional: false, required: false
  public get changelogPurgeBatchSize() {
    return this.getNumberAttribute('changelog_purge_batch_size');
  }

  // changelog_write_batch_size - computed: true, optional: false, required: false
  public get changelogWriteBatchSize() {
    return this.getNumberAttribute('changelog_write_batch_size');
  }

  // changelog_write_queue_capacity - computed: true, optional: false, required: false
  public get changelogWriteQueueCapacity() {
    return this.getNumberAttribute('changelog_write_queue_capacity');
  }

  // compact_common_parent_dn - computed: true, optional: false, required: false
  public get compactCommonParentDn() {
    return cdktf.Fn.tolist(this.getListAttribute('compact_common_parent_dn'));
  }

  // composite_index_entry_limit - computed: true, optional: false, required: false
  public get compositeIndexEntryLimit() {
    return this.getNumberAttribute('composite_index_entry_limit');
  }

  // compress_entries - computed: true, optional: false, required: false
  public get compressEntries() {
    return this.getBooleanAttribute('compress_entries');
  }

  // db_background_sync_interval - computed: true, optional: false, required: false
  public get dbBackgroundSyncInterval() {
    return this.getStringAttribute('db_background_sync_interval');
  }

  // db_cache_percent - computed: true, optional: false, required: false
  public get dbCachePercent() {
    return this.getNumberAttribute('db_cache_percent');
  }

  // db_checkpointer_wakeup_interval - computed: true, optional: false, required: false
  public get dbCheckpointerWakeupInterval() {
    return this.getStringAttribute('db_checkpointer_wakeup_interval');
  }

  // db_cleaner_min_utilization - computed: true, optional: false, required: false
  public get dbCleanerMinUtilization() {
    return this.getNumberAttribute('db_cleaner_min_utilization');
  }

  // db_directory - computed: true, optional: false, required: false
  public get dbDirectory() {
    return this.getStringAttribute('db_directory');
  }

  // db_directory_permissions - computed: true, optional: false, required: false
  public get dbDirectoryPermissions() {
    return this.getStringAttribute('db_directory_permissions');
  }

  // db_evictor_critical_percentage - computed: true, optional: false, required: false
  public get dbEvictorCriticalPercentage() {
    return this.getNumberAttribute('db_evictor_critical_percentage');
  }

  // db_import_cache_percent - computed: true, optional: false, required: false
  public get dbImportCachePercent() {
    return this.getNumberAttribute('db_import_cache_percent');
  }

  // db_log_file_max - computed: true, optional: false, required: false
  public get dbLogFileMax() {
    return this.getStringAttribute('db_log_file_max');
  }

  // db_logging_level - computed: true, optional: false, required: false
  public get dbLoggingLevel() {
    return this.getStringAttribute('db_logging_level');
  }

  // db_num_cleaner_threads - computed: true, optional: false, required: false
  public get dbNumCleanerThreads() {
    return this.getNumberAttribute('db_num_cleaner_threads');
  }

  // db_txn_write_no_sync - computed: true, optional: false, required: false
  public get dbTxnWriteNoSync() {
    return this.getBooleanAttribute('db_txn_write_no_sync');
  }

  // db_use_thread_local_handles - computed: true, optional: false, required: false
  public get dbUseThreadLocalHandles() {
    return this.getBooleanAttribute('db_use_thread_local_handles');
  }

  // deadlock_retry_limit - computed: true, optional: false, required: false
  public get deadlockRetryLimit() {
    return this.getNumberAttribute('deadlock_retry_limit');
  }

  // default_cache_mode - computed: true, optional: false, required: false
  public get defaultCacheMode() {
    return this.getStringAttribute('default_cache_mode');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // disabled_alert_type - computed: true, optional: false, required: false
  public get disabledAlertType() {
    return cdktf.Fn.tolist(this.getListAttribute('disabled_alert_type'));
  }

  // dn2id_cache_mode - computed: true, optional: false, required: false
  public get dn2IdCacheMode() {
    return this.getStringAttribute('dn2id_cache_mode');
  }

  // dn2uri_cache_mode - computed: true, optional: false, required: false
  public get dn2UriCacheMode() {
    return this.getStringAttribute('dn2uri_cache_mode');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // export_thread_count - computed: true, optional: false, required: false
  public get exportThreadCount() {
    return this.getNumberAttribute('export_thread_count');
  }

  // external_txn_default_backend_lock_behavior - computed: true, optional: false, required: false
  public get externalTxnDefaultBackendLockBehavior() {
    return this.getStringAttribute('external_txn_default_backend_lock_behavior');
  }

  // hash_entries - computed: true, optional: false, required: false
  public get hashEntries() {
    return this.getBooleanAttribute('hash_entries');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // id2children_cache_mode - computed: true, optional: false, required: false
  public get id2ChildrenCacheMode() {
    return this.getStringAttribute('id2children_cache_mode');
  }

  // id2children_index_entry_limit - computed: true, optional: false, required: false
  public get id2ChildrenIndexEntryLimit() {
    return this.getNumberAttribute('id2children_index_entry_limit');
  }

  // id2entry_cache_mode - computed: true, optional: false, required: false
  public get id2EntryCacheMode() {
    return this.getStringAttribute('id2entry_cache_mode');
  }

  // id2subtree_cache_mode - computed: true, optional: false, required: false
  public get id2SubtreeCacheMode() {
    return this.getStringAttribute('id2subtree_cache_mode');
  }

  // id2subtree_index_entry_limit - computed: true, optional: false, required: false
  public get id2SubtreeIndexEntryLimit() {
    return this.getNumberAttribute('id2subtree_index_entry_limit');
  }

  // import_temp_directory - computed: true, optional: false, required: false
  public get importTempDirectory() {
    return this.getStringAttribute('import_temp_directory');
  }

  // import_thread_count - computed: true, optional: false, required: false
  public get importThreadCount() {
    return this.getNumberAttribute('import_thread_count');
  }

  // include_virtual_attributes - computed: true, optional: false, required: false
  public get includeVirtualAttributes() {
    return cdktf.Fn.tolist(this.getListAttribute('include_virtual_attributes'));
  }

  // index_entry_limit - computed: true, optional: false, required: false
  public get indexEntryLimit() {
    return this.getNumberAttribute('index_entry_limit');
  }

  // index_exclude_attribute - computed: true, optional: false, required: false
  public get indexExcludeAttribute() {
    return cdktf.Fn.tolist(this.getListAttribute('index_exclude_attribute'));
  }

  // index_include_attribute - computed: true, optional: false, required: false
  public get indexIncludeAttribute() {
    return cdktf.Fn.tolist(this.getListAttribute('index_include_attribute'));
  }

  // insignificant_config_archive_attribute - computed: true, optional: false, required: false
  public get insignificantConfigArchiveAttribute() {
    return cdktf.Fn.tolist(this.getListAttribute('insignificant_config_archive_attribute'));
  }

  // insignificant_config_archive_base_dn - computed: true, optional: false, required: false
  public get insignificantConfigArchiveBaseDn() {
    return cdktf.Fn.tolist(this.getListAttribute('insignificant_config_archive_base_dn'));
  }

  // is_private_backend - computed: true, optional: false, required: false
  public get isPrivateBackend() {
    return this.getBooleanAttribute('is_private_backend');
  }

  // je_property - computed: true, optional: false, required: false
  public get jeProperty() {
    return cdktf.Fn.tolist(this.getListAttribute('je_property'));
  }

  // ldif_file - computed: true, optional: false, required: false
  public get ldifFile() {
    return this.getStringAttribute('ldif_file');
  }

  // maintain_config_archive - computed: true, optional: false, required: false
  public get maintainConfigArchive() {
    return this.getBooleanAttribute('maintain_config_archive');
  }

  // max_alarms - computed: true, optional: false, required: false
  public get maxAlarms() {
    return this.getNumberAttribute('max_alarms');
  }

  // max_alerts - computed: true, optional: false, required: false
  public get maxAlerts() {
    return this.getNumberAttribute('max_alerts');
  }

  // max_config_archive_count - computed: true, optional: false, required: false
  public get maxConfigArchiveCount() {
    return this.getNumberAttribute('max_config_archive_count');
  }

  // maximum_final_task_log_messages_to_retain - computed: true, optional: false, required: false
  public get maximumFinalTaskLogMessagesToRetain() {
    return this.getNumberAttribute('maximum_final_task_log_messages_to_retain');
  }

  // maximum_initial_task_log_messages_to_retain - computed: true, optional: false, required: false
  public get maximumInitialTaskLogMessagesToRetain() {
    return this.getNumberAttribute('maximum_initial_task_log_messages_to_retain');
  }

  // metrics_dir - computed: true, optional: false, required: false
  public get metricsDir() {
    return this.getStringAttribute('metrics_dir');
  }

  // mirrored_subtree_entry_update_timeout - computed: true, optional: false, required: false
  public get mirroredSubtreeEntryUpdateTimeout() {
    return this.getStringAttribute('mirrored_subtree_entry_update_timeout');
  }

  // mirrored_subtree_peer_polling_interval - computed: true, optional: false, required: false
  public get mirroredSubtreePeerPollingInterval() {
    return this.getStringAttribute('mirrored_subtree_peer_polling_interval');
  }

  // mirrored_subtree_search_timeout - computed: true, optional: false, required: false
  public get mirroredSubtreeSearchTimeout() {
    return this.getStringAttribute('mirrored_subtree_search_timeout');
  }

  // notification_manager - computed: true, optional: false, required: false
  public get notificationManager() {
    return this.getStringAttribute('notification_manager');
  }

  // notification_sender_address - computed: true, optional: false, required: false
  public get notificationSenderAddress() {
    return this.getStringAttribute('notification_sender_address');
  }

  // num_recent_changes - computed: true, optional: false, required: false
  public get numRecentChanges() {
    return this.getNumberAttribute('num_recent_changes');
  }

  // offline_process_database_open_timeout - computed: true, optional: false, required: false
  public get offlineProcessDatabaseOpenTimeout() {
    return this.getStringAttribute('offline_process_database_open_timeout');
  }

  // prime_all_indexes - computed: true, optional: false, required: false
  public get primeAllIndexes() {
    return this.getBooleanAttribute('prime_all_indexes');
  }

  // prime_method - computed: true, optional: false, required: false
  public get primeMethod() {
    return cdktf.Fn.tolist(this.getListAttribute('prime_method'));
  }

  // prime_thread_count - computed: true, optional: false, required: false
  public get primeThreadCount() {
    return this.getNumberAttribute('prime_thread_count');
  }

  // prime_time_limit - computed: true, optional: false, required: false
  public get primeTimeLimit() {
    return this.getStringAttribute('prime_time_limit');
  }

  // process_filters_with_undefined_attribute_types - computed: true, optional: false, required: false
  public get processFiltersWithUndefinedAttributeTypes() {
    return this.getBooleanAttribute('process_filters_with_undefined_attribute_types');
  }

  // read_only_schema_file - computed: true, optional: false, required: false
  public get readOnlySchemaFile() {
    return cdktf.Fn.tolist(this.getListAttribute('read_only_schema_file'));
  }

  // report_excluded_changelog_attributes - computed: true, optional: false, required: false
  public get reportExcludedChangelogAttributes() {
    return this.getStringAttribute('report_excluded_changelog_attributes');
  }

  // retention_policy - computed: true, optional: false, required: false
  public get retentionPolicy() {
    return cdktf.Fn.tolist(this.getListAttribute('retention_policy'));
  }

  // return_unavailable_for_untrusted_index - computed: true, optional: false, required: false
  public get returnUnavailableForUntrustedIndex() {
    return this.getBooleanAttribute('return_unavailable_for_untrusted_index');
  }

  // return_unavailable_when_disabled - computed: true, optional: false, required: false
  public get returnUnavailableWhenDisabled() {
    return this.getBooleanAttribute('return_unavailable_when_disabled');
  }

  // sample_flush_interval - computed: true, optional: false, required: false
  public get sampleFlushInterval() {
    return this.getStringAttribute('sample_flush_interval');
  }

  // schema_entry_dn - computed: true, optional: false, required: false
  public get schemaEntryDn() {
    return cdktf.Fn.tolist(this.getListAttribute('schema_entry_dn'));
  }

  // set_degraded_alert_for_untrusted_index - computed: true, optional: false, required: false
  public get setDegradedAlertForUntrustedIndex() {
    return this.getBooleanAttribute('set_degraded_alert_for_untrusted_index');
  }

  // set_degraded_alert_when_disabled - computed: true, optional: false, required: false
  public get setDegradedAlertWhenDisabled() {
    return this.getBooleanAttribute('set_degraded_alert_when_disabled');
  }

  // show_all_attributes - computed: true, optional: false, required: false
  public get showAllAttributes() {
    return this.getBooleanAttribute('show_all_attributes');
  }

  // simple_paged_results_id_set_cache_duration - computed: true, optional: false, required: false
  public get simplePagedResultsIdSetCacheDuration() {
    return this.getStringAttribute('simple_paged_results_id_set_cache_duration');
  }

  // single_writer_lock_behavior - computed: true, optional: false, required: false
  public get singleWriterLockBehavior() {
    return this.getStringAttribute('single_writer_lock_behavior');
  }

  // soft_delete_entry_included_operation - computed: true, optional: false, required: false
  public get softDeleteEntryIncludedOperation() {
    return cdktf.Fn.tolist(this.getListAttribute('soft_delete_entry_included_operation'));
  }

  // storage_dir - computed: true, optional: false, required: false
  public get storageDir() {
    return this.getStringAttribute('storage_dir');
  }

  // subtree_delete_size_limit - computed: true, optional: false, required: false
  public get subtreeDeleteSizeLimit() {
    return this.getNumberAttribute('subtree_delete_size_limit');
  }

  // subtree_modify_dn_size_limit - computed: true, optional: false, required: false
  public get subtreeModifyDnSizeLimit() {
    return this.getNumberAttribute('subtree_modify_dn_size_limit');
  }

  // system_index_to_prime - computed: true, optional: false, required: false
  public get systemIndexToPrime() {
    return cdktf.Fn.tolist(this.getListAttribute('system_index_to_prime'));
  }

  // system_index_to_prime_internal_nodes_only - computed: true, optional: false, required: false
  public get systemIndexToPrimeInternalNodesOnly() {
    return cdktf.Fn.tolist(this.getListAttribute('system_index_to_prime_internal_nodes_only'));
  }

  // target_database_size - computed: true, optional: false, required: false
  public get targetDatabaseSize() {
    return this.getStringAttribute('target_database_size');
  }

  // task_backing_file - computed: true, optional: false, required: false
  public get taskBackingFile() {
    return this.getStringAttribute('task_backing_file');
  }

  // task_retention_time - computed: true, optional: false, required: false
  public get taskRetentionTime() {
    return this.getStringAttribute('task_retention_time');
  }

  // trust_store_file - computed: true, optional: false, required: false
  public get trustStoreFile() {
    return this.getStringAttribute('trust_store_file');
  }

  // trust_store_pin - computed: true, optional: false, required: false
  public get trustStorePin() {
    return this.getStringAttribute('trust_store_pin');
  }

  // trust_store_pin_file - computed: true, optional: false, required: false
  public get trustStorePinFile() {
    return this.getStringAttribute('trust_store_pin_file');
  }

  // trust_store_pin_passphrase_provider - computed: true, optional: false, required: false
  public get trustStorePinPassphraseProvider() {
    return this.getStringAttribute('trust_store_pin_passphrase_provider');
  }

  // trust_store_type - computed: true, optional: false, required: false
  public get trustStoreType() {
    return this.getStringAttribute('trust_store_type');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // uncached_attribute_criteria - computed: true, optional: false, required: false
  public get uncachedAttributeCriteria() {
    return this.getStringAttribute('uncached_attribute_criteria');
  }

  // uncached_entry_criteria - computed: true, optional: false, required: false
  public get uncachedEntryCriteria() {
    return this.getStringAttribute('uncached_entry_criteria');
  }

  // uncached_id2entry_cache_mode - computed: true, optional: false, required: false
  public get uncachedId2EntryCacheMode() {
    return this.getStringAttribute('uncached_id2entry_cache_mode');
  }

  // use_reversible_form - computed: true, optional: false, required: false
  public get useReversibleForm() {
    return this.getBooleanAttribute('use_reversible_form');
  }

  // writability_mode - computed: true, optional: false, required: false
  public get writabilityMode() {
    return this.getStringAttribute('writability_mode');
  }

  // write_lastmod_attributes - computed: true, optional: false, required: false
  public get writeLastmodAttributes() {
    return this.getBooleanAttribute('write_lastmod_attributes');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backend_id: cdktf.stringToTerraform(this._backendId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      backend_id: {
        value: cdktf.stringToHclTerraform(this._backendId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
