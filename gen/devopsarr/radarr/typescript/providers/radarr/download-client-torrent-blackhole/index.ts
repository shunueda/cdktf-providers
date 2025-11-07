// https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/download_client_torrent_blackhole
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DownloadClientTorrentBlackholeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/download_client_torrent_blackhole#enable DownloadClientTorrentBlackhole#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Magnet file extension.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/download_client_torrent_blackhole#magnet_file_extension DownloadClientTorrentBlackhole#magnet_file_extension}
  */
  readonly magnetFileExtension?: string;
  /**
  * Download Client name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/download_client_torrent_blackhole#name DownloadClientTorrentBlackhole#name}
  */
  readonly name: string;
  /**
  * Priority.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/download_client_torrent_blackhole#priority DownloadClientTorrentBlackhole#priority}
  */
  readonly priority?: number;
  /**
  * Read only flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/download_client_torrent_blackhole#read_only DownloadClientTorrentBlackhole#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * Remove completed downloads flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/download_client_torrent_blackhole#remove_completed_downloads DownloadClientTorrentBlackhole#remove_completed_downloads}
  */
  readonly removeCompletedDownloads?: boolean | cdktf.IResolvable;
  /**
  * Remove failed downloads flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/download_client_torrent_blackhole#remove_failed_downloads DownloadClientTorrentBlackhole#remove_failed_downloads}
  */
  readonly removeFailedDownloads?: boolean | cdktf.IResolvable;
  /**
  * Save magnet files flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/download_client_torrent_blackhole#save_magnet_files DownloadClientTorrentBlackhole#save_magnet_files}
  */
  readonly saveMagnetFiles?: boolean | cdktf.IResolvable;
  /**
  * List of associated tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/download_client_torrent_blackhole#tags DownloadClientTorrentBlackhole#tags}
  */
  readonly tags?: number[];
  /**
  * Torrent folder.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/download_client_torrent_blackhole#torrent_folder DownloadClientTorrentBlackhole#torrent_folder}
  */
  readonly torrentFolder: string;
  /**
  * Watch folder flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/download_client_torrent_blackhole#watch_folder DownloadClientTorrentBlackhole#watch_folder}
  */
  readonly watchFolder: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/download_client_torrent_blackhole radarr_download_client_torrent_blackhole}
