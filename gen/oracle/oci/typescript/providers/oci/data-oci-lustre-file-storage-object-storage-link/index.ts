// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/lustre_file_storage_object_storage_link
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciLustreFileStorageObjectStorageLinkConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/lustre_file_storage_object_storage_link#object_storage_link_id DataOciLustreFileStorageObjectStorageLink#object_storage_link_id}
  */
  readonly objectStorageLinkId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/lustre_file_storage_object_storage_link oci_lustre_file_storage_object_storage_link}
*/
export class DataOciLustreFileStorageObjectStorageLink extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_lustre_file_storage_object_storage_link";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciLustreFileStorageObjectStorageLink resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciLustreFileStorageObjectStorageLink to import
  * @param importFromId The id of the existing DataOciLustreFileStorageObjectStorageLink that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/lustre_file_storage_object_storage_link#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciLustreFileStorageObjectStorageLink to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_lustre_file_storage_object_storage_link", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/lustre_file_storage_object_storage_link oci_lustre_file_storage_object_storage_link} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciLustreFileStorageObjectStorageLinkConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciLustreFileStorageObjectStorageLinkConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_lustre_file_storage_object_storage_link',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.25.0',
        providerVersionConstraint: '7.25.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._objectStorageLinkId = config.objectStorageLinkId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // availability_domain - computed: true, optional: false, required: false
  public get availabilityDomain() {
    return this.getStringAttribute('availability_domain');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // current_job_id - computed: true, optional: false, required: false
  public get currentJobId() {
    return this.getStringAttribute('current_job_id');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // file_system_path - computed: true, optional: false, required: false
  public get fileSystemPath() {
    return this.getStringAttribute('file_system_path');
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_overwrite - computed: true, optional: false, required: false
  public get isOverwrite() {
    return this.getBooleanAttribute('is_overwrite');
  }

  // last_job_id - computed: true, optional: false, required: false
  public get lastJobId() {
    return this.getStringAttribute('last_job_id');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // lustre_file_system_id - computed: true, optional: false, required: false
  public get lustreFileSystemId() {
    return this.getStringAttribute('lustre_file_system_id');
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

  // object_storage_prefix - computed: true, optional: false, required: false
  public get objectStoragePrefix() {
    return this.getStringAttribute('object_storage_prefix');
  }

  // start_export_to_object_trigger - computed: true, optional: false, required: false
  public get startExportToObjectTrigger() {
    return this.getNumberAttribute('start_export_to_object_trigger');
  }

  // start_import_from_object_trigger - computed: true, optional: false, required: false
  public get startImportFromObjectTrigger() {
    return this.getNumberAttribute('start_import_from_object_trigger');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // stop_export_to_object_trigger - computed: true, optional: false, required: false
  public get stopExportToObjectTrigger() {
    return this.getNumberAttribute('stop_export_to_object_trigger');
  }

  // stop_import_from_object_trigger - computed: true, optional: false, required: false
  public get stopImportFromObjectTrigger() {
    return this.getNumberAttribute('stop_import_from_object_trigger');
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      object_storage_link_id: cdktf.stringToTerraform(this._objectStorageLinkId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      object_storage_link_id: {
        value: cdktf.stringToHclTerraform(this._objectStorageLinkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
