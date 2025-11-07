// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/mysql_mysql_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciMysqlMysqlConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/mysql_mysql_configuration#configuration_id DataOciMysqlMysqlConfiguration#configuration_id}
  */
  readonly configurationId: string;
}
export interface DataOciMysqlMysqlConfigurationInitVariables {
}

export function dataOciMysqlMysqlConfigurationInitVariablesToTerraform(struct?: DataOciMysqlMysqlConfigurationInitVariables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciMysqlMysqlConfigurationInitVariablesToHclTerraform(struct?: DataOciMysqlMysqlConfigurationInitVariables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciMysqlMysqlConfigurationInitVariablesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciMysqlMysqlConfigurationInitVariables | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciMysqlMysqlConfigurationInitVariables | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // lower_case_table_names - computed: true, optional: false, required: false
  public get lowerCaseTableNames() {
    return this.getStringAttribute('lower_case_table_names');
  }
}

export class DataOciMysqlMysqlConfigurationInitVariablesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciMysqlMysqlConfigurationInitVariablesOutputReference {
    return new DataOciMysqlMysqlConfigurationInitVariablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciMysqlMysqlConfigurationVariables {
}

export function dataOciMysqlMysqlConfigurationVariablesToTerraform(struct?: DataOciMysqlMysqlConfigurationVariables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciMysqlMysqlConfigurationVariablesToHclTerraform(struct?: DataOciMysqlMysqlConfigurationVariables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciMysqlMysqlConfigurationVariablesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciMysqlMysqlConfigurationVariables | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciMysqlMysqlConfigurationVariables | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auto_increment_increment - computed: true, optional: false, required: false
  public get autoIncrementIncrement() {
    return this.getNumberAttribute('auto_increment_increment');
  }

  // auto_increment_offset - computed: true, optional: false, required: false
  public get autoIncrementOffset() {
    return this.getNumberAttribute('auto_increment_offset');
  }

  // autocommit - computed: true, optional: false, required: false
  public get autocommit() {
    return this.getBooleanAttribute('autocommit');
  }

  // big_tables - computed: true, optional: false, required: false
  public get bigTables() {
    return this.getBooleanAttribute('big_tables');
  }

  // binlog_expire_logs_seconds - computed: true, optional: false, required: false
  public get binlogExpireLogsSeconds() {
    return this.getNumberAttribute('binlog_expire_logs_seconds');
  }

  // binlog_group_commit_sync_delay - computed: true, optional: false, required: false
  public get binlogGroupCommitSyncDelay() {
    return this.getNumberAttribute('binlog_group_commit_sync_delay');
  }

  // binlog_group_commit_sync_no_delay_count - computed: true, optional: false, required: false
  public get binlogGroupCommitSyncNoDelayCount() {
    return this.getNumberAttribute('binlog_group_commit_sync_no_delay_count');
  }

  // binlog_row_metadata - computed: true, optional: false, required: false
  public get binlogRowMetadata() {
    return this.getStringAttribute('binlog_row_metadata');
  }

  // binlog_row_value_options - computed: true, optional: false, required: false
  public get binlogRowValueOptions() {
    return this.getStringAttribute('binlog_row_value_options');
  }

  // binlog_transaction_compression - computed: true, optional: false, required: false
  public get binlogTransactionCompression() {
    return this.getBooleanAttribute('binlog_transaction_compression');
  }

  // block_encryption_mode - computed: true, optional: false, required: false
  public get blockEncryptionMode() {
    return this.getStringAttribute('block_encryption_mode');
  }

  // character_set_server - computed: true, optional: false, required: false
  public get characterSetServer() {
    return this.getStringAttribute('character_set_server');
  }

  // collation_server - computed: true, optional: false, required: false
  public get collationServer() {
    return this.getStringAttribute('collation_server');
  }

  // completion_type - computed: true, optional: false, required: false
  public get completionType() {
    return this.getStringAttribute('completion_type');
  }

  // connect_timeout - computed: true, optional: false, required: false
  public get connectTimeout() {
    return this.getNumberAttribute('connect_timeout');
  }

  // connection_memory_chunk_size - computed: true, optional: false, required: false
  public get connectionMemoryChunkSize() {
    return this.getNumberAttribute('connection_memory_chunk_size');
  }

  // connection_memory_limit - computed: true, optional: false, required: false
  public get connectionMemoryLimit() {
    return this.getStringAttribute('connection_memory_limit');
  }

  // cte_max_recursion_depth - computed: true, optional: false, required: false
  public get cteMaxRecursionDepth() {
    return this.getStringAttribute('cte_max_recursion_depth');
  }

  // default_authentication_plugin - computed: true, optional: false, required: false
  public get defaultAuthenticationPlugin() {
    return this.getStringAttribute('default_authentication_plugin');
  }

  // explain_format - computed: true, optional: false, required: false
  public get explainFormat() {
    return this.getStringAttribute('explain_format');
  }

  // explicit_defaults_for_timestamp - computed: true, optional: false, required: false
  public get explicitDefaultsForTimestamp() {
    return this.getBooleanAttribute('explicit_defaults_for_timestamp');
  }

  // foreign_key_checks - computed: true, optional: false, required: false
  public get foreignKeyChecks() {
    return this.getBooleanAttribute('foreign_key_checks');
  }

  // generated_random_password_length - computed: true, optional: false, required: false
  public get generatedRandomPasswordLength() {
    return this.getNumberAttribute('generated_random_password_length');
  }

  // global_connection_memory_limit - computed: true, optional: false, required: false
  public get globalConnectionMemoryLimit() {
    return this.getStringAttribute('global_connection_memory_limit');
  }

  // global_connection_memory_tracking - computed: true, optional: false, required: false
  public get globalConnectionMemoryTracking() {
    return this.getBooleanAttribute('global_connection_memory_tracking');
  }

  // group_concat_max_len - computed: true, optional: false, required: false
  public get groupConcatMaxLen() {
    return this.getStringAttribute('group_concat_max_len');
  }

  // group_replication_consistency - computed: true, optional: false, required: false
  public get groupReplicationConsistency() {
    return this.getStringAttribute('group_replication_consistency');
  }

  // information_schema_stats_expiry - computed: true, optional: false, required: false
  public get informationSchemaStatsExpiry() {
    return this.getNumberAttribute('information_schema_stats_expiry');
  }

  // innodb_adaptive_hash_index - computed: true, optional: false, required: false
  public get innodbAdaptiveHashIndex() {
    return this.getBooleanAttribute('innodb_adaptive_hash_index');
  }

  // innodb_autoinc_lock_mode - computed: true, optional: false, required: false
  public get innodbAutoincLockMode() {
    return this.getNumberAttribute('innodb_autoinc_lock_mode');
  }

  // innodb_buffer_pool_dump_pct - computed: true, optional: false, required: false
  public get innodbBufferPoolDumpPct() {
    return this.getNumberAttribute('innodb_buffer_pool_dump_pct');
  }

  // innodb_buffer_pool_instances - computed: true, optional: false, required: false
  public get innodbBufferPoolInstances() {
    return this.getNumberAttribute('innodb_buffer_pool_instances');
  }

  // innodb_buffer_pool_size - computed: true, optional: false, required: false
  public get innodbBufferPoolSize() {
    return this.getStringAttribute('innodb_buffer_pool_size');
  }

  // innodb_change_buffering - computed: true, optional: false, required: false
  public get innodbChangeBuffering() {
    return this.getStringAttribute('innodb_change_buffering');
  }

  // innodb_ddl_buffer_size - computed: true, optional: false, required: false
  public get innodbDdlBufferSize() {
    return this.getStringAttribute('innodb_ddl_buffer_size');
  }

  // innodb_ddl_threads - computed: true, optional: false, required: false
  public get innodbDdlThreads() {
    return this.getNumberAttribute('innodb_ddl_threads');
  }

  // innodb_ft_enable_stopword - computed: true, optional: false, required: false
  public get innodbFtEnableStopword() {
    return this.getBooleanAttribute('innodb_ft_enable_stopword');
  }

  // innodb_ft_max_token_size - computed: true, optional: false, required: false
  public get innodbFtMaxTokenSize() {
    return this.getNumberAttribute('innodb_ft_max_token_size');
  }

  // innodb_ft_min_token_size - computed: true, optional: false, required: false
  public get innodbFtMinTokenSize() {
    return this.getNumberAttribute('innodb_ft_min_token_size');
  }

  // innodb_ft_num_word_optimize - computed: true, optional: false, required: false
  public get innodbFtNumWordOptimize() {
    return this.getNumberAttribute('innodb_ft_num_word_optimize');
  }

  // innodb_ft_result_cache_limit - computed: true, optional: false, required: false
  public get innodbFtResultCacheLimit() {
    return this.getStringAttribute('innodb_ft_result_cache_limit');
  }

  // innodb_ft_server_stopword_table - computed: true, optional: false, required: false
  public get innodbFtServerStopwordTable() {
    return this.getStringAttribute('innodb_ft_server_stopword_table');
  }

  // innodb_lock_wait_timeout - computed: true, optional: false, required: false
  public get innodbLockWaitTimeout() {
    return this.getNumberAttribute('innodb_lock_wait_timeout');
  }

  // innodb_log_writer_threads - computed: true, optional: false, required: false
  public get innodbLogWriterThreads() {
    return this.getBooleanAttribute('innodb_log_writer_threads');
  }

  // innodb_max_purge_lag - computed: true, optional: false, required: false
  public get innodbMaxPurgeLag() {
    return this.getStringAttribute('innodb_max_purge_lag');
  }

  // innodb_max_purge_lag_delay - computed: true, optional: false, required: false
  public get innodbMaxPurgeLagDelay() {
    return this.getNumberAttribute('innodb_max_purge_lag_delay');
  }

  // innodb_numa_interleave - computed: true, optional: false, required: false
  public get innodbNumaInterleave() {
    return this.getBooleanAttribute('innodb_numa_interleave');
  }

  // innodb_online_alter_log_max_size - computed: true, optional: false, required: false
  public get innodbOnlineAlterLogMaxSize() {
    return this.getStringAttribute('innodb_online_alter_log_max_size');
  }

  // innodb_redo_log_capacity - computed: true, optional: false, required: false
  public get innodbRedoLogCapacity() {
    return this.getStringAttribute('innodb_redo_log_capacity');
  }

  // innodb_rollback_on_timeout - computed: true, optional: false, required: false
  public get innodbRollbackOnTimeout() {
    return this.getBooleanAttribute('innodb_rollback_on_timeout');
  }

  // innodb_sort_buffer_size - computed: true, optional: false, required: false
  public get innodbSortBufferSize() {
    return this.getNumberAttribute('innodb_sort_buffer_size');
  }

  // innodb_stats_persistent_sample_pages - computed: true, optional: false, required: false
  public get innodbStatsPersistentSamplePages() {
    return this.getStringAttribute('innodb_stats_persistent_sample_pages');
  }

  // innodb_stats_transient_sample_pages - computed: true, optional: false, required: false
  public get innodbStatsTransientSamplePages() {
    return this.getStringAttribute('innodb_stats_transient_sample_pages');
  }

  // innodb_strict_mode - computed: true, optional: false, required: false
  public get innodbStrictMode() {
    return this.getBooleanAttribute('innodb_strict_mode');
  }

  // innodb_undo_log_truncate - computed: true, optional: false, required: false
  public get innodbUndoLogTruncate() {
    return this.getBooleanAttribute('innodb_undo_log_truncate');
  }

  // interactive_timeout - computed: true, optional: false, required: false
  public get interactiveTimeout() {
    return this.getNumberAttribute('interactive_timeout');
  }

  // join_buffer_size - computed: true, optional: false, required: false
  public get joinBufferSize() {
    return this.getStringAttribute('join_buffer_size');
  }

  // local_infile - computed: true, optional: false, required: false
  public get localInfile() {
    return this.getBooleanAttribute('local_infile');
  }

  // long_query_time - computed: true, optional: false, required: false
  public get longQueryTime() {
    return this.getNumberAttribute('long_query_time');
  }

  // mandatory_roles - computed: true, optional: false, required: false
  public get mandatoryRoles() {
    return this.getStringAttribute('mandatory_roles');
  }

  // max_allowed_packet - computed: true, optional: false, required: false
  public get maxAllowedPacket() {
    return this.getNumberAttribute('max_allowed_packet');
  }

  // max_binlog_cache_size - computed: true, optional: false, required: false
  public get maxBinlogCacheSize() {
    return this.getStringAttribute('max_binlog_cache_size');
  }

  // max_connect_errors - computed: true, optional: false, required: false
  public get maxConnectErrors() {
    return this.getStringAttribute('max_connect_errors');
  }

  // max_connections - computed: true, optional: false, required: false
  public get maxConnections() {
    return this.getNumberAttribute('max_connections');
  }

  // max_execution_time - computed: true, optional: false, required: false
  public get maxExecutionTime() {
    return this.getStringAttribute('max_execution_time');
  }

  // max_heap_table_size - computed: true, optional: false, required: false
  public get maxHeapTableSize() {
    return this.getStringAttribute('max_heap_table_size');
  }

  // max_prepared_stmt_count - computed: true, optional: false, required: false
  public get maxPreparedStmtCount() {
    return this.getNumberAttribute('max_prepared_stmt_count');
  }

  // max_seeks_for_key - computed: true, optional: false, required: false
  public get maxSeeksForKey() {
    return this.getStringAttribute('max_seeks_for_key');
  }

  // max_user_connections - computed: true, optional: false, required: false
  public get maxUserConnections() {
    return this.getStringAttribute('max_user_connections');
  }

  // mysql_firewall_mode - computed: true, optional: false, required: false
  public get mysqlFirewallMode() {
    return this.getBooleanAttribute('mysql_firewall_mode');
  }

  // mysql_zstd_default_compression_level - computed: true, optional: false, required: false
  public get mysqlZstdDefaultCompressionLevel() {
    return this.getNumberAttribute('mysql_zstd_default_compression_level');
  }

  // mysqlx_connect_timeout - computed: true, optional: false, required: false
  public get mysqlxConnectTimeout() {
    return this.getNumberAttribute('mysqlx_connect_timeout');
  }

  // mysqlx_deflate_default_compression_level - computed: true, optional: false, required: false
  public get mysqlxDeflateDefaultCompressionLevel() {
    return this.getNumberAttribute('mysqlx_deflate_default_compression_level');
  }

  // mysqlx_deflate_max_client_compression_level - computed: true, optional: false, required: false
  public get mysqlxDeflateMaxClientCompressionLevel() {
    return this.getNumberAttribute('mysqlx_deflate_max_client_compression_level');
  }

  // mysqlx_document_id_unique_prefix - computed: true, optional: false, required: false
  public get mysqlxDocumentIdUniquePrefix() {
    return this.getNumberAttribute('mysqlx_document_id_unique_prefix');
  }

  // mysqlx_enable_hello_notice - computed: true, optional: false, required: false
  public get mysqlxEnableHelloNotice() {
    return this.getBooleanAttribute('mysqlx_enable_hello_notice');
  }

  // mysqlx_idle_worker_thread_timeout - computed: true, optional: false, required: false
  public get mysqlxIdleWorkerThreadTimeout() {
    return this.getNumberAttribute('mysqlx_idle_worker_thread_timeout');
  }

  // mysqlx_interactive_timeout - computed: true, optional: false, required: false
  public get mysqlxInteractiveTimeout() {
    return this.getNumberAttribute('mysqlx_interactive_timeout');
  }

  // mysqlx_lz4default_compression_level - computed: true, optional: false, required: false
  public get mysqlxLz4DefaultCompressionLevel() {
    return this.getNumberAttribute('mysqlx_lz4default_compression_level');
  }

  // mysqlx_lz4max_client_compression_level - computed: true, optional: false, required: false
  public get mysqlxLz4MaxClientCompressionLevel() {
    return this.getNumberAttribute('mysqlx_lz4max_client_compression_level');
  }

  // mysqlx_max_allowed_packet - computed: true, optional: false, required: false
  public get mysqlxMaxAllowedPacket() {
    return this.getNumberAttribute('mysqlx_max_allowed_packet');
  }

  // mysqlx_min_worker_threads - computed: true, optional: false, required: false
  public get mysqlxMinWorkerThreads() {
    return this.getNumberAttribute('mysqlx_min_worker_threads');
  }

  // mysqlx_read_timeout - computed: true, optional: false, required: false
  public get mysqlxReadTimeout() {
    return this.getNumberAttribute('mysqlx_read_timeout');
  }

  // mysqlx_wait_timeout - computed: true, optional: false, required: false
  public get mysqlxWaitTimeout() {
    return this.getNumberAttribute('mysqlx_wait_timeout');
  }

  // mysqlx_write_timeout - computed: true, optional: false, required: false
  public get mysqlxWriteTimeout() {
    return this.getNumberAttribute('mysqlx_write_timeout');
  }

  // mysqlx_zstd_default_compression_level - computed: true, optional: false, required: false
  public get mysqlxZstdDefaultCompressionLevel() {
    return this.getNumberAttribute('mysqlx_zstd_default_compression_level');
  }

  // mysqlx_zstd_max_client_compression_level - computed: true, optional: false, required: false
  public get mysqlxZstdMaxClientCompressionLevel() {
    return this.getNumberAttribute('mysqlx_zstd_max_client_compression_level');
  }

  // net_read_timeout - computed: true, optional: false, required: false
  public get netReadTimeout() {
    return this.getNumberAttribute('net_read_timeout');
  }

  // net_write_timeout - computed: true, optional: false, required: false
  public get netWriteTimeout() {
    return this.getNumberAttribute('net_write_timeout');
  }

  // optimizer_switch - computed: true, optional: false, required: false
  public get optimizerSwitch() {
    return this.getStringAttribute('optimizer_switch');
  }

  // parser_max_mem_size - computed: true, optional: false, required: false
  public get parserMaxMemSize() {
    return this.getStringAttribute('parser_max_mem_size');
  }

  // query_alloc_block_size - computed: true, optional: false, required: false
  public get queryAllocBlockSize() {
    return this.getStringAttribute('query_alloc_block_size');
  }

  // query_prealloc_size - computed: true, optional: false, required: false
  public get queryPreallocSize() {
    return this.getStringAttribute('query_prealloc_size');
  }

  // range_optimizer_max_mem_size - computed: true, optional: false, required: false
  public get rangeOptimizerMaxMemSize() {
    return this.getStringAttribute('range_optimizer_max_mem_size');
  }

  // regexp_time_limit - computed: true, optional: false, required: false
  public get regexpTimeLimit() {
    return this.getNumberAttribute('regexp_time_limit');
  }

  // relay_log_space_limit - computed: true, optional: false, required: false
  public get relayLogSpaceLimit() {
    return this.getStringAttribute('relay_log_space_limit');
  }

  // replica_net_timeout - computed: true, optional: false, required: false
  public get replicaNetTimeout() {
    return this.getNumberAttribute('replica_net_timeout');
  }

  // replica_parallel_workers - computed: true, optional: false, required: false
  public get replicaParallelWorkers() {
    return this.getNumberAttribute('replica_parallel_workers');
  }

  // replica_type_conversions - computed: true, optional: false, required: false
  public get replicaTypeConversions() {
    return this.getStringAttribute('replica_type_conversions');
  }

  // require_secure_transport - computed: true, optional: false, required: false
  public get requireSecureTransport() {
    return this.getBooleanAttribute('require_secure_transport');
  }

  // skip_name_resolve - computed: true, optional: false, required: false
  public get skipNameResolve() {
    return this.getBooleanAttribute('skip_name_resolve');
  }

  // sort_buffer_size - computed: true, optional: false, required: false
  public get sortBufferSize() {
    return this.getStringAttribute('sort_buffer_size');
  }

  // sql_generate_invisible_primary_key - computed: true, optional: false, required: false
  public get sqlGenerateInvisiblePrimaryKey() {
    return this.getBooleanAttribute('sql_generate_invisible_primary_key');
  }

  // sql_mode - computed: true, optional: false, required: false
  public get sqlMode() {
    return this.getStringAttribute('sql_mode');
  }

  // sql_require_primary_key - computed: true, optional: false, required: false
  public get sqlRequirePrimaryKey() {
    return this.getBooleanAttribute('sql_require_primary_key');
  }

  // sql_warnings - computed: true, optional: false, required: false
  public get sqlWarnings() {
    return this.getBooleanAttribute('sql_warnings');
  }

  // table_definition_cache - computed: true, optional: false, required: false
  public get tableDefinitionCache() {
    return this.getNumberAttribute('table_definition_cache');
  }

  // table_open_cache - computed: true, optional: false, required: false
  public get tableOpenCache() {
    return this.getNumberAttribute('table_open_cache');
  }

  // temptable_max_ram - computed: true, optional: false, required: false
  public get temptableMaxRam() {
    return this.getStringAttribute('temptable_max_ram');
  }

  // thread_pool_dedicated_listeners - computed: true, optional: false, required: false
  public get threadPoolDedicatedListeners() {
    return this.getBooleanAttribute('thread_pool_dedicated_listeners');
  }

  // thread_pool_max_transactions_limit - computed: true, optional: false, required: false
  public get threadPoolMaxTransactionsLimit() {
    return this.getNumberAttribute('thread_pool_max_transactions_limit');
  }

  // thread_pool_query_threads_per_group - computed: true, optional: false, required: false
  public get threadPoolQueryThreadsPerGroup() {
    return this.getNumberAttribute('thread_pool_query_threads_per_group');
  }

  // thread_pool_size - computed: true, optional: false, required: false
  public get threadPoolSize() {
    return this.getNumberAttribute('thread_pool_size');
  }

  // thread_pool_transaction_delay - computed: true, optional: false, required: false
  public get threadPoolTransactionDelay() {
    return this.getNumberAttribute('thread_pool_transaction_delay');
  }

  // time_zone - computed: true, optional: false, required: false
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }

  // tmp_table_size - computed: true, optional: false, required: false
  public get tmpTableSize() {
    return this.getStringAttribute('tmp_table_size');
  }

  // transaction_isolation - computed: true, optional: false, required: false
  public get transactionIsolation() {
    return this.getStringAttribute('transaction_isolation');
  }

  // wait_timeout - computed: true, optional: false, required: false
  public get waitTimeout() {
    return this.getNumberAttribute('wait_timeout');
  }
}

export class DataOciMysqlMysqlConfigurationVariablesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciMysqlMysqlConfigurationVariablesOutputReference {
    return new DataOciMysqlMysqlConfigurationVariablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/mysql_mysql_configuration oci_mysql_mysql_configuration}
*/
export class DataOciMysqlMysqlConfiguration extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_mysql_mysql_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciMysqlMysqlConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciMysqlMysqlConfiguration to import
  * @param importFromId The id of the existing DataOciMysqlMysqlConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/mysql_mysql_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciMysqlMysqlConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_mysql_mysql_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/mysql_mysql_configuration oci_mysql_mysql_configuration} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciMysqlMysqlConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciMysqlMysqlConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_mysql_mysql_configuration',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.25.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._configurationId = config.configurationId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // configuration_id - computed: false, optional: false, required: true
  private _configurationId?: string; 
  public get configurationId() {
    return this.getStringAttribute('configuration_id');
  }
  public set configurationId(value: string) {
    this._configurationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationIdInput() {
    return this._configurationId;
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // init_variables - computed: true, optional: false, required: false
  private _initVariables = new DataOciMysqlMysqlConfigurationInitVariablesList(this, "init_variables", false);
  public get initVariables() {
    return this._initVariables;
  }

  // parent_configuration_id - computed: true, optional: false, required: false
  public get parentConfigurationId() {
    return this.getStringAttribute('parent_configuration_id');
  }

  // shape_name - computed: true, optional: false, required: false
  public get shapeName() {
    return this.getStringAttribute('shape_name');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // variables - computed: true, optional: false, required: false
  private _variables = new DataOciMysqlMysqlConfigurationVariablesList(this, "variables", false);
  public get variables() {
    return this._variables;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      configuration_id: cdktf.stringToTerraform(this._configurationId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      configuration_id: {
        value: cdktf.stringToHclTerraform(this._configurationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
