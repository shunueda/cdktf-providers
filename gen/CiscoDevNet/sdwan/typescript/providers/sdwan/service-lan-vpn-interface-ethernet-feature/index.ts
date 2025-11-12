// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServiceLanVpnInterfaceEthernetFeatureConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature#acl_ipv4_egress_policy_id ServiceLanVpnInterfaceEthernetFeature#acl_ipv4_egress_policy_id}
  */
  readonly aclIpv4EgressPolicyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature#acl_ipv4_ingress_policy_id ServiceLanVpnInterfaceEthernetFeature#acl_ipv4_ingress_policy_id}
  */
  readonly aclIpv4IngressPolicyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature#acl_ipv6_egress_policy_id ServiceLanVpnInterfaceEthernetFeature#acl_ipv6_egress_policy_id}
  */
  readonly aclIpv6EgressPolicyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature#acl_ipv6_ingress_policy_id ServiceLanVpnInterfaceEthernetFeature#acl_ipv6_ingress_policy_id}
  */
  readonly aclIpv6IngressPolicyId?: string;
  /**
  * Shaping Rate (Kbps)
  *   - Range: `8`-`100000000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature#acl_shaping_rate ServiceLanVpnInterfaceEthernetFeature#acl_shaping_rate}
  */
  readonly aclShapingRate?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature#acl_shaping_rate_variable ServiceLanVpnInterfaceEthernetFeature#acl_shaping_rate_variable}
  */
  readonly aclShapingRateVariable?: string;
  /**
  * Timeout value for dynamically learned ARP entries, <0..2678400> seconds
  *   - Range: `0`-`2147483`
  *   - Default value: `1200`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature#arp_timeout ServiceLanVpnInterfaceEthernetFeature#arp_timeout}
  */
  readonly arpTimeout?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature#arp_timeout_variable ServiceLanVpnInterfaceEthernetFeature#arp_timeout_variable}
  */
  readonly arpTimeoutVariable?: string;
  /**
  * Configure ARP entries
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature#arps ServiceLanVpnInterfaceEthernetFeature#arps}
  */
  readonly arps?: ServiceLanVpnInterfaceEthernetFeatureArps[] | cdktf.IResolvable;
  /**
  * Link autonegotiation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature#autonegotiate ServiceLanVpnInterfaceEthernetFeature#autonegotiate}
  */
  readonly autonegotiate?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature#autonegotiate_variable ServiceLanVpnInterfaceEthernetFeature#autonegotiate_variable}
  */
  readonly autonegotiateVariable?: string;
  /**
  * The description of the Feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature#description ServiceLanVpnInterfaceEthernetFeature#description}
  */
  readonly description?: string;
  /**
  * Duplex mode
  *   - Choices: `full`, `half`, `auto`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature#duplex ServiceLanVpnInterfaceEthernetFeature#duplex}
  */
  readonly duplex?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature#duplex_variable ServiceLanVpnInterfaceEthernetFeature#duplex_variable}
  */
  readonly duplexVariable?: string;
  /**
  * Enable DHCPv6, Attribute conditional on `ipv6_configuration_type` being equal to `dynamic`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature#enable_dhcpv6 ServiceLanVpnInterfaceEthernetFeature#enable_dhcpv6}
  */
  readonly enableDhcpv6?: boolean | cdktf.IResolvable;
  /**
  * Feature Profile ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature#feature_profile_id ServiceLanVpnInterfaceEthernetFeature#feature_profile_id}
  */
  readonly featureProfileId: string;
  /**
  * ICMP/ICMPv6 Redirect Disable
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature#icmp_redirect_disable ServiceLanVpnInterfaceEthernetFeature#icmp_redirect_disable}
  */
  readonly icmpRedirectDisable?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature#icmp_redirect_disable_variable ServiceLanVpnInterfaceEthernetFeature#icmp_redirect_disable_variable}
  */
  readonly icmpRedirectDisableVariable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature#interface_description ServiceLanVpnInterfaceEthernetFeature#interface_description}
  */
  readonly interfaceDescription?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature#interface_description_variable ServiceLanVpnInterfaceEthernetFeature#interface_description_variable}
  */
  readonly interfaceDescriptionVariable?: string;
  /**
  * Interface MTU
  *   - Range: `1500`-`9216`
  *   - Default value: `1500`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature#interface_mtu ServiceLanVpnInterfaceEthernetFeature#interface_mtu}
  */
  readonly interfaceMtu?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature#interface_mtu_variable ServiceLanVpnInterfaceEthernetFeature#interface_mtu_variable}
  */
  readonly interfaceMtuVariable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature#interface_name ServiceLanVpnInterfaceEthernetFeature#interface_name}
  */
  readonly interfaceName?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature#interface_name_variable ServiceLanVpnInterfaceEthernetFeature#interface_name_variable}
  */
  readonly interfaceNameVariable?: string;
  /**
  * IP Directed-Broadcast
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature#ip_directed_broadcast ServiceLanVpnInterfaceEthernetFeature#ip_directed_broadcast}
  */
  readonly ipDirectedBroadcast?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature#ip_directed_broadcast_variable ServiceLanVpnInterfaceEthernetFeature#ip_directed_broadcast_variable}
  */
  readonly ipDirectedBroadcastVariable?: string;
  /**
  * IP MTU for GigabitEthernet main <576..Interface MTU>, GigabitEthernet subinterface <576..9216>, Other Interfaces <576..2000> in bytes
  *   - Range: `576`-`9216`
  *   - Default value: `1500`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature#ip_mtu ServiceLanVpnInterfaceEthernetFeature#ip_mtu}
  */
  readonly ipMtu?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature#ip_mtu_variable ServiceLanVpnInterfaceEthernetFeature#ip_mtu_variable}
  */
  readonly ipMtuVariable?: string;
  /**
  * IP Address, Attribute conditional on `ipv4_configuration_type` being equal to `static`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature#ipv4_address ServiceLanVpnInterfaceEthernetFeature#ipv4_address}
  */
  readonly ipv4Address?: string;
  /**
  * Variable name, Attribute conditional on `ipv4_configuration_type` being equal to `static`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature#ipv4_address_variable ServiceLanVpnInterfaceEthernetFeature#ipv4_address_variable}
  */
  readonly ipv4AddressVariable?: string;
  /**
  * IPv4 Configuration Type
  *   - Choices: `dynamic`, `static`
  *   - Default value: `dynamic`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature#ipv4_configuration_type ServiceLanVpnInterfaceEthernetFeature#ipv4_configuration_type}
  */
  readonly ipv4ConfigurationType?: string;
  /**
  * DHCP Distance, Attribute conditional on `ipv4_configuration_type` being equal to `dynamic`
  *   - Range: `1`-`65536`
  *   - Default value: `1`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature#ipv4_dhcp_distance ServiceLanVpnInterfaceEthernetFeature#ipv4_dhcp_distance}
  */
  readonly ipv4DhcpDistance?: number;
  /**
  * Variable name, Attribute conditional on `ipv4_configuration_type` being equal to `dynamic`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature#ipv4_dhcp_distance_variable ServiceLanVpnInterfaceEthernetFeature#ipv4_dhcp_distance_variable}
  */
  readonly ipv4DhcpDistanceVariable?: string;
  /**
  * List of DHCP IPv4 helper addresses (min 1, max 8)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature#ipv4_dhcp_helper ServiceLanVpnInterfaceEthernetFeature#ipv4_dhcp_helper}
  */
  readonly ipv4DhcpHelper?: string[];
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature#ipv4_dhcp_helper_variable ServiceLanVpnInterfaceEthernetFeature#ipv4_dhcp_helper_variable}
  */
  readonly ipv4DhcpHelperVariable?: string;
  /**
  * enable Network Address Translation on this interface
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature#ipv4_nat ServiceLanVpnInterfaceEthernetFeature#ipv4_nat}
  */
  readonly ipv4Nat?: boolean | cdktf.IResolvable;
  /**
  * NAT Inside Source Loopback Interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature#ipv4_nat_loopback ServiceLanVpnInterfaceEthernetFeature#ipv4_nat_loopback}
  */
  readonly ipv4NatLoopback?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature#ipv4_nat_loopback_variable ServiceLanVpnInterfaceEthernetFeature#ipv4_nat_loopback_variable}
  */
  readonly ipv4NatLoopbackVariable?: string;
  /**
  * NAT Overload
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature#ipv4_nat_overload ServiceLanVpnInterfaceEthernetFeature#ipv4_nat_overload}
  */
  readonly ipv4NatOverload?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature#ipv4_nat_overload_variable ServiceLanVpnInterfaceEthernetFeature#ipv4_nat_overload_variable}
  */
  readonly ipv4NatOverloadVariable?: string;
  /**
  * NAT Pool Prefix Length
  *   - Range: `1`-`32`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature#ipv4_nat_prefix_length ServiceLanVpnInterfaceEthernetFeature#ipv4_nat_prefix_length}
  */
  readonly ipv4NatPrefixLength?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature#ipv4_nat_prefix_length_variable ServiceLanVpnInterfaceEthernetFeature#ipv4_nat_prefix_length_variable}
  */
  readonly ipv4NatPrefixLengthVariable?: string;
  /**
  * NAT Pool Range End
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature#ipv4_nat_range_end ServiceLanVpnInterfaceEthernetFeature#ipv4_nat_range_end}
  */
  readonly ipv4NatRangeEnd?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature#ipv4_nat_range_end_variable ServiceLanVpnInterfaceEthernetFeature#ipv4_nat_range_end_variable}
  */
  readonly ipv4NatRangeEndVariable?: string;
  /**
  * NAT Pool Range Start
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature#ipv4_nat_range_start ServiceLanVpnInterfaceEthernetFeature#ipv4_nat_range_start}
  */
  readonly ipv4NatRangeStart?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature#ipv4_nat_range_start_variable ServiceLanVpnInterfaceEthernetFeature#ipv4_nat_range_start_variable}
  */
  readonly ipv4NatRangeStartVariable?: string;
  /**
  * Set NAT TCP session timeout, in minutes
  *   - Range: `1`-`8947`
  *   - Default value: `60`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature#ipv4_nat_tcp_timeout ServiceLanVpnInterfaceEthernetFeature#ipv4_nat_tcp_timeout}
  */
  readonly ipv4NatTcpTimeout?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature#ipv4_nat_tcp_timeout_variable ServiceLanVpnInterfaceEthernetFeature#ipv4_nat_tcp_timeout_variable}
  */
  readonly ipv4NatTcpTimeoutVariable?: string;
  /**
  * Set NAT UDP session timeout, in minutes
  *   - Range: `1`-`8947`
  *   - Default value: `1`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature#ipv4_nat_udp_timeout ServiceLanVpnInterfaceEthernetFeature#ipv4_nat_udp_timeout}
  */
  readonly ipv4NatUdpTimeout?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature#ipv4_nat_udp_timeout_variable ServiceLanVpnInterfaceEthernetFeature#ipv4_nat_udp_timeout_variable}
  */
  readonly ipv4NatUdpTimeoutVariable?: string;
  /**
  * Secondary IpV4 Addresses, Attribute conditional on `ipv4_configuration_type` being equal to `static`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature#ipv4_secondary_addresses ServiceLanVpnInterfaceEthernetFeature#ipv4_secondary_addresses}
  */
  readonly ipv4SecondaryAddresses?: ServiceLanVpnInterfaceEthernetFeatureIpv4SecondaryAddresses[] | cdktf.IResolvable;
  /**
  * Subnet Mask, Attribute conditional on `ipv4_configuration_type` being equal to `static`
  *   - Choices: `255.255.255.255`, `255.255.255.254`, `255.255.255.252`, `255.255.255.248`, `255.255.255.240`, `255.255.255.224`, `255.255.255.192`, `255.255.255.128`, `255.255.255.0`, `255.255.254.0`, `255.255.252.0`, `255.255.248.0`, `255.255.240.0`, `255.255.224.0`, `255.255.192.0`, `255.255.128.0`, `255.255.0.0`, `255.254.0.0`, `255.252.0.0`, `255.240.0.0`, `255.224.0.0`, `255.192.0.0`, `255.128.0.0`, `255.0.0.0`, `254.0.0.0`, `252.0.0.0`, `248.0.0.0`, `240.0.0.0`, `224.0.0.0`, `192.0.0.0`, `128.0.0.0`, `0.0.0.0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature#ipv4_subnet_mask ServiceLanVpnInterfaceEthernetFeature#ipv4_subnet_mask}
  */
  readonly ipv4SubnetMask?: string;
  /**
  * Variable name, Attribute conditional on `ipv4_configuration_type` being equal to `static`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature#ipv4_subnet_mask_variable ServiceLanVpnInterfaceEthernetFeature#ipv4_subnet_mask_variable}
  */
  readonly ipv4SubnetMaskVariable?: string;
  /**
  * Enable VRRP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature#ipv4_vrrps ServiceLanVpnInterfaceEthernetFeature#ipv4_vrrps}
  */
  readonly ipv4Vrrps?: ServiceLanVpnInterfaceEthernetFeatureIpv4Vrrps[] | cdktf.IResolvable;
  /**
  * IPv6 Address Secondary, Attribute conditional on `ipv6_configuration_type` being equal to `static`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature#ipv6_address ServiceLanVpnInterfaceEthernetFeature#ipv6_address}
  */
  readonly ipv6Address?: string;
  /**
  * Variable name, Attribute conditional on `ipv6_configuration_type` being equal to `static`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature#ipv6_address_variable ServiceLanVpnInterfaceEthernetFeature#ipv6_address_variable}
  */
  readonly ipv6AddressVariable?: string;
  /**
  * IPv6 Configuration Type
  *   - Choices: `dynamic`, `static`, `none`
  *   - Default value: `none`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature#ipv6_configuration_type ServiceLanVpnInterfaceEthernetFeature#ipv6_configuration_type}
  */
  readonly ipv6ConfigurationType?: string;
  /**
  * DHCPv6 Helper, Attribute conditional on `ipv6_configuration_type` being equal to `static`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature#ipv6_dhcp_helpers ServiceLanVpnInterfaceEthernetFeature#ipv6_dhcp_helpers}
  */
  readonly ipv6DhcpHelpers?: ServiceLanVpnInterfaceEthernetFeatureIpv6DhcpHelpers[] | cdktf.IResolvable;
  /**
  * secondary IPv6 addresses, Attribute conditional on `ipv6_configuration_type` being equal to `dynamic`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature#ipv6_dhcp_secondary_addresses ServiceLanVpnInterfaceEthernetFeature#ipv6_dhcp_secondary_addresses}
  */
  readonly ipv6DhcpSecondaryAddresses?: ServiceLanVpnInterfaceEthernetFeatureIpv6DhcpSecondaryAddresses[] | cdktf.IResolvable;
  /**
  * enable Network Address Translation ipv6 on this interface
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature#ipv6_nat ServiceLanVpnInterfaceEthernetFeature#ipv6_nat}
  */
  readonly ipv6Nat?: boolean | cdktf.IResolvable;
  /**
  * Static secondary IPv6 addresses, Attribute conditional on `ipv6_configuration_type` being equal to `static`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature#ipv6_secondary_addresses ServiceLanVpnInterfaceEthernetFeature#ipv6_secondary_addresses}
  */
  readonly ipv6SecondaryAddresses?: ServiceLanVpnInterfaceEthernetFeatureIpv6SecondaryAddresses[] | cdktf.IResolvable;
  /**
  * Enable VRRP Ipv6
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature#ipv6_vrrps ServiceLanVpnInterfaceEthernetFeature#ipv6_vrrps}
  */
  readonly ipv6Vrrps?: ServiceLanVpnInterfaceEthernetFeatureIpv6Vrrps[] | cdktf.IResolvable;
  /**
  * Interval for interface load calculation
  *   - Range: `30`-`600`
  *   - Default value: `30`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature#load_interval ServiceLanVpnInterfaceEthernetFeature#load_interval}
  */
  readonly loadInterval?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature#load_interval_variable ServiceLanVpnInterfaceEthernetFeature#load_interval_variable}
  */
  readonly loadIntervalVariable?: string;
  /**
  * MAC Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature#mac_address ServiceLanVpnInterfaceEthernetFeature#mac_address}
  */
  readonly macAddress?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature#mac_address_variable ServiceLanVpnInterfaceEthernetFeature#mac_address_variable}
  */
  readonly macAddressVariable?: string;
  /**
  * Media type
  *   - Choices: `auto-select`, `rj45`, `sfp`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature#media_type ServiceLanVpnInterfaceEthernetFeature#media_type}
  */
  readonly mediaType?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature#media_type_variable ServiceLanVpnInterfaceEthernetFeature#media_type_variable}
  */
  readonly mediaTypeVariable?: string;
  /**
  * The name of the Feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature#name ServiceLanVpnInterfaceEthernetFeature#name}
  */
  readonly name: string;
  /**
  * NAT64 on this interface
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature#nat64 ServiceLanVpnInterfaceEthernetFeature#nat64}
  */
  readonly nat64?: boolean | cdktf.IResolvable;
  /**
  * Service LAN VPN Feature ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature#service_lan_vpn_feature_id ServiceLanVpnInterfaceEthernetFeature#service_lan_vpn_feature_id}
  */
  readonly serviceLanVpnFeatureId: string;
  /**
  * 
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature#shutdown ServiceLanVpnInterfaceEthernetFeature#shutdown}
  */
  readonly shutdown?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature#shutdown_variable ServiceLanVpnInterfaceEthernetFeature#shutdown_variable}
  */
  readonly shutdownVariable?: string;
  /**
  * Set interface speed
  *   - Choices: `10`, `100`, `1000`, `2500`, `10000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature#speed ServiceLanVpnInterfaceEthernetFeature#speed}
  */
  readonly speed?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature#speed_variable ServiceLanVpnInterfaceEthernetFeature#speed_variable}
  */
  readonly speedVariable?: string;
  /**
  * static NAT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature#static_nats ServiceLanVpnInterfaceEthernetFeature#static_nats}
  */
  readonly staticNats?: ServiceLanVpnInterfaceEthernetFeatureStaticNats[] | cdktf.IResolvable;
  /**
  * TCP MSS on SYN packets, in bytes
  *   - Range: `500`-`1460`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature#tcp_mss ServiceLanVpnInterfaceEthernetFeature#tcp_mss}
  */
  readonly tcpMss?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature#tcp_mss_variable ServiceLanVpnInterfaceEthernetFeature#tcp_mss_variable}
  */
  readonly tcpMssVariable?: string;
  /**
  * Enable tracker for this interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature#tracker ServiceLanVpnInterfaceEthernetFeature#tracker}
  */
  readonly tracker?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature#tracker_variable ServiceLanVpnInterfaceEthernetFeature#tracker_variable}
  */
  readonly trackerVariable?: string;
  /**
  * Enable/Disable SGT Enforcement on an interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature#trustsec_enable_enforced_propogation ServiceLanVpnInterfaceEthernetFeature#trustsec_enable_enforced_propogation}
  */
  readonly trustsecEnableEnforcedPropogation?: boolean | cdktf.IResolvable;
  /**
  * Indicates that the interface is trustworthy for CTS
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature#trustsec_enable_sgt_propogation ServiceLanVpnInterfaceEthernetFeature#trustsec_enable_sgt_propogation}
  */
  readonly trustsecEnableSgtPropogation?: boolean | cdktf.IResolvable;
  /**
  * SGT value between 2 and 65519
  *   - Range: `2`-`65519`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature#trustsec_enforced_security_group_tag ServiceLanVpnInterfaceEthernetFeature#trustsec_enforced_security_group_tag}
  */
  readonly trustsecEnforcedSecurityGroupTag?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature#trustsec_enforced_security_group_tag_variable ServiceLanVpnInterfaceEthernetFeature#trustsec_enforced_security_group_tag_variable}
  */
  readonly trustsecEnforcedSecurityGroupTagVariable?: string;
  /**
  * Enables the interface for CTS SGT authorization and forwarding
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature#trustsec_propogate ServiceLanVpnInterfaceEthernetFeature#trustsec_propogate}
  */
  readonly trustsecPropogate?: boolean | cdktf.IResolvable;
  /**
  * SGT value between 2 and 65519
  *   - Range: `2`-`65519`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature#trustsec_security_group_tag ServiceLanVpnInterfaceEthernetFeature#trustsec_security_group_tag}
  */
  readonly trustsecSecurityGroupTag?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature#trustsec_security_group_tag_variable ServiceLanVpnInterfaceEthernetFeature#trustsec_security_group_tag_variable}
  */
  readonly trustsecSecurityGroupTagVariable?: string;
  /**
  * Extend remote TLOC over a GRE tunnel to a local LAN interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature#xconnect ServiceLanVpnInterfaceEthernetFeature#xconnect}
  */
  readonly xconnect?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature#xconnect_variable ServiceLanVpnInterfaceEthernetFeature#xconnect_variable}
  */
  readonly xconnectVariable?: string;
}
export interface ServiceLanVpnInterfaceEthernetFeatureArps {
  /**
  * IPV4 Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature#ip_address ServiceLanVpnInterfaceEthernetFeature#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature#ip_address_variable ServiceLanVpnInterfaceEthernetFeature#ip_address_variable}
  */
  readonly ipAddressVariable?: string;
  /**
  * MAC Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature#mac_address ServiceLanVpnInterfaceEthernetFeature#mac_address}
  */
  readonly macAddress?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature#mac_address_variable ServiceLanVpnInterfaceEthernetFeature#mac_address_variable}
  */
  readonly macAddressVariable?: string;
}

