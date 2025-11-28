// https://registry.terraform.io/providers/portainer/portainer/1.19.0/docs/resources/kubernetes_namespace_access
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KubernetesNamespaceAccessConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.19.0/docs/resources/kubernetes_namespace_access#endpoint_id KubernetesNamespaceAccess#endpoint_id}
  */
  readonly endpointId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.19.0/docs/resources/kubernetes_namespace_access#id KubernetesNamespaceAccess#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.19.0/docs/resources/kubernetes_namespace_access#namespace_id KubernetesNamespaceAccess#namespace_id}
  */
  readonly namespaceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.19.0/docs/resources/kubernetes_namespace_access#teams_to_add KubernetesNamespaceAccess#teams_to_add}
  */
  readonly teamsToAdd?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.19.0/docs/resources/kubernetes_namespace_access#teams_to_remove KubernetesNamespaceAccess#teams_to_remove}
  */
  readonly teamsToRemove?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.19.0/docs/resources/kubernetes_namespace_access#users_to_add KubernetesNamespaceAccess#users_to_add}
  */
  readonly usersToAdd?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.19.0/docs/resources/kubernetes_namespace_access#users_to_remove KubernetesNamespaceAccess#users_to_remove}
  */
  readonly usersToRemove?: number[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/portainer/portainer/1.19.0/docs/resources/kubernetes_namespace_access portainer_kubernetes_namespace_access}
*/
export class KubernetesNamespaceAccess extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "portainer_kubernetes_namespace_access";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KubernetesNamespaceAccess resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KubernetesNamespaceAccess to import
  * @param importFromId The id of the existing KubernetesNamespaceAccess that should be imported. Refer to the {@link https://registry.terraform.io/providers/portainer/portainer/1.19.0/docs/resources/kubernetes_namespace_access#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KubernetesNamespaceAccess to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "portainer_kubernetes_namespace_access", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/portainer/portainer/1.19.0/docs/resources/kubernetes_namespace_access portainer_kubernetes_namespace_access} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KubernetesNamespaceAccessConfig
  */
  public constructor(scope: Construct, id: string, config: KubernetesNamespaceAccessConfig) {
    super(scope, id, {
      terraformResourceType: 'portainer_kubernetes_namespace_access',
      terraformGeneratorMetadata: {
        providerName: 'portainer',
        providerVersion: '1.19.0',
        providerVersionConstraint: '1.19.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._endpointId = config.endpointId;
    this._id = config.id;
    this._namespaceId = config.namespaceId;
    this._teamsToAdd = config.teamsToAdd;
    this._teamsToRemove = config.teamsToRemove;
    this._usersToAdd = config.usersToAdd;
    this._usersToRemove = config.usersToRemove;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // endpoint_id - computed: false, optional: false, required: true
  private _endpointId?: number; 
  public get endpointId() {
    return this.getNumberAttribute('endpoint_id');
  }
  public set endpointId(value: number) {
    this._endpointId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointIdInput() {
    return this._endpointId;
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

  // namespace_id - computed: false, optional: false, required: true
  private _namespaceId?: string; 
  public get namespaceId() {
    return this.getStringAttribute('namespace_id');
  }
  public set namespaceId(value: string) {
    this._namespaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceIdInput() {
    return this._namespaceId;
  }

  // teams_to_add - computed: false, optional: true, required: false
  private _teamsToAdd?: number[]; 
  public get teamsToAdd() {
    return this.getNumberListAttribute('teams_to_add');
  }
  public set teamsToAdd(value: number[]) {
    this._teamsToAdd = value;
  }
  public resetTeamsToAdd() {
    this._teamsToAdd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamsToAddInput() {
    return this._teamsToAdd;
  }

  // teams_to_remove - computed: false, optional: true, required: false
  private _teamsToRemove?: number[]; 
  public get teamsToRemove() {
    return this.getNumberListAttribute('teams_to_remove');
  }
  public set teamsToRemove(value: number[]) {
    this._teamsToRemove = value;
  }
  public resetTeamsToRemove() {
    this._teamsToRemove = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamsToRemoveInput() {
    return this._teamsToRemove;
  }

  // users_to_add - computed: false, optional: true, required: false
  private _usersToAdd?: number[]; 
  public get usersToAdd() {
    return this.getNumberListAttribute('users_to_add');
  }
  public set usersToAdd(value: number[]) {
    this._usersToAdd = value;
  }
  public resetUsersToAdd() {
    this._usersToAdd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usersToAddInput() {
    return this._usersToAdd;
  }

  // users_to_remove - computed: false, optional: true, required: false
  private _usersToRemove?: number[]; 
  public get usersToRemove() {
    return this.getNumberListAttribute('users_to_remove');
  }
  public set usersToRemove(value: number[]) {
    this._usersToRemove = value;
  }
  public resetUsersToRemove() {
    this._usersToRemove = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usersToRemoveInput() {
    return this._usersToRemove;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      endpoint_id: cdktf.numberToTerraform(this._endpointId),
      id: cdktf.stringToTerraform(this._id),
      namespace_id: cdktf.stringToTerraform(this._namespaceId),
      teams_to_add: cdktf.listMapper(cdktf.numberToTerraform, false)(this._teamsToAdd),
      teams_to_remove: cdktf.listMapper(cdktf.numberToTerraform, false)(this._teamsToRemove),
      users_to_add: cdktf.listMapper(cdktf.numberToTerraform, false)(this._usersToAdd),
      users_to_remove: cdktf.listMapper(cdktf.numberToTerraform, false)(this._usersToRemove),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      endpoint_id: {
        value: cdktf.numberToHclTerraform(this._endpointId),
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
      namespace_id: {
        value: cdktf.stringToHclTerraform(this._namespaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      teams_to_add: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._teamsToAdd),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      teams_to_remove: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._teamsToRemove),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      users_to_add: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._usersToAdd),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      users_to_remove: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._usersToRemove),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
