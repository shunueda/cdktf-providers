// https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/data-sources/management_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNsxtManagementClusterConfig extends cdktf.TerraformMetaArguments {
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/data-sources/management_cluster nsxt_management_cluster}
*/
export class DataNsxtManagementCluster extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nsxt_management_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNsxtManagementCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNsxtManagementCluster to import
  * @param importFromId The id of the existing DataNsxtManagementCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/data-sources/management_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNsxtManagementCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nsxt_management_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/data-sources/management_cluster nsxt_management_cluster} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNsxtManagementClusterConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataNsxtManagementClusterConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'nsxt_management_cluster',
      terraformGeneratorMetadata: {
        providerName: 'nsxt',
        providerVersion: '3.11.0',
        providerVersionConstraint: '3.11.0'
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // node_sha256_thumbprint - computed: true, optional: false, required: false
  public get nodeSha256Thumbprint() {
    return this.getStringAttribute('node_sha256_thumbprint');
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
