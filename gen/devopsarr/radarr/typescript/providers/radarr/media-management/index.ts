// https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/media_management
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MediaManagementConfig extends cdktf.TerraformMetaArguments {
  /**
  * Auto rename folders.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/media_management#auto_rename_folders MediaManagement#auto_rename_folders}
  */
  readonly autoRenameFolders: boolean | cdktf.IResolvable;
  /**
  * Auto unmonitor previously downloaded movies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/media_management#auto_unmonitor_previously_downloaded_movies MediaManagement#auto_unmonitor_previously_downloaded_movies}
  */
  readonly autoUnmonitorPreviouslyDownloadedMovies: boolean | cdktf.IResolvable;
  /**
  * Permission in linux format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/media_management#chmod_folder MediaManagement#chmod_folder}
  */
  readonly chmodFolder: string;
  /**
  * Group used for permission.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/media_management#chown_group MediaManagement#chown_group}
  */
  readonly chownGroup: string;
  /**
  * Use hardlinks instead of copy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/media_management#copy_using_hardlinks MediaManagement#copy_using_hardlinks}
  */
  readonly copyUsingHardlinks: boolean | cdktf.IResolvable;
  /**
  * Create empty movies directories.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/media_management#create_empty_movie_folders MediaManagement#create_empty_movie_folders}
  */
  readonly createEmptyMovieFolders: boolean | cdktf.IResolvable;
  /**
  * Delete empty movies directories.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/media_management#delete_empty_folders MediaManagement#delete_empty_folders}
  */
  readonly deleteEmptyFolders: boolean | cdktf.IResolvable;
  /**
  * Download proper and repack policy. valid inputs are: 'preferAndUpgrade', 'doNotUpgrade', and 'doNotPrefer'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/media_management#download_propers_and_repacks MediaManagement#download_propers_and_repacks}
  */
  readonly downloadPropersAndRepacks: string;
  /**
  * Scan files details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/media_management#enable_media_info MediaManagement#enable_media_info}
  */
  readonly enableMediaInfo: boolean | cdktf.IResolvable;
  /**
  * Comma separated list of extra files to import (.nfo will be imported as .nfo-orig).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/media_management#extra_file_extensions MediaManagement#extra_file_extensions}
  */
  readonly extraFileExtensions: string;
  /**
  * Define the file date modification. valid inputs are: 'none', 'cinemas, and 'release'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/media_management#file_date MediaManagement#file_date}
  */
  readonly fileDate: string;
  /**
  * Import extra files. If enabled it will leverage 'extra_file_extensions'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/media_management#import_extra_files MediaManagement#import_extra_files}
  */
  readonly importExtraFiles: boolean | cdktf.IResolvable;
  /**
  * Minimum free space in MB to allow import.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/media_management#minimum_free_space_when_importing MediaManagement#minimum_free_space_when_importing}
  */
  readonly minimumFreeSpaceWhenImporting: number;
  /**
  * Path default static.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/media_management#paths_default_static MediaManagement#paths_default_static}
  */
  readonly pathsDefaultStatic: boolean | cdktf.IResolvable;
  /**
  * Recycle bin absolute path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/media_management#recycle_bin MediaManagement#recycle_bin}
  */
  readonly recycleBin: string;
  /**
  * Recyle bin days of retention.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/media_management#recycle_bin_cleanup_days MediaManagement#recycle_bin_cleanup_days}
  */
  readonly recycleBinCleanupDays: number;
  /**
  * Rescan after refresh policy. valid inputs are: 'always', 'afterManual' and 'never'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/media_management#rescan_after_refresh MediaManagement#rescan_after_refresh}
  */
  readonly rescanAfterRefresh: string;
  /**
  * Set permission for imported files.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/media_management#set_permissions_linux MediaManagement#set_permissions_linux}
  */
  readonly setPermissionsLinux: boolean | cdktf.IResolvable;
  /**
  * Skip free space check before importing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/media_management#skip_free_space_check_when_importing MediaManagement#skip_free_space_check_when_importing}
  */
  readonly skipFreeSpaceCheckWhenImporting: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/media_management radarr_media_management}
