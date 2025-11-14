// https://registry.terraform.io/providers/magalucloud/mgc/0.40.1/docs/data-sources/kubernetes_cluster_kubeconfig
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMgcKubernetesClusterKubeconfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * The unique identifier of the Kubernetes cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.40.1/docs/data-sources/kubernetes_cluster_kubeconfig#cluster_id DataMgcKubernetesClusterKubeconfig#cluster_id}
  */
  readonly clusterId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/magalucloud/mgc/0.40.1/docs/data-sources/kubernetes_cluster_kubeconfig mgc_kubernetes_cluster_kubeconfig}
*/
export class DataMgcKubernetesClusterKubeconfig extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mgc_kubernetes_cluster_kubeconfig";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMgcKubernetesClusterKubeconfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMgcKubernetesClusterKubeconfig to import
  * @param importFromId The id of the existing DataMgcKubernetesClusterKubeconfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/magalucloud/mgc/0.40.1/docs/data-sources/kubernetes_cluster_kubeconfig#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMgcKubernetesClusterKubeconfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mgc_kubernetes_cluster_kubeconfig", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/magalucloud/mgc/0.40.1/docs/data-sources/kubernetes_cluster_kubeconfig mgc_kubernetes_cluster_kubeconfig} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMgcKubernetesClusterKubeconfigConfig
  */
  public constructor(scope: Construct, id: string, config: DataMgcKubernetesClusterKubeconfigConfig) {
    super(scope, id, {
      terraformResourceType: 'mgc_kubernetes_cluster_kubeconfig',
      terraformGeneratorMetadata: {
        providerName: 'mgc',
        providerVersion: '0.40.1',
        providerVersionConstraint: '0.40.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterId = config.clusterId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // kubeconfig - computed: true, optional: false, required: false
  public get kubeconfig() {
    return this.getStringAttribute('kubeconfig');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: cdktf.stringToTerraform(this._clusterId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
