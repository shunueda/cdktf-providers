// https://registry.terraform.io/providers/env0/env0/1.29.7/docs/resources/team_organization_assignment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TeamOrganizationAssignmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.7/docs/resources/team_organization_assignment#id TeamOrganizationAssignment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * id of the assigned custom role. The following built-in roles can be passed as well: `User`, `Admin`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.7/docs/resources/team_organization_assignment#role_id TeamOrganizationAssignment#role_id}
  */
  readonly roleId: string;
  /**
  * id of the team
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.7/docs/resources/team_organization_assignment#team_id TeamOrganizationAssignment#team_id}
  */
  readonly teamId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/env0/env0/1.29.7/docs/resources/team_organization_assignment env0_team_organization_assignment}
*/
export class TeamOrganizationAssignment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "env0_team_organization_assignment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TeamOrganizationAssignment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TeamOrganizationAssignment to import
  * @param importFromId The id of the existing TeamOrganizationAssignment that should be imported. Refer to the {@link https://registry.terraform.io/providers/env0/env0/1.29.7/docs/resources/team_organization_assignment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TeamOrganizationAssignment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "env0_team_organization_assignment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/env0/env0/1.29.7/docs/resources/team_organization_assignment env0_team_organization_assignment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TeamOrganizationAssignmentConfig
  */
  public constructor(scope: Construct, id: string, config: TeamOrganizationAssignmentConfig) {
    super(scope, id, {
      terraformResourceType: 'env0_team_organization_assignment',
      terraformGeneratorMetadata: {
        providerName: 'env0',
        providerVersion: '1.29.7',
        providerVersionConstraint: '1.29.7'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._roleId = config.roleId;
    this._teamId = config.teamId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // team_id - computed: false, optional: false, required: true
  private _teamId?: string; 
  public get teamId() {
    return this.getStringAttribute('team_id');
  }
  public set teamId(value: string) {
    this._teamId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get teamIdInput() {
    return this._teamId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      role_id: cdktf.stringToTerraform(this._roleId),
      team_id: cdktf.stringToTerraform(this._teamId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      team_id: {
        value: cdktf.stringToHclTerraform(this._teamId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
