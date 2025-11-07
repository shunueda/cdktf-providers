// https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/backup_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BackupPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/backup_policy#data_lock BackupPolicy#data_lock}
  */
  readonly dataLock?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/backup_policy#description BackupPolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/backup_policy#enable_smart_local_retention_adjustment BackupPolicy#enable_smart_local_retention_adjustment}
  */
  readonly enableSmartLocalRetentionAdjustment?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/backup_policy#id BackupPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/backup_policy#is_cbs_enabled BackupPolicy#is_cbs_enabled}
  */
  readonly isCbsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/backup_policy#last_modification_time_usecs BackupPolicy#last_modification_time_usecs}
  */
  readonly lastModificationTimeUsecs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/backup_policy#name BackupPolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/backup_policy#skip_interval_mins BackupPolicy#skip_interval_mins}
  */
  readonly skipIntervalMins?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/backup_policy#version BackupPolicy#version}
  */
  readonly version?: number;
  /**
  * backup_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/backup_policy#backup_policy BackupPolicy#backup_policy}
  */
  readonly backupPolicy?: BackupPolicyBackupPolicy;
  /**
  * retry_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/backup_policy#retry_options BackupPolicy#retry_options}
  */
  readonly retryOptions?: BackupPolicyRetryOptions;
}
export interface BackupPolicyBackupPolicyBmrRetentionDataLockConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/backup_policy#duration BackupPolicy#duration}
  */
  readonly duration: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/backup_policy#enable_worm_on_external_target BackupPolicy#enable_worm_on_external_target}
  */
  readonly enableWormOnExternalTarget?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/backup_policy#mode BackupPolicy#mode}
  */
  readonly mode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/backup_policy#unit BackupPolicy#unit}
  */
  readonly unit: string;
}

export function backupPolicyBackupPolicyBmrRetentionDataLockConfigToTerraform(struct?: BackupPolicyBackupPolicyBmrRetentionDataLockConfigOutputReference | BackupPolicyBackupPolicyBmrRetentionDataLockConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.numberToTerraform(struct!.duration),
    enable_worm_on_external_target: cdktf.booleanToTerraform(struct!.enableWormOnExternalTarget),
    mode: cdktf.stringToTerraform(struct!.mode),
    unit: cdktf.stringToTerraform(struct!.unit),
  }
}


export function backupPolicyBackupPolicyBmrRetentionDataLockConfigToHclTerraform(struct?: BackupPolicyBackupPolicyBmrRetentionDataLockConfigOutputReference | BackupPolicyBackupPolicyBmrRetentionDataLockConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.numberToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enable_worm_on_external_target: {
      value: cdktf.booleanToHclTerraform(struct!.enableWormOnExternalTarget),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupPolicyBackupPolicyBmrRetentionDataLockConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BackupPolicyBackupPolicyBmrRetentionDataLockConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._enableWormOnExternalTarget !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableWormOnExternalTarget = this._enableWormOnExternalTarget;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupPolicyBackupPolicyBmrRetentionDataLockConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._duration = undefined;
      this._enableWormOnExternalTarget = undefined;
      this._mode = undefined;
      this._unit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._duration = value.duration;
      this._enableWormOnExternalTarget = value.enableWormOnExternalTarget;
      this._mode = value.mode;
      this._unit = value.unit;
    }
  }

  // duration - computed: false, optional: false, required: true
  private _duration?: number; 
  public get duration() {
    return this.getNumberAttribute('duration');
  }
  public set duration(value: number) {
    this._duration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // enable_worm_on_external_target - computed: false, optional: true, required: false
  private _enableWormOnExternalTarget?: boolean | cdktf.IResolvable; 
  public get enableWormOnExternalTarget() {
    return this.getBooleanAttribute('enable_worm_on_external_target');
  }
  public set enableWormOnExternalTarget(value: boolean | cdktf.IResolvable) {
    this._enableWormOnExternalTarget = value;
  }
  public resetEnableWormOnExternalTarget() {
    this._enableWormOnExternalTarget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableWormOnExternalTargetInput() {
    return this._enableWormOnExternalTarget;
  }

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }
}
export interface BackupPolicyBackupPolicyBmrRetention {
  /**
  * Specifies the duration for a backup retention.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/backup_policy#duration BackupPolicy#duration}
  */
  readonly duration: number;
  /**
  * Specifies the Retention Unit of a backup measured in days, months or years. If unit is 'Months', then number specified in duration is multiplied by 30. If 'Years', it is multiplied by 365.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/backup_policy#unit BackupPolicy#unit}
  */
  readonly unit: string;
  /**
  * data_lock_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/backup_policy#data_lock_config BackupPolicy#data_lock_config}
  */
  readonly dataLockConfig?: BackupPolicyBackupPolicyBmrRetentionDataLockConfig;
}

export function backupPolicyBackupPolicyBmrRetentionToTerraform(struct?: BackupPolicyBackupPolicyBmrRetentionOutputReference | BackupPolicyBackupPolicyBmrRetention): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.numberToTerraform(struct!.duration),
    unit: cdktf.stringToTerraform(struct!.unit),
    data_lock_config: backupPolicyBackupPolicyBmrRetentionDataLockConfigToTerraform(struct!.dataLockConfig),
  }
}


export function backupPolicyBackupPolicyBmrRetentionToHclTerraform(struct?: BackupPolicyBackupPolicyBmrRetentionOutputReference | BackupPolicyBackupPolicyBmrRetention): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.numberToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_lock_config: {
      value: backupPolicyBackupPolicyBmrRetentionDataLockConfigToHclTerraform(struct!.dataLockConfig),
      isBlock: true,
      type: "list",
      storageClassType: "BackupPolicyBackupPolicyBmrRetentionDataLockConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupPolicyBackupPolicyBmrRetentionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BackupPolicyBackupPolicyBmrRetention | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._dataLockConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataLockConfig = this._dataLockConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupPolicyBackupPolicyBmrRetention | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._duration = undefined;
      this._unit = undefined;
      this._dataLockConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._duration = value.duration;
      this._unit = value.unit;
      this._dataLockConfig.internalValue = value.dataLockConfig;
    }
  }

  // duration - computed: false, optional: false, required: true
  private _duration?: number; 
  public get duration() {
    return this.getNumberAttribute('duration');
  }
  public set duration(value: number) {
    this._duration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // data_lock_config - computed: false, optional: true, required: false
  private _dataLockConfig = new BackupPolicyBackupPolicyBmrRetentionDataLockConfigOutputReference(this, "data_lock_config");
  public get dataLockConfig() {
    return this._dataLockConfig;
  }
  public putDataLockConfig(value: BackupPolicyBackupPolicyBmrRetentionDataLockConfig) {
    this._dataLockConfig.internalValue = value;
  }
  public resetDataLockConfig() {
    this._dataLockConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataLockConfigInput() {
    return this._dataLockConfig.internalValue;
  }
}
export interface BackupPolicyBackupPolicyBmrScheduleDaySchedule {
  /**
  * Multiplier for frequency unit (e.g., every N hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/backup_policy#frequency BackupPolicy#frequency}
  */
  readonly frequency: number;
}

export function backupPolicyBackupPolicyBmrScheduleDayScheduleToTerraform(struct?: BackupPolicyBackupPolicyBmrScheduleDayScheduleOutputReference | BackupPolicyBackupPolicyBmrScheduleDaySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    frequency: cdktf.numberToTerraform(struct!.frequency),
  }
}


export function backupPolicyBackupPolicyBmrScheduleDayScheduleToHclTerraform(struct?: BackupPolicyBackupPolicyBmrScheduleDayScheduleOutputReference | BackupPolicyBackupPolicyBmrScheduleDaySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    frequency: {
      value: cdktf.numberToHclTerraform(struct!.frequency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupPolicyBackupPolicyBmrScheduleDayScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BackupPolicyBackupPolicyBmrScheduleDaySchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._frequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.frequency = this._frequency;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupPolicyBackupPolicyBmrScheduleDaySchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._frequency = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._frequency = value.frequency;
    }
  }

  // frequency - computed: false, optional: false, required: true
  private _frequency?: number; 
  public get frequency() {
    return this.getNumberAttribute('frequency');
  }
  public set frequency(value: number) {
    this._frequency = value;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency;
  }
}
export interface BackupPolicyBackupPolicyBmrScheduleMonthSchedule {
  /**
  * Day of month to run (e.g., 18).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/backup_policy#day_of_month BackupPolicy#day_of_month}
  */
  readonly dayOfMonth?: number;
  /**
  * List of days of the week for monthly run.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/backup_policy#day_of_week BackupPolicy#day_of_week}
  */
  readonly dayOfWeek?: string[];
  /**
  * Week of month (e.g., First, Second, Last).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/backup_policy#week_of_month BackupPolicy#week_of_month}
  */
  readonly weekOfMonth?: string;
}

export function backupPolicyBackupPolicyBmrScheduleMonthScheduleToTerraform(struct?: BackupPolicyBackupPolicyBmrScheduleMonthScheduleOutputReference | BackupPolicyBackupPolicyBmrScheduleMonthSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day_of_month: cdktf.numberToTerraform(struct!.dayOfMonth),
    day_of_week: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dayOfWeek),
    week_of_month: cdktf.stringToTerraform(struct!.weekOfMonth),
  }
}


export function backupPolicyBackupPolicyBmrScheduleMonthScheduleToHclTerraform(struct?: BackupPolicyBackupPolicyBmrScheduleMonthScheduleOutputReference | BackupPolicyBackupPolicyBmrScheduleMonthSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    day_of_month: {
      value: cdktf.numberToHclTerraform(struct!.dayOfMonth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    day_of_week: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dayOfWeek),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    week_of_month: {
      value: cdktf.stringToHclTerraform(struct!.weekOfMonth),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupPolicyBackupPolicyBmrScheduleMonthScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BackupPolicyBackupPolicyBmrScheduleMonthSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dayOfMonth !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfMonth = this._dayOfMonth;
    }
    if (this._dayOfWeek !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfWeek = this._dayOfWeek;
    }
    if (this._weekOfMonth !== undefined) {
      hasAnyValues = true;
      internalValueResult.weekOfMonth = this._weekOfMonth;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupPolicyBackupPolicyBmrScheduleMonthSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dayOfMonth = undefined;
      this._dayOfWeek = undefined;
      this._weekOfMonth = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dayOfMonth = value.dayOfMonth;
      this._dayOfWeek = value.dayOfWeek;
      this._weekOfMonth = value.weekOfMonth;
    }
  }

  // day_of_month - computed: false, optional: true, required: false
  private _dayOfMonth?: number; 
  public get dayOfMonth() {
    return this.getNumberAttribute('day_of_month');
  }
  public set dayOfMonth(value: number) {
    this._dayOfMonth = value;
  }
  public resetDayOfMonth() {
    this._dayOfMonth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfMonthInput() {
    return this._dayOfMonth;
  }

  // day_of_week - computed: false, optional: true, required: false
  private _dayOfWeek?: string[]; 
  public get dayOfWeek() {
    return this.getListAttribute('day_of_week');
  }
  public set dayOfWeek(value: string[]) {
    this._dayOfWeek = value;
  }
  public resetDayOfWeek() {
    this._dayOfWeek = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfWeekInput() {
    return this._dayOfWeek;
  }

  // week_of_month - computed: false, optional: true, required: false
  private _weekOfMonth?: string; 
  public get weekOfMonth() {
    return this.getStringAttribute('week_of_month');
  }
  public set weekOfMonth(value: string) {
    this._weekOfMonth = value;
  }
  public resetWeekOfMonth() {
    this._weekOfMonth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weekOfMonthInput() {
    return this._weekOfMonth;
  }
}
export interface BackupPolicyBackupPolicyBmrScheduleWeekSchedule {
  /**
  * Days of the week to run (e.g., Monday, Tuesday).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/backup_policy#day_of_week BackupPolicy#day_of_week}
  */
  readonly dayOfWeek: string[];
}

export function backupPolicyBackupPolicyBmrScheduleWeekScheduleToTerraform(struct?: BackupPolicyBackupPolicyBmrScheduleWeekScheduleOutputReference | BackupPolicyBackupPolicyBmrScheduleWeekSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day_of_week: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dayOfWeek),
  }
}


export function backupPolicyBackupPolicyBmrScheduleWeekScheduleToHclTerraform(struct?: BackupPolicyBackupPolicyBmrScheduleWeekScheduleOutputReference | BackupPolicyBackupPolicyBmrScheduleWeekSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    day_of_week: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dayOfWeek),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupPolicyBackupPolicyBmrScheduleWeekScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BackupPolicyBackupPolicyBmrScheduleWeekSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dayOfWeek !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfWeek = this._dayOfWeek;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupPolicyBackupPolicyBmrScheduleWeekSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dayOfWeek = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dayOfWeek = value.dayOfWeek;
    }
  }

  // day_of_week - computed: false, optional: false, required: true
  private _dayOfWeek?: string[]; 
  public get dayOfWeek() {
    return this.getListAttribute('day_of_week');
  }
  public set dayOfWeek(value: string[]) {
    this._dayOfWeek = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfWeekInput() {
    return this._dayOfWeek;
  }
}
export interface BackupPolicyBackupPolicyBmrScheduleYearSchedule {
  /**
  * Day of the year to run (e.g., First, Last).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/backup_policy#day_of_year BackupPolicy#day_of_year}
  */
  readonly dayOfYear: string;
}

export function backupPolicyBackupPolicyBmrScheduleYearScheduleToTerraform(struct?: BackupPolicyBackupPolicyBmrScheduleYearScheduleOutputReference | BackupPolicyBackupPolicyBmrScheduleYearSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day_of_year: cdktf.stringToTerraform(struct!.dayOfYear),
  }
}


export function backupPolicyBackupPolicyBmrScheduleYearScheduleToHclTerraform(struct?: BackupPolicyBackupPolicyBmrScheduleYearScheduleOutputReference | BackupPolicyBackupPolicyBmrScheduleYearSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    day_of_year: {
      value: cdktf.stringToHclTerraform(struct!.dayOfYear),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupPolicyBackupPolicyBmrScheduleYearScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BackupPolicyBackupPolicyBmrScheduleYearSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dayOfYear !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfYear = this._dayOfYear;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupPolicyBackupPolicyBmrScheduleYearSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dayOfYear = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dayOfYear = value.dayOfYear;
    }
  }

  // day_of_year - computed: false, optional: false, required: true
  private _dayOfYear?: string; 
  public get dayOfYear() {
    return this.getStringAttribute('day_of_year');
  }
  public set dayOfYear(value: string) {
    this._dayOfYear = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfYearInput() {
    return this._dayOfYear;
  }
}
export interface BackupPolicyBackupPolicyBmrSchedule {
  /**
  * How often to start new runs (e.g., Days, Weeks, Months).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/backup_policy#unit BackupPolicy#unit}
  */
  readonly unit: string;
  /**
  * day_schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/backup_policy#day_schedule BackupPolicy#day_schedule}
  */
  readonly daySchedule?: BackupPolicyBackupPolicyBmrScheduleDaySchedule;
  /**
  * month_schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/backup_policy#month_schedule BackupPolicy#month_schedule}
  */
  readonly monthSchedule?: BackupPolicyBackupPolicyBmrScheduleMonthSchedule;
  /**
  * week_schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/backup_policy#week_schedule BackupPolicy#week_schedule}
  */
  readonly weekSchedule?: BackupPolicyBackupPolicyBmrScheduleWeekSchedule;
  /**
  * year_schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/backup_policy#year_schedule BackupPolicy#year_schedule}
  */
  readonly yearSchedule?: BackupPolicyBackupPolicyBmrScheduleYearSchedule;
}

export function backupPolicyBackupPolicyBmrScheduleToTerraform(struct?: BackupPolicyBackupPolicyBmrScheduleOutputReference | BackupPolicyBackupPolicyBmrSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    day_schedule: backupPolicyBackupPolicyBmrScheduleDayScheduleToTerraform(struct!.daySchedule),
    month_schedule: backupPolicyBackupPolicyBmrScheduleMonthScheduleToTerraform(struct!.monthSchedule),
    week_schedule: backupPolicyBackupPolicyBmrScheduleWeekScheduleToTerraform(struct!.weekSchedule),
    year_schedule: backupPolicyBackupPolicyBmrScheduleYearScheduleToTerraform(struct!.yearSchedule),
  }
}


