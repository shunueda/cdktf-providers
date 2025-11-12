// https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.2/docs/resources/local_kind_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LocalKindClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * The path to the kubeconfig file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.2/docs/resources/local_kind_cluster#kubeconfig_path LocalKindCluster#kubeconfig_path}
  */
  readonly kubeconfigPath?: string;
  /**
  * The name of the kind cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.2/docs/resources/local_kind_cluster#name LocalKindCluster#name}
  */
  readonly name: string;
  /**
  * The amount of time to wait for the control plan to be ready, defaults to 30s
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.2/docs/resources/local_kind_cluster#wait_timeout LocalKindCluster#wait_timeout}
  */
  readonly waitTimeout?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.2/docs/resources/local_kind_cluster enos_local_kind_cluster}
*/
export class LocalKindCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "enos_local_kind_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LocalKindCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LocalKindCluster to import
  * @param importFromId The id of the existing LocalKindCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.2/docs/resources/local_kind_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LocalKindCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "enos_local_kind_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.2/docs/resources/local_kind_cluster enos_local_kind_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LocalKindClusterConfig
  */
  public constructor(scope: Construct, id: string, config: LocalKindClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'enos_local_kind_cluster',
      terraformGeneratorMetadata: {
        providerName: 'enos',
        providerVersion: '0.6.2',
        providerVersionConstraint: '0.6.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._kubeconfigPath = config.kubeconfigPath;
    this._name = config.name;
    this._waitTimeout = config.waitTimeout;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // client_certificate - computed: true, optional: false, required: false
  public get clientCertificate() {
    return this.getStringAttribute('client_certificate');
  }

  // client_key - computed: true, optional: false, required: false
  public get clientKey() {
    return this.getStringAttribute('client_key');
  }

  // cluster_ca_certificate - computed: true, optional: false, required: false
  public get clusterCaCertificate() {
    return this.getStringAttribute('cluster_ca_certificate');
  }

  // context_name - computed: true, optional: false, required: false
  public get contextName() {
    return this.getStringAttribute('context_name');
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kubeconfig_base64 - computed: true, optional: false, required: false
  public get kubeconfigBase64() {
    return this.getStringAttribute('kubeconfig_base64');
  }

  // kubeconfig_path - computed: false, optional: true, required: false
  private _kubeconfigPath?: string; 
  public get kubeconfigPath() {
    return this.getStringAttribute('kubeconfig_path');
  }
  public set kubeconfigPath(value: string) {
    this._kubeconfigPath = value;
  }
  public resetKubeconfigPath() {
    this._kubeconfigPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeconfigPathInput() {
    return this._kubeconfigPath;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // wait_timeout - computed: false, optional: true, required: false
  private _waitTimeout?: string; 
  public get waitTimeout() {
    return this.getStringAttribute('wait_timeout');
  }
  public set waitTimeout(value: string) {
    this._waitTimeout = value;
  }
  public resetWaitTimeout() {
    this._waitTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitTimeoutInput() {
    return this._waitTimeout;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      kubeconfig_path: cdktf.stringToTerraform(this._kubeconfigPath),
      name: cdktf.stringToTerraform(this._name),
      wait_timeout: cdktf.stringToTerraform(this._waitTimeout),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      kubeconfig_path: {
        value: cdktf.stringToHclTerraform(this._kubeconfigPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wait_timeout: {
        value: cdktf.stringToHclTerraform(this._waitTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
