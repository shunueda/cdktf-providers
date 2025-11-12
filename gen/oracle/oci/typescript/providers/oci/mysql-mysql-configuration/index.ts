// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MysqlMysqlConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_configuration#compartment_id MysqlMysqlConfiguration#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_configuration#defined_tags MysqlMysqlConfiguration#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_configuration#description MysqlMysqlConfiguration#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_configuration#display_name MysqlMysqlConfiguration#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_configuration#freeform_tags MysqlMysqlConfiguration#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_configuration#id MysqlMysqlConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_configuration#parent_configuration_id MysqlMysqlConfiguration#parent_configuration_id}
  */
  readonly parentConfigurationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_configuration#shape_name MysqlMysqlConfiguration#shape_name}
  */
  readonly shapeName: string;
  /**
  * init_variables block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_configuration#init_variables MysqlMysqlConfiguration#init_variables}
  */
  readonly initVariables?: MysqlMysqlConfigurationInitVariables;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_configuration#timeouts MysqlMysqlConfiguration#timeouts}
  */
  readonly timeouts?: MysqlMysqlConfigurationTimeouts;
  /**
  * variables block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_configuration#variables MysqlMysqlConfiguration#variables}
  */
  readonly variables?: MysqlMysqlConfigurationVariables;
}
export interface MysqlMysqlConfigurationInitVariables {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_configuration#lower_case_table_names MysqlMysqlConfiguration#lower_case_table_names}
  */
  readonly lowerCaseTableNames?: string;
}

export function mysqlMysqlConfigurationInitVariablesToTerraform(struct?: MysqlMysqlConfigurationInitVariablesOutputReference | MysqlMysqlConfigurationInitVariables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lower_case_table_names: cdktf.stringToTerraform(struct!.lowerCaseTableNames),
  }
}


export function mysqlMysqlConfigurationInitVariablesToHclTerraform(struct?: MysqlMysqlConfigurationInitVariablesOutputReference | MysqlMysqlConfigurationInitVariables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    lower_case_table_names: {
      value: cdktf.stringToHclTerraform(struct!.lowerCaseTableNames),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MysqlMysqlConfigurationInitVariablesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MysqlMysqlConfigurationInitVariables | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lowerCaseTableNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.lowerCaseTableNames = this._lowerCaseTableNames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MysqlMysqlConfigurationInitVariables | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._lowerCaseTableNames = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._lowerCaseTableNames = value.lowerCaseTableNames;
    }
  }

  // lower_case_table_names - computed: true, optional: true, required: false
  private _lowerCaseTableNames?: string; 
  public get lowerCaseTableNames() {
    return this.getStringAttribute('lower_case_table_names');
  }
  public set lowerCaseTableNames(value: string) {
    this._lowerCaseTableNames = value;
  }
  public resetLowerCaseTableNames() {
    this._lowerCaseTableNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lowerCaseTableNamesInput() {
    return this._lowerCaseTableNames;
  }
}
export interface MysqlMysqlConfigurationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_configuration#create MysqlMysqlConfiguration#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_configuration#delete MysqlMysqlConfiguration#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_configuration#update MysqlMysqlConfiguration#update}
  */
  readonly update?: string;
}

