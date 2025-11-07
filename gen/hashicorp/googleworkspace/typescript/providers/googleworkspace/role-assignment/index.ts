// https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/role_assignment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RoleAssignmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * The unique ID of the user this role is assigned to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/role_assignment#assigned_to RoleAssignment#assigned_to}
  */
  readonly assignedTo: string;
  /**
  * If the role is restricted to an organization unit, this contains the ID for the organization unit the exercise of this role is restricted to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/role_assignment#org_unit_id RoleAssignment#org_unit_id}
  */
  readonly orgUnitId?: string;
  /**
  * The ID of the role that is assigned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/role_assignment#role_id RoleAssignment#role_id}
  */
  readonly roleId: string;
  /**
  * Defaults to `CUSTOMER`. The scope in which this role is assigned. Valid values are :
  * 	- `CUSTOMER`
  * 	- `ORG_UNIT`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/role_assignment#scope_type RoleAssignment#scope_type}
  */
  readonly scopeType?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/role_assignment googleworkspace_role_assignment}
*/
export class RoleAssignment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "googleworkspace_role_assignment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RoleAssignment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RoleAssignment to import
  * @param importFromId The id of the existing RoleAssignment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/role_assignment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RoleAssignment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "googleworkspace_role_assignment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/role_assignment googleworkspace_role_assignment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RoleAssignmentConfig
  */
  public constructor(scope: Construct, id: string, config: RoleAssignmentConfig) {
    super(scope, id, {
      terraformResourceType: 'googleworkspace_role_assignment',
      terraformGeneratorMetadata: {
        providerName: 'googleworkspace',
        providerVersion: '0.7.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._assignedTo = config.assignedTo;
    this._orgUnitId = config.orgUnitId;
    this._roleId = config.roleId;
    this._scopeType = config.scopeType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // assigned_to - computed: false, optional: false, required: true
  private _assignedTo?: string; 
  public get assignedTo() {
    return this.getStringAttribute('assigned_to');
  }
  public set assignedTo(value: string) {
    this._assignedTo = value;
  }
  // Temporarily expose input value. Use with caution.
  public get assignedToInput() {
    return this._assignedTo;
  }

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // org_unit_id - computed: false, optional: true, required: false
  private _orgUnitId?: string; 
  public get orgUnitId() {
    return this.getStringAttribute('org_unit_id');
  }
  public set orgUnitId(value: string) {
    this._orgUnitId = value;
  }
  public resetOrgUnitId() {
    this._orgUnitId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgUnitIdInput() {
    return this._orgUnitId;
  }

  // role_id - computed: false, optional: false, required: true
  private _roleId?: string; 
  public get roleId() {
    return this.getStringAttribute('role_id');
  }
  public set roleId(value: string) {
    this._roleId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleIdInput() {
    return this._roleId;
  }

  // scope_type - computed: false, optional: true, required: false
  private _scopeType?: string; 
  public get scopeType() {
    return this.getStringAttribute('scope_type');
  }
  public set scopeType(value: string) {
    this._scopeType = value;
  }
  public resetScopeType() {
    this._scopeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeTypeInput() {
    return this._scopeType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      assigned_to: cdktf.stringToTerraform(this._assignedTo),
      org_unit_id: cdktf.stringToTerraform(this._orgUnitId),
      role_id: cdktf.stringToTerraform(this._roleId),
      scope_type: cdktf.stringToTerraform(this._scopeType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      assigned_to: {
        value: cdktf.stringToHclTerraform(this._assignedTo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      org_unit_id: {
        value: cdktf.stringToHclTerraform(this._orgUnitId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role_id: {
        value: cdktf.stringToHclTerraform(this._roleId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scope_type: {
        value: cdktf.stringToHclTerraform(this._scopeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
