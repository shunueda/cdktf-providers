// https://registry.terraform.io/providers/vercel/vercel/4.1.0/docs/resources/edge_config_token
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EdgeConfigTokenConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the Edge Config store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.1.0/docs/resources/edge_config_token#edge_config_id EdgeConfigToken#edge_config_id}
  */
  readonly edgeConfigId: string;
  /**
  * The label of the Edge Config Token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.1.0/docs/resources/edge_config_token#label EdgeConfigToken#label}
  */
  readonly label: string;
  /**
  * The ID of the team the Edge Config should exist under. Required when configuring a team resource if a default team has not been set in the provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.1.0/docs/resources/edge_config_token#team_id EdgeConfigToken#team_id}
  */
  readonly teamId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vercel/vercel/4.1.0/docs/resources/edge_config_token vercel_edge_config_token}
*/
export class EdgeConfigToken extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vercel_edge_config_token";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EdgeConfigToken resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EdgeConfigToken to import
  * @param importFromId The id of the existing EdgeConfigToken that should be imported. Refer to the {@link https://registry.terraform.io/providers/vercel/vercel/4.1.0/docs/resources/edge_config_token#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EdgeConfigToken to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vercel_edge_config_token", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vercel/vercel/4.1.0/docs/resources/edge_config_token vercel_edge_config_token} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EdgeConfigTokenConfig
  */
  public constructor(scope: Construct, id: string, config: EdgeConfigTokenConfig) {
    super(scope, id, {
      terraformResourceType: 'vercel_edge_config_token',
      terraformGeneratorMetadata: {
        providerName: 'vercel',
        providerVersion: '4.1.0',
        providerVersionConstraint: '4.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._edgeConfigId = config.edgeConfigId;
    this._label = config.label;
    this._teamId = config.teamId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connection_string - computed: true, optional: false, required: false
  public get connectionString() {
    return this.getStringAttribute('connection_string');
  }

  // edge_config_id - computed: false, optional: false, required: true
  private _edgeConfigId?: string; 
  public get edgeConfigId() {
    return this.getStringAttribute('edge_config_id');
  }
  public set edgeConfigId(value: string) {
    this._edgeConfigId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeConfigIdInput() {
    return this._edgeConfigId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // label - computed: false, optional: false, required: true
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // team_id - computed: true, optional: true, required: false
  private _teamId?: string; 
  public get teamId() {
    return this.getStringAttribute('team_id');
  }
  public set teamId(value: string) {
    this._teamId = value;
  }
  public resetTeamId() {
    this._teamId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamIdInput() {
    return this._teamId;
  }

  // token - computed: true, optional: false, required: false
  public get token() {
    return this.getStringAttribute('token');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      edge_config_id: cdktf.stringToTerraform(this._edgeConfigId),
      label: cdktf.stringToTerraform(this._label),
      team_id: cdktf.stringToTerraform(this._teamId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      edge_config_id: {
        value: cdktf.stringToHclTerraform(this._edgeConfigId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      label: {
        value: cdktf.stringToHclTerraform(this._label),
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
