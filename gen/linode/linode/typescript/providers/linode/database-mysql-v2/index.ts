// https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/database_mysql_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatabaseMysqlV2Config extends cdktf.TerraformMetaArguments {
  /**
  * A list of IP addresses that can access the Managed Database. Each item can be a single IP address or a range in CIDR format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/database_mysql_v2#allow_list DatabaseMysqlV2#allow_list}
  */
  readonly allowList?: string[];
  /**
  * The number of Linode instance nodes deployed to the Managed Database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/database_mysql_v2#cluster_size DatabaseMysqlV2#cluster_size}
  */
  readonly clusterSize?: number;
  /**
  * The minimum amount of time in seconds to keep binlog entries before deletion. This may be extended for services that require binlog entries for longer than the default for example if using the MySQL Debezium Kafka connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/database_mysql_v2#engine_config_binlog_retention_period DatabaseMysqlV2#engine_config_binlog_retention_period}
  */
  readonly engineConfigBinlogRetentionPeriod?: number;
  /**
  * The number of seconds that the mysqld server waits for a connect packet before responding with Bad handshake.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/database_mysql_v2#engine_config_mysql_connect_timeout DatabaseMysqlV2#engine_config_mysql_connect_timeout}
  */
  readonly engineConfigMysqlConnectTimeout?: number;
  /**
  * Default server time zone as an offset from UTC (from -12:00 to +12:00), a time zone name, or 'SYSTEM' to use the MySQL server default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/database_mysql_v2#engine_config_mysql_default_time_zone DatabaseMysqlV2#engine_config_mysql_default_time_zone}
  */
  readonly engineConfigMysqlDefaultTimeZone?: string;
  /**
  * The maximum permitted result length in bytes for the GROUP_CONCAT() function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/database_mysql_v2#engine_config_mysql_group_concat_max_len DatabaseMysqlV2#engine_config_mysql_group_concat_max_len}
  */
  readonly engineConfigMysqlGroupConcatMaxLen?: number;
  /**
  * The time, in seconds, before cached statistics expire.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/database_mysql_v2#engine_config_mysql_information_schema_stats_expiry DatabaseMysqlV2#engine_config_mysql_information_schema_stats_expiry}
  */
  readonly engineConfigMysqlInformationSchemaStatsExpiry?: number;
  /**
  * Maximum size for the InnoDB change buffer, as a percentage of the total size of the buffer pool. Default is 25.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/database_mysql_v2#engine_config_mysql_innodb_change_buffer_max_size DatabaseMysqlV2#engine_config_mysql_innodb_change_buffer_max_size}
  */
  readonly engineConfigMysqlInnodbChangeBufferMaxSize?: number;
  /**
  * Specifies whether flushing a page from the InnoDB buffer pool also flushes other dirty pages in the same extent (default is 1): 0 - dirty pages in the same extent are not flushed, 1 - flush contiguous dirty pages in the same extent, 2 - flush dirty pages in the same extent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/database_mysql_v2#engine_config_mysql_innodb_flush_neighbors DatabaseMysqlV2#engine_config_mysql_innodb_flush_neighbors}
  */
  readonly engineConfigMysqlInnodbFlushNeighbors?: number;
  /**
  * Minimum length of words that are stored in an InnoDB FULLTEXT index. Changing this parameter will lead to a restart of the MySQL service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/database_mysql_v2#engine_config_mysql_innodb_ft_min_token_size DatabaseMysqlV2#engine_config_mysql_innodb_ft_min_token_size}
  */
  readonly engineConfigMysqlInnodbFtMinTokenSize?: number;
  /**
  * This option is used to specify your own InnoDB FULLTEXT index stopword list for all InnoDB tables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/database_mysql_v2#engine_config_mysql_innodb_ft_server_stopword_table DatabaseMysqlV2#engine_config_mysql_innodb_ft_server_stopword_table}
  */
  readonly engineConfigMysqlInnodbFtServerStopwordTable?: string;
  /**
  * The length of time in seconds an InnoDB transaction waits for a row lock before giving up. Default is 120.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/database_mysql_v2#engine_config_mysql_innodb_lock_wait_timeout DatabaseMysqlV2#engine_config_mysql_innodb_lock_wait_timeout}
  */
  readonly engineConfigMysqlInnodbLockWaitTimeout?: number;
  /**
  * The size in bytes of the buffer that InnoDB uses to write to the log files on disk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/database_mysql_v2#engine_config_mysql_innodb_log_buffer_size DatabaseMysqlV2#engine_config_mysql_innodb_log_buffer_size}
  */
  readonly engineConfigMysqlInnodbLogBufferSize?: number;
  /**
  * The upper limit in bytes on the size of the temporary log files used during online DDL operations for InnoDB tables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/database_mysql_v2#engine_config_mysql_innodb_online_alter_log_max_size DatabaseMysqlV2#engine_config_mysql_innodb_online_alter_log_max_size}
  */
  readonly engineConfigMysqlInnodbOnlineAlterLogMaxSize?: number;
  /**
  * The number of I/O threads for read operations in InnoDB. Default is 4. Changing this parameter will lead to a restart of the MySQL service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/database_mysql_v2#engine_config_mysql_innodb_read_io_threads DatabaseMysqlV2#engine_config_mysql_innodb_read_io_threads}
  */
  readonly engineConfigMysqlInnodbReadIoThreads?: number;
  /**
  * When enabled a transaction timeout causes InnoDB to abort and roll back the entire transaction. Changing this parameter will lead to a restart of the MySQL service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/database_mysql_v2#engine_config_mysql_innodb_rollback_on_timeout DatabaseMysqlV2#engine_config_mysql_innodb_rollback_on_timeout}
  */
  readonly engineConfigMysqlInnodbRollbackOnTimeout?: boolean | cdktf.IResolvable;
  /**
  * Defines the maximum number of threads permitted inside of InnoDB. Default is 0 (infinite concurrency - no limit).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/database_mysql_v2#engine_config_mysql_innodb_thread_concurrency DatabaseMysqlV2#engine_config_mysql_innodb_thread_concurrency}
  */
  readonly engineConfigMysqlInnodbThreadConcurrency?: number;
  /**
  * The number of I/O threads for write operations in InnoDB. Default is 4. Changing this parameter will lead to a restart of the MySQL service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/database_mysql_v2#engine_config_mysql_innodb_write_io_threads DatabaseMysqlV2#engine_config_mysql_innodb_write_io_threads}
  */
  readonly engineConfigMysqlInnodbWriteIoThreads?: number;
  /**
  * The number of seconds the server waits for activity on an interactive connection before closing it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/database_mysql_v2#engine_config_mysql_interactive_timeout DatabaseMysqlV2#engine_config_mysql_interactive_timeout}
  */
  readonly engineConfigMysqlInteractiveTimeout?: number;
  /**
  * The storage engine for in-memory internal temporary tables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/database_mysql_v2#engine_config_mysql_internal_tmp_mem_storage_engine DatabaseMysqlV2#engine_config_mysql_internal_tmp_mem_storage_engine}
  */
  readonly engineConfigMysqlInternalTmpMemStorageEngine?: string;
  /**
  * Size of the largest message in bytes that can be received by the server. Default is 67108864 (64M).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/database_mysql_v2#engine_config_mysql_max_allowed_packet DatabaseMysqlV2#engine_config_mysql_max_allowed_packet}
  */
  readonly engineConfigMysqlMaxAllowedPacket?: number;
  /**
  * Limits the size of internal in-memory tables. Also set tmp_table_size. Default is 16777216 (16M).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/database_mysql_v2#engine_config_mysql_max_heap_table_size DatabaseMysqlV2#engine_config_mysql_max_heap_table_size}
  */
  readonly engineConfigMysqlMaxHeapTableSize?: number;
  /**
  * Start sizes of connection buffer and result buffer. Default is 16384 (16K). Changing this parameter will lead to a restart of the MySQL service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/database_mysql_v2#engine_config_mysql_net_buffer_length DatabaseMysqlV2#engine_config_mysql_net_buffer_length}
  */
  readonly engineConfigMysqlNetBufferLength?: number;
  /**
  * The number of seconds to wait for more data from a connection before aborting the read.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/database_mysql_v2#engine_config_mysql_net_read_timeout DatabaseMysqlV2#engine_config_mysql_net_read_timeout}
  */
  readonly engineConfigMysqlNetReadTimeout?: number;
  /**
  * The number of seconds to wait for a block to be written to a connection before aborting the write.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/database_mysql_v2#engine_config_mysql_net_write_timeout DatabaseMysqlV2#engine_config_mysql_net_write_timeout}
  */
  readonly engineConfigMysqlNetWriteTimeout?: number;
  /**
  * Sort buffer size in bytes for ORDER BY optimization. Default is 262144 (256K).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/database_mysql_v2#engine_config_mysql_sort_buffer_size DatabaseMysqlV2#engine_config_mysql_sort_buffer_size}
  */
  readonly engineConfigMysqlSortBufferSize?: number;
  /**
  * Global SQL mode. Set to empty to use MySQL server defaults. When creating a new service and not setting this field Aiven default SQL mode (strict, SQL standard compliant) will be assigned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/database_mysql_v2#engine_config_mysql_sql_mode DatabaseMysqlV2#engine_config_mysql_sql_mode}
  */
  readonly engineConfigMysqlSqlMode?: string;
  /**
  * Require primary key to be defined for new tables or old tables modified with ALTER TABLE and fail if missing. It is recommended to always have primary keys because various functionality may break if any large table is missing them.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/database_mysql_v2#engine_config_mysql_sql_require_primary_key DatabaseMysqlV2#engine_config_mysql_sql_require_primary_key}
  */
  readonly engineConfigMysqlSqlRequirePrimaryKey?: boolean | cdktf.IResolvable;
  /**
  * Limits the size of internal in-memory tables. Also set max_heap_table_size. Default is 16777216 (16M).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/database_mysql_v2#engine_config_mysql_tmp_table_size DatabaseMysqlV2#engine_config_mysql_tmp_table_size}
  */
  readonly engineConfigMysqlTmpTableSize?: number;
  /**
  * The number of seconds the server waits for activity on a noninteractive connection before closing it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/database_mysql_v2#engine_config_mysql_wait_timeout DatabaseMysqlV2#engine_config_mysql_wait_timeout}
  */
  readonly engineConfigMysqlWaitTimeout?: number;
  /**
  * The unique ID of the database engine and version to use. (e.g. mysql/8)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/database_mysql_v2#engine_id DatabaseMysqlV2#engine_id}
  */
  readonly engineId: string;
  /**
  * The database timestamp from which it was restored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/database_mysql_v2#fork_restore_time DatabaseMysqlV2#fork_restore_time}
  */
  readonly forkRestoreTime?: string;
  /**
  * The ID of the database that was forked from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/database_mysql_v2#fork_source DatabaseMysqlV2#fork_source}
  */
  readonly forkSource?: number;
  /**
  * A unique, user-defined string referring to the Managed Database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/database_mysql_v2#label DatabaseMysqlV2#label}
  */
  readonly label: string;
  /**
  * Restricts access to this database using a virtual private cloud (VPC) that you've configured in the region where the database will live.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/database_mysql_v2#private_network DatabaseMysqlV2#private_network}
  */
  readonly privateNetwork?: DatabaseMysqlV2PrivateNetwork;
  /**
  * The Region ID for the Managed Database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/database_mysql_v2#region DatabaseMysqlV2#region}
  */
  readonly region: string;
  /**
  * Whether this database is suspended.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/database_mysql_v2#suspended DatabaseMysqlV2#suspended}
  */
  readonly suspended?: boolean | cdktf.IResolvable;
  /**
  * The Linode Instance type used by the Managed Database for its nodes.
  * 
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/database_mysql_v2#type DatabaseMysqlV2#type}
  */
  readonly type: string;
  /**
  * Configuration settings for automated patch update maintenance for the Managed Database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/database_mysql_v2#updates DatabaseMysqlV2#updates}
  */
  readonly updates?: DatabaseMysqlV2Updates;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/database_mysql_v2#timeouts DatabaseMysqlV2#timeouts}
  */
  readonly timeouts?: DatabaseMysqlV2Timeouts;
}
export interface DatabaseMysqlV2PendingUpdates {
}

