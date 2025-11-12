// https://registry.terraform.io/providers/buddy/buddy/1.37.1/docs/resources/group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * The permission's ID with which the group will be assigned to new projects
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.37.1/docs/resources/group#auto_assign_permission_set_id Group#auto_assign_permission_set_id}
  */
  readonly autoAssignPermissionSetId?: number;
  /**
  * Defines whether or not to automatically assign group to new projects
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.37.1/docs/resources/group#auto_assign_to_new_projects Group#auto_assign_to_new_projects}
  */
  readonly autoAssignToNewProjects?: boolean | cdktf.IResolvable;
  /**
  * The group's description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.37.1/docs/resources/group#description Group#description}
  */
  readonly description?: string;
  /**
  * The workspace's URL handle
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.37.1/docs/resources/group#domain Group#domain}
  */
  readonly domain: string;
  /**
  * The group's name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.37.1/docs/resources/group#name Group#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/buddy/buddy/1.37.1/docs/resources/group buddy_group}
*/
export class Group extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "buddy_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Group resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Group to import
  * @param importFromId The id of the existing Group that should be imported. Refer to the {@link https://registry.terraform.io/providers/buddy/buddy/1.37.1/docs/resources/group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Group to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "buddy_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/buddy/buddy/1.37.1/docs/resources/group buddy_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GroupConfig
  */
  public constructor(scope: Construct, id: string, config: GroupConfig) {
    super(scope, id, {
      terraformResourceType: 'buddy_group',
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
    this._autoAssignPermissionSetId = config.autoAssignPermissionSetId;
    this._autoAssignToNewProjects = config.autoAssignToNewProjects;
    this._description = config.description;
    this._domain = config.domain;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // description - computed: true, optional: true, required: false
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

  // group_id - computed: true, optional: false, required: false
  public get groupId() {
    return this.getNumberAttribute('group_id');
  }

  // html_url - computed: true, optional: false, required: false
  public get htmlUrl() {
    return this.getStringAttribute('html_url');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_assign_permission_set_id: cdktf.numberToTerraform(this._autoAssignPermissionSetId),
      auto_assign_to_new_projects: cdktf.booleanToTerraform(this._autoAssignToNewProjects),
      description: cdktf.stringToTerraform(this._description),
      domain: cdktf.stringToTerraform(this._domain),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