export function backupPolicyBackupPolicyBmrScheduleToHclTerraform(struct?: BackupPolicyBackupPolicyBmrScheduleOutputReference | BackupPolicyBackupPolicyBmrSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    day_schedule: {
      value: backupPolicyBackupPolicyBmrScheduleDayScheduleToHclTerraform(struct!.daySchedule),
      isBlock: true,
      type: "list",
      storageClassType: "BackupPolicyBackupPolicyBmrScheduleDayScheduleList",
    },
    month_schedule: {
      value: backupPolicyBackupPolicyBmrScheduleMonthScheduleToHclTerraform(struct!.monthSchedule),
      isBlock: true,
      type: "list",
      storageClassType: "BackupPolicyBackupPolicyBmrScheduleMonthScheduleList",
    },
    week_schedule: {
      value: backupPolicyBackupPolicyBmrScheduleWeekScheduleToHclTerraform(struct!.weekSchedule),
      isBlock: true,
      type: "list",
      storageClassType: "BackupPolicyBackupPolicyBmrScheduleWeekScheduleList",
    },
    year_schedule: {
      value: backupPolicyBackupPolicyBmrScheduleYearScheduleToHclTerraform(struct!.yearSchedule),
      isBlock: true,
      type: "list",
      storageClassType: "BackupPolicyBackupPolicyBmrScheduleYearScheduleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupPolicyBackupPolicyBmrScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BackupPolicyBackupPolicyBmrSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._daySchedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.daySchedule = this._daySchedule?.internalValue;
    }
    if (this._monthSchedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.monthSchedule = this._monthSchedule?.internalValue;
    }
    if (this._weekSchedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.weekSchedule = this._weekSchedule?.internalValue;
    }
    if (this._yearSchedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.yearSchedule = this._yearSchedule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupPolicyBackupPolicyBmrSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._unit = undefined;
      this._daySchedule.internalValue = undefined;
      this._monthSchedule.internalValue = undefined;
      this._weekSchedule.internalValue = undefined;
      this._yearSchedule.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._unit = value.unit;
      this._daySchedule.internalValue = value.daySchedule;
      this._monthSchedule.internalValue = value.monthSchedule;
      this._weekSchedule.internalValue = value.weekSchedule;
      this._yearSchedule.internalValue = value.yearSchedule;
    }
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // day_schedule - computed: false, optional: true, required: false
  private _daySchedule = new BackupPolicyBackupPolicyBmrScheduleDayScheduleOutputReference(this, "day_schedule");
  public get daySchedule() {
    return this._daySchedule;
  }
  public putDaySchedule(value: BackupPolicyBackupPolicyBmrScheduleDaySchedule) {
    this._daySchedule.internalValue = value;
  }
  public resetDaySchedule() {
    this._daySchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayScheduleInput() {
    return this._daySchedule.internalValue;
  }

  // month_schedule - computed: false, optional: true, required: false
  private _monthSchedule = new BackupPolicyBackupPolicyBmrScheduleMonthScheduleOutputReference(this, "month_schedule");
  public get monthSchedule() {
    return this._monthSchedule;
  }
  public putMonthSchedule(value: BackupPolicyBackupPolicyBmrScheduleMonthSchedule) {
    this._monthSchedule.internalValue = value;
  }
  public resetMonthSchedule() {
    this._monthSchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthScheduleInput() {
    return this._monthSchedule.internalValue;
  }

  // week_schedule - computed: false, optional: true, required: false
  private _weekSchedule = new BackupPolicyBackupPolicyBmrScheduleWeekScheduleOutputReference(this, "week_schedule");
  public get weekSchedule() {
    return this._weekSchedule;
  }
  public putWeekSchedule(value: BackupPolicyBackupPolicyBmrScheduleWeekSchedule) {
    this._weekSchedule.internalValue = value;
  }
  public resetWeekSchedule() {
    this._weekSchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weekScheduleInput() {
    return this._weekSchedule.internalValue;
  }

  // year_schedule - computed: false, optional: true, required: false
  private _yearSchedule = new BackupPolicyBackupPolicyBmrScheduleYearScheduleOutputReference(this, "year_schedule");
  public get yearSchedule() {
    return this._yearSchedule;
  }
  public putYearSchedule(value: BackupPolicyBackupPolicyBmrScheduleYearSchedule) {
    this._yearSchedule.internalValue = value;
  }
  public resetYearSchedule() {
    this._yearSchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yearScheduleInput() {
    return this._yearSchedule.internalValue;
  }
}
export interface BackupPolicyBackupPolicyBmr {
  /**
  * retention block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/backup_policy#retention BackupPolicy#retention}
  */
  readonly retention: BackupPolicyBackupPolicyBmrRetention;
  /**
  * schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/backup_policy#schedule BackupPolicy#schedule}
  */
  readonly schedule: BackupPolicyBackupPolicyBmrSchedule;
}

export function backupPolicyBackupPolicyBmrToTerraform(struct?: BackupPolicyBackupPolicyBmrOutputReference | BackupPolicyBackupPolicyBmr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    retention: backupPolicyBackupPolicyBmrRetentionToTerraform(struct!.retention),
    schedule: backupPolicyBackupPolicyBmrScheduleToTerraform(struct!.schedule),
  }
}


export function backupPolicyBackupPolicyBmrToHclTerraform(struct?: BackupPolicyBackupPolicyBmrOutputReference | BackupPolicyBackupPolicyBmr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    retention: {
      value: backupPolicyBackupPolicyBmrRetentionToHclTerraform(struct!.retention),
      isBlock: true,
      type: "list",
      storageClassType: "BackupPolicyBackupPolicyBmrRetentionList",
    },
    schedule: {
      value: backupPolicyBackupPolicyBmrScheduleToHclTerraform(struct!.schedule),
      isBlock: true,
      type: "list",
      storageClassType: "BackupPolicyBackupPolicyBmrScheduleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupPolicyBackupPolicyBmrOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BackupPolicyBackupPolicyBmr | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._retention?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retention = this._retention?.internalValue;
    }
    if (this._schedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedule = this._schedule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupPolicyBackupPolicyBmr | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._retention.internalValue = undefined;
      this._schedule.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._retention.internalValue = value.retention;
      this._schedule.internalValue = value.schedule;
    }
  }

  // retention - computed: false, optional: false, required: true
  private _retention = new BackupPolicyBackupPolicyBmrRetentionOutputReference(this, "retention");
  public get retention() {
    return this._retention;
  }
  public putRetention(value: BackupPolicyBackupPolicyBmrRetention) {
    this._retention.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionInput() {
    return this._retention.internalValue;
  }

  // schedule - computed: false, optional: false, required: true
  private _schedule = new BackupPolicyBackupPolicyBmrScheduleOutputReference(this, "schedule");
  public get schedule() {
    return this._schedule;
  }
  public putSchedule(value: BackupPolicyBackupPolicyBmrSchedule) {
    this._schedule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule.internalValue;
  }
}
export interface BackupPolicyBackupPolicyCdpRetentionDataLockConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/backup_policy#duration BackupPolicy#duration}
  */
  readonly duration: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/backup_policy#enable_worm_on_external_target BackupPolicy#enable_worm_on_external_target}
  */
  readonly enableWormOnExternalTarget?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/backup_policy#mode BackupPolicy#mode}
  */
  readonly mode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/backup_policy#unit BackupPolicy#unit}
  */
  readonly unit: string;
}

export function backupPolicyBackupPolicyCdpRetentionDataLockConfigToTerraform(struct?: BackupPolicyBackupPolicyCdpRetentionDataLockConfigOutputReference | BackupPolicyBackupPolicyCdpRetentionDataLockConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.numberToTerraform(struct!.duration),
    enable_worm_on_external_target: cdktf.booleanToTerraform(struct!.enableWormOnExternalTarget),
    mode: cdktf.stringToTerraform(struct!.mode),
    unit: cdktf.stringToTerraform(struct!.unit),
  }
}


export function backupPolicyBackupPolicyCdpRetentionDataLockConfigToHclTerraform(struct?: BackupPolicyBackupPolicyCdpRetentionDataLockConfigOutputReference | BackupPolicyBackupPolicyCdpRetentionDataLockConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.numberToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enable_worm_on_external_target: {
      value: cdktf.booleanToHclTerraform(struct!.enableWormOnExternalTarget),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupPolicyBackupPolicyCdpRetentionDataLockConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BackupPolicyBackupPolicyCdpRetentionDataLockConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._enableWormOnExternalTarget !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableWormOnExternalTarget = this._enableWormOnExternalTarget;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupPolicyBackupPolicyCdpRetentionDataLockConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._duration = undefined;
      this._enableWormOnExternalTarget = undefined;
      this._mode = undefined;
      this._unit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._duration = value.duration;
      this._enableWormOnExternalTarget = value.enableWormOnExternalTarget;
      this._mode = value.mode;
      this._unit = value.unit;
    }
  }

  // duration - computed: false, optional: false, required: true
  private _duration?: number; 
  public get duration() {
    return this.getNumberAttribute('duration');
  }
  public set duration(value: number) {
    this._duration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // enable_worm_on_external_target - computed: false, optional: true, required: false
  private _enableWormOnExternalTarget?: boolean | cdktf.IResolvable; 
  public get enableWormOnExternalTarget() {
    return this.getBooleanAttribute('enable_worm_on_external_target');
  }
  public set enableWormOnExternalTarget(value: boolean | cdktf.IResolvable) {
    this._enableWormOnExternalTarget = value;
  }
  public resetEnableWormOnExternalTarget() {
    this._enableWormOnExternalTarget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableWormOnExternalTargetInput() {
    return this._enableWormOnExternalTarget;
  }

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }
}
export interface BackupPolicyBackupPolicyCdpRetention {
  /**
  * Specifies the duration for a backup retention.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/backup_policy#duration BackupPolicy#duration}
  */
  readonly duration: number;
  /**
  * Specifies the Retention Unit of a backup measured in days, months or years. If unit is 'Months', then number specified in duration is multiplied by 30. If 'Years', it is multiplied by 365.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/backup_policy#unit BackupPolicy#unit}
  */
  readonly unit: string;
  /**
  * data_lock_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/backup_policy#data_lock_config BackupPolicy#data_lock_config}
  */
  readonly dataLockConfig?: BackupPolicyBackupPolicyCdpRetentionDataLockConfig;
}

export function backupPolicyBackupPolicyCdpRetentionToTerraform(struct?: BackupPolicyBackupPolicyCdpRetentionOutputReference | BackupPolicyBackupPolicyCdpRetention): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.numberToTerraform(struct!.duration),
    unit: cdktf.stringToTerraform(struct!.unit),
    data_lock_config: backupPolicyBackupPolicyCdpRetentionDataLockConfigToTerraform(struct!.dataLockConfig),
  }
}


export function backupPolicyBackupPolicyCdpRetentionToHclTerraform(struct?: BackupPolicyBackupPolicyCdpRetentionOutputReference | BackupPolicyBackupPolicyCdpRetention): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.numberToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_lock_config: {
      value: backupPolicyBackupPolicyCdpRetentionDataLockConfigToHclTerraform(struct!.dataLockConfig),
      isBlock: true,
      type: "list",
      storageClassType: "BackupPolicyBackupPolicyCdpRetentionDataLockConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupPolicyBackupPolicyCdpRetentionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BackupPolicyBackupPolicyCdpRetention | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._dataLockConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataLockConfig = this._dataLockConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupPolicyBackupPolicyCdpRetention | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._duration = undefined;
      this._unit = undefined;
      this._dataLockConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._duration = value.duration;
      this._unit = value.unit;
      this._dataLockConfig.internalValue = value.dataLockConfig;
    }
  }

  // duration - computed: false, optional: false, required: true
  private _duration?: number; 
  public get duration() {
    return this.getNumberAttribute('duration');
  }
  public set duration(value: number) {
    this._duration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // data_lock_config - computed: false, optional: true, required: false
  private _dataLockConfig = new BackupPolicyBackupPolicyCdpRetentionDataLockConfigOutputReference(this, "data_lock_config");
  public get dataLockConfig() {
    return this._dataLockConfig;
  }
  public putDataLockConfig(value: BackupPolicyBackupPolicyCdpRetentionDataLockConfig) {
    this._dataLockConfig.internalValue = value;
  }
  public resetDataLockConfig() {
    this._dataLockConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataLockConfigInput() {
    return this._dataLockConfig.internalValue;
  }
}
export interface BackupPolicyBackupPolicyCdp {
  /**
  * retention block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/backup_policy#retention BackupPolicy#retention}
  */
  readonly retention: BackupPolicyBackupPolicyCdpRetention;
}

export function backupPolicyBackupPolicyCdpToTerraform(struct?: BackupPolicyBackupPolicyCdpOutputReference | BackupPolicyBackupPolicyCdp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    retention: backupPolicyBackupPolicyCdpRetentionToTerraform(struct!.retention),
  }
}


export function backupPolicyBackupPolicyCdpToHclTerraform(struct?: BackupPolicyBackupPolicyCdpOutputReference | BackupPolicyBackupPolicyCdp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    retention: {
      value: backupPolicyBackupPolicyCdpRetentionToHclTerraform(struct!.retention),
      isBlock: true,
      type: "list",
      storageClassType: "BackupPolicyBackupPolicyCdpRetentionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupPolicyBackupPolicyCdpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BackupPolicyBackupPolicyCdp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._retention?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retention = this._retention?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupPolicyBackupPolicyCdp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._retention.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._retention.internalValue = value.retention;
    }
  }

  // retention - computed: false, optional: false, required: true
  private _retention = new BackupPolicyBackupPolicyCdpRetentionOutputReference(this, "retention");
  public get retention() {
    return this._retention;
  }
  public putRetention(value: BackupPolicyBackupPolicyCdpRetention) {
    this._retention.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionInput() {
    return this._retention.internalValue;
  }
}
export interface BackupPolicyBackupPolicyLogRetentionDataLockConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/backup_policy#duration BackupPolicy#duration}
  */
  readonly duration: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/backup_policy#enable_worm_on_external_target BackupPolicy#enable_worm_on_external_target}
  */
  readonly enableWormOnExternalTarget?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/backup_policy#mode BackupPolicy#mode}
  */
  readonly mode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/backup_policy#unit BackupPolicy#unit}
  */
  readonly unit: string;
}

export function backupPolicyBackupPolicyLogRetentionDataLockConfigToTerraform(struct?: BackupPolicyBackupPolicyLogRetentionDataLockConfigOutputReference | BackupPolicyBackupPolicyLogRetentionDataLockConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.numberToTerraform(struct!.duration),
    enable_worm_on_external_target: cdktf.booleanToTerraform(struct!.enableWormOnExternalTarget),
    mode: cdktf.stringToTerraform(struct!.mode),
    unit: cdktf.stringToTerraform(struct!.unit),
  }
}


export function backupPolicyBackupPolicyLogRetentionDataLockConfigToHclTerraform(struct?: BackupPolicyBackupPolicyLogRetentionDataLockConfigOutputReference | BackupPolicyBackupPolicyLogRetentionDataLockConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.numberToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enable_worm_on_external_target: {
      value: cdktf.booleanToHclTerraform(struct!.enableWormOnExternalTarget),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupPolicyBackupPolicyLogRetentionDataLockConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BackupPolicyBackupPolicyLogRetentionDataLockConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._enableWormOnExternalTarget !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableWormOnExternalTarget = this._enableWormOnExternalTarget;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupPolicyBackupPolicyLogRetentionDataLockConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._duration = undefined;
      this._enableWormOnExternalTarget = undefined;
      this._mode = undefined;
      this._unit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._duration = value.duration;
      this._enableWormOnExternalTarget = value.enableWormOnExternalTarget;
      this._mode = value.mode;
      this._unit = value.unit;
    }
  }

  // duration - computed: false, optional: false, required: true
  private _duration?: number; 
  public get duration() {
    return this.getNumberAttribute('duration');
  }
  public set duration(value: number) {
    this._duration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // enable_worm_on_external_target - computed: false, optional: true, required: false
  private _enableWormOnExternalTarget?: boolean | cdktf.IResolvable; 
  public get enableWormOnExternalTarget() {
    return this.getBooleanAttribute('enable_worm_on_external_target');
  }
  public set enableWormOnExternalTarget(value: boolean | cdktf.IResolvable) {
    this._enableWormOnExternalTarget = value;
  }
  public resetEnableWormOnExternalTarget() {
    this._enableWormOnExternalTarget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableWormOnExternalTargetInput() {
    return this._enableWormOnExternalTarget;
  }

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }
}
export interface BackupPolicyBackupPolicyLogRetention {
  /**
  * Specifies the duration for a backup retention.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/backup_policy#duration BackupPolicy#duration}
  */
  readonly duration: number;
  /**
  * Specifies the Retention Unit of a backup measured in days, months or years. If unit is 'Months', then number specified in duration is multiplied by 30. If 'Years', it is multiplied by 365.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/backup_policy#unit BackupPolicy#unit}
  */
  readonly unit: string;
  /**
  * data_lock_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/backup_policy#data_lock_config BackupPolicy#data_lock_config}
  */
  readonly dataLockConfig?: BackupPolicyBackupPolicyLogRetentionDataLockConfig;
}

export function backupPolicyBackupPolicyLogRetentionToTerraform(struct?: BackupPolicyBackupPolicyLogRetentionOutputReference | BackupPolicyBackupPolicyLogRetention): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.numberToTerraform(struct!.duration),
    unit: cdktf.stringToTerraform(struct!.unit),
    data_lock_config: backupPolicyBackupPolicyLogRetentionDataLockConfigToTerraform(struct!.dataLockConfig),
  }
}


export function backupPolicyBackupPolicyLogRetentionToHclTerraform(struct?: BackupPolicyBackupPolicyLogRetentionOutputReference | BackupPolicyBackupPolicyLogRetention): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.numberToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_lock_config: {
      value: backupPolicyBackupPolicyLogRetentionDataLockConfigToHclTerraform(struct!.dataLockConfig),
      isBlock: true,
      type: "list",
      storageClassType: "BackupPolicyBackupPolicyLogRetentionDataLockConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupPolicyBackupPolicyLogRetentionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BackupPolicyBackupPolicyLogRetention | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._dataLockConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataLockConfig = this._dataLockConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupPolicyBackupPolicyLogRetention | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._duration = undefined;
      this._unit = undefined;
      this._dataLockConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._duration = value.duration;
      this._unit = value.unit;
      this._dataLockConfig.internalValue = value.dataLockConfig;
    }
  }

  // duration - computed: false, optional: false, required: true
  private _duration?: number; 
  public get duration() {
    return this.getNumberAttribute('duration');
  }
  public set duration(value: number) {
    this._duration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // data_lock_config - computed: false, optional: true, required: false
  private _dataLockConfig = new BackupPolicyBackupPolicyLogRetentionDataLockConfigOutputReference(this, "data_lock_config");
  public get dataLockConfig() {
    return this._dataLockConfig;
  }
  public putDataLockConfig(value: BackupPolicyBackupPolicyLogRetentionDataLockConfig) {
    this._dataLockConfig.internalValue = value;
  }
  public resetDataLockConfig() {
    this._dataLockConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataLockConfigInput() {
    return this._dataLockConfig.internalValue;
  }
}
export interface BackupPolicyBackupPolicyLogScheduleHourSchedule {
  /**
  * Multiplier for frequency unit (e.g., every N hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/backup_policy#frequency BackupPolicy#frequency}
  */
  readonly frequency: number;
}

export function backupPolicyBackupPolicyLogScheduleHourScheduleToTerraform(struct?: BackupPolicyBackupPolicyLogScheduleHourScheduleOutputReference | BackupPolicyBackupPolicyLogScheduleHourSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    frequency: cdktf.numberToTerraform(struct!.frequency),
  }
}


export function backupPolicyBackupPolicyLogScheduleHourScheduleToHclTerraform(struct?: BackupPolicyBackupPolicyLogScheduleHourScheduleOutputReference | BackupPolicyBackupPolicyLogScheduleHourSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    frequency: {
      value: cdktf.numberToHclTerraform(struct!.frequency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupPolicyBackupPolicyLogScheduleHourScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BackupPolicyBackupPolicyLogScheduleHourSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._frequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.frequency = this._frequency;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupPolicyBackupPolicyLogScheduleHourSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._frequency = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._frequency = value.frequency;
    }
  }

  // frequency - computed: false, optional: false, required: true
  private _frequency?: number; 
  public get frequency() {
    return this.getNumberAttribute('frequency');
  }
  public set frequency(value: number) {
    this._frequency = value;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency;
  }
}
export interface BackupPolicyBackupPolicyLogScheduleMinuteSchedule {
  /**
  * Multiplier for frequency unit (e.g., every N hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/backup_policy#frequency BackupPolicy#frequency}
  */
  readonly frequency: number;
}

export function backupPolicyBackupPolicyLogScheduleMinuteScheduleToTerraform(struct?: BackupPolicyBackupPolicyLogScheduleMinuteScheduleOutputReference | BackupPolicyBackupPolicyLogScheduleMinuteSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    frequency: cdktf.numberToTerraform(struct!.frequency),
  }
}


export function backupPolicyBackupPolicyLogScheduleMinuteScheduleToHclTerraform(struct?: BackupPolicyBackupPolicyLogScheduleMinuteScheduleOutputReference | BackupPolicyBackupPolicyLogScheduleMinuteSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    frequency: {
      value: cdktf.numberToHclTerraform(struct!.frequency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupPolicyBackupPolicyLogScheduleMinuteScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BackupPolicyBackupPolicyLogScheduleMinuteSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._frequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.frequency = this._frequency;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupPolicyBackupPolicyLogScheduleMinuteSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._frequency = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._frequency = value.frequency;
    }
  }

  // frequency - computed: false, optional: false, required: true
  private _frequency?: number; 
  public get frequency() {
    return this.getNumberAttribute('frequency');
  }
  public set frequency(value: number) {
    this._frequency = value;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency;
  }
}
export interface BackupPolicyBackupPolicyLogSchedule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/backup_policy#unit BackupPolicy#unit}
  */
  readonly unit: string;
  /**
  * hour_schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/backup_policy#hour_schedule BackupPolicy#hour_schedule}
  */
  readonly hourSchedule?: BackupPolicyBackupPolicyLogScheduleHourSchedule;
  /**
  * minute_schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/backup_policy#minute_schedule BackupPolicy#minute_schedule}
  */
  readonly minuteSchedule?: BackupPolicyBackupPolicyLogScheduleMinuteSchedule;
}

export function backupPolicyBackupPolicyLogScheduleToTerraform(struct?: BackupPolicyBackupPolicyLogScheduleOutputReference | BackupPolicyBackupPolicyLogSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    hour_schedule: backupPolicyBackupPolicyLogScheduleHourScheduleToTerraform(struct!.hourSchedule),
    minute_schedule: backupPolicyBackupPolicyLogScheduleMinuteScheduleToTerraform(struct!.minuteSchedule),
  }
}


