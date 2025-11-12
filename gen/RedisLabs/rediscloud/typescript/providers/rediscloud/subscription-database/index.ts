// https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/subscription_database
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SubscriptionDatabaseConfig extends cdktf.TerraformMetaArguments {
  /**
  * Relevant only to ram-and-flash clusters. Estimated average size (measured in bytes) of the items stored in the database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/subscription_database#average_item_size_in_bytes SubscriptionDatabase#average_item_size_in_bytes}
  */
  readonly averageItemSizeInBytes?: number;
  /**
  * SSL certificate to authenticate user connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/subscription_database#client_ssl_certificate SubscriptionDatabase#client_ssl_certificate}
  */
  readonly clientSslCertificate?: string;
  /**
  * TLS certificates to authenticate user connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/subscription_database#client_tls_certificates SubscriptionDatabase#client_tls_certificates}
  */
  readonly clientTlsCertificates?: string[];
  /**
  * (Optional) The data items eviction policy (either: 'allkeys-lru', 'allkeys-lfu', 'allkeys-random', 'volatile-lru', 'volatile-lfu', 'volatile-random', 'volatile-ttl' or 'noeviction'. Default: 'volatile-lru')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/subscription_database#data_eviction SubscriptionDatabase#data_eviction}
  */
  readonly dataEviction?: string;
  /**
  * Rate of database data persistence (in persistent storage)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/subscription_database#data_persistence SubscriptionDatabase#data_persistence}
  */
  readonly dataPersistence?: string;
  /**
  * Maximum amount of data in the dataset for this specific database in GB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/subscription_database#dataset_size_in_gb SubscriptionDatabase#dataset_size_in_gb}
  */
  readonly datasetSizeInGb?: number;
  /**
  * When 'true', enables connecting to the database with the 'default' user. Default: 'true'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/subscription_database#enable_default_user SubscriptionDatabase#enable_default_user}
  */
  readonly enableDefaultUser?: boolean | cdktf.IResolvable;
  /**
  * Use TLS for authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/subscription_database#enable_tls SubscriptionDatabase#enable_tls}
  */
  readonly enableTls?: boolean | cdktf.IResolvable;
  /**
  * Should use the external endpoint for open-source (OSS) Cluster API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/subscription_database#external_endpoint_for_oss_cluster_api SubscriptionDatabase#external_endpoint_for_oss_cluster_api}
  */
  readonly externalEndpointForOssClusterApi?: boolean | cdktf.IResolvable;
  /**
  * List of regular expression rules to shard the database by. See the documentation on clustering for more information on the hashing policy - https://docs.redislabs.com/latest/rc/concepts/clustering/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/subscription_database#hashing_policy SubscriptionDatabase#hashing_policy}
  */
  readonly hashingPolicy?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/subscription_database#id SubscriptionDatabase#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * (Deprecated) Maximum memory usage for this specific database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/subscription_database#memory_limit_in_gb SubscriptionDatabase#memory_limit_in_gb}
  */
  readonly memoryLimitInGb?: number;
  /**
  * Modules to be provisioned in the database. Note: NOT supported for Redis 8.0 and higher as modules are bundled by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/subscription_database#modules SubscriptionDatabase#modules}
  */
  readonly modules?: SubscriptionDatabaseModules[] | cdktf.IResolvable;
  /**
  * A meaningful name to identify the database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/subscription_database#name SubscriptionDatabase#name}
  */
  readonly name: string;
  /**
  * Password used to access the database. If left empty, the password will be generated automatically
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/subscription_database#password SubscriptionDatabase#password}
  */
  readonly password?: string;
  /**
  * Path that will be used to store database backup files
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/subscription_database#periodic_backup_path SubscriptionDatabase#periodic_backup_path}
  */
  readonly periodicBackupPath?: string;
  /**
  * TCP port on which the database is available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/subscription_database#port SubscriptionDatabase#port}
  */
  readonly port?: number;
  /**
  * The protocol that will be used to access the database (either ‘redis’ or 'memcached’)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/subscription_database#protocol SubscriptionDatabase#protocol}
  */
  readonly protocol?: string;
  /**
  * Query performance factor for this specific database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/subscription_database#query_performance_factor SubscriptionDatabase#query_performance_factor}
  */
  readonly queryPerformanceFactor?: string;
  /**
  * Defines the Redis database version. If omitted, the Redis version will be set to the default version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/subscription_database#redis_version SubscriptionDatabase#redis_version}
  */
  readonly redisVersion?: string;
  /**
  * Set of Redis database URIs, in the format `redis://user:password@host:port`, that this database will be a replica of. If the URI provided is Redis Labs Cloud instance, only host and port should be provided
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/subscription_database#replica_of SubscriptionDatabase#replica_of}
  */
  readonly replicaOf?: string[];
  /**
  * Databases replication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/subscription_database#replication SubscriptionDatabase#replication}
  */
  readonly replication?: boolean | cdktf.IResolvable;
  /**
  * The database's RESP version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/subscription_database#resp_version SubscriptionDatabase#resp_version}
  */
  readonly respVersion?: string;
  /**
  * Set of CIDR addresses to allow access to the database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/subscription_database#source_ips SubscriptionDatabase#source_ips}
  */
  readonly sourceIps?: string[];
  /**
  * Identifier of the pro subscription
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/subscription_database#subscription_id SubscriptionDatabase#subscription_id}
  */
  readonly subscriptionId: number;
  /**
  * Support Redis open-source (OSS) Cluster API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/subscription_database#support_oss_cluster_api SubscriptionDatabase#support_oss_cluster_api}
  */
  readonly supportOssClusterApi?: boolean | cdktf.IResolvable;
  /**
  * Tags for database management
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/subscription_database#tags SubscriptionDatabase#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Throughput measurement method, (either ‘number-of-shards’ or ‘operations-per-second’)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/subscription_database#throughput_measurement_by SubscriptionDatabase#throughput_measurement_by}
  */
  readonly throughputMeasurementBy: string;
  /**
  * Throughput value (as applies to selected measurement method)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/subscription_database#throughput_measurement_value SubscriptionDatabase#throughput_measurement_value}
  */
  readonly throughputMeasurementValue: number;
  /**
  * alert block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/subscription_database#alert SubscriptionDatabase#alert}
  */
  readonly alert?: SubscriptionDatabaseAlert[] | cdktf.IResolvable;
  /**
  * remote_backup block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/subscription_database#remote_backup SubscriptionDatabase#remote_backup}
  */
  readonly remoteBackup?: SubscriptionDatabaseRemoteBackup;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/subscription_database#timeouts SubscriptionDatabase#timeouts}
  */
  readonly timeouts?: SubscriptionDatabaseTimeouts;
}
export interface SubscriptionDatabaseModules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/subscription_database#name SubscriptionDatabase#name}
  */
  readonly name?: string;
}

