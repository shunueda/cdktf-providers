// https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/postgresql
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PostgresqlConfig extends cdktf.TerraformMetaArguments {
  /**
  * default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/postgresql#automatic_backup Postgresql#automatic_backup}
  */
  readonly automaticBackup?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/postgresql#backup Postgresql#backup}
  */
  readonly backup?: boolean | cdktf.IResolvable;
  /**
  * default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/postgresql#backup_file_compression Postgresql#backup_file_compression}
  */
  readonly backupFileCompression?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/postgresql#backup_file_retention_period Postgresql#backup_file_retention_period}
  */
  readonly backupFileRetentionPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/postgresql#backup_file_storage_count Postgresql#backup_file_storage_count}
  */
  readonly backupFileStorageCount?: number;
  /**
  * ex) 01:15
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/postgresql#backup_time Postgresql#backup_time}
  */
  readonly backupTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/postgresql#client_cidr Postgresql#client_cidr}
  */
  readonly clientCidr: string;
  /**
  * default: SSD
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/postgresql#data_storage_type Postgresql#data_storage_type}
  */
  readonly dataStorageType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/postgresql#database_name Postgresql#database_name}
  */
  readonly databaseName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/postgresql#engine_version_code Postgresql#engine_version_code}
  */
  readonly engineVersionCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/postgresql#ha Postgresql#ha}
  */
  readonly ha?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/postgresql#image_product_code Postgresql#image_product_code}
  */
  readonly imageProductCode?: string;
  /**
  * default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/postgresql#multi_zone Postgresql#multi_zone}
  */
  readonly multiZone?: boolean | cdktf.IResolvable;
  /**
  * default: 5432
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/postgresql#port Postgresql#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/postgresql#product_code Postgresql#product_code}
  */
  readonly productCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/postgresql#secondary_subnet_no Postgresql#secondary_subnet_no}
  */
  readonly secondarySubnetNo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/postgresql#server_name_prefix Postgresql#server_name_prefix}
  */
  readonly serverNamePrefix: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/postgresql#service_name Postgresql#service_name}
  */
  readonly serviceName: string;
  /**
  * default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/postgresql#storage_encryption Postgresql#storage_encryption}
  */
  readonly storageEncryption?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/postgresql#subnet_no Postgresql#subnet_no}
  */
  readonly subnetNo: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/postgresql#user_name Postgresql#user_name}
  */
  readonly userName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/postgresql#user_password Postgresql#user_password}
  */
  readonly userPassword: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/postgresql#vpc_no Postgresql#vpc_no}
  */
  readonly vpcNo: string;
}
export interface PostgresqlPostgresqlServerListStruct {
}

