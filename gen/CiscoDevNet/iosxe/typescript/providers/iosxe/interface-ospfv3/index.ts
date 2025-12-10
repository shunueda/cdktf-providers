// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/interface_ospfv3
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InterfaceOspfv3Config extends cdktf.TerraformMetaArguments {
  /**
  * Static route cost value of the interface
  *   - Range: `1`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/interface_ospfv3#cost InterfaceOspfv3#cost}
  */
  readonly cost?: number;
  /**
  * Configure behavior when deleting/destroying the resource. Either delete the entire object (YANG container) being managed, or only delete the individual resource attributes configured explicitly and leave everything else as-is. Default value is `all`.
  *   - Choices: `all`, `attributes`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/interface_ospfv3#delete_mode InterfaceOspfv3#delete_mode}
  */
  readonly deleteMode?: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/interface_ospfv3#device InterfaceOspfv3#device}
  */
  readonly device?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/interface_ospfv3#name InterfaceOspfv3#name}
  */
  readonly name: string;
  /**
  * Specify OSPF broadcast multi-access network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/interface_ospfv3#network_type_broadcast InterfaceOspfv3#network_type_broadcast}
  */
  readonly networkTypeBroadcast?: boolean | cdktf.IResolvable;
  /**
  * Specify OSPF NBMA network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/interface_ospfv3#network_type_non_broadcast InterfaceOspfv3#network_type_non_broadcast}
  */
  readonly networkTypeNonBroadcast?: boolean | cdktf.IResolvable;
  /**
  * Specify OSPF point-to-multipoint network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/interface_ospfv3#network_type_point_to_multipoint InterfaceOspfv3#network_type_point_to_multipoint}
  */
  readonly networkTypePointToMultipoint?: boolean | cdktf.IResolvable;
  /**
  * Specify OSPF point-to-point network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/interface_ospfv3#network_type_point_to_point InterfaceOspfv3#network_type_point_to_point}
  */
  readonly networkTypePointToPoint?: boolean | cdktf.IResolvable;
  /**
  * Interface type
  *   - Choices: `GigabitEthernet`, `TwoGigabitEthernet`, `FiveGigabitEthernet`, `TenGigabitEthernet`, `TwentyFiveGigE`, `FortyGigabitEthernet`, `HundredGigE`, `TwoHundredGigE`, `FourHundredGigE`, `Loopback`, `Vlan`, `Port-channel`, `Port-channel-subinterface/Port-channel`, `Tunnel`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/interface_ospfv3#type InterfaceOspfv3#type}
  */
  readonly type: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/interface_ospfv3 iosxe_interface_ospfv3}
