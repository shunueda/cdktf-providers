// https://registry.terraform.io/providers/rollbar/rollbar/1.16.0/docs/resources/team_user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TeamUserConfig extends cdktf.TerraformMetaArguments {
  /**
  * The user's email address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rollbar/rollbar/1.16.0/docs/resources/team_user#email TeamUser#email}
  */
  readonly email: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rollbar/rollbar/1.16.0/docs/resources/team_user#id TeamUser#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ID of the team to which this user belongs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rollbar/rollbar/1.16.0/docs/resources/team_user#team_id TeamUser#team_id}
  */
  readonly teamId: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/rollbar/rollbar/1.16.0/docs/resources/team_user rollbar_team_user}
*/
export class TeamUser extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rollbar_team_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TeamUser resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TeamUser to import
  * @param importFromId The id of the existing TeamUser that should be imported. Refer to the {@link https://registry.terraform.io/providers/rollbar/rollbar/1.16.0/docs/resources/team_user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TeamUser to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rollbar_team_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rollbar/rollbar/1.16.0/docs/resources/team_user rollbar_team_user} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TeamUserConfig
  */
  public constructor(scope: Construct, id: string, config: TeamUserConfig) {
    super(scope, id, {
      terraformResourceType: 'rollbar_team_user',
      terraformGeneratorMetadata: {
        providerName: 'rollbar',
        providerVersion: '1.16.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._email = config.email;
    this._id = config.id;
    this._teamId = config.teamId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // email - computed: false, optional: false, required: true
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
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

  // invite_id - computed: true, optional: false, required: false
  public get inviteId() {
    return this.getNumberAttribute('invite_id');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
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

  // user_id - computed: true, optional: false, required: false
  public get userId() {
    return this.getNumberAttribute('user_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      email: cdktf.stringToTerraform(this._email),
      id: cdktf.stringToTerraform(this._id),
      team_id: cdktf.numberToTerraform(this._teamId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      email: {
        value: cdktf.stringToHclTerraform(this._email),
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
