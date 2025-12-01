// https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/data-sources/node_info
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataLibvirtNodeInfoConfig extends cdktf.TerraformMetaArguments {
}

/**
* Represents a {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/data-sources/node_info libvirt_node_info}
*/
export class DataLibvirtNodeInfo extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "libvirt_node_info";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataLibvirtNodeInfo resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataLibvirtNodeInfo to import
  * @param importFromId The id of the existing DataLibvirtNodeInfo that should be imported. Refer to the {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/data-sources/node_info#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataLibvirtNodeInfo to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "libvirt_node_info", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/data-sources/node_info libvirt_node_info} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataLibvirtNodeInfoConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataLibvirtNodeInfoConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'libvirt_node_info',
      terraformGeneratorMetadata: {
        providerName: 'libvirt',
        providerVersion: '0.9.1',
        providerVersionConstraint: '0.9.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cpu_cores_per_socket - computed: true, optional: false, required: false
  public get cpuCoresPerSocket() {
    return this.getNumberAttribute('cpu_cores_per_socket');
  }

  // cpu_cores_total - computed: true, optional: false, required: false
  public get cpuCoresTotal() {
    return this.getNumberAttribute('cpu_cores_total');
  }

  // cpu_model - computed: true, optional: false, required: false
  public get cpuModel() {
    return this.getStringAttribute('cpu_model');
  }

  // cpu_sockets - computed: true, optional: false, required: false
  public get cpuSockets() {
    return this.getNumberAttribute('cpu_sockets');
  }

  // cpu_threads_per_core - computed: true, optional: false, required: false
  public get cpuThreadsPerCore() {
    return this.getNumberAttribute('cpu_threads_per_core');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // memory_total_kb - computed: true, optional: false, required: false
  public get memoryTotalKb() {
    return this.getNumberAttribute('memory_total_kb');
  }

  // numa_nodes - computed: true, optional: false, required: false
  public get numaNodes() {
    return this.getNumberAttribute('numa_nodes');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
    };
    return attrs;
  }
}
