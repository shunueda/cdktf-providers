// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/backend
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BackendConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies a name to identify the associated backend.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/backend#backend_id Backend#backend_id}
  */
  readonly backendId: string;
  /**
  * Indicates whether to attempt to perform the prime using a background thread if possible. If background priming is enabled, then the Directory Server may be allowed to accept client connections and process requests while the prime is in progress.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/backend#background_prime Backend#background_prime}
  */
  readonly backgroundPrime?: boolean | cdktf.IResolvable;
  /**
  * Specifies the base DN(s) for the data that the backend handles.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/backend#base_dn Backend#base_dn}
  */
  readonly baseDn?: string[];
  /**
  * Provides a DN of an entry that may be the parent for a large number of entries in the backend. This may be used to help increase the space efficiency when encoding entries for storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/backend#compact_common_parent_dn Backend#compact_common_parent_dn}
  */
  readonly compactCommonParentDn?: string[];
  /**
  * Specifies the maximum number of entries that are allowed to match a given composite index key before that particular composite index key is no longer maintained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/backend#composite_index_entry_limit Backend#composite_index_entry_limit}
  */
  readonly compositeIndexEntryLimit?: number;
  /**
  * Indicates whether the backend should attempt to compress entries before storing them in the database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/backend#compress_entries Backend#compress_entries}
  */
  readonly compressEntries?: boolean | cdktf.IResolvable;
  /**
  * Specifies the interval to use when performing background synchronous writes in the database environment in order to smooth overall write performance and increase data durability. A value of "0 s" will disable background synchronous writes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/backend#db_background_sync_interval Backend#db_background_sync_interval}
  */
  readonly dbBackgroundSyncInterval?: string;
  /**
  * When the `type` attribute is set to:
  *   - `changelog`: Specifies the percentage of JVM memory to allocate to the changelog database cache.
  *   - `local-db`: Specifies the percentage of JVM memory to allocate to the database cache.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/backend#db_cache_percent Backend#db_cache_percent}
  */
  readonly dbCachePercent?: number;
  /**
  * Specifies the maximum length of time that should pass between checkpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/backend#db_checkpointer_wakeup_interval Backend#db_checkpointer_wakeup_interval}
  */
  readonly dbCheckpointerWakeupInterval?: string;
  /**
  * Specifies the minimum percentage of "live" data that the database cleaner attempts to keep in database log files.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/backend#db_cleaner_min_utilization Backend#db_cleaner_min_utilization}
  */
  readonly dbCleanerMinUtilization?: number;
  /**
  * Specifies the path to the filesystem directory that is used to hold the Berkeley DB Java Edition database files containing the data for this backend. The files for this backend are stored in a sub-directory named after the backend-id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/backend#db_directory Backend#db_directory}
  */
  readonly dbDirectory?: string;
  /**
  * When the `type` attribute is set to:
  *   - `changelog`: Specifies the permissions that should be applied to the directory containing the backend database files and to directories and files created during backup of the backend.
  *   - `local-db`: Specifies the permissions that should be applied to the directory containing the backend database files and to directories and files created during backup or LDIF export of the backend.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/backend#db_directory_permissions Backend#db_directory_permissions}
  */
  readonly dbDirectoryPermissions?: string;
  /**
  * Specifies the percentage over the configured maximum that the database cache is allowed to grow. It is recommended to set this value slightly above zero when the database is too large to fully cache in memory. In this case, a dedicated background evictor thread is used to perform evictions once the cache fills up reducing the possibility that server threads are blocked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/backend#db_evictor_critical_percentage Backend#db_evictor_critical_percentage}
  */
  readonly dbEvictorCriticalPercentage?: number;
  /**
  * The percentage of JVM memory to allocate to the database cache during import operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/backend#db_import_cache_percent Backend#db_import_cache_percent}
  */
  readonly dbImportCachePercent?: number;
  /**
  * Specifies the maximum size for a database log file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/backend#db_log_file_max Backend#db_log_file_max}
  */
  readonly dbLogFileMax?: string;
  /**
  * Specifies the log level that should be used by the database when it is writing information into the je.info file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/backend#db_logging_level Backend#db_logging_level}
  */
  readonly dbLoggingLevel?: string;
  /**
  * Specifies the number of threads that the backend should maintain to keep the database log files at or near the desired utilization. A value of zero indicates that the number of cleaner threads should be automatically configured based on the number of available CPUs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/backend#db_num_cleaner_threads Backend#db_num_cleaner_threads}
  */
  readonly dbNumCleanerThreads?: number;
  /**
  * Indicates whether the database should synchronously flush data as it is written to disk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/backend#db_txn_write_no_sync Backend#db_txn_write_no_sync}
  */
  readonly dbTxnWriteNoSync?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether to use thread-local database handles to reduce contention in the backend.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/backend#db_use_thread_local_handles Backend#db_use_thread_local_handles}
  */
  readonly dbUseThreadLocalHandles?: boolean | cdktf.IResolvable;
  /**
  * Specifies the number of times that the server should retry an attempted operation in the backend if a deadlock results from two concurrent requests that interfere with each other in a conflicting manner.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/backend#deadlock_retry_limit Backend#deadlock_retry_limit}
  */
  readonly deadlockRetryLimit?: number;
  /**
  * Specifies the cache mode that should be used for any database for which the cache mode is not explicitly specified. This includes the id2entry database, which stores encoded entries, and all attribute indexes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/backend#default_cache_mode Backend#default_cache_mode}
  */
  readonly defaultCacheMode?: string;
  /**
  * A description for this Backend
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/backend#description Backend#description}
  */
  readonly description?: string;
  /**
  * Specifies the cache mode that should be used when accessing the records in the dn2id database, which provides a mapping between normalized entry DNs and the corresponding entry IDs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/backend#dn2id_cache_mode Backend#dn2id_cache_mode}
  */
  readonly dn2IdCacheMode?: string;
  /**
  * Specifies the cache mode that should be used when accessing the records in the dn2uri database, which provides a mapping between a normalized entry DN and a set of referral URLs contained in the associated smart referral entry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/backend#dn2uri_cache_mode Backend#dn2uri_cache_mode}
  */
  readonly dn2UriCacheMode?: string;
  /**
  * Indicates whether the backend is enabled in the server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/backend#enabled Backend#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Specifies the number of threads to use for concurrently retrieving and encoding entries during an LDIF export.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/backend#export_thread_count Backend#export_thread_count}
  */
  readonly exportThreadCount?: number;
  /**
  * Specifies the default behavior that should be exhibited by external transactions (e.g., an LDAP transaction or an atomic multi-update operation) with regard to acquiring an exclusive lock in this backend.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/backend#external_txn_default_backend_lock_behavior Backend#external_txn_default_backend_lock_behavior}
  */
  readonly externalTxnDefaultBackendLockBehavior?: string;
  /**
  * Indicates whether to calculate and store a message digest of the entry contents along with the entry data, in order to provide a means of verifying the integrity of the entry data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/backend#hash_entries Backend#hash_entries}
  */
  readonly hashEntries?: boolean | cdktf.IResolvable;
  /**
  * Specifies the cache mode that should be used when accessing the records in the id2children database, which provides a mapping between the entry ID of a particular entry and the entry IDs of all of its immediate children. This index may be used when performing searches with a single-level scope if the search filter cannot be resolved to a small enough candidate list. The size of this database directly depends on the number of entries that have children.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/backend#id2children_cache_mode Backend#id2children_cache_mode}
  */
  readonly id2ChildrenCacheMode?: string;
  /**
  * Specifies the maximum number of entry IDs to maintain for each entry in the id2children system index (which keeps track of the immediate children for an entry, to assist in otherwise unindexed searches with a single-level scope). A value of 0 means there is no limit, however this could have a big impact on database size on disk and on server performance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/backend#id2children_index_entry_limit Backend#id2children_index_entry_limit}
  */
  readonly id2ChildrenIndexEntryLimit?: number;
  /**
  * Specifies the cache mode that should be used when accessing the records in the id2entry database, which provides a mapping between entry IDs and entry contents. Consider configuring uncached entries or uncached attributes in lieu of changing from the "cache-keys-and-values" default value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/backend#id2entry_cache_mode Backend#id2entry_cache_mode}
  */
  readonly id2EntryCacheMode?: string;
  /**
  * Specifies the cache mode that should be used when accessing the records in the id2subtree database, which provides a mapping between the entry ID of a particular entry and the entry IDs of all of its children to any depth. This index may be used when performing searches with a whole-subtree or subordinate-subtree scope if the search filter cannot be resolved to a small enough candidate list. The size of this database directly depends on the number of entries that have children.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/backend#id2subtree_cache_mode Backend#id2subtree_cache_mode}
  */
  readonly id2SubtreeCacheMode?: string;
  /**
  * Specifies the maximum number of entry IDs to maintain for each entry in the id2subtree system index (which keeps track of all descendants below an entry, to assist in otherwise unindexed searches with a whole-subtree or subordinate subtree scope). A value of 0 means there is no limit, however this could have a big impact on database size on disk and on server performance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/backend#id2subtree_index_entry_limit Backend#id2subtree_index_entry_limit}
  */
  readonly id2SubtreeIndexEntryLimit?: number;
  /**
  * Specifies the location of the directory that is used to hold temporary information during the index post-processing phase of an LDIF import.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/backend#import_temp_directory Backend#import_temp_directory}
  */
  readonly importTempDirectory?: string;
  /**
  * Specifies the number of threads to use for concurrent processing during an LDIF import.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/backend#import_thread_count Backend#import_thread_count}
  */
  readonly importThreadCount?: number;
  /**
  * Specifies the maximum number of entries that are allowed to match a given index key before that particular index key is no longer maintained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/backend#index_entry_limit Backend#index_entry_limit}
  */
  readonly indexEntryLimit?: number;
  /**
  * When the `type` attribute is set to:
  *   - `ldif`: Indicates whether the backend should be considered a private backend, which indicates that it is used for storing operational data rather than user-defined information.
  *   - `local-db`: Indicates whether this backend should be considered a private backend in the server. Private backends are meant for storing server-internal information and should not be used for user or application data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/backend#is_private_backend Backend#is_private_backend}
  */
  readonly isPrivateBackend?: boolean | cdktf.IResolvable;
  /**
  * When the `type` attribute is set to:
  *   - `changelog`: Specifies the database and environment properties for the Berkeley DB Java Edition database for this changelog backend.
  *   - `local-db`: Specifies the database and environment properties for the Berkeley DB Java Edition database serving the data for this backend.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/backend#je_property Backend#je_property}
  */
  readonly jeProperty?: string[];
  /**
  * Specifies a notification manager for changes resulting from operations processed through this Backend
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/backend#notification_manager Backend#notification_manager}
  */
  readonly notificationManager?: string;
  /**
  * Specifies the number of recent LDAP entry changes per replica for which the backend keeps a record to allow replication to recover in the event that the server is abruptly terminated. Increasing this value can lead to an increased peak server modification rate as well as increased replication throughput.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/backend#num_recent_changes Backend#num_recent_changes}
  */
  readonly numRecentChanges?: number;
  /**
  * Specifies a timeout duration which will be used for opening the database environment by an offline process, such as export-ldif.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/backend#offline_process_database_open_timeout Backend#offline_process_database_open_timeout}
  */
  readonly offlineProcessDatabaseOpenTimeout?: string;
  /**
  * Indicates whether to prime all indexes associated with this backend, or to only prime the specified set of indexes (as configured with the system-index-to-prime property for the system indexes, and the prime-index property in the attribute index definition for attribute indexes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/backend#prime_all_indexes Backend#prime_all_indexes}
  */
  readonly primeAllIndexes?: boolean | cdktf.IResolvable;
  /**
  * Specifies the method that should be used to prime caches with data for this backend.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/backend#prime_method Backend#prime_method}
  */
  readonly primeMethod?: string[];
  /**
  * Specifies the number of threads to use when priming. At present, this applies only to the preload and cursor-across-indexes prime methods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/backend#prime_thread_count Backend#prime_thread_count}
  */
  readonly primeThreadCount?: number;
  /**
  * Specifies the maximum length of time that the backend prime should be allowed to run. A duration of zero seconds indicates that there should not be a time limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/backend#prime_time_limit Backend#prime_time_limit}
  */
  readonly primeTimeLimit?: string;
  /**
  * Determines whether the Directory Server should continue filter processing for LDAP search operations in this Local DB Backend that includes a search filter with an attribute that is not defined in the schema. This will only apply if check-schema is enabled in the global configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/backend#process_filters_with_undefined_attribute_types Backend#process_filters_with_undefined_attribute_types}
  */
  readonly processFiltersWithUndefinedAttributeTypes?: boolean | cdktf.IResolvable;
  /**
  * Determines whether the Directory Server returns UNAVAILABLE for any LDAP search operation in this Local DB Backend that would use an index whose contents cannot be trusted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/backend#return_unavailable_for_untrusted_index Backend#return_unavailable_for_untrusted_index}
  */
  readonly returnUnavailableForUntrustedIndex?: boolean | cdktf.IResolvable;
  /**
  * Determines whether any LDAP operation that would use this Backend is to return UNAVAILABLE when this Backend is disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/backend#return_unavailable_when_disabled Backend#return_unavailable_when_disabled}
  */
  readonly returnUnavailableWhenDisabled?: boolean | cdktf.IResolvable;
  /**
  * Determines whether the Directory Server enters a DEGRADED state when this Local DB Backend has an index whose contents cannot be trusted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/backend#set_degraded_alert_for_untrusted_index Backend#set_degraded_alert_for_untrusted_index}
  */
  readonly setDegradedAlertForUntrustedIndex?: boolean | cdktf.IResolvable;
  /**
  * Determines whether the Directory Server enters a DEGRADED state (and sends a corresponding alert) when this Backend is disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/backend#set_degraded_alert_when_disabled Backend#set_degraded_alert_when_disabled}
  */
  readonly setDegradedAlertWhenDisabled?: boolean | cdktf.IResolvable;
  /**
  * Supported in PingDirectory product version 10.1.0.0+. Specifies the length of time to cache the candidate ID set used for indexed search operations including the simple paged results control.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/backend#simple_paged_results_id_set_cache_duration Backend#simple_paged_results_id_set_cache_duration}
  */
  readonly simplePagedResultsIdSetCacheDuration?: string;
  /**
  * Specifies the condition under which to acquire a single-writer lock to ensure that the associated operation will be the only write in progress at the time the lock is held. The single-writer lock can help avoid problems that result from database lock conflicts that arise between two write operations being processed at the same time in the same backend. This will not have any effect on the read operations processed while the write is in progress.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/backend#single_writer_lock_behavior Backend#single_writer_lock_behavior}
  */
  readonly singleWriterLockBehavior?: string;
  /**
  * Specifies the maximum number of entries that may be deleted from the backend when using the subtree delete control.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/backend#subtree_delete_size_limit Backend#subtree_delete_size_limit}
  */
  readonly subtreeDeleteSizeLimit?: number;
  /**
  * Supported in PingDirectory product version 10.1.0.0+. Specifies the maximum number of entries that may exist below an entry targeted by a modify DN operation. This includes both direct and indirect subordinates (to any depth), although the entry at the top of the subtree (the one directly targeted by the modify DN operation) is not included in this count.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/backend#subtree_modify_dn_size_limit Backend#subtree_modify_dn_size_limit}
  */
  readonly subtreeModifyDnSizeLimit?: number;
  /**
  * Specifies which system index(es) should be primed when the backend is initialized.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/backend#system_index_to_prime Backend#system_index_to_prime}
  */
  readonly systemIndexToPrime?: string[];
  /**
  * Specifies the system index(es) for which internal database nodes only (i.e., the database keys but not values) should be primed when the backend is initialized.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/backend#system_index_to_prime_internal_nodes_only Backend#system_index_to_prime_internal_nodes_only}
  */
  readonly systemIndexToPrimeInternalNodesOnly?: string[];
  /**
  * The type of Backend resource. Options are ['schema', 'backup', 'encryption-settings', 'ldif', 'trust-store', 'custom', 'changelog', 'monitor', 'local-db', 'config-file-handler', 'task', 'alert', 'alarm', 'metrics']
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/backend#type Backend#type}
  */
  readonly type: string;
  /**
  * The criteria that will be used to identify attributes that should be written into the uncached-id2entry database rather than the id2entry database. This will only be used for entries in which the associated uncached-entry-criteria does not indicate that the entire entry should be uncached.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/backend#uncached_attribute_criteria Backend#uncached_attribute_criteria}
  */
  readonly uncachedAttributeCriteria?: string;
  /**
  * The criteria that will be used to identify entries that should be written into the uncached-id2entry database rather than the id2entry database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/backend#uncached_entry_criteria Backend#uncached_entry_criteria}
  */
  readonly uncachedEntryCriteria?: string;
  /**
  * Specifies the cache mode that should be used when accessing the records in the uncached-id2entry database, which provides a way to store complete or partial encoded entries with a different (and presumably less memory-intensive) cache mode than records written to id2entry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/backend#uncached_id2entry_cache_mode Backend#uncached_id2entry_cache_mode}
  */
  readonly uncachedId2EntryCacheMode?: string;
  /**
  * Specifies the behavior that the backend should use when processing write operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/backend#writability_mode Backend#writability_mode}
  */
  readonly writabilityMode?: string;
}
export interface BackendRequiredActions {
}