export function backupPolicyBackupPolicyLogScheduleToHclTerraform(struct?: BackupPolicyBackupPolicyLogScheduleOutputReference | BackupPolicyBackupPolicyLogSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hour_schedule: {
      value: backupPolicyBackupPolicyLogScheduleHourScheduleToHclTerraform(struct!.hourSchedule),
      isBlock: true,
      type: "list",
      storageClassType: "BackupPolicyBackupPolicyLogScheduleHourScheduleList",
    },
    minute_schedule: {
      value: backupPolicyBackupPolicyLogScheduleMinuteScheduleToHclTerraform(struct!.minuteSchedule),
      isBlock: true,
      type: "list",
      storageClassType: "BackupPolicyBackupPolicyLogScheduleMinuteScheduleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupPolicyBackupPolicyLogScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BackupPolicyBackupPolicyLogSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._hourSchedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hourSchedule = this._hourSchedule?.internalValue;
    }
    if (this._minuteSchedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.minuteSchedule = this._minuteSchedule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupPolicyBackupPolicyLogSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._unit = undefined;
      this._hourSchedule.internalValue = undefined;
      this._minuteSchedule.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._unit = value.unit;
      this._hourSchedule.internalValue = value.hourSchedule;
      this._minuteSchedule.internalValue = value.minuteSchedule;
    }
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // hour_schedule - computed: false, optional: true, required: false
  private _hourSchedule = new BackupPolicyBackupPolicyLogScheduleHourScheduleOutputReference(this, "hour_schedule");
  public get hourSchedule() {
    return this._hourSchedule;
  }
  public putHourSchedule(value: BackupPolicyBackupPolicyLogScheduleHourSchedule) {
    this._hourSchedule.internalValue = value;
  }
  public resetHourSchedule() {
    this._hourSchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hourScheduleInput() {
    return this._hourSchedule.internalValue;
  }

  // minute_schedule - computed: false, optional: true, required: false
  private _minuteSchedule = new BackupPolicyBackupPolicyLogScheduleMinuteScheduleOutputReference(this, "minute_schedule");
  public get minuteSchedule() {
    return this._minuteSchedule;
  }
  public putMinuteSchedule(value: BackupPolicyBackupPolicyLogScheduleMinuteSchedule) {
    this._minuteSchedule.internalValue = value;
  }
  public resetMinuteSchedule() {
    this._minuteSchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minuteScheduleInput() {
    return this._minuteSchedule.internalValue;
  }
}
export interface BackupPolicyBackupPolicyLog {
  /**
  * retention block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/backup_policy#retention BackupPolicy#retention}
  */
  readonly retention: BackupPolicyBackupPolicyLogRetention;
  /**
  * schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/backup_policy#schedule BackupPolicy#schedule}
  */
  readonly schedule: BackupPolicyBackupPolicyLogSchedule;
}

export function backupPolicyBackupPolicyLogToTerraform(struct?: BackupPolicyBackupPolicyLogOutputReference | BackupPolicyBackupPolicyLog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    retention: backupPolicyBackupPolicyLogRetentionToTerraform(struct!.retention),
    schedule: backupPolicyBackupPolicyLogScheduleToTerraform(struct!.schedule),
  }
}


export function backupPolicyBackupPolicyLogToHclTerraform(struct?: BackupPolicyBackupPolicyLogOutputReference | BackupPolicyBackupPolicyLog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    retention: {
      value: backupPolicyBackupPolicyLogRetentionToHclTerraform(struct!.retention),
      isBlock: true,
      type: "list",
      storageClassType: "BackupPolicyBackupPolicyLogRetentionList",
    },
    schedule: {
      value: backupPolicyBackupPolicyLogScheduleToHclTerraform(struct!.schedule),
      isBlock: true,
      type: "list",
      storageClassType: "BackupPolicyBackupPolicyLogScheduleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupPolicyBackupPolicyLogOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BackupPolicyBackupPolicyLog | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._retention?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retention = this._retention?.internalValue;
    }
    if (this._schedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedule = this._schedule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupPolicyBackupPolicyLog | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._retention.internalValue = undefined;
      this._schedule.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._retention.internalValue = value.retention;
      this._schedule.internalValue = value.schedule;
    }
  }

  // retention - computed: false, optional: false, required: true
  private _retention = new BackupPolicyBackupPolicyLogRetentionOutputReference(this, "retention");
  public get retention() {
    return this._retention;
  }
  public putRetention(value: BackupPolicyBackupPolicyLogRetention) {
    this._retention.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionInput() {
    return this._retention.internalValue;
  }

  // schedule - computed: false, optional: false, required: true
  private _schedule = new BackupPolicyBackupPolicyLogScheduleOutputReference(this, "schedule");
  public get schedule() {
    return this._schedule;
  }
  public putSchedule(value: BackupPolicyBackupPolicyLogSchedule) {
    this._schedule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule.internalValue;
  }
}
export interface BackupPolicyBackupPolicyRegularFullDaySchedule {
  /**
  * Multiplier for frequency unit (e.g., every N hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/backup_policy#frequency BackupPolicy#frequency}
  */
  readonly frequency: number;
}

export function backupPolicyBackupPolicyRegularFullDayScheduleToTerraform(struct?: BackupPolicyBackupPolicyRegularFullDayScheduleOutputReference | BackupPolicyBackupPolicyRegularFullDaySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    frequency: cdktf.numberToTerraform(struct!.frequency),
  }
}


export function backupPolicyBackupPolicyRegularFullDayScheduleToHclTerraform(struct?: BackupPolicyBackupPolicyRegularFullDayScheduleOutputReference | BackupPolicyBackupPolicyRegularFullDaySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    frequency: {
      value: cdktf.numberToHclTerraform(struct!.frequency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupPolicyBackupPolicyRegularFullDayScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BackupPolicyBackupPolicyRegularFullDaySchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._frequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.frequency = this._frequency;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupPolicyBackupPolicyRegularFullDaySchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._frequency = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._frequency = value.frequency;
    }
  }

  // frequency - computed: false, optional: false, required: true
  private _frequency?: number; 
  public get frequency() {
    return this.getNumberAttribute('frequency');
  }
  public set frequency(value: number) {
    this._frequency = value;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency;
  }
}
export interface BackupPolicyBackupPolicyRegularFullMonthSchedule {
  /**
  * Day of month to run (e.g., 18).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/backup_policy#day_of_month BackupPolicy#day_of_month}
  */
  readonly dayOfMonth?: number;
  /**
  * List of days of the week for monthly run.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/backup_policy#day_of_week BackupPolicy#day_of_week}
  */
  readonly dayOfWeek?: string[];
  /**
  * Week of month (e.g., First, Second, Last).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/backup_policy#week_of_month BackupPolicy#week_of_month}
  */
  readonly weekOfMonth?: string;
}

export function backupPolicyBackupPolicyRegularFullMonthScheduleToTerraform(struct?: BackupPolicyBackupPolicyRegularFullMonthScheduleOutputReference | BackupPolicyBackupPolicyRegularFullMonthSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day_of_month: cdktf.numberToTerraform(struct!.dayOfMonth),
    day_of_week: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dayOfWeek),
    week_of_month: cdktf.stringToTerraform(struct!.weekOfMonth),
  }
}


export function backupPolicyBackupPolicyRegularFullMonthScheduleToHclTerraform(struct?: BackupPolicyBackupPolicyRegularFullMonthScheduleOutputReference | BackupPolicyBackupPolicyRegularFullMonthSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    day_of_month: {
      value: cdktf.numberToHclTerraform(struct!.dayOfMonth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    day_of_week: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dayOfWeek),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    week_of_month: {
      value: cdktf.stringToHclTerraform(struct!.weekOfMonth),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupPolicyBackupPolicyRegularFullMonthScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BackupPolicyBackupPolicyRegularFullMonthSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dayOfMonth !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfMonth = this._dayOfMonth;
    }
    if (this._dayOfWeek !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfWeek = this._dayOfWeek;
    }
    if (this._weekOfMonth !== undefined) {
      hasAnyValues = true;
      internalValueResult.weekOfMonth = this._weekOfMonth;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupPolicyBackupPolicyRegularFullMonthSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dayOfMonth = undefined;
      this._dayOfWeek = undefined;
      this._weekOfMonth = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dayOfMonth = value.dayOfMonth;
      this._dayOfWeek = value.dayOfWeek;
      this._weekOfMonth = value.weekOfMonth;
    }
  }

  // day_of_month - computed: false, optional: true, required: false
  private _dayOfMonth?: number; 
  public get dayOfMonth() {
    return this.getNumberAttribute('day_of_month');
  }
  public set dayOfMonth(value: number) {
    this._dayOfMonth = value;
  }
  public resetDayOfMonth() {
    this._dayOfMonth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfMonthInput() {
    return this._dayOfMonth;
  }

  // day_of_week - computed: false, optional: true, required: false
  private _dayOfWeek?: string[]; 
  public get dayOfWeek() {
    return this.getListAttribute('day_of_week');
  }
  public set dayOfWeek(value: string[]) {
    this._dayOfWeek = value;
  }
  public resetDayOfWeek() {
    this._dayOfWeek = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfWeekInput() {
    return this._dayOfWeek;
  }

  // week_of_month - computed: false, optional: true, required: false
  private _weekOfMonth?: string; 
  public get weekOfMonth() {
    return this.getStringAttribute('week_of_month');
  }
  public set weekOfMonth(value: string) {
    this._weekOfMonth = value;
  }
  public resetWeekOfMonth() {
    this._weekOfMonth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weekOfMonthInput() {
    return this._weekOfMonth;
  }
}
export interface BackupPolicyBackupPolicyRegularFullWeekSchedule {
  /**
  * Days of the week to run (e.g., Monday, Tuesday).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/backup_policy#day_of_week BackupPolicy#day_of_week}
  */
  readonly dayOfWeek: string[];
}

export function backupPolicyBackupPolicyRegularFullWeekScheduleToTerraform(struct?: BackupPolicyBackupPolicyRegularFullWeekScheduleOutputReference | BackupPolicyBackupPolicyRegularFullWeekSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day_of_week: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dayOfWeek),
  }
}


export function backupPolicyBackupPolicyRegularFullWeekScheduleToHclTerraform(struct?: BackupPolicyBackupPolicyRegularFullWeekScheduleOutputReference | BackupPolicyBackupPolicyRegularFullWeekSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    day_of_week: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dayOfWeek),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupPolicyBackupPolicyRegularFullWeekScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BackupPolicyBackupPolicyRegularFullWeekSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dayOfWeek !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfWeek = this._dayOfWeek;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupPolicyBackupPolicyRegularFullWeekSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dayOfWeek = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dayOfWeek = value.dayOfWeek;
    }
  }

  // day_of_week - computed: false, optional: false, required: true
  private _dayOfWeek?: string[]; 
  public get dayOfWeek() {
    return this.getListAttribute('day_of_week');
  }
  public set dayOfWeek(value: string[]) {
    this._dayOfWeek = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfWeekInput() {
    return this._dayOfWeek;
  }
}
export interface BackupPolicyBackupPolicyRegularFullYearSchedule {
  /**
  * Day of the year to run (e.g., First, Last).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/backup_policy#day_of_year BackupPolicy#day_of_year}
  */
  readonly dayOfYear: string;
}

export function backupPolicyBackupPolicyRegularFullYearScheduleToTerraform(struct?: BackupPolicyBackupPolicyRegularFullYearScheduleOutputReference | BackupPolicyBackupPolicyRegularFullYearSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day_of_year: cdktf.stringToTerraform(struct!.dayOfYear),
  }
}


export function backupPolicyBackupPolicyRegularFullYearScheduleToHclTerraform(struct?: BackupPolicyBackupPolicyRegularFullYearScheduleOutputReference | BackupPolicyBackupPolicyRegularFullYearSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    day_of_year: {
      value: cdktf.stringToHclTerraform(struct!.dayOfYear),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupPolicyBackupPolicyRegularFullYearScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BackupPolicyBackupPolicyRegularFullYearSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dayOfYear !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfYear = this._dayOfYear;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupPolicyBackupPolicyRegularFullYearSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dayOfYear = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dayOfYear = value.dayOfYear;
    }
  }

  // day_of_year - computed: false, optional: false, required: true
  private _dayOfYear?: string; 
  public get dayOfYear() {
    return this.getStringAttribute('day_of_year');
  }
  public set dayOfYear(value: string) {
    this._dayOfYear = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfYearInput() {
    return this._dayOfYear;
  }
}
export interface BackupPolicyBackupPolicyRegularFull {
  /**
  * How often to start new runs (e.g., Days, Weeks, Months).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/backup_policy#unit BackupPolicy#unit}
  */
  readonly unit: string;
  /**
  * day_schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/backup_policy#day_schedule BackupPolicy#day_schedule}
  */
  readonly daySchedule?: BackupPolicyBackupPolicyRegularFullDaySchedule;
  /**
  * month_schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/backup_policy#month_schedule BackupPolicy#month_schedule}
  */
  readonly monthSchedule?: BackupPolicyBackupPolicyRegularFullMonthSchedule;
  /**
  * week_schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/backup_policy#week_schedule BackupPolicy#week_schedule}
  */
  readonly weekSchedule?: BackupPolicyBackupPolicyRegularFullWeekSchedule;
  /**
  * year_schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/backup_policy#year_schedule BackupPolicy#year_schedule}
  */
  readonly yearSchedule?: BackupPolicyBackupPolicyRegularFullYearSchedule;
}

export function backupPolicyBackupPolicyRegularFullToTerraform(struct?: BackupPolicyBackupPolicyRegularFullOutputReference | BackupPolicyBackupPolicyRegularFull): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    day_schedule: backupPolicyBackupPolicyRegularFullDayScheduleToTerraform(struct!.daySchedule),
    month_schedule: backupPolicyBackupPolicyRegularFullMonthScheduleToTerraform(struct!.monthSchedule),
    week_schedule: backupPolicyBackupPolicyRegularFullWeekScheduleToTerraform(struct!.weekSchedule),
    year_schedule: backupPolicyBackupPolicyRegularFullYearScheduleToTerraform(struct!.yearSchedule),
  }
}


export function backupPolicyBackupPolicyRegularFullToHclTerraform(struct?: BackupPolicyBackupPolicyRegularFullOutputReference | BackupPolicyBackupPolicyRegularFull): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    day_schedule: {
      value: backupPolicyBackupPolicyRegularFullDayScheduleToHclTerraform(struct!.daySchedule),
      isBlock: true,
      type: "list",
      storageClassType: "BackupPolicyBackupPolicyRegularFullDayScheduleList",
    },
    month_schedule: {
      value: backupPolicyBackupPolicyRegularFullMonthScheduleToHclTerraform(struct!.monthSchedule),
      isBlock: true,
      type: "list",
      storageClassType: "BackupPolicyBackupPolicyRegularFullMonthScheduleList",
    },
    week_schedule: {
      value: backupPolicyBackupPolicyRegularFullWeekScheduleToHclTerraform(struct!.weekSchedule),
      isBlock: true,
      type: "list",
      storageClassType: "BackupPolicyBackupPolicyRegularFullWeekScheduleList",
    },
    year_schedule: {
      value: backupPolicyBackupPolicyRegularFullYearScheduleToHclTerraform(struct!.yearSchedule),
      isBlock: true,
      type: "list",
      storageClassType: "BackupPolicyBackupPolicyRegularFullYearScheduleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupPolicyBackupPolicyRegularFullOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BackupPolicyBackupPolicyRegularFull | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._daySchedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.daySchedule = this._daySchedule?.internalValue;
    }
    if (this._monthSchedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.monthSchedule = this._monthSchedule?.internalValue;
    }
    if (this._weekSchedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.weekSchedule = this._weekSchedule?.internalValue;
    }
    if (this._yearSchedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.yearSchedule = this._yearSchedule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupPolicyBackupPolicyRegularFull | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._unit = undefined;
      this._daySchedule.internalValue = undefined;
      this._monthSchedule.internalValue = undefined;
      this._weekSchedule.internalValue = undefined;
      this._yearSchedule.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._unit = value.unit;
      this._daySchedule.internalValue = value.daySchedule;
      this._monthSchedule.internalValue = value.monthSchedule;
      this._weekSchedule.internalValue = value.weekSchedule;
      this._yearSchedule.internalValue = value.yearSchedule;
    }
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // day_schedule - computed: false, optional: true, required: false
  private _daySchedule = new BackupPolicyBackupPolicyRegularFullDayScheduleOutputReference(this, "day_schedule");
  public get daySchedule() {
    return this._daySchedule;
  }
  public putDaySchedule(value: BackupPolicyBackupPolicyRegularFullDaySchedule) {
    this._daySchedule.internalValue = value;
  }
  public resetDaySchedule() {
    this._daySchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayScheduleInput() {
    return this._daySchedule.internalValue;
  }

  // month_schedule - computed: false, optional: true, required: false
  private _monthSchedule = new BackupPolicyBackupPolicyRegularFullMonthScheduleOutputReference(this, "month_schedule");
  public get monthSchedule() {
    return this._monthSchedule;
  }
  public putMonthSchedule(value: BackupPolicyBackupPolicyRegularFullMonthSchedule) {
    this._monthSchedule.internalValue = value;
  }
  public resetMonthSchedule() {
    this._monthSchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthScheduleInput() {
    return this._monthSchedule.internalValue;
  }

  // week_schedule - computed: false, optional: true, required: false
  private _weekSchedule = new BackupPolicyBackupPolicyRegularFullWeekScheduleOutputReference(this, "week_schedule");
  public get weekSchedule() {
    return this._weekSchedule;
  }
  public putWeekSchedule(value: BackupPolicyBackupPolicyRegularFullWeekSchedule) {
    this._weekSchedule.internalValue = value;
  }
  public resetWeekSchedule() {
    this._weekSchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weekScheduleInput() {
    return this._weekSchedule.internalValue;
  }

  // year_schedule - computed: false, optional: true, required: false
  private _yearSchedule = new BackupPolicyBackupPolicyRegularFullYearScheduleOutputReference(this, "year_schedule");
  public get yearSchedule() {
    return this._yearSchedule;
  }
  public putYearSchedule(value: BackupPolicyBackupPolicyRegularFullYearSchedule) {
    this._yearSchedule.internalValue = value;
  }
  public resetYearSchedule() {
    this._yearSchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yearScheduleInput() {
    return this._yearSchedule.internalValue;
  }
}
export interface BackupPolicyBackupPolicyRegularFullBackupsRetentionDataLockConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/backup_policy#duration BackupPolicy#duration}
  */
  readonly duration: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/backup_policy#enable_worm_on_external_target BackupPolicy#enable_worm_on_external_target}
  */
  readonly enableWormOnExternalTarget?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/backup_policy#mode BackupPolicy#mode}
  */
  readonly mode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/backup_policy#unit BackupPolicy#unit}
  */
  readonly unit: string;
}

export function backupPolicyBackupPolicyRegularFullBackupsRetentionDataLockConfigToTerraform(struct?: BackupPolicyBackupPolicyRegularFullBackupsRetentionDataLockConfigOutputReference | BackupPolicyBackupPolicyRegularFullBackupsRetentionDataLockConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.numberToTerraform(struct!.duration),
    enable_worm_on_external_target: cdktf.booleanToTerraform(struct!.enableWormOnExternalTarget),
    mode: cdktf.stringToTerraform(struct!.mode),
    unit: cdktf.stringToTerraform(struct!.unit),
  }
}


export function backupPolicyBackupPolicyRegularFullBackupsRetentionDataLockConfigToHclTerraform(struct?: BackupPolicyBackupPolicyRegularFullBackupsRetentionDataLockConfigOutputReference | BackupPolicyBackupPolicyRegularFullBackupsRetentionDataLockConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.numberToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enable_worm_on_external_target: {
      value: cdktf.booleanToHclTerraform(struct!.enableWormOnExternalTarget),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupPolicyBackupPolicyRegularFullBackupsRetentionDataLockConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BackupPolicyBackupPolicyRegularFullBackupsRetentionDataLockConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._enableWormOnExternalTarget !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableWormOnExternalTarget = this._enableWormOnExternalTarget;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupPolicyBackupPolicyRegularFullBackupsRetentionDataLockConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._duration = undefined;
      this._enableWormOnExternalTarget = undefined;
      this._mode = undefined;
      this._unit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._duration = value.duration;
      this._enableWormOnExternalTarget = value.enableWormOnExternalTarget;
      this._mode = value.mode;
      this._unit = value.unit;
    }
  }

  // duration - computed: false, optional: false, required: true
  private _duration?: number; 
  public get duration() {
    return this.getNumberAttribute('duration');
  }
  public set duration(value: number) {
    this._duration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // enable_worm_on_external_target - computed: false, optional: true, required: false
  private _enableWormOnExternalTarget?: boolean | cdktf.IResolvable; 
  public get enableWormOnExternalTarget() {
    return this.getBooleanAttribute('enable_worm_on_external_target');
  }
  public set enableWormOnExternalTarget(value: boolean | cdktf.IResolvable) {
    this._enableWormOnExternalTarget = value;
  }
  public resetEnableWormOnExternalTarget() {
    this._enableWormOnExternalTarget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableWormOnExternalTargetInput() {
    return this._enableWormOnExternalTarget;
  }

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }
}
export interface BackupPolicyBackupPolicyRegularFullBackupsRetention {
  /**
  * Specifies the duration for a backup retention.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/backup_policy#duration BackupPolicy#duration}
  */
  readonly duration: number;
  /**
  * Specifies the Retention Unit of a backup measured in days, months or years. If unit is 'Months', then number specified in duration is multiplied by 30. If 'Years', it is multiplied by 365.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/backup_policy#unit BackupPolicy#unit}
  */
  readonly unit: string;
  /**
  * data_lock_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/backup_policy#data_lock_config BackupPolicy#data_lock_config}
  */
  readonly dataLockConfig?: BackupPolicyBackupPolicyRegularFullBackupsRetentionDataLockConfig;
}

export function backupPolicyBackupPolicyRegularFullBackupsRetentionToTerraform(struct?: BackupPolicyBackupPolicyRegularFullBackupsRetentionOutputReference | BackupPolicyBackupPolicyRegularFullBackupsRetention): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.numberToTerraform(struct!.duration),
    unit: cdktf.stringToTerraform(struct!.unit),
    data_lock_config: backupPolicyBackupPolicyRegularFullBackupsRetentionDataLockConfigToTerraform(struct!.dataLockConfig),
  }
}


