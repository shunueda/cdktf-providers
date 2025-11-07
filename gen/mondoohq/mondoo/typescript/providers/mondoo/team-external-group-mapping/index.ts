// https://registry.terraform.io/providers/mondoohq/mondoo/0.34.0/docs/resources/team_external_group_mapping
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TeamExternalGroupMappingConfig extends cdktf.TerraformMetaArguments {
  /**
  * External group ID from the OIDC provider (e.g., group name or UUID).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.34.0/docs/resources/team_external_group_mapping#external_id TeamExternalGroupMapping#external_id}
  */
  readonly externalId: string;
  /**
  * MRN of the team to map the external group to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.34.0/docs/resources/team_external_group_mapping#team_mrn TeamExternalGroupMapping#team_mrn}
  */
  readonly teamMrn: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.34.0/docs/resources/team_external_group_mapping mondoo_team_external_group_mapping}
*/
export class TeamExternalGroupMapping extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mondoo_team_external_group_mapping";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TeamExternalGroupMapping resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TeamExternalGroupMapping to import
  * @param importFromId The id of the existing TeamExternalGroupMapping that should be imported. Refer to the {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.34.0/docs/resources/team_external_group_mapping#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TeamExternalGroupMapping to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mondoo_team_external_group_mapping", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.34.0/docs/resources/team_external_group_mapping mondoo_team_external_group_mapping} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TeamExternalGroupMappingConfig
  */
  public constructor(scope: Construct, id: string, config: TeamExternalGroupMappingConfig) {
    super(scope, id, {
      terraformResourceType: 'mondoo_team_external_group_mapping',
      terraformGeneratorMetadata: {
        providerName: 'mondoo',
        providerVersion: '0.34.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._externalId = config.externalId;
    this._teamMrn = config.teamMrn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // external_id - computed: false, optional: false, required: true
  private _externalId?: string; 
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
  }

  // mrn - computed: true, optional: false, required: false
  public get mrn() {
    return this.getStringAttribute('mrn');
  }

  // team_mrn - computed: false, optional: false, required: true
  private _teamMrn?: string; 
  public get teamMrn() {
    return this.getStringAttribute('team_mrn');
  }
  public set teamMrn(value: string) {
    this._teamMrn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get teamMrnInput() {
    return this._teamMrn;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      external_id: cdktf.stringToTerraform(this._externalId),
      team_mrn: cdktf.stringToTerraform(this._teamMrn),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      external_id: {
        value: cdktf.stringToHclTerraform(this._externalId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      team_mrn: {
        value: cdktf.stringToHclTerraform(this._teamMrn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
