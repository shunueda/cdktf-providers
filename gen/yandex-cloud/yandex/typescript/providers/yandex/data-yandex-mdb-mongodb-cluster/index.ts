// https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/mdb_mongodb_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataYandexMdbMongodbClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/mdb_mongodb_cluster#cluster_id DataYandexMdbMongodbCluster#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * The creation timestamp of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/mdb_mongodb_cluster#created_at DataYandexMdbMongodbCluster#created_at}
  */
  readonly createdAt?: string;
  /**
  * The `true` value means that resource is protected from accidental deletion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/mdb_mongodb_cluster#deletion_protection DataYandexMdbMongodbCluster#deletion_protection}
  */
  readonly deletionProtection?: boolean | cdktf.IResolvable;
  /**
  * The resource description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/mdb_mongodb_cluster#description DataYandexMdbMongodbCluster#description}
  */
  readonly description?: string;
  /**
  * ID of the KMS key for cluster disk encryption.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/mdb_mongodb_cluster#disk_encryption_key_id DataYandexMdbMongodbCluster#disk_encryption_key_id}
  */
  readonly diskEncryptionKeyId?: string;
  /**
  * Deployment environment of the MongoDB cluster. Can be either `PRESTABLE` or `PRODUCTION`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/mdb_mongodb_cluster#environment DataYandexMdbMongodbCluster#environment}
  */
  readonly environment?: string;
  /**
  * The folder identifier that resource belongs to. If it is not provided, the default provider `folder-id` is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/mdb_mongodb_cluster#folder_id DataYandexMdbMongodbCluster#folder_id}
  */
  readonly folderId?: string;
  /**
  * Aggregated health of the cluster. Can be either `ALIVE`, `DEGRADED`, `DEAD` or `HEALTH_UNKNOWN`. For more information see `health` field of JSON representation in [the official documentation](https://yandex.cloud/docs/managed-mongodb/api-ref/Cluster/).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/mdb_mongodb_cluster#health DataYandexMdbMongodbCluster#health}
  */
  readonly health?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/mdb_mongodb_cluster#id DataYandexMdbMongodbCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A set of key/value label pairs which assigned to resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/mdb_mongodb_cluster#labels DataYandexMdbMongodbCluster#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The resource name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/mdb_mongodb_cluster#name DataYandexMdbMongodbCluster#name}
  */
  readonly name?: string;
  /**
  * The `VPC Network ID` of subnets which resource attached to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/mdb_mongodb_cluster#network_id DataYandexMdbMongodbCluster#network_id}
  */
  readonly networkId?: string;
  /**
  * The list of security groups applied to resource or their components.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/mdb_mongodb_cluster#security_group_ids DataYandexMdbMongodbCluster#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * MongoDB Cluster mode enabled/disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/mdb_mongodb_cluster#sharded DataYandexMdbMongodbCluster#sharded}
  */
  readonly sharded?: boolean | cdktf.IResolvable;
  /**
  * Status of the cluster. Can be either `CREATING`, `STARTING`, `RUNNING`, `UPDATING`, `STOPPING`, `STOPPED`, `ERROR` or `STATUS_UNKNOWN`. For more information see `status` field of JSON representation in [the official documentation](https://yandex.cloud/docs/managed-mongodb/api-ref/Cluster/).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/mdb_mongodb_cluster#status DataYandexMdbMongodbCluster#status}
  */
  readonly status?: string;
  /**
  * cluster_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/mdb_mongodb_cluster#cluster_config DataYandexMdbMongodbCluster#cluster_config}
  */
  readonly clusterConfig?: DataYandexMdbMongodbClusterClusterConfig;
  /**
  * database block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/mdb_mongodb_cluster#database DataYandexMdbMongodbCluster#database}
  */
  readonly database?: DataYandexMdbMongodbClusterDatabase[] | cdktf.IResolvable;
  /**
  * disk_size_autoscaling_mongocfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/mdb_mongodb_cluster#disk_size_autoscaling_mongocfg DataYandexMdbMongodbCluster#disk_size_autoscaling_mongocfg}
  */
  readonly diskSizeAutoscalingMongocfg?: DataYandexMdbMongodbClusterDiskSizeAutoscalingMongocfg;
  /**
  * disk_size_autoscaling_mongod block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/mdb_mongodb_cluster#disk_size_autoscaling_mongod DataYandexMdbMongodbCluster#disk_size_autoscaling_mongod}
  */
  readonly diskSizeAutoscalingMongod?: DataYandexMdbMongodbClusterDiskSizeAutoscalingMongod;
  /**
  * disk_size_autoscaling_mongoinfra block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/mdb_mongodb_cluster#disk_size_autoscaling_mongoinfra DataYandexMdbMongodbCluster#disk_size_autoscaling_mongoinfra}
  */
  readonly diskSizeAutoscalingMongoinfra?: DataYandexMdbMongodbClusterDiskSizeAutoscalingMongoinfra;
  /**
  * disk_size_autoscaling_mongos block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/mdb_mongodb_cluster#disk_size_autoscaling_mongos DataYandexMdbMongodbCluster#disk_size_autoscaling_mongos}
  */
  readonly diskSizeAutoscalingMongos?: DataYandexMdbMongodbClusterDiskSizeAutoscalingMongos;
  /**
  * host block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/mdb_mongodb_cluster#host DataYandexMdbMongodbCluster#host}
  */
  readonly host?: DataYandexMdbMongodbClusterHost[] | cdktf.IResolvable;
  /**
  * maintenance_window block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/mdb_mongodb_cluster#maintenance_window DataYandexMdbMongodbCluster#maintenance_window}
  */
  readonly maintenanceWindow?: DataYandexMdbMongodbClusterMaintenanceWindow;
  /**
  * resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/mdb_mongodb_cluster#resources DataYandexMdbMongodbCluster#resources}
  */
  readonly resources?: DataYandexMdbMongodbClusterResources;
  /**
  * resources_mongocfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/mdb_mongodb_cluster#resources_mongocfg DataYandexMdbMongodbCluster#resources_mongocfg}
  */
  readonly resourcesMongocfg?: DataYandexMdbMongodbClusterResourcesMongocfg;
  /**
  * resources_mongod block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/mdb_mongodb_cluster#resources_mongod DataYandexMdbMongodbCluster#resources_mongod}
  */
  readonly resourcesMongod?: DataYandexMdbMongodbClusterResourcesMongod;
  /**
  * resources_mongoinfra block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/mdb_mongodb_cluster#resources_mongoinfra DataYandexMdbMongodbCluster#resources_mongoinfra}
  */
  readonly resourcesMongoinfra?: DataYandexMdbMongodbClusterResourcesMongoinfra;
  /**
  * resources_mongos block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/mdb_mongodb_cluster#resources_mongos DataYandexMdbMongodbCluster#resources_mongos}
  */
  readonly resourcesMongos?: DataYandexMdbMongodbClusterResourcesMongos;
  /**
  * restore block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/mdb_mongodb_cluster#restore DataYandexMdbMongodbCluster#restore}
  */
  readonly restore?: DataYandexMdbMongodbClusterRestore;
  /**
  * user block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/mdb_mongodb_cluster#user DataYandexMdbMongodbCluster#user}
  */
  readonly user?: DataYandexMdbMongodbClusterUser[] | cdktf.IResolvable;
}
export interface DataYandexMdbMongodbClusterClusterConfigAccess {
  /**
  * Allow access for [Yandex DataLens](https://yandex.cloud/services/datalens).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/mdb_mongodb_cluster#data_lens DataYandexMdbMongodbCluster#data_lens}
  */
  readonly dataLens?: boolean | cdktf.IResolvable;
  /**
  * Allow access for [DataTransfer](https://yandex.cloud/services/data-transfer).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/mdb_mongodb_cluster#data_transfer DataYandexMdbMongodbCluster#data_transfer}
  */
  readonly dataTransfer?: boolean | cdktf.IResolvable;
  /**
  * Allow access for [WebSQL](https://yandex.cloud/ru/docs/websql/).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/mdb_mongodb_cluster#web_sql DataYandexMdbMongodbCluster#web_sql}
  */
  readonly webSql?: boolean | cdktf.IResolvable;
}

export function dataYandexMdbMongodbClusterClusterConfigAccessToTerraform(struct?: DataYandexMdbMongodbClusterClusterConfigAccessOutputReference | DataYandexMdbMongodbClusterClusterConfigAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_lens: cdktf.booleanToTerraform(struct!.dataLens),
    data_transfer: cdktf.booleanToTerraform(struct!.dataTransfer),
    web_sql: cdktf.booleanToTerraform(struct!.webSql),
  }
}


export function dataYandexMdbMongodbClusterClusterConfigAccessToHclTerraform(struct?: DataYandexMdbMongodbClusterClusterConfigAccessOutputReference | DataYandexMdbMongodbClusterClusterConfigAccess): any {
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

export class DataYandexMdbMongodbClusterClusterConfigAccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataYandexMdbMongodbClusterClusterConfigAccess | undefined {
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
    if (this._webSql !== undefined) {
      hasAnyValues = true;
      internalValueResult.webSql = this._webSql;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbMongodbClusterClusterConfigAccess | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataLens = undefined;
      this._dataTransfer = undefined;
      this._webSql = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataLens = value.dataLens;
      this._dataTransfer = value.dataTransfer;
      this._webSql = value.webSql;
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
}
export interface DataYandexMdbMongodbClusterClusterConfigBackupWindowStart {
  /**
  * The hour at which backup will be started.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/mdb_mongodb_cluster#hours DataYandexMdbMongodbCluster#hours}
  */
  readonly hours?: number;
  /**
  * The minute at which backup will be started.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/mdb_mongodb_cluster#minutes DataYandexMdbMongodbCluster#minutes}
  */
  readonly minutes?: number;
}

export function dataYandexMdbMongodbClusterClusterConfigBackupWindowStartToTerraform(struct?: DataYandexMdbMongodbClusterClusterConfigBackupWindowStartOutputReference | DataYandexMdbMongodbClusterClusterConfigBackupWindowStart): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hours: cdktf.numberToTerraform(struct!.hours),
    minutes: cdktf.numberToTerraform(struct!.minutes),
  }
}


export function dataYandexMdbMongodbClusterClusterConfigBackupWindowStartToHclTerraform(struct?: DataYandexMdbMongodbClusterClusterConfigBackupWindowStartOutputReference | DataYandexMdbMongodbClusterClusterConfigBackupWindowStart): any {
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

export class DataYandexMdbMongodbClusterClusterConfigBackupWindowStartOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataYandexMdbMongodbClusterClusterConfigBackupWindowStart | undefined {
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

  public set internalValue(value: DataYandexMdbMongodbClusterClusterConfigBackupWindowStart | undefined) {
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
export interface DataYandexMdbMongodbClusterClusterConfigMongocfgNet {
  /**
  * The maximum number of simultaneous connections that host will accept. For more information, see the [net.maxIncomingConnections](https://www.mongodb.com/docs/manual/reference/configuration-options/#mongodb-setting-net.maxIncomingConnections) description in the official documentation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/mdb_mongodb_cluster#max_incoming_connections DataYandexMdbMongodbCluster#max_incoming_connections}
  */
  readonly maxIncomingConnections?: number;
}

export function dataYandexMdbMongodbClusterClusterConfigMongocfgNetToTerraform(struct?: DataYandexMdbMongodbClusterClusterConfigMongocfgNetOutputReference | DataYandexMdbMongodbClusterClusterConfigMongocfgNet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_incoming_connections: cdktf.numberToTerraform(struct!.maxIncomingConnections),
  }
}


export function dataYandexMdbMongodbClusterClusterConfigMongocfgNetToHclTerraform(struct?: DataYandexMdbMongodbClusterClusterConfigMongocfgNetOutputReference | DataYandexMdbMongodbClusterClusterConfigMongocfgNet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_incoming_connections: {
      value: cdktf.numberToHclTerraform(struct!.maxIncomingConnections),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataYandexMdbMongodbClusterClusterConfigMongocfgNetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataYandexMdbMongodbClusterClusterConfigMongocfgNet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxIncomingConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxIncomingConnections = this._maxIncomingConnections;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbMongodbClusterClusterConfigMongocfgNet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxIncomingConnections = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxIncomingConnections = value.maxIncomingConnections;
    }
  }

  // max_incoming_connections - computed: false, optional: true, required: false
  private _maxIncomingConnections?: number; 
  public get maxIncomingConnections() {
    return this.getNumberAttribute('max_incoming_connections');
  }
  public set maxIncomingConnections(value: number) {
    this._maxIncomingConnections = value;
  }
  public resetMaxIncomingConnections() {
    this._maxIncomingConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxIncomingConnectionsInput() {
    return this._maxIncomingConnections;
  }
}
export interface DataYandexMdbMongodbClusterClusterConfigMongocfgOperationProfiling {
  /**
  * Specifies which operations should be profiled. The following profiler levels are available: off, slow_op, all. For more information, see the [operationProfiling.mode](https://www.mongodb.com/docs/manual/reference/configuration-options/#mongodb-setting-operationProfiling.mode) description in the official documentation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/mdb_mongodb_cluster#mode DataYandexMdbMongodbCluster#mode}
  */
  readonly mode?: string;
  /**
  * The slow operation time threshold, in milliseconds. Operations that run for longer than this threshold are considered slow. For more information, see the [operationProfiling.slowOpThresholdMs](https://www.mongodb.com/docs/manual/reference/configuration-options/#mongodb-setting-operationProfiling.slowOpThresholdMs) description in the official documentation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/mdb_mongodb_cluster#slow_op_threshold DataYandexMdbMongodbCluster#slow_op_threshold}
  */
  readonly slowOpThreshold?: number;
}

export function dataYandexMdbMongodbClusterClusterConfigMongocfgOperationProfilingToTerraform(struct?: DataYandexMdbMongodbClusterClusterConfigMongocfgOperationProfilingOutputReference | DataYandexMdbMongodbClusterClusterConfigMongocfgOperationProfiling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    slow_op_threshold: cdktf.numberToTerraform(struct!.slowOpThreshold),
  }
}


export function dataYandexMdbMongodbClusterClusterConfigMongocfgOperationProfilingToHclTerraform(struct?: DataYandexMdbMongodbClusterClusterConfigMongocfgOperationProfilingOutputReference | DataYandexMdbMongodbClusterClusterConfigMongocfgOperationProfiling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    slow_op_threshold: {
      value: cdktf.numberToHclTerraform(struct!.slowOpThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataYandexMdbMongodbClusterClusterConfigMongocfgOperationProfilingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataYandexMdbMongodbClusterClusterConfigMongocfgOperationProfiling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._slowOpThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.slowOpThreshold = this._slowOpThreshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbMongodbClusterClusterConfigMongocfgOperationProfiling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mode = undefined;
      this._slowOpThreshold = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mode = value.mode;
      this._slowOpThreshold = value.slowOpThreshold;
    }
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // slow_op_threshold - computed: false, optional: true, required: false
  private _slowOpThreshold?: number; 
  public get slowOpThreshold() {
    return this.getNumberAttribute('slow_op_threshold');
  }
  public set slowOpThreshold(value: number) {
    this._slowOpThreshold = value;
  }
  public resetSlowOpThreshold() {
    this._slowOpThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slowOpThresholdInput() {
    return this._slowOpThreshold;
  }
}
export interface DataYandexMdbMongodbClusterClusterConfigMongocfgStorageWiredTiger {
  /**
  * Defines the maximum size of the internal cache that WiredTiger will use for all data. For more information, see the [storage.wiredTiger.engineConfig.cacheSizeGB](https://www.mongodb.com/docs/manual/reference/configuration-options/#mongodb-setting-storage.wiredTiger.engineConfig.cacheSizeGB) description in the official documentation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/mdb_mongodb_cluster#cache_size_gb DataYandexMdbMongodbCluster#cache_size_gb}
  */
  readonly cacheSizeGb?: number;
}

export function dataYandexMdbMongodbClusterClusterConfigMongocfgStorageWiredTigerToTerraform(struct?: DataYandexMdbMongodbClusterClusterConfigMongocfgStorageWiredTigerOutputReference | DataYandexMdbMongodbClusterClusterConfigMongocfgStorageWiredTiger): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cache_size_gb: cdktf.numberToTerraform(struct!.cacheSizeGb),
  }
}


export function dataYandexMdbMongodbClusterClusterConfigMongocfgStorageWiredTigerToHclTerraform(struct?: DataYandexMdbMongodbClusterClusterConfigMongocfgStorageWiredTigerOutputReference | DataYandexMdbMongodbClusterClusterConfigMongocfgStorageWiredTiger): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cache_size_gb: {
      value: cdktf.numberToHclTerraform(struct!.cacheSizeGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataYandexMdbMongodbClusterClusterConfigMongocfgStorageWiredTigerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataYandexMdbMongodbClusterClusterConfigMongocfgStorageWiredTiger | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cacheSizeGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheSizeGb = this._cacheSizeGb;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbMongodbClusterClusterConfigMongocfgStorageWiredTiger | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cacheSizeGb = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cacheSizeGb = value.cacheSizeGb;
    }
  }

  // cache_size_gb - computed: false, optional: true, required: false
  private _cacheSizeGb?: number; 
  public get cacheSizeGb() {
    return this.getNumberAttribute('cache_size_gb');
  }
  public set cacheSizeGb(value: number) {
    this._cacheSizeGb = value;
  }
  public resetCacheSizeGb() {
    this._cacheSizeGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheSizeGbInput() {
    return this._cacheSizeGb;
  }
}
export interface DataYandexMdbMongodbClusterClusterConfigMongocfgStorage {
  /**
  * wired_tiger block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/mdb_mongodb_cluster#wired_tiger DataYandexMdbMongodbCluster#wired_tiger}
  */
  readonly wiredTiger?: DataYandexMdbMongodbClusterClusterConfigMongocfgStorageWiredTiger;
}

export function dataYandexMdbMongodbClusterClusterConfigMongocfgStorageToTerraform(struct?: DataYandexMdbMongodbClusterClusterConfigMongocfgStorageOutputReference | DataYandexMdbMongodbClusterClusterConfigMongocfgStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    wired_tiger: dataYandexMdbMongodbClusterClusterConfigMongocfgStorageWiredTigerToTerraform(struct!.wiredTiger),
  }
}


