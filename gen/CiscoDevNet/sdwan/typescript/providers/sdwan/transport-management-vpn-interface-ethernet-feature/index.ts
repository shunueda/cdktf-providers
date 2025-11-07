// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_management_vpn_interface_ethernet_feature
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TransportManagementVpnInterfaceEthernetFeatureConfig extends cdktf.TerraformMetaArguments {
  /**
  * Configure ARP entries
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_management_vpn_interface_ethernet_feature#arp_entries TransportManagementVpnInterfaceEthernetFeature#arp_entries}
  */
  readonly arpEntries?: TransportManagementVpnInterfaceEthernetFeatureArpEntries[] | cdktf.IResolvable;
  /**
  * Timeout value for dynamically learned ARP entries, <0..2678400> seconds
  *   - Range: `0`-`2147483`
  *   - Default value: `1200`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_management_vpn_interface_ethernet_feature#arp_timeout TransportManagementVpnInterfaceEthernetFeature#arp_timeout}
  */
  readonly arpTimeout?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_management_vpn_interface_ethernet_feature#arp_timeout_variable TransportManagementVpnInterfaceEthernetFeature#arp_timeout_variable}
  */
  readonly arpTimeoutVariable?: string;
  /**
  * Link autonegotiation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_management_vpn_interface_ethernet_feature#autonegotiate TransportManagementVpnInterfaceEthernetFeature#autonegotiate}
  */
  readonly autonegotiate?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_management_vpn_interface_ethernet_feature#autonegotiate_variable TransportManagementVpnInterfaceEthernetFeature#autonegotiate_variable}
  */
  readonly autonegotiateVariable?: string;
  /**
  * The description of the Feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_management_vpn_interface_ethernet_feature#description TransportManagementVpnInterfaceEthernetFeature#description}
  */
  readonly description?: string;
  /**
  * Duplex mode
  *   - Choices: `full`, `half`, `auto`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_management_vpn_interface_ethernet_feature#duplex TransportManagementVpnInterfaceEthernetFeature#duplex}
  */
  readonly duplex?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_management_vpn_interface_ethernet_feature#duplex_variable TransportManagementVpnInterfaceEthernetFeature#duplex_variable}
  */
  readonly duplexVariable?: string;
  /**
  * Enable DHCPv6, Attribute conditional on `ipv6_configuration_type` being equal to `dynamic`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_management_vpn_interface_ethernet_feature#enable_dhcpv6 TransportManagementVpnInterfaceEthernetFeature#enable_dhcpv6}
  */
  readonly enableDhcpv6?: boolean | cdktf.IResolvable;
  /**
  * Feature Profile ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_management_vpn_interface_ethernet_feature#feature_profile_id TransportManagementVpnInterfaceEthernetFeature#feature_profile_id}
  */
  readonly featureProfileId: string;
  /**
  * ICMP/ICMPv6 Redirect Disable
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_management_vpn_interface_ethernet_feature#icmp_redirect_disable TransportManagementVpnInterfaceEthernetFeature#icmp_redirect_disable}
  */
  readonly icmpRedirectDisable?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_management_vpn_interface_ethernet_feature#icmp_redirect_disable_variable TransportManagementVpnInterfaceEthernetFeature#icmp_redirect_disable_variable}
  */
  readonly icmpRedirectDisableVariable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_management_vpn_interface_ethernet_feature#interface_description TransportManagementVpnInterfaceEthernetFeature#interface_description}
  */
  readonly interfaceDescription?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_management_vpn_interface_ethernet_feature#interface_description_variable TransportManagementVpnInterfaceEthernetFeature#interface_description_variable}
  */
  readonly interfaceDescriptionVariable?: string;
  /**
  * Interface MTU
  *   - Range: `1500`-`9216`
  *   - Default value: `1500`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_management_vpn_interface_ethernet_feature#interface_mtu TransportManagementVpnInterfaceEthernetFeature#interface_mtu}
  */
  readonly interfaceMtu?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_management_vpn_interface_ethernet_feature#interface_mtu_variable TransportManagementVpnInterfaceEthernetFeature#interface_mtu_variable}
  */
  readonly interfaceMtuVariable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_management_vpn_interface_ethernet_feature#interface_name TransportManagementVpnInterfaceEthernetFeature#interface_name}
  */
  readonly interfaceName?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_management_vpn_interface_ethernet_feature#interface_name_variable TransportManagementVpnInterfaceEthernetFeature#interface_name_variable}
  */
  readonly interfaceNameVariable?: string;
  /**
  * IP Directed-Broadcast
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_management_vpn_interface_ethernet_feature#ip_directed_broadcast TransportManagementVpnInterfaceEthernetFeature#ip_directed_broadcast}
  */
  readonly ipDirectedBroadcast?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_management_vpn_interface_ethernet_feature#ip_directed_broadcast_variable TransportManagementVpnInterfaceEthernetFeature#ip_directed_broadcast_variable}
  */
  readonly ipDirectedBroadcastVariable?: string;
  /**
  * IP MTU for GigabitEthernet main <576..Interface MTU>, GigabitEthernet subinterface <576..9216>, Other Interfaces <576..2000> in bytes
  *   - Range: `576`-`9216`
  *   - Default value: `1500`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_management_vpn_interface_ethernet_feature#ip_mtu TransportManagementVpnInterfaceEthernetFeature#ip_mtu}
  */
  readonly ipMtu?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_management_vpn_interface_ethernet_feature#ip_mtu_variable TransportManagementVpnInterfaceEthernetFeature#ip_mtu_variable}
  */
  readonly ipMtuVariable?: string;
  /**
  * IP Address, Attribute conditional on `ipv4_configuration_type` being equal to `static`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_management_vpn_interface_ethernet_feature#ipv4_address TransportManagementVpnInterfaceEthernetFeature#ipv4_address}
  */
  readonly ipv4Address?: string;
  /**
  * Variable name, Attribute conditional on `ipv4_configuration_type` being equal to `static`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_management_vpn_interface_ethernet_feature#ipv4_address_variable TransportManagementVpnInterfaceEthernetFeature#ipv4_address_variable}
  */
  readonly ipv4AddressVariable?: string;
  /**
  * Interface auto detect bandwidth
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_management_vpn_interface_ethernet_feature#ipv4_auto_detect_bandwidth TransportManagementVpnInterfaceEthernetFeature#ipv4_auto_detect_bandwidth}
  */
  readonly ipv4AutoDetectBandwidth?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_management_vpn_interface_ethernet_feature#ipv4_auto_detect_bandwidth_variable TransportManagementVpnInterfaceEthernetFeature#ipv4_auto_detect_bandwidth_variable}
  */
  readonly ipv4AutoDetectBandwidthVariable?: string;
  /**
  * IPv4 Configuration Type
  *   - Choices: `dynamic`, `static`
  *   - Default value: `dynamic`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_management_vpn_interface_ethernet_feature#ipv4_configuration_type TransportManagementVpnInterfaceEthernetFeature#ipv4_configuration_type}
  */
  readonly ipv4ConfigurationType?: string;
  /**
  * DHCP Distance, Attribute conditional on `ipv4_configuration_type` being equal to `dynamic`
  *   - Range: `1`-`65536`
  *   - Default value: `1`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_management_vpn_interface_ethernet_feature#ipv4_dhcp_distance TransportManagementVpnInterfaceEthernetFeature#ipv4_dhcp_distance}
  */
  readonly ipv4DhcpDistance?: number;
  /**
  * Variable name, Attribute conditional on `ipv4_configuration_type` being equal to `dynamic`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_management_vpn_interface_ethernet_feature#ipv4_dhcp_distance_variable TransportManagementVpnInterfaceEthernetFeature#ipv4_dhcp_distance_variable}
  */
  readonly ipv4DhcpDistanceVariable?: string;
  /**
  * List of DHCP IPv4 helper addresses (min 1, max 8)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_management_vpn_interface_ethernet_feature#ipv4_dhcp_helper TransportManagementVpnInterfaceEthernetFeature#ipv4_dhcp_helper}
  */
  readonly ipv4DhcpHelper?: string[];
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_management_vpn_interface_ethernet_feature#ipv4_dhcp_helper_variable TransportManagementVpnInterfaceEthernetFeature#ipv4_dhcp_helper_variable}
  */
  readonly ipv4DhcpHelperVariable?: string;
  /**
  * Iperf server for auto bandwidth detect
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_management_vpn_interface_ethernet_feature#ipv4_iperf_server TransportManagementVpnInterfaceEthernetFeature#ipv4_iperf_server}
  */
  readonly ipv4IperfServer?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_management_vpn_interface_ethernet_feature#ipv4_iperf_server_variable TransportManagementVpnInterfaceEthernetFeature#ipv4_iperf_server_variable}
  */
  readonly ipv4IperfServerVariable?: string;
  /**
  * Secondary IpV4 Addresses, Attribute conditional on `ipv4_configuration_type` being equal to `static`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_management_vpn_interface_ethernet_feature#ipv4_secondary_addresses TransportManagementVpnInterfaceEthernetFeature#ipv4_secondary_addresses}
  */
  readonly ipv4SecondaryAddresses?: TransportManagementVpnInterfaceEthernetFeatureIpv4SecondaryAddresses[] | cdktf.IResolvable;
  /**
  * Subnet Mask, Attribute conditional on `ipv4_configuration_type` being equal to `static`
  *   - Choices: `255.255.255.255`, `255.255.255.254`, `255.255.255.252`, `255.255.255.248`, `255.255.255.240`, `255.255.255.224`, `255.255.255.192`, `255.255.255.128`, `255.255.255.0`, `255.255.254.0`, `255.255.252.0`, `255.255.248.0`, `255.255.240.0`, `255.255.224.0`, `255.255.192.0`, `255.255.128.0`, `255.255.0.0`, `255.254.0.0`, `255.252.0.0`, `255.240.0.0`, `255.224.0.0`, `255.192.0.0`, `255.128.0.0`, `255.0.0.0`, `254.0.0.0`, `252.0.0.0`, `248.0.0.0`, `240.0.0.0`, `224.0.0.0`, `192.0.0.0`, `128.0.0.0`, `0.0.0.0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_management_vpn_interface_ethernet_feature#ipv4_subnet_mask TransportManagementVpnInterfaceEthernetFeature#ipv4_subnet_mask}
  */
  readonly ipv4SubnetMask?: string;
  /**
  * Variable name, Attribute conditional on `ipv4_configuration_type` being equal to `static`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_management_vpn_interface_ethernet_feature#ipv4_subnet_mask_variable TransportManagementVpnInterfaceEthernetFeature#ipv4_subnet_mask_variable}
  */
  readonly ipv4SubnetMaskVariable?: string;
  /**
  * IPv6 Address Secondary, Attribute conditional on `ipv6_configuration_type` being equal to `static`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_management_vpn_interface_ethernet_feature#ipv6_address TransportManagementVpnInterfaceEthernetFeature#ipv6_address}
  */
  readonly ipv6Address?: string;
  /**
  * Variable name, Attribute conditional on `ipv6_configuration_type` being equal to `static`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_management_vpn_interface_ethernet_feature#ipv6_address_variable TransportManagementVpnInterfaceEthernetFeature#ipv6_address_variable}
  */
  readonly ipv6AddressVariable?: string;
  /**
  * IPv6 Configuration Type
  *   - Choices: `dynamic`, `static`, `none`
  *   - Default value: `none`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_management_vpn_interface_ethernet_feature#ipv6_configuration_type TransportManagementVpnInterfaceEthernetFeature#ipv6_configuration_type}
  */
  readonly ipv6ConfigurationType?: string;
  /**
  * Interval for interface load calculation
  *   - Range: `30`-`600`
  *   - Default value: `30`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_management_vpn_interface_ethernet_feature#load_interval TransportManagementVpnInterfaceEthernetFeature#load_interval}
  */
  readonly loadInterval?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_management_vpn_interface_ethernet_feature#load_interval_variable TransportManagementVpnInterfaceEthernetFeature#load_interval_variable}
  */
  readonly loadIntervalVariable?: string;
  /**
  * MAC Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_management_vpn_interface_ethernet_feature#mac_address TransportManagementVpnInterfaceEthernetFeature#mac_address}
  */
  readonly macAddress?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_management_vpn_interface_ethernet_feature#mac_address_variable TransportManagementVpnInterfaceEthernetFeature#mac_address_variable}
  */
  readonly macAddressVariable?: string;
  /**
  * Media type
  *   - Choices: `auto-select`, `rj45`, `sfp`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_management_vpn_interface_ethernet_feature#media_type TransportManagementVpnInterfaceEthernetFeature#media_type}
  */
  readonly mediaType?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_management_vpn_interface_ethernet_feature#media_type_variable TransportManagementVpnInterfaceEthernetFeature#media_type_variable}
  */
  readonly mediaTypeVariable?: string;
  /**
  * The name of the Feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_management_vpn_interface_ethernet_feature#name TransportManagementVpnInterfaceEthernetFeature#name}
  */
  readonly name: string;
  /**
  * 
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_management_vpn_interface_ethernet_feature#shutdown TransportManagementVpnInterfaceEthernetFeature#shutdown}
  */
  readonly shutdown?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_management_vpn_interface_ethernet_feature#shutdown_variable TransportManagementVpnInterfaceEthernetFeature#shutdown_variable}
  */
  readonly shutdownVariable?: string;
  /**
  * Set interface speed
  *   - Choices: `10`, `100`, `1000`, `2500`, `10000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_management_vpn_interface_ethernet_feature#speed TransportManagementVpnInterfaceEthernetFeature#speed}
  */
  readonly speed?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_management_vpn_interface_ethernet_feature#speed_variable TransportManagementVpnInterfaceEthernetFeature#speed_variable}
  */
  readonly speedVariable?: string;
  /**
  * TCP MSS on SYN packets, in bytes
  *   - Range: `500`-`1460`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_management_vpn_interface_ethernet_feature#tcp_mss TransportManagementVpnInterfaceEthernetFeature#tcp_mss}
  */
  readonly tcpMss?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_management_vpn_interface_ethernet_feature#tcp_mss_variable TransportManagementVpnInterfaceEthernetFeature#tcp_mss_variable}
  */
  readonly tcpMssVariable?: string;
  /**
  * Transport Management VPN Feature ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_management_vpn_interface_ethernet_feature#transport_management_vpn_feature_id TransportManagementVpnInterfaceEthernetFeature#transport_management_vpn_feature_id}
  */
  readonly transportManagementVpnFeatureId: string;
}
export interface TransportManagementVpnInterfaceEthernetFeatureArpEntries {
  /**
  * IPV4 Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_management_vpn_interface_ethernet_feature#ip_address TransportManagementVpnInterfaceEthernetFeature#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_management_vpn_interface_ethernet_feature#ip_address_variable TransportManagementVpnInterfaceEthernetFeature#ip_address_variable}
  */
  readonly ipAddressVariable?: string;
  /**
  * MAC Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_management_vpn_interface_ethernet_feature#mac_address TransportManagementVpnInterfaceEthernetFeature#mac_address}
  */
  readonly macAddress?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_management_vpn_interface_ethernet_feature#mac_address_variable TransportManagementVpnInterfaceEthernetFeature#mac_address_variable}
  */
  readonly macAddressVariable?: string;
}

