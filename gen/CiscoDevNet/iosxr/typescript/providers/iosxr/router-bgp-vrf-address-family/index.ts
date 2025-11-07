// https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RouterBgpVrfAddressFamilyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Additional paths Receive capability
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#additional_paths_receive RouterBgpVrfAddressFamily#additional_paths_receive}
  */
  readonly additionalPathsReceive?: boolean | cdktf.IResolvable;
  /**
  * Do not advertise additional paths Receive capability
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#additional_paths_receive_disable RouterBgpVrfAddressFamily#additional_paths_receive_disable}
  */
  readonly additionalPathsReceiveDisable?: boolean | cdktf.IResolvable;
  /**
  * Disable additional paths selection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#additional_paths_selection_disable RouterBgpVrfAddressFamily#additional_paths_selection_disable}
  */
  readonly additionalPathsSelectionDisable?: boolean | cdktf.IResolvable;
  /**
  * Route-policy for additional paths selection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#additional_paths_selection_route_policy RouterBgpVrfAddressFamily#additional_paths_selection_route_policy}
  */
  readonly additionalPathsSelectionRoutePolicy?: string;
  /**
  * Additional paths Send capability
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#additional_paths_send RouterBgpVrfAddressFamily#additional_paths_send}
  */
  readonly additionalPathsSend?: boolean | cdktf.IResolvable;
  /**
  * Do not advertise additional paths Send capability
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#additional_paths_send_disable RouterBgpVrfAddressFamily#additional_paths_send_disable}
  */
  readonly additionalPathsSendDisable?: boolean | cdktf.IResolvable;
  /**
  * Advertise best-external path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#advertise_best_external RouterBgpVrfAddressFamily#advertise_best_external}
  */
  readonly advertiseBestExternal?: boolean | cdktf.IResolvable;
  /**
  * Enter Address Family command mode
  *   - Choices: `all-address-family`, `ipv4-flowspec`, `ipv4-labeled-unicast`, `ipv4-mdt`, `ipv4-multicast`, `ipv4-mvpn`, `ipv4-rt-filter`, `ipv4-sr-policy`, `ipv4-tunnel`, `ipv4-unicast`, `ipv6-flowspec`, `ipv6-labeled-unicast`, `ipv6-multicast`, `ipv6-mvpn`, `ipv6-sr-policy`, `ipv6-unicast`, `l2vpn-evpn`, `l2vpn-mspw`, `l2vpn-vpls-vpws`, `link-state-link-state`, `vpnv4-flowspec`, `vpnv4-multicast`, `vpnv4-unicast`, `vpnv6-flowspec`, `vpnv6-multicast`, `vpnv6-unicast`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#af_name RouterBgpVrfAddressFamily#af_name}
  */
  readonly afName: string;
  /**
  * Configure BGP aggregate entries
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#aggregate_addresses RouterBgpVrfAddressFamily#aggregate_addresses}
  */
  readonly aggregateAddresses?: RouterBgpVrfAddressFamilyAggregateAddresses[] | cdktf.IResolvable;
  /**
  * Allocate labels for all prefixes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#allocate_label_all RouterBgpVrfAddressFamily#allocate_label_all}
  */
  readonly allocateLabelAll?: boolean | cdktf.IResolvable;
  /**
  * Allocate label for unlabeled paths too
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#allocate_label_all_unlabeled_path RouterBgpVrfAddressFamily#allocate_label_all_unlabeled_path}
  */
  readonly allocateLabelAllUnlabeledPath?: boolean | cdktf.IResolvable;
  /**
  * Allocate label route policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#allocate_label_route_policy_name RouterBgpVrfAddressFamily#allocate_label_route_policy_name}
  */
  readonly allocateLabelRoutePolicyName?: string;
  /**
  * Allocate label for unlabeled paths too
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#allocate_label_route_policy_unlabeled_path RouterBgpVrfAddressFamily#allocate_label_route_policy_unlabeled_path}
  */
  readonly allocateLabelRoutePolicyUnlabeledPath?: boolean | cdktf.IResolvable;
  /**
  * bgp as-number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#as_number RouterBgpVrfAddressFamily#as_number}
  */
  readonly asNumber: string;
  /**
  * Configure behavior when deleting/destroying the resource. Either delete the entire object (YANG container) being managed, or only delete the individual resource attributes configured explicitly and leave everything else as-is. Default value is `all`.
  *   - Choices: `all`, `attributes`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#delete_mode RouterBgpVrfAddressFamily#delete_mode}
  */
  readonly deleteMode?: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#device RouterBgpVrfAddressFamily#device}
  */
  readonly device?: string;
  /**
  * Set per CE label mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#label_mode_per_ce RouterBgpVrfAddressFamily#label_mode_per_ce}
  */
  readonly labelModePerCe?: boolean | cdktf.IResolvable;
  /**
  * Set label mode per nexthop and received label
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#label_mode_per_nexthop_received_label RouterBgpVrfAddressFamily#label_mode_per_nexthop_received_label}
  */
  readonly labelModePerNexthopReceivedLabel?: boolean | cdktf.IResolvable;
  /**
  * Allocate secondary label to avoid label oscillation insymmetric PIC deployments
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#label_mode_per_nexthop_received_label_allocate_secondary_label RouterBgpVrfAddressFamily#label_mode_per_nexthop_received_label_allocate_secondary_label}
  */
  readonly labelModePerNexthopReceivedLabelAllocateSecondaryLabel?: boolean | cdktf.IResolvable;
  /**
  * Set per perfix label mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#label_mode_per_prefix RouterBgpVrfAddressFamily#label_mode_per_prefix}
  */
  readonly labelModePerPrefix?: boolean | cdktf.IResolvable;
  /**
  * Set per VRF label mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#label_mode_per_vrf RouterBgpVrfAddressFamily#label_mode_per_vrf}
  */
  readonly labelModePerVrf?: boolean | cdktf.IResolvable;
  /**
  * Set per VRF 46 label mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#label_mode_per_vrf_46 RouterBgpVrfAddressFamily#label_mode_per_vrf_46}
  */
  readonly labelModePerVrf46?: boolean | cdktf.IResolvable;
  /**
  * Use a route policy to select prefixes for label allocation mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#label_mode_route_policy RouterBgpVrfAddressFamily#label_mode_route_policy}
  */
  readonly labelModeRoutePolicy?: string;
  /**
  * Number of paths (limit includes backup path)
  *   - Range: `2`-`128`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#maximum_paths_ebgp_multipath RouterBgpVrfAddressFamily#maximum_paths_ebgp_multipath}
  */
  readonly maximumPathsEbgpMultipath?: number;
  /**
  * Route policy to specify ORF and inbound filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#maximum_paths_ebgp_route_policy RouterBgpVrfAddressFamily#maximum_paths_ebgp_route_policy}
  */
  readonly maximumPathsEbgpRoutePolicy?: string;
  /**
  * Allow multipaths only from marked neighbors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#maximum_paths_ebgp_selective RouterBgpVrfAddressFamily#maximum_paths_ebgp_selective}
  */
  readonly maximumPathsEbgpSelective?: boolean | cdktf.IResolvable;
  /**
  * Preserve equal nexthop IGP metric criteria for multipath eligiblity between same path-types (iBGP or eBGP)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#maximum_paths_eibgp_equal_cost RouterBgpVrfAddressFamily#maximum_paths_eibgp_equal_cost}
  */
  readonly maximumPathsEibgpEqualCost?: boolean | cdktf.IResolvable;
  /**
  * Number of paths (limit includes backup path)
  *   - Range: `2`-`128`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#maximum_paths_eibgp_multipath RouterBgpVrfAddressFamily#maximum_paths_eibgp_multipath}
  */
  readonly maximumPathsEibgpMultipath?: number;
  /**
  * Route policy to specify ORF and inbound filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#maximum_paths_eibgp_route_policy RouterBgpVrfAddressFamily#maximum_paths_eibgp_route_policy}
  */
  readonly maximumPathsEibgpRoutePolicy?: string;
  /**
  * Allow multipaths only from marked neighbors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#maximum_paths_eibgp_selective RouterBgpVrfAddressFamily#maximum_paths_eibgp_selective}
  */
  readonly maximumPathsEibgpSelective?: boolean | cdktf.IResolvable;
  /**
  * Number of paths (limit includes backup path)
  *   - Range: `2`-`128`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#maximum_paths_ibgp_multipath RouterBgpVrfAddressFamily#maximum_paths_ibgp_multipath}
  */
  readonly maximumPathsIbgpMultipath?: number;
  /**
  * Route policy to specify ORF and inbound filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#maximum_paths_ibgp_route_policy RouterBgpVrfAddressFamily#maximum_paths_ibgp_route_policy}
  */
  readonly maximumPathsIbgpRoutePolicy?: string;
  /**
  * Allow multipaths only from marked neighbors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#maximum_paths_ibgp_selective RouterBgpVrfAddressFamily#maximum_paths_ibgp_selective}
  */
  readonly maximumPathsIbgpSelective?: boolean | cdktf.IResolvable;
  /**
  * Allow multipaths to have different BGP nexthop IGP metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#maximum_paths_ibgp_unequal_cost RouterBgpVrfAddressFamily#maximum_paths_ibgp_unequal_cost}
  */
  readonly maximumPathsIbgpUnequalCost?: boolean | cdktf.IResolvable;
  /**
  * Deterministic Multipath selection primarily on IGP metric order
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#maximum_paths_ibgp_unequal_cost_deterministic RouterBgpVrfAddressFamily#maximum_paths_ibgp_unequal_cost_deterministic}
  */
  readonly maximumPathsIbgpUnequalCostDeterministic?: boolean | cdktf.IResolvable;
  /**
  * Disable multipath unique nexthop check
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#maximum_paths_unique_nexthop_check_disable RouterBgpVrfAddressFamily#maximum_paths_unique_nexthop_check_disable}
  */
  readonly maximumPathsUniqueNexthopCheckDisable?: boolean | cdktf.IResolvable;
  /**
  * Specify a network to announce via BGP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#networks RouterBgpVrfAddressFamily#networks}
  */
  readonly networks?: RouterBgpVrfAddressFamilyNetworks[] | cdktf.IResolvable;
  /**
  * Redistribute connected routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#redistribute_connected RouterBgpVrfAddressFamily#redistribute_connected}
  */
  readonly redistributeConnected?: boolean | cdktf.IResolvable;
  /**
  * Metric for redistributed routes
  *   - Range: `0`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#redistribute_connected_metric RouterBgpVrfAddressFamily#redistribute_connected_metric}
  */
  readonly redistributeConnectedMetric?: number;
  /**
  * Enable installation of multiple paths from RIB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#redistribute_connected_multipath RouterBgpVrfAddressFamily#redistribute_connected_multipath}
  */
  readonly redistributeConnectedMultipath?: boolean | cdktf.IResolvable;
  /**
  * Route policy reference
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#redistribute_connected_route_policy RouterBgpVrfAddressFamily#redistribute_connected_route_policy}
  */
  readonly redistributeConnectedRoutePolicy?: string;
  /**
  * Redistribute EIGRP routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#redistribute_eigrp RouterBgpVrfAddressFamily#redistribute_eigrp}
  */
  readonly redistributeEigrp?: RouterBgpVrfAddressFamilyRedistributeEigrp[] | cdktf.IResolvable;
  /**
  * Redistribute ISIS routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#redistribute_isis RouterBgpVrfAddressFamily#redistribute_isis}
  */
  readonly redistributeIsis?: RouterBgpVrfAddressFamilyRedistributeIsis[] | cdktf.IResolvable;
  /**
  * Redistribute OSPF routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#redistribute_ospf RouterBgpVrfAddressFamily#redistribute_ospf}
  */
  readonly redistributeOspf?: RouterBgpVrfAddressFamilyRedistributeOspf[] | cdktf.IResolvable;
  /**
  * Redistribute OSPFv3 routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#redistribute_ospfv3 RouterBgpVrfAddressFamily#redistribute_ospfv3}
  */
  readonly redistributeOspfv3?: RouterBgpVrfAddressFamilyRedistributeOspfv3[] | cdktf.IResolvable;
  /**
  * Redistribute RIP routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#redistribute_rip RouterBgpVrfAddressFamily#redistribute_rip}
  */
  readonly redistributeRip?: boolean | cdktf.IResolvable;
  /**
  * Metric for redistributed routes
  *   - Range: `0`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#redistribute_rip_metric RouterBgpVrfAddressFamily#redistribute_rip_metric}
  */
  readonly redistributeRipMetric?: number;
  /**
  * Enable installation of multiple paths from RIB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#redistribute_rip_multipath RouterBgpVrfAddressFamily#redistribute_rip_multipath}
  */
  readonly redistributeRipMultipath?: boolean | cdktf.IResolvable;
  /**
  * Route policy reference
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#redistribute_rip_route_policy RouterBgpVrfAddressFamily#redistribute_rip_route_policy}
  */
  readonly redistributeRipRoutePolicy?: string;
  /**
  * Redistribute static routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#redistribute_static RouterBgpVrfAddressFamily#redistribute_static}
  */
  readonly redistributeStatic?: boolean | cdktf.IResolvable;
  /**
  * Metric for redistributed routes
  *   - Range: `0`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#redistribute_static_metric RouterBgpVrfAddressFamily#redistribute_static_metric}
  */
  readonly redistributeStaticMetric?: number;
  /**
  * Enable installation of multiple paths from RIB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#redistribute_static_multipath RouterBgpVrfAddressFamily#redistribute_static_multipath}
  */
  readonly redistributeStaticMultipath?: boolean | cdktf.IResolvable;
  /**
  * Route policy reference
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#redistribute_static_route_policy RouterBgpVrfAddressFamily#redistribute_static_route_policy}
  */
  readonly redistributeStaticRoutePolicy?: string;
  /**
  * Set SRv6 per CE SID mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#segment_routing_srv6_alloc_mode_per_ce RouterBgpVrfAddressFamily#segment_routing_srv6_alloc_mode_per_ce}
  */
  readonly segmentRoutingSrv6AllocModePerCe?: boolean | cdktf.IResolvable;
  /**
  * Set SRv6 per VRF SID mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#segment_routing_srv6_alloc_mode_per_vrf RouterBgpVrfAddressFamily#segment_routing_srv6_alloc_mode_per_vrf}
  */
  readonly segmentRoutingSrv6AllocModePerVrf?: boolean | cdktf.IResolvable;
  /**
  * Set SRv6 per VRF 46 SID mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#segment_routing_srv6_alloc_mode_per_vrf_46 RouterBgpVrfAddressFamily#segment_routing_srv6_alloc_mode_per_vrf_46}
  */
  readonly segmentRoutingSrv6AllocModePerVrf46?: boolean | cdktf.IResolvable;
  /**
  * Use a route policy to determine the SID allocation mode and locator (if provided) for given prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#segment_routing_srv6_alloc_mode_route_policy RouterBgpVrfAddressFamily#segment_routing_srv6_alloc_mode_route_policy}
  */
  readonly segmentRoutingSrv6AllocModeRoutePolicy?: string;
  /**
  * Specify locator
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#segment_routing_srv6_locator RouterBgpVrfAddressFamily#segment_routing_srv6_locator}
  */
  readonly segmentRoutingSrv6Locator?: string;
  /**
  * VRF name - maximum length 32 characters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#vrf_name RouterBgpVrfAddressFamily#vrf_name}
  */
  readonly vrfName: string;
}
export interface RouterBgpVrfAddressFamilyAggregateAddresses {
  /**
  * IPaddress
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#address RouterBgpVrfAddressFamily#address}
  */
  readonly address: string;
  /**
  * Generate AS confed set path information
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#as_confed_set RouterBgpVrfAddressFamily#as_confed_set}
  */
  readonly asConfedSet?: boolean | cdktf.IResolvable;
  /**
  * Generate AS set path information
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#as_set RouterBgpVrfAddressFamily#as_set}
  */
  readonly asSet?: boolean | cdktf.IResolvable;
  /**
  * Aggreate address specific description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#description RouterBgpVrfAddressFamily#description}
  */
  readonly description?: string;
  /**
  * IP address prefix
  *   - Range: `0`-`128`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#prefix RouterBgpVrfAddressFamily#prefix}
  */
  readonly prefix: number;
  /**
  * Route-policy to modify the attributes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#route_policy RouterBgpVrfAddressFamily#route_policy}
  */
  readonly routePolicy?: string;
  /**
  * Set a IGP tag value on the route
  *   - Range: `0`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#set_tag RouterBgpVrfAddressFamily#set_tag}
  */
  readonly setTag?: number;
  /**
  * Filter more specific routes from updates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#summary_only RouterBgpVrfAddressFamily#summary_only}
  */
  readonly summaryOnly?: boolean | cdktf.IResolvable;
}

export function routerBgpVrfAddressFamilyAggregateAddressesToTerraform(struct?: RouterBgpVrfAddressFamilyAggregateAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    as_confed_set: cdktf.booleanToTerraform(struct!.asConfedSet),
    as_set: cdktf.booleanToTerraform(struct!.asSet),
    description: cdktf.stringToTerraform(struct!.description),
    prefix: cdktf.numberToTerraform(struct!.prefix),
    route_policy: cdktf.stringToTerraform(struct!.routePolicy),
    set_tag: cdktf.numberToTerraform(struct!.setTag),
    summary_only: cdktf.booleanToTerraform(struct!.summaryOnly),
  }
}