export function dataYandexMdbMongodbClusterClusterConfigMongocfgStorageToHclTerraform(struct?: DataYandexMdbMongodbClusterClusterConfigMongocfgStorageOutputReference | DataYandexMdbMongodbClusterClusterConfigMongocfgStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    wired_tiger: {
      value: dataYandexMdbMongodbClusterClusterConfigMongocfgStorageWiredTigerToHclTerraform(struct!.wiredTiger),
      isBlock: true,
      type: "list",
      storageClassType: "DataYandexMdbMongodbClusterClusterConfigMongocfgStorageWiredTigerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataYandexMdbMongodbClusterClusterConfigMongocfgStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataYandexMdbMongodbClusterClusterConfigMongocfgStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._wiredTiger?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.wiredTiger = this._wiredTiger?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbMongodbClusterClusterConfigMongocfgStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._wiredTiger.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._wiredTiger.internalValue = value.wiredTiger;
    }
  }

  // wired_tiger - computed: false, optional: true, required: false
  private _wiredTiger = new DataYandexMdbMongodbClusterClusterConfigMongocfgStorageWiredTigerOutputReference(this, "wired_tiger");
  public get wiredTiger() {
    return this._wiredTiger;
  }
  public putWiredTiger(value: DataYandexMdbMongodbClusterClusterConfigMongocfgStorageWiredTiger) {
    this._wiredTiger.internalValue = value;
  }
  public resetWiredTiger() {
    this._wiredTiger.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wiredTigerInput() {
    return this._wiredTiger.internalValue;
  }
}
export interface DataYandexMdbMongodbClusterClusterConfigMongocfg {
  /**
  * net block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/mdb_mongodb_cluster#net DataYandexMdbMongodbCluster#net}
  */
  readonly net?: DataYandexMdbMongodbClusterClusterConfigMongocfgNet;
  /**
  * operation_profiling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/mdb_mongodb_cluster#operation_profiling DataYandexMdbMongodbCluster#operation_profiling}
  */
  readonly operationProfiling?: DataYandexMdbMongodbClusterClusterConfigMongocfgOperationProfiling;
  /**
  * storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/mdb_mongodb_cluster#storage DataYandexMdbMongodbCluster#storage}
  */
  readonly storage?: DataYandexMdbMongodbClusterClusterConfigMongocfgStorage;
}

export function dataYandexMdbMongodbClusterClusterConfigMongocfgToTerraform(struct?: DataYandexMdbMongodbClusterClusterConfigMongocfgOutputReference | DataYandexMdbMongodbClusterClusterConfigMongocfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    net: dataYandexMdbMongodbClusterClusterConfigMongocfgNetToTerraform(struct!.net),
    operation_profiling: dataYandexMdbMongodbClusterClusterConfigMongocfgOperationProfilingToTerraform(struct!.operationProfiling),
    storage: dataYandexMdbMongodbClusterClusterConfigMongocfgStorageToTerraform(struct!.storage),
  }
}


export function dataYandexMdbMongodbClusterClusterConfigMongocfgToHclTerraform(struct?: DataYandexMdbMongodbClusterClusterConfigMongocfgOutputReference | DataYandexMdbMongodbClusterClusterConfigMongocfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    net: {
      value: dataYandexMdbMongodbClusterClusterConfigMongocfgNetToHclTerraform(struct!.net),
      isBlock: true,
      type: "list",
      storageClassType: "DataYandexMdbMongodbClusterClusterConfigMongocfgNetList",
    },
    operation_profiling: {
      value: dataYandexMdbMongodbClusterClusterConfigMongocfgOperationProfilingToHclTerraform(struct!.operationProfiling),
      isBlock: true,
      type: "list",
      storageClassType: "DataYandexMdbMongodbClusterClusterConfigMongocfgOperationProfilingList",
    },
    storage: {
      value: dataYandexMdbMongodbClusterClusterConfigMongocfgStorageToHclTerraform(struct!.storage),
      isBlock: true,
      type: "list",
      storageClassType: "DataYandexMdbMongodbClusterClusterConfigMongocfgStorageList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataYandexMdbMongodbClusterClusterConfigMongocfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataYandexMdbMongodbClusterClusterConfigMongocfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._net?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.net = this._net?.internalValue;
    }
    if (this._operationProfiling?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.operationProfiling = this._operationProfiling?.internalValue;
    }
    if (this._storage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storage = this._storage?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbMongodbClusterClusterConfigMongocfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._net.internalValue = undefined;
      this._operationProfiling.internalValue = undefined;
      this._storage.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._net.internalValue = value.net;
      this._operationProfiling.internalValue = value.operationProfiling;
      this._storage.internalValue = value.storage;
    }
  }

  // net - computed: false, optional: true, required: false
  private _net = new DataYandexMdbMongodbClusterClusterConfigMongocfgNetOutputReference(this, "net");
  public get net() {
    return this._net;
  }
  public putNet(value: DataYandexMdbMongodbClusterClusterConfigMongocfgNet) {
    this._net.internalValue = value;
  }
  public resetNet() {
    this._net.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netInput() {
    return this._net.internalValue;
  }

  // operation_profiling - computed: false, optional: true, required: false
  private _operationProfiling = new DataYandexMdbMongodbClusterClusterConfigMongocfgOperationProfilingOutputReference(this, "operation_profiling");
  public get operationProfiling() {
    return this._operationProfiling;
  }
  public putOperationProfiling(value: DataYandexMdbMongodbClusterClusterConfigMongocfgOperationProfiling) {
    this._operationProfiling.internalValue = value;
  }
  public resetOperationProfiling() {
    this._operationProfiling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationProfilingInput() {
    return this._operationProfiling.internalValue;
  }

  // storage - computed: false, optional: true, required: false
  private _storage = new DataYandexMdbMongodbClusterClusterConfigMongocfgStorageOutputReference(this, "storage");
  public get storage() {
    return this._storage;
  }
  public putStorage(value: DataYandexMdbMongodbClusterClusterConfigMongocfgStorage) {
    this._storage.internalValue = value;
  }
  public resetStorage() {
    this._storage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage.internalValue;
  }
}
export interface DataYandexMdbMongodbClusterClusterConfigMongodAuditLog {
  /**
  * Configuration of the audit log filter in JSON format. For more information see [auditLog.filter](https://www.mongodb.com/docs/manual/reference/configuration-options/#mongodb-setting-auditLog.filter) description in the official documentation. Available only in enterprise edition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/mdb_mongodb_cluster#filter DataYandexMdbMongodbCluster#filter}
  */
  readonly filter?: string;
  /**
  * Specifies if a node allows runtime configuration of audit filters and the auditAuthorizationSuccess variable. For more information see [auditLog.runtimeConfiguration](https://www.mongodb.com/docs/manual/reference/configuration-options/#mongodb-setting-auditLog.runtimeConfiguration) description in the official documentation. Available only in enterprise edition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/mdb_mongodb_cluster#runtime_configuration DataYandexMdbMongodbCluster#runtime_configuration}
  */
  readonly runtimeConfiguration?: boolean | cdktf.IResolvable;
}

export function dataYandexMdbMongodbClusterClusterConfigMongodAuditLogToTerraform(struct?: DataYandexMdbMongodbClusterClusterConfigMongodAuditLogOutputReference | DataYandexMdbMongodbClusterClusterConfigMongodAuditLog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter: cdktf.stringToTerraform(struct!.filter),
    runtime_configuration: cdktf.booleanToTerraform(struct!.runtimeConfiguration),
  }
}


