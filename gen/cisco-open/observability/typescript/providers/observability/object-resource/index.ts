// https://registry.terraform.io/providers/cisco-open/observability/0.0.2/docs/resources/object
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectResourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * JSON schema of the returned object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/observability/0.0.2/docs/resources/object#data ObjectResource#data}
  */
  readonly data?: string;
  /**
  * ID used when doing import operation on an object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/observability/0.0.2/docs/resources/object#import_id ObjectResource#import_id}
  */
  readonly importId?: string;
  /**
  * Specifies the layer ID where the object resides
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/observability/0.0.2/docs/resources/object#layer_id ObjectResource#layer_id}
  */
  readonly layerId: string;
  /**
  * Specifies the layer type where the object resides
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/observability/0.0.2/docs/resources/object#layer_type ObjectResource#layer_type}
  */
  readonly layerType: string;
  /**
  * Spepcified the object ID for the particular object to get
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/observability/0.0.2/docs/resources/object#object_id ObjectResource#object_id}
  */
  readonly objectId?: string;
  /**
  * Specifies the fully qualified type name used to get the type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-open/observability/0.0.2/docs/resources/object#type_name ObjectResource#type_name}
  */
  readonly typeName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cisco-open/observability/0.0.2/docs/resources/object observability_object}
*/
export class ObjectResource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "observability_object";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectResource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectResource to import
  * @param importFromId The id of the existing ObjectResource that should be imported. Refer to the {@link https://registry.terraform.io/providers/cisco-open/observability/0.0.2/docs/resources/object#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectResource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "observability_object", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cisco-open/observability/0.0.2/docs/resources/object observability_object} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectResourceConfig
  */
  public constructor(scope: Construct, id: string, config: ObjectResourceConfig) {
    super(scope, id, {
      terraformResourceType: 'observability_object',
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
    this._importId = config.importId;
    this._layerId = config.layerId;
    this._layerType = config.layerType;
    this._objectId = config.objectId;
    this._typeName = config.typeName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data - computed: false, optional: true, required: false
  private _data?: string; 
  public get data() {
    return this.getStringAttribute('data');
  }
  public set data(value: string) {
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

  // import_id - computed: false, optional: true, required: false
  private _importId?: string; 
  public get importId() {
    return this.getStringAttribute('import_id');
  }
  public set importId(value: string) {
    this._importId = value;
  }
  public resetImportId() {
    this._importId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importIdInput() {
    return this._importId;
  }

  // layer_id - computed: false, optional: false, required: true
  private _layerId?: string; 
  public get layerId() {
    return this.getStringAttribute('layer_id');
  }
  public set layerId(value: string) {
    this._layerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get layerIdInput() {
    return this._layerId;
  }

  // layer_type - computed: false, optional: false, required: true
  private _layerType?: string; 
  public get layerType() {
    return this.getStringAttribute('layer_type');
  }
  public set layerType(value: string) {
    this._layerType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get layerTypeInput() {
    return this._layerType;
  }

  // object_id - computed: false, optional: true, required: false
  private _objectId?: string; 
  public get objectId() {
    return this.getStringAttribute('object_id');
  }
  public set objectId(value: string) {
    this._objectId = value;
  }
  public resetObjectId() {
    this._objectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectIdInput() {
    return this._objectId;
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
      data: cdktf.stringToTerraform(this._data),
      import_id: cdktf.stringToTerraform(this._importId),
      layer_id: cdktf.stringToTerraform(this._layerId),
      layer_type: cdktf.stringToTerraform(this._layerType),
      object_id: cdktf.stringToTerraform(this._objectId),
      type_name: cdktf.stringToTerraform(this._typeName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      data: {
        value: cdktf.stringToHclTerraform(this._data),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      import_id: {
        value: cdktf.stringToHclTerraform(this._importId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      layer_id: {
        value: cdktf.stringToHclTerraform(this._layerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      layer_type: {
        value: cdktf.stringToHclTerraform(this._layerType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      object_id: {
        value: cdktf.stringToHclTerraform(this._objectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
