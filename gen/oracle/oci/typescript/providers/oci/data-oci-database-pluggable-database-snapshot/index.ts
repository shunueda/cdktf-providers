// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/database_pluggable_database_snapshot
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDatabasePluggableDatabaseSnapshotConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/database_pluggable_database_snapshot#pluggable_database_snapshot_id DataOciDatabasePluggableDatabaseSnapshot#pluggable_database_snapshot_id}
  */
  readonly pluggableDatabaseSnapshotId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/database_pluggable_database_snapshot oci_database_pluggable_database_snapshot}
*/
export class DataOciDatabasePluggableDatabaseSnapshot extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_database_pluggable_database_snapshot";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDatabasePluggableDatabaseSnapshot resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDatabasePluggableDatabaseSnapshot to import
  * @param importFromId The id of the existing DataOciDatabasePluggableDatabaseSnapshot that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/database_pluggable_database_snapshot#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDatabasePluggableDatabaseSnapshot to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_database_pluggable_database_snapshot", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/database_pluggable_database_snapshot oci_database_pluggable_database_snapshot} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDatabasePluggableDatabaseSnapshotConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDatabasePluggableDatabaseSnapshotConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_pluggable_database_snapshot',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.28.0',
        providerVersionConstraint: '7.28.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._pluggableDatabaseSnapshotId = config.pluggableDatabaseSnapshotId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_id - computed: true, optional: false, required: false
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // pluggable_database_id - computed: true, optional: false, required: false
  public get pluggableDatabaseId() {
    return this.getStringAttribute('pluggable_database_id');
  }

  // pluggable_database_snapshot_id - computed: false, optional: false, required: true
  private _pluggableDatabaseSnapshotId?: string; 
  public get pluggableDatabaseSnapshotId() {
    return this.getStringAttribute('pluggable_database_snapshot_id');
  }
  public set pluggableDatabaseSnapshotId(value: string) {
    this._pluggableDatabaseSnapshotId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pluggableDatabaseSnapshotIdInput() {
    return this._pluggableDatabaseSnapshotId;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      pluggable_database_snapshot_id: cdktf.stringToTerraform(this._pluggableDatabaseSnapshotId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      pluggable_database_snapshot_id: {
        value: cdktf.stringToHclTerraform(this._pluggableDatabaseSnapshotId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
