// https://registry.terraform.io/providers/env0/env0/1.29.7/docs/resources/team_environment_assignment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TeamEnvironmentAssignmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * id of the environment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.7/docs/resources/team_environment_assignment#environment_id TeamEnvironmentAssignment#environment_id}
  */
  readonly environmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.7/docs/resources/team_environment_assignment#id TeamEnvironmentAssignment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * id of the assigned custom role. The following built-in roles can be passed as well: `Viewer`, `Planner`, `Deployer`, `Admin`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.7/docs/resources/team_environment_assignment#role_id TeamEnvironmentAssignment#role_id}
  */
  readonly roleId: string;
  /**
  * id of the team
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.7/docs/resources/team_environment_assignment#team_id TeamEnvironmentAssignment#team_id}
  */
  readonly teamId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/env0/env0/1.29.7/docs/resources/team_environment_assignment env0_team_environment_assignment}
*/
export class TeamEnvironmentAssignment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "env0_team_environment_assignment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TeamEnvironmentAssignment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TeamEnvironmentAssignment to import
  * @param importFromId The id of the existing TeamEnvironmentAssignment that should be imported. Refer to the {@link https://registry.terraform.io/providers/env0/env0/1.29.7/docs/resources/team_environment_assignment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TeamEnvironmentAssignment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "env0_team_environment_assignment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/env0/env0/1.29.7/docs/resources/team_environment_assignment env0_team_environment_assignment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TeamEnvironmentAssignmentConfig
  */
  public constructor(scope: Construct, id: string, config: TeamEnvironmentAssignmentConfig) {
    super(scope, id, {
      terraformResourceType: 'env0_team_environment_assignment',
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
    this._environmentId = config.environmentId;
    this._id = config.id;
    this._roleId = config.roleId;
    this._teamId = config.teamId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // environment_id - computed: false, optional: false, required: true
  private _environmentId?: string; 
  public get environmentId() {
    return this.getStringAttribute('environment_id');
  }
  public set environmentId(value: string) {
    this._environmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentIdInput() {
    return this._environmentId;
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
      environment_id: cdktf.stringToTerraform(this._environmentId),
      id: cdktf.stringToTerraform(this._id),
      role_id: cdktf.stringToTerraform(this._roleId),
      team_id: cdktf.stringToTerraform(this._teamId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      environment_id: {
        value: cdktf.stringToHclTerraform(this._environmentId),
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
