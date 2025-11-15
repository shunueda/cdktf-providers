// https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.3/docs/resources/fabric_l3_handoff_ip_transits
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FabricL3HandoffIpTransitsConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the fabric this device belongs to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.3/docs/resources/fabric_l3_handoff_ip_transits#fabric_id FabricL3HandoffIpTransits#fabric_id}
  */
  readonly fabricId: string;
  /**
  * List of layer 3 handoff ip transits
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.3/docs/resources/fabric_l3_handoff_ip_transits#l3_handoffs FabricL3HandoffIpTransits#l3_handoffs}
  */
  readonly l3Handoffs: FabricL3HandoffIpTransitsL3Handoffs[] | cdktf.IResolvable;
  /**
  * Network device ID of the fabric device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.3/docs/resources/fabric_l3_handoff_ip_transits#network_device_id FabricL3HandoffIpTransits#network_device_id}
  */
  readonly networkDeviceId: string;
}
export interface FabricL3HandoffIpTransitsL3Handoffs {
  /**
  * External connectivity ip pool will be used by Catalyst Center to allocate IP address for the connection between the border node and peer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.3/docs/resources/fabric_l3_handoff_ip_transits#external_connectivity_ip_pool_name FabricL3HandoffIpTransits#external_connectivity_ip_pool_name}
  */
  readonly externalConnectivityIpPoolName?: string;
  /**
  * ID of the fabric this device belongs to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.3/docs/resources/fabric_l3_handoff_ip_transits#fabric_id FabricL3HandoffIpTransits#fabric_id}
  */
  readonly fabricId: string;
  /**
  * Interface name of the layer 3 handoff ip transit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.3/docs/resources/fabric_l3_handoff_ip_transits#interface_name FabricL3HandoffIpTransits#interface_name}
  */
  readonly interfaceName?: string;
  /**
  * Local ipv4 address for the selected virtual network. Enter the IP addresses and subnet mask in the CIDR notation (IP address/prefix-length). Not applicable if you have already provided an external connectivity ip pool name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.3/docs/resources/fabric_l3_handoff_ip_transits#local_ip_address FabricL3HandoffIpTransits#local_ip_address}
  */
  readonly localIpAddress?: string;
  /**
  * Local ipv6 address for the selected virtual network. Enter the IP addresses and subnet mask in the CIDR notation (IP address/prefix-length). Not applicable if you have already provided an external connectivity ip pool name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.3/docs/resources/fabric_l3_handoff_ip_transits#local_ipv6_address FabricL3HandoffIpTransits#local_ipv6_address}
  */
  readonly localIpv6Address?: string;
  /**
  * Network device ID of the fabric device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.3/docs/resources/fabric_l3_handoff_ip_transits#network_device_id FabricL3HandoffIpTransits#network_device_id}
  */
  readonly networkDeviceId: string;
  /**
  * Remote ipv4 address for the selected virtual network. Enter the IP addresses and subnet mask in the CIDR notation (IP address/prefix-length). Not applicable if you have already provided an external connectivity ip pool name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.3/docs/resources/fabric_l3_handoff_ip_transits#remote_ip_address FabricL3HandoffIpTransits#remote_ip_address}
  */
  readonly remoteIpAddress?: string;
  /**
  * Remote ipv6 address for the selected virtual network. Enter the IP addresses and subnet mask in the CIDR notation (IP address/prefix-length). Not applicable if you have already provided an external connectivity ip pool name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.3/docs/resources/fabric_l3_handoff_ip_transits#remote_ipv6_address FabricL3HandoffIpTransits#remote_ipv6_address}
  */
  readonly remoteIpv6Address?: string;
  /**
  * TCP maximum segment size (mss) value for the layer 3 handoff. Allowed range is [500-1440]. TCP MSS Adjustment value is applicable for the TCP sessions over both IPv4 and IPv6
  *   - Range: `500`-`1440`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.3/docs/resources/fabric_l3_handoff_ip_transits#tcp_mss_adjustment FabricL3HandoffIpTransits#tcp_mss_adjustment}
  */
  readonly tcpMssAdjustment?: number;
  /**
  * ID of the transit network of the layer 3 handoff ip transit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.3/docs/resources/fabric_l3_handoff_ip_transits#transit_network_id FabricL3HandoffIpTransits#transit_network_id}
  */
  readonly transitNetworkId: string;
  /**
  * Name of the virtual network associated with this fabric site
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.3/docs/resources/fabric_l3_handoff_ip_transits#virtual_network_name FabricL3HandoffIpTransits#virtual_network_name}
  */
  readonly virtualNetworkName: string;
  /**
  * VLAN number for the Switch Virtual Interface (SVI) used to establish BGP peering with the external domain for the virtual network. Allowed VLAN range is 2-4094 except for reserved vlans (1, 1002-1005, 2046, 4094)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.3/docs/resources/fabric_l3_handoff_ip_transits#vlan_id FabricL3HandoffIpTransits#vlan_id}
  */
  readonly vlanId: number;
}

