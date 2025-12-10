// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/sqlserver_start_backup_full_migration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SqlserverStartBackupFullMigrationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Backup import task ID, returned by the CreateBackupMigration interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/sqlserver_start_backup_full_migration#backup_migration_id SqlserverStartBackupFullMigration#backup_migration_id}
  */
  readonly backupMigrationId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/sqlserver_start_backup_full_migration#id SqlserverStartBackupFullMigration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ID of imported target instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/sqlserver_start_backup_full_migration#instance_id SqlserverStartBackupFullMigration#instance_id}
  */
  readonly instanceId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/sqlserver_start_backup_full_migration tencentcloud_sqlserver_start_backup_full_migration}
*/
export class SqlserverStartBackupFullMigration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_sqlserver_start_backup_full_migration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SqlserverStartBackupFullMigration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SqlserverStartBackupFullMigration to import
  * @param importFromId The id of the existing SqlserverStartBackupFullMigration that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/sqlserver_start_backup_full_migration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SqlserverStartBackupFullMigration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_sqlserver_start_backup_full_migration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/sqlserver_start_backup_full_migration tencentcloud_sqlserver_start_backup_full_migration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SqlserverStartBackupFullMigrationConfig
  */
  public constructor(scope: Construct, id: string, config: SqlserverStartBackupFullMigrationConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_sqlserver_start_backup_full_migration',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.43',
        providerVersionConstraint: '1.82.43'
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
    this._instanceId = config.instanceId;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backup_migration_id: cdktf.stringToTerraform(this._backupMigrationId),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
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
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
