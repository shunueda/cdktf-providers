// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TransportWanVpnInterfaceEthernetFeatureConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#acl_ipv4_egress_feature_id TransportWanVpnInterfaceEthernetFeature#acl_ipv4_egress_feature_id}
  */
  readonly aclIpv4EgressFeatureId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#acl_ipv4_ingress_feature_id TransportWanVpnInterfaceEthernetFeature#acl_ipv4_ingress_feature_id}
  */
  readonly aclIpv4IngressFeatureId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#acl_ipv6_egress_feature_id TransportWanVpnInterfaceEthernetFeature#acl_ipv6_egress_feature_id}
  */
  readonly aclIpv6EgressFeatureId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#acl_ipv6_ingress_feature_id TransportWanVpnInterfaceEthernetFeature#acl_ipv6_ingress_feature_id}
  */
  readonly aclIpv6IngressFeatureId?: string;
  /**
  * Timeout value for dynamically learned ARP entries, <0..2678400> seconds
  *   - Range: `0`-`2147483`
  *   - Default value: `1200`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#arp_timeout TransportWanVpnInterfaceEthernetFeature#arp_timeout}
  */
  readonly arpTimeout?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#arp_timeout_variable TransportWanVpnInterfaceEthernetFeature#arp_timeout_variable}
  */
  readonly arpTimeoutVariable?: string;
  /**
  * Configure ARP entries
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#arps TransportWanVpnInterfaceEthernetFeature#arps}
  */
  readonly arps?: TransportWanVpnInterfaceEthernetFeatureArps[] | cdktf.IResolvable;
  /**
  * Interface auto detect bandwidth
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#auto_detect_bandwidth TransportWanVpnInterfaceEthernetFeature#auto_detect_bandwidth}
  */
  readonly autoDetectBandwidth?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#auto_detect_bandwidth_variable TransportWanVpnInterfaceEthernetFeature#auto_detect_bandwidth_variable}
  */
  readonly autoDetectBandwidthVariable?: string;
  /**
  * Link autonegotiation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#autonegotiate TransportWanVpnInterfaceEthernetFeature#autonegotiate}
  */
  readonly autonegotiate?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#autonegotiate_variable TransportWanVpnInterfaceEthernetFeature#autonegotiate_variable}
  */
  readonly autonegotiateVariable?: string;
  /**
  * Interface downstream bandwidth capacity, in kbps
  *   - Range: `1`-`2147483647`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#bandwidth_downstream TransportWanVpnInterfaceEthernetFeature#bandwidth_downstream}
  */
  readonly bandwidthDownstream?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#bandwidth_downstream_variable TransportWanVpnInterfaceEthernetFeature#bandwidth_downstream_variable}
  */
  readonly bandwidthDownstreamVariable?: string;
  /**
  * Interface upstream bandwidth capacity, in kbps
  *   - Range: `1`-`2147483647`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#bandwidth_upstream TransportWanVpnInterfaceEthernetFeature#bandwidth_upstream}
  */
  readonly bandwidthUpstream?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#bandwidth_upstream_variable TransportWanVpnInterfaceEthernetFeature#bandwidth_upstream_variable}
  */
  readonly bandwidthUpstreamVariable?: string;
  /**
  * Block packets originating from IP address that is not from this source
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#block_non_source_ip TransportWanVpnInterfaceEthernetFeature#block_non_source_ip}
  */
  readonly blockNonSourceIp?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#block_non_source_ip_variable TransportWanVpnInterfaceEthernetFeature#block_non_source_ip_variable}
  */
  readonly blockNonSourceIpVariable?: string;
  /**
  * The description of the Feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#description TransportWanVpnInterfaceEthernetFeature#description}
  */
  readonly description?: string;
  /**
  * Duplex mode
  *   - Choices: `full`, `half`, `auto`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#duplex TransportWanVpnInterfaceEthernetFeature#duplex}
  */
  readonly duplex?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#duplex_variable TransportWanVpnInterfaceEthernetFeature#duplex_variable}
  */
  readonly duplexVariable?: string;
  /**
  * Enable DHCPv6, Attribute conditional on `ipv6_configuration_type` being equal to `dynamic`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#enable_dhcpv6 TransportWanVpnInterfaceEthernetFeature#enable_dhcpv6}
  */
  readonly enableDhcpv6?: boolean | cdktf.IResolvable;
  /**
  * Feature Profile ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#feature_profile_id TransportWanVpnInterfaceEthernetFeature#feature_profile_id}
  */
  readonly featureProfileId: string;
  /**
  * GRE tunnel source IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#gre_tunnel_source_ip TransportWanVpnInterfaceEthernetFeature#gre_tunnel_source_ip}
  */
  readonly greTunnelSourceIp?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#gre_tunnel_source_ip_variable TransportWanVpnInterfaceEthernetFeature#gre_tunnel_source_ip_variable}
  */
  readonly greTunnelSourceIpVariable?: string;
  /**
  * ICMP/ICMPv6 Redirect Disable
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#icmp_redirect_disable TransportWanVpnInterfaceEthernetFeature#icmp_redirect_disable}
  */
  readonly icmpRedirectDisable?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#icmp_redirect_disable_variable TransportWanVpnInterfaceEthernetFeature#icmp_redirect_disable_variable}
  */
  readonly icmpRedirectDisableVariable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#interface_description TransportWanVpnInterfaceEthernetFeature#interface_description}
  */
  readonly interfaceDescription?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#interface_description_variable TransportWanVpnInterfaceEthernetFeature#interface_description_variable}
  */
  readonly interfaceDescriptionVariable?: string;
  /**
  * Interface MTU GigabitEthernet0 <1500..1518>, Other GigabitEthernet <1500..9216> in bytes
  *   - Range: `1500`-`9216`
  *   - Default value: `1500`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#interface_mtu TransportWanVpnInterfaceEthernetFeature#interface_mtu}
  */
  readonly interfaceMtu?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#interface_mtu_variable TransportWanVpnInterfaceEthernetFeature#interface_mtu_variable}
  */
  readonly interfaceMtuVariable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#interface_name TransportWanVpnInterfaceEthernetFeature#interface_name}
  */
  readonly interfaceName?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#interface_name_variable TransportWanVpnInterfaceEthernetFeature#interface_name_variable}
  */
  readonly interfaceNameVariable?: string;
  /**
  * IP Directed-Broadcast
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#ip_directed_broadcast TransportWanVpnInterfaceEthernetFeature#ip_directed_broadcast}
  */
  readonly ipDirectedBroadcast?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#ip_directed_broadcast_variable TransportWanVpnInterfaceEthernetFeature#ip_directed_broadcast_variable}
  */
  readonly ipDirectedBroadcastVariable?: string;
  /**
  * IP MTU for GigabitEthernet main <576..Interface MTU>, GigabitEthernet subinterface <576..9216>, Other Interfaces <576..2000> in bytes
  *   - Range: `576`-`9216`
  *   - Default value: `1500`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#ip_mtu TransportWanVpnInterfaceEthernetFeature#ip_mtu}
  */
  readonly ipMtu?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#ip_mtu_variable TransportWanVpnInterfaceEthernetFeature#ip_mtu_variable}
  */
  readonly ipMtuVariable?: string;
  /**
  * Iperf server for auto bandwidth detect
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#iperf_server TransportWanVpnInterfaceEthernetFeature#iperf_server}
  */
  readonly iperfServer?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#iperf_server_variable TransportWanVpnInterfaceEthernetFeature#iperf_server_variable}
  */
  readonly iperfServerVariable?: string;
  /**
  * IP Address, Attribute conditional on `ipv4_configuration_type` being equal to `static`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#ipv4_address TransportWanVpnInterfaceEthernetFeature#ipv4_address}
  */
  readonly ipv4Address?: string;
  /**
  * Variable name, Attribute conditional on `ipv4_configuration_type` being equal to `static`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#ipv4_address_variable TransportWanVpnInterfaceEthernetFeature#ipv4_address_variable}
  */
  readonly ipv4AddressVariable?: string;
  /**
  * IPv4 Configuration Type
  *   - Choices: `dynamic`, `static`
  *   - Default value: `dynamic`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#ipv4_configuration_type TransportWanVpnInterfaceEthernetFeature#ipv4_configuration_type}
  */
  readonly ipv4ConfigurationType?: string;
  /**
  * DHCP Distance, Attribute conditional on `ipv4_configuration_type` being equal to `dynamic`
  *   - Range: `1`-`65536`
  *   - Default value: `1`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#ipv4_dhcp_distance TransportWanVpnInterfaceEthernetFeature#ipv4_dhcp_distance}
  */
  readonly ipv4DhcpDistance?: number;
  /**
  * Variable name, Attribute conditional on `ipv4_configuration_type` being equal to `dynamic`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#ipv4_dhcp_distance_variable TransportWanVpnInterfaceEthernetFeature#ipv4_dhcp_distance_variable}
  */
  readonly ipv4DhcpDistanceVariable?: string;
  /**
  * List of DHCP IPv4 helper addresses (min 1, max 8)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#ipv4_dhcp_helper TransportWanVpnInterfaceEthernetFeature#ipv4_dhcp_helper}
  */
  readonly ipv4DhcpHelper?: string[];
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#ipv4_dhcp_helper_variable TransportWanVpnInterfaceEthernetFeature#ipv4_dhcp_helper_variable}
  */
  readonly ipv4DhcpHelperVariable?: string;
  /**
  * Secondary IpV4 Addresses, Attribute conditional on `ipv4_configuration_type` being equal to `static`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#ipv4_secondary_addresses TransportWanVpnInterfaceEthernetFeature#ipv4_secondary_addresses}
  */
  readonly ipv4SecondaryAddresses?: TransportWanVpnInterfaceEthernetFeatureIpv4SecondaryAddresses[] | cdktf.IResolvable;
  /**
  * Subnet Mask, Attribute conditional on `ipv4_configuration_type` being equal to `static`
  *   - Choices: `255.255.255.255`, `255.255.255.254`, `255.255.255.252`, `255.255.255.248`, `255.255.255.240`, `255.255.255.224`, `255.255.255.192`, `255.255.255.128`, `255.255.255.0`, `255.255.254.0`, `255.255.252.0`, `255.255.248.0`, `255.255.240.0`, `255.255.224.0`, `255.255.192.0`, `255.255.128.0`, `255.255.0.0`, `255.254.0.0`, `255.252.0.0`, `255.240.0.0`, `255.224.0.0`, `255.192.0.0`, `255.128.0.0`, `255.0.0.0`, `254.0.0.0`, `252.0.0.0`, `248.0.0.0`, `240.0.0.0`, `224.0.0.0`, `192.0.0.0`, `128.0.0.0`, `0.0.0.0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#ipv4_subnet_mask TransportWanVpnInterfaceEthernetFeature#ipv4_subnet_mask}
  */
  readonly ipv4SubnetMask?: string;
  /**
  * Variable name, Attribute conditional on `ipv4_configuration_type` being equal to `static`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#ipv4_subnet_mask_variable TransportWanVpnInterfaceEthernetFeature#ipv4_subnet_mask_variable}
  */
  readonly ipv4SubnetMaskVariable?: string;
  /**
  * IPv6 Address Secondary, Attribute conditional on `ipv6_configuration_type` being equal to `static`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#ipv6_address TransportWanVpnInterfaceEthernetFeature#ipv6_address}
  */
  readonly ipv6Address?: string;
  /**
  * Variable name, Attribute conditional on `ipv6_configuration_type` being equal to `static`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#ipv6_address_variable TransportWanVpnInterfaceEthernetFeature#ipv6_address_variable}
  */
  readonly ipv6AddressVariable?: string;
  /**
  * IPv6 Configuration Type
  *   - Choices: `dynamic`, `static`, `none`
  *   - Default value: `none`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#ipv6_configuration_type TransportWanVpnInterfaceEthernetFeature#ipv6_configuration_type}
  */
  readonly ipv6ConfigurationType?: string;
  /**
  * secondary IPv6 addresses, Attribute conditional on `ipv6_configuration_type` being equal to `dynamic`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#ipv6_dhcp_secondary_address TransportWanVpnInterfaceEthernetFeature#ipv6_dhcp_secondary_address}
  */
  readonly ipv6DhcpSecondaryAddress?: TransportWanVpnInterfaceEthernetFeatureIpv6DhcpSecondaryAddress[] | cdktf.IResolvable;
  /**
  * Static secondary IPv6 addresses, Attribute conditional on `ipv6_configuration_type` being equal to `static`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#ipv6_secondary_addresses TransportWanVpnInterfaceEthernetFeature#ipv6_secondary_addresses}
  */
  readonly ipv6SecondaryAddresses?: TransportWanVpnInterfaceEthernetFeatureIpv6SecondaryAddresses[] | cdktf.IResolvable;
  /**
  * Interval for interface load calculation
  *   - Range: `30`-`600`
  *   - Default value: `30`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#load_interval TransportWanVpnInterfaceEthernetFeature#load_interval}
  */
  readonly loadInterval?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#load_interval_variable TransportWanVpnInterfaceEthernetFeature#load_interval_variable}
  */
  readonly loadIntervalVariable?: string;
  /**
  * MAC Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#mac_address TransportWanVpnInterfaceEthernetFeature#mac_address}
  */
  readonly macAddress?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#mac_address_variable TransportWanVpnInterfaceEthernetFeature#mac_address_variable}
  */
  readonly macAddressVariable?: string;
  /**
  * Media type
  *   - Choices: `auto-select`, `rj45`, `sfp`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#media_type TransportWanVpnInterfaceEthernetFeature#media_type}
  */
  readonly mediaType?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#media_type_variable TransportWanVpnInterfaceEthernetFeature#media_type_variable}
  */
  readonly mediaTypeVariable?: string;
  /**
  * The name of the Feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#name TransportWanVpnInterfaceEthernetFeature#name}
  */
  readonly name: string;
  /**
  * NAT64 on this interface, Attribute conditional on `nat_ipv6` being equal to `true`
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#nat64 TransportWanVpnInterfaceEthernetFeature#nat64}
  */
  readonly nat64?: boolean | cdktf.IResolvable;
  /**
  * NAT66 on this interface, Attribute conditional on `nat_ipv6` being equal to `true`
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#nat66 TransportWanVpnInterfaceEthernetFeature#nat66}
  */
  readonly nat66?: boolean | cdktf.IResolvable;
  /**
  * enable Network Address Translation on this interface
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#nat_ipv4 TransportWanVpnInterfaceEthernetFeature#nat_ipv4}
  */
  readonly natIpv4?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#nat_ipv4_variable TransportWanVpnInterfaceEthernetFeature#nat_ipv4_variable}
  */
  readonly natIpv4Variable?: string;
  /**
  * enable Network Address Translation ipv6 on this interface
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#nat_ipv6 TransportWanVpnInterfaceEthernetFeature#nat_ipv6}
  */
  readonly natIpv6?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#nat_ipv6_variable TransportWanVpnInterfaceEthernetFeature#nat_ipv6_variable}
  */
  readonly natIpv6Variable?: string;
  /**
  * NAT Inside Source Loopback Interface, Attribute conditional on `nat_ipv4` being equal to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#nat_loopback TransportWanVpnInterfaceEthernetFeature#nat_loopback}
  */
  readonly natLoopback?: string;
  /**
  * Variable name, Attribute conditional on `nat_ipv4` being equal to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#nat_loopback_variable TransportWanVpnInterfaceEthernetFeature#nat_loopback_variable}
  */
  readonly natLoopbackVariable?: string;
  /**
  * NAT Overload, Attribute conditional on `nat_ipv4` being equal to `true`
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#nat_overload TransportWanVpnInterfaceEthernetFeature#nat_overload}
  */
  readonly natOverload?: boolean | cdktf.IResolvable;
  /**
  * Variable name, Attribute conditional on `nat_ipv4` being equal to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#nat_overload_variable TransportWanVpnInterfaceEthernetFeature#nat_overload_variable}
  */
  readonly natOverloadVariable?: string;
  /**
  * NAT Pool Prefix Length, Attribute conditional on `nat_ipv4` being equal to `true`
  *   - Range: `1`-`32`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#nat_prefix_length TransportWanVpnInterfaceEthernetFeature#nat_prefix_length}
  */
  readonly natPrefixLength?: number;
  /**
  * Variable name, Attribute conditional on `nat_ipv4` being equal to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#nat_prefix_length_variable TransportWanVpnInterfaceEthernetFeature#nat_prefix_length_variable}
  */
  readonly natPrefixLengthVariable?: string;
  /**
  * NAT Pool Range End, Attribute conditional on `nat_ipv4` being equal to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#nat_range_end TransportWanVpnInterfaceEthernetFeature#nat_range_end}
  */
  readonly natRangeEnd?: string;
  /**
  * Variable name, Attribute conditional on `nat_ipv4` being equal to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#nat_range_end_variable TransportWanVpnInterfaceEthernetFeature#nat_range_end_variable}
  */
  readonly natRangeEndVariable?: string;
  /**
  * NAT Pool Range Start, Attribute conditional on `nat_ipv4` being equal to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#nat_range_start TransportWanVpnInterfaceEthernetFeature#nat_range_start}
  */
  readonly natRangeStart?: string;
  /**
  * Variable name, Attribute conditional on `nat_ipv4` being equal to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#nat_range_start_variable TransportWanVpnInterfaceEthernetFeature#nat_range_start_variable}
  */
  readonly natRangeStartVariable?: string;
  /**
  * Set NAT TCP session timeout, in minutes, Attribute conditional on `nat_ipv4` being equal to `true`
  *   - Range: `1`-`8947`
  *   - Default value: `60`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#nat_tcp_timeout TransportWanVpnInterfaceEthernetFeature#nat_tcp_timeout}
  */
  readonly natTcpTimeout?: number;
  /**
  * Variable name, Attribute conditional on `nat_ipv4` being equal to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#nat_tcp_timeout_variable TransportWanVpnInterfaceEthernetFeature#nat_tcp_timeout_variable}
  */
  readonly natTcpTimeoutVariable?: string;
  /**
  * NAT Type, Attribute conditional on `nat_ipv4` being equal to `true`
  *   - Choices: `interface`, `pool`, `loopback`
  *   - Default value: `interface`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#nat_type TransportWanVpnInterfaceEthernetFeature#nat_type}
  */
  readonly natType?: string;
  /**
  * Variable name, Attribute conditional on `nat_ipv4` being equal to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#nat_type_variable TransportWanVpnInterfaceEthernetFeature#nat_type_variable}
  */
  readonly natTypeVariable?: string;
  /**
  * Set NAT UDP session timeout, in minutes, Attribute conditional on `nat_ipv4` being equal to `true`
  *   - Range: `1`-`8947`
  *   - Default value: `1`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#nat_udp_timeout TransportWanVpnInterfaceEthernetFeature#nat_udp_timeout}
  */
  readonly natUdpTimeout?: number;
  /**
  * Variable name, Attribute conditional on `nat_ipv4` being equal to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#nat_udp_timeout_variable TransportWanVpnInterfaceEthernetFeature#nat_udp_timeout_variable}
  */
  readonly natUdpTimeoutVariable?: string;
  /**
  * static NAT, Attribute conditional on `nat_ipv4` being equal to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#new_static_nats TransportWanVpnInterfaceEthernetFeature#new_static_nats}
  */
  readonly newStaticNats?: TransportWanVpnInterfaceEthernetFeatureNewStaticNats[] | cdktf.IResolvable;
  /**
  * Per-tunnel Qos, Attribute conditional on `tunnel_interface` being equal to `true`
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#per_tunnel_qos TransportWanVpnInterfaceEthernetFeature#per_tunnel_qos}
  */
  readonly perTunnelQos?: boolean | cdktf.IResolvable;
  /**
  * Variable name, Attribute conditional on `tunnel_interface` being equal to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#per_tunnel_qos_variable TransportWanVpnInterfaceEthernetFeature#per_tunnel_qos_variable}
  */
  readonly perTunnelQosVariable?: string;
  /**
  * Adaptive QoS
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#qos_adaptive TransportWanVpnInterfaceEthernetFeature#qos_adaptive}
  */
  readonly qosAdaptive?: boolean | cdktf.IResolvable;
  /**
  * Shaping Rate Downstream
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#qos_adaptive_bandwidth_downstream TransportWanVpnInterfaceEthernetFeature#qos_adaptive_bandwidth_downstream}
  */
  readonly qosAdaptiveBandwidthDownstream?: boolean | cdktf.IResolvable;
  /**
  * Shaping Rate Upstream
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#qos_adaptive_bandwidth_upstream TransportWanVpnInterfaceEthernetFeature#qos_adaptive_bandwidth_upstream}
  */
  readonly qosAdaptiveBandwidthUpstream?: boolean | cdktf.IResolvable;
  /**
  * Adaptive QoS default downstream bandwidth (kbps)
  *   - Range: `8`-`100000000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#qos_adaptive_default_downstream TransportWanVpnInterfaceEthernetFeature#qos_adaptive_default_downstream}
  */
  readonly qosAdaptiveDefaultDownstream?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#qos_adaptive_default_downstream_variable TransportWanVpnInterfaceEthernetFeature#qos_adaptive_default_downstream_variable}
  */
  readonly qosAdaptiveDefaultDownstreamVariable?: string;
  /**
  * Adaptive QoS default upstream bandwidth (kbps)
  *   - Range: `8`-`100000000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#qos_adaptive_default_upstream TransportWanVpnInterfaceEthernetFeature#qos_adaptive_default_upstream}
  */
  readonly qosAdaptiveDefaultUpstream?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#qos_adaptive_default_upstream_variable TransportWanVpnInterfaceEthernetFeature#qos_adaptive_default_upstream_variable}
  */
  readonly qosAdaptiveDefaultUpstreamVariable?: string;
  /**
  * Downstream max bandwidth limit (kbps)
  *   - Range: `8`-`100000000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#qos_adaptive_max_downstream TransportWanVpnInterfaceEthernetFeature#qos_adaptive_max_downstream}
  */
  readonly qosAdaptiveMaxDownstream?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#qos_adaptive_max_downstream_variable TransportWanVpnInterfaceEthernetFeature#qos_adaptive_max_downstream_variable}
  */
  readonly qosAdaptiveMaxDownstreamVariable?: string;
  /**
  * Upstream max bandwidth limit (kbps)
  *   - Range: `8`-`100000000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#qos_adaptive_max_upstream TransportWanVpnInterfaceEthernetFeature#qos_adaptive_max_upstream}
  */
  readonly qosAdaptiveMaxUpstream?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#qos_adaptive_max_upstream_variable TransportWanVpnInterfaceEthernetFeature#qos_adaptive_max_upstream_variable}
  */
  readonly qosAdaptiveMaxUpstreamVariable?: string;
  /**
  * Downstream min bandwidth limit (kbps)
  *   - Range: `8`-`100000000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#qos_adaptive_min_downstream TransportWanVpnInterfaceEthernetFeature#qos_adaptive_min_downstream}
  */
  readonly qosAdaptiveMinDownstream?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#qos_adaptive_min_downstream_variable TransportWanVpnInterfaceEthernetFeature#qos_adaptive_min_downstream_variable}
  */
  readonly qosAdaptiveMinDownstreamVariable?: string;
  /**
  * Upstream min bandwidth limit (kbps)
  *   - Range: `8`-`100000000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#qos_adaptive_min_upstream TransportWanVpnInterfaceEthernetFeature#qos_adaptive_min_upstream}
  */
  readonly qosAdaptiveMinUpstream?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#qos_adaptive_min_upstream_variable TransportWanVpnInterfaceEthernetFeature#qos_adaptive_min_upstream_variable}
  */
  readonly qosAdaptiveMinUpstreamVariable?: string;
  /**
  * Adapt Period(Minutes)
  *   - Range: `1`-`720`
  *   - Default value: `15`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#qos_adaptive_period TransportWanVpnInterfaceEthernetFeature#qos_adaptive_period}
  */
  readonly qosAdaptivePeriod?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#qos_adaptive_period_variable TransportWanVpnInterfaceEthernetFeature#qos_adaptive_period_variable}
  */
  readonly qosAdaptivePeriodVariable?: string;
  /**
  * Shaping Rate (Kbps)
  *   - Range: `8`-`100000000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#qos_shaping_rate TransportWanVpnInterfaceEthernetFeature#qos_shaping_rate}
  */
  readonly qosShapingRate?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#qos_shaping_rate_variable TransportWanVpnInterfaceEthernetFeature#qos_shaping_rate_variable}
  */
  readonly qosShapingRateVariable?: string;
  /**
  * Service Provider Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#service_provider TransportWanVpnInterfaceEthernetFeature#service_provider}
  */
  readonly serviceProvider?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#service_provider_variable TransportWanVpnInterfaceEthernetFeature#service_provider_variable}
  */
  readonly serviceProviderVariable?: string;
  /**
  * 
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#shutdown TransportWanVpnInterfaceEthernetFeature#shutdown}
  */
  readonly shutdown?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#shutdown_variable TransportWanVpnInterfaceEthernetFeature#shutdown_variable}
  */
  readonly shutdownVariable?: string;
  /**
  * Set interface speed
  *   - Choices: `10`, `100`, `1000`, `2500`, `10000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#speed TransportWanVpnInterfaceEthernetFeature#speed}
  */
  readonly speed?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#speed_variable TransportWanVpnInterfaceEthernetFeature#speed_variable}
  */
  readonly speedVariable?: string;
  /**
  * static NAT66, Attribute conditional on `nat_ipv6` being equal to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#static_nat66 TransportWanVpnInterfaceEthernetFeature#static_nat66}
  */
  readonly staticNat66?: TransportWanVpnInterfaceEthernetFeatureStaticNat66[] | cdktf.IResolvable;
  /**
  * TCP MSS on SYN packets, in bytes
  *   - Range: `500`-`1460`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#tcp_mss TransportWanVpnInterfaceEthernetFeature#tcp_mss}
  */
  readonly tcpMss?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#tcp_mss_variable TransportWanVpnInterfaceEthernetFeature#tcp_mss_variable}
  */
  readonly tcpMssVariable?: string;
  /**
  * Extends a local TLOC to a remote node only for vpn 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#tloc_extension TransportWanVpnInterfaceEthernetFeature#tloc_extension}
  */
  readonly tlocExtension?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#tloc_extension_variable TransportWanVpnInterfaceEthernetFeature#tloc_extension_variable}
  */
  readonly tlocExtensionVariable?: string;
  /**
  * Enable tracker for this interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#tracker TransportWanVpnInterfaceEthernetFeature#tracker}
  */
  readonly tracker?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#tracker_variable TransportWanVpnInterfaceEthernetFeature#tracker_variable}
  */
  readonly trackerVariable?: string;
  /**
  * Transport WAN VPN Feature ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#transport_wan_vpn_feature_id TransportWanVpnInterfaceEthernetFeature#transport_wan_vpn_feature_id}
  */
  readonly transportWanVpnFeatureId: string;
  /**
  * Tunnels Bandwidth Percent, Attribute conditional on `tunnel_interface` being equal to `true`
  *   - Range: `1`-`100`
  *   - Default value: `50`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#tunnel_bandwidth_percent TransportWanVpnInterfaceEthernetFeature#tunnel_bandwidth_percent}
  */
  readonly tunnelBandwidthPercent?: number;
  /**
  * Variable name, Attribute conditional on `tunnel_interface` being equal to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#tunnel_bandwidth_percent_variable TransportWanVpnInterfaceEthernetFeature#tunnel_bandwidth_percent_variable}
  */
  readonly tunnelBandwidthPercentVariable?: string;
  /**
  * Tunnel Interface on/off
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#tunnel_interface TransportWanVpnInterfaceEthernetFeature#tunnel_interface}
  */
  readonly tunnelInterface?: boolean | cdktf.IResolvable;
  /**
  * Allow all traffic. Overrides all other allow-service options if allow-service all is set
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#tunnel_interface_allow_all TransportWanVpnInterfaceEthernetFeature#tunnel_interface_allow_all}
  */
  readonly tunnelInterfaceAllowAll?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#tunnel_interface_allow_all_variable TransportWanVpnInterfaceEthernetFeature#tunnel_interface_allow_all_variable}
  */
  readonly tunnelInterfaceAllowAllVariable?: string;
  /**
  * Allow/Deny BFD
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#tunnel_interface_allow_bfd TransportWanVpnInterfaceEthernetFeature#tunnel_interface_allow_bfd}
  */
  readonly tunnelInterfaceAllowBfd?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#tunnel_interface_allow_bfd_variable TransportWanVpnInterfaceEthernetFeature#tunnel_interface_allow_bfd_variable}
  */
  readonly tunnelInterfaceAllowBfdVariable?: string;
  /**
  * Allow/deny BGP
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#tunnel_interface_allow_bgp TransportWanVpnInterfaceEthernetFeature#tunnel_interface_allow_bgp}
  */
  readonly tunnelInterfaceAllowBgp?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#tunnel_interface_allow_bgp_variable TransportWanVpnInterfaceEthernetFeature#tunnel_interface_allow_bgp_variable}
  */
  readonly tunnelInterfaceAllowBgpVariable?: string;
  /**
  * Allow/Deny DHCP
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#tunnel_interface_allow_dhcp TransportWanVpnInterfaceEthernetFeature#tunnel_interface_allow_dhcp}
  */
  readonly tunnelInterfaceAllowDhcp?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#tunnel_interface_allow_dhcp_variable TransportWanVpnInterfaceEthernetFeature#tunnel_interface_allow_dhcp_variable}
  */
  readonly tunnelInterfaceAllowDhcpVariable?: string;
  /**
  * Allow/Deny DNS
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#tunnel_interface_allow_dns TransportWanVpnInterfaceEthernetFeature#tunnel_interface_allow_dns}
  */
  readonly tunnelInterfaceAllowDns?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#tunnel_interface_allow_dns_variable TransportWanVpnInterfaceEthernetFeature#tunnel_interface_allow_dns_variable}
  */
  readonly tunnelInterfaceAllowDnsVariable?: string;
  /**
  * Allow/Deny HTTPS
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#tunnel_interface_allow_https TransportWanVpnInterfaceEthernetFeature#tunnel_interface_allow_https}
  */
  readonly tunnelInterfaceAllowHttps?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#tunnel_interface_allow_https_variable TransportWanVpnInterfaceEthernetFeature#tunnel_interface_allow_https_variable}
  */
  readonly tunnelInterfaceAllowHttpsVariable?: string;
  /**
  * Allow/Deny ICMP
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#tunnel_interface_allow_icmp TransportWanVpnInterfaceEthernetFeature#tunnel_interface_allow_icmp}
  */
  readonly tunnelInterfaceAllowIcmp?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#tunnel_interface_allow_icmp_variable TransportWanVpnInterfaceEthernetFeature#tunnel_interface_allow_icmp_variable}
  */
  readonly tunnelInterfaceAllowIcmpVariable?: string;
  /**
  * Allow/Deny NETCONF
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#tunnel_interface_allow_netconf TransportWanVpnInterfaceEthernetFeature#tunnel_interface_allow_netconf}
  */
  readonly tunnelInterfaceAllowNetconf?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#tunnel_interface_allow_netconf_variable TransportWanVpnInterfaceEthernetFeature#tunnel_interface_allow_netconf_variable}
  */
  readonly tunnelInterfaceAllowNetconfVariable?: string;
  /**
  * Allow/Deny NTP
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#tunnel_interface_allow_ntp TransportWanVpnInterfaceEthernetFeature#tunnel_interface_allow_ntp}
  */
  readonly tunnelInterfaceAllowNtp?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#tunnel_interface_allow_ntp_variable TransportWanVpnInterfaceEthernetFeature#tunnel_interface_allow_ntp_variable}
  */
  readonly tunnelInterfaceAllowNtpVariable?: string;
  /**
  * Allow/Deny OSPF
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#tunnel_interface_allow_ospf TransportWanVpnInterfaceEthernetFeature#tunnel_interface_allow_ospf}
  */
  readonly tunnelInterfaceAllowOspf?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#tunnel_interface_allow_ospf_variable TransportWanVpnInterfaceEthernetFeature#tunnel_interface_allow_ospf_variable}
  */
  readonly tunnelInterfaceAllowOspfVariable?: string;
  /**
  * Allow/Deny SNMP
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#tunnel_interface_allow_snmp TransportWanVpnInterfaceEthernetFeature#tunnel_interface_allow_snmp}
  */
  readonly tunnelInterfaceAllowSnmp?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#tunnel_interface_allow_snmp_variable TransportWanVpnInterfaceEthernetFeature#tunnel_interface_allow_snmp_variable}
  */
  readonly tunnelInterfaceAllowSnmpVariable?: string;
  /**
  * Allow/Deny SSH
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#tunnel_interface_allow_ssh TransportWanVpnInterfaceEthernetFeature#tunnel_interface_allow_ssh}
  */
  readonly tunnelInterfaceAllowSsh?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#tunnel_interface_allow_ssh_variable TransportWanVpnInterfaceEthernetFeature#tunnel_interface_allow_ssh_variable}
  */
  readonly tunnelInterfaceAllowSshVariable?: string;
  /**
  * Allow/Deny STUN
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#tunnel_interface_allow_stun TransportWanVpnInterfaceEthernetFeature#tunnel_interface_allow_stun}
  */
  readonly tunnelInterfaceAllowStun?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#tunnel_interface_allow_stun_variable TransportWanVpnInterfaceEthernetFeature#tunnel_interface_allow_stun_variable}
  */
  readonly tunnelInterfaceAllowStunVariable?: string;
  /**
  * Bind loopback tunnel interface to a physical interface, Attribute conditional on `tunnel_interface` being equal to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#tunnel_interface_bind_loopback_tunnel TransportWanVpnInterfaceEthernetFeature#tunnel_interface_bind_loopback_tunnel}
  */
  readonly tunnelInterfaceBindLoopbackTunnel?: string;
  /**
  * Variable name, Attribute conditional on `tunnel_interface` being equal to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#tunnel_interface_bind_loopback_tunnel_variable TransportWanVpnInterfaceEthernetFeature#tunnel_interface_bind_loopback_tunnel_variable}
  */
  readonly tunnelInterfaceBindLoopbackTunnelVariable?: string;
  /**
  * Set TLOC as border TLOC, Attribute conditional on `tunnel_interface` being equal to `true`
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#tunnel_interface_border TransportWanVpnInterfaceEthernetFeature#tunnel_interface_border}
  */
  readonly tunnelInterfaceBorder?: boolean | cdktf.IResolvable;
  /**
  * Variable name, Attribute conditional on `tunnel_interface` being equal to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#tunnel_interface_border_variable TransportWanVpnInterfaceEthernetFeature#tunnel_interface_border_variable}
  */
  readonly tunnelInterfaceBorderVariable?: string;
  /**
  * Set carrier for TLOC, Attribute conditional on `tunnel_interface` being equal to `true`
  *   - Choices: `default`, `carrier1`, `carrier2`, `carrier3`, `carrier4`, `carrier5`, `carrier6`, `carrier7`, `carrier8`
  *   - Default value: `default`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#tunnel_interface_carrier TransportWanVpnInterfaceEthernetFeature#tunnel_interface_carrier}
  */
  readonly tunnelInterfaceCarrier?: string;
  /**
  * Variable name, Attribute conditional on `tunnel_interface` being equal to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#tunnel_interface_carrier_variable TransportWanVpnInterfaceEthernetFeature#tunnel_interface_carrier_variable}
  */
  readonly tunnelInterfaceCarrierVariable?: string;
  /**
  * Enable clear dont fragment (Currently Only SDWAN Tunnel Interface), Attribute conditional on `tunnel_interface` being equal to `true`
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#tunnel_interface_clear_dont_fragment TransportWanVpnInterfaceEthernetFeature#tunnel_interface_clear_dont_fragment}
  */
  readonly tunnelInterfaceClearDontFragment?: boolean | cdktf.IResolvable;
  /**
  * Variable name, Attribute conditional on `tunnel_interface` being equal to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#tunnel_interface_clear_dont_fragment_variable TransportWanVpnInterfaceEthernetFeature#tunnel_interface_clear_dont_fragment_variable}
  */
  readonly tunnelInterfaceClearDontFragmentVariable?: string;
  /**
  * Set color for TLOC, Attribute conditional on `tunnel_interface` being equal to `true`
  *   - Choices: `default`, `mpls`, `metro-ethernet`, `biz-internet`, `public-internet`, `lte`, `3g`, `red`, `green`, `blue`, `gold`, `silver`, `bronze`, `custom1`, `custom2`, `custom3`, `private1`, `private2`, `private3`, `private4`, `private5`, `private6`
  *   - Default value: `mpls`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#tunnel_interface_color TransportWanVpnInterfaceEthernetFeature#tunnel_interface_color}
  */
  readonly tunnelInterfaceColor?: string;
  /**
  * Restrict this TLOC behavior, Attribute conditional on `tunnel_interface` being equal to `true`
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#tunnel_interface_color_restrict TransportWanVpnInterfaceEthernetFeature#tunnel_interface_color_restrict}
  */
  readonly tunnelInterfaceColorRestrict?: boolean | cdktf.IResolvable;
  /**
  * Variable name, Attribute conditional on `tunnel_interface` being equal to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#tunnel_interface_color_restrict_variable TransportWanVpnInterfaceEthernetFeature#tunnel_interface_color_restrict_variable}
  */
  readonly tunnelInterfaceColorRestrictVariable?: string;
  /**
  * Variable name, Attribute conditional on `tunnel_interface` being equal to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#tunnel_interface_color_variable TransportWanVpnInterfaceEthernetFeature#tunnel_interface_color_variable}
  */
  readonly tunnelInterfaceColorVariable?: string;
  /**
  * CTS SGT Propagation configuration, Attribute conditional on `tunnel_interface` being equal to `true`
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#tunnel_interface_cts_sgt_propagation TransportWanVpnInterfaceEthernetFeature#tunnel_interface_cts_sgt_propagation}
  */
  readonly tunnelInterfaceCtsSgtPropagation?: boolean | cdktf.IResolvable;
  /**
  * Variable name, Attribute conditional on `tunnel_interface` being equal to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#tunnel_interface_cts_sgt_propagation_variable TransportWanVpnInterfaceEthernetFeature#tunnel_interface_cts_sgt_propagation_variable}
  */
  readonly tunnelInterfaceCtsSgtPropagationVariable?: string;
  /**
  * Encapsulation for TLOC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#tunnel_interface_encapsulations TransportWanVpnInterfaceEthernetFeature#tunnel_interface_encapsulations}
  */
  readonly tunnelInterfaceEncapsulations?: TransportWanVpnInterfaceEthernetFeatureTunnelInterfaceEncapsulations[] | cdktf.IResolvable;
  /**
  * Exclude the following controller groups defined in this list., Attribute conditional on `tunnel_interface` being equal to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#tunnel_interface_exclude_controller_group_list TransportWanVpnInterfaceEthernetFeature#tunnel_interface_exclude_controller_group_list}
  */
  readonly tunnelInterfaceExcludeControllerGroupList?: number[];
  /**
  * Variable name, Attribute conditional on `tunnel_interface` being equal to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#tunnel_interface_exclude_controller_group_list_variable TransportWanVpnInterfaceEthernetFeature#tunnel_interface_exclude_controller_group_list_variable}
  */
  readonly tunnelInterfaceExcludeControllerGroupListVariable?: string;
  /**
  * GRE tunnel destination IP, Attribute conditional on `tunnel_interface` being equal to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#tunnel_interface_gre_tunnel_destination_ip TransportWanVpnInterfaceEthernetFeature#tunnel_interface_gre_tunnel_destination_ip}
  */
  readonly tunnelInterfaceGreTunnelDestinationIp?: string;
  /**
  * Variable name, Attribute conditional on `tunnel_interface` being equal to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#tunnel_interface_gre_tunnel_destination_ip_variable TransportWanVpnInterfaceEthernetFeature#tunnel_interface_gre_tunnel_destination_ip_variable}
  */
  readonly tunnelInterfaceGreTunnelDestinationIpVariable?: string;
  /**
  * List of groups, Attribute conditional on `tunnel_interface` being equal to `true`
  *   - Range: `1`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#tunnel_interface_groups TransportWanVpnInterfaceEthernetFeature#tunnel_interface_groups}
  */
  readonly tunnelInterfaceGroups?: number;
  /**
  * Variable name, Attribute conditional on `tunnel_interface` being equal to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#tunnel_interface_groups_variable TransportWanVpnInterfaceEthernetFeature#tunnel_interface_groups_variable}
  */
  readonly tunnelInterfaceGroupsVariable?: string;
  /**
  * Set time period of control hello packets <100..600000> milli seconds, Attribute conditional on `tunnel_interface` being equal to `true`
  *   - Range: `100`-`600000`
  *   - Default value: `1000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#tunnel_interface_hello_interval TransportWanVpnInterfaceEthernetFeature#tunnel_interface_hello_interval}
  */
  readonly tunnelInterfaceHelloInterval?: number;
  /**
  * Variable name, Attribute conditional on `tunnel_interface` being equal to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#tunnel_interface_hello_interval_variable TransportWanVpnInterfaceEthernetFeature#tunnel_interface_hello_interval_variable}
  */
  readonly tunnelInterfaceHelloIntervalVariable?: string;
  /**
  * Set tolerance of control hello packets <12..6000> seconds, Attribute conditional on `tunnel_interface` being equal to `true`
  *   - Range: `12`-`6000`
  *   - Default value: `12`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#tunnel_interface_hello_tolerance TransportWanVpnInterfaceEthernetFeature#tunnel_interface_hello_tolerance}
  */
  readonly tunnelInterfaceHelloTolerance?: number;
  /**
  * Variable name, Attribute conditional on `tunnel_interface` being equal to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#tunnel_interface_hello_tolerance_variable TransportWanVpnInterfaceEthernetFeature#tunnel_interface_hello_tolerance_variable}
  */
  readonly tunnelInterfaceHelloToleranceVariable?: string;
  /**
  * Set TLOC as last resort, Attribute conditional on `tunnel_interface` being equal to `true`
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#tunnel_interface_last_resort_circuit TransportWanVpnInterfaceEthernetFeature#tunnel_interface_last_resort_circuit}
  */
  readonly tunnelInterfaceLastResortCircuit?: boolean | cdktf.IResolvable;
  /**
  * Variable name, Attribute conditional on `tunnel_interface` being equal to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#tunnel_interface_last_resort_circuit_variable TransportWanVpnInterfaceEthernetFeature#tunnel_interface_last_resort_circuit_variable}
  */
  readonly tunnelInterfaceLastResortCircuitVariable?: string;
  /**
  * Set the interface as a low-bandwidth circuit, Attribute conditional on `tunnel_interface` being equal to `true`
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#tunnel_interface_low_bandwidth_link TransportWanVpnInterfaceEthernetFeature#tunnel_interface_low_bandwidth_link}
  */
  readonly tunnelInterfaceLowBandwidthLink?: boolean | cdktf.IResolvable;
  /**
  * Variable name, Attribute conditional on `tunnel_interface` being equal to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#tunnel_interface_low_bandwidth_link_variable TransportWanVpnInterfaceEthernetFeature#tunnel_interface_low_bandwidth_link_variable}
  */
  readonly tunnelInterfaceLowBandwidthLinkVariable?: string;
  /**
  * Maximum Control Connections, Attribute conditional on `tunnel_interface` being equal to `true`
  *   - Range: `0`-`100`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#tunnel_interface_max_control_connections TransportWanVpnInterfaceEthernetFeature#tunnel_interface_max_control_connections}
  */
  readonly tunnelInterfaceMaxControlConnections?: number;
  /**
  * Variable name, Attribute conditional on `tunnel_interface` being equal to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#tunnel_interface_max_control_connections_variable TransportWanVpnInterfaceEthernetFeature#tunnel_interface_max_control_connections_variable}
  */
  readonly tunnelInterfaceMaxControlConnectionsVariable?: string;
  /**
  * Set time period of nat refresh packets <1...60> seconds, Attribute conditional on `tunnel_interface` being equal to `true`
  *   - Range: `1`-`60`
  *   - Default value: `5`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#tunnel_interface_nat_refresh_interval TransportWanVpnInterfaceEthernetFeature#tunnel_interface_nat_refresh_interval}
  */
  readonly tunnelInterfaceNatRefreshInterval?: number;
  /**
  * Variable name, Attribute conditional on `tunnel_interface` being equal to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#tunnel_interface_nat_refresh_interval_variable TransportWanVpnInterfaceEthernetFeature#tunnel_interface_nat_refresh_interval_variable}
  */
  readonly tunnelInterfaceNatRefreshIntervalVariable?: string;
  /**
  * Accept and respond to network-prefix-directed broadcasts, Attribute conditional on `tunnel_interface` being equal to `true`
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#tunnel_interface_network_broadcast TransportWanVpnInterfaceEthernetFeature#tunnel_interface_network_broadcast}
  */
  readonly tunnelInterfaceNetworkBroadcast?: boolean | cdktf.IResolvable;
  /**
  * Variable name, Attribute conditional on `tunnel_interface` being equal to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#tunnel_interface_network_broadcast_variable TransportWanVpnInterfaceEthernetFeature#tunnel_interface_network_broadcast_variable}
  */
  readonly tunnelInterfaceNetworkBroadcastVariable?: string;
  /**
  * Disallow port hopping on the tunnel interface, Attribute conditional on `tunnel_interface` being equal to `true`
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#tunnel_interface_port_hop TransportWanVpnInterfaceEthernetFeature#tunnel_interface_port_hop}
  */
  readonly tunnelInterfacePortHop?: boolean | cdktf.IResolvable;
  /**
  * Variable name, Attribute conditional on `tunnel_interface` being equal to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#tunnel_interface_port_hop_variable TransportWanVpnInterfaceEthernetFeature#tunnel_interface_port_hop_variable}
  */
  readonly tunnelInterfacePortHopVariable?: string;
  /**
  * Tunnel TCP MSS on SYN packets, in bytes, Attribute conditional on `tunnel_interface` being equal to `true`
  *   - Range: `500`-`1460`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#tunnel_interface_tunnel_tcp_mss TransportWanVpnInterfaceEthernetFeature#tunnel_interface_tunnel_tcp_mss}
  */
  readonly tunnelInterfaceTunnelTcpMss?: number;
  /**
  * Variable name, Attribute conditional on `tunnel_interface` being equal to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#tunnel_interface_tunnel_tcp_mss_variable TransportWanVpnInterfaceEthernetFeature#tunnel_interface_tunnel_tcp_mss_variable}
  */
  readonly tunnelInterfaceTunnelTcpMssVariable?: string;
  /**
  * Put this wan interface in STUN mode only, Attribute conditional on `tunnel_interface` being equal to `true`
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#tunnel_interface_vbond_as_stun_server TransportWanVpnInterfaceEthernetFeature#tunnel_interface_vbond_as_stun_server}
  */
  readonly tunnelInterfaceVbondAsStunServer?: boolean | cdktf.IResolvable;
  /**
  * Variable name, Attribute conditional on `tunnel_interface` being equal to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#tunnel_interface_vbond_as_stun_server_variable TransportWanVpnInterfaceEthernetFeature#tunnel_interface_vbond_as_stun_server_variable}
  */
  readonly tunnelInterfaceVbondAsStunServerVariable?: string;
  /**
  * Set interface preference for control connection to vManage <0..8>, Attribute conditional on `tunnel_interface` being equal to `true`
  *   - Range: `0`-`8`
  *   - Default value: `5`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#tunnel_interface_vmanage_connection_preference TransportWanVpnInterfaceEthernetFeature#tunnel_interface_vmanage_connection_preference}
  */
  readonly tunnelInterfaceVmanageConnectionPreference?: number;
  /**
  * Variable name, Attribute conditional on `tunnel_interface` being equal to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#tunnel_interface_vmanage_connection_preference_variable TransportWanVpnInterfaceEthernetFeature#tunnel_interface_vmanage_connection_preference_variable}
  */
  readonly tunnelInterfaceVmanageConnectionPreferenceVariable?: string;
  /**
  * Set tunnel QoS mode, Attribute conditional on `tunnel_interface` being equal to `true`
  *   - Choices: `hub`, `spoke`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#tunnel_qos_mode TransportWanVpnInterfaceEthernetFeature#tunnel_qos_mode}
  */
  readonly tunnelQosMode?: string;
  /**
  * Variable name, Attribute conditional on `tunnel_interface` being equal to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#tunnel_qos_mode_variable TransportWanVpnInterfaceEthernetFeature#tunnel_qos_mode_variable}
  */
  readonly tunnelQosModeVariable?: string;
  /**
  * Extend remote TLOC over a GRE tunnel to a local WAN interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#xconnect TransportWanVpnInterfaceEthernetFeature#xconnect}
  */
  readonly xconnect?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#xconnect_variable TransportWanVpnInterfaceEthernetFeature#xconnect_variable}
  */
  readonly xconnectVariable?: string;
}
export interface TransportWanVpnInterfaceEthernetFeatureArps {
  /**
  * IP V4 Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#ip_address TransportWanVpnInterfaceEthernetFeature#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#ip_address_variable TransportWanVpnInterfaceEthernetFeature#ip_address_variable}
  */
  readonly ipAddressVariable?: string;
  /**
  * MAC Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#mac_address TransportWanVpnInterfaceEthernetFeature#mac_address}
  */
  readonly macAddress?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#mac_address_variable TransportWanVpnInterfaceEthernetFeature#mac_address_variable}
  */
  readonly macAddressVariable?: string;
}