export function backupPolicyBackupPolicyRegularFullBackupsRetentionToHclTerraform(struct?: BackupPolicyBackupPolicyRegularFullBackupsRetentionOutputReference | BackupPolicyBackupPolicyRegularFullBackupsRetention): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.numberToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_lock_config: {
      value: backupPolicyBackupPolicyRegularFullBackupsRetentionDataLockConfigToHclTerraform(struct!.dataLockConfig),
      isBlock: true,
      type: "list",
      storageClassType: "BackupPolicyBackupPolicyRegularFullBackupsRetentionDataLockConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupPolicyBackupPolicyRegularFullBackupsRetentionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BackupPolicyBackupPolicyRegularFullBackupsRetention | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._dataLockConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataLockConfig = this._dataLockConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupPolicyBackupPolicyRegularFullBackupsRetention | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._duration = undefined;
      this._unit = undefined;
      this._dataLockConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._duration = value.duration;
      this._unit = value.unit;
      this._dataLockConfig.internalValue = value.dataLockConfig;
    }
  }

  // duration - computed: false, optional: false, required: true
  private _duration?: number; 
  public get duration() {
    return this.getNumberAttribute('duration');
  }
  public set duration(value: number) {
    this._duration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // data_lock_config - computed: false, optional: true, required: false
  private _dataLockConfig = new BackupPolicyBackupPolicyRegularFullBackupsRetentionDataLockConfigOutputReference(this, "data_lock_config");
  public get dataLockConfig() {
    return this._dataLockConfig;
  }
  public putDataLockConfig(value: BackupPolicyBackupPolicyRegularFullBackupsRetentionDataLockConfig) {
    this._dataLockConfig.internalValue = value;
  }
  public resetDataLockConfig() {
    this._dataLockConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataLockConfigInput() {
    return this._dataLockConfig.internalValue;
  }
}
export interface BackupPolicyBackupPolicyRegularFullBackupsScheduleDaySchedule {
  /**
  * Multiplier for frequency unit (e.g., every N hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/backup_policy#frequency BackupPolicy#frequency}
  */
  readonly frequency: number;
}

export function backupPolicyBackupPolicyRegularFullBackupsScheduleDayScheduleToTerraform(struct?: BackupPolicyBackupPolicyRegularFullBackupsScheduleDayScheduleOutputReference | BackupPolicyBackupPolicyRegularFullBackupsScheduleDaySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    frequency: cdktf.numberToTerraform(struct!.frequency),
  }
}


export function backupPolicyBackupPolicyRegularFullBackupsScheduleDayScheduleToHclTerraform(struct?: BackupPolicyBackupPolicyRegularFullBackupsScheduleDayScheduleOutputReference | BackupPolicyBackupPolicyRegularFullBackupsScheduleDaySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    frequency: {
      value: cdktf.numberToHclTerraform(struct!.frequency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupPolicyBackupPolicyRegularFullBackupsScheduleDayScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BackupPolicyBackupPolicyRegularFullBackupsScheduleDaySchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._frequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.frequency = this._frequency;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupPolicyBackupPolicyRegularFullBackupsScheduleDaySchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._frequency = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._frequency = value.frequency;
    }
  }

  // frequency - computed: false, optional: false, required: true
  private _frequency?: number; 
  public get frequency() {
    return this.getNumberAttribute('frequency');
  }
  public set frequency(value: number) {
    this._frequency = value;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency;
  }
}
export interface BackupPolicyBackupPolicyRegularFullBackupsScheduleMonthSchedule {
  /**
  * Day of month to run (e.g., 18).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/backup_policy#day_of_month BackupPolicy#day_of_month}
  */
  readonly dayOfMonth?: number;
  /**
  * List of days of the week for monthly run.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/backup_policy#day_of_week BackupPolicy#day_of_week}
  */
  readonly dayOfWeek?: string[];
  /**
  * Week of month (e.g., First, Second, Last).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/backup_policy#week_of_month BackupPolicy#week_of_month}
  */
  readonly weekOfMonth?: string;
}

export function backupPolicyBackupPolicyRegularFullBackupsScheduleMonthScheduleToTerraform(struct?: BackupPolicyBackupPolicyRegularFullBackupsScheduleMonthScheduleOutputReference | BackupPolicyBackupPolicyRegularFullBackupsScheduleMonthSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day_of_month: cdktf.numberToTerraform(struct!.dayOfMonth),
    day_of_week: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dayOfWeek),
    week_of_month: cdktf.stringToTerraform(struct!.weekOfMonth),
  }
}


export function backupPolicyBackupPolicyRegularFullBackupsScheduleMonthScheduleToHclTerraform(struct?: BackupPolicyBackupPolicyRegularFullBackupsScheduleMonthScheduleOutputReference | BackupPolicyBackupPolicyRegularFullBackupsScheduleMonthSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    day_of_month: {
      value: cdktf.numberToHclTerraform(struct!.dayOfMonth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    day_of_week: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dayOfWeek),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    week_of_month: {
      value: cdktf.stringToHclTerraform(struct!.weekOfMonth),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupPolicyBackupPolicyRegularFullBackupsScheduleMonthScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BackupPolicyBackupPolicyRegularFullBackupsScheduleMonthSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dayOfMonth !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfMonth = this._dayOfMonth;
    }
    if (this._dayOfWeek !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfWeek = this._dayOfWeek;
    }
    if (this._weekOfMonth !== undefined) {
      hasAnyValues = true;
      internalValueResult.weekOfMonth = this._weekOfMonth;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupPolicyBackupPolicyRegularFullBackupsScheduleMonthSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dayOfMonth = undefined;
      this._dayOfWeek = undefined;
      this._weekOfMonth = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dayOfMonth = value.dayOfMonth;
      this._dayOfWeek = value.dayOfWeek;
      this._weekOfMonth = value.weekOfMonth;
    }
  }

  // day_of_month - computed: false, optional: true, required: false
  private _dayOfMonth?: number; 
  public get dayOfMonth() {
    return this.getNumberAttribute('day_of_month');
  }
  public set dayOfMonth(value: number) {
    this._dayOfMonth = value;
  }
  public resetDayOfMonth() {
    this._dayOfMonth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfMonthInput() {
    return this._dayOfMonth;
  }

  // day_of_week - computed: false, optional: true, required: false
  private _dayOfWeek?: string[]; 
  public get dayOfWeek() {
    return this.getListAttribute('day_of_week');
  }
  public set dayOfWeek(value: string[]) {
    this._dayOfWeek = value;
  }
  public resetDayOfWeek() {
    this._dayOfWeek = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfWeekInput() {
    return this._dayOfWeek;
  }

  // week_of_month - computed: false, optional: true, required: false
  private _weekOfMonth?: string; 
  public get weekOfMonth() {
    return this.getStringAttribute('week_of_month');
  }
  public set weekOfMonth(value: string) {
    this._weekOfMonth = value;
  }
  public resetWeekOfMonth() {
    this._weekOfMonth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weekOfMonthInput() {
    return this._weekOfMonth;
  }
}
export interface BackupPolicyBackupPolicyRegularFullBackupsScheduleWeekSchedule {
  /**
  * Days of the week to run (e.g., Monday, Tuesday).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/backup_policy#day_of_week BackupPolicy#day_of_week}
  */
  readonly dayOfWeek: string[];
}

export function backupPolicyBackupPolicyRegularFullBackupsScheduleWeekScheduleToTerraform(struct?: BackupPolicyBackupPolicyRegularFullBackupsScheduleWeekScheduleOutputReference | BackupPolicyBackupPolicyRegularFullBackupsScheduleWeekSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day_of_week: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dayOfWeek),
  }
}


export function backupPolicyBackupPolicyRegularFullBackupsScheduleWeekScheduleToHclTerraform(struct?: BackupPolicyBackupPolicyRegularFullBackupsScheduleWeekScheduleOutputReference | BackupPolicyBackupPolicyRegularFullBackupsScheduleWeekSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    day_of_week: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dayOfWeek),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupPolicyBackupPolicyRegularFullBackupsScheduleWeekScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BackupPolicyBackupPolicyRegularFullBackupsScheduleWeekSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dayOfWeek !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfWeek = this._dayOfWeek;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupPolicyBackupPolicyRegularFullBackupsScheduleWeekSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dayOfWeek = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dayOfWeek = value.dayOfWeek;
    }
  }

  // day_of_week - computed: false, optional: false, required: true
  private _dayOfWeek?: string[]; 
  public get dayOfWeek() {
    return this.getListAttribute('day_of_week');
  }
  public set dayOfWeek(value: string[]) {
    this._dayOfWeek = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfWeekInput() {
    return this._dayOfWeek;
  }
}
export interface BackupPolicyBackupPolicyRegularFullBackupsScheduleYearSchedule {
  /**
  * Day of the year to run (e.g., First, Last).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/backup_policy#day_of_year BackupPolicy#day_of_year}
  */
  readonly dayOfYear: string;
}

export function backupPolicyBackupPolicyRegularFullBackupsScheduleYearScheduleToTerraform(struct?: BackupPolicyBackupPolicyRegularFullBackupsScheduleYearScheduleOutputReference | BackupPolicyBackupPolicyRegularFullBackupsScheduleYearSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day_of_year: cdktf.stringToTerraform(struct!.dayOfYear),
  }
}


export function backupPolicyBackupPolicyRegularFullBackupsScheduleYearScheduleToHclTerraform(struct?: BackupPolicyBackupPolicyRegularFullBackupsScheduleYearScheduleOutputReference | BackupPolicyBackupPolicyRegularFullBackupsScheduleYearSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    day_of_year: {
      value: cdktf.stringToHclTerraform(struct!.dayOfYear),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupPolicyBackupPolicyRegularFullBackupsScheduleYearScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BackupPolicyBackupPolicyRegularFullBackupsScheduleYearSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dayOfYear !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfYear = this._dayOfYear;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupPolicyBackupPolicyRegularFullBackupsScheduleYearSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dayOfYear = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dayOfYear = value.dayOfYear;
    }
  }

  // day_of_year - computed: false, optional: false, required: true
  private _dayOfYear?: string; 
  public get dayOfYear() {
    return this.getStringAttribute('day_of_year');
  }
  public set dayOfYear(value: string) {
    this._dayOfYear = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfYearInput() {
    return this._dayOfYear;
  }
}
export interface BackupPolicyBackupPolicyRegularFullBackupsSchedule {
  /**
  * How often to start new runs (e.g., Days, Weeks, Months).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/backup_policy#unit BackupPolicy#unit}
  */
  readonly unit: string;
  /**
  * day_schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/backup_policy#day_schedule BackupPolicy#day_schedule}
  */
  readonly daySchedule?: BackupPolicyBackupPolicyRegularFullBackupsScheduleDaySchedule;
  /**
  * month_schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/backup_policy#month_schedule BackupPolicy#month_schedule}
  */
  readonly monthSchedule?: BackupPolicyBackupPolicyRegularFullBackupsScheduleMonthSchedule;
  /**
  * week_schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/backup_policy#week_schedule BackupPolicy#week_schedule}
  */
  readonly weekSchedule?: BackupPolicyBackupPolicyRegularFullBackupsScheduleWeekSchedule;
  /**
  * year_schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/backup_policy#year_schedule BackupPolicy#year_schedule}
  */
  readonly yearSchedule?: BackupPolicyBackupPolicyRegularFullBackupsScheduleYearSchedule;
}

export function backupPolicyBackupPolicyRegularFullBackupsScheduleToTerraform(struct?: BackupPolicyBackupPolicyRegularFullBackupsScheduleOutputReference | BackupPolicyBackupPolicyRegularFullBackupsSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    day_schedule: backupPolicyBackupPolicyRegularFullBackupsScheduleDayScheduleToTerraform(struct!.daySchedule),
    month_schedule: backupPolicyBackupPolicyRegularFullBackupsScheduleMonthScheduleToTerraform(struct!.monthSchedule),
    week_schedule: backupPolicyBackupPolicyRegularFullBackupsScheduleWeekScheduleToTerraform(struct!.weekSchedule),
    year_schedule: backupPolicyBackupPolicyRegularFullBackupsScheduleYearScheduleToTerraform(struct!.yearSchedule),
  }
}


export function backupPolicyBackupPolicyRegularFullBackupsScheduleToHclTerraform(struct?: BackupPolicyBackupPolicyRegularFullBackupsScheduleOutputReference | BackupPolicyBackupPolicyRegularFullBackupsSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    day_schedule: {
      value: backupPolicyBackupPolicyRegularFullBackupsScheduleDayScheduleToHclTerraform(struct!.daySchedule),
      isBlock: true,
      type: "list",
      storageClassType: "BackupPolicyBackupPolicyRegularFullBackupsScheduleDayScheduleList",
    },
    month_schedule: {
      value: backupPolicyBackupPolicyRegularFullBackupsScheduleMonthScheduleToHclTerraform(struct!.monthSchedule),
      isBlock: true,
      type: "list",
      storageClassType: "BackupPolicyBackupPolicyRegularFullBackupsScheduleMonthScheduleList",
    },
    week_schedule: {
      value: backupPolicyBackupPolicyRegularFullBackupsScheduleWeekScheduleToHclTerraform(struct!.weekSchedule),
      isBlock: true,
      type: "list",
      storageClassType: "BackupPolicyBackupPolicyRegularFullBackupsScheduleWeekScheduleList",
    },
    year_schedule: {
      value: backupPolicyBackupPolicyRegularFullBackupsScheduleYearScheduleToHclTerraform(struct!.yearSchedule),
      isBlock: true,
      type: "list",
      storageClassType: "BackupPolicyBackupPolicyRegularFullBackupsScheduleYearScheduleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupPolicyBackupPolicyRegularFullBackupsScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BackupPolicyBackupPolicyRegularFullBackupsSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._daySchedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.daySchedule = this._daySchedule?.internalValue;
    }
    if (this._monthSchedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.monthSchedule = this._monthSchedule?.internalValue;
    }
    if (this._weekSchedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.weekSchedule = this._weekSchedule?.internalValue;
    }
    if (this._yearSchedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.yearSchedule = this._yearSchedule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupPolicyBackupPolicyRegularFullBackupsSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._unit = undefined;
      this._daySchedule.internalValue = undefined;
      this._monthSchedule.internalValue = undefined;
      this._weekSchedule.internalValue = undefined;
      this._yearSchedule.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._unit = value.unit;
      this._daySchedule.internalValue = value.daySchedule;
      this._monthSchedule.internalValue = value.monthSchedule;
      this._weekSchedule.internalValue = value.weekSchedule;
      this._yearSchedule.internalValue = value.yearSchedule;
    }
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // day_schedule - computed: false, optional: true, required: false
  private _daySchedule = new BackupPolicyBackupPolicyRegularFullBackupsScheduleDayScheduleOutputReference(this, "day_schedule");
  public get daySchedule() {
    return this._daySchedule;
  }
  public putDaySchedule(value: BackupPolicyBackupPolicyRegularFullBackupsScheduleDaySchedule) {
    this._daySchedule.internalValue = value;
  }
  public resetDaySchedule() {
    this._daySchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayScheduleInput() {
    return this._daySchedule.internalValue;
  }

  // month_schedule - computed: false, optional: true, required: false
  private _monthSchedule = new BackupPolicyBackupPolicyRegularFullBackupsScheduleMonthScheduleOutputReference(this, "month_schedule");
  public get monthSchedule() {
    return this._monthSchedule;
  }
  public putMonthSchedule(value: BackupPolicyBackupPolicyRegularFullBackupsScheduleMonthSchedule) {
    this._monthSchedule.internalValue = value;
  }
  public resetMonthSchedule() {
    this._monthSchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthScheduleInput() {
    return this._monthSchedule.internalValue;
  }

  // week_schedule - computed: false, optional: true, required: false
  private _weekSchedule = new BackupPolicyBackupPolicyRegularFullBackupsScheduleWeekScheduleOutputReference(this, "week_schedule");
  public get weekSchedule() {
    return this._weekSchedule;
  }
  public putWeekSchedule(value: BackupPolicyBackupPolicyRegularFullBackupsScheduleWeekSchedule) {
    this._weekSchedule.internalValue = value;
  }
  public resetWeekSchedule() {
    this._weekSchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weekScheduleInput() {
    return this._weekSchedule.internalValue;
  }

  // year_schedule - computed: false, optional: true, required: false
  private _yearSchedule = new BackupPolicyBackupPolicyRegularFullBackupsScheduleYearScheduleOutputReference(this, "year_schedule");
  public get yearSchedule() {
    return this._yearSchedule;
  }
  public putYearSchedule(value: BackupPolicyBackupPolicyRegularFullBackupsScheduleYearSchedule) {
    this._yearSchedule.internalValue = value;
  }
  public resetYearSchedule() {
    this._yearSchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yearScheduleInput() {
    return this._yearSchedule.internalValue;
  }
}
export interface BackupPolicyBackupPolicyRegularFullBackups {
  /**
  * retention block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/backup_policy#retention BackupPolicy#retention}
  */
  readonly retention: BackupPolicyBackupPolicyRegularFullBackupsRetention;
  /**
  * schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/backup_policy#schedule BackupPolicy#schedule}
  */
  readonly schedule?: BackupPolicyBackupPolicyRegularFullBackupsSchedule;
}

export function backupPolicyBackupPolicyRegularFullBackupsToTerraform(struct?: BackupPolicyBackupPolicyRegularFullBackupsOutputReference | BackupPolicyBackupPolicyRegularFullBackups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    retention: backupPolicyBackupPolicyRegularFullBackupsRetentionToTerraform(struct!.retention),
    schedule: backupPolicyBackupPolicyRegularFullBackupsScheduleToTerraform(struct!.schedule),
  }
}


export function backupPolicyBackupPolicyRegularFullBackupsToHclTerraform(struct?: BackupPolicyBackupPolicyRegularFullBackupsOutputReference | BackupPolicyBackupPolicyRegularFullBackups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    retention: {
      value: backupPolicyBackupPolicyRegularFullBackupsRetentionToHclTerraform(struct!.retention),
      isBlock: true,
      type: "list",
      storageClassType: "BackupPolicyBackupPolicyRegularFullBackupsRetentionList",
    },
    schedule: {
      value: backupPolicyBackupPolicyRegularFullBackupsScheduleToHclTerraform(struct!.schedule),
      isBlock: true,
      type: "list",
      storageClassType: "BackupPolicyBackupPolicyRegularFullBackupsScheduleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupPolicyBackupPolicyRegularFullBackupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BackupPolicyBackupPolicyRegularFullBackups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._retention?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retention = this._retention?.internalValue;
    }
    if (this._schedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedule = this._schedule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupPolicyBackupPolicyRegularFullBackups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._retention.internalValue = undefined;
      this._schedule.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._retention.internalValue = value.retention;
      this._schedule.internalValue = value.schedule;
    }
  }

  // retention - computed: false, optional: false, required: true
  private _retention = new BackupPolicyBackupPolicyRegularFullBackupsRetentionOutputReference(this, "retention");
  public get retention() {
    return this._retention;
  }
  public putRetention(value: BackupPolicyBackupPolicyRegularFullBackupsRetention) {
    this._retention.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionInput() {
    return this._retention.internalValue;
  }

  // schedule - computed: false, optional: true, required: false
  private _schedule = new BackupPolicyBackupPolicyRegularFullBackupsScheduleOutputReference(this, "schedule");
  public get schedule() {
    return this._schedule;
  }
  public putSchedule(value: BackupPolicyBackupPolicyRegularFullBackupsSchedule) {
    this._schedule.internalValue = value;
  }
  public resetSchedule() {
    this._schedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule.internalValue;
  }
}
export interface BackupPolicyBackupPolicyRegularIncrementalDaySchedule {
  /**
  * Multiplier for frequency unit (e.g., every N hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/backup_policy#frequency BackupPolicy#frequency}
  */
  readonly frequency: number;
}

export function backupPolicyBackupPolicyRegularIncrementalDayScheduleToTerraform(struct?: BackupPolicyBackupPolicyRegularIncrementalDayScheduleOutputReference | BackupPolicyBackupPolicyRegularIncrementalDaySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    frequency: cdktf.numberToTerraform(struct!.frequency),
  }
}


export function backupPolicyBackupPolicyRegularIncrementalDayScheduleToHclTerraform(struct?: BackupPolicyBackupPolicyRegularIncrementalDayScheduleOutputReference | BackupPolicyBackupPolicyRegularIncrementalDaySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    frequency: {
      value: cdktf.numberToHclTerraform(struct!.frequency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupPolicyBackupPolicyRegularIncrementalDayScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BackupPolicyBackupPolicyRegularIncrementalDaySchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._frequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.frequency = this._frequency;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupPolicyBackupPolicyRegularIncrementalDaySchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._frequency = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._frequency = value.frequency;
    }
  }

  // frequency - computed: false, optional: false, required: true
  private _frequency?: number; 
  public get frequency() {
    return this.getNumberAttribute('frequency');
  }
  public set frequency(value: number) {
    this._frequency = value;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency;
  }
}
export interface BackupPolicyBackupPolicyRegularIncrementalHourSchedule {
  /**
  * Multiplier for frequency unit (e.g., every N hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/backup_policy#frequency BackupPolicy#frequency}
  */
  readonly frequency: number;
}

export function backupPolicyBackupPolicyRegularIncrementalHourScheduleToTerraform(struct?: BackupPolicyBackupPolicyRegularIncrementalHourScheduleOutputReference | BackupPolicyBackupPolicyRegularIncrementalHourSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    frequency: cdktf.numberToTerraform(struct!.frequency),
  }
}


export function backupPolicyBackupPolicyRegularIncrementalHourScheduleToHclTerraform(struct?: BackupPolicyBackupPolicyRegularIncrementalHourScheduleOutputReference | BackupPolicyBackupPolicyRegularIncrementalHourSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    frequency: {
      value: cdktf.numberToHclTerraform(struct!.frequency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupPolicyBackupPolicyRegularIncrementalHourScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BackupPolicyBackupPolicyRegularIncrementalHourSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._frequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.frequency = this._frequency;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupPolicyBackupPolicyRegularIncrementalHourSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._frequency = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._frequency = value.frequency;
    }
  }

  // frequency - computed: false, optional: false, required: true
  private _frequency?: number; 
  public get frequency() {
    return this.getNumberAttribute('frequency');
  }
  public set frequency(value: number) {
    this._frequency = value;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency;
  }
}
export interface BackupPolicyBackupPolicyRegularIncrementalMinuteSchedule {
  /**
  * Multiplier for frequency unit (e.g., every N hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/backup_policy#frequency BackupPolicy#frequency}
  */
  readonly frequency: number;
}

export function backupPolicyBackupPolicyRegularIncrementalMinuteScheduleToTerraform(struct?: BackupPolicyBackupPolicyRegularIncrementalMinuteScheduleOutputReference | BackupPolicyBackupPolicyRegularIncrementalMinuteSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    frequency: cdktf.numberToTerraform(struct!.frequency),
  }
}