export function mysqlMysqlConfigurationTimeoutsToTerraform(struct?: MysqlMysqlConfigurationTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function mysqlMysqlConfigurationTimeoutsToHclTerraform(struct?: MysqlMysqlConfigurationTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MysqlMysqlConfigurationTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MysqlMysqlConfigurationTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MysqlMysqlConfigurationTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}
export interface MysqlMysqlConfigurationVariables {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_configuration#auto_increment_increment MysqlMysqlConfiguration#auto_increment_increment}
  */
  readonly autoIncrementIncrement?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_configuration#auto_increment_offset MysqlMysqlConfiguration#auto_increment_offset}
  */
  readonly autoIncrementOffset?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_configuration#autocommit MysqlMysqlConfiguration#autocommit}
  */
  readonly autocommit?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_configuration#big_tables MysqlMysqlConfiguration#big_tables}
  */
  readonly bigTables?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_configuration#binlog_expire_logs_seconds MysqlMysqlConfiguration#binlog_expire_logs_seconds}
  */
  readonly binlogExpireLogsSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_configuration#binlog_group_commit_sync_delay MysqlMysqlConfiguration#binlog_group_commit_sync_delay}
  */
  readonly binlogGroupCommitSyncDelay?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_configuration#binlog_group_commit_sync_no_delay_count MysqlMysqlConfiguration#binlog_group_commit_sync_no_delay_count}
  */
  readonly binlogGroupCommitSyncNoDelayCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_configuration#binlog_row_metadata MysqlMysqlConfiguration#binlog_row_metadata}
  */
  readonly binlogRowMetadata?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_configuration#binlog_row_value_options MysqlMysqlConfiguration#binlog_row_value_options}
  */
  readonly binlogRowValueOptions?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_configuration#binlog_transaction_compression MysqlMysqlConfiguration#binlog_transaction_compression}
  */
  readonly binlogTransactionCompression?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_configuration#block_encryption_mode MysqlMysqlConfiguration#block_encryption_mode}
  */
  readonly blockEncryptionMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_configuration#character_set_server MysqlMysqlConfiguration#character_set_server}
  */
  readonly characterSetServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_configuration#collation_server MysqlMysqlConfiguration#collation_server}
  */
  readonly collationServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_configuration#completion_type MysqlMysqlConfiguration#completion_type}
  */
  readonly completionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_configuration#connect_timeout MysqlMysqlConfiguration#connect_timeout}
  */
  readonly connectTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_configuration#connection_memory_chunk_size MysqlMysqlConfiguration#connection_memory_chunk_size}
  */
  readonly connectionMemoryChunkSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_configuration#connection_memory_limit MysqlMysqlConfiguration#connection_memory_limit}
  */
  readonly connectionMemoryLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_configuration#cte_max_recursion_depth MysqlMysqlConfiguration#cte_max_recursion_depth}
  */
  readonly cteMaxRecursionDepth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_configuration#default_authentication_plugin MysqlMysqlConfiguration#default_authentication_plugin}
  */
  readonly defaultAuthenticationPlugin?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_configuration#explain_format MysqlMysqlConfiguration#explain_format}
  */
  readonly explainFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_configuration#explicit_defaults_for_timestamp MysqlMysqlConfiguration#explicit_defaults_for_timestamp}
  */
  readonly explicitDefaultsForTimestamp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_configuration#foreign_key_checks MysqlMysqlConfiguration#foreign_key_checks}
  */
  readonly foreignKeyChecks?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_configuration#generated_random_password_length MysqlMysqlConfiguration#generated_random_password_length}
  */
  readonly generatedRandomPasswordLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_configuration#global_connection_memory_limit MysqlMysqlConfiguration#global_connection_memory_limit}
  */
  readonly globalConnectionMemoryLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_configuration#global_connection_memory_tracking MysqlMysqlConfiguration#global_connection_memory_tracking}
  */
  readonly globalConnectionMemoryTracking?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_configuration#group_concat_max_len MysqlMysqlConfiguration#group_concat_max_len}
  */
  readonly groupConcatMaxLen?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_configuration#group_replication_consistency MysqlMysqlConfiguration#group_replication_consistency}
  */
  readonly groupReplicationConsistency?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_configuration#information_schema_stats_expiry MysqlMysqlConfiguration#information_schema_stats_expiry}
  */
  readonly informationSchemaStatsExpiry?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_configuration#innodb_adaptive_hash_index MysqlMysqlConfiguration#innodb_adaptive_hash_index}
  */
  readonly innodbAdaptiveHashIndex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_configuration#innodb_autoinc_lock_mode MysqlMysqlConfiguration#innodb_autoinc_lock_mode}
  */
  readonly innodbAutoincLockMode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_configuration#innodb_buffer_pool_dump_pct MysqlMysqlConfiguration#innodb_buffer_pool_dump_pct}
  */
  readonly innodbBufferPoolDumpPct?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_configuration#innodb_buffer_pool_instances MysqlMysqlConfiguration#innodb_buffer_pool_instances}
  */
  readonly innodbBufferPoolInstances?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_configuration#innodb_buffer_pool_size MysqlMysqlConfiguration#innodb_buffer_pool_size}
  */
  readonly innodbBufferPoolSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_configuration#innodb_change_buffering MysqlMysqlConfiguration#innodb_change_buffering}
  */
  readonly innodbChangeBuffering?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_configuration#innodb_ddl_buffer_size MysqlMysqlConfiguration#innodb_ddl_buffer_size}
  */
  readonly innodbDdlBufferSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_configuration#innodb_ddl_threads MysqlMysqlConfiguration#innodb_ddl_threads}
  */
  readonly innodbDdlThreads?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_configuration#innodb_ft_enable_stopword MysqlMysqlConfiguration#innodb_ft_enable_stopword}
  */
  readonly innodbFtEnableStopword?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_configuration#innodb_ft_max_token_size MysqlMysqlConfiguration#innodb_ft_max_token_size}
  */
  readonly innodbFtMaxTokenSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_configuration#innodb_ft_min_token_size MysqlMysqlConfiguration#innodb_ft_min_token_size}
  */
  readonly innodbFtMinTokenSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_configuration#innodb_ft_num_word_optimize MysqlMysqlConfiguration#innodb_ft_num_word_optimize}
  */
  readonly innodbFtNumWordOptimize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_configuration#innodb_ft_result_cache_limit MysqlMysqlConfiguration#innodb_ft_result_cache_limit}
  */
  readonly innodbFtResultCacheLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_configuration#innodb_ft_server_stopword_table MysqlMysqlConfiguration#innodb_ft_server_stopword_table}
  */
  readonly innodbFtServerStopwordTable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_configuration#innodb_lock_wait_timeout MysqlMysqlConfiguration#innodb_lock_wait_timeout}
  */
  readonly innodbLockWaitTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_configuration#innodb_log_writer_threads MysqlMysqlConfiguration#innodb_log_writer_threads}
  */
  readonly innodbLogWriterThreads?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_configuration#innodb_max_purge_lag MysqlMysqlConfiguration#innodb_max_purge_lag}
  */
  readonly innodbMaxPurgeLag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_configuration#innodb_max_purge_lag_delay MysqlMysqlConfiguration#innodb_max_purge_lag_delay}
  */
  readonly innodbMaxPurgeLagDelay?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_configuration#innodb_numa_interleave MysqlMysqlConfiguration#innodb_numa_interleave}
  */
  readonly innodbNumaInterleave?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_configuration#innodb_online_alter_log_max_size MysqlMysqlConfiguration#innodb_online_alter_log_max_size}
  */
  readonly innodbOnlineAlterLogMaxSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_configuration#innodb_redo_log_capacity MysqlMysqlConfiguration#innodb_redo_log_capacity}
  */
  readonly innodbRedoLogCapacity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_configuration#innodb_rollback_on_timeout MysqlMysqlConfiguration#innodb_rollback_on_timeout}
  */
  readonly innodbRollbackOnTimeout?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_configuration#innodb_sort_buffer_size MysqlMysqlConfiguration#innodb_sort_buffer_size}
  */
  readonly innodbSortBufferSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_configuration#innodb_stats_persistent_sample_pages MysqlMysqlConfiguration#innodb_stats_persistent_sample_pages}
  */
  readonly innodbStatsPersistentSamplePages?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_configuration#innodb_stats_transient_sample_pages MysqlMysqlConfiguration#innodb_stats_transient_sample_pages}
  */
  readonly innodbStatsTransientSamplePages?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_configuration#innodb_strict_mode MysqlMysqlConfiguration#innodb_strict_mode}
  */
  readonly innodbStrictMode?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_configuration#innodb_undo_log_truncate MysqlMysqlConfiguration#innodb_undo_log_truncate}
  */
  readonly innodbUndoLogTruncate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_configuration#interactive_timeout MysqlMysqlConfiguration#interactive_timeout}
  */
  readonly interactiveTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_configuration#join_buffer_size MysqlMysqlConfiguration#join_buffer_size}
  */
  readonly joinBufferSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_configuration#local_infile MysqlMysqlConfiguration#local_infile}
  */
  readonly localInfile?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_configuration#long_query_time MysqlMysqlConfiguration#long_query_time}
  */
  readonly longQueryTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_configuration#mandatory_roles MysqlMysqlConfiguration#mandatory_roles}
  */
  readonly mandatoryRoles?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_configuration#max_allowed_packet MysqlMysqlConfiguration#max_allowed_packet}
  */
  readonly maxAllowedPacket?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_configuration#max_binlog_cache_size MysqlMysqlConfiguration#max_binlog_cache_size}
  */
  readonly maxBinlogCacheSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_configuration#max_connect_errors MysqlMysqlConfiguration#max_connect_errors}
  */
  readonly maxConnectErrors?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_configuration#max_connections MysqlMysqlConfiguration#max_connections}
  */
  readonly maxConnections?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_configuration#max_execution_time MysqlMysqlConfiguration#max_execution_time}
  */
  readonly maxExecutionTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_configuration#max_heap_table_size MysqlMysqlConfiguration#max_heap_table_size}
  */
  readonly maxHeapTableSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_configuration#max_prepared_stmt_count MysqlMysqlConfiguration#max_prepared_stmt_count}
  */
  readonly maxPreparedStmtCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_configuration#max_seeks_for_key MysqlMysqlConfiguration#max_seeks_for_key}
  */
  readonly maxSeeksForKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_configuration#max_user_connections MysqlMysqlConfiguration#max_user_connections}
  */
  readonly maxUserConnections?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_configuration#mysql_firewall_mode MysqlMysqlConfiguration#mysql_firewall_mode}
  */
  readonly mysqlFirewallMode?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_configuration#mysql_zstd_default_compression_level MysqlMysqlConfiguration#mysql_zstd_default_compression_level}
  */
  readonly mysqlZstdDefaultCompressionLevel?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_configuration#mysqlx_connect_timeout MysqlMysqlConfiguration#mysqlx_connect_timeout}
  */
  readonly mysqlxConnectTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_configuration#mysqlx_deflate_default_compression_level MysqlMysqlConfiguration#mysqlx_deflate_default_compression_level}
  */
  readonly mysqlxDeflateDefaultCompressionLevel?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_configuration#mysqlx_deflate_max_client_compression_level MysqlMysqlConfiguration#mysqlx_deflate_max_client_compression_level}
  */
  readonly mysqlxDeflateMaxClientCompressionLevel?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_configuration#mysqlx_document_id_unique_prefix MysqlMysqlConfiguration#mysqlx_document_id_unique_prefix}
  */
  readonly mysqlxDocumentIdUniquePrefix?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_configuration#mysqlx_enable_hello_notice MysqlMysqlConfiguration#mysqlx_enable_hello_notice}
  */
  readonly mysqlxEnableHelloNotice?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_configuration#mysqlx_idle_worker_thread_timeout MysqlMysqlConfiguration#mysqlx_idle_worker_thread_timeout}
  */
  readonly mysqlxIdleWorkerThreadTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_configuration#mysqlx_interactive_timeout MysqlMysqlConfiguration#mysqlx_interactive_timeout}
  */
  readonly mysqlxInteractiveTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_configuration#mysqlx_lz4default_compression_level MysqlMysqlConfiguration#mysqlx_lz4default_compression_level}
  */
  readonly mysqlxLz4DefaultCompressionLevel?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_configuration#mysqlx_lz4max_client_compression_level MysqlMysqlConfiguration#mysqlx_lz4max_client_compression_level}
  */
  readonly mysqlxLz4MaxClientCompressionLevel?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_configuration#mysqlx_max_allowed_packet MysqlMysqlConfiguration#mysqlx_max_allowed_packet}
  */
  readonly mysqlxMaxAllowedPacket?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_configuration#mysqlx_min_worker_threads MysqlMysqlConfiguration#mysqlx_min_worker_threads}
  */
  readonly mysqlxMinWorkerThreads?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_configuration#mysqlx_read_timeout MysqlMysqlConfiguration#mysqlx_read_timeout}
  */
  readonly mysqlxReadTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_configuration#mysqlx_wait_timeout MysqlMysqlConfiguration#mysqlx_wait_timeout}
  */
  readonly mysqlxWaitTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_configuration#mysqlx_write_timeout MysqlMysqlConfiguration#mysqlx_write_timeout}
  */
  readonly mysqlxWriteTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_configuration#mysqlx_zstd_default_compression_level MysqlMysqlConfiguration#mysqlx_zstd_default_compression_level}
  */
  readonly mysqlxZstdDefaultCompressionLevel?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_configuration#mysqlx_zstd_max_client_compression_level MysqlMysqlConfiguration#mysqlx_zstd_max_client_compression_level}
  */
  readonly mysqlxZstdMaxClientCompressionLevel?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_configuration#net_read_timeout MysqlMysqlConfiguration#net_read_timeout}
  */
  readonly netReadTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_configuration#net_write_timeout MysqlMysqlConfiguration#net_write_timeout}
  */
  readonly netWriteTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_configuration#optimizer_switch MysqlMysqlConfiguration#optimizer_switch}
  */
  readonly optimizerSwitch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_configuration#parser_max_mem_size MysqlMysqlConfiguration#parser_max_mem_size}
  */
  readonly parserMaxMemSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_configuration#query_alloc_block_size MysqlMysqlConfiguration#query_alloc_block_size}
  */
  readonly queryAllocBlockSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_configuration#query_prealloc_size MysqlMysqlConfiguration#query_prealloc_size}
  */
  readonly queryPreallocSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_configuration#range_optimizer_max_mem_size MysqlMysqlConfiguration#range_optimizer_max_mem_size}
  */
  readonly rangeOptimizerMaxMemSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_configuration#regexp_time_limit MysqlMysqlConfiguration#regexp_time_limit}
  */
  readonly regexpTimeLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_configuration#relay_log_space_limit MysqlMysqlConfiguration#relay_log_space_limit}
  */
  readonly relayLogSpaceLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_configuration#replica_net_timeout MysqlMysqlConfiguration#replica_net_timeout}
  */
  readonly replicaNetTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_configuration#replica_parallel_workers MysqlMysqlConfiguration#replica_parallel_workers}
  */
  readonly replicaParallelWorkers?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_configuration#replica_type_conversions MysqlMysqlConfiguration#replica_type_conversions}
  */
  readonly replicaTypeConversions?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_configuration#require_secure_transport MysqlMysqlConfiguration#require_secure_transport}
  */
  readonly requireSecureTransport?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_configuration#skip_name_resolve MysqlMysqlConfiguration#skip_name_resolve}
  */
  readonly skipNameResolve?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_configuration#sort_buffer_size MysqlMysqlConfiguration#sort_buffer_size}
  */
  readonly sortBufferSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_configuration#sql_generate_invisible_primary_key MysqlMysqlConfiguration#sql_generate_invisible_primary_key}
  */
  readonly sqlGenerateInvisiblePrimaryKey?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_configuration#sql_mode MysqlMysqlConfiguration#sql_mode}
  */
  readonly sqlMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_configuration#sql_require_primary_key MysqlMysqlConfiguration#sql_require_primary_key}
  */
  readonly sqlRequirePrimaryKey?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_configuration#sql_warnings MysqlMysqlConfiguration#sql_warnings}
  */
  readonly sqlWarnings?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_configuration#table_definition_cache MysqlMysqlConfiguration#table_definition_cache}
  */
  readonly tableDefinitionCache?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_configuration#table_open_cache MysqlMysqlConfiguration#table_open_cache}
  */
  readonly tableOpenCache?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_configuration#temptable_max_ram MysqlMysqlConfiguration#temptable_max_ram}
  */
  readonly temptableMaxRam?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_configuration#thread_pool_dedicated_listeners MysqlMysqlConfiguration#thread_pool_dedicated_listeners}
  */
  readonly threadPoolDedicatedListeners?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_configuration#thread_pool_max_transactions_limit MysqlMysqlConfiguration#thread_pool_max_transactions_limit}
  */
  readonly threadPoolMaxTransactionsLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_configuration#thread_pool_query_threads_per_group MysqlMysqlConfiguration#thread_pool_query_threads_per_group}
  */
  readonly threadPoolQueryThreadsPerGroup?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_configuration#thread_pool_size MysqlMysqlConfiguration#thread_pool_size}
  */
  readonly threadPoolSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_configuration#thread_pool_transaction_delay MysqlMysqlConfiguration#thread_pool_transaction_delay}
  */
  readonly threadPoolTransactionDelay?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_configuration#time_zone MysqlMysqlConfiguration#time_zone}
  */
  readonly timeZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_configuration#tmp_table_size MysqlMysqlConfiguration#tmp_table_size}
  */
  readonly tmpTableSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_configuration#transaction_isolation MysqlMysqlConfiguration#transaction_isolation}
  */
  readonly transactionIsolation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_configuration#wait_timeout MysqlMysqlConfiguration#wait_timeout}
  */
  readonly waitTimeout?: number;
}

export function mysqlMysqlConfigurationVariablesToTerraform(struct?: MysqlMysqlConfigurationVariablesOutputReference | MysqlMysqlConfigurationVariables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_increment_increment: cdktf.numberToTerraform(struct!.autoIncrementIncrement),
    auto_increment_offset: cdktf.numberToTerraform(struct!.autoIncrementOffset),
    autocommit: cdktf.booleanToTerraform(struct!.autocommit),
    big_tables: cdktf.booleanToTerraform(struct!.bigTables),
    binlog_expire_logs_seconds: cdktf.numberToTerraform(struct!.binlogExpireLogsSeconds),
    binlog_group_commit_sync_delay: cdktf.numberToTerraform(struct!.binlogGroupCommitSyncDelay),
    binlog_group_commit_sync_no_delay_count: cdktf.numberToTerraform(struct!.binlogGroupCommitSyncNoDelayCount),
    binlog_row_metadata: cdktf.stringToTerraform(struct!.binlogRowMetadata),
    binlog_row_value_options: cdktf.stringToTerraform(struct!.binlogRowValueOptions),
    binlog_transaction_compression: cdktf.booleanToTerraform(struct!.binlogTransactionCompression),
    block_encryption_mode: cdktf.stringToTerraform(struct!.blockEncryptionMode),
    character_set_server: cdktf.stringToTerraform(struct!.characterSetServer),
    collation_server: cdktf.stringToTerraform(struct!.collationServer),
    completion_type: cdktf.stringToTerraform(struct!.completionType),
    connect_timeout: cdktf.numberToTerraform(struct!.connectTimeout),
    connection_memory_chunk_size: cdktf.numberToTerraform(struct!.connectionMemoryChunkSize),
    connection_memory_limit: cdktf.stringToTerraform(struct!.connectionMemoryLimit),
    cte_max_recursion_depth: cdktf.stringToTerraform(struct!.cteMaxRecursionDepth),
    default_authentication_plugin: cdktf.stringToTerraform(struct!.defaultAuthenticationPlugin),
    explain_format: cdktf.stringToTerraform(struct!.explainFormat),
    explicit_defaults_for_timestamp: cdktf.booleanToTerraform(struct!.explicitDefaultsForTimestamp),
    foreign_key_checks: cdktf.booleanToTerraform(struct!.foreignKeyChecks),
    generated_random_password_length: cdktf.numberToTerraform(struct!.generatedRandomPasswordLength),
    global_connection_memory_limit: cdktf.stringToTerraform(struct!.globalConnectionMemoryLimit),
    global_connection_memory_tracking: cdktf.booleanToTerraform(struct!.globalConnectionMemoryTracking),
    group_concat_max_len: cdktf.stringToTerraform(struct!.groupConcatMaxLen),
    group_replication_consistency: cdktf.stringToTerraform(struct!.groupReplicationConsistency),
    information_schema_stats_expiry: cdktf.numberToTerraform(struct!.informationSchemaStatsExpiry),
    innodb_adaptive_hash_index: cdktf.booleanToTerraform(struct!.innodbAdaptiveHashIndex),
    innodb_autoinc_lock_mode: cdktf.numberToTerraform(struct!.innodbAutoincLockMode),
    innodb_buffer_pool_dump_pct: cdktf.numberToTerraform(struct!.innodbBufferPoolDumpPct),
    innodb_buffer_pool_instances: cdktf.numberToTerraform(struct!.innodbBufferPoolInstances),
    innodb_buffer_pool_size: cdktf.stringToTerraform(struct!.innodbBufferPoolSize),
    innodb_change_buffering: cdktf.stringToTerraform(struct!.innodbChangeBuffering),
    innodb_ddl_buffer_size: cdktf.stringToTerraform(struct!.innodbDdlBufferSize),
    innodb_ddl_threads: cdktf.numberToTerraform(struct!.innodbDdlThreads),
    innodb_ft_enable_stopword: cdktf.booleanToTerraform(struct!.innodbFtEnableStopword),
    innodb_ft_max_token_size: cdktf.numberToTerraform(struct!.innodbFtMaxTokenSize),
    innodb_ft_min_token_size: cdktf.numberToTerraform(struct!.innodbFtMinTokenSize),
    innodb_ft_num_word_optimize: cdktf.numberToTerraform(struct!.innodbFtNumWordOptimize),
    innodb_ft_result_cache_limit: cdktf.stringToTerraform(struct!.innodbFtResultCacheLimit),
    innodb_ft_server_stopword_table: cdktf.stringToTerraform(struct!.innodbFtServerStopwordTable),
    innodb_lock_wait_timeout: cdktf.numberToTerraform(struct!.innodbLockWaitTimeout),
    innodb_log_writer_threads: cdktf.booleanToTerraform(struct!.innodbLogWriterThreads),
    innodb_max_purge_lag: cdktf.stringToTerraform(struct!.innodbMaxPurgeLag),
    innodb_max_purge_lag_delay: cdktf.numberToTerraform(struct!.innodbMaxPurgeLagDelay),
    innodb_numa_interleave: cdktf.booleanToTerraform(struct!.innodbNumaInterleave),
    innodb_online_alter_log_max_size: cdktf.stringToTerraform(struct!.innodbOnlineAlterLogMaxSize),
    innodb_redo_log_capacity: cdktf.stringToTerraform(struct!.innodbRedoLogCapacity),
    innodb_rollback_on_timeout: cdktf.booleanToTerraform(struct!.innodbRollbackOnTimeout),
    innodb_sort_buffer_size: cdktf.numberToTerraform(struct!.innodbSortBufferSize),
    innodb_stats_persistent_sample_pages: cdktf.stringToTerraform(struct!.innodbStatsPersistentSamplePages),
    innodb_stats_transient_sample_pages: cdktf.stringToTerraform(struct!.innodbStatsTransientSamplePages),
    innodb_strict_mode: cdktf.booleanToTerraform(struct!.innodbStrictMode),
    innodb_undo_log_truncate: cdktf.booleanToTerraform(struct!.innodbUndoLogTruncate),
    interactive_timeout: cdktf.numberToTerraform(struct!.interactiveTimeout),
    join_buffer_size: cdktf.stringToTerraform(struct!.joinBufferSize),
    local_infile: cdktf.booleanToTerraform(struct!.localInfile),
    long_query_time: cdktf.numberToTerraform(struct!.longQueryTime),
    mandatory_roles: cdktf.stringToTerraform(struct!.mandatoryRoles),
    max_allowed_packet: cdktf.numberToTerraform(struct!.maxAllowedPacket),
    max_binlog_cache_size: cdktf.stringToTerraform(struct!.maxBinlogCacheSize),
    max_connect_errors: cdktf.stringToTerraform(struct!.maxConnectErrors),
    max_connections: cdktf.numberToTerraform(struct!.maxConnections),
    max_execution_time: cdktf.stringToTerraform(struct!.maxExecutionTime),
    max_heap_table_size: cdktf.stringToTerraform(struct!.maxHeapTableSize),
    max_prepared_stmt_count: cdktf.numberToTerraform(struct!.maxPreparedStmtCount),
    max_seeks_for_key: cdktf.stringToTerraform(struct!.maxSeeksForKey),
    max_user_connections: cdktf.stringToTerraform(struct!.maxUserConnections),
    mysql_firewall_mode: cdktf.booleanToTerraform(struct!.mysqlFirewallMode),
    mysql_zstd_default_compression_level: cdktf.numberToTerraform(struct!.mysqlZstdDefaultCompressionLevel),
    mysqlx_connect_timeout: cdktf.numberToTerraform(struct!.mysqlxConnectTimeout),
    mysqlx_deflate_default_compression_level: cdktf.numberToTerraform(struct!.mysqlxDeflateDefaultCompressionLevel),
    mysqlx_deflate_max_client_compression_level: cdktf.numberToTerraform(struct!.mysqlxDeflateMaxClientCompressionLevel),
    mysqlx_document_id_unique_prefix: cdktf.numberToTerraform(struct!.mysqlxDocumentIdUniquePrefix),
    mysqlx_enable_hello_notice: cdktf.booleanToTerraform(struct!.mysqlxEnableHelloNotice),
    mysqlx_idle_worker_thread_timeout: cdktf.numberToTerraform(struct!.mysqlxIdleWorkerThreadTimeout),
    mysqlx_interactive_timeout: cdktf.numberToTerraform(struct!.mysqlxInteractiveTimeout),
    mysqlx_lz4default_compression_level: cdktf.numberToTerraform(struct!.mysqlxLz4DefaultCompressionLevel),
    mysqlx_lz4max_client_compression_level: cdktf.numberToTerraform(struct!.mysqlxLz4MaxClientCompressionLevel),
    mysqlx_max_allowed_packet: cdktf.numberToTerraform(struct!.mysqlxMaxAllowedPacket),
    mysqlx_min_worker_threads: cdktf.numberToTerraform(struct!.mysqlxMinWorkerThreads),
    mysqlx_read_timeout: cdktf.numberToTerraform(struct!.mysqlxReadTimeout),
    mysqlx_wait_timeout: cdktf.numberToTerraform(struct!.mysqlxWaitTimeout),
    mysqlx_write_timeout: cdktf.numberToTerraform(struct!.mysqlxWriteTimeout),
    mysqlx_zstd_default_compression_level: cdktf.numberToTerraform(struct!.mysqlxZstdDefaultCompressionLevel),
    mysqlx_zstd_max_client_compression_level: cdktf.numberToTerraform(struct!.mysqlxZstdMaxClientCompressionLevel),
    net_read_timeout: cdktf.numberToTerraform(struct!.netReadTimeout),
    net_write_timeout: cdktf.numberToTerraform(struct!.netWriteTimeout),
    optimizer_switch: cdktf.stringToTerraform(struct!.optimizerSwitch),
    parser_max_mem_size: cdktf.stringToTerraform(struct!.parserMaxMemSize),
    query_alloc_block_size: cdktf.stringToTerraform(struct!.queryAllocBlockSize),
    query_prealloc_size: cdktf.stringToTerraform(struct!.queryPreallocSize),
    range_optimizer_max_mem_size: cdktf.stringToTerraform(struct!.rangeOptimizerMaxMemSize),
    regexp_time_limit: cdktf.numberToTerraform(struct!.regexpTimeLimit),
    relay_log_space_limit: cdktf.stringToTerraform(struct!.relayLogSpaceLimit),
    replica_net_timeout: cdktf.numberToTerraform(struct!.replicaNetTimeout),
    replica_parallel_workers: cdktf.numberToTerraform(struct!.replicaParallelWorkers),
    replica_type_conversions: cdktf.stringToTerraform(struct!.replicaTypeConversions),
    require_secure_transport: cdktf.booleanToTerraform(struct!.requireSecureTransport),
    skip_name_resolve: cdktf.booleanToTerraform(struct!.skipNameResolve),
    sort_buffer_size: cdktf.stringToTerraform(struct!.sortBufferSize),
    sql_generate_invisible_primary_key: cdktf.booleanToTerraform(struct!.sqlGenerateInvisiblePrimaryKey),
    sql_mode: cdktf.stringToTerraform(struct!.sqlMode),
    sql_require_primary_key: cdktf.booleanToTerraform(struct!.sqlRequirePrimaryKey),
    sql_warnings: cdktf.booleanToTerraform(struct!.sqlWarnings),
    table_definition_cache: cdktf.numberToTerraform(struct!.tableDefinitionCache),
    table_open_cache: cdktf.numberToTerraform(struct!.tableOpenCache),
    temptable_max_ram: cdktf.stringToTerraform(struct!.temptableMaxRam),
    thread_pool_dedicated_listeners: cdktf.booleanToTerraform(struct!.threadPoolDedicatedListeners),
    thread_pool_max_transactions_limit: cdktf.numberToTerraform(struct!.threadPoolMaxTransactionsLimit),
    thread_pool_query_threads_per_group: cdktf.numberToTerraform(struct!.threadPoolQueryThreadsPerGroup),
    thread_pool_size: cdktf.numberToTerraform(struct!.threadPoolSize),
    thread_pool_transaction_delay: cdktf.numberToTerraform(struct!.threadPoolTransactionDelay),
    time_zone: cdktf.stringToTerraform(struct!.timeZone),
    tmp_table_size: cdktf.stringToTerraform(struct!.tmpTableSize),
    transaction_isolation: cdktf.stringToTerraform(struct!.transactionIsolation),
    wait_timeout: cdktf.numberToTerraform(struct!.waitTimeout),
  }
}


