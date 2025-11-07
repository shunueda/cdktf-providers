// https://registry.terraform.io/providers/splunk/victorops/0.1.4/docs/resources/team_membership
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TeamMembershipConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/victorops/0.1.4/docs/resources/team_membership#id TeamMembership#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/victorops/0.1.4/docs/resources/team_membership#replacement_user TeamMembership#replacement_user}
  */
  readonly replacementUser?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/victorops/0.1.4/docs/resources/team_membership#team_id TeamMembership#team_id}
  */
  readonly teamId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/victorops/0.1.4/docs/resources/team_membership#user_name TeamMembership#user_name}
  */
  readonly userName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/splunk/victorops/0.1.4/docs/resources/team_membership victorops_team_membership}
*/
export class TeamMembership extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "victorops_team_membership";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TeamMembership resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TeamMembership to import
  * @param importFromId The id of the existing TeamMembership that should be imported. Refer to the {@link https://registry.terraform.io/providers/splunk/victorops/0.1.4/docs/resources/team_membership#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TeamMembership to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "victorops_team_membership", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/splunk/victorops/0.1.4/docs/resources/team_membership victorops_team_membership} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TeamMembershipConfig
  */
  public constructor(scope: Construct, id: string, config: TeamMembershipConfig) {
    super(scope, id, {
      terraformResourceType: 'victorops_team_membership',
      terraformGeneratorMetadata: {
        providerName: 'victorops',
        providerVersion: '0.1.4'
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
    this._replacementUser = config.replacementUser;
    this._teamId = config.teamId;
    this._userName = config.userName;
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

  // replacement_user - computed: false, optional: true, required: false
  private _replacementUser?: string; 
  public get replacementUser() {
    return this.getStringAttribute('replacement_user');
  }
  public set replacementUser(value: string) {
    this._replacementUser = value;
  }
  public resetReplacementUser() {
    this._replacementUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replacementUserInput() {
    return this._replacementUser;
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

  // user_name - computed: false, optional: false, required: true
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      replacement_user: cdktf.stringToTerraform(this._replacementUser),
      team_id: cdktf.stringToTerraform(this._teamId),
      user_name: cdktf.stringToTerraform(this._userName),
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
      replacement_user: {
        value: cdktf.stringToHclTerraform(this._replacementUser),
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
      user_name: {
        value: cdktf.stringToHclTerraform(this._userName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
