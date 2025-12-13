// https://registry.terraform.io/providers/singlestore-labs/singlestoredb/0.1.8/docs/resources/team
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TeamConfig extends cdktf.TerraformMetaArguments {
  /**
  * The description of the team.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/singlestore-labs/singlestoredb/0.1.8/docs/resources/team#description Team#description}
  */
  readonly description?: string;
  /**
  * List of team UUIDs that are members of this team.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/singlestore-labs/singlestoredb/0.1.8/docs/resources/team#member_teams Team#member_teams}
  */
  readonly memberTeams?: string[];
  /**
  * List of user emails that are members of this team.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/singlestore-labs/singlestoredb/0.1.8/docs/resources/team#member_users Team#member_users}
  */
  readonly memberUsers?: string[];
  /**
  * The name of the team.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/singlestore-labs/singlestoredb/0.1.8/docs/resources/team#name Team#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/singlestore-labs/singlestoredb/0.1.8/docs/resources/team singlestoredb_team}
*/
export class Team extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "singlestoredb_team";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Team resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Team to import
  * @param importFromId The id of the existing Team that should be imported. Refer to the {@link https://registry.terraform.io/providers/singlestore-labs/singlestoredb/0.1.8/docs/resources/team#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Team to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "singlestoredb_team", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/singlestore-labs/singlestoredb/0.1.8/docs/resources/team singlestoredb_team} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TeamConfig
  */
  public constructor(scope: Construct, id: string, config: TeamConfig) {
    super(scope, id, {
      terraformResourceType: 'singlestoredb_team',
      terraformGeneratorMetadata: {
        providerName: 'singlestoredb',
        providerVersion: '0.1.8',
        providerVersionConstraint: '0.1.8'
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
    this._memberTeams = config.memberTeams;
    this._memberUsers = config.memberUsers;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // description - computed: false, optional: true, required: false
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

  // member_teams - computed: true, optional: true, required: false
  private _memberTeams?: string[]; 
  public get memberTeams() {
    return this.getListAttribute('member_teams');
  }
  public set memberTeams(value: string[]) {
    this._memberTeams = value;
  }
  public resetMemberTeams() {
    this._memberTeams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberTeamsInput() {
    return this._memberTeams;
  }

  // member_users - computed: true, optional: true, required: false
  private _memberUsers?: string[]; 
  public get memberUsers() {
    return this.getListAttribute('member_users');
  }
  public set memberUsers(value: string[]) {
    this._memberUsers = value;
  }
  public resetMemberUsers() {
    this._memberUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberUsersInput() {
    return this._memberUsers;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      member_teams: cdktf.listMapper(cdktf.stringToTerraform, false)(this._memberTeams),
      member_users: cdktf.listMapper(cdktf.stringToTerraform, false)(this._memberUsers),
      name: cdktf.stringToTerraform(this._name),
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
      member_teams: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._memberTeams),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      member_users: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._memberUsers),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
