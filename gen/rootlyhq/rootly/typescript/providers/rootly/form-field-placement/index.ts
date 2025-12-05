// https://registry.terraform.io/providers/rootlyhq/rootly/4.3.13/docs/resources/form_field_placement
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FormFieldPlacementConfig extends cdktf.TerraformMetaArguments {
  /**
  * The form this field is placed on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.13/docs/resources/form_field_placement#form FormFieldPlacement#form}
  */
  readonly form: string;
  /**
  * The form field that is placed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.13/docs/resources/form_field_placement#form_field_id FormFieldPlacement#form_field_id}
  */
  readonly formFieldId?: string;
  /**
  * The form set this field is placed in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.13/docs/resources/form_field_placement#form_set_id FormFieldPlacement#form_set_id}
  */
  readonly formSetId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.13/docs/resources/form_field_placement#id FormFieldPlacement#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Whether the field is read-only and cannot be edited by users.. Value must be one of true or false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.13/docs/resources/form_field_placement#non_editable FormFieldPlacement#non_editable}
  */
  readonly nonEditable?: boolean | cdktf.IResolvable;
  /**
  * Logical operator when evaluating multiple form_field_placement_conditions with conditioned=placement. Value must be one of `and`, `or`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.13/docs/resources/form_field_placement#placement_operator FormFieldPlacement#placement_operator}
  */
  readonly placementOperator?: string;
  /**
  * The position of the field placement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.13/docs/resources/form_field_placement#position FormFieldPlacement#position}
  */
  readonly position?: number;
  /**
  * Whether the field is unconditionally required on this form.. Value must be one of true or false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.13/docs/resources/form_field_placement#required FormFieldPlacement#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * Logical operator when evaluating multiple form_field_placement_conditions with conditioned=required. Value must be one of `and`, `or`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.13/docs/resources/form_field_placement#required_operator FormFieldPlacement#required_operator}
  */
  readonly requiredOperator?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.13/docs/resources/form_field_placement rootly_form_field_placement}
*/
export class FormFieldPlacement extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rootly_form_field_placement";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FormFieldPlacement resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FormFieldPlacement to import
  * @param importFromId The id of the existing FormFieldPlacement that should be imported. Refer to the {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.13/docs/resources/form_field_placement#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FormFieldPlacement to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rootly_form_field_placement", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.13/docs/resources/form_field_placement rootly_form_field_placement} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FormFieldPlacementConfig
  */
  public constructor(scope: Construct, id: string, config: FormFieldPlacementConfig) {
    super(scope, id, {
      terraformResourceType: 'rootly_form_field_placement',
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
    this._formSetId = config.formSetId;
    this._id = config.id;
    this._nonEditable = config.nonEditable;
    this._placementOperator = config.placementOperator;
    this._position = config.position;
    this._required = config.required;
    this._requiredOperator = config.requiredOperator;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // form - computed: false, optional: false, required: true
  private _form?: string; 
  public get form() {
    return this.getStringAttribute('form');
  }
  public set form(value: string) {
    this._form = value;
  }
  // Temporarily expose input value. Use with caution.
  public get formInput() {
    return this._form;
  }

  // form_field_id - computed: true, optional: true, required: false
  private _formFieldId?: string; 
  public get formFieldId() {
    return this.getStringAttribute('form_field_id');
  }
  public set formFieldId(value: string) {
    this._formFieldId = value;
  }
  public resetFormFieldId() {
    this._formFieldId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formFieldIdInput() {
    return this._formFieldId;
  }

  // form_set_id - computed: false, optional: false, required: true
  private _formSetId?: string; 
  public get formSetId() {
    return this.getStringAttribute('form_set_id');
  }
  public set formSetId(value: string) {
    this._formSetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get formSetIdInput() {
    return this._formSetId;
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

  // non_editable - computed: true, optional: true, required: false
  private _nonEditable?: boolean | cdktf.IResolvable; 
  public get nonEditable() {
    return this.getBooleanAttribute('non_editable');
  }
  public set nonEditable(value: boolean | cdktf.IResolvable) {
    this._nonEditable = value;
  }
  public resetNonEditable() {
    this._nonEditable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonEditableInput() {
    return this._nonEditable;
  }

  // placement_operator - computed: false, optional: true, required: false
  private _placementOperator?: string; 
  public get placementOperator() {
    return this.getStringAttribute('placement_operator');
  }
  public set placementOperator(value: string) {
    this._placementOperator = value;
  }
  public resetPlacementOperator() {
    this._placementOperator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placementOperatorInput() {
    return this._placementOperator;
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

  // required_operator - computed: false, optional: true, required: false
  private _requiredOperator?: string; 
  public get requiredOperator() {
    return this.getStringAttribute('required_operator');
  }
  public set requiredOperator(value: string) {
    this._requiredOperator = value;
  }
  public resetRequiredOperator() {
    this._requiredOperator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredOperatorInput() {
    return this._requiredOperator;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      form: cdktf.stringToTerraform(this._form),
      form_field_id: cdktf.stringToTerraform(this._formFieldId),
      form_set_id: cdktf.stringToTerraform(this._formSetId),
      id: cdktf.stringToTerraform(this._id),
      non_editable: cdktf.booleanToTerraform(this._nonEditable),
      placement_operator: cdktf.stringToTerraform(this._placementOperator),
      position: cdktf.numberToTerraform(this._position),
      required: cdktf.booleanToTerraform(this._required),
      required_operator: cdktf.stringToTerraform(this._requiredOperator),
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
      form_set_id: {
        value: cdktf.stringToHclTerraform(this._formSetId),
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
      non_editable: {
        value: cdktf.booleanToHclTerraform(this._nonEditable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      placement_operator: {
        value: cdktf.stringToHclTerraform(this._placementOperator),
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
      required: {
        value: cdktf.booleanToHclTerraform(this._required),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      required_operator: {
        value: cdktf.stringToHclTerraform(this._requiredOperator),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
