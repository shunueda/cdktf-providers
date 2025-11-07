// https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/resources/team_membership
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TeamMembershipConfig extends cdktf.TerraformMetaArguments {
  /**
  * Team UID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/resources/team_membership#team_uid TeamMembership#team_uid}
  */
  readonly teamUid: string;
  /**
  * The list of user IDs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/resources/team_membership#users TeamMembership#users}
  */
  readonly users: number[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/resources/team_membership keeper_team_membership}
*/
export class TeamMembership extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "keeper_team_membership";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TeamMembership resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TeamMembership to import
  * @param importFromId The id of the existing TeamMembership that should be imported. Refer to the {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/resources/team_membership#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TeamMembership to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "keeper_team_membership", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/resources/team_membership keeper_team_membership} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TeamMembershipConfig
  */
  public constructor(scope: Construct, id: string, config: TeamMembershipConfig) {
    super(scope, id, {
      terraformResourceType: 'keeper_team_membership',
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
    this._teamUid = config.teamUid;
    this._users = config.users;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // team_uid - computed: false, optional: false, required: true
  private _teamUid?: string; 
  public get teamUid() {
    return this.getStringAttribute('team_uid');
  }
  public set teamUid(value: string) {
    this._teamUid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get teamUidInput() {
    return this._teamUid;
  }

  // users - computed: false, optional: false, required: true
  private _users?: number[]; 
  public get users() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('users')));
  }
  public set users(value: number[]) {
    this._users = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usersInput() {
    return this._users;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      team_uid: cdktf.stringToTerraform(this._teamUid),
      users: cdktf.listMapper(cdktf.numberToTerraform, false)(this._users),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      team_uid: {
        value: cdktf.stringToHclTerraform(this._teamUid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      users: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._users),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
