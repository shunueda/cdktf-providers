// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/data-sources/interface_switchport
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIosxeInterfaceSwitchportConfig extends cdktf.TerraformMetaArguments {
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/data-sources/interface_switchport#device DataIosxeInterfaceSwitchport#device}
  */
  readonly device?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/data-sources/interface_switchport#name DataIosxeInterfaceSwitchport#name}
  */
  readonly name: string;
  /**
  * Interface type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/data-sources/interface_switchport#type DataIosxeInterfaceSwitchport#type}
  */
  readonly type: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/data-sources/interface_switchport iosxe_interface_switchport}
*/
export class DataIosxeInterfaceSwitchport extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_interface_switchport";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIosxeInterfaceSwitchport resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIosxeInterfaceSwitchport to import
  * @param importFromId The id of the existing DataIosxeInterfaceSwitchport that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/data-sources/interface_switchport#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIosxeInterfaceSwitchport to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_interface_switchport", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/data-sources/interface_switchport iosxe_interface_switchport} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIosxeInterfaceSwitchportConfig
  */
  public constructor(scope: Construct, id: string, config: DataIosxeInterfaceSwitchportConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxe_interface_switchport',
      terraformGeneratorMetadata: {
        providerName: 'iosxe',
        providerVersion: '0.10.2',
        providerVersionConstraint: '0.10.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._device = config.device;
    this._name = config.name;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_vlan - computed: true, optional: false, required: false
  public get accessVlan() {
    return this.getStringAttribute('access_vlan');
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

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getBooleanAttribute('host');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // mode_access - computed: true, optional: false, required: false
  public get modeAccess() {
    return this.getBooleanAttribute('mode_access');
  }

  // mode_dot1q_tunnel - computed: true, optional: false, required: false
  public get modeDot1QTunnel() {
    return this.getBooleanAttribute('mode_dot1q_tunnel');
  }

  // mode_private_vlan_host - computed: true, optional: false, required: false
  public get modePrivateVlanHost() {
    return this.getBooleanAttribute('mode_private_vlan_host');
  }

  // mode_private_vlan_promiscuous - computed: true, optional: false, required: false
  public get modePrivateVlanPromiscuous() {
    return this.getBooleanAttribute('mode_private_vlan_promiscuous');
  }

  // mode_private_vlan_trunk - computed: true, optional: false, required: false
  public get modePrivateVlanTrunk() {
    return this.getBooleanAttribute('mode_private_vlan_trunk');
  }

  // mode_trunk - computed: true, optional: false, required: false
  public get modeTrunk() {
    return this.getBooleanAttribute('mode_trunk');
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

  // nonegotiate - computed: true, optional: false, required: false
  public get nonegotiate() {
    return this.getBooleanAttribute('nonegotiate');
  }

  // trunk_allowed_vlans - computed: true, optional: false, required: false
  public get trunkAllowedVlans() {
    return this.getStringAttribute('trunk_allowed_vlans');
  }

  // trunk_allowed_vlans_none - computed: true, optional: false, required: false
  public get trunkAllowedVlansNone() {
    return this.getBooleanAttribute('trunk_allowed_vlans_none');
  }

  // trunk_native_vlan - computed: true, optional: false, required: false
  public get trunkNativeVlan() {
    return this.getNumberAttribute('trunk_native_vlan');
  }

  // trunk_native_vlan_tag - computed: true, optional: false, required: false
  public get trunkNativeVlanTag() {
    return this.getBooleanAttribute('trunk_native_vlan_tag');
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
      device: cdktf.stringToTerraform(this._device),
      name: cdktf.stringToTerraform(this._name),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
