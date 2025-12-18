// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_vm_cluster_patch
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDatabaseVmClusterPatchConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_vm_cluster_patch#id DataOciDatabaseVmClusterPatch#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_vm_cluster_patch#patch_id DataOciDatabaseVmClusterPatch#patch_id}
  */
  readonly patchId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_vm_cluster_patch#vm_cluster_id DataOciDatabaseVmClusterPatch#vm_cluster_id}
  */
  readonly vmClusterId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_vm_cluster_patch oci_database_vm_cluster_patch}
*/
export class DataOciDatabaseVmClusterPatch extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_database_vm_cluster_patch";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDatabaseVmClusterPatch resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDatabaseVmClusterPatch to import
  * @param importFromId The id of the existing DataOciDatabaseVmClusterPatch that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_vm_cluster_patch#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDatabaseVmClusterPatch to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_database_vm_cluster_patch", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_vm_cluster_patch oci_database_vm_cluster_patch} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDatabaseVmClusterPatchConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDatabaseVmClusterPatchConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_vm_cluster_patch',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.29.0',
        providerVersionConstraint: '7.29.0'
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
    this._patchId = config.patchId;
    this._vmClusterId = config.vmClusterId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // available_actions - computed: true, optional: false, required: false
  public get availableActions() {
    return this.getListAttribute('available_actions');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // last_action - computed: true, optional: false, required: false
  public get lastAction() {
    return this.getStringAttribute('last_action');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // patch_id - computed: false, optional: false, required: true
  private _patchId?: string; 
  public get patchId() {
    return this.getStringAttribute('patch_id');
  }
  public set patchId(value: string) {
    this._patchId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get patchIdInput() {
    return this._patchId;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_released - computed: true, optional: false, required: false
  public get timeReleased() {
    return this.getStringAttribute('time_released');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // vm_cluster_id - computed: false, optional: false, required: true
  private _vmClusterId?: string; 
  public get vmClusterId() {
    return this.getStringAttribute('vm_cluster_id');
  }
  public set vmClusterId(value: string) {
    this._vmClusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vmClusterIdInput() {
    return this._vmClusterId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      patch_id: cdktf.stringToTerraform(this._patchId),
      vm_cluster_id: cdktf.stringToTerraform(this._vmClusterId),
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
      patch_id: {
        value: cdktf.stringToHclTerraform(this._patchId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vm_cluster_id: {
        value: cdktf.stringToHclTerraform(this._vmClusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
