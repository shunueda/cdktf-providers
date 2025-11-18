// https://registry.terraform.io/providers/prefecthq/prefect/2.90.2/docs/resources/workspace_role
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WorkspaceRoleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of the Workspace Role
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.2/docs/resources/workspace_role#description WorkspaceRole#description}
  */
  readonly description?: string;
  /**
  * Workspace Role ID (UUID), whose permissions are inherited by this Workspace Role
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.2/docs/resources/workspace_role#inherited_role_id WorkspaceRole#inherited_role_id}
  */
  readonly inheritedRoleId?: string;
  /**
  * Name of the Workspace Role
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.2/docs/resources/workspace_role#name WorkspaceRole#name}
  */
  readonly name: string;
  /**
  * List of scopes linked to the Workspace Role
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.2/docs/resources/workspace_role#scopes WorkspaceRole#scopes}
  */
  readonly scopes?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.2/docs/resources/workspace_role prefect_workspace_role}
*/
export class WorkspaceRole extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "prefect_workspace_role";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WorkspaceRole resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WorkspaceRole to import
  * @param importFromId The id of the existing WorkspaceRole that should be imported. Refer to the {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.2/docs/resources/workspace_role#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WorkspaceRole to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "prefect_workspace_role", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.2/docs/resources/workspace_role prefect_workspace_role} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WorkspaceRoleConfig
  */
  public constructor(scope: Construct, id: string, config: WorkspaceRoleConfig) {
    super(scope, id, {
      terraformResourceType: 'prefect_workspace_role',
      terraformGeneratorMetadata: {
        providerName: 'prefect',
        providerVersion: '2.90.2',
        providerVersionConstraint: '2.90.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._inheritedRoleId = config.inheritedRoleId;
    this._name = config.name;
    this._scopes = config.scopes;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: true, optional: false, required: false
  public get accountId() {
    return this.getStringAttribute('account_id');
  }

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // inherited_role_id - computed: false, optional: true, required: false
  private _inheritedRoleId?: string; 
  public get inheritedRoleId() {
    return this.getStringAttribute('inherited_role_id');
  }
  public set inheritedRoleId(value: string) {
    this._inheritedRoleId = value;
  }
  public resetInheritedRoleId() {
    this._inheritedRoleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inheritedRoleIdInput() {
    return this._inheritedRoleId;
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

  // scopes - computed: false, optional: true, required: false
  private _scopes?: string[]; 
  public get scopes() {
    return this.getListAttribute('scopes');
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  public resetScopes() {
    this._scopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
  }

  // updated - computed: true, optional: false, required: false
  public get updated() {
    return this.getStringAttribute('updated');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      inherited_role_id: cdktf.stringToTerraform(this._inheritedRoleId),
      name: cdktf.stringToTerraform(this._name),
      scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._scopes),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      inherited_role_id: {
        value: cdktf.stringToHclTerraform(this._inheritedRoleId),
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
      scopes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._scopes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