export function backupPolicyBackupPolicyRegularIncrementalMinuteScheduleToHclTerraform(struct?: BackupPolicyBackupPolicyRegularIncrementalMinuteScheduleOutputReference | BackupPolicyBackupPolicyRegularIncrementalMinuteSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    frequency: {
      value: cdktf.numberToHclTerraform(struct!.frequency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupPolicyBackupPolicyRegularIncrementalMinuteScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BackupPolicyBackupPolicyRegularIncrementalMinuteSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._frequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.frequency = this._frequency;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupPolicyBackupPolicyRegularIncrementalMinuteSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._frequency = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._frequency = value.frequency;
    }
  }

  // frequency - computed: false, optional: false, required: true
  private _frequency?: number; 
  public get frequency() {
    return this.getNumberAttribute('frequency');
  }
  public set frequency(value: number) {
    this._frequency = value;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency;
  }
}
export interface BackupPolicyBackupPolicyRegularIncrementalMonthSchedule {
  /**
  * Day of month to run (e.g., 18).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/backup_policy#day_of_month BackupPolicy#day_of_month}
  */
  readonly dayOfMonth?: number;
  /**
  * List of days of the week for monthly run.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/backup_policy#day_of_week BackupPolicy#day_of_week}
  */
  readonly dayOfWeek?: string[];
  /**
  * Week of month (e.g., First, Second, Last).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/backup_policy#week_of_month BackupPolicy#week_of_month}
  */
  readonly weekOfMonth?: string;
}

export function backupPolicyBackupPolicyRegularIncrementalMonthScheduleToTerraform(struct?: BackupPolicyBackupPolicyRegularIncrementalMonthScheduleOutputReference | BackupPolicyBackupPolicyRegularIncrementalMonthSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day_of_month: cdktf.numberToTerraform(struct!.dayOfMonth),
    day_of_week: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dayOfWeek),
    week_of_month: cdktf.stringToTerraform(struct!.weekOfMonth),
  }
}


export function backupPolicyBackupPolicyRegularIncrementalMonthScheduleToHclTerraform(struct?: BackupPolicyBackupPolicyRegularIncrementalMonthScheduleOutputReference | BackupPolicyBackupPolicyRegularIncrementalMonthSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    day_of_month: {
      value: cdktf.numberToHclTerraform(struct!.dayOfMonth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    day_of_week: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dayOfWeek),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    week_of_month: {
      value: cdktf.stringToHclTerraform(struct!.weekOfMonth),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupPolicyBackupPolicyRegularIncrementalMonthScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BackupPolicyBackupPolicyRegularIncrementalMonthSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dayOfMonth !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfMonth = this._dayOfMonth;
    }
    if (this._dayOfWeek !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfWeek = this._dayOfWeek;
    }
    if (this._weekOfMonth !== undefined) {
      hasAnyValues = true;
      internalValueResult.weekOfMonth = this._weekOfMonth;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupPolicyBackupPolicyRegularIncrementalMonthSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dayOfMonth = undefined;
      this._dayOfWeek = undefined;
      this._weekOfMonth = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dayOfMonth = value.dayOfMonth;
      this._dayOfWeek = value.dayOfWeek;
      this._weekOfMonth = value.weekOfMonth;
    }
  }

  // day_of_month - computed: false, optional: true, required: false
  private _dayOfMonth?: number; 
  public get dayOfMonth() {
    return this.getNumberAttribute('day_of_month');
  }
  public set dayOfMonth(value: number) {
    this._dayOfMonth = value;
  }
  public resetDayOfMonth() {
    this._dayOfMonth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfMonthInput() {
    return this._dayOfMonth;
  }

  // day_of_week - computed: false, optional: true, required: false
  private _dayOfWeek?: string[]; 
  public get dayOfWeek() {
    return this.getListAttribute('day_of_week');
  }
  public set dayOfWeek(value: string[]) {
    this._dayOfWeek = value;
  }
  public resetDayOfWeek() {
    this._dayOfWeek = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfWeekInput() {
    return this._dayOfWeek;
  }

  // week_of_month - computed: false, optional: true, required: false
  private _weekOfMonth?: string; 
  public get weekOfMonth() {
    return this.getStringAttribute('week_of_month');
  }
  public set weekOfMonth(value: string) {
    this._weekOfMonth = value;
  }
  public resetWeekOfMonth() {
    this._weekOfMonth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weekOfMonthInput() {
    return this._weekOfMonth;
  }
}
export interface BackupPolicyBackupPolicyRegularIncrementalWeekSchedule {
  /**
  * Days of the week to run (e.g., Monday, Tuesday).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/backup_policy#day_of_week BackupPolicy#day_of_week}
  */
  readonly dayOfWeek: string[];
}

export function backupPolicyBackupPolicyRegularIncrementalWeekScheduleToTerraform(struct?: BackupPolicyBackupPolicyRegularIncrementalWeekScheduleOutputReference | BackupPolicyBackupPolicyRegularIncrementalWeekSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day_of_week: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dayOfWeek),
  }
}


export function backupPolicyBackupPolicyRegularIncrementalWeekScheduleToHclTerraform(struct?: BackupPolicyBackupPolicyRegularIncrementalWeekScheduleOutputReference | BackupPolicyBackupPolicyRegularIncrementalWeekSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    day_of_week: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dayOfWeek),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupPolicyBackupPolicyRegularIncrementalWeekScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BackupPolicyBackupPolicyRegularIncrementalWeekSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dayOfWeek !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfWeek = this._dayOfWeek;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupPolicyBackupPolicyRegularIncrementalWeekSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dayOfWeek = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dayOfWeek = value.dayOfWeek;
    }
  }

  // day_of_week - computed: false, optional: false, required: true
  private _dayOfWeek?: string[]; 
  public get dayOfWeek() {
    return this.getListAttribute('day_of_week');
  }
  public set dayOfWeek(value: string[]) {
    this._dayOfWeek = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfWeekInput() {
    return this._dayOfWeek;
  }
}
export interface BackupPolicyBackupPolicyRegularIncrementalYearSchedule {
  /**
  * Day of the year to run (e.g., First, Last).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/backup_policy#day_of_year BackupPolicy#day_of_year}
  */
  readonly dayOfYear: string;
}

export function backupPolicyBackupPolicyRegularIncrementalYearScheduleToTerraform(struct?: BackupPolicyBackupPolicyRegularIncrementalYearScheduleOutputReference | BackupPolicyBackupPolicyRegularIncrementalYearSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day_of_year: cdktf.stringToTerraform(struct!.dayOfYear),
  }
}


export function backupPolicyBackupPolicyRegularIncrementalYearScheduleToHclTerraform(struct?: BackupPolicyBackupPolicyRegularIncrementalYearScheduleOutputReference | BackupPolicyBackupPolicyRegularIncrementalYearSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    day_of_year: {
      value: cdktf.stringToHclTerraform(struct!.dayOfYear),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupPolicyBackupPolicyRegularIncrementalYearScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BackupPolicyBackupPolicyRegularIncrementalYearSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dayOfYear !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfYear = this._dayOfYear;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupPolicyBackupPolicyRegularIncrementalYearSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dayOfYear = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dayOfYear = value.dayOfYear;
    }
  }

  // day_of_year - computed: false, optional: false, required: true
  private _dayOfYear?: string; 
  public get dayOfYear() {
    return this.getStringAttribute('day_of_year');
  }
  public set dayOfYear(value: string) {
    this._dayOfYear = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfYearInput() {
    return this._dayOfYear;
  }
}
export interface BackupPolicyBackupPolicyRegularIncremental {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/backup_policy#unit BackupPolicy#unit}
  */
  readonly unit: string;
  /**
  * day_schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/backup_policy#day_schedule BackupPolicy#day_schedule}
  */
  readonly daySchedule?: BackupPolicyBackupPolicyRegularIncrementalDaySchedule;
  /**
  * hour_schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/backup_policy#hour_schedule BackupPolicy#hour_schedule}
  */
  readonly hourSchedule?: BackupPolicyBackupPolicyRegularIncrementalHourSchedule;
  /**
  * minute_schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/backup_policy#minute_schedule BackupPolicy#minute_schedule}
  */
  readonly minuteSchedule?: BackupPolicyBackupPolicyRegularIncrementalMinuteSchedule;
  /**
  * month_schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/backup_policy#month_schedule BackupPolicy#month_schedule}
  */
  readonly monthSchedule?: BackupPolicyBackupPolicyRegularIncrementalMonthSchedule;
  /**
  * week_schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/backup_policy#week_schedule BackupPolicy#week_schedule}
  */
  readonly weekSchedule?: BackupPolicyBackupPolicyRegularIncrementalWeekSchedule;
  /**
  * year_schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/backup_policy#year_schedule BackupPolicy#year_schedule}
  */
  readonly yearSchedule?: BackupPolicyBackupPolicyRegularIncrementalYearSchedule;
}

export function backupPolicyBackupPolicyRegularIncrementalToTerraform(struct?: BackupPolicyBackupPolicyRegularIncrementalOutputReference | BackupPolicyBackupPolicyRegularIncremental): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    day_schedule: backupPolicyBackupPolicyRegularIncrementalDayScheduleToTerraform(struct!.daySchedule),
    hour_schedule: backupPolicyBackupPolicyRegularIncrementalHourScheduleToTerraform(struct!.hourSchedule),
    minute_schedule: backupPolicyBackupPolicyRegularIncrementalMinuteScheduleToTerraform(struct!.minuteSchedule),
    month_schedule: backupPolicyBackupPolicyRegularIncrementalMonthScheduleToTerraform(struct!.monthSchedule),
    week_schedule: backupPolicyBackupPolicyRegularIncrementalWeekScheduleToTerraform(struct!.weekSchedule),
    year_schedule: backupPolicyBackupPolicyRegularIncrementalYearScheduleToTerraform(struct!.yearSchedule),
  }
}


