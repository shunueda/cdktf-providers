// https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/notification_synology_indexer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NotificationSynologyIndexerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Include health warnings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/notification_synology_indexer#include_health_warnings NotificationSynologyIndexer#include_health_warnings}
  */
  readonly includeHealthWarnings?: boolean | cdktf.IResolvable;
  /**
  * NotificationSynology name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/notification_synology_indexer#name NotificationSynologyIndexer#name}
  */
  readonly name: string;
  /**
  * On download flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/notification_synology_indexer#on_download NotificationSynologyIndexer#on_download}
  */
  readonly onDownload?: boolean | cdktf.IResolvable;
  /**
  * On episode file delete flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/notification_synology_indexer#on_episode_file_delete NotificationSynologyIndexer#on_episode_file_delete}
  */
  readonly onEpisodeFileDelete?: boolean | cdktf.IResolvable;
  /**
  * On episode file delete for upgrade flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/notification_synology_indexer#on_episode_file_delete_for_upgrade NotificationSynologyIndexer#on_episode_file_delete_for_upgrade}
  */
  readonly onEpisodeFileDeleteForUpgrade?: boolean | cdktf.IResolvable;
  /**
  * On import complete flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/notification_synology_indexer#on_import_complete NotificationSynologyIndexer#on_import_complete}
  */
  readonly onImportComplete?: boolean | cdktf.IResolvable;
  /**
  * On rename flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/notification_synology_indexer#on_rename NotificationSynologyIndexer#on_rename}
  */
  readonly onRename?: boolean | cdktf.IResolvable;
  /**
  * On series add flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/notification_synology_indexer#on_series_add NotificationSynologyIndexer#on_series_add}
  */
  readonly onSeriesAdd?: boolean | cdktf.IResolvable;
  /**
  * On series delete flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/notification_synology_indexer#on_series_delete NotificationSynologyIndexer#on_series_delete}
  */
  readonly onSeriesDelete?: boolean | cdktf.IResolvable;
  /**
  * On upgrade flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/notification_synology_indexer#on_upgrade NotificationSynologyIndexer#on_upgrade}
  */
  readonly onUpgrade?: boolean | cdktf.IResolvable;
  /**
  * List of associated tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/notification_synology_indexer#tags NotificationSynologyIndexer#tags}
  */
  readonly tags?: number[];
  /**
  * Update library flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/notification_synology_indexer#update_library NotificationSynologyIndexer#update_library}
  */
  readonly updateLibrary?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/notification_synology_indexer sonarr_notification_synology_indexer}
