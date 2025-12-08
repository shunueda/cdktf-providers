// https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/networks
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworksConfig extends cdktf.TerraformMetaArguments {
  /**
  * If set to true, do a deployment of all attachments in this resource.      This parameter cannot be true if either  `deploy_attachments` inside any `network` or `deploy_this_attachment` in any `attachments` is set to true.         __Note: Changing value from `true` to `false`, to undo a deployment is not supported__     
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/networks#deploy_all_attachments Networks#deploy_all_attachments}
  */
  readonly deployAllAttachments?: boolean | cdktf.IResolvable;
  /**
  * The name of the fabric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/networks#fabric_name Networks#fabric_name}
  */
  readonly fabricName: string;
  /**
  * List of networks
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/networks#networks Networks#networks}
  */
  readonly networks: { [key: string]: NetworksNetworks } | cdktf.IResolvable;
}
export interface NetworksNetworksAttachments {
  /**
  * If set to `true`, deploys this attachment.         This cannot be set to `true` if `deploy_all_attachments` at resource level is set to `true` or `deploy_attachments` in the corresponding `network` is set to `true`.         __Note: Changing value from `true` to `false`, to undo a deployment is not supported__      
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/networks#deploy_this_attachment Networks#deploy_this_attachment}
  */
  readonly deployThisAttachment?: boolean | cdktf.IResolvable;
  /**
  * The name of the switch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/networks#display_name Networks#display_name}
  */
  readonly displayName?: string;
  /**
  * The name of the fabric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/networks#fabric Networks#fabric}
  */
  readonly fabric?: string;
  /**
  * This field covers any configuration not included in overlay templates which is needed as part of this VRF attachment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/networks#freeform_config Networks#freeform_config}
  */
  readonly freeformConfig?: string;
  /**
  * Instance values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/networks#instance_values Networks#instance_values}
  */
  readonly instanceValues?: string;
  /**
  * List of switch ports
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/networks#switch_ports Networks#switch_ports}
  */
  readonly switchPorts?: string[];
  /**
  * List of TOR ports
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/networks#tor_ports Networks#tor_ports}
  */
  readonly torPorts?: string[];
  /**
  * VLAN ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/networks#vlan Networks#vlan}
  */
  readonly vlan?: number;
}

export function networksNetworksAttachmentsToTerraform(struct?: NetworksNetworksAttachments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deploy_this_attachment: cdktf.booleanToTerraform(struct!.deployThisAttachment),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    fabric: cdktf.stringToTerraform(struct!.fabric),
    freeform_config: cdktf.stringToTerraform(struct!.freeformConfig),
    instance_values: cdktf.stringToTerraform(struct!.instanceValues),
    switch_ports: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.switchPorts),
    tor_ports: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.torPorts),
    vlan: cdktf.numberToTerraform(struct!.vlan),
  }
}


