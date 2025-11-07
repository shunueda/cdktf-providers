// https://registry.terraform.io/providers/scott-the-programmer/minikube/0.6.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MinikubeProviderConfig {
  /**
  * The Kubernetes version that the minikube VM will use. Defaults to 'v1.30.0'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scott-the-programmer/minikube/0.6.0/docs#kubernetes_version MinikubeProvider#kubernetes_version}
  */
  readonly kubernetesVersion?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scott-the-programmer/minikube/0.6.0/docs#alias MinikubeProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/scott-the-programmer/minikube/0.6.0/docs minikube}
*/
export class MinikubeProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "minikube";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MinikubeProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MinikubeProvider to import
  * @param importFromId The id of the existing MinikubeProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/scott-the-programmer/minikube/0.6.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MinikubeProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "minikube", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/scott-the-programmer/minikube/0.6.0/docs minikube} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MinikubeProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: MinikubeProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'minikube',
      terraformGeneratorMetadata: {
        providerName: 'minikube',
        providerVersion: '0.6.0'
      },
      terraformProviderSource: 'scott-the-programmer/minikube'
    });
    this._kubernetesVersion = config.kubernetesVersion;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // kubernetes_version - computed: false, optional: true, required: false
  private _kubernetesVersion?: string; 
  public get kubernetesVersion() {
    return this._kubernetesVersion;
  }
  public set kubernetesVersion(value: string | undefined) {
    this._kubernetesVersion = value;
  }
  public resetKubernetesVersion() {
    this._kubernetesVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesVersionInput() {
    return this._kubernetesVersion;
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
      kubernetes_version: cdktf.stringToTerraform(this._kubernetesVersion),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      kubernetes_version: {
        value: cdktf.stringToHclTerraform(this._kubernetesVersion),
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
