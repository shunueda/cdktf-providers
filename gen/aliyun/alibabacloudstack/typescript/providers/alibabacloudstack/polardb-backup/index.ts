// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/polardb_backup
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolardbBackupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/polardb_backup#backup_method PolardbBackup#backup_method}
  */
  readonly backupMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/polardb_backup#backup_strategy PolardbBackup#backup_strategy}
  */
  readonly backupStrategy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/polardb_backup#backup_type PolardbBackup#backup_type}
  */
  readonly backupType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/polardb_backup#db_instance_id PolardbBackup#db_instance_id}
  */
  readonly dbInstanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/polardb_backup#id PolardbBackup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/polardb_backup alibabacloudstack_polardb_backup}
*/
export class PolardbBackup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alibabacloudstack_polardb_backup";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PolardbBackup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PolardbBackup to import
  * @param importFromId The id of the existing PolardbBackup that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/polardb_backup#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PolardbBackup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alibabacloudstack_polardb_backup", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/polardb_backup alibabacloudstack_polardb_backup} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolardbBackupConfig
  */
  public constructor(scope: Construct, id: string, config: PolardbBackupConfig) {
    super(scope, id, {
      terraformResourceType: 'alibabacloudstack_polardb_backup',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.19'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._backupMethod = config.backupMethod;
    this._backupStrategy = config.backupStrategy;
    this._backupType = config.backupType;
    this._dbInstanceId = config.dbInstanceId;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backup_db_names - computed: true, optional: false, required: false
  public get backupDbNames() {
    return this.getStringAttribute('backup_db_names');
  }

  // backup_end_time - computed: true, optional: false, required: false
  public get backupEndTime() {
    return this.getStringAttribute('backup_end_time');
  }

  // backup_id - computed: true, optional: false, required: false
  public get backupId() {
    return this.getNumberAttribute('backup_id');
  }

  // backup_location - computed: true, optional: false, required: false
  public get backupLocation() {
    return this.getStringAttribute('backup_location');
  }

  // backup_method - computed: true, optional: true, required: false
  private _backupMethod?: string; 
  public get backupMethod() {
    return this.getStringAttribute('backup_method');
  }
  public set backupMethod(value: string) {
    this._backupMethod = value;
  }
  public resetBackupMethod() {
    this._backupMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupMethodInput() {
    return this._backupMethod;
  }

  // backup_mode - computed: true, optional: false, required: false
  public get backupMode() {
    return this.getStringAttribute('backup_mode');
  }

  // backup_scale - computed: true, optional: false, required: false
  public get backupScale() {
    return this.getStringAttribute('backup_scale');
  }

  // backup_size - computed: true, optional: false, required: false
  public get backupSize() {
    return this.getNumberAttribute('backup_size');
  }

  // backup_start_time - computed: true, optional: false, required: false
  public get backupStartTime() {
    return this.getStringAttribute('backup_start_time');
  }

  // backup_status - computed: true, optional: false, required: false
  public get backupStatus() {
    return this.getStringAttribute('backup_status');
  }

  // backup_strategy - computed: true, optional: true, required: false
  private _backupStrategy?: string; 
  public get backupStrategy() {
    return this.getStringAttribute('backup_strategy');
  }
  public set backupStrategy(value: string) {
    this._backupStrategy = value;
  }
  public resetBackupStrategy() {
    this._backupStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupStrategyInput() {
    return this._backupStrategy;
  }

  // backup_type - computed: true, optional: true, required: false
  private _backupType?: string; 
  public get backupType() {
    return this.getStringAttribute('backup_type');
  }
  public set backupType(value: string) {
    this._backupType = value;
  }
  public resetBackupType() {
    this._backupType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupTypeInput() {
    return this._backupType;
  }

  // db_instance_id - computed: false, optional: false, required: true
  private _dbInstanceId?: string; 
  public get dbInstanceId() {
    return this.getStringAttribute('db_instance_id');
  }
  public set dbInstanceId(value: string) {
    this._dbInstanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbInstanceIdInput() {
    return this._dbInstanceId;
  }

  // host_instance_id - computed: true, optional: false, required: false
  public get hostInstanceId() {
    return this.getNumberAttribute('host_instance_id');
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

  // meta_status - computed: true, optional: false, required: false
  public get metaStatus() {
    return this.getStringAttribute('meta_status');
  }

  // slave_status - computed: true, optional: false, required: false
  public get slaveStatus() {
    return this.getStringAttribute('slave_status');
  }

  // store_status - computed: true, optional: false, required: false
  public get storeStatus() {
    return this.getStringAttribute('store_status');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backup_method: cdktf.stringToTerraform(this._backupMethod),
      backup_strategy: cdktf.stringToTerraform(this._backupStrategy),
      backup_type: cdktf.stringToTerraform(this._backupType),
      db_instance_id: cdktf.stringToTerraform(this._dbInstanceId),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      backup_method: {
        value: cdktf.stringToHclTerraform(this._backupMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backup_strategy: {
        value: cdktf.stringToHclTerraform(this._backupStrategy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backup_type: {
        value: cdktf.stringToHclTerraform(this._backupType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_instance_id: {
        value: cdktf.stringToHclTerraform(this._dbInstanceId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