export function backupPolicyBackupPolicyRegularIncrementalToHclTerraform(struct?: BackupPolicyBackupPolicyRegularIncrementalOutputReference | BackupPolicyBackupPolicyRegularIncremental): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    day_schedule: {
      value: backupPolicyBackupPolicyRegularIncrementalDayScheduleToHclTerraform(struct!.daySchedule),
      isBlock: true,
      type: "list",
      storageClassType: "BackupPolicyBackupPolicyRegularIncrementalDayScheduleList",
    },
    hour_schedule: {
      value: backupPolicyBackupPolicyRegularIncrementalHourScheduleToHclTerraform(struct!.hourSchedule),
      isBlock: true,
      type: "list",
      storageClassType: "BackupPolicyBackupPolicyRegularIncrementalHourScheduleList",
    },
    minute_schedule: {
      value: backupPolicyBackupPolicyRegularIncrementalMinuteScheduleToHclTerraform(struct!.minuteSchedule),
      isBlock: true,
      type: "list",
      storageClassType: "BackupPolicyBackupPolicyRegularIncrementalMinuteScheduleList",
    },
    month_schedule: {
      value: backupPolicyBackupPolicyRegularIncrementalMonthScheduleToHclTerraform(struct!.monthSchedule),
      isBlock: true,
      type: "list",
      storageClassType: "BackupPolicyBackupPolicyRegularIncrementalMonthScheduleList",
    },
    week_schedule: {
      value: backupPolicyBackupPolicyRegularIncrementalWeekScheduleToHclTerraform(struct!.weekSchedule),
      isBlock: true,
      type: "list",
      storageClassType: "BackupPolicyBackupPolicyRegularIncrementalWeekScheduleList",
    },
    year_schedule: {
      value: backupPolicyBackupPolicyRegularIncrementalYearScheduleToHclTerraform(struct!.yearSchedule),
      isBlock: true,
      type: "list",
      storageClassType: "BackupPolicyBackupPolicyRegularIncrementalYearScheduleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupPolicyBackupPolicyRegularIncrementalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BackupPolicyBackupPolicyRegularIncremental | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._daySchedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.daySchedule = this._daySchedule?.internalValue;
    }
    if (this._hourSchedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hourSchedule = this._hourSchedule?.internalValue;
    }
    if (this._minuteSchedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.minuteSchedule = this._minuteSchedule?.internalValue;
    }
    if (this._monthSchedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.monthSchedule = this._monthSchedule?.internalValue;
    }
    if (this._weekSchedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.weekSchedule = this._weekSchedule?.internalValue;
    }
    if (this._yearSchedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.yearSchedule = this._yearSchedule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupPolicyBackupPolicyRegularIncremental | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._unit = undefined;
      this._daySchedule.internalValue = undefined;
      this._hourSchedule.internalValue = undefined;
      this._minuteSchedule.internalValue = undefined;
      this._monthSchedule.internalValue = undefined;
      this._weekSchedule.internalValue = undefined;
      this._yearSchedule.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._unit = value.unit;
      this._daySchedule.internalValue = value.daySchedule;
      this._hourSchedule.internalValue = value.hourSchedule;
      this._minuteSchedule.internalValue = value.minuteSchedule;
      this._monthSchedule.internalValue = value.monthSchedule;
      this._weekSchedule.internalValue = value.weekSchedule;
      this._yearSchedule.internalValue = value.yearSchedule;
    }
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // day_schedule - computed: false, optional: true, required: false
  private _daySchedule = new BackupPolicyBackupPolicyRegularIncrementalDayScheduleOutputReference(this, "day_schedule");
  public get daySchedule() {
    return this._daySchedule;
  }
  public putDaySchedule(value: BackupPolicyBackupPolicyRegularIncrementalDaySchedule) {
    this._daySchedule.internalValue = value;
  }
  public resetDaySchedule() {
    this._daySchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayScheduleInput() {
    return this._daySchedule.internalValue;
  }

  // hour_schedule - computed: false, optional: true, required: false
  private _hourSchedule = new BackupPolicyBackupPolicyRegularIncrementalHourScheduleOutputReference(this, "hour_schedule");
  public get hourSchedule() {
    return this._hourSchedule;
  }
  public putHourSchedule(value: BackupPolicyBackupPolicyRegularIncrementalHourSchedule) {
    this._hourSchedule.internalValue = value;
  }
  public resetHourSchedule() {
    this._hourSchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hourScheduleInput() {
    return this._hourSchedule.internalValue;
  }

  // minute_schedule - computed: false, optional: true, required: false
  private _minuteSchedule = new BackupPolicyBackupPolicyRegularIncrementalMinuteScheduleOutputReference(this, "minute_schedule");
  public get minuteSchedule() {
    return this._minuteSchedule;
  }
  public putMinuteSchedule(value: BackupPolicyBackupPolicyRegularIncrementalMinuteSchedule) {
    this._minuteSchedule.internalValue = value;
  }
  public resetMinuteSchedule() {
    this._minuteSchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minuteScheduleInput() {
    return this._minuteSchedule.internalValue;
  }

  // month_schedule - computed: false, optional: true, required: false
  private _monthSchedule = new BackupPolicyBackupPolicyRegularIncrementalMonthScheduleOutputReference(this, "month_schedule");
  public get monthSchedule() {
    return this._monthSchedule;
  }
  public putMonthSchedule(value: BackupPolicyBackupPolicyRegularIncrementalMonthSchedule) {
    this._monthSchedule.internalValue = value;
  }
  public resetMonthSchedule() {
    this._monthSchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthScheduleInput() {
    return this._monthSchedule.internalValue;
  }

  // week_schedule - computed: false, optional: true, required: false
  private _weekSchedule = new BackupPolicyBackupPolicyRegularIncrementalWeekScheduleOutputReference(this, "week_schedule");
  public get weekSchedule() {
    return this._weekSchedule;
  }
  public putWeekSchedule(value: BackupPolicyBackupPolicyRegularIncrementalWeekSchedule) {
    this._weekSchedule.internalValue = value;
  }
  public resetWeekSchedule() {
    this._weekSchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weekScheduleInput() {
    return this._weekSchedule.internalValue;
  }

  // year_schedule - computed: false, optional: true, required: false
  private _yearSchedule = new BackupPolicyBackupPolicyRegularIncrementalYearScheduleOutputReference(this, "year_schedule");
  public get yearSchedule() {
    return this._yearSchedule;
  }
  public putYearSchedule(value: BackupPolicyBackupPolicyRegularIncrementalYearSchedule) {
    this._yearSchedule.internalValue = value;
  }
  public resetYearSchedule() {
    this._yearSchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yearScheduleInput() {
    return this._yearSchedule.internalValue;
  }
}
export interface BackupPolicyBackupPolicyRegularRetentionDataLockConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/backup_policy#duration BackupPolicy#duration}
  */
  readonly duration: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/backup_policy#enable_worm_on_external_target BackupPolicy#enable_worm_on_external_target}
  */
  readonly enableWormOnExternalTarget?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/backup_policy#mode BackupPolicy#mode}
  */
  readonly mode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/backup_policy#unit BackupPolicy#unit}
  */
  readonly unit: string;
}

export function backupPolicyBackupPolicyRegularRetentionDataLockConfigToTerraform(struct?: BackupPolicyBackupPolicyRegularRetentionDataLockConfigOutputReference | BackupPolicyBackupPolicyRegularRetentionDataLockConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.numberToTerraform(struct!.duration),
    enable_worm_on_external_target: cdktf.booleanToTerraform(struct!.enableWormOnExternalTarget),
    mode: cdktf.stringToTerraform(struct!.mode),
    unit: cdktf.stringToTerraform(struct!.unit),
  }
}


export function backupPolicyBackupPolicyRegularRetentionDataLockConfigToHclTerraform(struct?: BackupPolicyBackupPolicyRegularRetentionDataLockConfigOutputReference | BackupPolicyBackupPolicyRegularRetentionDataLockConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.numberToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enable_worm_on_external_target: {
      value: cdktf.booleanToHclTerraform(struct!.enableWormOnExternalTarget),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupPolicyBackupPolicyRegularRetentionDataLockConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BackupPolicyBackupPolicyRegularRetentionDataLockConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._enableWormOnExternalTarget !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableWormOnExternalTarget = this._enableWormOnExternalTarget;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupPolicyBackupPolicyRegularRetentionDataLockConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._duration = undefined;
      this._enableWormOnExternalTarget = undefined;
      this._mode = undefined;
      this._unit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._duration = value.duration;
      this._enableWormOnExternalTarget = value.enableWormOnExternalTarget;
      this._mode = value.mode;
      this._unit = value.unit;
    }
  }

  // duration - computed: false, optional: false, required: true
  private _duration?: number; 
  public get duration() {
    return this.getNumberAttribute('duration');
  }
  public set duration(value: number) {
    this._duration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // enable_worm_on_external_target - computed: false, optional: true, required: false
  private _enableWormOnExternalTarget?: boolean | cdktf.IResolvable; 
  public get enableWormOnExternalTarget() {
    return this.getBooleanAttribute('enable_worm_on_external_target');
  }
  public set enableWormOnExternalTarget(value: boolean | cdktf.IResolvable) {
    this._enableWormOnExternalTarget = value;
  }
  public resetEnableWormOnExternalTarget() {
    this._enableWormOnExternalTarget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableWormOnExternalTargetInput() {
    return this._enableWormOnExternalTarget;
  }

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }
}
export interface BackupPolicyBackupPolicyRegularRetention {
  /**
  * Specifies the duration for a backup retention.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/backup_policy#duration BackupPolicy#duration}
  */
  readonly duration: number;
  /**
  * Specifies the Retention Unit of a backup measured in days, months or years. If unit is 'Months', then number specified in duration is multiplied by 30. If 'Years', it is multiplied by 365.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/backup_policy#unit BackupPolicy#unit}
  */
  readonly unit: string;
  /**
  * data_lock_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/backup_policy#data_lock_config BackupPolicy#data_lock_config}
  */
  readonly dataLockConfig?: BackupPolicyBackupPolicyRegularRetentionDataLockConfig;
}

export function backupPolicyBackupPolicyRegularRetentionToTerraform(struct?: BackupPolicyBackupPolicyRegularRetentionOutputReference | BackupPolicyBackupPolicyRegularRetention): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.numberToTerraform(struct!.duration),
    unit: cdktf.stringToTerraform(struct!.unit),
    data_lock_config: backupPolicyBackupPolicyRegularRetentionDataLockConfigToTerraform(struct!.dataLockConfig),
  }
}


export function backupPolicyBackupPolicyRegularRetentionToHclTerraform(struct?: BackupPolicyBackupPolicyRegularRetentionOutputReference | BackupPolicyBackupPolicyRegularRetention): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.numberToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_lock_config: {
      value: backupPolicyBackupPolicyRegularRetentionDataLockConfigToHclTerraform(struct!.dataLockConfig),
      isBlock: true,
      type: "list",
      storageClassType: "BackupPolicyBackupPolicyRegularRetentionDataLockConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupPolicyBackupPolicyRegularRetentionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BackupPolicyBackupPolicyRegularRetention | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._dataLockConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataLockConfig = this._dataLockConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupPolicyBackupPolicyRegularRetention | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._duration = undefined;
      this._unit = undefined;
      this._dataLockConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._duration = value.duration;
      this._unit = value.unit;
      this._dataLockConfig.internalValue = value.dataLockConfig;
    }
  }

  // duration - computed: false, optional: false, required: true
  private _duration?: number; 
  public get duration() {
    return this.getNumberAttribute('duration');
  }
  public set duration(value: number) {
    this._duration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // data_lock_config - computed: false, optional: true, required: false
  private _dataLockConfig = new BackupPolicyBackupPolicyRegularRetentionDataLockConfigOutputReference(this, "data_lock_config");
  public get dataLockConfig() {
    return this._dataLockConfig;
  }
  public putDataLockConfig(value: BackupPolicyBackupPolicyRegularRetentionDataLockConfig) {
    this._dataLockConfig.internalValue = value;
  }
  public resetDataLockConfig() {
    this._dataLockConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataLockConfigInput() {
    return this._dataLockConfig.internalValue;
  }
}
export interface BackupPolicyBackupPolicyRegular {
  /**
  * full block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/backup_policy#full BackupPolicy#full}
  */
  readonly full?: BackupPolicyBackupPolicyRegularFull;
  /**
  * full_backups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/backup_policy#full_backups BackupPolicy#full_backups}
  */
  readonly fullBackups?: BackupPolicyBackupPolicyRegularFullBackups;
  /**
  * incremental block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/backup_policy#incremental BackupPolicy#incremental}
  */
  readonly incremental?: BackupPolicyBackupPolicyRegularIncremental;
  /**
  * retention block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/backup_policy#retention BackupPolicy#retention}
  */
  readonly retention: BackupPolicyBackupPolicyRegularRetention;
}

export function backupPolicyBackupPolicyRegularToTerraform(struct?: BackupPolicyBackupPolicyRegularOutputReference | BackupPolicyBackupPolicyRegular): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    full: backupPolicyBackupPolicyRegularFullToTerraform(struct!.full),
    full_backups: backupPolicyBackupPolicyRegularFullBackupsToTerraform(struct!.fullBackups),
    incremental: backupPolicyBackupPolicyRegularIncrementalToTerraform(struct!.incremental),
    retention: backupPolicyBackupPolicyRegularRetentionToTerraform(struct!.retention),
  }
}


export function backupPolicyBackupPolicyRegularToHclTerraform(struct?: BackupPolicyBackupPolicyRegularOutputReference | BackupPolicyBackupPolicyRegular): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    full: {
      value: backupPolicyBackupPolicyRegularFullToHclTerraform(struct!.full),
      isBlock: true,
      type: "list",
      storageClassType: "BackupPolicyBackupPolicyRegularFullList",
    },
    full_backups: {
      value: backupPolicyBackupPolicyRegularFullBackupsToHclTerraform(struct!.fullBackups),
      isBlock: true,
      type: "list",
      storageClassType: "BackupPolicyBackupPolicyRegularFullBackupsList",
    },
    incremental: {
      value: backupPolicyBackupPolicyRegularIncrementalToHclTerraform(struct!.incremental),
      isBlock: true,
      type: "list",
      storageClassType: "BackupPolicyBackupPolicyRegularIncrementalList",
    },
    retention: {
      value: backupPolicyBackupPolicyRegularRetentionToHclTerraform(struct!.retention),
      isBlock: true,
      type: "list",
      storageClassType: "BackupPolicyBackupPolicyRegularRetentionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupPolicyBackupPolicyRegularOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BackupPolicyBackupPolicyRegular | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._full?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.full = this._full?.internalValue;
    }
    if (this._fullBackups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fullBackups = this._fullBackups?.internalValue;
    }
    if (this._incremental?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.incremental = this._incremental?.internalValue;
    }
    if (this._retention?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retention = this._retention?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupPolicyBackupPolicyRegular | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._full.internalValue = undefined;
      this._fullBackups.internalValue = undefined;
      this._incremental.internalValue = undefined;
      this._retention.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._full.internalValue = value.full;
      this._fullBackups.internalValue = value.fullBackups;
      this._incremental.internalValue = value.incremental;
      this._retention.internalValue = value.retention;
    }
  }

  // full - computed: false, optional: true, required: false
  private _full = new BackupPolicyBackupPolicyRegularFullOutputReference(this, "full");
  public get full() {
    return this._full;
  }
  public putFull(value: BackupPolicyBackupPolicyRegularFull) {
    this._full.internalValue = value;
  }
  public resetFull() {
    this._full.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullInput() {
    return this._full.internalValue;
  }

  // full_backups - computed: false, optional: true, required: false
  private _fullBackups = new BackupPolicyBackupPolicyRegularFullBackupsOutputReference(this, "full_backups");
  public get fullBackups() {
    return this._fullBackups;
  }
  public putFullBackups(value: BackupPolicyBackupPolicyRegularFullBackups) {
    this._fullBackups.internalValue = value;
  }
  public resetFullBackups() {
    this._fullBackups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullBackupsInput() {
    return this._fullBackups.internalValue;
  }

  // incremental - computed: false, optional: true, required: false
  private _incremental = new BackupPolicyBackupPolicyRegularIncrementalOutputReference(this, "incremental");
  public get incremental() {
    return this._incremental;
  }
  public putIncremental(value: BackupPolicyBackupPolicyRegularIncremental) {
    this._incremental.internalValue = value;
  }
  public resetIncremental() {
    this._incremental.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get incrementalInput() {
    return this._incremental.internalValue;
  }

  // retention - computed: false, optional: false, required: true
  private _retention = new BackupPolicyBackupPolicyRegularRetentionOutputReference(this, "retention");
  public get retention() {
    return this._retention;
  }
  public putRetention(value: BackupPolicyBackupPolicyRegularRetention) {
    this._retention.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionInput() {
    return this._retention.internalValue;
  }
}
export interface BackupPolicyBackupPolicyRunTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/backup_policy#backup_type BackupPolicy#backup_type}
  */
  readonly backupType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/backup_policy#timeout_minutes BackupPolicy#timeout_minutes}
  */
  readonly timeoutMinutes?: number;
}

export function backupPolicyBackupPolicyRunTimeoutsToTerraform(struct?: BackupPolicyBackupPolicyRunTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backup_type: cdktf.stringToTerraform(struct!.backupType),
    timeout_minutes: cdktf.numberToTerraform(struct!.timeoutMinutes),
  }
}


export function backupPolicyBackupPolicyRunTimeoutsToHclTerraform(struct?: BackupPolicyBackupPolicyRunTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backup_type: {
      value: cdktf.stringToHclTerraform(struct!.backupType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout_minutes: {
      value: cdktf.numberToHclTerraform(struct!.timeoutMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupPolicyBackupPolicyRunTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): BackupPolicyBackupPolicyRunTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backupType !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupType = this._backupType;
    }
    if (this._timeoutMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutMinutes = this._timeoutMinutes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupPolicyBackupPolicyRunTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backupType = undefined;
      this._timeoutMinutes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backupType = value.backupType;
      this._timeoutMinutes = value.timeoutMinutes;
    }
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

  // timeout_minutes - computed: false, optional: true, required: false
  private _timeoutMinutes?: number; 
  public get timeoutMinutes() {
    return this.getNumberAttribute('timeout_minutes');
  }
  public set timeoutMinutes(value: number) {
    this._timeoutMinutes = value;
  }
  public resetTimeoutMinutes() {
    this._timeoutMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutMinutesInput() {
    return this._timeoutMinutes;
  }
}

export class BackupPolicyBackupPolicyRunTimeoutsList extends cdktf.ComplexList {
  public internalValue? : BackupPolicyBackupPolicyRunTimeouts[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): BackupPolicyBackupPolicyRunTimeoutsOutputReference {
    return new BackupPolicyBackupPolicyRunTimeoutsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BackupPolicyBackupPolicyStorageArraySnapshotRetentionDataLockConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/backup_policy#duration BackupPolicy#duration}
  */
  readonly duration: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/backup_policy#enable_worm_on_external_target BackupPolicy#enable_worm_on_external_target}
  */
  readonly enableWormOnExternalTarget?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/backup_policy#mode BackupPolicy#mode}
  */
  readonly mode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/backup_policy#unit BackupPolicy#unit}
  */
  readonly unit: string;
}

export function backupPolicyBackupPolicyStorageArraySnapshotRetentionDataLockConfigToTerraform(struct?: BackupPolicyBackupPolicyStorageArraySnapshotRetentionDataLockConfigOutputReference | BackupPolicyBackupPolicyStorageArraySnapshotRetentionDataLockConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.numberToTerraform(struct!.duration),
    enable_worm_on_external_target: cdktf.booleanToTerraform(struct!.enableWormOnExternalTarget),
    mode: cdktf.stringToTerraform(struct!.mode),
    unit: cdktf.stringToTerraform(struct!.unit),
  }
}


export function backupPolicyBackupPolicyStorageArraySnapshotRetentionDataLockConfigToHclTerraform(struct?: BackupPolicyBackupPolicyStorageArraySnapshotRetentionDataLockConfigOutputReference | BackupPolicyBackupPolicyStorageArraySnapshotRetentionDataLockConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.numberToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enable_worm_on_external_target: {
      value: cdktf.booleanToHclTerraform(struct!.enableWormOnExternalTarget),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupPolicyBackupPolicyStorageArraySnapshotRetentionDataLockConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BackupPolicyBackupPolicyStorageArraySnapshotRetentionDataLockConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._enableWormOnExternalTarget !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableWormOnExternalTarget = this._enableWormOnExternalTarget;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupPolicyBackupPolicyStorageArraySnapshotRetentionDataLockConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._duration = undefined;
      this._enableWormOnExternalTarget = undefined;
      this._mode = undefined;
      this._unit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._duration = value.duration;
      this._enableWormOnExternalTarget = value.enableWormOnExternalTarget;
      this._mode = value.mode;
      this._unit = value.unit;
    }
  }

  // duration - computed: false, optional: false, required: true
  private _duration?: number; 
  public get duration() {
    return this.getNumberAttribute('duration');
  }
  public set duration(value: number) {
    this._duration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // enable_worm_on_external_target - computed: false, optional: true, required: false
  private _enableWormOnExternalTarget?: boolean | cdktf.IResolvable; 
  public get enableWormOnExternalTarget() {
    return this.getBooleanAttribute('enable_worm_on_external_target');
  }
  public set enableWormOnExternalTarget(value: boolean | cdktf.IResolvable) {
    this._enableWormOnExternalTarget = value;
  }
  public resetEnableWormOnExternalTarget() {
    this._enableWormOnExternalTarget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableWormOnExternalTargetInput() {
    return this._enableWormOnExternalTarget;
  }

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }
}
export interface BackupPolicyBackupPolicyStorageArraySnapshotRetention {
  /**
  * Specifies the duration for a backup retention.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/backup_policy#duration BackupPolicy#duration}
  */
  readonly duration: number;
  /**
  * Specifies the Retention Unit of a backup measured in days, months or years. If unit is 'Months', then number specified in duration is multiplied by 30. If 'Years', it is multiplied by 365.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/backup_policy#unit BackupPolicy#unit}
  */
  readonly unit: string;
  /**
  * data_lock_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/backup_policy#data_lock_config BackupPolicy#data_lock_config}
  */
  readonly dataLockConfig?: BackupPolicyBackupPolicyStorageArraySnapshotRetentionDataLockConfig;
}

export function backupPolicyBackupPolicyStorageArraySnapshotRetentionToTerraform(struct?: BackupPolicyBackupPolicyStorageArraySnapshotRetentionOutputReference | BackupPolicyBackupPolicyStorageArraySnapshotRetention): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.numberToTerraform(struct!.duration),
    unit: cdktf.stringToTerraform(struct!.unit),
    data_lock_config: backupPolicyBackupPolicyStorageArraySnapshotRetentionDataLockConfigToTerraform(struct!.dataLockConfig),
  }
}


export function backupPolicyBackupPolicyStorageArraySnapshotRetentionToHclTerraform(struct?: BackupPolicyBackupPolicyStorageArraySnapshotRetentionOutputReference | BackupPolicyBackupPolicyStorageArraySnapshotRetention): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.numberToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_lock_config: {
      value: backupPolicyBackupPolicyStorageArraySnapshotRetentionDataLockConfigToHclTerraform(struct!.dataLockConfig),
      isBlock: true,
      type: "list",
      storageClassType: "BackupPolicyBackupPolicyStorageArraySnapshotRetentionDataLockConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupPolicyBackupPolicyStorageArraySnapshotRetentionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BackupPolicyBackupPolicyStorageArraySnapshotRetention | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._dataLockConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataLockConfig = this._dataLockConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupPolicyBackupPolicyStorageArraySnapshotRetention | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._duration = undefined;
      this._unit = undefined;
      this._dataLockConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._duration = value.duration;
      this._unit = value.unit;
      this._dataLockConfig.internalValue = value.dataLockConfig;
    }
  }

  // duration - computed: false, optional: false, required: true
  private _duration?: number; 
  public get duration() {
    return this.getNumberAttribute('duration');
  }
  public set duration(value: number) {
    this._duration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // data_lock_config - computed: false, optional: true, required: false
  private _dataLockConfig = new BackupPolicyBackupPolicyStorageArraySnapshotRetentionDataLockConfigOutputReference(this, "data_lock_config");
  public get dataLockConfig() {
    return this._dataLockConfig;
  }
  public putDataLockConfig(value: BackupPolicyBackupPolicyStorageArraySnapshotRetentionDataLockConfig) {
    this._dataLockConfig.internalValue = value;
  }
  public resetDataLockConfig() {
    this._dataLockConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataLockConfigInput() {
    return this._dataLockConfig.internalValue;
  }
}
export interface BackupPolicyBackupPolicyStorageArraySnapshotScheduleDaySchedule {
  /**
  * Multiplier for frequency unit (e.g., every N hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/backup_policy#frequency BackupPolicy#frequency}
  */
  readonly frequency: number;
}

export function backupPolicyBackupPolicyStorageArraySnapshotScheduleDayScheduleToTerraform(struct?: BackupPolicyBackupPolicyStorageArraySnapshotScheduleDayScheduleOutputReference | BackupPolicyBackupPolicyStorageArraySnapshotScheduleDaySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    frequency: cdktf.numberToTerraform(struct!.frequency),
  }
}


export function backupPolicyBackupPolicyStorageArraySnapshotScheduleDayScheduleToHclTerraform(struct?: BackupPolicyBackupPolicyStorageArraySnapshotScheduleDayScheduleOutputReference | BackupPolicyBackupPolicyStorageArraySnapshotScheduleDaySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    frequency: {
      value: cdktf.numberToHclTerraform(struct!.frequency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupPolicyBackupPolicyStorageArraySnapshotScheduleDayScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BackupPolicyBackupPolicyStorageArraySnapshotScheduleDaySchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._frequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.frequency = this._frequency;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupPolicyBackupPolicyStorageArraySnapshotScheduleDaySchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._frequency = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._frequency = value.frequency;
    }
  }

  // frequency - computed: false, optional: false, required: true
  private _frequency?: number; 
  public get frequency() {
    return this.getNumberAttribute('frequency');
  }
  public set frequency(value: number) {
    this._frequency = value;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency;
  }
}
export interface BackupPolicyBackupPolicyStorageArraySnapshotScheduleHourSchedule {
  /**
  * Multiplier for frequency unit (e.g., every N hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/backup_policy#frequency BackupPolicy#frequency}
  */
  readonly frequency: number;
}

export function backupPolicyBackupPolicyStorageArraySnapshotScheduleHourScheduleToTerraform(struct?: BackupPolicyBackupPolicyStorageArraySnapshotScheduleHourScheduleOutputReference | BackupPolicyBackupPolicyStorageArraySnapshotScheduleHourSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    frequency: cdktf.numberToTerraform(struct!.frequency),
  }
}


