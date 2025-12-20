// https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/database_postgresql_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatabasePostgresqlV2Config extends cdktf.TerraformMetaArguments {
  /**
  * A list of IP addresses that can access the Managed Database. Each item can be a single IP address or a range in CIDR format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/database_postgresql_v2#allow_list DatabasePostgresqlV2#allow_list}
  */
  readonly allowList?: string[];
  /**
  * The number of Linode instance nodes deployed to the Managed Database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/database_postgresql_v2#cluster_size DatabasePostgresqlV2#cluster_size}
  */
  readonly clusterSize?: number;
  /**
  * Specifies a fraction of the table size to add to autovacuum_analyze_threshold when deciding whether to trigger an ANALYZE. The default is 0.2 (20% of table size)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/database_postgresql_v2#engine_config_pg_autovacuum_analyze_scale_factor DatabasePostgresqlV2#engine_config_pg_autovacuum_analyze_scale_factor}
  */
  readonly engineConfigPgAutovacuumAnalyzeScaleFactor?: number;
  /**
  * Specifies the minimum number of inserted, updated or deleted tuples needed to trigger an ANALYZE in any one table. The default is 50 tuples.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/database_postgresql_v2#engine_config_pg_autovacuum_analyze_threshold DatabasePostgresqlV2#engine_config_pg_autovacuum_analyze_threshold}
  */
  readonly engineConfigPgAutovacuumAnalyzeThreshold?: number;
  /**
  * Specifies the maximum number of autovacuum processes (other than the autovacuum launcher) that may be running at any one time. The default is three. This parameter can only be set at server start.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/database_postgresql_v2#engine_config_pg_autovacuum_max_workers DatabasePostgresqlV2#engine_config_pg_autovacuum_max_workers}
  */
  readonly engineConfigPgAutovacuumMaxWorkers?: number;
  /**
  * Specifies the minimum delay between autovacuum runs on any given database. The delay is measured in seconds, and the default is one minute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/database_postgresql_v2#engine_config_pg_autovacuum_naptime DatabasePostgresqlV2#engine_config_pg_autovacuum_naptime}
  */
  readonly engineConfigPgAutovacuumNaptime?: number;
  /**
  * Specifies the cost delay value that will be used in automatic VACUUM operations. If -1 is specified, the regular vacuum_cost_delay value will be used. The default value is 20 milliseconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/database_postgresql_v2#engine_config_pg_autovacuum_vacuum_cost_delay DatabasePostgresqlV2#engine_config_pg_autovacuum_vacuum_cost_delay}
  */
  readonly engineConfigPgAutovacuumVacuumCostDelay?: number;
  /**
  * Specifies the cost limit value that will be used in automatic VACUUM operations. If -1 is specified (which is the default), the regular vacuum_cost_limit value will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/database_postgresql_v2#engine_config_pg_autovacuum_vacuum_cost_limit DatabasePostgresqlV2#engine_config_pg_autovacuum_vacuum_cost_limit}
  */
  readonly engineConfigPgAutovacuumVacuumCostLimit?: number;
  /**
  * Specifies a fraction of the table size to add to autovacuum_vacuum_threshold when deciding whether to trigger a VACUUM. The default is 0.2 (20% of table size)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/database_postgresql_v2#engine_config_pg_autovacuum_vacuum_scale_factor DatabasePostgresqlV2#engine_config_pg_autovacuum_vacuum_scale_factor}
  */
  readonly engineConfigPgAutovacuumVacuumScaleFactor?: number;
  /**
  * Specifies the minimum number of updated or deleted tuples needed to trigger a VACUUM in any one table. The default is 50 tuples
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/database_postgresql_v2#engine_config_pg_autovacuum_vacuum_threshold DatabasePostgresqlV2#engine_config_pg_autovacuum_vacuum_threshold}
  */
  readonly engineConfigPgAutovacuumVacuumThreshold?: number;
  /**
  * Specifies the delay between activity rounds for the background writer in milliseconds. Default is 200.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/database_postgresql_v2#engine_config_pg_bgwriter_delay DatabasePostgresqlV2#engine_config_pg_bgwriter_delay}
  */
  readonly engineConfigPgBgwriterDelay?: number;
  /**
  * Whenever more than bgwriter_flush_after bytes have been written by the background writer, attempt to force the OS to issue these writes to the underlying storage. Specified in kilobytes, default is 512. Setting of 0 disables forced writeback.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/database_postgresql_v2#engine_config_pg_bgwriter_flush_after DatabasePostgresqlV2#engine_config_pg_bgwriter_flush_after}
  */
  readonly engineConfigPgBgwriterFlushAfter?: number;
  /**
  * In each round, no more than this many buffers will be written by the background writer. Setting this to zero disables background writing. Default is 100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/database_postgresql_v2#engine_config_pg_bgwriter_lru_maxpages DatabasePostgresqlV2#engine_config_pg_bgwriter_lru_maxpages}
  */
  readonly engineConfigPgBgwriterLruMaxpages?: number;
  /**
  * The average recent need for new buffers is multiplied by bgwriter_lru_multiplier to arrive at an estimate of the number that will be needed during the next round, (up to bgwriter_lru_maxpages). 1.0 represents a “just in time” policy of writing exactly the number of buffers predicted to be needed. Larger values provide some cushion against spikes in demand, while smaller values intentionally leave writes to be done by server processes. The default is 2.0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/database_postgresql_v2#engine_config_pg_bgwriter_lru_multiplier DatabasePostgresqlV2#engine_config_pg_bgwriter_lru_multiplier}
  */
  readonly engineConfigPgBgwriterLruMultiplier?: number;
  /**
  * This is the amount of time, in milliseconds, to wait on a lock before checking to see if there is a deadlock condition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/database_postgresql_v2#engine_config_pg_deadlock_timeout DatabasePostgresqlV2#engine_config_pg_deadlock_timeout}
  */
  readonly engineConfigPgDeadlockTimeout?: number;
  /**
  * Specifies the default TOAST compression method for values of compressible columns (the default is lz4).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/database_postgresql_v2#engine_config_pg_default_toast_compression DatabasePostgresqlV2#engine_config_pg_default_toast_compression}
  */
  readonly engineConfigPgDefaultToastCompression?: string;
  /**
  * Time out sessions with open transactions after this number of milliseconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/database_postgresql_v2#engine_config_pg_idle_in_transaction_session_timeout DatabasePostgresqlV2#engine_config_pg_idle_in_transaction_session_timeout}
  */
  readonly engineConfigPgIdleInTransactionSessionTimeout?: number;
  /**
  * Controls system-wide use of Just-in-Time Compilation (JIT).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/database_postgresql_v2#engine_config_pg_jit DatabasePostgresqlV2#engine_config_pg_jit}
  */
  readonly engineConfigPgJit?: boolean | cdktf.IResolvable;
  /**
  * PostgreSQL maximum number of files that can be open per process
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/database_postgresql_v2#engine_config_pg_max_files_per_process DatabasePostgresqlV2#engine_config_pg_max_files_per_process}
  */
  readonly engineConfigPgMaxFilesPerProcess?: number;
  /**
  * PostgreSQL maximum locks per transaction
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/database_postgresql_v2#engine_config_pg_max_locks_per_transaction DatabasePostgresqlV2#engine_config_pg_max_locks_per_transaction}
  */
  readonly engineConfigPgMaxLocksPerTransaction?: number;
  /**
  * PostgreSQL maximum logical replication workers (taken from the pool of max_parallel_workers)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/database_postgresql_v2#engine_config_pg_max_logical_replication_workers DatabasePostgresqlV2#engine_config_pg_max_logical_replication_workers}
  */
  readonly engineConfigPgMaxLogicalReplicationWorkers?: number;
  /**
  * Sets the maximum number of workers that the system can support for parallel queries
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/database_postgresql_v2#engine_config_pg_max_parallel_workers DatabasePostgresqlV2#engine_config_pg_max_parallel_workers}
  */
  readonly engineConfigPgMaxParallelWorkers?: number;
  /**
  * Sets the maximum number of workers that can be started by a single Gather or Gather Merge node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/database_postgresql_v2#engine_config_pg_max_parallel_workers_per_gather DatabasePostgresqlV2#engine_config_pg_max_parallel_workers_per_gather}
  */
  readonly engineConfigPgMaxParallelWorkersPerGather?: number;
  /**
  * PostgreSQL maximum predicate locks per transaction
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/database_postgresql_v2#engine_config_pg_max_pred_locks_per_transaction DatabasePostgresqlV2#engine_config_pg_max_pred_locks_per_transaction}
  */
  readonly engineConfigPgMaxPredLocksPerTransaction?: number;
  /**
  * PostgreSQL maximum replication slots
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/database_postgresql_v2#engine_config_pg_max_replication_slots DatabasePostgresqlV2#engine_config_pg_max_replication_slots}
  */
  readonly engineConfigPgMaxReplicationSlots?: number;
  /**
  * PostgreSQL maximum WAL size (MB) reserved for replication slots. Default is -1 (unlimited). wal_keep_size minimum WAL size setting takes precedence over this.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/database_postgresql_v2#engine_config_pg_max_slot_wal_keep_size DatabasePostgresqlV2#engine_config_pg_max_slot_wal_keep_size}
  */
  readonly engineConfigPgMaxSlotWalKeepSize?: number;
  /**
  * Maximum depth of the stack in bytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/database_postgresql_v2#engine_config_pg_max_stack_depth DatabasePostgresqlV2#engine_config_pg_max_stack_depth}
  */
  readonly engineConfigPgMaxStackDepth?: number;
  /**
  * Max standby archive delay in milliseconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/database_postgresql_v2#engine_config_pg_max_standby_archive_delay DatabasePostgresqlV2#engine_config_pg_max_standby_archive_delay}
  */
  readonly engineConfigPgMaxStandbyArchiveDelay?: number;
  /**
  * Max standby streaming delay in milliseconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/database_postgresql_v2#engine_config_pg_max_standby_streaming_delay DatabasePostgresqlV2#engine_config_pg_max_standby_streaming_delay}
  */
  readonly engineConfigPgMaxStandbyStreamingDelay?: number;
  /**
  * PostgreSQL maximum WAL senders
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/database_postgresql_v2#engine_config_pg_max_wal_senders DatabasePostgresqlV2#engine_config_pg_max_wal_senders}
  */
  readonly engineConfigPgMaxWalSenders?: number;
  /**
  * Sets the maximum number of background processes that the system can support
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/database_postgresql_v2#engine_config_pg_max_worker_processes DatabasePostgresqlV2#engine_config_pg_max_worker_processes}
  */
  readonly engineConfigPgMaxWorkerProcesses?: number;
  /**
  * Chooses the algorithm for encrypting passwords.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/database_postgresql_v2#engine_config_pg_password_encryption DatabasePostgresqlV2#engine_config_pg_password_encryption}
  */
  readonly engineConfigPgPasswordEncryption?: string;
  /**
  * Sets the time interval to run pg_partman's scheduled tasks
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/database_postgresql_v2#engine_config_pg_pg_partman_bgw_interval DatabasePostgresqlV2#engine_config_pg_pg_partman_bgw_interval}
  */
  readonly engineConfigPgPgPartmanBgwInterval?: number;
  /**
  * Controls which role to use for pg_partman's scheduled background tasks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/database_postgresql_v2#engine_config_pg_pg_partman_bgw_role DatabasePostgresqlV2#engine_config_pg_pg_partman_bgw_role}
  */
  readonly engineConfigPgPgPartmanBgwRole?: string;
  /**
  * Enables or disables query plan monitoring
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/database_postgresql_v2#engine_config_pg_pg_stat_monitor_pgsm_enable_query_plan DatabasePostgresqlV2#engine_config_pg_pg_stat_monitor_pgsm_enable_query_plan}
  */
  readonly engineConfigPgPgStatMonitorPgsmEnableQueryPlan?: boolean | cdktf.IResolvable;
  /**
  * Sets the maximum number of buckets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/database_postgresql_v2#engine_config_pg_pg_stat_monitor_pgsm_max_buckets DatabasePostgresqlV2#engine_config_pg_pg_stat_monitor_pgsm_max_buckets}
  */
  readonly engineConfigPgPgStatMonitorPgsmMaxBuckets?: number;
  /**
  * Controls which statements are counted. Specify top to track top-level statements (those issued directly by clients), all to also track nested statements (such as statements invoked within functions), or none to disable statement statistics collection. The default value is top.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/database_postgresql_v2#engine_config_pg_pg_stat_statements_track DatabasePostgresqlV2#engine_config_pg_pg_stat_statements_track}
  */
  readonly engineConfigPgPgStatStatementsTrack?: string;
  /**
  * Enable the pg_stat_monitor extension. Enabling this extension will cause the cluster to be restarted. When this extension is enabled, pg_stat_statements results for utility commands are unreliable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/database_postgresql_v2#engine_config_pg_stat_monitor_enable DatabasePostgresqlV2#engine_config_pg_stat_monitor_enable}
  */
  readonly engineConfigPgStatMonitorEnable?: boolean | cdktf.IResolvable;
  /**
  * PostgreSQL temporary file limit in KiB, -1 for unlimited
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/database_postgresql_v2#engine_config_pg_temp_file_limit DatabasePostgresqlV2#engine_config_pg_temp_file_limit}
  */
  readonly engineConfigPgTempFileLimit?: number;
  /**
  * PostgreSQL service timezone
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/database_postgresql_v2#engine_config_pg_timezone DatabasePostgresqlV2#engine_config_pg_timezone}
  */
  readonly engineConfigPgTimezone?: string;
  /**
  * Specifies the number of bytes reserved to track the currently executing command for each active session.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/database_postgresql_v2#engine_config_pg_track_activity_query_size DatabasePostgresqlV2#engine_config_pg_track_activity_query_size}
  */
  readonly engineConfigPgTrackActivityQuerySize?: number;
  /**
  * Record commit time of transactions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/database_postgresql_v2#engine_config_pg_track_commit_timestamp DatabasePostgresqlV2#engine_config_pg_track_commit_timestamp}
  */
  readonly engineConfigPgTrackCommitTimestamp?: string;
  /**
  * Enables tracking of function call counts and time used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/database_postgresql_v2#engine_config_pg_track_functions DatabasePostgresqlV2#engine_config_pg_track_functions}
  */
  readonly engineConfigPgTrackFunctions?: string;
  /**
  * Enables timing of database I/O calls. This parameter is off by default, because it will repeatedly query the operating system for the current time, which may cause significant overhead on some platforms.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/database_postgresql_v2#engine_config_pg_track_io_timing DatabasePostgresqlV2#engine_config_pg_track_io_timing}
  */
  readonly engineConfigPgTrackIoTiming?: string;
  /**
  * Terminate replication connections that are inactive for longer than this amount of time, in milliseconds. Setting this value to zero disables the timeout.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/database_postgresql_v2#engine_config_pg_wal_sender_timeout DatabasePostgresqlV2#engine_config_pg_wal_sender_timeout}
  */
  readonly engineConfigPgWalSenderTimeout?: number;
  /**
  * WAL flush interval in milliseconds. Note that setting this value to lower than the default 200ms may negatively impact performance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/database_postgresql_v2#engine_config_pg_wal_writer_delay DatabasePostgresqlV2#engine_config_pg_wal_writer_delay}
  */
  readonly engineConfigPgWalWriterDelay?: number;
  /**
  * Number of seconds of master unavailability before triggering database failover to standby.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/database_postgresql_v2#engine_config_pglookout_max_failover_replication_time_lag DatabasePostgresqlV2#engine_config_pglookout_max_failover_replication_time_lag}
  */
  readonly engineConfigPglookoutMaxFailoverReplicationTimeLag?: number;
  /**
  * Percentage of total RAM that the database server uses for shared memory buffers. Valid range is 20-60 (float), which corresponds to 20% - 60%. This setting adjusts the shared_buffers configuration value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/database_postgresql_v2#engine_config_shared_buffers_percentage DatabasePostgresqlV2#engine_config_shared_buffers_percentage}
  */
  readonly engineConfigSharedBuffersPercentage?: number;
  /**
  * Sets the maximum amount of memory to be used by a query operation (such as a sort or hash table) before writing to temporary disk files, in MB. Default is 1MB + 0.075% of total RAM (up to 32MB).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/database_postgresql_v2#engine_config_work_mem DatabasePostgresqlV2#engine_config_work_mem}
  */
  readonly engineConfigWorkMem?: number;
  /**
  * The unique ID of the database engine and version to use. (e.g. postgresql/16)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/database_postgresql_v2#engine_id DatabasePostgresqlV2#engine_id}
  */
  readonly engineId: string;
  /**
  * The database timestamp from which it was restored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/database_postgresql_v2#fork_restore_time DatabasePostgresqlV2#fork_restore_time}
  */
  readonly forkRestoreTime?: string;
  /**
  * The ID of the database that was forked from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/database_postgresql_v2#fork_source DatabasePostgresqlV2#fork_source}
  */
  readonly forkSource?: number;
  /**
  * A unique, user-defined string referring to the Managed Database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/database_postgresql_v2#label DatabasePostgresqlV2#label}
  */
  readonly label: string;
  /**
  * Restricts access to this database using a virtual private cloud (VPC) that you've configured in the region where the database will live.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/database_postgresql_v2#private_network DatabasePostgresqlV2#private_network}
  */
  readonly privateNetwork?: DatabasePostgresqlV2PrivateNetwork;
  /**
  * The Region ID for the Managed Database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/database_postgresql_v2#region DatabasePostgresqlV2#region}
  */
  readonly region: string;
  /**
  * Whether this database is suspended.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/database_postgresql_v2#suspended DatabasePostgresqlV2#suspended}
  */
  readonly suspended?: boolean | cdktf.IResolvable;
  /**
  * The Linode Instance type used by the Managed Database for its nodes.
  * 
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/database_postgresql_v2#type DatabasePostgresqlV2#type}
  */
  readonly type: string;
  /**
  * Configuration settings for automated patch update maintenance for the Managed Database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/database_postgresql_v2#updates DatabasePostgresqlV2#updates}
  */
  readonly updates?: DatabasePostgresqlV2Updates;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/database_postgresql_v2#timeouts DatabasePostgresqlV2#timeouts}
  */
  readonly timeouts?: DatabasePostgresqlV2Timeouts;
}
export interface DatabasePostgresqlV2PendingUpdates {
}

