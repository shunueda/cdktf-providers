// https://registry.terraform.io/providers/files-com/files/0.1.383/docs/data-sources/remote_mount_backend
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFilesRemoteMountBackendConfig extends cdktf.TerraformMetaArguments {
  /**
  * Unique identifier for this backend.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.383/docs/data-sources/remote_mount_backend#id DataFilesRemoteMountBackend#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/files-com/files/0.1.383/docs/data-sources/remote_mount_backend files_remote_mount_backend}
*/
export class DataFilesRemoteMountBackend extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "files_remote_mount_backend";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFilesRemoteMountBackend resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFilesRemoteMountBackend to import
  * @param importFromId The id of the existing DataFilesRemoteMountBackend that should be imported. Refer to the {@link https://registry.terraform.io/providers/files-com/files/0.1.383/docs/data-sources/remote_mount_backend#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFilesRemoteMountBackend to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "files_remote_mount_backend", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/files-com/files/0.1.383/docs/data-sources/remote_mount_backend files_remote_mount_backend} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFilesRemoteMountBackendConfig
  */
  public constructor(scope: Construct, id: string, config: DataFilesRemoteMountBackendConfig) {
    super(scope, id, {
      terraformResourceType: 'files_remote_mount_backend',
      terraformGeneratorMetadata: {
        providerName: 'files',
        providerVersion: '0.1.383',
        providerVersionConstraint: '0.1.383'
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

  // canary_file_path - computed: true, optional: false, required: false
  public get canaryFilePath() {
    return this.getStringAttribute('canary_file_path');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // fall - computed: true, optional: false, required: false
  public get fall() {
    return this.getNumberAttribute('fall');
  }

  // health_check_enabled - computed: true, optional: false, required: false
  public get healthCheckEnabled() {
    return this.getBooleanAttribute('health_check_enabled');
  }

  // health_check_results - computed: true, optional: false, required: false
  private _healthCheckResults = new cdktf.AnyMap(this, "health_check_results");
  public get healthCheckResults() {
    return this._healthCheckResults;
  }

  // health_check_type - computed: true, optional: false, required: false
  public get healthCheckType() {
    return this.getStringAttribute('health_check_type');
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

  // interval - computed: true, optional: false, required: false
  public get interval() {
    return this.getNumberAttribute('interval');
  }

  // min_free_cpu - computed: true, optional: false, required: false
  public get minFreeCpu() {
    return this.getStringAttribute('min_free_cpu');
  }

  // min_free_mem - computed: true, optional: false, required: false
  public get minFreeMem() {
    return this.getStringAttribute('min_free_mem');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }

  // remote_path - computed: true, optional: false, required: false
  public get remotePath() {
    return this.getStringAttribute('remote_path');
  }

  // remote_server_id - computed: true, optional: false, required: false
  public get remoteServerId() {
    return this.getNumberAttribute('remote_server_id');
  }

  // remote_server_mount_id - computed: true, optional: false, required: false
  public get remoteServerMountId() {
    return this.getNumberAttribute('remote_server_mount_id');
  }

  // rise - computed: true, optional: false, required: false
  public get rise() {
    return this.getNumberAttribute('rise');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // undergoing_maintenance - computed: true, optional: false, required: false
  public get undergoingMaintenance() {
    return this.getBooleanAttribute('undergoing_maintenance');
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
