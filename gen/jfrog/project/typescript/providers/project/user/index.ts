// https://registry.terraform.io/providers/jfrog/project/1.9.5/docs/resources/user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserConfig extends cdktf.TerraformMetaArguments {
  /**
  * When set to `true`, the resource will not fail if the user does not exist. Default to `false`. This is useful when the user is externally managed and the local account wasn't created yet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/project/1.9.5/docs/resources/user#ignore_missing_user User#ignore_missing_user}
  */
  readonly ignoreMissingUser?: boolean | cdktf.IResolvable;
  /**
  * The name of an artifactory user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/project/1.9.5/docs/resources/user#name User#name}
  */
  readonly name: string;
  /**
  * The key of the project to which the user should be assigned to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/project/1.9.5/docs/resources/user#project_key User#project_key}
  */
  readonly projectKey: string;
  /**
  * List of pre-defined Project or custom roles. Must have at least 1 role, e.g. 'Viewer'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/project/1.9.5/docs/resources/user#roles User#roles}
  */
  readonly roles: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/jfrog/project/1.9.5/docs/resources/user project_user}
*/
export class User extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "project_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a User resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the User to import
  * @param importFromId The id of the existing User that should be imported. Refer to the {@link https://registry.terraform.io/providers/jfrog/project/1.9.5/docs/resources/user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the User to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "project_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jfrog/project/1.9.5/docs/resources/user project_user} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserConfig
  */
  public constructor(scope: Construct, id: string, config: UserConfig) {
    super(scope, id, {
      terraformResourceType: 'project_user',
      terraformGeneratorMetadata: {
        providerName: 'project',
        providerVersion: '1.9.5',
        providerVersionConstraint: '1.9.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._ignoreMissingUser = config.ignoreMissingUser;
    this._name = config.name;
    this._projectKey = config.projectKey;
    this._roles = config.roles;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ignore_missing_user - computed: true, optional: true, required: false
  private _ignoreMissingUser?: boolean | cdktf.IResolvable; 
  public get ignoreMissingUser() {
    return this.getBooleanAttribute('ignore_missing_user');
  }
  public set ignoreMissingUser(value: boolean | cdktf.IResolvable) {
    this._ignoreMissingUser = value;
  }
  public resetIgnoreMissingUser() {
    this._ignoreMissingUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreMissingUserInput() {
    return this._ignoreMissingUser;
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

  // project_key - computed: false, optional: false, required: true
  private _projectKey?: string; 
  public get projectKey() {
    return this.getStringAttribute('project_key');
  }
  public set projectKey(value: string) {
    this._projectKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectKeyInput() {
    return this._projectKey;
  }

  // roles - computed: false, optional: false, required: true
  private _roles?: string[]; 
  public get roles() {
    return cdktf.Fn.tolist(this.getListAttribute('roles'));
  }
  public set roles(value: string[]) {
    this._roles = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesInput() {
    return this._roles;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ignore_missing_user: cdktf.booleanToTerraform(this._ignoreMissingUser),
      name: cdktf.stringToTerraform(this._name),
      project_key: cdktf.stringToTerraform(this._projectKey),
      roles: cdktf.listMapper(cdktf.stringToTerraform, false)(this._roles),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ignore_missing_user: {
        value: cdktf.booleanToHclTerraform(this._ignoreMissingUser),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_key: {
        value: cdktf.stringToHclTerraform(this._projectKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      roles: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._roles),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
