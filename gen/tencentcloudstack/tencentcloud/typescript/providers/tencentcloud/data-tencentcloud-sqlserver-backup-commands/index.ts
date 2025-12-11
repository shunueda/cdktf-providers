// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/sqlserver_backup_commands
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudSqlserverBackupCommandsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Backup file type. Full: full backup. FULL_LOG: full backup which needs log increments. FULL_DIFF: full backup which needs differential increments. LOG: log backup. DIFF: differential backup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/sqlserver_backup_commands#backup_file_type DataTencentcloudSqlserverBackupCommands#backup_file_type}
  */
  readonly backupFileType: string;
  /**
  * Database name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/sqlserver_backup_commands#data_base_name DataTencentcloudSqlserverBackupCommands#data_base_name}
  */
  readonly dataBaseName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/sqlserver_backup_commands#id DataTencentcloudSqlserverBackupCommands#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Whether restoration is required. No: not required. Yes: required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/sqlserver_backup_commands#is_recovery DataTencentcloudSqlserverBackupCommands#is_recovery}
  */
  readonly isRecovery: string;
  /**
  * Storage path of backup files. If this parameter is left empty, the default storage path will be D:.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/sqlserver_backup_commands#local_path DataTencentcloudSqlserverBackupCommands#local_path}
  */
  readonly localPath?: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/sqlserver_backup_commands#result_output_file DataTencentcloudSqlserverBackupCommands#result_output_file}
  */
  readonly resultOutputFile?: string;
}
export interface DataTencentcloudSqlserverBackupCommandsListStruct {
}

export function dataTencentcloudSqlserverBackupCommandsListStructToTerraform(struct?: DataTencentcloudSqlserverBackupCommandsListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudSqlserverBackupCommandsListStructToHclTerraform(struct?: DataTencentcloudSqlserverBackupCommandsListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudSqlserverBackupCommandsListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudSqlserverBackupCommandsListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudSqlserverBackupCommandsListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // command - computed: true, optional: false, required: false
  public get command() {
    return this.getStringAttribute('command');
  }

  // request_id - computed: true, optional: false, required: false
  public get requestId() {
    return this.getStringAttribute('request_id');
  }
}

export class DataTencentcloudSqlserverBackupCommandsListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudSqlserverBackupCommandsListStructOutputReference {
    return new DataTencentcloudSqlserverBackupCommandsListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/sqlserver_backup_commands tencentcloud_sqlserver_backup_commands}
*/
export class DataTencentcloudSqlserverBackupCommands extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_sqlserver_backup_commands";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudSqlserverBackupCommands resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudSqlserverBackupCommands to import
  * @param importFromId The id of the existing DataTencentcloudSqlserverBackupCommands that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/sqlserver_backup_commands#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudSqlserverBackupCommands to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_sqlserver_backup_commands", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/sqlserver_backup_commands tencentcloud_sqlserver_backup_commands} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudSqlserverBackupCommandsConfig
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudSqlserverBackupCommandsConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_sqlserver_backup_commands',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.44',
        providerVersionConstraint: '1.82.44'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._backupFileType = config.backupFileType;
    this._dataBaseName = config.dataBaseName;
    this._id = config.id;
    this._isRecovery = config.isRecovery;
    this._localPath = config.localPath;
    this._resultOutputFile = config.resultOutputFile;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backup_file_type - computed: false, optional: false, required: true
  private _backupFileType?: string; 
  public get backupFileType() {
    return this.getStringAttribute('backup_file_type');
  }
  public set backupFileType(value: string) {
    this._backupFileType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backupFileTypeInput() {
    return this._backupFileType;
  }

  // data_base_name - computed: false, optional: false, required: true
  private _dataBaseName?: string; 
  public get dataBaseName() {
    return this.getStringAttribute('data_base_name');
  }
  public set dataBaseName(value: string) {
    this._dataBaseName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataBaseNameInput() {
    return this._dataBaseName;
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

  // is_recovery - computed: false, optional: false, required: true
  private _isRecovery?: string; 
  public get isRecovery() {
    return this.getStringAttribute('is_recovery');
  }
  public set isRecovery(value: string) {
    this._isRecovery = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isRecoveryInput() {
    return this._isRecovery;
  }

  // list - computed: true, optional: false, required: false
  private _list = new DataTencentcloudSqlserverBackupCommandsListStructList(this, "list", false);
  public get list() {
    return this._list;
  }

  // local_path - computed: false, optional: true, required: false
  private _localPath?: string; 
  public get localPath() {
    return this.getStringAttribute('local_path');
  }
  public set localPath(value: string) {
    this._localPath = value;
  }
  public resetLocalPath() {
    this._localPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localPathInput() {
    return this._localPath;
  }

  // result_output_file - computed: false, optional: true, required: false
  private _resultOutputFile?: string; 
  public get resultOutputFile() {
    return this.getStringAttribute('result_output_file');
  }
  public set resultOutputFile(value: string) {
    this._resultOutputFile = value;
  }
  public resetResultOutputFile() {
    this._resultOutputFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultOutputFileInput() {
    return this._resultOutputFile;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backup_file_type: cdktf.stringToTerraform(this._backupFileType),
      data_base_name: cdktf.stringToTerraform(this._dataBaseName),
      id: cdktf.stringToTerraform(this._id),
      is_recovery: cdktf.stringToTerraform(this._isRecovery),
      local_path: cdktf.stringToTerraform(this._localPath),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      backup_file_type: {
        value: cdktf.stringToHclTerraform(this._backupFileType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_base_name: {
        value: cdktf.stringToHclTerraform(this._dataBaseName),
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
      is_recovery: {
        value: cdktf.stringToHclTerraform(this._isRecovery),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      local_path: {
        value: cdktf.stringToHclTerraform(this._localPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      result_output_file: {
        value: cdktf.stringToHclTerraform(this._resultOutputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