export function routerBgpVrfAddressFamilyAggregateAddressesToHclTerraform(struct?: RouterBgpVrfAddressFamilyAggregateAddresses | cdktf.IResolvable): any {
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
    as_confed_set: {
      value: cdktf.booleanToHclTerraform(struct!.asConfedSet),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    as_set: {
      value: cdktf.booleanToHclTerraform(struct!.asSet),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktf.numberToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    route_policy: {
      value: cdktf.stringToHclTerraform(struct!.routePolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    set_tag: {
      value: cdktf.numberToHclTerraform(struct!.setTag),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    summary_only: {
      value: cdktf.booleanToHclTerraform(struct!.summaryOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterBgpVrfAddressFamilyAggregateAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterBgpVrfAddressFamilyAggregateAddresses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._asConfedSet !== undefined) {
      hasAnyValues = true;
      internalValueResult.asConfedSet = this._asConfedSet;
    }
    if (this._asSet !== undefined) {
      hasAnyValues = true;
      internalValueResult.asSet = this._asSet;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._routePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.routePolicy = this._routePolicy;
    }
    if (this._setTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.setTag = this._setTag;
    }
    if (this._summaryOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.summaryOnly = this._summaryOnly;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterBgpVrfAddressFamilyAggregateAddresses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._asConfedSet = undefined;
      this._asSet = undefined;
      this._description = undefined;
      this._prefix = undefined;
      this._routePolicy = undefined;
      this._setTag = undefined;
      this._summaryOnly = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._asConfedSet = value.asConfedSet;
      this._asSet = value.asSet;
      this._description = value.description;
      this._prefix = value.prefix;
      this._routePolicy = value.routePolicy;
      this._setTag = value.setTag;
      this._summaryOnly = value.summaryOnly;
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

  // as_confed_set - computed: false, optional: true, required: false
  private _asConfedSet?: boolean | cdktf.IResolvable; 
  public get asConfedSet() {
    return this.getBooleanAttribute('as_confed_set');
  }
  public set asConfedSet(value: boolean | cdktf.IResolvable) {
    this._asConfedSet = value;
  }
  public resetAsConfedSet() {
    this._asConfedSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asConfedSetInput() {
    return this._asConfedSet;
  }

  // as_set - computed: false, optional: true, required: false
  private _asSet?: boolean | cdktf.IResolvable; 
  public get asSet() {
    return this.getBooleanAttribute('as_set');
  }
  public set asSet(value: boolean | cdktf.IResolvable) {
    this._asSet = value;
  }
  public resetAsSet() {
    this._asSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asSetInput() {
    return this._asSet;
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

  // prefix - computed: false, optional: false, required: true
  private _prefix?: number; 
  public get prefix() {
    return this.getNumberAttribute('prefix');
  }
  public set prefix(value: number) {
    this._prefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // route_policy - computed: false, optional: true, required: false
  private _routePolicy?: string; 
  public get routePolicy() {
    return this.getStringAttribute('route_policy');
  }
  public set routePolicy(value: string) {
    this._routePolicy = value;
  }
  public resetRoutePolicy() {
    this._routePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routePolicyInput() {
    return this._routePolicy;
  }

  // set_tag - computed: false, optional: true, required: false
  private _setTag?: number; 
  public get setTag() {
    return this.getNumberAttribute('set_tag');
  }
  public set setTag(value: number) {
    this._setTag = value;
  }
  public resetSetTag() {
    this._setTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setTagInput() {
    return this._setTag;
  }

  // summary_only - computed: false, optional: true, required: false
  private _summaryOnly?: boolean | cdktf.IResolvable; 
  public get summaryOnly() {
    return this.getBooleanAttribute('summary_only');
  }
  public set summaryOnly(value: boolean | cdktf.IResolvable) {
    this._summaryOnly = value;
  }
  public resetSummaryOnly() {
    this._summaryOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get summaryOnlyInput() {
    return this._summaryOnly;
  }
}

export class RouterBgpVrfAddressFamilyAggregateAddressesList extends cdktf.ComplexList {
  public internalValue? : RouterBgpVrfAddressFamilyAggregateAddresses[] | cdktf.IResolvable

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
  public get(index: number): RouterBgpVrfAddressFamilyAggregateAddressesOutputReference {
    return new RouterBgpVrfAddressFamilyAggregateAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterBgpVrfAddressFamilyNetworks {
  /**
  * IPaddress
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#address RouterBgpVrfAddressFamily#address}
  */
  readonly address: string;
  /**
  * Specify a BGP backdoor route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#backdoor RouterBgpVrfAddressFamily#backdoor}
  */
  readonly backdoor?: boolean | cdktf.IResolvable;
  /**
  * Enable installation of multiple paths from RIB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#multipath RouterBgpVrfAddressFamily#multipath}
  */
  readonly multipath?: boolean | cdktf.IResolvable;
  /**
  * IP address prefix
  *   - Range: `0`-`128`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#prefix RouterBgpVrfAddressFamily#prefix}
  */
  readonly prefix: number;
  /**
  * Route-policy to modify the attributes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#route_policy RouterBgpVrfAddressFamily#route_policy}
  */
  readonly routePolicy?: string;
}

export function routerBgpVrfAddressFamilyNetworksToTerraform(struct?: RouterBgpVrfAddressFamilyNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    backdoor: cdktf.booleanToTerraform(struct!.backdoor),
    multipath: cdktf.booleanToTerraform(struct!.multipath),
    prefix: cdktf.numberToTerraform(struct!.prefix),
    route_policy: cdktf.stringToTerraform(struct!.routePolicy),
  }
}


export function routerBgpVrfAddressFamilyNetworksToHclTerraform(struct?: RouterBgpVrfAddressFamilyNetworks | cdktf.IResolvable): any {
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
    backdoor: {
      value: cdktf.booleanToHclTerraform(struct!.backdoor),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    multipath: {
      value: cdktf.booleanToHclTerraform(struct!.multipath),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prefix: {
      value: cdktf.numberToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    route_policy: {
      value: cdktf.stringToHclTerraform(struct!.routePolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterBgpVrfAddressFamilyNetworksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterBgpVrfAddressFamilyNetworks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._backdoor !== undefined) {
      hasAnyValues = true;
      internalValueResult.backdoor = this._backdoor;
    }
    if (this._multipath !== undefined) {
      hasAnyValues = true;
      internalValueResult.multipath = this._multipath;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._routePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.routePolicy = this._routePolicy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterBgpVrfAddressFamilyNetworks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._backdoor = undefined;
      this._multipath = undefined;
      this._prefix = undefined;
      this._routePolicy = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._backdoor = value.backdoor;
      this._multipath = value.multipath;
      this._prefix = value.prefix;
      this._routePolicy = value.routePolicy;
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

  // backdoor - computed: false, optional: true, required: false
  private _backdoor?: boolean | cdktf.IResolvable; 
  public get backdoor() {
    return this.getBooleanAttribute('backdoor');
  }
  public set backdoor(value: boolean | cdktf.IResolvable) {
    this._backdoor = value;
  }
  public resetBackdoor() {
    this._backdoor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backdoorInput() {
    return this._backdoor;
  }

  // multipath - computed: false, optional: true, required: false
  private _multipath?: boolean | cdktf.IResolvable; 
  public get multipath() {
    return this.getBooleanAttribute('multipath');
  }
  public set multipath(value: boolean | cdktf.IResolvable) {
    this._multipath = value;
  }
  public resetMultipath() {
    this._multipath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multipathInput() {
    return this._multipath;
  }

  // prefix - computed: false, optional: false, required: true
  private _prefix?: number; 
  public get prefix() {
    return this.getNumberAttribute('prefix');
  }
  public set prefix(value: number) {
    this._prefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // route_policy - computed: false, optional: true, required: false
  private _routePolicy?: string; 
  public get routePolicy() {
    return this.getStringAttribute('route_policy');
  }
  public set routePolicy(value: string) {
    this._routePolicy = value;
  }
  public resetRoutePolicy() {
    this._routePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routePolicyInput() {
    return this._routePolicy;
  }
}

export class RouterBgpVrfAddressFamilyNetworksList extends cdktf.ComplexList {
  public internalValue? : RouterBgpVrfAddressFamilyNetworks[] | cdktf.IResolvable

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
  public get(index: number): RouterBgpVrfAddressFamilyNetworksOutputReference {
    return new RouterBgpVrfAddressFamilyNetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterBgpVrfAddressFamilyRedistributeEigrp {
  /**
  * EIGRP instance name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#instance_name RouterBgpVrfAddressFamily#instance_name}
  */
  readonly instanceName: string;
  /**
  * Redistribute EIGRP external routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#match_external RouterBgpVrfAddressFamily#match_external}
  */
  readonly matchExternal?: boolean | cdktf.IResolvable;
  /**
  * Redistribute EIGRP internal routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#match_internal RouterBgpVrfAddressFamily#match_internal}
  */
  readonly matchInternal?: boolean | cdktf.IResolvable;
  /**
  * Redistribute EIGRP internal and external routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#match_internal_external RouterBgpVrfAddressFamily#match_internal_external}
  */
  readonly matchInternalExternal?: boolean | cdktf.IResolvable;
  /**
  * Metric for redistributed routes
  *   - Range: `0`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#metric RouterBgpVrfAddressFamily#metric}
  */
  readonly metric?: number;
  /**
  * Enable installation of multiple paths from RIB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#multipath RouterBgpVrfAddressFamily#multipath}
  */
  readonly multipath?: boolean | cdktf.IResolvable;
  /**
  * Route policy reference
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#route_policy RouterBgpVrfAddressFamily#route_policy}
  */
  readonly routePolicy?: string;
}

export function routerBgpVrfAddressFamilyRedistributeEigrpToTerraform(struct?: RouterBgpVrfAddressFamilyRedistributeEigrp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_name: cdktf.stringToTerraform(struct!.instanceName),
    match_external: cdktf.booleanToTerraform(struct!.matchExternal),
    match_internal: cdktf.booleanToTerraform(struct!.matchInternal),
    match_internal_external: cdktf.booleanToTerraform(struct!.matchInternalExternal),
    metric: cdktf.numberToTerraform(struct!.metric),
    multipath: cdktf.booleanToTerraform(struct!.multipath),
    route_policy: cdktf.stringToTerraform(struct!.routePolicy),
  }
}


export function routerBgpVrfAddressFamilyRedistributeEigrpToHclTerraform(struct?: RouterBgpVrfAddressFamilyRedistributeEigrp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instance_name: {
      value: cdktf.stringToHclTerraform(struct!.instanceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_external: {
      value: cdktf.booleanToHclTerraform(struct!.matchExternal),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match_internal: {
      value: cdktf.booleanToHclTerraform(struct!.matchInternal),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match_internal_external: {
      value: cdktf.booleanToHclTerraform(struct!.matchInternalExternal),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    metric: {
      value: cdktf.numberToHclTerraform(struct!.metric),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    multipath: {
      value: cdktf.booleanToHclTerraform(struct!.multipath),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    route_policy: {
      value: cdktf.stringToHclTerraform(struct!.routePolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterBgpVrfAddressFamilyRedistributeEigrpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterBgpVrfAddressFamilyRedistributeEigrp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceName = this._instanceName;
    }
    if (this._matchExternal !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExternal = this._matchExternal;
    }
    if (this._matchInternal !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchInternal = this._matchInternal;
    }
    if (this._matchInternalExternal !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchInternalExternal = this._matchInternalExternal;
    }
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    if (this._multipath !== undefined) {
      hasAnyValues = true;
      internalValueResult.multipath = this._multipath;
    }
    if (this._routePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.routePolicy = this._routePolicy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterBgpVrfAddressFamilyRedistributeEigrp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceName = undefined;
      this._matchExternal = undefined;
      this._matchInternal = undefined;
      this._matchInternalExternal = undefined;
      this._metric = undefined;
      this._multipath = undefined;
      this._routePolicy = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instanceName = value.instanceName;
      this._matchExternal = value.matchExternal;
      this._matchInternal = value.matchInternal;
      this._matchInternalExternal = value.matchInternalExternal;
      this._metric = value.metric;
      this._multipath = value.multipath;
      this._routePolicy = value.routePolicy;
    }
  }

  // instance_name - computed: false, optional: false, required: true
  private _instanceName?: string; 
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }
  public set instanceName(value: string) {
    this._instanceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceNameInput() {
    return this._instanceName;
  }

  // match_external - computed: false, optional: true, required: false
  private _matchExternal?: boolean | cdktf.IResolvable; 
  public get matchExternal() {
    return this.getBooleanAttribute('match_external');
  }
  public set matchExternal(value: boolean | cdktf.IResolvable) {
    this._matchExternal = value;
  }
  public resetMatchExternal() {
    this._matchExternal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExternalInput() {
    return this._matchExternal;
  }

  // match_internal - computed: false, optional: true, required: false
  private _matchInternal?: boolean | cdktf.IResolvable; 
  public get matchInternal() {
    return this.getBooleanAttribute('match_internal');
  }
  public set matchInternal(value: boolean | cdktf.IResolvable) {
    this._matchInternal = value;
  }
  public resetMatchInternal() {
    this._matchInternal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInternalInput() {
    return this._matchInternal;
  }

  // match_internal_external - computed: false, optional: true, required: false
  private _matchInternalExternal?: boolean | cdktf.IResolvable; 
  public get matchInternalExternal() {
    return this.getBooleanAttribute('match_internal_external');
  }
  public set matchInternalExternal(value: boolean | cdktf.IResolvable) {
    this._matchInternalExternal = value;
  }
  public resetMatchInternalExternal() {
    this._matchInternalExternal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInternalExternalInput() {
    return this._matchInternalExternal;
  }

  // metric - computed: false, optional: true, required: false
  private _metric?: number; 
  public get metric() {
    return this.getNumberAttribute('metric');
  }
  public set metric(value: number) {
    this._metric = value;
  }
  public resetMetric() {
    this._metric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric;
  }

  // multipath - computed: false, optional: true, required: false
  private _multipath?: boolean | cdktf.IResolvable; 
  public get multipath() {
    return this.getBooleanAttribute('multipath');
  }
  public set multipath(value: boolean | cdktf.IResolvable) {
    this._multipath = value;
  }
  public resetMultipath() {
    this._multipath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multipathInput() {
    return this._multipath;
  }

  // route_policy - computed: false, optional: true, required: false
  private _routePolicy?: string; 
  public get routePolicy() {
    return this.getStringAttribute('route_policy');
  }
  public set routePolicy(value: string) {
    this._routePolicy = value;
  }
  public resetRoutePolicy() {
    this._routePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routePolicyInput() {
    return this._routePolicy;
  }
}

export class RouterBgpVrfAddressFamilyRedistributeEigrpList extends cdktf.ComplexList {
  public internalValue? : RouterBgpVrfAddressFamilyRedistributeEigrp[] | cdktf.IResolvable

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
  public get(index: number): RouterBgpVrfAddressFamilyRedistributeEigrpOutputReference {
    return new RouterBgpVrfAddressFamilyRedistributeEigrpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterBgpVrfAddressFamilyRedistributeIsis {
  /**
  * ISIS instance name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#instance_name RouterBgpVrfAddressFamily#instance_name}
  */
  readonly instanceName: string;
  /**
  * Redistribute ISIS level 1 routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#level_1 RouterBgpVrfAddressFamily#level_1}
  */
  readonly level1?: boolean | cdktf.IResolvable;
  /**
  * Redistribute ISIS level 1 inter-area routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#level_1_inter_area RouterBgpVrfAddressFamily#level_1_inter_area}
  */
  readonly level1InterArea?: boolean | cdktf.IResolvable;
  /**
  * Redistribute ISIS level 1 and level 1 inter-area routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#level_1_level_1_inter_area RouterBgpVrfAddressFamily#level_1_level_1_inter_area}
  */
  readonly level1Level1InterArea?: boolean | cdktf.IResolvable;
  /**
  * Redistribute ISIS level 1 and level 2 routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#level_1_level_2 RouterBgpVrfAddressFamily#level_1_level_2}
  */
  readonly level1Level2?: boolean | cdktf.IResolvable;
  /**
  * Redistribute ISIS level 1, level 2 and level 1 inter-area routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#level_1_level_2_level_1_inter_area RouterBgpVrfAddressFamily#level_1_level_2_level_1_inter_area}
  */
  readonly level1Level2Level1InterArea?: boolean | cdktf.IResolvable;
  /**
  * Redistribute ISIS level 2 routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#level_2 RouterBgpVrfAddressFamily#level_2}
  */
  readonly level2?: boolean | cdktf.IResolvable;
  /**
  * Redistribute ISIS level 2 and level 1 inter-area routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#level_2_level_1_inter_area RouterBgpVrfAddressFamily#level_2_level_1_inter_area}
  */
  readonly level2Level1InterArea?: boolean | cdktf.IResolvable;
  /**
  * Metric for redistributed routes
  *   - Range: `0`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#metric RouterBgpVrfAddressFamily#metric}
  */
  readonly metric?: number;
  /**
  * Enable installation of multiple paths from RIB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#multipath RouterBgpVrfAddressFamily#multipath}
  */
  readonly multipath?: boolean | cdktf.IResolvable;
  /**
  * Route policy reference
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#route_policy RouterBgpVrfAddressFamily#route_policy}
  */
  readonly routePolicy?: string;
}

export function routerBgpVrfAddressFamilyRedistributeIsisToTerraform(struct?: RouterBgpVrfAddressFamilyRedistributeIsis | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_name: cdktf.stringToTerraform(struct!.instanceName),
    level_1: cdktf.booleanToTerraform(struct!.level1),
    level_1_inter_area: cdktf.booleanToTerraform(struct!.level1InterArea),
    level_1_level_1_inter_area: cdktf.booleanToTerraform(struct!.level1Level1InterArea),
    level_1_level_2: cdktf.booleanToTerraform(struct!.level1Level2),
    level_1_level_2_level_1_inter_area: cdktf.booleanToTerraform(struct!.level1Level2Level1InterArea),
    level_2: cdktf.booleanToTerraform(struct!.level2),
    level_2_level_1_inter_area: cdktf.booleanToTerraform(struct!.level2Level1InterArea),
    metric: cdktf.numberToTerraform(struct!.metric),
    multipath: cdktf.booleanToTerraform(struct!.multipath),
    route_policy: cdktf.stringToTerraform(struct!.routePolicy),
  }
}


export function routerBgpVrfAddressFamilyRedistributeIsisToHclTerraform(struct?: RouterBgpVrfAddressFamilyRedistributeIsis | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instance_name: {
      value: cdktf.stringToHclTerraform(struct!.instanceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    level_1: {
      value: cdktf.booleanToHclTerraform(struct!.level1),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    level_1_inter_area: {
      value: cdktf.booleanToHclTerraform(struct!.level1InterArea),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    level_1_level_1_inter_area: {
      value: cdktf.booleanToHclTerraform(struct!.level1Level1InterArea),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    level_1_level_2: {
      value: cdktf.booleanToHclTerraform(struct!.level1Level2),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    level_1_level_2_level_1_inter_area: {
      value: cdktf.booleanToHclTerraform(struct!.level1Level2Level1InterArea),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    level_2: {
      value: cdktf.booleanToHclTerraform(struct!.level2),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    level_2_level_1_inter_area: {
      value: cdktf.booleanToHclTerraform(struct!.level2Level1InterArea),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    metric: {
      value: cdktf.numberToHclTerraform(struct!.metric),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    multipath: {
      value: cdktf.booleanToHclTerraform(struct!.multipath),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    route_policy: {
      value: cdktf.stringToHclTerraform(struct!.routePolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterBgpVrfAddressFamilyRedistributeIsisOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterBgpVrfAddressFamilyRedistributeIsis | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceName = this._instanceName;
    }
    if (this._level1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.level1 = this._level1;
    }
    if (this._level1InterArea !== undefined) {
      hasAnyValues = true;
      internalValueResult.level1InterArea = this._level1InterArea;
    }
    if (this._level1Level1InterArea !== undefined) {
      hasAnyValues = true;
      internalValueResult.level1Level1InterArea = this._level1Level1InterArea;
    }
    if (this._level1Level2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.level1Level2 = this._level1Level2;
    }
    if (this._level1Level2Level1InterArea !== undefined) {
      hasAnyValues = true;
      internalValueResult.level1Level2Level1InterArea = this._level1Level2Level1InterArea;
    }
    if (this._level2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.level2 = this._level2;
    }
    if (this._level2Level1InterArea !== undefined) {
      hasAnyValues = true;
      internalValueResult.level2Level1InterArea = this._level2Level1InterArea;
    }
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    if (this._multipath !== undefined) {
      hasAnyValues = true;
      internalValueResult.multipath = this._multipath;
    }
    if (this._routePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.routePolicy = this._routePolicy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterBgpVrfAddressFamilyRedistributeIsis | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceName = undefined;
      this._level1 = undefined;
      this._level1InterArea = undefined;
      this._level1Level1InterArea = undefined;
      this._level1Level2 = undefined;
      this._level1Level2Level1InterArea = undefined;
      this._level2 = undefined;
      this._level2Level1InterArea = undefined;
      this._metric = undefined;
      this._multipath = undefined;
      this._routePolicy = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instanceName = value.instanceName;
      this._level1 = value.level1;
      this._level1InterArea = value.level1InterArea;
      this._level1Level1InterArea = value.level1Level1InterArea;
      this._level1Level2 = value.level1Level2;
      this._level1Level2Level1InterArea = value.level1Level2Level1InterArea;
      this._level2 = value.level2;
      this._level2Level1InterArea = value.level2Level1InterArea;
      this._metric = value.metric;
      this._multipath = value.multipath;
      this._routePolicy = value.routePolicy;
    }
  }

  // instance_name - computed: false, optional: false, required: true
  private _instanceName?: string; 
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }
  public set instanceName(value: string) {
    this._instanceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceNameInput() {
    return this._instanceName;
  }

  // level_1 - computed: false, optional: true, required: false
  private _level1?: boolean | cdktf.IResolvable; 
  public get level1() {
    return this.getBooleanAttribute('level_1');
  }
  public set level1(value: boolean | cdktf.IResolvable) {
    this._level1 = value;
  }
  public resetLevel1() {
    this._level1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get level1Input() {
    return this._level1;
  }

  // level_1_inter_area - computed: false, optional: true, required: false
  private _level1InterArea?: boolean | cdktf.IResolvable; 
  public get level1InterArea() {
    return this.getBooleanAttribute('level_1_inter_area');
  }
  public set level1InterArea(value: boolean | cdktf.IResolvable) {
    this._level1InterArea = value;
  }
  public resetLevel1InterArea() {
    this._level1InterArea = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get level1InterAreaInput() {
    return this._level1InterArea;
  }

  // level_1_level_1_inter_area - computed: false, optional: true, required: false
  private _level1Level1InterArea?: boolean | cdktf.IResolvable; 
  public get level1Level1InterArea() {
    return this.getBooleanAttribute('level_1_level_1_inter_area');
  }
  public set level1Level1InterArea(value: boolean | cdktf.IResolvable) {
    this._level1Level1InterArea = value;
  }
  public resetLevel1Level1InterArea() {
    this._level1Level1InterArea = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get level1Level1InterAreaInput() {
    return this._level1Level1InterArea;
  }

  // level_1_level_2 - computed: false, optional: true, required: false
  private _level1Level2?: boolean | cdktf.IResolvable; 
  public get level1Level2() {
    return this.getBooleanAttribute('level_1_level_2');
  }
  public set level1Level2(value: boolean | cdktf.IResolvable) {
    this._level1Level2 = value;
  }
  public resetLevel1Level2() {
    this._level1Level2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get level1Level2Input() {
    return this._level1Level2;
  }

  // level_1_level_2_level_1_inter_area - computed: false, optional: true, required: false
  private _level1Level2Level1InterArea?: boolean | cdktf.IResolvable; 
  public get level1Level2Level1InterArea() {
    return this.getBooleanAttribute('level_1_level_2_level_1_inter_area');
  }
  public set level1Level2Level1InterArea(value: boolean | cdktf.IResolvable) {
    this._level1Level2Level1InterArea = value;
  }
  public resetLevel1Level2Level1InterArea() {
    this._level1Level2Level1InterArea = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get level1Level2Level1InterAreaInput() {
    return this._level1Level2Level1InterArea;
  }

  // level_2 - computed: false, optional: true, required: false
  private _level2?: boolean | cdktf.IResolvable; 
  public get level2() {
    return this.getBooleanAttribute('level_2');
  }
  public set level2(value: boolean | cdktf.IResolvable) {
    this._level2 = value;
  }
  public resetLevel2() {
    this._level2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get level2Input() {
    return this._level2;
  }

  // level_2_level_1_inter_area - computed: false, optional: true, required: false
  private _level2Level1InterArea?: boolean | cdktf.IResolvable; 
  public get level2Level1InterArea() {
    return this.getBooleanAttribute('level_2_level_1_inter_area');
  }
  public set level2Level1InterArea(value: boolean | cdktf.IResolvable) {
    this._level2Level1InterArea = value;
  }
  public resetLevel2Level1InterArea() {
    this._level2Level1InterArea = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get level2Level1InterAreaInput() {
    return this._level2Level1InterArea;
  }

  // metric - computed: false, optional: true, required: false
  private _metric?: number; 
  public get metric() {
    return this.getNumberAttribute('metric');
  }
  public set metric(value: number) {
    this._metric = value;
  }
  public resetMetric() {
    this._metric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric;
  }

  // multipath - computed: false, optional: true, required: false
  private _multipath?: boolean | cdktf.IResolvable; 
  public get multipath() {
    return this.getBooleanAttribute('multipath');
  }
  public set multipath(value: boolean | cdktf.IResolvable) {
    this._multipath = value;
  }
  public resetMultipath() {
    this._multipath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multipathInput() {
    return this._multipath;
  }

  // route_policy - computed: false, optional: true, required: false
  private _routePolicy?: string; 
  public get routePolicy() {
    return this.getStringAttribute('route_policy');
  }
  public set routePolicy(value: string) {
    this._routePolicy = value;
  }
  public resetRoutePolicy() {
    this._routePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routePolicyInput() {
    return this._routePolicy;
  }
}

export class RouterBgpVrfAddressFamilyRedistributeIsisList extends cdktf.ComplexList {
  public internalValue? : RouterBgpVrfAddressFamilyRedistributeIsis[] | cdktf.IResolvable

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
  public get(index: number): RouterBgpVrfAddressFamilyRedistributeIsisOutputReference {
    return new RouterBgpVrfAddressFamilyRedistributeIsisOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterBgpVrfAddressFamilyRedistributeOspf {
  /**
  * Redistribute OSPF external routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#match_external RouterBgpVrfAddressFamily#match_external}
  */
  readonly matchExternal?: boolean | cdktf.IResolvable;
  /**
  * Redistribute OSPF external type 1 routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#match_external_1 RouterBgpVrfAddressFamily#match_external_1}
  */
  readonly matchExternal1?: boolean | cdktf.IResolvable;
  /**
  * Redistribute OSPF external type 1 and NSSA external routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#match_external_1_nssa_external RouterBgpVrfAddressFamily#match_external_1_nssa_external}
  */
  readonly matchExternal1NssaExternal?: boolean | cdktf.IResolvable;
  /**
  * Redistribute OSPF external type 1 and NSSA external type 1 routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#match_external_1_nssa_external_1 RouterBgpVrfAddressFamily#match_external_1_nssa_external_1}
  */
  readonly matchExternal1NssaExternal1?: boolean | cdktf.IResolvable;
  /**
  * Redistribute OSPF external type 1 and NSSA external type 2 routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#match_external_1_nssa_external_2 RouterBgpVrfAddressFamily#match_external_1_nssa_external_2}
  */
  readonly matchExternal1NssaExternal2?: boolean | cdktf.IResolvable;
  /**
  * Redistribute OSPF external type 2 routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#match_external_2 RouterBgpVrfAddressFamily#match_external_2}
  */
  readonly matchExternal2?: boolean | cdktf.IResolvable;
  /**
  * Redistribute OSPF external type 2 and NSSA external routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#match_external_2_nssa_external RouterBgpVrfAddressFamily#match_external_2_nssa_external}
  */
  readonly matchExternal2NssaExternal?: boolean | cdktf.IResolvable;
  /**
  * Redistribute OSPF external type 2 and NSSA external type 1 routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#match_external_2_nssa_external_1 RouterBgpVrfAddressFamily#match_external_2_nssa_external_1}
  */
  readonly matchExternal2NssaExternal1?: boolean | cdktf.IResolvable;
  /**
  * Redistribute OSPF external type 2 and NSSA external type 2 routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#match_external_2_nssa_external_2 RouterBgpVrfAddressFamily#match_external_2_nssa_external_2}
  */
  readonly matchExternal2NssaExternal2?: boolean | cdktf.IResolvable;
  /**
  * Redistribute OSPF external and NSSA external routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#match_external_nssa_external RouterBgpVrfAddressFamily#match_external_nssa_external}
  */
  readonly matchExternalNssaExternal?: boolean | cdktf.IResolvable;
  /**
  * Redistribute OSPF external and NSSA external type 1 routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#match_external_nssa_external_1 RouterBgpVrfAddressFamily#match_external_nssa_external_1}
  */
  readonly matchExternalNssaExternal1?: boolean | cdktf.IResolvable;
  /**
  * Redistribute OSPF external and NSSA external type 2 routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#match_external_nssa_external_2 RouterBgpVrfAddressFamily#match_external_nssa_external_2}
  */
  readonly matchExternalNssaExternal2?: boolean | cdktf.IResolvable;
  /**
  * Redistribute OSPF internal routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#match_internal RouterBgpVrfAddressFamily#match_internal}
  */
  readonly matchInternal?: boolean | cdktf.IResolvable;
  /**
  * Redistribute OSPF internal and external routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#match_internal_external RouterBgpVrfAddressFamily#match_internal_external}
  */
  readonly matchInternalExternal?: boolean | cdktf.IResolvable;
  /**
  * Redistribute OSPF internal and external type 1 routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#match_internal_external_1 RouterBgpVrfAddressFamily#match_internal_external_1}
  */
  readonly matchInternalExternal1?: boolean | cdktf.IResolvable;
  /**
  * Redistribute OSPF internal, external type 1 and NSSA external routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#match_internal_external_1_nssa_external RouterBgpVrfAddressFamily#match_internal_external_1_nssa_external}
  */
  readonly matchInternalExternal1NssaExternal?: boolean | cdktf.IResolvable;
  /**
  * Redistribute OSPF internal, external type 1 and NSSA external type 1 routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#match_internal_external_1_nssa_external_1 RouterBgpVrfAddressFamily#match_internal_external_1_nssa_external_1}
  */
  readonly matchInternalExternal1NssaExternal1?: boolean | cdktf.IResolvable;
  /**
  * Redistribute OSPF internal, external type 1 and NSSA external type 2 routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#match_internal_external_1_nssa_external_2 RouterBgpVrfAddressFamily#match_internal_external_1_nssa_external_2}
  */
  readonly matchInternalExternal1NssaExternal2?: boolean | cdktf.IResolvable;
  /**
  * Redistribute OSPF internal and external type 2 routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#match_internal_external_2 RouterBgpVrfAddressFamily#match_internal_external_2}
  */
  readonly matchInternalExternal2?: boolean | cdktf.IResolvable;
  /**
  * Redistribute OSPF internal, external type 2 and NSSA external routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#match_internal_external_2_nssa_external RouterBgpVrfAddressFamily#match_internal_external_2_nssa_external}
  */
  readonly matchInternalExternal2NssaExternal?: boolean | cdktf.IResolvable;
  /**
  * Redistribute OSPF internal, external type 2 and NSSA external type 1 routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#match_internal_external_2_nssa_external_1 RouterBgpVrfAddressFamily#match_internal_external_2_nssa_external_1}
  */
  readonly matchInternalExternal2NssaExternal1?: boolean | cdktf.IResolvable;
  /**
  * Redistribute OSPF internal, external type 2 and NSSA external type 2 routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#match_internal_external_2_nssa_external_2 RouterBgpVrfAddressFamily#match_internal_external_2_nssa_external_2}
  */
  readonly matchInternalExternal2NssaExternal2?: boolean | cdktf.IResolvable;
  /**
  * Redistribute OSPF internal, external and NSSA external routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#match_internal_external_nssa_external RouterBgpVrfAddressFamily#match_internal_external_nssa_external}
  */
  readonly matchInternalExternalNssaExternal?: boolean | cdktf.IResolvable;
  /**
  * Redistribute OSPF internal, external and NSSA external type 1 routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#match_internal_external_nssa_external_1 RouterBgpVrfAddressFamily#match_internal_external_nssa_external_1}
  */
  readonly matchInternalExternalNssaExternal1?: boolean | cdktf.IResolvable;
  /**
  * Redistribute OSPF internal, external and NSSA external type 2 routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#match_internal_external_nssa_external_2 RouterBgpVrfAddressFamily#match_internal_external_nssa_external_2}
  */
  readonly matchInternalExternalNssaExternal2?: boolean | cdktf.IResolvable;
  /**
  * Redistribute OSPF internal and NSSA external routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#match_internal_nssa_external RouterBgpVrfAddressFamily#match_internal_nssa_external}
  */
  readonly matchInternalNssaExternal?: boolean | cdktf.IResolvable;
  /**
  * Redistribute OSPF internal and NSSA external type 1 routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#match_internal_nssa_external_1 RouterBgpVrfAddressFamily#match_internal_nssa_external_1}
  */
  readonly matchInternalNssaExternal1?: boolean | cdktf.IResolvable;
  /**
  * Redistribute OSPF internal and NSSA external type 2 routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#match_internal_nssa_external_2 RouterBgpVrfAddressFamily#match_internal_nssa_external_2}
  */
  readonly matchInternalNssaExternal2?: boolean | cdktf.IResolvable;
  /**
  * Redistribute OSPF NSSA external routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#match_nssa_external RouterBgpVrfAddressFamily#match_nssa_external}
  */
  readonly matchNssaExternal?: boolean | cdktf.IResolvable;
  /**
  * Redistribute OSPF NSSA external type 1 routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#match_nssa_external_1 RouterBgpVrfAddressFamily#match_nssa_external_1}
  */
  readonly matchNssaExternal1?: boolean | cdktf.IResolvable;
  /**
  * Redistribute OSPF NSSA external type 2 routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#match_nssa_external_2 RouterBgpVrfAddressFamily#match_nssa_external_2}
  */
  readonly matchNssaExternal2?: boolean | cdktf.IResolvable;
  /**
  * Metric for redistributed routes
  *   - Range: `0`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#metric RouterBgpVrfAddressFamily#metric}
  */
  readonly metric?: number;
  /**
  * Enable installation of multiple paths from RIB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#multipath RouterBgpVrfAddressFamily#multipath}
  */
  readonly multipath?: boolean | cdktf.IResolvable;
  /**
  * Route policy reference
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#route_policy RouterBgpVrfAddressFamily#route_policy}
  */
  readonly routePolicy?: string;
  /**
  * OSPF router tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#router_tag RouterBgpVrfAddressFamily#router_tag}
  */
  readonly routerTag: string;
}

export function routerBgpVrfAddressFamilyRedistributeOspfToTerraform(struct?: RouterBgpVrfAddressFamilyRedistributeOspf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_external: cdktf.booleanToTerraform(struct!.matchExternal),
    match_external_1: cdktf.booleanToTerraform(struct!.matchExternal1),
    match_external_1_nssa_external: cdktf.booleanToTerraform(struct!.matchExternal1NssaExternal),
    match_external_1_nssa_external_1: cdktf.booleanToTerraform(struct!.matchExternal1NssaExternal1),
    match_external_1_nssa_external_2: cdktf.booleanToTerraform(struct!.matchExternal1NssaExternal2),
    match_external_2: cdktf.booleanToTerraform(struct!.matchExternal2),
    match_external_2_nssa_external: cdktf.booleanToTerraform(struct!.matchExternal2NssaExternal),
    match_external_2_nssa_external_1: cdktf.booleanToTerraform(struct!.matchExternal2NssaExternal1),
    match_external_2_nssa_external_2: cdktf.booleanToTerraform(struct!.matchExternal2NssaExternal2),
    match_external_nssa_external: cdktf.booleanToTerraform(struct!.matchExternalNssaExternal),
    match_external_nssa_external_1: cdktf.booleanToTerraform(struct!.matchExternalNssaExternal1),
    match_external_nssa_external_2: cdktf.booleanToTerraform(struct!.matchExternalNssaExternal2),
    match_internal: cdktf.booleanToTerraform(struct!.matchInternal),
    match_internal_external: cdktf.booleanToTerraform(struct!.matchInternalExternal),
    match_internal_external_1: cdktf.booleanToTerraform(struct!.matchInternalExternal1),
    match_internal_external_1_nssa_external: cdktf.booleanToTerraform(struct!.matchInternalExternal1NssaExternal),
    match_internal_external_1_nssa_external_1: cdktf.booleanToTerraform(struct!.matchInternalExternal1NssaExternal1),
    match_internal_external_1_nssa_external_2: cdktf.booleanToTerraform(struct!.matchInternalExternal1NssaExternal2),
    match_internal_external_2: cdktf.booleanToTerraform(struct!.matchInternalExternal2),
    match_internal_external_2_nssa_external: cdktf.booleanToTerraform(struct!.matchInternalExternal2NssaExternal),
    match_internal_external_2_nssa_external_1: cdktf.booleanToTerraform(struct!.matchInternalExternal2NssaExternal1),
    match_internal_external_2_nssa_external_2: cdktf.booleanToTerraform(struct!.matchInternalExternal2NssaExternal2),
    match_internal_external_nssa_external: cdktf.booleanToTerraform(struct!.matchInternalExternalNssaExternal),
    match_internal_external_nssa_external_1: cdktf.booleanToTerraform(struct!.matchInternalExternalNssaExternal1),
    match_internal_external_nssa_external_2: cdktf.booleanToTerraform(struct!.matchInternalExternalNssaExternal2),
    match_internal_nssa_external: cdktf.booleanToTerraform(struct!.matchInternalNssaExternal),
    match_internal_nssa_external_1: cdktf.booleanToTerraform(struct!.matchInternalNssaExternal1),
    match_internal_nssa_external_2: cdktf.booleanToTerraform(struct!.matchInternalNssaExternal2),
    match_nssa_external: cdktf.booleanToTerraform(struct!.matchNssaExternal),
    match_nssa_external_1: cdktf.booleanToTerraform(struct!.matchNssaExternal1),
    match_nssa_external_2: cdktf.booleanToTerraform(struct!.matchNssaExternal2),
    metric: cdktf.numberToTerraform(struct!.metric),
    multipath: cdktf.booleanToTerraform(struct!.multipath),
    route_policy: cdktf.stringToTerraform(struct!.routePolicy),
    router_tag: cdktf.stringToTerraform(struct!.routerTag),
  }
}


export function routerBgpVrfAddressFamilyRedistributeOspfToHclTerraform(struct?: RouterBgpVrfAddressFamilyRedistributeOspf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_external: {
      value: cdktf.booleanToHclTerraform(struct!.matchExternal),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match_external_1: {
      value: cdktf.booleanToHclTerraform(struct!.matchExternal1),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match_external_1_nssa_external: {
      value: cdktf.booleanToHclTerraform(struct!.matchExternal1NssaExternal),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match_external_1_nssa_external_1: {
      value: cdktf.booleanToHclTerraform(struct!.matchExternal1NssaExternal1),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match_external_1_nssa_external_2: {
      value: cdktf.booleanToHclTerraform(struct!.matchExternal1NssaExternal2),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match_external_2: {
      value: cdktf.booleanToHclTerraform(struct!.matchExternal2),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match_external_2_nssa_external: {
      value: cdktf.booleanToHclTerraform(struct!.matchExternal2NssaExternal),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match_external_2_nssa_external_1: {
      value: cdktf.booleanToHclTerraform(struct!.matchExternal2NssaExternal1),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match_external_2_nssa_external_2: {
      value: cdktf.booleanToHclTerraform(struct!.matchExternal2NssaExternal2),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match_external_nssa_external: {
      value: cdktf.booleanToHclTerraform(struct!.matchExternalNssaExternal),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match_external_nssa_external_1: {
      value: cdktf.booleanToHclTerraform(struct!.matchExternalNssaExternal1),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match_external_nssa_external_2: {
      value: cdktf.booleanToHclTerraform(struct!.matchExternalNssaExternal2),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match_internal: {
      value: cdktf.booleanToHclTerraform(struct!.matchInternal),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match_internal_external: {
      value: cdktf.booleanToHclTerraform(struct!.matchInternalExternal),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match_internal_external_1: {
      value: cdktf.booleanToHclTerraform(struct!.matchInternalExternal1),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match_internal_external_1_nssa_external: {
      value: cdktf.booleanToHclTerraform(struct!.matchInternalExternal1NssaExternal),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match_internal_external_1_nssa_external_1: {
      value: cdktf.booleanToHclTerraform(struct!.matchInternalExternal1NssaExternal1),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match_internal_external_1_nssa_external_2: {
      value: cdktf.booleanToHclTerraform(struct!.matchInternalExternal1NssaExternal2),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match_internal_external_2: {
      value: cdktf.booleanToHclTerraform(struct!.matchInternalExternal2),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match_internal_external_2_nssa_external: {
      value: cdktf.booleanToHclTerraform(struct!.matchInternalExternal2NssaExternal),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match_internal_external_2_nssa_external_1: {
      value: cdktf.booleanToHclTerraform(struct!.matchInternalExternal2NssaExternal1),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match_internal_external_2_nssa_external_2: {
      value: cdktf.booleanToHclTerraform(struct!.matchInternalExternal2NssaExternal2),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match_internal_external_nssa_external: {
      value: cdktf.booleanToHclTerraform(struct!.matchInternalExternalNssaExternal),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match_internal_external_nssa_external_1: {
      value: cdktf.booleanToHclTerraform(struct!.matchInternalExternalNssaExternal1),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match_internal_external_nssa_external_2: {
      value: cdktf.booleanToHclTerraform(struct!.matchInternalExternalNssaExternal2),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match_internal_nssa_external: {
      value: cdktf.booleanToHclTerraform(struct!.matchInternalNssaExternal),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match_internal_nssa_external_1: {
      value: cdktf.booleanToHclTerraform(struct!.matchInternalNssaExternal1),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match_internal_nssa_external_2: {
      value: cdktf.booleanToHclTerraform(struct!.matchInternalNssaExternal2),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match_nssa_external: {
      value: cdktf.booleanToHclTerraform(struct!.matchNssaExternal),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match_nssa_external_1: {
      value: cdktf.booleanToHclTerraform(struct!.matchNssaExternal1),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match_nssa_external_2: {
      value: cdktf.booleanToHclTerraform(struct!.matchNssaExternal2),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    metric: {
      value: cdktf.numberToHclTerraform(struct!.metric),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    multipath: {
      value: cdktf.booleanToHclTerraform(struct!.multipath),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    route_policy: {
      value: cdktf.stringToHclTerraform(struct!.routePolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    router_tag: {
      value: cdktf.stringToHclTerraform(struct!.routerTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterBgpVrfAddressFamilyRedistributeOspfOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterBgpVrfAddressFamilyRedistributeOspf | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExternal !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExternal = this._matchExternal;
    }
    if (this._matchExternal1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExternal1 = this._matchExternal1;
    }
    if (this._matchExternal1NssaExternal !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExternal1NssaExternal = this._matchExternal1NssaExternal;
    }
    if (this._matchExternal1NssaExternal1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExternal1NssaExternal1 = this._matchExternal1NssaExternal1;
    }
    if (this._matchExternal1NssaExternal2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExternal1NssaExternal2 = this._matchExternal1NssaExternal2;
    }
    if (this._matchExternal2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExternal2 = this._matchExternal2;
    }
    if (this._matchExternal2NssaExternal !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExternal2NssaExternal = this._matchExternal2NssaExternal;
    }
    if (this._matchExternal2NssaExternal1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExternal2NssaExternal1 = this._matchExternal2NssaExternal1;
    }
    if (this._matchExternal2NssaExternal2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExternal2NssaExternal2 = this._matchExternal2NssaExternal2;
    }
    if (this._matchExternalNssaExternal !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExternalNssaExternal = this._matchExternalNssaExternal;
    }
    if (this._matchExternalNssaExternal1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExternalNssaExternal1 = this._matchExternalNssaExternal1;
    }
    if (this._matchExternalNssaExternal2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExternalNssaExternal2 = this._matchExternalNssaExternal2;
    }
    if (this._matchInternal !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchInternal = this._matchInternal;
    }
    if (this._matchInternalExternal !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchInternalExternal = this._matchInternalExternal;
    }
    if (this._matchInternalExternal1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchInternalExternal1 = this._matchInternalExternal1;
    }
    if (this._matchInternalExternal1NssaExternal !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchInternalExternal1NssaExternal = this._matchInternalExternal1NssaExternal;
    }
    if (this._matchInternalExternal1NssaExternal1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchInternalExternal1NssaExternal1 = this._matchInternalExternal1NssaExternal1;
    }
    if (this._matchInternalExternal1NssaExternal2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchInternalExternal1NssaExternal2 = this._matchInternalExternal1NssaExternal2;
    }
    if (this._matchInternalExternal2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchInternalExternal2 = this._matchInternalExternal2;
    }
    if (this._matchInternalExternal2NssaExternal !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchInternalExternal2NssaExternal = this._matchInternalExternal2NssaExternal;
    }
    if (this._matchInternalExternal2NssaExternal1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchInternalExternal2NssaExternal1 = this._matchInternalExternal2NssaExternal1;
    }
    if (this._matchInternalExternal2NssaExternal2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchInternalExternal2NssaExternal2 = this._matchInternalExternal2NssaExternal2;
    }
    if (this._matchInternalExternalNssaExternal !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchInternalExternalNssaExternal = this._matchInternalExternalNssaExternal;
    }
    if (this._matchInternalExternalNssaExternal1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchInternalExternalNssaExternal1 = this._matchInternalExternalNssaExternal1;
    }
    if (this._matchInternalExternalNssaExternal2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchInternalExternalNssaExternal2 = this._matchInternalExternalNssaExternal2;
    }
    if (this._matchInternalNssaExternal !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchInternalNssaExternal = this._matchInternalNssaExternal;
    }
    if (this._matchInternalNssaExternal1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchInternalNssaExternal1 = this._matchInternalNssaExternal1;
    }
    if (this._matchInternalNssaExternal2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchInternalNssaExternal2 = this._matchInternalNssaExternal2;
    }
    if (this._matchNssaExternal !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchNssaExternal = this._matchNssaExternal;
    }
    if (this._matchNssaExternal1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchNssaExternal1 = this._matchNssaExternal1;
    }
    if (this._matchNssaExternal2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchNssaExternal2 = this._matchNssaExternal2;
    }
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    if (this._multipath !== undefined) {
      hasAnyValues = true;
      internalValueResult.multipath = this._multipath;
    }
    if (this._routePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.routePolicy = this._routePolicy;
    }
    if (this._routerTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.routerTag = this._routerTag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterBgpVrfAddressFamilyRedistributeOspf | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExternal = undefined;
      this._matchExternal1 = undefined;
      this._matchExternal1NssaExternal = undefined;
      this._matchExternal1NssaExternal1 = undefined;
      this._matchExternal1NssaExternal2 = undefined;
      this._matchExternal2 = undefined;
      this._matchExternal2NssaExternal = undefined;
      this._matchExternal2NssaExternal1 = undefined;
      this._matchExternal2NssaExternal2 = undefined;
      this._matchExternalNssaExternal = undefined;
      this._matchExternalNssaExternal1 = undefined;
      this._matchExternalNssaExternal2 = undefined;
      this._matchInternal = undefined;
      this._matchInternalExternal = undefined;
      this._matchInternalExternal1 = undefined;
      this._matchInternalExternal1NssaExternal = undefined;
      this._matchInternalExternal1NssaExternal1 = undefined;
      this._matchInternalExternal1NssaExternal2 = undefined;
      this._matchInternalExternal2 = undefined;
      this._matchInternalExternal2NssaExternal = undefined;
      this._matchInternalExternal2NssaExternal1 = undefined;
      this._matchInternalExternal2NssaExternal2 = undefined;
      this._matchInternalExternalNssaExternal = undefined;
      this._matchInternalExternalNssaExternal1 = undefined;
      this._matchInternalExternalNssaExternal2 = undefined;
      this._matchInternalNssaExternal = undefined;
      this._matchInternalNssaExternal1 = undefined;
      this._matchInternalNssaExternal2 = undefined;
      this._matchNssaExternal = undefined;
      this._matchNssaExternal1 = undefined;
      this._matchNssaExternal2 = undefined;
      this._metric = undefined;
      this._multipath = undefined;
      this._routePolicy = undefined;
      this._routerTag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExternal = value.matchExternal;
      this._matchExternal1 = value.matchExternal1;
      this._matchExternal1NssaExternal = value.matchExternal1NssaExternal;
      this._matchExternal1NssaExternal1 = value.matchExternal1NssaExternal1;
      this._matchExternal1NssaExternal2 = value.matchExternal1NssaExternal2;
      this._matchExternal2 = value.matchExternal2;
      this._matchExternal2NssaExternal = value.matchExternal2NssaExternal;
      this._matchExternal2NssaExternal1 = value.matchExternal2NssaExternal1;
      this._matchExternal2NssaExternal2 = value.matchExternal2NssaExternal2;
      this._matchExternalNssaExternal = value.matchExternalNssaExternal;
      this._matchExternalNssaExternal1 = value.matchExternalNssaExternal1;
      this._matchExternalNssaExternal2 = value.matchExternalNssaExternal2;
      this._matchInternal = value.matchInternal;
      this._matchInternalExternal = value.matchInternalExternal;
      this._matchInternalExternal1 = value.matchInternalExternal1;
      this._matchInternalExternal1NssaExternal = value.matchInternalExternal1NssaExternal;
      this._matchInternalExternal1NssaExternal1 = value.matchInternalExternal1NssaExternal1;
      this._matchInternalExternal1NssaExternal2 = value.matchInternalExternal1NssaExternal2;
      this._matchInternalExternal2 = value.matchInternalExternal2;
      this._matchInternalExternal2NssaExternal = value.matchInternalExternal2NssaExternal;
      this._matchInternalExternal2NssaExternal1 = value.matchInternalExternal2NssaExternal1;
      this._matchInternalExternal2NssaExternal2 = value.matchInternalExternal2NssaExternal2;
      this._matchInternalExternalNssaExternal = value.matchInternalExternalNssaExternal;
      this._matchInternalExternalNssaExternal1 = value.matchInternalExternalNssaExternal1;
      this._matchInternalExternalNssaExternal2 = value.matchInternalExternalNssaExternal2;
      this._matchInternalNssaExternal = value.matchInternalNssaExternal;
      this._matchInternalNssaExternal1 = value.matchInternalNssaExternal1;
      this._matchInternalNssaExternal2 = value.matchInternalNssaExternal2;
      this._matchNssaExternal = value.matchNssaExternal;
      this._matchNssaExternal1 = value.matchNssaExternal1;
      this._matchNssaExternal2 = value.matchNssaExternal2;
      this._metric = value.metric;
      this._multipath = value.multipath;
      this._routePolicy = value.routePolicy;
      this._routerTag = value.routerTag;
    }
  }

  // match_external - computed: false, optional: true, required: false
  private _matchExternal?: boolean | cdktf.IResolvable; 
  public get matchExternal() {
    return this.getBooleanAttribute('match_external');
  }
  public set matchExternal(value: boolean | cdktf.IResolvable) {
    this._matchExternal = value;
  }
  public resetMatchExternal() {
    this._matchExternal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExternalInput() {
    return this._matchExternal;
  }

  // match_external_1 - computed: false, optional: true, required: false
  private _matchExternal1?: boolean | cdktf.IResolvable; 
  public get matchExternal1() {
    return this.getBooleanAttribute('match_external_1');
  }
  public set matchExternal1(value: boolean | cdktf.IResolvable) {
    this._matchExternal1 = value;
  }
  public resetMatchExternal1() {
    this._matchExternal1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExternal1Input() {
    return this._matchExternal1;
  }

  // match_external_1_nssa_external - computed: false, optional: true, required: false
  private _matchExternal1NssaExternal?: boolean | cdktf.IResolvable; 
  public get matchExternal1NssaExternal() {
    return this.getBooleanAttribute('match_external_1_nssa_external');
  }
  public set matchExternal1NssaExternal(value: boolean | cdktf.IResolvable) {
    this._matchExternal1NssaExternal = value;
  }
  public resetMatchExternal1NssaExternal() {
    this._matchExternal1NssaExternal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExternal1NssaExternalInput() {
    return this._matchExternal1NssaExternal;
  }

  // match_external_1_nssa_external_1 - computed: false, optional: true, required: false
  private _matchExternal1NssaExternal1?: boolean | cdktf.IResolvable; 
  public get matchExternal1NssaExternal1() {
    return this.getBooleanAttribute('match_external_1_nssa_external_1');
  }
  public set matchExternal1NssaExternal1(value: boolean | cdktf.IResolvable) {
    this._matchExternal1NssaExternal1 = value;
  }
  public resetMatchExternal1NssaExternal1() {
    this._matchExternal1NssaExternal1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExternal1NssaExternal1Input() {
    return this._matchExternal1NssaExternal1;
  }

  // match_external_1_nssa_external_2 - computed: false, optional: true, required: false
  private _matchExternal1NssaExternal2?: boolean | cdktf.IResolvable; 
  public get matchExternal1NssaExternal2() {
    return this.getBooleanAttribute('match_external_1_nssa_external_2');
  }
  public set matchExternal1NssaExternal2(value: boolean | cdktf.IResolvable) {
    this._matchExternal1NssaExternal2 = value;
  }
  public resetMatchExternal1NssaExternal2() {
    this._matchExternal1NssaExternal2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExternal1NssaExternal2Input() {
    return this._matchExternal1NssaExternal2;
  }

  // match_external_2 - computed: false, optional: true, required: false
  private _matchExternal2?: boolean | cdktf.IResolvable; 
  public get matchExternal2() {
    return this.getBooleanAttribute('match_external_2');
  }
  public set matchExternal2(value: boolean | cdktf.IResolvable) {
    this._matchExternal2 = value;
  }
  public resetMatchExternal2() {
    this._matchExternal2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExternal2Input() {
    return this._matchExternal2;
  }

  // match_external_2_nssa_external - computed: false, optional: true, required: false
  private _matchExternal2NssaExternal?: boolean | cdktf.IResolvable; 
  public get matchExternal2NssaExternal() {
    return this.getBooleanAttribute('match_external_2_nssa_external');
  }
  public set matchExternal2NssaExternal(value: boolean | cdktf.IResolvable) {
    this._matchExternal2NssaExternal = value;
  }
  public resetMatchExternal2NssaExternal() {
    this._matchExternal2NssaExternal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExternal2NssaExternalInput() {
    return this._matchExternal2NssaExternal;
  }

  // match_external_2_nssa_external_1 - computed: false, optional: true, required: false
  private _matchExternal2NssaExternal1?: boolean | cdktf.IResolvable; 
  public get matchExternal2NssaExternal1() {
    return this.getBooleanAttribute('match_external_2_nssa_external_1');
  }
  public set matchExternal2NssaExternal1(value: boolean | cdktf.IResolvable) {
    this._matchExternal2NssaExternal1 = value;
  }
  public resetMatchExternal2NssaExternal1() {
    this._matchExternal2NssaExternal1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExternal2NssaExternal1Input() {
    return this._matchExternal2NssaExternal1;
  }

  // match_external_2_nssa_external_2 - computed: false, optional: true, required: false
  private _matchExternal2NssaExternal2?: boolean | cdktf.IResolvable; 
  public get matchExternal2NssaExternal2() {
    return this.getBooleanAttribute('match_external_2_nssa_external_2');
  }
  public set matchExternal2NssaExternal2(value: boolean | cdktf.IResolvable) {
    this._matchExternal2NssaExternal2 = value;
  }
  public resetMatchExternal2NssaExternal2() {
    this._matchExternal2NssaExternal2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExternal2NssaExternal2Input() {
    return this._matchExternal2NssaExternal2;
  }

  // match_external_nssa_external - computed: false, optional: true, required: false
  private _matchExternalNssaExternal?: boolean | cdktf.IResolvable; 
  public get matchExternalNssaExternal() {
    return this.getBooleanAttribute('match_external_nssa_external');
  }
  public set matchExternalNssaExternal(value: boolean | cdktf.IResolvable) {
    this._matchExternalNssaExternal = value;
  }
  public resetMatchExternalNssaExternal() {
    this._matchExternalNssaExternal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExternalNssaExternalInput() {
    return this._matchExternalNssaExternal;
  }

  // match_external_nssa_external_1 - computed: false, optional: true, required: false
  private _matchExternalNssaExternal1?: boolean | cdktf.IResolvable; 
  public get matchExternalNssaExternal1() {
    return this.getBooleanAttribute('match_external_nssa_external_1');
  }
  public set matchExternalNssaExternal1(value: boolean | cdktf.IResolvable) {
    this._matchExternalNssaExternal1 = value;
  }
  public resetMatchExternalNssaExternal1() {
    this._matchExternalNssaExternal1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExternalNssaExternal1Input() {
    return this._matchExternalNssaExternal1;
  }

  // match_external_nssa_external_2 - computed: false, optional: true, required: false
  private _matchExternalNssaExternal2?: boolean | cdktf.IResolvable; 
  public get matchExternalNssaExternal2() {
    return this.getBooleanAttribute('match_external_nssa_external_2');
  }
  public set matchExternalNssaExternal2(value: boolean | cdktf.IResolvable) {
    this._matchExternalNssaExternal2 = value;
  }
  public resetMatchExternalNssaExternal2() {
    this._matchExternalNssaExternal2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExternalNssaExternal2Input() {
    return this._matchExternalNssaExternal2;
  }

  // match_internal - computed: false, optional: true, required: false
  private _matchInternal?: boolean | cdktf.IResolvable; 
  public get matchInternal() {
    return this.getBooleanAttribute('match_internal');
  }
  public set matchInternal(value: boolean | cdktf.IResolvable) {
    this._matchInternal = value;
  }
  public resetMatchInternal() {
    this._matchInternal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInternalInput() {
    return this._matchInternal;
  }

  // match_internal_external - computed: false, optional: true, required: false
  private _matchInternalExternal?: boolean | cdktf.IResolvable; 
  public get matchInternalExternal() {
    return this.getBooleanAttribute('match_internal_external');
  }
  public set matchInternalExternal(value: boolean | cdktf.IResolvable) {
    this._matchInternalExternal = value;
  }
  public resetMatchInternalExternal() {
    this._matchInternalExternal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInternalExternalInput() {
    return this._matchInternalExternal;
  }

  // match_internal_external_1 - computed: false, optional: true, required: false
  private _matchInternalExternal1?: boolean | cdktf.IResolvable; 
  public get matchInternalExternal1() {
    return this.getBooleanAttribute('match_internal_external_1');
  }
  public set matchInternalExternal1(value: boolean | cdktf.IResolvable) {
    this._matchInternalExternal1 = value;
  }
  public resetMatchInternalExternal1() {
    this._matchInternalExternal1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInternalExternal1Input() {
    return this._matchInternalExternal1;
  }

  // match_internal_external_1_nssa_external - computed: false, optional: true, required: false
  private _matchInternalExternal1NssaExternal?: boolean | cdktf.IResolvable; 
  public get matchInternalExternal1NssaExternal() {
    return this.getBooleanAttribute('match_internal_external_1_nssa_external');
  }
  public set matchInternalExternal1NssaExternal(value: boolean | cdktf.IResolvable) {
    this._matchInternalExternal1NssaExternal = value;
  }
  public resetMatchInternalExternal1NssaExternal() {
    this._matchInternalExternal1NssaExternal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInternalExternal1NssaExternalInput() {
    return this._matchInternalExternal1NssaExternal;
  }

  // match_internal_external_1_nssa_external_1 - computed: false, optional: true, required: false
  private _matchInternalExternal1NssaExternal1?: boolean | cdktf.IResolvable; 
  public get matchInternalExternal1NssaExternal1() {
    return this.getBooleanAttribute('match_internal_external_1_nssa_external_1');
  }
  public set matchInternalExternal1NssaExternal1(value: boolean | cdktf.IResolvable) {
    this._matchInternalExternal1NssaExternal1 = value;
  }
  public resetMatchInternalExternal1NssaExternal1() {
    this._matchInternalExternal1NssaExternal1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInternalExternal1NssaExternal1Input() {
    return this._matchInternalExternal1NssaExternal1;
  }

  // match_internal_external_1_nssa_external_2 - computed: false, optional: true, required: false
  private _matchInternalExternal1NssaExternal2?: boolean | cdktf.IResolvable; 
  public get matchInternalExternal1NssaExternal2() {
    return this.getBooleanAttribute('match_internal_external_1_nssa_external_2');
  }
  public set matchInternalExternal1NssaExternal2(value: boolean | cdktf.IResolvable) {
    this._matchInternalExternal1NssaExternal2 = value;
  }
  public resetMatchInternalExternal1NssaExternal2() {
    this._matchInternalExternal1NssaExternal2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInternalExternal1NssaExternal2Input() {
    return this._matchInternalExternal1NssaExternal2;
  }

  // match_internal_external_2 - computed: false, optional: true, required: false
  private _matchInternalExternal2?: boolean | cdktf.IResolvable; 
  public get matchInternalExternal2() {
    return this.getBooleanAttribute('match_internal_external_2');
  }
  public set matchInternalExternal2(value: boolean | cdktf.IResolvable) {
    this._matchInternalExternal2 = value;
  }
  public resetMatchInternalExternal2() {
    this._matchInternalExternal2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInternalExternal2Input() {
    return this._matchInternalExternal2;
  }

  // match_internal_external_2_nssa_external - computed: false, optional: true, required: false
  private _matchInternalExternal2NssaExternal?: boolean | cdktf.IResolvable; 
  public get matchInternalExternal2NssaExternal() {
    return this.getBooleanAttribute('match_internal_external_2_nssa_external');
  }
  public set matchInternalExternal2NssaExternal(value: boolean | cdktf.IResolvable) {
    this._matchInternalExternal2NssaExternal = value;
  }
  public resetMatchInternalExternal2NssaExternal() {
    this._matchInternalExternal2NssaExternal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInternalExternal2NssaExternalInput() {
    return this._matchInternalExternal2NssaExternal;
  }

  // match_internal_external_2_nssa_external_1 - computed: false, optional: true, required: false
  private _matchInternalExternal2NssaExternal1?: boolean | cdktf.IResolvable; 
  public get matchInternalExternal2NssaExternal1() {
    return this.getBooleanAttribute('match_internal_external_2_nssa_external_1');
  }
  public set matchInternalExternal2NssaExternal1(value: boolean | cdktf.IResolvable) {
    this._matchInternalExternal2NssaExternal1 = value;
  }
  public resetMatchInternalExternal2NssaExternal1() {
    this._matchInternalExternal2NssaExternal1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInternalExternal2NssaExternal1Input() {
    return this._matchInternalExternal2NssaExternal1;
  }

  // match_internal_external_2_nssa_external_2 - computed: false, optional: true, required: false
  private _matchInternalExternal2NssaExternal2?: boolean | cdktf.IResolvable; 
  public get matchInternalExternal2NssaExternal2() {
    return this.getBooleanAttribute('match_internal_external_2_nssa_external_2');
  }
  public set matchInternalExternal2NssaExternal2(value: boolean | cdktf.IResolvable) {
    this._matchInternalExternal2NssaExternal2 = value;
  }
  public resetMatchInternalExternal2NssaExternal2() {
    this._matchInternalExternal2NssaExternal2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInternalExternal2NssaExternal2Input() {
    return this._matchInternalExternal2NssaExternal2;
  }

  // match_internal_external_nssa_external - computed: false, optional: true, required: false
  private _matchInternalExternalNssaExternal?: boolean | cdktf.IResolvable; 
  public get matchInternalExternalNssaExternal() {
    return this.getBooleanAttribute('match_internal_external_nssa_external');
  }
  public set matchInternalExternalNssaExternal(value: boolean | cdktf.IResolvable) {
    this._matchInternalExternalNssaExternal = value;
  }
  public resetMatchInternalExternalNssaExternal() {
    this._matchInternalExternalNssaExternal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInternalExternalNssaExternalInput() {
    return this._matchInternalExternalNssaExternal;
  }

  // match_internal_external_nssa_external_1 - computed: false, optional: true, required: false
  private _matchInternalExternalNssaExternal1?: boolean | cdktf.IResolvable; 
  public get matchInternalExternalNssaExternal1() {
    return this.getBooleanAttribute('match_internal_external_nssa_external_1');
  }
  public set matchInternalExternalNssaExternal1(value: boolean | cdktf.IResolvable) {
    this._matchInternalExternalNssaExternal1 = value;
  }
  public resetMatchInternalExternalNssaExternal1() {
    this._matchInternalExternalNssaExternal1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInternalExternalNssaExternal1Input() {
    return this._matchInternalExternalNssaExternal1;
  }

  // match_internal_external_nssa_external_2 - computed: false, optional: true, required: false
  private _matchInternalExternalNssaExternal2?: boolean | cdktf.IResolvable; 
  public get matchInternalExternalNssaExternal2() {
    return this.getBooleanAttribute('match_internal_external_nssa_external_2');
  }
  public set matchInternalExternalNssaExternal2(value: boolean | cdktf.IResolvable) {
    this._matchInternalExternalNssaExternal2 = value;
  }
  public resetMatchInternalExternalNssaExternal2() {
    this._matchInternalExternalNssaExternal2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInternalExternalNssaExternal2Input() {
    return this._matchInternalExternalNssaExternal2;
  }

  // match_internal_nssa_external - computed: false, optional: true, required: false
  private _matchInternalNssaExternal?: boolean | cdktf.IResolvable; 
  public get matchInternalNssaExternal() {
    return this.getBooleanAttribute('match_internal_nssa_external');
  }
  public set matchInternalNssaExternal(value: boolean | cdktf.IResolvable) {
    this._matchInternalNssaExternal = value;
  }
  public resetMatchInternalNssaExternal() {
    this._matchInternalNssaExternal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInternalNssaExternalInput() {
    return this._matchInternalNssaExternal;
  }

  // match_internal_nssa_external_1 - computed: false, optional: true, required: false
  private _matchInternalNssaExternal1?: boolean | cdktf.IResolvable; 
  public get matchInternalNssaExternal1() {
    return this.getBooleanAttribute('match_internal_nssa_external_1');
  }
  public set matchInternalNssaExternal1(value: boolean | cdktf.IResolvable) {
    this._matchInternalNssaExternal1 = value;
  }
  public resetMatchInternalNssaExternal1() {
    this._matchInternalNssaExternal1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInternalNssaExternal1Input() {
    return this._matchInternalNssaExternal1;
  }

  // match_internal_nssa_external_2 - computed: false, optional: true, required: false
  private _matchInternalNssaExternal2?: boolean | cdktf.IResolvable; 
  public get matchInternalNssaExternal2() {
    return this.getBooleanAttribute('match_internal_nssa_external_2');
  }
  public set matchInternalNssaExternal2(value: boolean | cdktf.IResolvable) {
    this._matchInternalNssaExternal2 = value;
  }
  public resetMatchInternalNssaExternal2() {
    this._matchInternalNssaExternal2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInternalNssaExternal2Input() {
    return this._matchInternalNssaExternal2;
  }

  // match_nssa_external - computed: false, optional: true, required: false
  private _matchNssaExternal?: boolean | cdktf.IResolvable; 
  public get matchNssaExternal() {
    return this.getBooleanAttribute('match_nssa_external');
  }
  public set matchNssaExternal(value: boolean | cdktf.IResolvable) {
    this._matchNssaExternal = value;
  }
  public resetMatchNssaExternal() {
    this._matchNssaExternal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchNssaExternalInput() {
    return this._matchNssaExternal;
  }

  // match_nssa_external_1 - computed: false, optional: true, required: false
  private _matchNssaExternal1?: boolean | cdktf.IResolvable; 
  public get matchNssaExternal1() {
    return this.getBooleanAttribute('match_nssa_external_1');
  }
  public set matchNssaExternal1(value: boolean | cdktf.IResolvable) {
    this._matchNssaExternal1 = value;
  }
  public resetMatchNssaExternal1() {
    this._matchNssaExternal1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchNssaExternal1Input() {
    return this._matchNssaExternal1;
  }

  // match_nssa_external_2 - computed: false, optional: true, required: false
  private _matchNssaExternal2?: boolean | cdktf.IResolvable; 
  public get matchNssaExternal2() {
    return this.getBooleanAttribute('match_nssa_external_2');
  }
  public set matchNssaExternal2(value: boolean | cdktf.IResolvable) {
    this._matchNssaExternal2 = value;
  }
  public resetMatchNssaExternal2() {
    this._matchNssaExternal2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchNssaExternal2Input() {
    return this._matchNssaExternal2;
  }

  // metric - computed: false, optional: true, required: false
  private _metric?: number; 
  public get metric() {
    return this.getNumberAttribute('metric');
  }
  public set metric(value: number) {
    this._metric = value;
  }
  public resetMetric() {
    this._metric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric;
  }

  // multipath - computed: false, optional: true, required: false
  private _multipath?: boolean | cdktf.IResolvable; 
  public get multipath() {
    return this.getBooleanAttribute('multipath');
  }
  public set multipath(value: boolean | cdktf.IResolvable) {
    this._multipath = value;
  }
  public resetMultipath() {
    this._multipath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multipathInput() {
    return this._multipath;
  }

  // route_policy - computed: false, optional: true, required: false
  private _routePolicy?: string; 
  public get routePolicy() {
    return this.getStringAttribute('route_policy');
  }
  public set routePolicy(value: string) {
    this._routePolicy = value;
  }
  public resetRoutePolicy() {
    this._routePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routePolicyInput() {
    return this._routePolicy;
  }

  // router_tag - computed: false, optional: false, required: true
  private _routerTag?: string; 
  public get routerTag() {
    return this.getStringAttribute('router_tag');
  }
  public set routerTag(value: string) {
    this._routerTag = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routerTagInput() {
    return this._routerTag;
  }
}

export class RouterBgpVrfAddressFamilyRedistributeOspfList extends cdktf.ComplexList {
  public internalValue? : RouterBgpVrfAddressFamilyRedistributeOspf[] | cdktf.IResolvable

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
  public get(index: number): RouterBgpVrfAddressFamilyRedistributeOspfOutputReference {
    return new RouterBgpVrfAddressFamilyRedistributeOspfOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterBgpVrfAddressFamilyRedistributeOspfv3 {
  /**
  * Redistribute OSPFv3 external routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#match_external RouterBgpVrfAddressFamily#match_external}
  */
  readonly matchExternal?: boolean | cdktf.IResolvable;
  /**
  * Redistribute OSPFv3 external type 1 routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#match_external_1 RouterBgpVrfAddressFamily#match_external_1}
  */
  readonly matchExternal1?: boolean | cdktf.IResolvable;
  /**
  * Redistribute OSPFv3 external type 1 and NSSA external routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#match_external_1_nssa_external RouterBgpVrfAddressFamily#match_external_1_nssa_external}
  */
  readonly matchExternal1NssaExternal?: boolean | cdktf.IResolvable;
  /**
  * Redistribute OSPFv3 external type 1 and NSSA external type 1 routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#match_external_1_nssa_external_1 RouterBgpVrfAddressFamily#match_external_1_nssa_external_1}
  */
  readonly matchExternal1NssaExternal1?: boolean | cdktf.IResolvable;
  /**
  * Redistribute OSPFv3 external type 1 and NSSA external type 2 routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#match_external_1_nssa_external_2 RouterBgpVrfAddressFamily#match_external_1_nssa_external_2}
  */
  readonly matchExternal1NssaExternal2?: boolean | cdktf.IResolvable;
  /**
  * Redistribute OSPFv3 external type 2 routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#match_external_2 RouterBgpVrfAddressFamily#match_external_2}
  */
  readonly matchExternal2?: boolean | cdktf.IResolvable;
  /**
  * Redistribute OSPFv3 external type 2 and NSSA external routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#match_external_2_nssa_external RouterBgpVrfAddressFamily#match_external_2_nssa_external}
  */
  readonly matchExternal2NssaExternal?: boolean | cdktf.IResolvable;
  /**
  * Redistribute OSPFv3 external type 2 and NSSA external type 1 routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#match_external_2_nssa_external_1 RouterBgpVrfAddressFamily#match_external_2_nssa_external_1}
  */
  readonly matchExternal2NssaExternal1?: boolean | cdktf.IResolvable;
  /**
  * Redistribute OSPFv3 external type 2 and NSSA external type 2 routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#match_external_2_nssa_external_2 RouterBgpVrfAddressFamily#match_external_2_nssa_external_2}
  */
  readonly matchExternal2NssaExternal2?: boolean | cdktf.IResolvable;
  /**
  * Redistribute OSPFv3 external and NSSA external routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#match_external_nssa_external RouterBgpVrfAddressFamily#match_external_nssa_external}
  */
  readonly matchExternalNssaExternal?: boolean | cdktf.IResolvable;
  /**
  * Redistribute OSPFv3 external and NSSA external type 1 routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#match_external_nssa_external_1 RouterBgpVrfAddressFamily#match_external_nssa_external_1}
  */
  readonly matchExternalNssaExternal1?: boolean | cdktf.IResolvable;
  /**
  * Redistribute OSPFv3 external and NSSA external type 2 routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#match_external_nssa_external_2 RouterBgpVrfAddressFamily#match_external_nssa_external_2}
  */
  readonly matchExternalNssaExternal2?: boolean | cdktf.IResolvable;
  /**
  * Redistribute OSPFv3 internal routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#match_internal RouterBgpVrfAddressFamily#match_internal}
  */
  readonly matchInternal?: boolean | cdktf.IResolvable;
  /**
  * Redistribute OSPFv3 internal and external routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#match_internal_external RouterBgpVrfAddressFamily#match_internal_external}
  */
  readonly matchInternalExternal?: boolean | cdktf.IResolvable;
  /**
  * Redistribute OSPFv3 internal and external type 1 routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#match_internal_external_1 RouterBgpVrfAddressFamily#match_internal_external_1}
  */
  readonly matchInternalExternal1?: boolean | cdktf.IResolvable;
  /**
  * Redistribute OSPFv3 internal, external type 1 and NSSA external routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#match_internal_external_1_nssa_external RouterBgpVrfAddressFamily#match_internal_external_1_nssa_external}
  */
  readonly matchInternalExternal1NssaExternal?: boolean | cdktf.IResolvable;
  /**
  * Redistribute OSPFv3 internal, external type 1 and NSSA external type 1 routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#match_internal_external_1_nssa_external_1 RouterBgpVrfAddressFamily#match_internal_external_1_nssa_external_1}
  */
  readonly matchInternalExternal1NssaExternal1?: boolean | cdktf.IResolvable;
  /**
  * Redistribute OSPFv3 internal, external type 1 and NSSA external type 2 routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#match_internal_external_1_nssa_external_2 RouterBgpVrfAddressFamily#match_internal_external_1_nssa_external_2}
  */
  readonly matchInternalExternal1NssaExternal2?: boolean | cdktf.IResolvable;
  /**
  * Redistribute OSPFv3 internal and external type 2 routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#match_internal_external_2 RouterBgpVrfAddressFamily#match_internal_external_2}
  */
  readonly matchInternalExternal2?: boolean | cdktf.IResolvable;
  /**
  * Redistribute OSPFv3 internal, external type 2 and NSSA external routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#match_internal_external_2_nssa_external RouterBgpVrfAddressFamily#match_internal_external_2_nssa_external}
  */
  readonly matchInternalExternal2NssaExternal?: boolean | cdktf.IResolvable;
  /**
  * Redistribute OSPFv3 internal, external type 2 and NSSA external type 1 routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#match_internal_external_2_nssa_external_1 RouterBgpVrfAddressFamily#match_internal_external_2_nssa_external_1}
  */
  readonly matchInternalExternal2NssaExternal1?: boolean | cdktf.IResolvable;
  /**
  * Redistribute OSPFv3 internal, external type 2 and NSSA external type 2 routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#match_internal_external_2_nssa_external_2 RouterBgpVrfAddressFamily#match_internal_external_2_nssa_external_2}
  */
  readonly matchInternalExternal2NssaExternal2?: boolean | cdktf.IResolvable;
  /**
  * Redistribute OSPFv3 internal, external and NSSA external routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#match_internal_external_nssa_external RouterBgpVrfAddressFamily#match_internal_external_nssa_external}
  */
  readonly matchInternalExternalNssaExternal?: boolean | cdktf.IResolvable;
  /**
  * Redistribute OSPFv3 internal, external and NSSA external type 1 routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#match_internal_external_nssa_external_1 RouterBgpVrfAddressFamily#match_internal_external_nssa_external_1}
  */
  readonly matchInternalExternalNssaExternal1?: boolean | cdktf.IResolvable;
  /**
  * Redistribute OSPFv3 internal, external and NSSA external type 2 routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#match_internal_external_nssa_external_2 RouterBgpVrfAddressFamily#match_internal_external_nssa_external_2}
  */
  readonly matchInternalExternalNssaExternal2?: boolean | cdktf.IResolvable;
  /**
  * Redistribute OSPFv3 internal and NSSA external routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#match_internal_nssa_external RouterBgpVrfAddressFamily#match_internal_nssa_external}
  */
  readonly matchInternalNssaExternal?: boolean | cdktf.IResolvable;
  /**
  * Redistribute OSPFv3 internal and NSSA external type 1 routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#match_internal_nssa_external_1 RouterBgpVrfAddressFamily#match_internal_nssa_external_1}
  */
  readonly matchInternalNssaExternal1?: boolean | cdktf.IResolvable;
  /**
  * Redistribute OSPFv3 internal and NSSA external type 2 routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#match_internal_nssa_external_2 RouterBgpVrfAddressFamily#match_internal_nssa_external_2}
  */
  readonly matchInternalNssaExternal2?: boolean | cdktf.IResolvable;
  /**
  * Redistribute OSPFv3 NSSA external routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#match_nssa_external RouterBgpVrfAddressFamily#match_nssa_external}
  */
  readonly matchNssaExternal?: boolean | cdktf.IResolvable;
  /**
  * Redistribute OSPFv3 NSSA external type 1 routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#match_nssa_external_1 RouterBgpVrfAddressFamily#match_nssa_external_1}
  */
  readonly matchNssaExternal1?: boolean | cdktf.IResolvable;
  /**
  * Redistribute OSPFv3 NSSA external type 2 routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#match_nssa_external_2 RouterBgpVrfAddressFamily#match_nssa_external_2}
  */
  readonly matchNssaExternal2?: boolean | cdktf.IResolvable;
  /**
  * Metric for redistributed routes
  *   - Range: `0`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#metric RouterBgpVrfAddressFamily#metric}
  */
  readonly metric?: number;
  /**
  * Enable installation of multiple paths from RIB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#multipath RouterBgpVrfAddressFamily#multipath}
  */
  readonly multipath?: boolean | cdktf.IResolvable;
  /**
  * Route policy reference
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#route_policy RouterBgpVrfAddressFamily#route_policy}
  */
  readonly routePolicy?: string;
  /**
  * OSPFv3 router tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#router_tag RouterBgpVrfAddressFamily#router_tag}
  */
  readonly routerTag: string;
}

export function routerBgpVrfAddressFamilyRedistributeOspfv3ToTerraform(struct?: RouterBgpVrfAddressFamilyRedistributeOspfv3 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_external: cdktf.booleanToTerraform(struct!.matchExternal),
    match_external_1: cdktf.booleanToTerraform(struct!.matchExternal1),
    match_external_1_nssa_external: cdktf.booleanToTerraform(struct!.matchExternal1NssaExternal),
    match_external_1_nssa_external_1: cdktf.booleanToTerraform(struct!.matchExternal1NssaExternal1),
    match_external_1_nssa_external_2: cdktf.booleanToTerraform(struct!.matchExternal1NssaExternal2),
    match_external_2: cdktf.booleanToTerraform(struct!.matchExternal2),
    match_external_2_nssa_external: cdktf.booleanToTerraform(struct!.matchExternal2NssaExternal),
    match_external_2_nssa_external_1: cdktf.booleanToTerraform(struct!.matchExternal2NssaExternal1),
    match_external_2_nssa_external_2: cdktf.booleanToTerraform(struct!.matchExternal2NssaExternal2),
    match_external_nssa_external: cdktf.booleanToTerraform(struct!.matchExternalNssaExternal),
    match_external_nssa_external_1: cdktf.booleanToTerraform(struct!.matchExternalNssaExternal1),
    match_external_nssa_external_2: cdktf.booleanToTerraform(struct!.matchExternalNssaExternal2),
    match_internal: cdktf.booleanToTerraform(struct!.matchInternal),
    match_internal_external: cdktf.booleanToTerraform(struct!.matchInternalExternal),
    match_internal_external_1: cdktf.booleanToTerraform(struct!.matchInternalExternal1),
    match_internal_external_1_nssa_external: cdktf.booleanToTerraform(struct!.matchInternalExternal1NssaExternal),
    match_internal_external_1_nssa_external_1: cdktf.booleanToTerraform(struct!.matchInternalExternal1NssaExternal1),
    match_internal_external_1_nssa_external_2: cdktf.booleanToTerraform(struct!.matchInternalExternal1NssaExternal2),
    match_internal_external_2: cdktf.booleanToTerraform(struct!.matchInternalExternal2),
    match_internal_external_2_nssa_external: cdktf.booleanToTerraform(struct!.matchInternalExternal2NssaExternal),
    match_internal_external_2_nssa_external_1: cdktf.booleanToTerraform(struct!.matchInternalExternal2NssaExternal1),
    match_internal_external_2_nssa_external_2: cdktf.booleanToTerraform(struct!.matchInternalExternal2NssaExternal2),
    match_internal_external_nssa_external: cdktf.booleanToTerraform(struct!.matchInternalExternalNssaExternal),
    match_internal_external_nssa_external_1: cdktf.booleanToTerraform(struct!.matchInternalExternalNssaExternal1),
    match_internal_external_nssa_external_2: cdktf.booleanToTerraform(struct!.matchInternalExternalNssaExternal2),
    match_internal_nssa_external: cdktf.booleanToTerraform(struct!.matchInternalNssaExternal),
    match_internal_nssa_external_1: cdktf.booleanToTerraform(struct!.matchInternalNssaExternal1),
    match_internal_nssa_external_2: cdktf.booleanToTerraform(struct!.matchInternalNssaExternal2),
    match_nssa_external: cdktf.booleanToTerraform(struct!.matchNssaExternal),
    match_nssa_external_1: cdktf.booleanToTerraform(struct!.matchNssaExternal1),
    match_nssa_external_2: cdktf.booleanToTerraform(struct!.matchNssaExternal2),
    metric: cdktf.numberToTerraform(struct!.metric),
    multipath: cdktf.booleanToTerraform(struct!.multipath),
    route_policy: cdktf.stringToTerraform(struct!.routePolicy),
    router_tag: cdktf.stringToTerraform(struct!.routerTag),
  }
}


export function routerBgpVrfAddressFamilyRedistributeOspfv3ToHclTerraform(struct?: RouterBgpVrfAddressFamilyRedistributeOspfv3 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_external: {
      value: cdktf.booleanToHclTerraform(struct!.matchExternal),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match_external_1: {
      value: cdktf.booleanToHclTerraform(struct!.matchExternal1),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match_external_1_nssa_external: {
      value: cdktf.booleanToHclTerraform(struct!.matchExternal1NssaExternal),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match_external_1_nssa_external_1: {
      value: cdktf.booleanToHclTerraform(struct!.matchExternal1NssaExternal1),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match_external_1_nssa_external_2: {
      value: cdktf.booleanToHclTerraform(struct!.matchExternal1NssaExternal2),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match_external_2: {
      value: cdktf.booleanToHclTerraform(struct!.matchExternal2),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match_external_2_nssa_external: {
      value: cdktf.booleanToHclTerraform(struct!.matchExternal2NssaExternal),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match_external_2_nssa_external_1: {
      value: cdktf.booleanToHclTerraform(struct!.matchExternal2NssaExternal1),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match_external_2_nssa_external_2: {
      value: cdktf.booleanToHclTerraform(struct!.matchExternal2NssaExternal2),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match_external_nssa_external: {
      value: cdktf.booleanToHclTerraform(struct!.matchExternalNssaExternal),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match_external_nssa_external_1: {
      value: cdktf.booleanToHclTerraform(struct!.matchExternalNssaExternal1),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match_external_nssa_external_2: {
      value: cdktf.booleanToHclTerraform(struct!.matchExternalNssaExternal2),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match_internal: {
      value: cdktf.booleanToHclTerraform(struct!.matchInternal),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match_internal_external: {
      value: cdktf.booleanToHclTerraform(struct!.matchInternalExternal),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match_internal_external_1: {
      value: cdktf.booleanToHclTerraform(struct!.matchInternalExternal1),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match_internal_external_1_nssa_external: {
      value: cdktf.booleanToHclTerraform(struct!.matchInternalExternal1NssaExternal),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match_internal_external_1_nssa_external_1: {
      value: cdktf.booleanToHclTerraform(struct!.matchInternalExternal1NssaExternal1),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match_internal_external_1_nssa_external_2: {
      value: cdktf.booleanToHclTerraform(struct!.matchInternalExternal1NssaExternal2),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match_internal_external_2: {
      value: cdktf.booleanToHclTerraform(struct!.matchInternalExternal2),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match_internal_external_2_nssa_external: {
      value: cdktf.booleanToHclTerraform(struct!.matchInternalExternal2NssaExternal),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match_internal_external_2_nssa_external_1: {
      value: cdktf.booleanToHclTerraform(struct!.matchInternalExternal2NssaExternal1),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match_internal_external_2_nssa_external_2: {
      value: cdktf.booleanToHclTerraform(struct!.matchInternalExternal2NssaExternal2),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match_internal_external_nssa_external: {
      value: cdktf.booleanToHclTerraform(struct!.matchInternalExternalNssaExternal),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match_internal_external_nssa_external_1: {
      value: cdktf.booleanToHclTerraform(struct!.matchInternalExternalNssaExternal1),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match_internal_external_nssa_external_2: {
      value: cdktf.booleanToHclTerraform(struct!.matchInternalExternalNssaExternal2),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match_internal_nssa_external: {
      value: cdktf.booleanToHclTerraform(struct!.matchInternalNssaExternal),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match_internal_nssa_external_1: {
      value: cdktf.booleanToHclTerraform(struct!.matchInternalNssaExternal1),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match_internal_nssa_external_2: {
      value: cdktf.booleanToHclTerraform(struct!.matchInternalNssaExternal2),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match_nssa_external: {
      value: cdktf.booleanToHclTerraform(struct!.matchNssaExternal),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match_nssa_external_1: {
      value: cdktf.booleanToHclTerraform(struct!.matchNssaExternal1),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match_nssa_external_2: {
      value: cdktf.booleanToHclTerraform(struct!.matchNssaExternal2),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    metric: {
      value: cdktf.numberToHclTerraform(struct!.metric),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    multipath: {
      value: cdktf.booleanToHclTerraform(struct!.multipath),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    route_policy: {
      value: cdktf.stringToHclTerraform(struct!.routePolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    router_tag: {
      value: cdktf.stringToHclTerraform(struct!.routerTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterBgpVrfAddressFamilyRedistributeOspfv3OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterBgpVrfAddressFamilyRedistributeOspfv3 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExternal !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExternal = this._matchExternal;
    }
    if (this._matchExternal1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExternal1 = this._matchExternal1;
    }
    if (this._matchExternal1NssaExternal !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExternal1NssaExternal = this._matchExternal1NssaExternal;
    }
    if (this._matchExternal1NssaExternal1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExternal1NssaExternal1 = this._matchExternal1NssaExternal1;
    }
    if (this._matchExternal1NssaExternal2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExternal1NssaExternal2 = this._matchExternal1NssaExternal2;
    }
    if (this._matchExternal2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExternal2 = this._matchExternal2;
    }
    if (this._matchExternal2NssaExternal !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExternal2NssaExternal = this._matchExternal2NssaExternal;
    }
    if (this._matchExternal2NssaExternal1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExternal2NssaExternal1 = this._matchExternal2NssaExternal1;
    }
    if (this._matchExternal2NssaExternal2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExternal2NssaExternal2 = this._matchExternal2NssaExternal2;
    }
    if (this._matchExternalNssaExternal !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExternalNssaExternal = this._matchExternalNssaExternal;
    }
    if (this._matchExternalNssaExternal1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExternalNssaExternal1 = this._matchExternalNssaExternal1;
    }
    if (this._matchExternalNssaExternal2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExternalNssaExternal2 = this._matchExternalNssaExternal2;
    }
    if (this._matchInternal !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchInternal = this._matchInternal;
    }
    if (this._matchInternalExternal !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchInternalExternal = this._matchInternalExternal;
    }
    if (this._matchInternalExternal1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchInternalExternal1 = this._matchInternalExternal1;
    }
    if (this._matchInternalExternal1NssaExternal !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchInternalExternal1NssaExternal = this._matchInternalExternal1NssaExternal;
    }
    if (this._matchInternalExternal1NssaExternal1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchInternalExternal1NssaExternal1 = this._matchInternalExternal1NssaExternal1;
    }
    if (this._matchInternalExternal1NssaExternal2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchInternalExternal1NssaExternal2 = this._matchInternalExternal1NssaExternal2;
    }
    if (this._matchInternalExternal2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchInternalExternal2 = this._matchInternalExternal2;
    }
    if (this._matchInternalExternal2NssaExternal !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchInternalExternal2NssaExternal = this._matchInternalExternal2NssaExternal;
    }
    if (this._matchInternalExternal2NssaExternal1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchInternalExternal2NssaExternal1 = this._matchInternalExternal2NssaExternal1;
    }
    if (this._matchInternalExternal2NssaExternal2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchInternalExternal2NssaExternal2 = this._matchInternalExternal2NssaExternal2;
    }
    if (this._matchInternalExternalNssaExternal !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchInternalExternalNssaExternal = this._matchInternalExternalNssaExternal;
    }
    if (this._matchInternalExternalNssaExternal1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchInternalExternalNssaExternal1 = this._matchInternalExternalNssaExternal1;
    }
    if (this._matchInternalExternalNssaExternal2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchInternalExternalNssaExternal2 = this._matchInternalExternalNssaExternal2;
    }
    if (this._matchInternalNssaExternal !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchInternalNssaExternal = this._matchInternalNssaExternal;
    }
    if (this._matchInternalNssaExternal1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchInternalNssaExternal1 = this._matchInternalNssaExternal1;
    }
    if (this._matchInternalNssaExternal2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchInternalNssaExternal2 = this._matchInternalNssaExternal2;
    }
    if (this._matchNssaExternal !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchNssaExternal = this._matchNssaExternal;
    }
    if (this._matchNssaExternal1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchNssaExternal1 = this._matchNssaExternal1;
    }
    if (this._matchNssaExternal2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchNssaExternal2 = this._matchNssaExternal2;
    }
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    if (this._multipath !== undefined) {
      hasAnyValues = true;
      internalValueResult.multipath = this._multipath;
    }
    if (this._routePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.routePolicy = this._routePolicy;
    }
    if (this._routerTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.routerTag = this._routerTag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterBgpVrfAddressFamilyRedistributeOspfv3 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExternal = undefined;
      this._matchExternal1 = undefined;
      this._matchExternal1NssaExternal = undefined;
      this._matchExternal1NssaExternal1 = undefined;
      this._matchExternal1NssaExternal2 = undefined;
      this._matchExternal2 = undefined;
      this._matchExternal2NssaExternal = undefined;
      this._matchExternal2NssaExternal1 = undefined;
      this._matchExternal2NssaExternal2 = undefined;
      this._matchExternalNssaExternal = undefined;
      this._matchExternalNssaExternal1 = undefined;
      this._matchExternalNssaExternal2 = undefined;
      this._matchInternal = undefined;
      this._matchInternalExternal = undefined;
      this._matchInternalExternal1 = undefined;
      this._matchInternalExternal1NssaExternal = undefined;
      this._matchInternalExternal1NssaExternal1 = undefined;
      this._matchInternalExternal1NssaExternal2 = undefined;
      this._matchInternalExternal2 = undefined;
      this._matchInternalExternal2NssaExternal = undefined;
      this._matchInternalExternal2NssaExternal1 = undefined;
      this._matchInternalExternal2NssaExternal2 = undefined;
      this._matchInternalExternalNssaExternal = undefined;
      this._matchInternalExternalNssaExternal1 = undefined;
      this._matchInternalExternalNssaExternal2 = undefined;
      this._matchInternalNssaExternal = undefined;
      this._matchInternalNssaExternal1 = undefined;
      this._matchInternalNssaExternal2 = undefined;
      this._matchNssaExternal = undefined;
      this._matchNssaExternal1 = undefined;
      this._matchNssaExternal2 = undefined;
      this._metric = undefined;
      this._multipath = undefined;
      this._routePolicy = undefined;
      this._routerTag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExternal = value.matchExternal;
      this._matchExternal1 = value.matchExternal1;
      this._matchExternal1NssaExternal = value.matchExternal1NssaExternal;
      this._matchExternal1NssaExternal1 = value.matchExternal1NssaExternal1;
      this._matchExternal1NssaExternal2 = value.matchExternal1NssaExternal2;
      this._matchExternal2 = value.matchExternal2;
      this._matchExternal2NssaExternal = value.matchExternal2NssaExternal;
      this._matchExternal2NssaExternal1 = value.matchExternal2NssaExternal1;
      this._matchExternal2NssaExternal2 = value.matchExternal2NssaExternal2;
      this._matchExternalNssaExternal = value.matchExternalNssaExternal;
      this._matchExternalNssaExternal1 = value.matchExternalNssaExternal1;
      this._matchExternalNssaExternal2 = value.matchExternalNssaExternal2;
      this._matchInternal = value.matchInternal;
      this._matchInternalExternal = value.matchInternalExternal;
      this._matchInternalExternal1 = value.matchInternalExternal1;
      this._matchInternalExternal1NssaExternal = value.matchInternalExternal1NssaExternal;
      this._matchInternalExternal1NssaExternal1 = value.matchInternalExternal1NssaExternal1;
      this._matchInternalExternal1NssaExternal2 = value.matchInternalExternal1NssaExternal2;
      this._matchInternalExternal2 = value.matchInternalExternal2;
      this._matchInternalExternal2NssaExternal = value.matchInternalExternal2NssaExternal;
      this._matchInternalExternal2NssaExternal1 = value.matchInternalExternal2NssaExternal1;
      this._matchInternalExternal2NssaExternal2 = value.matchInternalExternal2NssaExternal2;
      this._matchInternalExternalNssaExternal = value.matchInternalExternalNssaExternal;
      this._matchInternalExternalNssaExternal1 = value.matchInternalExternalNssaExternal1;
      this._matchInternalExternalNssaExternal2 = value.matchInternalExternalNssaExternal2;
      this._matchInternalNssaExternal = value.matchInternalNssaExternal;
      this._matchInternalNssaExternal1 = value.matchInternalNssaExternal1;
      this._matchInternalNssaExternal2 = value.matchInternalNssaExternal2;
      this._matchNssaExternal = value.matchNssaExternal;
      this._matchNssaExternal1 = value.matchNssaExternal1;
      this._matchNssaExternal2 = value.matchNssaExternal2;
      this._metric = value.metric;
      this._multipath = value.multipath;
      this._routePolicy = value.routePolicy;
      this._routerTag = value.routerTag;
    }
  }

  // match_external - computed: false, optional: true, required: false
  private _matchExternal?: boolean | cdktf.IResolvable; 
  public get matchExternal() {
    return this.getBooleanAttribute('match_external');
  }
  public set matchExternal(value: boolean | cdktf.IResolvable) {
    this._matchExternal = value;
  }
  public resetMatchExternal() {
    this._matchExternal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExternalInput() {
    return this._matchExternal;
  }

  // match_external_1 - computed: false, optional: true, required: false
  private _matchExternal1?: boolean | cdktf.IResolvable; 
  public get matchExternal1() {
    return this.getBooleanAttribute('match_external_1');
  }
  public set matchExternal1(value: boolean | cdktf.IResolvable) {
    this._matchExternal1 = value;
  }
  public resetMatchExternal1() {
    this._matchExternal1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExternal1Input() {
    return this._matchExternal1;
  }

  // match_external_1_nssa_external - computed: false, optional: true, required: false
  private _matchExternal1NssaExternal?: boolean | cdktf.IResolvable; 
  public get matchExternal1NssaExternal() {
    return this.getBooleanAttribute('match_external_1_nssa_external');
  }
  public set matchExternal1NssaExternal(value: boolean | cdktf.IResolvable) {
    this._matchExternal1NssaExternal = value;
  }
  public resetMatchExternal1NssaExternal() {
    this._matchExternal1NssaExternal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExternal1NssaExternalInput() {
    return this._matchExternal1NssaExternal;
  }

  // match_external_1_nssa_external_1 - computed: false, optional: true, required: false
  private _matchExternal1NssaExternal1?: boolean | cdktf.IResolvable; 
  public get matchExternal1NssaExternal1() {
    return this.getBooleanAttribute('match_external_1_nssa_external_1');
  }
  public set matchExternal1NssaExternal1(value: boolean | cdktf.IResolvable) {
    this._matchExternal1NssaExternal1 = value;
  }
  public resetMatchExternal1NssaExternal1() {
    this._matchExternal1NssaExternal1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExternal1NssaExternal1Input() {
    return this._matchExternal1NssaExternal1;
  }

  // match_external_1_nssa_external_2 - computed: false, optional: true, required: false
  private _matchExternal1NssaExternal2?: boolean | cdktf.IResolvable; 
  public get matchExternal1NssaExternal2() {
    return this.getBooleanAttribute('match_external_1_nssa_external_2');
  }
  public set matchExternal1NssaExternal2(value: boolean | cdktf.IResolvable) {
    this._matchExternal1NssaExternal2 = value;
  }
  public resetMatchExternal1NssaExternal2() {
    this._matchExternal1NssaExternal2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExternal1NssaExternal2Input() {
    return this._matchExternal1NssaExternal2;
  }

  // match_external_2 - computed: false, optional: true, required: false
  private _matchExternal2?: boolean | cdktf.IResolvable; 
  public get matchExternal2() {
    return this.getBooleanAttribute('match_external_2');
  }
  public set matchExternal2(value: boolean | cdktf.IResolvable) {
    this._matchExternal2 = value;
  }
  public resetMatchExternal2() {
    this._matchExternal2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExternal2Input() {
    return this._matchExternal2;
  }

  // match_external_2_nssa_external - computed: false, optional: true, required: false
  private _matchExternal2NssaExternal?: boolean | cdktf.IResolvable; 
  public get matchExternal2NssaExternal() {
    return this.getBooleanAttribute('match_external_2_nssa_external');
  }
  public set matchExternal2NssaExternal(value: boolean | cdktf.IResolvable) {
    this._matchExternal2NssaExternal = value;
  }
  public resetMatchExternal2NssaExternal() {
    this._matchExternal2NssaExternal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExternal2NssaExternalInput() {
    return this._matchExternal2NssaExternal;
  }

  // match_external_2_nssa_external_1 - computed: false, optional: true, required: false
  private _matchExternal2NssaExternal1?: boolean | cdktf.IResolvable; 
  public get matchExternal2NssaExternal1() {
    return this.getBooleanAttribute('match_external_2_nssa_external_1');
  }
  public set matchExternal2NssaExternal1(value: boolean | cdktf.IResolvable) {
    this._matchExternal2NssaExternal1 = value;
  }
  public resetMatchExternal2NssaExternal1() {
    this._matchExternal2NssaExternal1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExternal2NssaExternal1Input() {
    return this._matchExternal2NssaExternal1;
  }

  // match_external_2_nssa_external_2 - computed: false, optional: true, required: false
  private _matchExternal2NssaExternal2?: boolean | cdktf.IResolvable; 
  public get matchExternal2NssaExternal2() {
    return this.getBooleanAttribute('match_external_2_nssa_external_2');
  }
  public set matchExternal2NssaExternal2(value: boolean | cdktf.IResolvable) {
    this._matchExternal2NssaExternal2 = value;
  }
  public resetMatchExternal2NssaExternal2() {
    this._matchExternal2NssaExternal2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExternal2NssaExternal2Input() {
    return this._matchExternal2NssaExternal2;
  }

  // match_external_nssa_external - computed: false, optional: true, required: false
  private _matchExternalNssaExternal?: boolean | cdktf.IResolvable; 
  public get matchExternalNssaExternal() {
    return this.getBooleanAttribute('match_external_nssa_external');
  }
  public set matchExternalNssaExternal(value: boolean | cdktf.IResolvable) {
    this._matchExternalNssaExternal = value;
  }
  public resetMatchExternalNssaExternal() {
    this._matchExternalNssaExternal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExternalNssaExternalInput() {
    return this._matchExternalNssaExternal;
  }

  // match_external_nssa_external_1 - computed: false, optional: true, required: false
  private _matchExternalNssaExternal1?: boolean | cdktf.IResolvable; 
  public get matchExternalNssaExternal1() {
    return this.getBooleanAttribute('match_external_nssa_external_1');
  }
  public set matchExternalNssaExternal1(value: boolean | cdktf.IResolvable) {
    this._matchExternalNssaExternal1 = value;
  }
  public resetMatchExternalNssaExternal1() {
    this._matchExternalNssaExternal1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExternalNssaExternal1Input() {
    return this._matchExternalNssaExternal1;
  }

  // match_external_nssa_external_2 - computed: false, optional: true, required: false
  private _matchExternalNssaExternal2?: boolean | cdktf.IResolvable; 
  public get matchExternalNssaExternal2() {
    return this.getBooleanAttribute('match_external_nssa_external_2');
  }
  public set matchExternalNssaExternal2(value: boolean | cdktf.IResolvable) {
    this._matchExternalNssaExternal2 = value;
  }
  public resetMatchExternalNssaExternal2() {
    this._matchExternalNssaExternal2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExternalNssaExternal2Input() {
    return this._matchExternalNssaExternal2;
  }

  // match_internal - computed: false, optional: true, required: false
  private _matchInternal?: boolean | cdktf.IResolvable; 
  public get matchInternal() {
    return this.getBooleanAttribute('match_internal');
  }
  public set matchInternal(value: boolean | cdktf.IResolvable) {
    this._matchInternal = value;
  }
  public resetMatchInternal() {
    this._matchInternal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInternalInput() {
    return this._matchInternal;
  }

  // match_internal_external - computed: false, optional: true, required: false
  private _matchInternalExternal?: boolean | cdktf.IResolvable; 
  public get matchInternalExternal() {
    return this.getBooleanAttribute('match_internal_external');
  }
  public set matchInternalExternal(value: boolean | cdktf.IResolvable) {
    this._matchInternalExternal = value;
  }
  public resetMatchInternalExternal() {
    this._matchInternalExternal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInternalExternalInput() {
    return this._matchInternalExternal;
  }

  // match_internal_external_1 - computed: false, optional: true, required: false
  private _matchInternalExternal1?: boolean | cdktf.IResolvable; 
  public get matchInternalExternal1() {
    return this.getBooleanAttribute('match_internal_external_1');
  }
  public set matchInternalExternal1(value: boolean | cdktf.IResolvable) {
    this._matchInternalExternal1 = value;
  }
  public resetMatchInternalExternal1() {
    this._matchInternalExternal1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInternalExternal1Input() {
    return this._matchInternalExternal1;
  }

  // match_internal_external_1_nssa_external - computed: false, optional: true, required: false
  private _matchInternalExternal1NssaExternal?: boolean | cdktf.IResolvable; 
  public get matchInternalExternal1NssaExternal() {
    return this.getBooleanAttribute('match_internal_external_1_nssa_external');
  }
  public set matchInternalExternal1NssaExternal(value: boolean | cdktf.IResolvable) {
    this._matchInternalExternal1NssaExternal = value;
  }
  public resetMatchInternalExternal1NssaExternal() {
    this._matchInternalExternal1NssaExternal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInternalExternal1NssaExternalInput() {
    return this._matchInternalExternal1NssaExternal;
  }

  // match_internal_external_1_nssa_external_1 - computed: false, optional: true, required: false
  private _matchInternalExternal1NssaExternal1?: boolean | cdktf.IResolvable; 
  public get matchInternalExternal1NssaExternal1() {
    return this.getBooleanAttribute('match_internal_external_1_nssa_external_1');
  }
  public set matchInternalExternal1NssaExternal1(value: boolean | cdktf.IResolvable) {
    this._matchInternalExternal1NssaExternal1 = value;
  }
  public resetMatchInternalExternal1NssaExternal1() {
    this._matchInternalExternal1NssaExternal1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInternalExternal1NssaExternal1Input() {
    return this._matchInternalExternal1NssaExternal1;
  }

  // match_internal_external_1_nssa_external_2 - computed: false, optional: true, required: false
  private _matchInternalExternal1NssaExternal2?: boolean | cdktf.IResolvable; 
  public get matchInternalExternal1NssaExternal2() {
    return this.getBooleanAttribute('match_internal_external_1_nssa_external_2');
  }
  public set matchInternalExternal1NssaExternal2(value: boolean | cdktf.IResolvable) {
    this._matchInternalExternal1NssaExternal2 = value;
  }
  public resetMatchInternalExternal1NssaExternal2() {
    this._matchInternalExternal1NssaExternal2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInternalExternal1NssaExternal2Input() {
    return this._matchInternalExternal1NssaExternal2;
  }

  // match_internal_external_2 - computed: false, optional: true, required: false
  private _matchInternalExternal2?: boolean | cdktf.IResolvable; 
  public get matchInternalExternal2() {
    return this.getBooleanAttribute('match_internal_external_2');
  }
  public set matchInternalExternal2(value: boolean | cdktf.IResolvable) {
    this._matchInternalExternal2 = value;
  }
  public resetMatchInternalExternal2() {
    this._matchInternalExternal2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInternalExternal2Input() {
    return this._matchInternalExternal2;
  }

  // match_internal_external_2_nssa_external - computed: false, optional: true, required: false
  private _matchInternalExternal2NssaExternal?: boolean | cdktf.IResolvable; 
  public get matchInternalExternal2NssaExternal() {
    return this.getBooleanAttribute('match_internal_external_2_nssa_external');
  }
  public set matchInternalExternal2NssaExternal(value: boolean | cdktf.IResolvable) {
    this._matchInternalExternal2NssaExternal = value;
  }
  public resetMatchInternalExternal2NssaExternal() {
    this._matchInternalExternal2NssaExternal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInternalExternal2NssaExternalInput() {
    return this._matchInternalExternal2NssaExternal;
  }

  // match_internal_external_2_nssa_external_1 - computed: false, optional: true, required: false
  private _matchInternalExternal2NssaExternal1?: boolean | cdktf.IResolvable; 
  public get matchInternalExternal2NssaExternal1() {
    return this.getBooleanAttribute('match_internal_external_2_nssa_external_1');
  }
  public set matchInternalExternal2NssaExternal1(value: boolean | cdktf.IResolvable) {
    this._matchInternalExternal2NssaExternal1 = value;
  }
  public resetMatchInternalExternal2NssaExternal1() {
    this._matchInternalExternal2NssaExternal1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInternalExternal2NssaExternal1Input() {
    return this._matchInternalExternal2NssaExternal1;
  }

  // match_internal_external_2_nssa_external_2 - computed: false, optional: true, required: false
  private _matchInternalExternal2NssaExternal2?: boolean | cdktf.IResolvable; 
  public get matchInternalExternal2NssaExternal2() {
    return this.getBooleanAttribute('match_internal_external_2_nssa_external_2');
  }
  public set matchInternalExternal2NssaExternal2(value: boolean | cdktf.IResolvable) {
    this._matchInternalExternal2NssaExternal2 = value;
  }
  public resetMatchInternalExternal2NssaExternal2() {
    this._matchInternalExternal2NssaExternal2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInternalExternal2NssaExternal2Input() {
    return this._matchInternalExternal2NssaExternal2;
  }

  // match_internal_external_nssa_external - computed: false, optional: true, required: false
  private _matchInternalExternalNssaExternal?: boolean | cdktf.IResolvable; 
  public get matchInternalExternalNssaExternal() {
    return this.getBooleanAttribute('match_internal_external_nssa_external');
  }
  public set matchInternalExternalNssaExternal(value: boolean | cdktf.IResolvable) {
    this._matchInternalExternalNssaExternal = value;
  }
  public resetMatchInternalExternalNssaExternal() {
    this._matchInternalExternalNssaExternal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInternalExternalNssaExternalInput() {
    return this._matchInternalExternalNssaExternal;
  }

  // match_internal_external_nssa_external_1 - computed: false, optional: true, required: false
  private _matchInternalExternalNssaExternal1?: boolean | cdktf.IResolvable; 
  public get matchInternalExternalNssaExternal1() {
    return this.getBooleanAttribute('match_internal_external_nssa_external_1');
  }
  public set matchInternalExternalNssaExternal1(value: boolean | cdktf.IResolvable) {
    this._matchInternalExternalNssaExternal1 = value;
  }
  public resetMatchInternalExternalNssaExternal1() {
    this._matchInternalExternalNssaExternal1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInternalExternalNssaExternal1Input() {
    return this._matchInternalExternalNssaExternal1;
  }

  // match_internal_external_nssa_external_2 - computed: false, optional: true, required: false
  private _matchInternalExternalNssaExternal2?: boolean | cdktf.IResolvable; 
  public get matchInternalExternalNssaExternal2() {
    return this.getBooleanAttribute('match_internal_external_nssa_external_2');
  }
  public set matchInternalExternalNssaExternal2(value: boolean | cdktf.IResolvable) {
    this._matchInternalExternalNssaExternal2 = value;
  }
  public resetMatchInternalExternalNssaExternal2() {
    this._matchInternalExternalNssaExternal2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInternalExternalNssaExternal2Input() {
    return this._matchInternalExternalNssaExternal2;
  }

  // match_internal_nssa_external - computed: false, optional: true, required: false
  private _matchInternalNssaExternal?: boolean | cdktf.IResolvable; 
  public get matchInternalNssaExternal() {
    return this.getBooleanAttribute('match_internal_nssa_external');
  }
  public set matchInternalNssaExternal(value: boolean | cdktf.IResolvable) {
    this._matchInternalNssaExternal = value;
  }
  public resetMatchInternalNssaExternal() {
    this._matchInternalNssaExternal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInternalNssaExternalInput() {
    return this._matchInternalNssaExternal;
  }

  // match_internal_nssa_external_1 - computed: false, optional: true, required: false
  private _matchInternalNssaExternal1?: boolean | cdktf.IResolvable; 
  public get matchInternalNssaExternal1() {
    return this.getBooleanAttribute('match_internal_nssa_external_1');
  }
  public set matchInternalNssaExternal1(value: boolean | cdktf.IResolvable) {
    this._matchInternalNssaExternal1 = value;
  }
  public resetMatchInternalNssaExternal1() {
    this._matchInternalNssaExternal1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInternalNssaExternal1Input() {
    return this._matchInternalNssaExternal1;
  }

  // match_internal_nssa_external_2 - computed: false, optional: true, required: false
  private _matchInternalNssaExternal2?: boolean | cdktf.IResolvable; 
  public get matchInternalNssaExternal2() {
    return this.getBooleanAttribute('match_internal_nssa_external_2');
  }
  public set matchInternalNssaExternal2(value: boolean | cdktf.IResolvable) {
    this._matchInternalNssaExternal2 = value;
  }
  public resetMatchInternalNssaExternal2() {
    this._matchInternalNssaExternal2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInternalNssaExternal2Input() {
    return this._matchInternalNssaExternal2;
  }

  // match_nssa_external - computed: false, optional: true, required: false
  private _matchNssaExternal?: boolean | cdktf.IResolvable; 
  public get matchNssaExternal() {
    return this.getBooleanAttribute('match_nssa_external');
  }
  public set matchNssaExternal(value: boolean | cdktf.IResolvable) {
    this._matchNssaExternal = value;
  }
  public resetMatchNssaExternal() {
    this._matchNssaExternal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchNssaExternalInput() {
    return this._matchNssaExternal;
  }

  // match_nssa_external_1 - computed: false, optional: true, required: false
  private _matchNssaExternal1?: boolean | cdktf.IResolvable; 
  public get matchNssaExternal1() {
    return this.getBooleanAttribute('match_nssa_external_1');
  }
  public set matchNssaExternal1(value: boolean | cdktf.IResolvable) {
    this._matchNssaExternal1 = value;
  }
  public resetMatchNssaExternal1() {
    this._matchNssaExternal1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchNssaExternal1Input() {
    return this._matchNssaExternal1;
  }

  // match_nssa_external_2 - computed: false, optional: true, required: false
  private _matchNssaExternal2?: boolean | cdktf.IResolvable; 
  public get matchNssaExternal2() {
    return this.getBooleanAttribute('match_nssa_external_2');
  }
  public set matchNssaExternal2(value: boolean | cdktf.IResolvable) {
    this._matchNssaExternal2 = value;
  }
  public resetMatchNssaExternal2() {
    this._matchNssaExternal2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchNssaExternal2Input() {
    return this._matchNssaExternal2;
  }

  // metric - computed: false, optional: true, required: false
  private _metric?: number; 
  public get metric() {
    return this.getNumberAttribute('metric');
  }
  public set metric(value: number) {
    this._metric = value;
  }
  public resetMetric() {
    this._metric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric;
  }

  // multipath - computed: false, optional: true, required: false
  private _multipath?: boolean | cdktf.IResolvable; 
  public get multipath() {
    return this.getBooleanAttribute('multipath');
  }
  public set multipath(value: boolean | cdktf.IResolvable) {
    this._multipath = value;
  }
  public resetMultipath() {
    this._multipath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multipathInput() {
    return this._multipath;
  }

  // route_policy - computed: false, optional: true, required: false
  private _routePolicy?: string; 
  public get routePolicy() {
    return this.getStringAttribute('route_policy');
  }
  public set routePolicy(value: string) {
    this._routePolicy = value;
  }
  public resetRoutePolicy() {
    this._routePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routePolicyInput() {
    return this._routePolicy;
  }

  // router_tag - computed: false, optional: false, required: true
  private _routerTag?: string; 
  public get routerTag() {
    return this.getStringAttribute('router_tag');
  }
  public set routerTag(value: string) {
    this._routerTag = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routerTagInput() {
    return this._routerTag;
  }
}

export class RouterBgpVrfAddressFamilyRedistributeOspfv3List extends cdktf.ComplexList {
  public internalValue? : RouterBgpVrfAddressFamilyRedistributeOspfv3[] | cdktf.IResolvable

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
  public get(index: number): RouterBgpVrfAddressFamilyRedistributeOspfv3OutputReference {
    return new RouterBgpVrfAddressFamilyRedistributeOspfv3OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family iosxr_router_bgp_vrf_address_family}
*/
export class RouterBgpVrfAddressFamily extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxr_router_bgp_vrf_address_family";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RouterBgpVrfAddressFamily resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RouterBgpVrfAddressFamily to import
  * @param importFromId The id of the existing RouterBgpVrfAddressFamily that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RouterBgpVrfAddressFamily to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxr_router_bgp_vrf_address_family", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_address_family iosxr_router_bgp_vrf_address_family} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RouterBgpVrfAddressFamilyConfig
  */
  public constructor(scope: Construct, id: string, config: RouterBgpVrfAddressFamilyConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxr_router_bgp_vrf_address_family',
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
    this._additionalPathsReceive = config.additionalPathsReceive;
    this._additionalPathsReceiveDisable = config.additionalPathsReceiveDisable;
    this._additionalPathsSelectionDisable = config.additionalPathsSelectionDisable;
    this._additionalPathsSelectionRoutePolicy = config.additionalPathsSelectionRoutePolicy;
    this._additionalPathsSend = config.additionalPathsSend;
    this._additionalPathsSendDisable = config.additionalPathsSendDisable;
    this._advertiseBestExternal = config.advertiseBestExternal;
    this._afName = config.afName;
    this._aggregateAddresses.internalValue = config.aggregateAddresses;
    this._allocateLabelAll = config.allocateLabelAll;
    this._allocateLabelAllUnlabeledPath = config.allocateLabelAllUnlabeledPath;
    this._allocateLabelRoutePolicyName = config.allocateLabelRoutePolicyName;
    this._allocateLabelRoutePolicyUnlabeledPath = config.allocateLabelRoutePolicyUnlabeledPath;
    this._asNumber = config.asNumber;
    this._deleteMode = config.deleteMode;
    this._device = config.device;
    this._labelModePerCe = config.labelModePerCe;
    this._labelModePerNexthopReceivedLabel = config.labelModePerNexthopReceivedLabel;
    this._labelModePerNexthopReceivedLabelAllocateSecondaryLabel = config.labelModePerNexthopReceivedLabelAllocateSecondaryLabel;
    this._labelModePerPrefix = config.labelModePerPrefix;
    this._labelModePerVrf = config.labelModePerVrf;
    this._labelModePerVrf46 = config.labelModePerVrf46;
    this._labelModeRoutePolicy = config.labelModeRoutePolicy;
    this._maximumPathsEbgpMultipath = config.maximumPathsEbgpMultipath;
    this._maximumPathsEbgpRoutePolicy = config.maximumPathsEbgpRoutePolicy;
    this._maximumPathsEbgpSelective = config.maximumPathsEbgpSelective;
    this._maximumPathsEibgpEqualCost = config.maximumPathsEibgpEqualCost;
    this._maximumPathsEibgpMultipath = config.maximumPathsEibgpMultipath;
    this._maximumPathsEibgpRoutePolicy = config.maximumPathsEibgpRoutePolicy;
    this._maximumPathsEibgpSelective = config.maximumPathsEibgpSelective;
    this._maximumPathsIbgpMultipath = config.maximumPathsIbgpMultipath;
    this._maximumPathsIbgpRoutePolicy = config.maximumPathsIbgpRoutePolicy;
    this._maximumPathsIbgpSelective = config.maximumPathsIbgpSelective;
    this._maximumPathsIbgpUnequalCost = config.maximumPathsIbgpUnequalCost;
    this._maximumPathsIbgpUnequalCostDeterministic = config.maximumPathsIbgpUnequalCostDeterministic;
    this._maximumPathsUniqueNexthopCheckDisable = config.maximumPathsUniqueNexthopCheckDisable;
    this._networks.internalValue = config.networks;
    this._redistributeConnected = config.redistributeConnected;
    this._redistributeConnectedMetric = config.redistributeConnectedMetric;
    this._redistributeConnectedMultipath = config.redistributeConnectedMultipath;
    this._redistributeConnectedRoutePolicy = config.redistributeConnectedRoutePolicy;
    this._redistributeEigrp.internalValue = config.redistributeEigrp;
    this._redistributeIsis.internalValue = config.redistributeIsis;
    this._redistributeOspf.internalValue = config.redistributeOspf;
    this._redistributeOspfv3.internalValue = config.redistributeOspfv3;
    this._redistributeRip = config.redistributeRip;
    this._redistributeRipMetric = config.redistributeRipMetric;
    this._redistributeRipMultipath = config.redistributeRipMultipath;
    this._redistributeRipRoutePolicy = config.redistributeRipRoutePolicy;
    this._redistributeStatic = config.redistributeStatic;
    this._redistributeStaticMetric = config.redistributeStaticMetric;
    this._redistributeStaticMultipath = config.redistributeStaticMultipath;
    this._redistributeStaticRoutePolicy = config.redistributeStaticRoutePolicy;
    this._segmentRoutingSrv6AllocModePerCe = config.segmentRoutingSrv6AllocModePerCe;
    this._segmentRoutingSrv6AllocModePerVrf = config.segmentRoutingSrv6AllocModePerVrf;
    this._segmentRoutingSrv6AllocModePerVrf46 = config.segmentRoutingSrv6AllocModePerVrf46;
    this._segmentRoutingSrv6AllocModeRoutePolicy = config.segmentRoutingSrv6AllocModeRoutePolicy;
    this._segmentRoutingSrv6Locator = config.segmentRoutingSrv6Locator;
    this._vrfName = config.vrfName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_paths_receive - computed: false, optional: true, required: false
  private _additionalPathsReceive?: boolean | cdktf.IResolvable; 
  public get additionalPathsReceive() {
    return this.getBooleanAttribute('additional_paths_receive');
  }
  public set additionalPathsReceive(value: boolean | cdktf.IResolvable) {
    this._additionalPathsReceive = value;
  }
  public resetAdditionalPathsReceive() {
    this._additionalPathsReceive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPathsReceiveInput() {
    return this._additionalPathsReceive;
  }

  // additional_paths_receive_disable - computed: false, optional: true, required: false
  private _additionalPathsReceiveDisable?: boolean | cdktf.IResolvable; 
  public get additionalPathsReceiveDisable() {
    return this.getBooleanAttribute('additional_paths_receive_disable');
  }
  public set additionalPathsReceiveDisable(value: boolean | cdktf.IResolvable) {
    this._additionalPathsReceiveDisable = value;
  }
  public resetAdditionalPathsReceiveDisable() {
    this._additionalPathsReceiveDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPathsReceiveDisableInput() {
    return this._additionalPathsReceiveDisable;
  }

  // additional_paths_selection_disable - computed: false, optional: true, required: false
  private _additionalPathsSelectionDisable?: boolean | cdktf.IResolvable; 
  public get additionalPathsSelectionDisable() {
    return this.getBooleanAttribute('additional_paths_selection_disable');
  }
  public set additionalPathsSelectionDisable(value: boolean | cdktf.IResolvable) {
    this._additionalPathsSelectionDisable = value;
  }
  public resetAdditionalPathsSelectionDisable() {
    this._additionalPathsSelectionDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPathsSelectionDisableInput() {
    return this._additionalPathsSelectionDisable;
  }

  // additional_paths_selection_route_policy - computed: false, optional: true, required: false
  private _additionalPathsSelectionRoutePolicy?: string; 
  public get additionalPathsSelectionRoutePolicy() {
    return this.getStringAttribute('additional_paths_selection_route_policy');
  }
  public set additionalPathsSelectionRoutePolicy(value: string) {
    this._additionalPathsSelectionRoutePolicy = value;
  }
  public resetAdditionalPathsSelectionRoutePolicy() {
    this._additionalPathsSelectionRoutePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPathsSelectionRoutePolicyInput() {
    return this._additionalPathsSelectionRoutePolicy;
  }

  // additional_paths_send - computed: false, optional: true, required: false
  private _additionalPathsSend?: boolean | cdktf.IResolvable; 
  public get additionalPathsSend() {
    return this.getBooleanAttribute('additional_paths_send');
  }
  public set additionalPathsSend(value: boolean | cdktf.IResolvable) {
    this._additionalPathsSend = value;
  }
  public resetAdditionalPathsSend() {
    this._additionalPathsSend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPathsSendInput() {
    return this._additionalPathsSend;
  }

  // additional_paths_send_disable - computed: false, optional: true, required: false
  private _additionalPathsSendDisable?: boolean | cdktf.IResolvable; 
  public get additionalPathsSendDisable() {
    return this.getBooleanAttribute('additional_paths_send_disable');
  }
  public set additionalPathsSendDisable(value: boolean | cdktf.IResolvable) {
    this._additionalPathsSendDisable = value;
  }
  public resetAdditionalPathsSendDisable() {
    this._additionalPathsSendDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPathsSendDisableInput() {
    return this._additionalPathsSendDisable;
  }

  // advertise_best_external - computed: false, optional: true, required: false
  private _advertiseBestExternal?: boolean | cdktf.IResolvable; 
  public get advertiseBestExternal() {
    return this.getBooleanAttribute('advertise_best_external');
  }
  public set advertiseBestExternal(value: boolean | cdktf.IResolvable) {
    this._advertiseBestExternal = value;
  }
  public resetAdvertiseBestExternal() {
    this._advertiseBestExternal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseBestExternalInput() {
    return this._advertiseBestExternal;
  }

  // af_name - computed: false, optional: false, required: true
  private _afName?: string; 
  public get afName() {
    return this.getStringAttribute('af_name');
  }
  public set afName(value: string) {
    this._afName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get afNameInput() {
    return this._afName;
  }

  // aggregate_addresses - computed: false, optional: true, required: false
  private _aggregateAddresses = new RouterBgpVrfAddressFamilyAggregateAddressesList(this, "aggregate_addresses", false);
  public get aggregateAddresses() {
    return this._aggregateAddresses;
  }
  public putAggregateAddresses(value: RouterBgpVrfAddressFamilyAggregateAddresses[] | cdktf.IResolvable) {
    this._aggregateAddresses.internalValue = value;
  }
  public resetAggregateAddresses() {
    this._aggregateAddresses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregateAddressesInput() {
    return this._aggregateAddresses.internalValue;
  }

  // allocate_label_all - computed: false, optional: true, required: false
  private _allocateLabelAll?: boolean | cdktf.IResolvable; 
  public get allocateLabelAll() {
    return this.getBooleanAttribute('allocate_label_all');
  }
  public set allocateLabelAll(value: boolean | cdktf.IResolvable) {
    this._allocateLabelAll = value;
  }
  public resetAllocateLabelAll() {
    this._allocateLabelAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocateLabelAllInput() {
    return this._allocateLabelAll;
  }

  // allocate_label_all_unlabeled_path - computed: false, optional: true, required: false
  private _allocateLabelAllUnlabeledPath?: boolean | cdktf.IResolvable; 
  public get allocateLabelAllUnlabeledPath() {
    return this.getBooleanAttribute('allocate_label_all_unlabeled_path');
  }
  public set allocateLabelAllUnlabeledPath(value: boolean | cdktf.IResolvable) {
    this._allocateLabelAllUnlabeledPath = value;
  }
  public resetAllocateLabelAllUnlabeledPath() {
    this._allocateLabelAllUnlabeledPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocateLabelAllUnlabeledPathInput() {
    return this._allocateLabelAllUnlabeledPath;
  }

  // allocate_label_route_policy_name - computed: false, optional: true, required: false
  private _allocateLabelRoutePolicyName?: string; 
  public get allocateLabelRoutePolicyName() {
    return this.getStringAttribute('allocate_label_route_policy_name');
  }
  public set allocateLabelRoutePolicyName(value: string) {
    this._allocateLabelRoutePolicyName = value;
  }
  public resetAllocateLabelRoutePolicyName() {
    this._allocateLabelRoutePolicyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocateLabelRoutePolicyNameInput() {
    return this._allocateLabelRoutePolicyName;
  }

  // allocate_label_route_policy_unlabeled_path - computed: false, optional: true, required: false
  private _allocateLabelRoutePolicyUnlabeledPath?: boolean | cdktf.IResolvable; 
  public get allocateLabelRoutePolicyUnlabeledPath() {
    return this.getBooleanAttribute('allocate_label_route_policy_unlabeled_path');
  }
  public set allocateLabelRoutePolicyUnlabeledPath(value: boolean | cdktf.IResolvable) {
    this._allocateLabelRoutePolicyUnlabeledPath = value;
  }
  public resetAllocateLabelRoutePolicyUnlabeledPath() {
    this._allocateLabelRoutePolicyUnlabeledPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocateLabelRoutePolicyUnlabeledPathInput() {
    return this._allocateLabelRoutePolicyUnlabeledPath;
  }

  // as_number - computed: false, optional: false, required: true
  private _asNumber?: string; 
  public get asNumber() {
    return this.getStringAttribute('as_number');
  }
  public set asNumber(value: string) {
    this._asNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get asNumberInput() {
    return this._asNumber;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // label_mode_per_ce - computed: false, optional: true, required: false
  private _labelModePerCe?: boolean | cdktf.IResolvable; 
  public get labelModePerCe() {
    return this.getBooleanAttribute('label_mode_per_ce');
  }
  public set labelModePerCe(value: boolean | cdktf.IResolvable) {
    this._labelModePerCe = value;
  }
  public resetLabelModePerCe() {
    this._labelModePerCe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelModePerCeInput() {
    return this._labelModePerCe;
  }

  // label_mode_per_nexthop_received_label - computed: false, optional: true, required: false
  private _labelModePerNexthopReceivedLabel?: boolean | cdktf.IResolvable; 
  public get labelModePerNexthopReceivedLabel() {
    return this.getBooleanAttribute('label_mode_per_nexthop_received_label');
  }
  public set labelModePerNexthopReceivedLabel(value: boolean | cdktf.IResolvable) {
    this._labelModePerNexthopReceivedLabel = value;
  }
  public resetLabelModePerNexthopReceivedLabel() {
    this._labelModePerNexthopReceivedLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelModePerNexthopReceivedLabelInput() {
    return this._labelModePerNexthopReceivedLabel;
  }

  // label_mode_per_nexthop_received_label_allocate_secondary_label - computed: false, optional: true, required: false
  private _labelModePerNexthopReceivedLabelAllocateSecondaryLabel?: boolean | cdktf.IResolvable; 
  public get labelModePerNexthopReceivedLabelAllocateSecondaryLabel() {
    return this.getBooleanAttribute('label_mode_per_nexthop_received_label_allocate_secondary_label');
  }
  public set labelModePerNexthopReceivedLabelAllocateSecondaryLabel(value: boolean | cdktf.IResolvable) {
    this._labelModePerNexthopReceivedLabelAllocateSecondaryLabel = value;
  }
  public resetLabelModePerNexthopReceivedLabelAllocateSecondaryLabel() {
    this._labelModePerNexthopReceivedLabelAllocateSecondaryLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelModePerNexthopReceivedLabelAllocateSecondaryLabelInput() {
    return this._labelModePerNexthopReceivedLabelAllocateSecondaryLabel;
  }

  // label_mode_per_prefix - computed: false, optional: true, required: false
  private _labelModePerPrefix?: boolean | cdktf.IResolvable; 
  public get labelModePerPrefix() {
    return this.getBooleanAttribute('label_mode_per_prefix');
  }
  public set labelModePerPrefix(value: boolean | cdktf.IResolvable) {
    this._labelModePerPrefix = value;
  }
  public resetLabelModePerPrefix() {
    this._labelModePerPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelModePerPrefixInput() {
    return this._labelModePerPrefix;
  }

  // label_mode_per_vrf - computed: false, optional: true, required: false
  private _labelModePerVrf?: boolean | cdktf.IResolvable; 
  public get labelModePerVrf() {
    return this.getBooleanAttribute('label_mode_per_vrf');
  }
  public set labelModePerVrf(value: boolean | cdktf.IResolvable) {
    this._labelModePerVrf = value;
  }
  public resetLabelModePerVrf() {
    this._labelModePerVrf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelModePerVrfInput() {
    return this._labelModePerVrf;
  }

  // label_mode_per_vrf_46 - computed: false, optional: true, required: false
  private _labelModePerVrf46?: boolean | cdktf.IResolvable; 
  public get labelModePerVrf46() {
    return this.getBooleanAttribute('label_mode_per_vrf_46');
  }
  public set labelModePerVrf46(value: boolean | cdktf.IResolvable) {
    this._labelModePerVrf46 = value;
  }
  public resetLabelModePerVrf46() {
    this._labelModePerVrf46 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelModePerVrf46Input() {
    return this._labelModePerVrf46;
  }

  // label_mode_route_policy - computed: false, optional: true, required: false
  private _labelModeRoutePolicy?: string; 
  public get labelModeRoutePolicy() {
    return this.getStringAttribute('label_mode_route_policy');
  }
  public set labelModeRoutePolicy(value: string) {
    this._labelModeRoutePolicy = value;
  }
  public resetLabelModeRoutePolicy() {
    this._labelModeRoutePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelModeRoutePolicyInput() {
    return this._labelModeRoutePolicy;
  }

  // maximum_paths_ebgp_multipath - computed: false, optional: true, required: false
  private _maximumPathsEbgpMultipath?: number; 
  public get maximumPathsEbgpMultipath() {
    return this.getNumberAttribute('maximum_paths_ebgp_multipath');
  }
  public set maximumPathsEbgpMultipath(value: number) {
    this._maximumPathsEbgpMultipath = value;
  }
  public resetMaximumPathsEbgpMultipath() {
    this._maximumPathsEbgpMultipath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumPathsEbgpMultipathInput() {
    return this._maximumPathsEbgpMultipath;
  }

  // maximum_paths_ebgp_route_policy - computed: false, optional: true, required: false
  private _maximumPathsEbgpRoutePolicy?: string; 
  public get maximumPathsEbgpRoutePolicy() {
    return this.getStringAttribute('maximum_paths_ebgp_route_policy');
  }
  public set maximumPathsEbgpRoutePolicy(value: string) {
    this._maximumPathsEbgpRoutePolicy = value;
  }
  public resetMaximumPathsEbgpRoutePolicy() {
    this._maximumPathsEbgpRoutePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumPathsEbgpRoutePolicyInput() {
    return this._maximumPathsEbgpRoutePolicy;
  }

  // maximum_paths_ebgp_selective - computed: false, optional: true, required: false
  private _maximumPathsEbgpSelective?: boolean | cdktf.IResolvable; 
  public get maximumPathsEbgpSelective() {
    return this.getBooleanAttribute('maximum_paths_ebgp_selective');
  }
  public set maximumPathsEbgpSelective(value: boolean | cdktf.IResolvable) {
    this._maximumPathsEbgpSelective = value;
  }
  public resetMaximumPathsEbgpSelective() {
    this._maximumPathsEbgpSelective = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumPathsEbgpSelectiveInput() {
    return this._maximumPathsEbgpSelective;
  }

  // maximum_paths_eibgp_equal_cost - computed: false, optional: true, required: false
  private _maximumPathsEibgpEqualCost?: boolean | cdktf.IResolvable; 
  public get maximumPathsEibgpEqualCost() {
    return this.getBooleanAttribute('maximum_paths_eibgp_equal_cost');
  }
  public set maximumPathsEibgpEqualCost(value: boolean | cdktf.IResolvable) {
    this._maximumPathsEibgpEqualCost = value;
  }
  public resetMaximumPathsEibgpEqualCost() {
    this._maximumPathsEibgpEqualCost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumPathsEibgpEqualCostInput() {
    return this._maximumPathsEibgpEqualCost;
  }

  // maximum_paths_eibgp_multipath - computed: false, optional: true, required: false
  private _maximumPathsEibgpMultipath?: number; 
  public get maximumPathsEibgpMultipath() {
    return this.getNumberAttribute('maximum_paths_eibgp_multipath');
  }
  public set maximumPathsEibgpMultipath(value: number) {
    this._maximumPathsEibgpMultipath = value;
  }
  public resetMaximumPathsEibgpMultipath() {
    this._maximumPathsEibgpMultipath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumPathsEibgpMultipathInput() {
    return this._maximumPathsEibgpMultipath;
  }

  // maximum_paths_eibgp_route_policy - computed: false, optional: true, required: false
  private _maximumPathsEibgpRoutePolicy?: string; 
  public get maximumPathsEibgpRoutePolicy() {
    return this.getStringAttribute('maximum_paths_eibgp_route_policy');
  }
  public set maximumPathsEibgpRoutePolicy(value: string) {
    this._maximumPathsEibgpRoutePolicy = value;
  }
  public resetMaximumPathsEibgpRoutePolicy() {
    this._maximumPathsEibgpRoutePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumPathsEibgpRoutePolicyInput() {
    return this._maximumPathsEibgpRoutePolicy;
  }

  // maximum_paths_eibgp_selective - computed: false, optional: true, required: false
  private _maximumPathsEibgpSelective?: boolean | cdktf.IResolvable; 
  public get maximumPathsEibgpSelective() {
    return this.getBooleanAttribute('maximum_paths_eibgp_selective');
  }
  public set maximumPathsEibgpSelective(value: boolean | cdktf.IResolvable) {
    this._maximumPathsEibgpSelective = value;
  }
  public resetMaximumPathsEibgpSelective() {
    this._maximumPathsEibgpSelective = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumPathsEibgpSelectiveInput() {
    return this._maximumPathsEibgpSelective;
  }

  // maximum_paths_ibgp_multipath - computed: false, optional: true, required: false
  private _maximumPathsIbgpMultipath?: number; 
  public get maximumPathsIbgpMultipath() {
    return this.getNumberAttribute('maximum_paths_ibgp_multipath');
  }
  public set maximumPathsIbgpMultipath(value: number) {
    this._maximumPathsIbgpMultipath = value;
  }
  public resetMaximumPathsIbgpMultipath() {
    this._maximumPathsIbgpMultipath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumPathsIbgpMultipathInput() {
    return this._maximumPathsIbgpMultipath;
  }

  // maximum_paths_ibgp_route_policy - computed: false, optional: true, required: false
  private _maximumPathsIbgpRoutePolicy?: string; 
  public get maximumPathsIbgpRoutePolicy() {
    return this.getStringAttribute('maximum_paths_ibgp_route_policy');
  }
  public set maximumPathsIbgpRoutePolicy(value: string) {
    this._maximumPathsIbgpRoutePolicy = value;
  }
  public resetMaximumPathsIbgpRoutePolicy() {
    this._maximumPathsIbgpRoutePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumPathsIbgpRoutePolicyInput() {
    return this._maximumPathsIbgpRoutePolicy;
  }

  // maximum_paths_ibgp_selective - computed: false, optional: true, required: false
  private _maximumPathsIbgpSelective?: boolean | cdktf.IResolvable; 
  public get maximumPathsIbgpSelective() {
    return this.getBooleanAttribute('maximum_paths_ibgp_selective');
  }
  public set maximumPathsIbgpSelective(value: boolean | cdktf.IResolvable) {
    this._maximumPathsIbgpSelective = value;
  }
  public resetMaximumPathsIbgpSelective() {
    this._maximumPathsIbgpSelective = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumPathsIbgpSelectiveInput() {
    return this._maximumPathsIbgpSelective;
  }

  // maximum_paths_ibgp_unequal_cost - computed: false, optional: true, required: false
  private _maximumPathsIbgpUnequalCost?: boolean | cdktf.IResolvable; 
  public get maximumPathsIbgpUnequalCost() {
    return this.getBooleanAttribute('maximum_paths_ibgp_unequal_cost');
  }
  public set maximumPathsIbgpUnequalCost(value: boolean | cdktf.IResolvable) {
    this._maximumPathsIbgpUnequalCost = value;
  }
  public resetMaximumPathsIbgpUnequalCost() {
    this._maximumPathsIbgpUnequalCost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumPathsIbgpUnequalCostInput() {
    return this._maximumPathsIbgpUnequalCost;
  }

  // maximum_paths_ibgp_unequal_cost_deterministic - computed: false, optional: true, required: false
  private _maximumPathsIbgpUnequalCostDeterministic?: boolean | cdktf.IResolvable; 
  public get maximumPathsIbgpUnequalCostDeterministic() {
    return this.getBooleanAttribute('maximum_paths_ibgp_unequal_cost_deterministic');
  }
  public set maximumPathsIbgpUnequalCostDeterministic(value: boolean | cdktf.IResolvable) {
    this._maximumPathsIbgpUnequalCostDeterministic = value;
  }
  public resetMaximumPathsIbgpUnequalCostDeterministic() {
    this._maximumPathsIbgpUnequalCostDeterministic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumPathsIbgpUnequalCostDeterministicInput() {
    return this._maximumPathsIbgpUnequalCostDeterministic;
  }

  // maximum_paths_unique_nexthop_check_disable - computed: false, optional: true, required: false
  private _maximumPathsUniqueNexthopCheckDisable?: boolean | cdktf.IResolvable; 
  public get maximumPathsUniqueNexthopCheckDisable() {
    return this.getBooleanAttribute('maximum_paths_unique_nexthop_check_disable');
  }
  public set maximumPathsUniqueNexthopCheckDisable(value: boolean | cdktf.IResolvable) {
    this._maximumPathsUniqueNexthopCheckDisable = value;
  }
  public resetMaximumPathsUniqueNexthopCheckDisable() {
    this._maximumPathsUniqueNexthopCheckDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumPathsUniqueNexthopCheckDisableInput() {
    return this._maximumPathsUniqueNexthopCheckDisable;
  }

  // networks - computed: false, optional: true, required: false
  private _networks = new RouterBgpVrfAddressFamilyNetworksList(this, "networks", false);
  public get networks() {
    return this._networks;
  }
  public putNetworks(value: RouterBgpVrfAddressFamilyNetworks[] | cdktf.IResolvable) {
    this._networks.internalValue = value;
  }
  public resetNetworks() {
    this._networks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networksInput() {
    return this._networks.internalValue;
  }

  // redistribute_connected - computed: false, optional: true, required: false
  private _redistributeConnected?: boolean | cdktf.IResolvable; 
  public get redistributeConnected() {
    return this.getBooleanAttribute('redistribute_connected');
  }
  public set redistributeConnected(value: boolean | cdktf.IResolvable) {
    this._redistributeConnected = value;
  }
  public resetRedistributeConnected() {
    this._redistributeConnected = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redistributeConnectedInput() {
    return this._redistributeConnected;
  }

  // redistribute_connected_metric - computed: false, optional: true, required: false
  private _redistributeConnectedMetric?: number; 
  public get redistributeConnectedMetric() {
    return this.getNumberAttribute('redistribute_connected_metric');
  }
  public set redistributeConnectedMetric(value: number) {
    this._redistributeConnectedMetric = value;
  }
  public resetRedistributeConnectedMetric() {
    this._redistributeConnectedMetric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redistributeConnectedMetricInput() {
    return this._redistributeConnectedMetric;
  }

  // redistribute_connected_multipath - computed: false, optional: true, required: false
  private _redistributeConnectedMultipath?: boolean | cdktf.IResolvable; 
  public get redistributeConnectedMultipath() {
    return this.getBooleanAttribute('redistribute_connected_multipath');
  }
  public set redistributeConnectedMultipath(value: boolean | cdktf.IResolvable) {
    this._redistributeConnectedMultipath = value;
  }
  public resetRedistributeConnectedMultipath() {
    this._redistributeConnectedMultipath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redistributeConnectedMultipathInput() {
    return this._redistributeConnectedMultipath;
  }

  // redistribute_connected_route_policy - computed: false, optional: true, required: false
  private _redistributeConnectedRoutePolicy?: string; 
  public get redistributeConnectedRoutePolicy() {
    return this.getStringAttribute('redistribute_connected_route_policy');
  }
  public set redistributeConnectedRoutePolicy(value: string) {
    this._redistributeConnectedRoutePolicy = value;
  }
  public resetRedistributeConnectedRoutePolicy() {
    this._redistributeConnectedRoutePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redistributeConnectedRoutePolicyInput() {
    return this._redistributeConnectedRoutePolicy;
  }

  // redistribute_eigrp - computed: false, optional: true, required: false
  private _redistributeEigrp = new RouterBgpVrfAddressFamilyRedistributeEigrpList(this, "redistribute_eigrp", false);
  public get redistributeEigrp() {
    return this._redistributeEigrp;
  }
  public putRedistributeEigrp(value: RouterBgpVrfAddressFamilyRedistributeEigrp[] | cdktf.IResolvable) {
    this._redistributeEigrp.internalValue = value;
  }
  public resetRedistributeEigrp() {
    this._redistributeEigrp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redistributeEigrpInput() {
    return this._redistributeEigrp.internalValue;
  }

  // redistribute_isis - computed: false, optional: true, required: false
  private _redistributeIsis = new RouterBgpVrfAddressFamilyRedistributeIsisList(this, "redistribute_isis", false);
  public get redistributeIsis() {
    return this._redistributeIsis;
  }
  public putRedistributeIsis(value: RouterBgpVrfAddressFamilyRedistributeIsis[] | cdktf.IResolvable) {
    this._redistributeIsis.internalValue = value;
  }
  public resetRedistributeIsis() {
    this._redistributeIsis.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redistributeIsisInput() {
    return this._redistributeIsis.internalValue;
  }

  // redistribute_ospf - computed: false, optional: true, required: false
  private _redistributeOspf = new RouterBgpVrfAddressFamilyRedistributeOspfList(this, "redistribute_ospf", false);
  public get redistributeOspf() {
    return this._redistributeOspf;
  }
  public putRedistributeOspf(value: RouterBgpVrfAddressFamilyRedistributeOspf[] | cdktf.IResolvable) {
    this._redistributeOspf.internalValue = value;
  }
  public resetRedistributeOspf() {
    this._redistributeOspf.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redistributeOspfInput() {
    return this._redistributeOspf.internalValue;
  }

  // redistribute_ospfv3 - computed: false, optional: true, required: false
  private _redistributeOspfv3 = new RouterBgpVrfAddressFamilyRedistributeOspfv3List(this, "redistribute_ospfv3", false);
  public get redistributeOspfv3() {
    return this._redistributeOspfv3;
  }
  public putRedistributeOspfv3(value: RouterBgpVrfAddressFamilyRedistributeOspfv3[] | cdktf.IResolvable) {
    this._redistributeOspfv3.internalValue = value;
  }
  public resetRedistributeOspfv3() {
    this._redistributeOspfv3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redistributeOspfv3Input() {
    return this._redistributeOspfv3.internalValue;
  }

  // redistribute_rip - computed: false, optional: true, required: false
  private _redistributeRip?: boolean | cdktf.IResolvable; 
  public get redistributeRip() {
    return this.getBooleanAttribute('redistribute_rip');
  }
  public set redistributeRip(value: boolean | cdktf.IResolvable) {
    this._redistributeRip = value;
  }
  public resetRedistributeRip() {
    this._redistributeRip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redistributeRipInput() {
    return this._redistributeRip;
  }

  // redistribute_rip_metric - computed: false, optional: true, required: false
  private _redistributeRipMetric?: number; 
  public get redistributeRipMetric() {
    return this.getNumberAttribute('redistribute_rip_metric');
  }
  public set redistributeRipMetric(value: number) {
    this._redistributeRipMetric = value;
  }
  public resetRedistributeRipMetric() {
    this._redistributeRipMetric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redistributeRipMetricInput() {
    return this._redistributeRipMetric;
  }

  // redistribute_rip_multipath - computed: false, optional: true, required: false
  private _redistributeRipMultipath?: boolean | cdktf.IResolvable; 
  public get redistributeRipMultipath() {
    return this.getBooleanAttribute('redistribute_rip_multipath');
  }
  public set redistributeRipMultipath(value: boolean | cdktf.IResolvable) {
    this._redistributeRipMultipath = value;
  }
  public resetRedistributeRipMultipath() {
    this._redistributeRipMultipath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redistributeRipMultipathInput() {
    return this._redistributeRipMultipath;
  }

  // redistribute_rip_route_policy - computed: false, optional: true, required: false
  private _redistributeRipRoutePolicy?: string; 
  public get redistributeRipRoutePolicy() {
    return this.getStringAttribute('redistribute_rip_route_policy');
  }
  public set redistributeRipRoutePolicy(value: string) {
    this._redistributeRipRoutePolicy = value;
  }
  public resetRedistributeRipRoutePolicy() {
    this._redistributeRipRoutePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redistributeRipRoutePolicyInput() {
    return this._redistributeRipRoutePolicy;
  }

  // redistribute_static - computed: false, optional: true, required: false
  private _redistributeStatic?: boolean | cdktf.IResolvable; 
  public get redistributeStatic() {
    return this.getBooleanAttribute('redistribute_static');
  }
  public set redistributeStatic(value: boolean | cdktf.IResolvable) {
    this._redistributeStatic = value;
  }
  public resetRedistributeStatic() {
    this._redistributeStatic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redistributeStaticInput() {
    return this._redistributeStatic;
  }

  // redistribute_static_metric - computed: false, optional: true, required: false
  private _redistributeStaticMetric?: number; 
  public get redistributeStaticMetric() {
    return this.getNumberAttribute('redistribute_static_metric');
  }
  public set redistributeStaticMetric(value: number) {
    this._redistributeStaticMetric = value;
  }
  public resetRedistributeStaticMetric() {
    this._redistributeStaticMetric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redistributeStaticMetricInput() {
    return this._redistributeStaticMetric;
  }

  // redistribute_static_multipath - computed: false, optional: true, required: false
  private _redistributeStaticMultipath?: boolean | cdktf.IResolvable; 
  public get redistributeStaticMultipath() {
    return this.getBooleanAttribute('redistribute_static_multipath');
  }
  public set redistributeStaticMultipath(value: boolean | cdktf.IResolvable) {
    this._redistributeStaticMultipath = value;
  }
  public resetRedistributeStaticMultipath() {
    this._redistributeStaticMultipath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redistributeStaticMultipathInput() {
    return this._redistributeStaticMultipath;
  }

  // redistribute_static_route_policy - computed: false, optional: true, required: false
  private _redistributeStaticRoutePolicy?: string; 
  public get redistributeStaticRoutePolicy() {
    return this.getStringAttribute('redistribute_static_route_policy');
  }
  public set redistributeStaticRoutePolicy(value: string) {
    this._redistributeStaticRoutePolicy = value;
  }
  public resetRedistributeStaticRoutePolicy() {
    this._redistributeStaticRoutePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redistributeStaticRoutePolicyInput() {
    return this._redistributeStaticRoutePolicy;
  }

  // segment_routing_srv6_alloc_mode_per_ce - computed: false, optional: true, required: false
  private _segmentRoutingSrv6AllocModePerCe?: boolean | cdktf.IResolvable; 
  public get segmentRoutingSrv6AllocModePerCe() {
    return this.getBooleanAttribute('segment_routing_srv6_alloc_mode_per_ce');
  }
  public set segmentRoutingSrv6AllocModePerCe(value: boolean | cdktf.IResolvable) {
    this._segmentRoutingSrv6AllocModePerCe = value;
  }
  public resetSegmentRoutingSrv6AllocModePerCe() {
    this._segmentRoutingSrv6AllocModePerCe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentRoutingSrv6AllocModePerCeInput() {
    return this._segmentRoutingSrv6AllocModePerCe;
  }

  // segment_routing_srv6_alloc_mode_per_vrf - computed: false, optional: true, required: false
  private _segmentRoutingSrv6AllocModePerVrf?: boolean | cdktf.IResolvable; 
  public get segmentRoutingSrv6AllocModePerVrf() {
    return this.getBooleanAttribute('segment_routing_srv6_alloc_mode_per_vrf');
  }
  public set segmentRoutingSrv6AllocModePerVrf(value: boolean | cdktf.IResolvable) {
    this._segmentRoutingSrv6AllocModePerVrf = value;
  }
  public resetSegmentRoutingSrv6AllocModePerVrf() {
    this._segmentRoutingSrv6AllocModePerVrf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentRoutingSrv6AllocModePerVrfInput() {
    return this._segmentRoutingSrv6AllocModePerVrf;
  }

  // segment_routing_srv6_alloc_mode_per_vrf_46 - computed: false, optional: true, required: false
  private _segmentRoutingSrv6AllocModePerVrf46?: boolean | cdktf.IResolvable; 
  public get segmentRoutingSrv6AllocModePerVrf46() {
    return this.getBooleanAttribute('segment_routing_srv6_alloc_mode_per_vrf_46');
  }
  public set segmentRoutingSrv6AllocModePerVrf46(value: boolean | cdktf.IResolvable) {
    this._segmentRoutingSrv6AllocModePerVrf46 = value;
  }
  public resetSegmentRoutingSrv6AllocModePerVrf46() {
    this._segmentRoutingSrv6AllocModePerVrf46 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentRoutingSrv6AllocModePerVrf46Input() {
    return this._segmentRoutingSrv6AllocModePerVrf46;
  }

  // segment_routing_srv6_alloc_mode_route_policy - computed: false, optional: true, required: false
  private _segmentRoutingSrv6AllocModeRoutePolicy?: string; 
  public get segmentRoutingSrv6AllocModeRoutePolicy() {
    return this.getStringAttribute('segment_routing_srv6_alloc_mode_route_policy');
  }
  public set segmentRoutingSrv6AllocModeRoutePolicy(value: string) {
    this._segmentRoutingSrv6AllocModeRoutePolicy = value;
  }
  public resetSegmentRoutingSrv6AllocModeRoutePolicy() {
    this._segmentRoutingSrv6AllocModeRoutePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentRoutingSrv6AllocModeRoutePolicyInput() {
    return this._segmentRoutingSrv6AllocModeRoutePolicy;
  }

  // segment_routing_srv6_locator - computed: false, optional: true, required: false
  private _segmentRoutingSrv6Locator?: string; 
  public get segmentRoutingSrv6Locator() {
    return this.getStringAttribute('segment_routing_srv6_locator');
  }
  public set segmentRoutingSrv6Locator(value: string) {
    this._segmentRoutingSrv6Locator = value;
  }
  public resetSegmentRoutingSrv6Locator() {
    this._segmentRoutingSrv6Locator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentRoutingSrv6LocatorInput() {
    return this._segmentRoutingSrv6Locator;
  }

  // vrf_name - computed: false, optional: false, required: true
  private _vrfName?: string; 
  public get vrfName() {
    return this.getStringAttribute('vrf_name');
  }
  public set vrfName(value: string) {
    this._vrfName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfNameInput() {
    return this._vrfName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      additional_paths_receive: cdktf.booleanToTerraform(this._additionalPathsReceive),
      additional_paths_receive_disable: cdktf.booleanToTerraform(this._additionalPathsReceiveDisable),
      additional_paths_selection_disable: cdktf.booleanToTerraform(this._additionalPathsSelectionDisable),
      additional_paths_selection_route_policy: cdktf.stringToTerraform(this._additionalPathsSelectionRoutePolicy),
      additional_paths_send: cdktf.booleanToTerraform(this._additionalPathsSend),
      additional_paths_send_disable: cdktf.booleanToTerraform(this._additionalPathsSendDisable),
      advertise_best_external: cdktf.booleanToTerraform(this._advertiseBestExternal),
      af_name: cdktf.stringToTerraform(this._afName),
      aggregate_addresses: cdktf.listMapper(routerBgpVrfAddressFamilyAggregateAddressesToTerraform, false)(this._aggregateAddresses.internalValue),
      allocate_label_all: cdktf.booleanToTerraform(this._allocateLabelAll),
      allocate_label_all_unlabeled_path: cdktf.booleanToTerraform(this._allocateLabelAllUnlabeledPath),
      allocate_label_route_policy_name: cdktf.stringToTerraform(this._allocateLabelRoutePolicyName),
      allocate_label_route_policy_unlabeled_path: cdktf.booleanToTerraform(this._allocateLabelRoutePolicyUnlabeledPath),
      as_number: cdktf.stringToTerraform(this._asNumber),
      delete_mode: cdktf.stringToTerraform(this._deleteMode),
      device: cdktf.stringToTerraform(this._device),
      label_mode_per_ce: cdktf.booleanToTerraform(this._labelModePerCe),
      label_mode_per_nexthop_received_label: cdktf.booleanToTerraform(this._labelModePerNexthopReceivedLabel),
      label_mode_per_nexthop_received_label_allocate_secondary_label: cdktf.booleanToTerraform(this._labelModePerNexthopReceivedLabelAllocateSecondaryLabel),
      label_mode_per_prefix: cdktf.booleanToTerraform(this._labelModePerPrefix),
      label_mode_per_vrf: cdktf.booleanToTerraform(this._labelModePerVrf),
      label_mode_per_vrf_46: cdktf.booleanToTerraform(this._labelModePerVrf46),
      label_mode_route_policy: cdktf.stringToTerraform(this._labelModeRoutePolicy),
      maximum_paths_ebgp_multipath: cdktf.numberToTerraform(this._maximumPathsEbgpMultipath),
      maximum_paths_ebgp_route_policy: cdktf.stringToTerraform(this._maximumPathsEbgpRoutePolicy),
      maximum_paths_ebgp_selective: cdktf.booleanToTerraform(this._maximumPathsEbgpSelective),
      maximum_paths_eibgp_equal_cost: cdktf.booleanToTerraform(this._maximumPathsEibgpEqualCost),
      maximum_paths_eibgp_multipath: cdktf.numberToTerraform(this._maximumPathsEibgpMultipath),
      maximum_paths_eibgp_route_policy: cdktf.stringToTerraform(this._maximumPathsEibgpRoutePolicy),
      maximum_paths_eibgp_selective: cdktf.booleanToTerraform(this._maximumPathsEibgpSelective),
      maximum_paths_ibgp_multipath: cdktf.numberToTerraform(this._maximumPathsIbgpMultipath),
      maximum_paths_ibgp_route_policy: cdktf.stringToTerraform(this._maximumPathsIbgpRoutePolicy),
      maximum_paths_ibgp_selective: cdktf.booleanToTerraform(this._maximumPathsIbgpSelective),
      maximum_paths_ibgp_unequal_cost: cdktf.booleanToTerraform(this._maximumPathsIbgpUnequalCost),
      maximum_paths_ibgp_unequal_cost_deterministic: cdktf.booleanToTerraform(this._maximumPathsIbgpUnequalCostDeterministic),
      maximum_paths_unique_nexthop_check_disable: cdktf.booleanToTerraform(this._maximumPathsUniqueNexthopCheckDisable),
      networks: cdktf.listMapper(routerBgpVrfAddressFamilyNetworksToTerraform, false)(this._networks.internalValue),
      redistribute_connected: cdktf.booleanToTerraform(this._redistributeConnected),
      redistribute_connected_metric: cdktf.numberToTerraform(this._redistributeConnectedMetric),
      redistribute_connected_multipath: cdktf.booleanToTerraform(this._redistributeConnectedMultipath),
      redistribute_connected_route_policy: cdktf.stringToTerraform(this._redistributeConnectedRoutePolicy),
      redistribute_eigrp: cdktf.listMapper(routerBgpVrfAddressFamilyRedistributeEigrpToTerraform, false)(this._redistributeEigrp.internalValue),
      redistribute_isis: cdktf.listMapper(routerBgpVrfAddressFamilyRedistributeIsisToTerraform, false)(this._redistributeIsis.internalValue),
      redistribute_ospf: cdktf.listMapper(routerBgpVrfAddressFamilyRedistributeOspfToTerraform, false)(this._redistributeOspf.internalValue),
      redistribute_ospfv3: cdktf.listMapper(routerBgpVrfAddressFamilyRedistributeOspfv3ToTerraform, false)(this._redistributeOspfv3.internalValue),
      redistribute_rip: cdktf.booleanToTerraform(this._redistributeRip),
      redistribute_rip_metric: cdktf.numberToTerraform(this._redistributeRipMetric),
      redistribute_rip_multipath: cdktf.booleanToTerraform(this._redistributeRipMultipath),
      redistribute_rip_route_policy: cdktf.stringToTerraform(this._redistributeRipRoutePolicy),
      redistribute_static: cdktf.booleanToTerraform(this._redistributeStatic),
      redistribute_static_metric: cdktf.numberToTerraform(this._redistributeStaticMetric),
      redistribute_static_multipath: cdktf.booleanToTerraform(this._redistributeStaticMultipath),
      redistribute_static_route_policy: cdktf.stringToTerraform(this._redistributeStaticRoutePolicy),
      segment_routing_srv6_alloc_mode_per_ce: cdktf.booleanToTerraform(this._segmentRoutingSrv6AllocModePerCe),
      segment_routing_srv6_alloc_mode_per_vrf: cdktf.booleanToTerraform(this._segmentRoutingSrv6AllocModePerVrf),
      segment_routing_srv6_alloc_mode_per_vrf_46: cdktf.booleanToTerraform(this._segmentRoutingSrv6AllocModePerVrf46),
      segment_routing_srv6_alloc_mode_route_policy: cdktf.stringToTerraform(this._segmentRoutingSrv6AllocModeRoutePolicy),
      segment_routing_srv6_locator: cdktf.stringToTerraform(this._segmentRoutingSrv6Locator),
      vrf_name: cdktf.stringToTerraform(this._vrfName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      additional_paths_receive: {
        value: cdktf.booleanToHclTerraform(this._additionalPathsReceive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      additional_paths_receive_disable: {
        value: cdktf.booleanToHclTerraform(this._additionalPathsReceiveDisable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      additional_paths_selection_disable: {
        value: cdktf.booleanToHclTerraform(this._additionalPathsSelectionDisable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      additional_paths_selection_route_policy: {
        value: cdktf.stringToHclTerraform(this._additionalPathsSelectionRoutePolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      additional_paths_send: {
        value: cdktf.booleanToHclTerraform(this._additionalPathsSend),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      additional_paths_send_disable: {
        value: cdktf.booleanToHclTerraform(this._additionalPathsSendDisable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      advertise_best_external: {
        value: cdktf.booleanToHclTerraform(this._advertiseBestExternal),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      af_name: {
        value: cdktf.stringToHclTerraform(this._afName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aggregate_addresses: {
        value: cdktf.listMapperHcl(routerBgpVrfAddressFamilyAggregateAddressesToHclTerraform, false)(this._aggregateAddresses.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterBgpVrfAddressFamilyAggregateAddressesList",
      },
      allocate_label_all: {
        value: cdktf.booleanToHclTerraform(this._allocateLabelAll),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allocate_label_all_unlabeled_path: {
        value: cdktf.booleanToHclTerraform(this._allocateLabelAllUnlabeledPath),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allocate_label_route_policy_name: {
        value: cdktf.stringToHclTerraform(this._allocateLabelRoutePolicyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allocate_label_route_policy_unlabeled_path: {
        value: cdktf.booleanToHclTerraform(this._allocateLabelRoutePolicyUnlabeledPath),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      as_number: {
        value: cdktf.stringToHclTerraform(this._asNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delete_mode: {
        value: cdktf.stringToHclTerraform(this._deleteMode),
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
      label_mode_per_ce: {
        value: cdktf.booleanToHclTerraform(this._labelModePerCe),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      label_mode_per_nexthop_received_label: {
        value: cdktf.booleanToHclTerraform(this._labelModePerNexthopReceivedLabel),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      label_mode_per_nexthop_received_label_allocate_secondary_label: {
        value: cdktf.booleanToHclTerraform(this._labelModePerNexthopReceivedLabelAllocateSecondaryLabel),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      label_mode_per_prefix: {
        value: cdktf.booleanToHclTerraform(this._labelModePerPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      label_mode_per_vrf: {
        value: cdktf.booleanToHclTerraform(this._labelModePerVrf),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      label_mode_per_vrf_46: {
        value: cdktf.booleanToHclTerraform(this._labelModePerVrf46),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      label_mode_route_policy: {
        value: cdktf.stringToHclTerraform(this._labelModeRoutePolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maximum_paths_ebgp_multipath: {
        value: cdktf.numberToHclTerraform(this._maximumPathsEbgpMultipath),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      maximum_paths_ebgp_route_policy: {
        value: cdktf.stringToHclTerraform(this._maximumPathsEbgpRoutePolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maximum_paths_ebgp_selective: {
        value: cdktf.booleanToHclTerraform(this._maximumPathsEbgpSelective),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      maximum_paths_eibgp_equal_cost: {
        value: cdktf.booleanToHclTerraform(this._maximumPathsEibgpEqualCost),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      maximum_paths_eibgp_multipath: {
        value: cdktf.numberToHclTerraform(this._maximumPathsEibgpMultipath),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      maximum_paths_eibgp_route_policy: {
        value: cdktf.stringToHclTerraform(this._maximumPathsEibgpRoutePolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maximum_paths_eibgp_selective: {
        value: cdktf.booleanToHclTerraform(this._maximumPathsEibgpSelective),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      maximum_paths_ibgp_multipath: {
        value: cdktf.numberToHclTerraform(this._maximumPathsIbgpMultipath),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      maximum_paths_ibgp_route_policy: {
        value: cdktf.stringToHclTerraform(this._maximumPathsIbgpRoutePolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maximum_paths_ibgp_selective: {
        value: cdktf.booleanToHclTerraform(this._maximumPathsIbgpSelective),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      maximum_paths_ibgp_unequal_cost: {
        value: cdktf.booleanToHclTerraform(this._maximumPathsIbgpUnequalCost),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      maximum_paths_ibgp_unequal_cost_deterministic: {
        value: cdktf.booleanToHclTerraform(this._maximumPathsIbgpUnequalCostDeterministic),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      maximum_paths_unique_nexthop_check_disable: {
        value: cdktf.booleanToHclTerraform(this._maximumPathsUniqueNexthopCheckDisable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      networks: {
        value: cdktf.listMapperHcl(routerBgpVrfAddressFamilyNetworksToHclTerraform, false)(this._networks.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterBgpVrfAddressFamilyNetworksList",
      },
      redistribute_connected: {
        value: cdktf.booleanToHclTerraform(this._redistributeConnected),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      redistribute_connected_metric: {
        value: cdktf.numberToHclTerraform(this._redistributeConnectedMetric),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      redistribute_connected_multipath: {
        value: cdktf.booleanToHclTerraform(this._redistributeConnectedMultipath),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      redistribute_connected_route_policy: {
        value: cdktf.stringToHclTerraform(this._redistributeConnectedRoutePolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      redistribute_eigrp: {
        value: cdktf.listMapperHcl(routerBgpVrfAddressFamilyRedistributeEigrpToHclTerraform, false)(this._redistributeEigrp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterBgpVrfAddressFamilyRedistributeEigrpList",
      },
      redistribute_isis: {
        value: cdktf.listMapperHcl(routerBgpVrfAddressFamilyRedistributeIsisToHclTerraform, false)(this._redistributeIsis.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterBgpVrfAddressFamilyRedistributeIsisList",
      },
      redistribute_ospf: {
        value: cdktf.listMapperHcl(routerBgpVrfAddressFamilyRedistributeOspfToHclTerraform, false)(this._redistributeOspf.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterBgpVrfAddressFamilyRedistributeOspfList",
      },
      redistribute_ospfv3: {
        value: cdktf.listMapperHcl(routerBgpVrfAddressFamilyRedistributeOspfv3ToHclTerraform, false)(this._redistributeOspfv3.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterBgpVrfAddressFamilyRedistributeOspfv3List",
      },
      redistribute_rip: {
        value: cdktf.booleanToHclTerraform(this._redistributeRip),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      redistribute_rip_metric: {
        value: cdktf.numberToHclTerraform(this._redistributeRipMetric),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      redistribute_rip_multipath: {
        value: cdktf.booleanToHclTerraform(this._redistributeRipMultipath),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      redistribute_rip_route_policy: {
        value: cdktf.stringToHclTerraform(this._redistributeRipRoutePolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      redistribute_static: {
        value: cdktf.booleanToHclTerraform(this._redistributeStatic),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      redistribute_static_metric: {
        value: cdktf.numberToHclTerraform(this._redistributeStaticMetric),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      redistribute_static_multipath: {
        value: cdktf.booleanToHclTerraform(this._redistributeStaticMultipath),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      redistribute_static_route_policy: {
        value: cdktf.stringToHclTerraform(this._redistributeStaticRoutePolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      segment_routing_srv6_alloc_mode_per_ce: {
        value: cdktf.booleanToHclTerraform(this._segmentRoutingSrv6AllocModePerCe),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      segment_routing_srv6_alloc_mode_per_vrf: {
        value: cdktf.booleanToHclTerraform(this._segmentRoutingSrv6AllocModePerVrf),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      segment_routing_srv6_alloc_mode_per_vrf_46: {
        value: cdktf.booleanToHclTerraform(this._segmentRoutingSrv6AllocModePerVrf46),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      segment_routing_srv6_alloc_mode_route_policy: {
        value: cdktf.stringToHclTerraform(this._segmentRoutingSrv6AllocModeRoutePolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      segment_routing_srv6_locator: {
        value: cdktf.stringToHclTerraform(this._segmentRoutingSrv6Locator),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vrf_name: {
        value: cdktf.stringToHclTerraform(this._vrfName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