export function fabricL3HandoffIpTransitsL3HandoffsToTerraform(struct?: FabricL3HandoffIpTransitsL3Handoffs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    external_connectivity_ip_pool_name: cdktf.stringToTerraform(struct!.externalConnectivityIpPoolName),
    fabric_id: cdktf.stringToTerraform(struct!.fabricId),
    interface_name: cdktf.stringToTerraform(struct!.interfaceName),
    local_ip_address: cdktf.stringToTerraform(struct!.localIpAddress),
    local_ipv6_address: cdktf.stringToTerraform(struct!.localIpv6Address),
    network_device_id: cdktf.stringToTerraform(struct!.networkDeviceId),
    remote_ip_address: cdktf.stringToTerraform(struct!.remoteIpAddress),
    remote_ipv6_address: cdktf.stringToTerraform(struct!.remoteIpv6Address),
    tcp_mss_adjustment: cdktf.numberToTerraform(struct!.tcpMssAdjustment),
    transit_network_id: cdktf.stringToTerraform(struct!.transitNetworkId),
    virtual_network_name: cdktf.stringToTerraform(struct!.virtualNetworkName),
    vlan_id: cdktf.numberToTerraform(struct!.vlanId),
  }
}


export function fabricL3HandoffIpTransitsL3HandoffsToHclTerraform(struct?: FabricL3HandoffIpTransitsL3Handoffs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    external_connectivity_ip_pool_name: {
      value: cdktf.stringToHclTerraform(struct!.externalConnectivityIpPoolName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fabric_id: {
      value: cdktf.stringToHclTerraform(struct!.fabricId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interface_name: {
      value: cdktf.stringToHclTerraform(struct!.interfaceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_ip_address: {
      value: cdktf.stringToHclTerraform(struct!.localIpAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_ipv6_address: {
      value: cdktf.stringToHclTerraform(struct!.localIpv6Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_device_id: {
      value: cdktf.stringToHclTerraform(struct!.networkDeviceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_ip_address: {
      value: cdktf.stringToHclTerraform(struct!.remoteIpAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_ipv6_address: {
      value: cdktf.stringToHclTerraform(struct!.remoteIpv6Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tcp_mss_adjustment: {
      value: cdktf.numberToHclTerraform(struct!.tcpMssAdjustment),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    transit_network_id: {
      value: cdktf.stringToHclTerraform(struct!.transitNetworkId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    virtual_network_name: {
      value: cdktf.stringToHclTerraform(struct!.virtualNetworkName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vlan_id: {
      value: cdktf.numberToHclTerraform(struct!.vlanId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FabricL3HandoffIpTransitsL3HandoffsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FabricL3HandoffIpTransitsL3Handoffs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._externalConnectivityIpPoolName !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalConnectivityIpPoolName = this._externalConnectivityIpPoolName;
    }
    if (this._fabricId !== undefined) {
      hasAnyValues = true;
      internalValueResult.fabricId = this._fabricId;
    }
    if (this._interfaceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceName = this._interfaceName;
    }
    if (this._localIpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.localIpAddress = this._localIpAddress;
    }
    if (this._localIpv6Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.localIpv6Address = this._localIpv6Address;
    }
    if (this._networkDeviceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkDeviceId = this._networkDeviceId;
    }
    if (this._remoteIpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteIpAddress = this._remoteIpAddress;
    }
    if (this._remoteIpv6Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteIpv6Address = this._remoteIpv6Address;
    }
    if (this._tcpMssAdjustment !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpMssAdjustment = this._tcpMssAdjustment;
    }
    if (this._transitNetworkId !== undefined) {
      hasAnyValues = true;
      internalValueResult.transitNetworkId = this._transitNetworkId;
    }
    if (this._virtualNetworkName !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualNetworkName = this._virtualNetworkName;
    }
    if (this._vlanId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanId = this._vlanId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FabricL3HandoffIpTransitsL3Handoffs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._externalConnectivityIpPoolName = undefined;
      this._fabricId = undefined;
      this._interfaceName = undefined;
      this._localIpAddress = undefined;
      this._localIpv6Address = undefined;
      this._networkDeviceId = undefined;
      this._remoteIpAddress = undefined;
      this._remoteIpv6Address = undefined;
      this._tcpMssAdjustment = undefined;
      this._transitNetworkId = undefined;
      this._virtualNetworkName = undefined;
      this._vlanId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._externalConnectivityIpPoolName = value.externalConnectivityIpPoolName;
      this._fabricId = value.fabricId;
      this._interfaceName = value.interfaceName;
      this._localIpAddress = value.localIpAddress;
      this._localIpv6Address = value.localIpv6Address;
      this._networkDeviceId = value.networkDeviceId;
      this._remoteIpAddress = value.remoteIpAddress;
      this._remoteIpv6Address = value.remoteIpv6Address;
      this._tcpMssAdjustment = value.tcpMssAdjustment;
      this._transitNetworkId = value.transitNetworkId;
      this._virtualNetworkName = value.virtualNetworkName;
      this._vlanId = value.vlanId;
    }
  }

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
}

export class FabricL3HandoffIpTransitsL3HandoffsList extends cdktf.ComplexList {
  public internalValue? : FabricL3HandoffIpTransitsL3Handoffs[] | cdktf.IResolvable

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
  public get(index: number): FabricL3HandoffIpTransitsL3HandoffsOutputReference {
    return new FabricL3HandoffIpTransitsL3HandoffsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.3/docs/resources/fabric_l3_handoff_ip_transits catalystcenter_fabric_l3_handoff_ip_transits}
*/
export class FabricL3HandoffIpTransits extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "catalystcenter_fabric_l3_handoff_ip_transits";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FabricL3HandoffIpTransits resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FabricL3HandoffIpTransits to import
  * @param importFromId The id of the existing FabricL3HandoffIpTransits that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.3/docs/resources/fabric_l3_handoff_ip_transits#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FabricL3HandoffIpTransits to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "catalystcenter_fabric_l3_handoff_ip_transits", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.3/docs/resources/fabric_l3_handoff_ip_transits catalystcenter_fabric_l3_handoff_ip_transits} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FabricL3HandoffIpTransitsConfig
  */
  public constructor(scope: Construct, id: string, config: FabricL3HandoffIpTransitsConfig) {
    super(scope, id, {
      terraformResourceType: 'catalystcenter_fabric_l3_handoff_ip_transits',
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
    this._fabricId = config.fabricId;
    this._l3Handoffs.internalValue = config.l3Handoffs;
    this._networkDeviceId = config.networkDeviceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // l3_handoffs - computed: false, optional: false, required: true
  private _l3Handoffs = new FabricL3HandoffIpTransitsL3HandoffsList(this, "l3_handoffs", true);
  public get l3Handoffs() {
    return this._l3Handoffs;
  }
  public putL3Handoffs(value: FabricL3HandoffIpTransitsL3Handoffs[] | cdktf.IResolvable) {
    this._l3Handoffs.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get l3HandoffsInput() {
    return this._l3Handoffs.internalValue;
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
      fabric_id: cdktf.stringToTerraform(this._fabricId),
      l3_handoffs: cdktf.listMapper(fabricL3HandoffIpTransitsL3HandoffsToTerraform, false)(this._l3Handoffs.internalValue),
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
      l3_handoffs: {
        value: cdktf.listMapperHcl(fabricL3HandoffIpTransitsL3HandoffsToHclTerraform, false)(this._l3Handoffs.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FabricL3HandoffIpTransitsL3HandoffsList",
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
