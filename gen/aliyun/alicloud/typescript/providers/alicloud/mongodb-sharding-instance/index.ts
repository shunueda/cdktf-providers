// https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/mongodb_sharding_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MongodbShardingInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/mongodb_sharding_instance#account_password MongodbShardingInstance#account_password}
  */
  readonly accountPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/mongodb_sharding_instance#auto_renew MongodbShardingInstance#auto_renew}
  */
  readonly autoRenew?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/mongodb_sharding_instance#backup_interval MongodbShardingInstance#backup_interval}
  */
  readonly backupInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/mongodb_sharding_instance#backup_period MongodbShardingInstance#backup_period}
  */
  readonly backupPeriod?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/mongodb_sharding_instance#backup_retention_period MongodbShardingInstance#backup_retention_period}
  */
  readonly backupRetentionPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/mongodb_sharding_instance#backup_retention_policy_on_cluster_deletion MongodbShardingInstance#backup_retention_policy_on_cluster_deletion}
  */
  readonly backupRetentionPolicyOnClusterDeletion?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/mongodb_sharding_instance#backup_time MongodbShardingInstance#backup_time}
  */
  readonly backupTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/mongodb_sharding_instance#cloud_disk_encryption_key MongodbShardingInstance#cloud_disk_encryption_key}
  */
  readonly cloudDiskEncryptionKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/mongodb_sharding_instance#db_instance_release_protection MongodbShardingInstance#db_instance_release_protection}
  */
  readonly dbInstanceReleaseProtection?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/mongodb_sharding_instance#enable_backup_log MongodbShardingInstance#enable_backup_log}
  */
  readonly enableBackupLog?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/mongodb_sharding_instance#encrypted MongodbShardingInstance#encrypted}
  */
  readonly encrypted?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/mongodb_sharding_instance#encryption_key MongodbShardingInstance#encryption_key}
  */
  readonly encryptionKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/mongodb_sharding_instance#encryptor_name MongodbShardingInstance#encryptor_name}
  */
  readonly encryptorName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/mongodb_sharding_instance#engine_version MongodbShardingInstance#engine_version}
  */
  readonly engineVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/mongodb_sharding_instance#global_security_group_list MongodbShardingInstance#global_security_group_list}
  */
  readonly globalSecurityGroupList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/mongodb_sharding_instance#hidden_zone_id MongodbShardingInstance#hidden_zone_id}
  */
  readonly hiddenZoneId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/mongodb_sharding_instance#id MongodbShardingInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/mongodb_sharding_instance#instance_charge_type MongodbShardingInstance#instance_charge_type}
  */
  readonly instanceChargeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/mongodb_sharding_instance#kms_encrypted_password MongodbShardingInstance#kms_encrypted_password}
  */
  readonly kmsEncryptedPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/mongodb_sharding_instance#kms_encryption_context MongodbShardingInstance#kms_encryption_context}
  */
  readonly kmsEncryptionContext?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/mongodb_sharding_instance#log_backup_retention_period MongodbShardingInstance#log_backup_retention_period}
  */
  readonly logBackupRetentionPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/mongodb_sharding_instance#maintain_end_time MongodbShardingInstance#maintain_end_time}
  */
  readonly maintainEndTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/mongodb_sharding_instance#maintain_start_time MongodbShardingInstance#maintain_start_time}
  */
  readonly maintainStartTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/mongodb_sharding_instance#name MongodbShardingInstance#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/mongodb_sharding_instance#network_type MongodbShardingInstance#network_type}
  */
  readonly networkType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/mongodb_sharding_instance#order_type MongodbShardingInstance#order_type}
  */
  readonly orderType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/mongodb_sharding_instance#period MongodbShardingInstance#period}
  */
  readonly period?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/mongodb_sharding_instance#protocol_type MongodbShardingInstance#protocol_type}
  */
  readonly protocolType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/mongodb_sharding_instance#provisioned_iops MongodbShardingInstance#provisioned_iops}
  */
  readonly provisionedIops?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/mongodb_sharding_instance#resource_group_id MongodbShardingInstance#resource_group_id}
  */
  readonly resourceGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/mongodb_sharding_instance#role_arn MongodbShardingInstance#role_arn}
  */
  readonly roleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/mongodb_sharding_instance#secondary_zone_id MongodbShardingInstance#secondary_zone_id}
  */
  readonly secondaryZoneId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/mongodb_sharding_instance#security_group_id MongodbShardingInstance#security_group_id}
  */
  readonly securityGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/mongodb_sharding_instance#security_ip_list MongodbShardingInstance#security_ip_list}
  */
  readonly securityIpList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/mongodb_sharding_instance#snapshot_backup_type MongodbShardingInstance#snapshot_backup_type}
  */
  readonly snapshotBackupType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/mongodb_sharding_instance#ssl_action MongodbShardingInstance#ssl_action}
  */
  readonly sslAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/mongodb_sharding_instance#storage_engine MongodbShardingInstance#storage_engine}
  */
  readonly storageEngine?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/mongodb_sharding_instance#storage_type MongodbShardingInstance#storage_type}
  */
  readonly storageType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/mongodb_sharding_instance#tags MongodbShardingInstance#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/mongodb_sharding_instance#tde_status MongodbShardingInstance#tde_status}
  */
  readonly tdeStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/mongodb_sharding_instance#vpc_id MongodbShardingInstance#vpc_id}
  */
  readonly vpcId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/mongodb_sharding_instance#vswitch_id MongodbShardingInstance#vswitch_id}
  */
  readonly vswitchId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/mongodb_sharding_instance#zone_id MongodbShardingInstance#zone_id}
  */
  readonly zoneId?: string;
  /**
  * config_server_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/mongodb_sharding_instance#config_server_list MongodbShardingInstance#config_server_list}
  */
  readonly configServerList?: MongodbShardingInstanceConfigServerListStruct;
  /**
  * mongo_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/mongodb_sharding_instance#mongo_list MongodbShardingInstance#mongo_list}
  */
  readonly mongoList: MongodbShardingInstanceMongoListStruct[] | cdktf.IResolvable;
  /**
  * shard_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/mongodb_sharding_instance#shard_list MongodbShardingInstance#shard_list}
  */
  readonly shardList: MongodbShardingInstanceShardListStruct[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/mongodb_sharding_instance#timeouts MongodbShardingInstance#timeouts}
  */
  readonly timeouts?: MongodbShardingInstanceTimeouts;
}
export interface MongodbShardingInstanceConfigServerListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/mongodb_sharding_instance#node_class MongodbShardingInstance#node_class}
  */
  readonly nodeClass?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/mongodb_sharding_instance#node_storage MongodbShardingInstance#node_storage}
  */
  readonly nodeStorage?: number;
}

