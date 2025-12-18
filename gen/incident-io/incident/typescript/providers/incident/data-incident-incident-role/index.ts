// https://registry.terraform.io/providers/incident-io/incident/5.23.0/docs/data-sources/incident_role
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIncidentIncidentRoleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Unique identifier for the role
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.23.0/docs/data-sources/incident_role#id DataIncidentIncidentRole#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/incident-io/incident/5.23.0/docs/data-sources/incident_role incident_incident_role}
*/
export class DataIncidentIncidentRole extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "incident_incident_role";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIncidentIncidentRole resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIncidentIncidentRole to import
  * @param importFromId The id of the existing DataIncidentIncidentRole that should be imported. Refer to the {@link https://registry.terraform.io/providers/incident-io/incident/5.23.0/docs/data-sources/incident_role#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIncidentIncidentRole to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "incident_incident_role", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/incident-io/incident/5.23.0/docs/data-sources/incident_role incident_incident_role} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIncidentIncidentRoleConfig
  */
  public constructor(scope: Construct, id: string, config: DataIncidentIncidentRoleConfig) {
    super(scope, id, {
      terraformResourceType: 'incident_incident_role',
      terraformGeneratorMetadata: {
        providerName: 'incident',
        providerVersion: '5.23.0',
        providerVersionConstraint: '5.23.0'
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // instructions - computed: true, optional: false, required: false
  public get instructions() {
    return this.getStringAttribute('instructions');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // shortform - computed: true, optional: false, required: false
  public get shortform() {
    return this.getStringAttribute('shortform');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
