// https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/network_floor_plan
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkFloorPlanConfig extends cdktf.TerraformMetaArguments {
  /**
  * Latitude
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/network_floor_plan#bottom_left_corner_lat NetworkFloorPlan#bottom_left_corner_lat}
  */
  readonly bottomLeftCornerLat?: number;
  /**
  * Longitude
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/network_floor_plan#bottom_left_corner_lng NetworkFloorPlan#bottom_left_corner_lng}
  */
  readonly bottomLeftCornerLng?: number;
  /**
  * Latitude
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/network_floor_plan#bottom_right_corner_lat NetworkFloorPlan#bottom_right_corner_lat}
  */
  readonly bottomRightCornerLat?: number;
  /**
  * Longitude
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/network_floor_plan#bottom_right_corner_lng NetworkFloorPlan#bottom_right_corner_lng}
  */
  readonly bottomRightCornerLng?: number;
  /**
  * Latitude
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/network_floor_plan#center_lat NetworkFloorPlan#center_lat}
  */
  readonly centerLat?: number;
  /**
  * Longitude
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/network_floor_plan#center_lng NetworkFloorPlan#center_lng}
  */
  readonly centerLng?: number;
  /**
  * The floor number of the floors within the building
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/network_floor_plan#floor_number NetworkFloorPlan#floor_number}
  */
  readonly floorNumber?: number;
  /**
  * The file contents (a base 64 encoded string) of your image. Supported formats are PNG, GIF, and JPG. Note that all images are saved as PNG files, regardless of the format they are uploaded in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/network_floor_plan#image_contents NetworkFloorPlan#image_contents}
  */
  readonly imageContents: string;
  /**
  * The name of your floor plan.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/network_floor_plan#name NetworkFloorPlan#name}
  */
  readonly name: string;
  /**
  * Network ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/network_floor_plan#network_id NetworkFloorPlan#network_id}
  */
  readonly networkId: string;
  /**
  * Latitude
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/network_floor_plan#top_left_corner_lat NetworkFloorPlan#top_left_corner_lat}
  */
  readonly topLeftCornerLat?: number;
  /**
  * Longitude
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/network_floor_plan#top_left_corner_lng NetworkFloorPlan#top_left_corner_lng}
  */
  readonly topLeftCornerLng?: number;
  /**
  * Latitude
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/network_floor_plan#top_right_corner_lat NetworkFloorPlan#top_right_corner_lat}
  */
  readonly topRightCornerLat?: number;
  /**
  * Longitude
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/network_floor_plan#top_right_corner_lng NetworkFloorPlan#top_right_corner_lng}
  */
  readonly topRightCornerLng?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/network_floor_plan meraki_network_floor_plan}
