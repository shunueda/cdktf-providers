// https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/mysql
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MysqlConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/mysql#backup_file_retention_period Mysql#backup_file_retention_period}
  */
  readonly backupFileRetentionPeriod?: number;
  /**
  * ex) 01:15
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/mysql#backup_time Mysql#backup_time}
  */
  readonly backupTime?: string;
  /**
  * default: SSD
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/mysql#data_storage_type Mysql#data_storage_type}
  */
  readonly dataStorageType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/mysql#database_name Mysql#database_name}
  */
  readonly databaseName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/mysql#engine_version_code Mysql#engine_version_code}
  */
  readonly engineVersionCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/mysql#host_ip Mysql#host_ip}
  */
  readonly hostIp: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/mysql#image_product_code Mysql#image_product_code}
  */
  readonly imageProductCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/mysql#is_automatic_backup Mysql#is_automatic_backup}
  */
  readonly isAutomaticBackup?: boolean | cdktf.IResolvable;
  /**
  * default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/mysql#is_backup Mysql#is_backup}
  */
  readonly isBackup?: boolean | cdktf.IResolvable;
  /**
  * default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/mysql#is_ha Mysql#is_ha}
  */
  readonly isHa?: boolean | cdktf.IResolvable;
  /**
  * default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/mysql#is_multi_zone Mysql#is_multi_zone}
  */
  readonly isMultiZone?: boolean | cdktf.IResolvable;
  /**
  * default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/mysql#is_storage_encryption Mysql#is_storage_encryption}
  */
  readonly isStorageEncryption?: boolean | cdktf.IResolvable;
  /**
  * default: 3306
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/mysql#port Mysql#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/mysql#product_code Mysql#product_code}
  */
  readonly productCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/mysql#server_name_prefix Mysql#server_name_prefix}
  */
  readonly serverNamePrefix: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/mysql#service_name Mysql#service_name}
  */
  readonly serviceName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/mysql#standby_master_subnet_no Mysql#standby_master_subnet_no}
  */
  readonly standbyMasterSubnetNo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/mysql#subnet_no Mysql#subnet_no}
  */
  readonly subnetNo: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/mysql#user_name Mysql#user_name}
  */
  readonly userName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/mysql#user_password Mysql#user_password}
  */
  readonly userPassword: string;
}
export interface MysqlMysqlServerListStruct {
}

