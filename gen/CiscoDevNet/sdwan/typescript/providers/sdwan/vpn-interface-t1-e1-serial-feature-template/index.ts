// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_t1_e1_serial_feature_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpnInterfaceT1E1SerialFeatureTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Link autonegotiation
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_t1_e1_serial_feature_template#autonegotiate VpnInterfaceT1E1SerialFeatureTemplate#autonegotiate}
  */
  readonly autonegotiate?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_t1_e1_serial_feature_template#autonegotiate_variable VpnInterfaceT1E1SerialFeatureTemplate#autonegotiate_variable}
  */
  readonly autonegotiateVariable?: string;
  /**
  * Clear don't fragment bit
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_t1_e1_serial_feature_template#clear_dont_fragment_bit VpnInterfaceT1E1SerialFeatureTemplate#clear_dont_fragment_bit}
  */
  readonly clearDontFragmentBit?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_t1_e1_serial_feature_template#clear_dont_fragment_bit_variable VpnInterfaceT1E1SerialFeatureTemplate#clear_dont_fragment_bit_variable}
  */
  readonly clearDontFragmentBitVariable?: string;
  /**
  * Set preference for interface Clock speed
  *   - Choices: `1200`, `2400`, `3600`, `4800`, `9600`, `14400`, `19200`, `28800`, `32000`, `38400`, `48000`, `56000`, `57600`, `64000`, `72000`, `115200`, `125000`, `148000`, `192000`, `250000`, `256000`, `384000`, `500000`, `512000`, `768000`, `800000`, `1000000`, `2000000`, `4000000`, `5300000`, `8000000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_t1_e1_serial_feature_template#clock_rate VpnInterfaceT1E1SerialFeatureTemplate#clock_rate}
  */
  readonly clockRate?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_t1_e1_serial_feature_template#clock_rate_variable VpnInterfaceT1E1SerialFeatureTemplate#clock_rate_variable}
  */
  readonly clockRateVariable?: string;
  /**
  * Enable core region
  *   - Choices: `core`, `core-shared`
  *   - Default value: `core`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_t1_e1_serial_feature_template#core_region VpnInterfaceT1E1SerialFeatureTemplate#core_region}
  */
  readonly coreRegion?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_t1_e1_serial_feature_template#core_region_variable VpnInterfaceT1E1SerialFeatureTemplate#core_region_variable}
  */
  readonly coreRegionVariable?: string;
  /**
  * The description of the feature template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_t1_e1_serial_feature_template#description VpnInterfaceT1E1SerialFeatureTemplate#description}
  */
  readonly description: string;
  /**
  * List of supported device types
  *   - Choices: `vedge-C8000V`, `vedge-C8300-1N1S-4T2X`, `vedge-C8300-1N1S-6T`, `vedge-C8300-2N2S-6T`, `vedge-C8300-2N2S-4T2X`, `vedge-C8500-12X4QC`, `vedge-C8500-12X`, `vedge-C8500-20X6C`, `vedge-C8500L-8S4X`, `vedge-C8200-1N-4T`, `vedge-C8200L-1N-4T`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_t1_e1_serial_feature_template#device_types VpnInterfaceT1E1SerialFeatureTemplate#device_types}
  */
  readonly deviceTypes: string[];
  /**
  * Enable core region
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_t1_e1_serial_feature_template#enable_core_region VpnInterfaceT1E1SerialFeatureTemplate#enable_core_region}
  */
  readonly enableCoreRegion?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_t1_e1_serial_feature_template#enable_core_region_variable VpnInterfaceT1E1SerialFeatureTemplate#enable_core_region_variable}
  */
  readonly enableCoreRegionVariable?: string;
  /**
  * Configure Encapsulation for interface
  *   - Choices: `hdlc`, `ppp`, `frame-relay`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_t1_e1_serial_feature_template#encapsulation VpnInterfaceT1E1SerialFeatureTemplate#encapsulation}
  */
  readonly encapsulation?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_t1_e1_serial_feature_template#encapsulation_variable VpnInterfaceT1E1SerialFeatureTemplate#encapsulation_variable}
  */
  readonly encapsulationVariable?: string;
  /**
  * Interface bandwidth capacity, in kbps
  *   - Range: `1`-`128`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_t1_e1_serial_feature_template#interface_bandwidth_capacity VpnInterfaceT1E1SerialFeatureTemplate#interface_bandwidth_capacity}
  */
  readonly interfaceBandwidthCapacity?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_t1_e1_serial_feature_template#interface_bandwidth_capacity_variable VpnInterfaceT1E1SerialFeatureTemplate#interface_bandwidth_capacity_variable}
  */
  readonly interfaceBandwidthCapacityVariable?: string;
  /**
  * Interface description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_t1_e1_serial_feature_template#interface_description VpnInterfaceT1E1SerialFeatureTemplate#interface_description}
  */
  readonly interfaceDescription?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_t1_e1_serial_feature_template#interface_description_variable VpnInterfaceT1E1SerialFeatureTemplate#interface_description_variable}
  */
  readonly interfaceDescriptionVariable?: string;
  /**
  * Interface downstream bandwidth capacity, in kbps
  *   - Range: `1`-`2147483647`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_t1_e1_serial_feature_template#interface_downstream_bandwidth_capacity VpnInterfaceT1E1SerialFeatureTemplate#interface_downstream_bandwidth_capacity}
  */
  readonly interfaceDownstreamBandwidthCapacity?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_t1_e1_serial_feature_template#interface_downstream_bandwidth_capacity_variable VpnInterfaceT1E1SerialFeatureTemplate#interface_downstream_bandwidth_capacity_variable}
  */
  readonly interfaceDownstreamBandwidthCapacityVariable?: string;
  /**
  * Interface MTU <68...2000>, in bytes
  *   - Range: `68`-`2000`
  *   - Default value: `1500`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_t1_e1_serial_feature_template#ip_mtu VpnInterfaceT1E1SerialFeatureTemplate#ip_mtu}
  */
  readonly ipMtu?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_t1_e1_serial_feature_template#ip_mtu_variable VpnInterfaceT1E1SerialFeatureTemplate#ip_mtu_variable}
  */
  readonly ipMtuVariable?: string;
  /**
  * Apply ACL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_t1_e1_serial_feature_template#ipv4_access_lists VpnInterfaceT1E1SerialFeatureTemplate#ipv4_access_lists}
  */
  readonly ipv4AccessLists?: VpnInterfaceT1E1SerialFeatureTemplateIpv4AccessLists[] | cdktf.IResolvable;
  /**
  * Assign IPv4 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_t1_e1_serial_feature_template#ipv4_address VpnInterfaceT1E1SerialFeatureTemplate#ipv4_address}
  */
  readonly ipv4Address?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_t1_e1_serial_feature_template#ipv4_address_variable VpnInterfaceT1E1SerialFeatureTemplate#ipv4_address_variable}
  */
  readonly ipv4AddressVariable?: string;
  /**
  * Apply IPv6 access list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_t1_e1_serial_feature_template#ipv6_access_lists VpnInterfaceT1E1SerialFeatureTemplate#ipv6_access_lists}
  */
  readonly ipv6AccessLists?: VpnInterfaceT1E1SerialFeatureTemplateIpv6AccessLists[] | cdktf.IResolvable;
  /**
  * Assign IPv6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_t1_e1_serial_feature_template#ipv6_address VpnInterfaceT1E1SerialFeatureTemplate#ipv6_address}
  */
  readonly ipv6Address?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_t1_e1_serial_feature_template#ipv6_address_variable VpnInterfaceT1E1SerialFeatureTemplate#ipv6_address_variable}
  */
  readonly ipv6AddressVariable?: string;
  /**
  * The name of the feature template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_t1_e1_serial_feature_template#name VpnInterfaceT1E1SerialFeatureTemplate#name}
  */
  readonly name: string;
  /**
  * Per-tunnel Qos
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_t1_e1_serial_feature_template#per_tunnel_qos VpnInterfaceT1E1SerialFeatureTemplate#per_tunnel_qos}
  */
  readonly perTunnelQos?: boolean | cdktf.IResolvable;
  /**
  * Per-tunnel QoS Aggregator
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_t1_e1_serial_feature_template#per_tunnel_qos_aggregator VpnInterfaceT1E1SerialFeatureTemplate#per_tunnel_qos_aggregator}
  */
  readonly perTunnelQosAggregator?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_t1_e1_serial_feature_template#per_tunnel_qos_aggregator_variable VpnInterfaceT1E1SerialFeatureTemplate#per_tunnel_qos_aggregator_variable}
  */
  readonly perTunnelQosAggregatorVariable?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_t1_e1_serial_feature_template#per_tunnel_qos_variable VpnInterfaceT1E1SerialFeatureTemplate#per_tunnel_qos_variable}
  */
  readonly perTunnelQosVariable?: string;
  /**
  * Path MTU Discovery
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_t1_e1_serial_feature_template#pmtu_discovery VpnInterfaceT1E1SerialFeatureTemplate#pmtu_discovery}
  */
  readonly pmtuDiscovery?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_t1_e1_serial_feature_template#pmtu_discovery_variable VpnInterfaceT1E1SerialFeatureTemplate#pmtu_discovery_variable}
  */
  readonly pmtuDiscoveryVariable?: string;
  /**
  * Name of QoS map
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_t1_e1_serial_feature_template#qos_map VpnInterfaceT1E1SerialFeatureTemplate#qos_map}
  */
  readonly qosMap?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_t1_e1_serial_feature_template#qos_map_variable VpnInterfaceT1E1SerialFeatureTemplate#qos_map_variable}
  */
  readonly qosMapVariable?: string;
  /**
  * Name of VPN QoS map
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_t1_e1_serial_feature_template#qos_map_vpn VpnInterfaceT1E1SerialFeatureTemplate#qos_map_vpn}
  */
  readonly qosMapVpn?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_t1_e1_serial_feature_template#qos_map_vpn_variable VpnInterfaceT1E1SerialFeatureTemplate#qos_map_vpn_variable}
  */
  readonly qosMapVpnVariable?: string;
  /**
  * Enable secondary region
  *   - Choices: `off`, `secondary-only`, `secondary-shared`
  *   - Default value: `off`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_t1_e1_serial_feature_template#secondary_region VpnInterfaceT1E1SerialFeatureTemplate#secondary_region}
  */
  readonly secondaryRegion?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_t1_e1_serial_feature_template#secondary_region_variable VpnInterfaceT1E1SerialFeatureTemplate#secondary_region_variable}
  */
  readonly secondaryRegionVariable?: string;
  /**
  * Serial Interface Name - slot/subslot/port:channel-group for T1/E1, slot/subslot/port for NIM-1T
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_t1_e1_serial_feature_template#serial_interface_name VpnInterfaceT1E1SerialFeatureTemplate#serial_interface_name}
  */
  readonly serialInterfaceName?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_t1_e1_serial_feature_template#serial_interface_name_variable VpnInterfaceT1E1SerialFeatureTemplate#serial_interface_name_variable}
  */
  readonly serialInterfaceNameVariable?: string;
  /**
  * 1ge  interfaces: [0..1000000]kbps; 10ge interfaces: [0..10000000]kbps
  *   - Range: `8`-`100000000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_t1_e1_serial_feature_template#shaping_rate VpnInterfaceT1E1SerialFeatureTemplate#shaping_rate}
  */
  readonly shapingRate?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_t1_e1_serial_feature_template#shaping_rate_variable VpnInterfaceT1E1SerialFeatureTemplate#shaping_rate_variable}
  */
  readonly shapingRateVariable?: string;
  /**
  * Administrative state
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_t1_e1_serial_feature_template#shutdown VpnInterfaceT1E1SerialFeatureTemplate#shutdown}
  */
  readonly shutdown?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_t1_e1_serial_feature_template#shutdown_variable VpnInterfaceT1E1SerialFeatureTemplate#shutdown_variable}
  */
  readonly shutdownVariable?: string;
  /**
  * Static ingress QoS for the port
  *   - Range: `0`-`7`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_t1_e1_serial_feature_template#static_ingress_qos VpnInterfaceT1E1SerialFeatureTemplate#static_ingress_qos}
  */
  readonly staticIngressQos?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_t1_e1_serial_feature_template#static_ingress_qos_variable VpnInterfaceT1E1SerialFeatureTemplate#static_ingress_qos_variable}
  */
  readonly staticIngressQosVariable?: string;
  /**
  * TCP MSS on SYN packets, in bytes
  *   - Range: `552`-`1960`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_t1_e1_serial_feature_template#tcp_mss VpnInterfaceT1E1SerialFeatureTemplate#tcp_mss}
  */
  readonly tcpMss?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_t1_e1_serial_feature_template#tcp_mss_variable VpnInterfaceT1E1SerialFeatureTemplate#tcp_mss_variable}
  */
  readonly tcpMssVariable?: string;
  /**
  * Extends a local TLOC to a remote node only for vpn 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_t1_e1_serial_feature_template#tloc_extension VpnInterfaceT1E1SerialFeatureTemplate#tloc_extension}
  */
  readonly tlocExtension?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_t1_e1_serial_feature_template#tloc_extension_variable VpnInterfaceT1E1SerialFeatureTemplate#tloc_extension_variable}
  */
  readonly tlocExtensionVariable?: string;
  /**
  * Allow all traffic. Overrides all other allow-service options if allow-service all is set
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_t1_e1_serial_feature_template#tunnel_interface_allow_all VpnInterfaceT1E1SerialFeatureTemplate#tunnel_interface_allow_all}
  */
  readonly tunnelInterfaceAllowAll?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_t1_e1_serial_feature_template#tunnel_interface_allow_all_variable VpnInterfaceT1E1SerialFeatureTemplate#tunnel_interface_allow_all_variable}
  */
  readonly tunnelInterfaceAllowAllVariable?: string;
  /**
  * Allow/deny BGP
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_t1_e1_serial_feature_template#tunnel_interface_allow_bgp VpnInterfaceT1E1SerialFeatureTemplate#tunnel_interface_allow_bgp}
  */
  readonly tunnelInterfaceAllowBgp?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_t1_e1_serial_feature_template#tunnel_interface_allow_bgp_variable VpnInterfaceT1E1SerialFeatureTemplate#tunnel_interface_allow_bgp_variable}
  */
  readonly tunnelInterfaceAllowBgpVariable?: string;
  /**
  * Allow/Deny DHCP
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_t1_e1_serial_feature_template#tunnel_interface_allow_dhcp VpnInterfaceT1E1SerialFeatureTemplate#tunnel_interface_allow_dhcp}
  */
  readonly tunnelInterfaceAllowDhcp?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_t1_e1_serial_feature_template#tunnel_interface_allow_dhcp_variable VpnInterfaceT1E1SerialFeatureTemplate#tunnel_interface_allow_dhcp_variable}
  */
  readonly tunnelInterfaceAllowDhcpVariable?: string;
  /**
  * Allow/Deny DNS
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_t1_e1_serial_feature_template#tunnel_interface_allow_dns VpnInterfaceT1E1SerialFeatureTemplate#tunnel_interface_allow_dns}
  */
  readonly tunnelInterfaceAllowDns?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_t1_e1_serial_feature_template#tunnel_interface_allow_dns_variable VpnInterfaceT1E1SerialFeatureTemplate#tunnel_interface_allow_dns_variable}
  */
  readonly tunnelInterfaceAllowDnsVariable?: string;
  /**
  * Allow/Deny Https
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_t1_e1_serial_feature_template#tunnel_interface_allow_https VpnInterfaceT1E1SerialFeatureTemplate#tunnel_interface_allow_https}
  */
  readonly tunnelInterfaceAllowHttps?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_t1_e1_serial_feature_template#tunnel_interface_allow_https_variable VpnInterfaceT1E1SerialFeatureTemplate#tunnel_interface_allow_https_variable}
  */
  readonly tunnelInterfaceAllowHttpsVariable?: string;
  /**
  * Allow/Deny ICMP
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_t1_e1_serial_feature_template#tunnel_interface_allow_icmp VpnInterfaceT1E1SerialFeatureTemplate#tunnel_interface_allow_icmp}
  */
  readonly tunnelInterfaceAllowIcmp?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_t1_e1_serial_feature_template#tunnel_interface_allow_icmp_variable VpnInterfaceT1E1SerialFeatureTemplate#tunnel_interface_allow_icmp_variable}
  */
  readonly tunnelInterfaceAllowIcmpVariable?: string;
  /**
  * Allow/Deny NETCONF
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_t1_e1_serial_feature_template#tunnel_interface_allow_netconf VpnInterfaceT1E1SerialFeatureTemplate#tunnel_interface_allow_netconf}
  */
  readonly tunnelInterfaceAllowNetconf?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_t1_e1_serial_feature_template#tunnel_interface_allow_netconf_variable VpnInterfaceT1E1SerialFeatureTemplate#tunnel_interface_allow_netconf_variable}
  */
  readonly tunnelInterfaceAllowNetconfVariable?: string;
  /**
  * Allow/Deny NTP
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_t1_e1_serial_feature_template#tunnel_interface_allow_ntp VpnInterfaceT1E1SerialFeatureTemplate#tunnel_interface_allow_ntp}
  */
  readonly tunnelInterfaceAllowNtp?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_t1_e1_serial_feature_template#tunnel_interface_allow_ntp_variable VpnInterfaceT1E1SerialFeatureTemplate#tunnel_interface_allow_ntp_variable}
  */
  readonly tunnelInterfaceAllowNtpVariable?: string;
  /**
  * Allow/Deny OSPF
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_t1_e1_serial_feature_template#tunnel_interface_allow_ospf VpnInterfaceT1E1SerialFeatureTemplate#tunnel_interface_allow_ospf}
  */
  readonly tunnelInterfaceAllowOspf?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_t1_e1_serial_feature_template#tunnel_interface_allow_ospf_variable VpnInterfaceT1E1SerialFeatureTemplate#tunnel_interface_allow_ospf_variable}
  */
  readonly tunnelInterfaceAllowOspfVariable?: string;
  /**
  * Allow/Deny SNMP
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_t1_e1_serial_feature_template#tunnel_interface_allow_snmp VpnInterfaceT1E1SerialFeatureTemplate#tunnel_interface_allow_snmp}
  */
  readonly tunnelInterfaceAllowSnmp?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_t1_e1_serial_feature_template#tunnel_interface_allow_snmp_variable VpnInterfaceT1E1SerialFeatureTemplate#tunnel_interface_allow_snmp_variable}
  */
  readonly tunnelInterfaceAllowSnmpVariable?: string;
  /**
  * Allow/Deny SSH
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_t1_e1_serial_feature_template#tunnel_interface_allow_ssh VpnInterfaceT1E1SerialFeatureTemplate#tunnel_interface_allow_ssh}
  */
  readonly tunnelInterfaceAllowSsh?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_t1_e1_serial_feature_template#tunnel_interface_allow_ssh_variable VpnInterfaceT1E1SerialFeatureTemplate#tunnel_interface_allow_ssh_variable}
  */
  readonly tunnelInterfaceAllowSshVariable?: string;
  /**
  * Allow/Deny STUN
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_t1_e1_serial_feature_template#tunnel_interface_allow_stun VpnInterfaceT1E1SerialFeatureTemplate#tunnel_interface_allow_stun}
  */
  readonly tunnelInterfaceAllowStun?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_t1_e1_serial_feature_template#tunnel_interface_allow_stun_variable VpnInterfaceT1E1SerialFeatureTemplate#tunnel_interface_allow_stun_variable}
  */
  readonly tunnelInterfaceAllowStunVariable?: string;
  /**
  * Bind loopback tunnel interface to a physical interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_t1_e1_serial_feature_template#tunnel_interface_bind_loopback_tunnel VpnInterfaceT1E1SerialFeatureTemplate#tunnel_interface_bind_loopback_tunnel}
  */
  readonly tunnelInterfaceBindLoopbackTunnel?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_t1_e1_serial_feature_template#tunnel_interface_bind_loopback_tunnel_variable VpnInterfaceT1E1SerialFeatureTemplate#tunnel_interface_bind_loopback_tunnel_variable}
  */
  readonly tunnelInterfaceBindLoopbackTunnelVariable?: string;
  /**
  * Set TLOC as border TLOC
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_t1_e1_serial_feature_template#tunnel_interface_border VpnInterfaceT1E1SerialFeatureTemplate#tunnel_interface_border}
  */
  readonly tunnelInterfaceBorder?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_t1_e1_serial_feature_template#tunnel_interface_border_variable VpnInterfaceT1E1SerialFeatureTemplate#tunnel_interface_border_variable}
  */
  readonly tunnelInterfaceBorderVariable?: string;
  /**
  * Set carrier for TLOC
  *   - Choices: `default`, `carrier1`, `carrier2`, `carrier3`, `carrier4`, `carrier5`, `carrier6`, `carrier7`, `carrier8`
  *   - Default value: `default`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_t1_e1_serial_feature_template#tunnel_interface_carrier VpnInterfaceT1E1SerialFeatureTemplate#tunnel_interface_carrier}
  */
  readonly tunnelInterfaceCarrier?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_t1_e1_serial_feature_template#tunnel_interface_carrier_variable VpnInterfaceT1E1SerialFeatureTemplate#tunnel_interface_carrier_variable}
  */
  readonly tunnelInterfaceCarrierVariable?: string;
  /**
  * Enable clear dont fragment (Currently Only SDWAN Tunnel Interface)
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_t1_e1_serial_feature_template#tunnel_interface_clear_dont_fragment VpnInterfaceT1E1SerialFeatureTemplate#tunnel_interface_clear_dont_fragment}
  */
  readonly tunnelInterfaceClearDontFragment?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_t1_e1_serial_feature_template#tunnel_interface_clear_dont_fragment_variable VpnInterfaceT1E1SerialFeatureTemplate#tunnel_interface_clear_dont_fragment_variable}
  */
  readonly tunnelInterfaceClearDontFragmentVariable?: string;
  /**
  * Set color for TLOC
  *   - Choices: `default`, `mpls`, `metro-ethernet`, `biz-internet`, `public-internet`, `lte`, `3g`, `red`, `green`, `blue`, `gold`, `silver`, `bronze`, `custom1`, `custom2`, `custom3`, `private1`, `private2`, `private3`, `private4`, `private5`, `private6`
  *   - Default value: `default`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_t1_e1_serial_feature_template#tunnel_interface_color VpnInterfaceT1E1SerialFeatureTemplate#tunnel_interface_color}
  */
  readonly tunnelInterfaceColor?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_t1_e1_serial_feature_template#tunnel_interface_color_variable VpnInterfaceT1E1SerialFeatureTemplate#tunnel_interface_color_variable}
  */
  readonly tunnelInterfaceColorVariable?: string;
  /**
  * Set the maximum number of control connections for this TLOC
  *   - Range: `0`-`8`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_t1_e1_serial_feature_template#tunnel_interface_control_connections VpnInterfaceT1E1SerialFeatureTemplate#tunnel_interface_control_connections}
  */
  readonly tunnelInterfaceControlConnections?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_t1_e1_serial_feature_template#tunnel_interface_control_connections_variable VpnInterfaceT1E1SerialFeatureTemplate#tunnel_interface_control_connections_variable}
  */
  readonly tunnelInterfaceControlConnectionsVariable?: string;
  /**
  * Encapsulation for TLOC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_t1_e1_serial_feature_template#tunnel_interface_encapsulations VpnInterfaceT1E1SerialFeatureTemplate#tunnel_interface_encapsulations}
  */
  readonly tunnelInterfaceEncapsulations?: VpnInterfaceT1E1SerialFeatureTemplateTunnelInterfaceEncapsulations[] | cdktf.IResolvable;
  /**
  * Exclude the following controller groups defined in this list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_t1_e1_serial_feature_template#tunnel_interface_exclude_controller_group_list VpnInterfaceT1E1SerialFeatureTemplate#tunnel_interface_exclude_controller_group_list}
  */
  readonly tunnelInterfaceExcludeControllerGroupList?: number[];
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_t1_e1_serial_feature_template#tunnel_interface_exclude_controller_group_list_variable VpnInterfaceT1E1SerialFeatureTemplate#tunnel_interface_exclude_controller_group_list_variable}
  */
  readonly tunnelInterfaceExcludeControllerGroupListVariable?: string;
  /**
  * List of groups
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_t1_e1_serial_feature_template#tunnel_interface_groups VpnInterfaceT1E1SerialFeatureTemplate#tunnel_interface_groups}
  */
  readonly tunnelInterfaceGroups?: number[];
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_t1_e1_serial_feature_template#tunnel_interface_groups_variable VpnInterfaceT1E1SerialFeatureTemplate#tunnel_interface_groups_variable}
  */
  readonly tunnelInterfaceGroupsVariable?: string;
  /**
  * Set time period of control hello packets <100..600000> milli seconds
  *   - Range: `100`-`600000`
  *   - Default value: `1000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_t1_e1_serial_feature_template#tunnel_interface_hello_interval VpnInterfaceT1E1SerialFeatureTemplate#tunnel_interface_hello_interval}
  */
  readonly tunnelInterfaceHelloInterval?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_t1_e1_serial_feature_template#tunnel_interface_hello_interval_variable VpnInterfaceT1E1SerialFeatureTemplate#tunnel_interface_hello_interval_variable}
  */
  readonly tunnelInterfaceHelloIntervalVariable?: string;
  /**
  * Set tolerance of control hello packets <12..6000> seconds
  *   - Range: `12`-`6000`
  *   - Default value: `12`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_t1_e1_serial_feature_template#tunnel_interface_hello_tolerance VpnInterfaceT1E1SerialFeatureTemplate#tunnel_interface_hello_tolerance}
  */
  readonly tunnelInterfaceHelloTolerance?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_t1_e1_serial_feature_template#tunnel_interface_hello_tolerance_variable VpnInterfaceT1E1SerialFeatureTemplate#tunnel_interface_hello_tolerance_variable}
  */
  readonly tunnelInterfaceHelloToleranceVariable?: string;
  /**
  * Set TLOC as last resort
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_t1_e1_serial_feature_template#tunnel_interface_last_resort_circuit VpnInterfaceT1E1SerialFeatureTemplate#tunnel_interface_last_resort_circuit}
  */
  readonly tunnelInterfaceLastResortCircuit?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_t1_e1_serial_feature_template#tunnel_interface_last_resort_circuit_variable VpnInterfaceT1E1SerialFeatureTemplate#tunnel_interface_last_resort_circuit_variable}
  */
  readonly tunnelInterfaceLastResortCircuitVariable?: string;
  /**
  * Set the interface as a low-bandwidth circuit
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_t1_e1_serial_feature_template#tunnel_interface_low_bandwidth_link VpnInterfaceT1E1SerialFeatureTemplate#tunnel_interface_low_bandwidth_link}
  */
  readonly tunnelInterfaceLowBandwidthLink?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_t1_e1_serial_feature_template#tunnel_interface_low_bandwidth_link_variable VpnInterfaceT1E1SerialFeatureTemplate#tunnel_interface_low_bandwidth_link_variable}
  */
  readonly tunnelInterfaceLowBandwidthLinkVariable?: string;
  /**
  * Set time period of nat refresh packets <1...60> seconds
  *   - Range: `1`-`60`
  *   - Default value: `5`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_t1_e1_serial_feature_template#tunnel_interface_nat_refresh_interval VpnInterfaceT1E1SerialFeatureTemplate#tunnel_interface_nat_refresh_interval}
  */
  readonly tunnelInterfaceNatRefreshInterval?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_t1_e1_serial_feature_template#tunnel_interface_nat_refresh_interval_variable VpnInterfaceT1E1SerialFeatureTemplate#tunnel_interface_nat_refresh_interval_variable}
  */
  readonly tunnelInterfaceNatRefreshIntervalVariable?: string;
  /**
  * Accept and respond to network-prefix-directed broadcasts)
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_t1_e1_serial_feature_template#tunnel_interface_network_broadcast VpnInterfaceT1E1SerialFeatureTemplate#tunnel_interface_network_broadcast}
  */
  readonly tunnelInterfaceNetworkBroadcast?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_t1_e1_serial_feature_template#tunnel_interface_network_broadcast_variable VpnInterfaceT1E1SerialFeatureTemplate#tunnel_interface_network_broadcast_variable}
  */
  readonly tunnelInterfaceNetworkBroadcastVariable?: string;
  /**
  * Disallow port hopping on the tunnel interface
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_t1_e1_serial_feature_template#tunnel_interface_port_hop VpnInterfaceT1E1SerialFeatureTemplate#tunnel_interface_port_hop}
  */
  readonly tunnelInterfacePortHop?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_t1_e1_serial_feature_template#tunnel_interface_port_hop_variable VpnInterfaceT1E1SerialFeatureTemplate#tunnel_interface_port_hop_variable}
  */
  readonly tunnelInterfacePortHopVariable?: string;
  /**
  * Restrict this TLOC behavior
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_t1_e1_serial_feature_template#tunnel_interface_restrict VpnInterfaceT1E1SerialFeatureTemplate#tunnel_interface_restrict}
  */
  readonly tunnelInterfaceRestrict?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_t1_e1_serial_feature_template#tunnel_interface_restrict_variable VpnInterfaceT1E1SerialFeatureTemplate#tunnel_interface_restrict_variable}
  */
  readonly tunnelInterfaceRestrictVariable?: string;
  /**
  * Tunnel TCP MSS on SYN packets, in bytes
  *   - Range: `500`-`1460`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_t1_e1_serial_feature_template#tunnel_interface_tunnel_tcp_mss VpnInterfaceT1E1SerialFeatureTemplate#tunnel_interface_tunnel_tcp_mss}
  */
  readonly tunnelInterfaceTunnelTcpMss?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_t1_e1_serial_feature_template#tunnel_interface_tunnel_tcp_mss_variable VpnInterfaceT1E1SerialFeatureTemplate#tunnel_interface_tunnel_tcp_mss_variable}
  */
  readonly tunnelInterfaceTunnelTcpMssVariable?: string;
  /**
  * Put this wan interface in STUN mode only
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_t1_e1_serial_feature_template#tunnel_interface_vbond_as_stun_server VpnInterfaceT1E1SerialFeatureTemplate#tunnel_interface_vbond_as_stun_server}
  */
  readonly tunnelInterfaceVbondAsStunServer?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_t1_e1_serial_feature_template#tunnel_interface_vbond_as_stun_server_variable VpnInterfaceT1E1SerialFeatureTemplate#tunnel_interface_vbond_as_stun_server_variable}
  */
  readonly tunnelInterfaceVbondAsStunServerVariable?: string;
  /**
  * Set interface preference for control connection to vManage <0..8>
  *   - Range: `0`-`8`
  *   - Default value: `5`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_t1_e1_serial_feature_template#tunnel_interface_vmanage_connection_preference VpnInterfaceT1E1SerialFeatureTemplate#tunnel_interface_vmanage_connection_preference}
  */
  readonly tunnelInterfaceVmanageConnectionPreference?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_t1_e1_serial_feature_template#tunnel_interface_vmanage_connection_preference_variable VpnInterfaceT1E1SerialFeatureTemplate#tunnel_interface_vmanage_connection_preference_variable}
  */
  readonly tunnelInterfaceVmanageConnectionPreferenceVariable?: string;
  /**
  * Set tunnel QoS mode
  *   - Choices: `spoke`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_t1_e1_serial_feature_template#tunnel_qos_mode VpnInterfaceT1E1SerialFeatureTemplate#tunnel_qos_mode}
  */
  readonly tunnelQosMode?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_t1_e1_serial_feature_template#tunnel_qos_mode_variable VpnInterfaceT1E1SerialFeatureTemplate#tunnel_qos_mode_variable}
  */
  readonly tunnelQosModeVariable?: string;
  /**
  * Name of rewrite rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_t1_e1_serial_feature_template#write_rule VpnInterfaceT1E1SerialFeatureTemplate#write_rule}
  */
  readonly writeRule?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_t1_e1_serial_feature_template#write_rule_variable VpnInterfaceT1E1SerialFeatureTemplate#write_rule_variable}
  */
  readonly writeRuleVariable?: string;
}
export interface VpnInterfaceT1E1SerialFeatureTemplateIpv4AccessLists {
  /**
  * Name of access list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_t1_e1_serial_feature_template#acl_name VpnInterfaceT1E1SerialFeatureTemplate#acl_name}
  */
  readonly aclName?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_t1_e1_serial_feature_template#acl_name_variable VpnInterfaceT1E1SerialFeatureTemplate#acl_name_variable}
  */
  readonly aclNameVariable?: string;
  /**
  * Direction
  *   - Choices: `in`, `out`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_t1_e1_serial_feature_template#direction VpnInterfaceT1E1SerialFeatureTemplate#direction}
  */
  readonly direction?: string;
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_t1_e1_serial_feature_template#optional VpnInterfaceT1E1SerialFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function vpnInterfaceT1E1SerialFeatureTemplateIpv4AccessListsToTerraform(struct?: VpnInterfaceT1E1SerialFeatureTemplateIpv4AccessLists | cdktf.IResolvable): any {
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


export function vpnInterfaceT1E1SerialFeatureTemplateIpv4AccessListsToHclTerraform(struct?: VpnInterfaceT1E1SerialFeatureTemplateIpv4AccessLists | cdktf.IResolvable): any {
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

export class VpnInterfaceT1E1SerialFeatureTemplateIpv4AccessListsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpnInterfaceT1E1SerialFeatureTemplateIpv4AccessLists | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VpnInterfaceT1E1SerialFeatureTemplateIpv4AccessLists | cdktf.IResolvable | undefined) {
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

export class VpnInterfaceT1E1SerialFeatureTemplateIpv4AccessListsList extends cdktf.ComplexList {
  public internalValue? : VpnInterfaceT1E1SerialFeatureTemplateIpv4AccessLists[] | cdktf.IResolvable

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
  public get(index: number): VpnInterfaceT1E1SerialFeatureTemplateIpv4AccessListsOutputReference {
    return new VpnInterfaceT1E1SerialFeatureTemplateIpv4AccessListsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VpnInterfaceT1E1SerialFeatureTemplateIpv6AccessLists {
  /**
  * Name of access list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_t1_e1_serial_feature_template#acl_name VpnInterfaceT1E1SerialFeatureTemplate#acl_name}
  */
  readonly aclName?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_t1_e1_serial_feature_template#acl_name_variable VpnInterfaceT1E1SerialFeatureTemplate#acl_name_variable}
  */
  readonly aclNameVariable?: string;
  /**
  * Direction
  *   - Choices: `in`, `out`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_t1_e1_serial_feature_template#direction VpnInterfaceT1E1SerialFeatureTemplate#direction}
  */
  readonly direction?: string;
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_t1_e1_serial_feature_template#optional VpnInterfaceT1E1SerialFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function vpnInterfaceT1E1SerialFeatureTemplateIpv6AccessListsToTerraform(struct?: VpnInterfaceT1E1SerialFeatureTemplateIpv6AccessLists | cdktf.IResolvable): any {
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


export function vpnInterfaceT1E1SerialFeatureTemplateIpv6AccessListsToHclTerraform(struct?: VpnInterfaceT1E1SerialFeatureTemplateIpv6AccessLists | cdktf.IResolvable): any {
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

export class VpnInterfaceT1E1SerialFeatureTemplateIpv6AccessListsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpnInterfaceT1E1SerialFeatureTemplateIpv6AccessLists | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VpnInterfaceT1E1SerialFeatureTemplateIpv6AccessLists | cdktf.IResolvable | undefined) {
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

export class VpnInterfaceT1E1SerialFeatureTemplateIpv6AccessListsList extends cdktf.ComplexList {
  public internalValue? : VpnInterfaceT1E1SerialFeatureTemplateIpv6AccessLists[] | cdktf.IResolvable

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
  public get(index: number): VpnInterfaceT1E1SerialFeatureTemplateIpv6AccessListsOutputReference {
    return new VpnInterfaceT1E1SerialFeatureTemplateIpv6AccessListsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VpnInterfaceT1E1SerialFeatureTemplateTunnelInterfaceEncapsulations {
  /**
  * Encapsulation
  *   - Choices: `gre`, `ipsec`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_t1_e1_serial_feature_template#encapsulation VpnInterfaceT1E1SerialFeatureTemplate#encapsulation}
  */
  readonly encapsulation?: string;
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_t1_e1_serial_feature_template#optional VpnInterfaceT1E1SerialFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * Set preference for TLOC
  *   - Range: `0`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_t1_e1_serial_feature_template#preference VpnInterfaceT1E1SerialFeatureTemplate#preference}
  */
  readonly preference?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_t1_e1_serial_feature_template#preference_variable VpnInterfaceT1E1SerialFeatureTemplate#preference_variable}
  */
  readonly preferenceVariable?: string;
  /**
  * Set weight for TLOC
  *   - Range: `1`-`255`
  *   - Default value: `1`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_t1_e1_serial_feature_template#weight VpnInterfaceT1E1SerialFeatureTemplate#weight}
  */
  readonly weight?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_t1_e1_serial_feature_template#weight_variable VpnInterfaceT1E1SerialFeatureTemplate#weight_variable}
  */
  readonly weightVariable?: string;
}

export function vpnInterfaceT1E1SerialFeatureTemplateTunnelInterfaceEncapsulationsToTerraform(struct?: VpnInterfaceT1E1SerialFeatureTemplateTunnelInterfaceEncapsulations | cdktf.IResolvable): any {
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


export function vpnInterfaceT1E1SerialFeatureTemplateTunnelInterfaceEncapsulationsToHclTerraform(struct?: VpnInterfaceT1E1SerialFeatureTemplateTunnelInterfaceEncapsulations | cdktf.IResolvable): any {
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

export class VpnInterfaceT1E1SerialFeatureTemplateTunnelInterfaceEncapsulationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpnInterfaceT1E1SerialFeatureTemplateTunnelInterfaceEncapsulations | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VpnInterfaceT1E1SerialFeatureTemplateTunnelInterfaceEncapsulations | cdktf.IResolvable | undefined) {
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

export class VpnInterfaceT1E1SerialFeatureTemplateTunnelInterfaceEncapsulationsList extends cdktf.ComplexList {
  public internalValue? : VpnInterfaceT1E1SerialFeatureTemplateTunnelInterfaceEncapsulations[] | cdktf.IResolvable

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
  public get(index: number): VpnInterfaceT1E1SerialFeatureTemplateTunnelInterfaceEncapsulationsOutputReference {
    return new VpnInterfaceT1E1SerialFeatureTemplateTunnelInterfaceEncapsulationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_t1_e1_serial_feature_template sdwan_vpn_interface_t1_e1_serial_feature_template}
*/
export class VpnInterfaceT1E1SerialFeatureTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_vpn_interface_t1_e1_serial_feature_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VpnInterfaceT1E1SerialFeatureTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VpnInterfaceT1E1SerialFeatureTemplate to import
  * @param importFromId The id of the existing VpnInterfaceT1E1SerialFeatureTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_t1_e1_serial_feature_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VpnInterfaceT1E1SerialFeatureTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_vpn_interface_t1_e1_serial_feature_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_t1_e1_serial_feature_template sdwan_vpn_interface_t1_e1_serial_feature_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpnInterfaceT1E1SerialFeatureTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: VpnInterfaceT1E1SerialFeatureTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_vpn_interface_t1_e1_serial_feature_template',
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
    this._autonegotiate = config.autonegotiate;
    this._autonegotiateVariable = config.autonegotiateVariable;
    this._clearDontFragmentBit = config.clearDontFragmentBit;
    this._clearDontFragmentBitVariable = config.clearDontFragmentBitVariable;
    this._clockRate = config.clockRate;
    this._clockRateVariable = config.clockRateVariable;
    this._coreRegion = config.coreRegion;
    this._coreRegionVariable = config.coreRegionVariable;
    this._description = config.description;
    this._deviceTypes = config.deviceTypes;
    this._enableCoreRegion = config.enableCoreRegion;
    this._enableCoreRegionVariable = config.enableCoreRegionVariable;
    this._encapsulation = config.encapsulation;
    this._encapsulationVariable = config.encapsulationVariable;
    this._interfaceBandwidthCapacity = config.interfaceBandwidthCapacity;
    this._interfaceBandwidthCapacityVariable = config.interfaceBandwidthCapacityVariable;
    this._interfaceDescription = config.interfaceDescription;
    this._interfaceDescriptionVariable = config.interfaceDescriptionVariable;
    this._interfaceDownstreamBandwidthCapacity = config.interfaceDownstreamBandwidthCapacity;
    this._interfaceDownstreamBandwidthCapacityVariable = config.interfaceDownstreamBandwidthCapacityVariable;
    this._ipMtu = config.ipMtu;
    this._ipMtuVariable = config.ipMtuVariable;
    this._ipv4AccessLists.internalValue = config.ipv4AccessLists;
    this._ipv4Address = config.ipv4Address;
    this._ipv4AddressVariable = config.ipv4AddressVariable;
    this._ipv6AccessLists.internalValue = config.ipv6AccessLists;
    this._ipv6Address = config.ipv6Address;
    this._ipv6AddressVariable = config.ipv6AddressVariable;
    this._name = config.name;
    this._perTunnelQos = config.perTunnelQos;
    this._perTunnelQosAggregator = config.perTunnelQosAggregator;
    this._perTunnelQosAggregatorVariable = config.perTunnelQosAggregatorVariable;
    this._perTunnelQosVariable = config.perTunnelQosVariable;
    this._pmtuDiscovery = config.pmtuDiscovery;
    this._pmtuDiscoveryVariable = config.pmtuDiscoveryVariable;
    this._qosMap = config.qosMap;
    this._qosMapVariable = config.qosMapVariable;
    this._qosMapVpn = config.qosMapVpn;
    this._qosMapVpnVariable = config.qosMapVpnVariable;
    this._secondaryRegion = config.secondaryRegion;
    this._secondaryRegionVariable = config.secondaryRegionVariable;
    this._serialInterfaceName = config.serialInterfaceName;
    this._serialInterfaceNameVariable = config.serialInterfaceNameVariable;
    this._shapingRate = config.shapingRate;
    this._shapingRateVariable = config.shapingRateVariable;
    this._shutdown = config.shutdown;
    this._shutdownVariable = config.shutdownVariable;
    this._staticIngressQos = config.staticIngressQos;
    this._staticIngressQosVariable = config.staticIngressQosVariable;
    this._tcpMss = config.tcpMss;
    this._tcpMssVariable = config.tcpMssVariable;
    this._tlocExtension = config.tlocExtension;
    this._tlocExtensionVariable = config.tlocExtensionVariable;
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
    this._tunnelInterfaceNatRefreshInterval = config.tunnelInterfaceNatRefreshInterval;
    this._tunnelInterfaceNatRefreshIntervalVariable = config.tunnelInterfaceNatRefreshIntervalVariable;
    this._tunnelInterfaceNetworkBroadcast = config.tunnelInterfaceNetworkBroadcast;
    this._tunnelInterfaceNetworkBroadcastVariable = config.tunnelInterfaceNetworkBroadcastVariable;
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
    this._writeRule = config.writeRule;
    this._writeRuleVariable = config.writeRuleVariable;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // clear_dont_fragment_bit - computed: false, optional: true, required: false
  private _clearDontFragmentBit?: boolean | cdktf.IResolvable; 
  public get clearDontFragmentBit() {
    return this.getBooleanAttribute('clear_dont_fragment_bit');
  }
  public set clearDontFragmentBit(value: boolean | cdktf.IResolvable) {
    this._clearDontFragmentBit = value;
  }
  public resetClearDontFragmentBit() {
    this._clearDontFragmentBit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearDontFragmentBitInput() {
    return this._clearDontFragmentBit;
  }

  // clear_dont_fragment_bit_variable - computed: false, optional: true, required: false
  private _clearDontFragmentBitVariable?: string; 
  public get clearDontFragmentBitVariable() {
    return this.getStringAttribute('clear_dont_fragment_bit_variable');
  }
  public set clearDontFragmentBitVariable(value: string) {
    this._clearDontFragmentBitVariable = value;
  }
  public resetClearDontFragmentBitVariable() {
    this._clearDontFragmentBitVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearDontFragmentBitVariableInput() {
    return this._clearDontFragmentBitVariable;
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

  // enable_core_region_variable - computed: false, optional: true, required: false
  private _enableCoreRegionVariable?: string; 
  public get enableCoreRegionVariable() {
    return this.getStringAttribute('enable_core_region_variable');
  }
  public set enableCoreRegionVariable(value: string) {
    this._enableCoreRegionVariable = value;
  }
  public resetEnableCoreRegionVariable() {
    this._enableCoreRegionVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableCoreRegionVariableInput() {
    return this._enableCoreRegionVariable;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // interface_bandwidth_capacity - computed: false, optional: true, required: false
  private _interfaceBandwidthCapacity?: number; 
  public get interfaceBandwidthCapacity() {
    return this.getNumberAttribute('interface_bandwidth_capacity');
  }
  public set interfaceBandwidthCapacity(value: number) {
    this._interfaceBandwidthCapacity = value;
  }
  public resetInterfaceBandwidthCapacity() {
    this._interfaceBandwidthCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceBandwidthCapacityInput() {
    return this._interfaceBandwidthCapacity;
  }

  // interface_bandwidth_capacity_variable - computed: false, optional: true, required: false
  private _interfaceBandwidthCapacityVariable?: string; 
  public get interfaceBandwidthCapacityVariable() {
    return this.getStringAttribute('interface_bandwidth_capacity_variable');
  }
  public set interfaceBandwidthCapacityVariable(value: string) {
    this._interfaceBandwidthCapacityVariable = value;
  }
  public resetInterfaceBandwidthCapacityVariable() {
    this._interfaceBandwidthCapacityVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceBandwidthCapacityVariableInput() {
    return this._interfaceBandwidthCapacityVariable;
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

  // interface_downstream_bandwidth_capacity - computed: false, optional: true, required: false
  private _interfaceDownstreamBandwidthCapacity?: number; 
  public get interfaceDownstreamBandwidthCapacity() {
    return this.getNumberAttribute('interface_downstream_bandwidth_capacity');
  }
  public set interfaceDownstreamBandwidthCapacity(value: number) {
    this._interfaceDownstreamBandwidthCapacity = value;
  }
  public resetInterfaceDownstreamBandwidthCapacity() {
    this._interfaceDownstreamBandwidthCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceDownstreamBandwidthCapacityInput() {
    return this._interfaceDownstreamBandwidthCapacity;
  }

  // interface_downstream_bandwidth_capacity_variable - computed: false, optional: true, required: false
  private _interfaceDownstreamBandwidthCapacityVariable?: string; 
  public get interfaceDownstreamBandwidthCapacityVariable() {
    return this.getStringAttribute('interface_downstream_bandwidth_capacity_variable');
  }
  public set interfaceDownstreamBandwidthCapacityVariable(value: string) {
    this._interfaceDownstreamBandwidthCapacityVariable = value;
  }
  public resetInterfaceDownstreamBandwidthCapacityVariable() {
    this._interfaceDownstreamBandwidthCapacityVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceDownstreamBandwidthCapacityVariableInput() {
    return this._interfaceDownstreamBandwidthCapacityVariable;
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

  // ipv4_access_lists - computed: false, optional: true, required: false
  private _ipv4AccessLists = new VpnInterfaceT1E1SerialFeatureTemplateIpv4AccessListsList(this, "ipv4_access_lists", false);
  public get ipv4AccessLists() {
    return this._ipv4AccessLists;
  }
  public putIpv4AccessLists(value: VpnInterfaceT1E1SerialFeatureTemplateIpv4AccessLists[] | cdktf.IResolvable) {
    this._ipv4AccessLists.internalValue = value;
  }
  public resetIpv4AccessLists() {
    this._ipv4AccessLists.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AccessListsInput() {
    return this._ipv4AccessLists.internalValue;
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

  // ipv6_access_lists - computed: false, optional: true, required: false
  private _ipv6AccessLists = new VpnInterfaceT1E1SerialFeatureTemplateIpv6AccessListsList(this, "ipv6_access_lists", false);
  public get ipv6AccessLists() {
    return this._ipv6AccessLists;
  }
  public putIpv6AccessLists(value: VpnInterfaceT1E1SerialFeatureTemplateIpv6AccessLists[] | cdktf.IResolvable) {
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

  // pmtu_discovery - computed: false, optional: true, required: false
  private _pmtuDiscovery?: boolean | cdktf.IResolvable; 
  public get pmtuDiscovery() {
    return this.getBooleanAttribute('pmtu_discovery');
  }
  public set pmtuDiscovery(value: boolean | cdktf.IResolvable) {
    this._pmtuDiscovery = value;
  }
  public resetPmtuDiscovery() {
    this._pmtuDiscovery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pmtuDiscoveryInput() {
    return this._pmtuDiscovery;
  }

  // pmtu_discovery_variable - computed: false, optional: true, required: false
  private _pmtuDiscoveryVariable?: string; 
  public get pmtuDiscoveryVariable() {
    return this.getStringAttribute('pmtu_discovery_variable');
  }
  public set pmtuDiscoveryVariable(value: string) {
    this._pmtuDiscoveryVariable = value;
  }
  public resetPmtuDiscoveryVariable() {
    this._pmtuDiscoveryVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pmtuDiscoveryVariableInput() {
    return this._pmtuDiscoveryVariable;
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

  // serial_interface_name - computed: false, optional: true, required: false
  private _serialInterfaceName?: string; 
  public get serialInterfaceName() {
    return this.getStringAttribute('serial_interface_name');
  }
  public set serialInterfaceName(value: string) {
    this._serialInterfaceName = value;
  }
  public resetSerialInterfaceName() {
    this._serialInterfaceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serialInterfaceNameInput() {
    return this._serialInterfaceName;
  }

  // serial_interface_name_variable - computed: false, optional: true, required: false
  private _serialInterfaceNameVariable?: string; 
  public get serialInterfaceNameVariable() {
    return this.getStringAttribute('serial_interface_name_variable');
  }
  public set serialInterfaceNameVariable(value: string) {
    this._serialInterfaceNameVariable = value;
  }
  public resetSerialInterfaceNameVariable() {
    this._serialInterfaceNameVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serialInterfaceNameVariableInput() {
    return this._serialInterfaceNameVariable;
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

  // static_ingress_qos - computed: false, optional: true, required: false
  private _staticIngressQos?: number; 
  public get staticIngressQos() {
    return this.getNumberAttribute('static_ingress_qos');
  }
  public set staticIngressQos(value: number) {
    this._staticIngressQos = value;
  }
  public resetStaticIngressQos() {
    this._staticIngressQos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticIngressQosInput() {
    return this._staticIngressQos;
  }

  // static_ingress_qos_variable - computed: false, optional: true, required: false
  private _staticIngressQosVariable?: string; 
  public get staticIngressQosVariable() {
    return this.getStringAttribute('static_ingress_qos_variable');
  }
  public set staticIngressQosVariable(value: string) {
    this._staticIngressQosVariable = value;
  }
  public resetStaticIngressQosVariable() {
    this._staticIngressQosVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticIngressQosVariableInput() {
    return this._staticIngressQosVariable;
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
  private _tunnelInterfaceControlConnections?: number; 
  public get tunnelInterfaceControlConnections() {
    return this.getNumberAttribute('tunnel_interface_control_connections');
  }
  public set tunnelInterfaceControlConnections(value: number) {
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
  private _tunnelInterfaceEncapsulations = new VpnInterfaceT1E1SerialFeatureTemplateTunnelInterfaceEncapsulationsList(this, "tunnel_interface_encapsulations", false);
  public get tunnelInterfaceEncapsulations() {
    return this._tunnelInterfaceEncapsulations;
  }
  public putTunnelInterfaceEncapsulations(value: VpnInterfaceT1E1SerialFeatureTemplateTunnelInterfaceEncapsulations[] | cdktf.IResolvable) {
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
      autonegotiate: cdktf.booleanToTerraform(this._autonegotiate),
      autonegotiate_variable: cdktf.stringToTerraform(this._autonegotiateVariable),
      clear_dont_fragment_bit: cdktf.booleanToTerraform(this._clearDontFragmentBit),
      clear_dont_fragment_bit_variable: cdktf.stringToTerraform(this._clearDontFragmentBitVariable),
      clock_rate: cdktf.stringToTerraform(this._clockRate),
      clock_rate_variable: cdktf.stringToTerraform(this._clockRateVariable),
      core_region: cdktf.stringToTerraform(this._coreRegion),
      core_region_variable: cdktf.stringToTerraform(this._coreRegionVariable),
      description: cdktf.stringToTerraform(this._description),
      device_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._deviceTypes),
      enable_core_region: cdktf.booleanToTerraform(this._enableCoreRegion),
      enable_core_region_variable: cdktf.stringToTerraform(this._enableCoreRegionVariable),
      encapsulation: cdktf.stringToTerraform(this._encapsulation),
      encapsulation_variable: cdktf.stringToTerraform(this._encapsulationVariable),
      interface_bandwidth_capacity: cdktf.numberToTerraform(this._interfaceBandwidthCapacity),
      interface_bandwidth_capacity_variable: cdktf.stringToTerraform(this._interfaceBandwidthCapacityVariable),
      interface_description: cdktf.stringToTerraform(this._interfaceDescription),
      interface_description_variable: cdktf.stringToTerraform(this._interfaceDescriptionVariable),
      interface_downstream_bandwidth_capacity: cdktf.numberToTerraform(this._interfaceDownstreamBandwidthCapacity),
      interface_downstream_bandwidth_capacity_variable: cdktf.stringToTerraform(this._interfaceDownstreamBandwidthCapacityVariable),
      ip_mtu: cdktf.numberToTerraform(this._ipMtu),
      ip_mtu_variable: cdktf.stringToTerraform(this._ipMtuVariable),
      ipv4_access_lists: cdktf.listMapper(vpnInterfaceT1E1SerialFeatureTemplateIpv4AccessListsToTerraform, false)(this._ipv4AccessLists.internalValue),
      ipv4_address: cdktf.stringToTerraform(this._ipv4Address),
      ipv4_address_variable: cdktf.stringToTerraform(this._ipv4AddressVariable),
      ipv6_access_lists: cdktf.listMapper(vpnInterfaceT1E1SerialFeatureTemplateIpv6AccessListsToTerraform, false)(this._ipv6AccessLists.internalValue),
      ipv6_address: cdktf.stringToTerraform(this._ipv6Address),
      ipv6_address_variable: cdktf.stringToTerraform(this._ipv6AddressVariable),
      name: cdktf.stringToTerraform(this._name),
      per_tunnel_qos: cdktf.booleanToTerraform(this._perTunnelQos),
      per_tunnel_qos_aggregator: cdktf.booleanToTerraform(this._perTunnelQosAggregator),
      per_tunnel_qos_aggregator_variable: cdktf.stringToTerraform(this._perTunnelQosAggregatorVariable),
      per_tunnel_qos_variable: cdktf.stringToTerraform(this._perTunnelQosVariable),
      pmtu_discovery: cdktf.booleanToTerraform(this._pmtuDiscovery),
      pmtu_discovery_variable: cdktf.stringToTerraform(this._pmtuDiscoveryVariable),
      qos_map: cdktf.stringToTerraform(this._qosMap),
      qos_map_variable: cdktf.stringToTerraform(this._qosMapVariable),
      qos_map_vpn: cdktf.stringToTerraform(this._qosMapVpn),
      qos_map_vpn_variable: cdktf.stringToTerraform(this._qosMapVpnVariable),
      secondary_region: cdktf.stringToTerraform(this._secondaryRegion),
      secondary_region_variable: cdktf.stringToTerraform(this._secondaryRegionVariable),
      serial_interface_name: cdktf.stringToTerraform(this._serialInterfaceName),
      serial_interface_name_variable: cdktf.stringToTerraform(this._serialInterfaceNameVariable),
      shaping_rate: cdktf.numberToTerraform(this._shapingRate),
      shaping_rate_variable: cdktf.stringToTerraform(this._shapingRateVariable),
      shutdown: cdktf.booleanToTerraform(this._shutdown),
      shutdown_variable: cdktf.stringToTerraform(this._shutdownVariable),
      static_ingress_qos: cdktf.numberToTerraform(this._staticIngressQos),
      static_ingress_qos_variable: cdktf.stringToTerraform(this._staticIngressQosVariable),
      tcp_mss: cdktf.numberToTerraform(this._tcpMss),
      tcp_mss_variable: cdktf.stringToTerraform(this._tcpMssVariable),
      tloc_extension: cdktf.stringToTerraform(this._tlocExtension),
      tloc_extension_variable: cdktf.stringToTerraform(this._tlocExtensionVariable),
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
      tunnel_interface_color_variable: cdktf.stringToTerraform(this._tunnelInterfaceColorVariable),
      tunnel_interface_control_connections: cdktf.numberToTerraform(this._tunnelInterfaceControlConnections),
      tunnel_interface_control_connections_variable: cdktf.stringToTerraform(this._tunnelInterfaceControlConnectionsVariable),
      tunnel_interface_encapsulations: cdktf.listMapper(vpnInterfaceT1E1SerialFeatureTemplateTunnelInterfaceEncapsulationsToTerraform, false)(this._tunnelInterfaceEncapsulations.internalValue),
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
      tunnel_interface_nat_refresh_interval: cdktf.numberToTerraform(this._tunnelInterfaceNatRefreshInterval),
      tunnel_interface_nat_refresh_interval_variable: cdktf.stringToTerraform(this._tunnelInterfaceNatRefreshIntervalVariable),
      tunnel_interface_network_broadcast: cdktf.booleanToTerraform(this._tunnelInterfaceNetworkBroadcast),
      tunnel_interface_network_broadcast_variable: cdktf.stringToTerraform(this._tunnelInterfaceNetworkBroadcastVariable),
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
      write_rule: cdktf.stringToTerraform(this._writeRule),
      write_rule_variable: cdktf.stringToTerraform(this._writeRuleVariable),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      clear_dont_fragment_bit: {
        value: cdktf.booleanToHclTerraform(this._clearDontFragmentBit),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      clear_dont_fragment_bit_variable: {
        value: cdktf.stringToHclTerraform(this._clearDontFragmentBitVariable),
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
      enable_core_region: {
        value: cdktf.booleanToHclTerraform(this._enableCoreRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_core_region_variable: {
        value: cdktf.stringToHclTerraform(this._enableCoreRegionVariable),
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
      interface_bandwidth_capacity: {
        value: cdktf.numberToHclTerraform(this._interfaceBandwidthCapacity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      interface_bandwidth_capacity_variable: {
        value: cdktf.stringToHclTerraform(this._interfaceBandwidthCapacityVariable),
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
      interface_downstream_bandwidth_capacity: {
        value: cdktf.numberToHclTerraform(this._interfaceDownstreamBandwidthCapacity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      interface_downstream_bandwidth_capacity_variable: {
        value: cdktf.stringToHclTerraform(this._interfaceDownstreamBandwidthCapacityVariable),
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
      ipv4_access_lists: {
        value: cdktf.listMapperHcl(vpnInterfaceT1E1SerialFeatureTemplateIpv4AccessListsToHclTerraform, false)(this._ipv4AccessLists.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VpnInterfaceT1E1SerialFeatureTemplateIpv4AccessListsList",
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
      ipv6_access_lists: {
        value: cdktf.listMapperHcl(vpnInterfaceT1E1SerialFeatureTemplateIpv6AccessListsToHclTerraform, false)(this._ipv6AccessLists.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VpnInterfaceT1E1SerialFeatureTemplateIpv6AccessListsList",
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
      pmtu_discovery: {
        value: cdktf.booleanToHclTerraform(this._pmtuDiscovery),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      pmtu_discovery_variable: {
        value: cdktf.stringToHclTerraform(this._pmtuDiscoveryVariable),
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
      serial_interface_name: {
        value: cdktf.stringToHclTerraform(this._serialInterfaceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      serial_interface_name_variable: {
        value: cdktf.stringToHclTerraform(this._serialInterfaceNameVariable),
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
      static_ingress_qos: {
        value: cdktf.numberToHclTerraform(this._staticIngressQos),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      static_ingress_qos_variable: {
        value: cdktf.stringToHclTerraform(this._staticIngressQosVariable),
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
      tunnel_interface_color_variable: {
        value: cdktf.stringToHclTerraform(this._tunnelInterfaceColorVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_interface_control_connections: {
        value: cdktf.numberToHclTerraform(this._tunnelInterfaceControlConnections),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tunnel_interface_control_connections_variable: {
        value: cdktf.stringToHclTerraform(this._tunnelInterfaceControlConnectionsVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_interface_encapsulations: {
        value: cdktf.listMapperHcl(vpnInterfaceT1E1SerialFeatureTemplateTunnelInterfaceEncapsulationsToHclTerraform, false)(this._tunnelInterfaceEncapsulations.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VpnInterfaceT1E1SerialFeatureTemplateTunnelInterfaceEncapsulationsList",
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
