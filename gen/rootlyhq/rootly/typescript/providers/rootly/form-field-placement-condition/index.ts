// https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/form_field_placement_condition
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FormFieldPlacementConditionConfig extends cdktf.TerraformMetaArguments {
  /**
  * The condition comparison.. Value must be one of `equal`, `not_equal`, `is_set`, `is_not_set`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/form_field_placement_condition#comparison FormFieldPlacementCondition#comparison}
  */
  readonly comparison?: string;
  /**
  * The resource or attribute the condition applies.. Value must be one of `placement`, `required`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/form_field_placement_condition#conditioned FormFieldPlacementCondition#conditioned}
  */
  readonly conditioned?: string;
  /**
  * The condition field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/form_field_placement_condition#form_field_id FormFieldPlacementCondition#form_field_id}
  */
  readonly formFieldId: string;
  /**
  * The form field placement this condition applies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/form_field_placement_condition#form_field_placement_id FormFieldPlacementCondition#form_field_placement_id}
  */
  readonly formFieldPlacementId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/form_field_placement_condition#id FormFieldPlacementCondition#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The condition position.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/form_field_placement_condition#position FormFieldPlacementCondition#position}
  */
  readonly position?: number;
  /**
  * The values for comparison.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/form_field_placement_condition#values FormFieldPlacementCondition#values}
  */
  readonly values: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/form_field_placement_condition rootly_form_field_placement_condition}
*/
export class FormFieldPlacementCondition extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rootly_form_field_placement_condition";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FormFieldPlacementCondition resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FormFieldPlacementCondition to import
  * @param importFromId The id of the existing FormFieldPlacementCondition that should be imported. Refer to the {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/form_field_placement_condition#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FormFieldPlacementCondition to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rootly_form_field_placement_condition", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/form_field_placement_condition rootly_form_field_placement_condition} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FormFieldPlacementConditionConfig
  */
  public constructor(scope: Construct, id: string, config: FormFieldPlacementConditionConfig) {
    super(scope, id, {
      terraformResourceType: 'rootly_form_field_placement_condition',
      terraformGeneratorMetadata: {
        providerName: 'rootly',
        providerVersion: '4.3.7',
        providerVersionConstraint: '4.3.7'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._comparison = config.comparison;
    this._conditioned = config.conditioned;
    this._formFieldId = config.formFieldId;
    this._formFieldPlacementId = config.formFieldPlacementId;
    this._id = config.id;
    this._position = config.position;
    this._values = config.values;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // comparison - computed: false, optional: true, required: false
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  public resetComparison() {
    this._comparison = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
  }

  // conditioned - computed: false, optional: true, required: false
  private _conditioned?: string; 
  public get conditioned() {
    return this.getStringAttribute('conditioned');
  }
  public set conditioned(value: string) {
    this._conditioned = value;
  }
  public resetConditioned() {
    this._conditioned = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionedInput() {
    return this._conditioned;
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

  // form_field_placement_id - computed: true, optional: true, required: false
  private _formFieldPlacementId?: string; 
  public get formFieldPlacementId() {
    return this.getStringAttribute('form_field_placement_id');
  }
  public set formFieldPlacementId(value: string) {
    this._formFieldPlacementId = value;
  }
  public resetFormFieldPlacementId() {
    this._formFieldPlacementId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formFieldPlacementIdInput() {
    return this._formFieldPlacementId;
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

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comparison: cdktf.stringToTerraform(this._comparison),
      conditioned: cdktf.stringToTerraform(this._conditioned),
      form_field_id: cdktf.stringToTerraform(this._formFieldId),
      form_field_placement_id: cdktf.stringToTerraform(this._formFieldPlacementId),
      id: cdktf.stringToTerraform(this._id),
      position: cdktf.numberToTerraform(this._position),
      values: cdktf.listMapper(cdktf.stringToTerraform, false)(this._values),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      comparison: {
        value: cdktf.stringToHclTerraform(this._comparison),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      conditioned: {
        value: cdktf.stringToHclTerraform(this._conditioned),
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
      form_field_placement_id: {
        value: cdktf.stringToHclTerraform(this._formFieldPlacementId),
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
      values: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._values),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
