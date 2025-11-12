// https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/data-sources/media_management
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataRadarrMediaManagementConfig extends cdktf.TerraformMetaArguments {
}

/**
* Represents a {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/data-sources/media_management radarr_media_management}
*/
export class DataRadarrMediaManagement extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "radarr_media_management";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataRadarrMediaManagement resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataRadarrMediaManagement to import
  * @param importFromId The id of the existing DataRadarrMediaManagement that should be imported. Refer to the {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/data-sources/media_management#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataRadarrMediaManagement to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "radarr_media_management", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/data-sources/media_management radarr_media_management} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataRadarrMediaManagementConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataRadarrMediaManagementConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'radarr_media_management',
      terraformGeneratorMetadata: {
        providerName: 'radarr',
        providerVersion: '2.3.3',
        providerVersionConstraint: '2.3.3'
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

  // auto_rename_folders - computed: true, optional: false, required: false
  public get autoRenameFolders() {
    return this.getBooleanAttribute('auto_rename_folders');
  }

  // auto_unmonitor_previously_downloaded_movies - computed: true, optional: false, required: false
  public get autoUnmonitorPreviouslyDownloadedMovies() {
    return this.getBooleanAttribute('auto_unmonitor_previously_downloaded_movies');
  }

  // chmod_folder - computed: true, optional: false, required: false
  public get chmodFolder() {
    return this.getStringAttribute('chmod_folder');
  }

  // chown_group - computed: true, optional: false, required: false
  public get chownGroup() {
    return this.getStringAttribute('chown_group');
  }

  // copy_using_hardlinks - computed: true, optional: false, required: false
  public get copyUsingHardlinks() {
    return this.getBooleanAttribute('copy_using_hardlinks');
  }

  // create_empty_movie_folders - computed: true, optional: false, required: false
  public get createEmptyMovieFolders() {
    return this.getBooleanAttribute('create_empty_movie_folders');
  }

  // delete_empty_folders - computed: true, optional: false, required: false
  public get deleteEmptyFolders() {
    return this.getBooleanAttribute('delete_empty_folders');
  }

  // download_propers_and_repacks - computed: true, optional: false, required: false
  public get downloadPropersAndRepacks() {
    return this.getStringAttribute('download_propers_and_repacks');
  }

  // enable_media_info - computed: true, optional: false, required: false
  public get enableMediaInfo() {
    return this.getBooleanAttribute('enable_media_info');
  }

  // extra_file_extensions - computed: true, optional: false, required: false
  public get extraFileExtensions() {
    return this.getStringAttribute('extra_file_extensions');
  }

  // file_date - computed: true, optional: false, required: false
  public get fileDate() {
    return this.getStringAttribute('file_date');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // import_extra_files - computed: true, optional: false, required: false
  public get importExtraFiles() {
    return this.getBooleanAttribute('import_extra_files');
  }

  // minimum_free_space_when_importing - computed: true, optional: false, required: false
  public get minimumFreeSpaceWhenImporting() {
    return this.getNumberAttribute('minimum_free_space_when_importing');
  }

  // paths_default_static - computed: true, optional: false, required: false
  public get pathsDefaultStatic() {
    return this.getBooleanAttribute('paths_default_static');
  }

  // recycle_bin - computed: true, optional: false, required: false
  public get recycleBin() {
    return this.getStringAttribute('recycle_bin');
  }

  // recycle_bin_cleanup_days - computed: true, optional: false, required: false
  public get recycleBinCleanupDays() {
    return this.getNumberAttribute('recycle_bin_cleanup_days');
  }

  // rescan_after_refresh - computed: true, optional: false, required: false
  public get rescanAfterRefresh() {
    return this.getStringAttribute('rescan_after_refresh');
  }

  // set_permissions_linux - computed: true, optional: false, required: false
  public get setPermissionsLinux() {
    return this.getBooleanAttribute('set_permissions_linux');
  }

  // skip_free_space_check_when_importing - computed: true, optional: false, required: false
  public get skipFreeSpaceCheckWhenImporting() {
    return this.getBooleanAttribute('skip_free_space_check_when_importing');
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
