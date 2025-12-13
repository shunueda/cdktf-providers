// https://registry.terraform.io/providers/files-com/files/0.1.412/docs/data-sources/automation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFilesAutomationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Automation ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.412/docs/data-sources/automation#id DataFilesAutomation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/files-com/files/0.1.412/docs/data-sources/automation files_automation}
*/
export class DataFilesAutomation extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "files_automation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFilesAutomation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFilesAutomation to import
  * @param importFromId The id of the existing DataFilesAutomation that should be imported. Refer to the {@link https://registry.terraform.io/providers/files-com/files/0.1.412/docs/data-sources/automation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFilesAutomation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "files_automation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/files-com/files/0.1.412/docs/data-sources/automation files_automation} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFilesAutomationConfig
  */
  public constructor(scope: Construct, id: string, config: DataFilesAutomationConfig) {
    super(scope, id, {
      terraformResourceType: 'files_automation',
      terraformGeneratorMetadata: {
        providerName: 'files',
        providerVersion: '0.1.412',
        providerVersionConstraint: '0.1.412'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // always_overwrite_size_matching_files - computed: true, optional: false, required: false
  public get alwaysOverwriteSizeMatchingFiles() {
    return this.getBooleanAttribute('always_overwrite_size_matching_files');
  }

  // always_serialize_jobs - computed: true, optional: false, required: false
  public get alwaysSerializeJobs() {
    return this.getBooleanAttribute('always_serialize_jobs');
  }

  // automation - computed: true, optional: false, required: false
  public get automation() {
    return this.getStringAttribute('automation');
  }

  // deleted - computed: true, optional: false, required: false
  public get deleted() {
    return this.getBooleanAttribute('deleted');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // destination_replace_from - computed: true, optional: false, required: false
  public get destinationReplaceFrom() {
    return this.getStringAttribute('destination_replace_from');
  }

  // destination_replace_to - computed: true, optional: false, required: false
  public get destinationReplaceTo() {
    return this.getStringAttribute('destination_replace_to');
  }

  // destinations - computed: true, optional: false, required: false
  public get destinations() {
    return this.getListAttribute('destinations');
  }

  // disabled - computed: true, optional: false, required: false
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }

  // exclude_pattern - computed: true, optional: false, required: false
  public get excludePattern() {
    return this.getStringAttribute('exclude_pattern');
  }

  // flatten_destination_structure - computed: true, optional: false, required: false
  public get flattenDestinationStructure() {
    return this.getBooleanAttribute('flatten_destination_structure');
  }

  // group_ids - computed: true, optional: false, required: false
  public get groupIds() {
    return this.getNumberListAttribute('group_ids');
  }

  // holiday_region - computed: true, optional: false, required: false
  public get holidayRegion() {
    return this.getStringAttribute('holiday_region');
  }

  // human_readable_schedule - computed: true, optional: false, required: false
  public get humanReadableSchedule() {
    return this.getStringAttribute('human_readable_schedule');
  }

  // id - computed: false, optional: false, required: true
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // ignore_locked_folders - computed: true, optional: false, required: false
  public get ignoreLockedFolders() {
    return this.getBooleanAttribute('ignore_locked_folders');
  }

  // import_urls - computed: true, optional: false, required: false
  private _importUrls = new cdktf.AnyMap(this, "import_urls");
  public get importUrls() {
    return this._importUrls;
  }

  // interval - computed: true, optional: false, required: false
  public get interval() {
    return this.getStringAttribute('interval');
  }

  // last_modified_at - computed: true, optional: false, required: false
  public get lastModifiedAt() {
    return this.getStringAttribute('last_modified_at');
  }

  // legacy_folder_matching - computed: true, optional: false, required: false
  public get legacyFolderMatching() {
    return this.getBooleanAttribute('legacy_folder_matching');
  }

  // legacy_sync_ids - computed: true, optional: false, required: false
  public get legacySyncIds() {
    return this.getNumberListAttribute('legacy_sync_ids');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // overwrite_files - computed: true, optional: false, required: false
  public get overwriteFiles() {
    return this.getBooleanAttribute('overwrite_files');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // path_time_zone - computed: true, optional: false, required: false
  public get pathTimeZone() {
    return this.getStringAttribute('path_time_zone');
  }

  // recurring_day - computed: true, optional: false, required: false
  public get recurringDay() {
    return this.getNumberAttribute('recurring_day');
  }

  // retry_on_failure_interval_in_minutes - computed: true, optional: false, required: false
  public get retryOnFailureIntervalInMinutes() {
    return this.getNumberAttribute('retry_on_failure_interval_in_minutes');
  }

  // retry_on_failure_number_of_attempts - computed: true, optional: false, required: false
  public get retryOnFailureNumberOfAttempts() {
    return this.getNumberAttribute('retry_on_failure_number_of_attempts');
  }

  // schedule - computed: true, optional: false, required: false
  private _schedule = new cdktf.AnyMap(this, "schedule");
  public get schedule() {
    return this._schedule;
  }

  // schedule_days_of_week - computed: true, optional: false, required: false
  public get scheduleDaysOfWeek() {
    return this.getNumberListAttribute('schedule_days_of_week');
  }

  // schedule_time_zone - computed: true, optional: false, required: false
  public get scheduleTimeZone() {
    return this.getStringAttribute('schedule_time_zone');
  }

  // schedule_times_of_day - computed: true, optional: false, required: false
  public get scheduleTimesOfDay() {
    return this.getListAttribute('schedule_times_of_day');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // sync_ids - computed: true, optional: false, required: false
  public get syncIds() {
    return this.getNumberListAttribute('sync_ids');
  }

  // trigger - computed: true, optional: false, required: false
  public get trigger() {
    return this.getStringAttribute('trigger');
  }

  // trigger_actions - computed: true, optional: false, required: false
  public get triggerActions() {
    return this.getListAttribute('trigger_actions');
  }

  // user_id - computed: true, optional: false, required: false
  public get userId() {
    return this.getNumberAttribute('user_id');
  }

  // user_ids - computed: true, optional: false, required: false
  public get userIds() {
    return this.getNumberListAttribute('user_ids');
  }

  // value - computed: true, optional: false, required: false
  private _value = new cdktf.AnyMap(this, "value");
  public get value() {
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
      id: cdktf.numberToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.numberToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
