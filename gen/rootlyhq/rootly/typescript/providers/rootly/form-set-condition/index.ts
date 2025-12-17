// https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/form_set_condition
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FormSetConditionConfig extends cdktf.TerraformMetaArguments {
  /**
  * The condition comparison.. Value must be one of `equal`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/form_set_condition#comparison FormSetCondition#comparison}
  */
  readonly comparison?: string;
  /**
  * The form field this condition applies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/form_set_condition#form_field_id FormSetCondition#form_field_id}
  */
  readonly formFieldId: string;
  /**
  * The form set this condition applies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/form_set_condition#form_set_id FormSetCondition#form_set_id}
  */
  readonly formSetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/form_set_condition#id FormSetCondition#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The values for comparison.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/form_set_condition#values FormSetCondition#values}
  */
  readonly values: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/form_set_condition rootly_form_set_condition}
*/
export class FormSetCondition extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rootly_form_set_condition";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FormSetCondition resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FormSetCondition to import
  * @param importFromId The id of the existing FormSetCondition that should be imported. Refer to the {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/form_set_condition#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FormSetCondition to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rootly_form_set_condition", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/form_set_condition rootly_form_set_condition} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FormSetConditionConfig
  */
  public constructor(scope: Construct, id: string, config: FormSetConditionConfig) {
    super(scope, id, {
      terraformResourceType: 'rootly_form_set_condition',
      terraformGeneratorMetadata: {
        providerName: 'rootly',
        providerVersion: '5.1.0',
        providerVersionConstraint: '5.1.0'
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
    this._formFieldId = config.formFieldId;
    this._formSetId = config.formSetId;
    this._id = config.id;
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

  // form_set_id - computed: true, optional: true, required: false
  private _formSetId?: string; 
  public get formSetId() {
    return this.getStringAttribute('form_set_id');
  }
  public set formSetId(value: string) {
    this._formSetId = value;
  }
  public resetFormSetId() {
    this._formSetId = undefined;
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
      form_field_id: cdktf.stringToTerraform(this._formFieldId),
      form_set_id: cdktf.stringToTerraform(this._formSetId),
      id: cdktf.stringToTerraform(this._id),
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
