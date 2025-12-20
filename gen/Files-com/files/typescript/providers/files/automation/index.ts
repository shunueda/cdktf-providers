// https://registry.terraform.io/providers/files-com/files/0.1.419/docs/resources/automation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AutomationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Ordinarily, files with identical size in the source and destination will be skipped from copy operations to prevent wasted transfer.  If this flag is `true` we will overwrite the destination file always.  Note that this may cause large amounts of wasted transfer usage.  This setting has no effect unless `overwrite_files` is also set to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.419/docs/resources/automation#always_overwrite_size_matching_files Automation#always_overwrite_size_matching_files}
  */
  readonly alwaysOverwriteSizeMatchingFiles?: boolean | cdktf.IResolvable;
  /**
  * Ordinarily, we will allow automation runs to run in parallel for non-scheduled automations. If this flag is `true` we will force automation runs to be serialized (run one at a time, one after another). This can resolve some issues with race conditions on remote systems at the cost of some performance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.419/docs/resources/automation#always_serialize_jobs Automation#always_serialize_jobs}
  */
  readonly alwaysSerializeJobs?: boolean | cdktf.IResolvable;
  /**
  * Automation type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.419/docs/resources/automation#automation Automation#automation}
  */
  readonly automation: string;
  /**
  * Description for the this Automation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.419/docs/resources/automation#description Automation#description}
  */
  readonly description?: string;
  /**
  * If set, this string in the destination path will be replaced with the value in `destination_replace_to`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.419/docs/resources/automation#destination_replace_from Automation#destination_replace_from}
  */
  readonly destinationReplaceFrom?: string;
  /**
  * If set, this string will replace the value `destination_replace_from` in the destination filename. You can use special patterns here.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.419/docs/resources/automation#destination_replace_to Automation#destination_replace_to}
  */
  readonly destinationReplaceTo?: string;
  /**
  * Destination Paths
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.419/docs/resources/automation#destinations Automation#destinations}
  */
  readonly destinations?: string[];
  /**
  * If true, this automation will not run.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.419/docs/resources/automation#disabled Automation#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * If set, this glob pattern will exclude files from the automation. Supports globs, except on remote mounts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.419/docs/resources/automation#exclude_pattern Automation#exclude_pattern}
  */
  readonly excludePattern?: string;
  /**
  * Normally copy and move automations that use globs will implicitly preserve the source folder structure in the destination.  If this flag is `true`, the source folder structure will be flattened in the destination.  This is useful for copying or moving files from multiple folders into a single destination folder.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.419/docs/resources/automation#flatten_destination_structure Automation#flatten_destination_structure}
  */
  readonly flattenDestinationStructure?: boolean | cdktf.IResolvable;
  /**
  * IDs of Groups for the Automation (i.e. who to Request File from)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.419/docs/resources/automation#group_ids Automation#group_ids}
  */
  readonly groupIds?: number[];
  /**
  * If trigger is `custom_schedule`, the Automation will check if there is a formal, observed holiday for the region, and if so, it will not run.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.419/docs/resources/automation#holiday_region Automation#holiday_region}
  */
  readonly holidayRegion?: string;
  /**
  * If true, the Lock Folders behavior will be disregarded for automated actions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.419/docs/resources/automation#ignore_locked_folders Automation#ignore_locked_folders}
  */
  readonly ignoreLockedFolders?: boolean | cdktf.IResolvable;
  /**
  * List of URLs to be imported and names to be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.419/docs/resources/automation#import_urls Automation#import_urls}
  */
  readonly importUrls?: { [key: string]: any };
  /**
  * If trigger is `daily`, this specifies how often to run this automation.  One of: `day`, `week`, `week_end`, `month`, `month_end`, `quarter`, `quarter_end`, `year`, `year_end`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.419/docs/resources/automation#interval Automation#interval}
  */
  readonly interval?: string;
  /**
  * If `true`, use the legacy behavior for this automation, where it can operate on folders in addition to just files.  This behavior no longer works and should not be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.419/docs/resources/automation#legacy_folder_matching Automation#legacy_folder_matching}
  */
  readonly legacyFolderMatching?: boolean | cdktf.IResolvable;
  /**
  * IDs of remote sync folder behaviors to run by this Automation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.419/docs/resources/automation#legacy_sync_ids Automation#legacy_sync_ids}
  */
  readonly legacySyncIds?: number[];
  /**
  * Name for this automation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.419/docs/resources/automation#name Automation#name}
  */
  readonly name?: string;
  /**
  * If true, existing files will be overwritten with new files on Move/Copy automations.  Note: by default files will not be overwritten on Copy automations if they appear to be the same file size as the newly incoming file.  Use the `always_overwrite_size_matching_files` option in conjunction with `overwrite_files` to override this behavior and overwrite files no matter what.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.419/docs/resources/automation#overwrite_files Automation#overwrite_files}
  */
  readonly overwriteFiles?: boolean | cdktf.IResolvable;
  /**
  * Path on which this Automation runs.  Supports globs, except on remote mounts. This must be slash-delimited, but it must neither start nor end with a slash. Maximum of 5000 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.419/docs/resources/automation#path Automation#path}
  */
  readonly path?: string;
  /**
  * Timezone to use when rendering timestamps in paths.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.419/docs/resources/automation#path_time_zone Automation#path_time_zone}
  */
  readonly pathTimeZone?: string;
  /**
  * If trigger type is `daily`, this specifies a day number to run in one of the supported intervals: `week`, `month`, `quarter`, `year`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.419/docs/resources/automation#recurring_day Automation#recurring_day}
  */
  readonly recurringDay?: number;
  /**
  * If the Automation fails, retry at this interval (in minutes).  Acceptable values are 5 through 1440 (one day).  Set to null to disable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.419/docs/resources/automation#retry_on_failure_interval_in_minutes Automation#retry_on_failure_interval_in_minutes}
  */
  readonly retryOnFailureIntervalInMinutes?: number;
  /**
  * If the Automation fails, retry at most this many times.  Maximum allowed value: 10.  Set to null to disable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.419/docs/resources/automation#retry_on_failure_number_of_attempts Automation#retry_on_failure_number_of_attempts}
  */
  readonly retryOnFailureNumberOfAttempts?: number;
  /**
  * If trigger is `custom_schedule`, Custom schedule description for when the automation should be run. 0-based days of the week. 0 is Sunday, 1 is Monday, etc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.419/docs/resources/automation#schedule_days_of_week Automation#schedule_days_of_week}
  */
  readonly scheduleDaysOfWeek?: number[];
  /**
  * If trigger is `custom_schedule`, Custom schedule Time Zone for when the automation should be run.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.419/docs/resources/automation#schedule_time_zone Automation#schedule_time_zone}
  */
  readonly scheduleTimeZone?: string;
  /**
  * If trigger is `custom_schedule`, Custom schedule description for when the automation should be run. Times of day in HH:MM format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.419/docs/resources/automation#schedule_times_of_day Automation#schedule_times_of_day}
  */
  readonly scheduleTimesOfDay?: string[];
  /**
  * Source path/glob.  See Automation docs for exact description, but this is used to filter for files in the `path` to find files to operate on. Supports globs, except on remote mounts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.419/docs/resources/automation#source Automation#source}
  */
  readonly source?: string;
  /**
  * IDs of syncs to run by this Automation. This is the new way to specify syncs, and it is recommended to use this instead of `legacy_sync_ids`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.419/docs/resources/automation#sync_ids Automation#sync_ids}
  */
  readonly syncIds?: number[];
  /**
  * How this automation is triggered to run.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.419/docs/resources/automation#trigger Automation#trigger}
  */
  readonly trigger?: string;
  /**
  * If trigger is `action`, this is the list of action types on which to trigger the automation. Valid actions are create, read, update, destroy, move, archived_delete, copy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.419/docs/resources/automation#trigger_actions Automation#trigger_actions}
  */
  readonly triggerActions?: string[];
  /**
  * IDs of Users for the Automation (i.e. who to Request File from)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.419/docs/resources/automation#user_ids Automation#user_ids}
  */
  readonly userIds?: number[];
  /**
  * A Hash of attributes specific to the automation type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.419/docs/resources/automation#value Automation#value}
  */
  readonly value?: { [key: string]: any };
}

