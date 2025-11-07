// https://registry.terraform.io/providers/linode/linode/3.5.0/docs/data-sources/database_mysql_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataLinodeDatabaseMysqlV2Config extends cdktf.TerraformMetaArguments {
  /**
  * The id of the MySQL Database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/data-sources/database_mysql_v2#id DataLinodeDatabaseMysqlV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataLinodeDatabaseMysqlV2PendingUpdates {
}

export function dataLinodeDatabaseMysqlV2PendingUpdatesToTerraform(struct?: DataLinodeDatabaseMysqlV2PendingUpdates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLinodeDatabaseMysqlV2PendingUpdatesToHclTerraform(struct?: DataLinodeDatabaseMysqlV2PendingUpdates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLinodeDatabaseMysqlV2PendingUpdatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataLinodeDatabaseMysqlV2PendingUpdates | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLinodeDatabaseMysqlV2PendingUpdates | undefined) {
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

export class DataLinodeDatabaseMysqlV2PendingUpdatesList extends cdktf.ComplexList {

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
  public get(index: number): DataLinodeDatabaseMysqlV2PendingUpdatesOutputReference {
    return new DataLinodeDatabaseMysqlV2PendingUpdatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataLinodeDatabaseMysqlV2PrivateNetwork {
}

export function dataLinodeDatabaseMysqlV2PrivateNetworkToTerraform(struct?: DataLinodeDatabaseMysqlV2PrivateNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLinodeDatabaseMysqlV2PrivateNetworkToHclTerraform(struct?: DataLinodeDatabaseMysqlV2PrivateNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLinodeDatabaseMysqlV2PrivateNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataLinodeDatabaseMysqlV2PrivateNetwork | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLinodeDatabaseMysqlV2PrivateNetwork | undefined) {
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
export interface DataLinodeDatabaseMysqlV2Updates {
}

export function dataLinodeDatabaseMysqlV2UpdatesToTerraform(struct?: DataLinodeDatabaseMysqlV2Updates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLinodeDatabaseMysqlV2UpdatesToHclTerraform(struct?: DataLinodeDatabaseMysqlV2Updates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLinodeDatabaseMysqlV2UpdatesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataLinodeDatabaseMysqlV2Updates | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLinodeDatabaseMysqlV2Updates | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/data-sources/database_mysql_v2 linode_database_mysql_v2}
*/
export class DataLinodeDatabaseMysqlV2 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "linode_database_mysql_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataLinodeDatabaseMysqlV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataLinodeDatabaseMysqlV2 to import
  * @param importFromId The id of the existing DataLinodeDatabaseMysqlV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/data-sources/database_mysql_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataLinodeDatabaseMysqlV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "linode_database_mysql_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/data-sources/database_mysql_v2 linode_database_mysql_v2} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataLinodeDatabaseMysqlV2Config
  */
  public constructor(scope: Construct, id: string, config: DataLinodeDatabaseMysqlV2Config) {
    super(scope, id, {
      terraformResourceType: 'linode_database_mysql_v2',
      terraformGeneratorMetadata: {
        providerName: 'linode',
        providerVersion: '3.5.0'
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

  // engine_config_binlog_retention_period - computed: true, optional: false, required: false
  public get engineConfigBinlogRetentionPeriod() {
    return this.getNumberAttribute('engine_config_binlog_retention_period');
  }

  // engine_config_mysql_connect_timeout - computed: true, optional: false, required: false
  public get engineConfigMysqlConnectTimeout() {
    return this.getNumberAttribute('engine_config_mysql_connect_timeout');
  }

  // engine_config_mysql_default_time_zone - computed: true, optional: false, required: false
  public get engineConfigMysqlDefaultTimeZone() {
    return this.getStringAttribute('engine_config_mysql_default_time_zone');
  }

  // engine_config_mysql_group_concat_max_len - computed: true, optional: false, required: false
  public get engineConfigMysqlGroupConcatMaxLen() {
    return this.getNumberAttribute('engine_config_mysql_group_concat_max_len');
  }

  // engine_config_mysql_information_schema_stats_expiry - computed: true, optional: false, required: false
  public get engineConfigMysqlInformationSchemaStatsExpiry() {
    return this.getNumberAttribute('engine_config_mysql_information_schema_stats_expiry');
  }

  // engine_config_mysql_innodb_change_buffer_max_size - computed: true, optional: false, required: false
  public get engineConfigMysqlInnodbChangeBufferMaxSize() {
    return this.getNumberAttribute('engine_config_mysql_innodb_change_buffer_max_size');
  }

  // engine_config_mysql_innodb_flush_neighbors - computed: true, optional: false, required: false
  public get engineConfigMysqlInnodbFlushNeighbors() {
    return this.getNumberAttribute('engine_config_mysql_innodb_flush_neighbors');
  }

  // engine_config_mysql_innodb_ft_min_token_size - computed: true, optional: false, required: false
  public get engineConfigMysqlInnodbFtMinTokenSize() {
    return this.getNumberAttribute('engine_config_mysql_innodb_ft_min_token_size');
  }

  // engine_config_mysql_innodb_ft_server_stopword_table - computed: true, optional: false, required: false
  public get engineConfigMysqlInnodbFtServerStopwordTable() {
    return this.getStringAttribute('engine_config_mysql_innodb_ft_server_stopword_table');
  }

  // engine_config_mysql_innodb_lock_wait_timeout - computed: true, optional: false, required: false
  public get engineConfigMysqlInnodbLockWaitTimeout() {
    return this.getNumberAttribute('engine_config_mysql_innodb_lock_wait_timeout');
  }

  // engine_config_mysql_innodb_log_buffer_size - computed: true, optional: false, required: false
  public get engineConfigMysqlInnodbLogBufferSize() {
    return this.getNumberAttribute('engine_config_mysql_innodb_log_buffer_size');
  }

  // engine_config_mysql_innodb_online_alter_log_max_size - computed: true, optional: false, required: false
  public get engineConfigMysqlInnodbOnlineAlterLogMaxSize() {
    return this.getNumberAttribute('engine_config_mysql_innodb_online_alter_log_max_size');
  }

  // engine_config_mysql_innodb_read_io_threads - computed: true, optional: false, required: false
  public get engineConfigMysqlInnodbReadIoThreads() {
    return this.getNumberAttribute('engine_config_mysql_innodb_read_io_threads');
  }

  // engine_config_mysql_innodb_rollback_on_timeout - computed: true, optional: false, required: false
  public get engineConfigMysqlInnodbRollbackOnTimeout() {
    return this.getBooleanAttribute('engine_config_mysql_innodb_rollback_on_timeout');
  }

  // engine_config_mysql_innodb_thread_concurrency - computed: true, optional: false, required: false
  public get engineConfigMysqlInnodbThreadConcurrency() {
    return this.getNumberAttribute('engine_config_mysql_innodb_thread_concurrency');
  }

  // engine_config_mysql_innodb_write_io_threads - computed: true, optional: false, required: false
  public get engineConfigMysqlInnodbWriteIoThreads() {
    return this.getNumberAttribute('engine_config_mysql_innodb_write_io_threads');
  }

  // engine_config_mysql_interactive_timeout - computed: true, optional: false, required: false
  public get engineConfigMysqlInteractiveTimeout() {
    return this.getNumberAttribute('engine_config_mysql_interactive_timeout');
  }

  // engine_config_mysql_internal_tmp_mem_storage_engine - computed: true, optional: false, required: false
  public get engineConfigMysqlInternalTmpMemStorageEngine() {
    return this.getStringAttribute('engine_config_mysql_internal_tmp_mem_storage_engine');
  }

  // engine_config_mysql_max_allowed_packet - computed: true, optional: false, required: false
  public get engineConfigMysqlMaxAllowedPacket() {
    return this.getNumberAttribute('engine_config_mysql_max_allowed_packet');
  }

  // engine_config_mysql_max_heap_table_size - computed: true, optional: false, required: false
  public get engineConfigMysqlMaxHeapTableSize() {
    return this.getNumberAttribute('engine_config_mysql_max_heap_table_size');
  }

  // engine_config_mysql_net_buffer_length - computed: true, optional: false, required: false
  public get engineConfigMysqlNetBufferLength() {
    return this.getNumberAttribute('engine_config_mysql_net_buffer_length');
  }

  // engine_config_mysql_net_read_timeout - computed: true, optional: false, required: false
  public get engineConfigMysqlNetReadTimeout() {
    return this.getNumberAttribute('engine_config_mysql_net_read_timeout');
  }

  // engine_config_mysql_net_write_timeout - computed: true, optional: false, required: false
  public get engineConfigMysqlNetWriteTimeout() {
    return this.getNumberAttribute('engine_config_mysql_net_write_timeout');
  }

  // engine_config_mysql_sort_buffer_size - computed: true, optional: false, required: false
  public get engineConfigMysqlSortBufferSize() {
    return this.getNumberAttribute('engine_config_mysql_sort_buffer_size');
  }

  // engine_config_mysql_sql_mode - computed: true, optional: false, required: false
  public get engineConfigMysqlSqlMode() {
    return this.getStringAttribute('engine_config_mysql_sql_mode');
  }

  // engine_config_mysql_sql_require_primary_key - computed: true, optional: false, required: false
  public get engineConfigMysqlSqlRequirePrimaryKey() {
    return this.getBooleanAttribute('engine_config_mysql_sql_require_primary_key');
  }

  // engine_config_mysql_tmp_table_size - computed: true, optional: false, required: false
  public get engineConfigMysqlTmpTableSize() {
    return this.getNumberAttribute('engine_config_mysql_tmp_table_size');
  }

  // engine_config_mysql_wait_timeout - computed: true, optional: false, required: false
  public get engineConfigMysqlWaitTimeout() {
    return this.getNumberAttribute('engine_config_mysql_wait_timeout');
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
  private _pendingUpdates = new DataLinodeDatabaseMysqlV2PendingUpdatesList(this, "pending_updates", true);
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
  private _privateNetwork = new DataLinodeDatabaseMysqlV2PrivateNetworkOutputReference(this, "private_network");
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
  private _updates = new DataLinodeDatabaseMysqlV2UpdatesOutputReference(this, "updates");
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
