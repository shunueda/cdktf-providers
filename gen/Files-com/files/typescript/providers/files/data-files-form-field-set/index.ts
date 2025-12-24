// https://registry.terraform.io/providers/files-com/files/0.1.420/docs/data-sources/form_field_set
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFilesFormFieldSetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Form field set id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.420/docs/data-sources/form_field_set#id DataFilesFormFieldSet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/files-com/files/0.1.420/docs/data-sources/form_field_set files_form_field_set}
*/
export class DataFilesFormFieldSet extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "files_form_field_set";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFilesFormFieldSet resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFilesFormFieldSet to import
  * @param importFromId The id of the existing DataFilesFormFieldSet that should be imported. Refer to the {@link https://registry.terraform.io/providers/files-com/files/0.1.420/docs/data-sources/form_field_set#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFilesFormFieldSet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "files_form_field_set", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/files-com/files/0.1.420/docs/data-sources/form_field_set files_form_field_set} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFilesFormFieldSetConfig
  */
  public constructor(scope: Construct, id: string, config: DataFilesFormFieldSetConfig) {
    super(scope, id, {
      terraformResourceType: 'files_form_field_set',
      terraformGeneratorMetadata: {
        providerName: 'files',
        providerVersion: '0.1.420',
        providerVersionConstraint: '0.1.420'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // form_fields - computed: true, optional: false, required: false
  private _formFields = new cdktf.AnyMap(this, "form_fields");
  public get formFields() {
    return this._formFields;
  }

  // form_layout - computed: true, optional: false, required: false
  public get formLayout() {
    return this.getNumberListAttribute('form_layout');
  }

  // id - computed: false, optional: false, required: true
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // in_use - computed: true, optional: false, required: false
  public get inUse() {
    return this.getBooleanAttribute('in_use');
  }

  // skip_company - computed: true, optional: false, required: false
  public get skipCompany() {
    return this.getBooleanAttribute('skip_company');
  }

  // skip_email - computed: true, optional: false, required: false
  public get skipEmail() {
    return this.getBooleanAttribute('skip_email');
  }

  // skip_name - computed: true, optional: false, required: false
  public get skipName() {
    return this.getBooleanAttribute('skip_name');
  }

  // title - computed: true, optional: false, required: false
  public get title() {
    return this.getStringAttribute('title');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.numberToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.numberToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