export function dataYandexMdbMongodbClusterClusterConfigMongodAuditLogToHclTerraform(struct?: DataYandexMdbMongodbClusterClusterConfigMongodAuditLogOutputReference | DataYandexMdbMongodbClusterClusterConfigMongodAuditLog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filter: {
      value: cdktf.stringToHclTerraform(struct!.filter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    runtime_configuration: {
      value: cdktf.booleanToHclTerraform(struct!.runtimeConfiguration),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataYandexMdbMongodbClusterClusterConfigMongodAuditLogOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataYandexMdbMongodbClusterClusterConfigMongodAuditLog | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    if (this._runtimeConfiguration !== undefined) {
      hasAnyValues = true;
      internalValueResult.runtimeConfiguration = this._runtimeConfiguration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbMongodbClusterClusterConfigMongodAuditLog | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._filter = undefined;
      this._runtimeConfiguration = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._filter = value.filter;
      this._runtimeConfiguration = value.runtimeConfiguration;
    }
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // runtime_configuration - computed: false, optional: true, required: false
  private _runtimeConfiguration?: boolean | cdktf.IResolvable; 
  public get runtimeConfiguration() {
    return this.getBooleanAttribute('runtime_configuration');
  }
  public set runtimeConfiguration(value: boolean | cdktf.IResolvable) {
    this._runtimeConfiguration = value;
  }
  public resetRuntimeConfiguration() {
    this._runtimeConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeConfigurationInput() {
    return this._runtimeConfiguration;
  }
}
export interface DataYandexMdbMongodbClusterClusterConfigMongodNet {
  /**
  * Specifies the default compressor(s) to use for communication between this mongod or mongos. Accepts array of compressors. Order matters. Available compressors: snappy, zlib, zstd, disabled. To disable network compression, make `disabled` the only value. For more information, see the [net.Compression.Compressors](https://www.mongodb.com/docs/manual/reference/configuration-options/#mongodb-setting-net.compression.compressors) description in the official documentation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/mdb_mongodb_cluster#compressors DataYandexMdbMongodbCluster#compressors}
  */
  readonly compressors?: string[];
  /**
  * The maximum number of simultaneous connections that host will accept. For more information, see the [net.maxIncomingConnections](https://www.mongodb.com/docs/manual/reference/configuration-options/#mongodb-setting-net.maxIncomingConnections) description in the official documentation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/mdb_mongodb_cluster#max_incoming_connections DataYandexMdbMongodbCluster#max_incoming_connections}
  */
  readonly maxIncomingConnections?: number;
}

export function dataYandexMdbMongodbClusterClusterConfigMongodNetToTerraform(struct?: DataYandexMdbMongodbClusterClusterConfigMongodNetOutputReference | DataYandexMdbMongodbClusterClusterConfigMongodNet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compressors: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.compressors),
    max_incoming_connections: cdktf.numberToTerraform(struct!.maxIncomingConnections),
  }
}


export function dataYandexMdbMongodbClusterClusterConfigMongodNetToHclTerraform(struct?: DataYandexMdbMongodbClusterClusterConfigMongodNetOutputReference | DataYandexMdbMongodbClusterClusterConfigMongodNet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compressors: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.compressors),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    max_incoming_connections: {
      value: cdktf.numberToHclTerraform(struct!.maxIncomingConnections),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataYandexMdbMongodbClusterClusterConfigMongodNetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataYandexMdbMongodbClusterClusterConfigMongodNet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compressors !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressors = this._compressors;
    }
    if (this._maxIncomingConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxIncomingConnections = this._maxIncomingConnections;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbMongodbClusterClusterConfigMongodNet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._compressors = undefined;
      this._maxIncomingConnections = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._compressors = value.compressors;
      this._maxIncomingConnections = value.maxIncomingConnections;
    }
  }

  // compressors - computed: false, optional: true, required: false
  private _compressors?: string[]; 
  public get compressors() {
    return this.getListAttribute('compressors');
  }
  public set compressors(value: string[]) {
    this._compressors = value;
  }
  public resetCompressors() {
    this._compressors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressorsInput() {
    return this._compressors;
  }

  // max_incoming_connections - computed: false, optional: true, required: false
  private _maxIncomingConnections?: number; 
  public get maxIncomingConnections() {
    return this.getNumberAttribute('max_incoming_connections');
  }
  public set maxIncomingConnections(value: number) {
    this._maxIncomingConnections = value;
  }
  public resetMaxIncomingConnections() {
    this._maxIncomingConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxIncomingConnectionsInput() {
    return this._maxIncomingConnections;
  }
}
export interface DataYandexMdbMongodbClusterClusterConfigMongodOperationProfiling {
  /**
  * Specifies which operations should be profiled. The following profiler levels are available: off, slow_op, all. For more information, see the [operationProfiling.mode](https://www.mongodb.com/docs/manual/reference/configuration-options/#mongodb-setting-operationProfiling.mode) description in the official documentation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/mdb_mongodb_cluster#mode DataYandexMdbMongodbCluster#mode}
  */
  readonly mode?: string;
  /**
  * The fraction of slow operations that should be profiled or logged. Accepts values between 0 and 1, inclusive. For more information, see the [operationProfiling.slowOpSampleRate](https://www.mongodb.com/docs/manual/reference/configuration-options/#mongodb-setting-operationProfiling.slowOpSampleRate) description in the official documentation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/mdb_mongodb_cluster#slow_op_sample_rate DataYandexMdbMongodbCluster#slow_op_sample_rate}
  */
  readonly slowOpSampleRate?: number;
  /**
  * The slow operation time threshold, in milliseconds. Operations that run for longer than this threshold are considered slow. For more information, see the [operationProfiling.slowOpThresholdMs](https://www.mongodb.com/docs/manual/reference/configuration-options/#mongodb-setting-operationProfiling.slowOpThresholdMs) description in the official documentation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/mdb_mongodb_cluster#slow_op_threshold DataYandexMdbMongodbCluster#slow_op_threshold}
  */
  readonly slowOpThreshold?: number;
}

export function dataYandexMdbMongodbClusterClusterConfigMongodOperationProfilingToTerraform(struct?: DataYandexMdbMongodbClusterClusterConfigMongodOperationProfilingOutputReference | DataYandexMdbMongodbClusterClusterConfigMongodOperationProfiling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    slow_op_sample_rate: cdktf.numberToTerraform(struct!.slowOpSampleRate),
    slow_op_threshold: cdktf.numberToTerraform(struct!.slowOpThreshold),
  }
}


export function dataYandexMdbMongodbClusterClusterConfigMongodOperationProfilingToHclTerraform(struct?: DataYandexMdbMongodbClusterClusterConfigMongodOperationProfilingOutputReference | DataYandexMdbMongodbClusterClusterConfigMongodOperationProfiling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    slow_op_sample_rate: {
      value: cdktf.numberToHclTerraform(struct!.slowOpSampleRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    slow_op_threshold: {
      value: cdktf.numberToHclTerraform(struct!.slowOpThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataYandexMdbMongodbClusterClusterConfigMongodOperationProfilingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataYandexMdbMongodbClusterClusterConfigMongodOperationProfiling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._slowOpSampleRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.slowOpSampleRate = this._slowOpSampleRate;
    }
    if (this._slowOpThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.slowOpThreshold = this._slowOpThreshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbMongodbClusterClusterConfigMongodOperationProfiling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mode = undefined;
      this._slowOpSampleRate = undefined;
      this._slowOpThreshold = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mode = value.mode;
      this._slowOpSampleRate = value.slowOpSampleRate;
      this._slowOpThreshold = value.slowOpThreshold;
    }
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // slow_op_sample_rate - computed: false, optional: true, required: false
  private _slowOpSampleRate?: number; 
  public get slowOpSampleRate() {
    return this.getNumberAttribute('slow_op_sample_rate');
  }
  public set slowOpSampleRate(value: number) {
    this._slowOpSampleRate = value;
  }
  public resetSlowOpSampleRate() {
    this._slowOpSampleRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slowOpSampleRateInput() {
    return this._slowOpSampleRate;
  }

  // slow_op_threshold - computed: false, optional: true, required: false
  private _slowOpThreshold?: number; 
  public get slowOpThreshold() {
    return this.getNumberAttribute('slow_op_threshold');
  }
  public set slowOpThreshold(value: number) {
    this._slowOpThreshold = value;
  }
  public resetSlowOpThreshold() {
    this._slowOpThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slowOpThresholdInput() {
    return this._slowOpThreshold;
  }
}
export interface DataYandexMdbMongodbClusterClusterConfigMongodSecurityKmip {
  /**
  * String containing the client certificate used for authenticating MongoDB to the KMIP server. For more information see [security.kmip.clientCertificateFile](https://www.mongodb.com/docs/manual/reference/configuration-options/#mongodb-setting-security.kmip.clientCertificateFile) description in the official documentation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/mdb_mongodb_cluster#client_certificate DataYandexMdbMongodbCluster#client_certificate}
  */
  readonly clientCertificate?: string;
  /**
  * Unique KMIP identifier for an existing key within the KMIP server. For more information see [security.kmip.keyIdentifier](https://www.mongodb.com/docs/manual/reference/configuration-options/#mongodb-setting-security.kmip.keyIdentifier) description in the official documentation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/mdb_mongodb_cluster#key_identifier DataYandexMdbMongodbCluster#key_identifier}
  */
  readonly keyIdentifier?: string;
  /**
  * Port number to use to communicate with the KMIP server. Default: 5696 For more information see [security.kmip.port](https://www.mongodb.com/docs/manual/reference/configuration-options/#mongodb-setting-security.kmip.port) description in the official documentation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/mdb_mongodb_cluster#port DataYandexMdbMongodbCluster#port}
  */
  readonly port?: number;
  /**
  * Path to CA File. Used for validating secure client connection to KMIP server. For more information see [security.kmip.serverCAFile](https://www.mongodb.com/docs/manual/reference/configuration-options/#mongodb-setting-security.kmip.serverCAFile) description in the official documentation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/mdb_mongodb_cluster#server_ca DataYandexMdbMongodbCluster#server_ca}
  */
  readonly serverCa?: string;
  /**
  * Hostname or IP address of the KMIP server to connect to. For more information see [security.kmip.serverName](https://www.mongodb.com/docs/manual/reference/configuration-options/#mongodb-setting-security.kmip.serverName) description in the official documentation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/mdb_mongodb_cluster#server_name DataYandexMdbMongodbCluster#server_name}
  */
  readonly serverName?: string;
}

export function dataYandexMdbMongodbClusterClusterConfigMongodSecurityKmipToTerraform(struct?: DataYandexMdbMongodbClusterClusterConfigMongodSecurityKmipOutputReference | DataYandexMdbMongodbClusterClusterConfigMongodSecurityKmip): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_certificate: cdktf.stringToTerraform(struct!.clientCertificate),
    key_identifier: cdktf.stringToTerraform(struct!.keyIdentifier),
    port: cdktf.numberToTerraform(struct!.port),
    server_ca: cdktf.stringToTerraform(struct!.serverCa),
    server_name: cdktf.stringToTerraform(struct!.serverName),
  }
}


export function dataYandexMdbMongodbClusterClusterConfigMongodSecurityKmipToHclTerraform(struct?: DataYandexMdbMongodbClusterClusterConfigMongodSecurityKmipOutputReference | DataYandexMdbMongodbClusterClusterConfigMongodSecurityKmip): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_certificate: {
      value: cdktf.stringToHclTerraform(struct!.clientCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_identifier: {
      value: cdktf.stringToHclTerraform(struct!.keyIdentifier),
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
    server_ca: {
      value: cdktf.stringToHclTerraform(struct!.serverCa),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_name: {
      value: cdktf.stringToHclTerraform(struct!.serverName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataYandexMdbMongodbClusterClusterConfigMongodSecurityKmipOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataYandexMdbMongodbClusterClusterConfigMongodSecurityKmip | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCertificate = this._clientCertificate;
    }
    if (this._keyIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyIdentifier = this._keyIdentifier;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._serverCa !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverCa = this._serverCa;
    }
    if (this._serverName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverName = this._serverName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbMongodbClusterClusterConfigMongodSecurityKmip | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientCertificate = undefined;
      this._keyIdentifier = undefined;
      this._port = undefined;
      this._serverCa = undefined;
      this._serverName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientCertificate = value.clientCertificate;
      this._keyIdentifier = value.keyIdentifier;
      this._port = value.port;
      this._serverCa = value.serverCa;
      this._serverName = value.serverName;
    }
  }

  // client_certificate - computed: false, optional: true, required: false
  private _clientCertificate?: string; 
  public get clientCertificate() {
    return this.getStringAttribute('client_certificate');
  }
  public set clientCertificate(value: string) {
    this._clientCertificate = value;
  }
  public resetClientCertificate() {
    this._clientCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateInput() {
    return this._clientCertificate;
  }

  // key_identifier - computed: false, optional: true, required: false
  private _keyIdentifier?: string; 
  public get keyIdentifier() {
    return this.getStringAttribute('key_identifier');
  }
  public set keyIdentifier(value: string) {
    this._keyIdentifier = value;
  }
  public resetKeyIdentifier() {
    this._keyIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIdentifierInput() {
    return this._keyIdentifier;
  }

  // port - computed: false, optional: true, required: false
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

  // server_ca - computed: false, optional: true, required: false
  private _serverCa?: string; 
  public get serverCa() {
    return this.getStringAttribute('server_ca');
  }
  public set serverCa(value: string) {
    this._serverCa = value;
  }
  public resetServerCa() {
    this._serverCa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverCaInput() {
    return this._serverCa;
  }

  // server_name - computed: false, optional: true, required: false
  private _serverName?: string; 
  public get serverName() {
    return this.getStringAttribute('server_name');
  }
  public set serverName(value: string) {
    this._serverName = value;
  }
  public resetServerName() {
    this._serverName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNameInput() {
    return this._serverName;
  }
}
export interface DataYandexMdbMongodbClusterClusterConfigMongodSecurity {
  /**
  * Enables the encryption for the WiredTiger storage engine. Can be either true or false. For more information see [security.enableEncryption](https://www.mongodb.com/docs/manual/reference/configuration-options/#mongodb-setting-security.enableEncryption) description in the official documentation. Available only in enterprise edition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/mdb_mongodb_cluster#enable_encryption DataYandexMdbMongodbCluster#enable_encryption}
  */
  readonly enableEncryption?: boolean | cdktf.IResolvable;
  /**
  * kmip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/mdb_mongodb_cluster#kmip DataYandexMdbMongodbCluster#kmip}
  */
  readonly kmip?: DataYandexMdbMongodbClusterClusterConfigMongodSecurityKmip;
}

export function dataYandexMdbMongodbClusterClusterConfigMongodSecurityToTerraform(struct?: DataYandexMdbMongodbClusterClusterConfigMongodSecurityOutputReference | DataYandexMdbMongodbClusterClusterConfigMongodSecurity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_encryption: cdktf.booleanToTerraform(struct!.enableEncryption),
    kmip: dataYandexMdbMongodbClusterClusterConfigMongodSecurityKmipToTerraform(struct!.kmip),
  }
}


export function dataYandexMdbMongodbClusterClusterConfigMongodSecurityToHclTerraform(struct?: DataYandexMdbMongodbClusterClusterConfigMongodSecurityOutputReference | DataYandexMdbMongodbClusterClusterConfigMongodSecurity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_encryption: {
      value: cdktf.booleanToHclTerraform(struct!.enableEncryption),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    kmip: {
      value: dataYandexMdbMongodbClusterClusterConfigMongodSecurityKmipToHclTerraform(struct!.kmip),
      isBlock: true,
      type: "list",
      storageClassType: "DataYandexMdbMongodbClusterClusterConfigMongodSecurityKmipList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataYandexMdbMongodbClusterClusterConfigMongodSecurityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataYandexMdbMongodbClusterClusterConfigMongodSecurity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableEncryption !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableEncryption = this._enableEncryption;
    }
    if (this._kmip?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmip = this._kmip?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbMongodbClusterClusterConfigMongodSecurity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableEncryption = undefined;
      this._kmip.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableEncryption = value.enableEncryption;
      this._kmip.internalValue = value.kmip;
    }
  }

  // enable_encryption - computed: false, optional: true, required: false
  private _enableEncryption?: boolean | cdktf.IResolvable; 
  public get enableEncryption() {
    return this.getBooleanAttribute('enable_encryption');
  }
  public set enableEncryption(value: boolean | cdktf.IResolvable) {
    this._enableEncryption = value;
  }
  public resetEnableEncryption() {
    this._enableEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableEncryptionInput() {
    return this._enableEncryption;
  }

  // kmip - computed: false, optional: true, required: false
  private _kmip = new DataYandexMdbMongodbClusterClusterConfigMongodSecurityKmipOutputReference(this, "kmip");
  public get kmip() {
    return this._kmip;
  }
  public putKmip(value: DataYandexMdbMongodbClusterClusterConfigMongodSecurityKmip) {
    this._kmip.internalValue = value;
  }
  public resetKmip() {
    this._kmip.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmipInput() {
    return this._kmip.internalValue;
  }
}
export interface DataYandexMdbMongodbClusterClusterConfigMongodSetParameter {
  /**
  * Enables the auditing of authorization successes. Can be either true or false. For more information, see the [auditAuthorizationSuccess](https://www.mongodb.com/docs/manual/reference/parameters/#mongodb-parameter-param.auditAuthorizationSuccess) description in the official documentation. Available only in enterprise edition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/mdb_mongodb_cluster#audit_authorization_success DataYandexMdbMongodbCluster#audit_authorization_success}
  */
  readonly auditAuthorizationSuccess?: boolean | cdktf.IResolvable;
  /**
  * Enables the flow control. Can be either true or false. For more information, see the [enableFlowControl](https://www.mongodb.com/docs/rapid/reference/parameters/#mongodb-parameter-param.enableFlowControl) description in the official documentation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/mdb_mongodb_cluster#enable_flow_control DataYandexMdbMongodbCluster#enable_flow_control}
  */
  readonly enableFlowControl?: boolean | cdktf.IResolvable;
  /**
  * The minimum time window in seconds for which the storage engine keeps the snapshot history. For more information, see the [minSnapshotHistoryWindowInSeconds](https://www.mongodb.com/docs/manual/reference/parameters/#mongodb-parameter-param.minSnapshotHistoryWindowInSeconds) description in the official documentation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/mdb_mongodb_cluster#min_snapshot_history_window_in_seconds DataYandexMdbMongodbCluster#min_snapshot_history_window_in_seconds}
  */
  readonly minSnapshotHistoryWindowInSeconds?: number;
}

export function dataYandexMdbMongodbClusterClusterConfigMongodSetParameterToTerraform(struct?: DataYandexMdbMongodbClusterClusterConfigMongodSetParameterOutputReference | DataYandexMdbMongodbClusterClusterConfigMongodSetParameter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audit_authorization_success: cdktf.booleanToTerraform(struct!.auditAuthorizationSuccess),
    enable_flow_control: cdktf.booleanToTerraform(struct!.enableFlowControl),
    min_snapshot_history_window_in_seconds: cdktf.numberToTerraform(struct!.minSnapshotHistoryWindowInSeconds),
  }
}


export function dataYandexMdbMongodbClusterClusterConfigMongodSetParameterToHclTerraform(struct?: DataYandexMdbMongodbClusterClusterConfigMongodSetParameterOutputReference | DataYandexMdbMongodbClusterClusterConfigMongodSetParameter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    audit_authorization_success: {
      value: cdktf.booleanToHclTerraform(struct!.auditAuthorizationSuccess),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_flow_control: {
      value: cdktf.booleanToHclTerraform(struct!.enableFlowControl),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    min_snapshot_history_window_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.minSnapshotHistoryWindowInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataYandexMdbMongodbClusterClusterConfigMongodSetParameterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataYandexMdbMongodbClusterClusterConfigMongodSetParameter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._auditAuthorizationSuccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.auditAuthorizationSuccess = this._auditAuthorizationSuccess;
    }
    if (this._enableFlowControl !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableFlowControl = this._enableFlowControl;
    }
    if (this._minSnapshotHistoryWindowInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.minSnapshotHistoryWindowInSeconds = this._minSnapshotHistoryWindowInSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbMongodbClusterClusterConfigMongodSetParameter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._auditAuthorizationSuccess = undefined;
      this._enableFlowControl = undefined;
      this._minSnapshotHistoryWindowInSeconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._auditAuthorizationSuccess = value.auditAuthorizationSuccess;
      this._enableFlowControl = value.enableFlowControl;
      this._minSnapshotHistoryWindowInSeconds = value.minSnapshotHistoryWindowInSeconds;
    }
  }

  // audit_authorization_success - computed: false, optional: true, required: false
  private _auditAuthorizationSuccess?: boolean | cdktf.IResolvable; 
  public get auditAuthorizationSuccess() {
    return this.getBooleanAttribute('audit_authorization_success');
  }
  public set auditAuthorizationSuccess(value: boolean | cdktf.IResolvable) {
    this._auditAuthorizationSuccess = value;
  }
  public resetAuditAuthorizationSuccess() {
    this._auditAuthorizationSuccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditAuthorizationSuccessInput() {
    return this._auditAuthorizationSuccess;
  }

  // enable_flow_control - computed: false, optional: true, required: false
  private _enableFlowControl?: boolean | cdktf.IResolvable; 
  public get enableFlowControl() {
    return this.getBooleanAttribute('enable_flow_control');
  }
  public set enableFlowControl(value: boolean | cdktf.IResolvable) {
    this._enableFlowControl = value;
  }
  public resetEnableFlowControl() {
    this._enableFlowControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableFlowControlInput() {
    return this._enableFlowControl;
  }

  // min_snapshot_history_window_in_seconds - computed: false, optional: true, required: false
  private _minSnapshotHistoryWindowInSeconds?: number; 
  public get minSnapshotHistoryWindowInSeconds() {
    return this.getNumberAttribute('min_snapshot_history_window_in_seconds');
  }
  public set minSnapshotHistoryWindowInSeconds(value: number) {
    this._minSnapshotHistoryWindowInSeconds = value;
  }
  public resetMinSnapshotHistoryWindowInSeconds() {
    this._minSnapshotHistoryWindowInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minSnapshotHistoryWindowInSecondsInput() {
    return this._minSnapshotHistoryWindowInSeconds;
  }
}
export interface DataYandexMdbMongodbClusterClusterConfigMongodStorageJournal {
  /**
  * The maximum amount of time in milliseconds that the mongod process allows between journal operations. For more information, see the [storage.journal.commitIntervalMs](https://www.mongodb.com/docs/manual/reference/configuration-options/#mongodb-setting-storage.journal.commitIntervalMs) description in the official documentation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/mdb_mongodb_cluster#commit_interval DataYandexMdbMongodbCluster#commit_interval}
  */
  readonly commitInterval?: number;
}

export function dataYandexMdbMongodbClusterClusterConfigMongodStorageJournalToTerraform(struct?: DataYandexMdbMongodbClusterClusterConfigMongodStorageJournalOutputReference | DataYandexMdbMongodbClusterClusterConfigMongodStorageJournal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    commit_interval: cdktf.numberToTerraform(struct!.commitInterval),
  }
}


export function dataYandexMdbMongodbClusterClusterConfigMongodStorageJournalToHclTerraform(struct?: DataYandexMdbMongodbClusterClusterConfigMongodStorageJournalOutputReference | DataYandexMdbMongodbClusterClusterConfigMongodStorageJournal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    commit_interval: {
      value: cdktf.numberToHclTerraform(struct!.commitInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataYandexMdbMongodbClusterClusterConfigMongodStorageJournalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataYandexMdbMongodbClusterClusterConfigMongodStorageJournal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._commitInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.commitInterval = this._commitInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbMongodbClusterClusterConfigMongodStorageJournal | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._commitInterval = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._commitInterval = value.commitInterval;
    }
  }

  // commit_interval - computed: false, optional: true, required: false
  private _commitInterval?: number; 
  public get commitInterval() {
    return this.getNumberAttribute('commit_interval');
  }
  public set commitInterval(value: number) {
    this._commitInterval = value;
  }
  public resetCommitInterval() {
    this._commitInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commitIntervalInput() {
    return this._commitInterval;
  }
}
export interface DataYandexMdbMongodbClusterClusterConfigMongodStorageWiredTiger {
  /**
  * Specifies the default compression for collection data. You can override this on a per-collection basis when creating collections. Available compressors are: none, snappy, zlib, zstd. This setting available only on `mongod` hosts. For more information, see the [storage.wiredTiger.collectionConfig.blockCompressor](https://www.mongodb.com/docs/manual/reference/configuration-options/#mongodb-setting-storage.wiredTiger.collectionConfig.blockCompressor) description in the official documentation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/mdb_mongodb_cluster#block_compressor DataYandexMdbMongodbCluster#block_compressor}
  */
  readonly blockCompressor?: string;
  /**
  * Defines the maximum size of the internal cache that WiredTiger will use for all data. For more information, see the [storage.wiredTiger.engineConfig.cacheSizeGB](https://www.mongodb.com/docs/manual/reference/configuration-options/#mongodb-setting-storage.wiredTiger.engineConfig.cacheSizeGB) description in the official documentation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/mdb_mongodb_cluster#cache_size_gb DataYandexMdbMongodbCluster#cache_size_gb}
  */
  readonly cacheSizeGb?: number;
  /**
  * Enables or disables prefix compression for index data. Сan be either true or false. For more information, see the [storage.wiredTiger.indexConfig.prefixCompression](https://www.mongodb.com/docs/manual/reference/configuration-options/#mongodb-setting-storage.wiredTiger.indexConfig.prefixCompression) description in the official documentation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/mdb_mongodb_cluster#prefix_compression DataYandexMdbMongodbCluster#prefix_compression}
  */
  readonly prefixCompression?: boolean | cdktf.IResolvable;
}

export function dataYandexMdbMongodbClusterClusterConfigMongodStorageWiredTigerToTerraform(struct?: DataYandexMdbMongodbClusterClusterConfigMongodStorageWiredTigerOutputReference | DataYandexMdbMongodbClusterClusterConfigMongodStorageWiredTiger): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    block_compressor: cdktf.stringToTerraform(struct!.blockCompressor),
    cache_size_gb: cdktf.numberToTerraform(struct!.cacheSizeGb),
    prefix_compression: cdktf.booleanToTerraform(struct!.prefixCompression),
  }
}


export function dataYandexMdbMongodbClusterClusterConfigMongodStorageWiredTigerToHclTerraform(struct?: DataYandexMdbMongodbClusterClusterConfigMongodStorageWiredTigerOutputReference | DataYandexMdbMongodbClusterClusterConfigMongodStorageWiredTiger): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    block_compressor: {
      value: cdktf.stringToHclTerraform(struct!.blockCompressor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cache_size_gb: {
      value: cdktf.numberToHclTerraform(struct!.cacheSizeGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prefix_compression: {
      value: cdktf.booleanToHclTerraform(struct!.prefixCompression),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataYandexMdbMongodbClusterClusterConfigMongodStorageWiredTigerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataYandexMdbMongodbClusterClusterConfigMongodStorageWiredTiger | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blockCompressor !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockCompressor = this._blockCompressor;
    }
    if (this._cacheSizeGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheSizeGb = this._cacheSizeGb;
    }
    if (this._prefixCompression !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixCompression = this._prefixCompression;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbMongodbClusterClusterConfigMongodStorageWiredTiger | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blockCompressor = undefined;
      this._cacheSizeGb = undefined;
      this._prefixCompression = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blockCompressor = value.blockCompressor;
      this._cacheSizeGb = value.cacheSizeGb;
      this._prefixCompression = value.prefixCompression;
    }
  }

  // block_compressor - computed: false, optional: true, required: false
  private _blockCompressor?: string; 
  public get blockCompressor() {
    return this.getStringAttribute('block_compressor');
  }
  public set blockCompressor(value: string) {
    this._blockCompressor = value;
  }
  public resetBlockCompressor() {
    this._blockCompressor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockCompressorInput() {
    return this._blockCompressor;
  }

  // cache_size_gb - computed: false, optional: true, required: false
  private _cacheSizeGb?: number; 
  public get cacheSizeGb() {
    return this.getNumberAttribute('cache_size_gb');
  }
  public set cacheSizeGb(value: number) {
    this._cacheSizeGb = value;
  }
  public resetCacheSizeGb() {
    this._cacheSizeGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheSizeGbInput() {
    return this._cacheSizeGb;
  }

  // prefix_compression - computed: false, optional: true, required: false
  private _prefixCompression?: boolean | cdktf.IResolvable; 
  public get prefixCompression() {
    return this.getBooleanAttribute('prefix_compression');
  }
  public set prefixCompression(value: boolean | cdktf.IResolvable) {
    this._prefixCompression = value;
  }
  public resetPrefixCompression() {
    this._prefixCompression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixCompressionInput() {
    return this._prefixCompression;
  }
}
export interface DataYandexMdbMongodbClusterClusterConfigMongodStorage {
  /**
  * journal block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/mdb_mongodb_cluster#journal DataYandexMdbMongodbCluster#journal}
  */
  readonly journal?: DataYandexMdbMongodbClusterClusterConfigMongodStorageJournal;
  /**
  * wired_tiger block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/mdb_mongodb_cluster#wired_tiger DataYandexMdbMongodbCluster#wired_tiger}
  */
  readonly wiredTiger?: DataYandexMdbMongodbClusterClusterConfigMongodStorageWiredTiger;
}

export function dataYandexMdbMongodbClusterClusterConfigMongodStorageToTerraform(struct?: DataYandexMdbMongodbClusterClusterConfigMongodStorageOutputReference | DataYandexMdbMongodbClusterClusterConfigMongodStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    journal: dataYandexMdbMongodbClusterClusterConfigMongodStorageJournalToTerraform(struct!.journal),
    wired_tiger: dataYandexMdbMongodbClusterClusterConfigMongodStorageWiredTigerToTerraform(struct!.wiredTiger),
  }
}


export function dataYandexMdbMongodbClusterClusterConfigMongodStorageToHclTerraform(struct?: DataYandexMdbMongodbClusterClusterConfigMongodStorageOutputReference | DataYandexMdbMongodbClusterClusterConfigMongodStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    journal: {
      value: dataYandexMdbMongodbClusterClusterConfigMongodStorageJournalToHclTerraform(struct!.journal),
      isBlock: true,
      type: "list",
      storageClassType: "DataYandexMdbMongodbClusterClusterConfigMongodStorageJournalList",
    },
    wired_tiger: {
      value: dataYandexMdbMongodbClusterClusterConfigMongodStorageWiredTigerToHclTerraform(struct!.wiredTiger),
      isBlock: true,
      type: "list",
      storageClassType: "DataYandexMdbMongodbClusterClusterConfigMongodStorageWiredTigerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataYandexMdbMongodbClusterClusterConfigMongodStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataYandexMdbMongodbClusterClusterConfigMongodStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._journal?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.journal = this._journal?.internalValue;
    }
    if (this._wiredTiger?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.wiredTiger = this._wiredTiger?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbMongodbClusterClusterConfigMongodStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._journal.internalValue = undefined;
      this._wiredTiger.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._journal.internalValue = value.journal;
      this._wiredTiger.internalValue = value.wiredTiger;
    }
  }

  // journal - computed: false, optional: true, required: false
  private _journal = new DataYandexMdbMongodbClusterClusterConfigMongodStorageJournalOutputReference(this, "journal");
  public get journal() {
    return this._journal;
  }
  public putJournal(value: DataYandexMdbMongodbClusterClusterConfigMongodStorageJournal) {
    this._journal.internalValue = value;
  }
  public resetJournal() {
    this._journal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get journalInput() {
    return this._journal.internalValue;
  }

  // wired_tiger - computed: false, optional: true, required: false
  private _wiredTiger = new DataYandexMdbMongodbClusterClusterConfigMongodStorageWiredTigerOutputReference(this, "wired_tiger");
  public get wiredTiger() {
    return this._wiredTiger;
  }
  public putWiredTiger(value: DataYandexMdbMongodbClusterClusterConfigMongodStorageWiredTiger) {
    this._wiredTiger.internalValue = value;
  }
  public resetWiredTiger() {
    this._wiredTiger.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wiredTigerInput() {
    return this._wiredTiger.internalValue;
  }
}
export interface DataYandexMdbMongodbClusterClusterConfigMongod {
  /**
  * audit_log block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/mdb_mongodb_cluster#audit_log DataYandexMdbMongodbCluster#audit_log}
  */
  readonly auditLog?: DataYandexMdbMongodbClusterClusterConfigMongodAuditLog;
  /**
  * net block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/mdb_mongodb_cluster#net DataYandexMdbMongodbCluster#net}
  */
  readonly net?: DataYandexMdbMongodbClusterClusterConfigMongodNet;
  /**
  * operation_profiling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/mdb_mongodb_cluster#operation_profiling DataYandexMdbMongodbCluster#operation_profiling}
  */
  readonly operationProfiling?: DataYandexMdbMongodbClusterClusterConfigMongodOperationProfiling;
  /**
  * security block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/mdb_mongodb_cluster#security DataYandexMdbMongodbCluster#security}
  */
  readonly security?: DataYandexMdbMongodbClusterClusterConfigMongodSecurity;
  /**
  * set_parameter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/mdb_mongodb_cluster#set_parameter DataYandexMdbMongodbCluster#set_parameter}
  */
  readonly setParameter?: DataYandexMdbMongodbClusterClusterConfigMongodSetParameter;
  /**
  * storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/mdb_mongodb_cluster#storage DataYandexMdbMongodbCluster#storage}
  */
  readonly storage?: DataYandexMdbMongodbClusterClusterConfigMongodStorage;
}

export function dataYandexMdbMongodbClusterClusterConfigMongodToTerraform(struct?: DataYandexMdbMongodbClusterClusterConfigMongodOutputReference | DataYandexMdbMongodbClusterClusterConfigMongod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audit_log: dataYandexMdbMongodbClusterClusterConfigMongodAuditLogToTerraform(struct!.auditLog),
    net: dataYandexMdbMongodbClusterClusterConfigMongodNetToTerraform(struct!.net),
    operation_profiling: dataYandexMdbMongodbClusterClusterConfigMongodOperationProfilingToTerraform(struct!.operationProfiling),
    security: dataYandexMdbMongodbClusterClusterConfigMongodSecurityToTerraform(struct!.security),
    set_parameter: dataYandexMdbMongodbClusterClusterConfigMongodSetParameterToTerraform(struct!.setParameter),
    storage: dataYandexMdbMongodbClusterClusterConfigMongodStorageToTerraform(struct!.storage),
  }
}


export function dataYandexMdbMongodbClusterClusterConfigMongodToHclTerraform(struct?: DataYandexMdbMongodbClusterClusterConfigMongodOutputReference | DataYandexMdbMongodbClusterClusterConfigMongod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    audit_log: {
      value: dataYandexMdbMongodbClusterClusterConfigMongodAuditLogToHclTerraform(struct!.auditLog),
      isBlock: true,
      type: "list",
      storageClassType: "DataYandexMdbMongodbClusterClusterConfigMongodAuditLogList",
    },
    net: {
      value: dataYandexMdbMongodbClusterClusterConfigMongodNetToHclTerraform(struct!.net),
      isBlock: true,
      type: "list",
      storageClassType: "DataYandexMdbMongodbClusterClusterConfigMongodNetList",
    },
    operation_profiling: {
      value: dataYandexMdbMongodbClusterClusterConfigMongodOperationProfilingToHclTerraform(struct!.operationProfiling),
      isBlock: true,
      type: "list",
      storageClassType: "DataYandexMdbMongodbClusterClusterConfigMongodOperationProfilingList",
    },
    security: {
      value: dataYandexMdbMongodbClusterClusterConfigMongodSecurityToHclTerraform(struct!.security),
      isBlock: true,
      type: "list",
      storageClassType: "DataYandexMdbMongodbClusterClusterConfigMongodSecurityList",
    },
    set_parameter: {
      value: dataYandexMdbMongodbClusterClusterConfigMongodSetParameterToHclTerraform(struct!.setParameter),
      isBlock: true,
      type: "list",
      storageClassType: "DataYandexMdbMongodbClusterClusterConfigMongodSetParameterList",
    },
    storage: {
      value: dataYandexMdbMongodbClusterClusterConfigMongodStorageToHclTerraform(struct!.storage),
      isBlock: true,
      type: "list",
      storageClassType: "DataYandexMdbMongodbClusterClusterConfigMongodStorageList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataYandexMdbMongodbClusterClusterConfigMongodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataYandexMdbMongodbClusterClusterConfigMongod | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._auditLog?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.auditLog = this._auditLog?.internalValue;
    }
    if (this._net?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.net = this._net?.internalValue;
    }
    if (this._operationProfiling?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.operationProfiling = this._operationProfiling?.internalValue;
    }
    if (this._security?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.security = this._security?.internalValue;
    }
    if (this._setParameter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.setParameter = this._setParameter?.internalValue;
    }
    if (this._storage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storage = this._storage?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbMongodbClusterClusterConfigMongod | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._auditLog.internalValue = undefined;
      this._net.internalValue = undefined;
      this._operationProfiling.internalValue = undefined;
      this._security.internalValue = undefined;
      this._setParameter.internalValue = undefined;
      this._storage.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._auditLog.internalValue = value.auditLog;
      this._net.internalValue = value.net;
      this._operationProfiling.internalValue = value.operationProfiling;
      this._security.internalValue = value.security;
      this._setParameter.internalValue = value.setParameter;
      this._storage.internalValue = value.storage;
    }
  }

  // audit_log - computed: false, optional: true, required: false
  private _auditLog = new DataYandexMdbMongodbClusterClusterConfigMongodAuditLogOutputReference(this, "audit_log");
  public get auditLog() {
    return this._auditLog;
  }
  public putAuditLog(value: DataYandexMdbMongodbClusterClusterConfigMongodAuditLog) {
    this._auditLog.internalValue = value;
  }
  public resetAuditLog() {
    this._auditLog.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditLogInput() {
    return this._auditLog.internalValue;
  }

  // net - computed: false, optional: true, required: false
  private _net = new DataYandexMdbMongodbClusterClusterConfigMongodNetOutputReference(this, "net");
  public get net() {
    return this._net;
  }
  public putNet(value: DataYandexMdbMongodbClusterClusterConfigMongodNet) {
    this._net.internalValue = value;
  }
  public resetNet() {
    this._net.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netInput() {
    return this._net.internalValue;
  }

  // operation_profiling - computed: false, optional: true, required: false
  private _operationProfiling = new DataYandexMdbMongodbClusterClusterConfigMongodOperationProfilingOutputReference(this, "operation_profiling");
  public get operationProfiling() {
    return this._operationProfiling;
  }
  public putOperationProfiling(value: DataYandexMdbMongodbClusterClusterConfigMongodOperationProfiling) {
    this._operationProfiling.internalValue = value;
  }
  public resetOperationProfiling() {
    this._operationProfiling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationProfilingInput() {
    return this._operationProfiling.internalValue;
  }

  // security - computed: false, optional: true, required: false
  private _security = new DataYandexMdbMongodbClusterClusterConfigMongodSecurityOutputReference(this, "security");
  public get security() {
    return this._security;
  }
  public putSecurity(value: DataYandexMdbMongodbClusterClusterConfigMongodSecurity) {
    this._security.internalValue = value;
  }
  public resetSecurity() {
    this._security.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityInput() {
    return this._security.internalValue;
  }

  // set_parameter - computed: false, optional: true, required: false
  private _setParameter = new DataYandexMdbMongodbClusterClusterConfigMongodSetParameterOutputReference(this, "set_parameter");
  public get setParameter() {
    return this._setParameter;
  }
  public putSetParameter(value: DataYandexMdbMongodbClusterClusterConfigMongodSetParameter) {
    this._setParameter.internalValue = value;
  }
  public resetSetParameter() {
    this._setParameter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setParameterInput() {
    return this._setParameter.internalValue;
  }

  // storage - computed: false, optional: true, required: false
  private _storage = new DataYandexMdbMongodbClusterClusterConfigMongodStorageOutputReference(this, "storage");
  public get storage() {
    return this._storage;
  }
  public putStorage(value: DataYandexMdbMongodbClusterClusterConfigMongodStorage) {
    this._storage.internalValue = value;
  }
  public resetStorage() {
    this._storage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage.internalValue;
  }
}
export interface DataYandexMdbMongodbClusterClusterConfigMongosNet {
  /**
  * Specifies the default compressor(s) to use for communication between this mongod or mongos. Accepts array of compressors. Order matters. Available compressors: snappy, zlib, zstd, disabled. To disable network compression, make `disabled` the only value. For more information, see the [net.Compression.Compressors](https://www.mongodb.com/docs/manual/reference/configuration-options/#mongodb-setting-net.compression.compressors) description in the official documentation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/mdb_mongodb_cluster#compressors DataYandexMdbMongodbCluster#compressors}
  */
  readonly compressors?: string[];
  /**
  * The maximum number of simultaneous connections that host will accept. For more information, see the [net.maxIncomingConnections](https://www.mongodb.com/docs/manual/reference/configuration-options/#mongodb-setting-net.maxIncomingConnections) description in the official documentation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/mdb_mongodb_cluster#max_incoming_connections DataYandexMdbMongodbCluster#max_incoming_connections}
  */
  readonly maxIncomingConnections?: number;
}

export function dataYandexMdbMongodbClusterClusterConfigMongosNetToTerraform(struct?: DataYandexMdbMongodbClusterClusterConfigMongosNetOutputReference | DataYandexMdbMongodbClusterClusterConfigMongosNet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compressors: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.compressors),
    max_incoming_connections: cdktf.numberToTerraform(struct!.maxIncomingConnections),
  }
}


export function dataYandexMdbMongodbClusterClusterConfigMongosNetToHclTerraform(struct?: DataYandexMdbMongodbClusterClusterConfigMongosNetOutputReference | DataYandexMdbMongodbClusterClusterConfigMongosNet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compressors: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.compressors),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    max_incoming_connections: {
      value: cdktf.numberToHclTerraform(struct!.maxIncomingConnections),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataYandexMdbMongodbClusterClusterConfigMongosNetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataYandexMdbMongodbClusterClusterConfigMongosNet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compressors !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressors = this._compressors;
    }
    if (this._maxIncomingConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxIncomingConnections = this._maxIncomingConnections;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbMongodbClusterClusterConfigMongosNet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._compressors = undefined;
      this._maxIncomingConnections = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._compressors = value.compressors;
      this._maxIncomingConnections = value.maxIncomingConnections;
    }
  }

  // compressors - computed: false, optional: true, required: false
  private _compressors?: string[]; 
  public get compressors() {
    return this.getListAttribute('compressors');
  }
  public set compressors(value: string[]) {
    this._compressors = value;
  }
  public resetCompressors() {
    this._compressors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressorsInput() {
    return this._compressors;
  }

  // max_incoming_connections - computed: false, optional: true, required: false
  private _maxIncomingConnections?: number; 
  public get maxIncomingConnections() {
    return this.getNumberAttribute('max_incoming_connections');
  }
  public set maxIncomingConnections(value: number) {
    this._maxIncomingConnections = value;
  }
  public resetMaxIncomingConnections() {
    this._maxIncomingConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxIncomingConnectionsInput() {
    return this._maxIncomingConnections;
  }
}
export interface DataYandexMdbMongodbClusterClusterConfigMongos {
  /**
  * net block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/mdb_mongodb_cluster#net DataYandexMdbMongodbCluster#net}
  */
  readonly net?: DataYandexMdbMongodbClusterClusterConfigMongosNet;
}

export function dataYandexMdbMongodbClusterClusterConfigMongosToTerraform(struct?: DataYandexMdbMongodbClusterClusterConfigMongosOutputReference | DataYandexMdbMongodbClusterClusterConfigMongos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    net: dataYandexMdbMongodbClusterClusterConfigMongosNetToTerraform(struct!.net),
  }
}


export function dataYandexMdbMongodbClusterClusterConfigMongosToHclTerraform(struct?: DataYandexMdbMongodbClusterClusterConfigMongosOutputReference | DataYandexMdbMongodbClusterClusterConfigMongos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    net: {
      value: dataYandexMdbMongodbClusterClusterConfigMongosNetToHclTerraform(struct!.net),
      isBlock: true,
      type: "list",
      storageClassType: "DataYandexMdbMongodbClusterClusterConfigMongosNetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataYandexMdbMongodbClusterClusterConfigMongosOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataYandexMdbMongodbClusterClusterConfigMongos | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._net?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.net = this._net?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbMongodbClusterClusterConfigMongos | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._net.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._net.internalValue = value.net;
    }
  }

  // net - computed: false, optional: true, required: false
  private _net = new DataYandexMdbMongodbClusterClusterConfigMongosNetOutputReference(this, "net");
  public get net() {
    return this._net;
  }
  public putNet(value: DataYandexMdbMongodbClusterClusterConfigMongosNet) {
    this._net.internalValue = value;
  }
  public resetNet() {
    this._net.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netInput() {
    return this._net.internalValue;
  }
}
export interface DataYandexMdbMongodbClusterClusterConfigPerformanceDiagnostics {
  /**
  * Enable or disable performance diagnostics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/mdb_mongodb_cluster#enabled DataYandexMdbMongodbCluster#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function dataYandexMdbMongodbClusterClusterConfigPerformanceDiagnosticsToTerraform(struct?: DataYandexMdbMongodbClusterClusterConfigPerformanceDiagnosticsOutputReference | DataYandexMdbMongodbClusterClusterConfigPerformanceDiagnostics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function dataYandexMdbMongodbClusterClusterConfigPerformanceDiagnosticsToHclTerraform(struct?: DataYandexMdbMongodbClusterClusterConfigPerformanceDiagnosticsOutputReference | DataYandexMdbMongodbClusterClusterConfigPerformanceDiagnostics): any {
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

export class DataYandexMdbMongodbClusterClusterConfigPerformanceDiagnosticsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataYandexMdbMongodbClusterClusterConfigPerformanceDiagnostics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbMongodbClusterClusterConfigPerformanceDiagnostics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
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
}
export interface DataYandexMdbMongodbClusterClusterConfig {
  /**
  * Retain period of automatically created backup in days.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/mdb_mongodb_cluster#backup_retain_period_days DataYandexMdbMongodbCluster#backup_retain_period_days}
  */
  readonly backupRetainPeriodDays?: number;
  /**
  * Feature compatibility version of MongoDB. If not provided version is taken. Can be either `6.0`, `5.0`, `4.4` and `4.2`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/mdb_mongodb_cluster#feature_compatibility_version DataYandexMdbMongodbCluster#feature_compatibility_version}
  */
  readonly featureCompatibilityVersion?: string;
  /**
  * Version of the MongoDB server software. Can be either `4.2`, `4.4`, `4.4-enterprise`, `5.0`, `5.0-enterprise`, `6.0` and `6.0-enterprise`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/mdb_mongodb_cluster#version DataYandexMdbMongodbCluster#version}
  */
  readonly version?: string;
  /**
  * access block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/mdb_mongodb_cluster#access DataYandexMdbMongodbCluster#access}
  */
  readonly access?: DataYandexMdbMongodbClusterClusterConfigAccess;
  /**
  * backup_window_start block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/mdb_mongodb_cluster#backup_window_start DataYandexMdbMongodbCluster#backup_window_start}
  */
  readonly backupWindowStart?: DataYandexMdbMongodbClusterClusterConfigBackupWindowStart;
  /**
  * mongocfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/mdb_mongodb_cluster#mongocfg DataYandexMdbMongodbCluster#mongocfg}
  */
  readonly mongocfg?: DataYandexMdbMongodbClusterClusterConfigMongocfg;
  /**
  * mongod block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/mdb_mongodb_cluster#mongod DataYandexMdbMongodbCluster#mongod}
  */
  readonly mongod?: DataYandexMdbMongodbClusterClusterConfigMongod;
  /**
  * mongos block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/mdb_mongodb_cluster#mongos DataYandexMdbMongodbCluster#mongos}
  */
  readonly mongos?: DataYandexMdbMongodbClusterClusterConfigMongos;
  /**
  * performance_diagnostics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/mdb_mongodb_cluster#performance_diagnostics DataYandexMdbMongodbCluster#performance_diagnostics}
  */
  readonly performanceDiagnostics?: DataYandexMdbMongodbClusterClusterConfigPerformanceDiagnostics;
}

export function dataYandexMdbMongodbClusterClusterConfigToTerraform(struct?: DataYandexMdbMongodbClusterClusterConfigOutputReference | DataYandexMdbMongodbClusterClusterConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backup_retain_period_days: cdktf.numberToTerraform(struct!.backupRetainPeriodDays),
    feature_compatibility_version: cdktf.stringToTerraform(struct!.featureCompatibilityVersion),
    version: cdktf.stringToTerraform(struct!.version),
    access: dataYandexMdbMongodbClusterClusterConfigAccessToTerraform(struct!.access),
    backup_window_start: dataYandexMdbMongodbClusterClusterConfigBackupWindowStartToTerraform(struct!.backupWindowStart),
    mongocfg: dataYandexMdbMongodbClusterClusterConfigMongocfgToTerraform(struct!.mongocfg),
    mongod: dataYandexMdbMongodbClusterClusterConfigMongodToTerraform(struct!.mongod),
    mongos: dataYandexMdbMongodbClusterClusterConfigMongosToTerraform(struct!.mongos),
    performance_diagnostics: dataYandexMdbMongodbClusterClusterConfigPerformanceDiagnosticsToTerraform(struct!.performanceDiagnostics),
  }
}


export function dataYandexMdbMongodbClusterClusterConfigToHclTerraform(struct?: DataYandexMdbMongodbClusterClusterConfigOutputReference | DataYandexMdbMongodbClusterClusterConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backup_retain_period_days: {
      value: cdktf.numberToHclTerraform(struct!.backupRetainPeriodDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    feature_compatibility_version: {
      value: cdktf.stringToHclTerraform(struct!.featureCompatibilityVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    access: {
      value: dataYandexMdbMongodbClusterClusterConfigAccessToHclTerraform(struct!.access),
      isBlock: true,
      type: "list",
      storageClassType: "DataYandexMdbMongodbClusterClusterConfigAccessList",
    },
    backup_window_start: {
      value: dataYandexMdbMongodbClusterClusterConfigBackupWindowStartToHclTerraform(struct!.backupWindowStart),
      isBlock: true,
      type: "list",
      storageClassType: "DataYandexMdbMongodbClusterClusterConfigBackupWindowStartList",
    },
    mongocfg: {
      value: dataYandexMdbMongodbClusterClusterConfigMongocfgToHclTerraform(struct!.mongocfg),
      isBlock: true,
      type: "list",
      storageClassType: "DataYandexMdbMongodbClusterClusterConfigMongocfgList",
    },
    mongod: {
      value: dataYandexMdbMongodbClusterClusterConfigMongodToHclTerraform(struct!.mongod),
      isBlock: true,
      type: "list",
      storageClassType: "DataYandexMdbMongodbClusterClusterConfigMongodList",
    },
    mongos: {
      value: dataYandexMdbMongodbClusterClusterConfigMongosToHclTerraform(struct!.mongos),
      isBlock: true,
      type: "list",
      storageClassType: "DataYandexMdbMongodbClusterClusterConfigMongosList",
    },
    performance_diagnostics: {
      value: dataYandexMdbMongodbClusterClusterConfigPerformanceDiagnosticsToHclTerraform(struct!.performanceDiagnostics),
      isBlock: true,
      type: "list",
      storageClassType: "DataYandexMdbMongodbClusterClusterConfigPerformanceDiagnosticsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataYandexMdbMongodbClusterClusterConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataYandexMdbMongodbClusterClusterConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backupRetainPeriodDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupRetainPeriodDays = this._backupRetainPeriodDays;
    }
    if (this._featureCompatibilityVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.featureCompatibilityVersion = this._featureCompatibilityVersion;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._access?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.access = this._access?.internalValue;
    }
    if (this._backupWindowStart?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupWindowStart = this._backupWindowStart?.internalValue;
    }
    if (this._mongocfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mongocfg = this._mongocfg?.internalValue;
    }
    if (this._mongod?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mongod = this._mongod?.internalValue;
    }
    if (this._mongos?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mongos = this._mongos?.internalValue;
    }
    if (this._performanceDiagnostics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.performanceDiagnostics = this._performanceDiagnostics?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbMongodbClusterClusterConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._backupRetainPeriodDays = undefined;
      this._featureCompatibilityVersion = undefined;
      this._version = undefined;
      this._access.internalValue = undefined;
      this._backupWindowStart.internalValue = undefined;
      this._mongocfg.internalValue = undefined;
      this._mongod.internalValue = undefined;
      this._mongos.internalValue = undefined;
      this._performanceDiagnostics.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._backupRetainPeriodDays = value.backupRetainPeriodDays;
      this._featureCompatibilityVersion = value.featureCompatibilityVersion;
      this._version = value.version;
      this._access.internalValue = value.access;
      this._backupWindowStart.internalValue = value.backupWindowStart;
      this._mongocfg.internalValue = value.mongocfg;
      this._mongod.internalValue = value.mongod;
      this._mongos.internalValue = value.mongos;
      this._performanceDiagnostics.internalValue = value.performanceDiagnostics;
    }
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

  // feature_compatibility_version - computed: true, optional: true, required: false
  private _featureCompatibilityVersion?: string; 
  public get featureCompatibilityVersion() {
    return this.getStringAttribute('feature_compatibility_version');
  }
  public set featureCompatibilityVersion(value: string) {
    this._featureCompatibilityVersion = value;
  }
  public resetFeatureCompatibilityVersion() {
    this._featureCompatibilityVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featureCompatibilityVersionInput() {
    return this._featureCompatibilityVersion;
  }

  // version - computed: false, optional: true, required: false
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
  private _access = new DataYandexMdbMongodbClusterClusterConfigAccessOutputReference(this, "access");
  public get access() {
    return this._access;
  }
  public putAccess(value: DataYandexMdbMongodbClusterClusterConfigAccess) {
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
  private _backupWindowStart = new DataYandexMdbMongodbClusterClusterConfigBackupWindowStartOutputReference(this, "backup_window_start");
  public get backupWindowStart() {
    return this._backupWindowStart;
  }
  public putBackupWindowStart(value: DataYandexMdbMongodbClusterClusterConfigBackupWindowStart) {
    this._backupWindowStart.internalValue = value;
  }
  public resetBackupWindowStart() {
    this._backupWindowStart.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupWindowStartInput() {
    return this._backupWindowStart.internalValue;
  }

  // mongocfg - computed: false, optional: true, required: false
  private _mongocfg = new DataYandexMdbMongodbClusterClusterConfigMongocfgOutputReference(this, "mongocfg");
  public get mongocfg() {
    return this._mongocfg;
  }
  public putMongocfg(value: DataYandexMdbMongodbClusterClusterConfigMongocfg) {
    this._mongocfg.internalValue = value;
  }
  public resetMongocfg() {
    this._mongocfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mongocfgInput() {
    return this._mongocfg.internalValue;
  }

  // mongod - computed: false, optional: true, required: false
  private _mongod = new DataYandexMdbMongodbClusterClusterConfigMongodOutputReference(this, "mongod");
  public get mongod() {
    return this._mongod;
  }
  public putMongod(value: DataYandexMdbMongodbClusterClusterConfigMongod) {
    this._mongod.internalValue = value;
  }
  public resetMongod() {
    this._mongod.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mongodInput() {
    return this._mongod.internalValue;
  }

  // mongos - computed: false, optional: true, required: false
  private _mongos = new DataYandexMdbMongodbClusterClusterConfigMongosOutputReference(this, "mongos");
  public get mongos() {
    return this._mongos;
  }
  public putMongos(value: DataYandexMdbMongodbClusterClusterConfigMongos) {
    this._mongos.internalValue = value;
  }
  public resetMongos() {
    this._mongos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mongosInput() {
    return this._mongos.internalValue;
  }

  // performance_diagnostics - computed: false, optional: true, required: false
  private _performanceDiagnostics = new DataYandexMdbMongodbClusterClusterConfigPerformanceDiagnosticsOutputReference(this, "performance_diagnostics");
  public get performanceDiagnostics() {
    return this._performanceDiagnostics;
  }
  public putPerformanceDiagnostics(value: DataYandexMdbMongodbClusterClusterConfigPerformanceDiagnostics) {
    this._performanceDiagnostics.internalValue = value;
  }
  public resetPerformanceDiagnostics() {
    this._performanceDiagnostics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get performanceDiagnosticsInput() {
    return this._performanceDiagnostics.internalValue;
  }
}
export interface DataYandexMdbMongodbClusterDatabase {
  /**
  * The name of the database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/mdb_mongodb_cluster#name DataYandexMdbMongodbCluster#name}
  */
  readonly name?: string;
}

export function dataYandexMdbMongodbClusterDatabaseToTerraform(struct?: DataYandexMdbMongodbClusterDatabase | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataYandexMdbMongodbClusterDatabaseToHclTerraform(struct?: DataYandexMdbMongodbClusterDatabase | cdktf.IResolvable): any {
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

export class DataYandexMdbMongodbClusterDatabaseOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexMdbMongodbClusterDatabase | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataYandexMdbMongodbClusterDatabase | cdktf.IResolvable | undefined) {
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

export class DataYandexMdbMongodbClusterDatabaseList extends cdktf.ComplexList {
  public internalValue? : DataYandexMdbMongodbClusterDatabase[] | cdktf.IResolvable

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
  public get(index: number): DataYandexMdbMongodbClusterDatabaseOutputReference {
    return new DataYandexMdbMongodbClusterDatabaseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexMdbMongodbClusterDiskSizeAutoscalingMongocfg {
  /**
  * Limit of disk size after autoscaling (GiB).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/mdb_mongodb_cluster#disk_size_limit DataYandexMdbMongodbCluster#disk_size_limit}
  */
  readonly diskSizeLimit?: number;
  /**
  * Immediate autoscaling disk usage (percent).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/mdb_mongodb_cluster#emergency_usage_threshold DataYandexMdbMongodbCluster#emergency_usage_threshold}
  */
  readonly emergencyUsageThreshold?: number;
  /**
  * Maintenance window autoscaling disk usage (percent).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/mdb_mongodb_cluster#planned_usage_threshold DataYandexMdbMongodbCluster#planned_usage_threshold}
  */
  readonly plannedUsageThreshold?: number;
}

export function dataYandexMdbMongodbClusterDiskSizeAutoscalingMongocfgToTerraform(struct?: DataYandexMdbMongodbClusterDiskSizeAutoscalingMongocfgOutputReference | DataYandexMdbMongodbClusterDiskSizeAutoscalingMongocfg): any {
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


export function dataYandexMdbMongodbClusterDiskSizeAutoscalingMongocfgToHclTerraform(struct?: DataYandexMdbMongodbClusterDiskSizeAutoscalingMongocfgOutputReference | DataYandexMdbMongodbClusterDiskSizeAutoscalingMongocfg): any {
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

export class DataYandexMdbMongodbClusterDiskSizeAutoscalingMongocfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataYandexMdbMongodbClusterDiskSizeAutoscalingMongocfg | undefined {
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

  public set internalValue(value: DataYandexMdbMongodbClusterDiskSizeAutoscalingMongocfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._diskSizeLimit = undefined;
      this._emergencyUsageThreshold = undefined;
      this._plannedUsageThreshold = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._diskSizeLimit = value.diskSizeLimit;
      this._emergencyUsageThreshold = value.emergencyUsageThreshold;
      this._plannedUsageThreshold = value.plannedUsageThreshold;
    }
  }

  // disk_size_limit - computed: false, optional: true, required: false
  private _diskSizeLimit?: number; 
  public get diskSizeLimit() {
    return this.getNumberAttribute('disk_size_limit');
  }
  public set diskSizeLimit(value: number) {
    this._diskSizeLimit = value;
  }
  public resetDiskSizeLimit() {
    this._diskSizeLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeLimitInput() {
    return this._diskSizeLimit;
  }

  // emergency_usage_threshold - computed: false, optional: true, required: false
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

  // planned_usage_threshold - computed: false, optional: true, required: false
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
export interface DataYandexMdbMongodbClusterDiskSizeAutoscalingMongod {
  /**
  * Limit of disk size after autoscaling (GiB).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/mdb_mongodb_cluster#disk_size_limit DataYandexMdbMongodbCluster#disk_size_limit}
  */
  readonly diskSizeLimit?: number;
  /**
  * Immediate autoscaling disk usage (percent).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/mdb_mongodb_cluster#emergency_usage_threshold DataYandexMdbMongodbCluster#emergency_usage_threshold}
  */
  readonly emergencyUsageThreshold?: number;
  /**
  * Maintenance window autoscaling disk usage (percent).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/mdb_mongodb_cluster#planned_usage_threshold DataYandexMdbMongodbCluster#planned_usage_threshold}
  */
  readonly plannedUsageThreshold?: number;
}

export function dataYandexMdbMongodbClusterDiskSizeAutoscalingMongodToTerraform(struct?: DataYandexMdbMongodbClusterDiskSizeAutoscalingMongodOutputReference | DataYandexMdbMongodbClusterDiskSizeAutoscalingMongod): any {
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


export function dataYandexMdbMongodbClusterDiskSizeAutoscalingMongodToHclTerraform(struct?: DataYandexMdbMongodbClusterDiskSizeAutoscalingMongodOutputReference | DataYandexMdbMongodbClusterDiskSizeAutoscalingMongod): any {
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

export class DataYandexMdbMongodbClusterDiskSizeAutoscalingMongodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataYandexMdbMongodbClusterDiskSizeAutoscalingMongod | undefined {
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

  public set internalValue(value: DataYandexMdbMongodbClusterDiskSizeAutoscalingMongod | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._diskSizeLimit = undefined;
      this._emergencyUsageThreshold = undefined;
      this._plannedUsageThreshold = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._diskSizeLimit = value.diskSizeLimit;
      this._emergencyUsageThreshold = value.emergencyUsageThreshold;
      this._plannedUsageThreshold = value.plannedUsageThreshold;
    }
  }

  // disk_size_limit - computed: false, optional: true, required: false
  private _diskSizeLimit?: number; 
  public get diskSizeLimit() {
    return this.getNumberAttribute('disk_size_limit');
  }
  public set diskSizeLimit(value: number) {
    this._diskSizeLimit = value;
  }
  public resetDiskSizeLimit() {
    this._diskSizeLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeLimitInput() {
    return this._diskSizeLimit;
  }

  // emergency_usage_threshold - computed: false, optional: true, required: false
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

  // planned_usage_threshold - computed: false, optional: true, required: false
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
export interface DataYandexMdbMongodbClusterDiskSizeAutoscalingMongoinfra {
  /**
  * Limit of disk size after autoscaling (GiB).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/mdb_mongodb_cluster#disk_size_limit DataYandexMdbMongodbCluster#disk_size_limit}
  */
  readonly diskSizeLimit?: number;
  /**
  * Immediate autoscaling disk usage (percent).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/mdb_mongodb_cluster#emergency_usage_threshold DataYandexMdbMongodbCluster#emergency_usage_threshold}
  */
  readonly emergencyUsageThreshold?: number;
  /**
  * Maintenance window autoscaling disk usage (percent).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/mdb_mongodb_cluster#planned_usage_threshold DataYandexMdbMongodbCluster#planned_usage_threshold}
  */
  readonly plannedUsageThreshold?: number;
}

export function dataYandexMdbMongodbClusterDiskSizeAutoscalingMongoinfraToTerraform(struct?: DataYandexMdbMongodbClusterDiskSizeAutoscalingMongoinfraOutputReference | DataYandexMdbMongodbClusterDiskSizeAutoscalingMongoinfra): any {
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


export function dataYandexMdbMongodbClusterDiskSizeAutoscalingMongoinfraToHclTerraform(struct?: DataYandexMdbMongodbClusterDiskSizeAutoscalingMongoinfraOutputReference | DataYandexMdbMongodbClusterDiskSizeAutoscalingMongoinfra): any {
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

export class DataYandexMdbMongodbClusterDiskSizeAutoscalingMongoinfraOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataYandexMdbMongodbClusterDiskSizeAutoscalingMongoinfra | undefined {
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

  public set internalValue(value: DataYandexMdbMongodbClusterDiskSizeAutoscalingMongoinfra | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._diskSizeLimit = undefined;
      this._emergencyUsageThreshold = undefined;
      this._plannedUsageThreshold = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._diskSizeLimit = value.diskSizeLimit;
      this._emergencyUsageThreshold = value.emergencyUsageThreshold;
      this._plannedUsageThreshold = value.plannedUsageThreshold;
    }
  }

  // disk_size_limit - computed: false, optional: true, required: false
  private _diskSizeLimit?: number; 
  public get diskSizeLimit() {
    return this.getNumberAttribute('disk_size_limit');
  }
  public set diskSizeLimit(value: number) {
    this._diskSizeLimit = value;
  }
  public resetDiskSizeLimit() {
    this._diskSizeLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeLimitInput() {
    return this._diskSizeLimit;
  }

  // emergency_usage_threshold - computed: false, optional: true, required: false
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

  // planned_usage_threshold - computed: false, optional: true, required: false
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
export interface DataYandexMdbMongodbClusterDiskSizeAutoscalingMongos {
  /**
  * Limit of disk size after autoscaling (GiB).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/mdb_mongodb_cluster#disk_size_limit DataYandexMdbMongodbCluster#disk_size_limit}
  */
  readonly diskSizeLimit?: number;
  /**
  * Immediate autoscaling disk usage (percent).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/mdb_mongodb_cluster#emergency_usage_threshold DataYandexMdbMongodbCluster#emergency_usage_threshold}
  */
  readonly emergencyUsageThreshold?: number;
  /**
  * Maintenance window autoscaling disk usage (percent).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/mdb_mongodb_cluster#planned_usage_threshold DataYandexMdbMongodbCluster#planned_usage_threshold}
  */
  readonly plannedUsageThreshold?: number;
}

export function dataYandexMdbMongodbClusterDiskSizeAutoscalingMongosToTerraform(struct?: DataYandexMdbMongodbClusterDiskSizeAutoscalingMongosOutputReference | DataYandexMdbMongodbClusterDiskSizeAutoscalingMongos): any {
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


export function dataYandexMdbMongodbClusterDiskSizeAutoscalingMongosToHclTerraform(struct?: DataYandexMdbMongodbClusterDiskSizeAutoscalingMongosOutputReference | DataYandexMdbMongodbClusterDiskSizeAutoscalingMongos): any {
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

export class DataYandexMdbMongodbClusterDiskSizeAutoscalingMongosOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataYandexMdbMongodbClusterDiskSizeAutoscalingMongos | undefined {
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

  public set internalValue(value: DataYandexMdbMongodbClusterDiskSizeAutoscalingMongos | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._diskSizeLimit = undefined;
      this._emergencyUsageThreshold = undefined;
      this._plannedUsageThreshold = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._diskSizeLimit = value.diskSizeLimit;
      this._emergencyUsageThreshold = value.emergencyUsageThreshold;
      this._plannedUsageThreshold = value.plannedUsageThreshold;
    }
  }

  // disk_size_limit - computed: false, optional: true, required: false
  private _diskSizeLimit?: number; 
  public get diskSizeLimit() {
    return this.getNumberAttribute('disk_size_limit');
  }
  public set diskSizeLimit(value: number) {
    this._diskSizeLimit = value;
  }
  public resetDiskSizeLimit() {
    this._diskSizeLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeLimitInput() {
    return this._diskSizeLimit;
  }

  // emergency_usage_threshold - computed: false, optional: true, required: false
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

  // planned_usage_threshold - computed: false, optional: true, required: false
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
export interface DataYandexMdbMongodbClusterHostHostParameters {
  /**
  * Should this host be hidden in replicaset. Can be either `true` of `false`. For more information see [the official documentation](https://www.mongodb.com/docs/current/reference/replica-configuration/#mongodb-rsconf-rsconf.members-n-.hidden).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/mdb_mongodb_cluster#hidden DataYandexMdbMongodbCluster#hidden}
  */
  readonly hidden?: boolean | cdktf.IResolvable;
  /**
  * A floating point number that indicates the relative likelihood of a replica set member to become the primary. For more information see [the official documentation](https://www.mongodb.com/docs/current/reference/replica-configuration/#mongodb-rsconf-rsconf.members-n-.priority).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/mdb_mongodb_cluster#priority DataYandexMdbMongodbCluster#priority}
  */
  readonly priority?: number;
  /**
  * The number of seconds `behind` the primary that this replica set member should `lag`. For more information see [the official documentation](https://www.mongodb.com/docs/current/reference/replica-configuration/#mongodb-rsconf-rsconf.members-n-.secondaryDelaySecs).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/mdb_mongodb_cluster#secondary_delay_secs DataYandexMdbMongodbCluster#secondary_delay_secs}
  */
  readonly secondaryDelaySecs?: number;
  /**
  * A set of key/value pairs to assign for the replica set member. For more information see [the official documentation](https://www.mongodb.com/docs/current/reference/replica-configuration/#mongodb-rsconf-rsconf.members-n-.tags).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/mdb_mongodb_cluster#tags DataYandexMdbMongodbCluster#tags}
  */
  readonly tags?: { [key: string]: string };
}

export function dataYandexMdbMongodbClusterHostHostParametersToTerraform(struct?: DataYandexMdbMongodbClusterHostHostParametersOutputReference | DataYandexMdbMongodbClusterHostHostParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hidden: cdktf.booleanToTerraform(struct!.hidden),
    priority: cdktf.numberToTerraform(struct!.priority),
    secondary_delay_secs: cdktf.numberToTerraform(struct!.secondaryDelaySecs),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
  }
}


export function dataYandexMdbMongodbClusterHostHostParametersToHclTerraform(struct?: DataYandexMdbMongodbClusterHostHostParametersOutputReference | DataYandexMdbMongodbClusterHostHostParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hidden: {
      value: cdktf.booleanToHclTerraform(struct!.hidden),
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
    secondary_delay_secs: {
      value: cdktf.numberToHclTerraform(struct!.secondaryDelaySecs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataYandexMdbMongodbClusterHostHostParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataYandexMdbMongodbClusterHostHostParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hidden !== undefined) {
      hasAnyValues = true;
      internalValueResult.hidden = this._hidden;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._secondaryDelaySecs !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryDelaySecs = this._secondaryDelaySecs;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbMongodbClusterHostHostParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hidden = undefined;
      this._priority = undefined;
      this._secondaryDelaySecs = undefined;
      this._tags = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hidden = value.hidden;
      this._priority = value.priority;
      this._secondaryDelaySecs = value.secondaryDelaySecs;
      this._tags = value.tags;
    }
  }

  // hidden - computed: false, optional: true, required: false
  private _hidden?: boolean | cdktf.IResolvable; 
  public get hidden() {
    return this.getBooleanAttribute('hidden');
  }
  public set hidden(value: boolean | cdktf.IResolvable) {
    this._hidden = value;
  }
  public resetHidden() {
    this._hidden = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hiddenInput() {
    return this._hidden;
  }

  // priority - computed: false, optional: true, required: false
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

  // secondary_delay_secs - computed: false, optional: true, required: false
  private _secondaryDelaySecs?: number; 
  public get secondaryDelaySecs() {
    return this.getNumberAttribute('secondary_delay_secs');
  }
  public set secondaryDelaySecs(value: number) {
    this._secondaryDelaySecs = value;
  }
  public resetSecondaryDelaySecs() {
    this._secondaryDelaySecs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryDelaySecsInput() {
    return this._secondaryDelaySecs;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }
}
export interface DataYandexMdbMongodbClusterHost {
  /**
  * Should this host have assigned public IP assigned. Can be either `true` or `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/mdb_mongodb_cluster#assign_public_ip DataYandexMdbMongodbCluster#assign_public_ip}
  */
  readonly assignPublicIp?: boolean | cdktf.IResolvable;
  /**
  * The health of the host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/mdb_mongodb_cluster#health DataYandexMdbMongodbCluster#health}
  */
  readonly health?: string;
  /**
  * The fully qualified domain name of the host. Computed on server side.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/mdb_mongodb_cluster#name DataYandexMdbMongodbCluster#name}
  */
  readonly name?: string;
  /**
  * The role of the cluster (either PRIMARY or SECONDARY).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/mdb_mongodb_cluster#role DataYandexMdbMongodbCluster#role}
  */
  readonly role?: string;
  /**
  * The name of the shard to which the host belongs. Only for sharded cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/mdb_mongodb_cluster#shard_name DataYandexMdbMongodbCluster#shard_name}
  */
  readonly shardName?: string;
  /**
  * The ID of the subnet, to which the host belongs. The subnet must be a part of the network to which the cluster belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/mdb_mongodb_cluster#subnet_id DataYandexMdbMongodbCluster#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * Type of Mongo daemon which runs on this host (mongod, mongos, mongocfg, mongoinfra). Defaults to `mongod`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/mdb_mongodb_cluster#type DataYandexMdbMongodbCluster#type}
  */
  readonly type?: string;
  /**
  * The [availability zone](https://yandex.cloud/docs/overview/concepts/geo-scope) where resource is located. If it is not provided, the default provider zone will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/mdb_mongodb_cluster#zone_id DataYandexMdbMongodbCluster#zone_id}
  */
  readonly zoneId?: string;
  /**
  * host_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/mdb_mongodb_cluster#host_parameters DataYandexMdbMongodbCluster#host_parameters}
  */
  readonly hostParameters?: DataYandexMdbMongodbClusterHostHostParameters;
}

export function dataYandexMdbMongodbClusterHostToTerraform(struct?: DataYandexMdbMongodbClusterHost | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    assign_public_ip: cdktf.booleanToTerraform(struct!.assignPublicIp),
    health: cdktf.stringToTerraform(struct!.health),
    name: cdktf.stringToTerraform(struct!.name),
    role: cdktf.stringToTerraform(struct!.role),
    shard_name: cdktf.stringToTerraform(struct!.shardName),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    type: cdktf.stringToTerraform(struct!.type),
    zone_id: cdktf.stringToTerraform(struct!.zoneId),
    host_parameters: dataYandexMdbMongodbClusterHostHostParametersToTerraform(struct!.hostParameters),
  }
}


export function dataYandexMdbMongodbClusterHostToHclTerraform(struct?: DataYandexMdbMongodbClusterHost | cdktf.IResolvable): any {
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
    health: {
      value: cdktf.stringToHclTerraform(struct!.health),
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
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
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
    zone_id: {
      value: cdktf.stringToHclTerraform(struct!.zoneId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_parameters: {
      value: dataYandexMdbMongodbClusterHostHostParametersToHclTerraform(struct!.hostParameters),
      isBlock: true,
      type: "list",
      storageClassType: "DataYandexMdbMongodbClusterHostHostParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataYandexMdbMongodbClusterHostOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexMdbMongodbClusterHost | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._assignPublicIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignPublicIp = this._assignPublicIp;
    }
    if (this._health !== undefined) {
      hasAnyValues = true;
      internalValueResult.health = this._health;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
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
    if (this._zoneId !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneId = this._zoneId;
    }
    if (this._hostParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostParameters = this._hostParameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbMongodbClusterHost | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._assignPublicIp = undefined;
      this._health = undefined;
      this._name = undefined;
      this._role = undefined;
      this._shardName = undefined;
      this._subnetId = undefined;
      this._type = undefined;
      this._zoneId = undefined;
      this._hostParameters.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._assignPublicIp = value.assignPublicIp;
      this._health = value.health;
      this._name = value.name;
      this._role = value.role;
      this._shardName = value.shardName;
      this._subnetId = value.subnetId;
      this._type = value.type;
      this._zoneId = value.zoneId;
      this._hostParameters.internalValue = value.hostParameters;
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

  // role - computed: true, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
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

  // subnet_id - computed: false, optional: true, required: false
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

  // zone_id - computed: false, optional: true, required: false
  private _zoneId?: string; 
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  public resetZoneId() {
    this._zoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdInput() {
    return this._zoneId;
  }

  // host_parameters - computed: false, optional: true, required: false
  private _hostParameters = new DataYandexMdbMongodbClusterHostHostParametersOutputReference(this, "host_parameters");
  public get hostParameters() {
    return this._hostParameters;
  }
  public putHostParameters(value: DataYandexMdbMongodbClusterHostHostParameters) {
    this._hostParameters.internalValue = value;
  }
  public resetHostParameters() {
    this._hostParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostParametersInput() {
    return this._hostParameters.internalValue;
  }
}

export class DataYandexMdbMongodbClusterHostList extends cdktf.ComplexList {
  public internalValue? : DataYandexMdbMongodbClusterHost[] | cdktf.IResolvable

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
  public get(index: number): DataYandexMdbMongodbClusterHostOutputReference {
    return new DataYandexMdbMongodbClusterHostOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexMdbMongodbClusterMaintenanceWindow {
  /**
  * Day of week for maintenance window if window type is weekly. Possible values: `MON`, `TUE`, `WED`, `THU`, `FRI`, `SAT`, `SUN`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/mdb_mongodb_cluster#day DataYandexMdbMongodbCluster#day}
  */
  readonly day?: string;
  /**
  * Hour of day in UTC time zone (1-24) for maintenance window if window type is weekly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/mdb_mongodb_cluster#hour DataYandexMdbMongodbCluster#hour}
  */
  readonly hour?: number;
  /**
  * Type of maintenance window. Can be either `ANYTIME` or `WEEKLY`. A day and hour of window need to be specified with weekly window.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/mdb_mongodb_cluster#type DataYandexMdbMongodbCluster#type}
  */
  readonly type?: string;
}

export function dataYandexMdbMongodbClusterMaintenanceWindowToTerraform(struct?: DataYandexMdbMongodbClusterMaintenanceWindowOutputReference | DataYandexMdbMongodbClusterMaintenanceWindow): any {
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


export function dataYandexMdbMongodbClusterMaintenanceWindowToHclTerraform(struct?: DataYandexMdbMongodbClusterMaintenanceWindowOutputReference | DataYandexMdbMongodbClusterMaintenanceWindow): any {
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

export class DataYandexMdbMongodbClusterMaintenanceWindowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataYandexMdbMongodbClusterMaintenanceWindow | undefined {
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

  public set internalValue(value: DataYandexMdbMongodbClusterMaintenanceWindow | undefined) {
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
export interface DataYandexMdbMongodbClusterResources {
  /**
  * Volume of the storage available to a MongoDB host, in gigabytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/mdb_mongodb_cluster#disk_size DataYandexMdbMongodbCluster#disk_size}
  */
  readonly diskSize?: number;
  /**
  * Type of the storage of MongoDB hosts. For more information see [the official documentation](https://yandex.cloud/docs/managed-clickhouse/concepts/storage).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/mdb_mongodb_cluster#disk_type_id DataYandexMdbMongodbCluster#disk_type_id}
  */
  readonly diskTypeId?: string;
  /**
  * The ID of the preset for computational resources available to a MongoDB host (CPU, memory etc.). For more information, see [the official documentation](https://yandex.cloud/docs/managed-mongodb/concepts).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/mdb_mongodb_cluster#resource_preset_id DataYandexMdbMongodbCluster#resource_preset_id}
  */
  readonly resourcePresetId?: string;
}

export function dataYandexMdbMongodbClusterResourcesToTerraform(struct?: DataYandexMdbMongodbClusterResourcesOutputReference | DataYandexMdbMongodbClusterResources): any {
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


export function dataYandexMdbMongodbClusterResourcesToHclTerraform(struct?: DataYandexMdbMongodbClusterResourcesOutputReference | DataYandexMdbMongodbClusterResources): any {
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

export class DataYandexMdbMongodbClusterResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataYandexMdbMongodbClusterResources | undefined {
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

  public set internalValue(value: DataYandexMdbMongodbClusterResources | undefined) {
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

  // disk_size - computed: false, optional: true, required: false
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

  // disk_type_id - computed: false, optional: true, required: false
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

  // resource_preset_id - computed: false, optional: true, required: false
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
export interface DataYandexMdbMongodbClusterResourcesMongocfg {
  /**
  * Volume of the storage available to a MongoDB host, in gigabytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/mdb_mongodb_cluster#disk_size DataYandexMdbMongodbCluster#disk_size}
  */
  readonly diskSize?: number;
  /**
  * Type of the storage of MongoDB hosts. For more information see [the official documentation](https://yandex.cloud/docs/managed-clickhouse/concepts/storage).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/mdb_mongodb_cluster#disk_type_id DataYandexMdbMongodbCluster#disk_type_id}
  */
  readonly diskTypeId?: string;
  /**
  * The ID of the preset for computational resources available to a MongoDB host (CPU, memory etc.). For more information, see [the official documentation](https://yandex.cloud/docs/managed-mongodb/concepts).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/mdb_mongodb_cluster#resource_preset_id DataYandexMdbMongodbCluster#resource_preset_id}
  */
  readonly resourcePresetId?: string;
}

export function dataYandexMdbMongodbClusterResourcesMongocfgToTerraform(struct?: DataYandexMdbMongodbClusterResourcesMongocfgOutputReference | DataYandexMdbMongodbClusterResourcesMongocfg): any {
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


export function dataYandexMdbMongodbClusterResourcesMongocfgToHclTerraform(struct?: DataYandexMdbMongodbClusterResourcesMongocfgOutputReference | DataYandexMdbMongodbClusterResourcesMongocfg): any {
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

export class DataYandexMdbMongodbClusterResourcesMongocfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataYandexMdbMongodbClusterResourcesMongocfg | undefined {
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

  public set internalValue(value: DataYandexMdbMongodbClusterResourcesMongocfg | undefined) {
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

  // disk_size - computed: false, optional: true, required: false
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

  // disk_type_id - computed: false, optional: true, required: false
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

  // resource_preset_id - computed: false, optional: true, required: false
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
export interface DataYandexMdbMongodbClusterResourcesMongod {
  /**
  * Volume of the storage available to a MongoDB host, in gigabytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/mdb_mongodb_cluster#disk_size DataYandexMdbMongodbCluster#disk_size}
  */
  readonly diskSize?: number;
  /**
  * Type of the storage of MongoDB hosts. For more information see [the official documentation](https://yandex.cloud/docs/managed-clickhouse/concepts/storage).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/mdb_mongodb_cluster#disk_type_id DataYandexMdbMongodbCluster#disk_type_id}
  */
  readonly diskTypeId?: string;
  /**
  * The ID of the preset for computational resources available to a MongoDB host (CPU, memory etc.). For more information, see [the official documentation](https://yandex.cloud/docs/managed-mongodb/concepts).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/mdb_mongodb_cluster#resource_preset_id DataYandexMdbMongodbCluster#resource_preset_id}
  */
  readonly resourcePresetId?: string;
}

export function dataYandexMdbMongodbClusterResourcesMongodToTerraform(struct?: DataYandexMdbMongodbClusterResourcesMongodOutputReference | DataYandexMdbMongodbClusterResourcesMongod): any {
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


export function dataYandexMdbMongodbClusterResourcesMongodToHclTerraform(struct?: DataYandexMdbMongodbClusterResourcesMongodOutputReference | DataYandexMdbMongodbClusterResourcesMongod): any {
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

export class DataYandexMdbMongodbClusterResourcesMongodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataYandexMdbMongodbClusterResourcesMongod | undefined {
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

  public set internalValue(value: DataYandexMdbMongodbClusterResourcesMongod | undefined) {
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

  // disk_size - computed: false, optional: true, required: false
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

  // disk_type_id - computed: false, optional: true, required: false
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

  // resource_preset_id - computed: false, optional: true, required: false
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
export interface DataYandexMdbMongodbClusterResourcesMongoinfra {
  /**
  * Volume of the storage available to a MongoDB host, in gigabytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/mdb_mongodb_cluster#disk_size DataYandexMdbMongodbCluster#disk_size}
  */
  readonly diskSize?: number;
  /**
  * Type of the storage of MongoDB hosts. For more information see [the official documentation](https://yandex.cloud/docs/managed-clickhouse/concepts/storage).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/mdb_mongodb_cluster#disk_type_id DataYandexMdbMongodbCluster#disk_type_id}
  */
  readonly diskTypeId?: string;
  /**
  * The ID of the preset for computational resources available to a MongoDB host (CPU, memory etc.). For more information, see [the official documentation](https://yandex.cloud/docs/managed-mongodb/concepts).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/mdb_mongodb_cluster#resource_preset_id DataYandexMdbMongodbCluster#resource_preset_id}
  */
  readonly resourcePresetId?: string;
}

export function dataYandexMdbMongodbClusterResourcesMongoinfraToTerraform(struct?: DataYandexMdbMongodbClusterResourcesMongoinfraOutputReference | DataYandexMdbMongodbClusterResourcesMongoinfra): any {
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


export function dataYandexMdbMongodbClusterResourcesMongoinfraToHclTerraform(struct?: DataYandexMdbMongodbClusterResourcesMongoinfraOutputReference | DataYandexMdbMongodbClusterResourcesMongoinfra): any {
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

export class DataYandexMdbMongodbClusterResourcesMongoinfraOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataYandexMdbMongodbClusterResourcesMongoinfra | undefined {
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

  public set internalValue(value: DataYandexMdbMongodbClusterResourcesMongoinfra | undefined) {
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

  // disk_size - computed: false, optional: true, required: false
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

  // disk_type_id - computed: false, optional: true, required: false
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

  // resource_preset_id - computed: false, optional: true, required: false
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
export interface DataYandexMdbMongodbClusterResourcesMongos {
  /**
  * Volume of the storage available to a MongoDB host, in gigabytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/mdb_mongodb_cluster#disk_size DataYandexMdbMongodbCluster#disk_size}
  */
  readonly diskSize?: number;
  /**
  * Type of the storage of MongoDB hosts. For more information see [the official documentation](https://yandex.cloud/docs/managed-clickhouse/concepts/storage).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/mdb_mongodb_cluster#disk_type_id DataYandexMdbMongodbCluster#disk_type_id}
  */
  readonly diskTypeId?: string;
  /**
  * The ID of the preset for computational resources available to a MongoDB host (CPU, memory etc.). For more information, see [the official documentation](https://yandex.cloud/docs/managed-mongodb/concepts).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/mdb_mongodb_cluster#resource_preset_id DataYandexMdbMongodbCluster#resource_preset_id}
  */
  readonly resourcePresetId?: string;
}

export function dataYandexMdbMongodbClusterResourcesMongosToTerraform(struct?: DataYandexMdbMongodbClusterResourcesMongosOutputReference | DataYandexMdbMongodbClusterResourcesMongos): any {
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


export function dataYandexMdbMongodbClusterResourcesMongosToHclTerraform(struct?: DataYandexMdbMongodbClusterResourcesMongosOutputReference | DataYandexMdbMongodbClusterResourcesMongos): any {
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

export class DataYandexMdbMongodbClusterResourcesMongosOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataYandexMdbMongodbClusterResourcesMongos | undefined {
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

  public set internalValue(value: DataYandexMdbMongodbClusterResourcesMongos | undefined) {
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

  // disk_size - computed: false, optional: true, required: false
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

  // disk_type_id - computed: false, optional: true, required: false
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

  // resource_preset_id - computed: false, optional: true, required: false
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
export interface DataYandexMdbMongodbClusterRestore {
  /**
  * Backup ID. The cluster will be created from the specified backup. [How to get a list of PostgreSQL backups](https://yandex.cloud/docs/managed-mongodb/operations/cluster-backups).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/mdb_mongodb_cluster#backup_id DataYandexMdbMongodbCluster#backup_id}
  */
  readonly backupId?: string;
  /**
  * Timestamp of the moment to which the MongoDB cluster should be restored. (Format: `2006-01-02T15:04:05` - UTC). When not set, current time is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/mdb_mongodb_cluster#time DataYandexMdbMongodbCluster#time}
  */
  readonly time?: string;
}

export function dataYandexMdbMongodbClusterRestoreToTerraform(struct?: DataYandexMdbMongodbClusterRestoreOutputReference | DataYandexMdbMongodbClusterRestore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backup_id: cdktf.stringToTerraform(struct!.backupId),
    time: cdktf.stringToTerraform(struct!.time),
  }
}


export function dataYandexMdbMongodbClusterRestoreToHclTerraform(struct?: DataYandexMdbMongodbClusterRestoreOutputReference | DataYandexMdbMongodbClusterRestore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backup_id: {
      value: cdktf.stringToHclTerraform(struct!.backupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time: {
      value: cdktf.stringToHclTerraform(struct!.time),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataYandexMdbMongodbClusterRestoreOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataYandexMdbMongodbClusterRestore | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupId = this._backupId;
    }
    if (this._time !== undefined) {
      hasAnyValues = true;
      internalValueResult.time = this._time;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbMongodbClusterRestore | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._backupId = undefined;
      this._time = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._backupId = value.backupId;
      this._time = value.time;
    }
  }

  // backup_id - computed: false, optional: true, required: false
  private _backupId?: string; 
  public get backupId() {
    return this.getStringAttribute('backup_id');
  }
  public set backupId(value: string) {
    this._backupId = value;
  }
  public resetBackupId() {
    this._backupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupIdInput() {
    return this._backupId;
  }

  // time - computed: false, optional: true, required: false
  private _time?: string; 
  public get time() {
    return this.getStringAttribute('time');
  }
  public set time(value: string) {
    this._time = value;
  }
  public resetTime() {
    this._time = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeInput() {
    return this._time;
  }
}
export interface DataYandexMdbMongodbClusterUserPermission {
  /**
  * The name of the database that the permission grants access to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/mdb_mongodb_cluster#database_name DataYandexMdbMongodbCluster#database_name}
  */
  readonly databaseName?: string;
  /**
  * The roles of the user in this database. For more information see [the official documentation](https://yandex.cloud/docs/managed-mongodb/concepts/users-and-roles).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/mdb_mongodb_cluster#roles DataYandexMdbMongodbCluster#roles}
  */
  readonly roles?: string[];
}

export function dataYandexMdbMongodbClusterUserPermissionToTerraform(struct?: DataYandexMdbMongodbClusterUserPermission | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database_name: cdktf.stringToTerraform(struct!.databaseName),
    roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.roles),
  }
}


export function dataYandexMdbMongodbClusterUserPermissionToHclTerraform(struct?: DataYandexMdbMongodbClusterUserPermission | cdktf.IResolvable): any {
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
    roles: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.roles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataYandexMdbMongodbClusterUserPermissionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexMdbMongodbClusterUserPermission | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._databaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseName = this._databaseName;
    }
    if (this._roles !== undefined) {
      hasAnyValues = true;
      internalValueResult.roles = this._roles;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbMongodbClusterUserPermission | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._databaseName = undefined;
      this._roles = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._databaseName = value.databaseName;
      this._roles = value.roles;
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

  // roles - computed: false, optional: true, required: false
  private _roles?: string[]; 
  public get roles() {
    return this.getListAttribute('roles');
  }
  public set roles(value: string[]) {
    this._roles = value;
  }
  public resetRoles() {
    this._roles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesInput() {
    return this._roles;
  }
}

export class DataYandexMdbMongodbClusterUserPermissionList extends cdktf.ComplexList {
  public internalValue? : DataYandexMdbMongodbClusterUserPermission[] | cdktf.IResolvable

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
  public get(index: number): DataYandexMdbMongodbClusterUserPermissionOutputReference {
    return new DataYandexMdbMongodbClusterUserPermissionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexMdbMongodbClusterUser {
  /**
  * The name of the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/mdb_mongodb_cluster#name DataYandexMdbMongodbCluster#name}
  */
  readonly name?: string;
  /**
  * The password of the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/mdb_mongodb_cluster#password DataYandexMdbMongodbCluster#password}
  */
  readonly password?: string;
  /**
  * permission block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/mdb_mongodb_cluster#permission DataYandexMdbMongodbCluster#permission}
  */
  readonly permission?: DataYandexMdbMongodbClusterUserPermission[] | cdktf.IResolvable;
}

export function dataYandexMdbMongodbClusterUserToTerraform(struct?: DataYandexMdbMongodbClusterUser | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    password: cdktf.stringToTerraform(struct!.password),
    permission: cdktf.listMapper(dataYandexMdbMongodbClusterUserPermissionToTerraform, true)(struct!.permission),
  }
}


export function dataYandexMdbMongodbClusterUserToHclTerraform(struct?: DataYandexMdbMongodbClusterUser | cdktf.IResolvable): any {
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
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permission: {
      value: cdktf.listMapperHcl(dataYandexMdbMongodbClusterUserPermissionToHclTerraform, true)(struct!.permission),
      isBlock: true,
      type: "set",
      storageClassType: "DataYandexMdbMongodbClusterUserPermissionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataYandexMdbMongodbClusterUserOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexMdbMongodbClusterUser | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbMongodbClusterUser | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._password = undefined;
      this._permission.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._password = value.password;
      this._permission.internalValue = value.permission;
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
  private _permission = new DataYandexMdbMongodbClusterUserPermissionList(this, "permission", true);
  public get permission() {
    return this._permission;
  }
  public putPermission(value: DataYandexMdbMongodbClusterUserPermission[] | cdktf.IResolvable) {
    this._permission.internalValue = value;
  }
  public resetPermission() {
    this._permission.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionInput() {
    return this._permission.internalValue;
  }
}

export class DataYandexMdbMongodbClusterUserList extends cdktf.ComplexList {
  public internalValue? : DataYandexMdbMongodbClusterUser[] | cdktf.IResolvable

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
  public get(index: number): DataYandexMdbMongodbClusterUserOutputReference {
    return new DataYandexMdbMongodbClusterUserOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/mdb_mongodb_cluster yandex_mdb_mongodb_cluster}
*/
export class DataYandexMdbMongodbCluster extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_mdb_mongodb_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataYandexMdbMongodbCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataYandexMdbMongodbCluster to import
  * @param importFromId The id of the existing DataYandexMdbMongodbCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/mdb_mongodb_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataYandexMdbMongodbCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "yandex_mdb_mongodb_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/mdb_mongodb_cluster yandex_mdb_mongodb_cluster} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataYandexMdbMongodbClusterConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataYandexMdbMongodbClusterConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'yandex_mdb_mongodb_cluster',
      terraformGeneratorMetadata: {
        providerName: 'yandex',
        providerVersion: '0.169.0',
        providerVersionConstraint: '0.169.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterId = config.clusterId;
    this._createdAt = config.createdAt;
    this._deletionProtection = config.deletionProtection;
    this._description = config.description;
    this._diskEncryptionKeyId = config.diskEncryptionKeyId;
    this._environment = config.environment;
    this._folderId = config.folderId;
    this._health = config.health;
    this._id = config.id;
    this._labels = config.labels;
    this._name = config.name;
    this._networkId = config.networkId;
    this._securityGroupIds = config.securityGroupIds;
    this._sharded = config.sharded;
    this._status = config.status;
    this._clusterConfig.internalValue = config.clusterConfig;
    this._database.internalValue = config.database;
    this._diskSizeAutoscalingMongocfg.internalValue = config.diskSizeAutoscalingMongocfg;
    this._diskSizeAutoscalingMongod.internalValue = config.diskSizeAutoscalingMongod;
    this._diskSizeAutoscalingMongoinfra.internalValue = config.diskSizeAutoscalingMongoinfra;
    this._diskSizeAutoscalingMongos.internalValue = config.diskSizeAutoscalingMongos;
    this._host.internalValue = config.host;
    this._maintenanceWindow.internalValue = config.maintenanceWindow;
    this._resources.internalValue = config.resources;
    this._resourcesMongocfg.internalValue = config.resourcesMongocfg;
    this._resourcesMongod.internalValue = config.resourcesMongod;
    this._resourcesMongoinfra.internalValue = config.resourcesMongoinfra;
    this._resourcesMongos.internalValue = config.resourcesMongos;
    this._restore.internalValue = config.restore;
    this._user.internalValue = config.user;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // cluster_config - computed: false, optional: true, required: false
  private _clusterConfig = new DataYandexMdbMongodbClusterClusterConfigOutputReference(this, "cluster_config");
  public get clusterConfig() {
    return this._clusterConfig;
  }
  public putClusterConfig(value: DataYandexMdbMongodbClusterClusterConfig) {
    this._clusterConfig.internalValue = value;
  }
  public resetClusterConfig() {
    this._clusterConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterConfigInput() {
    return this._clusterConfig.internalValue;
  }

  // database - computed: false, optional: true, required: false
  private _database = new DataYandexMdbMongodbClusterDatabaseList(this, "database", true);
  public get database() {
    return this._database;
  }
  public putDatabase(value: DataYandexMdbMongodbClusterDatabase[] | cdktf.IResolvable) {
    this._database.internalValue = value;
  }
  public resetDatabase() {
    this._database.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database.internalValue;
  }

  // disk_size_autoscaling_mongocfg - computed: false, optional: true, required: false
  private _diskSizeAutoscalingMongocfg = new DataYandexMdbMongodbClusterDiskSizeAutoscalingMongocfgOutputReference(this, "disk_size_autoscaling_mongocfg");
  public get diskSizeAutoscalingMongocfg() {
    return this._diskSizeAutoscalingMongocfg;
  }
  public putDiskSizeAutoscalingMongocfg(value: DataYandexMdbMongodbClusterDiskSizeAutoscalingMongocfg) {
    this._diskSizeAutoscalingMongocfg.internalValue = value;
  }
  public resetDiskSizeAutoscalingMongocfg() {
    this._diskSizeAutoscalingMongocfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeAutoscalingMongocfgInput() {
    return this._diskSizeAutoscalingMongocfg.internalValue;
  }

  // disk_size_autoscaling_mongod - computed: false, optional: true, required: false
  private _diskSizeAutoscalingMongod = new DataYandexMdbMongodbClusterDiskSizeAutoscalingMongodOutputReference(this, "disk_size_autoscaling_mongod");
  public get diskSizeAutoscalingMongod() {
    return this._diskSizeAutoscalingMongod;
  }
  public putDiskSizeAutoscalingMongod(value: DataYandexMdbMongodbClusterDiskSizeAutoscalingMongod) {
    this._diskSizeAutoscalingMongod.internalValue = value;
  }
  public resetDiskSizeAutoscalingMongod() {
    this._diskSizeAutoscalingMongod.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeAutoscalingMongodInput() {
    return this._diskSizeAutoscalingMongod.internalValue;
  }

  // disk_size_autoscaling_mongoinfra - computed: false, optional: true, required: false
  private _diskSizeAutoscalingMongoinfra = new DataYandexMdbMongodbClusterDiskSizeAutoscalingMongoinfraOutputReference(this, "disk_size_autoscaling_mongoinfra");
  public get diskSizeAutoscalingMongoinfra() {
    return this._diskSizeAutoscalingMongoinfra;
  }
  public putDiskSizeAutoscalingMongoinfra(value: DataYandexMdbMongodbClusterDiskSizeAutoscalingMongoinfra) {
    this._diskSizeAutoscalingMongoinfra.internalValue = value;
  }
  public resetDiskSizeAutoscalingMongoinfra() {
    this._diskSizeAutoscalingMongoinfra.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeAutoscalingMongoinfraInput() {
    return this._diskSizeAutoscalingMongoinfra.internalValue;
  }

  // disk_size_autoscaling_mongos - computed: false, optional: true, required: false
  private _diskSizeAutoscalingMongos = new DataYandexMdbMongodbClusterDiskSizeAutoscalingMongosOutputReference(this, "disk_size_autoscaling_mongos");
  public get diskSizeAutoscalingMongos() {
    return this._diskSizeAutoscalingMongos;
  }
  public putDiskSizeAutoscalingMongos(value: DataYandexMdbMongodbClusterDiskSizeAutoscalingMongos) {
    this._diskSizeAutoscalingMongos.internalValue = value;
  }
  public resetDiskSizeAutoscalingMongos() {
    this._diskSizeAutoscalingMongos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeAutoscalingMongosInput() {
    return this._diskSizeAutoscalingMongos.internalValue;
  }

  // host - computed: false, optional: true, required: false
  private _host = new DataYandexMdbMongodbClusterHostList(this, "host", false);
  public get host() {
    return this._host;
  }
  public putHost(value: DataYandexMdbMongodbClusterHost[] | cdktf.IResolvable) {
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
  private _maintenanceWindow = new DataYandexMdbMongodbClusterMaintenanceWindowOutputReference(this, "maintenance_window");
  public get maintenanceWindow() {
    return this._maintenanceWindow;
  }
  public putMaintenanceWindow(value: DataYandexMdbMongodbClusterMaintenanceWindow) {
    this._maintenanceWindow.internalValue = value;
  }
  public resetMaintenanceWindow() {
    this._maintenanceWindow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceWindowInput() {
    return this._maintenanceWindow.internalValue;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataYandexMdbMongodbClusterResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataYandexMdbMongodbClusterResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // resources_mongocfg - computed: false, optional: true, required: false
  private _resourcesMongocfg = new DataYandexMdbMongodbClusterResourcesMongocfgOutputReference(this, "resources_mongocfg");
  public get resourcesMongocfg() {
    return this._resourcesMongocfg;
  }
  public putResourcesMongocfg(value: DataYandexMdbMongodbClusterResourcesMongocfg) {
    this._resourcesMongocfg.internalValue = value;
  }
  public resetResourcesMongocfg() {
    this._resourcesMongocfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesMongocfgInput() {
    return this._resourcesMongocfg.internalValue;
  }

  // resources_mongod - computed: false, optional: true, required: false
  private _resourcesMongod = new DataYandexMdbMongodbClusterResourcesMongodOutputReference(this, "resources_mongod");
  public get resourcesMongod() {
    return this._resourcesMongod;
  }
  public putResourcesMongod(value: DataYandexMdbMongodbClusterResourcesMongod) {
    this._resourcesMongod.internalValue = value;
  }
  public resetResourcesMongod() {
    this._resourcesMongod.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesMongodInput() {
    return this._resourcesMongod.internalValue;
  }

  // resources_mongoinfra - computed: false, optional: true, required: false
  private _resourcesMongoinfra = new DataYandexMdbMongodbClusterResourcesMongoinfraOutputReference(this, "resources_mongoinfra");
  public get resourcesMongoinfra() {
    return this._resourcesMongoinfra;
  }
  public putResourcesMongoinfra(value: DataYandexMdbMongodbClusterResourcesMongoinfra) {
    this._resourcesMongoinfra.internalValue = value;
  }
  public resetResourcesMongoinfra() {
    this._resourcesMongoinfra.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesMongoinfraInput() {
    return this._resourcesMongoinfra.internalValue;
  }

  // resources_mongos - computed: false, optional: true, required: false
  private _resourcesMongos = new DataYandexMdbMongodbClusterResourcesMongosOutputReference(this, "resources_mongos");
  public get resourcesMongos() {
    return this._resourcesMongos;
  }
  public putResourcesMongos(value: DataYandexMdbMongodbClusterResourcesMongos) {
    this._resourcesMongos.internalValue = value;
  }
  public resetResourcesMongos() {
    this._resourcesMongos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesMongosInput() {
    return this._resourcesMongos.internalValue;
  }

  // restore - computed: false, optional: true, required: false
  private _restore = new DataYandexMdbMongodbClusterRestoreOutputReference(this, "restore");
  public get restore() {
    return this._restore;
  }
  public putRestore(value: DataYandexMdbMongodbClusterRestore) {
    this._restore.internalValue = value;
  }
  public resetRestore() {
    this._restore.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restoreInput() {
    return this._restore.internalValue;
  }

  // user - computed: false, optional: true, required: false
  private _user = new DataYandexMdbMongodbClusterUserList(this, "user", true);
  public get user() {
    return this._user;
  }
  public putUser(value: DataYandexMdbMongodbClusterUser[] | cdktf.IResolvable) {
    this._user.internalValue = value;
  }
  public resetUser() {
    this._user.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      created_at: cdktf.stringToTerraform(this._createdAt),
      deletion_protection: cdktf.booleanToTerraform(this._deletionProtection),
      description: cdktf.stringToTerraform(this._description),
      disk_encryption_key_id: cdktf.stringToTerraform(this._diskEncryptionKeyId),
      environment: cdktf.stringToTerraform(this._environment),
      folder_id: cdktf.stringToTerraform(this._folderId),
      health: cdktf.stringToTerraform(this._health),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      network_id: cdktf.stringToTerraform(this._networkId),
      security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityGroupIds),
      sharded: cdktf.booleanToTerraform(this._sharded),
      status: cdktf.stringToTerraform(this._status),
      cluster_config: dataYandexMdbMongodbClusterClusterConfigToTerraform(this._clusterConfig.internalValue),
      database: cdktf.listMapper(dataYandexMdbMongodbClusterDatabaseToTerraform, true)(this._database.internalValue),
      disk_size_autoscaling_mongocfg: dataYandexMdbMongodbClusterDiskSizeAutoscalingMongocfgToTerraform(this._diskSizeAutoscalingMongocfg.internalValue),
      disk_size_autoscaling_mongod: dataYandexMdbMongodbClusterDiskSizeAutoscalingMongodToTerraform(this._diskSizeAutoscalingMongod.internalValue),
      disk_size_autoscaling_mongoinfra: dataYandexMdbMongodbClusterDiskSizeAutoscalingMongoinfraToTerraform(this._diskSizeAutoscalingMongoinfra.internalValue),
      disk_size_autoscaling_mongos: dataYandexMdbMongodbClusterDiskSizeAutoscalingMongosToTerraform(this._diskSizeAutoscalingMongos.internalValue),
      host: cdktf.listMapper(dataYandexMdbMongodbClusterHostToTerraform, true)(this._host.internalValue),
      maintenance_window: dataYandexMdbMongodbClusterMaintenanceWindowToTerraform(this._maintenanceWindow.internalValue),
      resources: dataYandexMdbMongodbClusterResourcesToTerraform(this._resources.internalValue),
      resources_mongocfg: dataYandexMdbMongodbClusterResourcesMongocfgToTerraform(this._resourcesMongocfg.internalValue),
      resources_mongod: dataYandexMdbMongodbClusterResourcesMongodToTerraform(this._resourcesMongod.internalValue),
      resources_mongoinfra: dataYandexMdbMongodbClusterResourcesMongoinfraToTerraform(this._resourcesMongoinfra.internalValue),
      resources_mongos: dataYandexMdbMongodbClusterResourcesMongosToTerraform(this._resourcesMongos.internalValue),
      restore: dataYandexMdbMongodbClusterRestoreToTerraform(this._restore.internalValue),
      user: cdktf.listMapper(dataYandexMdbMongodbClusterUserToTerraform, true)(this._user.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      sharded: {
        value: cdktf.booleanToHclTerraform(this._sharded),
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
      cluster_config: {
        value: dataYandexMdbMongodbClusterClusterConfigToHclTerraform(this._clusterConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataYandexMdbMongodbClusterClusterConfigList",
      },
      database: {
        value: cdktf.listMapperHcl(dataYandexMdbMongodbClusterDatabaseToHclTerraform, true)(this._database.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataYandexMdbMongodbClusterDatabaseList",
      },
      disk_size_autoscaling_mongocfg: {
        value: dataYandexMdbMongodbClusterDiskSizeAutoscalingMongocfgToHclTerraform(this._diskSizeAutoscalingMongocfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataYandexMdbMongodbClusterDiskSizeAutoscalingMongocfgList",
      },
      disk_size_autoscaling_mongod: {
        value: dataYandexMdbMongodbClusterDiskSizeAutoscalingMongodToHclTerraform(this._diskSizeAutoscalingMongod.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataYandexMdbMongodbClusterDiskSizeAutoscalingMongodList",
      },
      disk_size_autoscaling_mongoinfra: {
        value: dataYandexMdbMongodbClusterDiskSizeAutoscalingMongoinfraToHclTerraform(this._diskSizeAutoscalingMongoinfra.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataYandexMdbMongodbClusterDiskSizeAutoscalingMongoinfraList",
      },
      disk_size_autoscaling_mongos: {
        value: dataYandexMdbMongodbClusterDiskSizeAutoscalingMongosToHclTerraform(this._diskSizeAutoscalingMongos.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataYandexMdbMongodbClusterDiskSizeAutoscalingMongosList",
      },
      host: {
        value: cdktf.listMapperHcl(dataYandexMdbMongodbClusterHostToHclTerraform, true)(this._host.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataYandexMdbMongodbClusterHostList",
      },
      maintenance_window: {
        value: dataYandexMdbMongodbClusterMaintenanceWindowToHclTerraform(this._maintenanceWindow.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataYandexMdbMongodbClusterMaintenanceWindowList",
      },
      resources: {
        value: dataYandexMdbMongodbClusterResourcesToHclTerraform(this._resources.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataYandexMdbMongodbClusterResourcesList",
      },
      resources_mongocfg: {
        value: dataYandexMdbMongodbClusterResourcesMongocfgToHclTerraform(this._resourcesMongocfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataYandexMdbMongodbClusterResourcesMongocfgList",
      },
      resources_mongod: {
        value: dataYandexMdbMongodbClusterResourcesMongodToHclTerraform(this._resourcesMongod.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataYandexMdbMongodbClusterResourcesMongodList",
      },
      resources_mongoinfra: {
        value: dataYandexMdbMongodbClusterResourcesMongoinfraToHclTerraform(this._resourcesMongoinfra.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataYandexMdbMongodbClusterResourcesMongoinfraList",
      },
      resources_mongos: {
        value: dataYandexMdbMongodbClusterResourcesMongosToHclTerraform(this._resourcesMongos.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataYandexMdbMongodbClusterResourcesMongosList",
      },
      restore: {
        value: dataYandexMdbMongodbClusterRestoreToHclTerraform(this._restore.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataYandexMdbMongodbClusterRestoreList",
      },
      user: {
        value: cdktf.listMapperHcl(dataYandexMdbMongodbClusterUserToHclTerraform, true)(this._user.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataYandexMdbMongodbClusterUserList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
