// https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/fabric_l2_handoff
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FabricL2HandoffConfig extends cdktf.TerraformMetaArguments {
  /**
  * External VLAN number into which the fabric must be extended. Allowed VLAN range is 2-4094 except for reserved vlans (1, 1002-1005, 2046, 4094)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/fabric_l2_handoff#external_vlan_id FabricL2Handoff#external_vlan_id}
  */
  readonly externalVlanId: number;
  /**
  * ID of the fabric this device belongs to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/fabric_l2_handoff#fabric_id FabricL2Handoff#fabric_id}
  */
  readonly fabricId: string;
  /**
  * Interface name of the layer 2 handoff. E.g., GigabitEthernet1/0/4
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/fabric_l2_handoff#interface_name FabricL2Handoff#interface_name}
  */
  readonly interfaceName: string;
  /**
  * VLAN number associated with this fabric. Allowed VLAN range is 2-4094 except for reserved vlans (1, 1002-1005, 2046, 4094)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/fabric_l2_handoff#internal_vlan_id FabricL2Handoff#internal_vlan_id}
  */
  readonly internalVlanId: number;
  /**
  * Network device ID of the fabric device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/fabric_l2_handoff#network_device_id FabricL2Handoff#network_device_id}
  */
  readonly networkDeviceId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/fabric_l2_handoff catalystcenter_fabric_l2_handoff}
*/
export class FabricL2Handoff extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "catalystcenter_fabric_l2_handoff";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FabricL2Handoff resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FabricL2Handoff to import
  * @param importFromId The id of the existing FabricL2Handoff that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/fabric_l2_handoff#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FabricL2Handoff to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "catalystcenter_fabric_l2_handoff", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/fabric_l2_handoff catalystcenter_fabric_l2_handoff} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FabricL2HandoffConfig
  */
  public constructor(scope: Construct, id: string, config: FabricL2HandoffConfig) {
    super(scope, id, {
      terraformResourceType: 'catalystcenter_fabric_l2_handoff',
      terraformGeneratorMetadata: {
        providerName: 'catalystcenter',
        providerVersion: '0.4.2',
        providerVersionConstraint: '0.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._externalVlanId = config.externalVlanId;
    this._fabricId = config.fabricId;
    this._interfaceName = config.interfaceName;
    this._internalVlanId = config.internalVlanId;
    this._networkDeviceId = config.networkDeviceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // external_vlan_id - computed: false, optional: false, required: true
  private _externalVlanId?: number; 
  public get externalVlanId() {
    return this.getNumberAttribute('external_vlan_id');
  }
  public set externalVlanId(value: number) {
    this._externalVlanId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get externalVlanIdInput() {
    return this._externalVlanId;
  }

  // fabric_id - computed: false, optional: false, required: true
  private _fabricId?: string; 
  public get fabricId() {
    return this.getStringAttribute('fabric_id');
  }
  public set fabricId(value: string) {
    this._fabricId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fabricIdInput() {
    return this._fabricId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // interface_name - computed: false, optional: false, required: true
  private _interfaceName?: string; 
  public get interfaceName() {
    return this.getStringAttribute('interface_name');
  }
  public set interfaceName(value: string) {
    this._interfaceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceNameInput() {
    return this._interfaceName;
  }

  // internal_vlan_id - computed: false, optional: false, required: true
  private _internalVlanId?: number; 
  public get internalVlanId() {
    return this.getNumberAttribute('internal_vlan_id');
  }
  public set internalVlanId(value: number) {
    this._internalVlanId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get internalVlanIdInput() {
    return this._internalVlanId;
  }

  // network_device_id - computed: false, optional: false, required: true
  private _networkDeviceId?: string; 
  public get networkDeviceId() {
    return this.getStringAttribute('network_device_id');
  }
  public set networkDeviceId(value: string) {
    this._networkDeviceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkDeviceIdInput() {
    return this._networkDeviceId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      external_vlan_id: cdktf.numberToTerraform(this._externalVlanId),
      fabric_id: cdktf.stringToTerraform(this._fabricId),
      interface_name: cdktf.stringToTerraform(this._interfaceName),
      internal_vlan_id: cdktf.numberToTerraform(this._internalVlanId),
      network_device_id: cdktf.stringToTerraform(this._networkDeviceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      external_vlan_id: {
        value: cdktf.numberToHclTerraform(this._externalVlanId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fabric_id: {
        value: cdktf.stringToHclTerraform(this._fabricId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interface_name: {
        value: cdktf.stringToHclTerraform(this._interfaceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      internal_vlan_id: {
        value: cdktf.numberToHclTerraform(this._internalVlanId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      network_device_id: {
        value: cdktf.stringToHclTerraform(this._networkDeviceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