export function backendRequiredActionsToTerraform(struct?: BackendRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function backendRequiredActionsToHclTerraform(struct?: BackendRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class BackendRequiredActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BackendRequiredActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackendRequiredActions | undefined) {
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

export class BackendRequiredActionsList extends cdktf.ComplexList {

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
  public get(index: number): BackendRequiredActionsOutputReference {
    return new BackendRequiredActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/backend pingdirectory_backend}
*/
export class Backend extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_backend";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Backend resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Backend to import
  * @param importFromId The id of the existing Backend that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/backend#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Backend to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_backend", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/backend pingdirectory_backend} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BackendConfig
  */
  public constructor(scope: Construct, id: string, config: BackendConfig) {
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
    this._backgroundPrime = config.backgroundPrime;
    this._baseDn = config.baseDn;
    this._compactCommonParentDn = config.compactCommonParentDn;
    this._compositeIndexEntryLimit = config.compositeIndexEntryLimit;
    this._compressEntries = config.compressEntries;
    this._dbBackgroundSyncInterval = config.dbBackgroundSyncInterval;
    this._dbCachePercent = config.dbCachePercent;
    this._dbCheckpointerWakeupInterval = config.dbCheckpointerWakeupInterval;
    this._dbCleanerMinUtilization = config.dbCleanerMinUtilization;
    this._dbDirectory = config.dbDirectory;
    this._dbDirectoryPermissions = config.dbDirectoryPermissions;
    this._dbEvictorCriticalPercentage = config.dbEvictorCriticalPercentage;
    this._dbImportCachePercent = config.dbImportCachePercent;
    this._dbLogFileMax = config.dbLogFileMax;
    this._dbLoggingLevel = config.dbLoggingLevel;
    this._dbNumCleanerThreads = config.dbNumCleanerThreads;
    this._dbTxnWriteNoSync = config.dbTxnWriteNoSync;
    this._dbUseThreadLocalHandles = config.dbUseThreadLocalHandles;
    this._deadlockRetryLimit = config.deadlockRetryLimit;
    this._defaultCacheMode = config.defaultCacheMode;
    this._description = config.description;
    this._dn2IdCacheMode = config.dn2IdCacheMode;
    this._dn2UriCacheMode = config.dn2UriCacheMode;
    this._enabled = config.enabled;
    this._exportThreadCount = config.exportThreadCount;
    this._externalTxnDefaultBackendLockBehavior = config.externalTxnDefaultBackendLockBehavior;
    this._hashEntries = config.hashEntries;
    this._id2ChildrenCacheMode = config.id2ChildrenCacheMode;
    this._id2ChildrenIndexEntryLimit = config.id2ChildrenIndexEntryLimit;
    this._id2EntryCacheMode = config.id2EntryCacheMode;
    this._id2SubtreeCacheMode = config.id2SubtreeCacheMode;
    this._id2SubtreeIndexEntryLimit = config.id2SubtreeIndexEntryLimit;
    this._importTempDirectory = config.importTempDirectory;
    this._importThreadCount = config.importThreadCount;
    this._indexEntryLimit = config.indexEntryLimit;
    this._isPrivateBackend = config.isPrivateBackend;
    this._jeProperty = config.jeProperty;
    this._notificationManager = config.notificationManager;
    this._numRecentChanges = config.numRecentChanges;
    this._offlineProcessDatabaseOpenTimeout = config.offlineProcessDatabaseOpenTimeout;
    this._primeAllIndexes = config.primeAllIndexes;
    this._primeMethod = config.primeMethod;
    this._primeThreadCount = config.primeThreadCount;
    this._primeTimeLimit = config.primeTimeLimit;
    this._processFiltersWithUndefinedAttributeTypes = config.processFiltersWithUndefinedAttributeTypes;
    this._returnUnavailableForUntrustedIndex = config.returnUnavailableForUntrustedIndex;
    this._returnUnavailableWhenDisabled = config.returnUnavailableWhenDisabled;
    this._setDegradedAlertForUntrustedIndex = config.setDegradedAlertForUntrustedIndex;
    this._setDegradedAlertWhenDisabled = config.setDegradedAlertWhenDisabled;
    this._simplePagedResultsIdSetCacheDuration = config.simplePagedResultsIdSetCacheDuration;
    this._singleWriterLockBehavior = config.singleWriterLockBehavior;
    this._subtreeDeleteSizeLimit = config.subtreeDeleteSizeLimit;
    this._subtreeModifyDnSizeLimit = config.subtreeModifyDnSizeLimit;
    this._systemIndexToPrime = config.systemIndexToPrime;
    this._systemIndexToPrimeInternalNodesOnly = config.systemIndexToPrimeInternalNodesOnly;
    this._type = config.type;
    this._uncachedAttributeCriteria = config.uncachedAttributeCriteria;
    this._uncachedEntryCriteria = config.uncachedEntryCriteria;
    this._uncachedId2EntryCacheMode = config.uncachedId2EntryCacheMode;
    this._writabilityMode = config.writabilityMode;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // background_prime - computed: true, optional: true, required: false
  private _backgroundPrime?: boolean | cdktf.IResolvable; 
  public get backgroundPrime() {
    return this.getBooleanAttribute('background_prime');
  }
  public set backgroundPrime(value: boolean | cdktf.IResolvable) {
    this._backgroundPrime = value;
  }
  public resetBackgroundPrime() {
    this._backgroundPrime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backgroundPrimeInput() {
    return this._backgroundPrime;
  }

  // base_dn - computed: true, optional: true, required: false
  private _baseDn?: string[]; 
  public get baseDn() {
    return cdktf.Fn.tolist(this.getListAttribute('base_dn'));
  }
  public set baseDn(value: string[]) {
    this._baseDn = value;
  }
  public resetBaseDn() {
    this._baseDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseDnInput() {
    return this._baseDn;
  }

  // compact_common_parent_dn - computed: true, optional: true, required: false
  private _compactCommonParentDn?: string[]; 
  public get compactCommonParentDn() {
    return cdktf.Fn.tolist(this.getListAttribute('compact_common_parent_dn'));
  }
  public set compactCommonParentDn(value: string[]) {
    this._compactCommonParentDn = value;
  }
  public resetCompactCommonParentDn() {
    this._compactCommonParentDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compactCommonParentDnInput() {
    return this._compactCommonParentDn;
  }

  // composite_index_entry_limit - computed: true, optional: true, required: false
  private _compositeIndexEntryLimit?: number; 
  public get compositeIndexEntryLimit() {
    return this.getNumberAttribute('composite_index_entry_limit');
  }
  public set compositeIndexEntryLimit(value: number) {
    this._compositeIndexEntryLimit = value;
  }
  public resetCompositeIndexEntryLimit() {
    this._compositeIndexEntryLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compositeIndexEntryLimitInput() {
    return this._compositeIndexEntryLimit;
  }

  // compress_entries - computed: true, optional: true, required: false
  private _compressEntries?: boolean | cdktf.IResolvable; 
  public get compressEntries() {
    return this.getBooleanAttribute('compress_entries');
  }
  public set compressEntries(value: boolean | cdktf.IResolvable) {
    this._compressEntries = value;
  }
  public resetCompressEntries() {
    this._compressEntries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressEntriesInput() {
    return this._compressEntries;
  }

  // db_background_sync_interval - computed: true, optional: true, required: false
  private _dbBackgroundSyncInterval?: string; 
  public get dbBackgroundSyncInterval() {
    return this.getStringAttribute('db_background_sync_interval');
  }
  public set dbBackgroundSyncInterval(value: string) {
    this._dbBackgroundSyncInterval = value;
  }
  public resetDbBackgroundSyncInterval() {
    this._dbBackgroundSyncInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbBackgroundSyncIntervalInput() {
    return this._dbBackgroundSyncInterval;
  }

  // db_cache_percent - computed: true, optional: true, required: false
  private _dbCachePercent?: number; 
  public get dbCachePercent() {
    return this.getNumberAttribute('db_cache_percent');
  }
  public set dbCachePercent(value: number) {
    this._dbCachePercent = value;
  }
  public resetDbCachePercent() {
    this._dbCachePercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbCachePercentInput() {
    return this._dbCachePercent;
  }

  // db_checkpointer_wakeup_interval - computed: true, optional: true, required: false
  private _dbCheckpointerWakeupInterval?: string; 
  public get dbCheckpointerWakeupInterval() {
    return this.getStringAttribute('db_checkpointer_wakeup_interval');
  }
  public set dbCheckpointerWakeupInterval(value: string) {
    this._dbCheckpointerWakeupInterval = value;
  }
  public resetDbCheckpointerWakeupInterval() {
    this._dbCheckpointerWakeupInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbCheckpointerWakeupIntervalInput() {
    return this._dbCheckpointerWakeupInterval;
  }

  // db_cleaner_min_utilization - computed: true, optional: true, required: false
  private _dbCleanerMinUtilization?: number; 
  public get dbCleanerMinUtilization() {
    return this.getNumberAttribute('db_cleaner_min_utilization');
  }
  public set dbCleanerMinUtilization(value: number) {
    this._dbCleanerMinUtilization = value;
  }
  public resetDbCleanerMinUtilization() {
    this._dbCleanerMinUtilization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbCleanerMinUtilizationInput() {
    return this._dbCleanerMinUtilization;
  }

  // db_directory - computed: true, optional: true, required: false
  private _dbDirectory?: string; 
  public get dbDirectory() {
    return this.getStringAttribute('db_directory');
  }
  public set dbDirectory(value: string) {
    this._dbDirectory = value;
  }
  public resetDbDirectory() {
    this._dbDirectory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbDirectoryInput() {
    return this._dbDirectory;
  }

  // db_directory_permissions - computed: true, optional: true, required: false
  private _dbDirectoryPermissions?: string; 
  public get dbDirectoryPermissions() {
    return this.getStringAttribute('db_directory_permissions');
  }
  public set dbDirectoryPermissions(value: string) {
    this._dbDirectoryPermissions = value;
  }
  public resetDbDirectoryPermissions() {
    this._dbDirectoryPermissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbDirectoryPermissionsInput() {
    return this._dbDirectoryPermissions;
  }

  // db_evictor_critical_percentage - computed: true, optional: true, required: false
  private _dbEvictorCriticalPercentage?: number; 
  public get dbEvictorCriticalPercentage() {
    return this.getNumberAttribute('db_evictor_critical_percentage');
  }
  public set dbEvictorCriticalPercentage(value: number) {
    this._dbEvictorCriticalPercentage = value;
  }
  public resetDbEvictorCriticalPercentage() {
    this._dbEvictorCriticalPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbEvictorCriticalPercentageInput() {
    return this._dbEvictorCriticalPercentage;
  }

  // db_import_cache_percent - computed: true, optional: true, required: false
  private _dbImportCachePercent?: number; 
  public get dbImportCachePercent() {
    return this.getNumberAttribute('db_import_cache_percent');
  }
  public set dbImportCachePercent(value: number) {
    this._dbImportCachePercent = value;
  }
  public resetDbImportCachePercent() {
    this._dbImportCachePercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbImportCachePercentInput() {
    return this._dbImportCachePercent;
  }

  // db_log_file_max - computed: true, optional: true, required: false
  private _dbLogFileMax?: string; 
  public get dbLogFileMax() {
    return this.getStringAttribute('db_log_file_max');
  }
  public set dbLogFileMax(value: string) {
    this._dbLogFileMax = value;
  }
  public resetDbLogFileMax() {
    this._dbLogFileMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbLogFileMaxInput() {
    return this._dbLogFileMax;
  }

  // db_logging_level - computed: true, optional: true, required: false
  private _dbLoggingLevel?: string; 
  public get dbLoggingLevel() {
    return this.getStringAttribute('db_logging_level');
  }
  public set dbLoggingLevel(value: string) {
    this._dbLoggingLevel = value;
  }
  public resetDbLoggingLevel() {
    this._dbLoggingLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbLoggingLevelInput() {
    return this._dbLoggingLevel;
  }

  // db_num_cleaner_threads - computed: true, optional: true, required: false
  private _dbNumCleanerThreads?: number; 
  public get dbNumCleanerThreads() {
    return this.getNumberAttribute('db_num_cleaner_threads');
  }
  public set dbNumCleanerThreads(value: number) {
    this._dbNumCleanerThreads = value;
  }
  public resetDbNumCleanerThreads() {
    this._dbNumCleanerThreads = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbNumCleanerThreadsInput() {
    return this._dbNumCleanerThreads;
  }

  // db_txn_write_no_sync - computed: true, optional: true, required: false
  private _dbTxnWriteNoSync?: boolean | cdktf.IResolvable; 
  public get dbTxnWriteNoSync() {
    return this.getBooleanAttribute('db_txn_write_no_sync');
  }
  public set dbTxnWriteNoSync(value: boolean | cdktf.IResolvable) {
    this._dbTxnWriteNoSync = value;
  }
  public resetDbTxnWriteNoSync() {
    this._dbTxnWriteNoSync = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbTxnWriteNoSyncInput() {
    return this._dbTxnWriteNoSync;
  }

  // db_use_thread_local_handles - computed: true, optional: true, required: false
  private _dbUseThreadLocalHandles?: boolean | cdktf.IResolvable; 
  public get dbUseThreadLocalHandles() {
    return this.getBooleanAttribute('db_use_thread_local_handles');
  }
  public set dbUseThreadLocalHandles(value: boolean | cdktf.IResolvable) {
    this._dbUseThreadLocalHandles = value;
  }
  public resetDbUseThreadLocalHandles() {
    this._dbUseThreadLocalHandles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbUseThreadLocalHandlesInput() {
    return this._dbUseThreadLocalHandles;
  }

  // deadlock_retry_limit - computed: true, optional: true, required: false
  private _deadlockRetryLimit?: number; 
  public get deadlockRetryLimit() {
    return this.getNumberAttribute('deadlock_retry_limit');
  }
  public set deadlockRetryLimit(value: number) {
    this._deadlockRetryLimit = value;
  }
  public resetDeadlockRetryLimit() {
    this._deadlockRetryLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deadlockRetryLimitInput() {
    return this._deadlockRetryLimit;
  }

  // default_cache_mode - computed: true, optional: true, required: false
  private _defaultCacheMode?: string; 
  public get defaultCacheMode() {
    return this.getStringAttribute('default_cache_mode');
  }
  public set defaultCacheMode(value: string) {
    this._defaultCacheMode = value;
  }
  public resetDefaultCacheMode() {
    this._defaultCacheMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultCacheModeInput() {
    return this._defaultCacheMode;
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

  // dn2id_cache_mode - computed: false, optional: true, required: false
  private _dn2IdCacheMode?: string; 
  public get dn2IdCacheMode() {
    return this.getStringAttribute('dn2id_cache_mode');
  }
  public set dn2IdCacheMode(value: string) {
    this._dn2IdCacheMode = value;
  }
  public resetDn2IdCacheMode() {
    this._dn2IdCacheMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dn2IdCacheModeInput() {
    return this._dn2IdCacheMode;
  }

  // dn2uri_cache_mode - computed: false, optional: true, required: false
  private _dn2UriCacheMode?: string; 
  public get dn2UriCacheMode() {
    return this.getStringAttribute('dn2uri_cache_mode');
  }
  public set dn2UriCacheMode(value: string) {
    this._dn2UriCacheMode = value;
  }
  public resetDn2UriCacheMode() {
    this._dn2UriCacheMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dn2UriCacheModeInput() {
    return this._dn2UriCacheMode;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // export_thread_count - computed: true, optional: true, required: false
  private _exportThreadCount?: number; 
  public get exportThreadCount() {
    return this.getNumberAttribute('export_thread_count');
  }
  public set exportThreadCount(value: number) {
    this._exportThreadCount = value;
  }
  public resetExportThreadCount() {
    this._exportThreadCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportThreadCountInput() {
    return this._exportThreadCount;
  }

  // external_txn_default_backend_lock_behavior - computed: true, optional: true, required: false
  private _externalTxnDefaultBackendLockBehavior?: string; 
  public get externalTxnDefaultBackendLockBehavior() {
    return this.getStringAttribute('external_txn_default_backend_lock_behavior');
  }
  public set externalTxnDefaultBackendLockBehavior(value: string) {
    this._externalTxnDefaultBackendLockBehavior = value;
  }
  public resetExternalTxnDefaultBackendLockBehavior() {
    this._externalTxnDefaultBackendLockBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalTxnDefaultBackendLockBehaviorInput() {
    return this._externalTxnDefaultBackendLockBehavior;
  }

  // hash_entries - computed: true, optional: true, required: false
  private _hashEntries?: boolean | cdktf.IResolvable; 
  public get hashEntries() {
    return this.getBooleanAttribute('hash_entries');
  }
  public set hashEntries(value: boolean | cdktf.IResolvable) {
    this._hashEntries = value;
  }
  public resetHashEntries() {
    this._hashEntries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashEntriesInput() {
    return this._hashEntries;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // id2children_cache_mode - computed: false, optional: true, required: false
  private _id2ChildrenCacheMode?: string; 
  public get id2ChildrenCacheMode() {
    return this.getStringAttribute('id2children_cache_mode');
  }
  public set id2ChildrenCacheMode(value: string) {
    this._id2ChildrenCacheMode = value;
  }
  public resetId2ChildrenCacheMode() {
    this._id2ChildrenCacheMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get id2ChildrenCacheModeInput() {
    return this._id2ChildrenCacheMode;
  }

  // id2children_index_entry_limit - computed: false, optional: true, required: false
  private _id2ChildrenIndexEntryLimit?: number; 
  public get id2ChildrenIndexEntryLimit() {
    return this.getNumberAttribute('id2children_index_entry_limit');
  }
  public set id2ChildrenIndexEntryLimit(value: number) {
    this._id2ChildrenIndexEntryLimit = value;
  }
  public resetId2ChildrenIndexEntryLimit() {
    this._id2ChildrenIndexEntryLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get id2ChildrenIndexEntryLimitInput() {
    return this._id2ChildrenIndexEntryLimit;
  }

  // id2entry_cache_mode - computed: false, optional: true, required: false
  private _id2EntryCacheMode?: string; 
  public get id2EntryCacheMode() {
    return this.getStringAttribute('id2entry_cache_mode');
  }
  public set id2EntryCacheMode(value: string) {
    this._id2EntryCacheMode = value;
  }
  public resetId2EntryCacheMode() {
    this._id2EntryCacheMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get id2EntryCacheModeInput() {
    return this._id2EntryCacheMode;
  }

  // id2subtree_cache_mode - computed: false, optional: true, required: false
  private _id2SubtreeCacheMode?: string; 
  public get id2SubtreeCacheMode() {
    return this.getStringAttribute('id2subtree_cache_mode');
  }
  public set id2SubtreeCacheMode(value: string) {
    this._id2SubtreeCacheMode = value;
  }
  public resetId2SubtreeCacheMode() {
    this._id2SubtreeCacheMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get id2SubtreeCacheModeInput() {
    return this._id2SubtreeCacheMode;
  }

  // id2subtree_index_entry_limit - computed: false, optional: true, required: false
  private _id2SubtreeIndexEntryLimit?: number; 
  public get id2SubtreeIndexEntryLimit() {
    return this.getNumberAttribute('id2subtree_index_entry_limit');
  }
  public set id2SubtreeIndexEntryLimit(value: number) {
    this._id2SubtreeIndexEntryLimit = value;
  }
  public resetId2SubtreeIndexEntryLimit() {
    this._id2SubtreeIndexEntryLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get id2SubtreeIndexEntryLimitInput() {
    return this._id2SubtreeIndexEntryLimit;
  }

  // import_temp_directory - computed: true, optional: true, required: false
  private _importTempDirectory?: string; 
  public get importTempDirectory() {
    return this.getStringAttribute('import_temp_directory');
  }
  public set importTempDirectory(value: string) {
    this._importTempDirectory = value;
  }
  public resetImportTempDirectory() {
    this._importTempDirectory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importTempDirectoryInput() {
    return this._importTempDirectory;
  }

  // import_thread_count - computed: true, optional: true, required: false
  private _importThreadCount?: number; 
  public get importThreadCount() {
    return this.getNumberAttribute('import_thread_count');
  }
  public set importThreadCount(value: number) {
    this._importThreadCount = value;
  }
  public resetImportThreadCount() {
    this._importThreadCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importThreadCountInput() {
    return this._importThreadCount;
  }

  // index_entry_limit - computed: true, optional: true, required: false
  private _indexEntryLimit?: number; 
  public get indexEntryLimit() {
    return this.getNumberAttribute('index_entry_limit');
  }
  public set indexEntryLimit(value: number) {
    this._indexEntryLimit = value;
  }
  public resetIndexEntryLimit() {
    this._indexEntryLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexEntryLimitInput() {
    return this._indexEntryLimit;
  }

  // is_private_backend - computed: true, optional: true, required: false
  private _isPrivateBackend?: boolean | cdktf.IResolvable; 
  public get isPrivateBackend() {
    return this.getBooleanAttribute('is_private_backend');
  }
  public set isPrivateBackend(value: boolean | cdktf.IResolvable) {
    this._isPrivateBackend = value;
  }
  public resetIsPrivateBackend() {
    this._isPrivateBackend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPrivateBackendInput() {
    return this._isPrivateBackend;
  }

  // je_property - computed: true, optional: true, required: false
  private _jeProperty?: string[]; 
  public get jeProperty() {
    return cdktf.Fn.tolist(this.getListAttribute('je_property'));
  }
  public set jeProperty(value: string[]) {
    this._jeProperty = value;
  }
  public resetJeProperty() {
    this._jeProperty = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jePropertyInput() {
    return this._jeProperty;
  }

  // notification_manager - computed: false, optional: true, required: false
  private _notificationManager?: string; 
  public get notificationManager() {
    return this.getStringAttribute('notification_manager');
  }
  public set notificationManager(value: string) {
    this._notificationManager = value;
  }
  public resetNotificationManager() {
    this._notificationManager = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationManagerInput() {
    return this._notificationManager;
  }

  // notifications - computed: true, optional: false, required: false
  public get notifications() {
    return cdktf.Fn.tolist(this.getListAttribute('notifications'));
  }

  // num_recent_changes - computed: true, optional: true, required: false
  private _numRecentChanges?: number; 
  public get numRecentChanges() {
    return this.getNumberAttribute('num_recent_changes');
  }
  public set numRecentChanges(value: number) {
    this._numRecentChanges = value;
  }
  public resetNumRecentChanges() {
    this._numRecentChanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numRecentChangesInput() {
    return this._numRecentChanges;
  }

  // offline_process_database_open_timeout - computed: true, optional: true, required: false
  private _offlineProcessDatabaseOpenTimeout?: string; 
  public get offlineProcessDatabaseOpenTimeout() {
    return this.getStringAttribute('offline_process_database_open_timeout');
  }
  public set offlineProcessDatabaseOpenTimeout(value: string) {
    this._offlineProcessDatabaseOpenTimeout = value;
  }
  public resetOfflineProcessDatabaseOpenTimeout() {
    this._offlineProcessDatabaseOpenTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offlineProcessDatabaseOpenTimeoutInput() {
    return this._offlineProcessDatabaseOpenTimeout;
  }

  // prime_all_indexes - computed: true, optional: true, required: false
  private _primeAllIndexes?: boolean | cdktf.IResolvable; 
  public get primeAllIndexes() {
    return this.getBooleanAttribute('prime_all_indexes');
  }
  public set primeAllIndexes(value: boolean | cdktf.IResolvable) {
    this._primeAllIndexes = value;
  }
  public resetPrimeAllIndexes() {
    this._primeAllIndexes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primeAllIndexesInput() {
    return this._primeAllIndexes;
  }

  // prime_method - computed: true, optional: true, required: false
  private _primeMethod?: string[]; 
  public get primeMethod() {
    return cdktf.Fn.tolist(this.getListAttribute('prime_method'));
  }
  public set primeMethod(value: string[]) {
    this._primeMethod = value;
  }
  public resetPrimeMethod() {
    this._primeMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primeMethodInput() {
    return this._primeMethod;
  }

  // prime_thread_count - computed: true, optional: true, required: false
  private _primeThreadCount?: number; 
  public get primeThreadCount() {
    return this.getNumberAttribute('prime_thread_count');
  }
  public set primeThreadCount(value: number) {
    this._primeThreadCount = value;
  }
  public resetPrimeThreadCount() {
    this._primeThreadCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primeThreadCountInput() {
    return this._primeThreadCount;
  }

  // prime_time_limit - computed: true, optional: true, required: false
  private _primeTimeLimit?: string; 
  public get primeTimeLimit() {
    return this.getStringAttribute('prime_time_limit');
  }
  public set primeTimeLimit(value: string) {
    this._primeTimeLimit = value;
  }
  public resetPrimeTimeLimit() {
    this._primeTimeLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primeTimeLimitInput() {
    return this._primeTimeLimit;
  }

  // process_filters_with_undefined_attribute_types - computed: true, optional: true, required: false
  private _processFiltersWithUndefinedAttributeTypes?: boolean | cdktf.IResolvable; 
  public get processFiltersWithUndefinedAttributeTypes() {
    return this.getBooleanAttribute('process_filters_with_undefined_attribute_types');
  }
  public set processFiltersWithUndefinedAttributeTypes(value: boolean | cdktf.IResolvable) {
    this._processFiltersWithUndefinedAttributeTypes = value;
  }
  public resetProcessFiltersWithUndefinedAttributeTypes() {
    this._processFiltersWithUndefinedAttributeTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processFiltersWithUndefinedAttributeTypesInput() {
    return this._processFiltersWithUndefinedAttributeTypes;
  }

  // required_actions - computed: true, optional: false, required: false
  private _requiredActions = new BackendRequiredActionsList(this, "required_actions", true);
  public get requiredActions() {
    return this._requiredActions;
  }

  // return_unavailable_for_untrusted_index - computed: true, optional: true, required: false
  private _returnUnavailableForUntrustedIndex?: boolean | cdktf.IResolvable; 
  public get returnUnavailableForUntrustedIndex() {
    return this.getBooleanAttribute('return_unavailable_for_untrusted_index');
  }
  public set returnUnavailableForUntrustedIndex(value: boolean | cdktf.IResolvable) {
    this._returnUnavailableForUntrustedIndex = value;
  }
  public resetReturnUnavailableForUntrustedIndex() {
    this._returnUnavailableForUntrustedIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get returnUnavailableForUntrustedIndexInput() {
    return this._returnUnavailableForUntrustedIndex;
  }

  // return_unavailable_when_disabled - computed: true, optional: true, required: false
  private _returnUnavailableWhenDisabled?: boolean | cdktf.IResolvable; 
  public get returnUnavailableWhenDisabled() {
    return this.getBooleanAttribute('return_unavailable_when_disabled');
  }
  public set returnUnavailableWhenDisabled(value: boolean | cdktf.IResolvable) {
    this._returnUnavailableWhenDisabled = value;
  }
  public resetReturnUnavailableWhenDisabled() {
    this._returnUnavailableWhenDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get returnUnavailableWhenDisabledInput() {
    return this._returnUnavailableWhenDisabled;
  }

  // set_degraded_alert_for_untrusted_index - computed: true, optional: true, required: false
  private _setDegradedAlertForUntrustedIndex?: boolean | cdktf.IResolvable; 
  public get setDegradedAlertForUntrustedIndex() {
    return this.getBooleanAttribute('set_degraded_alert_for_untrusted_index');
  }
  public set setDegradedAlertForUntrustedIndex(value: boolean | cdktf.IResolvable) {
    this._setDegradedAlertForUntrustedIndex = value;
  }
  public resetSetDegradedAlertForUntrustedIndex() {
    this._setDegradedAlertForUntrustedIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setDegradedAlertForUntrustedIndexInput() {
    return this._setDegradedAlertForUntrustedIndex;
  }

  // set_degraded_alert_when_disabled - computed: true, optional: true, required: false
  private _setDegradedAlertWhenDisabled?: boolean | cdktf.IResolvable; 
  public get setDegradedAlertWhenDisabled() {
    return this.getBooleanAttribute('set_degraded_alert_when_disabled');
  }
  public set setDegradedAlertWhenDisabled(value: boolean | cdktf.IResolvable) {
    this._setDegradedAlertWhenDisabled = value;
  }
  public resetSetDegradedAlertWhenDisabled() {
    this._setDegradedAlertWhenDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setDegradedAlertWhenDisabledInput() {
    return this._setDegradedAlertWhenDisabled;
  }

  // simple_paged_results_id_set_cache_duration - computed: true, optional: true, required: false
  private _simplePagedResultsIdSetCacheDuration?: string; 
  public get simplePagedResultsIdSetCacheDuration() {
    return this.getStringAttribute('simple_paged_results_id_set_cache_duration');
  }
  public set simplePagedResultsIdSetCacheDuration(value: string) {
    this._simplePagedResultsIdSetCacheDuration = value;
  }
  public resetSimplePagedResultsIdSetCacheDuration() {
    this._simplePagedResultsIdSetCacheDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get simplePagedResultsIdSetCacheDurationInput() {
    return this._simplePagedResultsIdSetCacheDuration;
  }

  // single_writer_lock_behavior - computed: true, optional: true, required: false
  private _singleWriterLockBehavior?: string; 
  public get singleWriterLockBehavior() {
    return this.getStringAttribute('single_writer_lock_behavior');
  }
  public set singleWriterLockBehavior(value: string) {
    this._singleWriterLockBehavior = value;
  }
  public resetSingleWriterLockBehavior() {
    this._singleWriterLockBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleWriterLockBehaviorInput() {
    return this._singleWriterLockBehavior;
  }

  // subtree_delete_size_limit - computed: true, optional: true, required: false
  private _subtreeDeleteSizeLimit?: number; 
  public get subtreeDeleteSizeLimit() {
    return this.getNumberAttribute('subtree_delete_size_limit');
  }
  public set subtreeDeleteSizeLimit(value: number) {
    this._subtreeDeleteSizeLimit = value;
  }
  public resetSubtreeDeleteSizeLimit() {
    this._subtreeDeleteSizeLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subtreeDeleteSizeLimitInput() {
    return this._subtreeDeleteSizeLimit;
  }

  // subtree_modify_dn_size_limit - computed: true, optional: true, required: false
  private _subtreeModifyDnSizeLimit?: number; 
  public get subtreeModifyDnSizeLimit() {
    return this.getNumberAttribute('subtree_modify_dn_size_limit');
  }
  public set subtreeModifyDnSizeLimit(value: number) {
    this._subtreeModifyDnSizeLimit = value;
  }
  public resetSubtreeModifyDnSizeLimit() {
    this._subtreeModifyDnSizeLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subtreeModifyDnSizeLimitInput() {
    return this._subtreeModifyDnSizeLimit;
  }

  // system_index_to_prime - computed: true, optional: true, required: false
  private _systemIndexToPrime?: string[]; 
  public get systemIndexToPrime() {
    return cdktf.Fn.tolist(this.getListAttribute('system_index_to_prime'));
  }
  public set systemIndexToPrime(value: string[]) {
    this._systemIndexToPrime = value;
  }
  public resetSystemIndexToPrime() {
    this._systemIndexToPrime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemIndexToPrimeInput() {
    return this._systemIndexToPrime;
  }

  // system_index_to_prime_internal_nodes_only - computed: true, optional: true, required: false
  private _systemIndexToPrimeInternalNodesOnly?: string[]; 
  public get systemIndexToPrimeInternalNodesOnly() {
    return cdktf.Fn.tolist(this.getListAttribute('system_index_to_prime_internal_nodes_only'));
  }
  public set systemIndexToPrimeInternalNodesOnly(value: string[]) {
    this._systemIndexToPrimeInternalNodesOnly = value;
  }
  public resetSystemIndexToPrimeInternalNodesOnly() {
    this._systemIndexToPrimeInternalNodesOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemIndexToPrimeInternalNodesOnlyInput() {
    return this._systemIndexToPrimeInternalNodesOnly;
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

  // uncached_attribute_criteria - computed: false, optional: true, required: false
  private _uncachedAttributeCriteria?: string; 
  public get uncachedAttributeCriteria() {
    return this.getStringAttribute('uncached_attribute_criteria');
  }
  public set uncachedAttributeCriteria(value: string) {
    this._uncachedAttributeCriteria = value;
  }
  public resetUncachedAttributeCriteria() {
    this._uncachedAttributeCriteria = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uncachedAttributeCriteriaInput() {
    return this._uncachedAttributeCriteria;
  }

  // uncached_entry_criteria - computed: false, optional: true, required: false
  private _uncachedEntryCriteria?: string; 
  public get uncachedEntryCriteria() {
    return this.getStringAttribute('uncached_entry_criteria');
  }
  public set uncachedEntryCriteria(value: string) {
    this._uncachedEntryCriteria = value;
  }
  public resetUncachedEntryCriteria() {
    this._uncachedEntryCriteria = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uncachedEntryCriteriaInput() {
    return this._uncachedEntryCriteria;
  }

  // uncached_id2entry_cache_mode - computed: true, optional: true, required: false
  private _uncachedId2EntryCacheMode?: string; 
  public get uncachedId2EntryCacheMode() {
    return this.getStringAttribute('uncached_id2entry_cache_mode');
  }
  public set uncachedId2EntryCacheMode(value: string) {
    this._uncachedId2EntryCacheMode = value;
  }
  public resetUncachedId2EntryCacheMode() {
    this._uncachedId2EntryCacheMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uncachedId2EntryCacheModeInput() {
    return this._uncachedId2EntryCacheMode;
  }

  // writability_mode - computed: true, optional: true, required: false
  private _writabilityMode?: string; 
  public get writabilityMode() {
    return this.getStringAttribute('writability_mode');
  }
  public set writabilityMode(value: string) {
    this._writabilityMode = value;
  }
  public resetWritabilityMode() {
    this._writabilityMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writabilityModeInput() {
    return this._writabilityMode;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backend_id: cdktf.stringToTerraform(this._backendId),
      background_prime: cdktf.booleanToTerraform(this._backgroundPrime),
      base_dn: cdktf.listMapper(cdktf.stringToTerraform, false)(this._baseDn),
      compact_common_parent_dn: cdktf.listMapper(cdktf.stringToTerraform, false)(this._compactCommonParentDn),
      composite_index_entry_limit: cdktf.numberToTerraform(this._compositeIndexEntryLimit),
      compress_entries: cdktf.booleanToTerraform(this._compressEntries),
      db_background_sync_interval: cdktf.stringToTerraform(this._dbBackgroundSyncInterval),
      db_cache_percent: cdktf.numberToTerraform(this._dbCachePercent),
      db_checkpointer_wakeup_interval: cdktf.stringToTerraform(this._dbCheckpointerWakeupInterval),
      db_cleaner_min_utilization: cdktf.numberToTerraform(this._dbCleanerMinUtilization),
      db_directory: cdktf.stringToTerraform(this._dbDirectory),
      db_directory_permissions: cdktf.stringToTerraform(this._dbDirectoryPermissions),
      db_evictor_critical_percentage: cdktf.numberToTerraform(this._dbEvictorCriticalPercentage),
      db_import_cache_percent: cdktf.numberToTerraform(this._dbImportCachePercent),
      db_log_file_max: cdktf.stringToTerraform(this._dbLogFileMax),
      db_logging_level: cdktf.stringToTerraform(this._dbLoggingLevel),
      db_num_cleaner_threads: cdktf.numberToTerraform(this._dbNumCleanerThreads),
      db_txn_write_no_sync: cdktf.booleanToTerraform(this._dbTxnWriteNoSync),
      db_use_thread_local_handles: cdktf.booleanToTerraform(this._dbUseThreadLocalHandles),
      deadlock_retry_limit: cdktf.numberToTerraform(this._deadlockRetryLimit),
      default_cache_mode: cdktf.stringToTerraform(this._defaultCacheMode),
      description: cdktf.stringToTerraform(this._description),
      dn2id_cache_mode: cdktf.stringToTerraform(this._dn2IdCacheMode),
      dn2uri_cache_mode: cdktf.stringToTerraform(this._dn2UriCacheMode),
      enabled: cdktf.booleanToTerraform(this._enabled),
      export_thread_count: cdktf.numberToTerraform(this._exportThreadCount),
      external_txn_default_backend_lock_behavior: cdktf.stringToTerraform(this._externalTxnDefaultBackendLockBehavior),
      hash_entries: cdktf.booleanToTerraform(this._hashEntries),
      id2children_cache_mode: cdktf.stringToTerraform(this._id2ChildrenCacheMode),
      id2children_index_entry_limit: cdktf.numberToTerraform(this._id2ChildrenIndexEntryLimit),
      id2entry_cache_mode: cdktf.stringToTerraform(this._id2EntryCacheMode),
      id2subtree_cache_mode: cdktf.stringToTerraform(this._id2SubtreeCacheMode),
      id2subtree_index_entry_limit: cdktf.numberToTerraform(this._id2SubtreeIndexEntryLimit),
      import_temp_directory: cdktf.stringToTerraform(this._importTempDirectory),
      import_thread_count: cdktf.numberToTerraform(this._importThreadCount),
      index_entry_limit: cdktf.numberToTerraform(this._indexEntryLimit),
      is_private_backend: cdktf.booleanToTerraform(this._isPrivateBackend),
      je_property: cdktf.listMapper(cdktf.stringToTerraform, false)(this._jeProperty),
      notification_manager: cdktf.stringToTerraform(this._notificationManager),
      num_recent_changes: cdktf.numberToTerraform(this._numRecentChanges),
      offline_process_database_open_timeout: cdktf.stringToTerraform(this._offlineProcessDatabaseOpenTimeout),
      prime_all_indexes: cdktf.booleanToTerraform(this._primeAllIndexes),
      prime_method: cdktf.listMapper(cdktf.stringToTerraform, false)(this._primeMethod),
      prime_thread_count: cdktf.numberToTerraform(this._primeThreadCount),
      prime_time_limit: cdktf.stringToTerraform(this._primeTimeLimit),
      process_filters_with_undefined_attribute_types: cdktf.booleanToTerraform(this._processFiltersWithUndefinedAttributeTypes),
      return_unavailable_for_untrusted_index: cdktf.booleanToTerraform(this._returnUnavailableForUntrustedIndex),
      return_unavailable_when_disabled: cdktf.booleanToTerraform(this._returnUnavailableWhenDisabled),
      set_degraded_alert_for_untrusted_index: cdktf.booleanToTerraform(this._setDegradedAlertForUntrustedIndex),
      set_degraded_alert_when_disabled: cdktf.booleanToTerraform(this._setDegradedAlertWhenDisabled),
      simple_paged_results_id_set_cache_duration: cdktf.stringToTerraform(this._simplePagedResultsIdSetCacheDuration),
      single_writer_lock_behavior: cdktf.stringToTerraform(this._singleWriterLockBehavior),
      subtree_delete_size_limit: cdktf.numberToTerraform(this._subtreeDeleteSizeLimit),
      subtree_modify_dn_size_limit: cdktf.numberToTerraform(this._subtreeModifyDnSizeLimit),
      system_index_to_prime: cdktf.listMapper(cdktf.stringToTerraform, false)(this._systemIndexToPrime),
      system_index_to_prime_internal_nodes_only: cdktf.listMapper(cdktf.stringToTerraform, false)(this._systemIndexToPrimeInternalNodesOnly),
      type: cdktf.stringToTerraform(this._type),
      uncached_attribute_criteria: cdktf.stringToTerraform(this._uncachedAttributeCriteria),
      uncached_entry_criteria: cdktf.stringToTerraform(this._uncachedEntryCriteria),
      uncached_id2entry_cache_mode: cdktf.stringToTerraform(this._uncachedId2EntryCacheMode),
      writability_mode: cdktf.stringToTerraform(this._writabilityMode),
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
      background_prime: {
        value: cdktf.booleanToHclTerraform(this._backgroundPrime),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      base_dn: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._baseDn),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      compact_common_parent_dn: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._compactCommonParentDn),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      composite_index_entry_limit: {
        value: cdktf.numberToHclTerraform(this._compositeIndexEntryLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      compress_entries: {
        value: cdktf.booleanToHclTerraform(this._compressEntries),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      db_background_sync_interval: {
        value: cdktf.stringToHclTerraform(this._dbBackgroundSyncInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_cache_percent: {
        value: cdktf.numberToHclTerraform(this._dbCachePercent),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      db_checkpointer_wakeup_interval: {
        value: cdktf.stringToHclTerraform(this._dbCheckpointerWakeupInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_cleaner_min_utilization: {
        value: cdktf.numberToHclTerraform(this._dbCleanerMinUtilization),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      db_directory: {
        value: cdktf.stringToHclTerraform(this._dbDirectory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_directory_permissions: {
        value: cdktf.stringToHclTerraform(this._dbDirectoryPermissions),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_evictor_critical_percentage: {
        value: cdktf.numberToHclTerraform(this._dbEvictorCriticalPercentage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      db_import_cache_percent: {
        value: cdktf.numberToHclTerraform(this._dbImportCachePercent),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      db_log_file_max: {
        value: cdktf.stringToHclTerraform(this._dbLogFileMax),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_logging_level: {
        value: cdktf.stringToHclTerraform(this._dbLoggingLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_num_cleaner_threads: {
        value: cdktf.numberToHclTerraform(this._dbNumCleanerThreads),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      db_txn_write_no_sync: {
        value: cdktf.booleanToHclTerraform(this._dbTxnWriteNoSync),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      db_use_thread_local_handles: {
        value: cdktf.booleanToHclTerraform(this._dbUseThreadLocalHandles),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      deadlock_retry_limit: {
        value: cdktf.numberToHclTerraform(this._deadlockRetryLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      default_cache_mode: {
        value: cdktf.stringToHclTerraform(this._defaultCacheMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dn2id_cache_mode: {
        value: cdktf.stringToHclTerraform(this._dn2IdCacheMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dn2uri_cache_mode: {
        value: cdktf.stringToHclTerraform(this._dn2UriCacheMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      export_thread_count: {
        value: cdktf.numberToHclTerraform(this._exportThreadCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      external_txn_default_backend_lock_behavior: {
        value: cdktf.stringToHclTerraform(this._externalTxnDefaultBackendLockBehavior),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hash_entries: {
        value: cdktf.booleanToHclTerraform(this._hashEntries),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id2children_cache_mode: {
        value: cdktf.stringToHclTerraform(this._id2ChildrenCacheMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id2children_index_entry_limit: {
        value: cdktf.numberToHclTerraform(this._id2ChildrenIndexEntryLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id2entry_cache_mode: {
        value: cdktf.stringToHclTerraform(this._id2EntryCacheMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id2subtree_cache_mode: {
        value: cdktf.stringToHclTerraform(this._id2SubtreeCacheMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id2subtree_index_entry_limit: {
        value: cdktf.numberToHclTerraform(this._id2SubtreeIndexEntryLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      import_temp_directory: {
        value: cdktf.stringToHclTerraform(this._importTempDirectory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      import_thread_count: {
        value: cdktf.numberToHclTerraform(this._importThreadCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      index_entry_limit: {
        value: cdktf.numberToHclTerraform(this._indexEntryLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      is_private_backend: {
        value: cdktf.booleanToHclTerraform(this._isPrivateBackend),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      je_property: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._jeProperty),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      notification_manager: {
        value: cdktf.stringToHclTerraform(this._notificationManager),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      num_recent_changes: {
        value: cdktf.numberToHclTerraform(this._numRecentChanges),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      offline_process_database_open_timeout: {
        value: cdktf.stringToHclTerraform(this._offlineProcessDatabaseOpenTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prime_all_indexes: {
        value: cdktf.booleanToHclTerraform(this._primeAllIndexes),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      prime_method: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._primeMethod),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      prime_thread_count: {
        value: cdktf.numberToHclTerraform(this._primeThreadCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      prime_time_limit: {
        value: cdktf.stringToHclTerraform(this._primeTimeLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      process_filters_with_undefined_attribute_types: {
        value: cdktf.booleanToHclTerraform(this._processFiltersWithUndefinedAttributeTypes),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      return_unavailable_for_untrusted_index: {
        value: cdktf.booleanToHclTerraform(this._returnUnavailableForUntrustedIndex),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      return_unavailable_when_disabled: {
        value: cdktf.booleanToHclTerraform(this._returnUnavailableWhenDisabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      set_degraded_alert_for_untrusted_index: {
        value: cdktf.booleanToHclTerraform(this._setDegradedAlertForUntrustedIndex),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      set_degraded_alert_when_disabled: {
        value: cdktf.booleanToHclTerraform(this._setDegradedAlertWhenDisabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      simple_paged_results_id_set_cache_duration: {
        value: cdktf.stringToHclTerraform(this._simplePagedResultsIdSetCacheDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      single_writer_lock_behavior: {
        value: cdktf.stringToHclTerraform(this._singleWriterLockBehavior),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subtree_delete_size_limit: {
        value: cdktf.numberToHclTerraform(this._subtreeDeleteSizeLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      subtree_modify_dn_size_limit: {
        value: cdktf.numberToHclTerraform(this._subtreeModifyDnSizeLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      system_index_to_prime: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._systemIndexToPrime),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      system_index_to_prime_internal_nodes_only: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._systemIndexToPrimeInternalNodesOnly),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uncached_attribute_criteria: {
        value: cdktf.stringToHclTerraform(this._uncachedAttributeCriteria),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uncached_entry_criteria: {
        value: cdktf.stringToHclTerraform(this._uncachedEntryCriteria),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uncached_id2entry_cache_mode: {
        value: cdktf.stringToHclTerraform(this._uncachedId2EntryCacheMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      writability_mode: {
        value: cdktf.stringToHclTerraform(this._writabilityMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