export function mongodbShardingInstanceConfigServerListStructToTerraform(struct?: MongodbShardingInstanceConfigServerListStructOutputReference | MongodbShardingInstanceConfigServerListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_class: cdktf.stringToTerraform(struct!.nodeClass),
    node_storage: cdktf.numberToTerraform(struct!.nodeStorage),
  }
}


export function mongodbShardingInstanceConfigServerListStructToHclTerraform(struct?: MongodbShardingInstanceConfigServerListStructOutputReference | MongodbShardingInstanceConfigServerListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_class: {
      value: cdktf.stringToHclTerraform(struct!.nodeClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_storage: {
      value: cdktf.numberToHclTerraform(struct!.nodeStorage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MongodbShardingInstanceConfigServerListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MongodbShardingInstanceConfigServerListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeClass = this._nodeClass;
    }
    if (this._nodeStorage !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeStorage = this._nodeStorage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MongodbShardingInstanceConfigServerListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nodeClass = undefined;
      this._nodeStorage = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nodeClass = value.nodeClass;
      this._nodeStorage = value.nodeStorage;
    }
  }

  // connect_string - computed: true, optional: false, required: false
  public get connectString() {
    return this.getStringAttribute('connect_string');
  }

  // max_connections - computed: true, optional: false, required: false
  public get maxConnections() {
    return this.getNumberAttribute('max_connections');
  }

  // max_iops - computed: true, optional: false, required: false
  public get maxIops() {
    return this.getNumberAttribute('max_iops');
  }

  // node_class - computed: true, optional: true, required: false
  private _nodeClass?: string; 
  public get nodeClass() {
    return this.getStringAttribute('node_class');
  }
  public set nodeClass(value: string) {
    this._nodeClass = value;
  }
  public resetNodeClass() {
    this._nodeClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeClassInput() {
    return this._nodeClass;
  }

  // node_description - computed: true, optional: false, required: false
  public get nodeDescription() {
    return this.getStringAttribute('node_description');
  }

  // node_id - computed: true, optional: false, required: false
  public get nodeId() {
    return this.getStringAttribute('node_id');
  }

  // node_storage - computed: true, optional: true, required: false
  private _nodeStorage?: number; 
  public get nodeStorage() {
    return this.getNumberAttribute('node_storage');
  }
  public set nodeStorage(value: number) {
    this._nodeStorage = value;
  }
  public resetNodeStorage() {
    this._nodeStorage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeStorageInput() {
    return this._nodeStorage;
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}
export interface MongodbShardingInstanceMongoListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/mongodb_sharding_instance#node_class MongodbShardingInstance#node_class}
  */
  readonly nodeClass: string;
}

export function mongodbShardingInstanceMongoListStructToTerraform(struct?: MongodbShardingInstanceMongoListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_class: cdktf.stringToTerraform(struct!.nodeClass),
  }
}


export function mongodbShardingInstanceMongoListStructToHclTerraform(struct?: MongodbShardingInstanceMongoListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_class: {
      value: cdktf.stringToHclTerraform(struct!.nodeClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MongodbShardingInstanceMongoListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MongodbShardingInstanceMongoListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeClass = this._nodeClass;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MongodbShardingInstanceMongoListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nodeClass = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nodeClass = value.nodeClass;
    }
  }

  // connect_string - computed: true, optional: false, required: false
  public get connectString() {
    return this.getStringAttribute('connect_string');
  }

  // node_class - computed: false, optional: false, required: true
  private _nodeClass?: string; 
  public get nodeClass() {
    return this.getStringAttribute('node_class');
  }
  public set nodeClass(value: string) {
    this._nodeClass = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeClassInput() {
    return this._nodeClass;
  }

  // node_id - computed: true, optional: false, required: false
  public get nodeId() {
    return this.getStringAttribute('node_id');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}

export class MongodbShardingInstanceMongoListStructList extends cdktf.ComplexList {
  public internalValue? : MongodbShardingInstanceMongoListStruct[] | cdktf.IResolvable

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
  public get(index: number): MongodbShardingInstanceMongoListStructOutputReference {
    return new MongodbShardingInstanceMongoListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MongodbShardingInstanceShardListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/mongodb_sharding_instance#node_class MongodbShardingInstance#node_class}
  */
  readonly nodeClass: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/mongodb_sharding_instance#node_storage MongodbShardingInstance#node_storage}
  */
  readonly nodeStorage: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/mongodb_sharding_instance#readonly_replicas MongodbShardingInstance#readonly_replicas}
  */
  readonly readonlyReplicas?: number;
}

export function mongodbShardingInstanceShardListStructToTerraform(struct?: MongodbShardingInstanceShardListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_class: cdktf.stringToTerraform(struct!.nodeClass),
    node_storage: cdktf.numberToTerraform(struct!.nodeStorage),
    readonly_replicas: cdktf.numberToTerraform(struct!.readonlyReplicas),
  }
}


export function mongodbShardingInstanceShardListStructToHclTerraform(struct?: MongodbShardingInstanceShardListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_class: {
      value: cdktf.stringToHclTerraform(struct!.nodeClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_storage: {
      value: cdktf.numberToHclTerraform(struct!.nodeStorage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    readonly_replicas: {
      value: cdktf.numberToHclTerraform(struct!.readonlyReplicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MongodbShardingInstanceShardListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MongodbShardingInstanceShardListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeClass = this._nodeClass;
    }
    if (this._nodeStorage !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeStorage = this._nodeStorage;
    }
    if (this._readonlyReplicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.readonlyReplicas = this._readonlyReplicas;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MongodbShardingInstanceShardListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nodeClass = undefined;
      this._nodeStorage = undefined;
      this._readonlyReplicas = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nodeClass = value.nodeClass;
      this._nodeStorage = value.nodeStorage;
      this._readonlyReplicas = value.readonlyReplicas;
    }
  }

  // node_class - computed: false, optional: false, required: true
  private _nodeClass?: string; 
  public get nodeClass() {
    return this.getStringAttribute('node_class');
  }
  public set nodeClass(value: string) {
    this._nodeClass = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeClassInput() {
    return this._nodeClass;
  }

  // node_id - computed: true, optional: false, required: false
  public get nodeId() {
    return this.getStringAttribute('node_id');
  }

  // node_storage - computed: false, optional: false, required: true
  private _nodeStorage?: number; 
  public get nodeStorage() {
    return this.getNumberAttribute('node_storage');
  }
  public set nodeStorage(value: number) {
    this._nodeStorage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeStorageInput() {
    return this._nodeStorage;
  }

  // readonly_replicas - computed: true, optional: true, required: false
  private _readonlyReplicas?: number; 
  public get readonlyReplicas() {
    return this.getNumberAttribute('readonly_replicas');
  }
  public set readonlyReplicas(value: number) {
    this._readonlyReplicas = value;
  }
  public resetReadonlyReplicas() {
    this._readonlyReplicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readonlyReplicasInput() {
    return this._readonlyReplicas;
  }
}

export class MongodbShardingInstanceShardListStructList extends cdktf.ComplexList {
  public internalValue? : MongodbShardingInstanceShardListStruct[] | cdktf.IResolvable

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
  public get(index: number): MongodbShardingInstanceShardListStructOutputReference {
    return new MongodbShardingInstanceShardListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MongodbShardingInstanceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/mongodb_sharding_instance#create MongodbShardingInstance#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/mongodb_sharding_instance#delete MongodbShardingInstance#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/mongodb_sharding_instance#update MongodbShardingInstance#update}
  */
  readonly update?: string;
}

export function mongodbShardingInstanceTimeoutsToTerraform(struct?: MongodbShardingInstanceTimeouts | cdktf.IResolvable): any {
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


export function mongodbShardingInstanceTimeoutsToHclTerraform(struct?: MongodbShardingInstanceTimeouts | cdktf.IResolvable): any {
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

export class MongodbShardingInstanceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MongodbShardingInstanceTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MongodbShardingInstanceTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/mongodb_sharding_instance alicloud_mongodb_sharding_instance}
*/
export class MongodbShardingInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_mongodb_sharding_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MongodbShardingInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MongodbShardingInstance to import
  * @param importFromId The id of the existing MongodbShardingInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/mongodb_sharding_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MongodbShardingInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_mongodb_sharding_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/mongodb_sharding_instance alicloud_mongodb_sharding_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MongodbShardingInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: MongodbShardingInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_mongodb_sharding_instance',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.266.0',
        providerVersionConstraint: '1.266.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountPassword = config.accountPassword;
    this._autoRenew = config.autoRenew;
    this._backupInterval = config.backupInterval;
    this._backupPeriod = config.backupPeriod;
    this._backupRetentionPeriod = config.backupRetentionPeriod;
    this._backupRetentionPolicyOnClusterDeletion = config.backupRetentionPolicyOnClusterDeletion;
    this._backupTime = config.backupTime;
    this._cloudDiskEncryptionKey = config.cloudDiskEncryptionKey;
    this._dbInstanceReleaseProtection = config.dbInstanceReleaseProtection;
    this._enableBackupLog = config.enableBackupLog;
    this._encrypted = config.encrypted;
    this._encryptionKey = config.encryptionKey;
    this._encryptorName = config.encryptorName;
    this._engineVersion = config.engineVersion;
    this._globalSecurityGroupList = config.globalSecurityGroupList;
    this._hiddenZoneId = config.hiddenZoneId;
    this._id = config.id;
    this._instanceChargeType = config.instanceChargeType;
    this._kmsEncryptedPassword = config.kmsEncryptedPassword;
    this._kmsEncryptionContext = config.kmsEncryptionContext;
    this._logBackupRetentionPeriod = config.logBackupRetentionPeriod;
    this._maintainEndTime = config.maintainEndTime;
    this._maintainStartTime = config.maintainStartTime;
    this._name = config.name;
    this._networkType = config.networkType;
    this._orderType = config.orderType;
    this._period = config.period;
    this._protocolType = config.protocolType;
    this._provisionedIops = config.provisionedIops;
    this._resourceGroupId = config.resourceGroupId;
    this._roleArn = config.roleArn;
    this._secondaryZoneId = config.secondaryZoneId;
    this._securityGroupId = config.securityGroupId;
    this._securityIpList = config.securityIpList;
    this._snapshotBackupType = config.snapshotBackupType;
    this._sslAction = config.sslAction;
    this._storageEngine = config.storageEngine;
    this._storageType = config.storageType;
    this._tags = config.tags;
    this._tdeStatus = config.tdeStatus;
    this._vpcId = config.vpcId;
    this._vswitchId = config.vswitchId;
    this._zoneId = config.zoneId;
    this._configServerList.internalValue = config.configServerList;
    this._mongoList.internalValue = config.mongoList;
    this._shardList.internalValue = config.shardList;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_password - computed: false, optional: true, required: false
  private _accountPassword?: string; 
  public get accountPassword() {
    return this.getStringAttribute('account_password');
  }
  public set accountPassword(value: string) {
    this._accountPassword = value;
  }
  public resetAccountPassword() {
    this._accountPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountPasswordInput() {
    return this._accountPassword;
  }

  // auto_renew - computed: false, optional: true, required: false
  private _autoRenew?: boolean | cdktf.IResolvable; 
  public get autoRenew() {
    return this.getBooleanAttribute('auto_renew');
  }
  public set autoRenew(value: boolean | cdktf.IResolvable) {
    this._autoRenew = value;
  }
  public resetAutoRenew() {
    this._autoRenew = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRenewInput() {
    return this._autoRenew;
  }

  // backup_interval - computed: true, optional: true, required: false
  private _backupInterval?: string; 
  public get backupInterval() {
    return this.getStringAttribute('backup_interval');
  }
  public set backupInterval(value: string) {
    this._backupInterval = value;
  }
  public resetBackupInterval() {
    this._backupInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupIntervalInput() {
    return this._backupInterval;
  }

  // backup_period - computed: true, optional: true, required: false
  private _backupPeriod?: string[]; 
  public get backupPeriod() {
    return cdktf.Fn.tolist(this.getListAttribute('backup_period'));
  }
  public set backupPeriod(value: string[]) {
    this._backupPeriod = value;
  }
  public resetBackupPeriod() {
    this._backupPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupPeriodInput() {
    return this._backupPeriod;
  }

  // backup_retention_period - computed: true, optional: true, required: false
  private _backupRetentionPeriod?: number; 
  public get backupRetentionPeriod() {
    return this.getNumberAttribute('backup_retention_period');
  }
  public set backupRetentionPeriod(value: number) {
    this._backupRetentionPeriod = value;
  }
  public resetBackupRetentionPeriod() {
    this._backupRetentionPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupRetentionPeriodInput() {
    return this._backupRetentionPeriod;
  }

  // backup_retention_policy_on_cluster_deletion - computed: false, optional: true, required: false
  private _backupRetentionPolicyOnClusterDeletion?: number; 
  public get backupRetentionPolicyOnClusterDeletion() {
    return this.getNumberAttribute('backup_retention_policy_on_cluster_deletion');
  }
  public set backupRetentionPolicyOnClusterDeletion(value: number) {
    this._backupRetentionPolicyOnClusterDeletion = value;
  }
  public resetBackupRetentionPolicyOnClusterDeletion() {
    this._backupRetentionPolicyOnClusterDeletion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupRetentionPolicyOnClusterDeletionInput() {
    return this._backupRetentionPolicyOnClusterDeletion;
  }

  // backup_time - computed: true, optional: true, required: false
  private _backupTime?: string; 
  public get backupTime() {
    return this.getStringAttribute('backup_time');
  }
  public set backupTime(value: string) {
    this._backupTime = value;
  }
  public resetBackupTime() {
    this._backupTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupTimeInput() {
    return this._backupTime;
  }

  // cloud_disk_encryption_key - computed: false, optional: true, required: false
  private _cloudDiskEncryptionKey?: string; 
  public get cloudDiskEncryptionKey() {
    return this.getStringAttribute('cloud_disk_encryption_key');
  }
  public set cloudDiskEncryptionKey(value: string) {
    this._cloudDiskEncryptionKey = value;
  }
  public resetCloudDiskEncryptionKey() {
    this._cloudDiskEncryptionKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudDiskEncryptionKeyInput() {
    return this._cloudDiskEncryptionKey;
  }

  // db_instance_release_protection - computed: false, optional: true, required: false
  private _dbInstanceReleaseProtection?: boolean | cdktf.IResolvable; 
  public get dbInstanceReleaseProtection() {
    return this.getBooleanAttribute('db_instance_release_protection');
  }
  public set dbInstanceReleaseProtection(value: boolean | cdktf.IResolvable) {
    this._dbInstanceReleaseProtection = value;
  }
  public resetDbInstanceReleaseProtection() {
    this._dbInstanceReleaseProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbInstanceReleaseProtectionInput() {
    return this._dbInstanceReleaseProtection;
  }

  // enable_backup_log - computed: true, optional: true, required: false
  private _enableBackupLog?: number; 
  public get enableBackupLog() {
    return this.getNumberAttribute('enable_backup_log');
  }
  public set enableBackupLog(value: number) {
    this._enableBackupLog = value;
  }
  public resetEnableBackupLog() {
    this._enableBackupLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableBackupLogInput() {
    return this._enableBackupLog;
  }

  // encrypted - computed: false, optional: true, required: false
  private _encrypted?: boolean | cdktf.IResolvable; 
  public get encrypted() {
    return this.getBooleanAttribute('encrypted');
  }
  public set encrypted(value: boolean | cdktf.IResolvable) {
    this._encrypted = value;
  }
  public resetEncrypted() {
    this._encrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptedInput() {
    return this._encrypted;
  }

  // encryption_key - computed: true, optional: true, required: false
  private _encryptionKey?: string; 
  public get encryptionKey() {
    return this.getStringAttribute('encryption_key');
  }
  public set encryptionKey(value: string) {
    this._encryptionKey = value;
  }
  public resetEncryptionKey() {
    this._encryptionKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionKeyInput() {
    return this._encryptionKey;
  }

  // encryptor_name - computed: true, optional: true, required: false
  private _encryptorName?: string; 
  public get encryptorName() {
    return this.getStringAttribute('encryptor_name');
  }
  public set encryptorName(value: string) {
    this._encryptorName = value;
  }
  public resetEncryptorName() {
    this._encryptorName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptorNameInput() {
    return this._encryptorName;
  }

  // engine_version - computed: false, optional: false, required: true
  private _engineVersion?: string; 
  public get engineVersion() {
    return this.getStringAttribute('engine_version');
  }
  public set engineVersion(value: string) {
    this._engineVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get engineVersionInput() {
    return this._engineVersion;
  }

  // global_security_group_list - computed: false, optional: true, required: false
  private _globalSecurityGroupList?: string[]; 
  public get globalSecurityGroupList() {
    return cdktf.Fn.tolist(this.getListAttribute('global_security_group_list'));
  }
  public set globalSecurityGroupList(value: string[]) {
    this._globalSecurityGroupList = value;
  }
  public resetGlobalSecurityGroupList() {
    this._globalSecurityGroupList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalSecurityGroupListInput() {
    return this._globalSecurityGroupList;
  }

  // hidden_zone_id - computed: false, optional: true, required: false
  private _hiddenZoneId?: string; 
  public get hiddenZoneId() {
    return this.getStringAttribute('hidden_zone_id');
  }
  public set hiddenZoneId(value: string) {
    this._hiddenZoneId = value;
  }
  public resetHiddenZoneId() {
    this._hiddenZoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hiddenZoneIdInput() {
    return this._hiddenZoneId;
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

  // instance_charge_type - computed: true, optional: true, required: false
  private _instanceChargeType?: string; 
  public get instanceChargeType() {
    return this.getStringAttribute('instance_charge_type');
  }
  public set instanceChargeType(value: string) {
    this._instanceChargeType = value;
  }
  public resetInstanceChargeType() {
    this._instanceChargeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceChargeTypeInput() {
    return this._instanceChargeType;
  }

  // kms_encrypted_password - computed: false, optional: true, required: false
  private _kmsEncryptedPassword?: string; 
  public get kmsEncryptedPassword() {
    return this.getStringAttribute('kms_encrypted_password');
  }
  public set kmsEncryptedPassword(value: string) {
    this._kmsEncryptedPassword = value;
  }
  public resetKmsEncryptedPassword() {
    this._kmsEncryptedPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsEncryptedPasswordInput() {
    return this._kmsEncryptedPassword;
  }

  // kms_encryption_context - computed: false, optional: true, required: false
  private _kmsEncryptionContext?: { [key: string]: string }; 
  public get kmsEncryptionContext() {
    return this.getStringMapAttribute('kms_encryption_context');
  }
  public set kmsEncryptionContext(value: { [key: string]: string }) {
    this._kmsEncryptionContext = value;
  }
  public resetKmsEncryptionContext() {
    this._kmsEncryptionContext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsEncryptionContextInput() {
    return this._kmsEncryptionContext;
  }

  // log_backup_retention_period - computed: true, optional: true, required: false
  private _logBackupRetentionPeriod?: number; 
  public get logBackupRetentionPeriod() {
    return this.getNumberAttribute('log_backup_retention_period');
  }
  public set logBackupRetentionPeriod(value: number) {
    this._logBackupRetentionPeriod = value;
  }
  public resetLogBackupRetentionPeriod() {
    this._logBackupRetentionPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logBackupRetentionPeriodInput() {
    return this._logBackupRetentionPeriod;
  }

  // maintain_end_time - computed: true, optional: true, required: false
  private _maintainEndTime?: string; 
  public get maintainEndTime() {
    return this.getStringAttribute('maintain_end_time');
  }
  public set maintainEndTime(value: string) {
    this._maintainEndTime = value;
  }
  public resetMaintainEndTime() {
    this._maintainEndTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintainEndTimeInput() {
    return this._maintainEndTime;
  }

  // maintain_start_time - computed: true, optional: true, required: false
  private _maintainStartTime?: string; 
  public get maintainStartTime() {
    return this.getStringAttribute('maintain_start_time');
  }
  public set maintainStartTime(value: string) {
    this._maintainStartTime = value;
  }
  public resetMaintainStartTime() {
    this._maintainStartTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintainStartTimeInput() {
    return this._maintainStartTime;
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

  // network_type - computed: true, optional: true, required: false
  private _networkType?: string; 
  public get networkType() {
    return this.getStringAttribute('network_type');
  }
  public set networkType(value: string) {
    this._networkType = value;
  }
  public resetNetworkType() {
    this._networkType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkTypeInput() {
    return this._networkType;
  }

  // order_type - computed: false, optional: true, required: false
  private _orderType?: string; 
  public get orderType() {
    return this.getStringAttribute('order_type');
  }
  public set orderType(value: string) {
    this._orderType = value;
  }
  public resetOrderType() {
    this._orderType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderTypeInput() {
    return this._orderType;
  }

  // period - computed: true, optional: true, required: false
  private _period?: number; 
  public get period() {
    return this.getNumberAttribute('period');
  }
  public set period(value: number) {
    this._period = value;
  }
  public resetPeriod() {
    this._period = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
  }

  // protocol_type - computed: true, optional: true, required: false
  private _protocolType?: string; 
  public get protocolType() {
    return this.getStringAttribute('protocol_type');
  }
  public set protocolType(value: string) {
    this._protocolType = value;
  }
  public resetProtocolType() {
    this._protocolType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolTypeInput() {
    return this._protocolType;
  }

  // provisioned_iops - computed: false, optional: true, required: false
  private _provisionedIops?: number; 
  public get provisionedIops() {
    return this.getNumberAttribute('provisioned_iops');
  }
  public set provisionedIops(value: number) {
    this._provisionedIops = value;
  }
  public resetProvisionedIops() {
    this._provisionedIops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionedIopsInput() {
    return this._provisionedIops;
  }

  // resource_group_id - computed: true, optional: true, required: false
  private _resourceGroupId?: string; 
  public get resourceGroupId() {
    return this.getStringAttribute('resource_group_id');
  }
  public set resourceGroupId(value: string) {
    this._resourceGroupId = value;
  }
  public resetResourceGroupId() {
    this._resourceGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupIdInput() {
    return this._resourceGroupId;
  }

  // retention_period - computed: true, optional: false, required: false
  public get retentionPeriod() {
    return this.getNumberAttribute('retention_period');
  }

  // role_arn - computed: true, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // secondary_zone_id - computed: false, optional: true, required: false
  private _secondaryZoneId?: string; 
  public get secondaryZoneId() {
    return this.getStringAttribute('secondary_zone_id');
  }
  public set secondaryZoneId(value: string) {
    this._secondaryZoneId = value;
  }
  public resetSecondaryZoneId() {
    this._secondaryZoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryZoneIdInput() {
    return this._secondaryZoneId;
  }

  // security_group_id - computed: true, optional: true, required: false
  private _securityGroupId?: string; 
  public get securityGroupId() {
    return this.getStringAttribute('security_group_id');
  }
  public set securityGroupId(value: string) {
    this._securityGroupId = value;
  }
  public resetSecurityGroupId() {
    this._securityGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdInput() {
    return this._securityGroupId;
  }

  // security_ip_list - computed: true, optional: true, required: false
  private _securityIpList?: string[]; 
  public get securityIpList() {
    return cdktf.Fn.tolist(this.getListAttribute('security_ip_list'));
  }
  public set securityIpList(value: string[]) {
    this._securityIpList = value;
  }
  public resetSecurityIpList() {
    this._securityIpList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityIpListInput() {
    return this._securityIpList;
  }

  // snapshot_backup_type - computed: true, optional: true, required: false
  private _snapshotBackupType?: string; 
  public get snapshotBackupType() {
    return this.getStringAttribute('snapshot_backup_type');
  }
  public set snapshotBackupType(value: string) {
    this._snapshotBackupType = value;
  }
  public resetSnapshotBackupType() {
    this._snapshotBackupType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotBackupTypeInput() {
    return this._snapshotBackupType;
  }

  // ssl_action - computed: false, optional: true, required: false
  private _sslAction?: string; 
  public get sslAction() {
    return this.getStringAttribute('ssl_action');
  }
  public set sslAction(value: string) {
    this._sslAction = value;
  }
  public resetSslAction() {
    this._sslAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslActionInput() {
    return this._sslAction;
  }

  // ssl_status - computed: true, optional: false, required: false
  public get sslStatus() {
    return this.getStringAttribute('ssl_status');
  }

  // storage_engine - computed: true, optional: true, required: false
  private _storageEngine?: string; 
  public get storageEngine() {
    return this.getStringAttribute('storage_engine');
  }
  public set storageEngine(value: string) {
    this._storageEngine = value;
  }
  public resetStorageEngine() {
    this._storageEngine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageEngineInput() {
    return this._storageEngine;
  }

  // storage_type - computed: true, optional: true, required: false
  private _storageType?: string; 
  public get storageType() {
    return this.getStringAttribute('storage_type');
  }
  public set storageType(value: string) {
    this._storageType = value;
  }
  public resetStorageType() {
    this._storageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageTypeInput() {
    return this._storageType;
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

  // tde_status - computed: true, optional: true, required: false
  private _tdeStatus?: string; 
  public get tdeStatus() {
    return this.getStringAttribute('tde_status');
  }
  public set tdeStatus(value: string) {
    this._tdeStatus = value;
  }
  public resetTdeStatus() {
    this._tdeStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tdeStatusInput() {
    return this._tdeStatus;
  }

  // vpc_id - computed: true, optional: true, required: false
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  public resetVpcId() {
    this._vpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // vswitch_id - computed: true, optional: true, required: false
  private _vswitchId?: string; 
  public get vswitchId() {
    return this.getStringAttribute('vswitch_id');
  }
  public set vswitchId(value: string) {
    this._vswitchId = value;
  }
  public resetVswitchId() {
    this._vswitchId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vswitchIdInput() {
    return this._vswitchId;
  }

  // zone_id - computed: true, optional: true, required: false
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

  // config_server_list - computed: false, optional: true, required: false
  private _configServerList = new MongodbShardingInstanceConfigServerListStructOutputReference(this, "config_server_list");
  public get configServerList() {
    return this._configServerList;
  }
  public putConfigServerList(value: MongodbShardingInstanceConfigServerListStruct) {
    this._configServerList.internalValue = value;
  }
  public resetConfigServerList() {
    this._configServerList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configServerListInput() {
    return this._configServerList.internalValue;
  }

  // mongo_list - computed: false, optional: false, required: true
  private _mongoList = new MongodbShardingInstanceMongoListStructList(this, "mongo_list", false);
  public get mongoList() {
    return this._mongoList;
  }
  public putMongoList(value: MongodbShardingInstanceMongoListStruct[] | cdktf.IResolvable) {
    this._mongoList.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mongoListInput() {
    return this._mongoList.internalValue;
  }

  // shard_list - computed: false, optional: false, required: true
  private _shardList = new MongodbShardingInstanceShardListStructList(this, "shard_list", false);
  public get shardList() {
    return this._shardList;
  }
  public putShardList(value: MongodbShardingInstanceShardListStruct[] | cdktf.IResolvable) {
    this._shardList.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shardListInput() {
    return this._shardList.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MongodbShardingInstanceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MongodbShardingInstanceTimeouts) {
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
      account_password: cdktf.stringToTerraform(this._accountPassword),
      auto_renew: cdktf.booleanToTerraform(this._autoRenew),
      backup_interval: cdktf.stringToTerraform(this._backupInterval),
      backup_period: cdktf.listMapper(cdktf.stringToTerraform, false)(this._backupPeriod),
      backup_retention_period: cdktf.numberToTerraform(this._backupRetentionPeriod),
      backup_retention_policy_on_cluster_deletion: cdktf.numberToTerraform(this._backupRetentionPolicyOnClusterDeletion),
      backup_time: cdktf.stringToTerraform(this._backupTime),
      cloud_disk_encryption_key: cdktf.stringToTerraform(this._cloudDiskEncryptionKey),
      db_instance_release_protection: cdktf.booleanToTerraform(this._dbInstanceReleaseProtection),
      enable_backup_log: cdktf.numberToTerraform(this._enableBackupLog),
      encrypted: cdktf.booleanToTerraform(this._encrypted),
      encryption_key: cdktf.stringToTerraform(this._encryptionKey),
      encryptor_name: cdktf.stringToTerraform(this._encryptorName),
      engine_version: cdktf.stringToTerraform(this._engineVersion),
      global_security_group_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._globalSecurityGroupList),
      hidden_zone_id: cdktf.stringToTerraform(this._hiddenZoneId),
      id: cdktf.stringToTerraform(this._id),
      instance_charge_type: cdktf.stringToTerraform(this._instanceChargeType),
      kms_encrypted_password: cdktf.stringToTerraform(this._kmsEncryptedPassword),
      kms_encryption_context: cdktf.hashMapper(cdktf.stringToTerraform)(this._kmsEncryptionContext),
      log_backup_retention_period: cdktf.numberToTerraform(this._logBackupRetentionPeriod),
      maintain_end_time: cdktf.stringToTerraform(this._maintainEndTime),
      maintain_start_time: cdktf.stringToTerraform(this._maintainStartTime),
      name: cdktf.stringToTerraform(this._name),
      network_type: cdktf.stringToTerraform(this._networkType),
      order_type: cdktf.stringToTerraform(this._orderType),
      period: cdktf.numberToTerraform(this._period),
      protocol_type: cdktf.stringToTerraform(this._protocolType),
      provisioned_iops: cdktf.numberToTerraform(this._provisionedIops),
      resource_group_id: cdktf.stringToTerraform(this._resourceGroupId),
      role_arn: cdktf.stringToTerraform(this._roleArn),
      secondary_zone_id: cdktf.stringToTerraform(this._secondaryZoneId),
      security_group_id: cdktf.stringToTerraform(this._securityGroupId),
      security_ip_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityIpList),
      snapshot_backup_type: cdktf.stringToTerraform(this._snapshotBackupType),
      ssl_action: cdktf.stringToTerraform(this._sslAction),
      storage_engine: cdktf.stringToTerraform(this._storageEngine),
      storage_type: cdktf.stringToTerraform(this._storageType),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tde_status: cdktf.stringToTerraform(this._tdeStatus),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      vswitch_id: cdktf.stringToTerraform(this._vswitchId),
      zone_id: cdktf.stringToTerraform(this._zoneId),
      config_server_list: mongodbShardingInstanceConfigServerListStructToTerraform(this._configServerList.internalValue),
      mongo_list: cdktf.listMapper(mongodbShardingInstanceMongoListStructToTerraform, true)(this._mongoList.internalValue),
      shard_list: cdktf.listMapper(mongodbShardingInstanceShardListStructToTerraform, true)(this._shardList.internalValue),
      timeouts: mongodbShardingInstanceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_password: {
        value: cdktf.stringToHclTerraform(this._accountPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_renew: {
        value: cdktf.booleanToHclTerraform(this._autoRenew),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      backup_interval: {
        value: cdktf.stringToHclTerraform(this._backupInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backup_period: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._backupPeriod),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      backup_retention_period: {
        value: cdktf.numberToHclTerraform(this._backupRetentionPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      backup_retention_policy_on_cluster_deletion: {
        value: cdktf.numberToHclTerraform(this._backupRetentionPolicyOnClusterDeletion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      backup_time: {
        value: cdktf.stringToHclTerraform(this._backupTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_disk_encryption_key: {
        value: cdktf.stringToHclTerraform(this._cloudDiskEncryptionKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_instance_release_protection: {
        value: cdktf.booleanToHclTerraform(this._dbInstanceReleaseProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_backup_log: {
        value: cdktf.numberToHclTerraform(this._enableBackupLog),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      encrypted: {
        value: cdktf.booleanToHclTerraform(this._encrypted),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      encryption_key: {
        value: cdktf.stringToHclTerraform(this._encryptionKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encryptor_name: {
        value: cdktf.stringToHclTerraform(this._encryptorName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      engine_version: {
        value: cdktf.stringToHclTerraform(this._engineVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      global_security_group_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._globalSecurityGroupList),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      hidden_zone_id: {
        value: cdktf.stringToHclTerraform(this._hiddenZoneId),
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
      instance_charge_type: {
        value: cdktf.stringToHclTerraform(this._instanceChargeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kms_encrypted_password: {
        value: cdktf.stringToHclTerraform(this._kmsEncryptedPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kms_encryption_context: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._kmsEncryptionContext),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      log_backup_retention_period: {
        value: cdktf.numberToHclTerraform(this._logBackupRetentionPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      maintain_end_time: {
        value: cdktf.stringToHclTerraform(this._maintainEndTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maintain_start_time: {
        value: cdktf.stringToHclTerraform(this._maintainStartTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_type: {
        value: cdktf.stringToHclTerraform(this._networkType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      order_type: {
        value: cdktf.stringToHclTerraform(this._orderType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      period: {
        value: cdktf.numberToHclTerraform(this._period),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      protocol_type: {
        value: cdktf.stringToHclTerraform(this._protocolType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provisioned_iops: {
        value: cdktf.numberToHclTerraform(this._provisionedIops),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      resource_group_id: {
        value: cdktf.stringToHclTerraform(this._resourceGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role_arn: {
        value: cdktf.stringToHclTerraform(this._roleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secondary_zone_id: {
        value: cdktf.stringToHclTerraform(this._secondaryZoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_group_id: {
        value: cdktf.stringToHclTerraform(this._securityGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_ip_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._securityIpList),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      snapshot_backup_type: {
        value: cdktf.stringToHclTerraform(this._snapshotBackupType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_action: {
        value: cdktf.stringToHclTerraform(this._sslAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_engine: {
        value: cdktf.stringToHclTerraform(this._storageEngine),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_type: {
        value: cdktf.stringToHclTerraform(this._storageType),
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
      tde_status: {
        value: cdktf.stringToHclTerraform(this._tdeStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_id: {
        value: cdktf.stringToHclTerraform(this._vpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vswitch_id: {
        value: cdktf.stringToHclTerraform(this._vswitchId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone_id: {
        value: cdktf.stringToHclTerraform(this._zoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config_server_list: {
        value: mongodbShardingInstanceConfigServerListStructToHclTerraform(this._configServerList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MongodbShardingInstanceConfigServerListStructList",
      },
      mongo_list: {
        value: cdktf.listMapperHcl(mongodbShardingInstanceMongoListStructToHclTerraform, true)(this._mongoList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MongodbShardingInstanceMongoListStructList",
      },
      shard_list: {
        value: cdktf.listMapperHcl(mongodbShardingInstanceShardListStructToHclTerraform, true)(this._shardList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MongodbShardingInstanceShardListStructList",
      },
      timeouts: {
        value: mongodbShardingInstanceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MongodbShardingInstanceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
