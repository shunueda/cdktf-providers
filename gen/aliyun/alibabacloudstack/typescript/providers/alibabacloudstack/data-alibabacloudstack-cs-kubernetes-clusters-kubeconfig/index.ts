// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/cs_kubernetes_clusters_kubeconfig
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAlibabacloudstackCsKubernetesClustersKubeconfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/cs_kubernetes_clusters_kubeconfig#cluster_id DataAlibabacloudstackCsKubernetesClustersKubeconfig#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/cs_kubernetes_clusters_kubeconfig#id DataAlibabacloudstackCsKubernetesClustersKubeconfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/cs_kubernetes_clusters_kubeconfig#private_address DataAlibabacloudstackCsKubernetesClustersKubeconfig#private_address}
  */
  readonly privateAddress?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/cs_kubernetes_clusters_kubeconfig alibabacloudstack_cs_kubernetes_clusters_kubeconfig}
*/
export class DataAlibabacloudstackCsKubernetesClustersKubeconfig extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alibabacloudstack_cs_kubernetes_clusters_kubeconfig";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAlibabacloudstackCsKubernetesClustersKubeconfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAlibabacloudstackCsKubernetesClustersKubeconfig to import
  * @param importFromId The id of the existing DataAlibabacloudstackCsKubernetesClustersKubeconfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/cs_kubernetes_clusters_kubeconfig#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAlibabacloudstackCsKubernetesClustersKubeconfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alibabacloudstack_cs_kubernetes_clusters_kubeconfig", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/cs_kubernetes_clusters_kubeconfig alibabacloudstack_cs_kubernetes_clusters_kubeconfig} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAlibabacloudstackCsKubernetesClustersKubeconfigConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAlibabacloudstackCsKubernetesClustersKubeconfigConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'alibabacloudstack_cs_kubernetes_clusters_kubeconfig',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.21',
        providerVersionConstraint: '3.18.21'
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
    this._id = config.id;
    this._privateAddress = config.privateAddress;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_id - computed: false, optional: true, required: false
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  public resetClusterId() {
    this._clusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
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

  // kubeconfig - computed: true, optional: false, required: false
  public get kubeconfig() {
    return this.getStringAttribute('kubeconfig');
  }

  // private_address - computed: false, optional: true, required: false
  private _privateAddress?: boolean | cdktf.IResolvable; 
  public get privateAddress() {
    return this.getBooleanAttribute('private_address');
  }
  public set privateAddress(value: boolean | cdktf.IResolvable) {
    this._privateAddress = value;
  }
  public resetPrivateAddress() {
    this._privateAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateAddressInput() {
    return this._privateAddress;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      id: cdktf.stringToTerraform(this._id),
      private_address: cdktf.booleanToTerraform(this._privateAddress),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_address: {
        value: cdktf.booleanToHclTerraform(this._privateAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
