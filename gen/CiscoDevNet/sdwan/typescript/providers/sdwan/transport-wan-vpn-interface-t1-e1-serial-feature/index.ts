// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_t1_e1_serial_feature
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TransportWanVpnInterfaceT1E1SerialFeatureConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_t1_e1_serial_feature#acl_ipv4_egress_feature_id TransportWanVpnInterfaceT1E1SerialFeature#acl_ipv4_egress_feature_id}
  */
  readonly aclIpv4EgressFeatureId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_t1_e1_serial_feature#acl_ipv4_ingress_feature_id TransportWanVpnInterfaceT1E1SerialFeature#acl_ipv4_ingress_feature_id}
  */
  readonly aclIpv4IngressFeatureId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_t1_e1_serial_feature#acl_ipv6_egress_feature_id TransportWanVpnInterfaceT1E1SerialFeature#acl_ipv6_egress_feature_id}
  */
  readonly aclIpv6EgressFeatureId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_t1_e1_serial_feature#acl_ipv6_ingress_feature_id TransportWanVpnInterfaceT1E1SerialFeature#acl_ipv6_ingress_feature_id}
  */
  readonly aclIpv6IngressFeatureId?: string;
  /**
  * Interface bandwidth capacity, in kbps
  *   - Range: `1`-`200000000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_t1_e1_serial_feature#bandwidth TransportWanVpnInterfaceT1E1SerialFeature#bandwidth}
  */
  readonly bandwidth?: number;
  /**
  * Interface downstream bandwidth capacity, in kbps
  *   - Range: `1`-`2147483647`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_t1_e1_serial_feature#bandwidth_downstream TransportWanVpnInterfaceT1E1SerialFeature#bandwidth_downstream}
  */
  readonly bandwidthDownstream?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_t1_e1_serial_feature#bandwidth_downstream_variable TransportWanVpnInterfaceT1E1SerialFeature#bandwidth_downstream_variable}
  */
  readonly bandwidthDownstreamVariable?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_t1_e1_serial_feature#bandwidth_variable TransportWanVpnInterfaceT1E1SerialFeature#bandwidth_variable}
  */
  readonly bandwidthVariable?: string;
  /**
  * Set preference for interface Clock speed
  *   - Choices: `1200`, `2400`, `4800`, `9600`, `14400`, `19200`, `28800`, `32000`, `38400`, `48000`, `56000`, `57600`, `64000`, `72000`, `115200`, `125000`, `148000`, `192000`, `250000`, `256000`, `384000`, `500000`, `512000`, `768000`, `800000`, `1000000`, `2000000`, `4000000`, `5300000`, `8000000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_t1_e1_serial_feature#clock_rate TransportWanVpnInterfaceT1E1SerialFeature#clock_rate}
  */
  readonly clockRate?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_t1_e1_serial_feature#clock_rate_variable TransportWanVpnInterfaceT1E1SerialFeature#clock_rate_variable}
  */
  readonly clockRateVariable?: string;
  /**
  * The description of the Feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_t1_e1_serial_feature#description TransportWanVpnInterfaceT1E1SerialFeature#description}
  */
  readonly description?: string;
  /**
  * Configure Encapsulation for interface
  *   - Choices: `hdlc`, `ppp`, `frame-relay`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_t1_e1_serial_feature#encapsulation TransportWanVpnInterfaceT1E1SerialFeature#encapsulation}
  */
  readonly encapsulation?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_t1_e1_serial_feature#encapsulation_variable TransportWanVpnInterfaceT1E1SerialFeature#encapsulation_variable}
  */
  readonly encapsulationVariable?: string;
  /**
  * Feature Profile ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_t1_e1_serial_feature#feature_profile_id TransportWanVpnInterfaceT1E1SerialFeature#feature_profile_id}
  */
  readonly featureProfileId: string;
  /**
  * Serial Interface Name - slot/subslot/port:channel-group for T1/E1, slot/subslot/port for NIM-1T
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_t1_e1_serial_feature#interface_name TransportWanVpnInterfaceT1E1SerialFeature#interface_name}
  */
  readonly interfaceName?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_t1_e1_serial_feature#interface_name_variable TransportWanVpnInterfaceT1E1SerialFeature#interface_name_variable}
  */
  readonly interfaceNameVariable?: string;
  /**
  * Set ip mtu
  *   - Range: `576`-`9216`
  *   - Default value: `1500`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_t1_e1_serial_feature#ip_mtu TransportWanVpnInterfaceT1E1SerialFeature#ip_mtu}
  */
  readonly ipMtu?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_t1_e1_serial_feature#ip_mtu_variable TransportWanVpnInterfaceT1E1SerialFeature#ip_mtu_variable}
  */
  readonly ipMtuVariable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_t1_e1_serial_feature#ipv4_address TransportWanVpnInterfaceT1E1SerialFeature#ipv4_address}
  */
  readonly ipv4Address?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_t1_e1_serial_feature#ipv4_address_variable TransportWanVpnInterfaceT1E1SerialFeature#ipv4_address_variable}
  */
  readonly ipv4AddressVariable?: string;
  /**
  * 
  *   - Choices: `255.255.255.255`, `255.255.255.254`, `255.255.255.252`, `255.255.255.248`, `255.255.255.240`, `255.255.255.224`, `255.255.255.192`, `255.255.255.128`, `255.255.255.0`, `255.255.254.0`, `255.255.252.0`, `255.255.248.0`, `255.255.240.0`, `255.255.224.0`, `255.255.192.0`, `255.255.128.0`, `255.255.0.0`, `255.254.0.0`, `255.252.0.0`, `255.240.0.0`, `255.224.0.0`, `255.192.0.0`, `255.128.0.0`, `255.0.0.0`, `254.0.0.0`, `252.0.0.0`, `248.0.0.0`, `240.0.0.0`, `224.0.0.0`, `192.0.0.0`, `128.0.0.0`, `0.0.0.0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_t1_e1_serial_feature#ipv4_subnet_mask TransportWanVpnInterfaceT1E1SerialFeature#ipv4_subnet_mask}
  */
  readonly ipv4SubnetMask?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_t1_e1_serial_feature#ipv4_subnet_mask_variable TransportWanVpnInterfaceT1E1SerialFeature#ipv4_subnet_mask_variable}
  */
  readonly ipv4SubnetMaskVariable?: string;
  /**
  * Assign IPv6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_t1_e1_serial_feature#ipv6_address TransportWanVpnInterfaceT1E1SerialFeature#ipv6_address}
  */
  readonly ipv6Address?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_t1_e1_serial_feature#ipv6_address_variable TransportWanVpnInterfaceT1E1SerialFeature#ipv6_address_variable}
  */
  readonly ipv6AddressVariable?: string;
  /**
  * Interface MTU <68...2000>, in bytes
  *   - Range: `576`-`9216`
  *   - Default value: `1500`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_t1_e1_serial_feature#mtu TransportWanVpnInterfaceT1E1SerialFeature#mtu}
  */
  readonly mtu?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_t1_e1_serial_feature#mtu_variable TransportWanVpnInterfaceT1E1SerialFeature#mtu_variable}
  */
  readonly mtuVariable?: string;
  /**
  * The name of the Feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_t1_e1_serial_feature#name TransportWanVpnInterfaceT1E1SerialFeature#name}
  */
  readonly name: string;
  /**
  * Per-tunnel Qos
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_t1_e1_serial_feature#per_tunnel_qos TransportWanVpnInterfaceT1E1SerialFeature#per_tunnel_qos}
  */
  readonly perTunnelQos?: boolean | cdktf.IResolvable;
  /**
  * Per-tunnel QoS Aggregator
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_t1_e1_serial_feature#per_tunnel_qos_aggregator TransportWanVpnInterfaceT1E1SerialFeature#per_tunnel_qos_aggregator}
  */
  readonly perTunnelQosAggregator?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_t1_e1_serial_feature#per_tunnel_qos_aggregator_variable TransportWanVpnInterfaceT1E1SerialFeature#per_tunnel_qos_aggregator_variable}
  */
  readonly perTunnelQosAggregatorVariable?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_t1_e1_serial_feature#per_tunnel_qos_variable TransportWanVpnInterfaceT1E1SerialFeature#per_tunnel_qos_variable}
  */
  readonly perTunnelQosVariable?: string;
  /**
  * 1ge  interfaces: [0..1000000]kbps; 10ge interfaces: [0..10000000]kbps
  *   - Range: `8`-`100000000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_t1_e1_serial_feature#qos_shaping_rate TransportWanVpnInterfaceT1E1SerialFeature#qos_shaping_rate}
  */
  readonly qosShapingRate?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_t1_e1_serial_feature#qos_shaping_rate_variable TransportWanVpnInterfaceT1E1SerialFeature#qos_shaping_rate_variable}
  */
  readonly qosShapingRateVariable?: string;
  /**
  * Administrative state
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_t1_e1_serial_feature#shutdown TransportWanVpnInterfaceT1E1SerialFeature#shutdown}
  */
  readonly shutdown?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_t1_e1_serial_feature#shutdown_variable TransportWanVpnInterfaceT1E1SerialFeature#shutdown_variable}
  */
  readonly shutdownVariable?: string;
  /**
  * TCP MSS on SYN packets, in bytes
  *   - Range: `500`-`1460`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_t1_e1_serial_feature#tcp_mss TransportWanVpnInterfaceT1E1SerialFeature#tcp_mss}
  */
  readonly tcpMss?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_t1_e1_serial_feature#tcp_mss_variable TransportWanVpnInterfaceT1E1SerialFeature#tcp_mss_variable}
  */
  readonly tcpMssVariable?: string;
  /**
  * Extends a local TLOC to a remote node only for vpn 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_t1_e1_serial_feature#tloc_extension TransportWanVpnInterfaceT1E1SerialFeature#tloc_extension}
  */
  readonly tlocExtension?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_t1_e1_serial_feature#tloc_extension_variable TransportWanVpnInterfaceT1E1SerialFeature#tloc_extension_variable}
  */
  readonly tlocExtensionVariable?: string;
  /**
  * Transport WAN VPN Feature ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_t1_e1_serial_feature#transport_wan_vpn_feature_id TransportWanVpnInterfaceT1E1SerialFeature#transport_wan_vpn_feature_id}
  */
  readonly transportWanVpnFeatureId: string;
  /**
  * Tunnel Interface
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_t1_e1_serial_feature#tunnel_interface TransportWanVpnInterfaceT1E1SerialFeature#tunnel_interface}
  */
  readonly tunnelInterface?: boolean | cdktf.IResolvable;
  /**
  * Allow all traffic. Overrides all other allow-service options if allow-service all is set
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_t1_e1_serial_feature#tunnel_interface_allow_all TransportWanVpnInterfaceT1E1SerialFeature#tunnel_interface_allow_all}
  */
  readonly tunnelInterfaceAllowAll?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_t1_e1_serial_feature#tunnel_interface_allow_all_variable TransportWanVpnInterfaceT1E1SerialFeature#tunnel_interface_allow_all_variable}
  */
  readonly tunnelInterfaceAllowAllVariable?: string;
  /**
  * Allow/Deny BFD
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_t1_e1_serial_feature#tunnel_interface_allow_bfd TransportWanVpnInterfaceT1E1SerialFeature#tunnel_interface_allow_bfd}
  */
  readonly tunnelInterfaceAllowBfd?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_t1_e1_serial_feature#tunnel_interface_allow_bfd_variable TransportWanVpnInterfaceT1E1SerialFeature#tunnel_interface_allow_bfd_variable}
  */
  readonly tunnelInterfaceAllowBfdVariable?: string;
  /**
  * Allow/deny BGP
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_t1_e1_serial_feature#tunnel_interface_allow_bgp TransportWanVpnInterfaceT1E1SerialFeature#tunnel_interface_allow_bgp}
  */
  readonly tunnelInterfaceAllowBgp?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_t1_e1_serial_feature#tunnel_interface_allow_bgp_variable TransportWanVpnInterfaceT1E1SerialFeature#tunnel_interface_allow_bgp_variable}
  */
  readonly tunnelInterfaceAllowBgpVariable?: string;
  /**
  * Allow/Deny DHCP
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_t1_e1_serial_feature#tunnel_interface_allow_dhcp TransportWanVpnInterfaceT1E1SerialFeature#tunnel_interface_allow_dhcp}
  */
  readonly tunnelInterfaceAllowDhcp?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_t1_e1_serial_feature#tunnel_interface_allow_dhcp_variable TransportWanVpnInterfaceT1E1SerialFeature#tunnel_interface_allow_dhcp_variable}
  */
  readonly tunnelInterfaceAllowDhcpVariable?: string;
  /**
  * Allow/Deny DNS
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_t1_e1_serial_feature#tunnel_interface_allow_dns TransportWanVpnInterfaceT1E1SerialFeature#tunnel_interface_allow_dns}
  */
  readonly tunnelInterfaceAllowDns?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_t1_e1_serial_feature#tunnel_interface_allow_dns_variable TransportWanVpnInterfaceT1E1SerialFeature#tunnel_interface_allow_dns_variable}
  */
  readonly tunnelInterfaceAllowDnsVariable?: string;
  /**
  * Allow/Deny Https
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_t1_e1_serial_feature#tunnel_interface_allow_https TransportWanVpnInterfaceT1E1SerialFeature#tunnel_interface_allow_https}
  */
  readonly tunnelInterfaceAllowHttps?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_t1_e1_serial_feature#tunnel_interface_allow_https_variable TransportWanVpnInterfaceT1E1SerialFeature#tunnel_interface_allow_https_variable}
  */
  readonly tunnelInterfaceAllowHttpsVariable?: string;
  /**
  * Allow/Deny ICMP
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_t1_e1_serial_feature#tunnel_interface_allow_icmp TransportWanVpnInterfaceT1E1SerialFeature#tunnel_interface_allow_icmp}
  */
  readonly tunnelInterfaceAllowIcmp?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_t1_e1_serial_feature#tunnel_interface_allow_icmp_variable TransportWanVpnInterfaceT1E1SerialFeature#tunnel_interface_allow_icmp_variable}
  */
  readonly tunnelInterfaceAllowIcmpVariable?: string;
  /**
  * Allow/Deny NETCONF
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_t1_e1_serial_feature#tunnel_interface_allow_netconf TransportWanVpnInterfaceT1E1SerialFeature#tunnel_interface_allow_netconf}
  */
  readonly tunnelInterfaceAllowNetconf?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_t1_e1_serial_feature#tunnel_interface_allow_netconf_variable TransportWanVpnInterfaceT1E1SerialFeature#tunnel_interface_allow_netconf_variable}
  */
  readonly tunnelInterfaceAllowNetconfVariable?: string;
  /**
  * Allow/Deny NTP
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_t1_e1_serial_feature#tunnel_interface_allow_ntp TransportWanVpnInterfaceT1E1SerialFeature#tunnel_interface_allow_ntp}
  */
  readonly tunnelInterfaceAllowNtp?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_t1_e1_serial_feature#tunnel_interface_allow_ntp_variable TransportWanVpnInterfaceT1E1SerialFeature#tunnel_interface_allow_ntp_variable}
  */
  readonly tunnelInterfaceAllowNtpVariable?: string;
  /**
  * Allow/Deny OSPF
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_t1_e1_serial_feature#tunnel_interface_allow_ospf TransportWanVpnInterfaceT1E1SerialFeature#tunnel_interface_allow_ospf}
  */
  readonly tunnelInterfaceAllowOspf?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_t1_e1_serial_feature#tunnel_interface_allow_ospf_variable TransportWanVpnInterfaceT1E1SerialFeature#tunnel_interface_allow_ospf_variable}
  */
  readonly tunnelInterfaceAllowOspfVariable?: string;
  /**
  * Allow/Deny SNMP
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_t1_e1_serial_feature#tunnel_interface_allow_snmp TransportWanVpnInterfaceT1E1SerialFeature#tunnel_interface_allow_snmp}
  */
  readonly tunnelInterfaceAllowSnmp?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_t1_e1_serial_feature#tunnel_interface_allow_snmp_variable TransportWanVpnInterfaceT1E1SerialFeature#tunnel_interface_allow_snmp_variable}
  */
  readonly tunnelInterfaceAllowSnmpVariable?: string;
  /**
  * Allow/Deny SSH
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_t1_e1_serial_feature#tunnel_interface_allow_ssh TransportWanVpnInterfaceT1E1SerialFeature#tunnel_interface_allow_ssh}
  */
  readonly tunnelInterfaceAllowSsh?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_t1_e1_serial_feature#tunnel_interface_allow_ssh_variable TransportWanVpnInterfaceT1E1SerialFeature#tunnel_interface_allow_ssh_variable}
  */
  readonly tunnelInterfaceAllowSshVariable?: string;
  /**
  * Allow/Deny STUN
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_t1_e1_serial_feature#tunnel_interface_allow_stun TransportWanVpnInterfaceT1E1SerialFeature#tunnel_interface_allow_stun}
  */
  readonly tunnelInterfaceAllowStun?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_t1_e1_serial_feature#tunnel_interface_allow_stun_variable TransportWanVpnInterfaceT1E1SerialFeature#tunnel_interface_allow_stun_variable}
  */
  readonly tunnelInterfaceAllowStunVariable?: string;
  /**
  * Bind loopback tunnel interface to a physical interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_t1_e1_serial_feature#tunnel_interface_bind_loopback_tunnel TransportWanVpnInterfaceT1E1SerialFeature#tunnel_interface_bind_loopback_tunnel}
  */
  readonly tunnelInterfaceBindLoopbackTunnel?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_t1_e1_serial_feature#tunnel_interface_bind_loopback_tunnel_variable TransportWanVpnInterfaceT1E1SerialFeature#tunnel_interface_bind_loopback_tunnel_variable}
  */
  readonly tunnelInterfaceBindLoopbackTunnelVariable?: string;
  /**
  * Set TLOC as border TLOC
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_t1_e1_serial_feature#tunnel_interface_border TransportWanVpnInterfaceT1E1SerialFeature#tunnel_interface_border}
  */
  readonly tunnelInterfaceBorder?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_t1_e1_serial_feature#tunnel_interface_border_variable TransportWanVpnInterfaceT1E1SerialFeature#tunnel_interface_border_variable}
  */
  readonly tunnelInterfaceBorderVariable?: string;
  /**
  * Set carrier for TLOC
  *   - Choices: `default`, `carrier1`, `carrier2`, `carrier3`, `carrier4`, `carrier5`, `carrier6`, `carrier7`, `carrier8`
  *   - Default value: `default`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_t1_e1_serial_feature#tunnel_interface_carrier TransportWanVpnInterfaceT1E1SerialFeature#tunnel_interface_carrier}
  */
  readonly tunnelInterfaceCarrier?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_t1_e1_serial_feature#tunnel_interface_carrier_variable TransportWanVpnInterfaceT1E1SerialFeature#tunnel_interface_carrier_variable}
  */
  readonly tunnelInterfaceCarrierVariable?: string;
  /**
  * Enable clear dont fragment (Currently Only SDWAN Tunnel Interface)
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_t1_e1_serial_feature#tunnel_interface_clear_dont_fragment TransportWanVpnInterfaceT1E1SerialFeature#tunnel_interface_clear_dont_fragment}
  */
  readonly tunnelInterfaceClearDontFragment?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_t1_e1_serial_feature#tunnel_interface_clear_dont_fragment_variable TransportWanVpnInterfaceT1E1SerialFeature#tunnel_interface_clear_dont_fragment_variable}
  */
  readonly tunnelInterfaceClearDontFragmentVariable?: string;
  /**
  * Accept and respond to network-prefix-directed broadcasts)
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_t1_e1_serial_feature#tunnel_interface_clear_network_broadcast TransportWanVpnInterfaceT1E1SerialFeature#tunnel_interface_clear_network_broadcast}
  */
  readonly tunnelInterfaceClearNetworkBroadcast?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_t1_e1_serial_feature#tunnel_interface_clear_network_broadcast_variable TransportWanVpnInterfaceT1E1SerialFeature#tunnel_interface_clear_network_broadcast_variable}
  */
  readonly tunnelInterfaceClearNetworkBroadcastVariable?: string;
  /**
  * Set color for TLOC
  *   - Choices: `default`, `mpls`, `metro-ethernet`, `biz-internet`, `public-internet`, `lte`, `3g`, `red`, `green`, `blue`, `gold`, `silver`, `bronze`, `custom1`, `custom2`, `custom3`, `private1`, `private2`, `private3`, `private4`, `private5`, `private6`
  *   - Default value: `default`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_t1_e1_serial_feature#tunnel_interface_color TransportWanVpnInterfaceT1E1SerialFeature#tunnel_interface_color}
  */
  readonly tunnelInterfaceColor?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_t1_e1_serial_feature#tunnel_interface_color_variable TransportWanVpnInterfaceT1E1SerialFeature#tunnel_interface_color_variable}
  */
  readonly tunnelInterfaceColorVariable?: string;
  /**
  * Encapsulation for TLOC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_t1_e1_serial_feature#tunnel_interface_encapsulations TransportWanVpnInterfaceT1E1SerialFeature#tunnel_interface_encapsulations}
  */
  readonly tunnelInterfaceEncapsulations?: TransportWanVpnInterfaceT1E1SerialFeatureTunnelInterfaceEncapsulations[] | cdktf.IResolvable;
  /**
  * Exclude the following controller groups defined in this list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_t1_e1_serial_feature#tunnel_interface_exclude_controller_group_list TransportWanVpnInterfaceT1E1SerialFeature#tunnel_interface_exclude_controller_group_list}
  */
  readonly tunnelInterfaceExcludeControllerGroupList?: number[];
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_t1_e1_serial_feature#tunnel_interface_exclude_controller_group_list_variable TransportWanVpnInterfaceT1E1SerialFeature#tunnel_interface_exclude_controller_group_list_variable}
  */
  readonly tunnelInterfaceExcludeControllerGroupListVariable?: string;
  /**
  * List of groups
  *   - Range: `1`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_t1_e1_serial_feature#tunnel_interface_groups TransportWanVpnInterfaceT1E1SerialFeature#tunnel_interface_groups}
  */
  readonly tunnelInterfaceGroups?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_t1_e1_serial_feature#tunnel_interface_groups_variable TransportWanVpnInterfaceT1E1SerialFeature#tunnel_interface_groups_variable}
  */
  readonly tunnelInterfaceGroupsVariable?: string;
  /**
  * Set time period of control hello packets <100..600000> milli seconds
  *   - Range: `100`-`600000`
  *   - Default value: `1000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_t1_e1_serial_feature#tunnel_interface_hello_interval TransportWanVpnInterfaceT1E1SerialFeature#tunnel_interface_hello_interval}
  */
  readonly tunnelInterfaceHelloInterval?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_t1_e1_serial_feature#tunnel_interface_hello_interval_variable TransportWanVpnInterfaceT1E1SerialFeature#tunnel_interface_hello_interval_variable}
  */
  readonly tunnelInterfaceHelloIntervalVariable?: string;
  /**
  * Set tolerance of control hello packets <12..6000> seconds
  *   - Range: `12`-`6000`
  *   - Default value: `12`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_t1_e1_serial_feature#tunnel_interface_hello_tolerance TransportWanVpnInterfaceT1E1SerialFeature#tunnel_interface_hello_tolerance}
  */
  readonly tunnelInterfaceHelloTolerance?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_t1_e1_serial_feature#tunnel_interface_hello_tolerance_variable TransportWanVpnInterfaceT1E1SerialFeature#tunnel_interface_hello_tolerance_variable}
  */
  readonly tunnelInterfaceHelloToleranceVariable?: string;
  /**
  * Set TLOC as last resort
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_t1_e1_serial_feature#tunnel_interface_last_resort_circuit TransportWanVpnInterfaceT1E1SerialFeature#tunnel_interface_last_resort_circuit}
  */
  readonly tunnelInterfaceLastResortCircuit?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_t1_e1_serial_feature#tunnel_interface_last_resort_circuit_variable TransportWanVpnInterfaceT1E1SerialFeature#tunnel_interface_last_resort_circuit_variable}
  */
  readonly tunnelInterfaceLastResortCircuitVariable?: string;
  /**
  * Set the interface as a low-bandwidth circuit
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_t1_e1_serial_feature#tunnel_interface_low_bandwidth_link TransportWanVpnInterfaceT1E1SerialFeature#tunnel_interface_low_bandwidth_link}
  */
  readonly tunnelInterfaceLowBandwidthLink?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_t1_e1_serial_feature#tunnel_interface_low_bandwidth_link_variable TransportWanVpnInterfaceT1E1SerialFeature#tunnel_interface_low_bandwidth_link_variable}
  */
  readonly tunnelInterfaceLowBandwidthLinkVariable?: string;
  /**
  * Set the maximum number of control connections for this TLOC
  *   - Range: `0`-`100`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_t1_e1_serial_feature#tunnel_interface_max_control_connections TransportWanVpnInterfaceT1E1SerialFeature#tunnel_interface_max_control_connections}
  */
  readonly tunnelInterfaceMaxControlConnections?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_t1_e1_serial_feature#tunnel_interface_max_control_connections_variable TransportWanVpnInterfaceT1E1SerialFeature#tunnel_interface_max_control_connections_variable}
  */
  readonly tunnelInterfaceMaxControlConnectionsVariable?: string;
  /**
  * Set time period of nat refresh packets <1...60> seconds
  *   - Range: `1`-`60`
  *   - Default value: `5`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_t1_e1_serial_feature#tunnel_interface_nat_refresh_interval TransportWanVpnInterfaceT1E1SerialFeature#tunnel_interface_nat_refresh_interval}
  */
  readonly tunnelInterfaceNatRefreshInterval?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_t1_e1_serial_feature#tunnel_interface_nat_refresh_interval_variable TransportWanVpnInterfaceT1E1SerialFeature#tunnel_interface_nat_refresh_interval_variable}
  */
  readonly tunnelInterfaceNatRefreshIntervalVariable?: string;
  /**
  * Disallow port hopping on the tunnel interface
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_t1_e1_serial_feature#tunnel_interface_port_hop TransportWanVpnInterfaceT1E1SerialFeature#tunnel_interface_port_hop}
  */
  readonly tunnelInterfacePortHop?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_t1_e1_serial_feature#tunnel_interface_port_hop_variable TransportWanVpnInterfaceT1E1SerialFeature#tunnel_interface_port_hop_variable}
  */
  readonly tunnelInterfacePortHopVariable?: string;
  /**
  * Restrict this TLOC behavior
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_t1_e1_serial_feature#tunnel_interface_restrict TransportWanVpnInterfaceT1E1SerialFeature#tunnel_interface_restrict}
  */
  readonly tunnelInterfaceRestrict?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_t1_e1_serial_feature#tunnel_interface_restrict_variable TransportWanVpnInterfaceT1E1SerialFeature#tunnel_interface_restrict_variable}
  */
  readonly tunnelInterfaceRestrictVariable?: string;
  /**
  * Tunnel TCP MSS on SYN packets, in bytes
  *   - Range: `500`-`1460`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_t1_e1_serial_feature#tunnel_interface_tunnel_tcp_mss TransportWanVpnInterfaceT1E1SerialFeature#tunnel_interface_tunnel_tcp_mss}
  */
  readonly tunnelInterfaceTunnelTcpMss?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_t1_e1_serial_feature#tunnel_interface_tunnel_tcp_mss_variable TransportWanVpnInterfaceT1E1SerialFeature#tunnel_interface_tunnel_tcp_mss_variable}
  */
  readonly tunnelInterfaceTunnelTcpMssVariable?: string;
  /**
  * Put this wan interface in STUN mode only
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_t1_e1_serial_feature#tunnel_interface_vbond_as_stun_server TransportWanVpnInterfaceT1E1SerialFeature#tunnel_interface_vbond_as_stun_server}
  */
  readonly tunnelInterfaceVbondAsStunServer?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_t1_e1_serial_feature#tunnel_interface_vbond_as_stun_server_variable TransportWanVpnInterfaceT1E1SerialFeature#tunnel_interface_vbond_as_stun_server_variable}
  */
  readonly tunnelInterfaceVbondAsStunServerVariable?: string;
  /**
  * Set interface preference for control connection to vManage <0..8>
  *   - Range: `0`-`8`
  *   - Default value: `5`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_t1_e1_serial_feature#tunnel_interface_vmanage_connection_preference TransportWanVpnInterfaceT1E1SerialFeature#tunnel_interface_vmanage_connection_preference}
  */
  readonly tunnelInterfaceVmanageConnectionPreference?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_t1_e1_serial_feature#tunnel_interface_vmanage_connection_preference_variable TransportWanVpnInterfaceT1E1SerialFeature#tunnel_interface_vmanage_connection_preference_variable}
  */
  readonly tunnelInterfaceVmanageConnectionPreferenceVariable?: string;
  /**
  * Set tunnel QoS mode
  *   - Choices: `spoke`, `hub`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_t1_e1_serial_feature#tunnel_qos_mode TransportWanVpnInterfaceT1E1SerialFeature#tunnel_qos_mode}
  */
  readonly tunnelQosMode?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_t1_e1_serial_feature#tunnel_qos_mode_variable TransportWanVpnInterfaceT1E1SerialFeature#tunnel_qos_mode_variable}
  */
  readonly tunnelQosModeVariable?: string;
}
export interface TransportWanVpnInterfaceT1E1SerialFeatureTunnelInterfaceEncapsulations {
  /**
  * Encapsulation
  *   - Choices: `gre`, `ipsec`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_t1_e1_serial_feature#encapsulation TransportWanVpnInterfaceT1E1SerialFeature#encapsulation}
  */
  readonly encapsulation?: string;
  /**
  * Set preference for TLOC
  *   - Range: `0`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_t1_e1_serial_feature#preference TransportWanVpnInterfaceT1E1SerialFeature#preference}
  */
  readonly preference?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_t1_e1_serial_feature#preference_variable TransportWanVpnInterfaceT1E1SerialFeature#preference_variable}
  */
  readonly preferenceVariable?: string;
  /**
  * Set weight for TLOC
  *   - Range: `1`-`255`
  *   - Default value: `1`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_t1_e1_serial_feature#weight TransportWanVpnInterfaceT1E1SerialFeature#weight}
  */
  readonly weight?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_t1_e1_serial_feature#weight_variable TransportWanVpnInterfaceT1E1SerialFeature#weight_variable}
  */
  readonly weightVariable?: string;
}

