// https://registry.terraform.io/providers/files-com/files/0.1.379/docs/resources/folder
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FolderConfig extends cdktf.TerraformMetaArguments {
  /**
  * Custom metadata map of keys and values. Limited to 32 keys, 256 characters per key and 1024 characters per value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.379/docs/resources/folder#custom_metadata Folder#custom_metadata}
  */
  readonly customMetadata?: { [key: string]: any };
  /**
  * Create parent directories if they do not exist?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.379/docs/resources/folder#mkdir_parents Folder#mkdir_parents}
  */
  readonly mkdirParents?: boolean | cdktf.IResolvable;
  /**
  * File/Folder path. This must be slash-delimited, but it must neither start nor end with a slash. Maximum of 5000 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.379/docs/resources/folder#path Folder#path}
  */
  readonly path: string;
  /**
  * Bookmark/priority color of file/folder
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.379/docs/resources/folder#priority_color Folder#priority_color}
  */
  readonly priorityColor?: string;
  /**
  * File last modified date/time, according to the client who set it.  Files.com allows desktop, FTP, SFTP, and WebDAV clients to set modified at times.  This allows Desktop<->Cloud syncing to preserve modified at times.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.379/docs/resources/folder#provided_mtime Folder#provided_mtime}
  */
  readonly providedMtime?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/files-com/files/0.1.379/docs/resources/folder files_folder}
