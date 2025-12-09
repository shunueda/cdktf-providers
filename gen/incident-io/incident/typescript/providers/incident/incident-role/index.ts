// https://registry.terraform.io/providers/incident-io/incident/5.21.0/docs/resources/incident_role
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IncidentRoleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Describes the purpose of the role
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.21.0/docs/resources/incident_role#description IncidentRole#description}
  */
  readonly description: string;
  /**
  * Provided to whoever is nominated for the role. Note that this will be empty for the 'reporter' role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.21.0/docs/resources/incident_role#instructions IncidentRole#instructions}
  */
  readonly instructions: string;
  /**
  * Human readable name of the incident role
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.21.0/docs/resources/incident_role#name IncidentRole#name}
  */
  readonly name: string;
  /**
  * Short human readable name for Slack. Note that this will be empty for the 'reporter' role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.21.0/docs/resources/incident_role#shortform IncidentRole#shortform}
  */
  readonly shortform: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/incident-io/incident/5.21.0/docs/resources/incident_role incident_incident_role}
*/
export class IncidentRole extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "incident_incident_role";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IncidentRole resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IncidentRole to import
  * @param importFromId The id of the existing IncidentRole that should be imported. Refer to the {@link https://registry.terraform.io/providers/incident-io/incident/5.21.0/docs/resources/incident_role#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IncidentRole to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "incident_incident_role", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/incident-io/incident/5.21.0/docs/resources/incident_role incident_incident_role} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IncidentRoleConfig
  */
  public constructor(scope: Construct, id: string, config: IncidentRoleConfig) {
    super(scope, id, {
      terraformResourceType: 'incident_incident_role',
      terraformGeneratorMetadata: {
        providerName: 'incident',
        providerVersion: '5.21.0',
        providerVersionConstraint: '5.21.0'
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
    this._instructions = config.instructions;
    this._name = config.name;
    this._shortform = config.shortform;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instructions - computed: false, optional: false, required: true
  private _instructions?: string; 
  public get instructions() {
    return this.getStringAttribute('instructions');
  }
  public set instructions(value: string) {
    this._instructions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instructionsInput() {
    return this._instructions;
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

  // shortform - computed: false, optional: false, required: true
  private _shortform?: string; 
  public get shortform() {
    return this.getStringAttribute('shortform');
  }
  public set shortform(value: string) {
    this._shortform = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shortformInput() {
    return this._shortform;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      instructions: cdktf.stringToTerraform(this._instructions),
      name: cdktf.stringToTerraform(this._name),
      shortform: cdktf.stringToTerraform(this._shortform),
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
      instructions: {
        value: cdktf.stringToHclTerraform(this._instructions),
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
      shortform: {
        value: cdktf.stringToHclTerraform(this._shortform),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
