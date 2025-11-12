// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/polardb_backuppolicy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolardbBackuppolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/polardb_backuppolicy#backup_log PolardbBackuppolicy#backup_log}
  */
  readonly backupLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/polardb_backuppolicy#backup_policy_mode PolardbBackuppolicy#backup_policy_mode}
  */
  readonly backupPolicyMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/polardb_backuppolicy#backup_retention_period PolardbBackuppolicy#backup_retention_period}
  */
  readonly backupRetentionPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/polardb_backuppolicy#compress_type PolardbBackuppolicy#compress_type}
  */
  readonly compressType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/polardb_backuppolicy#db_instance_id PolardbBackuppolicy#db_instance_id}
  */
  readonly dbInstanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/polardb_backuppolicy#enable_backup_log PolardbBackuppolicy#enable_backup_log}
  */
  readonly enableBackupLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/polardb_backuppolicy#high_space_usage_protection PolardbBackuppolicy#high_space_usage_protection}
  */
  readonly highSpaceUsageProtection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/polardb_backuppolicy#id PolardbBackuppolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/polardb_backuppolicy#local_log_retention_hours PolardbBackuppolicy#local_log_retention_hours}
  */
  readonly localLogRetentionHours?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/polardb_backuppolicy#local_log_retention_space PolardbBackuppolicy#local_log_retention_space}
  */
  readonly localLogRetentionSpace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/polardb_backuppolicy#log_backup_frequency PolardbBackuppolicy#log_backup_frequency}
  */
  readonly logBackupFrequency?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/polardb_backuppolicy#log_backup_local_retention_number PolardbBackuppolicy#log_backup_local_retention_number}
  */
  readonly logBackupLocalRetentionNumber?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/polardb_backuppolicy#log_backup_retention_period PolardbBackuppolicy#log_backup_retention_period}
  */
  readonly logBackupRetentionPeriod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/polardb_backuppolicy#preferred_backup_period PolardbBackuppolicy#preferred_backup_period}
  */
  readonly preferredBackupPeriod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/polardb_backuppolicy#preferred_backup_time PolardbBackuppolicy#preferred_backup_time}
  */
  readonly preferredBackupTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/polardb_backuppolicy#released_keep_policy PolardbBackuppolicy#released_keep_policy}
  */
  readonly releasedKeepPolicy?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/polardb_backuppolicy alibabacloudstack_polardb_backuppolicy}
