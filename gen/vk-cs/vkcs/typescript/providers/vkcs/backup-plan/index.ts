// https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/backup_plan
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BackupPlanConfig extends cdktf.TerraformMetaArguments {
  /**
  * Parameters for full retention policy. Specifies number of full backups stored. Incremental backups (if enabled) are not counted as full. Incompatible with gfs_retention
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/backup_plan#full_retention BackupPlan#full_retention}
  */
  readonly fullRetention?: BackupPlanFullRetention;
  /**
  * Parameters for gfs retention policy. Specifies number of full backups stored. Incremental backups (if enabled) are not counted as full. Incompatible with full_retention
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/backup_plan#gfs_retention BackupPlan#gfs_retention}
  */
  readonly gfsRetention?: BackupPlanGfsRetention;
  /**
  * Whether incremental backups strategy should be used. If enabled, the schedule.date field must specify one day, on which full backup will be created. On other days, incremental backups will be created. _note_ This option may be enabled for only for 'cloud_servers' provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/backup_plan#incremental_backup BackupPlan#incremental_backup}
  */
  readonly incrementalBackup: boolean | cdktf.IResolvable;
  /**
  * List of ids of instances to make backup for
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/backup_plan#instance_ids BackupPlan#instance_ids}
  */
  readonly instanceIds: string[];
  /**
  * Name of the backup plan
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/backup_plan#name BackupPlan#name}
  */
  readonly name: string;
  /**
  * ID of backup provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/backup_plan#provider_id BackupPlan#provider_id}
  */
  readonly providerId?: string;
  /**
  * Name of backup provider, must be one of: cloud_servers, dbaas
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/backup_plan#provider_name BackupPlan#provider_name}
  */
  readonly providerName?: string;
  /**
  * The `region` to fetch availability zones from, defaults to the provider's `region`. Changing this creates a new plan.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/backup_plan#region BackupPlan#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/backup_plan#schedule BackupPlan#schedule}
  */
  readonly schedule: BackupPlanSchedule;
}
export interface BackupPlanFullRetention {
  /**
  * Maximum number of backups
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/backup_plan#max_full_backup BackupPlan#max_full_backup}
  */
  readonly maxFullBackup: number;
}

export function backupPlanFullRetentionToTerraform(struct?: BackupPlanFullRetention | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_full_backup: cdktf.numberToTerraform(struct!.maxFullBackup),
  }
}


export function backupPlanFullRetentionToHclTerraform(struct?: BackupPlanFullRetention | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_full_backup: {
      value: cdktf.numberToHclTerraform(struct!.maxFullBackup),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupPlanFullRetentionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BackupPlanFullRetention | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxFullBackup !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxFullBackup = this._maxFullBackup;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupPlanFullRetention | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxFullBackup = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxFullBackup = value.maxFullBackup;
    }
  }

  // max_full_backup - computed: false, optional: false, required: true
  private _maxFullBackup?: number; 
  public get maxFullBackup() {
    return this.getNumberAttribute('max_full_backup');
  }
  public set maxFullBackup(value: number) {
    this._maxFullBackup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxFullBackupInput() {
    return this._maxFullBackup;
  }
}
export interface BackupPlanGfsRetention {
  /**
  * Number of months to store backups
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/backup_plan#gfs_monthly BackupPlan#gfs_monthly}
  */
  readonly gfsMonthly?: number;
  /**
  * Number of weeks to store backups
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/backup_plan#gfs_weekly BackupPlan#gfs_weekly}
  */
  readonly gfsWeekly: number;
  /**
  * Number of years to store backups
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/backup_plan#gfs_yearly BackupPlan#gfs_yearly}
  */
  readonly gfsYearly?: number;
}

export function backupPlanGfsRetentionToTerraform(struct?: BackupPlanGfsRetention | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gfs_monthly: cdktf.numberToTerraform(struct!.gfsMonthly),
    gfs_weekly: cdktf.numberToTerraform(struct!.gfsWeekly),
    gfs_yearly: cdktf.numberToTerraform(struct!.gfsYearly),
  }
}


