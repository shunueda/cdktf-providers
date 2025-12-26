// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/sqlserver_backup_upload_size
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudSqlserverBackupUploadSizeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Backup import task ID, which is returned through the API CreateBackupMigration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/sqlserver_backup_upload_size#backup_migration_id DataTencentcloudSqlserverBackupUploadSize#backup_migration_id}
  */
  readonly backupMigrationId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/sqlserver_backup_upload_size#id DataTencentcloudSqlserverBackupUploadSize#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Incremental import task ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/sqlserver_backup_upload_size#incremental_migration_id DataTencentcloudSqlserverBackupUploadSize#incremental_migration_id}
  */
  readonly incrementalMigrationId?: string;
  /**
  * ID of imported target instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/sqlserver_backup_upload_size#instance_id DataTencentcloudSqlserverBackupUploadSize#instance_id}
  */
  readonly instanceId: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/sqlserver_backup_upload_size#result_output_file DataTencentcloudSqlserverBackupUploadSize#result_output_file}
  */
  readonly resultOutputFile?: string;
}
export interface DataTencentcloudSqlserverBackupUploadSizeCosUploadBackupFileSet {
}

export function dataTencentcloudSqlserverBackupUploadSizeCosUploadBackupFileSetToTerraform(struct?: DataTencentcloudSqlserverBackupUploadSizeCosUploadBackupFileSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudSqlserverBackupUploadSizeCosUploadBackupFileSetToHclTerraform(struct?: DataTencentcloudSqlserverBackupUploadSizeCosUploadBackupFileSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudSqlserverBackupUploadSizeCosUploadBackupFileSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudSqlserverBackupUploadSizeCosUploadBackupFileSet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudSqlserverBackupUploadSizeCosUploadBackupFileSet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // file_name - computed: true, optional: false, required: false
  public get fileName() {
    return this.getStringAttribute('file_name');
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
  }
}

export class DataTencentcloudSqlserverBackupUploadSizeCosUploadBackupFileSetList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudSqlserverBackupUploadSizeCosUploadBackupFileSetOutputReference {
    return new DataTencentcloudSqlserverBackupUploadSizeCosUploadBackupFileSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/sqlserver_backup_upload_size tencentcloud_sqlserver_backup_upload_size}
*/
export class DataTencentcloudSqlserverBackupUploadSize extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_sqlserver_backup_upload_size";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudSqlserverBackupUploadSize resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudSqlserverBackupUploadSize to import
  * @param importFromId The id of the existing DataTencentcloudSqlserverBackupUploadSize that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/sqlserver_backup_upload_size#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudSqlserverBackupUploadSize to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_sqlserver_backup_upload_size", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/sqlserver_backup_upload_size tencentcloud_sqlserver_backup_upload_size} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudSqlserverBackupUploadSizeConfig
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudSqlserverBackupUploadSizeConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_sqlserver_backup_upload_size',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.49',
        providerVersionConstraint: '1.82.49'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._backupMigrationId = config.backupMigrationId;
    this._id = config.id;
    this._incrementalMigrationId = config.incrementalMigrationId;
    this._instanceId = config.instanceId;
    this._resultOutputFile = config.resultOutputFile;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backup_migration_id - computed: false, optional: false, required: true
  private _backupMigrationId?: string; 
  public get backupMigrationId() {
    return this.getStringAttribute('backup_migration_id');
  }
  public set backupMigrationId(value: string) {
    this._backupMigrationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backupMigrationIdInput() {
    return this._backupMigrationId;
  }

  // cos_upload_backup_file_set - computed: true, optional: false, required: false
  private _cosUploadBackupFileSet = new DataTencentcloudSqlserverBackupUploadSizeCosUploadBackupFileSetList(this, "cos_upload_backup_file_set", false);
  public get cosUploadBackupFileSet() {
    return this._cosUploadBackupFileSet;
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

  // incremental_migration_id - computed: false, optional: true, required: false
  private _incrementalMigrationId?: string; 
  public get incrementalMigrationId() {
    return this.getStringAttribute('incremental_migration_id');
  }
  public set incrementalMigrationId(value: string) {
    this._incrementalMigrationId = value;
  }
  public resetIncrementalMigrationId() {
    this._incrementalMigrationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get incrementalMigrationIdInput() {
    return this._incrementalMigrationId;
  }

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
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
      backup_migration_id: cdktf.stringToTerraform(this._backupMigrationId),
      id: cdktf.stringToTerraform(this._id),
      incremental_migration_id: cdktf.stringToTerraform(this._incrementalMigrationId),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      backup_migration_id: {
        value: cdktf.stringToHclTerraform(this._backupMigrationId),
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
      incremental_migration_id: {
        value: cdktf.stringToHclTerraform(this._incrementalMigrationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
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