export function transportManagementVpnInterfaceEthernetFeatureArpEntriesToTerraform(struct?: TransportManagementVpnInterfaceEthernetFeatureArpEntries | cdktf.IResolvable): any {
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


export function transportManagementVpnInterfaceEthernetFeatureArpEntriesToHclTerraform(struct?: TransportManagementVpnInterfaceEthernetFeatureArpEntries | cdktf.IResolvable): any {
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

export class TransportManagementVpnInterfaceEthernetFeatureArpEntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TransportManagementVpnInterfaceEthernetFeatureArpEntries | cdktf.IResolvable | undefined {
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

  public set internalValue(value: TransportManagementVpnInterfaceEthernetFeatureArpEntries | cdktf.IResolvable | undefined) {
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

export class TransportManagementVpnInterfaceEthernetFeatureArpEntriesList extends cdktf.ComplexList {
  public internalValue? : TransportManagementVpnInterfaceEthernetFeatureArpEntries[] | cdktf.IResolvable

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
  public get(index: number): TransportManagementVpnInterfaceEthernetFeatureArpEntriesOutputReference {
    return new TransportManagementVpnInterfaceEthernetFeatureArpEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TransportManagementVpnInterfaceEthernetFeatureIpv4SecondaryAddresses {
  /**
  * IpV4 Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_management_vpn_interface_ethernet_feature#address TransportManagementVpnInterfaceEthernetFeature#address}
  */
  readonly address?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_management_vpn_interface_ethernet_feature#address_variable TransportManagementVpnInterfaceEthernetFeature#address_variable}
  */
  readonly addressVariable?: string;
  /**
  * Subnet Mask
  *   - Choices: `255.255.255.255`, `255.255.255.254`, `255.255.255.252`, `255.255.255.248`, `255.255.255.240`, `255.255.255.224`, `255.255.255.192`, `255.255.255.128`, `255.255.255.0`, `255.255.254.0`, `255.255.252.0`, `255.255.248.0`, `255.255.240.0`, `255.255.224.0`, `255.255.192.0`, `255.255.128.0`, `255.255.0.0`, `255.254.0.0`, `255.252.0.0`, `255.240.0.0`, `255.224.0.0`, `255.192.0.0`, `255.128.0.0`, `255.0.0.0`, `254.0.0.0`, `252.0.0.0`, `248.0.0.0`, `240.0.0.0`, `224.0.0.0`, `192.0.0.0`, `128.0.0.0`, `0.0.0.0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_management_vpn_interface_ethernet_feature#subnet_mask TransportManagementVpnInterfaceEthernetFeature#subnet_mask}
  */
  readonly subnetMask?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_management_vpn_interface_ethernet_feature#subnet_mask_variable TransportManagementVpnInterfaceEthernetFeature#subnet_mask_variable}
  */
  readonly subnetMaskVariable?: string;
}

export function transportManagementVpnInterfaceEthernetFeatureIpv4SecondaryAddressesToTerraform(struct?: TransportManagementVpnInterfaceEthernetFeatureIpv4SecondaryAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    address_variable: cdktf.stringToTerraform(struct!.addressVariable),
    subnet_mask: cdktf.stringToTerraform(struct!.subnetMask),
    subnet_mask_variable: cdktf.stringToTerraform(struct!.subnetMaskVariable),
  }
}


export function transportManagementVpnInterfaceEthernetFeatureIpv4SecondaryAddressesToHclTerraform(struct?: TransportManagementVpnInterfaceEthernetFeatureIpv4SecondaryAddresses | cdktf.IResolvable): any {
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
    subnet_mask: {
      value: cdktf.stringToHclTerraform(struct!.subnetMask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_mask_variable: {
      value: cdktf.stringToHclTerraform(struct!.subnetMaskVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TransportManagementVpnInterfaceEthernetFeatureIpv4SecondaryAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TransportManagementVpnInterfaceEthernetFeatureIpv4SecondaryAddresses | cdktf.IResolvable | undefined {
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
    if (this._subnetMask !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetMask = this._subnetMask;
    }
    if (this._subnetMaskVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetMaskVariable = this._subnetMaskVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransportManagementVpnInterfaceEthernetFeatureIpv4SecondaryAddresses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._addressVariable = undefined;
      this._subnetMask = undefined;
      this._subnetMaskVariable = undefined;
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
      this._subnetMask = value.subnetMask;
      this._subnetMaskVariable = value.subnetMaskVariable;
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

  // subnet_mask - computed: false, optional: true, required: false
  private _subnetMask?: string; 
  public get subnetMask() {
    return this.getStringAttribute('subnet_mask');
  }
  public set subnetMask(value: string) {
    this._subnetMask = value;
  }
  public resetSubnetMask() {
    this._subnetMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetMaskInput() {
    return this._subnetMask;
  }

  // subnet_mask_variable - computed: false, optional: true, required: false
  private _subnetMaskVariable?: string; 
  public get subnetMaskVariable() {
    return this.getStringAttribute('subnet_mask_variable');
  }
  public set subnetMaskVariable(value: string) {
    this._subnetMaskVariable = value;
  }
  public resetSubnetMaskVariable() {
    this._subnetMaskVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetMaskVariableInput() {
    return this._subnetMaskVariable;
  }
}

export class TransportManagementVpnInterfaceEthernetFeatureIpv4SecondaryAddressesList extends cdktf.ComplexList {
  public internalValue? : TransportManagementVpnInterfaceEthernetFeatureIpv4SecondaryAddresses[] | cdktf.IResolvable

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
  public get(index: number): TransportManagementVpnInterfaceEthernetFeatureIpv4SecondaryAddressesOutputReference {
    return new TransportManagementVpnInterfaceEthernetFeatureIpv4SecondaryAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_management_vpn_interface_ethernet_feature sdwan_transport_management_vpn_interface_ethernet_feature}
*/
export class TransportManagementVpnInterfaceEthernetFeature extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_transport_management_vpn_interface_ethernet_feature";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TransportManagementVpnInterfaceEthernetFeature resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TransportManagementVpnInterfaceEthernetFeature to import
  * @param importFromId The id of the existing TransportManagementVpnInterfaceEthernetFeature that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_management_vpn_interface_ethernet_feature#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TransportManagementVpnInterfaceEthernetFeature to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_transport_management_vpn_interface_ethernet_feature", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_management_vpn_interface_ethernet_feature sdwan_transport_management_vpn_interface_ethernet_feature} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TransportManagementVpnInterfaceEthernetFeatureConfig
  */
  public constructor(scope: Construct, id: string, config: TransportManagementVpnInterfaceEthernetFeatureConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_transport_management_vpn_interface_ethernet_feature',
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
    this._arpEntries.internalValue = config.arpEntries;
    this._arpTimeout = config.arpTimeout;
    this._arpTimeoutVariable = config.arpTimeoutVariable;
    this._autonegotiate = config.autonegotiate;
    this._autonegotiateVariable = config.autonegotiateVariable;
    this._description = config.description;
    this._duplex = config.duplex;
    this._duplexVariable = config.duplexVariable;
    this._enableDhcpv6 = config.enableDhcpv6;
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
    this._ipv4AutoDetectBandwidth = config.ipv4AutoDetectBandwidth;
    this._ipv4AutoDetectBandwidthVariable = config.ipv4AutoDetectBandwidthVariable;
    this._ipv4ConfigurationType = config.ipv4ConfigurationType;
    this._ipv4DhcpDistance = config.ipv4DhcpDistance;
    this._ipv4DhcpDistanceVariable = config.ipv4DhcpDistanceVariable;
    this._ipv4DhcpHelper = config.ipv4DhcpHelper;
    this._ipv4DhcpHelperVariable = config.ipv4DhcpHelperVariable;
    this._ipv4IperfServer = config.ipv4IperfServer;
    this._ipv4IperfServerVariable = config.ipv4IperfServerVariable;
    this._ipv4SecondaryAddresses.internalValue = config.ipv4SecondaryAddresses;
    this._ipv4SubnetMask = config.ipv4SubnetMask;
    this._ipv4SubnetMaskVariable = config.ipv4SubnetMaskVariable;
    this._ipv6Address = config.ipv6Address;
    this._ipv6AddressVariable = config.ipv6AddressVariable;
    this._ipv6ConfigurationType = config.ipv6ConfigurationType;
    this._loadInterval = config.loadInterval;
    this._loadIntervalVariable = config.loadIntervalVariable;
    this._macAddress = config.macAddress;
    this._macAddressVariable = config.macAddressVariable;
    this._mediaType = config.mediaType;
    this._mediaTypeVariable = config.mediaTypeVariable;
    this._name = config.name;
    this._shutdown = config.shutdown;
    this._shutdownVariable = config.shutdownVariable;
    this._speed = config.speed;
    this._speedVariable = config.speedVariable;
    this._tcpMss = config.tcpMss;
    this._tcpMssVariable = config.tcpMssVariable;
    this._transportManagementVpnFeatureId = config.transportManagementVpnFeatureId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arp_entries - computed: false, optional: true, required: false
  private _arpEntries = new TransportManagementVpnInterfaceEthernetFeatureArpEntriesList(this, "arp_entries", false);
  public get arpEntries() {
    return this._arpEntries;
  }
  public putArpEntries(value: TransportManagementVpnInterfaceEthernetFeatureArpEntries[] | cdktf.IResolvable) {
    this._arpEntries.internalValue = value;
  }
  public resetArpEntries() {
    this._arpEntries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arpEntriesInput() {
    return this._arpEntries.internalValue;
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

  // autonegotiate - computed: false, optional: true, required: false
  private _autonegotiate?: boolean | cdktf.IResolvable; 
  public get autonegotiate() {
    return this.getBooleanAttribute('autonegotiate');
  }
  public set autonegotiate(value: boolean | cdktf.IResolvable) {
    this._autonegotiate = value;
  }
  public resetAutonegotiate() {
    this._autonegotiate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autonegotiateInput() {
    return this._autonegotiate;
  }

  // autonegotiate_variable - computed: false, optional: true, required: false
  private _autonegotiateVariable?: string; 
  public get autonegotiateVariable() {
    return this.getStringAttribute('autonegotiate_variable');
  }
  public set autonegotiateVariable(value: string) {
    this._autonegotiateVariable = value;
  }
  public resetAutonegotiateVariable() {
    this._autonegotiateVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autonegotiateVariableInput() {
    return this._autonegotiateVariable;
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

  // duplex - computed: false, optional: true, required: false
  private _duplex?: string; 
  public get duplex() {
    return this.getStringAttribute('duplex');
  }
  public set duplex(value: string) {
    this._duplex = value;
  }
  public resetDuplex() {
    this._duplex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get duplexInput() {
    return this._duplex;
  }

  // duplex_variable - computed: false, optional: true, required: false
  private _duplexVariable?: string; 
  public get duplexVariable() {
    return this.getStringAttribute('duplex_variable');
  }
  public set duplexVariable(value: string) {
    this._duplexVariable = value;
  }
  public resetDuplexVariable() {
    this._duplexVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get duplexVariableInput() {
    return this._duplexVariable;
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

  // ipv4_auto_detect_bandwidth - computed: false, optional: true, required: false
  private _ipv4AutoDetectBandwidth?: boolean | cdktf.IResolvable; 
  public get ipv4AutoDetectBandwidth() {
    return this.getBooleanAttribute('ipv4_auto_detect_bandwidth');
  }
  public set ipv4AutoDetectBandwidth(value: boolean | cdktf.IResolvable) {
    this._ipv4AutoDetectBandwidth = value;
  }
  public resetIpv4AutoDetectBandwidth() {
    this._ipv4AutoDetectBandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AutoDetectBandwidthInput() {
    return this._ipv4AutoDetectBandwidth;
  }

  // ipv4_auto_detect_bandwidth_variable - computed: false, optional: true, required: false
  private _ipv4AutoDetectBandwidthVariable?: string; 
  public get ipv4AutoDetectBandwidthVariable() {
    return this.getStringAttribute('ipv4_auto_detect_bandwidth_variable');
  }
  public set ipv4AutoDetectBandwidthVariable(value: string) {
    this._ipv4AutoDetectBandwidthVariable = value;
  }
  public resetIpv4AutoDetectBandwidthVariable() {
    this._ipv4AutoDetectBandwidthVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AutoDetectBandwidthVariableInput() {
    return this._ipv4AutoDetectBandwidthVariable;
  }

  // ipv4_configuration_type - computed: false, optional: true, required: false
  private _ipv4ConfigurationType?: string; 
  public get ipv4ConfigurationType() {
    return this.getStringAttribute('ipv4_configuration_type');
  }
  public set ipv4ConfigurationType(value: string) {
    this._ipv4ConfigurationType = value;
  }
  public resetIpv4ConfigurationType() {
    this._ipv4ConfigurationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4ConfigurationTypeInput() {
    return this._ipv4ConfigurationType;
  }

  // ipv4_dhcp_distance - computed: false, optional: true, required: false
  private _ipv4DhcpDistance?: number; 
  public get ipv4DhcpDistance() {
    return this.getNumberAttribute('ipv4_dhcp_distance');
  }
  public set ipv4DhcpDistance(value: number) {
    this._ipv4DhcpDistance = value;
  }
  public resetIpv4DhcpDistance() {
    this._ipv4DhcpDistance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4DhcpDistanceInput() {
    return this._ipv4DhcpDistance;
  }

  // ipv4_dhcp_distance_variable - computed: false, optional: true, required: false
  private _ipv4DhcpDistanceVariable?: string; 
  public get ipv4DhcpDistanceVariable() {
    return this.getStringAttribute('ipv4_dhcp_distance_variable');
  }
  public set ipv4DhcpDistanceVariable(value: string) {
    this._ipv4DhcpDistanceVariable = value;
  }
  public resetIpv4DhcpDistanceVariable() {
    this._ipv4DhcpDistanceVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4DhcpDistanceVariableInput() {
    return this._ipv4DhcpDistanceVariable;
  }

  // ipv4_dhcp_helper - computed: false, optional: true, required: false
  private _ipv4DhcpHelper?: string[]; 
  public get ipv4DhcpHelper() {
    return cdktf.Fn.tolist(this.getListAttribute('ipv4_dhcp_helper'));
  }
  public set ipv4DhcpHelper(value: string[]) {
    this._ipv4DhcpHelper = value;
  }
  public resetIpv4DhcpHelper() {
    this._ipv4DhcpHelper = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4DhcpHelperInput() {
    return this._ipv4DhcpHelper;
  }

  // ipv4_dhcp_helper_variable - computed: false, optional: true, required: false
  private _ipv4DhcpHelperVariable?: string; 
  public get ipv4DhcpHelperVariable() {
    return this.getStringAttribute('ipv4_dhcp_helper_variable');
  }
  public set ipv4DhcpHelperVariable(value: string) {
    this._ipv4DhcpHelperVariable = value;
  }
  public resetIpv4DhcpHelperVariable() {
    this._ipv4DhcpHelperVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4DhcpHelperVariableInput() {
    return this._ipv4DhcpHelperVariable;
  }

  // ipv4_iperf_server - computed: false, optional: true, required: false
  private _ipv4IperfServer?: string; 
  public get ipv4IperfServer() {
    return this.getStringAttribute('ipv4_iperf_server');
  }
  public set ipv4IperfServer(value: string) {
    this._ipv4IperfServer = value;
  }
  public resetIpv4IperfServer() {
    this._ipv4IperfServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4IperfServerInput() {
    return this._ipv4IperfServer;
  }

  // ipv4_iperf_server_variable - computed: false, optional: true, required: false
  private _ipv4IperfServerVariable?: string; 
  public get ipv4IperfServerVariable() {
    return this.getStringAttribute('ipv4_iperf_server_variable');
  }
  public set ipv4IperfServerVariable(value: string) {
    this._ipv4IperfServerVariable = value;
  }
  public resetIpv4IperfServerVariable() {
    this._ipv4IperfServerVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4IperfServerVariableInput() {
    return this._ipv4IperfServerVariable;
  }

  // ipv4_secondary_addresses - computed: false, optional: true, required: false
  private _ipv4SecondaryAddresses = new TransportManagementVpnInterfaceEthernetFeatureIpv4SecondaryAddressesList(this, "ipv4_secondary_addresses", false);
  public get ipv4SecondaryAddresses() {
    return this._ipv4SecondaryAddresses;
  }
  public putIpv4SecondaryAddresses(value: TransportManagementVpnInterfaceEthernetFeatureIpv4SecondaryAddresses[] | cdktf.IResolvable) {
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

  // ipv6_configuration_type - computed: false, optional: true, required: false
  private _ipv6ConfigurationType?: string; 
  public get ipv6ConfigurationType() {
    return this.getStringAttribute('ipv6_configuration_type');
  }
  public set ipv6ConfigurationType(value: string) {
    this._ipv6ConfigurationType = value;
  }
  public resetIpv6ConfigurationType() {
    this._ipv6ConfigurationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6ConfigurationTypeInput() {
    return this._ipv6ConfigurationType;
  }

  // load_interval - computed: false, optional: true, required: false
  private _loadInterval?: number; 
  public get loadInterval() {
    return this.getNumberAttribute('load_interval');
  }
  public set loadInterval(value: number) {
    this._loadInterval = value;
  }
  public resetLoadInterval() {
    this._loadInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadIntervalInput() {
    return this._loadInterval;
  }

  // load_interval_variable - computed: false, optional: true, required: false
  private _loadIntervalVariable?: string; 
  public get loadIntervalVariable() {
    return this.getStringAttribute('load_interval_variable');
  }
  public set loadIntervalVariable(value: string) {
    this._loadIntervalVariable = value;
  }
  public resetLoadIntervalVariable() {
    this._loadIntervalVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadIntervalVariableInput() {
    return this._loadIntervalVariable;
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

  // media_type - computed: false, optional: true, required: false
  private _mediaType?: string; 
  public get mediaType() {
    return this.getStringAttribute('media_type');
  }
  public set mediaType(value: string) {
    this._mediaType = value;
  }
  public resetMediaType() {
    this._mediaType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mediaTypeInput() {
    return this._mediaType;
  }

  // media_type_variable - computed: false, optional: true, required: false
  private _mediaTypeVariable?: string; 
  public get mediaTypeVariable() {
    return this.getStringAttribute('media_type_variable');
  }
  public set mediaTypeVariable(value: string) {
    this._mediaTypeVariable = value;
  }
  public resetMediaTypeVariable() {
    this._mediaTypeVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mediaTypeVariableInput() {
    return this._mediaTypeVariable;
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

  // speed - computed: false, optional: true, required: false
  private _speed?: string; 
  public get speed() {
    return this.getStringAttribute('speed');
  }
  public set speed(value: string) {
    this._speed = value;
  }
  public resetSpeed() {
    this._speed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get speedInput() {
    return this._speed;
  }

  // speed_variable - computed: false, optional: true, required: false
  private _speedVariable?: string; 
  public get speedVariable() {
    return this.getStringAttribute('speed_variable');
  }
  public set speedVariable(value: string) {
    this._speedVariable = value;
  }
  public resetSpeedVariable() {
    this._speedVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get speedVariableInput() {
    return this._speedVariable;
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

  // transport_management_vpn_feature_id - computed: false, optional: false, required: true
  private _transportManagementVpnFeatureId?: string; 
  public get transportManagementVpnFeatureId() {
    return this.getStringAttribute('transport_management_vpn_feature_id');
  }
  public set transportManagementVpnFeatureId(value: string) {
    this._transportManagementVpnFeatureId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transportManagementVpnFeatureIdInput() {
    return this._transportManagementVpnFeatureId;
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
      arp_entries: cdktf.listMapper(transportManagementVpnInterfaceEthernetFeatureArpEntriesToTerraform, false)(this._arpEntries.internalValue),
      arp_timeout: cdktf.numberToTerraform(this._arpTimeout),
      arp_timeout_variable: cdktf.stringToTerraform(this._arpTimeoutVariable),
      autonegotiate: cdktf.booleanToTerraform(this._autonegotiate),
      autonegotiate_variable: cdktf.stringToTerraform(this._autonegotiateVariable),
      description: cdktf.stringToTerraform(this._description),
      duplex: cdktf.stringToTerraform(this._duplex),
      duplex_variable: cdktf.stringToTerraform(this._duplexVariable),
      enable_dhcpv6: cdktf.booleanToTerraform(this._enableDhcpv6),
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
      ipv4_auto_detect_bandwidth: cdktf.booleanToTerraform(this._ipv4AutoDetectBandwidth),
      ipv4_auto_detect_bandwidth_variable: cdktf.stringToTerraform(this._ipv4AutoDetectBandwidthVariable),
      ipv4_configuration_type: cdktf.stringToTerraform(this._ipv4ConfigurationType),
      ipv4_dhcp_distance: cdktf.numberToTerraform(this._ipv4DhcpDistance),
      ipv4_dhcp_distance_variable: cdktf.stringToTerraform(this._ipv4DhcpDistanceVariable),
      ipv4_dhcp_helper: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipv4DhcpHelper),
      ipv4_dhcp_helper_variable: cdktf.stringToTerraform(this._ipv4DhcpHelperVariable),
      ipv4_iperf_server: cdktf.stringToTerraform(this._ipv4IperfServer),
      ipv4_iperf_server_variable: cdktf.stringToTerraform(this._ipv4IperfServerVariable),
      ipv4_secondary_addresses: cdktf.listMapper(transportManagementVpnInterfaceEthernetFeatureIpv4SecondaryAddressesToTerraform, false)(this._ipv4SecondaryAddresses.internalValue),
      ipv4_subnet_mask: cdktf.stringToTerraform(this._ipv4SubnetMask),
      ipv4_subnet_mask_variable: cdktf.stringToTerraform(this._ipv4SubnetMaskVariable),
      ipv6_address: cdktf.stringToTerraform(this._ipv6Address),
      ipv6_address_variable: cdktf.stringToTerraform(this._ipv6AddressVariable),
      ipv6_configuration_type: cdktf.stringToTerraform(this._ipv6ConfigurationType),
      load_interval: cdktf.numberToTerraform(this._loadInterval),
      load_interval_variable: cdktf.stringToTerraform(this._loadIntervalVariable),
      mac_address: cdktf.stringToTerraform(this._macAddress),
      mac_address_variable: cdktf.stringToTerraform(this._macAddressVariable),
      media_type: cdktf.stringToTerraform(this._mediaType),
      media_type_variable: cdktf.stringToTerraform(this._mediaTypeVariable),
      name: cdktf.stringToTerraform(this._name),
      shutdown: cdktf.booleanToTerraform(this._shutdown),
      shutdown_variable: cdktf.stringToTerraform(this._shutdownVariable),
      speed: cdktf.stringToTerraform(this._speed),
      speed_variable: cdktf.stringToTerraform(this._speedVariable),
      tcp_mss: cdktf.numberToTerraform(this._tcpMss),
      tcp_mss_variable: cdktf.stringToTerraform(this._tcpMssVariable),
      transport_management_vpn_feature_id: cdktf.stringToTerraform(this._transportManagementVpnFeatureId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      arp_entries: {
        value: cdktf.listMapperHcl(transportManagementVpnInterfaceEthernetFeatureArpEntriesToHclTerraform, false)(this._arpEntries.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TransportManagementVpnInterfaceEthernetFeatureArpEntriesList",
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
      autonegotiate: {
        value: cdktf.booleanToHclTerraform(this._autonegotiate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      autonegotiate_variable: {
        value: cdktf.stringToHclTerraform(this._autonegotiateVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      duplex: {
        value: cdktf.stringToHclTerraform(this._duplex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      duplex_variable: {
        value: cdktf.stringToHclTerraform(this._duplexVariable),
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
      ipv4_auto_detect_bandwidth: {
        value: cdktf.booleanToHclTerraform(this._ipv4AutoDetectBandwidth),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ipv4_auto_detect_bandwidth_variable: {
        value: cdktf.stringToHclTerraform(this._ipv4AutoDetectBandwidthVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_configuration_type: {
        value: cdktf.stringToHclTerraform(this._ipv4ConfigurationType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_dhcp_distance: {
        value: cdktf.numberToHclTerraform(this._ipv4DhcpDistance),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ipv4_dhcp_distance_variable: {
        value: cdktf.stringToHclTerraform(this._ipv4DhcpDistanceVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_dhcp_helper: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ipv4DhcpHelper),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      ipv4_dhcp_helper_variable: {
        value: cdktf.stringToHclTerraform(this._ipv4DhcpHelperVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_iperf_server: {
        value: cdktf.stringToHclTerraform(this._ipv4IperfServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_iperf_server_variable: {
        value: cdktf.stringToHclTerraform(this._ipv4IperfServerVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_secondary_addresses: {
        value: cdktf.listMapperHcl(transportManagementVpnInterfaceEthernetFeatureIpv4SecondaryAddressesToHclTerraform, false)(this._ipv4SecondaryAddresses.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TransportManagementVpnInterfaceEthernetFeatureIpv4SecondaryAddressesList",
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
      ipv6_configuration_type: {
        value: cdktf.stringToHclTerraform(this._ipv6ConfigurationType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      load_interval: {
        value: cdktf.numberToHclTerraform(this._loadInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      load_interval_variable: {
        value: cdktf.stringToHclTerraform(this._loadIntervalVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mac_address: {
        value: cdktf.stringToHclTerraform(this._macAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mac_address_variable: {
        value: cdktf.stringToHclTerraform(this._macAddressVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      media_type: {
        value: cdktf.stringToHclTerraform(this._mediaType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      media_type_variable: {
        value: cdktf.stringToHclTerraform(this._mediaTypeVariable),
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
      speed: {
        value: cdktf.stringToHclTerraform(this._speed),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      speed_variable: {
        value: cdktf.stringToHclTerraform(this._speedVariable),
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
      transport_management_vpn_feature_id: {
        value: cdktf.stringToHclTerraform(this._transportManagementVpnFeatureId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
