// https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/data-sources/form_set_condition
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataRootlyFormSetConditionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/data-sources/form_set_condition#form_field_id DataRootlyFormSetCondition#form_field_id}
  */
  readonly formFieldId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/data-sources/form_set_condition rootly_form_set_condition}
*/
export class DataRootlyFormSetCondition extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rootly_form_set_condition";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataRootlyFormSetCondition resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataRootlyFormSetCondition to import
  * @param importFromId The id of the existing DataRootlyFormSetCondition that should be imported. Refer to the {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/data-sources/form_set_condition#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataRootlyFormSetCondition to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rootly_form_set_condition", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/data-sources/form_set_condition rootly_form_set_condition} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataRootlyFormSetConditionConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataRootlyFormSetConditionConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'rootly_form_set_condition',
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
    this._formFieldId = config.formFieldId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      form_field_id: cdktf.stringToTerraform(this._formFieldId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      form_field_id: {
        value: cdktf.stringToHclTerraform(this._formFieldId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
