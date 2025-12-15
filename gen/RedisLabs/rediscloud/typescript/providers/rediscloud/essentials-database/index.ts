// https://registry.terraform.io/providers/redislabs/rediscloud/2.9.0/docs/resources/essentials_database
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EssentialsDatabaseConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.9.0/docs/resources/essentials_database#client_tls_certificates EssentialsDatabase#client_tls_certificates}
  */
  readonly clientTlsCertificates?: string[];
  /**
  * The data items eviction policy (either: 'allkeys-lru', 'allkeys-lfu', 'allkeys-random', 'volatile-lru', 'volatile-lfu', 'volatile-random', 'volatile-ttl' or 'noeviction'. Default: 'volatile-lru')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.9.0/docs/resources/essentials_database#data_eviction EssentialsDatabase#data_eviction}
  */
  readonly dataEviction?: string;
  /**
  * Rate of database data persistence (in persistent storage).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.9.0/docs/resources/essentials_database#data_persistence EssentialsDatabase#data_persistence}
  */
  readonly dataPersistence: string;
  /**
  * Distributes database data to different cloud instances
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.9.0/docs/resources/essentials_database#enable_database_clustering EssentialsDatabase#enable_database_clustering}
  */
  readonly enableDatabaseClustering?: boolean | cdktf.IResolvable;
  /**
  * When 'true', enables connecting to the database with the 'default' user. Default: 'true'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.9.0/docs/resources/essentials_database#enable_default_user EssentialsDatabase#enable_default_user}
  */
  readonly enableDefaultUser?: boolean | cdktf.IResolvable;
  /**
  * Enable features for PAYG databases
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.9.0/docs/resources/essentials_database#enable_payg_features EssentialsDatabase#enable_payg_features}
  */
  readonly enablePaygFeatures?: boolean | cdktf.IResolvable;
  /**
  * Use TLS for authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.9.0/docs/resources/essentials_database#enable_tls EssentialsDatabase#enable_tls}
  */
  readonly enableTls?: boolean | cdktf.IResolvable;
  /**
  * Should use the external endpoint for open-source (OSS) Cluster API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.9.0/docs/resources/essentials_database#external_endpoint_for_oss_cluster_api EssentialsDatabase#external_endpoint_for_oss_cluster_api}
  */
  readonly externalEndpointForOssClusterApi?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.9.0/docs/resources/essentials_database#id EssentialsDatabase#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Maximum memory usage for this specific database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.9.0/docs/resources/essentials_database#memory_limit_in_gb EssentialsDatabase#memory_limit_in_gb}
  */
  readonly memoryLimitInGb?: number;
  /**
  * Modules to be provisioned in the database. Note: Not supported for Redis 8.0 and higher as modules are bundled by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.9.0/docs/resources/essentials_database#modules EssentialsDatabase#modules}
  */
  readonly modules?: EssentialsDatabaseModules[] | cdktf.IResolvable;
  /**
  * A meaningful name to identify the database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.9.0/docs/resources/essentials_database#name EssentialsDatabase#name}
  */
  readonly name: string;
  /**
  * Password used to access the database. If left empty, the password will be generated automatically
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.9.0/docs/resources/essentials_database#password EssentialsDatabase#password}
  */
  readonly password?: string;
  /**
  * Path that will be used to store database backup files
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.9.0/docs/resources/essentials_database#periodic_backup_path EssentialsDatabase#periodic_backup_path}
  */
  readonly periodicBackupPath?: string;
  /**
  * The protocol that will be used to access the database, (either 'redis', 'memcached' or 'stack')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.9.0/docs/resources/essentials_database#protocol EssentialsDatabase#protocol}
  */
  readonly protocol?: string;
  /**
  * Defines the Redis database version. If omitted, the Redis version will be set to the default version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.9.0/docs/resources/essentials_database#redis_version EssentialsDatabase#redis_version}
  */
  readonly redisVersion?: string;
  /**
  * Shard regex rules. Relevant only for a sharded database. Supported only for 'Pay-As-You-Go' subscriptions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.9.0/docs/resources/essentials_database#regex_rules EssentialsDatabase#regex_rules}
  */
  readonly regexRules?: string[];
  /**
  * Database's replication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.9.0/docs/resources/essentials_database#replication EssentialsDatabase#replication}
  */
  readonly replication: boolean | cdktf.IResolvable;
  /**
  * RESP version must be compatible with Redis version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.9.0/docs/resources/essentials_database#resp_version EssentialsDatabase#resp_version}
  */
  readonly respVersion?: string;
  /**
  * Set of CIDR addresses to allow access to the database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.9.0/docs/resources/essentials_database#source_ips EssentialsDatabase#source_ips}
  */
  readonly sourceIps?: string[];
  /**
  * Identifier of the essentials subscription
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.9.0/docs/resources/essentials_database#subscription_id EssentialsDatabase#subscription_id}
  */
  readonly subscriptionId: number;
  /**
  * Support Redis open-source (OSS) Cluster API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.9.0/docs/resources/essentials_database#support_oss_cluster_api EssentialsDatabase#support_oss_cluster_api}
  */
  readonly supportOssClusterApi?: boolean | cdktf.IResolvable;
  /**
  * Tags for database management
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.9.0/docs/resources/essentials_database#tags EssentialsDatabase#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * alert block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.9.0/docs/resources/essentials_database#alert EssentialsDatabase#alert}
  */
  readonly alert?: EssentialsDatabaseAlert[] | cdktf.IResolvable;
  /**
  * replica block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.9.0/docs/resources/essentials_database#replica EssentialsDatabase#replica}
  */
  readonly replica?: EssentialsDatabaseReplica;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.9.0/docs/resources/essentials_database#timeouts EssentialsDatabase#timeouts}
  */
  readonly timeouts?: EssentialsDatabaseTimeouts;
}
export interface EssentialsDatabaseModules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.9.0/docs/resources/essentials_database#name EssentialsDatabase#name}
  */
  readonly name?: string;
}

