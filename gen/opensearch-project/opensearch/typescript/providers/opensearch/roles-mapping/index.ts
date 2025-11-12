// https://registry.terraform.io/providers/opensearch-project/opensearch/2.3.2/docs/resources/roles_mapping
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RolesMappingConfig extends cdktf.TerraformMetaArguments {
  /**
  * A list of backend roles.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opensearch-project/opensearch/2.3.2/docs/resources/roles_mapping#and_backend_roles RolesMapping#and_backend_roles}
  */
  readonly andBackendRoles?: string[];
  /**
  * A list of backend roles.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opensearch-project/opensearch/2.3.2/docs/resources/roles_mapping#backend_roles RolesMapping#backend_roles}
  */
  readonly backendRoles?: string[];
  /**
  * Description of the role mapping.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opensearch-project/opensearch/2.3.2/docs/resources/roles_mapping#description RolesMapping#description}
  */
  readonly description?: string;
  /**
  * A list of host names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opensearch-project/opensearch/2.3.2/docs/resources/roles_mapping#hosts RolesMapping#hosts}
  */
  readonly hosts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opensearch-project/opensearch/2.3.2/docs/resources/roles_mapping#id RolesMapping#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the security role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opensearch-project/opensearch/2.3.2/docs/resources/roles_mapping#role_name RolesMapping#role_name}
  */
  readonly roleName: string;
  /**
  * A list of users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opensearch-project/opensearch/2.3.2/docs/resources/roles_mapping#users RolesMapping#users}
  */
  readonly users?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/opensearch-project/opensearch/2.3.2/docs/resources/roles_mapping opensearch_roles_mapping}
*/
export class RolesMapping extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opensearch_roles_mapping";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RolesMapping resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RolesMapping to import
  * @param importFromId The id of the existing RolesMapping that should be imported. Refer to the {@link https://registry.terraform.io/providers/opensearch-project/opensearch/2.3.2/docs/resources/roles_mapping#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RolesMapping to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opensearch_roles_mapping", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opensearch-project/opensearch/2.3.2/docs/resources/roles_mapping opensearch_roles_mapping} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RolesMappingConfig
  */
  public constructor(scope: Construct, id: string, config: RolesMappingConfig) {
    super(scope, id, {
      terraformResourceType: 'opensearch_roles_mapping',
      terraformGeneratorMetadata: {
        providerName: 'opensearch',
        providerVersion: '2.3.2',
        providerVersionConstraint: '2.3.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._andBackendRoles = config.andBackendRoles;
    this._backendRoles = config.backendRoles;
    this._description = config.description;
    this._hosts = config.hosts;
    this._id = config.id;
    this._roleName = config.roleName;
    this._users = config.users;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // and_backend_roles - computed: false, optional: true, required: false
  private _andBackendRoles?: string[]; 
  public get andBackendRoles() {
    return cdktf.Fn.tolist(this.getListAttribute('and_backend_roles'));
  }
  public set andBackendRoles(value: string[]) {
    this._andBackendRoles = value;
  }
  public resetAndBackendRoles() {
    this._andBackendRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get andBackendRolesInput() {
    return this._andBackendRoles;
  }

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

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // role_name - computed: false, optional: false, required: true
  private _roleName?: string; 
  public get roleName() {
    return this.getStringAttribute('role_name');
  }
  public set roleName(value: string) {
    this._roleName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleNameInput() {
    return this._roleName;
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
      and_backend_roles: cdktf.listMapper(cdktf.stringToTerraform, false)(this._andBackendRoles),
      backend_roles: cdktf.listMapper(cdktf.stringToTerraform, false)(this._backendRoles),
      description: cdktf.stringToTerraform(this._description),
      hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(this._hosts),
      id: cdktf.stringToTerraform(this._id),
      role_name: cdktf.stringToTerraform(this._roleName),
      users: cdktf.listMapper(cdktf.stringToTerraform, false)(this._users),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      and_backend_roles: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._andBackendRoles),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      backend_roles: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._backendRoles),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      role_name: {
        value: cdktf.stringToHclTerraform(this._roleName),
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