export function mysqlMysqlConfigurationVariablesToHclTerraform(struct?: MysqlMysqlConfigurationVariablesOutputReference | MysqlMysqlConfigurationVariables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_increment_increment: {
      value: cdktf.numberToHclTerraform(struct!.autoIncrementIncrement),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    auto_increment_offset: {
      value: cdktf.numberToHclTerraform(struct!.autoIncrementOffset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    autocommit: {
      value: cdktf.booleanToHclTerraform(struct!.autocommit),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    big_tables: {
      value: cdktf.booleanToHclTerraform(struct!.bigTables),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    binlog_expire_logs_seconds: {
      value: cdktf.numberToHclTerraform(struct!.binlogExpireLogsSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    binlog_group_commit_sync_delay: {
      value: cdktf.numberToHclTerraform(struct!.binlogGroupCommitSyncDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    binlog_group_commit_sync_no_delay_count: {
      value: cdktf.numberToHclTerraform(struct!.binlogGroupCommitSyncNoDelayCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    binlog_row_metadata: {
      value: cdktf.stringToHclTerraform(struct!.binlogRowMetadata),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    binlog_row_value_options: {
      value: cdktf.stringToHclTerraform(struct!.binlogRowValueOptions),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    binlog_transaction_compression: {
      value: cdktf.booleanToHclTerraform(struct!.binlogTransactionCompression),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    block_encryption_mode: {
      value: cdktf.stringToHclTerraform(struct!.blockEncryptionMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    character_set_server: {
      value: cdktf.stringToHclTerraform(struct!.characterSetServer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    collation_server: {
      value: cdktf.stringToHclTerraform(struct!.collationServer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    completion_type: {
      value: cdktf.stringToHclTerraform(struct!.completionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connect_timeout: {
      value: cdktf.numberToHclTerraform(struct!.connectTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    connection_memory_chunk_size: {
      value: cdktf.numberToHclTerraform(struct!.connectionMemoryChunkSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    connection_memory_limit: {
      value: cdktf.stringToHclTerraform(struct!.connectionMemoryLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cte_max_recursion_depth: {
      value: cdktf.stringToHclTerraform(struct!.cteMaxRecursionDepth),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_authentication_plugin: {
      value: cdktf.stringToHclTerraform(struct!.defaultAuthenticationPlugin),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    explain_format: {
      value: cdktf.stringToHclTerraform(struct!.explainFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    explicit_defaults_for_timestamp: {
      value: cdktf.booleanToHclTerraform(struct!.explicitDefaultsForTimestamp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    foreign_key_checks: {
      value: cdktf.booleanToHclTerraform(struct!.foreignKeyChecks),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    generated_random_password_length: {
      value: cdktf.numberToHclTerraform(struct!.generatedRandomPasswordLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    global_connection_memory_limit: {
      value: cdktf.stringToHclTerraform(struct!.globalConnectionMemoryLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    global_connection_memory_tracking: {
      value: cdktf.booleanToHclTerraform(struct!.globalConnectionMemoryTracking),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    group_concat_max_len: {
      value: cdktf.stringToHclTerraform(struct!.groupConcatMaxLen),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_replication_consistency: {
      value: cdktf.stringToHclTerraform(struct!.groupReplicationConsistency),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    information_schema_stats_expiry: {
      value: cdktf.numberToHclTerraform(struct!.informationSchemaStatsExpiry),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    innodb_adaptive_hash_index: {
      value: cdktf.booleanToHclTerraform(struct!.innodbAdaptiveHashIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    innodb_autoinc_lock_mode: {
      value: cdktf.numberToHclTerraform(struct!.innodbAutoincLockMode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    innodb_buffer_pool_dump_pct: {
      value: cdktf.numberToHclTerraform(struct!.innodbBufferPoolDumpPct),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    innodb_buffer_pool_instances: {
      value: cdktf.numberToHclTerraform(struct!.innodbBufferPoolInstances),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    innodb_buffer_pool_size: {
      value: cdktf.stringToHclTerraform(struct!.innodbBufferPoolSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    innodb_change_buffering: {
      value: cdktf.stringToHclTerraform(struct!.innodbChangeBuffering),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    innodb_ddl_buffer_size: {
      value: cdktf.stringToHclTerraform(struct!.innodbDdlBufferSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    innodb_ddl_threads: {
      value: cdktf.numberToHclTerraform(struct!.innodbDdlThreads),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    innodb_ft_enable_stopword: {
      value: cdktf.booleanToHclTerraform(struct!.innodbFtEnableStopword),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    innodb_ft_max_token_size: {
      value: cdktf.numberToHclTerraform(struct!.innodbFtMaxTokenSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    innodb_ft_min_token_size: {
      value: cdktf.numberToHclTerraform(struct!.innodbFtMinTokenSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    innodb_ft_num_word_optimize: {
      value: cdktf.numberToHclTerraform(struct!.innodbFtNumWordOptimize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    innodb_ft_result_cache_limit: {
      value: cdktf.stringToHclTerraform(struct!.innodbFtResultCacheLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    innodb_ft_server_stopword_table: {
      value: cdktf.stringToHclTerraform(struct!.innodbFtServerStopwordTable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    innodb_lock_wait_timeout: {
      value: cdktf.numberToHclTerraform(struct!.innodbLockWaitTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    innodb_log_writer_threads: {
      value: cdktf.booleanToHclTerraform(struct!.innodbLogWriterThreads),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    innodb_max_purge_lag: {
      value: cdktf.stringToHclTerraform(struct!.innodbMaxPurgeLag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    innodb_max_purge_lag_delay: {
      value: cdktf.numberToHclTerraform(struct!.innodbMaxPurgeLagDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    innodb_numa_interleave: {
      value: cdktf.booleanToHclTerraform(struct!.innodbNumaInterleave),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    innodb_online_alter_log_max_size: {
      value: cdktf.stringToHclTerraform(struct!.innodbOnlineAlterLogMaxSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    innodb_redo_log_capacity: {
      value: cdktf.stringToHclTerraform(struct!.innodbRedoLogCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    innodb_rollback_on_timeout: {
      value: cdktf.booleanToHclTerraform(struct!.innodbRollbackOnTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    innodb_sort_buffer_size: {
      value: cdktf.numberToHclTerraform(struct!.innodbSortBufferSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    innodb_stats_persistent_sample_pages: {
      value: cdktf.stringToHclTerraform(struct!.innodbStatsPersistentSamplePages),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    innodb_stats_transient_sample_pages: {
      value: cdktf.stringToHclTerraform(struct!.innodbStatsTransientSamplePages),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    innodb_strict_mode: {
      value: cdktf.booleanToHclTerraform(struct!.innodbStrictMode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    innodb_undo_log_truncate: {
      value: cdktf.booleanToHclTerraform(struct!.innodbUndoLogTruncate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    interactive_timeout: {
      value: cdktf.numberToHclTerraform(struct!.interactiveTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    join_buffer_size: {
      value: cdktf.stringToHclTerraform(struct!.joinBufferSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_infile: {
      value: cdktf.booleanToHclTerraform(struct!.localInfile),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    long_query_time: {
      value: cdktf.numberToHclTerraform(struct!.longQueryTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mandatory_roles: {
      value: cdktf.stringToHclTerraform(struct!.mandatoryRoles),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_allowed_packet: {
      value: cdktf.numberToHclTerraform(struct!.maxAllowedPacket),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_binlog_cache_size: {
      value: cdktf.stringToHclTerraform(struct!.maxBinlogCacheSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_connect_errors: {
      value: cdktf.stringToHclTerraform(struct!.maxConnectErrors),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_connections: {
      value: cdktf.numberToHclTerraform(struct!.maxConnections),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_execution_time: {
      value: cdktf.stringToHclTerraform(struct!.maxExecutionTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_heap_table_size: {
      value: cdktf.stringToHclTerraform(struct!.maxHeapTableSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_prepared_stmt_count: {
      value: cdktf.numberToHclTerraform(struct!.maxPreparedStmtCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_seeks_for_key: {
      value: cdktf.stringToHclTerraform(struct!.maxSeeksForKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_user_connections: {
      value: cdktf.stringToHclTerraform(struct!.maxUserConnections),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mysql_firewall_mode: {
      value: cdktf.booleanToHclTerraform(struct!.mysqlFirewallMode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mysql_zstd_default_compression_level: {
      value: cdktf.numberToHclTerraform(struct!.mysqlZstdDefaultCompressionLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mysqlx_connect_timeout: {
      value: cdktf.numberToHclTerraform(struct!.mysqlxConnectTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mysqlx_deflate_default_compression_level: {
      value: cdktf.numberToHclTerraform(struct!.mysqlxDeflateDefaultCompressionLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mysqlx_deflate_max_client_compression_level: {
      value: cdktf.numberToHclTerraform(struct!.mysqlxDeflateMaxClientCompressionLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mysqlx_document_id_unique_prefix: {
      value: cdktf.numberToHclTerraform(struct!.mysqlxDocumentIdUniquePrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mysqlx_enable_hello_notice: {
      value: cdktf.booleanToHclTerraform(struct!.mysqlxEnableHelloNotice),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mysqlx_idle_worker_thread_timeout: {
      value: cdktf.numberToHclTerraform(struct!.mysqlxIdleWorkerThreadTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mysqlx_interactive_timeout: {
      value: cdktf.numberToHclTerraform(struct!.mysqlxInteractiveTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mysqlx_lz4default_compression_level: {
      value: cdktf.numberToHclTerraform(struct!.mysqlxLz4DefaultCompressionLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mysqlx_lz4max_client_compression_level: {
      value: cdktf.numberToHclTerraform(struct!.mysqlxLz4MaxClientCompressionLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mysqlx_max_allowed_packet: {
      value: cdktf.numberToHclTerraform(struct!.mysqlxMaxAllowedPacket),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mysqlx_min_worker_threads: {
      value: cdktf.numberToHclTerraform(struct!.mysqlxMinWorkerThreads),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mysqlx_read_timeout: {
      value: cdktf.numberToHclTerraform(struct!.mysqlxReadTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mysqlx_wait_timeout: {
      value: cdktf.numberToHclTerraform(struct!.mysqlxWaitTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mysqlx_write_timeout: {
      value: cdktf.numberToHclTerraform(struct!.mysqlxWriteTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mysqlx_zstd_default_compression_level: {
      value: cdktf.numberToHclTerraform(struct!.mysqlxZstdDefaultCompressionLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mysqlx_zstd_max_client_compression_level: {
      value: cdktf.numberToHclTerraform(struct!.mysqlxZstdMaxClientCompressionLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    net_read_timeout: {
      value: cdktf.numberToHclTerraform(struct!.netReadTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    net_write_timeout: {
      value: cdktf.numberToHclTerraform(struct!.netWriteTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    optimizer_switch: {
      value: cdktf.stringToHclTerraform(struct!.optimizerSwitch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parser_max_mem_size: {
      value: cdktf.stringToHclTerraform(struct!.parserMaxMemSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query_alloc_block_size: {
      value: cdktf.stringToHclTerraform(struct!.queryAllocBlockSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query_prealloc_size: {
      value: cdktf.stringToHclTerraform(struct!.queryPreallocSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    range_optimizer_max_mem_size: {
      value: cdktf.stringToHclTerraform(struct!.rangeOptimizerMaxMemSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regexp_time_limit: {
      value: cdktf.numberToHclTerraform(struct!.regexpTimeLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    relay_log_space_limit: {
      value: cdktf.stringToHclTerraform(struct!.relayLogSpaceLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replica_net_timeout: {
      value: cdktf.numberToHclTerraform(struct!.replicaNetTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    replica_parallel_workers: {
      value: cdktf.numberToHclTerraform(struct!.replicaParallelWorkers),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    replica_type_conversions: {
      value: cdktf.stringToHclTerraform(struct!.replicaTypeConversions),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    require_secure_transport: {
      value: cdktf.booleanToHclTerraform(struct!.requireSecureTransport),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    skip_name_resolve: {
      value: cdktf.booleanToHclTerraform(struct!.skipNameResolve),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sort_buffer_size: {
      value: cdktf.stringToHclTerraform(struct!.sortBufferSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sql_generate_invisible_primary_key: {
      value: cdktf.booleanToHclTerraform(struct!.sqlGenerateInvisiblePrimaryKey),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sql_mode: {
      value: cdktf.stringToHclTerraform(struct!.sqlMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sql_require_primary_key: {
      value: cdktf.booleanToHclTerraform(struct!.sqlRequirePrimaryKey),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sql_warnings: {
      value: cdktf.booleanToHclTerraform(struct!.sqlWarnings),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    table_definition_cache: {
      value: cdktf.numberToHclTerraform(struct!.tableDefinitionCache),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    table_open_cache: {
      value: cdktf.numberToHclTerraform(struct!.tableOpenCache),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    temptable_max_ram: {
      value: cdktf.stringToHclTerraform(struct!.temptableMaxRam),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    thread_pool_dedicated_listeners: {
      value: cdktf.booleanToHclTerraform(struct!.threadPoolDedicatedListeners),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    thread_pool_max_transactions_limit: {
      value: cdktf.numberToHclTerraform(struct!.threadPoolMaxTransactionsLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    thread_pool_query_threads_per_group: {
      value: cdktf.numberToHclTerraform(struct!.threadPoolQueryThreadsPerGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    thread_pool_size: {
      value: cdktf.numberToHclTerraform(struct!.threadPoolSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    thread_pool_transaction_delay: {
      value: cdktf.numberToHclTerraform(struct!.threadPoolTransactionDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time_zone: {
      value: cdktf.stringToHclTerraform(struct!.timeZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tmp_table_size: {
      value: cdktf.stringToHclTerraform(struct!.tmpTableSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transaction_isolation: {
      value: cdktf.stringToHclTerraform(struct!.transactionIsolation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wait_timeout: {
      value: cdktf.numberToHclTerraform(struct!.waitTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MysqlMysqlConfigurationVariablesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MysqlMysqlConfigurationVariables | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoIncrementIncrement !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoIncrementIncrement = this._autoIncrementIncrement;
    }
    if (this._autoIncrementOffset !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoIncrementOffset = this._autoIncrementOffset;
    }
    if (this._autocommit !== undefined) {
      hasAnyValues = true;
      internalValueResult.autocommit = this._autocommit;
    }
    if (this._bigTables !== undefined) {
      hasAnyValues = true;
      internalValueResult.bigTables = this._bigTables;
    }
    if (this._binlogExpireLogsSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.binlogExpireLogsSeconds = this._binlogExpireLogsSeconds;
    }
    if (this._binlogGroupCommitSyncDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.binlogGroupCommitSyncDelay = this._binlogGroupCommitSyncDelay;
    }
    if (this._binlogGroupCommitSyncNoDelayCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.binlogGroupCommitSyncNoDelayCount = this._binlogGroupCommitSyncNoDelayCount;
    }
    if (this._binlogRowMetadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.binlogRowMetadata = this._binlogRowMetadata;
    }
    if (this._binlogRowValueOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.binlogRowValueOptions = this._binlogRowValueOptions;
    }
    if (this._binlogTransactionCompression !== undefined) {
      hasAnyValues = true;
      internalValueResult.binlogTransactionCompression = this._binlogTransactionCompression;
    }
    if (this._blockEncryptionMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockEncryptionMode = this._blockEncryptionMode;
    }
    if (this._characterSetServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.characterSetServer = this._characterSetServer;
    }
    if (this._collationServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.collationServer = this._collationServer;
    }
    if (this._completionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.completionType = this._completionType;
    }
    if (this._connectTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectTimeout = this._connectTimeout;
    }
    if (this._connectionMemoryChunkSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionMemoryChunkSize = this._connectionMemoryChunkSize;
    }
    if (this._connectionMemoryLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionMemoryLimit = this._connectionMemoryLimit;
    }
    if (this._cteMaxRecursionDepth !== undefined) {
      hasAnyValues = true;
      internalValueResult.cteMaxRecursionDepth = this._cteMaxRecursionDepth;
    }
    if (this._defaultAuthenticationPlugin !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultAuthenticationPlugin = this._defaultAuthenticationPlugin;
    }
    if (this._explainFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.explainFormat = this._explainFormat;
    }
    if (this._explicitDefaultsForTimestamp !== undefined) {
      hasAnyValues = true;
      internalValueResult.explicitDefaultsForTimestamp = this._explicitDefaultsForTimestamp;
    }
    if (this._foreignKeyChecks !== undefined) {
      hasAnyValues = true;
      internalValueResult.foreignKeyChecks = this._foreignKeyChecks;
    }
    if (this._generatedRandomPasswordLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.generatedRandomPasswordLength = this._generatedRandomPasswordLength;
    }
    if (this._globalConnectionMemoryLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalConnectionMemoryLimit = this._globalConnectionMemoryLimit;
    }
    if (this._globalConnectionMemoryTracking !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalConnectionMemoryTracking = this._globalConnectionMemoryTracking;
    }
    if (this._groupConcatMaxLen !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupConcatMaxLen = this._groupConcatMaxLen;
    }
    if (this._groupReplicationConsistency !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupReplicationConsistency = this._groupReplicationConsistency;
    }
    if (this._informationSchemaStatsExpiry !== undefined) {
      hasAnyValues = true;
      internalValueResult.informationSchemaStatsExpiry = this._informationSchemaStatsExpiry;
    }
    if (this._innodbAdaptiveHashIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.innodbAdaptiveHashIndex = this._innodbAdaptiveHashIndex;
    }
    if (this._innodbAutoincLockMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.innodbAutoincLockMode = this._innodbAutoincLockMode;
    }
    if (this._innodbBufferPoolDumpPct !== undefined) {
      hasAnyValues = true;
      internalValueResult.innodbBufferPoolDumpPct = this._innodbBufferPoolDumpPct;
    }
    if (this._innodbBufferPoolInstances !== undefined) {
      hasAnyValues = true;
      internalValueResult.innodbBufferPoolInstances = this._innodbBufferPoolInstances;
    }
    if (this._innodbBufferPoolSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.innodbBufferPoolSize = this._innodbBufferPoolSize;
    }
    if (this._innodbChangeBuffering !== undefined) {
      hasAnyValues = true;
      internalValueResult.innodbChangeBuffering = this._innodbChangeBuffering;
    }
    if (this._innodbDdlBufferSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.innodbDdlBufferSize = this._innodbDdlBufferSize;
    }
    if (this._innodbDdlThreads !== undefined) {
      hasAnyValues = true;
      internalValueResult.innodbDdlThreads = this._innodbDdlThreads;
    }
    if (this._innodbFtEnableStopword !== undefined) {
      hasAnyValues = true;
      internalValueResult.innodbFtEnableStopword = this._innodbFtEnableStopword;
    }
    if (this._innodbFtMaxTokenSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.innodbFtMaxTokenSize = this._innodbFtMaxTokenSize;
    }
    if (this._innodbFtMinTokenSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.innodbFtMinTokenSize = this._innodbFtMinTokenSize;
    }
    if (this._innodbFtNumWordOptimize !== undefined) {
      hasAnyValues = true;
      internalValueResult.innodbFtNumWordOptimize = this._innodbFtNumWordOptimize;
    }
    if (this._innodbFtResultCacheLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.innodbFtResultCacheLimit = this._innodbFtResultCacheLimit;
    }
    if (this._innodbFtServerStopwordTable !== undefined) {
      hasAnyValues = true;
      internalValueResult.innodbFtServerStopwordTable = this._innodbFtServerStopwordTable;
    }
    if (this._innodbLockWaitTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.innodbLockWaitTimeout = this._innodbLockWaitTimeout;
    }
    if (this._innodbLogWriterThreads !== undefined) {
      hasAnyValues = true;
      internalValueResult.innodbLogWriterThreads = this._innodbLogWriterThreads;
    }
    if (this._innodbMaxPurgeLag !== undefined) {
      hasAnyValues = true;
      internalValueResult.innodbMaxPurgeLag = this._innodbMaxPurgeLag;
    }
    if (this._innodbMaxPurgeLagDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.innodbMaxPurgeLagDelay = this._innodbMaxPurgeLagDelay;
    }
    if (this._innodbNumaInterleave !== undefined) {
      hasAnyValues = true;
      internalValueResult.innodbNumaInterleave = this._innodbNumaInterleave;
    }
    if (this._innodbOnlineAlterLogMaxSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.innodbOnlineAlterLogMaxSize = this._innodbOnlineAlterLogMaxSize;
    }
    if (this._innodbRedoLogCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.innodbRedoLogCapacity = this._innodbRedoLogCapacity;
    }
    if (this._innodbRollbackOnTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.innodbRollbackOnTimeout = this._innodbRollbackOnTimeout;
    }
    if (this._innodbSortBufferSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.innodbSortBufferSize = this._innodbSortBufferSize;
    }
    if (this._innodbStatsPersistentSamplePages !== undefined) {
      hasAnyValues = true;
      internalValueResult.innodbStatsPersistentSamplePages = this._innodbStatsPersistentSamplePages;
    }
    if (this._innodbStatsTransientSamplePages !== undefined) {
      hasAnyValues = true;
      internalValueResult.innodbStatsTransientSamplePages = this._innodbStatsTransientSamplePages;
    }
    if (this._innodbStrictMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.innodbStrictMode = this._innodbStrictMode;
    }
    if (this._innodbUndoLogTruncate !== undefined) {
      hasAnyValues = true;
      internalValueResult.innodbUndoLogTruncate = this._innodbUndoLogTruncate;
    }
    if (this._interactiveTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.interactiveTimeout = this._interactiveTimeout;
    }
    if (this._joinBufferSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.joinBufferSize = this._joinBufferSize;
    }
    if (this._localInfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.localInfile = this._localInfile;
    }
    if (this._longQueryTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.longQueryTime = this._longQueryTime;
    }
    if (this._mandatoryRoles !== undefined) {
      hasAnyValues = true;
      internalValueResult.mandatoryRoles = this._mandatoryRoles;
    }
    if (this._maxAllowedPacket !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAllowedPacket = this._maxAllowedPacket;
    }
    if (this._maxBinlogCacheSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxBinlogCacheSize = this._maxBinlogCacheSize;
    }
    if (this._maxConnectErrors !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConnectErrors = this._maxConnectErrors;
    }
    if (this._maxConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConnections = this._maxConnections;
    }
    if (this._maxExecutionTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxExecutionTime = this._maxExecutionTime;
    }
    if (this._maxHeapTableSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxHeapTableSize = this._maxHeapTableSize;
    }
    if (this._maxPreparedStmtCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPreparedStmtCount = this._maxPreparedStmtCount;
    }
    if (this._maxSeeksForKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSeeksForKey = this._maxSeeksForKey;
    }
    if (this._maxUserConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUserConnections = this._maxUserConnections;
    }
    if (this._mysqlFirewallMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mysqlFirewallMode = this._mysqlFirewallMode;
    }
    if (this._mysqlZstdDefaultCompressionLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.mysqlZstdDefaultCompressionLevel = this._mysqlZstdDefaultCompressionLevel;
    }
    if (this._mysqlxConnectTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.mysqlxConnectTimeout = this._mysqlxConnectTimeout;
    }
    if (this._mysqlxDeflateDefaultCompressionLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.mysqlxDeflateDefaultCompressionLevel = this._mysqlxDeflateDefaultCompressionLevel;
    }
    if (this._mysqlxDeflateMaxClientCompressionLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.mysqlxDeflateMaxClientCompressionLevel = this._mysqlxDeflateMaxClientCompressionLevel;
    }
    if (this._mysqlxDocumentIdUniquePrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.mysqlxDocumentIdUniquePrefix = this._mysqlxDocumentIdUniquePrefix;
    }
    if (this._mysqlxEnableHelloNotice !== undefined) {
      hasAnyValues = true;
      internalValueResult.mysqlxEnableHelloNotice = this._mysqlxEnableHelloNotice;
    }
    if (this._mysqlxIdleWorkerThreadTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.mysqlxIdleWorkerThreadTimeout = this._mysqlxIdleWorkerThreadTimeout;
    }
    if (this._mysqlxInteractiveTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.mysqlxInteractiveTimeout = this._mysqlxInteractiveTimeout;
    }
    if (this._mysqlxLz4DefaultCompressionLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.mysqlxLz4DefaultCompressionLevel = this._mysqlxLz4DefaultCompressionLevel;
    }
    if (this._mysqlxLz4MaxClientCompressionLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.mysqlxLz4MaxClientCompressionLevel = this._mysqlxLz4MaxClientCompressionLevel;
    }
    if (this._mysqlxMaxAllowedPacket !== undefined) {
      hasAnyValues = true;
      internalValueResult.mysqlxMaxAllowedPacket = this._mysqlxMaxAllowedPacket;
    }
    if (this._mysqlxMinWorkerThreads !== undefined) {
      hasAnyValues = true;
      internalValueResult.mysqlxMinWorkerThreads = this._mysqlxMinWorkerThreads;
    }
    if (this._mysqlxReadTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.mysqlxReadTimeout = this._mysqlxReadTimeout;
    }
    if (this._mysqlxWaitTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.mysqlxWaitTimeout = this._mysqlxWaitTimeout;
    }
    if (this._mysqlxWriteTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.mysqlxWriteTimeout = this._mysqlxWriteTimeout;
    }
    if (this._mysqlxZstdDefaultCompressionLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.mysqlxZstdDefaultCompressionLevel = this._mysqlxZstdDefaultCompressionLevel;
    }
    if (this._mysqlxZstdMaxClientCompressionLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.mysqlxZstdMaxClientCompressionLevel = this._mysqlxZstdMaxClientCompressionLevel;
    }
    if (this._netReadTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.netReadTimeout = this._netReadTimeout;
    }
    if (this._netWriteTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.netWriteTimeout = this._netWriteTimeout;
    }
    if (this._optimizerSwitch !== undefined) {
      hasAnyValues = true;
      internalValueResult.optimizerSwitch = this._optimizerSwitch;
    }
    if (this._parserMaxMemSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.parserMaxMemSize = this._parserMaxMemSize;
    }
    if (this._queryAllocBlockSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryAllocBlockSize = this._queryAllocBlockSize;
    }
    if (this._queryPreallocSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryPreallocSize = this._queryPreallocSize;
    }
    if (this._rangeOptimizerMaxMemSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.rangeOptimizerMaxMemSize = this._rangeOptimizerMaxMemSize;
    }
    if (this._regexpTimeLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexpTimeLimit = this._regexpTimeLimit;
    }
    if (this._relayLogSpaceLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.relayLogSpaceLimit = this._relayLogSpaceLimit;
    }
    if (this._replicaNetTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicaNetTimeout = this._replicaNetTimeout;
    }
    if (this._replicaParallelWorkers !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicaParallelWorkers = this._replicaParallelWorkers;
    }
    if (this._replicaTypeConversions !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicaTypeConversions = this._replicaTypeConversions;
    }
    if (this._requireSecureTransport !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireSecureTransport = this._requireSecureTransport;
    }
    if (this._skipNameResolve !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipNameResolve = this._skipNameResolve;
    }
    if (this._sortBufferSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.sortBufferSize = this._sortBufferSize;
    }
    if (this._sqlGenerateInvisiblePrimaryKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqlGenerateInvisiblePrimaryKey = this._sqlGenerateInvisiblePrimaryKey;
    }
    if (this._sqlMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqlMode = this._sqlMode;
    }
    if (this._sqlRequirePrimaryKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqlRequirePrimaryKey = this._sqlRequirePrimaryKey;
    }
    if (this._sqlWarnings !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqlWarnings = this._sqlWarnings;
    }
    if (this._tableDefinitionCache !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableDefinitionCache = this._tableDefinitionCache;
    }
    if (this._tableOpenCache !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableOpenCache = this._tableOpenCache;
    }
    if (this._temptableMaxRam !== undefined) {
      hasAnyValues = true;
      internalValueResult.temptableMaxRam = this._temptableMaxRam;
    }
    if (this._threadPoolDedicatedListeners !== undefined) {
      hasAnyValues = true;
      internalValueResult.threadPoolDedicatedListeners = this._threadPoolDedicatedListeners;
    }
    if (this._threadPoolMaxTransactionsLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.threadPoolMaxTransactionsLimit = this._threadPoolMaxTransactionsLimit;
    }
    if (this._threadPoolQueryThreadsPerGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.threadPoolQueryThreadsPerGroup = this._threadPoolQueryThreadsPerGroup;
    }
    if (this._threadPoolSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.threadPoolSize = this._threadPoolSize;
    }
    if (this._threadPoolTransactionDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.threadPoolTransactionDelay = this._threadPoolTransactionDelay;
    }
    if (this._timeZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeZone = this._timeZone;
    }
    if (this._tmpTableSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.tmpTableSize = this._tmpTableSize;
    }
    if (this._transactionIsolation !== undefined) {
      hasAnyValues = true;
      internalValueResult.transactionIsolation = this._transactionIsolation;
    }
    if (this._waitTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.waitTimeout = this._waitTimeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MysqlMysqlConfigurationVariables | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoIncrementIncrement = undefined;
      this._autoIncrementOffset = undefined;
      this._autocommit = undefined;
      this._bigTables = undefined;
      this._binlogExpireLogsSeconds = undefined;
      this._binlogGroupCommitSyncDelay = undefined;
      this._binlogGroupCommitSyncNoDelayCount = undefined;
      this._binlogRowMetadata = undefined;
      this._binlogRowValueOptions = undefined;
      this._binlogTransactionCompression = undefined;
      this._blockEncryptionMode = undefined;
      this._characterSetServer = undefined;
      this._collationServer = undefined;
      this._completionType = undefined;
      this._connectTimeout = undefined;
      this._connectionMemoryChunkSize = undefined;
      this._connectionMemoryLimit = undefined;
      this._cteMaxRecursionDepth = undefined;
      this._defaultAuthenticationPlugin = undefined;
      this._explainFormat = undefined;
      this._explicitDefaultsForTimestamp = undefined;
      this._foreignKeyChecks = undefined;
      this._generatedRandomPasswordLength = undefined;
      this._globalConnectionMemoryLimit = undefined;
      this._globalConnectionMemoryTracking = undefined;
      this._groupConcatMaxLen = undefined;
      this._groupReplicationConsistency = undefined;
      this._informationSchemaStatsExpiry = undefined;
      this._innodbAdaptiveHashIndex = undefined;
      this._innodbAutoincLockMode = undefined;
      this._innodbBufferPoolDumpPct = undefined;
      this._innodbBufferPoolInstances = undefined;
      this._innodbBufferPoolSize = undefined;
      this._innodbChangeBuffering = undefined;
      this._innodbDdlBufferSize = undefined;
      this._innodbDdlThreads = undefined;
      this._innodbFtEnableStopword = undefined;
      this._innodbFtMaxTokenSize = undefined;
      this._innodbFtMinTokenSize = undefined;
      this._innodbFtNumWordOptimize = undefined;
      this._innodbFtResultCacheLimit = undefined;
      this._innodbFtServerStopwordTable = undefined;
      this._innodbLockWaitTimeout = undefined;
      this._innodbLogWriterThreads = undefined;
      this._innodbMaxPurgeLag = undefined;
      this._innodbMaxPurgeLagDelay = undefined;
      this._innodbNumaInterleave = undefined;
      this._innodbOnlineAlterLogMaxSize = undefined;
      this._innodbRedoLogCapacity = undefined;
      this._innodbRollbackOnTimeout = undefined;
      this._innodbSortBufferSize = undefined;
      this._innodbStatsPersistentSamplePages = undefined;
      this._innodbStatsTransientSamplePages = undefined;
      this._innodbStrictMode = undefined;
      this._innodbUndoLogTruncate = undefined;
      this._interactiveTimeout = undefined;
      this._joinBufferSize = undefined;
      this._localInfile = undefined;
      this._longQueryTime = undefined;
      this._mandatoryRoles = undefined;
      this._maxAllowedPacket = undefined;
      this._maxBinlogCacheSize = undefined;
      this._maxConnectErrors = undefined;
      this._maxConnections = undefined;
      this._maxExecutionTime = undefined;
      this._maxHeapTableSize = undefined;
      this._maxPreparedStmtCount = undefined;
      this._maxSeeksForKey = undefined;
      this._maxUserConnections = undefined;
      this._mysqlFirewallMode = undefined;
      this._mysqlZstdDefaultCompressionLevel = undefined;
      this._mysqlxConnectTimeout = undefined;
      this._mysqlxDeflateDefaultCompressionLevel = undefined;
      this._mysqlxDeflateMaxClientCompressionLevel = undefined;
      this._mysqlxDocumentIdUniquePrefix = undefined;
      this._mysqlxEnableHelloNotice = undefined;
      this._mysqlxIdleWorkerThreadTimeout = undefined;
      this._mysqlxInteractiveTimeout = undefined;
      this._mysqlxLz4DefaultCompressionLevel = undefined;
      this._mysqlxLz4MaxClientCompressionLevel = undefined;
      this._mysqlxMaxAllowedPacket = undefined;
      this._mysqlxMinWorkerThreads = undefined;
      this._mysqlxReadTimeout = undefined;
      this._mysqlxWaitTimeout = undefined;
      this._mysqlxWriteTimeout = undefined;
      this._mysqlxZstdDefaultCompressionLevel = undefined;
      this._mysqlxZstdMaxClientCompressionLevel = undefined;
      this._netReadTimeout = undefined;
      this._netWriteTimeout = undefined;
      this._optimizerSwitch = undefined;
      this._parserMaxMemSize = undefined;
      this._queryAllocBlockSize = undefined;
      this._queryPreallocSize = undefined;
      this._rangeOptimizerMaxMemSize = undefined;
      this._regexpTimeLimit = undefined;
      this._relayLogSpaceLimit = undefined;
      this._replicaNetTimeout = undefined;
      this._replicaParallelWorkers = undefined;
      this._replicaTypeConversions = undefined;
      this._requireSecureTransport = undefined;
      this._skipNameResolve = undefined;
      this._sortBufferSize = undefined;
      this._sqlGenerateInvisiblePrimaryKey = undefined;
      this._sqlMode = undefined;
      this._sqlRequirePrimaryKey = undefined;
      this._sqlWarnings = undefined;
      this._tableDefinitionCache = undefined;
      this._tableOpenCache = undefined;
      this._temptableMaxRam = undefined;
      this._threadPoolDedicatedListeners = undefined;
      this._threadPoolMaxTransactionsLimit = undefined;
      this._threadPoolQueryThreadsPerGroup = undefined;
      this._threadPoolSize = undefined;
      this._threadPoolTransactionDelay = undefined;
      this._timeZone = undefined;
      this._tmpTableSize = undefined;
      this._transactionIsolation = undefined;
      this._waitTimeout = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoIncrementIncrement = value.autoIncrementIncrement;
      this._autoIncrementOffset = value.autoIncrementOffset;
      this._autocommit = value.autocommit;
      this._bigTables = value.bigTables;
      this._binlogExpireLogsSeconds = value.binlogExpireLogsSeconds;
      this._binlogGroupCommitSyncDelay = value.binlogGroupCommitSyncDelay;
      this._binlogGroupCommitSyncNoDelayCount = value.binlogGroupCommitSyncNoDelayCount;
      this._binlogRowMetadata = value.binlogRowMetadata;
      this._binlogRowValueOptions = value.binlogRowValueOptions;
      this._binlogTransactionCompression = value.binlogTransactionCompression;
      this._blockEncryptionMode = value.blockEncryptionMode;
      this._characterSetServer = value.characterSetServer;
      this._collationServer = value.collationServer;
      this._completionType = value.completionType;
      this._connectTimeout = value.connectTimeout;
      this._connectionMemoryChunkSize = value.connectionMemoryChunkSize;
      this._connectionMemoryLimit = value.connectionMemoryLimit;
      this._cteMaxRecursionDepth = value.cteMaxRecursionDepth;
      this._defaultAuthenticationPlugin = value.defaultAuthenticationPlugin;
      this._explainFormat = value.explainFormat;
      this._explicitDefaultsForTimestamp = value.explicitDefaultsForTimestamp;
      this._foreignKeyChecks = value.foreignKeyChecks;
      this._generatedRandomPasswordLength = value.generatedRandomPasswordLength;
      this._globalConnectionMemoryLimit = value.globalConnectionMemoryLimit;
      this._globalConnectionMemoryTracking = value.globalConnectionMemoryTracking;
      this._groupConcatMaxLen = value.groupConcatMaxLen;
      this._groupReplicationConsistency = value.groupReplicationConsistency;
      this._informationSchemaStatsExpiry = value.informationSchemaStatsExpiry;
      this._innodbAdaptiveHashIndex = value.innodbAdaptiveHashIndex;
      this._innodbAutoincLockMode = value.innodbAutoincLockMode;
      this._innodbBufferPoolDumpPct = value.innodbBufferPoolDumpPct;
      this._innodbBufferPoolInstances = value.innodbBufferPoolInstances;
      this._innodbBufferPoolSize = value.innodbBufferPoolSize;
      this._innodbChangeBuffering = value.innodbChangeBuffering;
      this._innodbDdlBufferSize = value.innodbDdlBufferSize;
      this._innodbDdlThreads = value.innodbDdlThreads;
      this._innodbFtEnableStopword = value.innodbFtEnableStopword;
      this._innodbFtMaxTokenSize = value.innodbFtMaxTokenSize;
      this._innodbFtMinTokenSize = value.innodbFtMinTokenSize;
      this._innodbFtNumWordOptimize = value.innodbFtNumWordOptimize;
      this._innodbFtResultCacheLimit = value.innodbFtResultCacheLimit;
      this._innodbFtServerStopwordTable = value.innodbFtServerStopwordTable;
      this._innodbLockWaitTimeout = value.innodbLockWaitTimeout;
      this._innodbLogWriterThreads = value.innodbLogWriterThreads;
      this._innodbMaxPurgeLag = value.innodbMaxPurgeLag;
      this._innodbMaxPurgeLagDelay = value.innodbMaxPurgeLagDelay;
      this._innodbNumaInterleave = value.innodbNumaInterleave;
      this._innodbOnlineAlterLogMaxSize = value.innodbOnlineAlterLogMaxSize;
      this._innodbRedoLogCapacity = value.innodbRedoLogCapacity;
      this._innodbRollbackOnTimeout = value.innodbRollbackOnTimeout;
      this._innodbSortBufferSize = value.innodbSortBufferSize;
      this._innodbStatsPersistentSamplePages = value.innodbStatsPersistentSamplePages;
      this._innodbStatsTransientSamplePages = value.innodbStatsTransientSamplePages;
      this._innodbStrictMode = value.innodbStrictMode;
      this._innodbUndoLogTruncate = value.innodbUndoLogTruncate;
      this._interactiveTimeout = value.interactiveTimeout;
      this._joinBufferSize = value.joinBufferSize;
      this._localInfile = value.localInfile;
      this._longQueryTime = value.longQueryTime;
      this._mandatoryRoles = value.mandatoryRoles;
      this._maxAllowedPacket = value.maxAllowedPacket;
      this._maxBinlogCacheSize = value.maxBinlogCacheSize;
      this._maxConnectErrors = value.maxConnectErrors;
      this._maxConnections = value.maxConnections;
      this._maxExecutionTime = value.maxExecutionTime;
      this._maxHeapTableSize = value.maxHeapTableSize;
      this._maxPreparedStmtCount = value.maxPreparedStmtCount;
      this._maxSeeksForKey = value.maxSeeksForKey;
      this._maxUserConnections = value.maxUserConnections;
      this._mysqlFirewallMode = value.mysqlFirewallMode;
      this._mysqlZstdDefaultCompressionLevel = value.mysqlZstdDefaultCompressionLevel;
      this._mysqlxConnectTimeout = value.mysqlxConnectTimeout;
      this._mysqlxDeflateDefaultCompressionLevel = value.mysqlxDeflateDefaultCompressionLevel;
      this._mysqlxDeflateMaxClientCompressionLevel = value.mysqlxDeflateMaxClientCompressionLevel;
      this._mysqlxDocumentIdUniquePrefix = value.mysqlxDocumentIdUniquePrefix;
      this._mysqlxEnableHelloNotice = value.mysqlxEnableHelloNotice;
      this._mysqlxIdleWorkerThreadTimeout = value.mysqlxIdleWorkerThreadTimeout;
      this._mysqlxInteractiveTimeout = value.mysqlxInteractiveTimeout;
      this._mysqlxLz4DefaultCompressionLevel = value.mysqlxLz4DefaultCompressionLevel;
      this._mysqlxLz4MaxClientCompressionLevel = value.mysqlxLz4MaxClientCompressionLevel;
      this._mysqlxMaxAllowedPacket = value.mysqlxMaxAllowedPacket;
      this._mysqlxMinWorkerThreads = value.mysqlxMinWorkerThreads;
      this._mysqlxReadTimeout = value.mysqlxReadTimeout;
      this._mysqlxWaitTimeout = value.mysqlxWaitTimeout;
      this._mysqlxWriteTimeout = value.mysqlxWriteTimeout;
      this._mysqlxZstdDefaultCompressionLevel = value.mysqlxZstdDefaultCompressionLevel;
      this._mysqlxZstdMaxClientCompressionLevel = value.mysqlxZstdMaxClientCompressionLevel;
      this._netReadTimeout = value.netReadTimeout;
      this._netWriteTimeout = value.netWriteTimeout;
      this._optimizerSwitch = value.optimizerSwitch;
      this._parserMaxMemSize = value.parserMaxMemSize;
      this._queryAllocBlockSize = value.queryAllocBlockSize;
      this._queryPreallocSize = value.queryPreallocSize;
      this._rangeOptimizerMaxMemSize = value.rangeOptimizerMaxMemSize;
      this._regexpTimeLimit = value.regexpTimeLimit;
      this._relayLogSpaceLimit = value.relayLogSpaceLimit;
      this._replicaNetTimeout = value.replicaNetTimeout;
      this._replicaParallelWorkers = value.replicaParallelWorkers;
      this._replicaTypeConversions = value.replicaTypeConversions;
      this._requireSecureTransport = value.requireSecureTransport;
      this._skipNameResolve = value.skipNameResolve;
      this._sortBufferSize = value.sortBufferSize;
      this._sqlGenerateInvisiblePrimaryKey = value.sqlGenerateInvisiblePrimaryKey;
      this._sqlMode = value.sqlMode;
      this._sqlRequirePrimaryKey = value.sqlRequirePrimaryKey;
      this._sqlWarnings = value.sqlWarnings;
      this._tableDefinitionCache = value.tableDefinitionCache;
      this._tableOpenCache = value.tableOpenCache;
      this._temptableMaxRam = value.temptableMaxRam;
      this._threadPoolDedicatedListeners = value.threadPoolDedicatedListeners;
      this._threadPoolMaxTransactionsLimit = value.threadPoolMaxTransactionsLimit;
      this._threadPoolQueryThreadsPerGroup = value.threadPoolQueryThreadsPerGroup;
      this._threadPoolSize = value.threadPoolSize;
      this._threadPoolTransactionDelay = value.threadPoolTransactionDelay;
      this._timeZone = value.timeZone;
      this._tmpTableSize = value.tmpTableSize;
      this._transactionIsolation = value.transactionIsolation;
      this._waitTimeout = value.waitTimeout;
    }
  }

  // auto_increment_increment - computed: true, optional: true, required: false
  private _autoIncrementIncrement?: number; 
  public get autoIncrementIncrement() {
    return this.getNumberAttribute('auto_increment_increment');
  }
  public set autoIncrementIncrement(value: number) {
    this._autoIncrementIncrement = value;
  }
  public resetAutoIncrementIncrement() {
    this._autoIncrementIncrement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoIncrementIncrementInput() {
    return this._autoIncrementIncrement;
  }

  // auto_increment_offset - computed: true, optional: true, required: false
  private _autoIncrementOffset?: number; 
  public get autoIncrementOffset() {
    return this.getNumberAttribute('auto_increment_offset');
  }
  public set autoIncrementOffset(value: number) {
    this._autoIncrementOffset = value;
  }
  public resetAutoIncrementOffset() {
    this._autoIncrementOffset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoIncrementOffsetInput() {
    return this._autoIncrementOffset;
  }

  // autocommit - computed: true, optional: true, required: false
  private _autocommit?: boolean | cdktf.IResolvable; 
  public get autocommit() {
    return this.getBooleanAttribute('autocommit');
  }
  public set autocommit(value: boolean | cdktf.IResolvable) {
    this._autocommit = value;
  }
  public resetAutocommit() {
    this._autocommit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autocommitInput() {
    return this._autocommit;
  }

  // big_tables - computed: true, optional: true, required: false
  private _bigTables?: boolean | cdktf.IResolvable; 
  public get bigTables() {
    return this.getBooleanAttribute('big_tables');
  }
  public set bigTables(value: boolean | cdktf.IResolvable) {
    this._bigTables = value;
  }
  public resetBigTables() {
    this._bigTables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bigTablesInput() {
    return this._bigTables;
  }

  // binlog_expire_logs_seconds - computed: true, optional: true, required: false
  private _binlogExpireLogsSeconds?: number; 
  public get binlogExpireLogsSeconds() {
    return this.getNumberAttribute('binlog_expire_logs_seconds');
  }
  public set binlogExpireLogsSeconds(value: number) {
    this._binlogExpireLogsSeconds = value;
  }
  public resetBinlogExpireLogsSeconds() {
    this._binlogExpireLogsSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get binlogExpireLogsSecondsInput() {
    return this._binlogExpireLogsSeconds;
  }

  // binlog_group_commit_sync_delay - computed: true, optional: true, required: false
  private _binlogGroupCommitSyncDelay?: number; 
  public get binlogGroupCommitSyncDelay() {
    return this.getNumberAttribute('binlog_group_commit_sync_delay');
  }
  public set binlogGroupCommitSyncDelay(value: number) {
    this._binlogGroupCommitSyncDelay = value;
  }
  public resetBinlogGroupCommitSyncDelay() {
    this._binlogGroupCommitSyncDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get binlogGroupCommitSyncDelayInput() {
    return this._binlogGroupCommitSyncDelay;
  }

  // binlog_group_commit_sync_no_delay_count - computed: true, optional: true, required: false
  private _binlogGroupCommitSyncNoDelayCount?: number; 
  public get binlogGroupCommitSyncNoDelayCount() {
    return this.getNumberAttribute('binlog_group_commit_sync_no_delay_count');
  }
  public set binlogGroupCommitSyncNoDelayCount(value: number) {
    this._binlogGroupCommitSyncNoDelayCount = value;
  }
  public resetBinlogGroupCommitSyncNoDelayCount() {
    this._binlogGroupCommitSyncNoDelayCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get binlogGroupCommitSyncNoDelayCountInput() {
    return this._binlogGroupCommitSyncNoDelayCount;
  }

  // binlog_row_metadata - computed: true, optional: true, required: false
  private _binlogRowMetadata?: string; 
  public get binlogRowMetadata() {
    return this.getStringAttribute('binlog_row_metadata');
  }
  public set binlogRowMetadata(value: string) {
    this._binlogRowMetadata = value;
  }
  public resetBinlogRowMetadata() {
    this._binlogRowMetadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get binlogRowMetadataInput() {
    return this._binlogRowMetadata;
  }

  // binlog_row_value_options - computed: true, optional: true, required: false
  private _binlogRowValueOptions?: string; 
  public get binlogRowValueOptions() {
    return this.getStringAttribute('binlog_row_value_options');
  }
  public set binlogRowValueOptions(value: string) {
    this._binlogRowValueOptions = value;
  }
  public resetBinlogRowValueOptions() {
    this._binlogRowValueOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get binlogRowValueOptionsInput() {
    return this._binlogRowValueOptions;
  }

  // binlog_transaction_compression - computed: true, optional: true, required: false
  private _binlogTransactionCompression?: boolean | cdktf.IResolvable; 
  public get binlogTransactionCompression() {
    return this.getBooleanAttribute('binlog_transaction_compression');
  }
  public set binlogTransactionCompression(value: boolean | cdktf.IResolvable) {
    this._binlogTransactionCompression = value;
  }
  public resetBinlogTransactionCompression() {
    this._binlogTransactionCompression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get binlogTransactionCompressionInput() {
    return this._binlogTransactionCompression;
  }

  // block_encryption_mode - computed: true, optional: true, required: false
  private _blockEncryptionMode?: string; 
  public get blockEncryptionMode() {
    return this.getStringAttribute('block_encryption_mode');
  }
  public set blockEncryptionMode(value: string) {
    this._blockEncryptionMode = value;
  }
  public resetBlockEncryptionMode() {
    this._blockEncryptionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockEncryptionModeInput() {
    return this._blockEncryptionMode;
  }

  // character_set_server - computed: true, optional: true, required: false
  private _characterSetServer?: string; 
  public get characterSetServer() {
    return this.getStringAttribute('character_set_server');
  }
  public set characterSetServer(value: string) {
    this._characterSetServer = value;
  }
  public resetCharacterSetServer() {
    this._characterSetServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get characterSetServerInput() {
    return this._characterSetServer;
  }

  // collation_server - computed: true, optional: true, required: false
  private _collationServer?: string; 
  public get collationServer() {
    return this.getStringAttribute('collation_server');
  }
  public set collationServer(value: string) {
    this._collationServer = value;
  }
  public resetCollationServer() {
    this._collationServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collationServerInput() {
    return this._collationServer;
  }

  // completion_type - computed: true, optional: true, required: false
  private _completionType?: string; 
  public get completionType() {
    return this.getStringAttribute('completion_type');
  }
  public set completionType(value: string) {
    this._completionType = value;
  }
  public resetCompletionType() {
    this._completionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get completionTypeInput() {
    return this._completionType;
  }

  // connect_timeout - computed: true, optional: true, required: false
  private _connectTimeout?: number; 
  public get connectTimeout() {
    return this.getNumberAttribute('connect_timeout');
  }
  public set connectTimeout(value: number) {
    this._connectTimeout = value;
  }
  public resetConnectTimeout() {
    this._connectTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectTimeoutInput() {
    return this._connectTimeout;
  }

  // connection_memory_chunk_size - computed: true, optional: true, required: false
  private _connectionMemoryChunkSize?: number; 
  public get connectionMemoryChunkSize() {
    return this.getNumberAttribute('connection_memory_chunk_size');
  }
  public set connectionMemoryChunkSize(value: number) {
    this._connectionMemoryChunkSize = value;
  }
  public resetConnectionMemoryChunkSize() {
    this._connectionMemoryChunkSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionMemoryChunkSizeInput() {
    return this._connectionMemoryChunkSize;
  }

  // connection_memory_limit - computed: true, optional: true, required: false
  private _connectionMemoryLimit?: string; 
  public get connectionMemoryLimit() {
    return this.getStringAttribute('connection_memory_limit');
  }
  public set connectionMemoryLimit(value: string) {
    this._connectionMemoryLimit = value;
  }
  public resetConnectionMemoryLimit() {
    this._connectionMemoryLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionMemoryLimitInput() {
    return this._connectionMemoryLimit;
  }

  // cte_max_recursion_depth - computed: true, optional: true, required: false
  private _cteMaxRecursionDepth?: string; 
  public get cteMaxRecursionDepth() {
    return this.getStringAttribute('cte_max_recursion_depth');
  }
  public set cteMaxRecursionDepth(value: string) {
    this._cteMaxRecursionDepth = value;
  }
  public resetCteMaxRecursionDepth() {
    this._cteMaxRecursionDepth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cteMaxRecursionDepthInput() {
    return this._cteMaxRecursionDepth;
  }

  // default_authentication_plugin - computed: true, optional: true, required: false
  private _defaultAuthenticationPlugin?: string; 
  public get defaultAuthenticationPlugin() {
    return this.getStringAttribute('default_authentication_plugin');
  }
  public set defaultAuthenticationPlugin(value: string) {
    this._defaultAuthenticationPlugin = value;
  }
  public resetDefaultAuthenticationPlugin() {
    this._defaultAuthenticationPlugin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultAuthenticationPluginInput() {
    return this._defaultAuthenticationPlugin;
  }

  // explain_format - computed: true, optional: true, required: false
  private _explainFormat?: string; 
  public get explainFormat() {
    return this.getStringAttribute('explain_format');
  }
  public set explainFormat(value: string) {
    this._explainFormat = value;
  }
  public resetExplainFormat() {
    this._explainFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get explainFormatInput() {
    return this._explainFormat;
  }

  // explicit_defaults_for_timestamp - computed: true, optional: true, required: false
  private _explicitDefaultsForTimestamp?: boolean | cdktf.IResolvable; 
  public get explicitDefaultsForTimestamp() {
    return this.getBooleanAttribute('explicit_defaults_for_timestamp');
  }
  public set explicitDefaultsForTimestamp(value: boolean | cdktf.IResolvable) {
    this._explicitDefaultsForTimestamp = value;
  }
  public resetExplicitDefaultsForTimestamp() {
    this._explicitDefaultsForTimestamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get explicitDefaultsForTimestampInput() {
    return this._explicitDefaultsForTimestamp;
  }

  // foreign_key_checks - computed: true, optional: true, required: false
  private _foreignKeyChecks?: boolean | cdktf.IResolvable; 
  public get foreignKeyChecks() {
    return this.getBooleanAttribute('foreign_key_checks');
  }
  public set foreignKeyChecks(value: boolean | cdktf.IResolvable) {
    this._foreignKeyChecks = value;
  }
  public resetForeignKeyChecks() {
    this._foreignKeyChecks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get foreignKeyChecksInput() {
    return this._foreignKeyChecks;
  }

  // generated_random_password_length - computed: true, optional: true, required: false
  private _generatedRandomPasswordLength?: number; 
  public get generatedRandomPasswordLength() {
    return this.getNumberAttribute('generated_random_password_length');
  }
  public set generatedRandomPasswordLength(value: number) {
    this._generatedRandomPasswordLength = value;
  }
  public resetGeneratedRandomPasswordLength() {
    this._generatedRandomPasswordLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generatedRandomPasswordLengthInput() {
    return this._generatedRandomPasswordLength;
  }

  // global_connection_memory_limit - computed: true, optional: true, required: false
  private _globalConnectionMemoryLimit?: string; 
  public get globalConnectionMemoryLimit() {
    return this.getStringAttribute('global_connection_memory_limit');
  }
  public set globalConnectionMemoryLimit(value: string) {
    this._globalConnectionMemoryLimit = value;
  }
  public resetGlobalConnectionMemoryLimit() {
    this._globalConnectionMemoryLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalConnectionMemoryLimitInput() {
    return this._globalConnectionMemoryLimit;
  }

  // global_connection_memory_tracking - computed: true, optional: true, required: false
  private _globalConnectionMemoryTracking?: boolean | cdktf.IResolvable; 
  public get globalConnectionMemoryTracking() {
    return this.getBooleanAttribute('global_connection_memory_tracking');
  }
  public set globalConnectionMemoryTracking(value: boolean | cdktf.IResolvable) {
    this._globalConnectionMemoryTracking = value;
  }
  public resetGlobalConnectionMemoryTracking() {
    this._globalConnectionMemoryTracking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalConnectionMemoryTrackingInput() {
    return this._globalConnectionMemoryTracking;
  }

  // group_concat_max_len - computed: true, optional: true, required: false
  private _groupConcatMaxLen?: string; 
  public get groupConcatMaxLen() {
    return this.getStringAttribute('group_concat_max_len');
  }
  public set groupConcatMaxLen(value: string) {
    this._groupConcatMaxLen = value;
  }
  public resetGroupConcatMaxLen() {
    this._groupConcatMaxLen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupConcatMaxLenInput() {
    return this._groupConcatMaxLen;
  }

  // group_replication_consistency - computed: true, optional: true, required: false
  private _groupReplicationConsistency?: string; 
  public get groupReplicationConsistency() {
    return this.getStringAttribute('group_replication_consistency');
  }
  public set groupReplicationConsistency(value: string) {
    this._groupReplicationConsistency = value;
  }
  public resetGroupReplicationConsistency() {
    this._groupReplicationConsistency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupReplicationConsistencyInput() {
    return this._groupReplicationConsistency;
  }

  // information_schema_stats_expiry - computed: true, optional: true, required: false
  private _informationSchemaStatsExpiry?: number; 
  public get informationSchemaStatsExpiry() {
    return this.getNumberAttribute('information_schema_stats_expiry');
  }
  public set informationSchemaStatsExpiry(value: number) {
    this._informationSchemaStatsExpiry = value;
  }
  public resetInformationSchemaStatsExpiry() {
    this._informationSchemaStatsExpiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get informationSchemaStatsExpiryInput() {
    return this._informationSchemaStatsExpiry;
  }

  // innodb_adaptive_hash_index - computed: true, optional: true, required: false
  private _innodbAdaptiveHashIndex?: boolean | cdktf.IResolvable; 
  public get innodbAdaptiveHashIndex() {
    return this.getBooleanAttribute('innodb_adaptive_hash_index');
  }
  public set innodbAdaptiveHashIndex(value: boolean | cdktf.IResolvable) {
    this._innodbAdaptiveHashIndex = value;
  }
  public resetInnodbAdaptiveHashIndex() {
    this._innodbAdaptiveHashIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get innodbAdaptiveHashIndexInput() {
    return this._innodbAdaptiveHashIndex;
  }

  // innodb_autoinc_lock_mode - computed: true, optional: true, required: false
  private _innodbAutoincLockMode?: number; 
  public get innodbAutoincLockMode() {
    return this.getNumberAttribute('innodb_autoinc_lock_mode');
  }
  public set innodbAutoincLockMode(value: number) {
    this._innodbAutoincLockMode = value;
  }
  public resetInnodbAutoincLockMode() {
    this._innodbAutoincLockMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get innodbAutoincLockModeInput() {
    return this._innodbAutoincLockMode;
  }

  // innodb_buffer_pool_dump_pct - computed: true, optional: true, required: false
  private _innodbBufferPoolDumpPct?: number; 
  public get innodbBufferPoolDumpPct() {
    return this.getNumberAttribute('innodb_buffer_pool_dump_pct');
  }
  public set innodbBufferPoolDumpPct(value: number) {
    this._innodbBufferPoolDumpPct = value;
  }
  public resetInnodbBufferPoolDumpPct() {
    this._innodbBufferPoolDumpPct = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get innodbBufferPoolDumpPctInput() {
    return this._innodbBufferPoolDumpPct;
  }

  // innodb_buffer_pool_instances - computed: true, optional: true, required: false
  private _innodbBufferPoolInstances?: number; 
  public get innodbBufferPoolInstances() {
    return this.getNumberAttribute('innodb_buffer_pool_instances');
  }
  public set innodbBufferPoolInstances(value: number) {
    this._innodbBufferPoolInstances = value;
  }
  public resetInnodbBufferPoolInstances() {
    this._innodbBufferPoolInstances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get innodbBufferPoolInstancesInput() {
    return this._innodbBufferPoolInstances;
  }

  // innodb_buffer_pool_size - computed: true, optional: true, required: false
  private _innodbBufferPoolSize?: string; 
  public get innodbBufferPoolSize() {
    return this.getStringAttribute('innodb_buffer_pool_size');
  }
  public set innodbBufferPoolSize(value: string) {
    this._innodbBufferPoolSize = value;
  }
  public resetInnodbBufferPoolSize() {
    this._innodbBufferPoolSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get innodbBufferPoolSizeInput() {
    return this._innodbBufferPoolSize;
  }

  // innodb_change_buffering - computed: true, optional: true, required: false
  private _innodbChangeBuffering?: string; 
  public get innodbChangeBuffering() {
    return this.getStringAttribute('innodb_change_buffering');
  }
  public set innodbChangeBuffering(value: string) {
    this._innodbChangeBuffering = value;
  }
  public resetInnodbChangeBuffering() {
    this._innodbChangeBuffering = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get innodbChangeBufferingInput() {
    return this._innodbChangeBuffering;
  }

  // innodb_ddl_buffer_size - computed: true, optional: true, required: false
  private _innodbDdlBufferSize?: string; 
  public get innodbDdlBufferSize() {
    return this.getStringAttribute('innodb_ddl_buffer_size');
  }
  public set innodbDdlBufferSize(value: string) {
    this._innodbDdlBufferSize = value;
  }
  public resetInnodbDdlBufferSize() {
    this._innodbDdlBufferSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get innodbDdlBufferSizeInput() {
    return this._innodbDdlBufferSize;
  }

  // innodb_ddl_threads - computed: true, optional: true, required: false
  private _innodbDdlThreads?: number; 
  public get innodbDdlThreads() {
    return this.getNumberAttribute('innodb_ddl_threads');
  }
  public set innodbDdlThreads(value: number) {
    this._innodbDdlThreads = value;
  }
  public resetInnodbDdlThreads() {
    this._innodbDdlThreads = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get innodbDdlThreadsInput() {
    return this._innodbDdlThreads;
  }

  // innodb_ft_enable_stopword - computed: true, optional: true, required: false
  private _innodbFtEnableStopword?: boolean | cdktf.IResolvable; 
  public get innodbFtEnableStopword() {
    return this.getBooleanAttribute('innodb_ft_enable_stopword');
  }
  public set innodbFtEnableStopword(value: boolean | cdktf.IResolvable) {
    this._innodbFtEnableStopword = value;
  }
  public resetInnodbFtEnableStopword() {
    this._innodbFtEnableStopword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get innodbFtEnableStopwordInput() {
    return this._innodbFtEnableStopword;
  }

  // innodb_ft_max_token_size - computed: true, optional: true, required: false
  private _innodbFtMaxTokenSize?: number; 
  public get innodbFtMaxTokenSize() {
    return this.getNumberAttribute('innodb_ft_max_token_size');
  }
  public set innodbFtMaxTokenSize(value: number) {
    this._innodbFtMaxTokenSize = value;
  }
  public resetInnodbFtMaxTokenSize() {
    this._innodbFtMaxTokenSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get innodbFtMaxTokenSizeInput() {
    return this._innodbFtMaxTokenSize;
  }

  // innodb_ft_min_token_size - computed: true, optional: true, required: false
  private _innodbFtMinTokenSize?: number; 
  public get innodbFtMinTokenSize() {
    return this.getNumberAttribute('innodb_ft_min_token_size');
  }
  public set innodbFtMinTokenSize(value: number) {
    this._innodbFtMinTokenSize = value;
  }
  public resetInnodbFtMinTokenSize() {
    this._innodbFtMinTokenSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get innodbFtMinTokenSizeInput() {
    return this._innodbFtMinTokenSize;
  }

  // innodb_ft_num_word_optimize - computed: true, optional: true, required: false
  private _innodbFtNumWordOptimize?: number; 
  public get innodbFtNumWordOptimize() {
    return this.getNumberAttribute('innodb_ft_num_word_optimize');
  }
  public set innodbFtNumWordOptimize(value: number) {
    this._innodbFtNumWordOptimize = value;
  }
  public resetInnodbFtNumWordOptimize() {
    this._innodbFtNumWordOptimize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get innodbFtNumWordOptimizeInput() {
    return this._innodbFtNumWordOptimize;
  }

  // innodb_ft_result_cache_limit - computed: true, optional: true, required: false
  private _innodbFtResultCacheLimit?: string; 
  public get innodbFtResultCacheLimit() {
    return this.getStringAttribute('innodb_ft_result_cache_limit');
  }
  public set innodbFtResultCacheLimit(value: string) {
    this._innodbFtResultCacheLimit = value;
  }
  public resetInnodbFtResultCacheLimit() {
    this._innodbFtResultCacheLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get innodbFtResultCacheLimitInput() {
    return this._innodbFtResultCacheLimit;
  }

  // innodb_ft_server_stopword_table - computed: true, optional: true, required: false
  private _innodbFtServerStopwordTable?: string; 
  public get innodbFtServerStopwordTable() {
    return this.getStringAttribute('innodb_ft_server_stopword_table');
  }
  public set innodbFtServerStopwordTable(value: string) {
    this._innodbFtServerStopwordTable = value;
  }
  public resetInnodbFtServerStopwordTable() {
    this._innodbFtServerStopwordTable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get innodbFtServerStopwordTableInput() {
    return this._innodbFtServerStopwordTable;
  }

  // innodb_lock_wait_timeout - computed: true, optional: true, required: false
  private _innodbLockWaitTimeout?: number; 
  public get innodbLockWaitTimeout() {
    return this.getNumberAttribute('innodb_lock_wait_timeout');
  }
  public set innodbLockWaitTimeout(value: number) {
    this._innodbLockWaitTimeout = value;
  }
  public resetInnodbLockWaitTimeout() {
    this._innodbLockWaitTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get innodbLockWaitTimeoutInput() {
    return this._innodbLockWaitTimeout;
  }

  // innodb_log_writer_threads - computed: true, optional: true, required: false
  private _innodbLogWriterThreads?: boolean | cdktf.IResolvable; 
  public get innodbLogWriterThreads() {
    return this.getBooleanAttribute('innodb_log_writer_threads');
  }
  public set innodbLogWriterThreads(value: boolean | cdktf.IResolvable) {
    this._innodbLogWriterThreads = value;
  }
  public resetInnodbLogWriterThreads() {
    this._innodbLogWriterThreads = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get innodbLogWriterThreadsInput() {
    return this._innodbLogWriterThreads;
  }

  // innodb_max_purge_lag - computed: true, optional: true, required: false
  private _innodbMaxPurgeLag?: string; 
  public get innodbMaxPurgeLag() {
    return this.getStringAttribute('innodb_max_purge_lag');
  }
  public set innodbMaxPurgeLag(value: string) {
    this._innodbMaxPurgeLag = value;
  }
  public resetInnodbMaxPurgeLag() {
    this._innodbMaxPurgeLag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get innodbMaxPurgeLagInput() {
    return this._innodbMaxPurgeLag;
  }

  // innodb_max_purge_lag_delay - computed: true, optional: true, required: false
  private _innodbMaxPurgeLagDelay?: number; 
  public get innodbMaxPurgeLagDelay() {
    return this.getNumberAttribute('innodb_max_purge_lag_delay');
  }
  public set innodbMaxPurgeLagDelay(value: number) {
    this._innodbMaxPurgeLagDelay = value;
  }
  public resetInnodbMaxPurgeLagDelay() {
    this._innodbMaxPurgeLagDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get innodbMaxPurgeLagDelayInput() {
    return this._innodbMaxPurgeLagDelay;
  }

  // innodb_numa_interleave - computed: true, optional: true, required: false
  private _innodbNumaInterleave?: boolean | cdktf.IResolvable; 
  public get innodbNumaInterleave() {
    return this.getBooleanAttribute('innodb_numa_interleave');
  }
  public set innodbNumaInterleave(value: boolean | cdktf.IResolvable) {
    this._innodbNumaInterleave = value;
  }
  public resetInnodbNumaInterleave() {
    this._innodbNumaInterleave = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get innodbNumaInterleaveInput() {
    return this._innodbNumaInterleave;
  }

  // innodb_online_alter_log_max_size - computed: true, optional: true, required: false
  private _innodbOnlineAlterLogMaxSize?: string; 
  public get innodbOnlineAlterLogMaxSize() {
    return this.getStringAttribute('innodb_online_alter_log_max_size');
  }
  public set innodbOnlineAlterLogMaxSize(value: string) {
    this._innodbOnlineAlterLogMaxSize = value;
  }
  public resetInnodbOnlineAlterLogMaxSize() {
    this._innodbOnlineAlterLogMaxSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get innodbOnlineAlterLogMaxSizeInput() {
    return this._innodbOnlineAlterLogMaxSize;
  }

  // innodb_redo_log_capacity - computed: true, optional: true, required: false
  private _innodbRedoLogCapacity?: string; 
  public get innodbRedoLogCapacity() {
    return this.getStringAttribute('innodb_redo_log_capacity');
  }
  public set innodbRedoLogCapacity(value: string) {
    this._innodbRedoLogCapacity = value;
  }
  public resetInnodbRedoLogCapacity() {
    this._innodbRedoLogCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get innodbRedoLogCapacityInput() {
    return this._innodbRedoLogCapacity;
  }

  // innodb_rollback_on_timeout - computed: true, optional: true, required: false
  private _innodbRollbackOnTimeout?: boolean | cdktf.IResolvable; 
  public get innodbRollbackOnTimeout() {
    return this.getBooleanAttribute('innodb_rollback_on_timeout');
  }
  public set innodbRollbackOnTimeout(value: boolean | cdktf.IResolvable) {
    this._innodbRollbackOnTimeout = value;
  }
  public resetInnodbRollbackOnTimeout() {
    this._innodbRollbackOnTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get innodbRollbackOnTimeoutInput() {
    return this._innodbRollbackOnTimeout;
  }

  // innodb_sort_buffer_size - computed: true, optional: true, required: false
  private _innodbSortBufferSize?: number; 
  public get innodbSortBufferSize() {
    return this.getNumberAttribute('innodb_sort_buffer_size');
  }
  public set innodbSortBufferSize(value: number) {
    this._innodbSortBufferSize = value;
  }
  public resetInnodbSortBufferSize() {
    this._innodbSortBufferSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get innodbSortBufferSizeInput() {
    return this._innodbSortBufferSize;
  }

  // innodb_stats_persistent_sample_pages - computed: true, optional: true, required: false
  private _innodbStatsPersistentSamplePages?: string; 
  public get innodbStatsPersistentSamplePages() {
    return this.getStringAttribute('innodb_stats_persistent_sample_pages');
  }
  public set innodbStatsPersistentSamplePages(value: string) {
    this._innodbStatsPersistentSamplePages = value;
  }
  public resetInnodbStatsPersistentSamplePages() {
    this._innodbStatsPersistentSamplePages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get innodbStatsPersistentSamplePagesInput() {
    return this._innodbStatsPersistentSamplePages;
  }

  // innodb_stats_transient_sample_pages - computed: true, optional: true, required: false
  private _innodbStatsTransientSamplePages?: string; 
  public get innodbStatsTransientSamplePages() {
    return this.getStringAttribute('innodb_stats_transient_sample_pages');
  }
  public set innodbStatsTransientSamplePages(value: string) {
    this._innodbStatsTransientSamplePages = value;
  }
  public resetInnodbStatsTransientSamplePages() {
    this._innodbStatsTransientSamplePages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get innodbStatsTransientSamplePagesInput() {
    return this._innodbStatsTransientSamplePages;
  }

  // innodb_strict_mode - computed: true, optional: true, required: false
  private _innodbStrictMode?: boolean | cdktf.IResolvable; 
  public get innodbStrictMode() {
    return this.getBooleanAttribute('innodb_strict_mode');
  }
  public set innodbStrictMode(value: boolean | cdktf.IResolvable) {
    this._innodbStrictMode = value;
  }
  public resetInnodbStrictMode() {
    this._innodbStrictMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get innodbStrictModeInput() {
    return this._innodbStrictMode;
  }

  // innodb_undo_log_truncate - computed: true, optional: true, required: false
  private _innodbUndoLogTruncate?: boolean | cdktf.IResolvable; 
  public get innodbUndoLogTruncate() {
    return this.getBooleanAttribute('innodb_undo_log_truncate');
  }
  public set innodbUndoLogTruncate(value: boolean | cdktf.IResolvable) {
    this._innodbUndoLogTruncate = value;
  }
  public resetInnodbUndoLogTruncate() {
    this._innodbUndoLogTruncate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get innodbUndoLogTruncateInput() {
    return this._innodbUndoLogTruncate;
  }

  // interactive_timeout - computed: true, optional: true, required: false
  private _interactiveTimeout?: number; 
  public get interactiveTimeout() {
    return this.getNumberAttribute('interactive_timeout');
  }
  public set interactiveTimeout(value: number) {
    this._interactiveTimeout = value;
  }
  public resetInteractiveTimeout() {
    this._interactiveTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interactiveTimeoutInput() {
    return this._interactiveTimeout;
  }

  // join_buffer_size - computed: true, optional: true, required: false
  private _joinBufferSize?: string; 
  public get joinBufferSize() {
    return this.getStringAttribute('join_buffer_size');
  }
  public set joinBufferSize(value: string) {
    this._joinBufferSize = value;
  }
  public resetJoinBufferSize() {
    this._joinBufferSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get joinBufferSizeInput() {
    return this._joinBufferSize;
  }

  // local_infile - computed: true, optional: true, required: false
  private _localInfile?: boolean | cdktf.IResolvable; 
  public get localInfile() {
    return this.getBooleanAttribute('local_infile');
  }
  public set localInfile(value: boolean | cdktf.IResolvable) {
    this._localInfile = value;
  }
  public resetLocalInfile() {
    this._localInfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localInfileInput() {
    return this._localInfile;
  }

  // long_query_time - computed: true, optional: true, required: false
  private _longQueryTime?: number; 
  public get longQueryTime() {
    return this.getNumberAttribute('long_query_time');
  }
  public set longQueryTime(value: number) {
    this._longQueryTime = value;
  }
  public resetLongQueryTime() {
    this._longQueryTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get longQueryTimeInput() {
    return this._longQueryTime;
  }

  // mandatory_roles - computed: true, optional: true, required: false
  private _mandatoryRoles?: string; 
  public get mandatoryRoles() {
    return this.getStringAttribute('mandatory_roles');
  }
  public set mandatoryRoles(value: string) {
    this._mandatoryRoles = value;
  }
  public resetMandatoryRoles() {
    this._mandatoryRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mandatoryRolesInput() {
    return this._mandatoryRoles;
  }

  // max_allowed_packet - computed: true, optional: true, required: false
  private _maxAllowedPacket?: number; 
  public get maxAllowedPacket() {
    return this.getNumberAttribute('max_allowed_packet');
  }
  public set maxAllowedPacket(value: number) {
    this._maxAllowedPacket = value;
  }
  public resetMaxAllowedPacket() {
    this._maxAllowedPacket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAllowedPacketInput() {
    return this._maxAllowedPacket;
  }

  // max_binlog_cache_size - computed: true, optional: true, required: false
  private _maxBinlogCacheSize?: string; 
  public get maxBinlogCacheSize() {
    return this.getStringAttribute('max_binlog_cache_size');
  }
  public set maxBinlogCacheSize(value: string) {
    this._maxBinlogCacheSize = value;
  }
  public resetMaxBinlogCacheSize() {
    this._maxBinlogCacheSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBinlogCacheSizeInput() {
    return this._maxBinlogCacheSize;
  }

  // max_connect_errors - computed: true, optional: true, required: false
  private _maxConnectErrors?: string; 
  public get maxConnectErrors() {
    return this.getStringAttribute('max_connect_errors');
  }
  public set maxConnectErrors(value: string) {
    this._maxConnectErrors = value;
  }
  public resetMaxConnectErrors() {
    this._maxConnectErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConnectErrorsInput() {
    return this._maxConnectErrors;
  }

  // max_connections - computed: true, optional: true, required: false
  private _maxConnections?: number; 
  public get maxConnections() {
    return this.getNumberAttribute('max_connections');
  }
  public set maxConnections(value: number) {
    this._maxConnections = value;
  }
  public resetMaxConnections() {
    this._maxConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConnectionsInput() {
    return this._maxConnections;
  }

  // max_execution_time - computed: true, optional: true, required: false
  private _maxExecutionTime?: string; 
  public get maxExecutionTime() {
    return this.getStringAttribute('max_execution_time');
  }
  public set maxExecutionTime(value: string) {
    this._maxExecutionTime = value;
  }
  public resetMaxExecutionTime() {
    this._maxExecutionTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxExecutionTimeInput() {
    return this._maxExecutionTime;
  }

  // max_heap_table_size - computed: true, optional: true, required: false
  private _maxHeapTableSize?: string; 
  public get maxHeapTableSize() {
    return this.getStringAttribute('max_heap_table_size');
  }
  public set maxHeapTableSize(value: string) {
    this._maxHeapTableSize = value;
  }
  public resetMaxHeapTableSize() {
    this._maxHeapTableSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxHeapTableSizeInput() {
    return this._maxHeapTableSize;
  }

  // max_prepared_stmt_count - computed: true, optional: true, required: false
  private _maxPreparedStmtCount?: number; 
  public get maxPreparedStmtCount() {
    return this.getNumberAttribute('max_prepared_stmt_count');
  }
  public set maxPreparedStmtCount(value: number) {
    this._maxPreparedStmtCount = value;
  }
  public resetMaxPreparedStmtCount() {
    this._maxPreparedStmtCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPreparedStmtCountInput() {
    return this._maxPreparedStmtCount;
  }

  // max_seeks_for_key - computed: true, optional: true, required: false
  private _maxSeeksForKey?: string; 
  public get maxSeeksForKey() {
    return this.getStringAttribute('max_seeks_for_key');
  }
  public set maxSeeksForKey(value: string) {
    this._maxSeeksForKey = value;
  }
  public resetMaxSeeksForKey() {
    this._maxSeeksForKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSeeksForKeyInput() {
    return this._maxSeeksForKey;
  }

  // max_user_connections - computed: true, optional: true, required: false
  private _maxUserConnections?: string; 
  public get maxUserConnections() {
    return this.getStringAttribute('max_user_connections');
  }
  public set maxUserConnections(value: string) {
    this._maxUserConnections = value;
  }
  public resetMaxUserConnections() {
    this._maxUserConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUserConnectionsInput() {
    return this._maxUserConnections;
  }

  // mysql_firewall_mode - computed: true, optional: true, required: false
  private _mysqlFirewallMode?: boolean | cdktf.IResolvable; 
  public get mysqlFirewallMode() {
    return this.getBooleanAttribute('mysql_firewall_mode');
  }
  public set mysqlFirewallMode(value: boolean | cdktf.IResolvable) {
    this._mysqlFirewallMode = value;
  }
  public resetMysqlFirewallMode() {
    this._mysqlFirewallMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlFirewallModeInput() {
    return this._mysqlFirewallMode;
  }

  // mysql_zstd_default_compression_level - computed: true, optional: true, required: false
  private _mysqlZstdDefaultCompressionLevel?: number; 
  public get mysqlZstdDefaultCompressionLevel() {
    return this.getNumberAttribute('mysql_zstd_default_compression_level');
  }
  public set mysqlZstdDefaultCompressionLevel(value: number) {
    this._mysqlZstdDefaultCompressionLevel = value;
  }
  public resetMysqlZstdDefaultCompressionLevel() {
    this._mysqlZstdDefaultCompressionLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlZstdDefaultCompressionLevelInput() {
    return this._mysqlZstdDefaultCompressionLevel;
  }

  // mysqlx_connect_timeout - computed: true, optional: true, required: false
  private _mysqlxConnectTimeout?: number; 
  public get mysqlxConnectTimeout() {
    return this.getNumberAttribute('mysqlx_connect_timeout');
  }
  public set mysqlxConnectTimeout(value: number) {
    this._mysqlxConnectTimeout = value;
  }
  public resetMysqlxConnectTimeout() {
    this._mysqlxConnectTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlxConnectTimeoutInput() {
    return this._mysqlxConnectTimeout;
  }

  // mysqlx_deflate_default_compression_level - computed: true, optional: true, required: false
  private _mysqlxDeflateDefaultCompressionLevel?: number; 
  public get mysqlxDeflateDefaultCompressionLevel() {
    return this.getNumberAttribute('mysqlx_deflate_default_compression_level');
  }
  public set mysqlxDeflateDefaultCompressionLevel(value: number) {
    this._mysqlxDeflateDefaultCompressionLevel = value;
  }
  public resetMysqlxDeflateDefaultCompressionLevel() {
    this._mysqlxDeflateDefaultCompressionLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlxDeflateDefaultCompressionLevelInput() {
    return this._mysqlxDeflateDefaultCompressionLevel;
  }

  // mysqlx_deflate_max_client_compression_level - computed: true, optional: true, required: false
  private _mysqlxDeflateMaxClientCompressionLevel?: number; 
  public get mysqlxDeflateMaxClientCompressionLevel() {
    return this.getNumberAttribute('mysqlx_deflate_max_client_compression_level');
  }
  public set mysqlxDeflateMaxClientCompressionLevel(value: number) {
    this._mysqlxDeflateMaxClientCompressionLevel = value;
  }
  public resetMysqlxDeflateMaxClientCompressionLevel() {
    this._mysqlxDeflateMaxClientCompressionLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlxDeflateMaxClientCompressionLevelInput() {
    return this._mysqlxDeflateMaxClientCompressionLevel;
  }

  // mysqlx_document_id_unique_prefix - computed: true, optional: true, required: false
  private _mysqlxDocumentIdUniquePrefix?: number; 
  public get mysqlxDocumentIdUniquePrefix() {
    return this.getNumberAttribute('mysqlx_document_id_unique_prefix');
  }
  public set mysqlxDocumentIdUniquePrefix(value: number) {
    this._mysqlxDocumentIdUniquePrefix = value;
  }
  public resetMysqlxDocumentIdUniquePrefix() {
    this._mysqlxDocumentIdUniquePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlxDocumentIdUniquePrefixInput() {
    return this._mysqlxDocumentIdUniquePrefix;
  }

  // mysqlx_enable_hello_notice - computed: true, optional: true, required: false
  private _mysqlxEnableHelloNotice?: boolean | cdktf.IResolvable; 
  public get mysqlxEnableHelloNotice() {
    return this.getBooleanAttribute('mysqlx_enable_hello_notice');
  }
  public set mysqlxEnableHelloNotice(value: boolean | cdktf.IResolvable) {
    this._mysqlxEnableHelloNotice = value;
  }
  public resetMysqlxEnableHelloNotice() {
    this._mysqlxEnableHelloNotice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlxEnableHelloNoticeInput() {
    return this._mysqlxEnableHelloNotice;
  }

  // mysqlx_idle_worker_thread_timeout - computed: true, optional: true, required: false
  private _mysqlxIdleWorkerThreadTimeout?: number; 
  public get mysqlxIdleWorkerThreadTimeout() {
    return this.getNumberAttribute('mysqlx_idle_worker_thread_timeout');
  }
  public set mysqlxIdleWorkerThreadTimeout(value: number) {
    this._mysqlxIdleWorkerThreadTimeout = value;
  }
  public resetMysqlxIdleWorkerThreadTimeout() {
    this._mysqlxIdleWorkerThreadTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlxIdleWorkerThreadTimeoutInput() {
    return this._mysqlxIdleWorkerThreadTimeout;
  }

  // mysqlx_interactive_timeout - computed: true, optional: true, required: false
  private _mysqlxInteractiveTimeout?: number; 
  public get mysqlxInteractiveTimeout() {
    return this.getNumberAttribute('mysqlx_interactive_timeout');
  }
  public set mysqlxInteractiveTimeout(value: number) {
    this._mysqlxInteractiveTimeout = value;
  }
  public resetMysqlxInteractiveTimeout() {
    this._mysqlxInteractiveTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlxInteractiveTimeoutInput() {
    return this._mysqlxInteractiveTimeout;
  }

  // mysqlx_lz4default_compression_level - computed: true, optional: true, required: false
  private _mysqlxLz4DefaultCompressionLevel?: number; 
  public get mysqlxLz4DefaultCompressionLevel() {
    return this.getNumberAttribute('mysqlx_lz4default_compression_level');
  }
  public set mysqlxLz4DefaultCompressionLevel(value: number) {
    this._mysqlxLz4DefaultCompressionLevel = value;
  }
  public resetMysqlxLz4DefaultCompressionLevel() {
    this._mysqlxLz4DefaultCompressionLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlxLz4DefaultCompressionLevelInput() {
    return this._mysqlxLz4DefaultCompressionLevel;
  }

  // mysqlx_lz4max_client_compression_level - computed: true, optional: true, required: false
  private _mysqlxLz4MaxClientCompressionLevel?: number; 
  public get mysqlxLz4MaxClientCompressionLevel() {
    return this.getNumberAttribute('mysqlx_lz4max_client_compression_level');
  }
  public set mysqlxLz4MaxClientCompressionLevel(value: number) {
    this._mysqlxLz4MaxClientCompressionLevel = value;
  }
  public resetMysqlxLz4MaxClientCompressionLevel() {
    this._mysqlxLz4MaxClientCompressionLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlxLz4MaxClientCompressionLevelInput() {
    return this._mysqlxLz4MaxClientCompressionLevel;
  }

  // mysqlx_max_allowed_packet - computed: true, optional: true, required: false
  private _mysqlxMaxAllowedPacket?: number; 
  public get mysqlxMaxAllowedPacket() {
    return this.getNumberAttribute('mysqlx_max_allowed_packet');
  }
  public set mysqlxMaxAllowedPacket(value: number) {
    this._mysqlxMaxAllowedPacket = value;
  }
  public resetMysqlxMaxAllowedPacket() {
    this._mysqlxMaxAllowedPacket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlxMaxAllowedPacketInput() {
    return this._mysqlxMaxAllowedPacket;
  }

  // mysqlx_min_worker_threads - computed: true, optional: true, required: false
  private _mysqlxMinWorkerThreads?: number; 
  public get mysqlxMinWorkerThreads() {
    return this.getNumberAttribute('mysqlx_min_worker_threads');
  }
  public set mysqlxMinWorkerThreads(value: number) {
    this._mysqlxMinWorkerThreads = value;
  }
  public resetMysqlxMinWorkerThreads() {
    this._mysqlxMinWorkerThreads = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlxMinWorkerThreadsInput() {
    return this._mysqlxMinWorkerThreads;
  }

  // mysqlx_read_timeout - computed: true, optional: true, required: false
  private _mysqlxReadTimeout?: number; 
  public get mysqlxReadTimeout() {
    return this.getNumberAttribute('mysqlx_read_timeout');
  }
  public set mysqlxReadTimeout(value: number) {
    this._mysqlxReadTimeout = value;
  }
  public resetMysqlxReadTimeout() {
    this._mysqlxReadTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlxReadTimeoutInput() {
    return this._mysqlxReadTimeout;
  }

  // mysqlx_wait_timeout - computed: true, optional: true, required: false
  private _mysqlxWaitTimeout?: number; 
  public get mysqlxWaitTimeout() {
    return this.getNumberAttribute('mysqlx_wait_timeout');
  }
  public set mysqlxWaitTimeout(value: number) {
    this._mysqlxWaitTimeout = value;
  }
  public resetMysqlxWaitTimeout() {
    this._mysqlxWaitTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlxWaitTimeoutInput() {
    return this._mysqlxWaitTimeout;
  }

  // mysqlx_write_timeout - computed: true, optional: true, required: false
  private _mysqlxWriteTimeout?: number; 
  public get mysqlxWriteTimeout() {
    return this.getNumberAttribute('mysqlx_write_timeout');
  }
  public set mysqlxWriteTimeout(value: number) {
    this._mysqlxWriteTimeout = value;
  }
  public resetMysqlxWriteTimeout() {
    this._mysqlxWriteTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlxWriteTimeoutInput() {
    return this._mysqlxWriteTimeout;
  }

  // mysqlx_zstd_default_compression_level - computed: true, optional: true, required: false
  private _mysqlxZstdDefaultCompressionLevel?: number; 
  public get mysqlxZstdDefaultCompressionLevel() {
    return this.getNumberAttribute('mysqlx_zstd_default_compression_level');
  }
  public set mysqlxZstdDefaultCompressionLevel(value: number) {
    this._mysqlxZstdDefaultCompressionLevel = value;
  }
  public resetMysqlxZstdDefaultCompressionLevel() {
    this._mysqlxZstdDefaultCompressionLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlxZstdDefaultCompressionLevelInput() {
    return this._mysqlxZstdDefaultCompressionLevel;
  }

  // mysqlx_zstd_max_client_compression_level - computed: true, optional: true, required: false
  private _mysqlxZstdMaxClientCompressionLevel?: number; 
  public get mysqlxZstdMaxClientCompressionLevel() {
    return this.getNumberAttribute('mysqlx_zstd_max_client_compression_level');
  }
  public set mysqlxZstdMaxClientCompressionLevel(value: number) {
    this._mysqlxZstdMaxClientCompressionLevel = value;
  }
  public resetMysqlxZstdMaxClientCompressionLevel() {
    this._mysqlxZstdMaxClientCompressionLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlxZstdMaxClientCompressionLevelInput() {
    return this._mysqlxZstdMaxClientCompressionLevel;
  }

  // net_read_timeout - computed: true, optional: true, required: false
  private _netReadTimeout?: number; 
  public get netReadTimeout() {
    return this.getNumberAttribute('net_read_timeout');
  }
  public set netReadTimeout(value: number) {
    this._netReadTimeout = value;
  }
  public resetNetReadTimeout() {
    this._netReadTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netReadTimeoutInput() {
    return this._netReadTimeout;
  }

  // net_write_timeout - computed: true, optional: true, required: false
  private _netWriteTimeout?: number; 
  public get netWriteTimeout() {
    return this.getNumberAttribute('net_write_timeout');
  }
  public set netWriteTimeout(value: number) {
    this._netWriteTimeout = value;
  }
  public resetNetWriteTimeout() {
    this._netWriteTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netWriteTimeoutInput() {
    return this._netWriteTimeout;
  }

  // optimizer_switch - computed: true, optional: true, required: false
  private _optimizerSwitch?: string; 
  public get optimizerSwitch() {
    return this.getStringAttribute('optimizer_switch');
  }
  public set optimizerSwitch(value: string) {
    this._optimizerSwitch = value;
  }
  public resetOptimizerSwitch() {
    this._optimizerSwitch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optimizerSwitchInput() {
    return this._optimizerSwitch;
  }

  // parser_max_mem_size - computed: true, optional: true, required: false
  private _parserMaxMemSize?: string; 
  public get parserMaxMemSize() {
    return this.getStringAttribute('parser_max_mem_size');
  }
  public set parserMaxMemSize(value: string) {
    this._parserMaxMemSize = value;
  }
  public resetParserMaxMemSize() {
    this._parserMaxMemSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parserMaxMemSizeInput() {
    return this._parserMaxMemSize;
  }

  // query_alloc_block_size - computed: true, optional: true, required: false
  private _queryAllocBlockSize?: string; 
  public get queryAllocBlockSize() {
    return this.getStringAttribute('query_alloc_block_size');
  }
  public set queryAllocBlockSize(value: string) {
    this._queryAllocBlockSize = value;
  }
  public resetQueryAllocBlockSize() {
    this._queryAllocBlockSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryAllocBlockSizeInput() {
    return this._queryAllocBlockSize;
  }

  // query_prealloc_size - computed: true, optional: true, required: false
  private _queryPreallocSize?: string; 
  public get queryPreallocSize() {
    return this.getStringAttribute('query_prealloc_size');
  }
  public set queryPreallocSize(value: string) {
    this._queryPreallocSize = value;
  }
  public resetQueryPreallocSize() {
    this._queryPreallocSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryPreallocSizeInput() {
    return this._queryPreallocSize;
  }

  // range_optimizer_max_mem_size - computed: true, optional: true, required: false
  private _rangeOptimizerMaxMemSize?: string; 
  public get rangeOptimizerMaxMemSize() {
    return this.getStringAttribute('range_optimizer_max_mem_size');
  }
  public set rangeOptimizerMaxMemSize(value: string) {
    this._rangeOptimizerMaxMemSize = value;
  }
  public resetRangeOptimizerMaxMemSize() {
    this._rangeOptimizerMaxMemSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeOptimizerMaxMemSizeInput() {
    return this._rangeOptimizerMaxMemSize;
  }

  // regexp_time_limit - computed: true, optional: true, required: false
  private _regexpTimeLimit?: number; 
  public get regexpTimeLimit() {
    return this.getNumberAttribute('regexp_time_limit');
  }
  public set regexpTimeLimit(value: number) {
    this._regexpTimeLimit = value;
  }
  public resetRegexpTimeLimit() {
    this._regexpTimeLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexpTimeLimitInput() {
    return this._regexpTimeLimit;
  }

  // relay_log_space_limit - computed: true, optional: true, required: false
  private _relayLogSpaceLimit?: string; 
  public get relayLogSpaceLimit() {
    return this.getStringAttribute('relay_log_space_limit');
  }
  public set relayLogSpaceLimit(value: string) {
    this._relayLogSpaceLimit = value;
  }
  public resetRelayLogSpaceLimit() {
    this._relayLogSpaceLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relayLogSpaceLimitInput() {
    return this._relayLogSpaceLimit;
  }

  // replica_net_timeout - computed: true, optional: true, required: false
  private _replicaNetTimeout?: number; 
  public get replicaNetTimeout() {
    return this.getNumberAttribute('replica_net_timeout');
  }
  public set replicaNetTimeout(value: number) {
    this._replicaNetTimeout = value;
  }
  public resetReplicaNetTimeout() {
    this._replicaNetTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicaNetTimeoutInput() {
    return this._replicaNetTimeout;
  }

  // replica_parallel_workers - computed: true, optional: true, required: false
  private _replicaParallelWorkers?: number; 
  public get replicaParallelWorkers() {
    return this.getNumberAttribute('replica_parallel_workers');
  }
  public set replicaParallelWorkers(value: number) {
    this._replicaParallelWorkers = value;
  }
  public resetReplicaParallelWorkers() {
    this._replicaParallelWorkers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicaParallelWorkersInput() {
    return this._replicaParallelWorkers;
  }

  // replica_type_conversions - computed: true, optional: true, required: false
  private _replicaTypeConversions?: string; 
  public get replicaTypeConversions() {
    return this.getStringAttribute('replica_type_conversions');
  }
  public set replicaTypeConversions(value: string) {
    this._replicaTypeConversions = value;
  }
  public resetReplicaTypeConversions() {
    this._replicaTypeConversions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicaTypeConversionsInput() {
    return this._replicaTypeConversions;
  }

  // require_secure_transport - computed: true, optional: true, required: false
  private _requireSecureTransport?: boolean | cdktf.IResolvable; 
  public get requireSecureTransport() {
    return this.getBooleanAttribute('require_secure_transport');
  }
  public set requireSecureTransport(value: boolean | cdktf.IResolvable) {
    this._requireSecureTransport = value;
  }
  public resetRequireSecureTransport() {
    this._requireSecureTransport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireSecureTransportInput() {
    return this._requireSecureTransport;
  }

  // skip_name_resolve - computed: true, optional: true, required: false
  private _skipNameResolve?: boolean | cdktf.IResolvable; 
  public get skipNameResolve() {
    return this.getBooleanAttribute('skip_name_resolve');
  }
  public set skipNameResolve(value: boolean | cdktf.IResolvable) {
    this._skipNameResolve = value;
  }
  public resetSkipNameResolve() {
    this._skipNameResolve = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipNameResolveInput() {
    return this._skipNameResolve;
  }

  // sort_buffer_size - computed: true, optional: true, required: false
  private _sortBufferSize?: string; 
  public get sortBufferSize() {
    return this.getStringAttribute('sort_buffer_size');
  }
  public set sortBufferSize(value: string) {
    this._sortBufferSize = value;
  }
  public resetSortBufferSize() {
    this._sortBufferSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortBufferSizeInput() {
    return this._sortBufferSize;
  }

  // sql_generate_invisible_primary_key - computed: true, optional: true, required: false
  private _sqlGenerateInvisiblePrimaryKey?: boolean | cdktf.IResolvable; 
  public get sqlGenerateInvisiblePrimaryKey() {
    return this.getBooleanAttribute('sql_generate_invisible_primary_key');
  }
  public set sqlGenerateInvisiblePrimaryKey(value: boolean | cdktf.IResolvable) {
    this._sqlGenerateInvisiblePrimaryKey = value;
  }
  public resetSqlGenerateInvisiblePrimaryKey() {
    this._sqlGenerateInvisiblePrimaryKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlGenerateInvisiblePrimaryKeyInput() {
    return this._sqlGenerateInvisiblePrimaryKey;
  }

  // sql_mode - computed: true, optional: true, required: false
  private _sqlMode?: string; 
  public get sqlMode() {
    return this.getStringAttribute('sql_mode');
  }
  public set sqlMode(value: string) {
    this._sqlMode = value;
  }
  public resetSqlMode() {
    this._sqlMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlModeInput() {
    return this._sqlMode;
  }

  // sql_require_primary_key - computed: true, optional: true, required: false
  private _sqlRequirePrimaryKey?: boolean | cdktf.IResolvable; 
  public get sqlRequirePrimaryKey() {
    return this.getBooleanAttribute('sql_require_primary_key');
  }
  public set sqlRequirePrimaryKey(value: boolean | cdktf.IResolvable) {
    this._sqlRequirePrimaryKey = value;
  }
  public resetSqlRequirePrimaryKey() {
    this._sqlRequirePrimaryKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlRequirePrimaryKeyInput() {
    return this._sqlRequirePrimaryKey;
  }

  // sql_warnings - computed: true, optional: true, required: false
  private _sqlWarnings?: boolean | cdktf.IResolvable; 
  public get sqlWarnings() {
    return this.getBooleanAttribute('sql_warnings');
  }
  public set sqlWarnings(value: boolean | cdktf.IResolvable) {
    this._sqlWarnings = value;
  }
  public resetSqlWarnings() {
    this._sqlWarnings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlWarningsInput() {
    return this._sqlWarnings;
  }

  // table_definition_cache - computed: true, optional: true, required: false
  private _tableDefinitionCache?: number; 
  public get tableDefinitionCache() {
    return this.getNumberAttribute('table_definition_cache');
  }
  public set tableDefinitionCache(value: number) {
    this._tableDefinitionCache = value;
  }
  public resetTableDefinitionCache() {
    this._tableDefinitionCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableDefinitionCacheInput() {
    return this._tableDefinitionCache;
  }

  // table_open_cache - computed: true, optional: true, required: false
  private _tableOpenCache?: number; 
  public get tableOpenCache() {
    return this.getNumberAttribute('table_open_cache');
  }
  public set tableOpenCache(value: number) {
    this._tableOpenCache = value;
  }
  public resetTableOpenCache() {
    this._tableOpenCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableOpenCacheInput() {
    return this._tableOpenCache;
  }

  // temptable_max_ram - computed: true, optional: true, required: false
  private _temptableMaxRam?: string; 
  public get temptableMaxRam() {
    return this.getStringAttribute('temptable_max_ram');
  }
  public set temptableMaxRam(value: string) {
    this._temptableMaxRam = value;
  }
  public resetTemptableMaxRam() {
    this._temptableMaxRam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get temptableMaxRamInput() {
    return this._temptableMaxRam;
  }

  // thread_pool_dedicated_listeners - computed: true, optional: true, required: false
  private _threadPoolDedicatedListeners?: boolean | cdktf.IResolvable; 
  public get threadPoolDedicatedListeners() {
    return this.getBooleanAttribute('thread_pool_dedicated_listeners');
  }
  public set threadPoolDedicatedListeners(value: boolean | cdktf.IResolvable) {
    this._threadPoolDedicatedListeners = value;
  }
  public resetThreadPoolDedicatedListeners() {
    this._threadPoolDedicatedListeners = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threadPoolDedicatedListenersInput() {
    return this._threadPoolDedicatedListeners;
  }

  // thread_pool_max_transactions_limit - computed: true, optional: true, required: false
  private _threadPoolMaxTransactionsLimit?: number; 
  public get threadPoolMaxTransactionsLimit() {
    return this.getNumberAttribute('thread_pool_max_transactions_limit');
  }
  public set threadPoolMaxTransactionsLimit(value: number) {
    this._threadPoolMaxTransactionsLimit = value;
  }
  public resetThreadPoolMaxTransactionsLimit() {
    this._threadPoolMaxTransactionsLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threadPoolMaxTransactionsLimitInput() {
    return this._threadPoolMaxTransactionsLimit;
  }

  // thread_pool_query_threads_per_group - computed: true, optional: true, required: false
  private _threadPoolQueryThreadsPerGroup?: number; 
  public get threadPoolQueryThreadsPerGroup() {
    return this.getNumberAttribute('thread_pool_query_threads_per_group');
  }
  public set threadPoolQueryThreadsPerGroup(value: number) {
    this._threadPoolQueryThreadsPerGroup = value;
  }
  public resetThreadPoolQueryThreadsPerGroup() {
    this._threadPoolQueryThreadsPerGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threadPoolQueryThreadsPerGroupInput() {
    return this._threadPoolQueryThreadsPerGroup;
  }

  // thread_pool_size - computed: true, optional: true, required: false
  private _threadPoolSize?: number; 
  public get threadPoolSize() {
    return this.getNumberAttribute('thread_pool_size');
  }
  public set threadPoolSize(value: number) {
    this._threadPoolSize = value;
  }
  public resetThreadPoolSize() {
    this._threadPoolSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threadPoolSizeInput() {
    return this._threadPoolSize;
  }

  // thread_pool_transaction_delay - computed: true, optional: true, required: false
  private _threadPoolTransactionDelay?: number; 
  public get threadPoolTransactionDelay() {
    return this.getNumberAttribute('thread_pool_transaction_delay');
  }
  public set threadPoolTransactionDelay(value: number) {
    this._threadPoolTransactionDelay = value;
  }
  public resetThreadPoolTransactionDelay() {
    this._threadPoolTransactionDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threadPoolTransactionDelayInput() {
    return this._threadPoolTransactionDelay;
  }

  // time_zone - computed: true, optional: true, required: false
  private _timeZone?: string; 
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
  public set timeZone(value: string) {
    this._timeZone = value;
  }
  public resetTimeZone() {
    this._timeZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneInput() {
    return this._timeZone;
  }

  // tmp_table_size - computed: true, optional: true, required: false
  private _tmpTableSize?: string; 
  public get tmpTableSize() {
    return this.getStringAttribute('tmp_table_size');
  }
  public set tmpTableSize(value: string) {
    this._tmpTableSize = value;
  }
  public resetTmpTableSize() {
    this._tmpTableSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tmpTableSizeInput() {
    return this._tmpTableSize;
  }

  // transaction_isolation - computed: true, optional: true, required: false
  private _transactionIsolation?: string; 
  public get transactionIsolation() {
    return this.getStringAttribute('transaction_isolation');
  }
  public set transactionIsolation(value: string) {
    this._transactionIsolation = value;
  }
  public resetTransactionIsolation() {
    this._transactionIsolation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transactionIsolationInput() {
    return this._transactionIsolation;
  }

  // wait_timeout - computed: true, optional: true, required: false
  private _waitTimeout?: number; 
  public get waitTimeout() {
    return this.getNumberAttribute('wait_timeout');
  }
  public set waitTimeout(value: number) {
    this._waitTimeout = value;
  }
  public resetWaitTimeout() {
    this._waitTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitTimeoutInput() {
    return this._waitTimeout;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_configuration oci_mysql_mysql_configuration}
*/
export class MysqlMysqlConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_mysql_mysql_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MysqlMysqlConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MysqlMysqlConfiguration to import
  * @param importFromId The id of the existing MysqlMysqlConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MysqlMysqlConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_mysql_mysql_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/mysql_mysql_configuration oci_mysql_mysql_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MysqlMysqlConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: MysqlMysqlConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_mysql_mysql_configuration',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.25.0',
        providerVersionConstraint: '7.25.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._description = config.description;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._parentConfigurationId = config.parentConfigurationId;
    this._shapeName = config.shapeName;
    this._initVariables.internalValue = config.initVariables;
    this._timeouts.internalValue = config.timeouts;
    this._variables.internalValue = config.variables;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }; 
  public get definedTags() {
    return this.getStringMapAttribute('defined_tags');
  }
  public set definedTags(value: { [key: string]: string }) {
    this._definedTags = value;
  }
  public resetDefinedTags() {
    this._definedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedTagsInput() {
    return this._definedTags;
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

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }; 
  public get freeformTags() {
    return this.getStringMapAttribute('freeform_tags');
  }
  public set freeformTags(value: { [key: string]: string }) {
    this._freeformTags = value;
  }
  public resetFreeformTags() {
    this._freeformTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformTagsInput() {
    return this._freeformTags;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // parent_configuration_id - computed: true, optional: true, required: false
  private _parentConfigurationId?: string; 
  public get parentConfigurationId() {
    return this.getStringAttribute('parent_configuration_id');
  }
  public set parentConfigurationId(value: string) {
    this._parentConfigurationId = value;
  }
  public resetParentConfigurationId() {
    this._parentConfigurationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentConfigurationIdInput() {
    return this._parentConfigurationId;
  }

  // shape_name - computed: false, optional: false, required: true
  private _shapeName?: string; 
  public get shapeName() {
    return this.getStringAttribute('shape_name');
  }
  public set shapeName(value: string) {
    this._shapeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shapeNameInput() {
    return this._shapeName;
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

  // init_variables - computed: false, optional: true, required: false
  private _initVariables = new MysqlMysqlConfigurationInitVariablesOutputReference(this, "init_variables");
  public get initVariables() {
    return this._initVariables;
  }
  public putInitVariables(value: MysqlMysqlConfigurationInitVariables) {
    this._initVariables.internalValue = value;
  }
  public resetInitVariables() {
    this._initVariables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initVariablesInput() {
    return this._initVariables.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MysqlMysqlConfigurationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MysqlMysqlConfigurationTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // variables - computed: false, optional: true, required: false
  private _variables = new MysqlMysqlConfigurationVariablesOutputReference(this, "variables");
  public get variables() {
    return this._variables;
  }
  public putVariables(value: MysqlMysqlConfigurationVariables) {
    this._variables.internalValue = value;
  }
  public resetVariables() {
    this._variables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variablesInput() {
    return this._variables.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      parent_configuration_id: cdktf.stringToTerraform(this._parentConfigurationId),
      shape_name: cdktf.stringToTerraform(this._shapeName),
      init_variables: mysqlMysqlConfigurationInitVariablesToTerraform(this._initVariables.internalValue),
      timeouts: mysqlMysqlConfigurationTimeoutsToTerraform(this._timeouts.internalValue),
      variables: mysqlMysqlConfigurationVariablesToTerraform(this._variables.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      defined_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._definedTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      freeform_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._freeformTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parent_configuration_id: {
        value: cdktf.stringToHclTerraform(this._parentConfigurationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shape_name: {
        value: cdktf.stringToHclTerraform(this._shapeName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      init_variables: {
        value: mysqlMysqlConfigurationInitVariablesToHclTerraform(this._initVariables.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MysqlMysqlConfigurationInitVariablesList",
      },
      timeouts: {
        value: mysqlMysqlConfigurationTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MysqlMysqlConfigurationTimeouts",
      },
      variables: {
        value: mysqlMysqlConfigurationVariablesToHclTerraform(this._variables.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MysqlMysqlConfigurationVariablesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
