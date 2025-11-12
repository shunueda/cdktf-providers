// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/postgresql_backup_plan_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PostgresqlBackupPlanConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Backup cycle, which means on which days each week the instance will be backed up. The parameter value should be the lowercase names of the days of the week.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/postgresql_backup_plan_config#backup_period PostgresqlBackupPlanConfig#backup_period}
  */
  readonly backupPeriod?: string[];
  /**
  * Backup retention period in days. Value range:7-1830.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/postgresql_backup_plan_config#base_backup_retention_period PostgresqlBackupPlanConfig#base_backup_retention_period}
  */
  readonly baseBackupRetentionPeriod?: number;
  /**
  * instance id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/postgresql_backup_plan_config#db_instance_id PostgresqlBackupPlanConfig#db_instance_id}
  */
  readonly dbInstanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/postgresql_backup_plan_config#id PostgresqlBackupPlanConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The latest time to start a backup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/postgresql_backup_plan_config#max_backup_start_time PostgresqlBackupPlanConfig#max_backup_start_time}
  */
  readonly maxBackupStartTime?: string;
  /**
  * The earliest time to start a backup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/postgresql_backup_plan_config#min_backup_start_time PostgresqlBackupPlanConfig#min_backup_start_time}
  */
  readonly minBackupStartTime?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/postgresql_backup_plan_config tencentcloud_postgresql_backup_plan_config}
*/
export class PostgresqlBackupPlanConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_postgresql_backup_plan_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PostgresqlBackupPlanConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PostgresqlBackupPlanConfig to import
  * @param importFromId The id of the existing PostgresqlBackupPlanConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/postgresql_backup_plan_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PostgresqlBackupPlanConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_postgresql_backup_plan_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/postgresql_backup_plan_config tencentcloud_postgresql_backup_plan_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PostgresqlBackupPlanConfigConfig
  */
  public constructor(scope: Construct, id: string, config: PostgresqlBackupPlanConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_postgresql_backup_plan_config',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.35',
        providerVersionConstraint: '1.82.35'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._backupPeriod = config.backupPeriod;
    this._baseBackupRetentionPeriod = config.baseBackupRetentionPeriod;
    this._dbInstanceId = config.dbInstanceId;
    this._id = config.id;
    this._maxBackupStartTime = config.maxBackupStartTime;
    this._minBackupStartTime = config.minBackupStartTime;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backup_period - computed: false, optional: true, required: false
  private _backupPeriod?: string[]; 
  public get backupPeriod() {
    return cdktf.Fn.tolist(this.getListAttribute('backup_period'));
  }
  public set backupPeriod(value: string[]) {
    this._backupPeriod = value;
  }
  public resetBackupPeriod() {
    this._backupPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupPeriodInput() {
    return this._backupPeriod;
  }

  // base_backup_retention_period - computed: false, optional: true, required: false
  private _baseBackupRetentionPeriod?: number; 
  public get baseBackupRetentionPeriod() {
    return this.getNumberAttribute('base_backup_retention_period');
  }
  public set baseBackupRetentionPeriod(value: number) {
    this._baseBackupRetentionPeriod = value;
  }
  public resetBaseBackupRetentionPeriod() {
    this._baseBackupRetentionPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseBackupRetentionPeriodInput() {
    return this._baseBackupRetentionPeriod;
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

  // max_backup_start_time - computed: false, optional: true, required: false
  private _maxBackupStartTime?: string; 
  public get maxBackupStartTime() {
    return this.getStringAttribute('max_backup_start_time');
  }
  public set maxBackupStartTime(value: string) {
    this._maxBackupStartTime = value;
  }
  public resetMaxBackupStartTime() {
    this._maxBackupStartTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBackupStartTimeInput() {
    return this._maxBackupStartTime;
  }

  // min_backup_start_time - computed: false, optional: true, required: false
  private _minBackupStartTime?: string; 
  public get minBackupStartTime() {
    return this.getStringAttribute('min_backup_start_time');
  }
  public set minBackupStartTime(value: string) {
    this._minBackupStartTime = value;
  }
  public resetMinBackupStartTime() {
    this._minBackupStartTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minBackupStartTimeInput() {
    return this._minBackupStartTime;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backup_period: cdktf.listMapper(cdktf.stringToTerraform, false)(this._backupPeriod),
      base_backup_retention_period: cdktf.numberToTerraform(this._baseBackupRetentionPeriod),
      db_instance_id: cdktf.stringToTerraform(this._dbInstanceId),
      id: cdktf.stringToTerraform(this._id),
      max_backup_start_time: cdktf.stringToTerraform(this._maxBackupStartTime),
      min_backup_start_time: cdktf.stringToTerraform(this._minBackupStartTime),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      backup_period: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._backupPeriod),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      base_backup_retention_period: {
        value: cdktf.numberToHclTerraform(this._baseBackupRetentionPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      max_backup_start_time: {
        value: cdktf.stringToHclTerraform(this._maxBackupStartTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      min_backup_start_time: {
        value: cdktf.stringToHclTerraform(this._minBackupStartTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
