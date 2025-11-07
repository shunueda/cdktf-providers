// https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/redis
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RedisConfig extends cdktf.TerraformMetaArguments {
  /**
  * default: 1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/redis#backup_file_retention_period Redis#backup_file_retention_period}
  */
  readonly backupFileRetentionPeriod?: number;
  /**
  * ex) 01:15
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/redis#backup_time Redis#backup_time}
  */
  readonly backupTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/redis#config_group_no Redis#config_group_no}
  */
  readonly configGroupNo: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/redis#engine_version_code Redis#engine_version_code}
  */
  readonly engineVersionCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/redis#image_product_code Redis#image_product_code}
  */
  readonly imageProductCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/redis#is_automatic_backup Redis#is_automatic_backup}
  */
  readonly isAutomaticBackup?: boolean | cdktf.IResolvable;
  /**
  * default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/redis#is_backup Redis#is_backup}
  */
  readonly isBackup?: boolean | cdktf.IResolvable;
  /**
  * default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/redis#is_ha Redis#is_ha}
  */
  readonly isHa?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/redis#mode Redis#mode}
  */
  readonly mode: string;
  /**
  * default: 6379
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/redis#port Redis#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/redis#product_code Redis#product_code}
  */
  readonly productCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/redis#server_name_prefix Redis#server_name_prefix}
  */
  readonly serverNamePrefix: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/redis#service_name Redis#service_name}
  */
  readonly serviceName: string;
  /**
  * default: 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/redis#shard_copy_count Redis#shard_copy_count}
  */
  readonly shardCopyCount?: number;
  /**
  * default: 3
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/redis#shard_count Redis#shard_count}
  */
  readonly shardCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/redis#subnet_no Redis#subnet_no}
  */
  readonly subnetNo: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/redis#user_name Redis#user_name}
  */
  readonly userName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/redis#user_password Redis#user_password}
  */
  readonly userPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/redis#vpc_no Redis#vpc_no}
  */
  readonly vpcNo: string;
}
export interface RedisRedisServerListStruct {
}

