// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/mongodb_instance_backup_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MongodbInstanceBackupRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Which days of the week to backup, 0-6, comma separated. Only effective for advanced backup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/mongodb_instance_backup_rule#active_weekdays MongodbInstanceBackupRule#active_weekdays}
  */
  readonly activeWeekdays?: string;
  /**
  * Alert threshold. Range: 50-300.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/mongodb_instance_backup_rule#alarm_water_level MongodbInstanceBackupRule#alarm_water_level}
  */
  readonly alarmWaterLevel?: number;
  /**
  * Automatic backup frequency, for internal display, default value is 24h.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/mongodb_instance_backup_rule#backup_frequency MongodbInstanceBackupRule#backup_frequency}
  */
  readonly backupFrequency?: number;
  /**
  * Set automatic backup method. Valid values:
  * - 0: Logical backup;
  * - 1: Physical backup;
  * - 3: Snapshot backup (supported only in cloud disk version).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/mongodb_instance_backup_rule#backup_method MongodbInstanceBackupRule#backup_method}
  */
  readonly backupMethod: number;
  /**
  * Specify the number of days to save backup data. The default is 7 days, and the support settings are 7, 30, 90, 180, 365.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/mongodb_instance_backup_rule#backup_retention_period MongodbInstanceBackupRule#backup_retention_period}
  */
  readonly backupRetentionPeriod?: number;
  /**
  * Set the start time for automatic backup. The value range is: [0,23]. For example, setting this parameter to 2 means that backup starts at 02:00.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/mongodb_instance_backup_rule#backup_time MongodbInstanceBackupRule#backup_time}
  */
  readonly backupTime: number;
  /**
  * Backup version. Old version backup is 0, advanced backup is 1. Set this value to 1 when enabling advanced backup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/mongodb_instance_backup_rule#backup_version MongodbInstanceBackupRule#backup_version}
  */
  readonly backupVersion?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/mongodb_instance_backup_rule#id MongodbInstanceBackupRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Instance ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/mongodb_instance_backup_rule#instance_id MongodbInstanceBackupRule#instance_id}
  */
  readonly instanceId: string;
  /**
  * Which days to retain long-term, week 0-6, month 1-31, comma separated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/mongodb_instance_backup_rule#long_term_active_days MongodbInstanceBackupRule#long_term_active_days}
  */
  readonly longTermActiveDays?: string;
  /**
  * How many days to retain long-term backups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/mongodb_instance_backup_rule#long_term_expired_days MongodbInstanceBackupRule#long_term_expired_days}
  */
  readonly longTermExpiredDays?: number;
  /**
  * Long-term retention cycle, weekly, monthly, empty means not enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/mongodb_instance_backup_rule#long_term_unit MongodbInstanceBackupRule#long_term_unit}
  */
  readonly longTermUnit?: string;
  /**
  * Set whether to send failure alerts when automatic backup errors occur.
  * - true: Send.
  * - false: Do not send.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/mongodb_instance_backup_rule#notify MongodbInstanceBackupRule#notify}
  */
  readonly notify?: boolean | cdktf.IResolvable;
  /**
  * How many days to retain incremental backups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/mongodb_instance_backup_rule#oplog_expired_days MongodbInstanceBackupRule#oplog_expired_days}
  */
  readonly oplogExpiredDays?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/mongodb_instance_backup_rule tencentcloud_mongodb_instance_backup_rule}
