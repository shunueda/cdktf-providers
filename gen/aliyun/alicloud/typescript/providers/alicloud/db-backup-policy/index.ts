// https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/db_backup_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DbBackupPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/db_backup_policy#archive_backup_keep_count DbBackupPolicy#archive_backup_keep_count}
  */
  readonly archiveBackupKeepCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/db_backup_policy#archive_backup_keep_policy DbBackupPolicy#archive_backup_keep_policy}
  */
  readonly archiveBackupKeepPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/db_backup_policy#archive_backup_retention_period DbBackupPolicy#archive_backup_retention_period}
  */
  readonly archiveBackupRetentionPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/db_backup_policy#backup_interval DbBackupPolicy#backup_interval}
  */
  readonly backupInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/db_backup_policy#backup_method DbBackupPolicy#backup_method}
  */
  readonly backupMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/db_backup_policy#backup_period DbBackupPolicy#backup_period}
  */
  readonly backupPeriod?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/db_backup_policy#backup_priority DbBackupPolicy#backup_priority}
  */
  readonly backupPriority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/db_backup_policy#backup_retention_period DbBackupPolicy#backup_retention_period}
  */
  readonly backupRetentionPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/db_backup_policy#backup_time DbBackupPolicy#backup_time}
  */
  readonly backupTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/db_backup_policy#category DbBackupPolicy#category}
  */
  readonly category?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/db_backup_policy#compress_type DbBackupPolicy#compress_type}
  */
  readonly compressType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/db_backup_policy#enable_backup_log DbBackupPolicy#enable_backup_log}
  */
  readonly enableBackupLog?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/db_backup_policy#enable_increment_data_backup DbBackupPolicy#enable_increment_data_backup}
  */
  readonly enableIncrementDataBackup?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/db_backup_policy#high_space_usage_protection DbBackupPolicy#high_space_usage_protection}
  */
  readonly highSpaceUsageProtection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/db_backup_policy#id DbBackupPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/db_backup_policy#instance_id DbBackupPolicy#instance_id}
  */
  readonly instanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/db_backup_policy#local_log_retention_hours DbBackupPolicy#local_log_retention_hours}
  */
  readonly localLogRetentionHours?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/db_backup_policy#local_log_retention_space DbBackupPolicy#local_log_retention_space}
  */
  readonly localLogRetentionSpace?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/db_backup_policy#log_backup DbBackupPolicy#log_backup}
  */
  readonly logBackup?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/db_backup_policy#log_backup_frequency DbBackupPolicy#log_backup_frequency}
  */
  readonly logBackupFrequency?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/db_backup_policy#log_backup_local_retention_number DbBackupPolicy#log_backup_local_retention_number}
  */
  readonly logBackupLocalRetentionNumber?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/db_backup_policy#log_backup_retention_period DbBackupPolicy#log_backup_retention_period}
  */
  readonly logBackupRetentionPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/db_backup_policy#log_retention_period DbBackupPolicy#log_retention_period}
  */
  readonly logRetentionPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/db_backup_policy#preferred_backup_period DbBackupPolicy#preferred_backup_period}
  */
  readonly preferredBackupPeriod?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/db_backup_policy#preferred_backup_time DbBackupPolicy#preferred_backup_time}
  */
  readonly preferredBackupTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/db_backup_policy#released_keep_policy DbBackupPolicy#released_keep_policy}
  */
  readonly releasedKeepPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/db_backup_policy#retention_period DbBackupPolicy#retention_period}
  */
  readonly retentionPeriod?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/db_backup_policy alicloud_db_backup_policy}
