// https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/mdb_redis_cluster_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MdbRedisClusterV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Access policy to the Redis cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/mdb_redis_cluster_v2#access MdbRedisClusterV2#access}
  */
  readonly access?: MdbRedisClusterV2Access;
  /**
  * Announce fqdn instead of ip address. Can be either true or false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/mdb_redis_cluster_v2#announce_hostnames MdbRedisClusterV2#announce_hostnames}
  */
  readonly announceHostnames?: boolean | cdktf.IResolvable;
  /**
  * Allows to use ACL users to auth in sentinel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/mdb_redis_cluster_v2#auth_sentinel MdbRedisClusterV2#auth_sentinel}
  */
  readonly authSentinel?: boolean | cdktf.IResolvable;
  /**
  * Configuration of the Redis cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/mdb_redis_cluster_v2#config MdbRedisClusterV2#config}
  */
  readonly config: MdbRedisClusterV2ConfigA;
  /**
  * The `true` value means that resource is protected from accidental deletion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/mdb_redis_cluster_v2#deletion_protection MdbRedisClusterV2#deletion_protection}
  */
  readonly deletionProtection?: boolean | cdktf.IResolvable;
  /**
  * The resource description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/mdb_redis_cluster_v2#description MdbRedisClusterV2#description}
  */
  readonly description?: string;
  /**
  * ID of the symmetric encryption key used to encrypt the disk of the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/mdb_redis_cluster_v2#disk_encryption_key_id MdbRedisClusterV2#disk_encryption_key_id}
  */
  readonly diskEncryptionKeyId?: string;
  /**
  * Disk size autoscaling settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/mdb_redis_cluster_v2#disk_size_autoscaling MdbRedisClusterV2#disk_size_autoscaling}
  */
  readonly diskSizeAutoscaling?: MdbRedisClusterV2DiskSizeAutoscaling;
  /**
  * Deployment environment of the Redis cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/mdb_redis_cluster_v2#environment MdbRedisClusterV2#environment}
  */
  readonly environment: string;
  /**
  * The folder identifier that resource belongs to. If it is not provided, the default provider `folder-id` is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/mdb_redis_cluster_v2#folder_id MdbRedisClusterV2#folder_id}
  */
  readonly folderId?: string;
  /**
  * A hosts of the Redis cluster as label:host_info pairs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/mdb_redis_cluster_v2#hosts MdbRedisClusterV2#hosts}
  */
  readonly hosts: { [key: string]: MdbRedisClusterV2Hosts } | cdktf.IResolvable;
  /**
  * A set of key/value label pairs which assigned to resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/mdb_redis_cluster_v2#labels MdbRedisClusterV2#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Maintenance window settings of the Redis cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/mdb_redis_cluster_v2#maintenance_window MdbRedisClusterV2#maintenance_window}
  */
  readonly maintenanceWindow?: MdbRedisClusterV2MaintenanceWindow;
  /**
  * Valkey modules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/mdb_redis_cluster_v2#modules MdbRedisClusterV2#modules}
  */
  readonly modules?: MdbRedisClusterV2Modules;
  /**
  * The resource name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/mdb_redis_cluster_v2#name MdbRedisClusterV2#name}
  */
  readonly name: string;
  /**
  * The `VPC Network ID` of subnets which resource attached to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/mdb_redis_cluster_v2#network_id MdbRedisClusterV2#network_id}
  */
  readonly networkId: string;
  /**
  * Persistence mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/mdb_redis_cluster_v2#persistence_mode MdbRedisClusterV2#persistence_mode}
  */
  readonly persistenceMode?: string;
  /**
  * Resources allocated to hosts of the Redis cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/mdb_redis_cluster_v2#resources MdbRedisClusterV2#resources}
  */
  readonly resources: MdbRedisClusterV2Resources;
  /**
  * The list of security groups applied to resource or their components.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/mdb_redis_cluster_v2#security_group_ids MdbRedisClusterV2#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * Redis sharded mode. Can be either true or false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/mdb_redis_cluster_v2#sharded MdbRedisClusterV2#sharded}
  */
  readonly sharded?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/mdb_redis_cluster_v2#timeouts MdbRedisClusterV2#timeouts}
  */
  readonly timeouts?: MdbRedisClusterV2Timeouts;
  /**
  * TLS port and functionality. Can be either true or false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/mdb_redis_cluster_v2#tls_enabled MdbRedisClusterV2#tls_enabled}
  */
  readonly tlsEnabled?: boolean | cdktf.IResolvable;
}
export interface MdbRedisClusterV2Access {
  /**
  * Allow access for Yandex DataLens. Can be either true or false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/mdb_redis_cluster_v2#data_lens MdbRedisClusterV2#data_lens}
  */
  readonly dataLens?: boolean | cdktf.IResolvable;
  /**
  * Allow access for SQL queries in the management console. Can be either true or false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/mdb_redis_cluster_v2#web_sql MdbRedisClusterV2#web_sql}
  */
  readonly webSql?: boolean | cdktf.IResolvable;
}

export function mdbRedisClusterV2AccessToTerraform(struct?: MdbRedisClusterV2Access | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_lens: cdktf.booleanToTerraform(struct!.dataLens),
    web_sql: cdktf.booleanToTerraform(struct!.webSql),
  }
}


