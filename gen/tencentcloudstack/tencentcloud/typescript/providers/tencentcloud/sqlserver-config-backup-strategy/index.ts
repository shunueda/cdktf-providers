// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/sqlserver_config_backup_strategy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SqlserverConfigBackupStrategyConfig extends cdktf.TerraformMetaArguments {
  /**
  * The days of the week on which backup will be performed when `BackupType` is weekly. If data backup retention period is less than 7 days, the values will be 1-7, indicating that backup will be performed everyday by default; if data backup retention period is greater than or equal to 7 days, the values will be at least any two days, indicating that backup will be performed at least twice in a week by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/sqlserver_config_backup_strategy#backup_cycle SqlserverConfigBackupStrategy#backup_cycle}
  */
  readonly backupCycle?: number[];
  /**
  * Backup interval in days when the BackupType is daily. The current value can only be 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/sqlserver_config_backup_strategy#backup_day SqlserverConfigBackupStrategy#backup_day}
  */
  readonly backupDay?: number;
  /**
  * Backup mode. Valid values: master_pkg (archive the backup files of the primary node), master_no_pkg (do not archive the backup files of the primary node), slave_pkg (archive the backup files of the replica node), slave_no_pkg (do not archive the backup files of the replica node). Backup files of the replica node are supported only when Always On disaster recovery is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/sqlserver_config_backup_strategy#backup_model SqlserverConfigBackupStrategy#backup_model}
  */
  readonly backupModel?: string;
  /**
  * Data (log) backup retention period. Value range: 3-1830 days, default value: 7 days.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/sqlserver_config_backup_strategy#backup_save_days SqlserverConfigBackupStrategy#backup_save_days}
  */
  readonly backupSaveDays?: number;
  /**
  * Backup time. Value range: an integer from 0 to 23.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/sqlserver_config_backup_strategy#backup_time SqlserverConfigBackupStrategy#backup_time}
  */
  readonly backupTime?: number;
  /**
  * Backup type. Valid values: weekly (when length(BackupDay) <=7 && length(BackupDay) >=2), daily (when length(BackupDay)=1). Default value: daily.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/sqlserver_config_backup_strategy#backup_type SqlserverConfigBackupStrategy#backup_type}
  */
  readonly backupType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/sqlserver_config_backup_strategy#id SqlserverConfigBackupStrategy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Instance ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/sqlserver_config_backup_strategy#instance_id SqlserverConfigBackupStrategy#instance_id}
  */
  readonly instanceId: string;
  /**
  * The number of retained archive backups. Default value: 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/sqlserver_config_backup_strategy#regular_backup_counts SqlserverConfigBackupStrategy#regular_backup_counts}
  */
  readonly regularBackupCounts?: number;
  /**
  * Archive backup status. Valid values: enable (enabled); disable (disabled). Default value: disable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/sqlserver_config_backup_strategy#regular_backup_enable SqlserverConfigBackupStrategy#regular_backup_enable}
  */
  readonly regularBackupEnable?: string;
  /**
  * Archive backup retention days. Value range: 90-3650 days. Default value: 365 days.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/sqlserver_config_backup_strategy#regular_backup_save_days SqlserverConfigBackupStrategy#regular_backup_save_days}
  */
  readonly regularBackupSaveDays?: number;
  /**
  * Archive backup start date in YYYY-MM-DD format, which is the current time by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/sqlserver_config_backup_strategy#regular_backup_start_time SqlserverConfigBackupStrategy#regular_backup_start_time}
  */
  readonly regularBackupStartTime?: string;
  /**
  * Archive backup policy. Valid values: years (yearly); quarters (quarterly); months(monthly); Default value: `months`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/sqlserver_config_backup_strategy#regular_backup_strategy SqlserverConfigBackupStrategy#regular_backup_strategy}
  */
  readonly regularBackupStrategy?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/sqlserver_config_backup_strategy tencentcloud_sqlserver_config_backup_strategy}