export function essentialsDatabaseModulesToTerraform(struct?: EssentialsDatabaseModules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function essentialsDatabaseModulesToHclTerraform(struct?: EssentialsDatabaseModules | cdktf.IResolvable): any {
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

export class EssentialsDatabaseModulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EssentialsDatabaseModules | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EssentialsDatabaseModules | cdktf.IResolvable | undefined) {
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
}

export class EssentialsDatabaseModulesList extends cdktf.ComplexList {
  public internalValue? : EssentialsDatabaseModules[] | cdktf.IResolvable

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
  public get(index: number): EssentialsDatabaseModulesOutputReference {
    return new EssentialsDatabaseModulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EssentialsDatabaseAlert {
  /**
  * Alert name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.9.0/docs/resources/essentials_database#name EssentialsDatabase#name}
  */
  readonly name: string;
  /**
  * Alert value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.9.0/docs/resources/essentials_database#value EssentialsDatabase#value}
  */
  readonly value: number;
}

export function essentialsDatabaseAlertToTerraform(struct?: EssentialsDatabaseAlert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function essentialsDatabaseAlertToHclTerraform(struct?: EssentialsDatabaseAlert | cdktf.IResolvable): any {
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

export class EssentialsDatabaseAlertOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EssentialsDatabaseAlert | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EssentialsDatabaseAlert | cdktf.IResolvable | undefined) {
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

export class EssentialsDatabaseAlertList extends cdktf.ComplexList {
  public internalValue? : EssentialsDatabaseAlert[] | cdktf.IResolvable

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
  public get(index: number): EssentialsDatabaseAlertOutputReference {
    return new EssentialsDatabaseAlertOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EssentialsDatabaseReplicaSyncSource {
  /**
  * Defines if encryption should be used to connect to the sync source. If not provided and if the source is a Redis Cloud instance, it will automatically detect if the source uses encryption
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.9.0/docs/resources/essentials_database#encryption EssentialsDatabase#encryption}
  */
  readonly encryption?: boolean | cdktf.IResolvable;
  /**
  * A Redis URI (sample format: 'redis://user:password@host:port)'. If the URI provided is Redis Cloud instance, only host and port should be provided (using the format: ['redis://endpoint1:6379', 'redis://endpoint2:6380'])
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.9.0/docs/resources/essentials_database#endpoint EssentialsDatabase#endpoint}
  */
  readonly endpoint: string;
  /**
  * TLS/SSL certificate chain of the sync source. If left null and if the source is a Redis Cloud instance, it will automatically detect the certificate to use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.9.0/docs/resources/essentials_database#server_cert EssentialsDatabase#server_cert}
  */
  readonly serverCert?: string;
}

export function essentialsDatabaseReplicaSyncSourceToTerraform(struct?: EssentialsDatabaseReplicaSyncSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    encryption: cdktf.booleanToTerraform(struct!.encryption),
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    server_cert: cdktf.stringToTerraform(struct!.serverCert),
  }
}


export function essentialsDatabaseReplicaSyncSourceToHclTerraform(struct?: EssentialsDatabaseReplicaSyncSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    encryption: {
      value: cdktf.booleanToHclTerraform(struct!.encryption),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    endpoint: {
      value: cdktf.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_cert: {
      value: cdktf.stringToHclTerraform(struct!.serverCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EssentialsDatabaseReplicaSyncSourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EssentialsDatabaseReplicaSyncSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encryption !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryption = this._encryption;
    }
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._serverCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverCert = this._serverCert;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EssentialsDatabaseReplicaSyncSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._encryption = undefined;
      this._endpoint = undefined;
      this._serverCert = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._encryption = value.encryption;
      this._endpoint = value.endpoint;
      this._serverCert = value.serverCert;
    }
  }

  // encryption - computed: false, optional: true, required: false
  private _encryption?: boolean | cdktf.IResolvable; 
  public get encryption() {
    return this.getBooleanAttribute('encryption');
  }
  public set encryption(value: boolean | cdktf.IResolvable) {
    this._encryption = value;
  }
  public resetEncryption() {
    this._encryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionInput() {
    return this._encryption;
  }

  // endpoint - computed: false, optional: false, required: true
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // server_cert - computed: false, optional: true, required: false
  private _serverCert?: string; 
  public get serverCert() {
    return this.getStringAttribute('server_cert');
  }
  public set serverCert(value: string) {
    this._serverCert = value;
  }
  public resetServerCert() {
    this._serverCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverCertInput() {
    return this._serverCert;
  }
}

export class EssentialsDatabaseReplicaSyncSourceList extends cdktf.ComplexList {
  public internalValue? : EssentialsDatabaseReplicaSyncSource[] | cdktf.IResolvable

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
  public get(index: number): EssentialsDatabaseReplicaSyncSourceOutputReference {
    return new EssentialsDatabaseReplicaSyncSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EssentialsDatabaseReplica {
  /**
  * sync_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.9.0/docs/resources/essentials_database#sync_source EssentialsDatabase#sync_source}
  */
  readonly syncSource: EssentialsDatabaseReplicaSyncSource[] | cdktf.IResolvable;
}

export function essentialsDatabaseReplicaToTerraform(struct?: EssentialsDatabaseReplicaOutputReference | EssentialsDatabaseReplica): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sync_source: cdktf.listMapper(essentialsDatabaseReplicaSyncSourceToTerraform, true)(struct!.syncSource),
  }
}


export function essentialsDatabaseReplicaToHclTerraform(struct?: EssentialsDatabaseReplicaOutputReference | EssentialsDatabaseReplica): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sync_source: {
      value: cdktf.listMapperHcl(essentialsDatabaseReplicaSyncSourceToHclTerraform, true)(struct!.syncSource),
      isBlock: true,
      type: "set",
      storageClassType: "EssentialsDatabaseReplicaSyncSourceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EssentialsDatabaseReplicaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EssentialsDatabaseReplica | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._syncSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncSource = this._syncSource?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EssentialsDatabaseReplica | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._syncSource.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._syncSource.internalValue = value.syncSource;
    }
  }

  // sync_source - computed: false, optional: false, required: true
  private _syncSource = new EssentialsDatabaseReplicaSyncSourceList(this, "sync_source", true);
  public get syncSource() {
    return this._syncSource;
  }
  public putSyncSource(value: EssentialsDatabaseReplicaSyncSource[] | cdktf.IResolvable) {
    this._syncSource.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get syncSourceInput() {
    return this._syncSource.internalValue;
  }
}
export interface EssentialsDatabaseTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.9.0/docs/resources/essentials_database#create EssentialsDatabase#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.9.0/docs/resources/essentials_database#delete EssentialsDatabase#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.9.0/docs/resources/essentials_database#read EssentialsDatabase#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.9.0/docs/resources/essentials_database#update EssentialsDatabase#update}
  */
  readonly update?: string;
}

export function essentialsDatabaseTimeoutsToTerraform(struct?: EssentialsDatabaseTimeouts | cdktf.IResolvable): any {
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


export function essentialsDatabaseTimeoutsToHclTerraform(struct?: EssentialsDatabaseTimeouts | cdktf.IResolvable): any {
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

export class EssentialsDatabaseTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EssentialsDatabaseTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EssentialsDatabaseTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.9.0/docs/resources/essentials_database rediscloud_essentials_database}
*/
export class EssentialsDatabase extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rediscloud_essentials_database";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EssentialsDatabase resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EssentialsDatabase to import
  * @param importFromId The id of the existing EssentialsDatabase that should be imported. Refer to the {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.9.0/docs/resources/essentials_database#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EssentialsDatabase to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rediscloud_essentials_database", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.9.0/docs/resources/essentials_database rediscloud_essentials_database} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EssentialsDatabaseConfig
  */
  public constructor(scope: Construct, id: string, config: EssentialsDatabaseConfig) {
    super(scope, id, {
      terraformResourceType: 'rediscloud_essentials_database',
      terraformGeneratorMetadata: {
        providerName: 'rediscloud',
        providerVersion: '2.9.0',
        providerVersionConstraint: '2.9.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clientTlsCertificates = config.clientTlsCertificates;
    this._dataEviction = config.dataEviction;
    this._dataPersistence = config.dataPersistence;
    this._enableDatabaseClustering = config.enableDatabaseClustering;
    this._enableDefaultUser = config.enableDefaultUser;
    this._enablePaygFeatures = config.enablePaygFeatures;
    this._enableTls = config.enableTls;
    this._externalEndpointForOssClusterApi = config.externalEndpointForOssClusterApi;
    this._id = config.id;
    this._memoryLimitInGb = config.memoryLimitInGb;
    this._modules.internalValue = config.modules;
    this._name = config.name;
    this._password = config.password;
    this._periodicBackupPath = config.periodicBackupPath;
    this._protocol = config.protocol;
    this._redisVersion = config.redisVersion;
    this._regexRules = config.regexRules;
    this._replication = config.replication;
    this._respVersion = config.respVersion;
    this._sourceIps = config.sourceIps;
    this._subscriptionId = config.subscriptionId;
    this._supportOssClusterApi = config.supportOssClusterApi;
    this._tags = config.tags;
    this._alert.internalValue = config.alert;
    this._replica.internalValue = config.replica;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // activated_on - computed: true, optional: false, required: false
  public get activatedOn() {
    return this.getStringAttribute('activated_on');
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

  // cloud_provider - computed: true, optional: false, required: false
  public get cloudProvider() {
    return this.getStringAttribute('cloud_provider');
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

  // data_persistence - computed: false, optional: false, required: true
  private _dataPersistence?: string; 
  public get dataPersistence() {
    return this.getStringAttribute('data_persistence');
  }
  public set dataPersistence(value: string) {
    this._dataPersistence = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataPersistenceInput() {
    return this._dataPersistence;
  }

  // db_id - computed: true, optional: false, required: false
  public get dbId() {
    return this.getNumberAttribute('db_id');
  }

  // enable_database_clustering - computed: false, optional: true, required: false
  private _enableDatabaseClustering?: boolean | cdktf.IResolvable; 
  public get enableDatabaseClustering() {
    return this.getBooleanAttribute('enable_database_clustering');
  }
  public set enableDatabaseClustering(value: boolean | cdktf.IResolvable) {
    this._enableDatabaseClustering = value;
  }
  public resetEnableDatabaseClustering() {
    this._enableDatabaseClustering = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDatabaseClusteringInput() {
    return this._enableDatabaseClustering;
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

  // enable_payg_features - computed: false, optional: true, required: false
  private _enablePaygFeatures?: boolean | cdktf.IResolvable; 
  public get enablePaygFeatures() {
    return this.getBooleanAttribute('enable_payg_features');
  }
  public set enablePaygFeatures(value: boolean | cdktf.IResolvable) {
    this._enablePaygFeatures = value;
  }
  public resetEnablePaygFeatures() {
    this._enablePaygFeatures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePaygFeaturesInput() {
    return this._enablePaygFeatures;
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

  // memory_limit_in_gb - computed: false, optional: true, required: false
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

  // modules - computed: true, optional: true, required: false
  private _modules = new EssentialsDatabaseModulesList(this, "modules", true);
  public get modules() {
    return this._modules;
  }
  public putModules(value: EssentialsDatabaseModules[] | cdktf.IResolvable) {
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

  // private_endpoint - computed: true, optional: false, required: false
  public get privateEndpoint() {
    return this.getStringAttribute('private_endpoint');
  }

  // protocol - computed: true, optional: true, required: false
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

  // redis_version_compliance - computed: true, optional: false, required: false
  public get redisVersionCompliance() {
    return this.getStringAttribute('redis_version_compliance');
  }

  // regex_rules - computed: true, optional: true, required: false
  private _regexRules?: string[]; 
  public get regexRules() {
    return this.getListAttribute('regex_rules');
  }
  public set regexRules(value: string[]) {
    this._regexRules = value;
  }
  public resetRegexRules() {
    this._regexRules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexRulesInput() {
    return this._regexRules;
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // replication - computed: false, optional: false, required: true
  private _replication?: boolean | cdktf.IResolvable; 
  public get replication() {
    return this.getBooleanAttribute('replication');
  }
  public set replication(value: boolean | cdktf.IResolvable) {
    this._replication = value;
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
    return this.getListAttribute('source_ips');
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

  // alert - computed: false, optional: true, required: false
  private _alert = new EssentialsDatabaseAlertList(this, "alert", true);
  public get alert() {
    return this._alert;
  }
  public putAlert(value: EssentialsDatabaseAlert[] | cdktf.IResolvable) {
    this._alert.internalValue = value;
  }
  public resetAlert() {
    this._alert.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertInput() {
    return this._alert.internalValue;
  }

  // replica - computed: false, optional: true, required: false
  private _replica = new EssentialsDatabaseReplicaOutputReference(this, "replica");
  public get replica() {
    return this._replica;
  }
  public putReplica(value: EssentialsDatabaseReplica) {
    this._replica.internalValue = value;
  }
  public resetReplica() {
    this._replica.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicaInput() {
    return this._replica.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new EssentialsDatabaseTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: EssentialsDatabaseTimeouts) {
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
      client_tls_certificates: cdktf.listMapper(cdktf.stringToTerraform, false)(this._clientTlsCertificates),
      data_eviction: cdktf.stringToTerraform(this._dataEviction),
      data_persistence: cdktf.stringToTerraform(this._dataPersistence),
      enable_database_clustering: cdktf.booleanToTerraform(this._enableDatabaseClustering),
      enable_default_user: cdktf.booleanToTerraform(this._enableDefaultUser),
      enable_payg_features: cdktf.booleanToTerraform(this._enablePaygFeatures),
      enable_tls: cdktf.booleanToTerraform(this._enableTls),
      external_endpoint_for_oss_cluster_api: cdktf.booleanToTerraform(this._externalEndpointForOssClusterApi),
      id: cdktf.stringToTerraform(this._id),
      memory_limit_in_gb: cdktf.numberToTerraform(this._memoryLimitInGb),
      modules: cdktf.listMapper(essentialsDatabaseModulesToTerraform, false)(this._modules.internalValue),
      name: cdktf.stringToTerraform(this._name),
      password: cdktf.stringToTerraform(this._password),
      periodic_backup_path: cdktf.stringToTerraform(this._periodicBackupPath),
      protocol: cdktf.stringToTerraform(this._protocol),
      redis_version: cdktf.stringToTerraform(this._redisVersion),
      regex_rules: cdktf.listMapper(cdktf.stringToTerraform, false)(this._regexRules),
      replication: cdktf.booleanToTerraform(this._replication),
      resp_version: cdktf.stringToTerraform(this._respVersion),
      source_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sourceIps),
      subscription_id: cdktf.numberToTerraform(this._subscriptionId),
      support_oss_cluster_api: cdktf.booleanToTerraform(this._supportOssClusterApi),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      alert: cdktf.listMapper(essentialsDatabaseAlertToTerraform, true)(this._alert.internalValue),
      replica: essentialsDatabaseReplicaToTerraform(this._replica.internalValue),
      timeouts: essentialsDatabaseTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      enable_database_clustering: {
        value: cdktf.booleanToHclTerraform(this._enableDatabaseClustering),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_default_user: {
        value: cdktf.booleanToHclTerraform(this._enableDefaultUser),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_payg_features: {
        value: cdktf.booleanToHclTerraform(this._enablePaygFeatures),
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
        value: cdktf.listMapperHcl(essentialsDatabaseModulesToHclTerraform, false)(this._modules.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "EssentialsDatabaseModulesList",
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
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
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
      regex_rules: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._regexRules),
        isBlock: false,
        type: "list",
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
        type: "list",
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
      alert: {
        value: cdktf.listMapperHcl(essentialsDatabaseAlertToHclTerraform, true)(this._alert.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "EssentialsDatabaseAlertList",
      },
      replica: {
        value: essentialsDatabaseReplicaToHclTerraform(this._replica.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EssentialsDatabaseReplicaList",
      },
      timeouts: {
        value: essentialsDatabaseTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EssentialsDatabaseTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
