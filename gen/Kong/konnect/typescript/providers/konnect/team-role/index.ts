// https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/team_role
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TeamRoleConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the entity. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/team_role#entity_id TeamRole#entity_id}
  */
  readonly entityId?: string;
  /**
  * Region of the team. must be one of ["us", "eu", "au", "me", "in", "sg", "*"]; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/team_role#entity_region TeamRole#entity_region}
  */
  readonly entityRegion?: string;
  /**
  * The type of entity. must be one of ["APIs", "API Products", "Application Auth Strategies", "Audit Logs", "Control Planes", "Dashboards", "DCR Providers", "Identity", "Mesh Control Planes", "Networks", "Portals", "Service Hub"]; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/team_role#entity_type_name TeamRole#entity_type_name}
  */
  readonly entityTypeName?: string;
  /**
  * The desired role. must be one of ["Admin", "Appearance Maintainer", "Application Registration", "Certificate Admin", "Cloud Gateway Cluster Admin", "Cloud Gateway Cluster Viewer", "Consumer Admin", "Connector", "Creator", "Deployer", "Discovery Admin", "Discovery Viewer", "Gateway Service Admin", "Integration Admin", "Integration Viewer", "Key Admin", "Maintainer", "Network Admin", "Network Creator", "Network Viewer", "Plugin Admin", "Plugins Admin", "Product Publisher", "Publisher", "Route Admin", "SNI Admin", "Scorecard Admin", "Scorecard Viewer", "Service Admin", "Service Creator", "Service Viewer", "Upstream Admin", "Vault Admin", "Viewer"]; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/team_role#role_name TeamRole#role_name}
  */
  readonly roleName?: string;
  /**
  * The team ID. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/team_role#team_id TeamRole#team_id}
  */
  readonly teamId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/team_role konnect_team_role}
*/
export class TeamRole extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "konnect_team_role";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TeamRole resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TeamRole to import
  * @param importFromId The id of the existing TeamRole that should be imported. Refer to the {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/team_role#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TeamRole to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "konnect_team_role", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/team_role konnect_team_role} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TeamRoleConfig
  */
  public constructor(scope: Construct, id: string, config: TeamRoleConfig) {
    super(scope, id, {
      terraformResourceType: 'konnect_team_role',
      terraformGeneratorMetadata: {
        providerName: 'konnect',
        providerVersion: '3.4.2',
        providerVersionConstraint: '3.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._entityId = config.entityId;
    this._entityRegion = config.entityRegion;
    this._entityTypeName = config.entityTypeName;
    this._roleName = config.roleName;
    this._teamId = config.teamId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // entity_id - computed: false, optional: true, required: false
  private _entityId?: string; 
  public get entityId() {
    return this.getStringAttribute('entity_id');
  }
  public set entityId(value: string) {
    this._entityId = value;
  }
  public resetEntityId() {
    this._entityId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityIdInput() {
    return this._entityId;
  }

  // entity_region - computed: true, optional: true, required: false
  private _entityRegion?: string; 
  public get entityRegion() {
    return this.getStringAttribute('entity_region');
  }
  public set entityRegion(value: string) {
    this._entityRegion = value;
  }
  public resetEntityRegion() {
    this._entityRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityRegionInput() {
    return this._entityRegion;
  }

  // entity_type_name - computed: false, optional: true, required: false
  private _entityTypeName?: string; 
  public get entityTypeName() {
    return this.getStringAttribute('entity_type_name');
  }
  public set entityTypeName(value: string) {
    this._entityTypeName = value;
  }
  public resetEntityTypeName() {
    this._entityTypeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityTypeNameInput() {
    return this._entityTypeName;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // role_name - computed: false, optional: true, required: false
  private _roleName?: string; 
  public get roleName() {
    return this.getStringAttribute('role_name');
  }
  public set roleName(value: string) {
    this._roleName = value;
  }
  public resetRoleName() {
    this._roleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleNameInput() {
    return this._roleName;
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
      entity_id: cdktf.stringToTerraform(this._entityId),
      entity_region: cdktf.stringToTerraform(this._entityRegion),
      entity_type_name: cdktf.stringToTerraform(this._entityTypeName),
      role_name: cdktf.stringToTerraform(this._roleName),
      team_id: cdktf.stringToTerraform(this._teamId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      entity_id: {
        value: cdktf.stringToHclTerraform(this._entityId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      entity_region: {
        value: cdktf.stringToHclTerraform(this._entityRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      entity_type_name: {
        value: cdktf.stringToHclTerraform(this._entityTypeName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role_name: {
        value: cdktf.stringToHclTerraform(this._roleName),
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