export function subscriptionDatabaseModulesToTerraform(struct?: SubscriptionDatabaseModules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function subscriptionDatabaseModulesToHclTerraform(struct?: SubscriptionDatabaseModules | cdktf.IResolvable): any {
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

export class SubscriptionDatabaseModulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SubscriptionDatabaseModules | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SubscriptionDatabaseModules | cdktf.IResolvable | undefined) {
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

export class SubscriptionDatabaseModulesList extends cdktf.ComplexList {
  public internalValue? : SubscriptionDatabaseModules[] | cdktf.IResolvable

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
  public get(index: number): SubscriptionDatabaseModulesOutputReference {
    return new SubscriptionDatabaseModulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SubscriptionDatabaseAlert {
  /**
  * Alert name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/subscription_database#name SubscriptionDatabase#name}
  */
  readonly name: string;
  /**
  * Alert value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/subscription_database#value SubscriptionDatabase#value}
  */
  readonly value: number;
}

export function subscriptionDatabaseAlertToTerraform(struct?: SubscriptionDatabaseAlert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function subscriptionDatabaseAlertToHclTerraform(struct?: SubscriptionDatabaseAlert | cdktf.IResolvable): any {
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
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SubscriptionDatabaseAlertOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SubscriptionDatabaseAlert | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SubscriptionDatabaseAlert | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
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

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class SubscriptionDatabaseAlertList extends cdktf.ComplexList {
  public internalValue? : SubscriptionDatabaseAlert[] | cdktf.IResolvable

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
  public get(index: number): SubscriptionDatabaseAlertOutputReference {
    return new SubscriptionDatabaseAlertOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SubscriptionDatabaseRemoteBackup {
  /**
  * Defines the frequency of the automatic backup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/subscription_database#interval SubscriptionDatabase#interval}
  */
  readonly interval: string;
  /**
  * Defines a URI representing the backup storage location
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/subscription_database#storage_path SubscriptionDatabase#storage_path}
  */
  readonly storagePath: string;
  /**
  * Defines the provider of the storage location
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/subscription_database#storage_type SubscriptionDatabase#storage_type}
  */
  readonly storageType: string;
  /**
  * Defines the hour automatic backups are made - only applicable when interval is `every-12-hours` or `every-24-hours`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/subscription_database#time_utc SubscriptionDatabase#time_utc}
  */
  readonly timeUtc?: string;
}

export function subscriptionDatabaseRemoteBackupToTerraform(struct?: SubscriptionDatabaseRemoteBackupOutputReference | SubscriptionDatabaseRemoteBackup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interval: cdktf.stringToTerraform(struct!.interval),
    storage_path: cdktf.stringToTerraform(struct!.storagePath),
    storage_type: cdktf.stringToTerraform(struct!.storageType),
    time_utc: cdktf.stringToTerraform(struct!.timeUtc),
  }
}


export function subscriptionDatabaseRemoteBackupToHclTerraform(struct?: SubscriptionDatabaseRemoteBackupOutputReference | SubscriptionDatabaseRemoteBackup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interval: {
      value: cdktf.stringToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_path: {
      value: cdktf.stringToHclTerraform(struct!.storagePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_type: {
      value: cdktf.stringToHclTerraform(struct!.storageType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_utc: {
      value: cdktf.stringToHclTerraform(struct!.timeUtc),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SubscriptionDatabaseRemoteBackupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SubscriptionDatabaseRemoteBackup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._storagePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.storagePath = this._storagePath;
    }
    if (this._storageType !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageType = this._storageType;
    }
    if (this._timeUtc !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeUtc = this._timeUtc;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SubscriptionDatabaseRemoteBackup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._interval = undefined;
      this._storagePath = undefined;
      this._storageType = undefined;
      this._timeUtc = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._interval = value.interval;
      this._storagePath = value.storagePath;
      this._storageType = value.storageType;
      this._timeUtc = value.timeUtc;
    }
  }

  // interval - computed: false, optional: false, required: true
  private _interval?: string; 
  public get interval() {
    return this.getStringAttribute('interval');
  }
  public set interval(value: string) {
    this._interval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // storage_path - computed: false, optional: false, required: true
  private _storagePath?: string; 
  public get storagePath() {
    return this.getStringAttribute('storage_path');
  }
  public set storagePath(value: string) {
    this._storagePath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storagePathInput() {
    return this._storagePath;
  }

  // storage_type - computed: false, optional: false, required: true
  private _storageType?: string; 
  public get storageType() {
    return this.getStringAttribute('storage_type');
  }
  public set storageType(value: string) {
    this._storageType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageTypeInput() {
    return this._storageType;
  }

  // time_utc - computed: false, optional: true, required: false
  private _timeUtc?: string; 
  public get timeUtc() {
    return this.getStringAttribute('time_utc');
  }
  public set timeUtc(value: string) {
    this._timeUtc = value;
  }
  public resetTimeUtc() {
    this._timeUtc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeUtcInput() {
    return this._timeUtc;
  }
}
export interface SubscriptionDatabaseTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/subscription_database#create SubscriptionDatabase#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/subscription_database#delete SubscriptionDatabase#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/subscription_database#read SubscriptionDatabase#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/subscription_database#update SubscriptionDatabase#update}
  */
  readonly update?: string;
}

export function subscriptionDatabaseTimeoutsToTerraform(struct?: SubscriptionDatabaseTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function subscriptionDatabaseTimeoutsToHclTerraform(struct?: SubscriptionDatabaseTimeouts | cdktf.IResolvable): any {
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
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
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

export class SubscriptionDatabaseTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SubscriptionDatabaseTimeouts | cdktf.IResolvable | undefined {
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
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SubscriptionDatabaseTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
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
      this._read = value.read;
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

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
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
* Represents a {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/subscription_database rediscloud_subscription_database}
*/
export class SubscriptionDatabase extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rediscloud_subscription_database";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SubscriptionDatabase resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SubscriptionDatabase to import
  * @param importFromId The id of the existing SubscriptionDatabase that should be imported. Refer to the {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/subscription_database#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SubscriptionDatabase to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rediscloud_subscription_database", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.8.0/docs/resources/subscription_database rediscloud_subscription_database} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SubscriptionDatabaseConfig
  */
  public constructor(scope: Construct, id: string, config: SubscriptionDatabaseConfig) {
    super(scope, id, {
      terraformResourceType: 'rediscloud_subscription_database',
      terraformGeneratorMetadata: {
        providerName: 'rediscloud',
        providerVersion: '2.8.0',
        providerVersionConstraint: '2.8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._averageItemSizeInBytes = config.averageItemSizeInBytes;
    this._clientSslCertificate = config.clientSslCertificate;
    this._clientTlsCertificates = config.clientTlsCertificates;
    this._dataEviction = config.dataEviction;
    this._dataPersistence = config.dataPersistence;
    this._datasetSizeInGb = config.datasetSizeInGb;
    this._enableDefaultUser = config.enableDefaultUser;
    this._enableTls = config.enableTls;
    this._externalEndpointForOssClusterApi = config.externalEndpointForOssClusterApi;
    this._hashingPolicy = config.hashingPolicy;
    this._id = config.id;
    this._memoryLimitInGb = config.memoryLimitInGb;
    this._modules.internalValue = config.modules;
    this._name = config.name;
    this._password = config.password;
    this._periodicBackupPath = config.periodicBackupPath;
    this._port = config.port;
    this._protocol = config.protocol;
    this._queryPerformanceFactor = config.queryPerformanceFactor;
    this._redisVersion = config.redisVersion;
    this._replicaOf = config.replicaOf;
    this._replication = config.replication;
    this._respVersion = config.respVersion;
    this._sourceIps = config.sourceIps;
    this._subscriptionId = config.subscriptionId;
    this._supportOssClusterApi = config.supportOssClusterApi;
    this._tags = config.tags;
    this._throughputMeasurementBy = config.throughputMeasurementBy;
    this._throughputMeasurementValue = config.throughputMeasurementValue;
    this._alert.internalValue = config.alert;
    this._remoteBackup.internalValue = config.remoteBackup;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // average_item_size_in_bytes - computed: false, optional: true, required: false
  private _averageItemSizeInBytes?: number; 
  public get averageItemSizeInBytes() {
    return this.getNumberAttribute('average_item_size_in_bytes');
  }
  public set averageItemSizeInBytes(value: number) {
    this._averageItemSizeInBytes = value;
  }
  public resetAverageItemSizeInBytes() {
    this._averageItemSizeInBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get averageItemSizeInBytesInput() {
    return this._averageItemSizeInBytes;
  }

  // client_ssl_certificate - computed: false, optional: true, required: false
  private _clientSslCertificate?: string; 
  public get clientSslCertificate() {
    return this.getStringAttribute('client_ssl_certificate');
  }
  public set clientSslCertificate(value: string) {
    this._clientSslCertificate = value;
  }
  public resetClientSslCertificate() {
    this._clientSslCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSslCertificateInput() {
    return this._clientSslCertificate;
  }

  // client_tls_certificates - computed: false, optional: true, required: false
  private _clientTlsCertificates?: string[]; 
  public get clientTlsCertificates() {
    return this.getListAttribute('client_tls_certificates');
  }
  public set clientTlsCertificates(value: string[]) {
    this._clientTlsCertificates = value;
  }
  public resetClientTlsCertificates() {
    this._clientTlsCertificates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientTlsCertificatesInput() {
    return this._clientTlsCertificates;
  }

  // data_eviction - computed: false, optional: true, required: false
  private _dataEviction?: string; 
  public get dataEviction() {
    return this.getStringAttribute('data_eviction');
  }
  public set dataEviction(value: string) {
    this._dataEviction = value;
  }
  public resetDataEviction() {
    this._dataEviction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataEvictionInput() {
    return this._dataEviction;
  }

  // data_persistence - computed: false, optional: true, required: false
  private _dataPersistence?: string; 
  public get dataPersistence() {
    return this.getStringAttribute('data_persistence');
  }
  public set dataPersistence(value: string) {
    this._dataPersistence = value;
  }
  public resetDataPersistence() {
    this._dataPersistence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataPersistenceInput() {
    return this._dataPersistence;
  }

  // dataset_size_in_gb - computed: true, optional: true, required: false
  private _datasetSizeInGb?: number; 
  public get datasetSizeInGb() {
    return this.getNumberAttribute('dataset_size_in_gb');
  }
  public set datasetSizeInGb(value: number) {
    this._datasetSizeInGb = value;
  }
  public resetDatasetSizeInGb() {
    this._datasetSizeInGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetSizeInGbInput() {
    return this._datasetSizeInGb;
  }

  // db_id - computed: true, optional: false, required: false
  public get dbId() {
    return this.getNumberAttribute('db_id');
  }

  // enable_default_user - computed: false, optional: true, required: false
  private _enableDefaultUser?: boolean | cdktf.IResolvable; 
  public get enableDefaultUser() {
    return this.getBooleanAttribute('enable_default_user');
  }
  public set enableDefaultUser(value: boolean | cdktf.IResolvable) {
    this._enableDefaultUser = value;
  }
  public resetEnableDefaultUser() {
    this._enableDefaultUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDefaultUserInput() {
    return this._enableDefaultUser;
  }

  // enable_tls - computed: false, optional: true, required: false
  private _enableTls?: boolean | cdktf.IResolvable; 
  public get enableTls() {
    return this.getBooleanAttribute('enable_tls');
  }
  public set enableTls(value: boolean | cdktf.IResolvable) {
    this._enableTls = value;
  }
  public resetEnableTls() {
    this._enableTls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTlsInput() {
    return this._enableTls;
  }

  // external_endpoint_for_oss_cluster_api - computed: false, optional: true, required: false
  private _externalEndpointForOssClusterApi?: boolean | cdktf.IResolvable; 
  public get externalEndpointForOssClusterApi() {
    return this.getBooleanAttribute('external_endpoint_for_oss_cluster_api');
  }
  public set externalEndpointForOssClusterApi(value: boolean | cdktf.IResolvable) {
    this._externalEndpointForOssClusterApi = value;
  }
  public resetExternalEndpointForOssClusterApi() {
    this._externalEndpointForOssClusterApi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalEndpointForOssClusterApiInput() {
    return this._externalEndpointForOssClusterApi;
  }

  // hashing_policy - computed: true, optional: true, required: false
  private _hashingPolicy?: string[]; 
  public get hashingPolicy() {
    return this.getListAttribute('hashing_policy');
  }
  public set hashingPolicy(value: string[]) {
    this._hashingPolicy = value;
  }
  public resetHashingPolicy() {
    this._hashingPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashingPolicyInput() {
    return this._hashingPolicy;
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

  // memory_limit_in_gb - computed: true, optional: true, required: false
  private _memoryLimitInGb?: number; 
  public get memoryLimitInGb() {
    return this.getNumberAttribute('memory_limit_in_gb');
  }
  public set memoryLimitInGb(value: number) {
    this._memoryLimitInGb = value;
  }
  public resetMemoryLimitInGb() {
    this._memoryLimitInGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryLimitInGbInput() {
    return this._memoryLimitInGb;
  }

  // modules - computed: false, optional: true, required: false
  private _modules = new SubscriptionDatabaseModulesList(this, "modules", true);
  public get modules() {
    return this._modules;
  }
  public putModules(value: SubscriptionDatabaseModules[] | cdktf.IResolvable) {
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

  // periodic_backup_path - computed: false, optional: true, required: false
  private _periodicBackupPath?: string; 
  public get periodicBackupPath() {
    return this.getStringAttribute('periodic_backup_path');
  }
  public set periodicBackupPath(value: string) {
    this._periodicBackupPath = value;
  }
  public resetPeriodicBackupPath() {
    this._periodicBackupPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodicBackupPathInput() {
    return this._periodicBackupPath;
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

  // private_endpoint - computed: true, optional: false, required: false
  public get privateEndpoint() {
    return this.getStringAttribute('private_endpoint');
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // public_endpoint - computed: true, optional: false, required: false
  public get publicEndpoint() {
    return this.getStringAttribute('public_endpoint');
  }

  // query_performance_factor - computed: true, optional: true, required: false
  private _queryPerformanceFactor?: string; 
  public get queryPerformanceFactor() {
    return this.getStringAttribute('query_performance_factor');
  }
  public set queryPerformanceFactor(value: string) {
    this._queryPerformanceFactor = value;
  }
  public resetQueryPerformanceFactor() {
    this._queryPerformanceFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryPerformanceFactorInput() {
    return this._queryPerformanceFactor;
  }

  // redis_version - computed: true, optional: true, required: false
  private _redisVersion?: string; 
  public get redisVersion() {
    return this.getStringAttribute('redis_version');
  }
  public set redisVersion(value: string) {
    this._redisVersion = value;
  }
  public resetRedisVersion() {
    this._redisVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redisVersionInput() {
    return this._redisVersion;
  }

  // replica_of - computed: false, optional: true, required: false
  private _replicaOf?: string[]; 
  public get replicaOf() {
    return cdktf.Fn.tolist(this.getListAttribute('replica_of'));
  }
  public set replicaOf(value: string[]) {
    this._replicaOf = value;
  }
  public resetReplicaOf() {
    this._replicaOf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicaOfInput() {
    return this._replicaOf;
  }

  // replication - computed: false, optional: true, required: false
  private _replication?: boolean | cdktf.IResolvable; 
  public get replication() {
    return this.getBooleanAttribute('replication');
  }
  public set replication(value: boolean | cdktf.IResolvable) {
    this._replication = value;
  }
  public resetReplication() {
    this._replication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationInput() {
    return this._replication;
  }

  // resp_version - computed: true, optional: true, required: false
  private _respVersion?: string; 
  public get respVersion() {
    return this.getStringAttribute('resp_version');
  }
  public set respVersion(value: string) {
    this._respVersion = value;
  }
  public resetRespVersion() {
    this._respVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get respVersionInput() {
    return this._respVersion;
  }

  // source_ips - computed: false, optional: true, required: false
  private _sourceIps?: string[]; 
  public get sourceIps() {
    return cdktf.Fn.tolist(this.getListAttribute('source_ips'));
  }
  public set sourceIps(value: string[]) {
    this._sourceIps = value;
  }
  public resetSourceIps() {
    this._sourceIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpsInput() {
    return this._sourceIps;
  }

  // subscription_id - computed: false, optional: false, required: true
  private _subscriptionId?: number; 
  public get subscriptionId() {
    return this.getNumberAttribute('subscription_id');
  }
  public set subscriptionId(value: number) {
    this._subscriptionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionIdInput() {
    return this._subscriptionId;
  }

  // support_oss_cluster_api - computed: false, optional: true, required: false
  private _supportOssClusterApi?: boolean | cdktf.IResolvable; 
  public get supportOssClusterApi() {
    return this.getBooleanAttribute('support_oss_cluster_api');
  }
  public set supportOssClusterApi(value: boolean | cdktf.IResolvable) {
    this._supportOssClusterApi = value;
  }
  public resetSupportOssClusterApi() {
    this._supportOssClusterApi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportOssClusterApiInput() {
    return this._supportOssClusterApi;
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

  // throughput_measurement_by - computed: false, optional: false, required: true
  private _throughputMeasurementBy?: string; 
  public get throughputMeasurementBy() {
    return this.getStringAttribute('throughput_measurement_by');
  }
  public set throughputMeasurementBy(value: string) {
    this._throughputMeasurementBy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get throughputMeasurementByInput() {
    return this._throughputMeasurementBy;
  }

  // throughput_measurement_value - computed: false, optional: false, required: true
  private _throughputMeasurementValue?: number; 
  public get throughputMeasurementValue() {
    return this.getNumberAttribute('throughput_measurement_value');
  }
  public set throughputMeasurementValue(value: number) {
    this._throughputMeasurementValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get throughputMeasurementValueInput() {
    return this._throughputMeasurementValue;
  }

  // alert - computed: false, optional: true, required: false
  private _alert = new SubscriptionDatabaseAlertList(this, "alert", true);
  public get alert() {
    return this._alert;
  }
  public putAlert(value: SubscriptionDatabaseAlert[] | cdktf.IResolvable) {
    this._alert.internalValue = value;
  }
  public resetAlert() {
    this._alert.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertInput() {
    return this._alert.internalValue;
  }

  // remote_backup - computed: false, optional: true, required: false
  private _remoteBackup = new SubscriptionDatabaseRemoteBackupOutputReference(this, "remote_backup");
  public get remoteBackup() {
    return this._remoteBackup;
  }
  public putRemoteBackup(value: SubscriptionDatabaseRemoteBackup) {
    this._remoteBackup.internalValue = value;
  }
  public resetRemoteBackup() {
    this._remoteBackup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteBackupInput() {
    return this._remoteBackup.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SubscriptionDatabaseTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SubscriptionDatabaseTimeouts) {
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
      average_item_size_in_bytes: cdktf.numberToTerraform(this._averageItemSizeInBytes),
      client_ssl_certificate: cdktf.stringToTerraform(this._clientSslCertificate),
      client_tls_certificates: cdktf.listMapper(cdktf.stringToTerraform, false)(this._clientTlsCertificates),
      data_eviction: cdktf.stringToTerraform(this._dataEviction),
      data_persistence: cdktf.stringToTerraform(this._dataPersistence),
      dataset_size_in_gb: cdktf.numberToTerraform(this._datasetSizeInGb),
      enable_default_user: cdktf.booleanToTerraform(this._enableDefaultUser),
      enable_tls: cdktf.booleanToTerraform(this._enableTls),
      external_endpoint_for_oss_cluster_api: cdktf.booleanToTerraform(this._externalEndpointForOssClusterApi),
      hashing_policy: cdktf.listMapper(cdktf.stringToTerraform, false)(this._hashingPolicy),
      id: cdktf.stringToTerraform(this._id),
      memory_limit_in_gb: cdktf.numberToTerraform(this._memoryLimitInGb),
      modules: cdktf.listMapper(subscriptionDatabaseModulesToTerraform, false)(this._modules.internalValue),
      name: cdktf.stringToTerraform(this._name),
      password: cdktf.stringToTerraform(this._password),
      periodic_backup_path: cdktf.stringToTerraform(this._periodicBackupPath),
      port: cdktf.numberToTerraform(this._port),
      protocol: cdktf.stringToTerraform(this._protocol),
      query_performance_factor: cdktf.stringToTerraform(this._queryPerformanceFactor),
      redis_version: cdktf.stringToTerraform(this._redisVersion),
      replica_of: cdktf.listMapper(cdktf.stringToTerraform, false)(this._replicaOf),
      replication: cdktf.booleanToTerraform(this._replication),
      resp_version: cdktf.stringToTerraform(this._respVersion),
      source_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sourceIps),
      subscription_id: cdktf.numberToTerraform(this._subscriptionId),
      support_oss_cluster_api: cdktf.booleanToTerraform(this._supportOssClusterApi),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      throughput_measurement_by: cdktf.stringToTerraform(this._throughputMeasurementBy),
      throughput_measurement_value: cdktf.numberToTerraform(this._throughputMeasurementValue),
      alert: cdktf.listMapper(subscriptionDatabaseAlertToTerraform, true)(this._alert.internalValue),
      remote_backup: subscriptionDatabaseRemoteBackupToTerraform(this._remoteBackup.internalValue),
      timeouts: subscriptionDatabaseTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      average_item_size_in_bytes: {
        value: cdktf.numberToHclTerraform(this._averageItemSizeInBytes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      client_ssl_certificate: {
        value: cdktf.stringToHclTerraform(this._clientSslCertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_tls_certificates: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._clientTlsCertificates),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      data_eviction: {
        value: cdktf.stringToHclTerraform(this._dataEviction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_persistence: {
        value: cdktf.stringToHclTerraform(this._dataPersistence),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dataset_size_in_gb: {
        value: cdktf.numberToHclTerraform(this._datasetSizeInGb),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enable_default_user: {
        value: cdktf.booleanToHclTerraform(this._enableDefaultUser),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_tls: {
        value: cdktf.booleanToHclTerraform(this._enableTls),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      external_endpoint_for_oss_cluster_api: {
        value: cdktf.booleanToHclTerraform(this._externalEndpointForOssClusterApi),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      hashing_policy: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._hashingPolicy),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      memory_limit_in_gb: {
        value: cdktf.numberToHclTerraform(this._memoryLimitInGb),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      modules: {
        value: cdktf.listMapperHcl(subscriptionDatabaseModulesToHclTerraform, false)(this._modules.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SubscriptionDatabaseModulesList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      periodic_backup_path: {
        value: cdktf.stringToHclTerraform(this._periodicBackupPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      query_performance_factor: {
        value: cdktf.stringToHclTerraform(this._queryPerformanceFactor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      redis_version: {
        value: cdktf.stringToHclTerraform(this._redisVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      replica_of: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._replicaOf),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      replication: {
        value: cdktf.booleanToHclTerraform(this._replication),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      resp_version: {
        value: cdktf.stringToHclTerraform(this._respVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_ips: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sourceIps),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      subscription_id: {
        value: cdktf.numberToHclTerraform(this._subscriptionId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      support_oss_cluster_api: {
        value: cdktf.booleanToHclTerraform(this._supportOssClusterApi),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      throughput_measurement_by: {
        value: cdktf.stringToHclTerraform(this._throughputMeasurementBy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      throughput_measurement_value: {
        value: cdktf.numberToHclTerraform(this._throughputMeasurementValue),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      alert: {
        value: cdktf.listMapperHcl(subscriptionDatabaseAlertToHclTerraform, true)(this._alert.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SubscriptionDatabaseAlertList",
      },
      remote_backup: {
        value: subscriptionDatabaseRemoteBackupToHclTerraform(this._remoteBackup.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SubscriptionDatabaseRemoteBackupList",
      },
      timeouts: {
        value: subscriptionDatabaseTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SubscriptionDatabaseTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
