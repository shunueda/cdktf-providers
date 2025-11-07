// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_backend
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DefaultBackendConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies the maximum length of time that information about raised alarms should be maintained before they will be purged.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_backend#alarm_retention_time DefaultBackend#alarm_retention_time}
  */
  readonly alarmRetentionTime?: string;
  /**
  * Specifies the maximum length of time that information about generated alerts should be maintained before they will be purged.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_backend#alert_retention_time DefaultBackend#alert_retention_time}
  */
  readonly alertRetentionTime?: string;
  /**
  * Indicates whether the contents of changelog entries should be subject to access control and sensitive attribute evaluation such that the contents of attributes like changes, deletedEntryAttrs, ds-changelog-entry-key-attr-values, ds-changelog-before-values, and ds-changelog-after-values may be altered based on attributes the user can see in the target entry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_backend#apply_access_controls_to_changelog_entry_contents DefaultBackend#apply_access_controls_to_changelog_entry_contents}
  */
  readonly applyAccessControlsToChangelogEntryContents?: boolean | cdktf.IResolvable;
  /**
  * Specifies a name to identify the associated backend.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_backend#backend_id DefaultBackend#backend_id}
  */
  readonly backendId: string;
  /**
  * Indicates whether to attempt to perform the prime using a background thread if possible. If background priming is enabled, then the Directory Server may be allowed to accept client connections and process requests while the prime is in progress.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_backend#background_prime DefaultBackend#background_prime}
  */
  readonly backgroundPrime?: boolean | cdktf.IResolvable;
  /**
  * Specifies the path to a backup directory containing one or more backups for a particular backend.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_backend#backup_directory DefaultBackend#backup_directory}
  */
  readonly backupDirectory?: string[];
  /**
  * Specifies the permissions that should be applied to files and directories created by a backup of the backend.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_backend#backup_file_permissions DefaultBackend#backup_file_permissions}
  */
  readonly backupFilePermissions?: string;
  /**
  * Specifies the base DN(s) for the data that the backend handles.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_backend#base_dn DefaultBackend#base_dn}
  */
  readonly baseDn?: string[];
  /**
  * Specifies a set of attribute types that should be excluded from a changelog entry for DELETE operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_backend#changelog_deleted_entry_exclude_attribute DefaultBackend#changelog_deleted_entry_exclude_attribute}
  */
  readonly changelogDeletedEntryExcludeAttribute?: string[];
  /**
  * Specifies a set of attribute types that should be included in a changelog entry for DELETE operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_backend#changelog_deleted_entry_include_attribute DefaultBackend#changelog_deleted_entry_include_attribute}
  */
  readonly changelogDeletedEntryIncludeAttribute?: string[];
  /**
  * The base DNs for branches in the data for which no changelog records should be generated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_backend#changelog_entry_exclude_base_dn DefaultBackend#changelog_entry_exclude_base_dn}
  */
  readonly changelogEntryExcludeBaseDn?: string[];
  /**
  * A filter that indicates which changelog entries should be excluded from the changelog. Note that this filter is evaluated against the changelog entry itself and not against the entry that was the target of the change referenced by the changelog entry. This filter may target any attributes that appear in changelog entries with the exception of the changeNumber and entry-size-bytes attributes, since they will not be known at the time of the filter evaluation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_backend#changelog_entry_exclude_filter DefaultBackend#changelog_entry_exclude_filter}
  */
  readonly changelogEntryExcludeFilter?: string[];
  /**
  * The base DNs for branches in the data for which to record changes in the changelog.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_backend#changelog_entry_include_base_dn DefaultBackend#changelog_entry_include_base_dn}
  */
  readonly changelogEntryIncludeBaseDn?: string[];
  /**
  * A filter that indicates which changelog entries should actually be stored in the changelog. Note that this filter is evaluated against the changelog entry itself and not against the entry that was the target of the change referenced by the changelog entry. This filter may target any attributes that appear in changelog entries with the exception of the changeNumber and entry-size-bytes attributes, since they will not be known at the time of the filter evaluation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_backend#changelog_entry_include_filter DefaultBackend#changelog_entry_include_filter}
  */
  readonly changelogEntryIncludeFilter?: string[];
  /**
  * Specifies a set of attribute types that should be excluded in a changelog entry for ADD and MODIFY operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_backend#changelog_exclude_attribute DefaultBackend#changelog_exclude_attribute}
  */
  readonly changelogExcludeAttribute?: string[];
  /**
  * Specifies which attribute types will be included in a changelog entry for ADD and MODIFY operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_backend#changelog_include_attribute DefaultBackend#changelog_include_attribute}
  */
  readonly changelogIncludeAttribute?: string[];
  /**
  * Specifies which attribute types will be included in a changelog entry on every change.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_backend#changelog_include_key_attribute DefaultBackend#changelog_include_key_attribute}
  */
  readonly changelogIncludeKeyAttribute?: string[];
  /**
  * This controls whether all attribute values for a modified attribute (even those values that have not changed) will be included in the changelog entry. If the number of attribute values does not exceed this limit, then all values for the modified attribute will be included in the changelog entry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_backend#changelog_max_before_after_values DefaultBackend#changelog_max_before_after_values}
  */
  readonly changelogMaxBeforeAfterValues?: number;
  /**
  * Changes are guaranteed to be maintained in the changelog database for at least this duration. Setting target-database-size can allow additional changes to be maintained up to the configured size on disk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_backend#changelog_maximum_age DefaultBackend#changelog_maximum_age}
  */
  readonly changelogMaximumAge?: string;
  /**
  * Specifies the number of changelog entries purged in a single database transaction.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_backend#changelog_purge_batch_size DefaultBackend#changelog_purge_batch_size}
  */
  readonly changelogPurgeBatchSize?: number;
  /**
  * Specifies the number of changelog entries written in a single database transaction.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_backend#changelog_write_batch_size DefaultBackend#changelog_write_batch_size}
  */
  readonly changelogWriteBatchSize?: number;
  /**
  * Specifies the capacity of the changelog write queue in number of changes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_backend#changelog_write_queue_capacity DefaultBackend#changelog_write_queue_capacity}
  */
  readonly changelogWriteQueueCapacity?: number;
  /**
  * Provides a DN of an entry that may be the parent for a large number of entries in the backend. This may be used to help increase the space efficiency when encoding entries for storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_backend#compact_common_parent_dn DefaultBackend#compact_common_parent_dn}
  */
  readonly compactCommonParentDn?: string[];
  /**
  * Specifies the maximum number of entries that are allowed to match a given composite index key before that particular composite index key is no longer maintained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_backend#composite_index_entry_limit DefaultBackend#composite_index_entry_limit}
  */
  readonly compositeIndexEntryLimit?: number;
  /**
  * Indicates whether the backend should attempt to compress entries before storing them in the database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_backend#compress_entries DefaultBackend#compress_entries}
  */
  readonly compressEntries?: boolean | cdktf.IResolvable;
  /**
  * Specifies the interval to use when performing background synchronous writes in the database environment in order to smooth overall write performance and increase data durability. A value of "0 s" will disable background synchronous writes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_backend#db_background_sync_interval DefaultBackend#db_background_sync_interval}
  */
  readonly dbBackgroundSyncInterval?: string;
  /**
  * When the `type` attribute is set to:
  *   - `changelog`: Specifies the percentage of JVM memory to allocate to the changelog database cache.
  *   - `local-db`: Specifies the percentage of JVM memory to allocate to the database cache.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_backend#db_cache_percent DefaultBackend#db_cache_percent}
  */
  readonly dbCachePercent?: number;
  /**
  * Specifies the maximum length of time that should pass between checkpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_backend#db_checkpointer_wakeup_interval DefaultBackend#db_checkpointer_wakeup_interval}
  */
  readonly dbCheckpointerWakeupInterval?: string;
  /**
  * Specifies the minimum percentage of "live" data that the database cleaner attempts to keep in database log files.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_backend#db_cleaner_min_utilization DefaultBackend#db_cleaner_min_utilization}
  */
  readonly dbCleanerMinUtilization?: number;
  /**
  * Specifies the path to the filesystem directory that is used to hold the Berkeley DB Java Edition database files containing the data for this backend. The files for this backend are stored in a sub-directory named after the backend-id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_backend#db_directory DefaultBackend#db_directory}
  */
  readonly dbDirectory?: string;
  /**
  * When the `type` attribute is set to:
  *   - `changelog`: Specifies the permissions that should be applied to the directory containing the backend database files and to directories and files created during backup of the backend.
  *   - `local-db`: Specifies the permissions that should be applied to the directory containing the backend database files and to directories and files created during backup or LDIF export of the backend.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_backend#db_directory_permissions DefaultBackend#db_directory_permissions}
  */
  readonly dbDirectoryPermissions?: string;
  /**
  * Specifies the percentage over the configured maximum that the database cache is allowed to grow. It is recommended to set this value slightly above zero when the database is too large to fully cache in memory. In this case, a dedicated background evictor thread is used to perform evictions once the cache fills up reducing the possibility that server threads are blocked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_backend#db_evictor_critical_percentage DefaultBackend#db_evictor_critical_percentage}
  */
  readonly dbEvictorCriticalPercentage?: number;
  /**
  * The percentage of JVM memory to allocate to the database cache during import operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_backend#db_import_cache_percent DefaultBackend#db_import_cache_percent}
  */
  readonly dbImportCachePercent?: number;
  /**
  * Specifies the maximum size for a database log file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_backend#db_log_file_max DefaultBackend#db_log_file_max}
  */
  readonly dbLogFileMax?: string;
  /**
  * Specifies the log level that should be used by the database when it is writing information into the je.info file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_backend#db_logging_level DefaultBackend#db_logging_level}
  */
  readonly dbLoggingLevel?: string;
  /**
  * Specifies the number of threads that the backend should maintain to keep the database log files at or near the desired utilization. A value of zero indicates that the number of cleaner threads should be automatically configured based on the number of available CPUs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_backend#db_num_cleaner_threads DefaultBackend#db_num_cleaner_threads}
  */
  readonly dbNumCleanerThreads?: number;
  /**
  * Indicates whether the database should synchronously flush data as it is written to disk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_backend#db_txn_write_no_sync DefaultBackend#db_txn_write_no_sync}
  */
  readonly dbTxnWriteNoSync?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether to use thread-local database handles to reduce contention in the backend.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_backend#db_use_thread_local_handles DefaultBackend#db_use_thread_local_handles}
  */
  readonly dbUseThreadLocalHandles?: boolean | cdktf.IResolvable;
  /**
  * Specifies the number of times that the server should retry an attempted operation in the backend if a deadlock results from two concurrent requests that interfere with each other in a conflicting manner.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_backend#deadlock_retry_limit DefaultBackend#deadlock_retry_limit}
  */
  readonly deadlockRetryLimit?: number;
  /**
  * Specifies the cache mode that should be used for any database for which the cache mode is not explicitly specified. This includes the id2entry database, which stores encoded entries, and all attribute indexes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_backend#default_cache_mode DefaultBackend#default_cache_mode}
  */
  readonly defaultCacheMode?: string;
  /**
  * A description for this Backend
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_backend#description DefaultBackend#description}
  */
  readonly description?: string;
  /**
  * Specifies the names of the alert types that should not be added to the backend. This can be used to suppress high volume alerts that might trigger hitting the max-alerts limit sooner than desired. Disabled alert types will not be sent out over persistent searches on this backend.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_backend#disabled_alert_type DefaultBackend#disabled_alert_type}
  */
  readonly disabledAlertType?: string[];
  /**
  * Specifies the cache mode that should be used when accessing the records in the dn2id database, which provides a mapping between normalized entry DNs and the corresponding entry IDs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_backend#dn2id_cache_mode DefaultBackend#dn2id_cache_mode}
  */
  readonly dn2IdCacheMode?: string;
  /**
  * Specifies the cache mode that should be used when accessing the records in the dn2uri database, which provides a mapping between a normalized entry DN and a set of referral URLs contained in the associated smart referral entry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_backend#dn2uri_cache_mode DefaultBackend#dn2uri_cache_mode}
  */
  readonly dn2UriCacheMode?: string;
  /**
  * Indicates whether the backend is enabled in the server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_backend#enabled DefaultBackend#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Specifies the number of threads to use for concurrently retrieving and encoding entries during an LDIF export.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_backend#export_thread_count DefaultBackend#export_thread_count}
  */
  readonly exportThreadCount?: number;
  /**
  * Specifies the default behavior that should be exhibited by external transactions (e.g., an LDAP transaction or an atomic multi-update operation) with regard to acquiring an exclusive lock in this backend.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_backend#external_txn_default_backend_lock_behavior DefaultBackend#external_txn_default_backend_lock_behavior}
  */
  readonly externalTxnDefaultBackendLockBehavior?: string;
  /**
  * Indicates whether to calculate and store a message digest of the entry contents along with the entry data, in order to provide a means of verifying the integrity of the entry data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_backend#hash_entries DefaultBackend#hash_entries}
  */
  readonly hashEntries?: boolean | cdktf.IResolvable;
  /**
  * Specifies the cache mode that should be used when accessing the records in the id2children database, which provides a mapping between the entry ID of a particular entry and the entry IDs of all of its immediate children. This index may be used when performing searches with a single-level scope if the search filter cannot be resolved to a small enough candidate list. The size of this database directly depends on the number of entries that have children.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_backend#id2children_cache_mode DefaultBackend#id2children_cache_mode}
  */
  readonly id2ChildrenCacheMode?: string;
  /**
  * Specifies the maximum number of entry IDs to maintain for each entry in the id2children system index (which keeps track of the immediate children for an entry, to assist in otherwise unindexed searches with a single-level scope). A value of 0 means there is no limit, however this could have a big impact on database size on disk and on server performance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_backend#id2children_index_entry_limit DefaultBackend#id2children_index_entry_limit}
  */
  readonly id2ChildrenIndexEntryLimit?: number;
  /**
  * Specifies the cache mode that should be used when accessing the records in the id2entry database, which provides a mapping between entry IDs and entry contents. Consider configuring uncached entries or uncached attributes in lieu of changing from the "cache-keys-and-values" default value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_backend#id2entry_cache_mode DefaultBackend#id2entry_cache_mode}
  */
  readonly id2EntryCacheMode?: string;
  /**
  * Specifies the cache mode that should be used when accessing the records in the id2subtree database, which provides a mapping between the entry ID of a particular entry and the entry IDs of all of its children to any depth. This index may be used when performing searches with a whole-subtree or subordinate-subtree scope if the search filter cannot be resolved to a small enough candidate list. The size of this database directly depends on the number of entries that have children.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_backend#id2subtree_cache_mode DefaultBackend#id2subtree_cache_mode}
  */
  readonly id2SubtreeCacheMode?: string;
  /**
  * Specifies the maximum number of entry IDs to maintain for each entry in the id2subtree system index (which keeps track of all descendants below an entry, to assist in otherwise unindexed searches with a whole-subtree or subordinate subtree scope). A value of 0 means there is no limit, however this could have a big impact on database size on disk and on server performance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_backend#id2subtree_index_entry_limit DefaultBackend#id2subtree_index_entry_limit}
  */
  readonly id2SubtreeIndexEntryLimit?: number;
  /**
  * Specifies the location of the directory that is used to hold temporary information during the index post-processing phase of an LDIF import.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_backend#import_temp_directory DefaultBackend#import_temp_directory}
  */
  readonly importTempDirectory?: string;
  /**
  * Specifies the number of threads to use for concurrent processing during an LDIF import.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_backend#import_thread_count DefaultBackend#import_thread_count}
  */
  readonly importThreadCount?: number;
  /**
  * Specifies the changelog entry elements (if any) in which virtual attributes should be included.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_backend#include_virtual_attributes DefaultBackend#include_virtual_attributes}
  */
  readonly includeVirtualAttributes?: string[];
  /**
  * Specifies the maximum number of entries that are allowed to match a given index key before that particular index key is no longer maintained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_backend#index_entry_limit DefaultBackend#index_entry_limit}
  */
  readonly indexEntryLimit?: number;
  /**
  * Specifies which attribute types are to be specifically excluded from the set of attribute indexes maintained on the changelog. This property is useful when the index-include-attribute property contains one of the special values "*" and "+".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_backend#index_exclude_attribute DefaultBackend#index_exclude_attribute}
  */
  readonly indexExcludeAttribute?: string[];
  /**
  * Specifies which attribute types are to be specifically included in the set of attribute indexes maintained on the changelog. If this property does not have any values then no attribute types are indexed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_backend#index_include_attribute DefaultBackend#index_include_attribute}
  */
  readonly indexIncludeAttribute?: string[];
  /**
  * The name or OID of an attribute type that is considered insignificant for the purpose of maintaining the configuration archive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_backend#insignificant_config_archive_attribute DefaultBackend#insignificant_config_archive_attribute}
  */
  readonly insignificantConfigArchiveAttribute?: string[];
  /**
  * The base DN that is considered insignificant for the purpose of maintaining the configuration archive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_backend#insignificant_config_archive_base_dn DefaultBackend#insignificant_config_archive_base_dn}
  */
  readonly insignificantConfigArchiveBaseDn?: string[];
  /**
  * When the `type` attribute is set to:
  *   - `ldif`: Indicates whether the backend should be considered a private backend, which indicates that it is used for storing operational data rather than user-defined information.
  *   - `local-db`: Indicates whether this backend should be considered a private backend in the server. Private backends are meant for storing server-internal information and should not be used for user or application data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_backend#is_private_backend DefaultBackend#is_private_backend}
  */
  readonly isPrivateBackend?: boolean | cdktf.IResolvable;
  /**
  * When the `type` attribute is set to:
  *   - `changelog`: Specifies the database and environment properties for the Berkeley DB Java Edition database for this changelog backend.
  *   - `local-db`: Specifies the database and environment properties for the Berkeley DB Java Edition database serving the data for this backend.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_backend#je_property DefaultBackend#je_property}
  */
  readonly jeProperty?: string[];
  /**
  * When the `type` attribute is set to:
  *   - One of [`alert`, `alarm`]: Specifies the path to the LDIF file that serves as the backing file for this backend.
  *   - `ldif`: Specifies the path to the LDIF file containing the data for this backend.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_backend#ldif_file DefaultBackend#ldif_file}
  */
  readonly ldifFile?: string;
  /**
  * Indicates whether the server should maintain the config archive with new changes to the config backend.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_backend#maintain_config_archive DefaultBackend#maintain_config_archive}
  */
  readonly maintainConfigArchive?: boolean | cdktf.IResolvable;
  /**
  * Specifies the maximum number of alarms that should be retained. If more alarms than this configured maximum are generated within the alarm retention time, then the oldest alarms will be purged to achieve this maximum. Only alarms at normal severity will be purged.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_backend#max_alarms DefaultBackend#max_alarms}
  */
  readonly maxAlarms?: number;
  /**
  * Specifies the maximum number of alerts that should be retained. If more alerts than this configured maximum are generated within the alert retention time, then the oldest alerts will be purged to achieve this maximum.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_backend#max_alerts DefaultBackend#max_alerts}
  */
  readonly maxAlerts?: number;
  /**
  * Indicates the maximum number of previous config files to keep as part of maintaining the config archive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_backend#max_config_archive_count DefaultBackend#max_config_archive_count}
  */
  readonly maxConfigArchiveCount?: number;
  /**
  * The maximum number of log messages to retain in each task entry from the end of the processing for that task. If too many messages are logged during task processing, then retaining only a limited number of messages from the beginning and/or end of task processing can reduce the amount of memory that the server consumes by caching information about currently-active and recently-completed tasks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_backend#maximum_final_task_log_messages_to_retain DefaultBackend#maximum_final_task_log_messages_to_retain}
  */
  readonly maximumFinalTaskLogMessagesToRetain?: number;
  /**
  * The maximum number of log messages to retain in each task entry from the beginning of the processing for that task. If too many messages are logged during task processing, then retaining only a limited number of messages from the beginning and/or end of task processing can reduce the amount of memory that the server consumes by caching information about currently-active and recently-completed tasks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_backend#maximum_initial_task_log_messages_to_retain DefaultBackend#maximum_initial_task_log_messages_to_retain}
  */
  readonly maximumInitialTaskLogMessagesToRetain?: number;
  /**
  * Specifies the path to the directory that contains metric definitions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_backend#metrics_dir DefaultBackend#metrics_dir}
  */
  readonly metricsDir?: string;
  /**
  * Tells the server component that is responsible for mirroring configuration data across a topology of servers the maximum amount of time to wait for an update operation (add, delete, modify and modify-dn) on an entry to be applied on all servers in the topology. Mirrored data includes meta-data about the servers in the topology as well as cluster-wide configuration data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_backend#mirrored_subtree_entry_update_timeout DefaultBackend#mirrored_subtree_entry_update_timeout}
  */
  readonly mirroredSubtreeEntryUpdateTimeout?: string;
  /**
  * Tells the server component that is responsible for mirroring configuration data across a topology of servers the maximum amount of time to wait before polling the peer servers in the topology to determine if there are any changes in the topology. Mirrored data includes meta-data about the servers in the topology as well as cluster-wide configuration data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_backend#mirrored_subtree_peer_polling_interval DefaultBackend#mirrored_subtree_peer_polling_interval}
  */
  readonly mirroredSubtreePeerPollingInterval?: string;
  /**
  * Tells the server component that is responsible for mirroring configuration data across a topology of servers the maximum amount of time to wait for a search operation to complete. Mirrored data includes meta-data about the servers in the topology as well as cluster-wide configuration data. Search requests that take longer than this timeout will be canceled and considered failures.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_backend#mirrored_subtree_search_timeout DefaultBackend#mirrored_subtree_search_timeout}
  */
  readonly mirroredSubtreeSearchTimeout?: string;
  /**
  * Specifies a notification manager for changes resulting from operations processed through this Backend
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_backend#notification_manager DefaultBackend#notification_manager}
  */
  readonly notificationManager?: string;
  /**
  * Specifies the email address to use as the sender address (that is, the "From:" address) for notification mail messages generated when a task completes execution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_backend#notification_sender_address DefaultBackend#notification_sender_address}
  */
  readonly notificationSenderAddress?: string;
  /**
  * Specifies the number of recent LDAP entry changes per replica for which the backend keeps a record to allow replication to recover in the event that the server is abruptly terminated. Increasing this value can lead to an increased peak server modification rate as well as increased replication throughput.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_backend#num_recent_changes DefaultBackend#num_recent_changes}
  */
  readonly numRecentChanges?: number;
  /**
  * Specifies a timeout duration which will be used for opening the database environment by an offline process, such as export-ldif.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_backend#offline_process_database_open_timeout DefaultBackend#offline_process_database_open_timeout}
  */
  readonly offlineProcessDatabaseOpenTimeout?: string;
  /**
  * Indicates whether to prime all indexes associated with this backend, or to only prime the specified set of indexes (as configured with the system-index-to-prime property for the system indexes, and the prime-index property in the attribute index definition for attribute indexes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_backend#prime_all_indexes DefaultBackend#prime_all_indexes}
  */
  readonly primeAllIndexes?: boolean | cdktf.IResolvable;
  /**
  * Specifies the method that should be used to prime caches with data for this backend.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_backend#prime_method DefaultBackend#prime_method}
  */
  readonly primeMethod?: string[];
  /**
  * Specifies the number of threads to use when priming. At present, this applies only to the preload and cursor-across-indexes prime methods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_backend#prime_thread_count DefaultBackend#prime_thread_count}
  */
  readonly primeThreadCount?: number;
  /**
  * Specifies the maximum length of time that the backend prime should be allowed to run. A duration of zero seconds indicates that there should not be a time limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_backend#prime_time_limit DefaultBackend#prime_time_limit}
  */
  readonly primeTimeLimit?: string;
  /**
  * Determines whether the Directory Server should continue filter processing for LDAP search operations in this Local DB Backend that includes a search filter with an attribute that is not defined in the schema. This will only apply if check-schema is enabled in the global configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_backend#process_filters_with_undefined_attribute_types DefaultBackend#process_filters_with_undefined_attribute_types}
  */
  readonly processFiltersWithUndefinedAttributeTypes?: boolean | cdktf.IResolvable;
  /**
  * Specifies the name of a file (which must exist in the config/schema directory) containing schema elements that should be considered read-only. Any schema definitions contained in read-only files cannot be altered by external clients.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_backend#read_only_schema_file DefaultBackend#read_only_schema_file}
  */
  readonly readOnlySchemaFile?: string[];
  /**
  * Indicates whether changelog entries that have been altered by applying access controls should include additional information about any attributes that may have been removed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_backend#report_excluded_changelog_attributes DefaultBackend#report_excluded_changelog_attributes}
  */
  readonly reportExcludedChangelogAttributes?: string;
  /**
  * The retention policy to use for the Metrics Backend .
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_backend#retention_policy DefaultBackend#retention_policy}
  */
  readonly retentionPolicy?: string[];
  /**
  * Determines whether the Directory Server returns UNAVAILABLE for any LDAP search operation in this Local DB Backend that would use an index whose contents cannot be trusted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_backend#return_unavailable_for_untrusted_index DefaultBackend#return_unavailable_for_untrusted_index}
  */
  readonly returnUnavailableForUntrustedIndex?: boolean | cdktf.IResolvable;
  /**
  * Determines whether any LDAP operation that would use this Backend is to return UNAVAILABLE when this Backend is disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_backend#return_unavailable_when_disabled DefaultBackend#return_unavailable_when_disabled}
  */
  readonly returnUnavailableWhenDisabled?: boolean | cdktf.IResolvable;
  /**
  * Period when samples are flushed to disk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_backend#sample_flush_interval DefaultBackend#sample_flush_interval}
  */
  readonly sampleFlushInterval?: string;
  /**
  * Defines the base DNs of the subtrees in which the schema information is published in addition to the value included in the base-dn property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_backend#schema_entry_dn DefaultBackend#schema_entry_dn}
  */
  readonly schemaEntryDn?: string[];
  /**
  * Determines whether the Directory Server enters a DEGRADED state when this Local DB Backend has an index whose contents cannot be trusted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_backend#set_degraded_alert_for_untrusted_index DefaultBackend#set_degraded_alert_for_untrusted_index}
  */
  readonly setDegradedAlertForUntrustedIndex?: boolean | cdktf.IResolvable;
  /**
  * Determines whether the Directory Server enters a DEGRADED state (and sends a corresponding alert) when this Backend is disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_backend#set_degraded_alert_when_disabled DefaultBackend#set_degraded_alert_when_disabled}
  */
  readonly setDegradedAlertWhenDisabled?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether to treat all attributes in the schema entry as if they were user attributes regardless of their configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_backend#show_all_attributes DefaultBackend#show_all_attributes}
  */
  readonly showAllAttributes?: boolean | cdktf.IResolvable;
  /**
  * Supported in PingDirectory product version 10.1.0.0+. Specifies the length of time to cache the candidate ID set used for indexed search operations including the simple paged results control.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_backend#simple_paged_results_id_set_cache_duration DefaultBackend#simple_paged_results_id_set_cache_duration}
  */
  readonly simplePagedResultsIdSetCacheDuration?: string;
  /**
  * Specifies the condition under which to acquire a single-writer lock to ensure that the associated operation will be the only write in progress at the time the lock is held. The single-writer lock can help avoid problems that result from database lock conflicts that arise between two write operations being processed at the same time in the same backend. This will not have any effect on the read operations processed while the write is in progress.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_backend#single_writer_lock_behavior DefaultBackend#single_writer_lock_behavior}
  */
  readonly singleWriterLockBehavior?: string;
  /**
  * Specifies which operations performed on soft-deleted entries will appear in the changelog.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_backend#soft_delete_entry_included_operation DefaultBackend#soft_delete_entry_included_operation}
  */
  readonly softDeleteEntryIncludedOperation?: string[];
  /**
  * Specifies the path to the directory that will be used to store queued samples.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_backend#storage_dir DefaultBackend#storage_dir}
  */
  readonly storageDir?: string;
  /**
  * Specifies the maximum number of entries that may be deleted from the backend when using the subtree delete control.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_backend#subtree_delete_size_limit DefaultBackend#subtree_delete_size_limit}
  */
  readonly subtreeDeleteSizeLimit?: number;
  /**
  * Supported in PingDirectory product version 10.1.0.0+. Specifies the maximum number of entries that may exist below an entry targeted by a modify DN operation. This includes both direct and indirect subordinates (to any depth), although the entry at the top of the subtree (the one directly targeted by the modify DN operation) is not included in this count.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_backend#subtree_modify_dn_size_limit DefaultBackend#subtree_modify_dn_size_limit}
  */
  readonly subtreeModifyDnSizeLimit?: number;
  /**
  * Specifies which system index(es) should be primed when the backend is initialized.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_backend#system_index_to_prime DefaultBackend#system_index_to_prime}
  */
  readonly systemIndexToPrime?: string[];
  /**
  * Specifies the system index(es) for which internal database nodes only (i.e., the database keys but not values) should be primed when the backend is initialized.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_backend#system_index_to_prime_internal_nodes_only DefaultBackend#system_index_to_prime_internal_nodes_only}
  */
  readonly systemIndexToPrimeInternalNodesOnly?: string[];
  /**
  * The changelog database is allowed to grow up to this size on disk even if changes are older than the configured changelog-maximum-age.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_backend#target_database_size DefaultBackend#target_database_size}
  */
  readonly targetDatabaseSize?: string;
  /**
  * Specifies the path to the backing file for storing information about the tasks configured in the server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_backend#task_backing_file DefaultBackend#task_backing_file}
  */
  readonly taskBackingFile?: string;
  /**
  * Specifies the length of time that task entries should be retained after processing on the associated task has been completed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_backend#task_retention_time DefaultBackend#task_retention_time}
  */
  readonly taskRetentionTime?: string;
  /**
  * Specifies the path to the file that stores the trust information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_backend#trust_store_file DefaultBackend#trust_store_file}
  */
  readonly trustStoreFile?: string;
  /**
  * Specifies the clear-text PIN needed to access the Trust Store Backend.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_backend#trust_store_pin DefaultBackend#trust_store_pin}
  */
  readonly trustStorePin?: string;
  /**
  * Specifies the path to the text file whose only contents should be a single line containing the clear-text PIN needed to access the Trust Store Backend.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_backend#trust_store_pin_file DefaultBackend#trust_store_pin_file}
  */
  readonly trustStorePinFile?: string;
  /**
  * The passphrase provider to use to obtain the clear-text PIN needed to access the Trust Store Backend.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_backend#trust_store_pin_passphrase_provider DefaultBackend#trust_store_pin_passphrase_provider}
  */
  readonly trustStorePinPassphraseProvider?: string;
  /**
  * Specifies the format for the data in the key store file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_backend#trust_store_type DefaultBackend#trust_store_type}
  */
  readonly trustStoreType?: string;
  /**
  * The criteria that will be used to identify attributes that should be written into the uncached-id2entry database rather than the id2entry database. This will only be used for entries in which the associated uncached-entry-criteria does not indicate that the entire entry should be uncached.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_backend#uncached_attribute_criteria DefaultBackend#uncached_attribute_criteria}
  */
  readonly uncachedAttributeCriteria?: string;
  /**
  * The criteria that will be used to identify entries that should be written into the uncached-id2entry database rather than the id2entry database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_backend#uncached_entry_criteria DefaultBackend#uncached_entry_criteria}
  */
  readonly uncachedEntryCriteria?: string;
  /**
  * Specifies the cache mode that should be used when accessing the records in the uncached-id2entry database, which provides a way to store complete or partial encoded entries with a different (and presumably less memory-intensive) cache mode than records written to id2entry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_backend#uncached_id2entry_cache_mode DefaultBackend#uncached_id2entry_cache_mode}
  */
  readonly uncachedId2EntryCacheMode?: string;
  /**
  * Specifies whether the changelog should provide enough information to be able to revert the changes if desired.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_backend#use_reversible_form DefaultBackend#use_reversible_form}
  */
  readonly useReversibleForm?: boolean | cdktf.IResolvable;
  /**
  * Specifies the behavior that the backend should use when processing write operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_backend#writability_mode DefaultBackend#writability_mode}
  */
  readonly writabilityMode?: string;
  /**
  * Specifies whether values of creatorsName, createTimestamp, modifiersName and modifyTimestamp attributes will be written to changelog entries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_backend#write_lastmod_attributes DefaultBackend#write_lastmod_attributes}
  */
  readonly writeLastmodAttributes?: boolean | cdktf.IResolvable;
}
export interface DefaultBackendRequiredActions {
}

