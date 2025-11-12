// https://registry.terraform.io/providers/files-com/files/0.1.377/docs/data-sources/sync
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFilesSyncConfig extends cdktf.TerraformMetaArguments {
  /**
  * Sync ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.377/docs/data-sources/sync#id DataFilesSync#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/files-com/files/0.1.377/docs/data-sources/sync files_sync}
*/
export class DataFilesSync extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "files_sync";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFilesSync resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFilesSync to import
  * @param importFromId The id of the existing DataFilesSync that should be imported. Refer to the {@link https://registry.terraform.io/providers/files-com/files/0.1.377/docs/data-sources/sync#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFilesSync to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "files_sync", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/files-com/files/0.1.377/docs/data-sources/sync files_sync} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFilesSyncConfig
  */
  public constructor(scope: Construct, id: string, config: DataFilesSyncConfig) {
    super(scope, id, {
      terraformResourceType: 'files_sync',
      terraformGeneratorMetadata: {
        providerName: 'files',
        providerVersion: '0.1.377',
        providerVersionConstraint: '0.1.377'
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

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // delete_empty_folders - computed: true, optional: false, required: false
  public get deleteEmptyFolders() {
    return this.getBooleanAttribute('delete_empty_folders');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // dest_path - computed: true, optional: false, required: false
  public get destPath() {
    return this.getStringAttribute('dest_path');
  }

  // dest_remote_server_id - computed: true, optional: false, required: false
  public get destRemoteServerId() {
    return this.getNumberAttribute('dest_remote_server_id');
  }

  // disabled - computed: true, optional: false, required: false
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }

  // exclude_patterns - computed: true, optional: false, required: false
  public get excludePatterns() {
    return this.getListAttribute('exclude_patterns');
  }

  // holiday_region - computed: true, optional: false, required: false
  public get holidayRegion() {
    return this.getStringAttribute('holiday_region');
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

  // include_patterns - computed: true, optional: false, required: false
  public get includePatterns() {
    return this.getListAttribute('include_patterns');
  }

  // interval - computed: true, optional: false, required: false
  public get interval() {
    return this.getStringAttribute('interval');
  }

  // keep_after_copy - computed: true, optional: false, required: false
  public get keepAfterCopy() {
    return this.getBooleanAttribute('keep_after_copy');
  }

  // latest_sync_run - computed: true, optional: false, required: false
  public get latestSyncRun() {
    return this.getStringAttribute('latest_sync_run');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // recurring_day - computed: true, optional: false, required: false
  public get recurringDay() {
    return this.getNumberAttribute('recurring_day');
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

  // site_id - computed: true, optional: false, required: false
  public get siteId() {
    return this.getNumberAttribute('site_id');
  }

  // src_path - computed: true, optional: false, required: false
  public get srcPath() {
    return this.getStringAttribute('src_path');
  }

  // src_remote_server_id - computed: true, optional: false, required: false
  public get srcRemoteServerId() {
    return this.getNumberAttribute('src_remote_server_id');
  }

  // sync_interval_minutes - computed: true, optional: false, required: false
  public get syncIntervalMinutes() {
    return this.getNumberAttribute('sync_interval_minutes');
  }

  // trigger - computed: true, optional: false, required: false
  public get trigger() {
    return this.getStringAttribute('trigger');
  }

  // trigger_file - computed: true, optional: false, required: false
  public get triggerFile() {
    return this.getStringAttribute('trigger_file');
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