*/
export class Folder extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "files_folder";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Folder resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Folder to import
  * @param importFromId The id of the existing Folder that should be imported. Refer to the {@link https://registry.terraform.io/providers/files-com/files/0.1.379/docs/resources/folder#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Folder to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "files_folder", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/files-com/files/0.1.379/docs/resources/folder files_folder} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FolderConfig
  */
  public constructor(scope: Construct, id: string, config: FolderConfig) {
    super(scope, id, {
      terraformResourceType: 'files_folder',
      terraformGeneratorMetadata: {
        providerName: 'files',
        providerVersion: '0.1.379',
        providerVersionConstraint: '0.1.379'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._customMetadata = config.customMetadata;
    this._mkdirParents = config.mkdirParents;
    this._path = config.path;
    this._priorityColor = config.priorityColor;
    this._providedMtime = config.providedMtime;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // crc32 - computed: true, optional: false, required: false
  public get crc32() {
    return this.getStringAttribute('crc32');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by_api_key_id - computed: true, optional: false, required: false
  public get createdByApiKeyId() {
    return this.getNumberAttribute('created_by_api_key_id');
  }

  // created_by_as2_incoming_message_id - computed: true, optional: false, required: false
  public get createdByAs2IncomingMessageId() {
    return this.getNumberAttribute('created_by_as2_incoming_message_id');
  }

  // created_by_automation_id - computed: true, optional: false, required: false
  public get createdByAutomationId() {
    return this.getNumberAttribute('created_by_automation_id');
  }

  // created_by_bundle_registration_id - computed: true, optional: false, required: false
  public get createdByBundleRegistrationId() {
    return this.getNumberAttribute('created_by_bundle_registration_id');
  }

  // created_by_id - computed: true, optional: false, required: false
  public get createdById() {
    return this.getNumberAttribute('created_by_id');
  }

  // created_by_inbox_id - computed: true, optional: false, required: false
  public get createdByInboxId() {
    return this.getNumberAttribute('created_by_inbox_id');
  }

  // created_by_remote_server_id - computed: true, optional: false, required: false
  public get createdByRemoteServerId() {
    return this.getNumberAttribute('created_by_remote_server_id');
  }

  // created_by_remote_server_sync_id - computed: true, optional: false, required: false
  public get createdByRemoteServerSyncId() {
    return this.getNumberAttribute('created_by_remote_server_sync_id');
  }

  // custom_metadata - computed: true, optional: true, required: false
  private _customMetadata?: { [key: string]: any }; 
  public get customMetadata() {
    return this.getAnyMapAttribute('custom_metadata');
  }
  public set customMetadata(value: { [key: string]: any }) {
    this._customMetadata = value;
  }
  public resetCustomMetadata() {
    this._customMetadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customMetadataInput() {
    return this._customMetadata;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // download_uri - computed: true, optional: false, required: false
  public get downloadUri() {
    return this.getStringAttribute('download_uri');
  }

  // is_locked - computed: true, optional: false, required: false
  public get isLocked() {
    return this.getBooleanAttribute('is_locked');
  }

  // last_modified_by_api_key_id - computed: true, optional: false, required: false
  public get lastModifiedByApiKeyId() {
    return this.getNumberAttribute('last_modified_by_api_key_id');
  }

  // last_modified_by_automation_id - computed: true, optional: false, required: false
  public get lastModifiedByAutomationId() {
    return this.getNumberAttribute('last_modified_by_automation_id');
  }

  // last_modified_by_bundle_registration_id - computed: true, optional: false, required: false
  public get lastModifiedByBundleRegistrationId() {
    return this.getNumberAttribute('last_modified_by_bundle_registration_id');
  }

  // last_modified_by_id - computed: true, optional: false, required: false
  public get lastModifiedById() {
    return this.getNumberAttribute('last_modified_by_id');
  }

  // last_modified_by_remote_server_id - computed: true, optional: false, required: false
  public get lastModifiedByRemoteServerId() {
    return this.getNumberAttribute('last_modified_by_remote_server_id');
  }

  // last_modified_by_remote_server_sync_id - computed: true, optional: false, required: false
  public get lastModifiedByRemoteServerSyncId() {
    return this.getNumberAttribute('last_modified_by_remote_server_sync_id');
  }

  // md5 - computed: true, optional: false, required: false
  public get md5() {
    return this.getStringAttribute('md5');
  }

  // mime_type - computed: true, optional: false, required: false
  public get mimeType() {
    return this.getStringAttribute('mime_type');
  }

  // mkdir_parents - computed: false, optional: true, required: false
  private _mkdirParents?: boolean | cdktf.IResolvable; 
  public get mkdirParents() {
    return this.getBooleanAttribute('mkdir_parents');
  }
  public set mkdirParents(value: boolean | cdktf.IResolvable) {
    this._mkdirParents = value;
  }
  public resetMkdirParents() {
    this._mkdirParents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mkdirParentsInput() {
    return this._mkdirParents;
  }

  // mtime - computed: true, optional: false, required: false
  public get mtime() {
    return this.getStringAttribute('mtime');
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // permissions - computed: true, optional: false, required: false
  public get permissions() {
    return this.getStringAttribute('permissions');
  }

  // preview - computed: true, optional: false, required: false
  public get preview() {
    return this.getStringAttribute('preview');
  }

  // preview_id - computed: true, optional: false, required: false
  public get previewId() {
    return this.getNumberAttribute('preview_id');
  }

  // priority_color - computed: true, optional: true, required: false
  private _priorityColor?: string; 
  public get priorityColor() {
    return this.getStringAttribute('priority_color');
  }
  public set priorityColor(value: string) {
    this._priorityColor = value;
  }
  public resetPriorityColor() {
    this._priorityColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityColorInput() {
    return this._priorityColor;
  }

  // provided_mtime - computed: true, optional: true, required: false
  private _providedMtime?: string; 
  public get providedMtime() {
    return this.getStringAttribute('provided_mtime');
  }
  public set providedMtime(value: string) {
    this._providedMtime = value;
  }
  public resetProvidedMtime() {
    this._providedMtime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providedMtimeInput() {
    return this._providedMtime;
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // sha1 - computed: true, optional: false, required: false
  public get sha1() {
    return this.getStringAttribute('sha1');
  }

  // sha256 - computed: true, optional: false, required: false
  public get sha256() {
    return this.getStringAttribute('sha256');
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
  }

  // subfolders_locked - computed: true, optional: false, required: false
  public get subfoldersLocked() {
    return this.getBooleanAttribute('subfolders_locked');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      custom_metadata: cdktf.hashMapper(cdktf.anyToTerraform)(this._customMetadata),
      mkdir_parents: cdktf.booleanToTerraform(this._mkdirParents),
      path: cdktf.stringToTerraform(this._path),
      priority_color: cdktf.stringToTerraform(this._priorityColor),
      provided_mtime: cdktf.stringToTerraform(this._providedMtime),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      custom_metadata: {
        value: cdktf.hashMapperHcl(cdktf.anyToHclTerraform)(this._customMetadata),
        isBlock: false,
        type: "map",
        storageClassType: "anyMap",
      },
      mkdir_parents: {
        value: cdktf.booleanToHclTerraform(this._mkdirParents),
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
      priority_color: {
        value: cdktf.stringToHclTerraform(this._priorityColor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provided_mtime: {
        value: cdktf.stringToHclTerraform(this._providedMtime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