*/
export class InterfaceOspfv3 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_interface_ospfv3";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a InterfaceOspfv3 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the InterfaceOspfv3 to import
  * @param importFromId The id of the existing InterfaceOspfv3 that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/interface_ospfv3#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the InterfaceOspfv3 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_interface_ospfv3", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/interface_ospfv3 iosxe_interface_ospfv3} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InterfaceOspfv3Config
  */
  public constructor(scope: Construct, id: string, config: InterfaceOspfv3Config) {
    super(scope, id, {
      terraformResourceType: 'iosxe_interface_ospfv3',
      terraformGeneratorMetadata: {
        providerName: 'iosxe',
        providerVersion: '0.12.0',
        providerVersionConstraint: '0.12.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cost = config.cost;
    this._deleteMode = config.deleteMode;
    this._device = config.device;
    this._name = config.name;
    this._networkTypeBroadcast = config.networkTypeBroadcast;
    this._networkTypeNonBroadcast = config.networkTypeNonBroadcast;
    this._networkTypePointToMultipoint = config.networkTypePointToMultipoint;
    this._networkTypePointToPoint = config.networkTypePointToPoint;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cost - computed: false, optional: true, required: false
  private _cost?: number; 
  public get cost() {
    return this.getNumberAttribute('cost');
  }
  public set cost(value: number) {
    this._cost = value;
  }
  public resetCost() {
    this._cost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get costInput() {
    return this._cost;
  }

  // delete_mode - computed: false, optional: true, required: false
  private _deleteMode?: string; 
  public get deleteMode() {
    return this.getStringAttribute('delete_mode');
  }
  public set deleteMode(value: string) {
    this._deleteMode = value;
  }
  public resetDeleteMode() {
    this._deleteMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteModeInput() {
    return this._deleteMode;
  }

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // network_type_broadcast - computed: false, optional: true, required: false
  private _networkTypeBroadcast?: boolean | cdktf.IResolvable; 
  public get networkTypeBroadcast() {
    return this.getBooleanAttribute('network_type_broadcast');
  }
  public set networkTypeBroadcast(value: boolean | cdktf.IResolvable) {
    this._networkTypeBroadcast = value;
  }
  public resetNetworkTypeBroadcast() {
    this._networkTypeBroadcast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkTypeBroadcastInput() {
    return this._networkTypeBroadcast;
  }

  // network_type_non_broadcast - computed: false, optional: true, required: false
  private _networkTypeNonBroadcast?: boolean | cdktf.IResolvable; 
  public get networkTypeNonBroadcast() {
    return this.getBooleanAttribute('network_type_non_broadcast');
  }
  public set networkTypeNonBroadcast(value: boolean | cdktf.IResolvable) {
    this._networkTypeNonBroadcast = value;
  }
  public resetNetworkTypeNonBroadcast() {
    this._networkTypeNonBroadcast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkTypeNonBroadcastInput() {
    return this._networkTypeNonBroadcast;
  }

  // network_type_point_to_multipoint - computed: false, optional: true, required: false
  private _networkTypePointToMultipoint?: boolean | cdktf.IResolvable; 
  public get networkTypePointToMultipoint() {
    return this.getBooleanAttribute('network_type_point_to_multipoint');
  }
  public set networkTypePointToMultipoint(value: boolean | cdktf.IResolvable) {
    this._networkTypePointToMultipoint = value;
  }
  public resetNetworkTypePointToMultipoint() {
    this._networkTypePointToMultipoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkTypePointToMultipointInput() {
    return this._networkTypePointToMultipoint;
  }

  // network_type_point_to_point - computed: false, optional: true, required: false
  private _networkTypePointToPoint?: boolean | cdktf.IResolvable; 
  public get networkTypePointToPoint() {
    return this.getBooleanAttribute('network_type_point_to_point');
  }
  public set networkTypePointToPoint(value: boolean | cdktf.IResolvable) {
    this._networkTypePointToPoint = value;
  }
  public resetNetworkTypePointToPoint() {
    this._networkTypePointToPoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkTypePointToPointInput() {
    return this._networkTypePointToPoint;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cost: cdktf.numberToTerraform(this._cost),
      delete_mode: cdktf.stringToTerraform(this._deleteMode),
      device: cdktf.stringToTerraform(this._device),
      name: cdktf.stringToTerraform(this._name),
      network_type_broadcast: cdktf.booleanToTerraform(this._networkTypeBroadcast),
      network_type_non_broadcast: cdktf.booleanToTerraform(this._networkTypeNonBroadcast),
      network_type_point_to_multipoint: cdktf.booleanToTerraform(this._networkTypePointToMultipoint),
      network_type_point_to_point: cdktf.booleanToTerraform(this._networkTypePointToPoint),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cost: {
        value: cdktf.numberToHclTerraform(this._cost),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      delete_mode: {
        value: cdktf.stringToHclTerraform(this._deleteMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device: {
        value: cdktf.stringToHclTerraform(this._device),
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
      network_type_broadcast: {
        value: cdktf.booleanToHclTerraform(this._networkTypeBroadcast),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      network_type_non_broadcast: {
        value: cdktf.booleanToHclTerraform(this._networkTypeNonBroadcast),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      network_type_point_to_multipoint: {
        value: cdktf.booleanToHclTerraform(this._networkTypePointToMultipoint),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      network_type_point_to_point: {
        value: cdktf.booleanToHclTerraform(this._networkTypePointToPoint),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