export function serviceLanVpnInterfaceEthernetFeatureArpsToTerraform(struct?: ServiceLanVpnInterfaceEthernetFeatureArps | cdktf.IResolvable): any {
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


export function serviceLanVpnInterfaceEthernetFeatureArpsToHclTerraform(struct?: ServiceLanVpnInterfaceEthernetFeatureArps | cdktf.IResolvable): any {
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

export class ServiceLanVpnInterfaceEthernetFeatureArpsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceLanVpnInterfaceEthernetFeatureArps | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ServiceLanVpnInterfaceEthernetFeatureArps | cdktf.IResolvable | undefined) {
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

export class ServiceLanVpnInterfaceEthernetFeatureArpsList extends cdktf.ComplexList {
  public internalValue? : ServiceLanVpnInterfaceEthernetFeatureArps[] | cdktf.IResolvable

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
  public get(index: number): ServiceLanVpnInterfaceEthernetFeatureArpsOutputReference {
    return new ServiceLanVpnInterfaceEthernetFeatureArpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceLanVpnInterfaceEthernetFeatureIpv4SecondaryAddresses {
  /**
  * IpV4 Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature#address ServiceLanVpnInterfaceEthernetFeature#address}
  */
  readonly address?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature#address_variable ServiceLanVpnInterfaceEthernetFeature#address_variable}
  */
  readonly addressVariable?: string;
  /**
  * Subnet Mask
  *   - Choices: `255.255.255.255`, `255.255.255.254`, `255.255.255.252`, `255.255.255.248`, `255.255.255.240`, `255.255.255.224`, `255.255.255.192`, `255.255.255.128`, `255.255.255.0`, `255.255.254.0`, `255.255.252.0`, `255.255.248.0`, `255.255.240.0`, `255.255.224.0`, `255.255.192.0`, `255.255.128.0`, `255.255.0.0`, `255.254.0.0`, `255.252.0.0`, `255.240.0.0`, `255.224.0.0`, `255.192.0.0`, `255.128.0.0`, `255.0.0.0`, `254.0.0.0`, `252.0.0.0`, `248.0.0.0`, `240.0.0.0`, `224.0.0.0`, `192.0.0.0`, `128.0.0.0`, `0.0.0.0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature#subnet_mask ServiceLanVpnInterfaceEthernetFeature#subnet_mask}
  */
  readonly subnetMask?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature#subnet_mask_variable ServiceLanVpnInterfaceEthernetFeature#subnet_mask_variable}
  */
  readonly subnetMaskVariable?: string;
}

export function serviceLanVpnInterfaceEthernetFeatureIpv4SecondaryAddressesToTerraform(struct?: ServiceLanVpnInterfaceEthernetFeatureIpv4SecondaryAddresses | cdktf.IResolvable): any {
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


export function serviceLanVpnInterfaceEthernetFeatureIpv4SecondaryAddressesToHclTerraform(struct?: ServiceLanVpnInterfaceEthernetFeatureIpv4SecondaryAddresses | cdktf.IResolvable): any {
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

export class ServiceLanVpnInterfaceEthernetFeatureIpv4SecondaryAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceLanVpnInterfaceEthernetFeatureIpv4SecondaryAddresses | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ServiceLanVpnInterfaceEthernetFeatureIpv4SecondaryAddresses | cdktf.IResolvable | undefined) {
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

export class ServiceLanVpnInterfaceEthernetFeatureIpv4SecondaryAddressesList extends cdktf.ComplexList {
  public internalValue? : ServiceLanVpnInterfaceEthernetFeatureIpv4SecondaryAddresses[] | cdktf.IResolvable

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
  public get(index: number): ServiceLanVpnInterfaceEthernetFeatureIpv4SecondaryAddressesOutputReference {
    return new ServiceLanVpnInterfaceEthernetFeatureIpv4SecondaryAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceLanVpnInterfaceEthernetFeatureIpv4VrrpsSecondaryAddresses {
  /**
  * Ip Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature#address ServiceLanVpnInterfaceEthernetFeature#address}
  */
  readonly address?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature#address_variable ServiceLanVpnInterfaceEthernetFeature#address_variable}
  */
  readonly addressVariable?: string;
  /**
  * Subnet Mask
  *   - Choices: `255.255.255.255`, `255.255.255.254`, `255.255.255.252`, `255.255.255.248`, `255.255.255.240`, `255.255.255.224`, `255.255.255.192`, `255.255.255.128`, `255.255.255.0`, `255.255.254.0`, `255.255.252.0`, `255.255.248.0`, `255.255.240.0`, `255.255.224.0`, `255.255.192.0`, `255.255.128.0`, `255.255.0.0`, `255.254.0.0`, `255.252.0.0`, `255.240.0.0`, `255.224.0.0`, `255.192.0.0`, `255.128.0.0`, `255.0.0.0`, `254.0.0.0`, `252.0.0.0`, `248.0.0.0`, `240.0.0.0`, `224.0.0.0`, `192.0.0.0`, `128.0.0.0`, `0.0.0.0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature#subnet_mask ServiceLanVpnInterfaceEthernetFeature#subnet_mask}
  */
  readonly subnetMask?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature#subnet_mask_variable ServiceLanVpnInterfaceEthernetFeature#subnet_mask_variable}
  */
  readonly subnetMaskVariable?: string;
}

export function serviceLanVpnInterfaceEthernetFeatureIpv4VrrpsSecondaryAddressesToTerraform(struct?: ServiceLanVpnInterfaceEthernetFeatureIpv4VrrpsSecondaryAddresses | cdktf.IResolvable): any {
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


export function serviceLanVpnInterfaceEthernetFeatureIpv4VrrpsSecondaryAddressesToHclTerraform(struct?: ServiceLanVpnInterfaceEthernetFeatureIpv4VrrpsSecondaryAddresses | cdktf.IResolvable): any {
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

export class ServiceLanVpnInterfaceEthernetFeatureIpv4VrrpsSecondaryAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceLanVpnInterfaceEthernetFeatureIpv4VrrpsSecondaryAddresses | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ServiceLanVpnInterfaceEthernetFeatureIpv4VrrpsSecondaryAddresses | cdktf.IResolvable | undefined) {
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

export class ServiceLanVpnInterfaceEthernetFeatureIpv4VrrpsSecondaryAddressesList extends cdktf.ComplexList {
  public internalValue? : ServiceLanVpnInterfaceEthernetFeatureIpv4VrrpsSecondaryAddresses[] | cdktf.IResolvable

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
  public get(index: number): ServiceLanVpnInterfaceEthernetFeatureIpv4VrrpsSecondaryAddressesOutputReference {
    return new ServiceLanVpnInterfaceEthernetFeatureIpv4VrrpsSecondaryAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceLanVpnInterfaceEthernetFeatureIpv4VrrpsTrackingObjects {
  /**
  * Decrement Value for VRRP priority
  *   - Range: `1`-`255`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature#decrement_value ServiceLanVpnInterfaceEthernetFeature#decrement_value}
  */
  readonly decrementValue?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature#decrement_value_variable ServiceLanVpnInterfaceEthernetFeature#decrement_value_variable}
  */
  readonly decrementValueVariable?: string;
  /**
  * Track Action
  *   - Choices: `Decrement`, `Shutdown`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature#tracker_action ServiceLanVpnInterfaceEthernetFeature#tracker_action}
  */
  readonly trackerAction?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature#tracker_action_variable ServiceLanVpnInterfaceEthernetFeature#tracker_action_variable}
  */
  readonly trackerActionVariable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature#tracker_id ServiceLanVpnInterfaceEthernetFeature#tracker_id}
  */
  readonly trackerId?: string;
}

export function serviceLanVpnInterfaceEthernetFeatureIpv4VrrpsTrackingObjectsToTerraform(struct?: ServiceLanVpnInterfaceEthernetFeatureIpv4VrrpsTrackingObjects | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decrement_value: cdktf.numberToTerraform(struct!.decrementValue),
    decrement_value_variable: cdktf.stringToTerraform(struct!.decrementValueVariable),
    tracker_action: cdktf.stringToTerraform(struct!.trackerAction),
    tracker_action_variable: cdktf.stringToTerraform(struct!.trackerActionVariable),
    tracker_id: cdktf.stringToTerraform(struct!.trackerId),
  }
}


export function serviceLanVpnInterfaceEthernetFeatureIpv4VrrpsTrackingObjectsToHclTerraform(struct?: ServiceLanVpnInterfaceEthernetFeatureIpv4VrrpsTrackingObjects | cdktf.IResolvable): any {
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
    tracker_action: {
      value: cdktf.stringToHclTerraform(struct!.trackerAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tracker_action_variable: {
      value: cdktf.stringToHclTerraform(struct!.trackerActionVariable),
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

export class ServiceLanVpnInterfaceEthernetFeatureIpv4VrrpsTrackingObjectsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceLanVpnInterfaceEthernetFeatureIpv4VrrpsTrackingObjects | cdktf.IResolvable | undefined {
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
    if (this._trackerAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.trackerAction = this._trackerAction;
    }
    if (this._trackerActionVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.trackerActionVariable = this._trackerActionVariable;
    }
    if (this._trackerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.trackerId = this._trackerId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceLanVpnInterfaceEthernetFeatureIpv4VrrpsTrackingObjects | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._decrementValue = undefined;
      this._decrementValueVariable = undefined;
      this._trackerAction = undefined;
      this._trackerActionVariable = undefined;
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
      this._trackerAction = value.trackerAction;
      this._trackerActionVariable = value.trackerActionVariable;
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

  // tracker_action - computed: false, optional: true, required: false
  private _trackerAction?: string; 
  public get trackerAction() {
    return this.getStringAttribute('tracker_action');
  }
  public set trackerAction(value: string) {
    this._trackerAction = value;
  }
  public resetTrackerAction() {
    this._trackerAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackerActionInput() {
    return this._trackerAction;
  }

  // tracker_action_variable - computed: false, optional: true, required: false
  private _trackerActionVariable?: string; 
  public get trackerActionVariable() {
    return this.getStringAttribute('tracker_action_variable');
  }
  public set trackerActionVariable(value: string) {
    this._trackerActionVariable = value;
  }
  public resetTrackerActionVariable() {
    this._trackerActionVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackerActionVariableInput() {
    return this._trackerActionVariable;
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

export class ServiceLanVpnInterfaceEthernetFeatureIpv4VrrpsTrackingObjectsList extends cdktf.ComplexList {
  public internalValue? : ServiceLanVpnInterfaceEthernetFeatureIpv4VrrpsTrackingObjects[] | cdktf.IResolvable

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
  public get(index: number): ServiceLanVpnInterfaceEthernetFeatureIpv4VrrpsTrackingObjectsOutputReference {
    return new ServiceLanVpnInterfaceEthernetFeatureIpv4VrrpsTrackingObjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceLanVpnInterfaceEthernetFeatureIpv4Vrrps {
  /**
  * VRRP Ip Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature#address ServiceLanVpnInterfaceEthernetFeature#address}
  */
  readonly address?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature#address_variable ServiceLanVpnInterfaceEthernetFeature#address_variable}
  */
  readonly addressVariable?: string;
  /**
  * Group ID
  *   - Range: `1`-`255`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature#group_id ServiceLanVpnInterfaceEthernetFeature#group_id}
  */
  readonly groupId?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature#group_id_variable ServiceLanVpnInterfaceEthernetFeature#group_id_variable}
  */
  readonly groupIdVariable?: string;
  /**
  * Set priority
  *   - Range: `1`-`254`
  *   - Default value: `100`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature#priority ServiceLanVpnInterfaceEthernetFeature#priority}
  */
  readonly priority?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature#priority_variable ServiceLanVpnInterfaceEthernetFeature#priority_variable}
  */
  readonly priorityVariable?: string;
  /**
  * VRRP Secondary Ip Addresses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature#secondary_addresses ServiceLanVpnInterfaceEthernetFeature#secondary_addresses}
  */
  readonly secondaryAddresses?: ServiceLanVpnInterfaceEthernetFeatureIpv4VrrpsSecondaryAddresses[] | cdktf.IResolvable;
  /**
  * Timer interval for successive advertisements, in milliseconds
  *   - Range: `100`-`40950`
  *   - Default value: `1000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature#timer ServiceLanVpnInterfaceEthernetFeature#timer}
  */
  readonly timer?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature#timer_variable ServiceLanVpnInterfaceEthernetFeature#timer_variable}
  */
  readonly timerVariable?: string;
  /**
  * Timer interval for successive advertisements, in milliseconds
  *   - Range: `100`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature#tloc_pref_change_value ServiceLanVpnInterfaceEthernetFeature#tloc_pref_change_value}
  */
  readonly tlocPrefChangeValue?: number;
  /**
  * Timer interval for successive advertisements, in milliseconds
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature#tloc_prefix_change ServiceLanVpnInterfaceEthernetFeature#tloc_prefix_change}
  */
  readonly tlocPrefixChange?: boolean | cdktf.IResolvable;
  /**
  * Track OMP status
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature#track_omp ServiceLanVpnInterfaceEthernetFeature#track_omp}
  */
  readonly trackOmp?: boolean | cdktf.IResolvable;
  /**
  * Tracking object for VRRP configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature#tracking_objects ServiceLanVpnInterfaceEthernetFeature#tracking_objects}
  */
  readonly trackingObjects?: ServiceLanVpnInterfaceEthernetFeatureIpv4VrrpsTrackingObjects[] | cdktf.IResolvable;
}

export function serviceLanVpnInterfaceEthernetFeatureIpv4VrrpsToTerraform(struct?: ServiceLanVpnInterfaceEthernetFeatureIpv4Vrrps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    address_variable: cdktf.stringToTerraform(struct!.addressVariable),
    group_id: cdktf.numberToTerraform(struct!.groupId),
    group_id_variable: cdktf.stringToTerraform(struct!.groupIdVariable),
    priority: cdktf.numberToTerraform(struct!.priority),
    priority_variable: cdktf.stringToTerraform(struct!.priorityVariable),
    secondary_addresses: cdktf.listMapper(serviceLanVpnInterfaceEthernetFeatureIpv4VrrpsSecondaryAddressesToTerraform, false)(struct!.secondaryAddresses),
    timer: cdktf.numberToTerraform(struct!.timer),
    timer_variable: cdktf.stringToTerraform(struct!.timerVariable),
    tloc_pref_change_value: cdktf.numberToTerraform(struct!.tlocPrefChangeValue),
    tloc_prefix_change: cdktf.booleanToTerraform(struct!.tlocPrefixChange),
    track_omp: cdktf.booleanToTerraform(struct!.trackOmp),
    tracking_objects: cdktf.listMapper(serviceLanVpnInterfaceEthernetFeatureIpv4VrrpsTrackingObjectsToTerraform, false)(struct!.trackingObjects),
  }
}


export function serviceLanVpnInterfaceEthernetFeatureIpv4VrrpsToHclTerraform(struct?: ServiceLanVpnInterfaceEthernetFeatureIpv4Vrrps | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(serviceLanVpnInterfaceEthernetFeatureIpv4VrrpsSecondaryAddressesToHclTerraform, false)(struct!.secondaryAddresses),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceLanVpnInterfaceEthernetFeatureIpv4VrrpsSecondaryAddressesList",
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
    tloc_pref_change_value: {
      value: cdktf.numberToHclTerraform(struct!.tlocPrefChangeValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tloc_prefix_change: {
      value: cdktf.booleanToHclTerraform(struct!.tlocPrefixChange),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    track_omp: {
      value: cdktf.booleanToHclTerraform(struct!.trackOmp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tracking_objects: {
      value: cdktf.listMapperHcl(serviceLanVpnInterfaceEthernetFeatureIpv4VrrpsTrackingObjectsToHclTerraform, false)(struct!.trackingObjects),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceLanVpnInterfaceEthernetFeatureIpv4VrrpsTrackingObjectsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceLanVpnInterfaceEthernetFeatureIpv4VrrpsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceLanVpnInterfaceEthernetFeatureIpv4Vrrps | cdktf.IResolvable | undefined {
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
    if (this._tlocPrefChangeValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlocPrefChangeValue = this._tlocPrefChangeValue;
    }
    if (this._tlocPrefixChange !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlocPrefixChange = this._tlocPrefixChange;
    }
    if (this._trackOmp !== undefined) {
      hasAnyValues = true;
      internalValueResult.trackOmp = this._trackOmp;
    }
    if (this._trackingObjects?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trackingObjects = this._trackingObjects?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceLanVpnInterfaceEthernetFeatureIpv4Vrrps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._addressVariable = undefined;
      this._groupId = undefined;
      this._groupIdVariable = undefined;
      this._priority = undefined;
      this._priorityVariable = undefined;
      this._secondaryAddresses.internalValue = undefined;
      this._timer = undefined;
      this._timerVariable = undefined;
      this._tlocPrefChangeValue = undefined;
      this._tlocPrefixChange = undefined;
      this._trackOmp = undefined;
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
      this._priority = value.priority;
      this._priorityVariable = value.priorityVariable;
      this._secondaryAddresses.internalValue = value.secondaryAddresses;
      this._timer = value.timer;
      this._timerVariable = value.timerVariable;
      this._tlocPrefChangeValue = value.tlocPrefChangeValue;
      this._tlocPrefixChange = value.tlocPrefixChange;
      this._trackOmp = value.trackOmp;
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
  private _secondaryAddresses = new ServiceLanVpnInterfaceEthernetFeatureIpv4VrrpsSecondaryAddressesList(this, "secondary_addresses", false);
  public get secondaryAddresses() {
    return this._secondaryAddresses;
  }
  public putSecondaryAddresses(value: ServiceLanVpnInterfaceEthernetFeatureIpv4VrrpsSecondaryAddresses[] | cdktf.IResolvable) {
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

  // tloc_pref_change_value - computed: false, optional: true, required: false
  private _tlocPrefChangeValue?: number; 
  public get tlocPrefChangeValue() {
    return this.getNumberAttribute('tloc_pref_change_value');
  }
  public set tlocPrefChangeValue(value: number) {
    this._tlocPrefChangeValue = value;
  }
  public resetTlocPrefChangeValue() {
    this._tlocPrefChangeValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlocPrefChangeValueInput() {
    return this._tlocPrefChangeValue;
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

  // tracking_objects - computed: false, optional: true, required: false
  private _trackingObjects = new ServiceLanVpnInterfaceEthernetFeatureIpv4VrrpsTrackingObjectsList(this, "tracking_objects", false);
  public get trackingObjects() {
    return this._trackingObjects;
  }
  public putTrackingObjects(value: ServiceLanVpnInterfaceEthernetFeatureIpv4VrrpsTrackingObjects[] | cdktf.IResolvable) {
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

export class ServiceLanVpnInterfaceEthernetFeatureIpv4VrrpsList extends cdktf.ComplexList {
  public internalValue? : ServiceLanVpnInterfaceEthernetFeatureIpv4Vrrps[] | cdktf.IResolvable

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
  public get(index: number): ServiceLanVpnInterfaceEthernetFeatureIpv4VrrpsOutputReference {
    return new ServiceLanVpnInterfaceEthernetFeatureIpv4VrrpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceLanVpnInterfaceEthernetFeatureIpv6DhcpHelpers {
  /**
  * DHCPv6 Helper address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature#address ServiceLanVpnInterfaceEthernetFeature#address}
  */
  readonly address?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature#address_variable ServiceLanVpnInterfaceEthernetFeature#address_variable}
  */
  readonly addressVariable?: string;
  /**
  * DHCPv6 Helper VPN
  *   - Range: `1`-`65536`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature#dhcpv6_helper_vpn ServiceLanVpnInterfaceEthernetFeature#dhcpv6_helper_vpn}
  */
  readonly dhcpv6HelperVpn?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature#dhcpv6_helper_vpn_variable ServiceLanVpnInterfaceEthernetFeature#dhcpv6_helper_vpn_variable}
  */
  readonly dhcpv6HelperVpnVariable?: string;
}

export function serviceLanVpnInterfaceEthernetFeatureIpv6DhcpHelpersToTerraform(struct?: ServiceLanVpnInterfaceEthernetFeatureIpv6DhcpHelpers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    address_variable: cdktf.stringToTerraform(struct!.addressVariable),
    dhcpv6_helper_vpn: cdktf.numberToTerraform(struct!.dhcpv6HelperVpn),
    dhcpv6_helper_vpn_variable: cdktf.stringToTerraform(struct!.dhcpv6HelperVpnVariable),
  }
}


export function serviceLanVpnInterfaceEthernetFeatureIpv6DhcpHelpersToHclTerraform(struct?: ServiceLanVpnInterfaceEthernetFeatureIpv6DhcpHelpers | cdktf.IResolvable): any {
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
    dhcpv6_helper_vpn: {
      value: cdktf.numberToHclTerraform(struct!.dhcpv6HelperVpn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dhcpv6_helper_vpn_variable: {
      value: cdktf.stringToHclTerraform(struct!.dhcpv6HelperVpnVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceLanVpnInterfaceEthernetFeatureIpv6DhcpHelpersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceLanVpnInterfaceEthernetFeatureIpv6DhcpHelpers | cdktf.IResolvable | undefined {
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
    if (this._dhcpv6HelperVpn !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpv6HelperVpn = this._dhcpv6HelperVpn;
    }
    if (this._dhcpv6HelperVpnVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpv6HelperVpnVariable = this._dhcpv6HelperVpnVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceLanVpnInterfaceEthernetFeatureIpv6DhcpHelpers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._addressVariable = undefined;
      this._dhcpv6HelperVpn = undefined;
      this._dhcpv6HelperVpnVariable = undefined;
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
      this._dhcpv6HelperVpn = value.dhcpv6HelperVpn;
      this._dhcpv6HelperVpnVariable = value.dhcpv6HelperVpnVariable;
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

  // dhcpv6_helper_vpn - computed: false, optional: true, required: false
  private _dhcpv6HelperVpn?: number; 
  public get dhcpv6HelperVpn() {
    return this.getNumberAttribute('dhcpv6_helper_vpn');
  }
  public set dhcpv6HelperVpn(value: number) {
    this._dhcpv6HelperVpn = value;
  }
  public resetDhcpv6HelperVpn() {
    this._dhcpv6HelperVpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpv6HelperVpnInput() {
    return this._dhcpv6HelperVpn;
  }

  // dhcpv6_helper_vpn_variable - computed: false, optional: true, required: false
  private _dhcpv6HelperVpnVariable?: string; 
  public get dhcpv6HelperVpnVariable() {
    return this.getStringAttribute('dhcpv6_helper_vpn_variable');
  }
  public set dhcpv6HelperVpnVariable(value: string) {
    this._dhcpv6HelperVpnVariable = value;
  }
  public resetDhcpv6HelperVpnVariable() {
    this._dhcpv6HelperVpnVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpv6HelperVpnVariableInput() {
    return this._dhcpv6HelperVpnVariable;
  }
}

export class ServiceLanVpnInterfaceEthernetFeatureIpv6DhcpHelpersList extends cdktf.ComplexList {
  public internalValue? : ServiceLanVpnInterfaceEthernetFeatureIpv6DhcpHelpers[] | cdktf.IResolvable

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
  public get(index: number): ServiceLanVpnInterfaceEthernetFeatureIpv6DhcpHelpersOutputReference {
    return new ServiceLanVpnInterfaceEthernetFeatureIpv6DhcpHelpersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceLanVpnInterfaceEthernetFeatureIpv6DhcpSecondaryAddresses {
  /**
  * IPv6 Address Secondary
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature#address ServiceLanVpnInterfaceEthernetFeature#address}
  */
  readonly address?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature#address_variable ServiceLanVpnInterfaceEthernetFeature#address_variable}
  */
  readonly addressVariable?: string;
}

export function serviceLanVpnInterfaceEthernetFeatureIpv6DhcpSecondaryAddressesToTerraform(struct?: ServiceLanVpnInterfaceEthernetFeatureIpv6DhcpSecondaryAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    address_variable: cdktf.stringToTerraform(struct!.addressVariable),
  }
}


export function serviceLanVpnInterfaceEthernetFeatureIpv6DhcpSecondaryAddressesToHclTerraform(struct?: ServiceLanVpnInterfaceEthernetFeatureIpv6DhcpSecondaryAddresses | cdktf.IResolvable): any {
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

export class ServiceLanVpnInterfaceEthernetFeatureIpv6DhcpSecondaryAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceLanVpnInterfaceEthernetFeatureIpv6DhcpSecondaryAddresses | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ServiceLanVpnInterfaceEthernetFeatureIpv6DhcpSecondaryAddresses | cdktf.IResolvable | undefined) {
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

export class ServiceLanVpnInterfaceEthernetFeatureIpv6DhcpSecondaryAddressesList extends cdktf.ComplexList {
  public internalValue? : ServiceLanVpnInterfaceEthernetFeatureIpv6DhcpSecondaryAddresses[] | cdktf.IResolvable

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
  public get(index: number): ServiceLanVpnInterfaceEthernetFeatureIpv6DhcpSecondaryAddressesOutputReference {
    return new ServiceLanVpnInterfaceEthernetFeatureIpv6DhcpSecondaryAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceLanVpnInterfaceEthernetFeatureIpv6SecondaryAddresses {
  /**
  * IPv6 Address Secondary
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature#address ServiceLanVpnInterfaceEthernetFeature#address}
  */
  readonly address?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature#address_variable ServiceLanVpnInterfaceEthernetFeature#address_variable}
  */
  readonly addressVariable?: string;
}

export function serviceLanVpnInterfaceEthernetFeatureIpv6SecondaryAddressesToTerraform(struct?: ServiceLanVpnInterfaceEthernetFeatureIpv6SecondaryAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    address_variable: cdktf.stringToTerraform(struct!.addressVariable),
  }
}


export function serviceLanVpnInterfaceEthernetFeatureIpv6SecondaryAddressesToHclTerraform(struct?: ServiceLanVpnInterfaceEthernetFeatureIpv6SecondaryAddresses | cdktf.IResolvable): any {
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

export class ServiceLanVpnInterfaceEthernetFeatureIpv6SecondaryAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceLanVpnInterfaceEthernetFeatureIpv6SecondaryAddresses | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ServiceLanVpnInterfaceEthernetFeatureIpv6SecondaryAddresses | cdktf.IResolvable | undefined) {
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

export class ServiceLanVpnInterfaceEthernetFeatureIpv6SecondaryAddressesList extends cdktf.ComplexList {
  public internalValue? : ServiceLanVpnInterfaceEthernetFeatureIpv6SecondaryAddresses[] | cdktf.IResolvable

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
  public get(index: number): ServiceLanVpnInterfaceEthernetFeatureIpv6SecondaryAddressesOutputReference {
    return new ServiceLanVpnInterfaceEthernetFeatureIpv6SecondaryAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceLanVpnInterfaceEthernetFeatureIpv6VrrpsIpv6Addresses {
  /**
  * Assign Global IPv6 Prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature#global_address ServiceLanVpnInterfaceEthernetFeature#global_address}
  */
  readonly globalAddress?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature#global_address_variable ServiceLanVpnInterfaceEthernetFeature#global_address_variable}
  */
  readonly globalAddressVariable?: string;
  /**
  * Use link-local IPv6 Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature#link_local_address ServiceLanVpnInterfaceEthernetFeature#link_local_address}
  */
  readonly linkLocalAddress?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature#link_local_address_variable ServiceLanVpnInterfaceEthernetFeature#link_local_address_variable}
  */
  readonly linkLocalAddressVariable?: string;
}

export function serviceLanVpnInterfaceEthernetFeatureIpv6VrrpsIpv6AddressesToTerraform(struct?: ServiceLanVpnInterfaceEthernetFeatureIpv6VrrpsIpv6Addresses | cdktf.IResolvable): any {
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


export function serviceLanVpnInterfaceEthernetFeatureIpv6VrrpsIpv6AddressesToHclTerraform(struct?: ServiceLanVpnInterfaceEthernetFeatureIpv6VrrpsIpv6Addresses | cdktf.IResolvable): any {
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

export class ServiceLanVpnInterfaceEthernetFeatureIpv6VrrpsIpv6AddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceLanVpnInterfaceEthernetFeatureIpv6VrrpsIpv6Addresses | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ServiceLanVpnInterfaceEthernetFeatureIpv6VrrpsIpv6Addresses | cdktf.IResolvable | undefined) {
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

export class ServiceLanVpnInterfaceEthernetFeatureIpv6VrrpsIpv6AddressesList extends cdktf.ComplexList {
  public internalValue? : ServiceLanVpnInterfaceEthernetFeatureIpv6VrrpsIpv6Addresses[] | cdktf.IResolvable

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
  public get(index: number): ServiceLanVpnInterfaceEthernetFeatureIpv6VrrpsIpv6AddressesOutputReference {
    return new ServiceLanVpnInterfaceEthernetFeatureIpv6VrrpsIpv6AddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceLanVpnInterfaceEthernetFeatureIpv6Vrrps {
  /**
  * Group ID
  *   - Range: `1`-`255`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature#group_id ServiceLanVpnInterfaceEthernetFeature#group_id}
  */
  readonly groupId?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature#group_id_variable ServiceLanVpnInterfaceEthernetFeature#group_id_variable}
  */
  readonly groupIdVariable?: string;
  /**
  * IPv6 VRRP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature#ipv6_addresses ServiceLanVpnInterfaceEthernetFeature#ipv6_addresses}
  */
  readonly ipv6Addresses?: ServiceLanVpnInterfaceEthernetFeatureIpv6VrrpsIpv6Addresses[] | cdktf.IResolvable;
  /**
  * Set priority
  *   - Range: `1`-`254`
  *   - Default value: `100`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature#priority ServiceLanVpnInterfaceEthernetFeature#priority}
  */
  readonly priority?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature#priority_variable ServiceLanVpnInterfaceEthernetFeature#priority_variable}
  */
  readonly priorityVariable?: string;
  /**
  * Timer interval for successive advertisements, in milliseconds
  *   - Range: `100`-`40950`
  *   - Default value: `1000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature#timer ServiceLanVpnInterfaceEthernetFeature#timer}
  */
  readonly timer?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature#timer_variable ServiceLanVpnInterfaceEthernetFeature#timer_variable}
  */
  readonly timerVariable?: string;
  /**
  * Track OMP status
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature#track_omp ServiceLanVpnInterfaceEthernetFeature#track_omp}
  */
  readonly trackOmp?: boolean | cdktf.IResolvable;
}

export function serviceLanVpnInterfaceEthernetFeatureIpv6VrrpsToTerraform(struct?: ServiceLanVpnInterfaceEthernetFeatureIpv6Vrrps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_id: cdktf.numberToTerraform(struct!.groupId),
    group_id_variable: cdktf.stringToTerraform(struct!.groupIdVariable),
    ipv6_addresses: cdktf.listMapper(serviceLanVpnInterfaceEthernetFeatureIpv6VrrpsIpv6AddressesToTerraform, false)(struct!.ipv6Addresses),
    priority: cdktf.numberToTerraform(struct!.priority),
    priority_variable: cdktf.stringToTerraform(struct!.priorityVariable),
    timer: cdktf.numberToTerraform(struct!.timer),
    timer_variable: cdktf.stringToTerraform(struct!.timerVariable),
    track_omp: cdktf.booleanToTerraform(struct!.trackOmp),
  }
}


export function serviceLanVpnInterfaceEthernetFeatureIpv6VrrpsToHclTerraform(struct?: ServiceLanVpnInterfaceEthernetFeatureIpv6Vrrps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
    ipv6_addresses: {
      value: cdktf.listMapperHcl(serviceLanVpnInterfaceEthernetFeatureIpv6VrrpsIpv6AddressesToHclTerraform, false)(struct!.ipv6Addresses),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceLanVpnInterfaceEthernetFeatureIpv6VrrpsIpv6AddressesList",
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceLanVpnInterfaceEthernetFeatureIpv6VrrpsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceLanVpnInterfaceEthernetFeatureIpv6Vrrps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupId = this._groupId;
    }
    if (this._groupIdVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupIdVariable = this._groupIdVariable;
    }
    if (this._ipv6Addresses?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Addresses = this._ipv6Addresses?.internalValue;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._priorityVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.priorityVariable = this._priorityVariable;
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceLanVpnInterfaceEthernetFeatureIpv6Vrrps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groupId = undefined;
      this._groupIdVariable = undefined;
      this._ipv6Addresses.internalValue = undefined;
      this._priority = undefined;
      this._priorityVariable = undefined;
      this._timer = undefined;
      this._timerVariable = undefined;
      this._trackOmp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groupId = value.groupId;
      this._groupIdVariable = value.groupIdVariable;
      this._ipv6Addresses.internalValue = value.ipv6Addresses;
      this._priority = value.priority;
      this._priorityVariable = value.priorityVariable;
      this._timer = value.timer;
      this._timerVariable = value.timerVariable;
      this._trackOmp = value.trackOmp;
    }
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

  // ipv6_addresses - computed: false, optional: true, required: false
  private _ipv6Addresses = new ServiceLanVpnInterfaceEthernetFeatureIpv6VrrpsIpv6AddressesList(this, "ipv6_addresses", false);
  public get ipv6Addresses() {
    return this._ipv6Addresses;
  }
  public putIpv6Addresses(value: ServiceLanVpnInterfaceEthernetFeatureIpv6VrrpsIpv6Addresses[] | cdktf.IResolvable) {
    this._ipv6Addresses.internalValue = value;
  }
  public resetIpv6Addresses() {
    this._ipv6Addresses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressesInput() {
    return this._ipv6Addresses.internalValue;
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
}

export class ServiceLanVpnInterfaceEthernetFeatureIpv6VrrpsList extends cdktf.ComplexList {
  public internalValue? : ServiceLanVpnInterfaceEthernetFeatureIpv6Vrrps[] | cdktf.IResolvable

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
  public get(index: number): ServiceLanVpnInterfaceEthernetFeatureIpv6VrrpsOutputReference {
    return new ServiceLanVpnInterfaceEthernetFeatureIpv6VrrpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceLanVpnInterfaceEthernetFeatureStaticNats {
  /**
  * Direction of static NAT translation
  *   - Choices: `inside`, `outside`
  *   - Default value: `inside`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature#direction ServiceLanVpnInterfaceEthernetFeature#direction}
  */
  readonly direction?: string;
  /**
  * Source IP address to be translated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature#source_ip ServiceLanVpnInterfaceEthernetFeature#source_ip}
  */
  readonly sourceIp?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature#source_ip_variable ServiceLanVpnInterfaceEthernetFeature#source_ip_variable}
  */
  readonly sourceIpVariable?: string;
  /**
  * Source VPN ID
  *   - Range: `0`-`65530`
  *   - Default value: `0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature#source_vpn ServiceLanVpnInterfaceEthernetFeature#source_vpn}
  */
  readonly sourceVpn?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature#source_vpn_variable ServiceLanVpnInterfaceEthernetFeature#source_vpn_variable}
  */
  readonly sourceVpnVariable?: string;
  /**
  * Statically translated source IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature#translate_ip ServiceLanVpnInterfaceEthernetFeature#translate_ip}
  */
  readonly translateIp?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature#translate_ip_variable ServiceLanVpnInterfaceEthernetFeature#translate_ip_variable}
  */
  readonly translateIpVariable?: string;
}

export function serviceLanVpnInterfaceEthernetFeatureStaticNatsToTerraform(struct?: ServiceLanVpnInterfaceEthernetFeatureStaticNats | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    direction: cdktf.stringToTerraform(struct!.direction),
    source_ip: cdktf.stringToTerraform(struct!.sourceIp),
    source_ip_variable: cdktf.stringToTerraform(struct!.sourceIpVariable),
    source_vpn: cdktf.numberToTerraform(struct!.sourceVpn),
    source_vpn_variable: cdktf.stringToTerraform(struct!.sourceVpnVariable),
    translate_ip: cdktf.stringToTerraform(struct!.translateIp),
    translate_ip_variable: cdktf.stringToTerraform(struct!.translateIpVariable),
  }
}


export function serviceLanVpnInterfaceEthernetFeatureStaticNatsToHclTerraform(struct?: ServiceLanVpnInterfaceEthernetFeatureStaticNats | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    direction: {
      value: cdktf.stringToHclTerraform(struct!.direction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_ip: {
      value: cdktf.stringToHclTerraform(struct!.sourceIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_ip_variable: {
      value: cdktf.stringToHclTerraform(struct!.sourceIpVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_vpn: {
      value: cdktf.numberToHclTerraform(struct!.sourceVpn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    source_vpn_variable: {
      value: cdktf.stringToHclTerraform(struct!.sourceVpnVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    translate_ip: {
      value: cdktf.stringToHclTerraform(struct!.translateIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    translate_ip_variable: {
      value: cdktf.stringToHclTerraform(struct!.translateIpVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceLanVpnInterfaceEthernetFeatureStaticNatsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceLanVpnInterfaceEthernetFeatureStaticNats | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._direction !== undefined) {
      hasAnyValues = true;
      internalValueResult.direction = this._direction;
    }
    if (this._sourceIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceIp = this._sourceIp;
    }
    if (this._sourceIpVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceIpVariable = this._sourceIpVariable;
    }
    if (this._sourceVpn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceVpn = this._sourceVpn;
    }
    if (this._sourceVpnVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceVpnVariable = this._sourceVpnVariable;
    }
    if (this._translateIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.translateIp = this._translateIp;
    }
    if (this._translateIpVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.translateIpVariable = this._translateIpVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceLanVpnInterfaceEthernetFeatureStaticNats | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._direction = undefined;
      this._sourceIp = undefined;
      this._sourceIpVariable = undefined;
      this._sourceVpn = undefined;
      this._sourceVpnVariable = undefined;
      this._translateIp = undefined;
      this._translateIpVariable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._direction = value.direction;
      this._sourceIp = value.sourceIp;
      this._sourceIpVariable = value.sourceIpVariable;
      this._sourceVpn = value.sourceVpn;
      this._sourceVpnVariable = value.sourceVpnVariable;
      this._translateIp = value.translateIp;
      this._translateIpVariable = value.translateIpVariable;
    }
  }

  // direction - computed: false, optional: true, required: false
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  public resetDirection() {
    this._direction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
  }

  // source_ip - computed: false, optional: true, required: false
  private _sourceIp?: string; 
  public get sourceIp() {
    return this.getStringAttribute('source_ip');
  }
  public set sourceIp(value: string) {
    this._sourceIp = value;
  }
  public resetSourceIp() {
    this._sourceIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpInput() {
    return this._sourceIp;
  }

  // source_ip_variable - computed: false, optional: true, required: false
  private _sourceIpVariable?: string; 
  public get sourceIpVariable() {
    return this.getStringAttribute('source_ip_variable');
  }
  public set sourceIpVariable(value: string) {
    this._sourceIpVariable = value;
  }
  public resetSourceIpVariable() {
    this._sourceIpVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpVariableInput() {
    return this._sourceIpVariable;
  }

  // source_vpn - computed: false, optional: true, required: false
  private _sourceVpn?: number; 
  public get sourceVpn() {
    return this.getNumberAttribute('source_vpn');
  }
  public set sourceVpn(value: number) {
    this._sourceVpn = value;
  }
  public resetSourceVpn() {
    this._sourceVpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceVpnInput() {
    return this._sourceVpn;
  }

  // source_vpn_variable - computed: false, optional: true, required: false
  private _sourceVpnVariable?: string; 
  public get sourceVpnVariable() {
    return this.getStringAttribute('source_vpn_variable');
  }
  public set sourceVpnVariable(value: string) {
    this._sourceVpnVariable = value;
  }
  public resetSourceVpnVariable() {
    this._sourceVpnVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceVpnVariableInput() {
    return this._sourceVpnVariable;
  }

  // translate_ip - computed: false, optional: true, required: false
  private _translateIp?: string; 
  public get translateIp() {
    return this.getStringAttribute('translate_ip');
  }
  public set translateIp(value: string) {
    this._translateIp = value;
  }
  public resetTranslateIp() {
    this._translateIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get translateIpInput() {
    return this._translateIp;
  }

  // translate_ip_variable - computed: false, optional: true, required: false
  private _translateIpVariable?: string; 
  public get translateIpVariable() {
    return this.getStringAttribute('translate_ip_variable');
  }
  public set translateIpVariable(value: string) {
    this._translateIpVariable = value;
  }
  public resetTranslateIpVariable() {
    this._translateIpVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get translateIpVariableInput() {
    return this._translateIpVariable;
  }
}

export class ServiceLanVpnInterfaceEthernetFeatureStaticNatsList extends cdktf.ComplexList {
  public internalValue? : ServiceLanVpnInterfaceEthernetFeatureStaticNats[] | cdktf.IResolvable

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
  public get(index: number): ServiceLanVpnInterfaceEthernetFeatureStaticNatsOutputReference {
    return new ServiceLanVpnInterfaceEthernetFeatureStaticNatsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature sdwan_service_lan_vpn_interface_ethernet_feature}
*/
export class ServiceLanVpnInterfaceEthernetFeature extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_service_lan_vpn_interface_ethernet_feature";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ServiceLanVpnInterfaceEthernetFeature resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServiceLanVpnInterfaceEthernetFeature to import
  * @param importFromId The id of the existing ServiceLanVpnInterfaceEthernetFeature that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServiceLanVpnInterfaceEthernetFeature to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_service_lan_vpn_interface_ethernet_feature", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_lan_vpn_interface_ethernet_feature sdwan_service_lan_vpn_interface_ethernet_feature} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServiceLanVpnInterfaceEthernetFeatureConfig
  */
  public constructor(scope: Construct, id: string, config: ServiceLanVpnInterfaceEthernetFeatureConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_service_lan_vpn_interface_ethernet_feature',
      terraformGeneratorMetadata: {
        providerName: 'sdwan',
        providerVersion: '0.8.1',
        providerVersionConstraint: '0.8.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._aclIpv4EgressPolicyId = config.aclIpv4EgressPolicyId;
    this._aclIpv4IngressPolicyId = config.aclIpv4IngressPolicyId;
    this._aclIpv6EgressPolicyId = config.aclIpv6EgressPolicyId;
    this._aclIpv6IngressPolicyId = config.aclIpv6IngressPolicyId;
    this._aclShapingRate = config.aclShapingRate;
    this._aclShapingRateVariable = config.aclShapingRateVariable;
    this._arpTimeout = config.arpTimeout;
    this._arpTimeoutVariable = config.arpTimeoutVariable;
    this._arps.internalValue = config.arps;
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
    this._ipv4ConfigurationType = config.ipv4ConfigurationType;
    this._ipv4DhcpDistance = config.ipv4DhcpDistance;
    this._ipv4DhcpDistanceVariable = config.ipv4DhcpDistanceVariable;
    this._ipv4DhcpHelper = config.ipv4DhcpHelper;
    this._ipv4DhcpHelperVariable = config.ipv4DhcpHelperVariable;
    this._ipv4Nat = config.ipv4Nat;
    this._ipv4NatLoopback = config.ipv4NatLoopback;
    this._ipv4NatLoopbackVariable = config.ipv4NatLoopbackVariable;
    this._ipv4NatOverload = config.ipv4NatOverload;
    this._ipv4NatOverloadVariable = config.ipv4NatOverloadVariable;
    this._ipv4NatPrefixLength = config.ipv4NatPrefixLength;
    this._ipv4NatPrefixLengthVariable = config.ipv4NatPrefixLengthVariable;
    this._ipv4NatRangeEnd = config.ipv4NatRangeEnd;
    this._ipv4NatRangeEndVariable = config.ipv4NatRangeEndVariable;
    this._ipv4NatRangeStart = config.ipv4NatRangeStart;
    this._ipv4NatRangeStartVariable = config.ipv4NatRangeStartVariable;
    this._ipv4NatTcpTimeout = config.ipv4NatTcpTimeout;
    this._ipv4NatTcpTimeoutVariable = config.ipv4NatTcpTimeoutVariable;
    this._ipv4NatUdpTimeout = config.ipv4NatUdpTimeout;
    this._ipv4NatUdpTimeoutVariable = config.ipv4NatUdpTimeoutVariable;
    this._ipv4SecondaryAddresses.internalValue = config.ipv4SecondaryAddresses;
    this._ipv4SubnetMask = config.ipv4SubnetMask;
    this._ipv4SubnetMaskVariable = config.ipv4SubnetMaskVariable;
    this._ipv4Vrrps.internalValue = config.ipv4Vrrps;
    this._ipv6Address = config.ipv6Address;
    this._ipv6AddressVariable = config.ipv6AddressVariable;
    this._ipv6ConfigurationType = config.ipv6ConfigurationType;
    this._ipv6DhcpHelpers.internalValue = config.ipv6DhcpHelpers;
    this._ipv6DhcpSecondaryAddresses.internalValue = config.ipv6DhcpSecondaryAddresses;
    this._ipv6Nat = config.ipv6Nat;
    this._ipv6SecondaryAddresses.internalValue = config.ipv6SecondaryAddresses;
    this._ipv6Vrrps.internalValue = config.ipv6Vrrps;
    this._loadInterval = config.loadInterval;
    this._loadIntervalVariable = config.loadIntervalVariable;
    this._macAddress = config.macAddress;
    this._macAddressVariable = config.macAddressVariable;
    this._mediaType = config.mediaType;
    this._mediaTypeVariable = config.mediaTypeVariable;
    this._name = config.name;
    this._nat64 = config.nat64;
    this._serviceLanVpnFeatureId = config.serviceLanVpnFeatureId;
    this._shutdown = config.shutdown;
    this._shutdownVariable = config.shutdownVariable;
    this._speed = config.speed;
    this._speedVariable = config.speedVariable;
    this._staticNats.internalValue = config.staticNats;
    this._tcpMss = config.tcpMss;
    this._tcpMssVariable = config.tcpMssVariable;
    this._tracker = config.tracker;
    this._trackerVariable = config.trackerVariable;
    this._trustsecEnableEnforcedPropogation = config.trustsecEnableEnforcedPropogation;
    this._trustsecEnableSgtPropogation = config.trustsecEnableSgtPropogation;
    this._trustsecEnforcedSecurityGroupTag = config.trustsecEnforcedSecurityGroupTag;
    this._trustsecEnforcedSecurityGroupTagVariable = config.trustsecEnforcedSecurityGroupTagVariable;
    this._trustsecPropogate = config.trustsecPropogate;
    this._trustsecSecurityGroupTag = config.trustsecSecurityGroupTag;
    this._trustsecSecurityGroupTagVariable = config.trustsecSecurityGroupTagVariable;
    this._xconnect = config.xconnect;
    this._xconnectVariable = config.xconnectVariable;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acl_ipv4_egress_policy_id - computed: false, optional: true, required: false
  private _aclIpv4EgressPolicyId?: string; 
  public get aclIpv4EgressPolicyId() {
    return this.getStringAttribute('acl_ipv4_egress_policy_id');
  }
  public set aclIpv4EgressPolicyId(value: string) {
    this._aclIpv4EgressPolicyId = value;
  }
  public resetAclIpv4EgressPolicyId() {
    this._aclIpv4EgressPolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclIpv4EgressPolicyIdInput() {
    return this._aclIpv4EgressPolicyId;
  }

  // acl_ipv4_ingress_policy_id - computed: false, optional: true, required: false
  private _aclIpv4IngressPolicyId?: string; 
  public get aclIpv4IngressPolicyId() {
    return this.getStringAttribute('acl_ipv4_ingress_policy_id');
  }
  public set aclIpv4IngressPolicyId(value: string) {
    this._aclIpv4IngressPolicyId = value;
  }
  public resetAclIpv4IngressPolicyId() {
    this._aclIpv4IngressPolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclIpv4IngressPolicyIdInput() {
    return this._aclIpv4IngressPolicyId;
  }

  // acl_ipv6_egress_policy_id - computed: false, optional: true, required: false
  private _aclIpv6EgressPolicyId?: string; 
  public get aclIpv6EgressPolicyId() {
    return this.getStringAttribute('acl_ipv6_egress_policy_id');
  }
  public set aclIpv6EgressPolicyId(value: string) {
    this._aclIpv6EgressPolicyId = value;
  }
  public resetAclIpv6EgressPolicyId() {
    this._aclIpv6EgressPolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclIpv6EgressPolicyIdInput() {
    return this._aclIpv6EgressPolicyId;
  }

  // acl_ipv6_ingress_policy_id - computed: false, optional: true, required: false
  private _aclIpv6IngressPolicyId?: string; 
  public get aclIpv6IngressPolicyId() {
    return this.getStringAttribute('acl_ipv6_ingress_policy_id');
  }
  public set aclIpv6IngressPolicyId(value: string) {
    this._aclIpv6IngressPolicyId = value;
  }
  public resetAclIpv6IngressPolicyId() {
    this._aclIpv6IngressPolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclIpv6IngressPolicyIdInput() {
    return this._aclIpv6IngressPolicyId;
  }

  // acl_shaping_rate - computed: false, optional: true, required: false
  private _aclShapingRate?: number; 
  public get aclShapingRate() {
    return this.getNumberAttribute('acl_shaping_rate');
  }
  public set aclShapingRate(value: number) {
    this._aclShapingRate = value;
  }
  public resetAclShapingRate() {
    this._aclShapingRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclShapingRateInput() {
    return this._aclShapingRate;
  }

  // acl_shaping_rate_variable - computed: false, optional: true, required: false
  private _aclShapingRateVariable?: string; 
  public get aclShapingRateVariable() {
    return this.getStringAttribute('acl_shaping_rate_variable');
  }
  public set aclShapingRateVariable(value: string) {
    this._aclShapingRateVariable = value;
  }
  public resetAclShapingRateVariable() {
    this._aclShapingRateVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclShapingRateVariableInput() {
    return this._aclShapingRateVariable;
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
  private _arps = new ServiceLanVpnInterfaceEthernetFeatureArpsList(this, "arps", false);
  public get arps() {
    return this._arps;
  }
  public putArps(value: ServiceLanVpnInterfaceEthernetFeatureArps[] | cdktf.IResolvable) {
    this._arps.internalValue = value;
  }
  public resetArps() {
    this._arps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arpsInput() {
    return this._arps.internalValue;
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

  // ipv4_nat - computed: false, optional: true, required: false
  private _ipv4Nat?: boolean | cdktf.IResolvable; 
  public get ipv4Nat() {
    return this.getBooleanAttribute('ipv4_nat');
  }
  public set ipv4Nat(value: boolean | cdktf.IResolvable) {
    this._ipv4Nat = value;
  }
  public resetIpv4Nat() {
    this._ipv4Nat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4NatInput() {
    return this._ipv4Nat;
  }

  // ipv4_nat_loopback - computed: false, optional: true, required: false
  private _ipv4NatLoopback?: string; 
  public get ipv4NatLoopback() {
    return this.getStringAttribute('ipv4_nat_loopback');
  }
  public set ipv4NatLoopback(value: string) {
    this._ipv4NatLoopback = value;
  }
  public resetIpv4NatLoopback() {
    this._ipv4NatLoopback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4NatLoopbackInput() {
    return this._ipv4NatLoopback;
  }

  // ipv4_nat_loopback_variable - computed: false, optional: true, required: false
  private _ipv4NatLoopbackVariable?: string; 
  public get ipv4NatLoopbackVariable() {
    return this.getStringAttribute('ipv4_nat_loopback_variable');
  }
  public set ipv4NatLoopbackVariable(value: string) {
    this._ipv4NatLoopbackVariable = value;
  }
  public resetIpv4NatLoopbackVariable() {
    this._ipv4NatLoopbackVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4NatLoopbackVariableInput() {
    return this._ipv4NatLoopbackVariable;
  }

  // ipv4_nat_overload - computed: false, optional: true, required: false
  private _ipv4NatOverload?: boolean | cdktf.IResolvable; 
  public get ipv4NatOverload() {
    return this.getBooleanAttribute('ipv4_nat_overload');
  }
  public set ipv4NatOverload(value: boolean | cdktf.IResolvable) {
    this._ipv4NatOverload = value;
  }
  public resetIpv4NatOverload() {
    this._ipv4NatOverload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4NatOverloadInput() {
    return this._ipv4NatOverload;
  }

  // ipv4_nat_overload_variable - computed: false, optional: true, required: false
  private _ipv4NatOverloadVariable?: string; 
  public get ipv4NatOverloadVariable() {
    return this.getStringAttribute('ipv4_nat_overload_variable');
  }
  public set ipv4NatOverloadVariable(value: string) {
    this._ipv4NatOverloadVariable = value;
  }
  public resetIpv4NatOverloadVariable() {
    this._ipv4NatOverloadVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4NatOverloadVariableInput() {
    return this._ipv4NatOverloadVariable;
  }

  // ipv4_nat_prefix_length - computed: false, optional: true, required: false
  private _ipv4NatPrefixLength?: number; 
  public get ipv4NatPrefixLength() {
    return this.getNumberAttribute('ipv4_nat_prefix_length');
  }
  public set ipv4NatPrefixLength(value: number) {
    this._ipv4NatPrefixLength = value;
  }
  public resetIpv4NatPrefixLength() {
    this._ipv4NatPrefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4NatPrefixLengthInput() {
    return this._ipv4NatPrefixLength;
  }

  // ipv4_nat_prefix_length_variable - computed: false, optional: true, required: false
  private _ipv4NatPrefixLengthVariable?: string; 
  public get ipv4NatPrefixLengthVariable() {
    return this.getStringAttribute('ipv4_nat_prefix_length_variable');
  }
  public set ipv4NatPrefixLengthVariable(value: string) {
    this._ipv4NatPrefixLengthVariable = value;
  }
  public resetIpv4NatPrefixLengthVariable() {
    this._ipv4NatPrefixLengthVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4NatPrefixLengthVariableInput() {
    return this._ipv4NatPrefixLengthVariable;
  }

  // ipv4_nat_range_end - computed: false, optional: true, required: false
  private _ipv4NatRangeEnd?: string; 
  public get ipv4NatRangeEnd() {
    return this.getStringAttribute('ipv4_nat_range_end');
  }
  public set ipv4NatRangeEnd(value: string) {
    this._ipv4NatRangeEnd = value;
  }
  public resetIpv4NatRangeEnd() {
    this._ipv4NatRangeEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4NatRangeEndInput() {
    return this._ipv4NatRangeEnd;
  }

  // ipv4_nat_range_end_variable - computed: false, optional: true, required: false
  private _ipv4NatRangeEndVariable?: string; 
  public get ipv4NatRangeEndVariable() {
    return this.getStringAttribute('ipv4_nat_range_end_variable');
  }
  public set ipv4NatRangeEndVariable(value: string) {
    this._ipv4NatRangeEndVariable = value;
  }
  public resetIpv4NatRangeEndVariable() {
    this._ipv4NatRangeEndVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4NatRangeEndVariableInput() {
    return this._ipv4NatRangeEndVariable;
  }

  // ipv4_nat_range_start - computed: false, optional: true, required: false
  private _ipv4NatRangeStart?: string; 
  public get ipv4NatRangeStart() {
    return this.getStringAttribute('ipv4_nat_range_start');
  }
  public set ipv4NatRangeStart(value: string) {
    this._ipv4NatRangeStart = value;
  }
  public resetIpv4NatRangeStart() {
    this._ipv4NatRangeStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4NatRangeStartInput() {
    return this._ipv4NatRangeStart;
  }

  // ipv4_nat_range_start_variable - computed: false, optional: true, required: false
  private _ipv4NatRangeStartVariable?: string; 
  public get ipv4NatRangeStartVariable() {
    return this.getStringAttribute('ipv4_nat_range_start_variable');
  }
  public set ipv4NatRangeStartVariable(value: string) {
    this._ipv4NatRangeStartVariable = value;
  }
  public resetIpv4NatRangeStartVariable() {
    this._ipv4NatRangeStartVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4NatRangeStartVariableInput() {
    return this._ipv4NatRangeStartVariable;
  }

  // ipv4_nat_tcp_timeout - computed: false, optional: true, required: false
  private _ipv4NatTcpTimeout?: number; 
  public get ipv4NatTcpTimeout() {
    return this.getNumberAttribute('ipv4_nat_tcp_timeout');
  }
  public set ipv4NatTcpTimeout(value: number) {
    this._ipv4NatTcpTimeout = value;
  }
  public resetIpv4NatTcpTimeout() {
    this._ipv4NatTcpTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4NatTcpTimeoutInput() {
    return this._ipv4NatTcpTimeout;
  }

  // ipv4_nat_tcp_timeout_variable - computed: false, optional: true, required: false
  private _ipv4NatTcpTimeoutVariable?: string; 
  public get ipv4NatTcpTimeoutVariable() {
    return this.getStringAttribute('ipv4_nat_tcp_timeout_variable');
  }
  public set ipv4NatTcpTimeoutVariable(value: string) {
    this._ipv4NatTcpTimeoutVariable = value;
  }
  public resetIpv4NatTcpTimeoutVariable() {
    this._ipv4NatTcpTimeoutVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4NatTcpTimeoutVariableInput() {
    return this._ipv4NatTcpTimeoutVariable;
  }

  // ipv4_nat_udp_timeout - computed: false, optional: true, required: false
  private _ipv4NatUdpTimeout?: number; 
  public get ipv4NatUdpTimeout() {
    return this.getNumberAttribute('ipv4_nat_udp_timeout');
  }
  public set ipv4NatUdpTimeout(value: number) {
    this._ipv4NatUdpTimeout = value;
  }
  public resetIpv4NatUdpTimeout() {
    this._ipv4NatUdpTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4NatUdpTimeoutInput() {
    return this._ipv4NatUdpTimeout;
  }

  // ipv4_nat_udp_timeout_variable - computed: false, optional: true, required: false
  private _ipv4NatUdpTimeoutVariable?: string; 
  public get ipv4NatUdpTimeoutVariable() {
    return this.getStringAttribute('ipv4_nat_udp_timeout_variable');
  }
  public set ipv4NatUdpTimeoutVariable(value: string) {
    this._ipv4NatUdpTimeoutVariable = value;
  }
  public resetIpv4NatUdpTimeoutVariable() {
    this._ipv4NatUdpTimeoutVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4NatUdpTimeoutVariableInput() {
    return this._ipv4NatUdpTimeoutVariable;
  }

  // ipv4_secondary_addresses - computed: false, optional: true, required: false
  private _ipv4SecondaryAddresses = new ServiceLanVpnInterfaceEthernetFeatureIpv4SecondaryAddressesList(this, "ipv4_secondary_addresses", false);
  public get ipv4SecondaryAddresses() {
    return this._ipv4SecondaryAddresses;
  }
  public putIpv4SecondaryAddresses(value: ServiceLanVpnInterfaceEthernetFeatureIpv4SecondaryAddresses[] | cdktf.IResolvable) {
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
  private _ipv4Vrrps = new ServiceLanVpnInterfaceEthernetFeatureIpv4VrrpsList(this, "ipv4_vrrps", false);
  public get ipv4Vrrps() {
    return this._ipv4Vrrps;
  }
  public putIpv4Vrrps(value: ServiceLanVpnInterfaceEthernetFeatureIpv4Vrrps[] | cdktf.IResolvable) {
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

  // ipv6_dhcp_helpers - computed: false, optional: true, required: false
  private _ipv6DhcpHelpers = new ServiceLanVpnInterfaceEthernetFeatureIpv6DhcpHelpersList(this, "ipv6_dhcp_helpers", false);
  public get ipv6DhcpHelpers() {
    return this._ipv6DhcpHelpers;
  }
  public putIpv6DhcpHelpers(value: ServiceLanVpnInterfaceEthernetFeatureIpv6DhcpHelpers[] | cdktf.IResolvable) {
    this._ipv6DhcpHelpers.internalValue = value;
  }
  public resetIpv6DhcpHelpers() {
    this._ipv6DhcpHelpers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6DhcpHelpersInput() {
    return this._ipv6DhcpHelpers.internalValue;
  }

  // ipv6_dhcp_secondary_addresses - computed: false, optional: true, required: false
  private _ipv6DhcpSecondaryAddresses = new ServiceLanVpnInterfaceEthernetFeatureIpv6DhcpSecondaryAddressesList(this, "ipv6_dhcp_secondary_addresses", false);
  public get ipv6DhcpSecondaryAddresses() {
    return this._ipv6DhcpSecondaryAddresses;
  }
  public putIpv6DhcpSecondaryAddresses(value: ServiceLanVpnInterfaceEthernetFeatureIpv6DhcpSecondaryAddresses[] | cdktf.IResolvable) {
    this._ipv6DhcpSecondaryAddresses.internalValue = value;
  }
  public resetIpv6DhcpSecondaryAddresses() {
    this._ipv6DhcpSecondaryAddresses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6DhcpSecondaryAddressesInput() {
    return this._ipv6DhcpSecondaryAddresses.internalValue;
  }

  // ipv6_nat - computed: false, optional: true, required: false
  private _ipv6Nat?: boolean | cdktf.IResolvable; 
  public get ipv6Nat() {
    return this.getBooleanAttribute('ipv6_nat');
  }
  public set ipv6Nat(value: boolean | cdktf.IResolvable) {
    this._ipv6Nat = value;
  }
  public resetIpv6Nat() {
    this._ipv6Nat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6NatInput() {
    return this._ipv6Nat;
  }

  // ipv6_secondary_addresses - computed: false, optional: true, required: false
  private _ipv6SecondaryAddresses = new ServiceLanVpnInterfaceEthernetFeatureIpv6SecondaryAddressesList(this, "ipv6_secondary_addresses", false);
  public get ipv6SecondaryAddresses() {
    return this._ipv6SecondaryAddresses;
  }
  public putIpv6SecondaryAddresses(value: ServiceLanVpnInterfaceEthernetFeatureIpv6SecondaryAddresses[] | cdktf.IResolvable) {
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
  private _ipv6Vrrps = new ServiceLanVpnInterfaceEthernetFeatureIpv6VrrpsList(this, "ipv6_vrrps", false);
  public get ipv6Vrrps() {
    return this._ipv6Vrrps;
  }
  public putIpv6Vrrps(value: ServiceLanVpnInterfaceEthernetFeatureIpv6Vrrps[] | cdktf.IResolvable) {
    this._ipv6Vrrps.internalValue = value;
  }
  public resetIpv6Vrrps() {
    this._ipv6Vrrps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6VrrpsInput() {
    return this._ipv6Vrrps.internalValue;
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

  // nat64 - computed: false, optional: true, required: false
  private _nat64?: boolean | cdktf.IResolvable; 
  public get nat64() {
    return this.getBooleanAttribute('nat64');
  }
  public set nat64(value: boolean | cdktf.IResolvable) {
    this._nat64 = value;
  }
  public resetNat64() {
    this._nat64 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nat64Input() {
    return this._nat64;
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

  // static_nats - computed: false, optional: true, required: false
  private _staticNats = new ServiceLanVpnInterfaceEthernetFeatureStaticNatsList(this, "static_nats", false);
  public get staticNats() {
    return this._staticNats;
  }
  public putStaticNats(value: ServiceLanVpnInterfaceEthernetFeatureStaticNats[] | cdktf.IResolvable) {
    this._staticNats.internalValue = value;
  }
  public resetStaticNats() {
    this._staticNats.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticNatsInput() {
    return this._staticNats.internalValue;
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

  // tracker - computed: false, optional: true, required: false
  private _tracker?: string; 
  public get tracker() {
    return this.getStringAttribute('tracker');
  }
  public set tracker(value: string) {
    this._tracker = value;
  }
  public resetTracker() {
    this._tracker = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackerInput() {
    return this._tracker;
  }

  // tracker_variable - computed: false, optional: true, required: false
  private _trackerVariable?: string; 
  public get trackerVariable() {
    return this.getStringAttribute('tracker_variable');
  }
  public set trackerVariable(value: string) {
    this._trackerVariable = value;
  }
  public resetTrackerVariable() {
    this._trackerVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackerVariableInput() {
    return this._trackerVariable;
  }

  // trustsec_enable_enforced_propogation - computed: false, optional: true, required: false
  private _trustsecEnableEnforcedPropogation?: boolean | cdktf.IResolvable; 
  public get trustsecEnableEnforcedPropogation() {
    return this.getBooleanAttribute('trustsec_enable_enforced_propogation');
  }
  public set trustsecEnableEnforcedPropogation(value: boolean | cdktf.IResolvable) {
    this._trustsecEnableEnforcedPropogation = value;
  }
  public resetTrustsecEnableEnforcedPropogation() {
    this._trustsecEnableEnforcedPropogation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustsecEnableEnforcedPropogationInput() {
    return this._trustsecEnableEnforcedPropogation;
  }

  // trustsec_enable_sgt_propogation - computed: false, optional: true, required: false
  private _trustsecEnableSgtPropogation?: boolean | cdktf.IResolvable; 
  public get trustsecEnableSgtPropogation() {
    return this.getBooleanAttribute('trustsec_enable_sgt_propogation');
  }
  public set trustsecEnableSgtPropogation(value: boolean | cdktf.IResolvable) {
    this._trustsecEnableSgtPropogation = value;
  }
  public resetTrustsecEnableSgtPropogation() {
    this._trustsecEnableSgtPropogation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustsecEnableSgtPropogationInput() {
    return this._trustsecEnableSgtPropogation;
  }

  // trustsec_enforced_security_group_tag - computed: false, optional: true, required: false
  private _trustsecEnforcedSecurityGroupTag?: number; 
  public get trustsecEnforcedSecurityGroupTag() {
    return this.getNumberAttribute('trustsec_enforced_security_group_tag');
  }
  public set trustsecEnforcedSecurityGroupTag(value: number) {
    this._trustsecEnforcedSecurityGroupTag = value;
  }
  public resetTrustsecEnforcedSecurityGroupTag() {
    this._trustsecEnforcedSecurityGroupTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustsecEnforcedSecurityGroupTagInput() {
    return this._trustsecEnforcedSecurityGroupTag;
  }

  // trustsec_enforced_security_group_tag_variable - computed: false, optional: true, required: false
  private _trustsecEnforcedSecurityGroupTagVariable?: string; 
  public get trustsecEnforcedSecurityGroupTagVariable() {
    return this.getStringAttribute('trustsec_enforced_security_group_tag_variable');
  }
  public set trustsecEnforcedSecurityGroupTagVariable(value: string) {
    this._trustsecEnforcedSecurityGroupTagVariable = value;
  }
  public resetTrustsecEnforcedSecurityGroupTagVariable() {
    this._trustsecEnforcedSecurityGroupTagVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustsecEnforcedSecurityGroupTagVariableInput() {
    return this._trustsecEnforcedSecurityGroupTagVariable;
  }

  // trustsec_propogate - computed: false, optional: true, required: false
  private _trustsecPropogate?: boolean | cdktf.IResolvable; 
  public get trustsecPropogate() {
    return this.getBooleanAttribute('trustsec_propogate');
  }
  public set trustsecPropogate(value: boolean | cdktf.IResolvable) {
    this._trustsecPropogate = value;
  }
  public resetTrustsecPropogate() {
    this._trustsecPropogate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustsecPropogateInput() {
    return this._trustsecPropogate;
  }

  // trustsec_security_group_tag - computed: false, optional: true, required: false
  private _trustsecSecurityGroupTag?: number; 
  public get trustsecSecurityGroupTag() {
    return this.getNumberAttribute('trustsec_security_group_tag');
  }
  public set trustsecSecurityGroupTag(value: number) {
    this._trustsecSecurityGroupTag = value;
  }
  public resetTrustsecSecurityGroupTag() {
    this._trustsecSecurityGroupTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustsecSecurityGroupTagInput() {
    return this._trustsecSecurityGroupTag;
  }

  // trustsec_security_group_tag_variable - computed: false, optional: true, required: false
  private _trustsecSecurityGroupTagVariable?: string; 
  public get trustsecSecurityGroupTagVariable() {
    return this.getStringAttribute('trustsec_security_group_tag_variable');
  }
  public set trustsecSecurityGroupTagVariable(value: string) {
    this._trustsecSecurityGroupTagVariable = value;
  }
  public resetTrustsecSecurityGroupTagVariable() {
    this._trustsecSecurityGroupTagVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustsecSecurityGroupTagVariableInput() {
    return this._trustsecSecurityGroupTagVariable;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // xconnect - computed: false, optional: true, required: false
  private _xconnect?: string; 
  public get xconnect() {
    return this.getStringAttribute('xconnect');
  }
  public set xconnect(value: string) {
    this._xconnect = value;
  }
  public resetXconnect() {
    this._xconnect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xconnectInput() {
    return this._xconnect;
  }

  // xconnect_variable - computed: false, optional: true, required: false
  private _xconnectVariable?: string; 
  public get xconnectVariable() {
    return this.getStringAttribute('xconnect_variable');
  }
  public set xconnectVariable(value: string) {
    this._xconnectVariable = value;
  }
  public resetXconnectVariable() {
    this._xconnectVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xconnectVariableInput() {
    return this._xconnectVariable;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      acl_ipv4_egress_policy_id: cdktf.stringToTerraform(this._aclIpv4EgressPolicyId),
      acl_ipv4_ingress_policy_id: cdktf.stringToTerraform(this._aclIpv4IngressPolicyId),
      acl_ipv6_egress_policy_id: cdktf.stringToTerraform(this._aclIpv6EgressPolicyId),
      acl_ipv6_ingress_policy_id: cdktf.stringToTerraform(this._aclIpv6IngressPolicyId),
      acl_shaping_rate: cdktf.numberToTerraform(this._aclShapingRate),
      acl_shaping_rate_variable: cdktf.stringToTerraform(this._aclShapingRateVariable),
      arp_timeout: cdktf.numberToTerraform(this._arpTimeout),
      arp_timeout_variable: cdktf.stringToTerraform(this._arpTimeoutVariable),
      arps: cdktf.listMapper(serviceLanVpnInterfaceEthernetFeatureArpsToTerraform, false)(this._arps.internalValue),
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
      ipv4_configuration_type: cdktf.stringToTerraform(this._ipv4ConfigurationType),
      ipv4_dhcp_distance: cdktf.numberToTerraform(this._ipv4DhcpDistance),
      ipv4_dhcp_distance_variable: cdktf.stringToTerraform(this._ipv4DhcpDistanceVariable),
      ipv4_dhcp_helper: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipv4DhcpHelper),
      ipv4_dhcp_helper_variable: cdktf.stringToTerraform(this._ipv4DhcpHelperVariable),
      ipv4_nat: cdktf.booleanToTerraform(this._ipv4Nat),
      ipv4_nat_loopback: cdktf.stringToTerraform(this._ipv4NatLoopback),
      ipv4_nat_loopback_variable: cdktf.stringToTerraform(this._ipv4NatLoopbackVariable),
      ipv4_nat_overload: cdktf.booleanToTerraform(this._ipv4NatOverload),
      ipv4_nat_overload_variable: cdktf.stringToTerraform(this._ipv4NatOverloadVariable),
      ipv4_nat_prefix_length: cdktf.numberToTerraform(this._ipv4NatPrefixLength),
      ipv4_nat_prefix_length_variable: cdktf.stringToTerraform(this._ipv4NatPrefixLengthVariable),
      ipv4_nat_range_end: cdktf.stringToTerraform(this._ipv4NatRangeEnd),
      ipv4_nat_range_end_variable: cdktf.stringToTerraform(this._ipv4NatRangeEndVariable),
      ipv4_nat_range_start: cdktf.stringToTerraform(this._ipv4NatRangeStart),
      ipv4_nat_range_start_variable: cdktf.stringToTerraform(this._ipv4NatRangeStartVariable),
      ipv4_nat_tcp_timeout: cdktf.numberToTerraform(this._ipv4NatTcpTimeout),
      ipv4_nat_tcp_timeout_variable: cdktf.stringToTerraform(this._ipv4NatTcpTimeoutVariable),
      ipv4_nat_udp_timeout: cdktf.numberToTerraform(this._ipv4NatUdpTimeout),
      ipv4_nat_udp_timeout_variable: cdktf.stringToTerraform(this._ipv4NatUdpTimeoutVariable),
      ipv4_secondary_addresses: cdktf.listMapper(serviceLanVpnInterfaceEthernetFeatureIpv4SecondaryAddressesToTerraform, false)(this._ipv4SecondaryAddresses.internalValue),
      ipv4_subnet_mask: cdktf.stringToTerraform(this._ipv4SubnetMask),
      ipv4_subnet_mask_variable: cdktf.stringToTerraform(this._ipv4SubnetMaskVariable),
      ipv4_vrrps: cdktf.listMapper(serviceLanVpnInterfaceEthernetFeatureIpv4VrrpsToTerraform, false)(this._ipv4Vrrps.internalValue),
      ipv6_address: cdktf.stringToTerraform(this._ipv6Address),
      ipv6_address_variable: cdktf.stringToTerraform(this._ipv6AddressVariable),
      ipv6_configuration_type: cdktf.stringToTerraform(this._ipv6ConfigurationType),
      ipv6_dhcp_helpers: cdktf.listMapper(serviceLanVpnInterfaceEthernetFeatureIpv6DhcpHelpersToTerraform, false)(this._ipv6DhcpHelpers.internalValue),
      ipv6_dhcp_secondary_addresses: cdktf.listMapper(serviceLanVpnInterfaceEthernetFeatureIpv6DhcpSecondaryAddressesToTerraform, false)(this._ipv6DhcpSecondaryAddresses.internalValue),
      ipv6_nat: cdktf.booleanToTerraform(this._ipv6Nat),
      ipv6_secondary_addresses: cdktf.listMapper(serviceLanVpnInterfaceEthernetFeatureIpv6SecondaryAddressesToTerraform, false)(this._ipv6SecondaryAddresses.internalValue),
      ipv6_vrrps: cdktf.listMapper(serviceLanVpnInterfaceEthernetFeatureIpv6VrrpsToTerraform, false)(this._ipv6Vrrps.internalValue),
      load_interval: cdktf.numberToTerraform(this._loadInterval),
      load_interval_variable: cdktf.stringToTerraform(this._loadIntervalVariable),
      mac_address: cdktf.stringToTerraform(this._macAddress),
      mac_address_variable: cdktf.stringToTerraform(this._macAddressVariable),
      media_type: cdktf.stringToTerraform(this._mediaType),
      media_type_variable: cdktf.stringToTerraform(this._mediaTypeVariable),
      name: cdktf.stringToTerraform(this._name),
      nat64: cdktf.booleanToTerraform(this._nat64),
      service_lan_vpn_feature_id: cdktf.stringToTerraform(this._serviceLanVpnFeatureId),
      shutdown: cdktf.booleanToTerraform(this._shutdown),
      shutdown_variable: cdktf.stringToTerraform(this._shutdownVariable),
      speed: cdktf.stringToTerraform(this._speed),
      speed_variable: cdktf.stringToTerraform(this._speedVariable),
      static_nats: cdktf.listMapper(serviceLanVpnInterfaceEthernetFeatureStaticNatsToTerraform, false)(this._staticNats.internalValue),
      tcp_mss: cdktf.numberToTerraform(this._tcpMss),
      tcp_mss_variable: cdktf.stringToTerraform(this._tcpMssVariable),
      tracker: cdktf.stringToTerraform(this._tracker),
      tracker_variable: cdktf.stringToTerraform(this._trackerVariable),
      trustsec_enable_enforced_propogation: cdktf.booleanToTerraform(this._trustsecEnableEnforcedPropogation),
      trustsec_enable_sgt_propogation: cdktf.booleanToTerraform(this._trustsecEnableSgtPropogation),
      trustsec_enforced_security_group_tag: cdktf.numberToTerraform(this._trustsecEnforcedSecurityGroupTag),
      trustsec_enforced_security_group_tag_variable: cdktf.stringToTerraform(this._trustsecEnforcedSecurityGroupTagVariable),
      trustsec_propogate: cdktf.booleanToTerraform(this._trustsecPropogate),
      trustsec_security_group_tag: cdktf.numberToTerraform(this._trustsecSecurityGroupTag),
      trustsec_security_group_tag_variable: cdktf.stringToTerraform(this._trustsecSecurityGroupTagVariable),
      xconnect: cdktf.stringToTerraform(this._xconnect),
      xconnect_variable: cdktf.stringToTerraform(this._xconnectVariable),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      acl_ipv4_egress_policy_id: {
        value: cdktf.stringToHclTerraform(this._aclIpv4EgressPolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      acl_ipv4_ingress_policy_id: {
        value: cdktf.stringToHclTerraform(this._aclIpv4IngressPolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      acl_ipv6_egress_policy_id: {
        value: cdktf.stringToHclTerraform(this._aclIpv6EgressPolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      acl_ipv6_ingress_policy_id: {
        value: cdktf.stringToHclTerraform(this._aclIpv6IngressPolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      acl_shaping_rate: {
        value: cdktf.numberToHclTerraform(this._aclShapingRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      acl_shaping_rate_variable: {
        value: cdktf.stringToHclTerraform(this._aclShapingRateVariable),
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
        value: cdktf.listMapperHcl(serviceLanVpnInterfaceEthernetFeatureArpsToHclTerraform, false)(this._arps.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceLanVpnInterfaceEthernetFeatureArpsList",
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
      ipv4_nat: {
        value: cdktf.booleanToHclTerraform(this._ipv4Nat),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ipv4_nat_loopback: {
        value: cdktf.stringToHclTerraform(this._ipv4NatLoopback),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_nat_loopback_variable: {
        value: cdktf.stringToHclTerraform(this._ipv4NatLoopbackVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_nat_overload: {
        value: cdktf.booleanToHclTerraform(this._ipv4NatOverload),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ipv4_nat_overload_variable: {
        value: cdktf.stringToHclTerraform(this._ipv4NatOverloadVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_nat_prefix_length: {
        value: cdktf.numberToHclTerraform(this._ipv4NatPrefixLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ipv4_nat_prefix_length_variable: {
        value: cdktf.stringToHclTerraform(this._ipv4NatPrefixLengthVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_nat_range_end: {
        value: cdktf.stringToHclTerraform(this._ipv4NatRangeEnd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_nat_range_end_variable: {
        value: cdktf.stringToHclTerraform(this._ipv4NatRangeEndVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_nat_range_start: {
        value: cdktf.stringToHclTerraform(this._ipv4NatRangeStart),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_nat_range_start_variable: {
        value: cdktf.stringToHclTerraform(this._ipv4NatRangeStartVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_nat_tcp_timeout: {
        value: cdktf.numberToHclTerraform(this._ipv4NatTcpTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ipv4_nat_tcp_timeout_variable: {
        value: cdktf.stringToHclTerraform(this._ipv4NatTcpTimeoutVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_nat_udp_timeout: {
        value: cdktf.numberToHclTerraform(this._ipv4NatUdpTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ipv4_nat_udp_timeout_variable: {
        value: cdktf.stringToHclTerraform(this._ipv4NatUdpTimeoutVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_secondary_addresses: {
        value: cdktf.listMapperHcl(serviceLanVpnInterfaceEthernetFeatureIpv4SecondaryAddressesToHclTerraform, false)(this._ipv4SecondaryAddresses.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceLanVpnInterfaceEthernetFeatureIpv4SecondaryAddressesList",
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
        value: cdktf.listMapperHcl(serviceLanVpnInterfaceEthernetFeatureIpv4VrrpsToHclTerraform, false)(this._ipv4Vrrps.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceLanVpnInterfaceEthernetFeatureIpv4VrrpsList",
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
      ipv6_dhcp_helpers: {
        value: cdktf.listMapperHcl(serviceLanVpnInterfaceEthernetFeatureIpv6DhcpHelpersToHclTerraform, false)(this._ipv6DhcpHelpers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceLanVpnInterfaceEthernetFeatureIpv6DhcpHelpersList",
      },
      ipv6_dhcp_secondary_addresses: {
        value: cdktf.listMapperHcl(serviceLanVpnInterfaceEthernetFeatureIpv6DhcpSecondaryAddressesToHclTerraform, false)(this._ipv6DhcpSecondaryAddresses.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceLanVpnInterfaceEthernetFeatureIpv6DhcpSecondaryAddressesList",
      },
      ipv6_nat: {
        value: cdktf.booleanToHclTerraform(this._ipv6Nat),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ipv6_secondary_addresses: {
        value: cdktf.listMapperHcl(serviceLanVpnInterfaceEthernetFeatureIpv6SecondaryAddressesToHclTerraform, false)(this._ipv6SecondaryAddresses.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceLanVpnInterfaceEthernetFeatureIpv6SecondaryAddressesList",
      },
      ipv6_vrrps: {
        value: cdktf.listMapperHcl(serviceLanVpnInterfaceEthernetFeatureIpv6VrrpsToHclTerraform, false)(this._ipv6Vrrps.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceLanVpnInterfaceEthernetFeatureIpv6VrrpsList",
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
      nat64: {
        value: cdktf.booleanToHclTerraform(this._nat64),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      static_nats: {
        value: cdktf.listMapperHcl(serviceLanVpnInterfaceEthernetFeatureStaticNatsToHclTerraform, false)(this._staticNats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceLanVpnInterfaceEthernetFeatureStaticNatsList",
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
      tracker: {
        value: cdktf.stringToHclTerraform(this._tracker),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tracker_variable: {
        value: cdktf.stringToHclTerraform(this._trackerVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trustsec_enable_enforced_propogation: {
        value: cdktf.booleanToHclTerraform(this._trustsecEnableEnforcedPropogation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      trustsec_enable_sgt_propogation: {
        value: cdktf.booleanToHclTerraform(this._trustsecEnableSgtPropogation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      trustsec_enforced_security_group_tag: {
        value: cdktf.numberToHclTerraform(this._trustsecEnforcedSecurityGroupTag),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      trustsec_enforced_security_group_tag_variable: {
        value: cdktf.stringToHclTerraform(this._trustsecEnforcedSecurityGroupTagVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trustsec_propogate: {
        value: cdktf.booleanToHclTerraform(this._trustsecPropogate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      trustsec_security_group_tag: {
        value: cdktf.numberToHclTerraform(this._trustsecSecurityGroupTag),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      trustsec_security_group_tag_variable: {
        value: cdktf.stringToHclTerraform(this._trustsecSecurityGroupTagVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      xconnect: {
        value: cdktf.stringToHclTerraform(this._xconnect),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      xconnect_variable: {
        value: cdktf.stringToHclTerraform(this._xconnectVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
