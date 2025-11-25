// https://registry.terraform.io/providers/portainer/portainer/1.18.0/docs/resources/kubernetes_namespace_system
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KubernetesNamespaceSystemConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.18.0/docs/resources/kubernetes_namespace_system#environment_id KubernetesNamespaceSystem#environment_id}
  */
  readonly environmentId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.18.0/docs/resources/kubernetes_namespace_system#id KubernetesNamespaceSystem#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.18.0/docs/resources/kubernetes_namespace_system#namespace KubernetesNamespaceSystem#namespace}
  */
  readonly namespace: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.18.0/docs/resources/kubernetes_namespace_system#system KubernetesNamespaceSystem#system}
  */
  readonly systemAttribute: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/portainer/portainer/1.18.0/docs/resources/kubernetes_namespace_system portainer_kubernetes_namespace_system}
*/
export class KubernetesNamespaceSystem extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "portainer_kubernetes_namespace_system";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KubernetesNamespaceSystem resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KubernetesNamespaceSystem to import
  * @param importFromId The id of the existing KubernetesNamespaceSystem that should be imported. Refer to the {@link https://registry.terraform.io/providers/portainer/portainer/1.18.0/docs/resources/kubernetes_namespace_system#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KubernetesNamespaceSystem to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "portainer_kubernetes_namespace_system", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/portainer/portainer/1.18.0/docs/resources/kubernetes_namespace_system portainer_kubernetes_namespace_system} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KubernetesNamespaceSystemConfig
  */
  public constructor(scope: Construct, id: string, config: KubernetesNamespaceSystemConfig) {
    super(scope, id, {
      terraformResourceType: 'portainer_kubernetes_namespace_system',
      terraformGeneratorMetadata: {
        providerName: 'portainer',
        providerVersion: '1.18.0',
        providerVersionConstraint: '1.18.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._environmentId = config.environmentId;
    this._id = config.id;
    this._namespace = config.namespace;
    this._system = config.systemAttribute;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // environment_id - computed: false, optional: false, required: true
  private _environmentId?: number; 
  public get environmentId() {
    return this.getNumberAttribute('environment_id');
  }
  public set environmentId(value: number) {
    this._environmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentIdInput() {
    return this._environmentId;
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

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // system - computed: false, optional: false, required: true
  private _system?: boolean | cdktf.IResolvable; 
  public get systemAttribute() {
    return this.getBooleanAttribute('system');
  }
  public set systemAttribute(value: boolean | cdktf.IResolvable) {
    this._system = value;
  }
  // Temporarily expose input value. Use with caution.
  public get systemAttributeInput() {
    return this._system;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      environment_id: cdktf.numberToTerraform(this._environmentId),
      id: cdktf.stringToTerraform(this._id),
      namespace: cdktf.stringToTerraform(this._namespace),
      system: cdktf.booleanToTerraform(this._system),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      environment_id: {
        value: cdktf.numberToHclTerraform(this._environmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      system: {
        value: cdktf.booleanToHclTerraform(this._system),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
