// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_svi_feature
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServiceLanVpnInterfaceSviFeatureConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_svi_feature#acl_ipv4_egress_feature_id ServiceLanVpnInterfaceSviFeature#acl_ipv4_egress_feature_id}
  */
  readonly aclIpv4EgressFeatureId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_svi_feature#acl_ipv4_ingress_feature_id ServiceLanVpnInterfaceSviFeature#acl_ipv4_ingress_feature_id}
  */
  readonly aclIpv4IngressFeatureId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_svi_feature#acl_ipv6_egress_feature_id ServiceLanVpnInterfaceSviFeature#acl_ipv6_egress_feature_id}
  */
  readonly aclIpv6EgressFeatureId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_svi_feature#acl_ipv6_ingress_feature_id ServiceLanVpnInterfaceSviFeature#acl_ipv6_ingress_feature_id}
  */
  readonly aclIpv6IngressFeatureId?: string;
  /**
  * Timeout value for dynamically learned ARP entries, <0..2678400> seconds
  *   - Range: `0`-`2678400`
  *   - Default value: `1200`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_svi_feature#arp_timeout ServiceLanVpnInterfaceSviFeature#arp_timeout}
  */
  readonly arpTimeout?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_svi_feature#arp_timeout_variable ServiceLanVpnInterfaceSviFeature#arp_timeout_variable}
  */
  readonly arpTimeoutVariable?: string;
  /**
  * Configure static ARP entries
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_svi_feature#arps ServiceLanVpnInterfaceSviFeature#arps}
  */
  readonly arps?: ServiceLanVpnInterfaceSviFeatureArps[] | cdktf.IResolvable;
  /**
  * The description of the Feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_svi_feature#description ServiceLanVpnInterfaceSviFeature#description}
  */
  readonly description?: string;
  /**
  * Enable DHCPv6
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_svi_feature#enable_dhcpv6 ServiceLanVpnInterfaceSviFeature#enable_dhcpv6}
  */
  readonly enableDhcpv6?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_svi_feature#enable_dhcpv6_variable ServiceLanVpnInterfaceSviFeature#enable_dhcpv6_variable}
  */
  readonly enableDhcpv6Variable?: string;
  /**
  * Feature Profile ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_svi_feature#feature_profile_id ServiceLanVpnInterfaceSviFeature#feature_profile_id}
  */
  readonly featureProfileId: string;
  /**
  * ICMP/ICMPv6 Redirect Disable
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_svi_feature#icmp_redirect_disable ServiceLanVpnInterfaceSviFeature#icmp_redirect_disable}
  */
  readonly icmpRedirectDisable?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_svi_feature#icmp_redirect_disable_variable ServiceLanVpnInterfaceSviFeature#icmp_redirect_disable_variable}
  */
  readonly icmpRedirectDisableVariable?: string;
  /**
  * Interface description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_svi_feature#interface_description ServiceLanVpnInterfaceSviFeature#interface_description}
  */
  readonly interfaceDescription?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_svi_feature#interface_description_variable ServiceLanVpnInterfaceSviFeature#interface_description_variable}
  */
  readonly interfaceDescriptionVariable?: string;
  /**
  * Interface MTU <1500..9216> in bytes
  *   - Range: `1500`-`9216`
  *   - Default value: `1500`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_svi_feature#interface_mtu ServiceLanVpnInterfaceSviFeature#interface_mtu}
  */
  readonly interfaceMtu?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_svi_feature#interface_mtu_variable ServiceLanVpnInterfaceSviFeature#interface_mtu_variable}
  */
  readonly interfaceMtuVariable?: string;
  /**
  * Interface name: VLAN 1 - VLAN 4094 when present
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_svi_feature#interface_name ServiceLanVpnInterfaceSviFeature#interface_name}
  */
  readonly interfaceName?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_svi_feature#interface_name_variable ServiceLanVpnInterfaceSviFeature#interface_name_variable}
  */
  readonly interfaceNameVariable?: string;
  /**
  * IP Directed-Broadcast
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_svi_feature#ip_directed_broadcast ServiceLanVpnInterfaceSviFeature#ip_directed_broadcast}
  */
  readonly ipDirectedBroadcast?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_svi_feature#ip_directed_broadcast_variable ServiceLanVpnInterfaceSviFeature#ip_directed_broadcast_variable}
  */
  readonly ipDirectedBroadcastVariable?: string;
  /**
  * IP MTU <576..Interface MTU>, in bytes
  *   - Range: `576`-`9216`
  *   - Default value: `1500`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_svi_feature#ip_mtu ServiceLanVpnInterfaceSviFeature#ip_mtu}
  */
  readonly ipMtu?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_svi_feature#ip_mtu_variable ServiceLanVpnInterfaceSviFeature#ip_mtu_variable}
  */
  readonly ipMtuVariable?: string;
  /**
  * IP Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_svi_feature#ipv4_address ServiceLanVpnInterfaceSviFeature#ipv4_address}
  */
  readonly ipv4Address?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_svi_feature#ipv4_address_variable ServiceLanVpnInterfaceSviFeature#ipv4_address_variable}
  */
  readonly ipv4AddressVariable?: string;
  /**
  * List of DHCP helper addresses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_svi_feature#ipv4_dhcp_helpers ServiceLanVpnInterfaceSviFeature#ipv4_dhcp_helpers}
  */
  readonly ipv4DhcpHelpers?: string[];
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_svi_feature#ipv4_dhcp_helpers_variable ServiceLanVpnInterfaceSviFeature#ipv4_dhcp_helpers_variable}
  */
  readonly ipv4DhcpHelpersVariable?: string;
  /**
  * Assign secondary IP addresses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_svi_feature#ipv4_secondary_addresses ServiceLanVpnInterfaceSviFeature#ipv4_secondary_addresses}
  */
  readonly ipv4SecondaryAddresses?: ServiceLanVpnInterfaceSviFeatureIpv4SecondaryAddresses[] | cdktf.IResolvable;
  /**
  * Subnet Mask
  *   - Choices: `255.255.255.255`, `255.255.255.254`, `255.255.255.252`, `255.255.255.248`, `255.255.255.240`, `255.255.255.224`, `255.255.255.192`, `255.255.255.128`, `255.255.255.0`, `255.255.254.0`, `255.255.252.0`, `255.255.248.0`, `255.255.240.0`, `255.255.224.0`, `255.255.192.0`, `255.255.128.0`, `255.255.0.0`, `255.254.0.0`, `255.252.0.0`, `255.240.0.0`, `255.224.0.0`, `255.192.0.0`, `255.128.0.0`, `255.0.0.0`, `254.0.0.0`, `252.0.0.0`, `248.0.0.0`, `240.0.0.0`, `224.0.0.0`, `192.0.0.0`, `128.0.0.0`, `0.0.0.0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_svi_feature#ipv4_subnet_mask ServiceLanVpnInterfaceSviFeature#ipv4_subnet_mask}
  */
  readonly ipv4SubnetMask?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_svi_feature#ipv4_subnet_mask_variable ServiceLanVpnInterfaceSviFeature#ipv4_subnet_mask_variable}
  */
  readonly ipv4SubnetMaskVariable?: string;
  /**
  * Enable ipv4 VRRP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_svi_feature#ipv4_vrrps ServiceLanVpnInterfaceSviFeature#ipv4_vrrps}
  */
  readonly ipv4Vrrps?: ServiceLanVpnInterfaceSviFeatureIpv4Vrrps[] | cdktf.IResolvable;
  /**
  * Assign IPv6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_svi_feature#ipv6_address ServiceLanVpnInterfaceSviFeature#ipv6_address}
  */
  readonly ipv6Address?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_svi_feature#ipv6_address_variable ServiceLanVpnInterfaceSviFeature#ipv6_address_variable}
  */
  readonly ipv6AddressVariable?: string;
  /**
  * DHCPv6 Helper
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_svi_feature#ipv6_dhcp_helpers ServiceLanVpnInterfaceSviFeature#ipv6_dhcp_helpers}
  */
  readonly ipv6DhcpHelpers?: ServiceLanVpnInterfaceSviFeatureIpv6DhcpHelpers[] | cdktf.IResolvable;
  /**
  * Assign secondary IPv6 addresses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_svi_feature#ipv6_secondary_addresses ServiceLanVpnInterfaceSviFeature#ipv6_secondary_addresses}
  */
  readonly ipv6SecondaryAddresses?: ServiceLanVpnInterfaceSviFeatureIpv6SecondaryAddresses[] | cdktf.IResolvable;
  /**
  * Enable ipv6 VRRP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_svi_feature#ipv6_vrrps ServiceLanVpnInterfaceSviFeature#ipv6_vrrps}
  */
  readonly ipv6Vrrps?: ServiceLanVpnInterfaceSviFeatureIpv6Vrrps[] | cdktf.IResolvable;
  /**
  * The name of the Feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_svi_feature#name ServiceLanVpnInterfaceSviFeature#name}
  */
  readonly name: string;
  /**
  * Service LAN VPN Feature ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_svi_feature#service_lan_vpn_feature_id ServiceLanVpnInterfaceSviFeature#service_lan_vpn_feature_id}
  */
  readonly serviceLanVpnFeatureId: string;
  /**
  * Administrative state
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_svi_feature#shutdown ServiceLanVpnInterfaceSviFeature#shutdown}
  */
  readonly shutdown?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_svi_feature#shutdown_variable ServiceLanVpnInterfaceSviFeature#shutdown_variable}
  */
  readonly shutdownVariable?: string;
  /**
  * TCP MSS on SYN packets, in bytes
  *   - Range: `552`-`1960`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_svi_feature#tcp_mss ServiceLanVpnInterfaceSviFeature#tcp_mss}
  */
  readonly tcpMss?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_svi_feature#tcp_mss_variable ServiceLanVpnInterfaceSviFeature#tcp_mss_variable}
  */
  readonly tcpMssVariable?: string;
}
export interface ServiceLanVpnInterfaceSviFeatureArps {
  /**
  * IP Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_svi_feature#ip_address ServiceLanVpnInterfaceSviFeature#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_svi_feature#ip_address_variable ServiceLanVpnInterfaceSviFeature#ip_address_variable}
  */
  readonly ipAddressVariable?: string;
  /**
  * MAC address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_svi_feature#mac_address ServiceLanVpnInterfaceSviFeature#mac_address}
  */
  readonly macAddress?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_svi_feature#mac_address_variable ServiceLanVpnInterfaceSviFeature#mac_address_variable}
  */
  readonly macAddressVariable?: string;
}

export function serviceLanVpnInterfaceSviFeatureArpsToTerraform(struct?: ServiceLanVpnInterfaceSviFeatureArps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    ip_address_variable: cdktf.stringToTerraform(struct!.ipAddressVariable),
    mac_address: cdktf.stringToTerraform(struct!.macAddress),
    mac_address_variable: cdktf.stringToTerraform(struct!.macAddressVariable),
  }
}