*/
export class DownloadClientTorrentBlackhole extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "radarr_download_client_torrent_blackhole";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DownloadClientTorrentBlackhole resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DownloadClientTorrentBlackhole to import
  * @param importFromId The id of the existing DownloadClientTorrentBlackhole that should be imported. Refer to the {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/download_client_torrent_blackhole#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DownloadClientTorrentBlackhole to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "radarr_download_client_torrent_blackhole", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/download_client_torrent_blackhole radarr_download_client_torrent_blackhole} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DownloadClientTorrentBlackholeConfig
  */
  public constructor(scope: Construct, id: string, config: DownloadClientTorrentBlackholeConfig) {
    super(scope, id, {
      terraformResourceType: 'radarr_download_client_torrent_blackhole',
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
    this._enable = config.enable;
    this._magnetFileExtension = config.magnetFileExtension;
    this._name = config.name;
    this._priority = config.priority;
    this._readOnly = config.readOnly;
    this._removeCompletedDownloads = config.removeCompletedDownloads;
    this._removeFailedDownloads = config.removeFailedDownloads;
    this._saveMagnetFiles = config.saveMagnetFiles;
    this._tags = config.tags;
    this._torrentFolder = config.torrentFolder;
    this._watchFolder = config.watchFolder;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enable - computed: true, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // magnet_file_extension - computed: true, optional: true, required: false
  private _magnetFileExtension?: string; 
  public get magnetFileExtension() {
    return this.getStringAttribute('magnet_file_extension');
  }
  public set magnetFileExtension(value: string) {
    this._magnetFileExtension = value;
  }
  public resetMagnetFileExtension() {
    this._magnetFileExtension = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get magnetFileExtensionInput() {
    return this._magnetFileExtension;
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

  // priority - computed: true, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // read_only - computed: true, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }

  // remove_completed_downloads - computed: true, optional: true, required: false
  private _removeCompletedDownloads?: boolean | cdktf.IResolvable; 
  public get removeCompletedDownloads() {
    return this.getBooleanAttribute('remove_completed_downloads');
  }
  public set removeCompletedDownloads(value: boolean | cdktf.IResolvable) {
    this._removeCompletedDownloads = value;
  }
  public resetRemoveCompletedDownloads() {
    this._removeCompletedDownloads = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeCompletedDownloadsInput() {
    return this._removeCompletedDownloads;
  }

  // remove_failed_downloads - computed: true, optional: true, required: false
  private _removeFailedDownloads?: boolean | cdktf.IResolvable; 
  public get removeFailedDownloads() {
    return this.getBooleanAttribute('remove_failed_downloads');
  }
  public set removeFailedDownloads(value: boolean | cdktf.IResolvable) {
    this._removeFailedDownloads = value;
  }
  public resetRemoveFailedDownloads() {
    this._removeFailedDownloads = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeFailedDownloadsInput() {
    return this._removeFailedDownloads;
  }

  // save_magnet_files - computed: true, optional: true, required: false
  private _saveMagnetFiles?: boolean | cdktf.IResolvable; 
  public get saveMagnetFiles() {
    return this.getBooleanAttribute('save_magnet_files');
  }
  public set saveMagnetFiles(value: boolean | cdktf.IResolvable) {
    this._saveMagnetFiles = value;
  }
  public resetSaveMagnetFiles() {
    this._saveMagnetFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saveMagnetFilesInput() {
    return this._saveMagnetFiles;
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: number[]; 
  public get tags() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('tags')));
  }
  public set tags(value: number[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // torrent_folder - computed: false, optional: false, required: true
  private _torrentFolder?: string; 
  public get torrentFolder() {
    return this.getStringAttribute('torrent_folder');
  }
  public set torrentFolder(value: string) {
    this._torrentFolder = value;
  }
  // Temporarily expose input value. Use with caution.
  public get torrentFolderInput() {
    return this._torrentFolder;
  }

  // watch_folder - computed: false, optional: false, required: true
  private _watchFolder?: string; 
  public get watchFolder() {
    return this.getStringAttribute('watch_folder');
  }
  public set watchFolder(value: string) {
    this._watchFolder = value;
  }
  // Temporarily expose input value. Use with caution.
  public get watchFolderInput() {
    return this._watchFolder;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enable: cdktf.booleanToTerraform(this._enable),
      magnet_file_extension: cdktf.stringToTerraform(this._magnetFileExtension),
      name: cdktf.stringToTerraform(this._name),
      priority: cdktf.numberToTerraform(this._priority),
      read_only: cdktf.booleanToTerraform(this._readOnly),
      remove_completed_downloads: cdktf.booleanToTerraform(this._removeCompletedDownloads),
      remove_failed_downloads: cdktf.booleanToTerraform(this._removeFailedDownloads),
      save_magnet_files: cdktf.booleanToTerraform(this._saveMagnetFiles),
      tags: cdktf.listMapper(cdktf.numberToTerraform, false)(this._tags),
      torrent_folder: cdktf.stringToTerraform(this._torrentFolder),
      watch_folder: cdktf.stringToTerraform(this._watchFolder),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enable: {
        value: cdktf.booleanToHclTerraform(this._enable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      magnet_file_extension: {
        value: cdktf.stringToHclTerraform(this._magnetFileExtension),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      read_only: {
        value: cdktf.booleanToHclTerraform(this._readOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      remove_completed_downloads: {
        value: cdktf.booleanToHclTerraform(this._removeCompletedDownloads),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      remove_failed_downloads: {
        value: cdktf.booleanToHclTerraform(this._removeFailedDownloads),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      save_magnet_files: {
        value: cdktf.booleanToHclTerraform(this._saveMagnetFiles),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      torrent_folder: {
        value: cdktf.stringToHclTerraform(this._torrentFolder),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      watch_folder: {
        value: cdktf.stringToHclTerraform(this._watchFolder),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
