// https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/architect_datatable_row
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ArchitectDatatableRowConfig extends cdktf.TerraformMetaArguments {
  /**
  * Datatable ID that contains this row. If this is changed, a new row is created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/architect_datatable_row#datatable_id ArchitectDatatableRow#datatable_id}
  */
  readonly datatableId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/architect_datatable_row#id ArchitectDatatableRow#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Value for this row's key. If this is changed, a new row is created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/architect_datatable_row#key_value ArchitectDatatableRow#key_value}
  */
  readonly keyValue: string;
  /**
  * JSON object containing properties and values for this row. Defaults will be set for missing properties.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/architect_datatable_row#properties_json ArchitectDatatableRow#properties_json}
  */
  readonly propertiesJson?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/architect_datatable_row genesyscloud_architect_datatable_row}
*/
export class ArchitectDatatableRow extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "genesyscloud_architect_datatable_row";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ArchitectDatatableRow resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ArchitectDatatableRow to import
  * @param importFromId The id of the existing ArchitectDatatableRow that should be imported. Refer to the {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/architect_datatable_row#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ArchitectDatatableRow to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "genesyscloud_architect_datatable_row", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/architect_datatable_row genesyscloud_architect_datatable_row} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ArchitectDatatableRowConfig
  */
  public constructor(scope: Construct, id: string, config: ArchitectDatatableRowConfig) {
    super(scope, id, {
      terraformResourceType: 'genesyscloud_architect_datatable_row',
      terraformGeneratorMetadata: {
        providerName: 'genesyscloud',
        providerVersion: '1.72.2',
        providerVersionConstraint: '1.72.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._datatableId = config.datatableId;
    this._id = config.id;
    this._keyValue = config.keyValue;
    this._propertiesJson = config.propertiesJson;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // datatable_id - computed: false, optional: false, required: true
  private _datatableId?: string; 
  public get datatableId() {
    return this.getStringAttribute('datatable_id');
  }
  public set datatableId(value: string) {
    this._datatableId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datatableIdInput() {
    return this._datatableId;
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

  // key_value - computed: false, optional: false, required: true
  private _keyValue?: string; 
  public get keyValue() {
    return this.getStringAttribute('key_value');
  }
  public set keyValue(value: string) {
    this._keyValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyValueInput() {
    return this._keyValue;
  }

  // properties_json - computed: true, optional: true, required: false
  private _propertiesJson?: string; 
  public get propertiesJson() {
    return this.getStringAttribute('properties_json');
  }
  public set propertiesJson(value: string) {
    this._propertiesJson = value;
  }
  public resetPropertiesJson() {
    this._propertiesJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesJsonInput() {
    return this._propertiesJson;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      datatable_id: cdktf.stringToTerraform(this._datatableId),
      id: cdktf.stringToTerraform(this._id),
      key_value: cdktf.stringToTerraform(this._keyValue),
      properties_json: cdktf.stringToTerraform(this._propertiesJson),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      datatable_id: {
        value: cdktf.stringToHclTerraform(this._datatableId),
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
      key_value: {
        value: cdktf.stringToHclTerraform(this._keyValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      properties_json: {
        value: cdktf.stringToHclTerraform(this._propertiesJson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
