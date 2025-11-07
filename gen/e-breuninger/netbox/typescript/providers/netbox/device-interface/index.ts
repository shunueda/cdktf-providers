// https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/device_interface
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DeviceInterfaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/device_interface#description DeviceInterface#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/device_interface#device_id DeviceInterface#device_id}
  */
  readonly deviceId: number;
  /**
  * Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/device_interface#enabled DeviceInterface#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/device_interface#id DeviceInterface#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/device_interface#label DeviceInterface#label}
  */
  readonly label?: string;
  /**
  * If this device is a member of a LAG group, you can reference the LAG interface here.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/device_interface#lag_device_interface_id DeviceInterface#lag_device_interface_id}
  */
  readonly lagDeviceInterfaceId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/device_interface#mgmtonly DeviceInterface#mgmtonly}
  */
  readonly mgmtonly?: boolean | cdktf.IResolvable;
  /**
  * Valid values are `access`, `tagged`, `tagged-all` and `q-in-q`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/device_interface#mode DeviceInterface#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/device_interface#mtu DeviceInterface#mtu}
  */
  readonly mtu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/device_interface#name DeviceInterface#name}
  */
  readonly name: string;
  /**
  * The netbox_device_interface id of the parent interface. Useful if this interface is a logical interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/device_interface#parent_device_interface_id DeviceInterface#parent_device_interface_id}
  */
  readonly parentDeviceInterfaceId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/device_interface#speed DeviceInterface#speed}
  */
  readonly speed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/device_interface#tagged_vlans DeviceInterface#tagged_vlans}
  */
  readonly taggedVlans?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/device_interface#tags DeviceInterface#tags}
  */
  readonly tags?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/device_interface#type DeviceInterface#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/device_interface#untagged_vlan DeviceInterface#untagged_vlan}
  */
  readonly untaggedVlan?: number;
}
export interface DeviceInterfaceMacAddresses {
}

export function deviceInterfaceMacAddressesToTerraform(struct?: DeviceInterfaceMacAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function deviceInterfaceMacAddressesToHclTerraform(struct?: DeviceInterfaceMacAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DeviceInterfaceMacAddressesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DeviceInterfaceMacAddresses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeviceInterfaceMacAddresses | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // mac_address - computed: true, optional: false, required: false
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }
}

