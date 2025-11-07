// https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/media_management
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MediaManagementConfig extends cdktf.TerraformMetaArguments {
  /**
  * Permission in linux format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/media_management#chmod_folder MediaManagement#chmod_folder}
  */
  readonly chmodFolder: string;
  /**
  * Group used for permission.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/media_management#chown_group MediaManagement#chown_group}
  */
  readonly chownGroup: string;
  /**
  * Create empty series directories.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/media_management#create_empty_folders MediaManagement#create_empty_folders}
  */
  readonly createEmptyFolders: boolean | cdktf.IResolvable;
  /**
  * Delete empty series directories.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/media_management#delete_empty_folders MediaManagement#delete_empty_folders}
  */
  readonly deleteEmptyFolders: boolean | cdktf.IResolvable;
  /**
  * Download proper and repack policy. valid inputs are: 'preferAndUpgrade', 'doNotUpgrade', and 'doNotPrefer'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/media_management#download_propers_repacks MediaManagement#download_propers_repacks}
  */
  readonly downloadPropersRepacks: string;
  /**
  * Scan files details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/media_management#enable_media_info MediaManagement#enable_media_info}
  */
  readonly enableMediaInfo: boolean | cdktf.IResolvable;
  /**
  * Episode title requirement policy. valid inputs are: 'always', 'bulkSeasonReleases' and 'never'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/media_management#episode_title_required MediaManagement#episode_title_required}
  */
  readonly episodeTitleRequired: string;
  /**
  * Comma separated list of extra files to import (.nfo will be imported as .nfo-orig).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/media_management#extra_file_extensions MediaManagement#extra_file_extensions}
  */
  readonly extraFileExtensions: string;
  /**
  * Define the file date modification. valid inputs are: 'none', 'localAirDate, and 'utcAirDate'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/media_management#file_date MediaManagement#file_date}
  */
  readonly fileDate: string;
  /**
  * Use hardlinks instead of copy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/media_management#hardlinks_copy MediaManagement#hardlinks_copy}
  */
  readonly hardlinksCopy: boolean | cdktf.IResolvable;
  /**
  * Import extra files. If enabled it will leverage 'extra_file_extensions'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/media_management#import_extra_files MediaManagement#import_extra_files}
  */
  readonly importExtraFiles: boolean | cdktf.IResolvable;
  /**
  * Minimum free space in MB to allow import.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/media_management#minimum_free_space MediaManagement#minimum_free_space}
  */
  readonly minimumFreeSpace: number;
  /**
  * Recyle bin days of retention.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/media_management#recycle_bin_days MediaManagement#recycle_bin_days}
  */
  readonly recycleBinDays: number;
  /**
  * Recycle bin absolute path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/media_management#recycle_bin_path MediaManagement#recycle_bin_path}
  */
  readonly recycleBinPath: string;
  /**
  * Rescan after refresh policy. valid inputs are: 'always', 'afterManual' and 'never'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/media_management#rescan_after_refresh MediaManagement#rescan_after_refresh}
  */
  readonly rescanAfterRefresh: string;
  /**
  * Set permission for imported files.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/media_management#set_permissions MediaManagement#set_permissions}
  */
  readonly setPermissions: boolean | cdktf.IResolvable;
  /**
  * Skip free space check before importing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/media_management#skip_free_space_check MediaManagement#skip_free_space_check}
  */
  readonly skipFreeSpaceCheck: boolean | cdktf.IResolvable;
  /**
  * Unmonitor deleted files.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/media_management#unmonitor_previous_episodes MediaManagement#unmonitor_previous_episodes}
  */
  readonly unmonitorPreviousEpisodes: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/media_management sonarr_media_management}
