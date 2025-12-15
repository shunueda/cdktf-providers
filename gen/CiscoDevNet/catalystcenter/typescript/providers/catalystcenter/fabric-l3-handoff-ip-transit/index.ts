// https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/fabric_l3_handoff_ip_transit
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FabricL3HandoffIpTransitConfig extends cdktf.TerraformMetaArguments {
  /**
  * External connectivity ip pool will be used by Catalyst Center to allocate IP address for the connection between the border node and peer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/fabric_l3_handoff_ip_transit#external_connectivity_ip_pool_name FabricL3HandoffIpTransit#external_connectivity_ip_pool_name}
  */
  readonly externalConnectivityIpPoolName?: string;
  /**
  * ID of the fabric this device belongs to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/fabric_l3_handoff_ip_transit#fabric_id FabricL3HandoffIpTransit#fabric_id}
  */
  readonly fabricId: string;
  /**
  * Interface name of the layer 3 handoff ip transit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/fabric_l3_handoff_ip_transit#interface_name FabricL3HandoffIpTransit#interface_name}
  */
  readonly interfaceName?: string;
  /**
  * Local ipv4 address for the selected virtual network. Enter the IP addresses and subnet mask in the CIDR notation (IP address/prefix-length). Not applicable if you have already provided an external connectivity ip pool name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/fabric_l3_handoff_ip_transit#local_ip_address FabricL3HandoffIpTransit#local_ip_address}
  */
  readonly localIpAddress?: string;
  /**
  * Local ipv6 address for the selected virtual network. Enter the IP addresses and subnet mask in the CIDR notation (IP address/prefix-length). Not applicable if you have already provided an external connectivity ip pool name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/fabric_l3_handoff_ip_transit#local_ipv6_address FabricL3HandoffIpTransit#local_ipv6_address}
  */
  readonly localIpv6Address?: string;
  /**
  * Network device ID of the fabric device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/fabric_l3_handoff_ip_transit#network_device_id FabricL3HandoffIpTransit#network_device_id}
  */
  readonly networkDeviceId: string;
  /**
  * Remote ipv4 address for the selected virtual network. Enter the IP addresses and subnet mask in the CIDR notation (IP address/prefix-length). Not applicable if you have already provided an external connectivity ip pool name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/fabric_l3_handoff_ip_transit#remote_ip_address FabricL3HandoffIpTransit#remote_ip_address}
  */
  readonly remoteIpAddress?: string;
  /**
  * Remote ipv6 address for the selected virtual network. Enter the IP addresses and subnet mask in the CIDR notation (IP address/prefix-length). Not applicable if you have already provided an external connectivity ip pool name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/fabric_l3_handoff_ip_transit#remote_ipv6_address FabricL3HandoffIpTransit#remote_ipv6_address}
  */
  readonly remoteIpv6Address?: string;
  /**
  * TCP maximum segment size (mss) value for the layer 3 handoff. Allowed range is [500-1440]. TCP MSS Adjustment value is applicable for the TCP sessions over both IPv4 and IPv6
  *   - Range: `500`-`1440`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/fabric_l3_handoff_ip_transit#tcp_mss_adjustment FabricL3HandoffIpTransit#tcp_mss_adjustment}
  */
  readonly tcpMssAdjustment?: number;
  /**
  * ID of the transit network of the layer 3 handoff ip transit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/fabric_l3_handoff_ip_transit#transit_network_id FabricL3HandoffIpTransit#transit_network_id}
  */
  readonly transitNetworkId: string;
  /**
  * Name of the virtual network associated with this fabric site
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/fabric_l3_handoff_ip_transit#virtual_network_name FabricL3HandoffIpTransit#virtual_network_name}
  */
  readonly virtualNetworkName: string;
  /**
  * VLAN number for the Switch Virtual Interface (SVI) used to establish BGP peering with the external domain for the virtual network. Allowed VLAN range is 2-4094 except for reserved vlans (1, 1002-1005, 2046, 4094)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/fabric_l3_handoff_ip_transit#vlan_id FabricL3HandoffIpTransit#vlan_id}
  */
  readonly vlanId: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/fabric_l3_handoff_ip_transit catalystcenter_fabric_l3_handoff_ip_transit}
