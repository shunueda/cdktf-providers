// https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/role_binding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RoleBindingConfig extends cdktf.TerraformMetaArguments {
  /**
  * User-friendly display name of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/role_binding#display_name RoleBinding#display_name}
  */
  readonly displayName?: string;
  /**
  * Group name that can be retrieved from the Nobl9 UI (**Settings** > **Access Controls** > **Groups**) or using sloctl `get usergroups` command.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/role_binding#group_ref RoleBinding#group_ref}
  */
  readonly groupRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/role_binding#id RoleBinding#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Automatically generated, unique name of the resource, must conform to the naming convention from [DNS RFC1123](https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/role_binding#name RoleBinding#name}
  */
  readonly name?: string;
  /**
  * Project name, the project in which we want the user or group to assume the specified role. When `project_ref` is empty, `role_ref` must contain an Organization Role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/role_binding#project_ref RoleBinding#project_ref}
  */
  readonly projectRef?: string;
  /**
  * Role name; the role that you want the user or group to assume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/role_binding#role_ref RoleBinding#role_ref}
  */
  readonly roleRef: string;
  /**
  * Okta User ID that can be retrieved from the Nobl9 UI (**Settings** > **Access Controls** > **Users**).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/role_binding#user RoleBinding#user}
  */
  readonly user?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/role_binding nobl9_role_binding}
*/
export class RoleBinding extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nobl9_role_binding";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RoleBinding resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RoleBinding to import
  * @param importFromId The id of the existing RoleBinding that should be imported. Refer to the {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/role_binding#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RoleBinding to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nobl9_role_binding", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/role_binding nobl9_role_binding} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RoleBindingConfig
  */
  public constructor(scope: Construct, id: string, config: RoleBindingConfig) {
    super(scope, id, {
      terraformResourceType: 'nobl9_role_binding',
      terraformGeneratorMetadata: {
        providerName: 'nobl9',
        providerVersion: '0.44.1',
        providerVersionConstraint: '0.44.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._displayName = config.displayName;
    this._groupRef = config.groupRef;
    this._id = config.id;
    this._name = config.name;
    this._projectRef = config.projectRef;
    this._roleRef = config.roleRef;
    this._user = config.user;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // group_ref - computed: false, optional: true, required: false
  private _groupRef?: string; 
  public get groupRef() {
    return this.getStringAttribute('group_ref');
  }
  public set groupRef(value: string) {
    this._groupRef = value;
  }
  public resetGroupRef() {
    this._groupRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupRefInput() {
    return this._groupRef;
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

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // project_ref - computed: false, optional: true, required: false
  private _projectRef?: string; 
  public get projectRef() {
    return this.getStringAttribute('project_ref');
  }
  public set projectRef(value: string) {
    this._projectRef = value;
  }
  public resetProjectRef() {
    this._projectRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectRefInput() {
    return this._projectRef;
  }

  // role_ref - computed: false, optional: false, required: true
  private _roleRef?: string; 
  public get roleRef() {
    return this.getStringAttribute('role_ref');
  }
  public set roleRef(value: string) {
    this._roleRef = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleRefInput() {
    return this._roleRef;
  }

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      display_name: cdktf.stringToTerraform(this._displayName),
      group_ref: cdktf.stringToTerraform(this._groupRef),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      project_ref: cdktf.stringToTerraform(this._projectRef),
      role_ref: cdktf.stringToTerraform(this._roleRef),
      user: cdktf.stringToTerraform(this._user),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_ref: {
        value: cdktf.stringToHclTerraform(this._groupRef),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_ref: {
        value: cdktf.stringToHclTerraform(this._projectRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role_ref: {
        value: cdktf.stringToHclTerraform(this._roleRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user: {
        value: cdktf.stringToHclTerraform(this._user),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
