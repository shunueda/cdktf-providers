// https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataYandexMdbClickhouseClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * A password used to authorize as user `admin` when `sql_user_management` enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#admin_password DataYandexMdbClickhouseCluster#admin_password}
  */
  readonly adminPassword?: string;
  /**
  * The period in days during which backups are stored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#backup_retain_period_days DataYandexMdbClickhouseCluster#backup_retain_period_days}
  */
  readonly backupRetainPeriodDays?: number;
  /**
  * The cluster identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#cluster_id DataYandexMdbClickhouseCluster#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * Whether to copy schema on new ClickHouse hosts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#copy_schema_on_new_hosts DataYandexMdbClickhouseCluster#copy_schema_on_new_hosts}
  */
  readonly copySchemaOnNewHosts?: boolean | cdktf.IResolvable;
  /**
  * The creation timestamp of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#created_at DataYandexMdbClickhouseCluster#created_at}
  */
  readonly createdAt?: string;
  /**
  * The `true` value means that resource is protected from accidental deletion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#deletion_protection DataYandexMdbClickhouseCluster#deletion_protection}
  */
  readonly deletionProtection?: boolean | cdktf.IResolvable;
  /**
  * The resource description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#description DataYandexMdbClickhouseCluster#description}
  */
  readonly description?: string;
  /**
  * ID of the KMS key for cluster disk encryption.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#disk_encryption_key_id DataYandexMdbClickhouseCluster#disk_encryption_key_id}
  */
  readonly diskEncryptionKeyId?: string;
  /**
  * Whether to use ClickHouse Keeper as a coordination system and place it on the same hosts with ClickHouse. If not, it's used ZooKeeper with placement on separate hosts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#embedded_keeper DataYandexMdbClickhouseCluster#embedded_keeper}
  */
  readonly embeddedKeeper?: boolean | cdktf.IResolvable;
  /**
  * Deployment environment of the ClickHouse cluster. Can be either `PRESTABLE` or `PRODUCTION`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#environment DataYandexMdbClickhouseCluster#environment}
  */
  readonly environment?: string;
  /**
  * The folder identifier that resource belongs to. If it is not provided, the default provider `folder-id` is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#folder_id DataYandexMdbClickhouseCluster#folder_id}
  */
  readonly folderId?: string;
  /**
  * Aggregated health of the cluster. Can be `ALIVE`, `DEGRADED`, `DEAD` or `HEALTH_UNKNOWN`. For more information see `health` field of JSON representation in [the official documentation](https://yandex.cloud/docs/managed-clickhouse/api-ref/Cluster/).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#health DataYandexMdbClickhouseCluster#health}
  */
  readonly health?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#id DataYandexMdbClickhouseCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A set of key/value label pairs which assigned to resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#labels DataYandexMdbClickhouseCluster#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The resource name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#name DataYandexMdbClickhouseCluster#name}
  */
  readonly name?: string;
  /**
  * The `VPC Network ID` of subnets which resource attached to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#network_id DataYandexMdbClickhouseCluster#network_id}
  */
  readonly networkId?: string;
  /**
  * The list of security groups applied to resource or their components.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#security_group_ids DataYandexMdbClickhouseCluster#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * [Service account](https://yandex.cloud/docs/iam/concepts/users/service-accounts) which linked to the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#service_account_id DataYandexMdbClickhouseCluster#service_account_id}
  */
  readonly serviceAccountId?: string;
  /**
  * Grants `admin` user database management permission.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#sql_database_management DataYandexMdbClickhouseCluster#sql_database_management}
  */
  readonly sqlDatabaseManagement?: boolean | cdktf.IResolvable;
  /**
  * Enables `admin` user with user management permission.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#sql_user_management DataYandexMdbClickhouseCluster#sql_user_management}
  */
  readonly sqlUserManagement?: boolean | cdktf.IResolvable;
  /**
  * Status of the cluster. Can be `CREATING`, `STARTING`, `RUNNING`, `UPDATING`, `STOPPING`, `STOPPED`, `ERROR` or `STATUS_UNKNOWN`. For more information see `status` field of JSON representation in [the official documentation](https://yandex.cloud/docs/managed-clickhouse/api-ref/Cluster/).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#status DataYandexMdbClickhouseCluster#status}
  */
  readonly status?: string;
  /**
  * Version of the ClickHouse server software.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#version DataYandexMdbClickhouseCluster#version}
  */
  readonly version?: string;
  /**
  * access block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#access DataYandexMdbClickhouseCluster#access}
  */
  readonly access?: DataYandexMdbClickhouseClusterAccess;
  /**
  * backup_window_start block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#backup_window_start DataYandexMdbClickhouseCluster#backup_window_start}
  */
  readonly backupWindowStart?: DataYandexMdbClickhouseClusterBackupWindowStart;
  /**
  * clickhouse block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#clickhouse DataYandexMdbClickhouseCluster#clickhouse}
  */
  readonly clickhouse?: DataYandexMdbClickhouseClusterClickhouse;
  /**
  * cloud_storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#cloud_storage DataYandexMdbClickhouseCluster#cloud_storage}
  */
  readonly cloudStorage?: DataYandexMdbClickhouseClusterCloudStorage;
  /**
  * database block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#database DataYandexMdbClickhouseCluster#database}
  */
  readonly database?: DataYandexMdbClickhouseClusterDatabase[] | cdktf.IResolvable;
  /**
  * format_schema block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#format_schema DataYandexMdbClickhouseCluster#format_schema}
  */
  readonly formatSchema?: DataYandexMdbClickhouseClusterFormatSchema[] | cdktf.IResolvable;
  /**
  * host block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#host DataYandexMdbClickhouseCluster#host}
  */
  readonly host?: DataYandexMdbClickhouseClusterHost[] | cdktf.IResolvable;
  /**
  * maintenance_window block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#maintenance_window DataYandexMdbClickhouseCluster#maintenance_window}
  */
  readonly maintenanceWindow?: DataYandexMdbClickhouseClusterMaintenanceWindow;
  /**
  * ml_model block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#ml_model DataYandexMdbClickhouseCluster#ml_model}
  */
  readonly mlModel?: DataYandexMdbClickhouseClusterMlModel[] | cdktf.IResolvable;
  /**
  * shard block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#shard DataYandexMdbClickhouseCluster#shard}
  */
  readonly shard?: DataYandexMdbClickhouseClusterShard[] | cdktf.IResolvable;
  /**
  * shard_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#shard_group DataYandexMdbClickhouseCluster#shard_group}
  */
  readonly shardGroup?: DataYandexMdbClickhouseClusterShardGroup[] | cdktf.IResolvable;
  /**
  * user block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#user DataYandexMdbClickhouseCluster#user}
  */
  readonly user?: DataYandexMdbClickhouseClusterUser[] | cdktf.IResolvable;
  /**
  * zookeeper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#zookeeper DataYandexMdbClickhouseCluster#zookeeper}
  */
  readonly zookeeper?: DataYandexMdbClickhouseClusterZookeeper;
}
export interface DataYandexMdbClickhouseClusterAccess {
  /**
  * Allow access for DataLens.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#data_lens DataYandexMdbClickhouseCluster#data_lens}
  */
  readonly dataLens?: boolean | cdktf.IResolvable;
  /**
  * Allow access for DataTransfer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#data_transfer DataYandexMdbClickhouseCluster#data_transfer}
  */
  readonly dataTransfer?: boolean | cdktf.IResolvable;
  /**
  * Allow access for Yandex.Metrika.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#metrika DataYandexMdbClickhouseCluster#metrika}
  */
  readonly metrika?: boolean | cdktf.IResolvable;
  /**
  * Allow access for Serverless.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#serverless DataYandexMdbClickhouseCluster#serverless}
  */
  readonly serverless?: boolean | cdktf.IResolvable;
  /**
  * Allow access for Web SQL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#web_sql DataYandexMdbClickhouseCluster#web_sql}
  */
  readonly webSql?: boolean | cdktf.IResolvable;
  /**
  * Allow access for YandexQuery.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#yandex_query DataYandexMdbClickhouseCluster#yandex_query}
  */
  readonly yandexQuery?: boolean | cdktf.IResolvable;
}

export function dataYandexMdbClickhouseClusterAccessToTerraform(struct?: DataYandexMdbClickhouseClusterAccessOutputReference | DataYandexMdbClickhouseClusterAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_lens: cdktf.booleanToTerraform(struct!.dataLens),
    data_transfer: cdktf.booleanToTerraform(struct!.dataTransfer),
    metrika: cdktf.booleanToTerraform(struct!.metrika),
    serverless: cdktf.booleanToTerraform(struct!.serverless),
    web_sql: cdktf.booleanToTerraform(struct!.webSql),
    yandex_query: cdktf.booleanToTerraform(struct!.yandexQuery),
  }
}


export function dataYandexMdbClickhouseClusterAccessToHclTerraform(struct?: DataYandexMdbClickhouseClusterAccessOutputReference | DataYandexMdbClickhouseClusterAccess): any {
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
    data_transfer: {
      value: cdktf.booleanToHclTerraform(struct!.dataTransfer),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    metrika: {
      value: cdktf.booleanToHclTerraform(struct!.metrika),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    serverless: {
      value: cdktf.booleanToHclTerraform(struct!.serverless),
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
    yandex_query: {
      value: cdktf.booleanToHclTerraform(struct!.yandexQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataYandexMdbClickhouseClusterAccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataYandexMdbClickhouseClusterAccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataLens !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataLens = this._dataLens;
    }
    if (this._dataTransfer !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataTransfer = this._dataTransfer;
    }
    if (this._metrika !== undefined) {
      hasAnyValues = true;
      internalValueResult.metrika = this._metrika;
    }
    if (this._serverless !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverless = this._serverless;
    }
    if (this._webSql !== undefined) {
      hasAnyValues = true;
      internalValueResult.webSql = this._webSql;
    }
    if (this._yandexQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.yandexQuery = this._yandexQuery;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbClickhouseClusterAccess | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataLens = undefined;
      this._dataTransfer = undefined;
      this._metrika = undefined;
      this._serverless = undefined;
      this._webSql = undefined;
      this._yandexQuery = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataLens = value.dataLens;
      this._dataTransfer = value.dataTransfer;
      this._metrika = value.metrika;
      this._serverless = value.serverless;
      this._webSql = value.webSql;
      this._yandexQuery = value.yandexQuery;
    }
  }

  // data_lens - computed: false, optional: true, required: false
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

  // data_transfer - computed: false, optional: true, required: false
  private _dataTransfer?: boolean | cdktf.IResolvable; 
  public get dataTransfer() {
    return this.getBooleanAttribute('data_transfer');
  }
  public set dataTransfer(value: boolean | cdktf.IResolvable) {
    this._dataTransfer = value;
  }
  public resetDataTransfer() {
    this._dataTransfer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataTransferInput() {
    return this._dataTransfer;
  }

  // metrika - computed: false, optional: true, required: false
  private _metrika?: boolean | cdktf.IResolvable; 
  public get metrika() {
    return this.getBooleanAttribute('metrika');
  }
  public set metrika(value: boolean | cdktf.IResolvable) {
    this._metrika = value;
  }
  public resetMetrika() {
    this._metrika = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metrikaInput() {
    return this._metrika;
  }

  // serverless - computed: false, optional: true, required: false
  private _serverless?: boolean | cdktf.IResolvable; 
  public get serverless() {
    return this.getBooleanAttribute('serverless');
  }
  public set serverless(value: boolean | cdktf.IResolvable) {
    this._serverless = value;
  }
  public resetServerless() {
    this._serverless = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverlessInput() {
    return this._serverless;
  }

  // web_sql - computed: false, optional: true, required: false
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

  // yandex_query - computed: false, optional: true, required: false
  private _yandexQuery?: boolean | cdktf.IResolvable; 
  public get yandexQuery() {
    return this.getBooleanAttribute('yandex_query');
  }
  public set yandexQuery(value: boolean | cdktf.IResolvable) {
    this._yandexQuery = value;
  }
  public resetYandexQuery() {
    this._yandexQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yandexQueryInput() {
    return this._yandexQuery;
  }
}
export interface DataYandexMdbClickhouseClusterBackupWindowStart {
  /**
  * The hour at which backup will be started.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#hours DataYandexMdbClickhouseCluster#hours}
  */
  readonly hours?: number;
  /**
  * The minute at which backup will be started.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#minutes DataYandexMdbClickhouseCluster#minutes}
  */
  readonly minutes?: number;
}

export function dataYandexMdbClickhouseClusterBackupWindowStartToTerraform(struct?: DataYandexMdbClickhouseClusterBackupWindowStartOutputReference | DataYandexMdbClickhouseClusterBackupWindowStart): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hours: cdktf.numberToTerraform(struct!.hours),
    minutes: cdktf.numberToTerraform(struct!.minutes),
  }
}


export function dataYandexMdbClickhouseClusterBackupWindowStartToHclTerraform(struct?: DataYandexMdbClickhouseClusterBackupWindowStartOutputReference | DataYandexMdbClickhouseClusterBackupWindowStart): any {
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

export class DataYandexMdbClickhouseClusterBackupWindowStartOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataYandexMdbClickhouseClusterBackupWindowStart | undefined {
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

  public set internalValue(value: DataYandexMdbClickhouseClusterBackupWindowStart | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hours = undefined;
      this._minutes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hours = value.hours;
      this._minutes = value.minutes;
    }
  }

  // hours - computed: false, optional: true, required: false
  private _hours?: number; 
  public get hours() {
    return this.getNumberAttribute('hours');
  }
  public set hours(value: number) {
    this._hours = value;
  }
  public resetHours() {
    this._hours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hoursInput() {
    return this._hours;
  }

  // minutes - computed: false, optional: true, required: false
  private _minutes?: number; 
  public get minutes() {
    return this.getNumberAttribute('minutes');
  }
  public set minutes(value: number) {
    this._minutes = value;
  }
  public resetMinutes() {
    this._minutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minutesInput() {
    return this._minutes;
  }
}
export interface DataYandexMdbClickhouseClusterClickhouseConfigCompression {
  /**
  *  Compression level for `ZSTD` method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#level DataYandexMdbClickhouseCluster#level}
  */
  readonly level?: number;
  /**
  * Compression method. Two methods are available: `LZ4` and `zstd`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#method DataYandexMdbClickhouseCluster#method}
  */
  readonly method?: string;
  /**
  * Min part size: Minimum size (in bytes) of a data part in a table. ClickHouse only applies the rule to tables with data parts greater than or equal to the Min part size value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#min_part_size DataYandexMdbClickhouseCluster#min_part_size}
  */
  readonly minPartSize?: number;
  /**
  * Min part size ratio: Minimum table part size to total table size ratio. ClickHouse only applies the rule to tables in which this ratio is greater than or equal to the Min part size ratio value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#min_part_size_ratio DataYandexMdbClickhouseCluster#min_part_size_ratio}
  */
  readonly minPartSizeRatio?: number;
}

export function dataYandexMdbClickhouseClusterClickhouseConfigCompressionToTerraform(struct?: DataYandexMdbClickhouseClusterClickhouseConfigCompression | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.numberToTerraform(struct!.level),
    method: cdktf.stringToTerraform(struct!.method),
    min_part_size: cdktf.numberToTerraform(struct!.minPartSize),
    min_part_size_ratio: cdktf.numberToTerraform(struct!.minPartSizeRatio),
  }
}


export function dataYandexMdbClickhouseClusterClickhouseConfigCompressionToHclTerraform(struct?: DataYandexMdbClickhouseClusterClickhouseConfigCompression | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    level: {
      value: cdktf.numberToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_part_size: {
      value: cdktf.numberToHclTerraform(struct!.minPartSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_part_size_ratio: {
      value: cdktf.numberToHclTerraform(struct!.minPartSizeRatio),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataYandexMdbClickhouseClusterClickhouseConfigCompressionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataYandexMdbClickhouseClusterClickhouseConfigCompression | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._minPartSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.minPartSize = this._minPartSize;
    }
    if (this._minPartSizeRatio !== undefined) {
      hasAnyValues = true;
      internalValueResult.minPartSizeRatio = this._minPartSizeRatio;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbClickhouseClusterClickhouseConfigCompression | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._level = undefined;
      this._method = undefined;
      this._minPartSize = undefined;
      this._minPartSizeRatio = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._level = value.level;
      this._method = value.method;
      this._minPartSize = value.minPartSize;
      this._minPartSizeRatio = value.minPartSizeRatio;
    }
  }

  // level - computed: false, optional: true, required: false
  private _level?: number; 
  public get level() {
    return this.getNumberAttribute('level');
  }
  public set level(value: number) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }

  // method - computed: false, optional: true, required: false
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }

  // min_part_size - computed: false, optional: true, required: false
  private _minPartSize?: number; 
  public get minPartSize() {
    return this.getNumberAttribute('min_part_size');
  }
  public set minPartSize(value: number) {
    this._minPartSize = value;
  }
  public resetMinPartSize() {
    this._minPartSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minPartSizeInput() {
    return this._minPartSize;
  }

  // min_part_size_ratio - computed: false, optional: true, required: false
  private _minPartSizeRatio?: number; 
  public get minPartSizeRatio() {
    return this.getNumberAttribute('min_part_size_ratio');
  }
  public set minPartSizeRatio(value: number) {
    this._minPartSizeRatio = value;
  }
  public resetMinPartSizeRatio() {
    this._minPartSizeRatio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minPartSizeRatioInput() {
    return this._minPartSizeRatio;
  }
}

export class DataYandexMdbClickhouseClusterClickhouseConfigCompressionList extends cdktf.ComplexList {
  public internalValue? : DataYandexMdbClickhouseClusterClickhouseConfigCompression[] | cdktf.IResolvable

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
  public get(index: number): DataYandexMdbClickhouseClusterClickhouseConfigCompressionOutputReference {
    return new DataYandexMdbClickhouseClusterClickhouseConfigCompressionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexMdbClickhouseClusterClickhouseConfigGraphiteRollupPatternRetention {
  /**
  * Minimum data age in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#age DataYandexMdbClickhouseCluster#age}
  */
  readonly age?: number;
  /**
  * Accuracy of determining the age of the data in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#precision DataYandexMdbClickhouseCluster#precision}
  */
  readonly precision?: number;
}

export function dataYandexMdbClickhouseClusterClickhouseConfigGraphiteRollupPatternRetentionToTerraform(struct?: DataYandexMdbClickhouseClusterClickhouseConfigGraphiteRollupPatternRetention | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    age: cdktf.numberToTerraform(struct!.age),
    precision: cdktf.numberToTerraform(struct!.precision),
  }
}


export function dataYandexMdbClickhouseClusterClickhouseConfigGraphiteRollupPatternRetentionToHclTerraform(struct?: DataYandexMdbClickhouseClusterClickhouseConfigGraphiteRollupPatternRetention | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    age: {
      value: cdktf.numberToHclTerraform(struct!.age),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    precision: {
      value: cdktf.numberToHclTerraform(struct!.precision),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataYandexMdbClickhouseClusterClickhouseConfigGraphiteRollupPatternRetentionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataYandexMdbClickhouseClusterClickhouseConfigGraphiteRollupPatternRetention | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._age !== undefined) {
      hasAnyValues = true;
      internalValueResult.age = this._age;
    }
    if (this._precision !== undefined) {
      hasAnyValues = true;
      internalValueResult.precision = this._precision;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbClickhouseClusterClickhouseConfigGraphiteRollupPatternRetention | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._age = undefined;
      this._precision = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._age = value.age;
      this._precision = value.precision;
    }
  }

  // age - computed: false, optional: true, required: false
  private _age?: number; 
  public get age() {
    return this.getNumberAttribute('age');
  }
  public set age(value: number) {
    this._age = value;
  }
  public resetAge() {
    this._age = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ageInput() {
    return this._age;
  }

  // precision - computed: false, optional: true, required: false
  private _precision?: number; 
  public get precision() {
    return this.getNumberAttribute('precision');
  }
  public set precision(value: number) {
    this._precision = value;
  }
  public resetPrecision() {
    this._precision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get precisionInput() {
    return this._precision;
  }
}

export class DataYandexMdbClickhouseClusterClickhouseConfigGraphiteRollupPatternRetentionList extends cdktf.ComplexList {
  public internalValue? : DataYandexMdbClickhouseClusterClickhouseConfigGraphiteRollupPatternRetention[] | cdktf.IResolvable

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
  public get(index: number): DataYandexMdbClickhouseClusterClickhouseConfigGraphiteRollupPatternRetentionOutputReference {
    return new DataYandexMdbClickhouseClusterClickhouseConfigGraphiteRollupPatternRetentionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexMdbClickhouseClusterClickhouseConfigGraphiteRollupPattern {
  /**
  * Aggregation function name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#function DataYandexMdbClickhouseCluster#function}
  */
  readonly function?: string;
  /**
  * Regular expression that the metric name must match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#regexp DataYandexMdbClickhouseCluster#regexp}
  */
  readonly regexp?: string;
  /**
  * retention block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#retention DataYandexMdbClickhouseCluster#retention}
  */
  readonly retention?: DataYandexMdbClickhouseClusterClickhouseConfigGraphiteRollupPatternRetention[] | cdktf.IResolvable;
}

export function dataYandexMdbClickhouseClusterClickhouseConfigGraphiteRollupPatternToTerraform(struct?: DataYandexMdbClickhouseClusterClickhouseConfigGraphiteRollupPattern | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    function: cdktf.stringToTerraform(struct!.function),
    regexp: cdktf.stringToTerraform(struct!.regexp),
    retention: cdktf.listMapper(dataYandexMdbClickhouseClusterClickhouseConfigGraphiteRollupPatternRetentionToTerraform, true)(struct!.retention),
  }
}


export function dataYandexMdbClickhouseClusterClickhouseConfigGraphiteRollupPatternToHclTerraform(struct?: DataYandexMdbClickhouseClusterClickhouseConfigGraphiteRollupPattern | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    function: {
      value: cdktf.stringToHclTerraform(struct!.function),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regexp: {
      value: cdktf.stringToHclTerraform(struct!.regexp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retention: {
      value: cdktf.listMapperHcl(dataYandexMdbClickhouseClusterClickhouseConfigGraphiteRollupPatternRetentionToHclTerraform, true)(struct!.retention),
      isBlock: true,
      type: "list",
      storageClassType: "DataYandexMdbClickhouseClusterClickhouseConfigGraphiteRollupPatternRetentionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataYandexMdbClickhouseClusterClickhouseConfigGraphiteRollupPatternOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataYandexMdbClickhouseClusterClickhouseConfigGraphiteRollupPattern | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._function !== undefined) {
      hasAnyValues = true;
      internalValueResult.function = this._function;
    }
    if (this._regexp !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexp = this._regexp;
    }
    if (this._retention?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retention = this._retention?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbClickhouseClusterClickhouseConfigGraphiteRollupPattern | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._function = undefined;
      this._regexp = undefined;
      this._retention.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._function = value.function;
      this._regexp = value.regexp;
      this._retention.internalValue = value.retention;
    }
  }

  // function - computed: false, optional: true, required: false
  private _function?: string; 
  public get function() {
    return this.getStringAttribute('function');
  }
  public set function(value: string) {
    this._function = value;
  }
  public resetFunction() {
    this._function = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionInput() {
    return this._function;
  }

  // regexp - computed: true, optional: true, required: false
  private _regexp?: string; 
  public get regexp() {
    return this.getStringAttribute('regexp');
  }
  public set regexp(value: string) {
    this._regexp = value;
  }
  public resetRegexp() {
    this._regexp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexpInput() {
    return this._regexp;
  }

  // retention - computed: false, optional: true, required: false
  private _retention = new DataYandexMdbClickhouseClusterClickhouseConfigGraphiteRollupPatternRetentionList(this, "retention", false);
  public get retention() {
    return this._retention;
  }
  public putRetention(value: DataYandexMdbClickhouseClusterClickhouseConfigGraphiteRollupPatternRetention[] | cdktf.IResolvable) {
    this._retention.internalValue = value;
  }
  public resetRetention() {
    this._retention.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionInput() {
    return this._retention.internalValue;
  }
}

export class DataYandexMdbClickhouseClusterClickhouseConfigGraphiteRollupPatternList extends cdktf.ComplexList {
  public internalValue? : DataYandexMdbClickhouseClusterClickhouseConfigGraphiteRollupPattern[] | cdktf.IResolvable

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
  public get(index: number): DataYandexMdbClickhouseClusterClickhouseConfigGraphiteRollupPatternOutputReference {
    return new DataYandexMdbClickhouseClusterClickhouseConfigGraphiteRollupPatternOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexMdbClickhouseClusterClickhouseConfigGraphiteRollup {
  /**
  * Graphite rollup configuration name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#name DataYandexMdbClickhouseCluster#name}
  */
  readonly name?: string;
  /**
  * The name of the column storing the metric name (Graphite sensor). Default value: Path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#path_column_name DataYandexMdbClickhouseCluster#path_column_name}
  */
  readonly pathColumnName?: string;
  /**
  * The name of the column storing the time of measuring the metric. Default value: Time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#time_column_name DataYandexMdbClickhouseCluster#time_column_name}
  */
  readonly timeColumnName?: string;
  /**
  * The name of the column storing the value of the metric at the time set in `time_column_name`. Default value: Value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#value_column_name DataYandexMdbClickhouseCluster#value_column_name}
  */
  readonly valueColumnName?: string;
  /**
  * The name of the column storing the version of the metric. Default value: Timestamp.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#version_column_name DataYandexMdbClickhouseCluster#version_column_name}
  */
  readonly versionColumnName?: string;
  /**
  * pattern block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#pattern DataYandexMdbClickhouseCluster#pattern}
  */
  readonly pattern?: DataYandexMdbClickhouseClusterClickhouseConfigGraphiteRollupPattern[] | cdktf.IResolvable;
}

export function dataYandexMdbClickhouseClusterClickhouseConfigGraphiteRollupToTerraform(struct?: DataYandexMdbClickhouseClusterClickhouseConfigGraphiteRollup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    path_column_name: cdktf.stringToTerraform(struct!.pathColumnName),
    time_column_name: cdktf.stringToTerraform(struct!.timeColumnName),
    value_column_name: cdktf.stringToTerraform(struct!.valueColumnName),
    version_column_name: cdktf.stringToTerraform(struct!.versionColumnName),
    pattern: cdktf.listMapper(dataYandexMdbClickhouseClusterClickhouseConfigGraphiteRollupPatternToTerraform, true)(struct!.pattern),
  }
}


export function dataYandexMdbClickhouseClusterClickhouseConfigGraphiteRollupToHclTerraform(struct?: DataYandexMdbClickhouseClusterClickhouseConfigGraphiteRollup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path_column_name: {
      value: cdktf.stringToHclTerraform(struct!.pathColumnName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_column_name: {
      value: cdktf.stringToHclTerraform(struct!.timeColumnName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_column_name: {
      value: cdktf.stringToHclTerraform(struct!.valueColumnName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version_column_name: {
      value: cdktf.stringToHclTerraform(struct!.versionColumnName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pattern: {
      value: cdktf.listMapperHcl(dataYandexMdbClickhouseClusterClickhouseConfigGraphiteRollupPatternToHclTerraform, true)(struct!.pattern),
      isBlock: true,
      type: "list",
      storageClassType: "DataYandexMdbClickhouseClusterClickhouseConfigGraphiteRollupPatternList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataYandexMdbClickhouseClusterClickhouseConfigGraphiteRollupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataYandexMdbClickhouseClusterClickhouseConfigGraphiteRollup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._pathColumnName !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathColumnName = this._pathColumnName;
    }
    if (this._timeColumnName !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeColumnName = this._timeColumnName;
    }
    if (this._valueColumnName !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueColumnName = this._valueColumnName;
    }
    if (this._versionColumnName !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionColumnName = this._versionColumnName;
    }
    if (this._pattern?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbClickhouseClusterClickhouseConfigGraphiteRollup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._pathColumnName = undefined;
      this._timeColumnName = undefined;
      this._valueColumnName = undefined;
      this._versionColumnName = undefined;
      this._pattern.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._pathColumnName = value.pathColumnName;
      this._timeColumnName = value.timeColumnName;
      this._valueColumnName = value.valueColumnName;
      this._versionColumnName = value.versionColumnName;
      this._pattern.internalValue = value.pattern;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // path_column_name - computed: true, optional: true, required: false
  private _pathColumnName?: string; 
  public get pathColumnName() {
    return this.getStringAttribute('path_column_name');
  }
  public set pathColumnName(value: string) {
    this._pathColumnName = value;
  }
  public resetPathColumnName() {
    this._pathColumnName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathColumnNameInput() {
    return this._pathColumnName;
  }

  // time_column_name - computed: true, optional: true, required: false
  private _timeColumnName?: string; 
  public get timeColumnName() {
    return this.getStringAttribute('time_column_name');
  }
  public set timeColumnName(value: string) {
    this._timeColumnName = value;
  }
  public resetTimeColumnName() {
    this._timeColumnName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeColumnNameInput() {
    return this._timeColumnName;
  }

  // value_column_name - computed: true, optional: true, required: false
  private _valueColumnName?: string; 
  public get valueColumnName() {
    return this.getStringAttribute('value_column_name');
  }
  public set valueColumnName(value: string) {
    this._valueColumnName = value;
  }
  public resetValueColumnName() {
    this._valueColumnName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueColumnNameInput() {
    return this._valueColumnName;
  }

  // version_column_name - computed: true, optional: true, required: false
  private _versionColumnName?: string; 
  public get versionColumnName() {
    return this.getStringAttribute('version_column_name');
  }
  public set versionColumnName(value: string) {
    this._versionColumnName = value;
  }
  public resetVersionColumnName() {
    this._versionColumnName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionColumnNameInput() {
    return this._versionColumnName;
  }

  // pattern - computed: false, optional: true, required: false
  private _pattern = new DataYandexMdbClickhouseClusterClickhouseConfigGraphiteRollupPatternList(this, "pattern", false);
  public get pattern() {
    return this._pattern;
  }
  public putPattern(value: DataYandexMdbClickhouseClusterClickhouseConfigGraphiteRollupPattern[] | cdktf.IResolvable) {
    this._pattern.internalValue = value;
  }
  public resetPattern() {
    this._pattern.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern.internalValue;
  }
}

export class DataYandexMdbClickhouseClusterClickhouseConfigGraphiteRollupList extends cdktf.ComplexList {
  public internalValue? : DataYandexMdbClickhouseClusterClickhouseConfigGraphiteRollup[] | cdktf.IResolvable

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
  public get(index: number): DataYandexMdbClickhouseClusterClickhouseConfigGraphiteRollupOutputReference {
    return new DataYandexMdbClickhouseClusterClickhouseConfigGraphiteRollupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexMdbClickhouseClusterClickhouseConfigJdbcBridge {
  /**
  * Host of jdbc bridge.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#host DataYandexMdbClickhouseCluster#host}
  */
  readonly host?: string;
  /**
  * Port of jdbc bridge. Default value: 9019.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#port DataYandexMdbClickhouseCluster#port}
  */
  readonly port?: number;
}

export function dataYandexMdbClickhouseClusterClickhouseConfigJdbcBridgeToTerraform(struct?: DataYandexMdbClickhouseClusterClickhouseConfigJdbcBridgeOutputReference | DataYandexMdbClickhouseClusterClickhouseConfigJdbcBridge): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function dataYandexMdbClickhouseClusterClickhouseConfigJdbcBridgeToHclTerraform(struct?: DataYandexMdbClickhouseClusterClickhouseConfigJdbcBridgeOutputReference | DataYandexMdbClickhouseClusterClickhouseConfigJdbcBridge): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataYandexMdbClickhouseClusterClickhouseConfigJdbcBridgeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataYandexMdbClickhouseClusterClickhouseConfigJdbcBridge | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbClickhouseClusterClickhouseConfigJdbcBridge | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._host = undefined;
      this._port = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._host = value.host;
      this._port = value.port;
    }
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}
export interface DataYandexMdbClickhouseClusterClickhouseConfigKafka {
  /**
  * Action to take when there is no initial offset in offset store or the desired offset is out of range: 'smallest','earliest' - automatically reset the offset to the smallest offset, 'largest','latest' - automatically reset the offset to the largest offset, 'error' - trigger an error (ERR__AUTO_OFFSET_RESET) which is retrieved by consuming messages and checking 'message->err'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#auto_offset_reset DataYandexMdbClickhouseCluster#auto_offset_reset}
  */
  readonly autoOffsetReset?: string;
  /**
  * A comma-separated list of debug contexts to enable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#debug DataYandexMdbClickhouseCluster#debug}
  */
  readonly debug?: string;
  /**
  * Enable verification of SSL certificates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#enable_ssl_certificate_verification DataYandexMdbClickhouseCluster#enable_ssl_certificate_verification}
  */
  readonly enableSslCertificateVerification?: boolean | cdktf.IResolvable;
  /**
  * Maximum allowed time between calls to consume messages (e.g., `rd_kafka_consumer_poll()` for high-level consumers. If this interval is exceeded the consumer is considered failed and the group will rebalance in order to reassign the partitions to another consumer group member.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#max_poll_interval_ms DataYandexMdbClickhouseCluster#max_poll_interval_ms}
  */
  readonly maxPollIntervalMs?: number;
  /**
  * SASL mechanism used in kafka authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#sasl_mechanism DataYandexMdbClickhouseCluster#sasl_mechanism}
  */
  readonly saslMechanism?: string;
  /**
  * User password on kafka server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#sasl_password DataYandexMdbClickhouseCluster#sasl_password}
  */
  readonly saslPassword?: string;
  /**
  * Username on kafka server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#sasl_username DataYandexMdbClickhouseCluster#sasl_username}
  */
  readonly saslUsername?: string;
  /**
  * Security protocol used to connect to kafka server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#security_protocol DataYandexMdbClickhouseCluster#security_protocol}
  */
  readonly securityProtocol?: string;
  /**
  * Client group session and failure detection timeout. The consumer sends periodic heartbeats (heartbeat.interval.ms) to indicate its liveness to the broker. If no hearts are received by the broker for a group member within the session timeout, the broker will remove the consumer from the group and trigger a rebalance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#session_timeout_ms DataYandexMdbClickhouseCluster#session_timeout_ms}
  */
  readonly sessionTimeoutMs?: number;
}

export function dataYandexMdbClickhouseClusterClickhouseConfigKafkaToTerraform(struct?: DataYandexMdbClickhouseClusterClickhouseConfigKafkaOutputReference | DataYandexMdbClickhouseClusterClickhouseConfigKafka): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_offset_reset: cdktf.stringToTerraform(struct!.autoOffsetReset),
    debug: cdktf.stringToTerraform(struct!.debug),
    enable_ssl_certificate_verification: cdktf.booleanToTerraform(struct!.enableSslCertificateVerification),
    max_poll_interval_ms: cdktf.numberToTerraform(struct!.maxPollIntervalMs),
    sasl_mechanism: cdktf.stringToTerraform(struct!.saslMechanism),
    sasl_password: cdktf.stringToTerraform(struct!.saslPassword),
    sasl_username: cdktf.stringToTerraform(struct!.saslUsername),
    security_protocol: cdktf.stringToTerraform(struct!.securityProtocol),
    session_timeout_ms: cdktf.numberToTerraform(struct!.sessionTimeoutMs),
  }
}


export function dataYandexMdbClickhouseClusterClickhouseConfigKafkaToHclTerraform(struct?: DataYandexMdbClickhouseClusterClickhouseConfigKafkaOutputReference | DataYandexMdbClickhouseClusterClickhouseConfigKafka): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_offset_reset: {
      value: cdktf.stringToHclTerraform(struct!.autoOffsetReset),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    debug: {
      value: cdktf.stringToHclTerraform(struct!.debug),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_ssl_certificate_verification: {
      value: cdktf.booleanToHclTerraform(struct!.enableSslCertificateVerification),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_poll_interval_ms: {
      value: cdktf.numberToHclTerraform(struct!.maxPollIntervalMs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sasl_mechanism: {
      value: cdktf.stringToHclTerraform(struct!.saslMechanism),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sasl_password: {
      value: cdktf.stringToHclTerraform(struct!.saslPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sasl_username: {
      value: cdktf.stringToHclTerraform(struct!.saslUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_protocol: {
      value: cdktf.stringToHclTerraform(struct!.securityProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_timeout_ms: {
      value: cdktf.numberToHclTerraform(struct!.sessionTimeoutMs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataYandexMdbClickhouseClusterClickhouseConfigKafkaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataYandexMdbClickhouseClusterClickhouseConfigKafka | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoOffsetReset !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoOffsetReset = this._autoOffsetReset;
    }
    if (this._debug !== undefined) {
      hasAnyValues = true;
      internalValueResult.debug = this._debug;
    }
    if (this._enableSslCertificateVerification !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableSslCertificateVerification = this._enableSslCertificateVerification;
    }
    if (this._maxPollIntervalMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPollIntervalMs = this._maxPollIntervalMs;
    }
    if (this._saslMechanism !== undefined) {
      hasAnyValues = true;
      internalValueResult.saslMechanism = this._saslMechanism;
    }
    if (this._saslPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.saslPassword = this._saslPassword;
    }
    if (this._saslUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.saslUsername = this._saslUsername;
    }
    if (this._securityProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityProtocol = this._securityProtocol;
    }
    if (this._sessionTimeoutMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionTimeoutMs = this._sessionTimeoutMs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbClickhouseClusterClickhouseConfigKafka | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoOffsetReset = undefined;
      this._debug = undefined;
      this._enableSslCertificateVerification = undefined;
      this._maxPollIntervalMs = undefined;
      this._saslMechanism = undefined;
      this._saslPassword = undefined;
      this._saslUsername = undefined;
      this._securityProtocol = undefined;
      this._sessionTimeoutMs = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoOffsetReset = value.autoOffsetReset;
      this._debug = value.debug;
      this._enableSslCertificateVerification = value.enableSslCertificateVerification;
      this._maxPollIntervalMs = value.maxPollIntervalMs;
      this._saslMechanism = value.saslMechanism;
      this._saslPassword = value.saslPassword;
      this._saslUsername = value.saslUsername;
      this._securityProtocol = value.securityProtocol;
      this._sessionTimeoutMs = value.sessionTimeoutMs;
    }
  }

  // auto_offset_reset - computed: true, optional: true, required: false
  private _autoOffsetReset?: string; 
  public get autoOffsetReset() {
    return this.getStringAttribute('auto_offset_reset');
  }
  public set autoOffsetReset(value: string) {
    this._autoOffsetReset = value;
  }
  public resetAutoOffsetReset() {
    this._autoOffsetReset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoOffsetResetInput() {
    return this._autoOffsetReset;
  }

  // debug - computed: true, optional: true, required: false
  private _debug?: string; 
  public get debug() {
    return this.getStringAttribute('debug');
  }
  public set debug(value: string) {
    this._debug = value;
  }
  public resetDebug() {
    this._debug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugInput() {
    return this._debug;
  }

  // enable_ssl_certificate_verification - computed: true, optional: true, required: false
  private _enableSslCertificateVerification?: boolean | cdktf.IResolvable; 
  public get enableSslCertificateVerification() {
    return this.getBooleanAttribute('enable_ssl_certificate_verification');
  }
  public set enableSslCertificateVerification(value: boolean | cdktf.IResolvable) {
    this._enableSslCertificateVerification = value;
  }
  public resetEnableSslCertificateVerification() {
    this._enableSslCertificateVerification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSslCertificateVerificationInput() {
    return this._enableSslCertificateVerification;
  }

  // max_poll_interval_ms - computed: true, optional: true, required: false
  private _maxPollIntervalMs?: number; 
  public get maxPollIntervalMs() {
    return this.getNumberAttribute('max_poll_interval_ms');
  }
  public set maxPollIntervalMs(value: number) {
    this._maxPollIntervalMs = value;
  }
  public resetMaxPollIntervalMs() {
    this._maxPollIntervalMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPollIntervalMsInput() {
    return this._maxPollIntervalMs;
  }

  // sasl_mechanism - computed: true, optional: true, required: false
  private _saslMechanism?: string; 
  public get saslMechanism() {
    return this.getStringAttribute('sasl_mechanism');
  }
  public set saslMechanism(value: string) {
    this._saslMechanism = value;
  }
  public resetSaslMechanism() {
    this._saslMechanism = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saslMechanismInput() {
    return this._saslMechanism;
  }

  // sasl_password - computed: true, optional: true, required: false
  private _saslPassword?: string; 
  public get saslPassword() {
    return this.getStringAttribute('sasl_password');
  }
  public set saslPassword(value: string) {
    this._saslPassword = value;
  }
  public resetSaslPassword() {
    this._saslPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saslPasswordInput() {
    return this._saslPassword;
  }

  // sasl_username - computed: true, optional: true, required: false
  private _saslUsername?: string; 
  public get saslUsername() {
    return this.getStringAttribute('sasl_username');
  }
  public set saslUsername(value: string) {
    this._saslUsername = value;
  }
  public resetSaslUsername() {
    this._saslUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saslUsernameInput() {
    return this._saslUsername;
  }

  // security_protocol - computed: true, optional: true, required: false
  private _securityProtocol?: string; 
  public get securityProtocol() {
    return this.getStringAttribute('security_protocol');
  }
  public set securityProtocol(value: string) {
    this._securityProtocol = value;
  }
  public resetSecurityProtocol() {
    this._securityProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityProtocolInput() {
    return this._securityProtocol;
  }

  // session_timeout_ms - computed: true, optional: true, required: false
  private _sessionTimeoutMs?: number; 
  public get sessionTimeoutMs() {
    return this.getNumberAttribute('session_timeout_ms');
  }
  public set sessionTimeoutMs(value: number) {
    this._sessionTimeoutMs = value;
  }
  public resetSessionTimeoutMs() {
    this._sessionTimeoutMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionTimeoutMsInput() {
    return this._sessionTimeoutMs;
  }
}
export interface DataYandexMdbClickhouseClusterClickhouseConfigKafkaTopicSettings {
  /**
  * Action to take when there is no initial offset in offset store or the desired offset is out of range: 'smallest','earliest' - automatically reset the offset to the smallest offset, 'largest','latest' - automatically reset the offset to the largest offset, 'error' - trigger an error (ERR__AUTO_OFFSET_RESET) which is retrieved by consuming messages and checking 'message->err'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#auto_offset_reset DataYandexMdbClickhouseCluster#auto_offset_reset}
  */
  readonly autoOffsetReset?: string;
  /**
  * A comma-separated list of debug contexts to enable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#debug DataYandexMdbClickhouseCluster#debug}
  */
  readonly debug?: string;
  /**
  * Enable verification of SSL certificates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#enable_ssl_certificate_verification DataYandexMdbClickhouseCluster#enable_ssl_certificate_verification}
  */
  readonly enableSslCertificateVerification?: boolean | cdktf.IResolvable;
  /**
  * Maximum allowed time between calls to consume messages (e.g., `rd_kafka_consumer_poll()` for high-level consumers. If this interval is exceeded the consumer is considered failed and the group will rebalance in order to reassign the partitions to another consumer group member.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#max_poll_interval_ms DataYandexMdbClickhouseCluster#max_poll_interval_ms}
  */
  readonly maxPollIntervalMs?: number;
  /**
  * SASL mechanism used in kafka authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#sasl_mechanism DataYandexMdbClickhouseCluster#sasl_mechanism}
  */
  readonly saslMechanism?: string;
  /**
  * User password on kafka server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#sasl_password DataYandexMdbClickhouseCluster#sasl_password}
  */
  readonly saslPassword?: string;
  /**
  * Username on kafka server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#sasl_username DataYandexMdbClickhouseCluster#sasl_username}
  */
  readonly saslUsername?: string;
  /**
  * Security protocol used to connect to kafka server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#security_protocol DataYandexMdbClickhouseCluster#security_protocol}
  */
  readonly securityProtocol?: string;
  /**
  * Client group session and failure detection timeout. The consumer sends periodic heartbeats (heartbeat.interval.ms) to indicate its liveness to the broker. If no hearts are received by the broker for a group member within the session timeout, the broker will remove the consumer from the group and trigger a rebalance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#session_timeout_ms DataYandexMdbClickhouseCluster#session_timeout_ms}
  */
  readonly sessionTimeoutMs?: number;
}

export function dataYandexMdbClickhouseClusterClickhouseConfigKafkaTopicSettingsToTerraform(struct?: DataYandexMdbClickhouseClusterClickhouseConfigKafkaTopicSettingsOutputReference | DataYandexMdbClickhouseClusterClickhouseConfigKafkaTopicSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_offset_reset: cdktf.stringToTerraform(struct!.autoOffsetReset),
    debug: cdktf.stringToTerraform(struct!.debug),
    enable_ssl_certificate_verification: cdktf.booleanToTerraform(struct!.enableSslCertificateVerification),
    max_poll_interval_ms: cdktf.numberToTerraform(struct!.maxPollIntervalMs),
    sasl_mechanism: cdktf.stringToTerraform(struct!.saslMechanism),
    sasl_password: cdktf.stringToTerraform(struct!.saslPassword),
    sasl_username: cdktf.stringToTerraform(struct!.saslUsername),
    security_protocol: cdktf.stringToTerraform(struct!.securityProtocol),
    session_timeout_ms: cdktf.numberToTerraform(struct!.sessionTimeoutMs),
  }
}


export function dataYandexMdbClickhouseClusterClickhouseConfigKafkaTopicSettingsToHclTerraform(struct?: DataYandexMdbClickhouseClusterClickhouseConfigKafkaTopicSettingsOutputReference | DataYandexMdbClickhouseClusterClickhouseConfigKafkaTopicSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_offset_reset: {
      value: cdktf.stringToHclTerraform(struct!.autoOffsetReset),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    debug: {
      value: cdktf.stringToHclTerraform(struct!.debug),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_ssl_certificate_verification: {
      value: cdktf.booleanToHclTerraform(struct!.enableSslCertificateVerification),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_poll_interval_ms: {
      value: cdktf.numberToHclTerraform(struct!.maxPollIntervalMs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sasl_mechanism: {
      value: cdktf.stringToHclTerraform(struct!.saslMechanism),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sasl_password: {
      value: cdktf.stringToHclTerraform(struct!.saslPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sasl_username: {
      value: cdktf.stringToHclTerraform(struct!.saslUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_protocol: {
      value: cdktf.stringToHclTerraform(struct!.securityProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_timeout_ms: {
      value: cdktf.numberToHclTerraform(struct!.sessionTimeoutMs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataYandexMdbClickhouseClusterClickhouseConfigKafkaTopicSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataYandexMdbClickhouseClusterClickhouseConfigKafkaTopicSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoOffsetReset !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoOffsetReset = this._autoOffsetReset;
    }
    if (this._debug !== undefined) {
      hasAnyValues = true;
      internalValueResult.debug = this._debug;
    }
    if (this._enableSslCertificateVerification !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableSslCertificateVerification = this._enableSslCertificateVerification;
    }
    if (this._maxPollIntervalMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPollIntervalMs = this._maxPollIntervalMs;
    }
    if (this._saslMechanism !== undefined) {
      hasAnyValues = true;
      internalValueResult.saslMechanism = this._saslMechanism;
    }
    if (this._saslPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.saslPassword = this._saslPassword;
    }
    if (this._saslUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.saslUsername = this._saslUsername;
    }
    if (this._securityProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityProtocol = this._securityProtocol;
    }
    if (this._sessionTimeoutMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionTimeoutMs = this._sessionTimeoutMs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbClickhouseClusterClickhouseConfigKafkaTopicSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoOffsetReset = undefined;
      this._debug = undefined;
      this._enableSslCertificateVerification = undefined;
      this._maxPollIntervalMs = undefined;
      this._saslMechanism = undefined;
      this._saslPassword = undefined;
      this._saslUsername = undefined;
      this._securityProtocol = undefined;
      this._sessionTimeoutMs = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoOffsetReset = value.autoOffsetReset;
      this._debug = value.debug;
      this._enableSslCertificateVerification = value.enableSslCertificateVerification;
      this._maxPollIntervalMs = value.maxPollIntervalMs;
      this._saslMechanism = value.saslMechanism;
      this._saslPassword = value.saslPassword;
      this._saslUsername = value.saslUsername;
      this._securityProtocol = value.securityProtocol;
      this._sessionTimeoutMs = value.sessionTimeoutMs;
    }
  }

  // auto_offset_reset - computed: true, optional: true, required: false
  private _autoOffsetReset?: string; 
  public get autoOffsetReset() {
    return this.getStringAttribute('auto_offset_reset');
  }
  public set autoOffsetReset(value: string) {
    this._autoOffsetReset = value;
  }
  public resetAutoOffsetReset() {
    this._autoOffsetReset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoOffsetResetInput() {
    return this._autoOffsetReset;
  }

  // debug - computed: true, optional: true, required: false
  private _debug?: string; 
  public get debug() {
    return this.getStringAttribute('debug');
  }
  public set debug(value: string) {
    this._debug = value;
  }
  public resetDebug() {
    this._debug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugInput() {
    return this._debug;
  }

  // enable_ssl_certificate_verification - computed: true, optional: true, required: false
  private _enableSslCertificateVerification?: boolean | cdktf.IResolvable; 
  public get enableSslCertificateVerification() {
    return this.getBooleanAttribute('enable_ssl_certificate_verification');
  }
  public set enableSslCertificateVerification(value: boolean | cdktf.IResolvable) {
    this._enableSslCertificateVerification = value;
  }
  public resetEnableSslCertificateVerification() {
    this._enableSslCertificateVerification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSslCertificateVerificationInput() {
    return this._enableSslCertificateVerification;
  }

  // max_poll_interval_ms - computed: true, optional: true, required: false
  private _maxPollIntervalMs?: number; 
  public get maxPollIntervalMs() {
    return this.getNumberAttribute('max_poll_interval_ms');
  }
  public set maxPollIntervalMs(value: number) {
    this._maxPollIntervalMs = value;
  }
  public resetMaxPollIntervalMs() {
    this._maxPollIntervalMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPollIntervalMsInput() {
    return this._maxPollIntervalMs;
  }

  // sasl_mechanism - computed: false, optional: true, required: false
  private _saslMechanism?: string; 
  public get saslMechanism() {
    return this.getStringAttribute('sasl_mechanism');
  }
  public set saslMechanism(value: string) {
    this._saslMechanism = value;
  }
  public resetSaslMechanism() {
    this._saslMechanism = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saslMechanismInput() {
    return this._saslMechanism;
  }

  // sasl_password - computed: false, optional: true, required: false
  private _saslPassword?: string; 
  public get saslPassword() {
    return this.getStringAttribute('sasl_password');
  }
  public set saslPassword(value: string) {
    this._saslPassword = value;
  }
  public resetSaslPassword() {
    this._saslPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saslPasswordInput() {
    return this._saslPassword;
  }

  // sasl_username - computed: false, optional: true, required: false
  private _saslUsername?: string; 
  public get saslUsername() {
    return this.getStringAttribute('sasl_username');
  }
  public set saslUsername(value: string) {
    this._saslUsername = value;
  }
  public resetSaslUsername() {
    this._saslUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saslUsernameInput() {
    return this._saslUsername;
  }

  // security_protocol - computed: false, optional: true, required: false
  private _securityProtocol?: string; 
  public get securityProtocol() {
    return this.getStringAttribute('security_protocol');
  }
  public set securityProtocol(value: string) {
    this._securityProtocol = value;
  }
  public resetSecurityProtocol() {
    this._securityProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityProtocolInput() {
    return this._securityProtocol;
  }

  // session_timeout_ms - computed: true, optional: true, required: false
  private _sessionTimeoutMs?: number; 
  public get sessionTimeoutMs() {
    return this.getNumberAttribute('session_timeout_ms');
  }
  public set sessionTimeoutMs(value: number) {
    this._sessionTimeoutMs = value;
  }
  public resetSessionTimeoutMs() {
    this._sessionTimeoutMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionTimeoutMsInput() {
    return this._sessionTimeoutMs;
  }
}
export interface DataYandexMdbClickhouseClusterClickhouseConfigKafkaTopic {
  /**
  * Kafka topic name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#name DataYandexMdbClickhouseCluster#name}
  */
  readonly name?: string;
  /**
  * settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#settings DataYandexMdbClickhouseCluster#settings}
  */
  readonly settings?: DataYandexMdbClickhouseClusterClickhouseConfigKafkaTopicSettings;
}

export function dataYandexMdbClickhouseClusterClickhouseConfigKafkaTopicToTerraform(struct?: DataYandexMdbClickhouseClusterClickhouseConfigKafkaTopic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    settings: dataYandexMdbClickhouseClusterClickhouseConfigKafkaTopicSettingsToTerraform(struct!.settings),
  }
}


export function dataYandexMdbClickhouseClusterClickhouseConfigKafkaTopicToHclTerraform(struct?: DataYandexMdbClickhouseClusterClickhouseConfigKafkaTopic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    settings: {
      value: dataYandexMdbClickhouseClusterClickhouseConfigKafkaTopicSettingsToHclTerraform(struct!.settings),
      isBlock: true,
      type: "list",
      storageClassType: "DataYandexMdbClickhouseClusterClickhouseConfigKafkaTopicSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataYandexMdbClickhouseClusterClickhouseConfigKafkaTopicOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataYandexMdbClickhouseClusterClickhouseConfigKafkaTopic | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._settings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.settings = this._settings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbClickhouseClusterClickhouseConfigKafkaTopic | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._settings.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._settings.internalValue = value.settings;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // settings - computed: false, optional: true, required: false
  private _settings = new DataYandexMdbClickhouseClusterClickhouseConfigKafkaTopicSettingsOutputReference(this, "settings");
  public get settings() {
    return this._settings;
  }
  public putSettings(value: DataYandexMdbClickhouseClusterClickhouseConfigKafkaTopicSettings) {
    this._settings.internalValue = value;
  }
  public resetSettings() {
    this._settings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings.internalValue;
  }
}

export class DataYandexMdbClickhouseClusterClickhouseConfigKafkaTopicList extends cdktf.ComplexList {
  public internalValue? : DataYandexMdbClickhouseClusterClickhouseConfigKafkaTopic[] | cdktf.IResolvable

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
  public get(index: number): DataYandexMdbClickhouseClusterClickhouseConfigKafkaTopicOutputReference {
    return new DataYandexMdbClickhouseClusterClickhouseConfigKafkaTopicOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexMdbClickhouseClusterClickhouseConfigMergeTree {
  /**
  * When this setting has a value greater than zero only a single replica starts the merge immediately if merged part on shared storage and allow_remote_fs_zero_copy_replication is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#allow_remote_fs_zero_copy_replication DataYandexMdbClickhouseCluster#allow_remote_fs_zero_copy_replication}
  */
  readonly allowRemoteFsZeroCopyReplication?: boolean | cdktf.IResolvable;
  /**
  * Enables the check at table creation, that the data type of a column for sampling or sampling expression is correct. The data type must be one of unsigned integer types: UInt8, UInt16, UInt32, UInt64. Default value: true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#check_sample_column_is_correct DataYandexMdbClickhouseCluster#check_sample_column_is_correct}
  */
  readonly checkSampleColumnIsCorrect?: boolean | cdktf.IResolvable;
  /**
  * Minimum period to clean old queue logs, blocks hashes and parts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#cleanup_delay_period DataYandexMdbClickhouseCluster#cleanup_delay_period}
  */
  readonly cleanupDelayPeriod?: number;
  /**
  * If the number of inactive parts in a single partition in the table at least that many the inactive_parts_to_delay_insert value, an INSERT artificially slows down. It is useful when a server fails to clean up parts quickly enough.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#inactive_parts_to_delay_insert DataYandexMdbClickhouseCluster#inactive_parts_to_delay_insert}
  */
  readonly inactivePartsToDelayInsert?: number;
  /**
  * If the number of inactive parts in a single partition more than the inactive_parts_to_throw_insert value, INSERT is interrupted with the `Too many inactive parts (N). Parts cleaning are processing significantly slower than inserts` exception.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#inactive_parts_to_throw_insert DataYandexMdbClickhouseCluster#inactive_parts_to_throw_insert}
  */
  readonly inactivePartsToThrowInsert?: number;
  /**
  * The `too many parts` check according to `parts_to_delay_insert` and `parts_to_throw_insert` will be active only if the average part size (in the relevant partition) is not larger than the specified threshold. If it is larger than the specified threshold, the INSERTs will be neither delayed or rejected. This allows to have hundreds of terabytes in a single table on a single server if the parts are successfully merged to larger parts. This does not affect the thresholds on inactive parts or total parts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#max_avg_part_size_for_too_many_parts DataYandexMdbClickhouseCluster#max_avg_part_size_for_too_many_parts}
  */
  readonly maxAvgPartSizeForTooManyParts?: number;
  /**
  * The maximum total parts size (in bytes) to be merged into one part, if there are enough resources available. max_bytes_to_merge_at_max_space_in_pool -- roughly corresponds to the maximum possible part size created by an automatic background merge.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#max_bytes_to_merge_at_max_space_in_pool DataYandexMdbClickhouseCluster#max_bytes_to_merge_at_max_space_in_pool}
  */
  readonly maxBytesToMergeAtMaxSpaceInPool?: number;
  /**
  * Max bytes to merge at min space in pool: Maximum total size of a data part to merge when the number of free threads in the background pool is minimum.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#max_bytes_to_merge_at_min_space_in_pool DataYandexMdbClickhouseCluster#max_bytes_to_merge_at_min_space_in_pool}
  */
  readonly maxBytesToMergeAtMinSpaceInPool?: number;
  /**
  * Maximum period to clean old queue logs, blocks hashes and parts. Default value: 300 seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#max_cleanup_delay_period DataYandexMdbClickhouseCluster#max_cleanup_delay_period}
  */
  readonly maxCleanupDelayPeriod?: number;
  /**
  * Maximum sleep time for merge selecting, a lower setting will trigger selecting tasks in background_schedule_pool frequently which result in large amount of requests to zookeeper in large-scale clusters. Default value: 60000 milliseconds (60 seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#max_merge_selecting_sleep_ms DataYandexMdbClickhouseCluster#max_merge_selecting_sleep_ms}
  */
  readonly maxMergeSelectingSleepMs?: number;
  /**
  * When there is more than specified number of merges with TTL entries in pool, do not assign new merge with TTL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#max_number_of_merges_with_ttl_in_pool DataYandexMdbClickhouseCluster#max_number_of_merges_with_ttl_in_pool}
  */
  readonly maxNumberOfMergesWithTtlInPool?: number;
  /**
  * Maximum number of parts in all partitions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#max_parts_in_total DataYandexMdbClickhouseCluster#max_parts_in_total}
  */
  readonly maxPartsInTotal?: number;
  /**
  * Max replicated merges in queue: Maximum number of merge tasks that can be in the ReplicatedMergeTree queue at the same time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#max_replicated_merges_in_queue DataYandexMdbClickhouseCluster#max_replicated_merges_in_queue}
  */
  readonly maxReplicatedMergesInQueue?: number;
  /**
  * The number of rows that are read from the merged parts into memory. Default value: 8192.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#merge_max_block_size DataYandexMdbClickhouseCluster#merge_max_block_size}
  */
  readonly mergeMaxBlockSize?: number;
  /**
  * Sleep time for merge selecting when no part is selected. A lower setting triggers selecting tasks in background_schedule_pool frequently, which results in a large number of requests to ClickHouse Keeper in large-scale clusters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#merge_selecting_sleep_ms DataYandexMdbClickhouseCluster#merge_selecting_sleep_ms}
  */
  readonly mergeSelectingSleepMs?: number;
  /**
  * Minimum delay in seconds before repeating a merge with recompression TTL. Default value: 14400 seconds (4 hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#merge_with_recompression_ttl_timeout DataYandexMdbClickhouseCluster#merge_with_recompression_ttl_timeout}
  */
  readonly mergeWithRecompressionTtlTimeout?: number;
  /**
  * Minimum delay in seconds before repeating a merge with delete TTL. Default value: 14400 seconds (4 hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#merge_with_ttl_timeout DataYandexMdbClickhouseCluster#merge_with_ttl_timeout}
  */
  readonly mergeWithTtlTimeout?: number;
  /**
  * Whether min_age_to_force_merge_seconds should be applied only on the entire partition and not on subset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#min_age_to_force_merge_on_partition_only DataYandexMdbClickhouseCluster#min_age_to_force_merge_on_partition_only}
  */
  readonly minAgeToForceMergeOnPartitionOnly?: boolean | cdktf.IResolvable;
  /**
  * Merge parts if every part in the range is older than the value of `min_age_to_force_merge_seconds`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#min_age_to_force_merge_seconds DataYandexMdbClickhouseCluster#min_age_to_force_merge_seconds}
  */
  readonly minAgeToForceMergeSeconds?: number;
  /**
  * Minimum number of bytes in a data part that can be stored in Wide format. You can set one, both or none of these settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#min_bytes_for_wide_part DataYandexMdbClickhouseCluster#min_bytes_for_wide_part}
  */
  readonly minBytesForWidePart?: number;
  /**
  * Minimum number of rows in a data part that can be stored in Wide format. You can set one, both or none of these settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#min_rows_for_wide_part DataYandexMdbClickhouseCluster#min_rows_for_wide_part}
  */
  readonly minRowsForWidePart?: number;
  /**
  * When there is less than specified number of free entries in pool, do not execute part mutations. This is to leave free threads for regular merges and avoid `Too many parts`. Default value: 20.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#number_of_free_entries_in_pool_to_execute_mutation DataYandexMdbClickhouseCluster#number_of_free_entries_in_pool_to_execute_mutation}
  */
  readonly numberOfFreeEntriesInPoolToExecuteMutation?: number;
  /**
  * Number of free entries in pool to lower max size of merge: Threshold value of free entries in the pool. If the number of entries in the pool falls below this value, ClickHouse reduces the maximum size of a data part to merge. This helps handle small merges faster, rather than filling the pool with lengthy merges.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#number_of_free_entries_in_pool_to_lower_max_size_of_merge DataYandexMdbClickhouseCluster#number_of_free_entries_in_pool_to_lower_max_size_of_merge}
  */
  readonly numberOfFreeEntriesInPoolToLowerMaxSizeOfMerge?: number;
  /**
  * Parts to delay insert: Number of active data parts in a table, on exceeding which ClickHouse starts artificially reduce the rate of inserting data into the table
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#parts_to_delay_insert DataYandexMdbClickhouseCluster#parts_to_delay_insert}
  */
  readonly partsToDelayInsert?: number;
  /**
  * Parts to throw insert: Threshold value of active data parts in a table, on exceeding which ClickHouse throws the 'Too many parts ...' exception.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#parts_to_throw_insert DataYandexMdbClickhouseCluster#parts_to_throw_insert}
  */
  readonly partsToThrowInsert?: number;
  /**
  * Replicated deduplication window: Number of recent hash blocks that ZooKeeper will store (the old ones will be deleted).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#replicated_deduplication_window DataYandexMdbClickhouseCluster#replicated_deduplication_window}
  */
  readonly replicatedDeduplicationWindow?: number;
  /**
  * Replicated deduplication window seconds: Time during which ZooKeeper stores the hash blocks (the old ones wil be deleted).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#replicated_deduplication_window_seconds DataYandexMdbClickhouseCluster#replicated_deduplication_window_seconds}
  */
  readonly replicatedDeduplicationWindowSeconds?: number;
  /**
  * Enables zero-copy replication when a replica is located on a remote filesystem.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#ttl_only_drop_parts DataYandexMdbClickhouseCluster#ttl_only_drop_parts}
  */
  readonly ttlOnlyDropParts?: boolean | cdktf.IResolvable;
}

export function dataYandexMdbClickhouseClusterClickhouseConfigMergeTreeToTerraform(struct?: DataYandexMdbClickhouseClusterClickhouseConfigMergeTreeOutputReference | DataYandexMdbClickhouseClusterClickhouseConfigMergeTree): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_remote_fs_zero_copy_replication: cdktf.booleanToTerraform(struct!.allowRemoteFsZeroCopyReplication),
    check_sample_column_is_correct: cdktf.booleanToTerraform(struct!.checkSampleColumnIsCorrect),
    cleanup_delay_period: cdktf.numberToTerraform(struct!.cleanupDelayPeriod),
    inactive_parts_to_delay_insert: cdktf.numberToTerraform(struct!.inactivePartsToDelayInsert),
    inactive_parts_to_throw_insert: cdktf.numberToTerraform(struct!.inactivePartsToThrowInsert),
    max_avg_part_size_for_too_many_parts: cdktf.numberToTerraform(struct!.maxAvgPartSizeForTooManyParts),
    max_bytes_to_merge_at_max_space_in_pool: cdktf.numberToTerraform(struct!.maxBytesToMergeAtMaxSpaceInPool),
    max_bytes_to_merge_at_min_space_in_pool: cdktf.numberToTerraform(struct!.maxBytesToMergeAtMinSpaceInPool),
    max_cleanup_delay_period: cdktf.numberToTerraform(struct!.maxCleanupDelayPeriod),
    max_merge_selecting_sleep_ms: cdktf.numberToTerraform(struct!.maxMergeSelectingSleepMs),
    max_number_of_merges_with_ttl_in_pool: cdktf.numberToTerraform(struct!.maxNumberOfMergesWithTtlInPool),
    max_parts_in_total: cdktf.numberToTerraform(struct!.maxPartsInTotal),
    max_replicated_merges_in_queue: cdktf.numberToTerraform(struct!.maxReplicatedMergesInQueue),
    merge_max_block_size: cdktf.numberToTerraform(struct!.mergeMaxBlockSize),
    merge_selecting_sleep_ms: cdktf.numberToTerraform(struct!.mergeSelectingSleepMs),
    merge_with_recompression_ttl_timeout: cdktf.numberToTerraform(struct!.mergeWithRecompressionTtlTimeout),
    merge_with_ttl_timeout: cdktf.numberToTerraform(struct!.mergeWithTtlTimeout),
    min_age_to_force_merge_on_partition_only: cdktf.booleanToTerraform(struct!.minAgeToForceMergeOnPartitionOnly),
    min_age_to_force_merge_seconds: cdktf.numberToTerraform(struct!.minAgeToForceMergeSeconds),
    min_bytes_for_wide_part: cdktf.numberToTerraform(struct!.minBytesForWidePart),
    min_rows_for_wide_part: cdktf.numberToTerraform(struct!.minRowsForWidePart),
    number_of_free_entries_in_pool_to_execute_mutation: cdktf.numberToTerraform(struct!.numberOfFreeEntriesInPoolToExecuteMutation),
    number_of_free_entries_in_pool_to_lower_max_size_of_merge: cdktf.numberToTerraform(struct!.numberOfFreeEntriesInPoolToLowerMaxSizeOfMerge),
    parts_to_delay_insert: cdktf.numberToTerraform(struct!.partsToDelayInsert),
    parts_to_throw_insert: cdktf.numberToTerraform(struct!.partsToThrowInsert),
    replicated_deduplication_window: cdktf.numberToTerraform(struct!.replicatedDeduplicationWindow),
    replicated_deduplication_window_seconds: cdktf.numberToTerraform(struct!.replicatedDeduplicationWindowSeconds),
    ttl_only_drop_parts: cdktf.booleanToTerraform(struct!.ttlOnlyDropParts),
  }
}


export function dataYandexMdbClickhouseClusterClickhouseConfigMergeTreeToHclTerraform(struct?: DataYandexMdbClickhouseClusterClickhouseConfigMergeTreeOutputReference | DataYandexMdbClickhouseClusterClickhouseConfigMergeTree): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_remote_fs_zero_copy_replication: {
      value: cdktf.booleanToHclTerraform(struct!.allowRemoteFsZeroCopyReplication),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    check_sample_column_is_correct: {
      value: cdktf.booleanToHclTerraform(struct!.checkSampleColumnIsCorrect),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cleanup_delay_period: {
      value: cdktf.numberToHclTerraform(struct!.cleanupDelayPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    inactive_parts_to_delay_insert: {
      value: cdktf.numberToHclTerraform(struct!.inactivePartsToDelayInsert),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    inactive_parts_to_throw_insert: {
      value: cdktf.numberToHclTerraform(struct!.inactivePartsToThrowInsert),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_avg_part_size_for_too_many_parts: {
      value: cdktf.numberToHclTerraform(struct!.maxAvgPartSizeForTooManyParts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_bytes_to_merge_at_max_space_in_pool: {
      value: cdktf.numberToHclTerraform(struct!.maxBytesToMergeAtMaxSpaceInPool),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_bytes_to_merge_at_min_space_in_pool: {
      value: cdktf.numberToHclTerraform(struct!.maxBytesToMergeAtMinSpaceInPool),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_cleanup_delay_period: {
      value: cdktf.numberToHclTerraform(struct!.maxCleanupDelayPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_merge_selecting_sleep_ms: {
      value: cdktf.numberToHclTerraform(struct!.maxMergeSelectingSleepMs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_number_of_merges_with_ttl_in_pool: {
      value: cdktf.numberToHclTerraform(struct!.maxNumberOfMergesWithTtlInPool),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_parts_in_total: {
      value: cdktf.numberToHclTerraform(struct!.maxPartsInTotal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_replicated_merges_in_queue: {
      value: cdktf.numberToHclTerraform(struct!.maxReplicatedMergesInQueue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    merge_max_block_size: {
      value: cdktf.numberToHclTerraform(struct!.mergeMaxBlockSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    merge_selecting_sleep_ms: {
      value: cdktf.numberToHclTerraform(struct!.mergeSelectingSleepMs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    merge_with_recompression_ttl_timeout: {
      value: cdktf.numberToHclTerraform(struct!.mergeWithRecompressionTtlTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    merge_with_ttl_timeout: {
      value: cdktf.numberToHclTerraform(struct!.mergeWithTtlTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_age_to_force_merge_on_partition_only: {
      value: cdktf.booleanToHclTerraform(struct!.minAgeToForceMergeOnPartitionOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    min_age_to_force_merge_seconds: {
      value: cdktf.numberToHclTerraform(struct!.minAgeToForceMergeSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_bytes_for_wide_part: {
      value: cdktf.numberToHclTerraform(struct!.minBytesForWidePart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_rows_for_wide_part: {
      value: cdktf.numberToHclTerraform(struct!.minRowsForWidePart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    number_of_free_entries_in_pool_to_execute_mutation: {
      value: cdktf.numberToHclTerraform(struct!.numberOfFreeEntriesInPoolToExecuteMutation),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    number_of_free_entries_in_pool_to_lower_max_size_of_merge: {
      value: cdktf.numberToHclTerraform(struct!.numberOfFreeEntriesInPoolToLowerMaxSizeOfMerge),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    parts_to_delay_insert: {
      value: cdktf.numberToHclTerraform(struct!.partsToDelayInsert),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    parts_to_throw_insert: {
      value: cdktf.numberToHclTerraform(struct!.partsToThrowInsert),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    replicated_deduplication_window: {
      value: cdktf.numberToHclTerraform(struct!.replicatedDeduplicationWindow),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    replicated_deduplication_window_seconds: {
      value: cdktf.numberToHclTerraform(struct!.replicatedDeduplicationWindowSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ttl_only_drop_parts: {
      value: cdktf.booleanToHclTerraform(struct!.ttlOnlyDropParts),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataYandexMdbClickhouseClusterClickhouseConfigMergeTreeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataYandexMdbClickhouseClusterClickhouseConfigMergeTree | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowRemoteFsZeroCopyReplication !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowRemoteFsZeroCopyReplication = this._allowRemoteFsZeroCopyReplication;
    }
    if (this._checkSampleColumnIsCorrect !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkSampleColumnIsCorrect = this._checkSampleColumnIsCorrect;
    }
    if (this._cleanupDelayPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.cleanupDelayPeriod = this._cleanupDelayPeriod;
    }
    if (this._inactivePartsToDelayInsert !== undefined) {
      hasAnyValues = true;
      internalValueResult.inactivePartsToDelayInsert = this._inactivePartsToDelayInsert;
    }
    if (this._inactivePartsToThrowInsert !== undefined) {
      hasAnyValues = true;
      internalValueResult.inactivePartsToThrowInsert = this._inactivePartsToThrowInsert;
    }
    if (this._maxAvgPartSizeForTooManyParts !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAvgPartSizeForTooManyParts = this._maxAvgPartSizeForTooManyParts;
    }
    if (this._maxBytesToMergeAtMaxSpaceInPool !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxBytesToMergeAtMaxSpaceInPool = this._maxBytesToMergeAtMaxSpaceInPool;
    }
    if (this._maxBytesToMergeAtMinSpaceInPool !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxBytesToMergeAtMinSpaceInPool = this._maxBytesToMergeAtMinSpaceInPool;
    }
    if (this._maxCleanupDelayPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxCleanupDelayPeriod = this._maxCleanupDelayPeriod;
    }
    if (this._maxMergeSelectingSleepMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxMergeSelectingSleepMs = this._maxMergeSelectingSleepMs;
    }
    if (this._maxNumberOfMergesWithTtlInPool !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxNumberOfMergesWithTtlInPool = this._maxNumberOfMergesWithTtlInPool;
    }
    if (this._maxPartsInTotal !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPartsInTotal = this._maxPartsInTotal;
    }
    if (this._maxReplicatedMergesInQueue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxReplicatedMergesInQueue = this._maxReplicatedMergesInQueue;
    }
    if (this._mergeMaxBlockSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.mergeMaxBlockSize = this._mergeMaxBlockSize;
    }
    if (this._mergeSelectingSleepMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.mergeSelectingSleepMs = this._mergeSelectingSleepMs;
    }
    if (this._mergeWithRecompressionTtlTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.mergeWithRecompressionTtlTimeout = this._mergeWithRecompressionTtlTimeout;
    }
    if (this._mergeWithTtlTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.mergeWithTtlTimeout = this._mergeWithTtlTimeout;
    }
    if (this._minAgeToForceMergeOnPartitionOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.minAgeToForceMergeOnPartitionOnly = this._minAgeToForceMergeOnPartitionOnly;
    }
    if (this._minAgeToForceMergeSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.minAgeToForceMergeSeconds = this._minAgeToForceMergeSeconds;
    }
    if (this._minBytesForWidePart !== undefined) {
      hasAnyValues = true;
      internalValueResult.minBytesForWidePart = this._minBytesForWidePart;
    }
    if (this._minRowsForWidePart !== undefined) {
      hasAnyValues = true;
      internalValueResult.minRowsForWidePart = this._minRowsForWidePart;
    }
    if (this._numberOfFreeEntriesInPoolToExecuteMutation !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberOfFreeEntriesInPoolToExecuteMutation = this._numberOfFreeEntriesInPoolToExecuteMutation;
    }
    if (this._numberOfFreeEntriesInPoolToLowerMaxSizeOfMerge !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberOfFreeEntriesInPoolToLowerMaxSizeOfMerge = this._numberOfFreeEntriesInPoolToLowerMaxSizeOfMerge;
    }
    if (this._partsToDelayInsert !== undefined) {
      hasAnyValues = true;
      internalValueResult.partsToDelayInsert = this._partsToDelayInsert;
    }
    if (this._partsToThrowInsert !== undefined) {
      hasAnyValues = true;
      internalValueResult.partsToThrowInsert = this._partsToThrowInsert;
    }
    if (this._replicatedDeduplicationWindow !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicatedDeduplicationWindow = this._replicatedDeduplicationWindow;
    }
    if (this._replicatedDeduplicationWindowSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicatedDeduplicationWindowSeconds = this._replicatedDeduplicationWindowSeconds;
    }
    if (this._ttlOnlyDropParts !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttlOnlyDropParts = this._ttlOnlyDropParts;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbClickhouseClusterClickhouseConfigMergeTree | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowRemoteFsZeroCopyReplication = undefined;
      this._checkSampleColumnIsCorrect = undefined;
      this._cleanupDelayPeriod = undefined;
      this._inactivePartsToDelayInsert = undefined;
      this._inactivePartsToThrowInsert = undefined;
      this._maxAvgPartSizeForTooManyParts = undefined;
      this._maxBytesToMergeAtMaxSpaceInPool = undefined;
      this._maxBytesToMergeAtMinSpaceInPool = undefined;
      this._maxCleanupDelayPeriod = undefined;
      this._maxMergeSelectingSleepMs = undefined;
      this._maxNumberOfMergesWithTtlInPool = undefined;
      this._maxPartsInTotal = undefined;
      this._maxReplicatedMergesInQueue = undefined;
      this._mergeMaxBlockSize = undefined;
      this._mergeSelectingSleepMs = undefined;
      this._mergeWithRecompressionTtlTimeout = undefined;
      this._mergeWithTtlTimeout = undefined;
      this._minAgeToForceMergeOnPartitionOnly = undefined;
      this._minAgeToForceMergeSeconds = undefined;
      this._minBytesForWidePart = undefined;
      this._minRowsForWidePart = undefined;
      this._numberOfFreeEntriesInPoolToExecuteMutation = undefined;
      this._numberOfFreeEntriesInPoolToLowerMaxSizeOfMerge = undefined;
      this._partsToDelayInsert = undefined;
      this._partsToThrowInsert = undefined;
      this._replicatedDeduplicationWindow = undefined;
      this._replicatedDeduplicationWindowSeconds = undefined;
      this._ttlOnlyDropParts = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowRemoteFsZeroCopyReplication = value.allowRemoteFsZeroCopyReplication;
      this._checkSampleColumnIsCorrect = value.checkSampleColumnIsCorrect;
      this._cleanupDelayPeriod = value.cleanupDelayPeriod;
      this._inactivePartsToDelayInsert = value.inactivePartsToDelayInsert;
      this._inactivePartsToThrowInsert = value.inactivePartsToThrowInsert;
      this._maxAvgPartSizeForTooManyParts = value.maxAvgPartSizeForTooManyParts;
      this._maxBytesToMergeAtMaxSpaceInPool = value.maxBytesToMergeAtMaxSpaceInPool;
      this._maxBytesToMergeAtMinSpaceInPool = value.maxBytesToMergeAtMinSpaceInPool;
      this._maxCleanupDelayPeriod = value.maxCleanupDelayPeriod;
      this._maxMergeSelectingSleepMs = value.maxMergeSelectingSleepMs;
      this._maxNumberOfMergesWithTtlInPool = value.maxNumberOfMergesWithTtlInPool;
      this._maxPartsInTotal = value.maxPartsInTotal;
      this._maxReplicatedMergesInQueue = value.maxReplicatedMergesInQueue;
      this._mergeMaxBlockSize = value.mergeMaxBlockSize;
      this._mergeSelectingSleepMs = value.mergeSelectingSleepMs;
      this._mergeWithRecompressionTtlTimeout = value.mergeWithRecompressionTtlTimeout;
      this._mergeWithTtlTimeout = value.mergeWithTtlTimeout;
      this._minAgeToForceMergeOnPartitionOnly = value.minAgeToForceMergeOnPartitionOnly;
      this._minAgeToForceMergeSeconds = value.minAgeToForceMergeSeconds;
      this._minBytesForWidePart = value.minBytesForWidePart;
      this._minRowsForWidePart = value.minRowsForWidePart;
      this._numberOfFreeEntriesInPoolToExecuteMutation = value.numberOfFreeEntriesInPoolToExecuteMutation;
      this._numberOfFreeEntriesInPoolToLowerMaxSizeOfMerge = value.numberOfFreeEntriesInPoolToLowerMaxSizeOfMerge;
      this._partsToDelayInsert = value.partsToDelayInsert;
      this._partsToThrowInsert = value.partsToThrowInsert;
      this._replicatedDeduplicationWindow = value.replicatedDeduplicationWindow;
      this._replicatedDeduplicationWindowSeconds = value.replicatedDeduplicationWindowSeconds;
      this._ttlOnlyDropParts = value.ttlOnlyDropParts;
    }
  }

  // allow_remote_fs_zero_copy_replication - computed: true, optional: true, required: false
  private _allowRemoteFsZeroCopyReplication?: boolean | cdktf.IResolvable; 
  public get allowRemoteFsZeroCopyReplication() {
    return this.getBooleanAttribute('allow_remote_fs_zero_copy_replication');
  }
  public set allowRemoteFsZeroCopyReplication(value: boolean | cdktf.IResolvable) {
    this._allowRemoteFsZeroCopyReplication = value;
  }
  public resetAllowRemoteFsZeroCopyReplication() {
    this._allowRemoteFsZeroCopyReplication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowRemoteFsZeroCopyReplicationInput() {
    return this._allowRemoteFsZeroCopyReplication;
  }

  // check_sample_column_is_correct - computed: true, optional: true, required: false
  private _checkSampleColumnIsCorrect?: boolean | cdktf.IResolvable; 
  public get checkSampleColumnIsCorrect() {
    return this.getBooleanAttribute('check_sample_column_is_correct');
  }
  public set checkSampleColumnIsCorrect(value: boolean | cdktf.IResolvable) {
    this._checkSampleColumnIsCorrect = value;
  }
  public resetCheckSampleColumnIsCorrect() {
    this._checkSampleColumnIsCorrect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkSampleColumnIsCorrectInput() {
    return this._checkSampleColumnIsCorrect;
  }

  // cleanup_delay_period - computed: true, optional: true, required: false
  private _cleanupDelayPeriod?: number; 
  public get cleanupDelayPeriod() {
    return this.getNumberAttribute('cleanup_delay_period');
  }
  public set cleanupDelayPeriod(value: number) {
    this._cleanupDelayPeriod = value;
  }
  public resetCleanupDelayPeriod() {
    this._cleanupDelayPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cleanupDelayPeriodInput() {
    return this._cleanupDelayPeriod;
  }

  // inactive_parts_to_delay_insert - computed: true, optional: true, required: false
  private _inactivePartsToDelayInsert?: number; 
  public get inactivePartsToDelayInsert() {
    return this.getNumberAttribute('inactive_parts_to_delay_insert');
  }
  public set inactivePartsToDelayInsert(value: number) {
    this._inactivePartsToDelayInsert = value;
  }
  public resetInactivePartsToDelayInsert() {
    this._inactivePartsToDelayInsert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inactivePartsToDelayInsertInput() {
    return this._inactivePartsToDelayInsert;
  }

  // inactive_parts_to_throw_insert - computed: true, optional: true, required: false
  private _inactivePartsToThrowInsert?: number; 
  public get inactivePartsToThrowInsert() {
    return this.getNumberAttribute('inactive_parts_to_throw_insert');
  }
  public set inactivePartsToThrowInsert(value: number) {
    this._inactivePartsToThrowInsert = value;
  }
  public resetInactivePartsToThrowInsert() {
    this._inactivePartsToThrowInsert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inactivePartsToThrowInsertInput() {
    return this._inactivePartsToThrowInsert;
  }

  // max_avg_part_size_for_too_many_parts - computed: true, optional: true, required: false
  private _maxAvgPartSizeForTooManyParts?: number; 
  public get maxAvgPartSizeForTooManyParts() {
    return this.getNumberAttribute('max_avg_part_size_for_too_many_parts');
  }
  public set maxAvgPartSizeForTooManyParts(value: number) {
    this._maxAvgPartSizeForTooManyParts = value;
  }
  public resetMaxAvgPartSizeForTooManyParts() {
    this._maxAvgPartSizeForTooManyParts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAvgPartSizeForTooManyPartsInput() {
    return this._maxAvgPartSizeForTooManyParts;
  }

  // max_bytes_to_merge_at_max_space_in_pool - computed: true, optional: true, required: false
  private _maxBytesToMergeAtMaxSpaceInPool?: number; 
  public get maxBytesToMergeAtMaxSpaceInPool() {
    return this.getNumberAttribute('max_bytes_to_merge_at_max_space_in_pool');
  }
  public set maxBytesToMergeAtMaxSpaceInPool(value: number) {
    this._maxBytesToMergeAtMaxSpaceInPool = value;
  }
  public resetMaxBytesToMergeAtMaxSpaceInPool() {
    this._maxBytesToMergeAtMaxSpaceInPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBytesToMergeAtMaxSpaceInPoolInput() {
    return this._maxBytesToMergeAtMaxSpaceInPool;
  }

  // max_bytes_to_merge_at_min_space_in_pool - computed: true, optional: true, required: false
  private _maxBytesToMergeAtMinSpaceInPool?: number; 
  public get maxBytesToMergeAtMinSpaceInPool() {
    return this.getNumberAttribute('max_bytes_to_merge_at_min_space_in_pool');
  }
  public set maxBytesToMergeAtMinSpaceInPool(value: number) {
    this._maxBytesToMergeAtMinSpaceInPool = value;
  }
  public resetMaxBytesToMergeAtMinSpaceInPool() {
    this._maxBytesToMergeAtMinSpaceInPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBytesToMergeAtMinSpaceInPoolInput() {
    return this._maxBytesToMergeAtMinSpaceInPool;
  }

  // max_cleanup_delay_period - computed: true, optional: true, required: false
  private _maxCleanupDelayPeriod?: number; 
  public get maxCleanupDelayPeriod() {
    return this.getNumberAttribute('max_cleanup_delay_period');
  }
  public set maxCleanupDelayPeriod(value: number) {
    this._maxCleanupDelayPeriod = value;
  }
  public resetMaxCleanupDelayPeriod() {
    this._maxCleanupDelayPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCleanupDelayPeriodInput() {
    return this._maxCleanupDelayPeriod;
  }

  // max_merge_selecting_sleep_ms - computed: true, optional: true, required: false
  private _maxMergeSelectingSleepMs?: number; 
  public get maxMergeSelectingSleepMs() {
    return this.getNumberAttribute('max_merge_selecting_sleep_ms');
  }
  public set maxMergeSelectingSleepMs(value: number) {
    this._maxMergeSelectingSleepMs = value;
  }
  public resetMaxMergeSelectingSleepMs() {
    this._maxMergeSelectingSleepMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxMergeSelectingSleepMsInput() {
    return this._maxMergeSelectingSleepMs;
  }

  // max_number_of_merges_with_ttl_in_pool - computed: true, optional: true, required: false
  private _maxNumberOfMergesWithTtlInPool?: number; 
  public get maxNumberOfMergesWithTtlInPool() {
    return this.getNumberAttribute('max_number_of_merges_with_ttl_in_pool');
  }
  public set maxNumberOfMergesWithTtlInPool(value: number) {
    this._maxNumberOfMergesWithTtlInPool = value;
  }
  public resetMaxNumberOfMergesWithTtlInPool() {
    this._maxNumberOfMergesWithTtlInPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNumberOfMergesWithTtlInPoolInput() {
    return this._maxNumberOfMergesWithTtlInPool;
  }

  // max_parts_in_total - computed: true, optional: true, required: false
  private _maxPartsInTotal?: number; 
  public get maxPartsInTotal() {
    return this.getNumberAttribute('max_parts_in_total');
  }
  public set maxPartsInTotal(value: number) {
    this._maxPartsInTotal = value;
  }
  public resetMaxPartsInTotal() {
    this._maxPartsInTotal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPartsInTotalInput() {
    return this._maxPartsInTotal;
  }

  // max_replicated_merges_in_queue - computed: true, optional: true, required: false
  private _maxReplicatedMergesInQueue?: number; 
  public get maxReplicatedMergesInQueue() {
    return this.getNumberAttribute('max_replicated_merges_in_queue');
  }
  public set maxReplicatedMergesInQueue(value: number) {
    this._maxReplicatedMergesInQueue = value;
  }
  public resetMaxReplicatedMergesInQueue() {
    this._maxReplicatedMergesInQueue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxReplicatedMergesInQueueInput() {
    return this._maxReplicatedMergesInQueue;
  }

  // merge_max_block_size - computed: true, optional: true, required: false
  private _mergeMaxBlockSize?: number; 
  public get mergeMaxBlockSize() {
    return this.getNumberAttribute('merge_max_block_size');
  }
  public set mergeMaxBlockSize(value: number) {
    this._mergeMaxBlockSize = value;
  }
  public resetMergeMaxBlockSize() {
    this._mergeMaxBlockSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mergeMaxBlockSizeInput() {
    return this._mergeMaxBlockSize;
  }

  // merge_selecting_sleep_ms - computed: true, optional: true, required: false
  private _mergeSelectingSleepMs?: number; 
  public get mergeSelectingSleepMs() {
    return this.getNumberAttribute('merge_selecting_sleep_ms');
  }
  public set mergeSelectingSleepMs(value: number) {
    this._mergeSelectingSleepMs = value;
  }
  public resetMergeSelectingSleepMs() {
    this._mergeSelectingSleepMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mergeSelectingSleepMsInput() {
    return this._mergeSelectingSleepMs;
  }

  // merge_with_recompression_ttl_timeout - computed: true, optional: true, required: false
  private _mergeWithRecompressionTtlTimeout?: number; 
  public get mergeWithRecompressionTtlTimeout() {
    return this.getNumberAttribute('merge_with_recompression_ttl_timeout');
  }
  public set mergeWithRecompressionTtlTimeout(value: number) {
    this._mergeWithRecompressionTtlTimeout = value;
  }
  public resetMergeWithRecompressionTtlTimeout() {
    this._mergeWithRecompressionTtlTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mergeWithRecompressionTtlTimeoutInput() {
    return this._mergeWithRecompressionTtlTimeout;
  }

  // merge_with_ttl_timeout - computed: true, optional: true, required: false
  private _mergeWithTtlTimeout?: number; 
  public get mergeWithTtlTimeout() {
    return this.getNumberAttribute('merge_with_ttl_timeout');
  }
  public set mergeWithTtlTimeout(value: number) {
    this._mergeWithTtlTimeout = value;
  }
  public resetMergeWithTtlTimeout() {
    this._mergeWithTtlTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mergeWithTtlTimeoutInput() {
    return this._mergeWithTtlTimeout;
  }

  // min_age_to_force_merge_on_partition_only - computed: true, optional: true, required: false
  private _minAgeToForceMergeOnPartitionOnly?: boolean | cdktf.IResolvable; 
  public get minAgeToForceMergeOnPartitionOnly() {
    return this.getBooleanAttribute('min_age_to_force_merge_on_partition_only');
  }
  public set minAgeToForceMergeOnPartitionOnly(value: boolean | cdktf.IResolvable) {
    this._minAgeToForceMergeOnPartitionOnly = value;
  }
  public resetMinAgeToForceMergeOnPartitionOnly() {
    this._minAgeToForceMergeOnPartitionOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minAgeToForceMergeOnPartitionOnlyInput() {
    return this._minAgeToForceMergeOnPartitionOnly;
  }

  // min_age_to_force_merge_seconds - computed: true, optional: true, required: false
  private _minAgeToForceMergeSeconds?: number; 
  public get minAgeToForceMergeSeconds() {
    return this.getNumberAttribute('min_age_to_force_merge_seconds');
  }
  public set minAgeToForceMergeSeconds(value: number) {
    this._minAgeToForceMergeSeconds = value;
  }
  public resetMinAgeToForceMergeSeconds() {
    this._minAgeToForceMergeSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minAgeToForceMergeSecondsInput() {
    return this._minAgeToForceMergeSeconds;
  }

  // min_bytes_for_wide_part - computed: true, optional: true, required: false
  private _minBytesForWidePart?: number; 
  public get minBytesForWidePart() {
    return this.getNumberAttribute('min_bytes_for_wide_part');
  }
  public set minBytesForWidePart(value: number) {
    this._minBytesForWidePart = value;
  }
  public resetMinBytesForWidePart() {
    this._minBytesForWidePart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minBytesForWidePartInput() {
    return this._minBytesForWidePart;
  }

  // min_rows_for_wide_part - computed: true, optional: true, required: false
  private _minRowsForWidePart?: number; 
  public get minRowsForWidePart() {
    return this.getNumberAttribute('min_rows_for_wide_part');
  }
  public set minRowsForWidePart(value: number) {
    this._minRowsForWidePart = value;
  }
  public resetMinRowsForWidePart() {
    this._minRowsForWidePart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minRowsForWidePartInput() {
    return this._minRowsForWidePart;
  }

  // number_of_free_entries_in_pool_to_execute_mutation - computed: true, optional: true, required: false
  private _numberOfFreeEntriesInPoolToExecuteMutation?: number; 
  public get numberOfFreeEntriesInPoolToExecuteMutation() {
    return this.getNumberAttribute('number_of_free_entries_in_pool_to_execute_mutation');
  }
  public set numberOfFreeEntriesInPoolToExecuteMutation(value: number) {
    this._numberOfFreeEntriesInPoolToExecuteMutation = value;
  }
  public resetNumberOfFreeEntriesInPoolToExecuteMutation() {
    this._numberOfFreeEntriesInPoolToExecuteMutation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfFreeEntriesInPoolToExecuteMutationInput() {
    return this._numberOfFreeEntriesInPoolToExecuteMutation;
  }

  // number_of_free_entries_in_pool_to_lower_max_size_of_merge - computed: true, optional: true, required: false
  private _numberOfFreeEntriesInPoolToLowerMaxSizeOfMerge?: number; 
  public get numberOfFreeEntriesInPoolToLowerMaxSizeOfMerge() {
    return this.getNumberAttribute('number_of_free_entries_in_pool_to_lower_max_size_of_merge');
  }
  public set numberOfFreeEntriesInPoolToLowerMaxSizeOfMerge(value: number) {
    this._numberOfFreeEntriesInPoolToLowerMaxSizeOfMerge = value;
  }
  public resetNumberOfFreeEntriesInPoolToLowerMaxSizeOfMerge() {
    this._numberOfFreeEntriesInPoolToLowerMaxSizeOfMerge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfFreeEntriesInPoolToLowerMaxSizeOfMergeInput() {
    return this._numberOfFreeEntriesInPoolToLowerMaxSizeOfMerge;
  }

  // parts_to_delay_insert - computed: true, optional: true, required: false
  private _partsToDelayInsert?: number; 
  public get partsToDelayInsert() {
    return this.getNumberAttribute('parts_to_delay_insert');
  }
  public set partsToDelayInsert(value: number) {
    this._partsToDelayInsert = value;
  }
  public resetPartsToDelayInsert() {
    this._partsToDelayInsert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partsToDelayInsertInput() {
    return this._partsToDelayInsert;
  }

  // parts_to_throw_insert - computed: true, optional: true, required: false
  private _partsToThrowInsert?: number; 
  public get partsToThrowInsert() {
    return this.getNumberAttribute('parts_to_throw_insert');
  }
  public set partsToThrowInsert(value: number) {
    this._partsToThrowInsert = value;
  }
  public resetPartsToThrowInsert() {
    this._partsToThrowInsert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partsToThrowInsertInput() {
    return this._partsToThrowInsert;
  }

  // replicated_deduplication_window - computed: true, optional: true, required: false
  private _replicatedDeduplicationWindow?: number; 
  public get replicatedDeduplicationWindow() {
    return this.getNumberAttribute('replicated_deduplication_window');
  }
  public set replicatedDeduplicationWindow(value: number) {
    this._replicatedDeduplicationWindow = value;
  }
  public resetReplicatedDeduplicationWindow() {
    this._replicatedDeduplicationWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicatedDeduplicationWindowInput() {
    return this._replicatedDeduplicationWindow;
  }

  // replicated_deduplication_window_seconds - computed: true, optional: true, required: false
  private _replicatedDeduplicationWindowSeconds?: number; 
  public get replicatedDeduplicationWindowSeconds() {
    return this.getNumberAttribute('replicated_deduplication_window_seconds');
  }
  public set replicatedDeduplicationWindowSeconds(value: number) {
    this._replicatedDeduplicationWindowSeconds = value;
  }
  public resetReplicatedDeduplicationWindowSeconds() {
    this._replicatedDeduplicationWindowSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicatedDeduplicationWindowSecondsInput() {
    return this._replicatedDeduplicationWindowSeconds;
  }

  // ttl_only_drop_parts - computed: true, optional: true, required: false
  private _ttlOnlyDropParts?: boolean | cdktf.IResolvable; 
  public get ttlOnlyDropParts() {
    return this.getBooleanAttribute('ttl_only_drop_parts');
  }
  public set ttlOnlyDropParts(value: boolean | cdktf.IResolvable) {
    this._ttlOnlyDropParts = value;
  }
  public resetTtlOnlyDropParts() {
    this._ttlOnlyDropParts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlOnlyDropPartsInput() {
    return this._ttlOnlyDropParts;
  }
}
export interface DataYandexMdbClickhouseClusterClickhouseConfigQueryCache {
  /**
  * The maximum number of SELECT query results stored in the cache. Default value: 1024.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#max_entries DataYandexMdbClickhouseCluster#max_entries}
  */
  readonly maxEntries?: number;
  /**
  * The maximum size in bytes SELECT query results may have to be saved in the cache. Default value: 1048576 (1 MiB).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#max_entry_size_in_bytes DataYandexMdbClickhouseCluster#max_entry_size_in_bytes}
  */
  readonly maxEntrySizeInBytes?: number;
  /**
  * The maximum number of rows SELECT query results may have to be saved in the cache. Default value: 30000000 (30 mil).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#max_entry_size_in_rows DataYandexMdbClickhouseCluster#max_entry_size_in_rows}
  */
  readonly maxEntrySizeInRows?: number;
  /**
  * The maximum cache size in bytes. 0 means the query cache is disabled. Default value: 1073741824 (1 GiB).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#max_size_in_bytes DataYandexMdbClickhouseCluster#max_size_in_bytes}
  */
  readonly maxSizeInBytes?: number;
}

export function dataYandexMdbClickhouseClusterClickhouseConfigQueryCacheToTerraform(struct?: DataYandexMdbClickhouseClusterClickhouseConfigQueryCacheOutputReference | DataYandexMdbClickhouseClusterClickhouseConfigQueryCache): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_entries: cdktf.numberToTerraform(struct!.maxEntries),
    max_entry_size_in_bytes: cdktf.numberToTerraform(struct!.maxEntrySizeInBytes),
    max_entry_size_in_rows: cdktf.numberToTerraform(struct!.maxEntrySizeInRows),
    max_size_in_bytes: cdktf.numberToTerraform(struct!.maxSizeInBytes),
  }
}


export function dataYandexMdbClickhouseClusterClickhouseConfigQueryCacheToHclTerraform(struct?: DataYandexMdbClickhouseClusterClickhouseConfigQueryCacheOutputReference | DataYandexMdbClickhouseClusterClickhouseConfigQueryCache): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_entries: {
      value: cdktf.numberToHclTerraform(struct!.maxEntries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_entry_size_in_bytes: {
      value: cdktf.numberToHclTerraform(struct!.maxEntrySizeInBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_entry_size_in_rows: {
      value: cdktf.numberToHclTerraform(struct!.maxEntrySizeInRows),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_size_in_bytes: {
      value: cdktf.numberToHclTerraform(struct!.maxSizeInBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataYandexMdbClickhouseClusterClickhouseConfigQueryCacheOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataYandexMdbClickhouseClusterClickhouseConfigQueryCache | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxEntries !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxEntries = this._maxEntries;
    }
    if (this._maxEntrySizeInBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxEntrySizeInBytes = this._maxEntrySizeInBytes;
    }
    if (this._maxEntrySizeInRows !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxEntrySizeInRows = this._maxEntrySizeInRows;
    }
    if (this._maxSizeInBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSizeInBytes = this._maxSizeInBytes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbClickhouseClusterClickhouseConfigQueryCache | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxEntries = undefined;
      this._maxEntrySizeInBytes = undefined;
      this._maxEntrySizeInRows = undefined;
      this._maxSizeInBytes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxEntries = value.maxEntries;
      this._maxEntrySizeInBytes = value.maxEntrySizeInBytes;
      this._maxEntrySizeInRows = value.maxEntrySizeInRows;
      this._maxSizeInBytes = value.maxSizeInBytes;
    }
  }

  // max_entries - computed: true, optional: true, required: false
  private _maxEntries?: number; 
  public get maxEntries() {
    return this.getNumberAttribute('max_entries');
  }
  public set maxEntries(value: number) {
    this._maxEntries = value;
  }
  public resetMaxEntries() {
    this._maxEntries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxEntriesInput() {
    return this._maxEntries;
  }

  // max_entry_size_in_bytes - computed: true, optional: true, required: false
  private _maxEntrySizeInBytes?: number; 
  public get maxEntrySizeInBytes() {
    return this.getNumberAttribute('max_entry_size_in_bytes');
  }
  public set maxEntrySizeInBytes(value: number) {
    this._maxEntrySizeInBytes = value;
  }
  public resetMaxEntrySizeInBytes() {
    this._maxEntrySizeInBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxEntrySizeInBytesInput() {
    return this._maxEntrySizeInBytes;
  }

  // max_entry_size_in_rows - computed: true, optional: true, required: false
  private _maxEntrySizeInRows?: number; 
  public get maxEntrySizeInRows() {
    return this.getNumberAttribute('max_entry_size_in_rows');
  }
  public set maxEntrySizeInRows(value: number) {
    this._maxEntrySizeInRows = value;
  }
  public resetMaxEntrySizeInRows() {
    this._maxEntrySizeInRows = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxEntrySizeInRowsInput() {
    return this._maxEntrySizeInRows;
  }

  // max_size_in_bytes - computed: true, optional: true, required: false
  private _maxSizeInBytes?: number; 
  public get maxSizeInBytes() {
    return this.getNumberAttribute('max_size_in_bytes');
  }
  public set maxSizeInBytes(value: number) {
    this._maxSizeInBytes = value;
  }
  public resetMaxSizeInBytes() {
    this._maxSizeInBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSizeInBytesInput() {
    return this._maxSizeInBytes;
  }
}
export interface DataYandexMdbClickhouseClusterClickhouseConfigQueryMaskingRules {
  /**
  * Name for the rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#name DataYandexMdbClickhouseCluster#name}
  */
  readonly name?: string;
  /**
  * RE2 compatible regular expression.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#regexp DataYandexMdbClickhouseCluster#regexp}
  */
  readonly regexp?: string;
  /**
  * Substitution string for sensitive data. Default value: six asterisks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#replace DataYandexMdbClickhouseCluster#replace}
  */
  readonly replace?: string;
}

export function dataYandexMdbClickhouseClusterClickhouseConfigQueryMaskingRulesToTerraform(struct?: DataYandexMdbClickhouseClusterClickhouseConfigQueryMaskingRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    regexp: cdktf.stringToTerraform(struct!.regexp),
    replace: cdktf.stringToTerraform(struct!.replace),
  }
}


export function dataYandexMdbClickhouseClusterClickhouseConfigQueryMaskingRulesToHclTerraform(struct?: DataYandexMdbClickhouseClusterClickhouseConfigQueryMaskingRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regexp: {
      value: cdktf.stringToHclTerraform(struct!.regexp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replace: {
      value: cdktf.stringToHclTerraform(struct!.replace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataYandexMdbClickhouseClusterClickhouseConfigQueryMaskingRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataYandexMdbClickhouseClusterClickhouseConfigQueryMaskingRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._regexp !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexp = this._regexp;
    }
    if (this._replace !== undefined) {
      hasAnyValues = true;
      internalValueResult.replace = this._replace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbClickhouseClusterClickhouseConfigQueryMaskingRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._regexp = undefined;
      this._replace = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._regexp = value.regexp;
      this._replace = value.replace;
    }
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // regexp - computed: false, optional: true, required: false
  private _regexp?: string; 
  public get regexp() {
    return this.getStringAttribute('regexp');
  }
  public set regexp(value: string) {
    this._regexp = value;
  }
  public resetRegexp() {
    this._regexp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexpInput() {
    return this._regexp;
  }

  // replace - computed: true, optional: true, required: false
  private _replace?: string; 
  public get replace() {
    return this.getStringAttribute('replace');
  }
  public set replace(value: string) {
    this._replace = value;
  }
  public resetReplace() {
    this._replace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceInput() {
    return this._replace;
  }
}

export class DataYandexMdbClickhouseClusterClickhouseConfigQueryMaskingRulesList extends cdktf.ComplexList {
  public internalValue? : DataYandexMdbClickhouseClusterClickhouseConfigQueryMaskingRules[] | cdktf.IResolvable

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
  public get(index: number): DataYandexMdbClickhouseClusterClickhouseConfigQueryMaskingRulesOutputReference {
    return new DataYandexMdbClickhouseClusterClickhouseConfigQueryMaskingRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexMdbClickhouseClusterClickhouseConfigRabbitmq {
  /**
  * RabbitMQ user password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#password DataYandexMdbClickhouseCluster#password}
  */
  readonly password?: string;
  /**
  * RabbitMQ username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#username DataYandexMdbClickhouseCluster#username}
  */
  readonly username?: string;
  /**
  * RabbitMQ vhost. Default: `\`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#vhost DataYandexMdbClickhouseCluster#vhost}
  */
  readonly vhost?: string;
}

export function dataYandexMdbClickhouseClusterClickhouseConfigRabbitmqToTerraform(struct?: DataYandexMdbClickhouseClusterClickhouseConfigRabbitmqOutputReference | DataYandexMdbClickhouseClusterClickhouseConfigRabbitmq): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
    vhost: cdktf.stringToTerraform(struct!.vhost),
  }
}


export function dataYandexMdbClickhouseClusterClickhouseConfigRabbitmqToHclTerraform(struct?: DataYandexMdbClickhouseClusterClickhouseConfigRabbitmqOutputReference | DataYandexMdbClickhouseClusterClickhouseConfigRabbitmq): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vhost: {
      value: cdktf.stringToHclTerraform(struct!.vhost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataYandexMdbClickhouseClusterClickhouseConfigRabbitmqOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataYandexMdbClickhouseClusterClickhouseConfigRabbitmq | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._vhost !== undefined) {
      hasAnyValues = true;
      internalValueResult.vhost = this._vhost;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbClickhouseClusterClickhouseConfigRabbitmq | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._password = undefined;
      this._username = undefined;
      this._vhost = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._password = value.password;
      this._username = value.username;
      this._vhost = value.vhost;
    }
  }

  // password - computed: true, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // username - computed: true, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // vhost - computed: true, optional: true, required: false
  private _vhost?: string; 
  public get vhost() {
    return this.getStringAttribute('vhost');
  }
  public set vhost(value: string) {
    this._vhost = value;
  }
  public resetVhost() {
    this._vhost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vhostInput() {
    return this._vhost;
  }
}
export interface DataYandexMdbClickhouseClusterClickhouseConfig {
  /**
  * Enable or disable asynchronous_insert_log system table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#asynchronous_insert_log_enabled DataYandexMdbClickhouseCluster#asynchronous_insert_log_enabled}
  */
  readonly asynchronousInsertLogEnabled?: boolean | cdktf.IResolvable;
  /**
  * The maximum size that asynchronous_insert_log can grow to before old data will be removed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#asynchronous_insert_log_retention_size DataYandexMdbClickhouseCluster#asynchronous_insert_log_retention_size}
  */
  readonly asynchronousInsertLogRetentionSize?: number;
  /**
  * The maximum time that asynchronous_insert_log records will be retained before removal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#asynchronous_insert_log_retention_time DataYandexMdbClickhouseCluster#asynchronous_insert_log_retention_time}
  */
  readonly asynchronousInsertLogRetentionTime?: number;
  /**
  * Enable or disable asynchronous_metric_log system table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#asynchronous_metric_log_enabled DataYandexMdbClickhouseCluster#asynchronous_metric_log_enabled}
  */
  readonly asynchronousMetricLogEnabled?: boolean | cdktf.IResolvable;
  /**
  * The maximum size that asynchronous_metric_log can grow to before old data will be removed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#asynchronous_metric_log_retention_size DataYandexMdbClickhouseCluster#asynchronous_metric_log_retention_size}
  */
  readonly asynchronousMetricLogRetentionSize?: number;
  /**
  * The maximum time that asynchronous_metric_log records will be retained before removal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#asynchronous_metric_log_retention_time DataYandexMdbClickhouseCluster#asynchronous_metric_log_retention_time}
  */
  readonly asynchronousMetricLogRetentionTime?: number;
  /**
  * The maximum number of threads that will be used for performing flush operations for Buffer-engine tables in the background.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#background_buffer_flush_schedule_pool_size DataYandexMdbClickhouseCluster#background_buffer_flush_schedule_pool_size}
  */
  readonly backgroundBufferFlushSchedulePoolSize?: number;
  /**
  * The maximum number of threads that will be used for performing a variety of operations (mostly garbage collection) for MergeTree-engine tables in a background.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#background_common_pool_size DataYandexMdbClickhouseCluster#background_common_pool_size}
  */
  readonly backgroundCommonPoolSize?: number;
  /**
  * The maximum number of threads that will be used for executing distributed sends.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#background_distributed_schedule_pool_size DataYandexMdbClickhouseCluster#background_distributed_schedule_pool_size}
  */
  readonly backgroundDistributedSchedulePoolSize?: number;
  /**
  * The maximum number of threads that will be used for fetching data parts from another replica for MergeTree-engine tables in a background.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#background_fetches_pool_size DataYandexMdbClickhouseCluster#background_fetches_pool_size}
  */
  readonly backgroundFetchesPoolSize?: number;
  /**
  * Sets a ratio between the number of threads and the number of background merges and mutations that can be executed concurrently.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#background_merges_mutations_concurrency_ratio DataYandexMdbClickhouseCluster#background_merges_mutations_concurrency_ratio}
  */
  readonly backgroundMergesMutationsConcurrencyRatio?: number;
  /**
  * The maximum number of threads that will be used for executing background operations for message streaming.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#background_message_broker_schedule_pool_size DataYandexMdbClickhouseCluster#background_message_broker_schedule_pool_size}
  */
  readonly backgroundMessageBrokerSchedulePoolSize?: number;
  /**
  * The maximum number of threads that will be used for moving data parts to another disk or volume for MergeTree-engine tables in a background.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#background_move_pool_size DataYandexMdbClickhouseCluster#background_move_pool_size}
  */
  readonly backgroundMovePoolSize?: number;
  /**
  * Sets the number of threads performing background merges and mutations for MergeTree-engine tables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#background_pool_size DataYandexMdbClickhouseCluster#background_pool_size}
  */
  readonly backgroundPoolSize?: number;
  /**
  * The maximum number of threads that will be used for constantly executing some lightweight periodic operations for replicated tables, Kafka streaming, and DNS cache updates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#background_schedule_pool_size DataYandexMdbClickhouseCluster#background_schedule_pool_size}
  */
  readonly backgroundSchedulePoolSize?: number;
  /**
  * Default database name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#default_database DataYandexMdbClickhouseCluster#default_database}
  */
  readonly defaultDatabase?: string;
  /**
  * Lazy loading of dictionaries. If true, then each dictionary is loaded on the first use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#dictionaries_lazy_load DataYandexMdbClickhouseCluster#dictionaries_lazy_load}
  */
  readonly dictionariesLazyLoad?: boolean | cdktf.IResolvable;
  /**
  * Enable or disable geobase.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#geobase_enabled DataYandexMdbClickhouseCluster#geobase_enabled}
  */
  readonly geobaseEnabled?: boolean | cdktf.IResolvable;
  /**
  * Address of the archive with the user geobase in Object Storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#geobase_uri DataYandexMdbClickhouseCluster#geobase_uri}
  */
  readonly geobaseUri?: string;
  /**
  * The number of seconds that ClickHouse waits for incoming requests for HTTP protocol before closing the connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#keep_alive_timeout DataYandexMdbClickhouseCluster#keep_alive_timeout}
  */
  readonly keepAliveTimeout?: number;
  /**
  * Logging level.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#log_level DataYandexMdbClickhouseCluster#log_level}
  */
  readonly logLevel?: string;
  /**
  * Maximum size of cache for marks 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#mark_cache_size DataYandexMdbClickhouseCluster#mark_cache_size}
  */
  readonly markCacheSize?: number;
  /**
  * Limit on total number of concurrently executed queries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#max_concurrent_queries DataYandexMdbClickhouseCluster#max_concurrent_queries}
  */
  readonly maxConcurrentQueries?: number;
  /**
  * Max server connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#max_connections DataYandexMdbClickhouseCluster#max_connections}
  */
  readonly maxConnections?: number;
  /**
  * Restriction on dropping partitions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#max_partition_size_to_drop DataYandexMdbClickhouseCluster#max_partition_size_to_drop}
  */
  readonly maxPartitionSizeToDrop?: number;
  /**
  * Restriction on deleting tables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#max_table_size_to_drop DataYandexMdbClickhouseCluster#max_table_size_to_drop}
  */
  readonly maxTableSizeToDrop?: number;
  /**
  * Enable or disable metric_log system table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#metric_log_enabled DataYandexMdbClickhouseCluster#metric_log_enabled}
  */
  readonly metricLogEnabled?: boolean | cdktf.IResolvable;
  /**
  * The maximum size that metric_log can grow to before old data will be removed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#metric_log_retention_size DataYandexMdbClickhouseCluster#metric_log_retention_size}
  */
  readonly metricLogRetentionSize?: number;
  /**
  * The maximum time that metric_log records will be retained before removal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#metric_log_retention_time DataYandexMdbClickhouseCluster#metric_log_retention_time}
  */
  readonly metricLogRetentionTime?: number;
  /**
  * Enable or disable opentelemetry_span_log system table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#opentelemetry_span_log_enabled DataYandexMdbClickhouseCluster#opentelemetry_span_log_enabled}
  */
  readonly opentelemetrySpanLogEnabled?: boolean | cdktf.IResolvable;
  /**
  * The maximum size that opentelemetry_span_log can grow to before old data will be removed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#opentelemetry_span_log_retention_size DataYandexMdbClickhouseCluster#opentelemetry_span_log_retention_size}
  */
  readonly opentelemetrySpanLogRetentionSize?: number;
  /**
  * The maximum time that opentelemetry_span_log records will be retained before removal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#opentelemetry_span_log_retention_time DataYandexMdbClickhouseCluster#opentelemetry_span_log_retention_time}
  */
  readonly opentelemetrySpanLogRetentionTime?: number;
  /**
  * The maximum size that part_log can grow to before old data will be removed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#part_log_retention_size DataYandexMdbClickhouseCluster#part_log_retention_size}
  */
  readonly partLogRetentionSize?: number;
  /**
  * The maximum time that part_log records will be retained before removal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#part_log_retention_time DataYandexMdbClickhouseCluster#part_log_retention_time}
  */
  readonly partLogRetentionTime?: number;
  /**
  * The maximum size that query_log can grow to before old data will be removed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#query_log_retention_size DataYandexMdbClickhouseCluster#query_log_retention_size}
  */
  readonly queryLogRetentionSize?: number;
  /**
  * The maximum time that query_log records will be retained before removal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#query_log_retention_time DataYandexMdbClickhouseCluster#query_log_retention_time}
  */
  readonly queryLogRetentionTime?: number;
  /**
  * Enable or disable query_thread_log system table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#query_thread_log_enabled DataYandexMdbClickhouseCluster#query_thread_log_enabled}
  */
  readonly queryThreadLogEnabled?: boolean | cdktf.IResolvable;
  /**
  * The maximum size that query_thread_log can grow to before old data will be removed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#query_thread_log_retention_size DataYandexMdbClickhouseCluster#query_thread_log_retention_size}
  */
  readonly queryThreadLogRetentionSize?: number;
  /**
  * The maximum time that query_thread_log records will be retained before removal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#query_thread_log_retention_time DataYandexMdbClickhouseCluster#query_thread_log_retention_time}
  */
  readonly queryThreadLogRetentionTime?: number;
  /**
  * Enable or disable query_views_log system table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#query_views_log_enabled DataYandexMdbClickhouseCluster#query_views_log_enabled}
  */
  readonly queryViewsLogEnabled?: boolean | cdktf.IResolvable;
  /**
  * The maximum size that query_views_log can grow to before old data will be removed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#query_views_log_retention_size DataYandexMdbClickhouseCluster#query_views_log_retention_size}
  */
  readonly queryViewsLogRetentionSize?: number;
  /**
  * The maximum time that query_views_log records will be retained before removal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#query_views_log_retention_time DataYandexMdbClickhouseCluster#query_views_log_retention_time}
  */
  readonly queryViewsLogRetentionTime?: number;
  /**
  * Enable or disable session_log system table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#session_log_enabled DataYandexMdbClickhouseCluster#session_log_enabled}
  */
  readonly sessionLogEnabled?: boolean | cdktf.IResolvable;
  /**
  * The maximum size that session_log can grow to before old data will be removed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#session_log_retention_size DataYandexMdbClickhouseCluster#session_log_retention_size}
  */
  readonly sessionLogRetentionSize?: number;
  /**
  * The maximum time that session_log records will be retained before removal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#session_log_retention_time DataYandexMdbClickhouseCluster#session_log_retention_time}
  */
  readonly sessionLogRetentionTime?: number;
  /**
  * Enable or disable text_log system table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#text_log_enabled DataYandexMdbClickhouseCluster#text_log_enabled}
  */
  readonly textLogEnabled?: boolean | cdktf.IResolvable;
  /**
  * Logging level for text_log system table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#text_log_level DataYandexMdbClickhouseCluster#text_log_level}
  */
  readonly textLogLevel?: string;
  /**
  * The maximum size that text_log can grow to before old data will be removed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#text_log_retention_size DataYandexMdbClickhouseCluster#text_log_retention_size}
  */
  readonly textLogRetentionSize?: number;
  /**
  * The maximum time that text_log records will be retained before removal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#text_log_retention_time DataYandexMdbClickhouseCluster#text_log_retention_time}
  */
  readonly textLogRetentionTime?: number;
  /**
  * The server's time zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#timezone DataYandexMdbClickhouseCluster#timezone}
  */
  readonly timezone?: string;
  /**
  * Whenever server memory usage becomes larger than every next step in number of bytes the memory profiler will collect the allocating stack trace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#total_memory_profiler_step DataYandexMdbClickhouseCluster#total_memory_profiler_step}
  */
  readonly totalMemoryProfilerStep?: number;
  /**
  * Enable or disable trace_log system table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#trace_log_enabled DataYandexMdbClickhouseCluster#trace_log_enabled}
  */
  readonly traceLogEnabled?: boolean | cdktf.IResolvable;
  /**
  * The maximum size that trace_log can grow to before old data will be removed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#trace_log_retention_size DataYandexMdbClickhouseCluster#trace_log_retention_size}
  */
  readonly traceLogRetentionSize?: number;
  /**
  * The maximum time that trace_log records will be retained before removal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#trace_log_retention_time DataYandexMdbClickhouseCluster#trace_log_retention_time}
  */
  readonly traceLogRetentionTime?: number;
  /**
  * Cache size (in bytes) for uncompressed data used by table engines from the MergeTree family. Zero means disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#uncompressed_cache_size DataYandexMdbClickhouseCluster#uncompressed_cache_size}
  */
  readonly uncompressedCacheSize?: number;
  /**
  * Enable or disable zookeeper_log system table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#zookeeper_log_enabled DataYandexMdbClickhouseCluster#zookeeper_log_enabled}
  */
  readonly zookeeperLogEnabled?: boolean | cdktf.IResolvable;
  /**
  * The maximum size that zookeeper_log can grow to before old data will be removed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#zookeeper_log_retention_size DataYandexMdbClickhouseCluster#zookeeper_log_retention_size}
  */
  readonly zookeeperLogRetentionSize?: number;
  /**
  * The maximum time that zookeeper_log records will be retained before removal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#zookeeper_log_retention_time DataYandexMdbClickhouseCluster#zookeeper_log_retention_time}
  */
  readonly zookeeperLogRetentionTime?: number;
  /**
  * compression block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#compression DataYandexMdbClickhouseCluster#compression}
  */
  readonly compression?: DataYandexMdbClickhouseClusterClickhouseConfigCompression[] | cdktf.IResolvable;
  /**
  * graphite_rollup block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#graphite_rollup DataYandexMdbClickhouseCluster#graphite_rollup}
  */
  readonly graphiteRollup?: DataYandexMdbClickhouseClusterClickhouseConfigGraphiteRollup[] | cdktf.IResolvable;
  /**
  * jdbc_bridge block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#jdbc_bridge DataYandexMdbClickhouseCluster#jdbc_bridge}
  */
  readonly jdbcBridge?: DataYandexMdbClickhouseClusterClickhouseConfigJdbcBridge;
  /**
  * kafka block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#kafka DataYandexMdbClickhouseCluster#kafka}
  */
  readonly kafka?: DataYandexMdbClickhouseClusterClickhouseConfigKafka;
  /**
  * kafka_topic block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#kafka_topic DataYandexMdbClickhouseCluster#kafka_topic}
  */
  readonly kafkaTopic?: DataYandexMdbClickhouseClusterClickhouseConfigKafkaTopic[] | cdktf.IResolvable;
  /**
  * merge_tree block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#merge_tree DataYandexMdbClickhouseCluster#merge_tree}
  */
  readonly mergeTree?: DataYandexMdbClickhouseClusterClickhouseConfigMergeTree;
  /**
  * query_cache block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#query_cache DataYandexMdbClickhouseCluster#query_cache}
  */
  readonly queryCache?: DataYandexMdbClickhouseClusterClickhouseConfigQueryCache;
  /**
  * query_masking_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#query_masking_rules DataYandexMdbClickhouseCluster#query_masking_rules}
  */
  readonly queryMaskingRules?: DataYandexMdbClickhouseClusterClickhouseConfigQueryMaskingRules[] | cdktf.IResolvable;
  /**
  * rabbitmq block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#rabbitmq DataYandexMdbClickhouseCluster#rabbitmq}
  */
  readonly rabbitmq?: DataYandexMdbClickhouseClusterClickhouseConfigRabbitmq;
}

export function dataYandexMdbClickhouseClusterClickhouseConfigToTerraform(struct?: DataYandexMdbClickhouseClusterClickhouseConfigOutputReference | DataYandexMdbClickhouseClusterClickhouseConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    asynchronous_insert_log_enabled: cdktf.booleanToTerraform(struct!.asynchronousInsertLogEnabled),
    asynchronous_insert_log_retention_size: cdktf.numberToTerraform(struct!.asynchronousInsertLogRetentionSize),
    asynchronous_insert_log_retention_time: cdktf.numberToTerraform(struct!.asynchronousInsertLogRetentionTime),
    asynchronous_metric_log_enabled: cdktf.booleanToTerraform(struct!.asynchronousMetricLogEnabled),
    asynchronous_metric_log_retention_size: cdktf.numberToTerraform(struct!.asynchronousMetricLogRetentionSize),
    asynchronous_metric_log_retention_time: cdktf.numberToTerraform(struct!.asynchronousMetricLogRetentionTime),
    background_buffer_flush_schedule_pool_size: cdktf.numberToTerraform(struct!.backgroundBufferFlushSchedulePoolSize),
    background_common_pool_size: cdktf.numberToTerraform(struct!.backgroundCommonPoolSize),
    background_distributed_schedule_pool_size: cdktf.numberToTerraform(struct!.backgroundDistributedSchedulePoolSize),
    background_fetches_pool_size: cdktf.numberToTerraform(struct!.backgroundFetchesPoolSize),
    background_merges_mutations_concurrency_ratio: cdktf.numberToTerraform(struct!.backgroundMergesMutationsConcurrencyRatio),
    background_message_broker_schedule_pool_size: cdktf.numberToTerraform(struct!.backgroundMessageBrokerSchedulePoolSize),
    background_move_pool_size: cdktf.numberToTerraform(struct!.backgroundMovePoolSize),
    background_pool_size: cdktf.numberToTerraform(struct!.backgroundPoolSize),
    background_schedule_pool_size: cdktf.numberToTerraform(struct!.backgroundSchedulePoolSize),
    default_database: cdktf.stringToTerraform(struct!.defaultDatabase),
    dictionaries_lazy_load: cdktf.booleanToTerraform(struct!.dictionariesLazyLoad),
    geobase_enabled: cdktf.booleanToTerraform(struct!.geobaseEnabled),
    geobase_uri: cdktf.stringToTerraform(struct!.geobaseUri),
    keep_alive_timeout: cdktf.numberToTerraform(struct!.keepAliveTimeout),
    log_level: cdktf.stringToTerraform(struct!.logLevel),
    mark_cache_size: cdktf.numberToTerraform(struct!.markCacheSize),
    max_concurrent_queries: cdktf.numberToTerraform(struct!.maxConcurrentQueries),
    max_connections: cdktf.numberToTerraform(struct!.maxConnections),
    max_partition_size_to_drop: cdktf.numberToTerraform(struct!.maxPartitionSizeToDrop),
    max_table_size_to_drop: cdktf.numberToTerraform(struct!.maxTableSizeToDrop),
    metric_log_enabled: cdktf.booleanToTerraform(struct!.metricLogEnabled),
    metric_log_retention_size: cdktf.numberToTerraform(struct!.metricLogRetentionSize),
    metric_log_retention_time: cdktf.numberToTerraform(struct!.metricLogRetentionTime),
    opentelemetry_span_log_enabled: cdktf.booleanToTerraform(struct!.opentelemetrySpanLogEnabled),
    opentelemetry_span_log_retention_size: cdktf.numberToTerraform(struct!.opentelemetrySpanLogRetentionSize),
    opentelemetry_span_log_retention_time: cdktf.numberToTerraform(struct!.opentelemetrySpanLogRetentionTime),
    part_log_retention_size: cdktf.numberToTerraform(struct!.partLogRetentionSize),
    part_log_retention_time: cdktf.numberToTerraform(struct!.partLogRetentionTime),
    query_log_retention_size: cdktf.numberToTerraform(struct!.queryLogRetentionSize),
    query_log_retention_time: cdktf.numberToTerraform(struct!.queryLogRetentionTime),
    query_thread_log_enabled: cdktf.booleanToTerraform(struct!.queryThreadLogEnabled),
    query_thread_log_retention_size: cdktf.numberToTerraform(struct!.queryThreadLogRetentionSize),
    query_thread_log_retention_time: cdktf.numberToTerraform(struct!.queryThreadLogRetentionTime),
    query_views_log_enabled: cdktf.booleanToTerraform(struct!.queryViewsLogEnabled),
    query_views_log_retention_size: cdktf.numberToTerraform(struct!.queryViewsLogRetentionSize),
    query_views_log_retention_time: cdktf.numberToTerraform(struct!.queryViewsLogRetentionTime),
    session_log_enabled: cdktf.booleanToTerraform(struct!.sessionLogEnabled),
    session_log_retention_size: cdktf.numberToTerraform(struct!.sessionLogRetentionSize),
    session_log_retention_time: cdktf.numberToTerraform(struct!.sessionLogRetentionTime),
    text_log_enabled: cdktf.booleanToTerraform(struct!.textLogEnabled),
    text_log_level: cdktf.stringToTerraform(struct!.textLogLevel),
    text_log_retention_size: cdktf.numberToTerraform(struct!.textLogRetentionSize),
    text_log_retention_time: cdktf.numberToTerraform(struct!.textLogRetentionTime),
    timezone: cdktf.stringToTerraform(struct!.timezone),
    total_memory_profiler_step: cdktf.numberToTerraform(struct!.totalMemoryProfilerStep),
    trace_log_enabled: cdktf.booleanToTerraform(struct!.traceLogEnabled),
    trace_log_retention_size: cdktf.numberToTerraform(struct!.traceLogRetentionSize),
    trace_log_retention_time: cdktf.numberToTerraform(struct!.traceLogRetentionTime),
    uncompressed_cache_size: cdktf.numberToTerraform(struct!.uncompressedCacheSize),
    zookeeper_log_enabled: cdktf.booleanToTerraform(struct!.zookeeperLogEnabled),
    zookeeper_log_retention_size: cdktf.numberToTerraform(struct!.zookeeperLogRetentionSize),
    zookeeper_log_retention_time: cdktf.numberToTerraform(struct!.zookeeperLogRetentionTime),
    compression: cdktf.listMapper(dataYandexMdbClickhouseClusterClickhouseConfigCompressionToTerraform, true)(struct!.compression),
    graphite_rollup: cdktf.listMapper(dataYandexMdbClickhouseClusterClickhouseConfigGraphiteRollupToTerraform, true)(struct!.graphiteRollup),
    jdbc_bridge: dataYandexMdbClickhouseClusterClickhouseConfigJdbcBridgeToTerraform(struct!.jdbcBridge),
    kafka: dataYandexMdbClickhouseClusterClickhouseConfigKafkaToTerraform(struct!.kafka),
    kafka_topic: cdktf.listMapper(dataYandexMdbClickhouseClusterClickhouseConfigKafkaTopicToTerraform, true)(struct!.kafkaTopic),
    merge_tree: dataYandexMdbClickhouseClusterClickhouseConfigMergeTreeToTerraform(struct!.mergeTree),
    query_cache: dataYandexMdbClickhouseClusterClickhouseConfigQueryCacheToTerraform(struct!.queryCache),
    query_masking_rules: cdktf.listMapper(dataYandexMdbClickhouseClusterClickhouseConfigQueryMaskingRulesToTerraform, true)(struct!.queryMaskingRules),
    rabbitmq: dataYandexMdbClickhouseClusterClickhouseConfigRabbitmqToTerraform(struct!.rabbitmq),
  }
}


export function dataYandexMdbClickhouseClusterClickhouseConfigToHclTerraform(struct?: DataYandexMdbClickhouseClusterClickhouseConfigOutputReference | DataYandexMdbClickhouseClusterClickhouseConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    asynchronous_insert_log_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.asynchronousInsertLogEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    asynchronous_insert_log_retention_size: {
      value: cdktf.numberToHclTerraform(struct!.asynchronousInsertLogRetentionSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    asynchronous_insert_log_retention_time: {
      value: cdktf.numberToHclTerraform(struct!.asynchronousInsertLogRetentionTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    asynchronous_metric_log_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.asynchronousMetricLogEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    asynchronous_metric_log_retention_size: {
      value: cdktf.numberToHclTerraform(struct!.asynchronousMetricLogRetentionSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    asynchronous_metric_log_retention_time: {
      value: cdktf.numberToHclTerraform(struct!.asynchronousMetricLogRetentionTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    background_buffer_flush_schedule_pool_size: {
      value: cdktf.numberToHclTerraform(struct!.backgroundBufferFlushSchedulePoolSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    background_common_pool_size: {
      value: cdktf.numberToHclTerraform(struct!.backgroundCommonPoolSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    background_distributed_schedule_pool_size: {
      value: cdktf.numberToHclTerraform(struct!.backgroundDistributedSchedulePoolSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    background_fetches_pool_size: {
      value: cdktf.numberToHclTerraform(struct!.backgroundFetchesPoolSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    background_merges_mutations_concurrency_ratio: {
      value: cdktf.numberToHclTerraform(struct!.backgroundMergesMutationsConcurrencyRatio),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    background_message_broker_schedule_pool_size: {
      value: cdktf.numberToHclTerraform(struct!.backgroundMessageBrokerSchedulePoolSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    background_move_pool_size: {
      value: cdktf.numberToHclTerraform(struct!.backgroundMovePoolSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    background_pool_size: {
      value: cdktf.numberToHclTerraform(struct!.backgroundPoolSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    background_schedule_pool_size: {
      value: cdktf.numberToHclTerraform(struct!.backgroundSchedulePoolSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    default_database: {
      value: cdktf.stringToHclTerraform(struct!.defaultDatabase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dictionaries_lazy_load: {
      value: cdktf.booleanToHclTerraform(struct!.dictionariesLazyLoad),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    geobase_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.geobaseEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    geobase_uri: {
      value: cdktf.stringToHclTerraform(struct!.geobaseUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keep_alive_timeout: {
      value: cdktf.numberToHclTerraform(struct!.keepAliveTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_level: {
      value: cdktf.stringToHclTerraform(struct!.logLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mark_cache_size: {
      value: cdktf.numberToHclTerraform(struct!.markCacheSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_concurrent_queries: {
      value: cdktf.numberToHclTerraform(struct!.maxConcurrentQueries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_connections: {
      value: cdktf.numberToHclTerraform(struct!.maxConnections),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_partition_size_to_drop: {
      value: cdktf.numberToHclTerraform(struct!.maxPartitionSizeToDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_table_size_to_drop: {
      value: cdktf.numberToHclTerraform(struct!.maxTableSizeToDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metric_log_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.metricLogEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    metric_log_retention_size: {
      value: cdktf.numberToHclTerraform(struct!.metricLogRetentionSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metric_log_retention_time: {
      value: cdktf.numberToHclTerraform(struct!.metricLogRetentionTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    opentelemetry_span_log_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.opentelemetrySpanLogEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    opentelemetry_span_log_retention_size: {
      value: cdktf.numberToHclTerraform(struct!.opentelemetrySpanLogRetentionSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    opentelemetry_span_log_retention_time: {
      value: cdktf.numberToHclTerraform(struct!.opentelemetrySpanLogRetentionTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    part_log_retention_size: {
      value: cdktf.numberToHclTerraform(struct!.partLogRetentionSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    part_log_retention_time: {
      value: cdktf.numberToHclTerraform(struct!.partLogRetentionTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    query_log_retention_size: {
      value: cdktf.numberToHclTerraform(struct!.queryLogRetentionSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    query_log_retention_time: {
      value: cdktf.numberToHclTerraform(struct!.queryLogRetentionTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    query_thread_log_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.queryThreadLogEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    query_thread_log_retention_size: {
      value: cdktf.numberToHclTerraform(struct!.queryThreadLogRetentionSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    query_thread_log_retention_time: {
      value: cdktf.numberToHclTerraform(struct!.queryThreadLogRetentionTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    query_views_log_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.queryViewsLogEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    query_views_log_retention_size: {
      value: cdktf.numberToHclTerraform(struct!.queryViewsLogRetentionSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    query_views_log_retention_time: {
      value: cdktf.numberToHclTerraform(struct!.queryViewsLogRetentionTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    session_log_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.sessionLogEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    session_log_retention_size: {
      value: cdktf.numberToHclTerraform(struct!.sessionLogRetentionSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    session_log_retention_time: {
      value: cdktf.numberToHclTerraform(struct!.sessionLogRetentionTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    text_log_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.textLogEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    text_log_level: {
      value: cdktf.stringToHclTerraform(struct!.textLogLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    text_log_retention_size: {
      value: cdktf.numberToHclTerraform(struct!.textLogRetentionSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    text_log_retention_time: {
      value: cdktf.numberToHclTerraform(struct!.textLogRetentionTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timezone: {
      value: cdktf.stringToHclTerraform(struct!.timezone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    total_memory_profiler_step: {
      value: cdktf.numberToHclTerraform(struct!.totalMemoryProfilerStep),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    trace_log_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.traceLogEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    trace_log_retention_size: {
      value: cdktf.numberToHclTerraform(struct!.traceLogRetentionSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    trace_log_retention_time: {
      value: cdktf.numberToHclTerraform(struct!.traceLogRetentionTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uncompressed_cache_size: {
      value: cdktf.numberToHclTerraform(struct!.uncompressedCacheSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zookeeper_log_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.zookeeperLogEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    zookeeper_log_retention_size: {
      value: cdktf.numberToHclTerraform(struct!.zookeeperLogRetentionSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zookeeper_log_retention_time: {
      value: cdktf.numberToHclTerraform(struct!.zookeeperLogRetentionTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    compression: {
      value: cdktf.listMapperHcl(dataYandexMdbClickhouseClusterClickhouseConfigCompressionToHclTerraform, true)(struct!.compression),
      isBlock: true,
      type: "list",
      storageClassType: "DataYandexMdbClickhouseClusterClickhouseConfigCompressionList",
    },
    graphite_rollup: {
      value: cdktf.listMapperHcl(dataYandexMdbClickhouseClusterClickhouseConfigGraphiteRollupToHclTerraform, true)(struct!.graphiteRollup),
      isBlock: true,
      type: "list",
      storageClassType: "DataYandexMdbClickhouseClusterClickhouseConfigGraphiteRollupList",
    },
    jdbc_bridge: {
      value: dataYandexMdbClickhouseClusterClickhouseConfigJdbcBridgeToHclTerraform(struct!.jdbcBridge),
      isBlock: true,
      type: "list",
      storageClassType: "DataYandexMdbClickhouseClusterClickhouseConfigJdbcBridgeList",
    },
    kafka: {
      value: dataYandexMdbClickhouseClusterClickhouseConfigKafkaToHclTerraform(struct!.kafka),
      isBlock: true,
      type: "list",
      storageClassType: "DataYandexMdbClickhouseClusterClickhouseConfigKafkaList",
    },
    kafka_topic: {
      value: cdktf.listMapperHcl(dataYandexMdbClickhouseClusterClickhouseConfigKafkaTopicToHclTerraform, true)(struct!.kafkaTopic),
      isBlock: true,
      type: "list",
      storageClassType: "DataYandexMdbClickhouseClusterClickhouseConfigKafkaTopicList",
    },
    merge_tree: {
      value: dataYandexMdbClickhouseClusterClickhouseConfigMergeTreeToHclTerraform(struct!.mergeTree),
      isBlock: true,
      type: "list",
      storageClassType: "DataYandexMdbClickhouseClusterClickhouseConfigMergeTreeList",
    },
    query_cache: {
      value: dataYandexMdbClickhouseClusterClickhouseConfigQueryCacheToHclTerraform(struct!.queryCache),
      isBlock: true,
      type: "list",
      storageClassType: "DataYandexMdbClickhouseClusterClickhouseConfigQueryCacheList",
    },
    query_masking_rules: {
      value: cdktf.listMapperHcl(dataYandexMdbClickhouseClusterClickhouseConfigQueryMaskingRulesToHclTerraform, true)(struct!.queryMaskingRules),
      isBlock: true,
      type: "list",
      storageClassType: "DataYandexMdbClickhouseClusterClickhouseConfigQueryMaskingRulesList",
    },
    rabbitmq: {
      value: dataYandexMdbClickhouseClusterClickhouseConfigRabbitmqToHclTerraform(struct!.rabbitmq),
      isBlock: true,
      type: "list",
      storageClassType: "DataYandexMdbClickhouseClusterClickhouseConfigRabbitmqList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataYandexMdbClickhouseClusterClickhouseConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataYandexMdbClickhouseClusterClickhouseConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asynchronousInsertLogEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.asynchronousInsertLogEnabled = this._asynchronousInsertLogEnabled;
    }
    if (this._asynchronousInsertLogRetentionSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.asynchronousInsertLogRetentionSize = this._asynchronousInsertLogRetentionSize;
    }
    if (this._asynchronousInsertLogRetentionTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.asynchronousInsertLogRetentionTime = this._asynchronousInsertLogRetentionTime;
    }
    if (this._asynchronousMetricLogEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.asynchronousMetricLogEnabled = this._asynchronousMetricLogEnabled;
    }
    if (this._asynchronousMetricLogRetentionSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.asynchronousMetricLogRetentionSize = this._asynchronousMetricLogRetentionSize;
    }
    if (this._asynchronousMetricLogRetentionTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.asynchronousMetricLogRetentionTime = this._asynchronousMetricLogRetentionTime;
    }
    if (this._backgroundBufferFlushSchedulePoolSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.backgroundBufferFlushSchedulePoolSize = this._backgroundBufferFlushSchedulePoolSize;
    }
    if (this._backgroundCommonPoolSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.backgroundCommonPoolSize = this._backgroundCommonPoolSize;
    }
    if (this._backgroundDistributedSchedulePoolSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.backgroundDistributedSchedulePoolSize = this._backgroundDistributedSchedulePoolSize;
    }
    if (this._backgroundFetchesPoolSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.backgroundFetchesPoolSize = this._backgroundFetchesPoolSize;
    }
    if (this._backgroundMergesMutationsConcurrencyRatio !== undefined) {
      hasAnyValues = true;
      internalValueResult.backgroundMergesMutationsConcurrencyRatio = this._backgroundMergesMutationsConcurrencyRatio;
    }
    if (this._backgroundMessageBrokerSchedulePoolSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.backgroundMessageBrokerSchedulePoolSize = this._backgroundMessageBrokerSchedulePoolSize;
    }
    if (this._backgroundMovePoolSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.backgroundMovePoolSize = this._backgroundMovePoolSize;
    }
    if (this._backgroundPoolSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.backgroundPoolSize = this._backgroundPoolSize;
    }
    if (this._backgroundSchedulePoolSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.backgroundSchedulePoolSize = this._backgroundSchedulePoolSize;
    }
    if (this._defaultDatabase !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultDatabase = this._defaultDatabase;
    }
    if (this._dictionariesLazyLoad !== undefined) {
      hasAnyValues = true;
      internalValueResult.dictionariesLazyLoad = this._dictionariesLazyLoad;
    }
    if (this._geobaseEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.geobaseEnabled = this._geobaseEnabled;
    }
    if (this._geobaseUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.geobaseUri = this._geobaseUri;
    }
    if (this._keepAliveTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepAliveTimeout = this._keepAliveTimeout;
    }
    if (this._logLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.logLevel = this._logLevel;
    }
    if (this._markCacheSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.markCacheSize = this._markCacheSize;
    }
    if (this._maxConcurrentQueries !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConcurrentQueries = this._maxConcurrentQueries;
    }
    if (this._maxConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConnections = this._maxConnections;
    }
    if (this._maxPartitionSizeToDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPartitionSizeToDrop = this._maxPartitionSizeToDrop;
    }
    if (this._maxTableSizeToDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxTableSizeToDrop = this._maxTableSizeToDrop;
    }
    if (this._metricLogEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricLogEnabled = this._metricLogEnabled;
    }
    if (this._metricLogRetentionSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricLogRetentionSize = this._metricLogRetentionSize;
    }
    if (this._metricLogRetentionTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricLogRetentionTime = this._metricLogRetentionTime;
    }
    if (this._opentelemetrySpanLogEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.opentelemetrySpanLogEnabled = this._opentelemetrySpanLogEnabled;
    }
    if (this._opentelemetrySpanLogRetentionSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.opentelemetrySpanLogRetentionSize = this._opentelemetrySpanLogRetentionSize;
    }
    if (this._opentelemetrySpanLogRetentionTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.opentelemetrySpanLogRetentionTime = this._opentelemetrySpanLogRetentionTime;
    }
    if (this._partLogRetentionSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.partLogRetentionSize = this._partLogRetentionSize;
    }
    if (this._partLogRetentionTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.partLogRetentionTime = this._partLogRetentionTime;
    }
    if (this._queryLogRetentionSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryLogRetentionSize = this._queryLogRetentionSize;
    }
    if (this._queryLogRetentionTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryLogRetentionTime = this._queryLogRetentionTime;
    }
    if (this._queryThreadLogEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryThreadLogEnabled = this._queryThreadLogEnabled;
    }
    if (this._queryThreadLogRetentionSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryThreadLogRetentionSize = this._queryThreadLogRetentionSize;
    }
    if (this._queryThreadLogRetentionTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryThreadLogRetentionTime = this._queryThreadLogRetentionTime;
    }
    if (this._queryViewsLogEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryViewsLogEnabled = this._queryViewsLogEnabled;
    }
    if (this._queryViewsLogRetentionSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryViewsLogRetentionSize = this._queryViewsLogRetentionSize;
    }
    if (this._queryViewsLogRetentionTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryViewsLogRetentionTime = this._queryViewsLogRetentionTime;
    }
    if (this._sessionLogEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionLogEnabled = this._sessionLogEnabled;
    }
    if (this._sessionLogRetentionSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionLogRetentionSize = this._sessionLogRetentionSize;
    }
    if (this._sessionLogRetentionTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionLogRetentionTime = this._sessionLogRetentionTime;
    }
    if (this._textLogEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.textLogEnabled = this._textLogEnabled;
    }
    if (this._textLogLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.textLogLevel = this._textLogLevel;
    }
    if (this._textLogRetentionSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.textLogRetentionSize = this._textLogRetentionSize;
    }
    if (this._textLogRetentionTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.textLogRetentionTime = this._textLogRetentionTime;
    }
    if (this._timezone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timezone = this._timezone;
    }
    if (this._totalMemoryProfilerStep !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalMemoryProfilerStep = this._totalMemoryProfilerStep;
    }
    if (this._traceLogEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.traceLogEnabled = this._traceLogEnabled;
    }
    if (this._traceLogRetentionSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.traceLogRetentionSize = this._traceLogRetentionSize;
    }
    if (this._traceLogRetentionTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.traceLogRetentionTime = this._traceLogRetentionTime;
    }
    if (this._uncompressedCacheSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.uncompressedCacheSize = this._uncompressedCacheSize;
    }
    if (this._zookeeperLogEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.zookeeperLogEnabled = this._zookeeperLogEnabled;
    }
    if (this._zookeeperLogRetentionSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.zookeeperLogRetentionSize = this._zookeeperLogRetentionSize;
    }
    if (this._zookeeperLogRetentionTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.zookeeperLogRetentionTime = this._zookeeperLogRetentionTime;
    }
    if (this._compression?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.compression = this._compression?.internalValue;
    }
    if (this._graphiteRollup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.graphiteRollup = this._graphiteRollup?.internalValue;
    }
    if (this._jdbcBridge?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jdbcBridge = this._jdbcBridge?.internalValue;
    }
    if (this._kafka?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kafka = this._kafka?.internalValue;
    }
    if (this._kafkaTopic?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kafkaTopic = this._kafkaTopic?.internalValue;
    }
    if (this._mergeTree?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mergeTree = this._mergeTree?.internalValue;
    }
    if (this._queryCache?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryCache = this._queryCache?.internalValue;
    }
    if (this._queryMaskingRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryMaskingRules = this._queryMaskingRules?.internalValue;
    }
    if (this._rabbitmq?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rabbitmq = this._rabbitmq?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbClickhouseClusterClickhouseConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._asynchronousInsertLogEnabled = undefined;
      this._asynchronousInsertLogRetentionSize = undefined;
      this._asynchronousInsertLogRetentionTime = undefined;
      this._asynchronousMetricLogEnabled = undefined;
      this._asynchronousMetricLogRetentionSize = undefined;
      this._asynchronousMetricLogRetentionTime = undefined;
      this._backgroundBufferFlushSchedulePoolSize = undefined;
      this._backgroundCommonPoolSize = undefined;
      this._backgroundDistributedSchedulePoolSize = undefined;
      this._backgroundFetchesPoolSize = undefined;
      this._backgroundMergesMutationsConcurrencyRatio = undefined;
      this._backgroundMessageBrokerSchedulePoolSize = undefined;
      this._backgroundMovePoolSize = undefined;
      this._backgroundPoolSize = undefined;
      this._backgroundSchedulePoolSize = undefined;
      this._defaultDatabase = undefined;
      this._dictionariesLazyLoad = undefined;
      this._geobaseEnabled = undefined;
      this._geobaseUri = undefined;
      this._keepAliveTimeout = undefined;
      this._logLevel = undefined;
      this._markCacheSize = undefined;
      this._maxConcurrentQueries = undefined;
      this._maxConnections = undefined;
      this._maxPartitionSizeToDrop = undefined;
      this._maxTableSizeToDrop = undefined;
      this._metricLogEnabled = undefined;
      this._metricLogRetentionSize = undefined;
      this._metricLogRetentionTime = undefined;
      this._opentelemetrySpanLogEnabled = undefined;
      this._opentelemetrySpanLogRetentionSize = undefined;
      this._opentelemetrySpanLogRetentionTime = undefined;
      this._partLogRetentionSize = undefined;
      this._partLogRetentionTime = undefined;
      this._queryLogRetentionSize = undefined;
      this._queryLogRetentionTime = undefined;
      this._queryThreadLogEnabled = undefined;
      this._queryThreadLogRetentionSize = undefined;
      this._queryThreadLogRetentionTime = undefined;
      this._queryViewsLogEnabled = undefined;
      this._queryViewsLogRetentionSize = undefined;
      this._queryViewsLogRetentionTime = undefined;
      this._sessionLogEnabled = undefined;
      this._sessionLogRetentionSize = undefined;
      this._sessionLogRetentionTime = undefined;
      this._textLogEnabled = undefined;
      this._textLogLevel = undefined;
      this._textLogRetentionSize = undefined;
      this._textLogRetentionTime = undefined;
      this._timezone = undefined;
      this._totalMemoryProfilerStep = undefined;
      this._traceLogEnabled = undefined;
      this._traceLogRetentionSize = undefined;
      this._traceLogRetentionTime = undefined;
      this._uncompressedCacheSize = undefined;
      this._zookeeperLogEnabled = undefined;
      this._zookeeperLogRetentionSize = undefined;
      this._zookeeperLogRetentionTime = undefined;
      this._compression.internalValue = undefined;
      this._graphiteRollup.internalValue = undefined;
      this._jdbcBridge.internalValue = undefined;
      this._kafka.internalValue = undefined;
      this._kafkaTopic.internalValue = undefined;
      this._mergeTree.internalValue = undefined;
      this._queryCache.internalValue = undefined;
      this._queryMaskingRules.internalValue = undefined;
      this._rabbitmq.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._asynchronousInsertLogEnabled = value.asynchronousInsertLogEnabled;
      this._asynchronousInsertLogRetentionSize = value.asynchronousInsertLogRetentionSize;
      this._asynchronousInsertLogRetentionTime = value.asynchronousInsertLogRetentionTime;
      this._asynchronousMetricLogEnabled = value.asynchronousMetricLogEnabled;
      this._asynchronousMetricLogRetentionSize = value.asynchronousMetricLogRetentionSize;
      this._asynchronousMetricLogRetentionTime = value.asynchronousMetricLogRetentionTime;
      this._backgroundBufferFlushSchedulePoolSize = value.backgroundBufferFlushSchedulePoolSize;
      this._backgroundCommonPoolSize = value.backgroundCommonPoolSize;
      this._backgroundDistributedSchedulePoolSize = value.backgroundDistributedSchedulePoolSize;
      this._backgroundFetchesPoolSize = value.backgroundFetchesPoolSize;
      this._backgroundMergesMutationsConcurrencyRatio = value.backgroundMergesMutationsConcurrencyRatio;
      this._backgroundMessageBrokerSchedulePoolSize = value.backgroundMessageBrokerSchedulePoolSize;
      this._backgroundMovePoolSize = value.backgroundMovePoolSize;
      this._backgroundPoolSize = value.backgroundPoolSize;
      this._backgroundSchedulePoolSize = value.backgroundSchedulePoolSize;
      this._defaultDatabase = value.defaultDatabase;
      this._dictionariesLazyLoad = value.dictionariesLazyLoad;
      this._geobaseEnabled = value.geobaseEnabled;
      this._geobaseUri = value.geobaseUri;
      this._keepAliveTimeout = value.keepAliveTimeout;
      this._logLevel = value.logLevel;
      this._markCacheSize = value.markCacheSize;
      this._maxConcurrentQueries = value.maxConcurrentQueries;
      this._maxConnections = value.maxConnections;
      this._maxPartitionSizeToDrop = value.maxPartitionSizeToDrop;
      this._maxTableSizeToDrop = value.maxTableSizeToDrop;
      this._metricLogEnabled = value.metricLogEnabled;
      this._metricLogRetentionSize = value.metricLogRetentionSize;
      this._metricLogRetentionTime = value.metricLogRetentionTime;
      this._opentelemetrySpanLogEnabled = value.opentelemetrySpanLogEnabled;
      this._opentelemetrySpanLogRetentionSize = value.opentelemetrySpanLogRetentionSize;
      this._opentelemetrySpanLogRetentionTime = value.opentelemetrySpanLogRetentionTime;
      this._partLogRetentionSize = value.partLogRetentionSize;
      this._partLogRetentionTime = value.partLogRetentionTime;
      this._queryLogRetentionSize = value.queryLogRetentionSize;
      this._queryLogRetentionTime = value.queryLogRetentionTime;
      this._queryThreadLogEnabled = value.queryThreadLogEnabled;
      this._queryThreadLogRetentionSize = value.queryThreadLogRetentionSize;
      this._queryThreadLogRetentionTime = value.queryThreadLogRetentionTime;
      this._queryViewsLogEnabled = value.queryViewsLogEnabled;
      this._queryViewsLogRetentionSize = value.queryViewsLogRetentionSize;
      this._queryViewsLogRetentionTime = value.queryViewsLogRetentionTime;
      this._sessionLogEnabled = value.sessionLogEnabled;
      this._sessionLogRetentionSize = value.sessionLogRetentionSize;
      this._sessionLogRetentionTime = value.sessionLogRetentionTime;
      this._textLogEnabled = value.textLogEnabled;
      this._textLogLevel = value.textLogLevel;
      this._textLogRetentionSize = value.textLogRetentionSize;
      this._textLogRetentionTime = value.textLogRetentionTime;
      this._timezone = value.timezone;
      this._totalMemoryProfilerStep = value.totalMemoryProfilerStep;
      this._traceLogEnabled = value.traceLogEnabled;
      this._traceLogRetentionSize = value.traceLogRetentionSize;
      this._traceLogRetentionTime = value.traceLogRetentionTime;
      this._uncompressedCacheSize = value.uncompressedCacheSize;
      this._zookeeperLogEnabled = value.zookeeperLogEnabled;
      this._zookeeperLogRetentionSize = value.zookeeperLogRetentionSize;
      this._zookeeperLogRetentionTime = value.zookeeperLogRetentionTime;
      this._compression.internalValue = value.compression;
      this._graphiteRollup.internalValue = value.graphiteRollup;
      this._jdbcBridge.internalValue = value.jdbcBridge;
      this._kafka.internalValue = value.kafka;
      this._kafkaTopic.internalValue = value.kafkaTopic;
      this._mergeTree.internalValue = value.mergeTree;
      this._queryCache.internalValue = value.queryCache;
      this._queryMaskingRules.internalValue = value.queryMaskingRules;
      this._rabbitmq.internalValue = value.rabbitmq;
    }
  }

  // asynchronous_insert_log_enabled - computed: true, optional: true, required: false
  private _asynchronousInsertLogEnabled?: boolean | cdktf.IResolvable; 
  public get asynchronousInsertLogEnabled() {
    return this.getBooleanAttribute('asynchronous_insert_log_enabled');
  }
  public set asynchronousInsertLogEnabled(value: boolean | cdktf.IResolvable) {
    this._asynchronousInsertLogEnabled = value;
  }
  public resetAsynchronousInsertLogEnabled() {
    this._asynchronousInsertLogEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asynchronousInsertLogEnabledInput() {
    return this._asynchronousInsertLogEnabled;
  }

  // asynchronous_insert_log_retention_size - computed: true, optional: true, required: false
  private _asynchronousInsertLogRetentionSize?: number; 
  public get asynchronousInsertLogRetentionSize() {
    return this.getNumberAttribute('asynchronous_insert_log_retention_size');
  }
  public set asynchronousInsertLogRetentionSize(value: number) {
    this._asynchronousInsertLogRetentionSize = value;
  }
  public resetAsynchronousInsertLogRetentionSize() {
    this._asynchronousInsertLogRetentionSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asynchronousInsertLogRetentionSizeInput() {
    return this._asynchronousInsertLogRetentionSize;
  }

  // asynchronous_insert_log_retention_time - computed: true, optional: true, required: false
  private _asynchronousInsertLogRetentionTime?: number; 
  public get asynchronousInsertLogRetentionTime() {
    return this.getNumberAttribute('asynchronous_insert_log_retention_time');
  }
  public set asynchronousInsertLogRetentionTime(value: number) {
    this._asynchronousInsertLogRetentionTime = value;
  }
  public resetAsynchronousInsertLogRetentionTime() {
    this._asynchronousInsertLogRetentionTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asynchronousInsertLogRetentionTimeInput() {
    return this._asynchronousInsertLogRetentionTime;
  }

  // asynchronous_metric_log_enabled - computed: true, optional: true, required: false
  private _asynchronousMetricLogEnabled?: boolean | cdktf.IResolvable; 
  public get asynchronousMetricLogEnabled() {
    return this.getBooleanAttribute('asynchronous_metric_log_enabled');
  }
  public set asynchronousMetricLogEnabled(value: boolean | cdktf.IResolvable) {
    this._asynchronousMetricLogEnabled = value;
  }
  public resetAsynchronousMetricLogEnabled() {
    this._asynchronousMetricLogEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asynchronousMetricLogEnabledInput() {
    return this._asynchronousMetricLogEnabled;
  }

  // asynchronous_metric_log_retention_size - computed: true, optional: true, required: false
  private _asynchronousMetricLogRetentionSize?: number; 
  public get asynchronousMetricLogRetentionSize() {
    return this.getNumberAttribute('asynchronous_metric_log_retention_size');
  }
  public set asynchronousMetricLogRetentionSize(value: number) {
    this._asynchronousMetricLogRetentionSize = value;
  }
  public resetAsynchronousMetricLogRetentionSize() {
    this._asynchronousMetricLogRetentionSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asynchronousMetricLogRetentionSizeInput() {
    return this._asynchronousMetricLogRetentionSize;
  }

  // asynchronous_metric_log_retention_time - computed: true, optional: true, required: false
  private _asynchronousMetricLogRetentionTime?: number; 
  public get asynchronousMetricLogRetentionTime() {
    return this.getNumberAttribute('asynchronous_metric_log_retention_time');
  }
  public set asynchronousMetricLogRetentionTime(value: number) {
    this._asynchronousMetricLogRetentionTime = value;
  }
  public resetAsynchronousMetricLogRetentionTime() {
    this._asynchronousMetricLogRetentionTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asynchronousMetricLogRetentionTimeInput() {
    return this._asynchronousMetricLogRetentionTime;
  }

  // background_buffer_flush_schedule_pool_size - computed: true, optional: true, required: false
  private _backgroundBufferFlushSchedulePoolSize?: number; 
  public get backgroundBufferFlushSchedulePoolSize() {
    return this.getNumberAttribute('background_buffer_flush_schedule_pool_size');
  }
  public set backgroundBufferFlushSchedulePoolSize(value: number) {
    this._backgroundBufferFlushSchedulePoolSize = value;
  }
  public resetBackgroundBufferFlushSchedulePoolSize() {
    this._backgroundBufferFlushSchedulePoolSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backgroundBufferFlushSchedulePoolSizeInput() {
    return this._backgroundBufferFlushSchedulePoolSize;
  }

  // background_common_pool_size - computed: true, optional: true, required: false
  private _backgroundCommonPoolSize?: number; 
  public get backgroundCommonPoolSize() {
    return this.getNumberAttribute('background_common_pool_size');
  }
  public set backgroundCommonPoolSize(value: number) {
    this._backgroundCommonPoolSize = value;
  }
  public resetBackgroundCommonPoolSize() {
    this._backgroundCommonPoolSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backgroundCommonPoolSizeInput() {
    return this._backgroundCommonPoolSize;
  }

  // background_distributed_schedule_pool_size - computed: true, optional: true, required: false
  private _backgroundDistributedSchedulePoolSize?: number; 
  public get backgroundDistributedSchedulePoolSize() {
    return this.getNumberAttribute('background_distributed_schedule_pool_size');
  }
  public set backgroundDistributedSchedulePoolSize(value: number) {
    this._backgroundDistributedSchedulePoolSize = value;
  }
  public resetBackgroundDistributedSchedulePoolSize() {
    this._backgroundDistributedSchedulePoolSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backgroundDistributedSchedulePoolSizeInput() {
    return this._backgroundDistributedSchedulePoolSize;
  }

  // background_fetches_pool_size - computed: true, optional: true, required: false
  private _backgroundFetchesPoolSize?: number; 
  public get backgroundFetchesPoolSize() {
    return this.getNumberAttribute('background_fetches_pool_size');
  }
  public set backgroundFetchesPoolSize(value: number) {
    this._backgroundFetchesPoolSize = value;
  }
  public resetBackgroundFetchesPoolSize() {
    this._backgroundFetchesPoolSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backgroundFetchesPoolSizeInput() {
    return this._backgroundFetchesPoolSize;
  }

  // background_merges_mutations_concurrency_ratio - computed: true, optional: true, required: false
  private _backgroundMergesMutationsConcurrencyRatio?: number; 
  public get backgroundMergesMutationsConcurrencyRatio() {
    return this.getNumberAttribute('background_merges_mutations_concurrency_ratio');
  }
  public set backgroundMergesMutationsConcurrencyRatio(value: number) {
    this._backgroundMergesMutationsConcurrencyRatio = value;
  }
  public resetBackgroundMergesMutationsConcurrencyRatio() {
    this._backgroundMergesMutationsConcurrencyRatio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backgroundMergesMutationsConcurrencyRatioInput() {
    return this._backgroundMergesMutationsConcurrencyRatio;
  }

  // background_message_broker_schedule_pool_size - computed: true, optional: true, required: false
  private _backgroundMessageBrokerSchedulePoolSize?: number; 
  public get backgroundMessageBrokerSchedulePoolSize() {
    return this.getNumberAttribute('background_message_broker_schedule_pool_size');
  }
  public set backgroundMessageBrokerSchedulePoolSize(value: number) {
    this._backgroundMessageBrokerSchedulePoolSize = value;
  }
  public resetBackgroundMessageBrokerSchedulePoolSize() {
    this._backgroundMessageBrokerSchedulePoolSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backgroundMessageBrokerSchedulePoolSizeInput() {
    return this._backgroundMessageBrokerSchedulePoolSize;
  }

  // background_move_pool_size - computed: true, optional: true, required: false
  private _backgroundMovePoolSize?: number; 
  public get backgroundMovePoolSize() {
    return this.getNumberAttribute('background_move_pool_size');
  }
  public set backgroundMovePoolSize(value: number) {
    this._backgroundMovePoolSize = value;
  }
  public resetBackgroundMovePoolSize() {
    this._backgroundMovePoolSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backgroundMovePoolSizeInput() {
    return this._backgroundMovePoolSize;
  }

  // background_pool_size - computed: true, optional: true, required: false
  private _backgroundPoolSize?: number; 
  public get backgroundPoolSize() {
    return this.getNumberAttribute('background_pool_size');
  }
  public set backgroundPoolSize(value: number) {
    this._backgroundPoolSize = value;
  }
  public resetBackgroundPoolSize() {
    this._backgroundPoolSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backgroundPoolSizeInput() {
    return this._backgroundPoolSize;
  }

  // background_schedule_pool_size - computed: true, optional: true, required: false
  private _backgroundSchedulePoolSize?: number; 
  public get backgroundSchedulePoolSize() {
    return this.getNumberAttribute('background_schedule_pool_size');
  }
  public set backgroundSchedulePoolSize(value: number) {
    this._backgroundSchedulePoolSize = value;
  }
  public resetBackgroundSchedulePoolSize() {
    this._backgroundSchedulePoolSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backgroundSchedulePoolSizeInput() {
    return this._backgroundSchedulePoolSize;
  }

  // default_database - computed: true, optional: true, required: false
  private _defaultDatabase?: string; 
  public get defaultDatabase() {
    return this.getStringAttribute('default_database');
  }
  public set defaultDatabase(value: string) {
    this._defaultDatabase = value;
  }
  public resetDefaultDatabase() {
    this._defaultDatabase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultDatabaseInput() {
    return this._defaultDatabase;
  }

  // dictionaries_lazy_load - computed: true, optional: true, required: false
  private _dictionariesLazyLoad?: boolean | cdktf.IResolvable; 
  public get dictionariesLazyLoad() {
    return this.getBooleanAttribute('dictionaries_lazy_load');
  }
  public set dictionariesLazyLoad(value: boolean | cdktf.IResolvable) {
    this._dictionariesLazyLoad = value;
  }
  public resetDictionariesLazyLoad() {
    this._dictionariesLazyLoad = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dictionariesLazyLoadInput() {
    return this._dictionariesLazyLoad;
  }

  // geobase_enabled - computed: true, optional: true, required: false
  private _geobaseEnabled?: boolean | cdktf.IResolvable; 
  public get geobaseEnabled() {
    return this.getBooleanAttribute('geobase_enabled');
  }
  public set geobaseEnabled(value: boolean | cdktf.IResolvable) {
    this._geobaseEnabled = value;
  }
  public resetGeobaseEnabled() {
    this._geobaseEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geobaseEnabledInput() {
    return this._geobaseEnabled;
  }

  // geobase_uri - computed: true, optional: true, required: false
  private _geobaseUri?: string; 
  public get geobaseUri() {
    return this.getStringAttribute('geobase_uri');
  }
  public set geobaseUri(value: string) {
    this._geobaseUri = value;
  }
  public resetGeobaseUri() {
    this._geobaseUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geobaseUriInput() {
    return this._geobaseUri;
  }

  // keep_alive_timeout - computed: true, optional: true, required: false
  private _keepAliveTimeout?: number; 
  public get keepAliveTimeout() {
    return this.getNumberAttribute('keep_alive_timeout');
  }
  public set keepAliveTimeout(value: number) {
    this._keepAliveTimeout = value;
  }
  public resetKeepAliveTimeout() {
    this._keepAliveTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepAliveTimeoutInput() {
    return this._keepAliveTimeout;
  }

  // log_level - computed: true, optional: true, required: false
  private _logLevel?: string; 
  public get logLevel() {
    return this.getStringAttribute('log_level');
  }
  public set logLevel(value: string) {
    this._logLevel = value;
  }
  public resetLogLevel() {
    this._logLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logLevelInput() {
    return this._logLevel;
  }

  // mark_cache_size - computed: true, optional: true, required: false
  private _markCacheSize?: number; 
  public get markCacheSize() {
    return this.getNumberAttribute('mark_cache_size');
  }
  public set markCacheSize(value: number) {
    this._markCacheSize = value;
  }
  public resetMarkCacheSize() {
    this._markCacheSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get markCacheSizeInput() {
    return this._markCacheSize;
  }

  // max_concurrent_queries - computed: true, optional: true, required: false
  private _maxConcurrentQueries?: number; 
  public get maxConcurrentQueries() {
    return this.getNumberAttribute('max_concurrent_queries');
  }
  public set maxConcurrentQueries(value: number) {
    this._maxConcurrentQueries = value;
  }
  public resetMaxConcurrentQueries() {
    this._maxConcurrentQueries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConcurrentQueriesInput() {
    return this._maxConcurrentQueries;
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

  // max_partition_size_to_drop - computed: true, optional: true, required: false
  private _maxPartitionSizeToDrop?: number; 
  public get maxPartitionSizeToDrop() {
    return this.getNumberAttribute('max_partition_size_to_drop');
  }
  public set maxPartitionSizeToDrop(value: number) {
    this._maxPartitionSizeToDrop = value;
  }
  public resetMaxPartitionSizeToDrop() {
    this._maxPartitionSizeToDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPartitionSizeToDropInput() {
    return this._maxPartitionSizeToDrop;
  }

  // max_table_size_to_drop - computed: true, optional: true, required: false
  private _maxTableSizeToDrop?: number; 
  public get maxTableSizeToDrop() {
    return this.getNumberAttribute('max_table_size_to_drop');
  }
  public set maxTableSizeToDrop(value: number) {
    this._maxTableSizeToDrop = value;
  }
  public resetMaxTableSizeToDrop() {
    this._maxTableSizeToDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTableSizeToDropInput() {
    return this._maxTableSizeToDrop;
  }

  // metric_log_enabled - computed: true, optional: true, required: false
  private _metricLogEnabled?: boolean | cdktf.IResolvable; 
  public get metricLogEnabled() {
    return this.getBooleanAttribute('metric_log_enabled');
  }
  public set metricLogEnabled(value: boolean | cdktf.IResolvable) {
    this._metricLogEnabled = value;
  }
  public resetMetricLogEnabled() {
    this._metricLogEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricLogEnabledInput() {
    return this._metricLogEnabled;
  }

  // metric_log_retention_size - computed: true, optional: true, required: false
  private _metricLogRetentionSize?: number; 
  public get metricLogRetentionSize() {
    return this.getNumberAttribute('metric_log_retention_size');
  }
  public set metricLogRetentionSize(value: number) {
    this._metricLogRetentionSize = value;
  }
  public resetMetricLogRetentionSize() {
    this._metricLogRetentionSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricLogRetentionSizeInput() {
    return this._metricLogRetentionSize;
  }

  // metric_log_retention_time - computed: true, optional: true, required: false
  private _metricLogRetentionTime?: number; 
  public get metricLogRetentionTime() {
    return this.getNumberAttribute('metric_log_retention_time');
  }
  public set metricLogRetentionTime(value: number) {
    this._metricLogRetentionTime = value;
  }
  public resetMetricLogRetentionTime() {
    this._metricLogRetentionTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricLogRetentionTimeInput() {
    return this._metricLogRetentionTime;
  }

  // opentelemetry_span_log_enabled - computed: true, optional: true, required: false
  private _opentelemetrySpanLogEnabled?: boolean | cdktf.IResolvable; 
  public get opentelemetrySpanLogEnabled() {
    return this.getBooleanAttribute('opentelemetry_span_log_enabled');
  }
  public set opentelemetrySpanLogEnabled(value: boolean | cdktf.IResolvable) {
    this._opentelemetrySpanLogEnabled = value;
  }
  public resetOpentelemetrySpanLogEnabled() {
    this._opentelemetrySpanLogEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opentelemetrySpanLogEnabledInput() {
    return this._opentelemetrySpanLogEnabled;
  }

  // opentelemetry_span_log_retention_size - computed: true, optional: true, required: false
  private _opentelemetrySpanLogRetentionSize?: number; 
  public get opentelemetrySpanLogRetentionSize() {
    return this.getNumberAttribute('opentelemetry_span_log_retention_size');
  }
  public set opentelemetrySpanLogRetentionSize(value: number) {
    this._opentelemetrySpanLogRetentionSize = value;
  }
  public resetOpentelemetrySpanLogRetentionSize() {
    this._opentelemetrySpanLogRetentionSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opentelemetrySpanLogRetentionSizeInput() {
    return this._opentelemetrySpanLogRetentionSize;
  }

  // opentelemetry_span_log_retention_time - computed: true, optional: true, required: false
  private _opentelemetrySpanLogRetentionTime?: number; 
  public get opentelemetrySpanLogRetentionTime() {
    return this.getNumberAttribute('opentelemetry_span_log_retention_time');
  }
  public set opentelemetrySpanLogRetentionTime(value: number) {
    this._opentelemetrySpanLogRetentionTime = value;
  }
  public resetOpentelemetrySpanLogRetentionTime() {
    this._opentelemetrySpanLogRetentionTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opentelemetrySpanLogRetentionTimeInput() {
    return this._opentelemetrySpanLogRetentionTime;
  }

  // part_log_retention_size - computed: true, optional: true, required: false
  private _partLogRetentionSize?: number; 
  public get partLogRetentionSize() {
    return this.getNumberAttribute('part_log_retention_size');
  }
  public set partLogRetentionSize(value: number) {
    this._partLogRetentionSize = value;
  }
  public resetPartLogRetentionSize() {
    this._partLogRetentionSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partLogRetentionSizeInput() {
    return this._partLogRetentionSize;
  }

  // part_log_retention_time - computed: true, optional: true, required: false
  private _partLogRetentionTime?: number; 
  public get partLogRetentionTime() {
    return this.getNumberAttribute('part_log_retention_time');
  }
  public set partLogRetentionTime(value: number) {
    this._partLogRetentionTime = value;
  }
  public resetPartLogRetentionTime() {
    this._partLogRetentionTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partLogRetentionTimeInput() {
    return this._partLogRetentionTime;
  }

  // query_log_retention_size - computed: true, optional: true, required: false
  private _queryLogRetentionSize?: number; 
  public get queryLogRetentionSize() {
    return this.getNumberAttribute('query_log_retention_size');
  }
  public set queryLogRetentionSize(value: number) {
    this._queryLogRetentionSize = value;
  }
  public resetQueryLogRetentionSize() {
    this._queryLogRetentionSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryLogRetentionSizeInput() {
    return this._queryLogRetentionSize;
  }

  // query_log_retention_time - computed: true, optional: true, required: false
  private _queryLogRetentionTime?: number; 
  public get queryLogRetentionTime() {
    return this.getNumberAttribute('query_log_retention_time');
  }
  public set queryLogRetentionTime(value: number) {
    this._queryLogRetentionTime = value;
  }
  public resetQueryLogRetentionTime() {
    this._queryLogRetentionTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryLogRetentionTimeInput() {
    return this._queryLogRetentionTime;
  }

  // query_thread_log_enabled - computed: true, optional: true, required: false
  private _queryThreadLogEnabled?: boolean | cdktf.IResolvable; 
  public get queryThreadLogEnabled() {
    return this.getBooleanAttribute('query_thread_log_enabled');
  }
  public set queryThreadLogEnabled(value: boolean | cdktf.IResolvable) {
    this._queryThreadLogEnabled = value;
  }
  public resetQueryThreadLogEnabled() {
    this._queryThreadLogEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryThreadLogEnabledInput() {
    return this._queryThreadLogEnabled;
  }

  // query_thread_log_retention_size - computed: true, optional: true, required: false
  private _queryThreadLogRetentionSize?: number; 
  public get queryThreadLogRetentionSize() {
    return this.getNumberAttribute('query_thread_log_retention_size');
  }
  public set queryThreadLogRetentionSize(value: number) {
    this._queryThreadLogRetentionSize = value;
  }
  public resetQueryThreadLogRetentionSize() {
    this._queryThreadLogRetentionSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryThreadLogRetentionSizeInput() {
    return this._queryThreadLogRetentionSize;
  }

  // query_thread_log_retention_time - computed: true, optional: true, required: false
  private _queryThreadLogRetentionTime?: number; 
  public get queryThreadLogRetentionTime() {
    return this.getNumberAttribute('query_thread_log_retention_time');
  }
  public set queryThreadLogRetentionTime(value: number) {
    this._queryThreadLogRetentionTime = value;
  }
  public resetQueryThreadLogRetentionTime() {
    this._queryThreadLogRetentionTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryThreadLogRetentionTimeInput() {
    return this._queryThreadLogRetentionTime;
  }

  // query_views_log_enabled - computed: true, optional: true, required: false
  private _queryViewsLogEnabled?: boolean | cdktf.IResolvable; 
  public get queryViewsLogEnabled() {
    return this.getBooleanAttribute('query_views_log_enabled');
  }
  public set queryViewsLogEnabled(value: boolean | cdktf.IResolvable) {
    this._queryViewsLogEnabled = value;
  }
  public resetQueryViewsLogEnabled() {
    this._queryViewsLogEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryViewsLogEnabledInput() {
    return this._queryViewsLogEnabled;
  }

  // query_views_log_retention_size - computed: true, optional: true, required: false
  private _queryViewsLogRetentionSize?: number; 
  public get queryViewsLogRetentionSize() {
    return this.getNumberAttribute('query_views_log_retention_size');
  }
  public set queryViewsLogRetentionSize(value: number) {
    this._queryViewsLogRetentionSize = value;
  }
  public resetQueryViewsLogRetentionSize() {
    this._queryViewsLogRetentionSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryViewsLogRetentionSizeInput() {
    return this._queryViewsLogRetentionSize;
  }

  // query_views_log_retention_time - computed: true, optional: true, required: false
  private _queryViewsLogRetentionTime?: number; 
  public get queryViewsLogRetentionTime() {
    return this.getNumberAttribute('query_views_log_retention_time');
  }
  public set queryViewsLogRetentionTime(value: number) {
    this._queryViewsLogRetentionTime = value;
  }
  public resetQueryViewsLogRetentionTime() {
    this._queryViewsLogRetentionTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryViewsLogRetentionTimeInput() {
    return this._queryViewsLogRetentionTime;
  }

  // session_log_enabled - computed: true, optional: true, required: false
  private _sessionLogEnabled?: boolean | cdktf.IResolvable; 
  public get sessionLogEnabled() {
    return this.getBooleanAttribute('session_log_enabled');
  }
  public set sessionLogEnabled(value: boolean | cdktf.IResolvable) {
    this._sessionLogEnabled = value;
  }
  public resetSessionLogEnabled() {
    this._sessionLogEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionLogEnabledInput() {
    return this._sessionLogEnabled;
  }

  // session_log_retention_size - computed: true, optional: true, required: false
  private _sessionLogRetentionSize?: number; 
  public get sessionLogRetentionSize() {
    return this.getNumberAttribute('session_log_retention_size');
  }
  public set sessionLogRetentionSize(value: number) {
    this._sessionLogRetentionSize = value;
  }
  public resetSessionLogRetentionSize() {
    this._sessionLogRetentionSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionLogRetentionSizeInput() {
    return this._sessionLogRetentionSize;
  }

  // session_log_retention_time - computed: true, optional: true, required: false
  private _sessionLogRetentionTime?: number; 
  public get sessionLogRetentionTime() {
    return this.getNumberAttribute('session_log_retention_time');
  }
  public set sessionLogRetentionTime(value: number) {
    this._sessionLogRetentionTime = value;
  }
  public resetSessionLogRetentionTime() {
    this._sessionLogRetentionTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionLogRetentionTimeInput() {
    return this._sessionLogRetentionTime;
  }

  // text_log_enabled - computed: true, optional: true, required: false
  private _textLogEnabled?: boolean | cdktf.IResolvable; 
  public get textLogEnabled() {
    return this.getBooleanAttribute('text_log_enabled');
  }
  public set textLogEnabled(value: boolean | cdktf.IResolvable) {
    this._textLogEnabled = value;
  }
  public resetTextLogEnabled() {
    this._textLogEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textLogEnabledInput() {
    return this._textLogEnabled;
  }

  // text_log_level - computed: true, optional: true, required: false
  private _textLogLevel?: string; 
  public get textLogLevel() {
    return this.getStringAttribute('text_log_level');
  }
  public set textLogLevel(value: string) {
    this._textLogLevel = value;
  }
  public resetTextLogLevel() {
    this._textLogLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textLogLevelInput() {
    return this._textLogLevel;
  }

  // text_log_retention_size - computed: true, optional: true, required: false
  private _textLogRetentionSize?: number; 
  public get textLogRetentionSize() {
    return this.getNumberAttribute('text_log_retention_size');
  }
  public set textLogRetentionSize(value: number) {
    this._textLogRetentionSize = value;
  }
  public resetTextLogRetentionSize() {
    this._textLogRetentionSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textLogRetentionSizeInput() {
    return this._textLogRetentionSize;
  }

  // text_log_retention_time - computed: true, optional: true, required: false
  private _textLogRetentionTime?: number; 
  public get textLogRetentionTime() {
    return this.getNumberAttribute('text_log_retention_time');
  }
  public set textLogRetentionTime(value: number) {
    this._textLogRetentionTime = value;
  }
  public resetTextLogRetentionTime() {
    this._textLogRetentionTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textLogRetentionTimeInput() {
    return this._textLogRetentionTime;
  }

  // timezone - computed: true, optional: true, required: false
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }

  // total_memory_profiler_step - computed: true, optional: true, required: false
  private _totalMemoryProfilerStep?: number; 
  public get totalMemoryProfilerStep() {
    return this.getNumberAttribute('total_memory_profiler_step');
  }
  public set totalMemoryProfilerStep(value: number) {
    this._totalMemoryProfilerStep = value;
  }
  public resetTotalMemoryProfilerStep() {
    this._totalMemoryProfilerStep = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalMemoryProfilerStepInput() {
    return this._totalMemoryProfilerStep;
  }

  // trace_log_enabled - computed: true, optional: true, required: false
  private _traceLogEnabled?: boolean | cdktf.IResolvable; 
  public get traceLogEnabled() {
    return this.getBooleanAttribute('trace_log_enabled');
  }
  public set traceLogEnabled(value: boolean | cdktf.IResolvable) {
    this._traceLogEnabled = value;
  }
  public resetTraceLogEnabled() {
    this._traceLogEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get traceLogEnabledInput() {
    return this._traceLogEnabled;
  }

  // trace_log_retention_size - computed: true, optional: true, required: false
  private _traceLogRetentionSize?: number; 
  public get traceLogRetentionSize() {
    return this.getNumberAttribute('trace_log_retention_size');
  }
  public set traceLogRetentionSize(value: number) {
    this._traceLogRetentionSize = value;
  }
  public resetTraceLogRetentionSize() {
    this._traceLogRetentionSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get traceLogRetentionSizeInput() {
    return this._traceLogRetentionSize;
  }

  // trace_log_retention_time - computed: true, optional: true, required: false
  private _traceLogRetentionTime?: number; 
  public get traceLogRetentionTime() {
    return this.getNumberAttribute('trace_log_retention_time');
  }
  public set traceLogRetentionTime(value: number) {
    this._traceLogRetentionTime = value;
  }
  public resetTraceLogRetentionTime() {
    this._traceLogRetentionTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get traceLogRetentionTimeInput() {
    return this._traceLogRetentionTime;
  }

  // uncompressed_cache_size - computed: true, optional: true, required: false
  private _uncompressedCacheSize?: number; 
  public get uncompressedCacheSize() {
    return this.getNumberAttribute('uncompressed_cache_size');
  }
  public set uncompressedCacheSize(value: number) {
    this._uncompressedCacheSize = value;
  }
  public resetUncompressedCacheSize() {
    this._uncompressedCacheSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uncompressedCacheSizeInput() {
    return this._uncompressedCacheSize;
  }

  // zookeeper_log_enabled - computed: true, optional: true, required: false
  private _zookeeperLogEnabled?: boolean | cdktf.IResolvable; 
  public get zookeeperLogEnabled() {
    return this.getBooleanAttribute('zookeeper_log_enabled');
  }
  public set zookeeperLogEnabled(value: boolean | cdktf.IResolvable) {
    this._zookeeperLogEnabled = value;
  }
  public resetZookeeperLogEnabled() {
    this._zookeeperLogEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zookeeperLogEnabledInput() {
    return this._zookeeperLogEnabled;
  }

  // zookeeper_log_retention_size - computed: true, optional: true, required: false
  private _zookeeperLogRetentionSize?: number; 
  public get zookeeperLogRetentionSize() {
    return this.getNumberAttribute('zookeeper_log_retention_size');
  }
  public set zookeeperLogRetentionSize(value: number) {
    this._zookeeperLogRetentionSize = value;
  }
  public resetZookeeperLogRetentionSize() {
    this._zookeeperLogRetentionSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zookeeperLogRetentionSizeInput() {
    return this._zookeeperLogRetentionSize;
  }

  // zookeeper_log_retention_time - computed: true, optional: true, required: false
  private _zookeeperLogRetentionTime?: number; 
  public get zookeeperLogRetentionTime() {
    return this.getNumberAttribute('zookeeper_log_retention_time');
  }
  public set zookeeperLogRetentionTime(value: number) {
    this._zookeeperLogRetentionTime = value;
  }
  public resetZookeeperLogRetentionTime() {
    this._zookeeperLogRetentionTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zookeeperLogRetentionTimeInput() {
    return this._zookeeperLogRetentionTime;
  }

  // compression - computed: false, optional: true, required: false
  private _compression = new DataYandexMdbClickhouseClusterClickhouseConfigCompressionList(this, "compression", false);
  public get compression() {
    return this._compression;
  }
  public putCompression(value: DataYandexMdbClickhouseClusterClickhouseConfigCompression[] | cdktf.IResolvable) {
    this._compression.internalValue = value;
  }
  public resetCompression() {
    this._compression.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionInput() {
    return this._compression.internalValue;
  }

  // graphite_rollup - computed: false, optional: true, required: false
  private _graphiteRollup = new DataYandexMdbClickhouseClusterClickhouseConfigGraphiteRollupList(this, "graphite_rollup", false);
  public get graphiteRollup() {
    return this._graphiteRollup;
  }
  public putGraphiteRollup(value: DataYandexMdbClickhouseClusterClickhouseConfigGraphiteRollup[] | cdktf.IResolvable) {
    this._graphiteRollup.internalValue = value;
  }
  public resetGraphiteRollup() {
    this._graphiteRollup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get graphiteRollupInput() {
    return this._graphiteRollup.internalValue;
  }

  // jdbc_bridge - computed: false, optional: true, required: false
  private _jdbcBridge = new DataYandexMdbClickhouseClusterClickhouseConfigJdbcBridgeOutputReference(this, "jdbc_bridge");
  public get jdbcBridge() {
    return this._jdbcBridge;
  }
  public putJdbcBridge(value: DataYandexMdbClickhouseClusterClickhouseConfigJdbcBridge) {
    this._jdbcBridge.internalValue = value;
  }
  public resetJdbcBridge() {
    this._jdbcBridge.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jdbcBridgeInput() {
    return this._jdbcBridge.internalValue;
  }

  // kafka - computed: false, optional: true, required: false
  private _kafka = new DataYandexMdbClickhouseClusterClickhouseConfigKafkaOutputReference(this, "kafka");
  public get kafka() {
    return this._kafka;
  }
  public putKafka(value: DataYandexMdbClickhouseClusterClickhouseConfigKafka) {
    this._kafka.internalValue = value;
  }
  public resetKafka() {
    this._kafka.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaInput() {
    return this._kafka.internalValue;
  }

  // kafka_topic - computed: false, optional: true, required: false
  private _kafkaTopic = new DataYandexMdbClickhouseClusterClickhouseConfigKafkaTopicList(this, "kafka_topic", false);
  public get kafkaTopic() {
    return this._kafkaTopic;
  }
  public putKafkaTopic(value: DataYandexMdbClickhouseClusterClickhouseConfigKafkaTopic[] | cdktf.IResolvable) {
    this._kafkaTopic.internalValue = value;
  }
  public resetKafkaTopic() {
    this._kafkaTopic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaTopicInput() {
    return this._kafkaTopic.internalValue;
  }

  // merge_tree - computed: false, optional: true, required: false
  private _mergeTree = new DataYandexMdbClickhouseClusterClickhouseConfigMergeTreeOutputReference(this, "merge_tree");
  public get mergeTree() {
    return this._mergeTree;
  }
  public putMergeTree(value: DataYandexMdbClickhouseClusterClickhouseConfigMergeTree) {
    this._mergeTree.internalValue = value;
  }
  public resetMergeTree() {
    this._mergeTree.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mergeTreeInput() {
    return this._mergeTree.internalValue;
  }

  // query_cache - computed: false, optional: true, required: false
  private _queryCache = new DataYandexMdbClickhouseClusterClickhouseConfigQueryCacheOutputReference(this, "query_cache");
  public get queryCache() {
    return this._queryCache;
  }
  public putQueryCache(value: DataYandexMdbClickhouseClusterClickhouseConfigQueryCache) {
    this._queryCache.internalValue = value;
  }
  public resetQueryCache() {
    this._queryCache.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryCacheInput() {
    return this._queryCache.internalValue;
  }

  // query_masking_rules - computed: false, optional: true, required: false
  private _queryMaskingRules = new DataYandexMdbClickhouseClusterClickhouseConfigQueryMaskingRulesList(this, "query_masking_rules", false);
  public get queryMaskingRules() {
    return this._queryMaskingRules;
  }
  public putQueryMaskingRules(value: DataYandexMdbClickhouseClusterClickhouseConfigQueryMaskingRules[] | cdktf.IResolvable) {
    this._queryMaskingRules.internalValue = value;
  }
  public resetQueryMaskingRules() {
    this._queryMaskingRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryMaskingRulesInput() {
    return this._queryMaskingRules.internalValue;
  }

  // rabbitmq - computed: false, optional: true, required: false
  private _rabbitmq = new DataYandexMdbClickhouseClusterClickhouseConfigRabbitmqOutputReference(this, "rabbitmq");
  public get rabbitmq() {
    return this._rabbitmq;
  }
  public putRabbitmq(value: DataYandexMdbClickhouseClusterClickhouseConfigRabbitmq) {
    this._rabbitmq.internalValue = value;
  }
  public resetRabbitmq() {
    this._rabbitmq.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rabbitmqInput() {
    return this._rabbitmq.internalValue;
  }
}
export interface DataYandexMdbClickhouseClusterClickhouseResources {
  /**
  * Volume of the storage available to a ClickHouse host, in gigabytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#disk_size DataYandexMdbClickhouseCluster#disk_size}
  */
  readonly diskSize?: number;
  /**
  * Type of the storage of ClickHouse hosts. For more information see [the official documentation](https://yandex.cloud/docs/managed-clickhouse/concepts/storage).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#disk_type_id DataYandexMdbClickhouseCluster#disk_type_id}
  */
  readonly diskTypeId?: string;
  /**
  * The ID of the preset for computational resources available to a ClickHouse host (CPU, memory etc.). For more information, see [the official documentation](https://yandex.cloud/docs/managed-clickhouse/concepts).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#resource_preset_id DataYandexMdbClickhouseCluster#resource_preset_id}
  */
  readonly resourcePresetId?: string;
}

export function dataYandexMdbClickhouseClusterClickhouseResourcesToTerraform(struct?: DataYandexMdbClickhouseClusterClickhouseResourcesOutputReference | DataYandexMdbClickhouseClusterClickhouseResources): any {
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


export function dataYandexMdbClickhouseClusterClickhouseResourcesToHclTerraform(struct?: DataYandexMdbClickhouseClusterClickhouseResourcesOutputReference | DataYandexMdbClickhouseClusterClickhouseResources): any {
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

export class DataYandexMdbClickhouseClusterClickhouseResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataYandexMdbClickhouseClusterClickhouseResources | undefined {
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

  public set internalValue(value: DataYandexMdbClickhouseClusterClickhouseResources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._diskSize = undefined;
      this._diskTypeId = undefined;
      this._resourcePresetId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._diskSize = value.diskSize;
      this._diskTypeId = value.diskTypeId;
      this._resourcePresetId = value.resourcePresetId;
    }
  }

  // disk_size - computed: true, optional: true, required: false
  private _diskSize?: number; 
  public get diskSize() {
    return this.getNumberAttribute('disk_size');
  }
  public set diskSize(value: number) {
    this._diskSize = value;
  }
  public resetDiskSize() {
    this._diskSize = undefined;
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

  // resource_preset_id - computed: true, optional: true, required: false
  private _resourcePresetId?: string; 
  public get resourcePresetId() {
    return this.getStringAttribute('resource_preset_id');
  }
  public set resourcePresetId(value: string) {
    this._resourcePresetId = value;
  }
  public resetResourcePresetId() {
    this._resourcePresetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcePresetIdInput() {
    return this._resourcePresetId;
  }
}
export interface DataYandexMdbClickhouseClusterClickhouse {
  /**
  * config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#config DataYandexMdbClickhouseCluster#config}
  */
  readonly config?: DataYandexMdbClickhouseClusterClickhouseConfig;
  /**
  * resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#resources DataYandexMdbClickhouseCluster#resources}
  */
  readonly resources?: DataYandexMdbClickhouseClusterClickhouseResources;
}

export function dataYandexMdbClickhouseClusterClickhouseToTerraform(struct?: DataYandexMdbClickhouseClusterClickhouseOutputReference | DataYandexMdbClickhouseClusterClickhouse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config: dataYandexMdbClickhouseClusterClickhouseConfigToTerraform(struct!.config),
    resources: dataYandexMdbClickhouseClusterClickhouseResourcesToTerraform(struct!.resources),
  }
}


export function dataYandexMdbClickhouseClusterClickhouseToHclTerraform(struct?: DataYandexMdbClickhouseClusterClickhouseOutputReference | DataYandexMdbClickhouseClusterClickhouse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config: {
      value: dataYandexMdbClickhouseClusterClickhouseConfigToHclTerraform(struct!.config),
      isBlock: true,
      type: "list",
      storageClassType: "DataYandexMdbClickhouseClusterClickhouseConfigList",
    },
    resources: {
      value: dataYandexMdbClickhouseClusterClickhouseResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "list",
      storageClassType: "DataYandexMdbClickhouseClusterClickhouseResourcesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataYandexMdbClickhouseClusterClickhouseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataYandexMdbClickhouseClusterClickhouse | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config?.internalValue;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbClickhouseClusterClickhouse | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._config.internalValue = undefined;
      this._resources.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._config.internalValue = value.config;
      this._resources.internalValue = value.resources;
    }
  }

  // config - computed: false, optional: true, required: false
  private _config = new DataYandexMdbClickhouseClusterClickhouseConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: DataYandexMdbClickhouseClusterClickhouseConfig) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataYandexMdbClickhouseClusterClickhouseResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataYandexMdbClickhouseClusterClickhouseResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }
}
export interface DataYandexMdbClickhouseClusterCloudStorage {
  /**
  * Enables temporary storage in the cluster repository of data requested from the object repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#data_cache_enabled DataYandexMdbClickhouseCluster#data_cache_enabled}
  */
  readonly dataCacheEnabled?: boolean | cdktf.IResolvable;
  /**
  * Defines the maximum amount of memory (in bytes) allocated in the cluster storage for temporary storage of data requested from the object storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#data_cache_max_size DataYandexMdbClickhouseCluster#data_cache_max_size}
  */
  readonly dataCacheMaxSize?: number;
  /**
  * Whether to use Yandex Object Storage for storing ClickHouse data. Can be either `true` or `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#enabled DataYandexMdbClickhouseCluster#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Sets the minimum free space ratio in the cluster storage. If the free space is lower than this value, the data is transferred to Yandex Object Storage. Acceptable values are 0 to 1, inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#move_factor DataYandexMdbClickhouseCluster#move_factor}
  */
  readonly moveFactor?: number;
  /**
  * Disables merging of data parts in `Yandex Object Storage`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#prefer_not_to_merge DataYandexMdbClickhouseCluster#prefer_not_to_merge}
  */
  readonly preferNotToMerge?: boolean | cdktf.IResolvable;
}

export function dataYandexMdbClickhouseClusterCloudStorageToTerraform(struct?: DataYandexMdbClickhouseClusterCloudStorageOutputReference | DataYandexMdbClickhouseClusterCloudStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_cache_enabled: cdktf.booleanToTerraform(struct!.dataCacheEnabled),
    data_cache_max_size: cdktf.numberToTerraform(struct!.dataCacheMaxSize),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    move_factor: cdktf.numberToTerraform(struct!.moveFactor),
    prefer_not_to_merge: cdktf.booleanToTerraform(struct!.preferNotToMerge),
  }
}


export function dataYandexMdbClickhouseClusterCloudStorageToHclTerraform(struct?: DataYandexMdbClickhouseClusterCloudStorageOutputReference | DataYandexMdbClickhouseClusterCloudStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_cache_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.dataCacheEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    data_cache_max_size: {
      value: cdktf.numberToHclTerraform(struct!.dataCacheMaxSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    move_factor: {
      value: cdktf.numberToHclTerraform(struct!.moveFactor),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prefer_not_to_merge: {
      value: cdktf.booleanToHclTerraform(struct!.preferNotToMerge),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataYandexMdbClickhouseClusterCloudStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataYandexMdbClickhouseClusterCloudStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataCacheEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataCacheEnabled = this._dataCacheEnabled;
    }
    if (this._dataCacheMaxSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataCacheMaxSize = this._dataCacheMaxSize;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._moveFactor !== undefined) {
      hasAnyValues = true;
      internalValueResult.moveFactor = this._moveFactor;
    }
    if (this._preferNotToMerge !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferNotToMerge = this._preferNotToMerge;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbClickhouseClusterCloudStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataCacheEnabled = undefined;
      this._dataCacheMaxSize = undefined;
      this._enabled = undefined;
      this._moveFactor = undefined;
      this._preferNotToMerge = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataCacheEnabled = value.dataCacheEnabled;
      this._dataCacheMaxSize = value.dataCacheMaxSize;
      this._enabled = value.enabled;
      this._moveFactor = value.moveFactor;
      this._preferNotToMerge = value.preferNotToMerge;
    }
  }

  // data_cache_enabled - computed: true, optional: true, required: false
  private _dataCacheEnabled?: boolean | cdktf.IResolvable; 
  public get dataCacheEnabled() {
    return this.getBooleanAttribute('data_cache_enabled');
  }
  public set dataCacheEnabled(value: boolean | cdktf.IResolvable) {
    this._dataCacheEnabled = value;
  }
  public resetDataCacheEnabled() {
    this._dataCacheEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataCacheEnabledInput() {
    return this._dataCacheEnabled;
  }

  // data_cache_max_size - computed: true, optional: true, required: false
  private _dataCacheMaxSize?: number; 
  public get dataCacheMaxSize() {
    return this.getNumberAttribute('data_cache_max_size');
  }
  public set dataCacheMaxSize(value: number) {
    this._dataCacheMaxSize = value;
  }
  public resetDataCacheMaxSize() {
    this._dataCacheMaxSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataCacheMaxSizeInput() {
    return this._dataCacheMaxSize;
  }

  // enabled - computed: false, optional: true, required: false
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

  // move_factor - computed: true, optional: true, required: false
  private _moveFactor?: number; 
  public get moveFactor() {
    return this.getNumberAttribute('move_factor');
  }
  public set moveFactor(value: number) {
    this._moveFactor = value;
  }
  public resetMoveFactor() {
    this._moveFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moveFactorInput() {
    return this._moveFactor;
  }

  // prefer_not_to_merge - computed: true, optional: true, required: false
  private _preferNotToMerge?: boolean | cdktf.IResolvable; 
  public get preferNotToMerge() {
    return this.getBooleanAttribute('prefer_not_to_merge');
  }
  public set preferNotToMerge(value: boolean | cdktf.IResolvable) {
    this._preferNotToMerge = value;
  }
  public resetPreferNotToMerge() {
    this._preferNotToMerge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferNotToMergeInput() {
    return this._preferNotToMerge;
  }
}
export interface DataYandexMdbClickhouseClusterDatabase {
  /**
  * The name of the database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#name DataYandexMdbClickhouseCluster#name}
  */
  readonly name?: string;
}

export function dataYandexMdbClickhouseClusterDatabaseToTerraform(struct?: DataYandexMdbClickhouseClusterDatabase | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataYandexMdbClickhouseClusterDatabaseToHclTerraform(struct?: DataYandexMdbClickhouseClusterDatabase | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataYandexMdbClickhouseClusterDatabaseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataYandexMdbClickhouseClusterDatabase | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbClickhouseClusterDatabase | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}

export class DataYandexMdbClickhouseClusterDatabaseList extends cdktf.ComplexList {
  public internalValue? : DataYandexMdbClickhouseClusterDatabase[] | cdktf.IResolvable

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
  public get(index: number): DataYandexMdbClickhouseClusterDatabaseOutputReference {
    return new DataYandexMdbClickhouseClusterDatabaseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexMdbClickhouseClusterFormatSchema {
  /**
  * The name of the format schema.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#name DataYandexMdbClickhouseCluster#name}
  */
  readonly name?: string;
  /**
  * Type of the format schema.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#type DataYandexMdbClickhouseCluster#type}
  */
  readonly type?: string;
  /**
  * Format schema file URL. You can only use format schemas stored in Yandex Object Storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#uri DataYandexMdbClickhouseCluster#uri}
  */
  readonly uri?: string;
}

export function dataYandexMdbClickhouseClusterFormatSchemaToTerraform(struct?: DataYandexMdbClickhouseClusterFormatSchema | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
    uri: cdktf.stringToTerraform(struct!.uri),
  }
}


export function dataYandexMdbClickhouseClusterFormatSchemaToHclTerraform(struct?: DataYandexMdbClickhouseClusterFormatSchema | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uri: {
      value: cdktf.stringToHclTerraform(struct!.uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataYandexMdbClickhouseClusterFormatSchemaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataYandexMdbClickhouseClusterFormatSchema | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbClickhouseClusterFormatSchema | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._type = undefined;
      this._uri = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._type = value.type;
      this._uri = value.uri;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // uri - computed: false, optional: true, required: false
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  public resetUri() {
    this._uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }
}

export class DataYandexMdbClickhouseClusterFormatSchemaList extends cdktf.ComplexList {
  public internalValue? : DataYandexMdbClickhouseClusterFormatSchema[] | cdktf.IResolvable

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
  public get(index: number): DataYandexMdbClickhouseClusterFormatSchemaOutputReference {
    return new DataYandexMdbClickhouseClusterFormatSchemaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexMdbClickhouseClusterHost {
  /**
  * Sets whether the host should get a public IP address on creation. Can be either `true` or `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#assign_public_ip DataYandexMdbClickhouseCluster#assign_public_ip}
  */
  readonly assignPublicIp?: boolean | cdktf.IResolvable;
  /**
  * The fully qualified domain name of the host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#fqdn DataYandexMdbClickhouseCluster#fqdn}
  */
  readonly fqdn?: string;
  /**
  * The name of the shard to which the host belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#shard_name DataYandexMdbClickhouseCluster#shard_name}
  */
  readonly shardName?: string;
  /**
  * The ID of the subnet, to which the host belongs. The subnet must be a part of the network to which the cluster belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#subnet_id DataYandexMdbClickhouseCluster#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * The type of the host to be deployed. Can be either `CLICKHOUSE` or `ZOOKEEPER`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#type DataYandexMdbClickhouseCluster#type}
  */
  readonly type?: string;
  /**
  * The [availability zone](https://yandex.cloud/docs/overview/concepts/geo-scope) where resource is located. If it is not provided, the default provider zone will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#zone DataYandexMdbClickhouseCluster#zone}
  */
  readonly zone?: string;
}

export function dataYandexMdbClickhouseClusterHostToTerraform(struct?: DataYandexMdbClickhouseClusterHost | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    assign_public_ip: cdktf.booleanToTerraform(struct!.assignPublicIp),
    fqdn: cdktf.stringToTerraform(struct!.fqdn),
    shard_name: cdktf.stringToTerraform(struct!.shardName),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    type: cdktf.stringToTerraform(struct!.type),
    zone: cdktf.stringToTerraform(struct!.zone),
  }
}


export function dataYandexMdbClickhouseClusterHostToHclTerraform(struct?: DataYandexMdbClickhouseClusterHost | cdktf.IResolvable): any {
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
    fqdn: {
      value: cdktf.stringToHclTerraform(struct!.fqdn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
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

export class DataYandexMdbClickhouseClusterHostOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataYandexMdbClickhouseClusterHost | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._assignPublicIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignPublicIp = this._assignPublicIp;
    }
    if (this._fqdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdn = this._fqdn;
    }
    if (this._shardName !== undefined) {
      hasAnyValues = true;
      internalValueResult.shardName = this._shardName;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._zone !== undefined) {
      hasAnyValues = true;
      internalValueResult.zone = this._zone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbClickhouseClusterHost | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._assignPublicIp = undefined;
      this._fqdn = undefined;
      this._shardName = undefined;
      this._subnetId = undefined;
      this._type = undefined;
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
      this._fqdn = value.fqdn;
      this._shardName = value.shardName;
      this._subnetId = value.subnetId;
      this._type = value.type;
      this._zone = value.zone;
    }
  }

  // assign_public_ip - computed: false, optional: true, required: false
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

  // fqdn - computed: true, optional: true, required: false
  private _fqdn?: string; 
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }
  public set fqdn(value: string) {
    this._fqdn = value;
  }
  public resetFqdn() {
    this._fqdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnInput() {
    return this._fqdn;
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

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // zone - computed: false, optional: true, required: false
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  public resetZone() {
    this._zone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }
}

export class DataYandexMdbClickhouseClusterHostList extends cdktf.ComplexList {
  public internalValue? : DataYandexMdbClickhouseClusterHost[] | cdktf.IResolvable

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
  public get(index: number): DataYandexMdbClickhouseClusterHostOutputReference {
    return new DataYandexMdbClickhouseClusterHostOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexMdbClickhouseClusterMaintenanceWindow {
  /**
  * Day of week for maintenance window if window type is weekly. Possible values: `MON`, `TUE`, `WED`, `THU`, `FRI`, `SAT`, `SUN`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#day DataYandexMdbClickhouseCluster#day}
  */
  readonly day?: string;
  /**
  * Hour of day in UTC time zone (1-24) for maintenance window if window type is weekly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#hour DataYandexMdbClickhouseCluster#hour}
  */
  readonly hour?: number;
  /**
  * Type of maintenance window. Can be either `ANYTIME` or `WEEKLY`. A day and hour of window need to be specified with weekly window.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#type DataYandexMdbClickhouseCluster#type}
  */
  readonly type?: string;
}

export function dataYandexMdbClickhouseClusterMaintenanceWindowToTerraform(struct?: DataYandexMdbClickhouseClusterMaintenanceWindowOutputReference | DataYandexMdbClickhouseClusterMaintenanceWindow): any {
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


export function dataYandexMdbClickhouseClusterMaintenanceWindowToHclTerraform(struct?: DataYandexMdbClickhouseClusterMaintenanceWindowOutputReference | DataYandexMdbClickhouseClusterMaintenanceWindow): any {
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

export class DataYandexMdbClickhouseClusterMaintenanceWindowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataYandexMdbClickhouseClusterMaintenanceWindow | undefined {
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

  public set internalValue(value: DataYandexMdbClickhouseClusterMaintenanceWindow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._day = undefined;
      this._hour = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._day = value.day;
      this._hour = value.hour;
      this._type = value.type;
    }
  }

  // day - computed: false, optional: true, required: false
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

  // hour - computed: false, optional: true, required: false
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

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface DataYandexMdbClickhouseClusterMlModel {
  /**
  * The name of the ml model.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#name DataYandexMdbClickhouseCluster#name}
  */
  readonly name?: string;
  /**
  * Type of the model.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#type DataYandexMdbClickhouseCluster#type}
  */
  readonly type?: string;
  /**
  * Model file URL. You can only use models stored in Yandex Object Storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#uri DataYandexMdbClickhouseCluster#uri}
  */
  readonly uri?: string;
}

export function dataYandexMdbClickhouseClusterMlModelToTerraform(struct?: DataYandexMdbClickhouseClusterMlModel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
    uri: cdktf.stringToTerraform(struct!.uri),
  }
}


export function dataYandexMdbClickhouseClusterMlModelToHclTerraform(struct?: DataYandexMdbClickhouseClusterMlModel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uri: {
      value: cdktf.stringToHclTerraform(struct!.uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataYandexMdbClickhouseClusterMlModelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataYandexMdbClickhouseClusterMlModel | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbClickhouseClusterMlModel | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._type = undefined;
      this._uri = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._type = value.type;
      this._uri = value.uri;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // uri - computed: false, optional: true, required: false
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  public resetUri() {
    this._uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }
}

export class DataYandexMdbClickhouseClusterMlModelList extends cdktf.ComplexList {
  public internalValue? : DataYandexMdbClickhouseClusterMlModel[] | cdktf.IResolvable

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
  public get(index: number): DataYandexMdbClickhouseClusterMlModelOutputReference {
    return new DataYandexMdbClickhouseClusterMlModelOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexMdbClickhouseClusterShardResources {
  /**
  * Volume of the storage available to a ClickHouse host, in gigabytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#disk_size DataYandexMdbClickhouseCluster#disk_size}
  */
  readonly diskSize?: number;
  /**
  * Type of the storage of ClickHouse hosts. For more information see [the official documentation](https://yandex.cloud/docs/managed-clickhouse/concepts/storage).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#disk_type_id DataYandexMdbClickhouseCluster#disk_type_id}
  */
  readonly diskTypeId?: string;
  /**
  * The ID of the preset for computational resources available to a ClickHouse host (CPU, memory etc.). For more information, see [the official documentation](https://yandex.cloud/docs/managed-clickhouse/concepts).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#resource_preset_id DataYandexMdbClickhouseCluster#resource_preset_id}
  */
  readonly resourcePresetId?: string;
}

export function dataYandexMdbClickhouseClusterShardResourcesToTerraform(struct?: DataYandexMdbClickhouseClusterShardResourcesOutputReference | DataYandexMdbClickhouseClusterShardResources): any {
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


export function dataYandexMdbClickhouseClusterShardResourcesToHclTerraform(struct?: DataYandexMdbClickhouseClusterShardResourcesOutputReference | DataYandexMdbClickhouseClusterShardResources): any {
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

export class DataYandexMdbClickhouseClusterShardResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataYandexMdbClickhouseClusterShardResources | undefined {
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

  public set internalValue(value: DataYandexMdbClickhouseClusterShardResources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._diskSize = undefined;
      this._diskTypeId = undefined;
      this._resourcePresetId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._diskSize = value.diskSize;
      this._diskTypeId = value.diskTypeId;
      this._resourcePresetId = value.resourcePresetId;
    }
  }

  // disk_size - computed: true, optional: true, required: false
  private _diskSize?: number; 
  public get diskSize() {
    return this.getNumberAttribute('disk_size');
  }
  public set diskSize(value: number) {
    this._diskSize = value;
  }
  public resetDiskSize() {
    this._diskSize = undefined;
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

  // resource_preset_id - computed: true, optional: true, required: false
  private _resourcePresetId?: string; 
  public get resourcePresetId() {
    return this.getStringAttribute('resource_preset_id');
  }
  public set resourcePresetId(value: string) {
    this._resourcePresetId = value;
  }
  public resetResourcePresetId() {
    this._resourcePresetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcePresetIdInput() {
    return this._resourcePresetId;
  }
}
export interface DataYandexMdbClickhouseClusterShard {
  /**
  * The name of shard.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#name DataYandexMdbClickhouseCluster#name}
  */
  readonly name?: string;
  /**
  * The weight of shard.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#weight DataYandexMdbClickhouseCluster#weight}
  */
  readonly weight?: number;
  /**
  * resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#resources DataYandexMdbClickhouseCluster#resources}
  */
  readonly resources?: DataYandexMdbClickhouseClusterShardResources;
}

export function dataYandexMdbClickhouseClusterShardToTerraform(struct?: DataYandexMdbClickhouseClusterShard | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    weight: cdktf.numberToTerraform(struct!.weight),
    resources: dataYandexMdbClickhouseClusterShardResourcesToTerraform(struct!.resources),
  }
}


export function dataYandexMdbClickhouseClusterShardToHclTerraform(struct?: DataYandexMdbClickhouseClusterShard | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resources: {
      value: dataYandexMdbClickhouseClusterShardResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "list",
      storageClassType: "DataYandexMdbClickhouseClusterShardResourcesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataYandexMdbClickhouseClusterShardOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataYandexMdbClickhouseClusterShard | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbClickhouseClusterShard | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._weight = undefined;
      this._resources.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._weight = value.weight;
      this._resources.internalValue = value.resources;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // weight - computed: true, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataYandexMdbClickhouseClusterShardResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataYandexMdbClickhouseClusterShardResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }
}

export class DataYandexMdbClickhouseClusterShardList extends cdktf.ComplexList {
  public internalValue? : DataYandexMdbClickhouseClusterShard[] | cdktf.IResolvable

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
  public get(index: number): DataYandexMdbClickhouseClusterShardOutputReference {
    return new DataYandexMdbClickhouseClusterShardOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexMdbClickhouseClusterShardGroup {
  /**
  * Description of the shard group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#description DataYandexMdbClickhouseCluster#description}
  */
  readonly description?: string;
  /**
  * The name of the shard group, used as cluster name in Distributed tables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#name DataYandexMdbClickhouseCluster#name}
  */
  readonly name?: string;
  /**
  * List of shards names that belong to the shard group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#shard_names DataYandexMdbClickhouseCluster#shard_names}
  */
  readonly shardNames?: string[];
}

export function dataYandexMdbClickhouseClusterShardGroupToTerraform(struct?: DataYandexMdbClickhouseClusterShardGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
    shard_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.shardNames),
  }
}


export function dataYandexMdbClickhouseClusterShardGroupToHclTerraform(struct?: DataYandexMdbClickhouseClusterShardGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shard_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.shardNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataYandexMdbClickhouseClusterShardGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataYandexMdbClickhouseClusterShardGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._shardNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.shardNames = this._shardNames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbClickhouseClusterShardGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._name = undefined;
      this._shardNames = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._name = value.name;
      this._shardNames = value.shardNames;
    }
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

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // shard_names - computed: false, optional: true, required: false
  private _shardNames?: string[]; 
  public get shardNames() {
    return this.getListAttribute('shard_names');
  }
  public set shardNames(value: string[]) {
    this._shardNames = value;
  }
  public resetShardNames() {
    this._shardNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shardNamesInput() {
    return this._shardNames;
  }
}

export class DataYandexMdbClickhouseClusterShardGroupList extends cdktf.ComplexList {
  public internalValue? : DataYandexMdbClickhouseClusterShardGroup[] | cdktf.IResolvable

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
  public get(index: number): DataYandexMdbClickhouseClusterShardGroupOutputReference {
    return new DataYandexMdbClickhouseClusterShardGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexMdbClickhouseClusterUserPermission {
  /**
  * The name of the database that the permission grants access to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#database_name DataYandexMdbClickhouseCluster#database_name}
  */
  readonly databaseName?: string;
}

export function dataYandexMdbClickhouseClusterUserPermissionToTerraform(struct?: DataYandexMdbClickhouseClusterUserPermission | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database_name: cdktf.stringToTerraform(struct!.databaseName),
  }
}


export function dataYandexMdbClickhouseClusterUserPermissionToHclTerraform(struct?: DataYandexMdbClickhouseClusterUserPermission | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    database_name: {
      value: cdktf.stringToHclTerraform(struct!.databaseName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataYandexMdbClickhouseClusterUserPermissionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataYandexMdbClickhouseClusterUserPermission | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._databaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseName = this._databaseName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbClickhouseClusterUserPermission | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._databaseName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._databaseName = value.databaseName;
    }
  }

  // database_name - computed: false, optional: true, required: false
  private _databaseName?: string; 
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  public resetDatabaseName() {
    this._databaseName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName;
  }
}

export class DataYandexMdbClickhouseClusterUserPermissionList extends cdktf.ComplexList {
  public internalValue? : DataYandexMdbClickhouseClusterUserPermission[] | cdktf.IResolvable

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
  public get(index: number): DataYandexMdbClickhouseClusterUserPermissionOutputReference {
    return new DataYandexMdbClickhouseClusterUserPermissionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexMdbClickhouseClusterUserQuota {
  /**
  * The number of queries that threw exception.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#errors DataYandexMdbClickhouseCluster#errors}
  */
  readonly errors?: number;
  /**
  * The total query execution time, in milliseconds (wall time).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#execution_time DataYandexMdbClickhouseCluster#execution_time}
  */
  readonly executionTime?: number;
  /**
  * Duration of interval for quota in milliseconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#interval_duration DataYandexMdbClickhouseCluster#interval_duration}
  */
  readonly intervalDuration?: number;
  /**
  * The total number of queries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#queries DataYandexMdbClickhouseCluster#queries}
  */
  readonly queries?: number;
  /**
  * The total number of source rows read from tables for running the query, on all remote servers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#read_rows DataYandexMdbClickhouseCluster#read_rows}
  */
  readonly readRows?: number;
  /**
  * The total number of rows given as the result.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#result_rows DataYandexMdbClickhouseCluster#result_rows}
  */
  readonly resultRows?: number;
}

export function dataYandexMdbClickhouseClusterUserQuotaToTerraform(struct?: DataYandexMdbClickhouseClusterUserQuota | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    errors: cdktf.numberToTerraform(struct!.errors),
    execution_time: cdktf.numberToTerraform(struct!.executionTime),
    interval_duration: cdktf.numberToTerraform(struct!.intervalDuration),
    queries: cdktf.numberToTerraform(struct!.queries),
    read_rows: cdktf.numberToTerraform(struct!.readRows),
    result_rows: cdktf.numberToTerraform(struct!.resultRows),
  }
}


export function dataYandexMdbClickhouseClusterUserQuotaToHclTerraform(struct?: DataYandexMdbClickhouseClusterUserQuota | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    errors: {
      value: cdktf.numberToHclTerraform(struct!.errors),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    execution_time: {
      value: cdktf.numberToHclTerraform(struct!.executionTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interval_duration: {
      value: cdktf.numberToHclTerraform(struct!.intervalDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    queries: {
      value: cdktf.numberToHclTerraform(struct!.queries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    read_rows: {
      value: cdktf.numberToHclTerraform(struct!.readRows),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    result_rows: {
      value: cdktf.numberToHclTerraform(struct!.resultRows),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataYandexMdbClickhouseClusterUserQuotaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataYandexMdbClickhouseClusterUserQuota | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._errors !== undefined) {
      hasAnyValues = true;
      internalValueResult.errors = this._errors;
    }
    if (this._executionTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.executionTime = this._executionTime;
    }
    if (this._intervalDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.intervalDuration = this._intervalDuration;
    }
    if (this._queries !== undefined) {
      hasAnyValues = true;
      internalValueResult.queries = this._queries;
    }
    if (this._readRows !== undefined) {
      hasAnyValues = true;
      internalValueResult.readRows = this._readRows;
    }
    if (this._resultRows !== undefined) {
      hasAnyValues = true;
      internalValueResult.resultRows = this._resultRows;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbClickhouseClusterUserQuota | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._errors = undefined;
      this._executionTime = undefined;
      this._intervalDuration = undefined;
      this._queries = undefined;
      this._readRows = undefined;
      this._resultRows = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._errors = value.errors;
      this._executionTime = value.executionTime;
      this._intervalDuration = value.intervalDuration;
      this._queries = value.queries;
      this._readRows = value.readRows;
      this._resultRows = value.resultRows;
    }
  }

  // errors - computed: true, optional: true, required: false
  private _errors?: number; 
  public get errors() {
    return this.getNumberAttribute('errors');
  }
  public set errors(value: number) {
    this._errors = value;
  }
  public resetErrors() {
    this._errors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorsInput() {
    return this._errors;
  }

  // execution_time - computed: true, optional: true, required: false
  private _executionTime?: number; 
  public get executionTime() {
    return this.getNumberAttribute('execution_time');
  }
  public set executionTime(value: number) {
    this._executionTime = value;
  }
  public resetExecutionTime() {
    this._executionTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionTimeInput() {
    return this._executionTime;
  }

  // interval_duration - computed: false, optional: true, required: false
  private _intervalDuration?: number; 
  public get intervalDuration() {
    return this.getNumberAttribute('interval_duration');
  }
  public set intervalDuration(value: number) {
    this._intervalDuration = value;
  }
  public resetIntervalDuration() {
    this._intervalDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalDurationInput() {
    return this._intervalDuration;
  }

  // queries - computed: true, optional: true, required: false
  private _queries?: number; 
  public get queries() {
    return this.getNumberAttribute('queries');
  }
  public set queries(value: number) {
    this._queries = value;
  }
  public resetQueries() {
    this._queries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queriesInput() {
    return this._queries;
  }

  // read_rows - computed: true, optional: true, required: false
  private _readRows?: number; 
  public get readRows() {
    return this.getNumberAttribute('read_rows');
  }
  public set readRows(value: number) {
    this._readRows = value;
  }
  public resetReadRows() {
    this._readRows = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readRowsInput() {
    return this._readRows;
  }

  // result_rows - computed: true, optional: true, required: false
  private _resultRows?: number; 
  public get resultRows() {
    return this.getNumberAttribute('result_rows');
  }
  public set resultRows(value: number) {
    this._resultRows = value;
  }
  public resetResultRows() {
    this._resultRows = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultRowsInput() {
    return this._resultRows;
  }
}

export class DataYandexMdbClickhouseClusterUserQuotaList extends cdktf.ComplexList {
  public internalValue? : DataYandexMdbClickhouseClusterUserQuota[] | cdktf.IResolvable

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
  public get(index: number): DataYandexMdbClickhouseClusterUserQuotaOutputReference {
    return new DataYandexMdbClickhouseClusterUserQuotaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexMdbClickhouseClusterUserSettings {
  /**
  * Include CORS headers in HTTP responses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#add_http_cors_header DataYandexMdbClickhouseCluster#add_http_cors_header}
  */
  readonly addHttpCorsHeader?: boolean | cdktf.IResolvable;
  /**
  * Allows or denies DDL queries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#allow_ddl DataYandexMdbClickhouseCluster#allow_ddl}
  */
  readonly allowDdl?: boolean | cdktf.IResolvable;
  /**
  * Enables introspections functions for query profiling.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#allow_introspection_functions DataYandexMdbClickhouseCluster#allow_introspection_functions}
  */
  readonly allowIntrospectionFunctions?: boolean | cdktf.IResolvable;
  /**
  * Allows specifying LowCardinality modifier for types of small fixed size (8 or less) in CREATE TABLE statements. Enabling this may increase merge times and memory consumption.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#allow_suspicious_low_cardinality_types DataYandexMdbClickhouseCluster#allow_suspicious_low_cardinality_types}
  */
  readonly allowSuspiciousLowCardinalityTypes?: boolean | cdktf.IResolvable;
  /**
  * Enables legacy ClickHouse server behavior in ANY INNER|LEFT JOIN operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#any_join_distinct_right_table_keys DataYandexMdbClickhouseCluster#any_join_distinct_right_table_keys}
  */
  readonly anyJoinDistinctRightTableKeys?: boolean | cdktf.IResolvable;
  /**
  * Enables asynchronous inserts. Disabled by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#async_insert DataYandexMdbClickhouseCluster#async_insert}
  */
  readonly asyncInsert?: boolean | cdktf.IResolvable;
  /**
  * The maximum timeout in milliseconds since the first INSERT query before inserting collected data. If the parameter is set to 0, the timeout is disabled. Default value: 200.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#async_insert_busy_timeout DataYandexMdbClickhouseCluster#async_insert_busy_timeout}
  */
  readonly asyncInsertBusyTimeout?: number;
  /**
  * The maximum size of the unparsed data in bytes collected per query before being inserted. If the parameter is set to 0, asynchronous insertions are disabled. Default value: 100000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#async_insert_max_data_size DataYandexMdbClickhouseCluster#async_insert_max_data_size}
  */
  readonly asyncInsertMaxDataSize?: number;
  /**
  * The maximum timeout in milliseconds since the last INSERT query before dumping collected data. If enabled, the settings prolongs the async_insert_busy_timeout with every INSERT query as long as async_insert_max_data_size is not exceeded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#async_insert_stale_timeout DataYandexMdbClickhouseCluster#async_insert_stale_timeout}
  */
  readonly asyncInsertStaleTimeout?: number;
  /**
  * The maximum number of threads for background data parsing and insertion. If the parameter is set to 0, asynchronous insertions are disabled. Default value: 16.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#async_insert_threads DataYandexMdbClickhouseCluster#async_insert_threads}
  */
  readonly asyncInsertThreads?: number;
  /**
  * If it is set to true, use adaptive busy timeout for asynchronous inserts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#async_insert_use_adaptive_busy_timeout DataYandexMdbClickhouseCluster#async_insert_use_adaptive_busy_timeout}
  */
  readonly asyncInsertUseAdaptiveBusyTimeout?: boolean | cdktf.IResolvable;
  /**
  * Cancels HTTP read-only queries (e.g. SELECT) when a client closes the connection without waiting for the response. Default value: false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#cancel_http_readonly_queries_on_client_close DataYandexMdbClickhouseCluster#cancel_http_readonly_queries_on_client_close}
  */
  readonly cancelHttpReadonlyQueriesOnClientClose?: boolean | cdktf.IResolvable;
  /**
  * Enable compilation of queries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#compile DataYandexMdbClickhouseCluster#compile}
  */
  readonly compile?: boolean | cdktf.IResolvable;
  /**
  * Turn on expression compilation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#compile_expressions DataYandexMdbClickhouseCluster#compile_expressions}
  */
  readonly compileExpressions?: boolean | cdktf.IResolvable;
  /**
  * Connect timeout in milliseconds on the socket used for communicating with the client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#connect_timeout DataYandexMdbClickhouseCluster#connect_timeout}
  */
  readonly connectTimeout?: number;
  /**
  * The timeout in milliseconds for connecting to a remote server for a Distributed table engine, if the ‘shard’ and ‘replica’ sections are used in the cluster definition. If unsuccessful, several attempts are made to connect to various replicas. Default value: 50.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#connect_timeout_with_failover DataYandexMdbClickhouseCluster#connect_timeout_with_failover}
  */
  readonly connectTimeoutWithFailover?: number;
  /**
  * Specifies which of the uniq* functions should be used to perform the COUNT(DISTINCT …) construction.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#count_distinct_implementation DataYandexMdbClickhouseCluster#count_distinct_implementation}
  */
  readonly countDistinctImplementation?: string;
  /**
  * Allows data types without explicit modifiers NULL or NOT NULL in column definition will be Nullable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#data_type_default_nullable DataYandexMdbClickhouseCluster#data_type_default_nullable}
  */
  readonly dataTypeDefaultNullable?: boolean | cdktf.IResolvable;
  /**
  * Allows choosing a parser of the text representation of date and time, one of: `best_effort`, `basic`, `best_effort_us`. Default value: `basic`. Cloud default value: `best_effort`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#date_time_input_format DataYandexMdbClickhouseCluster#date_time_input_format}
  */
  readonly dateTimeInputFormat?: string;
  /**
  * Allows choosing different output formats of the text representation of date and time, one of: `simple`, `iso`, `unix_timestamp`. Default value: `simple`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#date_time_output_format DataYandexMdbClickhouseCluster#date_time_output_format}
  */
  readonly dateTimeOutputFormat?: string;
  /**
  * Enables or disables the deduplication check for materialized views that receive data from `Replicated` tables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#deduplicate_blocks_in_dependent_materialized_views DataYandexMdbClickhouseCluster#deduplicate_blocks_in_dependent_materialized_views}
  */
  readonly deduplicateBlocksInDependentMaterializedViews?: boolean | cdktf.IResolvable;
  /**
  * Sets behavior on overflow when using DISTINCT. Possible values:
  * * `throw` - abort query execution, return an error.
  * * `break` - stop query execution, return partial result.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#distinct_overflow_mode DataYandexMdbClickhouseCluster#distinct_overflow_mode}
  */
  readonly distinctOverflowMode?: string;
  /**
  * Determine the behavior of distributed subqueries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#distributed_aggregation_memory_efficient DataYandexMdbClickhouseCluster#distributed_aggregation_memory_efficient}
  */
  readonly distributedAggregationMemoryEfficient?: boolean | cdktf.IResolvable;
  /**
  * Timeout for DDL queries, in milliseconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#distributed_ddl_task_timeout DataYandexMdbClickhouseCluster#distributed_ddl_task_timeout}
  */
  readonly distributedDdlTaskTimeout?: number;
  /**
  * Changes the behavior of distributed subqueries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#distributed_product_mode DataYandexMdbClickhouseCluster#distributed_product_mode}
  */
  readonly distributedProductMode?: string;
  /**
  * Enable or disable independent processing of partitions for **SELECT** queries with **FINAL**.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#do_not_merge_across_partitions_select_final DataYandexMdbClickhouseCluster#do_not_merge_across_partitions_select_final}
  */
  readonly doNotMergeAcrossPartitionsSelectFinal?: boolean | cdktf.IResolvable;
  /**
  * Allows to return empty result.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#empty_result_for_aggregation_by_empty_set DataYandexMdbClickhouseCluster#empty_result_for_aggregation_by_empty_set}
  */
  readonly emptyResultForAggregationByEmptySet?: boolean | cdktf.IResolvable;
  /**
  * Enable new query analyzer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#enable_analyzer DataYandexMdbClickhouseCluster#enable_analyzer}
  */
  readonly enableAnalyzer?: boolean | cdktf.IResolvable;
  /**
  * Enables or disables data compression in the response to an HTTP request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#enable_http_compression DataYandexMdbClickhouseCluster#enable_http_compression}
  */
  readonly enableHttpCompression?: boolean | cdktf.IResolvable;
  /**
  * If turned on, results of SELECT queries are retrieved from the query cache.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#enable_reads_from_query_cache DataYandexMdbClickhouseCluster#enable_reads_from_query_cache}
  */
  readonly enableReadsFromQueryCache?: boolean | cdktf.IResolvable;
  /**
  * If turned on, results of SELECT queries are stored in the query cache.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#enable_writes_to_query_cache DataYandexMdbClickhouseCluster#enable_writes_to_query_cache}
  */
  readonly enableWritesToQueryCache?: boolean | cdktf.IResolvable;
  /**
  * Forces a query to an out-of-date replica if updated data is not available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#fallback_to_stale_replicas_for_distributed_queries DataYandexMdbClickhouseCluster#fallback_to_stale_replicas_for_distributed_queries}
  */
  readonly fallbackToStaleReplicasForDistributedQueries?: boolean | cdktf.IResolvable;
  /**
  * Sets the data format of a nested columns.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#flatten_nested DataYandexMdbClickhouseCluster#flatten_nested}
  */
  readonly flattenNested?: boolean | cdktf.IResolvable;
  /**
  * Disables query execution if the index can’t be used by date.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#force_index_by_date DataYandexMdbClickhouseCluster#force_index_by_date}
  */
  readonly forceIndexByDate?: boolean | cdktf.IResolvable;
  /**
  * Disables query execution if indexing by the primary key is not possible.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#force_primary_key DataYandexMdbClickhouseCluster#force_primary_key}
  */
  readonly forcePrimaryKey?: boolean | cdktf.IResolvable;
  /**
  * Avro schema registry URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#format_avro_schema_registry_url DataYandexMdbClickhouseCluster#format_avro_schema_registry_url}
  */
  readonly formatAvroSchemaRegistryUrl?: string;
  /**
  * Regular expression (for Regexp format).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#format_regexp DataYandexMdbClickhouseCluster#format_regexp}
  */
  readonly formatRegexp?: string;
  /**
  * Skip lines unmatched by regular expression.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#format_regexp_skip_unmatched DataYandexMdbClickhouseCluster#format_regexp_skip_unmatched}
  */
  readonly formatRegexpSkipUnmatched?: boolean | cdktf.IResolvable;
  /**
  * Sets behavior on overflow while GROUP BY operation. Possible values:
  * * `throw` - abort query execution, return an error.
  * * `break` - stop query execution, return partial result.
  * * `any` - perform approximate GROUP BY operation by continuing aggregation for the keys that got into the set, but don’t add new keys to the set.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#group_by_overflow_mode DataYandexMdbClickhouseCluster#group_by_overflow_mode}
  */
  readonly groupByOverflowMode?: string;
  /**
  * Sets the threshold of the number of keys, after that the two-level aggregation should be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#group_by_two_level_threshold DataYandexMdbClickhouseCluster#group_by_two_level_threshold}
  */
  readonly groupByTwoLevelThreshold?: number;
  /**
  * Sets the threshold of the number of bytes, after that the two-level aggregation should be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#group_by_two_level_threshold_bytes DataYandexMdbClickhouseCluster#group_by_two_level_threshold_bytes}
  */
  readonly groupByTwoLevelThresholdBytes?: number;
  /**
  * Connection timeout for establishing connection with replica for Hedged requests. Default value: 50 milliseconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#hedged_connection_timeout_ms DataYandexMdbClickhouseCluster#hedged_connection_timeout_ms}
  */
  readonly hedgedConnectionTimeoutMs?: number;
  /**
  * Timeout for HTTP connection in milliseconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#http_connection_timeout DataYandexMdbClickhouseCluster#http_connection_timeout}
  */
  readonly httpConnectionTimeout?: number;
  /**
  * Sets minimal interval between notifications about request process in HTTP header X-ClickHouse-Progress.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#http_headers_progress_interval DataYandexMdbClickhouseCluster#http_headers_progress_interval}
  */
  readonly httpHeadersProgressInterval?: number;
  /**
  * Maximum length of field name in HTTP header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#http_max_field_name_size DataYandexMdbClickhouseCluster#http_max_field_name_size}
  */
  readonly httpMaxFieldNameSize?: number;
  /**
  * Maximum length of field value in HTTP header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#http_max_field_value_size DataYandexMdbClickhouseCluster#http_max_field_value_size}
  */
  readonly httpMaxFieldValueSize?: number;
  /**
  * Timeout for HTTP connection in milliseconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#http_receive_timeout DataYandexMdbClickhouseCluster#http_receive_timeout}
  */
  readonly httpReceiveTimeout?: number;
  /**
  * Timeout for HTTP connection in milliseconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#http_send_timeout DataYandexMdbClickhouseCluster#http_send_timeout}
  */
  readonly httpSendTimeout?: number;
  /**
  * Timeout to close idle TCP connections after specified number of seconds. Default value: 3600 seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#idle_connection_timeout DataYandexMdbClickhouseCluster#idle_connection_timeout}
  */
  readonly idleConnectionTimeout?: number;
  /**
  * Ignore materialized views with dropped target table during pushing to views.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#ignore_materialized_views_with_dropped_target_table DataYandexMdbClickhouseCluster#ignore_materialized_views_with_dropped_target_table}
  */
  readonly ignoreMaterializedViewsWithDroppedTargetTable?: boolean | cdktf.IResolvable;
  /**
  * When performing INSERT queries, replace omitted input column values with default values of the respective columns.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#input_format_defaults_for_omitted_fields DataYandexMdbClickhouseCluster#input_format_defaults_for_omitted_fields}
  */
  readonly inputFormatDefaultsForOmittedFields?: boolean | cdktf.IResolvable;
  /**
  * Enables or disables the insertion of JSON data with nested objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#input_format_import_nested_json DataYandexMdbClickhouseCluster#input_format_import_nested_json}
  */
  readonly inputFormatImportNestedJson?: boolean | cdktf.IResolvable;
  /**
  * Enables or disables the initialization of NULL fields with default values, if data type of these fields is not nullable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#input_format_null_as_default DataYandexMdbClickhouseCluster#input_format_null_as_default}
  */
  readonly inputFormatNullAsDefault?: boolean | cdktf.IResolvable;
  /**
  * Enables or disables order-preserving parallel parsing of data formats. Supported only for TSV, TKSV, CSV and JSONEachRow formats.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#input_format_parallel_parsing DataYandexMdbClickhouseCluster#input_format_parallel_parsing}
  */
  readonly inputFormatParallelParsing?: boolean | cdktf.IResolvable;
  /**
  * Enables or disables the full SQL parser if the fast stream parser can’t parse the data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#input_format_values_interpret_expressions DataYandexMdbClickhouseCluster#input_format_values_interpret_expressions}
  */
  readonly inputFormatValuesInterpretExpressions?: boolean | cdktf.IResolvable;
  /**
  * Enables or disables checking the column order when inserting data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#input_format_with_names_use_header DataYandexMdbClickhouseCluster#input_format_with_names_use_header}
  */
  readonly inputFormatWithNamesUseHeader?: boolean | cdktf.IResolvable;
  /**
  * The setting sets the maximum number of retries for ClickHouse Keeper (or ZooKeeper) requests during insert into replicated MergeTree. Only Keeper requests which failed due to network error, Keeper session timeout, or request timeout are considered for retries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#insert_keeper_max_retries DataYandexMdbClickhouseCluster#insert_keeper_max_retries}
  */
  readonly insertKeeperMaxRetries?: number;
  /**
  * Enables the insertion of default values instead of NULL into columns with not nullable data type. Default value: true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#insert_null_as_default DataYandexMdbClickhouseCluster#insert_null_as_default}
  */
  readonly insertNullAsDefault?: boolean | cdktf.IResolvable;
  /**
  * Enables the quorum writes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#insert_quorum DataYandexMdbClickhouseCluster#insert_quorum}
  */
  readonly insertQuorum?: number;
  /**
  * Enables or disables parallelism for quorum INSERT queries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#insert_quorum_parallel DataYandexMdbClickhouseCluster#insert_quorum_parallel}
  */
  readonly insertQuorumParallel?: boolean | cdktf.IResolvable;
  /**
  * Write to a quorum timeout in milliseconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#insert_quorum_timeout DataYandexMdbClickhouseCluster#insert_quorum_timeout}
  */
  readonly insertQuorumTimeout?: number;
  /**
  * Specifies which JOIN algorithm is used. Possible values:
  * * `hash` - hash join algorithm is used. The most generic implementation that supports all combinations of kind and strictness and multiple join keys that are combined with OR in the JOIN ON section.
  * * `parallel_hash` - a variation of hash join that splits the data into buckets and builds several hash tables instead of one concurrently to speed up this process.
  * * `partial_merge` - a variation of the sort-merge algorithm, where only the right table is fully sorted.
  * * `direct` - this algorithm can be applied when the storage for the right table supports key-value requests.
  * * `auto` - when set to auto, hash join is tried first, and the algorithm is switched on the fly to another algorithm if the memory limit is violated.
  * * `full_sorting_merge` - sort-merge algorithm with full sorting joined tables before joining.
  * * `prefer_partial_merge` - clickHouse always tries to use partial_merge join if possible, otherwise, it uses hash. Deprecated, same as partial_merge,hash.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#join_algorithm DataYandexMdbClickhouseCluster#join_algorithm}
  */
  readonly joinAlgorithm?: string[];
  /**
  * Sets behavior on overflow in JOIN. Possible values:
  * * `throw` - abort query execution, return an error.
  * * `break` - stop query execution, return partial result.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#join_overflow_mode DataYandexMdbClickhouseCluster#join_overflow_mode}
  */
  readonly joinOverflowMode?: string;
  /**
  * Sets the type of JOIN behavior. When merging tables, empty cells may appear. ClickHouse fills them differently based on this setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#join_use_nulls DataYandexMdbClickhouseCluster#join_use_nulls}
  */
  readonly joinUseNulls?: boolean | cdktf.IResolvable;
  /**
  * Require aliases for subselects and table functions in FROM that more than one table is present.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#joined_subquery_requires_alias DataYandexMdbClickhouseCluster#joined_subquery_requires_alias}
  */
  readonly joinedSubqueryRequiresAlias?: boolean | cdktf.IResolvable;
  /**
  * Specifies the algorithm of replicas selection that is used for distributed query processing, one of: random, nearest_hostname, in_order, first_or_random, round_robin. Default value: random.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#load_balancing DataYandexMdbClickhouseCluster#load_balancing}
  */
  readonly loadBalancing?: string;
  /**
  * Method of reading data from local filesystem. Possible values:
  * * `read` - abort query execution, return an error.
  * * `pread` - abort query execution, return an error.
  * * `pread_threadpool` - stop query execution, return partial result. If the parameter is set to 0 (default), no hops is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#local_filesystem_read_method DataYandexMdbClickhouseCluster#local_filesystem_read_method}
  */
  readonly localFilesystemReadMethod?: string;
  /**
  * Enabled or disable logging of processors level profiling data to the the system.log_processors_profiles table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#log_processors_profiles DataYandexMdbClickhouseCluster#log_processors_profiles}
  */
  readonly logProcessorsProfiles?: boolean | cdktf.IResolvable;
  /**
  * Log queries with the specified probability.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#log_queries_probability DataYandexMdbClickhouseCluster#log_queries_probability}
  */
  readonly logQueriesProbability?: number;
  /**
  * Setting up query threads logging. Query threads log into the system.query_thread_log table. This setting has effect only when log_queries is true. Queries’ threads run by ClickHouse with this setup are logged according to the rules in the query_thread_log server configuration parameter. Default value: `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#log_query_threads DataYandexMdbClickhouseCluster#log_query_threads}
  */
  readonly logQueryThreads?: boolean | cdktf.IResolvable;
  /**
  * Enables or disables query views logging to the the system.query_views_log table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#log_query_views DataYandexMdbClickhouseCluster#log_query_views}
  */
  readonly logQueryViews?: boolean | cdktf.IResolvable;
  /**
  * Allows or restricts using the LowCardinality data type with the Native format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#low_cardinality_allow_in_native_format DataYandexMdbClickhouseCluster#low_cardinality_allow_in_native_format}
  */
  readonly lowCardinalityAllowInNativeFormat?: boolean | cdktf.IResolvable;
  /**
  * Maximum abstract syntax tree depth.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#max_ast_depth DataYandexMdbClickhouseCluster#max_ast_depth}
  */
  readonly maxAstDepth?: number;
  /**
  * Maximum abstract syntax tree elements.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#max_ast_elements DataYandexMdbClickhouseCluster#max_ast_elements}
  */
  readonly maxAstElements?: number;
  /**
  * A recommendation for what size of the block (in a count of rows) to load from tables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#max_block_size DataYandexMdbClickhouseCluster#max_block_size}
  */
  readonly maxBlockSize?: number;
  /**
  * Limit in bytes for using memory for GROUP BY before using swap on disk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#max_bytes_before_external_group_by DataYandexMdbClickhouseCluster#max_bytes_before_external_group_by}
  */
  readonly maxBytesBeforeExternalGroupBy?: number;
  /**
  * This setting is equivalent of the max_bytes_before_external_group_by setting, except for it is for sort operation (ORDER BY), not aggregation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#max_bytes_before_external_sort DataYandexMdbClickhouseCluster#max_bytes_before_external_sort}
  */
  readonly maxBytesBeforeExternalSort?: number;
  /**
  * Limits the maximum size of a hash table in bytes (uncompressed data) when using DISTINCT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#max_bytes_in_distinct DataYandexMdbClickhouseCluster#max_bytes_in_distinct}
  */
  readonly maxBytesInDistinct?: number;
  /**
  * Limit on maximum size of the hash table for JOIN, in bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#max_bytes_in_join DataYandexMdbClickhouseCluster#max_bytes_in_join}
  */
  readonly maxBytesInJoin?: number;
  /**
  * Limit on the number of bytes in the set resulting from the execution of the IN section.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#max_bytes_in_set DataYandexMdbClickhouseCluster#max_bytes_in_set}
  */
  readonly maxBytesInSet?: number;
  /**
  * Limits the maximum number of bytes (uncompressed data) that can be read from a table when running a query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#max_bytes_to_read DataYandexMdbClickhouseCluster#max_bytes_to_read}
  */
  readonly maxBytesToRead?: number;
  /**
  * Limits the maximum number of bytes (uncompressed data) that can be read from a table for sorting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#max_bytes_to_sort DataYandexMdbClickhouseCluster#max_bytes_to_sort}
  */
  readonly maxBytesToSort?: number;
  /**
  * Limits the maximum number of bytes (uncompressed data) that can be passed to a remote server or saved in a temporary table when using GLOBAL IN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#max_bytes_to_transfer DataYandexMdbClickhouseCluster#max_bytes_to_transfer}
  */
  readonly maxBytesToTransfer?: number;
  /**
  * Limits the maximum number of columns that can be read from a table in a single query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#max_columns_to_read DataYandexMdbClickhouseCluster#max_columns_to_read}
  */
  readonly maxColumnsToRead?: number;
  /**
  * The maximum number of concurrent requests per user. Default value: 0 (no limit).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#max_concurrent_queries_for_user DataYandexMdbClickhouseCluster#max_concurrent_queries_for_user}
  */
  readonly maxConcurrentQueriesForUser?: number;
  /**
  * Limits the maximum query execution time in milliseconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#max_execution_time DataYandexMdbClickhouseCluster#max_execution_time}
  */
  readonly maxExecutionTime?: number;
  /**
  * Maximum abstract syntax tree depth after after expansion of aliases.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#max_expanded_ast_elements DataYandexMdbClickhouseCluster#max_expanded_ast_elements}
  */
  readonly maxExpandedAstElements?: number;
  /**
  * Sets the maximum number of parallel threads for the SELECT query data read phase with the FINAL modifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#max_final_threads DataYandexMdbClickhouseCluster#max_final_threads}
  */
  readonly maxFinalThreads?: number;
  /**
  * Limits the maximum number of HTTP GET redirect hops for URL-engine tables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#max_http_get_redirects DataYandexMdbClickhouseCluster#max_http_get_redirects}
  */
  readonly maxHttpGetRedirects?: number;
  /**
  * The size of blocks (in a count of rows) to form for insertion into a table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#max_insert_block_size DataYandexMdbClickhouseCluster#max_insert_block_size}
  */
  readonly maxInsertBlockSize?: number;
  /**
  * The maximum number of threads to execute the INSERT SELECT query. Default value: 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#max_insert_threads DataYandexMdbClickhouseCluster#max_insert_threads}
  */
  readonly maxInsertThreads?: number;
  /**
  * Limits the maximum memory usage (in bytes) for processing queries on a single server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#max_memory_usage DataYandexMdbClickhouseCluster#max_memory_usage}
  */
  readonly maxMemoryUsage?: number;
  /**
  * Limits the maximum memory usage (in bytes) for processing of user's queries on a single server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#max_memory_usage_for_user DataYandexMdbClickhouseCluster#max_memory_usage_for_user}
  */
  readonly maxMemoryUsageForUser?: number;
  /**
  * Limits the speed of the data exchange over the network in bytes per second.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#max_network_bandwidth DataYandexMdbClickhouseCluster#max_network_bandwidth}
  */
  readonly maxNetworkBandwidth?: number;
  /**
  * Limits the speed of the data exchange over the network in bytes per second.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#max_network_bandwidth_for_user DataYandexMdbClickhouseCluster#max_network_bandwidth_for_user}
  */
  readonly maxNetworkBandwidthForUser?: number;
  /**
  * Limits maximum recursion depth in the recursive descent parser. Allows controlling the stack size. Zero means unlimited.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#max_parser_depth DataYandexMdbClickhouseCluster#max_parser_depth}
  */
  readonly maxParserDepth?: number;
  /**
  * The maximum part of a query that can be taken to RAM for parsing with the SQL parser.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#max_query_size DataYandexMdbClickhouseCluster#max_query_size}
  */
  readonly maxQuerySize?: number;
  /**
  * The maximum size of the buffer to read from the filesystem.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#max_read_buffer_size DataYandexMdbClickhouseCluster#max_read_buffer_size}
  */
  readonly maxReadBufferSize?: number;
  /**
  * Disables lagging replicas for distributed queries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#max_replica_delay_for_distributed_queries DataYandexMdbClickhouseCluster#max_replica_delay_for_distributed_queries}
  */
  readonly maxReplicaDelayForDistributedQueries?: number;
  /**
  * Limits the number of bytes in the result.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#max_result_bytes DataYandexMdbClickhouseCluster#max_result_bytes}
  */
  readonly maxResultBytes?: number;
  /**
  * Limits the number of rows in the result.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#max_result_rows DataYandexMdbClickhouseCluster#max_result_rows}
  */
  readonly maxResultRows?: number;
  /**
  * Limits the maximum number of different rows when using DISTINCT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#max_rows_in_distinct DataYandexMdbClickhouseCluster#max_rows_in_distinct}
  */
  readonly maxRowsInDistinct?: number;
  /**
  * Limit on maximum size of the hash table for JOIN, in rows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#max_rows_in_join DataYandexMdbClickhouseCluster#max_rows_in_join}
  */
  readonly maxRowsInJoin?: number;
  /**
  * Limit on the number of rows in the set resulting from the execution of the IN section.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#max_rows_in_set DataYandexMdbClickhouseCluster#max_rows_in_set}
  */
  readonly maxRowsInSet?: number;
  /**
  * Limits the maximum number of unique keys received from aggregation function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#max_rows_to_group_by DataYandexMdbClickhouseCluster#max_rows_to_group_by}
  */
  readonly maxRowsToGroupBy?: number;
  /**
  * Limits the maximum number of rows that can be read from a table when running a query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#max_rows_to_read DataYandexMdbClickhouseCluster#max_rows_to_read}
  */
  readonly maxRowsToRead?: number;
  /**
  * Limits the maximum number of rows that can be read from a table for sorting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#max_rows_to_sort DataYandexMdbClickhouseCluster#max_rows_to_sort}
  */
  readonly maxRowsToSort?: number;
  /**
  * Limits the maximum number of rows that can be passed to a remote server or saved in a temporary table when using GLOBAL IN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#max_rows_to_transfer DataYandexMdbClickhouseCluster#max_rows_to_transfer}
  */
  readonly maxRowsToTransfer?: number;
  /**
  * Limits the maximum number of temporary columns that must be kept in RAM at the same time when running a query, including constant columns.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#max_temporary_columns DataYandexMdbClickhouseCluster#max_temporary_columns}
  */
  readonly maxTemporaryColumns?: number;
  /**
  * The maximum amount of data consumed by temporary files on disk in bytes for all concurrently running queries. Zero means unlimited.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#max_temporary_data_on_disk_size_for_query DataYandexMdbClickhouseCluster#max_temporary_data_on_disk_size_for_query}
  */
  readonly maxTemporaryDataOnDiskSizeForQuery?: number;
  /**
  * The maximum amount of data consumed by temporary files on disk in bytes for all concurrently running user queries. Zero means unlimited.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#max_temporary_data_on_disk_size_for_user DataYandexMdbClickhouseCluster#max_temporary_data_on_disk_size_for_user}
  */
  readonly maxTemporaryDataOnDiskSizeForUser?: number;
  /**
  * Limits the maximum number of temporary columns that must be kept in RAM at the same time when running a query, excluding constant columns.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#max_temporary_non_const_columns DataYandexMdbClickhouseCluster#max_temporary_non_const_columns}
  */
  readonly maxTemporaryNonConstColumns?: number;
  /**
  * The maximum number of query processing threads, excluding threads for retrieving data from remote servers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#max_threads DataYandexMdbClickhouseCluster#max_threads}
  */
  readonly maxThreads?: number;
  /**
  * It represents soft memory limit in case when hard limit is reached on user level. This value is used to compute overcommit ratio for the query. Zero means skip the query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#memory_overcommit_ratio_denominator DataYandexMdbClickhouseCluster#memory_overcommit_ratio_denominator}
  */
  readonly memoryOvercommitRatioDenominator?: number;
  /**
  * It represents soft memory limit in case when hard limit is reached on global level. This value is used to compute overcommit ratio for the query. Zero means skip the query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#memory_overcommit_ratio_denominator_for_user DataYandexMdbClickhouseCluster#memory_overcommit_ratio_denominator_for_user}
  */
  readonly memoryOvercommitRatioDenominatorForUser?: number;
  /**
  * Collect random allocations and deallocations and write them into system.trace_log with 'MemorySample' trace_type. The probability is for every alloc/free regardless to the size of the allocation. Possible values: from 0 to 1. Default: 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#memory_profiler_sample_probability DataYandexMdbClickhouseCluster#memory_profiler_sample_probability}
  */
  readonly memoryProfilerSampleProbability?: number;
  /**
  * Memory profiler step (in bytes). If the next query step requires more memory than this parameter specifies, the memory profiler collects the allocating stack trace. Values lower than a few megabytes slow down query processing. Default value: 4194304 (4 MB). Zero means disabled memory profiler.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#memory_profiler_step DataYandexMdbClickhouseCluster#memory_profiler_step}
  */
  readonly memoryProfilerStep?: number;
  /**
  * Maximum time thread will wait for memory to be freed in the case of memory overcommit on a user level. If the timeout is reached and memory is not freed, an exception is thrown.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#memory_usage_overcommit_max_wait_microseconds DataYandexMdbClickhouseCluster#memory_usage_overcommit_max_wait_microseconds}
  */
  readonly memoryUsageOvercommitMaxWaitMicroseconds?: number;
  /**
  * If ClickHouse should read more than merge_tree_max_bytes_to_use_cache bytes in one query, it doesn’t use the cache of uncompressed blocks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#merge_tree_max_bytes_to_use_cache DataYandexMdbClickhouseCluster#merge_tree_max_bytes_to_use_cache}
  */
  readonly mergeTreeMaxBytesToUseCache?: number;
  /**
  * If ClickHouse should read more than merge_tree_max_rows_to_use_cache rows in one query, it doesn’t use the cache of uncompressed blocks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#merge_tree_max_rows_to_use_cache DataYandexMdbClickhouseCluster#merge_tree_max_rows_to_use_cache}
  */
  readonly mergeTreeMaxRowsToUseCache?: number;
  /**
  * If the number of bytes to read from one file of a MergeTree-engine table exceeds merge_tree_min_bytes_for_concurrent_read, then ClickHouse tries to concurrently read from this file in several threads.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#merge_tree_min_bytes_for_concurrent_read DataYandexMdbClickhouseCluster#merge_tree_min_bytes_for_concurrent_read}
  */
  readonly mergeTreeMinBytesForConcurrentRead?: number;
  /**
  * If the number of rows to be read from a file of a MergeTree table exceeds merge_tree_min_rows_for_concurrent_read then ClickHouse tries to perform a concurrent reading from this file on several threads.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#merge_tree_min_rows_for_concurrent_read DataYandexMdbClickhouseCluster#merge_tree_min_rows_for_concurrent_read}
  */
  readonly mergeTreeMinRowsForConcurrentRead?: number;
  /**
  * The minimum data volume required for using direct I/O access to the storage disk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#min_bytes_to_use_direct_io DataYandexMdbClickhouseCluster#min_bytes_to_use_direct_io}
  */
  readonly minBytesToUseDirectIo?: number;
  /**
  * How many times to potentially use a compiled chunk of code before running compilation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#min_count_to_compile DataYandexMdbClickhouseCluster#min_count_to_compile}
  */
  readonly minCountToCompile?: number;
  /**
  * A query waits for expression compilation process to complete prior to continuing execution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#min_count_to_compile_expression DataYandexMdbClickhouseCluster#min_count_to_compile_expression}
  */
  readonly minCountToCompileExpression?: number;
  /**
  * Minimal execution speed in rows per second.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#min_execution_speed DataYandexMdbClickhouseCluster#min_execution_speed}
  */
  readonly minExecutionSpeed?: number;
  /**
  * Minimal execution speed in bytes per second.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#min_execution_speed_bytes DataYandexMdbClickhouseCluster#min_execution_speed_bytes}
  */
  readonly minExecutionSpeedBytes?: number;
  /**
  * Sets the minimum number of bytes in the block which can be inserted into a table by an INSERT query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#min_insert_block_size_bytes DataYandexMdbClickhouseCluster#min_insert_block_size_bytes}
  */
  readonly minInsertBlockSizeBytes?: number;
  /**
  * Sets the minimum number of rows in the block which can be inserted into a table by an INSERT query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#min_insert_block_size_rows DataYandexMdbClickhouseCluster#min_insert_block_size_rows}
  */
  readonly minInsertBlockSizeRows?: number;
  /**
  * If the value is true, integers appear in quotes when using JSON* Int64 and UInt64 formats (for compatibility with most JavaScript implementations); otherwise, integers are output without the quotes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#output_format_json_quote_64bit_integers DataYandexMdbClickhouseCluster#output_format_json_quote_64bit_integers}
  */
  readonly outputFormatJsonQuote64BitIntegers?: boolean | cdktf.IResolvable;
  /**
  * Enables +nan, -nan, +inf, -inf outputs in JSON output format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#output_format_json_quote_denormals DataYandexMdbClickhouseCluster#output_format_json_quote_denormals}
  */
  readonly outputFormatJsonQuoteDenormals?: boolean | cdktf.IResolvable;
  /**
  * Enables/disables preferable using the localhost replica when processing distributed queries. Default value: true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#prefer_localhost_replica DataYandexMdbClickhouseCluster#prefer_localhost_replica}
  */
  readonly preferLocalhostReplica?: boolean | cdktf.IResolvable;
  /**
  * Query priority.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#priority DataYandexMdbClickhouseCluster#priority}
  */
  readonly priority?: number;
  /**
  * The maximum number of query results the current user may store in the query cache. 0 means unlimited.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#query_cache_max_entries DataYandexMdbClickhouseCluster#query_cache_max_entries}
  */
  readonly queryCacheMaxEntries?: number;
  /**
  * The maximum amount of memory (in bytes) the current user may allocate in the query cache. 0 means unlimited.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#query_cache_max_size_in_bytes DataYandexMdbClickhouseCluster#query_cache_max_size_in_bytes}
  */
  readonly queryCacheMaxSizeInBytes?: number;
  /**
  * Minimum duration in milliseconds a query needs to run for its result to be stored in the query cache.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#query_cache_min_query_duration DataYandexMdbClickhouseCluster#query_cache_min_query_duration}
  */
  readonly queryCacheMinQueryDuration?: number;
  /**
  * Minimum number of times a SELECT query must run before its result is stored in the query cache.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#query_cache_min_query_runs DataYandexMdbClickhouseCluster#query_cache_min_query_runs}
  */
  readonly queryCacheMinQueryRuns?: number;
  /**
  * If turned on, the result of SELECT queries cached in the query cache can be read by other users. It is not recommended to enable this setting due to security reasons.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#query_cache_share_between_users DataYandexMdbClickhouseCluster#query_cache_share_between_users}
  */
  readonly queryCacheShareBetweenUsers?: boolean | cdktf.IResolvable;
  /**
  * A string which acts as a label for query cache entries. The same queries with different tags are considered different by the query cache.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#query_cache_tag DataYandexMdbClickhouseCluster#query_cache_tag}
  */
  readonly queryCacheTag?: string;
  /**
  * After this time in seconds entries in the query cache become stale.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#query_cache_ttl DataYandexMdbClickhouseCluster#query_cache_ttl}
  */
  readonly queryCacheTtl?: number;
  /**
  * Quota accounting mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#quota_mode DataYandexMdbClickhouseCluster#quota_mode}
  */
  readonly quotaMode?: string;
  /**
  * Sets behavior on overflow while read. Possible values:
  * * `throw` - abort query execution, return an error.
  * * `break` - stop query execution, return partial result.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#read_overflow_mode DataYandexMdbClickhouseCluster#read_overflow_mode}
  */
  readonly readOverflowMode?: string;
  /**
  * Restricts permissions for reading data, write data and change settings queries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#readonly DataYandexMdbClickhouseCluster#readonly}
  */
  readonly readonly?: number;
  /**
  * Receive timeout in milliseconds on the socket used for communicating with the client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#receive_timeout DataYandexMdbClickhouseCluster#receive_timeout}
  */
  readonly receiveTimeout?: number;
  /**
  * Method of reading data from remote filesystem, one of: `read`, `threadpool`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#remote_filesystem_read_method DataYandexMdbClickhouseCluster#remote_filesystem_read_method}
  */
  readonly remoteFilesystemReadMethod?: string;
  /**
  * For ALTER ... ATTACH|DETACH|DROP queries, you can use the replication_alter_partitions_sync setting to set up waiting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#replication_alter_partitions_sync DataYandexMdbClickhouseCluster#replication_alter_partitions_sync}
  */
  readonly replicationAlterPartitionsSync?: number;
  /**
  * Sets behavior on overflow in result. Possible values:
  * * `throw` - abort query execution, return an error.
  * * `break` - stop query execution, return partial result.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#result_overflow_mode DataYandexMdbClickhouseCluster#result_overflow_mode}
  */
  readonly resultOverflowMode?: string;
  /**
  * Enables or disables adaptive timeouts for S3 requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#s3_use_adaptive_timeouts DataYandexMdbClickhouseCluster#s3_use_adaptive_timeouts}
  */
  readonly s3UseAdaptiveTimeouts?: boolean | cdktf.IResolvable;
  /**
  * Enables or disables sequential consistency for SELECT queries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#select_sequential_consistency DataYandexMdbClickhouseCluster#select_sequential_consistency}
  */
  readonly selectSequentialConsistency?: boolean | cdktf.IResolvable;
  /**
  * Enables or disables `X-ClickHouse-Progress` HTTP response headers in clickhouse-server responses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#send_progress_in_http_headers DataYandexMdbClickhouseCluster#send_progress_in_http_headers}
  */
  readonly sendProgressInHttpHeaders?: boolean | cdktf.IResolvable;
  /**
  * Send timeout in milliseconds on the socket used for communicating with the client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#send_timeout DataYandexMdbClickhouseCluster#send_timeout}
  */
  readonly sendTimeout?: number;
  /**
  * Sets behavior on overflow in the set resulting. Possible values:
  *   * `throw` - abort query execution, return an error.
  * * `break` - stop query execution, return partial result.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#set_overflow_mode DataYandexMdbClickhouseCluster#set_overflow_mode}
  */
  readonly setOverflowMode?: string;
  /**
  * Enables or disables silently skipping of unavailable shards.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#skip_unavailable_shards DataYandexMdbClickhouseCluster#skip_unavailable_shards}
  */
  readonly skipUnavailableShards?: boolean | cdktf.IResolvable;
  /**
  * Sets behavior on overflow while sort. Possible values:
  * * `throw` - abort query execution, return an error.
  * * `break` - stop query execution, return partial result.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#sort_overflow_mode DataYandexMdbClickhouseCluster#sort_overflow_mode}
  */
  readonly sortOverflowMode?: string;
  /**
  * Timeout (in seconds) between checks of execution speed. It is checked that execution speed is not less that specified in min_execution_speed parameter. Must be at least 1000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#timeout_before_checking_execution_speed DataYandexMdbClickhouseCluster#timeout_before_checking_execution_speed}
  */
  readonly timeoutBeforeCheckingExecutionSpeed?: number;
  /**
  *  Sets behavior on overflow. Possible values:
  * * `throw` - abort query execution, return an error.
  * * `break` - stop query execution, return partial result.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#timeout_overflow_mode DataYandexMdbClickhouseCluster#timeout_overflow_mode}
  */
  readonly timeoutOverflowMode?: string;
  /**
  * Sets behavior on overflow. Possible values:
  * * `throw` - abort query execution, return an error.
  * * `break` - stop query execution, return partial result.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#transfer_overflow_mode DataYandexMdbClickhouseCluster#transfer_overflow_mode}
  */
  readonly transferOverflowMode?: string;
  /**
  * Enables equality of NULL values for IN operator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#transform_null_in DataYandexMdbClickhouseCluster#transform_null_in}
  */
  readonly transformNullIn?: boolean | cdktf.IResolvable;
  /**
  * Enables hedged requests logic for remote queries. It allows to establish many connections with different replicas for query. New connection is enabled in case existent connection(s) with replica(s) were not established within hedged_connection_timeout or no data was received within receive_data_timeout. Query uses the first connection which send non empty progress packet (or data packet, if allow_changing_replica_until_first_data_packet); other connections are cancelled. Queries with max_parallel_replicas > 1 are supported. Default value: true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#use_hedged_requests DataYandexMdbClickhouseCluster#use_hedged_requests}
  */
  readonly useHedgedRequests?: boolean | cdktf.IResolvable;
  /**
  * If turned on, SELECT queries may utilize the query cache.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#use_query_cache DataYandexMdbClickhouseCluster#use_query_cache}
  */
  readonly useQueryCache?: boolean | cdktf.IResolvable;
  /**
  * Whether to use a cache of uncompressed blocks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#use_uncompressed_cache DataYandexMdbClickhouseCluster#use_uncompressed_cache}
  */
  readonly useUncompressedCache?: boolean | cdktf.IResolvable;
  /**
  * Enables waiting for processing of asynchronous insertion. If enabled, server returns OK only after the data is inserted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#wait_for_async_insert DataYandexMdbClickhouseCluster#wait_for_async_insert}
  */
  readonly waitForAsyncInsert?: boolean | cdktf.IResolvable;
  /**
  * The timeout (in seconds) for waiting for processing of asynchronous insertion. Value must be at least 1000 (1 second).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#wait_for_async_insert_timeout DataYandexMdbClickhouseCluster#wait_for_async_insert_timeout}
  */
  readonly waitForAsyncInsertTimeout?: number;
}

export function dataYandexMdbClickhouseClusterUserSettingsToTerraform(struct?: DataYandexMdbClickhouseClusterUserSettingsOutputReference | DataYandexMdbClickhouseClusterUserSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add_http_cors_header: cdktf.booleanToTerraform(struct!.addHttpCorsHeader),
    allow_ddl: cdktf.booleanToTerraform(struct!.allowDdl),
    allow_introspection_functions: cdktf.booleanToTerraform(struct!.allowIntrospectionFunctions),
    allow_suspicious_low_cardinality_types: cdktf.booleanToTerraform(struct!.allowSuspiciousLowCardinalityTypes),
    any_join_distinct_right_table_keys: cdktf.booleanToTerraform(struct!.anyJoinDistinctRightTableKeys),
    async_insert: cdktf.booleanToTerraform(struct!.asyncInsert),
    async_insert_busy_timeout: cdktf.numberToTerraform(struct!.asyncInsertBusyTimeout),
    async_insert_max_data_size: cdktf.numberToTerraform(struct!.asyncInsertMaxDataSize),
    async_insert_stale_timeout: cdktf.numberToTerraform(struct!.asyncInsertStaleTimeout),
    async_insert_threads: cdktf.numberToTerraform(struct!.asyncInsertThreads),
    async_insert_use_adaptive_busy_timeout: cdktf.booleanToTerraform(struct!.asyncInsertUseAdaptiveBusyTimeout),
    cancel_http_readonly_queries_on_client_close: cdktf.booleanToTerraform(struct!.cancelHttpReadonlyQueriesOnClientClose),
    compile: cdktf.booleanToTerraform(struct!.compile),
    compile_expressions: cdktf.booleanToTerraform(struct!.compileExpressions),
    connect_timeout: cdktf.numberToTerraform(struct!.connectTimeout),
    connect_timeout_with_failover: cdktf.numberToTerraform(struct!.connectTimeoutWithFailover),
    count_distinct_implementation: cdktf.stringToTerraform(struct!.countDistinctImplementation),
    data_type_default_nullable: cdktf.booleanToTerraform(struct!.dataTypeDefaultNullable),
    date_time_input_format: cdktf.stringToTerraform(struct!.dateTimeInputFormat),
    date_time_output_format: cdktf.stringToTerraform(struct!.dateTimeOutputFormat),
    deduplicate_blocks_in_dependent_materialized_views: cdktf.booleanToTerraform(struct!.deduplicateBlocksInDependentMaterializedViews),
    distinct_overflow_mode: cdktf.stringToTerraform(struct!.distinctOverflowMode),
    distributed_aggregation_memory_efficient: cdktf.booleanToTerraform(struct!.distributedAggregationMemoryEfficient),
    distributed_ddl_task_timeout: cdktf.numberToTerraform(struct!.distributedDdlTaskTimeout),
    distributed_product_mode: cdktf.stringToTerraform(struct!.distributedProductMode),
    do_not_merge_across_partitions_select_final: cdktf.booleanToTerraform(struct!.doNotMergeAcrossPartitionsSelectFinal),
    empty_result_for_aggregation_by_empty_set: cdktf.booleanToTerraform(struct!.emptyResultForAggregationByEmptySet),
    enable_analyzer: cdktf.booleanToTerraform(struct!.enableAnalyzer),
    enable_http_compression: cdktf.booleanToTerraform(struct!.enableHttpCompression),
    enable_reads_from_query_cache: cdktf.booleanToTerraform(struct!.enableReadsFromQueryCache),
    enable_writes_to_query_cache: cdktf.booleanToTerraform(struct!.enableWritesToQueryCache),
    fallback_to_stale_replicas_for_distributed_queries: cdktf.booleanToTerraform(struct!.fallbackToStaleReplicasForDistributedQueries),
    flatten_nested: cdktf.booleanToTerraform(struct!.flattenNested),
    force_index_by_date: cdktf.booleanToTerraform(struct!.forceIndexByDate),
    force_primary_key: cdktf.booleanToTerraform(struct!.forcePrimaryKey),
    format_avro_schema_registry_url: cdktf.stringToTerraform(struct!.formatAvroSchemaRegistryUrl),
    format_regexp: cdktf.stringToTerraform(struct!.formatRegexp),
    format_regexp_skip_unmatched: cdktf.booleanToTerraform(struct!.formatRegexpSkipUnmatched),
    group_by_overflow_mode: cdktf.stringToTerraform(struct!.groupByOverflowMode),
    group_by_two_level_threshold: cdktf.numberToTerraform(struct!.groupByTwoLevelThreshold),
    group_by_two_level_threshold_bytes: cdktf.numberToTerraform(struct!.groupByTwoLevelThresholdBytes),
    hedged_connection_timeout_ms: cdktf.numberToTerraform(struct!.hedgedConnectionTimeoutMs),
    http_connection_timeout: cdktf.numberToTerraform(struct!.httpConnectionTimeout),
    http_headers_progress_interval: cdktf.numberToTerraform(struct!.httpHeadersProgressInterval),
    http_max_field_name_size: cdktf.numberToTerraform(struct!.httpMaxFieldNameSize),
    http_max_field_value_size: cdktf.numberToTerraform(struct!.httpMaxFieldValueSize),
    http_receive_timeout: cdktf.numberToTerraform(struct!.httpReceiveTimeout),
    http_send_timeout: cdktf.numberToTerraform(struct!.httpSendTimeout),
    idle_connection_timeout: cdktf.numberToTerraform(struct!.idleConnectionTimeout),
    ignore_materialized_views_with_dropped_target_table: cdktf.booleanToTerraform(struct!.ignoreMaterializedViewsWithDroppedTargetTable),
    input_format_defaults_for_omitted_fields: cdktf.booleanToTerraform(struct!.inputFormatDefaultsForOmittedFields),
    input_format_import_nested_json: cdktf.booleanToTerraform(struct!.inputFormatImportNestedJson),
    input_format_null_as_default: cdktf.booleanToTerraform(struct!.inputFormatNullAsDefault),
    input_format_parallel_parsing: cdktf.booleanToTerraform(struct!.inputFormatParallelParsing),
    input_format_values_interpret_expressions: cdktf.booleanToTerraform(struct!.inputFormatValuesInterpretExpressions),
    input_format_with_names_use_header: cdktf.booleanToTerraform(struct!.inputFormatWithNamesUseHeader),
    insert_keeper_max_retries: cdktf.numberToTerraform(struct!.insertKeeperMaxRetries),
    insert_null_as_default: cdktf.booleanToTerraform(struct!.insertNullAsDefault),
    insert_quorum: cdktf.numberToTerraform(struct!.insertQuorum),
    insert_quorum_parallel: cdktf.booleanToTerraform(struct!.insertQuorumParallel),
    insert_quorum_timeout: cdktf.numberToTerraform(struct!.insertQuorumTimeout),
    join_algorithm: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.joinAlgorithm),
    join_overflow_mode: cdktf.stringToTerraform(struct!.joinOverflowMode),
    join_use_nulls: cdktf.booleanToTerraform(struct!.joinUseNulls),
    joined_subquery_requires_alias: cdktf.booleanToTerraform(struct!.joinedSubqueryRequiresAlias),
    load_balancing: cdktf.stringToTerraform(struct!.loadBalancing),
    local_filesystem_read_method: cdktf.stringToTerraform(struct!.localFilesystemReadMethod),
    log_processors_profiles: cdktf.booleanToTerraform(struct!.logProcessorsProfiles),
    log_queries_probability: cdktf.numberToTerraform(struct!.logQueriesProbability),
    log_query_threads: cdktf.booleanToTerraform(struct!.logQueryThreads),
    log_query_views: cdktf.booleanToTerraform(struct!.logQueryViews),
    low_cardinality_allow_in_native_format: cdktf.booleanToTerraform(struct!.lowCardinalityAllowInNativeFormat),
    max_ast_depth: cdktf.numberToTerraform(struct!.maxAstDepth),
    max_ast_elements: cdktf.numberToTerraform(struct!.maxAstElements),
    max_block_size: cdktf.numberToTerraform(struct!.maxBlockSize),
    max_bytes_before_external_group_by: cdktf.numberToTerraform(struct!.maxBytesBeforeExternalGroupBy),
    max_bytes_before_external_sort: cdktf.numberToTerraform(struct!.maxBytesBeforeExternalSort),
    max_bytes_in_distinct: cdktf.numberToTerraform(struct!.maxBytesInDistinct),
    max_bytes_in_join: cdktf.numberToTerraform(struct!.maxBytesInJoin),
    max_bytes_in_set: cdktf.numberToTerraform(struct!.maxBytesInSet),
    max_bytes_to_read: cdktf.numberToTerraform(struct!.maxBytesToRead),
    max_bytes_to_sort: cdktf.numberToTerraform(struct!.maxBytesToSort),
    max_bytes_to_transfer: cdktf.numberToTerraform(struct!.maxBytesToTransfer),
    max_columns_to_read: cdktf.numberToTerraform(struct!.maxColumnsToRead),
    max_concurrent_queries_for_user: cdktf.numberToTerraform(struct!.maxConcurrentQueriesForUser),
    max_execution_time: cdktf.numberToTerraform(struct!.maxExecutionTime),
    max_expanded_ast_elements: cdktf.numberToTerraform(struct!.maxExpandedAstElements),
    max_final_threads: cdktf.numberToTerraform(struct!.maxFinalThreads),
    max_http_get_redirects: cdktf.numberToTerraform(struct!.maxHttpGetRedirects),
    max_insert_block_size: cdktf.numberToTerraform(struct!.maxInsertBlockSize),
    max_insert_threads: cdktf.numberToTerraform(struct!.maxInsertThreads),
    max_memory_usage: cdktf.numberToTerraform(struct!.maxMemoryUsage),
    max_memory_usage_for_user: cdktf.numberToTerraform(struct!.maxMemoryUsageForUser),
    max_network_bandwidth: cdktf.numberToTerraform(struct!.maxNetworkBandwidth),
    max_network_bandwidth_for_user: cdktf.numberToTerraform(struct!.maxNetworkBandwidthForUser),
    max_parser_depth: cdktf.numberToTerraform(struct!.maxParserDepth),
    max_query_size: cdktf.numberToTerraform(struct!.maxQuerySize),
    max_read_buffer_size: cdktf.numberToTerraform(struct!.maxReadBufferSize),
    max_replica_delay_for_distributed_queries: cdktf.numberToTerraform(struct!.maxReplicaDelayForDistributedQueries),
    max_result_bytes: cdktf.numberToTerraform(struct!.maxResultBytes),
    max_result_rows: cdktf.numberToTerraform(struct!.maxResultRows),
    max_rows_in_distinct: cdktf.numberToTerraform(struct!.maxRowsInDistinct),
    max_rows_in_join: cdktf.numberToTerraform(struct!.maxRowsInJoin),
    max_rows_in_set: cdktf.numberToTerraform(struct!.maxRowsInSet),
    max_rows_to_group_by: cdktf.numberToTerraform(struct!.maxRowsToGroupBy),
    max_rows_to_read: cdktf.numberToTerraform(struct!.maxRowsToRead),
    max_rows_to_sort: cdktf.numberToTerraform(struct!.maxRowsToSort),
    max_rows_to_transfer: cdktf.numberToTerraform(struct!.maxRowsToTransfer),
    max_temporary_columns: cdktf.numberToTerraform(struct!.maxTemporaryColumns),
    max_temporary_data_on_disk_size_for_query: cdktf.numberToTerraform(struct!.maxTemporaryDataOnDiskSizeForQuery),
    max_temporary_data_on_disk_size_for_user: cdktf.numberToTerraform(struct!.maxTemporaryDataOnDiskSizeForUser),
    max_temporary_non_const_columns: cdktf.numberToTerraform(struct!.maxTemporaryNonConstColumns),
    max_threads: cdktf.numberToTerraform(struct!.maxThreads),
    memory_overcommit_ratio_denominator: cdktf.numberToTerraform(struct!.memoryOvercommitRatioDenominator),
    memory_overcommit_ratio_denominator_for_user: cdktf.numberToTerraform(struct!.memoryOvercommitRatioDenominatorForUser),
    memory_profiler_sample_probability: cdktf.numberToTerraform(struct!.memoryProfilerSampleProbability),
    memory_profiler_step: cdktf.numberToTerraform(struct!.memoryProfilerStep),
    memory_usage_overcommit_max_wait_microseconds: cdktf.numberToTerraform(struct!.memoryUsageOvercommitMaxWaitMicroseconds),
    merge_tree_max_bytes_to_use_cache: cdktf.numberToTerraform(struct!.mergeTreeMaxBytesToUseCache),
    merge_tree_max_rows_to_use_cache: cdktf.numberToTerraform(struct!.mergeTreeMaxRowsToUseCache),
    merge_tree_min_bytes_for_concurrent_read: cdktf.numberToTerraform(struct!.mergeTreeMinBytesForConcurrentRead),
    merge_tree_min_rows_for_concurrent_read: cdktf.numberToTerraform(struct!.mergeTreeMinRowsForConcurrentRead),
    min_bytes_to_use_direct_io: cdktf.numberToTerraform(struct!.minBytesToUseDirectIo),
    min_count_to_compile: cdktf.numberToTerraform(struct!.minCountToCompile),
    min_count_to_compile_expression: cdktf.numberToTerraform(struct!.minCountToCompileExpression),
    min_execution_speed: cdktf.numberToTerraform(struct!.minExecutionSpeed),
    min_execution_speed_bytes: cdktf.numberToTerraform(struct!.minExecutionSpeedBytes),
    min_insert_block_size_bytes: cdktf.numberToTerraform(struct!.minInsertBlockSizeBytes),
    min_insert_block_size_rows: cdktf.numberToTerraform(struct!.minInsertBlockSizeRows),
    output_format_json_quote_64bit_integers: cdktf.booleanToTerraform(struct!.outputFormatJsonQuote64BitIntegers),
    output_format_json_quote_denormals: cdktf.booleanToTerraform(struct!.outputFormatJsonQuoteDenormals),
    prefer_localhost_replica: cdktf.booleanToTerraform(struct!.preferLocalhostReplica),
    priority: cdktf.numberToTerraform(struct!.priority),
    query_cache_max_entries: cdktf.numberToTerraform(struct!.queryCacheMaxEntries),
    query_cache_max_size_in_bytes: cdktf.numberToTerraform(struct!.queryCacheMaxSizeInBytes),
    query_cache_min_query_duration: cdktf.numberToTerraform(struct!.queryCacheMinQueryDuration),
    query_cache_min_query_runs: cdktf.numberToTerraform(struct!.queryCacheMinQueryRuns),
    query_cache_share_between_users: cdktf.booleanToTerraform(struct!.queryCacheShareBetweenUsers),
    query_cache_tag: cdktf.stringToTerraform(struct!.queryCacheTag),
    query_cache_ttl: cdktf.numberToTerraform(struct!.queryCacheTtl),
    quota_mode: cdktf.stringToTerraform(struct!.quotaMode),
    read_overflow_mode: cdktf.stringToTerraform(struct!.readOverflowMode),
    readonly: cdktf.numberToTerraform(struct!.readonly),
    receive_timeout: cdktf.numberToTerraform(struct!.receiveTimeout),
    remote_filesystem_read_method: cdktf.stringToTerraform(struct!.remoteFilesystemReadMethod),
    replication_alter_partitions_sync: cdktf.numberToTerraform(struct!.replicationAlterPartitionsSync),
    result_overflow_mode: cdktf.stringToTerraform(struct!.resultOverflowMode),
    s3_use_adaptive_timeouts: cdktf.booleanToTerraform(struct!.s3UseAdaptiveTimeouts),
    select_sequential_consistency: cdktf.booleanToTerraform(struct!.selectSequentialConsistency),
    send_progress_in_http_headers: cdktf.booleanToTerraform(struct!.sendProgressInHttpHeaders),
    send_timeout: cdktf.numberToTerraform(struct!.sendTimeout),
    set_overflow_mode: cdktf.stringToTerraform(struct!.setOverflowMode),
    skip_unavailable_shards: cdktf.booleanToTerraform(struct!.skipUnavailableShards),
    sort_overflow_mode: cdktf.stringToTerraform(struct!.sortOverflowMode),
    timeout_before_checking_execution_speed: cdktf.numberToTerraform(struct!.timeoutBeforeCheckingExecutionSpeed),
    timeout_overflow_mode: cdktf.stringToTerraform(struct!.timeoutOverflowMode),
    transfer_overflow_mode: cdktf.stringToTerraform(struct!.transferOverflowMode),
    transform_null_in: cdktf.booleanToTerraform(struct!.transformNullIn),
    use_hedged_requests: cdktf.booleanToTerraform(struct!.useHedgedRequests),
    use_query_cache: cdktf.booleanToTerraform(struct!.useQueryCache),
    use_uncompressed_cache: cdktf.booleanToTerraform(struct!.useUncompressedCache),
    wait_for_async_insert: cdktf.booleanToTerraform(struct!.waitForAsyncInsert),
    wait_for_async_insert_timeout: cdktf.numberToTerraform(struct!.waitForAsyncInsertTimeout),
  }
}


export function dataYandexMdbClickhouseClusterUserSettingsToHclTerraform(struct?: DataYandexMdbClickhouseClusterUserSettingsOutputReference | DataYandexMdbClickhouseClusterUserSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add_http_cors_header: {
      value: cdktf.booleanToHclTerraform(struct!.addHttpCorsHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_ddl: {
      value: cdktf.booleanToHclTerraform(struct!.allowDdl),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_introspection_functions: {
      value: cdktf.booleanToHclTerraform(struct!.allowIntrospectionFunctions),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_suspicious_low_cardinality_types: {
      value: cdktf.booleanToHclTerraform(struct!.allowSuspiciousLowCardinalityTypes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    any_join_distinct_right_table_keys: {
      value: cdktf.booleanToHclTerraform(struct!.anyJoinDistinctRightTableKeys),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    async_insert: {
      value: cdktf.booleanToHclTerraform(struct!.asyncInsert),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    async_insert_busy_timeout: {
      value: cdktf.numberToHclTerraform(struct!.asyncInsertBusyTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    async_insert_max_data_size: {
      value: cdktf.numberToHclTerraform(struct!.asyncInsertMaxDataSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    async_insert_stale_timeout: {
      value: cdktf.numberToHclTerraform(struct!.asyncInsertStaleTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    async_insert_threads: {
      value: cdktf.numberToHclTerraform(struct!.asyncInsertThreads),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    async_insert_use_adaptive_busy_timeout: {
      value: cdktf.booleanToHclTerraform(struct!.asyncInsertUseAdaptiveBusyTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cancel_http_readonly_queries_on_client_close: {
      value: cdktf.booleanToHclTerraform(struct!.cancelHttpReadonlyQueriesOnClientClose),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    compile: {
      value: cdktf.booleanToHclTerraform(struct!.compile),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    compile_expressions: {
      value: cdktf.booleanToHclTerraform(struct!.compileExpressions),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    connect_timeout: {
      value: cdktf.numberToHclTerraform(struct!.connectTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    connect_timeout_with_failover: {
      value: cdktf.numberToHclTerraform(struct!.connectTimeoutWithFailover),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    count_distinct_implementation: {
      value: cdktf.stringToHclTerraform(struct!.countDistinctImplementation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_type_default_nullable: {
      value: cdktf.booleanToHclTerraform(struct!.dataTypeDefaultNullable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    date_time_input_format: {
      value: cdktf.stringToHclTerraform(struct!.dateTimeInputFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    date_time_output_format: {
      value: cdktf.stringToHclTerraform(struct!.dateTimeOutputFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deduplicate_blocks_in_dependent_materialized_views: {
      value: cdktf.booleanToHclTerraform(struct!.deduplicateBlocksInDependentMaterializedViews),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    distinct_overflow_mode: {
      value: cdktf.stringToHclTerraform(struct!.distinctOverflowMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    distributed_aggregation_memory_efficient: {
      value: cdktf.booleanToHclTerraform(struct!.distributedAggregationMemoryEfficient),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    distributed_ddl_task_timeout: {
      value: cdktf.numberToHclTerraform(struct!.distributedDdlTaskTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    distributed_product_mode: {
      value: cdktf.stringToHclTerraform(struct!.distributedProductMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    do_not_merge_across_partitions_select_final: {
      value: cdktf.booleanToHclTerraform(struct!.doNotMergeAcrossPartitionsSelectFinal),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    empty_result_for_aggregation_by_empty_set: {
      value: cdktf.booleanToHclTerraform(struct!.emptyResultForAggregationByEmptySet),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_analyzer: {
      value: cdktf.booleanToHclTerraform(struct!.enableAnalyzer),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_http_compression: {
      value: cdktf.booleanToHclTerraform(struct!.enableHttpCompression),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_reads_from_query_cache: {
      value: cdktf.booleanToHclTerraform(struct!.enableReadsFromQueryCache),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_writes_to_query_cache: {
      value: cdktf.booleanToHclTerraform(struct!.enableWritesToQueryCache),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    fallback_to_stale_replicas_for_distributed_queries: {
      value: cdktf.booleanToHclTerraform(struct!.fallbackToStaleReplicasForDistributedQueries),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    flatten_nested: {
      value: cdktf.booleanToHclTerraform(struct!.flattenNested),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    force_index_by_date: {
      value: cdktf.booleanToHclTerraform(struct!.forceIndexByDate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    force_primary_key: {
      value: cdktf.booleanToHclTerraform(struct!.forcePrimaryKey),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    format_avro_schema_registry_url: {
      value: cdktf.stringToHclTerraform(struct!.formatAvroSchemaRegistryUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    format_regexp: {
      value: cdktf.stringToHclTerraform(struct!.formatRegexp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    format_regexp_skip_unmatched: {
      value: cdktf.booleanToHclTerraform(struct!.formatRegexpSkipUnmatched),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    group_by_overflow_mode: {
      value: cdktf.stringToHclTerraform(struct!.groupByOverflowMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_by_two_level_threshold: {
      value: cdktf.numberToHclTerraform(struct!.groupByTwoLevelThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    group_by_two_level_threshold_bytes: {
      value: cdktf.numberToHclTerraform(struct!.groupByTwoLevelThresholdBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hedged_connection_timeout_ms: {
      value: cdktf.numberToHclTerraform(struct!.hedgedConnectionTimeoutMs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_connection_timeout: {
      value: cdktf.numberToHclTerraform(struct!.httpConnectionTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_headers_progress_interval: {
      value: cdktf.numberToHclTerraform(struct!.httpHeadersProgressInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_max_field_name_size: {
      value: cdktf.numberToHclTerraform(struct!.httpMaxFieldNameSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_max_field_value_size: {
      value: cdktf.numberToHclTerraform(struct!.httpMaxFieldValueSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_receive_timeout: {
      value: cdktf.numberToHclTerraform(struct!.httpReceiveTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_send_timeout: {
      value: cdktf.numberToHclTerraform(struct!.httpSendTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    idle_connection_timeout: {
      value: cdktf.numberToHclTerraform(struct!.idleConnectionTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ignore_materialized_views_with_dropped_target_table: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreMaterializedViewsWithDroppedTargetTable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    input_format_defaults_for_omitted_fields: {
      value: cdktf.booleanToHclTerraform(struct!.inputFormatDefaultsForOmittedFields),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    input_format_import_nested_json: {
      value: cdktf.booleanToHclTerraform(struct!.inputFormatImportNestedJson),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    input_format_null_as_default: {
      value: cdktf.booleanToHclTerraform(struct!.inputFormatNullAsDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    input_format_parallel_parsing: {
      value: cdktf.booleanToHclTerraform(struct!.inputFormatParallelParsing),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    input_format_values_interpret_expressions: {
      value: cdktf.booleanToHclTerraform(struct!.inputFormatValuesInterpretExpressions),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    input_format_with_names_use_header: {
      value: cdktf.booleanToHclTerraform(struct!.inputFormatWithNamesUseHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    insert_keeper_max_retries: {
      value: cdktf.numberToHclTerraform(struct!.insertKeeperMaxRetries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    insert_null_as_default: {
      value: cdktf.booleanToHclTerraform(struct!.insertNullAsDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    insert_quorum: {
      value: cdktf.numberToHclTerraform(struct!.insertQuorum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    insert_quorum_parallel: {
      value: cdktf.booleanToHclTerraform(struct!.insertQuorumParallel),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    insert_quorum_timeout: {
      value: cdktf.numberToHclTerraform(struct!.insertQuorumTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    join_algorithm: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.joinAlgorithm),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    join_overflow_mode: {
      value: cdktf.stringToHclTerraform(struct!.joinOverflowMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    join_use_nulls: {
      value: cdktf.booleanToHclTerraform(struct!.joinUseNulls),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    joined_subquery_requires_alias: {
      value: cdktf.booleanToHclTerraform(struct!.joinedSubqueryRequiresAlias),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    load_balancing: {
      value: cdktf.stringToHclTerraform(struct!.loadBalancing),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_filesystem_read_method: {
      value: cdktf.stringToHclTerraform(struct!.localFilesystemReadMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_processors_profiles: {
      value: cdktf.booleanToHclTerraform(struct!.logProcessorsProfiles),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    log_queries_probability: {
      value: cdktf.numberToHclTerraform(struct!.logQueriesProbability),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_query_threads: {
      value: cdktf.booleanToHclTerraform(struct!.logQueryThreads),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    log_query_views: {
      value: cdktf.booleanToHclTerraform(struct!.logQueryViews),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    low_cardinality_allow_in_native_format: {
      value: cdktf.booleanToHclTerraform(struct!.lowCardinalityAllowInNativeFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_ast_depth: {
      value: cdktf.numberToHclTerraform(struct!.maxAstDepth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_ast_elements: {
      value: cdktf.numberToHclTerraform(struct!.maxAstElements),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_block_size: {
      value: cdktf.numberToHclTerraform(struct!.maxBlockSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_bytes_before_external_group_by: {
      value: cdktf.numberToHclTerraform(struct!.maxBytesBeforeExternalGroupBy),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_bytes_before_external_sort: {
      value: cdktf.numberToHclTerraform(struct!.maxBytesBeforeExternalSort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_bytes_in_distinct: {
      value: cdktf.numberToHclTerraform(struct!.maxBytesInDistinct),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_bytes_in_join: {
      value: cdktf.numberToHclTerraform(struct!.maxBytesInJoin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_bytes_in_set: {
      value: cdktf.numberToHclTerraform(struct!.maxBytesInSet),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_bytes_to_read: {
      value: cdktf.numberToHclTerraform(struct!.maxBytesToRead),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_bytes_to_sort: {
      value: cdktf.numberToHclTerraform(struct!.maxBytesToSort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_bytes_to_transfer: {
      value: cdktf.numberToHclTerraform(struct!.maxBytesToTransfer),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_columns_to_read: {
      value: cdktf.numberToHclTerraform(struct!.maxColumnsToRead),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_concurrent_queries_for_user: {
      value: cdktf.numberToHclTerraform(struct!.maxConcurrentQueriesForUser),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_execution_time: {
      value: cdktf.numberToHclTerraform(struct!.maxExecutionTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_expanded_ast_elements: {
      value: cdktf.numberToHclTerraform(struct!.maxExpandedAstElements),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_final_threads: {
      value: cdktf.numberToHclTerraform(struct!.maxFinalThreads),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_http_get_redirects: {
      value: cdktf.numberToHclTerraform(struct!.maxHttpGetRedirects),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_insert_block_size: {
      value: cdktf.numberToHclTerraform(struct!.maxInsertBlockSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_insert_threads: {
      value: cdktf.numberToHclTerraform(struct!.maxInsertThreads),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_memory_usage: {
      value: cdktf.numberToHclTerraform(struct!.maxMemoryUsage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_memory_usage_for_user: {
      value: cdktf.numberToHclTerraform(struct!.maxMemoryUsageForUser),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_network_bandwidth: {
      value: cdktf.numberToHclTerraform(struct!.maxNetworkBandwidth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_network_bandwidth_for_user: {
      value: cdktf.numberToHclTerraform(struct!.maxNetworkBandwidthForUser),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_parser_depth: {
      value: cdktf.numberToHclTerraform(struct!.maxParserDepth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_query_size: {
      value: cdktf.numberToHclTerraform(struct!.maxQuerySize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_read_buffer_size: {
      value: cdktf.numberToHclTerraform(struct!.maxReadBufferSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_replica_delay_for_distributed_queries: {
      value: cdktf.numberToHclTerraform(struct!.maxReplicaDelayForDistributedQueries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_result_bytes: {
      value: cdktf.numberToHclTerraform(struct!.maxResultBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_result_rows: {
      value: cdktf.numberToHclTerraform(struct!.maxResultRows),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_rows_in_distinct: {
      value: cdktf.numberToHclTerraform(struct!.maxRowsInDistinct),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_rows_in_join: {
      value: cdktf.numberToHclTerraform(struct!.maxRowsInJoin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_rows_in_set: {
      value: cdktf.numberToHclTerraform(struct!.maxRowsInSet),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_rows_to_group_by: {
      value: cdktf.numberToHclTerraform(struct!.maxRowsToGroupBy),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_rows_to_read: {
      value: cdktf.numberToHclTerraform(struct!.maxRowsToRead),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_rows_to_sort: {
      value: cdktf.numberToHclTerraform(struct!.maxRowsToSort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_rows_to_transfer: {
      value: cdktf.numberToHclTerraform(struct!.maxRowsToTransfer),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_temporary_columns: {
      value: cdktf.numberToHclTerraform(struct!.maxTemporaryColumns),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_temporary_data_on_disk_size_for_query: {
      value: cdktf.numberToHclTerraform(struct!.maxTemporaryDataOnDiskSizeForQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_temporary_data_on_disk_size_for_user: {
      value: cdktf.numberToHclTerraform(struct!.maxTemporaryDataOnDiskSizeForUser),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_temporary_non_const_columns: {
      value: cdktf.numberToHclTerraform(struct!.maxTemporaryNonConstColumns),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_threads: {
      value: cdktf.numberToHclTerraform(struct!.maxThreads),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    memory_overcommit_ratio_denominator: {
      value: cdktf.numberToHclTerraform(struct!.memoryOvercommitRatioDenominator),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    memory_overcommit_ratio_denominator_for_user: {
      value: cdktf.numberToHclTerraform(struct!.memoryOvercommitRatioDenominatorForUser),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    memory_profiler_sample_probability: {
      value: cdktf.numberToHclTerraform(struct!.memoryProfilerSampleProbability),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    memory_profiler_step: {
      value: cdktf.numberToHclTerraform(struct!.memoryProfilerStep),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    memory_usage_overcommit_max_wait_microseconds: {
      value: cdktf.numberToHclTerraform(struct!.memoryUsageOvercommitMaxWaitMicroseconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    merge_tree_max_bytes_to_use_cache: {
      value: cdktf.numberToHclTerraform(struct!.mergeTreeMaxBytesToUseCache),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    merge_tree_max_rows_to_use_cache: {
      value: cdktf.numberToHclTerraform(struct!.mergeTreeMaxRowsToUseCache),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    merge_tree_min_bytes_for_concurrent_read: {
      value: cdktf.numberToHclTerraform(struct!.mergeTreeMinBytesForConcurrentRead),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    merge_tree_min_rows_for_concurrent_read: {
      value: cdktf.numberToHclTerraform(struct!.mergeTreeMinRowsForConcurrentRead),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_bytes_to_use_direct_io: {
      value: cdktf.numberToHclTerraform(struct!.minBytesToUseDirectIo),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_count_to_compile: {
      value: cdktf.numberToHclTerraform(struct!.minCountToCompile),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_count_to_compile_expression: {
      value: cdktf.numberToHclTerraform(struct!.minCountToCompileExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_execution_speed: {
      value: cdktf.numberToHclTerraform(struct!.minExecutionSpeed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_execution_speed_bytes: {
      value: cdktf.numberToHclTerraform(struct!.minExecutionSpeedBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_insert_block_size_bytes: {
      value: cdktf.numberToHclTerraform(struct!.minInsertBlockSizeBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_insert_block_size_rows: {
      value: cdktf.numberToHclTerraform(struct!.minInsertBlockSizeRows),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    output_format_json_quote_64bit_integers: {
      value: cdktf.booleanToHclTerraform(struct!.outputFormatJsonQuote64BitIntegers),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    output_format_json_quote_denormals: {
      value: cdktf.booleanToHclTerraform(struct!.outputFormatJsonQuoteDenormals),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prefer_localhost_replica: {
      value: cdktf.booleanToHclTerraform(struct!.preferLocalhostReplica),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    query_cache_max_entries: {
      value: cdktf.numberToHclTerraform(struct!.queryCacheMaxEntries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    query_cache_max_size_in_bytes: {
      value: cdktf.numberToHclTerraform(struct!.queryCacheMaxSizeInBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    query_cache_min_query_duration: {
      value: cdktf.numberToHclTerraform(struct!.queryCacheMinQueryDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    query_cache_min_query_runs: {
      value: cdktf.numberToHclTerraform(struct!.queryCacheMinQueryRuns),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    query_cache_share_between_users: {
      value: cdktf.booleanToHclTerraform(struct!.queryCacheShareBetweenUsers),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    query_cache_tag: {
      value: cdktf.stringToHclTerraform(struct!.queryCacheTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query_cache_ttl: {
      value: cdktf.numberToHclTerraform(struct!.queryCacheTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    quota_mode: {
      value: cdktf.stringToHclTerraform(struct!.quotaMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read_overflow_mode: {
      value: cdktf.stringToHclTerraform(struct!.readOverflowMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    readonly: {
      value: cdktf.numberToHclTerraform(struct!.readonly),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    receive_timeout: {
      value: cdktf.numberToHclTerraform(struct!.receiveTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    remote_filesystem_read_method: {
      value: cdktf.stringToHclTerraform(struct!.remoteFilesystemReadMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replication_alter_partitions_sync: {
      value: cdktf.numberToHclTerraform(struct!.replicationAlterPartitionsSync),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    result_overflow_mode: {
      value: cdktf.stringToHclTerraform(struct!.resultOverflowMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_use_adaptive_timeouts: {
      value: cdktf.booleanToHclTerraform(struct!.s3UseAdaptiveTimeouts),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    select_sequential_consistency: {
      value: cdktf.booleanToHclTerraform(struct!.selectSequentialConsistency),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    send_progress_in_http_headers: {
      value: cdktf.booleanToHclTerraform(struct!.sendProgressInHttpHeaders),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    send_timeout: {
      value: cdktf.numberToHclTerraform(struct!.sendTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    set_overflow_mode: {
      value: cdktf.stringToHclTerraform(struct!.setOverflowMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    skip_unavailable_shards: {
      value: cdktf.booleanToHclTerraform(struct!.skipUnavailableShards),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sort_overflow_mode: {
      value: cdktf.stringToHclTerraform(struct!.sortOverflowMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout_before_checking_execution_speed: {
      value: cdktf.numberToHclTerraform(struct!.timeoutBeforeCheckingExecutionSpeed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout_overflow_mode: {
      value: cdktf.stringToHclTerraform(struct!.timeoutOverflowMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transfer_overflow_mode: {
      value: cdktf.stringToHclTerraform(struct!.transferOverflowMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transform_null_in: {
      value: cdktf.booleanToHclTerraform(struct!.transformNullIn),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_hedged_requests: {
      value: cdktf.booleanToHclTerraform(struct!.useHedgedRequests),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_query_cache: {
      value: cdktf.booleanToHclTerraform(struct!.useQueryCache),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_uncompressed_cache: {
      value: cdktf.booleanToHclTerraform(struct!.useUncompressedCache),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    wait_for_async_insert: {
      value: cdktf.booleanToHclTerraform(struct!.waitForAsyncInsert),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    wait_for_async_insert_timeout: {
      value: cdktf.numberToHclTerraform(struct!.waitForAsyncInsertTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataYandexMdbClickhouseClusterUserSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataYandexMdbClickhouseClusterUserSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addHttpCorsHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.addHttpCorsHeader = this._addHttpCorsHeader;
    }
    if (this._allowDdl !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowDdl = this._allowDdl;
    }
    if (this._allowIntrospectionFunctions !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowIntrospectionFunctions = this._allowIntrospectionFunctions;
    }
    if (this._allowSuspiciousLowCardinalityTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowSuspiciousLowCardinalityTypes = this._allowSuspiciousLowCardinalityTypes;
    }
    if (this._anyJoinDistinctRightTableKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyJoinDistinctRightTableKeys = this._anyJoinDistinctRightTableKeys;
    }
    if (this._asyncInsert !== undefined) {
      hasAnyValues = true;
      internalValueResult.asyncInsert = this._asyncInsert;
    }
    if (this._asyncInsertBusyTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.asyncInsertBusyTimeout = this._asyncInsertBusyTimeout;
    }
    if (this._asyncInsertMaxDataSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.asyncInsertMaxDataSize = this._asyncInsertMaxDataSize;
    }
    if (this._asyncInsertStaleTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.asyncInsertStaleTimeout = this._asyncInsertStaleTimeout;
    }
    if (this._asyncInsertThreads !== undefined) {
      hasAnyValues = true;
      internalValueResult.asyncInsertThreads = this._asyncInsertThreads;
    }
    if (this._asyncInsertUseAdaptiveBusyTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.asyncInsertUseAdaptiveBusyTimeout = this._asyncInsertUseAdaptiveBusyTimeout;
    }
    if (this._cancelHttpReadonlyQueriesOnClientClose !== undefined) {
      hasAnyValues = true;
      internalValueResult.cancelHttpReadonlyQueriesOnClientClose = this._cancelHttpReadonlyQueriesOnClientClose;
    }
    if (this._compile !== undefined) {
      hasAnyValues = true;
      internalValueResult.compile = this._compile;
    }
    if (this._compileExpressions !== undefined) {
      hasAnyValues = true;
      internalValueResult.compileExpressions = this._compileExpressions;
    }
    if (this._connectTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectTimeout = this._connectTimeout;
    }
    if (this._connectTimeoutWithFailover !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectTimeoutWithFailover = this._connectTimeoutWithFailover;
    }
    if (this._countDistinctImplementation !== undefined) {
      hasAnyValues = true;
      internalValueResult.countDistinctImplementation = this._countDistinctImplementation;
    }
    if (this._dataTypeDefaultNullable !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataTypeDefaultNullable = this._dataTypeDefaultNullable;
    }
    if (this._dateTimeInputFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.dateTimeInputFormat = this._dateTimeInputFormat;
    }
    if (this._dateTimeOutputFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.dateTimeOutputFormat = this._dateTimeOutputFormat;
    }
    if (this._deduplicateBlocksInDependentMaterializedViews !== undefined) {
      hasAnyValues = true;
      internalValueResult.deduplicateBlocksInDependentMaterializedViews = this._deduplicateBlocksInDependentMaterializedViews;
    }
    if (this._distinctOverflowMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.distinctOverflowMode = this._distinctOverflowMode;
    }
    if (this._distributedAggregationMemoryEfficient !== undefined) {
      hasAnyValues = true;
      internalValueResult.distributedAggregationMemoryEfficient = this._distributedAggregationMemoryEfficient;
    }
    if (this._distributedDdlTaskTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.distributedDdlTaskTimeout = this._distributedDdlTaskTimeout;
    }
    if (this._distributedProductMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.distributedProductMode = this._distributedProductMode;
    }
    if (this._doNotMergeAcrossPartitionsSelectFinal !== undefined) {
      hasAnyValues = true;
      internalValueResult.doNotMergeAcrossPartitionsSelectFinal = this._doNotMergeAcrossPartitionsSelectFinal;
    }
    if (this._emptyResultForAggregationByEmptySet !== undefined) {
      hasAnyValues = true;
      internalValueResult.emptyResultForAggregationByEmptySet = this._emptyResultForAggregationByEmptySet;
    }
    if (this._enableAnalyzer !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableAnalyzer = this._enableAnalyzer;
    }
    if (this._enableHttpCompression !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableHttpCompression = this._enableHttpCompression;
    }
    if (this._enableReadsFromQueryCache !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableReadsFromQueryCache = this._enableReadsFromQueryCache;
    }
    if (this._enableWritesToQueryCache !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableWritesToQueryCache = this._enableWritesToQueryCache;
    }
    if (this._fallbackToStaleReplicasForDistributedQueries !== undefined) {
      hasAnyValues = true;
      internalValueResult.fallbackToStaleReplicasForDistributedQueries = this._fallbackToStaleReplicasForDistributedQueries;
    }
    if (this._flattenNested !== undefined) {
      hasAnyValues = true;
      internalValueResult.flattenNested = this._flattenNested;
    }
    if (this._forceIndexByDate !== undefined) {
      hasAnyValues = true;
      internalValueResult.forceIndexByDate = this._forceIndexByDate;
    }
    if (this._forcePrimaryKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.forcePrimaryKey = this._forcePrimaryKey;
    }
    if (this._formatAvroSchemaRegistryUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.formatAvroSchemaRegistryUrl = this._formatAvroSchemaRegistryUrl;
    }
    if (this._formatRegexp !== undefined) {
      hasAnyValues = true;
      internalValueResult.formatRegexp = this._formatRegexp;
    }
    if (this._formatRegexpSkipUnmatched !== undefined) {
      hasAnyValues = true;
      internalValueResult.formatRegexpSkipUnmatched = this._formatRegexpSkipUnmatched;
    }
    if (this._groupByOverflowMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupByOverflowMode = this._groupByOverflowMode;
    }
    if (this._groupByTwoLevelThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupByTwoLevelThreshold = this._groupByTwoLevelThreshold;
    }
    if (this._groupByTwoLevelThresholdBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupByTwoLevelThresholdBytes = this._groupByTwoLevelThresholdBytes;
    }
    if (this._hedgedConnectionTimeoutMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.hedgedConnectionTimeoutMs = this._hedgedConnectionTimeoutMs;
    }
    if (this._httpConnectionTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpConnectionTimeout = this._httpConnectionTimeout;
    }
    if (this._httpHeadersProgressInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpHeadersProgressInterval = this._httpHeadersProgressInterval;
    }
    if (this._httpMaxFieldNameSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpMaxFieldNameSize = this._httpMaxFieldNameSize;
    }
    if (this._httpMaxFieldValueSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpMaxFieldValueSize = this._httpMaxFieldValueSize;
    }
    if (this._httpReceiveTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpReceiveTimeout = this._httpReceiveTimeout;
    }
    if (this._httpSendTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpSendTimeout = this._httpSendTimeout;
    }
    if (this._idleConnectionTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.idleConnectionTimeout = this._idleConnectionTimeout;
    }
    if (this._ignoreMaterializedViewsWithDroppedTargetTable !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreMaterializedViewsWithDroppedTargetTable = this._ignoreMaterializedViewsWithDroppedTargetTable;
    }
    if (this._inputFormatDefaultsForOmittedFields !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputFormatDefaultsForOmittedFields = this._inputFormatDefaultsForOmittedFields;
    }
    if (this._inputFormatImportNestedJson !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputFormatImportNestedJson = this._inputFormatImportNestedJson;
    }
    if (this._inputFormatNullAsDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputFormatNullAsDefault = this._inputFormatNullAsDefault;
    }
    if (this._inputFormatParallelParsing !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputFormatParallelParsing = this._inputFormatParallelParsing;
    }
    if (this._inputFormatValuesInterpretExpressions !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputFormatValuesInterpretExpressions = this._inputFormatValuesInterpretExpressions;
    }
    if (this._inputFormatWithNamesUseHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputFormatWithNamesUseHeader = this._inputFormatWithNamesUseHeader;
    }
    if (this._insertKeeperMaxRetries !== undefined) {
      hasAnyValues = true;
      internalValueResult.insertKeeperMaxRetries = this._insertKeeperMaxRetries;
    }
    if (this._insertNullAsDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.insertNullAsDefault = this._insertNullAsDefault;
    }
    if (this._insertQuorum !== undefined) {
      hasAnyValues = true;
      internalValueResult.insertQuorum = this._insertQuorum;
    }
    if (this._insertQuorumParallel !== undefined) {
      hasAnyValues = true;
      internalValueResult.insertQuorumParallel = this._insertQuorumParallel;
    }
    if (this._insertQuorumTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.insertQuorumTimeout = this._insertQuorumTimeout;
    }
    if (this._joinAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.joinAlgorithm = this._joinAlgorithm;
    }
    if (this._joinOverflowMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.joinOverflowMode = this._joinOverflowMode;
    }
    if (this._joinUseNulls !== undefined) {
      hasAnyValues = true;
      internalValueResult.joinUseNulls = this._joinUseNulls;
    }
    if (this._joinedSubqueryRequiresAlias !== undefined) {
      hasAnyValues = true;
      internalValueResult.joinedSubqueryRequiresAlias = this._joinedSubqueryRequiresAlias;
    }
    if (this._loadBalancing !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalancing = this._loadBalancing;
    }
    if (this._localFilesystemReadMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.localFilesystemReadMethod = this._localFilesystemReadMethod;
    }
    if (this._logProcessorsProfiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.logProcessorsProfiles = this._logProcessorsProfiles;
    }
    if (this._logQueriesProbability !== undefined) {
      hasAnyValues = true;
      internalValueResult.logQueriesProbability = this._logQueriesProbability;
    }
    if (this._logQueryThreads !== undefined) {
      hasAnyValues = true;
      internalValueResult.logQueryThreads = this._logQueryThreads;
    }
    if (this._logQueryViews !== undefined) {
      hasAnyValues = true;
      internalValueResult.logQueryViews = this._logQueryViews;
    }
    if (this._lowCardinalityAllowInNativeFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.lowCardinalityAllowInNativeFormat = this._lowCardinalityAllowInNativeFormat;
    }
    if (this._maxAstDepth !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAstDepth = this._maxAstDepth;
    }
    if (this._maxAstElements !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAstElements = this._maxAstElements;
    }
    if (this._maxBlockSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxBlockSize = this._maxBlockSize;
    }
    if (this._maxBytesBeforeExternalGroupBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxBytesBeforeExternalGroupBy = this._maxBytesBeforeExternalGroupBy;
    }
    if (this._maxBytesBeforeExternalSort !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxBytesBeforeExternalSort = this._maxBytesBeforeExternalSort;
    }
    if (this._maxBytesInDistinct !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxBytesInDistinct = this._maxBytesInDistinct;
    }
    if (this._maxBytesInJoin !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxBytesInJoin = this._maxBytesInJoin;
    }
    if (this._maxBytesInSet !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxBytesInSet = this._maxBytesInSet;
    }
    if (this._maxBytesToRead !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxBytesToRead = this._maxBytesToRead;
    }
    if (this._maxBytesToSort !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxBytesToSort = this._maxBytesToSort;
    }
    if (this._maxBytesToTransfer !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxBytesToTransfer = this._maxBytesToTransfer;
    }
    if (this._maxColumnsToRead !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxColumnsToRead = this._maxColumnsToRead;
    }
    if (this._maxConcurrentQueriesForUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConcurrentQueriesForUser = this._maxConcurrentQueriesForUser;
    }
    if (this._maxExecutionTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxExecutionTime = this._maxExecutionTime;
    }
    if (this._maxExpandedAstElements !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxExpandedAstElements = this._maxExpandedAstElements;
    }
    if (this._maxFinalThreads !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxFinalThreads = this._maxFinalThreads;
    }
    if (this._maxHttpGetRedirects !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxHttpGetRedirects = this._maxHttpGetRedirects;
    }
    if (this._maxInsertBlockSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxInsertBlockSize = this._maxInsertBlockSize;
    }
    if (this._maxInsertThreads !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxInsertThreads = this._maxInsertThreads;
    }
    if (this._maxMemoryUsage !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxMemoryUsage = this._maxMemoryUsage;
    }
    if (this._maxMemoryUsageForUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxMemoryUsageForUser = this._maxMemoryUsageForUser;
    }
    if (this._maxNetworkBandwidth !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxNetworkBandwidth = this._maxNetworkBandwidth;
    }
    if (this._maxNetworkBandwidthForUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxNetworkBandwidthForUser = this._maxNetworkBandwidthForUser;
    }
    if (this._maxParserDepth !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxParserDepth = this._maxParserDepth;
    }
    if (this._maxQuerySize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxQuerySize = this._maxQuerySize;
    }
    if (this._maxReadBufferSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxReadBufferSize = this._maxReadBufferSize;
    }
    if (this._maxReplicaDelayForDistributedQueries !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxReplicaDelayForDistributedQueries = this._maxReplicaDelayForDistributedQueries;
    }
    if (this._maxResultBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxResultBytes = this._maxResultBytes;
    }
    if (this._maxResultRows !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxResultRows = this._maxResultRows;
    }
    if (this._maxRowsInDistinct !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRowsInDistinct = this._maxRowsInDistinct;
    }
    if (this._maxRowsInJoin !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRowsInJoin = this._maxRowsInJoin;
    }
    if (this._maxRowsInSet !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRowsInSet = this._maxRowsInSet;
    }
    if (this._maxRowsToGroupBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRowsToGroupBy = this._maxRowsToGroupBy;
    }
    if (this._maxRowsToRead !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRowsToRead = this._maxRowsToRead;
    }
    if (this._maxRowsToSort !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRowsToSort = this._maxRowsToSort;
    }
    if (this._maxRowsToTransfer !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRowsToTransfer = this._maxRowsToTransfer;
    }
    if (this._maxTemporaryColumns !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxTemporaryColumns = this._maxTemporaryColumns;
    }
    if (this._maxTemporaryDataOnDiskSizeForQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxTemporaryDataOnDiskSizeForQuery = this._maxTemporaryDataOnDiskSizeForQuery;
    }
    if (this._maxTemporaryDataOnDiskSizeForUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxTemporaryDataOnDiskSizeForUser = this._maxTemporaryDataOnDiskSizeForUser;
    }
    if (this._maxTemporaryNonConstColumns !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxTemporaryNonConstColumns = this._maxTemporaryNonConstColumns;
    }
    if (this._maxThreads !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxThreads = this._maxThreads;
    }
    if (this._memoryOvercommitRatioDenominator !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryOvercommitRatioDenominator = this._memoryOvercommitRatioDenominator;
    }
    if (this._memoryOvercommitRatioDenominatorForUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryOvercommitRatioDenominatorForUser = this._memoryOvercommitRatioDenominatorForUser;
    }
    if (this._memoryProfilerSampleProbability !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryProfilerSampleProbability = this._memoryProfilerSampleProbability;
    }
    if (this._memoryProfilerStep !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryProfilerStep = this._memoryProfilerStep;
    }
    if (this._memoryUsageOvercommitMaxWaitMicroseconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryUsageOvercommitMaxWaitMicroseconds = this._memoryUsageOvercommitMaxWaitMicroseconds;
    }
    if (this._mergeTreeMaxBytesToUseCache !== undefined) {
      hasAnyValues = true;
      internalValueResult.mergeTreeMaxBytesToUseCache = this._mergeTreeMaxBytesToUseCache;
    }
    if (this._mergeTreeMaxRowsToUseCache !== undefined) {
      hasAnyValues = true;
      internalValueResult.mergeTreeMaxRowsToUseCache = this._mergeTreeMaxRowsToUseCache;
    }
    if (this._mergeTreeMinBytesForConcurrentRead !== undefined) {
      hasAnyValues = true;
      internalValueResult.mergeTreeMinBytesForConcurrentRead = this._mergeTreeMinBytesForConcurrentRead;
    }
    if (this._mergeTreeMinRowsForConcurrentRead !== undefined) {
      hasAnyValues = true;
      internalValueResult.mergeTreeMinRowsForConcurrentRead = this._mergeTreeMinRowsForConcurrentRead;
    }
    if (this._minBytesToUseDirectIo !== undefined) {
      hasAnyValues = true;
      internalValueResult.minBytesToUseDirectIo = this._minBytesToUseDirectIo;
    }
    if (this._minCountToCompile !== undefined) {
      hasAnyValues = true;
      internalValueResult.minCountToCompile = this._minCountToCompile;
    }
    if (this._minCountToCompileExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.minCountToCompileExpression = this._minCountToCompileExpression;
    }
    if (this._minExecutionSpeed !== undefined) {
      hasAnyValues = true;
      internalValueResult.minExecutionSpeed = this._minExecutionSpeed;
    }
    if (this._minExecutionSpeedBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.minExecutionSpeedBytes = this._minExecutionSpeedBytes;
    }
    if (this._minInsertBlockSizeBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.minInsertBlockSizeBytes = this._minInsertBlockSizeBytes;
    }
    if (this._minInsertBlockSizeRows !== undefined) {
      hasAnyValues = true;
      internalValueResult.minInsertBlockSizeRows = this._minInsertBlockSizeRows;
    }
    if (this._outputFormatJsonQuote64BitIntegers !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputFormatJsonQuote64BitIntegers = this._outputFormatJsonQuote64BitIntegers;
    }
    if (this._outputFormatJsonQuoteDenormals !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputFormatJsonQuoteDenormals = this._outputFormatJsonQuoteDenormals;
    }
    if (this._preferLocalhostReplica !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferLocalhostReplica = this._preferLocalhostReplica;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._queryCacheMaxEntries !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryCacheMaxEntries = this._queryCacheMaxEntries;
    }
    if (this._queryCacheMaxSizeInBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryCacheMaxSizeInBytes = this._queryCacheMaxSizeInBytes;
    }
    if (this._queryCacheMinQueryDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryCacheMinQueryDuration = this._queryCacheMinQueryDuration;
    }
    if (this._queryCacheMinQueryRuns !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryCacheMinQueryRuns = this._queryCacheMinQueryRuns;
    }
    if (this._queryCacheShareBetweenUsers !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryCacheShareBetweenUsers = this._queryCacheShareBetweenUsers;
    }
    if (this._queryCacheTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryCacheTag = this._queryCacheTag;
    }
    if (this._queryCacheTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryCacheTtl = this._queryCacheTtl;
    }
    if (this._quotaMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.quotaMode = this._quotaMode;
    }
    if (this._readOverflowMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOverflowMode = this._readOverflowMode;
    }
    if (this._readonly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readonly = this._readonly;
    }
    if (this._receiveTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.receiveTimeout = this._receiveTimeout;
    }
    if (this._remoteFilesystemReadMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteFilesystemReadMethod = this._remoteFilesystemReadMethod;
    }
    if (this._replicationAlterPartitionsSync !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicationAlterPartitionsSync = this._replicationAlterPartitionsSync;
    }
    if (this._resultOverflowMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.resultOverflowMode = this._resultOverflowMode;
    }
    if (this._s3UseAdaptiveTimeouts !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3UseAdaptiveTimeouts = this._s3UseAdaptiveTimeouts;
    }
    if (this._selectSequentialConsistency !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectSequentialConsistency = this._selectSequentialConsistency;
    }
    if (this._sendProgressInHttpHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendProgressInHttpHeaders = this._sendProgressInHttpHeaders;
    }
    if (this._sendTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendTimeout = this._sendTimeout;
    }
    if (this._setOverflowMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.setOverflowMode = this._setOverflowMode;
    }
    if (this._skipUnavailableShards !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipUnavailableShards = this._skipUnavailableShards;
    }
    if (this._sortOverflowMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.sortOverflowMode = this._sortOverflowMode;
    }
    if (this._timeoutBeforeCheckingExecutionSpeed !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutBeforeCheckingExecutionSpeed = this._timeoutBeforeCheckingExecutionSpeed;
    }
    if (this._timeoutOverflowMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutOverflowMode = this._timeoutOverflowMode;
    }
    if (this._transferOverflowMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.transferOverflowMode = this._transferOverflowMode;
    }
    if (this._transformNullIn !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformNullIn = this._transformNullIn;
    }
    if (this._useHedgedRequests !== undefined) {
      hasAnyValues = true;
      internalValueResult.useHedgedRequests = this._useHedgedRequests;
    }
    if (this._useQueryCache !== undefined) {
      hasAnyValues = true;
      internalValueResult.useQueryCache = this._useQueryCache;
    }
    if (this._useUncompressedCache !== undefined) {
      hasAnyValues = true;
      internalValueResult.useUncompressedCache = this._useUncompressedCache;
    }
    if (this._waitForAsyncInsert !== undefined) {
      hasAnyValues = true;
      internalValueResult.waitForAsyncInsert = this._waitForAsyncInsert;
    }
    if (this._waitForAsyncInsertTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.waitForAsyncInsertTimeout = this._waitForAsyncInsertTimeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbClickhouseClusterUserSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._addHttpCorsHeader = undefined;
      this._allowDdl = undefined;
      this._allowIntrospectionFunctions = undefined;
      this._allowSuspiciousLowCardinalityTypes = undefined;
      this._anyJoinDistinctRightTableKeys = undefined;
      this._asyncInsert = undefined;
      this._asyncInsertBusyTimeout = undefined;
      this._asyncInsertMaxDataSize = undefined;
      this._asyncInsertStaleTimeout = undefined;
      this._asyncInsertThreads = undefined;
      this._asyncInsertUseAdaptiveBusyTimeout = undefined;
      this._cancelHttpReadonlyQueriesOnClientClose = undefined;
      this._compile = undefined;
      this._compileExpressions = undefined;
      this._connectTimeout = undefined;
      this._connectTimeoutWithFailover = undefined;
      this._countDistinctImplementation = undefined;
      this._dataTypeDefaultNullable = undefined;
      this._dateTimeInputFormat = undefined;
      this._dateTimeOutputFormat = undefined;
      this._deduplicateBlocksInDependentMaterializedViews = undefined;
      this._distinctOverflowMode = undefined;
      this._distributedAggregationMemoryEfficient = undefined;
      this._distributedDdlTaskTimeout = undefined;
      this._distributedProductMode = undefined;
      this._doNotMergeAcrossPartitionsSelectFinal = undefined;
      this._emptyResultForAggregationByEmptySet = undefined;
      this._enableAnalyzer = undefined;
      this._enableHttpCompression = undefined;
      this._enableReadsFromQueryCache = undefined;
      this._enableWritesToQueryCache = undefined;
      this._fallbackToStaleReplicasForDistributedQueries = undefined;
      this._flattenNested = undefined;
      this._forceIndexByDate = undefined;
      this._forcePrimaryKey = undefined;
      this._formatAvroSchemaRegistryUrl = undefined;
      this._formatRegexp = undefined;
      this._formatRegexpSkipUnmatched = undefined;
      this._groupByOverflowMode = undefined;
      this._groupByTwoLevelThreshold = undefined;
      this._groupByTwoLevelThresholdBytes = undefined;
      this._hedgedConnectionTimeoutMs = undefined;
      this._httpConnectionTimeout = undefined;
      this._httpHeadersProgressInterval = undefined;
      this._httpMaxFieldNameSize = undefined;
      this._httpMaxFieldValueSize = undefined;
      this._httpReceiveTimeout = undefined;
      this._httpSendTimeout = undefined;
      this._idleConnectionTimeout = undefined;
      this._ignoreMaterializedViewsWithDroppedTargetTable = undefined;
      this._inputFormatDefaultsForOmittedFields = undefined;
      this._inputFormatImportNestedJson = undefined;
      this._inputFormatNullAsDefault = undefined;
      this._inputFormatParallelParsing = undefined;
      this._inputFormatValuesInterpretExpressions = undefined;
      this._inputFormatWithNamesUseHeader = undefined;
      this._insertKeeperMaxRetries = undefined;
      this._insertNullAsDefault = undefined;
      this._insertQuorum = undefined;
      this._insertQuorumParallel = undefined;
      this._insertQuorumTimeout = undefined;
      this._joinAlgorithm = undefined;
      this._joinOverflowMode = undefined;
      this._joinUseNulls = undefined;
      this._joinedSubqueryRequiresAlias = undefined;
      this._loadBalancing = undefined;
      this._localFilesystemReadMethod = undefined;
      this._logProcessorsProfiles = undefined;
      this._logQueriesProbability = undefined;
      this._logQueryThreads = undefined;
      this._logQueryViews = undefined;
      this._lowCardinalityAllowInNativeFormat = undefined;
      this._maxAstDepth = undefined;
      this._maxAstElements = undefined;
      this._maxBlockSize = undefined;
      this._maxBytesBeforeExternalGroupBy = undefined;
      this._maxBytesBeforeExternalSort = undefined;
      this._maxBytesInDistinct = undefined;
      this._maxBytesInJoin = undefined;
      this._maxBytesInSet = undefined;
      this._maxBytesToRead = undefined;
      this._maxBytesToSort = undefined;
      this._maxBytesToTransfer = undefined;
      this._maxColumnsToRead = undefined;
      this._maxConcurrentQueriesForUser = undefined;
      this._maxExecutionTime = undefined;
      this._maxExpandedAstElements = undefined;
      this._maxFinalThreads = undefined;
      this._maxHttpGetRedirects = undefined;
      this._maxInsertBlockSize = undefined;
      this._maxInsertThreads = undefined;
      this._maxMemoryUsage = undefined;
      this._maxMemoryUsageForUser = undefined;
      this._maxNetworkBandwidth = undefined;
      this._maxNetworkBandwidthForUser = undefined;
      this._maxParserDepth = undefined;
      this._maxQuerySize = undefined;
      this._maxReadBufferSize = undefined;
      this._maxReplicaDelayForDistributedQueries = undefined;
      this._maxResultBytes = undefined;
      this._maxResultRows = undefined;
      this._maxRowsInDistinct = undefined;
      this._maxRowsInJoin = undefined;
      this._maxRowsInSet = undefined;
      this._maxRowsToGroupBy = undefined;
      this._maxRowsToRead = undefined;
      this._maxRowsToSort = undefined;
      this._maxRowsToTransfer = undefined;
      this._maxTemporaryColumns = undefined;
      this._maxTemporaryDataOnDiskSizeForQuery = undefined;
      this._maxTemporaryDataOnDiskSizeForUser = undefined;
      this._maxTemporaryNonConstColumns = undefined;
      this._maxThreads = undefined;
      this._memoryOvercommitRatioDenominator = undefined;
      this._memoryOvercommitRatioDenominatorForUser = undefined;
      this._memoryProfilerSampleProbability = undefined;
      this._memoryProfilerStep = undefined;
      this._memoryUsageOvercommitMaxWaitMicroseconds = undefined;
      this._mergeTreeMaxBytesToUseCache = undefined;
      this._mergeTreeMaxRowsToUseCache = undefined;
      this._mergeTreeMinBytesForConcurrentRead = undefined;
      this._mergeTreeMinRowsForConcurrentRead = undefined;
      this._minBytesToUseDirectIo = undefined;
      this._minCountToCompile = undefined;
      this._minCountToCompileExpression = undefined;
      this._minExecutionSpeed = undefined;
      this._minExecutionSpeedBytes = undefined;
      this._minInsertBlockSizeBytes = undefined;
      this._minInsertBlockSizeRows = undefined;
      this._outputFormatJsonQuote64BitIntegers = undefined;
      this._outputFormatJsonQuoteDenormals = undefined;
      this._preferLocalhostReplica = undefined;
      this._priority = undefined;
      this._queryCacheMaxEntries = undefined;
      this._queryCacheMaxSizeInBytes = undefined;
      this._queryCacheMinQueryDuration = undefined;
      this._queryCacheMinQueryRuns = undefined;
      this._queryCacheShareBetweenUsers = undefined;
      this._queryCacheTag = undefined;
      this._queryCacheTtl = undefined;
      this._quotaMode = undefined;
      this._readOverflowMode = undefined;
      this._readonly = undefined;
      this._receiveTimeout = undefined;
      this._remoteFilesystemReadMethod = undefined;
      this._replicationAlterPartitionsSync = undefined;
      this._resultOverflowMode = undefined;
      this._s3UseAdaptiveTimeouts = undefined;
      this._selectSequentialConsistency = undefined;
      this._sendProgressInHttpHeaders = undefined;
      this._sendTimeout = undefined;
      this._setOverflowMode = undefined;
      this._skipUnavailableShards = undefined;
      this._sortOverflowMode = undefined;
      this._timeoutBeforeCheckingExecutionSpeed = undefined;
      this._timeoutOverflowMode = undefined;
      this._transferOverflowMode = undefined;
      this._transformNullIn = undefined;
      this._useHedgedRequests = undefined;
      this._useQueryCache = undefined;
      this._useUncompressedCache = undefined;
      this._waitForAsyncInsert = undefined;
      this._waitForAsyncInsertTimeout = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._addHttpCorsHeader = value.addHttpCorsHeader;
      this._allowDdl = value.allowDdl;
      this._allowIntrospectionFunctions = value.allowIntrospectionFunctions;
      this._allowSuspiciousLowCardinalityTypes = value.allowSuspiciousLowCardinalityTypes;
      this._anyJoinDistinctRightTableKeys = value.anyJoinDistinctRightTableKeys;
      this._asyncInsert = value.asyncInsert;
      this._asyncInsertBusyTimeout = value.asyncInsertBusyTimeout;
      this._asyncInsertMaxDataSize = value.asyncInsertMaxDataSize;
      this._asyncInsertStaleTimeout = value.asyncInsertStaleTimeout;
      this._asyncInsertThreads = value.asyncInsertThreads;
      this._asyncInsertUseAdaptiveBusyTimeout = value.asyncInsertUseAdaptiveBusyTimeout;
      this._cancelHttpReadonlyQueriesOnClientClose = value.cancelHttpReadonlyQueriesOnClientClose;
      this._compile = value.compile;
      this._compileExpressions = value.compileExpressions;
      this._connectTimeout = value.connectTimeout;
      this._connectTimeoutWithFailover = value.connectTimeoutWithFailover;
      this._countDistinctImplementation = value.countDistinctImplementation;
      this._dataTypeDefaultNullable = value.dataTypeDefaultNullable;
      this._dateTimeInputFormat = value.dateTimeInputFormat;
      this._dateTimeOutputFormat = value.dateTimeOutputFormat;
      this._deduplicateBlocksInDependentMaterializedViews = value.deduplicateBlocksInDependentMaterializedViews;
      this._distinctOverflowMode = value.distinctOverflowMode;
      this._distributedAggregationMemoryEfficient = value.distributedAggregationMemoryEfficient;
      this._distributedDdlTaskTimeout = value.distributedDdlTaskTimeout;
      this._distributedProductMode = value.distributedProductMode;
      this._doNotMergeAcrossPartitionsSelectFinal = value.doNotMergeAcrossPartitionsSelectFinal;
      this._emptyResultForAggregationByEmptySet = value.emptyResultForAggregationByEmptySet;
      this._enableAnalyzer = value.enableAnalyzer;
      this._enableHttpCompression = value.enableHttpCompression;
      this._enableReadsFromQueryCache = value.enableReadsFromQueryCache;
      this._enableWritesToQueryCache = value.enableWritesToQueryCache;
      this._fallbackToStaleReplicasForDistributedQueries = value.fallbackToStaleReplicasForDistributedQueries;
      this._flattenNested = value.flattenNested;
      this._forceIndexByDate = value.forceIndexByDate;
      this._forcePrimaryKey = value.forcePrimaryKey;
      this._formatAvroSchemaRegistryUrl = value.formatAvroSchemaRegistryUrl;
      this._formatRegexp = value.formatRegexp;
      this._formatRegexpSkipUnmatched = value.formatRegexpSkipUnmatched;
      this._groupByOverflowMode = value.groupByOverflowMode;
      this._groupByTwoLevelThreshold = value.groupByTwoLevelThreshold;
      this._groupByTwoLevelThresholdBytes = value.groupByTwoLevelThresholdBytes;
      this._hedgedConnectionTimeoutMs = value.hedgedConnectionTimeoutMs;
      this._httpConnectionTimeout = value.httpConnectionTimeout;
      this._httpHeadersProgressInterval = value.httpHeadersProgressInterval;
      this._httpMaxFieldNameSize = value.httpMaxFieldNameSize;
      this._httpMaxFieldValueSize = value.httpMaxFieldValueSize;
      this._httpReceiveTimeout = value.httpReceiveTimeout;
      this._httpSendTimeout = value.httpSendTimeout;
      this._idleConnectionTimeout = value.idleConnectionTimeout;
      this._ignoreMaterializedViewsWithDroppedTargetTable = value.ignoreMaterializedViewsWithDroppedTargetTable;
      this._inputFormatDefaultsForOmittedFields = value.inputFormatDefaultsForOmittedFields;
      this._inputFormatImportNestedJson = value.inputFormatImportNestedJson;
      this._inputFormatNullAsDefault = value.inputFormatNullAsDefault;
      this._inputFormatParallelParsing = value.inputFormatParallelParsing;
      this._inputFormatValuesInterpretExpressions = value.inputFormatValuesInterpretExpressions;
      this._inputFormatWithNamesUseHeader = value.inputFormatWithNamesUseHeader;
      this._insertKeeperMaxRetries = value.insertKeeperMaxRetries;
      this._insertNullAsDefault = value.insertNullAsDefault;
      this._insertQuorum = value.insertQuorum;
      this._insertQuorumParallel = value.insertQuorumParallel;
      this._insertQuorumTimeout = value.insertQuorumTimeout;
      this._joinAlgorithm = value.joinAlgorithm;
      this._joinOverflowMode = value.joinOverflowMode;
      this._joinUseNulls = value.joinUseNulls;
      this._joinedSubqueryRequiresAlias = value.joinedSubqueryRequiresAlias;
      this._loadBalancing = value.loadBalancing;
      this._localFilesystemReadMethod = value.localFilesystemReadMethod;
      this._logProcessorsProfiles = value.logProcessorsProfiles;
      this._logQueriesProbability = value.logQueriesProbability;
      this._logQueryThreads = value.logQueryThreads;
      this._logQueryViews = value.logQueryViews;
      this._lowCardinalityAllowInNativeFormat = value.lowCardinalityAllowInNativeFormat;
      this._maxAstDepth = value.maxAstDepth;
      this._maxAstElements = value.maxAstElements;
      this._maxBlockSize = value.maxBlockSize;
      this._maxBytesBeforeExternalGroupBy = value.maxBytesBeforeExternalGroupBy;
      this._maxBytesBeforeExternalSort = value.maxBytesBeforeExternalSort;
      this._maxBytesInDistinct = value.maxBytesInDistinct;
      this._maxBytesInJoin = value.maxBytesInJoin;
      this._maxBytesInSet = value.maxBytesInSet;
      this._maxBytesToRead = value.maxBytesToRead;
      this._maxBytesToSort = value.maxBytesToSort;
      this._maxBytesToTransfer = value.maxBytesToTransfer;
      this._maxColumnsToRead = value.maxColumnsToRead;
      this._maxConcurrentQueriesForUser = value.maxConcurrentQueriesForUser;
      this._maxExecutionTime = value.maxExecutionTime;
      this._maxExpandedAstElements = value.maxExpandedAstElements;
      this._maxFinalThreads = value.maxFinalThreads;
      this._maxHttpGetRedirects = value.maxHttpGetRedirects;
      this._maxInsertBlockSize = value.maxInsertBlockSize;
      this._maxInsertThreads = value.maxInsertThreads;
      this._maxMemoryUsage = value.maxMemoryUsage;
      this._maxMemoryUsageForUser = value.maxMemoryUsageForUser;
      this._maxNetworkBandwidth = value.maxNetworkBandwidth;
      this._maxNetworkBandwidthForUser = value.maxNetworkBandwidthForUser;
      this._maxParserDepth = value.maxParserDepth;
      this._maxQuerySize = value.maxQuerySize;
      this._maxReadBufferSize = value.maxReadBufferSize;
      this._maxReplicaDelayForDistributedQueries = value.maxReplicaDelayForDistributedQueries;
      this._maxResultBytes = value.maxResultBytes;
      this._maxResultRows = value.maxResultRows;
      this._maxRowsInDistinct = value.maxRowsInDistinct;
      this._maxRowsInJoin = value.maxRowsInJoin;
      this._maxRowsInSet = value.maxRowsInSet;
      this._maxRowsToGroupBy = value.maxRowsToGroupBy;
      this._maxRowsToRead = value.maxRowsToRead;
      this._maxRowsToSort = value.maxRowsToSort;
      this._maxRowsToTransfer = value.maxRowsToTransfer;
      this._maxTemporaryColumns = value.maxTemporaryColumns;
      this._maxTemporaryDataOnDiskSizeForQuery = value.maxTemporaryDataOnDiskSizeForQuery;
      this._maxTemporaryDataOnDiskSizeForUser = value.maxTemporaryDataOnDiskSizeForUser;
      this._maxTemporaryNonConstColumns = value.maxTemporaryNonConstColumns;
      this._maxThreads = value.maxThreads;
      this._memoryOvercommitRatioDenominator = value.memoryOvercommitRatioDenominator;
      this._memoryOvercommitRatioDenominatorForUser = value.memoryOvercommitRatioDenominatorForUser;
      this._memoryProfilerSampleProbability = value.memoryProfilerSampleProbability;
      this._memoryProfilerStep = value.memoryProfilerStep;
      this._memoryUsageOvercommitMaxWaitMicroseconds = value.memoryUsageOvercommitMaxWaitMicroseconds;
      this._mergeTreeMaxBytesToUseCache = value.mergeTreeMaxBytesToUseCache;
      this._mergeTreeMaxRowsToUseCache = value.mergeTreeMaxRowsToUseCache;
      this._mergeTreeMinBytesForConcurrentRead = value.mergeTreeMinBytesForConcurrentRead;
      this._mergeTreeMinRowsForConcurrentRead = value.mergeTreeMinRowsForConcurrentRead;
      this._minBytesToUseDirectIo = value.minBytesToUseDirectIo;
      this._minCountToCompile = value.minCountToCompile;
      this._minCountToCompileExpression = value.minCountToCompileExpression;
      this._minExecutionSpeed = value.minExecutionSpeed;
      this._minExecutionSpeedBytes = value.minExecutionSpeedBytes;
      this._minInsertBlockSizeBytes = value.minInsertBlockSizeBytes;
      this._minInsertBlockSizeRows = value.minInsertBlockSizeRows;
      this._outputFormatJsonQuote64BitIntegers = value.outputFormatJsonQuote64BitIntegers;
      this._outputFormatJsonQuoteDenormals = value.outputFormatJsonQuoteDenormals;
      this._preferLocalhostReplica = value.preferLocalhostReplica;
      this._priority = value.priority;
      this._queryCacheMaxEntries = value.queryCacheMaxEntries;
      this._queryCacheMaxSizeInBytes = value.queryCacheMaxSizeInBytes;
      this._queryCacheMinQueryDuration = value.queryCacheMinQueryDuration;
      this._queryCacheMinQueryRuns = value.queryCacheMinQueryRuns;
      this._queryCacheShareBetweenUsers = value.queryCacheShareBetweenUsers;
      this._queryCacheTag = value.queryCacheTag;
      this._queryCacheTtl = value.queryCacheTtl;
      this._quotaMode = value.quotaMode;
      this._readOverflowMode = value.readOverflowMode;
      this._readonly = value.readonly;
      this._receiveTimeout = value.receiveTimeout;
      this._remoteFilesystemReadMethod = value.remoteFilesystemReadMethod;
      this._replicationAlterPartitionsSync = value.replicationAlterPartitionsSync;
      this._resultOverflowMode = value.resultOverflowMode;
      this._s3UseAdaptiveTimeouts = value.s3UseAdaptiveTimeouts;
      this._selectSequentialConsistency = value.selectSequentialConsistency;
      this._sendProgressInHttpHeaders = value.sendProgressInHttpHeaders;
      this._sendTimeout = value.sendTimeout;
      this._setOverflowMode = value.setOverflowMode;
      this._skipUnavailableShards = value.skipUnavailableShards;
      this._sortOverflowMode = value.sortOverflowMode;
      this._timeoutBeforeCheckingExecutionSpeed = value.timeoutBeforeCheckingExecutionSpeed;
      this._timeoutOverflowMode = value.timeoutOverflowMode;
      this._transferOverflowMode = value.transferOverflowMode;
      this._transformNullIn = value.transformNullIn;
      this._useHedgedRequests = value.useHedgedRequests;
      this._useQueryCache = value.useQueryCache;
      this._useUncompressedCache = value.useUncompressedCache;
      this._waitForAsyncInsert = value.waitForAsyncInsert;
      this._waitForAsyncInsertTimeout = value.waitForAsyncInsertTimeout;
    }
  }

  // add_http_cors_header - computed: true, optional: true, required: false
  private _addHttpCorsHeader?: boolean | cdktf.IResolvable; 
  public get addHttpCorsHeader() {
    return this.getBooleanAttribute('add_http_cors_header');
  }
  public set addHttpCorsHeader(value: boolean | cdktf.IResolvable) {
    this._addHttpCorsHeader = value;
  }
  public resetAddHttpCorsHeader() {
    this._addHttpCorsHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addHttpCorsHeaderInput() {
    return this._addHttpCorsHeader;
  }

  // allow_ddl - computed: true, optional: true, required: false
  private _allowDdl?: boolean | cdktf.IResolvable; 
  public get allowDdl() {
    return this.getBooleanAttribute('allow_ddl');
  }
  public set allowDdl(value: boolean | cdktf.IResolvable) {
    this._allowDdl = value;
  }
  public resetAllowDdl() {
    this._allowDdl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowDdlInput() {
    return this._allowDdl;
  }

  // allow_introspection_functions - computed: true, optional: true, required: false
  private _allowIntrospectionFunctions?: boolean | cdktf.IResolvable; 
  public get allowIntrospectionFunctions() {
    return this.getBooleanAttribute('allow_introspection_functions');
  }
  public set allowIntrospectionFunctions(value: boolean | cdktf.IResolvable) {
    this._allowIntrospectionFunctions = value;
  }
  public resetAllowIntrospectionFunctions() {
    this._allowIntrospectionFunctions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowIntrospectionFunctionsInput() {
    return this._allowIntrospectionFunctions;
  }

  // allow_suspicious_low_cardinality_types - computed: true, optional: true, required: false
  private _allowSuspiciousLowCardinalityTypes?: boolean | cdktf.IResolvable; 
  public get allowSuspiciousLowCardinalityTypes() {
    return this.getBooleanAttribute('allow_suspicious_low_cardinality_types');
  }
  public set allowSuspiciousLowCardinalityTypes(value: boolean | cdktf.IResolvable) {
    this._allowSuspiciousLowCardinalityTypes = value;
  }
  public resetAllowSuspiciousLowCardinalityTypes() {
    this._allowSuspiciousLowCardinalityTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowSuspiciousLowCardinalityTypesInput() {
    return this._allowSuspiciousLowCardinalityTypes;
  }

  // any_join_distinct_right_table_keys - computed: true, optional: true, required: false
  private _anyJoinDistinctRightTableKeys?: boolean | cdktf.IResolvable; 
  public get anyJoinDistinctRightTableKeys() {
    return this.getBooleanAttribute('any_join_distinct_right_table_keys');
  }
  public set anyJoinDistinctRightTableKeys(value: boolean | cdktf.IResolvable) {
    this._anyJoinDistinctRightTableKeys = value;
  }
  public resetAnyJoinDistinctRightTableKeys() {
    this._anyJoinDistinctRightTableKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyJoinDistinctRightTableKeysInput() {
    return this._anyJoinDistinctRightTableKeys;
  }

  // async_insert - computed: true, optional: true, required: false
  private _asyncInsert?: boolean | cdktf.IResolvable; 
  public get asyncInsert() {
    return this.getBooleanAttribute('async_insert');
  }
  public set asyncInsert(value: boolean | cdktf.IResolvable) {
    this._asyncInsert = value;
  }
  public resetAsyncInsert() {
    this._asyncInsert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asyncInsertInput() {
    return this._asyncInsert;
  }

  // async_insert_busy_timeout - computed: true, optional: true, required: false
  private _asyncInsertBusyTimeout?: number; 
  public get asyncInsertBusyTimeout() {
    return this.getNumberAttribute('async_insert_busy_timeout');
  }
  public set asyncInsertBusyTimeout(value: number) {
    this._asyncInsertBusyTimeout = value;
  }
  public resetAsyncInsertBusyTimeout() {
    this._asyncInsertBusyTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asyncInsertBusyTimeoutInput() {
    return this._asyncInsertBusyTimeout;
  }

  // async_insert_max_data_size - computed: true, optional: true, required: false
  private _asyncInsertMaxDataSize?: number; 
  public get asyncInsertMaxDataSize() {
    return this.getNumberAttribute('async_insert_max_data_size');
  }
  public set asyncInsertMaxDataSize(value: number) {
    this._asyncInsertMaxDataSize = value;
  }
  public resetAsyncInsertMaxDataSize() {
    this._asyncInsertMaxDataSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asyncInsertMaxDataSizeInput() {
    return this._asyncInsertMaxDataSize;
  }

  // async_insert_stale_timeout - computed: true, optional: true, required: false
  private _asyncInsertStaleTimeout?: number; 
  public get asyncInsertStaleTimeout() {
    return this.getNumberAttribute('async_insert_stale_timeout');
  }
  public set asyncInsertStaleTimeout(value: number) {
    this._asyncInsertStaleTimeout = value;
  }
  public resetAsyncInsertStaleTimeout() {
    this._asyncInsertStaleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asyncInsertStaleTimeoutInput() {
    return this._asyncInsertStaleTimeout;
  }

  // async_insert_threads - computed: true, optional: true, required: false
  private _asyncInsertThreads?: number; 
  public get asyncInsertThreads() {
    return this.getNumberAttribute('async_insert_threads');
  }
  public set asyncInsertThreads(value: number) {
    this._asyncInsertThreads = value;
  }
  public resetAsyncInsertThreads() {
    this._asyncInsertThreads = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asyncInsertThreadsInput() {
    return this._asyncInsertThreads;
  }

  // async_insert_use_adaptive_busy_timeout - computed: true, optional: true, required: false
  private _asyncInsertUseAdaptiveBusyTimeout?: boolean | cdktf.IResolvable; 
  public get asyncInsertUseAdaptiveBusyTimeout() {
    return this.getBooleanAttribute('async_insert_use_adaptive_busy_timeout');
  }
  public set asyncInsertUseAdaptiveBusyTimeout(value: boolean | cdktf.IResolvable) {
    this._asyncInsertUseAdaptiveBusyTimeout = value;
  }
  public resetAsyncInsertUseAdaptiveBusyTimeout() {
    this._asyncInsertUseAdaptiveBusyTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asyncInsertUseAdaptiveBusyTimeoutInput() {
    return this._asyncInsertUseAdaptiveBusyTimeout;
  }

  // cancel_http_readonly_queries_on_client_close - computed: true, optional: true, required: false
  private _cancelHttpReadonlyQueriesOnClientClose?: boolean | cdktf.IResolvable; 
  public get cancelHttpReadonlyQueriesOnClientClose() {
    return this.getBooleanAttribute('cancel_http_readonly_queries_on_client_close');
  }
  public set cancelHttpReadonlyQueriesOnClientClose(value: boolean | cdktf.IResolvable) {
    this._cancelHttpReadonlyQueriesOnClientClose = value;
  }
  public resetCancelHttpReadonlyQueriesOnClientClose() {
    this._cancelHttpReadonlyQueriesOnClientClose = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cancelHttpReadonlyQueriesOnClientCloseInput() {
    return this._cancelHttpReadonlyQueriesOnClientClose;
  }

  // compile - computed: true, optional: true, required: false
  private _compile?: boolean | cdktf.IResolvable; 
  public get compile() {
    return this.getBooleanAttribute('compile');
  }
  public set compile(value: boolean | cdktf.IResolvable) {
    this._compile = value;
  }
  public resetCompile() {
    this._compile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compileInput() {
    return this._compile;
  }

  // compile_expressions - computed: true, optional: true, required: false
  private _compileExpressions?: boolean | cdktf.IResolvable; 
  public get compileExpressions() {
    return this.getBooleanAttribute('compile_expressions');
  }
  public set compileExpressions(value: boolean | cdktf.IResolvable) {
    this._compileExpressions = value;
  }
  public resetCompileExpressions() {
    this._compileExpressions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compileExpressionsInput() {
    return this._compileExpressions;
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

  // connect_timeout_with_failover - computed: true, optional: true, required: false
  private _connectTimeoutWithFailover?: number; 
  public get connectTimeoutWithFailover() {
    return this.getNumberAttribute('connect_timeout_with_failover');
  }
  public set connectTimeoutWithFailover(value: number) {
    this._connectTimeoutWithFailover = value;
  }
  public resetConnectTimeoutWithFailover() {
    this._connectTimeoutWithFailover = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectTimeoutWithFailoverInput() {
    return this._connectTimeoutWithFailover;
  }

  // count_distinct_implementation - computed: true, optional: true, required: false
  private _countDistinctImplementation?: string; 
  public get countDistinctImplementation() {
    return this.getStringAttribute('count_distinct_implementation');
  }
  public set countDistinctImplementation(value: string) {
    this._countDistinctImplementation = value;
  }
  public resetCountDistinctImplementation() {
    this._countDistinctImplementation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countDistinctImplementationInput() {
    return this._countDistinctImplementation;
  }

  // data_type_default_nullable - computed: true, optional: true, required: false
  private _dataTypeDefaultNullable?: boolean | cdktf.IResolvable; 
  public get dataTypeDefaultNullable() {
    return this.getBooleanAttribute('data_type_default_nullable');
  }
  public set dataTypeDefaultNullable(value: boolean | cdktf.IResolvable) {
    this._dataTypeDefaultNullable = value;
  }
  public resetDataTypeDefaultNullable() {
    this._dataTypeDefaultNullable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataTypeDefaultNullableInput() {
    return this._dataTypeDefaultNullable;
  }

  // date_time_input_format - computed: true, optional: true, required: false
  private _dateTimeInputFormat?: string; 
  public get dateTimeInputFormat() {
    return this.getStringAttribute('date_time_input_format');
  }
  public set dateTimeInputFormat(value: string) {
    this._dateTimeInputFormat = value;
  }
  public resetDateTimeInputFormat() {
    this._dateTimeInputFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateTimeInputFormatInput() {
    return this._dateTimeInputFormat;
  }

  // date_time_output_format - computed: true, optional: true, required: false
  private _dateTimeOutputFormat?: string; 
  public get dateTimeOutputFormat() {
    return this.getStringAttribute('date_time_output_format');
  }
  public set dateTimeOutputFormat(value: string) {
    this._dateTimeOutputFormat = value;
  }
  public resetDateTimeOutputFormat() {
    this._dateTimeOutputFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateTimeOutputFormatInput() {
    return this._dateTimeOutputFormat;
  }

  // deduplicate_blocks_in_dependent_materialized_views - computed: true, optional: true, required: false
  private _deduplicateBlocksInDependentMaterializedViews?: boolean | cdktf.IResolvable; 
  public get deduplicateBlocksInDependentMaterializedViews() {
    return this.getBooleanAttribute('deduplicate_blocks_in_dependent_materialized_views');
  }
  public set deduplicateBlocksInDependentMaterializedViews(value: boolean | cdktf.IResolvable) {
    this._deduplicateBlocksInDependentMaterializedViews = value;
  }
  public resetDeduplicateBlocksInDependentMaterializedViews() {
    this._deduplicateBlocksInDependentMaterializedViews = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deduplicateBlocksInDependentMaterializedViewsInput() {
    return this._deduplicateBlocksInDependentMaterializedViews;
  }

  // distinct_overflow_mode - computed: true, optional: true, required: false
  private _distinctOverflowMode?: string; 
  public get distinctOverflowMode() {
    return this.getStringAttribute('distinct_overflow_mode');
  }
  public set distinctOverflowMode(value: string) {
    this._distinctOverflowMode = value;
  }
  public resetDistinctOverflowMode() {
    this._distinctOverflowMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distinctOverflowModeInput() {
    return this._distinctOverflowMode;
  }

  // distributed_aggregation_memory_efficient - computed: true, optional: true, required: false
  private _distributedAggregationMemoryEfficient?: boolean | cdktf.IResolvable; 
  public get distributedAggregationMemoryEfficient() {
    return this.getBooleanAttribute('distributed_aggregation_memory_efficient');
  }
  public set distributedAggregationMemoryEfficient(value: boolean | cdktf.IResolvable) {
    this._distributedAggregationMemoryEfficient = value;
  }
  public resetDistributedAggregationMemoryEfficient() {
    this._distributedAggregationMemoryEfficient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distributedAggregationMemoryEfficientInput() {
    return this._distributedAggregationMemoryEfficient;
  }

  // distributed_ddl_task_timeout - computed: true, optional: true, required: false
  private _distributedDdlTaskTimeout?: number; 
  public get distributedDdlTaskTimeout() {
    return this.getNumberAttribute('distributed_ddl_task_timeout');
  }
  public set distributedDdlTaskTimeout(value: number) {
    this._distributedDdlTaskTimeout = value;
  }
  public resetDistributedDdlTaskTimeout() {
    this._distributedDdlTaskTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distributedDdlTaskTimeoutInput() {
    return this._distributedDdlTaskTimeout;
  }

  // distributed_product_mode - computed: true, optional: true, required: false
  private _distributedProductMode?: string; 
  public get distributedProductMode() {
    return this.getStringAttribute('distributed_product_mode');
  }
  public set distributedProductMode(value: string) {
    this._distributedProductMode = value;
  }
  public resetDistributedProductMode() {
    this._distributedProductMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distributedProductModeInput() {
    return this._distributedProductMode;
  }

  // do_not_merge_across_partitions_select_final - computed: true, optional: true, required: false
  private _doNotMergeAcrossPartitionsSelectFinal?: boolean | cdktf.IResolvable; 
  public get doNotMergeAcrossPartitionsSelectFinal() {
    return this.getBooleanAttribute('do_not_merge_across_partitions_select_final');
  }
  public set doNotMergeAcrossPartitionsSelectFinal(value: boolean | cdktf.IResolvable) {
    this._doNotMergeAcrossPartitionsSelectFinal = value;
  }
  public resetDoNotMergeAcrossPartitionsSelectFinal() {
    this._doNotMergeAcrossPartitionsSelectFinal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doNotMergeAcrossPartitionsSelectFinalInput() {
    return this._doNotMergeAcrossPartitionsSelectFinal;
  }

  // empty_result_for_aggregation_by_empty_set - computed: true, optional: true, required: false
  private _emptyResultForAggregationByEmptySet?: boolean | cdktf.IResolvable; 
  public get emptyResultForAggregationByEmptySet() {
    return this.getBooleanAttribute('empty_result_for_aggregation_by_empty_set');
  }
  public set emptyResultForAggregationByEmptySet(value: boolean | cdktf.IResolvable) {
    this._emptyResultForAggregationByEmptySet = value;
  }
  public resetEmptyResultForAggregationByEmptySet() {
    this._emptyResultForAggregationByEmptySet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emptyResultForAggregationByEmptySetInput() {
    return this._emptyResultForAggregationByEmptySet;
  }

  // enable_analyzer - computed: true, optional: true, required: false
  private _enableAnalyzer?: boolean | cdktf.IResolvable; 
  public get enableAnalyzer() {
    return this.getBooleanAttribute('enable_analyzer');
  }
  public set enableAnalyzer(value: boolean | cdktf.IResolvable) {
    this._enableAnalyzer = value;
  }
  public resetEnableAnalyzer() {
    this._enableAnalyzer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAnalyzerInput() {
    return this._enableAnalyzer;
  }

  // enable_http_compression - computed: true, optional: true, required: false
  private _enableHttpCompression?: boolean | cdktf.IResolvable; 
  public get enableHttpCompression() {
    return this.getBooleanAttribute('enable_http_compression');
  }
  public set enableHttpCompression(value: boolean | cdktf.IResolvable) {
    this._enableHttpCompression = value;
  }
  public resetEnableHttpCompression() {
    this._enableHttpCompression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableHttpCompressionInput() {
    return this._enableHttpCompression;
  }

  // enable_reads_from_query_cache - computed: true, optional: true, required: false
  private _enableReadsFromQueryCache?: boolean | cdktf.IResolvable; 
  public get enableReadsFromQueryCache() {
    return this.getBooleanAttribute('enable_reads_from_query_cache');
  }
  public set enableReadsFromQueryCache(value: boolean | cdktf.IResolvable) {
    this._enableReadsFromQueryCache = value;
  }
  public resetEnableReadsFromQueryCache() {
    this._enableReadsFromQueryCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableReadsFromQueryCacheInput() {
    return this._enableReadsFromQueryCache;
  }

  // enable_writes_to_query_cache - computed: true, optional: true, required: false
  private _enableWritesToQueryCache?: boolean | cdktf.IResolvable; 
  public get enableWritesToQueryCache() {
    return this.getBooleanAttribute('enable_writes_to_query_cache');
  }
  public set enableWritesToQueryCache(value: boolean | cdktf.IResolvable) {
    this._enableWritesToQueryCache = value;
  }
  public resetEnableWritesToQueryCache() {
    this._enableWritesToQueryCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableWritesToQueryCacheInput() {
    return this._enableWritesToQueryCache;
  }

  // fallback_to_stale_replicas_for_distributed_queries - computed: true, optional: true, required: false
  private _fallbackToStaleReplicasForDistributedQueries?: boolean | cdktf.IResolvable; 
  public get fallbackToStaleReplicasForDistributedQueries() {
    return this.getBooleanAttribute('fallback_to_stale_replicas_for_distributed_queries');
  }
  public set fallbackToStaleReplicasForDistributedQueries(value: boolean | cdktf.IResolvable) {
    this._fallbackToStaleReplicasForDistributedQueries = value;
  }
  public resetFallbackToStaleReplicasForDistributedQueries() {
    this._fallbackToStaleReplicasForDistributedQueries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackToStaleReplicasForDistributedQueriesInput() {
    return this._fallbackToStaleReplicasForDistributedQueries;
  }

  // flatten_nested - computed: true, optional: true, required: false
  private _flattenNested?: boolean | cdktf.IResolvable; 
  public get flattenNested() {
    return this.getBooleanAttribute('flatten_nested');
  }
  public set flattenNested(value: boolean | cdktf.IResolvable) {
    this._flattenNested = value;
  }
  public resetFlattenNested() {
    this._flattenNested = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flattenNestedInput() {
    return this._flattenNested;
  }

  // force_index_by_date - computed: true, optional: true, required: false
  private _forceIndexByDate?: boolean | cdktf.IResolvable; 
  public get forceIndexByDate() {
    return this.getBooleanAttribute('force_index_by_date');
  }
  public set forceIndexByDate(value: boolean | cdktf.IResolvable) {
    this._forceIndexByDate = value;
  }
  public resetForceIndexByDate() {
    this._forceIndexByDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceIndexByDateInput() {
    return this._forceIndexByDate;
  }

  // force_primary_key - computed: true, optional: true, required: false
  private _forcePrimaryKey?: boolean | cdktf.IResolvable; 
  public get forcePrimaryKey() {
    return this.getBooleanAttribute('force_primary_key');
  }
  public set forcePrimaryKey(value: boolean | cdktf.IResolvable) {
    this._forcePrimaryKey = value;
  }
  public resetForcePrimaryKey() {
    this._forcePrimaryKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forcePrimaryKeyInput() {
    return this._forcePrimaryKey;
  }

  // format_avro_schema_registry_url - computed: true, optional: true, required: false
  private _formatAvroSchemaRegistryUrl?: string; 
  public get formatAvroSchemaRegistryUrl() {
    return this.getStringAttribute('format_avro_schema_registry_url');
  }
  public set formatAvroSchemaRegistryUrl(value: string) {
    this._formatAvroSchemaRegistryUrl = value;
  }
  public resetFormatAvroSchemaRegistryUrl() {
    this._formatAvroSchemaRegistryUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatAvroSchemaRegistryUrlInput() {
    return this._formatAvroSchemaRegistryUrl;
  }

  // format_regexp - computed: true, optional: true, required: false
  private _formatRegexp?: string; 
  public get formatRegexp() {
    return this.getStringAttribute('format_regexp');
  }
  public set formatRegexp(value: string) {
    this._formatRegexp = value;
  }
  public resetFormatRegexp() {
    this._formatRegexp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatRegexpInput() {
    return this._formatRegexp;
  }

  // format_regexp_skip_unmatched - computed: true, optional: true, required: false
  private _formatRegexpSkipUnmatched?: boolean | cdktf.IResolvable; 
  public get formatRegexpSkipUnmatched() {
    return this.getBooleanAttribute('format_regexp_skip_unmatched');
  }
  public set formatRegexpSkipUnmatched(value: boolean | cdktf.IResolvable) {
    this._formatRegexpSkipUnmatched = value;
  }
  public resetFormatRegexpSkipUnmatched() {
    this._formatRegexpSkipUnmatched = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatRegexpSkipUnmatchedInput() {
    return this._formatRegexpSkipUnmatched;
  }

  // group_by_overflow_mode - computed: true, optional: true, required: false
  private _groupByOverflowMode?: string; 
  public get groupByOverflowMode() {
    return this.getStringAttribute('group_by_overflow_mode');
  }
  public set groupByOverflowMode(value: string) {
    this._groupByOverflowMode = value;
  }
  public resetGroupByOverflowMode() {
    this._groupByOverflowMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByOverflowModeInput() {
    return this._groupByOverflowMode;
  }

  // group_by_two_level_threshold - computed: true, optional: true, required: false
  private _groupByTwoLevelThreshold?: number; 
  public get groupByTwoLevelThreshold() {
    return this.getNumberAttribute('group_by_two_level_threshold');
  }
  public set groupByTwoLevelThreshold(value: number) {
    this._groupByTwoLevelThreshold = value;
  }
  public resetGroupByTwoLevelThreshold() {
    this._groupByTwoLevelThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByTwoLevelThresholdInput() {
    return this._groupByTwoLevelThreshold;
  }

  // group_by_two_level_threshold_bytes - computed: true, optional: true, required: false
  private _groupByTwoLevelThresholdBytes?: number; 
  public get groupByTwoLevelThresholdBytes() {
    return this.getNumberAttribute('group_by_two_level_threshold_bytes');
  }
  public set groupByTwoLevelThresholdBytes(value: number) {
    this._groupByTwoLevelThresholdBytes = value;
  }
  public resetGroupByTwoLevelThresholdBytes() {
    this._groupByTwoLevelThresholdBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByTwoLevelThresholdBytesInput() {
    return this._groupByTwoLevelThresholdBytes;
  }

  // hedged_connection_timeout_ms - computed: true, optional: true, required: false
  private _hedgedConnectionTimeoutMs?: number; 
  public get hedgedConnectionTimeoutMs() {
    return this.getNumberAttribute('hedged_connection_timeout_ms');
  }
  public set hedgedConnectionTimeoutMs(value: number) {
    this._hedgedConnectionTimeoutMs = value;
  }
  public resetHedgedConnectionTimeoutMs() {
    this._hedgedConnectionTimeoutMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hedgedConnectionTimeoutMsInput() {
    return this._hedgedConnectionTimeoutMs;
  }

  // http_connection_timeout - computed: true, optional: true, required: false
  private _httpConnectionTimeout?: number; 
  public get httpConnectionTimeout() {
    return this.getNumberAttribute('http_connection_timeout');
  }
  public set httpConnectionTimeout(value: number) {
    this._httpConnectionTimeout = value;
  }
  public resetHttpConnectionTimeout() {
    this._httpConnectionTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpConnectionTimeoutInput() {
    return this._httpConnectionTimeout;
  }

  // http_headers_progress_interval - computed: true, optional: true, required: false
  private _httpHeadersProgressInterval?: number; 
  public get httpHeadersProgressInterval() {
    return this.getNumberAttribute('http_headers_progress_interval');
  }
  public set httpHeadersProgressInterval(value: number) {
    this._httpHeadersProgressInterval = value;
  }
  public resetHttpHeadersProgressInterval() {
    this._httpHeadersProgressInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHeadersProgressIntervalInput() {
    return this._httpHeadersProgressInterval;
  }

  // http_max_field_name_size - computed: true, optional: true, required: false
  private _httpMaxFieldNameSize?: number; 
  public get httpMaxFieldNameSize() {
    return this.getNumberAttribute('http_max_field_name_size');
  }
  public set httpMaxFieldNameSize(value: number) {
    this._httpMaxFieldNameSize = value;
  }
  public resetHttpMaxFieldNameSize() {
    this._httpMaxFieldNameSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpMaxFieldNameSizeInput() {
    return this._httpMaxFieldNameSize;
  }

  // http_max_field_value_size - computed: true, optional: true, required: false
  private _httpMaxFieldValueSize?: number; 
  public get httpMaxFieldValueSize() {
    return this.getNumberAttribute('http_max_field_value_size');
  }
  public set httpMaxFieldValueSize(value: number) {
    this._httpMaxFieldValueSize = value;
  }
  public resetHttpMaxFieldValueSize() {
    this._httpMaxFieldValueSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpMaxFieldValueSizeInput() {
    return this._httpMaxFieldValueSize;
  }

  // http_receive_timeout - computed: true, optional: true, required: false
  private _httpReceiveTimeout?: number; 
  public get httpReceiveTimeout() {
    return this.getNumberAttribute('http_receive_timeout');
  }
  public set httpReceiveTimeout(value: number) {
    this._httpReceiveTimeout = value;
  }
  public resetHttpReceiveTimeout() {
    this._httpReceiveTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpReceiveTimeoutInput() {
    return this._httpReceiveTimeout;
  }

  // http_send_timeout - computed: true, optional: true, required: false
  private _httpSendTimeout?: number; 
  public get httpSendTimeout() {
    return this.getNumberAttribute('http_send_timeout');
  }
  public set httpSendTimeout(value: number) {
    this._httpSendTimeout = value;
  }
  public resetHttpSendTimeout() {
    this._httpSendTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpSendTimeoutInput() {
    return this._httpSendTimeout;
  }

  // idle_connection_timeout - computed: true, optional: true, required: false
  private _idleConnectionTimeout?: number; 
  public get idleConnectionTimeout() {
    return this.getNumberAttribute('idle_connection_timeout');
  }
  public set idleConnectionTimeout(value: number) {
    this._idleConnectionTimeout = value;
  }
  public resetIdleConnectionTimeout() {
    this._idleConnectionTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleConnectionTimeoutInput() {
    return this._idleConnectionTimeout;
  }

  // ignore_materialized_views_with_dropped_target_table - computed: true, optional: true, required: false
  private _ignoreMaterializedViewsWithDroppedTargetTable?: boolean | cdktf.IResolvable; 
  public get ignoreMaterializedViewsWithDroppedTargetTable() {
    return this.getBooleanAttribute('ignore_materialized_views_with_dropped_target_table');
  }
  public set ignoreMaterializedViewsWithDroppedTargetTable(value: boolean | cdktf.IResolvable) {
    this._ignoreMaterializedViewsWithDroppedTargetTable = value;
  }
  public resetIgnoreMaterializedViewsWithDroppedTargetTable() {
    this._ignoreMaterializedViewsWithDroppedTargetTable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreMaterializedViewsWithDroppedTargetTableInput() {
    return this._ignoreMaterializedViewsWithDroppedTargetTable;
  }

  // input_format_defaults_for_omitted_fields - computed: true, optional: true, required: false
  private _inputFormatDefaultsForOmittedFields?: boolean | cdktf.IResolvable; 
  public get inputFormatDefaultsForOmittedFields() {
    return this.getBooleanAttribute('input_format_defaults_for_omitted_fields');
  }
  public set inputFormatDefaultsForOmittedFields(value: boolean | cdktf.IResolvable) {
    this._inputFormatDefaultsForOmittedFields = value;
  }
  public resetInputFormatDefaultsForOmittedFields() {
    this._inputFormatDefaultsForOmittedFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputFormatDefaultsForOmittedFieldsInput() {
    return this._inputFormatDefaultsForOmittedFields;
  }

  // input_format_import_nested_json - computed: true, optional: true, required: false
  private _inputFormatImportNestedJson?: boolean | cdktf.IResolvable; 
  public get inputFormatImportNestedJson() {
    return this.getBooleanAttribute('input_format_import_nested_json');
  }
  public set inputFormatImportNestedJson(value: boolean | cdktf.IResolvable) {
    this._inputFormatImportNestedJson = value;
  }
  public resetInputFormatImportNestedJson() {
    this._inputFormatImportNestedJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputFormatImportNestedJsonInput() {
    return this._inputFormatImportNestedJson;
  }

  // input_format_null_as_default - computed: true, optional: true, required: false
  private _inputFormatNullAsDefault?: boolean | cdktf.IResolvable; 
  public get inputFormatNullAsDefault() {
    return this.getBooleanAttribute('input_format_null_as_default');
  }
  public set inputFormatNullAsDefault(value: boolean | cdktf.IResolvable) {
    this._inputFormatNullAsDefault = value;
  }
  public resetInputFormatNullAsDefault() {
    this._inputFormatNullAsDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputFormatNullAsDefaultInput() {
    return this._inputFormatNullAsDefault;
  }

  // input_format_parallel_parsing - computed: true, optional: true, required: false
  private _inputFormatParallelParsing?: boolean | cdktf.IResolvable; 
  public get inputFormatParallelParsing() {
    return this.getBooleanAttribute('input_format_parallel_parsing');
  }
  public set inputFormatParallelParsing(value: boolean | cdktf.IResolvable) {
    this._inputFormatParallelParsing = value;
  }
  public resetInputFormatParallelParsing() {
    this._inputFormatParallelParsing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputFormatParallelParsingInput() {
    return this._inputFormatParallelParsing;
  }

  // input_format_values_interpret_expressions - computed: true, optional: true, required: false
  private _inputFormatValuesInterpretExpressions?: boolean | cdktf.IResolvable; 
  public get inputFormatValuesInterpretExpressions() {
    return this.getBooleanAttribute('input_format_values_interpret_expressions');
  }
  public set inputFormatValuesInterpretExpressions(value: boolean | cdktf.IResolvable) {
    this._inputFormatValuesInterpretExpressions = value;
  }
  public resetInputFormatValuesInterpretExpressions() {
    this._inputFormatValuesInterpretExpressions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputFormatValuesInterpretExpressionsInput() {
    return this._inputFormatValuesInterpretExpressions;
  }

  // input_format_with_names_use_header - computed: true, optional: true, required: false
  private _inputFormatWithNamesUseHeader?: boolean | cdktf.IResolvable; 
  public get inputFormatWithNamesUseHeader() {
    return this.getBooleanAttribute('input_format_with_names_use_header');
  }
  public set inputFormatWithNamesUseHeader(value: boolean | cdktf.IResolvable) {
    this._inputFormatWithNamesUseHeader = value;
  }
  public resetInputFormatWithNamesUseHeader() {
    this._inputFormatWithNamesUseHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputFormatWithNamesUseHeaderInput() {
    return this._inputFormatWithNamesUseHeader;
  }

  // insert_keeper_max_retries - computed: true, optional: true, required: false
  private _insertKeeperMaxRetries?: number; 
  public get insertKeeperMaxRetries() {
    return this.getNumberAttribute('insert_keeper_max_retries');
  }
  public set insertKeeperMaxRetries(value: number) {
    this._insertKeeperMaxRetries = value;
  }
  public resetInsertKeeperMaxRetries() {
    this._insertKeeperMaxRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertKeeperMaxRetriesInput() {
    return this._insertKeeperMaxRetries;
  }

  // insert_null_as_default - computed: true, optional: true, required: false
  private _insertNullAsDefault?: boolean | cdktf.IResolvable; 
  public get insertNullAsDefault() {
    return this.getBooleanAttribute('insert_null_as_default');
  }
  public set insertNullAsDefault(value: boolean | cdktf.IResolvable) {
    this._insertNullAsDefault = value;
  }
  public resetInsertNullAsDefault() {
    this._insertNullAsDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertNullAsDefaultInput() {
    return this._insertNullAsDefault;
  }

  // insert_quorum - computed: true, optional: true, required: false
  private _insertQuorum?: number; 
  public get insertQuorum() {
    return this.getNumberAttribute('insert_quorum');
  }
  public set insertQuorum(value: number) {
    this._insertQuorum = value;
  }
  public resetInsertQuorum() {
    this._insertQuorum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertQuorumInput() {
    return this._insertQuorum;
  }

  // insert_quorum_parallel - computed: true, optional: true, required: false
  private _insertQuorumParallel?: boolean | cdktf.IResolvable; 
  public get insertQuorumParallel() {
    return this.getBooleanAttribute('insert_quorum_parallel');
  }
  public set insertQuorumParallel(value: boolean | cdktf.IResolvable) {
    this._insertQuorumParallel = value;
  }
  public resetInsertQuorumParallel() {
    this._insertQuorumParallel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertQuorumParallelInput() {
    return this._insertQuorumParallel;
  }

  // insert_quorum_timeout - computed: true, optional: true, required: false
  private _insertQuorumTimeout?: number; 
  public get insertQuorumTimeout() {
    return this.getNumberAttribute('insert_quorum_timeout');
  }
  public set insertQuorumTimeout(value: number) {
    this._insertQuorumTimeout = value;
  }
  public resetInsertQuorumTimeout() {
    this._insertQuorumTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertQuorumTimeoutInput() {
    return this._insertQuorumTimeout;
  }

  // join_algorithm - computed: true, optional: true, required: false
  private _joinAlgorithm?: string[]; 
  public get joinAlgorithm() {
    return this.getListAttribute('join_algorithm');
  }
  public set joinAlgorithm(value: string[]) {
    this._joinAlgorithm = value;
  }
  public resetJoinAlgorithm() {
    this._joinAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get joinAlgorithmInput() {
    return this._joinAlgorithm;
  }

  // join_overflow_mode - computed: true, optional: true, required: false
  private _joinOverflowMode?: string; 
  public get joinOverflowMode() {
    return this.getStringAttribute('join_overflow_mode');
  }
  public set joinOverflowMode(value: string) {
    this._joinOverflowMode = value;
  }
  public resetJoinOverflowMode() {
    this._joinOverflowMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get joinOverflowModeInput() {
    return this._joinOverflowMode;
  }

  // join_use_nulls - computed: true, optional: true, required: false
  private _joinUseNulls?: boolean | cdktf.IResolvable; 
  public get joinUseNulls() {
    return this.getBooleanAttribute('join_use_nulls');
  }
  public set joinUseNulls(value: boolean | cdktf.IResolvable) {
    this._joinUseNulls = value;
  }
  public resetJoinUseNulls() {
    this._joinUseNulls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get joinUseNullsInput() {
    return this._joinUseNulls;
  }

  // joined_subquery_requires_alias - computed: true, optional: true, required: false
  private _joinedSubqueryRequiresAlias?: boolean | cdktf.IResolvable; 
  public get joinedSubqueryRequiresAlias() {
    return this.getBooleanAttribute('joined_subquery_requires_alias');
  }
  public set joinedSubqueryRequiresAlias(value: boolean | cdktf.IResolvable) {
    this._joinedSubqueryRequiresAlias = value;
  }
  public resetJoinedSubqueryRequiresAlias() {
    this._joinedSubqueryRequiresAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get joinedSubqueryRequiresAliasInput() {
    return this._joinedSubqueryRequiresAlias;
  }

  // load_balancing - computed: true, optional: true, required: false
  private _loadBalancing?: string; 
  public get loadBalancing() {
    return this.getStringAttribute('load_balancing');
  }
  public set loadBalancing(value: string) {
    this._loadBalancing = value;
  }
  public resetLoadBalancing() {
    this._loadBalancing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancingInput() {
    return this._loadBalancing;
  }

  // local_filesystem_read_method - computed: true, optional: true, required: false
  private _localFilesystemReadMethod?: string; 
  public get localFilesystemReadMethod() {
    return this.getStringAttribute('local_filesystem_read_method');
  }
  public set localFilesystemReadMethod(value: string) {
    this._localFilesystemReadMethod = value;
  }
  public resetLocalFilesystemReadMethod() {
    this._localFilesystemReadMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localFilesystemReadMethodInput() {
    return this._localFilesystemReadMethod;
  }

  // log_processors_profiles - computed: true, optional: true, required: false
  private _logProcessorsProfiles?: boolean | cdktf.IResolvable; 
  public get logProcessorsProfiles() {
    return this.getBooleanAttribute('log_processors_profiles');
  }
  public set logProcessorsProfiles(value: boolean | cdktf.IResolvable) {
    this._logProcessorsProfiles = value;
  }
  public resetLogProcessorsProfiles() {
    this._logProcessorsProfiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logProcessorsProfilesInput() {
    return this._logProcessorsProfiles;
  }

  // log_queries_probability - computed: true, optional: true, required: false
  private _logQueriesProbability?: number; 
  public get logQueriesProbability() {
    return this.getNumberAttribute('log_queries_probability');
  }
  public set logQueriesProbability(value: number) {
    this._logQueriesProbability = value;
  }
  public resetLogQueriesProbability() {
    this._logQueriesProbability = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logQueriesProbabilityInput() {
    return this._logQueriesProbability;
  }

  // log_query_threads - computed: true, optional: true, required: false
  private _logQueryThreads?: boolean | cdktf.IResolvable; 
  public get logQueryThreads() {
    return this.getBooleanAttribute('log_query_threads');
  }
  public set logQueryThreads(value: boolean | cdktf.IResolvable) {
    this._logQueryThreads = value;
  }
  public resetLogQueryThreads() {
    this._logQueryThreads = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logQueryThreadsInput() {
    return this._logQueryThreads;
  }

  // log_query_views - computed: true, optional: true, required: false
  private _logQueryViews?: boolean | cdktf.IResolvable; 
  public get logQueryViews() {
    return this.getBooleanAttribute('log_query_views');
  }
  public set logQueryViews(value: boolean | cdktf.IResolvable) {
    this._logQueryViews = value;
  }
  public resetLogQueryViews() {
    this._logQueryViews = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logQueryViewsInput() {
    return this._logQueryViews;
  }

  // low_cardinality_allow_in_native_format - computed: true, optional: true, required: false
  private _lowCardinalityAllowInNativeFormat?: boolean | cdktf.IResolvable; 
  public get lowCardinalityAllowInNativeFormat() {
    return this.getBooleanAttribute('low_cardinality_allow_in_native_format');
  }
  public set lowCardinalityAllowInNativeFormat(value: boolean | cdktf.IResolvable) {
    this._lowCardinalityAllowInNativeFormat = value;
  }
  public resetLowCardinalityAllowInNativeFormat() {
    this._lowCardinalityAllowInNativeFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lowCardinalityAllowInNativeFormatInput() {
    return this._lowCardinalityAllowInNativeFormat;
  }

  // max_ast_depth - computed: true, optional: true, required: false
  private _maxAstDepth?: number; 
  public get maxAstDepth() {
    return this.getNumberAttribute('max_ast_depth');
  }
  public set maxAstDepth(value: number) {
    this._maxAstDepth = value;
  }
  public resetMaxAstDepth() {
    this._maxAstDepth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAstDepthInput() {
    return this._maxAstDepth;
  }

  // max_ast_elements - computed: true, optional: true, required: false
  private _maxAstElements?: number; 
  public get maxAstElements() {
    return this.getNumberAttribute('max_ast_elements');
  }
  public set maxAstElements(value: number) {
    this._maxAstElements = value;
  }
  public resetMaxAstElements() {
    this._maxAstElements = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAstElementsInput() {
    return this._maxAstElements;
  }

  // max_block_size - computed: true, optional: true, required: false
  private _maxBlockSize?: number; 
  public get maxBlockSize() {
    return this.getNumberAttribute('max_block_size');
  }
  public set maxBlockSize(value: number) {
    this._maxBlockSize = value;
  }
  public resetMaxBlockSize() {
    this._maxBlockSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBlockSizeInput() {
    return this._maxBlockSize;
  }

  // max_bytes_before_external_group_by - computed: true, optional: true, required: false
  private _maxBytesBeforeExternalGroupBy?: number; 
  public get maxBytesBeforeExternalGroupBy() {
    return this.getNumberAttribute('max_bytes_before_external_group_by');
  }
  public set maxBytesBeforeExternalGroupBy(value: number) {
    this._maxBytesBeforeExternalGroupBy = value;
  }
  public resetMaxBytesBeforeExternalGroupBy() {
    this._maxBytesBeforeExternalGroupBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBytesBeforeExternalGroupByInput() {
    return this._maxBytesBeforeExternalGroupBy;
  }

  // max_bytes_before_external_sort - computed: true, optional: true, required: false
  private _maxBytesBeforeExternalSort?: number; 
  public get maxBytesBeforeExternalSort() {
    return this.getNumberAttribute('max_bytes_before_external_sort');
  }
  public set maxBytesBeforeExternalSort(value: number) {
    this._maxBytesBeforeExternalSort = value;
  }
  public resetMaxBytesBeforeExternalSort() {
    this._maxBytesBeforeExternalSort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBytesBeforeExternalSortInput() {
    return this._maxBytesBeforeExternalSort;
  }

  // max_bytes_in_distinct - computed: true, optional: true, required: false
  private _maxBytesInDistinct?: number; 
  public get maxBytesInDistinct() {
    return this.getNumberAttribute('max_bytes_in_distinct');
  }
  public set maxBytesInDistinct(value: number) {
    this._maxBytesInDistinct = value;
  }
  public resetMaxBytesInDistinct() {
    this._maxBytesInDistinct = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBytesInDistinctInput() {
    return this._maxBytesInDistinct;
  }

  // max_bytes_in_join - computed: true, optional: true, required: false
  private _maxBytesInJoin?: number; 
  public get maxBytesInJoin() {
    return this.getNumberAttribute('max_bytes_in_join');
  }
  public set maxBytesInJoin(value: number) {
    this._maxBytesInJoin = value;
  }
  public resetMaxBytesInJoin() {
    this._maxBytesInJoin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBytesInJoinInput() {
    return this._maxBytesInJoin;
  }

  // max_bytes_in_set - computed: true, optional: true, required: false
  private _maxBytesInSet?: number; 
  public get maxBytesInSet() {
    return this.getNumberAttribute('max_bytes_in_set');
  }
  public set maxBytesInSet(value: number) {
    this._maxBytesInSet = value;
  }
  public resetMaxBytesInSet() {
    this._maxBytesInSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBytesInSetInput() {
    return this._maxBytesInSet;
  }

  // max_bytes_to_read - computed: true, optional: true, required: false
  private _maxBytesToRead?: number; 
  public get maxBytesToRead() {
    return this.getNumberAttribute('max_bytes_to_read');
  }
  public set maxBytesToRead(value: number) {
    this._maxBytesToRead = value;
  }
  public resetMaxBytesToRead() {
    this._maxBytesToRead = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBytesToReadInput() {
    return this._maxBytesToRead;
  }

  // max_bytes_to_sort - computed: true, optional: true, required: false
  private _maxBytesToSort?: number; 
  public get maxBytesToSort() {
    return this.getNumberAttribute('max_bytes_to_sort');
  }
  public set maxBytesToSort(value: number) {
    this._maxBytesToSort = value;
  }
  public resetMaxBytesToSort() {
    this._maxBytesToSort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBytesToSortInput() {
    return this._maxBytesToSort;
  }

  // max_bytes_to_transfer - computed: true, optional: true, required: false
  private _maxBytesToTransfer?: number; 
  public get maxBytesToTransfer() {
    return this.getNumberAttribute('max_bytes_to_transfer');
  }
  public set maxBytesToTransfer(value: number) {
    this._maxBytesToTransfer = value;
  }
  public resetMaxBytesToTransfer() {
    this._maxBytesToTransfer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBytesToTransferInput() {
    return this._maxBytesToTransfer;
  }

  // max_columns_to_read - computed: true, optional: true, required: false
  private _maxColumnsToRead?: number; 
  public get maxColumnsToRead() {
    return this.getNumberAttribute('max_columns_to_read');
  }
  public set maxColumnsToRead(value: number) {
    this._maxColumnsToRead = value;
  }
  public resetMaxColumnsToRead() {
    this._maxColumnsToRead = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxColumnsToReadInput() {
    return this._maxColumnsToRead;
  }

  // max_concurrent_queries_for_user - computed: true, optional: true, required: false
  private _maxConcurrentQueriesForUser?: number; 
  public get maxConcurrentQueriesForUser() {
    return this.getNumberAttribute('max_concurrent_queries_for_user');
  }
  public set maxConcurrentQueriesForUser(value: number) {
    this._maxConcurrentQueriesForUser = value;
  }
  public resetMaxConcurrentQueriesForUser() {
    this._maxConcurrentQueriesForUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConcurrentQueriesForUserInput() {
    return this._maxConcurrentQueriesForUser;
  }

  // max_execution_time - computed: true, optional: true, required: false
  private _maxExecutionTime?: number; 
  public get maxExecutionTime() {
    return this.getNumberAttribute('max_execution_time');
  }
  public set maxExecutionTime(value: number) {
    this._maxExecutionTime = value;
  }
  public resetMaxExecutionTime() {
    this._maxExecutionTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxExecutionTimeInput() {
    return this._maxExecutionTime;
  }

  // max_expanded_ast_elements - computed: true, optional: true, required: false
  private _maxExpandedAstElements?: number; 
  public get maxExpandedAstElements() {
    return this.getNumberAttribute('max_expanded_ast_elements');
  }
  public set maxExpandedAstElements(value: number) {
    this._maxExpandedAstElements = value;
  }
  public resetMaxExpandedAstElements() {
    this._maxExpandedAstElements = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxExpandedAstElementsInput() {
    return this._maxExpandedAstElements;
  }

  // max_final_threads - computed: true, optional: true, required: false
  private _maxFinalThreads?: number; 
  public get maxFinalThreads() {
    return this.getNumberAttribute('max_final_threads');
  }
  public set maxFinalThreads(value: number) {
    this._maxFinalThreads = value;
  }
  public resetMaxFinalThreads() {
    this._maxFinalThreads = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxFinalThreadsInput() {
    return this._maxFinalThreads;
  }

  // max_http_get_redirects - computed: true, optional: true, required: false
  private _maxHttpGetRedirects?: number; 
  public get maxHttpGetRedirects() {
    return this.getNumberAttribute('max_http_get_redirects');
  }
  public set maxHttpGetRedirects(value: number) {
    this._maxHttpGetRedirects = value;
  }
  public resetMaxHttpGetRedirects() {
    this._maxHttpGetRedirects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxHttpGetRedirectsInput() {
    return this._maxHttpGetRedirects;
  }

  // max_insert_block_size - computed: true, optional: true, required: false
  private _maxInsertBlockSize?: number; 
  public get maxInsertBlockSize() {
    return this.getNumberAttribute('max_insert_block_size');
  }
  public set maxInsertBlockSize(value: number) {
    this._maxInsertBlockSize = value;
  }
  public resetMaxInsertBlockSize() {
    this._maxInsertBlockSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInsertBlockSizeInput() {
    return this._maxInsertBlockSize;
  }

  // max_insert_threads - computed: true, optional: true, required: false
  private _maxInsertThreads?: number; 
  public get maxInsertThreads() {
    return this.getNumberAttribute('max_insert_threads');
  }
  public set maxInsertThreads(value: number) {
    this._maxInsertThreads = value;
  }
  public resetMaxInsertThreads() {
    this._maxInsertThreads = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInsertThreadsInput() {
    return this._maxInsertThreads;
  }

  // max_memory_usage - computed: true, optional: true, required: false
  private _maxMemoryUsage?: number; 
  public get maxMemoryUsage() {
    return this.getNumberAttribute('max_memory_usage');
  }
  public set maxMemoryUsage(value: number) {
    this._maxMemoryUsage = value;
  }
  public resetMaxMemoryUsage() {
    this._maxMemoryUsage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxMemoryUsageInput() {
    return this._maxMemoryUsage;
  }

  // max_memory_usage_for_user - computed: true, optional: true, required: false
  private _maxMemoryUsageForUser?: number; 
  public get maxMemoryUsageForUser() {
    return this.getNumberAttribute('max_memory_usage_for_user');
  }
  public set maxMemoryUsageForUser(value: number) {
    this._maxMemoryUsageForUser = value;
  }
  public resetMaxMemoryUsageForUser() {
    this._maxMemoryUsageForUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxMemoryUsageForUserInput() {
    return this._maxMemoryUsageForUser;
  }

  // max_network_bandwidth - computed: true, optional: true, required: false
  private _maxNetworkBandwidth?: number; 
  public get maxNetworkBandwidth() {
    return this.getNumberAttribute('max_network_bandwidth');
  }
  public set maxNetworkBandwidth(value: number) {
    this._maxNetworkBandwidth = value;
  }
  public resetMaxNetworkBandwidth() {
    this._maxNetworkBandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNetworkBandwidthInput() {
    return this._maxNetworkBandwidth;
  }

  // max_network_bandwidth_for_user - computed: true, optional: true, required: false
  private _maxNetworkBandwidthForUser?: number; 
  public get maxNetworkBandwidthForUser() {
    return this.getNumberAttribute('max_network_bandwidth_for_user');
  }
  public set maxNetworkBandwidthForUser(value: number) {
    this._maxNetworkBandwidthForUser = value;
  }
  public resetMaxNetworkBandwidthForUser() {
    this._maxNetworkBandwidthForUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNetworkBandwidthForUserInput() {
    return this._maxNetworkBandwidthForUser;
  }

  // max_parser_depth - computed: true, optional: true, required: false
  private _maxParserDepth?: number; 
  public get maxParserDepth() {
    return this.getNumberAttribute('max_parser_depth');
  }
  public set maxParserDepth(value: number) {
    this._maxParserDepth = value;
  }
  public resetMaxParserDepth() {
    this._maxParserDepth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxParserDepthInput() {
    return this._maxParserDepth;
  }

  // max_query_size - computed: true, optional: true, required: false
  private _maxQuerySize?: number; 
  public get maxQuerySize() {
    return this.getNumberAttribute('max_query_size');
  }
  public set maxQuerySize(value: number) {
    this._maxQuerySize = value;
  }
  public resetMaxQuerySize() {
    this._maxQuerySize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxQuerySizeInput() {
    return this._maxQuerySize;
  }

  // max_read_buffer_size - computed: true, optional: true, required: false
  private _maxReadBufferSize?: number; 
  public get maxReadBufferSize() {
    return this.getNumberAttribute('max_read_buffer_size');
  }
  public set maxReadBufferSize(value: number) {
    this._maxReadBufferSize = value;
  }
  public resetMaxReadBufferSize() {
    this._maxReadBufferSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxReadBufferSizeInput() {
    return this._maxReadBufferSize;
  }

  // max_replica_delay_for_distributed_queries - computed: true, optional: true, required: false
  private _maxReplicaDelayForDistributedQueries?: number; 
  public get maxReplicaDelayForDistributedQueries() {
    return this.getNumberAttribute('max_replica_delay_for_distributed_queries');
  }
  public set maxReplicaDelayForDistributedQueries(value: number) {
    this._maxReplicaDelayForDistributedQueries = value;
  }
  public resetMaxReplicaDelayForDistributedQueries() {
    this._maxReplicaDelayForDistributedQueries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxReplicaDelayForDistributedQueriesInput() {
    return this._maxReplicaDelayForDistributedQueries;
  }

  // max_result_bytes - computed: true, optional: true, required: false
  private _maxResultBytes?: number; 
  public get maxResultBytes() {
    return this.getNumberAttribute('max_result_bytes');
  }
  public set maxResultBytes(value: number) {
    this._maxResultBytes = value;
  }
  public resetMaxResultBytes() {
    this._maxResultBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxResultBytesInput() {
    return this._maxResultBytes;
  }

  // max_result_rows - computed: true, optional: true, required: false
  private _maxResultRows?: number; 
  public get maxResultRows() {
    return this.getNumberAttribute('max_result_rows');
  }
  public set maxResultRows(value: number) {
    this._maxResultRows = value;
  }
  public resetMaxResultRows() {
    this._maxResultRows = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxResultRowsInput() {
    return this._maxResultRows;
  }

  // max_rows_in_distinct - computed: true, optional: true, required: false
  private _maxRowsInDistinct?: number; 
  public get maxRowsInDistinct() {
    return this.getNumberAttribute('max_rows_in_distinct');
  }
  public set maxRowsInDistinct(value: number) {
    this._maxRowsInDistinct = value;
  }
  public resetMaxRowsInDistinct() {
    this._maxRowsInDistinct = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRowsInDistinctInput() {
    return this._maxRowsInDistinct;
  }

  // max_rows_in_join - computed: true, optional: true, required: false
  private _maxRowsInJoin?: number; 
  public get maxRowsInJoin() {
    return this.getNumberAttribute('max_rows_in_join');
  }
  public set maxRowsInJoin(value: number) {
    this._maxRowsInJoin = value;
  }
  public resetMaxRowsInJoin() {
    this._maxRowsInJoin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRowsInJoinInput() {
    return this._maxRowsInJoin;
  }

  // max_rows_in_set - computed: true, optional: true, required: false
  private _maxRowsInSet?: number; 
  public get maxRowsInSet() {
    return this.getNumberAttribute('max_rows_in_set');
  }
  public set maxRowsInSet(value: number) {
    this._maxRowsInSet = value;
  }
  public resetMaxRowsInSet() {
    this._maxRowsInSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRowsInSetInput() {
    return this._maxRowsInSet;
  }

  // max_rows_to_group_by - computed: true, optional: true, required: false
  private _maxRowsToGroupBy?: number; 
  public get maxRowsToGroupBy() {
    return this.getNumberAttribute('max_rows_to_group_by');
  }
  public set maxRowsToGroupBy(value: number) {
    this._maxRowsToGroupBy = value;
  }
  public resetMaxRowsToGroupBy() {
    this._maxRowsToGroupBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRowsToGroupByInput() {
    return this._maxRowsToGroupBy;
  }

  // max_rows_to_read - computed: true, optional: true, required: false
  private _maxRowsToRead?: number; 
  public get maxRowsToRead() {
    return this.getNumberAttribute('max_rows_to_read');
  }
  public set maxRowsToRead(value: number) {
    this._maxRowsToRead = value;
  }
  public resetMaxRowsToRead() {
    this._maxRowsToRead = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRowsToReadInput() {
    return this._maxRowsToRead;
  }

  // max_rows_to_sort - computed: true, optional: true, required: false
  private _maxRowsToSort?: number; 
  public get maxRowsToSort() {
    return this.getNumberAttribute('max_rows_to_sort');
  }
  public set maxRowsToSort(value: number) {
    this._maxRowsToSort = value;
  }
  public resetMaxRowsToSort() {
    this._maxRowsToSort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRowsToSortInput() {
    return this._maxRowsToSort;
  }

  // max_rows_to_transfer - computed: true, optional: true, required: false
  private _maxRowsToTransfer?: number; 
  public get maxRowsToTransfer() {
    return this.getNumberAttribute('max_rows_to_transfer');
  }
  public set maxRowsToTransfer(value: number) {
    this._maxRowsToTransfer = value;
  }
  public resetMaxRowsToTransfer() {
    this._maxRowsToTransfer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRowsToTransferInput() {
    return this._maxRowsToTransfer;
  }

  // max_temporary_columns - computed: true, optional: true, required: false
  private _maxTemporaryColumns?: number; 
  public get maxTemporaryColumns() {
    return this.getNumberAttribute('max_temporary_columns');
  }
  public set maxTemporaryColumns(value: number) {
    this._maxTemporaryColumns = value;
  }
  public resetMaxTemporaryColumns() {
    this._maxTemporaryColumns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTemporaryColumnsInput() {
    return this._maxTemporaryColumns;
  }

  // max_temporary_data_on_disk_size_for_query - computed: true, optional: true, required: false
  private _maxTemporaryDataOnDiskSizeForQuery?: number; 
  public get maxTemporaryDataOnDiskSizeForQuery() {
    return this.getNumberAttribute('max_temporary_data_on_disk_size_for_query');
  }
  public set maxTemporaryDataOnDiskSizeForQuery(value: number) {
    this._maxTemporaryDataOnDiskSizeForQuery = value;
  }
  public resetMaxTemporaryDataOnDiskSizeForQuery() {
    this._maxTemporaryDataOnDiskSizeForQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTemporaryDataOnDiskSizeForQueryInput() {
    return this._maxTemporaryDataOnDiskSizeForQuery;
  }

  // max_temporary_data_on_disk_size_for_user - computed: true, optional: true, required: false
  private _maxTemporaryDataOnDiskSizeForUser?: number; 
  public get maxTemporaryDataOnDiskSizeForUser() {
    return this.getNumberAttribute('max_temporary_data_on_disk_size_for_user');
  }
  public set maxTemporaryDataOnDiskSizeForUser(value: number) {
    this._maxTemporaryDataOnDiskSizeForUser = value;
  }
  public resetMaxTemporaryDataOnDiskSizeForUser() {
    this._maxTemporaryDataOnDiskSizeForUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTemporaryDataOnDiskSizeForUserInput() {
    return this._maxTemporaryDataOnDiskSizeForUser;
  }

  // max_temporary_non_const_columns - computed: true, optional: true, required: false
  private _maxTemporaryNonConstColumns?: number; 
  public get maxTemporaryNonConstColumns() {
    return this.getNumberAttribute('max_temporary_non_const_columns');
  }
  public set maxTemporaryNonConstColumns(value: number) {
    this._maxTemporaryNonConstColumns = value;
  }
  public resetMaxTemporaryNonConstColumns() {
    this._maxTemporaryNonConstColumns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTemporaryNonConstColumnsInput() {
    return this._maxTemporaryNonConstColumns;
  }

  // max_threads - computed: true, optional: true, required: false
  private _maxThreads?: number; 
  public get maxThreads() {
    return this.getNumberAttribute('max_threads');
  }
  public set maxThreads(value: number) {
    this._maxThreads = value;
  }
  public resetMaxThreads() {
    this._maxThreads = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxThreadsInput() {
    return this._maxThreads;
  }

  // memory_overcommit_ratio_denominator - computed: true, optional: true, required: false
  private _memoryOvercommitRatioDenominator?: number; 
  public get memoryOvercommitRatioDenominator() {
    return this.getNumberAttribute('memory_overcommit_ratio_denominator');
  }
  public set memoryOvercommitRatioDenominator(value: number) {
    this._memoryOvercommitRatioDenominator = value;
  }
  public resetMemoryOvercommitRatioDenominator() {
    this._memoryOvercommitRatioDenominator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryOvercommitRatioDenominatorInput() {
    return this._memoryOvercommitRatioDenominator;
  }

  // memory_overcommit_ratio_denominator_for_user - computed: true, optional: true, required: false
  private _memoryOvercommitRatioDenominatorForUser?: number; 
  public get memoryOvercommitRatioDenominatorForUser() {
    return this.getNumberAttribute('memory_overcommit_ratio_denominator_for_user');
  }
  public set memoryOvercommitRatioDenominatorForUser(value: number) {
    this._memoryOvercommitRatioDenominatorForUser = value;
  }
  public resetMemoryOvercommitRatioDenominatorForUser() {
    this._memoryOvercommitRatioDenominatorForUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryOvercommitRatioDenominatorForUserInput() {
    return this._memoryOvercommitRatioDenominatorForUser;
  }

  // memory_profiler_sample_probability - computed: true, optional: true, required: false
  private _memoryProfilerSampleProbability?: number; 
  public get memoryProfilerSampleProbability() {
    return this.getNumberAttribute('memory_profiler_sample_probability');
  }
  public set memoryProfilerSampleProbability(value: number) {
    this._memoryProfilerSampleProbability = value;
  }
  public resetMemoryProfilerSampleProbability() {
    this._memoryProfilerSampleProbability = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryProfilerSampleProbabilityInput() {
    return this._memoryProfilerSampleProbability;
  }

  // memory_profiler_step - computed: true, optional: true, required: false
  private _memoryProfilerStep?: number; 
  public get memoryProfilerStep() {
    return this.getNumberAttribute('memory_profiler_step');
  }
  public set memoryProfilerStep(value: number) {
    this._memoryProfilerStep = value;
  }
  public resetMemoryProfilerStep() {
    this._memoryProfilerStep = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryProfilerStepInput() {
    return this._memoryProfilerStep;
  }

  // memory_usage_overcommit_max_wait_microseconds - computed: true, optional: true, required: false
  private _memoryUsageOvercommitMaxWaitMicroseconds?: number; 
  public get memoryUsageOvercommitMaxWaitMicroseconds() {
    return this.getNumberAttribute('memory_usage_overcommit_max_wait_microseconds');
  }
  public set memoryUsageOvercommitMaxWaitMicroseconds(value: number) {
    this._memoryUsageOvercommitMaxWaitMicroseconds = value;
  }
  public resetMemoryUsageOvercommitMaxWaitMicroseconds() {
    this._memoryUsageOvercommitMaxWaitMicroseconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryUsageOvercommitMaxWaitMicrosecondsInput() {
    return this._memoryUsageOvercommitMaxWaitMicroseconds;
  }

  // merge_tree_max_bytes_to_use_cache - computed: true, optional: true, required: false
  private _mergeTreeMaxBytesToUseCache?: number; 
  public get mergeTreeMaxBytesToUseCache() {
    return this.getNumberAttribute('merge_tree_max_bytes_to_use_cache');
  }
  public set mergeTreeMaxBytesToUseCache(value: number) {
    this._mergeTreeMaxBytesToUseCache = value;
  }
  public resetMergeTreeMaxBytesToUseCache() {
    this._mergeTreeMaxBytesToUseCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mergeTreeMaxBytesToUseCacheInput() {
    return this._mergeTreeMaxBytesToUseCache;
  }

  // merge_tree_max_rows_to_use_cache - computed: true, optional: true, required: false
  private _mergeTreeMaxRowsToUseCache?: number; 
  public get mergeTreeMaxRowsToUseCache() {
    return this.getNumberAttribute('merge_tree_max_rows_to_use_cache');
  }
  public set mergeTreeMaxRowsToUseCache(value: number) {
    this._mergeTreeMaxRowsToUseCache = value;
  }
  public resetMergeTreeMaxRowsToUseCache() {
    this._mergeTreeMaxRowsToUseCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mergeTreeMaxRowsToUseCacheInput() {
    return this._mergeTreeMaxRowsToUseCache;
  }

  // merge_tree_min_bytes_for_concurrent_read - computed: true, optional: true, required: false
  private _mergeTreeMinBytesForConcurrentRead?: number; 
  public get mergeTreeMinBytesForConcurrentRead() {
    return this.getNumberAttribute('merge_tree_min_bytes_for_concurrent_read');
  }
  public set mergeTreeMinBytesForConcurrentRead(value: number) {
    this._mergeTreeMinBytesForConcurrentRead = value;
  }
  public resetMergeTreeMinBytesForConcurrentRead() {
    this._mergeTreeMinBytesForConcurrentRead = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mergeTreeMinBytesForConcurrentReadInput() {
    return this._mergeTreeMinBytesForConcurrentRead;
  }

  // merge_tree_min_rows_for_concurrent_read - computed: true, optional: true, required: false
  private _mergeTreeMinRowsForConcurrentRead?: number; 
  public get mergeTreeMinRowsForConcurrentRead() {
    return this.getNumberAttribute('merge_tree_min_rows_for_concurrent_read');
  }
  public set mergeTreeMinRowsForConcurrentRead(value: number) {
    this._mergeTreeMinRowsForConcurrentRead = value;
  }
  public resetMergeTreeMinRowsForConcurrentRead() {
    this._mergeTreeMinRowsForConcurrentRead = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mergeTreeMinRowsForConcurrentReadInput() {
    return this._mergeTreeMinRowsForConcurrentRead;
  }

  // min_bytes_to_use_direct_io - computed: true, optional: true, required: false
  private _minBytesToUseDirectIo?: number; 
  public get minBytesToUseDirectIo() {
    return this.getNumberAttribute('min_bytes_to_use_direct_io');
  }
  public set minBytesToUseDirectIo(value: number) {
    this._minBytesToUseDirectIo = value;
  }
  public resetMinBytesToUseDirectIo() {
    this._minBytesToUseDirectIo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minBytesToUseDirectIoInput() {
    return this._minBytesToUseDirectIo;
  }

  // min_count_to_compile - computed: true, optional: true, required: false
  private _minCountToCompile?: number; 
  public get minCountToCompile() {
    return this.getNumberAttribute('min_count_to_compile');
  }
  public set minCountToCompile(value: number) {
    this._minCountToCompile = value;
  }
  public resetMinCountToCompile() {
    this._minCountToCompile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minCountToCompileInput() {
    return this._minCountToCompile;
  }

  // min_count_to_compile_expression - computed: true, optional: true, required: false
  private _minCountToCompileExpression?: number; 
  public get minCountToCompileExpression() {
    return this.getNumberAttribute('min_count_to_compile_expression');
  }
  public set minCountToCompileExpression(value: number) {
    this._minCountToCompileExpression = value;
  }
  public resetMinCountToCompileExpression() {
    this._minCountToCompileExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minCountToCompileExpressionInput() {
    return this._minCountToCompileExpression;
  }

  // min_execution_speed - computed: true, optional: true, required: false
  private _minExecutionSpeed?: number; 
  public get minExecutionSpeed() {
    return this.getNumberAttribute('min_execution_speed');
  }
  public set minExecutionSpeed(value: number) {
    this._minExecutionSpeed = value;
  }
  public resetMinExecutionSpeed() {
    this._minExecutionSpeed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minExecutionSpeedInput() {
    return this._minExecutionSpeed;
  }

  // min_execution_speed_bytes - computed: true, optional: true, required: false
  private _minExecutionSpeedBytes?: number; 
  public get minExecutionSpeedBytes() {
    return this.getNumberAttribute('min_execution_speed_bytes');
  }
  public set minExecutionSpeedBytes(value: number) {
    this._minExecutionSpeedBytes = value;
  }
  public resetMinExecutionSpeedBytes() {
    this._minExecutionSpeedBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minExecutionSpeedBytesInput() {
    return this._minExecutionSpeedBytes;
  }

  // min_insert_block_size_bytes - computed: true, optional: true, required: false
  private _minInsertBlockSizeBytes?: number; 
  public get minInsertBlockSizeBytes() {
    return this.getNumberAttribute('min_insert_block_size_bytes');
  }
  public set minInsertBlockSizeBytes(value: number) {
    this._minInsertBlockSizeBytes = value;
  }
  public resetMinInsertBlockSizeBytes() {
    this._minInsertBlockSizeBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInsertBlockSizeBytesInput() {
    return this._minInsertBlockSizeBytes;
  }

  // min_insert_block_size_rows - computed: true, optional: true, required: false
  private _minInsertBlockSizeRows?: number; 
  public get minInsertBlockSizeRows() {
    return this.getNumberAttribute('min_insert_block_size_rows');
  }
  public set minInsertBlockSizeRows(value: number) {
    this._minInsertBlockSizeRows = value;
  }
  public resetMinInsertBlockSizeRows() {
    this._minInsertBlockSizeRows = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInsertBlockSizeRowsInput() {
    return this._minInsertBlockSizeRows;
  }

  // output_format_json_quote_64bit_integers - computed: true, optional: true, required: false
  private _outputFormatJsonQuote64BitIntegers?: boolean | cdktf.IResolvable; 
  public get outputFormatJsonQuote64BitIntegers() {
    return this.getBooleanAttribute('output_format_json_quote_64bit_integers');
  }
  public set outputFormatJsonQuote64BitIntegers(value: boolean | cdktf.IResolvable) {
    this._outputFormatJsonQuote64BitIntegers = value;
  }
  public resetOutputFormatJsonQuote64BitIntegers() {
    this._outputFormatJsonQuote64BitIntegers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputFormatJsonQuote64BitIntegersInput() {
    return this._outputFormatJsonQuote64BitIntegers;
  }

  // output_format_json_quote_denormals - computed: true, optional: true, required: false
  private _outputFormatJsonQuoteDenormals?: boolean | cdktf.IResolvable; 
  public get outputFormatJsonQuoteDenormals() {
    return this.getBooleanAttribute('output_format_json_quote_denormals');
  }
  public set outputFormatJsonQuoteDenormals(value: boolean | cdktf.IResolvable) {
    this._outputFormatJsonQuoteDenormals = value;
  }
  public resetOutputFormatJsonQuoteDenormals() {
    this._outputFormatJsonQuoteDenormals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputFormatJsonQuoteDenormalsInput() {
    return this._outputFormatJsonQuoteDenormals;
  }

  // prefer_localhost_replica - computed: true, optional: true, required: false
  private _preferLocalhostReplica?: boolean | cdktf.IResolvable; 
  public get preferLocalhostReplica() {
    return this.getBooleanAttribute('prefer_localhost_replica');
  }
  public set preferLocalhostReplica(value: boolean | cdktf.IResolvable) {
    this._preferLocalhostReplica = value;
  }
  public resetPreferLocalhostReplica() {
    this._preferLocalhostReplica = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferLocalhostReplicaInput() {
    return this._preferLocalhostReplica;
  }

  // priority - computed: true, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // query_cache_max_entries - computed: true, optional: true, required: false
  private _queryCacheMaxEntries?: number; 
  public get queryCacheMaxEntries() {
    return this.getNumberAttribute('query_cache_max_entries');
  }
  public set queryCacheMaxEntries(value: number) {
    this._queryCacheMaxEntries = value;
  }
  public resetQueryCacheMaxEntries() {
    this._queryCacheMaxEntries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryCacheMaxEntriesInput() {
    return this._queryCacheMaxEntries;
  }

  // query_cache_max_size_in_bytes - computed: true, optional: true, required: false
  private _queryCacheMaxSizeInBytes?: number; 
  public get queryCacheMaxSizeInBytes() {
    return this.getNumberAttribute('query_cache_max_size_in_bytes');
  }
  public set queryCacheMaxSizeInBytes(value: number) {
    this._queryCacheMaxSizeInBytes = value;
  }
  public resetQueryCacheMaxSizeInBytes() {
    this._queryCacheMaxSizeInBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryCacheMaxSizeInBytesInput() {
    return this._queryCacheMaxSizeInBytes;
  }

  // query_cache_min_query_duration - computed: true, optional: true, required: false
  private _queryCacheMinQueryDuration?: number; 
  public get queryCacheMinQueryDuration() {
    return this.getNumberAttribute('query_cache_min_query_duration');
  }
  public set queryCacheMinQueryDuration(value: number) {
    this._queryCacheMinQueryDuration = value;
  }
  public resetQueryCacheMinQueryDuration() {
    this._queryCacheMinQueryDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryCacheMinQueryDurationInput() {
    return this._queryCacheMinQueryDuration;
  }

  // query_cache_min_query_runs - computed: true, optional: true, required: false
  private _queryCacheMinQueryRuns?: number; 
  public get queryCacheMinQueryRuns() {
    return this.getNumberAttribute('query_cache_min_query_runs');
  }
  public set queryCacheMinQueryRuns(value: number) {
    this._queryCacheMinQueryRuns = value;
  }
  public resetQueryCacheMinQueryRuns() {
    this._queryCacheMinQueryRuns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryCacheMinQueryRunsInput() {
    return this._queryCacheMinQueryRuns;
  }

  // query_cache_share_between_users - computed: true, optional: true, required: false
  private _queryCacheShareBetweenUsers?: boolean | cdktf.IResolvable; 
  public get queryCacheShareBetweenUsers() {
    return this.getBooleanAttribute('query_cache_share_between_users');
  }
  public set queryCacheShareBetweenUsers(value: boolean | cdktf.IResolvable) {
    this._queryCacheShareBetweenUsers = value;
  }
  public resetQueryCacheShareBetweenUsers() {
    this._queryCacheShareBetweenUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryCacheShareBetweenUsersInput() {
    return this._queryCacheShareBetweenUsers;
  }

  // query_cache_tag - computed: true, optional: true, required: false
  private _queryCacheTag?: string; 
  public get queryCacheTag() {
    return this.getStringAttribute('query_cache_tag');
  }
  public set queryCacheTag(value: string) {
    this._queryCacheTag = value;
  }
  public resetQueryCacheTag() {
    this._queryCacheTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryCacheTagInput() {
    return this._queryCacheTag;
  }

  // query_cache_ttl - computed: true, optional: true, required: false
  private _queryCacheTtl?: number; 
  public get queryCacheTtl() {
    return this.getNumberAttribute('query_cache_ttl');
  }
  public set queryCacheTtl(value: number) {
    this._queryCacheTtl = value;
  }
  public resetQueryCacheTtl() {
    this._queryCacheTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryCacheTtlInput() {
    return this._queryCacheTtl;
  }

  // quota_mode - computed: true, optional: true, required: false
  private _quotaMode?: string; 
  public get quotaMode() {
    return this.getStringAttribute('quota_mode');
  }
  public set quotaMode(value: string) {
    this._quotaMode = value;
  }
  public resetQuotaMode() {
    this._quotaMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quotaModeInput() {
    return this._quotaMode;
  }

  // read_overflow_mode - computed: true, optional: true, required: false
  private _readOverflowMode?: string; 
  public get readOverflowMode() {
    return this.getStringAttribute('read_overflow_mode');
  }
  public set readOverflowMode(value: string) {
    this._readOverflowMode = value;
  }
  public resetReadOverflowMode() {
    this._readOverflowMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOverflowModeInput() {
    return this._readOverflowMode;
  }

  // readonly - computed: true, optional: true, required: false
  private _readonly?: number; 
  public get readonly() {
    return this.getNumberAttribute('readonly');
  }
  public set readonly(value: number) {
    this._readonly = value;
  }
  public resetReadonly() {
    this._readonly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readonlyInput() {
    return this._readonly;
  }

  // receive_timeout - computed: true, optional: true, required: false
  private _receiveTimeout?: number; 
  public get receiveTimeout() {
    return this.getNumberAttribute('receive_timeout');
  }
  public set receiveTimeout(value: number) {
    this._receiveTimeout = value;
  }
  public resetReceiveTimeout() {
    this._receiveTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get receiveTimeoutInput() {
    return this._receiveTimeout;
  }

  // remote_filesystem_read_method - computed: true, optional: true, required: false
  private _remoteFilesystemReadMethod?: string; 
  public get remoteFilesystemReadMethod() {
    return this.getStringAttribute('remote_filesystem_read_method');
  }
  public set remoteFilesystemReadMethod(value: string) {
    this._remoteFilesystemReadMethod = value;
  }
  public resetRemoteFilesystemReadMethod() {
    this._remoteFilesystemReadMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteFilesystemReadMethodInput() {
    return this._remoteFilesystemReadMethod;
  }

  // replication_alter_partitions_sync - computed: true, optional: true, required: false
  private _replicationAlterPartitionsSync?: number; 
  public get replicationAlterPartitionsSync() {
    return this.getNumberAttribute('replication_alter_partitions_sync');
  }
  public set replicationAlterPartitionsSync(value: number) {
    this._replicationAlterPartitionsSync = value;
  }
  public resetReplicationAlterPartitionsSync() {
    this._replicationAlterPartitionsSync = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationAlterPartitionsSyncInput() {
    return this._replicationAlterPartitionsSync;
  }

  // result_overflow_mode - computed: true, optional: true, required: false
  private _resultOverflowMode?: string; 
  public get resultOverflowMode() {
    return this.getStringAttribute('result_overflow_mode');
  }
  public set resultOverflowMode(value: string) {
    this._resultOverflowMode = value;
  }
  public resetResultOverflowMode() {
    this._resultOverflowMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultOverflowModeInput() {
    return this._resultOverflowMode;
  }

  // s3_use_adaptive_timeouts - computed: true, optional: true, required: false
  private _s3UseAdaptiveTimeouts?: boolean | cdktf.IResolvable; 
  public get s3UseAdaptiveTimeouts() {
    return this.getBooleanAttribute('s3_use_adaptive_timeouts');
  }
  public set s3UseAdaptiveTimeouts(value: boolean | cdktf.IResolvable) {
    this._s3UseAdaptiveTimeouts = value;
  }
  public resetS3UseAdaptiveTimeouts() {
    this._s3UseAdaptiveTimeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3UseAdaptiveTimeoutsInput() {
    return this._s3UseAdaptiveTimeouts;
  }

  // select_sequential_consistency - computed: true, optional: true, required: false
  private _selectSequentialConsistency?: boolean | cdktf.IResolvable; 
  public get selectSequentialConsistency() {
    return this.getBooleanAttribute('select_sequential_consistency');
  }
  public set selectSequentialConsistency(value: boolean | cdktf.IResolvable) {
    this._selectSequentialConsistency = value;
  }
  public resetSelectSequentialConsistency() {
    this._selectSequentialConsistency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectSequentialConsistencyInput() {
    return this._selectSequentialConsistency;
  }

  // send_progress_in_http_headers - computed: true, optional: true, required: false
  private _sendProgressInHttpHeaders?: boolean | cdktf.IResolvable; 
  public get sendProgressInHttpHeaders() {
    return this.getBooleanAttribute('send_progress_in_http_headers');
  }
  public set sendProgressInHttpHeaders(value: boolean | cdktf.IResolvable) {
    this._sendProgressInHttpHeaders = value;
  }
  public resetSendProgressInHttpHeaders() {
    this._sendProgressInHttpHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendProgressInHttpHeadersInput() {
    return this._sendProgressInHttpHeaders;
  }

  // send_timeout - computed: true, optional: true, required: false
  private _sendTimeout?: number; 
  public get sendTimeout() {
    return this.getNumberAttribute('send_timeout');
  }
  public set sendTimeout(value: number) {
    this._sendTimeout = value;
  }
  public resetSendTimeout() {
    this._sendTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendTimeoutInput() {
    return this._sendTimeout;
  }

  // set_overflow_mode - computed: true, optional: true, required: false
  private _setOverflowMode?: string; 
  public get setOverflowMode() {
    return this.getStringAttribute('set_overflow_mode');
  }
  public set setOverflowMode(value: string) {
    this._setOverflowMode = value;
  }
  public resetSetOverflowMode() {
    this._setOverflowMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setOverflowModeInput() {
    return this._setOverflowMode;
  }

  // skip_unavailable_shards - computed: true, optional: true, required: false
  private _skipUnavailableShards?: boolean | cdktf.IResolvable; 
  public get skipUnavailableShards() {
    return this.getBooleanAttribute('skip_unavailable_shards');
  }
  public set skipUnavailableShards(value: boolean | cdktf.IResolvable) {
    this._skipUnavailableShards = value;
  }
  public resetSkipUnavailableShards() {
    this._skipUnavailableShards = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipUnavailableShardsInput() {
    return this._skipUnavailableShards;
  }

  // sort_overflow_mode - computed: true, optional: true, required: false
  private _sortOverflowMode?: string; 
  public get sortOverflowMode() {
    return this.getStringAttribute('sort_overflow_mode');
  }
  public set sortOverflowMode(value: string) {
    this._sortOverflowMode = value;
  }
  public resetSortOverflowMode() {
    this._sortOverflowMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortOverflowModeInput() {
    return this._sortOverflowMode;
  }

  // timeout_before_checking_execution_speed - computed: true, optional: true, required: false
  private _timeoutBeforeCheckingExecutionSpeed?: number; 
  public get timeoutBeforeCheckingExecutionSpeed() {
    return this.getNumberAttribute('timeout_before_checking_execution_speed');
  }
  public set timeoutBeforeCheckingExecutionSpeed(value: number) {
    this._timeoutBeforeCheckingExecutionSpeed = value;
  }
  public resetTimeoutBeforeCheckingExecutionSpeed() {
    this._timeoutBeforeCheckingExecutionSpeed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutBeforeCheckingExecutionSpeedInput() {
    return this._timeoutBeforeCheckingExecutionSpeed;
  }

  // timeout_overflow_mode - computed: true, optional: true, required: false
  private _timeoutOverflowMode?: string; 
  public get timeoutOverflowMode() {
    return this.getStringAttribute('timeout_overflow_mode');
  }
  public set timeoutOverflowMode(value: string) {
    this._timeoutOverflowMode = value;
  }
  public resetTimeoutOverflowMode() {
    this._timeoutOverflowMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutOverflowModeInput() {
    return this._timeoutOverflowMode;
  }

  // transfer_overflow_mode - computed: true, optional: true, required: false
  private _transferOverflowMode?: string; 
  public get transferOverflowMode() {
    return this.getStringAttribute('transfer_overflow_mode');
  }
  public set transferOverflowMode(value: string) {
    this._transferOverflowMode = value;
  }
  public resetTransferOverflowMode() {
    this._transferOverflowMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transferOverflowModeInput() {
    return this._transferOverflowMode;
  }

  // transform_null_in - computed: true, optional: true, required: false
  private _transformNullIn?: boolean | cdktf.IResolvable; 
  public get transformNullIn() {
    return this.getBooleanAttribute('transform_null_in');
  }
  public set transformNullIn(value: boolean | cdktf.IResolvable) {
    this._transformNullIn = value;
  }
  public resetTransformNullIn() {
    this._transformNullIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformNullInInput() {
    return this._transformNullIn;
  }

  // use_hedged_requests - computed: true, optional: true, required: false
  private _useHedgedRequests?: boolean | cdktf.IResolvable; 
  public get useHedgedRequests() {
    return this.getBooleanAttribute('use_hedged_requests');
  }
  public set useHedgedRequests(value: boolean | cdktf.IResolvable) {
    this._useHedgedRequests = value;
  }
  public resetUseHedgedRequests() {
    this._useHedgedRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useHedgedRequestsInput() {
    return this._useHedgedRequests;
  }

  // use_query_cache - computed: true, optional: true, required: false
  private _useQueryCache?: boolean | cdktf.IResolvable; 
  public get useQueryCache() {
    return this.getBooleanAttribute('use_query_cache');
  }
  public set useQueryCache(value: boolean | cdktf.IResolvable) {
    this._useQueryCache = value;
  }
  public resetUseQueryCache() {
    this._useQueryCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useQueryCacheInput() {
    return this._useQueryCache;
  }

  // use_uncompressed_cache - computed: true, optional: true, required: false
  private _useUncompressedCache?: boolean | cdktf.IResolvable; 
  public get useUncompressedCache() {
    return this.getBooleanAttribute('use_uncompressed_cache');
  }
  public set useUncompressedCache(value: boolean | cdktf.IResolvable) {
    this._useUncompressedCache = value;
  }
  public resetUseUncompressedCache() {
    this._useUncompressedCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useUncompressedCacheInput() {
    return this._useUncompressedCache;
  }

  // wait_for_async_insert - computed: true, optional: true, required: false
  private _waitForAsyncInsert?: boolean | cdktf.IResolvable; 
  public get waitForAsyncInsert() {
    return this.getBooleanAttribute('wait_for_async_insert');
  }
  public set waitForAsyncInsert(value: boolean | cdktf.IResolvable) {
    this._waitForAsyncInsert = value;
  }
  public resetWaitForAsyncInsert() {
    this._waitForAsyncInsert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForAsyncInsertInput() {
    return this._waitForAsyncInsert;
  }

  // wait_for_async_insert_timeout - computed: true, optional: true, required: false
  private _waitForAsyncInsertTimeout?: number; 
  public get waitForAsyncInsertTimeout() {
    return this.getNumberAttribute('wait_for_async_insert_timeout');
  }
  public set waitForAsyncInsertTimeout(value: number) {
    this._waitForAsyncInsertTimeout = value;
  }
  public resetWaitForAsyncInsertTimeout() {
    this._waitForAsyncInsertTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForAsyncInsertTimeoutInput() {
    return this._waitForAsyncInsertTimeout;
  }
}
export interface DataYandexMdbClickhouseClusterUser {
  /**
  * Connection Manager connection configuration. Filled in by the server automatically.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#connection_manager DataYandexMdbClickhouseCluster#connection_manager}
  */
  readonly connectionManager?: { [key: string]: string };
  /**
  * Generate password using Connection Manager. Allowed values: `true` or `false`. It's used only during user creation and is ignored during updating.
  * 
  * ~> **Must specify either password or generate_password**.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#generate_password DataYandexMdbClickhouseCluster#generate_password}
  */
  readonly generatePassword?: boolean | cdktf.IResolvable;
  /**
  * The name of the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#name DataYandexMdbClickhouseCluster#name}
  */
  readonly name?: string;
  /**
  * The password of the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#password DataYandexMdbClickhouseCluster#password}
  */
  readonly password?: string;
  /**
  * permission block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#permission DataYandexMdbClickhouseCluster#permission}
  */
  readonly permission?: DataYandexMdbClickhouseClusterUserPermission[] | cdktf.IResolvable;
  /**
  * quota block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#quota DataYandexMdbClickhouseCluster#quota}
  */
  readonly quota?: DataYandexMdbClickhouseClusterUserQuota[] | cdktf.IResolvable;
  /**
  * settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#settings DataYandexMdbClickhouseCluster#settings}
  */
  readonly settings?: DataYandexMdbClickhouseClusterUserSettings;
}

export function dataYandexMdbClickhouseClusterUserToTerraform(struct?: DataYandexMdbClickhouseClusterUser | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_manager: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.connectionManager),
    generate_password: cdktf.booleanToTerraform(struct!.generatePassword),
    name: cdktf.stringToTerraform(struct!.name),
    password: cdktf.stringToTerraform(struct!.password),
    permission: cdktf.listMapper(dataYandexMdbClickhouseClusterUserPermissionToTerraform, true)(struct!.permission),
    quota: cdktf.listMapper(dataYandexMdbClickhouseClusterUserQuotaToTerraform, true)(struct!.quota),
    settings: dataYandexMdbClickhouseClusterUserSettingsToTerraform(struct!.settings),
  }
}


export function dataYandexMdbClickhouseClusterUserToHclTerraform(struct?: DataYandexMdbClickhouseClusterUser | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection_manager: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.connectionManager),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    generate_password: {
      value: cdktf.booleanToHclTerraform(struct!.generatePassword),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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
    permission: {
      value: cdktf.listMapperHcl(dataYandexMdbClickhouseClusterUserPermissionToHclTerraform, true)(struct!.permission),
      isBlock: true,
      type: "set",
      storageClassType: "DataYandexMdbClickhouseClusterUserPermissionList",
    },
    quota: {
      value: cdktf.listMapperHcl(dataYandexMdbClickhouseClusterUserQuotaToHclTerraform, true)(struct!.quota),
      isBlock: true,
      type: "set",
      storageClassType: "DataYandexMdbClickhouseClusterUserQuotaList",
    },
    settings: {
      value: dataYandexMdbClickhouseClusterUserSettingsToHclTerraform(struct!.settings),
      isBlock: true,
      type: "list",
      storageClassType: "DataYandexMdbClickhouseClusterUserSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataYandexMdbClickhouseClusterUserOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataYandexMdbClickhouseClusterUser | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionManager !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionManager = this._connectionManager;
    }
    if (this._generatePassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.generatePassword = this._generatePassword;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._permission?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.permission = this._permission?.internalValue;
    }
    if (this._quota?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.quota = this._quota?.internalValue;
    }
    if (this._settings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.settings = this._settings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbClickhouseClusterUser | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectionManager = undefined;
      this._generatePassword = undefined;
      this._name = undefined;
      this._password = undefined;
      this._permission.internalValue = undefined;
      this._quota.internalValue = undefined;
      this._settings.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectionManager = value.connectionManager;
      this._generatePassword = value.generatePassword;
      this._name = value.name;
      this._password = value.password;
      this._permission.internalValue = value.permission;
      this._quota.internalValue = value.quota;
      this._settings.internalValue = value.settings;
    }
  }

  // connection_manager - computed: true, optional: true, required: false
  private _connectionManager?: { [key: string]: string }; 
  public get connectionManager() {
    return this.getStringMapAttribute('connection_manager');
  }
  public set connectionManager(value: { [key: string]: string }) {
    this._connectionManager = value;
  }
  public resetConnectionManager() {
    this._connectionManager = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionManagerInput() {
    return this._connectionManager;
  }

  // generate_password - computed: false, optional: true, required: false
  private _generatePassword?: boolean | cdktf.IResolvable; 
  public get generatePassword() {
    return this.getBooleanAttribute('generate_password');
  }
  public set generatePassword(value: boolean | cdktf.IResolvable) {
    this._generatePassword = value;
  }
  public resetGeneratePassword() {
    this._generatePassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generatePasswordInput() {
    return this._generatePassword;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // permission - computed: false, optional: true, required: false
  private _permission = new DataYandexMdbClickhouseClusterUserPermissionList(this, "permission", true);
  public get permission() {
    return this._permission;
  }
  public putPermission(value: DataYandexMdbClickhouseClusterUserPermission[] | cdktf.IResolvable) {
    this._permission.internalValue = value;
  }
  public resetPermission() {
    this._permission.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionInput() {
    return this._permission.internalValue;
  }

  // quota - computed: false, optional: true, required: false
  private _quota = new DataYandexMdbClickhouseClusterUserQuotaList(this, "quota", true);
  public get quota() {
    return this._quota;
  }
  public putQuota(value: DataYandexMdbClickhouseClusterUserQuota[] | cdktf.IResolvable) {
    this._quota.internalValue = value;
  }
  public resetQuota() {
    this._quota.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quotaInput() {
    return this._quota.internalValue;
  }

  // settings - computed: false, optional: true, required: false
  private _settings = new DataYandexMdbClickhouseClusterUserSettingsOutputReference(this, "settings");
  public get settings() {
    return this._settings;
  }
  public putSettings(value: DataYandexMdbClickhouseClusterUserSettings) {
    this._settings.internalValue = value;
  }
  public resetSettings() {
    this._settings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings.internalValue;
  }
}

export class DataYandexMdbClickhouseClusterUserList extends cdktf.ComplexList {
  public internalValue? : DataYandexMdbClickhouseClusterUser[] | cdktf.IResolvable

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
  public get(index: number): DataYandexMdbClickhouseClusterUserOutputReference {
    return new DataYandexMdbClickhouseClusterUserOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexMdbClickhouseClusterZookeeperResources {
  /**
  * Volume of the storage available to a ZooKeeper host, in gigabytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#disk_size DataYandexMdbClickhouseCluster#disk_size}
  */
  readonly diskSize?: number;
  /**
  * Type of the storage of ZooKeeper hosts. For more information see [the official documentation](https://yandex.cloud/docs/managed-clickhouse/concepts/storage).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#disk_type_id DataYandexMdbClickhouseCluster#disk_type_id}
  */
  readonly diskTypeId?: string;
  /**
  * The ID of the preset for computational resources available to a ZooKeeper host (CPU, memory etc.). For more information, see [the official documentation](https://yandex.cloud/docs/managed-clickhouse/concepts).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#resource_preset_id DataYandexMdbClickhouseCluster#resource_preset_id}
  */
  readonly resourcePresetId?: string;
}

export function dataYandexMdbClickhouseClusterZookeeperResourcesToTerraform(struct?: DataYandexMdbClickhouseClusterZookeeperResourcesOutputReference | DataYandexMdbClickhouseClusterZookeeperResources): any {
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


export function dataYandexMdbClickhouseClusterZookeeperResourcesToHclTerraform(struct?: DataYandexMdbClickhouseClusterZookeeperResourcesOutputReference | DataYandexMdbClickhouseClusterZookeeperResources): any {
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

export class DataYandexMdbClickhouseClusterZookeeperResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataYandexMdbClickhouseClusterZookeeperResources | undefined {
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

  public set internalValue(value: DataYandexMdbClickhouseClusterZookeeperResources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._diskSize = undefined;
      this._diskTypeId = undefined;
      this._resourcePresetId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._diskSize = value.diskSize;
      this._diskTypeId = value.diskTypeId;
      this._resourcePresetId = value.resourcePresetId;
    }
  }

  // disk_size - computed: true, optional: true, required: false
  private _diskSize?: number; 
  public get diskSize() {
    return this.getNumberAttribute('disk_size');
  }
  public set diskSize(value: number) {
    this._diskSize = value;
  }
  public resetDiskSize() {
    this._diskSize = undefined;
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

  // resource_preset_id - computed: true, optional: true, required: false
  private _resourcePresetId?: string; 
  public get resourcePresetId() {
    return this.getStringAttribute('resource_preset_id');
  }
  public set resourcePresetId(value: string) {
    this._resourcePresetId = value;
  }
  public resetResourcePresetId() {
    this._resourcePresetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcePresetIdInput() {
    return this._resourcePresetId;
  }
}
export interface DataYandexMdbClickhouseClusterZookeeper {
  /**
  * resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#resources DataYandexMdbClickhouseCluster#resources}
  */
  readonly resources?: DataYandexMdbClickhouseClusterZookeeperResources;
}

export function dataYandexMdbClickhouseClusterZookeeperToTerraform(struct?: DataYandexMdbClickhouseClusterZookeeperOutputReference | DataYandexMdbClickhouseClusterZookeeper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resources: dataYandexMdbClickhouseClusterZookeeperResourcesToTerraform(struct!.resources),
  }
}


export function dataYandexMdbClickhouseClusterZookeeperToHclTerraform(struct?: DataYandexMdbClickhouseClusterZookeeperOutputReference | DataYandexMdbClickhouseClusterZookeeper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resources: {
      value: dataYandexMdbClickhouseClusterZookeeperResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "list",
      storageClassType: "DataYandexMdbClickhouseClusterZookeeperResourcesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataYandexMdbClickhouseClusterZookeeperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataYandexMdbClickhouseClusterZookeeper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbClickhouseClusterZookeeper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._resources.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._resources.internalValue = value.resources;
    }
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataYandexMdbClickhouseClusterZookeeperResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataYandexMdbClickhouseClusterZookeeperResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster yandex_mdb_clickhouse_cluster}
*/
export class DataYandexMdbClickhouseCluster extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_mdb_clickhouse_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataYandexMdbClickhouseCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataYandexMdbClickhouseCluster to import
  * @param importFromId The id of the existing DataYandexMdbClickhouseCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataYandexMdbClickhouseCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "yandex_mdb_clickhouse_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/mdb_clickhouse_cluster yandex_mdb_clickhouse_cluster} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataYandexMdbClickhouseClusterConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataYandexMdbClickhouseClusterConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'yandex_mdb_clickhouse_cluster',
      terraformGeneratorMetadata: {
        providerName: 'yandex',
        providerVersion: '0.177.0',
        providerVersionConstraint: '0.177.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adminPassword = config.adminPassword;
    this._backupRetainPeriodDays = config.backupRetainPeriodDays;
    this._clusterId = config.clusterId;
    this._copySchemaOnNewHosts = config.copySchemaOnNewHosts;
    this._createdAt = config.createdAt;
    this._deletionProtection = config.deletionProtection;
    this._description = config.description;
    this._diskEncryptionKeyId = config.diskEncryptionKeyId;
    this._embeddedKeeper = config.embeddedKeeper;
    this._environment = config.environment;
    this._folderId = config.folderId;
    this._health = config.health;
    this._id = config.id;
    this._labels = config.labels;
    this._name = config.name;
    this._networkId = config.networkId;
    this._securityGroupIds = config.securityGroupIds;
    this._serviceAccountId = config.serviceAccountId;
    this._sqlDatabaseManagement = config.sqlDatabaseManagement;
    this._sqlUserManagement = config.sqlUserManagement;
    this._status = config.status;
    this._version = config.version;
    this._access.internalValue = config.access;
    this._backupWindowStart.internalValue = config.backupWindowStart;
    this._clickhouse.internalValue = config.clickhouse;
    this._cloudStorage.internalValue = config.cloudStorage;
    this._database.internalValue = config.database;
    this._formatSchema.internalValue = config.formatSchema;
    this._host.internalValue = config.host;
    this._maintenanceWindow.internalValue = config.maintenanceWindow;
    this._mlModel.internalValue = config.mlModel;
    this._shard.internalValue = config.shard;
    this._shardGroup.internalValue = config.shardGroup;
    this._user.internalValue = config.user;
    this._zookeeper.internalValue = config.zookeeper;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_password - computed: false, optional: true, required: false
  private _adminPassword?: string; 
  public get adminPassword() {
    return this.getStringAttribute('admin_password');
  }
  public set adminPassword(value: string) {
    this._adminPassword = value;
  }
  public resetAdminPassword() {
    this._adminPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminPasswordInput() {
    return this._adminPassword;
  }

  // backup_retain_period_days - computed: false, optional: true, required: false
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

  // cluster_id - computed: true, optional: true, required: false
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  public resetClusterId() {
    this._clusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // copy_schema_on_new_hosts - computed: false, optional: true, required: false
  private _copySchemaOnNewHosts?: boolean | cdktf.IResolvable; 
  public get copySchemaOnNewHosts() {
    return this.getBooleanAttribute('copy_schema_on_new_hosts');
  }
  public set copySchemaOnNewHosts(value: boolean | cdktf.IResolvable) {
    this._copySchemaOnNewHosts = value;
  }
  public resetCopySchemaOnNewHosts() {
    this._copySchemaOnNewHosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get copySchemaOnNewHostsInput() {
    return this._copySchemaOnNewHosts;
  }

  // created_at - computed: true, optional: true, required: false
  private _createdAt?: string; 
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }
  public set createdAt(value: string) {
    this._createdAt = value;
  }
  public resetCreatedAt() {
    this._createdAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdAtInput() {
    return this._createdAt;
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

  // disk_encryption_key_id - computed: true, optional: true, required: false
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

  // embedded_keeper - computed: true, optional: true, required: false
  private _embeddedKeeper?: boolean | cdktf.IResolvable; 
  public get embeddedKeeper() {
    return this.getBooleanAttribute('embedded_keeper');
  }
  public set embeddedKeeper(value: boolean | cdktf.IResolvable) {
    this._embeddedKeeper = value;
  }
  public resetEmbeddedKeeper() {
    this._embeddedKeeper = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get embeddedKeeperInput() {
    return this._embeddedKeeper;
  }

  // environment - computed: false, optional: true, required: false
  private _environment?: string; 
  public get environment() {
    return this.getStringAttribute('environment');
  }
  public set environment(value: string) {
    this._environment = value;
  }
  public resetEnvironment() {
    this._environment = undefined;
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

  // health - computed: true, optional: true, required: false
  private _health?: string; 
  public get health() {
    return this.getStringAttribute('health');
  }
  public set health(value: string) {
    this._health = value;
  }
  public resetHealth() {
    this._health = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthInput() {
    return this._health;
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

  // labels - computed: true, optional: true, required: false
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

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // network_id - computed: false, optional: true, required: false
  private _networkId?: string; 
  public get networkId() {
    return this.getStringAttribute('network_id');
  }
  public set networkId(value: string) {
    this._networkId = value;
  }
  public resetNetworkId() {
    this._networkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdInput() {
    return this._networkId;
  }

  // security_group_ids - computed: true, optional: true, required: false
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

  // service_account_id - computed: false, optional: true, required: false
  private _serviceAccountId?: string; 
  public get serviceAccountId() {
    return this.getStringAttribute('service_account_id');
  }
  public set serviceAccountId(value: string) {
    this._serviceAccountId = value;
  }
  public resetServiceAccountId() {
    this._serviceAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountIdInput() {
    return this._serviceAccountId;
  }

  // sql_database_management - computed: true, optional: true, required: false
  private _sqlDatabaseManagement?: boolean | cdktf.IResolvable; 
  public get sqlDatabaseManagement() {
    return this.getBooleanAttribute('sql_database_management');
  }
  public set sqlDatabaseManagement(value: boolean | cdktf.IResolvable) {
    this._sqlDatabaseManagement = value;
  }
  public resetSqlDatabaseManagement() {
    this._sqlDatabaseManagement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlDatabaseManagementInput() {
    return this._sqlDatabaseManagement;
  }

  // sql_user_management - computed: true, optional: true, required: false
  private _sqlUserManagement?: boolean | cdktf.IResolvable; 
  public get sqlUserManagement() {
    return this.getBooleanAttribute('sql_user_management');
  }
  public set sqlUserManagement(value: boolean | cdktf.IResolvable) {
    this._sqlUserManagement = value;
  }
  public resetSqlUserManagement() {
    this._sqlUserManagement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlUserManagementInput() {
    return this._sqlUserManagement;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // access - computed: false, optional: true, required: false
  private _access = new DataYandexMdbClickhouseClusterAccessOutputReference(this, "access");
  public get access() {
    return this._access;
  }
  public putAccess(value: DataYandexMdbClickhouseClusterAccess) {
    this._access.internalValue = value;
  }
  public resetAccess() {
    this._access.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessInput() {
    return this._access.internalValue;
  }

  // backup_window_start - computed: false, optional: true, required: false
  private _backupWindowStart = new DataYandexMdbClickhouseClusterBackupWindowStartOutputReference(this, "backup_window_start");
  public get backupWindowStart() {
    return this._backupWindowStart;
  }
  public putBackupWindowStart(value: DataYandexMdbClickhouseClusterBackupWindowStart) {
    this._backupWindowStart.internalValue = value;
  }
  public resetBackupWindowStart() {
    this._backupWindowStart.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupWindowStartInput() {
    return this._backupWindowStart.internalValue;
  }

  // clickhouse - computed: false, optional: true, required: false
  private _clickhouse = new DataYandexMdbClickhouseClusterClickhouseOutputReference(this, "clickhouse");
  public get clickhouse() {
    return this._clickhouse;
  }
  public putClickhouse(value: DataYandexMdbClickhouseClusterClickhouse) {
    this._clickhouse.internalValue = value;
  }
  public resetClickhouse() {
    this._clickhouse.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clickhouseInput() {
    return this._clickhouse.internalValue;
  }

  // cloud_storage - computed: false, optional: true, required: false
  private _cloudStorage = new DataYandexMdbClickhouseClusterCloudStorageOutputReference(this, "cloud_storage");
  public get cloudStorage() {
    return this._cloudStorage;
  }
  public putCloudStorage(value: DataYandexMdbClickhouseClusterCloudStorage) {
    this._cloudStorage.internalValue = value;
  }
  public resetCloudStorage() {
    this._cloudStorage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudStorageInput() {
    return this._cloudStorage.internalValue;
  }

  // database - computed: false, optional: true, required: false
  private _database = new DataYandexMdbClickhouseClusterDatabaseList(this, "database", true);
  public get database() {
    return this._database;
  }
  public putDatabase(value: DataYandexMdbClickhouseClusterDatabase[] | cdktf.IResolvable) {
    this._database.internalValue = value;
  }
  public resetDatabase() {
    this._database.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database.internalValue;
  }

  // format_schema - computed: false, optional: true, required: false
  private _formatSchema = new DataYandexMdbClickhouseClusterFormatSchemaList(this, "format_schema", true);
  public get formatSchema() {
    return this._formatSchema;
  }
  public putFormatSchema(value: DataYandexMdbClickhouseClusterFormatSchema[] | cdktf.IResolvable) {
    this._formatSchema.internalValue = value;
  }
  public resetFormatSchema() {
    this._formatSchema.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatSchemaInput() {
    return this._formatSchema.internalValue;
  }

  // host - computed: false, optional: true, required: false
  private _host = new DataYandexMdbClickhouseClusterHostList(this, "host", false);
  public get host() {
    return this._host;
  }
  public putHost(value: DataYandexMdbClickhouseClusterHost[] | cdktf.IResolvable) {
    this._host.internalValue = value;
  }
  public resetHost() {
    this._host.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host.internalValue;
  }

  // maintenance_window - computed: false, optional: true, required: false
  private _maintenanceWindow = new DataYandexMdbClickhouseClusterMaintenanceWindowOutputReference(this, "maintenance_window");
  public get maintenanceWindow() {
    return this._maintenanceWindow;
  }
  public putMaintenanceWindow(value: DataYandexMdbClickhouseClusterMaintenanceWindow) {
    this._maintenanceWindow.internalValue = value;
  }
  public resetMaintenanceWindow() {
    this._maintenanceWindow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceWindowInput() {
    return this._maintenanceWindow.internalValue;
  }

  // ml_model - computed: false, optional: true, required: false
  private _mlModel = new DataYandexMdbClickhouseClusterMlModelList(this, "ml_model", true);
  public get mlModel() {
    return this._mlModel;
  }
  public putMlModel(value: DataYandexMdbClickhouseClusterMlModel[] | cdktf.IResolvable) {
    this._mlModel.internalValue = value;
  }
  public resetMlModel() {
    this._mlModel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mlModelInput() {
    return this._mlModel.internalValue;
  }

  // shard - computed: false, optional: true, required: false
  private _shard = new DataYandexMdbClickhouseClusterShardList(this, "shard", true);
  public get shard() {
    return this._shard;
  }
  public putShard(value: DataYandexMdbClickhouseClusterShard[] | cdktf.IResolvable) {
    this._shard.internalValue = value;
  }
  public resetShard() {
    this._shard.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shardInput() {
    return this._shard.internalValue;
  }

  // shard_group - computed: false, optional: true, required: false
  private _shardGroup = new DataYandexMdbClickhouseClusterShardGroupList(this, "shard_group", false);
  public get shardGroup() {
    return this._shardGroup;
  }
  public putShardGroup(value: DataYandexMdbClickhouseClusterShardGroup[] | cdktf.IResolvable) {
    this._shardGroup.internalValue = value;
  }
  public resetShardGroup() {
    this._shardGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shardGroupInput() {
    return this._shardGroup.internalValue;
  }

  // user - computed: false, optional: true, required: false
  private _user = new DataYandexMdbClickhouseClusterUserList(this, "user", true);
  public get user() {
    return this._user;
  }
  public putUser(value: DataYandexMdbClickhouseClusterUser[] | cdktf.IResolvable) {
    this._user.internalValue = value;
  }
  public resetUser() {
    this._user.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user.internalValue;
  }

  // zookeeper - computed: false, optional: true, required: false
  private _zookeeper = new DataYandexMdbClickhouseClusterZookeeperOutputReference(this, "zookeeper");
  public get zookeeper() {
    return this._zookeeper;
  }
  public putZookeeper(value: DataYandexMdbClickhouseClusterZookeeper) {
    this._zookeeper.internalValue = value;
  }
  public resetZookeeper() {
    this._zookeeper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zookeeperInput() {
    return this._zookeeper.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      admin_password: cdktf.stringToTerraform(this._adminPassword),
      backup_retain_period_days: cdktf.numberToTerraform(this._backupRetainPeriodDays),
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      copy_schema_on_new_hosts: cdktf.booleanToTerraform(this._copySchemaOnNewHosts),
      created_at: cdktf.stringToTerraform(this._createdAt),
      deletion_protection: cdktf.booleanToTerraform(this._deletionProtection),
      description: cdktf.stringToTerraform(this._description),
      disk_encryption_key_id: cdktf.stringToTerraform(this._diskEncryptionKeyId),
      embedded_keeper: cdktf.booleanToTerraform(this._embeddedKeeper),
      environment: cdktf.stringToTerraform(this._environment),
      folder_id: cdktf.stringToTerraform(this._folderId),
      health: cdktf.stringToTerraform(this._health),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      network_id: cdktf.stringToTerraform(this._networkId),
      security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityGroupIds),
      service_account_id: cdktf.stringToTerraform(this._serviceAccountId),
      sql_database_management: cdktf.booleanToTerraform(this._sqlDatabaseManagement),
      sql_user_management: cdktf.booleanToTerraform(this._sqlUserManagement),
      status: cdktf.stringToTerraform(this._status),
      version: cdktf.stringToTerraform(this._version),
      access: dataYandexMdbClickhouseClusterAccessToTerraform(this._access.internalValue),
      backup_window_start: dataYandexMdbClickhouseClusterBackupWindowStartToTerraform(this._backupWindowStart.internalValue),
      clickhouse: dataYandexMdbClickhouseClusterClickhouseToTerraform(this._clickhouse.internalValue),
      cloud_storage: dataYandexMdbClickhouseClusterCloudStorageToTerraform(this._cloudStorage.internalValue),
      database: cdktf.listMapper(dataYandexMdbClickhouseClusterDatabaseToTerraform, true)(this._database.internalValue),
      format_schema: cdktf.listMapper(dataYandexMdbClickhouseClusterFormatSchemaToTerraform, true)(this._formatSchema.internalValue),
      host: cdktf.listMapper(dataYandexMdbClickhouseClusterHostToTerraform, true)(this._host.internalValue),
      maintenance_window: dataYandexMdbClickhouseClusterMaintenanceWindowToTerraform(this._maintenanceWindow.internalValue),
      ml_model: cdktf.listMapper(dataYandexMdbClickhouseClusterMlModelToTerraform, true)(this._mlModel.internalValue),
      shard: cdktf.listMapper(dataYandexMdbClickhouseClusterShardToTerraform, true)(this._shard.internalValue),
      shard_group: cdktf.listMapper(dataYandexMdbClickhouseClusterShardGroupToTerraform, true)(this._shardGroup.internalValue),
      user: cdktf.listMapper(dataYandexMdbClickhouseClusterUserToTerraform, true)(this._user.internalValue),
      zookeeper: dataYandexMdbClickhouseClusterZookeeperToTerraform(this._zookeeper.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      admin_password: {
        value: cdktf.stringToHclTerraform(this._adminPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backup_retain_period_days: {
        value: cdktf.numberToHclTerraform(this._backupRetainPeriodDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      copy_schema_on_new_hosts: {
        value: cdktf.booleanToHclTerraform(this._copySchemaOnNewHosts),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      created_at: {
        value: cdktf.stringToHclTerraform(this._createdAt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      embedded_keeper: {
        value: cdktf.booleanToHclTerraform(this._embeddedKeeper),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      health: {
        value: cdktf.stringToHclTerraform(this._health),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
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
      security_group_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._securityGroupIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      service_account_id: {
        value: cdktf.stringToHclTerraform(this._serviceAccountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sql_database_management: {
        value: cdktf.booleanToHclTerraform(this._sqlDatabaseManagement),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sql_user_management: {
        value: cdktf.booleanToHclTerraform(this._sqlUserManagement),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      access: {
        value: dataYandexMdbClickhouseClusterAccessToHclTerraform(this._access.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataYandexMdbClickhouseClusterAccessList",
      },
      backup_window_start: {
        value: dataYandexMdbClickhouseClusterBackupWindowStartToHclTerraform(this._backupWindowStart.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataYandexMdbClickhouseClusterBackupWindowStartList",
      },
      clickhouse: {
        value: dataYandexMdbClickhouseClusterClickhouseToHclTerraform(this._clickhouse.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataYandexMdbClickhouseClusterClickhouseList",
      },
      cloud_storage: {
        value: dataYandexMdbClickhouseClusterCloudStorageToHclTerraform(this._cloudStorage.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataYandexMdbClickhouseClusterCloudStorageList",
      },
      database: {
        value: cdktf.listMapperHcl(dataYandexMdbClickhouseClusterDatabaseToHclTerraform, true)(this._database.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataYandexMdbClickhouseClusterDatabaseList",
      },
      format_schema: {
        value: cdktf.listMapperHcl(dataYandexMdbClickhouseClusterFormatSchemaToHclTerraform, true)(this._formatSchema.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataYandexMdbClickhouseClusterFormatSchemaList",
      },
      host: {
        value: cdktf.listMapperHcl(dataYandexMdbClickhouseClusterHostToHclTerraform, true)(this._host.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataYandexMdbClickhouseClusterHostList",
      },
      maintenance_window: {
        value: dataYandexMdbClickhouseClusterMaintenanceWindowToHclTerraform(this._maintenanceWindow.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataYandexMdbClickhouseClusterMaintenanceWindowList",
      },
      ml_model: {
        value: cdktf.listMapperHcl(dataYandexMdbClickhouseClusterMlModelToHclTerraform, true)(this._mlModel.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataYandexMdbClickhouseClusterMlModelList",
      },
      shard: {
        value: cdktf.listMapperHcl(dataYandexMdbClickhouseClusterShardToHclTerraform, true)(this._shard.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataYandexMdbClickhouseClusterShardList",
      },
      shard_group: {
        value: cdktf.listMapperHcl(dataYandexMdbClickhouseClusterShardGroupToHclTerraform, true)(this._shardGroup.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataYandexMdbClickhouseClusterShardGroupList",
      },
      user: {
        value: cdktf.listMapperHcl(dataYandexMdbClickhouseClusterUserToHclTerraform, true)(this._user.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataYandexMdbClickhouseClusterUserList",
      },
      zookeeper: {
        value: dataYandexMdbClickhouseClusterZookeeperToHclTerraform(this._zookeeper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataYandexMdbClickhouseClusterZookeeperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