export function networksNetworksAttachmentsToHclTerraform(struct?: NetworksNetworksAttachments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    deploy_this_attachment: {
      value: cdktf.booleanToHclTerraform(struct!.deployThisAttachment),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fabric: {
      value: cdktf.stringToHclTerraform(struct!.fabric),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    freeform_config: {
      value: cdktf.stringToHclTerraform(struct!.freeformConfig),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_values: {
      value: cdktf.stringToHclTerraform(struct!.instanceValues),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    switch_ports: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.switchPorts),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    tor_ports: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.torPorts),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    vlan: {
      value: cdktf.numberToHclTerraform(struct!.vlan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworksNetworksAttachmentsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): NetworksNetworksAttachments | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deployThisAttachment !== undefined) {
      hasAnyValues = true;
      internalValueResult.deployThisAttachment = this._deployThisAttachment;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._fabric !== undefined) {
      hasAnyValues = true;
      internalValueResult.fabric = this._fabric;
    }
    if (this._freeformConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.freeformConfig = this._freeformConfig;
    }
    if (this._instanceValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceValues = this._instanceValues;
    }
    if (this._switchPorts !== undefined) {
      hasAnyValues = true;
      internalValueResult.switchPorts = this._switchPorts;
    }
    if (this._torPorts !== undefined) {
      hasAnyValues = true;
      internalValueResult.torPorts = this._torPorts;
    }
    if (this._vlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlan = this._vlan;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworksNetworksAttachments | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deployThisAttachment = undefined;
      this._displayName = undefined;
      this._fabric = undefined;
      this._freeformConfig = undefined;
      this._instanceValues = undefined;
      this._switchPorts = undefined;
      this._torPorts = undefined;
      this._vlan = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deployThisAttachment = value.deployThisAttachment;
      this._displayName = value.displayName;
      this._fabric = value.fabric;
      this._freeformConfig = value.freeformConfig;
      this._instanceValues = value.instanceValues;
      this._switchPorts = value.switchPorts;
      this._torPorts = value.torPorts;
      this._vlan = value.vlan;
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

  // deploy_this_attachment - computed: true, optional: true, required: false
  private _deployThisAttachment?: boolean | cdktf.IResolvable; 
  public get deployThisAttachment() {
    return this.getBooleanAttribute('deploy_this_attachment');
  }
  public set deployThisAttachment(value: boolean | cdktf.IResolvable) {
    this._deployThisAttachment = value;
  }
  public resetDeployThisAttachment() {
    this._deployThisAttachment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deployThisAttachmentInput() {
    return this._deployThisAttachment;
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // fabric - computed: true, optional: true, required: false
  private _fabric?: string; 
  public get fabric() {
    return this.getStringAttribute('fabric');
  }
  public set fabric(value: string) {
    this._fabric = value;
  }
  public resetFabric() {
    this._fabric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fabricInput() {
    return this._fabric;
  }

  // freeform_config - computed: false, optional: true, required: false
  private _freeformConfig?: string; 
  public get freeformConfig() {
    return this.getStringAttribute('freeform_config');
  }
  public set freeformConfig(value: string) {
    this._freeformConfig = value;
  }
  public resetFreeformConfig() {
    this._freeformConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformConfigInput() {
    return this._freeformConfig;
  }

  // instance_values - computed: true, optional: true, required: false
  private _instanceValues?: string; 
  public get instanceValues() {
    return this.getStringAttribute('instance_values');
  }
  public set instanceValues(value: string) {
    this._instanceValues = value;
  }
  public resetInstanceValues() {
    this._instanceValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceValuesInput() {
    return this._instanceValues;
  }

  // switch_name - computed: true, optional: false, required: false
  public get switchName() {
    return this.getStringAttribute('switch_name');
  }

  // switch_ports - computed: true, optional: true, required: false
  private _switchPorts?: string[]; 
  public get switchPorts() {
    return cdktf.Fn.tolist(this.getListAttribute('switch_ports'));
  }
  public set switchPorts(value: string[]) {
    this._switchPorts = value;
  }
  public resetSwitchPorts() {
    this._switchPorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchPortsInput() {
    return this._switchPorts;
  }

  // tor_ports - computed: true, optional: true, required: false
  private _torPorts?: string[]; 
  public get torPorts() {
    return cdktf.Fn.tolist(this.getListAttribute('tor_ports'));
  }
  public set torPorts(value: string[]) {
    this._torPorts = value;
  }
  public resetTorPorts() {
    this._torPorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get torPortsInput() {
    return this._torPorts;
  }

  // vlan - computed: true, optional: true, required: false
  private _vlan?: number; 
  public get vlan() {
    return this.getNumberAttribute('vlan');
  }
  public set vlan(value: number) {
    this._vlan = value;
  }
  public resetVlan() {
    this._vlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanInput() {
    return this._vlan;
  }
}

export class NetworksNetworksAttachmentsMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: NetworksNetworksAttachments } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): NetworksNetworksAttachmentsOutputReference {
    return new NetworksNetworksAttachmentsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface NetworksNetworksDhcpRelayServers {
  /**
  * Server IP V4 Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/networks#address Networks#address}
  */
  readonly address?: string;
  /**
  * Server VRF. If management vrf, enter 'management'. If default/global vrf, enter 'default'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/networks#vrf Networks#vrf}
  */
  readonly vrf?: string;
}

export function networksNetworksDhcpRelayServersToTerraform(struct?: NetworksNetworksDhcpRelayServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    vrf: cdktf.stringToTerraform(struct!.vrf),
  }
}


export function networksNetworksDhcpRelayServersToHclTerraform(struct?: NetworksNetworksDhcpRelayServers | cdktf.IResolvable): any {
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

export class NetworksNetworksDhcpRelayServersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworksNetworksDhcpRelayServers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: NetworksNetworksDhcpRelayServers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._vrf = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._vrf = value.vrf;
    }
  }

  // address - computed: false, optional: true, required: false
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

  // vrf - computed: false, optional: true, required: false
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

export class NetworksNetworksDhcpRelayServersList extends cdktf.ComplexList {
  public internalValue? : NetworksNetworksDhcpRelayServers[] | cdktf.IResolvable

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
  public get(index: number): NetworksNetworksDhcpRelayServersOutputReference {
    return new NetworksNetworksDhcpRelayServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworksNetworks {
  /**
  * ARP suppression is only supported if SVI is present when Layer-2-Only is not enabled. NX-OS Specific.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/networks#arp_suppression Networks#arp_suppression}
  */
  readonly arpSuppression?: boolean | cdktf.IResolvable;
  /**
  * List of switches attached to the net
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/networks#attachments Networks#attachments}
  */
  readonly attachments?: { [key: string]: NetworksNetworksAttachments } | cdktf.IResolvable;
  /**
  * If set to `true`, deploys all attachments in the network.      This parameter cannot be `true` if `deploy_all_attachments` at resource level is set to `true` or `deploy_this_attachment` in any `attachments` is set to `true`.      __Note: Changing value from `true` to `false`, to undo a deployment is not supported__
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/networks#deploy_attachments Networks#deploy_attachments}
  */
  readonly deployAttachments?: boolean | cdktf.IResolvable;
  /**
  * Loopback ID for DHCP Relay interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/networks#dhcp_relay_loopback_id Networks#dhcp_relay_loopback_id}
  */
  readonly dhcpRelayLoopbackId?: number;
  /**
  * List of DHCP relay servers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/networks#dhcp_relay_servers Networks#dhcp_relay_servers}
  */
  readonly dhcpRelayServers?: NetworksNetworksDhcpRelayServers[] | cdktf.IResolvable;
  /**
  * Customized name of the network. By default, it will be same as the network name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/networks#display_name Networks#display_name}
  */
  readonly displayName?: string;
  /**
  * Gateway IPv4 address, for example `192.0.2.1/24`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/networks#gateway_ipv4_address Networks#gateway_ipv4_address}
  */
  readonly gatewayIpv4Address?: string;
  /**
  * Gateway IPv6 addresses, for example `2001:db8::1/64,2001:db9::1/64`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/networks#gateway_ipv6_address Networks#gateway_ipv6_address}
  */
  readonly gatewayIpv6Address?: string;
  /**
  * IGMP version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/networks#igmp_version Networks#igmp_version}
  */
  readonly igmpVersion?: string;
  /**
  * Ingress replication flag. Read-only per network, Fabric-wide setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/networks#ingress_replication Networks#ingress_replication}
  */
  readonly ingressReplication?: boolean | cdktf.IResolvable;
  /**
  * Interface description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/networks#interface_description Networks#interface_description}
  */
  readonly interfaceDescription?: string;
  /**
  * Enable L3 Gateway on Border
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/networks#l3_gatway_border Networks#l3_gatway_border}
  */
  readonly l3GatwayBorder?: boolean | cdktf.IResolvable;
  /**
  * Layer-2 only flag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/networks#layer2_only Networks#layer2_only}
  */
  readonly layer2Only?: boolean | cdktf.IResolvable;
  /**
  * MTU for L3 interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/networks#mtu Networks#mtu}
  */
  readonly mtu?: number;
  /**
  * Multicast group address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/networks#multicast_group Networks#multicast_group}
  */
  readonly multicastGroup?: string;
  /**
  * Netflow enable flag. Netflow is supported only if it is enabled on fabric. For NX-OS only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/networks#netflow Networks#netflow}
  */
  readonly netflow?: boolean | cdktf.IResolvable;
  /**
  * The name of the network extension template. Applicable to Switch(es) with role Border
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/networks#network_extension_template Networks#network_extension_template}
  */
  readonly networkExtensionTemplate?: string;
  /**
  * VNI ID of the network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/networks#network_id Networks#network_id}
  */
  readonly networkId?: number;
  /**
  * The name of the network template. This is only applicable for leaf switches
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/networks#network_template Networks#network_template}
  */
  readonly networkTemplate?: string;
  /**
  * Network Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/networks#network_type Networks#network_type}
  */
  readonly networkType?: string;
  /**
  * Primary network VNI ID. This is applicable only when PVLAN is enabled in fabric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/networks#primary_network_id Networks#primary_network_id}
  */
  readonly primaryNetworkId?: number;
  /**
  * L2 VNI Route-Target Both Enable. NX-OS specific.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/networks#route_target_both Networks#route_target_both}
  */
  readonly routeTargetBoth?: boolean | cdktf.IResolvable;
  /**
  * Routing tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/networks#routing_tag Networks#routing_tag}
  */
  readonly routingTag?: number;
  /**
  * IPv4 Secondary GW1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/networks#secondary_gateway_1 Networks#secondary_gateway_1}
  */
  readonly secondaryGateway1?: string;
  /**
  * IPv4 Secondary GW2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/networks#secondary_gateway_2 Networks#secondary_gateway_2}
  */
  readonly secondaryGateway2?: string;
  /**
  * IPv4 Secondary GW3
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/networks#secondary_gateway_3 Networks#secondary_gateway_3}
  */
  readonly secondaryGateway3?: string;
  /**
  * IPv4 Secondary GW4
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/networks#secondary_gateway_4 Networks#secondary_gateway_4}
  */
  readonly secondaryGateway4?: string;
  /**
  * Interface Vlan Netflow Monitor. Applicable only if 'Layer 2 Only' is not enabled. Provide monitor name defined in fabric setting for Layer 3 Record. For NX-OS only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/networks#svi_netflow_monitor Networks#svi_netflow_monitor}
  */
  readonly sviNetflowMonitor?: string;
  /**
  * Enable Tenant Routed Multicast
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/networks#trm Networks#trm}
  */
  readonly trm?: boolean | cdktf.IResolvable;
  /**
  * VLAN ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/networks#vlan_id Networks#vlan_id}
  */
  readonly vlanId?: number;
  /**
  * Vlan name. If > 32 chars, enable 'system vlan long-name' for NX-OS, disable VTPv1 and VTPv2 or switch to VTPv3 for IOS XE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/networks#vlan_name Networks#vlan_name}
  */
  readonly vlanName?: string;
  /**
  * Vlan Netflow Monitor. Provide monitor name defined in fabric setting for Layer 3 Record. For NX-OS only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/networks#vlan_netflow_monitor Networks#vlan_netflow_monitor}
  */
  readonly vlanNetflowMonitor?: string;
  /**
  * The name of the vrf
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/networks#vrf_name Networks#vrf_name}
  */
  readonly vrfName?: string;
}

export function networksNetworksToTerraform(struct?: NetworksNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    arp_suppression: cdktf.booleanToTerraform(struct!.arpSuppression),
    attachments: cdktf.hashMapper(networksNetworksAttachmentsToTerraform)(struct!.attachments),
    deploy_attachments: cdktf.booleanToTerraform(struct!.deployAttachments),
    dhcp_relay_loopback_id: cdktf.numberToTerraform(struct!.dhcpRelayLoopbackId),
    dhcp_relay_servers: cdktf.listMapper(networksNetworksDhcpRelayServersToTerraform, false)(struct!.dhcpRelayServers),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    gateway_ipv4_address: cdktf.stringToTerraform(struct!.gatewayIpv4Address),
    gateway_ipv6_address: cdktf.stringToTerraform(struct!.gatewayIpv6Address),
    igmp_version: cdktf.stringToTerraform(struct!.igmpVersion),
    ingress_replication: cdktf.booleanToTerraform(struct!.ingressReplication),
    interface_description: cdktf.stringToTerraform(struct!.interfaceDescription),
    l3_gatway_border: cdktf.booleanToTerraform(struct!.l3GatwayBorder),
    layer2_only: cdktf.booleanToTerraform(struct!.layer2Only),
    mtu: cdktf.numberToTerraform(struct!.mtu),
    multicast_group: cdktf.stringToTerraform(struct!.multicastGroup),
    netflow: cdktf.booleanToTerraform(struct!.netflow),
    network_extension_template: cdktf.stringToTerraform(struct!.networkExtensionTemplate),
    network_id: cdktf.numberToTerraform(struct!.networkId),
    network_template: cdktf.stringToTerraform(struct!.networkTemplate),
    network_type: cdktf.stringToTerraform(struct!.networkType),
    primary_network_id: cdktf.numberToTerraform(struct!.primaryNetworkId),
    route_target_both: cdktf.booleanToTerraform(struct!.routeTargetBoth),
    routing_tag: cdktf.numberToTerraform(struct!.routingTag),
    secondary_gateway_1: cdktf.stringToTerraform(struct!.secondaryGateway1),
    secondary_gateway_2: cdktf.stringToTerraform(struct!.secondaryGateway2),
    secondary_gateway_3: cdktf.stringToTerraform(struct!.secondaryGateway3),
    secondary_gateway_4: cdktf.stringToTerraform(struct!.secondaryGateway4),
    svi_netflow_monitor: cdktf.stringToTerraform(struct!.sviNetflowMonitor),
    trm: cdktf.booleanToTerraform(struct!.trm),
    vlan_id: cdktf.numberToTerraform(struct!.vlanId),
    vlan_name: cdktf.stringToTerraform(struct!.vlanName),
    vlan_netflow_monitor: cdktf.stringToTerraform(struct!.vlanNetflowMonitor),
    vrf_name: cdktf.stringToTerraform(struct!.vrfName),
  }
}


export function networksNetworksToHclTerraform(struct?: NetworksNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    arp_suppression: {
      value: cdktf.booleanToHclTerraform(struct!.arpSuppression),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    attachments: {
      value: cdktf.hashMapperHcl(networksNetworksAttachmentsToHclTerraform)(struct!.attachments),
      isBlock: true,
      type: "map",
      storageClassType: "NetworksNetworksAttachmentsMap",
    },
    deploy_attachments: {
      value: cdktf.booleanToHclTerraform(struct!.deployAttachments),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    dhcp_relay_loopback_id: {
      value: cdktf.numberToHclTerraform(struct!.dhcpRelayLoopbackId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dhcp_relay_servers: {
      value: cdktf.listMapperHcl(networksNetworksDhcpRelayServersToHclTerraform, false)(struct!.dhcpRelayServers),
      isBlock: true,
      type: "list",
      storageClassType: "NetworksNetworksDhcpRelayServersList",
    },
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gateway_ipv4_address: {
      value: cdktf.stringToHclTerraform(struct!.gatewayIpv4Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gateway_ipv6_address: {
      value: cdktf.stringToHclTerraform(struct!.gatewayIpv6Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    igmp_version: {
      value: cdktf.stringToHclTerraform(struct!.igmpVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ingress_replication: {
      value: cdktf.booleanToHclTerraform(struct!.ingressReplication),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    interface_description: {
      value: cdktf.stringToHclTerraform(struct!.interfaceDescription),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    l3_gatway_border: {
      value: cdktf.booleanToHclTerraform(struct!.l3GatwayBorder),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    layer2_only: {
      value: cdktf.booleanToHclTerraform(struct!.layer2Only),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mtu: {
      value: cdktf.numberToHclTerraform(struct!.mtu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    multicast_group: {
      value: cdktf.stringToHclTerraform(struct!.multicastGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    netflow: {
      value: cdktf.booleanToHclTerraform(struct!.netflow),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    network_extension_template: {
      value: cdktf.stringToHclTerraform(struct!.networkExtensionTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_id: {
      value: cdktf.numberToHclTerraform(struct!.networkId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    network_template: {
      value: cdktf.stringToHclTerraform(struct!.networkTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_type: {
      value: cdktf.stringToHclTerraform(struct!.networkType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary_network_id: {
      value: cdktf.numberToHclTerraform(struct!.primaryNetworkId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    route_target_both: {
      value: cdktf.booleanToHclTerraform(struct!.routeTargetBoth),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    routing_tag: {
      value: cdktf.numberToHclTerraform(struct!.routingTag),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    secondary_gateway_1: {
      value: cdktf.stringToHclTerraform(struct!.secondaryGateway1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secondary_gateway_2: {
      value: cdktf.stringToHclTerraform(struct!.secondaryGateway2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secondary_gateway_3: {
      value: cdktf.stringToHclTerraform(struct!.secondaryGateway3),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secondary_gateway_4: {
      value: cdktf.stringToHclTerraform(struct!.secondaryGateway4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    svi_netflow_monitor: {
      value: cdktf.stringToHclTerraform(struct!.sviNetflowMonitor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trm: {
      value: cdktf.booleanToHclTerraform(struct!.trm),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    vlan_id: {
      value: cdktf.numberToHclTerraform(struct!.vlanId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vlan_name: {
      value: cdktf.stringToHclTerraform(struct!.vlanName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vlan_netflow_monitor: {
      value: cdktf.stringToHclTerraform(struct!.vlanNetflowMonitor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vrf_name: {
      value: cdktf.stringToHclTerraform(struct!.vrfName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworksNetworksOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): NetworksNetworks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arpSuppression !== undefined) {
      hasAnyValues = true;
      internalValueResult.arpSuppression = this._arpSuppression;
    }
    if (this._attachments?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attachments = this._attachments?.internalValue;
    }
    if (this._deployAttachments !== undefined) {
      hasAnyValues = true;
      internalValueResult.deployAttachments = this._deployAttachments;
    }
    if (this._dhcpRelayLoopbackId !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpRelayLoopbackId = this._dhcpRelayLoopbackId;
    }
    if (this._dhcpRelayServers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpRelayServers = this._dhcpRelayServers?.internalValue;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._gatewayIpv4Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatewayIpv4Address = this._gatewayIpv4Address;
    }
    if (this._gatewayIpv6Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatewayIpv6Address = this._gatewayIpv6Address;
    }
    if (this._igmpVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.igmpVersion = this._igmpVersion;
    }
    if (this._ingressReplication !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingressReplication = this._ingressReplication;
    }
    if (this._interfaceDescription !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceDescription = this._interfaceDescription;
    }
    if (this._l3GatwayBorder !== undefined) {
      hasAnyValues = true;
      internalValueResult.l3GatwayBorder = this._l3GatwayBorder;
    }
    if (this._layer2Only !== undefined) {
      hasAnyValues = true;
      internalValueResult.layer2Only = this._layer2Only;
    }
    if (this._mtu !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtu = this._mtu;
    }
    if (this._multicastGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.multicastGroup = this._multicastGroup;
    }
    if (this._netflow !== undefined) {
      hasAnyValues = true;
      internalValueResult.netflow = this._netflow;
    }
    if (this._networkExtensionTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkExtensionTemplate = this._networkExtensionTemplate;
    }
    if (this._networkId !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkId = this._networkId;
    }
    if (this._networkTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkTemplate = this._networkTemplate;
    }
    if (this._networkType !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkType = this._networkType;
    }
    if (this._primaryNetworkId !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryNetworkId = this._primaryNetworkId;
    }
    if (this._routeTargetBoth !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeTargetBoth = this._routeTargetBoth;
    }
    if (this._routingTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.routingTag = this._routingTag;
    }
    if (this._secondaryGateway1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryGateway1 = this._secondaryGateway1;
    }
    if (this._secondaryGateway2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryGateway2 = this._secondaryGateway2;
    }
    if (this._secondaryGateway3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryGateway3 = this._secondaryGateway3;
    }
    if (this._secondaryGateway4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryGateway4 = this._secondaryGateway4;
    }
    if (this._sviNetflowMonitor !== undefined) {
      hasAnyValues = true;
      internalValueResult.sviNetflowMonitor = this._sviNetflowMonitor;
    }
    if (this._trm !== undefined) {
      hasAnyValues = true;
      internalValueResult.trm = this._trm;
    }
    if (this._vlanId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanId = this._vlanId;
    }
    if (this._vlanName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanName = this._vlanName;
    }
    if (this._vlanNetflowMonitor !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanNetflowMonitor = this._vlanNetflowMonitor;
    }
    if (this._vrfName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrfName = this._vrfName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworksNetworks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arpSuppression = undefined;
      this._attachments.internalValue = undefined;
      this._deployAttachments = undefined;
      this._dhcpRelayLoopbackId = undefined;
      this._dhcpRelayServers.internalValue = undefined;
      this._displayName = undefined;
      this._gatewayIpv4Address = undefined;
      this._gatewayIpv6Address = undefined;
      this._igmpVersion = undefined;
      this._ingressReplication = undefined;
      this._interfaceDescription = undefined;
      this._l3GatwayBorder = undefined;
      this._layer2Only = undefined;
      this._mtu = undefined;
      this._multicastGroup = undefined;
      this._netflow = undefined;
      this._networkExtensionTemplate = undefined;
      this._networkId = undefined;
      this._networkTemplate = undefined;
      this._networkType = undefined;
      this._primaryNetworkId = undefined;
      this._routeTargetBoth = undefined;
      this._routingTag = undefined;
      this._secondaryGateway1 = undefined;
      this._secondaryGateway2 = undefined;
      this._secondaryGateway3 = undefined;
      this._secondaryGateway4 = undefined;
      this._sviNetflowMonitor = undefined;
      this._trm = undefined;
      this._vlanId = undefined;
      this._vlanName = undefined;
      this._vlanNetflowMonitor = undefined;
      this._vrfName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arpSuppression = value.arpSuppression;
      this._attachments.internalValue = value.attachments;
      this._deployAttachments = value.deployAttachments;
      this._dhcpRelayLoopbackId = value.dhcpRelayLoopbackId;
      this._dhcpRelayServers.internalValue = value.dhcpRelayServers;
      this._displayName = value.displayName;
      this._gatewayIpv4Address = value.gatewayIpv4Address;
      this._gatewayIpv6Address = value.gatewayIpv6Address;
      this._igmpVersion = value.igmpVersion;
      this._ingressReplication = value.ingressReplication;
      this._interfaceDescription = value.interfaceDescription;
      this._l3GatwayBorder = value.l3GatwayBorder;
      this._layer2Only = value.layer2Only;
      this._mtu = value.mtu;
      this._multicastGroup = value.multicastGroup;
      this._netflow = value.netflow;
      this._networkExtensionTemplate = value.networkExtensionTemplate;
      this._networkId = value.networkId;
      this._networkTemplate = value.networkTemplate;
      this._networkType = value.networkType;
      this._primaryNetworkId = value.primaryNetworkId;
      this._routeTargetBoth = value.routeTargetBoth;
      this._routingTag = value.routingTag;
      this._secondaryGateway1 = value.secondaryGateway1;
      this._secondaryGateway2 = value.secondaryGateway2;
      this._secondaryGateway3 = value.secondaryGateway3;
      this._secondaryGateway4 = value.secondaryGateway4;
      this._sviNetflowMonitor = value.sviNetflowMonitor;
      this._trm = value.trm;
      this._vlanId = value.vlanId;
      this._vlanName = value.vlanName;
      this._vlanNetflowMonitor = value.vlanNetflowMonitor;
      this._vrfName = value.vrfName;
    }
  }

  // arp_suppression - computed: false, optional: true, required: false
  private _arpSuppression?: boolean | cdktf.IResolvable; 
  public get arpSuppression() {
    return this.getBooleanAttribute('arp_suppression');
  }
  public set arpSuppression(value: boolean | cdktf.IResolvable) {
    this._arpSuppression = value;
  }
  public resetArpSuppression() {
    this._arpSuppression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arpSuppressionInput() {
    return this._arpSuppression;
  }

  // attachments - computed: false, optional: true, required: false
  private _attachments = new NetworksNetworksAttachmentsMap(this, "attachments");
  public get attachments() {
    return this._attachments;
  }
  public putAttachments(value: { [key: string]: NetworksNetworksAttachments } | cdktf.IResolvable) {
    this._attachments.internalValue = value;
  }
  public resetAttachments() {
    this._attachments.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attachmentsInput() {
    return this._attachments.internalValue;
  }

  // deploy_attachments - computed: true, optional: true, required: false
  private _deployAttachments?: boolean | cdktf.IResolvable; 
  public get deployAttachments() {
    return this.getBooleanAttribute('deploy_attachments');
  }
  public set deployAttachments(value: boolean | cdktf.IResolvable) {
    this._deployAttachments = value;
  }
  public resetDeployAttachments() {
    this._deployAttachments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deployAttachmentsInput() {
    return this._deployAttachments;
  }

  // dhcp_relay_loopback_id - computed: false, optional: true, required: false
  private _dhcpRelayLoopbackId?: number; 
  public get dhcpRelayLoopbackId() {
    return this.getNumberAttribute('dhcp_relay_loopback_id');
  }
  public set dhcpRelayLoopbackId(value: number) {
    this._dhcpRelayLoopbackId = value;
  }
  public resetDhcpRelayLoopbackId() {
    this._dhcpRelayLoopbackId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpRelayLoopbackIdInput() {
    return this._dhcpRelayLoopbackId;
  }

  // dhcp_relay_servers - computed: false, optional: true, required: false
  private _dhcpRelayServers = new NetworksNetworksDhcpRelayServersList(this, "dhcp_relay_servers", false);
  public get dhcpRelayServers() {
    return this._dhcpRelayServers;
  }
  public putDhcpRelayServers(value: NetworksNetworksDhcpRelayServers[] | cdktf.IResolvable) {
    this._dhcpRelayServers.internalValue = value;
  }
  public resetDhcpRelayServers() {
    this._dhcpRelayServers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpRelayServersInput() {
    return this._dhcpRelayServers.internalValue;
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // gateway_ipv4_address - computed: false, optional: true, required: false
  private _gatewayIpv4Address?: string; 
  public get gatewayIpv4Address() {
    return this.getStringAttribute('gateway_ipv4_address');
  }
  public set gatewayIpv4Address(value: string) {
    this._gatewayIpv4Address = value;
  }
  public resetGatewayIpv4Address() {
    this._gatewayIpv4Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayIpv4AddressInput() {
    return this._gatewayIpv4Address;
  }

  // gateway_ipv6_address - computed: false, optional: true, required: false
  private _gatewayIpv6Address?: string; 
  public get gatewayIpv6Address() {
    return this.getStringAttribute('gateway_ipv6_address');
  }
  public set gatewayIpv6Address(value: string) {
    this._gatewayIpv6Address = value;
  }
  public resetGatewayIpv6Address() {
    this._gatewayIpv6Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayIpv6AddressInput() {
    return this._gatewayIpv6Address;
  }

  // igmp_version - computed: true, optional: true, required: false
  private _igmpVersion?: string; 
  public get igmpVersion() {
    return this.getStringAttribute('igmp_version');
  }
  public set igmpVersion(value: string) {
    this._igmpVersion = value;
  }
  public resetIgmpVersion() {
    this._igmpVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get igmpVersionInput() {
    return this._igmpVersion;
  }

  // ingress_replication - computed: true, optional: true, required: false
  private _ingressReplication?: boolean | cdktf.IResolvable; 
  public get ingressReplication() {
    return this.getBooleanAttribute('ingress_replication');
  }
  public set ingressReplication(value: boolean | cdktf.IResolvable) {
    this._ingressReplication = value;
  }
  public resetIngressReplication() {
    this._ingressReplication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressReplicationInput() {
    return this._ingressReplication;
  }

  // interface_description - computed: false, optional: true, required: false
  private _interfaceDescription?: string; 
  public get interfaceDescription() {
    return this.getStringAttribute('interface_description');
  }
  public set interfaceDescription(value: string) {
    this._interfaceDescription = value;
  }
  public resetInterfaceDescription() {
    this._interfaceDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceDescriptionInput() {
    return this._interfaceDescription;
  }

  // l3_gatway_border - computed: true, optional: true, required: false
  private _l3GatwayBorder?: boolean | cdktf.IResolvable; 
  public get l3GatwayBorder() {
    return this.getBooleanAttribute('l3_gatway_border');
  }
  public set l3GatwayBorder(value: boolean | cdktf.IResolvable) {
    this._l3GatwayBorder = value;
  }
  public resetL3GatwayBorder() {
    this._l3GatwayBorder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l3GatwayBorderInput() {
    return this._l3GatwayBorder;
  }

  // layer2_only - computed: true, optional: true, required: false
  private _layer2Only?: boolean | cdktf.IResolvable; 
  public get layer2Only() {
    return this.getBooleanAttribute('layer2_only');
  }
  public set layer2Only(value: boolean | cdktf.IResolvable) {
    this._layer2Only = value;
  }
  public resetLayer2Only() {
    this._layer2Only = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get layer2OnlyInput() {
    return this._layer2Only;
  }

  // mtu - computed: true, optional: true, required: false
  private _mtu?: number; 
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }
  public set mtu(value: number) {
    this._mtu = value;
  }
  public resetMtu() {
    this._mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuInput() {
    return this._mtu;
  }

  // multicast_group - computed: true, optional: true, required: false
  private _multicastGroup?: string; 
  public get multicastGroup() {
    return this.getStringAttribute('multicast_group');
  }
  public set multicastGroup(value: string) {
    this._multicastGroup = value;
  }
  public resetMulticastGroup() {
    this._multicastGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multicastGroupInput() {
    return this._multicastGroup;
  }

  // netflow - computed: true, optional: true, required: false
  private _netflow?: boolean | cdktf.IResolvable; 
  public get netflow() {
    return this.getBooleanAttribute('netflow');
  }
  public set netflow(value: boolean | cdktf.IResolvable) {
    this._netflow = value;
  }
  public resetNetflow() {
    this._netflow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netflowInput() {
    return this._netflow;
  }

  // network_extension_template - computed: true, optional: true, required: false
  private _networkExtensionTemplate?: string; 
  public get networkExtensionTemplate() {
    return this.getStringAttribute('network_extension_template');
  }
  public set networkExtensionTemplate(value: string) {
    this._networkExtensionTemplate = value;
  }
  public resetNetworkExtensionTemplate() {
    this._networkExtensionTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkExtensionTemplateInput() {
    return this._networkExtensionTemplate;
  }

  // network_id - computed: true, optional: true, required: false
  private _networkId?: number; 
  public get networkId() {
    return this.getNumberAttribute('network_id');
  }
  public set networkId(value: number) {
    this._networkId = value;
  }
  public resetNetworkId() {
    this._networkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdInput() {
    return this._networkId;
  }

  // network_status - computed: true, optional: false, required: false
  public get networkStatus() {
    return this.getStringAttribute('network_status');
  }

  // network_template - computed: true, optional: true, required: false
  private _networkTemplate?: string; 
  public get networkTemplate() {
    return this.getStringAttribute('network_template');
  }
  public set networkTemplate(value: string) {
    this._networkTemplate = value;
  }
  public resetNetworkTemplate() {
    this._networkTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkTemplateInput() {
    return this._networkTemplate;
  }

  // network_type - computed: true, optional: true, required: false
  private _networkType?: string; 
  public get networkType() {
    return this.getStringAttribute('network_type');
  }
  public set networkType(value: string) {
    this._networkType = value;
  }
  public resetNetworkType() {
    this._networkType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkTypeInput() {
    return this._networkType;
  }

  // primary_network_id - computed: true, optional: true, required: false
  private _primaryNetworkId?: number; 
  public get primaryNetworkId() {
    return this.getNumberAttribute('primary_network_id');
  }
  public set primaryNetworkId(value: number) {
    this._primaryNetworkId = value;
  }
  public resetPrimaryNetworkId() {
    this._primaryNetworkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryNetworkIdInput() {
    return this._primaryNetworkId;
  }

  // route_target_both - computed: true, optional: true, required: false
  private _routeTargetBoth?: boolean | cdktf.IResolvable; 
  public get routeTargetBoth() {
    return this.getBooleanAttribute('route_target_both');
  }
  public set routeTargetBoth(value: boolean | cdktf.IResolvable) {
    this._routeTargetBoth = value;
  }
  public resetRouteTargetBoth() {
    this._routeTargetBoth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeTargetBothInput() {
    return this._routeTargetBoth;
  }

  // routing_tag - computed: true, optional: true, required: false
  private _routingTag?: number; 
  public get routingTag() {
    return this.getNumberAttribute('routing_tag');
  }
  public set routingTag(value: number) {
    this._routingTag = value;
  }
  public resetRoutingTag() {
    this._routingTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingTagInput() {
    return this._routingTag;
  }

  // secondary_gateway_1 - computed: false, optional: true, required: false
  private _secondaryGateway1?: string; 
  public get secondaryGateway1() {
    return this.getStringAttribute('secondary_gateway_1');
  }
  public set secondaryGateway1(value: string) {
    this._secondaryGateway1 = value;
  }
  public resetSecondaryGateway1() {
    this._secondaryGateway1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryGateway1Input() {
    return this._secondaryGateway1;
  }

  // secondary_gateway_2 - computed: false, optional: true, required: false
  private _secondaryGateway2?: string; 
  public get secondaryGateway2() {
    return this.getStringAttribute('secondary_gateway_2');
  }
  public set secondaryGateway2(value: string) {
    this._secondaryGateway2 = value;
  }
  public resetSecondaryGateway2() {
    this._secondaryGateway2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryGateway2Input() {
    return this._secondaryGateway2;
  }

  // secondary_gateway_3 - computed: false, optional: true, required: false
  private _secondaryGateway3?: string; 
  public get secondaryGateway3() {
    return this.getStringAttribute('secondary_gateway_3');
  }
  public set secondaryGateway3(value: string) {
    this._secondaryGateway3 = value;
  }
  public resetSecondaryGateway3() {
    this._secondaryGateway3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryGateway3Input() {
    return this._secondaryGateway3;
  }

  // secondary_gateway_4 - computed: false, optional: true, required: false
  private _secondaryGateway4?: string; 
  public get secondaryGateway4() {
    return this.getStringAttribute('secondary_gateway_4');
  }
  public set secondaryGateway4(value: string) {
    this._secondaryGateway4 = value;
  }
  public resetSecondaryGateway4() {
    this._secondaryGateway4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryGateway4Input() {
    return this._secondaryGateway4;
  }

  // svi_netflow_monitor - computed: false, optional: true, required: false
  private _sviNetflowMonitor?: string; 
  public get sviNetflowMonitor() {
    return this.getStringAttribute('svi_netflow_monitor');
  }
  public set sviNetflowMonitor(value: string) {
    this._sviNetflowMonitor = value;
  }
  public resetSviNetflowMonitor() {
    this._sviNetflowMonitor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sviNetflowMonitorInput() {
    return this._sviNetflowMonitor;
  }

  // trm - computed: false, optional: true, required: false
  private _trm?: boolean | cdktf.IResolvable; 
  public get trm() {
    return this.getBooleanAttribute('trm');
  }
  public set trm(value: boolean | cdktf.IResolvable) {
    this._trm = value;
  }
  public resetTrm() {
    this._trm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trmInput() {
    return this._trm;
  }

  // vlan_id - computed: true, optional: true, required: false
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

  // vlan_name - computed: false, optional: true, required: false
  private _vlanName?: string; 
  public get vlanName() {
    return this.getStringAttribute('vlan_name');
  }
  public set vlanName(value: string) {
    this._vlanName = value;
  }
  public resetVlanName() {
    this._vlanName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanNameInput() {
    return this._vlanName;
  }

  // vlan_netflow_monitor - computed: false, optional: true, required: false
  private _vlanNetflowMonitor?: string; 
  public get vlanNetflowMonitor() {
    return this.getStringAttribute('vlan_netflow_monitor');
  }
  public set vlanNetflowMonitor(value: string) {
    this._vlanNetflowMonitor = value;
  }
  public resetVlanNetflowMonitor() {
    this._vlanNetflowMonitor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanNetflowMonitorInput() {
    return this._vlanNetflowMonitor;
  }

  // vrf_name - computed: true, optional: true, required: false
  private _vrfName?: string; 
  public get vrfName() {
    return this.getStringAttribute('vrf_name');
  }
  public set vrfName(value: string) {
    this._vrfName = value;
  }
  public resetVrfName() {
    this._vrfName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfNameInput() {
    return this._vrfName;
  }
}

export class NetworksNetworksMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: NetworksNetworks } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): NetworksNetworksOutputReference {
    return new NetworksNetworksOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/networks ndfc_networks}
*/
export class Networks extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ndfc_networks";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Networks resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Networks to import
  * @param importFromId The id of the existing Networks that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/networks#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Networks to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ndfc_networks", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/networks ndfc_networks} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworksConfig
  */
  public constructor(scope: Construct, id: string, config: NetworksConfig) {
    super(scope, id, {
      terraformResourceType: 'ndfc_networks',
      terraformGeneratorMetadata: {
        providerName: 'ndfc',
        providerVersion: '0.2.1',
        providerVersionConstraint: '0.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deployAllAttachments = config.deployAllAttachments;
    this._fabricName = config.fabricName;
    this._networks.internalValue = config.networks;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // deploy_all_attachments - computed: true, optional: true, required: false
  private _deployAllAttachments?: boolean | cdktf.IResolvable; 
  public get deployAllAttachments() {
    return this.getBooleanAttribute('deploy_all_attachments');
  }
  public set deployAllAttachments(value: boolean | cdktf.IResolvable) {
    this._deployAllAttachments = value;
  }
  public resetDeployAllAttachments() {
    this._deployAllAttachments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deployAllAttachmentsInput() {
    return this._deployAllAttachments;
  }

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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // networks - computed: false, optional: false, required: true
  private _networks = new NetworksNetworksMap(this, "networks");
  public get networks() {
    return this._networks;
  }
  public putNetworks(value: { [key: string]: NetworksNetworks } | cdktf.IResolvable) {
    this._networks.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networksInput() {
    return this._networks.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      deploy_all_attachments: cdktf.booleanToTerraform(this._deployAllAttachments),
      fabric_name: cdktf.stringToTerraform(this._fabricName),
      networks: cdktf.hashMapper(networksNetworksToTerraform)(this._networks.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      deploy_all_attachments: {
        value: cdktf.booleanToHclTerraform(this._deployAllAttachments),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      fabric_name: {
        value: cdktf.stringToHclTerraform(this._fabricName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      networks: {
        value: cdktf.hashMapperHcl(networksNetworksToHclTerraform)(this._networks.internalValue),
        isBlock: true,
        type: "map",
        storageClassType: "NetworksNetworksMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
