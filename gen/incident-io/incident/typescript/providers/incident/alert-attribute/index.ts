// https://registry.terraform.io/providers/incident-io/incident/5.21.0/docs/resources/alert_attribute
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AlertAttributeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether this attribute is an array
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.21.0/docs/resources/alert_attribute#array AlertAttribute#array}
  */
  readonly array: boolean | cdktf.IResolvable;
  /**
  * Unique name of this attribute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.21.0/docs/resources/alert_attribute#name AlertAttribute#name}
  */
  readonly name: string;
  /**
  * Whether this attribute is required. If this field is not set, the existing setting will be preserved.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.21.0/docs/resources/alert_attribute#required AlertAttribute#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * Engine resource name for this attribute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.21.0/docs/resources/alert_attribute#type AlertAttribute#type}
  */
  readonly type: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/incident-io/incident/5.21.0/docs/resources/alert_attribute incident_alert_attribute}
*/
export class AlertAttribute extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "incident_alert_attribute";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AlertAttribute resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AlertAttribute to import
  * @param importFromId The id of the existing AlertAttribute that should be imported. Refer to the {@link https://registry.terraform.io/providers/incident-io/incident/5.21.0/docs/resources/alert_attribute#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AlertAttribute to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "incident_alert_attribute", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/incident-io/incident/5.21.0/docs/resources/alert_attribute incident_alert_attribute} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AlertAttributeConfig
  */
  public constructor(scope: Construct, id: string, config: AlertAttributeConfig) {
    super(scope, id, {
      terraformResourceType: 'incident_alert_attribute',
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
    this._array = config.array;
    this._name = config.name;
    this._required = config.required;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // array - computed: false, optional: false, required: true
  private _array?: boolean | cdktf.IResolvable; 
  public get array() {
    return this.getBooleanAttribute('array');
  }
  public set array(value: boolean | cdktf.IResolvable) {
    this._array = value;
  }
  // Temporarily expose input value. Use with caution.
  public get arrayInput() {
    return this._array;
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

  // required - computed: true, optional: true, required: false
  private _required?: boolean | cdktf.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktf.IResolvable) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      array: cdktf.booleanToTerraform(this._array),
      name: cdktf.stringToTerraform(this._name),
      required: cdktf.booleanToTerraform(this._required),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      array: {
        value: cdktf.booleanToHclTerraform(this._array),
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
      required: {
        value: cdktf.booleanToHclTerraform(this._required),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
