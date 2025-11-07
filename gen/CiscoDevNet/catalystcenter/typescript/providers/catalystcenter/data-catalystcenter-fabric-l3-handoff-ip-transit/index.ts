// https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/data-sources/fabric_l3_handoff_ip_transit
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCatalystcenterFabricL3HandoffIpTransitConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the fabric this device belongs to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/data-sources/fabric_l3_handoff_ip_transit#fabric_id DataCatalystcenterFabricL3HandoffIpTransit#fabric_id}
  */
  readonly fabricId: string;
  /**
  * The id of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/data-sources/fabric_l3_handoff_ip_transit#id DataCatalystcenterFabricL3HandoffIpTransit#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Network device ID of the fabric device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/data-sources/fabric_l3_handoff_ip_transit#network_device_id DataCatalystcenterFabricL3HandoffIpTransit#network_device_id}
  */
  readonly networkDeviceId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/data-sources/fabric_l3_handoff_ip_transit catalystcenter_fabric_l3_handoff_ip_transit}
*/
export class DataCatalystcenterFabricL3HandoffIpTransit extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "catalystcenter_fabric_l3_handoff_ip_transit";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCatalystcenterFabricL3HandoffIpTransit resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCatalystcenterFabricL3HandoffIpTransit to import
  * @param importFromId The id of the existing DataCatalystcenterFabricL3HandoffIpTransit that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/data-sources/fabric_l3_handoff_ip_transit#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCatalystcenterFabricL3HandoffIpTransit to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "catalystcenter_fabric_l3_handoff_ip_transit", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/data-sources/fabric_l3_handoff_ip_transit catalystcenter_fabric_l3_handoff_ip_transit} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCatalystcenterFabricL3HandoffIpTransitConfig
  */
  public constructor(scope: Construct, id: string, config: DataCatalystcenterFabricL3HandoffIpTransitConfig) {
    super(scope, id, {
      terraformResourceType: 'catalystcenter_fabric_l3_handoff_ip_transit',
      terraformGeneratorMetadata: {
        providerName: 'catalystcenter',
        providerVersion: '0.4.2'
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
    this._id = config.id;
    this._networkDeviceId = config.networkDeviceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // external_connectivity_ip_pool_name - computed: true, optional: false, required: false
  public get externalConnectivityIpPoolName() {
    return this.getStringAttribute('external_connectivity_ip_pool_name');
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

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // interface_name - computed: true, optional: false, required: false
  public get interfaceName() {
    return this.getStringAttribute('interface_name');
  }

  // local_ip_address - computed: true, optional: false, required: false
  public get localIpAddress() {
    return this.getStringAttribute('local_ip_address');
  }

  // local_ipv6_address - computed: true, optional: false, required: false
  public get localIpv6Address() {
    return this.getStringAttribute('local_ipv6_address');
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

  // remote_ip_address - computed: true, optional: false, required: false
  public get remoteIpAddress() {
    return this.getStringAttribute('remote_ip_address');
  }

  // remote_ipv6_address - computed: true, optional: false, required: false
  public get remoteIpv6Address() {
    return this.getStringAttribute('remote_ipv6_address');
  }

  // tcp_mss_adjustment - computed: true, optional: false, required: false
  public get tcpMssAdjustment() {
    return this.getNumberAttribute('tcp_mss_adjustment');
  }

  // transit_network_id - computed: true, optional: false, required: false
  public get transitNetworkId() {
    return this.getStringAttribute('transit_network_id');
  }

  // virtual_network_name - computed: true, optional: false, required: false
  public get virtualNetworkName() {
    return this.getStringAttribute('virtual_network_name');
  }

  // vlan_id - computed: true, optional: false, required: false
  public get vlanId() {
    return this.getNumberAttribute('vlan_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      fabric_id: cdktf.stringToTerraform(this._fabricId),
      id: cdktf.stringToTerraform(this._id),
      network_device_id: cdktf.stringToTerraform(this._networkDeviceId),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
