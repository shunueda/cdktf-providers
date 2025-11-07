// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/sqlserver_incre_backup_migration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SqlserverIncreBackupMigrationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Incremental backup file. If the UploadType of a full backup file is COS_URL, fill in URL here. If the UploadType is COS_UPLOAD, fill in the name of the backup file here. Only 1 backup file is supported, but a backup file can involve multiple databases.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/sqlserver_incre_backup_migration#backup_files SqlserverIncreBackupMigration#backup_files}
  */
  readonly backupFiles?: string[];
  /**
  * Backup import task ID, which is returned through the API CreateBackupMigration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/sqlserver_incre_backup_migration#backup_migration_id SqlserverIncreBackupMigration#backup_migration_id}
  */
  readonly backupMigrationId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/sqlserver_incre_backup_migration#id SqlserverIncreBackupMigration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ID of imported target instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/sqlserver_incre_backup_migration#instance_id SqlserverIncreBackupMigration#instance_id}
  */
  readonly instanceId: string;
  /**
  * Whether restoration is required. No: not required. Yes: required. Not required by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/sqlserver_incre_backup_migration#is_recovery SqlserverIncreBackupMigration#is_recovery}
  */
  readonly isRecovery?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/sqlserver_incre_backup_migration tencentcloud_sqlserver_incre_backup_migration}
*/
export class SqlserverIncreBackupMigration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_sqlserver_incre_backup_migration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SqlserverIncreBackupMigration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SqlserverIncreBackupMigration to import
  * @param importFromId The id of the existing SqlserverIncreBackupMigration that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/sqlserver_incre_backup_migration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SqlserverIncreBackupMigration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_sqlserver_incre_backup_migration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/sqlserver_incre_backup_migration tencentcloud_sqlserver_incre_backup_migration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SqlserverIncreBackupMigrationConfig
  */
  public constructor(scope: Construct, id: string, config: SqlserverIncreBackupMigrationConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_sqlserver_incre_backup_migration',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.35'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._backupFiles = config.backupFiles;
    this._backupMigrationId = config.backupMigrationId;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._isRecovery = config.isRecovery;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backup_files - computed: false, optional: true, required: false
  private _backupFiles?: string[]; 
  public get backupFiles() {
    return this.getListAttribute('backup_files');
  }
  public set backupFiles(value: string[]) {
    this._backupFiles = value;
  }
  public resetBackupFiles() {
    this._backupFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupFilesInput() {
    return this._backupFiles;
  }

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

  // incremental_migration_id - computed: true, optional: false, required: false
  public get incrementalMigrationId() {
    return this.getStringAttribute('incremental_migration_id');
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

  // is_recovery - computed: false, optional: true, required: false
  private _isRecovery?: string; 
  public get isRecovery() {
    return this.getStringAttribute('is_recovery');
  }
  public set isRecovery(value: string) {
    this._isRecovery = value;
  }
  public resetIsRecovery() {
    this._isRecovery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isRecoveryInput() {
    return this._isRecovery;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backup_files: cdktf.listMapper(cdktf.stringToTerraform, false)(this._backupFiles),
      backup_migration_id: cdktf.stringToTerraform(this._backupMigrationId),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      is_recovery: cdktf.stringToTerraform(this._isRecovery),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      backup_files: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._backupFiles),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
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
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