*/
export class NetworkFloorPlan extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_network_floor_plan";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetworkFloorPlan resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkFloorPlan to import
  * @param importFromId The id of the existing NetworkFloorPlan that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/network_floor_plan#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkFloorPlan to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_network_floor_plan", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/network_floor_plan meraki_network_floor_plan} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkFloorPlanConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkFloorPlanConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_network_floor_plan',
      terraformGeneratorMetadata: {
        providerName: 'meraki',
        providerVersion: '1.7.1',
        providerVersionConstraint: '1.7.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bottomLeftCornerLat = config.bottomLeftCornerLat;
    this._bottomLeftCornerLng = config.bottomLeftCornerLng;
    this._bottomRightCornerLat = config.bottomRightCornerLat;
    this._bottomRightCornerLng = config.bottomRightCornerLng;
    this._centerLat = config.centerLat;
    this._centerLng = config.centerLng;
    this._floorNumber = config.floorNumber;
    this._imageContents = config.imageContents;
    this._name = config.name;
    this._networkId = config.networkId;
    this._topLeftCornerLat = config.topLeftCornerLat;
    this._topLeftCornerLng = config.topLeftCornerLng;
    this._topRightCornerLat = config.topRightCornerLat;
    this._topRightCornerLng = config.topRightCornerLng;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bottom_left_corner_lat - computed: false, optional: true, required: false
  private _bottomLeftCornerLat?: number; 
  public get bottomLeftCornerLat() {
    return this.getNumberAttribute('bottom_left_corner_lat');
  }
  public set bottomLeftCornerLat(value: number) {
    this._bottomLeftCornerLat = value;
  }
  public resetBottomLeftCornerLat() {
    this._bottomLeftCornerLat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bottomLeftCornerLatInput() {
    return this._bottomLeftCornerLat;
  }

  // bottom_left_corner_lng - computed: false, optional: true, required: false
  private _bottomLeftCornerLng?: number; 
  public get bottomLeftCornerLng() {
    return this.getNumberAttribute('bottom_left_corner_lng');
  }
  public set bottomLeftCornerLng(value: number) {
    this._bottomLeftCornerLng = value;
  }
  public resetBottomLeftCornerLng() {
    this._bottomLeftCornerLng = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bottomLeftCornerLngInput() {
    return this._bottomLeftCornerLng;
  }

  // bottom_right_corner_lat - computed: false, optional: true, required: false
  private _bottomRightCornerLat?: number; 
  public get bottomRightCornerLat() {
    return this.getNumberAttribute('bottom_right_corner_lat');
  }
  public set bottomRightCornerLat(value: number) {
    this._bottomRightCornerLat = value;
  }
  public resetBottomRightCornerLat() {
    this._bottomRightCornerLat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bottomRightCornerLatInput() {
    return this._bottomRightCornerLat;
  }

  // bottom_right_corner_lng - computed: false, optional: true, required: false
  private _bottomRightCornerLng?: number; 
  public get bottomRightCornerLng() {
    return this.getNumberAttribute('bottom_right_corner_lng');
  }
  public set bottomRightCornerLng(value: number) {
    this._bottomRightCornerLng = value;
  }
  public resetBottomRightCornerLng() {
    this._bottomRightCornerLng = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bottomRightCornerLngInput() {
    return this._bottomRightCornerLng;
  }

  // center_lat - computed: false, optional: true, required: false
  private _centerLat?: number; 
  public get centerLat() {
    return this.getNumberAttribute('center_lat');
  }
  public set centerLat(value: number) {
    this._centerLat = value;
  }
  public resetCenterLat() {
    this._centerLat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get centerLatInput() {
    return this._centerLat;
  }

  // center_lng - computed: false, optional: true, required: false
  private _centerLng?: number; 
  public get centerLng() {
    return this.getNumberAttribute('center_lng');
  }
  public set centerLng(value: number) {
    this._centerLng = value;
  }
  public resetCenterLng() {
    this._centerLng = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get centerLngInput() {
    return this._centerLng;
  }

  // floor_number - computed: false, optional: true, required: false
  private _floorNumber?: number; 
  public get floorNumber() {
    return this.getNumberAttribute('floor_number');
  }
  public set floorNumber(value: number) {
    this._floorNumber = value;
  }
  public resetFloorNumber() {
    this._floorNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get floorNumberInput() {
    return this._floorNumber;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // image_contents - computed: false, optional: false, required: true
  private _imageContents?: string; 
  public get imageContents() {
    return this.getStringAttribute('image_contents');
  }
  public set imageContents(value: string) {
    this._imageContents = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageContentsInput() {
    return this._imageContents;
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

  // network_id - computed: false, optional: false, required: true
  private _networkId?: string; 
  public get networkId() {
    return this.getStringAttribute('network_id');
  }
  public set networkId(value: string) {
    this._networkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdInput() {
    return this._networkId;
  }

  // top_left_corner_lat - computed: false, optional: true, required: false
  private _topLeftCornerLat?: number; 
  public get topLeftCornerLat() {
    return this.getNumberAttribute('top_left_corner_lat');
  }
  public set topLeftCornerLat(value: number) {
    this._topLeftCornerLat = value;
  }
  public resetTopLeftCornerLat() {
    this._topLeftCornerLat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topLeftCornerLatInput() {
    return this._topLeftCornerLat;
  }

  // top_left_corner_lng - computed: false, optional: true, required: false
  private _topLeftCornerLng?: number; 
  public get topLeftCornerLng() {
    return this.getNumberAttribute('top_left_corner_lng');
  }
  public set topLeftCornerLng(value: number) {
    this._topLeftCornerLng = value;
  }
  public resetTopLeftCornerLng() {
    this._topLeftCornerLng = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topLeftCornerLngInput() {
    return this._topLeftCornerLng;
  }

  // top_right_corner_lat - computed: false, optional: true, required: false
  private _topRightCornerLat?: number; 
  public get topRightCornerLat() {
    return this.getNumberAttribute('top_right_corner_lat');
  }
  public set topRightCornerLat(value: number) {
    this._topRightCornerLat = value;
  }
  public resetTopRightCornerLat() {
    this._topRightCornerLat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topRightCornerLatInput() {
    return this._topRightCornerLat;
  }

  // top_right_corner_lng - computed: false, optional: true, required: false
  private _topRightCornerLng?: number; 
  public get topRightCornerLng() {
    return this.getNumberAttribute('top_right_corner_lng');
  }
  public set topRightCornerLng(value: number) {
    this._topRightCornerLng = value;
  }
  public resetTopRightCornerLng() {
    this._topRightCornerLng = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topRightCornerLngInput() {
    return this._topRightCornerLng;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bottom_left_corner_lat: cdktf.numberToTerraform(this._bottomLeftCornerLat),
      bottom_left_corner_lng: cdktf.numberToTerraform(this._bottomLeftCornerLng),
      bottom_right_corner_lat: cdktf.numberToTerraform(this._bottomRightCornerLat),
      bottom_right_corner_lng: cdktf.numberToTerraform(this._bottomRightCornerLng),
      center_lat: cdktf.numberToTerraform(this._centerLat),
      center_lng: cdktf.numberToTerraform(this._centerLng),
      floor_number: cdktf.numberToTerraform(this._floorNumber),
      image_contents: cdktf.stringToTerraform(this._imageContents),
      name: cdktf.stringToTerraform(this._name),
      network_id: cdktf.stringToTerraform(this._networkId),
      top_left_corner_lat: cdktf.numberToTerraform(this._topLeftCornerLat),
      top_left_corner_lng: cdktf.numberToTerraform(this._topLeftCornerLng),
      top_right_corner_lat: cdktf.numberToTerraform(this._topRightCornerLat),
      top_right_corner_lng: cdktf.numberToTerraform(this._topRightCornerLng),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bottom_left_corner_lat: {
        value: cdktf.numberToHclTerraform(this._bottomLeftCornerLat),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bottom_left_corner_lng: {
        value: cdktf.numberToHclTerraform(this._bottomLeftCornerLng),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bottom_right_corner_lat: {
        value: cdktf.numberToHclTerraform(this._bottomRightCornerLat),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bottom_right_corner_lng: {
        value: cdktf.numberToHclTerraform(this._bottomRightCornerLng),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      center_lat: {
        value: cdktf.numberToHclTerraform(this._centerLat),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      center_lng: {
        value: cdktf.numberToHclTerraform(this._centerLng),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      floor_number: {
        value: cdktf.numberToHclTerraform(this._floorNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      image_contents: {
        value: cdktf.stringToHclTerraform(this._imageContents),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_id: {
        value: cdktf.stringToHclTerraform(this._networkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      top_left_corner_lat: {
        value: cdktf.numberToHclTerraform(this._topLeftCornerLat),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      top_left_corner_lng: {
        value: cdktf.numberToHclTerraform(this._topLeftCornerLng),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      top_right_corner_lat: {
        value: cdktf.numberToHclTerraform(this._topRightCornerLat),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      top_right_corner_lng: {
        value: cdktf.numberToHclTerraform(this._topRightCornerLng),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