*/
export class NotificationSynologyIndexer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sonarr_notification_synology_indexer";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NotificationSynologyIndexer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NotificationSynologyIndexer to import
  * @param importFromId The id of the existing NotificationSynologyIndexer that should be imported. Refer to the {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/notification_synology_indexer#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NotificationSynologyIndexer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sonarr_notification_synology_indexer", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/notification_synology_indexer sonarr_notification_synology_indexer} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NotificationSynologyIndexerConfig
  */
  public constructor(scope: Construct, id: string, config: NotificationSynologyIndexerConfig) {
    super(scope, id, {
      terraformResourceType: 'sonarr_notification_synology_indexer',
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
    this._includeHealthWarnings = config.includeHealthWarnings;
    this._name = config.name;
    this._onDownload = config.onDownload;
    this._onEpisodeFileDelete = config.onEpisodeFileDelete;
    this._onEpisodeFileDeleteForUpgrade = config.onEpisodeFileDeleteForUpgrade;
    this._onImportComplete = config.onImportComplete;
    this._onRename = config.onRename;
    this._onSeriesAdd = config.onSeriesAdd;
    this._onSeriesDelete = config.onSeriesDelete;
    this._onUpgrade = config.onUpgrade;
    this._tags = config.tags;
    this._updateLibrary = config.updateLibrary;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // include_health_warnings - computed: true, optional: true, required: false
  private _includeHealthWarnings?: boolean | cdktf.IResolvable; 
  public get includeHealthWarnings() {
    return this.getBooleanAttribute('include_health_warnings');
  }
  public set includeHealthWarnings(value: boolean | cdktf.IResolvable) {
    this._includeHealthWarnings = value;
  }
  public resetIncludeHealthWarnings() {
    this._includeHealthWarnings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeHealthWarningsInput() {
    return this._includeHealthWarnings;
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

  // on_download - computed: true, optional: true, required: false
  private _onDownload?: boolean | cdktf.IResolvable; 
  public get onDownload() {
    return this.getBooleanAttribute('on_download');
  }
  public set onDownload(value: boolean | cdktf.IResolvable) {
    this._onDownload = value;
  }
  public resetOnDownload() {
    this._onDownload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onDownloadInput() {
    return this._onDownload;
  }

  // on_episode_file_delete - computed: true, optional: true, required: false
  private _onEpisodeFileDelete?: boolean | cdktf.IResolvable; 
  public get onEpisodeFileDelete() {
    return this.getBooleanAttribute('on_episode_file_delete');
  }
  public set onEpisodeFileDelete(value: boolean | cdktf.IResolvable) {
    this._onEpisodeFileDelete = value;
  }
  public resetOnEpisodeFileDelete() {
    this._onEpisodeFileDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onEpisodeFileDeleteInput() {
    return this._onEpisodeFileDelete;
  }

  // on_episode_file_delete_for_upgrade - computed: true, optional: true, required: false
  private _onEpisodeFileDeleteForUpgrade?: boolean | cdktf.IResolvable; 
  public get onEpisodeFileDeleteForUpgrade() {
    return this.getBooleanAttribute('on_episode_file_delete_for_upgrade');
  }
  public set onEpisodeFileDeleteForUpgrade(value: boolean | cdktf.IResolvable) {
    this._onEpisodeFileDeleteForUpgrade = value;
  }
  public resetOnEpisodeFileDeleteForUpgrade() {
    this._onEpisodeFileDeleteForUpgrade = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onEpisodeFileDeleteForUpgradeInput() {
    return this._onEpisodeFileDeleteForUpgrade;
  }

  // on_import_complete - computed: true, optional: true, required: false
  private _onImportComplete?: boolean | cdktf.IResolvable; 
  public get onImportComplete() {
    return this.getBooleanAttribute('on_import_complete');
  }
  public set onImportComplete(value: boolean | cdktf.IResolvable) {
    this._onImportComplete = value;
  }
  public resetOnImportComplete() {
    this._onImportComplete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onImportCompleteInput() {
    return this._onImportComplete;
  }

  // on_rename - computed: true, optional: true, required: false
  private _onRename?: boolean | cdktf.IResolvable; 
  public get onRename() {
    return this.getBooleanAttribute('on_rename');
  }
  public set onRename(value: boolean | cdktf.IResolvable) {
    this._onRename = value;
  }
  public resetOnRename() {
    this._onRename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onRenameInput() {
    return this._onRename;
  }

  // on_series_add - computed: true, optional: true, required: false
  private _onSeriesAdd?: boolean | cdktf.IResolvable; 
  public get onSeriesAdd() {
    return this.getBooleanAttribute('on_series_add');
  }
  public set onSeriesAdd(value: boolean | cdktf.IResolvable) {
    this._onSeriesAdd = value;
  }
  public resetOnSeriesAdd() {
    this._onSeriesAdd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onSeriesAddInput() {
    return this._onSeriesAdd;
  }

  // on_series_delete - computed: true, optional: true, required: false
  private _onSeriesDelete?: boolean | cdktf.IResolvable; 
  public get onSeriesDelete() {
    return this.getBooleanAttribute('on_series_delete');
  }
  public set onSeriesDelete(value: boolean | cdktf.IResolvable) {
    this._onSeriesDelete = value;
  }
  public resetOnSeriesDelete() {
    this._onSeriesDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onSeriesDeleteInput() {
    return this._onSeriesDelete;
  }

  // on_upgrade - computed: true, optional: true, required: false
  private _onUpgrade?: boolean | cdktf.IResolvable; 
  public get onUpgrade() {
    return this.getBooleanAttribute('on_upgrade');
  }
  public set onUpgrade(value: boolean | cdktf.IResolvable) {
    this._onUpgrade = value;
  }
  public resetOnUpgrade() {
    this._onUpgrade = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onUpgradeInput() {
    return this._onUpgrade;
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

  // update_library - computed: true, optional: true, required: false
  private _updateLibrary?: boolean | cdktf.IResolvable; 
  public get updateLibrary() {
    return this.getBooleanAttribute('update_library');
  }
  public set updateLibrary(value: boolean | cdktf.IResolvable) {
    this._updateLibrary = value;
  }
  public resetUpdateLibrary() {
    this._updateLibrary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateLibraryInput() {
    return this._updateLibrary;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      include_health_warnings: cdktf.booleanToTerraform(this._includeHealthWarnings),
      name: cdktf.stringToTerraform(this._name),
      on_download: cdktf.booleanToTerraform(this._onDownload),
      on_episode_file_delete: cdktf.booleanToTerraform(this._onEpisodeFileDelete),
      on_episode_file_delete_for_upgrade: cdktf.booleanToTerraform(this._onEpisodeFileDeleteForUpgrade),
      on_import_complete: cdktf.booleanToTerraform(this._onImportComplete),
      on_rename: cdktf.booleanToTerraform(this._onRename),
      on_series_add: cdktf.booleanToTerraform(this._onSeriesAdd),
      on_series_delete: cdktf.booleanToTerraform(this._onSeriesDelete),
      on_upgrade: cdktf.booleanToTerraform(this._onUpgrade),
      tags: cdktf.listMapper(cdktf.numberToTerraform, false)(this._tags),
      update_library: cdktf.booleanToTerraform(this._updateLibrary),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      include_health_warnings: {
        value: cdktf.booleanToHclTerraform(this._includeHealthWarnings),
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
      on_download: {
        value: cdktf.booleanToHclTerraform(this._onDownload),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      on_episode_file_delete: {
        value: cdktf.booleanToHclTerraform(this._onEpisodeFileDelete),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      on_episode_file_delete_for_upgrade: {
        value: cdktf.booleanToHclTerraform(this._onEpisodeFileDeleteForUpgrade),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      on_import_complete: {
        value: cdktf.booleanToHclTerraform(this._onImportComplete),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      on_rename: {
        value: cdktf.booleanToHclTerraform(this._onRename),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      on_series_add: {
        value: cdktf.booleanToHclTerraform(this._onSeriesAdd),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      on_series_delete: {
        value: cdktf.booleanToHclTerraform(this._onSeriesDelete),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      on_upgrade: {
        value: cdktf.booleanToHclTerraform(this._onUpgrade),
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
      update_library: {
        value: cdktf.booleanToHclTerraform(this._updateLibrary),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
