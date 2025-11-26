// https://registry.terraform.io/providers/files-com/files/0.1.397/docs/resources/sync
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SyncConfig extends cdktf.TerraformMetaArguments {
  /**
  * Delete empty folders after sync?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.397/docs/resources/sync#delete_empty_folders Sync#delete_empty_folders}
  */
  readonly deleteEmptyFolders?: boolean | cdktf.IResolvable;
  /**
  * Description for this sync job
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.397/docs/resources/sync#description Sync#description}
  */
  readonly description?: string;
  /**
  * Absolute destination path for the sync
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.397/docs/resources/sync#dest_path Sync#dest_path}
  */
  readonly destPath?: string;
  /**
  * Remote server ID for the destination (if remote)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.397/docs/resources/sync#dest_remote_server_id Sync#dest_remote_server_id}
  */
  readonly destRemoteServerId?: number;
  /**
  * Is this sync disabled?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.397/docs/resources/sync#disabled Sync#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * If trigger is `custom_schedule`, the sync will check if there is a formal, observed holiday for the region, and if so, it will not run.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.397/docs/resources/sync#holiday_region Sync#holiday_region}
  */
  readonly holidayRegion?: string;
  /**
  * If trigger is `daily`, this specifies how often to run this sync.  One of: `day`, `week`, `week_end`, `month`, `month_end`, `quarter`, `quarter_end`, `year`, `year_end`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.397/docs/resources/sync#interval Sync#interval}
  */
  readonly interval?: string;
  /**
  * Keep files after copying?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.397/docs/resources/sync#keep_after_copy Sync#keep_after_copy}
  */
  readonly keepAfterCopy?: boolean | cdktf.IResolvable;
  /**
  * Name for this sync job
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.397/docs/resources/sync#name Sync#name}
  */
  readonly name?: string;
  /**
  * If trigger type is `daily`, this specifies a day number to run in one of the supported intervals: `week`, `month`, `quarter`, `year`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.397/docs/resources/sync#recurring_day Sync#recurring_day}
  */
  readonly recurringDay?: number;
  /**
  * If trigger is `custom_schedule`, Custom schedule description for when the sync should be run. 0-based days of the week. 0 is Sunday, 1 is Monday, etc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.397/docs/resources/sync#schedule_days_of_week Sync#schedule_days_of_week}
  */
  readonly scheduleDaysOfWeek?: number[];
  /**
  * If trigger is `custom_schedule`, Custom schedule Time Zone for when the sync should be run.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.397/docs/resources/sync#schedule_time_zone Sync#schedule_time_zone}
  */
  readonly scheduleTimeZone?: string;
  /**
  * If trigger is `custom_schedule`, Custom schedule description for when the sync should be run. Times of day in HH:MM format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.397/docs/resources/sync#schedule_times_of_day Sync#schedule_times_of_day}
  */
  readonly scheduleTimesOfDay?: string[];
  /**
  * Absolute source path for the sync
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.397/docs/resources/sync#src_path Sync#src_path}
  */
  readonly srcPath?: string;
  /**
  * Remote server ID for the source (if remote)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.397/docs/resources/sync#src_remote_server_id Sync#src_remote_server_id}
  */
  readonly srcRemoteServerId?: number;
  /**
  * Frequency in minutes between syncs. If set, this value must be greater than or equal to the `remote_sync_interval` value for the site's plan. If left blank, the plan's `remote_sync_interval` will be used. This setting is only used if `trigger` is empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.397/docs/resources/sync#sync_interval_minutes Sync#sync_interval_minutes}
  */
  readonly syncIntervalMinutes?: number;
  /**
  * Trigger type: daily, custom_schedule, or manual
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.397/docs/resources/sync#trigger Sync#trigger}
  */
  readonly trigger?: string;
  /**
  * Some MFT services request an empty file (known as a trigger file) to signal the sync is complete and they can begin further processing. If trigger_file is set, a zero-byte file will be sent at the end of the sync.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.397/docs/resources/sync#trigger_file Sync#trigger_file}
  */
  readonly triggerFile?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/files-com/files/0.1.397/docs/resources/sync files_sync}