/**
* Represents a {@link https://registry.terraform.io/providers/files-com/files/0.1.419/docs/resources/automation files_automation}
*/
export class Automation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "files_automation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Automation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Automation to import
  * @param importFromId The id of the existing Automation that should be imported. Refer to the {@link https://registry.terraform.io/providers/files-com/files/0.1.419/docs/resources/automation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Automation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "files_automation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/files-com/files/0.1.419/docs/resources/automation files_automation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AutomationConfig
  */
  public constructor(scope: Construct, id: string, config: AutomationConfig) {
    super(scope, id, {
      terraformResourceType: 'files_automation',
      terraformGeneratorMetadata: {
        providerName: 'files',
        providerVersion: '0.1.419',
        providerVersionConstraint: '0.1.419'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._alwaysOverwriteSizeMatchingFiles = config.alwaysOverwriteSizeMatchingFiles;
    this._alwaysSerializeJobs = config.alwaysSerializeJobs;
    this._automation = config.automation;
    this._description = config.description;
    this._destinationReplaceFrom = config.destinationReplaceFrom;
    this._destinationReplaceTo = config.destinationReplaceTo;
    this._destinations = config.destinations;
    this._disabled = config.disabled;
    this._excludePattern = config.excludePattern;
    this._flattenDestinationStructure = config.flattenDestinationStructure;
    this._groupIds = config.groupIds;
    this._holidayRegion = config.holidayRegion;
    this._ignoreLockedFolders = config.ignoreLockedFolders;
    this._importUrls = config.importUrls;
    this._interval = config.interval;
    this._legacyFolderMatching = config.legacyFolderMatching;
    this._legacySyncIds = config.legacySyncIds;
    this._name = config.name;
    this._overwriteFiles = config.overwriteFiles;
    this._path = config.path;
    this._pathTimeZone = config.pathTimeZone;
    this._recurringDay = config.recurringDay;
    this._retryOnFailureIntervalInMinutes = config.retryOnFailureIntervalInMinutes;
    this._retryOnFailureNumberOfAttempts = config.retryOnFailureNumberOfAttempts;
    this._scheduleDaysOfWeek = config.scheduleDaysOfWeek;
    this._scheduleTimeZone = config.scheduleTimeZone;
    this._scheduleTimesOfDay = config.scheduleTimesOfDay;
    this._source = config.source;
    this._syncIds = config.syncIds;
    this._trigger = config.trigger;
    this._triggerActions = config.triggerActions;
    this._userIds = config.userIds;
    this._value = config.value;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // always_overwrite_size_matching_files - computed: true, optional: true, required: false
  private _alwaysOverwriteSizeMatchingFiles?: boolean | cdktf.IResolvable; 
  public get alwaysOverwriteSizeMatchingFiles() {
    return this.getBooleanAttribute('always_overwrite_size_matching_files');
  }
  public set alwaysOverwriteSizeMatchingFiles(value: boolean | cdktf.IResolvable) {
    this._alwaysOverwriteSizeMatchingFiles = value;
  }
  public resetAlwaysOverwriteSizeMatchingFiles() {
    this._alwaysOverwriteSizeMatchingFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alwaysOverwriteSizeMatchingFilesInput() {
    return this._alwaysOverwriteSizeMatchingFiles;
  }

  // always_serialize_jobs - computed: true, optional: true, required: false
  private _alwaysSerializeJobs?: boolean | cdktf.IResolvable; 
  public get alwaysSerializeJobs() {
    return this.getBooleanAttribute('always_serialize_jobs');
  }
  public set alwaysSerializeJobs(value: boolean | cdktf.IResolvable) {
    this._alwaysSerializeJobs = value;
  }
  public resetAlwaysSerializeJobs() {
    this._alwaysSerializeJobs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alwaysSerializeJobsInput() {
    return this._alwaysSerializeJobs;
  }

  // automation - computed: false, optional: false, required: true
  private _automation?: string; 
  public get automation() {
    return this.getStringAttribute('automation');
  }
  public set automation(value: string) {
    this._automation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get automationInput() {
    return this._automation;
  }

  // deleted - computed: true, optional: false, required: false
  public get deleted() {
    return this.getBooleanAttribute('deleted');
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

  // destination_replace_from - computed: true, optional: true, required: false
  private _destinationReplaceFrom?: string; 
  public get destinationReplaceFrom() {
    return this.getStringAttribute('destination_replace_from');
  }
  public set destinationReplaceFrom(value: string) {
    this._destinationReplaceFrom = value;
  }
  public resetDestinationReplaceFrom() {
    this._destinationReplaceFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationReplaceFromInput() {
    return this._destinationReplaceFrom;
  }

  // destination_replace_to - computed: true, optional: true, required: false
  private _destinationReplaceTo?: string; 
  public get destinationReplaceTo() {
    return this.getStringAttribute('destination_replace_to');
  }
  public set destinationReplaceTo(value: string) {
    this._destinationReplaceTo = value;
  }
  public resetDestinationReplaceTo() {
    this._destinationReplaceTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationReplaceToInput() {
    return this._destinationReplaceTo;
  }

  // destinations - computed: true, optional: true, required: false
  private _destinations?: string[]; 
  public get destinations() {
    return this.getListAttribute('destinations');
  }
  public set destinations(value: string[]) {
    this._destinations = value;
  }
  public resetDestinations() {
    this._destinations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationsInput() {
    return this._destinations;
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

  // exclude_pattern - computed: true, optional: true, required: false
  private _excludePattern?: string; 
  public get excludePattern() {
    return this.getStringAttribute('exclude_pattern');
  }
  public set excludePattern(value: string) {
    this._excludePattern = value;
  }
  public resetExcludePattern() {
    this._excludePattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludePatternInput() {
    return this._excludePattern;
  }

  // flatten_destination_structure - computed: true, optional: true, required: false
  private _flattenDestinationStructure?: boolean | cdktf.IResolvable; 
  public get flattenDestinationStructure() {
    return this.getBooleanAttribute('flatten_destination_structure');
  }
  public set flattenDestinationStructure(value: boolean | cdktf.IResolvable) {
    this._flattenDestinationStructure = value;
  }
  public resetFlattenDestinationStructure() {
    this._flattenDestinationStructure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flattenDestinationStructureInput() {
    return this._flattenDestinationStructure;
  }

  // group_ids - computed: true, optional: true, required: false
  private _groupIds?: number[]; 
  public get groupIds() {
    return this.getNumberListAttribute('group_ids');
  }
  public set groupIds(value: number[]) {
    this._groupIds = value;
  }
  public resetGroupIds() {
    this._groupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdsInput() {
    return this._groupIds;
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

  // human_readable_schedule - computed: true, optional: false, required: false
  public get humanReadableSchedule() {
    return this.getStringAttribute('human_readable_schedule');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // ignore_locked_folders - computed: true, optional: true, required: false
  private _ignoreLockedFolders?: boolean | cdktf.IResolvable; 
  public get ignoreLockedFolders() {
    return this.getBooleanAttribute('ignore_locked_folders');
  }
  public set ignoreLockedFolders(value: boolean | cdktf.IResolvable) {
    this._ignoreLockedFolders = value;
  }
  public resetIgnoreLockedFolders() {
    this._ignoreLockedFolders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreLockedFoldersInput() {
    return this._ignoreLockedFolders;
  }

  // import_urls - computed: true, optional: true, required: false
  private _importUrls?: { [key: string]: any }; 
  public get importUrls() {
    return this.getAnyMapAttribute('import_urls');
  }
  public set importUrls(value: { [key: string]: any }) {
    this._importUrls = value;
  }
  public resetImportUrls() {
    this._importUrls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importUrlsInput() {
    return this._importUrls;
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

  // last_modified_at - computed: true, optional: false, required: false
  public get lastModifiedAt() {
    return this.getStringAttribute('last_modified_at');
  }

  // legacy_folder_matching - computed: true, optional: true, required: false
  private _legacyFolderMatching?: boolean | cdktf.IResolvable; 
  public get legacyFolderMatching() {
    return this.getBooleanAttribute('legacy_folder_matching');
  }
  public set legacyFolderMatching(value: boolean | cdktf.IResolvable) {
    this._legacyFolderMatching = value;
  }
  public resetLegacyFolderMatching() {
    this._legacyFolderMatching = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get legacyFolderMatchingInput() {
    return this._legacyFolderMatching;
  }

  // legacy_sync_ids - computed: true, optional: true, required: false
  private _legacySyncIds?: number[]; 
  public get legacySyncIds() {
    return this.getNumberListAttribute('legacy_sync_ids');
  }
  public set legacySyncIds(value: number[]) {
    this._legacySyncIds = value;
  }
  public resetLegacySyncIds() {
    this._legacySyncIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get legacySyncIdsInput() {
    return this._legacySyncIds;
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

  // overwrite_files - computed: true, optional: true, required: false
  private _overwriteFiles?: boolean | cdktf.IResolvable; 
  public get overwriteFiles() {
    return this.getBooleanAttribute('overwrite_files');
  }
  public set overwriteFiles(value: boolean | cdktf.IResolvable) {
    this._overwriteFiles = value;
  }
  public resetOverwriteFiles() {
    this._overwriteFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overwriteFilesInput() {
    return this._overwriteFiles;
  }

  // path - computed: true, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // path_time_zone - computed: true, optional: true, required: false
  private _pathTimeZone?: string; 
  public get pathTimeZone() {
    return this.getStringAttribute('path_time_zone');
  }
  public set pathTimeZone(value: string) {
    this._pathTimeZone = value;
  }
  public resetPathTimeZone() {
    this._pathTimeZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathTimeZoneInput() {
    return this._pathTimeZone;
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

  // retry_on_failure_interval_in_minutes - computed: true, optional: true, required: false
  private _retryOnFailureIntervalInMinutes?: number; 
  public get retryOnFailureIntervalInMinutes() {
    return this.getNumberAttribute('retry_on_failure_interval_in_minutes');
  }
  public set retryOnFailureIntervalInMinutes(value: number) {
    this._retryOnFailureIntervalInMinutes = value;
  }
  public resetRetryOnFailureIntervalInMinutes() {
    this._retryOnFailureIntervalInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryOnFailureIntervalInMinutesInput() {
    return this._retryOnFailureIntervalInMinutes;
  }

  // retry_on_failure_number_of_attempts - computed: true, optional: true, required: false
  private _retryOnFailureNumberOfAttempts?: number; 
  public get retryOnFailureNumberOfAttempts() {
    return this.getNumberAttribute('retry_on_failure_number_of_attempts');
  }
  public set retryOnFailureNumberOfAttempts(value: number) {
    this._retryOnFailureNumberOfAttempts = value;
  }
  public resetRetryOnFailureNumberOfAttempts() {
    this._retryOnFailureNumberOfAttempts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryOnFailureNumberOfAttemptsInput() {
    return this._retryOnFailureNumberOfAttempts;
  }

  // schedule - computed: true, optional: false, required: false
  private _schedule = new cdktf.AnyMap(this, "schedule");
  public get schedule() {
    return this._schedule;
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

  // source - computed: true, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // sync_ids - computed: true, optional: true, required: false
  private _syncIds?: number[]; 
  public get syncIds() {
    return this.getNumberListAttribute('sync_ids');
  }
  public set syncIds(value: number[]) {
    this._syncIds = value;
  }
  public resetSyncIds() {
    this._syncIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncIdsInput() {
    return this._syncIds;
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

  // trigger_actions - computed: true, optional: true, required: false
  private _triggerActions?: string[]; 
  public get triggerActions() {
    return this.getListAttribute('trigger_actions');
  }
  public set triggerActions(value: string[]) {
    this._triggerActions = value;
  }
  public resetTriggerActions() {
    this._triggerActions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerActionsInput() {
    return this._triggerActions;
  }

  // user_id - computed: true, optional: false, required: false
  public get userId() {
    return this.getNumberAttribute('user_id');
  }

  // user_ids - computed: true, optional: true, required: false
  private _userIds?: number[]; 
  public get userIds() {
    return this.getNumberListAttribute('user_ids');
  }
  public set userIds(value: number[]) {
    this._userIds = value;
  }
  public resetUserIds() {
    this._userIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdsInput() {
    return this._userIds;
  }

  // value - computed: true, optional: true, required: false
  private _value?: { [key: string]: any }; 
  public get value() {
    return this.getAnyMapAttribute('value');
  }
  public set value(value: { [key: string]: any }) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // webhook_url - computed: true, optional: false, required: false
  public get webhookUrl() {
    return this.getStringAttribute('webhook_url');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      always_overwrite_size_matching_files: cdktf.booleanToTerraform(this._alwaysOverwriteSizeMatchingFiles),
      always_serialize_jobs: cdktf.booleanToTerraform(this._alwaysSerializeJobs),
      automation: cdktf.stringToTerraform(this._automation),
      description: cdktf.stringToTerraform(this._description),
      destination_replace_from: cdktf.stringToTerraform(this._destinationReplaceFrom),
      destination_replace_to: cdktf.stringToTerraform(this._destinationReplaceTo),
      destinations: cdktf.listMapper(cdktf.stringToTerraform, false)(this._destinations),
      disabled: cdktf.booleanToTerraform(this._disabled),
      exclude_pattern: cdktf.stringToTerraform(this._excludePattern),
      flatten_destination_structure: cdktf.booleanToTerraform(this._flattenDestinationStructure),
      group_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._groupIds),
      holiday_region: cdktf.stringToTerraform(this._holidayRegion),
      ignore_locked_folders: cdktf.booleanToTerraform(this._ignoreLockedFolders),
      import_urls: cdktf.hashMapper(cdktf.anyToTerraform)(this._importUrls),
      interval: cdktf.stringToTerraform(this._interval),
      legacy_folder_matching: cdktf.booleanToTerraform(this._legacyFolderMatching),
      legacy_sync_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._legacySyncIds),
      name: cdktf.stringToTerraform(this._name),
      overwrite_files: cdktf.booleanToTerraform(this._overwriteFiles),
      path: cdktf.stringToTerraform(this._path),
      path_time_zone: cdktf.stringToTerraform(this._pathTimeZone),
      recurring_day: cdktf.numberToTerraform(this._recurringDay),
      retry_on_failure_interval_in_minutes: cdktf.numberToTerraform(this._retryOnFailureIntervalInMinutes),
      retry_on_failure_number_of_attempts: cdktf.numberToTerraform(this._retryOnFailureNumberOfAttempts),
      schedule_days_of_week: cdktf.listMapper(cdktf.numberToTerraform, false)(this._scheduleDaysOfWeek),
      schedule_time_zone: cdktf.stringToTerraform(this._scheduleTimeZone),
      schedule_times_of_day: cdktf.listMapper(cdktf.stringToTerraform, false)(this._scheduleTimesOfDay),
      source: cdktf.stringToTerraform(this._source),
      sync_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._syncIds),
      trigger: cdktf.stringToTerraform(this._trigger),
      trigger_actions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._triggerActions),
      user_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._userIds),
      value: cdktf.hashMapper(cdktf.anyToTerraform)(this._value),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      always_overwrite_size_matching_files: {
        value: cdktf.booleanToHclTerraform(this._alwaysOverwriteSizeMatchingFiles),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      always_serialize_jobs: {
        value: cdktf.booleanToHclTerraform(this._alwaysSerializeJobs),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      automation: {
        value: cdktf.stringToHclTerraform(this._automation),
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
      destination_replace_from: {
        value: cdktf.stringToHclTerraform(this._destinationReplaceFrom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_replace_to: {
        value: cdktf.stringToHclTerraform(this._destinationReplaceTo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destinations: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._destinations),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      disabled: {
        value: cdktf.booleanToHclTerraform(this._disabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      exclude_pattern: {
        value: cdktf.stringToHclTerraform(this._excludePattern),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      flatten_destination_structure: {
        value: cdktf.booleanToHclTerraform(this._flattenDestinationStructure),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      group_ids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._groupIds),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      holiday_region: {
        value: cdktf.stringToHclTerraform(this._holidayRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ignore_locked_folders: {
        value: cdktf.booleanToHclTerraform(this._ignoreLockedFolders),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      import_urls: {
        value: cdktf.hashMapperHcl(cdktf.anyToHclTerraform)(this._importUrls),
        isBlock: false,
        type: "map",
        storageClassType: "anyMap",
      },
      interval: {
        value: cdktf.stringToHclTerraform(this._interval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      legacy_folder_matching: {
        value: cdktf.booleanToHclTerraform(this._legacyFolderMatching),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      legacy_sync_ids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._legacySyncIds),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      overwrite_files: {
        value: cdktf.booleanToHclTerraform(this._overwriteFiles),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      path: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      path_time_zone: {
        value: cdktf.stringToHclTerraform(this._pathTimeZone),
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
      retry_on_failure_interval_in_minutes: {
        value: cdktf.numberToHclTerraform(this._retryOnFailureIntervalInMinutes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      retry_on_failure_number_of_attempts: {
        value: cdktf.numberToHclTerraform(this._retryOnFailureNumberOfAttempts),
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
      source: {
        value: cdktf.stringToHclTerraform(this._source),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sync_ids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._syncIds),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      trigger: {
        value: cdktf.stringToHclTerraform(this._trigger),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trigger_actions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._triggerActions),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      user_ids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._userIds),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      value: {
        value: cdktf.hashMapperHcl(cdktf.anyToHclTerraform)(this._value),
        isBlock: false,
        type: "map",
        storageClassType: "anyMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
