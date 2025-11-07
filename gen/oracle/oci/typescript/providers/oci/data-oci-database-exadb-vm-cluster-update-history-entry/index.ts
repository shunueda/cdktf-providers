// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_exadb_vm_cluster_update_history_entry
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDatabaseExadbVmClusterUpdateHistoryEntryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_exadb_vm_cluster_update_history_entry#exadb_vm_cluster_id DataOciDatabaseExadbVmClusterUpdateHistoryEntry#exadb_vm_cluster_id}
  */
  readonly exadbVmClusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_exadb_vm_cluster_update_history_entry#id DataOciDatabaseExadbVmClusterUpdateHistoryEntry#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_exadb_vm_cluster_update_history_entry#update_history_entry_id DataOciDatabaseExadbVmClusterUpdateHistoryEntry#update_history_entry_id}
  */
  readonly updateHistoryEntryId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_exadb_vm_cluster_update_history_entry oci_database_exadb_vm_cluster_update_history_entry}
*/
export class DataOciDatabaseExadbVmClusterUpdateHistoryEntry extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_database_exadb_vm_cluster_update_history_entry";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDatabaseExadbVmClusterUpdateHistoryEntry resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDatabaseExadbVmClusterUpdateHistoryEntry to import
  * @param importFromId The id of the existing DataOciDatabaseExadbVmClusterUpdateHistoryEntry that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_exadb_vm_cluster_update_history_entry#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDatabaseExadbVmClusterUpdateHistoryEntry to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_database_exadb_vm_cluster_update_history_entry", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_exadb_vm_cluster_update_history_entry oci_database_exadb_vm_cluster_update_history_entry} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDatabaseExadbVmClusterUpdateHistoryEntryConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDatabaseExadbVmClusterUpdateHistoryEntryConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_exadb_vm_cluster_update_history_entry',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.25.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._exadbVmClusterId = config.exadbVmClusterId;
    this._id = config.id;
    this._updateHistoryEntryId = config.updateHistoryEntryId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // exadb_vm_cluster_id - computed: false, optional: false, required: true
  private _exadbVmClusterId?: string; 
  public get exadbVmClusterId() {
    return this.getStringAttribute('exadb_vm_cluster_id');
  }
  public set exadbVmClusterId(value: string) {
    this._exadbVmClusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get exadbVmClusterIdInput() {
    return this._exadbVmClusterId;
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

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_completed - computed: true, optional: false, required: false
  public get timeCompleted() {
    return this.getStringAttribute('time_completed');
  }

  // time_started - computed: true, optional: false, required: false
  public get timeStarted() {
    return this.getStringAttribute('time_started');
  }

  // update_action - computed: true, optional: false, required: false
  public get updateAction() {
    return this.getStringAttribute('update_action');
  }

  // update_history_entry_id - computed: false, optional: false, required: true
  private _updateHistoryEntryId?: string; 
  public get updateHistoryEntryId() {
    return this.getStringAttribute('update_history_entry_id');
  }
  public set updateHistoryEntryId(value: string) {
    this._updateHistoryEntryId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get updateHistoryEntryIdInput() {
    return this._updateHistoryEntryId;
  }

  // update_id - computed: true, optional: false, required: false
  public get updateId() {
    return this.getStringAttribute('update_id');
  }

  // update_type - computed: true, optional: false, required: false
  public get updateType() {
    return this.getStringAttribute('update_type');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      exadb_vm_cluster_id: cdktf.stringToTerraform(this._exadbVmClusterId),
      id: cdktf.stringToTerraform(this._id),
      update_history_entry_id: cdktf.stringToTerraform(this._updateHistoryEntryId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      exadb_vm_cluster_id: {
        value: cdktf.stringToHclTerraform(this._exadbVmClusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      update_history_entry_id: {
        value: cdktf.stringToHclTerraform(this._updateHistoryEntryId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
