// https://registry.terraform.io/providers/files-com/files/0.1.398/docs/data-sources/folder
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFilesFolderConfig extends cdktf.TerraformMetaArguments {
  /**
  * File/Folder path. This must be slash-delimited, but it must neither start nor end with a slash. Maximum of 5000 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.398/docs/data-sources/folder#path DataFilesFolder#path}
  */
  readonly path: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/files-com/files/0.1.398/docs/data-sources/folder files_folder}
*/
export class DataFilesFolder extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "files_folder";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFilesFolder resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFilesFolder to import
  * @param importFromId The id of the existing DataFilesFolder that should be imported. Refer to the {@link https://registry.terraform.io/providers/files-com/files/0.1.398/docs/data-sources/folder#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFilesFolder to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "files_folder", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/files-com/files/0.1.398/docs/data-sources/folder files_folder} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFilesFolderConfig
  */
  public constructor(scope: Construct, id: string, config: DataFilesFolderConfig) {
    super(scope, id, {
      terraformResourceType: 'files_folder',
      terraformGeneratorMetadata: {
        providerName: 'files',
        providerVersion: '0.1.398',
        providerVersionConstraint: '0.1.398'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._path = config.path;
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

  // custom_metadata - computed: true, optional: false, required: false
  private _customMetadata = new cdktf.AnyMap(this, "custom_metadata");
  public get customMetadata() {
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

  // priority_color - computed: true, optional: false, required: false
  public get priorityColor() {
    return this.getStringAttribute('priority_color');
  }

  // provided_mtime - computed: true, optional: false, required: false
  public get providedMtime() {
    return this.getStringAttribute('provided_mtime');
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
      path: cdktf.stringToTerraform(this._path),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      path: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
