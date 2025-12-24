// https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/data-sources/team
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataRootlyTeamConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/data-sources/team#alert_broadcast_enabled DataRootlyTeam#alert_broadcast_enabled}
  */
  readonly alertBroadcastEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/data-sources/team#backstage_id DataRootlyTeam#backstage_id}
  */
  readonly backstageId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/data-sources/team#color DataRootlyTeam#color}
  */
  readonly color?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/data-sources/team#cortex_id DataRootlyTeam#cortex_id}
  */
  readonly cortexId?: string;
  /**
  * Filter by date range using 'lt' and 'gt'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/data-sources/team#created_at DataRootlyTeam#created_at}
  */
  readonly createdAt?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/data-sources/team#external_id DataRootlyTeam#external_id}
  */
  readonly externalId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/data-sources/team#incident_broadcast_enabled DataRootlyTeam#incident_broadcast_enabled}
  */
  readonly incidentBroadcastEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/data-sources/team#name DataRootlyTeam#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/data-sources/team#slug DataRootlyTeam#slug}
  */
  readonly slug?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/data-sources/team rootly_team}
*/
export class DataRootlyTeam extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rootly_team";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataRootlyTeam resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataRootlyTeam to import
  * @param importFromId The id of the existing DataRootlyTeam that should be imported. Refer to the {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/data-sources/team#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataRootlyTeam to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rootly_team", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/data-sources/team rootly_team} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataRootlyTeamConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataRootlyTeamConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'rootly_team',
      terraformGeneratorMetadata: {
        providerName: 'rootly',
        providerVersion: '5.2.1',
        providerVersionConstraint: '5.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._alertBroadcastEnabled = config.alertBroadcastEnabled;
    this._backstageId = config.backstageId;
    this._color = config.color;
    this._cortexId = config.cortexId;
    this._createdAt = config.createdAt;
    this._externalId = config.externalId;
    this._incidentBroadcastEnabled = config.incidentBroadcastEnabled;
    this._name = config.name;
    this._slug = config.slug;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alert_broadcast_enabled - computed: true, optional: true, required: false
  private _alertBroadcastEnabled?: boolean | cdktf.IResolvable; 
  public get alertBroadcastEnabled() {
    return this.getBooleanAttribute('alert_broadcast_enabled');
  }
  public set alertBroadcastEnabled(value: boolean | cdktf.IResolvable) {
    this._alertBroadcastEnabled = value;
  }
  public resetAlertBroadcastEnabled() {
    this._alertBroadcastEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertBroadcastEnabledInput() {
    return this._alertBroadcastEnabled;
  }

  // backstage_id - computed: true, optional: true, required: false
  private _backstageId?: string; 
  public get backstageId() {
    return this.getStringAttribute('backstage_id');
  }
  public set backstageId(value: string) {
    this._backstageId = value;
  }
  public resetBackstageId() {
    this._backstageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backstageIdInput() {
    return this._backstageId;
  }

  // color - computed: true, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // cortex_id - computed: true, optional: true, required: false
  private _cortexId?: string; 
  public get cortexId() {
    return this.getStringAttribute('cortex_id');
  }
  public set cortexId(value: string) {
    this._cortexId = value;
  }
  public resetCortexId() {
    this._cortexId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cortexIdInput() {
    return this._cortexId;
  }

  // created_at - computed: false, optional: true, required: false
  private _createdAt?: { [key: string]: string }; 
  public get createdAt() {
    return this.getStringMapAttribute('created_at');
  }
  public set createdAt(value: { [key: string]: string }) {
    this._createdAt = value;
  }
  public resetCreatedAt() {
    this._createdAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdAtInput() {
    return this._createdAt;
  }

  // external_id - computed: true, optional: true, required: false
  private _externalId?: string; 
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  public resetExternalId() {
    this._externalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // incident_broadcast_enabled - computed: true, optional: true, required: false
  private _incidentBroadcastEnabled?: boolean | cdktf.IResolvable; 
  public get incidentBroadcastEnabled() {
    return this.getBooleanAttribute('incident_broadcast_enabled');
  }
  public set incidentBroadcastEnabled(value: boolean | cdktf.IResolvable) {
    this._incidentBroadcastEnabled = value;
  }
  public resetIncidentBroadcastEnabled() {
    this._incidentBroadcastEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get incidentBroadcastEnabledInput() {
    return this._incidentBroadcastEnabled;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // slug - computed: true, optional: true, required: false
  private _slug?: string; 
  public get slug() {
    return this.getStringAttribute('slug');
  }
  public set slug(value: string) {
    this._slug = value;
  }
  public resetSlug() {
    this._slug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slugInput() {
    return this._slug;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alert_broadcast_enabled: cdktf.booleanToTerraform(this._alertBroadcastEnabled),
      backstage_id: cdktf.stringToTerraform(this._backstageId),
      color: cdktf.stringToTerraform(this._color),
      cortex_id: cdktf.stringToTerraform(this._cortexId),
      created_at: cdktf.hashMapper(cdktf.stringToTerraform)(this._createdAt),
      external_id: cdktf.stringToTerraform(this._externalId),
      incident_broadcast_enabled: cdktf.booleanToTerraform(this._incidentBroadcastEnabled),
      name: cdktf.stringToTerraform(this._name),
      slug: cdktf.stringToTerraform(this._slug),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alert_broadcast_enabled: {
        value: cdktf.booleanToHclTerraform(this._alertBroadcastEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      backstage_id: {
        value: cdktf.stringToHclTerraform(this._backstageId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      color: {
        value: cdktf.stringToHclTerraform(this._color),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cortex_id: {
        value: cdktf.stringToHclTerraform(this._cortexId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      created_at: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._createdAt),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      external_id: {
        value: cdktf.stringToHclTerraform(this._externalId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      incident_broadcast_enabled: {
        value: cdktf.booleanToHclTerraform(this._incidentBroadcastEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slug: {
        value: cdktf.stringToHclTerraform(this._slug),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
