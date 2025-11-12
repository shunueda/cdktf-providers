// https://registry.terraform.io/providers/linode/linode/3.5.1/docs/data-sources/database_postgresql_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataLinodeDatabasePostgresqlV2Config extends cdktf.TerraformMetaArguments {
  /**
  * The id of the PostgreSQL Database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.1/docs/data-sources/database_postgresql_v2#id DataLinodeDatabasePostgresqlV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataLinodeDatabasePostgresqlV2PendingUpdates {
}

export function dataLinodeDatabasePostgresqlV2PendingUpdatesToTerraform(struct?: DataLinodeDatabasePostgresqlV2PendingUpdates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLinodeDatabasePostgresqlV2PendingUpdatesToHclTerraform(struct?: DataLinodeDatabasePostgresqlV2PendingUpdates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLinodeDatabasePostgresqlV2PendingUpdatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataLinodeDatabasePostgresqlV2PendingUpdates | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLinodeDatabasePostgresqlV2PendingUpdates | undefined) {
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

export class DataLinodeDatabasePostgresqlV2PendingUpdatesList extends cdktf.ComplexList {

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
  public get(index: number): DataLinodeDatabasePostgresqlV2PendingUpdatesOutputReference {
    return new DataLinodeDatabasePostgresqlV2PendingUpdatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataLinodeDatabasePostgresqlV2PrivateNetwork {
}

export function dataLinodeDatabasePostgresqlV2PrivateNetworkToTerraform(struct?: DataLinodeDatabasePostgresqlV2PrivateNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLinodeDatabasePostgresqlV2PrivateNetworkToHclTerraform(struct?: DataLinodeDatabasePostgresqlV2PrivateNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLinodeDatabasePostgresqlV2PrivateNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataLinodeDatabasePostgresqlV2PrivateNetwork | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLinodeDatabasePostgresqlV2PrivateNetwork | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // public_access - computed: true, optional: false, required: false
  public get publicAccess() {
    return this.getBooleanAttribute('public_access');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getNumberAttribute('subnet_id');
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getNumberAttribute('vpc_id');
  }
}
export interface DataLinodeDatabasePostgresqlV2Updates {
}

export function dataLinodeDatabasePostgresqlV2UpdatesToTerraform(struct?: DataLinodeDatabasePostgresqlV2Updates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLinodeDatabasePostgresqlV2UpdatesToHclTerraform(struct?: DataLinodeDatabasePostgresqlV2Updates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLinodeDatabasePostgresqlV2UpdatesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataLinodeDatabasePostgresqlV2Updates | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLinodeDatabasePostgresqlV2Updates | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // day_of_week - computed: true, optional: false, required: false
  public get dayOfWeek() {
    return this.getNumberAttribute('day_of_week');
  }

  // duration - computed: true, optional: false, required: false
  public get duration() {
    return this.getNumberAttribute('duration');
  }

  // frequency - computed: true, optional: false, required: false
  public get frequency() {
    return this.getStringAttribute('frequency');
  }

  // hour_of_day - computed: true, optional: false, required: false
  public get hourOfDay() {
    return this.getNumberAttribute('hour_of_day');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/linode/linode/3.5.1/docs/data-sources/database_postgresql_v2 linode_database_postgresql_v2}
*/
export class DataLinodeDatabasePostgresqlV2 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "linode_database_postgresql_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataLinodeDatabasePostgresqlV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataLinodeDatabasePostgresqlV2 to import
  * @param importFromId The id of the existing DataLinodeDatabasePostgresqlV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/linode/linode/3.5.1/docs/data-sources/database_postgresql_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataLinodeDatabasePostgresqlV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "linode_database_postgresql_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/linode/linode/3.5.1/docs/data-sources/database_postgresql_v2 linode_database_postgresql_v2} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataLinodeDatabasePostgresqlV2Config
  */
  public constructor(scope: Construct, id: string, config: DataLinodeDatabasePostgresqlV2Config) {
    super(scope, id, {
      terraformResourceType: 'linode_database_postgresql_v2',
      terraformGeneratorMetadata: {
        providerName: 'linode',
        providerVersion: '3.5.1',
        providerVersionConstraint: '3.5.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_list - computed: true, optional: false, required: false
  public get allowList() {
    return cdktf.Fn.tolist(this.getListAttribute('allow_list'));
  }

  // ca_cert - computed: true, optional: false, required: false
  public get caCert() {
    return this.getStringAttribute('ca_cert');
  }

  // cluster_size - computed: true, optional: false, required: false
  public get clusterSize() {
    return this.getNumberAttribute('cluster_size');
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

  // engine_config_pg_autovacuum_analyze_scale_factor - computed: true, optional: false, required: false
  public get engineConfigPgAutovacuumAnalyzeScaleFactor() {
    return this.getNumberAttribute('engine_config_pg_autovacuum_analyze_scale_factor');
  }

  // engine_config_pg_autovacuum_analyze_threshold - computed: true, optional: false, required: false
  public get engineConfigPgAutovacuumAnalyzeThreshold() {
    return this.getNumberAttribute('engine_config_pg_autovacuum_analyze_threshold');
  }

  // engine_config_pg_autovacuum_max_workers - computed: true, optional: false, required: false
  public get engineConfigPgAutovacuumMaxWorkers() {
    return this.getNumberAttribute('engine_config_pg_autovacuum_max_workers');
  }

  // engine_config_pg_autovacuum_naptime - computed: true, optional: false, required: false
  public get engineConfigPgAutovacuumNaptime() {
    return this.getNumberAttribute('engine_config_pg_autovacuum_naptime');
  }

  // engine_config_pg_autovacuum_vacuum_cost_delay - computed: true, optional: false, required: false
  public get engineConfigPgAutovacuumVacuumCostDelay() {
    return this.getNumberAttribute('engine_config_pg_autovacuum_vacuum_cost_delay');
  }

  // engine_config_pg_autovacuum_vacuum_cost_limit - computed: true, optional: false, required: false
  public get engineConfigPgAutovacuumVacuumCostLimit() {
    return this.getNumberAttribute('engine_config_pg_autovacuum_vacuum_cost_limit');
  }

  // engine_config_pg_autovacuum_vacuum_scale_factor - computed: true, optional: false, required: false
  public get engineConfigPgAutovacuumVacuumScaleFactor() {
    return this.getNumberAttribute('engine_config_pg_autovacuum_vacuum_scale_factor');
  }

  // engine_config_pg_autovacuum_vacuum_threshold - computed: true, optional: false, required: false
  public get engineConfigPgAutovacuumVacuumThreshold() {
    return this.getNumberAttribute('engine_config_pg_autovacuum_vacuum_threshold');
  }

  // engine_config_pg_bgwriter_delay - computed: true, optional: false, required: false
  public get engineConfigPgBgwriterDelay() {
    return this.getNumberAttribute('engine_config_pg_bgwriter_delay');
  }

  // engine_config_pg_bgwriter_flush_after - computed: true, optional: false, required: false
  public get engineConfigPgBgwriterFlushAfter() {
    return this.getNumberAttribute('engine_config_pg_bgwriter_flush_after');
  }

  // engine_config_pg_bgwriter_lru_maxpages - computed: true, optional: false, required: false
  public get engineConfigPgBgwriterLruMaxpages() {
    return this.getNumberAttribute('engine_config_pg_bgwriter_lru_maxpages');
  }

  // engine_config_pg_bgwriter_lru_multiplier - computed: true, optional: false, required: false
  public get engineConfigPgBgwriterLruMultiplier() {
    return this.getNumberAttribute('engine_config_pg_bgwriter_lru_multiplier');
  }

  // engine_config_pg_deadlock_timeout - computed: true, optional: false, required: false
  public get engineConfigPgDeadlockTimeout() {
    return this.getNumberAttribute('engine_config_pg_deadlock_timeout');
  }

  // engine_config_pg_default_toast_compression - computed: true, optional: false, required: false
  public get engineConfigPgDefaultToastCompression() {
    return this.getStringAttribute('engine_config_pg_default_toast_compression');
  }

  // engine_config_pg_idle_in_transaction_session_timeout - computed: true, optional: false, required: false
  public get engineConfigPgIdleInTransactionSessionTimeout() {
    return this.getNumberAttribute('engine_config_pg_idle_in_transaction_session_timeout');
  }

  // engine_config_pg_jit - computed: true, optional: false, required: false
  public get engineConfigPgJit() {
    return this.getBooleanAttribute('engine_config_pg_jit');
  }

  // engine_config_pg_max_files_per_process - computed: true, optional: false, required: false
  public get engineConfigPgMaxFilesPerProcess() {
    return this.getNumberAttribute('engine_config_pg_max_files_per_process');
  }

  // engine_config_pg_max_locks_per_transaction - computed: true, optional: false, required: false
  public get engineConfigPgMaxLocksPerTransaction() {
    return this.getNumberAttribute('engine_config_pg_max_locks_per_transaction');
  }

  // engine_config_pg_max_logical_replication_workers - computed: true, optional: false, required: false
  public get engineConfigPgMaxLogicalReplicationWorkers() {
    return this.getNumberAttribute('engine_config_pg_max_logical_replication_workers');
  }

  // engine_config_pg_max_parallel_workers - computed: true, optional: false, required: false
  public get engineConfigPgMaxParallelWorkers() {
    return this.getNumberAttribute('engine_config_pg_max_parallel_workers');
  }

  // engine_config_pg_max_parallel_workers_per_gather - computed: true, optional: false, required: false
  public get engineConfigPgMaxParallelWorkersPerGather() {
    return this.getNumberAttribute('engine_config_pg_max_parallel_workers_per_gather');
  }

  // engine_config_pg_max_pred_locks_per_transaction - computed: true, optional: false, required: false
  public get engineConfigPgMaxPredLocksPerTransaction() {
    return this.getNumberAttribute('engine_config_pg_max_pred_locks_per_transaction');
  }

  // engine_config_pg_max_replication_slots - computed: true, optional: false, required: false
  public get engineConfigPgMaxReplicationSlots() {
    return this.getNumberAttribute('engine_config_pg_max_replication_slots');
  }

  // engine_config_pg_max_slot_wal_keep_size - computed: true, optional: false, required: false
  public get engineConfigPgMaxSlotWalKeepSize() {
    return this.getNumberAttribute('engine_config_pg_max_slot_wal_keep_size');
  }

  // engine_config_pg_max_stack_depth - computed: true, optional: false, required: false
  public get engineConfigPgMaxStackDepth() {
    return this.getNumberAttribute('engine_config_pg_max_stack_depth');
  }

  // engine_config_pg_max_standby_archive_delay - computed: true, optional: false, required: false
  public get engineConfigPgMaxStandbyArchiveDelay() {
    return this.getNumberAttribute('engine_config_pg_max_standby_archive_delay');
  }

  // engine_config_pg_max_standby_streaming_delay - computed: true, optional: false, required: false
  public get engineConfigPgMaxStandbyStreamingDelay() {
    return this.getNumberAttribute('engine_config_pg_max_standby_streaming_delay');
  }

  // engine_config_pg_max_wal_senders - computed: true, optional: false, required: false
  public get engineConfigPgMaxWalSenders() {
    return this.getNumberAttribute('engine_config_pg_max_wal_senders');
  }

  // engine_config_pg_max_worker_processes - computed: true, optional: false, required: false
  public get engineConfigPgMaxWorkerProcesses() {
    return this.getNumberAttribute('engine_config_pg_max_worker_processes');
  }

  // engine_config_pg_password_encryption - computed: true, optional: false, required: false
  public get engineConfigPgPasswordEncryption() {
    return this.getStringAttribute('engine_config_pg_password_encryption');
  }

  // engine_config_pg_pg_partman_bgw_interval - computed: true, optional: false, required: false
  public get engineConfigPgPgPartmanBgwInterval() {
    return this.getNumberAttribute('engine_config_pg_pg_partman_bgw_interval');
  }

  // engine_config_pg_pg_partman_bgw_role - computed: true, optional: false, required: false
  public get engineConfigPgPgPartmanBgwRole() {
    return this.getStringAttribute('engine_config_pg_pg_partman_bgw_role');
  }

  // engine_config_pg_pg_stat_monitor_pgsm_enable_query_plan - computed: true, optional: false, required: false
  public get engineConfigPgPgStatMonitorPgsmEnableQueryPlan() {
    return this.getBooleanAttribute('engine_config_pg_pg_stat_monitor_pgsm_enable_query_plan');
  }

  // engine_config_pg_pg_stat_monitor_pgsm_max_buckets - computed: true, optional: false, required: false
  public get engineConfigPgPgStatMonitorPgsmMaxBuckets() {
    return this.getNumberAttribute('engine_config_pg_pg_stat_monitor_pgsm_max_buckets');
  }

  // engine_config_pg_pg_stat_statements_track - computed: true, optional: false, required: false
  public get engineConfigPgPgStatStatementsTrack() {
    return this.getStringAttribute('engine_config_pg_pg_stat_statements_track');
  }

  // engine_config_pg_stat_monitor_enable - computed: true, optional: false, required: false
  public get engineConfigPgStatMonitorEnable() {
    return this.getBooleanAttribute('engine_config_pg_stat_monitor_enable');
  }

  // engine_config_pg_temp_file_limit - computed: true, optional: false, required: false
  public get engineConfigPgTempFileLimit() {
    return this.getNumberAttribute('engine_config_pg_temp_file_limit');
  }

  // engine_config_pg_timezone - computed: true, optional: false, required: false
  public get engineConfigPgTimezone() {
    return this.getStringAttribute('engine_config_pg_timezone');
  }

  // engine_config_pg_track_activity_query_size - computed: true, optional: false, required: false
  public get engineConfigPgTrackActivityQuerySize() {
    return this.getNumberAttribute('engine_config_pg_track_activity_query_size');
  }

  // engine_config_pg_track_commit_timestamp - computed: true, optional: false, required: false
  public get engineConfigPgTrackCommitTimestamp() {
    return this.getStringAttribute('engine_config_pg_track_commit_timestamp');
  }

  // engine_config_pg_track_functions - computed: true, optional: false, required: false
  public get engineConfigPgTrackFunctions() {
    return this.getStringAttribute('engine_config_pg_track_functions');
  }

  // engine_config_pg_track_io_timing - computed: true, optional: false, required: false
  public get engineConfigPgTrackIoTiming() {
    return this.getStringAttribute('engine_config_pg_track_io_timing');
  }

  // engine_config_pg_wal_sender_timeout - computed: true, optional: false, required: false
  public get engineConfigPgWalSenderTimeout() {
    return this.getNumberAttribute('engine_config_pg_wal_sender_timeout');
  }

  // engine_config_pg_wal_writer_delay - computed: true, optional: false, required: false
  public get engineConfigPgWalWriterDelay() {
    return this.getNumberAttribute('engine_config_pg_wal_writer_delay');
  }

  // engine_config_pglookout_max_failover_replication_time_lag - computed: true, optional: false, required: false
  public get engineConfigPglookoutMaxFailoverReplicationTimeLag() {
    return this.getNumberAttribute('engine_config_pglookout_max_failover_replication_time_lag');
  }

  // engine_config_shared_buffers_percentage - computed: true, optional: false, required: false
  public get engineConfigSharedBuffersPercentage() {
    return this.getNumberAttribute('engine_config_shared_buffers_percentage');
  }

  // engine_config_work_mem - computed: true, optional: false, required: false
  public get engineConfigWorkMem() {
    return this.getNumberAttribute('engine_config_work_mem');
  }

  // engine_id - computed: true, optional: false, required: false
  public get engineId() {
    return this.getStringAttribute('engine_id');
  }

  // fork_restore_time - computed: true, optional: false, required: false
  public get forkRestoreTime() {
    return this.getStringAttribute('fork_restore_time');
  }

  // fork_source - computed: true, optional: false, required: false
  public get forkSource() {
    return this.getNumberAttribute('fork_source');
  }

  // host_primary - computed: true, optional: false, required: false
  public get hostPrimary() {
    return this.getStringAttribute('host_primary');
  }

  // host_secondary - computed: true, optional: false, required: false
  public get hostSecondary() {
    return this.getStringAttribute('host_secondary');
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // label - computed: true, optional: false, required: false
  public get label() {
    return this.getStringAttribute('label');
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
  private _pendingUpdates = new DataLinodeDatabasePostgresqlV2PendingUpdatesList(this, "pending_updates", true);
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

  // private_network - computed: true, optional: false, required: false
  private _privateNetwork = new DataLinodeDatabasePostgresqlV2PrivateNetworkOutputReference(this, "private_network");
  public get privateNetwork() {
    return this._privateNetwork;
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
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

  // suspended - computed: true, optional: false, required: false
  public get suspended() {
    return this.getBooleanAttribute('suspended');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // updated - computed: true, optional: false, required: false
  public get updated() {
    return this.getStringAttribute('updated');
  }

  // updates - computed: true, optional: false, required: false
  private _updates = new DataLinodeDatabasePostgresqlV2UpdatesOutputReference(this, "updates");
  public get updates() {
    return this._updates;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
