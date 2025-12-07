// https://registry.terraform.io/providers/groundcover-com/groundcover/1.4.2/docs/resources/dashboard
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DashboardConfig extends cdktf.TerraformMetaArguments {
  /**
  * The description of the dashboard.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/groundcover-com/groundcover/1.4.2/docs/resources/dashboard#description Dashboard#description}
  */
  readonly description?: string;
  /**
  * The name of the dashboard.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/groundcover-com/groundcover/1.4.2/docs/resources/dashboard#name Dashboard#name}
  */
  readonly name: string;
  /**
  * Whether to override the dashboard on update.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/groundcover-com/groundcover/1.4.2/docs/resources/dashboard#override Dashboard#override}
  */
  readonly override?: boolean | cdktf.IResolvable;
  /**
  * The preset configuration for the dashboard.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/groundcover-com/groundcover/1.4.2/docs/resources/dashboard#preset Dashboard#preset}
  */
  readonly preset: string;
  /**
  * The team that owns the dashboard.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/groundcover-com/groundcover/1.4.2/docs/resources/dashboard#team Dashboard#team}
  */
  readonly team?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/groundcover-com/groundcover/1.4.2/docs/resources/dashboard groundcover_dashboard}
*/
export class Dashboard extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "groundcover_dashboard";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Dashboard resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Dashboard to import
  * @param importFromId The id of the existing Dashboard that should be imported. Refer to the {@link https://registry.terraform.io/providers/groundcover-com/groundcover/1.4.2/docs/resources/dashboard#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Dashboard to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "groundcover_dashboard", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/groundcover-com/groundcover/1.4.2/docs/resources/dashboard groundcover_dashboard} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DashboardConfig
  */
  public constructor(scope: Construct, id: string, config: DashboardConfig) {
    super(scope, id, {
      terraformResourceType: 'groundcover_dashboard',
      terraformGeneratorMetadata: {
        providerName: 'groundcover',
        providerVersion: '1.4.2',
        providerVersionConstraint: '1.4.2'
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
    this._name = config.name;
    this._override = config.override;
    this._preset = config.preset;
    this._team = config.team;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // override - computed: false, optional: true, required: false
  private _override?: boolean | cdktf.IResolvable; 
  public get override() {
    return this.getBooleanAttribute('override');
  }
  public set override(value: boolean | cdktf.IResolvable) {
    this._override = value;
  }
  public resetOverride() {
    this._override = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideInput() {
    return this._override;
  }

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getStringAttribute('owner');
  }

  // preset - computed: false, optional: false, required: true
  private _preset?: string; 
  public get preset() {
    return this.getStringAttribute('preset');
  }
  public set preset(value: string) {
    this._preset = value;
  }
  // Temporarily expose input value. Use with caution.
  public get presetInput() {
    return this._preset;
  }

  // revision_number - computed: true, optional: false, required: false
  public get revisionNumber() {
    return this.getNumberAttribute('revision_number');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // team - computed: false, optional: true, required: false
  private _team?: string; 
  public get team() {
    return this.getStringAttribute('team');
  }
  public set team(value: string) {
    this._team = value;
  }
  public resetTeam() {
    this._team = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamInput() {
    return this._team;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      override: cdktf.booleanToTerraform(this._override),
      preset: cdktf.stringToTerraform(this._preset),
      team: cdktf.stringToTerraform(this._team),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      override: {
        value: cdktf.booleanToHclTerraform(this._override),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      preset: {
        value: cdktf.stringToHclTerraform(this._preset),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      team: {
        value: cdktf.stringToHclTerraform(this._team),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
