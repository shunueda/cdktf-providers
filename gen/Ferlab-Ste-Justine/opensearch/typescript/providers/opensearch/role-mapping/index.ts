// https://registry.terraform.io/providers/ferlab-ste-justine/opensearch/0.1.0/docs/resources/role_mapping
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RoleMappingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Backend roles to map to the role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ferlab-ste-justine/opensearch/0.1.0/docs/resources/role_mapping#backend_roles RoleMapping#backend_roles}
  */
  readonly backendRoles?: string[];
  /**
  * Hosts to map to the role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ferlab-ste-justine/opensearch/0.1.0/docs/resources/role_mapping#hosts RoleMapping#hosts}
  */
  readonly hosts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ferlab-ste-justine/opensearch/0.1.0/docs/resources/role_mapping#id RoleMapping#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Role that things should be mapped to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ferlab-ste-justine/opensearch/0.1.0/docs/resources/role_mapping#role RoleMapping#role}
  */
  readonly role: string;
  /**
  * Users to map to the role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ferlab-ste-justine/opensearch/0.1.0/docs/resources/role_mapping#users RoleMapping#users}
  */
  readonly users?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/ferlab-ste-justine/opensearch/0.1.0/docs/resources/role_mapping opensearch_role_mapping}
*/
export class RoleMapping extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opensearch_role_mapping";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RoleMapping resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RoleMapping to import
  * @param importFromId The id of the existing RoleMapping that should be imported. Refer to the {@link https://registry.terraform.io/providers/ferlab-ste-justine/opensearch/0.1.0/docs/resources/role_mapping#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RoleMapping to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opensearch_role_mapping", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ferlab-ste-justine/opensearch/0.1.0/docs/resources/role_mapping opensearch_role_mapping} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RoleMappingConfig
  */
  public constructor(scope: Construct, id: string, config: RoleMappingConfig) {
    super(scope, id, {
      terraformResourceType: 'opensearch_role_mapping',
      terraformGeneratorMetadata: {
        providerName: 'opensearch',
        providerVersion: '0.1.0',
        providerVersionConstraint: '0.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._backendRoles = config.backendRoles;
    this._hosts = config.hosts;
    this._id = config.id;
    this._role = config.role;
    this._users = config.users;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backend_roles - computed: false, optional: true, required: false
  private _backendRoles?: string[]; 
  public get backendRoles() {
    return cdktf.Fn.tolist(this.getListAttribute('backend_roles'));
  }
  public set backendRoles(value: string[]) {
    this._backendRoles = value;
  }
  public resetBackendRoles() {
    this._backendRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendRolesInput() {
    return this._backendRoles;
  }

  // hosts - computed: false, optional: true, required: false
  private _hosts?: string[]; 
  public get hosts() {
    return cdktf.Fn.tolist(this.getListAttribute('hosts'));
  }
  public set hosts(value: string[]) {
    this._hosts = value;
  }
  public resetHosts() {
    this._hosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostsInput() {
    return this._hosts;
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

  // role - computed: false, optional: false, required: true
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // users - computed: false, optional: true, required: false
  private _users?: string[]; 
  public get users() {
    return cdktf.Fn.tolist(this.getListAttribute('users'));
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
      backend_roles: cdktf.listMapper(cdktf.stringToTerraform, false)(this._backendRoles),
      hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(this._hosts),
      id: cdktf.stringToTerraform(this._id),
      role: cdktf.stringToTerraform(this._role),
      users: cdktf.listMapper(cdktf.stringToTerraform, false)(this._users),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      backend_roles: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._backendRoles),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      hosts: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._hosts),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role: {
        value: cdktf.stringToHclTerraform(this._role),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      users: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._users),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
