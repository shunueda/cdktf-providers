// https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/mysql_recovery
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MysqlRecoveryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/mysql_recovery#file_name MysqlRecovery#file_name}
  */
  readonly fileName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/mysql_recovery#mysql_instance_no MysqlRecovery#mysql_instance_no}
  */
  readonly mysqlInstanceNo: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/mysql_recovery#recovery_server_name MysqlRecovery#recovery_server_name}
  */
  readonly recoveryServerName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/mysql_recovery#recovery_time MysqlRecovery#recovery_time}
  */
  readonly recoveryTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/mysql_recovery#subnet_no MysqlRecovery#subnet_no}
  */
  readonly subnetNo?: string;
}
export interface MysqlRecoveryMysqlServerListStruct {
}

export function mysqlRecoveryMysqlServerListStructToTerraform(struct?: MysqlRecoveryMysqlServerListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function mysqlRecoveryMysqlServerListStructToHclTerraform(struct?: MysqlRecoveryMysqlServerListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class MysqlRecoveryMysqlServerListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MysqlRecoveryMysqlServerListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MysqlRecoveryMysqlServerListStruct | undefined) {
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

export class MysqlRecoveryMysqlServerListStructList extends cdktf.ComplexList {

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
  public get(index: number): MysqlRecoveryMysqlServerListStructOutputReference {
    return new MysqlRecoveryMysqlServerListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/mysql_recovery ncloud_mysql_recovery}
*/
export class MysqlRecovery extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ncloud_mysql_recovery";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MysqlRecovery resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MysqlRecovery to import
  * @param importFromId The id of the existing MysqlRecovery that should be imported. Refer to the {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/mysql_recovery#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MysqlRecovery to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ncloud_mysql_recovery", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/mysql_recovery ncloud_mysql_recovery} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MysqlRecoveryConfig
  */
  public constructor(scope: Construct, id: string, config: MysqlRecoveryConfig) {
    super(scope, id, {
      terraformResourceType: 'ncloud_mysql_recovery',
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
    this._fileName = config.fileName;
    this._mysqlInstanceNo = config.mysqlInstanceNo;
    this._recoveryServerName = config.recoveryServerName;
    this._recoveryTime = config.recoveryTime;
    this._subnetNo = config.subnetNo;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // file_name - computed: false, optional: true, required: false
  private _fileName?: string; 
  public get fileName() {
    return this.getStringAttribute('file_name');
  }
  public set fileName(value: string) {
    this._fileName = value;
  }
  public resetFileName() {
    this._fileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileNameInput() {
    return this._fileName;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // mysql_instance_no - computed: false, optional: false, required: true
  private _mysqlInstanceNo?: string; 
  public get mysqlInstanceNo() {
    return this.getStringAttribute('mysql_instance_no');
  }
  public set mysqlInstanceNo(value: string) {
    this._mysqlInstanceNo = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlInstanceNoInput() {
    return this._mysqlInstanceNo;
  }

  // mysql_server_list - computed: true, optional: false, required: false
  private _mysqlServerList = new MysqlRecoveryMysqlServerListStructList(this, "mysql_server_list", false);
  public get mysqlServerList() {
    return this._mysqlServerList;
  }

  // recovery_server_name - computed: false, optional: false, required: true
  private _recoveryServerName?: string; 
  public get recoveryServerName() {
    return this.getStringAttribute('recovery_server_name');
  }
  public set recoveryServerName(value: string) {
    this._recoveryServerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryServerNameInput() {
    return this._recoveryServerName;
  }

  // recovery_time - computed: false, optional: true, required: false
  private _recoveryTime?: string; 
  public get recoveryTime() {
    return this.getStringAttribute('recovery_time');
  }
  public set recoveryTime(value: string) {
    this._recoveryTime = value;
  }
  public resetRecoveryTime() {
    this._recoveryTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryTimeInput() {
    return this._recoveryTime;
  }

  // subnet_no - computed: true, optional: true, required: false
  private _subnetNo?: string; 
  public get subnetNo() {
    return this.getStringAttribute('subnet_no');
  }
  public set subnetNo(value: string) {
    this._subnetNo = value;
  }
  public resetSubnetNo() {
    this._subnetNo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetNoInput() {
    return this._subnetNo;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      file_name: cdktf.stringToTerraform(this._fileName),
      mysql_instance_no: cdktf.stringToTerraform(this._mysqlInstanceNo),
      recovery_server_name: cdktf.stringToTerraform(this._recoveryServerName),
      recovery_time: cdktf.stringToTerraform(this._recoveryTime),
      subnet_no: cdktf.stringToTerraform(this._subnetNo),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      file_name: {
        value: cdktf.stringToHclTerraform(this._fileName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mysql_instance_no: {
        value: cdktf.stringToHclTerraform(this._mysqlInstanceNo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      recovery_server_name: {
        value: cdktf.stringToHclTerraform(this._recoveryServerName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      recovery_time: {
        value: cdktf.stringToHclTerraform(this._recoveryTime),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