export function defaultBackendRequiredActionsToTerraform(struct?: DefaultBackendRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function defaultBackendRequiredActionsToHclTerraform(struct?: DefaultBackendRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DefaultBackendRequiredActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DefaultBackendRequiredActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultBackendRequiredActions | undefined) {
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

export class DefaultBackendRequiredActionsList extends cdktf.ComplexList {

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
  public get(index: number): DefaultBackendRequiredActionsOutputReference {
    return new DefaultBackendRequiredActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_backend pingdirectory_default_backend}
*/
export class DefaultBackend extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_default_backend";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DefaultBackend resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DefaultBackend to import
  * @param importFromId The id of the existing DefaultBackend that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_backend#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DefaultBackend to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_default_backend", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_backend pingdirectory_default_backend} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DefaultBackendConfig
  */
  public constructor(scope: Construct, id: string, config: DefaultBackendConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_default_backend',
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
    this._alarmRetentionTime = config.alarmRetentionTime;
    this._alertRetentionTime = config.alertRetentionTime;
    this._applyAccessControlsToChangelogEntryContents = config.applyAccessControlsToChangelogEntryContents;
    this._backendId = config.backendId;
    this._backgroundPrime = config.backgroundPrime;
    this._backupDirectory = config.backupDirectory;
    this._backupFilePermissions = config.backupFilePermissions;
    this._baseDn = config.baseDn;
    this._changelogDeletedEntryExcludeAttribute = config.changelogDeletedEntryExcludeAttribute;
    this._changelogDeletedEntryIncludeAttribute = config.changelogDeletedEntryIncludeAttribute;
    this._changelogEntryExcludeBaseDn = config.changelogEntryExcludeBaseDn;
    this._changelogEntryExcludeFilter = config.changelogEntryExcludeFilter;
    this._changelogEntryIncludeBaseDn = config.changelogEntryIncludeBaseDn;
    this._changelogEntryIncludeFilter = config.changelogEntryIncludeFilter;
    this._changelogExcludeAttribute = config.changelogExcludeAttribute;
    this._changelogIncludeAttribute = config.changelogIncludeAttribute;
    this._changelogIncludeKeyAttribute = config.changelogIncludeKeyAttribute;
    this._changelogMaxBeforeAfterValues = config.changelogMaxBeforeAfterValues;
    this._changelogMaximumAge = config.changelogMaximumAge;
    this._changelogPurgeBatchSize = config.changelogPurgeBatchSize;
    this._changelogWriteBatchSize = config.changelogWriteBatchSize;
    this._changelogWriteQueueCapacity = config.changelogWriteQueueCapacity;
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
    this._disabledAlertType = config.disabledAlertType;
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
    this._includeVirtualAttributes = config.includeVirtualAttributes;
    this._indexEntryLimit = config.indexEntryLimit;
    this._indexExcludeAttribute = config.indexExcludeAttribute;
    this._indexIncludeAttribute = config.indexIncludeAttribute;
    this._insignificantConfigArchiveAttribute = config.insignificantConfigArchiveAttribute;
    this._insignificantConfigArchiveBaseDn = config.insignificantConfigArchiveBaseDn;
    this._isPrivateBackend = config.isPrivateBackend;
    this._jeProperty = config.jeProperty;
    this._ldifFile = config.ldifFile;
    this._maintainConfigArchive = config.maintainConfigArchive;
    this._maxAlarms = config.maxAlarms;
    this._maxAlerts = config.maxAlerts;
    this._maxConfigArchiveCount = config.maxConfigArchiveCount;
    this._maximumFinalTaskLogMessagesToRetain = config.maximumFinalTaskLogMessagesToRetain;
    this._maximumInitialTaskLogMessagesToRetain = config.maximumInitialTaskLogMessagesToRetain;
    this._metricsDir = config.metricsDir;
    this._mirroredSubtreeEntryUpdateTimeout = config.mirroredSubtreeEntryUpdateTimeout;
    this._mirroredSubtreePeerPollingInterval = config.mirroredSubtreePeerPollingInterval;
    this._mirroredSubtreeSearchTimeout = config.mirroredSubtreeSearchTimeout;
    this._notificationManager = config.notificationManager;
    this._notificationSenderAddress = config.notificationSenderAddress;
    this._numRecentChanges = config.numRecentChanges;
    this._offlineProcessDatabaseOpenTimeout = config.offlineProcessDatabaseOpenTimeout;
    this._primeAllIndexes = config.primeAllIndexes;
    this._primeMethod = config.primeMethod;
    this._primeThreadCount = config.primeThreadCount;
    this._primeTimeLimit = config.primeTimeLimit;
    this._processFiltersWithUndefinedAttributeTypes = config.processFiltersWithUndefinedAttributeTypes;
    this._readOnlySchemaFile = config.readOnlySchemaFile;
    this._reportExcludedChangelogAttributes = config.reportExcludedChangelogAttributes;
    this._retentionPolicy = config.retentionPolicy;
    this._returnUnavailableForUntrustedIndex = config.returnUnavailableForUntrustedIndex;
    this._returnUnavailableWhenDisabled = config.returnUnavailableWhenDisabled;
    this._sampleFlushInterval = config.sampleFlushInterval;
    this._schemaEntryDn = config.schemaEntryDn;
    this._setDegradedAlertForUntrustedIndex = config.setDegradedAlertForUntrustedIndex;
    this._setDegradedAlertWhenDisabled = config.setDegradedAlertWhenDisabled;
    this._showAllAttributes = config.showAllAttributes;
    this._simplePagedResultsIdSetCacheDuration = config.simplePagedResultsIdSetCacheDuration;
    this._singleWriterLockBehavior = config.singleWriterLockBehavior;
    this._softDeleteEntryIncludedOperation = config.softDeleteEntryIncludedOperation;
    this._storageDir = config.storageDir;
    this._subtreeDeleteSizeLimit = config.subtreeDeleteSizeLimit;
    this._subtreeModifyDnSizeLimit = config.subtreeModifyDnSizeLimit;
    this._systemIndexToPrime = config.systemIndexToPrime;
    this._systemIndexToPrimeInternalNodesOnly = config.systemIndexToPrimeInternalNodesOnly;
    this._targetDatabaseSize = config.targetDatabaseSize;
    this._taskBackingFile = config.taskBackingFile;
    this._taskRetentionTime = config.taskRetentionTime;
    this._trustStoreFile = config.trustStoreFile;
    this._trustStorePin = config.trustStorePin;
    this._trustStorePinFile = config.trustStorePinFile;
    this._trustStorePinPassphraseProvider = config.trustStorePinPassphraseProvider;
    this._trustStoreType = config.trustStoreType;
    this._uncachedAttributeCriteria = config.uncachedAttributeCriteria;
    this._uncachedEntryCriteria = config.uncachedEntryCriteria;
    this._uncachedId2EntryCacheMode = config.uncachedId2EntryCacheMode;
    this._useReversibleForm = config.useReversibleForm;
    this._writabilityMode = config.writabilityMode;
    this._writeLastmodAttributes = config.writeLastmodAttributes;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alarm_retention_time - computed: true, optional: true, required: false
  private _alarmRetentionTime?: string; 
  public get alarmRetentionTime() {
    return this.getStringAttribute('alarm_retention_time');
  }
  public set alarmRetentionTime(value: string) {
    this._alarmRetentionTime = value;
  }
  public resetAlarmRetentionTime() {
    this._alarmRetentionTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmRetentionTimeInput() {
    return this._alarmRetentionTime;
  }

  // alert_retention_time - computed: true, optional: true, required: false
  private _alertRetentionTime?: string; 
  public get alertRetentionTime() {
    return this.getStringAttribute('alert_retention_time');
  }
  public set alertRetentionTime(value: string) {
    this._alertRetentionTime = value;
  }
  public resetAlertRetentionTime() {
    this._alertRetentionTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertRetentionTimeInput() {
    return this._alertRetentionTime;
  }

  // apply_access_controls_to_changelog_entry_contents - computed: true, optional: true, required: false
  private _applyAccessControlsToChangelogEntryContents?: boolean | cdktf.IResolvable; 
  public get applyAccessControlsToChangelogEntryContents() {
    return this.getBooleanAttribute('apply_access_controls_to_changelog_entry_contents');
  }
  public set applyAccessControlsToChangelogEntryContents(value: boolean | cdktf.IResolvable) {
    this._applyAccessControlsToChangelogEntryContents = value;
  }
  public resetApplyAccessControlsToChangelogEntryContents() {
    this._applyAccessControlsToChangelogEntryContents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applyAccessControlsToChangelogEntryContentsInput() {
    return this._applyAccessControlsToChangelogEntryContents;
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

  // backup_directory - computed: true, optional: true, required: false
  private _backupDirectory?: string[]; 
  public get backupDirectory() {
    return cdktf.Fn.tolist(this.getListAttribute('backup_directory'));
  }
  public set backupDirectory(value: string[]) {
    this._backupDirectory = value;
  }
  public resetBackupDirectory() {
    this._backupDirectory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupDirectoryInput() {
    return this._backupDirectory;
  }

  // backup_file_permissions - computed: true, optional: true, required: false
  private _backupFilePermissions?: string; 
  public get backupFilePermissions() {
    return this.getStringAttribute('backup_file_permissions');
  }
  public set backupFilePermissions(value: string) {
    this._backupFilePermissions = value;
  }
  public resetBackupFilePermissions() {
    this._backupFilePermissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupFilePermissionsInput() {
    return this._backupFilePermissions;
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

  // changelog_deleted_entry_exclude_attribute - computed: true, optional: true, required: false
  private _changelogDeletedEntryExcludeAttribute?: string[]; 
  public get changelogDeletedEntryExcludeAttribute() {
    return cdktf.Fn.tolist(this.getListAttribute('changelog_deleted_entry_exclude_attribute'));
  }
  public set changelogDeletedEntryExcludeAttribute(value: string[]) {
    this._changelogDeletedEntryExcludeAttribute = value;
  }
  public resetChangelogDeletedEntryExcludeAttribute() {
    this._changelogDeletedEntryExcludeAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get changelogDeletedEntryExcludeAttributeInput() {
    return this._changelogDeletedEntryExcludeAttribute;
  }

  // changelog_deleted_entry_include_attribute - computed: true, optional: true, required: false
  private _changelogDeletedEntryIncludeAttribute?: string[]; 
  public get changelogDeletedEntryIncludeAttribute() {
    return cdktf.Fn.tolist(this.getListAttribute('changelog_deleted_entry_include_attribute'));
  }
  public set changelogDeletedEntryIncludeAttribute(value: string[]) {
    this._changelogDeletedEntryIncludeAttribute = value;
  }
  public resetChangelogDeletedEntryIncludeAttribute() {
    this._changelogDeletedEntryIncludeAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get changelogDeletedEntryIncludeAttributeInput() {
    return this._changelogDeletedEntryIncludeAttribute;
  }

  // changelog_entry_exclude_base_dn - computed: true, optional: true, required: false
  private _changelogEntryExcludeBaseDn?: string[]; 
  public get changelogEntryExcludeBaseDn() {
    return cdktf.Fn.tolist(this.getListAttribute('changelog_entry_exclude_base_dn'));
  }
  public set changelogEntryExcludeBaseDn(value: string[]) {
    this._changelogEntryExcludeBaseDn = value;
  }
  public resetChangelogEntryExcludeBaseDn() {
    this._changelogEntryExcludeBaseDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get changelogEntryExcludeBaseDnInput() {
    return this._changelogEntryExcludeBaseDn;
  }

  // changelog_entry_exclude_filter - computed: true, optional: true, required: false
  private _changelogEntryExcludeFilter?: string[]; 
  public get changelogEntryExcludeFilter() {
    return cdktf.Fn.tolist(this.getListAttribute('changelog_entry_exclude_filter'));
  }
  public set changelogEntryExcludeFilter(value: string[]) {
    this._changelogEntryExcludeFilter = value;
  }
  public resetChangelogEntryExcludeFilter() {
    this._changelogEntryExcludeFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get changelogEntryExcludeFilterInput() {
    return this._changelogEntryExcludeFilter;
  }

  // changelog_entry_include_base_dn - computed: true, optional: true, required: false
  private _changelogEntryIncludeBaseDn?: string[]; 
  public get changelogEntryIncludeBaseDn() {
    return cdktf.Fn.tolist(this.getListAttribute('changelog_entry_include_base_dn'));
  }
  public set changelogEntryIncludeBaseDn(value: string[]) {
    this._changelogEntryIncludeBaseDn = value;
  }
  public resetChangelogEntryIncludeBaseDn() {
    this._changelogEntryIncludeBaseDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get changelogEntryIncludeBaseDnInput() {
    return this._changelogEntryIncludeBaseDn;
  }

  // changelog_entry_include_filter - computed: true, optional: true, required: false
  private _changelogEntryIncludeFilter?: string[]; 
  public get changelogEntryIncludeFilter() {
    return cdktf.Fn.tolist(this.getListAttribute('changelog_entry_include_filter'));
  }
  public set changelogEntryIncludeFilter(value: string[]) {
    this._changelogEntryIncludeFilter = value;
  }
  public resetChangelogEntryIncludeFilter() {
    this._changelogEntryIncludeFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get changelogEntryIncludeFilterInput() {
    return this._changelogEntryIncludeFilter;
  }

  // changelog_exclude_attribute - computed: true, optional: true, required: false
  private _changelogExcludeAttribute?: string[]; 
  public get changelogExcludeAttribute() {
    return cdktf.Fn.tolist(this.getListAttribute('changelog_exclude_attribute'));
  }
  public set changelogExcludeAttribute(value: string[]) {
    this._changelogExcludeAttribute = value;
  }
  public resetChangelogExcludeAttribute() {
    this._changelogExcludeAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get changelogExcludeAttributeInput() {
    return this._changelogExcludeAttribute;
  }

  // changelog_include_attribute - computed: true, optional: true, required: false
  private _changelogIncludeAttribute?: string[]; 
  public get changelogIncludeAttribute() {
    return cdktf.Fn.tolist(this.getListAttribute('changelog_include_attribute'));
  }
  public set changelogIncludeAttribute(value: string[]) {
    this._changelogIncludeAttribute = value;
  }
  public resetChangelogIncludeAttribute() {
    this._changelogIncludeAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get changelogIncludeAttributeInput() {
    return this._changelogIncludeAttribute;
  }

  // changelog_include_key_attribute - computed: true, optional: true, required: false
  private _changelogIncludeKeyAttribute?: string[]; 
  public get changelogIncludeKeyAttribute() {
    return cdktf.Fn.tolist(this.getListAttribute('changelog_include_key_attribute'));
  }
  public set changelogIncludeKeyAttribute(value: string[]) {
    this._changelogIncludeKeyAttribute = value;
  }
  public resetChangelogIncludeKeyAttribute() {
    this._changelogIncludeKeyAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get changelogIncludeKeyAttributeInput() {
    return this._changelogIncludeKeyAttribute;
  }

  // changelog_max_before_after_values - computed: true, optional: true, required: false
  private _changelogMaxBeforeAfterValues?: number; 
  public get changelogMaxBeforeAfterValues() {
    return this.getNumberAttribute('changelog_max_before_after_values');
  }
  public set changelogMaxBeforeAfterValues(value: number) {
    this._changelogMaxBeforeAfterValues = value;
  }
  public resetChangelogMaxBeforeAfterValues() {
    this._changelogMaxBeforeAfterValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get changelogMaxBeforeAfterValuesInput() {
    return this._changelogMaxBeforeAfterValues;
  }

  // changelog_maximum_age - computed: true, optional: true, required: false
  private _changelogMaximumAge?: string; 
  public get changelogMaximumAge() {
    return this.getStringAttribute('changelog_maximum_age');
  }
  public set changelogMaximumAge(value: string) {
    this._changelogMaximumAge = value;
  }
  public resetChangelogMaximumAge() {
    this._changelogMaximumAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get changelogMaximumAgeInput() {
    return this._changelogMaximumAge;
  }

  // changelog_purge_batch_size - computed: true, optional: true, required: false
  private _changelogPurgeBatchSize?: number; 
  public get changelogPurgeBatchSize() {
    return this.getNumberAttribute('changelog_purge_batch_size');
  }
  public set changelogPurgeBatchSize(value: number) {
    this._changelogPurgeBatchSize = value;
  }
  public resetChangelogPurgeBatchSize() {
    this._changelogPurgeBatchSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get changelogPurgeBatchSizeInput() {
    return this._changelogPurgeBatchSize;
  }

  // changelog_write_batch_size - computed: true, optional: true, required: false
  private _changelogWriteBatchSize?: number; 
  public get changelogWriteBatchSize() {
    return this.getNumberAttribute('changelog_write_batch_size');
  }
  public set changelogWriteBatchSize(value: number) {
    this._changelogWriteBatchSize = value;
  }
  public resetChangelogWriteBatchSize() {
    this._changelogWriteBatchSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get changelogWriteBatchSizeInput() {
    return this._changelogWriteBatchSize;
  }

  // changelog_write_queue_capacity - computed: true, optional: true, required: false
  private _changelogWriteQueueCapacity?: number; 
  public get changelogWriteQueueCapacity() {
    return this.getNumberAttribute('changelog_write_queue_capacity');
  }
  public set changelogWriteQueueCapacity(value: number) {
    this._changelogWriteQueueCapacity = value;
  }
  public resetChangelogWriteQueueCapacity() {
    this._changelogWriteQueueCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get changelogWriteQueueCapacityInput() {
    return this._changelogWriteQueueCapacity;
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

  // disabled_alert_type - computed: true, optional: true, required: false
  private _disabledAlertType?: string[]; 
  public get disabledAlertType() {
    return cdktf.Fn.tolist(this.getListAttribute('disabled_alert_type'));
  }
  public set disabledAlertType(value: string[]) {
    this._disabledAlertType = value;
  }
  public resetDisabledAlertType() {
    this._disabledAlertType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledAlertTypeInput() {
    return this._disabledAlertType;
  }

  // dn2id_cache_mode - computed: true, optional: true, required: false
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

  // dn2uri_cache_mode - computed: true, optional: true, required: false
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

  // id2children_cache_mode - computed: true, optional: true, required: false
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

  // id2children_index_entry_limit - computed: true, optional: true, required: false
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

  // id2entry_cache_mode - computed: true, optional: true, required: false
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

  // id2subtree_cache_mode - computed: true, optional: true, required: false
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

  // id2subtree_index_entry_limit - computed: true, optional: true, required: false
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

  // include_virtual_attributes - computed: true, optional: true, required: false
  private _includeVirtualAttributes?: string[]; 
  public get includeVirtualAttributes() {
    return cdktf.Fn.tolist(this.getListAttribute('include_virtual_attributes'));
  }
  public set includeVirtualAttributes(value: string[]) {
    this._includeVirtualAttributes = value;
  }
  public resetIncludeVirtualAttributes() {
    this._includeVirtualAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeVirtualAttributesInput() {
    return this._includeVirtualAttributes;
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

  // index_exclude_attribute - computed: true, optional: true, required: false
  private _indexExcludeAttribute?: string[]; 
  public get indexExcludeAttribute() {
    return cdktf.Fn.tolist(this.getListAttribute('index_exclude_attribute'));
  }
  public set indexExcludeAttribute(value: string[]) {
    this._indexExcludeAttribute = value;
  }
  public resetIndexExcludeAttribute() {
    this._indexExcludeAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexExcludeAttributeInput() {
    return this._indexExcludeAttribute;
  }

  // index_include_attribute - computed: true, optional: true, required: false
  private _indexIncludeAttribute?: string[]; 
  public get indexIncludeAttribute() {
    return cdktf.Fn.tolist(this.getListAttribute('index_include_attribute'));
  }
  public set indexIncludeAttribute(value: string[]) {
    this._indexIncludeAttribute = value;
  }
  public resetIndexIncludeAttribute() {
    this._indexIncludeAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexIncludeAttributeInput() {
    return this._indexIncludeAttribute;
  }

  // insignificant_config_archive_attribute - computed: true, optional: true, required: false
  private _insignificantConfigArchiveAttribute?: string[]; 
  public get insignificantConfigArchiveAttribute() {
    return cdktf.Fn.tolist(this.getListAttribute('insignificant_config_archive_attribute'));
  }
  public set insignificantConfigArchiveAttribute(value: string[]) {
    this._insignificantConfigArchiveAttribute = value;
  }
  public resetInsignificantConfigArchiveAttribute() {
    this._insignificantConfigArchiveAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insignificantConfigArchiveAttributeInput() {
    return this._insignificantConfigArchiveAttribute;
  }

  // insignificant_config_archive_base_dn - computed: true, optional: true, required: false
  private _insignificantConfigArchiveBaseDn?: string[]; 
  public get insignificantConfigArchiveBaseDn() {
    return cdktf.Fn.tolist(this.getListAttribute('insignificant_config_archive_base_dn'));
  }
  public set insignificantConfigArchiveBaseDn(value: string[]) {
    this._insignificantConfigArchiveBaseDn = value;
  }
  public resetInsignificantConfigArchiveBaseDn() {
    this._insignificantConfigArchiveBaseDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insignificantConfigArchiveBaseDnInput() {
    return this._insignificantConfigArchiveBaseDn;
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

  // ldif_file - computed: true, optional: true, required: false
  private _ldifFile?: string; 
  public get ldifFile() {
    return this.getStringAttribute('ldif_file');
  }
  public set ldifFile(value: string) {
    this._ldifFile = value;
  }
  public resetLdifFile() {
    this._ldifFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldifFileInput() {
    return this._ldifFile;
  }

  // maintain_config_archive - computed: true, optional: true, required: false
  private _maintainConfigArchive?: boolean | cdktf.IResolvable; 
  public get maintainConfigArchive() {
    return this.getBooleanAttribute('maintain_config_archive');
  }
  public set maintainConfigArchive(value: boolean | cdktf.IResolvable) {
    this._maintainConfigArchive = value;
  }
  public resetMaintainConfigArchive() {
    this._maintainConfigArchive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintainConfigArchiveInput() {
    return this._maintainConfigArchive;
  }

  // max_alarms - computed: true, optional: true, required: false
  private _maxAlarms?: number; 
  public get maxAlarms() {
    return this.getNumberAttribute('max_alarms');
  }
  public set maxAlarms(value: number) {
    this._maxAlarms = value;
  }
  public resetMaxAlarms() {
    this._maxAlarms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAlarmsInput() {
    return this._maxAlarms;
  }

  // max_alerts - computed: true, optional: true, required: false
  private _maxAlerts?: number; 
  public get maxAlerts() {
    return this.getNumberAttribute('max_alerts');
  }
  public set maxAlerts(value: number) {
    this._maxAlerts = value;
  }
  public resetMaxAlerts() {
    this._maxAlerts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAlertsInput() {
    return this._maxAlerts;
  }

  // max_config_archive_count - computed: true, optional: true, required: false
  private _maxConfigArchiveCount?: number; 
  public get maxConfigArchiveCount() {
    return this.getNumberAttribute('max_config_archive_count');
  }
  public set maxConfigArchiveCount(value: number) {
    this._maxConfigArchiveCount = value;
  }
  public resetMaxConfigArchiveCount() {
    this._maxConfigArchiveCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConfigArchiveCountInput() {
    return this._maxConfigArchiveCount;
  }

  // maximum_final_task_log_messages_to_retain - computed: true, optional: true, required: false
  private _maximumFinalTaskLogMessagesToRetain?: number; 
  public get maximumFinalTaskLogMessagesToRetain() {
    return this.getNumberAttribute('maximum_final_task_log_messages_to_retain');
  }
  public set maximumFinalTaskLogMessagesToRetain(value: number) {
    this._maximumFinalTaskLogMessagesToRetain = value;
  }
  public resetMaximumFinalTaskLogMessagesToRetain() {
    this._maximumFinalTaskLogMessagesToRetain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumFinalTaskLogMessagesToRetainInput() {
    return this._maximumFinalTaskLogMessagesToRetain;
  }

  // maximum_initial_task_log_messages_to_retain - computed: true, optional: true, required: false
  private _maximumInitialTaskLogMessagesToRetain?: number; 
  public get maximumInitialTaskLogMessagesToRetain() {
    return this.getNumberAttribute('maximum_initial_task_log_messages_to_retain');
  }
  public set maximumInitialTaskLogMessagesToRetain(value: number) {
    this._maximumInitialTaskLogMessagesToRetain = value;
  }
  public resetMaximumInitialTaskLogMessagesToRetain() {
    this._maximumInitialTaskLogMessagesToRetain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumInitialTaskLogMessagesToRetainInput() {
    return this._maximumInitialTaskLogMessagesToRetain;
  }

  // metrics_dir - computed: true, optional: true, required: false
  private _metricsDir?: string; 
  public get metricsDir() {
    return this.getStringAttribute('metrics_dir');
  }
  public set metricsDir(value: string) {
    this._metricsDir = value;
  }
  public resetMetricsDir() {
    this._metricsDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsDirInput() {
    return this._metricsDir;
  }

  // mirrored_subtree_entry_update_timeout - computed: true, optional: true, required: false
  private _mirroredSubtreeEntryUpdateTimeout?: string; 
  public get mirroredSubtreeEntryUpdateTimeout() {
    return this.getStringAttribute('mirrored_subtree_entry_update_timeout');
  }
  public set mirroredSubtreeEntryUpdateTimeout(value: string) {
    this._mirroredSubtreeEntryUpdateTimeout = value;
  }
  public resetMirroredSubtreeEntryUpdateTimeout() {
    this._mirroredSubtreeEntryUpdateTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mirroredSubtreeEntryUpdateTimeoutInput() {
    return this._mirroredSubtreeEntryUpdateTimeout;
  }

  // mirrored_subtree_peer_polling_interval - computed: true, optional: true, required: false
  private _mirroredSubtreePeerPollingInterval?: string; 
  public get mirroredSubtreePeerPollingInterval() {
    return this.getStringAttribute('mirrored_subtree_peer_polling_interval');
  }
  public set mirroredSubtreePeerPollingInterval(value: string) {
    this._mirroredSubtreePeerPollingInterval = value;
  }
  public resetMirroredSubtreePeerPollingInterval() {
    this._mirroredSubtreePeerPollingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mirroredSubtreePeerPollingIntervalInput() {
    return this._mirroredSubtreePeerPollingInterval;
  }

  // mirrored_subtree_search_timeout - computed: true, optional: true, required: false
  private _mirroredSubtreeSearchTimeout?: string; 
  public get mirroredSubtreeSearchTimeout() {
    return this.getStringAttribute('mirrored_subtree_search_timeout');
  }
  public set mirroredSubtreeSearchTimeout(value: string) {
    this._mirroredSubtreeSearchTimeout = value;
  }
  public resetMirroredSubtreeSearchTimeout() {
    this._mirroredSubtreeSearchTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mirroredSubtreeSearchTimeoutInput() {
    return this._mirroredSubtreeSearchTimeout;
  }

  // notification_manager - computed: true, optional: true, required: false
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

  // notification_sender_address - computed: true, optional: true, required: false
  private _notificationSenderAddress?: string; 
  public get notificationSenderAddress() {
    return this.getStringAttribute('notification_sender_address');
  }
  public set notificationSenderAddress(value: string) {
    this._notificationSenderAddress = value;
  }
  public resetNotificationSenderAddress() {
    this._notificationSenderAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationSenderAddressInput() {
    return this._notificationSenderAddress;
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

  // read_only_schema_file - computed: true, optional: true, required: false
  private _readOnlySchemaFile?: string[]; 
  public get readOnlySchemaFile() {
    return cdktf.Fn.tolist(this.getListAttribute('read_only_schema_file'));
  }
  public set readOnlySchemaFile(value: string[]) {
    this._readOnlySchemaFile = value;
  }
  public resetReadOnlySchemaFile() {
    this._readOnlySchemaFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlySchemaFileInput() {
    return this._readOnlySchemaFile;
  }

  // report_excluded_changelog_attributes - computed: true, optional: true, required: false
  private _reportExcludedChangelogAttributes?: string; 
  public get reportExcludedChangelogAttributes() {
    return this.getStringAttribute('report_excluded_changelog_attributes');
  }
  public set reportExcludedChangelogAttributes(value: string) {
    this._reportExcludedChangelogAttributes = value;
  }
  public resetReportExcludedChangelogAttributes() {
    this._reportExcludedChangelogAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reportExcludedChangelogAttributesInput() {
    return this._reportExcludedChangelogAttributes;
  }

  // required_actions - computed: true, optional: false, required: false
  private _requiredActions = new DefaultBackendRequiredActionsList(this, "required_actions", true);
  public get requiredActions() {
    return this._requiredActions;
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

  // sample_flush_interval - computed: true, optional: true, required: false
  private _sampleFlushInterval?: string; 
  public get sampleFlushInterval() {
    return this.getStringAttribute('sample_flush_interval');
  }
  public set sampleFlushInterval(value: string) {
    this._sampleFlushInterval = value;
  }
  public resetSampleFlushInterval() {
    this._sampleFlushInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sampleFlushIntervalInput() {
    return this._sampleFlushInterval;
  }

  // schema_entry_dn - computed: true, optional: true, required: false
  private _schemaEntryDn?: string[]; 
  public get schemaEntryDn() {
    return cdktf.Fn.tolist(this.getListAttribute('schema_entry_dn'));
  }
  public set schemaEntryDn(value: string[]) {
    this._schemaEntryDn = value;
  }
  public resetSchemaEntryDn() {
    this._schemaEntryDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaEntryDnInput() {
    return this._schemaEntryDn;
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

  // show_all_attributes - computed: true, optional: true, required: false
  private _showAllAttributes?: boolean | cdktf.IResolvable; 
  public get showAllAttributes() {
    return this.getBooleanAttribute('show_all_attributes');
  }
  public set showAllAttributes(value: boolean | cdktf.IResolvable) {
    this._showAllAttributes = value;
  }
  public resetShowAllAttributes() {
    this._showAllAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showAllAttributesInput() {
    return this._showAllAttributes;
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

  // soft_delete_entry_included_operation - computed: true, optional: true, required: false
  private _softDeleteEntryIncludedOperation?: string[]; 
  public get softDeleteEntryIncludedOperation() {
    return cdktf.Fn.tolist(this.getListAttribute('soft_delete_entry_included_operation'));
  }
  public set softDeleteEntryIncludedOperation(value: string[]) {
    this._softDeleteEntryIncludedOperation = value;
  }
  public resetSoftDeleteEntryIncludedOperation() {
    this._softDeleteEntryIncludedOperation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get softDeleteEntryIncludedOperationInput() {
    return this._softDeleteEntryIncludedOperation;
  }

  // storage_dir - computed: true, optional: true, required: false
  private _storageDir?: string; 
  public get storageDir() {
    return this.getStringAttribute('storage_dir');
  }
  public set storageDir(value: string) {
    this._storageDir = value;
  }
  public resetStorageDir() {
    this._storageDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageDirInput() {
    return this._storageDir;
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

  // target_database_size - computed: true, optional: true, required: false
  private _targetDatabaseSize?: string; 
  public get targetDatabaseSize() {
    return this.getStringAttribute('target_database_size');
  }
  public set targetDatabaseSize(value: string) {
    this._targetDatabaseSize = value;
  }
  public resetTargetDatabaseSize() {
    this._targetDatabaseSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetDatabaseSizeInput() {
    return this._targetDatabaseSize;
  }

  // task_backing_file - computed: true, optional: true, required: false
  private _taskBackingFile?: string; 
  public get taskBackingFile() {
    return this.getStringAttribute('task_backing_file');
  }
  public set taskBackingFile(value: string) {
    this._taskBackingFile = value;
  }
  public resetTaskBackingFile() {
    this._taskBackingFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskBackingFileInput() {
    return this._taskBackingFile;
  }

  // task_retention_time - computed: true, optional: true, required: false
  private _taskRetentionTime?: string; 
  public get taskRetentionTime() {
    return this.getStringAttribute('task_retention_time');
  }
  public set taskRetentionTime(value: string) {
    this._taskRetentionTime = value;
  }
  public resetTaskRetentionTime() {
    this._taskRetentionTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskRetentionTimeInput() {
    return this._taskRetentionTime;
  }

  // trust_store_file - computed: true, optional: true, required: false
  private _trustStoreFile?: string; 
  public get trustStoreFile() {
    return this.getStringAttribute('trust_store_file');
  }
  public set trustStoreFile(value: string) {
    this._trustStoreFile = value;
  }
  public resetTrustStoreFile() {
    this._trustStoreFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustStoreFileInput() {
    return this._trustStoreFile;
  }

  // trust_store_pin - computed: true, optional: true, required: false
  private _trustStorePin?: string; 
  public get trustStorePin() {
    return this.getStringAttribute('trust_store_pin');
  }
  public set trustStorePin(value: string) {
    this._trustStorePin = value;
  }
  public resetTrustStorePin() {
    this._trustStorePin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustStorePinInput() {
    return this._trustStorePin;
  }

  // trust_store_pin_file - computed: true, optional: true, required: false
  private _trustStorePinFile?: string; 
  public get trustStorePinFile() {
    return this.getStringAttribute('trust_store_pin_file');
  }
  public set trustStorePinFile(value: string) {
    this._trustStorePinFile = value;
  }
  public resetTrustStorePinFile() {
    this._trustStorePinFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustStorePinFileInput() {
    return this._trustStorePinFile;
  }

  // trust_store_pin_passphrase_provider - computed: true, optional: true, required: false
  private _trustStorePinPassphraseProvider?: string; 
  public get trustStorePinPassphraseProvider() {
    return this.getStringAttribute('trust_store_pin_passphrase_provider');
  }
  public set trustStorePinPassphraseProvider(value: string) {
    this._trustStorePinPassphraseProvider = value;
  }
  public resetTrustStorePinPassphraseProvider() {
    this._trustStorePinPassphraseProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustStorePinPassphraseProviderInput() {
    return this._trustStorePinPassphraseProvider;
  }

  // trust_store_type - computed: true, optional: true, required: false
  private _trustStoreType?: string; 
  public get trustStoreType() {
    return this.getStringAttribute('trust_store_type');
  }
  public set trustStoreType(value: string) {
    this._trustStoreType = value;
  }
  public resetTrustStoreType() {
    this._trustStoreType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustStoreTypeInput() {
    return this._trustStoreType;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // uncached_attribute_criteria - computed: true, optional: true, required: false
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

  // uncached_entry_criteria - computed: true, optional: true, required: false
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

  // write_lastmod_attributes - computed: true, optional: true, required: false
  private _writeLastmodAttributes?: boolean | cdktf.IResolvable; 
  public get writeLastmodAttributes() {
    return this.getBooleanAttribute('write_lastmod_attributes');
  }
  public set writeLastmodAttributes(value: boolean | cdktf.IResolvable) {
    this._writeLastmodAttributes = value;
  }
  public resetWriteLastmodAttributes() {
    this._writeLastmodAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeLastmodAttributesInput() {
    return this._writeLastmodAttributes;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alarm_retention_time: cdktf.stringToTerraform(this._alarmRetentionTime),
      alert_retention_time: cdktf.stringToTerraform(this._alertRetentionTime),
      apply_access_controls_to_changelog_entry_contents: cdktf.booleanToTerraform(this._applyAccessControlsToChangelogEntryContents),
      backend_id: cdktf.stringToTerraform(this._backendId),
      background_prime: cdktf.booleanToTerraform(this._backgroundPrime),
      backup_directory: cdktf.listMapper(cdktf.stringToTerraform, false)(this._backupDirectory),
      backup_file_permissions: cdktf.stringToTerraform(this._backupFilePermissions),
      base_dn: cdktf.listMapper(cdktf.stringToTerraform, false)(this._baseDn),
      changelog_deleted_entry_exclude_attribute: cdktf.listMapper(cdktf.stringToTerraform, false)(this._changelogDeletedEntryExcludeAttribute),
      changelog_deleted_entry_include_attribute: cdktf.listMapper(cdktf.stringToTerraform, false)(this._changelogDeletedEntryIncludeAttribute),
      changelog_entry_exclude_base_dn: cdktf.listMapper(cdktf.stringToTerraform, false)(this._changelogEntryExcludeBaseDn),
      changelog_entry_exclude_filter: cdktf.listMapper(cdktf.stringToTerraform, false)(this._changelogEntryExcludeFilter),
      changelog_entry_include_base_dn: cdktf.listMapper(cdktf.stringToTerraform, false)(this._changelogEntryIncludeBaseDn),
      changelog_entry_include_filter: cdktf.listMapper(cdktf.stringToTerraform, false)(this._changelogEntryIncludeFilter),
      changelog_exclude_attribute: cdktf.listMapper(cdktf.stringToTerraform, false)(this._changelogExcludeAttribute),
      changelog_include_attribute: cdktf.listMapper(cdktf.stringToTerraform, false)(this._changelogIncludeAttribute),
      changelog_include_key_attribute: cdktf.listMapper(cdktf.stringToTerraform, false)(this._changelogIncludeKeyAttribute),
      changelog_max_before_after_values: cdktf.numberToTerraform(this._changelogMaxBeforeAfterValues),
      changelog_maximum_age: cdktf.stringToTerraform(this._changelogMaximumAge),
      changelog_purge_batch_size: cdktf.numberToTerraform(this._changelogPurgeBatchSize),
      changelog_write_batch_size: cdktf.numberToTerraform(this._changelogWriteBatchSize),
      changelog_write_queue_capacity: cdktf.numberToTerraform(this._changelogWriteQueueCapacity),
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
      disabled_alert_type: cdktf.listMapper(cdktf.stringToTerraform, false)(this._disabledAlertType),
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
      include_virtual_attributes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._includeVirtualAttributes),
      index_entry_limit: cdktf.numberToTerraform(this._indexEntryLimit),
      index_exclude_attribute: cdktf.listMapper(cdktf.stringToTerraform, false)(this._indexExcludeAttribute),
      index_include_attribute: cdktf.listMapper(cdktf.stringToTerraform, false)(this._indexIncludeAttribute),
      insignificant_config_archive_attribute: cdktf.listMapper(cdktf.stringToTerraform, false)(this._insignificantConfigArchiveAttribute),
      insignificant_config_archive_base_dn: cdktf.listMapper(cdktf.stringToTerraform, false)(this._insignificantConfigArchiveBaseDn),
      is_private_backend: cdktf.booleanToTerraform(this._isPrivateBackend),
      je_property: cdktf.listMapper(cdktf.stringToTerraform, false)(this._jeProperty),
      ldif_file: cdktf.stringToTerraform(this._ldifFile),
      maintain_config_archive: cdktf.booleanToTerraform(this._maintainConfigArchive),
      max_alarms: cdktf.numberToTerraform(this._maxAlarms),
      max_alerts: cdktf.numberToTerraform(this._maxAlerts),
      max_config_archive_count: cdktf.numberToTerraform(this._maxConfigArchiveCount),
      maximum_final_task_log_messages_to_retain: cdktf.numberToTerraform(this._maximumFinalTaskLogMessagesToRetain),
      maximum_initial_task_log_messages_to_retain: cdktf.numberToTerraform(this._maximumInitialTaskLogMessagesToRetain),
      metrics_dir: cdktf.stringToTerraform(this._metricsDir),
      mirrored_subtree_entry_update_timeout: cdktf.stringToTerraform(this._mirroredSubtreeEntryUpdateTimeout),
      mirrored_subtree_peer_polling_interval: cdktf.stringToTerraform(this._mirroredSubtreePeerPollingInterval),
      mirrored_subtree_search_timeout: cdktf.stringToTerraform(this._mirroredSubtreeSearchTimeout),
      notification_manager: cdktf.stringToTerraform(this._notificationManager),
      notification_sender_address: cdktf.stringToTerraform(this._notificationSenderAddress),
      num_recent_changes: cdktf.numberToTerraform(this._numRecentChanges),
      offline_process_database_open_timeout: cdktf.stringToTerraform(this._offlineProcessDatabaseOpenTimeout),
      prime_all_indexes: cdktf.booleanToTerraform(this._primeAllIndexes),
      prime_method: cdktf.listMapper(cdktf.stringToTerraform, false)(this._primeMethod),
      prime_thread_count: cdktf.numberToTerraform(this._primeThreadCount),
      prime_time_limit: cdktf.stringToTerraform(this._primeTimeLimit),
      process_filters_with_undefined_attribute_types: cdktf.booleanToTerraform(this._processFiltersWithUndefinedAttributeTypes),
      read_only_schema_file: cdktf.listMapper(cdktf.stringToTerraform, false)(this._readOnlySchemaFile),
      report_excluded_changelog_attributes: cdktf.stringToTerraform(this._reportExcludedChangelogAttributes),
      retention_policy: cdktf.listMapper(cdktf.stringToTerraform, false)(this._retentionPolicy),
      return_unavailable_for_untrusted_index: cdktf.booleanToTerraform(this._returnUnavailableForUntrustedIndex),
      return_unavailable_when_disabled: cdktf.booleanToTerraform(this._returnUnavailableWhenDisabled),
      sample_flush_interval: cdktf.stringToTerraform(this._sampleFlushInterval),
      schema_entry_dn: cdktf.listMapper(cdktf.stringToTerraform, false)(this._schemaEntryDn),
      set_degraded_alert_for_untrusted_index: cdktf.booleanToTerraform(this._setDegradedAlertForUntrustedIndex),
      set_degraded_alert_when_disabled: cdktf.booleanToTerraform(this._setDegradedAlertWhenDisabled),
      show_all_attributes: cdktf.booleanToTerraform(this._showAllAttributes),
      simple_paged_results_id_set_cache_duration: cdktf.stringToTerraform(this._simplePagedResultsIdSetCacheDuration),
      single_writer_lock_behavior: cdktf.stringToTerraform(this._singleWriterLockBehavior),
      soft_delete_entry_included_operation: cdktf.listMapper(cdktf.stringToTerraform, false)(this._softDeleteEntryIncludedOperation),
      storage_dir: cdktf.stringToTerraform(this._storageDir),
      subtree_delete_size_limit: cdktf.numberToTerraform(this._subtreeDeleteSizeLimit),
      subtree_modify_dn_size_limit: cdktf.numberToTerraform(this._subtreeModifyDnSizeLimit),
      system_index_to_prime: cdktf.listMapper(cdktf.stringToTerraform, false)(this._systemIndexToPrime),
      system_index_to_prime_internal_nodes_only: cdktf.listMapper(cdktf.stringToTerraform, false)(this._systemIndexToPrimeInternalNodesOnly),
      target_database_size: cdktf.stringToTerraform(this._targetDatabaseSize),
      task_backing_file: cdktf.stringToTerraform(this._taskBackingFile),
      task_retention_time: cdktf.stringToTerraform(this._taskRetentionTime),
      trust_store_file: cdktf.stringToTerraform(this._trustStoreFile),
      trust_store_pin: cdktf.stringToTerraform(this._trustStorePin),
      trust_store_pin_file: cdktf.stringToTerraform(this._trustStorePinFile),
      trust_store_pin_passphrase_provider: cdktf.stringToTerraform(this._trustStorePinPassphraseProvider),
      trust_store_type: cdktf.stringToTerraform(this._trustStoreType),
      uncached_attribute_criteria: cdktf.stringToTerraform(this._uncachedAttributeCriteria),
      uncached_entry_criteria: cdktf.stringToTerraform(this._uncachedEntryCriteria),
      uncached_id2entry_cache_mode: cdktf.stringToTerraform(this._uncachedId2EntryCacheMode),
      use_reversible_form: cdktf.booleanToTerraform(this._useReversibleForm),
      writability_mode: cdktf.stringToTerraform(this._writabilityMode),
      write_lastmod_attributes: cdktf.booleanToTerraform(this._writeLastmodAttributes),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alarm_retention_time: {
        value: cdktf.stringToHclTerraform(this._alarmRetentionTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alert_retention_time: {
        value: cdktf.stringToHclTerraform(this._alertRetentionTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      apply_access_controls_to_changelog_entry_contents: {
        value: cdktf.booleanToHclTerraform(this._applyAccessControlsToChangelogEntryContents),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
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
      backup_directory: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._backupDirectory),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      backup_file_permissions: {
        value: cdktf.stringToHclTerraform(this._backupFilePermissions),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      base_dn: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._baseDn),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      changelog_deleted_entry_exclude_attribute: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._changelogDeletedEntryExcludeAttribute),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      changelog_deleted_entry_include_attribute: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._changelogDeletedEntryIncludeAttribute),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      changelog_entry_exclude_base_dn: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._changelogEntryExcludeBaseDn),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      changelog_entry_exclude_filter: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._changelogEntryExcludeFilter),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      changelog_entry_include_base_dn: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._changelogEntryIncludeBaseDn),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      changelog_entry_include_filter: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._changelogEntryIncludeFilter),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      changelog_exclude_attribute: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._changelogExcludeAttribute),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      changelog_include_attribute: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._changelogIncludeAttribute),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      changelog_include_key_attribute: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._changelogIncludeKeyAttribute),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      changelog_max_before_after_values: {
        value: cdktf.numberToHclTerraform(this._changelogMaxBeforeAfterValues),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      changelog_maximum_age: {
        value: cdktf.stringToHclTerraform(this._changelogMaximumAge),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      changelog_purge_batch_size: {
        value: cdktf.numberToHclTerraform(this._changelogPurgeBatchSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      changelog_write_batch_size: {
        value: cdktf.numberToHclTerraform(this._changelogWriteBatchSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      changelog_write_queue_capacity: {
        value: cdktf.numberToHclTerraform(this._changelogWriteQueueCapacity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      disabled_alert_type: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._disabledAlertType),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
      include_virtual_attributes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._includeVirtualAttributes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      index_entry_limit: {
        value: cdktf.numberToHclTerraform(this._indexEntryLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      index_exclude_attribute: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._indexExcludeAttribute),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      index_include_attribute: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._indexIncludeAttribute),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      insignificant_config_archive_attribute: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._insignificantConfigArchiveAttribute),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      insignificant_config_archive_base_dn: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._insignificantConfigArchiveBaseDn),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
      ldif_file: {
        value: cdktf.stringToHclTerraform(this._ldifFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maintain_config_archive: {
        value: cdktf.booleanToHclTerraform(this._maintainConfigArchive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      max_alarms: {
        value: cdktf.numberToHclTerraform(this._maxAlarms),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_alerts: {
        value: cdktf.numberToHclTerraform(this._maxAlerts),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_config_archive_count: {
        value: cdktf.numberToHclTerraform(this._maxConfigArchiveCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      maximum_final_task_log_messages_to_retain: {
        value: cdktf.numberToHclTerraform(this._maximumFinalTaskLogMessagesToRetain),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      maximum_initial_task_log_messages_to_retain: {
        value: cdktf.numberToHclTerraform(this._maximumInitialTaskLogMessagesToRetain),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      metrics_dir: {
        value: cdktf.stringToHclTerraform(this._metricsDir),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mirrored_subtree_entry_update_timeout: {
        value: cdktf.stringToHclTerraform(this._mirroredSubtreeEntryUpdateTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mirrored_subtree_peer_polling_interval: {
        value: cdktf.stringToHclTerraform(this._mirroredSubtreePeerPollingInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mirrored_subtree_search_timeout: {
        value: cdktf.stringToHclTerraform(this._mirroredSubtreeSearchTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notification_manager: {
        value: cdktf.stringToHclTerraform(this._notificationManager),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notification_sender_address: {
        value: cdktf.stringToHclTerraform(this._notificationSenderAddress),
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
      read_only_schema_file: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._readOnlySchemaFile),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      report_excluded_changelog_attributes: {
        value: cdktf.stringToHclTerraform(this._reportExcludedChangelogAttributes),
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
      sample_flush_interval: {
        value: cdktf.stringToHclTerraform(this._sampleFlushInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schema_entry_dn: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._schemaEntryDn),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
      show_all_attributes: {
        value: cdktf.booleanToHclTerraform(this._showAllAttributes),
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
      soft_delete_entry_included_operation: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._softDeleteEntryIncludedOperation),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      storage_dir: {
        value: cdktf.stringToHclTerraform(this._storageDir),
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
      target_database_size: {
        value: cdktf.stringToHclTerraform(this._targetDatabaseSize),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      task_backing_file: {
        value: cdktf.stringToHclTerraform(this._taskBackingFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      task_retention_time: {
        value: cdktf.stringToHclTerraform(this._taskRetentionTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trust_store_file: {
        value: cdktf.stringToHclTerraform(this._trustStoreFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trust_store_pin: {
        value: cdktf.stringToHclTerraform(this._trustStorePin),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trust_store_pin_file: {
        value: cdktf.stringToHclTerraform(this._trustStorePinFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trust_store_pin_passphrase_provider: {
        value: cdktf.stringToHclTerraform(this._trustStorePinPassphraseProvider),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trust_store_type: {
        value: cdktf.stringToHclTerraform(this._trustStoreType),
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
      use_reversible_form: {
        value: cdktf.booleanToHclTerraform(this._useReversibleForm),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      writability_mode: {
        value: cdktf.stringToHclTerraform(this._writabilityMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      write_lastmod_attributes: {
        value: cdktf.booleanToHclTerraform(this._writeLastmodAttributes),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
