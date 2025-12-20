// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/mysql_backup_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MysqlBackupPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Backup method. Supported values include: `physical` - physical backup; `snapshot` - snapshot backup. Multi node only support `physical`, Single node only support `snapshot`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/mysql_backup_policy#backup_model MysqlBackupPolicy#backup_model}
  */
  readonly backupModel?: string;
  /**
  * Instance backup time, in the format of 'HH:mm-HH:mm'. Time setting interval is four hours. Default to `02:00-06:00`. The following value can be supported: `02:00-06:00`, `06:00-10:00`, `10:00-14:00`, `14:00-18:00`, `18:00-22:00`, and `22:00-02:00`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/mysql_backup_policy#backup_time MysqlBackupPolicy#backup_time}
  */
  readonly backupTime?: string;
  /**
  * Binlog retention time, in days. The minimum value is 7 days and the maximum value is 1830 days. This value cannot be set greater than the backup file retention time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/mysql_backup_policy#binlog_period MysqlBackupPolicy#binlog_period}
  */
  readonly binlogPeriod?: number;
  /**
  * The standard starting number of days for log backup storage. The log backup will be converted when it reaches the standard starting number of days for storage. The minimum is 30 days and must not be greater than the number of days for log backup retention.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/mysql_backup_policy#binlog_standby_days MysqlBackupPolicy#binlog_standby_days}
  */
  readonly binlogStandbyDays?: number;
  /**
  * Whether to enable the log backup standard storage policy, `off` - close, `on` - open, the default is off.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/mysql_backup_policy#enable_binlog_standby MysqlBackupPolicy#enable_binlog_standby}
  */
  readonly enableBinlogStandby?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/mysql_backup_policy#id MysqlBackupPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Instance ID to which policies will be applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/mysql_backup_policy#mysql_id MysqlBackupPolicy#mysql_id}
  */
  readonly mysqlId: string;
  /**
  * The retention time of backup files, in days. The minimum value is 7 days and the maximum value is 1830 days. And default value is `7`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/mysql_backup_policy#retention_period MysqlBackupPolicy#retention_period}
  */
  readonly retentionPeriod?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/mysql_backup_policy tencentcloud_mysql_backup_policy}
*/
export class MysqlBackupPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_mysql_backup_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MysqlBackupPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MysqlBackupPolicy to import
  * @param importFromId The id of the existing MysqlBackupPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/mysql_backup_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MysqlBackupPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_mysql_backup_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/mysql_backup_policy tencentcloud_mysql_backup_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MysqlBackupPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: MysqlBackupPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_mysql_backup_policy',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.47',
        providerVersionConstraint: '1.82.47'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._backupModel = config.backupModel;
    this._backupTime = config.backupTime;
    this._binlogPeriod = config.binlogPeriod;
    this._binlogStandbyDays = config.binlogStandbyDays;
    this._enableBinlogStandby = config.enableBinlogStandby;
    this._id = config.id;
    this._mysqlId = config.mysqlId;
    this._retentionPeriod = config.retentionPeriod;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // backup_time - computed: false, optional: true, required: false
  private _backupTime?: string; 
  public get backupTime() {
    return this.getStringAttribute('backup_time');
  }
  public set backupTime(value: string) {
    this._backupTime = value;
  }
  public resetBackupTime() {
    this._backupTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupTimeInput() {
    return this._backupTime;
  }

  // binlog_period - computed: true, optional: true, required: false
  private _binlogPeriod?: number; 
  public get binlogPeriod() {
    return this.getNumberAttribute('binlog_period');
  }
  public set binlogPeriod(value: number) {
    this._binlogPeriod = value;
  }
  public resetBinlogPeriod() {
    this._binlogPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get binlogPeriodInput() {
    return this._binlogPeriod;
  }

  // binlog_standby_days - computed: true, optional: true, required: false
  private _binlogStandbyDays?: number; 
  public get binlogStandbyDays() {
    return this.getNumberAttribute('binlog_standby_days');
  }
  public set binlogStandbyDays(value: number) {
    this._binlogStandbyDays = value;
  }
  public resetBinlogStandbyDays() {
    this._binlogStandbyDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get binlogStandbyDaysInput() {
    return this._binlogStandbyDays;
  }

  // enable_binlog_standby - computed: false, optional: true, required: false
  private _enableBinlogStandby?: string; 
  public get enableBinlogStandby() {
    return this.getStringAttribute('enable_binlog_standby');
  }
  public set enableBinlogStandby(value: string) {
    this._enableBinlogStandby = value;
  }
  public resetEnableBinlogStandby() {
    this._enableBinlogStandby = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableBinlogStandbyInput() {
    return this._enableBinlogStandby;
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

  // mysql_id - computed: false, optional: false, required: true
  private _mysqlId?: string; 
  public get mysqlId() {
    return this.getStringAttribute('mysql_id');
  }
  public set mysqlId(value: string) {
    this._mysqlId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlIdInput() {
    return this._mysqlId;
  }

  // retention_period - computed: false, optional: true, required: false
  private _retentionPeriod?: number; 
  public get retentionPeriod() {
    return this.getNumberAttribute('retention_period');
  }
  public set retentionPeriod(value: number) {
    this._retentionPeriod = value;
  }
  public resetRetentionPeriod() {
    this._retentionPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionPeriodInput() {
    return this._retentionPeriod;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backup_model: cdktf.stringToTerraform(this._backupModel),
      backup_time: cdktf.stringToTerraform(this._backupTime),
      binlog_period: cdktf.numberToTerraform(this._binlogPeriod),
      binlog_standby_days: cdktf.numberToTerraform(this._binlogStandbyDays),
      enable_binlog_standby: cdktf.stringToTerraform(this._enableBinlogStandby),
      id: cdktf.stringToTerraform(this._id),
      mysql_id: cdktf.stringToTerraform(this._mysqlId),
      retention_period: cdktf.numberToTerraform(this._retentionPeriod),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      backup_model: {
        value: cdktf.stringToHclTerraform(this._backupModel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backup_time: {
        value: cdktf.stringToHclTerraform(this._backupTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      binlog_period: {
        value: cdktf.numberToHclTerraform(this._binlogPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      binlog_standby_days: {
        value: cdktf.numberToHclTerraform(this._binlogStandbyDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enable_binlog_standby: {
        value: cdktf.stringToHclTerraform(this._enableBinlogStandby),
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
      mysql_id: {
        value: cdktf.stringToHclTerraform(this._mysqlId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retention_period: {
        value: cdktf.numberToHclTerraform(this._retentionPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
