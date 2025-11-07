// https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/resources/team
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TeamConfig extends cdktf.TerraformMetaArguments {
  /**
  * Team Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/resources/team#name Team#name}
  */
  readonly name: string;
  /**
  * Team NodeID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/resources/team#node_id Team#node_id}
  */
  readonly nodeId?: number;
  /**
  * Restrict Edit flag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/resources/team#restrict_edit Team#restrict_edit}
  */
  readonly restrictEdit?: boolean | cdktf.IResolvable;
  /**
  * Restrict Share flag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/resources/team#restrict_share Team#restrict_share}
  */
  readonly restrictShare?: boolean | cdktf.IResolvable;
  /**
  * Restrict View flag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/resources/team#restrict_view Team#restrict_view}
  */
  readonly restrictView?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/resources/team keeper_team}
*/
export class Team extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "keeper_team";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Team resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Team to import
  * @param importFromId The id of the existing Team that should be imported. Refer to the {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/resources/team#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Team to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "keeper_team", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/resources/team keeper_team} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TeamConfig
  */
  public constructor(scope: Construct, id: string, config: TeamConfig) {
    super(scope, id, {
      terraformResourceType: 'keeper_team',
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
    this._nodeId = config.nodeId;
    this._restrictEdit = config.restrictEdit;
    this._restrictShare = config.restrictShare;
    this._restrictView = config.restrictView;
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

  // restrict_edit - computed: true, optional: true, required: false
  private _restrictEdit?: boolean | cdktf.IResolvable; 
  public get restrictEdit() {
    return this.getBooleanAttribute('restrict_edit');
  }
  public set restrictEdit(value: boolean | cdktf.IResolvable) {
    this._restrictEdit = value;
  }
  public resetRestrictEdit() {
    this._restrictEdit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictEditInput() {
    return this._restrictEdit;
  }

  // restrict_share - computed: true, optional: true, required: false
  private _restrictShare?: boolean | cdktf.IResolvable; 
  public get restrictShare() {
    return this.getBooleanAttribute('restrict_share');
  }
  public set restrictShare(value: boolean | cdktf.IResolvable) {
    this._restrictShare = value;
  }
  public resetRestrictShare() {
    this._restrictShare = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictShareInput() {
    return this._restrictShare;
  }

  // restrict_view - computed: true, optional: true, required: false
  private _restrictView?: boolean | cdktf.IResolvable; 
  public get restrictView() {
    return this.getBooleanAttribute('restrict_view');
  }
  public set restrictView(value: boolean | cdktf.IResolvable) {
    this._restrictView = value;
  }
  public resetRestrictView() {
    this._restrictView = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictViewInput() {
    return this._restrictView;
  }

  // team_uid - computed: true, optional: false, required: false
  public get teamUid() {
    return this.getStringAttribute('team_uid');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      node_id: cdktf.numberToTerraform(this._nodeId),
      restrict_edit: cdktf.booleanToTerraform(this._restrictEdit),
      restrict_share: cdktf.booleanToTerraform(this._restrictShare),
      restrict_view: cdktf.booleanToTerraform(this._restrictView),
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
      node_id: {
        value: cdktf.numberToHclTerraform(this._nodeId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      restrict_edit: {
        value: cdktf.booleanToHclTerraform(this._restrictEdit),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      restrict_share: {
        value: cdktf.booleanToHclTerraform(this._restrictShare),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      restrict_view: {
        value: cdktf.booleanToHclTerraform(this._restrictView),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
