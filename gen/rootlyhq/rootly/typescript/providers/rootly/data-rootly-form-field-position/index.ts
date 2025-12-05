// https://registry.terraform.io/providers/rootlyhq/rootly/4.3.13/docs/data-sources/form_field_position
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataRootlyFormFieldPositionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.13/docs/data-sources/form_field_position#form DataRootlyFormFieldPosition#form}
  */
  readonly form?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.13/docs/data-sources/form_field_position rootly_form_field_position}
*/
export class DataRootlyFormFieldPosition extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rootly_form_field_position";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataRootlyFormFieldPosition resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataRootlyFormFieldPosition to import
  * @param importFromId The id of the existing DataRootlyFormFieldPosition that should be imported. Refer to the {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.13/docs/data-sources/form_field_position#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataRootlyFormFieldPosition to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rootly_form_field_position", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.13/docs/data-sources/form_field_position rootly_form_field_position} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataRootlyFormFieldPositionConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataRootlyFormFieldPositionConfig = {}) {
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // form - computed: true, optional: true, required: false
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      form: cdktf.stringToTerraform(this._form),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