*/
export class MediaManagement extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sonarr_media_management";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MediaManagement resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MediaManagement to import
  * @param importFromId The id of the existing MediaManagement that should be imported. Refer to the {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/media_management#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MediaManagement to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sonarr_media_management", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/media_management sonarr_media_management} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MediaManagementConfig
  */
  public constructor(scope: Construct, id: string, config: MediaManagementConfig) {
    super(scope, id, {
      terraformResourceType: 'sonarr_media_management',
      terraformGeneratorMetadata: {
        providerName: 'sonarr',
        providerVersion: '3.4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._chmodFolder = config.chmodFolder;
    this._chownGroup = config.chownGroup;
    this._createEmptyFolders = config.createEmptyFolders;
    this._deleteEmptyFolders = config.deleteEmptyFolders;
    this._downloadPropersRepacks = config.downloadPropersRepacks;
    this._enableMediaInfo = config.enableMediaInfo;
    this._episodeTitleRequired = config.episodeTitleRequired;
    this._extraFileExtensions = config.extraFileExtensions;
    this._fileDate = config.fileDate;
    this._hardlinksCopy = config.hardlinksCopy;
    this._importExtraFiles = config.importExtraFiles;
    this._minimumFreeSpace = config.minimumFreeSpace;
    this._recycleBinDays = config.recycleBinDays;
    this._recycleBinPath = config.recycleBinPath;
    this._rescanAfterRefresh = config.rescanAfterRefresh;
    this._setPermissions = config.setPermissions;
    this._skipFreeSpaceCheck = config.skipFreeSpaceCheck;
    this._unmonitorPreviousEpisodes = config.unmonitorPreviousEpisodes;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // chmod_folder - computed: false, optional: false, required: true
  private _chmodFolder?: string; 
  public get chmodFolder() {
    return this.getStringAttribute('chmod_folder');
  }
  public set chmodFolder(value: string) {
    this._chmodFolder = value;
  }
  // Temporarily expose input value. Use with caution.
  public get chmodFolderInput() {
    return this._chmodFolder;
  }

  // chown_group - computed: false, optional: false, required: true
  private _chownGroup?: string; 
  public get chownGroup() {
    return this.getStringAttribute('chown_group');
  }
  public set chownGroup(value: string) {
    this._chownGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get chownGroupInput() {
    return this._chownGroup;
  }

  // create_empty_folders - computed: false, optional: false, required: true
  private _createEmptyFolders?: boolean | cdktf.IResolvable; 
  public get createEmptyFolders() {
    return this.getBooleanAttribute('create_empty_folders');
  }
  public set createEmptyFolders(value: boolean | cdktf.IResolvable) {
    this._createEmptyFolders = value;
  }
  // Temporarily expose input value. Use with caution.
  public get createEmptyFoldersInput() {
    return this._createEmptyFolders;
  }

  // delete_empty_folders - computed: false, optional: false, required: true
  private _deleteEmptyFolders?: boolean | cdktf.IResolvable; 
  public get deleteEmptyFolders() {
    return this.getBooleanAttribute('delete_empty_folders');
  }
  public set deleteEmptyFolders(value: boolean | cdktf.IResolvable) {
    this._deleteEmptyFolders = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteEmptyFoldersInput() {
    return this._deleteEmptyFolders;
  }

  // download_propers_repacks - computed: false, optional: false, required: true
  private _downloadPropersRepacks?: string; 
  public get downloadPropersRepacks() {
    return this.getStringAttribute('download_propers_repacks');
  }
  public set downloadPropersRepacks(value: string) {
    this._downloadPropersRepacks = value;
  }
  // Temporarily expose input value. Use with caution.
  public get downloadPropersRepacksInput() {
    return this._downloadPropersRepacks;
  }

  // enable_media_info - computed: false, optional: false, required: true
  private _enableMediaInfo?: boolean | cdktf.IResolvable; 
  public get enableMediaInfo() {
    return this.getBooleanAttribute('enable_media_info');
  }
  public set enableMediaInfo(value: boolean | cdktf.IResolvable) {
    this._enableMediaInfo = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableMediaInfoInput() {
    return this._enableMediaInfo;
  }

  // episode_title_required - computed: false, optional: false, required: true
  private _episodeTitleRequired?: string; 
  public get episodeTitleRequired() {
    return this.getStringAttribute('episode_title_required');
  }
  public set episodeTitleRequired(value: string) {
    this._episodeTitleRequired = value;
  }
  // Temporarily expose input value. Use with caution.
  public get episodeTitleRequiredInput() {
    return this._episodeTitleRequired;
  }

  // extra_file_extensions - computed: false, optional: false, required: true
  private _extraFileExtensions?: string; 
  public get extraFileExtensions() {
    return this.getStringAttribute('extra_file_extensions');
  }
  public set extraFileExtensions(value: string) {
    this._extraFileExtensions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get extraFileExtensionsInput() {
    return this._extraFileExtensions;
  }

  // file_date - computed: false, optional: false, required: true
  private _fileDate?: string; 
  public get fileDate() {
    return this.getStringAttribute('file_date');
  }
  public set fileDate(value: string) {
    this._fileDate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileDateInput() {
    return this._fileDate;
  }

  // hardlinks_copy - computed: false, optional: false, required: true
  private _hardlinksCopy?: boolean | cdktf.IResolvable; 
  public get hardlinksCopy() {
    return this.getBooleanAttribute('hardlinks_copy');
  }
  public set hardlinksCopy(value: boolean | cdktf.IResolvable) {
    this._hardlinksCopy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hardlinksCopyInput() {
    return this._hardlinksCopy;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // import_extra_files - computed: false, optional: false, required: true
  private _importExtraFiles?: boolean | cdktf.IResolvable; 
  public get importExtraFiles() {
    return this.getBooleanAttribute('import_extra_files');
  }
  public set importExtraFiles(value: boolean | cdktf.IResolvable) {
    this._importExtraFiles = value;
  }
  // Temporarily expose input value. Use with caution.
  public get importExtraFilesInput() {
    return this._importExtraFiles;
  }

  // minimum_free_space - computed: false, optional: false, required: true
  private _minimumFreeSpace?: number; 
  public get minimumFreeSpace() {
    return this.getNumberAttribute('minimum_free_space');
  }
  public set minimumFreeSpace(value: number) {
    this._minimumFreeSpace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumFreeSpaceInput() {
    return this._minimumFreeSpace;
  }

  // recycle_bin_days - computed: false, optional: false, required: true
  private _recycleBinDays?: number; 
  public get recycleBinDays() {
    return this.getNumberAttribute('recycle_bin_days');
  }
  public set recycleBinDays(value: number) {
    this._recycleBinDays = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recycleBinDaysInput() {
    return this._recycleBinDays;
  }

  // recycle_bin_path - computed: false, optional: false, required: true
  private _recycleBinPath?: string; 
  public get recycleBinPath() {
    return this.getStringAttribute('recycle_bin_path');
  }
  public set recycleBinPath(value: string) {
    this._recycleBinPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recycleBinPathInput() {
    return this._recycleBinPath;
  }

  // rescan_after_refresh - computed: false, optional: false, required: true
  private _rescanAfterRefresh?: string; 
  public get rescanAfterRefresh() {
    return this.getStringAttribute('rescan_after_refresh');
  }
  public set rescanAfterRefresh(value: string) {
    this._rescanAfterRefresh = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rescanAfterRefreshInput() {
    return this._rescanAfterRefresh;
  }

  // set_permissions - computed: false, optional: false, required: true
  private _setPermissions?: boolean | cdktf.IResolvable; 
  public get setPermissions() {
    return this.getBooleanAttribute('set_permissions');
  }
  public set setPermissions(value: boolean | cdktf.IResolvable) {
    this._setPermissions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get setPermissionsInput() {
    return this._setPermissions;
  }

  // skip_free_space_check - computed: false, optional: false, required: true
  private _skipFreeSpaceCheck?: boolean | cdktf.IResolvable; 
  public get skipFreeSpaceCheck() {
    return this.getBooleanAttribute('skip_free_space_check');
  }
  public set skipFreeSpaceCheck(value: boolean | cdktf.IResolvable) {
    this._skipFreeSpaceCheck = value;
  }
  // Temporarily expose input value. Use with caution.
  public get skipFreeSpaceCheckInput() {
    return this._skipFreeSpaceCheck;
  }

  // unmonitor_previous_episodes - computed: false, optional: false, required: true
  private _unmonitorPreviousEpisodes?: boolean | cdktf.IResolvable; 
  public get unmonitorPreviousEpisodes() {
    return this.getBooleanAttribute('unmonitor_previous_episodes');
  }
  public set unmonitorPreviousEpisodes(value: boolean | cdktf.IResolvable) {
    this._unmonitorPreviousEpisodes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unmonitorPreviousEpisodesInput() {
    return this._unmonitorPreviousEpisodes;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      chmod_folder: cdktf.stringToTerraform(this._chmodFolder),
      chown_group: cdktf.stringToTerraform(this._chownGroup),
      create_empty_folders: cdktf.booleanToTerraform(this._createEmptyFolders),
      delete_empty_folders: cdktf.booleanToTerraform(this._deleteEmptyFolders),
      download_propers_repacks: cdktf.stringToTerraform(this._downloadPropersRepacks),
      enable_media_info: cdktf.booleanToTerraform(this._enableMediaInfo),
      episode_title_required: cdktf.stringToTerraform(this._episodeTitleRequired),
      extra_file_extensions: cdktf.stringToTerraform(this._extraFileExtensions),
      file_date: cdktf.stringToTerraform(this._fileDate),
      hardlinks_copy: cdktf.booleanToTerraform(this._hardlinksCopy),
      import_extra_files: cdktf.booleanToTerraform(this._importExtraFiles),
      minimum_free_space: cdktf.numberToTerraform(this._minimumFreeSpace),
      recycle_bin_days: cdktf.numberToTerraform(this._recycleBinDays),
      recycle_bin_path: cdktf.stringToTerraform(this._recycleBinPath),
      rescan_after_refresh: cdktf.stringToTerraform(this._rescanAfterRefresh),
      set_permissions: cdktf.booleanToTerraform(this._setPermissions),
      skip_free_space_check: cdktf.booleanToTerraform(this._skipFreeSpaceCheck),
      unmonitor_previous_episodes: cdktf.booleanToTerraform(this._unmonitorPreviousEpisodes),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      chmod_folder: {
        value: cdktf.stringToHclTerraform(this._chmodFolder),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      chown_group: {
        value: cdktf.stringToHclTerraform(this._chownGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      create_empty_folders: {
        value: cdktf.booleanToHclTerraform(this._createEmptyFolders),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      delete_empty_folders: {
        value: cdktf.booleanToHclTerraform(this._deleteEmptyFolders),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      download_propers_repacks: {
        value: cdktf.stringToHclTerraform(this._downloadPropersRepacks),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_media_info: {
        value: cdktf.booleanToHclTerraform(this._enableMediaInfo),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      episode_title_required: {
        value: cdktf.stringToHclTerraform(this._episodeTitleRequired),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      extra_file_extensions: {
        value: cdktf.stringToHclTerraform(this._extraFileExtensions),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      file_date: {
        value: cdktf.stringToHclTerraform(this._fileDate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hardlinks_copy: {
        value: cdktf.booleanToHclTerraform(this._hardlinksCopy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      import_extra_files: {
        value: cdktf.booleanToHclTerraform(this._importExtraFiles),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      minimum_free_space: {
        value: cdktf.numberToHclTerraform(this._minimumFreeSpace),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      recycle_bin_days: {
        value: cdktf.numberToHclTerraform(this._recycleBinDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      recycle_bin_path: {
        value: cdktf.stringToHclTerraform(this._recycleBinPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rescan_after_refresh: {
        value: cdktf.stringToHclTerraform(this._rescanAfterRefresh),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      set_permissions: {
        value: cdktf.booleanToHclTerraform(this._setPermissions),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      skip_free_space_check: {
        value: cdktf.booleanToHclTerraform(this._skipFreeSpaceCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      unmonitor_previous_episodes: {
        value: cdktf.booleanToHclTerraform(this._unmonitorPreviousEpisodes),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
