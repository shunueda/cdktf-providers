// https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/redis_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RedisClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Port number of this database. (1024 to 65535)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/redis_cluster#database_port RedisCluster#database_port}
  */
  readonly databasePort?: number;
  /**
  * User account password of database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/redis_cluster#database_user_password RedisCluster#database_user_password}
  */
  readonly databaseUserPassword: string;
  /**
  * Whether to use storage encryption.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/redis_cluster#encryption_enabled RedisCluster#encryption_enabled}
  */
  readonly encryptionEnabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/redis_cluster#id RedisCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Redis Cluster virtual server image id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/redis_cluster#image_id RedisCluster#image_id}
  */
  readonly imageId: string;
  /**
  * Whether to use nat.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/redis_cluster#nat_enabled RedisCluster#nat_enabled}
  */
  readonly natEnabled?: boolean | cdktf.IResolvable;
  /**
  * Name of database cluster. (3 to 20 characters only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/redis_cluster#redis_cluster_name RedisCluster#redis_cluster_name}
  */
  readonly redisClusterName: string;
  /**
  * Redis Cluster state (RUNNING|STOPPED)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/redis_cluster#redis_cluster_state RedisCluster#redis_cluster_state}
  */
  readonly redisClusterState: string;
  /**
  * Security-Group ids of this redisCluster DB. Each security-group must be a valid security-group resource which is attached to the VPC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/redis_cluster#security_group_ids RedisCluster#security_group_ids}
  */
  readonly securityGroupIds: string[];
  /**
  * Server type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/redis_cluster#server_type RedisCluster#server_type}
  */
  readonly serverType: string;
  /**
  * Service Zone Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/redis_cluster#service_zone_id RedisCluster#service_zone_id}
  */
  readonly serviceZoneId: string;
  /**
  * Number of Masters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/redis_cluster#shards_count RedisCluster#shards_count}
  */
  readonly shardsCount?: number;
  /**
  * Number of Replicas created per Master.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/redis_cluster#shards_replica_count RedisCluster#shards_replica_count}
  */
  readonly shardsReplicaCount?: number;
  /**
  * Subnet id of this database server. Subnet must be a valid subnet resource which is attached to the VPC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/redis_cluster#subnet_id RedisCluster#subnet_id}
  */
  readonly subnetId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/redis_cluster#tags RedisCluster#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Timezone setting of this database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/redis_cluster#timezone RedisCluster#timezone}
  */
  readonly timezone: string;
  /**
  * backup block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/redis_cluster#backup RedisCluster#backup}
  */
  readonly backup?: RedisClusterBackup;
  /**
  * block_storages block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/redis_cluster#block_storages RedisCluster#block_storages}
  */
  readonly blockStorages: RedisClusterBlockStorages;
  /**
  * redis_servers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/redis_cluster#redis_servers RedisCluster#redis_servers}
  */
  readonly redisServers: RedisClusterRedisServers[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/redis_cluster#timeouts RedisCluster#timeouts}
  */
  readonly timeouts?: RedisClusterTimeouts;
}
export interface RedisClusterBackup {
  /**
  * Backup File Retention Day.(7D <= day <= 35D) 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/redis_cluster#backup_retention_period RedisCluster#backup_retention_period}
  */
  readonly backupRetentionPeriod: string;
  /**
  * The time at which the backup starts. (from 0 to 23)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/redis_cluster#backup_start_hour RedisCluster#backup_start_hour}
  */
  readonly backupStartHour: number;
  /**
  * Object storage ID where backup files will be stored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/redis_cluster#object_storage_id RedisCluster#object_storage_id}
  */
  readonly objectStorageId?: string;
}

export function redisClusterBackupToTerraform(struct?: RedisClusterBackupOutputReference | RedisClusterBackup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backup_retention_period: cdktf.stringToTerraform(struct!.backupRetentionPeriod),
    backup_start_hour: cdktf.numberToTerraform(struct!.backupStartHour),
    object_storage_id: cdktf.stringToTerraform(struct!.objectStorageId),
  }
}