*/
export class MongodbInstanceBackupRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_mongodb_instance_backup_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MongodbInstanceBackupRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MongodbInstanceBackupRule to import
  * @param importFromId The id of the existing MongodbInstanceBackupRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/mongodb_instance_backup_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MongodbInstanceBackupRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_mongodb_instance_backup_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/mongodb_instance_backup_rule tencentcloud_mongodb_instance_backup_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MongodbInstanceBackupRuleConfig
  */
  public constructor(scope: Construct, id: string, config: MongodbInstanceBackupRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_mongodb_instance_backup_rule',
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
    this._activeWeekdays = config.activeWeekdays;
    this._alarmWaterLevel = config.alarmWaterLevel;
    this._backupFrequency = config.backupFrequency;
    this._backupMethod = config.backupMethod;
    this._backupRetentionPeriod = config.backupRetentionPeriod;
    this._backupTime = config.backupTime;
    this._backupVersion = config.backupVersion;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._longTermActiveDays = config.longTermActiveDays;
    this._longTermExpiredDays = config.longTermExpiredDays;
    this._longTermUnit = config.longTermUnit;
    this._notify = config.notify;
    this._oplogExpiredDays = config.oplogExpiredDays;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active_weekdays - computed: false, optional: true, required: false
  private _activeWeekdays?: string; 
  public get activeWeekdays() {
    return this.getStringAttribute('active_weekdays');
  }
  public set activeWeekdays(value: string) {
    this._activeWeekdays = value;
  }
  public resetActiveWeekdays() {
    this._activeWeekdays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeWeekdaysInput() {
    return this._activeWeekdays;
  }

  // alarm_water_level - computed: false, optional: true, required: false
  private _alarmWaterLevel?: number; 
  public get alarmWaterLevel() {
    return this.getNumberAttribute('alarm_water_level');
  }
  public set alarmWaterLevel(value: number) {
    this._alarmWaterLevel = value;
  }
  public resetAlarmWaterLevel() {
    this._alarmWaterLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmWaterLevelInput() {
    return this._alarmWaterLevel;
  }

  // backup_frequency - computed: false, optional: true, required: false
  private _backupFrequency?: number; 
  public get backupFrequency() {
    return this.getNumberAttribute('backup_frequency');
  }
  public set backupFrequency(value: number) {
    this._backupFrequency = value;
  }
  public resetBackupFrequency() {
    this._backupFrequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupFrequencyInput() {
    return this._backupFrequency;
  }

  // backup_method - computed: false, optional: false, required: true
  private _backupMethod?: number; 
  public get backupMethod() {
    return this.getNumberAttribute('backup_method');
  }
  public set backupMethod(value: number) {
    this._backupMethod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backupMethodInput() {
    return this._backupMethod;
  }

  // backup_retention_period - computed: true, optional: true, required: false
  private _backupRetentionPeriod?: number; 
  public get backupRetentionPeriod() {
    return this.getNumberAttribute('backup_retention_period');
  }
  public set backupRetentionPeriod(value: number) {
    this._backupRetentionPeriod = value;
  }
  public resetBackupRetentionPeriod() {
    this._backupRetentionPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupRetentionPeriodInput() {
    return this._backupRetentionPeriod;
  }

  // backup_time - computed: false, optional: false, required: true
  private _backupTime?: number; 
  public get backupTime() {
    return this.getNumberAttribute('backup_time');
  }
  public set backupTime(value: number) {
    this._backupTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backupTimeInput() {
    return this._backupTime;
  }

  // backup_version - computed: false, optional: true, required: false
  private _backupVersion?: number; 
  public get backupVersion() {
    return this.getNumberAttribute('backup_version');
  }
  public set backupVersion(value: number) {
    this._backupVersion = value;
  }
  public resetBackupVersion() {
    this._backupVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupVersionInput() {
    return this._backupVersion;
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

  // long_term_active_days - computed: false, optional: true, required: false
  private _longTermActiveDays?: string; 
  public get longTermActiveDays() {
    return this.getStringAttribute('long_term_active_days');
  }
  public set longTermActiveDays(value: string) {
    this._longTermActiveDays = value;
  }
  public resetLongTermActiveDays() {
    this._longTermActiveDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get longTermActiveDaysInput() {
    return this._longTermActiveDays;
  }

  // long_term_expired_days - computed: false, optional: true, required: false
  private _longTermExpiredDays?: number; 
  public get longTermExpiredDays() {
    return this.getNumberAttribute('long_term_expired_days');
  }
  public set longTermExpiredDays(value: number) {
    this._longTermExpiredDays = value;
  }
  public resetLongTermExpiredDays() {
    this._longTermExpiredDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get longTermExpiredDaysInput() {
    return this._longTermExpiredDays;
  }

  // long_term_unit - computed: false, optional: true, required: false
  private _longTermUnit?: string; 
  public get longTermUnit() {
    return this.getStringAttribute('long_term_unit');
  }
  public set longTermUnit(value: string) {
    this._longTermUnit = value;
  }
  public resetLongTermUnit() {
    this._longTermUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get longTermUnitInput() {
    return this._longTermUnit;
  }

  // notify - computed: false, optional: true, required: false
  private _notify?: boolean | cdktf.IResolvable; 
  public get notify() {
    return this.getBooleanAttribute('notify');
  }
  public set notify(value: boolean | cdktf.IResolvable) {
    this._notify = value;
  }
  public resetNotify() {
    this._notify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyInput() {
    return this._notify;
  }

  // oplog_expired_days - computed: false, optional: true, required: false
  private _oplogExpiredDays?: number; 
  public get oplogExpiredDays() {
    return this.getNumberAttribute('oplog_expired_days');
  }
  public set oplogExpiredDays(value: number) {
    this._oplogExpiredDays = value;
  }
  public resetOplogExpiredDays() {
    this._oplogExpiredDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oplogExpiredDaysInput() {
    return this._oplogExpiredDays;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      active_weekdays: cdktf.stringToTerraform(this._activeWeekdays),
      alarm_water_level: cdktf.numberToTerraform(this._alarmWaterLevel),
      backup_frequency: cdktf.numberToTerraform(this._backupFrequency),
      backup_method: cdktf.numberToTerraform(this._backupMethod),
      backup_retention_period: cdktf.numberToTerraform(this._backupRetentionPeriod),
      backup_time: cdktf.numberToTerraform(this._backupTime),
      backup_version: cdktf.numberToTerraform(this._backupVersion),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      long_term_active_days: cdktf.stringToTerraform(this._longTermActiveDays),
      long_term_expired_days: cdktf.numberToTerraform(this._longTermExpiredDays),
      long_term_unit: cdktf.stringToTerraform(this._longTermUnit),
      notify: cdktf.booleanToTerraform(this._notify),
      oplog_expired_days: cdktf.numberToTerraform(this._oplogExpiredDays),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      active_weekdays: {
        value: cdktf.stringToHclTerraform(this._activeWeekdays),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alarm_water_level: {
        value: cdktf.numberToHclTerraform(this._alarmWaterLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      backup_frequency: {
        value: cdktf.numberToHclTerraform(this._backupFrequency),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      backup_method: {
        value: cdktf.numberToHclTerraform(this._backupMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      backup_retention_period: {
        value: cdktf.numberToHclTerraform(this._backupRetentionPeriod),
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
      backup_version: {
        value: cdktf.numberToHclTerraform(this._backupVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      long_term_active_days: {
        value: cdktf.stringToHclTerraform(this._longTermActiveDays),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      long_term_expired_days: {
        value: cdktf.numberToHclTerraform(this._longTermExpiredDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      long_term_unit: {
        value: cdktf.stringToHclTerraform(this._longTermUnit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notify: {
        value: cdktf.booleanToHclTerraform(this._notify),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      oplog_expired_days: {
        value: cdktf.numberToHclTerraform(this._oplogExpiredDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
