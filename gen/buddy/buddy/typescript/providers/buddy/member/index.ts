// https://registry.terraform.io/providers/buddy/buddy/1.37.1/docs/resources/member
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MemberConfig extends cdktf.TerraformMetaArguments {
  /**
  * Is the member a workspace administrator
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.37.1/docs/resources/member#admin Member#admin}
  */
  readonly admin?: boolean | cdktf.IResolvable;
  /**
  * The permission's ID with which the member will be assigned to new projects
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.37.1/docs/resources/member#auto_assign_permission_set_id Member#auto_assign_permission_set_id}
  */
  readonly autoAssignPermissionSetId?: number;
  /**
  * Defines whether or not to automatically assign member to new projects
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.37.1/docs/resources/member#auto_assign_to_new_projects Member#auto_assign_to_new_projects}
  */
  readonly autoAssignToNewProjects?: boolean | cdktf.IResolvable;
  /**
  * The workspace's URL handle
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.37.1/docs/resources/member#domain Member#domain}
  */
  readonly domain: string;
  /**
  * The member's email
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.37.1/docs/resources/member#email Member#email}
  */
  readonly email: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/buddy/buddy/1.37.1/docs/resources/member buddy_member}
*/
export class Member extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "buddy_member";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Member resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Member to import
  * @param importFromId The id of the existing Member that should be imported. Refer to the {@link https://registry.terraform.io/providers/buddy/buddy/1.37.1/docs/resources/member#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Member to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "buddy_member", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/buddy/buddy/1.37.1/docs/resources/member buddy_member} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MemberConfig
  */
  public constructor(scope: Construct, id: string, config: MemberConfig) {
    super(scope, id, {
      terraformResourceType: 'buddy_member',
      terraformGeneratorMetadata: {
        providerName: 'buddy',
        providerVersion: '1.37.1',
        providerVersionConstraint: '1.37.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._admin = config.admin;
    this._autoAssignPermissionSetId = config.autoAssignPermissionSetId;
    this._autoAssignToNewProjects = config.autoAssignToNewProjects;
    this._domain = config.domain;
    this._email = config.email;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin - computed: true, optional: true, required: false
  private _admin?: boolean | cdktf.IResolvable; 
  public get admin() {
    return this.getBooleanAttribute('admin');
  }
  public set admin(value: boolean | cdktf.IResolvable) {
    this._admin = value;
  }
  public resetAdmin() {
    this._admin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminInput() {
    return this._admin;
  }

  // auto_assign_permission_set_id - computed: false, optional: true, required: false
  private _autoAssignPermissionSetId?: number; 
  public get autoAssignPermissionSetId() {
    return this.getNumberAttribute('auto_assign_permission_set_id');
  }
  public set autoAssignPermissionSetId(value: number) {
    this._autoAssignPermissionSetId = value;
  }
  public resetAutoAssignPermissionSetId() {
    this._autoAssignPermissionSetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoAssignPermissionSetIdInput() {
    return this._autoAssignPermissionSetId;
  }

  // auto_assign_to_new_projects - computed: true, optional: true, required: false
  private _autoAssignToNewProjects?: boolean | cdktf.IResolvable; 
  public get autoAssignToNewProjects() {
    return this.getBooleanAttribute('auto_assign_to_new_projects');
  }
  public set autoAssignToNewProjects(value: boolean | cdktf.IResolvable) {
    this._autoAssignToNewProjects = value;
  }
  public resetAutoAssignToNewProjects() {
    this._autoAssignToNewProjects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoAssignToNewProjectsInput() {
    return this._autoAssignToNewProjects;
  }

  // avatar_url - computed: true, optional: false, required: false
  public get avatarUrl() {
    return this.getStringAttribute('avatar_url');
  }

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // email - computed: false, optional: false, required: true
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // html_url - computed: true, optional: false, required: false
  public get htmlUrl() {
    return this.getStringAttribute('html_url');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // member_id - computed: true, optional: false, required: false
  public get memberId() {
    return this.getNumberAttribute('member_id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // workspace_owner - computed: true, optional: false, required: false
  public get workspaceOwner() {
    return this.getBooleanAttribute('workspace_owner');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      admin: cdktf.booleanToTerraform(this._admin),
      auto_assign_permission_set_id: cdktf.numberToTerraform(this._autoAssignPermissionSetId),
      auto_assign_to_new_projects: cdktf.booleanToTerraform(this._autoAssignToNewProjects),
      domain: cdktf.stringToTerraform(this._domain),
      email: cdktf.stringToTerraform(this._email),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      admin: {
        value: cdktf.booleanToHclTerraform(this._admin),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_assign_permission_set_id: {
        value: cdktf.numberToHclTerraform(this._autoAssignPermissionSetId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      auto_assign_to_new_projects: {
        value: cdktf.booleanToHclTerraform(this._autoAssignToNewProjects),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      email: {
        value: cdktf.stringToHclTerraform(this._email),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
