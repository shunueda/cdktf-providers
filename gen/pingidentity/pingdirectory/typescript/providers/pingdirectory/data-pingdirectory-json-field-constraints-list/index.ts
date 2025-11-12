// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/json_field_constraints_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPingdirectoryJsonFieldConstraintsListConfig extends cdktf.TerraformMetaArguments {
  /**
  * SCIM filter used when searching the configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/json_field_constraints_list#filter DataPingdirectoryJsonFieldConstraintsList#filter}
  */
  readonly filter?: string;
  /**
  * Name of the parent JSON Attribute Constraints
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/json_field_constraints_list#json_attribute_constraints_name DataPingdirectoryJsonFieldConstraintsList#json_attribute_constraints_name}
  */
  readonly jsonAttributeConstraintsName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/json_field_constraints_list pingdirectory_json_field_constraints_list}
*/
export class DataPingdirectoryJsonFieldConstraintsList extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_json_field_constraints_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPingdirectoryJsonFieldConstraintsList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPingdirectoryJsonFieldConstraintsList to import
  * @param importFromId The id of the existing DataPingdirectoryJsonFieldConstraintsList that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/json_field_constraints_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPingdirectoryJsonFieldConstraintsList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_json_field_constraints_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/json_field_constraints_list pingdirectory_json_field_constraints_list} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPingdirectoryJsonFieldConstraintsListConfig
  */
  public constructor(scope: Construct, id: string, config: DataPingdirectoryJsonFieldConstraintsListConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_json_field_constraints_list',
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
    this._filter = config.filter;
    this._jsonAttributeConstraintsName = config.jsonAttributeConstraintsName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // filter - computed: false, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ids - computed: true, optional: false, required: false
  public get ids() {
    return cdktf.Fn.tolist(this.getListAttribute('ids'));
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filter: cdktf.stringToTerraform(this._filter),
      json_attribute_constraints_name: cdktf.stringToTerraform(this._jsonAttributeConstraintsName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filter: {
        value: cdktf.stringToHclTerraform(this._filter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      json_attribute_constraints_name: {
        value: cdktf.stringToHclTerraform(this._jsonAttributeConstraintsName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