export function backupPlanGfsRetentionToHclTerraform(struct?: BackupPlanGfsRetention | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gfs_monthly: {
      value: cdktf.numberToHclTerraform(struct!.gfsMonthly),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gfs_weekly: {
      value: cdktf.numberToHclTerraform(struct!.gfsWeekly),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gfs_yearly: {
      value: cdktf.numberToHclTerraform(struct!.gfsYearly),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupPlanGfsRetentionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BackupPlanGfsRetention | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gfsMonthly !== undefined) {
      hasAnyValues = true;
      internalValueResult.gfsMonthly = this._gfsMonthly;
    }
    if (this._gfsWeekly !== undefined) {
      hasAnyValues = true;
      internalValueResult.gfsWeekly = this._gfsWeekly;
    }
    if (this._gfsYearly !== undefined) {
      hasAnyValues = true;
      internalValueResult.gfsYearly = this._gfsYearly;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupPlanGfsRetention | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gfsMonthly = undefined;
      this._gfsWeekly = undefined;
      this._gfsYearly = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gfsMonthly = value.gfsMonthly;
      this._gfsWeekly = value.gfsWeekly;
      this._gfsYearly = value.gfsYearly;
    }
  }

  // gfs_monthly - computed: false, optional: true, required: false
  private _gfsMonthly?: number; 
  public get gfsMonthly() {
    return this.getNumberAttribute('gfs_monthly');
  }
  public set gfsMonthly(value: number) {
    this._gfsMonthly = value;
  }
  public resetGfsMonthly() {
    this._gfsMonthly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gfsMonthlyInput() {
    return this._gfsMonthly;
  }

  // gfs_weekly - computed: false, optional: false, required: true
  private _gfsWeekly?: number; 
  public get gfsWeekly() {
    return this.getNumberAttribute('gfs_weekly');
  }
  public set gfsWeekly(value: number) {
    this._gfsWeekly = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gfsWeeklyInput() {
    return this._gfsWeekly;
  }

  // gfs_yearly - computed: false, optional: true, required: false
  private _gfsYearly?: number; 
  public get gfsYearly() {
    return this.getNumberAttribute('gfs_yearly');
  }
  public set gfsYearly(value: number) {
    this._gfsYearly = value;
  }
  public resetGfsYearly() {
    this._gfsYearly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gfsYearlyInput() {
    return this._gfsYearly;
  }
}
export interface BackupPlanSchedule {
  /**
  * List of days when to perform backups. If incremental_backups is enabled, only one day should be specified
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/backup_plan#date BackupPlan#date}
  */
  readonly date?: string[];
  /**
  * Hour interval of backups, must be one of: 3, 12, 24. This field is incompatible with date/time fields
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/backup_plan#every_hours BackupPlan#every_hours}
  */
  readonly everyHours?: number;
  /**
  * Time of backup in format hh:mm (for UTC timezone) or hh:mm+tz (for other timezones, e.g. 10:00+03 for MSK, 10:00-04 for ET)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/backup_plan#time BackupPlan#time}
  */
  readonly time?: string;
}

export function backupPlanScheduleToTerraform(struct?: BackupPlanSchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    date: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.date),
    every_hours: cdktf.numberToTerraform(struct!.everyHours),
    time: cdktf.stringToTerraform(struct!.time),
  }
}


export function backupPlanScheduleToHclTerraform(struct?: BackupPlanSchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    date: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.date),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    every_hours: {
      value: cdktf.numberToHclTerraform(struct!.everyHours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time: {
      value: cdktf.stringToHclTerraform(struct!.time),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupPlanScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BackupPlanSchedule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._date !== undefined) {
      hasAnyValues = true;
      internalValueResult.date = this._date;
    }
    if (this._everyHours !== undefined) {
      hasAnyValues = true;
      internalValueResult.everyHours = this._everyHours;
    }
    if (this._time !== undefined) {
      hasAnyValues = true;
      internalValueResult.time = this._time;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupPlanSchedule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._date = undefined;
      this._everyHours = undefined;
      this._time = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._date = value.date;
      this._everyHours = value.everyHours;
      this._time = value.time;
    }
  }

  // date - computed: false, optional: true, required: false
  private _date?: string[]; 
  public get date() {
    return this.getListAttribute('date');
  }
  public set date(value: string[]) {
    this._date = value;
  }
  public resetDate() {
    this._date = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateInput() {
    return this._date;
  }

  // every_hours - computed: false, optional: true, required: false
  private _everyHours?: number; 
  public get everyHours() {
    return this.getNumberAttribute('every_hours');
  }
  public set everyHours(value: number) {
    this._everyHours = value;
  }
  public resetEveryHours() {
    this._everyHours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get everyHoursInput() {
    return this._everyHours;
  }

  // time - computed: false, optional: true, required: false
  private _time?: string; 
  public get time() {
    return this.getStringAttribute('time');
  }
  public set time(value: string) {
    this._time = value;
  }
  public resetTime() {
    this._time = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeInput() {
    return this._time;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/backup_plan vkcs_backup_plan}
*/
export class BackupPlan extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vkcs_backup_plan";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BackupPlan resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BackupPlan to import
  * @param importFromId The id of the existing BackupPlan that should be imported. Refer to the {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/backup_plan#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BackupPlan to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vkcs_backup_plan", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/backup_plan vkcs_backup_plan} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BackupPlanConfig
  */
  public constructor(scope: Construct, id: string, config: BackupPlanConfig) {
    super(scope, id, {
      terraformResourceType: 'vkcs_backup_plan',
      terraformGeneratorMetadata: {
        providerName: 'vkcs',
        providerVersion: '0.13.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._fullRetention.internalValue = config.fullRetention;
    this._gfsRetention.internalValue = config.gfsRetention;
    this._incrementalBackup = config.incrementalBackup;
    this._instanceIds = config.instanceIds;
    this._name = config.name;
    this._providerId = config.providerId;
    this._providerName = config.providerName;
    this._region = config.region;
    this._schedule.internalValue = config.schedule;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // full_retention - computed: false, optional: true, required: false
  private _fullRetention = new BackupPlanFullRetentionOutputReference(this, "full_retention");
  public get fullRetention() {
    return this._fullRetention;
  }
  public putFullRetention(value: BackupPlanFullRetention) {
    this._fullRetention.internalValue = value;
  }
  public resetFullRetention() {
    this._fullRetention.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullRetentionInput() {
    return this._fullRetention.internalValue;
  }

  // gfs_retention - computed: false, optional: true, required: false
  private _gfsRetention = new BackupPlanGfsRetentionOutputReference(this, "gfs_retention");
  public get gfsRetention() {
    return this._gfsRetention;
  }
  public putGfsRetention(value: BackupPlanGfsRetention) {
    this._gfsRetention.internalValue = value;
  }
  public resetGfsRetention() {
    this._gfsRetention.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gfsRetentionInput() {
    return this._gfsRetention.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // incremental_backup - computed: false, optional: false, required: true
  private _incrementalBackup?: boolean | cdktf.IResolvable; 
  public get incrementalBackup() {
    return this.getBooleanAttribute('incremental_backup');
  }
  public set incrementalBackup(value: boolean | cdktf.IResolvable) {
    this._incrementalBackup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get incrementalBackupInput() {
    return this._incrementalBackup;
  }

  // instance_ids - computed: false, optional: false, required: true
  private _instanceIds?: string[]; 
  public get instanceIds() {
    return this.getListAttribute('instance_ids');
  }
  public set instanceIds(value: string[]) {
    this._instanceIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdsInput() {
    return this._instanceIds;
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

  // provider_id - computed: true, optional: true, required: false
  private _providerId?: string; 
  public get providerId() {
    return this.getStringAttribute('provider_id');
  }
  public set providerId(value: string) {
    this._providerId = value;
  }
  public resetProviderId() {
    this._providerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerIdInput() {
    return this._providerId;
  }

  // provider_name - computed: true, optional: true, required: false
  private _providerName?: string; 
  public get providerName() {
    return this.getStringAttribute('provider_name');
  }
  public set providerName(value: string) {
    this._providerName = value;
  }
  public resetProviderName() {
    this._providerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerNameInput() {
    return this._providerName;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // schedule - computed: false, optional: false, required: true
  private _schedule = new BackupPlanScheduleOutputReference(this, "schedule");
  public get schedule() {
    return this._schedule;
  }
  public putSchedule(value: BackupPlanSchedule) {
    this._schedule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      full_retention: backupPlanFullRetentionToTerraform(this._fullRetention.internalValue),
      gfs_retention: backupPlanGfsRetentionToTerraform(this._gfsRetention.internalValue),
      incremental_backup: cdktf.booleanToTerraform(this._incrementalBackup),
      instance_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._instanceIds),
      name: cdktf.stringToTerraform(this._name),
      provider_id: cdktf.stringToTerraform(this._providerId),
      provider_name: cdktf.stringToTerraform(this._providerName),
      region: cdktf.stringToTerraform(this._region),
      schedule: backupPlanScheduleToTerraform(this._schedule.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      full_retention: {
        value: backupPlanFullRetentionToHclTerraform(this._fullRetention.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BackupPlanFullRetention",
      },
      gfs_retention: {
        value: backupPlanGfsRetentionToHclTerraform(this._gfsRetention.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BackupPlanGfsRetention",
      },
      incremental_backup: {
        value: cdktf.booleanToHclTerraform(this._incrementalBackup),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      instance_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._instanceIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provider_id: {
        value: cdktf.stringToHclTerraform(this._providerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provider_name: {
        value: cdktf.stringToHclTerraform(this._providerName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schedule: {
        value: backupPlanScheduleToHclTerraform(this._schedule.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BackupPlanSchedule",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
