// https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.5/docs/data-sources/fabric_l2_virtual_network
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCatalystcenterFabricL2VirtualNetworkConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the fabric this layer 2 virtual network is to be assigned to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.5/docs/data-sources/fabric_l2_virtual_network#fabric_id DataCatalystcenterFabricL2VirtualNetwork#fabric_id}
  */
  readonly fabricId: string;
  /**
  * Name of the VLAN of the layer 2 virtual network. Must contain only alphanumeric characters, underscores, and hyphens
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.5/docs/data-sources/fabric_l2_virtual_network#vlan_name DataCatalystcenterFabricL2VirtualNetwork#vlan_name}
  */
  readonly vlanName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.5/docs/data-sources/fabric_l2_virtual_network catalystcenter_fabric_l2_virtual_network}
*/
export class DataCatalystcenterFabricL2VirtualNetwork extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "catalystcenter_fabric_l2_virtual_network";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCatalystcenterFabricL2VirtualNetwork resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCatalystcenterFabricL2VirtualNetwork to import
  * @param importFromId The id of the existing DataCatalystcenterFabricL2VirtualNetwork that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.5/docs/data-sources/fabric_l2_virtual_network#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCatalystcenterFabricL2VirtualNetwork to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "catalystcenter_fabric_l2_virtual_network", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.5/docs/data-sources/fabric_l2_virtual_network catalystcenter_fabric_l2_virtual_network} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCatalystcenterFabricL2VirtualNetworkConfig
  */
  public constructor(scope: Construct, id: string, config: DataCatalystcenterFabricL2VirtualNetworkConfig) {
    super(scope, id, {
      terraformResourceType: 'catalystcenter_fabric_l2_virtual_network',
      terraformGeneratorMetadata: {
        providerName: 'catalystcenter',
        providerVersion: '0.4.5',
        providerVersionConstraint: '0.4.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._fabricId = config.fabricId;
    this._vlanName = config.vlanName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // associated_l3_virtual_network_name - computed: true, optional: false, required: false
  public get associatedL3VirtualNetworkName() {
    return this.getStringAttribute('associated_l3_virtual_network_name');
  }

  // fabric_enabled_wireless - computed: true, optional: false, required: false
  public get fabricEnabledWireless() {
    return this.getBooleanAttribute('fabric_enabled_wireless');
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

  // traffic_type - computed: true, optional: false, required: false
  public get trafficType() {
    return this.getStringAttribute('traffic_type');
  }

  // vlan_id - computed: true, optional: false, required: false
  public get vlanId() {
    return this.getNumberAttribute('vlan_id');
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
      fabric_id: cdktf.stringToTerraform(this._fabricId),
      vlan_name: cdktf.stringToTerraform(this._vlanName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      fabric_id: {
        value: cdktf.stringToHclTerraform(this._fabricId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
