// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/json_field_constraints
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPingdirectoryJsonFieldConstraintsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the parent JSON Attribute Constraints
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/json_field_constraints#json_attribute_constraints_name DataPingdirectoryJsonFieldConstraints#json_attribute_constraints_name}
  */
  readonly jsonAttributeConstraintsName: string;
  /**
  * The full name of the JSON field to which these constraints apply.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/json_field_constraints#json_field DataPingdirectoryJsonFieldConstraints#json_field}
  */
  readonly jsonField: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/json_field_constraints pingdirectory_json_field_constraints}
*/
export class DataPingdirectoryJsonFieldConstraints extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_json_field_constraints";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPingdirectoryJsonFieldConstraints resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPingdirectoryJsonFieldConstraints to import
  * @param importFromId The id of the existing DataPingdirectoryJsonFieldConstraints that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/json_field_constraints#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPingdirectoryJsonFieldConstraints to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_json_field_constraints", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/json_field_constraints pingdirectory_json_field_constraints} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPingdirectoryJsonFieldConstraintsConfig
  */
  public constructor(scope: Construct, id: string, config: DataPingdirectoryJsonFieldConstraintsConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_json_field_constraints',
      terraformGeneratorMetadata: {
        providerName: 'pingdirectory',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._jsonAttributeConstraintsName = config.jsonAttributeConstraintsName;
    this._jsonField = config.jsonField;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_empty_object - computed: true, optional: false, required: false
  public get allowEmptyObject() {
    return this.getBooleanAttribute('allow_empty_object');
  }

  // allow_null_value - computed: true, optional: false, required: false
  public get allowNullValue() {
    return this.getBooleanAttribute('allow_null_value');
  }

  // allowed_value - computed: true, optional: false, required: false
  public get allowedValue() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_value'));
  }

  // allowed_value_regular_expression - computed: true, optional: false, required: false
  public get allowedValueRegularExpression() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_value_regular_expression'));
  }

  // cache_mode - computed: true, optional: false, required: false
  public get cacheMode() {
    return this.getStringAttribute('cache_mode');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // index_entry_limit - computed: true, optional: false, required: false
  public get indexEntryLimit() {
    return this.getNumberAttribute('index_entry_limit');
  }

  // index_values - computed: true, optional: false, required: false
  public get indexValues() {
    return this.getBooleanAttribute('index_values');
  }

  // is_array - computed: true, optional: false, required: false
  public get isArray() {
    return this.getStringAttribute('is_array');
  }

  // is_required - computed: true, optional: false, required: false
  public get isRequired() {
    return this.getBooleanAttribute('is_required');
  }

  // json_attribute_constraints_name - computed: false, optional: false, required: true
  private _jsonAttributeConstraintsName?: string; 
  public get jsonAttributeConstraintsName() {
    return this.getStringAttribute('json_attribute_constraints_name');
  }
  public set jsonAttributeConstraintsName(value: string) {
    this._jsonAttributeConstraintsName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonAttributeConstraintsNameInput() {
    return this._jsonAttributeConstraintsName;
  }

  // json_field - computed: false, optional: false, required: true
  private _jsonField?: string; 
  public get jsonField() {
    return this.getStringAttribute('json_field');
  }
  public set jsonField(value: string) {
    this._jsonField = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonFieldInput() {
    return this._jsonField;
  }

  // maximum_numeric_value - computed: true, optional: false, required: false
  public get maximumNumericValue() {
    return this.getStringAttribute('maximum_numeric_value');
  }

  // maximum_value_count - computed: true, optional: false, required: false
  public get maximumValueCount() {
    return this.getNumberAttribute('maximum_value_count');
  }

  // maximum_value_length - computed: true, optional: false, required: false
  public get maximumValueLength() {
    return this.getNumberAttribute('maximum_value_length');
  }

  // minimum_numeric_value - computed: true, optional: false, required: false
  public get minimumNumericValue() {
    return this.getStringAttribute('minimum_numeric_value');
  }

  // minimum_value_count - computed: true, optional: false, required: false
  public get minimumValueCount() {
    return this.getNumberAttribute('minimum_value_count');
  }

  // minimum_value_length - computed: true, optional: false, required: false
  public get minimumValueLength() {
    return this.getNumberAttribute('minimum_value_length');
  }

  // prime_index - computed: true, optional: false, required: false
  public get primeIndex() {
    return this.getBooleanAttribute('prime_index');
  }

  // tokenize_values - computed: true, optional: false, required: false
  public get tokenizeValues() {
    return this.getBooleanAttribute('tokenize_values');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value_type - computed: true, optional: false, required: false
  public get valueType() {
    return this.getStringAttribute('value_type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      json_attribute_constraints_name: cdktf.stringToTerraform(this._jsonAttributeConstraintsName),
      json_field: cdktf.stringToTerraform(this._jsonField),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      json_attribute_constraints_name: {
        value: cdktf.stringToHclTerraform(this._jsonAttributeConstraintsName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      json_field: {
        value: cdktf.stringToHclTerraform(this._jsonField),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
