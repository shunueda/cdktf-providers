// https://registry.terraform.io/providers/go-gitea/gitea/0.7.0/docs/resources/team_members
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TeamMembersConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gitea/gitea/0.7.0/docs/resources/team_members#id TeamMembers#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The user names of the members of the team.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gitea/gitea/0.7.0/docs/resources/team_members#members TeamMembers#members}
  */
  readonly members: string[];
  /**
  * The ID of the team.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gitea/gitea/0.7.0/docs/resources/team_members#team_id TeamMembers#team_id}
  */
  readonly teamId: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/go-gitea/gitea/0.7.0/docs/resources/team_members gitea_team_members}
*/
export class TeamMembers extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gitea_team_members";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TeamMembers resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TeamMembers to import
  * @param importFromId The id of the existing TeamMembers that should be imported. Refer to the {@link https://registry.terraform.io/providers/go-gitea/gitea/0.7.0/docs/resources/team_members#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TeamMembers to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gitea_team_members", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/go-gitea/gitea/0.7.0/docs/resources/team_members gitea_team_members} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TeamMembersConfig
  */
  public constructor(scope: Construct, id: string, config: TeamMembersConfig) {
    super(scope, id, {
      terraformResourceType: 'gitea_team_members',
      terraformGeneratorMetadata: {
        providerName: 'gitea',
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
    this._id = config.id;
    this._members = config.members;
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

  // members - computed: false, optional: false, required: true
  private _members?: string[]; 
  public get members() {
    return cdktf.Fn.tolist(this.getListAttribute('members'));
  }
  public set members(value: string[]) {
    this._members = value;
  }
  // Temporarily expose input value. Use with caution.
  public get membersInput() {
    return this._members;
  }

  // team_id - computed: false, optional: false, required: true
  private _teamId?: number; 
  public get teamId() {
    return this.getNumberAttribute('team_id');
  }
  public set teamId(value: number) {
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
      members: cdktf.listMapper(cdktf.stringToTerraform, false)(this._members),
      team_id: cdktf.numberToTerraform(this._teamId),
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
      members: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._members),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      team_id: {
        value: cdktf.numberToHclTerraform(this._teamId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
