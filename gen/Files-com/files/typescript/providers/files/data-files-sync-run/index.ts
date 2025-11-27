// https://registry.terraform.io/providers/files-com/files/0.1.398/docs/data-sources/sync_run
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFilesSyncRunConfig extends cdktf.TerraformMetaArguments {
  /**
  * SyncRun ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.398/docs/data-sources/sync_run#id DataFilesSyncRun#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/files-com/files/0.1.398/docs/data-sources/sync_run files_sync_run}
*/
export class DataFilesSyncRun extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "files_sync_run";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFilesSyncRun resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFilesSyncRun to import
  * @param importFromId The id of the existing DataFilesSyncRun that should be imported. Refer to the {@link https://registry.terraform.io/providers/files-com/files/0.1.398/docs/data-sources/sync_run#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFilesSyncRun to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "files_sync_run", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/files-com/files/0.1.398/docs/data-sources/sync_run files_sync_run} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFilesSyncRunConfig
  */
  public constructor(scope: Construct, id: string, config: DataFilesSyncRunConfig) {
    super(scope, id, {
      terraformResourceType: 'files_sync_run',
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // body - computed: true, optional: false, required: false
  public get body() {
    return this.getStringAttribute('body');
  }

  // bytes_synced - computed: true, optional: false, required: false
  public get bytesSynced() {
    return this.getNumberAttribute('bytes_synced');
  }

  // compared_files - computed: true, optional: false, required: false
  public get comparedFiles() {
    return this.getNumberAttribute('compared_files');
  }

  // compared_folders - computed: true, optional: false, required: false
  public get comparedFolders() {
    return this.getNumberAttribute('compared_folders');
  }

  // completed_at - computed: true, optional: false, required: false
  public get completedAt() {
    return this.getStringAttribute('completed_at');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // dest_remote_server_type - computed: true, optional: false, required: false
  public get destRemoteServerType() {
    return this.getStringAttribute('dest_remote_server_type');
  }

  // dry_run - computed: true, optional: false, required: false
  public get dryRun() {
    return this.getBooleanAttribute('dry_run');
  }

  // errored_files - computed: true, optional: false, required: false
  public get erroredFiles() {
    return this.getNumberAttribute('errored_files');
  }

  // estimated_bytes_count - computed: true, optional: false, required: false
  public get estimatedBytesCount() {
    return this.getNumberAttribute('estimated_bytes_count');
  }

  // event_errors - computed: true, optional: false, required: false
  public get eventErrors() {
    return this.getListAttribute('event_errors');
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

  // log_url - computed: true, optional: false, required: false
  public get logUrl() {
    return this.getStringAttribute('log_url');
  }

  // runtime - computed: true, optional: false, required: false
  public get runtime() {
    return this.getStringAttribute('runtime');
  }

  // site_id - computed: true, optional: false, required: false
  public get siteId() {
    return this.getNumberAttribute('site_id');
  }

  // src_remote_server_type - computed: true, optional: false, required: false
  public get srcRemoteServerType() {
    return this.getStringAttribute('src_remote_server_type');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // successful_files - computed: true, optional: false, required: false
  public get successfulFiles() {
    return this.getNumberAttribute('successful_files');
  }

  // sync_id - computed: true, optional: false, required: false
  public get syncId() {
    return this.getNumberAttribute('sync_id');
  }

  // sync_name - computed: true, optional: false, required: false
  public get syncName() {
    return this.getStringAttribute('sync_name');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
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
