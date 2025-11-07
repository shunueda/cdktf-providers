// https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/interface
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InterfaceResourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Set the bandwidth of an interface
  *   - Range: `0`-`9223372036854775807`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/interface#bandwidth InterfaceResource#bandwidth}
  */
  readonly bandwidth?: number;
  /**
  * Use IETF standard for BoB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/interface#bfd_mode_ietf InterfaceResource#bfd_mode_ietf}
  */
  readonly bfdModeIetf?: boolean | cdktf.IResolvable;
  /**
  * Add the port to an aggregated interface.
  *   - Range: `1`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/interface#bundle_id InterfaceResource#bundle_id}
  */
  readonly bundleId?: number;
  /**
  * Specify the mode of operation.
  *   - Choices: `active`, `inherit`, `on`, `passive`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/interface#bundle_id_mode InterfaceResource#bundle_id_mode}
  */
  readonly bundleIdMode?: string;
  /**
  * Use the destination IP as the hash function
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/interface#bundle_load_balancing_hash_dst_ip InterfaceResource#bundle_load_balancing_hash_dst_ip}
  */
  readonly bundleLoadBalancingHashDstIp?: boolean | cdktf.IResolvable;
  /**
  * Use the source IP as the hash function
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/interface#bundle_load_balancing_hash_src_ip InterfaceResource#bundle_load_balancing_hash_src_ip}
  */
  readonly bundleLoadBalancingHashSrcIp?: boolean | cdktf.IResolvable;
  /**
  * Set the maximum number of active links in this bundle
  *   - Range: `1`-`64`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/interface#bundle_maximum_active_links InterfaceResource#bundle_maximum_active_links}
  */
  readonly bundleMaximumActiveLinks?: number;
  /**
  * Set the number of active links needed to bring up this bundle
  *   - Range: `1`-`64`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/interface#bundle_minimum_active_links InterfaceResource#bundle_minimum_active_links}
  */
  readonly bundleMinimumActiveLinks?: number;
  /**
  * Priority for this port. Lower value is higher priority.
  *   - Range: `1`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/interface#bundle_port_priority InterfaceResource#bundle_port_priority}
  */
  readonly bundlePortPriority?: number;
  /**
  * Bring all links in the bundle down to Standby state
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/interface#bundle_shutdown InterfaceResource#bundle_shutdown}
  */
  readonly bundleShutdown?: boolean | cdktf.IResolvable;
  /**
  * Enable CDP on an interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/interface#cdp InterfaceResource#cdp}
  */
  readonly cdp?: boolean | cdktf.IResolvable;
  /**
  * configure state dampening on the given interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/interface#dampening InterfaceResource#dampening}
  */
  readonly dampening?: boolean | cdktf.IResolvable;
  /**
  * Decay half life (in minutes)
  *   - Range: `1`-`45`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/interface#dampening_decay_half_life_value InterfaceResource#dampening_decay_half_life_value}
  */
  readonly dampeningDecayHalfLifeValue?: number;
  /**
  * Configure behavior when deleting/destroying the resource. Either delete the entire object (YANG container) being managed, or only delete the individual resource attributes configured explicitly and leave everything else as-is. Default value is `all`.
  *   - Choices: `all`, `attributes`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/interface#delete_mode InterfaceResource#delete_mode}
  */
  readonly deleteMode?: string;
  /**
  * Set description for this interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/interface#description InterfaceResource#description}
  */
  readonly description?: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/interface#device InterfaceResource#device}
  */
  readonly device?: string;
  /**
  * Configure first (outer) VLAN ID on the subinterface
  *   - Range: `1`-`4094`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/interface#encapsulation_dot1q_vlan_id InterfaceResource#encapsulation_dot1q_vlan_id}
  */
  readonly encapsulationDot1QVlanId?: number;
  /**
  * Specify a flow monitor and sampler for outgoing packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/interface#flow_ipv4_egress_monitor_samplers InterfaceResource#flow_ipv4_egress_monitor_samplers}
  */
  readonly flowIpv4EgressMonitorSamplers?: InterfaceResourceFlowIpv4EgressMonitorSamplers[] | cdktf.IResolvable;
  /**
  * Specify a flow monitor for packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/interface#flow_ipv4_egress_monitors InterfaceResource#flow_ipv4_egress_monitors}
  */
  readonly flowIpv4EgressMonitors?: InterfaceResourceFlowIpv4EgressMonitors[] | cdktf.IResolvable;
  /**
  * Specify a flow monitor and sampler for incoming packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/interface#flow_ipv4_ingress_monitor_samplers InterfaceResource#flow_ipv4_ingress_monitor_samplers}
  */
  readonly flowIpv4IngressMonitorSamplers?: InterfaceResourceFlowIpv4IngressMonitorSamplers[] | cdktf.IResolvable;
  /**
  * Specify a flow monitor for packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/interface#flow_ipv4_ingress_monitors InterfaceResource#flow_ipv4_ingress_monitors}
  */
  readonly flowIpv4IngressMonitors?: InterfaceResourceFlowIpv4IngressMonitors[] | cdktf.IResolvable;
  /**
  * Specify a flow monitor and sampler for outgoing packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/interface#flow_ipv6_egress_monitor_samplers InterfaceResource#flow_ipv6_egress_monitor_samplers}
  */
  readonly flowIpv6EgressMonitorSamplers?: InterfaceResourceFlowIpv6EgressMonitorSamplers[] | cdktf.IResolvable;
  /**
  * Specify a flow monitor for packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/interface#flow_ipv6_egress_monitors InterfaceResource#flow_ipv6_egress_monitors}
  */
  readonly flowIpv6EgressMonitors?: InterfaceResourceFlowIpv6EgressMonitors[] | cdktf.IResolvable;
  /**
  * Specify a flow monitor and sampler for incoming packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/interface#flow_ipv6_ingress_monitor_samplers InterfaceResource#flow_ipv6_ingress_monitor_samplers}
  */
  readonly flowIpv6IngressMonitorSamplers?: InterfaceResourceFlowIpv6IngressMonitorSamplers[] | cdktf.IResolvable;
  /**
  * Specify a flow monitor for packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/interface#flow_ipv6_ingress_monitors InterfaceResource#flow_ipv6_ingress_monitors}
  */
  readonly flowIpv6IngressMonitors?: InterfaceResourceFlowIpv6IngressMonitors[] | cdktf.IResolvable;
  /**
  * Interface configuration subcommands
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/interface#interface_name InterfaceResource#interface_name}
  */
  readonly interfaceName: string;
  /**
  * Access-list name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/interface#ipv4_access_group_egress_acl InterfaceResource#ipv4_access_group_egress_acl}
  */
  readonly ipv4AccessGroupEgressAcl?: string;
  /**
  * Specify ACL compression in hardware
  *   - Range: `0`-`4`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/interface#ipv4_access_group_egress_compress InterfaceResource#ipv4_access_group_egress_compress}
  */
  readonly ipv4AccessGroupEgressCompress?: number;
  /**
  * Count packets in hardware
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/interface#ipv4_access_group_egress_hardware_count InterfaceResource#ipv4_access_group_egress_hardware_count}
  */
  readonly ipv4AccessGroupEgressHardwareCount?: boolean | cdktf.IResolvable;
  /**
  * Per interface statistics in hardware
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/interface#ipv4_access_group_egress_interface_statistics InterfaceResource#ipv4_access_group_egress_interface_statistics}
  */
  readonly ipv4AccessGroupEgressInterfaceStatistics?: boolean | cdktf.IResolvable;
  /**
  * Access-list name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/interface#ipv4_access_group_ingress_acl1 InterfaceResource#ipv4_access_group_ingress_acl1}
  */
  readonly ipv4AccessGroupIngressAcl1?: string;
  /**
  * Specify ACL compression in hardware
  *   - Range: `0`-`4`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/interface#ipv4_access_group_ingress_compress InterfaceResource#ipv4_access_group_ingress_compress}
  */
  readonly ipv4AccessGroupIngressCompress?: number;
  /**
  * Count packets in hardware
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/interface#ipv4_access_group_ingress_hardware_count InterfaceResource#ipv4_access_group_ingress_hardware_count}
  */
  readonly ipv4AccessGroupIngressHardwareCount?: boolean | cdktf.IResolvable;
  /**
  * Per interface statistics in hardware
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/interface#ipv4_access_group_ingress_interface_statistics InterfaceResource#ipv4_access_group_ingress_interface_statistics}
  */
  readonly ipv4AccessGroupIngressInterfaceStatistics?: boolean | cdktf.IResolvable;
  /**
  * IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/interface#ipv4_address InterfaceResource#ipv4_address}
  */
  readonly ipv4Address?: string;
  /**
  * IP subnet mask
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/interface#ipv4_netmask InterfaceResource#ipv4_netmask}
  */
  readonly ipv4Netmask?: string;
  /**
  * Enable point-to-point handling for this interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/interface#ipv4_point_to_point InterfaceResource#ipv4_point_to_point}
  */
  readonly ipv4PointToPoint?: boolean | cdktf.IResolvable;
  /**
  * Allow default route to match when checking source address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/interface#ipv4_verify_unicast_source_reachable_via_allow_default InterfaceResource#ipv4_verify_unicast_source_reachable_via_allow_default}
  */
  readonly ipv4VerifyUnicastSourceReachableViaAllowDefault?: boolean | cdktf.IResolvable;
  /**
  * Allow router to ping itself (opens vulnerability in verification)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/interface#ipv4_verify_unicast_source_reachable_via_allow_self_ping InterfaceResource#ipv4_verify_unicast_source_reachable_via_allow_self_ping}
  */
  readonly ipv4VerifyUnicastSourceReachableViaAllowSelfPing?: boolean | cdktf.IResolvable;
  /**
  * Source reachable type
  *   - Choices: `any`, `rx`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/interface#ipv4_verify_unicast_source_reachable_via_type InterfaceResource#ipv4_verify_unicast_source_reachable_via_type}
  */
  readonly ipv4VerifyUnicastSourceReachableViaType?: string;
  /**
  * Access-list name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/interface#ipv6_access_group_egress_acl InterfaceResource#ipv6_access_group_egress_acl}
  */
  readonly ipv6AccessGroupEgressAcl?: string;
  /**
  * Specify ACL compression in hardware
  *   - Range: `0`-`4`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/interface#ipv6_access_group_egress_compress InterfaceResource#ipv6_access_group_egress_compress}
  */
  readonly ipv6AccessGroupEgressCompress?: number;
  /**
  * Per interface statistics in hardware
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/interface#ipv6_access_group_egress_interface_statistics InterfaceResource#ipv6_access_group_egress_interface_statistics}
  */
  readonly ipv6AccessGroupEgressInterfaceStatistics?: boolean | cdktf.IResolvable;
  /**
  * Access-list name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/interface#ipv6_access_group_ingress_acl1 InterfaceResource#ipv6_access_group_ingress_acl1}
  */
  readonly ipv6AccessGroupIngressAcl1?: string;
  /**
  * Specify ACL compression in hardware
  *   - Range: `0`-`4`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/interface#ipv6_access_group_ingress_compress InterfaceResource#ipv6_access_group_ingress_compress}
  */
  readonly ipv6AccessGroupIngressCompress?: number;
  /**
  * Per interface statistics in hardware
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/interface#ipv6_access_group_ingress_interface_statistics InterfaceResource#ipv6_access_group_ingress_interface_statistics}
  */
  readonly ipv6AccessGroupIngressInterfaceStatistics?: boolean | cdktf.IResolvable;
  /**
  * IPv6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/interface#ipv6_addresses InterfaceResource#ipv6_addresses}
  */
  readonly ipv6Addresses?: InterfaceResourceIpv6Addresses[] | cdktf.IResolvable;
  /**
  * Enable slaac on Mgmt interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/interface#ipv6_autoconfig InterfaceResource#ipv6_autoconfig}
  */
  readonly ipv6Autoconfig?: boolean | cdktf.IResolvable;
  /**
  * Enable IPv6 on interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/interface#ipv6_enable InterfaceResource#ipv6_enable}
  */
  readonly ipv6Enable?: boolean | cdktf.IResolvable;
  /**
  * IPv6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/interface#ipv6_link_local_address InterfaceResource#ipv6_link_local_address}
  */
  readonly ipv6LinkLocalAddress?: string;
  /**
  * IPv6 address zone
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/interface#ipv6_link_local_zone InterfaceResource#ipv6_link_local_zone}
  */
  readonly ipv6LinkLocalZone?: string;
  /**
  * Allow default route to match when checking source address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/interface#ipv6_verify_unicast_source_reachable_via_allow_default InterfaceResource#ipv6_verify_unicast_source_reachable_via_allow_default}
  */
  readonly ipv6VerifyUnicastSourceReachableViaAllowDefault?: boolean | cdktf.IResolvable;
  /**
  * Allow router to ping itself (opens vulnerability in verification)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/interface#ipv6_verify_unicast_source_reachable_via_allow_self_ping InterfaceResource#ipv6_verify_unicast_source_reachable_via_allow_self_ping}
  */
  readonly ipv6VerifyUnicastSourceReachableViaAllowSelfPing?: boolean | cdktf.IResolvable;
  /**
  * Source reachable type
  *   - Choices: `any`, `rx`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/interface#ipv6_verify_unicast_source_reachable_via_type InterfaceResource#ipv6_verify_unicast_source_reachable_via_type}
  */
  readonly ipv6VerifyUnicastSourceReachableViaType?: string;
  /**
  * l2transport sub-interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/interface#l2transport InterfaceResource#l2transport}
  */
  readonly l2Transport?: boolean | cdktf.IResolvable;
  /**
  * Single VLAN id or start of VLAN range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/interface#l2transport_encapsulation_dot1q_second_dot1q InterfaceResource#l2transport_encapsulation_dot1q_second_dot1q}
  */
  readonly l2TransportEncapsulationDot1QSecondDot1Q?: string;
  /**
  * Single VLAN id or start of VLAN range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/interface#l2transport_encapsulation_dot1q_vlan_id InterfaceResource#l2transport_encapsulation_dot1q_vlan_id}
  */
  readonly l2TransportEncapsulationDot1QVlanId?: string;
  /**
  * Specify interval for load calculation for an interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/interface#load_interval InterfaceResource#load_interval}
  */
  readonly loadInterval?: number;
  /**
  * Set the MTU on an interface
  *   - Range: `64`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/interface#mtu InterfaceResource#mtu}
  */
  readonly mtu?: number;
  /**
  * multipoint sub-interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/interface#multipoint InterfaceResource#multipoint}
  */
  readonly multipoint?: boolean | cdktf.IResolvable;
  /**
  * point-to-point sub-interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/interface#point_to_point InterfaceResource#point_to_point}
  */
  readonly pointToPoint?: boolean | cdktf.IResolvable;
  /**
  * Remove outer tag only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/interface#rewrite_ingress_tag_pop_one InterfaceResource#rewrite_ingress_tag_pop_one}
  */
  readonly rewriteIngressTagPopOne?: boolean | cdktf.IResolvable;
  /**
  * Remove two outermost tags
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/interface#rewrite_ingress_tag_pop_two InterfaceResource#rewrite_ingress_tag_pop_two}
  */
  readonly rewriteIngressTagPopTwo?: boolean | cdktf.IResolvable;
  /**
  * Configure a policy in the input direction
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/interface#service_policy_input InterfaceResource#service_policy_input}
  */
  readonly servicePolicyInput?: InterfaceResourceServicePolicyInput[] | cdktf.IResolvable;
  /**
  * direction of service policy application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/interface#service_policy_output InterfaceResource#service_policy_output}
  */
  readonly servicePolicyOutput?: InterfaceResourceServicePolicyOutput[] | cdktf.IResolvable;
  /**
  * shutdown the given interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/interface#shutdown InterfaceResource#shutdown}
  */
  readonly shutdown?: boolean | cdktf.IResolvable;
  /**
  * Enable IP processing without an explicit address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/interface#unnumbered InterfaceResource#unnumbered}
  */
  readonly unnumbered?: string;
  /**
  * Set VRF in which the interface operates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/interface#vrf InterfaceResource#vrf}
  */
  readonly vrf?: string;
}
export interface InterfaceResourceFlowIpv4EgressMonitorSamplers {
  /**
  * Specify a flow monitor for packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/interface#monitor_map_name InterfaceResource#monitor_map_name}
  */
  readonly monitorMapName: string;
  /**
  * Specify a sampler for packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/interface#sampler_map_name InterfaceResource#sampler_map_name}
  */
  readonly samplerMapName: string;
}

