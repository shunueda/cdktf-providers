// https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/mongodb
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MongodbConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/mongodb#arbiter_product_code Mongodb#arbiter_product_code}
  */
  readonly arbiterProductCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/mongodb#arbiter_server_count Mongodb#arbiter_server_count}
  */
  readonly arbiterServerCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/mongodb#backup_file_retention_period Mongodb#backup_file_retention_period}
  */
  readonly backupFileRetentionPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/mongodb#backup_time Mongodb#backup_time}
  */
  readonly backupTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/mongodb#cluster_type_code Mongodb#cluster_type_code}
  */
  readonly clusterTypeCode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/mongodb#compress_code Mongodb#compress_code}
  */
  readonly compressCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/mongodb#config_port Mongodb#config_port}
  */
  readonly configPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/mongodb#config_product_code Mongodb#config_product_code}
  */
  readonly configProductCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/mongodb#config_server_count Mongodb#config_server_count}
  */
  readonly configServerCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/mongodb#data_storage_type Mongodb#data_storage_type}
  */
  readonly dataStorageType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/mongodb#engine_version_code Mongodb#engine_version_code}
  */
  readonly engineVersionCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/mongodb#image_product_code Mongodb#image_product_code}
  */
  readonly imageProductCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/mongodb#member_port Mongodb#member_port}
  */
  readonly memberPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/mongodb#member_product_code Mongodb#member_product_code}
  */
  readonly memberProductCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/mongodb#member_server_count Mongodb#member_server_count}
  */
  readonly memberServerCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/mongodb#mongos_port Mongodb#mongos_port}
  */
  readonly mongosPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/mongodb#mongos_product_code Mongodb#mongos_product_code}
  */
  readonly mongosProductCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/mongodb#mongos_server_count Mongodb#mongos_server_count}
  */
  readonly mongosServerCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/mongodb#server_name_prefix Mongodb#server_name_prefix}
  */
  readonly serverNamePrefix: string;
  /**
  * Service Name of Cloud DB for MongoDb instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/mongodb#service_name Mongodb#service_name}
  */
  readonly serviceName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/mongodb#shard_count Mongodb#shard_count}
  */
  readonly shardCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/mongodb#subnet_no Mongodb#subnet_no}
  */
  readonly subnetNo: string;
  /**
  * Access username, which will be used for DB admin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/mongodb#user_name Mongodb#user_name}
  */
  readonly userName: string;
  /**
  * Access password for user, which will be used for DB admin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/mongodb#user_password Mongodb#user_password}
  */
  readonly userPassword: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/mongodb#vpc_no Mongodb#vpc_no}
  */
  readonly vpcNo: string;
}
export interface MongodbMongodbServerListStruct {
}

