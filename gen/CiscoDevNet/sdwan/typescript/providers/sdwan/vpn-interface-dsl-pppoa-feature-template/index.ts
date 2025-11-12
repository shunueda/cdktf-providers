// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpnInterfaceDslPppoaFeatureTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Apply ACL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#access_lists VpnInterfaceDslPppoaFeatureTemplate#access_lists}
  */
  readonly accessLists?: VpnInterfaceDslPppoaFeatureTemplateAccessLists[] | cdktf.IResolvable;
  /**
  * Interface description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#atm_description VpnInterfaceDslPppoaFeatureTemplate#atm_description}
  */
  readonly atmDescription?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#atm_description_variable VpnInterfaceDslPppoaFeatureTemplate#atm_description_variable}
  */
  readonly atmDescriptionVariable?: string;
  /**
  * ATM Sub interface Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#atm_sub_interface_name VpnInterfaceDslPppoaFeatureTemplate#atm_sub_interface_name}
  */
  readonly atmSubInterfaceName?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#atm_sub_interface_name_variable VpnInterfaceDslPppoaFeatureTemplate#atm_sub_interface_name_variable}
  */
  readonly atmSubInterfaceNameVariable?: string;
  /**
  * Interface downstream bandwidth capacity, in kbps
  *   - Range: `1`-`2147483647`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#bandwidth_downstream VpnInterfaceDslPppoaFeatureTemplate#bandwidth_downstream}
  */
  readonly bandwidthDownstream?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#bandwidth_downstream_variable VpnInterfaceDslPppoaFeatureTemplate#bandwidth_downstream_variable}
  */
  readonly bandwidthDownstreamVariable?: string;
  /**
  * Interface upstream bandwidth capacity, in kbps
  *   - Range: `1`-`2147483647`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#bandwidth_upstream VpnInterfaceDslPppoaFeatureTemplate#bandwidth_upstream}
  */
  readonly bandwidthUpstream?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#bandwidth_upstream_variable VpnInterfaceDslPppoaFeatureTemplate#bandwidth_upstream_variable}
  */
  readonly bandwidthUpstreamVariable?: string;
  /**
  * CHAP Hostname
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#chap_hostname VpnInterfaceDslPppoaFeatureTemplate#chap_hostname}
  */
  readonly chapHostname?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#chap_hostname_variable VpnInterfaceDslPppoaFeatureTemplate#chap_hostname_variable}
  */
  readonly chapHostnameVariable?: string;
  /**
  * Specify ppp authentication Password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#chap_ppp_auth_password VpnInterfaceDslPppoaFeatureTemplate#chap_ppp_auth_password}
  */
  readonly chapPppAuthPassword?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#chap_ppp_auth_password_variable VpnInterfaceDslPppoaFeatureTemplate#chap_ppp_auth_password_variable}
  */
  readonly chapPppAuthPasswordVariable?: string;
  /**
  * Enable core region
  *   - Choices: `core`, `core-shared`
  *   - Default value: `core`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#core_region VpnInterfaceDslPppoaFeatureTemplate#core_region}
  */
  readonly coreRegion?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#core_region_variable VpnInterfaceDslPppoaFeatureTemplate#core_region_variable}
  */
  readonly coreRegionVariable?: string;
  /**
  * The description of the feature template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#description VpnInterfaceDslPppoaFeatureTemplate#description}
  */
  readonly description: string;
  /**
  * List of supported device types
  *   - Choices: `vedge-C8000V`, `vedge-C8300-1N1S-4T2X`, `vedge-C8300-1N1S-6T`, `vedge-C8300-2N2S-6T`, `vedge-C8300-2N2S-4T2X`, `vedge-C8500-12X4QC`, `vedge-C8500-12X`, `vedge-C8500-20X6C`, `vedge-C8500L-8S4X`, `vedge-C8200-1N-4T`, `vedge-C8200L-1N-4T`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#device_types VpnInterfaceDslPppoaFeatureTemplate#device_types}
  */
  readonly deviceTypes: string[];
  /**
  * Enable core region
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#enable_core_region VpnInterfaceDslPppoaFeatureTemplate#enable_core_region}
  */
  readonly enableCoreRegion?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#enable_core_region_variable VpnInterfaceDslPppoaFeatureTemplate#enable_core_region_variable}
  */
  readonly enableCoreRegionVariable?: string;
  /**
  * IP Directed-Broadcast
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#ip_directed_broadcast VpnInterfaceDslPppoaFeatureTemplate#ip_directed_broadcast}
  */
  readonly ipDirectedBroadcast?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#ip_directed_broadcast_variable VpnInterfaceDslPppoaFeatureTemplate#ip_directed_broadcast_variable}
  */
  readonly ipDirectedBroadcastVariable?: string;
  /**
  * Interface MTU <576..2000>, in bytes
  *   - Range: `576`-`2000`
  *   - Default value: `1500`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#ip_mtu VpnInterfaceDslPppoaFeatureTemplate#ip_mtu}
  */
  readonly ipMtu?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#ip_mtu_variable VpnInterfaceDslPppoaFeatureTemplate#ip_mtu_variable}
  */
  readonly ipMtuVariable?: string;
  /**
  * The name of the feature template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#name VpnInterfaceDslPppoaFeatureTemplate#name}
  */
  readonly name: string;
  /**
  * Network Address Translation on this interface
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#nat VpnInterfaceDslPppoaFeatureTemplate#nat}
  */
  readonly nat?: boolean | cdktf.IResolvable;
  /**
  * Block inbound ICMP error messages
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#nat_block_icmp_error VpnInterfaceDslPppoaFeatureTemplate#nat_block_icmp_error}
  */
  readonly natBlockIcmpError?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#nat_block_icmp_error_variable VpnInterfaceDslPppoaFeatureTemplate#nat_block_icmp_error_variable}
  */
  readonly natBlockIcmpErrorVariable?: string;
  /**
  * Set port-forwarding rules for NAT on this interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#nat_port_forwards VpnInterfaceDslPppoaFeatureTemplate#nat_port_forwards}
  */
  readonly natPortForwards?: VpnInterfaceDslPppoaFeatureTemplateNatPortForwards[] | cdktf.IResolvable;
  /**
  * Set NAT refresh mode
  *   - Choices: `outbound`, `bi-directional`
  *   - Default value: `outbound`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#nat_refresh_mode VpnInterfaceDslPppoaFeatureTemplate#nat_refresh_mode}
  */
  readonly natRefreshMode?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#nat_refresh_mode_variable VpnInterfaceDslPppoaFeatureTemplate#nat_refresh_mode_variable}
  */
  readonly natRefreshModeVariable?: string;
  /**
  * Respond to ping requests to NAT interface ip address from the public side
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#nat_response_to_ping VpnInterfaceDslPppoaFeatureTemplate#nat_response_to_ping}
  */
  readonly natResponseToPing?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#nat_response_to_ping_variable VpnInterfaceDslPppoaFeatureTemplate#nat_response_to_ping_variable}
  */
  readonly natResponseToPingVariable?: string;
  /**
  * Set NAT TCP session timeout, in minutes
  *   - Range: `1`-`8947`
  *   - Default value: `60`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#nat_tcp_timeout VpnInterfaceDslPppoaFeatureTemplate#nat_tcp_timeout}
  */
  readonly natTcpTimeout?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#nat_tcp_timeout_variable VpnInterfaceDslPppoaFeatureTemplate#nat_tcp_timeout_variable}
  */
  readonly natTcpTimeoutVariable?: string;
  /**
  * Set NAT UDP session timeout, in minutes
  *   - Range: `1`-`8947`
  *   - Default value: `1`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#nat_udp_timeout VpnInterfaceDslPppoaFeatureTemplate#nat_udp_timeout}
  */
  readonly natUdpTimeout?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#nat_udp_timeout_variable VpnInterfaceDslPppoaFeatureTemplate#nat_udp_timeout_variable}
  */
  readonly natUdpTimeoutVariable?: string;
  /**
  * PAP outbound Password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#pap_password VpnInterfaceDslPppoaFeatureTemplate#pap_password}
  */
  readonly papPassword?: boolean | cdktf.IResolvable;
  /**
  * Specify ppp authentication Password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#pap_ppp_auth_password VpnInterfaceDslPppoaFeatureTemplate#pap_ppp_auth_password}
  */
  readonly papPppAuthPassword?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#pap_ppp_auth_password_variable VpnInterfaceDslPppoaFeatureTemplate#pap_ppp_auth_password_variable}
  */
  readonly papPppAuthPasswordVariable?: string;
  /**
  * PAP outbound Sent Username
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#pap_username VpnInterfaceDslPppoaFeatureTemplate#pap_username}
  */
  readonly papUsername?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#pap_username_variable VpnInterfaceDslPppoaFeatureTemplate#pap_username_variable}
  */
  readonly papUsernameVariable?: string;
  /**
  * Per-tunnel Qos
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#per_tunnel_qos VpnInterfaceDslPppoaFeatureTemplate#per_tunnel_qos}
  */
  readonly perTunnelQos?: boolean | cdktf.IResolvable;
  /**
  * Per-tunnel QoS Aggregator
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#per_tunnel_qos_aggregator VpnInterfaceDslPppoaFeatureTemplate#per_tunnel_qos_aggregator}
  */
  readonly perTunnelQosAggregator?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#per_tunnel_qos_aggregator_variable VpnInterfaceDslPppoaFeatureTemplate#per_tunnel_qos_aggregator_variable}
  */
  readonly perTunnelQosAggregatorVariable?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#per_tunnel_qos_variable VpnInterfaceDslPppoaFeatureTemplate#per_tunnel_qos_variable}
  */
  readonly perTunnelQosVariable?: string;
  /**
  * Enable policer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#policers VpnInterfaceDslPppoaFeatureTemplate#policers}
  */
  readonly policers?: VpnInterfaceDslPppoaFeatureTemplatePolicers[] | cdktf.IResolvable;
  /**
  * PPP Link Authentication Protocol
  *   - Choices: `chap`, `pap`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#ppp_authentication_protocol VpnInterfaceDslPppoaFeatureTemplate#ppp_authentication_protocol}
  */
  readonly pppAuthenticationProtocol?: string;
  /**
  * PPP Authentication Protocol PAP
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#ppp_authentication_protocol_pap VpnInterfaceDslPppoaFeatureTemplate#ppp_authentication_protocol_pap}
  */
  readonly pppAuthenticationProtocolPap?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#ppp_authentication_protocol_variable VpnInterfaceDslPppoaFeatureTemplate#ppp_authentication_protocol_variable}
  */
  readonly pppAuthenticationProtocolVariable?: string;
  /**
  * Authenticate remote on incoming call only
  *   - Choices: `callin`, `false`
  *   - Default value: `callin`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#ppp_authentication_type VpnInterfaceDslPppoaFeatureTemplate#ppp_authentication_type}
  */
  readonly pppAuthenticationType?: string;
  /**
  * pvc
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#pvcs VpnInterfaceDslPppoaFeatureTemplate#pvcs}
  */
  readonly pvcs?: VpnInterfaceDslPppoaFeatureTemplatePvcs[] | cdktf.IResolvable;
  /**
  * Adaptive QoS default downstream bandwidth
  *   - Range: `8`-`100000000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#qos_adaptive_bandwidth_downstream VpnInterfaceDslPppoaFeatureTemplate#qos_adaptive_bandwidth_downstream}
  */
  readonly qosAdaptiveBandwidthDownstream?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#qos_adaptive_bandwidth_downstream_variable VpnInterfaceDslPppoaFeatureTemplate#qos_adaptive_bandwidth_downstream_variable}
  */
  readonly qosAdaptiveBandwidthDownstreamVariable?: string;
  /**
  * Adaptive QoS default upstream bandwidth
  *   - Range: `8`-`100000000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#qos_adaptive_bandwidth_upstream VpnInterfaceDslPppoaFeatureTemplate#qos_adaptive_bandwidth_upstream}
  */
  readonly qosAdaptiveBandwidthUpstream?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#qos_adaptive_bandwidth_upstream_variable VpnInterfaceDslPppoaFeatureTemplate#qos_adaptive_bandwidth_upstream_variable}
  */
  readonly qosAdaptiveBandwidthUpstreamVariable?: string;
  /**
  * Downstream max bandwidth limit
  *   - Range: `8`-`100000000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#qos_adaptive_max_downstream VpnInterfaceDslPppoaFeatureTemplate#qos_adaptive_max_downstream}
  */
  readonly qosAdaptiveMaxDownstream?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#qos_adaptive_max_downstream_variable VpnInterfaceDslPppoaFeatureTemplate#qos_adaptive_max_downstream_variable}
  */
  readonly qosAdaptiveMaxDownstreamVariable?: string;
  /**
  * Upstream max bandwidth limit
  *   - Range: `8`-`100000000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#qos_adaptive_max_upstream VpnInterfaceDslPppoaFeatureTemplate#qos_adaptive_max_upstream}
  */
  readonly qosAdaptiveMaxUpstream?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#qos_adaptive_max_upstream_variable VpnInterfaceDslPppoaFeatureTemplate#qos_adaptive_max_upstream_variable}
  */
  readonly qosAdaptiveMaxUpstreamVariable?: string;
  /**
  * Downstream min bandwidth limit
  *   - Range: `8`-`100000000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#qos_adaptive_min_downstream VpnInterfaceDslPppoaFeatureTemplate#qos_adaptive_min_downstream}
  */
  readonly qosAdaptiveMinDownstream?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#qos_adaptive_min_downstream_variable VpnInterfaceDslPppoaFeatureTemplate#qos_adaptive_min_downstream_variable}
  */
  readonly qosAdaptiveMinDownstreamVariable?: string;
  /**
  * Upstream min bandwidth limit
  *   - Range: `8`-`100000000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#qos_adaptive_min_upstream VpnInterfaceDslPppoaFeatureTemplate#qos_adaptive_min_upstream}
  */
  readonly qosAdaptiveMinUpstream?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#qos_adaptive_min_upstream_variable VpnInterfaceDslPppoaFeatureTemplate#qos_adaptive_min_upstream_variable}
  */
  readonly qosAdaptiveMinUpstreamVariable?: string;
  /**
  * Periodic timer for adaptive QoS in minutes
  *   - Range: `1`-`720`
  *   - Default value: `15`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#qos_adaptive_period VpnInterfaceDslPppoaFeatureTemplate#qos_adaptive_period}
  */
  readonly qosAdaptivePeriod?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#qos_adaptive_period_variable VpnInterfaceDslPppoaFeatureTemplate#qos_adaptive_period_variable}
  */
  readonly qosAdaptivePeriodVariable?: string;
  /**
  * Name of QoS map
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#qos_map VpnInterfaceDslPppoaFeatureTemplate#qos_map}
  */
  readonly qosMap?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#qos_map_variable VpnInterfaceDslPppoaFeatureTemplate#qos_map_variable}
  */
  readonly qosMapVariable?: string;
  /**
  * Name of VPN QoS map
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#qos_map_vpn VpnInterfaceDslPppoaFeatureTemplate#qos_map_vpn}
  */
  readonly qosMapVpn?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#qos_map_vpn_variable VpnInterfaceDslPppoaFeatureTemplate#qos_map_vpn_variable}
  */
  readonly qosMapVpnVariable?: string;
  /**
  * Enable secondary region
  *   - Choices: `off`, `secondary-only`, `secondary-shared`
  *   - Default value: `off`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#secondary_region VpnInterfaceDslPppoaFeatureTemplate#secondary_region}
  */
  readonly secondaryRegion?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#secondary_region_variable VpnInterfaceDslPppoaFeatureTemplate#secondary_region_variable}
  */
  readonly secondaryRegionVariable?: string;
  /**
  * 1ge  interfaces: [0..1000000]kbps; 10ge interfaces: [0..10000000]kbps
  *   - Range: `8`-`100000000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#shaping_rate VpnInterfaceDslPppoaFeatureTemplate#shaping_rate}
  */
  readonly shapingRate?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#shaping_rate_variable VpnInterfaceDslPppoaFeatureTemplate#shaping_rate_variable}
  */
  readonly shapingRateVariable?: string;
  /**
  * Administrative state
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#shutdown VpnInterfaceDslPppoaFeatureTemplate#shutdown}
  */
  readonly shutdown?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#shutdown_variable VpnInterfaceDslPppoaFeatureTemplate#shutdown_variable}
  */
  readonly shutdownVariable?: string;
  /**
  * TCP MSS on SYN packets, in bytes
  *   - Range: `552`-`1960`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#tcp_mss VpnInterfaceDslPppoaFeatureTemplate#tcp_mss}
  */
  readonly tcpMss?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#tcp_mss_variable VpnInterfaceDslPppoaFeatureTemplate#tcp_mss_variable}
  */
  readonly tcpMssVariable?: string;
  /**
  * Extends a local TLOC to a remote node only for vpn 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#tloc_extension VpnInterfaceDslPppoaFeatureTemplate#tloc_extension}
  */
  readonly tlocExtension?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#tloc_extension_variable VpnInterfaceDslPppoaFeatureTemplate#tloc_extension_variable}
  */
  readonly tlocExtensionVariable?: string;
  /**
  * Enable tracker for this interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#tracker VpnInterfaceDslPppoaFeatureTemplate#tracker}
  */
  readonly tracker?: string[];
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#tracker_variable VpnInterfaceDslPppoaFeatureTemplate#tracker_variable}
  */
  readonly trackerVariable?: string;
  /**
  * Allow all traffic. Overrides all other allow-service options if allow-service all is set
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#tunnel_interface_allow_all VpnInterfaceDslPppoaFeatureTemplate#tunnel_interface_allow_all}
  */
  readonly tunnelInterfaceAllowAll?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#tunnel_interface_allow_all_variable VpnInterfaceDslPppoaFeatureTemplate#tunnel_interface_allow_all_variable}
  */
  readonly tunnelInterfaceAllowAllVariable?: string;
  /**
  * Allow/deny BGP
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#tunnel_interface_allow_bgp VpnInterfaceDslPppoaFeatureTemplate#tunnel_interface_allow_bgp}
  */
  readonly tunnelInterfaceAllowBgp?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#tunnel_interface_allow_bgp_variable VpnInterfaceDslPppoaFeatureTemplate#tunnel_interface_allow_bgp_variable}
  */
  readonly tunnelInterfaceAllowBgpVariable?: string;
  /**
  * Allow/Deny DHCP
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#tunnel_interface_allow_dhcp VpnInterfaceDslPppoaFeatureTemplate#tunnel_interface_allow_dhcp}
  */
  readonly tunnelInterfaceAllowDhcp?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#tunnel_interface_allow_dhcp_variable VpnInterfaceDslPppoaFeatureTemplate#tunnel_interface_allow_dhcp_variable}
  */
  readonly tunnelInterfaceAllowDhcpVariable?: string;
  /**
  * Allow/Deny DNS
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#tunnel_interface_allow_dns VpnInterfaceDslPppoaFeatureTemplate#tunnel_interface_allow_dns}
  */
  readonly tunnelInterfaceAllowDns?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#tunnel_interface_allow_dns_variable VpnInterfaceDslPppoaFeatureTemplate#tunnel_interface_allow_dns_variable}
  */
  readonly tunnelInterfaceAllowDnsVariable?: string;
  /**
  * Allow/Deny Https
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#tunnel_interface_allow_https VpnInterfaceDslPppoaFeatureTemplate#tunnel_interface_allow_https}
  */
  readonly tunnelInterfaceAllowHttps?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#tunnel_interface_allow_https_variable VpnInterfaceDslPppoaFeatureTemplate#tunnel_interface_allow_https_variable}
  */
  readonly tunnelInterfaceAllowHttpsVariable?: string;
  /**
  * Allow/Deny ICMP
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#tunnel_interface_allow_icmp VpnInterfaceDslPppoaFeatureTemplate#tunnel_interface_allow_icmp}
  */
  readonly tunnelInterfaceAllowIcmp?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#tunnel_interface_allow_icmp_variable VpnInterfaceDslPppoaFeatureTemplate#tunnel_interface_allow_icmp_variable}
  */
  readonly tunnelInterfaceAllowIcmpVariable?: string;
  /**
  * Allow/Deny NETCONF
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#tunnel_interface_allow_netconf VpnInterfaceDslPppoaFeatureTemplate#tunnel_interface_allow_netconf}
  */
  readonly tunnelInterfaceAllowNetconf?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#tunnel_interface_allow_netconf_variable VpnInterfaceDslPppoaFeatureTemplate#tunnel_interface_allow_netconf_variable}
  */
  readonly tunnelInterfaceAllowNetconfVariable?: string;
  /**
  * Allow/Deny NTP
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#tunnel_interface_allow_ntp VpnInterfaceDslPppoaFeatureTemplate#tunnel_interface_allow_ntp}
  */
  readonly tunnelInterfaceAllowNtp?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#tunnel_interface_allow_ntp_variable VpnInterfaceDslPppoaFeatureTemplate#tunnel_interface_allow_ntp_variable}
  */
  readonly tunnelInterfaceAllowNtpVariable?: string;
  /**
  * Allow/Deny OSPF
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#tunnel_interface_allow_ospf VpnInterfaceDslPppoaFeatureTemplate#tunnel_interface_allow_ospf}
  */
  readonly tunnelInterfaceAllowOspf?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#tunnel_interface_allow_ospf_variable VpnInterfaceDslPppoaFeatureTemplate#tunnel_interface_allow_ospf_variable}
  */
  readonly tunnelInterfaceAllowOspfVariable?: string;
  /**
  * Allow/Deny SNMP
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#tunnel_interface_allow_snmp VpnInterfaceDslPppoaFeatureTemplate#tunnel_interface_allow_snmp}
  */
  readonly tunnelInterfaceAllowSnmp?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#tunnel_interface_allow_snmp_variable VpnInterfaceDslPppoaFeatureTemplate#tunnel_interface_allow_snmp_variable}
  */
  readonly tunnelInterfaceAllowSnmpVariable?: string;
  /**
  * Allow/Deny SSH
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#tunnel_interface_allow_ssh VpnInterfaceDslPppoaFeatureTemplate#tunnel_interface_allow_ssh}
  */
  readonly tunnelInterfaceAllowSsh?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#tunnel_interface_allow_ssh_variable VpnInterfaceDslPppoaFeatureTemplate#tunnel_interface_allow_ssh_variable}
  */
  readonly tunnelInterfaceAllowSshVariable?: string;
  /**
  * Allow/Deny STUN
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#tunnel_interface_allow_stun VpnInterfaceDslPppoaFeatureTemplate#tunnel_interface_allow_stun}
  */
  readonly tunnelInterfaceAllowStun?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#tunnel_interface_allow_stun_variable VpnInterfaceDslPppoaFeatureTemplate#tunnel_interface_allow_stun_variable}
  */
  readonly tunnelInterfaceAllowStunVariable?: string;
  /**
  * Bind loopback tunnel interface to a physical interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#tunnel_interface_bind_loopback_tunnel VpnInterfaceDslPppoaFeatureTemplate#tunnel_interface_bind_loopback_tunnel}
  */
  readonly tunnelInterfaceBindLoopbackTunnel?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#tunnel_interface_bind_loopback_tunnel_variable VpnInterfaceDslPppoaFeatureTemplate#tunnel_interface_bind_loopback_tunnel_variable}
  */
  readonly tunnelInterfaceBindLoopbackTunnelVariable?: string;
  /**
  * Set TLOC as border TLOC
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#tunnel_interface_border VpnInterfaceDslPppoaFeatureTemplate#tunnel_interface_border}
  */
  readonly tunnelInterfaceBorder?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#tunnel_interface_border_variable VpnInterfaceDslPppoaFeatureTemplate#tunnel_interface_border_variable}
  */
  readonly tunnelInterfaceBorderVariable?: string;
  /**
  * Set carrier for TLOC
  *   - Choices: `default`, `carrier1`, `carrier2`, `carrier3`, `carrier4`, `carrier5`, `carrier6`, `carrier7`, `carrier8`
  *   - Default value: `default`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#tunnel_interface_carrier VpnInterfaceDslPppoaFeatureTemplate#tunnel_interface_carrier}
  */
  readonly tunnelInterfaceCarrier?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#tunnel_interface_carrier_variable VpnInterfaceDslPppoaFeatureTemplate#tunnel_interface_carrier_variable}
  */
  readonly tunnelInterfaceCarrierVariable?: string;
  /**
  * Enable clear dont fragment (Currently Only SDWAN Tunnel Interface)
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#tunnel_interface_clear_dont_fragment VpnInterfaceDslPppoaFeatureTemplate#tunnel_interface_clear_dont_fragment}
  */
  readonly tunnelInterfaceClearDontFragment?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#tunnel_interface_clear_dont_fragment_variable VpnInterfaceDslPppoaFeatureTemplate#tunnel_interface_clear_dont_fragment_variable}
  */
  readonly tunnelInterfaceClearDontFragmentVariable?: string;
  /**
  * Set color for TLOC
  *   - Choices: `default`, `mpls`, `metro-ethernet`, `biz-internet`, `public-internet`, `lte`, `3g`, `red`, `green`, `blue`, `gold`, `silver`, `bronze`, `custom1`, `custom2`, `custom3`, `private1`, `private2`, `private3`, `private4`, `private5`, `private6`
  *   - Default value: `default`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#tunnel_interface_color VpnInterfaceDslPppoaFeatureTemplate#tunnel_interface_color}
  */
  readonly tunnelInterfaceColor?: string;
  /**
  * Restrict this TLOC behavior
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#tunnel_interface_color_restrict VpnInterfaceDslPppoaFeatureTemplate#tunnel_interface_color_restrict}
  */
  readonly tunnelInterfaceColorRestrict?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#tunnel_interface_color_variable VpnInterfaceDslPppoaFeatureTemplate#tunnel_interface_color_variable}
  */
  readonly tunnelInterfaceColorVariable?: string;
  /**
  * Allow Control Connection
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#tunnel_interface_control_connections VpnInterfaceDslPppoaFeatureTemplate#tunnel_interface_control_connections}
  */
  readonly tunnelInterfaceControlConnections?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#tunnel_interface_control_connections_variable VpnInterfaceDslPppoaFeatureTemplate#tunnel_interface_control_connections_variable}
  */
  readonly tunnelInterfaceControlConnectionsVariable?: string;
  /**
  * Encapsulation for TLOC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#tunnel_interface_encapsulations VpnInterfaceDslPppoaFeatureTemplate#tunnel_interface_encapsulations}
  */
  readonly tunnelInterfaceEncapsulations?: VpnInterfaceDslPppoaFeatureTemplateTunnelInterfaceEncapsulations[] | cdktf.IResolvable;
  /**
  * Exclude the following controller groups defined in this list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#tunnel_interface_exclude_controller_group_list VpnInterfaceDslPppoaFeatureTemplate#tunnel_interface_exclude_controller_group_list}
  */
  readonly tunnelInterfaceExcludeControllerGroupList?: number[];
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#tunnel_interface_exclude_controller_group_list_variable VpnInterfaceDslPppoaFeatureTemplate#tunnel_interface_exclude_controller_group_list_variable}
  */
  readonly tunnelInterfaceExcludeControllerGroupListVariable?: string;
  /**
  * List of groups
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#tunnel_interface_groups VpnInterfaceDslPppoaFeatureTemplate#tunnel_interface_groups}
  */
  readonly tunnelInterfaceGroups?: number[];
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#tunnel_interface_groups_variable VpnInterfaceDslPppoaFeatureTemplate#tunnel_interface_groups_variable}
  */
  readonly tunnelInterfaceGroupsVariable?: string;
  /**
  * Set time period of control hello packets <100..600000> milli seconds
  *   - Range: `100`-`600000`
  *   - Default value: `1000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#tunnel_interface_hello_interval VpnInterfaceDslPppoaFeatureTemplate#tunnel_interface_hello_interval}
  */
  readonly tunnelInterfaceHelloInterval?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#tunnel_interface_hello_interval_variable VpnInterfaceDslPppoaFeatureTemplate#tunnel_interface_hello_interval_variable}
  */
  readonly tunnelInterfaceHelloIntervalVariable?: string;
  /**
  * Set tolerance of control hello packets <12..6000> seconds
  *   - Range: `12`-`6000`
  *   - Default value: `12`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#tunnel_interface_hello_tolerance VpnInterfaceDslPppoaFeatureTemplate#tunnel_interface_hello_tolerance}
  */
  readonly tunnelInterfaceHelloTolerance?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#tunnel_interface_hello_tolerance_variable VpnInterfaceDslPppoaFeatureTemplate#tunnel_interface_hello_tolerance_variable}
  */
  readonly tunnelInterfaceHelloToleranceVariable?: string;
  /**
  * Set TLOC as last resort
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#tunnel_interface_last_resort_circuit VpnInterfaceDslPppoaFeatureTemplate#tunnel_interface_last_resort_circuit}
  */
  readonly tunnelInterfaceLastResortCircuit?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#tunnel_interface_last_resort_circuit_variable VpnInterfaceDslPppoaFeatureTemplate#tunnel_interface_last_resort_circuit_variable}
  */
  readonly tunnelInterfaceLastResortCircuitVariable?: string;
  /**
  * Set the interface as a low-bandwidth circuit
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#tunnel_interface_low_bandwidth_link VpnInterfaceDslPppoaFeatureTemplate#tunnel_interface_low_bandwidth_link}
  */
  readonly tunnelInterfaceLowBandwidthLink?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#tunnel_interface_low_bandwidth_link_variable VpnInterfaceDslPppoaFeatureTemplate#tunnel_interface_low_bandwidth_link_variable}
  */
  readonly tunnelInterfaceLowBandwidthLinkVariable?: string;
  /**
  * Set the maximum number of control connections for this TLOC
  *   - Range: `0`-`8`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#tunnel_interface_max_control_connections VpnInterfaceDslPppoaFeatureTemplate#tunnel_interface_max_control_connections}
  */
  readonly tunnelInterfaceMaxControlConnections?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#tunnel_interface_max_control_connections_variable VpnInterfaceDslPppoaFeatureTemplate#tunnel_interface_max_control_connections_variable}
  */
  readonly tunnelInterfaceMaxControlConnectionsVariable?: string;
  /**
  * Set time period of nat refresh packets <1...60> seconds
  *   - Range: `1`-`60`
  *   - Default value: `5`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#tunnel_interface_nat_refresh_interval VpnInterfaceDslPppoaFeatureTemplate#tunnel_interface_nat_refresh_interval}
  */
  readonly tunnelInterfaceNatRefreshInterval?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#tunnel_interface_nat_refresh_interval_variable VpnInterfaceDslPppoaFeatureTemplate#tunnel_interface_nat_refresh_interval_variable}
  */
  readonly tunnelInterfaceNatRefreshIntervalVariable?: string;
  /**
  * Accept and respond to network-prefix-directed broadcasts)
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#tunnel_interface_network_broadcast VpnInterfaceDslPppoaFeatureTemplate#tunnel_interface_network_broadcast}
  */
  readonly tunnelInterfaceNetworkBroadcast?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#tunnel_interface_network_broadcast_variable VpnInterfaceDslPppoaFeatureTemplate#tunnel_interface_network_broadcast_variable}
  */
  readonly tunnelInterfaceNetworkBroadcastVariable?: string;
  /**
  * Disallow port hopping on the tunnel interface
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#tunnel_interface_port_hop VpnInterfaceDslPppoaFeatureTemplate#tunnel_interface_port_hop}
  */
  readonly tunnelInterfacePortHop?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#tunnel_interface_port_hop_variable VpnInterfaceDslPppoaFeatureTemplate#tunnel_interface_port_hop_variable}
  */
  readonly tunnelInterfacePortHopVariable?: string;
  /**
  * Tunnel TCP MSS on SYN packets, in bytes
  *   - Range: `500`-`1460`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#tunnel_interface_tunnel_tcp_mss VpnInterfaceDslPppoaFeatureTemplate#tunnel_interface_tunnel_tcp_mss}
  */
  readonly tunnelInterfaceTunnelTcpMss?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#tunnel_interface_tunnel_tcp_mss_variable VpnInterfaceDslPppoaFeatureTemplate#tunnel_interface_tunnel_tcp_mss_variable}
  */
  readonly tunnelInterfaceTunnelTcpMssVariable?: string;
  /**
  * Put this wan interface in STUN mode only
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#tunnel_interface_vbond_as_stun_server VpnInterfaceDslPppoaFeatureTemplate#tunnel_interface_vbond_as_stun_server}
  */
  readonly tunnelInterfaceVbondAsStunServer?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#tunnel_interface_vbond_as_stun_server_variable VpnInterfaceDslPppoaFeatureTemplate#tunnel_interface_vbond_as_stun_server_variable}
  */
  readonly tunnelInterfaceVbondAsStunServerVariable?: string;
  /**
  * Set interface preference for control connection to vManage <0..8>
  *   - Range: `0`-`8`
  *   - Default value: `5`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#tunnel_interface_vmanage_connection_preference VpnInterfaceDslPppoaFeatureTemplate#tunnel_interface_vmanage_connection_preference}
  */
  readonly tunnelInterfaceVmanageConnectionPreference?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#tunnel_interface_vmanage_connection_preference_variable VpnInterfaceDslPppoaFeatureTemplate#tunnel_interface_vmanage_connection_preference_variable}
  */
  readonly tunnelInterfaceVmanageConnectionPreferenceVariable?: string;
  /**
  * Set tunnel QoS mode
  *   - Choices: `spoke`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#tunnel_qos_mode VpnInterfaceDslPppoaFeatureTemplate#tunnel_qos_mode}
  */
  readonly tunnelQosMode?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#tunnel_qos_mode_variable VpnInterfaceDslPppoaFeatureTemplate#tunnel_qos_mode_variable}
  */
  readonly tunnelQosModeVariable?: string;
  /**
  * vdsl
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#vdsl_configuration VpnInterfaceDslPppoaFeatureTemplate#vdsl_configuration}
  */
  readonly vdslConfiguration?: VpnInterfaceDslPppoaFeatureTemplateVdslConfiguration[] | cdktf.IResolvable;
  /**
  * Name of rewrite rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#write_rule VpnInterfaceDslPppoaFeatureTemplate#write_rule}
  */
  readonly writeRule?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#write_rule_variable VpnInterfaceDslPppoaFeatureTemplate#write_rule_variable}
  */
  readonly writeRuleVariable?: string;
}
export interface VpnInterfaceDslPppoaFeatureTemplateAccessLists {
  /**
  * Name of access list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#acl_name VpnInterfaceDslPppoaFeatureTemplate#acl_name}
  */
  readonly aclName?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#acl_name_variable VpnInterfaceDslPppoaFeatureTemplate#acl_name_variable}
  */
  readonly aclNameVariable?: string;
  /**
  * Direction
  *   - Choices: `in`, `out`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#direction VpnInterfaceDslPppoaFeatureTemplate#direction}
  */
  readonly direction?: string;
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#optional VpnInterfaceDslPppoaFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function vpnInterfaceDslPppoaFeatureTemplateAccessListsToTerraform(struct?: VpnInterfaceDslPppoaFeatureTemplateAccessLists | cdktf.IResolvable): any {
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


export function vpnInterfaceDslPppoaFeatureTemplateAccessListsToHclTerraform(struct?: VpnInterfaceDslPppoaFeatureTemplateAccessLists | cdktf.IResolvable): any {
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

export class VpnInterfaceDslPppoaFeatureTemplateAccessListsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpnInterfaceDslPppoaFeatureTemplateAccessLists | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VpnInterfaceDslPppoaFeatureTemplateAccessLists | cdktf.IResolvable | undefined) {
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

export class VpnInterfaceDslPppoaFeatureTemplateAccessListsList extends cdktf.ComplexList {
  public internalValue? : VpnInterfaceDslPppoaFeatureTemplateAccessLists[] | cdktf.IResolvable

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
  public get(index: number): VpnInterfaceDslPppoaFeatureTemplateAccessListsOutputReference {
    return new VpnInterfaceDslPppoaFeatureTemplateAccessListsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VpnInterfaceDslPppoaFeatureTemplateNatPortForwards {
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#optional VpnInterfaceDslPppoaFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * Ending port of port range
  *   - Range: `0`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#port_end_range VpnInterfaceDslPppoaFeatureTemplate#port_end_range}
  */
  readonly portEndRange?: number;
  /**
  * Starting port of port range
  *   - Range: `0`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#port_start_range VpnInterfaceDslPppoaFeatureTemplate#port_start_range}
  */
  readonly portStartRange?: number;
  /**
  * Private IP Address to translate to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#private_ip_address VpnInterfaceDslPppoaFeatureTemplate#private_ip_address}
  */
  readonly privateIpAddress?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#private_ip_address_variable VpnInterfaceDslPppoaFeatureTemplate#private_ip_address_variable}
  */
  readonly privateIpAddressVariable?: string;
  /**
  * VPN in which private IP Address resides
  *   - Range: `0`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#private_vpn VpnInterfaceDslPppoaFeatureTemplate#private_vpn}
  */
  readonly privateVpn?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#private_vpn_variable VpnInterfaceDslPppoaFeatureTemplate#private_vpn_variable}
  */
  readonly privateVpnVariable?: string;
  /**
  * Layer 4 protocol to apply port forwarding to
  *   - Choices: `tcp`, `udp`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#protocol VpnInterfaceDslPppoaFeatureTemplate#protocol}
  */
  readonly protocol?: string;
}

export function vpnInterfaceDslPppoaFeatureTemplateNatPortForwardsToTerraform(struct?: VpnInterfaceDslPppoaFeatureTemplateNatPortForwards | cdktf.IResolvable): any {
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


export function vpnInterfaceDslPppoaFeatureTemplateNatPortForwardsToHclTerraform(struct?: VpnInterfaceDslPppoaFeatureTemplateNatPortForwards | cdktf.IResolvable): any {
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

export class VpnInterfaceDslPppoaFeatureTemplateNatPortForwardsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpnInterfaceDslPppoaFeatureTemplateNatPortForwards | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VpnInterfaceDslPppoaFeatureTemplateNatPortForwards | cdktf.IResolvable | undefined) {
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

export class VpnInterfaceDslPppoaFeatureTemplateNatPortForwardsList extends cdktf.ComplexList {
  public internalValue? : VpnInterfaceDslPppoaFeatureTemplateNatPortForwards[] | cdktf.IResolvable

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
  public get(index: number): VpnInterfaceDslPppoaFeatureTemplateNatPortForwardsOutputReference {
    return new VpnInterfaceDslPppoaFeatureTemplateNatPortForwardsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VpnInterfaceDslPppoaFeatureTemplatePolicers {
  /**
  * Direction
  *   - Choices: `in`, `out`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#direction VpnInterfaceDslPppoaFeatureTemplate#direction}
  */
  readonly direction?: string;
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#optional VpnInterfaceDslPppoaFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * Name of policer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#policer_name VpnInterfaceDslPppoaFeatureTemplate#policer_name}
  */
  readonly policerName?: string;
}

export function vpnInterfaceDslPppoaFeatureTemplatePolicersToTerraform(struct?: VpnInterfaceDslPppoaFeatureTemplatePolicers | cdktf.IResolvable): any {
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


export function vpnInterfaceDslPppoaFeatureTemplatePolicersToHclTerraform(struct?: VpnInterfaceDslPppoaFeatureTemplatePolicers | cdktf.IResolvable): any {
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

export class VpnInterfaceDslPppoaFeatureTemplatePolicersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpnInterfaceDslPppoaFeatureTemplatePolicers | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VpnInterfaceDslPppoaFeatureTemplatePolicers | cdktf.IResolvable | undefined) {
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

export class VpnInterfaceDslPppoaFeatureTemplatePolicersList extends cdktf.ComplexList {
  public internalValue? : VpnInterfaceDslPppoaFeatureTemplatePolicers[] | cdktf.IResolvable

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
  public get(index: number): VpnInterfaceDslPppoaFeatureTemplatePolicersOutputReference {
    return new VpnInterfaceDslPppoaFeatureTemplatePolicersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VpnInterfaceDslPppoaFeatureTemplatePvcs {
  /**
  * Dialer Pool corresponding to this pvc
  *   - Range: `1`-`255`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#atm_dialer_pool_member VpnInterfaceDslPppoaFeatureTemplate#atm_dialer_pool_member}
  */
  readonly atmDialerPoolMember?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#atm_dialer_pool_member_variable VpnInterfaceDslPppoaFeatureTemplate#atm_dialer_pool_member_variable}
  */
  readonly atmDialerPoolMemberVariable?: string;
  /**
  * dialer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#atm_encapsulation_aal5mux VpnInterfaceDslPppoaFeatureTemplate#atm_encapsulation_aal5mux}
  */
  readonly atmEncapsulationAal5Mux?: boolean | cdktf.IResolvable;
  /**
  * aal5nlpid
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#atm_encapsulation_aal5nlpid VpnInterfaceDslPppoaFeatureTemplate#atm_encapsulation_aal5nlpid}
  */
  readonly atmEncapsulationAal5Nlpid?: boolean | cdktf.IResolvable;
  /**
  * aal5snap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#atm_encapsulation_aal5snap VpnInterfaceDslPppoaFeatureTemplate#atm_encapsulation_aal5snap}
  */
  readonly atmEncapsulationAal5Snap?: boolean | cdktf.IResolvable;
  /**
  * Maximum Burst Size in Cells
  *   - Range: `1`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#atm_vbr_nrt_maximum_burst_size VpnInterfaceDslPppoaFeatureTemplate#atm_vbr_nrt_maximum_burst_size}
  */
  readonly atmVbrNrtMaximumBurstSize?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#atm_vbr_nrt_maximum_burst_size_variable VpnInterfaceDslPppoaFeatureTemplate#atm_vbr_nrt_maximum_burst_size_variable}
  */
  readonly atmVbrNrtMaximumBurstSizeVariable?: string;
  /**
  * Peak Cell Rate in Kbps
  *   - Range: `48`-`1015`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#atm_vbr_nrt_peak_cell_rate VpnInterfaceDslPppoaFeatureTemplate#atm_vbr_nrt_peak_cell_rate}
  */
  readonly atmVbrNrtPeakCellRate?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#atm_vbr_nrt_peak_cell_rate_variable VpnInterfaceDslPppoaFeatureTemplate#atm_vbr_nrt_peak_cell_rate_variable}
  */
  readonly atmVbrNrtPeakCellRateVariable?: string;
  /**
  * Peak Cell Rate in Kbps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#atm_vbr_nrt_sustainable_cell_rate VpnInterfaceDslPppoaFeatureTemplate#atm_vbr_nrt_sustainable_cell_rate}
  */
  readonly atmVbrNrtSustainableCellRate?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#atm_vbr_nrt_sustainable_cell_rate_variable VpnInterfaceDslPppoaFeatureTemplate#atm_vbr_nrt_sustainable_cell_rate_variable}
  */
  readonly atmVbrNrtSustainableCellRateVariable?: string;
  /**
  * Average Cell Rate in Kbps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#atm_vbr_rt_average_cell_rate VpnInterfaceDslPppoaFeatureTemplate#atm_vbr_rt_average_cell_rate}
  */
  readonly atmVbrRtAverageCellRate?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#atm_vbr_rt_average_cell_rate_variable VpnInterfaceDslPppoaFeatureTemplate#atm_vbr_rt_average_cell_rate_variable}
  */
  readonly atmVbrRtAverageCellRateVariable?: string;
  /**
  * Maximum Burst Size in number of Cells
  *   - Range: `1`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#atm_vbr_rt_maximum_burst_size VpnInterfaceDslPppoaFeatureTemplate#atm_vbr_rt_maximum_burst_size}
  */
  readonly atmVbrRtMaximumBurstSize?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#atm_vbr_rt_maximum_burst_size_variable VpnInterfaceDslPppoaFeatureTemplate#atm_vbr_rt_maximum_burst_size_variable}
  */
  readonly atmVbrRtMaximumBurstSizeVariable?: string;
  /**
  * Peak Cell Rate in Kbps
  *   - Range: `48`-`25000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#atm_vbr_rt_peak_cell_rate VpnInterfaceDslPppoaFeatureTemplate#atm_vbr_rt_peak_cell_rate}
  */
  readonly atmVbrRtPeakCellRate?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#atm_vbr_rt_peak_cell_rate_variable VpnInterfaceDslPppoaFeatureTemplate#atm_vbr_rt_peak_cell_rate_variable}
  */
  readonly atmVbrRtPeakCellRateVariable?: string;
  /**
  * VPI/VCI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#atm_vpi_and_vci VpnInterfaceDslPppoaFeatureTemplate#atm_vpi_and_vci}
  */
  readonly atmVpiAndVci?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#atm_vpi_and_vci_variable VpnInterfaceDslPppoaFeatureTemplate#atm_vpi_and_vci_variable}
  */
  readonly atmVpiAndVciVariable?: string;
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#optional VpnInterfaceDslPppoaFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function vpnInterfaceDslPppoaFeatureTemplatePvcsToTerraform(struct?: VpnInterfaceDslPppoaFeatureTemplatePvcs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    atm_dialer_pool_member: cdktf.numberToTerraform(struct!.atmDialerPoolMember),
    atm_dialer_pool_member_variable: cdktf.stringToTerraform(struct!.atmDialerPoolMemberVariable),
    atm_encapsulation_aal5mux: cdktf.booleanToTerraform(struct!.atmEncapsulationAal5Mux),
    atm_encapsulation_aal5nlpid: cdktf.booleanToTerraform(struct!.atmEncapsulationAal5Nlpid),
    atm_encapsulation_aal5snap: cdktf.booleanToTerraform(struct!.atmEncapsulationAal5Snap),
    atm_vbr_nrt_maximum_burst_size: cdktf.numberToTerraform(struct!.atmVbrNrtMaximumBurstSize),
    atm_vbr_nrt_maximum_burst_size_variable: cdktf.stringToTerraform(struct!.atmVbrNrtMaximumBurstSizeVariable),
    atm_vbr_nrt_peak_cell_rate: cdktf.numberToTerraform(struct!.atmVbrNrtPeakCellRate),
    atm_vbr_nrt_peak_cell_rate_variable: cdktf.stringToTerraform(struct!.atmVbrNrtPeakCellRateVariable),
    atm_vbr_nrt_sustainable_cell_rate: cdktf.numberToTerraform(struct!.atmVbrNrtSustainableCellRate),
    atm_vbr_nrt_sustainable_cell_rate_variable: cdktf.stringToTerraform(struct!.atmVbrNrtSustainableCellRateVariable),
    atm_vbr_rt_average_cell_rate: cdktf.numberToTerraform(struct!.atmVbrRtAverageCellRate),
    atm_vbr_rt_average_cell_rate_variable: cdktf.stringToTerraform(struct!.atmVbrRtAverageCellRateVariable),
    atm_vbr_rt_maximum_burst_size: cdktf.numberToTerraform(struct!.atmVbrRtMaximumBurstSize),
    atm_vbr_rt_maximum_burst_size_variable: cdktf.stringToTerraform(struct!.atmVbrRtMaximumBurstSizeVariable),
    atm_vbr_rt_peak_cell_rate: cdktf.numberToTerraform(struct!.atmVbrRtPeakCellRate),
    atm_vbr_rt_peak_cell_rate_variable: cdktf.stringToTerraform(struct!.atmVbrRtPeakCellRateVariable),
    atm_vpi_and_vci: cdktf.stringToTerraform(struct!.atmVpiAndVci),
    atm_vpi_and_vci_variable: cdktf.stringToTerraform(struct!.atmVpiAndVciVariable),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function vpnInterfaceDslPppoaFeatureTemplatePvcsToHclTerraform(struct?: VpnInterfaceDslPppoaFeatureTemplatePvcs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    atm_dialer_pool_member: {
      value: cdktf.numberToHclTerraform(struct!.atmDialerPoolMember),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    atm_dialer_pool_member_variable: {
      value: cdktf.stringToHclTerraform(struct!.atmDialerPoolMemberVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    atm_encapsulation_aal5mux: {
      value: cdktf.booleanToHclTerraform(struct!.atmEncapsulationAal5Mux),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    atm_encapsulation_aal5nlpid: {
      value: cdktf.booleanToHclTerraform(struct!.atmEncapsulationAal5Nlpid),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    atm_encapsulation_aal5snap: {
      value: cdktf.booleanToHclTerraform(struct!.atmEncapsulationAal5Snap),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    atm_vbr_nrt_maximum_burst_size: {
      value: cdktf.numberToHclTerraform(struct!.atmVbrNrtMaximumBurstSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    atm_vbr_nrt_maximum_burst_size_variable: {
      value: cdktf.stringToHclTerraform(struct!.atmVbrNrtMaximumBurstSizeVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    atm_vbr_nrt_peak_cell_rate: {
      value: cdktf.numberToHclTerraform(struct!.atmVbrNrtPeakCellRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    atm_vbr_nrt_peak_cell_rate_variable: {
      value: cdktf.stringToHclTerraform(struct!.atmVbrNrtPeakCellRateVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    atm_vbr_nrt_sustainable_cell_rate: {
      value: cdktf.numberToHclTerraform(struct!.atmVbrNrtSustainableCellRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    atm_vbr_nrt_sustainable_cell_rate_variable: {
      value: cdktf.stringToHclTerraform(struct!.atmVbrNrtSustainableCellRateVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    atm_vbr_rt_average_cell_rate: {
      value: cdktf.numberToHclTerraform(struct!.atmVbrRtAverageCellRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    atm_vbr_rt_average_cell_rate_variable: {
      value: cdktf.stringToHclTerraform(struct!.atmVbrRtAverageCellRateVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    atm_vbr_rt_maximum_burst_size: {
      value: cdktf.numberToHclTerraform(struct!.atmVbrRtMaximumBurstSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    atm_vbr_rt_maximum_burst_size_variable: {
      value: cdktf.stringToHclTerraform(struct!.atmVbrRtMaximumBurstSizeVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    atm_vbr_rt_peak_cell_rate: {
      value: cdktf.numberToHclTerraform(struct!.atmVbrRtPeakCellRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    atm_vbr_rt_peak_cell_rate_variable: {
      value: cdktf.stringToHclTerraform(struct!.atmVbrRtPeakCellRateVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    atm_vpi_and_vci: {
      value: cdktf.stringToHclTerraform(struct!.atmVpiAndVci),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    atm_vpi_and_vci_variable: {
      value: cdktf.stringToHclTerraform(struct!.atmVpiAndVciVariable),
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

export class VpnInterfaceDslPppoaFeatureTemplatePvcsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpnInterfaceDslPppoaFeatureTemplatePvcs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._atmDialerPoolMember !== undefined) {
      hasAnyValues = true;
      internalValueResult.atmDialerPoolMember = this._atmDialerPoolMember;
    }
    if (this._atmDialerPoolMemberVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.atmDialerPoolMemberVariable = this._atmDialerPoolMemberVariable;
    }
    if (this._atmEncapsulationAal5Mux !== undefined) {
      hasAnyValues = true;
      internalValueResult.atmEncapsulationAal5Mux = this._atmEncapsulationAal5Mux;
    }
    if (this._atmEncapsulationAal5Nlpid !== undefined) {
      hasAnyValues = true;
      internalValueResult.atmEncapsulationAal5Nlpid = this._atmEncapsulationAal5Nlpid;
    }
    if (this._atmEncapsulationAal5Snap !== undefined) {
      hasAnyValues = true;
      internalValueResult.atmEncapsulationAal5Snap = this._atmEncapsulationAal5Snap;
    }
    if (this._atmVbrNrtMaximumBurstSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.atmVbrNrtMaximumBurstSize = this._atmVbrNrtMaximumBurstSize;
    }
    if (this._atmVbrNrtMaximumBurstSizeVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.atmVbrNrtMaximumBurstSizeVariable = this._atmVbrNrtMaximumBurstSizeVariable;
    }
    if (this._atmVbrNrtPeakCellRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.atmVbrNrtPeakCellRate = this._atmVbrNrtPeakCellRate;
    }
    if (this._atmVbrNrtPeakCellRateVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.atmVbrNrtPeakCellRateVariable = this._atmVbrNrtPeakCellRateVariable;
    }
    if (this._atmVbrNrtSustainableCellRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.atmVbrNrtSustainableCellRate = this._atmVbrNrtSustainableCellRate;
    }
    if (this._atmVbrNrtSustainableCellRateVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.atmVbrNrtSustainableCellRateVariable = this._atmVbrNrtSustainableCellRateVariable;
    }
    if (this._atmVbrRtAverageCellRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.atmVbrRtAverageCellRate = this._atmVbrRtAverageCellRate;
    }
    if (this._atmVbrRtAverageCellRateVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.atmVbrRtAverageCellRateVariable = this._atmVbrRtAverageCellRateVariable;
    }
    if (this._atmVbrRtMaximumBurstSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.atmVbrRtMaximumBurstSize = this._atmVbrRtMaximumBurstSize;
    }
    if (this._atmVbrRtMaximumBurstSizeVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.atmVbrRtMaximumBurstSizeVariable = this._atmVbrRtMaximumBurstSizeVariable;
    }
    if (this._atmVbrRtPeakCellRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.atmVbrRtPeakCellRate = this._atmVbrRtPeakCellRate;
    }
    if (this._atmVbrRtPeakCellRateVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.atmVbrRtPeakCellRateVariable = this._atmVbrRtPeakCellRateVariable;
    }
    if (this._atmVpiAndVci !== undefined) {
      hasAnyValues = true;
      internalValueResult.atmVpiAndVci = this._atmVpiAndVci;
    }
    if (this._atmVpiAndVciVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.atmVpiAndVciVariable = this._atmVpiAndVciVariable;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnInterfaceDslPppoaFeatureTemplatePvcs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._atmDialerPoolMember = undefined;
      this._atmDialerPoolMemberVariable = undefined;
      this._atmEncapsulationAal5Mux = undefined;
      this._atmEncapsulationAal5Nlpid = undefined;
      this._atmEncapsulationAal5Snap = undefined;
      this._atmVbrNrtMaximumBurstSize = undefined;
      this._atmVbrNrtMaximumBurstSizeVariable = undefined;
      this._atmVbrNrtPeakCellRate = undefined;
      this._atmVbrNrtPeakCellRateVariable = undefined;
      this._atmVbrNrtSustainableCellRate = undefined;
      this._atmVbrNrtSustainableCellRateVariable = undefined;
      this._atmVbrRtAverageCellRate = undefined;
      this._atmVbrRtAverageCellRateVariable = undefined;
      this._atmVbrRtMaximumBurstSize = undefined;
      this._atmVbrRtMaximumBurstSizeVariable = undefined;
      this._atmVbrRtPeakCellRate = undefined;
      this._atmVbrRtPeakCellRateVariable = undefined;
      this._atmVpiAndVci = undefined;
      this._atmVpiAndVciVariable = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._atmDialerPoolMember = value.atmDialerPoolMember;
      this._atmDialerPoolMemberVariable = value.atmDialerPoolMemberVariable;
      this._atmEncapsulationAal5Mux = value.atmEncapsulationAal5Mux;
      this._atmEncapsulationAal5Nlpid = value.atmEncapsulationAal5Nlpid;
      this._atmEncapsulationAal5Snap = value.atmEncapsulationAal5Snap;
      this._atmVbrNrtMaximumBurstSize = value.atmVbrNrtMaximumBurstSize;
      this._atmVbrNrtMaximumBurstSizeVariable = value.atmVbrNrtMaximumBurstSizeVariable;
      this._atmVbrNrtPeakCellRate = value.atmVbrNrtPeakCellRate;
      this._atmVbrNrtPeakCellRateVariable = value.atmVbrNrtPeakCellRateVariable;
      this._atmVbrNrtSustainableCellRate = value.atmVbrNrtSustainableCellRate;
      this._atmVbrNrtSustainableCellRateVariable = value.atmVbrNrtSustainableCellRateVariable;
      this._atmVbrRtAverageCellRate = value.atmVbrRtAverageCellRate;
      this._atmVbrRtAverageCellRateVariable = value.atmVbrRtAverageCellRateVariable;
      this._atmVbrRtMaximumBurstSize = value.atmVbrRtMaximumBurstSize;
      this._atmVbrRtMaximumBurstSizeVariable = value.atmVbrRtMaximumBurstSizeVariable;
      this._atmVbrRtPeakCellRate = value.atmVbrRtPeakCellRate;
      this._atmVbrRtPeakCellRateVariable = value.atmVbrRtPeakCellRateVariable;
      this._atmVpiAndVci = value.atmVpiAndVci;
      this._atmVpiAndVciVariable = value.atmVpiAndVciVariable;
      this._optional = value.optional;
    }
  }

  // atm_dialer_pool_member - computed: false, optional: true, required: false
  private _atmDialerPoolMember?: number; 
  public get atmDialerPoolMember() {
    return this.getNumberAttribute('atm_dialer_pool_member');
  }
  public set atmDialerPoolMember(value: number) {
    this._atmDialerPoolMember = value;
  }
  public resetAtmDialerPoolMember() {
    this._atmDialerPoolMember = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get atmDialerPoolMemberInput() {
    return this._atmDialerPoolMember;
  }

  // atm_dialer_pool_member_variable - computed: false, optional: true, required: false
  private _atmDialerPoolMemberVariable?: string; 
  public get atmDialerPoolMemberVariable() {
    return this.getStringAttribute('atm_dialer_pool_member_variable');
  }
  public set atmDialerPoolMemberVariable(value: string) {
    this._atmDialerPoolMemberVariable = value;
  }
  public resetAtmDialerPoolMemberVariable() {
    this._atmDialerPoolMemberVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get atmDialerPoolMemberVariableInput() {
    return this._atmDialerPoolMemberVariable;
  }

  // atm_encapsulation_aal5mux - computed: false, optional: true, required: false
  private _atmEncapsulationAal5Mux?: boolean | cdktf.IResolvable; 
  public get atmEncapsulationAal5Mux() {
    return this.getBooleanAttribute('atm_encapsulation_aal5mux');
  }
  public set atmEncapsulationAal5Mux(value: boolean | cdktf.IResolvable) {
    this._atmEncapsulationAal5Mux = value;
  }
  public resetAtmEncapsulationAal5Mux() {
    this._atmEncapsulationAal5Mux = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get atmEncapsulationAal5MuxInput() {
    return this._atmEncapsulationAal5Mux;
  }

  // atm_encapsulation_aal5nlpid - computed: false, optional: true, required: false
  private _atmEncapsulationAal5Nlpid?: boolean | cdktf.IResolvable; 
  public get atmEncapsulationAal5Nlpid() {
    return this.getBooleanAttribute('atm_encapsulation_aal5nlpid');
  }
  public set atmEncapsulationAal5Nlpid(value: boolean | cdktf.IResolvable) {
    this._atmEncapsulationAal5Nlpid = value;
  }
  public resetAtmEncapsulationAal5Nlpid() {
    this._atmEncapsulationAal5Nlpid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get atmEncapsulationAal5NlpidInput() {
    return this._atmEncapsulationAal5Nlpid;
  }

  // atm_encapsulation_aal5snap - computed: false, optional: true, required: false
  private _atmEncapsulationAal5Snap?: boolean | cdktf.IResolvable; 
  public get atmEncapsulationAal5Snap() {
    return this.getBooleanAttribute('atm_encapsulation_aal5snap');
  }
  public set atmEncapsulationAal5Snap(value: boolean | cdktf.IResolvable) {
    this._atmEncapsulationAal5Snap = value;
  }
  public resetAtmEncapsulationAal5Snap() {
    this._atmEncapsulationAal5Snap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get atmEncapsulationAal5SnapInput() {
    return this._atmEncapsulationAal5Snap;
  }

  // atm_vbr_nrt_maximum_burst_size - computed: false, optional: true, required: false
  private _atmVbrNrtMaximumBurstSize?: number; 
  public get atmVbrNrtMaximumBurstSize() {
    return this.getNumberAttribute('atm_vbr_nrt_maximum_burst_size');
  }
  public set atmVbrNrtMaximumBurstSize(value: number) {
    this._atmVbrNrtMaximumBurstSize = value;
  }
  public resetAtmVbrNrtMaximumBurstSize() {
    this._atmVbrNrtMaximumBurstSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get atmVbrNrtMaximumBurstSizeInput() {
    return this._atmVbrNrtMaximumBurstSize;
  }

  // atm_vbr_nrt_maximum_burst_size_variable - computed: false, optional: true, required: false
  private _atmVbrNrtMaximumBurstSizeVariable?: string; 
  public get atmVbrNrtMaximumBurstSizeVariable() {
    return this.getStringAttribute('atm_vbr_nrt_maximum_burst_size_variable');
  }
  public set atmVbrNrtMaximumBurstSizeVariable(value: string) {
    this._atmVbrNrtMaximumBurstSizeVariable = value;
  }
  public resetAtmVbrNrtMaximumBurstSizeVariable() {
    this._atmVbrNrtMaximumBurstSizeVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get atmVbrNrtMaximumBurstSizeVariableInput() {
    return this._atmVbrNrtMaximumBurstSizeVariable;
  }

  // atm_vbr_nrt_peak_cell_rate - computed: false, optional: true, required: false
  private _atmVbrNrtPeakCellRate?: number; 
  public get atmVbrNrtPeakCellRate() {
    return this.getNumberAttribute('atm_vbr_nrt_peak_cell_rate');
  }
  public set atmVbrNrtPeakCellRate(value: number) {
    this._atmVbrNrtPeakCellRate = value;
  }
  public resetAtmVbrNrtPeakCellRate() {
    this._atmVbrNrtPeakCellRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get atmVbrNrtPeakCellRateInput() {
    return this._atmVbrNrtPeakCellRate;
  }

  // atm_vbr_nrt_peak_cell_rate_variable - computed: false, optional: true, required: false
  private _atmVbrNrtPeakCellRateVariable?: string; 
  public get atmVbrNrtPeakCellRateVariable() {
    return this.getStringAttribute('atm_vbr_nrt_peak_cell_rate_variable');
  }
  public set atmVbrNrtPeakCellRateVariable(value: string) {
    this._atmVbrNrtPeakCellRateVariable = value;
  }
  public resetAtmVbrNrtPeakCellRateVariable() {
    this._atmVbrNrtPeakCellRateVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get atmVbrNrtPeakCellRateVariableInput() {
    return this._atmVbrNrtPeakCellRateVariable;
  }

  // atm_vbr_nrt_sustainable_cell_rate - computed: false, optional: true, required: false
  private _atmVbrNrtSustainableCellRate?: number; 
  public get atmVbrNrtSustainableCellRate() {
    return this.getNumberAttribute('atm_vbr_nrt_sustainable_cell_rate');
  }
  public set atmVbrNrtSustainableCellRate(value: number) {
    this._atmVbrNrtSustainableCellRate = value;
  }
  public resetAtmVbrNrtSustainableCellRate() {
    this._atmVbrNrtSustainableCellRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get atmVbrNrtSustainableCellRateInput() {
    return this._atmVbrNrtSustainableCellRate;
  }

  // atm_vbr_nrt_sustainable_cell_rate_variable - computed: false, optional: true, required: false
  private _atmVbrNrtSustainableCellRateVariable?: string; 
  public get atmVbrNrtSustainableCellRateVariable() {
    return this.getStringAttribute('atm_vbr_nrt_sustainable_cell_rate_variable');
  }
  public set atmVbrNrtSustainableCellRateVariable(value: string) {
    this._atmVbrNrtSustainableCellRateVariable = value;
  }
  public resetAtmVbrNrtSustainableCellRateVariable() {
    this._atmVbrNrtSustainableCellRateVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get atmVbrNrtSustainableCellRateVariableInput() {
    return this._atmVbrNrtSustainableCellRateVariable;
  }

  // atm_vbr_rt_average_cell_rate - computed: false, optional: true, required: false
  private _atmVbrRtAverageCellRate?: number; 
  public get atmVbrRtAverageCellRate() {
    return this.getNumberAttribute('atm_vbr_rt_average_cell_rate');
  }
  public set atmVbrRtAverageCellRate(value: number) {
    this._atmVbrRtAverageCellRate = value;
  }
  public resetAtmVbrRtAverageCellRate() {
    this._atmVbrRtAverageCellRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get atmVbrRtAverageCellRateInput() {
    return this._atmVbrRtAverageCellRate;
  }

  // atm_vbr_rt_average_cell_rate_variable - computed: false, optional: true, required: false
  private _atmVbrRtAverageCellRateVariable?: string; 
  public get atmVbrRtAverageCellRateVariable() {
    return this.getStringAttribute('atm_vbr_rt_average_cell_rate_variable');
  }
  public set atmVbrRtAverageCellRateVariable(value: string) {
    this._atmVbrRtAverageCellRateVariable = value;
  }
  public resetAtmVbrRtAverageCellRateVariable() {
    this._atmVbrRtAverageCellRateVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get atmVbrRtAverageCellRateVariableInput() {
    return this._atmVbrRtAverageCellRateVariable;
  }

  // atm_vbr_rt_maximum_burst_size - computed: false, optional: true, required: false
  private _atmVbrRtMaximumBurstSize?: number; 
  public get atmVbrRtMaximumBurstSize() {
    return this.getNumberAttribute('atm_vbr_rt_maximum_burst_size');
  }
  public set atmVbrRtMaximumBurstSize(value: number) {
    this._atmVbrRtMaximumBurstSize = value;
  }
  public resetAtmVbrRtMaximumBurstSize() {
    this._atmVbrRtMaximumBurstSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get atmVbrRtMaximumBurstSizeInput() {
    return this._atmVbrRtMaximumBurstSize;
  }

  // atm_vbr_rt_maximum_burst_size_variable - computed: false, optional: true, required: false
  private _atmVbrRtMaximumBurstSizeVariable?: string; 
  public get atmVbrRtMaximumBurstSizeVariable() {
    return this.getStringAttribute('atm_vbr_rt_maximum_burst_size_variable');
  }
  public set atmVbrRtMaximumBurstSizeVariable(value: string) {
    this._atmVbrRtMaximumBurstSizeVariable = value;
  }
  public resetAtmVbrRtMaximumBurstSizeVariable() {
    this._atmVbrRtMaximumBurstSizeVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get atmVbrRtMaximumBurstSizeVariableInput() {
    return this._atmVbrRtMaximumBurstSizeVariable;
  }

  // atm_vbr_rt_peak_cell_rate - computed: false, optional: true, required: false
  private _atmVbrRtPeakCellRate?: number; 
  public get atmVbrRtPeakCellRate() {
    return this.getNumberAttribute('atm_vbr_rt_peak_cell_rate');
  }
  public set atmVbrRtPeakCellRate(value: number) {
    this._atmVbrRtPeakCellRate = value;
  }
  public resetAtmVbrRtPeakCellRate() {
    this._atmVbrRtPeakCellRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get atmVbrRtPeakCellRateInput() {
    return this._atmVbrRtPeakCellRate;
  }

  // atm_vbr_rt_peak_cell_rate_variable - computed: false, optional: true, required: false
  private _atmVbrRtPeakCellRateVariable?: string; 
  public get atmVbrRtPeakCellRateVariable() {
    return this.getStringAttribute('atm_vbr_rt_peak_cell_rate_variable');
  }
  public set atmVbrRtPeakCellRateVariable(value: string) {
    this._atmVbrRtPeakCellRateVariable = value;
  }
  public resetAtmVbrRtPeakCellRateVariable() {
    this._atmVbrRtPeakCellRateVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get atmVbrRtPeakCellRateVariableInput() {
    return this._atmVbrRtPeakCellRateVariable;
  }

  // atm_vpi_and_vci - computed: false, optional: true, required: false
  private _atmVpiAndVci?: string; 
  public get atmVpiAndVci() {
    return this.getStringAttribute('atm_vpi_and_vci');
  }
  public set atmVpiAndVci(value: string) {
    this._atmVpiAndVci = value;
  }
  public resetAtmVpiAndVci() {
    this._atmVpiAndVci = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get atmVpiAndVciInput() {
    return this._atmVpiAndVci;
  }

  // atm_vpi_and_vci_variable - computed: false, optional: true, required: false
  private _atmVpiAndVciVariable?: string; 
  public get atmVpiAndVciVariable() {
    return this.getStringAttribute('atm_vpi_and_vci_variable');
  }
  public set atmVpiAndVciVariable(value: string) {
    this._atmVpiAndVciVariable = value;
  }
  public resetAtmVpiAndVciVariable() {
    this._atmVpiAndVciVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get atmVpiAndVciVariableInput() {
    return this._atmVpiAndVciVariable;
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

export class VpnInterfaceDslPppoaFeatureTemplatePvcsList extends cdktf.ComplexList {
  public internalValue? : VpnInterfaceDslPppoaFeatureTemplatePvcs[] | cdktf.IResolvable

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
  public get(index: number): VpnInterfaceDslPppoaFeatureTemplatePvcsOutputReference {
    return new VpnInterfaceDslPppoaFeatureTemplatePvcsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VpnInterfaceDslPppoaFeatureTemplateTunnelInterfaceEncapsulations {
  /**
  * Encapsulation
  *   - Choices: `gre`, `ipsec`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#encapsulation VpnInterfaceDslPppoaFeatureTemplate#encapsulation}
  */
  readonly encapsulation?: string;
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#optional VpnInterfaceDslPppoaFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * Set preference for TLOC
  *   - Range: `0`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#preference VpnInterfaceDslPppoaFeatureTemplate#preference}
  */
  readonly preference?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#preference_variable VpnInterfaceDslPppoaFeatureTemplate#preference_variable}
  */
  readonly preferenceVariable?: string;
  /**
  * Set weight for TLOC
  *   - Range: `1`-`255`
  *   - Default value: `1`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#weight VpnInterfaceDslPppoaFeatureTemplate#weight}
  */
  readonly weight?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#weight_variable VpnInterfaceDslPppoaFeatureTemplate#weight_variable}
  */
  readonly weightVariable?: string;
}

export function vpnInterfaceDslPppoaFeatureTemplateTunnelInterfaceEncapsulationsToTerraform(struct?: VpnInterfaceDslPppoaFeatureTemplateTunnelInterfaceEncapsulations | cdktf.IResolvable): any {
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


export function vpnInterfaceDslPppoaFeatureTemplateTunnelInterfaceEncapsulationsToHclTerraform(struct?: VpnInterfaceDslPppoaFeatureTemplateTunnelInterfaceEncapsulations | cdktf.IResolvable): any {
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

export class VpnInterfaceDslPppoaFeatureTemplateTunnelInterfaceEncapsulationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpnInterfaceDslPppoaFeatureTemplateTunnelInterfaceEncapsulations | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VpnInterfaceDslPppoaFeatureTemplateTunnelInterfaceEncapsulations | cdktf.IResolvable | undefined) {
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

export class VpnInterfaceDslPppoaFeatureTemplateTunnelInterfaceEncapsulationsList extends cdktf.ComplexList {
  public internalValue? : VpnInterfaceDslPppoaFeatureTemplateTunnelInterfaceEncapsulations[] | cdktf.IResolvable

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
  public get(index: number): VpnInterfaceDslPppoaFeatureTemplateTunnelInterfaceEncapsulationsOutputReference {
    return new VpnInterfaceDslPppoaFeatureTemplateTunnelInterfaceEncapsulationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VpnInterfaceDslPppoaFeatureTemplateVdslConfiguration {
  /**
  * Set module slot/subslot/port number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#controller_vdsl_slot VpnInterfaceDslPppoaFeatureTemplate#controller_vdsl_slot}
  */
  readonly controllerVdslSlot?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#controller_vdsl_slot_variable VpnInterfaceDslPppoaFeatureTemplate#controller_vdsl_slot_variable}
  */
  readonly controllerVdslSlotVariable?: string;
  /**
  * Set VDSL operating mode to adsl1
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#mode_adsl1 VpnInterfaceDslPppoaFeatureTemplate#mode_adsl1}
  */
  readonly modeAdsl1?: boolean | cdktf.IResolvable;
  /**
  * Set VDSL operating mode to adsl2
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#mode_adsl2 VpnInterfaceDslPppoaFeatureTemplate#mode_adsl2}
  */
  readonly modeAdsl2?: boolean | cdktf.IResolvable;
  /**
  * Set VDSL operating mode to adsl2plus
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#mode_adsl2plus VpnInterfaceDslPppoaFeatureTemplate#mode_adsl2plus}
  */
  readonly modeAdsl2Plus?: boolean | cdktf.IResolvable;
  /**
  * Set VDSL operating mode to ansi
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#mode_ansi VpnInterfaceDslPppoaFeatureTemplate#mode_ansi}
  */
  readonly modeAnsi?: boolean | cdktf.IResolvable;
  /**
  * Set VDSL operating mode to vdsl2
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#mode_vdsl2 VpnInterfaceDslPppoaFeatureTemplate#mode_vdsl2}
  */
  readonly modeVdsl2?: boolean | cdktf.IResolvable;
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#optional VpnInterfaceDslPppoaFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * Seamless rate adaption
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#sra VpnInterfaceDslPppoaFeatureTemplate#sra}
  */
  readonly sra?: boolean | cdktf.IResolvable;
  /**
  * Set module slot/subslot/port number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#vdsl_modem_configuration VpnInterfaceDslPppoaFeatureTemplate#vdsl_modem_configuration}
  */
  readonly vdslModemConfiguration?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#vdsl_modem_configuration_variable VpnInterfaceDslPppoaFeatureTemplate#vdsl_modem_configuration_variable}
  */
  readonly vdslModemConfigurationVariable?: string;
}

export function vpnInterfaceDslPppoaFeatureTemplateVdslConfigurationToTerraform(struct?: VpnInterfaceDslPppoaFeatureTemplateVdslConfiguration | cdktf.IResolvable): any {
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


export function vpnInterfaceDslPppoaFeatureTemplateVdslConfigurationToHclTerraform(struct?: VpnInterfaceDslPppoaFeatureTemplateVdslConfiguration | cdktf.IResolvable): any {
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

export class VpnInterfaceDslPppoaFeatureTemplateVdslConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpnInterfaceDslPppoaFeatureTemplateVdslConfiguration | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VpnInterfaceDslPppoaFeatureTemplateVdslConfiguration | cdktf.IResolvable | undefined) {
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

export class VpnInterfaceDslPppoaFeatureTemplateVdslConfigurationList extends cdktf.ComplexList {
  public internalValue? : VpnInterfaceDslPppoaFeatureTemplateVdslConfiguration[] | cdktf.IResolvable

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
  public get(index: number): VpnInterfaceDslPppoaFeatureTemplateVdslConfigurationOutputReference {
    return new VpnInterfaceDslPppoaFeatureTemplateVdslConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template sdwan_vpn_interface_dsl_pppoa_feature_template}
*/
export class VpnInterfaceDslPppoaFeatureTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_vpn_interface_dsl_pppoa_feature_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VpnInterfaceDslPppoaFeatureTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VpnInterfaceDslPppoaFeatureTemplate to import
  * @param importFromId The id of the existing VpnInterfaceDslPppoaFeatureTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VpnInterfaceDslPppoaFeatureTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_vpn_interface_dsl_pppoa_feature_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/vpn_interface_dsl_pppoa_feature_template sdwan_vpn_interface_dsl_pppoa_feature_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpnInterfaceDslPppoaFeatureTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: VpnInterfaceDslPppoaFeatureTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_vpn_interface_dsl_pppoa_feature_template',
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
    this._atmDescription = config.atmDescription;
    this._atmDescriptionVariable = config.atmDescriptionVariable;
    this._atmSubInterfaceName = config.atmSubInterfaceName;
    this._atmSubInterfaceNameVariable = config.atmSubInterfaceNameVariable;
    this._bandwidthDownstream = config.bandwidthDownstream;
    this._bandwidthDownstreamVariable = config.bandwidthDownstreamVariable;
    this._bandwidthUpstream = config.bandwidthUpstream;
    this._bandwidthUpstreamVariable = config.bandwidthUpstreamVariable;
    this._chapHostname = config.chapHostname;
    this._chapHostnameVariable = config.chapHostnameVariable;
    this._chapPppAuthPassword = config.chapPppAuthPassword;
    this._chapPppAuthPasswordVariable = config.chapPppAuthPasswordVariable;
    this._coreRegion = config.coreRegion;
    this._coreRegionVariable = config.coreRegionVariable;
    this._description = config.description;
    this._deviceTypes = config.deviceTypes;
    this._enableCoreRegion = config.enableCoreRegion;
    this._enableCoreRegionVariable = config.enableCoreRegionVariable;
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
    this._pppAuthenticationType = config.pppAuthenticationType;
    this._pvcs.internalValue = config.pvcs;
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
    this._secondaryRegion = config.secondaryRegion;
    this._secondaryRegionVariable = config.secondaryRegionVariable;
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
    this._vdslConfiguration.internalValue = config.vdslConfiguration;
    this._writeRule = config.writeRule;
    this._writeRuleVariable = config.writeRuleVariable;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_lists - computed: false, optional: true, required: false
  private _accessLists = new VpnInterfaceDslPppoaFeatureTemplateAccessListsList(this, "access_lists", false);
  public get accessLists() {
    return this._accessLists;
  }
  public putAccessLists(value: VpnInterfaceDslPppoaFeatureTemplateAccessLists[] | cdktf.IResolvable) {
    this._accessLists.internalValue = value;
  }
  public resetAccessLists() {
    this._accessLists.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessListsInput() {
    return this._accessLists.internalValue;
  }

  // atm_description - computed: false, optional: true, required: false
  private _atmDescription?: string; 
  public get atmDescription() {
    return this.getStringAttribute('atm_description');
  }
  public set atmDescription(value: string) {
    this._atmDescription = value;
  }
  public resetAtmDescription() {
    this._atmDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get atmDescriptionInput() {
    return this._atmDescription;
  }

  // atm_description_variable - computed: false, optional: true, required: false
  private _atmDescriptionVariable?: string; 
  public get atmDescriptionVariable() {
    return this.getStringAttribute('atm_description_variable');
  }
  public set atmDescriptionVariable(value: string) {
    this._atmDescriptionVariable = value;
  }
  public resetAtmDescriptionVariable() {
    this._atmDescriptionVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get atmDescriptionVariableInput() {
    return this._atmDescriptionVariable;
  }

  // atm_sub_interface_name - computed: false, optional: true, required: false
  private _atmSubInterfaceName?: string; 
  public get atmSubInterfaceName() {
    return this.getStringAttribute('atm_sub_interface_name');
  }
  public set atmSubInterfaceName(value: string) {
    this._atmSubInterfaceName = value;
  }
  public resetAtmSubInterfaceName() {
    this._atmSubInterfaceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get atmSubInterfaceNameInput() {
    return this._atmSubInterfaceName;
  }

  // atm_sub_interface_name_variable - computed: false, optional: true, required: false
  private _atmSubInterfaceNameVariable?: string; 
  public get atmSubInterfaceNameVariable() {
    return this.getStringAttribute('atm_sub_interface_name_variable');
  }
  public set atmSubInterfaceNameVariable(value: string) {
    this._atmSubInterfaceNameVariable = value;
  }
  public resetAtmSubInterfaceNameVariable() {
    this._atmSubInterfaceNameVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get atmSubInterfaceNameVariableInput() {
    return this._atmSubInterfaceNameVariable;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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
  private _natPortForwards = new VpnInterfaceDslPppoaFeatureTemplateNatPortForwardsList(this, "nat_port_forwards", false);
  public get natPortForwards() {
    return this._natPortForwards;
  }
  public putNatPortForwards(value: VpnInterfaceDslPppoaFeatureTemplateNatPortForwards[] | cdktf.IResolvable) {
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
  private _policers = new VpnInterfaceDslPppoaFeatureTemplatePolicersList(this, "policers", false);
  public get policers() {
    return this._policers;
  }
  public putPolicers(value: VpnInterfaceDslPppoaFeatureTemplatePolicers[] | cdktf.IResolvable) {
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

  // pvcs - computed: false, optional: true, required: false
  private _pvcs = new VpnInterfaceDslPppoaFeatureTemplatePvcsList(this, "pvcs", false);
  public get pvcs() {
    return this._pvcs;
  }
  public putPvcs(value: VpnInterfaceDslPppoaFeatureTemplatePvcs[] | cdktf.IResolvable) {
    this._pvcs.internalValue = value;
  }
  public resetPvcs() {
    this._pvcs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pvcsInput() {
    return this._pvcs.internalValue;
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
  private _tunnelInterfaceEncapsulations = new VpnInterfaceDslPppoaFeatureTemplateTunnelInterfaceEncapsulationsList(this, "tunnel_interface_encapsulations", false);
  public get tunnelInterfaceEncapsulations() {
    return this._tunnelInterfaceEncapsulations;
  }
  public putTunnelInterfaceEncapsulations(value: VpnInterfaceDslPppoaFeatureTemplateTunnelInterfaceEncapsulations[] | cdktf.IResolvable) {
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

  // vdsl_configuration - computed: false, optional: true, required: false
  private _vdslConfiguration = new VpnInterfaceDslPppoaFeatureTemplateVdslConfigurationList(this, "vdsl_configuration", false);
  public get vdslConfiguration() {
    return this._vdslConfiguration;
  }
  public putVdslConfiguration(value: VpnInterfaceDslPppoaFeatureTemplateVdslConfiguration[] | cdktf.IResolvable) {
    this._vdslConfiguration.internalValue = value;
  }
  public resetVdslConfiguration() {
    this._vdslConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdslConfigurationInput() {
    return this._vdslConfiguration.internalValue;
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
      access_lists: cdktf.listMapper(vpnInterfaceDslPppoaFeatureTemplateAccessListsToTerraform, false)(this._accessLists.internalValue),
      atm_description: cdktf.stringToTerraform(this._atmDescription),
      atm_description_variable: cdktf.stringToTerraform(this._atmDescriptionVariable),
      atm_sub_interface_name: cdktf.stringToTerraform(this._atmSubInterfaceName),
      atm_sub_interface_name_variable: cdktf.stringToTerraform(this._atmSubInterfaceNameVariable),
      bandwidth_downstream: cdktf.numberToTerraform(this._bandwidthDownstream),
      bandwidth_downstream_variable: cdktf.stringToTerraform(this._bandwidthDownstreamVariable),
      bandwidth_upstream: cdktf.numberToTerraform(this._bandwidthUpstream),
      bandwidth_upstream_variable: cdktf.stringToTerraform(this._bandwidthUpstreamVariable),
      chap_hostname: cdktf.stringToTerraform(this._chapHostname),
      chap_hostname_variable: cdktf.stringToTerraform(this._chapHostnameVariable),
      chap_ppp_auth_password: cdktf.stringToTerraform(this._chapPppAuthPassword),
      chap_ppp_auth_password_variable: cdktf.stringToTerraform(this._chapPppAuthPasswordVariable),
      core_region: cdktf.stringToTerraform(this._coreRegion),
      core_region_variable: cdktf.stringToTerraform(this._coreRegionVariable),
      description: cdktf.stringToTerraform(this._description),
      device_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._deviceTypes),
      enable_core_region: cdktf.booleanToTerraform(this._enableCoreRegion),
      enable_core_region_variable: cdktf.stringToTerraform(this._enableCoreRegionVariable),
      ip_directed_broadcast: cdktf.booleanToTerraform(this._ipDirectedBroadcast),
      ip_directed_broadcast_variable: cdktf.stringToTerraform(this._ipDirectedBroadcastVariable),
      ip_mtu: cdktf.numberToTerraform(this._ipMtu),
      ip_mtu_variable: cdktf.stringToTerraform(this._ipMtuVariable),
      name: cdktf.stringToTerraform(this._name),
      nat: cdktf.booleanToTerraform(this._nat),
      nat_block_icmp_error: cdktf.booleanToTerraform(this._natBlockIcmpError),
      nat_block_icmp_error_variable: cdktf.stringToTerraform(this._natBlockIcmpErrorVariable),
      nat_port_forwards: cdktf.listMapper(vpnInterfaceDslPppoaFeatureTemplateNatPortForwardsToTerraform, false)(this._natPortForwards.internalValue),
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
      policers: cdktf.listMapper(vpnInterfaceDslPppoaFeatureTemplatePolicersToTerraform, false)(this._policers.internalValue),
      ppp_authentication_protocol: cdktf.stringToTerraform(this._pppAuthenticationProtocol),
      ppp_authentication_protocol_pap: cdktf.booleanToTerraform(this._pppAuthenticationProtocolPap),
      ppp_authentication_protocol_variable: cdktf.stringToTerraform(this._pppAuthenticationProtocolVariable),
      ppp_authentication_type: cdktf.stringToTerraform(this._pppAuthenticationType),
      pvcs: cdktf.listMapper(vpnInterfaceDslPppoaFeatureTemplatePvcsToTerraform, false)(this._pvcs.internalValue),
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
      secondary_region: cdktf.stringToTerraform(this._secondaryRegion),
      secondary_region_variable: cdktf.stringToTerraform(this._secondaryRegionVariable),
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
      tunnel_interface_encapsulations: cdktf.listMapper(vpnInterfaceDslPppoaFeatureTemplateTunnelInterfaceEncapsulationsToTerraform, false)(this._tunnelInterfaceEncapsulations.internalValue),
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
      vdsl_configuration: cdktf.listMapper(vpnInterfaceDslPppoaFeatureTemplateVdslConfigurationToTerraform, false)(this._vdslConfiguration.internalValue),
      write_rule: cdktf.stringToTerraform(this._writeRule),
      write_rule_variable: cdktf.stringToTerraform(this._writeRuleVariable),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_lists: {
        value: cdktf.listMapperHcl(vpnInterfaceDslPppoaFeatureTemplateAccessListsToHclTerraform, false)(this._accessLists.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VpnInterfaceDslPppoaFeatureTemplateAccessListsList",
      },
      atm_description: {
        value: cdktf.stringToHclTerraform(this._atmDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      atm_description_variable: {
        value: cdktf.stringToHclTerraform(this._atmDescriptionVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      atm_sub_interface_name: {
        value: cdktf.stringToHclTerraform(this._atmSubInterfaceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      atm_sub_interface_name_variable: {
        value: cdktf.stringToHclTerraform(this._atmSubInterfaceNameVariable),
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
        value: cdktf.listMapperHcl(vpnInterfaceDslPppoaFeatureTemplateNatPortForwardsToHclTerraform, false)(this._natPortForwards.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VpnInterfaceDslPppoaFeatureTemplateNatPortForwardsList",
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
        value: cdktf.listMapperHcl(vpnInterfaceDslPppoaFeatureTemplatePolicersToHclTerraform, false)(this._policers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VpnInterfaceDslPppoaFeatureTemplatePolicersList",
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
      ppp_authentication_type: {
        value: cdktf.stringToHclTerraform(this._pppAuthenticationType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pvcs: {
        value: cdktf.listMapperHcl(vpnInterfaceDslPppoaFeatureTemplatePvcsToHclTerraform, false)(this._pvcs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VpnInterfaceDslPppoaFeatureTemplatePvcsList",
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
        value: cdktf.listMapperHcl(vpnInterfaceDslPppoaFeatureTemplateTunnelInterfaceEncapsulationsToHclTerraform, false)(this._tunnelInterfaceEncapsulations.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VpnInterfaceDslPppoaFeatureTemplateTunnelInterfaceEncapsulationsList",
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
      vdsl_configuration: {
        value: cdktf.listMapperHcl(vpnInterfaceDslPppoaFeatureTemplateVdslConfigurationToHclTerraform, false)(this._vdslConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VpnInterfaceDslPppoaFeatureTemplateVdslConfigurationList",
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