export function backupPolicyBackupPolicyStorageArraySnapshotScheduleHourScheduleToHclTerraform(struct?: BackupPolicyBackupPolicyStorageArraySnapshotScheduleHourScheduleOutputReference | BackupPolicyBackupPolicyStorageArraySnapshotScheduleHourSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    frequency: {
      value: cdktf.numberToHclTerraform(struct!.frequency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupPolicyBackupPolicyStorageArraySnapshotScheduleHourScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BackupPolicyBackupPolicyStorageArraySnapshotScheduleHourSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._frequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.frequency = this._frequency;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupPolicyBackupPolicyStorageArraySnapshotScheduleHourSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._frequency = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._frequency = value.frequency;
    }
  }

  // frequency - computed: false, optional: false, required: true
  private _frequency?: number; 
  public get frequency() {
    return this.getNumberAttribute('frequency');
  }
  public set frequency(value: number) {
    this._frequency = value;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency;
  }
}
export interface BackupPolicyBackupPolicyStorageArraySnapshotScheduleMinuteSchedule {
  /**
  * Multiplier for frequency unit (e.g., every N hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/backup_policy#frequency BackupPolicy#frequency}
  */
  readonly frequency: number;
}

export function backupPolicyBackupPolicyStorageArraySnapshotScheduleMinuteScheduleToTerraform(struct?: BackupPolicyBackupPolicyStorageArraySnapshotScheduleMinuteScheduleOutputReference | BackupPolicyBackupPolicyStorageArraySnapshotScheduleMinuteSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    frequency: cdktf.numberToTerraform(struct!.frequency),
  }
}


export function backupPolicyBackupPolicyStorageArraySnapshotScheduleMinuteScheduleToHclTerraform(struct?: BackupPolicyBackupPolicyStorageArraySnapshotScheduleMinuteScheduleOutputReference | BackupPolicyBackupPolicyStorageArraySnapshotScheduleMinuteSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    frequency: {
      value: cdktf.numberToHclTerraform(struct!.frequency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupPolicyBackupPolicyStorageArraySnapshotScheduleMinuteScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BackupPolicyBackupPolicyStorageArraySnapshotScheduleMinuteSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._frequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.frequency = this._frequency;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupPolicyBackupPolicyStorageArraySnapshotScheduleMinuteSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._frequency = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._frequency = value.frequency;
    }
  }

  // frequency - computed: false, optional: false, required: true
  private _frequency?: number; 
  public get frequency() {
    return this.getNumberAttribute('frequency');
  }
  public set frequency(value: number) {
    this._frequency = value;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency;
  }
}
export interface BackupPolicyBackupPolicyStorageArraySnapshotScheduleMonthSchedule {
  /**
  * Day of month to run (e.g., 18).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/backup_policy#day_of_month BackupPolicy#day_of_month}
  */
  readonly dayOfMonth?: number;
  /**
  * List of days of the week for monthly run.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/backup_policy#day_of_week BackupPolicy#day_of_week}
  */
  readonly dayOfWeek?: string[];
  /**
  * Week of month (e.g., First, Second, Last).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/backup_policy#week_of_month BackupPolicy#week_of_month}
  */
  readonly weekOfMonth?: string;
}

export function backupPolicyBackupPolicyStorageArraySnapshotScheduleMonthScheduleToTerraform(struct?: BackupPolicyBackupPolicyStorageArraySnapshotScheduleMonthScheduleOutputReference | BackupPolicyBackupPolicyStorageArraySnapshotScheduleMonthSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day_of_month: cdktf.numberToTerraform(struct!.dayOfMonth),
    day_of_week: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dayOfWeek),
    week_of_month: cdktf.stringToTerraform(struct!.weekOfMonth),
  }
}


export function backupPolicyBackupPolicyStorageArraySnapshotScheduleMonthScheduleToHclTerraform(struct?: BackupPolicyBackupPolicyStorageArraySnapshotScheduleMonthScheduleOutputReference | BackupPolicyBackupPolicyStorageArraySnapshotScheduleMonthSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    day_of_month: {
      value: cdktf.numberToHclTerraform(struct!.dayOfMonth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    day_of_week: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dayOfWeek),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    week_of_month: {
      value: cdktf.stringToHclTerraform(struct!.weekOfMonth),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupPolicyBackupPolicyStorageArraySnapshotScheduleMonthScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BackupPolicyBackupPolicyStorageArraySnapshotScheduleMonthSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dayOfMonth !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfMonth = this._dayOfMonth;
    }
    if (this._dayOfWeek !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfWeek = this._dayOfWeek;
    }
    if (this._weekOfMonth !== undefined) {
      hasAnyValues = true;
      internalValueResult.weekOfMonth = this._weekOfMonth;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupPolicyBackupPolicyStorageArraySnapshotScheduleMonthSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dayOfMonth = undefined;
      this._dayOfWeek = undefined;
      this._weekOfMonth = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dayOfMonth = value.dayOfMonth;
      this._dayOfWeek = value.dayOfWeek;
      this._weekOfMonth = value.weekOfMonth;
    }
  }

  // day_of_month - computed: false, optional: true, required: false
  private _dayOfMonth?: number; 
  public get dayOfMonth() {
    return this.getNumberAttribute('day_of_month');
  }
  public set dayOfMonth(value: number) {
    this._dayOfMonth = value;
  }
  public resetDayOfMonth() {
    this._dayOfMonth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfMonthInput() {
    return this._dayOfMonth;
  }

  // day_of_week - computed: false, optional: true, required: false
  private _dayOfWeek?: string[]; 
  public get dayOfWeek() {
    return this.getListAttribute('day_of_week');
  }
  public set dayOfWeek(value: string[]) {
    this._dayOfWeek = value;
  }
  public resetDayOfWeek() {
    this._dayOfWeek = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfWeekInput() {
    return this._dayOfWeek;
  }

  // week_of_month - computed: false, optional: true, required: false
  private _weekOfMonth?: string; 
  public get weekOfMonth() {
    return this.getStringAttribute('week_of_month');
  }
  public set weekOfMonth(value: string) {
    this._weekOfMonth = value;
  }
  public resetWeekOfMonth() {
    this._weekOfMonth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weekOfMonthInput() {
    return this._weekOfMonth;
  }
}
export interface BackupPolicyBackupPolicyStorageArraySnapshotScheduleWeekSchedule {
  /**
  * Days of the week to run (e.g., Monday, Tuesday).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/backup_policy#day_of_week BackupPolicy#day_of_week}
  */
  readonly dayOfWeek: string[];
}

export function backupPolicyBackupPolicyStorageArraySnapshotScheduleWeekScheduleToTerraform(struct?: BackupPolicyBackupPolicyStorageArraySnapshotScheduleWeekScheduleOutputReference | BackupPolicyBackupPolicyStorageArraySnapshotScheduleWeekSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day_of_week: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dayOfWeek),
  }
}


export function backupPolicyBackupPolicyStorageArraySnapshotScheduleWeekScheduleToHclTerraform(struct?: BackupPolicyBackupPolicyStorageArraySnapshotScheduleWeekScheduleOutputReference | BackupPolicyBackupPolicyStorageArraySnapshotScheduleWeekSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    day_of_week: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dayOfWeek),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupPolicyBackupPolicyStorageArraySnapshotScheduleWeekScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BackupPolicyBackupPolicyStorageArraySnapshotScheduleWeekSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dayOfWeek !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfWeek = this._dayOfWeek;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupPolicyBackupPolicyStorageArraySnapshotScheduleWeekSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dayOfWeek = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dayOfWeek = value.dayOfWeek;
    }
  }

  // day_of_week - computed: false, optional: false, required: true
  private _dayOfWeek?: string[]; 
  public get dayOfWeek() {
    return this.getListAttribute('day_of_week');
  }
  public set dayOfWeek(value: string[]) {
    this._dayOfWeek = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfWeekInput() {
    return this._dayOfWeek;
  }
}
export interface BackupPolicyBackupPolicyStorageArraySnapshotScheduleYearSchedule {
  /**
  * Day of the year to run (e.g., First, Last).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/backup_policy#day_of_year BackupPolicy#day_of_year}
  */
  readonly dayOfYear: string;
}

export function backupPolicyBackupPolicyStorageArraySnapshotScheduleYearScheduleToTerraform(struct?: BackupPolicyBackupPolicyStorageArraySnapshotScheduleYearScheduleOutputReference | BackupPolicyBackupPolicyStorageArraySnapshotScheduleYearSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day_of_year: cdktf.stringToTerraform(struct!.dayOfYear),
  }
}


export function backupPolicyBackupPolicyStorageArraySnapshotScheduleYearScheduleToHclTerraform(struct?: BackupPolicyBackupPolicyStorageArraySnapshotScheduleYearScheduleOutputReference | BackupPolicyBackupPolicyStorageArraySnapshotScheduleYearSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    day_of_year: {
      value: cdktf.stringToHclTerraform(struct!.dayOfYear),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupPolicyBackupPolicyStorageArraySnapshotScheduleYearScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BackupPolicyBackupPolicyStorageArraySnapshotScheduleYearSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dayOfYear !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfYear = this._dayOfYear;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupPolicyBackupPolicyStorageArraySnapshotScheduleYearSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dayOfYear = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dayOfYear = value.dayOfYear;
    }
  }

  // day_of_year - computed: false, optional: false, required: true
  private _dayOfYear?: string; 
  public get dayOfYear() {
    return this.getStringAttribute('day_of_year');
  }
  public set dayOfYear(value: string) {
    this._dayOfYear = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfYearInput() {
    return this._dayOfYear;
  }
}
export interface BackupPolicyBackupPolicyStorageArraySnapshotSchedule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/backup_policy#unit BackupPolicy#unit}
  */
  readonly unit: string;
  /**
  * day_schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/backup_policy#day_schedule BackupPolicy#day_schedule}
  */
  readonly daySchedule?: BackupPolicyBackupPolicyStorageArraySnapshotScheduleDaySchedule;
  /**
  * hour_schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/backup_policy#hour_schedule BackupPolicy#hour_schedule}
  */
  readonly hourSchedule?: BackupPolicyBackupPolicyStorageArraySnapshotScheduleHourSchedule;
  /**
  * minute_schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/backup_policy#minute_schedule BackupPolicy#minute_schedule}
  */
  readonly minuteSchedule?: BackupPolicyBackupPolicyStorageArraySnapshotScheduleMinuteSchedule;
  /**
  * month_schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/backup_policy#month_schedule BackupPolicy#month_schedule}
  */
  readonly monthSchedule?: BackupPolicyBackupPolicyStorageArraySnapshotScheduleMonthSchedule;
  /**
  * week_schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/backup_policy#week_schedule BackupPolicy#week_schedule}
  */
  readonly weekSchedule?: BackupPolicyBackupPolicyStorageArraySnapshotScheduleWeekSchedule;
  /**
  * year_schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/backup_policy#year_schedule BackupPolicy#year_schedule}
  */
  readonly yearSchedule?: BackupPolicyBackupPolicyStorageArraySnapshotScheduleYearSchedule;
}

export function backupPolicyBackupPolicyStorageArraySnapshotScheduleToTerraform(struct?: BackupPolicyBackupPolicyStorageArraySnapshotScheduleOutputReference | BackupPolicyBackupPolicyStorageArraySnapshotSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    day_schedule: backupPolicyBackupPolicyStorageArraySnapshotScheduleDayScheduleToTerraform(struct!.daySchedule),
    hour_schedule: backupPolicyBackupPolicyStorageArraySnapshotScheduleHourScheduleToTerraform(struct!.hourSchedule),
    minute_schedule: backupPolicyBackupPolicyStorageArraySnapshotScheduleMinuteScheduleToTerraform(struct!.minuteSchedule),
    month_schedule: backupPolicyBackupPolicyStorageArraySnapshotScheduleMonthScheduleToTerraform(struct!.monthSchedule),
    week_schedule: backupPolicyBackupPolicyStorageArraySnapshotScheduleWeekScheduleToTerraform(struct!.weekSchedule),
    year_schedule: backupPolicyBackupPolicyStorageArraySnapshotScheduleYearScheduleToTerraform(struct!.yearSchedule),
  }
}