export function mongodbMongodbServerListStructToTerraform(struct?: MongodbMongodbServerListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function mongodbMongodbServerListStructToHclTerraform(struct?: MongodbMongodbServerListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class MongodbMongodbServerListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MongodbMongodbServerListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MongodbMongodbServerListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cluster_role - computed: true, optional: false, required: false
  public get clusterRole() {
    return this.getStringAttribute('cluster_role');
  }

  // cpu_count - computed: true, optional: false, required: false
  public get cpuCount() {
    return this.getNumberAttribute('cpu_count');
  }

  // create_date - computed: true, optional: false, required: false
  public get createDate() {
    return this.getStringAttribute('create_date');
  }

  // data_storage_size - computed: true, optional: false, required: false
  public get dataStorageSize() {
    return this.getNumberAttribute('data_storage_size');
  }

  // memory_size - computed: true, optional: false, required: false
  public get memorySize() {
    return this.getNumberAttribute('memory_size');
  }

  // private_domain - computed: true, optional: false, required: false
  public get privateDomain() {
    return this.getStringAttribute('private_domain');
  }

  // product_code - computed: true, optional: false, required: false
  public get productCode() {
    return this.getStringAttribute('product_code');
  }

  // public_domain - computed: true, optional: false, required: false
  public get publicDomain() {
    return this.getStringAttribute('public_domain');
  }

  // replica_set_name - computed: true, optional: false, required: false
  public get replicaSetName() {
    return this.getStringAttribute('replica_set_name');
  }

  // server_instance_no - computed: true, optional: false, required: false
  public get serverInstanceNo() {
    return this.getStringAttribute('server_instance_no');
  }

  // server_name - computed: true, optional: false, required: false
  public get serverName() {
    return this.getStringAttribute('server_name');
  }

  // server_role - computed: true, optional: false, required: false
  public get serverRole() {
    return this.getStringAttribute('server_role');
  }

  // uptime - computed: true, optional: false, required: false
  public get uptime() {
    return this.getStringAttribute('uptime');
  }
}

export class MongodbMongodbServerListStructList extends cdktf.ComplexList {

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
  public get(index: number): MongodbMongodbServerListStructOutputReference {
    return new MongodbMongodbServerListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/mongodb ncloud_mongodb}
*/
export class Mongodb extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ncloud_mongodb";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Mongodb resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Mongodb to import
  * @param importFromId The id of the existing Mongodb that should be imported. Refer to the {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/mongodb#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Mongodb to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ncloud_mongodb", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/mongodb ncloud_mongodb} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MongodbConfig
  */
  public constructor(scope: Construct, id: string, config: MongodbConfig) {
    super(scope, id, {
      terraformResourceType: 'ncloud_mongodb',
      terraformGeneratorMetadata: {
        providerName: 'ncloud',
        providerVersion: '4.0.4',
        providerVersionConstraint: '4.0.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._arbiterProductCode = config.arbiterProductCode;
    this._arbiterServerCount = config.arbiterServerCount;
    this._backupFileRetentionPeriod = config.backupFileRetentionPeriod;
    this._backupTime = config.backupTime;
    this._clusterTypeCode = config.clusterTypeCode;
    this._compressCode = config.compressCode;
    this._configPort = config.configPort;
    this._configProductCode = config.configProductCode;
    this._configServerCount = config.configServerCount;
    this._dataStorageType = config.dataStorageType;
    this._engineVersionCode = config.engineVersionCode;
    this._imageProductCode = config.imageProductCode;
    this._memberPort = config.memberPort;
    this._memberProductCode = config.memberProductCode;
    this._memberServerCount = config.memberServerCount;
    this._mongosPort = config.mongosPort;
    this._mongosProductCode = config.mongosProductCode;
    this._mongosServerCount = config.mongosServerCount;
    this._serverNamePrefix = config.serverNamePrefix;
    this._serviceName = config.serviceName;
    this._shardCount = config.shardCount;
    this._subnetNo = config.subnetNo;
    this._userName = config.userName;
    this._userPassword = config.userPassword;
    this._vpcNo = config.vpcNo;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_control_group_no_list - computed: true, optional: false, required: false
  public get accessControlGroupNoList() {
    return this.getListAttribute('access_control_group_no_list');
  }

  // arbiter_port - computed: true, optional: false, required: false
  public get arbiterPort() {
    return this.getNumberAttribute('arbiter_port');
  }

  // arbiter_product_code - computed: true, optional: true, required: false
  private _arbiterProductCode?: string; 
  public get arbiterProductCode() {
    return this.getStringAttribute('arbiter_product_code');
  }
  public set arbiterProductCode(value: string) {
    this._arbiterProductCode = value;
  }
  public resetArbiterProductCode() {
    this._arbiterProductCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arbiterProductCodeInput() {
    return this._arbiterProductCode;
  }

  // arbiter_server_count - computed: true, optional: true, required: false
  private _arbiterServerCount?: number; 
  public get arbiterServerCount() {
    return this.getNumberAttribute('arbiter_server_count');
  }
  public set arbiterServerCount(value: number) {
    this._arbiterServerCount = value;
  }
  public resetArbiterServerCount() {
    this._arbiterServerCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arbiterServerCountInput() {
    return this._arbiterServerCount;
  }

  // backup_file_retention_period - computed: true, optional: true, required: false
  private _backupFileRetentionPeriod?: number; 
  public get backupFileRetentionPeriod() {
    return this.getNumberAttribute('backup_file_retention_period');
  }
  public set backupFileRetentionPeriod(value: number) {
    this._backupFileRetentionPeriod = value;
  }
  public resetBackupFileRetentionPeriod() {
    this._backupFileRetentionPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupFileRetentionPeriodInput() {
    return this._backupFileRetentionPeriod;
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

  // cluster_type_code - computed: false, optional: false, required: true
  private _clusterTypeCode?: string; 
  public get clusterTypeCode() {
    return this.getStringAttribute('cluster_type_code');
  }
  public set clusterTypeCode(value: string) {
    this._clusterTypeCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterTypeCodeInput() {
    return this._clusterTypeCode;
  }

  // compress_code - computed: true, optional: true, required: false
  private _compressCode?: string; 
  public get compressCode() {
    return this.getStringAttribute('compress_code');
  }
  public set compressCode(value: string) {
    this._compressCode = value;
  }
  public resetCompressCode() {
    this._compressCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressCodeInput() {
    return this._compressCode;
  }

  // config_port - computed: true, optional: true, required: false
  private _configPort?: number; 
  public get configPort() {
    return this.getNumberAttribute('config_port');
  }
  public set configPort(value: number) {
    this._configPort = value;
  }
  public resetConfigPort() {
    this._configPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configPortInput() {
    return this._configPort;
  }

  // config_product_code - computed: true, optional: true, required: false
  private _configProductCode?: string; 
  public get configProductCode() {
    return this.getStringAttribute('config_product_code');
  }
  public set configProductCode(value: string) {
    this._configProductCode = value;
  }
  public resetConfigProductCode() {
    this._configProductCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configProductCodeInput() {
    return this._configProductCode;
  }

  // config_server_count - computed: true, optional: true, required: false
  private _configServerCount?: number; 
  public get configServerCount() {
    return this.getNumberAttribute('config_server_count');
  }
  public set configServerCount(value: number) {
    this._configServerCount = value;
  }
  public resetConfigServerCount() {
    this._configServerCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configServerCountInput() {
    return this._configServerCount;
  }

  // data_storage_type - computed: true, optional: true, required: false
  private _dataStorageType?: string; 
  public get dataStorageType() {
    return this.getStringAttribute('data_storage_type');
  }
  public set dataStorageType(value: string) {
    this._dataStorageType = value;
  }
  public resetDataStorageType() {
    this._dataStorageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataStorageTypeInput() {
    return this._dataStorageType;
  }

  // engine_version_code - computed: true, optional: true, required: false
  private _engineVersionCode?: string; 
  public get engineVersionCode() {
    return this.getStringAttribute('engine_version_code');
  }
  public set engineVersionCode(value: string) {
    this._engineVersionCode = value;
  }
  public resetEngineVersionCode() {
    this._engineVersionCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineVersionCodeInput() {
    return this._engineVersionCode;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // image_product_code - computed: true, optional: true, required: false
  private _imageProductCode?: string; 
  public get imageProductCode() {
    return this.getStringAttribute('image_product_code');
  }
  public set imageProductCode(value: string) {
    this._imageProductCode = value;
  }
  public resetImageProductCode() {
    this._imageProductCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageProductCodeInput() {
    return this._imageProductCode;
  }

  // member_port - computed: true, optional: true, required: false
  private _memberPort?: number; 
  public get memberPort() {
    return this.getNumberAttribute('member_port');
  }
  public set memberPort(value: number) {
    this._memberPort = value;
  }
  public resetMemberPort() {
    this._memberPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberPortInput() {
    return this._memberPort;
  }

  // member_product_code - computed: true, optional: true, required: false
  private _memberProductCode?: string; 
  public get memberProductCode() {
    return this.getStringAttribute('member_product_code');
  }
  public set memberProductCode(value: string) {
    this._memberProductCode = value;
  }
  public resetMemberProductCode() {
    this._memberProductCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberProductCodeInput() {
    return this._memberProductCode;
  }

  // member_server_count - computed: true, optional: true, required: false
  private _memberServerCount?: number; 
  public get memberServerCount() {
    return this.getNumberAttribute('member_server_count');
  }
  public set memberServerCount(value: number) {
    this._memberServerCount = value;
  }
  public resetMemberServerCount() {
    this._memberServerCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberServerCountInput() {
    return this._memberServerCount;
  }

  // mongodb_server_list - computed: true, optional: false, required: false
  private _mongodbServerList = new MongodbMongodbServerListStructList(this, "mongodb_server_list", false);
  public get mongodbServerList() {
    return this._mongodbServerList;
  }

  // mongos_port - computed: true, optional: true, required: false
  private _mongosPort?: number; 
  public get mongosPort() {
    return this.getNumberAttribute('mongos_port');
  }
  public set mongosPort(value: number) {
    this._mongosPort = value;
  }
  public resetMongosPort() {
    this._mongosPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mongosPortInput() {
    return this._mongosPort;
  }

  // mongos_product_code - computed: true, optional: true, required: false
  private _mongosProductCode?: string; 
  public get mongosProductCode() {
    return this.getStringAttribute('mongos_product_code');
  }
  public set mongosProductCode(value: string) {
    this._mongosProductCode = value;
  }
  public resetMongosProductCode() {
    this._mongosProductCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mongosProductCodeInput() {
    return this._mongosProductCode;
  }

  // mongos_server_count - computed: true, optional: true, required: false
  private _mongosServerCount?: number; 
  public get mongosServerCount() {
    return this.getNumberAttribute('mongos_server_count');
  }
  public set mongosServerCount(value: number) {
    this._mongosServerCount = value;
  }
  public resetMongosServerCount() {
    this._mongosServerCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mongosServerCountInput() {
    return this._mongosServerCount;
  }

  // region_code - computed: true, optional: false, required: false
  public get regionCode() {
    return this.getStringAttribute('region_code');
  }

  // server_name_prefix - computed: false, optional: false, required: true
  private _serverNamePrefix?: string; 
  public get serverNamePrefix() {
    return this.getStringAttribute('server_name_prefix');
  }
  public set serverNamePrefix(value: string) {
    this._serverNamePrefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNamePrefixInput() {
    return this._serverNamePrefix;
  }

  // service_name - computed: false, optional: false, required: true
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // shard_count - computed: true, optional: true, required: false
  private _shardCount?: number; 
  public get shardCount() {
    return this.getNumberAttribute('shard_count');
  }
  public set shardCount(value: number) {
    this._shardCount = value;
  }
  public resetShardCount() {
    this._shardCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shardCountInput() {
    return this._shardCount;
  }

  // subnet_no - computed: false, optional: false, required: true
  private _subnetNo?: string; 
  public get subnetNo() {
    return this.getStringAttribute('subnet_no');
  }
  public set subnetNo(value: string) {
    this._subnetNo = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetNoInput() {
    return this._subnetNo;
  }

  // user_name - computed: false, optional: false, required: true
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }

  // user_password - computed: false, optional: false, required: true
  private _userPassword?: string; 
  public get userPassword() {
    return this.getStringAttribute('user_password');
  }
  public set userPassword(value: string) {
    this._userPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userPasswordInput() {
    return this._userPassword;
  }

  // vpc_no - computed: false, optional: false, required: true
  private _vpcNo?: string; 
  public get vpcNo() {
    return this.getStringAttribute('vpc_no');
  }
  public set vpcNo(value: string) {
    this._vpcNo = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcNoInput() {
    return this._vpcNo;
  }

  // zone_code - computed: true, optional: false, required: false
  public get zoneCode() {
    return this.getStringAttribute('zone_code');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      arbiter_product_code: cdktf.stringToTerraform(this._arbiterProductCode),
      arbiter_server_count: cdktf.numberToTerraform(this._arbiterServerCount),
      backup_file_retention_period: cdktf.numberToTerraform(this._backupFileRetentionPeriod),
      backup_time: cdktf.stringToTerraform(this._backupTime),
      cluster_type_code: cdktf.stringToTerraform(this._clusterTypeCode),
      compress_code: cdktf.stringToTerraform(this._compressCode),
      config_port: cdktf.numberToTerraform(this._configPort),
      config_product_code: cdktf.stringToTerraform(this._configProductCode),
      config_server_count: cdktf.numberToTerraform(this._configServerCount),
      data_storage_type: cdktf.stringToTerraform(this._dataStorageType),
      engine_version_code: cdktf.stringToTerraform(this._engineVersionCode),
      image_product_code: cdktf.stringToTerraform(this._imageProductCode),
      member_port: cdktf.numberToTerraform(this._memberPort),
      member_product_code: cdktf.stringToTerraform(this._memberProductCode),
      member_server_count: cdktf.numberToTerraform(this._memberServerCount),
      mongos_port: cdktf.numberToTerraform(this._mongosPort),
      mongos_product_code: cdktf.stringToTerraform(this._mongosProductCode),
      mongos_server_count: cdktf.numberToTerraform(this._mongosServerCount),
      server_name_prefix: cdktf.stringToTerraform(this._serverNamePrefix),
      service_name: cdktf.stringToTerraform(this._serviceName),
      shard_count: cdktf.numberToTerraform(this._shardCount),
      subnet_no: cdktf.stringToTerraform(this._subnetNo),
      user_name: cdktf.stringToTerraform(this._userName),
      user_password: cdktf.stringToTerraform(this._userPassword),
      vpc_no: cdktf.stringToTerraform(this._vpcNo),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      arbiter_product_code: {
        value: cdktf.stringToHclTerraform(this._arbiterProductCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      arbiter_server_count: {
        value: cdktf.numberToHclTerraform(this._arbiterServerCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      backup_file_retention_period: {
        value: cdktf.numberToHclTerraform(this._backupFileRetentionPeriod),
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
      cluster_type_code: {
        value: cdktf.stringToHclTerraform(this._clusterTypeCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compress_code: {
        value: cdktf.stringToHclTerraform(this._compressCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config_port: {
        value: cdktf.numberToHclTerraform(this._configPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      config_product_code: {
        value: cdktf.stringToHclTerraform(this._configProductCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config_server_count: {
        value: cdktf.numberToHclTerraform(this._configServerCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      data_storage_type: {
        value: cdktf.stringToHclTerraform(this._dataStorageType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      engine_version_code: {
        value: cdktf.stringToHclTerraform(this._engineVersionCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      image_product_code: {
        value: cdktf.stringToHclTerraform(this._imageProductCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      member_port: {
        value: cdktf.numberToHclTerraform(this._memberPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      member_product_code: {
        value: cdktf.stringToHclTerraform(this._memberProductCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      member_server_count: {
        value: cdktf.numberToHclTerraform(this._memberServerCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mongos_port: {
        value: cdktf.numberToHclTerraform(this._mongosPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mongos_product_code: {
        value: cdktf.stringToHclTerraform(this._mongosProductCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mongos_server_count: {
        value: cdktf.numberToHclTerraform(this._mongosServerCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      server_name_prefix: {
        value: cdktf.stringToHclTerraform(this._serverNamePrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_name: {
        value: cdktf.stringToHclTerraform(this._serviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shard_count: {
        value: cdktf.numberToHclTerraform(this._shardCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      subnet_no: {
        value: cdktf.stringToHclTerraform(this._subnetNo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_name: {
        value: cdktf.stringToHclTerraform(this._userName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_password: {
        value: cdktf.stringToHclTerraform(this._userPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_no: {
        value: cdktf.stringToHclTerraform(this._vpcNo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