export function serviceLanVpnInterfaceSviFeatureArpsToHclTerraform(struct?: ServiceLanVpnInterfaceSviFeatureArps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_address_variable: {
      value: cdktf.stringToHclTerraform(struct!.ipAddressVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mac_address: {
      value: cdktf.stringToHclTerraform(struct!.macAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mac_address_variable: {
      value: cdktf.stringToHclTerraform(struct!.macAddressVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceLanVpnInterfaceSviFeatureArpsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceLanVpnInterfaceSviFeatureArps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._ipAddressVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddressVariable = this._ipAddressVariable;
    }
    if (this._macAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.macAddress = this._macAddress;
    }
    if (this._macAddressVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.macAddressVariable = this._macAddressVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceLanVpnInterfaceSviFeatureArps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipAddress = undefined;
      this._ipAddressVariable = undefined;
      this._macAddress = undefined;
      this._macAddressVariable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipAddress = value.ipAddress;
      this._ipAddressVariable = value.ipAddressVariable;
      this._macAddress = value.macAddress;
      this._macAddressVariable = value.macAddressVariable;
    }
  }

  // ip_address - computed: false, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // ip_address_variable - computed: false, optional: true, required: false
  private _ipAddressVariable?: string; 
  public get ipAddressVariable() {
    return this.getStringAttribute('ip_address_variable');
  }
  public set ipAddressVariable(value: string) {
    this._ipAddressVariable = value;
  }
  public resetIpAddressVariable() {
    this._ipAddressVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressVariableInput() {
    return this._ipAddressVariable;
  }

  // mac_address - computed: false, optional: true, required: false
  private _macAddress?: string; 
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }
  public set macAddress(value: string) {
    this._macAddress = value;
  }
  public resetMacAddress() {
    this._macAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macAddressInput() {
    return this._macAddress;
  }

  // mac_address_variable - computed: false, optional: true, required: false
  private _macAddressVariable?: string; 
  public get macAddressVariable() {
    return this.getStringAttribute('mac_address_variable');
  }
  public set macAddressVariable(value: string) {
    this._macAddressVariable = value;
  }
  public resetMacAddressVariable() {
    this._macAddressVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macAddressVariableInput() {
    return this._macAddressVariable;
  }
}

export class ServiceLanVpnInterfaceSviFeatureArpsList extends cdktf.ComplexList {
  public internalValue? : ServiceLanVpnInterfaceSviFeatureArps[] | cdktf.IResolvable

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
  public get(index: number): ServiceLanVpnInterfaceSviFeatureArpsOutputReference {
    return new ServiceLanVpnInterfaceSviFeatureArpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceLanVpnInterfaceSviFeatureIpv4SecondaryAddresses {
  /**
  * IpV4 Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_svi_feature#address ServiceLanVpnInterfaceSviFeature#address}
  */
  readonly address?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_svi_feature#address_variable ServiceLanVpnInterfaceSviFeature#address_variable}
  */
  readonly addressVariable?: string;
  /**
  * Subnet Mask
  *   - Choices: `255.255.255.255`, `255.255.255.254`, `255.255.255.252`, `255.255.255.248`, `255.255.255.240`, `255.255.255.224`, `255.255.255.192`, `255.255.255.128`, `255.255.255.0`, `255.255.254.0`, `255.255.252.0`, `255.255.248.0`, `255.255.240.0`, `255.255.224.0`, `255.255.192.0`, `255.255.128.0`, `255.255.0.0`, `255.254.0.0`, `255.252.0.0`, `255.240.0.0`, `255.224.0.0`, `255.192.0.0`, `255.128.0.0`, `255.0.0.0`, `254.0.0.0`, `252.0.0.0`, `248.0.0.0`, `240.0.0.0`, `224.0.0.0`, `192.0.0.0`, `128.0.0.0`, `0.0.0.0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_svi_feature#ipv4_subnet_mask ServiceLanVpnInterfaceSviFeature#ipv4_subnet_mask}
  */
  readonly ipv4SubnetMask?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_svi_feature#ipv4_subnet_mask_variable ServiceLanVpnInterfaceSviFeature#ipv4_subnet_mask_variable}
  */
  readonly ipv4SubnetMaskVariable?: string;
}

export function serviceLanVpnInterfaceSviFeatureIpv4SecondaryAddressesToTerraform(struct?: ServiceLanVpnInterfaceSviFeatureIpv4SecondaryAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    address_variable: cdktf.stringToTerraform(struct!.addressVariable),
    ipv4_subnet_mask: cdktf.stringToTerraform(struct!.ipv4SubnetMask),
    ipv4_subnet_mask_variable: cdktf.stringToTerraform(struct!.ipv4SubnetMaskVariable),
  }
}


export function serviceLanVpnInterfaceSviFeatureIpv4SecondaryAddressesToHclTerraform(struct?: ServiceLanVpnInterfaceSviFeatureIpv4SecondaryAddresses | cdktf.IResolvable): any {
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
    address_variable: {
      value: cdktf.stringToHclTerraform(struct!.addressVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_subnet_mask: {
      value: cdktf.stringToHclTerraform(struct!.ipv4SubnetMask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_subnet_mask_variable: {
      value: cdktf.stringToHclTerraform(struct!.ipv4SubnetMaskVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceLanVpnInterfaceSviFeatureIpv4SecondaryAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceLanVpnInterfaceSviFeatureIpv4SecondaryAddresses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._addressVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressVariable = this._addressVariable;
    }
    if (this._ipv4SubnetMask !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4SubnetMask = this._ipv4SubnetMask;
    }
    if (this._ipv4SubnetMaskVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4SubnetMaskVariable = this._ipv4SubnetMaskVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceLanVpnInterfaceSviFeatureIpv4SecondaryAddresses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._addressVariable = undefined;
      this._ipv4SubnetMask = undefined;
      this._ipv4SubnetMaskVariable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._addressVariable = value.addressVariable;
      this._ipv4SubnetMask = value.ipv4SubnetMask;
      this._ipv4SubnetMaskVariable = value.ipv4SubnetMaskVariable;
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

  // address_variable - computed: false, optional: true, required: false
  private _addressVariable?: string; 
  public get addressVariable() {
    return this.getStringAttribute('address_variable');
  }
  public set addressVariable(value: string) {
    this._addressVariable = value;
  }
  public resetAddressVariable() {
    this._addressVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressVariableInput() {
    return this._addressVariable;
  }

  // ipv4_subnet_mask - computed: false, optional: true, required: false
  private _ipv4SubnetMask?: string; 
  public get ipv4SubnetMask() {
    return this.getStringAttribute('ipv4_subnet_mask');
  }
  public set ipv4SubnetMask(value: string) {
    this._ipv4SubnetMask = value;
  }
  public resetIpv4SubnetMask() {
    this._ipv4SubnetMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4SubnetMaskInput() {
    return this._ipv4SubnetMask;
  }

  // ipv4_subnet_mask_variable - computed: false, optional: true, required: false
  private _ipv4SubnetMaskVariable?: string; 
  public get ipv4SubnetMaskVariable() {
    return this.getStringAttribute('ipv4_subnet_mask_variable');
  }
  public set ipv4SubnetMaskVariable(value: string) {
    this._ipv4SubnetMaskVariable = value;
  }
  public resetIpv4SubnetMaskVariable() {
    this._ipv4SubnetMaskVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4SubnetMaskVariableInput() {
    return this._ipv4SubnetMaskVariable;
  }
}

export class ServiceLanVpnInterfaceSviFeatureIpv4SecondaryAddressesList extends cdktf.ComplexList {
  public internalValue? : ServiceLanVpnInterfaceSviFeatureIpv4SecondaryAddresses[] | cdktf.IResolvable

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
  public get(index: number): ServiceLanVpnInterfaceSviFeatureIpv4SecondaryAddressesOutputReference {
    return new ServiceLanVpnInterfaceSviFeatureIpv4SecondaryAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceLanVpnInterfaceSviFeatureIpv4VrrpsSecondaryAddresses {
  /**
  * VRRP Secondary IPV4 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_svi_feature#address ServiceLanVpnInterfaceSviFeature#address}
  */
  readonly address?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_svi_feature#address_variable ServiceLanVpnInterfaceSviFeature#address_variable}
  */
  readonly addressVariable?: string;
}

export function serviceLanVpnInterfaceSviFeatureIpv4VrrpsSecondaryAddressesToTerraform(struct?: ServiceLanVpnInterfaceSviFeatureIpv4VrrpsSecondaryAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    address_variable: cdktf.stringToTerraform(struct!.addressVariable),
  }
}


export function serviceLanVpnInterfaceSviFeatureIpv4VrrpsSecondaryAddressesToHclTerraform(struct?: ServiceLanVpnInterfaceSviFeatureIpv4VrrpsSecondaryAddresses | cdktf.IResolvable): any {
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
    address_variable: {
      value: cdktf.stringToHclTerraform(struct!.addressVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceLanVpnInterfaceSviFeatureIpv4VrrpsSecondaryAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceLanVpnInterfaceSviFeatureIpv4VrrpsSecondaryAddresses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._addressVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressVariable = this._addressVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceLanVpnInterfaceSviFeatureIpv4VrrpsSecondaryAddresses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._addressVariable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._addressVariable = value.addressVariable;
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

  // address_variable - computed: false, optional: true, required: false
  private _addressVariable?: string; 
  public get addressVariable() {
    return this.getStringAttribute('address_variable');
  }
  public set addressVariable(value: string) {
    this._addressVariable = value;
  }
  public resetAddressVariable() {
    this._addressVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressVariableInput() {
    return this._addressVariable;
  }
}

export class ServiceLanVpnInterfaceSviFeatureIpv4VrrpsSecondaryAddressesList extends cdktf.ComplexList {
  public internalValue? : ServiceLanVpnInterfaceSviFeatureIpv4VrrpsSecondaryAddresses[] | cdktf.IResolvable

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
  public get(index: number): ServiceLanVpnInterfaceSviFeatureIpv4VrrpsSecondaryAddressesOutputReference {
    return new ServiceLanVpnInterfaceSviFeatureIpv4VrrpsSecondaryAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceLanVpnInterfaceSviFeatureIpv4VrrpsTrackingObjects {
  /**
  * Decrement Value for VRRP priority
  *   - Range: `1`-`255`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_svi_feature#decrement_value ServiceLanVpnInterfaceSviFeature#decrement_value}
  */
  readonly decrementValue?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_svi_feature#decrement_value_variable ServiceLanVpnInterfaceSviFeature#decrement_value_variable}
  */
  readonly decrementValueVariable?: string;
  /**
  * Track Action
  *   - Choices: `decrement`, `shutdown`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_svi_feature#track_action ServiceLanVpnInterfaceSviFeature#track_action}
  */
  readonly trackAction?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_svi_feature#track_action_variable ServiceLanVpnInterfaceSviFeature#track_action_variable}
  */
  readonly trackActionVariable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_svi_feature#tracker_id ServiceLanVpnInterfaceSviFeature#tracker_id}
  */
  readonly trackerId?: string;
}

export function serviceLanVpnInterfaceSviFeatureIpv4VrrpsTrackingObjectsToTerraform(struct?: ServiceLanVpnInterfaceSviFeatureIpv4VrrpsTrackingObjects | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decrement_value: cdktf.numberToTerraform(struct!.decrementValue),
    decrement_value_variable: cdktf.stringToTerraform(struct!.decrementValueVariable),
    track_action: cdktf.stringToTerraform(struct!.trackAction),
    track_action_variable: cdktf.stringToTerraform(struct!.trackActionVariable),
    tracker_id: cdktf.stringToTerraform(struct!.trackerId),
  }
}


export function serviceLanVpnInterfaceSviFeatureIpv4VrrpsTrackingObjectsToHclTerraform(struct?: ServiceLanVpnInterfaceSviFeatureIpv4VrrpsTrackingObjects | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    decrement_value: {
      value: cdktf.numberToHclTerraform(struct!.decrementValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    decrement_value_variable: {
      value: cdktf.stringToHclTerraform(struct!.decrementValueVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    track_action: {
      value: cdktf.stringToHclTerraform(struct!.trackAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    track_action_variable: {
      value: cdktf.stringToHclTerraform(struct!.trackActionVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tracker_id: {
      value: cdktf.stringToHclTerraform(struct!.trackerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceLanVpnInterfaceSviFeatureIpv4VrrpsTrackingObjectsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceLanVpnInterfaceSviFeatureIpv4VrrpsTrackingObjects | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decrementValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.decrementValue = this._decrementValue;
    }
    if (this._decrementValueVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.decrementValueVariable = this._decrementValueVariable;
    }
    if (this._trackAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.trackAction = this._trackAction;
    }
    if (this._trackActionVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.trackActionVariable = this._trackActionVariable;
    }
    if (this._trackerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.trackerId = this._trackerId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceLanVpnInterfaceSviFeatureIpv4VrrpsTrackingObjects | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._decrementValue = undefined;
      this._decrementValueVariable = undefined;
      this._trackAction = undefined;
      this._trackActionVariable = undefined;
      this._trackerId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._decrementValue = value.decrementValue;
      this._decrementValueVariable = value.decrementValueVariable;
      this._trackAction = value.trackAction;
      this._trackActionVariable = value.trackActionVariable;
      this._trackerId = value.trackerId;
    }
  }

  // decrement_value - computed: false, optional: true, required: false
  private _decrementValue?: number; 
  public get decrementValue() {
    return this.getNumberAttribute('decrement_value');
  }
  public set decrementValue(value: number) {
    this._decrementValue = value;
  }
  public resetDecrementValue() {
    this._decrementValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decrementValueInput() {
    return this._decrementValue;
  }

  // decrement_value_variable - computed: false, optional: true, required: false
  private _decrementValueVariable?: string; 
  public get decrementValueVariable() {
    return this.getStringAttribute('decrement_value_variable');
  }
  public set decrementValueVariable(value: string) {
    this._decrementValueVariable = value;
  }
  public resetDecrementValueVariable() {
    this._decrementValueVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decrementValueVariableInput() {
    return this._decrementValueVariable;
  }

  // track_action - computed: false, optional: true, required: false
  private _trackAction?: string; 
  public get trackAction() {
    return this.getStringAttribute('track_action');
  }
  public set trackAction(value: string) {
    this._trackAction = value;
  }
  public resetTrackAction() {
    this._trackAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackActionInput() {
    return this._trackAction;
  }

  // track_action_variable - computed: false, optional: true, required: false
  private _trackActionVariable?: string; 
  public get trackActionVariable() {
    return this.getStringAttribute('track_action_variable');
  }
  public set trackActionVariable(value: string) {
    this._trackActionVariable = value;
  }
  public resetTrackActionVariable() {
    this._trackActionVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackActionVariableInput() {
    return this._trackActionVariable;
  }

  // tracker_id - computed: false, optional: true, required: false
  private _trackerId?: string; 
  public get trackerId() {
    return this.getStringAttribute('tracker_id');
  }
  public set trackerId(value: string) {
    this._trackerId = value;
  }
  public resetTrackerId() {
    this._trackerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackerIdInput() {
    return this._trackerId;
  }
}

export class ServiceLanVpnInterfaceSviFeatureIpv4VrrpsTrackingObjectsList extends cdktf.ComplexList {
  public internalValue? : ServiceLanVpnInterfaceSviFeatureIpv4VrrpsTrackingObjects[] | cdktf.IResolvable

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
  public get(index: number): ServiceLanVpnInterfaceSviFeatureIpv4VrrpsTrackingObjectsOutputReference {
    return new ServiceLanVpnInterfaceSviFeatureIpv4VrrpsTrackingObjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceLanVpnInterfaceSviFeatureIpv4Vrrps {
  /**
  * Assign IPV4 Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_svi_feature#address ServiceLanVpnInterfaceSviFeature#address}
  */
  readonly address?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_svi_feature#address_variable ServiceLanVpnInterfaceSviFeature#address_variable}
  */
  readonly addressVariable?: string;
  /**
  * Group ID
  *   - Range: `1`-`255`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_svi_feature#group_id ServiceLanVpnInterfaceSviFeature#group_id}
  */
  readonly groupId?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_svi_feature#group_id_variable ServiceLanVpnInterfaceSviFeature#group_id_variable}
  */
  readonly groupIdVariable?: string;
  /**
  * Track Prefix List
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_svi_feature#prefix_list ServiceLanVpnInterfaceSviFeature#prefix_list}
  */
  readonly prefixList?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_svi_feature#prefix_list_variable ServiceLanVpnInterfaceSviFeature#prefix_list_variable}
  */
  readonly prefixListVariable?: string;
  /**
  * Set priority
  *   - Range: `1`-`254`
  *   - Default value: `100`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_svi_feature#priority ServiceLanVpnInterfaceSviFeature#priority}
  */
  readonly priority?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_svi_feature#priority_variable ServiceLanVpnInterfaceSviFeature#priority_variable}
  */
  readonly priorityVariable?: string;
  /**
  * VRRP Secondary IPV4 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_svi_feature#secondary_addresses ServiceLanVpnInterfaceSviFeature#secondary_addresses}
  */
  readonly secondaryAddresses?: ServiceLanVpnInterfaceSviFeatureIpv4VrrpsSecondaryAddresses[] | cdktf.IResolvable;
  /**
  * Timer interval for successive advertisements, in milliseconds
  *   - Range: `100`-`40950`
  *   - Default value: `1000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_svi_feature#timer ServiceLanVpnInterfaceSviFeature#timer}
  */
  readonly timer?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_svi_feature#timer_variable ServiceLanVpnInterfaceSviFeature#timer_variable}
  */
  readonly timerVariable?: string;
  /**
  * change TLOC preference
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_svi_feature#tloc_prefix_change ServiceLanVpnInterfaceSviFeature#tloc_prefix_change}
  */
  readonly tlocPrefixChange?: boolean | cdktf.IResolvable;
  /**
  * Set tloc preference change value
  *   - Range: `1`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_svi_feature#tloc_prefix_change_value ServiceLanVpnInterfaceSviFeature#tloc_prefix_change_value}
  */
  readonly tlocPrefixChangeValue?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_svi_feature#tloc_prefix_change_value_variable ServiceLanVpnInterfaceSviFeature#tloc_prefix_change_value_variable}
  */
  readonly tlocPrefixChangeValueVariable?: string;
  /**
  * Track OMP status
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_svi_feature#track_omp ServiceLanVpnInterfaceSviFeature#track_omp}
  */
  readonly trackOmp?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_svi_feature#track_omp_variable ServiceLanVpnInterfaceSviFeature#track_omp_variable}
  */
  readonly trackOmpVariable?: string;
  /**
  * tracking object for VRRP configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_svi_feature#tracking_objects ServiceLanVpnInterfaceSviFeature#tracking_objects}
  */
  readonly trackingObjects?: ServiceLanVpnInterfaceSviFeatureIpv4VrrpsTrackingObjects[] | cdktf.IResolvable;
}

export function serviceLanVpnInterfaceSviFeatureIpv4VrrpsToTerraform(struct?: ServiceLanVpnInterfaceSviFeatureIpv4Vrrps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    address_variable: cdktf.stringToTerraform(struct!.addressVariable),
    group_id: cdktf.numberToTerraform(struct!.groupId),
    group_id_variable: cdktf.stringToTerraform(struct!.groupIdVariable),
    prefix_list: cdktf.stringToTerraform(struct!.prefixList),
    prefix_list_variable: cdktf.stringToTerraform(struct!.prefixListVariable),
    priority: cdktf.numberToTerraform(struct!.priority),
    priority_variable: cdktf.stringToTerraform(struct!.priorityVariable),
    secondary_addresses: cdktf.listMapper(serviceLanVpnInterfaceSviFeatureIpv4VrrpsSecondaryAddressesToTerraform, false)(struct!.secondaryAddresses),
    timer: cdktf.numberToTerraform(struct!.timer),
    timer_variable: cdktf.stringToTerraform(struct!.timerVariable),
    tloc_prefix_change: cdktf.booleanToTerraform(struct!.tlocPrefixChange),
    tloc_prefix_change_value: cdktf.numberToTerraform(struct!.tlocPrefixChangeValue),
    tloc_prefix_change_value_variable: cdktf.stringToTerraform(struct!.tlocPrefixChangeValueVariable),
    track_omp: cdktf.booleanToTerraform(struct!.trackOmp),
    track_omp_variable: cdktf.stringToTerraform(struct!.trackOmpVariable),
    tracking_objects: cdktf.listMapper(serviceLanVpnInterfaceSviFeatureIpv4VrrpsTrackingObjectsToTerraform, false)(struct!.trackingObjects),
  }
}


export function serviceLanVpnInterfaceSviFeatureIpv4VrrpsToHclTerraform(struct?: ServiceLanVpnInterfaceSviFeatureIpv4Vrrps | cdktf.IResolvable): any {
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
    address_variable: {
      value: cdktf.stringToHclTerraform(struct!.addressVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_id: {
      value: cdktf.numberToHclTerraform(struct!.groupId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    group_id_variable: {
      value: cdktf.stringToHclTerraform(struct!.groupIdVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_list: {
      value: cdktf.stringToHclTerraform(struct!.prefixList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_list_variable: {
      value: cdktf.stringToHclTerraform(struct!.prefixListVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    priority_variable: {
      value: cdktf.stringToHclTerraform(struct!.priorityVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secondary_addresses: {
      value: cdktf.listMapperHcl(serviceLanVpnInterfaceSviFeatureIpv4VrrpsSecondaryAddressesToHclTerraform, false)(struct!.secondaryAddresses),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceLanVpnInterfaceSviFeatureIpv4VrrpsSecondaryAddressesList",
    },
    timer: {
      value: cdktf.numberToHclTerraform(struct!.timer),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timer_variable: {
      value: cdktf.stringToHclTerraform(struct!.timerVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tloc_prefix_change: {
      value: cdktf.booleanToHclTerraform(struct!.tlocPrefixChange),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tloc_prefix_change_value: {
      value: cdktf.numberToHclTerraform(struct!.tlocPrefixChangeValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tloc_prefix_change_value_variable: {
      value: cdktf.stringToHclTerraform(struct!.tlocPrefixChangeValueVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    track_omp: {
      value: cdktf.booleanToHclTerraform(struct!.trackOmp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    track_omp_variable: {
      value: cdktf.stringToHclTerraform(struct!.trackOmpVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tracking_objects: {
      value: cdktf.listMapperHcl(serviceLanVpnInterfaceSviFeatureIpv4VrrpsTrackingObjectsToHclTerraform, false)(struct!.trackingObjects),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceLanVpnInterfaceSviFeatureIpv4VrrpsTrackingObjectsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceLanVpnInterfaceSviFeatureIpv4VrrpsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceLanVpnInterfaceSviFeatureIpv4Vrrps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._addressVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressVariable = this._addressVariable;
    }
    if (this._groupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupId = this._groupId;
    }
    if (this._groupIdVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupIdVariable = this._groupIdVariable;
    }
    if (this._prefixList !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixList = this._prefixList;
    }
    if (this._prefixListVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixListVariable = this._prefixListVariable;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._priorityVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.priorityVariable = this._priorityVariable;
    }
    if (this._secondaryAddresses?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryAddresses = this._secondaryAddresses?.internalValue;
    }
    if (this._timer !== undefined) {
      hasAnyValues = true;
      internalValueResult.timer = this._timer;
    }
    if (this._timerVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.timerVariable = this._timerVariable;
    }
    if (this._tlocPrefixChange !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlocPrefixChange = this._tlocPrefixChange;
    }
    if (this._tlocPrefixChangeValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlocPrefixChangeValue = this._tlocPrefixChangeValue;
    }
    if (this._tlocPrefixChangeValueVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlocPrefixChangeValueVariable = this._tlocPrefixChangeValueVariable;
    }
    if (this._trackOmp !== undefined) {
      hasAnyValues = true;
      internalValueResult.trackOmp = this._trackOmp;
    }
    if (this._trackOmpVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.trackOmpVariable = this._trackOmpVariable;
    }
    if (this._trackingObjects?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trackingObjects = this._trackingObjects?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceLanVpnInterfaceSviFeatureIpv4Vrrps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._addressVariable = undefined;
      this._groupId = undefined;
      this._groupIdVariable = undefined;
      this._prefixList = undefined;
      this._prefixListVariable = undefined;
      this._priority = undefined;
      this._priorityVariable = undefined;
      this._secondaryAddresses.internalValue = undefined;
      this._timer = undefined;
      this._timerVariable = undefined;
      this._tlocPrefixChange = undefined;
      this._tlocPrefixChangeValue = undefined;
      this._tlocPrefixChangeValueVariable = undefined;
      this._trackOmp = undefined;
      this._trackOmpVariable = undefined;
      this._trackingObjects.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._addressVariable = value.addressVariable;
      this._groupId = value.groupId;
      this._groupIdVariable = value.groupIdVariable;
      this._prefixList = value.prefixList;
      this._prefixListVariable = value.prefixListVariable;
      this._priority = value.priority;
      this._priorityVariable = value.priorityVariable;
      this._secondaryAddresses.internalValue = value.secondaryAddresses;
      this._timer = value.timer;
      this._timerVariable = value.timerVariable;
      this._tlocPrefixChange = value.tlocPrefixChange;
      this._tlocPrefixChangeValue = value.tlocPrefixChangeValue;
      this._tlocPrefixChangeValueVariable = value.tlocPrefixChangeValueVariable;
      this._trackOmp = value.trackOmp;
      this._trackOmpVariable = value.trackOmpVariable;
      this._trackingObjects.internalValue = value.trackingObjects;
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

  // address_variable - computed: false, optional: true, required: false
  private _addressVariable?: string; 
  public get addressVariable() {
    return this.getStringAttribute('address_variable');
  }
  public set addressVariable(value: string) {
    this._addressVariable = value;
  }
  public resetAddressVariable() {
    this._addressVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressVariableInput() {
    return this._addressVariable;
  }

  // group_id - computed: false, optional: true, required: false
  private _groupId?: number; 
  public get groupId() {
    return this.getNumberAttribute('group_id');
  }
  public set groupId(value: number) {
    this._groupId = value;
  }
  public resetGroupId() {
    this._groupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }

  // group_id_variable - computed: false, optional: true, required: false
  private _groupIdVariable?: string; 
  public get groupIdVariable() {
    return this.getStringAttribute('group_id_variable');
  }
  public set groupIdVariable(value: string) {
    this._groupIdVariable = value;
  }
  public resetGroupIdVariable() {
    this._groupIdVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdVariableInput() {
    return this._groupIdVariable;
  }

  // prefix_list - computed: false, optional: true, required: false
  private _prefixList?: string; 
  public get prefixList() {
    return this.getStringAttribute('prefix_list');
  }
  public set prefixList(value: string) {
    this._prefixList = value;
  }
  public resetPrefixList() {
    this._prefixList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixListInput() {
    return this._prefixList;
  }

  // prefix_list_variable - computed: false, optional: true, required: false
  private _prefixListVariable?: string; 
  public get prefixListVariable() {
    return this.getStringAttribute('prefix_list_variable');
  }
  public set prefixListVariable(value: string) {
    this._prefixListVariable = value;
  }
  public resetPrefixListVariable() {
    this._prefixListVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixListVariableInput() {
    return this._prefixListVariable;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // priority_variable - computed: false, optional: true, required: false
  private _priorityVariable?: string; 
  public get priorityVariable() {
    return this.getStringAttribute('priority_variable');
  }
  public set priorityVariable(value: string) {
    this._priorityVariable = value;
  }
  public resetPriorityVariable() {
    this._priorityVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityVariableInput() {
    return this._priorityVariable;
  }

  // secondary_addresses - computed: false, optional: true, required: false
  private _secondaryAddresses = new ServiceLanVpnInterfaceSviFeatureIpv4VrrpsSecondaryAddressesList(this, "secondary_addresses", false);
  public get secondaryAddresses() {
    return this._secondaryAddresses;
  }
  public putSecondaryAddresses(value: ServiceLanVpnInterfaceSviFeatureIpv4VrrpsSecondaryAddresses[] | cdktf.IResolvable) {
    this._secondaryAddresses.internalValue = value;
  }
  public resetSecondaryAddresses() {
    this._secondaryAddresses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryAddressesInput() {
    return this._secondaryAddresses.internalValue;
  }

  // timer - computed: false, optional: true, required: false
  private _timer?: number; 
  public get timer() {
    return this.getNumberAttribute('timer');
  }
  public set timer(value: number) {
    this._timer = value;
  }
  public resetTimer() {
    this._timer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timerInput() {
    return this._timer;
  }

  // timer_variable - computed: false, optional: true, required: false
  private _timerVariable?: string; 
  public get timerVariable() {
    return this.getStringAttribute('timer_variable');
  }
  public set timerVariable(value: string) {
    this._timerVariable = value;
  }
  public resetTimerVariable() {
    this._timerVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timerVariableInput() {
    return this._timerVariable;
  }

  // tloc_prefix_change - computed: false, optional: true, required: false
  private _tlocPrefixChange?: boolean | cdktf.IResolvable; 
  public get tlocPrefixChange() {
    return this.getBooleanAttribute('tloc_prefix_change');
  }
  public set tlocPrefixChange(value: boolean | cdktf.IResolvable) {
    this._tlocPrefixChange = value;
  }
  public resetTlocPrefixChange() {
    this._tlocPrefixChange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlocPrefixChangeInput() {
    return this._tlocPrefixChange;
  }

  // tloc_prefix_change_value - computed: false, optional: true, required: false
  private _tlocPrefixChangeValue?: number; 
  public get tlocPrefixChangeValue() {
    return this.getNumberAttribute('tloc_prefix_change_value');
  }
  public set tlocPrefixChangeValue(value: number) {
    this._tlocPrefixChangeValue = value;
  }
  public resetTlocPrefixChangeValue() {
    this._tlocPrefixChangeValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlocPrefixChangeValueInput() {
    return this._tlocPrefixChangeValue;
  }

  // tloc_prefix_change_value_variable - computed: false, optional: true, required: false
  private _tlocPrefixChangeValueVariable?: string; 
  public get tlocPrefixChangeValueVariable() {
    return this.getStringAttribute('tloc_prefix_change_value_variable');
  }
  public set tlocPrefixChangeValueVariable(value: string) {
    this._tlocPrefixChangeValueVariable = value;
  }
  public resetTlocPrefixChangeValueVariable() {
    this._tlocPrefixChangeValueVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlocPrefixChangeValueVariableInput() {
    return this._tlocPrefixChangeValueVariable;
  }

  // track_omp - computed: false, optional: true, required: false
  private _trackOmp?: boolean | cdktf.IResolvable; 
  public get trackOmp() {
    return this.getBooleanAttribute('track_omp');
  }
  public set trackOmp(value: boolean | cdktf.IResolvable) {
    this._trackOmp = value;
  }
  public resetTrackOmp() {
    this._trackOmp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackOmpInput() {
    return this._trackOmp;
  }

  // track_omp_variable - computed: false, optional: true, required: false
  private _trackOmpVariable?: string; 
  public get trackOmpVariable() {
    return this.getStringAttribute('track_omp_variable');
  }
  public set trackOmpVariable(value: string) {
    this._trackOmpVariable = value;
  }
  public resetTrackOmpVariable() {
    this._trackOmpVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackOmpVariableInput() {
    return this._trackOmpVariable;
  }

  // tracking_objects - computed: false, optional: true, required: false
  private _trackingObjects = new ServiceLanVpnInterfaceSviFeatureIpv4VrrpsTrackingObjectsList(this, "tracking_objects", false);
  public get trackingObjects() {
    return this._trackingObjects;
  }
  public putTrackingObjects(value: ServiceLanVpnInterfaceSviFeatureIpv4VrrpsTrackingObjects[] | cdktf.IResolvable) {
    this._trackingObjects.internalValue = value;
  }
  public resetTrackingObjects() {
    this._trackingObjects.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackingObjectsInput() {
    return this._trackingObjects.internalValue;
  }
}

export class ServiceLanVpnInterfaceSviFeatureIpv4VrrpsList extends cdktf.ComplexList {
  public internalValue? : ServiceLanVpnInterfaceSviFeatureIpv4Vrrps[] | cdktf.IResolvable

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
  public get(index: number): ServiceLanVpnInterfaceSviFeatureIpv4VrrpsOutputReference {
    return new ServiceLanVpnInterfaceSviFeatureIpv4VrrpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceLanVpnInterfaceSviFeatureIpv6DhcpHelpers {
  /**
  * DHCPv6 Helper address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_svi_feature#address ServiceLanVpnInterfaceSviFeature#address}
  */
  readonly address?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_svi_feature#address_variable ServiceLanVpnInterfaceSviFeature#address_variable}
  */
  readonly addressVariable?: string;
  /**
  * DHCPv6 Helper VPN
  *   - Range: `1`-`65536`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_svi_feature#vpn ServiceLanVpnInterfaceSviFeature#vpn}
  */
  readonly vpn?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_svi_feature#vpn_variable ServiceLanVpnInterfaceSviFeature#vpn_variable}
  */
  readonly vpnVariable?: string;
}

export function serviceLanVpnInterfaceSviFeatureIpv6DhcpHelpersToTerraform(struct?: ServiceLanVpnInterfaceSviFeatureIpv6DhcpHelpers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    address_variable: cdktf.stringToTerraform(struct!.addressVariable),
    vpn: cdktf.numberToTerraform(struct!.vpn),
    vpn_variable: cdktf.stringToTerraform(struct!.vpnVariable),
  }
}


export function serviceLanVpnInterfaceSviFeatureIpv6DhcpHelpersToHclTerraform(struct?: ServiceLanVpnInterfaceSviFeatureIpv6DhcpHelpers | cdktf.IResolvable): any {
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
    address_variable: {
      value: cdktf.stringToHclTerraform(struct!.addressVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpn: {
      value: cdktf.numberToHclTerraform(struct!.vpn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vpn_variable: {
      value: cdktf.stringToHclTerraform(struct!.vpnVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceLanVpnInterfaceSviFeatureIpv6DhcpHelpersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceLanVpnInterfaceSviFeatureIpv6DhcpHelpers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._addressVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressVariable = this._addressVariable;
    }
    if (this._vpn !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpn = this._vpn;
    }
    if (this._vpnVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpnVariable = this._vpnVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceLanVpnInterfaceSviFeatureIpv6DhcpHelpers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._addressVariable = undefined;
      this._vpn = undefined;
      this._vpnVariable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._addressVariable = value.addressVariable;
      this._vpn = value.vpn;
      this._vpnVariable = value.vpnVariable;
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

  // address_variable - computed: false, optional: true, required: false
  private _addressVariable?: string; 
  public get addressVariable() {
    return this.getStringAttribute('address_variable');
  }
  public set addressVariable(value: string) {
    this._addressVariable = value;
  }
  public resetAddressVariable() {
    this._addressVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressVariableInput() {
    return this._addressVariable;
  }

  // vpn - computed: false, optional: true, required: false
  private _vpn?: number; 
  public get vpn() {
    return this.getNumberAttribute('vpn');
  }
  public set vpn(value: number) {
    this._vpn = value;
  }
  public resetVpn() {
    this._vpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnInput() {
    return this._vpn;
  }

  // vpn_variable - computed: false, optional: true, required: false
  private _vpnVariable?: string; 
  public get vpnVariable() {
    return this.getStringAttribute('vpn_variable');
  }
  public set vpnVariable(value: string) {
    this._vpnVariable = value;
  }
  public resetVpnVariable() {
    this._vpnVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnVariableInput() {
    return this._vpnVariable;
  }
}

export class ServiceLanVpnInterfaceSviFeatureIpv6DhcpHelpersList extends cdktf.ComplexList {
  public internalValue? : ServiceLanVpnInterfaceSviFeatureIpv6DhcpHelpers[] | cdktf.IResolvable

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
  public get(index: number): ServiceLanVpnInterfaceSviFeatureIpv6DhcpHelpersOutputReference {
    return new ServiceLanVpnInterfaceSviFeatureIpv6DhcpHelpersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceLanVpnInterfaceSviFeatureIpv6SecondaryAddresses {
  /**
  * IPv6 Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_svi_feature#address ServiceLanVpnInterfaceSviFeature#address}
  */
  readonly address?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_svi_feature#address_variable ServiceLanVpnInterfaceSviFeature#address_variable}
  */
  readonly addressVariable?: string;
}

export function serviceLanVpnInterfaceSviFeatureIpv6SecondaryAddressesToTerraform(struct?: ServiceLanVpnInterfaceSviFeatureIpv6SecondaryAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    address_variable: cdktf.stringToTerraform(struct!.addressVariable),
  }
}


export function serviceLanVpnInterfaceSviFeatureIpv6SecondaryAddressesToHclTerraform(struct?: ServiceLanVpnInterfaceSviFeatureIpv6SecondaryAddresses | cdktf.IResolvable): any {
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
    address_variable: {
      value: cdktf.stringToHclTerraform(struct!.addressVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceLanVpnInterfaceSviFeatureIpv6SecondaryAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceLanVpnInterfaceSviFeatureIpv6SecondaryAddresses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._addressVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressVariable = this._addressVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceLanVpnInterfaceSviFeatureIpv6SecondaryAddresses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._addressVariable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._addressVariable = value.addressVariable;
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

  // address_variable - computed: false, optional: true, required: false
  private _addressVariable?: string; 
  public get addressVariable() {
    return this.getStringAttribute('address_variable');
  }
  public set addressVariable(value: string) {
    this._addressVariable = value;
  }
  public resetAddressVariable() {
    this._addressVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressVariableInput() {
    return this._addressVariable;
  }
}

export class ServiceLanVpnInterfaceSviFeatureIpv6SecondaryAddressesList extends cdktf.ComplexList {
  public internalValue? : ServiceLanVpnInterfaceSviFeatureIpv6SecondaryAddresses[] | cdktf.IResolvable

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
  public get(index: number): ServiceLanVpnInterfaceSviFeatureIpv6SecondaryAddressesOutputReference {
    return new ServiceLanVpnInterfaceSviFeatureIpv6SecondaryAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceLanVpnInterfaceSviFeatureIpv6VrrpsAddresses {
  /**
  * Assign Global IPv6 Prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_svi_feature#global_address ServiceLanVpnInterfaceSviFeature#global_address}
  */
  readonly globalAddress?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_svi_feature#global_address_variable ServiceLanVpnInterfaceSviFeature#global_address_variable}
  */
  readonly globalAddressVariable?: string;
  /**
  * Use link-local IPv6 Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_svi_feature#link_local_address ServiceLanVpnInterfaceSviFeature#link_local_address}
  */
  readonly linkLocalAddress?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_svi_feature#link_local_address_variable ServiceLanVpnInterfaceSviFeature#link_local_address_variable}
  */
  readonly linkLocalAddressVariable?: string;
}

export function serviceLanVpnInterfaceSviFeatureIpv6VrrpsAddressesToTerraform(struct?: ServiceLanVpnInterfaceSviFeatureIpv6VrrpsAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    global_address: cdktf.stringToTerraform(struct!.globalAddress),
    global_address_variable: cdktf.stringToTerraform(struct!.globalAddressVariable),
    link_local_address: cdktf.stringToTerraform(struct!.linkLocalAddress),
    link_local_address_variable: cdktf.stringToTerraform(struct!.linkLocalAddressVariable),
  }
}


export function serviceLanVpnInterfaceSviFeatureIpv6VrrpsAddressesToHclTerraform(struct?: ServiceLanVpnInterfaceSviFeatureIpv6VrrpsAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    global_address: {
      value: cdktf.stringToHclTerraform(struct!.globalAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    global_address_variable: {
      value: cdktf.stringToHclTerraform(struct!.globalAddressVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    link_local_address: {
      value: cdktf.stringToHclTerraform(struct!.linkLocalAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    link_local_address_variable: {
      value: cdktf.stringToHclTerraform(struct!.linkLocalAddressVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceLanVpnInterfaceSviFeatureIpv6VrrpsAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceLanVpnInterfaceSviFeatureIpv6VrrpsAddresses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._globalAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalAddress = this._globalAddress;
    }
    if (this._globalAddressVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalAddressVariable = this._globalAddressVariable;
    }
    if (this._linkLocalAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkLocalAddress = this._linkLocalAddress;
    }
    if (this._linkLocalAddressVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkLocalAddressVariable = this._linkLocalAddressVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceLanVpnInterfaceSviFeatureIpv6VrrpsAddresses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._globalAddress = undefined;
      this._globalAddressVariable = undefined;
      this._linkLocalAddress = undefined;
      this._linkLocalAddressVariable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._globalAddress = value.globalAddress;
      this._globalAddressVariable = value.globalAddressVariable;
      this._linkLocalAddress = value.linkLocalAddress;
      this._linkLocalAddressVariable = value.linkLocalAddressVariable;
    }
  }

  // global_address - computed: false, optional: true, required: false
  private _globalAddress?: string; 
  public get globalAddress() {
    return this.getStringAttribute('global_address');
  }
  public set globalAddress(value: string) {
    this._globalAddress = value;
  }
  public resetGlobalAddress() {
    this._globalAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalAddressInput() {
    return this._globalAddress;
  }

  // global_address_variable - computed: false, optional: true, required: false
  private _globalAddressVariable?: string; 
  public get globalAddressVariable() {
    return this.getStringAttribute('global_address_variable');
  }
  public set globalAddressVariable(value: string) {
    this._globalAddressVariable = value;
  }
  public resetGlobalAddressVariable() {
    this._globalAddressVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalAddressVariableInput() {
    return this._globalAddressVariable;
  }

  // link_local_address - computed: false, optional: true, required: false
  private _linkLocalAddress?: string; 
  public get linkLocalAddress() {
    return this.getStringAttribute('link_local_address');
  }
  public set linkLocalAddress(value: string) {
    this._linkLocalAddress = value;
  }
  public resetLinkLocalAddress() {
    this._linkLocalAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkLocalAddressInput() {
    return this._linkLocalAddress;
  }

  // link_local_address_variable - computed: false, optional: true, required: false
  private _linkLocalAddressVariable?: string; 
  public get linkLocalAddressVariable() {
    return this.getStringAttribute('link_local_address_variable');
  }
  public set linkLocalAddressVariable(value: string) {
    this._linkLocalAddressVariable = value;
  }
  public resetLinkLocalAddressVariable() {
    this._linkLocalAddressVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkLocalAddressVariableInput() {
    return this._linkLocalAddressVariable;
  }
}

export class ServiceLanVpnInterfaceSviFeatureIpv6VrrpsAddressesList extends cdktf.ComplexList {
  public internalValue? : ServiceLanVpnInterfaceSviFeatureIpv6VrrpsAddresses[] | cdktf.IResolvable

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
  public get(index: number): ServiceLanVpnInterfaceSviFeatureIpv6VrrpsAddressesOutputReference {
    return new ServiceLanVpnInterfaceSviFeatureIpv6VrrpsAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceLanVpnInterfaceSviFeatureIpv6VrrpsSecondaryAddresses {
  /**
  * IPv6 Secondary IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_svi_feature#prefix ServiceLanVpnInterfaceSviFeature#prefix}
  */
  readonly prefix?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_svi_feature#prefix_variable ServiceLanVpnInterfaceSviFeature#prefix_variable}
  */
  readonly prefixVariable?: string;
}

export function serviceLanVpnInterfaceSviFeatureIpv6VrrpsSecondaryAddressesToTerraform(struct?: ServiceLanVpnInterfaceSviFeatureIpv6VrrpsSecondaryAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix: cdktf.stringToTerraform(struct!.prefix),
    prefix_variable: cdktf.stringToTerraform(struct!.prefixVariable),
  }
}


export function serviceLanVpnInterfaceSviFeatureIpv6VrrpsSecondaryAddressesToHclTerraform(struct?: ServiceLanVpnInterfaceSviFeatureIpv6VrrpsSecondaryAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_variable: {
      value: cdktf.stringToHclTerraform(struct!.prefixVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceLanVpnInterfaceSviFeatureIpv6VrrpsSecondaryAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceLanVpnInterfaceSviFeatureIpv6VrrpsSecondaryAddresses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._prefixVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixVariable = this._prefixVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceLanVpnInterfaceSviFeatureIpv6VrrpsSecondaryAddresses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._prefix = undefined;
      this._prefixVariable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._prefix = value.prefix;
      this._prefixVariable = value.prefixVariable;
    }
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // prefix_variable - computed: false, optional: true, required: false
  private _prefixVariable?: string; 
  public get prefixVariable() {
    return this.getStringAttribute('prefix_variable');
  }
  public set prefixVariable(value: string) {
    this._prefixVariable = value;
  }
  public resetPrefixVariable() {
    this._prefixVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixVariableInput() {
    return this._prefixVariable;
  }
}

export class ServiceLanVpnInterfaceSviFeatureIpv6VrrpsSecondaryAddressesList extends cdktf.ComplexList {
  public internalValue? : ServiceLanVpnInterfaceSviFeatureIpv6VrrpsSecondaryAddresses[] | cdktf.IResolvable

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
  public get(index: number): ServiceLanVpnInterfaceSviFeatureIpv6VrrpsSecondaryAddressesOutputReference {
    return new ServiceLanVpnInterfaceSviFeatureIpv6VrrpsSecondaryAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceLanVpnInterfaceSviFeatureIpv6Vrrps {
  /**
  * IPv6 VRRP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_svi_feature#addresses ServiceLanVpnInterfaceSviFeature#addresses}
  */
  readonly addresses?: ServiceLanVpnInterfaceSviFeatureIpv6VrrpsAddresses[] | cdktf.IResolvable;
  /**
  * Group ID
  *   - Range: `1`-`255`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_svi_feature#group_id ServiceLanVpnInterfaceSviFeature#group_id}
  */
  readonly groupId?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_svi_feature#group_id_variable ServiceLanVpnInterfaceSviFeature#group_id_variable}
  */
  readonly groupIdVariable?: string;
  /**
  * Set priority
  *   - Range: `1`-`254`
  *   - Default value: `100`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_svi_feature#priority ServiceLanVpnInterfaceSviFeature#priority}
  */
  readonly priority?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_svi_feature#priority_variable ServiceLanVpnInterfaceSviFeature#priority_variable}
  */
  readonly priorityVariable?: string;
  /**
  * IPv6 Secondary IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_svi_feature#secondary_addresses ServiceLanVpnInterfaceSviFeature#secondary_addresses}
  */
  readonly secondaryAddresses?: ServiceLanVpnInterfaceSviFeatureIpv6VrrpsSecondaryAddresses[] | cdktf.IResolvable;
  /**
  * Timer interval for successive advertisements, in milliseconds
  *   - Range: `100`-`40950`
  *   - Default value: `1000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_svi_feature#timer ServiceLanVpnInterfaceSviFeature#timer}
  */
  readonly timer?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_svi_feature#timer_variable ServiceLanVpnInterfaceSviFeature#timer_variable}
  */
  readonly timerVariable?: string;
  /**
  * Track OMP status
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_svi_feature#track_omp ServiceLanVpnInterfaceSviFeature#track_omp}
  */
  readonly trackOmp?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_svi_feature#track_omp_variable ServiceLanVpnInterfaceSviFeature#track_omp_variable}
  */
  readonly trackOmpVariable?: string;
  /**
  * Track Prefix List
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_svi_feature#track_prefix_list ServiceLanVpnInterfaceSviFeature#track_prefix_list}
  */
  readonly trackPrefixList?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_svi_feature#track_prefix_list_variable ServiceLanVpnInterfaceSviFeature#track_prefix_list_variable}
  */
  readonly trackPrefixListVariable?: string;
}

export function serviceLanVpnInterfaceSviFeatureIpv6VrrpsToTerraform(struct?: ServiceLanVpnInterfaceSviFeatureIpv6Vrrps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addresses: cdktf.listMapper(serviceLanVpnInterfaceSviFeatureIpv6VrrpsAddressesToTerraform, false)(struct!.addresses),
    group_id: cdktf.numberToTerraform(struct!.groupId),
    group_id_variable: cdktf.stringToTerraform(struct!.groupIdVariable),
    priority: cdktf.numberToTerraform(struct!.priority),
    priority_variable: cdktf.stringToTerraform(struct!.priorityVariable),
    secondary_addresses: cdktf.listMapper(serviceLanVpnInterfaceSviFeatureIpv6VrrpsSecondaryAddressesToTerraform, false)(struct!.secondaryAddresses),
    timer: cdktf.numberToTerraform(struct!.timer),
    timer_variable: cdktf.stringToTerraform(struct!.timerVariable),
    track_omp: cdktf.booleanToTerraform(struct!.trackOmp),
    track_omp_variable: cdktf.stringToTerraform(struct!.trackOmpVariable),
    track_prefix_list: cdktf.stringToTerraform(struct!.trackPrefixList),
    track_prefix_list_variable: cdktf.stringToTerraform(struct!.trackPrefixListVariable),
  }
}


export function serviceLanVpnInterfaceSviFeatureIpv6VrrpsToHclTerraform(struct?: ServiceLanVpnInterfaceSviFeatureIpv6Vrrps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addresses: {
      value: cdktf.listMapperHcl(serviceLanVpnInterfaceSviFeatureIpv6VrrpsAddressesToHclTerraform, false)(struct!.addresses),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceLanVpnInterfaceSviFeatureIpv6VrrpsAddressesList",
    },
    group_id: {
      value: cdktf.numberToHclTerraform(struct!.groupId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    group_id_variable: {
      value: cdktf.stringToHclTerraform(struct!.groupIdVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    priority_variable: {
      value: cdktf.stringToHclTerraform(struct!.priorityVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secondary_addresses: {
      value: cdktf.listMapperHcl(serviceLanVpnInterfaceSviFeatureIpv6VrrpsSecondaryAddressesToHclTerraform, false)(struct!.secondaryAddresses),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceLanVpnInterfaceSviFeatureIpv6VrrpsSecondaryAddressesList",
    },
    timer: {
      value: cdktf.numberToHclTerraform(struct!.timer),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timer_variable: {
      value: cdktf.stringToHclTerraform(struct!.timerVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    track_omp: {
      value: cdktf.booleanToHclTerraform(struct!.trackOmp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    track_omp_variable: {
      value: cdktf.stringToHclTerraform(struct!.trackOmpVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    track_prefix_list: {
      value: cdktf.stringToHclTerraform(struct!.trackPrefixList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    track_prefix_list_variable: {
      value: cdktf.stringToHclTerraform(struct!.trackPrefixListVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceLanVpnInterfaceSviFeatureIpv6VrrpsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceLanVpnInterfaceSviFeatureIpv6Vrrps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addresses?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.addresses = this._addresses?.internalValue;
    }
    if (this._groupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupId = this._groupId;
    }
    if (this._groupIdVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupIdVariable = this._groupIdVariable;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._priorityVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.priorityVariable = this._priorityVariable;
    }
    if (this._secondaryAddresses?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryAddresses = this._secondaryAddresses?.internalValue;
    }
    if (this._timer !== undefined) {
      hasAnyValues = true;
      internalValueResult.timer = this._timer;
    }
    if (this._timerVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.timerVariable = this._timerVariable;
    }
    if (this._trackOmp !== undefined) {
      hasAnyValues = true;
      internalValueResult.trackOmp = this._trackOmp;
    }
    if (this._trackOmpVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.trackOmpVariable = this._trackOmpVariable;
    }
    if (this._trackPrefixList !== undefined) {
      hasAnyValues = true;
      internalValueResult.trackPrefixList = this._trackPrefixList;
    }
    if (this._trackPrefixListVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.trackPrefixListVariable = this._trackPrefixListVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceLanVpnInterfaceSviFeatureIpv6Vrrps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addresses.internalValue = undefined;
      this._groupId = undefined;
      this._groupIdVariable = undefined;
      this._priority = undefined;
      this._priorityVariable = undefined;
      this._secondaryAddresses.internalValue = undefined;
      this._timer = undefined;
      this._timerVariable = undefined;
      this._trackOmp = undefined;
      this._trackOmpVariable = undefined;
      this._trackPrefixList = undefined;
      this._trackPrefixListVariable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addresses.internalValue = value.addresses;
      this._groupId = value.groupId;
      this._groupIdVariable = value.groupIdVariable;
      this._priority = value.priority;
      this._priorityVariable = value.priorityVariable;
      this._secondaryAddresses.internalValue = value.secondaryAddresses;
      this._timer = value.timer;
      this._timerVariable = value.timerVariable;
      this._trackOmp = value.trackOmp;
      this._trackOmpVariable = value.trackOmpVariable;
      this._trackPrefixList = value.trackPrefixList;
      this._trackPrefixListVariable = value.trackPrefixListVariable;
    }
  }

  // addresses - computed: false, optional: true, required: false
  private _addresses = new ServiceLanVpnInterfaceSviFeatureIpv6VrrpsAddressesList(this, "addresses", false);
  public get addresses() {
    return this._addresses;
  }
  public putAddresses(value: ServiceLanVpnInterfaceSviFeatureIpv6VrrpsAddresses[] | cdktf.IResolvable) {
    this._addresses.internalValue = value;
  }
  public resetAddresses() {
    this._addresses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressesInput() {
    return this._addresses.internalValue;
  }

  // group_id - computed: false, optional: true, required: false
  private _groupId?: number; 
  public get groupId() {
    return this.getNumberAttribute('group_id');
  }
  public set groupId(value: number) {
    this._groupId = value;
  }
  public resetGroupId() {
    this._groupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }

  // group_id_variable - computed: false, optional: true, required: false
  private _groupIdVariable?: string; 
  public get groupIdVariable() {
    return this.getStringAttribute('group_id_variable');
  }
  public set groupIdVariable(value: string) {
    this._groupIdVariable = value;
  }
  public resetGroupIdVariable() {
    this._groupIdVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdVariableInput() {
    return this._groupIdVariable;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // priority_variable - computed: false, optional: true, required: false
  private _priorityVariable?: string; 
  public get priorityVariable() {
    return this.getStringAttribute('priority_variable');
  }
  public set priorityVariable(value: string) {
    this._priorityVariable = value;
  }
  public resetPriorityVariable() {
    this._priorityVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityVariableInput() {
    return this._priorityVariable;
  }

  // secondary_addresses - computed: false, optional: true, required: false
  private _secondaryAddresses = new ServiceLanVpnInterfaceSviFeatureIpv6VrrpsSecondaryAddressesList(this, "secondary_addresses", false);
  public get secondaryAddresses() {
    return this._secondaryAddresses;
  }
  public putSecondaryAddresses(value: ServiceLanVpnInterfaceSviFeatureIpv6VrrpsSecondaryAddresses[] | cdktf.IResolvable) {
    this._secondaryAddresses.internalValue = value;
  }
  public resetSecondaryAddresses() {
    this._secondaryAddresses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryAddressesInput() {
    return this._secondaryAddresses.internalValue;
  }

  // timer - computed: false, optional: true, required: false
  private _timer?: number; 
  public get timer() {
    return this.getNumberAttribute('timer');
  }
  public set timer(value: number) {
    this._timer = value;
  }
  public resetTimer() {
    this._timer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timerInput() {
    return this._timer;
  }

  // timer_variable - computed: false, optional: true, required: false
  private _timerVariable?: string; 
  public get timerVariable() {
    return this.getStringAttribute('timer_variable');
  }
  public set timerVariable(value: string) {
    this._timerVariable = value;
  }
  public resetTimerVariable() {
    this._timerVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timerVariableInput() {
    return this._timerVariable;
  }

  // track_omp - computed: false, optional: true, required: false
  private _trackOmp?: boolean | cdktf.IResolvable; 
  public get trackOmp() {
    return this.getBooleanAttribute('track_omp');
  }
  public set trackOmp(value: boolean | cdktf.IResolvable) {
    this._trackOmp = value;
  }
  public resetTrackOmp() {
    this._trackOmp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackOmpInput() {
    return this._trackOmp;
  }

  // track_omp_variable - computed: false, optional: true, required: false
  private _trackOmpVariable?: string; 
  public get trackOmpVariable() {
    return this.getStringAttribute('track_omp_variable');
  }
  public set trackOmpVariable(value: string) {
    this._trackOmpVariable = value;
  }
  public resetTrackOmpVariable() {
    this._trackOmpVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackOmpVariableInput() {
    return this._trackOmpVariable;
  }

  // track_prefix_list - computed: false, optional: true, required: false
  private _trackPrefixList?: string; 
  public get trackPrefixList() {
    return this.getStringAttribute('track_prefix_list');
  }
  public set trackPrefixList(value: string) {
    this._trackPrefixList = value;
  }
  public resetTrackPrefixList() {
    this._trackPrefixList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackPrefixListInput() {
    return this._trackPrefixList;
  }

  // track_prefix_list_variable - computed: false, optional: true, required: false
  private _trackPrefixListVariable?: string; 
  public get trackPrefixListVariable() {
    return this.getStringAttribute('track_prefix_list_variable');
  }
  public set trackPrefixListVariable(value: string) {
    this._trackPrefixListVariable = value;
  }
  public resetTrackPrefixListVariable() {
    this._trackPrefixListVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackPrefixListVariableInput() {
    return this._trackPrefixListVariable;
  }
}

export class ServiceLanVpnInterfaceSviFeatureIpv6VrrpsList extends cdktf.ComplexList {
  public internalValue? : ServiceLanVpnInterfaceSviFeatureIpv6Vrrps[] | cdktf.IResolvable

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
  public get(index: number): ServiceLanVpnInterfaceSviFeatureIpv6VrrpsOutputReference {
    return new ServiceLanVpnInterfaceSviFeatureIpv6VrrpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_svi_feature sdwan_service_lan_vpn_interface_svi_feature}
*/
export class ServiceLanVpnInterfaceSviFeature extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_service_lan_vpn_interface_svi_feature";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ServiceLanVpnInterfaceSviFeature resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServiceLanVpnInterfaceSviFeature to import
  * @param importFromId The id of the existing ServiceLanVpnInterfaceSviFeature that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_svi_feature#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServiceLanVpnInterfaceSviFeature to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_service_lan_vpn_interface_svi_feature", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_svi_feature sdwan_service_lan_vpn_interface_svi_feature} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServiceLanVpnInterfaceSviFeatureConfig
  */
  public constructor(scope: Construct, id: string, config: ServiceLanVpnInterfaceSviFeatureConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_service_lan_vpn_interface_svi_feature',
      terraformGeneratorMetadata: {
        providerName: 'sdwan',
        providerVersion: '0.8.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._aclIpv4EgressFeatureId = config.aclIpv4EgressFeatureId;
    this._aclIpv4IngressFeatureId = config.aclIpv4IngressFeatureId;
    this._aclIpv6EgressFeatureId = config.aclIpv6EgressFeatureId;
    this._aclIpv6IngressFeatureId = config.aclIpv6IngressFeatureId;
    this._arpTimeout = config.arpTimeout;
    this._arpTimeoutVariable = config.arpTimeoutVariable;
    this._arps.internalValue = config.arps;
    this._description = config.description;
    this._enableDhcpv6 = config.enableDhcpv6;
    this._enableDhcpv6Variable = config.enableDhcpv6Variable;
    this._featureProfileId = config.featureProfileId;
    this._icmpRedirectDisable = config.icmpRedirectDisable;
    this._icmpRedirectDisableVariable = config.icmpRedirectDisableVariable;
    this._interfaceDescription = config.interfaceDescription;
    this._interfaceDescriptionVariable = config.interfaceDescriptionVariable;
    this._interfaceMtu = config.interfaceMtu;
    this._interfaceMtuVariable = config.interfaceMtuVariable;
    this._interfaceName = config.interfaceName;
    this._interfaceNameVariable = config.interfaceNameVariable;
    this._ipDirectedBroadcast = config.ipDirectedBroadcast;
    this._ipDirectedBroadcastVariable = config.ipDirectedBroadcastVariable;
    this._ipMtu = config.ipMtu;
    this._ipMtuVariable = config.ipMtuVariable;
    this._ipv4Address = config.ipv4Address;
    this._ipv4AddressVariable = config.ipv4AddressVariable;
    this._ipv4DhcpHelpers = config.ipv4DhcpHelpers;
    this._ipv4DhcpHelpersVariable = config.ipv4DhcpHelpersVariable;
    this._ipv4SecondaryAddresses.internalValue = config.ipv4SecondaryAddresses;
    this._ipv4SubnetMask = config.ipv4SubnetMask;
    this._ipv4SubnetMaskVariable = config.ipv4SubnetMaskVariable;
    this._ipv4Vrrps.internalValue = config.ipv4Vrrps;
    this._ipv6Address = config.ipv6Address;
    this._ipv6AddressVariable = config.ipv6AddressVariable;
    this._ipv6DhcpHelpers.internalValue = config.ipv6DhcpHelpers;
    this._ipv6SecondaryAddresses.internalValue = config.ipv6SecondaryAddresses;
    this._ipv6Vrrps.internalValue = config.ipv6Vrrps;
    this._name = config.name;
    this._serviceLanVpnFeatureId = config.serviceLanVpnFeatureId;
    this._shutdown = config.shutdown;
    this._shutdownVariable = config.shutdownVariable;
    this._tcpMss = config.tcpMss;
    this._tcpMssVariable = config.tcpMssVariable;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acl_ipv4_egress_feature_id - computed: false, optional: true, required: false
  private _aclIpv4EgressFeatureId?: string; 
  public get aclIpv4EgressFeatureId() {
    return this.getStringAttribute('acl_ipv4_egress_feature_id');
  }
  public set aclIpv4EgressFeatureId(value: string) {
    this._aclIpv4EgressFeatureId = value;
  }
  public resetAclIpv4EgressFeatureId() {
    this._aclIpv4EgressFeatureId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclIpv4EgressFeatureIdInput() {
    return this._aclIpv4EgressFeatureId;
  }

  // acl_ipv4_ingress_feature_id - computed: false, optional: true, required: false
  private _aclIpv4IngressFeatureId?: string; 
  public get aclIpv4IngressFeatureId() {
    return this.getStringAttribute('acl_ipv4_ingress_feature_id');
  }
  public set aclIpv4IngressFeatureId(value: string) {
    this._aclIpv4IngressFeatureId = value;
  }
  public resetAclIpv4IngressFeatureId() {
    this._aclIpv4IngressFeatureId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclIpv4IngressFeatureIdInput() {
    return this._aclIpv4IngressFeatureId;
  }

  // acl_ipv6_egress_feature_id - computed: false, optional: true, required: false
  private _aclIpv6EgressFeatureId?: string; 
  public get aclIpv6EgressFeatureId() {
    return this.getStringAttribute('acl_ipv6_egress_feature_id');
  }
  public set aclIpv6EgressFeatureId(value: string) {
    this._aclIpv6EgressFeatureId = value;
  }
  public resetAclIpv6EgressFeatureId() {
    this._aclIpv6EgressFeatureId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclIpv6EgressFeatureIdInput() {
    return this._aclIpv6EgressFeatureId;
  }

  // acl_ipv6_ingress_feature_id - computed: false, optional: true, required: false
  private _aclIpv6IngressFeatureId?: string; 
  public get aclIpv6IngressFeatureId() {
    return this.getStringAttribute('acl_ipv6_ingress_feature_id');
  }
  public set aclIpv6IngressFeatureId(value: string) {
    this._aclIpv6IngressFeatureId = value;
  }
  public resetAclIpv6IngressFeatureId() {
    this._aclIpv6IngressFeatureId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclIpv6IngressFeatureIdInput() {
    return this._aclIpv6IngressFeatureId;
  }

  // arp_timeout - computed: false, optional: true, required: false
  private _arpTimeout?: number; 
  public get arpTimeout() {
    return this.getNumberAttribute('arp_timeout');
  }
  public set arpTimeout(value: number) {
    this._arpTimeout = value;
  }
  public resetArpTimeout() {
    this._arpTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arpTimeoutInput() {
    return this._arpTimeout;
  }

  // arp_timeout_variable - computed: false, optional: true, required: false
  private _arpTimeoutVariable?: string; 
  public get arpTimeoutVariable() {
    return this.getStringAttribute('arp_timeout_variable');
  }
  public set arpTimeoutVariable(value: string) {
    this._arpTimeoutVariable = value;
  }
  public resetArpTimeoutVariable() {
    this._arpTimeoutVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arpTimeoutVariableInput() {
    return this._arpTimeoutVariable;
  }

  // arps - computed: false, optional: true, required: false
  private _arps = new ServiceLanVpnInterfaceSviFeatureArpsList(this, "arps", false);
  public get arps() {
    return this._arps;
  }
  public putArps(value: ServiceLanVpnInterfaceSviFeatureArps[] | cdktf.IResolvable) {
    this._arps.internalValue = value;
  }
  public resetArps() {
    this._arps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arpsInput() {
    return this._arps.internalValue;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // enable_dhcpv6 - computed: false, optional: true, required: false
  private _enableDhcpv6?: boolean | cdktf.IResolvable; 
  public get enableDhcpv6() {
    return this.getBooleanAttribute('enable_dhcpv6');
  }
  public set enableDhcpv6(value: boolean | cdktf.IResolvable) {
    this._enableDhcpv6 = value;
  }
  public resetEnableDhcpv6() {
    this._enableDhcpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDhcpv6Input() {
    return this._enableDhcpv6;
  }

  // enable_dhcpv6_variable - computed: false, optional: true, required: false
  private _enableDhcpv6Variable?: string; 
  public get enableDhcpv6Variable() {
    return this.getStringAttribute('enable_dhcpv6_variable');
  }
  public set enableDhcpv6Variable(value: string) {
    this._enableDhcpv6Variable = value;
  }
  public resetEnableDhcpv6Variable() {
    this._enableDhcpv6Variable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDhcpv6VariableInput() {
    return this._enableDhcpv6Variable;
  }

  // feature_profile_id - computed: false, optional: false, required: true
  private _featureProfileId?: string; 
  public get featureProfileId() {
    return this.getStringAttribute('feature_profile_id');
  }
  public set featureProfileId(value: string) {
    this._featureProfileId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get featureProfileIdInput() {
    return this._featureProfileId;
  }

  // icmp_redirect_disable - computed: false, optional: true, required: false
  private _icmpRedirectDisable?: boolean | cdktf.IResolvable; 
  public get icmpRedirectDisable() {
    return this.getBooleanAttribute('icmp_redirect_disable');
  }
  public set icmpRedirectDisable(value: boolean | cdktf.IResolvable) {
    this._icmpRedirectDisable = value;
  }
  public resetIcmpRedirectDisable() {
    this._icmpRedirectDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpRedirectDisableInput() {
    return this._icmpRedirectDisable;
  }

  // icmp_redirect_disable_variable - computed: false, optional: true, required: false
  private _icmpRedirectDisableVariable?: string; 
  public get icmpRedirectDisableVariable() {
    return this.getStringAttribute('icmp_redirect_disable_variable');
  }
  public set icmpRedirectDisableVariable(value: string) {
    this._icmpRedirectDisableVariable = value;
  }
  public resetIcmpRedirectDisableVariable() {
    this._icmpRedirectDisableVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpRedirectDisableVariableInput() {
    return this._icmpRedirectDisableVariable;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // interface_description_variable - computed: false, optional: true, required: false
  private _interfaceDescriptionVariable?: string; 
  public get interfaceDescriptionVariable() {
    return this.getStringAttribute('interface_description_variable');
  }
  public set interfaceDescriptionVariable(value: string) {
    this._interfaceDescriptionVariable = value;
  }
  public resetInterfaceDescriptionVariable() {
    this._interfaceDescriptionVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceDescriptionVariableInput() {
    return this._interfaceDescriptionVariable;
  }

  // interface_mtu - computed: false, optional: true, required: false
  private _interfaceMtu?: number; 
  public get interfaceMtu() {
    return this.getNumberAttribute('interface_mtu');
  }
  public set interfaceMtu(value: number) {
    this._interfaceMtu = value;
  }
  public resetInterfaceMtu() {
    this._interfaceMtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceMtuInput() {
    return this._interfaceMtu;
  }

  // interface_mtu_variable - computed: false, optional: true, required: false
  private _interfaceMtuVariable?: string; 
  public get interfaceMtuVariable() {
    return this.getStringAttribute('interface_mtu_variable');
  }
  public set interfaceMtuVariable(value: string) {
    this._interfaceMtuVariable = value;
  }
  public resetInterfaceMtuVariable() {
    this._interfaceMtuVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceMtuVariableInput() {
    return this._interfaceMtuVariable;
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

  // interface_name_variable - computed: false, optional: true, required: false
  private _interfaceNameVariable?: string; 
  public get interfaceNameVariable() {
    return this.getStringAttribute('interface_name_variable');
  }
  public set interfaceNameVariable(value: string) {
    this._interfaceNameVariable = value;
  }
  public resetInterfaceNameVariable() {
    this._interfaceNameVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceNameVariableInput() {
    return this._interfaceNameVariable;
  }

  // ip_directed_broadcast - computed: false, optional: true, required: false
  private _ipDirectedBroadcast?: boolean | cdktf.IResolvable; 
  public get ipDirectedBroadcast() {
    return this.getBooleanAttribute('ip_directed_broadcast');
  }
  public set ipDirectedBroadcast(value: boolean | cdktf.IResolvable) {
    this._ipDirectedBroadcast = value;
  }
  public resetIpDirectedBroadcast() {
    this._ipDirectedBroadcast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipDirectedBroadcastInput() {
    return this._ipDirectedBroadcast;
  }

  // ip_directed_broadcast_variable - computed: false, optional: true, required: false
  private _ipDirectedBroadcastVariable?: string; 
  public get ipDirectedBroadcastVariable() {
    return this.getStringAttribute('ip_directed_broadcast_variable');
  }
  public set ipDirectedBroadcastVariable(value: string) {
    this._ipDirectedBroadcastVariable = value;
  }
  public resetIpDirectedBroadcastVariable() {
    this._ipDirectedBroadcastVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipDirectedBroadcastVariableInput() {
    return this._ipDirectedBroadcastVariable;
  }

  // ip_mtu - computed: false, optional: true, required: false
  private _ipMtu?: number; 
  public get ipMtu() {
    return this.getNumberAttribute('ip_mtu');
  }
  public set ipMtu(value: number) {
    this._ipMtu = value;
  }
  public resetIpMtu() {
    this._ipMtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipMtuInput() {
    return this._ipMtu;
  }

  // ip_mtu_variable - computed: false, optional: true, required: false
  private _ipMtuVariable?: string; 
  public get ipMtuVariable() {
    return this.getStringAttribute('ip_mtu_variable');
  }
  public set ipMtuVariable(value: string) {
    this._ipMtuVariable = value;
  }
  public resetIpMtuVariable() {
    this._ipMtuVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipMtuVariableInput() {
    return this._ipMtuVariable;
  }

  // ipv4_address - computed: false, optional: true, required: false
  private _ipv4Address?: string; 
  public get ipv4Address() {
    return this.getStringAttribute('ipv4_address');
  }
  public set ipv4Address(value: string) {
    this._ipv4Address = value;
  }
  public resetIpv4Address() {
    this._ipv4Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddressInput() {
    return this._ipv4Address;
  }

  // ipv4_address_variable - computed: false, optional: true, required: false
  private _ipv4AddressVariable?: string; 
  public get ipv4AddressVariable() {
    return this.getStringAttribute('ipv4_address_variable');
  }
  public set ipv4AddressVariable(value: string) {
    this._ipv4AddressVariable = value;
  }
  public resetIpv4AddressVariable() {
    this._ipv4AddressVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddressVariableInput() {
    return this._ipv4AddressVariable;
  }

  // ipv4_dhcp_helpers - computed: false, optional: true, required: false
  private _ipv4DhcpHelpers?: string[]; 
  public get ipv4DhcpHelpers() {
    return cdktf.Fn.tolist(this.getListAttribute('ipv4_dhcp_helpers'));
  }
  public set ipv4DhcpHelpers(value: string[]) {
    this._ipv4DhcpHelpers = value;
  }
  public resetIpv4DhcpHelpers() {
    this._ipv4DhcpHelpers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4DhcpHelpersInput() {
    return this._ipv4DhcpHelpers;
  }

  // ipv4_dhcp_helpers_variable - computed: false, optional: true, required: false
  private _ipv4DhcpHelpersVariable?: string; 
  public get ipv4DhcpHelpersVariable() {
    return this.getStringAttribute('ipv4_dhcp_helpers_variable');
  }
  public set ipv4DhcpHelpersVariable(value: string) {
    this._ipv4DhcpHelpersVariable = value;
  }
  public resetIpv4DhcpHelpersVariable() {
    this._ipv4DhcpHelpersVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4DhcpHelpersVariableInput() {
    return this._ipv4DhcpHelpersVariable;
  }

  // ipv4_secondary_addresses - computed: false, optional: true, required: false
  private _ipv4SecondaryAddresses = new ServiceLanVpnInterfaceSviFeatureIpv4SecondaryAddressesList(this, "ipv4_secondary_addresses", false);
  public get ipv4SecondaryAddresses() {
    return this._ipv4SecondaryAddresses;
  }
  public putIpv4SecondaryAddresses(value: ServiceLanVpnInterfaceSviFeatureIpv4SecondaryAddresses[] | cdktf.IResolvable) {
    this._ipv4SecondaryAddresses.internalValue = value;
  }
  public resetIpv4SecondaryAddresses() {
    this._ipv4SecondaryAddresses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4SecondaryAddressesInput() {
    return this._ipv4SecondaryAddresses.internalValue;
  }

  // ipv4_subnet_mask - computed: false, optional: true, required: false
  private _ipv4SubnetMask?: string; 
  public get ipv4SubnetMask() {
    return this.getStringAttribute('ipv4_subnet_mask');
  }
  public set ipv4SubnetMask(value: string) {
    this._ipv4SubnetMask = value;
  }
  public resetIpv4SubnetMask() {
    this._ipv4SubnetMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4SubnetMaskInput() {
    return this._ipv4SubnetMask;
  }

  // ipv4_subnet_mask_variable - computed: false, optional: true, required: false
  private _ipv4SubnetMaskVariable?: string; 
  public get ipv4SubnetMaskVariable() {
    return this.getStringAttribute('ipv4_subnet_mask_variable');
  }
  public set ipv4SubnetMaskVariable(value: string) {
    this._ipv4SubnetMaskVariable = value;
  }
  public resetIpv4SubnetMaskVariable() {
    this._ipv4SubnetMaskVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4SubnetMaskVariableInput() {
    return this._ipv4SubnetMaskVariable;
  }

  // ipv4_vrrps - computed: false, optional: true, required: false
  private _ipv4Vrrps = new ServiceLanVpnInterfaceSviFeatureIpv4VrrpsList(this, "ipv4_vrrps", false);
  public get ipv4Vrrps() {
    return this._ipv4Vrrps;
  }
  public putIpv4Vrrps(value: ServiceLanVpnInterfaceSviFeatureIpv4Vrrps[] | cdktf.IResolvable) {
    this._ipv4Vrrps.internalValue = value;
  }
  public resetIpv4Vrrps() {
    this._ipv4Vrrps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4VrrpsInput() {
    return this._ipv4Vrrps.internalValue;
  }

  // ipv6_address - computed: false, optional: true, required: false
  private _ipv6Address?: string; 
  public get ipv6Address() {
    return this.getStringAttribute('ipv6_address');
  }
  public set ipv6Address(value: string) {
    this._ipv6Address = value;
  }
  public resetIpv6Address() {
    this._ipv6Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressInput() {
    return this._ipv6Address;
  }

  // ipv6_address_variable - computed: false, optional: true, required: false
  private _ipv6AddressVariable?: string; 
  public get ipv6AddressVariable() {
    return this.getStringAttribute('ipv6_address_variable');
  }
  public set ipv6AddressVariable(value: string) {
    this._ipv6AddressVariable = value;
  }
  public resetIpv6AddressVariable() {
    this._ipv6AddressVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressVariableInput() {
    return this._ipv6AddressVariable;
  }

  // ipv6_dhcp_helpers - computed: false, optional: true, required: false
  private _ipv6DhcpHelpers = new ServiceLanVpnInterfaceSviFeatureIpv6DhcpHelpersList(this, "ipv6_dhcp_helpers", false);
  public get ipv6DhcpHelpers() {
    return this._ipv6DhcpHelpers;
  }
  public putIpv6DhcpHelpers(value: ServiceLanVpnInterfaceSviFeatureIpv6DhcpHelpers[] | cdktf.IResolvable) {
    this._ipv6DhcpHelpers.internalValue = value;
  }
  public resetIpv6DhcpHelpers() {
    this._ipv6DhcpHelpers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6DhcpHelpersInput() {
    return this._ipv6DhcpHelpers.internalValue;
  }

  // ipv6_secondary_addresses - computed: false, optional: true, required: false
  private _ipv6SecondaryAddresses = new ServiceLanVpnInterfaceSviFeatureIpv6SecondaryAddressesList(this, "ipv6_secondary_addresses", false);
  public get ipv6SecondaryAddresses() {
    return this._ipv6SecondaryAddresses;
  }
  public putIpv6SecondaryAddresses(value: ServiceLanVpnInterfaceSviFeatureIpv6SecondaryAddresses[] | cdktf.IResolvable) {
    this._ipv6SecondaryAddresses.internalValue = value;
  }
  public resetIpv6SecondaryAddresses() {
    this._ipv6SecondaryAddresses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6SecondaryAddressesInput() {
    return this._ipv6SecondaryAddresses.internalValue;
  }

  // ipv6_vrrps - computed: false, optional: true, required: false
  private _ipv6Vrrps = new ServiceLanVpnInterfaceSviFeatureIpv6VrrpsList(this, "ipv6_vrrps", false);
  public get ipv6Vrrps() {
    return this._ipv6Vrrps;
  }
  public putIpv6Vrrps(value: ServiceLanVpnInterfaceSviFeatureIpv6Vrrps[] | cdktf.IResolvable) {
    this._ipv6Vrrps.internalValue = value;
  }
  public resetIpv6Vrrps() {
    this._ipv6Vrrps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6VrrpsInput() {
    return this._ipv6Vrrps.internalValue;
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

  // service_lan_vpn_feature_id - computed: false, optional: false, required: true
  private _serviceLanVpnFeatureId?: string; 
  public get serviceLanVpnFeatureId() {
    return this.getStringAttribute('service_lan_vpn_feature_id');
  }
  public set serviceLanVpnFeatureId(value: string) {
    this._serviceLanVpnFeatureId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceLanVpnFeatureIdInput() {
    return this._serviceLanVpnFeatureId;
  }

  // shutdown - computed: false, optional: true, required: false
  private _shutdown?: boolean | cdktf.IResolvable; 
  public get shutdown() {
    return this.getBooleanAttribute('shutdown');
  }
  public set shutdown(value: boolean | cdktf.IResolvable) {
    this._shutdown = value;
  }
  public resetShutdown() {
    this._shutdown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shutdownInput() {
    return this._shutdown;
  }

  // shutdown_variable - computed: false, optional: true, required: false
  private _shutdownVariable?: string; 
  public get shutdownVariable() {
    return this.getStringAttribute('shutdown_variable');
  }
  public set shutdownVariable(value: string) {
    this._shutdownVariable = value;
  }
  public resetShutdownVariable() {
    this._shutdownVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shutdownVariableInput() {
    return this._shutdownVariable;
  }

  // tcp_mss - computed: false, optional: true, required: false
  private _tcpMss?: number; 
  public get tcpMss() {
    return this.getNumberAttribute('tcp_mss');
  }
  public set tcpMss(value: number) {
    this._tcpMss = value;
  }
  public resetTcpMss() {
    this._tcpMss = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpMssInput() {
    return this._tcpMss;
  }

  // tcp_mss_variable - computed: false, optional: true, required: false
  private _tcpMssVariable?: string; 
  public get tcpMssVariable() {
    return this.getStringAttribute('tcp_mss_variable');
  }
  public set tcpMssVariable(value: string) {
    this._tcpMssVariable = value;
  }
  public resetTcpMssVariable() {
    this._tcpMssVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpMssVariableInput() {
    return this._tcpMssVariable;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      acl_ipv4_egress_feature_id: cdktf.stringToTerraform(this._aclIpv4EgressFeatureId),
      acl_ipv4_ingress_feature_id: cdktf.stringToTerraform(this._aclIpv4IngressFeatureId),
      acl_ipv6_egress_feature_id: cdktf.stringToTerraform(this._aclIpv6EgressFeatureId),
      acl_ipv6_ingress_feature_id: cdktf.stringToTerraform(this._aclIpv6IngressFeatureId),
      arp_timeout: cdktf.numberToTerraform(this._arpTimeout),
      arp_timeout_variable: cdktf.stringToTerraform(this._arpTimeoutVariable),
      arps: cdktf.listMapper(serviceLanVpnInterfaceSviFeatureArpsToTerraform, false)(this._arps.internalValue),
      description: cdktf.stringToTerraform(this._description),
      enable_dhcpv6: cdktf.booleanToTerraform(this._enableDhcpv6),
      enable_dhcpv6_variable: cdktf.stringToTerraform(this._enableDhcpv6Variable),
      feature_profile_id: cdktf.stringToTerraform(this._featureProfileId),
      icmp_redirect_disable: cdktf.booleanToTerraform(this._icmpRedirectDisable),
      icmp_redirect_disable_variable: cdktf.stringToTerraform(this._icmpRedirectDisableVariable),
      interface_description: cdktf.stringToTerraform(this._interfaceDescription),
      interface_description_variable: cdktf.stringToTerraform(this._interfaceDescriptionVariable),
      interface_mtu: cdktf.numberToTerraform(this._interfaceMtu),
      interface_mtu_variable: cdktf.stringToTerraform(this._interfaceMtuVariable),
      interface_name: cdktf.stringToTerraform(this._interfaceName),
      interface_name_variable: cdktf.stringToTerraform(this._interfaceNameVariable),
      ip_directed_broadcast: cdktf.booleanToTerraform(this._ipDirectedBroadcast),
      ip_directed_broadcast_variable: cdktf.stringToTerraform(this._ipDirectedBroadcastVariable),
      ip_mtu: cdktf.numberToTerraform(this._ipMtu),
      ip_mtu_variable: cdktf.stringToTerraform(this._ipMtuVariable),
      ipv4_address: cdktf.stringToTerraform(this._ipv4Address),
      ipv4_address_variable: cdktf.stringToTerraform(this._ipv4AddressVariable),
      ipv4_dhcp_helpers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipv4DhcpHelpers),
      ipv4_dhcp_helpers_variable: cdktf.stringToTerraform(this._ipv4DhcpHelpersVariable),
      ipv4_secondary_addresses: cdktf.listMapper(serviceLanVpnInterfaceSviFeatureIpv4SecondaryAddressesToTerraform, false)(this._ipv4SecondaryAddresses.internalValue),
      ipv4_subnet_mask: cdktf.stringToTerraform(this._ipv4SubnetMask),
      ipv4_subnet_mask_variable: cdktf.stringToTerraform(this._ipv4SubnetMaskVariable),
      ipv4_vrrps: cdktf.listMapper(serviceLanVpnInterfaceSviFeatureIpv4VrrpsToTerraform, false)(this._ipv4Vrrps.internalValue),
      ipv6_address: cdktf.stringToTerraform(this._ipv6Address),
      ipv6_address_variable: cdktf.stringToTerraform(this._ipv6AddressVariable),
      ipv6_dhcp_helpers: cdktf.listMapper(serviceLanVpnInterfaceSviFeatureIpv6DhcpHelpersToTerraform, false)(this._ipv6DhcpHelpers.internalValue),
      ipv6_secondary_addresses: cdktf.listMapper(serviceLanVpnInterfaceSviFeatureIpv6SecondaryAddressesToTerraform, false)(this._ipv6SecondaryAddresses.internalValue),
      ipv6_vrrps: cdktf.listMapper(serviceLanVpnInterfaceSviFeatureIpv6VrrpsToTerraform, false)(this._ipv6Vrrps.internalValue),
      name: cdktf.stringToTerraform(this._name),
      service_lan_vpn_feature_id: cdktf.stringToTerraform(this._serviceLanVpnFeatureId),
      shutdown: cdktf.booleanToTerraform(this._shutdown),
      shutdown_variable: cdktf.stringToTerraform(this._shutdownVariable),
      tcp_mss: cdktf.numberToTerraform(this._tcpMss),
      tcp_mss_variable: cdktf.stringToTerraform(this._tcpMssVariable),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      acl_ipv4_egress_feature_id: {
        value: cdktf.stringToHclTerraform(this._aclIpv4EgressFeatureId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      acl_ipv4_ingress_feature_id: {
        value: cdktf.stringToHclTerraform(this._aclIpv4IngressFeatureId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      acl_ipv6_egress_feature_id: {
        value: cdktf.stringToHclTerraform(this._aclIpv6EgressFeatureId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      acl_ipv6_ingress_feature_id: {
        value: cdktf.stringToHclTerraform(this._aclIpv6IngressFeatureId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      arp_timeout: {
        value: cdktf.numberToHclTerraform(this._arpTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      arp_timeout_variable: {
        value: cdktf.stringToHclTerraform(this._arpTimeoutVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      arps: {
        value: cdktf.listMapperHcl(serviceLanVpnInterfaceSviFeatureArpsToHclTerraform, false)(this._arps.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceLanVpnInterfaceSviFeatureArpsList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_dhcpv6: {
        value: cdktf.booleanToHclTerraform(this._enableDhcpv6),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_dhcpv6_variable: {
        value: cdktf.stringToHclTerraform(this._enableDhcpv6Variable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      feature_profile_id: {
        value: cdktf.stringToHclTerraform(this._featureProfileId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      icmp_redirect_disable: {
        value: cdktf.booleanToHclTerraform(this._icmpRedirectDisable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      icmp_redirect_disable_variable: {
        value: cdktf.stringToHclTerraform(this._icmpRedirectDisableVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interface_description: {
        value: cdktf.stringToHclTerraform(this._interfaceDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interface_description_variable: {
        value: cdktf.stringToHclTerraform(this._interfaceDescriptionVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interface_mtu: {
        value: cdktf.numberToHclTerraform(this._interfaceMtu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      interface_mtu_variable: {
        value: cdktf.stringToHclTerraform(this._interfaceMtuVariable),
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
      interface_name_variable: {
        value: cdktf.stringToHclTerraform(this._interfaceNameVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_directed_broadcast: {
        value: cdktf.booleanToHclTerraform(this._ipDirectedBroadcast),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ip_directed_broadcast_variable: {
        value: cdktf.stringToHclTerraform(this._ipDirectedBroadcastVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_mtu: {
        value: cdktf.numberToHclTerraform(this._ipMtu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ip_mtu_variable: {
        value: cdktf.stringToHclTerraform(this._ipMtuVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_address: {
        value: cdktf.stringToHclTerraform(this._ipv4Address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_address_variable: {
        value: cdktf.stringToHclTerraform(this._ipv4AddressVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_dhcp_helpers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ipv4DhcpHelpers),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      ipv4_dhcp_helpers_variable: {
        value: cdktf.stringToHclTerraform(this._ipv4DhcpHelpersVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_secondary_addresses: {
        value: cdktf.listMapperHcl(serviceLanVpnInterfaceSviFeatureIpv4SecondaryAddressesToHclTerraform, false)(this._ipv4SecondaryAddresses.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceLanVpnInterfaceSviFeatureIpv4SecondaryAddressesList",
      },
      ipv4_subnet_mask: {
        value: cdktf.stringToHclTerraform(this._ipv4SubnetMask),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_subnet_mask_variable: {
        value: cdktf.stringToHclTerraform(this._ipv4SubnetMaskVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_vrrps: {
        value: cdktf.listMapperHcl(serviceLanVpnInterfaceSviFeatureIpv4VrrpsToHclTerraform, false)(this._ipv4Vrrps.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceLanVpnInterfaceSviFeatureIpv4VrrpsList",
      },
      ipv6_address: {
        value: cdktf.stringToHclTerraform(this._ipv6Address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_address_variable: {
        value: cdktf.stringToHclTerraform(this._ipv6AddressVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_dhcp_helpers: {
        value: cdktf.listMapperHcl(serviceLanVpnInterfaceSviFeatureIpv6DhcpHelpersToHclTerraform, false)(this._ipv6DhcpHelpers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceLanVpnInterfaceSviFeatureIpv6DhcpHelpersList",
      },
      ipv6_secondary_addresses: {
        value: cdktf.listMapperHcl(serviceLanVpnInterfaceSviFeatureIpv6SecondaryAddressesToHclTerraform, false)(this._ipv6SecondaryAddresses.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceLanVpnInterfaceSviFeatureIpv6SecondaryAddressesList",
      },
      ipv6_vrrps: {
        value: cdktf.listMapperHcl(serviceLanVpnInterfaceSviFeatureIpv6VrrpsToHclTerraform, false)(this._ipv6Vrrps.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceLanVpnInterfaceSviFeatureIpv6VrrpsList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_lan_vpn_feature_id: {
        value: cdktf.stringToHclTerraform(this._serviceLanVpnFeatureId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shutdown: {
        value: cdktf.booleanToHclTerraform(this._shutdown),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      shutdown_variable: {
        value: cdktf.stringToHclTerraform(this._shutdownVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tcp_mss: {
        value: cdktf.numberToHclTerraform(this._tcpMss),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tcp_mss_variable: {
        value: cdktf.stringToHclTerraform(this._tcpMssVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
