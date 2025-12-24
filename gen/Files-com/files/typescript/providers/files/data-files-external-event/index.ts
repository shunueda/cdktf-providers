// https://registry.terraform.io/providers/files-com/files/0.1.420/docs/data-sources/external_event
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFilesExternalEventConfig extends cdktf.TerraformMetaArguments {
  /**
  * Event ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.420/docs/data-sources/external_event#id DataFilesExternalEvent#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/files-com/files/0.1.420/docs/data-sources/external_event files_external_event}
*/
export class DataFilesExternalEvent extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "files_external_event";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFilesExternalEvent resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFilesExternalEvent to import
  * @param importFromId The id of the existing DataFilesExternalEvent that should be imported. Refer to the {@link https://registry.terraform.io/providers/files-com/files/0.1.420/docs/data-sources/external_event#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFilesExternalEvent to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "files_external_event", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/files-com/files/0.1.420/docs/data-sources/external_event files_external_event} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFilesExternalEventConfig
  */
  public constructor(scope: Construct, id: string, config: DataFilesExternalEventConfig) {
    super(scope, id, {
      terraformResourceType: 'files_external_event',
      terraformGeneratorMetadata: {
        providerName: 'files',
        providerVersion: '0.1.420',
        providerVersionConstraint: '0.1.420'
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

  // body_url - computed: true, optional: false, required: false
  public get bodyUrl() {
    return this.getStringAttribute('body_url');
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

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // errored_files - computed: true, optional: false, required: false
  public get erroredFiles() {
    return this.getNumberAttribute('errored_files');
  }

  // event_type - computed: true, optional: false, required: false
  public get eventType() {
    return this.getStringAttribute('event_type');
  }

  // folder_behavior_id - computed: true, optional: false, required: false
  public get folderBehaviorId() {
    return this.getNumberAttribute('folder_behavior_id');
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

  // remote_server_type - computed: true, optional: false, required: false
  public get remoteServerType() {
    return this.getStringAttribute('remote_server_type');
  }

  // siem_http_destination_id - computed: true, optional: false, required: false
  public get siemHttpDestinationId() {
    return this.getNumberAttribute('siem_http_destination_id');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // successful_files - computed: true, optional: false, required: false
  public get successfulFiles() {
    return this.getNumberAttribute('successful_files');
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
