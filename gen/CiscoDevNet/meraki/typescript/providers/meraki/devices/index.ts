// https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/devices
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DevicesConfig extends cdktf.TerraformMetaArguments {
  /**
  * The list of items
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/devices#items Devices#items}
  */
  readonly items: DevicesItems[] | cdktf.IResolvable;
  /**
  * The organization ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/devices#organization_id Devices#organization_id}
  */
  readonly organizationId: string;
}
export interface DevicesItems {
  /**
  * The address of a device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/devices#address Devices#address}
  */
  readonly address?: string;
  /**
  * The floor plan to associate to this device. null disassociates the device from the floorplan.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/devices#floor_plan_id Devices#floor_plan_id}
  */
  readonly floorPlanId?: string;
  /**
  * The latitude of a device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/devices#lat Devices#lat}
  */
  readonly lat?: number;
  /**
  * The longitude of a device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/devices#lng Devices#lng}
  */
  readonly lng?: number;
  /**
  * Whether or not to set the latitude and longitude of a device based on the new address. Only applies when lat and lng are not specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/devices#move_map_marker Devices#move_map_marker}
  */
  readonly moveMapMarker?: boolean | cdktf.IResolvable;
  /**
  * The name of a device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/devices#name Devices#name}
  */
  readonly name?: string;
  /**
  * The notes for the device. String. Limited to 255 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/devices#notes Devices#notes}
  */
  readonly notes?: string;
  /**
  * Switch serial
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/devices#serial Devices#serial}
  */
  readonly serial: string;
  /**
  * The ID of a switch template to bind to the device (for available switch templates, see the `Switch Templates` endpoint). Use null to unbind the switch device from the current profile. For a device to be bindable to a switch template, it must (1) be a switch, and (2) belong to a network that is bound to a configuration template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/devices#switch_profile_id Devices#switch_profile_id}
  */
  readonly switchProfileId?: string;
  /**
  * The list of tags of a device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/devices#tags Devices#tags}
  */
  readonly tags?: string[];
}

export function devicesItemsToTerraform(struct?: DevicesItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    floor_plan_id: cdktf.stringToTerraform(struct!.floorPlanId),
    lat: cdktf.numberToTerraform(struct!.lat),
    lng: cdktf.numberToTerraform(struct!.lng),
    move_map_marker: cdktf.booleanToTerraform(struct!.moveMapMarker),
    name: cdktf.stringToTerraform(struct!.name),
    notes: cdktf.stringToTerraform(struct!.notes),
    serial: cdktf.stringToTerraform(struct!.serial),
    switch_profile_id: cdktf.stringToTerraform(struct!.switchProfileId),
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
  }
}


export function devicesItemsToHclTerraform(struct?: DevicesItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    floor_plan_id: {
      value: cdktf.stringToHclTerraform(struct!.floorPlanId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lat: {
      value: cdktf.numberToHclTerraform(struct!.lat),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lng: {
      value: cdktf.numberToHclTerraform(struct!.lng),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    move_map_marker: {
      value: cdktf.booleanToHclTerraform(struct!.moveMapMarker),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    notes: {
      value: cdktf.stringToHclTerraform(struct!.notes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    serial: {
      value: cdktf.stringToHclTerraform(struct!.serial),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    switch_profile_id: {
      value: cdktf.stringToHclTerraform(struct!.switchProfileId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DevicesItemsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DevicesItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._floorPlanId !== undefined) {
      hasAnyValues = true;
      internalValueResult.floorPlanId = this._floorPlanId;
    }
    if (this._lat !== undefined) {
      hasAnyValues = true;
      internalValueResult.lat = this._lat;
    }
    if (this._lng !== undefined) {
      hasAnyValues = true;
      internalValueResult.lng = this._lng;
    }
    if (this._moveMapMarker !== undefined) {
      hasAnyValues = true;
      internalValueResult.moveMapMarker = this._moveMapMarker;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._notes !== undefined) {
      hasAnyValues = true;
      internalValueResult.notes = this._notes;
    }
    if (this._serial !== undefined) {
      hasAnyValues = true;
      internalValueResult.serial = this._serial;
    }
    if (this._switchProfileId !== undefined) {
      hasAnyValues = true;
      internalValueResult.switchProfileId = this._switchProfileId;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevicesItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._floorPlanId = undefined;
      this._lat = undefined;
      this._lng = undefined;
      this._moveMapMarker = undefined;
      this._name = undefined;
      this._notes = undefined;
      this._serial = undefined;
      this._switchProfileId = undefined;
      this._tags = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._floorPlanId = value.floorPlanId;
      this._lat = value.lat;
      this._lng = value.lng;
      this._moveMapMarker = value.moveMapMarker;
      this._name = value.name;
      this._notes = value.notes;
      this._serial = value.serial;
      this._switchProfileId = value.switchProfileId;
      this._tags = value.tags;
    }
  }

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
}

export class DevicesItemsList extends cdktf.ComplexList {
  public internalValue? : DevicesItems[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DevicesItemsOutputReference {
    return new DevicesItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/devices meraki_devices}
*/
export class Devices extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_devices";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Devices resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Devices to import
  * @param importFromId The id of the existing Devices that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/devices#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Devices to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_devices", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/devices meraki_devices} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DevicesConfig
  */
  public constructor(scope: Construct, id: string, config: DevicesConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_devices',
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
    this._items.internalValue = config.items;
    this._organizationId = config.organizationId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // items - computed: false, optional: false, required: true
  private _items = new DevicesItemsList(this, "items", true);
  public get items() {
    return this._items;
  }
  public putItems(value: DevicesItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
  }

  // organization_id - computed: false, optional: false, required: true
  private _organizationId?: string; 
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }
  public set organizationId(value: string) {
    this._organizationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationIdInput() {
    return this._organizationId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      items: cdktf.listMapper(devicesItemsToTerraform, false)(this._items.internalValue),
      organization_id: cdktf.stringToTerraform(this._organizationId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      items: {
        value: cdktf.listMapperHcl(devicesItemsToHclTerraform, false)(this._items.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DevicesItemsList",
      },
      organization_id: {
        value: cdktf.stringToHclTerraform(this._organizationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