*/
export class SqlserverConfigBackupStrategy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_sqlserver_config_backup_strategy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SqlserverConfigBackupStrategy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SqlserverConfigBackupStrategy to import
  * @param importFromId The id of the existing SqlserverConfigBackupStrategy that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/sqlserver_config_backup_strategy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SqlserverConfigBackupStrategy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_sqlserver_config_backup_strategy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/sqlserver_config_backup_strategy tencentcloud_sqlserver_config_backup_strategy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SqlserverConfigBackupStrategyConfig
  */
  public constructor(scope: Construct, id: string, config: SqlserverConfigBackupStrategyConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_sqlserver_config_backup_strategy',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.45',
        providerVersionConstraint: '1.82.45'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._backupCycle = config.backupCycle;
    this._backupDay = config.backupDay;
    this._backupModel = config.backupModel;
    this._backupSaveDays = config.backupSaveDays;
    this._backupTime = config.backupTime;
    this._backupType = config.backupType;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._regularBackupCounts = config.regularBackupCounts;
    this._regularBackupEnable = config.regularBackupEnable;
    this._regularBackupSaveDays = config.regularBackupSaveDays;
    this._regularBackupStartTime = config.regularBackupStartTime;
    this._regularBackupStrategy = config.regularBackupStrategy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backup_cycle - computed: false, optional: true, required: false
  private _backupCycle?: number[]; 
  public get backupCycle() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('backup_cycle')));
  }
  public set backupCycle(value: number[]) {
    this._backupCycle = value;
  }
  public resetBackupCycle() {
    this._backupCycle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupCycleInput() {
    return this._backupCycle;
  }

  // backup_day - computed: false, optional: true, required: false
  private _backupDay?: number; 
  public get backupDay() {
    return this.getNumberAttribute('backup_day');
  }
  public set backupDay(value: number) {
    this._backupDay = value;
  }
  public resetBackupDay() {
    this._backupDay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupDayInput() {
    return this._backupDay;
  }

  // backup_model - computed: false, optional: true, required: false
  private _backupModel?: string; 
  public get backupModel() {
    return this.getStringAttribute('backup_model');
  }
  public set backupModel(value: string) {
    this._backupModel = value;
  }
  public resetBackupModel() {
    this._backupModel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupModelInput() {
    return this._backupModel;
  }

  // backup_save_days - computed: false, optional: true, required: false
  private _backupSaveDays?: number; 
  public get backupSaveDays() {
    return this.getNumberAttribute('backup_save_days');
  }
  public set backupSaveDays(value: number) {
    this._backupSaveDays = value;
  }
  public resetBackupSaveDays() {
    this._backupSaveDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupSaveDaysInput() {
    return this._backupSaveDays;
  }

  // backup_time - computed: false, optional: true, required: false
  private _backupTime?: number; 
  public get backupTime() {
    return this.getNumberAttribute('backup_time');
  }
  public set backupTime(value: number) {
    this._backupTime = value;
  }
  public resetBackupTime() {
    this._backupTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupTimeInput() {
    return this._backupTime;
  }

  // backup_type - computed: false, optional: true, required: false
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

  // regular_backup_counts - computed: false, optional: true, required: false
  private _regularBackupCounts?: number; 
  public get regularBackupCounts() {
    return this.getNumberAttribute('regular_backup_counts');
  }
  public set regularBackupCounts(value: number) {
    this._regularBackupCounts = value;
  }
  public resetRegularBackupCounts() {
    this._regularBackupCounts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regularBackupCountsInput() {
    return this._regularBackupCounts;
  }

  // regular_backup_enable - computed: false, optional: true, required: false
  private _regularBackupEnable?: string; 
  public get regularBackupEnable() {
    return this.getStringAttribute('regular_backup_enable');
  }
  public set regularBackupEnable(value: string) {
    this._regularBackupEnable = value;
  }
  public resetRegularBackupEnable() {
    this._regularBackupEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regularBackupEnableInput() {
    return this._regularBackupEnable;
  }

  // regular_backup_save_days - computed: false, optional: true, required: false
  private _regularBackupSaveDays?: number; 
  public get regularBackupSaveDays() {
    return this.getNumberAttribute('regular_backup_save_days');
  }
  public set regularBackupSaveDays(value: number) {
    this._regularBackupSaveDays = value;
  }
  public resetRegularBackupSaveDays() {
    this._regularBackupSaveDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regularBackupSaveDaysInput() {
    return this._regularBackupSaveDays;
  }

  // regular_backup_start_time - computed: false, optional: true, required: false
  private _regularBackupStartTime?: string; 
  public get regularBackupStartTime() {
    return this.getStringAttribute('regular_backup_start_time');
  }
  public set regularBackupStartTime(value: string) {
    this._regularBackupStartTime = value;
  }
  public resetRegularBackupStartTime() {
    this._regularBackupStartTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regularBackupStartTimeInput() {
    return this._regularBackupStartTime;
  }

  // regular_backup_strategy - computed: false, optional: true, required: false
  private _regularBackupStrategy?: string; 
  public get regularBackupStrategy() {
    return this.getStringAttribute('regular_backup_strategy');
  }
  public set regularBackupStrategy(value: string) {
    this._regularBackupStrategy = value;
  }
  public resetRegularBackupStrategy() {
    this._regularBackupStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regularBackupStrategyInput() {
    return this._regularBackupStrategy;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backup_cycle: cdktf.listMapper(cdktf.numberToTerraform, false)(this._backupCycle),
      backup_day: cdktf.numberToTerraform(this._backupDay),
      backup_model: cdktf.stringToTerraform(this._backupModel),
      backup_save_days: cdktf.numberToTerraform(this._backupSaveDays),
      backup_time: cdktf.numberToTerraform(this._backupTime),
      backup_type: cdktf.stringToTerraform(this._backupType),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      regular_backup_counts: cdktf.numberToTerraform(this._regularBackupCounts),
      regular_backup_enable: cdktf.stringToTerraform(this._regularBackupEnable),
      regular_backup_save_days: cdktf.numberToTerraform(this._regularBackupSaveDays),
      regular_backup_start_time: cdktf.stringToTerraform(this._regularBackupStartTime),
      regular_backup_strategy: cdktf.stringToTerraform(this._regularBackupStrategy),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      backup_cycle: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._backupCycle),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      backup_day: {
        value: cdktf.numberToHclTerraform(this._backupDay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      backup_model: {
        value: cdktf.stringToHclTerraform(this._backupModel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backup_save_days: {
        value: cdktf.numberToHclTerraform(this._backupSaveDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      backup_time: {
        value: cdktf.numberToHclTerraform(this._backupTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      backup_type: {
        value: cdktf.stringToHclTerraform(this._backupType),
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
      regular_backup_counts: {
        value: cdktf.numberToHclTerraform(this._regularBackupCounts),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      regular_backup_enable: {
        value: cdktf.stringToHclTerraform(this._regularBackupEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      regular_backup_save_days: {
        value: cdktf.numberToHclTerraform(this._regularBackupSaveDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      regular_backup_start_time: {
        value: cdktf.stringToHclTerraform(this._regularBackupStartTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      regular_backup_strategy: {
        value: cdktf.stringToHclTerraform(this._regularBackupStrategy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
