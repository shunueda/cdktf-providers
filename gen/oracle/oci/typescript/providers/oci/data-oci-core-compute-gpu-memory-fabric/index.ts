// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/core_compute_gpu_memory_fabric
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciCoreComputeGpuMemoryFabricConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/core_compute_gpu_memory_fabric#compute_gpu_memory_fabric_id DataOciCoreComputeGpuMemoryFabric#compute_gpu_memory_fabric_id}
  */
  readonly computeGpuMemoryFabricId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/core_compute_gpu_memory_fabric oci_core_compute_gpu_memory_fabric}
*/
export class DataOciCoreComputeGpuMemoryFabric extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_core_compute_gpu_memory_fabric";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciCoreComputeGpuMemoryFabric resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciCoreComputeGpuMemoryFabric to import
  * @param importFromId The id of the existing DataOciCoreComputeGpuMemoryFabric that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/core_compute_gpu_memory_fabric#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciCoreComputeGpuMemoryFabric to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_core_compute_gpu_memory_fabric", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/core_compute_gpu_memory_fabric oci_core_compute_gpu_memory_fabric} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciCoreComputeGpuMemoryFabricConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciCoreComputeGpuMemoryFabricConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_compute_gpu_memory_fabric',
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
    this._computeGpuMemoryFabricId = config.computeGpuMemoryFabricId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_data - computed: true, optional: false, required: false
  private _additionalData = new cdktf.StringMap(this, "additional_data");
  public get additionalData() {
    return this._additionalData;
  }

  // available_host_count - computed: true, optional: false, required: false
  public get availableHostCount() {
    return this.getStringAttribute('available_host_count');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // compute_gpu_memory_fabric_id - computed: false, optional: false, required: true
  private _computeGpuMemoryFabricId?: string; 
  public get computeGpuMemoryFabricId() {
    return this.getStringAttribute('compute_gpu_memory_fabric_id');
  }
  public set computeGpuMemoryFabricId(value: string) {
    this._computeGpuMemoryFabricId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get computeGpuMemoryFabricIdInput() {
    return this._computeGpuMemoryFabricId;
  }

  // compute_hpc_island_id - computed: true, optional: false, required: false
  public get computeHpcIslandId() {
    return this.getStringAttribute('compute_hpc_island_id');
  }

  // compute_local_block_id - computed: true, optional: false, required: false
  public get computeLocalBlockId() {
    return this.getStringAttribute('compute_local_block_id');
  }

  // compute_network_block_id - computed: true, optional: false, required: false
  public get computeNetworkBlockId() {
    return this.getStringAttribute('compute_network_block_id');
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

  // fabric_health - computed: true, optional: false, required: false
  public get fabricHealth() {
    return this.getStringAttribute('fabric_health');
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // healthy_host_count - computed: true, optional: false, required: false
  public get healthyHostCount() {
    return this.getStringAttribute('healthy_host_count');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // total_host_count - computed: true, optional: false, required: false
  public get totalHostCount() {
    return this.getStringAttribute('total_host_count');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compute_gpu_memory_fabric_id: cdktf.stringToTerraform(this._computeGpuMemoryFabricId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compute_gpu_memory_fabric_id: {
        value: cdktf.stringToHclTerraform(this._computeGpuMemoryFabricId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
