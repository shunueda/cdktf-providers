// https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/mssql
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MssqlConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/mssql#backup_file_retention_period Mssql#backup_file_retention_period}
  */
  readonly backupFileRetentionPeriod?: number;
  /**
  * ex) 01:15
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/mssql#backup_time Mssql#backup_time}
  */
  readonly backupTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/mssql#character_set_name Mssql#character_set_name}
  */
  readonly characterSetName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/mssql#config_group_no Mssql#config_group_no}
  */
  readonly configGroupNo?: string;
  /**
  * default: SSD
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/mssql#data_storage_type Mssql#data_storage_type}
  */
  readonly dataStorageType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/mssql#image_product_code Mssql#image_product_code}
  */
  readonly imageProductCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/mssql#is_automatic_backup Mssql#is_automatic_backup}
  */
  readonly isAutomaticBackup?: boolean | cdktf.IResolvable;
  /**
  * default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/mssql#is_ha Mssql#is_ha}
  */
  readonly isHa: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/mssql#port Mssql#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/mssql#product_code Mssql#product_code}
  */
  readonly productCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/mssql#service_name Mssql#service_name}
  */
  readonly serviceName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/mssql#subnet_no Mssql#subnet_no}
  */
  readonly subnetNo: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/mssql#user_name Mssql#user_name}
  */
  readonly userName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/mssql#user_password Mssql#user_password}
  */
  readonly userPassword: string;
}
export interface MssqlMssqlServerListStruct {
}

export function mssqlMssqlServerListStructToTerraform(struct?: MssqlMssqlServerListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function mssqlMssqlServerListStructToHclTerraform(struct?: MssqlMssqlServerListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class MssqlMssqlServerListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MssqlMssqlServerListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MssqlMssqlServerListStruct | undefined) {
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

export class MssqlMssqlServerListStructList extends cdktf.ComplexList {

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
  public get(index: number): MssqlMssqlServerListStructOutputReference {
    return new MssqlMssqlServerListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/mssql ncloud_mssql}
*/
export class Mssql extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ncloud_mssql";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Mssql resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Mssql to import
  * @param importFromId The id of the existing Mssql that should be imported. Refer to the {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/mssql#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Mssql to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ncloud_mssql", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/mssql ncloud_mssql} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MssqlConfig
  */
  public constructor(scope: Construct, id: string, config: MssqlConfig) {
    super(scope, id, {
      terraformResourceType: 'ncloud_mssql',
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
    this._characterSetName = config.characterSetName;
    this._configGroupNo = config.configGroupNo;
    this._dataStorageType = config.dataStorageType;
    this._imageProductCode = config.imageProductCode;
    this._isAutomaticBackup = config.isAutomaticBackup;
    this._isHa = config.isHa;
    this._port = config.port;
    this._productCode = config.productCode;
    this._serviceName = config.serviceName;
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

  // character_set_name - computed: true, optional: true, required: false
  private _characterSetName?: string; 
  public get characterSetName() {
    return this.getStringAttribute('character_set_name');
  }
  public set characterSetName(value: string) {
    this._characterSetName = value;
  }
  public resetCharacterSetName() {
    this._characterSetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get characterSetNameInput() {
    return this._characterSetName;
  }

  // config_group_no - computed: true, optional: true, required: false
  private _configGroupNo?: string; 
  public get configGroupNo() {
    return this.getStringAttribute('config_group_no');
  }
  public set configGroupNo(value: string) {
    this._configGroupNo = value;
  }
  public resetConfigGroupNo() {
    this._configGroupNo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configGroupNoInput() {
    return this._configGroupNo;
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

  // engine_version - computed: true, optional: false, required: false
  public get engineVersion() {
    return this.getStringAttribute('engine_version');
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

  // is_ha - computed: false, optional: false, required: true
  private _isHa?: boolean | cdktf.IResolvable; 
  public get isHa() {
    return this.getBooleanAttribute('is_ha');
  }
  public set isHa(value: boolean | cdktf.IResolvable) {
    this._isHa = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isHaInput() {
    return this._isHa;
  }

  // mssql_server_list - computed: true, optional: false, required: false
  private _mssqlServerList = new MssqlMssqlServerListStructList(this, "mssql_server_list", false);
  public get mssqlServerList() {
    return this._mssqlServerList;
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
      character_set_name: cdktf.stringToTerraform(this._characterSetName),
      config_group_no: cdktf.stringToTerraform(this._configGroupNo),
      data_storage_type: cdktf.stringToTerraform(this._dataStorageType),
      image_product_code: cdktf.stringToTerraform(this._imageProductCode),
      is_automatic_backup: cdktf.booleanToTerraform(this._isAutomaticBackup),
      is_ha: cdktf.booleanToTerraform(this._isHa),
      port: cdktf.numberToTerraform(this._port),
      product_code: cdktf.stringToTerraform(this._productCode),
      service_name: cdktf.stringToTerraform(this._serviceName),
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
      character_set_name: {
        value: cdktf.stringToHclTerraform(this._characterSetName),
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
      data_storage_type: {
        value: cdktf.stringToHclTerraform(this._dataStorageType),
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
      is_ha: {
        value: cdktf.booleanToHclTerraform(this._isHa),
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
      service_name: {
        value: cdktf.stringToHclTerraform(this._serviceName),
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