export class DeviceInterfaceMacAddressesList extends cdktf.ComplexList {

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
  public get(index: number): DeviceInterfaceMacAddressesOutputReference {
    return new DeviceInterfaceMacAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/device_interface netbox_device_interface}
*/
export class DeviceInterface extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netbox_device_interface";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DeviceInterface resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DeviceInterface to import
  * @param importFromId The id of the existing DeviceInterface that should be imported. Refer to the {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/device_interface#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DeviceInterface to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netbox_device_interface", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/device_interface netbox_device_interface} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DeviceInterfaceConfig
  */
  public constructor(scope: Construct, id: string, config: DeviceInterfaceConfig) {
    super(scope, id, {
      terraformResourceType: 'netbox_device_interface',
      terraformGeneratorMetadata: {
        providerName: 'netbox',
        providerVersion: '5.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._deviceId = config.deviceId;
    this._enabled = config.enabled;
    this._id = config.id;
    this._label = config.label;
    this._lagDeviceInterfaceId = config.lagDeviceInterfaceId;
    this._mgmtonly = config.mgmtonly;
    this._mode = config.mode;
    this._mtu = config.mtu;
    this._name = config.name;
    this._parentDeviceInterfaceId = config.parentDeviceInterfaceId;
    this._speed = config.speed;
    this._taggedVlans = config.taggedVlans;
    this._tags = config.tags;
    this._type = config.type;
    this._untaggedVlan = config.untaggedVlan;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // device_id - computed: false, optional: false, required: true
  private _deviceId?: number; 
  public get deviceId() {
    return this.getNumberAttribute('device_id');
  }
  public set deviceId(value: number) {
    this._deviceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceIdInput() {
    return this._deviceId;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // label - computed: false, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // lag_device_interface_id - computed: false, optional: true, required: false
  private _lagDeviceInterfaceId?: number; 
  public get lagDeviceInterfaceId() {
    return this.getNumberAttribute('lag_device_interface_id');
  }
  public set lagDeviceInterfaceId(value: number) {
    this._lagDeviceInterfaceId = value;
  }
  public resetLagDeviceInterfaceId() {
    this._lagDeviceInterfaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lagDeviceInterfaceIdInput() {
    return this._lagDeviceInterfaceId;
  }

  // mac_address - computed: true, optional: false, required: false
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }

  // mac_addresses - computed: true, optional: false, required: false
  private _macAddresses = new DeviceInterfaceMacAddressesList(this, "mac_addresses", true);
  public get macAddresses() {
    return this._macAddresses;
  }

  // mgmtonly - computed: false, optional: true, required: false
  private _mgmtonly?: boolean | cdktf.IResolvable; 
  public get mgmtonly() {
    return this.getBooleanAttribute('mgmtonly');
  }
  public set mgmtonly(value: boolean | cdktf.IResolvable) {
    this._mgmtonly = value;
  }
  public resetMgmtonly() {
    this._mgmtonly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mgmtonlyInput() {
    return this._mgmtonly;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // mtu - computed: false, optional: true, required: false
  private _mtu?: number; 
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }
  public set mtu(value: number) {
    this._mtu = value;
  }
  public resetMtu() {
    this._mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuInput() {
    return this._mtu;
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

  // parent_device_interface_id - computed: false, optional: true, required: false
  private _parentDeviceInterfaceId?: number; 
  public get parentDeviceInterfaceId() {
    return this.getNumberAttribute('parent_device_interface_id');
  }
  public set parentDeviceInterfaceId(value: number) {
    this._parentDeviceInterfaceId = value;
  }
  public resetParentDeviceInterfaceId() {
    this._parentDeviceInterfaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentDeviceInterfaceIdInput() {
    return this._parentDeviceInterfaceId;
  }

  // speed - computed: false, optional: true, required: false
  private _speed?: number; 
  public get speed() {
    return this.getNumberAttribute('speed');
  }
  public set speed(value: number) {
    this._speed = value;
  }
  public resetSpeed() {
    this._speed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get speedInput() {
    return this._speed;
  }

  // tagged_vlans - computed: false, optional: true, required: false
  private _taggedVlans?: number[]; 
  public get taggedVlans() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('tagged_vlans')));
  }
  public set taggedVlans(value: number[]) {
    this._taggedVlans = value;
  }
  public resetTaggedVlans() {
    this._taggedVlans = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taggedVlansInput() {
    return this._taggedVlans;
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

  // tags_all - computed: true, optional: false, required: false
  public get tagsAll() {
    return cdktf.Fn.tolist(this.getListAttribute('tags_all'));
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // untagged_vlan - computed: false, optional: true, required: false
  private _untaggedVlan?: number; 
  public get untaggedVlan() {
    return this.getNumberAttribute('untagged_vlan');
  }
  public set untaggedVlan(value: number) {
    this._untaggedVlan = value;
  }
  public resetUntaggedVlan() {
    this._untaggedVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get untaggedVlanInput() {
    return this._untaggedVlan;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      device_id: cdktf.numberToTerraform(this._deviceId),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      label: cdktf.stringToTerraform(this._label),
      lag_device_interface_id: cdktf.numberToTerraform(this._lagDeviceInterfaceId),
      mgmtonly: cdktf.booleanToTerraform(this._mgmtonly),
      mode: cdktf.stringToTerraform(this._mode),
      mtu: cdktf.numberToTerraform(this._mtu),
      name: cdktf.stringToTerraform(this._name),
      parent_device_interface_id: cdktf.numberToTerraform(this._parentDeviceInterfaceId),
      speed: cdktf.numberToTerraform(this._speed),
      tagged_vlans: cdktf.listMapper(cdktf.numberToTerraform, false)(this._taggedVlans),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      type: cdktf.stringToTerraform(this._type),
      untagged_vlan: cdktf.numberToTerraform(this._untaggedVlan),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_id: {
        value: cdktf.numberToHclTerraform(this._deviceId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      label: {
        value: cdktf.stringToHclTerraform(this._label),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lag_device_interface_id: {
        value: cdktf.numberToHclTerraform(this._lagDeviceInterfaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mgmtonly: {
        value: cdktf.booleanToHclTerraform(this._mgmtonly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mode: {
        value: cdktf.stringToHclTerraform(this._mode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mtu: {
        value: cdktf.numberToHclTerraform(this._mtu),
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
      parent_device_interface_id: {
        value: cdktf.numberToHclTerraform(this._parentDeviceInterfaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      speed: {
        value: cdktf.numberToHclTerraform(this._speed),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tagged_vlans: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._taggedVlans),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      untagged_vlan: {
        value: cdktf.numberToHclTerraform(this._untaggedVlan),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