export function interfaceResourceFlowIpv4EgressMonitorSamplersToTerraform(struct?: InterfaceResourceFlowIpv4EgressMonitorSamplers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    monitor_map_name: cdktf.stringToTerraform(struct!.monitorMapName),
    sampler_map_name: cdktf.stringToTerraform(struct!.samplerMapName),
  }
}


export function interfaceResourceFlowIpv4EgressMonitorSamplersToHclTerraform(struct?: InterfaceResourceFlowIpv4EgressMonitorSamplers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    monitor_map_name: {
      value: cdktf.stringToHclTerraform(struct!.monitorMapName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sampler_map_name: {
      value: cdktf.stringToHclTerraform(struct!.samplerMapName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceResourceFlowIpv4EgressMonitorSamplersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceResourceFlowIpv4EgressMonitorSamplers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._monitorMapName !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitorMapName = this._monitorMapName;
    }
    if (this._samplerMapName !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplerMapName = this._samplerMapName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceResourceFlowIpv4EgressMonitorSamplers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._monitorMapName = undefined;
      this._samplerMapName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._monitorMapName = value.monitorMapName;
      this._samplerMapName = value.samplerMapName;
    }
  }

  // monitor_map_name - computed: false, optional: false, required: true
  private _monitorMapName?: string; 
  public get monitorMapName() {
    return this.getStringAttribute('monitor_map_name');
  }
  public set monitorMapName(value: string) {
    this._monitorMapName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorMapNameInput() {
    return this._monitorMapName;
  }

  // sampler_map_name - computed: false, optional: false, required: true
  private _samplerMapName?: string; 
  public get samplerMapName() {
    return this.getStringAttribute('sampler_map_name');
  }
  public set samplerMapName(value: string) {
    this._samplerMapName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get samplerMapNameInput() {
    return this._samplerMapName;
  }
}

export class InterfaceResourceFlowIpv4EgressMonitorSamplersList extends cdktf.ComplexList {
  public internalValue? : InterfaceResourceFlowIpv4EgressMonitorSamplers[] | cdktf.IResolvable

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
  public get(index: number): InterfaceResourceFlowIpv4EgressMonitorSamplersOutputReference {
    return new InterfaceResourceFlowIpv4EgressMonitorSamplersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceResourceFlowIpv4EgressMonitors {
  /**
  * Specify a flow monitor for packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/interface#monitor_map_name InterfaceResource#monitor_map_name}
  */
  readonly monitorMapName: string;
}

export function interfaceResourceFlowIpv4EgressMonitorsToTerraform(struct?: InterfaceResourceFlowIpv4EgressMonitors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    monitor_map_name: cdktf.stringToTerraform(struct!.monitorMapName),
  }
}


export function interfaceResourceFlowIpv4EgressMonitorsToHclTerraform(struct?: InterfaceResourceFlowIpv4EgressMonitors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    monitor_map_name: {
      value: cdktf.stringToHclTerraform(struct!.monitorMapName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceResourceFlowIpv4EgressMonitorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceResourceFlowIpv4EgressMonitors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._monitorMapName !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitorMapName = this._monitorMapName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceResourceFlowIpv4EgressMonitors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._monitorMapName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._monitorMapName = value.monitorMapName;
    }
  }

  // monitor_map_name - computed: false, optional: false, required: true
  private _monitorMapName?: string; 
  public get monitorMapName() {
    return this.getStringAttribute('monitor_map_name');
  }
  public set monitorMapName(value: string) {
    this._monitorMapName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorMapNameInput() {
    return this._monitorMapName;
  }
}

export class InterfaceResourceFlowIpv4EgressMonitorsList extends cdktf.ComplexList {
  public internalValue? : InterfaceResourceFlowIpv4EgressMonitors[] | cdktf.IResolvable

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
  public get(index: number): InterfaceResourceFlowIpv4EgressMonitorsOutputReference {
    return new InterfaceResourceFlowIpv4EgressMonitorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceResourceFlowIpv4IngressMonitorSamplers {
  /**
  * Specify a flow monitor for packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/interface#monitor_map_name InterfaceResource#monitor_map_name}
  */
  readonly monitorMapName: string;
  /**
  * Specify a sampler for packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/interface#sampler_map_name InterfaceResource#sampler_map_name}
  */
  readonly samplerMapName: string;
}

export function interfaceResourceFlowIpv4IngressMonitorSamplersToTerraform(struct?: InterfaceResourceFlowIpv4IngressMonitorSamplers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    monitor_map_name: cdktf.stringToTerraform(struct!.monitorMapName),
    sampler_map_name: cdktf.stringToTerraform(struct!.samplerMapName),
  }
}


export function interfaceResourceFlowIpv4IngressMonitorSamplersToHclTerraform(struct?: InterfaceResourceFlowIpv4IngressMonitorSamplers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    monitor_map_name: {
      value: cdktf.stringToHclTerraform(struct!.monitorMapName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sampler_map_name: {
      value: cdktf.stringToHclTerraform(struct!.samplerMapName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceResourceFlowIpv4IngressMonitorSamplersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceResourceFlowIpv4IngressMonitorSamplers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._monitorMapName !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitorMapName = this._monitorMapName;
    }
    if (this._samplerMapName !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplerMapName = this._samplerMapName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceResourceFlowIpv4IngressMonitorSamplers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._monitorMapName = undefined;
      this._samplerMapName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._monitorMapName = value.monitorMapName;
      this._samplerMapName = value.samplerMapName;
    }
  }

  // monitor_map_name - computed: false, optional: false, required: true
  private _monitorMapName?: string; 
  public get monitorMapName() {
    return this.getStringAttribute('monitor_map_name');
  }
  public set monitorMapName(value: string) {
    this._monitorMapName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorMapNameInput() {
    return this._monitorMapName;
  }

  // sampler_map_name - computed: false, optional: false, required: true
  private _samplerMapName?: string; 
  public get samplerMapName() {
    return this.getStringAttribute('sampler_map_name');
  }
  public set samplerMapName(value: string) {
    this._samplerMapName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get samplerMapNameInput() {
    return this._samplerMapName;
  }
}

export class InterfaceResourceFlowIpv4IngressMonitorSamplersList extends cdktf.ComplexList {
  public internalValue? : InterfaceResourceFlowIpv4IngressMonitorSamplers[] | cdktf.IResolvable

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
  public get(index: number): InterfaceResourceFlowIpv4IngressMonitorSamplersOutputReference {
    return new InterfaceResourceFlowIpv4IngressMonitorSamplersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceResourceFlowIpv4IngressMonitors {
  /**
  * Specify a flow monitor for packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/interface#monitor_map_name InterfaceResource#monitor_map_name}
  */
  readonly monitorMapName: string;
}

export function interfaceResourceFlowIpv4IngressMonitorsToTerraform(struct?: InterfaceResourceFlowIpv4IngressMonitors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    monitor_map_name: cdktf.stringToTerraform(struct!.monitorMapName),
  }
}


export function interfaceResourceFlowIpv4IngressMonitorsToHclTerraform(struct?: InterfaceResourceFlowIpv4IngressMonitors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    monitor_map_name: {
      value: cdktf.stringToHclTerraform(struct!.monitorMapName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceResourceFlowIpv4IngressMonitorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceResourceFlowIpv4IngressMonitors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._monitorMapName !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitorMapName = this._monitorMapName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceResourceFlowIpv4IngressMonitors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._monitorMapName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._monitorMapName = value.monitorMapName;
    }
  }

  // monitor_map_name - computed: false, optional: false, required: true
  private _monitorMapName?: string; 
  public get monitorMapName() {
    return this.getStringAttribute('monitor_map_name');
  }
  public set monitorMapName(value: string) {
    this._monitorMapName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorMapNameInput() {
    return this._monitorMapName;
  }
}

export class InterfaceResourceFlowIpv4IngressMonitorsList extends cdktf.ComplexList {
  public internalValue? : InterfaceResourceFlowIpv4IngressMonitors[] | cdktf.IResolvable

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
  public get(index: number): InterfaceResourceFlowIpv4IngressMonitorsOutputReference {
    return new InterfaceResourceFlowIpv4IngressMonitorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceResourceFlowIpv6EgressMonitorSamplers {
  /**
  * Specify a flow monitor for packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/interface#monitor_map_name InterfaceResource#monitor_map_name}
  */
  readonly monitorMapName: string;
  /**
  * Specify a sampler for packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/interface#sampler_map_name InterfaceResource#sampler_map_name}
  */
  readonly samplerMapName: string;
}

export function interfaceResourceFlowIpv6EgressMonitorSamplersToTerraform(struct?: InterfaceResourceFlowIpv6EgressMonitorSamplers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    monitor_map_name: cdktf.stringToTerraform(struct!.monitorMapName),
    sampler_map_name: cdktf.stringToTerraform(struct!.samplerMapName),
  }
}


export function interfaceResourceFlowIpv6EgressMonitorSamplersToHclTerraform(struct?: InterfaceResourceFlowIpv6EgressMonitorSamplers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    monitor_map_name: {
      value: cdktf.stringToHclTerraform(struct!.monitorMapName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sampler_map_name: {
      value: cdktf.stringToHclTerraform(struct!.samplerMapName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceResourceFlowIpv6EgressMonitorSamplersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceResourceFlowIpv6EgressMonitorSamplers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._monitorMapName !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitorMapName = this._monitorMapName;
    }
    if (this._samplerMapName !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplerMapName = this._samplerMapName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceResourceFlowIpv6EgressMonitorSamplers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._monitorMapName = undefined;
      this._samplerMapName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._monitorMapName = value.monitorMapName;
      this._samplerMapName = value.samplerMapName;
    }
  }

  // monitor_map_name - computed: false, optional: false, required: true
  private _monitorMapName?: string; 
  public get monitorMapName() {
    return this.getStringAttribute('monitor_map_name');
  }
  public set monitorMapName(value: string) {
    this._monitorMapName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorMapNameInput() {
    return this._monitorMapName;
  }

  // sampler_map_name - computed: false, optional: false, required: true
  private _samplerMapName?: string; 
  public get samplerMapName() {
    return this.getStringAttribute('sampler_map_name');
  }
  public set samplerMapName(value: string) {
    this._samplerMapName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get samplerMapNameInput() {
    return this._samplerMapName;
  }
}

export class InterfaceResourceFlowIpv6EgressMonitorSamplersList extends cdktf.ComplexList {
  public internalValue? : InterfaceResourceFlowIpv6EgressMonitorSamplers[] | cdktf.IResolvable

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
  public get(index: number): InterfaceResourceFlowIpv6EgressMonitorSamplersOutputReference {
    return new InterfaceResourceFlowIpv6EgressMonitorSamplersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceResourceFlowIpv6EgressMonitors {
  /**
  * Specify a flow monitor for packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/interface#monitor_map_name InterfaceResource#monitor_map_name}
  */
  readonly monitorMapName: string;
}

export function interfaceResourceFlowIpv6EgressMonitorsToTerraform(struct?: InterfaceResourceFlowIpv6EgressMonitors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    monitor_map_name: cdktf.stringToTerraform(struct!.monitorMapName),
  }
}


export function interfaceResourceFlowIpv6EgressMonitorsToHclTerraform(struct?: InterfaceResourceFlowIpv6EgressMonitors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    monitor_map_name: {
      value: cdktf.stringToHclTerraform(struct!.monitorMapName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceResourceFlowIpv6EgressMonitorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceResourceFlowIpv6EgressMonitors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._monitorMapName !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitorMapName = this._monitorMapName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceResourceFlowIpv6EgressMonitors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._monitorMapName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._monitorMapName = value.monitorMapName;
    }
  }

  // monitor_map_name - computed: false, optional: false, required: true
  private _monitorMapName?: string; 
  public get monitorMapName() {
    return this.getStringAttribute('monitor_map_name');
  }
  public set monitorMapName(value: string) {
    this._monitorMapName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorMapNameInput() {
    return this._monitorMapName;
  }
}

export class InterfaceResourceFlowIpv6EgressMonitorsList extends cdktf.ComplexList {
  public internalValue? : InterfaceResourceFlowIpv6EgressMonitors[] | cdktf.IResolvable

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
  public get(index: number): InterfaceResourceFlowIpv6EgressMonitorsOutputReference {
    return new InterfaceResourceFlowIpv6EgressMonitorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceResourceFlowIpv6IngressMonitorSamplers {
  /**
  * Specify a flow monitor for packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/interface#monitor_map_name InterfaceResource#monitor_map_name}
  */
  readonly monitorMapName: string;
  /**
  * Specify a sampler for packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/interface#sampler_map_name InterfaceResource#sampler_map_name}
  */
  readonly samplerMapName: string;
}

export function interfaceResourceFlowIpv6IngressMonitorSamplersToTerraform(struct?: InterfaceResourceFlowIpv6IngressMonitorSamplers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    monitor_map_name: cdktf.stringToTerraform(struct!.monitorMapName),
    sampler_map_name: cdktf.stringToTerraform(struct!.samplerMapName),
  }
}


export function interfaceResourceFlowIpv6IngressMonitorSamplersToHclTerraform(struct?: InterfaceResourceFlowIpv6IngressMonitorSamplers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    monitor_map_name: {
      value: cdktf.stringToHclTerraform(struct!.monitorMapName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sampler_map_name: {
      value: cdktf.stringToHclTerraform(struct!.samplerMapName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceResourceFlowIpv6IngressMonitorSamplersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceResourceFlowIpv6IngressMonitorSamplers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._monitorMapName !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitorMapName = this._monitorMapName;
    }
    if (this._samplerMapName !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplerMapName = this._samplerMapName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceResourceFlowIpv6IngressMonitorSamplers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._monitorMapName = undefined;
      this._samplerMapName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._monitorMapName = value.monitorMapName;
      this._samplerMapName = value.samplerMapName;
    }
  }

  // monitor_map_name - computed: false, optional: false, required: true
  private _monitorMapName?: string; 
  public get monitorMapName() {
    return this.getStringAttribute('monitor_map_name');
  }
  public set monitorMapName(value: string) {
    this._monitorMapName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorMapNameInput() {
    return this._monitorMapName;
  }

  // sampler_map_name - computed: false, optional: false, required: true
  private _samplerMapName?: string; 
  public get samplerMapName() {
    return this.getStringAttribute('sampler_map_name');
  }
  public set samplerMapName(value: string) {
    this._samplerMapName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get samplerMapNameInput() {
    return this._samplerMapName;
  }
}

export class InterfaceResourceFlowIpv6IngressMonitorSamplersList extends cdktf.ComplexList {
  public internalValue? : InterfaceResourceFlowIpv6IngressMonitorSamplers[] | cdktf.IResolvable

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
  public get(index: number): InterfaceResourceFlowIpv6IngressMonitorSamplersOutputReference {
    return new InterfaceResourceFlowIpv6IngressMonitorSamplersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceResourceFlowIpv6IngressMonitors {
  /**
  * Specify a flow monitor for packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/interface#monitor_map_name InterfaceResource#monitor_map_name}
  */
  readonly monitorMapName: string;
}

export function interfaceResourceFlowIpv6IngressMonitorsToTerraform(struct?: InterfaceResourceFlowIpv6IngressMonitors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    monitor_map_name: cdktf.stringToTerraform(struct!.monitorMapName),
  }
}


export function interfaceResourceFlowIpv6IngressMonitorsToHclTerraform(struct?: InterfaceResourceFlowIpv6IngressMonitors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    monitor_map_name: {
      value: cdktf.stringToHclTerraform(struct!.monitorMapName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceResourceFlowIpv6IngressMonitorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceResourceFlowIpv6IngressMonitors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._monitorMapName !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitorMapName = this._monitorMapName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceResourceFlowIpv6IngressMonitors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._monitorMapName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._monitorMapName = value.monitorMapName;
    }
  }

  // monitor_map_name - computed: false, optional: false, required: true
  private _monitorMapName?: string; 
  public get monitorMapName() {
    return this.getStringAttribute('monitor_map_name');
  }
  public set monitorMapName(value: string) {
    this._monitorMapName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorMapNameInput() {
    return this._monitorMapName;
  }
}

export class InterfaceResourceFlowIpv6IngressMonitorsList extends cdktf.ComplexList {
  public internalValue? : InterfaceResourceFlowIpv6IngressMonitors[] | cdktf.IResolvable

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
  public get(index: number): InterfaceResourceFlowIpv6IngressMonitorsOutputReference {
    return new InterfaceResourceFlowIpv6IngressMonitorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceResourceIpv6Addresses {
  /**
  * IPv6 name or address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/interface#address InterfaceResource#address}
  */
  readonly address: string;
  /**
  * Prefix length in bits
  *   - Range: `0`-`128`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/interface#prefix_length InterfaceResource#prefix_length}
  */
  readonly prefixLength: number;
  /**
  * IPv6 address zone
  *   - Default value: `0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/interface#zone InterfaceResource#zone}
  */
  readonly zone?: string;
}

export function interfaceResourceIpv6AddressesToTerraform(struct?: InterfaceResourceIpv6Addresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    prefix_length: cdktf.numberToTerraform(struct!.prefixLength),
    zone: cdktf.stringToTerraform(struct!.zone),
  }
}


export function interfaceResourceIpv6AddressesToHclTerraform(struct?: InterfaceResourceIpv6Addresses | cdktf.IResolvable): any {
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
    prefix_length: {
      value: cdktf.numberToHclTerraform(struct!.prefixLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone: {
      value: cdktf.stringToHclTerraform(struct!.zone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceResourceIpv6AddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceResourceIpv6Addresses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._prefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixLength = this._prefixLength;
    }
    if (this._zone !== undefined) {
      hasAnyValues = true;
      internalValueResult.zone = this._zone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceResourceIpv6Addresses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._prefixLength = undefined;
      this._zone = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._prefixLength = value.prefixLength;
      this._zone = value.zone;
    }
  }

  // address - computed: false, optional: false, required: true
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // prefix_length - computed: false, optional: false, required: true
  private _prefixLength?: number; 
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }
  public set prefixLength(value: number) {
    this._prefixLength = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixLengthInput() {
    return this._prefixLength;
  }

  // zone - computed: true, optional: true, required: false
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  public resetZone() {
    this._zone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }
}

export class InterfaceResourceIpv6AddressesList extends cdktf.ComplexList {
  public internalValue? : InterfaceResourceIpv6Addresses[] | cdktf.IResolvable

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
  public get(index: number): InterfaceResourceIpv6AddressesOutputReference {
    return new InterfaceResourceIpv6AddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceResourceServicePolicyInput {
  /**
  * Name of the service policy. Set 'input' for 'service-ipsec and 'service-gre' interfaces
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/interface#name InterfaceResource#name}
  */
  readonly name: string;
}

export function interfaceResourceServicePolicyInputToTerraform(struct?: InterfaceResourceServicePolicyInput | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function interfaceResourceServicePolicyInputToHclTerraform(struct?: InterfaceResourceServicePolicyInput | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceResourceServicePolicyInputOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceResourceServicePolicyInput | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceResourceServicePolicyInput | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
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
}

export class InterfaceResourceServicePolicyInputList extends cdktf.ComplexList {
  public internalValue? : InterfaceResourceServicePolicyInput[] | cdktf.IResolvable

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
  public get(index: number): InterfaceResourceServicePolicyInputOutputReference {
    return new InterfaceResourceServicePolicyInputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceResourceServicePolicyOutput {
  /**
  * Name of the service policy. Set 'output' for 'service-ipsec and 'service-gre' interfaces
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/interface#name InterfaceResource#name}
  */
  readonly name: string;
}

export function interfaceResourceServicePolicyOutputToTerraform(struct?: InterfaceResourceServicePolicyOutput | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function interfaceResourceServicePolicyOutputToHclTerraform(struct?: InterfaceResourceServicePolicyOutput | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceResourceServicePolicyOutputOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceResourceServicePolicyOutput | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceResourceServicePolicyOutput | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
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
}

export class InterfaceResourceServicePolicyOutputList extends cdktf.ComplexList {
  public internalValue? : InterfaceResourceServicePolicyOutput[] | cdktf.IResolvable

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
  public get(index: number): InterfaceResourceServicePolicyOutputOutputReference {
    return new InterfaceResourceServicePolicyOutputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/interface iosxr_interface}
*/
export class InterfaceResource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxr_interface";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a InterfaceResource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the InterfaceResource to import
  * @param importFromId The id of the existing InterfaceResource that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/interface#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the InterfaceResource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxr_interface", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/interface iosxr_interface} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InterfaceResourceConfig
  */
  public constructor(scope: Construct, id: string, config: InterfaceResourceConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxr_interface',
      terraformGeneratorMetadata: {
        providerName: 'iosxr',
        providerVersion: '0.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bandwidth = config.bandwidth;
    this._bfdModeIetf = config.bfdModeIetf;
    this._bundleId = config.bundleId;
    this._bundleIdMode = config.bundleIdMode;
    this._bundleLoadBalancingHashDstIp = config.bundleLoadBalancingHashDstIp;
    this._bundleLoadBalancingHashSrcIp = config.bundleLoadBalancingHashSrcIp;
    this._bundleMaximumActiveLinks = config.bundleMaximumActiveLinks;
    this._bundleMinimumActiveLinks = config.bundleMinimumActiveLinks;
    this._bundlePortPriority = config.bundlePortPriority;
    this._bundleShutdown = config.bundleShutdown;
    this._cdp = config.cdp;
    this._dampening = config.dampening;
    this._dampeningDecayHalfLifeValue = config.dampeningDecayHalfLifeValue;
    this._deleteMode = config.deleteMode;
    this._description = config.description;
    this._device = config.device;
    this._encapsulationDot1QVlanId = config.encapsulationDot1QVlanId;
    this._flowIpv4EgressMonitorSamplers.internalValue = config.flowIpv4EgressMonitorSamplers;
    this._flowIpv4EgressMonitors.internalValue = config.flowIpv4EgressMonitors;
    this._flowIpv4IngressMonitorSamplers.internalValue = config.flowIpv4IngressMonitorSamplers;
    this._flowIpv4IngressMonitors.internalValue = config.flowIpv4IngressMonitors;
    this._flowIpv6EgressMonitorSamplers.internalValue = config.flowIpv6EgressMonitorSamplers;
    this._flowIpv6EgressMonitors.internalValue = config.flowIpv6EgressMonitors;
    this._flowIpv6IngressMonitorSamplers.internalValue = config.flowIpv6IngressMonitorSamplers;
    this._flowIpv6IngressMonitors.internalValue = config.flowIpv6IngressMonitors;
    this._interfaceName = config.interfaceName;
    this._ipv4AccessGroupEgressAcl = config.ipv4AccessGroupEgressAcl;
    this._ipv4AccessGroupEgressCompress = config.ipv4AccessGroupEgressCompress;
    this._ipv4AccessGroupEgressHardwareCount = config.ipv4AccessGroupEgressHardwareCount;
    this._ipv4AccessGroupEgressInterfaceStatistics = config.ipv4AccessGroupEgressInterfaceStatistics;
    this._ipv4AccessGroupIngressAcl1 = config.ipv4AccessGroupIngressAcl1;
    this._ipv4AccessGroupIngressCompress = config.ipv4AccessGroupIngressCompress;
    this._ipv4AccessGroupIngressHardwareCount = config.ipv4AccessGroupIngressHardwareCount;
    this._ipv4AccessGroupIngressInterfaceStatistics = config.ipv4AccessGroupIngressInterfaceStatistics;
    this._ipv4Address = config.ipv4Address;
    this._ipv4Netmask = config.ipv4Netmask;
    this._ipv4PointToPoint = config.ipv4PointToPoint;
    this._ipv4VerifyUnicastSourceReachableViaAllowDefault = config.ipv4VerifyUnicastSourceReachableViaAllowDefault;
    this._ipv4VerifyUnicastSourceReachableViaAllowSelfPing = config.ipv4VerifyUnicastSourceReachableViaAllowSelfPing;
    this._ipv4VerifyUnicastSourceReachableViaType = config.ipv4VerifyUnicastSourceReachableViaType;
    this._ipv6AccessGroupEgressAcl = config.ipv6AccessGroupEgressAcl;
    this._ipv6AccessGroupEgressCompress = config.ipv6AccessGroupEgressCompress;
    this._ipv6AccessGroupEgressInterfaceStatistics = config.ipv6AccessGroupEgressInterfaceStatistics;
    this._ipv6AccessGroupIngressAcl1 = config.ipv6AccessGroupIngressAcl1;
    this._ipv6AccessGroupIngressCompress = config.ipv6AccessGroupIngressCompress;
    this._ipv6AccessGroupIngressInterfaceStatistics = config.ipv6AccessGroupIngressInterfaceStatistics;
    this._ipv6Addresses.internalValue = config.ipv6Addresses;
    this._ipv6Autoconfig = config.ipv6Autoconfig;
    this._ipv6Enable = config.ipv6Enable;
    this._ipv6LinkLocalAddress = config.ipv6LinkLocalAddress;
    this._ipv6LinkLocalZone = config.ipv6LinkLocalZone;
    this._ipv6VerifyUnicastSourceReachableViaAllowDefault = config.ipv6VerifyUnicastSourceReachableViaAllowDefault;
    this._ipv6VerifyUnicastSourceReachableViaAllowSelfPing = config.ipv6VerifyUnicastSourceReachableViaAllowSelfPing;
    this._ipv6VerifyUnicastSourceReachableViaType = config.ipv6VerifyUnicastSourceReachableViaType;
    this._l2Transport = config.l2Transport;
    this._l2TransportEncapsulationDot1QSecondDot1Q = config.l2TransportEncapsulationDot1QSecondDot1Q;
    this._l2TransportEncapsulationDot1QVlanId = config.l2TransportEncapsulationDot1QVlanId;
    this._loadInterval = config.loadInterval;
    this._mtu = config.mtu;
    this._multipoint = config.multipoint;
    this._pointToPoint = config.pointToPoint;
    this._rewriteIngressTagPopOne = config.rewriteIngressTagPopOne;
    this._rewriteIngressTagPopTwo = config.rewriteIngressTagPopTwo;
    this._servicePolicyInput.internalValue = config.servicePolicyInput;
    this._servicePolicyOutput.internalValue = config.servicePolicyOutput;
    this._shutdown = config.shutdown;
    this._unnumbered = config.unnumbered;
    this._vrf = config.vrf;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // bfd_mode_ietf - computed: false, optional: true, required: false
  private _bfdModeIetf?: boolean | cdktf.IResolvable; 
  public get bfdModeIetf() {
    return this.getBooleanAttribute('bfd_mode_ietf');
  }
  public set bfdModeIetf(value: boolean | cdktf.IResolvable) {
    this._bfdModeIetf = value;
  }
  public resetBfdModeIetf() {
    this._bfdModeIetf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdModeIetfInput() {
    return this._bfdModeIetf;
  }

  // bundle_id - computed: false, optional: true, required: false
  private _bundleId?: number; 
  public get bundleId() {
    return this.getNumberAttribute('bundle_id');
  }
  public set bundleId(value: number) {
    this._bundleId = value;
  }
  public resetBundleId() {
    this._bundleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bundleIdInput() {
    return this._bundleId;
  }

  // bundle_id_mode - computed: false, optional: true, required: false
  private _bundleIdMode?: string; 
  public get bundleIdMode() {
    return this.getStringAttribute('bundle_id_mode');
  }
  public set bundleIdMode(value: string) {
    this._bundleIdMode = value;
  }
  public resetBundleIdMode() {
    this._bundleIdMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bundleIdModeInput() {
    return this._bundleIdMode;
  }

  // bundle_load_balancing_hash_dst_ip - computed: false, optional: true, required: false
  private _bundleLoadBalancingHashDstIp?: boolean | cdktf.IResolvable; 
  public get bundleLoadBalancingHashDstIp() {
    return this.getBooleanAttribute('bundle_load_balancing_hash_dst_ip');
  }
  public set bundleLoadBalancingHashDstIp(value: boolean | cdktf.IResolvable) {
    this._bundleLoadBalancingHashDstIp = value;
  }
  public resetBundleLoadBalancingHashDstIp() {
    this._bundleLoadBalancingHashDstIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bundleLoadBalancingHashDstIpInput() {
    return this._bundleLoadBalancingHashDstIp;
  }

  // bundle_load_balancing_hash_src_ip - computed: false, optional: true, required: false
  private _bundleLoadBalancingHashSrcIp?: boolean | cdktf.IResolvable; 
  public get bundleLoadBalancingHashSrcIp() {
    return this.getBooleanAttribute('bundle_load_balancing_hash_src_ip');
  }
  public set bundleLoadBalancingHashSrcIp(value: boolean | cdktf.IResolvable) {
    this._bundleLoadBalancingHashSrcIp = value;
  }
  public resetBundleLoadBalancingHashSrcIp() {
    this._bundleLoadBalancingHashSrcIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bundleLoadBalancingHashSrcIpInput() {
    return this._bundleLoadBalancingHashSrcIp;
  }

  // bundle_maximum_active_links - computed: false, optional: true, required: false
  private _bundleMaximumActiveLinks?: number; 
  public get bundleMaximumActiveLinks() {
    return this.getNumberAttribute('bundle_maximum_active_links');
  }
  public set bundleMaximumActiveLinks(value: number) {
    this._bundleMaximumActiveLinks = value;
  }
  public resetBundleMaximumActiveLinks() {
    this._bundleMaximumActiveLinks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bundleMaximumActiveLinksInput() {
    return this._bundleMaximumActiveLinks;
  }

  // bundle_minimum_active_links - computed: false, optional: true, required: false
  private _bundleMinimumActiveLinks?: number; 
  public get bundleMinimumActiveLinks() {
    return this.getNumberAttribute('bundle_minimum_active_links');
  }
  public set bundleMinimumActiveLinks(value: number) {
    this._bundleMinimumActiveLinks = value;
  }
  public resetBundleMinimumActiveLinks() {
    this._bundleMinimumActiveLinks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bundleMinimumActiveLinksInput() {
    return this._bundleMinimumActiveLinks;
  }

  // bundle_port_priority - computed: false, optional: true, required: false
  private _bundlePortPriority?: number; 
  public get bundlePortPriority() {
    return this.getNumberAttribute('bundle_port_priority');
  }
  public set bundlePortPriority(value: number) {
    this._bundlePortPriority = value;
  }
  public resetBundlePortPriority() {
    this._bundlePortPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bundlePortPriorityInput() {
    return this._bundlePortPriority;
  }

  // bundle_shutdown - computed: false, optional: true, required: false
  private _bundleShutdown?: boolean | cdktf.IResolvable; 
  public get bundleShutdown() {
    return this.getBooleanAttribute('bundle_shutdown');
  }
  public set bundleShutdown(value: boolean | cdktf.IResolvable) {
    this._bundleShutdown = value;
  }
  public resetBundleShutdown() {
    this._bundleShutdown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bundleShutdownInput() {
    return this._bundleShutdown;
  }

  // cdp - computed: false, optional: true, required: false
  private _cdp?: boolean | cdktf.IResolvable; 
  public get cdp() {
    return this.getBooleanAttribute('cdp');
  }
  public set cdp(value: boolean | cdktf.IResolvable) {
    this._cdp = value;
  }
  public resetCdp() {
    this._cdp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cdpInput() {
    return this._cdp;
  }

  // dampening - computed: false, optional: true, required: false
  private _dampening?: boolean | cdktf.IResolvable; 
  public get dampening() {
    return this.getBooleanAttribute('dampening');
  }
  public set dampening(value: boolean | cdktf.IResolvable) {
    this._dampening = value;
  }
  public resetDampening() {
    this._dampening = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dampeningInput() {
    return this._dampening;
  }

  // dampening_decay_half_life_value - computed: false, optional: true, required: false
  private _dampeningDecayHalfLifeValue?: number; 
  public get dampeningDecayHalfLifeValue() {
    return this.getNumberAttribute('dampening_decay_half_life_value');
  }
  public set dampeningDecayHalfLifeValue(value: number) {
    this._dampeningDecayHalfLifeValue = value;
  }
  public resetDampeningDecayHalfLifeValue() {
    this._dampeningDecayHalfLifeValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dampeningDecayHalfLifeValueInput() {
    return this._dampeningDecayHalfLifeValue;
  }

  // delete_mode - computed: false, optional: true, required: false
  private _deleteMode?: string; 
  public get deleteMode() {
    return this.getStringAttribute('delete_mode');
  }
  public set deleteMode(value: string) {
    this._deleteMode = value;
  }
  public resetDeleteMode() {
    this._deleteMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteModeInput() {
    return this._deleteMode;
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

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // encapsulation_dot1q_vlan_id - computed: false, optional: true, required: false
  private _encapsulationDot1QVlanId?: number; 
  public get encapsulationDot1QVlanId() {
    return this.getNumberAttribute('encapsulation_dot1q_vlan_id');
  }
  public set encapsulationDot1QVlanId(value: number) {
    this._encapsulationDot1QVlanId = value;
  }
  public resetEncapsulationDot1QVlanId() {
    this._encapsulationDot1QVlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encapsulationDot1QVlanIdInput() {
    return this._encapsulationDot1QVlanId;
  }

  // flow_ipv4_egress_monitor_samplers - computed: false, optional: true, required: false
  private _flowIpv4EgressMonitorSamplers = new InterfaceResourceFlowIpv4EgressMonitorSamplersList(this, "flow_ipv4_egress_monitor_samplers", false);
  public get flowIpv4EgressMonitorSamplers() {
    return this._flowIpv4EgressMonitorSamplers;
  }
  public putFlowIpv4EgressMonitorSamplers(value: InterfaceResourceFlowIpv4EgressMonitorSamplers[] | cdktf.IResolvable) {
    this._flowIpv4EgressMonitorSamplers.internalValue = value;
  }
  public resetFlowIpv4EgressMonitorSamplers() {
    this._flowIpv4EgressMonitorSamplers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flowIpv4EgressMonitorSamplersInput() {
    return this._flowIpv4EgressMonitorSamplers.internalValue;
  }

  // flow_ipv4_egress_monitors - computed: false, optional: true, required: false
  private _flowIpv4EgressMonitors = new InterfaceResourceFlowIpv4EgressMonitorsList(this, "flow_ipv4_egress_monitors", false);
  public get flowIpv4EgressMonitors() {
    return this._flowIpv4EgressMonitors;
  }
  public putFlowIpv4EgressMonitors(value: InterfaceResourceFlowIpv4EgressMonitors[] | cdktf.IResolvable) {
    this._flowIpv4EgressMonitors.internalValue = value;
  }
  public resetFlowIpv4EgressMonitors() {
    this._flowIpv4EgressMonitors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flowIpv4EgressMonitorsInput() {
    return this._flowIpv4EgressMonitors.internalValue;
  }

  // flow_ipv4_ingress_monitor_samplers - computed: false, optional: true, required: false
  private _flowIpv4IngressMonitorSamplers = new InterfaceResourceFlowIpv4IngressMonitorSamplersList(this, "flow_ipv4_ingress_monitor_samplers", false);
  public get flowIpv4IngressMonitorSamplers() {
    return this._flowIpv4IngressMonitorSamplers;
  }
  public putFlowIpv4IngressMonitorSamplers(value: InterfaceResourceFlowIpv4IngressMonitorSamplers[] | cdktf.IResolvable) {
    this._flowIpv4IngressMonitorSamplers.internalValue = value;
  }
  public resetFlowIpv4IngressMonitorSamplers() {
    this._flowIpv4IngressMonitorSamplers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flowIpv4IngressMonitorSamplersInput() {
    return this._flowIpv4IngressMonitorSamplers.internalValue;
  }

  // flow_ipv4_ingress_monitors - computed: false, optional: true, required: false
  private _flowIpv4IngressMonitors = new InterfaceResourceFlowIpv4IngressMonitorsList(this, "flow_ipv4_ingress_monitors", false);
  public get flowIpv4IngressMonitors() {
    return this._flowIpv4IngressMonitors;
  }
  public putFlowIpv4IngressMonitors(value: InterfaceResourceFlowIpv4IngressMonitors[] | cdktf.IResolvable) {
    this._flowIpv4IngressMonitors.internalValue = value;
  }
  public resetFlowIpv4IngressMonitors() {
    this._flowIpv4IngressMonitors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flowIpv4IngressMonitorsInput() {
    return this._flowIpv4IngressMonitors.internalValue;
  }

  // flow_ipv6_egress_monitor_samplers - computed: false, optional: true, required: false
  private _flowIpv6EgressMonitorSamplers = new InterfaceResourceFlowIpv6EgressMonitorSamplersList(this, "flow_ipv6_egress_monitor_samplers", false);
  public get flowIpv6EgressMonitorSamplers() {
    return this._flowIpv6EgressMonitorSamplers;
  }
  public putFlowIpv6EgressMonitorSamplers(value: InterfaceResourceFlowIpv6EgressMonitorSamplers[] | cdktf.IResolvable) {
    this._flowIpv6EgressMonitorSamplers.internalValue = value;
  }
  public resetFlowIpv6EgressMonitorSamplers() {
    this._flowIpv6EgressMonitorSamplers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flowIpv6EgressMonitorSamplersInput() {
    return this._flowIpv6EgressMonitorSamplers.internalValue;
  }

  // flow_ipv6_egress_monitors - computed: false, optional: true, required: false
  private _flowIpv6EgressMonitors = new InterfaceResourceFlowIpv6EgressMonitorsList(this, "flow_ipv6_egress_monitors", false);
  public get flowIpv6EgressMonitors() {
    return this._flowIpv6EgressMonitors;
  }
  public putFlowIpv6EgressMonitors(value: InterfaceResourceFlowIpv6EgressMonitors[] | cdktf.IResolvable) {
    this._flowIpv6EgressMonitors.internalValue = value;
  }
  public resetFlowIpv6EgressMonitors() {
    this._flowIpv6EgressMonitors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flowIpv6EgressMonitorsInput() {
    return this._flowIpv6EgressMonitors.internalValue;
  }

  // flow_ipv6_ingress_monitor_samplers - computed: false, optional: true, required: false
  private _flowIpv6IngressMonitorSamplers = new InterfaceResourceFlowIpv6IngressMonitorSamplersList(this, "flow_ipv6_ingress_monitor_samplers", false);
  public get flowIpv6IngressMonitorSamplers() {
    return this._flowIpv6IngressMonitorSamplers;
  }
  public putFlowIpv6IngressMonitorSamplers(value: InterfaceResourceFlowIpv6IngressMonitorSamplers[] | cdktf.IResolvable) {
    this._flowIpv6IngressMonitorSamplers.internalValue = value;
  }
  public resetFlowIpv6IngressMonitorSamplers() {
    this._flowIpv6IngressMonitorSamplers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flowIpv6IngressMonitorSamplersInput() {
    return this._flowIpv6IngressMonitorSamplers.internalValue;
  }

  // flow_ipv6_ingress_monitors - computed: false, optional: true, required: false
  private _flowIpv6IngressMonitors = new InterfaceResourceFlowIpv6IngressMonitorsList(this, "flow_ipv6_ingress_monitors", false);
  public get flowIpv6IngressMonitors() {
    return this._flowIpv6IngressMonitors;
  }
  public putFlowIpv6IngressMonitors(value: InterfaceResourceFlowIpv6IngressMonitors[] | cdktf.IResolvable) {
    this._flowIpv6IngressMonitors.internalValue = value;
  }
  public resetFlowIpv6IngressMonitors() {
    this._flowIpv6IngressMonitors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flowIpv6IngressMonitorsInput() {
    return this._flowIpv6IngressMonitors.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // interface_name - computed: false, optional: false, required: true
  private _interfaceName?: string; 
  public get interfaceName() {
    return this.getStringAttribute('interface_name');
  }
  public set interfaceName(value: string) {
    this._interfaceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceNameInput() {
    return this._interfaceName;
  }

  // ipv4_access_group_egress_acl - computed: false, optional: true, required: false
  private _ipv4AccessGroupEgressAcl?: string; 
  public get ipv4AccessGroupEgressAcl() {
    return this.getStringAttribute('ipv4_access_group_egress_acl');
  }
  public set ipv4AccessGroupEgressAcl(value: string) {
    this._ipv4AccessGroupEgressAcl = value;
  }
  public resetIpv4AccessGroupEgressAcl() {
    this._ipv4AccessGroupEgressAcl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AccessGroupEgressAclInput() {
    return this._ipv4AccessGroupEgressAcl;
  }

  // ipv4_access_group_egress_compress - computed: false, optional: true, required: false
  private _ipv4AccessGroupEgressCompress?: number; 
  public get ipv4AccessGroupEgressCompress() {
    return this.getNumberAttribute('ipv4_access_group_egress_compress');
  }
  public set ipv4AccessGroupEgressCompress(value: number) {
    this._ipv4AccessGroupEgressCompress = value;
  }
  public resetIpv4AccessGroupEgressCompress() {
    this._ipv4AccessGroupEgressCompress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AccessGroupEgressCompressInput() {
    return this._ipv4AccessGroupEgressCompress;
  }

  // ipv4_access_group_egress_hardware_count - computed: false, optional: true, required: false
  private _ipv4AccessGroupEgressHardwareCount?: boolean | cdktf.IResolvable; 
  public get ipv4AccessGroupEgressHardwareCount() {
    return this.getBooleanAttribute('ipv4_access_group_egress_hardware_count');
  }
  public set ipv4AccessGroupEgressHardwareCount(value: boolean | cdktf.IResolvable) {
    this._ipv4AccessGroupEgressHardwareCount = value;
  }
  public resetIpv4AccessGroupEgressHardwareCount() {
    this._ipv4AccessGroupEgressHardwareCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AccessGroupEgressHardwareCountInput() {
    return this._ipv4AccessGroupEgressHardwareCount;
  }

  // ipv4_access_group_egress_interface_statistics - computed: false, optional: true, required: false
  private _ipv4AccessGroupEgressInterfaceStatistics?: boolean | cdktf.IResolvable; 
  public get ipv4AccessGroupEgressInterfaceStatistics() {
    return this.getBooleanAttribute('ipv4_access_group_egress_interface_statistics');
  }
  public set ipv4AccessGroupEgressInterfaceStatistics(value: boolean | cdktf.IResolvable) {
    this._ipv4AccessGroupEgressInterfaceStatistics = value;
  }
  public resetIpv4AccessGroupEgressInterfaceStatistics() {
    this._ipv4AccessGroupEgressInterfaceStatistics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AccessGroupEgressInterfaceStatisticsInput() {
    return this._ipv4AccessGroupEgressInterfaceStatistics;
  }

  // ipv4_access_group_ingress_acl1 - computed: false, optional: true, required: false
  private _ipv4AccessGroupIngressAcl1?: string; 
  public get ipv4AccessGroupIngressAcl1() {
    return this.getStringAttribute('ipv4_access_group_ingress_acl1');
  }
  public set ipv4AccessGroupIngressAcl1(value: string) {
    this._ipv4AccessGroupIngressAcl1 = value;
  }
  public resetIpv4AccessGroupIngressAcl1() {
    this._ipv4AccessGroupIngressAcl1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AccessGroupIngressAcl1Input() {
    return this._ipv4AccessGroupIngressAcl1;
  }

  // ipv4_access_group_ingress_compress - computed: false, optional: true, required: false
  private _ipv4AccessGroupIngressCompress?: number; 
  public get ipv4AccessGroupIngressCompress() {
    return this.getNumberAttribute('ipv4_access_group_ingress_compress');
  }
  public set ipv4AccessGroupIngressCompress(value: number) {
    this._ipv4AccessGroupIngressCompress = value;
  }
  public resetIpv4AccessGroupIngressCompress() {
    this._ipv4AccessGroupIngressCompress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AccessGroupIngressCompressInput() {
    return this._ipv4AccessGroupIngressCompress;
  }

  // ipv4_access_group_ingress_hardware_count - computed: false, optional: true, required: false
  private _ipv4AccessGroupIngressHardwareCount?: boolean | cdktf.IResolvable; 
  public get ipv4AccessGroupIngressHardwareCount() {
    return this.getBooleanAttribute('ipv4_access_group_ingress_hardware_count');
  }
  public set ipv4AccessGroupIngressHardwareCount(value: boolean | cdktf.IResolvable) {
    this._ipv4AccessGroupIngressHardwareCount = value;
  }
  public resetIpv4AccessGroupIngressHardwareCount() {
    this._ipv4AccessGroupIngressHardwareCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AccessGroupIngressHardwareCountInput() {
    return this._ipv4AccessGroupIngressHardwareCount;
  }

  // ipv4_access_group_ingress_interface_statistics - computed: false, optional: true, required: false
  private _ipv4AccessGroupIngressInterfaceStatistics?: boolean | cdktf.IResolvable; 
  public get ipv4AccessGroupIngressInterfaceStatistics() {
    return this.getBooleanAttribute('ipv4_access_group_ingress_interface_statistics');
  }
  public set ipv4AccessGroupIngressInterfaceStatistics(value: boolean | cdktf.IResolvable) {
    this._ipv4AccessGroupIngressInterfaceStatistics = value;
  }
  public resetIpv4AccessGroupIngressInterfaceStatistics() {
    this._ipv4AccessGroupIngressInterfaceStatistics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AccessGroupIngressInterfaceStatisticsInput() {
    return this._ipv4AccessGroupIngressInterfaceStatistics;
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

  // ipv4_netmask - computed: false, optional: true, required: false
  private _ipv4Netmask?: string; 
  public get ipv4Netmask() {
    return this.getStringAttribute('ipv4_netmask');
  }
  public set ipv4Netmask(value: string) {
    this._ipv4Netmask = value;
  }
  public resetIpv4Netmask() {
    this._ipv4Netmask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4NetmaskInput() {
    return this._ipv4Netmask;
  }

  // ipv4_point_to_point - computed: false, optional: true, required: false
  private _ipv4PointToPoint?: boolean | cdktf.IResolvable; 
  public get ipv4PointToPoint() {
    return this.getBooleanAttribute('ipv4_point_to_point');
  }
  public set ipv4PointToPoint(value: boolean | cdktf.IResolvable) {
    this._ipv4PointToPoint = value;
  }
  public resetIpv4PointToPoint() {
    this._ipv4PointToPoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4PointToPointInput() {
    return this._ipv4PointToPoint;
  }

  // ipv4_verify_unicast_source_reachable_via_allow_default - computed: false, optional: true, required: false
  private _ipv4VerifyUnicastSourceReachableViaAllowDefault?: boolean | cdktf.IResolvable; 
  public get ipv4VerifyUnicastSourceReachableViaAllowDefault() {
    return this.getBooleanAttribute('ipv4_verify_unicast_source_reachable_via_allow_default');
  }
  public set ipv4VerifyUnicastSourceReachableViaAllowDefault(value: boolean | cdktf.IResolvable) {
    this._ipv4VerifyUnicastSourceReachableViaAllowDefault = value;
  }
  public resetIpv4VerifyUnicastSourceReachableViaAllowDefault() {
    this._ipv4VerifyUnicastSourceReachableViaAllowDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4VerifyUnicastSourceReachableViaAllowDefaultInput() {
    return this._ipv4VerifyUnicastSourceReachableViaAllowDefault;
  }

  // ipv4_verify_unicast_source_reachable_via_allow_self_ping - computed: false, optional: true, required: false
  private _ipv4VerifyUnicastSourceReachableViaAllowSelfPing?: boolean | cdktf.IResolvable; 
  public get ipv4VerifyUnicastSourceReachableViaAllowSelfPing() {
    return this.getBooleanAttribute('ipv4_verify_unicast_source_reachable_via_allow_self_ping');
  }
  public set ipv4VerifyUnicastSourceReachableViaAllowSelfPing(value: boolean | cdktf.IResolvable) {
    this._ipv4VerifyUnicastSourceReachableViaAllowSelfPing = value;
  }
  public resetIpv4VerifyUnicastSourceReachableViaAllowSelfPing() {
    this._ipv4VerifyUnicastSourceReachableViaAllowSelfPing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4VerifyUnicastSourceReachableViaAllowSelfPingInput() {
    return this._ipv4VerifyUnicastSourceReachableViaAllowSelfPing;
  }

  // ipv4_verify_unicast_source_reachable_via_type - computed: false, optional: true, required: false
  private _ipv4VerifyUnicastSourceReachableViaType?: string; 
  public get ipv4VerifyUnicastSourceReachableViaType() {
    return this.getStringAttribute('ipv4_verify_unicast_source_reachable_via_type');
  }
  public set ipv4VerifyUnicastSourceReachableViaType(value: string) {
    this._ipv4VerifyUnicastSourceReachableViaType = value;
  }
  public resetIpv4VerifyUnicastSourceReachableViaType() {
    this._ipv4VerifyUnicastSourceReachableViaType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4VerifyUnicastSourceReachableViaTypeInput() {
    return this._ipv4VerifyUnicastSourceReachableViaType;
  }

  // ipv6_access_group_egress_acl - computed: false, optional: true, required: false
  private _ipv6AccessGroupEgressAcl?: string; 
  public get ipv6AccessGroupEgressAcl() {
    return this.getStringAttribute('ipv6_access_group_egress_acl');
  }
  public set ipv6AccessGroupEgressAcl(value: string) {
    this._ipv6AccessGroupEgressAcl = value;
  }
  public resetIpv6AccessGroupEgressAcl() {
    this._ipv6AccessGroupEgressAcl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AccessGroupEgressAclInput() {
    return this._ipv6AccessGroupEgressAcl;
  }

  // ipv6_access_group_egress_compress - computed: false, optional: true, required: false
  private _ipv6AccessGroupEgressCompress?: number; 
  public get ipv6AccessGroupEgressCompress() {
    return this.getNumberAttribute('ipv6_access_group_egress_compress');
  }
  public set ipv6AccessGroupEgressCompress(value: number) {
    this._ipv6AccessGroupEgressCompress = value;
  }
  public resetIpv6AccessGroupEgressCompress() {
    this._ipv6AccessGroupEgressCompress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AccessGroupEgressCompressInput() {
    return this._ipv6AccessGroupEgressCompress;
  }

  // ipv6_access_group_egress_interface_statistics - computed: false, optional: true, required: false
  private _ipv6AccessGroupEgressInterfaceStatistics?: boolean | cdktf.IResolvable; 
  public get ipv6AccessGroupEgressInterfaceStatistics() {
    return this.getBooleanAttribute('ipv6_access_group_egress_interface_statistics');
  }
  public set ipv6AccessGroupEgressInterfaceStatistics(value: boolean | cdktf.IResolvable) {
    this._ipv6AccessGroupEgressInterfaceStatistics = value;
  }
  public resetIpv6AccessGroupEgressInterfaceStatistics() {
    this._ipv6AccessGroupEgressInterfaceStatistics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AccessGroupEgressInterfaceStatisticsInput() {
    return this._ipv6AccessGroupEgressInterfaceStatistics;
  }

  // ipv6_access_group_ingress_acl1 - computed: false, optional: true, required: false
  private _ipv6AccessGroupIngressAcl1?: string; 
  public get ipv6AccessGroupIngressAcl1() {
    return this.getStringAttribute('ipv6_access_group_ingress_acl1');
  }
  public set ipv6AccessGroupIngressAcl1(value: string) {
    this._ipv6AccessGroupIngressAcl1 = value;
  }
  public resetIpv6AccessGroupIngressAcl1() {
    this._ipv6AccessGroupIngressAcl1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AccessGroupIngressAcl1Input() {
    return this._ipv6AccessGroupIngressAcl1;
  }

  // ipv6_access_group_ingress_compress - computed: false, optional: true, required: false
  private _ipv6AccessGroupIngressCompress?: number; 
  public get ipv6AccessGroupIngressCompress() {
    return this.getNumberAttribute('ipv6_access_group_ingress_compress');
  }
  public set ipv6AccessGroupIngressCompress(value: number) {
    this._ipv6AccessGroupIngressCompress = value;
  }
  public resetIpv6AccessGroupIngressCompress() {
    this._ipv6AccessGroupIngressCompress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AccessGroupIngressCompressInput() {
    return this._ipv6AccessGroupIngressCompress;
  }

  // ipv6_access_group_ingress_interface_statistics - computed: false, optional: true, required: false
  private _ipv6AccessGroupIngressInterfaceStatistics?: boolean | cdktf.IResolvable; 
  public get ipv6AccessGroupIngressInterfaceStatistics() {
    return this.getBooleanAttribute('ipv6_access_group_ingress_interface_statistics');
  }
  public set ipv6AccessGroupIngressInterfaceStatistics(value: boolean | cdktf.IResolvable) {
    this._ipv6AccessGroupIngressInterfaceStatistics = value;
  }
  public resetIpv6AccessGroupIngressInterfaceStatistics() {
    this._ipv6AccessGroupIngressInterfaceStatistics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AccessGroupIngressInterfaceStatisticsInput() {
    return this._ipv6AccessGroupIngressInterfaceStatistics;
  }

  // ipv6_addresses - computed: false, optional: true, required: false
  private _ipv6Addresses = new InterfaceResourceIpv6AddressesList(this, "ipv6_addresses", false);
  public get ipv6Addresses() {
    return this._ipv6Addresses;
  }
  public putIpv6Addresses(value: InterfaceResourceIpv6Addresses[] | cdktf.IResolvable) {
    this._ipv6Addresses.internalValue = value;
  }
  public resetIpv6Addresses() {
    this._ipv6Addresses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressesInput() {
    return this._ipv6Addresses.internalValue;
  }

  // ipv6_autoconfig - computed: false, optional: true, required: false
  private _ipv6Autoconfig?: boolean | cdktf.IResolvable; 
  public get ipv6Autoconfig() {
    return this.getBooleanAttribute('ipv6_autoconfig');
  }
  public set ipv6Autoconfig(value: boolean | cdktf.IResolvable) {
    this._ipv6Autoconfig = value;
  }
  public resetIpv6Autoconfig() {
    this._ipv6Autoconfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AutoconfigInput() {
    return this._ipv6Autoconfig;
  }

  // ipv6_enable - computed: false, optional: true, required: false
  private _ipv6Enable?: boolean | cdktf.IResolvable; 
  public get ipv6Enable() {
    return this.getBooleanAttribute('ipv6_enable');
  }
  public set ipv6Enable(value: boolean | cdktf.IResolvable) {
    this._ipv6Enable = value;
  }
  public resetIpv6Enable() {
    this._ipv6Enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6EnableInput() {
    return this._ipv6Enable;
  }

  // ipv6_link_local_address - computed: false, optional: true, required: false
  private _ipv6LinkLocalAddress?: string; 
  public get ipv6LinkLocalAddress() {
    return this.getStringAttribute('ipv6_link_local_address');
  }
  public set ipv6LinkLocalAddress(value: string) {
    this._ipv6LinkLocalAddress = value;
  }
  public resetIpv6LinkLocalAddress() {
    this._ipv6LinkLocalAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6LinkLocalAddressInput() {
    return this._ipv6LinkLocalAddress;
  }

  // ipv6_link_local_zone - computed: false, optional: true, required: false
  private _ipv6LinkLocalZone?: string; 
  public get ipv6LinkLocalZone() {
    return this.getStringAttribute('ipv6_link_local_zone');
  }
  public set ipv6LinkLocalZone(value: string) {
    this._ipv6LinkLocalZone = value;
  }
  public resetIpv6LinkLocalZone() {
    this._ipv6LinkLocalZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6LinkLocalZoneInput() {
    return this._ipv6LinkLocalZone;
  }

  // ipv6_verify_unicast_source_reachable_via_allow_default - computed: false, optional: true, required: false
  private _ipv6VerifyUnicastSourceReachableViaAllowDefault?: boolean | cdktf.IResolvable; 
  public get ipv6VerifyUnicastSourceReachableViaAllowDefault() {
    return this.getBooleanAttribute('ipv6_verify_unicast_source_reachable_via_allow_default');
  }
  public set ipv6VerifyUnicastSourceReachableViaAllowDefault(value: boolean | cdktf.IResolvable) {
    this._ipv6VerifyUnicastSourceReachableViaAllowDefault = value;
  }
  public resetIpv6VerifyUnicastSourceReachableViaAllowDefault() {
    this._ipv6VerifyUnicastSourceReachableViaAllowDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6VerifyUnicastSourceReachableViaAllowDefaultInput() {
    return this._ipv6VerifyUnicastSourceReachableViaAllowDefault;
  }

  // ipv6_verify_unicast_source_reachable_via_allow_self_ping - computed: false, optional: true, required: false
  private _ipv6VerifyUnicastSourceReachableViaAllowSelfPing?: boolean | cdktf.IResolvable; 
  public get ipv6VerifyUnicastSourceReachableViaAllowSelfPing() {
    return this.getBooleanAttribute('ipv6_verify_unicast_source_reachable_via_allow_self_ping');
  }
  public set ipv6VerifyUnicastSourceReachableViaAllowSelfPing(value: boolean | cdktf.IResolvable) {
    this._ipv6VerifyUnicastSourceReachableViaAllowSelfPing = value;
  }
  public resetIpv6VerifyUnicastSourceReachableViaAllowSelfPing() {
    this._ipv6VerifyUnicastSourceReachableViaAllowSelfPing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6VerifyUnicastSourceReachableViaAllowSelfPingInput() {
    return this._ipv6VerifyUnicastSourceReachableViaAllowSelfPing;
  }

  // ipv6_verify_unicast_source_reachable_via_type - computed: false, optional: true, required: false
  private _ipv6VerifyUnicastSourceReachableViaType?: string; 
  public get ipv6VerifyUnicastSourceReachableViaType() {
    return this.getStringAttribute('ipv6_verify_unicast_source_reachable_via_type');
  }
  public set ipv6VerifyUnicastSourceReachableViaType(value: string) {
    this._ipv6VerifyUnicastSourceReachableViaType = value;
  }
  public resetIpv6VerifyUnicastSourceReachableViaType() {
    this._ipv6VerifyUnicastSourceReachableViaType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6VerifyUnicastSourceReachableViaTypeInput() {
    return this._ipv6VerifyUnicastSourceReachableViaType;
  }

  // l2transport - computed: false, optional: true, required: false
  private _l2Transport?: boolean | cdktf.IResolvable; 
  public get l2Transport() {
    return this.getBooleanAttribute('l2transport');
  }
  public set l2Transport(value: boolean | cdktf.IResolvable) {
    this._l2Transport = value;
  }
  public resetL2Transport() {
    this._l2Transport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l2TransportInput() {
    return this._l2Transport;
  }

  // l2transport_encapsulation_dot1q_second_dot1q - computed: false, optional: true, required: false
  private _l2TransportEncapsulationDot1QSecondDot1Q?: string; 
  public get l2TransportEncapsulationDot1QSecondDot1Q() {
    return this.getStringAttribute('l2transport_encapsulation_dot1q_second_dot1q');
  }
  public set l2TransportEncapsulationDot1QSecondDot1Q(value: string) {
    this._l2TransportEncapsulationDot1QSecondDot1Q = value;
  }
  public resetL2TransportEncapsulationDot1QSecondDot1Q() {
    this._l2TransportEncapsulationDot1QSecondDot1Q = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l2TransportEncapsulationDot1QSecondDot1QInput() {
    return this._l2TransportEncapsulationDot1QSecondDot1Q;
  }

  // l2transport_encapsulation_dot1q_vlan_id - computed: false, optional: true, required: false
  private _l2TransportEncapsulationDot1QVlanId?: string; 
  public get l2TransportEncapsulationDot1QVlanId() {
    return this.getStringAttribute('l2transport_encapsulation_dot1q_vlan_id');
  }
  public set l2TransportEncapsulationDot1QVlanId(value: string) {
    this._l2TransportEncapsulationDot1QVlanId = value;
  }
  public resetL2TransportEncapsulationDot1QVlanId() {
    this._l2TransportEncapsulationDot1QVlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l2TransportEncapsulationDot1QVlanIdInput() {
    return this._l2TransportEncapsulationDot1QVlanId;
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

  // multipoint - computed: false, optional: true, required: false
  private _multipoint?: boolean | cdktf.IResolvable; 
  public get multipoint() {
    return this.getBooleanAttribute('multipoint');
  }
  public set multipoint(value: boolean | cdktf.IResolvable) {
    this._multipoint = value;
  }
  public resetMultipoint() {
    this._multipoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multipointInput() {
    return this._multipoint;
  }

  // point_to_point - computed: false, optional: true, required: false
  private _pointToPoint?: boolean | cdktf.IResolvable; 
  public get pointToPoint() {
    return this.getBooleanAttribute('point_to_point');
  }
  public set pointToPoint(value: boolean | cdktf.IResolvable) {
    this._pointToPoint = value;
  }
  public resetPointToPoint() {
    this._pointToPoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pointToPointInput() {
    return this._pointToPoint;
  }

  // rewrite_ingress_tag_pop_one - computed: false, optional: true, required: false
  private _rewriteIngressTagPopOne?: boolean | cdktf.IResolvable; 
  public get rewriteIngressTagPopOne() {
    return this.getBooleanAttribute('rewrite_ingress_tag_pop_one');
  }
  public set rewriteIngressTagPopOne(value: boolean | cdktf.IResolvable) {
    this._rewriteIngressTagPopOne = value;
  }
  public resetRewriteIngressTagPopOne() {
    this._rewriteIngressTagPopOne = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rewriteIngressTagPopOneInput() {
    return this._rewriteIngressTagPopOne;
  }

  // rewrite_ingress_tag_pop_two - computed: false, optional: true, required: false
  private _rewriteIngressTagPopTwo?: boolean | cdktf.IResolvable; 
  public get rewriteIngressTagPopTwo() {
    return this.getBooleanAttribute('rewrite_ingress_tag_pop_two');
  }
  public set rewriteIngressTagPopTwo(value: boolean | cdktf.IResolvable) {
    this._rewriteIngressTagPopTwo = value;
  }
  public resetRewriteIngressTagPopTwo() {
    this._rewriteIngressTagPopTwo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rewriteIngressTagPopTwoInput() {
    return this._rewriteIngressTagPopTwo;
  }

  // service_policy_input - computed: false, optional: true, required: false
  private _servicePolicyInput = new InterfaceResourceServicePolicyInputList(this, "service_policy_input", false);
  public get servicePolicyInput() {
    return this._servicePolicyInput;
  }
  public putServicePolicyInput(value: InterfaceResourceServicePolicyInput[] | cdktf.IResolvable) {
    this._servicePolicyInput.internalValue = value;
  }
  public resetServicePolicyInput() {
    this._servicePolicyInput.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicePolicyInputInput() {
    return this._servicePolicyInput.internalValue;
  }

  // service_policy_output - computed: false, optional: true, required: false
  private _servicePolicyOutput = new InterfaceResourceServicePolicyOutputList(this, "service_policy_output", false);
  public get servicePolicyOutput() {
    return this._servicePolicyOutput;
  }
  public putServicePolicyOutput(value: InterfaceResourceServicePolicyOutput[] | cdktf.IResolvable) {
    this._servicePolicyOutput.internalValue = value;
  }
  public resetServicePolicyOutput() {
    this._servicePolicyOutput.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicePolicyOutputInput() {
    return this._servicePolicyOutput.internalValue;
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

  // unnumbered - computed: false, optional: true, required: false
  private _unnumbered?: string; 
  public get unnumbered() {
    return this.getStringAttribute('unnumbered');
  }
  public set unnumbered(value: string) {
    this._unnumbered = value;
  }
  public resetUnnumbered() {
    this._unnumbered = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unnumberedInput() {
    return this._unnumbered;
  }

  // vrf - computed: false, optional: true, required: false
  private _vrf?: string; 
  public get vrf() {
    return this.getStringAttribute('vrf');
  }
  public set vrf(value: string) {
    this._vrf = value;
  }
  public resetVrf() {
    this._vrf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfInput() {
    return this._vrf;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bandwidth: cdktf.numberToTerraform(this._bandwidth),
      bfd_mode_ietf: cdktf.booleanToTerraform(this._bfdModeIetf),
      bundle_id: cdktf.numberToTerraform(this._bundleId),
      bundle_id_mode: cdktf.stringToTerraform(this._bundleIdMode),
      bundle_load_balancing_hash_dst_ip: cdktf.booleanToTerraform(this._bundleLoadBalancingHashDstIp),
      bundle_load_balancing_hash_src_ip: cdktf.booleanToTerraform(this._bundleLoadBalancingHashSrcIp),
      bundle_maximum_active_links: cdktf.numberToTerraform(this._bundleMaximumActiveLinks),
      bundle_minimum_active_links: cdktf.numberToTerraform(this._bundleMinimumActiveLinks),
      bundle_port_priority: cdktf.numberToTerraform(this._bundlePortPriority),
      bundle_shutdown: cdktf.booleanToTerraform(this._bundleShutdown),
      cdp: cdktf.booleanToTerraform(this._cdp),
      dampening: cdktf.booleanToTerraform(this._dampening),
      dampening_decay_half_life_value: cdktf.numberToTerraform(this._dampeningDecayHalfLifeValue),
      delete_mode: cdktf.stringToTerraform(this._deleteMode),
      description: cdktf.stringToTerraform(this._description),
      device: cdktf.stringToTerraform(this._device),
      encapsulation_dot1q_vlan_id: cdktf.numberToTerraform(this._encapsulationDot1QVlanId),
      flow_ipv4_egress_monitor_samplers: cdktf.listMapper(interfaceResourceFlowIpv4EgressMonitorSamplersToTerraform, false)(this._flowIpv4EgressMonitorSamplers.internalValue),
      flow_ipv4_egress_monitors: cdktf.listMapper(interfaceResourceFlowIpv4EgressMonitorsToTerraform, false)(this._flowIpv4EgressMonitors.internalValue),
      flow_ipv4_ingress_monitor_samplers: cdktf.listMapper(interfaceResourceFlowIpv4IngressMonitorSamplersToTerraform, false)(this._flowIpv4IngressMonitorSamplers.internalValue),
      flow_ipv4_ingress_monitors: cdktf.listMapper(interfaceResourceFlowIpv4IngressMonitorsToTerraform, false)(this._flowIpv4IngressMonitors.internalValue),
      flow_ipv6_egress_monitor_samplers: cdktf.listMapper(interfaceResourceFlowIpv6EgressMonitorSamplersToTerraform, false)(this._flowIpv6EgressMonitorSamplers.internalValue),
      flow_ipv6_egress_monitors: cdktf.listMapper(interfaceResourceFlowIpv6EgressMonitorsToTerraform, false)(this._flowIpv6EgressMonitors.internalValue),
      flow_ipv6_ingress_monitor_samplers: cdktf.listMapper(interfaceResourceFlowIpv6IngressMonitorSamplersToTerraform, false)(this._flowIpv6IngressMonitorSamplers.internalValue),
      flow_ipv6_ingress_monitors: cdktf.listMapper(interfaceResourceFlowIpv6IngressMonitorsToTerraform, false)(this._flowIpv6IngressMonitors.internalValue),
      interface_name: cdktf.stringToTerraform(this._interfaceName),
      ipv4_access_group_egress_acl: cdktf.stringToTerraform(this._ipv4AccessGroupEgressAcl),
      ipv4_access_group_egress_compress: cdktf.numberToTerraform(this._ipv4AccessGroupEgressCompress),
      ipv4_access_group_egress_hardware_count: cdktf.booleanToTerraform(this._ipv4AccessGroupEgressHardwareCount),
      ipv4_access_group_egress_interface_statistics: cdktf.booleanToTerraform(this._ipv4AccessGroupEgressInterfaceStatistics),
      ipv4_access_group_ingress_acl1: cdktf.stringToTerraform(this._ipv4AccessGroupIngressAcl1),
      ipv4_access_group_ingress_compress: cdktf.numberToTerraform(this._ipv4AccessGroupIngressCompress),
      ipv4_access_group_ingress_hardware_count: cdktf.booleanToTerraform(this._ipv4AccessGroupIngressHardwareCount),
      ipv4_access_group_ingress_interface_statistics: cdktf.booleanToTerraform(this._ipv4AccessGroupIngressInterfaceStatistics),
      ipv4_address: cdktf.stringToTerraform(this._ipv4Address),
      ipv4_netmask: cdktf.stringToTerraform(this._ipv4Netmask),
      ipv4_point_to_point: cdktf.booleanToTerraform(this._ipv4PointToPoint),
      ipv4_verify_unicast_source_reachable_via_allow_default: cdktf.booleanToTerraform(this._ipv4VerifyUnicastSourceReachableViaAllowDefault),
      ipv4_verify_unicast_source_reachable_via_allow_self_ping: cdktf.booleanToTerraform(this._ipv4VerifyUnicastSourceReachableViaAllowSelfPing),
      ipv4_verify_unicast_source_reachable_via_type: cdktf.stringToTerraform(this._ipv4VerifyUnicastSourceReachableViaType),
      ipv6_access_group_egress_acl: cdktf.stringToTerraform(this._ipv6AccessGroupEgressAcl),
      ipv6_access_group_egress_compress: cdktf.numberToTerraform(this._ipv6AccessGroupEgressCompress),
      ipv6_access_group_egress_interface_statistics: cdktf.booleanToTerraform(this._ipv6AccessGroupEgressInterfaceStatistics),
      ipv6_access_group_ingress_acl1: cdktf.stringToTerraform(this._ipv6AccessGroupIngressAcl1),
      ipv6_access_group_ingress_compress: cdktf.numberToTerraform(this._ipv6AccessGroupIngressCompress),
      ipv6_access_group_ingress_interface_statistics: cdktf.booleanToTerraform(this._ipv6AccessGroupIngressInterfaceStatistics),
      ipv6_addresses: cdktf.listMapper(interfaceResourceIpv6AddressesToTerraform, false)(this._ipv6Addresses.internalValue),
      ipv6_autoconfig: cdktf.booleanToTerraform(this._ipv6Autoconfig),
      ipv6_enable: cdktf.booleanToTerraform(this._ipv6Enable),
      ipv6_link_local_address: cdktf.stringToTerraform(this._ipv6LinkLocalAddress),
      ipv6_link_local_zone: cdktf.stringToTerraform(this._ipv6LinkLocalZone),
      ipv6_verify_unicast_source_reachable_via_allow_default: cdktf.booleanToTerraform(this._ipv6VerifyUnicastSourceReachableViaAllowDefault),
      ipv6_verify_unicast_source_reachable_via_allow_self_ping: cdktf.booleanToTerraform(this._ipv6VerifyUnicastSourceReachableViaAllowSelfPing),
      ipv6_verify_unicast_source_reachable_via_type: cdktf.stringToTerraform(this._ipv6VerifyUnicastSourceReachableViaType),
      l2transport: cdktf.booleanToTerraform(this._l2Transport),
      l2transport_encapsulation_dot1q_second_dot1q: cdktf.stringToTerraform(this._l2TransportEncapsulationDot1QSecondDot1Q),
      l2transport_encapsulation_dot1q_vlan_id: cdktf.stringToTerraform(this._l2TransportEncapsulationDot1QVlanId),
      load_interval: cdktf.numberToTerraform(this._loadInterval),
      mtu: cdktf.numberToTerraform(this._mtu),
      multipoint: cdktf.booleanToTerraform(this._multipoint),
      point_to_point: cdktf.booleanToTerraform(this._pointToPoint),
      rewrite_ingress_tag_pop_one: cdktf.booleanToTerraform(this._rewriteIngressTagPopOne),
      rewrite_ingress_tag_pop_two: cdktf.booleanToTerraform(this._rewriteIngressTagPopTwo),
      service_policy_input: cdktf.listMapper(interfaceResourceServicePolicyInputToTerraform, false)(this._servicePolicyInput.internalValue),
      service_policy_output: cdktf.listMapper(interfaceResourceServicePolicyOutputToTerraform, false)(this._servicePolicyOutput.internalValue),
      shutdown: cdktf.booleanToTerraform(this._shutdown),
      unnumbered: cdktf.stringToTerraform(this._unnumbered),
      vrf: cdktf.stringToTerraform(this._vrf),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bandwidth: {
        value: cdktf.numberToHclTerraform(this._bandwidth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bfd_mode_ietf: {
        value: cdktf.booleanToHclTerraform(this._bfdModeIetf),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bundle_id: {
        value: cdktf.numberToHclTerraform(this._bundleId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bundle_id_mode: {
        value: cdktf.stringToHclTerraform(this._bundleIdMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bundle_load_balancing_hash_dst_ip: {
        value: cdktf.booleanToHclTerraform(this._bundleLoadBalancingHashDstIp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bundle_load_balancing_hash_src_ip: {
        value: cdktf.booleanToHclTerraform(this._bundleLoadBalancingHashSrcIp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bundle_maximum_active_links: {
        value: cdktf.numberToHclTerraform(this._bundleMaximumActiveLinks),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bundle_minimum_active_links: {
        value: cdktf.numberToHclTerraform(this._bundleMinimumActiveLinks),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bundle_port_priority: {
        value: cdktf.numberToHclTerraform(this._bundlePortPriority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bundle_shutdown: {
        value: cdktf.booleanToHclTerraform(this._bundleShutdown),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cdp: {
        value: cdktf.booleanToHclTerraform(this._cdp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dampening: {
        value: cdktf.booleanToHclTerraform(this._dampening),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dampening_decay_half_life_value: {
        value: cdktf.numberToHclTerraform(this._dampeningDecayHalfLifeValue),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      delete_mode: {
        value: cdktf.stringToHclTerraform(this._deleteMode),
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
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encapsulation_dot1q_vlan_id: {
        value: cdktf.numberToHclTerraform(this._encapsulationDot1QVlanId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      flow_ipv4_egress_monitor_samplers: {
        value: cdktf.listMapperHcl(interfaceResourceFlowIpv4EgressMonitorSamplersToHclTerraform, false)(this._flowIpv4EgressMonitorSamplers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfaceResourceFlowIpv4EgressMonitorSamplersList",
      },
      flow_ipv4_egress_monitors: {
        value: cdktf.listMapperHcl(interfaceResourceFlowIpv4EgressMonitorsToHclTerraform, false)(this._flowIpv4EgressMonitors.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfaceResourceFlowIpv4EgressMonitorsList",
      },
      flow_ipv4_ingress_monitor_samplers: {
        value: cdktf.listMapperHcl(interfaceResourceFlowIpv4IngressMonitorSamplersToHclTerraform, false)(this._flowIpv4IngressMonitorSamplers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfaceResourceFlowIpv4IngressMonitorSamplersList",
      },
      flow_ipv4_ingress_monitors: {
        value: cdktf.listMapperHcl(interfaceResourceFlowIpv4IngressMonitorsToHclTerraform, false)(this._flowIpv4IngressMonitors.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfaceResourceFlowIpv4IngressMonitorsList",
      },
      flow_ipv6_egress_monitor_samplers: {
        value: cdktf.listMapperHcl(interfaceResourceFlowIpv6EgressMonitorSamplersToHclTerraform, false)(this._flowIpv6EgressMonitorSamplers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfaceResourceFlowIpv6EgressMonitorSamplersList",
      },
      flow_ipv6_egress_monitors: {
        value: cdktf.listMapperHcl(interfaceResourceFlowIpv6EgressMonitorsToHclTerraform, false)(this._flowIpv6EgressMonitors.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfaceResourceFlowIpv6EgressMonitorsList",
      },
      flow_ipv6_ingress_monitor_samplers: {
        value: cdktf.listMapperHcl(interfaceResourceFlowIpv6IngressMonitorSamplersToHclTerraform, false)(this._flowIpv6IngressMonitorSamplers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfaceResourceFlowIpv6IngressMonitorSamplersList",
      },
      flow_ipv6_ingress_monitors: {
        value: cdktf.listMapperHcl(interfaceResourceFlowIpv6IngressMonitorsToHclTerraform, false)(this._flowIpv6IngressMonitors.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfaceResourceFlowIpv6IngressMonitorsList",
      },
      interface_name: {
        value: cdktf.stringToHclTerraform(this._interfaceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_access_group_egress_acl: {
        value: cdktf.stringToHclTerraform(this._ipv4AccessGroupEgressAcl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_access_group_egress_compress: {
        value: cdktf.numberToHclTerraform(this._ipv4AccessGroupEgressCompress),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ipv4_access_group_egress_hardware_count: {
        value: cdktf.booleanToHclTerraform(this._ipv4AccessGroupEgressHardwareCount),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ipv4_access_group_egress_interface_statistics: {
        value: cdktf.booleanToHclTerraform(this._ipv4AccessGroupEgressInterfaceStatistics),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ipv4_access_group_ingress_acl1: {
        value: cdktf.stringToHclTerraform(this._ipv4AccessGroupIngressAcl1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_access_group_ingress_compress: {
        value: cdktf.numberToHclTerraform(this._ipv4AccessGroupIngressCompress),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ipv4_access_group_ingress_hardware_count: {
        value: cdktf.booleanToHclTerraform(this._ipv4AccessGroupIngressHardwareCount),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ipv4_access_group_ingress_interface_statistics: {
        value: cdktf.booleanToHclTerraform(this._ipv4AccessGroupIngressInterfaceStatistics),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ipv4_address: {
        value: cdktf.stringToHclTerraform(this._ipv4Address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_netmask: {
        value: cdktf.stringToHclTerraform(this._ipv4Netmask),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_point_to_point: {
        value: cdktf.booleanToHclTerraform(this._ipv4PointToPoint),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ipv4_verify_unicast_source_reachable_via_allow_default: {
        value: cdktf.booleanToHclTerraform(this._ipv4VerifyUnicastSourceReachableViaAllowDefault),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ipv4_verify_unicast_source_reachable_via_allow_self_ping: {
        value: cdktf.booleanToHclTerraform(this._ipv4VerifyUnicastSourceReachableViaAllowSelfPing),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ipv4_verify_unicast_source_reachable_via_type: {
        value: cdktf.stringToHclTerraform(this._ipv4VerifyUnicastSourceReachableViaType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_access_group_egress_acl: {
        value: cdktf.stringToHclTerraform(this._ipv6AccessGroupEgressAcl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_access_group_egress_compress: {
        value: cdktf.numberToHclTerraform(this._ipv6AccessGroupEgressCompress),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ipv6_access_group_egress_interface_statistics: {
        value: cdktf.booleanToHclTerraform(this._ipv6AccessGroupEgressInterfaceStatistics),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ipv6_access_group_ingress_acl1: {
        value: cdktf.stringToHclTerraform(this._ipv6AccessGroupIngressAcl1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_access_group_ingress_compress: {
        value: cdktf.numberToHclTerraform(this._ipv6AccessGroupIngressCompress),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ipv6_access_group_ingress_interface_statistics: {
        value: cdktf.booleanToHclTerraform(this._ipv6AccessGroupIngressInterfaceStatistics),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ipv6_addresses: {
        value: cdktf.listMapperHcl(interfaceResourceIpv6AddressesToHclTerraform, false)(this._ipv6Addresses.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfaceResourceIpv6AddressesList",
      },
      ipv6_autoconfig: {
        value: cdktf.booleanToHclTerraform(this._ipv6Autoconfig),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ipv6_enable: {
        value: cdktf.booleanToHclTerraform(this._ipv6Enable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ipv6_link_local_address: {
        value: cdktf.stringToHclTerraform(this._ipv6LinkLocalAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_link_local_zone: {
        value: cdktf.stringToHclTerraform(this._ipv6LinkLocalZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_verify_unicast_source_reachable_via_allow_default: {
        value: cdktf.booleanToHclTerraform(this._ipv6VerifyUnicastSourceReachableViaAllowDefault),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ipv6_verify_unicast_source_reachable_via_allow_self_ping: {
        value: cdktf.booleanToHclTerraform(this._ipv6VerifyUnicastSourceReachableViaAllowSelfPing),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ipv6_verify_unicast_source_reachable_via_type: {
        value: cdktf.stringToHclTerraform(this._ipv6VerifyUnicastSourceReachableViaType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      l2transport: {
        value: cdktf.booleanToHclTerraform(this._l2Transport),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      l2transport_encapsulation_dot1q_second_dot1q: {
        value: cdktf.stringToHclTerraform(this._l2TransportEncapsulationDot1QSecondDot1Q),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      l2transport_encapsulation_dot1q_vlan_id: {
        value: cdktf.stringToHclTerraform(this._l2TransportEncapsulationDot1QVlanId),
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
      mtu: {
        value: cdktf.numberToHclTerraform(this._mtu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      multipoint: {
        value: cdktf.booleanToHclTerraform(this._multipoint),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      point_to_point: {
        value: cdktf.booleanToHclTerraform(this._pointToPoint),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      rewrite_ingress_tag_pop_one: {
        value: cdktf.booleanToHclTerraform(this._rewriteIngressTagPopOne),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      rewrite_ingress_tag_pop_two: {
        value: cdktf.booleanToHclTerraform(this._rewriteIngressTagPopTwo),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      service_policy_input: {
        value: cdktf.listMapperHcl(interfaceResourceServicePolicyInputToHclTerraform, false)(this._servicePolicyInput.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfaceResourceServicePolicyInputList",
      },
      service_policy_output: {
        value: cdktf.listMapperHcl(interfaceResourceServicePolicyOutputToHclTerraform, false)(this._servicePolicyOutput.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfaceResourceServicePolicyOutputList",
      },
      shutdown: {
        value: cdktf.booleanToHclTerraform(this._shutdown),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      unnumbered: {
        value: cdktf.stringToHclTerraform(this._unnumbered),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vrf: {
        value: cdktf.stringToHclTerraform(this._vrf),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
