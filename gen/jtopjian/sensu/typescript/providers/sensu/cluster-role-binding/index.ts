// https://registry.terraform.io/providers/jtopjian/sensu/0.14.0/docs/resources/cluster_role_binding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ClusterRoleBindingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jtopjian/sensu/0.14.0/docs/resources/cluster_role_binding#cluster_role ClusterRoleBinding#cluster_role}
  */
  readonly clusterRole: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jtopjian/sensu/0.14.0/docs/resources/cluster_role_binding#groups ClusterRoleBinding#groups}
  */
  readonly groups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jtopjian/sensu/0.14.0/docs/resources/cluster_role_binding#id ClusterRoleBinding#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jtopjian/sensu/0.14.0/docs/resources/cluster_role_binding#name ClusterRoleBinding#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jtopjian/sensu/0.14.0/docs/resources/cluster_role_binding#users ClusterRoleBinding#users}
  */
  readonly users?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/jtopjian/sensu/0.14.0/docs/resources/cluster_role_binding sensu_cluster_role_binding}
*/
export class ClusterRoleBinding extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sensu_cluster_role_binding";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ClusterRoleBinding resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ClusterRoleBinding to import
  * @param importFromId The id of the existing ClusterRoleBinding that should be imported. Refer to the {@link https://registry.terraform.io/providers/jtopjian/sensu/0.14.0/docs/resources/cluster_role_binding#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ClusterRoleBinding to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sensu_cluster_role_binding", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jtopjian/sensu/0.14.0/docs/resources/cluster_role_binding sensu_cluster_role_binding} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ClusterRoleBindingConfig
  */
  public constructor(scope: Construct, id: string, config: ClusterRoleBindingConfig) {
    super(scope, id, {
      terraformResourceType: 'sensu_cluster_role_binding',
      terraformGeneratorMetadata: {
        providerName: 'sensu',
        providerVersion: '0.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterRole = config.clusterRole;
    this._groups = config.groups;
    this._id = config.id;
    this._name = config.name;
    this._users = config.users;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_role - computed: false, optional: false, required: true
  private _clusterRole?: string; 
  public get clusterRole() {
    return this.getStringAttribute('cluster_role');
  }
  public set clusterRole(value: string) {
    this._clusterRole = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterRoleInput() {
    return this._clusterRole;
  }

  // groups - computed: false, optional: true, required: false
  private _groups?: string[]; 
  public get groups() {
    return this.getListAttribute('groups');
  }
  public set groups(value: string[]) {
    this._groups = value;
  }
  public resetGroups() {
    this._groups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups;
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

  // users - computed: false, optional: true, required: false
  private _users?: string[]; 
  public get users() {
    return this.getListAttribute('users');
  }
  public set users(value: string[]) {
    this._users = value;
  }
  public resetUsers() {
    this._users = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usersInput() {
    return this._users;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_role: cdktf.stringToTerraform(this._clusterRole),
      groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._groups),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      users: cdktf.listMapper(cdktf.stringToTerraform, false)(this._users),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_role: {
        value: cdktf.stringToHclTerraform(this._clusterRole),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._groups),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      users: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._users),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