*/
export class FabricL3HandoffIpTransit extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "catalystcenter_fabric_l3_handoff_ip_transit";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FabricL3HandoffIpTransit resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FabricL3HandoffIpTransit to import
  * @param importFromId The id of the existing FabricL3HandoffIpTransit that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/fabric_l3_handoff_ip_transit#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FabricL3HandoffIpTransit to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "catalystcenter_fabric_l3_handoff_ip_transit", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/resources/fabric_l3_handoff_ip_transit catalystcenter_fabric_l3_handoff_ip_transit} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FabricL3HandoffIpTransitConfig
  */
  public constructor(scope: Construct, id: string, config: FabricL3HandoffIpTransitConfig) {
    super(scope, id, {
      terraformResourceType: 'catalystcenter_fabric_l3_handoff_ip_transit',
      terraformGeneratorMetadata: {
        providerName: 'catalystcenter',
        providerVersion: '0.4.6',
        providerVersionConstraint: '0.4.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._externalConnectivityIpPoolName = config.externalConnectivityIpPoolName;
    this._fabricId = config.fabricId;
    this._interfaceName = config.interfaceName;
    this._localIpAddress = config.localIpAddress;
    this._localIpv6Address = config.localIpv6Address;
    this._networkDeviceId = config.networkDeviceId;
    this._remoteIpAddress = config.remoteIpAddress;
    this._remoteIpv6Address = config.remoteIpv6Address;
    this._tcpMssAdjustment = config.tcpMssAdjustment;
    this._transitNetworkId = config.transitNetworkId;
    this._virtualNetworkName = config.virtualNetworkName;
    this._vlanId = config.vlanId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // external_connectivity_ip_pool_name - computed: false, optional: true, required: false
  private _externalConnectivityIpPoolName?: string; 
  public get externalConnectivityIpPoolName() {
    return this.getStringAttribute('external_connectivity_ip_pool_name');
  }
  public set externalConnectivityIpPoolName(value: string) {
    this._externalConnectivityIpPoolName = value;
  }
  public resetExternalConnectivityIpPoolName() {
    this._externalConnectivityIpPoolName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalConnectivityIpPoolNameInput() {
    return this._externalConnectivityIpPoolName;
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

  // interface_name - computed: false, optional: true, required: false
  private _interfaceName?: string; 
  public get interfaceName() {
    return this.getStringAttribute('interface_name');
  }
  public set interfaceName(value: string) {
    this._interfaceName = value;
  }
  public resetInterfaceName() {
    this._interfaceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceNameInput() {
    return this._interfaceName;
  }

  // local_ip_address - computed: false, optional: true, required: false
  private _localIpAddress?: string; 
  public get localIpAddress() {
    return this.getStringAttribute('local_ip_address');
  }
  public set localIpAddress(value: string) {
    this._localIpAddress = value;
  }
  public resetLocalIpAddress() {
    this._localIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localIpAddressInput() {
    return this._localIpAddress;
  }

  // local_ipv6_address - computed: false, optional: true, required: false
  private _localIpv6Address?: string; 
  public get localIpv6Address() {
    return this.getStringAttribute('local_ipv6_address');
  }
  public set localIpv6Address(value: string) {
    this._localIpv6Address = value;
  }
  public resetLocalIpv6Address() {
    this._localIpv6Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localIpv6AddressInput() {
    return this._localIpv6Address;
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

  // remote_ip_address - computed: false, optional: true, required: false
  private _remoteIpAddress?: string; 
  public get remoteIpAddress() {
    return this.getStringAttribute('remote_ip_address');
  }
  public set remoteIpAddress(value: string) {
    this._remoteIpAddress = value;
  }
  public resetRemoteIpAddress() {
    this._remoteIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteIpAddressInput() {
    return this._remoteIpAddress;
  }

  // remote_ipv6_address - computed: false, optional: true, required: false
  private _remoteIpv6Address?: string; 
  public get remoteIpv6Address() {
    return this.getStringAttribute('remote_ipv6_address');
  }
  public set remoteIpv6Address(value: string) {
    this._remoteIpv6Address = value;
  }
  public resetRemoteIpv6Address() {
    this._remoteIpv6Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteIpv6AddressInput() {
    return this._remoteIpv6Address;
  }

  // tcp_mss_adjustment - computed: false, optional: true, required: false
  private _tcpMssAdjustment?: number; 
  public get tcpMssAdjustment() {
    return this.getNumberAttribute('tcp_mss_adjustment');
  }
  public set tcpMssAdjustment(value: number) {
    this._tcpMssAdjustment = value;
  }
  public resetTcpMssAdjustment() {
    this._tcpMssAdjustment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpMssAdjustmentInput() {
    return this._tcpMssAdjustment;
  }

  // transit_network_id - computed: false, optional: false, required: true
  private _transitNetworkId?: string; 
  public get transitNetworkId() {
    return this.getStringAttribute('transit_network_id');
  }
  public set transitNetworkId(value: string) {
    this._transitNetworkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transitNetworkIdInput() {
    return this._transitNetworkId;
  }

  // virtual_network_name - computed: false, optional: false, required: true
  private _virtualNetworkName?: string; 
  public get virtualNetworkName() {
    return this.getStringAttribute('virtual_network_name');
  }
  public set virtualNetworkName(value: string) {
    this._virtualNetworkName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNetworkNameInput() {
    return this._virtualNetworkName;
  }

  // vlan_id - computed: false, optional: false, required: true
  private _vlanId?: number; 
  public get vlanId() {
    return this.getNumberAttribute('vlan_id');
  }
  public set vlanId(value: number) {
    this._vlanId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanIdInput() {
    return this._vlanId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      external_connectivity_ip_pool_name: cdktf.stringToTerraform(this._externalConnectivityIpPoolName),
      fabric_id: cdktf.stringToTerraform(this._fabricId),
      interface_name: cdktf.stringToTerraform(this._interfaceName),
      local_ip_address: cdktf.stringToTerraform(this._localIpAddress),
      local_ipv6_address: cdktf.stringToTerraform(this._localIpv6Address),
      network_device_id: cdktf.stringToTerraform(this._networkDeviceId),
      remote_ip_address: cdktf.stringToTerraform(this._remoteIpAddress),
      remote_ipv6_address: cdktf.stringToTerraform(this._remoteIpv6Address),
      tcp_mss_adjustment: cdktf.numberToTerraform(this._tcpMssAdjustment),
      transit_network_id: cdktf.stringToTerraform(this._transitNetworkId),
      virtual_network_name: cdktf.stringToTerraform(this._virtualNetworkName),
      vlan_id: cdktf.numberToTerraform(this._vlanId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      external_connectivity_ip_pool_name: {
        value: cdktf.stringToHclTerraform(this._externalConnectivityIpPoolName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      local_ip_address: {
        value: cdktf.stringToHclTerraform(this._localIpAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      local_ipv6_address: {
        value: cdktf.stringToHclTerraform(this._localIpv6Address),
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
      remote_ip_address: {
        value: cdktf.stringToHclTerraform(this._remoteIpAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_ipv6_address: {
        value: cdktf.stringToHclTerraform(this._remoteIpv6Address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tcp_mss_adjustment: {
        value: cdktf.numberToHclTerraform(this._tcpMssAdjustment),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      transit_network_id: {
        value: cdktf.stringToHclTerraform(this._transitNetworkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      virtual_network_name: {
        value: cdktf.stringToHclTerraform(this._virtualNetworkName),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
