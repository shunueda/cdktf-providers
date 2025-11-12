// https://registry.terraform.io/providers/splunk/splunkconfig/1.7.4/docs/data-sources/lookup_attributes
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSplunkconfigLookupAttributesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunkconfig/1.7.4/docs/data-sources/lookup_attributes#id DataSplunkconfigLookupAttributes#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the lookup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunkconfig/1.7.4/docs/data-sources/lookup_attributes#lookup_name DataSplunkconfigLookupAttributes#lookup_name}
  */
  readonly lookupName: string;
  /**
  * Name of field to hold the row number. If not set, no field will be created for row numbers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunkconfig/1.7.4/docs/data-sources/lookup_attributes#row_number_field DataSplunkconfigLookupAttributes#row_number_field}
  */
  readonly rowNumberField?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/splunk/splunkconfig/1.7.4/docs/data-sources/lookup_attributes splunkconfig_lookup_attributes}
*/
export class DataSplunkconfigLookupAttributes extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "splunkconfig_lookup_attributes";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSplunkconfigLookupAttributes resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSplunkconfigLookupAttributes to import
  * @param importFromId The id of the existing DataSplunkconfigLookupAttributes that should be imported. Refer to the {@link https://registry.terraform.io/providers/splunk/splunkconfig/1.7.4/docs/data-sources/lookup_attributes#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSplunkconfigLookupAttributes to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "splunkconfig_lookup_attributes", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/splunk/splunkconfig/1.7.4/docs/data-sources/lookup_attributes splunkconfig_lookup_attributes} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSplunkconfigLookupAttributesConfig
  */
  public constructor(scope: Construct, id: string, config: DataSplunkconfigLookupAttributesConfig) {
    super(scope, id, {
      terraformResourceType: 'splunkconfig_lookup_attributes',
      terraformGeneratorMetadata: {
        providerName: 'splunkconfig',
        providerVersion: '1.7.4',
        providerVersionConstraint: '1.7.4'
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
    this._lookupName = config.lookupName;
    this._rowNumberField = config.rowNumberField;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // field_names - computed: true, optional: false, required: false
  public get fieldNames() {
    return this.getListAttribute('field_names');
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

  // lookup_name - computed: false, optional: false, required: true
  private _lookupName?: string; 
  public get lookupName() {
    return this.getStringAttribute('lookup_name');
  }
  public set lookupName(value: string) {
    this._lookupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lookupNameInput() {
    return this._lookupName;
  }

  // row_number_field - computed: false, optional: true, required: false
  private _rowNumberField?: string; 
  public get rowNumberField() {
    return this.getStringAttribute('row_number_field');
  }
  public set rowNumberField(value: string) {
    this._rowNumberField = value;
  }
  public resetRowNumberField() {
    this._rowNumberField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rowNumberFieldInput() {
    return this._rowNumberField;
  }

  // rows - computed: true, optional: false, required: false
  private _rows = new cdktf.StringMapList(this, "rows", false);
  public get rows() {
    return this._rows;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      lookup_name: cdktf.stringToTerraform(this._lookupName),
      row_number_field: cdktf.stringToTerraform(this._rowNumberField),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lookup_name: {
        value: cdktf.stringToHclTerraform(this._lookupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      row_number_field: {
        value: cdktf.stringToHclTerraform(this._rowNumberField),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
