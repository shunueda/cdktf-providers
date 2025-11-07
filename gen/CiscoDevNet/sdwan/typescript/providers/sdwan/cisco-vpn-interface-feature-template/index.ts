// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CiscoVpnInterfaceFeatureTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Apply ACL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#access_lists CiscoVpnInterfaceFeatureTemplate#access_lists}
  */
  readonly accessLists?: CiscoVpnInterfaceFeatureTemplateAccessLists[] | cdktf.IResolvable;
  /**
  * Assign IPv4 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#address CiscoVpnInterfaceFeatureTemplate#address}
  */
  readonly address?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#address_variable CiscoVpnInterfaceFeatureTemplate#address_variable}
  */
  readonly addressVariable?: string;
  /**
  * Timeout value for dynamically learned ARP entries, <0..2678400> seconds
  *   - Range: `0`-`2147483`
  *   - Default value: `1200`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#arp_timeout CiscoVpnInterfaceFeatureTemplate#arp_timeout}
  */
  readonly arpTimeout?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#arp_timeout_variable CiscoVpnInterfaceFeatureTemplate#arp_timeout_variable}
  */
  readonly arpTimeoutVariable?: string;
  /**
  * Interface auto detect bandwidth
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#auto_bandwidth_detect CiscoVpnInterfaceFeatureTemplate#auto_bandwidth_detect}
  */
  readonly autoBandwidthDetect?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#auto_bandwidth_detect_variable CiscoVpnInterfaceFeatureTemplate#auto_bandwidth_detect_variable}
  */
  readonly autoBandwidthDetectVariable?: string;
  /**
  * Link autonegotiation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#autonegotiate CiscoVpnInterfaceFeatureTemplate#autonegotiate}
  */
  readonly autonegotiate?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#autonegotiate_variable CiscoVpnInterfaceFeatureTemplate#autonegotiate_variable}
  */
  readonly autonegotiateVariable?: string;
  /**
  * Interface downstream bandwidth capacity, in kbps
  *   - Range: `1`-`2147483647`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#bandwidth_downstream CiscoVpnInterfaceFeatureTemplate#bandwidth_downstream}
  */
  readonly bandwidthDownstream?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#bandwidth_downstream_variable CiscoVpnInterfaceFeatureTemplate#bandwidth_downstream_variable}
  */
  readonly bandwidthDownstreamVariable?: string;
  /**
  * Interface upstream bandwidth capacity, in kbps
  *   - Range: `1`-`2147483647`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#bandwidth_upstream CiscoVpnInterfaceFeatureTemplate#bandwidth_upstream}
  */
  readonly bandwidthUpstream?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#bandwidth_upstream_variable CiscoVpnInterfaceFeatureTemplate#bandwidth_upstream_variable}
  */
  readonly bandwidthUpstreamVariable?: string;
  /**
  * Block packets originating from IP address that is not from this source
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#block_non_source_ip CiscoVpnInterfaceFeatureTemplate#block_non_source_ip}
  */
  readonly blockNonSourceIp?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#block_non_source_ip_variable CiscoVpnInterfaceFeatureTemplate#block_non_source_ip_variable}
  */
  readonly blockNonSourceIpVariable?: string;
  /**
  * Enable core region
  *   - Choices: `core`, `core-shared`
  *   - Default value: `core`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#core_region CiscoVpnInterfaceFeatureTemplate#core_region}
  */
  readonly coreRegion?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#core_region_variable CiscoVpnInterfaceFeatureTemplate#core_region_variable}
  */
  readonly coreRegionVariable?: string;
  /**
  * The description of the feature template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#description CiscoVpnInterfaceFeatureTemplate#description}
  */
  readonly description: string;
  /**
  * List of supported device types
  *   - Choices: `vedge-C8000V`, `vedge-C8300-1N1S-4T2X`, `vedge-C8300-1N1S-6T`, `vedge-C8300-2N2S-6T`, `vedge-C8300-2N2S-4T2X`, `vedge-C8500-12X4QC`, `vedge-C8500-12X`, `vedge-C8500-20X6C`, `vedge-C8500L-8S4X`, `vedge-C8200-1N-4T`, `vedge-C8200L-1N-4T`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#device_types CiscoVpnInterfaceFeatureTemplate#device_types}
  */
  readonly deviceTypes: string[];
  /**
  * Enable DHCP
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#dhcp CiscoVpnInterfaceFeatureTemplate#dhcp}
  */
  readonly dhcp?: boolean | cdktf.IResolvable;
  /**
  * Set administrative distance for DHCP default route
  *   - Range: `1`-`65536`
  *   - Default value: `1`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#dhcp_distance CiscoVpnInterfaceFeatureTemplate#dhcp_distance}
  */
  readonly dhcpDistance?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#dhcp_distance_variable CiscoVpnInterfaceFeatureTemplate#dhcp_distance_variable}
  */
  readonly dhcpDistanceVariable?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#dhcp_variable CiscoVpnInterfaceFeatureTemplate#dhcp_variable}
  */
  readonly dhcpVariable?: string;
  /**
  * Enable DHCPv6
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#dhcpv6 CiscoVpnInterfaceFeatureTemplate#dhcpv6}
  */
  readonly dhcpv6?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#dhcpv6_variable CiscoVpnInterfaceFeatureTemplate#dhcpv6_variable}
  */
  readonly dhcpv6Variable?: string;
  /**
  * Duplex mode
  *   - Choices: `full`, `half`, `auto`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#duplex CiscoVpnInterfaceFeatureTemplate#duplex}
  */
  readonly duplex?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#duplex_variable CiscoVpnInterfaceFeatureTemplate#duplex_variable}
  */
  readonly duplexVariable?: string;
  /**
  * Enable core region
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#enable_core_region CiscoVpnInterfaceFeatureTemplate#enable_core_region}
  */
  readonly enableCoreRegion?: boolean | cdktf.IResolvable;
  /**
  * Enables the interface for CTS SGT authorization and forwarding.
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#enable_sgt CiscoVpnInterfaceFeatureTemplate#enable_sgt}
  */
  readonly enableSgt?: boolean | cdktf.IResolvable;
  /**
  * Extend remote TLOC over a GRE tunnel to a local WAN interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#gre_tunnel_source_ip CiscoVpnInterfaceFeatureTemplate#gre_tunnel_source_ip}
  */
  readonly greTunnelSourceIp?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#gre_tunnel_source_ip_variable CiscoVpnInterfaceFeatureTemplate#gre_tunnel_source_ip_variable}
  */
  readonly greTunnelSourceIpVariable?: string;
  /**
  * Extend remote TLOC over a GRE tunnel to a local WAN interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#gre_tunnel_xconnect CiscoVpnInterfaceFeatureTemplate#gre_tunnel_xconnect}
  */
  readonly greTunnelXconnect?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#gre_tunnel_xconnect_variable CiscoVpnInterfaceFeatureTemplate#gre_tunnel_xconnect_variable}
  */
  readonly greTunnelXconnectVariable?: string;
  /**
  * Set this option to disable the icmp/icmpv6 redirect packets
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#icmp_redirect_disable CiscoVpnInterfaceFeatureTemplate#icmp_redirect_disable}
  */
  readonly icmpRedirectDisable?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#icmp_redirect_disable_variable CiscoVpnInterfaceFeatureTemplate#icmp_redirect_disable_variable}
  */
  readonly icmpRedirectDisableVariable?: string;
  /**
  * Interface description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#interface_description CiscoVpnInterfaceFeatureTemplate#interface_description}
  */
  readonly interfaceDescription?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#interface_description_variable CiscoVpnInterfaceFeatureTemplate#interface_description_variable}
  */
  readonly interfaceDescriptionVariable?: string;
  /**
  * Interface MTU GigabitEthernet0 <1500..1518>, Other GigabitEthernet <1500..9216> in bytes
  *   - Range: `1500`-`9216`
  *   - Default value: `1500`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#interface_mtu CiscoVpnInterfaceFeatureTemplate#interface_mtu}
  */
  readonly interfaceMtu?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#interface_mtu_variable CiscoVpnInterfaceFeatureTemplate#interface_mtu_variable}
  */
  readonly interfaceMtuVariable?: string;
  /**
  * Interface name: ge0/<0-..> or ge0/<0-..>.vlanid or irb<bridgeid:1-63> or loopback<string> or natpool-<1..31> when present
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#interface_name CiscoVpnInterfaceFeatureTemplate#interface_name}
  */
  readonly interfaceName?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#interface_name_variable CiscoVpnInterfaceFeatureTemplate#interface_name_variable}
  */
  readonly interfaceNameVariable?: string;
  /**
  * IP Directed-Broadcast
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#ip_directed_broadcast CiscoVpnInterfaceFeatureTemplate#ip_directed_broadcast}
  */
  readonly ipDirectedBroadcast?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#ip_directed_broadcast_variable CiscoVpnInterfaceFeatureTemplate#ip_directed_broadcast_variable}
  */
  readonly ipDirectedBroadcastVariable?: string;
  /**
  * IP MTU for GigabitEthernet main <576..Interface MTU>, GigabitEthernet subinterface <576..9216>, Other Interfaces <576..2000> in bytes
  *   - Range: `576`-`9216`
  *   - Default value: `1500`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#ip_mtu CiscoVpnInterfaceFeatureTemplate#ip_mtu}
  */
  readonly ipMtu?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#ip_mtu_variable CiscoVpnInterfaceFeatureTemplate#ip_mtu_variable}
  */
  readonly ipMtuVariable?: string;
  /**
  * Iperf server for auto bandwidth detect
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#iperf_server CiscoVpnInterfaceFeatureTemplate#iperf_server}
  */
  readonly iperfServer?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#iperf_server_variable CiscoVpnInterfaceFeatureTemplate#iperf_server_variable}
  */
  readonly iperfServerVariable?: string;
  /**
  * List of DHCP IPv4 helper addresses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#ipv4_dhcp_helper CiscoVpnInterfaceFeatureTemplate#ipv4_dhcp_helper}
  */
  readonly ipv4DhcpHelper?: string[];
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#ipv4_dhcp_helper_variable CiscoVpnInterfaceFeatureTemplate#ipv4_dhcp_helper_variable}
  */
  readonly ipv4DhcpHelperVariable?: string;
  /**
  * Assign secondary IP addresses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#ipv4_secondary_addresses CiscoVpnInterfaceFeatureTemplate#ipv4_secondary_addresses}
  */
  readonly ipv4SecondaryAddresses?: CiscoVpnInterfaceFeatureTemplateIpv4SecondaryAddresses[] | cdktf.IResolvable;
  /**
  * Enable VRRP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#ipv4_vrrps CiscoVpnInterfaceFeatureTemplate#ipv4_vrrps}
  */
  readonly ipv4Vrrps?: CiscoVpnInterfaceFeatureTemplateIpv4Vrrps[] | cdktf.IResolvable;
  /**
  * Apply IPv6 access list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#ipv6_access_lists CiscoVpnInterfaceFeatureTemplate#ipv6_access_lists}
  */
  readonly ipv6AccessLists?: CiscoVpnInterfaceFeatureTemplateIpv6AccessLists[] | cdktf.IResolvable;
  /**
  * Assign IPv6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#ipv6_address CiscoVpnInterfaceFeatureTemplate#ipv6_address}
  */
  readonly ipv6Address?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#ipv6_address_variable CiscoVpnInterfaceFeatureTemplate#ipv6_address_variable}
  */
  readonly ipv6AddressVariable?: string;
  /**
  * DHCPv6 Helper
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#ipv6_dhcp_helpers CiscoVpnInterfaceFeatureTemplate#ipv6_dhcp_helpers}
  */
  readonly ipv6DhcpHelpers?: CiscoVpnInterfaceFeatureTemplateIpv6DhcpHelpers[] | cdktf.IResolvable;
  /**
  * NAT64 on this interface
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#ipv6_nat CiscoVpnInterfaceFeatureTemplate#ipv6_nat}
  */
  readonly ipv6Nat?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#ipv6_nat_variable CiscoVpnInterfaceFeatureTemplate#ipv6_nat_variable}
  */
  readonly ipv6NatVariable?: string;
  /**
  * Assign secondary IPv6 addresses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#ipv6_secondary_addresses CiscoVpnInterfaceFeatureTemplate#ipv6_secondary_addresses}
  */
  readonly ipv6SecondaryAddresses?: CiscoVpnInterfaceFeatureTemplateIpv6SecondaryAddresses[] | cdktf.IResolvable;
  /**
  * Enable VRRP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#ipv6_vrrps CiscoVpnInterfaceFeatureTemplate#ipv6_vrrps}
  */
  readonly ipv6Vrrps?: CiscoVpnInterfaceFeatureTemplateIpv6Vrrps[] | cdktf.IResolvable;
  /**
  * Interval for interface load calculation
  *   - Range: `30`-`600`
  *   - Default value: `30`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#load_interval CiscoVpnInterfaceFeatureTemplate#load_interval}
  */
  readonly loadInterval?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#load_interval_variable CiscoVpnInterfaceFeatureTemplate#load_interval_variable}
  */
  readonly loadIntervalVariable?: string;
  /**
  * Set MAC-layer address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#mac_address CiscoVpnInterfaceFeatureTemplate#mac_address}
  */
  readonly macAddress?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#mac_address_variable CiscoVpnInterfaceFeatureTemplate#mac_address_variable}
  */
  readonly macAddressVariable?: string;
  /**
  * Media type
  *   - Choices: `auto-select`, `rj45`, `sfp`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#media_type CiscoVpnInterfaceFeatureTemplate#media_type}
  */
  readonly mediaType?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#media_type_variable CiscoVpnInterfaceFeatureTemplate#media_type_variable}
  */
  readonly mediaTypeVariable?: string;
  /**
  * The name of the feature template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#name CiscoVpnInterfaceFeatureTemplate#name}
  */
  readonly name: string;
  /**
  * Network Address Translation on this interface
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#nat CiscoVpnInterfaceFeatureTemplate#nat}
  */
  readonly nat?: boolean | cdktf.IResolvable;
  /**
  * NAT64 on this interface
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#nat64_interface CiscoVpnInterfaceFeatureTemplate#nat64_interface}
  */
  readonly nat64Interface?: boolean | cdktf.IResolvable;
  /**
  * NAT66 on this interface
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#nat66_interface CiscoVpnInterfaceFeatureTemplate#nat66_interface}
  */
  readonly nat66Interface?: boolean | cdktf.IResolvable;
  /**
  * Configure NAT Inside Loopback Interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#nat_inside_source_loopback_interface CiscoVpnInterfaceFeatureTemplate#nat_inside_source_loopback_interface}
  */
  readonly natInsideSourceLoopbackInterface?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#nat_inside_source_loopback_interface_variable CiscoVpnInterfaceFeatureTemplate#nat_inside_source_loopback_interface_variable}
  */
  readonly natInsideSourceLoopbackInterfaceVariable?: string;
  /**
  * Enable port translation(PAT)
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#nat_overload CiscoVpnInterfaceFeatureTemplate#nat_overload}
  */
  readonly natOverload?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#nat_overload_variable CiscoVpnInterfaceFeatureTemplate#nat_overload_variable}
  */
  readonly natOverloadVariable?: string;
  /**
  * Ending IP address of NAT Pool Prefix Length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#nat_pool_prefix_length CiscoVpnInterfaceFeatureTemplate#nat_pool_prefix_length}
  */
  readonly natPoolPrefixLength?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#nat_pool_prefix_length_variable CiscoVpnInterfaceFeatureTemplate#nat_pool_prefix_length_variable}
  */
  readonly natPoolPrefixLengthVariable?: string;
  /**
  * Ending IP address of NAT pool range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#nat_pool_range_end CiscoVpnInterfaceFeatureTemplate#nat_pool_range_end}
  */
  readonly natPoolRangeEnd?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#nat_pool_range_end_variable CiscoVpnInterfaceFeatureTemplate#nat_pool_range_end_variable}
  */
  readonly natPoolRangeEndVariable?: string;
  /**
  * Starting IP address of NAT pool range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#nat_pool_range_start CiscoVpnInterfaceFeatureTemplate#nat_pool_range_start}
  */
  readonly natPoolRangeStart?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#nat_pool_range_start_variable CiscoVpnInterfaceFeatureTemplate#nat_pool_range_start_variable}
  */
  readonly natPoolRangeStartVariable?: string;
  /**
  * NAT type
  *   - Choices: `interface`, `pool`, `loopback`
  *   - Default value: `interface`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#nat_type CiscoVpnInterfaceFeatureTemplate#nat_type}
  */
  readonly natType?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#nat_type_variable CiscoVpnInterfaceFeatureTemplate#nat_type_variable}
  */
  readonly natTypeVariable?: string;
  /**
  * Configure interface as Power-over-Ethernet source
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#poe CiscoVpnInterfaceFeatureTemplate#poe}
  */
  readonly poe?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#poe_variable CiscoVpnInterfaceFeatureTemplate#poe_variable}
  */
  readonly poeVariable?: string;
  /**
  * Enable/Disable CTS SGT propagation on an interface.
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#propagate_sgt CiscoVpnInterfaceFeatureTemplate#propagate_sgt}
  */
  readonly propagateSgt?: boolean | cdktf.IResolvable;
  /**
  * Adaptive QoS default downstream bandwidth
  *   - Range: `8`-`100000000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#qos_adaptive_bandwidth_downstream CiscoVpnInterfaceFeatureTemplate#qos_adaptive_bandwidth_downstream}
  */
  readonly qosAdaptiveBandwidthDownstream?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#qos_adaptive_bandwidth_downstream_variable CiscoVpnInterfaceFeatureTemplate#qos_adaptive_bandwidth_downstream_variable}
  */
  readonly qosAdaptiveBandwidthDownstreamVariable?: string;
  /**
  * Adaptive QoS default upstream bandwidth
  *   - Range: `8`-`100000000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#qos_adaptive_bandwidth_upstream CiscoVpnInterfaceFeatureTemplate#qos_adaptive_bandwidth_upstream}
  */
  readonly qosAdaptiveBandwidthUpstream?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#qos_adaptive_bandwidth_upstream_variable CiscoVpnInterfaceFeatureTemplate#qos_adaptive_bandwidth_upstream_variable}
  */
  readonly qosAdaptiveBandwidthUpstreamVariable?: string;
  /**
  * Downstream max bandwidth limit
  *   - Range: `8`-`100000000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#qos_adaptive_max_downstream CiscoVpnInterfaceFeatureTemplate#qos_adaptive_max_downstream}
  */
  readonly qosAdaptiveMaxDownstream?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#qos_adaptive_max_downstream_variable CiscoVpnInterfaceFeatureTemplate#qos_adaptive_max_downstream_variable}
  */
  readonly qosAdaptiveMaxDownstreamVariable?: string;
  /**
  * Upstream max bandwidth limit
  *   - Range: `8`-`100000000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#qos_adaptive_max_upstream CiscoVpnInterfaceFeatureTemplate#qos_adaptive_max_upstream}
  */
  readonly qosAdaptiveMaxUpstream?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#qos_adaptive_max_upstream_variable CiscoVpnInterfaceFeatureTemplate#qos_adaptive_max_upstream_variable}
  */
  readonly qosAdaptiveMaxUpstreamVariable?: string;
  /**
  * Downstream min bandwidth limit
  *   - Range: `8`-`100000000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#qos_adaptive_min_downstream CiscoVpnInterfaceFeatureTemplate#qos_adaptive_min_downstream}
  */
  readonly qosAdaptiveMinDownstream?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#qos_adaptive_min_downstream_variable CiscoVpnInterfaceFeatureTemplate#qos_adaptive_min_downstream_variable}
  */
  readonly qosAdaptiveMinDownstreamVariable?: string;
  /**
  * Upstream min bandwidth limit
  *   - Range: `8`-`100000000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#qos_adaptive_min_upstream CiscoVpnInterfaceFeatureTemplate#qos_adaptive_min_upstream}
  */
  readonly qosAdaptiveMinUpstream?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#qos_adaptive_min_upstream_variable CiscoVpnInterfaceFeatureTemplate#qos_adaptive_min_upstream_variable}
  */
  readonly qosAdaptiveMinUpstreamVariable?: string;
  /**
  * Periodic timer for adaptive QoS in minutes
  *   - Range: `1`-`720`
  *   - Default value: `15`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#qos_adaptive_period CiscoVpnInterfaceFeatureTemplate#qos_adaptive_period}
  */
  readonly qosAdaptivePeriod?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#qos_adaptive_period_variable CiscoVpnInterfaceFeatureTemplate#qos_adaptive_period_variable}
  */
  readonly qosAdaptivePeriodVariable?: string;
  /**
  * Name of QoS map
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#qos_map CiscoVpnInterfaceFeatureTemplate#qos_map}
  */
  readonly qosMap?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#qos_map_variable CiscoVpnInterfaceFeatureTemplate#qos_map_variable}
  */
  readonly qosMapVariable?: string;
  /**
  * Name of VPN QoS map
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#qos_map_vpn CiscoVpnInterfaceFeatureTemplate#qos_map_vpn}
  */
  readonly qosMapVpn?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#qos_map_vpn_variable CiscoVpnInterfaceFeatureTemplate#qos_map_vpn_variable}
  */
  readonly qosMapVpnVariable?: string;
  /**
  * Name of rewrite rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#rewrite_rule_name CiscoVpnInterfaceFeatureTemplate#rewrite_rule_name}
  */
  readonly rewriteRuleName?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#rewrite_rule_name_variable CiscoVpnInterfaceFeatureTemplate#rewrite_rule_name_variable}
  */
  readonly rewriteRuleNameVariable?: string;
  /**
  * Enable secondary region
  *   - Choices: `off`, `secondary-only`, `secondary-shared`
  *   - Default value: `off`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#secondary_region CiscoVpnInterfaceFeatureTemplate#secondary_region}
  */
  readonly secondaryRegion?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#secondary_region_variable CiscoVpnInterfaceFeatureTemplate#secondary_region_variable}
  */
  readonly secondaryRegionVariable?: string;
  /**
  * Enables the interface for CTS SGT authorization and forwarding.
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#sgt_enforcement CiscoVpnInterfaceFeatureTemplate#sgt_enforcement}
  */
  readonly sgtEnforcement?: boolean | cdktf.IResolvable;
  /**
  * SGT value between 2 and 65519.
  *   - Range: `2`-`65519`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#sgt_enforcement_sgt CiscoVpnInterfaceFeatureTemplate#sgt_enforcement_sgt}
  */
  readonly sgtEnforcementSgt?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#sgt_enforcement_sgt_variable CiscoVpnInterfaceFeatureTemplate#sgt_enforcement_sgt_variable}
  */
  readonly sgtEnforcementSgtVariable?: string;
  /**
  * 1ge  interfaces: [0..1000000]kbps; 10ge interfaces: [0..10000000]kbps
  *   - Range: `8`-`100000000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#shaping_rate CiscoVpnInterfaceFeatureTemplate#shaping_rate}
  */
  readonly shapingRate?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#shaping_rate_variable CiscoVpnInterfaceFeatureTemplate#shaping_rate_variable}
  */
  readonly shapingRateVariable?: string;
  /**
  * Administrative state
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#shutdown CiscoVpnInterfaceFeatureTemplate#shutdown}
  */
  readonly shutdown?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#shutdown_variable CiscoVpnInterfaceFeatureTemplate#shutdown_variable}
  */
  readonly shutdownVariable?: string;
  /**
  * Set interface speed
  *   - Choices: `10`, `100`, `1000`, `2500`, `10000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#speed CiscoVpnInterfaceFeatureTemplate#speed}
  */
  readonly speed?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#speed_variable CiscoVpnInterfaceFeatureTemplate#speed_variable}
  */
  readonly speedVariable?: string;
  /**
  * Configure static ARP entries
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#static_arps CiscoVpnInterfaceFeatureTemplate#static_arps}
  */
  readonly staticArps?: CiscoVpnInterfaceFeatureTemplateStaticArps[] | cdktf.IResolvable;
  /**
  * static NAT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#static_nat66_entries CiscoVpnInterfaceFeatureTemplate#static_nat66_entries}
  */
  readonly staticNat66Entries?: CiscoVpnInterfaceFeatureTemplateStaticNat66Entries[] | cdktf.IResolvable;
  /**
  * Configure static NAT entries
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#static_nat_entries CiscoVpnInterfaceFeatureTemplate#static_nat_entries}
  */
  readonly staticNatEntries?: CiscoVpnInterfaceFeatureTemplateStaticNatEntries[] | cdktf.IResolvable;
  /**
  * Configure Port Forward entries
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#static_port_forward_entries CiscoVpnInterfaceFeatureTemplate#static_port_forward_entries}
  */
  readonly staticPortForwardEntries?: CiscoVpnInterfaceFeatureTemplateStaticPortForwardEntries[] | cdktf.IResolvable;
  /**
  * SGT value between 2 and 65519.
  *   - Range: `2`-`65519`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#static_sgt CiscoVpnInterfaceFeatureTemplate#static_sgt}
  */
  readonly staticSgt?: number;
  /**
  * Indicates that the interface is trustworthy for CTS.
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#static_sgt_trusted CiscoVpnInterfaceFeatureTemplate#static_sgt_trusted}
  */
  readonly staticSgtTrusted?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#static_sgt_variable CiscoVpnInterfaceFeatureTemplate#static_sgt_variable}
  */
  readonly staticSgtVariable?: string;
  /**
  * TCP MSS on SYN packets, in bytes
  *   - Range: `500`-`1460`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#tcp_mss_adjust CiscoVpnInterfaceFeatureTemplate#tcp_mss_adjust}
  */
  readonly tcpMssAdjust?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#tcp_mss_adjust_variable CiscoVpnInterfaceFeatureTemplate#tcp_mss_adjust_variable}
  */
  readonly tcpMssAdjustVariable?: string;
  /**
  * Set NAT TCP session timeout, in minutes
  *   - Range: `1`-`8947`
  *   - Default value: `60`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#tcp_timeout CiscoVpnInterfaceFeatureTemplate#tcp_timeout}
  */
  readonly tcpTimeout?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#tcp_timeout_variable CiscoVpnInterfaceFeatureTemplate#tcp_timeout_variable}
  */
  readonly tcpTimeoutVariable?: string;
  /**
  * Extends a local TLOC to a remote node only for vpn 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#tloc_extension CiscoVpnInterfaceFeatureTemplate#tloc_extension}
  */
  readonly tlocExtension?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#tloc_extension_variable CiscoVpnInterfaceFeatureTemplate#tloc_extension_variable}
  */
  readonly tlocExtensionVariable?: string;
  /**
  * Enable tracker for this interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#tracker CiscoVpnInterfaceFeatureTemplate#tracker}
  */
  readonly tracker?: string[];
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#tracker_variable CiscoVpnInterfaceFeatureTemplate#tracker_variable}
  */
  readonly trackerVariable?: string;
  /**
  * Tunnels Bandwidth Percent
  *   - Range: `1`-`99`
  *   - Default value: `50`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#tunnel_bandwidth CiscoVpnInterfaceFeatureTemplate#tunnel_bandwidth}
  */
  readonly tunnelBandwidth?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#tunnel_bandwidth_variable CiscoVpnInterfaceFeatureTemplate#tunnel_bandwidth_variable}
  */
  readonly tunnelBandwidthVariable?: string;
  /**
  * Allow all traffic. Overrides all other allow-service options if allow-service all is set
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#tunnel_interface_allow_all CiscoVpnInterfaceFeatureTemplate#tunnel_interface_allow_all}
  */
  readonly tunnelInterfaceAllowAll?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#tunnel_interface_allow_all_variable CiscoVpnInterfaceFeatureTemplate#tunnel_interface_allow_all_variable}
  */
  readonly tunnelInterfaceAllowAllVariable?: string;
  /**
  * Allow/deny BGP
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#tunnel_interface_allow_bgp CiscoVpnInterfaceFeatureTemplate#tunnel_interface_allow_bgp}
  */
  readonly tunnelInterfaceAllowBgp?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#tunnel_interface_allow_bgp_variable CiscoVpnInterfaceFeatureTemplate#tunnel_interface_allow_bgp_variable}
  */
  readonly tunnelInterfaceAllowBgpVariable?: string;
  /**
  * Allow/Deny DHCP
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#tunnel_interface_allow_dhcp CiscoVpnInterfaceFeatureTemplate#tunnel_interface_allow_dhcp}
  */
  readonly tunnelInterfaceAllowDhcp?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#tunnel_interface_allow_dhcp_variable CiscoVpnInterfaceFeatureTemplate#tunnel_interface_allow_dhcp_variable}
  */
  readonly tunnelInterfaceAllowDhcpVariable?: string;
  /**
  * Allow/Deny DNS
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#tunnel_interface_allow_dns CiscoVpnInterfaceFeatureTemplate#tunnel_interface_allow_dns}
  */
  readonly tunnelInterfaceAllowDns?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#tunnel_interface_allow_dns_variable CiscoVpnInterfaceFeatureTemplate#tunnel_interface_allow_dns_variable}
  */
  readonly tunnelInterfaceAllowDnsVariable?: string;
  /**
  * Allow/Deny Https
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#tunnel_interface_allow_https CiscoVpnInterfaceFeatureTemplate#tunnel_interface_allow_https}
  */
  readonly tunnelInterfaceAllowHttps?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#tunnel_interface_allow_https_variable CiscoVpnInterfaceFeatureTemplate#tunnel_interface_allow_https_variable}
  */
  readonly tunnelInterfaceAllowHttpsVariable?: string;
  /**
  * Allow/Deny ICMP
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#tunnel_interface_allow_icmp CiscoVpnInterfaceFeatureTemplate#tunnel_interface_allow_icmp}
  */
  readonly tunnelInterfaceAllowIcmp?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#tunnel_interface_allow_icmp_variable CiscoVpnInterfaceFeatureTemplate#tunnel_interface_allow_icmp_variable}
  */
  readonly tunnelInterfaceAllowIcmpVariable?: string;
  /**
  * Allow/Deny NETCONF
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#tunnel_interface_allow_netconf CiscoVpnInterfaceFeatureTemplate#tunnel_interface_allow_netconf}
  */
  readonly tunnelInterfaceAllowNetconf?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#tunnel_interface_allow_netconf_variable CiscoVpnInterfaceFeatureTemplate#tunnel_interface_allow_netconf_variable}
  */
  readonly tunnelInterfaceAllowNetconfVariable?: string;
  /**
  * Allow/Deny NTP
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#tunnel_interface_allow_ntp CiscoVpnInterfaceFeatureTemplate#tunnel_interface_allow_ntp}
  */
  readonly tunnelInterfaceAllowNtp?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#tunnel_interface_allow_ntp_variable CiscoVpnInterfaceFeatureTemplate#tunnel_interface_allow_ntp_variable}
  */
  readonly tunnelInterfaceAllowNtpVariable?: string;
  /**
  * Allow/Deny OSPF
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#tunnel_interface_allow_ospf CiscoVpnInterfaceFeatureTemplate#tunnel_interface_allow_ospf}
  */
  readonly tunnelInterfaceAllowOspf?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#tunnel_interface_allow_ospf_variable CiscoVpnInterfaceFeatureTemplate#tunnel_interface_allow_ospf_variable}
  */
  readonly tunnelInterfaceAllowOspfVariable?: string;
  /**
  * Allow/Deny SNMP
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#tunnel_interface_allow_snmp CiscoVpnInterfaceFeatureTemplate#tunnel_interface_allow_snmp}
  */
  readonly tunnelInterfaceAllowSnmp?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#tunnel_interface_allow_snmp_variable CiscoVpnInterfaceFeatureTemplate#tunnel_interface_allow_snmp_variable}
  */
  readonly tunnelInterfaceAllowSnmpVariable?: string;
  /**
  * Allow/Deny SSH
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#tunnel_interface_allow_ssh CiscoVpnInterfaceFeatureTemplate#tunnel_interface_allow_ssh}
  */
  readonly tunnelInterfaceAllowSsh?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#tunnel_interface_allow_ssh_variable CiscoVpnInterfaceFeatureTemplate#tunnel_interface_allow_ssh_variable}
  */
  readonly tunnelInterfaceAllowSshVariable?: string;
  /**
  * Allow/Deny STUN
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#tunnel_interface_allow_stun CiscoVpnInterfaceFeatureTemplate#tunnel_interface_allow_stun}
  */
  readonly tunnelInterfaceAllowStun?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#tunnel_interface_allow_stun_variable CiscoVpnInterfaceFeatureTemplate#tunnel_interface_allow_stun_variable}
  */
  readonly tunnelInterfaceAllowStunVariable?: string;
  /**
  * Bind loopback tunnel interface to a physical interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#tunnel_interface_bind_loopback_tunnel CiscoVpnInterfaceFeatureTemplate#tunnel_interface_bind_loopback_tunnel}
  */
  readonly tunnelInterfaceBindLoopbackTunnel?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#tunnel_interface_bind_loopback_tunnel_variable CiscoVpnInterfaceFeatureTemplate#tunnel_interface_bind_loopback_tunnel_variable}
  */
  readonly tunnelInterfaceBindLoopbackTunnelVariable?: string;
  /**
  * Set TLOC as border TLOC
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#tunnel_interface_border CiscoVpnInterfaceFeatureTemplate#tunnel_interface_border}
  */
  readonly tunnelInterfaceBorder?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#tunnel_interface_border_variable CiscoVpnInterfaceFeatureTemplate#tunnel_interface_border_variable}
  */
  readonly tunnelInterfaceBorderVariable?: string;
  /**
  * Set carrier for TLOC
  *   - Choices: `default`, `carrier1`, `carrier2`, `carrier3`, `carrier4`, `carrier5`, `carrier6`, `carrier7`, `carrier8`
  *   - Default value: `default`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#tunnel_interface_carrier CiscoVpnInterfaceFeatureTemplate#tunnel_interface_carrier}
  */
  readonly tunnelInterfaceCarrier?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#tunnel_interface_carrier_variable CiscoVpnInterfaceFeatureTemplate#tunnel_interface_carrier_variable}
  */
  readonly tunnelInterfaceCarrierVariable?: string;
  /**
  * Enable clear dont fragment (Currently Only SDWAN Tunnel Interface)
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#tunnel_interface_clear_dont_fragment CiscoVpnInterfaceFeatureTemplate#tunnel_interface_clear_dont_fragment}
  */
  readonly tunnelInterfaceClearDontFragment?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#tunnel_interface_clear_dont_fragment_variable CiscoVpnInterfaceFeatureTemplate#tunnel_interface_clear_dont_fragment_variable}
  */
  readonly tunnelInterfaceClearDontFragmentVariable?: string;
  /**
  * Set color for TLOC
  *   - Choices: `default`, `mpls`, `metro-ethernet`, `biz-internet`, `public-internet`, `lte`, `3g`, `red`, `green`, `blue`, `gold`, `silver`, `bronze`, `custom1`, `custom2`, `custom3`, `private1`, `private2`, `private3`, `private4`, `private5`, `private6`
  *   - Default value: `default`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#tunnel_interface_color CiscoVpnInterfaceFeatureTemplate#tunnel_interface_color}
  */
  readonly tunnelInterfaceColor?: string;
  /**
  * Restrict this TLOC behavior
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#tunnel_interface_color_restrict CiscoVpnInterfaceFeatureTemplate#tunnel_interface_color_restrict}
  */
  readonly tunnelInterfaceColorRestrict?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#tunnel_interface_color_restrict_variable CiscoVpnInterfaceFeatureTemplate#tunnel_interface_color_restrict_variable}
  */
  readonly tunnelInterfaceColorRestrictVariable?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#tunnel_interface_color_variable CiscoVpnInterfaceFeatureTemplate#tunnel_interface_color_variable}
  */
  readonly tunnelInterfaceColorVariable?: string;
  /**
  * Allow Control Connection
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#tunnel_interface_control_connections CiscoVpnInterfaceFeatureTemplate#tunnel_interface_control_connections}
  */
  readonly tunnelInterfaceControlConnections?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#tunnel_interface_control_connections_variable CiscoVpnInterfaceFeatureTemplate#tunnel_interface_control_connections_variable}
  */
  readonly tunnelInterfaceControlConnectionsVariable?: string;
  /**
  * Encapsulation for TLOC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#tunnel_interface_encapsulations CiscoVpnInterfaceFeatureTemplate#tunnel_interface_encapsulations}
  */
  readonly tunnelInterfaceEncapsulations?: CiscoVpnInterfaceFeatureTemplateTunnelInterfaceEncapsulations[] | cdktf.IResolvable;
  /**
  * Exclude the following controller groups defined in this list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#tunnel_interface_exclude_controller_group_list CiscoVpnInterfaceFeatureTemplate#tunnel_interface_exclude_controller_group_list}
  */
  readonly tunnelInterfaceExcludeControllerGroupList?: number[];
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#tunnel_interface_exclude_controller_group_list_variable CiscoVpnInterfaceFeatureTemplate#tunnel_interface_exclude_controller_group_list_variable}
  */
  readonly tunnelInterfaceExcludeControllerGroupListVariable?: string;
  /**
  * Extend the TLOC to a remote node over GRE tunnel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#tunnel_interface_gre_tunnel_destination_ip CiscoVpnInterfaceFeatureTemplate#tunnel_interface_gre_tunnel_destination_ip}
  */
  readonly tunnelInterfaceGreTunnelDestinationIp?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#tunnel_interface_gre_tunnel_destination_ip_variable CiscoVpnInterfaceFeatureTemplate#tunnel_interface_gre_tunnel_destination_ip_variable}
  */
  readonly tunnelInterfaceGreTunnelDestinationIpVariable?: string;
  /**
  * List of groups
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#tunnel_interface_groups CiscoVpnInterfaceFeatureTemplate#tunnel_interface_groups}
  */
  readonly tunnelInterfaceGroups?: number[];
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#tunnel_interface_groups_variable CiscoVpnInterfaceFeatureTemplate#tunnel_interface_groups_variable}
  */
  readonly tunnelInterfaceGroupsVariable?: string;
  /**
  * Set time period of control hello packets <100..600000> milli seconds
  *   - Range: `100`-`600000`
  *   - Default value: `1000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#tunnel_interface_hello_interval CiscoVpnInterfaceFeatureTemplate#tunnel_interface_hello_interval}
  */
  readonly tunnelInterfaceHelloInterval?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#tunnel_interface_hello_interval_variable CiscoVpnInterfaceFeatureTemplate#tunnel_interface_hello_interval_variable}
  */
  readonly tunnelInterfaceHelloIntervalVariable?: string;
  /**
  * Set tolerance of control hello packets <12..6000> seconds
  *   - Range: `12`-`6000`
  *   - Default value: `12`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#tunnel_interface_hello_tolerance CiscoVpnInterfaceFeatureTemplate#tunnel_interface_hello_tolerance}
  */
  readonly tunnelInterfaceHelloTolerance?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#tunnel_interface_hello_tolerance_variable CiscoVpnInterfaceFeatureTemplate#tunnel_interface_hello_tolerance_variable}
  */
  readonly tunnelInterfaceHelloToleranceVariable?: string;
  /**
  * Set TLOC as last resort
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#tunnel_interface_last_resort_circuit CiscoVpnInterfaceFeatureTemplate#tunnel_interface_last_resort_circuit}
  */
  readonly tunnelInterfaceLastResortCircuit?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#tunnel_interface_last_resort_circuit_variable CiscoVpnInterfaceFeatureTemplate#tunnel_interface_last_resort_circuit_variable}
  */
  readonly tunnelInterfaceLastResortCircuitVariable?: string;
  /**
  * Set the interface as a low-bandwidth circuit
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#tunnel_interface_low_bandwidth_link CiscoVpnInterfaceFeatureTemplate#tunnel_interface_low_bandwidth_link}
  */
  readonly tunnelInterfaceLowBandwidthLink?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#tunnel_interface_low_bandwidth_link_variable CiscoVpnInterfaceFeatureTemplate#tunnel_interface_low_bandwidth_link_variable}
  */
  readonly tunnelInterfaceLowBandwidthLinkVariable?: string;
  /**
  * Set the maximum number of control connections for this TLOC
  *   - Range: `0`-`100`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#tunnel_interface_max_control_connections CiscoVpnInterfaceFeatureTemplate#tunnel_interface_max_control_connections}
  */
  readonly tunnelInterfaceMaxControlConnections?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#tunnel_interface_max_control_connections_variable CiscoVpnInterfaceFeatureTemplate#tunnel_interface_max_control_connections_variable}
  */
  readonly tunnelInterfaceMaxControlConnectionsVariable?: string;
  /**
  * Set time period of nat refresh packets <1...60> seconds
  *   - Range: `1`-`60`
  *   - Default value: `5`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#tunnel_interface_nat_refresh_interval CiscoVpnInterfaceFeatureTemplate#tunnel_interface_nat_refresh_interval}
  */
  readonly tunnelInterfaceNatRefreshInterval?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#tunnel_interface_nat_refresh_interval_variable CiscoVpnInterfaceFeatureTemplate#tunnel_interface_nat_refresh_interval_variable}
  */
  readonly tunnelInterfaceNatRefreshIntervalVariable?: string;
  /**
  * Accept and respond to network-prefix-directed broadcasts)
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#tunnel_interface_network_broadcast CiscoVpnInterfaceFeatureTemplate#tunnel_interface_network_broadcast}
  */
  readonly tunnelInterfaceNetworkBroadcast?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#tunnel_interface_network_broadcast_variable CiscoVpnInterfaceFeatureTemplate#tunnel_interface_network_broadcast_variable}
  */
  readonly tunnelInterfaceNetworkBroadcastVariable?: string;
  /**
  * Disallow port hopping on the tunnel interface
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#tunnel_interface_port_hop CiscoVpnInterfaceFeatureTemplate#tunnel_interface_port_hop}
  */
  readonly tunnelInterfacePortHop?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#tunnel_interface_port_hop_variable CiscoVpnInterfaceFeatureTemplate#tunnel_interface_port_hop_variable}
  */
  readonly tunnelInterfacePortHopVariable?: string;
  /**
  * CTS SGT Propagation configuration
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#tunnel_interface_propagate_sgt CiscoVpnInterfaceFeatureTemplate#tunnel_interface_propagate_sgt}
  */
  readonly tunnelInterfacePropagateSgt?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#tunnel_interface_propagate_sgt_variable CiscoVpnInterfaceFeatureTemplate#tunnel_interface_propagate_sgt_variable}
  */
  readonly tunnelInterfacePropagateSgtVariable?: string;
  /**
  * Tunnel TCP MSS on SYN packets, in bytes
  *   - Range: `500`-`1460`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#tunnel_interface_tunnel_tcp_mss CiscoVpnInterfaceFeatureTemplate#tunnel_interface_tunnel_tcp_mss}
  */
  readonly tunnelInterfaceTunnelTcpMss?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#tunnel_interface_tunnel_tcp_mss_variable CiscoVpnInterfaceFeatureTemplate#tunnel_interface_tunnel_tcp_mss_variable}
  */
  readonly tunnelInterfaceTunnelTcpMssVariable?: string;
  /**
  * Put this wan interface in STUN mode only
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#tunnel_interface_vbond_as_stun_server CiscoVpnInterfaceFeatureTemplate#tunnel_interface_vbond_as_stun_server}
  */
  readonly tunnelInterfaceVbondAsStunServer?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#tunnel_interface_vbond_as_stun_server_variable CiscoVpnInterfaceFeatureTemplate#tunnel_interface_vbond_as_stun_server_variable}
  */
  readonly tunnelInterfaceVbondAsStunServerVariable?: string;
  /**
  * Set interface preference for control connection to vManage <0..8>
  *   - Range: `0`-`8`
  *   - Default value: `5`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#tunnel_interface_vmanage_connection_preference CiscoVpnInterfaceFeatureTemplate#tunnel_interface_vmanage_connection_preference}
  */
  readonly tunnelInterfaceVmanageConnectionPreference?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#tunnel_interface_vmanage_connection_preference_variable CiscoVpnInterfaceFeatureTemplate#tunnel_interface_vmanage_connection_preference_variable}
  */
  readonly tunnelInterfaceVmanageConnectionPreferenceVariable?: string;
  /**
  * Set tunnel QoS mode
  *   - Choices: `hub`, `spoke`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#tunnel_qos_mode CiscoVpnInterfaceFeatureTemplate#tunnel_qos_mode}
  */
  readonly tunnelQosMode?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#tunnel_qos_mode_variable CiscoVpnInterfaceFeatureTemplate#tunnel_qos_mode_variable}
  */
  readonly tunnelQosModeVariable?: string;
  /**
  * Set NAT UDP session timeout, in minutes
  *   - Range: `1`-`8947`
  *   - Default value: `1`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#udp_timeout CiscoVpnInterfaceFeatureTemplate#udp_timeout}
  */
  readonly udpTimeout?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#udp_timeout_variable CiscoVpnInterfaceFeatureTemplate#udp_timeout_variable}
  */
  readonly udpTimeoutVariable?: string;
}
export interface CiscoVpnInterfaceFeatureTemplateAccessLists {
  /**
  * Name of access list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#acl_name CiscoVpnInterfaceFeatureTemplate#acl_name}
  */
  readonly aclName?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#acl_name_variable CiscoVpnInterfaceFeatureTemplate#acl_name_variable}
  */
  readonly aclNameVariable?: string;
  /**
  * Direction
  *   - Choices: `in`, `out`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#direction CiscoVpnInterfaceFeatureTemplate#direction}
  */
  readonly direction?: string;
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#optional CiscoVpnInterfaceFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function ciscoVpnInterfaceFeatureTemplateAccessListsToTerraform(struct?: CiscoVpnInterfaceFeatureTemplateAccessLists | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acl_name: cdktf.stringToTerraform(struct!.aclName),
    acl_name_variable: cdktf.stringToTerraform(struct!.aclNameVariable),
    direction: cdktf.stringToTerraform(struct!.direction),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function ciscoVpnInterfaceFeatureTemplateAccessListsToHclTerraform(struct?: CiscoVpnInterfaceFeatureTemplateAccessLists | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    acl_name: {
      value: cdktf.stringToHclTerraform(struct!.aclName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    acl_name_variable: {
      value: cdktf.stringToHclTerraform(struct!.aclNameVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    direction: {
      value: cdktf.stringToHclTerraform(struct!.direction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CiscoVpnInterfaceFeatureTemplateAccessListsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CiscoVpnInterfaceFeatureTemplateAccessLists | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aclName !== undefined) {
      hasAnyValues = true;
      internalValueResult.aclName = this._aclName;
    }
    if (this._aclNameVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.aclNameVariable = this._aclNameVariable;
    }
    if (this._direction !== undefined) {
      hasAnyValues = true;
      internalValueResult.direction = this._direction;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CiscoVpnInterfaceFeatureTemplateAccessLists | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aclName = undefined;
      this._aclNameVariable = undefined;
      this._direction = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aclName = value.aclName;
      this._aclNameVariable = value.aclNameVariable;
      this._direction = value.direction;
      this._optional = value.optional;
    }
  }

  // acl_name - computed: false, optional: true, required: false
  private _aclName?: string; 
  public get aclName() {
    return this.getStringAttribute('acl_name');
  }
  public set aclName(value: string) {
    this._aclName = value;
  }
  public resetAclName() {
    this._aclName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclNameInput() {
    return this._aclName;
  }

  // acl_name_variable - computed: false, optional: true, required: false
  private _aclNameVariable?: string; 
  public get aclNameVariable() {
    return this.getStringAttribute('acl_name_variable');
  }
  public set aclNameVariable(value: string) {
    this._aclNameVariable = value;
  }
  public resetAclNameVariable() {
    this._aclNameVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclNameVariableInput() {
    return this._aclNameVariable;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}

export class CiscoVpnInterfaceFeatureTemplateAccessListsList extends cdktf.ComplexList {
  public internalValue? : CiscoVpnInterfaceFeatureTemplateAccessLists[] | cdktf.IResolvable

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
  public get(index: number): CiscoVpnInterfaceFeatureTemplateAccessListsOutputReference {
    return new CiscoVpnInterfaceFeatureTemplateAccessListsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CiscoVpnInterfaceFeatureTemplateIpv4SecondaryAddresses {
  /**
  * IP Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#address CiscoVpnInterfaceFeatureTemplate#address}
  */
  readonly address?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#address_variable CiscoVpnInterfaceFeatureTemplate#address_variable}
  */
  readonly addressVariable?: string;
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#optional CiscoVpnInterfaceFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function ciscoVpnInterfaceFeatureTemplateIpv4SecondaryAddressesToTerraform(struct?: CiscoVpnInterfaceFeatureTemplateIpv4SecondaryAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    address_variable: cdktf.stringToTerraform(struct!.addressVariable),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function ciscoVpnInterfaceFeatureTemplateIpv4SecondaryAddressesToHclTerraform(struct?: CiscoVpnInterfaceFeatureTemplateIpv4SecondaryAddresses | cdktf.IResolvable): any {
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
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CiscoVpnInterfaceFeatureTemplateIpv4SecondaryAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CiscoVpnInterfaceFeatureTemplateIpv4SecondaryAddresses | cdktf.IResolvable | undefined {
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
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CiscoVpnInterfaceFeatureTemplateIpv4SecondaryAddresses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._addressVariable = undefined;
      this._optional = undefined;
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
      this._optional = value.optional;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}

export class CiscoVpnInterfaceFeatureTemplateIpv4SecondaryAddressesList extends cdktf.ComplexList {
  public internalValue? : CiscoVpnInterfaceFeatureTemplateIpv4SecondaryAddresses[] | cdktf.IResolvable

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
  public get(index: number): CiscoVpnInterfaceFeatureTemplateIpv4SecondaryAddressesOutputReference {
    return new CiscoVpnInterfaceFeatureTemplateIpv4SecondaryAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CiscoVpnInterfaceFeatureTemplateIpv4VrrpsIpv4SecondaryAddresses {
  /**
  * VRRP Secondary IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#ip_address CiscoVpnInterfaceFeatureTemplate#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#ip_address_variable CiscoVpnInterfaceFeatureTemplate#ip_address_variable}
  */
  readonly ipAddressVariable?: string;
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#optional CiscoVpnInterfaceFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function ciscoVpnInterfaceFeatureTemplateIpv4VrrpsIpv4SecondaryAddressesToTerraform(struct?: CiscoVpnInterfaceFeatureTemplateIpv4VrrpsIpv4SecondaryAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    ip_address_variable: cdktf.stringToTerraform(struct!.ipAddressVariable),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function ciscoVpnInterfaceFeatureTemplateIpv4VrrpsIpv4SecondaryAddressesToHclTerraform(struct?: CiscoVpnInterfaceFeatureTemplateIpv4VrrpsIpv4SecondaryAddresses | cdktf.IResolvable): any {
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
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CiscoVpnInterfaceFeatureTemplateIpv4VrrpsIpv4SecondaryAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CiscoVpnInterfaceFeatureTemplateIpv4VrrpsIpv4SecondaryAddresses | cdktf.IResolvable | undefined {
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
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CiscoVpnInterfaceFeatureTemplateIpv4VrrpsIpv4SecondaryAddresses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipAddress = undefined;
      this._ipAddressVariable = undefined;
      this._optional = undefined;
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
      this._optional = value.optional;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}

export class CiscoVpnInterfaceFeatureTemplateIpv4VrrpsIpv4SecondaryAddressesList extends cdktf.ComplexList {
  public internalValue? : CiscoVpnInterfaceFeatureTemplateIpv4VrrpsIpv4SecondaryAddresses[] | cdktf.IResolvable

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
  public get(index: number): CiscoVpnInterfaceFeatureTemplateIpv4VrrpsIpv4SecondaryAddressesOutputReference {
    return new CiscoVpnInterfaceFeatureTemplateIpv4VrrpsIpv4SecondaryAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CiscoVpnInterfaceFeatureTemplateIpv4VrrpsTrackingObjects {
  /**
  * Decrement Value for VRRP priority
  *   - Range: `1`-`255`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#decrement_value CiscoVpnInterfaceFeatureTemplate#decrement_value}
  */
  readonly decrementValue?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#decrement_value_variable CiscoVpnInterfaceFeatureTemplate#decrement_value_variable}
  */
  readonly decrementValueVariable?: string;
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#optional CiscoVpnInterfaceFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * Track Action
  *   - Choices: `decrement`, `shutdown`
  *   - Default value: `decrement`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#track_action CiscoVpnInterfaceFeatureTemplate#track_action}
  */
  readonly trackAction?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#track_action_variable CiscoVpnInterfaceFeatureTemplate#track_action_variable}
  */
  readonly trackActionVariable?: string;
  /**
  * Tracker ID
  *   - Range: `1`-`1000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#tracker_id CiscoVpnInterfaceFeatureTemplate#tracker_id}
  */
  readonly trackerId?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#tracker_id_variable CiscoVpnInterfaceFeatureTemplate#tracker_id_variable}
  */
  readonly trackerIdVariable?: string;
}

export function ciscoVpnInterfaceFeatureTemplateIpv4VrrpsTrackingObjectsToTerraform(struct?: CiscoVpnInterfaceFeatureTemplateIpv4VrrpsTrackingObjects | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decrement_value: cdktf.numberToTerraform(struct!.decrementValue),
    decrement_value_variable: cdktf.stringToTerraform(struct!.decrementValueVariable),
    optional: cdktf.booleanToTerraform(struct!.optional),
    track_action: cdktf.stringToTerraform(struct!.trackAction),
    track_action_variable: cdktf.stringToTerraform(struct!.trackActionVariable),
    tracker_id: cdktf.numberToTerraform(struct!.trackerId),
    tracker_id_variable: cdktf.stringToTerraform(struct!.trackerIdVariable),
  }
}


export function ciscoVpnInterfaceFeatureTemplateIpv4VrrpsTrackingObjectsToHclTerraform(struct?: CiscoVpnInterfaceFeatureTemplateIpv4VrrpsTrackingObjects | cdktf.IResolvable): any {
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
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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
      value: cdktf.numberToHclTerraform(struct!.trackerId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tracker_id_variable: {
      value: cdktf.stringToHclTerraform(struct!.trackerIdVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CiscoVpnInterfaceFeatureTemplateIpv4VrrpsTrackingObjectsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CiscoVpnInterfaceFeatureTemplateIpv4VrrpsTrackingObjects | cdktf.IResolvable | undefined {
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
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
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
    if (this._trackerIdVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.trackerIdVariable = this._trackerIdVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CiscoVpnInterfaceFeatureTemplateIpv4VrrpsTrackingObjects | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._decrementValue = undefined;
      this._decrementValueVariable = undefined;
      this._optional = undefined;
      this._trackAction = undefined;
      this._trackActionVariable = undefined;
      this._trackerId = undefined;
      this._trackerIdVariable = undefined;
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
      this._optional = value.optional;
      this._trackAction = value.trackAction;
      this._trackActionVariable = value.trackActionVariable;
      this._trackerId = value.trackerId;
      this._trackerIdVariable = value.trackerIdVariable;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
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
  private _trackerId?: number; 
  public get trackerId() {
    return this.getNumberAttribute('tracker_id');
  }
  public set trackerId(value: number) {
    this._trackerId = value;
  }
  public resetTrackerId() {
    this._trackerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackerIdInput() {
    return this._trackerId;
  }

  // tracker_id_variable - computed: false, optional: true, required: false
  private _trackerIdVariable?: string; 
  public get trackerIdVariable() {
    return this.getStringAttribute('tracker_id_variable');
  }
  public set trackerIdVariable(value: string) {
    this._trackerIdVariable = value;
  }
  public resetTrackerIdVariable() {
    this._trackerIdVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackerIdVariableInput() {
    return this._trackerIdVariable;
  }
}

export class CiscoVpnInterfaceFeatureTemplateIpv4VrrpsTrackingObjectsList extends cdktf.ComplexList {
  public internalValue? : CiscoVpnInterfaceFeatureTemplateIpv4VrrpsTrackingObjects[] | cdktf.IResolvable

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
  public get(index: number): CiscoVpnInterfaceFeatureTemplateIpv4VrrpsTrackingObjectsOutputReference {
    return new CiscoVpnInterfaceFeatureTemplateIpv4VrrpsTrackingObjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CiscoVpnInterfaceFeatureTemplateIpv4Vrrps {
  /**
  * Group ID
  *   - Range: `1`-`255`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#group_id CiscoVpnInterfaceFeatureTemplate#group_id}
  */
  readonly groupId?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#group_id_variable CiscoVpnInterfaceFeatureTemplate#group_id_variable}
  */
  readonly groupIdVariable?: string;
  /**
  * Assign IP Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#ip_address CiscoVpnInterfaceFeatureTemplate#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#ip_address_variable CiscoVpnInterfaceFeatureTemplate#ip_address_variable}
  */
  readonly ipAddressVariable?: string;
  /**
  * VRRP Secondary IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#ipv4_secondary_addresses CiscoVpnInterfaceFeatureTemplate#ipv4_secondary_addresses}
  */
  readonly ipv4SecondaryAddresses?: CiscoVpnInterfaceFeatureTemplateIpv4VrrpsIpv4SecondaryAddresses[] | cdktf.IResolvable;
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#optional CiscoVpnInterfaceFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * Set priority
  *   - Range: `1`-`254`
  *   - Default value: `100`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#priority CiscoVpnInterfaceFeatureTemplate#priority}
  */
  readonly priority?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#priority_variable CiscoVpnInterfaceFeatureTemplate#priority_variable}
  */
  readonly priorityVariable?: string;
  /**
  * Timer interval for successive advertisements, in milliseconds
  *   - Range: `100`-`40950`
  *   - Default value: `100`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#timer CiscoVpnInterfaceFeatureTemplate#timer}
  */
  readonly timer?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#timer_variable CiscoVpnInterfaceFeatureTemplate#timer_variable}
  */
  readonly timerVariable?: string;
  /**
  * change TLOC preference
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#tloc_preference_change CiscoVpnInterfaceFeatureTemplate#tloc_preference_change}
  */
  readonly tlocPreferenceChange?: boolean | cdktf.IResolvable;
  /**
  * Set tloc preference change value
  *   - Range: `1`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#tloc_preference_change_value CiscoVpnInterfaceFeatureTemplate#tloc_preference_change_value}
  */
  readonly tlocPreferenceChangeValue?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#tloc_preference_change_value_variable CiscoVpnInterfaceFeatureTemplate#tloc_preference_change_value_variable}
  */
  readonly tlocPreferenceChangeValueVariable?: string;
  /**
  * Track OMP status
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#track_omp CiscoVpnInterfaceFeatureTemplate#track_omp}
  */
  readonly trackOmp?: boolean | cdktf.IResolvable;
  /**
  * Track Prefix List
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#track_prefix_list CiscoVpnInterfaceFeatureTemplate#track_prefix_list}
  */
  readonly trackPrefixList?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#track_prefix_list_variable CiscoVpnInterfaceFeatureTemplate#track_prefix_list_variable}
  */
  readonly trackPrefixListVariable?: string;
  /**
  * tracking object for VRRP configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#tracking_objects CiscoVpnInterfaceFeatureTemplate#tracking_objects}
  */
  readonly trackingObjects?: CiscoVpnInterfaceFeatureTemplateIpv4VrrpsTrackingObjects[] | cdktf.IResolvable;
}

export function ciscoVpnInterfaceFeatureTemplateIpv4VrrpsToTerraform(struct?: CiscoVpnInterfaceFeatureTemplateIpv4Vrrps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_id: cdktf.numberToTerraform(struct!.groupId),
    group_id_variable: cdktf.stringToTerraform(struct!.groupIdVariable),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    ip_address_variable: cdktf.stringToTerraform(struct!.ipAddressVariable),
    ipv4_secondary_addresses: cdktf.listMapper(ciscoVpnInterfaceFeatureTemplateIpv4VrrpsIpv4SecondaryAddressesToTerraform, false)(struct!.ipv4SecondaryAddresses),
    optional: cdktf.booleanToTerraform(struct!.optional),
    priority: cdktf.numberToTerraform(struct!.priority),
    priority_variable: cdktf.stringToTerraform(struct!.priorityVariable),
    timer: cdktf.numberToTerraform(struct!.timer),
    timer_variable: cdktf.stringToTerraform(struct!.timerVariable),
    tloc_preference_change: cdktf.booleanToTerraform(struct!.tlocPreferenceChange),
    tloc_preference_change_value: cdktf.numberToTerraform(struct!.tlocPreferenceChangeValue),
    tloc_preference_change_value_variable: cdktf.stringToTerraform(struct!.tlocPreferenceChangeValueVariable),
    track_omp: cdktf.booleanToTerraform(struct!.trackOmp),
    track_prefix_list: cdktf.stringToTerraform(struct!.trackPrefixList),
    track_prefix_list_variable: cdktf.stringToTerraform(struct!.trackPrefixListVariable),
    tracking_objects: cdktf.listMapper(ciscoVpnInterfaceFeatureTemplateIpv4VrrpsTrackingObjectsToTerraform, false)(struct!.trackingObjects),
  }
}


export function ciscoVpnInterfaceFeatureTemplateIpv4VrrpsToHclTerraform(struct?: CiscoVpnInterfaceFeatureTemplateIpv4Vrrps | cdktf.IResolvable): any {
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
    ipv4_secondary_addresses: {
      value: cdktf.listMapperHcl(ciscoVpnInterfaceFeatureTemplateIpv4VrrpsIpv4SecondaryAddressesToHclTerraform, false)(struct!.ipv4SecondaryAddresses),
      isBlock: true,
      type: "list",
      storageClassType: "CiscoVpnInterfaceFeatureTemplateIpv4VrrpsIpv4SecondaryAddressesList",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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
    tloc_preference_change: {
      value: cdktf.booleanToHclTerraform(struct!.tlocPreferenceChange),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tloc_preference_change_value: {
      value: cdktf.numberToHclTerraform(struct!.tlocPreferenceChangeValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tloc_preference_change_value_variable: {
      value: cdktf.stringToHclTerraform(struct!.tlocPreferenceChangeValueVariable),
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
    tracking_objects: {
      value: cdktf.listMapperHcl(ciscoVpnInterfaceFeatureTemplateIpv4VrrpsTrackingObjectsToHclTerraform, false)(struct!.trackingObjects),
      isBlock: true,
      type: "list",
      storageClassType: "CiscoVpnInterfaceFeatureTemplateIpv4VrrpsTrackingObjectsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CiscoVpnInterfaceFeatureTemplateIpv4VrrpsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CiscoVpnInterfaceFeatureTemplateIpv4Vrrps | cdktf.IResolvable | undefined {
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
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._ipAddressVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddressVariable = this._ipAddressVariable;
    }
    if (this._ipv4SecondaryAddresses?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4SecondaryAddresses = this._ipv4SecondaryAddresses?.internalValue;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
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
    if (this._tlocPreferenceChange !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlocPreferenceChange = this._tlocPreferenceChange;
    }
    if (this._tlocPreferenceChangeValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlocPreferenceChangeValue = this._tlocPreferenceChangeValue;
    }
    if (this._tlocPreferenceChangeValueVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlocPreferenceChangeValueVariable = this._tlocPreferenceChangeValueVariable;
    }
    if (this._trackOmp !== undefined) {
      hasAnyValues = true;
      internalValueResult.trackOmp = this._trackOmp;
    }
    if (this._trackPrefixList !== undefined) {
      hasAnyValues = true;
      internalValueResult.trackPrefixList = this._trackPrefixList;
    }
    if (this._trackPrefixListVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.trackPrefixListVariable = this._trackPrefixListVariable;
    }
    if (this._trackingObjects?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trackingObjects = this._trackingObjects?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CiscoVpnInterfaceFeatureTemplateIpv4Vrrps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groupId = undefined;
      this._groupIdVariable = undefined;
      this._ipAddress = undefined;
      this._ipAddressVariable = undefined;
      this._ipv4SecondaryAddresses.internalValue = undefined;
      this._optional = undefined;
      this._priority = undefined;
      this._priorityVariable = undefined;
      this._timer = undefined;
      this._timerVariable = undefined;
      this._tlocPreferenceChange = undefined;
      this._tlocPreferenceChangeValue = undefined;
      this._tlocPreferenceChangeValueVariable = undefined;
      this._trackOmp = undefined;
      this._trackPrefixList = undefined;
      this._trackPrefixListVariable = undefined;
      this._trackingObjects.internalValue = undefined;
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
      this._ipAddress = value.ipAddress;
      this._ipAddressVariable = value.ipAddressVariable;
      this._ipv4SecondaryAddresses.internalValue = value.ipv4SecondaryAddresses;
      this._optional = value.optional;
      this._priority = value.priority;
      this._priorityVariable = value.priorityVariable;
      this._timer = value.timer;
      this._timerVariable = value.timerVariable;
      this._tlocPreferenceChange = value.tlocPreferenceChange;
      this._tlocPreferenceChangeValue = value.tlocPreferenceChangeValue;
      this._tlocPreferenceChangeValueVariable = value.tlocPreferenceChangeValueVariable;
      this._trackOmp = value.trackOmp;
      this._trackPrefixList = value.trackPrefixList;
      this._trackPrefixListVariable = value.trackPrefixListVariable;
      this._trackingObjects.internalValue = value.trackingObjects;
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

  // ipv4_secondary_addresses - computed: false, optional: true, required: false
  private _ipv4SecondaryAddresses = new CiscoVpnInterfaceFeatureTemplateIpv4VrrpsIpv4SecondaryAddressesList(this, "ipv4_secondary_addresses", false);
  public get ipv4SecondaryAddresses() {
    return this._ipv4SecondaryAddresses;
  }
  public putIpv4SecondaryAddresses(value: CiscoVpnInterfaceFeatureTemplateIpv4VrrpsIpv4SecondaryAddresses[] | cdktf.IResolvable) {
    this._ipv4SecondaryAddresses.internalValue = value;
  }
  public resetIpv4SecondaryAddresses() {
    this._ipv4SecondaryAddresses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4SecondaryAddressesInput() {
    return this._ipv4SecondaryAddresses.internalValue;
  }

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
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

  // tloc_preference_change - computed: false, optional: true, required: false
  private _tlocPreferenceChange?: boolean | cdktf.IResolvable; 
  public get tlocPreferenceChange() {
    return this.getBooleanAttribute('tloc_preference_change');
  }
  public set tlocPreferenceChange(value: boolean | cdktf.IResolvable) {
    this._tlocPreferenceChange = value;
  }
  public resetTlocPreferenceChange() {
    this._tlocPreferenceChange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlocPreferenceChangeInput() {
    return this._tlocPreferenceChange;
  }

  // tloc_preference_change_value - computed: false, optional: true, required: false
  private _tlocPreferenceChangeValue?: number; 
  public get tlocPreferenceChangeValue() {
    return this.getNumberAttribute('tloc_preference_change_value');
  }
  public set tlocPreferenceChangeValue(value: number) {
    this._tlocPreferenceChangeValue = value;
  }
  public resetTlocPreferenceChangeValue() {
    this._tlocPreferenceChangeValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlocPreferenceChangeValueInput() {
    return this._tlocPreferenceChangeValue;
  }

  // tloc_preference_change_value_variable - computed: false, optional: true, required: false
  private _tlocPreferenceChangeValueVariable?: string; 
  public get tlocPreferenceChangeValueVariable() {
    return this.getStringAttribute('tloc_preference_change_value_variable');
  }
  public set tlocPreferenceChangeValueVariable(value: string) {
    this._tlocPreferenceChangeValueVariable = value;
  }
  public resetTlocPreferenceChangeValueVariable() {
    this._tlocPreferenceChangeValueVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlocPreferenceChangeValueVariableInput() {
    return this._tlocPreferenceChangeValueVariable;
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

  // tracking_objects - computed: false, optional: true, required: false
  private _trackingObjects = new CiscoVpnInterfaceFeatureTemplateIpv4VrrpsTrackingObjectsList(this, "tracking_objects", false);
  public get trackingObjects() {
    return this._trackingObjects;
  }
  public putTrackingObjects(value: CiscoVpnInterfaceFeatureTemplateIpv4VrrpsTrackingObjects[] | cdktf.IResolvable) {
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

export class CiscoVpnInterfaceFeatureTemplateIpv4VrrpsList extends cdktf.ComplexList {
  public internalValue? : CiscoVpnInterfaceFeatureTemplateIpv4Vrrps[] | cdktf.IResolvable

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
  public get(index: number): CiscoVpnInterfaceFeatureTemplateIpv4VrrpsOutputReference {
    return new CiscoVpnInterfaceFeatureTemplateIpv4VrrpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CiscoVpnInterfaceFeatureTemplateIpv6AccessLists {
  /**
  * Name of access list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#acl_name CiscoVpnInterfaceFeatureTemplate#acl_name}
  */
  readonly aclName?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#acl_name_variable CiscoVpnInterfaceFeatureTemplate#acl_name_variable}
  */
  readonly aclNameVariable?: string;
  /**
  * Direction
  *   - Choices: `in`, `out`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#direction CiscoVpnInterfaceFeatureTemplate#direction}
  */
  readonly direction?: string;
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#optional CiscoVpnInterfaceFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function ciscoVpnInterfaceFeatureTemplateIpv6AccessListsToTerraform(struct?: CiscoVpnInterfaceFeatureTemplateIpv6AccessLists | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acl_name: cdktf.stringToTerraform(struct!.aclName),
    acl_name_variable: cdktf.stringToTerraform(struct!.aclNameVariable),
    direction: cdktf.stringToTerraform(struct!.direction),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function ciscoVpnInterfaceFeatureTemplateIpv6AccessListsToHclTerraform(struct?: CiscoVpnInterfaceFeatureTemplateIpv6AccessLists | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    acl_name: {
      value: cdktf.stringToHclTerraform(struct!.aclName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    acl_name_variable: {
      value: cdktf.stringToHclTerraform(struct!.aclNameVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    direction: {
      value: cdktf.stringToHclTerraform(struct!.direction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CiscoVpnInterfaceFeatureTemplateIpv6AccessListsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CiscoVpnInterfaceFeatureTemplateIpv6AccessLists | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aclName !== undefined) {
      hasAnyValues = true;
      internalValueResult.aclName = this._aclName;
    }
    if (this._aclNameVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.aclNameVariable = this._aclNameVariable;
    }
    if (this._direction !== undefined) {
      hasAnyValues = true;
      internalValueResult.direction = this._direction;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CiscoVpnInterfaceFeatureTemplateIpv6AccessLists | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aclName = undefined;
      this._aclNameVariable = undefined;
      this._direction = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aclName = value.aclName;
      this._aclNameVariable = value.aclNameVariable;
      this._direction = value.direction;
      this._optional = value.optional;
    }
  }

  // acl_name - computed: false, optional: true, required: false
  private _aclName?: string; 
  public get aclName() {
    return this.getStringAttribute('acl_name');
  }
  public set aclName(value: string) {
    this._aclName = value;
  }
  public resetAclName() {
    this._aclName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclNameInput() {
    return this._aclName;
  }

  // acl_name_variable - computed: false, optional: true, required: false
  private _aclNameVariable?: string; 
  public get aclNameVariable() {
    return this.getStringAttribute('acl_name_variable');
  }
  public set aclNameVariable(value: string) {
    this._aclNameVariable = value;
  }
  public resetAclNameVariable() {
    this._aclNameVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclNameVariableInput() {
    return this._aclNameVariable;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}

export class CiscoVpnInterfaceFeatureTemplateIpv6AccessListsList extends cdktf.ComplexList {
  public internalValue? : CiscoVpnInterfaceFeatureTemplateIpv6AccessLists[] | cdktf.IResolvable

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
  public get(index: number): CiscoVpnInterfaceFeatureTemplateIpv6AccessListsOutputReference {
    return new CiscoVpnInterfaceFeatureTemplateIpv6AccessListsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CiscoVpnInterfaceFeatureTemplateIpv6DhcpHelpers {
  /**
  * DHCPv6 Helper address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#address CiscoVpnInterfaceFeatureTemplate#address}
  */
  readonly address?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#address_variable CiscoVpnInterfaceFeatureTemplate#address_variable}
  */
  readonly addressVariable?: string;
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#optional CiscoVpnInterfaceFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * DHCPv6 Helper VPN
  *   - Range: `1`-`65536`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#vpn_id CiscoVpnInterfaceFeatureTemplate#vpn_id}
  */
  readonly vpnId?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#vpn_id_variable CiscoVpnInterfaceFeatureTemplate#vpn_id_variable}
  */
  readonly vpnIdVariable?: string;
}

export function ciscoVpnInterfaceFeatureTemplateIpv6DhcpHelpersToTerraform(struct?: CiscoVpnInterfaceFeatureTemplateIpv6DhcpHelpers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    address_variable: cdktf.stringToTerraform(struct!.addressVariable),
    optional: cdktf.booleanToTerraform(struct!.optional),
    vpn_id: cdktf.numberToTerraform(struct!.vpnId),
    vpn_id_variable: cdktf.stringToTerraform(struct!.vpnIdVariable),
  }
}


export function ciscoVpnInterfaceFeatureTemplateIpv6DhcpHelpersToHclTerraform(struct?: CiscoVpnInterfaceFeatureTemplateIpv6DhcpHelpers | cdktf.IResolvable): any {
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
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    vpn_id: {
      value: cdktf.numberToHclTerraform(struct!.vpnId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vpn_id_variable: {
      value: cdktf.stringToHclTerraform(struct!.vpnIdVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CiscoVpnInterfaceFeatureTemplateIpv6DhcpHelpersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CiscoVpnInterfaceFeatureTemplateIpv6DhcpHelpers | cdktf.IResolvable | undefined {
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
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    if (this._vpnId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpnId = this._vpnId;
    }
    if (this._vpnIdVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpnIdVariable = this._vpnIdVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CiscoVpnInterfaceFeatureTemplateIpv6DhcpHelpers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._addressVariable = undefined;
      this._optional = undefined;
      this._vpnId = undefined;
      this._vpnIdVariable = undefined;
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
      this._optional = value.optional;
      this._vpnId = value.vpnId;
      this._vpnIdVariable = value.vpnIdVariable;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }

  // vpn_id - computed: false, optional: true, required: false
  private _vpnId?: number; 
  public get vpnId() {
    return this.getNumberAttribute('vpn_id');
  }
  public set vpnId(value: number) {
    this._vpnId = value;
  }
  public resetVpnId() {
    this._vpnId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnIdInput() {
    return this._vpnId;
  }

  // vpn_id_variable - computed: false, optional: true, required: false
  private _vpnIdVariable?: string; 
  public get vpnIdVariable() {
    return this.getStringAttribute('vpn_id_variable');
  }
  public set vpnIdVariable(value: string) {
    this._vpnIdVariable = value;
  }
  public resetVpnIdVariable() {
    this._vpnIdVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnIdVariableInput() {
    return this._vpnIdVariable;
  }
}

export class CiscoVpnInterfaceFeatureTemplateIpv6DhcpHelpersList extends cdktf.ComplexList {
  public internalValue? : CiscoVpnInterfaceFeatureTemplateIpv6DhcpHelpers[] | cdktf.IResolvable

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
  public get(index: number): CiscoVpnInterfaceFeatureTemplateIpv6DhcpHelpersOutputReference {
    return new CiscoVpnInterfaceFeatureTemplateIpv6DhcpHelpersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CiscoVpnInterfaceFeatureTemplateIpv6SecondaryAddresses {
  /**
  * IPv6 Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#address CiscoVpnInterfaceFeatureTemplate#address}
  */
  readonly address?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#address_variable CiscoVpnInterfaceFeatureTemplate#address_variable}
  */
  readonly addressVariable?: string;
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#optional CiscoVpnInterfaceFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function ciscoVpnInterfaceFeatureTemplateIpv6SecondaryAddressesToTerraform(struct?: CiscoVpnInterfaceFeatureTemplateIpv6SecondaryAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    address_variable: cdktf.stringToTerraform(struct!.addressVariable),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function ciscoVpnInterfaceFeatureTemplateIpv6SecondaryAddressesToHclTerraform(struct?: CiscoVpnInterfaceFeatureTemplateIpv6SecondaryAddresses | cdktf.IResolvable): any {
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
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CiscoVpnInterfaceFeatureTemplateIpv6SecondaryAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CiscoVpnInterfaceFeatureTemplateIpv6SecondaryAddresses | cdktf.IResolvable | undefined {
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
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CiscoVpnInterfaceFeatureTemplateIpv6SecondaryAddresses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._addressVariable = undefined;
      this._optional = undefined;
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
      this._optional = value.optional;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}

export class CiscoVpnInterfaceFeatureTemplateIpv6SecondaryAddressesList extends cdktf.ComplexList {
  public internalValue? : CiscoVpnInterfaceFeatureTemplateIpv6SecondaryAddresses[] | cdktf.IResolvable

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
  public get(index: number): CiscoVpnInterfaceFeatureTemplateIpv6SecondaryAddressesOutputReference {
    return new CiscoVpnInterfaceFeatureTemplateIpv6SecondaryAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CiscoVpnInterfaceFeatureTemplateIpv6VrrpsIpv6Addresses {
  /**
  * Use link-local IPv6 Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#ipv6_link_local CiscoVpnInterfaceFeatureTemplate#ipv6_link_local}
  */
  readonly ipv6LinkLocal?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#ipv6_link_local_variable CiscoVpnInterfaceFeatureTemplate#ipv6_link_local_variable}
  */
  readonly ipv6LinkLocalVariable?: string;
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#optional CiscoVpnInterfaceFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * Assign Global IPv6 Prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#prefix CiscoVpnInterfaceFeatureTemplate#prefix}
  */
  readonly prefix?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#prefix_variable CiscoVpnInterfaceFeatureTemplate#prefix_variable}
  */
  readonly prefixVariable?: string;
}

export function ciscoVpnInterfaceFeatureTemplateIpv6VrrpsIpv6AddressesToTerraform(struct?: CiscoVpnInterfaceFeatureTemplateIpv6VrrpsIpv6Addresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv6_link_local: cdktf.stringToTerraform(struct!.ipv6LinkLocal),
    ipv6_link_local_variable: cdktf.stringToTerraform(struct!.ipv6LinkLocalVariable),
    optional: cdktf.booleanToTerraform(struct!.optional),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    prefix_variable: cdktf.stringToTerraform(struct!.prefixVariable),
  }
}


export function ciscoVpnInterfaceFeatureTemplateIpv6VrrpsIpv6AddressesToHclTerraform(struct?: CiscoVpnInterfaceFeatureTemplateIpv6VrrpsIpv6Addresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv6_link_local: {
      value: cdktf.stringToHclTerraform(struct!.ipv6LinkLocal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_link_local_variable: {
      value: cdktf.stringToHclTerraform(struct!.ipv6LinkLocalVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
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

export class CiscoVpnInterfaceFeatureTemplateIpv6VrrpsIpv6AddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CiscoVpnInterfaceFeatureTemplateIpv6VrrpsIpv6Addresses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv6LinkLocal !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6LinkLocal = this._ipv6LinkLocal;
    }
    if (this._ipv6LinkLocalVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6LinkLocalVariable = this._ipv6LinkLocalVariable;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
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

  public set internalValue(value: CiscoVpnInterfaceFeatureTemplateIpv6VrrpsIpv6Addresses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv6LinkLocal = undefined;
      this._ipv6LinkLocalVariable = undefined;
      this._optional = undefined;
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
      this._ipv6LinkLocal = value.ipv6LinkLocal;
      this._ipv6LinkLocalVariable = value.ipv6LinkLocalVariable;
      this._optional = value.optional;
      this._prefix = value.prefix;
      this._prefixVariable = value.prefixVariable;
    }
  }

  // ipv6_link_local - computed: false, optional: true, required: false
  private _ipv6LinkLocal?: string; 
  public get ipv6LinkLocal() {
    return this.getStringAttribute('ipv6_link_local');
  }
  public set ipv6LinkLocal(value: string) {
    this._ipv6LinkLocal = value;
  }
  public resetIpv6LinkLocal() {
    this._ipv6LinkLocal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6LinkLocalInput() {
    return this._ipv6LinkLocal;
  }

  // ipv6_link_local_variable - computed: false, optional: true, required: false
  private _ipv6LinkLocalVariable?: string; 
  public get ipv6LinkLocalVariable() {
    return this.getStringAttribute('ipv6_link_local_variable');
  }
  public set ipv6LinkLocalVariable(value: string) {
    this._ipv6LinkLocalVariable = value;
  }
  public resetIpv6LinkLocalVariable() {
    this._ipv6LinkLocalVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6LinkLocalVariableInput() {
    return this._ipv6LinkLocalVariable;
  }

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
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

export class CiscoVpnInterfaceFeatureTemplateIpv6VrrpsIpv6AddressesList extends cdktf.ComplexList {
  public internalValue? : CiscoVpnInterfaceFeatureTemplateIpv6VrrpsIpv6Addresses[] | cdktf.IResolvable

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
  public get(index: number): CiscoVpnInterfaceFeatureTemplateIpv6VrrpsIpv6AddressesOutputReference {
    return new CiscoVpnInterfaceFeatureTemplateIpv6VrrpsIpv6AddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CiscoVpnInterfaceFeatureTemplateIpv6Vrrps {
  /**
  * Group ID
  *   - Range: `1`-`255`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#group_id CiscoVpnInterfaceFeatureTemplate#group_id}
  */
  readonly groupId?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#group_id_variable CiscoVpnInterfaceFeatureTemplate#group_id_variable}
  */
  readonly groupIdVariable?: string;
  /**
  * IPv6 VRRP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#ipv6_addresses CiscoVpnInterfaceFeatureTemplate#ipv6_addresses}
  */
  readonly ipv6Addresses?: CiscoVpnInterfaceFeatureTemplateIpv6VrrpsIpv6Addresses[] | cdktf.IResolvable;
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#optional CiscoVpnInterfaceFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * Set priority
  *   - Range: `1`-`254`
  *   - Default value: `100`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#priority CiscoVpnInterfaceFeatureTemplate#priority}
  */
  readonly priority?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#priority_variable CiscoVpnInterfaceFeatureTemplate#priority_variable}
  */
  readonly priorityVariable?: string;
  /**
  * Timer interval for successive advertisements, in milliseconds
  *   - Range: `100`-`40950`
  *   - Default value: `100`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#timer CiscoVpnInterfaceFeatureTemplate#timer}
  */
  readonly timer?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#timer_variable CiscoVpnInterfaceFeatureTemplate#timer_variable}
  */
  readonly timerVariable?: string;
  /**
  * Track OMP status
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#track_omp CiscoVpnInterfaceFeatureTemplate#track_omp}
  */
  readonly trackOmp?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#track_omp_variable CiscoVpnInterfaceFeatureTemplate#track_omp_variable}
  */
  readonly trackOmpVariable?: string;
  /**
  * Track Prefix List
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#track_prefix_list CiscoVpnInterfaceFeatureTemplate#track_prefix_list}
  */
  readonly trackPrefixList?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#track_prefix_list_variable CiscoVpnInterfaceFeatureTemplate#track_prefix_list_variable}
  */
  readonly trackPrefixListVariable?: string;
}

export function ciscoVpnInterfaceFeatureTemplateIpv6VrrpsToTerraform(struct?: CiscoVpnInterfaceFeatureTemplateIpv6Vrrps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_id: cdktf.numberToTerraform(struct!.groupId),
    group_id_variable: cdktf.stringToTerraform(struct!.groupIdVariable),
    ipv6_addresses: cdktf.listMapper(ciscoVpnInterfaceFeatureTemplateIpv6VrrpsIpv6AddressesToTerraform, false)(struct!.ipv6Addresses),
    optional: cdktf.booleanToTerraform(struct!.optional),
    priority: cdktf.numberToTerraform(struct!.priority),
    priority_variable: cdktf.stringToTerraform(struct!.priorityVariable),
    timer: cdktf.numberToTerraform(struct!.timer),
    timer_variable: cdktf.stringToTerraform(struct!.timerVariable),
    track_omp: cdktf.booleanToTerraform(struct!.trackOmp),
    track_omp_variable: cdktf.stringToTerraform(struct!.trackOmpVariable),
    track_prefix_list: cdktf.stringToTerraform(struct!.trackPrefixList),
    track_prefix_list_variable: cdktf.stringToTerraform(struct!.trackPrefixListVariable),
  }
}


export function ciscoVpnInterfaceFeatureTemplateIpv6VrrpsToHclTerraform(struct?: CiscoVpnInterfaceFeatureTemplateIpv6Vrrps | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(ciscoVpnInterfaceFeatureTemplateIpv6VrrpsIpv6AddressesToHclTerraform, false)(struct!.ipv6Addresses),
      isBlock: true,
      type: "list",
      storageClassType: "CiscoVpnInterfaceFeatureTemplateIpv6VrrpsIpv6AddressesList",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class CiscoVpnInterfaceFeatureTemplateIpv6VrrpsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CiscoVpnInterfaceFeatureTemplateIpv6Vrrps | cdktf.IResolvable | undefined {
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
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
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

  public set internalValue(value: CiscoVpnInterfaceFeatureTemplateIpv6Vrrps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groupId = undefined;
      this._groupIdVariable = undefined;
      this._ipv6Addresses.internalValue = undefined;
      this._optional = undefined;
      this._priority = undefined;
      this._priorityVariable = undefined;
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
      this._groupId = value.groupId;
      this._groupIdVariable = value.groupIdVariable;
      this._ipv6Addresses.internalValue = value.ipv6Addresses;
      this._optional = value.optional;
      this._priority = value.priority;
      this._priorityVariable = value.priorityVariable;
      this._timer = value.timer;
      this._timerVariable = value.timerVariable;
      this._trackOmp = value.trackOmp;
      this._trackOmpVariable = value.trackOmpVariable;
      this._trackPrefixList = value.trackPrefixList;
      this._trackPrefixListVariable = value.trackPrefixListVariable;
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
  private _ipv6Addresses = new CiscoVpnInterfaceFeatureTemplateIpv6VrrpsIpv6AddressesList(this, "ipv6_addresses", false);
  public get ipv6Addresses() {
    return this._ipv6Addresses;
  }
  public putIpv6Addresses(value: CiscoVpnInterfaceFeatureTemplateIpv6VrrpsIpv6Addresses[] | cdktf.IResolvable) {
    this._ipv6Addresses.internalValue = value;
  }
  public resetIpv6Addresses() {
    this._ipv6Addresses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressesInput() {
    return this._ipv6Addresses.internalValue;
  }

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
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

export class CiscoVpnInterfaceFeatureTemplateIpv6VrrpsList extends cdktf.ComplexList {
  public internalValue? : CiscoVpnInterfaceFeatureTemplateIpv6Vrrps[] | cdktf.IResolvable

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
  public get(index: number): CiscoVpnInterfaceFeatureTemplateIpv6VrrpsOutputReference {
    return new CiscoVpnInterfaceFeatureTemplateIpv6VrrpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CiscoVpnInterfaceFeatureTemplateStaticArps {
  /**
  * IP Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#ip_address CiscoVpnInterfaceFeatureTemplate#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#ip_address_variable CiscoVpnInterfaceFeatureTemplate#ip_address_variable}
  */
  readonly ipAddressVariable?: string;
  /**
  * MAC address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#mac CiscoVpnInterfaceFeatureTemplate#mac}
  */
  readonly mac?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#mac_variable CiscoVpnInterfaceFeatureTemplate#mac_variable}
  */
  readonly macVariable?: string;
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#optional CiscoVpnInterfaceFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function ciscoVpnInterfaceFeatureTemplateStaticArpsToTerraform(struct?: CiscoVpnInterfaceFeatureTemplateStaticArps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    ip_address_variable: cdktf.stringToTerraform(struct!.ipAddressVariable),
    mac: cdktf.stringToTerraform(struct!.mac),
    mac_variable: cdktf.stringToTerraform(struct!.macVariable),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function ciscoVpnInterfaceFeatureTemplateStaticArpsToHclTerraform(struct?: CiscoVpnInterfaceFeatureTemplateStaticArps | cdktf.IResolvable): any {
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
    mac: {
      value: cdktf.stringToHclTerraform(struct!.mac),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mac_variable: {
      value: cdktf.stringToHclTerraform(struct!.macVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CiscoVpnInterfaceFeatureTemplateStaticArpsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CiscoVpnInterfaceFeatureTemplateStaticArps | cdktf.IResolvable | undefined {
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
    if (this._mac !== undefined) {
      hasAnyValues = true;
      internalValueResult.mac = this._mac;
    }
    if (this._macVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.macVariable = this._macVariable;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CiscoVpnInterfaceFeatureTemplateStaticArps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipAddress = undefined;
      this._ipAddressVariable = undefined;
      this._mac = undefined;
      this._macVariable = undefined;
      this._optional = undefined;
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
      this._mac = value.mac;
      this._macVariable = value.macVariable;
      this._optional = value.optional;
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

  // mac - computed: false, optional: true, required: false
  private _mac?: string; 
  public get mac() {
    return this.getStringAttribute('mac');
  }
  public set mac(value: string) {
    this._mac = value;
  }
  public resetMac() {
    this._mac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macInput() {
    return this._mac;
  }

  // mac_variable - computed: false, optional: true, required: false
  private _macVariable?: string; 
  public get macVariable() {
    return this.getStringAttribute('mac_variable');
  }
  public set macVariable(value: string) {
    this._macVariable = value;
  }
  public resetMacVariable() {
    this._macVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macVariableInput() {
    return this._macVariable;
  }

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}

export class CiscoVpnInterfaceFeatureTemplateStaticArpsList extends cdktf.ComplexList {
  public internalValue? : CiscoVpnInterfaceFeatureTemplateStaticArps[] | cdktf.IResolvable

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
  public get(index: number): CiscoVpnInterfaceFeatureTemplateStaticArpsOutputReference {
    return new CiscoVpnInterfaceFeatureTemplateStaticArpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CiscoVpnInterfaceFeatureTemplateStaticNat66Entries {
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#optional CiscoVpnInterfaceFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * Source Prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#source_prefix CiscoVpnInterfaceFeatureTemplate#source_prefix}
  */
  readonly sourcePrefix?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#source_prefix_variable CiscoVpnInterfaceFeatureTemplate#source_prefix_variable}
  */
  readonly sourcePrefixVariable?: string;
  /**
  * Source VPN ID
  *   - Range: `0`-`65530`
  *   - Default value: `0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#source_vpn_id CiscoVpnInterfaceFeatureTemplate#source_vpn_id}
  */
  readonly sourceVpnId?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#source_vpn_id_variable CiscoVpnInterfaceFeatureTemplate#source_vpn_id_variable}
  */
  readonly sourceVpnIdVariable?: string;
  /**
  * Translated Source Prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#translated_source_prefix CiscoVpnInterfaceFeatureTemplate#translated_source_prefix}
  */
  readonly translatedSourcePrefix?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#translated_source_prefix_variable CiscoVpnInterfaceFeatureTemplate#translated_source_prefix_variable}
  */
  readonly translatedSourcePrefixVariable?: string;
}

export function ciscoVpnInterfaceFeatureTemplateStaticNat66EntriesToTerraform(struct?: CiscoVpnInterfaceFeatureTemplateStaticNat66Entries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    optional: cdktf.booleanToTerraform(struct!.optional),
    source_prefix: cdktf.stringToTerraform(struct!.sourcePrefix),
    source_prefix_variable: cdktf.stringToTerraform(struct!.sourcePrefixVariable),
    source_vpn_id: cdktf.numberToTerraform(struct!.sourceVpnId),
    source_vpn_id_variable: cdktf.stringToTerraform(struct!.sourceVpnIdVariable),
    translated_source_prefix: cdktf.stringToTerraform(struct!.translatedSourcePrefix),
    translated_source_prefix_variable: cdktf.stringToTerraform(struct!.translatedSourcePrefixVariable),
  }
}


export function ciscoVpnInterfaceFeatureTemplateStaticNat66EntriesToHclTerraform(struct?: CiscoVpnInterfaceFeatureTemplateStaticNat66Entries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
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

export class CiscoVpnInterfaceFeatureTemplateStaticNat66EntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CiscoVpnInterfaceFeatureTemplateStaticNat66Entries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
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

  public set internalValue(value: CiscoVpnInterfaceFeatureTemplateStaticNat66Entries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._optional = undefined;
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
      this._optional = value.optional;
      this._sourcePrefix = value.sourcePrefix;
      this._sourcePrefixVariable = value.sourcePrefixVariable;
      this._sourceVpnId = value.sourceVpnId;
      this._sourceVpnIdVariable = value.sourceVpnIdVariable;
      this._translatedSourcePrefix = value.translatedSourcePrefix;
      this._translatedSourcePrefixVariable = value.translatedSourcePrefixVariable;
    }
  }

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
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

export class CiscoVpnInterfaceFeatureTemplateStaticNat66EntriesList extends cdktf.ComplexList {
  public internalValue? : CiscoVpnInterfaceFeatureTemplateStaticNat66Entries[] | cdktf.IResolvable

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
  public get(index: number): CiscoVpnInterfaceFeatureTemplateStaticNat66EntriesOutputReference {
    return new CiscoVpnInterfaceFeatureTemplateStaticNat66EntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CiscoVpnInterfaceFeatureTemplateStaticNatEntries {
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#optional CiscoVpnInterfaceFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * Source IP address to be translated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#source_ip CiscoVpnInterfaceFeatureTemplate#source_ip}
  */
  readonly sourceIp?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#source_ip_variable CiscoVpnInterfaceFeatureTemplate#source_ip_variable}
  */
  readonly sourceIpVariable?: string;
  /**
  * Configure VPN ID
  *   - Range: `0`-`65530`
  *   - Default value: `0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#source_vpn_id CiscoVpnInterfaceFeatureTemplate#source_vpn_id}
  */
  readonly sourceVpnId?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#source_vpn_id_variable CiscoVpnInterfaceFeatureTemplate#source_vpn_id_variable}
  */
  readonly sourceVpnIdVariable?: string;
  /**
  * Direction of static NAT translation
  *   - Choices: `inside`, `outside`
  *   - Default value: `inside`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#static_nat_direction CiscoVpnInterfaceFeatureTemplate#static_nat_direction}
  */
  readonly staticNatDirection?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#static_nat_direction_variable CiscoVpnInterfaceFeatureTemplate#static_nat_direction_variable}
  */
  readonly staticNatDirectionVariable?: string;
  /**
  * Statically translated source IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#translate_ip CiscoVpnInterfaceFeatureTemplate#translate_ip}
  */
  readonly translateIp?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#translate_ip_variable CiscoVpnInterfaceFeatureTemplate#translate_ip_variable}
  */
  readonly translateIpVariable?: string;
}

export function ciscoVpnInterfaceFeatureTemplateStaticNatEntriesToTerraform(struct?: CiscoVpnInterfaceFeatureTemplateStaticNatEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    optional: cdktf.booleanToTerraform(struct!.optional),
    source_ip: cdktf.stringToTerraform(struct!.sourceIp),
    source_ip_variable: cdktf.stringToTerraform(struct!.sourceIpVariable),
    source_vpn_id: cdktf.numberToTerraform(struct!.sourceVpnId),
    source_vpn_id_variable: cdktf.stringToTerraform(struct!.sourceVpnIdVariable),
    static_nat_direction: cdktf.stringToTerraform(struct!.staticNatDirection),
    static_nat_direction_variable: cdktf.stringToTerraform(struct!.staticNatDirectionVariable),
    translate_ip: cdktf.stringToTerraform(struct!.translateIp),
    translate_ip_variable: cdktf.stringToTerraform(struct!.translateIpVariable),
  }
}


export function ciscoVpnInterfaceFeatureTemplateStaticNatEntriesToHclTerraform(struct?: CiscoVpnInterfaceFeatureTemplateStaticNatEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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
    static_nat_direction: {
      value: cdktf.stringToHclTerraform(struct!.staticNatDirection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    static_nat_direction_variable: {
      value: cdktf.stringToHclTerraform(struct!.staticNatDirectionVariable),
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

export class CiscoVpnInterfaceFeatureTemplateStaticNatEntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CiscoVpnInterfaceFeatureTemplateStaticNatEntries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    if (this._sourceIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceIp = this._sourceIp;
    }
    if (this._sourceIpVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceIpVariable = this._sourceIpVariable;
    }
    if (this._sourceVpnId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceVpnId = this._sourceVpnId;
    }
    if (this._sourceVpnIdVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceVpnIdVariable = this._sourceVpnIdVariable;
    }
    if (this._staticNatDirection !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticNatDirection = this._staticNatDirection;
    }
    if (this._staticNatDirectionVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticNatDirectionVariable = this._staticNatDirectionVariable;
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

  public set internalValue(value: CiscoVpnInterfaceFeatureTemplateStaticNatEntries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._optional = undefined;
      this._sourceIp = undefined;
      this._sourceIpVariable = undefined;
      this._sourceVpnId = undefined;
      this._sourceVpnIdVariable = undefined;
      this._staticNatDirection = undefined;
      this._staticNatDirectionVariable = undefined;
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
      this._optional = value.optional;
      this._sourceIp = value.sourceIp;
      this._sourceIpVariable = value.sourceIpVariable;
      this._sourceVpnId = value.sourceVpnId;
      this._sourceVpnIdVariable = value.sourceVpnIdVariable;
      this._staticNatDirection = value.staticNatDirection;
      this._staticNatDirectionVariable = value.staticNatDirectionVariable;
      this._translateIp = value.translateIp;
      this._translateIpVariable = value.translateIpVariable;
    }
  }

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
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

  // static_nat_direction - computed: false, optional: true, required: false
  private _staticNatDirection?: string; 
  public get staticNatDirection() {
    return this.getStringAttribute('static_nat_direction');
  }
  public set staticNatDirection(value: string) {
    this._staticNatDirection = value;
  }
  public resetStaticNatDirection() {
    this._staticNatDirection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticNatDirectionInput() {
    return this._staticNatDirection;
  }

  // static_nat_direction_variable - computed: false, optional: true, required: false
  private _staticNatDirectionVariable?: string; 
  public get staticNatDirectionVariable() {
    return this.getStringAttribute('static_nat_direction_variable');
  }
  public set staticNatDirectionVariable(value: string) {
    this._staticNatDirectionVariable = value;
  }
  public resetStaticNatDirectionVariable() {
    this._staticNatDirectionVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticNatDirectionVariableInput() {
    return this._staticNatDirectionVariable;
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

export class CiscoVpnInterfaceFeatureTemplateStaticNatEntriesList extends cdktf.ComplexList {
  public internalValue? : CiscoVpnInterfaceFeatureTemplateStaticNatEntries[] | cdktf.IResolvable

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
  public get(index: number): CiscoVpnInterfaceFeatureTemplateStaticNatEntriesOutputReference {
    return new CiscoVpnInterfaceFeatureTemplateStaticNatEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CiscoVpnInterfaceFeatureTemplateStaticPortForwardEntries {
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#optional CiscoVpnInterfaceFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * Protocol
  *   - Choices: `tcp`, `udp`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#protocol CiscoVpnInterfaceFeatureTemplate#protocol}
  */
  readonly protocol?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#protocol_variable CiscoVpnInterfaceFeatureTemplate#protocol_variable}
  */
  readonly protocolVariable?: string;
  /**
  * Source IP address to be translated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#source_ip CiscoVpnInterfaceFeatureTemplate#source_ip}
  */
  readonly sourceIp?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#source_ip_variable CiscoVpnInterfaceFeatureTemplate#source_ip_variable}
  */
  readonly sourceIpVariable?: string;
  /**
  * Source Port
  *   - Range: `0`-`65535`
  *   - Default value: `0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#source_port CiscoVpnInterfaceFeatureTemplate#source_port}
  */
  readonly sourcePort?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#source_port_variable CiscoVpnInterfaceFeatureTemplate#source_port_variable}
  */
  readonly sourcePortVariable?: string;
  /**
  * Configure VPN ID
  *   - Range: `0`-`65530`
  *   - Default value: `0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#source_vpn_id CiscoVpnInterfaceFeatureTemplate#source_vpn_id}
  */
  readonly sourceVpnId?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#source_vpn_id_variable CiscoVpnInterfaceFeatureTemplate#source_vpn_id_variable}
  */
  readonly sourceVpnIdVariable?: string;
  /**
  * Direction of static NAT translation
  *   - Choices: `inside`, `outside`
  *   - Default value: `inside`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#static_nat_direction CiscoVpnInterfaceFeatureTemplate#static_nat_direction}
  */
  readonly staticNatDirection?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#static_nat_direction_variable CiscoVpnInterfaceFeatureTemplate#static_nat_direction_variable}
  */
  readonly staticNatDirectionVariable?: string;
  /**
  * Statically translated source IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#translate_ip CiscoVpnInterfaceFeatureTemplate#translate_ip}
  */
  readonly translateIp?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#translate_ip_variable CiscoVpnInterfaceFeatureTemplate#translate_ip_variable}
  */
  readonly translateIpVariable?: string;
  /**
  * Translate Port
  *   - Range: `0`-`65535`
  *   - Default value: `0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#translate_port CiscoVpnInterfaceFeatureTemplate#translate_port}
  */
  readonly translatePort?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#translate_port_variable CiscoVpnInterfaceFeatureTemplate#translate_port_variable}
  */
  readonly translatePortVariable?: string;
}

export function ciscoVpnInterfaceFeatureTemplateStaticPortForwardEntriesToTerraform(struct?: CiscoVpnInterfaceFeatureTemplateStaticPortForwardEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    optional: cdktf.booleanToTerraform(struct!.optional),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    protocol_variable: cdktf.stringToTerraform(struct!.protocolVariable),
    source_ip: cdktf.stringToTerraform(struct!.sourceIp),
    source_ip_variable: cdktf.stringToTerraform(struct!.sourceIpVariable),
    source_port: cdktf.numberToTerraform(struct!.sourcePort),
    source_port_variable: cdktf.stringToTerraform(struct!.sourcePortVariable),
    source_vpn_id: cdktf.numberToTerraform(struct!.sourceVpnId),
    source_vpn_id_variable: cdktf.stringToTerraform(struct!.sourceVpnIdVariable),
    static_nat_direction: cdktf.stringToTerraform(struct!.staticNatDirection),
    static_nat_direction_variable: cdktf.stringToTerraform(struct!.staticNatDirectionVariable),
    translate_ip: cdktf.stringToTerraform(struct!.translateIp),
    translate_ip_variable: cdktf.stringToTerraform(struct!.translateIpVariable),
    translate_port: cdktf.numberToTerraform(struct!.translatePort),
    translate_port_variable: cdktf.stringToTerraform(struct!.translatePortVariable),
  }
}


export function ciscoVpnInterfaceFeatureTemplateStaticPortForwardEntriesToHclTerraform(struct?: CiscoVpnInterfaceFeatureTemplateStaticPortForwardEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol_variable: {
      value: cdktf.stringToHclTerraform(struct!.protocolVariable),
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
    source_port: {
      value: cdktf.numberToHclTerraform(struct!.sourcePort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    source_port_variable: {
      value: cdktf.stringToHclTerraform(struct!.sourcePortVariable),
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
    static_nat_direction: {
      value: cdktf.stringToHclTerraform(struct!.staticNatDirection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    static_nat_direction_variable: {
      value: cdktf.stringToHclTerraform(struct!.staticNatDirectionVariable),
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
    translate_port: {
      value: cdktf.numberToHclTerraform(struct!.translatePort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    translate_port_variable: {
      value: cdktf.stringToHclTerraform(struct!.translatePortVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CiscoVpnInterfaceFeatureTemplateStaticPortForwardEntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CiscoVpnInterfaceFeatureTemplateStaticPortForwardEntries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._protocolVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocolVariable = this._protocolVariable;
    }
    if (this._sourceIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceIp = this._sourceIp;
    }
    if (this._sourceIpVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceIpVariable = this._sourceIpVariable;
    }
    if (this._sourcePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePort = this._sourcePort;
    }
    if (this._sourcePortVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePortVariable = this._sourcePortVariable;
    }
    if (this._sourceVpnId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceVpnId = this._sourceVpnId;
    }
    if (this._sourceVpnIdVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceVpnIdVariable = this._sourceVpnIdVariable;
    }
    if (this._staticNatDirection !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticNatDirection = this._staticNatDirection;
    }
    if (this._staticNatDirectionVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticNatDirectionVariable = this._staticNatDirectionVariable;
    }
    if (this._translateIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.translateIp = this._translateIp;
    }
    if (this._translateIpVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.translateIpVariable = this._translateIpVariable;
    }
    if (this._translatePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.translatePort = this._translatePort;
    }
    if (this._translatePortVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.translatePortVariable = this._translatePortVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CiscoVpnInterfaceFeatureTemplateStaticPortForwardEntries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._optional = undefined;
      this._protocol = undefined;
      this._protocolVariable = undefined;
      this._sourceIp = undefined;
      this._sourceIpVariable = undefined;
      this._sourcePort = undefined;
      this._sourcePortVariable = undefined;
      this._sourceVpnId = undefined;
      this._sourceVpnIdVariable = undefined;
      this._staticNatDirection = undefined;
      this._staticNatDirectionVariable = undefined;
      this._translateIp = undefined;
      this._translateIpVariable = undefined;
      this._translatePort = undefined;
      this._translatePortVariable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._optional = value.optional;
      this._protocol = value.protocol;
      this._protocolVariable = value.protocolVariable;
      this._sourceIp = value.sourceIp;
      this._sourceIpVariable = value.sourceIpVariable;
      this._sourcePort = value.sourcePort;
      this._sourcePortVariable = value.sourcePortVariable;
      this._sourceVpnId = value.sourceVpnId;
      this._sourceVpnIdVariable = value.sourceVpnIdVariable;
      this._staticNatDirection = value.staticNatDirection;
      this._staticNatDirectionVariable = value.staticNatDirectionVariable;
      this._translateIp = value.translateIp;
      this._translateIpVariable = value.translateIpVariable;
      this._translatePort = value.translatePort;
      this._translatePortVariable = value.translatePortVariable;
    }
  }

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // protocol_variable - computed: false, optional: true, required: false
  private _protocolVariable?: string; 
  public get protocolVariable() {
    return this.getStringAttribute('protocol_variable');
  }
  public set protocolVariable(value: string) {
    this._protocolVariable = value;
  }
  public resetProtocolVariable() {
    this._protocolVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolVariableInput() {
    return this._protocolVariable;
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

  // source_port - computed: false, optional: true, required: false
  private _sourcePort?: number; 
  public get sourcePort() {
    return this.getNumberAttribute('source_port');
  }
  public set sourcePort(value: number) {
    this._sourcePort = value;
  }
  public resetSourcePort() {
    this._sourcePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortInput() {
    return this._sourcePort;
  }

  // source_port_variable - computed: false, optional: true, required: false
  private _sourcePortVariable?: string; 
  public get sourcePortVariable() {
    return this.getStringAttribute('source_port_variable');
  }
  public set sourcePortVariable(value: string) {
    this._sourcePortVariable = value;
  }
  public resetSourcePortVariable() {
    this._sourcePortVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortVariableInput() {
    return this._sourcePortVariable;
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

  // static_nat_direction - computed: false, optional: true, required: false
  private _staticNatDirection?: string; 
  public get staticNatDirection() {
    return this.getStringAttribute('static_nat_direction');
  }
  public set staticNatDirection(value: string) {
    this._staticNatDirection = value;
  }
  public resetStaticNatDirection() {
    this._staticNatDirection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticNatDirectionInput() {
    return this._staticNatDirection;
  }

  // static_nat_direction_variable - computed: false, optional: true, required: false
  private _staticNatDirectionVariable?: string; 
  public get staticNatDirectionVariable() {
    return this.getStringAttribute('static_nat_direction_variable');
  }
  public set staticNatDirectionVariable(value: string) {
    this._staticNatDirectionVariable = value;
  }
  public resetStaticNatDirectionVariable() {
    this._staticNatDirectionVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticNatDirectionVariableInput() {
    return this._staticNatDirectionVariable;
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

  // translate_port - computed: false, optional: true, required: false
  private _translatePort?: number; 
  public get translatePort() {
    return this.getNumberAttribute('translate_port');
  }
  public set translatePort(value: number) {
    this._translatePort = value;
  }
  public resetTranslatePort() {
    this._translatePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get translatePortInput() {
    return this._translatePort;
  }

  // translate_port_variable - computed: false, optional: true, required: false
  private _translatePortVariable?: string; 
  public get translatePortVariable() {
    return this.getStringAttribute('translate_port_variable');
  }
  public set translatePortVariable(value: string) {
    this._translatePortVariable = value;
  }
  public resetTranslatePortVariable() {
    this._translatePortVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get translatePortVariableInput() {
    return this._translatePortVariable;
  }
}

export class CiscoVpnInterfaceFeatureTemplateStaticPortForwardEntriesList extends cdktf.ComplexList {
  public internalValue? : CiscoVpnInterfaceFeatureTemplateStaticPortForwardEntries[] | cdktf.IResolvable

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
  public get(index: number): CiscoVpnInterfaceFeatureTemplateStaticPortForwardEntriesOutputReference {
    return new CiscoVpnInterfaceFeatureTemplateStaticPortForwardEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CiscoVpnInterfaceFeatureTemplateTunnelInterfaceEncapsulations {
  /**
  * Encapsulation
  *   - Choices: `gre`, `ipsec`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#encapsulation CiscoVpnInterfaceFeatureTemplate#encapsulation}
  */
  readonly encapsulation?: string;
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#optional CiscoVpnInterfaceFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * Set preference for TLOC
  *   - Range: `0`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#preference CiscoVpnInterfaceFeatureTemplate#preference}
  */
  readonly preference?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#preference_variable CiscoVpnInterfaceFeatureTemplate#preference_variable}
  */
  readonly preferenceVariable?: string;
  /**
  * Set weight for TLOC
  *   - Range: `1`-`255`
  *   - Default value: `1`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#weight CiscoVpnInterfaceFeatureTemplate#weight}
  */
  readonly weight?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#weight_variable CiscoVpnInterfaceFeatureTemplate#weight_variable}
  */
  readonly weightVariable?: string;
}

export function ciscoVpnInterfaceFeatureTemplateTunnelInterfaceEncapsulationsToTerraform(struct?: CiscoVpnInterfaceFeatureTemplateTunnelInterfaceEncapsulations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    encapsulation: cdktf.stringToTerraform(struct!.encapsulation),
    optional: cdktf.booleanToTerraform(struct!.optional),
    preference: cdktf.numberToTerraform(struct!.preference),
    preference_variable: cdktf.stringToTerraform(struct!.preferenceVariable),
    weight: cdktf.numberToTerraform(struct!.weight),
    weight_variable: cdktf.stringToTerraform(struct!.weightVariable),
  }
}


export function ciscoVpnInterfaceFeatureTemplateTunnelInterfaceEncapsulationsToHclTerraform(struct?: CiscoVpnInterfaceFeatureTemplateTunnelInterfaceEncapsulations | cdktf.IResolvable): any {
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
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class CiscoVpnInterfaceFeatureTemplateTunnelInterfaceEncapsulationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CiscoVpnInterfaceFeatureTemplateTunnelInterfaceEncapsulations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encapsulation !== undefined) {
      hasAnyValues = true;
      internalValueResult.encapsulation = this._encapsulation;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
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

  public set internalValue(value: CiscoVpnInterfaceFeatureTemplateTunnelInterfaceEncapsulations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._encapsulation = undefined;
      this._optional = undefined;
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
      this._optional = value.optional;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
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

export class CiscoVpnInterfaceFeatureTemplateTunnelInterfaceEncapsulationsList extends cdktf.ComplexList {
  public internalValue? : CiscoVpnInterfaceFeatureTemplateTunnelInterfaceEncapsulations[] | cdktf.IResolvable

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
  public get(index: number): CiscoVpnInterfaceFeatureTemplateTunnelInterfaceEncapsulationsOutputReference {
    return new CiscoVpnInterfaceFeatureTemplateTunnelInterfaceEncapsulationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template sdwan_cisco_vpn_interface_feature_template}
*/
export class CiscoVpnInterfaceFeatureTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_cisco_vpn_interface_feature_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CiscoVpnInterfaceFeatureTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CiscoVpnInterfaceFeatureTemplate to import
  * @param importFromId The id of the existing CiscoVpnInterfaceFeatureTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CiscoVpnInterfaceFeatureTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_cisco_vpn_interface_feature_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_feature_template sdwan_cisco_vpn_interface_feature_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CiscoVpnInterfaceFeatureTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: CiscoVpnInterfaceFeatureTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_cisco_vpn_interface_feature_template',
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
    this._accessLists.internalValue = config.accessLists;
    this._address = config.address;
    this._addressVariable = config.addressVariable;
    this._arpTimeout = config.arpTimeout;
    this._arpTimeoutVariable = config.arpTimeoutVariable;
    this._autoBandwidthDetect = config.autoBandwidthDetect;
    this._autoBandwidthDetectVariable = config.autoBandwidthDetectVariable;
    this._autonegotiate = config.autonegotiate;
    this._autonegotiateVariable = config.autonegotiateVariable;
    this._bandwidthDownstream = config.bandwidthDownstream;
    this._bandwidthDownstreamVariable = config.bandwidthDownstreamVariable;
    this._bandwidthUpstream = config.bandwidthUpstream;
    this._bandwidthUpstreamVariable = config.bandwidthUpstreamVariable;
    this._blockNonSourceIp = config.blockNonSourceIp;
    this._blockNonSourceIpVariable = config.blockNonSourceIpVariable;
    this._coreRegion = config.coreRegion;
    this._coreRegionVariable = config.coreRegionVariable;
    this._description = config.description;
    this._deviceTypes = config.deviceTypes;
    this._dhcp = config.dhcp;
    this._dhcpDistance = config.dhcpDistance;
    this._dhcpDistanceVariable = config.dhcpDistanceVariable;
    this._dhcpVariable = config.dhcpVariable;
    this._dhcpv6 = config.dhcpv6;
    this._dhcpv6Variable = config.dhcpv6Variable;
    this._duplex = config.duplex;
    this._duplexVariable = config.duplexVariable;
    this._enableCoreRegion = config.enableCoreRegion;
    this._enableSgt = config.enableSgt;
    this._greTunnelSourceIp = config.greTunnelSourceIp;
    this._greTunnelSourceIpVariable = config.greTunnelSourceIpVariable;
    this._greTunnelXconnect = config.greTunnelXconnect;
    this._greTunnelXconnectVariable = config.greTunnelXconnectVariable;
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
    this._ipv4DhcpHelper = config.ipv4DhcpHelper;
    this._ipv4DhcpHelperVariable = config.ipv4DhcpHelperVariable;
    this._ipv4SecondaryAddresses.internalValue = config.ipv4SecondaryAddresses;
    this._ipv4Vrrps.internalValue = config.ipv4Vrrps;
    this._ipv6AccessLists.internalValue = config.ipv6AccessLists;
    this._ipv6Address = config.ipv6Address;
    this._ipv6AddressVariable = config.ipv6AddressVariable;
    this._ipv6DhcpHelpers.internalValue = config.ipv6DhcpHelpers;
    this._ipv6Nat = config.ipv6Nat;
    this._ipv6NatVariable = config.ipv6NatVariable;
    this._ipv6SecondaryAddresses.internalValue = config.ipv6SecondaryAddresses;
    this._ipv6Vrrps.internalValue = config.ipv6Vrrps;
    this._loadInterval = config.loadInterval;
    this._loadIntervalVariable = config.loadIntervalVariable;
    this._macAddress = config.macAddress;
    this._macAddressVariable = config.macAddressVariable;
    this._mediaType = config.mediaType;
    this._mediaTypeVariable = config.mediaTypeVariable;
    this._name = config.name;
    this._nat = config.nat;
    this._nat64Interface = config.nat64Interface;
    this._nat66Interface = config.nat66Interface;
    this._natInsideSourceLoopbackInterface = config.natInsideSourceLoopbackInterface;
    this._natInsideSourceLoopbackInterfaceVariable = config.natInsideSourceLoopbackInterfaceVariable;
    this._natOverload = config.natOverload;
    this._natOverloadVariable = config.natOverloadVariable;
    this._natPoolPrefixLength = config.natPoolPrefixLength;
    this._natPoolPrefixLengthVariable = config.natPoolPrefixLengthVariable;
    this._natPoolRangeEnd = config.natPoolRangeEnd;
    this._natPoolRangeEndVariable = config.natPoolRangeEndVariable;
    this._natPoolRangeStart = config.natPoolRangeStart;
    this._natPoolRangeStartVariable = config.natPoolRangeStartVariable;
    this._natType = config.natType;
    this._natTypeVariable = config.natTypeVariable;
    this._poe = config.poe;
    this._poeVariable = config.poeVariable;
    this._propagateSgt = config.propagateSgt;
    this._qosAdaptiveBandwidthDownstream = config.qosAdaptiveBandwidthDownstream;
    this._qosAdaptiveBandwidthDownstreamVariable = config.qosAdaptiveBandwidthDownstreamVariable;
    this._qosAdaptiveBandwidthUpstream = config.qosAdaptiveBandwidthUpstream;
    this._qosAdaptiveBandwidthUpstreamVariable = config.qosAdaptiveBandwidthUpstreamVariable;
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
    this._qosMap = config.qosMap;
    this._qosMapVariable = config.qosMapVariable;
    this._qosMapVpn = config.qosMapVpn;
    this._qosMapVpnVariable = config.qosMapVpnVariable;
    this._rewriteRuleName = config.rewriteRuleName;
    this._rewriteRuleNameVariable = config.rewriteRuleNameVariable;
    this._secondaryRegion = config.secondaryRegion;
    this._secondaryRegionVariable = config.secondaryRegionVariable;
    this._sgtEnforcement = config.sgtEnforcement;
    this._sgtEnforcementSgt = config.sgtEnforcementSgt;
    this._sgtEnforcementSgtVariable = config.sgtEnforcementSgtVariable;
    this._shapingRate = config.shapingRate;
    this._shapingRateVariable = config.shapingRateVariable;
    this._shutdown = config.shutdown;
    this._shutdownVariable = config.shutdownVariable;
    this._speed = config.speed;
    this._speedVariable = config.speedVariable;
    this._staticArps.internalValue = config.staticArps;
    this._staticNat66Entries.internalValue = config.staticNat66Entries;
    this._staticNatEntries.internalValue = config.staticNatEntries;
    this._staticPortForwardEntries.internalValue = config.staticPortForwardEntries;
    this._staticSgt = config.staticSgt;
    this._staticSgtTrusted = config.staticSgtTrusted;
    this._staticSgtVariable = config.staticSgtVariable;
    this._tcpMssAdjust = config.tcpMssAdjust;
    this._tcpMssAdjustVariable = config.tcpMssAdjustVariable;
    this._tcpTimeout = config.tcpTimeout;
    this._tcpTimeoutVariable = config.tcpTimeoutVariable;
    this._tlocExtension = config.tlocExtension;
    this._tlocExtensionVariable = config.tlocExtensionVariable;
    this._tracker = config.tracker;
    this._trackerVariable = config.trackerVariable;
    this._tunnelBandwidth = config.tunnelBandwidth;
    this._tunnelBandwidthVariable = config.tunnelBandwidthVariable;
    this._tunnelInterfaceAllowAll = config.tunnelInterfaceAllowAll;
    this._tunnelInterfaceAllowAllVariable = config.tunnelInterfaceAllowAllVariable;
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
    this._tunnelInterfaceControlConnections = config.tunnelInterfaceControlConnections;
    this._tunnelInterfaceControlConnectionsVariable = config.tunnelInterfaceControlConnectionsVariable;
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
    this._tunnelInterfacePropagateSgt = config.tunnelInterfacePropagateSgt;
    this._tunnelInterfacePropagateSgtVariable = config.tunnelInterfacePropagateSgtVariable;
    this._tunnelInterfaceTunnelTcpMss = config.tunnelInterfaceTunnelTcpMss;
    this._tunnelInterfaceTunnelTcpMssVariable = config.tunnelInterfaceTunnelTcpMssVariable;
    this._tunnelInterfaceVbondAsStunServer = config.tunnelInterfaceVbondAsStunServer;
    this._tunnelInterfaceVbondAsStunServerVariable = config.tunnelInterfaceVbondAsStunServerVariable;
    this._tunnelInterfaceVmanageConnectionPreference = config.tunnelInterfaceVmanageConnectionPreference;
    this._tunnelInterfaceVmanageConnectionPreferenceVariable = config.tunnelInterfaceVmanageConnectionPreferenceVariable;
    this._tunnelQosMode = config.tunnelQosMode;
    this._tunnelQosModeVariable = config.tunnelQosModeVariable;
    this._udpTimeout = config.udpTimeout;
    this._udpTimeoutVariable = config.udpTimeoutVariable;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_lists - computed: false, optional: true, required: false
  private _accessLists = new CiscoVpnInterfaceFeatureTemplateAccessListsList(this, "access_lists", false);
  public get accessLists() {
    return this._accessLists;
  }
  public putAccessLists(value: CiscoVpnInterfaceFeatureTemplateAccessLists[] | cdktf.IResolvable) {
    this._accessLists.internalValue = value;
  }
  public resetAccessLists() {
    this._accessLists.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessListsInput() {
    return this._accessLists.internalValue;
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

  // auto_bandwidth_detect - computed: false, optional: true, required: false
  private _autoBandwidthDetect?: boolean | cdktf.IResolvable; 
  public get autoBandwidthDetect() {
    return this.getBooleanAttribute('auto_bandwidth_detect');
  }
  public set autoBandwidthDetect(value: boolean | cdktf.IResolvable) {
    this._autoBandwidthDetect = value;
  }
  public resetAutoBandwidthDetect() {
    this._autoBandwidthDetect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoBandwidthDetectInput() {
    return this._autoBandwidthDetect;
  }

  // auto_bandwidth_detect_variable - computed: false, optional: true, required: false
  private _autoBandwidthDetectVariable?: string; 
  public get autoBandwidthDetectVariable() {
    return this.getStringAttribute('auto_bandwidth_detect_variable');
  }
  public set autoBandwidthDetectVariable(value: string) {
    this._autoBandwidthDetectVariable = value;
  }
  public resetAutoBandwidthDetectVariable() {
    this._autoBandwidthDetectVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoBandwidthDetectVariableInput() {
    return this._autoBandwidthDetectVariable;
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

  // core_region - computed: false, optional: true, required: false
  private _coreRegion?: string; 
  public get coreRegion() {
    return this.getStringAttribute('core_region');
  }
  public set coreRegion(value: string) {
    this._coreRegion = value;
  }
  public resetCoreRegion() {
    this._coreRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coreRegionInput() {
    return this._coreRegion;
  }

  // core_region_variable - computed: false, optional: true, required: false
  private _coreRegionVariable?: string; 
  public get coreRegionVariable() {
    return this.getStringAttribute('core_region_variable');
  }
  public set coreRegionVariable(value: string) {
    this._coreRegionVariable = value;
  }
  public resetCoreRegionVariable() {
    this._coreRegionVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coreRegionVariableInput() {
    return this._coreRegionVariable;
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // device_types - computed: false, optional: false, required: true
  private _deviceTypes?: string[]; 
  public get deviceTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('device_types'));
  }
  public set deviceTypes(value: string[]) {
    this._deviceTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceTypesInput() {
    return this._deviceTypes;
  }

  // dhcp - computed: false, optional: true, required: false
  private _dhcp?: boolean | cdktf.IResolvable; 
  public get dhcp() {
    return this.getBooleanAttribute('dhcp');
  }
  public set dhcp(value: boolean | cdktf.IResolvable) {
    this._dhcp = value;
  }
  public resetDhcp() {
    this._dhcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpInput() {
    return this._dhcp;
  }

  // dhcp_distance - computed: false, optional: true, required: false
  private _dhcpDistance?: number; 
  public get dhcpDistance() {
    return this.getNumberAttribute('dhcp_distance');
  }
  public set dhcpDistance(value: number) {
    this._dhcpDistance = value;
  }
  public resetDhcpDistance() {
    this._dhcpDistance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpDistanceInput() {
    return this._dhcpDistance;
  }

  // dhcp_distance_variable - computed: false, optional: true, required: false
  private _dhcpDistanceVariable?: string; 
  public get dhcpDistanceVariable() {
    return this.getStringAttribute('dhcp_distance_variable');
  }
  public set dhcpDistanceVariable(value: string) {
    this._dhcpDistanceVariable = value;
  }
  public resetDhcpDistanceVariable() {
    this._dhcpDistanceVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpDistanceVariableInput() {
    return this._dhcpDistanceVariable;
  }

  // dhcp_variable - computed: false, optional: true, required: false
  private _dhcpVariable?: string; 
  public get dhcpVariable() {
    return this.getStringAttribute('dhcp_variable');
  }
  public set dhcpVariable(value: string) {
    this._dhcpVariable = value;
  }
  public resetDhcpVariable() {
    this._dhcpVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpVariableInput() {
    return this._dhcpVariable;
  }

  // dhcpv6 - computed: false, optional: true, required: false
  private _dhcpv6?: boolean | cdktf.IResolvable; 
  public get dhcpv6() {
    return this.getBooleanAttribute('dhcpv6');
  }
  public set dhcpv6(value: boolean | cdktf.IResolvable) {
    this._dhcpv6 = value;
  }
  public resetDhcpv6() {
    this._dhcpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpv6Input() {
    return this._dhcpv6;
  }

  // dhcpv6_variable - computed: false, optional: true, required: false
  private _dhcpv6Variable?: string; 
  public get dhcpv6Variable() {
    return this.getStringAttribute('dhcpv6_variable');
  }
  public set dhcpv6Variable(value: string) {
    this._dhcpv6Variable = value;
  }
  public resetDhcpv6Variable() {
    this._dhcpv6Variable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpv6VariableInput() {
    return this._dhcpv6Variable;
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

  // enable_core_region - computed: false, optional: true, required: false
  private _enableCoreRegion?: boolean | cdktf.IResolvable; 
  public get enableCoreRegion() {
    return this.getBooleanAttribute('enable_core_region');
  }
  public set enableCoreRegion(value: boolean | cdktf.IResolvable) {
    this._enableCoreRegion = value;
  }
  public resetEnableCoreRegion() {
    this._enableCoreRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableCoreRegionInput() {
    return this._enableCoreRegion;
  }

  // enable_sgt - computed: false, optional: true, required: false
  private _enableSgt?: boolean | cdktf.IResolvable; 
  public get enableSgt() {
    return this.getBooleanAttribute('enable_sgt');
  }
  public set enableSgt(value: boolean | cdktf.IResolvable) {
    this._enableSgt = value;
  }
  public resetEnableSgt() {
    this._enableSgt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSgtInput() {
    return this._enableSgt;
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

  // gre_tunnel_xconnect - computed: false, optional: true, required: false
  private _greTunnelXconnect?: string; 
  public get greTunnelXconnect() {
    return this.getStringAttribute('gre_tunnel_xconnect');
  }
  public set greTunnelXconnect(value: string) {
    this._greTunnelXconnect = value;
  }
  public resetGreTunnelXconnect() {
    this._greTunnelXconnect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get greTunnelXconnectInput() {
    return this._greTunnelXconnect;
  }

  // gre_tunnel_xconnect_variable - computed: false, optional: true, required: false
  private _greTunnelXconnectVariable?: string; 
  public get greTunnelXconnectVariable() {
    return this.getStringAttribute('gre_tunnel_xconnect_variable');
  }
  public set greTunnelXconnectVariable(value: string) {
    this._greTunnelXconnectVariable = value;
  }
  public resetGreTunnelXconnectVariable() {
    this._greTunnelXconnectVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get greTunnelXconnectVariableInput() {
    return this._greTunnelXconnectVariable;
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
  private _ipv4SecondaryAddresses = new CiscoVpnInterfaceFeatureTemplateIpv4SecondaryAddressesList(this, "ipv4_secondary_addresses", false);
  public get ipv4SecondaryAddresses() {
    return this._ipv4SecondaryAddresses;
  }
  public putIpv4SecondaryAddresses(value: CiscoVpnInterfaceFeatureTemplateIpv4SecondaryAddresses[] | cdktf.IResolvable) {
    this._ipv4SecondaryAddresses.internalValue = value;
  }
  public resetIpv4SecondaryAddresses() {
    this._ipv4SecondaryAddresses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4SecondaryAddressesInput() {
    return this._ipv4SecondaryAddresses.internalValue;
  }

  // ipv4_vrrps - computed: false, optional: true, required: false
  private _ipv4Vrrps = new CiscoVpnInterfaceFeatureTemplateIpv4VrrpsList(this, "ipv4_vrrps", false);
  public get ipv4Vrrps() {
    return this._ipv4Vrrps;
  }
  public putIpv4Vrrps(value: CiscoVpnInterfaceFeatureTemplateIpv4Vrrps[] | cdktf.IResolvable) {
    this._ipv4Vrrps.internalValue = value;
  }
  public resetIpv4Vrrps() {
    this._ipv4Vrrps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4VrrpsInput() {
    return this._ipv4Vrrps.internalValue;
  }

  // ipv6_access_lists - computed: false, optional: true, required: false
  private _ipv6AccessLists = new CiscoVpnInterfaceFeatureTemplateIpv6AccessListsList(this, "ipv6_access_lists", false);
  public get ipv6AccessLists() {
    return this._ipv6AccessLists;
  }
  public putIpv6AccessLists(value: CiscoVpnInterfaceFeatureTemplateIpv6AccessLists[] | cdktf.IResolvable) {
    this._ipv6AccessLists.internalValue = value;
  }
  public resetIpv6AccessLists() {
    this._ipv6AccessLists.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AccessListsInput() {
    return this._ipv6AccessLists.internalValue;
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
  private _ipv6DhcpHelpers = new CiscoVpnInterfaceFeatureTemplateIpv6DhcpHelpersList(this, "ipv6_dhcp_helpers", false);
  public get ipv6DhcpHelpers() {
    return this._ipv6DhcpHelpers;
  }
  public putIpv6DhcpHelpers(value: CiscoVpnInterfaceFeatureTemplateIpv6DhcpHelpers[] | cdktf.IResolvable) {
    this._ipv6DhcpHelpers.internalValue = value;
  }
  public resetIpv6DhcpHelpers() {
    this._ipv6DhcpHelpers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6DhcpHelpersInput() {
    return this._ipv6DhcpHelpers.internalValue;
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

  // ipv6_nat_variable - computed: false, optional: true, required: false
  private _ipv6NatVariable?: string; 
  public get ipv6NatVariable() {
    return this.getStringAttribute('ipv6_nat_variable');
  }
  public set ipv6NatVariable(value: string) {
    this._ipv6NatVariable = value;
  }
  public resetIpv6NatVariable() {
    this._ipv6NatVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6NatVariableInput() {
    return this._ipv6NatVariable;
  }

  // ipv6_secondary_addresses - computed: false, optional: true, required: false
  private _ipv6SecondaryAddresses = new CiscoVpnInterfaceFeatureTemplateIpv6SecondaryAddressesList(this, "ipv6_secondary_addresses", false);
  public get ipv6SecondaryAddresses() {
    return this._ipv6SecondaryAddresses;
  }
  public putIpv6SecondaryAddresses(value: CiscoVpnInterfaceFeatureTemplateIpv6SecondaryAddresses[] | cdktf.IResolvable) {
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
  private _ipv6Vrrps = new CiscoVpnInterfaceFeatureTemplateIpv6VrrpsList(this, "ipv6_vrrps", false);
  public get ipv6Vrrps() {
    return this._ipv6Vrrps;
  }
  public putIpv6Vrrps(value: CiscoVpnInterfaceFeatureTemplateIpv6Vrrps[] | cdktf.IResolvable) {
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

  // nat - computed: false, optional: true, required: false
  private _nat?: boolean | cdktf.IResolvable; 
  public get nat() {
    return this.getBooleanAttribute('nat');
  }
  public set nat(value: boolean | cdktf.IResolvable) {
    this._nat = value;
  }
  public resetNat() {
    this._nat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natInput() {
    return this._nat;
  }

  // nat64_interface - computed: false, optional: true, required: false
  private _nat64Interface?: boolean | cdktf.IResolvable; 
  public get nat64Interface() {
    return this.getBooleanAttribute('nat64_interface');
  }
  public set nat64Interface(value: boolean | cdktf.IResolvable) {
    this._nat64Interface = value;
  }
  public resetNat64Interface() {
    this._nat64Interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nat64InterfaceInput() {
    return this._nat64Interface;
  }

  // nat66_interface - computed: false, optional: true, required: false
  private _nat66Interface?: boolean | cdktf.IResolvable; 
  public get nat66Interface() {
    return this.getBooleanAttribute('nat66_interface');
  }
  public set nat66Interface(value: boolean | cdktf.IResolvable) {
    this._nat66Interface = value;
  }
  public resetNat66Interface() {
    this._nat66Interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nat66InterfaceInput() {
    return this._nat66Interface;
  }

  // nat_inside_source_loopback_interface - computed: false, optional: true, required: false
  private _natInsideSourceLoopbackInterface?: string; 
  public get natInsideSourceLoopbackInterface() {
    return this.getStringAttribute('nat_inside_source_loopback_interface');
  }
  public set natInsideSourceLoopbackInterface(value: string) {
    this._natInsideSourceLoopbackInterface = value;
  }
  public resetNatInsideSourceLoopbackInterface() {
    this._natInsideSourceLoopbackInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natInsideSourceLoopbackInterfaceInput() {
    return this._natInsideSourceLoopbackInterface;
  }

  // nat_inside_source_loopback_interface_variable - computed: false, optional: true, required: false
  private _natInsideSourceLoopbackInterfaceVariable?: string; 
  public get natInsideSourceLoopbackInterfaceVariable() {
    return this.getStringAttribute('nat_inside_source_loopback_interface_variable');
  }
  public set natInsideSourceLoopbackInterfaceVariable(value: string) {
    this._natInsideSourceLoopbackInterfaceVariable = value;
  }
  public resetNatInsideSourceLoopbackInterfaceVariable() {
    this._natInsideSourceLoopbackInterfaceVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natInsideSourceLoopbackInterfaceVariableInput() {
    return this._natInsideSourceLoopbackInterfaceVariable;
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

  // nat_pool_prefix_length - computed: false, optional: true, required: false
  private _natPoolPrefixLength?: number; 
  public get natPoolPrefixLength() {
    return this.getNumberAttribute('nat_pool_prefix_length');
  }
  public set natPoolPrefixLength(value: number) {
    this._natPoolPrefixLength = value;
  }
  public resetNatPoolPrefixLength() {
    this._natPoolPrefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natPoolPrefixLengthInput() {
    return this._natPoolPrefixLength;
  }

  // nat_pool_prefix_length_variable - computed: false, optional: true, required: false
  private _natPoolPrefixLengthVariable?: string; 
  public get natPoolPrefixLengthVariable() {
    return this.getStringAttribute('nat_pool_prefix_length_variable');
  }
  public set natPoolPrefixLengthVariable(value: string) {
    this._natPoolPrefixLengthVariable = value;
  }
  public resetNatPoolPrefixLengthVariable() {
    this._natPoolPrefixLengthVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natPoolPrefixLengthVariableInput() {
    return this._natPoolPrefixLengthVariable;
  }

  // nat_pool_range_end - computed: false, optional: true, required: false
  private _natPoolRangeEnd?: string; 
  public get natPoolRangeEnd() {
    return this.getStringAttribute('nat_pool_range_end');
  }
  public set natPoolRangeEnd(value: string) {
    this._natPoolRangeEnd = value;
  }
  public resetNatPoolRangeEnd() {
    this._natPoolRangeEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natPoolRangeEndInput() {
    return this._natPoolRangeEnd;
  }

  // nat_pool_range_end_variable - computed: false, optional: true, required: false
  private _natPoolRangeEndVariable?: string; 
  public get natPoolRangeEndVariable() {
    return this.getStringAttribute('nat_pool_range_end_variable');
  }
  public set natPoolRangeEndVariable(value: string) {
    this._natPoolRangeEndVariable = value;
  }
  public resetNatPoolRangeEndVariable() {
    this._natPoolRangeEndVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natPoolRangeEndVariableInput() {
    return this._natPoolRangeEndVariable;
  }

  // nat_pool_range_start - computed: false, optional: true, required: false
  private _natPoolRangeStart?: string; 
  public get natPoolRangeStart() {
    return this.getStringAttribute('nat_pool_range_start');
  }
  public set natPoolRangeStart(value: string) {
    this._natPoolRangeStart = value;
  }
  public resetNatPoolRangeStart() {
    this._natPoolRangeStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natPoolRangeStartInput() {
    return this._natPoolRangeStart;
  }

  // nat_pool_range_start_variable - computed: false, optional: true, required: false
  private _natPoolRangeStartVariable?: string; 
  public get natPoolRangeStartVariable() {
    return this.getStringAttribute('nat_pool_range_start_variable');
  }
  public set natPoolRangeStartVariable(value: string) {
    this._natPoolRangeStartVariable = value;
  }
  public resetNatPoolRangeStartVariable() {
    this._natPoolRangeStartVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natPoolRangeStartVariableInput() {
    return this._natPoolRangeStartVariable;
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

  // poe - computed: false, optional: true, required: false
  private _poe?: boolean | cdktf.IResolvable; 
  public get poe() {
    return this.getBooleanAttribute('poe');
  }
  public set poe(value: boolean | cdktf.IResolvable) {
    this._poe = value;
  }
  public resetPoe() {
    this._poe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poeInput() {
    return this._poe;
  }

  // poe_variable - computed: false, optional: true, required: false
  private _poeVariable?: string; 
  public get poeVariable() {
    return this.getStringAttribute('poe_variable');
  }
  public set poeVariable(value: string) {
    this._poeVariable = value;
  }
  public resetPoeVariable() {
    this._poeVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poeVariableInput() {
    return this._poeVariable;
  }

  // propagate_sgt - computed: false, optional: true, required: false
  private _propagateSgt?: boolean | cdktf.IResolvable; 
  public get propagateSgt() {
    return this.getBooleanAttribute('propagate_sgt');
  }
  public set propagateSgt(value: boolean | cdktf.IResolvable) {
    this._propagateSgt = value;
  }
  public resetPropagateSgt() {
    this._propagateSgt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propagateSgtInput() {
    return this._propagateSgt;
  }

  // qos_adaptive_bandwidth_downstream - computed: false, optional: true, required: false
  private _qosAdaptiveBandwidthDownstream?: number; 
  public get qosAdaptiveBandwidthDownstream() {
    return this.getNumberAttribute('qos_adaptive_bandwidth_downstream');
  }
  public set qosAdaptiveBandwidthDownstream(value: number) {
    this._qosAdaptiveBandwidthDownstream = value;
  }
  public resetQosAdaptiveBandwidthDownstream() {
    this._qosAdaptiveBandwidthDownstream = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qosAdaptiveBandwidthDownstreamInput() {
    return this._qosAdaptiveBandwidthDownstream;
  }

  // qos_adaptive_bandwidth_downstream_variable - computed: false, optional: true, required: false
  private _qosAdaptiveBandwidthDownstreamVariable?: string; 
  public get qosAdaptiveBandwidthDownstreamVariable() {
    return this.getStringAttribute('qos_adaptive_bandwidth_downstream_variable');
  }
  public set qosAdaptiveBandwidthDownstreamVariable(value: string) {
    this._qosAdaptiveBandwidthDownstreamVariable = value;
  }
  public resetQosAdaptiveBandwidthDownstreamVariable() {
    this._qosAdaptiveBandwidthDownstreamVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qosAdaptiveBandwidthDownstreamVariableInput() {
    return this._qosAdaptiveBandwidthDownstreamVariable;
  }

  // qos_adaptive_bandwidth_upstream - computed: false, optional: true, required: false
  private _qosAdaptiveBandwidthUpstream?: number; 
  public get qosAdaptiveBandwidthUpstream() {
    return this.getNumberAttribute('qos_adaptive_bandwidth_upstream');
  }
  public set qosAdaptiveBandwidthUpstream(value: number) {
    this._qosAdaptiveBandwidthUpstream = value;
  }
  public resetQosAdaptiveBandwidthUpstream() {
    this._qosAdaptiveBandwidthUpstream = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qosAdaptiveBandwidthUpstreamInput() {
    return this._qosAdaptiveBandwidthUpstream;
  }

  // qos_adaptive_bandwidth_upstream_variable - computed: false, optional: true, required: false
  private _qosAdaptiveBandwidthUpstreamVariable?: string; 
  public get qosAdaptiveBandwidthUpstreamVariable() {
    return this.getStringAttribute('qos_adaptive_bandwidth_upstream_variable');
  }
  public set qosAdaptiveBandwidthUpstreamVariable(value: string) {
    this._qosAdaptiveBandwidthUpstreamVariable = value;
  }
  public resetQosAdaptiveBandwidthUpstreamVariable() {
    this._qosAdaptiveBandwidthUpstreamVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qosAdaptiveBandwidthUpstreamVariableInput() {
    return this._qosAdaptiveBandwidthUpstreamVariable;
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

  // qos_map - computed: false, optional: true, required: false
  private _qosMap?: string; 
  public get qosMap() {
    return this.getStringAttribute('qos_map');
  }
  public set qosMap(value: string) {
    this._qosMap = value;
  }
  public resetQosMap() {
    this._qosMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qosMapInput() {
    return this._qosMap;
  }

  // qos_map_variable - computed: false, optional: true, required: false
  private _qosMapVariable?: string; 
  public get qosMapVariable() {
    return this.getStringAttribute('qos_map_variable');
  }
  public set qosMapVariable(value: string) {
    this._qosMapVariable = value;
  }
  public resetQosMapVariable() {
    this._qosMapVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qosMapVariableInput() {
    return this._qosMapVariable;
  }

  // qos_map_vpn - computed: false, optional: true, required: false
  private _qosMapVpn?: string; 
  public get qosMapVpn() {
    return this.getStringAttribute('qos_map_vpn');
  }
  public set qosMapVpn(value: string) {
    this._qosMapVpn = value;
  }
  public resetQosMapVpn() {
    this._qosMapVpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qosMapVpnInput() {
    return this._qosMapVpn;
  }

  // qos_map_vpn_variable - computed: false, optional: true, required: false
  private _qosMapVpnVariable?: string; 
  public get qosMapVpnVariable() {
    return this.getStringAttribute('qos_map_vpn_variable');
  }
  public set qosMapVpnVariable(value: string) {
    this._qosMapVpnVariable = value;
  }
  public resetQosMapVpnVariable() {
    this._qosMapVpnVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qosMapVpnVariableInput() {
    return this._qosMapVpnVariable;
  }

  // rewrite_rule_name - computed: false, optional: true, required: false
  private _rewriteRuleName?: string; 
  public get rewriteRuleName() {
    return this.getStringAttribute('rewrite_rule_name');
  }
  public set rewriteRuleName(value: string) {
    this._rewriteRuleName = value;
  }
  public resetRewriteRuleName() {
    this._rewriteRuleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rewriteRuleNameInput() {
    return this._rewriteRuleName;
  }

  // rewrite_rule_name_variable - computed: false, optional: true, required: false
  private _rewriteRuleNameVariable?: string; 
  public get rewriteRuleNameVariable() {
    return this.getStringAttribute('rewrite_rule_name_variable');
  }
  public set rewriteRuleNameVariable(value: string) {
    this._rewriteRuleNameVariable = value;
  }
  public resetRewriteRuleNameVariable() {
    this._rewriteRuleNameVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rewriteRuleNameVariableInput() {
    return this._rewriteRuleNameVariable;
  }

  // secondary_region - computed: false, optional: true, required: false
  private _secondaryRegion?: string; 
  public get secondaryRegion() {
    return this.getStringAttribute('secondary_region');
  }
  public set secondaryRegion(value: string) {
    this._secondaryRegion = value;
  }
  public resetSecondaryRegion() {
    this._secondaryRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryRegionInput() {
    return this._secondaryRegion;
  }

  // secondary_region_variable - computed: false, optional: true, required: false
  private _secondaryRegionVariable?: string; 
  public get secondaryRegionVariable() {
    return this.getStringAttribute('secondary_region_variable');
  }
  public set secondaryRegionVariable(value: string) {
    this._secondaryRegionVariable = value;
  }
  public resetSecondaryRegionVariable() {
    this._secondaryRegionVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryRegionVariableInput() {
    return this._secondaryRegionVariable;
  }

  // sgt_enforcement - computed: false, optional: true, required: false
  private _sgtEnforcement?: boolean | cdktf.IResolvable; 
  public get sgtEnforcement() {
    return this.getBooleanAttribute('sgt_enforcement');
  }
  public set sgtEnforcement(value: boolean | cdktf.IResolvable) {
    this._sgtEnforcement = value;
  }
  public resetSgtEnforcement() {
    this._sgtEnforcement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sgtEnforcementInput() {
    return this._sgtEnforcement;
  }

  // sgt_enforcement_sgt - computed: false, optional: true, required: false
  private _sgtEnforcementSgt?: number; 
  public get sgtEnforcementSgt() {
    return this.getNumberAttribute('sgt_enforcement_sgt');
  }
  public set sgtEnforcementSgt(value: number) {
    this._sgtEnforcementSgt = value;
  }
  public resetSgtEnforcementSgt() {
    this._sgtEnforcementSgt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sgtEnforcementSgtInput() {
    return this._sgtEnforcementSgt;
  }

  // sgt_enforcement_sgt_variable - computed: false, optional: true, required: false
  private _sgtEnforcementSgtVariable?: string; 
  public get sgtEnforcementSgtVariable() {
    return this.getStringAttribute('sgt_enforcement_sgt_variable');
  }
  public set sgtEnforcementSgtVariable(value: string) {
    this._sgtEnforcementSgtVariable = value;
  }
  public resetSgtEnforcementSgtVariable() {
    this._sgtEnforcementSgtVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sgtEnforcementSgtVariableInput() {
    return this._sgtEnforcementSgtVariable;
  }

  // shaping_rate - computed: false, optional: true, required: false
  private _shapingRate?: number; 
  public get shapingRate() {
    return this.getNumberAttribute('shaping_rate');
  }
  public set shapingRate(value: number) {
    this._shapingRate = value;
  }
  public resetShapingRate() {
    this._shapingRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shapingRateInput() {
    return this._shapingRate;
  }

  // shaping_rate_variable - computed: false, optional: true, required: false
  private _shapingRateVariable?: string; 
  public get shapingRateVariable() {
    return this.getStringAttribute('shaping_rate_variable');
  }
  public set shapingRateVariable(value: string) {
    this._shapingRateVariable = value;
  }
  public resetShapingRateVariable() {
    this._shapingRateVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shapingRateVariableInput() {
    return this._shapingRateVariable;
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

  // static_arps - computed: false, optional: true, required: false
  private _staticArps = new CiscoVpnInterfaceFeatureTemplateStaticArpsList(this, "static_arps", false);
  public get staticArps() {
    return this._staticArps;
  }
  public putStaticArps(value: CiscoVpnInterfaceFeatureTemplateStaticArps[] | cdktf.IResolvable) {
    this._staticArps.internalValue = value;
  }
  public resetStaticArps() {
    this._staticArps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticArpsInput() {
    return this._staticArps.internalValue;
  }

  // static_nat66_entries - computed: false, optional: true, required: false
  private _staticNat66Entries = new CiscoVpnInterfaceFeatureTemplateStaticNat66EntriesList(this, "static_nat66_entries", false);
  public get staticNat66Entries() {
    return this._staticNat66Entries;
  }
  public putStaticNat66Entries(value: CiscoVpnInterfaceFeatureTemplateStaticNat66Entries[] | cdktf.IResolvable) {
    this._staticNat66Entries.internalValue = value;
  }
  public resetStaticNat66Entries() {
    this._staticNat66Entries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticNat66EntriesInput() {
    return this._staticNat66Entries.internalValue;
  }

  // static_nat_entries - computed: false, optional: true, required: false
  private _staticNatEntries = new CiscoVpnInterfaceFeatureTemplateStaticNatEntriesList(this, "static_nat_entries", false);
  public get staticNatEntries() {
    return this._staticNatEntries;
  }
  public putStaticNatEntries(value: CiscoVpnInterfaceFeatureTemplateStaticNatEntries[] | cdktf.IResolvable) {
    this._staticNatEntries.internalValue = value;
  }
  public resetStaticNatEntries() {
    this._staticNatEntries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticNatEntriesInput() {
    return this._staticNatEntries.internalValue;
  }

  // static_port_forward_entries - computed: false, optional: true, required: false
  private _staticPortForwardEntries = new CiscoVpnInterfaceFeatureTemplateStaticPortForwardEntriesList(this, "static_port_forward_entries", false);
  public get staticPortForwardEntries() {
    return this._staticPortForwardEntries;
  }
  public putStaticPortForwardEntries(value: CiscoVpnInterfaceFeatureTemplateStaticPortForwardEntries[] | cdktf.IResolvable) {
    this._staticPortForwardEntries.internalValue = value;
  }
  public resetStaticPortForwardEntries() {
    this._staticPortForwardEntries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticPortForwardEntriesInput() {
    return this._staticPortForwardEntries.internalValue;
  }

  // static_sgt - computed: false, optional: true, required: false
  private _staticSgt?: number; 
  public get staticSgt() {
    return this.getNumberAttribute('static_sgt');
  }
  public set staticSgt(value: number) {
    this._staticSgt = value;
  }
  public resetStaticSgt() {
    this._staticSgt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticSgtInput() {
    return this._staticSgt;
  }

  // static_sgt_trusted - computed: false, optional: true, required: false
  private _staticSgtTrusted?: boolean | cdktf.IResolvable; 
  public get staticSgtTrusted() {
    return this.getBooleanAttribute('static_sgt_trusted');
  }
  public set staticSgtTrusted(value: boolean | cdktf.IResolvable) {
    this._staticSgtTrusted = value;
  }
  public resetStaticSgtTrusted() {
    this._staticSgtTrusted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticSgtTrustedInput() {
    return this._staticSgtTrusted;
  }

  // static_sgt_variable - computed: false, optional: true, required: false
  private _staticSgtVariable?: string; 
  public get staticSgtVariable() {
    return this.getStringAttribute('static_sgt_variable');
  }
  public set staticSgtVariable(value: string) {
    this._staticSgtVariable = value;
  }
  public resetStaticSgtVariable() {
    this._staticSgtVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticSgtVariableInput() {
    return this._staticSgtVariable;
  }

  // tcp_mss_adjust - computed: false, optional: true, required: false
  private _tcpMssAdjust?: number; 
  public get tcpMssAdjust() {
    return this.getNumberAttribute('tcp_mss_adjust');
  }
  public set tcpMssAdjust(value: number) {
    this._tcpMssAdjust = value;
  }
  public resetTcpMssAdjust() {
    this._tcpMssAdjust = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpMssAdjustInput() {
    return this._tcpMssAdjust;
  }

  // tcp_mss_adjust_variable - computed: false, optional: true, required: false
  private _tcpMssAdjustVariable?: string; 
  public get tcpMssAdjustVariable() {
    return this.getStringAttribute('tcp_mss_adjust_variable');
  }
  public set tcpMssAdjustVariable(value: string) {
    this._tcpMssAdjustVariable = value;
  }
  public resetTcpMssAdjustVariable() {
    this._tcpMssAdjustVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpMssAdjustVariableInput() {
    return this._tcpMssAdjustVariable;
  }

  // tcp_timeout - computed: false, optional: true, required: false
  private _tcpTimeout?: number; 
  public get tcpTimeout() {
    return this.getNumberAttribute('tcp_timeout');
  }
  public set tcpTimeout(value: number) {
    this._tcpTimeout = value;
  }
  public resetTcpTimeout() {
    this._tcpTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpTimeoutInput() {
    return this._tcpTimeout;
  }

  // tcp_timeout_variable - computed: false, optional: true, required: false
  private _tcpTimeoutVariable?: string; 
  public get tcpTimeoutVariable() {
    return this.getStringAttribute('tcp_timeout_variable');
  }
  public set tcpTimeoutVariable(value: string) {
    this._tcpTimeoutVariable = value;
  }
  public resetTcpTimeoutVariable() {
    this._tcpTimeoutVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpTimeoutVariableInput() {
    return this._tcpTimeoutVariable;
  }

  // template_type - computed: true, optional: false, required: false
  public get templateType() {
    return this.getStringAttribute('template_type');
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
  private _tracker?: string[]; 
  public get tracker() {
    return cdktf.Fn.tolist(this.getListAttribute('tracker'));
  }
  public set tracker(value: string[]) {
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

  // tunnel_bandwidth - computed: false, optional: true, required: false
  private _tunnelBandwidth?: number; 
  public get tunnelBandwidth() {
    return this.getNumberAttribute('tunnel_bandwidth');
  }
  public set tunnelBandwidth(value: number) {
    this._tunnelBandwidth = value;
  }
  public resetTunnelBandwidth() {
    this._tunnelBandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelBandwidthInput() {
    return this._tunnelBandwidth;
  }

  // tunnel_bandwidth_variable - computed: false, optional: true, required: false
  private _tunnelBandwidthVariable?: string; 
  public get tunnelBandwidthVariable() {
    return this.getStringAttribute('tunnel_bandwidth_variable');
  }
  public set tunnelBandwidthVariable(value: string) {
    this._tunnelBandwidthVariable = value;
  }
  public resetTunnelBandwidthVariable() {
    this._tunnelBandwidthVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelBandwidthVariableInput() {
    return this._tunnelBandwidthVariable;
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

  // tunnel_interface_control_connections - computed: false, optional: true, required: false
  private _tunnelInterfaceControlConnections?: boolean | cdktf.IResolvable; 
  public get tunnelInterfaceControlConnections() {
    return this.getBooleanAttribute('tunnel_interface_control_connections');
  }
  public set tunnelInterfaceControlConnections(value: boolean | cdktf.IResolvable) {
    this._tunnelInterfaceControlConnections = value;
  }
  public resetTunnelInterfaceControlConnections() {
    this._tunnelInterfaceControlConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelInterfaceControlConnectionsInput() {
    return this._tunnelInterfaceControlConnections;
  }

  // tunnel_interface_control_connections_variable - computed: false, optional: true, required: false
  private _tunnelInterfaceControlConnectionsVariable?: string; 
  public get tunnelInterfaceControlConnectionsVariable() {
    return this.getStringAttribute('tunnel_interface_control_connections_variable');
  }
  public set tunnelInterfaceControlConnectionsVariable(value: string) {
    this._tunnelInterfaceControlConnectionsVariable = value;
  }
  public resetTunnelInterfaceControlConnectionsVariable() {
    this._tunnelInterfaceControlConnectionsVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelInterfaceControlConnectionsVariableInput() {
    return this._tunnelInterfaceControlConnectionsVariable;
  }

  // tunnel_interface_encapsulations - computed: false, optional: true, required: false
  private _tunnelInterfaceEncapsulations = new CiscoVpnInterfaceFeatureTemplateTunnelInterfaceEncapsulationsList(this, "tunnel_interface_encapsulations", false);
  public get tunnelInterfaceEncapsulations() {
    return this._tunnelInterfaceEncapsulations;
  }
  public putTunnelInterfaceEncapsulations(value: CiscoVpnInterfaceFeatureTemplateTunnelInterfaceEncapsulations[] | cdktf.IResolvable) {
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
  private _tunnelInterfaceGroups?: number[]; 
  public get tunnelInterfaceGroups() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('tunnel_interface_groups')));
  }
  public set tunnelInterfaceGroups(value: number[]) {
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

  // tunnel_interface_propagate_sgt - computed: false, optional: true, required: false
  private _tunnelInterfacePropagateSgt?: boolean | cdktf.IResolvable; 
  public get tunnelInterfacePropagateSgt() {
    return this.getBooleanAttribute('tunnel_interface_propagate_sgt');
  }
  public set tunnelInterfacePropagateSgt(value: boolean | cdktf.IResolvable) {
    this._tunnelInterfacePropagateSgt = value;
  }
  public resetTunnelInterfacePropagateSgt() {
    this._tunnelInterfacePropagateSgt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelInterfacePropagateSgtInput() {
    return this._tunnelInterfacePropagateSgt;
  }

  // tunnel_interface_propagate_sgt_variable - computed: false, optional: true, required: false
  private _tunnelInterfacePropagateSgtVariable?: string; 
  public get tunnelInterfacePropagateSgtVariable() {
    return this.getStringAttribute('tunnel_interface_propagate_sgt_variable');
  }
  public set tunnelInterfacePropagateSgtVariable(value: string) {
    this._tunnelInterfacePropagateSgtVariable = value;
  }
  public resetTunnelInterfacePropagateSgtVariable() {
    this._tunnelInterfacePropagateSgtVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelInterfacePropagateSgtVariableInput() {
    return this._tunnelInterfacePropagateSgtVariable;
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

  // udp_timeout - computed: false, optional: true, required: false
  private _udpTimeout?: number; 
  public get udpTimeout() {
    return this.getNumberAttribute('udp_timeout');
  }
  public set udpTimeout(value: number) {
    this._udpTimeout = value;
  }
  public resetUdpTimeout() {
    this._udpTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpTimeoutInput() {
    return this._udpTimeout;
  }

  // udp_timeout_variable - computed: false, optional: true, required: false
  private _udpTimeoutVariable?: string; 
  public get udpTimeoutVariable() {
    return this.getStringAttribute('udp_timeout_variable');
  }
  public set udpTimeoutVariable(value: string) {
    this._udpTimeoutVariable = value;
  }
  public resetUdpTimeoutVariable() {
    this._udpTimeoutVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpTimeoutVariableInput() {
    return this._udpTimeoutVariable;
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
      access_lists: cdktf.listMapper(ciscoVpnInterfaceFeatureTemplateAccessListsToTerraform, false)(this._accessLists.internalValue),
      address: cdktf.stringToTerraform(this._address),
      address_variable: cdktf.stringToTerraform(this._addressVariable),
      arp_timeout: cdktf.numberToTerraform(this._arpTimeout),
      arp_timeout_variable: cdktf.stringToTerraform(this._arpTimeoutVariable),
      auto_bandwidth_detect: cdktf.booleanToTerraform(this._autoBandwidthDetect),
      auto_bandwidth_detect_variable: cdktf.stringToTerraform(this._autoBandwidthDetectVariable),
      autonegotiate: cdktf.booleanToTerraform(this._autonegotiate),
      autonegotiate_variable: cdktf.stringToTerraform(this._autonegotiateVariable),
      bandwidth_downstream: cdktf.numberToTerraform(this._bandwidthDownstream),
      bandwidth_downstream_variable: cdktf.stringToTerraform(this._bandwidthDownstreamVariable),
      bandwidth_upstream: cdktf.numberToTerraform(this._bandwidthUpstream),
      bandwidth_upstream_variable: cdktf.stringToTerraform(this._bandwidthUpstreamVariable),
      block_non_source_ip: cdktf.booleanToTerraform(this._blockNonSourceIp),
      block_non_source_ip_variable: cdktf.stringToTerraform(this._blockNonSourceIpVariable),
      core_region: cdktf.stringToTerraform(this._coreRegion),
      core_region_variable: cdktf.stringToTerraform(this._coreRegionVariable),
      description: cdktf.stringToTerraform(this._description),
      device_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._deviceTypes),
      dhcp: cdktf.booleanToTerraform(this._dhcp),
      dhcp_distance: cdktf.numberToTerraform(this._dhcpDistance),
      dhcp_distance_variable: cdktf.stringToTerraform(this._dhcpDistanceVariable),
      dhcp_variable: cdktf.stringToTerraform(this._dhcpVariable),
      dhcpv6: cdktf.booleanToTerraform(this._dhcpv6),
      dhcpv6_variable: cdktf.stringToTerraform(this._dhcpv6Variable),
      duplex: cdktf.stringToTerraform(this._duplex),
      duplex_variable: cdktf.stringToTerraform(this._duplexVariable),
      enable_core_region: cdktf.booleanToTerraform(this._enableCoreRegion),
      enable_sgt: cdktf.booleanToTerraform(this._enableSgt),
      gre_tunnel_source_ip: cdktf.stringToTerraform(this._greTunnelSourceIp),
      gre_tunnel_source_ip_variable: cdktf.stringToTerraform(this._greTunnelSourceIpVariable),
      gre_tunnel_xconnect: cdktf.stringToTerraform(this._greTunnelXconnect),
      gre_tunnel_xconnect_variable: cdktf.stringToTerraform(this._greTunnelXconnectVariable),
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
      ipv4_dhcp_helper: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipv4DhcpHelper),
      ipv4_dhcp_helper_variable: cdktf.stringToTerraform(this._ipv4DhcpHelperVariable),
      ipv4_secondary_addresses: cdktf.listMapper(ciscoVpnInterfaceFeatureTemplateIpv4SecondaryAddressesToTerraform, false)(this._ipv4SecondaryAddresses.internalValue),
      ipv4_vrrps: cdktf.listMapper(ciscoVpnInterfaceFeatureTemplateIpv4VrrpsToTerraform, false)(this._ipv4Vrrps.internalValue),
      ipv6_access_lists: cdktf.listMapper(ciscoVpnInterfaceFeatureTemplateIpv6AccessListsToTerraform, false)(this._ipv6AccessLists.internalValue),
      ipv6_address: cdktf.stringToTerraform(this._ipv6Address),
      ipv6_address_variable: cdktf.stringToTerraform(this._ipv6AddressVariable),
      ipv6_dhcp_helpers: cdktf.listMapper(ciscoVpnInterfaceFeatureTemplateIpv6DhcpHelpersToTerraform, false)(this._ipv6DhcpHelpers.internalValue),
      ipv6_nat: cdktf.booleanToTerraform(this._ipv6Nat),
      ipv6_nat_variable: cdktf.stringToTerraform(this._ipv6NatVariable),
      ipv6_secondary_addresses: cdktf.listMapper(ciscoVpnInterfaceFeatureTemplateIpv6SecondaryAddressesToTerraform, false)(this._ipv6SecondaryAddresses.internalValue),
      ipv6_vrrps: cdktf.listMapper(ciscoVpnInterfaceFeatureTemplateIpv6VrrpsToTerraform, false)(this._ipv6Vrrps.internalValue),
      load_interval: cdktf.numberToTerraform(this._loadInterval),
      load_interval_variable: cdktf.stringToTerraform(this._loadIntervalVariable),
      mac_address: cdktf.stringToTerraform(this._macAddress),
      mac_address_variable: cdktf.stringToTerraform(this._macAddressVariable),
      media_type: cdktf.stringToTerraform(this._mediaType),
      media_type_variable: cdktf.stringToTerraform(this._mediaTypeVariable),
      name: cdktf.stringToTerraform(this._name),
      nat: cdktf.booleanToTerraform(this._nat),
      nat64_interface: cdktf.booleanToTerraform(this._nat64Interface),
      nat66_interface: cdktf.booleanToTerraform(this._nat66Interface),
      nat_inside_source_loopback_interface: cdktf.stringToTerraform(this._natInsideSourceLoopbackInterface),
      nat_inside_source_loopback_interface_variable: cdktf.stringToTerraform(this._natInsideSourceLoopbackInterfaceVariable),
      nat_overload: cdktf.booleanToTerraform(this._natOverload),
      nat_overload_variable: cdktf.stringToTerraform(this._natOverloadVariable),
      nat_pool_prefix_length: cdktf.numberToTerraform(this._natPoolPrefixLength),
      nat_pool_prefix_length_variable: cdktf.stringToTerraform(this._natPoolPrefixLengthVariable),
      nat_pool_range_end: cdktf.stringToTerraform(this._natPoolRangeEnd),
      nat_pool_range_end_variable: cdktf.stringToTerraform(this._natPoolRangeEndVariable),
      nat_pool_range_start: cdktf.stringToTerraform(this._natPoolRangeStart),
      nat_pool_range_start_variable: cdktf.stringToTerraform(this._natPoolRangeStartVariable),
      nat_type: cdktf.stringToTerraform(this._natType),
      nat_type_variable: cdktf.stringToTerraform(this._natTypeVariable),
      poe: cdktf.booleanToTerraform(this._poe),
      poe_variable: cdktf.stringToTerraform(this._poeVariable),
      propagate_sgt: cdktf.booleanToTerraform(this._propagateSgt),
      qos_adaptive_bandwidth_downstream: cdktf.numberToTerraform(this._qosAdaptiveBandwidthDownstream),
      qos_adaptive_bandwidth_downstream_variable: cdktf.stringToTerraform(this._qosAdaptiveBandwidthDownstreamVariable),
      qos_adaptive_bandwidth_upstream: cdktf.numberToTerraform(this._qosAdaptiveBandwidthUpstream),
      qos_adaptive_bandwidth_upstream_variable: cdktf.stringToTerraform(this._qosAdaptiveBandwidthUpstreamVariable),
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
      qos_map: cdktf.stringToTerraform(this._qosMap),
      qos_map_variable: cdktf.stringToTerraform(this._qosMapVariable),
      qos_map_vpn: cdktf.stringToTerraform(this._qosMapVpn),
      qos_map_vpn_variable: cdktf.stringToTerraform(this._qosMapVpnVariable),
      rewrite_rule_name: cdktf.stringToTerraform(this._rewriteRuleName),
      rewrite_rule_name_variable: cdktf.stringToTerraform(this._rewriteRuleNameVariable),
      secondary_region: cdktf.stringToTerraform(this._secondaryRegion),
      secondary_region_variable: cdktf.stringToTerraform(this._secondaryRegionVariable),
      sgt_enforcement: cdktf.booleanToTerraform(this._sgtEnforcement),
      sgt_enforcement_sgt: cdktf.numberToTerraform(this._sgtEnforcementSgt),
      sgt_enforcement_sgt_variable: cdktf.stringToTerraform(this._sgtEnforcementSgtVariable),
      shaping_rate: cdktf.numberToTerraform(this._shapingRate),
      shaping_rate_variable: cdktf.stringToTerraform(this._shapingRateVariable),
      shutdown: cdktf.booleanToTerraform(this._shutdown),
      shutdown_variable: cdktf.stringToTerraform(this._shutdownVariable),
      speed: cdktf.stringToTerraform(this._speed),
      speed_variable: cdktf.stringToTerraform(this._speedVariable),
      static_arps: cdktf.listMapper(ciscoVpnInterfaceFeatureTemplateStaticArpsToTerraform, false)(this._staticArps.internalValue),
      static_nat66_entries: cdktf.listMapper(ciscoVpnInterfaceFeatureTemplateStaticNat66EntriesToTerraform, false)(this._staticNat66Entries.internalValue),
      static_nat_entries: cdktf.listMapper(ciscoVpnInterfaceFeatureTemplateStaticNatEntriesToTerraform, false)(this._staticNatEntries.internalValue),
      static_port_forward_entries: cdktf.listMapper(ciscoVpnInterfaceFeatureTemplateStaticPortForwardEntriesToTerraform, false)(this._staticPortForwardEntries.internalValue),
      static_sgt: cdktf.numberToTerraform(this._staticSgt),
      static_sgt_trusted: cdktf.booleanToTerraform(this._staticSgtTrusted),
      static_sgt_variable: cdktf.stringToTerraform(this._staticSgtVariable),
      tcp_mss_adjust: cdktf.numberToTerraform(this._tcpMssAdjust),
      tcp_mss_adjust_variable: cdktf.stringToTerraform(this._tcpMssAdjustVariable),
      tcp_timeout: cdktf.numberToTerraform(this._tcpTimeout),
      tcp_timeout_variable: cdktf.stringToTerraform(this._tcpTimeoutVariable),
      tloc_extension: cdktf.stringToTerraform(this._tlocExtension),
      tloc_extension_variable: cdktf.stringToTerraform(this._tlocExtensionVariable),
      tracker: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tracker),
      tracker_variable: cdktf.stringToTerraform(this._trackerVariable),
      tunnel_bandwidth: cdktf.numberToTerraform(this._tunnelBandwidth),
      tunnel_bandwidth_variable: cdktf.stringToTerraform(this._tunnelBandwidthVariable),
      tunnel_interface_allow_all: cdktf.booleanToTerraform(this._tunnelInterfaceAllowAll),
      tunnel_interface_allow_all_variable: cdktf.stringToTerraform(this._tunnelInterfaceAllowAllVariable),
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
      tunnel_interface_control_connections: cdktf.booleanToTerraform(this._tunnelInterfaceControlConnections),
      tunnel_interface_control_connections_variable: cdktf.stringToTerraform(this._tunnelInterfaceControlConnectionsVariable),
      tunnel_interface_encapsulations: cdktf.listMapper(ciscoVpnInterfaceFeatureTemplateTunnelInterfaceEncapsulationsToTerraform, false)(this._tunnelInterfaceEncapsulations.internalValue),
      tunnel_interface_exclude_controller_group_list: cdktf.listMapper(cdktf.numberToTerraform, false)(this._tunnelInterfaceExcludeControllerGroupList),
      tunnel_interface_exclude_controller_group_list_variable: cdktf.stringToTerraform(this._tunnelInterfaceExcludeControllerGroupListVariable),
      tunnel_interface_gre_tunnel_destination_ip: cdktf.stringToTerraform(this._tunnelInterfaceGreTunnelDestinationIp),
      tunnel_interface_gre_tunnel_destination_ip_variable: cdktf.stringToTerraform(this._tunnelInterfaceGreTunnelDestinationIpVariable),
      tunnel_interface_groups: cdktf.listMapper(cdktf.numberToTerraform, false)(this._tunnelInterfaceGroups),
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
      tunnel_interface_propagate_sgt: cdktf.booleanToTerraform(this._tunnelInterfacePropagateSgt),
      tunnel_interface_propagate_sgt_variable: cdktf.stringToTerraform(this._tunnelInterfacePropagateSgtVariable),
      tunnel_interface_tunnel_tcp_mss: cdktf.numberToTerraform(this._tunnelInterfaceTunnelTcpMss),
      tunnel_interface_tunnel_tcp_mss_variable: cdktf.stringToTerraform(this._tunnelInterfaceTunnelTcpMssVariable),
      tunnel_interface_vbond_as_stun_server: cdktf.booleanToTerraform(this._tunnelInterfaceVbondAsStunServer),
      tunnel_interface_vbond_as_stun_server_variable: cdktf.stringToTerraform(this._tunnelInterfaceVbondAsStunServerVariable),
      tunnel_interface_vmanage_connection_preference: cdktf.numberToTerraform(this._tunnelInterfaceVmanageConnectionPreference),
      tunnel_interface_vmanage_connection_preference_variable: cdktf.stringToTerraform(this._tunnelInterfaceVmanageConnectionPreferenceVariable),
      tunnel_qos_mode: cdktf.stringToTerraform(this._tunnelQosMode),
      tunnel_qos_mode_variable: cdktf.stringToTerraform(this._tunnelQosModeVariable),
      udp_timeout: cdktf.numberToTerraform(this._udpTimeout),
      udp_timeout_variable: cdktf.stringToTerraform(this._udpTimeoutVariable),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_lists: {
        value: cdktf.listMapperHcl(ciscoVpnInterfaceFeatureTemplateAccessListsToHclTerraform, false)(this._accessLists.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CiscoVpnInterfaceFeatureTemplateAccessListsList",
      },
      address: {
        value: cdktf.stringToHclTerraform(this._address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      address_variable: {
        value: cdktf.stringToHclTerraform(this._addressVariable),
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
      auto_bandwidth_detect: {
        value: cdktf.booleanToHclTerraform(this._autoBandwidthDetect),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_bandwidth_detect_variable: {
        value: cdktf.stringToHclTerraform(this._autoBandwidthDetectVariable),
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
      core_region: {
        value: cdktf.stringToHclTerraform(this._coreRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      core_region_variable: {
        value: cdktf.stringToHclTerraform(this._coreRegionVariable),
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
      device_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._deviceTypes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dhcp: {
        value: cdktf.booleanToHclTerraform(this._dhcp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dhcp_distance: {
        value: cdktf.numberToHclTerraform(this._dhcpDistance),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dhcp_distance_variable: {
        value: cdktf.stringToHclTerraform(this._dhcpDistanceVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dhcp_variable: {
        value: cdktf.stringToHclTerraform(this._dhcpVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dhcpv6: {
        value: cdktf.booleanToHclTerraform(this._dhcpv6),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dhcpv6_variable: {
        value: cdktf.stringToHclTerraform(this._dhcpv6Variable),
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
      enable_core_region: {
        value: cdktf.booleanToHclTerraform(this._enableCoreRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_sgt: {
        value: cdktf.booleanToHclTerraform(this._enableSgt),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      gre_tunnel_xconnect: {
        value: cdktf.stringToHclTerraform(this._greTunnelXconnect),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gre_tunnel_xconnect_variable: {
        value: cdktf.stringToHclTerraform(this._greTunnelXconnectVariable),
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
        value: cdktf.listMapperHcl(ciscoVpnInterfaceFeatureTemplateIpv4SecondaryAddressesToHclTerraform, false)(this._ipv4SecondaryAddresses.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CiscoVpnInterfaceFeatureTemplateIpv4SecondaryAddressesList",
      },
      ipv4_vrrps: {
        value: cdktf.listMapperHcl(ciscoVpnInterfaceFeatureTemplateIpv4VrrpsToHclTerraform, false)(this._ipv4Vrrps.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CiscoVpnInterfaceFeatureTemplateIpv4VrrpsList",
      },
      ipv6_access_lists: {
        value: cdktf.listMapperHcl(ciscoVpnInterfaceFeatureTemplateIpv6AccessListsToHclTerraform, false)(this._ipv6AccessLists.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CiscoVpnInterfaceFeatureTemplateIpv6AccessListsList",
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
        value: cdktf.listMapperHcl(ciscoVpnInterfaceFeatureTemplateIpv6DhcpHelpersToHclTerraform, false)(this._ipv6DhcpHelpers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CiscoVpnInterfaceFeatureTemplateIpv6DhcpHelpersList",
      },
      ipv6_nat: {
        value: cdktf.booleanToHclTerraform(this._ipv6Nat),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ipv6_nat_variable: {
        value: cdktf.stringToHclTerraform(this._ipv6NatVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_secondary_addresses: {
        value: cdktf.listMapperHcl(ciscoVpnInterfaceFeatureTemplateIpv6SecondaryAddressesToHclTerraform, false)(this._ipv6SecondaryAddresses.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CiscoVpnInterfaceFeatureTemplateIpv6SecondaryAddressesList",
      },
      ipv6_vrrps: {
        value: cdktf.listMapperHcl(ciscoVpnInterfaceFeatureTemplateIpv6VrrpsToHclTerraform, false)(this._ipv6Vrrps.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CiscoVpnInterfaceFeatureTemplateIpv6VrrpsList",
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
      nat: {
        value: cdktf.booleanToHclTerraform(this._nat),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      nat64_interface: {
        value: cdktf.booleanToHclTerraform(this._nat64Interface),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      nat66_interface: {
        value: cdktf.booleanToHclTerraform(this._nat66Interface),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      nat_inside_source_loopback_interface: {
        value: cdktf.stringToHclTerraform(this._natInsideSourceLoopbackInterface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nat_inside_source_loopback_interface_variable: {
        value: cdktf.stringToHclTerraform(this._natInsideSourceLoopbackInterfaceVariable),
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
      nat_pool_prefix_length: {
        value: cdktf.numberToHclTerraform(this._natPoolPrefixLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      nat_pool_prefix_length_variable: {
        value: cdktf.stringToHclTerraform(this._natPoolPrefixLengthVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nat_pool_range_end: {
        value: cdktf.stringToHclTerraform(this._natPoolRangeEnd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nat_pool_range_end_variable: {
        value: cdktf.stringToHclTerraform(this._natPoolRangeEndVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nat_pool_range_start: {
        value: cdktf.stringToHclTerraform(this._natPoolRangeStart),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nat_pool_range_start_variable: {
        value: cdktf.stringToHclTerraform(this._natPoolRangeStartVariable),
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
      poe: {
        value: cdktf.booleanToHclTerraform(this._poe),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      poe_variable: {
        value: cdktf.stringToHclTerraform(this._poeVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      propagate_sgt: {
        value: cdktf.booleanToHclTerraform(this._propagateSgt),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      qos_adaptive_bandwidth_downstream: {
        value: cdktf.numberToHclTerraform(this._qosAdaptiveBandwidthDownstream),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      qos_adaptive_bandwidth_downstream_variable: {
        value: cdktf.stringToHclTerraform(this._qosAdaptiveBandwidthDownstreamVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      qos_adaptive_bandwidth_upstream: {
        value: cdktf.numberToHclTerraform(this._qosAdaptiveBandwidthUpstream),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      qos_adaptive_bandwidth_upstream_variable: {
        value: cdktf.stringToHclTerraform(this._qosAdaptiveBandwidthUpstreamVariable),
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
      qos_map: {
        value: cdktf.stringToHclTerraform(this._qosMap),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      qos_map_variable: {
        value: cdktf.stringToHclTerraform(this._qosMapVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      qos_map_vpn: {
        value: cdktf.stringToHclTerraform(this._qosMapVpn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      qos_map_vpn_variable: {
        value: cdktf.stringToHclTerraform(this._qosMapVpnVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rewrite_rule_name: {
        value: cdktf.stringToHclTerraform(this._rewriteRuleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rewrite_rule_name_variable: {
        value: cdktf.stringToHclTerraform(this._rewriteRuleNameVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secondary_region: {
        value: cdktf.stringToHclTerraform(this._secondaryRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secondary_region_variable: {
        value: cdktf.stringToHclTerraform(this._secondaryRegionVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sgt_enforcement: {
        value: cdktf.booleanToHclTerraform(this._sgtEnforcement),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sgt_enforcement_sgt: {
        value: cdktf.numberToHclTerraform(this._sgtEnforcementSgt),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sgt_enforcement_sgt_variable: {
        value: cdktf.stringToHclTerraform(this._sgtEnforcementSgtVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shaping_rate: {
        value: cdktf.numberToHclTerraform(this._shapingRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      shaping_rate_variable: {
        value: cdktf.stringToHclTerraform(this._shapingRateVariable),
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
      static_arps: {
        value: cdktf.listMapperHcl(ciscoVpnInterfaceFeatureTemplateStaticArpsToHclTerraform, false)(this._staticArps.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CiscoVpnInterfaceFeatureTemplateStaticArpsList",
      },
      static_nat66_entries: {
        value: cdktf.listMapperHcl(ciscoVpnInterfaceFeatureTemplateStaticNat66EntriesToHclTerraform, false)(this._staticNat66Entries.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CiscoVpnInterfaceFeatureTemplateStaticNat66EntriesList",
      },
      static_nat_entries: {
        value: cdktf.listMapperHcl(ciscoVpnInterfaceFeatureTemplateStaticNatEntriesToHclTerraform, false)(this._staticNatEntries.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CiscoVpnInterfaceFeatureTemplateStaticNatEntriesList",
      },
      static_port_forward_entries: {
        value: cdktf.listMapperHcl(ciscoVpnInterfaceFeatureTemplateStaticPortForwardEntriesToHclTerraform, false)(this._staticPortForwardEntries.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CiscoVpnInterfaceFeatureTemplateStaticPortForwardEntriesList",
      },
      static_sgt: {
        value: cdktf.numberToHclTerraform(this._staticSgt),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      static_sgt_trusted: {
        value: cdktf.booleanToHclTerraform(this._staticSgtTrusted),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      static_sgt_variable: {
        value: cdktf.stringToHclTerraform(this._staticSgtVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tcp_mss_adjust: {
        value: cdktf.numberToHclTerraform(this._tcpMssAdjust),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tcp_mss_adjust_variable: {
        value: cdktf.stringToHclTerraform(this._tcpMssAdjustVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tcp_timeout: {
        value: cdktf.numberToHclTerraform(this._tcpTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tcp_timeout_variable: {
        value: cdktf.stringToHclTerraform(this._tcpTimeoutVariable),
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
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tracker),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      tracker_variable: {
        value: cdktf.stringToHclTerraform(this._trackerVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_bandwidth: {
        value: cdktf.numberToHclTerraform(this._tunnelBandwidth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tunnel_bandwidth_variable: {
        value: cdktf.stringToHclTerraform(this._tunnelBandwidthVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      tunnel_interface_control_connections: {
        value: cdktf.booleanToHclTerraform(this._tunnelInterfaceControlConnections),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tunnel_interface_control_connections_variable: {
        value: cdktf.stringToHclTerraform(this._tunnelInterfaceControlConnectionsVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_interface_encapsulations: {
        value: cdktf.listMapperHcl(ciscoVpnInterfaceFeatureTemplateTunnelInterfaceEncapsulationsToHclTerraform, false)(this._tunnelInterfaceEncapsulations.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CiscoVpnInterfaceFeatureTemplateTunnelInterfaceEncapsulationsList",
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
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._tunnelInterfaceGroups),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
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
      tunnel_interface_propagate_sgt: {
        value: cdktf.booleanToHclTerraform(this._tunnelInterfacePropagateSgt),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tunnel_interface_propagate_sgt_variable: {
        value: cdktf.stringToHclTerraform(this._tunnelInterfacePropagateSgtVariable),
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
      udp_timeout: {
        value: cdktf.numberToHclTerraform(this._udpTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      udp_timeout_variable: {
        value: cdktf.stringToHclTerraform(this._udpTimeoutVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
