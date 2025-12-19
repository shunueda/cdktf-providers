// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.5/docs/resources/vlan_access_map
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VlanAccessMapConfig extends cdktf.TerraformMetaArguments {
  /**
  * Take the action
  *   - Choices: `drop`, `forward`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.5/docs/resources/vlan_access_map#action VlanAccessMap#action}
  */
  readonly action?: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.5/docs/resources/vlan_access_map#device VlanAccessMap#device}
  */
  readonly device?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.5/docs/resources/vlan_access_map#match_ip_address VlanAccessMap#match_ip_address}
  */
  readonly matchIpAddress?: string[];
  /**
  * Match IPv6 address to access control.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.5/docs/resources/vlan_access_map#match_ipv6_address VlanAccessMap#match_ipv6_address}
  */
  readonly matchIpv6Address?: string[];
  /**
  * Vlan access map tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.5/docs/resources/vlan_access_map#name VlanAccessMap#name}
  */
  readonly name: string;
  /**
  * Sequence to insert to/delete from existing vlan access-map entry
  *   - Range: `0`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.5/docs/resources/vlan_access_map#sequence VlanAccessMap#sequence}
  */
  readonly sequence: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.5/docs/resources/vlan_access_map iosxe_vlan_access_map}
*/
export class VlanAccessMap extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_vlan_access_map";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VlanAccessMap resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VlanAccessMap to import
  * @param importFromId The id of the existing VlanAccessMap that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.5/docs/resources/vlan_access_map#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VlanAccessMap to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_vlan_access_map", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.5/docs/resources/vlan_access_map iosxe_vlan_access_map} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VlanAccessMapConfig
  */
  public constructor(scope: Construct, id: string, config: VlanAccessMapConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxe_vlan_access_map',
      terraformGeneratorMetadata: {
        providerName: 'iosxe',
        providerVersion: '0.14.5',
        providerVersionConstraint: '0.14.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._action = config.action;
    this._device = config.device;
    this._matchIpAddress = config.matchIpAddress;
    this._matchIpv6Address = config.matchIpv6Address;
    this._name = config.name;
    this._sequence = config.sequence;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
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

  // match_ip_address - computed: false, optional: true, required: false
  private _matchIpAddress?: string[]; 
  public get matchIpAddress() {
    return this.getListAttribute('match_ip_address');
  }
  public set matchIpAddress(value: string[]) {
    this._matchIpAddress = value;
  }
  public resetMatchIpAddress() {
    this._matchIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchIpAddressInput() {
    return this._matchIpAddress;
  }

  // match_ipv6_address - computed: false, optional: true, required: false
  private _matchIpv6Address?: string[]; 
  public get matchIpv6Address() {
    return this.getListAttribute('match_ipv6_address');
  }
  public set matchIpv6Address(value: string[]) {
    this._matchIpv6Address = value;
  }
  public resetMatchIpv6Address() {
    this._matchIpv6Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchIpv6AddressInput() {
    return this._matchIpv6Address;
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

  // sequence - computed: false, optional: false, required: true
  private _sequence?: number; 
  public get sequence() {
    return this.getNumberAttribute('sequence');
  }
  public set sequence(value: number) {
    this._sequence = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sequenceInput() {
    return this._sequence;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      device: cdktf.stringToTerraform(this._device),
      match_ip_address: cdktf.listMapper(cdktf.stringToTerraform, false)(this._matchIpAddress),
      match_ipv6_address: cdktf.listMapper(cdktf.stringToTerraform, false)(this._matchIpv6Address),
      name: cdktf.stringToTerraform(this._name),
      sequence: cdktf.numberToTerraform(this._sequence),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.stringToHclTerraform(this._action),
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
      match_ip_address: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._matchIpAddress),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      match_ipv6_address: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._matchIpv6Address),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sequence: {
        value: cdktf.numberToHclTerraform(this._sequence),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
