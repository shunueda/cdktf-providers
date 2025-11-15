// https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.3/docs/resources/fabric_l2_virtual_network
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FabricL2VirtualNetworkConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the layer 3 virtual network associated with the layer 2 virtual network. This field is provided to support requests related to virtual network anchoring. The layer 3 virtual network must have already been added to the fabric before association. This field must either be present in all payload elements or none
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.3/docs/resources/fabric_l2_virtual_network#associated_l3_virtual_network_name FabricL2VirtualNetwork#associated_l3_virtual_network_name}
  */
  readonly associatedL3VirtualNetworkName?: string;
  /**
  * Set to true to enable wireless. Default is false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.3/docs/resources/fabric_l2_virtual_network#fabric_enabled_wireless FabricL2VirtualNetwork#fabric_enabled_wireless}
  */
  readonly fabricEnabledWireless?: boolean | cdktf.IResolvable;
  /**
  * ID of the fabric this layer 2 virtual network is to be assigned to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.3/docs/resources/fabric_l2_virtual_network#fabric_id FabricL2VirtualNetwork#fabric_id}
  */
  readonly fabricId: string;
  /**
  * The type of traffic that is served
  *   - Choices: `DATA`, `VOICE`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.3/docs/resources/fabric_l2_virtual_network#traffic_type FabricL2VirtualNetwork#traffic_type}
  */
  readonly trafficType: string;
  /**
  * ID of the VLAN of the layer 2 virtual network. Allowed VLAN range is 2-4093 except for reserved VLANs 1002-1005, and 2046. If deploying on a fabric zone, this vlanId must match the vlanId of the corresponding layer 2 virtual network on the fabric site
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.3/docs/resources/fabric_l2_virtual_network#vlan_id FabricL2VirtualNetwork#vlan_id}
  */
  readonly vlanId?: number;
  /**
  * Name of the VLAN of the layer 2 virtual network. Must contain only alphanumeric characters, underscores, and hyphens
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.3/docs/resources/fabric_l2_virtual_network#vlan_name FabricL2VirtualNetwork#vlan_name}
  */
  readonly vlanName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.3/docs/resources/fabric_l2_virtual_network catalystcenter_fabric_l2_virtual_network}
*/
export class FabricL2VirtualNetwork extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "catalystcenter_fabric_l2_virtual_network";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FabricL2VirtualNetwork resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FabricL2VirtualNetwork to import
  * @param importFromId The id of the existing FabricL2VirtualNetwork that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.3/docs/resources/fabric_l2_virtual_network#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FabricL2VirtualNetwork to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "catalystcenter_fabric_l2_virtual_network", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.3/docs/resources/fabric_l2_virtual_network catalystcenter_fabric_l2_virtual_network} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FabricL2VirtualNetworkConfig
  */
  public constructor(scope: Construct, id: string, config: FabricL2VirtualNetworkConfig) {
    super(scope, id, {
      terraformResourceType: 'catalystcenter_fabric_l2_virtual_network',
      terraformGeneratorMetadata: {
        providerName: 'catalystcenter',
        providerVersion: '0.4.3',
        providerVersionConstraint: '0.4.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._associatedL3VirtualNetworkName = config.associatedL3VirtualNetworkName;
    this._fabricEnabledWireless = config.fabricEnabledWireless;
    this._fabricId = config.fabricId;
    this._trafficType = config.trafficType;
    this._vlanId = config.vlanId;
    this._vlanName = config.vlanName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // associated_l3_virtual_network_name - computed: false, optional: true, required: false
  private _associatedL3VirtualNetworkName?: string; 
  public get associatedL3VirtualNetworkName() {
    return this.getStringAttribute('associated_l3_virtual_network_name');
  }
  public set associatedL3VirtualNetworkName(value: string) {
    this._associatedL3VirtualNetworkName = value;
  }
  public resetAssociatedL3VirtualNetworkName() {
    this._associatedL3VirtualNetworkName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get associatedL3VirtualNetworkNameInput() {
    return this._associatedL3VirtualNetworkName;
  }

  // fabric_enabled_wireless - computed: false, optional: true, required: false
  private _fabricEnabledWireless?: boolean | cdktf.IResolvable; 
  public get fabricEnabledWireless() {
    return this.getBooleanAttribute('fabric_enabled_wireless');
  }
  public set fabricEnabledWireless(value: boolean | cdktf.IResolvable) {
    this._fabricEnabledWireless = value;
  }
  public resetFabricEnabledWireless() {
    this._fabricEnabledWireless = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fabricEnabledWirelessInput() {
    return this._fabricEnabledWireless;
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

  // traffic_type - computed: false, optional: false, required: true
  private _trafficType?: string; 
  public get trafficType() {
    return this.getStringAttribute('traffic_type');
  }
  public set trafficType(value: string) {
    this._trafficType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficTypeInput() {
    return this._trafficType;
  }

  // vlan_id - computed: false, optional: true, required: false
  private _vlanId?: number; 
  public get vlanId() {
    return this.getNumberAttribute('vlan_id');
  }
  public set vlanId(value: number) {
    this._vlanId = value;
  }
  public resetVlanId() {
    this._vlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanIdInput() {
    return this._vlanId;
  }

  // vlan_name - computed: false, optional: false, required: true
  private _vlanName?: string; 
  public get vlanName() {
    return this.getStringAttribute('vlan_name');
  }
  public set vlanName(value: string) {
    this._vlanName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanNameInput() {
    return this._vlanName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      associated_l3_virtual_network_name: cdktf.stringToTerraform(this._associatedL3VirtualNetworkName),
      fabric_enabled_wireless: cdktf.booleanToTerraform(this._fabricEnabledWireless),
      fabric_id: cdktf.stringToTerraform(this._fabricId),
      traffic_type: cdktf.stringToTerraform(this._trafficType),
      vlan_id: cdktf.numberToTerraform(this._vlanId),
      vlan_name: cdktf.stringToTerraform(this._vlanName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      associated_l3_virtual_network_name: {
        value: cdktf.stringToHclTerraform(this._associatedL3VirtualNetworkName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fabric_enabled_wireless: {
        value: cdktf.booleanToHclTerraform(this._fabricEnabledWireless),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      fabric_id: {
        value: cdktf.stringToHclTerraform(this._fabricId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      traffic_type: {
        value: cdktf.stringToHclTerraform(this._trafficType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vlan_id: {
        value: cdktf.numberToHclTerraform(this._vlanId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vlan_name: {
        value: cdktf.stringToHclTerraform(this._vlanName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