*/
export class MediaManagement extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "radarr_media_management";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MediaManagement resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MediaManagement to import
  * @param importFromId The id of the existing MediaManagement that should be imported. Refer to the {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/media_management#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MediaManagement to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "radarr_media_management", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/media_management radarr_media_management} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MediaManagementConfig
  */
  public constructor(scope: Construct, id: string, config: MediaManagementConfig) {
    super(scope, id, {
      terraformResourceType: 'radarr_media_management',
      terraformGeneratorMetadata: {
        providerName: 'radarr',
        providerVersion: '2.3.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoRenameFolders = config.autoRenameFolders;
    this._autoUnmonitorPreviouslyDownloadedMovies = config.autoUnmonitorPreviouslyDownloadedMovies;
    this._chmodFolder = config.chmodFolder;
    this._chownGroup = config.chownGroup;
    this._copyUsingHardlinks = config.copyUsingHardlinks;
    this._createEmptyMovieFolders = config.createEmptyMovieFolders;
    this._deleteEmptyFolders = config.deleteEmptyFolders;
    this._downloadPropersAndRepacks = config.downloadPropersAndRepacks;
    this._enableMediaInfo = config.enableMediaInfo;
    this._extraFileExtensions = config.extraFileExtensions;
    this._fileDate = config.fileDate;
    this._importExtraFiles = config.importExtraFiles;
    this._minimumFreeSpaceWhenImporting = config.minimumFreeSpaceWhenImporting;
    this._pathsDefaultStatic = config.pathsDefaultStatic;
    this._recycleBin = config.recycleBin;
    this._recycleBinCleanupDays = config.recycleBinCleanupDays;
    this._rescanAfterRefresh = config.rescanAfterRefresh;
    this._setPermissionsLinux = config.setPermissionsLinux;
    this._skipFreeSpaceCheckWhenImporting = config.skipFreeSpaceCheckWhenImporting;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_rename_folders - computed: false, optional: false, required: true
  private _autoRenameFolders?: boolean | cdktf.IResolvable; 
  public get autoRenameFolders() {
    return this.getBooleanAttribute('auto_rename_folders');
  }
  public set autoRenameFolders(value: boolean | cdktf.IResolvable) {
    this._autoRenameFolders = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRenameFoldersInput() {
    return this._autoRenameFolders;
  }

  // auto_unmonitor_previously_downloaded_movies - computed: false, optional: false, required: true
  private _autoUnmonitorPreviouslyDownloadedMovies?: boolean | cdktf.IResolvable; 
  public get autoUnmonitorPreviouslyDownloadedMovies() {
    return this.getBooleanAttribute('auto_unmonitor_previously_downloaded_movies');
  }
  public set autoUnmonitorPreviouslyDownloadedMovies(value: boolean | cdktf.IResolvable) {
    this._autoUnmonitorPreviouslyDownloadedMovies = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoUnmonitorPreviouslyDownloadedMoviesInput() {
    return this._autoUnmonitorPreviouslyDownloadedMovies;
  }

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

  // copy_using_hardlinks - computed: false, optional: false, required: true
  private _copyUsingHardlinks?: boolean | cdktf.IResolvable; 
  public get copyUsingHardlinks() {
    return this.getBooleanAttribute('copy_using_hardlinks');
  }
  public set copyUsingHardlinks(value: boolean | cdktf.IResolvable) {
    this._copyUsingHardlinks = value;
  }
  // Temporarily expose input value. Use with caution.
  public get copyUsingHardlinksInput() {
    return this._copyUsingHardlinks;
  }

  // create_empty_movie_folders - computed: false, optional: false, required: true
  private _createEmptyMovieFolders?: boolean | cdktf.IResolvable; 
  public get createEmptyMovieFolders() {
    return this.getBooleanAttribute('create_empty_movie_folders');
  }
  public set createEmptyMovieFolders(value: boolean | cdktf.IResolvable) {
    this._createEmptyMovieFolders = value;
  }
  // Temporarily expose input value. Use with caution.
  public get createEmptyMovieFoldersInput() {
    return this._createEmptyMovieFolders;
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

  // download_propers_and_repacks - computed: false, optional: false, required: true
  private _downloadPropersAndRepacks?: string; 
  public get downloadPropersAndRepacks() {
    return this.getStringAttribute('download_propers_and_repacks');
  }
  public set downloadPropersAndRepacks(value: string) {
    this._downloadPropersAndRepacks = value;
  }
  // Temporarily expose input value. Use with caution.
  public get downloadPropersAndRepacksInput() {
    return this._downloadPropersAndRepacks;
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

  // minimum_free_space_when_importing - computed: false, optional: false, required: true
  private _minimumFreeSpaceWhenImporting?: number; 
  public get minimumFreeSpaceWhenImporting() {
    return this.getNumberAttribute('minimum_free_space_when_importing');
  }
  public set minimumFreeSpaceWhenImporting(value: number) {
    this._minimumFreeSpaceWhenImporting = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumFreeSpaceWhenImportingInput() {
    return this._minimumFreeSpaceWhenImporting;
  }

  // paths_default_static - computed: false, optional: false, required: true
  private _pathsDefaultStatic?: boolean | cdktf.IResolvable; 
  public get pathsDefaultStatic() {
    return this.getBooleanAttribute('paths_default_static');
  }
  public set pathsDefaultStatic(value: boolean | cdktf.IResolvable) {
    this._pathsDefaultStatic = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathsDefaultStaticInput() {
    return this._pathsDefaultStatic;
  }

  // recycle_bin - computed: false, optional: false, required: true
  private _recycleBin?: string; 
  public get recycleBin() {
    return this.getStringAttribute('recycle_bin');
  }
  public set recycleBin(value: string) {
    this._recycleBin = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recycleBinInput() {
    return this._recycleBin;
  }

  // recycle_bin_cleanup_days - computed: false, optional: false, required: true
  private _recycleBinCleanupDays?: number; 
  public get recycleBinCleanupDays() {
    return this.getNumberAttribute('recycle_bin_cleanup_days');
  }
  public set recycleBinCleanupDays(value: number) {
    this._recycleBinCleanupDays = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recycleBinCleanupDaysInput() {
    return this._recycleBinCleanupDays;
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

  // set_permissions_linux - computed: false, optional: false, required: true
  private _setPermissionsLinux?: boolean | cdktf.IResolvable; 
  public get setPermissionsLinux() {
    return this.getBooleanAttribute('set_permissions_linux');
  }
  public set setPermissionsLinux(value: boolean | cdktf.IResolvable) {
    this._setPermissionsLinux = value;
  }
  // Temporarily expose input value. Use with caution.
  public get setPermissionsLinuxInput() {
    return this._setPermissionsLinux;
  }

  // skip_free_space_check_when_importing - computed: false, optional: false, required: true
  private _skipFreeSpaceCheckWhenImporting?: boolean | cdktf.IResolvable; 
  public get skipFreeSpaceCheckWhenImporting() {
    return this.getBooleanAttribute('skip_free_space_check_when_importing');
  }
  public set skipFreeSpaceCheckWhenImporting(value: boolean | cdktf.IResolvable) {
    this._skipFreeSpaceCheckWhenImporting = value;
  }
  // Temporarily expose input value. Use with caution.
  public get skipFreeSpaceCheckWhenImportingInput() {
    return this._skipFreeSpaceCheckWhenImporting;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_rename_folders: cdktf.booleanToTerraform(this._autoRenameFolders),
      auto_unmonitor_previously_downloaded_movies: cdktf.booleanToTerraform(this._autoUnmonitorPreviouslyDownloadedMovies),
      chmod_folder: cdktf.stringToTerraform(this._chmodFolder),
      chown_group: cdktf.stringToTerraform(this._chownGroup),
      copy_using_hardlinks: cdktf.booleanToTerraform(this._copyUsingHardlinks),
      create_empty_movie_folders: cdktf.booleanToTerraform(this._createEmptyMovieFolders),
      delete_empty_folders: cdktf.booleanToTerraform(this._deleteEmptyFolders),
      download_propers_and_repacks: cdktf.stringToTerraform(this._downloadPropersAndRepacks),
      enable_media_info: cdktf.booleanToTerraform(this._enableMediaInfo),
      extra_file_extensions: cdktf.stringToTerraform(this._extraFileExtensions),
      file_date: cdktf.stringToTerraform(this._fileDate),
      import_extra_files: cdktf.booleanToTerraform(this._importExtraFiles),
      minimum_free_space_when_importing: cdktf.numberToTerraform(this._minimumFreeSpaceWhenImporting),
      paths_default_static: cdktf.booleanToTerraform(this._pathsDefaultStatic),
      recycle_bin: cdktf.stringToTerraform(this._recycleBin),
      recycle_bin_cleanup_days: cdktf.numberToTerraform(this._recycleBinCleanupDays),
      rescan_after_refresh: cdktf.stringToTerraform(this._rescanAfterRefresh),
      set_permissions_linux: cdktf.booleanToTerraform(this._setPermissionsLinux),
      skip_free_space_check_when_importing: cdktf.booleanToTerraform(this._skipFreeSpaceCheckWhenImporting),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_rename_folders: {
        value: cdktf.booleanToHclTerraform(this._autoRenameFolders),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_unmonitor_previously_downloaded_movies: {
        value: cdktf.booleanToHclTerraform(this._autoUnmonitorPreviouslyDownloadedMovies),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
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
      copy_using_hardlinks: {
        value: cdktf.booleanToHclTerraform(this._copyUsingHardlinks),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      create_empty_movie_folders: {
        value: cdktf.booleanToHclTerraform(this._createEmptyMovieFolders),
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
      download_propers_and_repacks: {
        value: cdktf.stringToHclTerraform(this._downloadPropersAndRepacks),
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
      import_extra_files: {
        value: cdktf.booleanToHclTerraform(this._importExtraFiles),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      minimum_free_space_when_importing: {
        value: cdktf.numberToHclTerraform(this._minimumFreeSpaceWhenImporting),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      paths_default_static: {
        value: cdktf.booleanToHclTerraform(this._pathsDefaultStatic),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      recycle_bin: {
        value: cdktf.stringToHclTerraform(this._recycleBin),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      recycle_bin_cleanup_days: {
        value: cdktf.numberToHclTerraform(this._recycleBinCleanupDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rescan_after_refresh: {
        value: cdktf.stringToHclTerraform(this._rescanAfterRefresh),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      set_permissions_linux: {
        value: cdktf.booleanToHclTerraform(this._setPermissionsLinux),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      skip_free_space_check_when_importing: {
        value: cdktf.booleanToHclTerraform(this._skipFreeSpaceCheckWhenImporting),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