export function transportWanVpnInterfaceT1E1SerialFeatureTunnelInterfaceEncapsulationsToTerraform(struct?: TransportWanVpnInterfaceT1E1SerialFeatureTunnelInterfaceEncapsulations | cdktf.IResolvable): any {
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


export function transportWanVpnInterfaceT1E1SerialFeatureTunnelInterfaceEncapsulationsToHclTerraform(struct?: TransportWanVpnInterfaceT1E1SerialFeatureTunnelInterfaceEncapsulations | cdktf.IResolvable): any {
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

export class TransportWanVpnInterfaceT1E1SerialFeatureTunnelInterfaceEncapsulationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TransportWanVpnInterfaceT1E1SerialFeatureTunnelInterfaceEncapsulations | cdktf.IResolvable | undefined {
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

  public set internalValue(value: TransportWanVpnInterfaceT1E1SerialFeatureTunnelInterfaceEncapsulations | cdktf.IResolvable | undefined) {
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

export class TransportWanVpnInterfaceT1E1SerialFeatureTunnelInterfaceEncapsulationsList extends cdktf.ComplexList {
  public internalValue? : TransportWanVpnInterfaceT1E1SerialFeatureTunnelInterfaceEncapsulations[] | cdktf.IResolvable

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
  public get(index: number): TransportWanVpnInterfaceT1E1SerialFeatureTunnelInterfaceEncapsulationsOutputReference {
    return new TransportWanVpnInterfaceT1E1SerialFeatureTunnelInterfaceEncapsulationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_t1_e1_serial_feature sdwan_transport_wan_vpn_interface_t1_e1_serial_feature}
*/
export class TransportWanVpnInterfaceT1E1SerialFeature extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_transport_wan_vpn_interface_t1_e1_serial_feature";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TransportWanVpnInterfaceT1E1SerialFeature resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TransportWanVpnInterfaceT1E1SerialFeature to import
  * @param importFromId The id of the existing TransportWanVpnInterfaceT1E1SerialFeature that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_t1_e1_serial_feature#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TransportWanVpnInterfaceT1E1SerialFeature to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_transport_wan_vpn_interface_t1_e1_serial_feature", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_wan_vpn_interface_t1_e1_serial_feature sdwan_transport_wan_vpn_interface_t1_e1_serial_feature} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TransportWanVpnInterfaceT1E1SerialFeatureConfig
  */
  public constructor(scope: Construct, id: string, config: TransportWanVpnInterfaceT1E1SerialFeatureConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_transport_wan_vpn_interface_t1_e1_serial_feature',
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
    this._aclIpv4EgressFeatureId = config.aclIpv4EgressFeatureId;
    this._aclIpv4IngressFeatureId = config.aclIpv4IngressFeatureId;
    this._aclIpv6EgressFeatureId = config.aclIpv6EgressFeatureId;
    this._aclIpv6IngressFeatureId = config.aclIpv6IngressFeatureId;
    this._bandwidth = config.bandwidth;
    this._bandwidthDownstream = config.bandwidthDownstream;
    this._bandwidthDownstreamVariable = config.bandwidthDownstreamVariable;
    this._bandwidthVariable = config.bandwidthVariable;
    this._clockRate = config.clockRate;
    this._clockRateVariable = config.clockRateVariable;
    this._description = config.description;
    this._encapsulation = config.encapsulation;
    this._encapsulationVariable = config.encapsulationVariable;
    this._featureProfileId = config.featureProfileId;
    this._interfaceName = config.interfaceName;
    this._interfaceNameVariable = config.interfaceNameVariable;
    this._ipMtu = config.ipMtu;
    this._ipMtuVariable = config.ipMtuVariable;
    this._ipv4Address = config.ipv4Address;
    this._ipv4AddressVariable = config.ipv4AddressVariable;
    this._ipv4SubnetMask = config.ipv4SubnetMask;
    this._ipv4SubnetMaskVariable = config.ipv4SubnetMaskVariable;
    this._ipv6Address = config.ipv6Address;
    this._ipv6AddressVariable = config.ipv6AddressVariable;
    this._mtu = config.mtu;
    this._mtuVariable = config.mtuVariable;
    this._name = config.name;
    this._perTunnelQos = config.perTunnelQos;
    this._perTunnelQosAggregator = config.perTunnelQosAggregator;
    this._perTunnelQosAggregatorVariable = config.perTunnelQosAggregatorVariable;
    this._perTunnelQosVariable = config.perTunnelQosVariable;
    this._qosShapingRate = config.qosShapingRate;
    this._qosShapingRateVariable = config.qosShapingRateVariable;
    this._shutdown = config.shutdown;
    this._shutdownVariable = config.shutdownVariable;
    this._tcpMss = config.tcpMss;
    this._tcpMssVariable = config.tcpMssVariable;
    this._tlocExtension = config.tlocExtension;
    this._tlocExtensionVariable = config.tlocExtensionVariable;
    this._transportWanVpnFeatureId = config.transportWanVpnFeatureId;
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
    this._tunnelInterfaceClearNetworkBroadcast = config.tunnelInterfaceClearNetworkBroadcast;
    this._tunnelInterfaceClearNetworkBroadcastVariable = config.tunnelInterfaceClearNetworkBroadcastVariable;
    this._tunnelInterfaceColor = config.tunnelInterfaceColor;
    this._tunnelInterfaceColorVariable = config.tunnelInterfaceColorVariable;
    this._tunnelInterfaceEncapsulations.internalValue = config.tunnelInterfaceEncapsulations;
    this._tunnelInterfaceExcludeControllerGroupList = config.tunnelInterfaceExcludeControllerGroupList;
    this._tunnelInterfaceExcludeControllerGroupListVariable = config.tunnelInterfaceExcludeControllerGroupListVariable;
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
    this._tunnelInterfacePortHop = config.tunnelInterfacePortHop;
    this._tunnelInterfacePortHopVariable = config.tunnelInterfacePortHopVariable;
    this._tunnelInterfaceRestrict = config.tunnelInterfaceRestrict;
    this._tunnelInterfaceRestrictVariable = config.tunnelInterfaceRestrictVariable;
    this._tunnelInterfaceTunnelTcpMss = config.tunnelInterfaceTunnelTcpMss;
    this._tunnelInterfaceTunnelTcpMssVariable = config.tunnelInterfaceTunnelTcpMssVariable;
    this._tunnelInterfaceVbondAsStunServer = config.tunnelInterfaceVbondAsStunServer;
    this._tunnelInterfaceVbondAsStunServerVariable = config.tunnelInterfaceVbondAsStunServerVariable;
    this._tunnelInterfaceVmanageConnectionPreference = config.tunnelInterfaceVmanageConnectionPreference;
    this._tunnelInterfaceVmanageConnectionPreferenceVariable = config.tunnelInterfaceVmanageConnectionPreferenceVariable;
    this._tunnelQosMode = config.tunnelQosMode;
    this._tunnelQosModeVariable = config.tunnelQosModeVariable;
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

  // bandwidth - computed: false, optional: true, required: false
  private _bandwidth?: number; 
  public get bandwidth() {
    return this.getNumberAttribute('bandwidth');
  }
  public set bandwidth(value: number) {
    this._bandwidth = value;
  }
  public resetBandwidth() {
    this._bandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthInput() {
    return this._bandwidth;
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

  // bandwidth_variable - computed: false, optional: true, required: false
  private _bandwidthVariable?: string; 
  public get bandwidthVariable() {
    return this.getStringAttribute('bandwidth_variable');
  }
  public set bandwidthVariable(value: string) {
    this._bandwidthVariable = value;
  }
  public resetBandwidthVariable() {
    this._bandwidthVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthVariableInput() {
    return this._bandwidthVariable;
  }

  // clock_rate - computed: false, optional: true, required: false
  private _clockRate?: string; 
  public get clockRate() {
    return this.getStringAttribute('clock_rate');
  }
  public set clockRate(value: string) {
    this._clockRate = value;
  }
  public resetClockRate() {
    this._clockRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clockRateInput() {
    return this._clockRate;
  }

  // clock_rate_variable - computed: false, optional: true, required: false
  private _clockRateVariable?: string; 
  public get clockRateVariable() {
    return this.getStringAttribute('clock_rate_variable');
  }
  public set clockRateVariable(value: string) {
    this._clockRateVariable = value;
  }
  public resetClockRateVariable() {
    this._clockRateVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clockRateVariableInput() {
    return this._clockRateVariable;
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

  // encapsulation_variable - computed: false, optional: true, required: false
  private _encapsulationVariable?: string; 
  public get encapsulationVariable() {
    return this.getStringAttribute('encapsulation_variable');
  }
  public set encapsulationVariable(value: string) {
    this._encapsulationVariable = value;
  }
  public resetEncapsulationVariable() {
    this._encapsulationVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encapsulationVariableInput() {
    return this._encapsulationVariable;
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

  // mtu - computed: false, optional: true, required: false
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

  // mtu_variable - computed: false, optional: true, required: false
  private _mtuVariable?: string; 
  public get mtuVariable() {
    return this.getStringAttribute('mtu_variable');
  }
  public set mtuVariable(value: string) {
    this._mtuVariable = value;
  }
  public resetMtuVariable() {
    this._mtuVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuVariableInput() {
    return this._mtuVariable;
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

  // per_tunnel_qos_aggregator - computed: false, optional: true, required: false
  private _perTunnelQosAggregator?: boolean | cdktf.IResolvable; 
  public get perTunnelQosAggregator() {
    return this.getBooleanAttribute('per_tunnel_qos_aggregator');
  }
  public set perTunnelQosAggregator(value: boolean | cdktf.IResolvable) {
    this._perTunnelQosAggregator = value;
  }
  public resetPerTunnelQosAggregator() {
    this._perTunnelQosAggregator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perTunnelQosAggregatorInput() {
    return this._perTunnelQosAggregator;
  }

  // per_tunnel_qos_aggregator_variable - computed: false, optional: true, required: false
  private _perTunnelQosAggregatorVariable?: string; 
  public get perTunnelQosAggregatorVariable() {
    return this.getStringAttribute('per_tunnel_qos_aggregator_variable');
  }
  public set perTunnelQosAggregatorVariable(value: string) {
    this._perTunnelQosAggregatorVariable = value;
  }
  public resetPerTunnelQosAggregatorVariable() {
    this._perTunnelQosAggregatorVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perTunnelQosAggregatorVariableInput() {
    return this._perTunnelQosAggregatorVariable;
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

  // tunnel_interface_clear_network_broadcast - computed: false, optional: true, required: false
  private _tunnelInterfaceClearNetworkBroadcast?: boolean | cdktf.IResolvable; 
  public get tunnelInterfaceClearNetworkBroadcast() {
    return this.getBooleanAttribute('tunnel_interface_clear_network_broadcast');
  }
  public set tunnelInterfaceClearNetworkBroadcast(value: boolean | cdktf.IResolvable) {
    this._tunnelInterfaceClearNetworkBroadcast = value;
  }
  public resetTunnelInterfaceClearNetworkBroadcast() {
    this._tunnelInterfaceClearNetworkBroadcast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelInterfaceClearNetworkBroadcastInput() {
    return this._tunnelInterfaceClearNetworkBroadcast;
  }

  // tunnel_interface_clear_network_broadcast_variable - computed: false, optional: true, required: false
  private _tunnelInterfaceClearNetworkBroadcastVariable?: string; 
  public get tunnelInterfaceClearNetworkBroadcastVariable() {
    return this.getStringAttribute('tunnel_interface_clear_network_broadcast_variable');
  }
  public set tunnelInterfaceClearNetworkBroadcastVariable(value: string) {
    this._tunnelInterfaceClearNetworkBroadcastVariable = value;
  }
  public resetTunnelInterfaceClearNetworkBroadcastVariable() {
    this._tunnelInterfaceClearNetworkBroadcastVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelInterfaceClearNetworkBroadcastVariableInput() {
    return this._tunnelInterfaceClearNetworkBroadcastVariable;
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

  // tunnel_interface_encapsulations - computed: false, optional: true, required: false
  private _tunnelInterfaceEncapsulations = new TransportWanVpnInterfaceT1E1SerialFeatureTunnelInterfaceEncapsulationsList(this, "tunnel_interface_encapsulations", false);
  public get tunnelInterfaceEncapsulations() {
    return this._tunnelInterfaceEncapsulations;
  }
  public putTunnelInterfaceEncapsulations(value: TransportWanVpnInterfaceT1E1SerialFeatureTunnelInterfaceEncapsulations[] | cdktf.IResolvable) {
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

  // tunnel_interface_restrict - computed: false, optional: true, required: false
  private _tunnelInterfaceRestrict?: boolean | cdktf.IResolvable; 
  public get tunnelInterfaceRestrict() {
    return this.getBooleanAttribute('tunnel_interface_restrict');
  }
  public set tunnelInterfaceRestrict(value: boolean | cdktf.IResolvable) {
    this._tunnelInterfaceRestrict = value;
  }
  public resetTunnelInterfaceRestrict() {
    this._tunnelInterfaceRestrict = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelInterfaceRestrictInput() {
    return this._tunnelInterfaceRestrict;
  }

  // tunnel_interface_restrict_variable - computed: false, optional: true, required: false
  private _tunnelInterfaceRestrictVariable?: string; 
  public get tunnelInterfaceRestrictVariable() {
    return this.getStringAttribute('tunnel_interface_restrict_variable');
  }
  public set tunnelInterfaceRestrictVariable(value: string) {
    this._tunnelInterfaceRestrictVariable = value;
  }
  public resetTunnelInterfaceRestrictVariable() {
    this._tunnelInterfaceRestrictVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelInterfaceRestrictVariableInput() {
    return this._tunnelInterfaceRestrictVariable;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      acl_ipv4_egress_feature_id: cdktf.stringToTerraform(this._aclIpv4EgressFeatureId),
      acl_ipv4_ingress_feature_id: cdktf.stringToTerraform(this._aclIpv4IngressFeatureId),
      acl_ipv6_egress_feature_id: cdktf.stringToTerraform(this._aclIpv6EgressFeatureId),
      acl_ipv6_ingress_feature_id: cdktf.stringToTerraform(this._aclIpv6IngressFeatureId),
      bandwidth: cdktf.numberToTerraform(this._bandwidth),
      bandwidth_downstream: cdktf.numberToTerraform(this._bandwidthDownstream),
      bandwidth_downstream_variable: cdktf.stringToTerraform(this._bandwidthDownstreamVariable),
      bandwidth_variable: cdktf.stringToTerraform(this._bandwidthVariable),
      clock_rate: cdktf.stringToTerraform(this._clockRate),
      clock_rate_variable: cdktf.stringToTerraform(this._clockRateVariable),
      description: cdktf.stringToTerraform(this._description),
      encapsulation: cdktf.stringToTerraform(this._encapsulation),
      encapsulation_variable: cdktf.stringToTerraform(this._encapsulationVariable),
      feature_profile_id: cdktf.stringToTerraform(this._featureProfileId),
      interface_name: cdktf.stringToTerraform(this._interfaceName),
      interface_name_variable: cdktf.stringToTerraform(this._interfaceNameVariable),
      ip_mtu: cdktf.numberToTerraform(this._ipMtu),
      ip_mtu_variable: cdktf.stringToTerraform(this._ipMtuVariable),
      ipv4_address: cdktf.stringToTerraform(this._ipv4Address),
      ipv4_address_variable: cdktf.stringToTerraform(this._ipv4AddressVariable),
      ipv4_subnet_mask: cdktf.stringToTerraform(this._ipv4SubnetMask),
      ipv4_subnet_mask_variable: cdktf.stringToTerraform(this._ipv4SubnetMaskVariable),
      ipv6_address: cdktf.stringToTerraform(this._ipv6Address),
      ipv6_address_variable: cdktf.stringToTerraform(this._ipv6AddressVariable),
      mtu: cdktf.numberToTerraform(this._mtu),
      mtu_variable: cdktf.stringToTerraform(this._mtuVariable),
      name: cdktf.stringToTerraform(this._name),
      per_tunnel_qos: cdktf.booleanToTerraform(this._perTunnelQos),
      per_tunnel_qos_aggregator: cdktf.booleanToTerraform(this._perTunnelQosAggregator),
      per_tunnel_qos_aggregator_variable: cdktf.stringToTerraform(this._perTunnelQosAggregatorVariable),
      per_tunnel_qos_variable: cdktf.stringToTerraform(this._perTunnelQosVariable),
      qos_shaping_rate: cdktf.numberToTerraform(this._qosShapingRate),
      qos_shaping_rate_variable: cdktf.stringToTerraform(this._qosShapingRateVariable),
      shutdown: cdktf.booleanToTerraform(this._shutdown),
      shutdown_variable: cdktf.stringToTerraform(this._shutdownVariable),
      tcp_mss: cdktf.numberToTerraform(this._tcpMss),
      tcp_mss_variable: cdktf.stringToTerraform(this._tcpMssVariable),
      tloc_extension: cdktf.stringToTerraform(this._tlocExtension),
      tloc_extension_variable: cdktf.stringToTerraform(this._tlocExtensionVariable),
      transport_wan_vpn_feature_id: cdktf.stringToTerraform(this._transportWanVpnFeatureId),
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
      tunnel_interface_clear_network_broadcast: cdktf.booleanToTerraform(this._tunnelInterfaceClearNetworkBroadcast),
      tunnel_interface_clear_network_broadcast_variable: cdktf.stringToTerraform(this._tunnelInterfaceClearNetworkBroadcastVariable),
      tunnel_interface_color: cdktf.stringToTerraform(this._tunnelInterfaceColor),
      tunnel_interface_color_variable: cdktf.stringToTerraform(this._tunnelInterfaceColorVariable),
      tunnel_interface_encapsulations: cdktf.listMapper(transportWanVpnInterfaceT1E1SerialFeatureTunnelInterfaceEncapsulationsToTerraform, false)(this._tunnelInterfaceEncapsulations.internalValue),
      tunnel_interface_exclude_controller_group_list: cdktf.listMapper(cdktf.numberToTerraform, false)(this._tunnelInterfaceExcludeControllerGroupList),
      tunnel_interface_exclude_controller_group_list_variable: cdktf.stringToTerraform(this._tunnelInterfaceExcludeControllerGroupListVariable),
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
      tunnel_interface_port_hop: cdktf.booleanToTerraform(this._tunnelInterfacePortHop),
      tunnel_interface_port_hop_variable: cdktf.stringToTerraform(this._tunnelInterfacePortHopVariable),
      tunnel_interface_restrict: cdktf.booleanToTerraform(this._tunnelInterfaceRestrict),
      tunnel_interface_restrict_variable: cdktf.stringToTerraform(this._tunnelInterfaceRestrictVariable),
      tunnel_interface_tunnel_tcp_mss: cdktf.numberToTerraform(this._tunnelInterfaceTunnelTcpMss),
      tunnel_interface_tunnel_tcp_mss_variable: cdktf.stringToTerraform(this._tunnelInterfaceTunnelTcpMssVariable),
      tunnel_interface_vbond_as_stun_server: cdktf.booleanToTerraform(this._tunnelInterfaceVbondAsStunServer),
      tunnel_interface_vbond_as_stun_server_variable: cdktf.stringToTerraform(this._tunnelInterfaceVbondAsStunServerVariable),
      tunnel_interface_vmanage_connection_preference: cdktf.numberToTerraform(this._tunnelInterfaceVmanageConnectionPreference),
      tunnel_interface_vmanage_connection_preference_variable: cdktf.stringToTerraform(this._tunnelInterfaceVmanageConnectionPreferenceVariable),
      tunnel_qos_mode: cdktf.stringToTerraform(this._tunnelQosMode),
      tunnel_qos_mode_variable: cdktf.stringToTerraform(this._tunnelQosModeVariable),
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
      bandwidth: {
        value: cdktf.numberToHclTerraform(this._bandwidth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      bandwidth_variable: {
        value: cdktf.stringToHclTerraform(this._bandwidthVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      clock_rate: {
        value: cdktf.stringToHclTerraform(this._clockRate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      clock_rate_variable: {
        value: cdktf.stringToHclTerraform(this._clockRateVariable),
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
      encapsulation: {
        value: cdktf.stringToHclTerraform(this._encapsulation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encapsulation_variable: {
        value: cdktf.stringToHclTerraform(this._encapsulationVariable),
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
      mtu: {
        value: cdktf.numberToHclTerraform(this._mtu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mtu_variable: {
        value: cdktf.stringToHclTerraform(this._mtuVariable),
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
      per_tunnel_qos: {
        value: cdktf.booleanToHclTerraform(this._perTunnelQos),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      per_tunnel_qos_aggregator: {
        value: cdktf.booleanToHclTerraform(this._perTunnelQosAggregator),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      per_tunnel_qos_aggregator_variable: {
        value: cdktf.stringToHclTerraform(this._perTunnelQosAggregatorVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      per_tunnel_qos_variable: {
        value: cdktf.stringToHclTerraform(this._perTunnelQosVariable),
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
      transport_wan_vpn_feature_id: {
        value: cdktf.stringToHclTerraform(this._transportWanVpnFeatureId),
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
      tunnel_interface_clear_network_broadcast: {
        value: cdktf.booleanToHclTerraform(this._tunnelInterfaceClearNetworkBroadcast),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tunnel_interface_clear_network_broadcast_variable: {
        value: cdktf.stringToHclTerraform(this._tunnelInterfaceClearNetworkBroadcastVariable),
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
      tunnel_interface_color_variable: {
        value: cdktf.stringToHclTerraform(this._tunnelInterfaceColorVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_interface_encapsulations: {
        value: cdktf.listMapperHcl(transportWanVpnInterfaceT1E1SerialFeatureTunnelInterfaceEncapsulationsToHclTerraform, false)(this._tunnelInterfaceEncapsulations.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TransportWanVpnInterfaceT1E1SerialFeatureTunnelInterfaceEncapsulationsList",
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
      tunnel_interface_restrict: {
        value: cdktf.booleanToHclTerraform(this._tunnelInterfaceRestrict),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tunnel_interface_restrict_variable: {
        value: cdktf.stringToHclTerraform(this._tunnelInterfaceRestrictVariable),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
