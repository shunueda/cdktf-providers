// https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/role
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RoleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Modelset ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/role#model_set_id Role#model_set_id}
  */
  readonly modelSetId: number;
  /**
  * Role name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/role#name Role#name}
  */
  readonly name: string;
  /**
  * PermissionSet ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/role#permission_set_id Role#permission_set_id}
  */
  readonly permissionSetId?: number;
  /**
  * PermissionSet Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/role#permission_set_name Role#permission_set_name}
  */
  readonly permissionSetName?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/role looker_role}
*/
export class Role extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "looker_role";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Role resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Role to import
  * @param importFromId The id of the existing Role that should be imported. Refer to the {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/role#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Role to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "looker_role", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/role looker_role} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RoleConfig
  */
  public constructor(scope: Construct, id: string, config: RoleConfig) {
    super(scope, id, {
      terraformResourceType: 'looker_role',
      terraformGeneratorMetadata: {
        providerName: 'looker',
        providerVersion: '0.4.0',
        providerVersionConstraint: '0.4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._modelSetId = config.modelSetId;
    this._name = config.name;
    this._permissionSetId = config.permissionSetId;
    this._permissionSetName = config.permissionSetName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // model_set_id - computed: false, optional: false, required: true
  private _modelSetId?: number; 
  public get modelSetId() {
    return this.getNumberAttribute('model_set_id');
  }
  public set modelSetId(value: number) {
    this._modelSetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modelSetIdInput() {
    return this._modelSetId;
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

  // permission_set_id - computed: true, optional: true, required: false
  private _permissionSetId?: number; 
  public get permissionSetId() {
    return this.getNumberAttribute('permission_set_id');
  }
  public set permissionSetId(value: number) {
    this._permissionSetId = value;
  }
  public resetPermissionSetId() {
    this._permissionSetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionSetIdInput() {
    return this._permissionSetId;
  }

  // permission_set_name - computed: true, optional: true, required: false
  private _permissionSetName?: string; 
  public get permissionSetName() {
    return this.getStringAttribute('permission_set_name');
  }
  public set permissionSetName(value: string) {
    this._permissionSetName = value;
  }
  public resetPermissionSetName() {
    this._permissionSetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionSetNameInput() {
    return this._permissionSetName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      model_set_id: cdktf.numberToTerraform(this._modelSetId),
      name: cdktf.stringToTerraform(this._name),
      permission_set_id: cdktf.numberToTerraform(this._permissionSetId),
      permission_set_name: cdktf.stringToTerraform(this._permissionSetName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      model_set_id: {
        value: cdktf.numberToHclTerraform(this._modelSetId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      permission_set_id: {
        value: cdktf.numberToHclTerraform(this._permissionSetId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      permission_set_name: {
        value: cdktf.stringToHclTerraform(this._permissionSetName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