export function redisRedisServerListStructToTerraform(struct?: RedisRedisServerListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function redisRedisServerListStructToHclTerraform(struct?: RedisRedisServerListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class RedisRedisServerListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RedisRedisServerListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RedisRedisServerListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // create_date - computed: true, optional: false, required: false
  public get createDate() {
    return this.getStringAttribute('create_date');
  }

  // memory_size - computed: true, optional: false, required: false
  public get memorySize() {
    return this.getNumberAttribute('memory_size');
  }

  // os_memory_size - computed: true, optional: false, required: false
  public get osMemorySize() {
    return this.getNumberAttribute('os_memory_size');
  }

  // private_domain - computed: true, optional: false, required: false
  public get privateDomain() {
    return this.getStringAttribute('private_domain');
  }

  // redis_server_instance_no - computed: true, optional: false, required: false
  public get redisServerInstanceNo() {
    return this.getStringAttribute('redis_server_instance_no');
  }

  // redis_server_name - computed: true, optional: false, required: false
  public get redisServerName() {
    return this.getStringAttribute('redis_server_name');
  }

  // redis_server_role - computed: true, optional: false, required: false
  public get redisServerRole() {
    return this.getStringAttribute('redis_server_role');
  }

  // uptime - computed: true, optional: false, required: false
  public get uptime() {
    return this.getStringAttribute('uptime');
  }
}

export class RedisRedisServerListStructList extends cdktf.ComplexList {

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
  public get(index: number): RedisRedisServerListStructOutputReference {
    return new RedisRedisServerListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/redis ncloud_redis}
*/
export class Redis extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ncloud_redis";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Redis resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Redis to import
  * @param importFromId The id of the existing Redis that should be imported. Refer to the {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/redis#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Redis to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ncloud_redis", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/redis ncloud_redis} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RedisConfig
  */
  public constructor(scope: Construct, id: string, config: RedisConfig) {
    super(scope, id, {
      terraformResourceType: 'ncloud_redis',
      terraformGeneratorMetadata: {
        providerName: 'ncloud',
        providerVersion: '4.0.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._backupFileRetentionPeriod = config.backupFileRetentionPeriod;
    this._backupTime = config.backupTime;
    this._configGroupNo = config.configGroupNo;
    this._engineVersionCode = config.engineVersionCode;
    this._imageProductCode = config.imageProductCode;
    this._isAutomaticBackup = config.isAutomaticBackup;
    this._isBackup = config.isBackup;
    this._isHa = config.isHa;
    this._mode = config.mode;
    this._port = config.port;
    this._productCode = config.productCode;
    this._serverNamePrefix = config.serverNamePrefix;
    this._serviceName = config.serviceName;
    this._shardCopyCount = config.shardCopyCount;
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

  // backup_schedule - computed: true, optional: false, required: false
  public get backupSchedule() {
    return this.getStringAttribute('backup_schedule');
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

  // config_group_no - computed: false, optional: false, required: true
  private _configGroupNo?: string; 
  public get configGroupNo() {
    return this.getStringAttribute('config_group_no');
  }
  public set configGroupNo(value: string) {
    this._configGroupNo = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configGroupNoInput() {
    return this._configGroupNo;
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

  // is_automatic_backup - computed: false, optional: true, required: false
  private _isAutomaticBackup?: boolean | cdktf.IResolvable; 
  public get isAutomaticBackup() {
    return this.getBooleanAttribute('is_automatic_backup');
  }
  public set isAutomaticBackup(value: boolean | cdktf.IResolvable) {
    this._isAutomaticBackup = value;
  }
  public resetIsAutomaticBackup() {
    this._isAutomaticBackup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAutomaticBackupInput() {
    return this._isAutomaticBackup;
  }

  // is_backup - computed: true, optional: true, required: false
  private _isBackup?: boolean | cdktf.IResolvable; 
  public get isBackup() {
    return this.getBooleanAttribute('is_backup');
  }
  public set isBackup(value: boolean | cdktf.IResolvable) {
    this._isBackup = value;
  }
  public resetIsBackup() {
    this._isBackup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isBackupInput() {
    return this._isBackup;
  }

  // is_ha - computed: true, optional: true, required: false
  private _isHa?: boolean | cdktf.IResolvable; 
  public get isHa() {
    return this.getBooleanAttribute('is_ha');
  }
  public set isHa(value: boolean | cdktf.IResolvable) {
    this._isHa = value;
  }
  public resetIsHa() {
    this._isHa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isHaInput() {
    return this._isHa;
  }

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
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

  // product_code - computed: true, optional: true, required: false
  private _productCode?: string; 
  public get productCode() {
    return this.getStringAttribute('product_code');
  }
  public set productCode(value: string) {
    this._productCode = value;
  }
  public resetProductCode() {
    this._productCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productCodeInput() {
    return this._productCode;
  }

  // redis_server_list - computed: true, optional: false, required: false
  private _redisServerList = new RedisRedisServerListStructList(this, "redis_server_list", false);
  public get redisServerList() {
    return this._redisServerList;
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

  // shard_copy_count - computed: false, optional: true, required: false
  private _shardCopyCount?: number; 
  public get shardCopyCount() {
    return this.getNumberAttribute('shard_copy_count');
  }
  public set shardCopyCount(value: number) {
    this._shardCopyCount = value;
  }
  public resetShardCopyCount() {
    this._shardCopyCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shardCopyCountInput() {
    return this._shardCopyCount;
  }

  // shard_count - computed: false, optional: true, required: false
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

  // user_name - computed: false, optional: true, required: false
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  public resetUserName() {
    this._userName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }

  // user_password - computed: false, optional: true, required: false
  private _userPassword?: string; 
  public get userPassword() {
    return this.getStringAttribute('user_password');
  }
  public set userPassword(value: string) {
    this._userPassword = value;
  }
  public resetUserPassword() {
    this._userPassword = undefined;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backup_file_retention_period: cdktf.numberToTerraform(this._backupFileRetentionPeriod),
      backup_time: cdktf.stringToTerraform(this._backupTime),
      config_group_no: cdktf.stringToTerraform(this._configGroupNo),
      engine_version_code: cdktf.stringToTerraform(this._engineVersionCode),
      image_product_code: cdktf.stringToTerraform(this._imageProductCode),
      is_automatic_backup: cdktf.booleanToTerraform(this._isAutomaticBackup),
      is_backup: cdktf.booleanToTerraform(this._isBackup),
      is_ha: cdktf.booleanToTerraform(this._isHa),
      mode: cdktf.stringToTerraform(this._mode),
      port: cdktf.numberToTerraform(this._port),
      product_code: cdktf.stringToTerraform(this._productCode),
      server_name_prefix: cdktf.stringToTerraform(this._serverNamePrefix),
      service_name: cdktf.stringToTerraform(this._serviceName),
      shard_copy_count: cdktf.numberToTerraform(this._shardCopyCount),
      shard_count: cdktf.numberToTerraform(this._shardCount),
      subnet_no: cdktf.stringToTerraform(this._subnetNo),
      user_name: cdktf.stringToTerraform(this._userName),
      user_password: cdktf.stringToTerraform(this._userPassword),
      vpc_no: cdktf.stringToTerraform(this._vpcNo),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      config_group_no: {
        value: cdktf.stringToHclTerraform(this._configGroupNo),
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
      is_automatic_backup: {
        value: cdktf.booleanToHclTerraform(this._isAutomaticBackup),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_backup: {
        value: cdktf.booleanToHclTerraform(this._isBackup),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_ha: {
        value: cdktf.booleanToHclTerraform(this._isHa),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mode: {
        value: cdktf.stringToHclTerraform(this._mode),
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
      product_code: {
        value: cdktf.stringToHclTerraform(this._productCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      shard_copy_count: {
        value: cdktf.numberToHclTerraform(this._shardCopyCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