*/
export class PolardbBackuppolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alibabacloudstack_polardb_backuppolicy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PolardbBackuppolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PolardbBackuppolicy to import
  * @param importFromId The id of the existing PolardbBackuppolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/polardb_backuppolicy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PolardbBackuppolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alibabacloudstack_polardb_backuppolicy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/polardb_backuppolicy alibabacloudstack_polardb_backuppolicy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolardbBackuppolicyConfig
  */
  public constructor(scope: Construct, id: string, config: PolardbBackuppolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'alibabacloudstack_polardb_backuppolicy',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.16.21',
        providerVersionConstraint: '3.16.21'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._backupLog = config.backupLog;
    this._backupPolicyMode = config.backupPolicyMode;
    this._backupRetentionPeriod = config.backupRetentionPeriod;
    this._compressType = config.compressType;
    this._dbInstanceId = config.dbInstanceId;
    this._enableBackupLog = config.enableBackupLog;
    this._highSpaceUsageProtection = config.highSpaceUsageProtection;
    this._id = config.id;
    this._localLogRetentionHours = config.localLogRetentionHours;
    this._localLogRetentionSpace = config.localLogRetentionSpace;
    this._logBackupFrequency = config.logBackupFrequency;
    this._logBackupLocalRetentionNumber = config.logBackupLocalRetentionNumber;
    this._logBackupRetentionPeriod = config.logBackupRetentionPeriod;
    this._preferredBackupPeriod = config.preferredBackupPeriod;
    this._preferredBackupTime = config.preferredBackupTime;
    this._releasedKeepPolicy = config.releasedKeepPolicy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backup_log - computed: false, optional: true, required: false
  private _backupLog?: string; 
  public get backupLog() {
    return this.getStringAttribute('backup_log');
  }
  public set backupLog(value: string) {
    this._backupLog = value;
  }
  public resetBackupLog() {
    this._backupLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupLogInput() {
    return this._backupLog;
  }

  // backup_policy_mode - computed: false, optional: true, required: false
  private _backupPolicyMode?: string; 
  public get backupPolicyMode() {
    return this.getStringAttribute('backup_policy_mode');
  }
  public set backupPolicyMode(value: string) {
    this._backupPolicyMode = value;
  }
  public resetBackupPolicyMode() {
    this._backupPolicyMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupPolicyModeInput() {
    return this._backupPolicyMode;
  }

  // backup_retention_period - computed: false, optional: true, required: false
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

  // compress_type - computed: true, optional: true, required: false
  private _compressType?: string; 
  public get compressType() {
    return this.getStringAttribute('compress_type');
  }
  public set compressType(value: string) {
    this._compressType = value;
  }
  public resetCompressType() {
    this._compressType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressTypeInput() {
    return this._compressType;
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

  // enable_backup_log - computed: true, optional: true, required: false
  private _enableBackupLog?: string; 
  public get enableBackupLog() {
    return this.getStringAttribute('enable_backup_log');
  }
  public set enableBackupLog(value: string) {
    this._enableBackupLog = value;
  }
  public resetEnableBackupLog() {
    this._enableBackupLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableBackupLogInput() {
    return this._enableBackupLog;
  }

  // high_space_usage_protection - computed: true, optional: true, required: false
  private _highSpaceUsageProtection?: string; 
  public get highSpaceUsageProtection() {
    return this.getStringAttribute('high_space_usage_protection');
  }
  public set highSpaceUsageProtection(value: string) {
    this._highSpaceUsageProtection = value;
  }
  public resetHighSpaceUsageProtection() {
    this._highSpaceUsageProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get highSpaceUsageProtectionInput() {
    return this._highSpaceUsageProtection;
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

  // local_log_retention_hours - computed: true, optional: true, required: false
  private _localLogRetentionHours?: string; 
  public get localLogRetentionHours() {
    return this.getStringAttribute('local_log_retention_hours');
  }
  public set localLogRetentionHours(value: string) {
    this._localLogRetentionHours = value;
  }
  public resetLocalLogRetentionHours() {
    this._localLogRetentionHours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localLogRetentionHoursInput() {
    return this._localLogRetentionHours;
  }

  // local_log_retention_space - computed: true, optional: true, required: false
  private _localLogRetentionSpace?: string; 
  public get localLogRetentionSpace() {
    return this.getStringAttribute('local_log_retention_space');
  }
  public set localLogRetentionSpace(value: string) {
    this._localLogRetentionSpace = value;
  }
  public resetLocalLogRetentionSpace() {
    this._localLogRetentionSpace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localLogRetentionSpaceInput() {
    return this._localLogRetentionSpace;
  }

  // log_backup_frequency - computed: false, optional: true, required: false
  private _logBackupFrequency?: string; 
  public get logBackupFrequency() {
    return this.getStringAttribute('log_backup_frequency');
  }
  public set logBackupFrequency(value: string) {
    this._logBackupFrequency = value;
  }
  public resetLogBackupFrequency() {
    this._logBackupFrequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logBackupFrequencyInput() {
    return this._logBackupFrequency;
  }

  // log_backup_local_retention_number - computed: true, optional: true, required: false
  private _logBackupLocalRetentionNumber?: number; 
  public get logBackupLocalRetentionNumber() {
    return this.getNumberAttribute('log_backup_local_retention_number');
  }
  public set logBackupLocalRetentionNumber(value: number) {
    this._logBackupLocalRetentionNumber = value;
  }
  public resetLogBackupLocalRetentionNumber() {
    this._logBackupLocalRetentionNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logBackupLocalRetentionNumberInput() {
    return this._logBackupLocalRetentionNumber;
  }

  // log_backup_retention_period - computed: false, optional: true, required: false
  private _logBackupRetentionPeriod?: string; 
  public get logBackupRetentionPeriod() {
    return this.getStringAttribute('log_backup_retention_period');
  }
  public set logBackupRetentionPeriod(value: string) {
    this._logBackupRetentionPeriod = value;
  }
  public resetLogBackupRetentionPeriod() {
    this._logBackupRetentionPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logBackupRetentionPeriodInput() {
    return this._logBackupRetentionPeriod;
  }

  // preferred_backup_period - computed: false, optional: true, required: false
  private _preferredBackupPeriod?: string; 
  public get preferredBackupPeriod() {
    return this.getStringAttribute('preferred_backup_period');
  }
  public set preferredBackupPeriod(value: string) {
    this._preferredBackupPeriod = value;
  }
  public resetPreferredBackupPeriod() {
    this._preferredBackupPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredBackupPeriodInput() {
    return this._preferredBackupPeriod;
  }

  // preferred_backup_time - computed: false, optional: true, required: false
  private _preferredBackupTime?: string; 
  public get preferredBackupTime() {
    return this.getStringAttribute('preferred_backup_time');
  }
  public set preferredBackupTime(value: string) {
    this._preferredBackupTime = value;
  }
  public resetPreferredBackupTime() {
    this._preferredBackupTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredBackupTimeInput() {
    return this._preferredBackupTime;
  }

  // released_keep_policy - computed: true, optional: true, required: false
  private _releasedKeepPolicy?: string; 
  public get releasedKeepPolicy() {
    return this.getStringAttribute('released_keep_policy');
  }
  public set releasedKeepPolicy(value: string) {
    this._releasedKeepPolicy = value;
  }
  public resetReleasedKeepPolicy() {
    this._releasedKeepPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get releasedKeepPolicyInput() {
    return this._releasedKeepPolicy;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backup_log: cdktf.stringToTerraform(this._backupLog),
      backup_policy_mode: cdktf.stringToTerraform(this._backupPolicyMode),
      backup_retention_period: cdktf.numberToTerraform(this._backupRetentionPeriod),
      compress_type: cdktf.stringToTerraform(this._compressType),
      db_instance_id: cdktf.stringToTerraform(this._dbInstanceId),
      enable_backup_log: cdktf.stringToTerraform(this._enableBackupLog),
      high_space_usage_protection: cdktf.stringToTerraform(this._highSpaceUsageProtection),
      id: cdktf.stringToTerraform(this._id),
      local_log_retention_hours: cdktf.stringToTerraform(this._localLogRetentionHours),
      local_log_retention_space: cdktf.stringToTerraform(this._localLogRetentionSpace),
      log_backup_frequency: cdktf.stringToTerraform(this._logBackupFrequency),
      log_backup_local_retention_number: cdktf.numberToTerraform(this._logBackupLocalRetentionNumber),
      log_backup_retention_period: cdktf.stringToTerraform(this._logBackupRetentionPeriod),
      preferred_backup_period: cdktf.stringToTerraform(this._preferredBackupPeriod),
      preferred_backup_time: cdktf.stringToTerraform(this._preferredBackupTime),
      released_keep_policy: cdktf.stringToTerraform(this._releasedKeepPolicy),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      backup_log: {
        value: cdktf.stringToHclTerraform(this._backupLog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backup_policy_mode: {
        value: cdktf.stringToHclTerraform(this._backupPolicyMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backup_retention_period: {
        value: cdktf.numberToHclTerraform(this._backupRetentionPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      compress_type: {
        value: cdktf.stringToHclTerraform(this._compressType),
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
      enable_backup_log: {
        value: cdktf.stringToHclTerraform(this._enableBackupLog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      high_space_usage_protection: {
        value: cdktf.stringToHclTerraform(this._highSpaceUsageProtection),
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
      local_log_retention_hours: {
        value: cdktf.stringToHclTerraform(this._localLogRetentionHours),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      local_log_retention_space: {
        value: cdktf.stringToHclTerraform(this._localLogRetentionSpace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_backup_frequency: {
        value: cdktf.stringToHclTerraform(this._logBackupFrequency),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_backup_local_retention_number: {
        value: cdktf.numberToHclTerraform(this._logBackupLocalRetentionNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      log_backup_retention_period: {
        value: cdktf.stringToHclTerraform(this._logBackupRetentionPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      preferred_backup_period: {
        value: cdktf.stringToHclTerraform(this._preferredBackupPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      preferred_backup_time: {
        value: cdktf.stringToHclTerraform(this._preferredBackupTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      released_keep_policy: {
        value: cdktf.stringToHclTerraform(this._releasedKeepPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