export function postgresqlPostgresqlServerListStructToTerraform(struct?: PostgresqlPostgresqlServerListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function postgresqlPostgresqlServerListStructToHclTerraform(struct?: PostgresqlPostgresqlServerListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PostgresqlPostgresqlServerListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PostgresqlPostgresqlServerListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PostgresqlPostgresqlServerListStruct | undefined) {
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

  // memory_size - computed: true, optional: false, required: false
  public get memorySize() {
    return this.getNumberAttribute('memory_size');
  }

  // private_domain - computed: true, optional: false, required: false
  public get privateDomain() {
    return this.getStringAttribute('private_domain');
  }

  // private_ip - computed: true, optional: false, required: false
  public get privateIp() {
    return this.getStringAttribute('private_ip');
  }

  // product_code - computed: true, optional: false, required: false
  public get productCode() {
    return this.getStringAttribute('product_code');
  }

  // public_domain - computed: true, optional: false, required: false
  public get publicDomain() {
    return this.getStringAttribute('public_domain');
  }

  // public_subnet - computed: true, optional: false, required: false
  public get publicSubnet() {
    return this.getBooleanAttribute('public_subnet');
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

export class PostgresqlPostgresqlServerListStructList extends cdktf.ComplexList {

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
  public get(index: number): PostgresqlPostgresqlServerListStructOutputReference {
    return new PostgresqlPostgresqlServerListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/postgresql ncloud_postgresql}
*/
export class Postgresql extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ncloud_postgresql";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Postgresql resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Postgresql to import
  * @param importFromId The id of the existing Postgresql that should be imported. Refer to the {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/postgresql#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Postgresql to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ncloud_postgresql", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/postgresql ncloud_postgresql} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PostgresqlConfig
  */
  public constructor(scope: Construct, id: string, config: PostgresqlConfig) {
    super(scope, id, {
      terraformResourceType: 'ncloud_postgresql',
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
    this._automaticBackup = config.automaticBackup;
    this._backup = config.backup;
    this._backupFileCompression = config.backupFileCompression;
    this._backupFileRetentionPeriod = config.backupFileRetentionPeriod;
    this._backupFileStorageCount = config.backupFileStorageCount;
    this._backupTime = config.backupTime;
    this._clientCidr = config.clientCidr;
    this._dataStorageType = config.dataStorageType;
    this._databaseName = config.databaseName;
    this._engineVersionCode = config.engineVersionCode;
    this._ha = config.ha;
    this._imageProductCode = config.imageProductCode;
    this._multiZone = config.multiZone;
    this._port = config.port;
    this._productCode = config.productCode;
    this._secondarySubnetNo = config.secondarySubnetNo;
    this._serverNamePrefix = config.serverNamePrefix;
    this._serviceName = config.serviceName;
    this._storageEncryption = config.storageEncryption;
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

  // automatic_backup - computed: false, optional: true, required: false
  private _automaticBackup?: boolean | cdktf.IResolvable; 
  public get automaticBackup() {
    return this.getBooleanAttribute('automatic_backup');
  }
  public set automaticBackup(value: boolean | cdktf.IResolvable) {
    this._automaticBackup = value;
  }
  public resetAutomaticBackup() {
    this._automaticBackup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticBackupInput() {
    return this._automaticBackup;
  }

  // backup - computed: true, optional: true, required: false
  private _backup?: boolean | cdktf.IResolvable; 
  public get backup() {
    return this.getBooleanAttribute('backup');
  }
  public set backup(value: boolean | cdktf.IResolvable) {
    this._backup = value;
  }
  public resetBackup() {
    this._backup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupInput() {
    return this._backup;
  }

  // backup_file_compression - computed: false, optional: true, required: false
  private _backupFileCompression?: boolean | cdktf.IResolvable; 
  public get backupFileCompression() {
    return this.getBooleanAttribute('backup_file_compression');
  }
  public set backupFileCompression(value: boolean | cdktf.IResolvable) {
    this._backupFileCompression = value;
  }
  public resetBackupFileCompression() {
    this._backupFileCompression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupFileCompressionInput() {
    return this._backupFileCompression;
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

  // backup_file_storage_count - computed: false, optional: true, required: false
  private _backupFileStorageCount?: number; 
  public get backupFileStorageCount() {
    return this.getNumberAttribute('backup_file_storage_count');
  }
  public set backupFileStorageCount(value: number) {
    this._backupFileStorageCount = value;
  }
  public resetBackupFileStorageCount() {
    this._backupFileStorageCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupFileStorageCountInput() {
    return this._backupFileStorageCount;
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

  // client_cidr - computed: false, optional: false, required: true
  private _clientCidr?: string; 
  public get clientCidr() {
    return this.getStringAttribute('client_cidr');
  }
  public set clientCidr(value: string) {
    this._clientCidr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCidrInput() {
    return this._clientCidr;
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

  // generation_code - computed: true, optional: false, required: false
  public get generationCode() {
    return this.getStringAttribute('generation_code');
  }

  // ha - computed: true, optional: true, required: false
  private _ha?: boolean | cdktf.IResolvable; 
  public get ha() {
    return this.getBooleanAttribute('ha');
  }
  public set ha(value: boolean | cdktf.IResolvable) {
    this._ha = value;
  }
  public resetHa() {
    this._ha = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haInput() {
    return this._ha;
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

  // multi_zone - computed: true, optional: true, required: false
  private _multiZone?: boolean | cdktf.IResolvable; 
  public get multiZone() {
    return this.getBooleanAttribute('multi_zone');
  }
  public set multiZone(value: boolean | cdktf.IResolvable) {
    this._multiZone = value;
  }
  public resetMultiZone() {
    this._multiZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiZoneInput() {
    return this._multiZone;
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

  // postgresql_config_list - computed: true, optional: false, required: false
  public get postgresqlConfigList() {
    return this.getListAttribute('postgresql_config_list');
  }

  // postgresql_server_list - computed: true, optional: false, required: false
  private _postgresqlServerList = new PostgresqlPostgresqlServerListStructList(this, "postgresql_server_list", false);
  public get postgresqlServerList() {
    return this._postgresqlServerList;
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

  // secondary_subnet_no - computed: false, optional: true, required: false
  private _secondarySubnetNo?: string; 
  public get secondarySubnetNo() {
    return this.getStringAttribute('secondary_subnet_no');
  }
  public set secondarySubnetNo(value: string) {
    this._secondarySubnetNo = value;
  }
  public resetSecondarySubnetNo() {
    this._secondarySubnetNo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondarySubnetNoInput() {
    return this._secondarySubnetNo;
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

  // storage_encryption - computed: true, optional: true, required: false
  private _storageEncryption?: boolean | cdktf.IResolvable; 
  public get storageEncryption() {
    return this.getBooleanAttribute('storage_encryption');
  }
  public set storageEncryption(value: boolean | cdktf.IResolvable) {
    this._storageEncryption = value;
  }
  public resetStorageEncryption() {
    this._storageEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageEncryptionInput() {
    return this._storageEncryption;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      automatic_backup: cdktf.booleanToTerraform(this._automaticBackup),
      backup: cdktf.booleanToTerraform(this._backup),
      backup_file_compression: cdktf.booleanToTerraform(this._backupFileCompression),
      backup_file_retention_period: cdktf.numberToTerraform(this._backupFileRetentionPeriod),
      backup_file_storage_count: cdktf.numberToTerraform(this._backupFileStorageCount),
      backup_time: cdktf.stringToTerraform(this._backupTime),
      client_cidr: cdktf.stringToTerraform(this._clientCidr),
      data_storage_type: cdktf.stringToTerraform(this._dataStorageType),
      database_name: cdktf.stringToTerraform(this._databaseName),
      engine_version_code: cdktf.stringToTerraform(this._engineVersionCode),
      ha: cdktf.booleanToTerraform(this._ha),
      image_product_code: cdktf.stringToTerraform(this._imageProductCode),
      multi_zone: cdktf.booleanToTerraform(this._multiZone),
      port: cdktf.numberToTerraform(this._port),
      product_code: cdktf.stringToTerraform(this._productCode),
      secondary_subnet_no: cdktf.stringToTerraform(this._secondarySubnetNo),
      server_name_prefix: cdktf.stringToTerraform(this._serverNamePrefix),
      service_name: cdktf.stringToTerraform(this._serviceName),
      storage_encryption: cdktf.booleanToTerraform(this._storageEncryption),
      subnet_no: cdktf.stringToTerraform(this._subnetNo),
      user_name: cdktf.stringToTerraform(this._userName),
      user_password: cdktf.stringToTerraform(this._userPassword),
      vpc_no: cdktf.stringToTerraform(this._vpcNo),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      automatic_backup: {
        value: cdktf.booleanToHclTerraform(this._automaticBackup),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      backup: {
        value: cdktf.booleanToHclTerraform(this._backup),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      backup_file_compression: {
        value: cdktf.booleanToHclTerraform(this._backupFileCompression),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      backup_file_retention_period: {
        value: cdktf.numberToHclTerraform(this._backupFileRetentionPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      backup_file_storage_count: {
        value: cdktf.numberToHclTerraform(this._backupFileStorageCount),
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
      client_cidr: {
        value: cdktf.stringToHclTerraform(this._clientCidr),
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
      ha: {
        value: cdktf.booleanToHclTerraform(this._ha),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      image_product_code: {
        value: cdktf.stringToHclTerraform(this._imageProductCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      multi_zone: {
        value: cdktf.booleanToHclTerraform(this._multiZone),
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
      secondary_subnet_no: {
        value: cdktf.stringToHclTerraform(this._secondarySubnetNo),
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
      storage_encryption: {
        value: cdktf.booleanToHclTerraform(this._storageEncryption),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
