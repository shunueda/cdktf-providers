// https://registry.terraform.io/providers/rootlyhq/rootly/4.3.13/docs/resources/form_field_position
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FormFieldPositionConfig extends cdktf.TerraformMetaArguments {
  /**
  * The form for the position. Value must be one of `web_new_incident_form`, `web_update_incident_form`, `web_incident_post_mortem_form`, `web_incident_mitigation_form`, `web_incident_resolution_form`, `web_incident_cancellation_form`, `web_scheduled_incident_form`, `web_update_scheduled_incident_form`, `incident_post_mortem`, `slack_new_incident_form`, `slack_update_incident_form`, `slack_update_incident_status_form`, `slack_incident_mitigation_form`, `slack_incident_resolution_form`, `slack_incident_cancellation_form`, `slack_scheduled_incident_form`, `slack_update_scheduled_incident_form`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.13/docs/resources/form_field_position#form FormFieldPosition#form}
  */
  readonly form?: string;
  /**
  * The ID of the form field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.13/docs/resources/form_field_position#form_field_id FormFieldPosition#form_field_id}
  */
  readonly formFieldId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.13/docs/resources/form_field_position#id FormFieldPosition#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The position of the form_field_position
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.13/docs/resources/form_field_position#position FormFieldPosition#position}
  */
  readonly position: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.13/docs/resources/form_field_position rootly_form_field_position}
*/
export class FormFieldPosition extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rootly_form_field_position";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FormFieldPosition resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FormFieldPosition to import
  * @param importFromId The id of the existing FormFieldPosition that should be imported. Refer to the {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.13/docs/resources/form_field_position#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FormFieldPosition to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rootly_form_field_position", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.13/docs/resources/form_field_position rootly_form_field_position} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FormFieldPositionConfig
  */
  public constructor(scope: Construct, id: string, config: FormFieldPositionConfig) {
    super(scope, id, {
      terraformResourceType: 'rootly_form_field_position',
      terraformGeneratorMetadata: {
        providerName: 'rootly',
        providerVersion: '4.3.13',
        providerVersionConstraint: '4.3.13'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._form = config.form;
    this._formFieldId = config.formFieldId;
    this._id = config.id;
    this._position = config.position;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // form - computed: false, optional: true, required: false
  private _form?: string; 
  public get form() {
    return this.getStringAttribute('form');
  }
  public set form(value: string) {
    this._form = value;
  }
  public resetForm() {
    this._form = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formInput() {
    return this._form;
  }

  // form_field_id - computed: false, optional: false, required: true
  private _formFieldId?: string; 
  public get formFieldId() {
    return this.getStringAttribute('form_field_id');
  }
  public set formFieldId(value: string) {
    this._formFieldId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get formFieldIdInput() {
    return this._formFieldId;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // position - computed: false, optional: false, required: true
  private _position?: number; 
  public get position() {
    return this.getNumberAttribute('position');
  }
  public set position(value: number) {
    this._position = value;
  }
  // Temporarily expose input value. Use with caution.
  public get positionInput() {
    return this._position;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      form: cdktf.stringToTerraform(this._form),
      form_field_id: cdktf.stringToTerraform(this._formFieldId),
      id: cdktf.stringToTerraform(this._id),
      position: cdktf.numberToTerraform(this._position),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      form: {
        value: cdktf.stringToHclTerraform(this._form),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      form_field_id: {
        value: cdktf.stringToHclTerraform(this._formFieldId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      position: {
        value: cdktf.numberToHclTerraform(this._position),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
