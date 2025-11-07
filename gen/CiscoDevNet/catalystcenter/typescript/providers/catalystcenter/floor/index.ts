// https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/floor
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FloorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Floor number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/floor#floor_number Floor#floor_number}
  */
  readonly floorNumber: number;
  /**
  * Height
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/floor#height Floor#height}
  */
  readonly height: number;
  /**
  * Length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/floor#length Floor#length}
  */
  readonly length: number;
  /**
  * Floor name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/floor#name Floor#name}
  */
  readonly name: string;
  /**
  * The ID of the parent building
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/floor#parent_id Floor#parent_id}
  */
  readonly parentId: string;
  /**
  * The RF model
  *   - Choices: `Cubes And Walled Offices`, `Drywall Office Only`, `Indoor High Ceiling`, `Outdoor Open Space`, `Free Space`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/floor#rf_model Floor#rf_model}
  */
  readonly rfModel: string;
  /**
  * The unit of measurement
  *   - Choices: `feet`, `meters`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/floor#units_of_measure Floor#units_of_measure}
  */
  readonly unitsOfMeasure: string;
  /**
  * Width
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/floor#width Floor#width}
  */
  readonly width: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/floor catalystcenter_floor}
*/
export class Floor extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "catalystcenter_floor";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Floor resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Floor to import
  * @param importFromId The id of the existing Floor that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/floor#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Floor to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "catalystcenter_floor", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/floor catalystcenter_floor} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FloorConfig
  */
  public constructor(scope: Construct, id: string, config: FloorConfig) {
    super(scope, id, {
      terraformResourceType: 'catalystcenter_floor',
      terraformGeneratorMetadata: {
        providerName: 'catalystcenter',
        providerVersion: '0.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._floorNumber = config.floorNumber;
    this._height = config.height;
    this._length = config.length;
    this._name = config.name;
    this._parentId = config.parentId;
    this._rfModel = config.rfModel;
    this._unitsOfMeasure = config.unitsOfMeasure;
    this._width = config.width;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // floor_number - computed: false, optional: false, required: true
  private _floorNumber?: number; 
  public get floorNumber() {
    return this.getNumberAttribute('floor_number');
  }
  public set floorNumber(value: number) {
    this._floorNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get floorNumberInput() {
    return this._floorNumber;
  }

  // height - computed: false, optional: false, required: true
  private _height?: number; 
  public get height() {
    return this.getNumberAttribute('height');
  }
  public set height(value: number) {
    this._height = value;
  }
  // Temporarily expose input value. Use with caution.
  public get heightInput() {
    return this._height;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // length - computed: false, optional: false, required: true
  private _length?: number; 
  public get length() {
    return this.getNumberAttribute('length');
  }
  public set length(value: number) {
    this._length = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lengthInput() {
    return this._length;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // parent_id - computed: false, optional: false, required: true
  private _parentId?: string; 
  public get parentId() {
    return this.getStringAttribute('parent_id');
  }
  public set parentId(value: string) {
    this._parentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parentIdInput() {
    return this._parentId;
  }

  // rf_model - computed: false, optional: false, required: true
  private _rfModel?: string; 
  public get rfModel() {
    return this.getStringAttribute('rf_model');
  }
  public set rfModel(value: string) {
    this._rfModel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rfModelInput() {
    return this._rfModel;
  }

  // units_of_measure - computed: false, optional: false, required: true
  private _unitsOfMeasure?: string; 
  public get unitsOfMeasure() {
    return this.getStringAttribute('units_of_measure');
  }
  public set unitsOfMeasure(value: string) {
    this._unitsOfMeasure = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitsOfMeasureInput() {
    return this._unitsOfMeasure;
  }

  // width - computed: false, optional: false, required: true
  private _width?: number; 
  public get width() {
    return this.getNumberAttribute('width');
  }
  public set width(value: number) {
    this._width = value;
  }
  // Temporarily expose input value. Use with caution.
  public get widthInput() {
    return this._width;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      floor_number: cdktf.numberToTerraform(this._floorNumber),
      height: cdktf.numberToTerraform(this._height),
      length: cdktf.numberToTerraform(this._length),
      name: cdktf.stringToTerraform(this._name),
      parent_id: cdktf.stringToTerraform(this._parentId),
      rf_model: cdktf.stringToTerraform(this._rfModel),
      units_of_measure: cdktf.stringToTerraform(this._unitsOfMeasure),
      width: cdktf.numberToTerraform(this._width),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      floor_number: {
        value: cdktf.numberToHclTerraform(this._floorNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      height: {
        value: cdktf.numberToHclTerraform(this._height),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      length: {
        value: cdktf.numberToHclTerraform(this._length),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parent_id: {
        value: cdktf.stringToHclTerraform(this._parentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rf_model: {
        value: cdktf.stringToHclTerraform(this._rfModel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      units_of_measure: {
        value: cdktf.stringToHclTerraform(this._unitsOfMeasure),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      width: {
        value: cdktf.numberToHclTerraform(this._width),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