export function backupPolicyBackupPolicyStorageArraySnapshotScheduleToHclTerraform(struct?: BackupPolicyBackupPolicyStorageArraySnapshotScheduleOutputReference | BackupPolicyBackupPolicyStorageArraySnapshotSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    day_schedule: {
      value: backupPolicyBackupPolicyStorageArraySnapshotScheduleDayScheduleToHclTerraform(struct!.daySchedule),
      isBlock: true,
      type: "list",
      storageClassType: "BackupPolicyBackupPolicyStorageArraySnapshotScheduleDayScheduleList",
    },
    hour_schedule: {
      value: backupPolicyBackupPolicyStorageArraySnapshotScheduleHourScheduleToHclTerraform(struct!.hourSchedule),
      isBlock: true,
      type: "list",
      storageClassType: "BackupPolicyBackupPolicyStorageArraySnapshotScheduleHourScheduleList",
    },
    minute_schedule: {
      value: backupPolicyBackupPolicyStorageArraySnapshotScheduleMinuteScheduleToHclTerraform(struct!.minuteSchedule),
      isBlock: true,
      type: "list",
      storageClassType: "BackupPolicyBackupPolicyStorageArraySnapshotScheduleMinuteScheduleList",
    },
    month_schedule: {
      value: backupPolicyBackupPolicyStorageArraySnapshotScheduleMonthScheduleToHclTerraform(struct!.monthSchedule),
      isBlock: true,
      type: "list",
      storageClassType: "BackupPolicyBackupPolicyStorageArraySnapshotScheduleMonthScheduleList",
    },
    week_schedule: {
      value: backupPolicyBackupPolicyStorageArraySnapshotScheduleWeekScheduleToHclTerraform(struct!.weekSchedule),
      isBlock: true,
      type: "list",
      storageClassType: "BackupPolicyBackupPolicyStorageArraySnapshotScheduleWeekScheduleList",
    },
    year_schedule: {
      value: backupPolicyBackupPolicyStorageArraySnapshotScheduleYearScheduleToHclTerraform(struct!.yearSchedule),
      isBlock: true,
      type: "list",
      storageClassType: "BackupPolicyBackupPolicyStorageArraySnapshotScheduleYearScheduleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupPolicyBackupPolicyStorageArraySnapshotScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BackupPolicyBackupPolicyStorageArraySnapshotSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._daySchedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.daySchedule = this._daySchedule?.internalValue;
    }
    if (this._hourSchedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hourSchedule = this._hourSchedule?.internalValue;
    }
    if (this._minuteSchedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.minuteSchedule = this._minuteSchedule?.internalValue;
    }
    if (this._monthSchedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.monthSchedule = this._monthSchedule?.internalValue;
    }
    if (this._weekSchedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.weekSchedule = this._weekSchedule?.internalValue;
    }
    if (this._yearSchedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.yearSchedule = this._yearSchedule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupPolicyBackupPolicyStorageArraySnapshotSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._unit = undefined;
      this._daySchedule.internalValue = undefined;
      this._hourSchedule.internalValue = undefined;
      this._minuteSchedule.internalValue = undefined;
      this._monthSchedule.internalValue = undefined;
      this._weekSchedule.internalValue = undefined;
      this._yearSchedule.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._unit = value.unit;
      this._daySchedule.internalValue = value.daySchedule;
      this._hourSchedule.internalValue = value.hourSchedule;
      this._minuteSchedule.internalValue = value.minuteSchedule;
      this._monthSchedule.internalValue = value.monthSchedule;
      this._weekSchedule.internalValue = value.weekSchedule;
      this._yearSchedule.internalValue = value.yearSchedule;
    }
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // day_schedule - computed: false, optional: true, required: false
  private _daySchedule = new BackupPolicyBackupPolicyStorageArraySnapshotScheduleDayScheduleOutputReference(this, "day_schedule");
  public get daySchedule() {
    return this._daySchedule;
  }
  public putDaySchedule(value: BackupPolicyBackupPolicyStorageArraySnapshotScheduleDaySchedule) {
    this._daySchedule.internalValue = value;
  }
  public resetDaySchedule() {
    this._daySchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayScheduleInput() {
    return this._daySchedule.internalValue;
  }

  // hour_schedule - computed: false, optional: true, required: false
  private _hourSchedule = new BackupPolicyBackupPolicyStorageArraySnapshotScheduleHourScheduleOutputReference(this, "hour_schedule");
  public get hourSchedule() {
    return this._hourSchedule;
  }
  public putHourSchedule(value: BackupPolicyBackupPolicyStorageArraySnapshotScheduleHourSchedule) {
    this._hourSchedule.internalValue = value;
  }
  public resetHourSchedule() {
    this._hourSchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hourScheduleInput() {
    return this._hourSchedule.internalValue;
  }

  // minute_schedule - computed: false, optional: true, required: false
  private _minuteSchedule = new BackupPolicyBackupPolicyStorageArraySnapshotScheduleMinuteScheduleOutputReference(this, "minute_schedule");
  public get minuteSchedule() {
    return this._minuteSchedule;
  }
  public putMinuteSchedule(value: BackupPolicyBackupPolicyStorageArraySnapshotScheduleMinuteSchedule) {
    this._minuteSchedule.internalValue = value;
  }
  public resetMinuteSchedule() {
    this._minuteSchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minuteScheduleInput() {
    return this._minuteSchedule.internalValue;
  }

  // month_schedule - computed: false, optional: true, required: false
  private _monthSchedule = new BackupPolicyBackupPolicyStorageArraySnapshotScheduleMonthScheduleOutputReference(this, "month_schedule");
  public get monthSchedule() {
    return this._monthSchedule;
  }
  public putMonthSchedule(value: BackupPolicyBackupPolicyStorageArraySnapshotScheduleMonthSchedule) {
    this._monthSchedule.internalValue = value;
  }
  public resetMonthSchedule() {
    this._monthSchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthScheduleInput() {
    return this._monthSchedule.internalValue;
  }

  // week_schedule - computed: false, optional: true, required: false
  private _weekSchedule = new BackupPolicyBackupPolicyStorageArraySnapshotScheduleWeekScheduleOutputReference(this, "week_schedule");
  public get weekSchedule() {
    return this._weekSchedule;
  }
  public putWeekSchedule(value: BackupPolicyBackupPolicyStorageArraySnapshotScheduleWeekSchedule) {
    this._weekSchedule.internalValue = value;
  }
  public resetWeekSchedule() {
    this._weekSchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weekScheduleInput() {
    return this._weekSchedule.internalValue;
  }

  // year_schedule - computed: false, optional: true, required: false
  private _yearSchedule = new BackupPolicyBackupPolicyStorageArraySnapshotScheduleYearScheduleOutputReference(this, "year_schedule");
  public get yearSchedule() {
    return this._yearSchedule;
  }
  public putYearSchedule(value: BackupPolicyBackupPolicyStorageArraySnapshotScheduleYearSchedule) {
    this._yearSchedule.internalValue = value;
  }
  public resetYearSchedule() {
    this._yearSchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yearScheduleInput() {
    return this._yearSchedule.internalValue;
  }
}
export interface BackupPolicyBackupPolicyStorageArraySnapshot {
  /**
  * retention block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/backup_policy#retention BackupPolicy#retention}
  */
  readonly retention: BackupPolicyBackupPolicyStorageArraySnapshotRetention;
  /**
  * schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/backup_policy#schedule BackupPolicy#schedule}
  */
  readonly schedule: BackupPolicyBackupPolicyStorageArraySnapshotSchedule;
}

export function backupPolicyBackupPolicyStorageArraySnapshotToTerraform(struct?: BackupPolicyBackupPolicyStorageArraySnapshotOutputReference | BackupPolicyBackupPolicyStorageArraySnapshot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    retention: backupPolicyBackupPolicyStorageArraySnapshotRetentionToTerraform(struct!.retention),
    schedule: backupPolicyBackupPolicyStorageArraySnapshotScheduleToTerraform(struct!.schedule),
  }
}


export function backupPolicyBackupPolicyStorageArraySnapshotToHclTerraform(struct?: BackupPolicyBackupPolicyStorageArraySnapshotOutputReference | BackupPolicyBackupPolicyStorageArraySnapshot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    retention: {
      value: backupPolicyBackupPolicyStorageArraySnapshotRetentionToHclTerraform(struct!.retention),
      isBlock: true,
      type: "list",
      storageClassType: "BackupPolicyBackupPolicyStorageArraySnapshotRetentionList",
    },
    schedule: {
      value: backupPolicyBackupPolicyStorageArraySnapshotScheduleToHclTerraform(struct!.schedule),
      isBlock: true,
      type: "list",
      storageClassType: "BackupPolicyBackupPolicyStorageArraySnapshotScheduleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupPolicyBackupPolicyStorageArraySnapshotOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BackupPolicyBackupPolicyStorageArraySnapshot | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._retention?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retention = this._retention?.internalValue;
    }
    if (this._schedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedule = this._schedule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupPolicyBackupPolicyStorageArraySnapshot | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._retention.internalValue = undefined;
      this._schedule.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._retention.internalValue = value.retention;
      this._schedule.internalValue = value.schedule;
    }
  }

  // retention - computed: false, optional: false, required: true
  private _retention = new BackupPolicyBackupPolicyStorageArraySnapshotRetentionOutputReference(this, "retention");
  public get retention() {
    return this._retention;
  }
  public putRetention(value: BackupPolicyBackupPolicyStorageArraySnapshotRetention) {
    this._retention.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionInput() {
    return this._retention.internalValue;
  }

  // schedule - computed: false, optional: false, required: true
  private _schedule = new BackupPolicyBackupPolicyStorageArraySnapshotScheduleOutputReference(this, "schedule");
  public get schedule() {
    return this._schedule;
  }
  public putSchedule(value: BackupPolicyBackupPolicyStorageArraySnapshotSchedule) {
    this._schedule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule.internalValue;
  }
}
export interface BackupPolicyBackupPolicy {
  /**
  * bmr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/backup_policy#bmr BackupPolicy#bmr}
  */
  readonly bmr?: BackupPolicyBackupPolicyBmr;
  /**
  * cdp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/backup_policy#cdp BackupPolicy#cdp}
  */
  readonly cdp?: BackupPolicyBackupPolicyCdp;
  /**
  * log block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/backup_policy#log BackupPolicy#log}
  */
  readonly log?: BackupPolicyBackupPolicyLog;
  /**
  * regular block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/backup_policy#regular BackupPolicy#regular}
  */
  readonly regular: BackupPolicyBackupPolicyRegular;
  /**
  * run_timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/backup_policy#run_timeouts BackupPolicy#run_timeouts}
  */
  readonly runTimeouts?: BackupPolicyBackupPolicyRunTimeouts[] | cdktf.IResolvable;
  /**
  * storage_array_snapshot block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/backup_policy#storage_array_snapshot BackupPolicy#storage_array_snapshot}
  */
  readonly storageArraySnapshot?: BackupPolicyBackupPolicyStorageArraySnapshot;
}

export function backupPolicyBackupPolicyToTerraform(struct?: BackupPolicyBackupPolicyOutputReference | BackupPolicyBackupPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bmr: backupPolicyBackupPolicyBmrToTerraform(struct!.bmr),
    cdp: backupPolicyBackupPolicyCdpToTerraform(struct!.cdp),
    log: backupPolicyBackupPolicyLogToTerraform(struct!.log),
    regular: backupPolicyBackupPolicyRegularToTerraform(struct!.regular),
    run_timeouts: cdktf.listMapper(backupPolicyBackupPolicyRunTimeoutsToTerraform, true)(struct!.runTimeouts),
    storage_array_snapshot: backupPolicyBackupPolicyStorageArraySnapshotToTerraform(struct!.storageArraySnapshot),
  }
}


export function backupPolicyBackupPolicyToHclTerraform(struct?: BackupPolicyBackupPolicyOutputReference | BackupPolicyBackupPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bmr: {
      value: backupPolicyBackupPolicyBmrToHclTerraform(struct!.bmr),
      isBlock: true,
      type: "list",
      storageClassType: "BackupPolicyBackupPolicyBmrList",
    },
    cdp: {
      value: backupPolicyBackupPolicyCdpToHclTerraform(struct!.cdp),
      isBlock: true,
      type: "list",
      storageClassType: "BackupPolicyBackupPolicyCdpList",
    },
    log: {
      value: backupPolicyBackupPolicyLogToHclTerraform(struct!.log),
      isBlock: true,
      type: "list",
      storageClassType: "BackupPolicyBackupPolicyLogList",
    },
    regular: {
      value: backupPolicyBackupPolicyRegularToHclTerraform(struct!.regular),
      isBlock: true,
      type: "list",
      storageClassType: "BackupPolicyBackupPolicyRegularList",
    },
    run_timeouts: {
      value: cdktf.listMapperHcl(backupPolicyBackupPolicyRunTimeoutsToHclTerraform, true)(struct!.runTimeouts),
      isBlock: true,
      type: "list",
      storageClassType: "BackupPolicyBackupPolicyRunTimeoutsList",
    },
    storage_array_snapshot: {
      value: backupPolicyBackupPolicyStorageArraySnapshotToHclTerraform(struct!.storageArraySnapshot),
      isBlock: true,
      type: "list",
      storageClassType: "BackupPolicyBackupPolicyStorageArraySnapshotList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupPolicyBackupPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BackupPolicyBackupPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bmr?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bmr = this._bmr?.internalValue;
    }
    if (this._cdp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cdp = this._cdp?.internalValue;
    }
    if (this._log?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.log = this._log?.internalValue;
    }
    if (this._regular?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.regular = this._regular?.internalValue;
    }
    if (this._runTimeouts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.runTimeouts = this._runTimeouts?.internalValue;
    }
    if (this._storageArraySnapshot?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageArraySnapshot = this._storageArraySnapshot?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupPolicyBackupPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bmr.internalValue = undefined;
      this._cdp.internalValue = undefined;
      this._log.internalValue = undefined;
      this._regular.internalValue = undefined;
      this._runTimeouts.internalValue = undefined;
      this._storageArraySnapshot.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bmr.internalValue = value.bmr;
      this._cdp.internalValue = value.cdp;
      this._log.internalValue = value.log;
      this._regular.internalValue = value.regular;
      this._runTimeouts.internalValue = value.runTimeouts;
      this._storageArraySnapshot.internalValue = value.storageArraySnapshot;
    }
  }

  // bmr - computed: false, optional: true, required: false
  private _bmr = new BackupPolicyBackupPolicyBmrOutputReference(this, "bmr");
  public get bmr() {
    return this._bmr;
  }
  public putBmr(value: BackupPolicyBackupPolicyBmr) {
    this._bmr.internalValue = value;
  }
  public resetBmr() {
    this._bmr.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bmrInput() {
    return this._bmr.internalValue;
  }

  // cdp - computed: false, optional: true, required: false
  private _cdp = new BackupPolicyBackupPolicyCdpOutputReference(this, "cdp");
  public get cdp() {
    return this._cdp;
  }
  public putCdp(value: BackupPolicyBackupPolicyCdp) {
    this._cdp.internalValue = value;
  }
  public resetCdp() {
    this._cdp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cdpInput() {
    return this._cdp.internalValue;
  }

  // log - computed: false, optional: true, required: false
  private _log = new BackupPolicyBackupPolicyLogOutputReference(this, "log");
  public get log() {
    return this._log;
  }
  public putLog(value: BackupPolicyBackupPolicyLog) {
    this._log.internalValue = value;
  }
  public resetLog() {
    this._log.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logInput() {
    return this._log.internalValue;
  }

  // regular - computed: false, optional: false, required: true
  private _regular = new BackupPolicyBackupPolicyRegularOutputReference(this, "regular");
  public get regular() {
    return this._regular;
  }
  public putRegular(value: BackupPolicyBackupPolicyRegular) {
    this._regular.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regularInput() {
    return this._regular.internalValue;
  }

  // run_timeouts - computed: false, optional: true, required: false
  private _runTimeouts = new BackupPolicyBackupPolicyRunTimeoutsList(this, "run_timeouts", false);
  public get runTimeouts() {
    return this._runTimeouts;
  }
  public putRunTimeouts(value: BackupPolicyBackupPolicyRunTimeouts[] | cdktf.IResolvable) {
    this._runTimeouts.internalValue = value;
  }
  public resetRunTimeouts() {
    this._runTimeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runTimeoutsInput() {
    return this._runTimeouts.internalValue;
  }

  // storage_array_snapshot - computed: false, optional: true, required: false
  private _storageArraySnapshot = new BackupPolicyBackupPolicyStorageArraySnapshotOutputReference(this, "storage_array_snapshot");
  public get storageArraySnapshot() {
    return this._storageArraySnapshot;
  }
  public putStorageArraySnapshot(value: BackupPolicyBackupPolicyStorageArraySnapshot) {
    this._storageArraySnapshot.internalValue = value;
  }
  public resetStorageArraySnapshot() {
    this._storageArraySnapshot.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageArraySnapshotInput() {
    return this._storageArraySnapshot.internalValue;
  }
}
export interface BackupPolicyRetryOptions {
  /**
  * Specifies the number of times to retry capturing Snapshots before the Protection Group Run fails.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/backup_policy#retries BackupPolicy#retries}
  */
  readonly retries?: number;
  /**
  * Specifies the number of minutes before retrying a failed Protection Group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/backup_policy#retry_interval_mins BackupPolicy#retry_interval_mins}
  */
  readonly retryIntervalMins?: number;
}

export function backupPolicyRetryOptionsToTerraform(struct?: BackupPolicyRetryOptionsOutputReference | BackupPolicyRetryOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    retries: cdktf.numberToTerraform(struct!.retries),
    retry_interval_mins: cdktf.numberToTerraform(struct!.retryIntervalMins),
  }
}


export function backupPolicyRetryOptionsToHclTerraform(struct?: BackupPolicyRetryOptionsOutputReference | BackupPolicyRetryOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    retries: {
      value: cdktf.numberToHclTerraform(struct!.retries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retry_interval_mins: {
      value: cdktf.numberToHclTerraform(struct!.retryIntervalMins),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupPolicyRetryOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BackupPolicyRetryOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._retries !== undefined) {
      hasAnyValues = true;
      internalValueResult.retries = this._retries;
    }
    if (this._retryIntervalMins !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryIntervalMins = this._retryIntervalMins;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupPolicyRetryOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._retries = undefined;
      this._retryIntervalMins = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._retries = value.retries;
      this._retryIntervalMins = value.retryIntervalMins;
    }
  }

  // retries - computed: false, optional: true, required: false
  private _retries?: number; 
  public get retries() {
    return this.getNumberAttribute('retries');
  }
  public set retries(value: number) {
    this._retries = value;
  }
  public resetRetries() {
    this._retries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retriesInput() {
    return this._retries;
  }

  // retry_interval_mins - computed: false, optional: true, required: false
  private _retryIntervalMins?: number; 
  public get retryIntervalMins() {
    return this.getNumberAttribute('retry_interval_mins');
  }
  public set retryIntervalMins(value: number) {
    this._retryIntervalMins = value;
  }
  public resetRetryIntervalMins() {
    this._retryIntervalMins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryIntervalMinsInput() {
    return this._retryIntervalMins;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/backup_policy cohesity_backup_policy}
*/
export class BackupPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cohesity_backup_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BackupPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BackupPolicy to import
  * @param importFromId The id of the existing BackupPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/backup_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BackupPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cohesity_backup_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/backup_policy cohesity_backup_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BackupPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: BackupPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'cohesity_backup_policy',
      terraformGeneratorMetadata: {
        providerName: 'cohesity',
        providerVersion: '2.1.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dataLock = config.dataLock;
    this._description = config.description;
    this._enableSmartLocalRetentionAdjustment = config.enableSmartLocalRetentionAdjustment;
    this._id = config.id;
    this._isCbsEnabled = config.isCbsEnabled;
    this._lastModificationTimeUsecs = config.lastModificationTimeUsecs;
    this._name = config.name;
    this._skipIntervalMins = config.skipIntervalMins;
    this._version = config.version;
    this._backupPolicy.internalValue = config.backupPolicy;
    this._retryOptions.internalValue = config.retryOptions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data_lock - computed: false, optional: true, required: false
  private _dataLock?: string; 
  public get dataLock() {
    return this.getStringAttribute('data_lock');
  }
  public set dataLock(value: string) {
    this._dataLock = value;
  }
  public resetDataLock() {
    this._dataLock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataLockInput() {
    return this._dataLock;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // enable_smart_local_retention_adjustment - computed: false, optional: true, required: false
  private _enableSmartLocalRetentionAdjustment?: boolean | cdktf.IResolvable; 
  public get enableSmartLocalRetentionAdjustment() {
    return this.getBooleanAttribute('enable_smart_local_retention_adjustment');
  }
  public set enableSmartLocalRetentionAdjustment(value: boolean | cdktf.IResolvable) {
    this._enableSmartLocalRetentionAdjustment = value;
  }
  public resetEnableSmartLocalRetentionAdjustment() {
    this._enableSmartLocalRetentionAdjustment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSmartLocalRetentionAdjustmentInput() {
    return this._enableSmartLocalRetentionAdjustment;
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

  // is_cbs_enabled - computed: false, optional: true, required: false
  private _isCbsEnabled?: boolean | cdktf.IResolvable; 
  public get isCbsEnabled() {
    return this.getBooleanAttribute('is_cbs_enabled');
  }
  public set isCbsEnabled(value: boolean | cdktf.IResolvable) {
    this._isCbsEnabled = value;
  }
  public resetIsCbsEnabled() {
    this._isCbsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isCbsEnabledInput() {
    return this._isCbsEnabled;
  }

  // last_modification_time_usecs - computed: false, optional: true, required: false
  private _lastModificationTimeUsecs?: number; 
  public get lastModificationTimeUsecs() {
    return this.getNumberAttribute('last_modification_time_usecs');
  }
  public set lastModificationTimeUsecs(value: number) {
    this._lastModificationTimeUsecs = value;
  }
  public resetLastModificationTimeUsecs() {
    this._lastModificationTimeUsecs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastModificationTimeUsecsInput() {
    return this._lastModificationTimeUsecs;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // skip_interval_mins - computed: false, optional: true, required: false
  private _skipIntervalMins?: number; 
  public get skipIntervalMins() {
    return this.getNumberAttribute('skip_interval_mins');
  }
  public set skipIntervalMins(value: number) {
    this._skipIntervalMins = value;
  }
  public resetSkipIntervalMins() {
    this._skipIntervalMins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipIntervalMinsInput() {
    return this._skipIntervalMins;
  }

  // version - computed: false, optional: true, required: false
  private _version?: number; 
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // backup_policy - computed: false, optional: true, required: false
  private _backupPolicy = new BackupPolicyBackupPolicyOutputReference(this, "backup_policy");
  public get backupPolicy() {
    return this._backupPolicy;
  }
  public putBackupPolicy(value: BackupPolicyBackupPolicy) {
    this._backupPolicy.internalValue = value;
  }
  public resetBackupPolicy() {
    this._backupPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupPolicyInput() {
    return this._backupPolicy.internalValue;
  }

  // retry_options - computed: false, optional: true, required: false
  private _retryOptions = new BackupPolicyRetryOptionsOutputReference(this, "retry_options");
  public get retryOptions() {
    return this._retryOptions;
  }
  public putRetryOptions(value: BackupPolicyRetryOptions) {
    this._retryOptions.internalValue = value;
  }
  public resetRetryOptions() {
    this._retryOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryOptionsInput() {
    return this._retryOptions.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      data_lock: cdktf.stringToTerraform(this._dataLock),
      description: cdktf.stringToTerraform(this._description),
      enable_smart_local_retention_adjustment: cdktf.booleanToTerraform(this._enableSmartLocalRetentionAdjustment),
      id: cdktf.stringToTerraform(this._id),
      is_cbs_enabled: cdktf.booleanToTerraform(this._isCbsEnabled),
      last_modification_time_usecs: cdktf.numberToTerraform(this._lastModificationTimeUsecs),
      name: cdktf.stringToTerraform(this._name),
      skip_interval_mins: cdktf.numberToTerraform(this._skipIntervalMins),
      version: cdktf.numberToTerraform(this._version),
      backup_policy: backupPolicyBackupPolicyToTerraform(this._backupPolicy.internalValue),
      retry_options: backupPolicyRetryOptionsToTerraform(this._retryOptions.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      data_lock: {
        value: cdktf.stringToHclTerraform(this._dataLock),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_smart_local_retention_adjustment: {
        value: cdktf.booleanToHclTerraform(this._enableSmartLocalRetentionAdjustment),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_cbs_enabled: {
        value: cdktf.booleanToHclTerraform(this._isCbsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      last_modification_time_usecs: {
        value: cdktf.numberToHclTerraform(this._lastModificationTimeUsecs),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      skip_interval_mins: {
        value: cdktf.numberToHclTerraform(this._skipIntervalMins),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      version: {
        value: cdktf.numberToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      backup_policy: {
        value: backupPolicyBackupPolicyToHclTerraform(this._backupPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BackupPolicyBackupPolicyList",
      },
      retry_options: {
        value: backupPolicyRetryOptionsToHclTerraform(this._retryOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BackupPolicyRetryOptionsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
