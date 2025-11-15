// https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/form_field_option
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FormFieldOptionConfig extends cdktf.TerraformMetaArguments {
  /**
  * The hex color of the form field option
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/form_field_option#color FormFieldOption#color}
  */
  readonly color?: string;
  /**
  * Value must be one of true or false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/form_field_option#default FormFieldOption#default}
  */
  readonly default?: boolean | cdktf.IResolvable;
  /**
  * The ID of the parent custom field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/form_field_option#form_field_id FormFieldOption#form_field_id}
  */
  readonly formFieldId: string;
  /**
  * Unique ID of the form field option
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/form_field_option#id FormFieldOption#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The position of the form field option
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/form_field_option#position FormFieldOption#position}
  */
  readonly position?: number;
  /**
  * The value of the form field option
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/form_field_option#value FormFieldOption#value}
  */
  readonly value: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/form_field_option rootly_form_field_option}
*/
export class FormFieldOption extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rootly_form_field_option";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FormFieldOption resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FormFieldOption to import
  * @param importFromId The id of the existing FormFieldOption that should be imported. Refer to the {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/form_field_option#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FormFieldOption to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rootly_form_field_option", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/form_field_option rootly_form_field_option} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FormFieldOptionConfig
  */
  public constructor(scope: Construct, id: string, config: FormFieldOptionConfig) {
    super(scope, id, {
      terraformResourceType: 'rootly_form_field_option',
      terraformGeneratorMetadata: {
        providerName: 'rootly',
        providerVersion: '4.3.8',
        providerVersionConstraint: '4.3.8'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._color = config.color;
    this._default = config.default;
    this._formFieldId = config.formFieldId;
    this._id = config.id;
    this._position = config.position;
    this._value = config.value;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // default - computed: true, optional: true, required: false
  private _default?: boolean | cdktf.IResolvable; 
  public get default() {
    return this.getBooleanAttribute('default');
  }
  public set default(value: boolean | cdktf.IResolvable) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
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

  // position - computed: true, optional: true, required: false
  private _position?: number; 
  public get position() {
    return this.getNumberAttribute('position');
  }
  public set position(value: number) {
    this._position = value;
  }
  public resetPosition() {
    this._position = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get positionInput() {
    return this._position;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      color: cdktf.stringToTerraform(this._color),
      default: cdktf.booleanToTerraform(this._default),
      form_field_id: cdktf.stringToTerraform(this._formFieldId),
      id: cdktf.stringToTerraform(this._id),
      position: cdktf.numberToTerraform(this._position),
      value: cdktf.stringToTerraform(this._value),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      color: {
        value: cdktf.stringToHclTerraform(this._color),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default: {
        value: cdktf.booleanToHclTerraform(this._default),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      value: {
        value: cdktf.stringToHclTerraform(this._value),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
