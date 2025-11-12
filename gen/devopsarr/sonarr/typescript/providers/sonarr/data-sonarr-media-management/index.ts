// https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/data-sources/media_management
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSonarrMediaManagementConfig extends cdktf.TerraformMetaArguments {
}

/**
* Represents a {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/data-sources/media_management sonarr_media_management}
*/
export class DataSonarrMediaManagement extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sonarr_media_management";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSonarrMediaManagement resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSonarrMediaManagement to import
  * @param importFromId The id of the existing DataSonarrMediaManagement that should be imported. Refer to the {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/data-sources/media_management#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSonarrMediaManagement to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sonarr_media_management", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/data-sources/media_management sonarr_media_management} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSonarrMediaManagementConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataSonarrMediaManagementConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'sonarr_media_management',
      terraformGeneratorMetadata: {
        providerName: 'sonarr',
        providerVersion: '3.4.0',
        providerVersionConstraint: '3.4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // chmod_folder - computed: true, optional: false, required: false
  public get chmodFolder() {
    return this.getStringAttribute('chmod_folder');
  }

  // chown_group - computed: true, optional: false, required: false
  public get chownGroup() {
    return this.getStringAttribute('chown_group');
  }

  // create_empty_folders - computed: true, optional: false, required: false
  public get createEmptyFolders() {
    return this.getBooleanAttribute('create_empty_folders');
  }

  // delete_empty_folders - computed: true, optional: false, required: false
  public get deleteEmptyFolders() {
    return this.getBooleanAttribute('delete_empty_folders');
  }

  // download_propers_repacks - computed: true, optional: false, required: false
  public get downloadPropersRepacks() {
    return this.getStringAttribute('download_propers_repacks');
  }

  // enable_media_info - computed: true, optional: false, required: false
  public get enableMediaInfo() {
    return this.getBooleanAttribute('enable_media_info');
  }

  // episode_title_required - computed: true, optional: false, required: false
  public get episodeTitleRequired() {
    return this.getStringAttribute('episode_title_required');
  }

  // extra_file_extensions - computed: true, optional: false, required: false
  public get extraFileExtensions() {
    return this.getStringAttribute('extra_file_extensions');
  }

  // file_date - computed: true, optional: false, required: false
  public get fileDate() {
    return this.getStringAttribute('file_date');
  }

  // hardlinks_copy - computed: true, optional: false, required: false
  public get hardlinksCopy() {
    return this.getBooleanAttribute('hardlinks_copy');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // import_extra_files - computed: true, optional: false, required: false
  public get importExtraFiles() {
    return this.getBooleanAttribute('import_extra_files');
  }

  // minimum_free_space - computed: true, optional: false, required: false
  public get minimumFreeSpace() {
    return this.getNumberAttribute('minimum_free_space');
  }

  // recycle_bin_days - computed: true, optional: false, required: false
  public get recycleBinDays() {
    return this.getNumberAttribute('recycle_bin_days');
  }

  // recycle_bin_path - computed: true, optional: false, required: false
  public get recycleBinPath() {
    return this.getStringAttribute('recycle_bin_path');
  }

  // rescan_after_refresh - computed: true, optional: false, required: false
  public get rescanAfterRefresh() {
    return this.getStringAttribute('rescan_after_refresh');
  }

  // set_permissions - computed: true, optional: false, required: false
  public get setPermissions() {
    return this.getBooleanAttribute('set_permissions');
  }

  // skip_free_space_check - computed: true, optional: false, required: false
  public get skipFreeSpaceCheck() {
    return this.getBooleanAttribute('skip_free_space_check');
  }

  // unmonitor_previous_episodes - computed: true, optional: false, required: false
  public get unmonitorPreviousEpisodes() {
    return this.getBooleanAttribute('unmonitor_previous_episodes');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
    };
    return attrs;
  }
}