export function transportWanVpnInterfaceEthernetFeatureArpsToTerraform(struct?: TransportWanVpnInterfaceEthernetFeatureArps | cdktf.IResolvable): any {
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


export function transportWanVpnInterfaceEthernetFeatureArpsToHclTerraform(struct?: TransportWanVpnInterfaceEthernetFeatureArps | cdktf.IResolvable): any {
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

export class TransportWanVpnInterfaceEthernetFeatureArpsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TransportWanVpnInterfaceEthernetFeatureArps | cdktf.IResolvable | undefined {
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

  public set internalValue(value: TransportWanVpnInterfaceEthernetFeatureArps | cdktf.IResolvable | undefined) {
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

export class TransportWanVpnInterfaceEthernetFeatureArpsList extends cdktf.ComplexList {
  public internalValue? : TransportWanVpnInterfaceEthernetFeatureArps[] | cdktf.IResolvable

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
  public get(index: number): TransportWanVpnInterfaceEthernetFeatureArpsOutputReference {
    return new TransportWanVpnInterfaceEthernetFeatureArpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TransportWanVpnInterfaceEthernetFeatureIpv4SecondaryAddresses {
  /**
  * IpV4 Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#address TransportWanVpnInterfaceEthernetFeature#address}
  */
  readonly address?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#address_variable TransportWanVpnInterfaceEthernetFeature#address_variable}
  */
  readonly addressVariable?: string;
  /**
  * Subnet Mask
  *   - Choices: `255.255.255.255`, `255.255.255.254`, `255.255.255.252`, `255.255.255.248`, `255.255.255.240`, `255.255.255.224`, `255.255.255.192`, `255.255.255.128`, `255.255.255.0`, `255.255.254.0`, `255.255.252.0`, `255.255.248.0`, `255.255.240.0`, `255.255.224.0`, `255.255.192.0`, `255.255.128.0`, `255.255.0.0`, `255.254.0.0`, `255.252.0.0`, `255.240.0.0`, `255.224.0.0`, `255.192.0.0`, `255.128.0.0`, `255.0.0.0`, `254.0.0.0`, `252.0.0.0`, `248.0.0.0`, `240.0.0.0`, `224.0.0.0`, `192.0.0.0`, `128.0.0.0`, `0.0.0.0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#subnet_mask TransportWanVpnInterfaceEthernetFeature#subnet_mask}
  */
  readonly subnetMask?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#subnet_mask_variable TransportWanVpnInterfaceEthernetFeature#subnet_mask_variable}
  */
  readonly subnetMaskVariable?: string;
}

export function transportWanVpnInterfaceEthernetFeatureIpv4SecondaryAddressesToTerraform(struct?: TransportWanVpnInterfaceEthernetFeatureIpv4SecondaryAddresses | cdktf.IResolvable): any {
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


export function transportWanVpnInterfaceEthernetFeatureIpv4SecondaryAddressesToHclTerraform(struct?: TransportWanVpnInterfaceEthernetFeatureIpv4SecondaryAddresses | cdktf.IResolvable): any {
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

export class TransportWanVpnInterfaceEthernetFeatureIpv4SecondaryAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TransportWanVpnInterfaceEthernetFeatureIpv4SecondaryAddresses | cdktf.IResolvable | undefined {
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

  public set internalValue(value: TransportWanVpnInterfaceEthernetFeatureIpv4SecondaryAddresses | cdktf.IResolvable | undefined) {
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

export class TransportWanVpnInterfaceEthernetFeatureIpv4SecondaryAddressesList extends cdktf.ComplexList {
  public internalValue? : TransportWanVpnInterfaceEthernetFeatureIpv4SecondaryAddresses[] | cdktf.IResolvable

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
  public get(index: number): TransportWanVpnInterfaceEthernetFeatureIpv4SecondaryAddressesOutputReference {
    return new TransportWanVpnInterfaceEthernetFeatureIpv4SecondaryAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TransportWanVpnInterfaceEthernetFeatureIpv6DhcpSecondaryAddress {
  /**
  * IPv6 Address Secondary
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#address TransportWanVpnInterfaceEthernetFeature#address}
  */
  readonly address?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#address_variable TransportWanVpnInterfaceEthernetFeature#address_variable}
  */
  readonly addressVariable?: string;
}

export function transportWanVpnInterfaceEthernetFeatureIpv6DhcpSecondaryAddressToTerraform(struct?: TransportWanVpnInterfaceEthernetFeatureIpv6DhcpSecondaryAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    address_variable: cdktf.stringToTerraform(struct!.addressVariable),
  }
}


export function transportWanVpnInterfaceEthernetFeatureIpv6DhcpSecondaryAddressToHclTerraform(struct?: TransportWanVpnInterfaceEthernetFeatureIpv6DhcpSecondaryAddress | cdktf.IResolvable): any {
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

export class TransportWanVpnInterfaceEthernetFeatureIpv6DhcpSecondaryAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TransportWanVpnInterfaceEthernetFeatureIpv6DhcpSecondaryAddress | cdktf.IResolvable | undefined {
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

  public set internalValue(value: TransportWanVpnInterfaceEthernetFeatureIpv6DhcpSecondaryAddress | cdktf.IResolvable | undefined) {
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

export class TransportWanVpnInterfaceEthernetFeatureIpv6DhcpSecondaryAddressList extends cdktf.ComplexList {
  public internalValue? : TransportWanVpnInterfaceEthernetFeatureIpv6DhcpSecondaryAddress[] | cdktf.IResolvable

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
  public get(index: number): TransportWanVpnInterfaceEthernetFeatureIpv6DhcpSecondaryAddressOutputReference {
    return new TransportWanVpnInterfaceEthernetFeatureIpv6DhcpSecondaryAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TransportWanVpnInterfaceEthernetFeatureIpv6SecondaryAddresses {
  /**
  * IPv6 Address Secondary
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#address TransportWanVpnInterfaceEthernetFeature#address}
  */
  readonly address?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#address_variable TransportWanVpnInterfaceEthernetFeature#address_variable}
  */
  readonly addressVariable?: string;
}

export function transportWanVpnInterfaceEthernetFeatureIpv6SecondaryAddressesToTerraform(struct?: TransportWanVpnInterfaceEthernetFeatureIpv6SecondaryAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    address_variable: cdktf.stringToTerraform(struct!.addressVariable),
  }
}


export function transportWanVpnInterfaceEthernetFeatureIpv6SecondaryAddressesToHclTerraform(struct?: TransportWanVpnInterfaceEthernetFeatureIpv6SecondaryAddresses | cdktf.IResolvable): any {
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

export class TransportWanVpnInterfaceEthernetFeatureIpv6SecondaryAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TransportWanVpnInterfaceEthernetFeatureIpv6SecondaryAddresses | cdktf.IResolvable | undefined {
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

  public set internalValue(value: TransportWanVpnInterfaceEthernetFeatureIpv6SecondaryAddresses | cdktf.IResolvable | undefined) {
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

export class TransportWanVpnInterfaceEthernetFeatureIpv6SecondaryAddressesList extends cdktf.ComplexList {
  public internalValue? : TransportWanVpnInterfaceEthernetFeatureIpv6SecondaryAddresses[] | cdktf.IResolvable

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
  public get(index: number): TransportWanVpnInterfaceEthernetFeatureIpv6SecondaryAddressesOutputReference {
    return new TransportWanVpnInterfaceEthernetFeatureIpv6SecondaryAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TransportWanVpnInterfaceEthernetFeatureNewStaticNats {
  /**
  * Direction of static NAT translation
  *   - Choices: `inside`, `outside`
  *   - Default value: `inside`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#direction TransportWanVpnInterfaceEthernetFeature#direction}
  */
  readonly direction?: string;
  /**
  * Source IP address to be translated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#source_ip TransportWanVpnInterfaceEthernetFeature#source_ip}
  */
  readonly sourceIp?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#source_ip_variable TransportWanVpnInterfaceEthernetFeature#source_ip_variable}
  */
  readonly sourceIpVariable?: string;
  /**
  * Source VPN ID
  *   - Range: `0`-`65530`
  *   - Default value: `0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#source_vpn TransportWanVpnInterfaceEthernetFeature#source_vpn}
  */
  readonly sourceVpn?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#source_vpn_variable TransportWanVpnInterfaceEthernetFeature#source_vpn_variable}
  */
  readonly sourceVpnVariable?: string;
  /**
  * Statically translated source IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#translated_ip TransportWanVpnInterfaceEthernetFeature#translated_ip}
  */
  readonly translatedIp?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#translated_ip_variable TransportWanVpnInterfaceEthernetFeature#translated_ip_variable}
  */
  readonly translatedIpVariable?: string;
}

export function transportWanVpnInterfaceEthernetFeatureNewStaticNatsToTerraform(struct?: TransportWanVpnInterfaceEthernetFeatureNewStaticNats | cdktf.IResolvable): any {
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
    translated_ip: cdktf.stringToTerraform(struct!.translatedIp),
    translated_ip_variable: cdktf.stringToTerraform(struct!.translatedIpVariable),
  }
}


export function transportWanVpnInterfaceEthernetFeatureNewStaticNatsToHclTerraform(struct?: TransportWanVpnInterfaceEthernetFeatureNewStaticNats | cdktf.IResolvable): any {
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
    translated_ip: {
      value: cdktf.stringToHclTerraform(struct!.translatedIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    translated_ip_variable: {
      value: cdktf.stringToHclTerraform(struct!.translatedIpVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TransportWanVpnInterfaceEthernetFeatureNewStaticNatsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TransportWanVpnInterfaceEthernetFeatureNewStaticNats | cdktf.IResolvable | undefined {
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
    if (this._translatedIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.translatedIp = this._translatedIp;
    }
    if (this._translatedIpVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.translatedIpVariable = this._translatedIpVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransportWanVpnInterfaceEthernetFeatureNewStaticNats | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._direction = undefined;
      this._sourceIp = undefined;
      this._sourceIpVariable = undefined;
      this._sourceVpn = undefined;
      this._sourceVpnVariable = undefined;
      this._translatedIp = undefined;
      this._translatedIpVariable = undefined;
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
      this._translatedIp = value.translatedIp;
      this._translatedIpVariable = value.translatedIpVariable;
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

  // translated_ip - computed: false, optional: true, required: false
  private _translatedIp?: string; 
  public get translatedIp() {
    return this.getStringAttribute('translated_ip');
  }
  public set translatedIp(value: string) {
    this._translatedIp = value;
  }
  public resetTranslatedIp() {
    this._translatedIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get translatedIpInput() {
    return this._translatedIp;
  }

  // translated_ip_variable - computed: false, optional: true, required: false
  private _translatedIpVariable?: string; 
  public get translatedIpVariable() {
    return this.getStringAttribute('translated_ip_variable');
  }
  public set translatedIpVariable(value: string) {
    this._translatedIpVariable = value;
  }
  public resetTranslatedIpVariable() {
    this._translatedIpVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get translatedIpVariableInput() {
    return this._translatedIpVariable;
  }
}

export class TransportWanVpnInterfaceEthernetFeatureNewStaticNatsList extends cdktf.ComplexList {
  public internalValue? : TransportWanVpnInterfaceEthernetFeatureNewStaticNats[] | cdktf.IResolvable

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
  public get(index: number): TransportWanVpnInterfaceEthernetFeatureNewStaticNatsOutputReference {
    return new TransportWanVpnInterfaceEthernetFeatureNewStaticNatsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TransportWanVpnInterfaceEthernetFeatureStaticNat66 {
  /**
  * Source Prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#source_prefix TransportWanVpnInterfaceEthernetFeature#source_prefix}
  */
  readonly sourcePrefix?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#source_prefix_variable TransportWanVpnInterfaceEthernetFeature#source_prefix_variable}
  */
  readonly sourcePrefixVariable?: string;
  /**
  * Source VPN ID
  *   - Range: `0`-`65530`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#source_vpn_id TransportWanVpnInterfaceEthernetFeature#source_vpn_id}
  */
  readonly sourceVpnId?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#source_vpn_id_variable TransportWanVpnInterfaceEthernetFeature#source_vpn_id_variable}
  */
  readonly sourceVpnIdVariable?: string;
  /**
  * Translated Source Prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#translated_source_prefix TransportWanVpnInterfaceEthernetFeature#translated_source_prefix}
  */
  readonly translatedSourcePrefix?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#translated_source_prefix_variable TransportWanVpnInterfaceEthernetFeature#translated_source_prefix_variable}
  */
  readonly translatedSourcePrefixVariable?: string;
}

export function transportWanVpnInterfaceEthernetFeatureStaticNat66ToTerraform(struct?: TransportWanVpnInterfaceEthernetFeatureStaticNat66 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source_prefix: cdktf.stringToTerraform(struct!.sourcePrefix),
    source_prefix_variable: cdktf.stringToTerraform(struct!.sourcePrefixVariable),
    source_vpn_id: cdktf.numberToTerraform(struct!.sourceVpnId),
    source_vpn_id_variable: cdktf.stringToTerraform(struct!.sourceVpnIdVariable),
    translated_source_prefix: cdktf.stringToTerraform(struct!.translatedSourcePrefix),
    translated_source_prefix_variable: cdktf.stringToTerraform(struct!.translatedSourcePrefixVariable),
  }
}


export function transportWanVpnInterfaceEthernetFeatureStaticNat66ToHclTerraform(struct?: TransportWanVpnInterfaceEthernetFeatureStaticNat66 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source_prefix: {
      value: cdktf.stringToHclTerraform(struct!.sourcePrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_prefix_variable: {
      value: cdktf.stringToHclTerraform(struct!.sourcePrefixVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_vpn_id: {
      value: cdktf.numberToHclTerraform(struct!.sourceVpnId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    source_vpn_id_variable: {
      value: cdktf.stringToHclTerraform(struct!.sourceVpnIdVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    translated_source_prefix: {
      value: cdktf.stringToHclTerraform(struct!.translatedSourcePrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    translated_source_prefix_variable: {
      value: cdktf.stringToHclTerraform(struct!.translatedSourcePrefixVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TransportWanVpnInterfaceEthernetFeatureStaticNat66OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TransportWanVpnInterfaceEthernetFeatureStaticNat66 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sourcePrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePrefix = this._sourcePrefix;
    }
    if (this._sourcePrefixVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePrefixVariable = this._sourcePrefixVariable;
    }
    if (this._sourceVpnId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceVpnId = this._sourceVpnId;
    }
    if (this._sourceVpnIdVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceVpnIdVariable = this._sourceVpnIdVariable;
    }
    if (this._translatedSourcePrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.translatedSourcePrefix = this._translatedSourcePrefix;
    }
    if (this._translatedSourcePrefixVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.translatedSourcePrefixVariable = this._translatedSourcePrefixVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransportWanVpnInterfaceEthernetFeatureStaticNat66 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sourcePrefix = undefined;
      this._sourcePrefixVariable = undefined;
      this._sourceVpnId = undefined;
      this._sourceVpnIdVariable = undefined;
      this._translatedSourcePrefix = undefined;
      this._translatedSourcePrefixVariable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sourcePrefix = value.sourcePrefix;
      this._sourcePrefixVariable = value.sourcePrefixVariable;
      this._sourceVpnId = value.sourceVpnId;
      this._sourceVpnIdVariable = value.sourceVpnIdVariable;
      this._translatedSourcePrefix = value.translatedSourcePrefix;
      this._translatedSourcePrefixVariable = value.translatedSourcePrefixVariable;
    }
  }

  // source_prefix - computed: false, optional: true, required: false
  private _sourcePrefix?: string; 
  public get sourcePrefix() {
    return this.getStringAttribute('source_prefix');
  }
  public set sourcePrefix(value: string) {
    this._sourcePrefix = value;
  }
  public resetSourcePrefix() {
    this._sourcePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePrefixInput() {
    return this._sourcePrefix;
  }

  // source_prefix_variable - computed: false, optional: true, required: false
  private _sourcePrefixVariable?: string; 
  public get sourcePrefixVariable() {
    return this.getStringAttribute('source_prefix_variable');
  }
  public set sourcePrefixVariable(value: string) {
    this._sourcePrefixVariable = value;
  }
  public resetSourcePrefixVariable() {
    this._sourcePrefixVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePrefixVariableInput() {
    return this._sourcePrefixVariable;
  }

  // source_vpn_id - computed: false, optional: true, required: false
  private _sourceVpnId?: number; 
  public get sourceVpnId() {
    return this.getNumberAttribute('source_vpn_id');
  }
  public set sourceVpnId(value: number) {
    this._sourceVpnId = value;
  }
  public resetSourceVpnId() {
    this._sourceVpnId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceVpnIdInput() {
    return this._sourceVpnId;
  }

  // source_vpn_id_variable - computed: false, optional: true, required: false
  private _sourceVpnIdVariable?: string; 
  public get sourceVpnIdVariable() {
    return this.getStringAttribute('source_vpn_id_variable');
  }
  public set sourceVpnIdVariable(value: string) {
    this._sourceVpnIdVariable = value;
  }
  public resetSourceVpnIdVariable() {
    this._sourceVpnIdVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceVpnIdVariableInput() {
    return this._sourceVpnIdVariable;
  }

  // translated_source_prefix - computed: false, optional: true, required: false
  private _translatedSourcePrefix?: string; 
  public get translatedSourcePrefix() {
    return this.getStringAttribute('translated_source_prefix');
  }
  public set translatedSourcePrefix(value: string) {
    this._translatedSourcePrefix = value;
  }
  public resetTranslatedSourcePrefix() {
    this._translatedSourcePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get translatedSourcePrefixInput() {
    return this._translatedSourcePrefix;
  }

  // translated_source_prefix_variable - computed: false, optional: true, required: false
  private _translatedSourcePrefixVariable?: string; 
  public get translatedSourcePrefixVariable() {
    return this.getStringAttribute('translated_source_prefix_variable');
  }
  public set translatedSourcePrefixVariable(value: string) {
    this._translatedSourcePrefixVariable = value;
  }
  public resetTranslatedSourcePrefixVariable() {
    this._translatedSourcePrefixVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get translatedSourcePrefixVariableInput() {
    return this._translatedSourcePrefixVariable;
  }
}

export class TransportWanVpnInterfaceEthernetFeatureStaticNat66List extends cdktf.ComplexList {
  public internalValue? : TransportWanVpnInterfaceEthernetFeatureStaticNat66[] | cdktf.IResolvable

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
  public get(index: number): TransportWanVpnInterfaceEthernetFeatureStaticNat66OutputReference {
    return new TransportWanVpnInterfaceEthernetFeatureStaticNat66OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TransportWanVpnInterfaceEthernetFeatureTunnelInterfaceEncapsulations {
  /**
  * Encapsulation
  *   - Choices: `gre`, `ipsec`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#encapsulation TransportWanVpnInterfaceEthernetFeature#encapsulation}
  */
  readonly encapsulation?: string;
  /**
  * Set preference for TLOC
  *   - Range: `0`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#preference TransportWanVpnInterfaceEthernetFeature#preference}
  */
  readonly preference?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#preference_variable TransportWanVpnInterfaceEthernetFeature#preference_variable}
  */
  readonly preferenceVariable?: string;
  /**
  * Set weight for TLOC
  *   - Range: `1`-`255`
  *   - Default value: `1`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#weight TransportWanVpnInterfaceEthernetFeature#weight}
  */
  readonly weight?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#weight_variable TransportWanVpnInterfaceEthernetFeature#weight_variable}
  */
  readonly weightVariable?: string;
}

export function transportWanVpnInterfaceEthernetFeatureTunnelInterfaceEncapsulationsToTerraform(struct?: TransportWanVpnInterfaceEthernetFeatureTunnelInterfaceEncapsulations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    encapsulation: cdktf.stringToTerraform(struct!.encapsulation),
    preference: cdktf.numberToTerraform(struct!.preference),
    preference_variable: cdktf.stringToTerraform(struct!.preferenceVariable),
    weight: cdktf.numberToTerraform(struct!.weight),
    weight_variable: cdktf.stringToTerraform(struct!.weightVariable),
  }
}


export function transportWanVpnInterfaceEthernetFeatureTunnelInterfaceEncapsulationsToHclTerraform(struct?: TransportWanVpnInterfaceEthernetFeatureTunnelInterfaceEncapsulations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    encapsulation: {
      value: cdktf.stringToHclTerraform(struct!.encapsulation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    preference: {
      value: cdktf.numberToHclTerraform(struct!.preference),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    preference_variable: {
      value: cdktf.stringToHclTerraform(struct!.preferenceVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    weight_variable: {
      value: cdktf.stringToHclTerraform(struct!.weightVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TransportWanVpnInterfaceEthernetFeatureTunnelInterfaceEncapsulationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TransportWanVpnInterfaceEthernetFeatureTunnelInterfaceEncapsulations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encapsulation !== undefined) {
      hasAnyValues = true;
      internalValueResult.encapsulation = this._encapsulation;
    }
    if (this._preference !== undefined) {
      hasAnyValues = true;
      internalValueResult.preference = this._preference;
    }
    if (this._preferenceVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferenceVariable = this._preferenceVariable;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    if (this._weightVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.weightVariable = this._weightVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransportWanVpnInterfaceEthernetFeatureTunnelInterfaceEncapsulations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._encapsulation = undefined;
      this._preference = undefined;
      this._preferenceVariable = undefined;
      this._weight = undefined;
      this._weightVariable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._encapsulation = value.encapsulation;
      this._preference = value.preference;
      this._preferenceVariable = value.preferenceVariable;
      this._weight = value.weight;
      this._weightVariable = value.weightVariable;
    }
  }

  // encapsulation - computed: false, optional: true, required: false
  private _encapsulation?: string; 
  public get encapsulation() {
    return this.getStringAttribute('encapsulation');
  }
  public set encapsulation(value: string) {
    this._encapsulation = value;
  }
  public resetEncapsulation() {
    this._encapsulation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encapsulationInput() {
    return this._encapsulation;
  }

  // preference - computed: false, optional: true, required: false
  private _preference?: number; 
  public get preference() {
    return this.getNumberAttribute('preference');
  }
  public set preference(value: number) {
    this._preference = value;
  }
  public resetPreference() {
    this._preference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferenceInput() {
    return this._preference;
  }

  // preference_variable - computed: false, optional: true, required: false
  private _preferenceVariable?: string; 
  public get preferenceVariable() {
    return this.getStringAttribute('preference_variable');
  }
  public set preferenceVariable(value: string) {
    this._preferenceVariable = value;
  }
  public resetPreferenceVariable() {
    this._preferenceVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferenceVariableInput() {
    return this._preferenceVariable;
  }

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }

  // weight_variable - computed: false, optional: true, required: false
  private _weightVariable?: string; 
  public get weightVariable() {
    return this.getStringAttribute('weight_variable');
  }
  public set weightVariable(value: string) {
    this._weightVariable = value;
  }
  public resetWeightVariable() {
    this._weightVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightVariableInput() {
    return this._weightVariable;
  }
}

export class TransportWanVpnInterfaceEthernetFeatureTunnelInterfaceEncapsulationsList extends cdktf.ComplexList {
  public internalValue? : TransportWanVpnInterfaceEthernetFeatureTunnelInterfaceEncapsulations[] | cdktf.IResolvable

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
  public get(index: number): TransportWanVpnInterfaceEthernetFeatureTunnelInterfaceEncapsulationsOutputReference {
    return new TransportWanVpnInterfaceEthernetFeatureTunnelInterfaceEncapsulationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature sdwan_transport_wan_vpn_interface_ethernet_feature}
*/
export class TransportWanVpnInterfaceEthernetFeature extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_transport_wan_vpn_interface_ethernet_feature";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TransportWanVpnInterfaceEthernetFeature resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TransportWanVpnInterfaceEthernetFeature to import
  * @param importFromId The id of the existing TransportWanVpnInterfaceEthernetFeature that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TransportWanVpnInterfaceEthernetFeature to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_transport_wan_vpn_interface_ethernet_feature", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_ethernet_feature sdwan_transport_wan_vpn_interface_ethernet_feature} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TransportWanVpnInterfaceEthernetFeatureConfig
  */
  public constructor(scope: Construct, id: string, config: TransportWanVpnInterfaceEthernetFeatureConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_transport_wan_vpn_interface_ethernet_feature',
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
    this._autoDetectBandwidth = config.autoDetectBandwidth;
    this._autoDetectBandwidthVariable = config.autoDetectBandwidthVariable;
    this._autonegotiate = config.autonegotiate;
    this._autonegotiateVariable = config.autonegotiateVariable;
    this._bandwidthDownstream = config.bandwidthDownstream;
    this._bandwidthDownstreamVariable = config.bandwidthDownstreamVariable;
    this._bandwidthUpstream = config.bandwidthUpstream;
    this._bandwidthUpstreamVariable = config.bandwidthUpstreamVariable;
    this._blockNonSourceIp = config.blockNonSourceIp;
    this._blockNonSourceIpVariable = config.blockNonSourceIpVariable;
    this._description = config.description;
    this._duplex = config.duplex;
    this._duplexVariable = config.duplexVariable;
    this._enableDhcpv6 = config.enableDhcpv6;
    this._featureProfileId = config.featureProfileId;
    this._greTunnelSourceIp = config.greTunnelSourceIp;
    this._greTunnelSourceIpVariable = config.greTunnelSourceIpVariable;
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
    this._iperfServer = config.iperfServer;
    this._iperfServerVariable = config.iperfServerVariable;
    this._ipv4Address = config.ipv4Address;
    this._ipv4AddressVariable = config.ipv4AddressVariable;
    this._ipv4ConfigurationType = config.ipv4ConfigurationType;
    this._ipv4DhcpDistance = config.ipv4DhcpDistance;
    this._ipv4DhcpDistanceVariable = config.ipv4DhcpDistanceVariable;
    this._ipv4DhcpHelper = config.ipv4DhcpHelper;
    this._ipv4DhcpHelperVariable = config.ipv4DhcpHelperVariable;
    this._ipv4SecondaryAddresses.internalValue = config.ipv4SecondaryAddresses;
    this._ipv4SubnetMask = config.ipv4SubnetMask;
    this._ipv4SubnetMaskVariable = config.ipv4SubnetMaskVariable;
    this._ipv6Address = config.ipv6Address;
    this._ipv6AddressVariable = config.ipv6AddressVariable;
    this._ipv6ConfigurationType = config.ipv6ConfigurationType;
    this._ipv6DhcpSecondaryAddress.internalValue = config.ipv6DhcpSecondaryAddress;
    this._ipv6SecondaryAddresses.internalValue = config.ipv6SecondaryAddresses;
    this._loadInterval = config.loadInterval;
    this._loadIntervalVariable = config.loadIntervalVariable;
    this._macAddress = config.macAddress;
    this._macAddressVariable = config.macAddressVariable;
    this._mediaType = config.mediaType;
    this._mediaTypeVariable = config.mediaTypeVariable;
    this._name = config.name;
    this._nat64 = config.nat64;
    this._nat66 = config.nat66;
    this._natIpv4 = config.natIpv4;
    this._natIpv4Variable = config.natIpv4Variable;
    this._natIpv6 = config.natIpv6;
    this._natIpv6Variable = config.natIpv6Variable;
    this._natLoopback = config.natLoopback;
    this._natLoopbackVariable = config.natLoopbackVariable;
    this._natOverload = config.natOverload;
    this._natOverloadVariable = config.natOverloadVariable;
    this._natPrefixLength = config.natPrefixLength;
    this._natPrefixLengthVariable = config.natPrefixLengthVariable;
    this._natRangeEnd = config.natRangeEnd;
    this._natRangeEndVariable = config.natRangeEndVariable;
    this._natRangeStart = config.natRangeStart;
    this._natRangeStartVariable = config.natRangeStartVariable;
    this._natTcpTimeout = config.natTcpTimeout;
    this._natTcpTimeoutVariable = config.natTcpTimeoutVariable;
    this._natType = config.natType;
    this._natTypeVariable = config.natTypeVariable;
    this._natUdpTimeout = config.natUdpTimeout;
    this._natUdpTimeoutVariable = config.natUdpTimeoutVariable;
    this._newStaticNats.internalValue = config.newStaticNats;
    this._perTunnelQos = config.perTunnelQos;
    this._perTunnelQosVariable = config.perTunnelQosVariable;
    this._qosAdaptive = config.qosAdaptive;
    this._qosAdaptiveBandwidthDownstream = config.qosAdaptiveBandwidthDownstream;
    this._qosAdaptiveBandwidthUpstream = config.qosAdaptiveBandwidthUpstream;
    this._qosAdaptiveDefaultDownstream = config.qosAdaptiveDefaultDownstream;
    this._qosAdaptiveDefaultDownstreamVariable = config.qosAdaptiveDefaultDownstreamVariable;
    this._qosAdaptiveDefaultUpstream = config.qosAdaptiveDefaultUpstream;
    this._qosAdaptiveDefaultUpstreamVariable = config.qosAdaptiveDefaultUpstreamVariable;
    this._qosAdaptiveMaxDownstream = config.qosAdaptiveMaxDownstream;
    this._qosAdaptiveMaxDownstreamVariable = config.qosAdaptiveMaxDownstreamVariable;
    this._qosAdaptiveMaxUpstream = config.qosAdaptiveMaxUpstream;
    this._qosAdaptiveMaxUpstreamVariable = config.qosAdaptiveMaxUpstreamVariable;
    this._qosAdaptiveMinDownstream = config.qosAdaptiveMinDownstream;
    this._qosAdaptiveMinDownstreamVariable = config.qosAdaptiveMinDownstreamVariable;
    this._qosAdaptiveMinUpstream = config.qosAdaptiveMinUpstream;
    this._qosAdaptiveMinUpstreamVariable = config.qosAdaptiveMinUpstreamVariable;
    this._qosAdaptivePeriod = config.qosAdaptivePeriod;
    this._qosAdaptivePeriodVariable = config.qosAdaptivePeriodVariable;
    this._qosShapingRate = config.qosShapingRate;
    this._qosShapingRateVariable = config.qosShapingRateVariable;
    this._serviceProvider = config.serviceProvider;
    this._serviceProviderVariable = config.serviceProviderVariable;
    this._shutdown = config.shutdown;
    this._shutdownVariable = config.shutdownVariable;
    this._speed = config.speed;
    this._speedVariable = config.speedVariable;
    this._staticNat66.internalValue = config.staticNat66;
    this._tcpMss = config.tcpMss;
    this._tcpMssVariable = config.tcpMssVariable;
    this._tlocExtension = config.tlocExtension;
    this._tlocExtensionVariable = config.tlocExtensionVariable;
    this._tracker = config.tracker;
    this._trackerVariable = config.trackerVariable;
    this._transportWanVpnFeatureId = config.transportWanVpnFeatureId;
    this._tunnelBandwidthPercent = config.tunnelBandwidthPercent;
    this._tunnelBandwidthPercentVariable = config.tunnelBandwidthPercentVariable;
    this._tunnelInterface = config.tunnelInterface;
    this._tunnelInterfaceAllowAll = config.tunnelInterfaceAllowAll;
    this._tunnelInterfaceAllowAllVariable = config.tunnelInterfaceAllowAllVariable;
    this._tunnelInterfaceAllowBfd = config.tunnelInterfaceAllowBfd;
    this._tunnelInterfaceAllowBfdVariable = config.tunnelInterfaceAllowBfdVariable;
    this._tunnelInterfaceAllowBgp = config.tunnelInterfaceAllowBgp;
    this._tunnelInterfaceAllowBgpVariable = config.tunnelInterfaceAllowBgpVariable;
    this._tunnelInterfaceAllowDhcp = config.tunnelInterfaceAllowDhcp;
    this._tunnelInterfaceAllowDhcpVariable = config.tunnelInterfaceAllowDhcpVariable;
    this._tunnelInterfaceAllowDns = config.tunnelInterfaceAllowDns;
    this._tunnelInterfaceAllowDnsVariable = config.tunnelInterfaceAllowDnsVariable;
    this._tunnelInterfaceAllowHttps = config.tunnelInterfaceAllowHttps;
    this._tunnelInterfaceAllowHttpsVariable = config.tunnelInterfaceAllowHttpsVariable;
    this._tunnelInterfaceAllowIcmp = config.tunnelInterfaceAllowIcmp;
    this._tunnelInterfaceAllowIcmpVariable = config.tunnelInterfaceAllowIcmpVariable;
    this._tunnelInterfaceAllowNetconf = config.tunnelInterfaceAllowNetconf;
    this._tunnelInterfaceAllowNetconfVariable = config.tunnelInterfaceAllowNetconfVariable;
    this._tunnelInterfaceAllowNtp = config.tunnelInterfaceAllowNtp;
    this._tunnelInterfaceAllowNtpVariable = config.tunnelInterfaceAllowNtpVariable;
    this._tunnelInterfaceAllowOspf = config.tunnelInterfaceAllowOspf;
    this._tunnelInterfaceAllowOspfVariable = config.tunnelInterfaceAllowOspfVariable;
    this._tunnelInterfaceAllowSnmp = config.tunnelInterfaceAllowSnmp;
    this._tunnelInterfaceAllowSnmpVariable = config.tunnelInterfaceAllowSnmpVariable;
    this._tunnelInterfaceAllowSsh = config.tunnelInterfaceAllowSsh;
    this._tunnelInterfaceAllowSshVariable = config.tunnelInterfaceAllowSshVariable;
    this._tunnelInterfaceAllowStun = config.tunnelInterfaceAllowStun;
    this._tunnelInterfaceAllowStunVariable = config.tunnelInterfaceAllowStunVariable;
    this._tunnelInterfaceBindLoopbackTunnel = config.tunnelInterfaceBindLoopbackTunnel;
    this._tunnelInterfaceBindLoopbackTunnelVariable = config.tunnelInterfaceBindLoopbackTunnelVariable;
    this._tunnelInterfaceBorder = config.tunnelInterfaceBorder;
    this._tunnelInterfaceBorderVariable = config.tunnelInterfaceBorderVariable;
    this._tunnelInterfaceCarrier = config.tunnelInterfaceCarrier;
    this._tunnelInterfaceCarrierVariable = config.tunnelInterfaceCarrierVariable;
    this._tunnelInterfaceClearDontFragment = config.tunnelInterfaceClearDontFragment;
    this._tunnelInterfaceClearDontFragmentVariable = config.tunnelInterfaceClearDontFragmentVariable;
    this._tunnelInterfaceColor = config.tunnelInterfaceColor;
    this._tunnelInterfaceColorRestrict = config.tunnelInterfaceColorRestrict;
    this._tunnelInterfaceColorRestrictVariable = config.tunnelInterfaceColorRestrictVariable;
    this._tunnelInterfaceColorVariable = config.tunnelInterfaceColorVariable;
    this._tunnelInterfaceCtsSgtPropagation = config.tunnelInterfaceCtsSgtPropagation;
    this._tunnelInterfaceCtsSgtPropagationVariable = config.tunnelInterfaceCtsSgtPropagationVariable;
    this._tunnelInterfaceEncapsulations.internalValue = config.tunnelInterfaceEncapsulations;
    this._tunnelInterfaceExcludeControllerGroupList = config.tunnelInterfaceExcludeControllerGroupList;
    this._tunnelInterfaceExcludeControllerGroupListVariable = config.tunnelInterfaceExcludeControllerGroupListVariable;
    this._tunnelInterfaceGreTunnelDestinationIp = config.tunnelInterfaceGreTunnelDestinationIp;
    this._tunnelInterfaceGreTunnelDestinationIpVariable = config.tunnelInterfaceGreTunnelDestinationIpVariable;
    this._tunnelInterfaceGroups = config.tunnelInterfaceGroups;
    this._tunnelInterfaceGroupsVariable = config.tunnelInterfaceGroupsVariable;
    this._tunnelInterfaceHelloInterval = config.tunnelInterfaceHelloInterval;
    this._tunnelInterfaceHelloIntervalVariable = config.tunnelInterfaceHelloIntervalVariable;
    this._tunnelInterfaceHelloTolerance = config.tunnelInterfaceHelloTolerance;
    this._tunnelInterfaceHelloToleranceVariable = config.tunnelInterfaceHelloToleranceVariable;
    this._tunnelInterfaceLastResortCircuit = config.tunnelInterfaceLastResortCircuit;
    this._tunnelInterfaceLastResortCircuitVariable = config.tunnelInterfaceLastResortCircuitVariable;
    this._tunnelInterfaceLowBandwidthLink = config.tunnelInterfaceLowBandwidthLink;
    this._tunnelInterfaceLowBandwidthLinkVariable = config.tunnelInterfaceLowBandwidthLinkVariable;
    this._tunnelInterfaceMaxControlConnections = config.tunnelInterfaceMaxControlConnections;
    this._tunnelInterfaceMaxControlConnectionsVariable = config.tunnelInterfaceMaxControlConnectionsVariable;
    this._tunnelInterfaceNatRefreshInterval = config.tunnelInterfaceNatRefreshInterval;
    this._tunnelInterfaceNatRefreshIntervalVariable = config.tunnelInterfaceNatRefreshIntervalVariable;
    this._tunnelInterfaceNetworkBroadcast = config.tunnelInterfaceNetworkBroadcast;
    this._tunnelInterfaceNetworkBroadcastVariable = config.tunnelInterfaceNetworkBroadcastVariable;
    this._tunnelInterfacePortHop = config.tunnelInterfacePortHop;
    this._tunnelInterfacePortHopVariable = config.tunnelInterfacePortHopVariable;
    this._tunnelInterfaceTunnelTcpMss = config.tunnelInterfaceTunnelTcpMss;
    this._tunnelInterfaceTunnelTcpMssVariable = config.tunnelInterfaceTunnelTcpMssVariable;
    this._tunnelInterfaceVbondAsStunServer = config.tunnelInterfaceVbondAsStunServer;
    this._tunnelInterfaceVbondAsStunServerVariable = config.tunnelInterfaceVbondAsStunServerVariable;
    this._tunnelInterfaceVmanageConnectionPreference = config.tunnelInterfaceVmanageConnectionPreference;
    this._tunnelInterfaceVmanageConnectionPreferenceVariable = config.tunnelInterfaceVmanageConnectionPreferenceVariable;
    this._tunnelQosMode = config.tunnelQosMode;
    this._tunnelQosModeVariable = config.tunnelQosModeVariable;
    this._xconnect = config.xconnect;
    this._xconnectVariable = config.xconnectVariable;
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
  private _arps = new TransportWanVpnInterfaceEthernetFeatureArpsList(this, "arps", false);
  public get arps() {
    return this._arps;
  }
  public putArps(value: TransportWanVpnInterfaceEthernetFeatureArps[] | cdktf.IResolvable) {
    this._arps.internalValue = value;
  }
  public resetArps() {
    this._arps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arpsInput() {
    return this._arps.internalValue;
  }

  // auto_detect_bandwidth - computed: false, optional: true, required: false
  private _autoDetectBandwidth?: boolean | cdktf.IResolvable; 
  public get autoDetectBandwidth() {
    return this.getBooleanAttribute('auto_detect_bandwidth');
  }
  public set autoDetectBandwidth(value: boolean | cdktf.IResolvable) {
    this._autoDetectBandwidth = value;
  }
  public resetAutoDetectBandwidth() {
    this._autoDetectBandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoDetectBandwidthInput() {
    return this._autoDetectBandwidth;
  }

  // auto_detect_bandwidth_variable - computed: false, optional: true, required: false
  private _autoDetectBandwidthVariable?: string; 
  public get autoDetectBandwidthVariable() {
    return this.getStringAttribute('auto_detect_bandwidth_variable');
  }
  public set autoDetectBandwidthVariable(value: string) {
    this._autoDetectBandwidthVariable = value;
  }
  public resetAutoDetectBandwidthVariable() {
    this._autoDetectBandwidthVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoDetectBandwidthVariableInput() {
    return this._autoDetectBandwidthVariable;
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

  // bandwidth_downstream - computed: false, optional: true, required: false
  private _bandwidthDownstream?: number; 
  public get bandwidthDownstream() {
    return this.getNumberAttribute('bandwidth_downstream');
  }
  public set bandwidthDownstream(value: number) {
    this._bandwidthDownstream = value;
  }
  public resetBandwidthDownstream() {
    this._bandwidthDownstream = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthDownstreamInput() {
    return this._bandwidthDownstream;
  }

  // bandwidth_downstream_variable - computed: false, optional: true, required: false
  private _bandwidthDownstreamVariable?: string; 
  public get bandwidthDownstreamVariable() {
    return this.getStringAttribute('bandwidth_downstream_variable');
  }
  public set bandwidthDownstreamVariable(value: string) {
    this._bandwidthDownstreamVariable = value;
  }
  public resetBandwidthDownstreamVariable() {
    this._bandwidthDownstreamVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthDownstreamVariableInput() {
    return this._bandwidthDownstreamVariable;
  }

  // bandwidth_upstream - computed: false, optional: true, required: false
  private _bandwidthUpstream?: number; 
  public get bandwidthUpstream() {
    return this.getNumberAttribute('bandwidth_upstream');
  }
  public set bandwidthUpstream(value: number) {
    this._bandwidthUpstream = value;
  }
  public resetBandwidthUpstream() {
    this._bandwidthUpstream = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthUpstreamInput() {
    return this._bandwidthUpstream;
  }

  // bandwidth_upstream_variable - computed: false, optional: true, required: false
  private _bandwidthUpstreamVariable?: string; 
  public get bandwidthUpstreamVariable() {
    return this.getStringAttribute('bandwidth_upstream_variable');
  }
  public set bandwidthUpstreamVariable(value: string) {
    this._bandwidthUpstreamVariable = value;
  }
  public resetBandwidthUpstreamVariable() {
    this._bandwidthUpstreamVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthUpstreamVariableInput() {
    return this._bandwidthUpstreamVariable;
  }

  // block_non_source_ip - computed: false, optional: true, required: false
  private _blockNonSourceIp?: boolean | cdktf.IResolvable; 
  public get blockNonSourceIp() {
    return this.getBooleanAttribute('block_non_source_ip');
  }
  public set blockNonSourceIp(value: boolean | cdktf.IResolvable) {
    this._blockNonSourceIp = value;
  }
  public resetBlockNonSourceIp() {
    this._blockNonSourceIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockNonSourceIpInput() {
    return this._blockNonSourceIp;
  }

  // block_non_source_ip_variable - computed: false, optional: true, required: false
  private _blockNonSourceIpVariable?: string; 
  public get blockNonSourceIpVariable() {
    return this.getStringAttribute('block_non_source_ip_variable');
  }
  public set blockNonSourceIpVariable(value: string) {
    this._blockNonSourceIpVariable = value;
  }
  public resetBlockNonSourceIpVariable() {
    this._blockNonSourceIpVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockNonSourceIpVariableInput() {
    return this._blockNonSourceIpVariable;
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

  // gre_tunnel_source_ip - computed: false, optional: true, required: false
  private _greTunnelSourceIp?: string; 
  public get greTunnelSourceIp() {
    return this.getStringAttribute('gre_tunnel_source_ip');
  }
  public set greTunnelSourceIp(value: string) {
    this._greTunnelSourceIp = value;
  }
  public resetGreTunnelSourceIp() {
    this._greTunnelSourceIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get greTunnelSourceIpInput() {
    return this._greTunnelSourceIp;
  }

  // gre_tunnel_source_ip_variable - computed: false, optional: true, required: false
  private _greTunnelSourceIpVariable?: string; 
  public get greTunnelSourceIpVariable() {
    return this.getStringAttribute('gre_tunnel_source_ip_variable');
  }
  public set greTunnelSourceIpVariable(value: string) {
    this._greTunnelSourceIpVariable = value;
  }
  public resetGreTunnelSourceIpVariable() {
    this._greTunnelSourceIpVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get greTunnelSourceIpVariableInput() {
    return this._greTunnelSourceIpVariable;
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

  // iperf_server - computed: false, optional: true, required: false
  private _iperfServer?: string; 
  public get iperfServer() {
    return this.getStringAttribute('iperf_server');
  }
  public set iperfServer(value: string) {
    this._iperfServer = value;
  }
  public resetIperfServer() {
    this._iperfServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iperfServerInput() {
    return this._iperfServer;
  }

  // iperf_server_variable - computed: false, optional: true, required: false
  private _iperfServerVariable?: string; 
  public get iperfServerVariable() {
    return this.getStringAttribute('iperf_server_variable');
  }
  public set iperfServerVariable(value: string) {
    this._iperfServerVariable = value;
  }
  public resetIperfServerVariable() {
    this._iperfServerVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iperfServerVariableInput() {
    return this._iperfServerVariable;
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

  // ipv4_secondary_addresses - computed: false, optional: true, required: false
  private _ipv4SecondaryAddresses = new TransportWanVpnInterfaceEthernetFeatureIpv4SecondaryAddressesList(this, "ipv4_secondary_addresses", false);
  public get ipv4SecondaryAddresses() {
    return this._ipv4SecondaryAddresses;
  }
  public putIpv4SecondaryAddresses(value: TransportWanVpnInterfaceEthernetFeatureIpv4SecondaryAddresses[] | cdktf.IResolvable) {
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

  // ipv6_dhcp_secondary_address - computed: false, optional: true, required: false
  private _ipv6DhcpSecondaryAddress = new TransportWanVpnInterfaceEthernetFeatureIpv6DhcpSecondaryAddressList(this, "ipv6_dhcp_secondary_address", false);
  public get ipv6DhcpSecondaryAddress() {
    return this._ipv6DhcpSecondaryAddress;
  }
  public putIpv6DhcpSecondaryAddress(value: TransportWanVpnInterfaceEthernetFeatureIpv6DhcpSecondaryAddress[] | cdktf.IResolvable) {
    this._ipv6DhcpSecondaryAddress.internalValue = value;
  }
  public resetIpv6DhcpSecondaryAddress() {
    this._ipv6DhcpSecondaryAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6DhcpSecondaryAddressInput() {
    return this._ipv6DhcpSecondaryAddress.internalValue;
  }

  // ipv6_secondary_addresses - computed: false, optional: true, required: false
  private _ipv6SecondaryAddresses = new TransportWanVpnInterfaceEthernetFeatureIpv6SecondaryAddressesList(this, "ipv6_secondary_addresses", false);
  public get ipv6SecondaryAddresses() {
    return this._ipv6SecondaryAddresses;
  }
  public putIpv6SecondaryAddresses(value: TransportWanVpnInterfaceEthernetFeatureIpv6SecondaryAddresses[] | cdktf.IResolvable) {
    this._ipv6SecondaryAddresses.internalValue = value;
  }
  public resetIpv6SecondaryAddresses() {
    this._ipv6SecondaryAddresses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6SecondaryAddressesInput() {
    return this._ipv6SecondaryAddresses.internalValue;
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

  // nat66 - computed: false, optional: true, required: false
  private _nat66?: boolean | cdktf.IResolvable; 
  public get nat66() {
    return this.getBooleanAttribute('nat66');
  }
  public set nat66(value: boolean | cdktf.IResolvable) {
    this._nat66 = value;
  }
  public resetNat66() {
    this._nat66 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nat66Input() {
    return this._nat66;
  }

  // nat_ipv4 - computed: false, optional: true, required: false
  private _natIpv4?: boolean | cdktf.IResolvable; 
  public get natIpv4() {
    return this.getBooleanAttribute('nat_ipv4');
  }
  public set natIpv4(value: boolean | cdktf.IResolvable) {
    this._natIpv4 = value;
  }
  public resetNatIpv4() {
    this._natIpv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natIpv4Input() {
    return this._natIpv4;
  }

  // nat_ipv4_variable - computed: false, optional: true, required: false
  private _natIpv4Variable?: string; 
  public get natIpv4Variable() {
    return this.getStringAttribute('nat_ipv4_variable');
  }
  public set natIpv4Variable(value: string) {
    this._natIpv4Variable = value;
  }
  public resetNatIpv4Variable() {
    this._natIpv4Variable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natIpv4VariableInput() {
    return this._natIpv4Variable;
  }

  // nat_ipv6 - computed: false, optional: true, required: false
  private _natIpv6?: boolean | cdktf.IResolvable; 
  public get natIpv6() {
    return this.getBooleanAttribute('nat_ipv6');
  }
  public set natIpv6(value: boolean | cdktf.IResolvable) {
    this._natIpv6 = value;
  }
  public resetNatIpv6() {
    this._natIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natIpv6Input() {
    return this._natIpv6;
  }

  // nat_ipv6_variable - computed: false, optional: true, required: false
  private _natIpv6Variable?: string; 
  public get natIpv6Variable() {
    return this.getStringAttribute('nat_ipv6_variable');
  }
  public set natIpv6Variable(value: string) {
    this._natIpv6Variable = value;
  }
  public resetNatIpv6Variable() {
    this._natIpv6Variable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natIpv6VariableInput() {
    return this._natIpv6Variable;
  }

  // nat_loopback - computed: false, optional: true, required: false
  private _natLoopback?: string; 
  public get natLoopback() {
    return this.getStringAttribute('nat_loopback');
  }
  public set natLoopback(value: string) {
    this._natLoopback = value;
  }
  public resetNatLoopback() {
    this._natLoopback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natLoopbackInput() {
    return this._natLoopback;
  }

  // nat_loopback_variable - computed: false, optional: true, required: false
  private _natLoopbackVariable?: string; 
  public get natLoopbackVariable() {
    return this.getStringAttribute('nat_loopback_variable');
  }
  public set natLoopbackVariable(value: string) {
    this._natLoopbackVariable = value;
  }
  public resetNatLoopbackVariable() {
    this._natLoopbackVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natLoopbackVariableInput() {
    return this._natLoopbackVariable;
  }

  // nat_overload - computed: false, optional: true, required: false
  private _natOverload?: boolean | cdktf.IResolvable; 
  public get natOverload() {
    return this.getBooleanAttribute('nat_overload');
  }
  public set natOverload(value: boolean | cdktf.IResolvable) {
    this._natOverload = value;
  }
  public resetNatOverload() {
    this._natOverload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natOverloadInput() {
    return this._natOverload;
  }

  // nat_overload_variable - computed: false, optional: true, required: false
  private _natOverloadVariable?: string; 
  public get natOverloadVariable() {
    return this.getStringAttribute('nat_overload_variable');
  }
  public set natOverloadVariable(value: string) {
    this._natOverloadVariable = value;
  }
  public resetNatOverloadVariable() {
    this._natOverloadVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natOverloadVariableInput() {
    return this._natOverloadVariable;
  }

  // nat_prefix_length - computed: false, optional: true, required: false
  private _natPrefixLength?: number; 
  public get natPrefixLength() {
    return this.getNumberAttribute('nat_prefix_length');
  }
  public set natPrefixLength(value: number) {
    this._natPrefixLength = value;
  }
  public resetNatPrefixLength() {
    this._natPrefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natPrefixLengthInput() {
    return this._natPrefixLength;
  }

  // nat_prefix_length_variable - computed: false, optional: true, required: false
  private _natPrefixLengthVariable?: string; 
  public get natPrefixLengthVariable() {
    return this.getStringAttribute('nat_prefix_length_variable');
  }
  public set natPrefixLengthVariable(value: string) {
    this._natPrefixLengthVariable = value;
  }
  public resetNatPrefixLengthVariable() {
    this._natPrefixLengthVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natPrefixLengthVariableInput() {
    return this._natPrefixLengthVariable;
  }

  // nat_range_end - computed: false, optional: true, required: false
  private _natRangeEnd?: string; 
  public get natRangeEnd() {
    return this.getStringAttribute('nat_range_end');
  }
  public set natRangeEnd(value: string) {
    this._natRangeEnd = value;
  }
  public resetNatRangeEnd() {
    this._natRangeEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natRangeEndInput() {
    return this._natRangeEnd;
  }

  // nat_range_end_variable - computed: false, optional: true, required: false
  private _natRangeEndVariable?: string; 
  public get natRangeEndVariable() {
    return this.getStringAttribute('nat_range_end_variable');
  }
  public set natRangeEndVariable(value: string) {
    this._natRangeEndVariable = value;
  }
  public resetNatRangeEndVariable() {
    this._natRangeEndVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natRangeEndVariableInput() {
    return this._natRangeEndVariable;
  }

  // nat_range_start - computed: false, optional: true, required: false
  private _natRangeStart?: string; 
  public get natRangeStart() {
    return this.getStringAttribute('nat_range_start');
  }
  public set natRangeStart(value: string) {
    this._natRangeStart = value;
  }
  public resetNatRangeStart() {
    this._natRangeStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natRangeStartInput() {
    return this._natRangeStart;
  }

  // nat_range_start_variable - computed: false, optional: true, required: false
  private _natRangeStartVariable?: string; 
  public get natRangeStartVariable() {
    return this.getStringAttribute('nat_range_start_variable');
  }
  public set natRangeStartVariable(value: string) {
    this._natRangeStartVariable = value;
  }
  public resetNatRangeStartVariable() {
    this._natRangeStartVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natRangeStartVariableInput() {
    return this._natRangeStartVariable;
  }

  // nat_tcp_timeout - computed: false, optional: true, required: false
  private _natTcpTimeout?: number; 
  public get natTcpTimeout() {
    return this.getNumberAttribute('nat_tcp_timeout');
  }
  public set natTcpTimeout(value: number) {
    this._natTcpTimeout = value;
  }
  public resetNatTcpTimeout() {
    this._natTcpTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natTcpTimeoutInput() {
    return this._natTcpTimeout;
  }

  // nat_tcp_timeout_variable - computed: false, optional: true, required: false
  private _natTcpTimeoutVariable?: string; 
  public get natTcpTimeoutVariable() {
    return this.getStringAttribute('nat_tcp_timeout_variable');
  }
  public set natTcpTimeoutVariable(value: string) {
    this._natTcpTimeoutVariable = value;
  }
  public resetNatTcpTimeoutVariable() {
    this._natTcpTimeoutVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natTcpTimeoutVariableInput() {
    return this._natTcpTimeoutVariable;
  }

  // nat_type - computed: false, optional: true, required: false
  private _natType?: string; 
  public get natType() {
    return this.getStringAttribute('nat_type');
  }
  public set natType(value: string) {
    this._natType = value;
  }
  public resetNatType() {
    this._natType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natTypeInput() {
    return this._natType;
  }

  // nat_type_variable - computed: false, optional: true, required: false
  private _natTypeVariable?: string; 
  public get natTypeVariable() {
    return this.getStringAttribute('nat_type_variable');
  }
  public set natTypeVariable(value: string) {
    this._natTypeVariable = value;
  }
  public resetNatTypeVariable() {
    this._natTypeVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natTypeVariableInput() {
    return this._natTypeVariable;
  }

  // nat_udp_timeout - computed: false, optional: true, required: false
  private _natUdpTimeout?: number; 
  public get natUdpTimeout() {
    return this.getNumberAttribute('nat_udp_timeout');
  }
  public set natUdpTimeout(value: number) {
    this._natUdpTimeout = value;
  }
  public resetNatUdpTimeout() {
    this._natUdpTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natUdpTimeoutInput() {
    return this._natUdpTimeout;
  }

  // nat_udp_timeout_variable - computed: false, optional: true, required: false
  private _natUdpTimeoutVariable?: string; 
  public get natUdpTimeoutVariable() {
    return this.getStringAttribute('nat_udp_timeout_variable');
  }
  public set natUdpTimeoutVariable(value: string) {
    this._natUdpTimeoutVariable = value;
  }
  public resetNatUdpTimeoutVariable() {
    this._natUdpTimeoutVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natUdpTimeoutVariableInput() {
    return this._natUdpTimeoutVariable;
  }

  // new_static_nats - computed: false, optional: true, required: false
  private _newStaticNats = new TransportWanVpnInterfaceEthernetFeatureNewStaticNatsList(this, "new_static_nats", false);
  public get newStaticNats() {
    return this._newStaticNats;
  }
  public putNewStaticNats(value: TransportWanVpnInterfaceEthernetFeatureNewStaticNats[] | cdktf.IResolvable) {
    this._newStaticNats.internalValue = value;
  }
  public resetNewStaticNats() {
    this._newStaticNats.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newStaticNatsInput() {
    return this._newStaticNats.internalValue;
  }

  // per_tunnel_qos - computed: false, optional: true, required: false
  private _perTunnelQos?: boolean | cdktf.IResolvable; 
  public get perTunnelQos() {
    return this.getBooleanAttribute('per_tunnel_qos');
  }
  public set perTunnelQos(value: boolean | cdktf.IResolvable) {
    this._perTunnelQos = value;
  }
  public resetPerTunnelQos() {
    this._perTunnelQos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perTunnelQosInput() {
    return this._perTunnelQos;
  }

  // per_tunnel_qos_variable - computed: false, optional: true, required: false
  private _perTunnelQosVariable?: string; 
  public get perTunnelQosVariable() {
    return this.getStringAttribute('per_tunnel_qos_variable');
  }
  public set perTunnelQosVariable(value: string) {
    this._perTunnelQosVariable = value;
  }
  public resetPerTunnelQosVariable() {
    this._perTunnelQosVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perTunnelQosVariableInput() {
    return this._perTunnelQosVariable;
  }

  // qos_adaptive - computed: false, optional: true, required: false
  private _qosAdaptive?: boolean | cdktf.IResolvable; 
  public get qosAdaptive() {
    return this.getBooleanAttribute('qos_adaptive');
  }
  public set qosAdaptive(value: boolean | cdktf.IResolvable) {
    this._qosAdaptive = value;
  }
  public resetQosAdaptive() {
    this._qosAdaptive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qosAdaptiveInput() {
    return this._qosAdaptive;
  }

  // qos_adaptive_bandwidth_downstream - computed: false, optional: true, required: false
  private _qosAdaptiveBandwidthDownstream?: boolean | cdktf.IResolvable; 
  public get qosAdaptiveBandwidthDownstream() {
    return this.getBooleanAttribute('qos_adaptive_bandwidth_downstream');
  }
  public set qosAdaptiveBandwidthDownstream(value: boolean | cdktf.IResolvable) {
    this._qosAdaptiveBandwidthDownstream = value;
  }
  public resetQosAdaptiveBandwidthDownstream() {
    this._qosAdaptiveBandwidthDownstream = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qosAdaptiveBandwidthDownstreamInput() {
    return this._qosAdaptiveBandwidthDownstream;
  }

  // qos_adaptive_bandwidth_upstream - computed: false, optional: true, required: false
  private _qosAdaptiveBandwidthUpstream?: boolean | cdktf.IResolvable; 
  public get qosAdaptiveBandwidthUpstream() {
    return this.getBooleanAttribute('qos_adaptive_bandwidth_upstream');
  }
  public set qosAdaptiveBandwidthUpstream(value: boolean | cdktf.IResolvable) {
    this._qosAdaptiveBandwidthUpstream = value;
  }
  public resetQosAdaptiveBandwidthUpstream() {
    this._qosAdaptiveBandwidthUpstream = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qosAdaptiveBandwidthUpstreamInput() {
    return this._qosAdaptiveBandwidthUpstream;
  }

  // qos_adaptive_default_downstream - computed: false, optional: true, required: false
  private _qosAdaptiveDefaultDownstream?: number; 
  public get qosAdaptiveDefaultDownstream() {
    return this.getNumberAttribute('qos_adaptive_default_downstream');
  }
  public set qosAdaptiveDefaultDownstream(value: number) {
    this._qosAdaptiveDefaultDownstream = value;
  }
  public resetQosAdaptiveDefaultDownstream() {
    this._qosAdaptiveDefaultDownstream = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qosAdaptiveDefaultDownstreamInput() {
    return this._qosAdaptiveDefaultDownstream;
  }

  // qos_adaptive_default_downstream_variable - computed: false, optional: true, required: false
  private _qosAdaptiveDefaultDownstreamVariable?: string; 
  public get qosAdaptiveDefaultDownstreamVariable() {
    return this.getStringAttribute('qos_adaptive_default_downstream_variable');
  }
  public set qosAdaptiveDefaultDownstreamVariable(value: string) {
    this._qosAdaptiveDefaultDownstreamVariable = value;
  }
  public resetQosAdaptiveDefaultDownstreamVariable() {
    this._qosAdaptiveDefaultDownstreamVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qosAdaptiveDefaultDownstreamVariableInput() {
    return this._qosAdaptiveDefaultDownstreamVariable;
  }

  // qos_adaptive_default_upstream - computed: false, optional: true, required: false
  private _qosAdaptiveDefaultUpstream?: number; 
  public get qosAdaptiveDefaultUpstream() {
    return this.getNumberAttribute('qos_adaptive_default_upstream');
  }
  public set qosAdaptiveDefaultUpstream(value: number) {
    this._qosAdaptiveDefaultUpstream = value;
  }
  public resetQosAdaptiveDefaultUpstream() {
    this._qosAdaptiveDefaultUpstream = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qosAdaptiveDefaultUpstreamInput() {
    return this._qosAdaptiveDefaultUpstream;
  }

  // qos_adaptive_default_upstream_variable - computed: false, optional: true, required: false
  private _qosAdaptiveDefaultUpstreamVariable?: string; 
  public get qosAdaptiveDefaultUpstreamVariable() {
    return this.getStringAttribute('qos_adaptive_default_upstream_variable');
  }
  public set qosAdaptiveDefaultUpstreamVariable(value: string) {
    this._qosAdaptiveDefaultUpstreamVariable = value;
  }
  public resetQosAdaptiveDefaultUpstreamVariable() {
    this._qosAdaptiveDefaultUpstreamVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qosAdaptiveDefaultUpstreamVariableInput() {
    return this._qosAdaptiveDefaultUpstreamVariable;
  }

  // qos_adaptive_max_downstream - computed: false, optional: true, required: false
  private _qosAdaptiveMaxDownstream?: number; 
  public get qosAdaptiveMaxDownstream() {
    return this.getNumberAttribute('qos_adaptive_max_downstream');
  }
  public set qosAdaptiveMaxDownstream(value: number) {
    this._qosAdaptiveMaxDownstream = value;
  }
  public resetQosAdaptiveMaxDownstream() {
    this._qosAdaptiveMaxDownstream = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qosAdaptiveMaxDownstreamInput() {
    return this._qosAdaptiveMaxDownstream;
  }

  // qos_adaptive_max_downstream_variable - computed: false, optional: true, required: false
  private _qosAdaptiveMaxDownstreamVariable?: string; 
  public get qosAdaptiveMaxDownstreamVariable() {
    return this.getStringAttribute('qos_adaptive_max_downstream_variable');
  }
  public set qosAdaptiveMaxDownstreamVariable(value: string) {
    this._qosAdaptiveMaxDownstreamVariable = value;
  }
  public resetQosAdaptiveMaxDownstreamVariable() {
    this._qosAdaptiveMaxDownstreamVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qosAdaptiveMaxDownstreamVariableInput() {
    return this._qosAdaptiveMaxDownstreamVariable;
  }

  // qos_adaptive_max_upstream - computed: false, optional: true, required: false
  private _qosAdaptiveMaxUpstream?: number; 
  public get qosAdaptiveMaxUpstream() {
    return this.getNumberAttribute('qos_adaptive_max_upstream');
  }
  public set qosAdaptiveMaxUpstream(value: number) {
    this._qosAdaptiveMaxUpstream = value;
  }
  public resetQosAdaptiveMaxUpstream() {
    this._qosAdaptiveMaxUpstream = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qosAdaptiveMaxUpstreamInput() {
    return this._qosAdaptiveMaxUpstream;
  }

  // qos_adaptive_max_upstream_variable - computed: false, optional: true, required: false
  private _qosAdaptiveMaxUpstreamVariable?: string; 
  public get qosAdaptiveMaxUpstreamVariable() {
    return this.getStringAttribute('qos_adaptive_max_upstream_variable');
  }
  public set qosAdaptiveMaxUpstreamVariable(value: string) {
    this._qosAdaptiveMaxUpstreamVariable = value;
  }
  public resetQosAdaptiveMaxUpstreamVariable() {
    this._qosAdaptiveMaxUpstreamVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qosAdaptiveMaxUpstreamVariableInput() {
    return this._qosAdaptiveMaxUpstreamVariable;
  }

  // qos_adaptive_min_downstream - computed: false, optional: true, required: false
  private _qosAdaptiveMinDownstream?: number; 
  public get qosAdaptiveMinDownstream() {
    return this.getNumberAttribute('qos_adaptive_min_downstream');
  }
  public set qosAdaptiveMinDownstream(value: number) {
    this._qosAdaptiveMinDownstream = value;
  }
  public resetQosAdaptiveMinDownstream() {
    this._qosAdaptiveMinDownstream = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qosAdaptiveMinDownstreamInput() {
    return this._qosAdaptiveMinDownstream;
  }

  // qos_adaptive_min_downstream_variable - computed: false, optional: true, required: false
  private _qosAdaptiveMinDownstreamVariable?: string; 
  public get qosAdaptiveMinDownstreamVariable() {
    return this.getStringAttribute('qos_adaptive_min_downstream_variable');
  }
  public set qosAdaptiveMinDownstreamVariable(value: string) {
    this._qosAdaptiveMinDownstreamVariable = value;
  }
  public resetQosAdaptiveMinDownstreamVariable() {
    this._qosAdaptiveMinDownstreamVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qosAdaptiveMinDownstreamVariableInput() {
    return this._qosAdaptiveMinDownstreamVariable;
  }

  // qos_adaptive_min_upstream - computed: false, optional: true, required: false
  private _qosAdaptiveMinUpstream?: number; 
  public get qosAdaptiveMinUpstream() {
    return this.getNumberAttribute('qos_adaptive_min_upstream');
  }
  public set qosAdaptiveMinUpstream(value: number) {
    this._qosAdaptiveMinUpstream = value;
  }
  public resetQosAdaptiveMinUpstream() {
    this._qosAdaptiveMinUpstream = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qosAdaptiveMinUpstreamInput() {
    return this._qosAdaptiveMinUpstream;
  }

  // qos_adaptive_min_upstream_variable - computed: false, optional: true, required: false
  private _qosAdaptiveMinUpstreamVariable?: string; 
  public get qosAdaptiveMinUpstreamVariable() {
    return this.getStringAttribute('qos_adaptive_min_upstream_variable');
  }
  public set qosAdaptiveMinUpstreamVariable(value: string) {
    this._qosAdaptiveMinUpstreamVariable = value;
  }
  public resetQosAdaptiveMinUpstreamVariable() {
    this._qosAdaptiveMinUpstreamVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qosAdaptiveMinUpstreamVariableInput() {
    return this._qosAdaptiveMinUpstreamVariable;
  }

  // qos_adaptive_period - computed: false, optional: true, required: false
  private _qosAdaptivePeriod?: number; 
  public get qosAdaptivePeriod() {
    return this.getNumberAttribute('qos_adaptive_period');
  }
  public set qosAdaptivePeriod(value: number) {
    this._qosAdaptivePeriod = value;
  }
  public resetQosAdaptivePeriod() {
    this._qosAdaptivePeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qosAdaptivePeriodInput() {
    return this._qosAdaptivePeriod;
  }

  // qos_adaptive_period_variable - computed: false, optional: true, required: false
  private _qosAdaptivePeriodVariable?: string; 
  public get qosAdaptivePeriodVariable() {
    return this.getStringAttribute('qos_adaptive_period_variable');
  }
  public set qosAdaptivePeriodVariable(value: string) {
    this._qosAdaptivePeriodVariable = value;
  }
  public resetQosAdaptivePeriodVariable() {
    this._qosAdaptivePeriodVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qosAdaptivePeriodVariableInput() {
    return this._qosAdaptivePeriodVariable;
  }

  // qos_shaping_rate - computed: false, optional: true, required: false
  private _qosShapingRate?: number; 
  public get qosShapingRate() {
    return this.getNumberAttribute('qos_shaping_rate');
  }
  public set qosShapingRate(value: number) {
    this._qosShapingRate = value;
  }
  public resetQosShapingRate() {
    this._qosShapingRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qosShapingRateInput() {
    return this._qosShapingRate;
  }

  // qos_shaping_rate_variable - computed: false, optional: true, required: false
  private _qosShapingRateVariable?: string; 
  public get qosShapingRateVariable() {
    return this.getStringAttribute('qos_shaping_rate_variable');
  }
  public set qosShapingRateVariable(value: string) {
    this._qosShapingRateVariable = value;
  }
  public resetQosShapingRateVariable() {
    this._qosShapingRateVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qosShapingRateVariableInput() {
    return this._qosShapingRateVariable;
  }

  // service_provider - computed: false, optional: true, required: false
  private _serviceProvider?: string; 
  public get serviceProvider() {
    return this.getStringAttribute('service_provider');
  }
  public set serviceProvider(value: string) {
    this._serviceProvider = value;
  }
  public resetServiceProvider() {
    this._serviceProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceProviderInput() {
    return this._serviceProvider;
  }

  // service_provider_variable - computed: false, optional: true, required: false
  private _serviceProviderVariable?: string; 
  public get serviceProviderVariable() {
    return this.getStringAttribute('service_provider_variable');
  }
  public set serviceProviderVariable(value: string) {
    this._serviceProviderVariable = value;
  }
  public resetServiceProviderVariable() {
    this._serviceProviderVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceProviderVariableInput() {
    return this._serviceProviderVariable;
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

  // static_nat66 - computed: false, optional: true, required: false
  private _staticNat66 = new TransportWanVpnInterfaceEthernetFeatureStaticNat66List(this, "static_nat66", false);
  public get staticNat66() {
    return this._staticNat66;
  }
  public putStaticNat66(value: TransportWanVpnInterfaceEthernetFeatureStaticNat66[] | cdktf.IResolvable) {
    this._staticNat66.internalValue = value;
  }
  public resetStaticNat66() {
    this._staticNat66.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticNat66Input() {
    return this._staticNat66.internalValue;
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

  // tloc_extension - computed: false, optional: true, required: false
  private _tlocExtension?: string; 
  public get tlocExtension() {
    return this.getStringAttribute('tloc_extension');
  }
  public set tlocExtension(value: string) {
    this._tlocExtension = value;
  }
  public resetTlocExtension() {
    this._tlocExtension = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlocExtensionInput() {
    return this._tlocExtension;
  }

  // tloc_extension_variable - computed: false, optional: true, required: false
  private _tlocExtensionVariable?: string; 
  public get tlocExtensionVariable() {
    return this.getStringAttribute('tloc_extension_variable');
  }
  public set tlocExtensionVariable(value: string) {
    this._tlocExtensionVariable = value;
  }
  public resetTlocExtensionVariable() {
    this._tlocExtensionVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlocExtensionVariableInput() {
    return this._tlocExtensionVariable;
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

  // transport_wan_vpn_feature_id - computed: false, optional: false, required: true
  private _transportWanVpnFeatureId?: string; 
  public get transportWanVpnFeatureId() {
    return this.getStringAttribute('transport_wan_vpn_feature_id');
  }
  public set transportWanVpnFeatureId(value: string) {
    this._transportWanVpnFeatureId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transportWanVpnFeatureIdInput() {
    return this._transportWanVpnFeatureId;
  }

  // tunnel_bandwidth_percent - computed: false, optional: true, required: false
  private _tunnelBandwidthPercent?: number; 
  public get tunnelBandwidthPercent() {
    return this.getNumberAttribute('tunnel_bandwidth_percent');
  }
  public set tunnelBandwidthPercent(value: number) {
    this._tunnelBandwidthPercent = value;
  }
  public resetTunnelBandwidthPercent() {
    this._tunnelBandwidthPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelBandwidthPercentInput() {
    return this._tunnelBandwidthPercent;
  }

  // tunnel_bandwidth_percent_variable - computed: false, optional: true, required: false
  private _tunnelBandwidthPercentVariable?: string; 
  public get tunnelBandwidthPercentVariable() {
    return this.getStringAttribute('tunnel_bandwidth_percent_variable');
  }
  public set tunnelBandwidthPercentVariable(value: string) {
    this._tunnelBandwidthPercentVariable = value;
  }
  public resetTunnelBandwidthPercentVariable() {
    this._tunnelBandwidthPercentVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelBandwidthPercentVariableInput() {
    return this._tunnelBandwidthPercentVariable;
  }

  // tunnel_interface - computed: false, optional: true, required: false
  private _tunnelInterface?: boolean | cdktf.IResolvable; 
  public get tunnelInterface() {
    return this.getBooleanAttribute('tunnel_interface');
  }
  public set tunnelInterface(value: boolean | cdktf.IResolvable) {
    this._tunnelInterface = value;
  }
  public resetTunnelInterface() {
    this._tunnelInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelInterfaceInput() {
    return this._tunnelInterface;
  }

  // tunnel_interface_allow_all - computed: false, optional: true, required: false
  private _tunnelInterfaceAllowAll?: boolean | cdktf.IResolvable; 
  public get tunnelInterfaceAllowAll() {
    return this.getBooleanAttribute('tunnel_interface_allow_all');
  }
  public set tunnelInterfaceAllowAll(value: boolean | cdktf.IResolvable) {
    this._tunnelInterfaceAllowAll = value;
  }
  public resetTunnelInterfaceAllowAll() {
    this._tunnelInterfaceAllowAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelInterfaceAllowAllInput() {
    return this._tunnelInterfaceAllowAll;
  }

  // tunnel_interface_allow_all_variable - computed: false, optional: true, required: false
  private _tunnelInterfaceAllowAllVariable?: string; 
  public get tunnelInterfaceAllowAllVariable() {
    return this.getStringAttribute('tunnel_interface_allow_all_variable');
  }
  public set tunnelInterfaceAllowAllVariable(value: string) {
    this._tunnelInterfaceAllowAllVariable = value;
  }
  public resetTunnelInterfaceAllowAllVariable() {
    this._tunnelInterfaceAllowAllVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelInterfaceAllowAllVariableInput() {
    return this._tunnelInterfaceAllowAllVariable;
  }

  // tunnel_interface_allow_bfd - computed: false, optional: true, required: false
  private _tunnelInterfaceAllowBfd?: boolean | cdktf.IResolvable; 
  public get tunnelInterfaceAllowBfd() {
    return this.getBooleanAttribute('tunnel_interface_allow_bfd');
  }
  public set tunnelInterfaceAllowBfd(value: boolean | cdktf.IResolvable) {
    this._tunnelInterfaceAllowBfd = value;
  }
  public resetTunnelInterfaceAllowBfd() {
    this._tunnelInterfaceAllowBfd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelInterfaceAllowBfdInput() {
    return this._tunnelInterfaceAllowBfd;
  }

  // tunnel_interface_allow_bfd_variable - computed: false, optional: true, required: false
  private _tunnelInterfaceAllowBfdVariable?: string; 
  public get tunnelInterfaceAllowBfdVariable() {
    return this.getStringAttribute('tunnel_interface_allow_bfd_variable');
  }
  public set tunnelInterfaceAllowBfdVariable(value: string) {
    this._tunnelInterfaceAllowBfdVariable = value;
  }
  public resetTunnelInterfaceAllowBfdVariable() {
    this._tunnelInterfaceAllowBfdVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelInterfaceAllowBfdVariableInput() {
    return this._tunnelInterfaceAllowBfdVariable;
  }

  // tunnel_interface_allow_bgp - computed: false, optional: true, required: false
  private _tunnelInterfaceAllowBgp?: boolean | cdktf.IResolvable; 
  public get tunnelInterfaceAllowBgp() {
    return this.getBooleanAttribute('tunnel_interface_allow_bgp');
  }
  public set tunnelInterfaceAllowBgp(value: boolean | cdktf.IResolvable) {
    this._tunnelInterfaceAllowBgp = value;
  }
  public resetTunnelInterfaceAllowBgp() {
    this._tunnelInterfaceAllowBgp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelInterfaceAllowBgpInput() {
    return this._tunnelInterfaceAllowBgp;
  }

  // tunnel_interface_allow_bgp_variable - computed: false, optional: true, required: false
  private _tunnelInterfaceAllowBgpVariable?: string; 
  public get tunnelInterfaceAllowBgpVariable() {
    return this.getStringAttribute('tunnel_interface_allow_bgp_variable');
  }
  public set tunnelInterfaceAllowBgpVariable(value: string) {
    this._tunnelInterfaceAllowBgpVariable = value;
  }
  public resetTunnelInterfaceAllowBgpVariable() {
    this._tunnelInterfaceAllowBgpVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelInterfaceAllowBgpVariableInput() {
    return this._tunnelInterfaceAllowBgpVariable;
  }

  // tunnel_interface_allow_dhcp - computed: false, optional: true, required: false
  private _tunnelInterfaceAllowDhcp?: boolean | cdktf.IResolvable; 
  public get tunnelInterfaceAllowDhcp() {
    return this.getBooleanAttribute('tunnel_interface_allow_dhcp');
  }
  public set tunnelInterfaceAllowDhcp(value: boolean | cdktf.IResolvable) {
    this._tunnelInterfaceAllowDhcp = value;
  }
  public resetTunnelInterfaceAllowDhcp() {
    this._tunnelInterfaceAllowDhcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelInterfaceAllowDhcpInput() {
    return this._tunnelInterfaceAllowDhcp;
  }

  // tunnel_interface_allow_dhcp_variable - computed: false, optional: true, required: false
  private _tunnelInterfaceAllowDhcpVariable?: string; 
  public get tunnelInterfaceAllowDhcpVariable() {
    return this.getStringAttribute('tunnel_interface_allow_dhcp_variable');
  }
  public set tunnelInterfaceAllowDhcpVariable(value: string) {
    this._tunnelInterfaceAllowDhcpVariable = value;
  }
  public resetTunnelInterfaceAllowDhcpVariable() {
    this._tunnelInterfaceAllowDhcpVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelInterfaceAllowDhcpVariableInput() {
    return this._tunnelInterfaceAllowDhcpVariable;
  }

  // tunnel_interface_allow_dns - computed: false, optional: true, required: false
  private _tunnelInterfaceAllowDns?: boolean | cdktf.IResolvable; 
  public get tunnelInterfaceAllowDns() {
    return this.getBooleanAttribute('tunnel_interface_allow_dns');
  }
  public set tunnelInterfaceAllowDns(value: boolean | cdktf.IResolvable) {
    this._tunnelInterfaceAllowDns = value;
  }
  public resetTunnelInterfaceAllowDns() {
    this._tunnelInterfaceAllowDns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelInterfaceAllowDnsInput() {
    return this._tunnelInterfaceAllowDns;
  }

  // tunnel_interface_allow_dns_variable - computed: false, optional: true, required: false
  private _tunnelInterfaceAllowDnsVariable?: string; 
  public get tunnelInterfaceAllowDnsVariable() {
    return this.getStringAttribute('tunnel_interface_allow_dns_variable');
  }
  public set tunnelInterfaceAllowDnsVariable(value: string) {
    this._tunnelInterfaceAllowDnsVariable = value;
  }
  public resetTunnelInterfaceAllowDnsVariable() {
    this._tunnelInterfaceAllowDnsVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelInterfaceAllowDnsVariableInput() {
    return this._tunnelInterfaceAllowDnsVariable;
  }

  // tunnel_interface_allow_https - computed: false, optional: true, required: false
  private _tunnelInterfaceAllowHttps?: boolean | cdktf.IResolvable; 
  public get tunnelInterfaceAllowHttps() {
    return this.getBooleanAttribute('tunnel_interface_allow_https');
  }
  public set tunnelInterfaceAllowHttps(value: boolean | cdktf.IResolvable) {
    this._tunnelInterfaceAllowHttps = value;
  }
  public resetTunnelInterfaceAllowHttps() {
    this._tunnelInterfaceAllowHttps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelInterfaceAllowHttpsInput() {
    return this._tunnelInterfaceAllowHttps;
  }

  // tunnel_interface_allow_https_variable - computed: false, optional: true, required: false
  private _tunnelInterfaceAllowHttpsVariable?: string; 
  public get tunnelInterfaceAllowHttpsVariable() {
    return this.getStringAttribute('tunnel_interface_allow_https_variable');
  }
  public set tunnelInterfaceAllowHttpsVariable(value: string) {
    this._tunnelInterfaceAllowHttpsVariable = value;
  }
  public resetTunnelInterfaceAllowHttpsVariable() {
    this._tunnelInterfaceAllowHttpsVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelInterfaceAllowHttpsVariableInput() {
    return this._tunnelInterfaceAllowHttpsVariable;
  }

  // tunnel_interface_allow_icmp - computed: false, optional: true, required: false
  private _tunnelInterfaceAllowIcmp?: boolean | cdktf.IResolvable; 
  public get tunnelInterfaceAllowIcmp() {
    return this.getBooleanAttribute('tunnel_interface_allow_icmp');
  }
  public set tunnelInterfaceAllowIcmp(value: boolean | cdktf.IResolvable) {
    this._tunnelInterfaceAllowIcmp = value;
  }
  public resetTunnelInterfaceAllowIcmp() {
    this._tunnelInterfaceAllowIcmp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelInterfaceAllowIcmpInput() {
    return this._tunnelInterfaceAllowIcmp;
  }

  // tunnel_interface_allow_icmp_variable - computed: false, optional: true, required: false
  private _tunnelInterfaceAllowIcmpVariable?: string; 
  public get tunnelInterfaceAllowIcmpVariable() {
    return this.getStringAttribute('tunnel_interface_allow_icmp_variable');
  }
  public set tunnelInterfaceAllowIcmpVariable(value: string) {
    this._tunnelInterfaceAllowIcmpVariable = value;
  }
  public resetTunnelInterfaceAllowIcmpVariable() {
    this._tunnelInterfaceAllowIcmpVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelInterfaceAllowIcmpVariableInput() {
    return this._tunnelInterfaceAllowIcmpVariable;
  }

  // tunnel_interface_allow_netconf - computed: false, optional: true, required: false
  private _tunnelInterfaceAllowNetconf?: boolean | cdktf.IResolvable; 
  public get tunnelInterfaceAllowNetconf() {
    return this.getBooleanAttribute('tunnel_interface_allow_netconf');
  }
  public set tunnelInterfaceAllowNetconf(value: boolean | cdktf.IResolvable) {
    this._tunnelInterfaceAllowNetconf = value;
  }
  public resetTunnelInterfaceAllowNetconf() {
    this._tunnelInterfaceAllowNetconf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelInterfaceAllowNetconfInput() {
    return this._tunnelInterfaceAllowNetconf;
  }

  // tunnel_interface_allow_netconf_variable - computed: false, optional: true, required: false
  private _tunnelInterfaceAllowNetconfVariable?: string; 
  public get tunnelInterfaceAllowNetconfVariable() {
    return this.getStringAttribute('tunnel_interface_allow_netconf_variable');
  }
  public set tunnelInterfaceAllowNetconfVariable(value: string) {
    this._tunnelInterfaceAllowNetconfVariable = value;
  }
  public resetTunnelInterfaceAllowNetconfVariable() {
    this._tunnelInterfaceAllowNetconfVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelInterfaceAllowNetconfVariableInput() {
    return this._tunnelInterfaceAllowNetconfVariable;
  }

  // tunnel_interface_allow_ntp - computed: false, optional: true, required: false
  private _tunnelInterfaceAllowNtp?: boolean | cdktf.IResolvable; 
  public get tunnelInterfaceAllowNtp() {
    return this.getBooleanAttribute('tunnel_interface_allow_ntp');
  }
  public set tunnelInterfaceAllowNtp(value: boolean | cdktf.IResolvable) {
    this._tunnelInterfaceAllowNtp = value;
  }
  public resetTunnelInterfaceAllowNtp() {
    this._tunnelInterfaceAllowNtp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelInterfaceAllowNtpInput() {
    return this._tunnelInterfaceAllowNtp;
  }

  // tunnel_interface_allow_ntp_variable - computed: false, optional: true, required: false
  private _tunnelInterfaceAllowNtpVariable?: string; 
  public get tunnelInterfaceAllowNtpVariable() {
    return this.getStringAttribute('tunnel_interface_allow_ntp_variable');
  }
  public set tunnelInterfaceAllowNtpVariable(value: string) {
    this._tunnelInterfaceAllowNtpVariable = value;
  }
  public resetTunnelInterfaceAllowNtpVariable() {
    this._tunnelInterfaceAllowNtpVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelInterfaceAllowNtpVariableInput() {
    return this._tunnelInterfaceAllowNtpVariable;
  }

  // tunnel_interface_allow_ospf - computed: false, optional: true, required: false
  private _tunnelInterfaceAllowOspf?: boolean | cdktf.IResolvable; 
  public get tunnelInterfaceAllowOspf() {
    return this.getBooleanAttribute('tunnel_interface_allow_ospf');
  }
  public set tunnelInterfaceAllowOspf(value: boolean | cdktf.IResolvable) {
    this._tunnelInterfaceAllowOspf = value;
  }
  public resetTunnelInterfaceAllowOspf() {
    this._tunnelInterfaceAllowOspf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelInterfaceAllowOspfInput() {
    return this._tunnelInterfaceAllowOspf;
  }

  // tunnel_interface_allow_ospf_variable - computed: false, optional: true, required: false
  private _tunnelInterfaceAllowOspfVariable?: string; 
  public get tunnelInterfaceAllowOspfVariable() {
    return this.getStringAttribute('tunnel_interface_allow_ospf_variable');
  }
  public set tunnelInterfaceAllowOspfVariable(value: string) {
    this._tunnelInterfaceAllowOspfVariable = value;
  }
  public resetTunnelInterfaceAllowOspfVariable() {
    this._tunnelInterfaceAllowOspfVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelInterfaceAllowOspfVariableInput() {
    return this._tunnelInterfaceAllowOspfVariable;
  }

  // tunnel_interface_allow_snmp - computed: false, optional: true, required: false
  private _tunnelInterfaceAllowSnmp?: boolean | cdktf.IResolvable; 
  public get tunnelInterfaceAllowSnmp() {
    return this.getBooleanAttribute('tunnel_interface_allow_snmp');
  }
  public set tunnelInterfaceAllowSnmp(value: boolean | cdktf.IResolvable) {
    this._tunnelInterfaceAllowSnmp = value;
  }
  public resetTunnelInterfaceAllowSnmp() {
    this._tunnelInterfaceAllowSnmp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelInterfaceAllowSnmpInput() {
    return this._tunnelInterfaceAllowSnmp;
  }

  // tunnel_interface_allow_snmp_variable - computed: false, optional: true, required: false
  private _tunnelInterfaceAllowSnmpVariable?: string; 
  public get tunnelInterfaceAllowSnmpVariable() {
    return this.getStringAttribute('tunnel_interface_allow_snmp_variable');
  }
  public set tunnelInterfaceAllowSnmpVariable(value: string) {
    this._tunnelInterfaceAllowSnmpVariable = value;
  }
  public resetTunnelInterfaceAllowSnmpVariable() {
    this._tunnelInterfaceAllowSnmpVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelInterfaceAllowSnmpVariableInput() {
    return this._tunnelInterfaceAllowSnmpVariable;
  }

  // tunnel_interface_allow_ssh - computed: false, optional: true, required: false
  private _tunnelInterfaceAllowSsh?: boolean | cdktf.IResolvable; 
  public get tunnelInterfaceAllowSsh() {
    return this.getBooleanAttribute('tunnel_interface_allow_ssh');
  }
  public set tunnelInterfaceAllowSsh(value: boolean | cdktf.IResolvable) {
    this._tunnelInterfaceAllowSsh = value;
  }
  public resetTunnelInterfaceAllowSsh() {
    this._tunnelInterfaceAllowSsh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelInterfaceAllowSshInput() {
    return this._tunnelInterfaceAllowSsh;
  }

  // tunnel_interface_allow_ssh_variable - computed: false, optional: true, required: false
  private _tunnelInterfaceAllowSshVariable?: string; 
  public get tunnelInterfaceAllowSshVariable() {
    return this.getStringAttribute('tunnel_interface_allow_ssh_variable');
  }
  public set tunnelInterfaceAllowSshVariable(value: string) {
    this._tunnelInterfaceAllowSshVariable = value;
  }
  public resetTunnelInterfaceAllowSshVariable() {
    this._tunnelInterfaceAllowSshVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelInterfaceAllowSshVariableInput() {
    return this._tunnelInterfaceAllowSshVariable;
  }

  // tunnel_interface_allow_stun - computed: false, optional: true, required: false
  private _tunnelInterfaceAllowStun?: boolean | cdktf.IResolvable; 
  public get tunnelInterfaceAllowStun() {
    return this.getBooleanAttribute('tunnel_interface_allow_stun');
  }
  public set tunnelInterfaceAllowStun(value: boolean | cdktf.IResolvable) {
    this._tunnelInterfaceAllowStun = value;
  }
  public resetTunnelInterfaceAllowStun() {
    this._tunnelInterfaceAllowStun = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelInterfaceAllowStunInput() {
    return this._tunnelInterfaceAllowStun;
  }

  // tunnel_interface_allow_stun_variable - computed: false, optional: true, required: false
  private _tunnelInterfaceAllowStunVariable?: string; 
  public get tunnelInterfaceAllowStunVariable() {
    return this.getStringAttribute('tunnel_interface_allow_stun_variable');
  }
  public set tunnelInterfaceAllowStunVariable(value: string) {
    this._tunnelInterfaceAllowStunVariable = value;
  }
  public resetTunnelInterfaceAllowStunVariable() {
    this._tunnelInterfaceAllowStunVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelInterfaceAllowStunVariableInput() {
    return this._tunnelInterfaceAllowStunVariable;
  }

  // tunnel_interface_bind_loopback_tunnel - computed: false, optional: true, required: false
  private _tunnelInterfaceBindLoopbackTunnel?: string; 
  public get tunnelInterfaceBindLoopbackTunnel() {
    return this.getStringAttribute('tunnel_interface_bind_loopback_tunnel');
  }
  public set tunnelInterfaceBindLoopbackTunnel(value: string) {
    this._tunnelInterfaceBindLoopbackTunnel = value;
  }
  public resetTunnelInterfaceBindLoopbackTunnel() {
    this._tunnelInterfaceBindLoopbackTunnel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelInterfaceBindLoopbackTunnelInput() {
    return this._tunnelInterfaceBindLoopbackTunnel;
  }

  // tunnel_interface_bind_loopback_tunnel_variable - computed: false, optional: true, required: false
  private _tunnelInterfaceBindLoopbackTunnelVariable?: string; 
  public get tunnelInterfaceBindLoopbackTunnelVariable() {
    return this.getStringAttribute('tunnel_interface_bind_loopback_tunnel_variable');
  }
  public set tunnelInterfaceBindLoopbackTunnelVariable(value: string) {
    this._tunnelInterfaceBindLoopbackTunnelVariable = value;
  }
  public resetTunnelInterfaceBindLoopbackTunnelVariable() {
    this._tunnelInterfaceBindLoopbackTunnelVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelInterfaceBindLoopbackTunnelVariableInput() {
    return this._tunnelInterfaceBindLoopbackTunnelVariable;
  }

  // tunnel_interface_border - computed: false, optional: true, required: false
  private _tunnelInterfaceBorder?: boolean | cdktf.IResolvable; 
  public get tunnelInterfaceBorder() {
    return this.getBooleanAttribute('tunnel_interface_border');
  }
  public set tunnelInterfaceBorder(value: boolean | cdktf.IResolvable) {
    this._tunnelInterfaceBorder = value;
  }
  public resetTunnelInterfaceBorder() {
    this._tunnelInterfaceBorder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelInterfaceBorderInput() {
    return this._tunnelInterfaceBorder;
  }

  // tunnel_interface_border_variable - computed: false, optional: true, required: false
  private _tunnelInterfaceBorderVariable?: string; 
  public get tunnelInterfaceBorderVariable() {
    return this.getStringAttribute('tunnel_interface_border_variable');
  }
  public set tunnelInterfaceBorderVariable(value: string) {
    this._tunnelInterfaceBorderVariable = value;
  }
  public resetTunnelInterfaceBorderVariable() {
    this._tunnelInterfaceBorderVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelInterfaceBorderVariableInput() {
    return this._tunnelInterfaceBorderVariable;
  }

  // tunnel_interface_carrier - computed: false, optional: true, required: false
  private _tunnelInterfaceCarrier?: string; 
  public get tunnelInterfaceCarrier() {
    return this.getStringAttribute('tunnel_interface_carrier');
  }
  public set tunnelInterfaceCarrier(value: string) {
    this._tunnelInterfaceCarrier = value;
  }
  public resetTunnelInterfaceCarrier() {
    this._tunnelInterfaceCarrier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelInterfaceCarrierInput() {
    return this._tunnelInterfaceCarrier;
  }

  // tunnel_interface_carrier_variable - computed: false, optional: true, required: false
  private _tunnelInterfaceCarrierVariable?: string; 
  public get tunnelInterfaceCarrierVariable() {
    return this.getStringAttribute('tunnel_interface_carrier_variable');
  }
  public set tunnelInterfaceCarrierVariable(value: string) {
    this._tunnelInterfaceCarrierVariable = value;
  }
  public resetTunnelInterfaceCarrierVariable() {
    this._tunnelInterfaceCarrierVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelInterfaceCarrierVariableInput() {
    return this._tunnelInterfaceCarrierVariable;
  }

  // tunnel_interface_clear_dont_fragment - computed: false, optional: true, required: false
  private _tunnelInterfaceClearDontFragment?: boolean | cdktf.IResolvable; 
  public get tunnelInterfaceClearDontFragment() {
    return this.getBooleanAttribute('tunnel_interface_clear_dont_fragment');
  }
  public set tunnelInterfaceClearDontFragment(value: boolean | cdktf.IResolvable) {
    this._tunnelInterfaceClearDontFragment = value;
  }
  public resetTunnelInterfaceClearDontFragment() {
    this._tunnelInterfaceClearDontFragment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelInterfaceClearDontFragmentInput() {
    return this._tunnelInterfaceClearDontFragment;
  }

  // tunnel_interface_clear_dont_fragment_variable - computed: false, optional: true, required: false
  private _tunnelInterfaceClearDontFragmentVariable?: string; 
  public get tunnelInterfaceClearDontFragmentVariable() {
    return this.getStringAttribute('tunnel_interface_clear_dont_fragment_variable');
  }
  public set tunnelInterfaceClearDontFragmentVariable(value: string) {
    this._tunnelInterfaceClearDontFragmentVariable = value;
  }
  public resetTunnelInterfaceClearDontFragmentVariable() {
    this._tunnelInterfaceClearDontFragmentVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelInterfaceClearDontFragmentVariableInput() {
    return this._tunnelInterfaceClearDontFragmentVariable;
  }

  // tunnel_interface_color - computed: false, optional: true, required: false
  private _tunnelInterfaceColor?: string; 
  public get tunnelInterfaceColor() {
    return this.getStringAttribute('tunnel_interface_color');
  }
  public set tunnelInterfaceColor(value: string) {
    this._tunnelInterfaceColor = value;
  }
  public resetTunnelInterfaceColor() {
    this._tunnelInterfaceColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelInterfaceColorInput() {
    return this._tunnelInterfaceColor;
  }

  // tunnel_interface_color_restrict - computed: false, optional: true, required: false
  private _tunnelInterfaceColorRestrict?: boolean | cdktf.IResolvable; 
  public get tunnelInterfaceColorRestrict() {
    return this.getBooleanAttribute('tunnel_interface_color_restrict');
  }
  public set tunnelInterfaceColorRestrict(value: boolean | cdktf.IResolvable) {
    this._tunnelInterfaceColorRestrict = value;
  }
  public resetTunnelInterfaceColorRestrict() {
    this._tunnelInterfaceColorRestrict = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelInterfaceColorRestrictInput() {
    return this._tunnelInterfaceColorRestrict;
  }

  // tunnel_interface_color_restrict_variable - computed: false, optional: true, required: false
  private _tunnelInterfaceColorRestrictVariable?: string; 
  public get tunnelInterfaceColorRestrictVariable() {
    return this.getStringAttribute('tunnel_interface_color_restrict_variable');
  }
  public set tunnelInterfaceColorRestrictVariable(value: string) {
    this._tunnelInterfaceColorRestrictVariable = value;
  }
  public resetTunnelInterfaceColorRestrictVariable() {
    this._tunnelInterfaceColorRestrictVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelInterfaceColorRestrictVariableInput() {
    return this._tunnelInterfaceColorRestrictVariable;
  }

  // tunnel_interface_color_variable - computed: false, optional: true, required: false
  private _tunnelInterfaceColorVariable?: string; 
  public get tunnelInterfaceColorVariable() {
    return this.getStringAttribute('tunnel_interface_color_variable');
  }
  public set tunnelInterfaceColorVariable(value: string) {
    this._tunnelInterfaceColorVariable = value;
  }
  public resetTunnelInterfaceColorVariable() {
    this._tunnelInterfaceColorVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelInterfaceColorVariableInput() {
    return this._tunnelInterfaceColorVariable;
  }

  // tunnel_interface_cts_sgt_propagation - computed: false, optional: true, required: false
  private _tunnelInterfaceCtsSgtPropagation?: boolean | cdktf.IResolvable; 
  public get tunnelInterfaceCtsSgtPropagation() {
    return this.getBooleanAttribute('tunnel_interface_cts_sgt_propagation');
  }
  public set tunnelInterfaceCtsSgtPropagation(value: boolean | cdktf.IResolvable) {
    this._tunnelInterfaceCtsSgtPropagation = value;
  }
  public resetTunnelInterfaceCtsSgtPropagation() {
    this._tunnelInterfaceCtsSgtPropagation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelInterfaceCtsSgtPropagationInput() {
    return this._tunnelInterfaceCtsSgtPropagation;
  }

  // tunnel_interface_cts_sgt_propagation_variable - computed: false, optional: true, required: false
  private _tunnelInterfaceCtsSgtPropagationVariable?: string; 
  public get tunnelInterfaceCtsSgtPropagationVariable() {
    return this.getStringAttribute('tunnel_interface_cts_sgt_propagation_variable');
  }
  public set tunnelInterfaceCtsSgtPropagationVariable(value: string) {
    this._tunnelInterfaceCtsSgtPropagationVariable = value;
  }
  public resetTunnelInterfaceCtsSgtPropagationVariable() {
    this._tunnelInterfaceCtsSgtPropagationVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelInterfaceCtsSgtPropagationVariableInput() {
    return this._tunnelInterfaceCtsSgtPropagationVariable;
  }

  // tunnel_interface_encapsulations - computed: false, optional: true, required: false
  private _tunnelInterfaceEncapsulations = new TransportWanVpnInterfaceEthernetFeatureTunnelInterfaceEncapsulationsList(this, "tunnel_interface_encapsulations", false);
  public get tunnelInterfaceEncapsulations() {
    return this._tunnelInterfaceEncapsulations;
  }
  public putTunnelInterfaceEncapsulations(value: TransportWanVpnInterfaceEthernetFeatureTunnelInterfaceEncapsulations[] | cdktf.IResolvable) {
    this._tunnelInterfaceEncapsulations.internalValue = value;
  }
  public resetTunnelInterfaceEncapsulations() {
    this._tunnelInterfaceEncapsulations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelInterfaceEncapsulationsInput() {
    return this._tunnelInterfaceEncapsulations.internalValue;
  }

  // tunnel_interface_exclude_controller_group_list - computed: false, optional: true, required: false
  private _tunnelInterfaceExcludeControllerGroupList?: number[]; 
  public get tunnelInterfaceExcludeControllerGroupList() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('tunnel_interface_exclude_controller_group_list')));
  }
  public set tunnelInterfaceExcludeControllerGroupList(value: number[]) {
    this._tunnelInterfaceExcludeControllerGroupList = value;
  }
  public resetTunnelInterfaceExcludeControllerGroupList() {
    this._tunnelInterfaceExcludeControllerGroupList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelInterfaceExcludeControllerGroupListInput() {
    return this._tunnelInterfaceExcludeControllerGroupList;
  }

  // tunnel_interface_exclude_controller_group_list_variable - computed: false, optional: true, required: false
  private _tunnelInterfaceExcludeControllerGroupListVariable?: string; 
  public get tunnelInterfaceExcludeControllerGroupListVariable() {
    return this.getStringAttribute('tunnel_interface_exclude_controller_group_list_variable');
  }
  public set tunnelInterfaceExcludeControllerGroupListVariable(value: string) {
    this._tunnelInterfaceExcludeControllerGroupListVariable = value;
  }
  public resetTunnelInterfaceExcludeControllerGroupListVariable() {
    this._tunnelInterfaceExcludeControllerGroupListVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelInterfaceExcludeControllerGroupListVariableInput() {
    return this._tunnelInterfaceExcludeControllerGroupListVariable;
  }

  // tunnel_interface_gre_tunnel_destination_ip - computed: false, optional: true, required: false
  private _tunnelInterfaceGreTunnelDestinationIp?: string; 
  public get tunnelInterfaceGreTunnelDestinationIp() {
    return this.getStringAttribute('tunnel_interface_gre_tunnel_destination_ip');
  }
  public set tunnelInterfaceGreTunnelDestinationIp(value: string) {
    this._tunnelInterfaceGreTunnelDestinationIp = value;
  }
  public resetTunnelInterfaceGreTunnelDestinationIp() {
    this._tunnelInterfaceGreTunnelDestinationIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelInterfaceGreTunnelDestinationIpInput() {
    return this._tunnelInterfaceGreTunnelDestinationIp;
  }

  // tunnel_interface_gre_tunnel_destination_ip_variable - computed: false, optional: true, required: false
  private _tunnelInterfaceGreTunnelDestinationIpVariable?: string; 
  public get tunnelInterfaceGreTunnelDestinationIpVariable() {
    return this.getStringAttribute('tunnel_interface_gre_tunnel_destination_ip_variable');
  }
  public set tunnelInterfaceGreTunnelDestinationIpVariable(value: string) {
    this._tunnelInterfaceGreTunnelDestinationIpVariable = value;
  }
  public resetTunnelInterfaceGreTunnelDestinationIpVariable() {
    this._tunnelInterfaceGreTunnelDestinationIpVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelInterfaceGreTunnelDestinationIpVariableInput() {
    return this._tunnelInterfaceGreTunnelDestinationIpVariable;
  }

  // tunnel_interface_groups - computed: false, optional: true, required: false
  private _tunnelInterfaceGroups?: number; 
  public get tunnelInterfaceGroups() {
    return this.getNumberAttribute('tunnel_interface_groups');
  }
  public set tunnelInterfaceGroups(value: number) {
    this._tunnelInterfaceGroups = value;
  }
  public resetTunnelInterfaceGroups() {
    this._tunnelInterfaceGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelInterfaceGroupsInput() {
    return this._tunnelInterfaceGroups;
  }

  // tunnel_interface_groups_variable - computed: false, optional: true, required: false
  private _tunnelInterfaceGroupsVariable?: string; 
  public get tunnelInterfaceGroupsVariable() {
    return this.getStringAttribute('tunnel_interface_groups_variable');
  }
  public set tunnelInterfaceGroupsVariable(value: string) {
    this._tunnelInterfaceGroupsVariable = value;
  }
  public resetTunnelInterfaceGroupsVariable() {
    this._tunnelInterfaceGroupsVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelInterfaceGroupsVariableInput() {
    return this._tunnelInterfaceGroupsVariable;
  }

  // tunnel_interface_hello_interval - computed: false, optional: true, required: false
  private _tunnelInterfaceHelloInterval?: number; 
  public get tunnelInterfaceHelloInterval() {
    return this.getNumberAttribute('tunnel_interface_hello_interval');
  }
  public set tunnelInterfaceHelloInterval(value: number) {
    this._tunnelInterfaceHelloInterval = value;
  }
  public resetTunnelInterfaceHelloInterval() {
    this._tunnelInterfaceHelloInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelInterfaceHelloIntervalInput() {
    return this._tunnelInterfaceHelloInterval;
  }

  // tunnel_interface_hello_interval_variable - computed: false, optional: true, required: false
  private _tunnelInterfaceHelloIntervalVariable?: string; 
  public get tunnelInterfaceHelloIntervalVariable() {
    return this.getStringAttribute('tunnel_interface_hello_interval_variable');
  }
  public set tunnelInterfaceHelloIntervalVariable(value: string) {
    this._tunnelInterfaceHelloIntervalVariable = value;
  }
  public resetTunnelInterfaceHelloIntervalVariable() {
    this._tunnelInterfaceHelloIntervalVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelInterfaceHelloIntervalVariableInput() {
    return this._tunnelInterfaceHelloIntervalVariable;
  }

  // tunnel_interface_hello_tolerance - computed: false, optional: true, required: false
  private _tunnelInterfaceHelloTolerance?: number; 
  public get tunnelInterfaceHelloTolerance() {
    return this.getNumberAttribute('tunnel_interface_hello_tolerance');
  }
  public set tunnelInterfaceHelloTolerance(value: number) {
    this._tunnelInterfaceHelloTolerance = value;
  }
  public resetTunnelInterfaceHelloTolerance() {
    this._tunnelInterfaceHelloTolerance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelInterfaceHelloToleranceInput() {
    return this._tunnelInterfaceHelloTolerance;
  }

  // tunnel_interface_hello_tolerance_variable - computed: false, optional: true, required: false
  private _tunnelInterfaceHelloToleranceVariable?: string; 
  public get tunnelInterfaceHelloToleranceVariable() {
    return this.getStringAttribute('tunnel_interface_hello_tolerance_variable');
  }
  public set tunnelInterfaceHelloToleranceVariable(value: string) {
    this._tunnelInterfaceHelloToleranceVariable = value;
  }
  public resetTunnelInterfaceHelloToleranceVariable() {
    this._tunnelInterfaceHelloToleranceVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelInterfaceHelloToleranceVariableInput() {
    return this._tunnelInterfaceHelloToleranceVariable;
  }

  // tunnel_interface_last_resort_circuit - computed: false, optional: true, required: false
  private _tunnelInterfaceLastResortCircuit?: boolean | cdktf.IResolvable; 
  public get tunnelInterfaceLastResortCircuit() {
    return this.getBooleanAttribute('tunnel_interface_last_resort_circuit');
  }
  public set tunnelInterfaceLastResortCircuit(value: boolean | cdktf.IResolvable) {
    this._tunnelInterfaceLastResortCircuit = value;
  }
  public resetTunnelInterfaceLastResortCircuit() {
    this._tunnelInterfaceLastResortCircuit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelInterfaceLastResortCircuitInput() {
    return this._tunnelInterfaceLastResortCircuit;
  }

  // tunnel_interface_last_resort_circuit_variable - computed: false, optional: true, required: false
  private _tunnelInterfaceLastResortCircuitVariable?: string; 
  public get tunnelInterfaceLastResortCircuitVariable() {
    return this.getStringAttribute('tunnel_interface_last_resort_circuit_variable');
  }
  public set tunnelInterfaceLastResortCircuitVariable(value: string) {
    this._tunnelInterfaceLastResortCircuitVariable = value;
  }
  public resetTunnelInterfaceLastResortCircuitVariable() {
    this._tunnelInterfaceLastResortCircuitVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelInterfaceLastResortCircuitVariableInput() {
    return this._tunnelInterfaceLastResortCircuitVariable;
  }

  // tunnel_interface_low_bandwidth_link - computed: false, optional: true, required: false
  private _tunnelInterfaceLowBandwidthLink?: boolean | cdktf.IResolvable; 
  public get tunnelInterfaceLowBandwidthLink() {
    return this.getBooleanAttribute('tunnel_interface_low_bandwidth_link');
  }
  public set tunnelInterfaceLowBandwidthLink(value: boolean | cdktf.IResolvable) {
    this._tunnelInterfaceLowBandwidthLink = value;
  }
  public resetTunnelInterfaceLowBandwidthLink() {
    this._tunnelInterfaceLowBandwidthLink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelInterfaceLowBandwidthLinkInput() {
    return this._tunnelInterfaceLowBandwidthLink;
  }

  // tunnel_interface_low_bandwidth_link_variable - computed: false, optional: true, required: false
  private _tunnelInterfaceLowBandwidthLinkVariable?: string; 
  public get tunnelInterfaceLowBandwidthLinkVariable() {
    return this.getStringAttribute('tunnel_interface_low_bandwidth_link_variable');
  }
  public set tunnelInterfaceLowBandwidthLinkVariable(value: string) {
    this._tunnelInterfaceLowBandwidthLinkVariable = value;
  }
  public resetTunnelInterfaceLowBandwidthLinkVariable() {
    this._tunnelInterfaceLowBandwidthLinkVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelInterfaceLowBandwidthLinkVariableInput() {
    return this._tunnelInterfaceLowBandwidthLinkVariable;
  }

  // tunnel_interface_max_control_connections - computed: false, optional: true, required: false
  private _tunnelInterfaceMaxControlConnections?: number; 
  public get tunnelInterfaceMaxControlConnections() {
    return this.getNumberAttribute('tunnel_interface_max_control_connections');
  }
  public set tunnelInterfaceMaxControlConnections(value: number) {
    this._tunnelInterfaceMaxControlConnections = value;
  }
  public resetTunnelInterfaceMaxControlConnections() {
    this._tunnelInterfaceMaxControlConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelInterfaceMaxControlConnectionsInput() {
    return this._tunnelInterfaceMaxControlConnections;
  }

  // tunnel_interface_max_control_connections_variable - computed: false, optional: true, required: false
  private _tunnelInterfaceMaxControlConnectionsVariable?: string; 
  public get tunnelInterfaceMaxControlConnectionsVariable() {
    return this.getStringAttribute('tunnel_interface_max_control_connections_variable');
  }
  public set tunnelInterfaceMaxControlConnectionsVariable(value: string) {
    this._tunnelInterfaceMaxControlConnectionsVariable = value;
  }
  public resetTunnelInterfaceMaxControlConnectionsVariable() {
    this._tunnelInterfaceMaxControlConnectionsVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelInterfaceMaxControlConnectionsVariableInput() {
    return this._tunnelInterfaceMaxControlConnectionsVariable;
  }

  // tunnel_interface_nat_refresh_interval - computed: false, optional: true, required: false
  private _tunnelInterfaceNatRefreshInterval?: number; 
  public get tunnelInterfaceNatRefreshInterval() {
    return this.getNumberAttribute('tunnel_interface_nat_refresh_interval');
  }
  public set tunnelInterfaceNatRefreshInterval(value: number) {
    this._tunnelInterfaceNatRefreshInterval = value;
  }
  public resetTunnelInterfaceNatRefreshInterval() {
    this._tunnelInterfaceNatRefreshInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelInterfaceNatRefreshIntervalInput() {
    return this._tunnelInterfaceNatRefreshInterval;
  }

  // tunnel_interface_nat_refresh_interval_variable - computed: false, optional: true, required: false
  private _tunnelInterfaceNatRefreshIntervalVariable?: string; 
  public get tunnelInterfaceNatRefreshIntervalVariable() {
    return this.getStringAttribute('tunnel_interface_nat_refresh_interval_variable');
  }
  public set tunnelInterfaceNatRefreshIntervalVariable(value: string) {
    this._tunnelInterfaceNatRefreshIntervalVariable = value;
  }
  public resetTunnelInterfaceNatRefreshIntervalVariable() {
    this._tunnelInterfaceNatRefreshIntervalVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelInterfaceNatRefreshIntervalVariableInput() {
    return this._tunnelInterfaceNatRefreshIntervalVariable;
  }

  // tunnel_interface_network_broadcast - computed: false, optional: true, required: false
  private _tunnelInterfaceNetworkBroadcast?: boolean | cdktf.IResolvable; 
  public get tunnelInterfaceNetworkBroadcast() {
    return this.getBooleanAttribute('tunnel_interface_network_broadcast');
  }
  public set tunnelInterfaceNetworkBroadcast(value: boolean | cdktf.IResolvable) {
    this._tunnelInterfaceNetworkBroadcast = value;
  }
  public resetTunnelInterfaceNetworkBroadcast() {
    this._tunnelInterfaceNetworkBroadcast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelInterfaceNetworkBroadcastInput() {
    return this._tunnelInterfaceNetworkBroadcast;
  }

  // tunnel_interface_network_broadcast_variable - computed: false, optional: true, required: false
  private _tunnelInterfaceNetworkBroadcastVariable?: string; 
  public get tunnelInterfaceNetworkBroadcastVariable() {
    return this.getStringAttribute('tunnel_interface_network_broadcast_variable');
  }
  public set tunnelInterfaceNetworkBroadcastVariable(value: string) {
    this._tunnelInterfaceNetworkBroadcastVariable = value;
  }
  public resetTunnelInterfaceNetworkBroadcastVariable() {
    this._tunnelInterfaceNetworkBroadcastVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelInterfaceNetworkBroadcastVariableInput() {
    return this._tunnelInterfaceNetworkBroadcastVariable;
  }

  // tunnel_interface_port_hop - computed: false, optional: true, required: false
  private _tunnelInterfacePortHop?: boolean | cdktf.IResolvable; 
  public get tunnelInterfacePortHop() {
    return this.getBooleanAttribute('tunnel_interface_port_hop');
  }
  public set tunnelInterfacePortHop(value: boolean | cdktf.IResolvable) {
    this._tunnelInterfacePortHop = value;
  }
  public resetTunnelInterfacePortHop() {
    this._tunnelInterfacePortHop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelInterfacePortHopInput() {
    return this._tunnelInterfacePortHop;
  }

  // tunnel_interface_port_hop_variable - computed: false, optional: true, required: false
  private _tunnelInterfacePortHopVariable?: string; 
  public get tunnelInterfacePortHopVariable() {
    return this.getStringAttribute('tunnel_interface_port_hop_variable');
  }
  public set tunnelInterfacePortHopVariable(value: string) {
    this._tunnelInterfacePortHopVariable = value;
  }
  public resetTunnelInterfacePortHopVariable() {
    this._tunnelInterfacePortHopVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelInterfacePortHopVariableInput() {
    return this._tunnelInterfacePortHopVariable;
  }

  // tunnel_interface_tunnel_tcp_mss - computed: false, optional: true, required: false
  private _tunnelInterfaceTunnelTcpMss?: number; 
  public get tunnelInterfaceTunnelTcpMss() {
    return this.getNumberAttribute('tunnel_interface_tunnel_tcp_mss');
  }
  public set tunnelInterfaceTunnelTcpMss(value: number) {
    this._tunnelInterfaceTunnelTcpMss = value;
  }
  public resetTunnelInterfaceTunnelTcpMss() {
    this._tunnelInterfaceTunnelTcpMss = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelInterfaceTunnelTcpMssInput() {
    return this._tunnelInterfaceTunnelTcpMss;
  }

  // tunnel_interface_tunnel_tcp_mss_variable - computed: false, optional: true, required: false
  private _tunnelInterfaceTunnelTcpMssVariable?: string; 
  public get tunnelInterfaceTunnelTcpMssVariable() {
    return this.getStringAttribute('tunnel_interface_tunnel_tcp_mss_variable');
  }
  public set tunnelInterfaceTunnelTcpMssVariable(value: string) {
    this._tunnelInterfaceTunnelTcpMssVariable = value;
  }
  public resetTunnelInterfaceTunnelTcpMssVariable() {
    this._tunnelInterfaceTunnelTcpMssVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelInterfaceTunnelTcpMssVariableInput() {
    return this._tunnelInterfaceTunnelTcpMssVariable;
  }

  // tunnel_interface_vbond_as_stun_server - computed: false, optional: true, required: false
  private _tunnelInterfaceVbondAsStunServer?: boolean | cdktf.IResolvable; 
  public get tunnelInterfaceVbondAsStunServer() {
    return this.getBooleanAttribute('tunnel_interface_vbond_as_stun_server');
  }
  public set tunnelInterfaceVbondAsStunServer(value: boolean | cdktf.IResolvable) {
    this._tunnelInterfaceVbondAsStunServer = value;
  }
  public resetTunnelInterfaceVbondAsStunServer() {
    this._tunnelInterfaceVbondAsStunServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelInterfaceVbondAsStunServerInput() {
    return this._tunnelInterfaceVbondAsStunServer;
  }

  // tunnel_interface_vbond_as_stun_server_variable - computed: false, optional: true, required: false
  private _tunnelInterfaceVbondAsStunServerVariable?: string; 
  public get tunnelInterfaceVbondAsStunServerVariable() {
    return this.getStringAttribute('tunnel_interface_vbond_as_stun_server_variable');
  }
  public set tunnelInterfaceVbondAsStunServerVariable(value: string) {
    this._tunnelInterfaceVbondAsStunServerVariable = value;
  }
  public resetTunnelInterfaceVbondAsStunServerVariable() {
    this._tunnelInterfaceVbondAsStunServerVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelInterfaceVbondAsStunServerVariableInput() {
    return this._tunnelInterfaceVbondAsStunServerVariable;
  }

  // tunnel_interface_vmanage_connection_preference - computed: false, optional: true, required: false
  private _tunnelInterfaceVmanageConnectionPreference?: number; 
  public get tunnelInterfaceVmanageConnectionPreference() {
    return this.getNumberAttribute('tunnel_interface_vmanage_connection_preference');
  }
  public set tunnelInterfaceVmanageConnectionPreference(value: number) {
    this._tunnelInterfaceVmanageConnectionPreference = value;
  }
  public resetTunnelInterfaceVmanageConnectionPreference() {
    this._tunnelInterfaceVmanageConnectionPreference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelInterfaceVmanageConnectionPreferenceInput() {
    return this._tunnelInterfaceVmanageConnectionPreference;
  }

  // tunnel_interface_vmanage_connection_preference_variable - computed: false, optional: true, required: false
  private _tunnelInterfaceVmanageConnectionPreferenceVariable?: string; 
  public get tunnelInterfaceVmanageConnectionPreferenceVariable() {
    return this.getStringAttribute('tunnel_interface_vmanage_connection_preference_variable');
  }
  public set tunnelInterfaceVmanageConnectionPreferenceVariable(value: string) {
    this._tunnelInterfaceVmanageConnectionPreferenceVariable = value;
  }
  public resetTunnelInterfaceVmanageConnectionPreferenceVariable() {
    this._tunnelInterfaceVmanageConnectionPreferenceVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelInterfaceVmanageConnectionPreferenceVariableInput() {
    return this._tunnelInterfaceVmanageConnectionPreferenceVariable;
  }

  // tunnel_qos_mode - computed: false, optional: true, required: false
  private _tunnelQosMode?: string; 
  public get tunnelQosMode() {
    return this.getStringAttribute('tunnel_qos_mode');
  }
  public set tunnelQosMode(value: string) {
    this._tunnelQosMode = value;
  }
  public resetTunnelQosMode() {
    this._tunnelQosMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelQosModeInput() {
    return this._tunnelQosMode;
  }

  // tunnel_qos_mode_variable - computed: false, optional: true, required: false
  private _tunnelQosModeVariable?: string; 
  public get tunnelQosModeVariable() {
    return this.getStringAttribute('tunnel_qos_mode_variable');
  }
  public set tunnelQosModeVariable(value: string) {
    this._tunnelQosModeVariable = value;
  }
  public resetTunnelQosModeVariable() {
    this._tunnelQosModeVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelQosModeVariableInput() {
    return this._tunnelQosModeVariable;
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
      acl_ipv4_egress_feature_id: cdktf.stringToTerraform(this._aclIpv4EgressFeatureId),
      acl_ipv4_ingress_feature_id: cdktf.stringToTerraform(this._aclIpv4IngressFeatureId),
      acl_ipv6_egress_feature_id: cdktf.stringToTerraform(this._aclIpv6EgressFeatureId),
      acl_ipv6_ingress_feature_id: cdktf.stringToTerraform(this._aclIpv6IngressFeatureId),
      arp_timeout: cdktf.numberToTerraform(this._arpTimeout),
      arp_timeout_variable: cdktf.stringToTerraform(this._arpTimeoutVariable),
      arps: cdktf.listMapper(transportWanVpnInterfaceEthernetFeatureArpsToTerraform, false)(this._arps.internalValue),
      auto_detect_bandwidth: cdktf.booleanToTerraform(this._autoDetectBandwidth),
      auto_detect_bandwidth_variable: cdktf.stringToTerraform(this._autoDetectBandwidthVariable),
      autonegotiate: cdktf.booleanToTerraform(this._autonegotiate),
      autonegotiate_variable: cdktf.stringToTerraform(this._autonegotiateVariable),
      bandwidth_downstream: cdktf.numberToTerraform(this._bandwidthDownstream),
      bandwidth_downstream_variable: cdktf.stringToTerraform(this._bandwidthDownstreamVariable),
      bandwidth_upstream: cdktf.numberToTerraform(this._bandwidthUpstream),
      bandwidth_upstream_variable: cdktf.stringToTerraform(this._bandwidthUpstreamVariable),
      block_non_source_ip: cdktf.booleanToTerraform(this._blockNonSourceIp),
      block_non_source_ip_variable: cdktf.stringToTerraform(this._blockNonSourceIpVariable),
      description: cdktf.stringToTerraform(this._description),
      duplex: cdktf.stringToTerraform(this._duplex),
      duplex_variable: cdktf.stringToTerraform(this._duplexVariable),
      enable_dhcpv6: cdktf.booleanToTerraform(this._enableDhcpv6),
      feature_profile_id: cdktf.stringToTerraform(this._featureProfileId),
      gre_tunnel_source_ip: cdktf.stringToTerraform(this._greTunnelSourceIp),
      gre_tunnel_source_ip_variable: cdktf.stringToTerraform(this._greTunnelSourceIpVariable),
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
      iperf_server: cdktf.stringToTerraform(this._iperfServer),
      iperf_server_variable: cdktf.stringToTerraform(this._iperfServerVariable),
      ipv4_address: cdktf.stringToTerraform(this._ipv4Address),
      ipv4_address_variable: cdktf.stringToTerraform(this._ipv4AddressVariable),
      ipv4_configuration_type: cdktf.stringToTerraform(this._ipv4ConfigurationType),
      ipv4_dhcp_distance: cdktf.numberToTerraform(this._ipv4DhcpDistance),
      ipv4_dhcp_distance_variable: cdktf.stringToTerraform(this._ipv4DhcpDistanceVariable),
      ipv4_dhcp_helper: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipv4DhcpHelper),
      ipv4_dhcp_helper_variable: cdktf.stringToTerraform(this._ipv4DhcpHelperVariable),
      ipv4_secondary_addresses: cdktf.listMapper(transportWanVpnInterfaceEthernetFeatureIpv4SecondaryAddressesToTerraform, false)(this._ipv4SecondaryAddresses.internalValue),
      ipv4_subnet_mask: cdktf.stringToTerraform(this._ipv4SubnetMask),
      ipv4_subnet_mask_variable: cdktf.stringToTerraform(this._ipv4SubnetMaskVariable),
      ipv6_address: cdktf.stringToTerraform(this._ipv6Address),
      ipv6_address_variable: cdktf.stringToTerraform(this._ipv6AddressVariable),
      ipv6_configuration_type: cdktf.stringToTerraform(this._ipv6ConfigurationType),
      ipv6_dhcp_secondary_address: cdktf.listMapper(transportWanVpnInterfaceEthernetFeatureIpv6DhcpSecondaryAddressToTerraform, false)(this._ipv6DhcpSecondaryAddress.internalValue),
      ipv6_secondary_addresses: cdktf.listMapper(transportWanVpnInterfaceEthernetFeatureIpv6SecondaryAddressesToTerraform, false)(this._ipv6SecondaryAddresses.internalValue),
      load_interval: cdktf.numberToTerraform(this._loadInterval),
      load_interval_variable: cdktf.stringToTerraform(this._loadIntervalVariable),
      mac_address: cdktf.stringToTerraform(this._macAddress),
      mac_address_variable: cdktf.stringToTerraform(this._macAddressVariable),
      media_type: cdktf.stringToTerraform(this._mediaType),
      media_type_variable: cdktf.stringToTerraform(this._mediaTypeVariable),
      name: cdktf.stringToTerraform(this._name),
      nat64: cdktf.booleanToTerraform(this._nat64),
      nat66: cdktf.booleanToTerraform(this._nat66),
      nat_ipv4: cdktf.booleanToTerraform(this._natIpv4),
      nat_ipv4_variable: cdktf.stringToTerraform(this._natIpv4Variable),
      nat_ipv6: cdktf.booleanToTerraform(this._natIpv6),
      nat_ipv6_variable: cdktf.stringToTerraform(this._natIpv6Variable),
      nat_loopback: cdktf.stringToTerraform(this._natLoopback),
      nat_loopback_variable: cdktf.stringToTerraform(this._natLoopbackVariable),
      nat_overload: cdktf.booleanToTerraform(this._natOverload),
      nat_overload_variable: cdktf.stringToTerraform(this._natOverloadVariable),
      nat_prefix_length: cdktf.numberToTerraform(this._natPrefixLength),
      nat_prefix_length_variable: cdktf.stringToTerraform(this._natPrefixLengthVariable),
      nat_range_end: cdktf.stringToTerraform(this._natRangeEnd),
      nat_range_end_variable: cdktf.stringToTerraform(this._natRangeEndVariable),
      nat_range_start: cdktf.stringToTerraform(this._natRangeStart),
      nat_range_start_variable: cdktf.stringToTerraform(this._natRangeStartVariable),
      nat_tcp_timeout: cdktf.numberToTerraform(this._natTcpTimeout),
      nat_tcp_timeout_variable: cdktf.stringToTerraform(this._natTcpTimeoutVariable),
      nat_type: cdktf.stringToTerraform(this._natType),
      nat_type_variable: cdktf.stringToTerraform(this._natTypeVariable),
      nat_udp_timeout: cdktf.numberToTerraform(this._natUdpTimeout),
      nat_udp_timeout_variable: cdktf.stringToTerraform(this._natUdpTimeoutVariable),
      new_static_nats: cdktf.listMapper(transportWanVpnInterfaceEthernetFeatureNewStaticNatsToTerraform, false)(this._newStaticNats.internalValue),
      per_tunnel_qos: cdktf.booleanToTerraform(this._perTunnelQos),
      per_tunnel_qos_variable: cdktf.stringToTerraform(this._perTunnelQosVariable),
      qos_adaptive: cdktf.booleanToTerraform(this._qosAdaptive),
      qos_adaptive_bandwidth_downstream: cdktf.booleanToTerraform(this._qosAdaptiveBandwidthDownstream),
      qos_adaptive_bandwidth_upstream: cdktf.booleanToTerraform(this._qosAdaptiveBandwidthUpstream),
      qos_adaptive_default_downstream: cdktf.numberToTerraform(this._qosAdaptiveDefaultDownstream),
      qos_adaptive_default_downstream_variable: cdktf.stringToTerraform(this._qosAdaptiveDefaultDownstreamVariable),
      qos_adaptive_default_upstream: cdktf.numberToTerraform(this._qosAdaptiveDefaultUpstream),
      qos_adaptive_default_upstream_variable: cdktf.stringToTerraform(this._qosAdaptiveDefaultUpstreamVariable),
      qos_adaptive_max_downstream: cdktf.numberToTerraform(this._qosAdaptiveMaxDownstream),
      qos_adaptive_max_downstream_variable: cdktf.stringToTerraform(this._qosAdaptiveMaxDownstreamVariable),
      qos_adaptive_max_upstream: cdktf.numberToTerraform(this._qosAdaptiveMaxUpstream),
      qos_adaptive_max_upstream_variable: cdktf.stringToTerraform(this._qosAdaptiveMaxUpstreamVariable),
      qos_adaptive_min_downstream: cdktf.numberToTerraform(this._qosAdaptiveMinDownstream),
      qos_adaptive_min_downstream_variable: cdktf.stringToTerraform(this._qosAdaptiveMinDownstreamVariable),
      qos_adaptive_min_upstream: cdktf.numberToTerraform(this._qosAdaptiveMinUpstream),
      qos_adaptive_min_upstream_variable: cdktf.stringToTerraform(this._qosAdaptiveMinUpstreamVariable),
      qos_adaptive_period: cdktf.numberToTerraform(this._qosAdaptivePeriod),
      qos_adaptive_period_variable: cdktf.stringToTerraform(this._qosAdaptivePeriodVariable),
      qos_shaping_rate: cdktf.numberToTerraform(this._qosShapingRate),
      qos_shaping_rate_variable: cdktf.stringToTerraform(this._qosShapingRateVariable),
      service_provider: cdktf.stringToTerraform(this._serviceProvider),
      service_provider_variable: cdktf.stringToTerraform(this._serviceProviderVariable),
      shutdown: cdktf.booleanToTerraform(this._shutdown),
      shutdown_variable: cdktf.stringToTerraform(this._shutdownVariable),
      speed: cdktf.stringToTerraform(this._speed),
      speed_variable: cdktf.stringToTerraform(this._speedVariable),
      static_nat66: cdktf.listMapper(transportWanVpnInterfaceEthernetFeatureStaticNat66ToTerraform, false)(this._staticNat66.internalValue),
      tcp_mss: cdktf.numberToTerraform(this._tcpMss),
      tcp_mss_variable: cdktf.stringToTerraform(this._tcpMssVariable),
      tloc_extension: cdktf.stringToTerraform(this._tlocExtension),
      tloc_extension_variable: cdktf.stringToTerraform(this._tlocExtensionVariable),
      tracker: cdktf.stringToTerraform(this._tracker),
      tracker_variable: cdktf.stringToTerraform(this._trackerVariable),
      transport_wan_vpn_feature_id: cdktf.stringToTerraform(this._transportWanVpnFeatureId),
      tunnel_bandwidth_percent: cdktf.numberToTerraform(this._tunnelBandwidthPercent),
      tunnel_bandwidth_percent_variable: cdktf.stringToTerraform(this._tunnelBandwidthPercentVariable),
      tunnel_interface: cdktf.booleanToTerraform(this._tunnelInterface),
      tunnel_interface_allow_all: cdktf.booleanToTerraform(this._tunnelInterfaceAllowAll),
      tunnel_interface_allow_all_variable: cdktf.stringToTerraform(this._tunnelInterfaceAllowAllVariable),
      tunnel_interface_allow_bfd: cdktf.booleanToTerraform(this._tunnelInterfaceAllowBfd),
      tunnel_interface_allow_bfd_variable: cdktf.stringToTerraform(this._tunnelInterfaceAllowBfdVariable),
      tunnel_interface_allow_bgp: cdktf.booleanToTerraform(this._tunnelInterfaceAllowBgp),
      tunnel_interface_allow_bgp_variable: cdktf.stringToTerraform(this._tunnelInterfaceAllowBgpVariable),
      tunnel_interface_allow_dhcp: cdktf.booleanToTerraform(this._tunnelInterfaceAllowDhcp),
      tunnel_interface_allow_dhcp_variable: cdktf.stringToTerraform(this._tunnelInterfaceAllowDhcpVariable),
      tunnel_interface_allow_dns: cdktf.booleanToTerraform(this._tunnelInterfaceAllowDns),
      tunnel_interface_allow_dns_variable: cdktf.stringToTerraform(this._tunnelInterfaceAllowDnsVariable),
      tunnel_interface_allow_https: cdktf.booleanToTerraform(this._tunnelInterfaceAllowHttps),
      tunnel_interface_allow_https_variable: cdktf.stringToTerraform(this._tunnelInterfaceAllowHttpsVariable),
      tunnel_interface_allow_icmp: cdktf.booleanToTerraform(this._tunnelInterfaceAllowIcmp),
      tunnel_interface_allow_icmp_variable: cdktf.stringToTerraform(this._tunnelInterfaceAllowIcmpVariable),
      tunnel_interface_allow_netconf: cdktf.booleanToTerraform(this._tunnelInterfaceAllowNetconf),
      tunnel_interface_allow_netconf_variable: cdktf.stringToTerraform(this._tunnelInterfaceAllowNetconfVariable),
      tunnel_interface_allow_ntp: cdktf.booleanToTerraform(this._tunnelInterfaceAllowNtp),
      tunnel_interface_allow_ntp_variable: cdktf.stringToTerraform(this._tunnelInterfaceAllowNtpVariable),
      tunnel_interface_allow_ospf: cdktf.booleanToTerraform(this._tunnelInterfaceAllowOspf),
      tunnel_interface_allow_ospf_variable: cdktf.stringToTerraform(this._tunnelInterfaceAllowOspfVariable),
      tunnel_interface_allow_snmp: cdktf.booleanToTerraform(this._tunnelInterfaceAllowSnmp),
      tunnel_interface_allow_snmp_variable: cdktf.stringToTerraform(this._tunnelInterfaceAllowSnmpVariable),
      tunnel_interface_allow_ssh: cdktf.booleanToTerraform(this._tunnelInterfaceAllowSsh),
      tunnel_interface_allow_ssh_variable: cdktf.stringToTerraform(this._tunnelInterfaceAllowSshVariable),
      tunnel_interface_allow_stun: cdktf.booleanToTerraform(this._tunnelInterfaceAllowStun),
      tunnel_interface_allow_stun_variable: cdktf.stringToTerraform(this._tunnelInterfaceAllowStunVariable),
      tunnel_interface_bind_loopback_tunnel: cdktf.stringToTerraform(this._tunnelInterfaceBindLoopbackTunnel),
      tunnel_interface_bind_loopback_tunnel_variable: cdktf.stringToTerraform(this._tunnelInterfaceBindLoopbackTunnelVariable),
      tunnel_interface_border: cdktf.booleanToTerraform(this._tunnelInterfaceBorder),
      tunnel_interface_border_variable: cdktf.stringToTerraform(this._tunnelInterfaceBorderVariable),
      tunnel_interface_carrier: cdktf.stringToTerraform(this._tunnelInterfaceCarrier),
      tunnel_interface_carrier_variable: cdktf.stringToTerraform(this._tunnelInterfaceCarrierVariable),
      tunnel_interface_clear_dont_fragment: cdktf.booleanToTerraform(this._tunnelInterfaceClearDontFragment),
      tunnel_interface_clear_dont_fragment_variable: cdktf.stringToTerraform(this._tunnelInterfaceClearDontFragmentVariable),
      tunnel_interface_color: cdktf.stringToTerraform(this._tunnelInterfaceColor),
      tunnel_interface_color_restrict: cdktf.booleanToTerraform(this._tunnelInterfaceColorRestrict),
      tunnel_interface_color_restrict_variable: cdktf.stringToTerraform(this._tunnelInterfaceColorRestrictVariable),
      tunnel_interface_color_variable: cdktf.stringToTerraform(this._tunnelInterfaceColorVariable),
      tunnel_interface_cts_sgt_propagation: cdktf.booleanToTerraform(this._tunnelInterfaceCtsSgtPropagation),
      tunnel_interface_cts_sgt_propagation_variable: cdktf.stringToTerraform(this._tunnelInterfaceCtsSgtPropagationVariable),
      tunnel_interface_encapsulations: cdktf.listMapper(transportWanVpnInterfaceEthernetFeatureTunnelInterfaceEncapsulationsToTerraform, false)(this._tunnelInterfaceEncapsulations.internalValue),
      tunnel_interface_exclude_controller_group_list: cdktf.listMapper(cdktf.numberToTerraform, false)(this._tunnelInterfaceExcludeControllerGroupList),
      tunnel_interface_exclude_controller_group_list_variable: cdktf.stringToTerraform(this._tunnelInterfaceExcludeControllerGroupListVariable),
      tunnel_interface_gre_tunnel_destination_ip: cdktf.stringToTerraform(this._tunnelInterfaceGreTunnelDestinationIp),
      tunnel_interface_gre_tunnel_destination_ip_variable: cdktf.stringToTerraform(this._tunnelInterfaceGreTunnelDestinationIpVariable),
      tunnel_interface_groups: cdktf.numberToTerraform(this._tunnelInterfaceGroups),
      tunnel_interface_groups_variable: cdktf.stringToTerraform(this._tunnelInterfaceGroupsVariable),
      tunnel_interface_hello_interval: cdktf.numberToTerraform(this._tunnelInterfaceHelloInterval),
      tunnel_interface_hello_interval_variable: cdktf.stringToTerraform(this._tunnelInterfaceHelloIntervalVariable),
      tunnel_interface_hello_tolerance: cdktf.numberToTerraform(this._tunnelInterfaceHelloTolerance),
      tunnel_interface_hello_tolerance_variable: cdktf.stringToTerraform(this._tunnelInterfaceHelloToleranceVariable),
      tunnel_interface_last_resort_circuit: cdktf.booleanToTerraform(this._tunnelInterfaceLastResortCircuit),
      tunnel_interface_last_resort_circuit_variable: cdktf.stringToTerraform(this._tunnelInterfaceLastResortCircuitVariable),
      tunnel_interface_low_bandwidth_link: cdktf.booleanToTerraform(this._tunnelInterfaceLowBandwidthLink),
      tunnel_interface_low_bandwidth_link_variable: cdktf.stringToTerraform(this._tunnelInterfaceLowBandwidthLinkVariable),
      tunnel_interface_max_control_connections: cdktf.numberToTerraform(this._tunnelInterfaceMaxControlConnections),
      tunnel_interface_max_control_connections_variable: cdktf.stringToTerraform(this._tunnelInterfaceMaxControlConnectionsVariable),
      tunnel_interface_nat_refresh_interval: cdktf.numberToTerraform(this._tunnelInterfaceNatRefreshInterval),
      tunnel_interface_nat_refresh_interval_variable: cdktf.stringToTerraform(this._tunnelInterfaceNatRefreshIntervalVariable),
      tunnel_interface_network_broadcast: cdktf.booleanToTerraform(this._tunnelInterfaceNetworkBroadcast),
      tunnel_interface_network_broadcast_variable: cdktf.stringToTerraform(this._tunnelInterfaceNetworkBroadcastVariable),
      tunnel_interface_port_hop: cdktf.booleanToTerraform(this._tunnelInterfacePortHop),
      tunnel_interface_port_hop_variable: cdktf.stringToTerraform(this._tunnelInterfacePortHopVariable),
      tunnel_interface_tunnel_tcp_mss: cdktf.numberToTerraform(this._tunnelInterfaceTunnelTcpMss),
      tunnel_interface_tunnel_tcp_mss_variable: cdktf.stringToTerraform(this._tunnelInterfaceTunnelTcpMssVariable),
      tunnel_interface_vbond_as_stun_server: cdktf.booleanToTerraform(this._tunnelInterfaceVbondAsStunServer),
      tunnel_interface_vbond_as_stun_server_variable: cdktf.stringToTerraform(this._tunnelInterfaceVbondAsStunServerVariable),
      tunnel_interface_vmanage_connection_preference: cdktf.numberToTerraform(this._tunnelInterfaceVmanageConnectionPreference),
      tunnel_interface_vmanage_connection_preference_variable: cdktf.stringToTerraform(this._tunnelInterfaceVmanageConnectionPreferenceVariable),
      tunnel_qos_mode: cdktf.stringToTerraform(this._tunnelQosMode),
      tunnel_qos_mode_variable: cdktf.stringToTerraform(this._tunnelQosModeVariable),
      xconnect: cdktf.stringToTerraform(this._xconnect),
      xconnect_variable: cdktf.stringToTerraform(this._xconnectVariable),
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
        value: cdktf.listMapperHcl(transportWanVpnInterfaceEthernetFeatureArpsToHclTerraform, false)(this._arps.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TransportWanVpnInterfaceEthernetFeatureArpsList",
      },
      auto_detect_bandwidth: {
        value: cdktf.booleanToHclTerraform(this._autoDetectBandwidth),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_detect_bandwidth_variable: {
        value: cdktf.stringToHclTerraform(this._autoDetectBandwidthVariable),
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
      bandwidth_downstream: {
        value: cdktf.numberToHclTerraform(this._bandwidthDownstream),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bandwidth_downstream_variable: {
        value: cdktf.stringToHclTerraform(this._bandwidthDownstreamVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bandwidth_upstream: {
        value: cdktf.numberToHclTerraform(this._bandwidthUpstream),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bandwidth_upstream_variable: {
        value: cdktf.stringToHclTerraform(this._bandwidthUpstreamVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      block_non_source_ip: {
        value: cdktf.booleanToHclTerraform(this._blockNonSourceIp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      block_non_source_ip_variable: {
        value: cdktf.stringToHclTerraform(this._blockNonSourceIpVariable),
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
      gre_tunnel_source_ip: {
        value: cdktf.stringToHclTerraform(this._greTunnelSourceIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gre_tunnel_source_ip_variable: {
        value: cdktf.stringToHclTerraform(this._greTunnelSourceIpVariable),
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
      iperf_server: {
        value: cdktf.stringToHclTerraform(this._iperfServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      iperf_server_variable: {
        value: cdktf.stringToHclTerraform(this._iperfServerVariable),
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
      ipv4_secondary_addresses: {
        value: cdktf.listMapperHcl(transportWanVpnInterfaceEthernetFeatureIpv4SecondaryAddressesToHclTerraform, false)(this._ipv4SecondaryAddresses.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TransportWanVpnInterfaceEthernetFeatureIpv4SecondaryAddressesList",
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
      ipv6_dhcp_secondary_address: {
        value: cdktf.listMapperHcl(transportWanVpnInterfaceEthernetFeatureIpv6DhcpSecondaryAddressToHclTerraform, false)(this._ipv6DhcpSecondaryAddress.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TransportWanVpnInterfaceEthernetFeatureIpv6DhcpSecondaryAddressList",
      },
      ipv6_secondary_addresses: {
        value: cdktf.listMapperHcl(transportWanVpnInterfaceEthernetFeatureIpv6SecondaryAddressesToHclTerraform, false)(this._ipv6SecondaryAddresses.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TransportWanVpnInterfaceEthernetFeatureIpv6SecondaryAddressesList",
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
      nat66: {
        value: cdktf.booleanToHclTerraform(this._nat66),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      nat_ipv4: {
        value: cdktf.booleanToHclTerraform(this._natIpv4),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      nat_ipv4_variable: {
        value: cdktf.stringToHclTerraform(this._natIpv4Variable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nat_ipv6: {
        value: cdktf.booleanToHclTerraform(this._natIpv6),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      nat_ipv6_variable: {
        value: cdktf.stringToHclTerraform(this._natIpv6Variable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nat_loopback: {
        value: cdktf.stringToHclTerraform(this._natLoopback),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nat_loopback_variable: {
        value: cdktf.stringToHclTerraform(this._natLoopbackVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nat_overload: {
        value: cdktf.booleanToHclTerraform(this._natOverload),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      nat_overload_variable: {
        value: cdktf.stringToHclTerraform(this._natOverloadVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nat_prefix_length: {
        value: cdktf.numberToHclTerraform(this._natPrefixLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      nat_prefix_length_variable: {
        value: cdktf.stringToHclTerraform(this._natPrefixLengthVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nat_range_end: {
        value: cdktf.stringToHclTerraform(this._natRangeEnd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nat_range_end_variable: {
        value: cdktf.stringToHclTerraform(this._natRangeEndVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nat_range_start: {
        value: cdktf.stringToHclTerraform(this._natRangeStart),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nat_range_start_variable: {
        value: cdktf.stringToHclTerraform(this._natRangeStartVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nat_tcp_timeout: {
        value: cdktf.numberToHclTerraform(this._natTcpTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      nat_tcp_timeout_variable: {
        value: cdktf.stringToHclTerraform(this._natTcpTimeoutVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nat_type: {
        value: cdktf.stringToHclTerraform(this._natType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nat_type_variable: {
        value: cdktf.stringToHclTerraform(this._natTypeVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nat_udp_timeout: {
        value: cdktf.numberToHclTerraform(this._natUdpTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      nat_udp_timeout_variable: {
        value: cdktf.stringToHclTerraform(this._natUdpTimeoutVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      new_static_nats: {
        value: cdktf.listMapperHcl(transportWanVpnInterfaceEthernetFeatureNewStaticNatsToHclTerraform, false)(this._newStaticNats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TransportWanVpnInterfaceEthernetFeatureNewStaticNatsList",
      },
      per_tunnel_qos: {
        value: cdktf.booleanToHclTerraform(this._perTunnelQos),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      per_tunnel_qos_variable: {
        value: cdktf.stringToHclTerraform(this._perTunnelQosVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      qos_adaptive: {
        value: cdktf.booleanToHclTerraform(this._qosAdaptive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      qos_adaptive_bandwidth_downstream: {
        value: cdktf.booleanToHclTerraform(this._qosAdaptiveBandwidthDownstream),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      qos_adaptive_bandwidth_upstream: {
        value: cdktf.booleanToHclTerraform(this._qosAdaptiveBandwidthUpstream),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      qos_adaptive_default_downstream: {
        value: cdktf.numberToHclTerraform(this._qosAdaptiveDefaultDownstream),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      qos_adaptive_default_downstream_variable: {
        value: cdktf.stringToHclTerraform(this._qosAdaptiveDefaultDownstreamVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      qos_adaptive_default_upstream: {
        value: cdktf.numberToHclTerraform(this._qosAdaptiveDefaultUpstream),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      qos_adaptive_default_upstream_variable: {
        value: cdktf.stringToHclTerraform(this._qosAdaptiveDefaultUpstreamVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      qos_adaptive_max_downstream: {
        value: cdktf.numberToHclTerraform(this._qosAdaptiveMaxDownstream),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      qos_adaptive_max_downstream_variable: {
        value: cdktf.stringToHclTerraform(this._qosAdaptiveMaxDownstreamVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      qos_adaptive_max_upstream: {
        value: cdktf.numberToHclTerraform(this._qosAdaptiveMaxUpstream),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      qos_adaptive_max_upstream_variable: {
        value: cdktf.stringToHclTerraform(this._qosAdaptiveMaxUpstreamVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      qos_adaptive_min_downstream: {
        value: cdktf.numberToHclTerraform(this._qosAdaptiveMinDownstream),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      qos_adaptive_min_downstream_variable: {
        value: cdktf.stringToHclTerraform(this._qosAdaptiveMinDownstreamVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      qos_adaptive_min_upstream: {
        value: cdktf.numberToHclTerraform(this._qosAdaptiveMinUpstream),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      qos_adaptive_min_upstream_variable: {
        value: cdktf.stringToHclTerraform(this._qosAdaptiveMinUpstreamVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      qos_adaptive_period: {
        value: cdktf.numberToHclTerraform(this._qosAdaptivePeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      qos_adaptive_period_variable: {
        value: cdktf.stringToHclTerraform(this._qosAdaptivePeriodVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      qos_shaping_rate: {
        value: cdktf.numberToHclTerraform(this._qosShapingRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      qos_shaping_rate_variable: {
        value: cdktf.stringToHclTerraform(this._qosShapingRateVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_provider: {
        value: cdktf.stringToHclTerraform(this._serviceProvider),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_provider_variable: {
        value: cdktf.stringToHclTerraform(this._serviceProviderVariable),
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
      static_nat66: {
        value: cdktf.listMapperHcl(transportWanVpnInterfaceEthernetFeatureStaticNat66ToHclTerraform, false)(this._staticNat66.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TransportWanVpnInterfaceEthernetFeatureStaticNat66List",
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
      tloc_extension: {
        value: cdktf.stringToHclTerraform(this._tlocExtension),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tloc_extension_variable: {
        value: cdktf.stringToHclTerraform(this._tlocExtensionVariable),
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
      transport_wan_vpn_feature_id: {
        value: cdktf.stringToHclTerraform(this._transportWanVpnFeatureId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_bandwidth_percent: {
        value: cdktf.numberToHclTerraform(this._tunnelBandwidthPercent),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tunnel_bandwidth_percent_variable: {
        value: cdktf.stringToHclTerraform(this._tunnelBandwidthPercentVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_interface: {
        value: cdktf.booleanToHclTerraform(this._tunnelInterface),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tunnel_interface_allow_all: {
        value: cdktf.booleanToHclTerraform(this._tunnelInterfaceAllowAll),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tunnel_interface_allow_all_variable: {
        value: cdktf.stringToHclTerraform(this._tunnelInterfaceAllowAllVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_interface_allow_bfd: {
        value: cdktf.booleanToHclTerraform(this._tunnelInterfaceAllowBfd),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tunnel_interface_allow_bfd_variable: {
        value: cdktf.stringToHclTerraform(this._tunnelInterfaceAllowBfdVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_interface_allow_bgp: {
        value: cdktf.booleanToHclTerraform(this._tunnelInterfaceAllowBgp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tunnel_interface_allow_bgp_variable: {
        value: cdktf.stringToHclTerraform(this._tunnelInterfaceAllowBgpVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_interface_allow_dhcp: {
        value: cdktf.booleanToHclTerraform(this._tunnelInterfaceAllowDhcp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tunnel_interface_allow_dhcp_variable: {
        value: cdktf.stringToHclTerraform(this._tunnelInterfaceAllowDhcpVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_interface_allow_dns: {
        value: cdktf.booleanToHclTerraform(this._tunnelInterfaceAllowDns),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tunnel_interface_allow_dns_variable: {
        value: cdktf.stringToHclTerraform(this._tunnelInterfaceAllowDnsVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_interface_allow_https: {
        value: cdktf.booleanToHclTerraform(this._tunnelInterfaceAllowHttps),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tunnel_interface_allow_https_variable: {
        value: cdktf.stringToHclTerraform(this._tunnelInterfaceAllowHttpsVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_interface_allow_icmp: {
        value: cdktf.booleanToHclTerraform(this._tunnelInterfaceAllowIcmp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tunnel_interface_allow_icmp_variable: {
        value: cdktf.stringToHclTerraform(this._tunnelInterfaceAllowIcmpVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_interface_allow_netconf: {
        value: cdktf.booleanToHclTerraform(this._tunnelInterfaceAllowNetconf),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tunnel_interface_allow_netconf_variable: {
        value: cdktf.stringToHclTerraform(this._tunnelInterfaceAllowNetconfVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_interface_allow_ntp: {
        value: cdktf.booleanToHclTerraform(this._tunnelInterfaceAllowNtp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tunnel_interface_allow_ntp_variable: {
        value: cdktf.stringToHclTerraform(this._tunnelInterfaceAllowNtpVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_interface_allow_ospf: {
        value: cdktf.booleanToHclTerraform(this._tunnelInterfaceAllowOspf),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tunnel_interface_allow_ospf_variable: {
        value: cdktf.stringToHclTerraform(this._tunnelInterfaceAllowOspfVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_interface_allow_snmp: {
        value: cdktf.booleanToHclTerraform(this._tunnelInterfaceAllowSnmp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tunnel_interface_allow_snmp_variable: {
        value: cdktf.stringToHclTerraform(this._tunnelInterfaceAllowSnmpVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_interface_allow_ssh: {
        value: cdktf.booleanToHclTerraform(this._tunnelInterfaceAllowSsh),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tunnel_interface_allow_ssh_variable: {
        value: cdktf.stringToHclTerraform(this._tunnelInterfaceAllowSshVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_interface_allow_stun: {
        value: cdktf.booleanToHclTerraform(this._tunnelInterfaceAllowStun),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tunnel_interface_allow_stun_variable: {
        value: cdktf.stringToHclTerraform(this._tunnelInterfaceAllowStunVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_interface_bind_loopback_tunnel: {
        value: cdktf.stringToHclTerraform(this._tunnelInterfaceBindLoopbackTunnel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_interface_bind_loopback_tunnel_variable: {
        value: cdktf.stringToHclTerraform(this._tunnelInterfaceBindLoopbackTunnelVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_interface_border: {
        value: cdktf.booleanToHclTerraform(this._tunnelInterfaceBorder),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tunnel_interface_border_variable: {
        value: cdktf.stringToHclTerraform(this._tunnelInterfaceBorderVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_interface_carrier: {
        value: cdktf.stringToHclTerraform(this._tunnelInterfaceCarrier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_interface_carrier_variable: {
        value: cdktf.stringToHclTerraform(this._tunnelInterfaceCarrierVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_interface_clear_dont_fragment: {
        value: cdktf.booleanToHclTerraform(this._tunnelInterfaceClearDontFragment),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tunnel_interface_clear_dont_fragment_variable: {
        value: cdktf.stringToHclTerraform(this._tunnelInterfaceClearDontFragmentVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_interface_color: {
        value: cdktf.stringToHclTerraform(this._tunnelInterfaceColor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_interface_color_restrict: {
        value: cdktf.booleanToHclTerraform(this._tunnelInterfaceColorRestrict),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tunnel_interface_color_restrict_variable: {
        value: cdktf.stringToHclTerraform(this._tunnelInterfaceColorRestrictVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_interface_color_variable: {
        value: cdktf.stringToHclTerraform(this._tunnelInterfaceColorVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_interface_cts_sgt_propagation: {
        value: cdktf.booleanToHclTerraform(this._tunnelInterfaceCtsSgtPropagation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tunnel_interface_cts_sgt_propagation_variable: {
        value: cdktf.stringToHclTerraform(this._tunnelInterfaceCtsSgtPropagationVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_interface_encapsulations: {
        value: cdktf.listMapperHcl(transportWanVpnInterfaceEthernetFeatureTunnelInterfaceEncapsulationsToHclTerraform, false)(this._tunnelInterfaceEncapsulations.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TransportWanVpnInterfaceEthernetFeatureTunnelInterfaceEncapsulationsList",
      },
      tunnel_interface_exclude_controller_group_list: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._tunnelInterfaceExcludeControllerGroupList),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      tunnel_interface_exclude_controller_group_list_variable: {
        value: cdktf.stringToHclTerraform(this._tunnelInterfaceExcludeControllerGroupListVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_interface_gre_tunnel_destination_ip: {
        value: cdktf.stringToHclTerraform(this._tunnelInterfaceGreTunnelDestinationIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_interface_gre_tunnel_destination_ip_variable: {
        value: cdktf.stringToHclTerraform(this._tunnelInterfaceGreTunnelDestinationIpVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_interface_groups: {
        value: cdktf.numberToHclTerraform(this._tunnelInterfaceGroups),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tunnel_interface_groups_variable: {
        value: cdktf.stringToHclTerraform(this._tunnelInterfaceGroupsVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_interface_hello_interval: {
        value: cdktf.numberToHclTerraform(this._tunnelInterfaceHelloInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tunnel_interface_hello_interval_variable: {
        value: cdktf.stringToHclTerraform(this._tunnelInterfaceHelloIntervalVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_interface_hello_tolerance: {
        value: cdktf.numberToHclTerraform(this._tunnelInterfaceHelloTolerance),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tunnel_interface_hello_tolerance_variable: {
        value: cdktf.stringToHclTerraform(this._tunnelInterfaceHelloToleranceVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_interface_last_resort_circuit: {
        value: cdktf.booleanToHclTerraform(this._tunnelInterfaceLastResortCircuit),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tunnel_interface_last_resort_circuit_variable: {
        value: cdktf.stringToHclTerraform(this._tunnelInterfaceLastResortCircuitVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_interface_low_bandwidth_link: {
        value: cdktf.booleanToHclTerraform(this._tunnelInterfaceLowBandwidthLink),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tunnel_interface_low_bandwidth_link_variable: {
        value: cdktf.stringToHclTerraform(this._tunnelInterfaceLowBandwidthLinkVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_interface_max_control_connections: {
        value: cdktf.numberToHclTerraform(this._tunnelInterfaceMaxControlConnections),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tunnel_interface_max_control_connections_variable: {
        value: cdktf.stringToHclTerraform(this._tunnelInterfaceMaxControlConnectionsVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_interface_nat_refresh_interval: {
        value: cdktf.numberToHclTerraform(this._tunnelInterfaceNatRefreshInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tunnel_interface_nat_refresh_interval_variable: {
        value: cdktf.stringToHclTerraform(this._tunnelInterfaceNatRefreshIntervalVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_interface_network_broadcast: {
        value: cdktf.booleanToHclTerraform(this._tunnelInterfaceNetworkBroadcast),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tunnel_interface_network_broadcast_variable: {
        value: cdktf.stringToHclTerraform(this._tunnelInterfaceNetworkBroadcastVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_interface_port_hop: {
        value: cdktf.booleanToHclTerraform(this._tunnelInterfacePortHop),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tunnel_interface_port_hop_variable: {
        value: cdktf.stringToHclTerraform(this._tunnelInterfacePortHopVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_interface_tunnel_tcp_mss: {
        value: cdktf.numberToHclTerraform(this._tunnelInterfaceTunnelTcpMss),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tunnel_interface_tunnel_tcp_mss_variable: {
        value: cdktf.stringToHclTerraform(this._tunnelInterfaceTunnelTcpMssVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_interface_vbond_as_stun_server: {
        value: cdktf.booleanToHclTerraform(this._tunnelInterfaceVbondAsStunServer),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tunnel_interface_vbond_as_stun_server_variable: {
        value: cdktf.stringToHclTerraform(this._tunnelInterfaceVbondAsStunServerVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_interface_vmanage_connection_preference: {
        value: cdktf.numberToHclTerraform(this._tunnelInterfaceVmanageConnectionPreference),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tunnel_interface_vmanage_connection_preference_variable: {
        value: cdktf.stringToHclTerraform(this._tunnelInterfaceVmanageConnectionPreferenceVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_qos_mode: {
        value: cdktf.stringToHclTerraform(this._tunnelQosMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_qos_mode_variable: {
        value: cdktf.stringToHclTerraform(this._tunnelQosModeVariable),
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
