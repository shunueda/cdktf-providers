// https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/lustre_file_storage_object_storage_link_sync_job
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciLustreFileStorageObjectStorageLinkSyncJobConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/lustre_file_storage_object_storage_link_sync_job#id DataOciLustreFileStorageObjectStorageLinkSyncJob#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/lustre_file_storage_object_storage_link_sync_job#object_storage_link_id DataOciLustreFileStorageObjectStorageLinkSyncJob#object_storage_link_id}
  */
  readonly objectStorageLinkId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/lustre_file_storage_object_storage_link_sync_job#sync_job_id DataOciLustreFileStorageObjectStorageLinkSyncJob#sync_job_id}
  */
  readonly syncJobId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/lustre_file_storage_object_storage_link_sync_job oci_lustre_file_storage_object_storage_link_sync_job}
*/
export class DataOciLustreFileStorageObjectStorageLinkSyncJob extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_lustre_file_storage_object_storage_link_sync_job";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciLustreFileStorageObjectStorageLinkSyncJob resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciLustreFileStorageObjectStorageLinkSyncJob to import
  * @param importFromId The id of the existing DataOciLustreFileStorageObjectStorageLinkSyncJob that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/lustre_file_storage_object_storage_link_sync_job#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciLustreFileStorageObjectStorageLinkSyncJob to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_lustre_file_storage_object_storage_link_sync_job", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/lustre_file_storage_object_storage_link_sync_job oci_lustre_file_storage_object_storage_link_sync_job} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciLustreFileStorageObjectStorageLinkSyncJobConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciLustreFileStorageObjectStorageLinkSyncJobConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_lustre_file_storage_object_storage_link_sync_job',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.26.1',
        providerVersionConstraint: '7.26.1'
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
    this._objectStorageLinkId = config.objectStorageLinkId;
    this._syncJobId = config.syncJobId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bytes_transferred - computed: true, optional: false, required: false
  public get bytesTransferred() {
    return this.getStringAttribute('bytes_transferred');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // is_overwrite - computed: true, optional: false, required: false
  public get isOverwrite() {
    return this.getBooleanAttribute('is_overwrite');
  }

  // job_type - computed: true, optional: false, required: false
  public get jobType() {
    return this.getStringAttribute('job_type');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // lustre_file_system_path - computed: true, optional: false, required: false
  public get lustreFileSystemPath() {
    return this.getStringAttribute('lustre_file_system_path');
  }

  // object_storage_link_id - computed: false, optional: false, required: true
  private _objectStorageLinkId?: string; 
  public get objectStorageLinkId() {
    return this.getStringAttribute('object_storage_link_id');
  }
  public set objectStorageLinkId(value: string) {
    this._objectStorageLinkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectStorageLinkIdInput() {
    return this._objectStorageLinkId;
  }

  // object_storage_path - computed: true, optional: false, required: false
  public get objectStoragePath() {
    return this.getStringAttribute('object_storage_path');
  }

  // objects_transferred - computed: true, optional: false, required: false
  public get objectsTransferred() {
    return this.getStringAttribute('objects_transferred');
  }

  // parent_id - computed: true, optional: false, required: false
  public get parentId() {
    return this.getStringAttribute('parent_id');
  }

  // skipped_error_count - computed: true, optional: false, required: false
  public get skippedErrorCount() {
    return this.getStringAttribute('skipped_error_count');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // sync_job_id - computed: false, optional: false, required: true
  private _syncJobId?: string; 
  public get syncJobId() {
    return this.getStringAttribute('sync_job_id');
  }
  public set syncJobId(value: string) {
    this._syncJobId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get syncJobIdInput() {
    return this._syncJobId;
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // time_finished - computed: true, optional: false, required: false
  public get timeFinished() {
    return this.getStringAttribute('time_finished');
  }

  // time_started - computed: true, optional: false, required: false
  public get timeStarted() {
    return this.getStringAttribute('time_started');
  }

  // total_objects_scanned - computed: true, optional: false, required: false
  public get totalObjectsScanned() {
    return this.getStringAttribute('total_objects_scanned');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      object_storage_link_id: cdktf.stringToTerraform(this._objectStorageLinkId),
      sync_job_id: cdktf.stringToTerraform(this._syncJobId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      object_storage_link_id: {
        value: cdktf.stringToHclTerraform(this._objectStorageLinkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sync_job_id: {
        value: cdktf.stringToHclTerraform(this._syncJobId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