*/
export class Sync extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "files_sync";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Sync resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Sync to import
  * @param importFromId The id of the existing Sync that should be imported. Refer to the {@link https://registry.terraform.io/providers/files-com/files/0.1.397/docs/resources/sync#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Sync to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "files_sync", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/files-com/files/0.1.397/docs/resources/sync files_sync} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SyncConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SyncConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'files_sync',
      terraformGeneratorMetadata: {
        providerName: 'files',
        providerVersion: '0.1.397',
        providerVersionConstraint: '0.1.397'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deleteEmptyFolders = config.deleteEmptyFolders;
    this._description = config.description;
    this._destPath = config.destPath;
    this._destRemoteServerId = config.destRemoteServerId;
    this._disabled = config.disabled;
    this._holidayRegion = config.holidayRegion;
    this._interval = config.interval;
    this._keepAfterCopy = config.keepAfterCopy;
    this._name = config.name;
    this._recurringDay = config.recurringDay;
    this._scheduleDaysOfWeek = config.scheduleDaysOfWeek;
    this._scheduleTimeZone = config.scheduleTimeZone;
    this._scheduleTimesOfDay = config.scheduleTimesOfDay;
    this._srcPath = config.srcPath;
    this._srcRemoteServerId = config.srcRemoteServerId;
    this._syncIntervalMinutes = config.syncIntervalMinutes;
    this._trigger = config.trigger;
    this._triggerFile = config.triggerFile;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // delete_empty_folders - computed: true, optional: true, required: false
  private _deleteEmptyFolders?: boolean | cdktf.IResolvable; 
  public get deleteEmptyFolders() {
    return this.getBooleanAttribute('delete_empty_folders');
  }
  public set deleteEmptyFolders(value: boolean | cdktf.IResolvable) {
    this._deleteEmptyFolders = value;
  }
  public resetDeleteEmptyFolders() {
    this._deleteEmptyFolders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteEmptyFoldersInput() {
    return this._deleteEmptyFolders;
  }

  // description - computed: true, optional: true, required: false
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

  // dest_path - computed: true, optional: true, required: false
  private _destPath?: string; 
  public get destPath() {
    return this.getStringAttribute('dest_path');
  }
  public set destPath(value: string) {
    this._destPath = value;
  }
  public resetDestPath() {
    this._destPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destPathInput() {
    return this._destPath;
  }

  // dest_remote_server_id - computed: true, optional: true, required: false
  private _destRemoteServerId?: number; 
  public get destRemoteServerId() {
    return this.getNumberAttribute('dest_remote_server_id');
  }
  public set destRemoteServerId(value: number) {
    this._destRemoteServerId = value;
  }
  public resetDestRemoteServerId() {
    this._destRemoteServerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destRemoteServerIdInput() {
    return this._destRemoteServerId;
  }

  // disabled - computed: true, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // exclude_patterns - computed: true, optional: false, required: false
  public get excludePatterns() {
    return this.getListAttribute('exclude_patterns');
  }

  // holiday_region - computed: true, optional: true, required: false
  private _holidayRegion?: string; 
  public get holidayRegion() {
    return this.getStringAttribute('holiday_region');
  }
  public set holidayRegion(value: string) {
    this._holidayRegion = value;
  }
  public resetHolidayRegion() {
    this._holidayRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get holidayRegionInput() {
    return this._holidayRegion;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // include_patterns - computed: true, optional: false, required: false
  public get includePatterns() {
    return this.getListAttribute('include_patterns');
  }

  // interval - computed: true, optional: true, required: false
  private _interval?: string; 
  public get interval() {
    return this.getStringAttribute('interval');
  }
  public set interval(value: string) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // keep_after_copy - computed: true, optional: true, required: false
  private _keepAfterCopy?: boolean | cdktf.IResolvable; 
  public get keepAfterCopy() {
    return this.getBooleanAttribute('keep_after_copy');
  }
  public set keepAfterCopy(value: boolean | cdktf.IResolvable) {
    this._keepAfterCopy = value;
  }
  public resetKeepAfterCopy() {
    this._keepAfterCopy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepAfterCopyInput() {
    return this._keepAfterCopy;
  }

  // latest_sync_run - computed: true, optional: false, required: false
  public get latestSyncRun() {
    return this.getStringAttribute('latest_sync_run');
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // recurring_day - computed: true, optional: true, required: false
  private _recurringDay?: number; 
  public get recurringDay() {
    return this.getNumberAttribute('recurring_day');
  }
  public set recurringDay(value: number) {
    this._recurringDay = value;
  }
  public resetRecurringDay() {
    this._recurringDay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recurringDayInput() {
    return this._recurringDay;
  }

  // schedule_days_of_week - computed: true, optional: true, required: false
  private _scheduleDaysOfWeek?: number[]; 
  public get scheduleDaysOfWeek() {
    return this.getNumberListAttribute('schedule_days_of_week');
  }
  public set scheduleDaysOfWeek(value: number[]) {
    this._scheduleDaysOfWeek = value;
  }
  public resetScheduleDaysOfWeek() {
    this._scheduleDaysOfWeek = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleDaysOfWeekInput() {
    return this._scheduleDaysOfWeek;
  }

  // schedule_time_zone - computed: true, optional: true, required: false
  private _scheduleTimeZone?: string; 
  public get scheduleTimeZone() {
    return this.getStringAttribute('schedule_time_zone');
  }
  public set scheduleTimeZone(value: string) {
    this._scheduleTimeZone = value;
  }
  public resetScheduleTimeZone() {
    this._scheduleTimeZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleTimeZoneInput() {
    return this._scheduleTimeZone;
  }

  // schedule_times_of_day - computed: true, optional: true, required: false
  private _scheduleTimesOfDay?: string[]; 
  public get scheduleTimesOfDay() {
    return this.getListAttribute('schedule_times_of_day');
  }
  public set scheduleTimesOfDay(value: string[]) {
    this._scheduleTimesOfDay = value;
  }
  public resetScheduleTimesOfDay() {
    this._scheduleTimesOfDay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleTimesOfDayInput() {
    return this._scheduleTimesOfDay;
  }

  // site_id - computed: true, optional: false, required: false
  public get siteId() {
    return this.getNumberAttribute('site_id');
  }

  // src_path - computed: true, optional: true, required: false
  private _srcPath?: string; 
  public get srcPath() {
    return this.getStringAttribute('src_path');
  }
  public set srcPath(value: string) {
    this._srcPath = value;
  }
  public resetSrcPath() {
    this._srcPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcPathInput() {
    return this._srcPath;
  }

  // src_remote_server_id - computed: true, optional: true, required: false
  private _srcRemoteServerId?: number; 
  public get srcRemoteServerId() {
    return this.getNumberAttribute('src_remote_server_id');
  }
  public set srcRemoteServerId(value: number) {
    this._srcRemoteServerId = value;
  }
  public resetSrcRemoteServerId() {
    this._srcRemoteServerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcRemoteServerIdInput() {
    return this._srcRemoteServerId;
  }

  // sync_interval_minutes - computed: true, optional: true, required: false
  private _syncIntervalMinutes?: number; 
  public get syncIntervalMinutes() {
    return this.getNumberAttribute('sync_interval_minutes');
  }
  public set syncIntervalMinutes(value: number) {
    this._syncIntervalMinutes = value;
  }
  public resetSyncIntervalMinutes() {
    this._syncIntervalMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncIntervalMinutesInput() {
    return this._syncIntervalMinutes;
  }

  // trigger - computed: true, optional: true, required: false
  private _trigger?: string; 
  public get trigger() {
    return this.getStringAttribute('trigger');
  }
  public set trigger(value: string) {
    this._trigger = value;
  }
  public resetTrigger() {
    this._trigger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerInput() {
    return this._trigger;
  }

  // trigger_file - computed: true, optional: true, required: false
  private _triggerFile?: string; 
  public get triggerFile() {
    return this.getStringAttribute('trigger_file');
  }
  public set triggerFile(value: string) {
    this._triggerFile = value;
  }
  public resetTriggerFile() {
    this._triggerFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerFileInput() {
    return this._triggerFile;
  }

  // two_way - computed: true, optional: false, required: false
  public get twoWay() {
    return this.getBooleanAttribute('two_way');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // user_id - computed: true, optional: false, required: false
  public get userId() {
    return this.getNumberAttribute('user_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      delete_empty_folders: cdktf.booleanToTerraform(this._deleteEmptyFolders),
      description: cdktf.stringToTerraform(this._description),
      dest_path: cdktf.stringToTerraform(this._destPath),
      dest_remote_server_id: cdktf.numberToTerraform(this._destRemoteServerId),
      disabled: cdktf.booleanToTerraform(this._disabled),
      holiday_region: cdktf.stringToTerraform(this._holidayRegion),
      interval: cdktf.stringToTerraform(this._interval),
      keep_after_copy: cdktf.booleanToTerraform(this._keepAfterCopy),
      name: cdktf.stringToTerraform(this._name),
      recurring_day: cdktf.numberToTerraform(this._recurringDay),
      schedule_days_of_week: cdktf.listMapper(cdktf.numberToTerraform, false)(this._scheduleDaysOfWeek),
      schedule_time_zone: cdktf.stringToTerraform(this._scheduleTimeZone),
      schedule_times_of_day: cdktf.listMapper(cdktf.stringToTerraform, false)(this._scheduleTimesOfDay),
      src_path: cdktf.stringToTerraform(this._srcPath),
      src_remote_server_id: cdktf.numberToTerraform(this._srcRemoteServerId),
      sync_interval_minutes: cdktf.numberToTerraform(this._syncIntervalMinutes),
      trigger: cdktf.stringToTerraform(this._trigger),
      trigger_file: cdktf.stringToTerraform(this._triggerFile),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      delete_empty_folders: {
        value: cdktf.booleanToHclTerraform(this._deleteEmptyFolders),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dest_path: {
        value: cdktf.stringToHclTerraform(this._destPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dest_remote_server_id: {
        value: cdktf.numberToHclTerraform(this._destRemoteServerId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      disabled: {
        value: cdktf.booleanToHclTerraform(this._disabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      holiday_region: {
        value: cdktf.stringToHclTerraform(this._holidayRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interval: {
        value: cdktf.stringToHclTerraform(this._interval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      keep_after_copy: {
        value: cdktf.booleanToHclTerraform(this._keepAfterCopy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      recurring_day: {
        value: cdktf.numberToHclTerraform(this._recurringDay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      schedule_days_of_week: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._scheduleDaysOfWeek),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      schedule_time_zone: {
        value: cdktf.stringToHclTerraform(this._scheduleTimeZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schedule_times_of_day: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._scheduleTimesOfDay),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      src_path: {
        value: cdktf.stringToHclTerraform(this._srcPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      src_remote_server_id: {
        value: cdktf.numberToHclTerraform(this._srcRemoteServerId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sync_interval_minutes: {
        value: cdktf.numberToHclTerraform(this._syncIntervalMinutes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      trigger: {
        value: cdktf.stringToHclTerraform(this._trigger),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trigger_file: {
        value: cdktf.stringToHclTerraform(this._triggerFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
