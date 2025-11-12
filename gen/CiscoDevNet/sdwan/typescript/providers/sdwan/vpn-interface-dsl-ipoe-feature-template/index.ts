// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpnInterfaceDslIpoeFeatureTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Apply ACL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#access_lists VpnInterfaceDslIpoeFeatureTemplate#access_lists}
  */
  readonly accessLists?: VpnInterfaceDslIpoeFeatureTemplateAccessLists[] | cdktf.IResolvable;
  /**
  * Interface downstream bandwidth capacity, in kbps
  *   - Range: `1`-`2147483647`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#bandwidth_downstream VpnInterfaceDslIpoeFeatureTemplate#bandwidth_downstream}
  */
  readonly bandwidthDownstream?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#bandwidth_downstream_variable VpnInterfaceDslIpoeFeatureTemplate#bandwidth_downstream_variable}
  */
  readonly bandwidthDownstreamVariable?: string;
  /**
  * Interface upstream bandwidth capacity, in kbps
  *   - Range: `1`-`2147483647`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#bandwidth_upstream VpnInterfaceDslIpoeFeatureTemplate#bandwidth_upstream}
  */
  readonly bandwidthUpstream?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#bandwidth_upstream_variable VpnInterfaceDslIpoeFeatureTemplate#bandwidth_upstream_variable}
  */
  readonly bandwidthUpstreamVariable?: string;
  /**
  * CHAP Hostname
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#chap_hostname VpnInterfaceDslIpoeFeatureTemplate#chap_hostname}
  */
  readonly chapHostname?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#chap_hostname_variable VpnInterfaceDslIpoeFeatureTemplate#chap_hostname_variable}
  */
  readonly chapHostnameVariable?: string;
  /**
  * Specify ppp chap authentication Password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#chap_ppp_auth_password VpnInterfaceDslIpoeFeatureTemplate#chap_ppp_auth_password}
  */
  readonly chapPppAuthPassword?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#chap_ppp_auth_password_variable VpnInterfaceDslIpoeFeatureTemplate#chap_ppp_auth_password_variable}
  */
  readonly chapPppAuthPasswordVariable?: string;
  /**
  * The description of the feature template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#description VpnInterfaceDslIpoeFeatureTemplate#description}
  */
  readonly description: string;
  /**
  * List of supported device types
  *   - Choices: `vedge-C8000V`, `vedge-C8300-1N1S-4T2X`, `vedge-C8300-1N1S-6T`, `vedge-C8300-2N2S-6T`, `vedge-C8300-2N2S-4T2X`, `vedge-C8500-12X4QC`, `vedge-C8500-12X`, `vedge-C8500-20X6C`, `vedge-C8500L-8S4X`, `vedge-C8200-1N-4T`, `vedge-C8200L-1N-4T`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#device_types VpnInterfaceDslIpoeFeatureTemplate#device_types}
  */
  readonly deviceTypes: string[];
  /**
  * Dialer IP Negotiated
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#dialer_address_negotiated VpnInterfaceDslIpoeFeatureTemplate#dialer_address_negotiated}
  */
  readonly dialerAddressNegotiated?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#dialer_address_negotiated_variable VpnInterfaceDslIpoeFeatureTemplate#dialer_address_negotiated_variable}
  */
  readonly dialerAddressNegotiatedVariable?: string;
  /**
  * Dialer pool number
  *   - Range: `1`-`255`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#dialer_pool_number VpnInterfaceDslIpoeFeatureTemplate#dialer_pool_number}
  */
  readonly dialerPoolNumber?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#dialer_pool_number_variable VpnInterfaceDslIpoeFeatureTemplate#dialer_pool_number_variable}
  */
  readonly dialerPoolNumberVariable?: string;
  /**
  * Encapsulation VLAN id
  *   - Range: `1`-`4094`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#encap VpnInterfaceDslIpoeFeatureTemplate#encap}
  */
  readonly encap?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#encap_variable VpnInterfaceDslIpoeFeatureTemplate#encap_variable}
  */
  readonly encapVariable?: string;
  /**
  * Interface description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#ethernet_description VpnInterfaceDslIpoeFeatureTemplate#ethernet_description}
  */
  readonly ethernetDescription?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#ethernet_description_variable VpnInterfaceDslIpoeFeatureTemplate#ethernet_description_variable}
  */
  readonly ethernetDescriptionVariable?: string;
  /**
  * Set administrative distance for DHCP default route
  *   - Range: `1`-`65536`
  *   - Default value: `1`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#ethernet_dhcp_distance VpnInterfaceDslIpoeFeatureTemplate#ethernet_dhcp_distance}
  */
  readonly ethernetDhcpDistance?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#ethernet_dhcp_distance_variable VpnInterfaceDslIpoeFeatureTemplate#ethernet_dhcp_distance_variable}
  */
  readonly ethernetDhcpDistanceVariable?: string;
  /**
  * List of DHCP IPv4 helper addresses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#ethernet_dhcp_helper VpnInterfaceDslIpoeFeatureTemplate#ethernet_dhcp_helper}
  */
  readonly ethernetDhcpHelper?: string[];
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#ethernet_dhcp_helper_variable VpnInterfaceDslIpoeFeatureTemplate#ethernet_dhcp_helper_variable}
  */
  readonly ethernetDhcpHelperVariable?: string;
  /**
  * Enable DHCP
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#ethernet_enable_dhcp VpnInterfaceDslIpoeFeatureTemplate#ethernet_enable_dhcp}
  */
  readonly ethernetEnableDhcp?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#ethernet_enable_dhcp_variable VpnInterfaceDslIpoeFeatureTemplate#ethernet_enable_dhcp_variable}
  */
  readonly ethernetEnableDhcpVariable?: string;
  /**
  * Ethernet Interface/Sub Interface Name including sub interface number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#ethernet_interface_name VpnInterfaceDslIpoeFeatureTemplate#ethernet_interface_name}
  */
  readonly ethernetInterfaceName?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#ethernet_interface_name_variable VpnInterfaceDslIpoeFeatureTemplate#ethernet_interface_name_variable}
  */
  readonly ethernetInterfaceNameVariable?: string;
  /**
  * Assign IPv4 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#ethernet_ipv4_address VpnInterfaceDslIpoeFeatureTemplate#ethernet_ipv4_address}
  */
  readonly ethernetIpv4Address?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#ethernet_ipv4_address_variable VpnInterfaceDslIpoeFeatureTemplate#ethernet_ipv4_address_variable}
  */
  readonly ethernetIpv4AddressVariable?: string;
  /**
  * internal controller-type
  *   - Choices: `ipoe`
  *   - Default value: `ipoe`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#internal_controller_type VpnInterfaceDslIpoeFeatureTemplate#internal_controller_type}
  */
  readonly internalControllerType?: string;
  /**
  * IP Directed-Broadcast
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#ip_directed_broadcast VpnInterfaceDslIpoeFeatureTemplate#ip_directed_broadcast}
  */
  readonly ipDirectedBroadcast?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#ip_directed_broadcast_variable VpnInterfaceDslIpoeFeatureTemplate#ip_directed_broadcast_variable}
  */
  readonly ipDirectedBroadcastVariable?: string;
  /**
  * Interface MTU <576..2000>, in bytes
  *   - Range: `576`-`2000`
  *   - Default value: `1500`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#ip_mtu VpnInterfaceDslIpoeFeatureTemplate#ip_mtu}
  */
  readonly ipMtu?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#ip_mtu_variable VpnInterfaceDslIpoeFeatureTemplate#ip_mtu_variable}
  */
  readonly ipMtuVariable?: string;
  /**
  * The name of the feature template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#name VpnInterfaceDslIpoeFeatureTemplate#name}
  */
  readonly name: string;
  /**
  * Network Address Translation on this interface
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#nat VpnInterfaceDslIpoeFeatureTemplate#nat}
  */
  readonly nat?: boolean | cdktf.IResolvable;
  /**
  * Block inbound ICMP error messages
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#nat_block_icmp_error VpnInterfaceDslIpoeFeatureTemplate#nat_block_icmp_error}
  */
  readonly natBlockIcmpError?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#nat_block_icmp_error_variable VpnInterfaceDslIpoeFeatureTemplate#nat_block_icmp_error_variable}
  */
  readonly natBlockIcmpErrorVariable?: string;
  /**
  * Set port-forwarding rules for NAT on this interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#nat_port_forwards VpnInterfaceDslIpoeFeatureTemplate#nat_port_forwards}
  */
  readonly natPortForwards?: VpnInterfaceDslIpoeFeatureTemplateNatPortForwards[] | cdktf.IResolvable;
  /**
  * Set NAT refresh mode
  *   - Choices: `outbound`, `bi-directional`
  *   - Default value: `outbound`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#nat_refresh_mode VpnInterfaceDslIpoeFeatureTemplate#nat_refresh_mode}
  */
  readonly natRefreshMode?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#nat_refresh_mode_variable VpnInterfaceDslIpoeFeatureTemplate#nat_refresh_mode_variable}
  */
  readonly natRefreshModeVariable?: string;
  /**
  * Respond to ping requests to NAT interface ip address from the public side
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#nat_response_to_ping VpnInterfaceDslIpoeFeatureTemplate#nat_response_to_ping}
  */
  readonly natResponseToPing?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#nat_response_to_ping_variable VpnInterfaceDslIpoeFeatureTemplate#nat_response_to_ping_variable}
  */
  readonly natResponseToPingVariable?: string;
  /**
  * Set NAT TCP session timeout, in minutes
  *   - Range: `1`-`8947`
  *   - Default value: `60`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#nat_tcp_timeout VpnInterfaceDslIpoeFeatureTemplate#nat_tcp_timeout}
  */
  readonly natTcpTimeout?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#nat_tcp_timeout_variable VpnInterfaceDslIpoeFeatureTemplate#nat_tcp_timeout_variable}
  */
  readonly natTcpTimeoutVariable?: string;
  /**
  * Set NAT UDP session timeout, in minutes
  *   - Range: `1`-`8947`
  *   - Default value: `1`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#nat_udp_timeout VpnInterfaceDslIpoeFeatureTemplate#nat_udp_timeout}
  */
  readonly natUdpTimeout?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#nat_udp_timeout_variable VpnInterfaceDslIpoeFeatureTemplate#nat_udp_timeout_variable}
  */
  readonly natUdpTimeoutVariable?: string;
  /**
  * PAP outbound Password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#pap_password VpnInterfaceDslIpoeFeatureTemplate#pap_password}
  */
  readonly papPassword?: boolean | cdktf.IResolvable;
  /**
  * Specify ppp pap authentication Password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#pap_ppp_auth_password VpnInterfaceDslIpoeFeatureTemplate#pap_ppp_auth_password}
  */
  readonly papPppAuthPassword?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#pap_ppp_auth_password_variable VpnInterfaceDslIpoeFeatureTemplate#pap_ppp_auth_password_variable}
  */
  readonly papPppAuthPasswordVariable?: string;
  /**
  * PAP outbound Sent Username
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#pap_username VpnInterfaceDslIpoeFeatureTemplate#pap_username}
  */
  readonly papUsername?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#pap_username_variable VpnInterfaceDslIpoeFeatureTemplate#pap_username_variable}
  */
  readonly papUsernameVariable?: string;
  /**
  * Per-tunnel Qos
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#per_tunnel_qos VpnInterfaceDslIpoeFeatureTemplate#per_tunnel_qos}
  */
  readonly perTunnelQos?: boolean | cdktf.IResolvable;
  /**
  * Per-tunnel QoS Aggregator
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#per_tunnel_qos_aggregator VpnInterfaceDslIpoeFeatureTemplate#per_tunnel_qos_aggregator}
  */
  readonly perTunnelQosAggregator?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#per_tunnel_qos_aggregator_variable VpnInterfaceDslIpoeFeatureTemplate#per_tunnel_qos_aggregator_variable}
  */
  readonly perTunnelQosAggregatorVariable?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#per_tunnel_qos_variable VpnInterfaceDslIpoeFeatureTemplate#per_tunnel_qos_variable}
  */
  readonly perTunnelQosVariable?: string;
  /**
  * Enable policer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#policers VpnInterfaceDslIpoeFeatureTemplate#policers}
  */
  readonly policers?: VpnInterfaceDslIpoeFeatureTemplatePolicers[] | cdktf.IResolvable;
  /**
  * PPP Link Authentication Protocol
  *   - Choices: `chap`, `pap`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#ppp_authentication_protocol VpnInterfaceDslIpoeFeatureTemplate#ppp_authentication_protocol}
  */
  readonly pppAuthenticationProtocol?: string;
  /**
  * PPP Authentication Protocol PAP
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#ppp_authentication_protocol_pap VpnInterfaceDslIpoeFeatureTemplate#ppp_authentication_protocol_pap}
  */
  readonly pppAuthenticationProtocolPap?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#ppp_authentication_protocol_variable VpnInterfaceDslIpoeFeatureTemplate#ppp_authentication_protocol_variable}
  */
  readonly pppAuthenticationProtocolVariable?: string;
  /**
  * Maximum MRU to be negotiated during PPP LCP negotiation
  *   - Range: `64`-`1792`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#ppp_maximum_payload VpnInterfaceDslIpoeFeatureTemplate#ppp_maximum_payload}
  */
  readonly pppMaximumPayload?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#ppp_maximum_payload_variable VpnInterfaceDslIpoeFeatureTemplate#ppp_maximum_payload_variable}
  */
  readonly pppMaximumPayloadVariable?: string;
  /**
  * Adaptive QoS default downstream bandwidth
  *   - Range: `8`-`100000000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#qos_adaptive_bandwidth_downstream VpnInterfaceDslIpoeFeatureTemplate#qos_adaptive_bandwidth_downstream}
  */
  readonly qosAdaptiveBandwidthDownstream?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#qos_adaptive_bandwidth_downstream_variable VpnInterfaceDslIpoeFeatureTemplate#qos_adaptive_bandwidth_downstream_variable}
  */
  readonly qosAdaptiveBandwidthDownstreamVariable?: string;
  /**
  * Adaptive QoS default upstream bandwidth
  *   - Range: `8`-`100000000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#qos_adaptive_bandwidth_upstream VpnInterfaceDslIpoeFeatureTemplate#qos_adaptive_bandwidth_upstream}
  */
  readonly qosAdaptiveBandwidthUpstream?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#qos_adaptive_bandwidth_upstream_variable VpnInterfaceDslIpoeFeatureTemplate#qos_adaptive_bandwidth_upstream_variable}
  */
  readonly qosAdaptiveBandwidthUpstreamVariable?: string;
  /**
  * Downstream max bandwidth limit
  *   - Range: `8`-`100000000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#qos_adaptive_max_downstream VpnInterfaceDslIpoeFeatureTemplate#qos_adaptive_max_downstream}
  */
  readonly qosAdaptiveMaxDownstream?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#qos_adaptive_max_downstream_variable VpnInterfaceDslIpoeFeatureTemplate#qos_adaptive_max_downstream_variable}
  */
  readonly qosAdaptiveMaxDownstreamVariable?: string;
  /**
  * Upstream max bandwidth limit
  *   - Range: `8`-`100000000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#qos_adaptive_max_upstream VpnInterfaceDslIpoeFeatureTemplate#qos_adaptive_max_upstream}
  */
  readonly qosAdaptiveMaxUpstream?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#qos_adaptive_max_upstream_variable VpnInterfaceDslIpoeFeatureTemplate#qos_adaptive_max_upstream_variable}
  */
  readonly qosAdaptiveMaxUpstreamVariable?: string;
  /**
  * Downstream min bandwidth limit
  *   - Range: `8`-`100000000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#qos_adaptive_min_downstream VpnInterfaceDslIpoeFeatureTemplate#qos_adaptive_min_downstream}
  */
  readonly qosAdaptiveMinDownstream?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#qos_adaptive_min_downstream_variable VpnInterfaceDslIpoeFeatureTemplate#qos_adaptive_min_downstream_variable}
  */
  readonly qosAdaptiveMinDownstreamVariable?: string;
  /**
  * Upstream min bandwidth limit
  *   - Range: `8`-`100000000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#qos_adaptive_min_upstream VpnInterfaceDslIpoeFeatureTemplate#qos_adaptive_min_upstream}
  */
  readonly qosAdaptiveMinUpstream?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#qos_adaptive_min_upstream_variable VpnInterfaceDslIpoeFeatureTemplate#qos_adaptive_min_upstream_variable}
  */
  readonly qosAdaptiveMinUpstreamVariable?: string;
  /**
  * Periodic timer for adaptive QoS in minutes
  *   - Range: `1`-`720`
  *   - Default value: `15`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#qos_adaptive_period VpnInterfaceDslIpoeFeatureTemplate#qos_adaptive_period}
  */
  readonly qosAdaptivePeriod?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#qos_adaptive_period_variable VpnInterfaceDslIpoeFeatureTemplate#qos_adaptive_period_variable}
  */
  readonly qosAdaptivePeriodVariable?: string;
  /**
  * Name of QoS map
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#qos_map VpnInterfaceDslIpoeFeatureTemplate#qos_map}
  */
  readonly qosMap?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#qos_map_variable VpnInterfaceDslIpoeFeatureTemplate#qos_map_variable}
  */
  readonly qosMapVariable?: string;
  /**
  * Name of VPN QoS map
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#qos_map_vpn VpnInterfaceDslIpoeFeatureTemplate#qos_map_vpn}
  */
  readonly qosMapVpn?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#qos_map_vpn_variable VpnInterfaceDslIpoeFeatureTemplate#qos_map_vpn_variable}
  */
  readonly qosMapVpnVariable?: string;
  /**
  * 1ge  interfaces: [0..1000000]kbps; 10ge interfaces: [0..10000000]kbps
  *   - Range: `8`-`100000000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#shaping_rate VpnInterfaceDslIpoeFeatureTemplate#shaping_rate}
  */
  readonly shapingRate?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#shaping_rate_variable VpnInterfaceDslIpoeFeatureTemplate#shaping_rate_variable}
  */
  readonly shapingRateVariable?: string;
  /**
  * Administrative state
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#shutdown VpnInterfaceDslIpoeFeatureTemplate#shutdown}
  */
  readonly shutdown?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#shutdown_variable VpnInterfaceDslIpoeFeatureTemplate#shutdown_variable}
  */
  readonly shutdownVariable?: string;
  /**
  * TCP MSS on SYN packets, in bytes
  *   - Range: `552`-`1960`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#tcp_mss VpnInterfaceDslIpoeFeatureTemplate#tcp_mss}
  */
  readonly tcpMss?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#tcp_mss_variable VpnInterfaceDslIpoeFeatureTemplate#tcp_mss_variable}
  */
  readonly tcpMssVariable?: string;
  /**
  * Extends a local TLOC to a remote node only for vpn 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#tloc_extension VpnInterfaceDslIpoeFeatureTemplate#tloc_extension}
  */
  readonly tlocExtension?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#tloc_extension_variable VpnInterfaceDslIpoeFeatureTemplate#tloc_extension_variable}
  */
  readonly tlocExtensionVariable?: string;
  /**
  * Enable tracker for this interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#tracker VpnInterfaceDslIpoeFeatureTemplate#tracker}
  */
  readonly tracker?: string[];
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#tracker_variable VpnInterfaceDslIpoeFeatureTemplate#tracker_variable}
  */
  readonly trackerVariable?: string;
  /**
  * Allow all traffic. Overrides all other allow-service options if allow-service all is set
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#tunnel_interface_allow_all VpnInterfaceDslIpoeFeatureTemplate#tunnel_interface_allow_all}
  */
  readonly tunnelInterfaceAllowAll?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#tunnel_interface_allow_all_variable VpnInterfaceDslIpoeFeatureTemplate#tunnel_interface_allow_all_variable}
  */
  readonly tunnelInterfaceAllowAllVariable?: string;
  /**
  * Allow/deny BGP
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#tunnel_interface_allow_bgp VpnInterfaceDslIpoeFeatureTemplate#tunnel_interface_allow_bgp}
  */
  readonly tunnelInterfaceAllowBgp?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#tunnel_interface_allow_bgp_variable VpnInterfaceDslIpoeFeatureTemplate#tunnel_interface_allow_bgp_variable}
  */
  readonly tunnelInterfaceAllowBgpVariable?: string;
  /**
  * Allow/Deny DHCP
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#tunnel_interface_allow_dhcp VpnInterfaceDslIpoeFeatureTemplate#tunnel_interface_allow_dhcp}
  */
  readonly tunnelInterfaceAllowDhcp?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#tunnel_interface_allow_dhcp_variable VpnInterfaceDslIpoeFeatureTemplate#tunnel_interface_allow_dhcp_variable}
  */
  readonly tunnelInterfaceAllowDhcpVariable?: string;
  /**
  * Allow/Deny DNS
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#tunnel_interface_allow_dns VpnInterfaceDslIpoeFeatureTemplate#tunnel_interface_allow_dns}
  */
  readonly tunnelInterfaceAllowDns?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#tunnel_interface_allow_dns_variable VpnInterfaceDslIpoeFeatureTemplate#tunnel_interface_allow_dns_variable}
  */
  readonly tunnelInterfaceAllowDnsVariable?: string;
  /**
  * Allow/Deny Https
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#tunnel_interface_allow_https VpnInterfaceDslIpoeFeatureTemplate#tunnel_interface_allow_https}
  */
  readonly tunnelInterfaceAllowHttps?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#tunnel_interface_allow_https_variable VpnInterfaceDslIpoeFeatureTemplate#tunnel_interface_allow_https_variable}
  */
  readonly tunnelInterfaceAllowHttpsVariable?: string;
  /**
  * Allow/Deny ICMP
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#tunnel_interface_allow_icmp VpnInterfaceDslIpoeFeatureTemplate#tunnel_interface_allow_icmp}
  */
  readonly tunnelInterfaceAllowIcmp?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#tunnel_interface_allow_icmp_variable VpnInterfaceDslIpoeFeatureTemplate#tunnel_interface_allow_icmp_variable}
  */
  readonly tunnelInterfaceAllowIcmpVariable?: string;
  /**
  * Allow/Deny NETCONF
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#tunnel_interface_allow_netconf VpnInterfaceDslIpoeFeatureTemplate#tunnel_interface_allow_netconf}
  */
  readonly tunnelInterfaceAllowNetconf?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#tunnel_interface_allow_netconf_variable VpnInterfaceDslIpoeFeatureTemplate#tunnel_interface_allow_netconf_variable}
  */
  readonly tunnelInterfaceAllowNetconfVariable?: string;
  /**
  * Allow/Deny NTP
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#tunnel_interface_allow_ntp VpnInterfaceDslIpoeFeatureTemplate#tunnel_interface_allow_ntp}
  */
  readonly tunnelInterfaceAllowNtp?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#tunnel_interface_allow_ntp_variable VpnInterfaceDslIpoeFeatureTemplate#tunnel_interface_allow_ntp_variable}
  */
  readonly tunnelInterfaceAllowNtpVariable?: string;
  /**
  * Allow/Deny OSPF
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#tunnel_interface_allow_ospf VpnInterfaceDslIpoeFeatureTemplate#tunnel_interface_allow_ospf}
  */
  readonly tunnelInterfaceAllowOspf?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#tunnel_interface_allow_ospf_variable VpnInterfaceDslIpoeFeatureTemplate#tunnel_interface_allow_ospf_variable}
  */
  readonly tunnelInterfaceAllowOspfVariable?: string;
  /**
  * Allow/Deny SNMP
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#tunnel_interface_allow_snmp VpnInterfaceDslIpoeFeatureTemplate#tunnel_interface_allow_snmp}
  */
  readonly tunnelInterfaceAllowSnmp?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#tunnel_interface_allow_snmp_variable VpnInterfaceDslIpoeFeatureTemplate#tunnel_interface_allow_snmp_variable}
  */
  readonly tunnelInterfaceAllowSnmpVariable?: string;
  /**
  * Allow/Deny SSH
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#tunnel_interface_allow_ssh VpnInterfaceDslIpoeFeatureTemplate#tunnel_interface_allow_ssh}
  */
  readonly tunnelInterfaceAllowSsh?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#tunnel_interface_allow_ssh_variable VpnInterfaceDslIpoeFeatureTemplate#tunnel_interface_allow_ssh_variable}
  */
  readonly tunnelInterfaceAllowSshVariable?: string;
  /**
  * Allow/Deny STUN
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#tunnel_interface_allow_stun VpnInterfaceDslIpoeFeatureTemplate#tunnel_interface_allow_stun}
  */
  readonly tunnelInterfaceAllowStun?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#tunnel_interface_allow_stun_variable VpnInterfaceDslIpoeFeatureTemplate#tunnel_interface_allow_stun_variable}
  */
  readonly tunnelInterfaceAllowStunVariable?: string;
  /**
  * Bind loopback tunnel interface to a physical interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#tunnel_interface_bind_loopback_tunnel VpnInterfaceDslIpoeFeatureTemplate#tunnel_interface_bind_loopback_tunnel}
  */
  readonly tunnelInterfaceBindLoopbackTunnel?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#tunnel_interface_bind_loopback_tunnel_variable VpnInterfaceDslIpoeFeatureTemplate#tunnel_interface_bind_loopback_tunnel_variable}
  */
  readonly tunnelInterfaceBindLoopbackTunnelVariable?: string;
  /**
  * Set TLOC as border TLOC
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#tunnel_interface_border VpnInterfaceDslIpoeFeatureTemplate#tunnel_interface_border}
  */
  readonly tunnelInterfaceBorder?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#tunnel_interface_border_variable VpnInterfaceDslIpoeFeatureTemplate#tunnel_interface_border_variable}
  */
  readonly tunnelInterfaceBorderVariable?: string;
  /**
  * Set carrier for TLOC
  *   - Choices: `default`, `carrier1`, `carrier2`, `carrier3`, `carrier4`, `carrier5`, `carrier6`, `carrier7`, `carrier8`
  *   - Default value: `default`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#tunnel_interface_carrier VpnInterfaceDslIpoeFeatureTemplate#tunnel_interface_carrier}
  */
  readonly tunnelInterfaceCarrier?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#tunnel_interface_carrier_variable VpnInterfaceDslIpoeFeatureTemplate#tunnel_interface_carrier_variable}
  */
  readonly tunnelInterfaceCarrierVariable?: string;
  /**
  * Enable clear dont fragment (Currently Only SDWAN Tunnel Interface)
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#tunnel_interface_clear_dont_fragment VpnInterfaceDslIpoeFeatureTemplate#tunnel_interface_clear_dont_fragment}
  */
  readonly tunnelInterfaceClearDontFragment?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#tunnel_interface_clear_dont_fragment_variable VpnInterfaceDslIpoeFeatureTemplate#tunnel_interface_clear_dont_fragment_variable}
  */
  readonly tunnelInterfaceClearDontFragmentVariable?: string;
  /**
  * Set color for TLOC
  *   - Choices: `default`, `mpls`, `metro-ethernet`, `biz-internet`, `public-internet`, `lte`, `3g`, `red`, `green`, `blue`, `gold`, `silver`, `bronze`, `custom1`, `custom2`, `custom3`, `private1`, `private2`, `private3`, `private4`, `private5`, `private6`
  *   - Default value: `default`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#tunnel_interface_color VpnInterfaceDslIpoeFeatureTemplate#tunnel_interface_color}
  */
  readonly tunnelInterfaceColor?: string;
  /**
  * Restrict this TLOC behavior
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#tunnel_interface_color_restrict VpnInterfaceDslIpoeFeatureTemplate#tunnel_interface_color_restrict}
  */
  readonly tunnelInterfaceColorRestrict?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#tunnel_interface_color_variable VpnInterfaceDslIpoeFeatureTemplate#tunnel_interface_color_variable}
  */
  readonly tunnelInterfaceColorVariable?: string;
  /**
  * Allow Control Connection
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#tunnel_interface_control_connections VpnInterfaceDslIpoeFeatureTemplate#tunnel_interface_control_connections}
  */
  readonly tunnelInterfaceControlConnections?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#tunnel_interface_control_connections_variable VpnInterfaceDslIpoeFeatureTemplate#tunnel_interface_control_connections_variable}
  */
  readonly tunnelInterfaceControlConnectionsVariable?: string;
  /**
  * Encapsulation for TLOC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#tunnel_interface_encapsulations VpnInterfaceDslIpoeFeatureTemplate#tunnel_interface_encapsulations}
  */
  readonly tunnelInterfaceEncapsulations?: VpnInterfaceDslIpoeFeatureTemplateTunnelInterfaceEncapsulations[] | cdktf.IResolvable;
  /**
  * Exclude the following controller groups defined in this list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#tunnel_interface_exclude_controller_group_list VpnInterfaceDslIpoeFeatureTemplate#tunnel_interface_exclude_controller_group_list}
  */
  readonly tunnelInterfaceExcludeControllerGroupList?: number[];
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#tunnel_interface_exclude_controller_group_list_variable VpnInterfaceDslIpoeFeatureTemplate#tunnel_interface_exclude_controller_group_list_variable}
  */
  readonly tunnelInterfaceExcludeControllerGroupListVariable?: string;
  /**
  * List of groups
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#tunnel_interface_groups VpnInterfaceDslIpoeFeatureTemplate#tunnel_interface_groups}
  */
  readonly tunnelInterfaceGroups?: number[];
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#tunnel_interface_groups_variable VpnInterfaceDslIpoeFeatureTemplate#tunnel_interface_groups_variable}
  */
  readonly tunnelInterfaceGroupsVariable?: string;
  /**
  * Set time period of control hello packets <100..600000> milli seconds
  *   - Range: `100`-`600000`
  *   - Default value: `1000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#tunnel_interface_hello_interval VpnInterfaceDslIpoeFeatureTemplate#tunnel_interface_hello_interval}
  */
  readonly tunnelInterfaceHelloInterval?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#tunnel_interface_hello_interval_variable VpnInterfaceDslIpoeFeatureTemplate#tunnel_interface_hello_interval_variable}
  */
  readonly tunnelInterfaceHelloIntervalVariable?: string;
  /**
  * Set tolerance of control hello packets <12..6000> seconds
  *   - Range: `12`-`6000`
  *   - Default value: `12`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#tunnel_interface_hello_tolerance VpnInterfaceDslIpoeFeatureTemplate#tunnel_interface_hello_tolerance}
  */
  readonly tunnelInterfaceHelloTolerance?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#tunnel_interface_hello_tolerance_variable VpnInterfaceDslIpoeFeatureTemplate#tunnel_interface_hello_tolerance_variable}
  */
  readonly tunnelInterfaceHelloToleranceVariable?: string;
  /**
  * Set TLOC as last resort
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#tunnel_interface_last_resort_circuit VpnInterfaceDslIpoeFeatureTemplate#tunnel_interface_last_resort_circuit}
  */
  readonly tunnelInterfaceLastResortCircuit?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#tunnel_interface_last_resort_circuit_variable VpnInterfaceDslIpoeFeatureTemplate#tunnel_interface_last_resort_circuit_variable}
  */
  readonly tunnelInterfaceLastResortCircuitVariable?: string;
  /**
  * Set the interface as a low-bandwidth circuit
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#tunnel_interface_low_bandwidth_link VpnInterfaceDslIpoeFeatureTemplate#tunnel_interface_low_bandwidth_link}
  */
  readonly tunnelInterfaceLowBandwidthLink?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#tunnel_interface_low_bandwidth_link_variable VpnInterfaceDslIpoeFeatureTemplate#tunnel_interface_low_bandwidth_link_variable}
  */
  readonly tunnelInterfaceLowBandwidthLinkVariable?: string;
  /**
  * Set the maximum number of control connections for this TLOC
  *   - Range: `0`-`8`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#tunnel_interface_max_control_connections VpnInterfaceDslIpoeFeatureTemplate#tunnel_interface_max_control_connections}
  */
  readonly tunnelInterfaceMaxControlConnections?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#tunnel_interface_max_control_connections_variable VpnInterfaceDslIpoeFeatureTemplate#tunnel_interface_max_control_connections_variable}
  */
  readonly tunnelInterfaceMaxControlConnectionsVariable?: string;
  /**
  * Set time period of nat refresh packets <1...60> seconds
  *   - Range: `1`-`60`
  *   - Default value: `5`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#tunnel_interface_nat_refresh_interval VpnInterfaceDslIpoeFeatureTemplate#tunnel_interface_nat_refresh_interval}
  */
  readonly tunnelInterfaceNatRefreshInterval?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#tunnel_interface_nat_refresh_interval_variable VpnInterfaceDslIpoeFeatureTemplate#tunnel_interface_nat_refresh_interval_variable}
  */
  readonly tunnelInterfaceNatRefreshIntervalVariable?: string;
  /**
  * Accept and respond to network-prefix-directed broadcasts)
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#tunnel_interface_network_broadcast VpnInterfaceDslIpoeFeatureTemplate#tunnel_interface_network_broadcast}
  */
  readonly tunnelInterfaceNetworkBroadcast?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#tunnel_interface_network_broadcast_variable VpnInterfaceDslIpoeFeatureTemplate#tunnel_interface_network_broadcast_variable}
  */
  readonly tunnelInterfaceNetworkBroadcastVariable?: string;
  /**
  * Disallow port hopping on the tunnel interface
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#tunnel_interface_port_hop VpnInterfaceDslIpoeFeatureTemplate#tunnel_interface_port_hop}
  */
  readonly tunnelInterfacePortHop?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#tunnel_interface_port_hop_variable VpnInterfaceDslIpoeFeatureTemplate#tunnel_interface_port_hop_variable}
  */
  readonly tunnelInterfacePortHopVariable?: string;
  /**
  * Tunnel TCP MSS on SYN packets, in bytes
  *   - Range: `500`-`1460`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#tunnel_interface_tunnel_tcp_mss VpnInterfaceDslIpoeFeatureTemplate#tunnel_interface_tunnel_tcp_mss}
  */
  readonly tunnelInterfaceTunnelTcpMss?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#tunnel_interface_tunnel_tcp_mss_variable VpnInterfaceDslIpoeFeatureTemplate#tunnel_interface_tunnel_tcp_mss_variable}
  */
  readonly tunnelInterfaceTunnelTcpMssVariable?: string;
  /**
  * Put this wan interface in STUN mode only
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#tunnel_interface_vbond_as_stun_server VpnInterfaceDslIpoeFeatureTemplate#tunnel_interface_vbond_as_stun_server}
  */
  readonly tunnelInterfaceVbondAsStunServer?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#tunnel_interface_vbond_as_stun_server_variable VpnInterfaceDslIpoeFeatureTemplate#tunnel_interface_vbond_as_stun_server_variable}
  */
  readonly tunnelInterfaceVbondAsStunServerVariable?: string;
  /**
  * Set interface preference for control connection to vManage <0..8>
  *   - Range: `0`-`8`
  *   - Default value: `5`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#tunnel_interface_vmanage_connection_preference VpnInterfaceDslIpoeFeatureTemplate#tunnel_interface_vmanage_connection_preference}
  */
  readonly tunnelInterfaceVmanageConnectionPreference?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#tunnel_interface_vmanage_connection_preference_variable VpnInterfaceDslIpoeFeatureTemplate#tunnel_interface_vmanage_connection_preference_variable}
  */
  readonly tunnelInterfaceVmanageConnectionPreferenceVariable?: string;
  /**
  * Set tunnel QoS mode
  *   - Choices: `spoke`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#tunnel_qos_mode VpnInterfaceDslIpoeFeatureTemplate#tunnel_qos_mode}
  */
  readonly tunnelQosMode?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#tunnel_qos_mode_variable VpnInterfaceDslIpoeFeatureTemplate#tunnel_qos_mode_variable}
  */
  readonly tunnelQosModeVariable?: string;
  /**
  * Dialer IP Unnumbered Loopback interface name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#unnumbered_loopback_interface VpnInterfaceDslIpoeFeatureTemplate#unnumbered_loopback_interface}
  */
  readonly unnumberedLoopbackInterface?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#unnumbered_loopback_interface_variable VpnInterfaceDslIpoeFeatureTemplate#unnumbered_loopback_interface_variable}
  */
  readonly unnumberedLoopbackInterfaceVariable?: string;
  /**
  * vdsl
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#vdsl_configurations VpnInterfaceDslIpoeFeatureTemplate#vdsl_configurations}
  */
  readonly vdslConfigurations?: VpnInterfaceDslIpoeFeatureTemplateVdslConfigurations[] | cdktf.IResolvable;
  /**
  * Name of rewrite rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#write_rule VpnInterfaceDslIpoeFeatureTemplate#write_rule}
  */
  readonly writeRule?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#write_rule_variable VpnInterfaceDslIpoeFeatureTemplate#write_rule_variable}
  */
  readonly writeRuleVariable?: string;
}
export interface VpnInterfaceDslIpoeFeatureTemplateAccessLists {
  /**
  * Name of access list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#acl_name VpnInterfaceDslIpoeFeatureTemplate#acl_name}
  */
  readonly aclName?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#acl_name_variable VpnInterfaceDslIpoeFeatureTemplate#acl_name_variable}
  */
  readonly aclNameVariable?: string;
  /**
  * Direction
  *   - Choices: `in`, `out`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#direction VpnInterfaceDslIpoeFeatureTemplate#direction}
  */
  readonly direction?: string;
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#optional VpnInterfaceDslIpoeFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function vpnInterfaceDslIpoeFeatureTemplateAccessListsToTerraform(struct?: VpnInterfaceDslIpoeFeatureTemplateAccessLists | cdktf.IResolvable): any {
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


export function vpnInterfaceDslIpoeFeatureTemplateAccessListsToHclTerraform(struct?: VpnInterfaceDslIpoeFeatureTemplateAccessLists | cdktf.IResolvable): any {
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

export class VpnInterfaceDslIpoeFeatureTemplateAccessListsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpnInterfaceDslIpoeFeatureTemplateAccessLists | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VpnInterfaceDslIpoeFeatureTemplateAccessLists | cdktf.IResolvable | undefined) {
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

export class VpnInterfaceDslIpoeFeatureTemplateAccessListsList extends cdktf.ComplexList {
  public internalValue? : VpnInterfaceDslIpoeFeatureTemplateAccessLists[] | cdktf.IResolvable

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
  public get(index: number): VpnInterfaceDslIpoeFeatureTemplateAccessListsOutputReference {
    return new VpnInterfaceDslIpoeFeatureTemplateAccessListsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VpnInterfaceDslIpoeFeatureTemplateNatPortForwards {
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#optional VpnInterfaceDslIpoeFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * Ending port of port range
  *   - Range: `0`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#port_end_range VpnInterfaceDslIpoeFeatureTemplate#port_end_range}
  */
  readonly portEndRange?: number;
  /**
  * Starting port of port range
  *   - Range: `0`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#port_start_range VpnInterfaceDslIpoeFeatureTemplate#port_start_range}
  */
  readonly portStartRange?: number;
  /**
  * Private IP Address to translate to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#private_ip_address VpnInterfaceDslIpoeFeatureTemplate#private_ip_address}
  */
  readonly privateIpAddress?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#private_ip_address_variable VpnInterfaceDslIpoeFeatureTemplate#private_ip_address_variable}
  */
  readonly privateIpAddressVariable?: string;
  /**
  * VPN in which private IP Address resides
  *   - Range: `0`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#private_vpn VpnInterfaceDslIpoeFeatureTemplate#private_vpn}
  */
  readonly privateVpn?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#private_vpn_variable VpnInterfaceDslIpoeFeatureTemplate#private_vpn_variable}
  */
  readonly privateVpnVariable?: string;
  /**
  * Layer 4 protocol to apply port forwarding to
  *   - Choices: `tcp`, `udp`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#protocol VpnInterfaceDslIpoeFeatureTemplate#protocol}
  */
  readonly protocol?: string;
}

export function vpnInterfaceDslIpoeFeatureTemplateNatPortForwardsToTerraform(struct?: VpnInterfaceDslIpoeFeatureTemplateNatPortForwards | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    optional: cdktf.booleanToTerraform(struct!.optional),
    port_end_range: cdktf.numberToTerraform(struct!.portEndRange),
    port_start_range: cdktf.numberToTerraform(struct!.portStartRange),
    private_ip_address: cdktf.stringToTerraform(struct!.privateIpAddress),
    private_ip_address_variable: cdktf.stringToTerraform(struct!.privateIpAddressVariable),
    private_vpn: cdktf.numberToTerraform(struct!.privateVpn),
    private_vpn_variable: cdktf.stringToTerraform(struct!.privateVpnVariable),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}


export function vpnInterfaceDslIpoeFeatureTemplateNatPortForwardsToHclTerraform(struct?: VpnInterfaceDslIpoeFeatureTemplateNatPortForwards | cdktf.IResolvable): any {
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
    port_end_range: {
      value: cdktf.numberToHclTerraform(struct!.portEndRange),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_start_range: {
      value: cdktf.numberToHclTerraform(struct!.portStartRange),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    private_ip_address: {
      value: cdktf.stringToHclTerraform(struct!.privateIpAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_ip_address_variable: {
      value: cdktf.stringToHclTerraform(struct!.privateIpAddressVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_vpn: {
      value: cdktf.numberToHclTerraform(struct!.privateVpn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    private_vpn_variable: {
      value: cdktf.stringToHclTerraform(struct!.privateVpnVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpnInterfaceDslIpoeFeatureTemplateNatPortForwardsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpnInterfaceDslIpoeFeatureTemplateNatPortForwards | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    if (this._portEndRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.portEndRange = this._portEndRange;
    }
    if (this._portStartRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.portStartRange = this._portStartRange;
    }
    if (this._privateIpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateIpAddress = this._privateIpAddress;
    }
    if (this._privateIpAddressVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateIpAddressVariable = this._privateIpAddressVariable;
    }
    if (this._privateVpn !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateVpn = this._privateVpn;
    }
    if (this._privateVpnVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateVpnVariable = this._privateVpnVariable;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnInterfaceDslIpoeFeatureTemplateNatPortForwards | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._optional = undefined;
      this._portEndRange = undefined;
      this._portStartRange = undefined;
      this._privateIpAddress = undefined;
      this._privateIpAddressVariable = undefined;
      this._privateVpn = undefined;
      this._privateVpnVariable = undefined;
      this._protocol = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._optional = value.optional;
      this._portEndRange = value.portEndRange;
      this._portStartRange = value.portStartRange;
      this._privateIpAddress = value.privateIpAddress;
      this._privateIpAddressVariable = value.privateIpAddressVariable;
      this._privateVpn = value.privateVpn;
      this._privateVpnVariable = value.privateVpnVariable;
      this._protocol = value.protocol;
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

  // port_end_range - computed: false, optional: true, required: false
  private _portEndRange?: number; 
  public get portEndRange() {
    return this.getNumberAttribute('port_end_range');
  }
  public set portEndRange(value: number) {
    this._portEndRange = value;
  }
  public resetPortEndRange() {
    this._portEndRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portEndRangeInput() {
    return this._portEndRange;
  }

  // port_start_range - computed: false, optional: true, required: false
  private _portStartRange?: number; 
  public get portStartRange() {
    return this.getNumberAttribute('port_start_range');
  }
  public set portStartRange(value: number) {
    this._portStartRange = value;
  }
  public resetPortStartRange() {
    this._portStartRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portStartRangeInput() {
    return this._portStartRange;
  }

  // private_ip_address - computed: false, optional: true, required: false
  private _privateIpAddress?: string; 
  public get privateIpAddress() {
    return this.getStringAttribute('private_ip_address');
  }
  public set privateIpAddress(value: string) {
    this._privateIpAddress = value;
  }
  public resetPrivateIpAddress() {
    this._privateIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpAddressInput() {
    return this._privateIpAddress;
  }

  // private_ip_address_variable - computed: false, optional: true, required: false
  private _privateIpAddressVariable?: string; 
  public get privateIpAddressVariable() {
    return this.getStringAttribute('private_ip_address_variable');
  }
  public set privateIpAddressVariable(value: string) {
    this._privateIpAddressVariable = value;
  }
  public resetPrivateIpAddressVariable() {
    this._privateIpAddressVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpAddressVariableInput() {
    return this._privateIpAddressVariable;
  }

  // private_vpn - computed: false, optional: true, required: false
  private _privateVpn?: number; 
  public get privateVpn() {
    return this.getNumberAttribute('private_vpn');
  }
  public set privateVpn(value: number) {
    this._privateVpn = value;
  }
  public resetPrivateVpn() {
    this._privateVpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateVpnInput() {
    return this._privateVpn;
  }

  // private_vpn_variable - computed: false, optional: true, required: false
  private _privateVpnVariable?: string; 
  public get privateVpnVariable() {
    return this.getStringAttribute('private_vpn_variable');
  }
  public set privateVpnVariable(value: string) {
    this._privateVpnVariable = value;
  }
  public resetPrivateVpnVariable() {
    this._privateVpnVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateVpnVariableInput() {
    return this._privateVpnVariable;
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
}

export class VpnInterfaceDslIpoeFeatureTemplateNatPortForwardsList extends cdktf.ComplexList {
  public internalValue? : VpnInterfaceDslIpoeFeatureTemplateNatPortForwards[] | cdktf.IResolvable

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
  public get(index: number): VpnInterfaceDslIpoeFeatureTemplateNatPortForwardsOutputReference {
    return new VpnInterfaceDslIpoeFeatureTemplateNatPortForwardsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VpnInterfaceDslIpoeFeatureTemplatePolicers {
  /**
  * Direction
  *   - Choices: `in`, `out`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#direction VpnInterfaceDslIpoeFeatureTemplate#direction}
  */
  readonly direction?: string;
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#optional VpnInterfaceDslIpoeFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * Name of policer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#policer_name VpnInterfaceDslIpoeFeatureTemplate#policer_name}
  */
  readonly policerName?: string;
}

export function vpnInterfaceDslIpoeFeatureTemplatePolicersToTerraform(struct?: VpnInterfaceDslIpoeFeatureTemplatePolicers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    direction: cdktf.stringToTerraform(struct!.direction),
    optional: cdktf.booleanToTerraform(struct!.optional),
    policer_name: cdktf.stringToTerraform(struct!.policerName),
  }
}


export function vpnInterfaceDslIpoeFeatureTemplatePolicersToHclTerraform(struct?: VpnInterfaceDslIpoeFeatureTemplatePolicers | cdktf.IResolvable): any {
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
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    policer_name: {
      value: cdktf.stringToHclTerraform(struct!.policerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpnInterfaceDslIpoeFeatureTemplatePolicersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpnInterfaceDslIpoeFeatureTemplatePolicers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._direction !== undefined) {
      hasAnyValues = true;
      internalValueResult.direction = this._direction;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    if (this._policerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.policerName = this._policerName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnInterfaceDslIpoeFeatureTemplatePolicers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._direction = undefined;
      this._optional = undefined;
      this._policerName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._direction = value.direction;
      this._optional = value.optional;
      this._policerName = value.policerName;
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

  // policer_name - computed: false, optional: true, required: false
  private _policerName?: string; 
  public get policerName() {
    return this.getStringAttribute('policer_name');
  }
  public set policerName(value: string) {
    this._policerName = value;
  }
  public resetPolicerName() {
    this._policerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policerNameInput() {
    return this._policerName;
  }
}

export class VpnInterfaceDslIpoeFeatureTemplatePolicersList extends cdktf.ComplexList {
  public internalValue? : VpnInterfaceDslIpoeFeatureTemplatePolicers[] | cdktf.IResolvable

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
  public get(index: number): VpnInterfaceDslIpoeFeatureTemplatePolicersOutputReference {
    return new VpnInterfaceDslIpoeFeatureTemplatePolicersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VpnInterfaceDslIpoeFeatureTemplateTunnelInterfaceEncapsulations {
  /**
  * Encapsulation
  *   - Choices: `gre`, `ipsec`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#encapsulation VpnInterfaceDslIpoeFeatureTemplate#encapsulation}
  */
  readonly encapsulation?: string;
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#optional VpnInterfaceDslIpoeFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * Set preference for TLOC
  *   - Range: `0`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#preference VpnInterfaceDslIpoeFeatureTemplate#preference}
  */
  readonly preference?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#preference_variable VpnInterfaceDslIpoeFeatureTemplate#preference_variable}
  */
  readonly preferenceVariable?: string;
  /**
  * Set weight for TLOC
  *   - Range: `1`-`255`
  *   - Default value: `1`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#weight VpnInterfaceDslIpoeFeatureTemplate#weight}
  */
  readonly weight?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#weight_variable VpnInterfaceDslIpoeFeatureTemplate#weight_variable}
  */
  readonly weightVariable?: string;
}

export function vpnInterfaceDslIpoeFeatureTemplateTunnelInterfaceEncapsulationsToTerraform(struct?: VpnInterfaceDslIpoeFeatureTemplateTunnelInterfaceEncapsulations | cdktf.IResolvable): any {
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


export function vpnInterfaceDslIpoeFeatureTemplateTunnelInterfaceEncapsulationsToHclTerraform(struct?: VpnInterfaceDslIpoeFeatureTemplateTunnelInterfaceEncapsulations | cdktf.IResolvable): any {
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

export class VpnInterfaceDslIpoeFeatureTemplateTunnelInterfaceEncapsulationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpnInterfaceDslIpoeFeatureTemplateTunnelInterfaceEncapsulations | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VpnInterfaceDslIpoeFeatureTemplateTunnelInterfaceEncapsulations | cdktf.IResolvable | undefined) {
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

export class VpnInterfaceDslIpoeFeatureTemplateTunnelInterfaceEncapsulationsList extends cdktf.ComplexList {
  public internalValue? : VpnInterfaceDslIpoeFeatureTemplateTunnelInterfaceEncapsulations[] | cdktf.IResolvable

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
  public get(index: number): VpnInterfaceDslIpoeFeatureTemplateTunnelInterfaceEncapsulationsOutputReference {
    return new VpnInterfaceDslIpoeFeatureTemplateTunnelInterfaceEncapsulationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VpnInterfaceDslIpoeFeatureTemplateVdslConfigurations {
  /**
  * Set module slot/subslot/port number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#controller_vdsl_slot VpnInterfaceDslIpoeFeatureTemplate#controller_vdsl_slot}
  */
  readonly controllerVdslSlot?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#controller_vdsl_slot_variable VpnInterfaceDslIpoeFeatureTemplate#controller_vdsl_slot_variable}
  */
  readonly controllerVdslSlotVariable?: string;
  /**
  * Set VDSL operating mode to adsl1
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#mode_adsl1 VpnInterfaceDslIpoeFeatureTemplate#mode_adsl1}
  */
  readonly modeAdsl1?: boolean | cdktf.IResolvable;
  /**
  * Set VDSL operating mode to adsl2
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#mode_adsl2 VpnInterfaceDslIpoeFeatureTemplate#mode_adsl2}
  */
  readonly modeAdsl2?: boolean | cdktf.IResolvable;
  /**
  * Set VDSL operating mode to adsl2plus
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#mode_adsl2plus VpnInterfaceDslIpoeFeatureTemplate#mode_adsl2plus}
  */
  readonly modeAdsl2Plus?: boolean | cdktf.IResolvable;
  /**
  * Set VDSL operating mode to ansi
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#mode_ansi VpnInterfaceDslIpoeFeatureTemplate#mode_ansi}
  */
  readonly modeAnsi?: boolean | cdktf.IResolvable;
  /**
  * Set VDSL operating mode to vdsl2
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#mode_vdsl2 VpnInterfaceDslIpoeFeatureTemplate#mode_vdsl2}
  */
  readonly modeVdsl2?: boolean | cdktf.IResolvable;
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#optional VpnInterfaceDslIpoeFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * Seamless rate adaption
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#sra VpnInterfaceDslIpoeFeatureTemplate#sra}
  */
  readonly sra?: boolean | cdktf.IResolvable;
  /**
  * Set module slot/subslot/port number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#vdsl_modem_configuration VpnInterfaceDslIpoeFeatureTemplate#vdsl_modem_configuration}
  */
  readonly vdslModemConfiguration?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#vdsl_modem_configuration_variable VpnInterfaceDslIpoeFeatureTemplate#vdsl_modem_configuration_variable}
  */
  readonly vdslModemConfigurationVariable?: string;
}

export function vpnInterfaceDslIpoeFeatureTemplateVdslConfigurationsToTerraform(struct?: VpnInterfaceDslIpoeFeatureTemplateVdslConfigurations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    controller_vdsl_slot: cdktf.stringToTerraform(struct!.controllerVdslSlot),
    controller_vdsl_slot_variable: cdktf.stringToTerraform(struct!.controllerVdslSlotVariable),
    mode_adsl1: cdktf.booleanToTerraform(struct!.modeAdsl1),
    mode_adsl2: cdktf.booleanToTerraform(struct!.modeAdsl2),
    mode_adsl2plus: cdktf.booleanToTerraform(struct!.modeAdsl2Plus),
    mode_ansi: cdktf.booleanToTerraform(struct!.modeAnsi),
    mode_vdsl2: cdktf.booleanToTerraform(struct!.modeVdsl2),
    optional: cdktf.booleanToTerraform(struct!.optional),
    sra: cdktf.booleanToTerraform(struct!.sra),
    vdsl_modem_configuration: cdktf.stringToTerraform(struct!.vdslModemConfiguration),
    vdsl_modem_configuration_variable: cdktf.stringToTerraform(struct!.vdslModemConfigurationVariable),
  }
}


export function vpnInterfaceDslIpoeFeatureTemplateVdslConfigurationsToHclTerraform(struct?: VpnInterfaceDslIpoeFeatureTemplateVdslConfigurations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    controller_vdsl_slot: {
      value: cdktf.stringToHclTerraform(struct!.controllerVdslSlot),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    controller_vdsl_slot_variable: {
      value: cdktf.stringToHclTerraform(struct!.controllerVdslSlotVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode_adsl1: {
      value: cdktf.booleanToHclTerraform(struct!.modeAdsl1),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mode_adsl2: {
      value: cdktf.booleanToHclTerraform(struct!.modeAdsl2),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mode_adsl2plus: {
      value: cdktf.booleanToHclTerraform(struct!.modeAdsl2Plus),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mode_ansi: {
      value: cdktf.booleanToHclTerraform(struct!.modeAnsi),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mode_vdsl2: {
      value: cdktf.booleanToHclTerraform(struct!.modeVdsl2),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sra: {
      value: cdktf.booleanToHclTerraform(struct!.sra),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    vdsl_modem_configuration: {
      value: cdktf.stringToHclTerraform(struct!.vdslModemConfiguration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vdsl_modem_configuration_variable: {
      value: cdktf.stringToHclTerraform(struct!.vdslModemConfigurationVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpnInterfaceDslIpoeFeatureTemplateVdslConfigurationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpnInterfaceDslIpoeFeatureTemplateVdslConfigurations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._controllerVdslSlot !== undefined) {
      hasAnyValues = true;
      internalValueResult.controllerVdslSlot = this._controllerVdslSlot;
    }
    if (this._controllerVdslSlotVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.controllerVdslSlotVariable = this._controllerVdslSlotVariable;
    }
    if (this._modeAdsl1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.modeAdsl1 = this._modeAdsl1;
    }
    if (this._modeAdsl2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.modeAdsl2 = this._modeAdsl2;
    }
    if (this._modeAdsl2Plus !== undefined) {
      hasAnyValues = true;
      internalValueResult.modeAdsl2Plus = this._modeAdsl2Plus;
    }
    if (this._modeAnsi !== undefined) {
      hasAnyValues = true;
      internalValueResult.modeAnsi = this._modeAnsi;
    }
    if (this._modeVdsl2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.modeVdsl2 = this._modeVdsl2;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    if (this._sra !== undefined) {
      hasAnyValues = true;
      internalValueResult.sra = this._sra;
    }
    if (this._vdslModemConfiguration !== undefined) {
      hasAnyValues = true;
      internalValueResult.vdslModemConfiguration = this._vdslModemConfiguration;
    }
    if (this._vdslModemConfigurationVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.vdslModemConfigurationVariable = this._vdslModemConfigurationVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnInterfaceDslIpoeFeatureTemplateVdslConfigurations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._controllerVdslSlot = undefined;
      this._controllerVdslSlotVariable = undefined;
      this._modeAdsl1 = undefined;
      this._modeAdsl2 = undefined;
      this._modeAdsl2Plus = undefined;
      this._modeAnsi = undefined;
      this._modeVdsl2 = undefined;
      this._optional = undefined;
      this._sra = undefined;
      this._vdslModemConfiguration = undefined;
      this._vdslModemConfigurationVariable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._controllerVdslSlot = value.controllerVdslSlot;
      this._controllerVdslSlotVariable = value.controllerVdslSlotVariable;
      this._modeAdsl1 = value.modeAdsl1;
      this._modeAdsl2 = value.modeAdsl2;
      this._modeAdsl2Plus = value.modeAdsl2Plus;
      this._modeAnsi = value.modeAnsi;
      this._modeVdsl2 = value.modeVdsl2;
      this._optional = value.optional;
      this._sra = value.sra;
      this._vdslModemConfiguration = value.vdslModemConfiguration;
      this._vdslModemConfigurationVariable = value.vdslModemConfigurationVariable;
    }
  }

  // controller_vdsl_slot - computed: false, optional: true, required: false
  private _controllerVdslSlot?: string; 
  public get controllerVdslSlot() {
    return this.getStringAttribute('controller_vdsl_slot');
  }
  public set controllerVdslSlot(value: string) {
    this._controllerVdslSlot = value;
  }
  public resetControllerVdslSlot() {
    this._controllerVdslSlot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerVdslSlotInput() {
    return this._controllerVdslSlot;
  }

  // controller_vdsl_slot_variable - computed: false, optional: true, required: false
  private _controllerVdslSlotVariable?: string; 
  public get controllerVdslSlotVariable() {
    return this.getStringAttribute('controller_vdsl_slot_variable');
  }
  public set controllerVdslSlotVariable(value: string) {
    this._controllerVdslSlotVariable = value;
  }
  public resetControllerVdslSlotVariable() {
    this._controllerVdslSlotVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerVdslSlotVariableInput() {
    return this._controllerVdslSlotVariable;
  }

  // mode_adsl1 - computed: false, optional: true, required: false
  private _modeAdsl1?: boolean | cdktf.IResolvable; 
  public get modeAdsl1() {
    return this.getBooleanAttribute('mode_adsl1');
  }
  public set modeAdsl1(value: boolean | cdktf.IResolvable) {
    this._modeAdsl1 = value;
  }
  public resetModeAdsl1() {
    this._modeAdsl1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeAdsl1Input() {
    return this._modeAdsl1;
  }

  // mode_adsl2 - computed: false, optional: true, required: false
  private _modeAdsl2?: boolean | cdktf.IResolvable; 
  public get modeAdsl2() {
    return this.getBooleanAttribute('mode_adsl2');
  }
  public set modeAdsl2(value: boolean | cdktf.IResolvable) {
    this._modeAdsl2 = value;
  }
  public resetModeAdsl2() {
    this._modeAdsl2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeAdsl2Input() {
    return this._modeAdsl2;
  }

  // mode_adsl2plus - computed: false, optional: true, required: false
  private _modeAdsl2Plus?: boolean | cdktf.IResolvable; 
  public get modeAdsl2Plus() {
    return this.getBooleanAttribute('mode_adsl2plus');
  }
  public set modeAdsl2Plus(value: boolean | cdktf.IResolvable) {
    this._modeAdsl2Plus = value;
  }
  public resetModeAdsl2Plus() {
    this._modeAdsl2Plus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeAdsl2PlusInput() {
    return this._modeAdsl2Plus;
  }

  // mode_ansi - computed: false, optional: true, required: false
  private _modeAnsi?: boolean | cdktf.IResolvable; 
  public get modeAnsi() {
    return this.getBooleanAttribute('mode_ansi');
  }
  public set modeAnsi(value: boolean | cdktf.IResolvable) {
    this._modeAnsi = value;
  }
  public resetModeAnsi() {
    this._modeAnsi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeAnsiInput() {
    return this._modeAnsi;
  }

  // mode_vdsl2 - computed: false, optional: true, required: false
  private _modeVdsl2?: boolean | cdktf.IResolvable; 
  public get modeVdsl2() {
    return this.getBooleanAttribute('mode_vdsl2');
  }
  public set modeVdsl2(value: boolean | cdktf.IResolvable) {
    this._modeVdsl2 = value;
  }
  public resetModeVdsl2() {
    this._modeVdsl2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeVdsl2Input() {
    return this._modeVdsl2;
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

  // sra - computed: false, optional: true, required: false
  private _sra?: boolean | cdktf.IResolvable; 
  public get sra() {
    return this.getBooleanAttribute('sra');
  }
  public set sra(value: boolean | cdktf.IResolvable) {
    this._sra = value;
  }
  public resetSra() {
    this._sra = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sraInput() {
    return this._sra;
  }

  // vdsl_modem_configuration - computed: false, optional: true, required: false
  private _vdslModemConfiguration?: string; 
  public get vdslModemConfiguration() {
    return this.getStringAttribute('vdsl_modem_configuration');
  }
  public set vdslModemConfiguration(value: string) {
    this._vdslModemConfiguration = value;
  }
  public resetVdslModemConfiguration() {
    this._vdslModemConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdslModemConfigurationInput() {
    return this._vdslModemConfiguration;
  }

  // vdsl_modem_configuration_variable - computed: false, optional: true, required: false
  private _vdslModemConfigurationVariable?: string; 
  public get vdslModemConfigurationVariable() {
    return this.getStringAttribute('vdsl_modem_configuration_variable');
  }
  public set vdslModemConfigurationVariable(value: string) {
    this._vdslModemConfigurationVariable = value;
  }
  public resetVdslModemConfigurationVariable() {
    this._vdslModemConfigurationVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdslModemConfigurationVariableInput() {
    return this._vdslModemConfigurationVariable;
  }
}

export class VpnInterfaceDslIpoeFeatureTemplateVdslConfigurationsList extends cdktf.ComplexList {
  public internalValue? : VpnInterfaceDslIpoeFeatureTemplateVdslConfigurations[] | cdktf.IResolvable

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
  public get(index: number): VpnInterfaceDslIpoeFeatureTemplateVdslConfigurationsOutputReference {
    return new VpnInterfaceDslIpoeFeatureTemplateVdslConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template sdwan_vpn_interface_dsl_ipoe_feature_template}
*/
export class VpnInterfaceDslIpoeFeatureTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_vpn_interface_dsl_ipoe_feature_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VpnInterfaceDslIpoeFeatureTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VpnInterfaceDslIpoeFeatureTemplate to import
  * @param importFromId The id of the existing VpnInterfaceDslIpoeFeatureTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VpnInterfaceDslIpoeFeatureTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_vpn_interface_dsl_ipoe_feature_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_ipoe_feature_template sdwan_vpn_interface_dsl_ipoe_feature_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpnInterfaceDslIpoeFeatureTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: VpnInterfaceDslIpoeFeatureTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_vpn_interface_dsl_ipoe_feature_template',
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
    this._accessLists.internalValue = config.accessLists;
    this._bandwidthDownstream = config.bandwidthDownstream;
    this._bandwidthDownstreamVariable = config.bandwidthDownstreamVariable;
    this._bandwidthUpstream = config.bandwidthUpstream;
    this._bandwidthUpstreamVariable = config.bandwidthUpstreamVariable;
    this._chapHostname = config.chapHostname;
    this._chapHostnameVariable = config.chapHostnameVariable;
    this._chapPppAuthPassword = config.chapPppAuthPassword;
    this._chapPppAuthPasswordVariable = config.chapPppAuthPasswordVariable;
    this._description = config.description;
    this._deviceTypes = config.deviceTypes;
    this._dialerAddressNegotiated = config.dialerAddressNegotiated;
    this._dialerAddressNegotiatedVariable = config.dialerAddressNegotiatedVariable;
    this._dialerPoolNumber = config.dialerPoolNumber;
    this._dialerPoolNumberVariable = config.dialerPoolNumberVariable;
    this._encap = config.encap;
    this._encapVariable = config.encapVariable;
    this._ethernetDescription = config.ethernetDescription;
    this._ethernetDescriptionVariable = config.ethernetDescriptionVariable;
    this._ethernetDhcpDistance = config.ethernetDhcpDistance;
    this._ethernetDhcpDistanceVariable = config.ethernetDhcpDistanceVariable;
    this._ethernetDhcpHelper = config.ethernetDhcpHelper;
    this._ethernetDhcpHelperVariable = config.ethernetDhcpHelperVariable;
    this._ethernetEnableDhcp = config.ethernetEnableDhcp;
    this._ethernetEnableDhcpVariable = config.ethernetEnableDhcpVariable;
    this._ethernetInterfaceName = config.ethernetInterfaceName;
    this._ethernetInterfaceNameVariable = config.ethernetInterfaceNameVariable;
    this._ethernetIpv4Address = config.ethernetIpv4Address;
    this._ethernetIpv4AddressVariable = config.ethernetIpv4AddressVariable;
    this._internalControllerType = config.internalControllerType;
    this._ipDirectedBroadcast = config.ipDirectedBroadcast;
    this._ipDirectedBroadcastVariable = config.ipDirectedBroadcastVariable;
    this._ipMtu = config.ipMtu;
    this._ipMtuVariable = config.ipMtuVariable;
    this._name = config.name;
    this._nat = config.nat;
    this._natBlockIcmpError = config.natBlockIcmpError;
    this._natBlockIcmpErrorVariable = config.natBlockIcmpErrorVariable;
    this._natPortForwards.internalValue = config.natPortForwards;
    this._natRefreshMode = config.natRefreshMode;
    this._natRefreshModeVariable = config.natRefreshModeVariable;
    this._natResponseToPing = config.natResponseToPing;
    this._natResponseToPingVariable = config.natResponseToPingVariable;
    this._natTcpTimeout = config.natTcpTimeout;
    this._natTcpTimeoutVariable = config.natTcpTimeoutVariable;
    this._natUdpTimeout = config.natUdpTimeout;
    this._natUdpTimeoutVariable = config.natUdpTimeoutVariable;
    this._papPassword = config.papPassword;
    this._papPppAuthPassword = config.papPppAuthPassword;
    this._papPppAuthPasswordVariable = config.papPppAuthPasswordVariable;
    this._papUsername = config.papUsername;
    this._papUsernameVariable = config.papUsernameVariable;
    this._perTunnelQos = config.perTunnelQos;
    this._perTunnelQosAggregator = config.perTunnelQosAggregator;
    this._perTunnelQosAggregatorVariable = config.perTunnelQosAggregatorVariable;
    this._perTunnelQosVariable = config.perTunnelQosVariable;
    this._policers.internalValue = config.policers;
    this._pppAuthenticationProtocol = config.pppAuthenticationProtocol;
    this._pppAuthenticationProtocolPap = config.pppAuthenticationProtocolPap;
    this._pppAuthenticationProtocolVariable = config.pppAuthenticationProtocolVariable;
    this._pppMaximumPayload = config.pppMaximumPayload;
    this._pppMaximumPayloadVariable = config.pppMaximumPayloadVariable;
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
    this._shapingRate = config.shapingRate;
    this._shapingRateVariable = config.shapingRateVariable;
    this._shutdown = config.shutdown;
    this._shutdownVariable = config.shutdownVariable;
    this._tcpMss = config.tcpMss;
    this._tcpMssVariable = config.tcpMssVariable;
    this._tlocExtension = config.tlocExtension;
    this._tlocExtensionVariable = config.tlocExtensionVariable;
    this._tracker = config.tracker;
    this._trackerVariable = config.trackerVariable;
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
    this._tunnelInterfaceColorVariable = config.tunnelInterfaceColorVariable;
    this._tunnelInterfaceControlConnections = config.tunnelInterfaceControlConnections;
    this._tunnelInterfaceControlConnectionsVariable = config.tunnelInterfaceControlConnectionsVariable;
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
    this._unnumberedLoopbackInterface = config.unnumberedLoopbackInterface;
    this._unnumberedLoopbackInterfaceVariable = config.unnumberedLoopbackInterfaceVariable;
    this._vdslConfigurations.internalValue = config.vdslConfigurations;
    this._writeRule = config.writeRule;
    this._writeRuleVariable = config.writeRuleVariable;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_lists - computed: false, optional: true, required: false
  private _accessLists = new VpnInterfaceDslIpoeFeatureTemplateAccessListsList(this, "access_lists", false);
  public get accessLists() {
    return this._accessLists;
  }
  public putAccessLists(value: VpnInterfaceDslIpoeFeatureTemplateAccessLists[] | cdktf.IResolvable) {
    this._accessLists.internalValue = value;
  }
  public resetAccessLists() {
    this._accessLists.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessListsInput() {
    return this._accessLists.internalValue;
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

  // chap_hostname - computed: false, optional: true, required: false
  private _chapHostname?: string; 
  public get chapHostname() {
    return this.getStringAttribute('chap_hostname');
  }
  public set chapHostname(value: string) {
    this._chapHostname = value;
  }
  public resetChapHostname() {
    this._chapHostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chapHostnameInput() {
    return this._chapHostname;
  }

  // chap_hostname_variable - computed: false, optional: true, required: false
  private _chapHostnameVariable?: string; 
  public get chapHostnameVariable() {
    return this.getStringAttribute('chap_hostname_variable');
  }
  public set chapHostnameVariable(value: string) {
    this._chapHostnameVariable = value;
  }
  public resetChapHostnameVariable() {
    this._chapHostnameVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chapHostnameVariableInput() {
    return this._chapHostnameVariable;
  }

  // chap_ppp_auth_password - computed: false, optional: true, required: false
  private _chapPppAuthPassword?: string; 
  public get chapPppAuthPassword() {
    return this.getStringAttribute('chap_ppp_auth_password');
  }
  public set chapPppAuthPassword(value: string) {
    this._chapPppAuthPassword = value;
  }
  public resetChapPppAuthPassword() {
    this._chapPppAuthPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chapPppAuthPasswordInput() {
    return this._chapPppAuthPassword;
  }

  // chap_ppp_auth_password_variable - computed: false, optional: true, required: false
  private _chapPppAuthPasswordVariable?: string; 
  public get chapPppAuthPasswordVariable() {
    return this.getStringAttribute('chap_ppp_auth_password_variable');
  }
  public set chapPppAuthPasswordVariable(value: string) {
    this._chapPppAuthPasswordVariable = value;
  }
  public resetChapPppAuthPasswordVariable() {
    this._chapPppAuthPasswordVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chapPppAuthPasswordVariableInput() {
    return this._chapPppAuthPasswordVariable;
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

  // dialer_address_negotiated - computed: false, optional: true, required: false
  private _dialerAddressNegotiated?: boolean | cdktf.IResolvable; 
  public get dialerAddressNegotiated() {
    return this.getBooleanAttribute('dialer_address_negotiated');
  }
  public set dialerAddressNegotiated(value: boolean | cdktf.IResolvable) {
    this._dialerAddressNegotiated = value;
  }
  public resetDialerAddressNegotiated() {
    this._dialerAddressNegotiated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dialerAddressNegotiatedInput() {
    return this._dialerAddressNegotiated;
  }

  // dialer_address_negotiated_variable - computed: false, optional: true, required: false
  private _dialerAddressNegotiatedVariable?: string; 
  public get dialerAddressNegotiatedVariable() {
    return this.getStringAttribute('dialer_address_negotiated_variable');
  }
  public set dialerAddressNegotiatedVariable(value: string) {
    this._dialerAddressNegotiatedVariable = value;
  }
  public resetDialerAddressNegotiatedVariable() {
    this._dialerAddressNegotiatedVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dialerAddressNegotiatedVariableInput() {
    return this._dialerAddressNegotiatedVariable;
  }

  // dialer_pool_number - computed: false, optional: true, required: false
  private _dialerPoolNumber?: number; 
  public get dialerPoolNumber() {
    return this.getNumberAttribute('dialer_pool_number');
  }
  public set dialerPoolNumber(value: number) {
    this._dialerPoolNumber = value;
  }
  public resetDialerPoolNumber() {
    this._dialerPoolNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dialerPoolNumberInput() {
    return this._dialerPoolNumber;
  }

  // dialer_pool_number_variable - computed: false, optional: true, required: false
  private _dialerPoolNumberVariable?: string; 
  public get dialerPoolNumberVariable() {
    return this.getStringAttribute('dialer_pool_number_variable');
  }
  public set dialerPoolNumberVariable(value: string) {
    this._dialerPoolNumberVariable = value;
  }
  public resetDialerPoolNumberVariable() {
    this._dialerPoolNumberVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dialerPoolNumberVariableInput() {
    return this._dialerPoolNumberVariable;
  }

  // encap - computed: false, optional: true, required: false
  private _encap?: number; 
  public get encap() {
    return this.getNumberAttribute('encap');
  }
  public set encap(value: number) {
    this._encap = value;
  }
  public resetEncap() {
    this._encap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encapInput() {
    return this._encap;
  }

  // encap_variable - computed: false, optional: true, required: false
  private _encapVariable?: string; 
  public get encapVariable() {
    return this.getStringAttribute('encap_variable');
  }
  public set encapVariable(value: string) {
    this._encapVariable = value;
  }
  public resetEncapVariable() {
    this._encapVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encapVariableInput() {
    return this._encapVariable;
  }

  // ethernet_description - computed: false, optional: true, required: false
  private _ethernetDescription?: string; 
  public get ethernetDescription() {
    return this.getStringAttribute('ethernet_description');
  }
  public set ethernetDescription(value: string) {
    this._ethernetDescription = value;
  }
  public resetEthernetDescription() {
    this._ethernetDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ethernetDescriptionInput() {
    return this._ethernetDescription;
  }

  // ethernet_description_variable - computed: false, optional: true, required: false
  private _ethernetDescriptionVariable?: string; 
  public get ethernetDescriptionVariable() {
    return this.getStringAttribute('ethernet_description_variable');
  }
  public set ethernetDescriptionVariable(value: string) {
    this._ethernetDescriptionVariable = value;
  }
  public resetEthernetDescriptionVariable() {
    this._ethernetDescriptionVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ethernetDescriptionVariableInput() {
    return this._ethernetDescriptionVariable;
  }

  // ethernet_dhcp_distance - computed: false, optional: true, required: false
  private _ethernetDhcpDistance?: number; 
  public get ethernetDhcpDistance() {
    return this.getNumberAttribute('ethernet_dhcp_distance');
  }
  public set ethernetDhcpDistance(value: number) {
    this._ethernetDhcpDistance = value;
  }
  public resetEthernetDhcpDistance() {
    this._ethernetDhcpDistance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ethernetDhcpDistanceInput() {
    return this._ethernetDhcpDistance;
  }

  // ethernet_dhcp_distance_variable - computed: false, optional: true, required: false
  private _ethernetDhcpDistanceVariable?: string; 
  public get ethernetDhcpDistanceVariable() {
    return this.getStringAttribute('ethernet_dhcp_distance_variable');
  }
  public set ethernetDhcpDistanceVariable(value: string) {
    this._ethernetDhcpDistanceVariable = value;
  }
  public resetEthernetDhcpDistanceVariable() {
    this._ethernetDhcpDistanceVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ethernetDhcpDistanceVariableInput() {
    return this._ethernetDhcpDistanceVariable;
  }

  // ethernet_dhcp_helper - computed: false, optional: true, required: false
  private _ethernetDhcpHelper?: string[]; 
  public get ethernetDhcpHelper() {
    return cdktf.Fn.tolist(this.getListAttribute('ethernet_dhcp_helper'));
  }
  public set ethernetDhcpHelper(value: string[]) {
    this._ethernetDhcpHelper = value;
  }
  public resetEthernetDhcpHelper() {
    this._ethernetDhcpHelper = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ethernetDhcpHelperInput() {
    return this._ethernetDhcpHelper;
  }

  // ethernet_dhcp_helper_variable - computed: false, optional: true, required: false
  private _ethernetDhcpHelperVariable?: string; 
  public get ethernetDhcpHelperVariable() {
    return this.getStringAttribute('ethernet_dhcp_helper_variable');
  }
  public set ethernetDhcpHelperVariable(value: string) {
    this._ethernetDhcpHelperVariable = value;
  }
  public resetEthernetDhcpHelperVariable() {
    this._ethernetDhcpHelperVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ethernetDhcpHelperVariableInput() {
    return this._ethernetDhcpHelperVariable;
  }

  // ethernet_enable_dhcp - computed: false, optional: true, required: false
  private _ethernetEnableDhcp?: boolean | cdktf.IResolvable; 
  public get ethernetEnableDhcp() {
    return this.getBooleanAttribute('ethernet_enable_dhcp');
  }
  public set ethernetEnableDhcp(value: boolean | cdktf.IResolvable) {
    this._ethernetEnableDhcp = value;
  }
  public resetEthernetEnableDhcp() {
    this._ethernetEnableDhcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ethernetEnableDhcpInput() {
    return this._ethernetEnableDhcp;
  }

  // ethernet_enable_dhcp_variable - computed: false, optional: true, required: false
  private _ethernetEnableDhcpVariable?: string; 
  public get ethernetEnableDhcpVariable() {
    return this.getStringAttribute('ethernet_enable_dhcp_variable');
  }
  public set ethernetEnableDhcpVariable(value: string) {
    this._ethernetEnableDhcpVariable = value;
  }
  public resetEthernetEnableDhcpVariable() {
    this._ethernetEnableDhcpVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ethernetEnableDhcpVariableInput() {
    return this._ethernetEnableDhcpVariable;
  }

  // ethernet_interface_name - computed: false, optional: true, required: false
  private _ethernetInterfaceName?: string; 
  public get ethernetInterfaceName() {
    return this.getStringAttribute('ethernet_interface_name');
  }
  public set ethernetInterfaceName(value: string) {
    this._ethernetInterfaceName = value;
  }
  public resetEthernetInterfaceName() {
    this._ethernetInterfaceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ethernetInterfaceNameInput() {
    return this._ethernetInterfaceName;
  }

  // ethernet_interface_name_variable - computed: false, optional: true, required: false
  private _ethernetInterfaceNameVariable?: string; 
  public get ethernetInterfaceNameVariable() {
    return this.getStringAttribute('ethernet_interface_name_variable');
  }
  public set ethernetInterfaceNameVariable(value: string) {
    this._ethernetInterfaceNameVariable = value;
  }
  public resetEthernetInterfaceNameVariable() {
    this._ethernetInterfaceNameVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ethernetInterfaceNameVariableInput() {
    return this._ethernetInterfaceNameVariable;
  }

  // ethernet_ipv4_address - computed: false, optional: true, required: false
  private _ethernetIpv4Address?: string; 
  public get ethernetIpv4Address() {
    return this.getStringAttribute('ethernet_ipv4_address');
  }
  public set ethernetIpv4Address(value: string) {
    this._ethernetIpv4Address = value;
  }
  public resetEthernetIpv4Address() {
    this._ethernetIpv4Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ethernetIpv4AddressInput() {
    return this._ethernetIpv4Address;
  }

  // ethernet_ipv4_address_variable - computed: false, optional: true, required: false
  private _ethernetIpv4AddressVariable?: string; 
  public get ethernetIpv4AddressVariable() {
    return this.getStringAttribute('ethernet_ipv4_address_variable');
  }
  public set ethernetIpv4AddressVariable(value: string) {
    this._ethernetIpv4AddressVariable = value;
  }
  public resetEthernetIpv4AddressVariable() {
    this._ethernetIpv4AddressVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ethernetIpv4AddressVariableInput() {
    return this._ethernetIpv4AddressVariable;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // internal_controller_type - computed: false, optional: true, required: false
  private _internalControllerType?: string; 
  public get internalControllerType() {
    return this.getStringAttribute('internal_controller_type');
  }
  public set internalControllerType(value: string) {
    this._internalControllerType = value;
  }
  public resetInternalControllerType() {
    this._internalControllerType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalControllerTypeInput() {
    return this._internalControllerType;
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

  // nat_block_icmp_error - computed: false, optional: true, required: false
  private _natBlockIcmpError?: boolean | cdktf.IResolvable; 
  public get natBlockIcmpError() {
    return this.getBooleanAttribute('nat_block_icmp_error');
  }
  public set natBlockIcmpError(value: boolean | cdktf.IResolvable) {
    this._natBlockIcmpError = value;
  }
  public resetNatBlockIcmpError() {
    this._natBlockIcmpError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natBlockIcmpErrorInput() {
    return this._natBlockIcmpError;
  }

  // nat_block_icmp_error_variable - computed: false, optional: true, required: false
  private _natBlockIcmpErrorVariable?: string; 
  public get natBlockIcmpErrorVariable() {
    return this.getStringAttribute('nat_block_icmp_error_variable');
  }
  public set natBlockIcmpErrorVariable(value: string) {
    this._natBlockIcmpErrorVariable = value;
  }
  public resetNatBlockIcmpErrorVariable() {
    this._natBlockIcmpErrorVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natBlockIcmpErrorVariableInput() {
    return this._natBlockIcmpErrorVariable;
  }

  // nat_port_forwards - computed: false, optional: true, required: false
  private _natPortForwards = new VpnInterfaceDslIpoeFeatureTemplateNatPortForwardsList(this, "nat_port_forwards", false);
  public get natPortForwards() {
    return this._natPortForwards;
  }
  public putNatPortForwards(value: VpnInterfaceDslIpoeFeatureTemplateNatPortForwards[] | cdktf.IResolvable) {
    this._natPortForwards.internalValue = value;
  }
  public resetNatPortForwards() {
    this._natPortForwards.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natPortForwardsInput() {
    return this._natPortForwards.internalValue;
  }

  // nat_refresh_mode - computed: false, optional: true, required: false
  private _natRefreshMode?: string; 
  public get natRefreshMode() {
    return this.getStringAttribute('nat_refresh_mode');
  }
  public set natRefreshMode(value: string) {
    this._natRefreshMode = value;
  }
  public resetNatRefreshMode() {
    this._natRefreshMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natRefreshModeInput() {
    return this._natRefreshMode;
  }

  // nat_refresh_mode_variable - computed: false, optional: true, required: false
  private _natRefreshModeVariable?: string; 
  public get natRefreshModeVariable() {
    return this.getStringAttribute('nat_refresh_mode_variable');
  }
  public set natRefreshModeVariable(value: string) {
    this._natRefreshModeVariable = value;
  }
  public resetNatRefreshModeVariable() {
    this._natRefreshModeVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natRefreshModeVariableInput() {
    return this._natRefreshModeVariable;
  }

  // nat_response_to_ping - computed: false, optional: true, required: false
  private _natResponseToPing?: boolean | cdktf.IResolvable; 
  public get natResponseToPing() {
    return this.getBooleanAttribute('nat_response_to_ping');
  }
  public set natResponseToPing(value: boolean | cdktf.IResolvable) {
    this._natResponseToPing = value;
  }
  public resetNatResponseToPing() {
    this._natResponseToPing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natResponseToPingInput() {
    return this._natResponseToPing;
  }

  // nat_response_to_ping_variable - computed: false, optional: true, required: false
  private _natResponseToPingVariable?: string; 
  public get natResponseToPingVariable() {
    return this.getStringAttribute('nat_response_to_ping_variable');
  }
  public set natResponseToPingVariable(value: string) {
    this._natResponseToPingVariable = value;
  }
  public resetNatResponseToPingVariable() {
    this._natResponseToPingVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natResponseToPingVariableInput() {
    return this._natResponseToPingVariable;
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

  // pap_password - computed: false, optional: true, required: false
  private _papPassword?: boolean | cdktf.IResolvable; 
  public get papPassword() {
    return this.getBooleanAttribute('pap_password');
  }
  public set papPassword(value: boolean | cdktf.IResolvable) {
    this._papPassword = value;
  }
  public resetPapPassword() {
    this._papPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get papPasswordInput() {
    return this._papPassword;
  }

  // pap_ppp_auth_password - computed: false, optional: true, required: false
  private _papPppAuthPassword?: string; 
  public get papPppAuthPassword() {
    return this.getStringAttribute('pap_ppp_auth_password');
  }
  public set papPppAuthPassword(value: string) {
    this._papPppAuthPassword = value;
  }
  public resetPapPppAuthPassword() {
    this._papPppAuthPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get papPppAuthPasswordInput() {
    return this._papPppAuthPassword;
  }

  // pap_ppp_auth_password_variable - computed: false, optional: true, required: false
  private _papPppAuthPasswordVariable?: string; 
  public get papPppAuthPasswordVariable() {
    return this.getStringAttribute('pap_ppp_auth_password_variable');
  }
  public set papPppAuthPasswordVariable(value: string) {
    this._papPppAuthPasswordVariable = value;
  }
  public resetPapPppAuthPasswordVariable() {
    this._papPppAuthPasswordVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get papPppAuthPasswordVariableInput() {
    return this._papPppAuthPasswordVariable;
  }

  // pap_username - computed: false, optional: true, required: false
  private _papUsername?: string; 
  public get papUsername() {
    return this.getStringAttribute('pap_username');
  }
  public set papUsername(value: string) {
    this._papUsername = value;
  }
  public resetPapUsername() {
    this._papUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get papUsernameInput() {
    return this._papUsername;
  }

  // pap_username_variable - computed: false, optional: true, required: false
  private _papUsernameVariable?: string; 
  public get papUsernameVariable() {
    return this.getStringAttribute('pap_username_variable');
  }
  public set papUsernameVariable(value: string) {
    this._papUsernameVariable = value;
  }
  public resetPapUsernameVariable() {
    this._papUsernameVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get papUsernameVariableInput() {
    return this._papUsernameVariable;
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

  // policers - computed: false, optional: true, required: false
  private _policers = new VpnInterfaceDslIpoeFeatureTemplatePolicersList(this, "policers", false);
  public get policers() {
    return this._policers;
  }
  public putPolicers(value: VpnInterfaceDslIpoeFeatureTemplatePolicers[] | cdktf.IResolvable) {
    this._policers.internalValue = value;
  }
  public resetPolicers() {
    this._policers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policersInput() {
    return this._policers.internalValue;
  }

  // ppp_authentication_protocol - computed: false, optional: true, required: false
  private _pppAuthenticationProtocol?: string; 
  public get pppAuthenticationProtocol() {
    return this.getStringAttribute('ppp_authentication_protocol');
  }
  public set pppAuthenticationProtocol(value: string) {
    this._pppAuthenticationProtocol = value;
  }
  public resetPppAuthenticationProtocol() {
    this._pppAuthenticationProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pppAuthenticationProtocolInput() {
    return this._pppAuthenticationProtocol;
  }

  // ppp_authentication_protocol_pap - computed: false, optional: true, required: false
  private _pppAuthenticationProtocolPap?: boolean | cdktf.IResolvable; 
  public get pppAuthenticationProtocolPap() {
    return this.getBooleanAttribute('ppp_authentication_protocol_pap');
  }
  public set pppAuthenticationProtocolPap(value: boolean | cdktf.IResolvable) {
    this._pppAuthenticationProtocolPap = value;
  }
  public resetPppAuthenticationProtocolPap() {
    this._pppAuthenticationProtocolPap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pppAuthenticationProtocolPapInput() {
    return this._pppAuthenticationProtocolPap;
  }

  // ppp_authentication_protocol_variable - computed: false, optional: true, required: false
  private _pppAuthenticationProtocolVariable?: string; 
  public get pppAuthenticationProtocolVariable() {
    return this.getStringAttribute('ppp_authentication_protocol_variable');
  }
  public set pppAuthenticationProtocolVariable(value: string) {
    this._pppAuthenticationProtocolVariable = value;
  }
  public resetPppAuthenticationProtocolVariable() {
    this._pppAuthenticationProtocolVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pppAuthenticationProtocolVariableInput() {
    return this._pppAuthenticationProtocolVariable;
  }

  // ppp_maximum_payload - computed: false, optional: true, required: false
  private _pppMaximumPayload?: number; 
  public get pppMaximumPayload() {
    return this.getNumberAttribute('ppp_maximum_payload');
  }
  public set pppMaximumPayload(value: number) {
    this._pppMaximumPayload = value;
  }
  public resetPppMaximumPayload() {
    this._pppMaximumPayload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pppMaximumPayloadInput() {
    return this._pppMaximumPayload;
  }

  // ppp_maximum_payload_variable - computed: false, optional: true, required: false
  private _pppMaximumPayloadVariable?: string; 
  public get pppMaximumPayloadVariable() {
    return this.getStringAttribute('ppp_maximum_payload_variable');
  }
  public set pppMaximumPayloadVariable(value: string) {
    this._pppMaximumPayloadVariable = value;
  }
  public resetPppMaximumPayloadVariable() {
    this._pppMaximumPayloadVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pppMaximumPayloadVariableInput() {
    return this._pppMaximumPayloadVariable;
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
  private _tunnelInterfaceEncapsulations = new VpnInterfaceDslIpoeFeatureTemplateTunnelInterfaceEncapsulationsList(this, "tunnel_interface_encapsulations", false);
  public get tunnelInterfaceEncapsulations() {
    return this._tunnelInterfaceEncapsulations;
  }
  public putTunnelInterfaceEncapsulations(value: VpnInterfaceDslIpoeFeatureTemplateTunnelInterfaceEncapsulations[] | cdktf.IResolvable) {
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

  // unnumbered_loopback_interface - computed: false, optional: true, required: false
  private _unnumberedLoopbackInterface?: string; 
  public get unnumberedLoopbackInterface() {
    return this.getStringAttribute('unnumbered_loopback_interface');
  }
  public set unnumberedLoopbackInterface(value: string) {
    this._unnumberedLoopbackInterface = value;
  }
  public resetUnnumberedLoopbackInterface() {
    this._unnumberedLoopbackInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unnumberedLoopbackInterfaceInput() {
    return this._unnumberedLoopbackInterface;
  }

  // unnumbered_loopback_interface_variable - computed: false, optional: true, required: false
  private _unnumberedLoopbackInterfaceVariable?: string; 
  public get unnumberedLoopbackInterfaceVariable() {
    return this.getStringAttribute('unnumbered_loopback_interface_variable');
  }
  public set unnumberedLoopbackInterfaceVariable(value: string) {
    this._unnumberedLoopbackInterfaceVariable = value;
  }
  public resetUnnumberedLoopbackInterfaceVariable() {
    this._unnumberedLoopbackInterfaceVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unnumberedLoopbackInterfaceVariableInput() {
    return this._unnumberedLoopbackInterfaceVariable;
  }

  // vdsl_configurations - computed: false, optional: true, required: false
  private _vdslConfigurations = new VpnInterfaceDslIpoeFeatureTemplateVdslConfigurationsList(this, "vdsl_configurations", false);
  public get vdslConfigurations() {
    return this._vdslConfigurations;
  }
  public putVdslConfigurations(value: VpnInterfaceDslIpoeFeatureTemplateVdslConfigurations[] | cdktf.IResolvable) {
    this._vdslConfigurations.internalValue = value;
  }
  public resetVdslConfigurations() {
    this._vdslConfigurations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdslConfigurationsInput() {
    return this._vdslConfigurations.internalValue;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // write_rule - computed: false, optional: true, required: false
  private _writeRule?: string; 
  public get writeRule() {
    return this.getStringAttribute('write_rule');
  }
  public set writeRule(value: string) {
    this._writeRule = value;
  }
  public resetWriteRule() {
    this._writeRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeRuleInput() {
    return this._writeRule;
  }

  // write_rule_variable - computed: false, optional: true, required: false
  private _writeRuleVariable?: string; 
  public get writeRuleVariable() {
    return this.getStringAttribute('write_rule_variable');
  }
  public set writeRuleVariable(value: string) {
    this._writeRuleVariable = value;
  }
  public resetWriteRuleVariable() {
    this._writeRuleVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeRuleVariableInput() {
    return this._writeRuleVariable;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_lists: cdktf.listMapper(vpnInterfaceDslIpoeFeatureTemplateAccessListsToTerraform, false)(this._accessLists.internalValue),
      bandwidth_downstream: cdktf.numberToTerraform(this._bandwidthDownstream),
      bandwidth_downstream_variable: cdktf.stringToTerraform(this._bandwidthDownstreamVariable),
      bandwidth_upstream: cdktf.numberToTerraform(this._bandwidthUpstream),
      bandwidth_upstream_variable: cdktf.stringToTerraform(this._bandwidthUpstreamVariable),
      chap_hostname: cdktf.stringToTerraform(this._chapHostname),
      chap_hostname_variable: cdktf.stringToTerraform(this._chapHostnameVariable),
      chap_ppp_auth_password: cdktf.stringToTerraform(this._chapPppAuthPassword),
      chap_ppp_auth_password_variable: cdktf.stringToTerraform(this._chapPppAuthPasswordVariable),
      description: cdktf.stringToTerraform(this._description),
      device_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._deviceTypes),
      dialer_address_negotiated: cdktf.booleanToTerraform(this._dialerAddressNegotiated),
      dialer_address_negotiated_variable: cdktf.stringToTerraform(this._dialerAddressNegotiatedVariable),
      dialer_pool_number: cdktf.numberToTerraform(this._dialerPoolNumber),
      dialer_pool_number_variable: cdktf.stringToTerraform(this._dialerPoolNumberVariable),
      encap: cdktf.numberToTerraform(this._encap),
      encap_variable: cdktf.stringToTerraform(this._encapVariable),
      ethernet_description: cdktf.stringToTerraform(this._ethernetDescription),
      ethernet_description_variable: cdktf.stringToTerraform(this._ethernetDescriptionVariable),
      ethernet_dhcp_distance: cdktf.numberToTerraform(this._ethernetDhcpDistance),
      ethernet_dhcp_distance_variable: cdktf.stringToTerraform(this._ethernetDhcpDistanceVariable),
      ethernet_dhcp_helper: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ethernetDhcpHelper),
      ethernet_dhcp_helper_variable: cdktf.stringToTerraform(this._ethernetDhcpHelperVariable),
      ethernet_enable_dhcp: cdktf.booleanToTerraform(this._ethernetEnableDhcp),
      ethernet_enable_dhcp_variable: cdktf.stringToTerraform(this._ethernetEnableDhcpVariable),
      ethernet_interface_name: cdktf.stringToTerraform(this._ethernetInterfaceName),
      ethernet_interface_name_variable: cdktf.stringToTerraform(this._ethernetInterfaceNameVariable),
      ethernet_ipv4_address: cdktf.stringToTerraform(this._ethernetIpv4Address),
      ethernet_ipv4_address_variable: cdktf.stringToTerraform(this._ethernetIpv4AddressVariable),
      internal_controller_type: cdktf.stringToTerraform(this._internalControllerType),
      ip_directed_broadcast: cdktf.booleanToTerraform(this._ipDirectedBroadcast),
      ip_directed_broadcast_variable: cdktf.stringToTerraform(this._ipDirectedBroadcastVariable),
      ip_mtu: cdktf.numberToTerraform(this._ipMtu),
      ip_mtu_variable: cdktf.stringToTerraform(this._ipMtuVariable),
      name: cdktf.stringToTerraform(this._name),
      nat: cdktf.booleanToTerraform(this._nat),
      nat_block_icmp_error: cdktf.booleanToTerraform(this._natBlockIcmpError),
      nat_block_icmp_error_variable: cdktf.stringToTerraform(this._natBlockIcmpErrorVariable),
      nat_port_forwards: cdktf.listMapper(vpnInterfaceDslIpoeFeatureTemplateNatPortForwardsToTerraform, false)(this._natPortForwards.internalValue),
      nat_refresh_mode: cdktf.stringToTerraform(this._natRefreshMode),
      nat_refresh_mode_variable: cdktf.stringToTerraform(this._natRefreshModeVariable),
      nat_response_to_ping: cdktf.booleanToTerraform(this._natResponseToPing),
      nat_response_to_ping_variable: cdktf.stringToTerraform(this._natResponseToPingVariable),
      nat_tcp_timeout: cdktf.numberToTerraform(this._natTcpTimeout),
      nat_tcp_timeout_variable: cdktf.stringToTerraform(this._natTcpTimeoutVariable),
      nat_udp_timeout: cdktf.numberToTerraform(this._natUdpTimeout),
      nat_udp_timeout_variable: cdktf.stringToTerraform(this._natUdpTimeoutVariable),
      pap_password: cdktf.booleanToTerraform(this._papPassword),
      pap_ppp_auth_password: cdktf.stringToTerraform(this._papPppAuthPassword),
      pap_ppp_auth_password_variable: cdktf.stringToTerraform(this._papPppAuthPasswordVariable),
      pap_username: cdktf.stringToTerraform(this._papUsername),
      pap_username_variable: cdktf.stringToTerraform(this._papUsernameVariable),
      per_tunnel_qos: cdktf.booleanToTerraform(this._perTunnelQos),
      per_tunnel_qos_aggregator: cdktf.booleanToTerraform(this._perTunnelQosAggregator),
      per_tunnel_qos_aggregator_variable: cdktf.stringToTerraform(this._perTunnelQosAggregatorVariable),
      per_tunnel_qos_variable: cdktf.stringToTerraform(this._perTunnelQosVariable),
      policers: cdktf.listMapper(vpnInterfaceDslIpoeFeatureTemplatePolicersToTerraform, false)(this._policers.internalValue),
      ppp_authentication_protocol: cdktf.stringToTerraform(this._pppAuthenticationProtocol),
      ppp_authentication_protocol_pap: cdktf.booleanToTerraform(this._pppAuthenticationProtocolPap),
      ppp_authentication_protocol_variable: cdktf.stringToTerraform(this._pppAuthenticationProtocolVariable),
      ppp_maximum_payload: cdktf.numberToTerraform(this._pppMaximumPayload),
      ppp_maximum_payload_variable: cdktf.stringToTerraform(this._pppMaximumPayloadVariable),
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
      shaping_rate: cdktf.numberToTerraform(this._shapingRate),
      shaping_rate_variable: cdktf.stringToTerraform(this._shapingRateVariable),
      shutdown: cdktf.booleanToTerraform(this._shutdown),
      shutdown_variable: cdktf.stringToTerraform(this._shutdownVariable),
      tcp_mss: cdktf.numberToTerraform(this._tcpMss),
      tcp_mss_variable: cdktf.stringToTerraform(this._tcpMssVariable),
      tloc_extension: cdktf.stringToTerraform(this._tlocExtension),
      tloc_extension_variable: cdktf.stringToTerraform(this._tlocExtensionVariable),
      tracker: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tracker),
      tracker_variable: cdktf.stringToTerraform(this._trackerVariable),
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
      tunnel_interface_color_variable: cdktf.stringToTerraform(this._tunnelInterfaceColorVariable),
      tunnel_interface_control_connections: cdktf.booleanToTerraform(this._tunnelInterfaceControlConnections),
      tunnel_interface_control_connections_variable: cdktf.stringToTerraform(this._tunnelInterfaceControlConnectionsVariable),
      tunnel_interface_encapsulations: cdktf.listMapper(vpnInterfaceDslIpoeFeatureTemplateTunnelInterfaceEncapsulationsToTerraform, false)(this._tunnelInterfaceEncapsulations.internalValue),
      tunnel_interface_exclude_controller_group_list: cdktf.listMapper(cdktf.numberToTerraform, false)(this._tunnelInterfaceExcludeControllerGroupList),
      tunnel_interface_exclude_controller_group_list_variable: cdktf.stringToTerraform(this._tunnelInterfaceExcludeControllerGroupListVariable),
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
      tunnel_interface_tunnel_tcp_mss: cdktf.numberToTerraform(this._tunnelInterfaceTunnelTcpMss),
      tunnel_interface_tunnel_tcp_mss_variable: cdktf.stringToTerraform(this._tunnelInterfaceTunnelTcpMssVariable),
      tunnel_interface_vbond_as_stun_server: cdktf.booleanToTerraform(this._tunnelInterfaceVbondAsStunServer),
      tunnel_interface_vbond_as_stun_server_variable: cdktf.stringToTerraform(this._tunnelInterfaceVbondAsStunServerVariable),
      tunnel_interface_vmanage_connection_preference: cdktf.numberToTerraform(this._tunnelInterfaceVmanageConnectionPreference),
      tunnel_interface_vmanage_connection_preference_variable: cdktf.stringToTerraform(this._tunnelInterfaceVmanageConnectionPreferenceVariable),
      tunnel_qos_mode: cdktf.stringToTerraform(this._tunnelQosMode),
      tunnel_qos_mode_variable: cdktf.stringToTerraform(this._tunnelQosModeVariable),
      unnumbered_loopback_interface: cdktf.stringToTerraform(this._unnumberedLoopbackInterface),
      unnumbered_loopback_interface_variable: cdktf.stringToTerraform(this._unnumberedLoopbackInterfaceVariable),
      vdsl_configurations: cdktf.listMapper(vpnInterfaceDslIpoeFeatureTemplateVdslConfigurationsToTerraform, false)(this._vdslConfigurations.internalValue),
      write_rule: cdktf.stringToTerraform(this._writeRule),
      write_rule_variable: cdktf.stringToTerraform(this._writeRuleVariable),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_lists: {
        value: cdktf.listMapperHcl(vpnInterfaceDslIpoeFeatureTemplateAccessListsToHclTerraform, false)(this._accessLists.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VpnInterfaceDslIpoeFeatureTemplateAccessListsList",
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
      chap_hostname: {
        value: cdktf.stringToHclTerraform(this._chapHostname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      chap_hostname_variable: {
        value: cdktf.stringToHclTerraform(this._chapHostnameVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      chap_ppp_auth_password: {
        value: cdktf.stringToHclTerraform(this._chapPppAuthPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      chap_ppp_auth_password_variable: {
        value: cdktf.stringToHclTerraform(this._chapPppAuthPasswordVariable),
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
      dialer_address_negotiated: {
        value: cdktf.booleanToHclTerraform(this._dialerAddressNegotiated),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dialer_address_negotiated_variable: {
        value: cdktf.stringToHclTerraform(this._dialerAddressNegotiatedVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dialer_pool_number: {
        value: cdktf.numberToHclTerraform(this._dialerPoolNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dialer_pool_number_variable: {
        value: cdktf.stringToHclTerraform(this._dialerPoolNumberVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encap: {
        value: cdktf.numberToHclTerraform(this._encap),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      encap_variable: {
        value: cdktf.stringToHclTerraform(this._encapVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ethernet_description: {
        value: cdktf.stringToHclTerraform(this._ethernetDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ethernet_description_variable: {
        value: cdktf.stringToHclTerraform(this._ethernetDescriptionVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ethernet_dhcp_distance: {
        value: cdktf.numberToHclTerraform(this._ethernetDhcpDistance),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ethernet_dhcp_distance_variable: {
        value: cdktf.stringToHclTerraform(this._ethernetDhcpDistanceVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ethernet_dhcp_helper: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ethernetDhcpHelper),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      ethernet_dhcp_helper_variable: {
        value: cdktf.stringToHclTerraform(this._ethernetDhcpHelperVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ethernet_enable_dhcp: {
        value: cdktf.booleanToHclTerraform(this._ethernetEnableDhcp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ethernet_enable_dhcp_variable: {
        value: cdktf.stringToHclTerraform(this._ethernetEnableDhcpVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ethernet_interface_name: {
        value: cdktf.stringToHclTerraform(this._ethernetInterfaceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ethernet_interface_name_variable: {
        value: cdktf.stringToHclTerraform(this._ethernetInterfaceNameVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ethernet_ipv4_address: {
        value: cdktf.stringToHclTerraform(this._ethernetIpv4Address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ethernet_ipv4_address_variable: {
        value: cdktf.stringToHclTerraform(this._ethernetIpv4AddressVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      internal_controller_type: {
        value: cdktf.stringToHclTerraform(this._internalControllerType),
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
      nat_block_icmp_error: {
        value: cdktf.booleanToHclTerraform(this._natBlockIcmpError),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      nat_block_icmp_error_variable: {
        value: cdktf.stringToHclTerraform(this._natBlockIcmpErrorVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nat_port_forwards: {
        value: cdktf.listMapperHcl(vpnInterfaceDslIpoeFeatureTemplateNatPortForwardsToHclTerraform, false)(this._natPortForwards.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VpnInterfaceDslIpoeFeatureTemplateNatPortForwardsList",
      },
      nat_refresh_mode: {
        value: cdktf.stringToHclTerraform(this._natRefreshMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nat_refresh_mode_variable: {
        value: cdktf.stringToHclTerraform(this._natRefreshModeVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nat_response_to_ping: {
        value: cdktf.booleanToHclTerraform(this._natResponseToPing),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      nat_response_to_ping_variable: {
        value: cdktf.stringToHclTerraform(this._natResponseToPingVariable),
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
      pap_password: {
        value: cdktf.booleanToHclTerraform(this._papPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      pap_ppp_auth_password: {
        value: cdktf.stringToHclTerraform(this._papPppAuthPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pap_ppp_auth_password_variable: {
        value: cdktf.stringToHclTerraform(this._papPppAuthPasswordVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pap_username: {
        value: cdktf.stringToHclTerraform(this._papUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pap_username_variable: {
        value: cdktf.stringToHclTerraform(this._papUsernameVariable),
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
      policers: {
        value: cdktf.listMapperHcl(vpnInterfaceDslIpoeFeatureTemplatePolicersToHclTerraform, false)(this._policers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VpnInterfaceDslIpoeFeatureTemplatePolicersList",
      },
      ppp_authentication_protocol: {
        value: cdktf.stringToHclTerraform(this._pppAuthenticationProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ppp_authentication_protocol_pap: {
        value: cdktf.booleanToHclTerraform(this._pppAuthenticationProtocolPap),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ppp_authentication_protocol_variable: {
        value: cdktf.stringToHclTerraform(this._pppAuthenticationProtocolVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ppp_maximum_payload: {
        value: cdktf.numberToHclTerraform(this._pppMaximumPayload),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ppp_maximum_payload_variable: {
        value: cdktf.stringToHclTerraform(this._pppMaximumPayloadVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
        value: cdktf.listMapperHcl(vpnInterfaceDslIpoeFeatureTemplateTunnelInterfaceEncapsulationsToHclTerraform, false)(this._tunnelInterfaceEncapsulations.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VpnInterfaceDslIpoeFeatureTemplateTunnelInterfaceEncapsulationsList",
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
      unnumbered_loopback_interface: {
        value: cdktf.stringToHclTerraform(this._unnumberedLoopbackInterface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unnumbered_loopback_interface_variable: {
        value: cdktf.stringToHclTerraform(this._unnumberedLoopbackInterfaceVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdsl_configurations: {
        value: cdktf.listMapperHcl(vpnInterfaceDslIpoeFeatureTemplateVdslConfigurationsToHclTerraform, false)(this._vdslConfigurations.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VpnInterfaceDslIpoeFeatureTemplateVdslConfigurationsList",
      },
      write_rule: {
        value: cdktf.stringToHclTerraform(this._writeRule),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      write_rule_variable: {
        value: cdktf.stringToHclTerraform(this._writeRuleVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
