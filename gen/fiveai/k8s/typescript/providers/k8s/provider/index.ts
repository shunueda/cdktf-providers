// https://registry.terraform.io/providers/fiveai/k8s/0.2.2/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface K8SProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fiveai/k8s/0.2.2/docs#kubeconfig K8SProvider#kubeconfig}
  */
  readonly kubeconfig?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fiveai/k8s/0.2.2/docs#kubeconfig_content K8SProvider#kubeconfig_content}
  */
  readonly kubeconfigContent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fiveai/k8s/0.2.2/docs#kubeconfig_context K8SProvider#kubeconfig_context}
  */
  readonly kubeconfigContext?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fiveai/k8s/0.2.2/docs#alias K8SProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fiveai/k8s/0.2.2/docs k8s}
*/
export class K8SProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a K8SProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the K8SProvider to import
  * @param importFromId The id of the existing K8SProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/fiveai/k8s/0.2.2/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the K8SProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fiveai/k8s/0.2.2/docs k8s} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options K8SProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: K8SProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'k8s',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '0.2.2'
      },
      terraformProviderSource: 'fiveai/k8s'
    });
    this._kubeconfig = config.kubeconfig;
    this._kubeconfigContent = config.kubeconfigContent;
    this._kubeconfigContext = config.kubeconfigContext;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // kubeconfig - computed: false, optional: true, required: false
  private _kubeconfig?: string; 
  public get kubeconfig() {
    return this._kubeconfig;
  }
  public set kubeconfig(value: string | undefined) {
    this._kubeconfig = value;
  }
  public resetKubeconfig() {
    this._kubeconfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeconfigInput() {
    return this._kubeconfig;
  }

  // kubeconfig_content - computed: false, optional: true, required: false
  private _kubeconfigContent?: string; 
  public get kubeconfigContent() {
    return this._kubeconfigContent;
  }
  public set kubeconfigContent(value: string | undefined) {
    this._kubeconfigContent = value;
  }
  public resetKubeconfigContent() {
    this._kubeconfigContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeconfigContentInput() {
    return this._kubeconfigContent;
  }

  // kubeconfig_context - computed: false, optional: true, required: false
  private _kubeconfigContext?: string; 
  public get kubeconfigContext() {
    return this._kubeconfigContext;
  }
  public set kubeconfigContext(value: string | undefined) {
    this._kubeconfigContext = value;
  }
  public resetKubeconfigContext() {
    this._kubeconfigContext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeconfigContextInput() {
    return this._kubeconfigContext;
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this._alias;
  }
  public set alias(value: string | undefined) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      kubeconfig: cdktf.stringToTerraform(this._kubeconfig),
      kubeconfig_content: cdktf.stringToTerraform(this._kubeconfigContent),
      kubeconfig_context: cdktf.stringToTerraform(this._kubeconfigContext),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      kubeconfig: {
        value: cdktf.stringToHclTerraform(this._kubeconfig),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kubeconfig_content: {
        value: cdktf.stringToHclTerraform(this._kubeconfigContent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kubeconfig_context: {
        value: cdktf.stringToHclTerraform(this._kubeconfigContext),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alias: {
        value: cdktf.stringToHclTerraform(this._alias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
