// https://registry.terraform.io/providers/prefecthq/prefect/2.90.1/docs/resources/team_access
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TeamAccessConfig extends cdktf.TerraformMetaArguments {
  /**
  * Account ID (UUID)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.1/docs/resources/team_access#account_id TeamAccess#account_id}
  */
  readonly accountId?: string;
  /**
  * Member Actor ID (UUID)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.1/docs/resources/team_access#member_actor_id TeamAccess#member_actor_id}
  */
  readonly memberActorId: string;
  /**
  * Member ID (UUID)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.1/docs/resources/team_access#member_id TeamAccess#member_id}
  */
  readonly memberId: string;
  /**
  * Member Type (user | service_account)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.1/docs/resources/team_access#member_type TeamAccess#member_type}
  */
  readonly memberType: string;
  /**
  * Team ID (UUID)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.1/docs/resources/team_access#team_id TeamAccess#team_id}
  */
  readonly teamId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.1/docs/resources/team_access prefect_team_access}
*/
export class TeamAccess extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "prefect_team_access";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TeamAccess resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TeamAccess to import
  * @param importFromId The id of the existing TeamAccess that should be imported. Refer to the {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.1/docs/resources/team_access#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TeamAccess to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "prefect_team_access", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/prefecthq/prefect/2.90.1/docs/resources/team_access prefect_team_access} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TeamAccessConfig
  */
  public constructor(scope: Construct, id: string, config: TeamAccessConfig) {
    super(scope, id, {
      terraformResourceType: 'prefect_team_access',
      terraformGeneratorMetadata: {
        providerName: 'prefect',
        providerVersion: '2.90.1',
        providerVersionConstraint: '2.90.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountId = config.accountId;
    this._memberActorId = config.memberActorId;
    this._memberId = config.memberId;
    this._memberType = config.memberType;
    this._teamId = config.teamId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // member_actor_id - computed: false, optional: false, required: true
  private _memberActorId?: string; 
  public get memberActorId() {
    return this.getStringAttribute('member_actor_id');
  }
  public set memberActorId(value: string) {
    this._memberActorId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memberActorIdInput() {
    return this._memberActorId;
  }

  // member_id - computed: false, optional: false, required: true
  private _memberId?: string; 
  public get memberId() {
    return this.getStringAttribute('member_id');
  }
  public set memberId(value: string) {
    this._memberId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memberIdInput() {
    return this._memberId;
  }

  // member_type - computed: false, optional: false, required: true
  private _memberType?: string; 
  public get memberType() {
    return this.getStringAttribute('member_type');
  }
  public set memberType(value: string) {
    this._memberType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memberTypeInput() {
    return this._memberType;
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
      account_id: cdktf.stringToTerraform(this._accountId),
      member_actor_id: cdktf.stringToTerraform(this._memberActorId),
      member_id: cdktf.stringToTerraform(this._memberId),
      member_type: cdktf.stringToTerraform(this._memberType),
      team_id: cdktf.stringToTerraform(this._teamId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_id: {
        value: cdktf.stringToHclTerraform(this._accountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      member_actor_id: {
        value: cdktf.stringToHclTerraform(this._memberActorId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      member_id: {
        value: cdktf.stringToHclTerraform(this._memberId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      member_type: {
        value: cdktf.stringToHclTerraform(this._memberType),
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