export function databasePostgresqlV2PendingUpdatesToTerraform(struct?: DatabasePostgresqlV2PendingUpdates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function databasePostgresqlV2PendingUpdatesToHclTerraform(struct?: DatabasePostgresqlV2PendingUpdates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatabasePostgresqlV2PendingUpdatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabasePostgresqlV2PendingUpdates | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabasePostgresqlV2PendingUpdates | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // deadline - computed: true, optional: false, required: false
  public get deadline() {
    return this.getStringAttribute('deadline');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // planned_for - computed: true, optional: false, required: false
  public get plannedFor() {
    return this.getStringAttribute('planned_for');
  }
}

export class DatabasePostgresqlV2PendingUpdatesList extends cdktf.ComplexList {

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
  public get(index: number): DatabasePostgresqlV2PendingUpdatesOutputReference {
    return new DatabasePostgresqlV2PendingUpdatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabasePostgresqlV2PrivateNetwork {
  /**
  * Set to `true` to allow clients outside of the VPC to connect to the database using a public IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/database_postgresql_v2#public_access DatabasePostgresqlV2#public_access}
  */
  readonly publicAccess?: boolean | cdktf.IResolvable;
  /**
  * The ID of the VPC subnet to restrict access to this database using.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/database_postgresql_v2#subnet_id DatabasePostgresqlV2#subnet_id}
  */
  readonly subnetId: number;
  /**
  *  The ID of the virtual private cloud (VPC) to restrict access to this database using.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/database_postgresql_v2#vpc_id DatabasePostgresqlV2#vpc_id}
  */
  readonly vpcId: number;
}

export function databasePostgresqlV2PrivateNetworkToTerraform(struct?: DatabasePostgresqlV2PrivateNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    public_access: cdktf.booleanToTerraform(struct!.publicAccess),
    subnet_id: cdktf.numberToTerraform(struct!.subnetId),
    vpc_id: cdktf.numberToTerraform(struct!.vpcId),
  }
}


export function databasePostgresqlV2PrivateNetworkToHclTerraform(struct?: DatabasePostgresqlV2PrivateNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    public_access: {
      value: cdktf.booleanToHclTerraform(struct!.publicAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    subnet_id: {
      value: cdktf.numberToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vpc_id: {
      value: cdktf.numberToHclTerraform(struct!.vpcId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabasePostgresqlV2PrivateNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatabasePostgresqlV2PrivateNetwork | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._publicAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicAccess = this._publicAccess;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._vpcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcId = this._vpcId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabasePostgresqlV2PrivateNetwork | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._publicAccess = undefined;
      this._subnetId = undefined;
      this._vpcId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._publicAccess = value.publicAccess;
      this._subnetId = value.subnetId;
      this._vpcId = value.vpcId;
    }
  }

  // public_access - computed: true, optional: true, required: false
  private _publicAccess?: boolean | cdktf.IResolvable; 
  public get publicAccess() {
    return this.getBooleanAttribute('public_access');
  }
  public set publicAccess(value: boolean | cdktf.IResolvable) {
    this._publicAccess = value;
  }
  public resetPublicAccess() {
    this._publicAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicAccessInput() {
    return this._publicAccess;
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: number; 
  public get subnetId() {
    return this.getNumberAttribute('subnet_id');
  }
  public set subnetId(value: number) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId?: number; 
  public get vpcId() {
    return this.getNumberAttribute('vpc_id');
  }
  public set vpcId(value: number) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }
}
export interface DatabasePostgresqlV2Updates {
  /**
  * The numeric reference for the day of the week to perform maintenance. 1 is Monday, 2 is Tuesday, through to 7 which is Sunday.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/database_postgresql_v2#day_of_week DatabasePostgresqlV2#day_of_week}
  */
  readonly dayOfWeek?: number;
  /**
  * The maximum maintenance window time in hours.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/database_postgresql_v2#duration DatabasePostgresqlV2#duration}
  */
  readonly duration?: number;
  /**
  * How frequently maintenance occurs. Currently can only be weekly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/database_postgresql_v2#frequency DatabasePostgresqlV2#frequency}
  */
  readonly frequency?: string;
  /**
  * How frequently maintenance occurs. Currently can only be weekly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/database_postgresql_v2#hour_of_day DatabasePostgresqlV2#hour_of_day}
  */
  readonly hourOfDay?: number;
}

export function databasePostgresqlV2UpdatesToTerraform(struct?: DatabasePostgresqlV2Updates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day_of_week: cdktf.numberToTerraform(struct!.dayOfWeek),
    duration: cdktf.numberToTerraform(struct!.duration),
    frequency: cdktf.stringToTerraform(struct!.frequency),
    hour_of_day: cdktf.numberToTerraform(struct!.hourOfDay),
  }
}


export function databasePostgresqlV2UpdatesToHclTerraform(struct?: DatabasePostgresqlV2Updates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    day_of_week: {
      value: cdktf.numberToHclTerraform(struct!.dayOfWeek),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    duration: {
      value: cdktf.numberToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    frequency: {
      value: cdktf.stringToHclTerraform(struct!.frequency),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hour_of_day: {
      value: cdktf.numberToHclTerraform(struct!.hourOfDay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabasePostgresqlV2UpdatesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatabasePostgresqlV2Updates | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dayOfWeek !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfWeek = this._dayOfWeek;
    }
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._frequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.frequency = this._frequency;
    }
    if (this._hourOfDay !== undefined) {
      hasAnyValues = true;
      internalValueResult.hourOfDay = this._hourOfDay;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabasePostgresqlV2Updates | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dayOfWeek = undefined;
      this._duration = undefined;
      this._frequency = undefined;
      this._hourOfDay = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dayOfWeek = value.dayOfWeek;
      this._duration = value.duration;
      this._frequency = value.frequency;
      this._hourOfDay = value.hourOfDay;
    }
  }

  // day_of_week - computed: true, optional: true, required: false
  private _dayOfWeek?: number; 
  public get dayOfWeek() {
    return this.getNumberAttribute('day_of_week');
  }
  public set dayOfWeek(value: number) {
    this._dayOfWeek = value;
  }
  public resetDayOfWeek() {
    this._dayOfWeek = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfWeekInput() {
    return this._dayOfWeek;
  }

  // duration - computed: true, optional: true, required: false
  private _duration?: number; 
  public get duration() {
    return this.getNumberAttribute('duration');
  }
  public set duration(value: number) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // frequency - computed: true, optional: true, required: false
  private _frequency?: string; 
  public get frequency() {
    return this.getStringAttribute('frequency');
  }
  public set frequency(value: string) {
    this._frequency = value;
  }
  public resetFrequency() {
    this._frequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency;
  }

  // hour_of_day - computed: true, optional: true, required: false
  private _hourOfDay?: number; 
  public get hourOfDay() {
    return this.getNumberAttribute('hour_of_day');
  }
  public set hourOfDay(value: number) {
    this._hourOfDay = value;
  }
  public resetHourOfDay() {
    this._hourOfDay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hourOfDayInput() {
    return this._hourOfDay;
  }
}
export interface DatabasePostgresqlV2Timeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/database_postgresql_v2#create DatabasePostgresqlV2#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/database_postgresql_v2#delete DatabasePostgresqlV2#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/database_postgresql_v2#update DatabasePostgresqlV2#update}
  */
  readonly update?: string;
}

export function databasePostgresqlV2TimeoutsToTerraform(struct?: DatabasePostgresqlV2Timeouts | cdktf.IResolvable): any {
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


export function databasePostgresqlV2TimeoutsToHclTerraform(struct?: DatabasePostgresqlV2Timeouts | cdktf.IResolvable): any {
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

export class DatabasePostgresqlV2TimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatabasePostgresqlV2Timeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DatabasePostgresqlV2Timeouts | cdktf.IResolvable | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/database_postgresql_v2 linode_database_postgresql_v2}
*/
export class DatabasePostgresqlV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "linode_database_postgresql_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DatabasePostgresqlV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatabasePostgresqlV2 to import
  * @param importFromId The id of the existing DatabasePostgresqlV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/database_postgresql_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatabasePostgresqlV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "linode_database_postgresql_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/resources/database_postgresql_v2 linode_database_postgresql_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatabasePostgresqlV2Config
  */
  public constructor(scope: Construct, id: string, config: DatabasePostgresqlV2Config) {
    super(scope, id, {
      terraformResourceType: 'linode_database_postgresql_v2',
      terraformGeneratorMetadata: {
        providerName: 'linode',
        providerVersion: '3.7.0',
        providerVersionConstraint: '3.7.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowList = config.allowList;
    this._clusterSize = config.clusterSize;
    this._engineConfigPgAutovacuumAnalyzeScaleFactor = config.engineConfigPgAutovacuumAnalyzeScaleFactor;
    this._engineConfigPgAutovacuumAnalyzeThreshold = config.engineConfigPgAutovacuumAnalyzeThreshold;
    this._engineConfigPgAutovacuumMaxWorkers = config.engineConfigPgAutovacuumMaxWorkers;
    this._engineConfigPgAutovacuumNaptime = config.engineConfigPgAutovacuumNaptime;
    this._engineConfigPgAutovacuumVacuumCostDelay = config.engineConfigPgAutovacuumVacuumCostDelay;
    this._engineConfigPgAutovacuumVacuumCostLimit = config.engineConfigPgAutovacuumVacuumCostLimit;
    this._engineConfigPgAutovacuumVacuumScaleFactor = config.engineConfigPgAutovacuumVacuumScaleFactor;
    this._engineConfigPgAutovacuumVacuumThreshold = config.engineConfigPgAutovacuumVacuumThreshold;
    this._engineConfigPgBgwriterDelay = config.engineConfigPgBgwriterDelay;
    this._engineConfigPgBgwriterFlushAfter = config.engineConfigPgBgwriterFlushAfter;
    this._engineConfigPgBgwriterLruMaxpages = config.engineConfigPgBgwriterLruMaxpages;
    this._engineConfigPgBgwriterLruMultiplier = config.engineConfigPgBgwriterLruMultiplier;
    this._engineConfigPgDeadlockTimeout = config.engineConfigPgDeadlockTimeout;
    this._engineConfigPgDefaultToastCompression = config.engineConfigPgDefaultToastCompression;
    this._engineConfigPgIdleInTransactionSessionTimeout = config.engineConfigPgIdleInTransactionSessionTimeout;
    this._engineConfigPgJit = config.engineConfigPgJit;
    this._engineConfigPgMaxFilesPerProcess = config.engineConfigPgMaxFilesPerProcess;
    this._engineConfigPgMaxLocksPerTransaction = config.engineConfigPgMaxLocksPerTransaction;
    this._engineConfigPgMaxLogicalReplicationWorkers = config.engineConfigPgMaxLogicalReplicationWorkers;
    this._engineConfigPgMaxParallelWorkers = config.engineConfigPgMaxParallelWorkers;
    this._engineConfigPgMaxParallelWorkersPerGather = config.engineConfigPgMaxParallelWorkersPerGather;
    this._engineConfigPgMaxPredLocksPerTransaction = config.engineConfigPgMaxPredLocksPerTransaction;
    this._engineConfigPgMaxReplicationSlots = config.engineConfigPgMaxReplicationSlots;
    this._engineConfigPgMaxSlotWalKeepSize = config.engineConfigPgMaxSlotWalKeepSize;
    this._engineConfigPgMaxStackDepth = config.engineConfigPgMaxStackDepth;
    this._engineConfigPgMaxStandbyArchiveDelay = config.engineConfigPgMaxStandbyArchiveDelay;
    this._engineConfigPgMaxStandbyStreamingDelay = config.engineConfigPgMaxStandbyStreamingDelay;
    this._engineConfigPgMaxWalSenders = config.engineConfigPgMaxWalSenders;
    this._engineConfigPgMaxWorkerProcesses = config.engineConfigPgMaxWorkerProcesses;
    this._engineConfigPgPasswordEncryption = config.engineConfigPgPasswordEncryption;
    this._engineConfigPgPgPartmanBgwInterval = config.engineConfigPgPgPartmanBgwInterval;
    this._engineConfigPgPgPartmanBgwRole = config.engineConfigPgPgPartmanBgwRole;
    this._engineConfigPgPgStatMonitorPgsmEnableQueryPlan = config.engineConfigPgPgStatMonitorPgsmEnableQueryPlan;
    this._engineConfigPgPgStatMonitorPgsmMaxBuckets = config.engineConfigPgPgStatMonitorPgsmMaxBuckets;
    this._engineConfigPgPgStatStatementsTrack = config.engineConfigPgPgStatStatementsTrack;
    this._engineConfigPgStatMonitorEnable = config.engineConfigPgStatMonitorEnable;
    this._engineConfigPgTempFileLimit = config.engineConfigPgTempFileLimit;
    this._engineConfigPgTimezone = config.engineConfigPgTimezone;
    this._engineConfigPgTrackActivityQuerySize = config.engineConfigPgTrackActivityQuerySize;
    this._engineConfigPgTrackCommitTimestamp = config.engineConfigPgTrackCommitTimestamp;
    this._engineConfigPgTrackFunctions = config.engineConfigPgTrackFunctions;
    this._engineConfigPgTrackIoTiming = config.engineConfigPgTrackIoTiming;
    this._engineConfigPgWalSenderTimeout = config.engineConfigPgWalSenderTimeout;
    this._engineConfigPgWalWriterDelay = config.engineConfigPgWalWriterDelay;
    this._engineConfigPglookoutMaxFailoverReplicationTimeLag = config.engineConfigPglookoutMaxFailoverReplicationTimeLag;
    this._engineConfigSharedBuffersPercentage = config.engineConfigSharedBuffersPercentage;
    this._engineConfigWorkMem = config.engineConfigWorkMem;
    this._engineId = config.engineId;
    this._forkRestoreTime = config.forkRestoreTime;
    this._forkSource = config.forkSource;
    this._label = config.label;
    this._privateNetwork.internalValue = config.privateNetwork;
    this._region = config.region;
    this._suspended = config.suspended;
    this._type = config.type;
    this._updates.internalValue = config.updates;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_list - computed: true, optional: true, required: false
  private _allowList?: string[]; 
  public get allowList() {
    return cdktf.Fn.tolist(this.getListAttribute('allow_list'));
  }
  public set allowList(value: string[]) {
    this._allowList = value;
  }
  public resetAllowList() {
    this._allowList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowListInput() {
    return this._allowList;
  }

  // ca_cert - computed: true, optional: false, required: false
  public get caCert() {
    return this.getStringAttribute('ca_cert');
  }

  // cluster_size - computed: true, optional: true, required: false
  private _clusterSize?: number; 
  public get clusterSize() {
    return this.getNumberAttribute('cluster_size');
  }
  public set clusterSize(value: number) {
    this._clusterSize = value;
  }
  public resetClusterSize() {
    this._clusterSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterSizeInput() {
    return this._clusterSize;
  }

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
  }

  // encrypted - computed: true, optional: false, required: false
  public get encrypted() {
    return this.getBooleanAttribute('encrypted');
  }

  // engine - computed: true, optional: false, required: false
  public get engine() {
    return this.getStringAttribute('engine');
  }

  // engine_config_pg_autovacuum_analyze_scale_factor - computed: true, optional: true, required: false
  private _engineConfigPgAutovacuumAnalyzeScaleFactor?: number; 
  public get engineConfigPgAutovacuumAnalyzeScaleFactor() {
    return this.getNumberAttribute('engine_config_pg_autovacuum_analyze_scale_factor');
  }
  public set engineConfigPgAutovacuumAnalyzeScaleFactor(value: number) {
    this._engineConfigPgAutovacuumAnalyzeScaleFactor = value;
  }
  public resetEngineConfigPgAutovacuumAnalyzeScaleFactor() {
    this._engineConfigPgAutovacuumAnalyzeScaleFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineConfigPgAutovacuumAnalyzeScaleFactorInput() {
    return this._engineConfigPgAutovacuumAnalyzeScaleFactor;
  }

  // engine_config_pg_autovacuum_analyze_threshold - computed: true, optional: true, required: false
  private _engineConfigPgAutovacuumAnalyzeThreshold?: number; 
  public get engineConfigPgAutovacuumAnalyzeThreshold() {
    return this.getNumberAttribute('engine_config_pg_autovacuum_analyze_threshold');
  }
  public set engineConfigPgAutovacuumAnalyzeThreshold(value: number) {
    this._engineConfigPgAutovacuumAnalyzeThreshold = value;
  }
  public resetEngineConfigPgAutovacuumAnalyzeThreshold() {
    this._engineConfigPgAutovacuumAnalyzeThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineConfigPgAutovacuumAnalyzeThresholdInput() {
    return this._engineConfigPgAutovacuumAnalyzeThreshold;
  }

  // engine_config_pg_autovacuum_max_workers - computed: true, optional: true, required: false
  private _engineConfigPgAutovacuumMaxWorkers?: number; 
  public get engineConfigPgAutovacuumMaxWorkers() {
    return this.getNumberAttribute('engine_config_pg_autovacuum_max_workers');
  }
  public set engineConfigPgAutovacuumMaxWorkers(value: number) {
    this._engineConfigPgAutovacuumMaxWorkers = value;
  }
  public resetEngineConfigPgAutovacuumMaxWorkers() {
    this._engineConfigPgAutovacuumMaxWorkers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineConfigPgAutovacuumMaxWorkersInput() {
    return this._engineConfigPgAutovacuumMaxWorkers;
  }

  // engine_config_pg_autovacuum_naptime - computed: true, optional: true, required: false
  private _engineConfigPgAutovacuumNaptime?: number; 
  public get engineConfigPgAutovacuumNaptime() {
    return this.getNumberAttribute('engine_config_pg_autovacuum_naptime');
  }
  public set engineConfigPgAutovacuumNaptime(value: number) {
    this._engineConfigPgAutovacuumNaptime = value;
  }
  public resetEngineConfigPgAutovacuumNaptime() {
    this._engineConfigPgAutovacuumNaptime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineConfigPgAutovacuumNaptimeInput() {
    return this._engineConfigPgAutovacuumNaptime;
  }

  // engine_config_pg_autovacuum_vacuum_cost_delay - computed: true, optional: true, required: false
  private _engineConfigPgAutovacuumVacuumCostDelay?: number; 
  public get engineConfigPgAutovacuumVacuumCostDelay() {
    return this.getNumberAttribute('engine_config_pg_autovacuum_vacuum_cost_delay');
  }
  public set engineConfigPgAutovacuumVacuumCostDelay(value: number) {
    this._engineConfigPgAutovacuumVacuumCostDelay = value;
  }
  public resetEngineConfigPgAutovacuumVacuumCostDelay() {
    this._engineConfigPgAutovacuumVacuumCostDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineConfigPgAutovacuumVacuumCostDelayInput() {
    return this._engineConfigPgAutovacuumVacuumCostDelay;
  }

  // engine_config_pg_autovacuum_vacuum_cost_limit - computed: true, optional: true, required: false
  private _engineConfigPgAutovacuumVacuumCostLimit?: number; 
  public get engineConfigPgAutovacuumVacuumCostLimit() {
    return this.getNumberAttribute('engine_config_pg_autovacuum_vacuum_cost_limit');
  }
  public set engineConfigPgAutovacuumVacuumCostLimit(value: number) {
    this._engineConfigPgAutovacuumVacuumCostLimit = value;
  }
  public resetEngineConfigPgAutovacuumVacuumCostLimit() {
    this._engineConfigPgAutovacuumVacuumCostLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineConfigPgAutovacuumVacuumCostLimitInput() {
    return this._engineConfigPgAutovacuumVacuumCostLimit;
  }

  // engine_config_pg_autovacuum_vacuum_scale_factor - computed: true, optional: true, required: false
  private _engineConfigPgAutovacuumVacuumScaleFactor?: number; 
  public get engineConfigPgAutovacuumVacuumScaleFactor() {
    return this.getNumberAttribute('engine_config_pg_autovacuum_vacuum_scale_factor');
  }
  public set engineConfigPgAutovacuumVacuumScaleFactor(value: number) {
    this._engineConfigPgAutovacuumVacuumScaleFactor = value;
  }
  public resetEngineConfigPgAutovacuumVacuumScaleFactor() {
    this._engineConfigPgAutovacuumVacuumScaleFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineConfigPgAutovacuumVacuumScaleFactorInput() {
    return this._engineConfigPgAutovacuumVacuumScaleFactor;
  }

  // engine_config_pg_autovacuum_vacuum_threshold - computed: true, optional: true, required: false
  private _engineConfigPgAutovacuumVacuumThreshold?: number; 
  public get engineConfigPgAutovacuumVacuumThreshold() {
    return this.getNumberAttribute('engine_config_pg_autovacuum_vacuum_threshold');
  }
  public set engineConfigPgAutovacuumVacuumThreshold(value: number) {
    this._engineConfigPgAutovacuumVacuumThreshold = value;
  }
  public resetEngineConfigPgAutovacuumVacuumThreshold() {
    this._engineConfigPgAutovacuumVacuumThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineConfigPgAutovacuumVacuumThresholdInput() {
    return this._engineConfigPgAutovacuumVacuumThreshold;
  }

  // engine_config_pg_bgwriter_delay - computed: true, optional: true, required: false
  private _engineConfigPgBgwriterDelay?: number; 
  public get engineConfigPgBgwriterDelay() {
    return this.getNumberAttribute('engine_config_pg_bgwriter_delay');
  }
  public set engineConfigPgBgwriterDelay(value: number) {
    this._engineConfigPgBgwriterDelay = value;
  }
  public resetEngineConfigPgBgwriterDelay() {
    this._engineConfigPgBgwriterDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineConfigPgBgwriterDelayInput() {
    return this._engineConfigPgBgwriterDelay;
  }

  // engine_config_pg_bgwriter_flush_after - computed: true, optional: true, required: false
  private _engineConfigPgBgwriterFlushAfter?: number; 
  public get engineConfigPgBgwriterFlushAfter() {
    return this.getNumberAttribute('engine_config_pg_bgwriter_flush_after');
  }
  public set engineConfigPgBgwriterFlushAfter(value: number) {
    this._engineConfigPgBgwriterFlushAfter = value;
  }
  public resetEngineConfigPgBgwriterFlushAfter() {
    this._engineConfigPgBgwriterFlushAfter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineConfigPgBgwriterFlushAfterInput() {
    return this._engineConfigPgBgwriterFlushAfter;
  }

  // engine_config_pg_bgwriter_lru_maxpages - computed: true, optional: true, required: false
  private _engineConfigPgBgwriterLruMaxpages?: number; 
  public get engineConfigPgBgwriterLruMaxpages() {
    return this.getNumberAttribute('engine_config_pg_bgwriter_lru_maxpages');
  }
  public set engineConfigPgBgwriterLruMaxpages(value: number) {
    this._engineConfigPgBgwriterLruMaxpages = value;
  }
  public resetEngineConfigPgBgwriterLruMaxpages() {
    this._engineConfigPgBgwriterLruMaxpages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineConfigPgBgwriterLruMaxpagesInput() {
    return this._engineConfigPgBgwriterLruMaxpages;
  }

  // engine_config_pg_bgwriter_lru_multiplier - computed: true, optional: true, required: false
  private _engineConfigPgBgwriterLruMultiplier?: number; 
  public get engineConfigPgBgwriterLruMultiplier() {
    return this.getNumberAttribute('engine_config_pg_bgwriter_lru_multiplier');
  }
  public set engineConfigPgBgwriterLruMultiplier(value: number) {
    this._engineConfigPgBgwriterLruMultiplier = value;
  }
  public resetEngineConfigPgBgwriterLruMultiplier() {
    this._engineConfigPgBgwriterLruMultiplier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineConfigPgBgwriterLruMultiplierInput() {
    return this._engineConfigPgBgwriterLruMultiplier;
  }

  // engine_config_pg_deadlock_timeout - computed: true, optional: true, required: false
  private _engineConfigPgDeadlockTimeout?: number; 
  public get engineConfigPgDeadlockTimeout() {
    return this.getNumberAttribute('engine_config_pg_deadlock_timeout');
  }
  public set engineConfigPgDeadlockTimeout(value: number) {
    this._engineConfigPgDeadlockTimeout = value;
  }
  public resetEngineConfigPgDeadlockTimeout() {
    this._engineConfigPgDeadlockTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineConfigPgDeadlockTimeoutInput() {
    return this._engineConfigPgDeadlockTimeout;
  }

  // engine_config_pg_default_toast_compression - computed: true, optional: true, required: false
  private _engineConfigPgDefaultToastCompression?: string; 
  public get engineConfigPgDefaultToastCompression() {
    return this.getStringAttribute('engine_config_pg_default_toast_compression');
  }
  public set engineConfigPgDefaultToastCompression(value: string) {
    this._engineConfigPgDefaultToastCompression = value;
  }
  public resetEngineConfigPgDefaultToastCompression() {
    this._engineConfigPgDefaultToastCompression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineConfigPgDefaultToastCompressionInput() {
    return this._engineConfigPgDefaultToastCompression;
  }

  // engine_config_pg_idle_in_transaction_session_timeout - computed: true, optional: true, required: false
  private _engineConfigPgIdleInTransactionSessionTimeout?: number; 
  public get engineConfigPgIdleInTransactionSessionTimeout() {
    return this.getNumberAttribute('engine_config_pg_idle_in_transaction_session_timeout');
  }
  public set engineConfigPgIdleInTransactionSessionTimeout(value: number) {
    this._engineConfigPgIdleInTransactionSessionTimeout = value;
  }
  public resetEngineConfigPgIdleInTransactionSessionTimeout() {
    this._engineConfigPgIdleInTransactionSessionTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineConfigPgIdleInTransactionSessionTimeoutInput() {
    return this._engineConfigPgIdleInTransactionSessionTimeout;
  }

  // engine_config_pg_jit - computed: true, optional: true, required: false
  private _engineConfigPgJit?: boolean | cdktf.IResolvable; 
  public get engineConfigPgJit() {
    return this.getBooleanAttribute('engine_config_pg_jit');
  }
  public set engineConfigPgJit(value: boolean | cdktf.IResolvable) {
    this._engineConfigPgJit = value;
  }
  public resetEngineConfigPgJit() {
    this._engineConfigPgJit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineConfigPgJitInput() {
    return this._engineConfigPgJit;
  }

  // engine_config_pg_max_files_per_process - computed: true, optional: true, required: false
  private _engineConfigPgMaxFilesPerProcess?: number; 
  public get engineConfigPgMaxFilesPerProcess() {
    return this.getNumberAttribute('engine_config_pg_max_files_per_process');
  }
  public set engineConfigPgMaxFilesPerProcess(value: number) {
    this._engineConfigPgMaxFilesPerProcess = value;
  }
  public resetEngineConfigPgMaxFilesPerProcess() {
    this._engineConfigPgMaxFilesPerProcess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineConfigPgMaxFilesPerProcessInput() {
    return this._engineConfigPgMaxFilesPerProcess;
  }

  // engine_config_pg_max_locks_per_transaction - computed: true, optional: true, required: false
  private _engineConfigPgMaxLocksPerTransaction?: number; 
  public get engineConfigPgMaxLocksPerTransaction() {
    return this.getNumberAttribute('engine_config_pg_max_locks_per_transaction');
  }
  public set engineConfigPgMaxLocksPerTransaction(value: number) {
    this._engineConfigPgMaxLocksPerTransaction = value;
  }
  public resetEngineConfigPgMaxLocksPerTransaction() {
    this._engineConfigPgMaxLocksPerTransaction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineConfigPgMaxLocksPerTransactionInput() {
    return this._engineConfigPgMaxLocksPerTransaction;
  }

  // engine_config_pg_max_logical_replication_workers - computed: true, optional: true, required: false
  private _engineConfigPgMaxLogicalReplicationWorkers?: number; 
  public get engineConfigPgMaxLogicalReplicationWorkers() {
    return this.getNumberAttribute('engine_config_pg_max_logical_replication_workers');
  }
  public set engineConfigPgMaxLogicalReplicationWorkers(value: number) {
    this._engineConfigPgMaxLogicalReplicationWorkers = value;
  }
  public resetEngineConfigPgMaxLogicalReplicationWorkers() {
    this._engineConfigPgMaxLogicalReplicationWorkers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineConfigPgMaxLogicalReplicationWorkersInput() {
    return this._engineConfigPgMaxLogicalReplicationWorkers;
  }

  // engine_config_pg_max_parallel_workers - computed: true, optional: true, required: false
  private _engineConfigPgMaxParallelWorkers?: number; 
  public get engineConfigPgMaxParallelWorkers() {
    return this.getNumberAttribute('engine_config_pg_max_parallel_workers');
  }
  public set engineConfigPgMaxParallelWorkers(value: number) {
    this._engineConfigPgMaxParallelWorkers = value;
  }
  public resetEngineConfigPgMaxParallelWorkers() {
    this._engineConfigPgMaxParallelWorkers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineConfigPgMaxParallelWorkersInput() {
    return this._engineConfigPgMaxParallelWorkers;
  }

  // engine_config_pg_max_parallel_workers_per_gather - computed: true, optional: true, required: false
  private _engineConfigPgMaxParallelWorkersPerGather?: number; 
  public get engineConfigPgMaxParallelWorkersPerGather() {
    return this.getNumberAttribute('engine_config_pg_max_parallel_workers_per_gather');
  }
  public set engineConfigPgMaxParallelWorkersPerGather(value: number) {
    this._engineConfigPgMaxParallelWorkersPerGather = value;
  }
  public resetEngineConfigPgMaxParallelWorkersPerGather() {
    this._engineConfigPgMaxParallelWorkersPerGather = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineConfigPgMaxParallelWorkersPerGatherInput() {
    return this._engineConfigPgMaxParallelWorkersPerGather;
  }

  // engine_config_pg_max_pred_locks_per_transaction - computed: true, optional: true, required: false
  private _engineConfigPgMaxPredLocksPerTransaction?: number; 
  public get engineConfigPgMaxPredLocksPerTransaction() {
    return this.getNumberAttribute('engine_config_pg_max_pred_locks_per_transaction');
  }
  public set engineConfigPgMaxPredLocksPerTransaction(value: number) {
    this._engineConfigPgMaxPredLocksPerTransaction = value;
  }
  public resetEngineConfigPgMaxPredLocksPerTransaction() {
    this._engineConfigPgMaxPredLocksPerTransaction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineConfigPgMaxPredLocksPerTransactionInput() {
    return this._engineConfigPgMaxPredLocksPerTransaction;
  }

  // engine_config_pg_max_replication_slots - computed: true, optional: true, required: false
  private _engineConfigPgMaxReplicationSlots?: number; 
  public get engineConfigPgMaxReplicationSlots() {
    return this.getNumberAttribute('engine_config_pg_max_replication_slots');
  }
  public set engineConfigPgMaxReplicationSlots(value: number) {
    this._engineConfigPgMaxReplicationSlots = value;
  }
  public resetEngineConfigPgMaxReplicationSlots() {
    this._engineConfigPgMaxReplicationSlots = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineConfigPgMaxReplicationSlotsInput() {
    return this._engineConfigPgMaxReplicationSlots;
  }

  // engine_config_pg_max_slot_wal_keep_size - computed: true, optional: true, required: false
  private _engineConfigPgMaxSlotWalKeepSize?: number; 
  public get engineConfigPgMaxSlotWalKeepSize() {
    return this.getNumberAttribute('engine_config_pg_max_slot_wal_keep_size');
  }
  public set engineConfigPgMaxSlotWalKeepSize(value: number) {
    this._engineConfigPgMaxSlotWalKeepSize = value;
  }
  public resetEngineConfigPgMaxSlotWalKeepSize() {
    this._engineConfigPgMaxSlotWalKeepSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineConfigPgMaxSlotWalKeepSizeInput() {
    return this._engineConfigPgMaxSlotWalKeepSize;
  }

  // engine_config_pg_max_stack_depth - computed: true, optional: true, required: false
  private _engineConfigPgMaxStackDepth?: number; 
  public get engineConfigPgMaxStackDepth() {
    return this.getNumberAttribute('engine_config_pg_max_stack_depth');
  }
  public set engineConfigPgMaxStackDepth(value: number) {
    this._engineConfigPgMaxStackDepth = value;
  }
  public resetEngineConfigPgMaxStackDepth() {
    this._engineConfigPgMaxStackDepth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineConfigPgMaxStackDepthInput() {
    return this._engineConfigPgMaxStackDepth;
  }

  // engine_config_pg_max_standby_archive_delay - computed: true, optional: true, required: false
  private _engineConfigPgMaxStandbyArchiveDelay?: number; 
  public get engineConfigPgMaxStandbyArchiveDelay() {
    return this.getNumberAttribute('engine_config_pg_max_standby_archive_delay');
  }
  public set engineConfigPgMaxStandbyArchiveDelay(value: number) {
    this._engineConfigPgMaxStandbyArchiveDelay = value;
  }
  public resetEngineConfigPgMaxStandbyArchiveDelay() {
    this._engineConfigPgMaxStandbyArchiveDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineConfigPgMaxStandbyArchiveDelayInput() {
    return this._engineConfigPgMaxStandbyArchiveDelay;
  }

  // engine_config_pg_max_standby_streaming_delay - computed: true, optional: true, required: false
  private _engineConfigPgMaxStandbyStreamingDelay?: number; 
  public get engineConfigPgMaxStandbyStreamingDelay() {
    return this.getNumberAttribute('engine_config_pg_max_standby_streaming_delay');
  }
  public set engineConfigPgMaxStandbyStreamingDelay(value: number) {
    this._engineConfigPgMaxStandbyStreamingDelay = value;
  }
  public resetEngineConfigPgMaxStandbyStreamingDelay() {
    this._engineConfigPgMaxStandbyStreamingDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineConfigPgMaxStandbyStreamingDelayInput() {
    return this._engineConfigPgMaxStandbyStreamingDelay;
  }

  // engine_config_pg_max_wal_senders - computed: true, optional: true, required: false
  private _engineConfigPgMaxWalSenders?: number; 
  public get engineConfigPgMaxWalSenders() {
    return this.getNumberAttribute('engine_config_pg_max_wal_senders');
  }
  public set engineConfigPgMaxWalSenders(value: number) {
    this._engineConfigPgMaxWalSenders = value;
  }
  public resetEngineConfigPgMaxWalSenders() {
    this._engineConfigPgMaxWalSenders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineConfigPgMaxWalSendersInput() {
    return this._engineConfigPgMaxWalSenders;
  }

  // engine_config_pg_max_worker_processes - computed: true, optional: true, required: false
  private _engineConfigPgMaxWorkerProcesses?: number; 
  public get engineConfigPgMaxWorkerProcesses() {
    return this.getNumberAttribute('engine_config_pg_max_worker_processes');
  }
  public set engineConfigPgMaxWorkerProcesses(value: number) {
    this._engineConfigPgMaxWorkerProcesses = value;
  }
  public resetEngineConfigPgMaxWorkerProcesses() {
    this._engineConfigPgMaxWorkerProcesses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineConfigPgMaxWorkerProcessesInput() {
    return this._engineConfigPgMaxWorkerProcesses;
  }

  // engine_config_pg_password_encryption - computed: true, optional: true, required: false
  private _engineConfigPgPasswordEncryption?: string; 
  public get engineConfigPgPasswordEncryption() {
    return this.getStringAttribute('engine_config_pg_password_encryption');
  }
  public set engineConfigPgPasswordEncryption(value: string) {
    this._engineConfigPgPasswordEncryption = value;
  }
  public resetEngineConfigPgPasswordEncryption() {
    this._engineConfigPgPasswordEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineConfigPgPasswordEncryptionInput() {
    return this._engineConfigPgPasswordEncryption;
  }

  // engine_config_pg_pg_partman_bgw_interval - computed: true, optional: true, required: false
  private _engineConfigPgPgPartmanBgwInterval?: number; 
  public get engineConfigPgPgPartmanBgwInterval() {
    return this.getNumberAttribute('engine_config_pg_pg_partman_bgw_interval');
  }
  public set engineConfigPgPgPartmanBgwInterval(value: number) {
    this._engineConfigPgPgPartmanBgwInterval = value;
  }
  public resetEngineConfigPgPgPartmanBgwInterval() {
    this._engineConfigPgPgPartmanBgwInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineConfigPgPgPartmanBgwIntervalInput() {
    return this._engineConfigPgPgPartmanBgwInterval;
  }

  // engine_config_pg_pg_partman_bgw_role - computed: true, optional: true, required: false
  private _engineConfigPgPgPartmanBgwRole?: string; 
  public get engineConfigPgPgPartmanBgwRole() {
    return this.getStringAttribute('engine_config_pg_pg_partman_bgw_role');
  }
  public set engineConfigPgPgPartmanBgwRole(value: string) {
    this._engineConfigPgPgPartmanBgwRole = value;
  }
  public resetEngineConfigPgPgPartmanBgwRole() {
    this._engineConfigPgPgPartmanBgwRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineConfigPgPgPartmanBgwRoleInput() {
    return this._engineConfigPgPgPartmanBgwRole;
  }

  // engine_config_pg_pg_stat_monitor_pgsm_enable_query_plan - computed: true, optional: true, required: false
  private _engineConfigPgPgStatMonitorPgsmEnableQueryPlan?: boolean | cdktf.IResolvable; 
  public get engineConfigPgPgStatMonitorPgsmEnableQueryPlan() {
    return this.getBooleanAttribute('engine_config_pg_pg_stat_monitor_pgsm_enable_query_plan');
  }
  public set engineConfigPgPgStatMonitorPgsmEnableQueryPlan(value: boolean | cdktf.IResolvable) {
    this._engineConfigPgPgStatMonitorPgsmEnableQueryPlan = value;
  }
  public resetEngineConfigPgPgStatMonitorPgsmEnableQueryPlan() {
    this._engineConfigPgPgStatMonitorPgsmEnableQueryPlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineConfigPgPgStatMonitorPgsmEnableQueryPlanInput() {
    return this._engineConfigPgPgStatMonitorPgsmEnableQueryPlan;
  }

  // engine_config_pg_pg_stat_monitor_pgsm_max_buckets - computed: true, optional: true, required: false
  private _engineConfigPgPgStatMonitorPgsmMaxBuckets?: number; 
  public get engineConfigPgPgStatMonitorPgsmMaxBuckets() {
    return this.getNumberAttribute('engine_config_pg_pg_stat_monitor_pgsm_max_buckets');
  }
  public set engineConfigPgPgStatMonitorPgsmMaxBuckets(value: number) {
    this._engineConfigPgPgStatMonitorPgsmMaxBuckets = value;
  }
  public resetEngineConfigPgPgStatMonitorPgsmMaxBuckets() {
    this._engineConfigPgPgStatMonitorPgsmMaxBuckets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineConfigPgPgStatMonitorPgsmMaxBucketsInput() {
    return this._engineConfigPgPgStatMonitorPgsmMaxBuckets;
  }

  // engine_config_pg_pg_stat_statements_track - computed: true, optional: true, required: false
  private _engineConfigPgPgStatStatementsTrack?: string; 
  public get engineConfigPgPgStatStatementsTrack() {
    return this.getStringAttribute('engine_config_pg_pg_stat_statements_track');
  }
  public set engineConfigPgPgStatStatementsTrack(value: string) {
    this._engineConfigPgPgStatStatementsTrack = value;
  }
  public resetEngineConfigPgPgStatStatementsTrack() {
    this._engineConfigPgPgStatStatementsTrack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineConfigPgPgStatStatementsTrackInput() {
    return this._engineConfigPgPgStatStatementsTrack;
  }

  // engine_config_pg_stat_monitor_enable - computed: true, optional: true, required: false
  private _engineConfigPgStatMonitorEnable?: boolean | cdktf.IResolvable; 
  public get engineConfigPgStatMonitorEnable() {
    return this.getBooleanAttribute('engine_config_pg_stat_monitor_enable');
  }
  public set engineConfigPgStatMonitorEnable(value: boolean | cdktf.IResolvable) {
    this._engineConfigPgStatMonitorEnable = value;
  }
  public resetEngineConfigPgStatMonitorEnable() {
    this._engineConfigPgStatMonitorEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineConfigPgStatMonitorEnableInput() {
    return this._engineConfigPgStatMonitorEnable;
  }

  // engine_config_pg_temp_file_limit - computed: true, optional: true, required: false
  private _engineConfigPgTempFileLimit?: number; 
  public get engineConfigPgTempFileLimit() {
    return this.getNumberAttribute('engine_config_pg_temp_file_limit');
  }
  public set engineConfigPgTempFileLimit(value: number) {
    this._engineConfigPgTempFileLimit = value;
  }
  public resetEngineConfigPgTempFileLimit() {
    this._engineConfigPgTempFileLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineConfigPgTempFileLimitInput() {
    return this._engineConfigPgTempFileLimit;
  }

  // engine_config_pg_timezone - computed: true, optional: true, required: false
  private _engineConfigPgTimezone?: string; 
  public get engineConfigPgTimezone() {
    return this.getStringAttribute('engine_config_pg_timezone');
  }
  public set engineConfigPgTimezone(value: string) {
    this._engineConfigPgTimezone = value;
  }
  public resetEngineConfigPgTimezone() {
    this._engineConfigPgTimezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineConfigPgTimezoneInput() {
    return this._engineConfigPgTimezone;
  }

  // engine_config_pg_track_activity_query_size - computed: true, optional: true, required: false
  private _engineConfigPgTrackActivityQuerySize?: number; 
  public get engineConfigPgTrackActivityQuerySize() {
    return this.getNumberAttribute('engine_config_pg_track_activity_query_size');
  }
  public set engineConfigPgTrackActivityQuerySize(value: number) {
    this._engineConfigPgTrackActivityQuerySize = value;
  }
  public resetEngineConfigPgTrackActivityQuerySize() {
    this._engineConfigPgTrackActivityQuerySize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineConfigPgTrackActivityQuerySizeInput() {
    return this._engineConfigPgTrackActivityQuerySize;
  }

  // engine_config_pg_track_commit_timestamp - computed: true, optional: true, required: false
  private _engineConfigPgTrackCommitTimestamp?: string; 
  public get engineConfigPgTrackCommitTimestamp() {
    return this.getStringAttribute('engine_config_pg_track_commit_timestamp');
  }
  public set engineConfigPgTrackCommitTimestamp(value: string) {
    this._engineConfigPgTrackCommitTimestamp = value;
  }
  public resetEngineConfigPgTrackCommitTimestamp() {
    this._engineConfigPgTrackCommitTimestamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineConfigPgTrackCommitTimestampInput() {
    return this._engineConfigPgTrackCommitTimestamp;
  }

  // engine_config_pg_track_functions - computed: true, optional: true, required: false
  private _engineConfigPgTrackFunctions?: string; 
  public get engineConfigPgTrackFunctions() {
    return this.getStringAttribute('engine_config_pg_track_functions');
  }
  public set engineConfigPgTrackFunctions(value: string) {
    this._engineConfigPgTrackFunctions = value;
  }
  public resetEngineConfigPgTrackFunctions() {
    this._engineConfigPgTrackFunctions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineConfigPgTrackFunctionsInput() {
    return this._engineConfigPgTrackFunctions;
  }

  // engine_config_pg_track_io_timing - computed: true, optional: true, required: false
  private _engineConfigPgTrackIoTiming?: string; 
  public get engineConfigPgTrackIoTiming() {
    return this.getStringAttribute('engine_config_pg_track_io_timing');
  }
  public set engineConfigPgTrackIoTiming(value: string) {
    this._engineConfigPgTrackIoTiming = value;
  }
  public resetEngineConfigPgTrackIoTiming() {
    this._engineConfigPgTrackIoTiming = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineConfigPgTrackIoTimingInput() {
    return this._engineConfigPgTrackIoTiming;
  }

  // engine_config_pg_wal_sender_timeout - computed: true, optional: true, required: false
  private _engineConfigPgWalSenderTimeout?: number; 
  public get engineConfigPgWalSenderTimeout() {
    return this.getNumberAttribute('engine_config_pg_wal_sender_timeout');
  }
  public set engineConfigPgWalSenderTimeout(value: number) {
    this._engineConfigPgWalSenderTimeout = value;
  }
  public resetEngineConfigPgWalSenderTimeout() {
    this._engineConfigPgWalSenderTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineConfigPgWalSenderTimeoutInput() {
    return this._engineConfigPgWalSenderTimeout;
  }

  // engine_config_pg_wal_writer_delay - computed: true, optional: true, required: false
  private _engineConfigPgWalWriterDelay?: number; 
  public get engineConfigPgWalWriterDelay() {
    return this.getNumberAttribute('engine_config_pg_wal_writer_delay');
  }
  public set engineConfigPgWalWriterDelay(value: number) {
    this._engineConfigPgWalWriterDelay = value;
  }
  public resetEngineConfigPgWalWriterDelay() {
    this._engineConfigPgWalWriterDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineConfigPgWalWriterDelayInput() {
    return this._engineConfigPgWalWriterDelay;
  }

  // engine_config_pglookout_max_failover_replication_time_lag - computed: true, optional: true, required: false
  private _engineConfigPglookoutMaxFailoverReplicationTimeLag?: number; 
  public get engineConfigPglookoutMaxFailoverReplicationTimeLag() {
    return this.getNumberAttribute('engine_config_pglookout_max_failover_replication_time_lag');
  }
  public set engineConfigPglookoutMaxFailoverReplicationTimeLag(value: number) {
    this._engineConfigPglookoutMaxFailoverReplicationTimeLag = value;
  }
  public resetEngineConfigPglookoutMaxFailoverReplicationTimeLag() {
    this._engineConfigPglookoutMaxFailoverReplicationTimeLag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineConfigPglookoutMaxFailoverReplicationTimeLagInput() {
    return this._engineConfigPglookoutMaxFailoverReplicationTimeLag;
  }

  // engine_config_shared_buffers_percentage - computed: true, optional: true, required: false
  private _engineConfigSharedBuffersPercentage?: number; 
  public get engineConfigSharedBuffersPercentage() {
    return this.getNumberAttribute('engine_config_shared_buffers_percentage');
  }
  public set engineConfigSharedBuffersPercentage(value: number) {
    this._engineConfigSharedBuffersPercentage = value;
  }
  public resetEngineConfigSharedBuffersPercentage() {
    this._engineConfigSharedBuffersPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineConfigSharedBuffersPercentageInput() {
    return this._engineConfigSharedBuffersPercentage;
  }

  // engine_config_work_mem - computed: true, optional: true, required: false
  private _engineConfigWorkMem?: number; 
  public get engineConfigWorkMem() {
    return this.getNumberAttribute('engine_config_work_mem');
  }
  public set engineConfigWorkMem(value: number) {
    this._engineConfigWorkMem = value;
  }
  public resetEngineConfigWorkMem() {
    this._engineConfigWorkMem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineConfigWorkMemInput() {
    return this._engineConfigWorkMem;
  }

  // engine_id - computed: false, optional: false, required: true
  private _engineId?: string; 
  public get engineId() {
    return this.getStringAttribute('engine_id');
  }
  public set engineId(value: string) {
    this._engineId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get engineIdInput() {
    return this._engineId;
  }

  // fork_restore_time - computed: true, optional: true, required: false
  private _forkRestoreTime?: string; 
  public get forkRestoreTime() {
    return this.getStringAttribute('fork_restore_time');
  }
  public set forkRestoreTime(value: string) {
    this._forkRestoreTime = value;
  }
  public resetForkRestoreTime() {
    this._forkRestoreTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forkRestoreTimeInput() {
    return this._forkRestoreTime;
  }

  // fork_source - computed: false, optional: true, required: false
  private _forkSource?: number; 
  public get forkSource() {
    return this.getNumberAttribute('fork_source');
  }
  public set forkSource(value: number) {
    this._forkSource = value;
  }
  public resetForkSource() {
    this._forkSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forkSourceInput() {
    return this._forkSource;
  }

  // host_primary - computed: true, optional: false, required: false
  public get hostPrimary() {
    return this.getStringAttribute('host_primary');
  }

  // host_secondary - computed: true, optional: false, required: false
  public get hostSecondary() {
    return this.getStringAttribute('host_secondary');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // label - computed: false, optional: false, required: true
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // members - computed: true, optional: false, required: false
  private _members = new cdktf.StringMap(this, "members");
  public get members() {
    return this._members;
  }

  // oldest_restore_time - computed: true, optional: false, required: false
  public get oldestRestoreTime() {
    return this.getStringAttribute('oldest_restore_time');
  }

  // pending_updates - computed: true, optional: false, required: false
  private _pendingUpdates = new DatabasePostgresqlV2PendingUpdatesList(this, "pending_updates", true);
  public get pendingUpdates() {
    return this._pendingUpdates;
  }

  // platform - computed: true, optional: false, required: false
  public get platform() {
    return this.getStringAttribute('platform');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // private_network - computed: false, optional: true, required: false
  private _privateNetwork = new DatabasePostgresqlV2PrivateNetworkOutputReference(this, "private_network");
  public get privateNetwork() {
    return this._privateNetwork;
  }
  public putPrivateNetwork(value: DatabasePostgresqlV2PrivateNetwork) {
    this._privateNetwork.internalValue = value;
  }
  public resetPrivateNetwork() {
    this._privateNetwork.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateNetworkInput() {
    return this._privateNetwork.internalValue;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // root_password - computed: true, optional: false, required: false
  public get rootPassword() {
    return this.getStringAttribute('root_password');
  }

  // root_username - computed: true, optional: false, required: false
  public get rootUsername() {
    return this.getStringAttribute('root_username');
  }

  // ssl_connection - computed: true, optional: false, required: false
  public get sslConnection() {
    return this.getBooleanAttribute('ssl_connection');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // suspended - computed: true, optional: true, required: false
  private _suspended?: boolean | cdktf.IResolvable; 
  public get suspended() {
    return this.getBooleanAttribute('suspended');
  }
  public set suspended(value: boolean | cdktf.IResolvable) {
    this._suspended = value;
  }
  public resetSuspended() {
    this._suspended = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suspendedInput() {
    return this._suspended;
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

  // updated - computed: true, optional: false, required: false
  public get updated() {
    return this.getStringAttribute('updated');
  }

  // updates - computed: true, optional: true, required: false
  private _updates = new DatabasePostgresqlV2UpdatesOutputReference(this, "updates");
  public get updates() {
    return this._updates;
  }
  public putUpdates(value: DatabasePostgresqlV2Updates) {
    this._updates.internalValue = value;
  }
  public resetUpdates() {
    this._updates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatesInput() {
    return this._updates.internalValue;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DatabasePostgresqlV2TimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DatabasePostgresqlV2Timeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowList),
      cluster_size: cdktf.numberToTerraform(this._clusterSize),
      engine_config_pg_autovacuum_analyze_scale_factor: cdktf.numberToTerraform(this._engineConfigPgAutovacuumAnalyzeScaleFactor),
      engine_config_pg_autovacuum_analyze_threshold: cdktf.numberToTerraform(this._engineConfigPgAutovacuumAnalyzeThreshold),
      engine_config_pg_autovacuum_max_workers: cdktf.numberToTerraform(this._engineConfigPgAutovacuumMaxWorkers),
      engine_config_pg_autovacuum_naptime: cdktf.numberToTerraform(this._engineConfigPgAutovacuumNaptime),
      engine_config_pg_autovacuum_vacuum_cost_delay: cdktf.numberToTerraform(this._engineConfigPgAutovacuumVacuumCostDelay),
      engine_config_pg_autovacuum_vacuum_cost_limit: cdktf.numberToTerraform(this._engineConfigPgAutovacuumVacuumCostLimit),
      engine_config_pg_autovacuum_vacuum_scale_factor: cdktf.numberToTerraform(this._engineConfigPgAutovacuumVacuumScaleFactor),
      engine_config_pg_autovacuum_vacuum_threshold: cdktf.numberToTerraform(this._engineConfigPgAutovacuumVacuumThreshold),
      engine_config_pg_bgwriter_delay: cdktf.numberToTerraform(this._engineConfigPgBgwriterDelay),
      engine_config_pg_bgwriter_flush_after: cdktf.numberToTerraform(this._engineConfigPgBgwriterFlushAfter),
      engine_config_pg_bgwriter_lru_maxpages: cdktf.numberToTerraform(this._engineConfigPgBgwriterLruMaxpages),
      engine_config_pg_bgwriter_lru_multiplier: cdktf.numberToTerraform(this._engineConfigPgBgwriterLruMultiplier),
      engine_config_pg_deadlock_timeout: cdktf.numberToTerraform(this._engineConfigPgDeadlockTimeout),
      engine_config_pg_default_toast_compression: cdktf.stringToTerraform(this._engineConfigPgDefaultToastCompression),
      engine_config_pg_idle_in_transaction_session_timeout: cdktf.numberToTerraform(this._engineConfigPgIdleInTransactionSessionTimeout),
      engine_config_pg_jit: cdktf.booleanToTerraform(this._engineConfigPgJit),
      engine_config_pg_max_files_per_process: cdktf.numberToTerraform(this._engineConfigPgMaxFilesPerProcess),
      engine_config_pg_max_locks_per_transaction: cdktf.numberToTerraform(this._engineConfigPgMaxLocksPerTransaction),
      engine_config_pg_max_logical_replication_workers: cdktf.numberToTerraform(this._engineConfigPgMaxLogicalReplicationWorkers),
      engine_config_pg_max_parallel_workers: cdktf.numberToTerraform(this._engineConfigPgMaxParallelWorkers),
      engine_config_pg_max_parallel_workers_per_gather: cdktf.numberToTerraform(this._engineConfigPgMaxParallelWorkersPerGather),
      engine_config_pg_max_pred_locks_per_transaction: cdktf.numberToTerraform(this._engineConfigPgMaxPredLocksPerTransaction),
      engine_config_pg_max_replication_slots: cdktf.numberToTerraform(this._engineConfigPgMaxReplicationSlots),
      engine_config_pg_max_slot_wal_keep_size: cdktf.numberToTerraform(this._engineConfigPgMaxSlotWalKeepSize),
      engine_config_pg_max_stack_depth: cdktf.numberToTerraform(this._engineConfigPgMaxStackDepth),
      engine_config_pg_max_standby_archive_delay: cdktf.numberToTerraform(this._engineConfigPgMaxStandbyArchiveDelay),
      engine_config_pg_max_standby_streaming_delay: cdktf.numberToTerraform(this._engineConfigPgMaxStandbyStreamingDelay),
      engine_config_pg_max_wal_senders: cdktf.numberToTerraform(this._engineConfigPgMaxWalSenders),
      engine_config_pg_max_worker_processes: cdktf.numberToTerraform(this._engineConfigPgMaxWorkerProcesses),
      engine_config_pg_password_encryption: cdktf.stringToTerraform(this._engineConfigPgPasswordEncryption),
      engine_config_pg_pg_partman_bgw_interval: cdktf.numberToTerraform(this._engineConfigPgPgPartmanBgwInterval),
      engine_config_pg_pg_partman_bgw_role: cdktf.stringToTerraform(this._engineConfigPgPgPartmanBgwRole),
      engine_config_pg_pg_stat_monitor_pgsm_enable_query_plan: cdktf.booleanToTerraform(this._engineConfigPgPgStatMonitorPgsmEnableQueryPlan),
      engine_config_pg_pg_stat_monitor_pgsm_max_buckets: cdktf.numberToTerraform(this._engineConfigPgPgStatMonitorPgsmMaxBuckets),
      engine_config_pg_pg_stat_statements_track: cdktf.stringToTerraform(this._engineConfigPgPgStatStatementsTrack),
      engine_config_pg_stat_monitor_enable: cdktf.booleanToTerraform(this._engineConfigPgStatMonitorEnable),
      engine_config_pg_temp_file_limit: cdktf.numberToTerraform(this._engineConfigPgTempFileLimit),
      engine_config_pg_timezone: cdktf.stringToTerraform(this._engineConfigPgTimezone),
      engine_config_pg_track_activity_query_size: cdktf.numberToTerraform(this._engineConfigPgTrackActivityQuerySize),
      engine_config_pg_track_commit_timestamp: cdktf.stringToTerraform(this._engineConfigPgTrackCommitTimestamp),
      engine_config_pg_track_functions: cdktf.stringToTerraform(this._engineConfigPgTrackFunctions),
      engine_config_pg_track_io_timing: cdktf.stringToTerraform(this._engineConfigPgTrackIoTiming),
      engine_config_pg_wal_sender_timeout: cdktf.numberToTerraform(this._engineConfigPgWalSenderTimeout),
      engine_config_pg_wal_writer_delay: cdktf.numberToTerraform(this._engineConfigPgWalWriterDelay),
      engine_config_pglookout_max_failover_replication_time_lag: cdktf.numberToTerraform(this._engineConfigPglookoutMaxFailoverReplicationTimeLag),
      engine_config_shared_buffers_percentage: cdktf.numberToTerraform(this._engineConfigSharedBuffersPercentage),
      engine_config_work_mem: cdktf.numberToTerraform(this._engineConfigWorkMem),
      engine_id: cdktf.stringToTerraform(this._engineId),
      fork_restore_time: cdktf.stringToTerraform(this._forkRestoreTime),
      fork_source: cdktf.numberToTerraform(this._forkSource),
      label: cdktf.stringToTerraform(this._label),
      private_network: databasePostgresqlV2PrivateNetworkToTerraform(this._privateNetwork.internalValue),
      region: cdktf.stringToTerraform(this._region),
      suspended: cdktf.booleanToTerraform(this._suspended),
      type: cdktf.stringToTerraform(this._type),
      updates: databasePostgresqlV2UpdatesToTerraform(this._updates.internalValue),
      timeouts: databasePostgresqlV2TimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowList),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      cluster_size: {
        value: cdktf.numberToHclTerraform(this._clusterSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      engine_config_pg_autovacuum_analyze_scale_factor: {
        value: cdktf.numberToHclTerraform(this._engineConfigPgAutovacuumAnalyzeScaleFactor),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      engine_config_pg_autovacuum_analyze_threshold: {
        value: cdktf.numberToHclTerraform(this._engineConfigPgAutovacuumAnalyzeThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      engine_config_pg_autovacuum_max_workers: {
        value: cdktf.numberToHclTerraform(this._engineConfigPgAutovacuumMaxWorkers),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      engine_config_pg_autovacuum_naptime: {
        value: cdktf.numberToHclTerraform(this._engineConfigPgAutovacuumNaptime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      engine_config_pg_autovacuum_vacuum_cost_delay: {
        value: cdktf.numberToHclTerraform(this._engineConfigPgAutovacuumVacuumCostDelay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      engine_config_pg_autovacuum_vacuum_cost_limit: {
        value: cdktf.numberToHclTerraform(this._engineConfigPgAutovacuumVacuumCostLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      engine_config_pg_autovacuum_vacuum_scale_factor: {
        value: cdktf.numberToHclTerraform(this._engineConfigPgAutovacuumVacuumScaleFactor),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      engine_config_pg_autovacuum_vacuum_threshold: {
        value: cdktf.numberToHclTerraform(this._engineConfigPgAutovacuumVacuumThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      engine_config_pg_bgwriter_delay: {
        value: cdktf.numberToHclTerraform(this._engineConfigPgBgwriterDelay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      engine_config_pg_bgwriter_flush_after: {
        value: cdktf.numberToHclTerraform(this._engineConfigPgBgwriterFlushAfter),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      engine_config_pg_bgwriter_lru_maxpages: {
        value: cdktf.numberToHclTerraform(this._engineConfigPgBgwriterLruMaxpages),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      engine_config_pg_bgwriter_lru_multiplier: {
        value: cdktf.numberToHclTerraform(this._engineConfigPgBgwriterLruMultiplier),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      engine_config_pg_deadlock_timeout: {
        value: cdktf.numberToHclTerraform(this._engineConfigPgDeadlockTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      engine_config_pg_default_toast_compression: {
        value: cdktf.stringToHclTerraform(this._engineConfigPgDefaultToastCompression),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      engine_config_pg_idle_in_transaction_session_timeout: {
        value: cdktf.numberToHclTerraform(this._engineConfigPgIdleInTransactionSessionTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      engine_config_pg_jit: {
        value: cdktf.booleanToHclTerraform(this._engineConfigPgJit),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      engine_config_pg_max_files_per_process: {
        value: cdktf.numberToHclTerraform(this._engineConfigPgMaxFilesPerProcess),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      engine_config_pg_max_locks_per_transaction: {
        value: cdktf.numberToHclTerraform(this._engineConfigPgMaxLocksPerTransaction),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      engine_config_pg_max_logical_replication_workers: {
        value: cdktf.numberToHclTerraform(this._engineConfigPgMaxLogicalReplicationWorkers),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      engine_config_pg_max_parallel_workers: {
        value: cdktf.numberToHclTerraform(this._engineConfigPgMaxParallelWorkers),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      engine_config_pg_max_parallel_workers_per_gather: {
        value: cdktf.numberToHclTerraform(this._engineConfigPgMaxParallelWorkersPerGather),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      engine_config_pg_max_pred_locks_per_transaction: {
        value: cdktf.numberToHclTerraform(this._engineConfigPgMaxPredLocksPerTransaction),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      engine_config_pg_max_replication_slots: {
        value: cdktf.numberToHclTerraform(this._engineConfigPgMaxReplicationSlots),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      engine_config_pg_max_slot_wal_keep_size: {
        value: cdktf.numberToHclTerraform(this._engineConfigPgMaxSlotWalKeepSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      engine_config_pg_max_stack_depth: {
        value: cdktf.numberToHclTerraform(this._engineConfigPgMaxStackDepth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      engine_config_pg_max_standby_archive_delay: {
        value: cdktf.numberToHclTerraform(this._engineConfigPgMaxStandbyArchiveDelay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      engine_config_pg_max_standby_streaming_delay: {
        value: cdktf.numberToHclTerraform(this._engineConfigPgMaxStandbyStreamingDelay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      engine_config_pg_max_wal_senders: {
        value: cdktf.numberToHclTerraform(this._engineConfigPgMaxWalSenders),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      engine_config_pg_max_worker_processes: {
        value: cdktf.numberToHclTerraform(this._engineConfigPgMaxWorkerProcesses),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      engine_config_pg_password_encryption: {
        value: cdktf.stringToHclTerraform(this._engineConfigPgPasswordEncryption),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      engine_config_pg_pg_partman_bgw_interval: {
        value: cdktf.numberToHclTerraform(this._engineConfigPgPgPartmanBgwInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      engine_config_pg_pg_partman_bgw_role: {
        value: cdktf.stringToHclTerraform(this._engineConfigPgPgPartmanBgwRole),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      engine_config_pg_pg_stat_monitor_pgsm_enable_query_plan: {
        value: cdktf.booleanToHclTerraform(this._engineConfigPgPgStatMonitorPgsmEnableQueryPlan),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      engine_config_pg_pg_stat_monitor_pgsm_max_buckets: {
        value: cdktf.numberToHclTerraform(this._engineConfigPgPgStatMonitorPgsmMaxBuckets),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      engine_config_pg_pg_stat_statements_track: {
        value: cdktf.stringToHclTerraform(this._engineConfigPgPgStatStatementsTrack),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      engine_config_pg_stat_monitor_enable: {
        value: cdktf.booleanToHclTerraform(this._engineConfigPgStatMonitorEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      engine_config_pg_temp_file_limit: {
        value: cdktf.numberToHclTerraform(this._engineConfigPgTempFileLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      engine_config_pg_timezone: {
        value: cdktf.stringToHclTerraform(this._engineConfigPgTimezone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      engine_config_pg_track_activity_query_size: {
        value: cdktf.numberToHclTerraform(this._engineConfigPgTrackActivityQuerySize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      engine_config_pg_track_commit_timestamp: {
        value: cdktf.stringToHclTerraform(this._engineConfigPgTrackCommitTimestamp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      engine_config_pg_track_functions: {
        value: cdktf.stringToHclTerraform(this._engineConfigPgTrackFunctions),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      engine_config_pg_track_io_timing: {
        value: cdktf.stringToHclTerraform(this._engineConfigPgTrackIoTiming),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      engine_config_pg_wal_sender_timeout: {
        value: cdktf.numberToHclTerraform(this._engineConfigPgWalSenderTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      engine_config_pg_wal_writer_delay: {
        value: cdktf.numberToHclTerraform(this._engineConfigPgWalWriterDelay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      engine_config_pglookout_max_failover_replication_time_lag: {
        value: cdktf.numberToHclTerraform(this._engineConfigPglookoutMaxFailoverReplicationTimeLag),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      engine_config_shared_buffers_percentage: {
        value: cdktf.numberToHclTerraform(this._engineConfigSharedBuffersPercentage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      engine_config_work_mem: {
        value: cdktf.numberToHclTerraform(this._engineConfigWorkMem),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      engine_id: {
        value: cdktf.stringToHclTerraform(this._engineId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fork_restore_time: {
        value: cdktf.stringToHclTerraform(this._forkRestoreTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fork_source: {
        value: cdktf.numberToHclTerraform(this._forkSource),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      label: {
        value: cdktf.stringToHclTerraform(this._label),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_network: {
        value: databasePostgresqlV2PrivateNetworkToHclTerraform(this._privateNetwork.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DatabasePostgresqlV2PrivateNetwork",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      suspended: {
        value: cdktf.booleanToHclTerraform(this._suspended),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      updates: {
        value: databasePostgresqlV2UpdatesToHclTerraform(this._updates.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DatabasePostgresqlV2Updates",
      },
      timeouts: {
        value: databasePostgresqlV2TimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DatabasePostgresqlV2Timeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