export function redisClusterBackupToHclTerraform(struct?: RedisClusterBackupOutputReference | RedisClusterBackup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backup_retention_period: {
      value: cdktf.stringToHclTerraform(struct!.backupRetentionPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    backup_start_hour: {
      value: cdktf.numberToHclTerraform(struct!.backupStartHour),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    object_storage_id: {
      value: cdktf.stringToHclTerraform(struct!.objectStorageId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RedisClusterBackupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RedisClusterBackup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backupRetentionPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupRetentionPeriod = this._backupRetentionPeriod;
    }
    if (this._backupStartHour !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupStartHour = this._backupStartHour;
    }
    if (this._objectStorageId !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectStorageId = this._objectStorageId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RedisClusterBackup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._backupRetentionPeriod = undefined;
      this._backupStartHour = undefined;
      this._objectStorageId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._backupRetentionPeriod = value.backupRetentionPeriod;
      this._backupStartHour = value.backupStartHour;
      this._objectStorageId = value.objectStorageId;
    }
  }

  // backup_retention_period - computed: false, optional: false, required: true
  private _backupRetentionPeriod?: string; 
  public get backupRetentionPeriod() {
    return this.getStringAttribute('backup_retention_period');
  }
  public set backupRetentionPeriod(value: string) {
    this._backupRetentionPeriod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backupRetentionPeriodInput() {
    return this._backupRetentionPeriod;
  }

  // backup_start_hour - computed: false, optional: false, required: true
  private _backupStartHour?: number; 
  public get backupStartHour() {
    return this.getNumberAttribute('backup_start_hour');
  }
  public set backupStartHour(value: number) {
    this._backupStartHour = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backupStartHourInput() {
    return this._backupStartHour;
  }

  // object_storage_id - computed: false, optional: true, required: false
  private _objectStorageId?: string; 
  public get objectStorageId() {
    return this.getStringAttribute('object_storage_id');
  }
  public set objectStorageId(value: string) {
    this._objectStorageId = value;
  }
  public resetObjectStorageId() {
    this._objectStorageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectStorageIdInput() {
    return this._objectStorageId;
  }
}
export interface RedisClusterBlockStorages {
  /**
  * Storage usage. (Only DATA)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/redis_cluster#block_storage_role_type RedisCluster#block_storage_role_type}
  */
  readonly blockStorageRoleType?: string;
  /**
  * Block Storage Size (50 to 5120)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/redis_cluster#block_storage_size RedisCluster#block_storage_size}
  */
  readonly blockStorageSize: number;
  /**
  * Storage product name. (SSD|HDD)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/redis_cluster#block_storage_type RedisCluster#block_storage_type}
  */
  readonly blockStorageType: string;
}

export function redisClusterBlockStoragesToTerraform(struct?: RedisClusterBlockStoragesOutputReference | RedisClusterBlockStorages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    block_storage_role_type: cdktf.stringToTerraform(struct!.blockStorageRoleType),
    block_storage_size: cdktf.numberToTerraform(struct!.blockStorageSize),
    block_storage_type: cdktf.stringToTerraform(struct!.blockStorageType),
  }
}


export function redisClusterBlockStoragesToHclTerraform(struct?: RedisClusterBlockStoragesOutputReference | RedisClusterBlockStorages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    block_storage_role_type: {
      value: cdktf.stringToHclTerraform(struct!.blockStorageRoleType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    block_storage_size: {
      value: cdktf.numberToHclTerraform(struct!.blockStorageSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    block_storage_type: {
      value: cdktf.stringToHclTerraform(struct!.blockStorageType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RedisClusterBlockStoragesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RedisClusterBlockStorages | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blockStorageRoleType !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockStorageRoleType = this._blockStorageRoleType;
    }
    if (this._blockStorageSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockStorageSize = this._blockStorageSize;
    }
    if (this._blockStorageType !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockStorageType = this._blockStorageType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RedisClusterBlockStorages | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blockStorageRoleType = undefined;
      this._blockStorageSize = undefined;
      this._blockStorageType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blockStorageRoleType = value.blockStorageRoleType;
      this._blockStorageSize = value.blockStorageSize;
      this._blockStorageType = value.blockStorageType;
    }
  }

  // block_storage_group_id - computed: true, optional: false, required: false
  public get blockStorageGroupId() {
    return this.getStringAttribute('block_storage_group_id');
  }

  // block_storage_role_type - computed: false, optional: true, required: false
  private _blockStorageRoleType?: string; 
  public get blockStorageRoleType() {
    return this.getStringAttribute('block_storage_role_type');
  }
  public set blockStorageRoleType(value: string) {
    this._blockStorageRoleType = value;
  }
  public resetBlockStorageRoleType() {
    this._blockStorageRoleType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockStorageRoleTypeInput() {
    return this._blockStorageRoleType;
  }

  // block_storage_size - computed: false, optional: false, required: true
  private _blockStorageSize?: number; 
  public get blockStorageSize() {
    return this.getNumberAttribute('block_storage_size');
  }
  public set blockStorageSize(value: number) {
    this._blockStorageSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get blockStorageSizeInput() {
    return this._blockStorageSize;
  }

  // block_storage_type - computed: false, optional: false, required: true
  private _blockStorageType?: string; 
  public get blockStorageType() {
    return this.getStringAttribute('block_storage_type');
  }
  public set blockStorageType(value: string) {
    this._blockStorageType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get blockStorageTypeInput() {
    return this._blockStorageType;
  }
}
export interface RedisClusterRedisServers {
  /**
  * Availability zone name set in a Multi AZ environment. If it is null, it is automatically allocated as AZ1. (AZ1 | AZ2 | AZ3)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/redis_cluster#availability_zone_name RedisCluster#availability_zone_name}
  */
  readonly availabilityZoneName?: string;
  /**
  * Public IP for NAT. If it is null, it is automatically allocated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/redis_cluster#nat_public_ip_id RedisCluster#nat_public_ip_id}
  */
  readonly natPublicIpId?: string;
  /**
  * RedisCluster database server names. (3 to 20 lowercase and number with dash and the first character should be an lowercase letter.)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/redis_cluster#redis_server_name RedisCluster#redis_server_name}
  */
  readonly redisServerName: string;
  /**
  * Server role type Enter 'MASTER' for a single server configuration. (MASTER | REPLICA)",
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/redis_cluster#server_role_type RedisCluster#server_role_type}
  */
  readonly serverRoleType: string;
}

export function redisClusterRedisServersToTerraform(struct?: RedisClusterRedisServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    availability_zone_name: cdktf.stringToTerraform(struct!.availabilityZoneName),
    nat_public_ip_id: cdktf.stringToTerraform(struct!.natPublicIpId),
    redis_server_name: cdktf.stringToTerraform(struct!.redisServerName),
    server_role_type: cdktf.stringToTerraform(struct!.serverRoleType),
  }
}


export function redisClusterRedisServersToHclTerraform(struct?: RedisClusterRedisServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    availability_zone_name: {
      value: cdktf.stringToHclTerraform(struct!.availabilityZoneName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nat_public_ip_id: {
      value: cdktf.stringToHclTerraform(struct!.natPublicIpId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    redis_server_name: {
      value: cdktf.stringToHclTerraform(struct!.redisServerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_role_type: {
      value: cdktf.stringToHclTerraform(struct!.serverRoleType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RedisClusterRedisServersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RedisClusterRedisServers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availabilityZoneName !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityZoneName = this._availabilityZoneName;
    }
    if (this._natPublicIpId !== undefined) {
      hasAnyValues = true;
      internalValueResult.natPublicIpId = this._natPublicIpId;
    }
    if (this._redisServerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.redisServerName = this._redisServerName;
    }
    if (this._serverRoleType !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverRoleType = this._serverRoleType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RedisClusterRedisServers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._availabilityZoneName = undefined;
      this._natPublicIpId = undefined;
      this._redisServerName = undefined;
      this._serverRoleType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._availabilityZoneName = value.availabilityZoneName;
      this._natPublicIpId = value.natPublicIpId;
      this._redisServerName = value.redisServerName;
      this._serverRoleType = value.serverRoleType;
    }
  }

  // availability_zone_name - computed: false, optional: true, required: false
  private _availabilityZoneName?: string; 
  public get availabilityZoneName() {
    return this.getStringAttribute('availability_zone_name');
  }
  public set availabilityZoneName(value: string) {
    this._availabilityZoneName = value;
  }
  public resetAvailabilityZoneName() {
    this._availabilityZoneName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneNameInput() {
    return this._availabilityZoneName;
  }

  // nat_ip_address - computed: true, optional: false, required: false
  public get natIpAddress() {
    return this.getStringAttribute('nat_ip_address');
  }

  // nat_public_ip_id - computed: false, optional: true, required: false
  private _natPublicIpId?: string; 
  public get natPublicIpId() {
    return this.getStringAttribute('nat_public_ip_id');
  }
  public set natPublicIpId(value: string) {
    this._natPublicIpId = value;
  }
  public resetNatPublicIpId() {
    this._natPublicIpId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natPublicIpIdInput() {
    return this._natPublicIpId;
  }

  // redis_server_name - computed: false, optional: false, required: true
  private _redisServerName?: string; 
  public get redisServerName() {
    return this.getStringAttribute('redis_server_name');
  }
  public set redisServerName(value: string) {
    this._redisServerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get redisServerNameInput() {
    return this._redisServerName;
  }

  // server_role_type - computed: false, optional: false, required: true
  private _serverRoleType?: string; 
  public get serverRoleType() {
    return this.getStringAttribute('server_role_type');
  }
  public set serverRoleType(value: string) {
    this._serverRoleType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverRoleTypeInput() {
    return this._serverRoleType;
  }
}

export class RedisClusterRedisServersList extends cdktf.ComplexList {
  public internalValue? : RedisClusterRedisServers[] | cdktf.IResolvable

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
  public get(index: number): RedisClusterRedisServersOutputReference {
    return new RedisClusterRedisServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RedisClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/redis_cluster#create RedisCluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/redis_cluster#delete RedisCluster#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/redis_cluster#update RedisCluster#update}
  */
  readonly update?: string;
}

export function redisClusterTimeoutsToTerraform(struct?: RedisClusterTimeouts | cdktf.IResolvable): any {
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


export function redisClusterTimeoutsToHclTerraform(struct?: RedisClusterTimeouts | cdktf.IResolvable): any {
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

export class RedisClusterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RedisClusterTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RedisClusterTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/redis_cluster samsungcloudplatform_redis_cluster}
*/
export class RedisCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "samsungcloudplatform_redis_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RedisCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RedisCluster to import
  * @param importFromId The id of the existing RedisCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/redis_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RedisCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "samsungcloudplatform_redis_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/resources/redis_cluster samsungcloudplatform_redis_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RedisClusterConfig
  */
  public constructor(scope: Construct, id: string, config: RedisClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'samsungcloudplatform_redis_cluster',
      terraformGeneratorMetadata: {
        providerName: 'samsungcloudplatform',
        providerVersion: '3.16.0',
        providerVersionConstraint: '3.16.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._databasePort = config.databasePort;
    this._databaseUserPassword = config.databaseUserPassword;
    this._encryptionEnabled = config.encryptionEnabled;
    this._id = config.id;
    this._imageId = config.imageId;
    this._natEnabled = config.natEnabled;
    this._redisClusterName = config.redisClusterName;
    this._redisClusterState = config.redisClusterState;
    this._securityGroupIds = config.securityGroupIds;
    this._serverType = config.serverType;
    this._serviceZoneId = config.serviceZoneId;
    this._shardsCount = config.shardsCount;
    this._shardsReplicaCount = config.shardsReplicaCount;
    this._subnetId = config.subnetId;
    this._tags = config.tags;
    this._timezone = config.timezone;
    this._backup.internalValue = config.backup;
    this._blockStorages.internalValue = config.blockStorages;
    this._redisServers.internalValue = config.redisServers;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // database_port - computed: false, optional: true, required: false
  private _databasePort?: number; 
  public get databasePort() {
    return this.getNumberAttribute('database_port');
  }
  public set databasePort(value: number) {
    this._databasePort = value;
  }
  public resetDatabasePort() {
    this._databasePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databasePortInput() {
    return this._databasePort;
  }

  // database_user_password - computed: false, optional: false, required: true
  private _databaseUserPassword?: string; 
  public get databaseUserPassword() {
    return this.getStringAttribute('database_user_password');
  }
  public set databaseUserPassword(value: string) {
    this._databaseUserPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseUserPasswordInput() {
    return this._databaseUserPassword;
  }

  // encryption_enabled - computed: false, optional: false, required: true
  private _encryptionEnabled?: boolean | cdktf.IResolvable; 
  public get encryptionEnabled() {
    return this.getBooleanAttribute('encryption_enabled');
  }
  public set encryptionEnabled(value: boolean | cdktf.IResolvable) {
    this._encryptionEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionEnabledInput() {
    return this._encryptionEnabled;
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

  // image_id - computed: false, optional: false, required: true
  private _imageId?: string; 
  public get imageId() {
    return this.getStringAttribute('image_id');
  }
  public set imageId(value: string) {
    this._imageId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageIdInput() {
    return this._imageId;
  }

  // nat_enabled - computed: false, optional: true, required: false
  private _natEnabled?: boolean | cdktf.IResolvable; 
  public get natEnabled() {
    return this.getBooleanAttribute('nat_enabled');
  }
  public set natEnabled(value: boolean | cdktf.IResolvable) {
    this._natEnabled = value;
  }
  public resetNatEnabled() {
    this._natEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natEnabledInput() {
    return this._natEnabled;
  }

  // redis_cluster_name - computed: false, optional: false, required: true
  private _redisClusterName?: string; 
  public get redisClusterName() {
    return this.getStringAttribute('redis_cluster_name');
  }
  public set redisClusterName(value: string) {
    this._redisClusterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get redisClusterNameInput() {
    return this._redisClusterName;
  }

  // redis_cluster_state - computed: false, optional: false, required: true
  private _redisClusterState?: string; 
  public get redisClusterState() {
    return this.getStringAttribute('redis_cluster_state');
  }
  public set redisClusterState(value: string) {
    this._redisClusterState = value;
  }
  // Temporarily expose input value. Use with caution.
  public get redisClusterStateInput() {
    return this._redisClusterState;
  }

  // security_group_ids - computed: false, optional: false, required: true
  private _securityGroupIds?: string[]; 
  public get securityGroupIds() {
    return this.getListAttribute('security_group_ids');
  }
  public set securityGroupIds(value: string[]) {
    this._securityGroupIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdsInput() {
    return this._securityGroupIds;
  }

  // server_type - computed: false, optional: false, required: true
  private _serverType?: string; 
  public get serverType() {
    return this.getStringAttribute('server_type');
  }
  public set serverType(value: string) {
    this._serverType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverTypeInput() {
    return this._serverType;
  }

  // service_zone_id - computed: false, optional: false, required: true
  private _serviceZoneId?: string; 
  public get serviceZoneId() {
    return this.getStringAttribute('service_zone_id');
  }
  public set serviceZoneId(value: string) {
    this._serviceZoneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceZoneIdInput() {
    return this._serviceZoneId;
  }

  // shards_count - computed: false, optional: true, required: false
  private _shardsCount?: number; 
  public get shardsCount() {
    return this.getNumberAttribute('shards_count');
  }
  public set shardsCount(value: number) {
    this._shardsCount = value;
  }
  public resetShardsCount() {
    this._shardsCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shardsCountInput() {
    return this._shardsCount;
  }

  // shards_replica_count - computed: false, optional: true, required: false
  private _shardsReplicaCount?: number; 
  public get shardsReplicaCount() {
    return this.getNumberAttribute('shards_replica_count');
  }
  public set shardsReplicaCount(value: number) {
    this._shardsReplicaCount = value;
  }
  public resetShardsReplicaCount() {
    this._shardsReplicaCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shardsReplicaCountInput() {
    return this._shardsReplicaCount;
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
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

  // timezone - computed: false, optional: false, required: true
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }

  // backup - computed: false, optional: true, required: false
  private _backup = new RedisClusterBackupOutputReference(this, "backup");
  public get backup() {
    return this._backup;
  }
  public putBackup(value: RedisClusterBackup) {
    this._backup.internalValue = value;
  }
  public resetBackup() {
    this._backup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupInput() {
    return this._backup.internalValue;
  }

  // block_storages - computed: false, optional: false, required: true
  private _blockStorages = new RedisClusterBlockStoragesOutputReference(this, "block_storages");
  public get blockStorages() {
    return this._blockStorages;
  }
  public putBlockStorages(value: RedisClusterBlockStorages) {
    this._blockStorages.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get blockStoragesInput() {
    return this._blockStorages.internalValue;
  }

  // redis_servers - computed: false, optional: false, required: true
  private _redisServers = new RedisClusterRedisServersList(this, "redis_servers", false);
  public get redisServers() {
    return this._redisServers;
  }
  public putRedisServers(value: RedisClusterRedisServers[] | cdktf.IResolvable) {
    this._redisServers.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get redisServersInput() {
    return this._redisServers.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new RedisClusterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: RedisClusterTimeouts) {
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
      database_port: cdktf.numberToTerraform(this._databasePort),
      database_user_password: cdktf.stringToTerraform(this._databaseUserPassword),
      encryption_enabled: cdktf.booleanToTerraform(this._encryptionEnabled),
      id: cdktf.stringToTerraform(this._id),
      image_id: cdktf.stringToTerraform(this._imageId),
      nat_enabled: cdktf.booleanToTerraform(this._natEnabled),
      redis_cluster_name: cdktf.stringToTerraform(this._redisClusterName),
      redis_cluster_state: cdktf.stringToTerraform(this._redisClusterState),
      security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityGroupIds),
      server_type: cdktf.stringToTerraform(this._serverType),
      service_zone_id: cdktf.stringToTerraform(this._serviceZoneId),
      shards_count: cdktf.numberToTerraform(this._shardsCount),
      shards_replica_count: cdktf.numberToTerraform(this._shardsReplicaCount),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      timezone: cdktf.stringToTerraform(this._timezone),
      backup: redisClusterBackupToTerraform(this._backup.internalValue),
      block_storages: redisClusterBlockStoragesToTerraform(this._blockStorages.internalValue),
      redis_servers: cdktf.listMapper(redisClusterRedisServersToTerraform, true)(this._redisServers.internalValue),
      timeouts: redisClusterTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      database_port: {
        value: cdktf.numberToHclTerraform(this._databasePort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      database_user_password: {
        value: cdktf.stringToHclTerraform(this._databaseUserPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encryption_enabled: {
        value: cdktf.booleanToHclTerraform(this._encryptionEnabled),
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
      image_id: {
        value: cdktf.stringToHclTerraform(this._imageId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nat_enabled: {
        value: cdktf.booleanToHclTerraform(this._natEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      redis_cluster_name: {
        value: cdktf.stringToHclTerraform(this._redisClusterName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      redis_cluster_state: {
        value: cdktf.stringToHclTerraform(this._redisClusterState),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_group_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._securityGroupIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      server_type: {
        value: cdktf.stringToHclTerraform(this._serverType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_zone_id: {
        value: cdktf.stringToHclTerraform(this._serviceZoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shards_count: {
        value: cdktf.numberToHclTerraform(this._shardsCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      shards_replica_count: {
        value: cdktf.numberToHclTerraform(this._shardsReplicaCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      subnet_id: {
        value: cdktf.stringToHclTerraform(this._subnetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      timezone: {
        value: cdktf.stringToHclTerraform(this._timezone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backup: {
        value: redisClusterBackupToHclTerraform(this._backup.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "RedisClusterBackupList",
      },
      block_storages: {
        value: redisClusterBlockStoragesToHclTerraform(this._blockStorages.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RedisClusterBlockStoragesList",
      },
      redis_servers: {
        value: cdktf.listMapperHcl(redisClusterRedisServersToHclTerraform, true)(this._redisServers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RedisClusterRedisServersList",
      },
      timeouts: {
        value: redisClusterTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "RedisClusterTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
