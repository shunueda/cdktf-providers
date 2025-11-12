// https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/device
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DeviceConfig extends cdktf.TerraformMetaArguments {
  /**
  * The address of a device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/device#address Device#address}
  */
  readonly address?: string;
  /**
  * The floor plan to associate to this device. null disassociates the device from the floorplan.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/device#floor_plan_id Device#floor_plan_id}
  */
  readonly floorPlanId?: string;
  /**
  * The latitude of a device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/device#lat Device#lat}
  */
  readonly lat?: number;
  /**
  * The longitude of a device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/device#lng Device#lng}
  */
  readonly lng?: number;
  /**
  * Whether or not to set the latitude and longitude of a device based on the new address. Only applies when lat and lng are not specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/device#move_map_marker Device#move_map_marker}
  */
  readonly moveMapMarker?: boolean | cdktf.IResolvable;
  /**
  * The name of a device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/device#name Device#name}
  */
  readonly name?: string;
  /**
  * The notes for the device. String. Limited to 255 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/device#notes Device#notes}
  */
  readonly notes?: string;
  /**
  * Switch serial
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/device#serial Device#serial}
  */
  readonly serial: string;
  /**
  * The ID of a switch template to bind to the device (for available switch templates, see the `Switch Templates` endpoint). Use null to unbind the switch device from the current profile. For a device to be bindable to a switch template, it must (1) be a switch, and (2) belong to a network that is bound to a configuration template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/device#switch_profile_id Device#switch_profile_id}
  */
  readonly switchProfileId?: string;
  /**
  * The list of tags of a device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/device#tags Device#tags}
  */
  readonly tags?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/device meraki_device}
*/
export class Device extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_device";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Device resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Device to import
  * @param importFromId The id of the existing Device that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/device#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Device to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_device", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/device meraki_device} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DeviceConfig
  */
  public constructor(scope: Construct, id: string, config: DeviceConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_device',
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
    this._address = config.address;
    this._floorPlanId = config.floorPlanId;
    this._lat = config.lat;
    this._lng = config.lng;
    this._moveMapMarker = config.moveMapMarker;
    this._name = config.name;
    this._notes = config.notes;
    this._serial = config.serial;
    this._switchProfileId = config.switchProfileId;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address - computed: false, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // floor_plan_id - computed: false, optional: true, required: false
  private _floorPlanId?: string; 
  public get floorPlanId() {
    return this.getStringAttribute('floor_plan_id');
  }
  public set floorPlanId(value: string) {
    this._floorPlanId = value;
  }
  public resetFloorPlanId() {
    this._floorPlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get floorPlanIdInput() {
    return this._floorPlanId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // lat - computed: false, optional: true, required: false
  private _lat?: number; 
  public get lat() {
    return this.getNumberAttribute('lat');
  }
  public set lat(value: number) {
    this._lat = value;
  }
  public resetLat() {
    this._lat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latInput() {
    return this._lat;
  }

  // lng - computed: false, optional: true, required: false
  private _lng?: number; 
  public get lng() {
    return this.getNumberAttribute('lng');
  }
  public set lng(value: number) {
    this._lng = value;
  }
  public resetLng() {
    this._lng = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lngInput() {
    return this._lng;
  }

  // move_map_marker - computed: false, optional: true, required: false
  private _moveMapMarker?: boolean | cdktf.IResolvable; 
  public get moveMapMarker() {
    return this.getBooleanAttribute('move_map_marker');
  }
  public set moveMapMarker(value: boolean | cdktf.IResolvable) {
    this._moveMapMarker = value;
  }
  public resetMoveMapMarker() {
    this._moveMapMarker = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moveMapMarkerInput() {
    return this._moveMapMarker;
  }

  // name - computed: false, optional: true, required: false
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

  // notes - computed: false, optional: true, required: false
  private _notes?: string; 
  public get notes() {
    return this.getStringAttribute('notes');
  }
  public set notes(value: string) {
    this._notes = value;
  }
  public resetNotes() {
    this._notes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notesInput() {
    return this._notes;
  }

  // serial - computed: false, optional: false, required: true
  private _serial?: string; 
  public get serial() {
    return this.getStringAttribute('serial');
  }
  public set serial(value: string) {
    this._serial = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serialInput() {
    return this._serial;
  }

  // switch_profile_id - computed: false, optional: true, required: false
  private _switchProfileId?: string; 
  public get switchProfileId() {
    return this.getStringAttribute('switch_profile_id');
  }
  public set switchProfileId(value: string) {
    this._switchProfileId = value;
  }
  public resetSwitchProfileId() {
    this._switchProfileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchProfileIdInput() {
    return this._switchProfileId;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      address: cdktf.stringToTerraform(this._address),
      floor_plan_id: cdktf.stringToTerraform(this._floorPlanId),
      lat: cdktf.numberToTerraform(this._lat),
      lng: cdktf.numberToTerraform(this._lng),
      move_map_marker: cdktf.booleanToTerraform(this._moveMapMarker),
      name: cdktf.stringToTerraform(this._name),
      notes: cdktf.stringToTerraform(this._notes),
      serial: cdktf.stringToTerraform(this._serial),
      switch_profile_id: cdktf.stringToTerraform(this._switchProfileId),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      address: {
        value: cdktf.stringToHclTerraform(this._address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      floor_plan_id: {
        value: cdktf.stringToHclTerraform(this._floorPlanId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lat: {
        value: cdktf.numberToHclTerraform(this._lat),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      lng: {
        value: cdktf.numberToHclTerraform(this._lng),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      move_map_marker: {
        value: cdktf.booleanToHclTerraform(this._moveMapMarker),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notes: {
        value: cdktf.stringToHclTerraform(this._notes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      serial: {
        value: cdktf.stringToHclTerraform(this._serial),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      switch_profile_id: {
        value: cdktf.stringToHclTerraform(this._switchProfileId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
