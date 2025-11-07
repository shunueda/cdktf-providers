// https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_monitor_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BetteruptimeMonitorGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * A name of the group that you can see in the dashboard.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_monitor_group#name BetteruptimeMonitorGroup#name}
  */
  readonly name: string;
  /**
  * Set to true to pause monitoring for any existing monitors in the group - we won't notify you about downtime. Set to false to resume monitoring for any existing monitors in the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_monitor_group#paused BetteruptimeMonitorGroup#paused}
  */
  readonly paused?: boolean | cdktf.IResolvable;
  /**
  * Set sort_index to specify how to sort your monitor groups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_monitor_group#sort_index BetteruptimeMonitorGroup#sort_index}
  */
  readonly sortIndex?: number;
  /**
  * Used to specify the team the resource should be created in when using global tokens.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_monitor_group#team_name BetteruptimeMonitorGroup#team_name}
  */
  readonly teamName?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_monitor_group betteruptime_monitor_group}
*/
export class BetteruptimeMonitorGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "betteruptime_monitor_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BetteruptimeMonitorGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BetteruptimeMonitorGroup to import
  * @param importFromId The id of the existing BetteruptimeMonitorGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_monitor_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BetteruptimeMonitorGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "betteruptime_monitor_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_monitor_group betteruptime_monitor_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BetteruptimeMonitorGroupConfig
  */
  public constructor(scope: Construct, id: string, config: BetteruptimeMonitorGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'betteruptime_monitor_group',
      terraformGeneratorMetadata: {
        providerName: 'better-uptime',
        providerVersion: '0.20.4'
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
    this._paused = config.paused;
    this._sortIndex = config.sortIndex;
    this._teamName = config.teamName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // paused - computed: true, optional: true, required: false
  private _paused?: boolean | cdktf.IResolvable; 
  public get paused() {
    return this.getBooleanAttribute('paused');
  }
  public set paused(value: boolean | cdktf.IResolvable) {
    this._paused = value;
  }
  public resetPaused() {
    this._paused = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pausedInput() {
    return this._paused;
  }

  // sort_index - computed: true, optional: true, required: false
  private _sortIndex?: number; 
  public get sortIndex() {
    return this.getNumberAttribute('sort_index');
  }
  public set sortIndex(value: number) {
    this._sortIndex = value;
  }
  public resetSortIndex() {
    this._sortIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortIndexInput() {
    return this._sortIndex;
  }

  // team_name - computed: false, optional: true, required: false
  private _teamName?: string; 
  public get teamName() {
    return this.getStringAttribute('team_name');
  }
  public set teamName(value: string) {
    this._teamName = value;
  }
  public resetTeamName() {
    this._teamName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamNameInput() {
    return this._teamName;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      paused: cdktf.booleanToTerraform(this._paused),
      sort_index: cdktf.numberToTerraform(this._sortIndex),
      team_name: cdktf.stringToTerraform(this._teamName),
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
      paused: {
        value: cdktf.booleanToHclTerraform(this._paused),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sort_index: {
        value: cdktf.numberToHclTerraform(this._sortIndex),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      team_name: {
        value: cdktf.stringToHclTerraform(this._teamName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