export function mysqlMysqlServerListStructToTerraform(struct?: MysqlMysqlServerListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function mysqlMysqlServerListStructToHclTerraform(struct?: MysqlMysqlServerListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class MysqlMysqlServerListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MysqlMysqlServerListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MysqlMysqlServerListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
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

  // is_public_subnet - computed: true, optional: false, required: false
  public get isPublicSubnet() {
    return this.getBooleanAttribute('is_public_subnet');
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

  // subnet_no - computed: true, optional: false, required: false
  public get subnetNo() {
    return this.getStringAttribute('subnet_no');
  }

  // uptime - computed: true, optional: false, required: false
  public get uptime() {
    return this.getStringAttribute('uptime');
  }

  // used_data_storage_size - computed: true, optional: false, required: false
  public get usedDataStorageSize() {
    return this.getNumberAttribute('used_data_storage_size');
  }

  // zone_code - computed: true, optional: false, required: false
  public get zoneCode() {
    return this.getStringAttribute('zone_code');
  }
}

export class MysqlMysqlServerListStructList extends cdktf.ComplexList {

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
  public get(index: number): MysqlMysqlServerListStructOutputReference {
    return new MysqlMysqlServerListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/mysql ncloud_mysql}
*/
export class Mysql extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ncloud_mysql";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Mysql resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Mysql to import
  * @param importFromId The id of the existing Mysql that should be imported. Refer to the {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/mysql#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Mysql to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ncloud_mysql", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/mysql ncloud_mysql} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MysqlConfig
  */
  public constructor(scope: Construct, id: string, config: MysqlConfig) {
    super(scope, id, {
      terraformResourceType: 'ncloud_mysql',
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
    this._dataStorageType = config.dataStorageType;
    this._databaseName = config.databaseName;
    this._engineVersionCode = config.engineVersionCode;
    this._hostIp = config.hostIp;
    this._imageProductCode = config.imageProductCode;
    this._isAutomaticBackup = config.isAutomaticBackup;
    this._isBackup = config.isBackup;
    this._isHa = config.isHa;
    this._isMultiZone = config.isMultiZone;
    this._isStorageEncryption = config.isStorageEncryption;
    this._port = config.port;
    this._productCode = config.productCode;
    this._serverNamePrefix = config.serverNamePrefix;
    this._serviceName = config.serviceName;
    this._standbyMasterSubnetNo = config.standbyMasterSubnetNo;
    this._subnetNo = config.subnetNo;
    this._userName = config.userName;
    this._userPassword = config.userPassword;
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

  // database_name - computed: false, optional: false, required: true
  private _databaseName?: string; 
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName;
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

  // host_ip - computed: false, optional: false, required: true
  private _hostIp?: string; 
  public get hostIp() {
    return this.getStringAttribute('host_ip');
  }
  public set hostIp(value: string) {
    this._hostIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostIpInput() {
    return this._hostIp;
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

  // is_multi_zone - computed: true, optional: true, required: false
  private _isMultiZone?: boolean | cdktf.IResolvable; 
  public get isMultiZone() {
    return this.getBooleanAttribute('is_multi_zone');
  }
  public set isMultiZone(value: boolean | cdktf.IResolvable) {
    this._isMultiZone = value;
  }
  public resetIsMultiZone() {
    this._isMultiZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isMultiZoneInput() {
    return this._isMultiZone;
  }

  // is_storage_encryption - computed: true, optional: true, required: false
  private _isStorageEncryption?: boolean | cdktf.IResolvable; 
  public get isStorageEncryption() {
    return this.getBooleanAttribute('is_storage_encryption');
  }
  public set isStorageEncryption(value: boolean | cdktf.IResolvable) {
    this._isStorageEncryption = value;
  }
  public resetIsStorageEncryption() {
    this._isStorageEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isStorageEncryptionInput() {
    return this._isStorageEncryption;
  }

  // mysql_config_list - computed: true, optional: false, required: false
  public get mysqlConfigList() {
    return this.getListAttribute('mysql_config_list');
  }

  // mysql_server_list - computed: true, optional: false, required: false
  private _mysqlServerList = new MysqlMysqlServerListStructList(this, "mysql_server_list", false);
  public get mysqlServerList() {
    return this._mysqlServerList;
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

  // product_code - computed: false, optional: true, required: false
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

  // standby_master_subnet_no - computed: false, optional: true, required: false
  private _standbyMasterSubnetNo?: string; 
  public get standbyMasterSubnetNo() {
    return this.getStringAttribute('standby_master_subnet_no');
  }
  public set standbyMasterSubnetNo(value: string) {
    this._standbyMasterSubnetNo = value;
  }
  public resetStandbyMasterSubnetNo() {
    this._standbyMasterSubnetNo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get standbyMasterSubnetNoInput() {
    return this._standbyMasterSubnetNo;
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

  // vpc_no - computed: true, optional: false, required: false
  public get vpcNo() {
    return this.getStringAttribute('vpc_no');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backup_file_retention_period: cdktf.numberToTerraform(this._backupFileRetentionPeriod),
      backup_time: cdktf.stringToTerraform(this._backupTime),
      data_storage_type: cdktf.stringToTerraform(this._dataStorageType),
      database_name: cdktf.stringToTerraform(this._databaseName),
      engine_version_code: cdktf.stringToTerraform(this._engineVersionCode),
      host_ip: cdktf.stringToTerraform(this._hostIp),
      image_product_code: cdktf.stringToTerraform(this._imageProductCode),
      is_automatic_backup: cdktf.booleanToTerraform(this._isAutomaticBackup),
      is_backup: cdktf.booleanToTerraform(this._isBackup),
      is_ha: cdktf.booleanToTerraform(this._isHa),
      is_multi_zone: cdktf.booleanToTerraform(this._isMultiZone),
      is_storage_encryption: cdktf.booleanToTerraform(this._isStorageEncryption),
      port: cdktf.numberToTerraform(this._port),
      product_code: cdktf.stringToTerraform(this._productCode),
      server_name_prefix: cdktf.stringToTerraform(this._serverNamePrefix),
      service_name: cdktf.stringToTerraform(this._serviceName),
      standby_master_subnet_no: cdktf.stringToTerraform(this._standbyMasterSubnetNo),
      subnet_no: cdktf.stringToTerraform(this._subnetNo),
      user_name: cdktf.stringToTerraform(this._userName),
      user_password: cdktf.stringToTerraform(this._userPassword),
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
      data_storage_type: {
        value: cdktf.stringToHclTerraform(this._dataStorageType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      database_name: {
        value: cdktf.stringToHclTerraform(this._databaseName),
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
      host_ip: {
        value: cdktf.stringToHclTerraform(this._hostIp),
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
      is_multi_zone: {
        value: cdktf.booleanToHclTerraform(this._isMultiZone),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_storage_encryption: {
        value: cdktf.booleanToHclTerraform(this._isStorageEncryption),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      standby_master_subnet_no: {
        value: cdktf.stringToHclTerraform(this._standbyMasterSubnetNo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
