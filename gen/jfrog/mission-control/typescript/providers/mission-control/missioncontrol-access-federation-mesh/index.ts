// https://registry.terraform.io/providers/jfrog/mission-control/1.1.0/docs/resources/missioncontrol_access_federation_mesh
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MissioncontrolAccessFederationMeshConfig extends cdktf.TerraformMetaArguments {
  /**
  * Entity types to sync. Allow values: `USERS`, `GROUPS`, `PERMISSIONS`, `TOKENS`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/mission-control/1.1.0/docs/resources/missioncontrol_access_federation_mesh#entities MissioncontrolAccessFederationMesh#entities}
  */
  readonly entities: string[];
  /**
  * IDs for the source Platform Deployment. Use [Get Access Federation Candidate API](https://jfrog.com/help/r/jfrog-rest-apis/get-access-federation-candidates) to get a list of ID. Must have at least 2 items.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/mission-control/1.1.0/docs/resources/missioncontrol_access_federation_mesh#ids MissioncontrolAccessFederationMesh#ids}
  */
  readonly ids: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/jfrog/mission-control/1.1.0/docs/resources/missioncontrol_access_federation_mesh missioncontrol_access_federation_mesh}
*/
export class MissioncontrolAccessFederationMesh extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "missioncontrol_access_federation_mesh";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MissioncontrolAccessFederationMesh resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MissioncontrolAccessFederationMesh to import
  * @param importFromId The id of the existing MissioncontrolAccessFederationMesh that should be imported. Refer to the {@link https://registry.terraform.io/providers/jfrog/mission-control/1.1.0/docs/resources/missioncontrol_access_federation_mesh#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MissioncontrolAccessFederationMesh to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "missioncontrol_access_federation_mesh", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jfrog/mission-control/1.1.0/docs/resources/missioncontrol_access_federation_mesh missioncontrol_access_federation_mesh} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MissioncontrolAccessFederationMeshConfig
  */
  public constructor(scope: Construct, id: string, config: MissioncontrolAccessFederationMeshConfig) {
    super(scope, id, {
      terraformResourceType: 'missioncontrol_access_federation_mesh',
      terraformGeneratorMetadata: {
        providerName: 'mission-control',
        providerVersion: '1.1.0',
        providerVersionConstraint: '1.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._entities = config.entities;
    this._ids = config.ids;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // entities - computed: false, optional: false, required: true
  private _entities?: string[]; 
  public get entities() {
    return cdktf.Fn.tolist(this.getListAttribute('entities'));
  }
  public set entities(value: string[]) {
    this._entities = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entitiesInput() {
    return this._entities;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ids - computed: false, optional: false, required: true
  private _ids?: string[]; 
  public get ids() {
    return cdktf.Fn.tolist(this.getListAttribute('ids'));
  }
  public set ids(value: string[]) {
    this._ids = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idsInput() {
    return this._ids;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      entities: cdktf.listMapper(cdktf.stringToTerraform, false)(this._entities),
      ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ids),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      entities: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._entities),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ids),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
