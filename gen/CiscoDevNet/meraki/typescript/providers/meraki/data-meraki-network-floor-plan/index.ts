// https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/network_floor_plan
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMerakiNetworkFloorPlanConfig extends cdktf.TerraformMetaArguments {
  /**
  * The id of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/network_floor_plan#id DataMerakiNetworkFloorPlan#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of your floor plan.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/network_floor_plan#name DataMerakiNetworkFloorPlan#name}
  */
  readonly name?: string;
  /**
  * Network ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/network_floor_plan#network_id DataMerakiNetworkFloorPlan#network_id}
  */
  readonly networkId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/network_floor_plan meraki_network_floor_plan}
*/
export class DataMerakiNetworkFloorPlan extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_network_floor_plan";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMerakiNetworkFloorPlan resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMerakiNetworkFloorPlan to import
  * @param importFromId The id of the existing DataMerakiNetworkFloorPlan that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/network_floor_plan#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMerakiNetworkFloorPlan to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_network_floor_plan", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/network_floor_plan meraki_network_floor_plan} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMerakiNetworkFloorPlanConfig
  */
  public constructor(scope: Construct, id: string, config: DataMerakiNetworkFloorPlanConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_network_floor_plan',
      terraformGeneratorMetadata: {
        providerName: 'meraki',
        providerVersion: '1.7.1'
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
    this._name = config.name;
    this._networkId = config.networkId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bottom_left_corner_lat - computed: true, optional: false, required: false
  public get bottomLeftCornerLat() {
    return this.getNumberAttribute('bottom_left_corner_lat');
  }

  // bottom_left_corner_lng - computed: true, optional: false, required: false
  public get bottomLeftCornerLng() {
    return this.getNumberAttribute('bottom_left_corner_lng');
  }

  // bottom_right_corner_lat - computed: true, optional: false, required: false
  public get bottomRightCornerLat() {
    return this.getNumberAttribute('bottom_right_corner_lat');
  }

  // bottom_right_corner_lng - computed: true, optional: false, required: false
  public get bottomRightCornerLng() {
    return this.getNumberAttribute('bottom_right_corner_lng');
  }

  // center_lat - computed: true, optional: false, required: false
  public get centerLat() {
    return this.getNumberAttribute('center_lat');
  }

  // center_lng - computed: true, optional: false, required: false
  public get centerLng() {
    return this.getNumberAttribute('center_lng');
  }

  // floor_number - computed: true, optional: false, required: false
  public get floorNumber() {
    return this.getNumberAttribute('floor_number');
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

  // image_contents - computed: true, optional: false, required: false
  public get imageContents() {
    return this.getStringAttribute('image_contents');
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
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

  // top_left_corner_lat - computed: true, optional: false, required: false
  public get topLeftCornerLat() {
    return this.getNumberAttribute('top_left_corner_lat');
  }

  // top_left_corner_lng - computed: true, optional: false, required: false
  public get topLeftCornerLng() {
    return this.getNumberAttribute('top_left_corner_lng');
  }

  // top_right_corner_lat - computed: true, optional: false, required: false
  public get topRightCornerLat() {
    return this.getNumberAttribute('top_right_corner_lat');
  }

  // top_right_corner_lng - computed: true, optional: false, required: false
  public get topRightCornerLng() {
    return this.getNumberAttribute('top_right_corner_lng');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      network_id: cdktf.stringToTerraform(this._networkId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