export function databaseMysqlV2PendingUpdatesToTerraform(struct?: DatabaseMysqlV2PendingUpdates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function databaseMysqlV2PendingUpdatesToHclTerraform(struct?: DatabaseMysqlV2PendingUpdates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatabaseMysqlV2PendingUpdatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseMysqlV2PendingUpdates | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseMysqlV2PendingUpdates | undefined) {
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

export class DatabaseMysqlV2PendingUpdatesList extends cdktf.ComplexList {

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
  public get(index: number): DatabaseMysqlV2PendingUpdatesOutputReference {
    return new DatabaseMysqlV2PendingUpdatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseMysqlV2PrivateNetwork {
  /**
  * Set to `true` to allow clients outside of the VPC to connect to the database using a public IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/database_mysql_v2#public_access DatabaseMysqlV2#public_access}
  */
  readonly publicAccess?: boolean | cdktf.IResolvable;
  /**
  * The ID of the VPC subnet to restrict access to this database using.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/database_mysql_v2#subnet_id DatabaseMysqlV2#subnet_id}
  */
  readonly subnetId: number;
  /**
  *  The ID of the virtual private cloud (VPC) to restrict access to this database using.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/database_mysql_v2#vpc_id DatabaseMysqlV2#vpc_id}
  */
  readonly vpcId: number;
}

export function databaseMysqlV2PrivateNetworkToTerraform(struct?: DatabaseMysqlV2PrivateNetwork | cdktf.IResolvable): any {
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


export function databaseMysqlV2PrivateNetworkToHclTerraform(struct?: DatabaseMysqlV2PrivateNetwork | cdktf.IResolvable): any {
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

export class DatabaseMysqlV2PrivateNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatabaseMysqlV2PrivateNetwork | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DatabaseMysqlV2PrivateNetwork | cdktf.IResolvable | undefined) {
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
export interface DatabaseMysqlV2Updates {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/database_mysql_v2#day_of_week DatabaseMysqlV2#day_of_week}
  */
  readonly dayOfWeek?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/database_mysql_v2#duration DatabaseMysqlV2#duration}
  */
  readonly duration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/database_mysql_v2#frequency DatabaseMysqlV2#frequency}
  */
  readonly frequency?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/database_mysql_v2#hour_of_day DatabaseMysqlV2#hour_of_day}
  */
  readonly hourOfDay?: number;
}

export function databaseMysqlV2UpdatesToTerraform(struct?: DatabaseMysqlV2Updates | cdktf.IResolvable): any {
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


export function databaseMysqlV2UpdatesToHclTerraform(struct?: DatabaseMysqlV2Updates | cdktf.IResolvable): any {
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

export class DatabaseMysqlV2UpdatesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatabaseMysqlV2Updates | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DatabaseMysqlV2Updates | cdktf.IResolvable | undefined) {
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
export interface DatabaseMysqlV2Timeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/database_mysql_v2#create DatabaseMysqlV2#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/database_mysql_v2#delete DatabaseMysqlV2#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/database_mysql_v2#update DatabaseMysqlV2#update}
  */
  readonly update?: string;
}

export function databaseMysqlV2TimeoutsToTerraform(struct?: DatabaseMysqlV2Timeouts | cdktf.IResolvable): any {
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


export function databaseMysqlV2TimeoutsToHclTerraform(struct?: DatabaseMysqlV2Timeouts | cdktf.IResolvable): any {
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

export class DatabaseMysqlV2TimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatabaseMysqlV2Timeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DatabaseMysqlV2Timeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/database_mysql_v2 linode_database_mysql_v2}
*/
export class DatabaseMysqlV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "linode_database_mysql_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DatabaseMysqlV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatabaseMysqlV2 to import
  * @param importFromId The id of the existing DatabaseMysqlV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/database_mysql_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatabaseMysqlV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "linode_database_mysql_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/database_mysql_v2 linode_database_mysql_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatabaseMysqlV2Config
  */
  public constructor(scope: Construct, id: string, config: DatabaseMysqlV2Config) {
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
    this._allowList = config.allowList;
    this._clusterSize = config.clusterSize;
    this._engineConfigBinlogRetentionPeriod = config.engineConfigBinlogRetentionPeriod;
    this._engineConfigMysqlConnectTimeout = config.engineConfigMysqlConnectTimeout;
    this._engineConfigMysqlDefaultTimeZone = config.engineConfigMysqlDefaultTimeZone;
    this._engineConfigMysqlGroupConcatMaxLen = config.engineConfigMysqlGroupConcatMaxLen;
    this._engineConfigMysqlInformationSchemaStatsExpiry = config.engineConfigMysqlInformationSchemaStatsExpiry;
    this._engineConfigMysqlInnodbChangeBufferMaxSize = config.engineConfigMysqlInnodbChangeBufferMaxSize;
    this._engineConfigMysqlInnodbFlushNeighbors = config.engineConfigMysqlInnodbFlushNeighbors;
    this._engineConfigMysqlInnodbFtMinTokenSize = config.engineConfigMysqlInnodbFtMinTokenSize;
    this._engineConfigMysqlInnodbFtServerStopwordTable = config.engineConfigMysqlInnodbFtServerStopwordTable;
    this._engineConfigMysqlInnodbLockWaitTimeout = config.engineConfigMysqlInnodbLockWaitTimeout;
    this._engineConfigMysqlInnodbLogBufferSize = config.engineConfigMysqlInnodbLogBufferSize;
    this._engineConfigMysqlInnodbOnlineAlterLogMaxSize = config.engineConfigMysqlInnodbOnlineAlterLogMaxSize;
    this._engineConfigMysqlInnodbReadIoThreads = config.engineConfigMysqlInnodbReadIoThreads;
    this._engineConfigMysqlInnodbRollbackOnTimeout = config.engineConfigMysqlInnodbRollbackOnTimeout;
    this._engineConfigMysqlInnodbThreadConcurrency = config.engineConfigMysqlInnodbThreadConcurrency;
    this._engineConfigMysqlInnodbWriteIoThreads = config.engineConfigMysqlInnodbWriteIoThreads;
    this._engineConfigMysqlInteractiveTimeout = config.engineConfigMysqlInteractiveTimeout;
    this._engineConfigMysqlInternalTmpMemStorageEngine = config.engineConfigMysqlInternalTmpMemStorageEngine;
    this._engineConfigMysqlMaxAllowedPacket = config.engineConfigMysqlMaxAllowedPacket;
    this._engineConfigMysqlMaxHeapTableSize = config.engineConfigMysqlMaxHeapTableSize;
    this._engineConfigMysqlNetBufferLength = config.engineConfigMysqlNetBufferLength;
    this._engineConfigMysqlNetReadTimeout = config.engineConfigMysqlNetReadTimeout;
    this._engineConfigMysqlNetWriteTimeout = config.engineConfigMysqlNetWriteTimeout;
    this._engineConfigMysqlSortBufferSize = config.engineConfigMysqlSortBufferSize;
    this._engineConfigMysqlSqlMode = config.engineConfigMysqlSqlMode;
    this._engineConfigMysqlSqlRequirePrimaryKey = config.engineConfigMysqlSqlRequirePrimaryKey;
    this._engineConfigMysqlTmpTableSize = config.engineConfigMysqlTmpTableSize;
    this._engineConfigMysqlWaitTimeout = config.engineConfigMysqlWaitTimeout;
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

  // engine_config_binlog_retention_period - computed: true, optional: true, required: false
  private _engineConfigBinlogRetentionPeriod?: number; 
  public get engineConfigBinlogRetentionPeriod() {
    return this.getNumberAttribute('engine_config_binlog_retention_period');
  }
  public set engineConfigBinlogRetentionPeriod(value: number) {
    this._engineConfigBinlogRetentionPeriod = value;
  }
  public resetEngineConfigBinlogRetentionPeriod() {
    this._engineConfigBinlogRetentionPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineConfigBinlogRetentionPeriodInput() {
    return this._engineConfigBinlogRetentionPeriod;
  }

  // engine_config_mysql_connect_timeout - computed: true, optional: true, required: false
  private _engineConfigMysqlConnectTimeout?: number; 
  public get engineConfigMysqlConnectTimeout() {
    return this.getNumberAttribute('engine_config_mysql_connect_timeout');
  }
  public set engineConfigMysqlConnectTimeout(value: number) {
    this._engineConfigMysqlConnectTimeout = value;
  }
  public resetEngineConfigMysqlConnectTimeout() {
    this._engineConfigMysqlConnectTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineConfigMysqlConnectTimeoutInput() {
    return this._engineConfigMysqlConnectTimeout;
  }

  // engine_config_mysql_default_time_zone - computed: true, optional: true, required: false
  private _engineConfigMysqlDefaultTimeZone?: string; 
  public get engineConfigMysqlDefaultTimeZone() {
    return this.getStringAttribute('engine_config_mysql_default_time_zone');
  }
  public set engineConfigMysqlDefaultTimeZone(value: string) {
    this._engineConfigMysqlDefaultTimeZone = value;
  }
  public resetEngineConfigMysqlDefaultTimeZone() {
    this._engineConfigMysqlDefaultTimeZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineConfigMysqlDefaultTimeZoneInput() {
    return this._engineConfigMysqlDefaultTimeZone;
  }

  // engine_config_mysql_group_concat_max_len - computed: true, optional: true, required: false
  private _engineConfigMysqlGroupConcatMaxLen?: number; 
  public get engineConfigMysqlGroupConcatMaxLen() {
    return this.getNumberAttribute('engine_config_mysql_group_concat_max_len');
  }
  public set engineConfigMysqlGroupConcatMaxLen(value: number) {
    this._engineConfigMysqlGroupConcatMaxLen = value;
  }
  public resetEngineConfigMysqlGroupConcatMaxLen() {
    this._engineConfigMysqlGroupConcatMaxLen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineConfigMysqlGroupConcatMaxLenInput() {
    return this._engineConfigMysqlGroupConcatMaxLen;
  }

  // engine_config_mysql_information_schema_stats_expiry - computed: true, optional: true, required: false
  private _engineConfigMysqlInformationSchemaStatsExpiry?: number; 
  public get engineConfigMysqlInformationSchemaStatsExpiry() {
    return this.getNumberAttribute('engine_config_mysql_information_schema_stats_expiry');
  }
  public set engineConfigMysqlInformationSchemaStatsExpiry(value: number) {
    this._engineConfigMysqlInformationSchemaStatsExpiry = value;
  }
  public resetEngineConfigMysqlInformationSchemaStatsExpiry() {
    this._engineConfigMysqlInformationSchemaStatsExpiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineConfigMysqlInformationSchemaStatsExpiryInput() {
    return this._engineConfigMysqlInformationSchemaStatsExpiry;
  }

  // engine_config_mysql_innodb_change_buffer_max_size - computed: true, optional: true, required: false
  private _engineConfigMysqlInnodbChangeBufferMaxSize?: number; 
  public get engineConfigMysqlInnodbChangeBufferMaxSize() {
    return this.getNumberAttribute('engine_config_mysql_innodb_change_buffer_max_size');
  }
  public set engineConfigMysqlInnodbChangeBufferMaxSize(value: number) {
    this._engineConfigMysqlInnodbChangeBufferMaxSize = value;
  }
  public resetEngineConfigMysqlInnodbChangeBufferMaxSize() {
    this._engineConfigMysqlInnodbChangeBufferMaxSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineConfigMysqlInnodbChangeBufferMaxSizeInput() {
    return this._engineConfigMysqlInnodbChangeBufferMaxSize;
  }

  // engine_config_mysql_innodb_flush_neighbors - computed: true, optional: true, required: false
  private _engineConfigMysqlInnodbFlushNeighbors?: number; 
  public get engineConfigMysqlInnodbFlushNeighbors() {
    return this.getNumberAttribute('engine_config_mysql_innodb_flush_neighbors');
  }
  public set engineConfigMysqlInnodbFlushNeighbors(value: number) {
    this._engineConfigMysqlInnodbFlushNeighbors = value;
  }
  public resetEngineConfigMysqlInnodbFlushNeighbors() {
    this._engineConfigMysqlInnodbFlushNeighbors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineConfigMysqlInnodbFlushNeighborsInput() {
    return this._engineConfigMysqlInnodbFlushNeighbors;
  }

  // engine_config_mysql_innodb_ft_min_token_size - computed: true, optional: true, required: false
  private _engineConfigMysqlInnodbFtMinTokenSize?: number; 
  public get engineConfigMysqlInnodbFtMinTokenSize() {
    return this.getNumberAttribute('engine_config_mysql_innodb_ft_min_token_size');
  }
  public set engineConfigMysqlInnodbFtMinTokenSize(value: number) {
    this._engineConfigMysqlInnodbFtMinTokenSize = value;
  }
  public resetEngineConfigMysqlInnodbFtMinTokenSize() {
    this._engineConfigMysqlInnodbFtMinTokenSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineConfigMysqlInnodbFtMinTokenSizeInput() {
    return this._engineConfigMysqlInnodbFtMinTokenSize;
  }

  // engine_config_mysql_innodb_ft_server_stopword_table - computed: false, optional: true, required: false
  private _engineConfigMysqlInnodbFtServerStopwordTable?: string; 
  public get engineConfigMysqlInnodbFtServerStopwordTable() {
    return this.getStringAttribute('engine_config_mysql_innodb_ft_server_stopword_table');
  }
  public set engineConfigMysqlInnodbFtServerStopwordTable(value: string) {
    this._engineConfigMysqlInnodbFtServerStopwordTable = value;
  }
  public resetEngineConfigMysqlInnodbFtServerStopwordTable() {
    this._engineConfigMysqlInnodbFtServerStopwordTable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineConfigMysqlInnodbFtServerStopwordTableInput() {
    return this._engineConfigMysqlInnodbFtServerStopwordTable;
  }

  // engine_config_mysql_innodb_lock_wait_timeout - computed: true, optional: true, required: false
  private _engineConfigMysqlInnodbLockWaitTimeout?: number; 
  public get engineConfigMysqlInnodbLockWaitTimeout() {
    return this.getNumberAttribute('engine_config_mysql_innodb_lock_wait_timeout');
  }
  public set engineConfigMysqlInnodbLockWaitTimeout(value: number) {
    this._engineConfigMysqlInnodbLockWaitTimeout = value;
  }
  public resetEngineConfigMysqlInnodbLockWaitTimeout() {
    this._engineConfigMysqlInnodbLockWaitTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineConfigMysqlInnodbLockWaitTimeoutInput() {
    return this._engineConfigMysqlInnodbLockWaitTimeout;
  }

  // engine_config_mysql_innodb_log_buffer_size - computed: true, optional: true, required: false
  private _engineConfigMysqlInnodbLogBufferSize?: number; 
  public get engineConfigMysqlInnodbLogBufferSize() {
    return this.getNumberAttribute('engine_config_mysql_innodb_log_buffer_size');
  }
  public set engineConfigMysqlInnodbLogBufferSize(value: number) {
    this._engineConfigMysqlInnodbLogBufferSize = value;
  }
  public resetEngineConfigMysqlInnodbLogBufferSize() {
    this._engineConfigMysqlInnodbLogBufferSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineConfigMysqlInnodbLogBufferSizeInput() {
    return this._engineConfigMysqlInnodbLogBufferSize;
  }

  // engine_config_mysql_innodb_online_alter_log_max_size - computed: true, optional: true, required: false
  private _engineConfigMysqlInnodbOnlineAlterLogMaxSize?: number; 
  public get engineConfigMysqlInnodbOnlineAlterLogMaxSize() {
    return this.getNumberAttribute('engine_config_mysql_innodb_online_alter_log_max_size');
  }
  public set engineConfigMysqlInnodbOnlineAlterLogMaxSize(value: number) {
    this._engineConfigMysqlInnodbOnlineAlterLogMaxSize = value;
  }
  public resetEngineConfigMysqlInnodbOnlineAlterLogMaxSize() {
    this._engineConfigMysqlInnodbOnlineAlterLogMaxSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineConfigMysqlInnodbOnlineAlterLogMaxSizeInput() {
    return this._engineConfigMysqlInnodbOnlineAlterLogMaxSize;
  }

  // engine_config_mysql_innodb_read_io_threads - computed: true, optional: true, required: false
  private _engineConfigMysqlInnodbReadIoThreads?: number; 
  public get engineConfigMysqlInnodbReadIoThreads() {
    return this.getNumberAttribute('engine_config_mysql_innodb_read_io_threads');
  }
  public set engineConfigMysqlInnodbReadIoThreads(value: number) {
    this._engineConfigMysqlInnodbReadIoThreads = value;
  }
  public resetEngineConfigMysqlInnodbReadIoThreads() {
    this._engineConfigMysqlInnodbReadIoThreads = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineConfigMysqlInnodbReadIoThreadsInput() {
    return this._engineConfigMysqlInnodbReadIoThreads;
  }

  // engine_config_mysql_innodb_rollback_on_timeout - computed: true, optional: true, required: false
  private _engineConfigMysqlInnodbRollbackOnTimeout?: boolean | cdktf.IResolvable; 
  public get engineConfigMysqlInnodbRollbackOnTimeout() {
    return this.getBooleanAttribute('engine_config_mysql_innodb_rollback_on_timeout');
  }
  public set engineConfigMysqlInnodbRollbackOnTimeout(value: boolean | cdktf.IResolvable) {
    this._engineConfigMysqlInnodbRollbackOnTimeout = value;
  }
  public resetEngineConfigMysqlInnodbRollbackOnTimeout() {
    this._engineConfigMysqlInnodbRollbackOnTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineConfigMysqlInnodbRollbackOnTimeoutInput() {
    return this._engineConfigMysqlInnodbRollbackOnTimeout;
  }

  // engine_config_mysql_innodb_thread_concurrency - computed: true, optional: true, required: false
  private _engineConfigMysqlInnodbThreadConcurrency?: number; 
  public get engineConfigMysqlInnodbThreadConcurrency() {
    return this.getNumberAttribute('engine_config_mysql_innodb_thread_concurrency');
  }
  public set engineConfigMysqlInnodbThreadConcurrency(value: number) {
    this._engineConfigMysqlInnodbThreadConcurrency = value;
  }
  public resetEngineConfigMysqlInnodbThreadConcurrency() {
    this._engineConfigMysqlInnodbThreadConcurrency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineConfigMysqlInnodbThreadConcurrencyInput() {
    return this._engineConfigMysqlInnodbThreadConcurrency;
  }

  // engine_config_mysql_innodb_write_io_threads - computed: true, optional: true, required: false
  private _engineConfigMysqlInnodbWriteIoThreads?: number; 
  public get engineConfigMysqlInnodbWriteIoThreads() {
    return this.getNumberAttribute('engine_config_mysql_innodb_write_io_threads');
  }
  public set engineConfigMysqlInnodbWriteIoThreads(value: number) {
    this._engineConfigMysqlInnodbWriteIoThreads = value;
  }
  public resetEngineConfigMysqlInnodbWriteIoThreads() {
    this._engineConfigMysqlInnodbWriteIoThreads = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineConfigMysqlInnodbWriteIoThreadsInput() {
    return this._engineConfigMysqlInnodbWriteIoThreads;
  }

  // engine_config_mysql_interactive_timeout - computed: true, optional: true, required: false
  private _engineConfigMysqlInteractiveTimeout?: number; 
  public get engineConfigMysqlInteractiveTimeout() {
    return this.getNumberAttribute('engine_config_mysql_interactive_timeout');
  }
  public set engineConfigMysqlInteractiveTimeout(value: number) {
    this._engineConfigMysqlInteractiveTimeout = value;
  }
  public resetEngineConfigMysqlInteractiveTimeout() {
    this._engineConfigMysqlInteractiveTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineConfigMysqlInteractiveTimeoutInput() {
    return this._engineConfigMysqlInteractiveTimeout;
  }

  // engine_config_mysql_internal_tmp_mem_storage_engine - computed: true, optional: true, required: false
  private _engineConfigMysqlInternalTmpMemStorageEngine?: string; 
  public get engineConfigMysqlInternalTmpMemStorageEngine() {
    return this.getStringAttribute('engine_config_mysql_internal_tmp_mem_storage_engine');
  }
  public set engineConfigMysqlInternalTmpMemStorageEngine(value: string) {
    this._engineConfigMysqlInternalTmpMemStorageEngine = value;
  }
  public resetEngineConfigMysqlInternalTmpMemStorageEngine() {
    this._engineConfigMysqlInternalTmpMemStorageEngine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineConfigMysqlInternalTmpMemStorageEngineInput() {
    return this._engineConfigMysqlInternalTmpMemStorageEngine;
  }

  // engine_config_mysql_max_allowed_packet - computed: true, optional: true, required: false
  private _engineConfigMysqlMaxAllowedPacket?: number; 
  public get engineConfigMysqlMaxAllowedPacket() {
    return this.getNumberAttribute('engine_config_mysql_max_allowed_packet');
  }
  public set engineConfigMysqlMaxAllowedPacket(value: number) {
    this._engineConfigMysqlMaxAllowedPacket = value;
  }
  public resetEngineConfigMysqlMaxAllowedPacket() {
    this._engineConfigMysqlMaxAllowedPacket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineConfigMysqlMaxAllowedPacketInput() {
    return this._engineConfigMysqlMaxAllowedPacket;
  }

  // engine_config_mysql_max_heap_table_size - computed: true, optional: true, required: false
  private _engineConfigMysqlMaxHeapTableSize?: number; 
  public get engineConfigMysqlMaxHeapTableSize() {
    return this.getNumberAttribute('engine_config_mysql_max_heap_table_size');
  }
  public set engineConfigMysqlMaxHeapTableSize(value: number) {
    this._engineConfigMysqlMaxHeapTableSize = value;
  }
  public resetEngineConfigMysqlMaxHeapTableSize() {
    this._engineConfigMysqlMaxHeapTableSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineConfigMysqlMaxHeapTableSizeInput() {
    return this._engineConfigMysqlMaxHeapTableSize;
  }

  // engine_config_mysql_net_buffer_length - computed: true, optional: true, required: false
  private _engineConfigMysqlNetBufferLength?: number; 
  public get engineConfigMysqlNetBufferLength() {
    return this.getNumberAttribute('engine_config_mysql_net_buffer_length');
  }
  public set engineConfigMysqlNetBufferLength(value: number) {
    this._engineConfigMysqlNetBufferLength = value;
  }
  public resetEngineConfigMysqlNetBufferLength() {
    this._engineConfigMysqlNetBufferLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineConfigMysqlNetBufferLengthInput() {
    return this._engineConfigMysqlNetBufferLength;
  }

  // engine_config_mysql_net_read_timeout - computed: true, optional: true, required: false
  private _engineConfigMysqlNetReadTimeout?: number; 
  public get engineConfigMysqlNetReadTimeout() {
    return this.getNumberAttribute('engine_config_mysql_net_read_timeout');
  }
  public set engineConfigMysqlNetReadTimeout(value: number) {
    this._engineConfigMysqlNetReadTimeout = value;
  }
  public resetEngineConfigMysqlNetReadTimeout() {
    this._engineConfigMysqlNetReadTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineConfigMysqlNetReadTimeoutInput() {
    return this._engineConfigMysqlNetReadTimeout;
  }

  // engine_config_mysql_net_write_timeout - computed: true, optional: true, required: false
  private _engineConfigMysqlNetWriteTimeout?: number; 
  public get engineConfigMysqlNetWriteTimeout() {
    return this.getNumberAttribute('engine_config_mysql_net_write_timeout');
  }
  public set engineConfigMysqlNetWriteTimeout(value: number) {
    this._engineConfigMysqlNetWriteTimeout = value;
  }
  public resetEngineConfigMysqlNetWriteTimeout() {
    this._engineConfigMysqlNetWriteTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineConfigMysqlNetWriteTimeoutInput() {
    return this._engineConfigMysqlNetWriteTimeout;
  }

  // engine_config_mysql_sort_buffer_size - computed: true, optional: true, required: false
  private _engineConfigMysqlSortBufferSize?: number; 
  public get engineConfigMysqlSortBufferSize() {
    return this.getNumberAttribute('engine_config_mysql_sort_buffer_size');
  }
  public set engineConfigMysqlSortBufferSize(value: number) {
    this._engineConfigMysqlSortBufferSize = value;
  }
  public resetEngineConfigMysqlSortBufferSize() {
    this._engineConfigMysqlSortBufferSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineConfigMysqlSortBufferSizeInput() {
    return this._engineConfigMysqlSortBufferSize;
  }

  // engine_config_mysql_sql_mode - computed: true, optional: true, required: false
  private _engineConfigMysqlSqlMode?: string; 
  public get engineConfigMysqlSqlMode() {
    return this.getStringAttribute('engine_config_mysql_sql_mode');
  }
  public set engineConfigMysqlSqlMode(value: string) {
    this._engineConfigMysqlSqlMode = value;
  }
  public resetEngineConfigMysqlSqlMode() {
    this._engineConfigMysqlSqlMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineConfigMysqlSqlModeInput() {
    return this._engineConfigMysqlSqlMode;
  }

  // engine_config_mysql_sql_require_primary_key - computed: true, optional: true, required: false
  private _engineConfigMysqlSqlRequirePrimaryKey?: boolean | cdktf.IResolvable; 
  public get engineConfigMysqlSqlRequirePrimaryKey() {
    return this.getBooleanAttribute('engine_config_mysql_sql_require_primary_key');
  }
  public set engineConfigMysqlSqlRequirePrimaryKey(value: boolean | cdktf.IResolvable) {
    this._engineConfigMysqlSqlRequirePrimaryKey = value;
  }
  public resetEngineConfigMysqlSqlRequirePrimaryKey() {
    this._engineConfigMysqlSqlRequirePrimaryKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineConfigMysqlSqlRequirePrimaryKeyInput() {
    return this._engineConfigMysqlSqlRequirePrimaryKey;
  }

  // engine_config_mysql_tmp_table_size - computed: true, optional: true, required: false
  private _engineConfigMysqlTmpTableSize?: number; 
  public get engineConfigMysqlTmpTableSize() {
    return this.getNumberAttribute('engine_config_mysql_tmp_table_size');
  }
  public set engineConfigMysqlTmpTableSize(value: number) {
    this._engineConfigMysqlTmpTableSize = value;
  }
  public resetEngineConfigMysqlTmpTableSize() {
    this._engineConfigMysqlTmpTableSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineConfigMysqlTmpTableSizeInput() {
    return this._engineConfigMysqlTmpTableSize;
  }

  // engine_config_mysql_wait_timeout - computed: true, optional: true, required: false
  private _engineConfigMysqlWaitTimeout?: number; 
  public get engineConfigMysqlWaitTimeout() {
    return this.getNumberAttribute('engine_config_mysql_wait_timeout');
  }
  public set engineConfigMysqlWaitTimeout(value: number) {
    this._engineConfigMysqlWaitTimeout = value;
  }
  public resetEngineConfigMysqlWaitTimeout() {
    this._engineConfigMysqlWaitTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineConfigMysqlWaitTimeoutInput() {
    return this._engineConfigMysqlWaitTimeout;
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
  private _pendingUpdates = new DatabaseMysqlV2PendingUpdatesList(this, "pending_updates", true);
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
  private _privateNetwork = new DatabaseMysqlV2PrivateNetworkOutputReference(this, "private_network");
  public get privateNetwork() {
    return this._privateNetwork;
  }
  public putPrivateNetwork(value: DatabaseMysqlV2PrivateNetwork) {
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
  private _updates = new DatabaseMysqlV2UpdatesOutputReference(this, "updates");
  public get updates() {
    return this._updates;
  }
  public putUpdates(value: DatabaseMysqlV2Updates) {
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
  private _timeouts = new DatabaseMysqlV2TimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DatabaseMysqlV2Timeouts) {
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
      engine_config_binlog_retention_period: cdktf.numberToTerraform(this._engineConfigBinlogRetentionPeriod),
      engine_config_mysql_connect_timeout: cdktf.numberToTerraform(this._engineConfigMysqlConnectTimeout),
      engine_config_mysql_default_time_zone: cdktf.stringToTerraform(this._engineConfigMysqlDefaultTimeZone),
      engine_config_mysql_group_concat_max_len: cdktf.numberToTerraform(this._engineConfigMysqlGroupConcatMaxLen),
      engine_config_mysql_information_schema_stats_expiry: cdktf.numberToTerraform(this._engineConfigMysqlInformationSchemaStatsExpiry),
      engine_config_mysql_innodb_change_buffer_max_size: cdktf.numberToTerraform(this._engineConfigMysqlInnodbChangeBufferMaxSize),
      engine_config_mysql_innodb_flush_neighbors: cdktf.numberToTerraform(this._engineConfigMysqlInnodbFlushNeighbors),
      engine_config_mysql_innodb_ft_min_token_size: cdktf.numberToTerraform(this._engineConfigMysqlInnodbFtMinTokenSize),
      engine_config_mysql_innodb_ft_server_stopword_table: cdktf.stringToTerraform(this._engineConfigMysqlInnodbFtServerStopwordTable),
      engine_config_mysql_innodb_lock_wait_timeout: cdktf.numberToTerraform(this._engineConfigMysqlInnodbLockWaitTimeout),
      engine_config_mysql_innodb_log_buffer_size: cdktf.numberToTerraform(this._engineConfigMysqlInnodbLogBufferSize),
      engine_config_mysql_innodb_online_alter_log_max_size: cdktf.numberToTerraform(this._engineConfigMysqlInnodbOnlineAlterLogMaxSize),
      engine_config_mysql_innodb_read_io_threads: cdktf.numberToTerraform(this._engineConfigMysqlInnodbReadIoThreads),
      engine_config_mysql_innodb_rollback_on_timeout: cdktf.booleanToTerraform(this._engineConfigMysqlInnodbRollbackOnTimeout),
      engine_config_mysql_innodb_thread_concurrency: cdktf.numberToTerraform(this._engineConfigMysqlInnodbThreadConcurrency),
      engine_config_mysql_innodb_write_io_threads: cdktf.numberToTerraform(this._engineConfigMysqlInnodbWriteIoThreads),
      engine_config_mysql_interactive_timeout: cdktf.numberToTerraform(this._engineConfigMysqlInteractiveTimeout),
      engine_config_mysql_internal_tmp_mem_storage_engine: cdktf.stringToTerraform(this._engineConfigMysqlInternalTmpMemStorageEngine),
      engine_config_mysql_max_allowed_packet: cdktf.numberToTerraform(this._engineConfigMysqlMaxAllowedPacket),
      engine_config_mysql_max_heap_table_size: cdktf.numberToTerraform(this._engineConfigMysqlMaxHeapTableSize),
      engine_config_mysql_net_buffer_length: cdktf.numberToTerraform(this._engineConfigMysqlNetBufferLength),
      engine_config_mysql_net_read_timeout: cdktf.numberToTerraform(this._engineConfigMysqlNetReadTimeout),
      engine_config_mysql_net_write_timeout: cdktf.numberToTerraform(this._engineConfigMysqlNetWriteTimeout),
      engine_config_mysql_sort_buffer_size: cdktf.numberToTerraform(this._engineConfigMysqlSortBufferSize),
      engine_config_mysql_sql_mode: cdktf.stringToTerraform(this._engineConfigMysqlSqlMode),
      engine_config_mysql_sql_require_primary_key: cdktf.booleanToTerraform(this._engineConfigMysqlSqlRequirePrimaryKey),
      engine_config_mysql_tmp_table_size: cdktf.numberToTerraform(this._engineConfigMysqlTmpTableSize),
      engine_config_mysql_wait_timeout: cdktf.numberToTerraform(this._engineConfigMysqlWaitTimeout),
      engine_id: cdktf.stringToTerraform(this._engineId),
      fork_restore_time: cdktf.stringToTerraform(this._forkRestoreTime),
      fork_source: cdktf.numberToTerraform(this._forkSource),
      label: cdktf.stringToTerraform(this._label),
      private_network: databaseMysqlV2PrivateNetworkToTerraform(this._privateNetwork.internalValue),
      region: cdktf.stringToTerraform(this._region),
      suspended: cdktf.booleanToTerraform(this._suspended),
      type: cdktf.stringToTerraform(this._type),
      updates: databaseMysqlV2UpdatesToTerraform(this._updates.internalValue),
      timeouts: databaseMysqlV2TimeoutsToTerraform(this._timeouts.internalValue),
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
      engine_config_binlog_retention_period: {
        value: cdktf.numberToHclTerraform(this._engineConfigBinlogRetentionPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      engine_config_mysql_connect_timeout: {
        value: cdktf.numberToHclTerraform(this._engineConfigMysqlConnectTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      engine_config_mysql_default_time_zone: {
        value: cdktf.stringToHclTerraform(this._engineConfigMysqlDefaultTimeZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      engine_config_mysql_group_concat_max_len: {
        value: cdktf.numberToHclTerraform(this._engineConfigMysqlGroupConcatMaxLen),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      engine_config_mysql_information_schema_stats_expiry: {
        value: cdktf.numberToHclTerraform(this._engineConfigMysqlInformationSchemaStatsExpiry),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      engine_config_mysql_innodb_change_buffer_max_size: {
        value: cdktf.numberToHclTerraform(this._engineConfigMysqlInnodbChangeBufferMaxSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      engine_config_mysql_innodb_flush_neighbors: {
        value: cdktf.numberToHclTerraform(this._engineConfigMysqlInnodbFlushNeighbors),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      engine_config_mysql_innodb_ft_min_token_size: {
        value: cdktf.numberToHclTerraform(this._engineConfigMysqlInnodbFtMinTokenSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      engine_config_mysql_innodb_ft_server_stopword_table: {
        value: cdktf.stringToHclTerraform(this._engineConfigMysqlInnodbFtServerStopwordTable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      engine_config_mysql_innodb_lock_wait_timeout: {
        value: cdktf.numberToHclTerraform(this._engineConfigMysqlInnodbLockWaitTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      engine_config_mysql_innodb_log_buffer_size: {
        value: cdktf.numberToHclTerraform(this._engineConfigMysqlInnodbLogBufferSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      engine_config_mysql_innodb_online_alter_log_max_size: {
        value: cdktf.numberToHclTerraform(this._engineConfigMysqlInnodbOnlineAlterLogMaxSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      engine_config_mysql_innodb_read_io_threads: {
        value: cdktf.numberToHclTerraform(this._engineConfigMysqlInnodbReadIoThreads),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      engine_config_mysql_innodb_rollback_on_timeout: {
        value: cdktf.booleanToHclTerraform(this._engineConfigMysqlInnodbRollbackOnTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      engine_config_mysql_innodb_thread_concurrency: {
        value: cdktf.numberToHclTerraform(this._engineConfigMysqlInnodbThreadConcurrency),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      engine_config_mysql_innodb_write_io_threads: {
        value: cdktf.numberToHclTerraform(this._engineConfigMysqlInnodbWriteIoThreads),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      engine_config_mysql_interactive_timeout: {
        value: cdktf.numberToHclTerraform(this._engineConfigMysqlInteractiveTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      engine_config_mysql_internal_tmp_mem_storage_engine: {
        value: cdktf.stringToHclTerraform(this._engineConfigMysqlInternalTmpMemStorageEngine),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      engine_config_mysql_max_allowed_packet: {
        value: cdktf.numberToHclTerraform(this._engineConfigMysqlMaxAllowedPacket),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      engine_config_mysql_max_heap_table_size: {
        value: cdktf.numberToHclTerraform(this._engineConfigMysqlMaxHeapTableSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      engine_config_mysql_net_buffer_length: {
        value: cdktf.numberToHclTerraform(this._engineConfigMysqlNetBufferLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      engine_config_mysql_net_read_timeout: {
        value: cdktf.numberToHclTerraform(this._engineConfigMysqlNetReadTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      engine_config_mysql_net_write_timeout: {
        value: cdktf.numberToHclTerraform(this._engineConfigMysqlNetWriteTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      engine_config_mysql_sort_buffer_size: {
        value: cdktf.numberToHclTerraform(this._engineConfigMysqlSortBufferSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      engine_config_mysql_sql_mode: {
        value: cdktf.stringToHclTerraform(this._engineConfigMysqlSqlMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      engine_config_mysql_sql_require_primary_key: {
        value: cdktf.booleanToHclTerraform(this._engineConfigMysqlSqlRequirePrimaryKey),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      engine_config_mysql_tmp_table_size: {
        value: cdktf.numberToHclTerraform(this._engineConfigMysqlTmpTableSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      engine_config_mysql_wait_timeout: {
        value: cdktf.numberToHclTerraform(this._engineConfigMysqlWaitTimeout),
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
        value: databaseMysqlV2PrivateNetworkToHclTerraform(this._privateNetwork.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DatabaseMysqlV2PrivateNetwork",
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
        value: databaseMysqlV2UpdatesToHclTerraform(this._updates.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DatabaseMysqlV2Updates",
      },
      timeouts: {
        value: databaseMysqlV2TimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DatabaseMysqlV2Timeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
