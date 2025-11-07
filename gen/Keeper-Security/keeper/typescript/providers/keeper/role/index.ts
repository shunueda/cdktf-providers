// https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/resources/role
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RoleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Role Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/resources/role#name Role#name}
  */
  readonly name: string;
  /**
  * New User Inherit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/resources/role#new_user_inherit Role#new_user_inherit}
  */
  readonly newUserInherit?: boolean | cdktf.IResolvable;
  /**
  * Node ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/resources/role#node_id Role#node_id}
  */
  readonly nodeId?: number;
  /**
  * Visible Below
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/resources/role#visible_below Role#visible_below}
  */
  readonly visibleBelow?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/resources/role keeper_role}
*/
export class Role extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "keeper_role";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Role resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Role to import
  * @param importFromId The id of the existing Role that should be imported. Refer to the {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/resources/role#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Role to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "keeper_role", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/resources/role keeper_role} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RoleConfig
  */
  public constructor(scope: Construct, id: string, config: RoleConfig) {
    super(scope, id, {
      terraformResourceType: 'keeper_role',
      terraformGeneratorMetadata: {
        providerName: 'keeper',
        providerVersion: '1.2.0'
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
    this._newUserInherit = config.newUserInherit;
    this._nodeId = config.nodeId;
    this._visibleBelow = config.visibleBelow;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // new_user_inherit - computed: true, optional: true, required: false
  private _newUserInherit?: boolean | cdktf.IResolvable; 
  public get newUserInherit() {
    return this.getBooleanAttribute('new_user_inherit');
  }
  public set newUserInherit(value: boolean | cdktf.IResolvable) {
    this._newUserInherit = value;
  }
  public resetNewUserInherit() {
    this._newUserInherit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newUserInheritInput() {
    return this._newUserInherit;
  }

  // node_id - computed: true, optional: true, required: false
  private _nodeId?: number; 
  public get nodeId() {
    return this.getNumberAttribute('node_id');
  }
  public set nodeId(value: number) {
    this._nodeId = value;
  }
  public resetNodeId() {
    this._nodeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeIdInput() {
    return this._nodeId;
  }

  // role_id - computed: true, optional: false, required: false
  public get roleId() {
    return this.getNumberAttribute('role_id');
  }

  // visible_below - computed: true, optional: true, required: false
  private _visibleBelow?: boolean | cdktf.IResolvable; 
  public get visibleBelow() {
    return this.getBooleanAttribute('visible_below');
  }
  public set visibleBelow(value: boolean | cdktf.IResolvable) {
    this._visibleBelow = value;
  }
  public resetVisibleBelow() {
    this._visibleBelow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibleBelowInput() {
    return this._visibleBelow;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      new_user_inherit: cdktf.booleanToTerraform(this._newUserInherit),
      node_id: cdktf.numberToTerraform(this._nodeId),
      visible_below: cdktf.booleanToTerraform(this._visibleBelow),
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
      new_user_inherit: {
        value: cdktf.booleanToHclTerraform(this._newUserInherit),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      node_id: {
        value: cdktf.numberToHclTerraform(this._nodeId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      visible_below: {
        value: cdktf.booleanToHclTerraform(this._visibleBelow),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
