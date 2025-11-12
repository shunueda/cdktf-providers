// https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/data-sources/networks
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNdfcNetworksConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the fabric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/data-sources/networks#fabric_name DataNdfcNetworks#fabric_name}
  */
  readonly fabricName: string;
}
export interface DataNdfcNetworksNetworksAttachments {
}

export function dataNdfcNetworksNetworksAttachmentsToTerraform(struct?: DataNdfcNetworksNetworksAttachments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNdfcNetworksNetworksAttachmentsToHclTerraform(struct?: DataNdfcNetworksNetworksAttachments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNdfcNetworksNetworksAttachmentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNdfcNetworksNetworksAttachments | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNdfcNetworksNetworksAttachments | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attach_state - computed: true, optional: false, required: false
  public get attachState() {
    return this.getStringAttribute('attach_state');
  }

  // attached - computed: true, optional: false, required: false
  public get attached() {
    return this.getBooleanAttribute('attached');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // freeform_config - computed: true, optional: false, required: false
  public get freeformConfig() {
    return this.getStringAttribute('freeform_config');
  }

  // instance_values - computed: true, optional: false, required: false
  public get instanceValues() {
    return this.getStringAttribute('instance_values');
  }

  // serial_number - computed: true, optional: false, required: false
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }

  // switch_name - computed: true, optional: false, required: false
  public get switchName() {
    return this.getStringAttribute('switch_name');
  }

  // switch_ports - computed: true, optional: false, required: false
  public get switchPorts() {
    return cdktf.Fn.tolist(this.getListAttribute('switch_ports'));
  }

  // tor_ports - computed: true, optional: false, required: false
  public get torPorts() {
    return cdktf.Fn.tolist(this.getListAttribute('tor_ports'));
  }

  // vlan - computed: true, optional: false, required: false
  public get vlan() {
    return this.getNumberAttribute('vlan');
  }
}

export class DataNdfcNetworksNetworksAttachmentsList extends cdktf.ComplexList {

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
  public get(index: number): DataNdfcNetworksNetworksAttachmentsOutputReference {
    return new DataNdfcNetworksNetworksAttachmentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNdfcNetworksNetworksDhcpRelayServers {
  /**
  * Server IP V4 Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/data-sources/networks#address DataNdfcNetworks#address}
  */
  readonly address?: string;
  /**
  * Server VRF. If management vrf, enter 'management'. If default/global vrf, enter 'default'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/data-sources/networks#vrf DataNdfcNetworks#vrf}
  */
  readonly vrf?: string;
}

export function dataNdfcNetworksNetworksDhcpRelayServersToTerraform(struct?: DataNdfcNetworksNetworksDhcpRelayServers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    vrf: cdktf.stringToTerraform(struct!.vrf),
  }
}


export function dataNdfcNetworksNetworksDhcpRelayServersToHclTerraform(struct?: DataNdfcNetworksNetworksDhcpRelayServers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vrf: {
      value: cdktf.stringToHclTerraform(struct!.vrf),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNdfcNetworksNetworksDhcpRelayServersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNdfcNetworksNetworksDhcpRelayServers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._vrf !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrf = this._vrf;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNdfcNetworksNetworksDhcpRelayServers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._address = undefined;
      this._vrf = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._address = value.address;
      this._vrf = value.vrf;
    }
  }

  // address - computed: true, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // vrf - computed: true, optional: true, required: false
  private _vrf?: string; 
  public get vrf() {
    return this.getStringAttribute('vrf');
  }
  public set vrf(value: string) {
    this._vrf = value;
  }
  public resetVrf() {
    this._vrf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfInput() {
    return this._vrf;
  }
}

export class DataNdfcNetworksNetworksDhcpRelayServersList extends cdktf.ComplexList {
  public internalValue? : DataNdfcNetworksNetworksDhcpRelayServers[] | cdktf.IResolvable

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
  public get(index: number): DataNdfcNetworksNetworksDhcpRelayServersOutputReference {
    return new DataNdfcNetworksNetworksDhcpRelayServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNdfcNetworksNetworks {
}

export function dataNdfcNetworksNetworksToTerraform(struct?: DataNdfcNetworksNetworks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNdfcNetworksNetworksToHclTerraform(struct?: DataNdfcNetworksNetworks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNdfcNetworksNetworksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNdfcNetworksNetworks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNdfcNetworksNetworks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // arp_suppression - computed: true, optional: false, required: false
  public get arpSuppression() {
    return this.getBooleanAttribute('arp_suppression');
  }

  // attachments - computed: true, optional: false, required: false
  private _attachments = new DataNdfcNetworksNetworksAttachmentsList(this, "attachments", false);
  public get attachments() {
    return this._attachments;
  }

  // dhcp_relay_loopback_id - computed: true, optional: false, required: false
  public get dhcpRelayLoopbackId() {
    return this.getNumberAttribute('dhcp_relay_loopback_id');
  }

  // dhcp_relay_servers - computed: true, optional: false, required: false
  private _dhcpRelayServers = new DataNdfcNetworksNetworksDhcpRelayServersList(this, "dhcp_relay_servers", false);
  public get dhcpRelayServers() {
    return this._dhcpRelayServers;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // gateway_ipv4_address - computed: true, optional: false, required: false
  public get gatewayIpv4Address() {
    return this.getStringAttribute('gateway_ipv4_address');
  }

  // gateway_ipv6_address - computed: true, optional: false, required: false
  public get gatewayIpv6Address() {
    return this.getStringAttribute('gateway_ipv6_address');
  }

  // igmp_version - computed: true, optional: false, required: false
  public get igmpVersion() {
    return this.getStringAttribute('igmp_version');
  }

  // ingress_replication - computed: true, optional: false, required: false
  public get ingressReplication() {
    return this.getBooleanAttribute('ingress_replication');
  }

  // interface_description - computed: true, optional: false, required: false
  public get interfaceDescription() {
    return this.getStringAttribute('interface_description');
  }

  // l3_gatway_border - computed: true, optional: false, required: false
  public get l3GatwayBorder() {
    return this.getBooleanAttribute('l3_gatway_border');
  }

  // layer2_only - computed: true, optional: false, required: false
  public get layer2Only() {
    return this.getBooleanAttribute('layer2_only');
  }

  // mtu - computed: true, optional: false, required: false
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }

  // multicast_group - computed: true, optional: false, required: false
  public get multicastGroup() {
    return this.getStringAttribute('multicast_group');
  }

  // netflow - computed: true, optional: false, required: false
  public get netflow() {
    return this.getBooleanAttribute('netflow');
  }

  // network_extension_template - computed: true, optional: false, required: false
  public get networkExtensionTemplate() {
    return this.getStringAttribute('network_extension_template');
  }

  // network_id - computed: true, optional: false, required: false
  public get networkId() {
    return this.getNumberAttribute('network_id');
  }

  // network_name - computed: true, optional: false, required: false
  public get networkName() {
    return this.getStringAttribute('network_name');
  }

  // network_status - computed: true, optional: false, required: false
  public get networkStatus() {
    return this.getStringAttribute('network_status');
  }

  // network_template - computed: true, optional: false, required: false
  public get networkTemplate() {
    return this.getStringAttribute('network_template');
  }

  // network_type - computed: true, optional: false, required: false
  public get networkType() {
    return this.getStringAttribute('network_type');
  }

  // primary_network_id - computed: true, optional: false, required: false
  public get primaryNetworkId() {
    return this.getNumberAttribute('primary_network_id');
  }

  // route_target_both - computed: true, optional: false, required: false
  public get routeTargetBoth() {
    return this.getBooleanAttribute('route_target_both');
  }

  // routing_tag - computed: true, optional: false, required: false
  public get routingTag() {
    return this.getNumberAttribute('routing_tag');
  }

  // secondary_gateway_1 - computed: true, optional: false, required: false
  public get secondaryGateway1() {
    return this.getStringAttribute('secondary_gateway_1');
  }

  // secondary_gateway_2 - computed: true, optional: false, required: false
  public get secondaryGateway2() {
    return this.getStringAttribute('secondary_gateway_2');
  }

  // secondary_gateway_3 - computed: true, optional: false, required: false
  public get secondaryGateway3() {
    return this.getStringAttribute('secondary_gateway_3');
  }

  // secondary_gateway_4 - computed: true, optional: false, required: false
  public get secondaryGateway4() {
    return this.getStringAttribute('secondary_gateway_4');
  }

  // svi_netflow_monitor - computed: true, optional: false, required: false
  public get sviNetflowMonitor() {
    return this.getStringAttribute('svi_netflow_monitor');
  }

  // trm - computed: true, optional: false, required: false
  public get trm() {
    return this.getBooleanAttribute('trm');
  }

  // vlan_id - computed: true, optional: false, required: false
  public get vlanId() {
    return this.getNumberAttribute('vlan_id');
  }

  // vlan_name - computed: true, optional: false, required: false
  public get vlanName() {
    return this.getStringAttribute('vlan_name');
  }

  // vlan_netflow_monitor - computed: true, optional: false, required: false
  public get vlanNetflowMonitor() {
    return this.getStringAttribute('vlan_netflow_monitor');
  }

  // vrf_name - computed: true, optional: false, required: false
  public get vrfName() {
    return this.getStringAttribute('vrf_name');
  }
}

export class DataNdfcNetworksNetworksList extends cdktf.ComplexList {

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
  public get(index: number): DataNdfcNetworksNetworksOutputReference {
    return new DataNdfcNetworksNetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/data-sources/networks ndfc_networks}
*/
export class DataNdfcNetworks extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ndfc_networks";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNdfcNetworks resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNdfcNetworks to import
  * @param importFromId The id of the existing DataNdfcNetworks that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/data-sources/networks#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNdfcNetworks to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ndfc_networks", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/data-sources/networks ndfc_networks} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNdfcNetworksConfig
  */
  public constructor(scope: Construct, id: string, config: DataNdfcNetworksConfig) {
    super(scope, id, {
      terraformResourceType: 'ndfc_networks',
      terraformGeneratorMetadata: {
        providerName: 'ndfc',
        providerVersion: '0.2.0',
        providerVersionConstraint: '0.2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._fabricName = config.fabricName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // fabric_name - computed: false, optional: false, required: true
  private _fabricName?: string; 
  public get fabricName() {
    return this.getStringAttribute('fabric_name');
  }
  public set fabricName(value: string) {
    this._fabricName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fabricNameInput() {
    return this._fabricName;
  }

  // networks - computed: true, optional: false, required: false
  private _networks = new DataNdfcNetworksNetworksList(this, "networks", false);
  public get networks() {
    return this._networks;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      fabric_name: cdktf.stringToTerraform(this._fabricName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      fabric_name: {
        value: cdktf.stringToHclTerraform(this._fabricName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
