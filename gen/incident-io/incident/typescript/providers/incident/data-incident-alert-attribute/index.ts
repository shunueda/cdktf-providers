// https://registry.terraform.io/providers/incident-io/incident/5.19.0/docs/data-sources/alert_attribute
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIncidentAlertAttributeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Unique name of this attribute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.19.0/docs/data-sources/alert_attribute#name DataIncidentAlertAttribute#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/incident-io/incident/5.19.0/docs/data-sources/alert_attribute incident_alert_attribute}
*/
export class DataIncidentAlertAttribute extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "incident_alert_attribute";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIncidentAlertAttribute resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIncidentAlertAttribute to import
  * @param importFromId The id of the existing DataIncidentAlertAttribute that should be imported. Refer to the {@link https://registry.terraform.io/providers/incident-io/incident/5.19.0/docs/data-sources/alert_attribute#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIncidentAlertAttribute to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "incident_alert_attribute", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/incident-io/incident/5.19.0/docs/data-sources/alert_attribute incident_alert_attribute} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIncidentAlertAttributeConfig
  */
  public constructor(scope: Construct, id: string, config: DataIncidentAlertAttributeConfig) {
    super(scope, id, {
      terraformResourceType: 'incident_alert_attribute',
      terraformGeneratorMetadata: {
        providerName: 'incident',
        providerVersion: '5.19.0',
        providerVersionConstraint: '5.19.0'
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // array - computed: true, optional: false, required: false
  public get array() {
    return this.getBooleanAttribute('array');
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

  // required - computed: true, optional: false, required: false
  public get required() {
    return this.getBooleanAttribute('required');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
