// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpnInterfaceMultilinkFeatureTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Apply ACL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#access_lists VpnInterfaceMultilinkFeatureTemplate#access_lists}
  */
  readonly accessLists?: VpnInterfaceMultilinkFeatureTemplateAccessLists[] | cdktf.IResolvable;
  /**
  * Link autonegotiation
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#autonegotiate VpnInterfaceMultilinkFeatureTemplate#autonegotiate}
  */
  readonly autonegotiate?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#autonegotiate_variable VpnInterfaceMultilinkFeatureTemplate#autonegotiate_variable}
  */
  readonly autonegotiateVariable?: string;
  /**
  * Interface downstream bandwidth capacity, in kbps
  *   - Range: `1`-`2147483647`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#bandwidth_downstream VpnInterfaceMultilinkFeatureTemplate#bandwidth_downstream}
  */
  readonly bandwidthDownstream?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#bandwidth_downstream_variable VpnInterfaceMultilinkFeatureTemplate#bandwidth_downstream_variable}
  */
  readonly bandwidthDownstreamVariable?: string;
  /**
  * Interface upstream bandwidth capacity, in kbps
  *   - Range: `1`-`2147483647`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#bandwidth_upstream VpnInterfaceMultilinkFeatureTemplate#bandwidth_upstream}
  */
  readonly bandwidthUpstream?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#bandwidth_upstream_variable VpnInterfaceMultilinkFeatureTemplate#bandwidth_upstream_variable}
  */
  readonly bandwidthUpstreamVariable?: string;
  /**
  * CHAP Hostname
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#chap_hostname VpnInterfaceMultilinkFeatureTemplate#chap_hostname}
  */
  readonly chapHostname?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#chap_hostname_variable VpnInterfaceMultilinkFeatureTemplate#chap_hostname_variable}
  */
  readonly chapHostnameVariable?: string;
  /**
  * Specify ppp authentication Password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#chap_ppp_auth_password VpnInterfaceMultilinkFeatureTemplate#chap_ppp_auth_password}
  */
  readonly chapPppAuthPassword?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#chap_ppp_auth_password_variable VpnInterfaceMultilinkFeatureTemplate#chap_ppp_auth_password_variable}
  */
  readonly chapPppAuthPasswordVariable?: string;
  /**
  * Clear don't fragment bit
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#clear_dont_fragment_bit VpnInterfaceMultilinkFeatureTemplate#clear_dont_fragment_bit}
  */
  readonly clearDontFragmentBit?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#clear_dont_fragment_bit_variable VpnInterfaceMultilinkFeatureTemplate#clear_dont_fragment_bit_variable}
  */
  readonly clearDontFragmentBitVariable?: string;
  /**
  * Enable core region
  *   - Choices: `core`, `core-shared`
  *   - Default value: `core`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#core_region VpnInterfaceMultilinkFeatureTemplate#core_region}
  */
  readonly coreRegion?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#core_region_variable VpnInterfaceMultilinkFeatureTemplate#core_region_variable}
  */
  readonly coreRegionVariable?: string;
  /**
  * The description of the feature template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#description VpnInterfaceMultilinkFeatureTemplate#description}
  */
  readonly description: string;
  /**
  * List of supported device types
  *   - Choices: `vedge-C8000V`, `vedge-C8300-1N1S-4T2X`, `vedge-C8300-1N1S-6T`, `vedge-C8300-2N2S-6T`, `vedge-C8300-2N2S-4T2X`, `vedge-C8500-12X4QC`, `vedge-C8500-12X`, `vedge-C8500-20X6C`, `vedge-C8500L-8S4X`, `vedge-C8200-1N-4T`, `vedge-C8200L-1N-4T`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#device_types VpnInterfaceMultilinkFeatureTemplate#device_types}
  */
  readonly deviceTypes: string[];
  /**
  * Suppresss multilink fragmentation
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#disable_fragmentation VpnInterfaceMultilinkFeatureTemplate#disable_fragmentation}
  */
  readonly disableFragmentation?: boolean | cdktf.IResolvable;
  /**
  * Enable core region
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#enable_core_region VpnInterfaceMultilinkFeatureTemplate#enable_core_region}
  */
  readonly enableCoreRegion?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#enable_core_region_variable VpnInterfaceMultilinkFeatureTemplate#enable_core_region_variable}
  */
  readonly enableCoreRegionVariable?: string;
  /**
  * Maximum delay for each fragment
  *   - Range: `0`-`1000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#fragment_max_delay VpnInterfaceMultilinkFeatureTemplate#fragment_max_delay}
  */
  readonly fragmentMaxDelay?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#fragment_max_delay_variable VpnInterfaceMultilinkFeatureTemplate#fragment_max_delay_variable}
  */
  readonly fragmentMaxDelayVariable?: string;
  /**
  * Interface description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#interface_description VpnInterfaceMultilinkFeatureTemplate#interface_description}
  */
  readonly interfaceDescription?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#interface_description_variable VpnInterfaceMultilinkFeatureTemplate#interface_description_variable}
  */
  readonly interfaceDescriptionVariable?: string;
  /**
  * Interface Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#interface_name VpnInterfaceMultilinkFeatureTemplate#interface_name}
  */
  readonly interfaceName?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#interface_name_variable VpnInterfaceMultilinkFeatureTemplate#interface_name_variable}
  */
  readonly interfaceNameVariable?: string;
  /**
  * Allow interleaving of packets with fragments
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#interleaving_fragment VpnInterfaceMultilinkFeatureTemplate#interleaving_fragment}
  */
  readonly interleavingFragment?: boolean | cdktf.IResolvable;
  /**
  * Interface MTU <68...2000>, in bytes
  *   - Range: `68`-`2000`
  *   - Default value: `1500`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#ip_mtu VpnInterfaceMultilinkFeatureTemplate#ip_mtu}
  */
  readonly ipMtu?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#ip_mtu_variable VpnInterfaceMultilinkFeatureTemplate#ip_mtu_variable}
  */
  readonly ipMtuVariable?: string;
  /**
  * Assign IPv4 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#ipv4_address VpnInterfaceMultilinkFeatureTemplate#ipv4_address}
  */
  readonly ipv4Address?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#ipv4_address_variable VpnInterfaceMultilinkFeatureTemplate#ipv4_address_variable}
  */
  readonly ipv4AddressVariable?: string;
  /**
  * Apply IPv6 access list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#ipv6_access_lists VpnInterfaceMultilinkFeatureTemplate#ipv6_access_lists}
  */
  readonly ipv6AccessLists?: VpnInterfaceMultilinkFeatureTemplateIpv6AccessLists[] | cdktf.IResolvable;
  /**
  * Assign IPv6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#ipv6_address VpnInterfaceMultilinkFeatureTemplate#ipv6_address}
  */
  readonly ipv6Address?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#ipv6_address_variable VpnInterfaceMultilinkFeatureTemplate#ipv6_address_variable}
  */
  readonly ipv6AddressVariable?: string;
  /**
  * MultiLink Group Number
  *   - Range: `1`-`2147483647`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#multilink_group_number VpnInterfaceMultilinkFeatureTemplate#multilink_group_number}
  */
  readonly multilinkGroupNumber?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#multilink_group_number_variable VpnInterfaceMultilinkFeatureTemplate#multilink_group_number_variable}
  */
  readonly multilinkGroupNumberVariable?: string;
  /**
  * Controller tx-ex List
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#multilink_interfaces VpnInterfaceMultilinkFeatureTemplate#multilink_interfaces}
  */
  readonly multilinkInterfaces?: VpnInterfaceMultilinkFeatureTemplateMultilinkInterfaces[] | cdktf.IResolvable;
  /**
  * The name of the feature template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#name VpnInterfaceMultilinkFeatureTemplate#name}
  */
  readonly name: string;
  /**
  * Nim Interface List
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#nim_interface_list VpnInterfaceMultilinkFeatureTemplate#nim_interface_list}
  */
  readonly nimInterfaceList?: VpnInterfaceMultilinkFeatureTemplateNimInterfaceListStruct[] | cdktf.IResolvable;
  /**
  * PAP outbound Password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#pap_password VpnInterfaceMultilinkFeatureTemplate#pap_password}
  */
  readonly papPassword?: boolean | cdktf.IResolvable;
  /**
  * Specify ppp authentication Password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#pap_ppp_auth_password VpnInterfaceMultilinkFeatureTemplate#pap_ppp_auth_password}
  */
  readonly papPppAuthPassword?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#pap_ppp_auth_password_variable VpnInterfaceMultilinkFeatureTemplate#pap_ppp_auth_password_variable}
  */
  readonly papPppAuthPasswordVariable?: string;
  /**
  * PAP outbound Sent Username
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#pap_username VpnInterfaceMultilinkFeatureTemplate#pap_username}
  */
  readonly papUsername?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#pap_username_variable VpnInterfaceMultilinkFeatureTemplate#pap_username_variable}
  */
  readonly papUsernameVariable?: string;
  /**
  * Per-tunnel Qos
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#per_tunnel_qos VpnInterfaceMultilinkFeatureTemplate#per_tunnel_qos}
  */
  readonly perTunnelQos?: boolean | cdktf.IResolvable;
  /**
  * Per-tunnel QoS Aggregator
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#per_tunnel_qos_aggregator VpnInterfaceMultilinkFeatureTemplate#per_tunnel_qos_aggregator}
  */
  readonly perTunnelQosAggregator?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#per_tunnel_qos_aggregator_variable VpnInterfaceMultilinkFeatureTemplate#per_tunnel_qos_aggregator_variable}
  */
  readonly perTunnelQosAggregatorVariable?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#per_tunnel_qos_variable VpnInterfaceMultilinkFeatureTemplate#per_tunnel_qos_variable}
  */
  readonly perTunnelQosVariable?: string;
  /**
  * Path MTU Discovery
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#pmtu_discovery VpnInterfaceMultilinkFeatureTemplate#pmtu_discovery}
  */
  readonly pmtuDiscovery?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#pmtu_discovery_variable VpnInterfaceMultilinkFeatureTemplate#pmtu_discovery_variable}
  */
  readonly pmtuDiscoveryVariable?: string;
  /**
  * PPP Link Authentication Protocol
  *   - Choices: `chap`, `pap`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#ppp_authentication_protocol VpnInterfaceMultilinkFeatureTemplate#ppp_authentication_protocol}
  */
  readonly pppAuthenticationProtocol?: string;
  /**
  * PPP Authentication Protocol PAP
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#ppp_authentication_protocol_pap VpnInterfaceMultilinkFeatureTemplate#ppp_authentication_protocol_pap}
  */
  readonly pppAuthenticationProtocolPap?: boolean | cdktf.IResolvable;
  /**
  * Authenticate remote on incoming call only
  *   - Choices: `callin`, `false`
  *   - Default value: `callin`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#ppp_authentication_type VpnInterfaceMultilinkFeatureTemplate#ppp_authentication_type}
  */
  readonly pppAuthenticationType?: string;
  /**
  * Name of QoS map
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#qos_map VpnInterfaceMultilinkFeatureTemplate#qos_map}
  */
  readonly qosMap?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#qos_map_variable VpnInterfaceMultilinkFeatureTemplate#qos_map_variable}
  */
  readonly qosMapVariable?: string;
  /**
  * Name of VPN QoS map
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#qos_map_vpn VpnInterfaceMultilinkFeatureTemplate#qos_map_vpn}
  */
  readonly qosMapVpn?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#qos_map_vpn_variable VpnInterfaceMultilinkFeatureTemplate#qos_map_vpn_variable}
  */
  readonly qosMapVpnVariable?: string;
  /**
  * Enable secondary region
  *   - Choices: `off`, `secondary-only`, `secondary-shared`
  *   - Default value: `off`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#secondary_region VpnInterfaceMultilinkFeatureTemplate#secondary_region}
  */
  readonly secondaryRegion?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#secondary_region_variable VpnInterfaceMultilinkFeatureTemplate#secondary_region_variable}
  */
  readonly secondaryRegionVariable?: string;
  /**
  * 1ge  interfaces: [0..1000000]kbps; 10ge interfaces: [0..10000000]kbps
  *   - Range: `8`-`100000000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#shaping_rate VpnInterfaceMultilinkFeatureTemplate#shaping_rate}
  */
  readonly shapingRate?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#shaping_rate_variable VpnInterfaceMultilinkFeatureTemplate#shaping_rate_variable}
  */
  readonly shapingRateVariable?: string;
  /**
  * Administrative state
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#shutdown VpnInterfaceMultilinkFeatureTemplate#shutdown}
  */
  readonly shutdown?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#shutdown_variable VpnInterfaceMultilinkFeatureTemplate#shutdown_variable}
  */
  readonly shutdownVariable?: string;
  /**
  * Static ingress QoS for the port
  *   - Range: `0`-`7`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#static_ingress_qos VpnInterfaceMultilinkFeatureTemplate#static_ingress_qos}
  */
  readonly staticIngressQos?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#static_ingress_qos_variable VpnInterfaceMultilinkFeatureTemplate#static_ingress_qos_variable}
  */
  readonly staticIngressQosVariable?: string;
  /**
  * TCP MSS on SYN packets, in bytes
  *   - Range: `552`-`1960`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#tcp_mss VpnInterfaceMultilinkFeatureTemplate#tcp_mss}
  */
  readonly tcpMss?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#tcp_mss_variable VpnInterfaceMultilinkFeatureTemplate#tcp_mss_variable}
  */
  readonly tcpMssVariable?: string;
  /**
  * Extends a local TLOC to a remote node only for vpn 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#tloc_extension VpnInterfaceMultilinkFeatureTemplate#tloc_extension}
  */
  readonly tlocExtension?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#tloc_extension_variable VpnInterfaceMultilinkFeatureTemplate#tloc_extension_variable}
  */
  readonly tlocExtensionVariable?: string;
  /**
  * Allow all traffic. Overrides all other allow-service options if allow-service all is set
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#tunnel_interface_allow_all VpnInterfaceMultilinkFeatureTemplate#tunnel_interface_allow_all}
  */
  readonly tunnelInterfaceAllowAll?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#tunnel_interface_allow_all_variable VpnInterfaceMultilinkFeatureTemplate#tunnel_interface_allow_all_variable}
  */
  readonly tunnelInterfaceAllowAllVariable?: string;
  /**
  * Allow/deny BGP
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#tunnel_interface_allow_bgp VpnInterfaceMultilinkFeatureTemplate#tunnel_interface_allow_bgp}
  */
  readonly tunnelInterfaceAllowBgp?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#tunnel_interface_allow_bgp_variable VpnInterfaceMultilinkFeatureTemplate#tunnel_interface_allow_bgp_variable}
  */
  readonly tunnelInterfaceAllowBgpVariable?: string;
  /**
  * Allow/Deny DHCP
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#tunnel_interface_allow_dhcp VpnInterfaceMultilinkFeatureTemplate#tunnel_interface_allow_dhcp}
  */
  readonly tunnelInterfaceAllowDhcp?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#tunnel_interface_allow_dhcp_variable VpnInterfaceMultilinkFeatureTemplate#tunnel_interface_allow_dhcp_variable}
  */
  readonly tunnelInterfaceAllowDhcpVariable?: string;
  /**
  * Allow/Deny DNS
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#tunnel_interface_allow_dns VpnInterfaceMultilinkFeatureTemplate#tunnel_interface_allow_dns}
  */
  readonly tunnelInterfaceAllowDns?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#tunnel_interface_allow_dns_variable VpnInterfaceMultilinkFeatureTemplate#tunnel_interface_allow_dns_variable}
  */
  readonly tunnelInterfaceAllowDnsVariable?: string;
  /**
  * Allow/Deny Https
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#tunnel_interface_allow_https VpnInterfaceMultilinkFeatureTemplate#tunnel_interface_allow_https}
  */
  readonly tunnelInterfaceAllowHttps?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#tunnel_interface_allow_https_variable VpnInterfaceMultilinkFeatureTemplate#tunnel_interface_allow_https_variable}
  */
  readonly tunnelInterfaceAllowHttpsVariable?: string;
  /**
  * Allow/Deny ICMP
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#tunnel_interface_allow_icmp VpnInterfaceMultilinkFeatureTemplate#tunnel_interface_allow_icmp}
  */
  readonly tunnelInterfaceAllowIcmp?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#tunnel_interface_allow_icmp_variable VpnInterfaceMultilinkFeatureTemplate#tunnel_interface_allow_icmp_variable}
  */
  readonly tunnelInterfaceAllowIcmpVariable?: string;
  /**
  * Allow/Deny NETCONF
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#tunnel_interface_allow_netconf VpnInterfaceMultilinkFeatureTemplate#tunnel_interface_allow_netconf}
  */
  readonly tunnelInterfaceAllowNetconf?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#tunnel_interface_allow_netconf_variable VpnInterfaceMultilinkFeatureTemplate#tunnel_interface_allow_netconf_variable}
  */
  readonly tunnelInterfaceAllowNetconfVariable?: string;
  /**
  * Allow/Deny NTP
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#tunnel_interface_allow_ntp VpnInterfaceMultilinkFeatureTemplate#tunnel_interface_allow_ntp}
  */
  readonly tunnelInterfaceAllowNtp?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#tunnel_interface_allow_ntp_variable VpnInterfaceMultilinkFeatureTemplate#tunnel_interface_allow_ntp_variable}
  */
  readonly tunnelInterfaceAllowNtpVariable?: string;
  /**
  * Allow/Deny OSPF
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#tunnel_interface_allow_ospf VpnInterfaceMultilinkFeatureTemplate#tunnel_interface_allow_ospf}
  */
  readonly tunnelInterfaceAllowOspf?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#tunnel_interface_allow_ospf_variable VpnInterfaceMultilinkFeatureTemplate#tunnel_interface_allow_ospf_variable}
  */
  readonly tunnelInterfaceAllowOspfVariable?: string;
  /**
  * Allow/Deny SNMP
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#tunnel_interface_allow_snmp VpnInterfaceMultilinkFeatureTemplate#tunnel_interface_allow_snmp}
  */
  readonly tunnelInterfaceAllowSnmp?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#tunnel_interface_allow_snmp_variable VpnInterfaceMultilinkFeatureTemplate#tunnel_interface_allow_snmp_variable}
  */
  readonly tunnelInterfaceAllowSnmpVariable?: string;
  /**
  * Allow/Deny SSH
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#tunnel_interface_allow_ssh VpnInterfaceMultilinkFeatureTemplate#tunnel_interface_allow_ssh}
  */
  readonly tunnelInterfaceAllowSsh?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#tunnel_interface_allow_ssh_variable VpnInterfaceMultilinkFeatureTemplate#tunnel_interface_allow_ssh_variable}
  */
  readonly tunnelInterfaceAllowSshVariable?: string;
  /**
  * Allow/Deny STUN
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#tunnel_interface_allow_stun VpnInterfaceMultilinkFeatureTemplate#tunnel_interface_allow_stun}
  */
  readonly tunnelInterfaceAllowStun?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#tunnel_interface_allow_stun_variable VpnInterfaceMultilinkFeatureTemplate#tunnel_interface_allow_stun_variable}
  */
  readonly tunnelInterfaceAllowStunVariable?: string;
  /**
  * Bind loopback tunnel interface to a physical interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#tunnel_interface_bind_loopback_tunnel VpnInterfaceMultilinkFeatureTemplate#tunnel_interface_bind_loopback_tunnel}
  */
  readonly tunnelInterfaceBindLoopbackTunnel?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#tunnel_interface_bind_loopback_tunnel_variable VpnInterfaceMultilinkFeatureTemplate#tunnel_interface_bind_loopback_tunnel_variable}
  */
  readonly tunnelInterfaceBindLoopbackTunnelVariable?: string;
  /**
  * Set TLOC as border TLOC
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#tunnel_interface_border VpnInterfaceMultilinkFeatureTemplate#tunnel_interface_border}
  */
  readonly tunnelInterfaceBorder?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#tunnel_interface_border_variable VpnInterfaceMultilinkFeatureTemplate#tunnel_interface_border_variable}
  */
  readonly tunnelInterfaceBorderVariable?: string;
  /**
  * Set carrier for TLOC
  *   - Choices: `default`, `carrier1`, `carrier2`, `carrier3`, `carrier4`, `carrier5`, `carrier6`, `carrier7`, `carrier8`
  *   - Default value: `default`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#tunnel_interface_carrier VpnInterfaceMultilinkFeatureTemplate#tunnel_interface_carrier}
  */
  readonly tunnelInterfaceCarrier?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#tunnel_interface_carrier_variable VpnInterfaceMultilinkFeatureTemplate#tunnel_interface_carrier_variable}
  */
  readonly tunnelInterfaceCarrierVariable?: string;
  /**
  * Enable clear dont fragment (Currently Only SDWAN Tunnel Interface)
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#tunnel_interface_clear_dont_fragment VpnInterfaceMultilinkFeatureTemplate#tunnel_interface_clear_dont_fragment}
  */
  readonly tunnelInterfaceClearDontFragment?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#tunnel_interface_clear_dont_fragment_variable VpnInterfaceMultilinkFeatureTemplate#tunnel_interface_clear_dont_fragment_variable}
  */
  readonly tunnelInterfaceClearDontFragmentVariable?: string;
  /**
  * Set color for TLOC
  *   - Choices: `default`, `mpls`, `metro-ethernet`, `biz-internet`, `public-internet`, `lte`, `3g`, `red`, `green`, `blue`, `gold`, `silver`, `bronze`, `custom1`, `custom2`, `custom3`, `private1`, `private2`, `private3`, `private4`, `private5`, `private6`
  *   - Default value: `default`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#tunnel_interface_color VpnInterfaceMultilinkFeatureTemplate#tunnel_interface_color}
  */
  readonly tunnelInterfaceColor?: string;
  /**
  * Restrict this TLOC behavior
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#tunnel_interface_color_restrict VpnInterfaceMultilinkFeatureTemplate#tunnel_interface_color_restrict}
  */
  readonly tunnelInterfaceColorRestrict?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#tunnel_interface_color_variable VpnInterfaceMultilinkFeatureTemplate#tunnel_interface_color_variable}
  */
  readonly tunnelInterfaceColorVariable?: string;
  /**
  * Allow Control Connection
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#tunnel_interface_control_connections VpnInterfaceMultilinkFeatureTemplate#tunnel_interface_control_connections}
  */
  readonly tunnelInterfaceControlConnections?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#tunnel_interface_control_connections_variable VpnInterfaceMultilinkFeatureTemplate#tunnel_interface_control_connections_variable}
  */
  readonly tunnelInterfaceControlConnectionsVariable?: string;
  /**
  * Encapsulation for TLOC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#tunnel_interface_encapsulations VpnInterfaceMultilinkFeatureTemplate#tunnel_interface_encapsulations}
  */
  readonly tunnelInterfaceEncapsulations?: VpnInterfaceMultilinkFeatureTemplateTunnelInterfaceEncapsulations[] | cdktf.IResolvable;
  /**
  * Exclude the following controller groups defined in this list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#tunnel_interface_exclude_controller_group_list VpnInterfaceMultilinkFeatureTemplate#tunnel_interface_exclude_controller_group_list}
  */
  readonly tunnelInterfaceExcludeControllerGroupList?: number[];
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#tunnel_interface_exclude_controller_group_list_variable VpnInterfaceMultilinkFeatureTemplate#tunnel_interface_exclude_controller_group_list_variable}
  */
  readonly tunnelInterfaceExcludeControllerGroupListVariable?: string;
  /**
  * List of groups
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#tunnel_interface_groups VpnInterfaceMultilinkFeatureTemplate#tunnel_interface_groups}
  */
  readonly tunnelInterfaceGroups?: number[];
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#tunnel_interface_groups_variable VpnInterfaceMultilinkFeatureTemplate#tunnel_interface_groups_variable}
  */
  readonly tunnelInterfaceGroupsVariable?: string;
  /**
  * Set time period of control hello packets <100..600000> milli seconds
  *   - Range: `100`-`600000`
  *   - Default value: `1000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#tunnel_interface_hello_interval VpnInterfaceMultilinkFeatureTemplate#tunnel_interface_hello_interval}
  */
  readonly tunnelInterfaceHelloInterval?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#tunnel_interface_hello_interval_variable VpnInterfaceMultilinkFeatureTemplate#tunnel_interface_hello_interval_variable}
  */
  readonly tunnelInterfaceHelloIntervalVariable?: string;
  /**
  * Set tolerance of control hello packets <12..6000> seconds
  *   - Range: `12`-`6000`
  *   - Default value: `12`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#tunnel_interface_hello_tolerance VpnInterfaceMultilinkFeatureTemplate#tunnel_interface_hello_tolerance}
  */
  readonly tunnelInterfaceHelloTolerance?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#tunnel_interface_hello_tolerance_variable VpnInterfaceMultilinkFeatureTemplate#tunnel_interface_hello_tolerance_variable}
  */
  readonly tunnelInterfaceHelloToleranceVariable?: string;
  /**
  * Set TLOC as last resort
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#tunnel_interface_last_resort_circuit VpnInterfaceMultilinkFeatureTemplate#tunnel_interface_last_resort_circuit}
  */
  readonly tunnelInterfaceLastResortCircuit?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#tunnel_interface_last_resort_circuit_variable VpnInterfaceMultilinkFeatureTemplate#tunnel_interface_last_resort_circuit_variable}
  */
  readonly tunnelInterfaceLastResortCircuitVariable?: string;
  /**
  * Set the interface as a low-bandwidth circuit
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#tunnel_interface_low_bandwidth_link VpnInterfaceMultilinkFeatureTemplate#tunnel_interface_low_bandwidth_link}
  */
  readonly tunnelInterfaceLowBandwidthLink?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#tunnel_interface_low_bandwidth_link_variable VpnInterfaceMultilinkFeatureTemplate#tunnel_interface_low_bandwidth_link_variable}
  */
  readonly tunnelInterfaceLowBandwidthLinkVariable?: string;
  /**
  * Set the maximum number of control connections for this TLOC
  *   - Range: `0`-`8`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#tunnel_interface_max_control_connections VpnInterfaceMultilinkFeatureTemplate#tunnel_interface_max_control_connections}
  */
  readonly tunnelInterfaceMaxControlConnections?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#tunnel_interface_max_control_connections_variable VpnInterfaceMultilinkFeatureTemplate#tunnel_interface_max_control_connections_variable}
  */
  readonly tunnelInterfaceMaxControlConnectionsVariable?: string;
  /**
  * Set time period of nat refresh packets <1...60> seconds
  *   - Range: `1`-`60`
  *   - Default value: `5`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#tunnel_interface_nat_refresh_interval VpnInterfaceMultilinkFeatureTemplate#tunnel_interface_nat_refresh_interval}
  */
  readonly tunnelInterfaceNatRefreshInterval?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#tunnel_interface_nat_refresh_interval_variable VpnInterfaceMultilinkFeatureTemplate#tunnel_interface_nat_refresh_interval_variable}
  */
  readonly tunnelInterfaceNatRefreshIntervalVariable?: string;
  /**
  * Accept and respond to network-prefix-directed broadcasts)
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#tunnel_interface_network_broadcast VpnInterfaceMultilinkFeatureTemplate#tunnel_interface_network_broadcast}
  */
  readonly tunnelInterfaceNetworkBroadcast?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#tunnel_interface_network_broadcast_variable VpnInterfaceMultilinkFeatureTemplate#tunnel_interface_network_broadcast_variable}
  */
  readonly tunnelInterfaceNetworkBroadcastVariable?: string;
  /**
  * Disallow port hopping on the tunnel interface
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#tunnel_interface_port_hop VpnInterfaceMultilinkFeatureTemplate#tunnel_interface_port_hop}
  */
  readonly tunnelInterfacePortHop?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#tunnel_interface_port_hop_variable VpnInterfaceMultilinkFeatureTemplate#tunnel_interface_port_hop_variable}
  */
  readonly tunnelInterfacePortHopVariable?: string;
  /**
  * Tunnel TCP MSS on SYN packets, in bytes
  *   - Range: `500`-`1460`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#tunnel_interface_tunnel_tcp_mss VpnInterfaceMultilinkFeatureTemplate#tunnel_interface_tunnel_tcp_mss}
  */
  readonly tunnelInterfaceTunnelTcpMss?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#tunnel_interface_tunnel_tcp_mss_variable VpnInterfaceMultilinkFeatureTemplate#tunnel_interface_tunnel_tcp_mss_variable}
  */
  readonly tunnelInterfaceTunnelTcpMssVariable?: string;
  /**
  * Put this wan interface in STUN mode only
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#tunnel_interface_vbond_as_stun_server VpnInterfaceMultilinkFeatureTemplate#tunnel_interface_vbond_as_stun_server}
  */
  readonly tunnelInterfaceVbondAsStunServer?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#tunnel_interface_vbond_as_stun_server_variable VpnInterfaceMultilinkFeatureTemplate#tunnel_interface_vbond_as_stun_server_variable}
  */
  readonly tunnelInterfaceVbondAsStunServerVariable?: string;
  /**
  * Set interface preference for control connection to vManage <0..8>
  *   - Range: `0`-`8`
  *   - Default value: `5`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#tunnel_interface_vmanage_connection_preference VpnInterfaceMultilinkFeatureTemplate#tunnel_interface_vmanage_connection_preference}
  */
  readonly tunnelInterfaceVmanageConnectionPreference?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#tunnel_interface_vmanage_connection_preference_variable VpnInterfaceMultilinkFeatureTemplate#tunnel_interface_vmanage_connection_preference_variable}
  */
  readonly tunnelInterfaceVmanageConnectionPreferenceVariable?: string;
  /**
  * Set tunnel QoS mode
  *   - Choices: `spoke`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#tunnel_qos_mode VpnInterfaceMultilinkFeatureTemplate#tunnel_qos_mode}
  */
  readonly tunnelQosMode?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#tunnel_qos_mode_variable VpnInterfaceMultilinkFeatureTemplate#tunnel_qos_mode_variable}
  */
  readonly tunnelQosModeVariable?: string;
  /**
  * Name of rewrite rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#write_rule VpnInterfaceMultilinkFeatureTemplate#write_rule}
  */
  readonly writeRule?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#write_rule_variable VpnInterfaceMultilinkFeatureTemplate#write_rule_variable}
  */
  readonly writeRuleVariable?: string;
}
export interface VpnInterfaceMultilinkFeatureTemplateAccessLists {
  /**
  * Name of access list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#acl_name VpnInterfaceMultilinkFeatureTemplate#acl_name}
  */
  readonly aclName?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#acl_name_variable VpnInterfaceMultilinkFeatureTemplate#acl_name_variable}
  */
  readonly aclNameVariable?: string;
  /**
  * Direction
  *   - Choices: `in`, `out`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#direction VpnInterfaceMultilinkFeatureTemplate#direction}
  */
  readonly direction?: string;
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#optional VpnInterfaceMultilinkFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function vpnInterfaceMultilinkFeatureTemplateAccessListsToTerraform(struct?: VpnInterfaceMultilinkFeatureTemplateAccessLists | cdktf.IResolvable): any {
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


export function vpnInterfaceMultilinkFeatureTemplateAccessListsToHclTerraform(struct?: VpnInterfaceMultilinkFeatureTemplateAccessLists | cdktf.IResolvable): any {
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

export class VpnInterfaceMultilinkFeatureTemplateAccessListsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpnInterfaceMultilinkFeatureTemplateAccessLists | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VpnInterfaceMultilinkFeatureTemplateAccessLists | cdktf.IResolvable | undefined) {
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

export class VpnInterfaceMultilinkFeatureTemplateAccessListsList extends cdktf.ComplexList {
  public internalValue? : VpnInterfaceMultilinkFeatureTemplateAccessLists[] | cdktf.IResolvable

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
  public get(index: number): VpnInterfaceMultilinkFeatureTemplateAccessListsOutputReference {
    return new VpnInterfaceMultilinkFeatureTemplateAccessListsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VpnInterfaceMultilinkFeatureTemplateIpv6AccessLists {
  /**
  * Name of access list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#acl_name VpnInterfaceMultilinkFeatureTemplate#acl_name}
  */
  readonly aclName?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#acl_name_variable VpnInterfaceMultilinkFeatureTemplate#acl_name_variable}
  */
  readonly aclNameVariable?: string;
  /**
  * Direction
  *   - Choices: `in`, `out`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#direction VpnInterfaceMultilinkFeatureTemplate#direction}
  */
  readonly direction?: string;
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#optional VpnInterfaceMultilinkFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function vpnInterfaceMultilinkFeatureTemplateIpv6AccessListsToTerraform(struct?: VpnInterfaceMultilinkFeatureTemplateIpv6AccessLists | cdktf.IResolvable): any {
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


export function vpnInterfaceMultilinkFeatureTemplateIpv6AccessListsToHclTerraform(struct?: VpnInterfaceMultilinkFeatureTemplateIpv6AccessLists | cdktf.IResolvable): any {
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

export class VpnInterfaceMultilinkFeatureTemplateIpv6AccessListsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpnInterfaceMultilinkFeatureTemplateIpv6AccessLists | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VpnInterfaceMultilinkFeatureTemplateIpv6AccessLists | cdktf.IResolvable | undefined) {
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

export class VpnInterfaceMultilinkFeatureTemplateIpv6AccessListsList extends cdktf.ComplexList {
  public internalValue? : VpnInterfaceMultilinkFeatureTemplateIpv6AccessLists[] | cdktf.IResolvable

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
  public get(index: number): VpnInterfaceMultilinkFeatureTemplateIpv6AccessListsOutputReference {
    return new VpnInterfaceMultilinkFeatureTemplateIpv6AccessListsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VpnInterfaceMultilinkFeatureTemplateMultilinkInterfacesChannelGroupListStruct {
  /**
  * Number
  *   - Range: `0`-`30`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#channel_group VpnInterfaceMultilinkFeatureTemplate#channel_group}
  */
  readonly channelGroup?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#channel_group_variable VpnInterfaceMultilinkFeatureTemplate#channel_group_variable}
  */
  readonly channelGroupVariable?: string;
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#optional VpnInterfaceMultilinkFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * Time slots
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#time_slot VpnInterfaceMultilinkFeatureTemplate#time_slot}
  */
  readonly timeSlot?: string[];
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#time_slot_variable VpnInterfaceMultilinkFeatureTemplate#time_slot_variable}
  */
  readonly timeSlotVariable?: string;
}

export function vpnInterfaceMultilinkFeatureTemplateMultilinkInterfacesChannelGroupListStructToTerraform(struct?: VpnInterfaceMultilinkFeatureTemplateMultilinkInterfacesChannelGroupListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    channel_group: cdktf.numberToTerraform(struct!.channelGroup),
    channel_group_variable: cdktf.stringToTerraform(struct!.channelGroupVariable),
    optional: cdktf.booleanToTerraform(struct!.optional),
    time_slot: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.timeSlot),
    time_slot_variable: cdktf.stringToTerraform(struct!.timeSlotVariable),
  }
}


export function vpnInterfaceMultilinkFeatureTemplateMultilinkInterfacesChannelGroupListStructToHclTerraform(struct?: VpnInterfaceMultilinkFeatureTemplateMultilinkInterfacesChannelGroupListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    channel_group: {
      value: cdktf.numberToHclTerraform(struct!.channelGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    channel_group_variable: {
      value: cdktf.stringToHclTerraform(struct!.channelGroupVariable),
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
    time_slot: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.timeSlot),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    time_slot_variable: {
      value: cdktf.stringToHclTerraform(struct!.timeSlotVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpnInterfaceMultilinkFeatureTemplateMultilinkInterfacesChannelGroupListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpnInterfaceMultilinkFeatureTemplateMultilinkInterfacesChannelGroupListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._channelGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.channelGroup = this._channelGroup;
    }
    if (this._channelGroupVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.channelGroupVariable = this._channelGroupVariable;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    if (this._timeSlot !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeSlot = this._timeSlot;
    }
    if (this._timeSlotVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeSlotVariable = this._timeSlotVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnInterfaceMultilinkFeatureTemplateMultilinkInterfacesChannelGroupListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._channelGroup = undefined;
      this._channelGroupVariable = undefined;
      this._optional = undefined;
      this._timeSlot = undefined;
      this._timeSlotVariable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._channelGroup = value.channelGroup;
      this._channelGroupVariable = value.channelGroupVariable;
      this._optional = value.optional;
      this._timeSlot = value.timeSlot;
      this._timeSlotVariable = value.timeSlotVariable;
    }
  }

  // channel_group - computed: false, optional: true, required: false
  private _channelGroup?: number; 
  public get channelGroup() {
    return this.getNumberAttribute('channel_group');
  }
  public set channelGroup(value: number) {
    this._channelGroup = value;
  }
  public resetChannelGroup() {
    this._channelGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelGroupInput() {
    return this._channelGroup;
  }

  // channel_group_variable - computed: false, optional: true, required: false
  private _channelGroupVariable?: string; 
  public get channelGroupVariable() {
    return this.getStringAttribute('channel_group_variable');
  }
  public set channelGroupVariable(value: string) {
    this._channelGroupVariable = value;
  }
  public resetChannelGroupVariable() {
    this._channelGroupVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelGroupVariableInput() {
    return this._channelGroupVariable;
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

  // time_slot - computed: false, optional: true, required: false
  private _timeSlot?: string[]; 
  public get timeSlot() {
    return cdktf.Fn.tolist(this.getListAttribute('time_slot'));
  }
  public set timeSlot(value: string[]) {
    this._timeSlot = value;
  }
  public resetTimeSlot() {
    this._timeSlot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeSlotInput() {
    return this._timeSlot;
  }

  // time_slot_variable - computed: false, optional: true, required: false
  private _timeSlotVariable?: string; 
  public get timeSlotVariable() {
    return this.getStringAttribute('time_slot_variable');
  }
  public set timeSlotVariable(value: string) {
    this._timeSlotVariable = value;
  }
  public resetTimeSlotVariable() {
    this._timeSlotVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeSlotVariableInput() {
    return this._timeSlotVariable;
  }
}

export class VpnInterfaceMultilinkFeatureTemplateMultilinkInterfacesChannelGroupListStructList extends cdktf.ComplexList {
  public internalValue? : VpnInterfaceMultilinkFeatureTemplateMultilinkInterfacesChannelGroupListStruct[] | cdktf.IResolvable

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
  public get(index: number): VpnInterfaceMultilinkFeatureTemplateMultilinkInterfacesChannelGroupListStructOutputReference {
    return new VpnInterfaceMultilinkFeatureTemplateMultilinkInterfacesChannelGroupListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VpnInterfaceMultilinkFeatureTemplateMultilinkInterfaces {
  /**
  * Channel Group List
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#channel_group_list VpnInterfaceMultilinkFeatureTemplate#channel_group_list}
  */
  readonly channelGroupList?: VpnInterfaceMultilinkFeatureTemplateMultilinkInterfacesChannelGroupListStruct[] | cdktf.IResolvable;
  /**
  * Description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#description VpnInterfaceMultilinkFeatureTemplate#description}
  */
  readonly description?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#description_variable VpnInterfaceMultilinkFeatureTemplate#description_variable}
  */
  readonly descriptionVariable?: string;
  /**
  * Framing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#framing VpnInterfaceMultilinkFeatureTemplate#framing}
  */
  readonly framing?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#framing_variable VpnInterfaceMultilinkFeatureTemplate#framing_variable}
  */
  readonly framingVariable?: string;
  /**
  * Card Type
  *   - Choices: `E1`, `T1`, `NIM-2T`, `NIM-4T`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#interface_type VpnInterfaceMultilinkFeatureTemplate#interface_type}
  */
  readonly interfaceType?: string;
  /**
  * Internal
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#internal VpnInterfaceMultilinkFeatureTemplate#internal}
  */
  readonly internal?: boolean | cdktf.IResolvable;
  /**
  * Line Mode
  *   - Choices: `secondary`, `primary`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#line_mode VpnInterfaceMultilinkFeatureTemplate#line_mode}
  */
  readonly lineMode?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#line_mode_variable VpnInterfaceMultilinkFeatureTemplate#line_mode_variable}
  */
  readonly lineModeVariable?: string;
  /**
  * LineCode
  *   - Choices: `ami`, `b8zs`, `hdb3`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#linecode VpnInterfaceMultilinkFeatureTemplate#linecode}
  */
  readonly linecode?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#linecode_variable VpnInterfaceMultilinkFeatureTemplate#linecode_variable}
  */
  readonly linecodeVariable?: string;
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#optional VpnInterfaceMultilinkFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * Set length for long
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#set_length_for_long VpnInterfaceMultilinkFeatureTemplate#set_length_for_long}
  */
  readonly setLengthForLong?: string;
  /**
  * Set Length for short
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#set_length_for_short VpnInterfaceMultilinkFeatureTemplate#set_length_for_short}
  */
  readonly setLengthForShort?: string;
  /**
  * Slot number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#slot VpnInterfaceMultilinkFeatureTemplate#slot}
  */
  readonly slot?: string;
}

export function vpnInterfaceMultilinkFeatureTemplateMultilinkInterfacesToTerraform(struct?: VpnInterfaceMultilinkFeatureTemplateMultilinkInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    channel_group_list: cdktf.listMapper(vpnInterfaceMultilinkFeatureTemplateMultilinkInterfacesChannelGroupListStructToTerraform, false)(struct!.channelGroupList),
    description: cdktf.stringToTerraform(struct!.description),
    description_variable: cdktf.stringToTerraform(struct!.descriptionVariable),
    framing: cdktf.stringToTerraform(struct!.framing),
    framing_variable: cdktf.stringToTerraform(struct!.framingVariable),
    interface_type: cdktf.stringToTerraform(struct!.interfaceType),
    internal: cdktf.booleanToTerraform(struct!.internal),
    line_mode: cdktf.stringToTerraform(struct!.lineMode),
    line_mode_variable: cdktf.stringToTerraform(struct!.lineModeVariable),
    linecode: cdktf.stringToTerraform(struct!.linecode),
    linecode_variable: cdktf.stringToTerraform(struct!.linecodeVariable),
    optional: cdktf.booleanToTerraform(struct!.optional),
    set_length_for_long: cdktf.stringToTerraform(struct!.setLengthForLong),
    set_length_for_short: cdktf.stringToTerraform(struct!.setLengthForShort),
    slot: cdktf.stringToTerraform(struct!.slot),
  }
}


export function vpnInterfaceMultilinkFeatureTemplateMultilinkInterfacesToHclTerraform(struct?: VpnInterfaceMultilinkFeatureTemplateMultilinkInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    channel_group_list: {
      value: cdktf.listMapperHcl(vpnInterfaceMultilinkFeatureTemplateMultilinkInterfacesChannelGroupListStructToHclTerraform, false)(struct!.channelGroupList),
      isBlock: true,
      type: "list",
      storageClassType: "VpnInterfaceMultilinkFeatureTemplateMultilinkInterfacesChannelGroupListStructList",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description_variable: {
      value: cdktf.stringToHclTerraform(struct!.descriptionVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    framing: {
      value: cdktf.stringToHclTerraform(struct!.framing),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    framing_variable: {
      value: cdktf.stringToHclTerraform(struct!.framingVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interface_type: {
      value: cdktf.stringToHclTerraform(struct!.interfaceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    internal: {
      value: cdktf.booleanToHclTerraform(struct!.internal),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    line_mode: {
      value: cdktf.stringToHclTerraform(struct!.lineMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    line_mode_variable: {
      value: cdktf.stringToHclTerraform(struct!.lineModeVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    linecode: {
      value: cdktf.stringToHclTerraform(struct!.linecode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    linecode_variable: {
      value: cdktf.stringToHclTerraform(struct!.linecodeVariable),
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
    set_length_for_long: {
      value: cdktf.stringToHclTerraform(struct!.setLengthForLong),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    set_length_for_short: {
      value: cdktf.stringToHclTerraform(struct!.setLengthForShort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    slot: {
      value: cdktf.stringToHclTerraform(struct!.slot),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpnInterfaceMultilinkFeatureTemplateMultilinkInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpnInterfaceMultilinkFeatureTemplateMultilinkInterfaces | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._channelGroupList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.channelGroupList = this._channelGroupList?.internalValue;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._descriptionVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.descriptionVariable = this._descriptionVariable;
    }
    if (this._framing !== undefined) {
      hasAnyValues = true;
      internalValueResult.framing = this._framing;
    }
    if (this._framingVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.framingVariable = this._framingVariable;
    }
    if (this._interfaceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceType = this._interfaceType;
    }
    if (this._internal !== undefined) {
      hasAnyValues = true;
      internalValueResult.internal = this._internal;
    }
    if (this._lineMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.lineMode = this._lineMode;
    }
    if (this._lineModeVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.lineModeVariable = this._lineModeVariable;
    }
    if (this._linecode !== undefined) {
      hasAnyValues = true;
      internalValueResult.linecode = this._linecode;
    }
    if (this._linecodeVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.linecodeVariable = this._linecodeVariable;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    if (this._setLengthForLong !== undefined) {
      hasAnyValues = true;
      internalValueResult.setLengthForLong = this._setLengthForLong;
    }
    if (this._setLengthForShort !== undefined) {
      hasAnyValues = true;
      internalValueResult.setLengthForShort = this._setLengthForShort;
    }
    if (this._slot !== undefined) {
      hasAnyValues = true;
      internalValueResult.slot = this._slot;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnInterfaceMultilinkFeatureTemplateMultilinkInterfaces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._channelGroupList.internalValue = undefined;
      this._description = undefined;
      this._descriptionVariable = undefined;
      this._framing = undefined;
      this._framingVariable = undefined;
      this._interfaceType = undefined;
      this._internal = undefined;
      this._lineMode = undefined;
      this._lineModeVariable = undefined;
      this._linecode = undefined;
      this._linecodeVariable = undefined;
      this._optional = undefined;
      this._setLengthForLong = undefined;
      this._setLengthForShort = undefined;
      this._slot = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._channelGroupList.internalValue = value.channelGroupList;
      this._description = value.description;
      this._descriptionVariable = value.descriptionVariable;
      this._framing = value.framing;
      this._framingVariable = value.framingVariable;
      this._interfaceType = value.interfaceType;
      this._internal = value.internal;
      this._lineMode = value.lineMode;
      this._lineModeVariable = value.lineModeVariable;
      this._linecode = value.linecode;
      this._linecodeVariable = value.linecodeVariable;
      this._optional = value.optional;
      this._setLengthForLong = value.setLengthForLong;
      this._setLengthForShort = value.setLengthForShort;
      this._slot = value.slot;
    }
  }

  // channel_group_list - computed: false, optional: true, required: false
  private _channelGroupList = new VpnInterfaceMultilinkFeatureTemplateMultilinkInterfacesChannelGroupListStructList(this, "channel_group_list", false);
  public get channelGroupList() {
    return this._channelGroupList;
  }
  public putChannelGroupList(value: VpnInterfaceMultilinkFeatureTemplateMultilinkInterfacesChannelGroupListStruct[] | cdktf.IResolvable) {
    this._channelGroupList.internalValue = value;
  }
  public resetChannelGroupList() {
    this._channelGroupList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelGroupListInput() {
    return this._channelGroupList.internalValue;
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

  // description_variable - computed: false, optional: true, required: false
  private _descriptionVariable?: string; 
  public get descriptionVariable() {
    return this.getStringAttribute('description_variable');
  }
  public set descriptionVariable(value: string) {
    this._descriptionVariable = value;
  }
  public resetDescriptionVariable() {
    this._descriptionVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionVariableInput() {
    return this._descriptionVariable;
  }

  // framing - computed: false, optional: true, required: false
  private _framing?: string; 
  public get framing() {
    return this.getStringAttribute('framing');
  }
  public set framing(value: string) {
    this._framing = value;
  }
  public resetFraming() {
    this._framing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get framingInput() {
    return this._framing;
  }

  // framing_variable - computed: false, optional: true, required: false
  private _framingVariable?: string; 
  public get framingVariable() {
    return this.getStringAttribute('framing_variable');
  }
  public set framingVariable(value: string) {
    this._framingVariable = value;
  }
  public resetFramingVariable() {
    this._framingVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get framingVariableInput() {
    return this._framingVariable;
  }

  // interface_type - computed: false, optional: true, required: false
  private _interfaceType?: string; 
  public get interfaceType() {
    return this.getStringAttribute('interface_type');
  }
  public set interfaceType(value: string) {
    this._interfaceType = value;
  }
  public resetInterfaceType() {
    this._interfaceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceTypeInput() {
    return this._interfaceType;
  }

  // internal - computed: false, optional: true, required: false
  private _internal?: boolean | cdktf.IResolvable; 
  public get internal() {
    return this.getBooleanAttribute('internal');
  }
  public set internal(value: boolean | cdktf.IResolvable) {
    this._internal = value;
  }
  public resetInternal() {
    this._internal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalInput() {
    return this._internal;
  }

  // line_mode - computed: false, optional: true, required: false
  private _lineMode?: string; 
  public get lineMode() {
    return this.getStringAttribute('line_mode');
  }
  public set lineMode(value: string) {
    this._lineMode = value;
  }
  public resetLineMode() {
    this._lineMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lineModeInput() {
    return this._lineMode;
  }

  // line_mode_variable - computed: false, optional: true, required: false
  private _lineModeVariable?: string; 
  public get lineModeVariable() {
    return this.getStringAttribute('line_mode_variable');
  }
  public set lineModeVariable(value: string) {
    this._lineModeVariable = value;
  }
  public resetLineModeVariable() {
    this._lineModeVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lineModeVariableInput() {
    return this._lineModeVariable;
  }

  // linecode - computed: false, optional: true, required: false
  private _linecode?: string; 
  public get linecode() {
    return this.getStringAttribute('linecode');
  }
  public set linecode(value: string) {
    this._linecode = value;
  }
  public resetLinecode() {
    this._linecode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linecodeInput() {
    return this._linecode;
  }

  // linecode_variable - computed: false, optional: true, required: false
  private _linecodeVariable?: string; 
  public get linecodeVariable() {
    return this.getStringAttribute('linecode_variable');
  }
  public set linecodeVariable(value: string) {
    this._linecodeVariable = value;
  }
  public resetLinecodeVariable() {
    this._linecodeVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linecodeVariableInput() {
    return this._linecodeVariable;
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

  // set_length_for_long - computed: false, optional: true, required: false
  private _setLengthForLong?: string; 
  public get setLengthForLong() {
    return this.getStringAttribute('set_length_for_long');
  }
  public set setLengthForLong(value: string) {
    this._setLengthForLong = value;
  }
  public resetSetLengthForLong() {
    this._setLengthForLong = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setLengthForLongInput() {
    return this._setLengthForLong;
  }

  // set_length_for_short - computed: false, optional: true, required: false
  private _setLengthForShort?: string; 
  public get setLengthForShort() {
    return this.getStringAttribute('set_length_for_short');
  }
  public set setLengthForShort(value: string) {
    this._setLengthForShort = value;
  }
  public resetSetLengthForShort() {
    this._setLengthForShort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setLengthForShortInput() {
    return this._setLengthForShort;
  }

  // slot - computed: false, optional: true, required: false
  private _slot?: string; 
  public get slot() {
    return this.getStringAttribute('slot');
  }
  public set slot(value: string) {
    this._slot = value;
  }
  public resetSlot() {
    this._slot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotInput() {
    return this._slot;
  }
}

export class VpnInterfaceMultilinkFeatureTemplateMultilinkInterfacesList extends cdktf.ComplexList {
  public internalValue? : VpnInterfaceMultilinkFeatureTemplateMultilinkInterfaces[] | cdktf.IResolvable

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
  public get(index: number): VpnInterfaceMultilinkFeatureTemplateMultilinkInterfacesOutputReference {
    return new VpnInterfaceMultilinkFeatureTemplateMultilinkInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VpnInterfaceMultilinkFeatureTemplateNimInterfaceListStruct {
  /**
  * Interface bandwidth capacity, in kbps
  *   - Range: `1`-`2147483647`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#bandwidth VpnInterfaceMultilinkFeatureTemplate#bandwidth}
  */
  readonly bandwidth?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#bandwidth_variable VpnInterfaceMultilinkFeatureTemplate#bandwidth_variable}
  */
  readonly bandwidthVariable?: string;
  /**
  * Set preference for interface Clock speed
  *   - Range: `1200`-`8000000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#clock_rate VpnInterfaceMultilinkFeatureTemplate#clock_rate}
  */
  readonly clockRate?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#clock_rate_variable VpnInterfaceMultilinkFeatureTemplate#clock_rate_variable}
  */
  readonly clockRateVariable?: string;
  /**
  * Configure Encapsulation for interface
  *   - Choices: `hdlc`, `ppp`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#encapsulation_serial VpnInterfaceMultilinkFeatureTemplate#encapsulation_serial}
  */
  readonly encapsulationSerial?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#encapsulation_serial_variable VpnInterfaceMultilinkFeatureTemplate#encapsulation_serial_variable}
  */
  readonly encapsulationSerialVariable?: string;
  /**
  * Interface description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#interface_description VpnInterfaceMultilinkFeatureTemplate#interface_description}
  */
  readonly interfaceDescription?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#interface_description_variable VpnInterfaceMultilinkFeatureTemplate#interface_description_variable}
  */
  readonly interfaceDescriptionVariable?: string;
  /**
  * Interface Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#interface_name VpnInterfaceMultilinkFeatureTemplate#interface_name}
  */
  readonly interfaceName?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#interface_name_variable VpnInterfaceMultilinkFeatureTemplate#interface_name_variable}
  */
  readonly interfaceNameVariable?: string;
  /**
  * NIM Serial interface type
  *   - Choices: `2t`, `4t`, `2T`, `4T`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#nim_serial_interface_type VpnInterfaceMultilinkFeatureTemplate#nim_serial_interface_type}
  */
  readonly nimSerialInterfaceType?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#nim_serial_interface_type_variable VpnInterfaceMultilinkFeatureTemplate#nim_serial_interface_type_variable}
  */
  readonly nimSerialInterfaceTypeVariable?: string;
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#optional VpnInterfaceMultilinkFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function vpnInterfaceMultilinkFeatureTemplateNimInterfaceListStructToTerraform(struct?: VpnInterfaceMultilinkFeatureTemplateNimInterfaceListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bandwidth: cdktf.numberToTerraform(struct!.bandwidth),
    bandwidth_variable: cdktf.stringToTerraform(struct!.bandwidthVariable),
    clock_rate: cdktf.numberToTerraform(struct!.clockRate),
    clock_rate_variable: cdktf.stringToTerraform(struct!.clockRateVariable),
    encapsulation_serial: cdktf.stringToTerraform(struct!.encapsulationSerial),
    encapsulation_serial_variable: cdktf.stringToTerraform(struct!.encapsulationSerialVariable),
    interface_description: cdktf.stringToTerraform(struct!.interfaceDescription),
    interface_description_variable: cdktf.stringToTerraform(struct!.interfaceDescriptionVariable),
    interface_name: cdktf.stringToTerraform(struct!.interfaceName),
    interface_name_variable: cdktf.stringToTerraform(struct!.interfaceNameVariable),
    nim_serial_interface_type: cdktf.stringToTerraform(struct!.nimSerialInterfaceType),
    nim_serial_interface_type_variable: cdktf.stringToTerraform(struct!.nimSerialInterfaceTypeVariable),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function vpnInterfaceMultilinkFeatureTemplateNimInterfaceListStructToHclTerraform(struct?: VpnInterfaceMultilinkFeatureTemplateNimInterfaceListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bandwidth: {
      value: cdktf.numberToHclTerraform(struct!.bandwidth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bandwidth_variable: {
      value: cdktf.stringToHclTerraform(struct!.bandwidthVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    clock_rate: {
      value: cdktf.numberToHclTerraform(struct!.clockRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    clock_rate_variable: {
      value: cdktf.stringToHclTerraform(struct!.clockRateVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encapsulation_serial: {
      value: cdktf.stringToHclTerraform(struct!.encapsulationSerial),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encapsulation_serial_variable: {
      value: cdktf.stringToHclTerraform(struct!.encapsulationSerialVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interface_description: {
      value: cdktf.stringToHclTerraform(struct!.interfaceDescription),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interface_description_variable: {
      value: cdktf.stringToHclTerraform(struct!.interfaceDescriptionVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interface_name: {
      value: cdktf.stringToHclTerraform(struct!.interfaceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interface_name_variable: {
      value: cdktf.stringToHclTerraform(struct!.interfaceNameVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nim_serial_interface_type: {
      value: cdktf.stringToHclTerraform(struct!.nimSerialInterfaceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nim_serial_interface_type_variable: {
      value: cdktf.stringToHclTerraform(struct!.nimSerialInterfaceTypeVariable),
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

export class VpnInterfaceMultilinkFeatureTemplateNimInterfaceListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpnInterfaceMultilinkFeatureTemplateNimInterfaceListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bandwidth !== undefined) {
      hasAnyValues = true;
      internalValueResult.bandwidth = this._bandwidth;
    }
    if (this._bandwidthVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.bandwidthVariable = this._bandwidthVariable;
    }
    if (this._clockRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.clockRate = this._clockRate;
    }
    if (this._clockRateVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.clockRateVariable = this._clockRateVariable;
    }
    if (this._encapsulationSerial !== undefined) {
      hasAnyValues = true;
      internalValueResult.encapsulationSerial = this._encapsulationSerial;
    }
    if (this._encapsulationSerialVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.encapsulationSerialVariable = this._encapsulationSerialVariable;
    }
    if (this._interfaceDescription !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceDescription = this._interfaceDescription;
    }
    if (this._interfaceDescriptionVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceDescriptionVariable = this._interfaceDescriptionVariable;
    }
    if (this._interfaceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceName = this._interfaceName;
    }
    if (this._interfaceNameVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceNameVariable = this._interfaceNameVariable;
    }
    if (this._nimSerialInterfaceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.nimSerialInterfaceType = this._nimSerialInterfaceType;
    }
    if (this._nimSerialInterfaceTypeVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.nimSerialInterfaceTypeVariable = this._nimSerialInterfaceTypeVariable;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnInterfaceMultilinkFeatureTemplateNimInterfaceListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bandwidth = undefined;
      this._bandwidthVariable = undefined;
      this._clockRate = undefined;
      this._clockRateVariable = undefined;
      this._encapsulationSerial = undefined;
      this._encapsulationSerialVariable = undefined;
      this._interfaceDescription = undefined;
      this._interfaceDescriptionVariable = undefined;
      this._interfaceName = undefined;
      this._interfaceNameVariable = undefined;
      this._nimSerialInterfaceType = undefined;
      this._nimSerialInterfaceTypeVariable = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bandwidth = value.bandwidth;
      this._bandwidthVariable = value.bandwidthVariable;
      this._clockRate = value.clockRate;
      this._clockRateVariable = value.clockRateVariable;
      this._encapsulationSerial = value.encapsulationSerial;
      this._encapsulationSerialVariable = value.encapsulationSerialVariable;
      this._interfaceDescription = value.interfaceDescription;
      this._interfaceDescriptionVariable = value.interfaceDescriptionVariable;
      this._interfaceName = value.interfaceName;
      this._interfaceNameVariable = value.interfaceNameVariable;
      this._nimSerialInterfaceType = value.nimSerialInterfaceType;
      this._nimSerialInterfaceTypeVariable = value.nimSerialInterfaceTypeVariable;
      this._optional = value.optional;
    }
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
  private _clockRate?: number; 
  public get clockRate() {
    return this.getNumberAttribute('clock_rate');
  }
  public set clockRate(value: number) {
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

  // encapsulation_serial - computed: false, optional: true, required: false
  private _encapsulationSerial?: string; 
  public get encapsulationSerial() {
    return this.getStringAttribute('encapsulation_serial');
  }
  public set encapsulationSerial(value: string) {
    this._encapsulationSerial = value;
  }
  public resetEncapsulationSerial() {
    this._encapsulationSerial = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encapsulationSerialInput() {
    return this._encapsulationSerial;
  }

  // encapsulation_serial_variable - computed: false, optional: true, required: false
  private _encapsulationSerialVariable?: string; 
  public get encapsulationSerialVariable() {
    return this.getStringAttribute('encapsulation_serial_variable');
  }
  public set encapsulationSerialVariable(value: string) {
    this._encapsulationSerialVariable = value;
  }
  public resetEncapsulationSerialVariable() {
    this._encapsulationSerialVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encapsulationSerialVariableInput() {
    return this._encapsulationSerialVariable;
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

  // nim_serial_interface_type - computed: false, optional: true, required: false
  private _nimSerialInterfaceType?: string; 
  public get nimSerialInterfaceType() {
    return this.getStringAttribute('nim_serial_interface_type');
  }
  public set nimSerialInterfaceType(value: string) {
    this._nimSerialInterfaceType = value;
  }
  public resetNimSerialInterfaceType() {
    this._nimSerialInterfaceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nimSerialInterfaceTypeInput() {
    return this._nimSerialInterfaceType;
  }

  // nim_serial_interface_type_variable - computed: false, optional: true, required: false
  private _nimSerialInterfaceTypeVariable?: string; 
  public get nimSerialInterfaceTypeVariable() {
    return this.getStringAttribute('nim_serial_interface_type_variable');
  }
  public set nimSerialInterfaceTypeVariable(value: string) {
    this._nimSerialInterfaceTypeVariable = value;
  }
  public resetNimSerialInterfaceTypeVariable() {
    this._nimSerialInterfaceTypeVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nimSerialInterfaceTypeVariableInput() {
    return this._nimSerialInterfaceTypeVariable;
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

export class VpnInterfaceMultilinkFeatureTemplateNimInterfaceListStructList extends cdktf.ComplexList {
  public internalValue? : VpnInterfaceMultilinkFeatureTemplateNimInterfaceListStruct[] | cdktf.IResolvable

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
  public get(index: number): VpnInterfaceMultilinkFeatureTemplateNimInterfaceListStructOutputReference {
    return new VpnInterfaceMultilinkFeatureTemplateNimInterfaceListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VpnInterfaceMultilinkFeatureTemplateTunnelInterfaceEncapsulations {
  /**
  * Encapsulation
  *   - Choices: `gre`, `ipsec`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#encapsulation VpnInterfaceMultilinkFeatureTemplate#encapsulation}
  */
  readonly encapsulation?: string;
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#optional VpnInterfaceMultilinkFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * Set preference for TLOC
  *   - Range: `0`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#preference VpnInterfaceMultilinkFeatureTemplate#preference}
  */
  readonly preference?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#preference_variable VpnInterfaceMultilinkFeatureTemplate#preference_variable}
  */
  readonly preferenceVariable?: string;
  /**
  * Set weight for TLOC
  *   - Range: `1`-`255`
  *   - Default value: `1`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#weight VpnInterfaceMultilinkFeatureTemplate#weight}
  */
  readonly weight?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#weight_variable VpnInterfaceMultilinkFeatureTemplate#weight_variable}
  */
  readonly weightVariable?: string;
}

export function vpnInterfaceMultilinkFeatureTemplateTunnelInterfaceEncapsulationsToTerraform(struct?: VpnInterfaceMultilinkFeatureTemplateTunnelInterfaceEncapsulations | cdktf.IResolvable): any {
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


export function vpnInterfaceMultilinkFeatureTemplateTunnelInterfaceEncapsulationsToHclTerraform(struct?: VpnInterfaceMultilinkFeatureTemplateTunnelInterfaceEncapsulations | cdktf.IResolvable): any {
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

export class VpnInterfaceMultilinkFeatureTemplateTunnelInterfaceEncapsulationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpnInterfaceMultilinkFeatureTemplateTunnelInterfaceEncapsulations | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VpnInterfaceMultilinkFeatureTemplateTunnelInterfaceEncapsulations | cdktf.IResolvable | undefined) {
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

export class VpnInterfaceMultilinkFeatureTemplateTunnelInterfaceEncapsulationsList extends cdktf.ComplexList {
  public internalValue? : VpnInterfaceMultilinkFeatureTemplateTunnelInterfaceEncapsulations[] | cdktf.IResolvable

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
  public get(index: number): VpnInterfaceMultilinkFeatureTemplateTunnelInterfaceEncapsulationsOutputReference {
    return new VpnInterfaceMultilinkFeatureTemplateTunnelInterfaceEncapsulationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template sdwan_vpn_interface_multilink_feature_template}
*/
export class VpnInterfaceMultilinkFeatureTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_vpn_interface_multilink_feature_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VpnInterfaceMultilinkFeatureTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VpnInterfaceMultilinkFeatureTemplate to import
  * @param importFromId The id of the existing VpnInterfaceMultilinkFeatureTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VpnInterfaceMultilinkFeatureTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_vpn_interface_multilink_feature_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_multilink_feature_template sdwan_vpn_interface_multilink_feature_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpnInterfaceMultilinkFeatureTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: VpnInterfaceMultilinkFeatureTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_vpn_interface_multilink_feature_template',
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
    this._autonegotiate = config.autonegotiate;
    this._autonegotiateVariable = config.autonegotiateVariable;
    this._bandwidthDownstream = config.bandwidthDownstream;
    this._bandwidthDownstreamVariable = config.bandwidthDownstreamVariable;
    this._bandwidthUpstream = config.bandwidthUpstream;
    this._bandwidthUpstreamVariable = config.bandwidthUpstreamVariable;
    this._chapHostname = config.chapHostname;
    this._chapHostnameVariable = config.chapHostnameVariable;
    this._chapPppAuthPassword = config.chapPppAuthPassword;
    this._chapPppAuthPasswordVariable = config.chapPppAuthPasswordVariable;
    this._clearDontFragmentBit = config.clearDontFragmentBit;
    this._clearDontFragmentBitVariable = config.clearDontFragmentBitVariable;
    this._coreRegion = config.coreRegion;
    this._coreRegionVariable = config.coreRegionVariable;
    this._description = config.description;
    this._deviceTypes = config.deviceTypes;
    this._disableFragmentation = config.disableFragmentation;
    this._enableCoreRegion = config.enableCoreRegion;
    this._enableCoreRegionVariable = config.enableCoreRegionVariable;
    this._fragmentMaxDelay = config.fragmentMaxDelay;
    this._fragmentMaxDelayVariable = config.fragmentMaxDelayVariable;
    this._interfaceDescription = config.interfaceDescription;
    this._interfaceDescriptionVariable = config.interfaceDescriptionVariable;
    this._interfaceName = config.interfaceName;
    this._interfaceNameVariable = config.interfaceNameVariable;
    this._interleavingFragment = config.interleavingFragment;
    this._ipMtu = config.ipMtu;
    this._ipMtuVariable = config.ipMtuVariable;
    this._ipv4Address = config.ipv4Address;
    this._ipv4AddressVariable = config.ipv4AddressVariable;
    this._ipv6AccessLists.internalValue = config.ipv6AccessLists;
    this._ipv6Address = config.ipv6Address;
    this._ipv6AddressVariable = config.ipv6AddressVariable;
    this._multilinkGroupNumber = config.multilinkGroupNumber;
    this._multilinkGroupNumberVariable = config.multilinkGroupNumberVariable;
    this._multilinkInterfaces.internalValue = config.multilinkInterfaces;
    this._name = config.name;
    this._nimInterfaceList.internalValue = config.nimInterfaceList;
    this._papPassword = config.papPassword;
    this._papPppAuthPassword = config.papPppAuthPassword;
    this._papPppAuthPasswordVariable = config.papPppAuthPasswordVariable;
    this._papUsername = config.papUsername;
    this._papUsernameVariable = config.papUsernameVariable;
    this._perTunnelQos = config.perTunnelQos;
    this._perTunnelQosAggregator = config.perTunnelQosAggregator;
    this._perTunnelQosAggregatorVariable = config.perTunnelQosAggregatorVariable;
    this._perTunnelQosVariable = config.perTunnelQosVariable;
    this._pmtuDiscovery = config.pmtuDiscovery;
    this._pmtuDiscoveryVariable = config.pmtuDiscoveryVariable;
    this._pppAuthenticationProtocol = config.pppAuthenticationProtocol;
    this._pppAuthenticationProtocolPap = config.pppAuthenticationProtocolPap;
    this._pppAuthenticationType = config.pppAuthenticationType;
    this._qosMap = config.qosMap;
    this._qosMapVariable = config.qosMapVariable;
    this._qosMapVpn = config.qosMapVpn;
    this._qosMapVpnVariable = config.qosMapVpnVariable;
    this._secondaryRegion = config.secondaryRegion;
    this._secondaryRegionVariable = config.secondaryRegionVariable;
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
    this._writeRule = config.writeRule;
    this._writeRuleVariable = config.writeRuleVariable;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_lists - computed: false, optional: true, required: false
  private _accessLists = new VpnInterfaceMultilinkFeatureTemplateAccessListsList(this, "access_lists", false);
  public get accessLists() {
    return this._accessLists;
  }
  public putAccessLists(value: VpnInterfaceMultilinkFeatureTemplateAccessLists[] | cdktf.IResolvable) {
    this._accessLists.internalValue = value;
  }
  public resetAccessLists() {
    this._accessLists.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessListsInput() {
    return this._accessLists.internalValue;
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

  // disable_fragmentation - computed: false, optional: true, required: false
  private _disableFragmentation?: boolean | cdktf.IResolvable; 
  public get disableFragmentation() {
    return this.getBooleanAttribute('disable_fragmentation');
  }
  public set disableFragmentation(value: boolean | cdktf.IResolvable) {
    this._disableFragmentation = value;
  }
  public resetDisableFragmentation() {
    this._disableFragmentation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableFragmentationInput() {
    return this._disableFragmentation;
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

  // fragment_max_delay - computed: false, optional: true, required: false
  private _fragmentMaxDelay?: number; 
  public get fragmentMaxDelay() {
    return this.getNumberAttribute('fragment_max_delay');
  }
  public set fragmentMaxDelay(value: number) {
    this._fragmentMaxDelay = value;
  }
  public resetFragmentMaxDelay() {
    this._fragmentMaxDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fragmentMaxDelayInput() {
    return this._fragmentMaxDelay;
  }

  // fragment_max_delay_variable - computed: false, optional: true, required: false
  private _fragmentMaxDelayVariable?: string; 
  public get fragmentMaxDelayVariable() {
    return this.getStringAttribute('fragment_max_delay_variable');
  }
  public set fragmentMaxDelayVariable(value: string) {
    this._fragmentMaxDelayVariable = value;
  }
  public resetFragmentMaxDelayVariable() {
    this._fragmentMaxDelayVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fragmentMaxDelayVariableInput() {
    return this._fragmentMaxDelayVariable;
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

  // interleaving_fragment - computed: false, optional: true, required: false
  private _interleavingFragment?: boolean | cdktf.IResolvable; 
  public get interleavingFragment() {
    return this.getBooleanAttribute('interleaving_fragment');
  }
  public set interleavingFragment(value: boolean | cdktf.IResolvable) {
    this._interleavingFragment = value;
  }
  public resetInterleavingFragment() {
    this._interleavingFragment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interleavingFragmentInput() {
    return this._interleavingFragment;
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

  // ipv6_access_lists - computed: false, optional: true, required: false
  private _ipv6AccessLists = new VpnInterfaceMultilinkFeatureTemplateIpv6AccessListsList(this, "ipv6_access_lists", false);
  public get ipv6AccessLists() {
    return this._ipv6AccessLists;
  }
  public putIpv6AccessLists(value: VpnInterfaceMultilinkFeatureTemplateIpv6AccessLists[] | cdktf.IResolvable) {
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

  // multilink_group_number - computed: false, optional: true, required: false
  private _multilinkGroupNumber?: number; 
  public get multilinkGroupNumber() {
    return this.getNumberAttribute('multilink_group_number');
  }
  public set multilinkGroupNumber(value: number) {
    this._multilinkGroupNumber = value;
  }
  public resetMultilinkGroupNumber() {
    this._multilinkGroupNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multilinkGroupNumberInput() {
    return this._multilinkGroupNumber;
  }

  // multilink_group_number_variable - computed: false, optional: true, required: false
  private _multilinkGroupNumberVariable?: string; 
  public get multilinkGroupNumberVariable() {
    return this.getStringAttribute('multilink_group_number_variable');
  }
  public set multilinkGroupNumberVariable(value: string) {
    this._multilinkGroupNumberVariable = value;
  }
  public resetMultilinkGroupNumberVariable() {
    this._multilinkGroupNumberVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multilinkGroupNumberVariableInput() {
    return this._multilinkGroupNumberVariable;
  }

  // multilink_interfaces - computed: false, optional: true, required: false
  private _multilinkInterfaces = new VpnInterfaceMultilinkFeatureTemplateMultilinkInterfacesList(this, "multilink_interfaces", false);
  public get multilinkInterfaces() {
    return this._multilinkInterfaces;
  }
  public putMultilinkInterfaces(value: VpnInterfaceMultilinkFeatureTemplateMultilinkInterfaces[] | cdktf.IResolvable) {
    this._multilinkInterfaces.internalValue = value;
  }
  public resetMultilinkInterfaces() {
    this._multilinkInterfaces.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multilinkInterfacesInput() {
    return this._multilinkInterfaces.internalValue;
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

  // nim_interface_list - computed: false, optional: true, required: false
  private _nimInterfaceList = new VpnInterfaceMultilinkFeatureTemplateNimInterfaceListStructList(this, "nim_interface_list", false);
  public get nimInterfaceList() {
    return this._nimInterfaceList;
  }
  public putNimInterfaceList(value: VpnInterfaceMultilinkFeatureTemplateNimInterfaceListStruct[] | cdktf.IResolvable) {
    this._nimInterfaceList.internalValue = value;
  }
  public resetNimInterfaceList() {
    this._nimInterfaceList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nimInterfaceListInput() {
    return this._nimInterfaceList.internalValue;
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

  // ppp_authentication_type - computed: false, optional: true, required: false
  private _pppAuthenticationType?: string; 
  public get pppAuthenticationType() {
    return this.getStringAttribute('ppp_authentication_type');
  }
  public set pppAuthenticationType(value: string) {
    this._pppAuthenticationType = value;
  }
  public resetPppAuthenticationType() {
    this._pppAuthenticationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pppAuthenticationTypeInput() {
    return this._pppAuthenticationType;
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
  private _tunnelInterfaceEncapsulations = new VpnInterfaceMultilinkFeatureTemplateTunnelInterfaceEncapsulationsList(this, "tunnel_interface_encapsulations", false);
  public get tunnelInterfaceEncapsulations() {
    return this._tunnelInterfaceEncapsulations;
  }
  public putTunnelInterfaceEncapsulations(value: VpnInterfaceMultilinkFeatureTemplateTunnelInterfaceEncapsulations[] | cdktf.IResolvable) {
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
      access_lists: cdktf.listMapper(vpnInterfaceMultilinkFeatureTemplateAccessListsToTerraform, false)(this._accessLists.internalValue),
      autonegotiate: cdktf.booleanToTerraform(this._autonegotiate),
      autonegotiate_variable: cdktf.stringToTerraform(this._autonegotiateVariable),
      bandwidth_downstream: cdktf.numberToTerraform(this._bandwidthDownstream),
      bandwidth_downstream_variable: cdktf.stringToTerraform(this._bandwidthDownstreamVariable),
      bandwidth_upstream: cdktf.numberToTerraform(this._bandwidthUpstream),
      bandwidth_upstream_variable: cdktf.stringToTerraform(this._bandwidthUpstreamVariable),
      chap_hostname: cdktf.stringToTerraform(this._chapHostname),
      chap_hostname_variable: cdktf.stringToTerraform(this._chapHostnameVariable),
      chap_ppp_auth_password: cdktf.stringToTerraform(this._chapPppAuthPassword),
      chap_ppp_auth_password_variable: cdktf.stringToTerraform(this._chapPppAuthPasswordVariable),
      clear_dont_fragment_bit: cdktf.booleanToTerraform(this._clearDontFragmentBit),
      clear_dont_fragment_bit_variable: cdktf.stringToTerraform(this._clearDontFragmentBitVariable),
      core_region: cdktf.stringToTerraform(this._coreRegion),
      core_region_variable: cdktf.stringToTerraform(this._coreRegionVariable),
      description: cdktf.stringToTerraform(this._description),
      device_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._deviceTypes),
      disable_fragmentation: cdktf.booleanToTerraform(this._disableFragmentation),
      enable_core_region: cdktf.booleanToTerraform(this._enableCoreRegion),
      enable_core_region_variable: cdktf.stringToTerraform(this._enableCoreRegionVariable),
      fragment_max_delay: cdktf.numberToTerraform(this._fragmentMaxDelay),
      fragment_max_delay_variable: cdktf.stringToTerraform(this._fragmentMaxDelayVariable),
      interface_description: cdktf.stringToTerraform(this._interfaceDescription),
      interface_description_variable: cdktf.stringToTerraform(this._interfaceDescriptionVariable),
      interface_name: cdktf.stringToTerraform(this._interfaceName),
      interface_name_variable: cdktf.stringToTerraform(this._interfaceNameVariable),
      interleaving_fragment: cdktf.booleanToTerraform(this._interleavingFragment),
      ip_mtu: cdktf.numberToTerraform(this._ipMtu),
      ip_mtu_variable: cdktf.stringToTerraform(this._ipMtuVariable),
      ipv4_address: cdktf.stringToTerraform(this._ipv4Address),
      ipv4_address_variable: cdktf.stringToTerraform(this._ipv4AddressVariable),
      ipv6_access_lists: cdktf.listMapper(vpnInterfaceMultilinkFeatureTemplateIpv6AccessListsToTerraform, false)(this._ipv6AccessLists.internalValue),
      ipv6_address: cdktf.stringToTerraform(this._ipv6Address),
      ipv6_address_variable: cdktf.stringToTerraform(this._ipv6AddressVariable),
      multilink_group_number: cdktf.numberToTerraform(this._multilinkGroupNumber),
      multilink_group_number_variable: cdktf.stringToTerraform(this._multilinkGroupNumberVariable),
      multilink_interfaces: cdktf.listMapper(vpnInterfaceMultilinkFeatureTemplateMultilinkInterfacesToTerraform, false)(this._multilinkInterfaces.internalValue),
      name: cdktf.stringToTerraform(this._name),
      nim_interface_list: cdktf.listMapper(vpnInterfaceMultilinkFeatureTemplateNimInterfaceListStructToTerraform, false)(this._nimInterfaceList.internalValue),
      pap_password: cdktf.booleanToTerraform(this._papPassword),
      pap_ppp_auth_password: cdktf.stringToTerraform(this._papPppAuthPassword),
      pap_ppp_auth_password_variable: cdktf.stringToTerraform(this._papPppAuthPasswordVariable),
      pap_username: cdktf.stringToTerraform(this._papUsername),
      pap_username_variable: cdktf.stringToTerraform(this._papUsernameVariable),
      per_tunnel_qos: cdktf.booleanToTerraform(this._perTunnelQos),
      per_tunnel_qos_aggregator: cdktf.booleanToTerraform(this._perTunnelQosAggregator),
      per_tunnel_qos_aggregator_variable: cdktf.stringToTerraform(this._perTunnelQosAggregatorVariable),
      per_tunnel_qos_variable: cdktf.stringToTerraform(this._perTunnelQosVariable),
      pmtu_discovery: cdktf.booleanToTerraform(this._pmtuDiscovery),
      pmtu_discovery_variable: cdktf.stringToTerraform(this._pmtuDiscoveryVariable),
      ppp_authentication_protocol: cdktf.stringToTerraform(this._pppAuthenticationProtocol),
      ppp_authentication_protocol_pap: cdktf.booleanToTerraform(this._pppAuthenticationProtocolPap),
      ppp_authentication_type: cdktf.stringToTerraform(this._pppAuthenticationType),
      qos_map: cdktf.stringToTerraform(this._qosMap),
      qos_map_variable: cdktf.stringToTerraform(this._qosMapVariable),
      qos_map_vpn: cdktf.stringToTerraform(this._qosMapVpn),
      qos_map_vpn_variable: cdktf.stringToTerraform(this._qosMapVpnVariable),
      secondary_region: cdktf.stringToTerraform(this._secondaryRegion),
      secondary_region_variable: cdktf.stringToTerraform(this._secondaryRegionVariable),
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
      tunnel_interface_color_restrict: cdktf.booleanToTerraform(this._tunnelInterfaceColorRestrict),
      tunnel_interface_color_variable: cdktf.stringToTerraform(this._tunnelInterfaceColorVariable),
      tunnel_interface_control_connections: cdktf.booleanToTerraform(this._tunnelInterfaceControlConnections),
      tunnel_interface_control_connections_variable: cdktf.stringToTerraform(this._tunnelInterfaceControlConnectionsVariable),
      tunnel_interface_encapsulations: cdktf.listMapper(vpnInterfaceMultilinkFeatureTemplateTunnelInterfaceEncapsulationsToTerraform, false)(this._tunnelInterfaceEncapsulations.internalValue),
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
      write_rule: cdktf.stringToTerraform(this._writeRule),
      write_rule_variable: cdktf.stringToTerraform(this._writeRuleVariable),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_lists: {
        value: cdktf.listMapperHcl(vpnInterfaceMultilinkFeatureTemplateAccessListsToHclTerraform, false)(this._accessLists.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VpnInterfaceMultilinkFeatureTemplateAccessListsList",
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
      disable_fragmentation: {
        value: cdktf.booleanToHclTerraform(this._disableFragmentation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      fragment_max_delay: {
        value: cdktf.numberToHclTerraform(this._fragmentMaxDelay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fragment_max_delay_variable: {
        value: cdktf.stringToHclTerraform(this._fragmentMaxDelayVariable),
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
      interleaving_fragment: {
        value: cdktf.booleanToHclTerraform(this._interleavingFragment),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      ipv6_access_lists: {
        value: cdktf.listMapperHcl(vpnInterfaceMultilinkFeatureTemplateIpv6AccessListsToHclTerraform, false)(this._ipv6AccessLists.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VpnInterfaceMultilinkFeatureTemplateIpv6AccessListsList",
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
      multilink_group_number: {
        value: cdktf.numberToHclTerraform(this._multilinkGroupNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      multilink_group_number_variable: {
        value: cdktf.stringToHclTerraform(this._multilinkGroupNumberVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      multilink_interfaces: {
        value: cdktf.listMapperHcl(vpnInterfaceMultilinkFeatureTemplateMultilinkInterfacesToHclTerraform, false)(this._multilinkInterfaces.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VpnInterfaceMultilinkFeatureTemplateMultilinkInterfacesList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nim_interface_list: {
        value: cdktf.listMapperHcl(vpnInterfaceMultilinkFeatureTemplateNimInterfaceListStructToHclTerraform, false)(this._nimInterfaceList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VpnInterfaceMultilinkFeatureTemplateNimInterfaceListStructList",
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
      ppp_authentication_type: {
        value: cdktf.stringToHclTerraform(this._pppAuthenticationType),
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
        value: cdktf.listMapperHcl(vpnInterfaceMultilinkFeatureTemplateTunnelInterfaceEncapsulationsToHclTerraform, false)(this._tunnelInterfaceEncapsulations.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VpnInterfaceMultilinkFeatureTemplateTunnelInterfaceEncapsulationsList",
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