export function mdbRedisClusterV2AccessToHclTerraform(struct?: MdbRedisClusterV2Access | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_lens: {
      value: cdktf.booleanToHclTerraform(struct!.dataLens),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    web_sql: {
      value: cdktf.booleanToHclTerraform(struct!.webSql),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MdbRedisClusterV2AccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MdbRedisClusterV2Access | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataLens !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataLens = this._dataLens;
    }
    if (this._webSql !== undefined) {
      hasAnyValues = true;
      internalValueResult.webSql = this._webSql;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MdbRedisClusterV2Access | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataLens = undefined;
      this._webSql = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataLens = value.dataLens;
      this._webSql = value.webSql;
    }
  }

  // data_lens - computed: true, optional: true, required: false
  private _dataLens?: boolean | cdktf.IResolvable; 
  public get dataLens() {
    return this.getBooleanAttribute('data_lens');
  }
  public set dataLens(value: boolean | cdktf.IResolvable) {
    this._dataLens = value;
  }
  public resetDataLens() {
    this._dataLens = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataLensInput() {
    return this._dataLens;
  }

  // web_sql - computed: true, optional: true, required: false
  private _webSql?: boolean | cdktf.IResolvable; 
  public get webSql() {
    return this.getBooleanAttribute('web_sql');
  }
  public set webSql(value: boolean | cdktf.IResolvable) {
    this._webSql = value;
  }
  public resetWebSql() {
    this._webSql = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webSqlInput() {
    return this._webSql;
  }
}
export interface MdbRedisClusterV2ConfigBackupWindowStart {
  /**
  * The hour at which backup will be started.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/mdb_redis_cluster_v2#hours MdbRedisClusterV2#hours}
  */
  readonly hours: number;
  /**
  * The minute at which backup will be started.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/mdb_redis_cluster_v2#minutes MdbRedisClusterV2#minutes}
  */
  readonly minutes: number;
}

export function mdbRedisClusterV2ConfigBackupWindowStartToTerraform(struct?: MdbRedisClusterV2ConfigBackupWindowStart | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hours: cdktf.numberToTerraform(struct!.hours),
    minutes: cdktf.numberToTerraform(struct!.minutes),
  }
}


export function mdbRedisClusterV2ConfigBackupWindowStartToHclTerraform(struct?: MdbRedisClusterV2ConfigBackupWindowStart | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hours: {
      value: cdktf.numberToHclTerraform(struct!.hours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minutes: {
      value: cdktf.numberToHclTerraform(struct!.minutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MdbRedisClusterV2ConfigBackupWindowStartOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MdbRedisClusterV2ConfigBackupWindowStart | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hours !== undefined) {
      hasAnyValues = true;
      internalValueResult.hours = this._hours;
    }
    if (this._minutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.minutes = this._minutes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MdbRedisClusterV2ConfigBackupWindowStart | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hours = undefined;
      this._minutes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hours = value.hours;
      this._minutes = value.minutes;
    }
  }

  // hours - computed: true, optional: false, required: true
  private _hours?: number; 
  public get hours() {
    return this.getNumberAttribute('hours');
  }
  public set hours(value: number) {
    this._hours = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hoursInput() {
    return this._hours;
  }

  // minutes - computed: true, optional: false, required: true
  private _minutes?: number; 
  public get minutes() {
    return this.getNumberAttribute('minutes');
  }
  public set minutes(value: number) {
    this._minutes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minutesInput() {
    return this._minutes;
  }
}
export interface MdbRedisClusterV2ConfigA {
  /**
  * Allows some data to be lost in favor of faster switchover/restart. Can be either true or false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/mdb_redis_cluster_v2#allow_data_loss MdbRedisClusterV2#allow_data_loss}
  */
  readonly allowDataLoss?: boolean | cdktf.IResolvable;
  /**
  * Retain period of automatically created backup in days.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/mdb_redis_cluster_v2#backup_retain_period_days MdbRedisClusterV2#backup_retain_period_days}
  */
  readonly backupRetainPeriodDays?: number;
  /**
  * Time to start the daily backup, in the UTC timezone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/mdb_redis_cluster_v2#backup_window_start MdbRedisClusterV2#backup_window_start}
  */
  readonly backupWindowStart?: MdbRedisClusterV2ConfigBackupWindowStart;
  /**
  * Redis connection output buffers limits for clients.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/mdb_redis_cluster_v2#client_output_buffer_limit_normal MdbRedisClusterV2#client_output_buffer_limit_normal}
  */
  readonly clientOutputBufferLimitNormal?: string;
  /**
  * Redis connection output buffers limits for pubsub operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/mdb_redis_cluster_v2#client_output_buffer_limit_pubsub MdbRedisClusterV2#client_output_buffer_limit_pubsub}
  */
  readonly clientOutputBufferLimitPubsub?: string;
  /**
  * Permits Pub/Sub shard operations when cluster is down. Can be either true or false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/mdb_redis_cluster_v2#cluster_allow_pubsubshard_when_down MdbRedisClusterV2#cluster_allow_pubsubshard_when_down}
  */
  readonly clusterAllowPubsubshardWhenDown?: boolean | cdktf.IResolvable;
  /**
  * Allows read operations when cluster is down. Can be either true or false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/mdb_redis_cluster_v2#cluster_allow_reads_when_down MdbRedisClusterV2#cluster_allow_reads_when_down}
  */
  readonly clusterAllowReadsWhenDown?: boolean | cdktf.IResolvable;
  /**
  * Controls whether all hash slots must be covered by nodes. Can be either true or false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/mdb_redis_cluster_v2#cluster_require_full_coverage MdbRedisClusterV2#cluster_require_full_coverage}
  */
  readonly clusterRequireFullCoverage?: boolean | cdktf.IResolvable;
  /**
  * Number of database buckets on a single redis-server process.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/mdb_redis_cluster_v2#databases MdbRedisClusterV2#databases}
  */
  readonly databases?: number;
  /**
  * Allow redis to use io-threads. Can be either true or false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/mdb_redis_cluster_v2#io_threads_allowed MdbRedisClusterV2#io_threads_allowed}
  */
  readonly ioThreadsAllowed?: boolean | cdktf.IResolvable;
  /**
  * The time, in minutes, that must elapse in order for the key counter to be divided by two (or decremented if it has a value less <= 10).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/mdb_redis_cluster_v2#lfu_decay_time MdbRedisClusterV2#lfu_decay_time}
  */
  readonly lfuDecayTime?: number;
  /**
  * Determines how the frequency counter represents key hits.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/mdb_redis_cluster_v2#lfu_log_factor MdbRedisClusterV2#lfu_log_factor}
  */
  readonly lfuLogFactor?: number;
  /**
  * Maximum time in milliseconds for Lua scripts, 0 - disabled mechanism.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/mdb_redis_cluster_v2#lua_time_limit MdbRedisClusterV2#lua_time_limit}
  */
  readonly luaTimeLimit?: number;
  /**
  * Redis maxmemory percent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/mdb_redis_cluster_v2#maxmemory_percent MdbRedisClusterV2#maxmemory_percent}
  */
  readonly maxmemoryPercent?: number;
  /**
  * Redis key eviction policy for a dataset that reaches maximum memory, available to the host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/mdb_redis_cluster_v2#maxmemory_policy MdbRedisClusterV2#maxmemory_policy}
  */
  readonly maxmemoryPolicy?: string;
  /**
  * String setting for pub\sub functionality.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/mdb_redis_cluster_v2#notify_keyspace_events MdbRedisClusterV2#notify_keyspace_events}
  */
  readonly notifyKeyspaceEvents?: string;
  /**
  * Authentication password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/mdb_redis_cluster_v2#password MdbRedisClusterV2#password}
  */
  readonly password: string;
  /**
  * Replication backlog size as a percentage of flavor maxmemory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/mdb_redis_cluster_v2#repl_backlog_size_percent MdbRedisClusterV2#repl_backlog_size_percent}
  */
  readonly replBacklogSizePercent?: number;
  /**
  * Threshold for logging slow requests to server in microseconds (log only slower than it).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/mdb_redis_cluster_v2#slowlog_log_slower_than MdbRedisClusterV2#slowlog_log_slower_than}
  */
  readonly slowlogLogSlowerThan?: number;
  /**
  * Max slow requests number to log.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/mdb_redis_cluster_v2#slowlog_max_len MdbRedisClusterV2#slowlog_max_len}
  */
  readonly slowlogMaxLen?: number;
  /**
  * Time that Redis keeps the connection open while the client is idle.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/mdb_redis_cluster_v2#timeout MdbRedisClusterV2#timeout}
  */
  readonly timeout?: number;
  /**
  * Allows to turn before switchover in RDSync. Can be either true or false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/mdb_redis_cluster_v2#turn_before_switchover MdbRedisClusterV2#turn_before_switchover}
  */
  readonly turnBeforeSwitchover?: boolean | cdktf.IResolvable;
  /**
  * Use JIT for lua scripts and functions. Can be either true or false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/mdb_redis_cluster_v2#use_luajit MdbRedisClusterV2#use_luajit}
  */
  readonly useLuajit?: boolean | cdktf.IResolvable;
  /**
  * Redis version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/mdb_redis_cluster_v2#version MdbRedisClusterV2#version}
  */
  readonly version: string;
  /**
  * Controls max number of entries in zset before conversion from memory-efficient listpack to CPU-efficient hash table and skiplist
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/mdb_redis_cluster_v2#zset_max_listpack_entries MdbRedisClusterV2#zset_max_listpack_entries}
  */
  readonly zsetMaxListpackEntries?: number;
}

export function mdbRedisClusterV2ConfigAToTerraform(struct?: MdbRedisClusterV2ConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_data_loss: cdktf.booleanToTerraform(struct!.allowDataLoss),
    backup_retain_period_days: cdktf.numberToTerraform(struct!.backupRetainPeriodDays),
    backup_window_start: mdbRedisClusterV2ConfigBackupWindowStartToTerraform(struct!.backupWindowStart),
    client_output_buffer_limit_normal: cdktf.stringToTerraform(struct!.clientOutputBufferLimitNormal),
    client_output_buffer_limit_pubsub: cdktf.stringToTerraform(struct!.clientOutputBufferLimitPubsub),
    cluster_allow_pubsubshard_when_down: cdktf.booleanToTerraform(struct!.clusterAllowPubsubshardWhenDown),
    cluster_allow_reads_when_down: cdktf.booleanToTerraform(struct!.clusterAllowReadsWhenDown),
    cluster_require_full_coverage: cdktf.booleanToTerraform(struct!.clusterRequireFullCoverage),
    databases: cdktf.numberToTerraform(struct!.databases),
    io_threads_allowed: cdktf.booleanToTerraform(struct!.ioThreadsAllowed),
    lfu_decay_time: cdktf.numberToTerraform(struct!.lfuDecayTime),
    lfu_log_factor: cdktf.numberToTerraform(struct!.lfuLogFactor),
    lua_time_limit: cdktf.numberToTerraform(struct!.luaTimeLimit),
    maxmemory_percent: cdktf.numberToTerraform(struct!.maxmemoryPercent),
    maxmemory_policy: cdktf.stringToTerraform(struct!.maxmemoryPolicy),
    notify_keyspace_events: cdktf.stringToTerraform(struct!.notifyKeyspaceEvents),
    password: cdktf.stringToTerraform(struct!.password),
    repl_backlog_size_percent: cdktf.numberToTerraform(struct!.replBacklogSizePercent),
    slowlog_log_slower_than: cdktf.numberToTerraform(struct!.slowlogLogSlowerThan),
    slowlog_max_len: cdktf.numberToTerraform(struct!.slowlogMaxLen),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    turn_before_switchover: cdktf.booleanToTerraform(struct!.turnBeforeSwitchover),
    use_luajit: cdktf.booleanToTerraform(struct!.useLuajit),
    version: cdktf.stringToTerraform(struct!.version),
    zset_max_listpack_entries: cdktf.numberToTerraform(struct!.zsetMaxListpackEntries),
  }
}


export function mdbRedisClusterV2ConfigAToHclTerraform(struct?: MdbRedisClusterV2ConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_data_loss: {
      value: cdktf.booleanToHclTerraform(struct!.allowDataLoss),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    backup_retain_period_days: {
      value: cdktf.numberToHclTerraform(struct!.backupRetainPeriodDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    backup_window_start: {
      value: mdbRedisClusterV2ConfigBackupWindowStartToHclTerraform(struct!.backupWindowStart),
      isBlock: true,
      type: "struct",
      storageClassType: "MdbRedisClusterV2ConfigBackupWindowStart",
    },
    client_output_buffer_limit_normal: {
      value: cdktf.stringToHclTerraform(struct!.clientOutputBufferLimitNormal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_output_buffer_limit_pubsub: {
      value: cdktf.stringToHclTerraform(struct!.clientOutputBufferLimitPubsub),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_allow_pubsubshard_when_down: {
      value: cdktf.booleanToHclTerraform(struct!.clusterAllowPubsubshardWhenDown),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cluster_allow_reads_when_down: {
      value: cdktf.booleanToHclTerraform(struct!.clusterAllowReadsWhenDown),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cluster_require_full_coverage: {
      value: cdktf.booleanToHclTerraform(struct!.clusterRequireFullCoverage),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    databases: {
      value: cdktf.numberToHclTerraform(struct!.databases),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    io_threads_allowed: {
      value: cdktf.booleanToHclTerraform(struct!.ioThreadsAllowed),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    lfu_decay_time: {
      value: cdktf.numberToHclTerraform(struct!.lfuDecayTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lfu_log_factor: {
      value: cdktf.numberToHclTerraform(struct!.lfuLogFactor),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lua_time_limit: {
      value: cdktf.numberToHclTerraform(struct!.luaTimeLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maxmemory_percent: {
      value: cdktf.numberToHclTerraform(struct!.maxmemoryPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maxmemory_policy: {
      value: cdktf.stringToHclTerraform(struct!.maxmemoryPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    notify_keyspace_events: {
      value: cdktf.stringToHclTerraform(struct!.notifyKeyspaceEvents),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repl_backlog_size_percent: {
      value: cdktf.numberToHclTerraform(struct!.replBacklogSizePercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    slowlog_log_slower_than: {
      value: cdktf.numberToHclTerraform(struct!.slowlogLogSlowerThan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    slowlog_max_len: {
      value: cdktf.numberToHclTerraform(struct!.slowlogMaxLen),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    turn_before_switchover: {
      value: cdktf.booleanToHclTerraform(struct!.turnBeforeSwitchover),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_luajit: {
      value: cdktf.booleanToHclTerraform(struct!.useLuajit),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zset_max_listpack_entries: {
      value: cdktf.numberToHclTerraform(struct!.zsetMaxListpackEntries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MdbRedisClusterV2ConfigAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MdbRedisClusterV2ConfigA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowDataLoss !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowDataLoss = this._allowDataLoss;
    }
    if (this._backupRetainPeriodDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupRetainPeriodDays = this._backupRetainPeriodDays;
    }
    if (this._backupWindowStart?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupWindowStart = this._backupWindowStart?.internalValue;
    }
    if (this._clientOutputBufferLimitNormal !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientOutputBufferLimitNormal = this._clientOutputBufferLimitNormal;
    }
    if (this._clientOutputBufferLimitPubsub !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientOutputBufferLimitPubsub = this._clientOutputBufferLimitPubsub;
    }
    if (this._clusterAllowPubsubshardWhenDown !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterAllowPubsubshardWhenDown = this._clusterAllowPubsubshardWhenDown;
    }
    if (this._clusterAllowReadsWhenDown !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterAllowReadsWhenDown = this._clusterAllowReadsWhenDown;
    }
    if (this._clusterRequireFullCoverage !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterRequireFullCoverage = this._clusterRequireFullCoverage;
    }
    if (this._databases !== undefined) {
      hasAnyValues = true;
      internalValueResult.databases = this._databases;
    }
    if (this._ioThreadsAllowed !== undefined) {
      hasAnyValues = true;
      internalValueResult.ioThreadsAllowed = this._ioThreadsAllowed;
    }
    if (this._lfuDecayTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.lfuDecayTime = this._lfuDecayTime;
    }
    if (this._lfuLogFactor !== undefined) {
      hasAnyValues = true;
      internalValueResult.lfuLogFactor = this._lfuLogFactor;
    }
    if (this._luaTimeLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.luaTimeLimit = this._luaTimeLimit;
    }
    if (this._maxmemoryPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxmemoryPercent = this._maxmemoryPercent;
    }
    if (this._maxmemoryPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxmemoryPolicy = this._maxmemoryPolicy;
    }
    if (this._notifyKeyspaceEvents !== undefined) {
      hasAnyValues = true;
      internalValueResult.notifyKeyspaceEvents = this._notifyKeyspaceEvents;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._replBacklogSizePercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.replBacklogSizePercent = this._replBacklogSizePercent;
    }
    if (this._slowlogLogSlowerThan !== undefined) {
      hasAnyValues = true;
      internalValueResult.slowlogLogSlowerThan = this._slowlogLogSlowerThan;
    }
    if (this._slowlogMaxLen !== undefined) {
      hasAnyValues = true;
      internalValueResult.slowlogMaxLen = this._slowlogMaxLen;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._turnBeforeSwitchover !== undefined) {
      hasAnyValues = true;
      internalValueResult.turnBeforeSwitchover = this._turnBeforeSwitchover;
    }
    if (this._useLuajit !== undefined) {
      hasAnyValues = true;
      internalValueResult.useLuajit = this._useLuajit;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._zsetMaxListpackEntries !== undefined) {
      hasAnyValues = true;
      internalValueResult.zsetMaxListpackEntries = this._zsetMaxListpackEntries;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MdbRedisClusterV2ConfigA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowDataLoss = undefined;
      this._backupRetainPeriodDays = undefined;
      this._backupWindowStart.internalValue = undefined;
      this._clientOutputBufferLimitNormal = undefined;
      this._clientOutputBufferLimitPubsub = undefined;
      this._clusterAllowPubsubshardWhenDown = undefined;
      this._clusterAllowReadsWhenDown = undefined;
      this._clusterRequireFullCoverage = undefined;
      this._databases = undefined;
      this._ioThreadsAllowed = undefined;
      this._lfuDecayTime = undefined;
      this._lfuLogFactor = undefined;
      this._luaTimeLimit = undefined;
      this._maxmemoryPercent = undefined;
      this._maxmemoryPolicy = undefined;
      this._notifyKeyspaceEvents = undefined;
      this._password = undefined;
      this._replBacklogSizePercent = undefined;
      this._slowlogLogSlowerThan = undefined;
      this._slowlogMaxLen = undefined;
      this._timeout = undefined;
      this._turnBeforeSwitchover = undefined;
      this._useLuajit = undefined;
      this._version = undefined;
      this._zsetMaxListpackEntries = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowDataLoss = value.allowDataLoss;
      this._backupRetainPeriodDays = value.backupRetainPeriodDays;
      this._backupWindowStart.internalValue = value.backupWindowStart;
      this._clientOutputBufferLimitNormal = value.clientOutputBufferLimitNormal;
      this._clientOutputBufferLimitPubsub = value.clientOutputBufferLimitPubsub;
      this._clusterAllowPubsubshardWhenDown = value.clusterAllowPubsubshardWhenDown;
      this._clusterAllowReadsWhenDown = value.clusterAllowReadsWhenDown;
      this._clusterRequireFullCoverage = value.clusterRequireFullCoverage;
      this._databases = value.databases;
      this._ioThreadsAllowed = value.ioThreadsAllowed;
      this._lfuDecayTime = value.lfuDecayTime;
      this._lfuLogFactor = value.lfuLogFactor;
      this._luaTimeLimit = value.luaTimeLimit;
      this._maxmemoryPercent = value.maxmemoryPercent;
      this._maxmemoryPolicy = value.maxmemoryPolicy;
      this._notifyKeyspaceEvents = value.notifyKeyspaceEvents;
      this._password = value.password;
      this._replBacklogSizePercent = value.replBacklogSizePercent;
      this._slowlogLogSlowerThan = value.slowlogLogSlowerThan;
      this._slowlogMaxLen = value.slowlogMaxLen;
      this._timeout = value.timeout;
      this._turnBeforeSwitchover = value.turnBeforeSwitchover;
      this._useLuajit = value.useLuajit;
      this._version = value.version;
      this._zsetMaxListpackEntries = value.zsetMaxListpackEntries;
    }
  }

  // allow_data_loss - computed: true, optional: true, required: false
  private _allowDataLoss?: boolean | cdktf.IResolvable; 
  public get allowDataLoss() {
    return this.getBooleanAttribute('allow_data_loss');
  }
  public set allowDataLoss(value: boolean | cdktf.IResolvable) {
    this._allowDataLoss = value;
  }
  public resetAllowDataLoss() {
    this._allowDataLoss = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowDataLossInput() {
    return this._allowDataLoss;
  }

  // backup_retain_period_days - computed: true, optional: true, required: false
  private _backupRetainPeriodDays?: number; 
  public get backupRetainPeriodDays() {
    return this.getNumberAttribute('backup_retain_period_days');
  }
  public set backupRetainPeriodDays(value: number) {
    this._backupRetainPeriodDays = value;
  }
  public resetBackupRetainPeriodDays() {
    this._backupRetainPeriodDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupRetainPeriodDaysInput() {
    return this._backupRetainPeriodDays;
  }

  // backup_window_start - computed: true, optional: true, required: false
  private _backupWindowStart = new MdbRedisClusterV2ConfigBackupWindowStartOutputReference(this, "backup_window_start");
  public get backupWindowStart() {
    return this._backupWindowStart;
  }
  public putBackupWindowStart(value: MdbRedisClusterV2ConfigBackupWindowStart) {
    this._backupWindowStart.internalValue = value;
  }
  public resetBackupWindowStart() {
    this._backupWindowStart.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupWindowStartInput() {
    return this._backupWindowStart.internalValue;
  }

  // client_output_buffer_limit_normal - computed: true, optional: true, required: false
  private _clientOutputBufferLimitNormal?: string; 
  public get clientOutputBufferLimitNormal() {
    return this.getStringAttribute('client_output_buffer_limit_normal');
  }
  public set clientOutputBufferLimitNormal(value: string) {
    this._clientOutputBufferLimitNormal = value;
  }
  public resetClientOutputBufferLimitNormal() {
    this._clientOutputBufferLimitNormal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientOutputBufferLimitNormalInput() {
    return this._clientOutputBufferLimitNormal;
  }

  // client_output_buffer_limit_pubsub - computed: true, optional: true, required: false
  private _clientOutputBufferLimitPubsub?: string; 
  public get clientOutputBufferLimitPubsub() {
    return this.getStringAttribute('client_output_buffer_limit_pubsub');
  }
  public set clientOutputBufferLimitPubsub(value: string) {
    this._clientOutputBufferLimitPubsub = value;
  }
  public resetClientOutputBufferLimitPubsub() {
    this._clientOutputBufferLimitPubsub = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientOutputBufferLimitPubsubInput() {
    return this._clientOutputBufferLimitPubsub;
  }

  // cluster_allow_pubsubshard_when_down - computed: true, optional: true, required: false
  private _clusterAllowPubsubshardWhenDown?: boolean | cdktf.IResolvable; 
  public get clusterAllowPubsubshardWhenDown() {
    return this.getBooleanAttribute('cluster_allow_pubsubshard_when_down');
  }
  public set clusterAllowPubsubshardWhenDown(value: boolean | cdktf.IResolvable) {
    this._clusterAllowPubsubshardWhenDown = value;
  }
  public resetClusterAllowPubsubshardWhenDown() {
    this._clusterAllowPubsubshardWhenDown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterAllowPubsubshardWhenDownInput() {
    return this._clusterAllowPubsubshardWhenDown;
  }

  // cluster_allow_reads_when_down - computed: true, optional: true, required: false
  private _clusterAllowReadsWhenDown?: boolean | cdktf.IResolvable; 
  public get clusterAllowReadsWhenDown() {
    return this.getBooleanAttribute('cluster_allow_reads_when_down');
  }
  public set clusterAllowReadsWhenDown(value: boolean | cdktf.IResolvable) {
    this._clusterAllowReadsWhenDown = value;
  }
  public resetClusterAllowReadsWhenDown() {
    this._clusterAllowReadsWhenDown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterAllowReadsWhenDownInput() {
    return this._clusterAllowReadsWhenDown;
  }

  // cluster_require_full_coverage - computed: true, optional: true, required: false
  private _clusterRequireFullCoverage?: boolean | cdktf.IResolvable; 
  public get clusterRequireFullCoverage() {
    return this.getBooleanAttribute('cluster_require_full_coverage');
  }
  public set clusterRequireFullCoverage(value: boolean | cdktf.IResolvable) {
    this._clusterRequireFullCoverage = value;
  }
  public resetClusterRequireFullCoverage() {
    this._clusterRequireFullCoverage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterRequireFullCoverageInput() {
    return this._clusterRequireFullCoverage;
  }

  // databases - computed: true, optional: true, required: false
  private _databases?: number; 
  public get databases() {
    return this.getNumberAttribute('databases');
  }
  public set databases(value: number) {
    this._databases = value;
  }
  public resetDatabases() {
    this._databases = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databasesInput() {
    return this._databases;
  }

  // io_threads_allowed - computed: true, optional: true, required: false
  private _ioThreadsAllowed?: boolean | cdktf.IResolvable; 
  public get ioThreadsAllowed() {
    return this.getBooleanAttribute('io_threads_allowed');
  }
  public set ioThreadsAllowed(value: boolean | cdktf.IResolvable) {
    this._ioThreadsAllowed = value;
  }
  public resetIoThreadsAllowed() {
    this._ioThreadsAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ioThreadsAllowedInput() {
    return this._ioThreadsAllowed;
  }

  // lfu_decay_time - computed: true, optional: true, required: false
  private _lfuDecayTime?: number; 
  public get lfuDecayTime() {
    return this.getNumberAttribute('lfu_decay_time');
  }
  public set lfuDecayTime(value: number) {
    this._lfuDecayTime = value;
  }
  public resetLfuDecayTime() {
    this._lfuDecayTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lfuDecayTimeInput() {
    return this._lfuDecayTime;
  }

  // lfu_log_factor - computed: true, optional: true, required: false
  private _lfuLogFactor?: number; 
  public get lfuLogFactor() {
    return this.getNumberAttribute('lfu_log_factor');
  }
  public set lfuLogFactor(value: number) {
    this._lfuLogFactor = value;
  }
  public resetLfuLogFactor() {
    this._lfuLogFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lfuLogFactorInput() {
    return this._lfuLogFactor;
  }

  // lua_time_limit - computed: true, optional: true, required: false
  private _luaTimeLimit?: number; 
  public get luaTimeLimit() {
    return this.getNumberAttribute('lua_time_limit');
  }
  public set luaTimeLimit(value: number) {
    this._luaTimeLimit = value;
  }
  public resetLuaTimeLimit() {
    this._luaTimeLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get luaTimeLimitInput() {
    return this._luaTimeLimit;
  }

  // maxmemory_percent - computed: true, optional: true, required: false
  private _maxmemoryPercent?: number; 
  public get maxmemoryPercent() {
    return this.getNumberAttribute('maxmemory_percent');
  }
  public set maxmemoryPercent(value: number) {
    this._maxmemoryPercent = value;
  }
  public resetMaxmemoryPercent() {
    this._maxmemoryPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxmemoryPercentInput() {
    return this._maxmemoryPercent;
  }

  // maxmemory_policy - computed: true, optional: true, required: false
  private _maxmemoryPolicy?: string; 
  public get maxmemoryPolicy() {
    return this.getStringAttribute('maxmemory_policy');
  }
  public set maxmemoryPolicy(value: string) {
    this._maxmemoryPolicy = value;
  }
  public resetMaxmemoryPolicy() {
    this._maxmemoryPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxmemoryPolicyInput() {
    return this._maxmemoryPolicy;
  }

  // notify_keyspace_events - computed: true, optional: true, required: false
  private _notifyKeyspaceEvents?: string; 
  public get notifyKeyspaceEvents() {
    return this.getStringAttribute('notify_keyspace_events');
  }
  public set notifyKeyspaceEvents(value: string) {
    this._notifyKeyspaceEvents = value;
  }
  public resetNotifyKeyspaceEvents() {
    this._notifyKeyspaceEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyKeyspaceEventsInput() {
    return this._notifyKeyspaceEvents;
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // repl_backlog_size_percent - computed: true, optional: true, required: false
  private _replBacklogSizePercent?: number; 
  public get replBacklogSizePercent() {
    return this.getNumberAttribute('repl_backlog_size_percent');
  }
  public set replBacklogSizePercent(value: number) {
    this._replBacklogSizePercent = value;
  }
  public resetReplBacklogSizePercent() {
    this._replBacklogSizePercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replBacklogSizePercentInput() {
    return this._replBacklogSizePercent;
  }

  // slowlog_log_slower_than - computed: true, optional: true, required: false
  private _slowlogLogSlowerThan?: number; 
  public get slowlogLogSlowerThan() {
    return this.getNumberAttribute('slowlog_log_slower_than');
  }
  public set slowlogLogSlowerThan(value: number) {
    this._slowlogLogSlowerThan = value;
  }
  public resetSlowlogLogSlowerThan() {
    this._slowlogLogSlowerThan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slowlogLogSlowerThanInput() {
    return this._slowlogLogSlowerThan;
  }

  // slowlog_max_len - computed: true, optional: true, required: false
  private _slowlogMaxLen?: number; 
  public get slowlogMaxLen() {
    return this.getNumberAttribute('slowlog_max_len');
  }
  public set slowlogMaxLen(value: number) {
    this._slowlogMaxLen = value;
  }
  public resetSlowlogMaxLen() {
    this._slowlogMaxLen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slowlogMaxLenInput() {
    return this._slowlogMaxLen;
  }

  // timeout - computed: true, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // turn_before_switchover - computed: true, optional: true, required: false
  private _turnBeforeSwitchover?: boolean | cdktf.IResolvable; 
  public get turnBeforeSwitchover() {
    return this.getBooleanAttribute('turn_before_switchover');
  }
  public set turnBeforeSwitchover(value: boolean | cdktf.IResolvable) {
    this._turnBeforeSwitchover = value;
  }
  public resetTurnBeforeSwitchover() {
    this._turnBeforeSwitchover = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get turnBeforeSwitchoverInput() {
    return this._turnBeforeSwitchover;
  }

  // use_luajit - computed: true, optional: true, required: false
  private _useLuajit?: boolean | cdktf.IResolvable; 
  public get useLuajit() {
    return this.getBooleanAttribute('use_luajit');
  }
  public set useLuajit(value: boolean | cdktf.IResolvable) {
    this._useLuajit = value;
  }
  public resetUseLuajit() {
    this._useLuajit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useLuajitInput() {
    return this._useLuajit;
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // zset_max_listpack_entries - computed: true, optional: true, required: false
  private _zsetMaxListpackEntries?: number; 
  public get zsetMaxListpackEntries() {
    return this.getNumberAttribute('zset_max_listpack_entries');
  }
  public set zsetMaxListpackEntries(value: number) {
    this._zsetMaxListpackEntries = value;
  }
  public resetZsetMaxListpackEntries() {
    this._zsetMaxListpackEntries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zsetMaxListpackEntriesInput() {
    return this._zsetMaxListpackEntries;
  }
}
export interface MdbRedisClusterV2DiskSizeAutoscaling {
  /**
  * Limit of disk size after autoscaling in bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/mdb_redis_cluster_v2#disk_size_limit MdbRedisClusterV2#disk_size_limit}
  */
  readonly diskSizeLimit: number;
  /**
  * Immediate autoscaling disk usage (percent).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/mdb_redis_cluster_v2#emergency_usage_threshold MdbRedisClusterV2#emergency_usage_threshold}
  */
  readonly emergencyUsageThreshold?: number;
  /**
  * Maintenance window autoscaling disk usage (percent).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/mdb_redis_cluster_v2#planned_usage_threshold MdbRedisClusterV2#planned_usage_threshold}
  */
  readonly plannedUsageThreshold?: number;
}

export function mdbRedisClusterV2DiskSizeAutoscalingToTerraform(struct?: MdbRedisClusterV2DiskSizeAutoscaling | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_size_limit: cdktf.numberToTerraform(struct!.diskSizeLimit),
    emergency_usage_threshold: cdktf.numberToTerraform(struct!.emergencyUsageThreshold),
    planned_usage_threshold: cdktf.numberToTerraform(struct!.plannedUsageThreshold),
  }
}


export function mdbRedisClusterV2DiskSizeAutoscalingToHclTerraform(struct?: MdbRedisClusterV2DiskSizeAutoscaling | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk_size_limit: {
      value: cdktf.numberToHclTerraform(struct!.diskSizeLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    emergency_usage_threshold: {
      value: cdktf.numberToHclTerraform(struct!.emergencyUsageThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    planned_usage_threshold: {
      value: cdktf.numberToHclTerraform(struct!.plannedUsageThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MdbRedisClusterV2DiskSizeAutoscalingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MdbRedisClusterV2DiskSizeAutoscaling | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diskSizeLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSizeLimit = this._diskSizeLimit;
    }
    if (this._emergencyUsageThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.emergencyUsageThreshold = this._emergencyUsageThreshold;
    }
    if (this._plannedUsageThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.plannedUsageThreshold = this._plannedUsageThreshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MdbRedisClusterV2DiskSizeAutoscaling | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._diskSizeLimit = undefined;
      this._emergencyUsageThreshold = undefined;
      this._plannedUsageThreshold = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._diskSizeLimit = value.diskSizeLimit;
      this._emergencyUsageThreshold = value.emergencyUsageThreshold;
      this._plannedUsageThreshold = value.plannedUsageThreshold;
    }
  }

  // disk_size_limit - computed: true, optional: false, required: true
  private _diskSizeLimit?: number; 
  public get diskSizeLimit() {
    return this.getNumberAttribute('disk_size_limit');
  }
  public set diskSizeLimit(value: number) {
    this._diskSizeLimit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeLimitInput() {
    return this._diskSizeLimit;
  }

  // emergency_usage_threshold - computed: true, optional: true, required: false
  private _emergencyUsageThreshold?: number; 
  public get emergencyUsageThreshold() {
    return this.getNumberAttribute('emergency_usage_threshold');
  }
  public set emergencyUsageThreshold(value: number) {
    this._emergencyUsageThreshold = value;
  }
  public resetEmergencyUsageThreshold() {
    this._emergencyUsageThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emergencyUsageThresholdInput() {
    return this._emergencyUsageThreshold;
  }

  // planned_usage_threshold - computed: true, optional: true, required: false
  private _plannedUsageThreshold?: number; 
  public get plannedUsageThreshold() {
    return this.getNumberAttribute('planned_usage_threshold');
  }
  public set plannedUsageThreshold(value: number) {
    this._plannedUsageThreshold = value;
  }
  public resetPlannedUsageThreshold() {
    this._plannedUsageThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get plannedUsageThresholdInput() {
    return this._plannedUsageThreshold;
  }
}
export interface MdbRedisClusterV2Hosts {
  /**
  * Assign a public IP address to the host. Can be either true or false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/mdb_redis_cluster_v2#assign_public_ip MdbRedisClusterV2#assign_public_ip}
  */
  readonly assignPublicIp?: boolean | cdktf.IResolvable;
  /**
  * A replica with a low priority number is considered better for promotion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/mdb_redis_cluster_v2#replica_priority MdbRedisClusterV2#replica_priority}
  */
  readonly replicaPriority?: number;
  /**
  * Shard Name of the host in the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/mdb_redis_cluster_v2#shard_name MdbRedisClusterV2#shard_name}
  */
  readonly shardName?: string;
  /**
  * ID of the subnet where the host is located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/mdb_redis_cluster_v2#subnet_id MdbRedisClusterV2#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * The [availability zone](https://yandex.cloud/docs/overview/concepts/geo-scope) where resource is located. If it is not provided, the default provider zone will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/mdb_redis_cluster_v2#zone MdbRedisClusterV2#zone}
  */
  readonly zone: string;
}

export function mdbRedisClusterV2HostsToTerraform(struct?: MdbRedisClusterV2Hosts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    assign_public_ip: cdktf.booleanToTerraform(struct!.assignPublicIp),
    replica_priority: cdktf.numberToTerraform(struct!.replicaPriority),
    shard_name: cdktf.stringToTerraform(struct!.shardName),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    zone: cdktf.stringToTerraform(struct!.zone),
  }
}


export function mdbRedisClusterV2HostsToHclTerraform(struct?: MdbRedisClusterV2Hosts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    assign_public_ip: {
      value: cdktf.booleanToHclTerraform(struct!.assignPublicIp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    replica_priority: {
      value: cdktf.numberToHclTerraform(struct!.replicaPriority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    shard_name: {
      value: cdktf.stringToHclTerraform(struct!.shardName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zone: {
      value: cdktf.stringToHclTerraform(struct!.zone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MdbRedisClusterV2HostsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): MdbRedisClusterV2Hosts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._assignPublicIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignPublicIp = this._assignPublicIp;
    }
    if (this._replicaPriority !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicaPriority = this._replicaPriority;
    }
    if (this._shardName !== undefined) {
      hasAnyValues = true;
      internalValueResult.shardName = this._shardName;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._zone !== undefined) {
      hasAnyValues = true;
      internalValueResult.zone = this._zone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MdbRedisClusterV2Hosts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._assignPublicIp = undefined;
      this._replicaPriority = undefined;
      this._shardName = undefined;
      this._subnetId = undefined;
      this._zone = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._assignPublicIp = value.assignPublicIp;
      this._replicaPriority = value.replicaPriority;
      this._shardName = value.shardName;
      this._subnetId = value.subnetId;
      this._zone = value.zone;
    }
  }

  // assign_public_ip - computed: true, optional: true, required: false
  private _assignPublicIp?: boolean | cdktf.IResolvable; 
  public get assignPublicIp() {
    return this.getBooleanAttribute('assign_public_ip');
  }
  public set assignPublicIp(value: boolean | cdktf.IResolvable) {
    this._assignPublicIp = value;
  }
  public resetAssignPublicIp() {
    this._assignPublicIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignPublicIpInput() {
    return this._assignPublicIp;
  }

  // fqdn - computed: true, optional: false, required: false
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }

  // replica_priority - computed: true, optional: true, required: false
  private _replicaPriority?: number; 
  public get replicaPriority() {
    return this.getNumberAttribute('replica_priority');
  }
  public set replicaPriority(value: number) {
    this._replicaPriority = value;
  }
  public resetReplicaPriority() {
    this._replicaPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicaPriorityInput() {
    return this._replicaPriority;
  }

  // shard_name - computed: true, optional: true, required: false
  private _shardName?: string; 
  public get shardName() {
    return this.getStringAttribute('shard_name');
  }
  public set shardName(value: string) {
    this._shardName = value;
  }
  public resetShardName() {
    this._shardName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shardNameInput() {
    return this._shardName;
  }

  // subnet_id - computed: true, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // zone - computed: false, optional: false, required: true
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }
}

export class MdbRedisClusterV2HostsMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: MdbRedisClusterV2Hosts } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): MdbRedisClusterV2HostsOutputReference {
    return new MdbRedisClusterV2HostsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface MdbRedisClusterV2MaintenanceWindow {
  /**
  * Day of week for maintenance window if window type is weekly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/mdb_redis_cluster_v2#day MdbRedisClusterV2#day}
  */
  readonly day?: string;
  /**
  * Hour of day in UTC time zone (1-24) for maintenance window if window type is weekly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/mdb_redis_cluster_v2#hour MdbRedisClusterV2#hour}
  */
  readonly hour?: number;
  /**
  * Type of maintenance window.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/mdb_redis_cluster_v2#type MdbRedisClusterV2#type}
  */
  readonly type: string;
}

export function mdbRedisClusterV2MaintenanceWindowToTerraform(struct?: MdbRedisClusterV2MaintenanceWindow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day: cdktf.stringToTerraform(struct!.day),
    hour: cdktf.numberToTerraform(struct!.hour),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function mdbRedisClusterV2MaintenanceWindowToHclTerraform(struct?: MdbRedisClusterV2MaintenanceWindow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    day: {
      value: cdktf.stringToHclTerraform(struct!.day),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hour: {
      value: cdktf.numberToHclTerraform(struct!.hour),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MdbRedisClusterV2MaintenanceWindowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MdbRedisClusterV2MaintenanceWindow | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._day !== undefined) {
      hasAnyValues = true;
      internalValueResult.day = this._day;
    }
    if (this._hour !== undefined) {
      hasAnyValues = true;
      internalValueResult.hour = this._hour;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MdbRedisClusterV2MaintenanceWindow | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._day = undefined;
      this._hour = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._day = value.day;
      this._hour = value.hour;
      this._type = value.type;
    }
  }

  // day - computed: true, optional: true, required: false
  private _day?: string; 
  public get day() {
    return this.getStringAttribute('day');
  }
  public set day(value: string) {
    this._day = value;
  }
  public resetDay() {
    this._day = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayInput() {
    return this._day;
  }

  // hour - computed: true, optional: true, required: false
  private _hour?: number; 
  public get hour() {
    return this.getNumberAttribute('hour');
  }
  public set hour(value: number) {
    this._hour = value;
  }
  public resetHour() {
    this._hour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hourInput() {
    return this._hour;
  }

  // type - computed: true, optional: false, required: true
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
}
export interface MdbRedisClusterV2ModulesValkeyBloom {
  /**
  * Enable Valkey bloom module.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/mdb_redis_cluster_v2#enabled MdbRedisClusterV2#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function mdbRedisClusterV2ModulesValkeyBloomToTerraform(struct?: MdbRedisClusterV2ModulesValkeyBloom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function mdbRedisClusterV2ModulesValkeyBloomToHclTerraform(struct?: MdbRedisClusterV2ModulesValkeyBloom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MdbRedisClusterV2ModulesValkeyBloomOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MdbRedisClusterV2ModulesValkeyBloom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MdbRedisClusterV2ModulesValkeyBloom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
    }
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
}
export interface MdbRedisClusterV2ModulesValkeyJson {
  /**
  * Enable Valkey json module.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/mdb_redis_cluster_v2#enabled MdbRedisClusterV2#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function mdbRedisClusterV2ModulesValkeyJsonToTerraform(struct?: MdbRedisClusterV2ModulesValkeyJson | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function mdbRedisClusterV2ModulesValkeyJsonToHclTerraform(struct?: MdbRedisClusterV2ModulesValkeyJson | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MdbRedisClusterV2ModulesValkeyJsonOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MdbRedisClusterV2ModulesValkeyJson | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MdbRedisClusterV2ModulesValkeyJson | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
    }
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
}
export interface MdbRedisClusterV2ModulesValkeySearch {
  /**
  * Enable Valkey search module.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/mdb_redis_cluster_v2#enabled MdbRedisClusterV2#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Number of reader threads.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/mdb_redis_cluster_v2#reader_threads MdbRedisClusterV2#reader_threads}
  */
  readonly readerThreads?: number;
  /**
  * Number of writer threads.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/mdb_redis_cluster_v2#writer_threads MdbRedisClusterV2#writer_threads}
  */
  readonly writerThreads?: number;
}

export function mdbRedisClusterV2ModulesValkeySearchToTerraform(struct?: MdbRedisClusterV2ModulesValkeySearch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    reader_threads: cdktf.numberToTerraform(struct!.readerThreads),
    writer_threads: cdktf.numberToTerraform(struct!.writerThreads),
  }
}


export function mdbRedisClusterV2ModulesValkeySearchToHclTerraform(struct?: MdbRedisClusterV2ModulesValkeySearch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    reader_threads: {
      value: cdktf.numberToHclTerraform(struct!.readerThreads),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    writer_threads: {
      value: cdktf.numberToHclTerraform(struct!.writerThreads),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MdbRedisClusterV2ModulesValkeySearchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MdbRedisClusterV2ModulesValkeySearch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._readerThreads !== undefined) {
      hasAnyValues = true;
      internalValueResult.readerThreads = this._readerThreads;
    }
    if (this._writerThreads !== undefined) {
      hasAnyValues = true;
      internalValueResult.writerThreads = this._writerThreads;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MdbRedisClusterV2ModulesValkeySearch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._readerThreads = undefined;
      this._writerThreads = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._readerThreads = value.readerThreads;
      this._writerThreads = value.writerThreads;
    }
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

  // reader_threads - computed: true, optional: true, required: false
  private _readerThreads?: number; 
  public get readerThreads() {
    return this.getNumberAttribute('reader_threads');
  }
  public set readerThreads(value: number) {
    this._readerThreads = value;
  }
  public resetReaderThreads() {
    this._readerThreads = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readerThreadsInput() {
    return this._readerThreads;
  }

  // writer_threads - computed: true, optional: true, required: false
  private _writerThreads?: number; 
  public get writerThreads() {
    return this.getNumberAttribute('writer_threads');
  }
  public set writerThreads(value: number) {
    this._writerThreads = value;
  }
  public resetWriterThreads() {
    this._writerThreads = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writerThreadsInput() {
    return this._writerThreads;
  }
}
export interface MdbRedisClusterV2Modules {
  /**
  * Valkey bloom module settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/mdb_redis_cluster_v2#valkey_bloom MdbRedisClusterV2#valkey_bloom}
  */
  readonly valkeyBloom?: MdbRedisClusterV2ModulesValkeyBloom;
  /**
  * Valkey json module settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/mdb_redis_cluster_v2#valkey_json MdbRedisClusterV2#valkey_json}
  */
  readonly valkeyJson?: MdbRedisClusterV2ModulesValkeyJson;
  /**
  * Valkey search module settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/mdb_redis_cluster_v2#valkey_search MdbRedisClusterV2#valkey_search}
  */
  readonly valkeySearch?: MdbRedisClusterV2ModulesValkeySearch;
}

export function mdbRedisClusterV2ModulesToTerraform(struct?: MdbRedisClusterV2Modules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    valkey_bloom: mdbRedisClusterV2ModulesValkeyBloomToTerraform(struct!.valkeyBloom),
    valkey_json: mdbRedisClusterV2ModulesValkeyJsonToTerraform(struct!.valkeyJson),
    valkey_search: mdbRedisClusterV2ModulesValkeySearchToTerraform(struct!.valkeySearch),
  }
}


export function mdbRedisClusterV2ModulesToHclTerraform(struct?: MdbRedisClusterV2Modules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    valkey_bloom: {
      value: mdbRedisClusterV2ModulesValkeyBloomToHclTerraform(struct!.valkeyBloom),
      isBlock: true,
      type: "struct",
      storageClassType: "MdbRedisClusterV2ModulesValkeyBloom",
    },
    valkey_json: {
      value: mdbRedisClusterV2ModulesValkeyJsonToHclTerraform(struct!.valkeyJson),
      isBlock: true,
      type: "struct",
      storageClassType: "MdbRedisClusterV2ModulesValkeyJson",
    },
    valkey_search: {
      value: mdbRedisClusterV2ModulesValkeySearchToHclTerraform(struct!.valkeySearch),
      isBlock: true,
      type: "struct",
      storageClassType: "MdbRedisClusterV2ModulesValkeySearch",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MdbRedisClusterV2ModulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MdbRedisClusterV2Modules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._valkeyBloom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valkeyBloom = this._valkeyBloom?.internalValue;
    }
    if (this._valkeyJson?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valkeyJson = this._valkeyJson?.internalValue;
    }
    if (this._valkeySearch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valkeySearch = this._valkeySearch?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MdbRedisClusterV2Modules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._valkeyBloom.internalValue = undefined;
      this._valkeyJson.internalValue = undefined;
      this._valkeySearch.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._valkeyBloom.internalValue = value.valkeyBloom;
      this._valkeyJson.internalValue = value.valkeyJson;
      this._valkeySearch.internalValue = value.valkeySearch;
    }
  }

  // valkey_bloom - computed: true, optional: true, required: false
  private _valkeyBloom = new MdbRedisClusterV2ModulesValkeyBloomOutputReference(this, "valkey_bloom");
  public get valkeyBloom() {
    return this._valkeyBloom;
  }
  public putValkeyBloom(value: MdbRedisClusterV2ModulesValkeyBloom) {
    this._valkeyBloom.internalValue = value;
  }
  public resetValkeyBloom() {
    this._valkeyBloom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valkeyBloomInput() {
    return this._valkeyBloom.internalValue;
  }

  // valkey_json - computed: true, optional: true, required: false
  private _valkeyJson = new MdbRedisClusterV2ModulesValkeyJsonOutputReference(this, "valkey_json");
  public get valkeyJson() {
    return this._valkeyJson;
  }
  public putValkeyJson(value: MdbRedisClusterV2ModulesValkeyJson) {
    this._valkeyJson.internalValue = value;
  }
  public resetValkeyJson() {
    this._valkeyJson.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valkeyJsonInput() {
    return this._valkeyJson.internalValue;
  }

  // valkey_search - computed: true, optional: true, required: false
  private _valkeySearch = new MdbRedisClusterV2ModulesValkeySearchOutputReference(this, "valkey_search");
  public get valkeySearch() {
    return this._valkeySearch;
  }
  public putValkeySearch(value: MdbRedisClusterV2ModulesValkeySearch) {
    this._valkeySearch.internalValue = value;
  }
  public resetValkeySearch() {
    this._valkeySearch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valkeySearchInput() {
    return this._valkeySearch.internalValue;
  }
}
export interface MdbRedisClusterV2Resources {
  /**
  * Size of the disk in bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/mdb_redis_cluster_v2#disk_size MdbRedisClusterV2#disk_size}
  */
  readonly diskSize: number;
  /**
  * ID of the disk type that determines the disk performance characteristics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/mdb_redis_cluster_v2#disk_type_id MdbRedisClusterV2#disk_type_id}
  */
  readonly diskTypeId?: string;
  /**
  * ID of the resource preset that determines the number of CPU cores and memory size for the host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/mdb_redis_cluster_v2#resource_preset_id MdbRedisClusterV2#resource_preset_id}
  */
  readonly resourcePresetId: string;
}

export function mdbRedisClusterV2ResourcesToTerraform(struct?: MdbRedisClusterV2Resources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_size: cdktf.numberToTerraform(struct!.diskSize),
    disk_type_id: cdktf.stringToTerraform(struct!.diskTypeId),
    resource_preset_id: cdktf.stringToTerraform(struct!.resourcePresetId),
  }
}


export function mdbRedisClusterV2ResourcesToHclTerraform(struct?: MdbRedisClusterV2Resources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk_size: {
      value: cdktf.numberToHclTerraform(struct!.diskSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disk_type_id: {
      value: cdktf.stringToHclTerraform(struct!.diskTypeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_preset_id: {
      value: cdktf.stringToHclTerraform(struct!.resourcePresetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MdbRedisClusterV2ResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MdbRedisClusterV2Resources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diskSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSize = this._diskSize;
    }
    if (this._diskTypeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskTypeId = this._diskTypeId;
    }
    if (this._resourcePresetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourcePresetId = this._resourcePresetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MdbRedisClusterV2Resources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._diskSize = undefined;
      this._diskTypeId = undefined;
      this._resourcePresetId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._diskSize = value.diskSize;
      this._diskTypeId = value.diskTypeId;
      this._resourcePresetId = value.resourcePresetId;
    }
  }

  // disk_size - computed: false, optional: false, required: true
  private _diskSize?: number; 
  public get diskSize() {
    return this.getNumberAttribute('disk_size');
  }
  public set diskSize(value: number) {
    this._diskSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeInput() {
    return this._diskSize;
  }

  // disk_type_id - computed: true, optional: true, required: false
  private _diskTypeId?: string; 
  public get diskTypeId() {
    return this.getStringAttribute('disk_type_id');
  }
  public set diskTypeId(value: string) {
    this._diskTypeId = value;
  }
  public resetDiskTypeId() {
    this._diskTypeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskTypeIdInput() {
    return this._diskTypeId;
  }

  // resource_preset_id - computed: false, optional: false, required: true
  private _resourcePresetId?: string; 
  public get resourcePresetId() {
    return this.getStringAttribute('resource_preset_id');
  }
  public set resourcePresetId(value: string) {
    this._resourcePresetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcePresetIdInput() {
    return this._resourcePresetId;
  }
}
export interface MdbRedisClusterV2Timeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/mdb_redis_cluster_v2#create MdbRedisClusterV2#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/mdb_redis_cluster_v2#delete MdbRedisClusterV2#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/mdb_redis_cluster_v2#update MdbRedisClusterV2#update}
  */
  readonly update?: string;
}

export function mdbRedisClusterV2TimeoutsToTerraform(struct?: MdbRedisClusterV2Timeouts | cdktf.IResolvable): any {
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


export function mdbRedisClusterV2TimeoutsToHclTerraform(struct?: MdbRedisClusterV2Timeouts | cdktf.IResolvable): any {
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

export class MdbRedisClusterV2TimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MdbRedisClusterV2Timeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MdbRedisClusterV2Timeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/mdb_redis_cluster_v2 yandex_mdb_redis_cluster_v2}
*/
export class MdbRedisClusterV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_mdb_redis_cluster_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MdbRedisClusterV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MdbRedisClusterV2 to import
  * @param importFromId The id of the existing MdbRedisClusterV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/mdb_redis_cluster_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MdbRedisClusterV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "yandex_mdb_redis_cluster_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/mdb_redis_cluster_v2 yandex_mdb_redis_cluster_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MdbRedisClusterV2Config
  */
  public constructor(scope: Construct, id: string, config: MdbRedisClusterV2Config) {
    super(scope, id, {
      terraformResourceType: 'yandex_mdb_redis_cluster_v2',
      terraformGeneratorMetadata: {
        providerName: 'yandex',
        providerVersion: '0.173.0',
        providerVersionConstraint: '0.173.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._access.internalValue = config.access;
    this._announceHostnames = config.announceHostnames;
    this._authSentinel = config.authSentinel;
    this._config.internalValue = config.config;
    this._deletionProtection = config.deletionProtection;
    this._description = config.description;
    this._diskEncryptionKeyId = config.diskEncryptionKeyId;
    this._diskSizeAutoscaling.internalValue = config.diskSizeAutoscaling;
    this._environment = config.environment;
    this._folderId = config.folderId;
    this._hosts.internalValue = config.hosts;
    this._labels = config.labels;
    this._maintenanceWindow.internalValue = config.maintenanceWindow;
    this._modules.internalValue = config.modules;
    this._name = config.name;
    this._networkId = config.networkId;
    this._persistenceMode = config.persistenceMode;
    this._resources.internalValue = config.resources;
    this._securityGroupIds = config.securityGroupIds;
    this._sharded = config.sharded;
    this._timeouts.internalValue = config.timeouts;
    this._tlsEnabled = config.tlsEnabled;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access - computed: true, optional: true, required: false
  private _access = new MdbRedisClusterV2AccessOutputReference(this, "access");
  public get access() {
    return this._access;
  }
  public putAccess(value: MdbRedisClusterV2Access) {
    this._access.internalValue = value;
  }
  public resetAccess() {
    this._access.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessInput() {
    return this._access.internalValue;
  }

  // announce_hostnames - computed: true, optional: true, required: false
  private _announceHostnames?: boolean | cdktf.IResolvable; 
  public get announceHostnames() {
    return this.getBooleanAttribute('announce_hostnames');
  }
  public set announceHostnames(value: boolean | cdktf.IResolvable) {
    this._announceHostnames = value;
  }
  public resetAnnounceHostnames() {
    this._announceHostnames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get announceHostnamesInput() {
    return this._announceHostnames;
  }

  // auth_sentinel - computed: true, optional: true, required: false
  private _authSentinel?: boolean | cdktf.IResolvable; 
  public get authSentinel() {
    return this.getBooleanAttribute('auth_sentinel');
  }
  public set authSentinel(value: boolean | cdktf.IResolvable) {
    this._authSentinel = value;
  }
  public resetAuthSentinel() {
    this._authSentinel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authSentinelInput() {
    return this._authSentinel;
  }

  // cluster_id - computed: true, optional: false, required: false
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }

  // config - computed: false, optional: false, required: true
  private _config = new MdbRedisClusterV2ConfigAOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: MdbRedisClusterV2ConfigA) {
    this._config.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // deletion_protection - computed: true, optional: true, required: false
  private _deletionProtection?: boolean | cdktf.IResolvable; 
  public get deletionProtection() {
    return this.getBooleanAttribute('deletion_protection');
  }
  public set deletionProtection(value: boolean | cdktf.IResolvable) {
    this._deletionProtection = value;
  }
  public resetDeletionProtection() {
    this._deletionProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionProtectionInput() {
    return this._deletionProtection;
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

  // disk_encryption_key_id - computed: false, optional: true, required: false
  private _diskEncryptionKeyId?: string; 
  public get diskEncryptionKeyId() {
    return this.getStringAttribute('disk_encryption_key_id');
  }
  public set diskEncryptionKeyId(value: string) {
    this._diskEncryptionKeyId = value;
  }
  public resetDiskEncryptionKeyId() {
    this._diskEncryptionKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskEncryptionKeyIdInput() {
    return this._diskEncryptionKeyId;
  }

  // disk_size_autoscaling - computed: true, optional: true, required: false
  private _diskSizeAutoscaling = new MdbRedisClusterV2DiskSizeAutoscalingOutputReference(this, "disk_size_autoscaling");
  public get diskSizeAutoscaling() {
    return this._diskSizeAutoscaling;
  }
  public putDiskSizeAutoscaling(value: MdbRedisClusterV2DiskSizeAutoscaling) {
    this._diskSizeAutoscaling.internalValue = value;
  }
  public resetDiskSizeAutoscaling() {
    this._diskSizeAutoscaling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeAutoscalingInput() {
    return this._diskSizeAutoscaling.internalValue;
  }

  // environment - computed: false, optional: false, required: true
  private _environment?: string; 
  public get environment() {
    return this.getStringAttribute('environment');
  }
  public set environment(value: string) {
    this._environment = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
  }

  // folder_id - computed: true, optional: true, required: false
  private _folderId?: string; 
  public get folderId() {
    return this.getStringAttribute('folder_id');
  }
  public set folderId(value: string) {
    this._folderId = value;
  }
  public resetFolderId() {
    this._folderId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderIdInput() {
    return this._folderId;
  }

  // hosts - computed: false, optional: false, required: true
  private _hosts = new MdbRedisClusterV2HostsMap(this, "hosts");
  public get hosts() {
    return this._hosts;
  }
  public putHosts(value: { [key: string]: MdbRedisClusterV2Hosts } | cdktf.IResolvable) {
    this._hosts.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostsInput() {
    return this._hosts.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // maintenance_window - computed: true, optional: true, required: false
  private _maintenanceWindow = new MdbRedisClusterV2MaintenanceWindowOutputReference(this, "maintenance_window");
  public get maintenanceWindow() {
    return this._maintenanceWindow;
  }
  public putMaintenanceWindow(value: MdbRedisClusterV2MaintenanceWindow) {
    this._maintenanceWindow.internalValue = value;
  }
  public resetMaintenanceWindow() {
    this._maintenanceWindow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceWindowInput() {
    return this._maintenanceWindow.internalValue;
  }

  // modules - computed: true, optional: true, required: false
  private _modules = new MdbRedisClusterV2ModulesOutputReference(this, "modules");
  public get modules() {
    return this._modules;
  }
  public putModules(value: MdbRedisClusterV2Modules) {
    this._modules.internalValue = value;
  }
  public resetModules() {
    this._modules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modulesInput() {
    return this._modules.internalValue;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // network_id - computed: false, optional: false, required: true
  private _networkId?: string; 
  public get networkId() {
    return this.getStringAttribute('network_id');
  }
  public set networkId(value: string) {
    this._networkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdInput() {
    return this._networkId;
  }

  // persistence_mode - computed: true, optional: true, required: false
  private _persistenceMode?: string; 
  public get persistenceMode() {
    return this.getStringAttribute('persistence_mode');
  }
  public set persistenceMode(value: string) {
    this._persistenceMode = value;
  }
  public resetPersistenceMode() {
    this._persistenceMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistenceModeInput() {
    return this._persistenceMode;
  }

  // resources - computed: false, optional: false, required: true
  private _resources = new MdbRedisClusterV2ResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: MdbRedisClusterV2Resources) {
    this._resources.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // security_group_ids - computed: false, optional: true, required: false
  private _securityGroupIds?: string[]; 
  public get securityGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('security_group_ids'));
  }
  public set securityGroupIds(value: string[]) {
    this._securityGroupIds = value;
  }
  public resetSecurityGroupIds() {
    this._securityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdsInput() {
    return this._securityGroupIds;
  }

  // sharded - computed: true, optional: true, required: false
  private _sharded?: boolean | cdktf.IResolvable; 
  public get sharded() {
    return this.getBooleanAttribute('sharded');
  }
  public set sharded(value: boolean | cdktf.IResolvable) {
    this._sharded = value;
  }
  public resetSharded() {
    this._sharded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shardedInput() {
    return this._sharded;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MdbRedisClusterV2TimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MdbRedisClusterV2Timeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // tls_enabled - computed: true, optional: true, required: false
  private _tlsEnabled?: boolean | cdktf.IResolvable; 
  public get tlsEnabled() {
    return this.getBooleanAttribute('tls_enabled');
  }
  public set tlsEnabled(value: boolean | cdktf.IResolvable) {
    this._tlsEnabled = value;
  }
  public resetTlsEnabled() {
    this._tlsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsEnabledInput() {
    return this._tlsEnabled;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access: mdbRedisClusterV2AccessToTerraform(this._access.internalValue),
      announce_hostnames: cdktf.booleanToTerraform(this._announceHostnames),
      auth_sentinel: cdktf.booleanToTerraform(this._authSentinel),
      config: mdbRedisClusterV2ConfigAToTerraform(this._config.internalValue),
      deletion_protection: cdktf.booleanToTerraform(this._deletionProtection),
      description: cdktf.stringToTerraform(this._description),
      disk_encryption_key_id: cdktf.stringToTerraform(this._diskEncryptionKeyId),
      disk_size_autoscaling: mdbRedisClusterV2DiskSizeAutoscalingToTerraform(this._diskSizeAutoscaling.internalValue),
      environment: cdktf.stringToTerraform(this._environment),
      folder_id: cdktf.stringToTerraform(this._folderId),
      hosts: cdktf.hashMapper(mdbRedisClusterV2HostsToTerraform)(this._hosts.internalValue),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      maintenance_window: mdbRedisClusterV2MaintenanceWindowToTerraform(this._maintenanceWindow.internalValue),
      modules: mdbRedisClusterV2ModulesToTerraform(this._modules.internalValue),
      name: cdktf.stringToTerraform(this._name),
      network_id: cdktf.stringToTerraform(this._networkId),
      persistence_mode: cdktf.stringToTerraform(this._persistenceMode),
      resources: mdbRedisClusterV2ResourcesToTerraform(this._resources.internalValue),
      security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityGroupIds),
      sharded: cdktf.booleanToTerraform(this._sharded),
      timeouts: mdbRedisClusterV2TimeoutsToTerraform(this._timeouts.internalValue),
      tls_enabled: cdktf.booleanToTerraform(this._tlsEnabled),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access: {
        value: mdbRedisClusterV2AccessToHclTerraform(this._access.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MdbRedisClusterV2Access",
      },
      announce_hostnames: {
        value: cdktf.booleanToHclTerraform(this._announceHostnames),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auth_sentinel: {
        value: cdktf.booleanToHclTerraform(this._authSentinel),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      config: {
        value: mdbRedisClusterV2ConfigAToHclTerraform(this._config.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MdbRedisClusterV2ConfigA",
      },
      deletion_protection: {
        value: cdktf.booleanToHclTerraform(this._deletionProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disk_encryption_key_id: {
        value: cdktf.stringToHclTerraform(this._diskEncryptionKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disk_size_autoscaling: {
        value: mdbRedisClusterV2DiskSizeAutoscalingToHclTerraform(this._diskSizeAutoscaling.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MdbRedisClusterV2DiskSizeAutoscaling",
      },
      environment: {
        value: cdktf.stringToHclTerraform(this._environment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      folder_id: {
        value: cdktf.stringToHclTerraform(this._folderId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hosts: {
        value: cdktf.hashMapperHcl(mdbRedisClusterV2HostsToHclTerraform)(this._hosts.internalValue),
        isBlock: true,
        type: "map",
        storageClassType: "MdbRedisClusterV2HostsMap",
      },
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      maintenance_window: {
        value: mdbRedisClusterV2MaintenanceWindowToHclTerraform(this._maintenanceWindow.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MdbRedisClusterV2MaintenanceWindow",
      },
      modules: {
        value: mdbRedisClusterV2ModulesToHclTerraform(this._modules.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MdbRedisClusterV2Modules",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_id: {
        value: cdktf.stringToHclTerraform(this._networkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      persistence_mode: {
        value: cdktf.stringToHclTerraform(this._persistenceMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resources: {
        value: mdbRedisClusterV2ResourcesToHclTerraform(this._resources.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MdbRedisClusterV2Resources",
      },
      security_group_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._securityGroupIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      sharded: {
        value: cdktf.booleanToHclTerraform(this._sharded),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      timeouts: {
        value: mdbRedisClusterV2TimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MdbRedisClusterV2Timeouts",
      },
      tls_enabled: {
        value: cdktf.booleanToHclTerraform(this._tlsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