*/
export class DbBackupPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_db_backup_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DbBackupPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DbBackupPolicy to import
  * @param importFromId The id of the existing DbBackupPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/db_backup_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DbBackupPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_db_backup_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/db_backup_policy alicloud_db_backup_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DbBackupPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DbBackupPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_db_backup_policy',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.265.0',
        providerVersionConstraint: '1.265.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._archiveBackupKeepCount = config.archiveBackupKeepCount;
    this._archiveBackupKeepPolicy = config.archiveBackupKeepPolicy;
    this._archiveBackupRetentionPeriod = config.archiveBackupRetentionPeriod;
    this._backupInterval = config.backupInterval;
    this._backupMethod = config.backupMethod;
    this._backupPeriod = config.backupPeriod;
    this._backupPriority = config.backupPriority;
    this._backupRetentionPeriod = config.backupRetentionPeriod;
    this._backupTime = config.backupTime;
    this._category = config.category;
    this._compressType = config.compressType;
    this._enableBackupLog = config.enableBackupLog;
    this._enableIncrementDataBackup = config.enableIncrementDataBackup;
    this._highSpaceUsageProtection = config.highSpaceUsageProtection;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._localLogRetentionHours = config.localLogRetentionHours;
    this._localLogRetentionSpace = config.localLogRetentionSpace;
    this._logBackup = config.logBackup;
    this._logBackupFrequency = config.logBackupFrequency;
    this._logBackupLocalRetentionNumber = config.logBackupLocalRetentionNumber;
    this._logBackupRetentionPeriod = config.logBackupRetentionPeriod;
    this._logRetentionPeriod = config.logRetentionPeriod;
    this._preferredBackupPeriod = config.preferredBackupPeriod;
    this._preferredBackupTime = config.preferredBackupTime;
    this._releasedKeepPolicy = config.releasedKeepPolicy;
    this._retentionPeriod = config.retentionPeriod;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // archive_backup_keep_count - computed: true, optional: true, required: false
  private _archiveBackupKeepCount?: number; 
  public get archiveBackupKeepCount() {
    return this.getNumberAttribute('archive_backup_keep_count');
  }
  public set archiveBackupKeepCount(value: number) {
    this._archiveBackupKeepCount = value;
  }
  public resetArchiveBackupKeepCount() {
    this._archiveBackupKeepCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archiveBackupKeepCountInput() {
    return this._archiveBackupKeepCount;
  }

  // archive_backup_keep_policy - computed: true, optional: true, required: false
  private _archiveBackupKeepPolicy?: string; 
  public get archiveBackupKeepPolicy() {
    return this.getStringAttribute('archive_backup_keep_policy');
  }
  public set archiveBackupKeepPolicy(value: string) {
    this._archiveBackupKeepPolicy = value;
  }
  public resetArchiveBackupKeepPolicy() {
    this._archiveBackupKeepPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archiveBackupKeepPolicyInput() {
    return this._archiveBackupKeepPolicy;
  }

  // archive_backup_retention_period - computed: true, optional: true, required: false
  private _archiveBackupRetentionPeriod?: number; 
  public get archiveBackupRetentionPeriod() {
    return this.getNumberAttribute('archive_backup_retention_period');
  }
  public set archiveBackupRetentionPeriod(value: number) {
    this._archiveBackupRetentionPeriod = value;
  }
  public resetArchiveBackupRetentionPeriod() {
    this._archiveBackupRetentionPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archiveBackupRetentionPeriodInput() {
    return this._archiveBackupRetentionPeriod;
  }

  // backup_interval - computed: true, optional: true, required: false
  private _backupInterval?: string; 
  public get backupInterval() {
    return this.getStringAttribute('backup_interval');
  }
  public set backupInterval(value: string) {
    this._backupInterval = value;
  }
  public resetBackupInterval() {
    this._backupInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupIntervalInput() {
    return this._backupInterval;
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

  // backup_period - computed: true, optional: true, required: false
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

  // backup_priority - computed: false, optional: true, required: false
  private _backupPriority?: number; 
  public get backupPriority() {
    return this.getNumberAttribute('backup_priority');
  }
  public set backupPriority(value: number) {
    this._backupPriority = value;
  }
  public resetBackupPriority() {
    this._backupPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupPriorityInput() {
    return this._backupPriority;
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

  // backup_time - computed: true, optional: true, required: false
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

  // category - computed: true, optional: true, required: false
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  public resetCategory() {
    this._category = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
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

  // enable_backup_log - computed: true, optional: true, required: false
  private _enableBackupLog?: boolean | cdktf.IResolvable; 
  public get enableBackupLog() {
    return this.getBooleanAttribute('enable_backup_log');
  }
  public set enableBackupLog(value: boolean | cdktf.IResolvable) {
    this._enableBackupLog = value;
  }
  public resetEnableBackupLog() {
    this._enableBackupLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableBackupLogInput() {
    return this._enableBackupLog;
  }

  // enable_increment_data_backup - computed: true, optional: true, required: false
  private _enableIncrementDataBackup?: boolean | cdktf.IResolvable; 
  public get enableIncrementDataBackup() {
    return this.getBooleanAttribute('enable_increment_data_backup');
  }
  public set enableIncrementDataBackup(value: boolean | cdktf.IResolvable) {
    this._enableIncrementDataBackup = value;
  }
  public resetEnableIncrementDataBackup() {
    this._enableIncrementDataBackup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableIncrementDataBackupInput() {
    return this._enableIncrementDataBackup;
  }

  // high_space_usage_protection - computed: false, optional: true, required: false
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

  // local_log_retention_hours - computed: true, optional: true, required: false
  private _localLogRetentionHours?: number; 
  public get localLogRetentionHours() {
    return this.getNumberAttribute('local_log_retention_hours');
  }
  public set localLogRetentionHours(value: number) {
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
  private _localLogRetentionSpace?: number; 
  public get localLogRetentionSpace() {
    return this.getNumberAttribute('local_log_retention_space');
  }
  public set localLogRetentionSpace(value: number) {
    this._localLogRetentionSpace = value;
  }
  public resetLocalLogRetentionSpace() {
    this._localLogRetentionSpace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localLogRetentionSpaceInput() {
    return this._localLogRetentionSpace;
  }

  // log_backup - computed: true, optional: true, required: false
  private _logBackup?: boolean | cdktf.IResolvable; 
  public get logBackup() {
    return this.getBooleanAttribute('log_backup');
  }
  public set logBackup(value: boolean | cdktf.IResolvable) {
    this._logBackup = value;
  }
  public resetLogBackup() {
    this._logBackup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logBackupInput() {
    return this._logBackup;
  }

  // log_backup_frequency - computed: true, optional: true, required: false
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

  // log_backup_retention_period - computed: true, optional: true, required: false
  private _logBackupRetentionPeriod?: number; 
  public get logBackupRetentionPeriod() {
    return this.getNumberAttribute('log_backup_retention_period');
  }
  public set logBackupRetentionPeriod(value: number) {
    this._logBackupRetentionPeriod = value;
  }
  public resetLogBackupRetentionPeriod() {
    this._logBackupRetentionPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logBackupRetentionPeriodInput() {
    return this._logBackupRetentionPeriod;
  }

  // log_retention_period - computed: true, optional: true, required: false
  private _logRetentionPeriod?: number; 
  public get logRetentionPeriod() {
    return this.getNumberAttribute('log_retention_period');
  }
  public set logRetentionPeriod(value: number) {
    this._logRetentionPeriod = value;
  }
  public resetLogRetentionPeriod() {
    this._logRetentionPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logRetentionPeriodInput() {
    return this._logRetentionPeriod;
  }

  // preferred_backup_period - computed: true, optional: true, required: false
  private _preferredBackupPeriod?: string[]; 
  public get preferredBackupPeriod() {
    return cdktf.Fn.tolist(this.getListAttribute('preferred_backup_period'));
  }
  public set preferredBackupPeriod(value: string[]) {
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

  // retention_period - computed: true, optional: true, required: false
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
      archive_backup_keep_count: cdktf.numberToTerraform(this._archiveBackupKeepCount),
      archive_backup_keep_policy: cdktf.stringToTerraform(this._archiveBackupKeepPolicy),
      archive_backup_retention_period: cdktf.numberToTerraform(this._archiveBackupRetentionPeriod),
      backup_interval: cdktf.stringToTerraform(this._backupInterval),
      backup_method: cdktf.stringToTerraform(this._backupMethod),
      backup_period: cdktf.listMapper(cdktf.stringToTerraform, false)(this._backupPeriod),
      backup_priority: cdktf.numberToTerraform(this._backupPriority),
      backup_retention_period: cdktf.numberToTerraform(this._backupRetentionPeriod),
      backup_time: cdktf.stringToTerraform(this._backupTime),
      category: cdktf.stringToTerraform(this._category),
      compress_type: cdktf.stringToTerraform(this._compressType),
      enable_backup_log: cdktf.booleanToTerraform(this._enableBackupLog),
      enable_increment_data_backup: cdktf.booleanToTerraform(this._enableIncrementDataBackup),
      high_space_usage_protection: cdktf.stringToTerraform(this._highSpaceUsageProtection),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      local_log_retention_hours: cdktf.numberToTerraform(this._localLogRetentionHours),
      local_log_retention_space: cdktf.numberToTerraform(this._localLogRetentionSpace),
      log_backup: cdktf.booleanToTerraform(this._logBackup),
      log_backup_frequency: cdktf.stringToTerraform(this._logBackupFrequency),
      log_backup_local_retention_number: cdktf.numberToTerraform(this._logBackupLocalRetentionNumber),
      log_backup_retention_period: cdktf.numberToTerraform(this._logBackupRetentionPeriod),
      log_retention_period: cdktf.numberToTerraform(this._logRetentionPeriod),
      preferred_backup_period: cdktf.listMapper(cdktf.stringToTerraform, false)(this._preferredBackupPeriod),
      preferred_backup_time: cdktf.stringToTerraform(this._preferredBackupTime),
      released_keep_policy: cdktf.stringToTerraform(this._releasedKeepPolicy),
      retention_period: cdktf.numberToTerraform(this._retentionPeriod),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      archive_backup_keep_count: {
        value: cdktf.numberToHclTerraform(this._archiveBackupKeepCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      archive_backup_keep_policy: {
        value: cdktf.stringToHclTerraform(this._archiveBackupKeepPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      archive_backup_retention_period: {
        value: cdktf.numberToHclTerraform(this._archiveBackupRetentionPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      backup_interval: {
        value: cdktf.stringToHclTerraform(this._backupInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backup_method: {
        value: cdktf.stringToHclTerraform(this._backupMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backup_period: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._backupPeriod),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      backup_priority: {
        value: cdktf.numberToHclTerraform(this._backupPriority),
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
        value: cdktf.stringToHclTerraform(this._backupTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      category: {
        value: cdktf.stringToHclTerraform(this._category),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compress_type: {
        value: cdktf.stringToHclTerraform(this._compressType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_backup_log: {
        value: cdktf.booleanToHclTerraform(this._enableBackupLog),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_increment_data_backup: {
        value: cdktf.booleanToHclTerraform(this._enableIncrementDataBackup),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      local_log_retention_hours: {
        value: cdktf.numberToHclTerraform(this._localLogRetentionHours),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      local_log_retention_space: {
        value: cdktf.numberToHclTerraform(this._localLogRetentionSpace),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      log_backup: {
        value: cdktf.booleanToHclTerraform(this._logBackup),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
        value: cdktf.numberToHclTerraform(this._logBackupRetentionPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      log_retention_period: {
        value: cdktf.numberToHclTerraform(this._logRetentionPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      preferred_backup_period: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._preferredBackupPeriod),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
