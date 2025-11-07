// https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/kubernetes_kubeconfig
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSamsungcloudplatformKubernetesKubeconfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/kubernetes_kubeconfig#id DataSamsungcloudplatformKubernetesKubeconfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * kubeconfig Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/kubernetes_kubeconfig#kubeconfig_type DataSamsungcloudplatformKubernetesKubeconfig#kubeconfig_type}
  */
  readonly kubeconfigType: string;
  /**
  * Engine Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/kubernetes_kubeconfig#kubernetes_engine_id DataSamsungcloudplatformKubernetesKubeconfig#kubernetes_engine_id}
  */
  readonly kubernetesEngineId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/kubernetes_kubeconfig samsungcloudplatform_kubernetes_kubeconfig}
*/
export class DataSamsungcloudplatformKubernetesKubeconfig extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "samsungcloudplatform_kubernetes_kubeconfig";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSamsungcloudplatformKubernetesKubeconfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSamsungcloudplatformKubernetesKubeconfig to import
  * @param importFromId The id of the existing DataSamsungcloudplatformKubernetesKubeconfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/kubernetes_kubeconfig#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSamsungcloudplatformKubernetesKubeconfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "samsungcloudplatform_kubernetes_kubeconfig", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/kubernetes_kubeconfig samsungcloudplatform_kubernetes_kubeconfig} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSamsungcloudplatformKubernetesKubeconfigConfig
  */
  public constructor(scope: Construct, id: string, config: DataSamsungcloudplatformKubernetesKubeconfigConfig) {
    super(scope, id, {
      terraformResourceType: 'samsungcloudplatform_kubernetes_kubeconfig',
      terraformGeneratorMetadata: {
        providerName: 'samsungcloudplatform',
        providerVersion: '3.15.0'
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
    this._kubeconfigType = config.kubeconfigType;
    this._kubernetesEngineId = config.kubernetesEngineId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // kube_config - computed: true, optional: false, required: false
  public get kubeConfig() {
    return this.getStringAttribute('kube_config');
  }

  // kubeconfig_type - computed: false, optional: false, required: true
  private _kubeconfigType?: string; 
  public get kubeconfigType() {
    return this.getStringAttribute('kubeconfig_type');
  }
  public set kubeconfigType(value: string) {
    this._kubeconfigType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeconfigTypeInput() {
    return this._kubeconfigType;
  }

  // kubernetes_engine_id - computed: false, optional: false, required: true
  private _kubernetesEngineId?: string; 
  public get kubernetesEngineId() {
    return this.getStringAttribute('kubernetes_engine_id');
  }
  public set kubernetesEngineId(value: string) {
    this._kubernetesEngineId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesEngineIdInput() {
    return this._kubernetesEngineId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      kubeconfig_type: cdktf.stringToTerraform(this._kubeconfigType),
      kubernetes_engine_id: cdktf.stringToTerraform(this._kubernetesEngineId),
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
      kubeconfig_type: {
        value: cdktf.stringToHclTerraform(this._kubeconfigType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kubernetes_engine_id: {
        value: cdktf.stringToHclTerraform(this._kubernetesEngineId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
