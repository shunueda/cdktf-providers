// https://registry.terraform.io/providers/cisco-open/observability/0.0.2/docs/data-sources/type
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataObservabilityTypeConfig extends cdktf.TerraformMetaArguments {
  /**
  * JSON schema of the returned type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/observability/0.0.2/docs/data-sources/type#data DataObservabilityType#data}
  */
  readonly data?: { [key: string]: any };
  /**
  * Specifies the fully qualified type name used to get the type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/observability/0.0.2/docs/data-sources/type#type_name DataObservabilityType#type_name}
  */
  readonly typeName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cisco-open/observability/0.0.2/docs/data-sources/type observability_type}
*/
export class DataObservabilityType extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "observability_type";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataObservabilityType resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataObservabilityType to import
  * @param importFromId The id of the existing DataObservabilityType that should be imported. Refer to the {@link https://registry.terraform.io/providers/cisco-open/observability/0.0.2/docs/data-sources/type#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataObservabilityType to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "observability_type", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cisco-open/observability/0.0.2/docs/data-sources/type observability_type} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataObservabilityTypeConfig
  */
  public constructor(scope: Construct, id: string, config: DataObservabilityTypeConfig) {
    super(scope, id, {
      terraformResourceType: 'observability_type',
      terraformGeneratorMetadata: {
        providerName: 'observability',
        providerVersion: '0.0.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._data = config.data;
    this._typeName = config.typeName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data - computed: true, optional: true, required: false
  private _data?: { [key: string]: any }; 
  public get data() {
    return this.getAnyMapAttribute('data');
  }
  public set data(value: { [key: string]: any }) {
    this._data = value;
  }
  public resetData() {
    this._data = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // type_name - computed: false, optional: false, required: true
  private _typeName?: string; 
  public get typeName() {
    return this.getStringAttribute('type_name');
  }
  public set typeName(value: string) {
    this._typeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeNameInput() {
    return this._typeName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      data: cdktf.hashMapper(cdktf.anyToTerraform)(this._data),
      type_name: cdktf.stringToTerraform(this._typeName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      data: {
        value: cdktf.hashMapperHcl(cdktf.anyToHclTerraform)(this._data),
        isBlock: false,
        type: "map",
        storageClassType: "anyMap",
      },
      type_name: {
        value: cdktf.stringToHclTerraform(this._typeName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
