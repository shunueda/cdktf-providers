// https://registry.terraform.io/providers/rewe-digital/sonarcloud/0.5.2/docs/resources/user_group_permissions
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserGroupPermissionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the user group to set the permissions for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rewe-digital/sonarcloud/0.5.2/docs/resources/user_group_permissions#name UserGroupPermissions#name}
  */
  readonly name: string;
  /**
  * List of permissions to grant. Available global permissions: [`admin`, `profileadmin`, `gateadmin`, `scan`, `provisioning`]. Available project permissions: ['admin`, `scan`, `codeviewer`, `issueadmin`, `securityhotspotadmin`, `user`].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rewe-digital/sonarcloud/0.5.2/docs/resources/user_group_permissions#permissions UserGroupPermissions#permissions}
  */
  readonly permissions: string[];
  /**
  * The key of the project to restrict the permissions to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rewe-digital/sonarcloud/0.5.2/docs/resources/user_group_permissions#project_key UserGroupPermissions#project_key}
  */
  readonly projectKey?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/rewe-digital/sonarcloud/0.5.2/docs/resources/user_group_permissions sonarcloud_user_group_permissions}
*/
export class UserGroupPermissions extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sonarcloud_user_group_permissions";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a UserGroupPermissions resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UserGroupPermissions to import
  * @param importFromId The id of the existing UserGroupPermissions that should be imported. Refer to the {@link https://registry.terraform.io/providers/rewe-digital/sonarcloud/0.5.2/docs/resources/user_group_permissions#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UserGroupPermissions to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sonarcloud_user_group_permissions", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rewe-digital/sonarcloud/0.5.2/docs/resources/user_group_permissions sonarcloud_user_group_permissions} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserGroupPermissionsConfig
  */
  public constructor(scope: Construct, id: string, config: UserGroupPermissionsConfig) {
    super(scope, id, {
      terraformResourceType: 'sonarcloud_user_group_permissions',
      terraformGeneratorMetadata: {
        providerName: 'sonarcloud',
        providerVersion: '0.5.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
    this._permissions = config.permissions;
    this._projectKey = config.projectKey;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // permissions - computed: false, optional: false, required: true
  private _permissions?: string[]; 
  public get permissions() {
    return cdktf.Fn.tolist(this.getListAttribute('permissions'));
  }
  public set permissions(value: string[]) {
    this._permissions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions;
  }

  // project_key - computed: false, optional: true, required: false
  private _projectKey?: string; 
  public get projectKey() {
    return this.getStringAttribute('project_key');
  }
  public set projectKey(value: string) {
    this._projectKey = value;
  }
  public resetProjectKey() {
    this._projectKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectKeyInput() {
    return this._projectKey;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      permissions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._permissions),
      project_key: cdktf.stringToTerraform(this._projectKey),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      permissions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._permissions),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      project_key: {
        value: cdktf.stringToHclTerraform(this._projectKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
