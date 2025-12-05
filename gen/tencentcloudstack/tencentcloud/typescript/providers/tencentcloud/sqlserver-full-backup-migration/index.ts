// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/sqlserver_full_backup_migration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SqlserverFullBackupMigrationConfig extends cdktf.TerraformMetaArguments {
  /**
  * If the UploadType is COS_URL, fill in the URL here. If the UploadType is COS_UPLOAD, fill in the name of the backup file here. Only 1 backup file is supported, but a backup file can involve multiple databases.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/sqlserver_full_backup_migration#backup_files SqlserverFullBackupMigration#backup_files}
  */
  readonly backupFiles?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/sqlserver_full_backup_migration#id SqlserverFullBackupMigration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ID of imported target instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/sqlserver_full_backup_migration#instance_id SqlserverFullBackupMigration#instance_id}
  */
  readonly instanceId: string;
  /**
  * Task name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/sqlserver_full_backup_migration#migration_name SqlserverFullBackupMigration#migration_name}
  */
  readonly migrationName: string;
  /**
  * Migration task restoration type. FULL: full backup restoration, FULL_LOG: full backup and transaction log restoration, FULL_DIFF: full backup and differential backup restoration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/sqlserver_full_backup_migration#recovery_type SqlserverFullBackupMigration#recovery_type}
  */
  readonly recoveryType: string;
  /**
  * Backup upload type. COS_URL: the backup is stored in users Cloud Object Storage, with URL provided. COS_UPLOAD: the backup is stored in the applications Cloud Object Storage and needs to be uploaded by the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/sqlserver_full_backup_migration#upload_type SqlserverFullBackupMigration#upload_type}
  */
  readonly uploadType: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/sqlserver_full_backup_migration tencentcloud_sqlserver_full_backup_migration}
*/
export class SqlserverFullBackupMigration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_sqlserver_full_backup_migration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SqlserverFullBackupMigration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SqlserverFullBackupMigration to import
  * @param importFromId The id of the existing SqlserverFullBackupMigration that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/sqlserver_full_backup_migration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SqlserverFullBackupMigration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_sqlserver_full_backup_migration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/sqlserver_full_backup_migration tencentcloud_sqlserver_full_backup_migration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SqlserverFullBackupMigrationConfig
  */
  public constructor(scope: Construct, id: string, config: SqlserverFullBackupMigrationConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_sqlserver_full_backup_migration',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.42',
        providerVersionConstraint: '1.82.42'
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
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._migrationName = config.migrationName;
    this._recoveryType = config.recoveryType;
    this._uploadType = config.uploadType;
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

  // backup_migration_id - computed: true, optional: false, required: false
  public get backupMigrationId() {
    return this.getStringAttribute('backup_migration_id');
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

  // migration_name - computed: false, optional: false, required: true
  private _migrationName?: string; 
  public get migrationName() {
    return this.getStringAttribute('migration_name');
  }
  public set migrationName(value: string) {
    this._migrationName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get migrationNameInput() {
    return this._migrationName;
  }

  // recovery_type - computed: false, optional: false, required: true
  private _recoveryType?: string; 
  public get recoveryType() {
    return this.getStringAttribute('recovery_type');
  }
  public set recoveryType(value: string) {
    this._recoveryType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryTypeInput() {
    return this._recoveryType;
  }

  // upload_type - computed: false, optional: false, required: true
  private _uploadType?: string; 
  public get uploadType() {
    return this.getStringAttribute('upload_type');
  }
  public set uploadType(value: string) {
    this._uploadType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uploadTypeInput() {
    return this._uploadType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backup_files: cdktf.listMapper(cdktf.stringToTerraform, false)(this._backupFiles),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      migration_name: cdktf.stringToTerraform(this._migrationName),
      recovery_type: cdktf.stringToTerraform(this._recoveryType),
      upload_type: cdktf.stringToTerraform(this._uploadType),
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
      migration_name: {
        value: cdktf.stringToHclTerraform(this._migrationName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      recovery_type: {
        value: cdktf.stringToHclTerraform(this._recoveryType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      upload_type: {
        value: cdktf.stringToHclTerraform(this._uploadType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
