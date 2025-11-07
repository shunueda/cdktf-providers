// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TransportRoutingBgpFeatureConfig extends cdktf.TerraformMetaArguments {
  /**
  * Compare MEDs from all ASs when selecting active BGP paths
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#always_compare_med TransportRoutingBgpFeature#always_compare_med}
  */
  readonly alwaysCompareMed?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#always_compare_med_variable TransportRoutingBgpFeature#always_compare_med_variable}
  */
  readonly alwaysCompareMedVariable?: string;
  /**
  * Set autonomous system number <1..4294967295> or <XX.YY>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#as_number TransportRoutingBgpFeature#as_number}
  */
  readonly asNumber?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#as_number_variable TransportRoutingBgpFeature#as_number_variable}
  */
  readonly asNumberVariable?: string;
  /**
  * Compare router IDs when selecting active BGP paths
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#compare_router_id TransportRoutingBgpFeature#compare_router_id}
  */
  readonly compareRouterId?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#compare_router_id_variable TransportRoutingBgpFeature#compare_router_id_variable}
  */
  readonly compareRouterIdVariable?: string;
  /**
  * The description of the Feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#description TransportRoutingBgpFeature#description}
  */
  readonly description?: string;
  /**
  * Compare MEDs from all routes from same AS when selecting active BGP paths
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#deterministic_med TransportRoutingBgpFeature#deterministic_med}
  */
  readonly deterministicMed?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#deterministic_med_variable TransportRoutingBgpFeature#deterministic_med_variable}
  */
  readonly deterministicMedVariable?: string;
  /**
  * Set administrative distance for external BGP routes
  *   - Range: `1`-`255`
  *   - Default value: `20`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#external_routes_distance TransportRoutingBgpFeature#external_routes_distance}
  */
  readonly externalRoutesDistance?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#external_routes_distance_variable TransportRoutingBgpFeature#external_routes_distance_variable}
  */
  readonly externalRoutesDistanceVariable?: string;
  /**
  * Feature Profile ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#feature_profile_id TransportRoutingBgpFeature#feature_profile_id}
  */
  readonly featureProfileId: string;
  /**
  * Interval (seconds) not receiving a keepalive message declares a BGP peer down
  *   - Range: `0`-`65535`
  *   - Default value: `180`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#hold_time TransportRoutingBgpFeature#hold_time}
  */
  readonly holdTime?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#hold_time_variable TransportRoutingBgpFeature#hold_time_variable}
  */
  readonly holdTimeVariable?: string;
  /**
  * Set administrative distance for internal BGP routes
  *   - Range: `1`-`255`
  *   - Default value: `200`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#internal_routes_distance TransportRoutingBgpFeature#internal_routes_distance}
  */
  readonly internalRoutesDistance?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#internal_routes_distance_variable TransportRoutingBgpFeature#internal_routes_distance_variable}
  */
  readonly internalRoutesDistanceVariable?: string;
  /**
  * Aggregate prefixes in specific range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#ipv4_aggregate_addresses TransportRoutingBgpFeature#ipv4_aggregate_addresses}
  */
  readonly ipv4AggregateAddresses?: TransportRoutingBgpFeatureIpv4AggregateAddresses[] | cdktf.IResolvable;
  /**
  * Set maximum number of parallel IBGP paths for multipath load sharing
  *   - Range: `1`-`32`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#ipv4_eibgp_maximum_paths TransportRoutingBgpFeature#ipv4_eibgp_maximum_paths}
  */
  readonly ipv4EibgpMaximumPaths?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#ipv4_eibgp_maximum_paths_variable TransportRoutingBgpFeature#ipv4_eibgp_maximum_paths_variable}
  */
  readonly ipv4EibgpMaximumPathsVariable?: string;
  /**
  * Set BGP IPv4 neighbors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#ipv4_neighbors TransportRoutingBgpFeature#ipv4_neighbors}
  */
  readonly ipv4Neighbors?: TransportRoutingBgpFeatureIpv4Neighbors[] | cdktf.IResolvable;
  /**
  * Configure the networks for BGP to advertise
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#ipv4_networks TransportRoutingBgpFeature#ipv4_networks}
  */
  readonly ipv4Networks?: TransportRoutingBgpFeatureIpv4Networks[] | cdktf.IResolvable;
  /**
  * BGP Default Information Originate
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#ipv4_originate TransportRoutingBgpFeature#ipv4_originate}
  */
  readonly ipv4Originate?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#ipv4_originate_variable TransportRoutingBgpFeature#ipv4_originate_variable}
  */
  readonly ipv4OriginateVariable?: string;
  /**
  * Redistribute routes into BGP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#ipv4_redistributes TransportRoutingBgpFeature#ipv4_redistributes}
  */
  readonly ipv4Redistributes?: TransportRoutingBgpFeatureIpv4Redistributes[] | cdktf.IResolvable;
  /**
  * Table map filtered or not
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#ipv4_table_map_filter TransportRoutingBgpFeature#ipv4_table_map_filter}
  */
  readonly ipv4TableMapFilter?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#ipv4_table_map_filter_variable TransportRoutingBgpFeature#ipv4_table_map_filter_variable}
  */
  readonly ipv4TableMapFilterVariable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#ipv4_table_map_route_policy_id TransportRoutingBgpFeature#ipv4_table_map_route_policy_id}
  */
  readonly ipv4TableMapRoutePolicyId?: string;
  /**
  * IPv6 Aggregate prefixes in specific range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#ipv6_aggregate_addresses TransportRoutingBgpFeature#ipv6_aggregate_addresses}
  */
  readonly ipv6AggregateAddresses?: TransportRoutingBgpFeatureIpv6AggregateAddresses[] | cdktf.IResolvable;
  /**
  * Set maximum number of parallel IBGP paths for multipath load sharing
  *   - Range: `1`-`32`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#ipv6_eibgp_maximum_paths TransportRoutingBgpFeature#ipv6_eibgp_maximum_paths}
  */
  readonly ipv6EibgpMaximumPaths?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#ipv6_eibgp_maximum_paths_variable TransportRoutingBgpFeature#ipv6_eibgp_maximum_paths_variable}
  */
  readonly ipv6EibgpMaximumPathsVariable?: string;
  /**
  * Set BGP IPv6 neighbors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#ipv6_neighbors TransportRoutingBgpFeature#ipv6_neighbors}
  */
  readonly ipv6Neighbors?: TransportRoutingBgpFeatureIpv6Neighbors[] | cdktf.IResolvable;
  /**
  * Configure the networks for BGP to advertise
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#ipv6_networks TransportRoutingBgpFeature#ipv6_networks}
  */
  readonly ipv6Networks?: TransportRoutingBgpFeatureIpv6Networks[] | cdktf.IResolvable;
  /**
  * BGP Default Information Originate
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#ipv6_originate TransportRoutingBgpFeature#ipv6_originate}
  */
  readonly ipv6Originate?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#ipv6_originate_variable TransportRoutingBgpFeature#ipv6_originate_variable}
  */
  readonly ipv6OriginateVariable?: string;
  /**
  * Redistribute routes into BGP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#ipv6_redistributes TransportRoutingBgpFeature#ipv6_redistributes}
  */
  readonly ipv6Redistributes?: TransportRoutingBgpFeatureIpv6Redistributes[] | cdktf.IResolvable;
  /**
  * Table map filtered or not
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#ipv6_table_map_filter TransportRoutingBgpFeature#ipv6_table_map_filter}
  */
  readonly ipv6TableMapFilter?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#ipv6_table_map_filter_variable TransportRoutingBgpFeature#ipv6_table_map_filter_variable}
  */
  readonly ipv6TableMapFilterVariable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#ipv6_table_map_route_policy_id TransportRoutingBgpFeature#ipv6_table_map_route_policy_id}
  */
  readonly ipv6TableMapRoutePolicyId?: string;
  /**
  * Interval (seconds) of keepalive messages sent to its BGP peer
  *   - Range: `0`-`65535`
  *   - Default value: `60`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#keepalive_time TransportRoutingBgpFeature#keepalive_time}
  */
  readonly keepaliveTime?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#keepalive_time_variable TransportRoutingBgpFeature#keepalive_time_variable}
  */
  readonly keepaliveTimeVariable?: string;
  /**
  * Set administrative distance for local BGP routes
  *   - Range: `1`-`255`
  *   - Default value: `20`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#local_routes_distance TransportRoutingBgpFeature#local_routes_distance}
  */
  readonly localRoutesDistance?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#local_routes_distance_variable TransportRoutingBgpFeature#local_routes_distance_variable}
  */
  readonly localRoutesDistanceVariable?: string;
  /**
  * If path has no MED, consider it to be worst path when selecting active BGP paths
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#missing_med_as_worst TransportRoutingBgpFeature#missing_med_as_worst}
  */
  readonly missingMedAsWorst?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#missing_med_as_worst_variable TransportRoutingBgpFeature#missing_med_as_worst_variable}
  */
  readonly missingMedAsWorstVariable?: string;
  /**
  * MPLS BGP Interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#mpls_interfaces TransportRoutingBgpFeature#mpls_interfaces}
  */
  readonly mplsInterfaces?: TransportRoutingBgpFeatureMplsInterfaces[] | cdktf.IResolvable;
  /**
  * Ignore AS for multipath selection
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#multipath_relax TransportRoutingBgpFeature#multipath_relax}
  */
  readonly multipathRelax?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#multipath_relax_variable TransportRoutingBgpFeature#multipath_relax_variable}
  */
  readonly multipathRelaxVariable?: string;
  /**
  * The name of the Feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#name TransportRoutingBgpFeature#name}
  */
  readonly name: string;
  /**
  * Propagate AS Path
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#propagate_as_path TransportRoutingBgpFeature#propagate_as_path}
  */
  readonly propagateAsPath?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#propagate_as_path_variable TransportRoutingBgpFeature#propagate_as_path_variable}
  */
  readonly propagateAsPathVariable?: string;
  /**
  * Propagate Community
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#propagate_community TransportRoutingBgpFeature#propagate_community}
  */
  readonly propagateCommunity?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#propagate_community_variable TransportRoutingBgpFeature#propagate_community_variable}
  */
  readonly propagateCommunityVariable?: string;
  /**
  * Configure BGP router identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#router_id TransportRoutingBgpFeature#router_id}
  */
  readonly routerId?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#router_id_variable TransportRoutingBgpFeature#router_id_variable}
  */
  readonly routerIdVariable?: string;
}
export interface TransportRoutingBgpFeatureIpv4AggregateAddresses {
  /**
  * Set AS set path information
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#as_set_path TransportRoutingBgpFeature#as_set_path}
  */
  readonly asSetPath?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#as_set_path_variable TransportRoutingBgpFeature#as_set_path_variable}
  */
  readonly asSetPathVariable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#network_address TransportRoutingBgpFeature#network_address}
  */
  readonly networkAddress?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#network_address_variable TransportRoutingBgpFeature#network_address_variable}
  */
  readonly networkAddressVariable?: string;
  /**
  * 
  *   - Choices: `255.255.255.255`, `255.255.255.254`, `255.255.255.252`, `255.255.255.248`, `255.255.255.240`, `255.255.255.224`, `255.255.255.192`, `255.255.255.128`, `255.255.255.0`, `255.255.254.0`, `255.255.252.0`, `255.255.248.0`, `255.255.240.0`, `255.255.224.0`, `255.255.192.0`, `255.255.128.0`, `255.255.0.0`, `255.254.0.0`, `255.252.0.0`, `255.240.0.0`, `255.224.0.0`, `255.192.0.0`, `255.128.0.0`, `255.0.0.0`, `254.0.0.0`, `252.0.0.0`, `248.0.0.0`, `240.0.0.0`, `224.0.0.0`, `192.0.0.0`, `128.0.0.0`, `0.0.0.0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#subnet_mask TransportRoutingBgpFeature#subnet_mask}
  */
  readonly subnetMask?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#subnet_mask_variable TransportRoutingBgpFeature#subnet_mask_variable}
  */
  readonly subnetMaskVariable?: string;
  /**
  * Filter out more specific routes from updates
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#summary_only TransportRoutingBgpFeature#summary_only}
  */
  readonly summaryOnly?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#summary_only_variable TransportRoutingBgpFeature#summary_only_variable}
  */
  readonly summaryOnlyVariable?: string;
}

export function transportRoutingBgpFeatureIpv4AggregateAddressesToTerraform(struct?: TransportRoutingBgpFeatureIpv4AggregateAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    as_set_path: cdktf.booleanToTerraform(struct!.asSetPath),
    as_set_path_variable: cdktf.stringToTerraform(struct!.asSetPathVariable),
    network_address: cdktf.stringToTerraform(struct!.networkAddress),
    network_address_variable: cdktf.stringToTerraform(struct!.networkAddressVariable),
    subnet_mask: cdktf.stringToTerraform(struct!.subnetMask),
    subnet_mask_variable: cdktf.stringToTerraform(struct!.subnetMaskVariable),
    summary_only: cdktf.booleanToTerraform(struct!.summaryOnly),
    summary_only_variable: cdktf.stringToTerraform(struct!.summaryOnlyVariable),
  }
}


export function transportRoutingBgpFeatureIpv4AggregateAddressesToHclTerraform(struct?: TransportRoutingBgpFeatureIpv4AggregateAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    as_set_path: {
      value: cdktf.booleanToHclTerraform(struct!.asSetPath),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    as_set_path_variable: {
      value: cdktf.stringToHclTerraform(struct!.asSetPathVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_address: {
      value: cdktf.stringToHclTerraform(struct!.networkAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_address_variable: {
      value: cdktf.stringToHclTerraform(struct!.networkAddressVariable),
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
    summary_only: {
      value: cdktf.booleanToHclTerraform(struct!.summaryOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    summary_only_variable: {
      value: cdktf.stringToHclTerraform(struct!.summaryOnlyVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TransportRoutingBgpFeatureIpv4AggregateAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TransportRoutingBgpFeatureIpv4AggregateAddresses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asSetPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.asSetPath = this._asSetPath;
    }
    if (this._asSetPathVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.asSetPathVariable = this._asSetPathVariable;
    }
    if (this._networkAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkAddress = this._networkAddress;
    }
    if (this._networkAddressVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkAddressVariable = this._networkAddressVariable;
    }
    if (this._subnetMask !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetMask = this._subnetMask;
    }
    if (this._subnetMaskVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetMaskVariable = this._subnetMaskVariable;
    }
    if (this._summaryOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.summaryOnly = this._summaryOnly;
    }
    if (this._summaryOnlyVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.summaryOnlyVariable = this._summaryOnlyVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransportRoutingBgpFeatureIpv4AggregateAddresses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._asSetPath = undefined;
      this._asSetPathVariable = undefined;
      this._networkAddress = undefined;
      this._networkAddressVariable = undefined;
      this._subnetMask = undefined;
      this._subnetMaskVariable = undefined;
      this._summaryOnly = undefined;
      this._summaryOnlyVariable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._asSetPath = value.asSetPath;
      this._asSetPathVariable = value.asSetPathVariable;
      this._networkAddress = value.networkAddress;
      this._networkAddressVariable = value.networkAddressVariable;
      this._subnetMask = value.subnetMask;
      this._subnetMaskVariable = value.subnetMaskVariable;
      this._summaryOnly = value.summaryOnly;
      this._summaryOnlyVariable = value.summaryOnlyVariable;
    }
  }

  // as_set_path - computed: false, optional: true, required: false
  private _asSetPath?: boolean | cdktf.IResolvable; 
  public get asSetPath() {
    return this.getBooleanAttribute('as_set_path');
  }
  public set asSetPath(value: boolean | cdktf.IResolvable) {
    this._asSetPath = value;
  }
  public resetAsSetPath() {
    this._asSetPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asSetPathInput() {
    return this._asSetPath;
  }

  // as_set_path_variable - computed: false, optional: true, required: false
  private _asSetPathVariable?: string; 
  public get asSetPathVariable() {
    return this.getStringAttribute('as_set_path_variable');
  }
  public set asSetPathVariable(value: string) {
    this._asSetPathVariable = value;
  }
  public resetAsSetPathVariable() {
    this._asSetPathVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asSetPathVariableInput() {
    return this._asSetPathVariable;
  }

  // network_address - computed: false, optional: true, required: false
  private _networkAddress?: string; 
  public get networkAddress() {
    return this.getStringAttribute('network_address');
  }
  public set networkAddress(value: string) {
    this._networkAddress = value;
  }
  public resetNetworkAddress() {
    this._networkAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkAddressInput() {
    return this._networkAddress;
  }

  // network_address_variable - computed: false, optional: true, required: false
  private _networkAddressVariable?: string; 
  public get networkAddressVariable() {
    return this.getStringAttribute('network_address_variable');
  }
  public set networkAddressVariable(value: string) {
    this._networkAddressVariable = value;
  }
  public resetNetworkAddressVariable() {
    this._networkAddressVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkAddressVariableInput() {
    return this._networkAddressVariable;
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

  // summary_only_variable - computed: false, optional: true, required: false
  private _summaryOnlyVariable?: string; 
  public get summaryOnlyVariable() {
    return this.getStringAttribute('summary_only_variable');
  }
  public set summaryOnlyVariable(value: string) {
    this._summaryOnlyVariable = value;
  }
  public resetSummaryOnlyVariable() {
    this._summaryOnlyVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get summaryOnlyVariableInput() {
    return this._summaryOnlyVariable;
  }
}

export class TransportRoutingBgpFeatureIpv4AggregateAddressesList extends cdktf.ComplexList {
  public internalValue? : TransportRoutingBgpFeatureIpv4AggregateAddresses[] | cdktf.IResolvable

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
  public get(index: number): TransportRoutingBgpFeatureIpv4AggregateAddressesOutputReference {
    return new TransportRoutingBgpFeatureIpv4AggregateAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TransportRoutingBgpFeatureIpv4NeighborsAddressFamilies {
  /**
  * Set maximum number of prefixes accepted from BGP peer, Attribute conditional on `policy_type` being equal to `disable-peer`
  *   - Range: `1`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#disable_peer_max_number_of_prefixes TransportRoutingBgpFeature#disable_peer_max_number_of_prefixes}
  */
  readonly disablePeerMaxNumberOfPrefixes?: number;
  /**
  * Variable name, Attribute conditional on `policy_type` being equal to `disable-peer`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#disable_peer_max_number_of_prefixes_variable TransportRoutingBgpFeature#disable_peer_max_number_of_prefixes_variable}
  */
  readonly disablePeerMaxNumberOfPrefixesVariable?: string;
  /**
  * Set threshold(1 to 100) at which to generate a warning message, Attribute conditional on `policy_type` being equal to `disable-peer`
  *   - Range: `1`-`100`
  *   - Default value: `75`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#disable_peer_threshold TransportRoutingBgpFeature#disable_peer_threshold}
  */
  readonly disablePeerThreshold?: number;
  /**
  * Variable name, Attribute conditional on `policy_type` being equal to `disable-peer`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#disable_peer_threshold_variable TransportRoutingBgpFeature#disable_peer_threshold_variable}
  */
  readonly disablePeerThresholdVariable?: string;
  /**
  * Set IPv4 unicast address family
  *   - Choices: `ipv4-unicast`, `vpnv4-unicast`, `vpnv6-unicast`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#family_type TransportRoutingBgpFeature#family_type}
  */
  readonly familyType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#in_route_policy_id TransportRoutingBgpFeature#in_route_policy_id}
  */
  readonly inRoutePolicyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#out_route_policy_id TransportRoutingBgpFeature#out_route_policy_id}
  */
  readonly outRoutePolicyId?: string;
  /**
  * Neighbor received maximum prefix policy is disabled.
  *   - Choices: `restart`, `off`, `warning-only`, `disable-peer`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#policy_type TransportRoutingBgpFeature#policy_type}
  */
  readonly policyType?: string;
  /**
  * Set the restart interval(minutes) when to restart BGP connection if threshold is exceeded, Attribute conditional on `policy_type` being equal to `restart`
  *   - Range: `1`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#restart_interval TransportRoutingBgpFeature#restart_interval}
  */
  readonly restartInterval?: number;
  /**
  * Variable name, Attribute conditional on `policy_type` being equal to `restart`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#restart_interval_variable TransportRoutingBgpFeature#restart_interval_variable}
  */
  readonly restartIntervalVariable?: string;
  /**
  * Set maximum number of prefixes accepted from BGP peer, Attribute conditional on `policy_type` being equal to `restart`
  *   - Range: `1`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#restart_max_number_of_prefixes TransportRoutingBgpFeature#restart_max_number_of_prefixes}
  */
  readonly restartMaxNumberOfPrefixes?: number;
  /**
  * Variable name, Attribute conditional on `policy_type` being equal to `restart`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#restart_max_number_of_prefixes_variable TransportRoutingBgpFeature#restart_max_number_of_prefixes_variable}
  */
  readonly restartMaxNumberOfPrefixesVariable?: string;
  /**
  * Set threshold(1 to 100) at which to generate a warning message, Attribute conditional on `policy_type` being equal to `restart`
  *   - Range: `1`-`100`
  *   - Default value: `75`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#restart_threshold TransportRoutingBgpFeature#restart_threshold}
  */
  readonly restartThreshold?: number;
  /**
  * Variable name, Attribute conditional on `policy_type` being equal to `restart`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#restart_threshold_variable TransportRoutingBgpFeature#restart_threshold_variable}
  */
  readonly restartThresholdVariable?: string;
  /**
  * Set maximum number of prefixes accepted from BGP peer, Attribute conditional on `policy_type` being equal to `warning-only`
  *   - Range: `1`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#warning_message_max_number_of_prefixes TransportRoutingBgpFeature#warning_message_max_number_of_prefixes}
  */
  readonly warningMessageMaxNumberOfPrefixes?: number;
  /**
  * Variable name, Attribute conditional on `policy_type` being equal to `warning-only`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#warning_message_max_number_of_prefixes_variable TransportRoutingBgpFeature#warning_message_max_number_of_prefixes_variable}
  */
  readonly warningMessageMaxNumberOfPrefixesVariable?: string;
  /**
  * Set threshold(1 to 100) at which to generate a warning message, Attribute conditional on `policy_type` being equal to `warning-only`
  *   - Range: `1`-`100`
  *   - Default value: `75`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#warning_message_threshold TransportRoutingBgpFeature#warning_message_threshold}
  */
  readonly warningMessageThreshold?: number;
  /**
  * Variable name, Attribute conditional on `policy_type` being equal to `warning-only`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#warning_message_threshold_variable TransportRoutingBgpFeature#warning_message_threshold_variable}
  */
  readonly warningMessageThresholdVariable?: string;
}

export function transportRoutingBgpFeatureIpv4NeighborsAddressFamiliesToTerraform(struct?: TransportRoutingBgpFeatureIpv4NeighborsAddressFamilies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_peer_max_number_of_prefixes: cdktf.numberToTerraform(struct!.disablePeerMaxNumberOfPrefixes),
    disable_peer_max_number_of_prefixes_variable: cdktf.stringToTerraform(struct!.disablePeerMaxNumberOfPrefixesVariable),
    disable_peer_threshold: cdktf.numberToTerraform(struct!.disablePeerThreshold),
    disable_peer_threshold_variable: cdktf.stringToTerraform(struct!.disablePeerThresholdVariable),
    family_type: cdktf.stringToTerraform(struct!.familyType),
    in_route_policy_id: cdktf.stringToTerraform(struct!.inRoutePolicyId),
    out_route_policy_id: cdktf.stringToTerraform(struct!.outRoutePolicyId),
    policy_type: cdktf.stringToTerraform(struct!.policyType),
    restart_interval: cdktf.numberToTerraform(struct!.restartInterval),
    restart_interval_variable: cdktf.stringToTerraform(struct!.restartIntervalVariable),
    restart_max_number_of_prefixes: cdktf.numberToTerraform(struct!.restartMaxNumberOfPrefixes),
    restart_max_number_of_prefixes_variable: cdktf.stringToTerraform(struct!.restartMaxNumberOfPrefixesVariable),
    restart_threshold: cdktf.numberToTerraform(struct!.restartThreshold),
    restart_threshold_variable: cdktf.stringToTerraform(struct!.restartThresholdVariable),
    warning_message_max_number_of_prefixes: cdktf.numberToTerraform(struct!.warningMessageMaxNumberOfPrefixes),
    warning_message_max_number_of_prefixes_variable: cdktf.stringToTerraform(struct!.warningMessageMaxNumberOfPrefixesVariable),
    warning_message_threshold: cdktf.numberToTerraform(struct!.warningMessageThreshold),
    warning_message_threshold_variable: cdktf.stringToTerraform(struct!.warningMessageThresholdVariable),
  }
}


export function transportRoutingBgpFeatureIpv4NeighborsAddressFamiliesToHclTerraform(struct?: TransportRoutingBgpFeatureIpv4NeighborsAddressFamilies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_peer_max_number_of_prefixes: {
      value: cdktf.numberToHclTerraform(struct!.disablePeerMaxNumberOfPrefixes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disable_peer_max_number_of_prefixes_variable: {
      value: cdktf.stringToHclTerraform(struct!.disablePeerMaxNumberOfPrefixesVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable_peer_threshold: {
      value: cdktf.numberToHclTerraform(struct!.disablePeerThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disable_peer_threshold_variable: {
      value: cdktf.stringToHclTerraform(struct!.disablePeerThresholdVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    family_type: {
      value: cdktf.stringToHclTerraform(struct!.familyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    in_route_policy_id: {
      value: cdktf.stringToHclTerraform(struct!.inRoutePolicyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    out_route_policy_id: {
      value: cdktf.stringToHclTerraform(struct!.outRoutePolicyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policy_type: {
      value: cdktf.stringToHclTerraform(struct!.policyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    restart_interval: {
      value: cdktf.numberToHclTerraform(struct!.restartInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    restart_interval_variable: {
      value: cdktf.stringToHclTerraform(struct!.restartIntervalVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    restart_max_number_of_prefixes: {
      value: cdktf.numberToHclTerraform(struct!.restartMaxNumberOfPrefixes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    restart_max_number_of_prefixes_variable: {
      value: cdktf.stringToHclTerraform(struct!.restartMaxNumberOfPrefixesVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    restart_threshold: {
      value: cdktf.numberToHclTerraform(struct!.restartThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    restart_threshold_variable: {
      value: cdktf.stringToHclTerraform(struct!.restartThresholdVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    warning_message_max_number_of_prefixes: {
      value: cdktf.numberToHclTerraform(struct!.warningMessageMaxNumberOfPrefixes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    warning_message_max_number_of_prefixes_variable: {
      value: cdktf.stringToHclTerraform(struct!.warningMessageMaxNumberOfPrefixesVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    warning_message_threshold: {
      value: cdktf.numberToHclTerraform(struct!.warningMessageThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    warning_message_threshold_variable: {
      value: cdktf.stringToHclTerraform(struct!.warningMessageThresholdVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TransportRoutingBgpFeatureIpv4NeighborsAddressFamiliesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TransportRoutingBgpFeatureIpv4NeighborsAddressFamilies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disablePeerMaxNumberOfPrefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.disablePeerMaxNumberOfPrefixes = this._disablePeerMaxNumberOfPrefixes;
    }
    if (this._disablePeerMaxNumberOfPrefixesVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disablePeerMaxNumberOfPrefixesVariable = this._disablePeerMaxNumberOfPrefixesVariable;
    }
    if (this._disablePeerThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.disablePeerThreshold = this._disablePeerThreshold;
    }
    if (this._disablePeerThresholdVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disablePeerThresholdVariable = this._disablePeerThresholdVariable;
    }
    if (this._familyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.familyType = this._familyType;
    }
    if (this._inRoutePolicyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.inRoutePolicyId = this._inRoutePolicyId;
    }
    if (this._outRoutePolicyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.outRoutePolicyId = this._outRoutePolicyId;
    }
    if (this._policyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyType = this._policyType;
    }
    if (this._restartInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.restartInterval = this._restartInterval;
    }
    if (this._restartIntervalVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.restartIntervalVariable = this._restartIntervalVariable;
    }
    if (this._restartMaxNumberOfPrefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.restartMaxNumberOfPrefixes = this._restartMaxNumberOfPrefixes;
    }
    if (this._restartMaxNumberOfPrefixesVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.restartMaxNumberOfPrefixesVariable = this._restartMaxNumberOfPrefixesVariable;
    }
    if (this._restartThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.restartThreshold = this._restartThreshold;
    }
    if (this._restartThresholdVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.restartThresholdVariable = this._restartThresholdVariable;
    }
    if (this._warningMessageMaxNumberOfPrefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.warningMessageMaxNumberOfPrefixes = this._warningMessageMaxNumberOfPrefixes;
    }
    if (this._warningMessageMaxNumberOfPrefixesVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.warningMessageMaxNumberOfPrefixesVariable = this._warningMessageMaxNumberOfPrefixesVariable;
    }
    if (this._warningMessageThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.warningMessageThreshold = this._warningMessageThreshold;
    }
    if (this._warningMessageThresholdVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.warningMessageThresholdVariable = this._warningMessageThresholdVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransportRoutingBgpFeatureIpv4NeighborsAddressFamilies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disablePeerMaxNumberOfPrefixes = undefined;
      this._disablePeerMaxNumberOfPrefixesVariable = undefined;
      this._disablePeerThreshold = undefined;
      this._disablePeerThresholdVariable = undefined;
      this._familyType = undefined;
      this._inRoutePolicyId = undefined;
      this._outRoutePolicyId = undefined;
      this._policyType = undefined;
      this._restartInterval = undefined;
      this._restartIntervalVariable = undefined;
      this._restartMaxNumberOfPrefixes = undefined;
      this._restartMaxNumberOfPrefixesVariable = undefined;
      this._restartThreshold = undefined;
      this._restartThresholdVariable = undefined;
      this._warningMessageMaxNumberOfPrefixes = undefined;
      this._warningMessageMaxNumberOfPrefixesVariable = undefined;
      this._warningMessageThreshold = undefined;
      this._warningMessageThresholdVariable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disablePeerMaxNumberOfPrefixes = value.disablePeerMaxNumberOfPrefixes;
      this._disablePeerMaxNumberOfPrefixesVariable = value.disablePeerMaxNumberOfPrefixesVariable;
      this._disablePeerThreshold = value.disablePeerThreshold;
      this._disablePeerThresholdVariable = value.disablePeerThresholdVariable;
      this._familyType = value.familyType;
      this._inRoutePolicyId = value.inRoutePolicyId;
      this._outRoutePolicyId = value.outRoutePolicyId;
      this._policyType = value.policyType;
      this._restartInterval = value.restartInterval;
      this._restartIntervalVariable = value.restartIntervalVariable;
      this._restartMaxNumberOfPrefixes = value.restartMaxNumberOfPrefixes;
      this._restartMaxNumberOfPrefixesVariable = value.restartMaxNumberOfPrefixesVariable;
      this._restartThreshold = value.restartThreshold;
      this._restartThresholdVariable = value.restartThresholdVariable;
      this._warningMessageMaxNumberOfPrefixes = value.warningMessageMaxNumberOfPrefixes;
      this._warningMessageMaxNumberOfPrefixesVariable = value.warningMessageMaxNumberOfPrefixesVariable;
      this._warningMessageThreshold = value.warningMessageThreshold;
      this._warningMessageThresholdVariable = value.warningMessageThresholdVariable;
    }
  }

  // disable_peer_max_number_of_prefixes - computed: false, optional: true, required: false
  private _disablePeerMaxNumberOfPrefixes?: number; 
  public get disablePeerMaxNumberOfPrefixes() {
    return this.getNumberAttribute('disable_peer_max_number_of_prefixes');
  }
  public set disablePeerMaxNumberOfPrefixes(value: number) {
    this._disablePeerMaxNumberOfPrefixes = value;
  }
  public resetDisablePeerMaxNumberOfPrefixes() {
    this._disablePeerMaxNumberOfPrefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disablePeerMaxNumberOfPrefixesInput() {
    return this._disablePeerMaxNumberOfPrefixes;
  }

  // disable_peer_max_number_of_prefixes_variable - computed: false, optional: true, required: false
  private _disablePeerMaxNumberOfPrefixesVariable?: string; 
  public get disablePeerMaxNumberOfPrefixesVariable() {
    return this.getStringAttribute('disable_peer_max_number_of_prefixes_variable');
  }
  public set disablePeerMaxNumberOfPrefixesVariable(value: string) {
    this._disablePeerMaxNumberOfPrefixesVariable = value;
  }
  public resetDisablePeerMaxNumberOfPrefixesVariable() {
    this._disablePeerMaxNumberOfPrefixesVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disablePeerMaxNumberOfPrefixesVariableInput() {
    return this._disablePeerMaxNumberOfPrefixesVariable;
  }

  // disable_peer_threshold - computed: false, optional: true, required: false
  private _disablePeerThreshold?: number; 
  public get disablePeerThreshold() {
    return this.getNumberAttribute('disable_peer_threshold');
  }
  public set disablePeerThreshold(value: number) {
    this._disablePeerThreshold = value;
  }
  public resetDisablePeerThreshold() {
    this._disablePeerThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disablePeerThresholdInput() {
    return this._disablePeerThreshold;
  }

  // disable_peer_threshold_variable - computed: false, optional: true, required: false
  private _disablePeerThresholdVariable?: string; 
  public get disablePeerThresholdVariable() {
    return this.getStringAttribute('disable_peer_threshold_variable');
  }
  public set disablePeerThresholdVariable(value: string) {
    this._disablePeerThresholdVariable = value;
  }
  public resetDisablePeerThresholdVariable() {
    this._disablePeerThresholdVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disablePeerThresholdVariableInput() {
    return this._disablePeerThresholdVariable;
  }

  // family_type - computed: false, optional: true, required: false
  private _familyType?: string; 
  public get familyType() {
    return this.getStringAttribute('family_type');
  }
  public set familyType(value: string) {
    this._familyType = value;
  }
  public resetFamilyType() {
    this._familyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get familyTypeInput() {
    return this._familyType;
  }

  // in_route_policy_id - computed: false, optional: true, required: false
  private _inRoutePolicyId?: string; 
  public get inRoutePolicyId() {
    return this.getStringAttribute('in_route_policy_id');
  }
  public set inRoutePolicyId(value: string) {
    this._inRoutePolicyId = value;
  }
  public resetInRoutePolicyId() {
    this._inRoutePolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inRoutePolicyIdInput() {
    return this._inRoutePolicyId;
  }

  // out_route_policy_id - computed: false, optional: true, required: false
  private _outRoutePolicyId?: string; 
  public get outRoutePolicyId() {
    return this.getStringAttribute('out_route_policy_id');
  }
  public set outRoutePolicyId(value: string) {
    this._outRoutePolicyId = value;
  }
  public resetOutRoutePolicyId() {
    this._outRoutePolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outRoutePolicyIdInput() {
    return this._outRoutePolicyId;
  }

  // policy_type - computed: false, optional: true, required: false
  private _policyType?: string; 
  public get policyType() {
    return this.getStringAttribute('policy_type');
  }
  public set policyType(value: string) {
    this._policyType = value;
  }
  public resetPolicyType() {
    this._policyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyTypeInput() {
    return this._policyType;
  }

  // restart_interval - computed: false, optional: true, required: false
  private _restartInterval?: number; 
  public get restartInterval() {
    return this.getNumberAttribute('restart_interval');
  }
  public set restartInterval(value: number) {
    this._restartInterval = value;
  }
  public resetRestartInterval() {
    this._restartInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restartIntervalInput() {
    return this._restartInterval;
  }

  // restart_interval_variable - computed: false, optional: true, required: false
  private _restartIntervalVariable?: string; 
  public get restartIntervalVariable() {
    return this.getStringAttribute('restart_interval_variable');
  }
  public set restartIntervalVariable(value: string) {
    this._restartIntervalVariable = value;
  }
  public resetRestartIntervalVariable() {
    this._restartIntervalVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restartIntervalVariableInput() {
    return this._restartIntervalVariable;
  }

  // restart_max_number_of_prefixes - computed: false, optional: true, required: false
  private _restartMaxNumberOfPrefixes?: number; 
  public get restartMaxNumberOfPrefixes() {
    return this.getNumberAttribute('restart_max_number_of_prefixes');
  }
  public set restartMaxNumberOfPrefixes(value: number) {
    this._restartMaxNumberOfPrefixes = value;
  }
  public resetRestartMaxNumberOfPrefixes() {
    this._restartMaxNumberOfPrefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restartMaxNumberOfPrefixesInput() {
    return this._restartMaxNumberOfPrefixes;
  }

  // restart_max_number_of_prefixes_variable - computed: false, optional: true, required: false
  private _restartMaxNumberOfPrefixesVariable?: string; 
  public get restartMaxNumberOfPrefixesVariable() {
    return this.getStringAttribute('restart_max_number_of_prefixes_variable');
  }
  public set restartMaxNumberOfPrefixesVariable(value: string) {
    this._restartMaxNumberOfPrefixesVariable = value;
  }
  public resetRestartMaxNumberOfPrefixesVariable() {
    this._restartMaxNumberOfPrefixesVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restartMaxNumberOfPrefixesVariableInput() {
    return this._restartMaxNumberOfPrefixesVariable;
  }

  // restart_threshold - computed: false, optional: true, required: false
  private _restartThreshold?: number; 
  public get restartThreshold() {
    return this.getNumberAttribute('restart_threshold');
  }
  public set restartThreshold(value: number) {
    this._restartThreshold = value;
  }
  public resetRestartThreshold() {
    this._restartThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restartThresholdInput() {
    return this._restartThreshold;
  }

  // restart_threshold_variable - computed: false, optional: true, required: false
  private _restartThresholdVariable?: string; 
  public get restartThresholdVariable() {
    return this.getStringAttribute('restart_threshold_variable');
  }
  public set restartThresholdVariable(value: string) {
    this._restartThresholdVariable = value;
  }
  public resetRestartThresholdVariable() {
    this._restartThresholdVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restartThresholdVariableInput() {
    return this._restartThresholdVariable;
  }

  // warning_message_max_number_of_prefixes - computed: false, optional: true, required: false
  private _warningMessageMaxNumberOfPrefixes?: number; 
  public get warningMessageMaxNumberOfPrefixes() {
    return this.getNumberAttribute('warning_message_max_number_of_prefixes');
  }
  public set warningMessageMaxNumberOfPrefixes(value: number) {
    this._warningMessageMaxNumberOfPrefixes = value;
  }
  public resetWarningMessageMaxNumberOfPrefixes() {
    this._warningMessageMaxNumberOfPrefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warningMessageMaxNumberOfPrefixesInput() {
    return this._warningMessageMaxNumberOfPrefixes;
  }

  // warning_message_max_number_of_prefixes_variable - computed: false, optional: true, required: false
  private _warningMessageMaxNumberOfPrefixesVariable?: string; 
  public get warningMessageMaxNumberOfPrefixesVariable() {
    return this.getStringAttribute('warning_message_max_number_of_prefixes_variable');
  }
  public set warningMessageMaxNumberOfPrefixesVariable(value: string) {
    this._warningMessageMaxNumberOfPrefixesVariable = value;
  }
  public resetWarningMessageMaxNumberOfPrefixesVariable() {
    this._warningMessageMaxNumberOfPrefixesVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warningMessageMaxNumberOfPrefixesVariableInput() {
    return this._warningMessageMaxNumberOfPrefixesVariable;
  }

  // warning_message_threshold - computed: false, optional: true, required: false
  private _warningMessageThreshold?: number; 
  public get warningMessageThreshold() {
    return this.getNumberAttribute('warning_message_threshold');
  }
  public set warningMessageThreshold(value: number) {
    this._warningMessageThreshold = value;
  }
  public resetWarningMessageThreshold() {
    this._warningMessageThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warningMessageThresholdInput() {
    return this._warningMessageThreshold;
  }

  // warning_message_threshold_variable - computed: false, optional: true, required: false
  private _warningMessageThresholdVariable?: string; 
  public get warningMessageThresholdVariable() {
    return this.getStringAttribute('warning_message_threshold_variable');
  }
  public set warningMessageThresholdVariable(value: string) {
    this._warningMessageThresholdVariable = value;
  }
  public resetWarningMessageThresholdVariable() {
    this._warningMessageThresholdVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warningMessageThresholdVariableInput() {
    return this._warningMessageThresholdVariable;
  }
}

export class TransportRoutingBgpFeatureIpv4NeighborsAddressFamiliesList extends cdktf.ComplexList {
  public internalValue? : TransportRoutingBgpFeatureIpv4NeighborsAddressFamilies[] | cdktf.IResolvable

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
  public get(index: number): TransportRoutingBgpFeatureIpv4NeighborsAddressFamiliesOutputReference {
    return new TransportRoutingBgpFeatureIpv4NeighborsAddressFamiliesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TransportRoutingBgpFeatureIpv4Neighbors {
  /**
  * Set neighbor address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#address TransportRoutingBgpFeature#address}
  */
  readonly address?: string;
  /**
  * Set BGP address family
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#address_families TransportRoutingBgpFeature#address_families}
  */
  readonly addressFamilies?: TransportRoutingBgpFeatureIpv4NeighborsAddressFamilies[] | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#address_variable TransportRoutingBgpFeature#address_variable}
  */
  readonly addressVariable?: string;
  /**
  * The number of accept as-path with my AS present in it
  *   - Range: `1`-`10`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#allowas_in_number TransportRoutingBgpFeature#allowas_in_number}
  */
  readonly allowasInNumber?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#allowas_in_number_variable TransportRoutingBgpFeature#allowas_in_number_variable}
  */
  readonly allowasInNumberVariable?: string;
  /**
  * Override matching AS-number while sending update
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#as_override TransportRoutingBgpFeature#as_override}
  */
  readonly asOverride?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#as_override_variable TransportRoutingBgpFeature#as_override_variable}
  */
  readonly asOverrideVariable?: string;
  /**
  * Set description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#description TransportRoutingBgpFeature#description}
  */
  readonly description?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#description_variable TransportRoutingBgpFeature#description_variable}
  */
  readonly descriptionVariable?: string;
  /**
  * Set TTL value for peers that are not directly connected
  *   - Range: `1`-`255`
  *   - Default value: `1`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#ebgp_multihop TransportRoutingBgpFeature#ebgp_multihop}
  */
  readonly ebgpMultihop?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#ebgp_multihop_variable TransportRoutingBgpFeature#ebgp_multihop_variable}
  */
  readonly ebgpMultihopVariable?: string;
  /**
  * Send explicit null label
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#explicit_null TransportRoutingBgpFeature#explicit_null}
  */
  readonly explicitNull?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#explicit_null_variable TransportRoutingBgpFeature#explicit_null_variable}
  */
  readonly explicitNullVariable?: string;
  /**
  * Set how long to wait since receiving a keepalive message to consider BGP peer unavailable
  *   - Range: `0`-`65535`
  *   - Default value: `180`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#hold_time TransportRoutingBgpFeature#hold_time}
  */
  readonly holdTime?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#hold_time_variable TransportRoutingBgpFeature#hold_time_variable}
  */
  readonly holdTimeVariable?: string;
  /**
  * Set how often to advertise keepalive messages to BGP peer
  *   - Range: `0`-`65535`
  *   - Default value: `60`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#keepalive_time TransportRoutingBgpFeature#keepalive_time}
  */
  readonly keepaliveTime?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#keepalive_time_variable TransportRoutingBgpFeature#keepalive_time_variable}
  */
  readonly keepaliveTimeVariable?: string;
  /**
  * Set local autonomous number,Local-AS cannot have the local BGP protocol AS number or the AS number of the remote peer.The local-as is valid only if the peer is a true eBGP peer. It does not work for two peers in different sub-ASs in a confederation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#local_as TransportRoutingBgpFeature#local_as}
  */
  readonly localAs?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#local_as_variable TransportRoutingBgpFeature#local_as_variable}
  */
  readonly localAsVariable?: string;
  /**
  * Set router to be next hop for routes advertised to neighbor
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#next_hop_self TransportRoutingBgpFeature#next_hop_self}
  */
  readonly nextHopSelf?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#next_hop_self_variable TransportRoutingBgpFeature#next_hop_self_variable}
  */
  readonly nextHopSelfVariable?: string;
  /**
  * Set MD5 password on TCP connection with BGP peer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#password TransportRoutingBgpFeature#password}
  */
  readonly password?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#password_variable TransportRoutingBgpFeature#password_variable}
  */
  readonly passwordVariable?: string;
  /**
  * Set remote autonomous system number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#remote_as TransportRoutingBgpFeature#remote_as}
  */
  readonly remoteAs?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#remote_as_variable TransportRoutingBgpFeature#remote_as_variable}
  */
  readonly remoteAsVariable?: string;
  /**
  * Send community attribute
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#send_community TransportRoutingBgpFeature#send_community}
  */
  readonly sendCommunity?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#send_community_variable TransportRoutingBgpFeature#send_community_variable}
  */
  readonly sendCommunityVariable?: string;
  /**
  * Send extended community attribute
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#send_extended_community TransportRoutingBgpFeature#send_extended_community}
  */
  readonly sendExtendedCommunity?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#send_extended_community_variable TransportRoutingBgpFeature#send_extended_community_variable}
  */
  readonly sendExtendedCommunityVariable?: string;
  /**
  * Send label
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#send_label TransportRoutingBgpFeature#send_label}
  */
  readonly sendLabel?: boolean | cdktf.IResolvable;
  /**
  * Enable or disable a BGP neighbor
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#shutdown TransportRoutingBgpFeature#shutdown}
  */
  readonly shutdown?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#shutdown_variable TransportRoutingBgpFeature#shutdown_variable}
  */
  readonly shutdownVariable?: string;
  /**
  * Source interface name for BGP neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#update_source_interface TransportRoutingBgpFeature#update_source_interface}
  */
  readonly updateSourceInterface?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#update_source_interface_variable TransportRoutingBgpFeature#update_source_interface_variable}
  */
  readonly updateSourceInterfaceVariable?: string;
}

export function transportRoutingBgpFeatureIpv4NeighborsToTerraform(struct?: TransportRoutingBgpFeatureIpv4Neighbors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    address_families: cdktf.listMapper(transportRoutingBgpFeatureIpv4NeighborsAddressFamiliesToTerraform, false)(struct!.addressFamilies),
    address_variable: cdktf.stringToTerraform(struct!.addressVariable),
    allowas_in_number: cdktf.numberToTerraform(struct!.allowasInNumber),
    allowas_in_number_variable: cdktf.stringToTerraform(struct!.allowasInNumberVariable),
    as_override: cdktf.booleanToTerraform(struct!.asOverride),
    as_override_variable: cdktf.stringToTerraform(struct!.asOverrideVariable),
    description: cdktf.stringToTerraform(struct!.description),
    description_variable: cdktf.stringToTerraform(struct!.descriptionVariable),
    ebgp_multihop: cdktf.numberToTerraform(struct!.ebgpMultihop),
    ebgp_multihop_variable: cdktf.stringToTerraform(struct!.ebgpMultihopVariable),
    explicit_null: cdktf.booleanToTerraform(struct!.explicitNull),
    explicit_null_variable: cdktf.stringToTerraform(struct!.explicitNullVariable),
    hold_time: cdktf.numberToTerraform(struct!.holdTime),
    hold_time_variable: cdktf.stringToTerraform(struct!.holdTimeVariable),
    keepalive_time: cdktf.numberToTerraform(struct!.keepaliveTime),
    keepalive_time_variable: cdktf.stringToTerraform(struct!.keepaliveTimeVariable),
    local_as: cdktf.numberToTerraform(struct!.localAs),
    local_as_variable: cdktf.stringToTerraform(struct!.localAsVariable),
    next_hop_self: cdktf.booleanToTerraform(struct!.nextHopSelf),
    next_hop_self_variable: cdktf.stringToTerraform(struct!.nextHopSelfVariable),
    password: cdktf.stringToTerraform(struct!.password),
    password_variable: cdktf.stringToTerraform(struct!.passwordVariable),
    remote_as: cdktf.numberToTerraform(struct!.remoteAs),
    remote_as_variable: cdktf.stringToTerraform(struct!.remoteAsVariable),
    send_community: cdktf.booleanToTerraform(struct!.sendCommunity),
    send_community_variable: cdktf.stringToTerraform(struct!.sendCommunityVariable),
    send_extended_community: cdktf.booleanToTerraform(struct!.sendExtendedCommunity),
    send_extended_community_variable: cdktf.stringToTerraform(struct!.sendExtendedCommunityVariable),
    send_label: cdktf.booleanToTerraform(struct!.sendLabel),
    shutdown: cdktf.booleanToTerraform(struct!.shutdown),
    shutdown_variable: cdktf.stringToTerraform(struct!.shutdownVariable),
    update_source_interface: cdktf.stringToTerraform(struct!.updateSourceInterface),
    update_source_interface_variable: cdktf.stringToTerraform(struct!.updateSourceInterfaceVariable),
  }
}


export function transportRoutingBgpFeatureIpv4NeighborsToHclTerraform(struct?: TransportRoutingBgpFeatureIpv4Neighbors | cdktf.IResolvable): any {
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
    address_families: {
      value: cdktf.listMapperHcl(transportRoutingBgpFeatureIpv4NeighborsAddressFamiliesToHclTerraform, false)(struct!.addressFamilies),
      isBlock: true,
      type: "list",
      storageClassType: "TransportRoutingBgpFeatureIpv4NeighborsAddressFamiliesList",
    },
    address_variable: {
      value: cdktf.stringToHclTerraform(struct!.addressVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    allowas_in_number: {
      value: cdktf.numberToHclTerraform(struct!.allowasInNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    allowas_in_number_variable: {
      value: cdktf.stringToHclTerraform(struct!.allowasInNumberVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    as_override: {
      value: cdktf.booleanToHclTerraform(struct!.asOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    as_override_variable: {
      value: cdktf.stringToHclTerraform(struct!.asOverrideVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
    ebgp_multihop: {
      value: cdktf.numberToHclTerraform(struct!.ebgpMultihop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ebgp_multihop_variable: {
      value: cdktf.stringToHclTerraform(struct!.ebgpMultihopVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    explicit_null: {
      value: cdktf.booleanToHclTerraform(struct!.explicitNull),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    explicit_null_variable: {
      value: cdktf.stringToHclTerraform(struct!.explicitNullVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hold_time: {
      value: cdktf.numberToHclTerraform(struct!.holdTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hold_time_variable: {
      value: cdktf.stringToHclTerraform(struct!.holdTimeVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keepalive_time: {
      value: cdktf.numberToHclTerraform(struct!.keepaliveTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    keepalive_time_variable: {
      value: cdktf.stringToHclTerraform(struct!.keepaliveTimeVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_as: {
      value: cdktf.numberToHclTerraform(struct!.localAs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    local_as_variable: {
      value: cdktf.stringToHclTerraform(struct!.localAsVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    next_hop_self: {
      value: cdktf.booleanToHclTerraform(struct!.nextHopSelf),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    next_hop_self_variable: {
      value: cdktf.stringToHclTerraform(struct!.nextHopSelfVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password_variable: {
      value: cdktf.stringToHclTerraform(struct!.passwordVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_as: {
      value: cdktf.numberToHclTerraform(struct!.remoteAs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    remote_as_variable: {
      value: cdktf.stringToHclTerraform(struct!.remoteAsVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    send_community: {
      value: cdktf.booleanToHclTerraform(struct!.sendCommunity),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    send_community_variable: {
      value: cdktf.stringToHclTerraform(struct!.sendCommunityVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    send_extended_community: {
      value: cdktf.booleanToHclTerraform(struct!.sendExtendedCommunity),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    send_extended_community_variable: {
      value: cdktf.stringToHclTerraform(struct!.sendExtendedCommunityVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    send_label: {
      value: cdktf.booleanToHclTerraform(struct!.sendLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    shutdown: {
      value: cdktf.booleanToHclTerraform(struct!.shutdown),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    shutdown_variable: {
      value: cdktf.stringToHclTerraform(struct!.shutdownVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update_source_interface: {
      value: cdktf.stringToHclTerraform(struct!.updateSourceInterface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update_source_interface_variable: {
      value: cdktf.stringToHclTerraform(struct!.updateSourceInterfaceVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TransportRoutingBgpFeatureIpv4NeighborsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TransportRoutingBgpFeatureIpv4Neighbors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._addressFamilies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressFamilies = this._addressFamilies?.internalValue;
    }
    if (this._addressVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressVariable = this._addressVariable;
    }
    if (this._allowasInNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowasInNumber = this._allowasInNumber;
    }
    if (this._allowasInNumberVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowasInNumberVariable = this._allowasInNumberVariable;
    }
    if (this._asOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.asOverride = this._asOverride;
    }
    if (this._asOverrideVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.asOverrideVariable = this._asOverrideVariable;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._descriptionVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.descriptionVariable = this._descriptionVariable;
    }
    if (this._ebgpMultihop !== undefined) {
      hasAnyValues = true;
      internalValueResult.ebgpMultihop = this._ebgpMultihop;
    }
    if (this._ebgpMultihopVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.ebgpMultihopVariable = this._ebgpMultihopVariable;
    }
    if (this._explicitNull !== undefined) {
      hasAnyValues = true;
      internalValueResult.explicitNull = this._explicitNull;
    }
    if (this._explicitNullVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.explicitNullVariable = this._explicitNullVariable;
    }
    if (this._holdTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.holdTime = this._holdTime;
    }
    if (this._holdTimeVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.holdTimeVariable = this._holdTimeVariable;
    }
    if (this._keepaliveTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepaliveTime = this._keepaliveTime;
    }
    if (this._keepaliveTimeVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepaliveTimeVariable = this._keepaliveTimeVariable;
    }
    if (this._localAs !== undefined) {
      hasAnyValues = true;
      internalValueResult.localAs = this._localAs;
    }
    if (this._localAsVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.localAsVariable = this._localAsVariable;
    }
    if (this._nextHopSelf !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextHopSelf = this._nextHopSelf;
    }
    if (this._nextHopSelfVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextHopSelfVariable = this._nextHopSelfVariable;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._passwordVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordVariable = this._passwordVariable;
    }
    if (this._remoteAs !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteAs = this._remoteAs;
    }
    if (this._remoteAsVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteAsVariable = this._remoteAsVariable;
    }
    if (this._sendCommunity !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendCommunity = this._sendCommunity;
    }
    if (this._sendCommunityVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendCommunityVariable = this._sendCommunityVariable;
    }
    if (this._sendExtendedCommunity !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendExtendedCommunity = this._sendExtendedCommunity;
    }
    if (this._sendExtendedCommunityVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendExtendedCommunityVariable = this._sendExtendedCommunityVariable;
    }
    if (this._sendLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendLabel = this._sendLabel;
    }
    if (this._shutdown !== undefined) {
      hasAnyValues = true;
      internalValueResult.shutdown = this._shutdown;
    }
    if (this._shutdownVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.shutdownVariable = this._shutdownVariable;
    }
    if (this._updateSourceInterface !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateSourceInterface = this._updateSourceInterface;
    }
    if (this._updateSourceInterfaceVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateSourceInterfaceVariable = this._updateSourceInterfaceVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransportRoutingBgpFeatureIpv4Neighbors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._addressFamilies.internalValue = undefined;
      this._addressVariable = undefined;
      this._allowasInNumber = undefined;
      this._allowasInNumberVariable = undefined;
      this._asOverride = undefined;
      this._asOverrideVariable = undefined;
      this._description = undefined;
      this._descriptionVariable = undefined;
      this._ebgpMultihop = undefined;
      this._ebgpMultihopVariable = undefined;
      this._explicitNull = undefined;
      this._explicitNullVariable = undefined;
      this._holdTime = undefined;
      this._holdTimeVariable = undefined;
      this._keepaliveTime = undefined;
      this._keepaliveTimeVariable = undefined;
      this._localAs = undefined;
      this._localAsVariable = undefined;
      this._nextHopSelf = undefined;
      this._nextHopSelfVariable = undefined;
      this._password = undefined;
      this._passwordVariable = undefined;
      this._remoteAs = undefined;
      this._remoteAsVariable = undefined;
      this._sendCommunity = undefined;
      this._sendCommunityVariable = undefined;
      this._sendExtendedCommunity = undefined;
      this._sendExtendedCommunityVariable = undefined;
      this._sendLabel = undefined;
      this._shutdown = undefined;
      this._shutdownVariable = undefined;
      this._updateSourceInterface = undefined;
      this._updateSourceInterfaceVariable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._addressFamilies.internalValue = value.addressFamilies;
      this._addressVariable = value.addressVariable;
      this._allowasInNumber = value.allowasInNumber;
      this._allowasInNumberVariable = value.allowasInNumberVariable;
      this._asOverride = value.asOverride;
      this._asOverrideVariable = value.asOverrideVariable;
      this._description = value.description;
      this._descriptionVariable = value.descriptionVariable;
      this._ebgpMultihop = value.ebgpMultihop;
      this._ebgpMultihopVariable = value.ebgpMultihopVariable;
      this._explicitNull = value.explicitNull;
      this._explicitNullVariable = value.explicitNullVariable;
      this._holdTime = value.holdTime;
      this._holdTimeVariable = value.holdTimeVariable;
      this._keepaliveTime = value.keepaliveTime;
      this._keepaliveTimeVariable = value.keepaliveTimeVariable;
      this._localAs = value.localAs;
      this._localAsVariable = value.localAsVariable;
      this._nextHopSelf = value.nextHopSelf;
      this._nextHopSelfVariable = value.nextHopSelfVariable;
      this._password = value.password;
      this._passwordVariable = value.passwordVariable;
      this._remoteAs = value.remoteAs;
      this._remoteAsVariable = value.remoteAsVariable;
      this._sendCommunity = value.sendCommunity;
      this._sendCommunityVariable = value.sendCommunityVariable;
      this._sendExtendedCommunity = value.sendExtendedCommunity;
      this._sendExtendedCommunityVariable = value.sendExtendedCommunityVariable;
      this._sendLabel = value.sendLabel;
      this._shutdown = value.shutdown;
      this._shutdownVariable = value.shutdownVariable;
      this._updateSourceInterface = value.updateSourceInterface;
      this._updateSourceInterfaceVariable = value.updateSourceInterfaceVariable;
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

  // address_families - computed: false, optional: true, required: false
  private _addressFamilies = new TransportRoutingBgpFeatureIpv4NeighborsAddressFamiliesList(this, "address_families", false);
  public get addressFamilies() {
    return this._addressFamilies;
  }
  public putAddressFamilies(value: TransportRoutingBgpFeatureIpv4NeighborsAddressFamilies[] | cdktf.IResolvable) {
    this._addressFamilies.internalValue = value;
  }
  public resetAddressFamilies() {
    this._addressFamilies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressFamiliesInput() {
    return this._addressFamilies.internalValue;
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

  // allowas_in_number - computed: false, optional: true, required: false
  private _allowasInNumber?: number; 
  public get allowasInNumber() {
    return this.getNumberAttribute('allowas_in_number');
  }
  public set allowasInNumber(value: number) {
    this._allowasInNumber = value;
  }
  public resetAllowasInNumber() {
    this._allowasInNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowasInNumberInput() {
    return this._allowasInNumber;
  }

  // allowas_in_number_variable - computed: false, optional: true, required: false
  private _allowasInNumberVariable?: string; 
  public get allowasInNumberVariable() {
    return this.getStringAttribute('allowas_in_number_variable');
  }
  public set allowasInNumberVariable(value: string) {
    this._allowasInNumberVariable = value;
  }
  public resetAllowasInNumberVariable() {
    this._allowasInNumberVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowasInNumberVariableInput() {
    return this._allowasInNumberVariable;
  }

  // as_override - computed: false, optional: true, required: false
  private _asOverride?: boolean | cdktf.IResolvable; 
  public get asOverride() {
    return this.getBooleanAttribute('as_override');
  }
  public set asOverride(value: boolean | cdktf.IResolvable) {
    this._asOverride = value;
  }
  public resetAsOverride() {
    this._asOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asOverrideInput() {
    return this._asOverride;
  }

  // as_override_variable - computed: false, optional: true, required: false
  private _asOverrideVariable?: string; 
  public get asOverrideVariable() {
    return this.getStringAttribute('as_override_variable');
  }
  public set asOverrideVariable(value: string) {
    this._asOverrideVariable = value;
  }
  public resetAsOverrideVariable() {
    this._asOverrideVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asOverrideVariableInput() {
    return this._asOverrideVariable;
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

  // ebgp_multihop - computed: false, optional: true, required: false
  private _ebgpMultihop?: number; 
  public get ebgpMultihop() {
    return this.getNumberAttribute('ebgp_multihop');
  }
  public set ebgpMultihop(value: number) {
    this._ebgpMultihop = value;
  }
  public resetEbgpMultihop() {
    this._ebgpMultihop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebgpMultihopInput() {
    return this._ebgpMultihop;
  }

  // ebgp_multihop_variable - computed: false, optional: true, required: false
  private _ebgpMultihopVariable?: string; 
  public get ebgpMultihopVariable() {
    return this.getStringAttribute('ebgp_multihop_variable');
  }
  public set ebgpMultihopVariable(value: string) {
    this._ebgpMultihopVariable = value;
  }
  public resetEbgpMultihopVariable() {
    this._ebgpMultihopVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebgpMultihopVariableInput() {
    return this._ebgpMultihopVariable;
  }

  // explicit_null - computed: false, optional: true, required: false
  private _explicitNull?: boolean | cdktf.IResolvable; 
  public get explicitNull() {
    return this.getBooleanAttribute('explicit_null');
  }
  public set explicitNull(value: boolean | cdktf.IResolvable) {
    this._explicitNull = value;
  }
  public resetExplicitNull() {
    this._explicitNull = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get explicitNullInput() {
    return this._explicitNull;
  }

  // explicit_null_variable - computed: false, optional: true, required: false
  private _explicitNullVariable?: string; 
  public get explicitNullVariable() {
    return this.getStringAttribute('explicit_null_variable');
  }
  public set explicitNullVariable(value: string) {
    this._explicitNullVariable = value;
  }
  public resetExplicitNullVariable() {
    this._explicitNullVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get explicitNullVariableInput() {
    return this._explicitNullVariable;
  }

  // hold_time - computed: false, optional: true, required: false
  private _holdTime?: number; 
  public get holdTime() {
    return this.getNumberAttribute('hold_time');
  }
  public set holdTime(value: number) {
    this._holdTime = value;
  }
  public resetHoldTime() {
    this._holdTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get holdTimeInput() {
    return this._holdTime;
  }

  // hold_time_variable - computed: false, optional: true, required: false
  private _holdTimeVariable?: string; 
  public get holdTimeVariable() {
    return this.getStringAttribute('hold_time_variable');
  }
  public set holdTimeVariable(value: string) {
    this._holdTimeVariable = value;
  }
  public resetHoldTimeVariable() {
    this._holdTimeVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get holdTimeVariableInput() {
    return this._holdTimeVariable;
  }

  // keepalive_time - computed: false, optional: true, required: false
  private _keepaliveTime?: number; 
  public get keepaliveTime() {
    return this.getNumberAttribute('keepalive_time');
  }
  public set keepaliveTime(value: number) {
    this._keepaliveTime = value;
  }
  public resetKeepaliveTime() {
    this._keepaliveTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepaliveTimeInput() {
    return this._keepaliveTime;
  }

  // keepalive_time_variable - computed: false, optional: true, required: false
  private _keepaliveTimeVariable?: string; 
  public get keepaliveTimeVariable() {
    return this.getStringAttribute('keepalive_time_variable');
  }
  public set keepaliveTimeVariable(value: string) {
    this._keepaliveTimeVariable = value;
  }
  public resetKeepaliveTimeVariable() {
    this._keepaliveTimeVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepaliveTimeVariableInput() {
    return this._keepaliveTimeVariable;
  }

  // local_as - computed: false, optional: true, required: false
  private _localAs?: number; 
  public get localAs() {
    return this.getNumberAttribute('local_as');
  }
  public set localAs(value: number) {
    this._localAs = value;
  }
  public resetLocalAs() {
    this._localAs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localAsInput() {
    return this._localAs;
  }

  // local_as_variable - computed: false, optional: true, required: false
  private _localAsVariable?: string; 
  public get localAsVariable() {
    return this.getStringAttribute('local_as_variable');
  }
  public set localAsVariable(value: string) {
    this._localAsVariable = value;
  }
  public resetLocalAsVariable() {
    this._localAsVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localAsVariableInput() {
    return this._localAsVariable;
  }

  // next_hop_self - computed: false, optional: true, required: false
  private _nextHopSelf?: boolean | cdktf.IResolvable; 
  public get nextHopSelf() {
    return this.getBooleanAttribute('next_hop_self');
  }
  public set nextHopSelf(value: boolean | cdktf.IResolvable) {
    this._nextHopSelf = value;
  }
  public resetNextHopSelf() {
    this._nextHopSelf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopSelfInput() {
    return this._nextHopSelf;
  }

  // next_hop_self_variable - computed: false, optional: true, required: false
  private _nextHopSelfVariable?: string; 
  public get nextHopSelfVariable() {
    return this.getStringAttribute('next_hop_self_variable');
  }
  public set nextHopSelfVariable(value: string) {
    this._nextHopSelfVariable = value;
  }
  public resetNextHopSelfVariable() {
    this._nextHopSelfVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopSelfVariableInput() {
    return this._nextHopSelfVariable;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // password_variable - computed: false, optional: true, required: false
  private _passwordVariable?: string; 
  public get passwordVariable() {
    return this.getStringAttribute('password_variable');
  }
  public set passwordVariable(value: string) {
    this._passwordVariable = value;
  }
  public resetPasswordVariable() {
    this._passwordVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordVariableInput() {
    return this._passwordVariable;
  }

  // remote_as - computed: false, optional: true, required: false
  private _remoteAs?: number; 
  public get remoteAs() {
    return this.getNumberAttribute('remote_as');
  }
  public set remoteAs(value: number) {
    this._remoteAs = value;
  }
  public resetRemoteAs() {
    this._remoteAs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteAsInput() {
    return this._remoteAs;
  }

  // remote_as_variable - computed: false, optional: true, required: false
  private _remoteAsVariable?: string; 
  public get remoteAsVariable() {
    return this.getStringAttribute('remote_as_variable');
  }
  public set remoteAsVariable(value: string) {
    this._remoteAsVariable = value;
  }
  public resetRemoteAsVariable() {
    this._remoteAsVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteAsVariableInput() {
    return this._remoteAsVariable;
  }

  // send_community - computed: false, optional: true, required: false
  private _sendCommunity?: boolean | cdktf.IResolvable; 
  public get sendCommunity() {
    return this.getBooleanAttribute('send_community');
  }
  public set sendCommunity(value: boolean | cdktf.IResolvable) {
    this._sendCommunity = value;
  }
  public resetSendCommunity() {
    this._sendCommunity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendCommunityInput() {
    return this._sendCommunity;
  }

  // send_community_variable - computed: false, optional: true, required: false
  private _sendCommunityVariable?: string; 
  public get sendCommunityVariable() {
    return this.getStringAttribute('send_community_variable');
  }
  public set sendCommunityVariable(value: string) {
    this._sendCommunityVariable = value;
  }
  public resetSendCommunityVariable() {
    this._sendCommunityVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendCommunityVariableInput() {
    return this._sendCommunityVariable;
  }

  // send_extended_community - computed: false, optional: true, required: false
  private _sendExtendedCommunity?: boolean | cdktf.IResolvable; 
  public get sendExtendedCommunity() {
    return this.getBooleanAttribute('send_extended_community');
  }
  public set sendExtendedCommunity(value: boolean | cdktf.IResolvable) {
    this._sendExtendedCommunity = value;
  }
  public resetSendExtendedCommunity() {
    this._sendExtendedCommunity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendExtendedCommunityInput() {
    return this._sendExtendedCommunity;
  }

  // send_extended_community_variable - computed: false, optional: true, required: false
  private _sendExtendedCommunityVariable?: string; 
  public get sendExtendedCommunityVariable() {
    return this.getStringAttribute('send_extended_community_variable');
  }
  public set sendExtendedCommunityVariable(value: string) {
    this._sendExtendedCommunityVariable = value;
  }
  public resetSendExtendedCommunityVariable() {
    this._sendExtendedCommunityVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendExtendedCommunityVariableInput() {
    return this._sendExtendedCommunityVariable;
  }

  // send_label - computed: false, optional: true, required: false
  private _sendLabel?: boolean | cdktf.IResolvable; 
  public get sendLabel() {
    return this.getBooleanAttribute('send_label');
  }
  public set sendLabel(value: boolean | cdktf.IResolvable) {
    this._sendLabel = value;
  }
  public resetSendLabel() {
    this._sendLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendLabelInput() {
    return this._sendLabel;
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

  // update_source_interface - computed: false, optional: true, required: false
  private _updateSourceInterface?: string; 
  public get updateSourceInterface() {
    return this.getStringAttribute('update_source_interface');
  }
  public set updateSourceInterface(value: string) {
    this._updateSourceInterface = value;
  }
  public resetUpdateSourceInterface() {
    this._updateSourceInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateSourceInterfaceInput() {
    return this._updateSourceInterface;
  }

  // update_source_interface_variable - computed: false, optional: true, required: false
  private _updateSourceInterfaceVariable?: string; 
  public get updateSourceInterfaceVariable() {
    return this.getStringAttribute('update_source_interface_variable');
  }
  public set updateSourceInterfaceVariable(value: string) {
    this._updateSourceInterfaceVariable = value;
  }
  public resetUpdateSourceInterfaceVariable() {
    this._updateSourceInterfaceVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateSourceInterfaceVariableInput() {
    return this._updateSourceInterfaceVariable;
  }
}

export class TransportRoutingBgpFeatureIpv4NeighborsList extends cdktf.ComplexList {
  public internalValue? : TransportRoutingBgpFeatureIpv4Neighbors[] | cdktf.IResolvable

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
  public get(index: number): TransportRoutingBgpFeatureIpv4NeighborsOutputReference {
    return new TransportRoutingBgpFeatureIpv4NeighborsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TransportRoutingBgpFeatureIpv4Networks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#network_address TransportRoutingBgpFeature#network_address}
  */
  readonly networkAddress?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#network_address_variable TransportRoutingBgpFeature#network_address_variable}
  */
  readonly networkAddressVariable?: string;
  /**
  * 
  *   - Choices: `255.255.255.255`, `255.255.255.254`, `255.255.255.252`, `255.255.255.248`, `255.255.255.240`, `255.255.255.224`, `255.255.255.192`, `255.255.255.128`, `255.255.255.0`, `255.255.254.0`, `255.255.252.0`, `255.255.248.0`, `255.255.240.0`, `255.255.224.0`, `255.255.192.0`, `255.255.128.0`, `255.255.0.0`, `255.254.0.0`, `255.252.0.0`, `255.240.0.0`, `255.224.0.0`, `255.192.0.0`, `255.128.0.0`, `255.0.0.0`, `254.0.0.0`, `252.0.0.0`, `248.0.0.0`, `240.0.0.0`, `224.0.0.0`, `192.0.0.0`, `128.0.0.0`, `0.0.0.0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#subnet_mask TransportRoutingBgpFeature#subnet_mask}
  */
  readonly subnetMask?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#subnet_mask_variable TransportRoutingBgpFeature#subnet_mask_variable}
  */
  readonly subnetMaskVariable?: string;
}

export function transportRoutingBgpFeatureIpv4NetworksToTerraform(struct?: TransportRoutingBgpFeatureIpv4Networks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network_address: cdktf.stringToTerraform(struct!.networkAddress),
    network_address_variable: cdktf.stringToTerraform(struct!.networkAddressVariable),
    subnet_mask: cdktf.stringToTerraform(struct!.subnetMask),
    subnet_mask_variable: cdktf.stringToTerraform(struct!.subnetMaskVariable),
  }
}


export function transportRoutingBgpFeatureIpv4NetworksToHclTerraform(struct?: TransportRoutingBgpFeatureIpv4Networks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network_address: {
      value: cdktf.stringToHclTerraform(struct!.networkAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_address_variable: {
      value: cdktf.stringToHclTerraform(struct!.networkAddressVariable),
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

export class TransportRoutingBgpFeatureIpv4NetworksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TransportRoutingBgpFeatureIpv4Networks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkAddress = this._networkAddress;
    }
    if (this._networkAddressVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkAddressVariable = this._networkAddressVariable;
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

  public set internalValue(value: TransportRoutingBgpFeatureIpv4Networks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._networkAddress = undefined;
      this._networkAddressVariable = undefined;
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
      this._networkAddress = value.networkAddress;
      this._networkAddressVariable = value.networkAddressVariable;
      this._subnetMask = value.subnetMask;
      this._subnetMaskVariable = value.subnetMaskVariable;
    }
  }

  // network_address - computed: false, optional: true, required: false
  private _networkAddress?: string; 
  public get networkAddress() {
    return this.getStringAttribute('network_address');
  }
  public set networkAddress(value: string) {
    this._networkAddress = value;
  }
  public resetNetworkAddress() {
    this._networkAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkAddressInput() {
    return this._networkAddress;
  }

  // network_address_variable - computed: false, optional: true, required: false
  private _networkAddressVariable?: string; 
  public get networkAddressVariable() {
    return this.getStringAttribute('network_address_variable');
  }
  public set networkAddressVariable(value: string) {
    this._networkAddressVariable = value;
  }
  public resetNetworkAddressVariable() {
    this._networkAddressVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkAddressVariableInput() {
    return this._networkAddressVariable;
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

export class TransportRoutingBgpFeatureIpv4NetworksList extends cdktf.ComplexList {
  public internalValue? : TransportRoutingBgpFeatureIpv4Networks[] | cdktf.IResolvable

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
  public get(index: number): TransportRoutingBgpFeatureIpv4NetworksOutputReference {
    return new TransportRoutingBgpFeatureIpv4NetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TransportRoutingBgpFeatureIpv4Redistributes {
  /**
  * Set the protocol to redistribute routes from
  *   - Choices: `static`, `connected`, `ospf`, `ospfv3`, `nat`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#protocol TransportRoutingBgpFeature#protocol}
  */
  readonly protocol?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#protocol_variable TransportRoutingBgpFeature#protocol_variable}
  */
  readonly protocolVariable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#route_policy_id TransportRoutingBgpFeature#route_policy_id}
  */
  readonly routePolicyId?: string;
}

export function transportRoutingBgpFeatureIpv4RedistributesToTerraform(struct?: TransportRoutingBgpFeatureIpv4Redistributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    protocol: cdktf.stringToTerraform(struct!.protocol),
    protocol_variable: cdktf.stringToTerraform(struct!.protocolVariable),
    route_policy_id: cdktf.stringToTerraform(struct!.routePolicyId),
  }
}


export function transportRoutingBgpFeatureIpv4RedistributesToHclTerraform(struct?: TransportRoutingBgpFeatureIpv4Redistributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
    route_policy_id: {
      value: cdktf.stringToHclTerraform(struct!.routePolicyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TransportRoutingBgpFeatureIpv4RedistributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TransportRoutingBgpFeatureIpv4Redistributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._protocolVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocolVariable = this._protocolVariable;
    }
    if (this._routePolicyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.routePolicyId = this._routePolicyId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransportRoutingBgpFeatureIpv4Redistributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._protocol = undefined;
      this._protocolVariable = undefined;
      this._routePolicyId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._protocol = value.protocol;
      this._protocolVariable = value.protocolVariable;
      this._routePolicyId = value.routePolicyId;
    }
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

  // route_policy_id - computed: false, optional: true, required: false
  private _routePolicyId?: string; 
  public get routePolicyId() {
    return this.getStringAttribute('route_policy_id');
  }
  public set routePolicyId(value: string) {
    this._routePolicyId = value;
  }
  public resetRoutePolicyId() {
    this._routePolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routePolicyIdInput() {
    return this._routePolicyId;
  }
}

export class TransportRoutingBgpFeatureIpv4RedistributesList extends cdktf.ComplexList {
  public internalValue? : TransportRoutingBgpFeatureIpv4Redistributes[] | cdktf.IResolvable

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
  public get(index: number): TransportRoutingBgpFeatureIpv4RedistributesOutputReference {
    return new TransportRoutingBgpFeatureIpv4RedistributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TransportRoutingBgpFeatureIpv6AggregateAddresses {
  /**
  * Configure the IPv6 prefixes to aggregate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#aggregate_prefix TransportRoutingBgpFeature#aggregate_prefix}
  */
  readonly aggregatePrefix?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#aggregate_prefix_variable TransportRoutingBgpFeature#aggregate_prefix_variable}
  */
  readonly aggregatePrefixVariable?: string;
  /**
  * Set AS set path information
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#as_set_path TransportRoutingBgpFeature#as_set_path}
  */
  readonly asSetPath?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#as_set_path_variable TransportRoutingBgpFeature#as_set_path_variable}
  */
  readonly asSetPathVariable?: string;
  /**
  * Filter out more specific routes from updates
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#summary_only TransportRoutingBgpFeature#summary_only}
  */
  readonly summaryOnly?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#summary_only_variable TransportRoutingBgpFeature#summary_only_variable}
  */
  readonly summaryOnlyVariable?: string;
}

export function transportRoutingBgpFeatureIpv6AggregateAddressesToTerraform(struct?: TransportRoutingBgpFeatureIpv6AggregateAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregate_prefix: cdktf.stringToTerraform(struct!.aggregatePrefix),
    aggregate_prefix_variable: cdktf.stringToTerraform(struct!.aggregatePrefixVariable),
    as_set_path: cdktf.booleanToTerraform(struct!.asSetPath),
    as_set_path_variable: cdktf.stringToTerraform(struct!.asSetPathVariable),
    summary_only: cdktf.booleanToTerraform(struct!.summaryOnly),
    summary_only_variable: cdktf.stringToTerraform(struct!.summaryOnlyVariable),
  }
}


export function transportRoutingBgpFeatureIpv6AggregateAddressesToHclTerraform(struct?: TransportRoutingBgpFeatureIpv6AggregateAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aggregate_prefix: {
      value: cdktf.stringToHclTerraform(struct!.aggregatePrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aggregate_prefix_variable: {
      value: cdktf.stringToHclTerraform(struct!.aggregatePrefixVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    as_set_path: {
      value: cdktf.booleanToHclTerraform(struct!.asSetPath),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    as_set_path_variable: {
      value: cdktf.stringToHclTerraform(struct!.asSetPathVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    summary_only: {
      value: cdktf.booleanToHclTerraform(struct!.summaryOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    summary_only_variable: {
      value: cdktf.stringToHclTerraform(struct!.summaryOnlyVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TransportRoutingBgpFeatureIpv6AggregateAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TransportRoutingBgpFeatureIpv6AggregateAddresses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregatePrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregatePrefix = this._aggregatePrefix;
    }
    if (this._aggregatePrefixVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregatePrefixVariable = this._aggregatePrefixVariable;
    }
    if (this._asSetPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.asSetPath = this._asSetPath;
    }
    if (this._asSetPathVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.asSetPathVariable = this._asSetPathVariable;
    }
    if (this._summaryOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.summaryOnly = this._summaryOnly;
    }
    if (this._summaryOnlyVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.summaryOnlyVariable = this._summaryOnlyVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransportRoutingBgpFeatureIpv6AggregateAddresses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aggregatePrefix = undefined;
      this._aggregatePrefixVariable = undefined;
      this._asSetPath = undefined;
      this._asSetPathVariable = undefined;
      this._summaryOnly = undefined;
      this._summaryOnlyVariable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aggregatePrefix = value.aggregatePrefix;
      this._aggregatePrefixVariable = value.aggregatePrefixVariable;
      this._asSetPath = value.asSetPath;
      this._asSetPathVariable = value.asSetPathVariable;
      this._summaryOnly = value.summaryOnly;
      this._summaryOnlyVariable = value.summaryOnlyVariable;
    }
  }

  // aggregate_prefix - computed: false, optional: true, required: false
  private _aggregatePrefix?: string; 
  public get aggregatePrefix() {
    return this.getStringAttribute('aggregate_prefix');
  }
  public set aggregatePrefix(value: string) {
    this._aggregatePrefix = value;
  }
  public resetAggregatePrefix() {
    this._aggregatePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregatePrefixInput() {
    return this._aggregatePrefix;
  }

  // aggregate_prefix_variable - computed: false, optional: true, required: false
  private _aggregatePrefixVariable?: string; 
  public get aggregatePrefixVariable() {
    return this.getStringAttribute('aggregate_prefix_variable');
  }
  public set aggregatePrefixVariable(value: string) {
    this._aggregatePrefixVariable = value;
  }
  public resetAggregatePrefixVariable() {
    this._aggregatePrefixVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregatePrefixVariableInput() {
    return this._aggregatePrefixVariable;
  }

  // as_set_path - computed: false, optional: true, required: false
  private _asSetPath?: boolean | cdktf.IResolvable; 
  public get asSetPath() {
    return this.getBooleanAttribute('as_set_path');
  }
  public set asSetPath(value: boolean | cdktf.IResolvable) {
    this._asSetPath = value;
  }
  public resetAsSetPath() {
    this._asSetPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asSetPathInput() {
    return this._asSetPath;
  }

  // as_set_path_variable - computed: false, optional: true, required: false
  private _asSetPathVariable?: string; 
  public get asSetPathVariable() {
    return this.getStringAttribute('as_set_path_variable');
  }
  public set asSetPathVariable(value: string) {
    this._asSetPathVariable = value;
  }
  public resetAsSetPathVariable() {
    this._asSetPathVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asSetPathVariableInput() {
    return this._asSetPathVariable;
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

  // summary_only_variable - computed: false, optional: true, required: false
  private _summaryOnlyVariable?: string; 
  public get summaryOnlyVariable() {
    return this.getStringAttribute('summary_only_variable');
  }
  public set summaryOnlyVariable(value: string) {
    this._summaryOnlyVariable = value;
  }
  public resetSummaryOnlyVariable() {
    this._summaryOnlyVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get summaryOnlyVariableInput() {
    return this._summaryOnlyVariable;
  }
}

export class TransportRoutingBgpFeatureIpv6AggregateAddressesList extends cdktf.ComplexList {
  public internalValue? : TransportRoutingBgpFeatureIpv6AggregateAddresses[] | cdktf.IResolvable

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
  public get(index: number): TransportRoutingBgpFeatureIpv6AggregateAddressesOutputReference {
    return new TransportRoutingBgpFeatureIpv6AggregateAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TransportRoutingBgpFeatureIpv6NeighborsAddressFamilies {
  /**
  * Set IPv6 unicast address family
  *   - Choices: `ipv6-unicast`, `vpnv6-unicast`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#family_type TransportRoutingBgpFeature#family_type}
  */
  readonly familyType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#in_route_policy_id TransportRoutingBgpFeature#in_route_policy_id}
  */
  readonly inRoutePolicyId?: string;
  /**
  * Set maximum number of prefixes accepted from BGP peer
  *   - Range: `1`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#max_number_of_prefixes TransportRoutingBgpFeature#max_number_of_prefixes}
  */
  readonly maxNumberOfPrefixes?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#max_number_of_prefixes_variable TransportRoutingBgpFeature#max_number_of_prefixes_variable}
  */
  readonly maxNumberOfPrefixesVariable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#out_route_policy_id TransportRoutingBgpFeature#out_route_policy_id}
  */
  readonly outRoutePolicyId?: string;
  /**
  * Neighbor received maximum prefix policy is disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#policy_type TransportRoutingBgpFeature#policy_type}
  */
  readonly policyType?: string;
  /**
  * Set the restart interval(minutes) when to restart BGP connection if threshold is exceeded
  *   - Range: `1`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#restart_interval TransportRoutingBgpFeature#restart_interval}
  */
  readonly restartInterval?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#restart_interval_variable TransportRoutingBgpFeature#restart_interval_variable}
  */
  readonly restartIntervalVariable?: string;
  /**
  * Set threshold(1 to 100) at which to generate a warning message
  *   - Range: `1`-`100`
  *   - Default value: `75`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#threshold TransportRoutingBgpFeature#threshold}
  */
  readonly threshold?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#threshold_variable TransportRoutingBgpFeature#threshold_variable}
  */
  readonly thresholdVariable?: string;
}

export function transportRoutingBgpFeatureIpv6NeighborsAddressFamiliesToTerraform(struct?: TransportRoutingBgpFeatureIpv6NeighborsAddressFamilies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    family_type: cdktf.stringToTerraform(struct!.familyType),
    in_route_policy_id: cdktf.stringToTerraform(struct!.inRoutePolicyId),
    max_number_of_prefixes: cdktf.numberToTerraform(struct!.maxNumberOfPrefixes),
    max_number_of_prefixes_variable: cdktf.stringToTerraform(struct!.maxNumberOfPrefixesVariable),
    out_route_policy_id: cdktf.stringToTerraform(struct!.outRoutePolicyId),
    policy_type: cdktf.stringToTerraform(struct!.policyType),
    restart_interval: cdktf.numberToTerraform(struct!.restartInterval),
    restart_interval_variable: cdktf.stringToTerraform(struct!.restartIntervalVariable),
    threshold: cdktf.numberToTerraform(struct!.threshold),
    threshold_variable: cdktf.stringToTerraform(struct!.thresholdVariable),
  }
}


export function transportRoutingBgpFeatureIpv6NeighborsAddressFamiliesToHclTerraform(struct?: TransportRoutingBgpFeatureIpv6NeighborsAddressFamilies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    family_type: {
      value: cdktf.stringToHclTerraform(struct!.familyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    in_route_policy_id: {
      value: cdktf.stringToHclTerraform(struct!.inRoutePolicyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_number_of_prefixes: {
      value: cdktf.numberToHclTerraform(struct!.maxNumberOfPrefixes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_number_of_prefixes_variable: {
      value: cdktf.stringToHclTerraform(struct!.maxNumberOfPrefixesVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    out_route_policy_id: {
      value: cdktf.stringToHclTerraform(struct!.outRoutePolicyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policy_type: {
      value: cdktf.stringToHclTerraform(struct!.policyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    restart_interval: {
      value: cdktf.numberToHclTerraform(struct!.restartInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    restart_interval_variable: {
      value: cdktf.stringToHclTerraform(struct!.restartIntervalVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threshold: {
      value: cdktf.numberToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    threshold_variable: {
      value: cdktf.stringToHclTerraform(struct!.thresholdVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TransportRoutingBgpFeatureIpv6NeighborsAddressFamiliesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TransportRoutingBgpFeatureIpv6NeighborsAddressFamilies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._familyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.familyType = this._familyType;
    }
    if (this._inRoutePolicyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.inRoutePolicyId = this._inRoutePolicyId;
    }
    if (this._maxNumberOfPrefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxNumberOfPrefixes = this._maxNumberOfPrefixes;
    }
    if (this._maxNumberOfPrefixesVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxNumberOfPrefixesVariable = this._maxNumberOfPrefixesVariable;
    }
    if (this._outRoutePolicyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.outRoutePolicyId = this._outRoutePolicyId;
    }
    if (this._policyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyType = this._policyType;
    }
    if (this._restartInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.restartInterval = this._restartInterval;
    }
    if (this._restartIntervalVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.restartIntervalVariable = this._restartIntervalVariable;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    if (this._thresholdVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdVariable = this._thresholdVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransportRoutingBgpFeatureIpv6NeighborsAddressFamilies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._familyType = undefined;
      this._inRoutePolicyId = undefined;
      this._maxNumberOfPrefixes = undefined;
      this._maxNumberOfPrefixesVariable = undefined;
      this._outRoutePolicyId = undefined;
      this._policyType = undefined;
      this._restartInterval = undefined;
      this._restartIntervalVariable = undefined;
      this._threshold = undefined;
      this._thresholdVariable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._familyType = value.familyType;
      this._inRoutePolicyId = value.inRoutePolicyId;
      this._maxNumberOfPrefixes = value.maxNumberOfPrefixes;
      this._maxNumberOfPrefixesVariable = value.maxNumberOfPrefixesVariable;
      this._outRoutePolicyId = value.outRoutePolicyId;
      this._policyType = value.policyType;
      this._restartInterval = value.restartInterval;
      this._restartIntervalVariable = value.restartIntervalVariable;
      this._threshold = value.threshold;
      this._thresholdVariable = value.thresholdVariable;
    }
  }

  // family_type - computed: false, optional: true, required: false
  private _familyType?: string; 
  public get familyType() {
    return this.getStringAttribute('family_type');
  }
  public set familyType(value: string) {
    this._familyType = value;
  }
  public resetFamilyType() {
    this._familyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get familyTypeInput() {
    return this._familyType;
  }

  // in_route_policy_id - computed: false, optional: true, required: false
  private _inRoutePolicyId?: string; 
  public get inRoutePolicyId() {
    return this.getStringAttribute('in_route_policy_id');
  }
  public set inRoutePolicyId(value: string) {
    this._inRoutePolicyId = value;
  }
  public resetInRoutePolicyId() {
    this._inRoutePolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inRoutePolicyIdInput() {
    return this._inRoutePolicyId;
  }

  // max_number_of_prefixes - computed: false, optional: true, required: false
  private _maxNumberOfPrefixes?: number; 
  public get maxNumberOfPrefixes() {
    return this.getNumberAttribute('max_number_of_prefixes');
  }
  public set maxNumberOfPrefixes(value: number) {
    this._maxNumberOfPrefixes = value;
  }
  public resetMaxNumberOfPrefixes() {
    this._maxNumberOfPrefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNumberOfPrefixesInput() {
    return this._maxNumberOfPrefixes;
  }

  // max_number_of_prefixes_variable - computed: false, optional: true, required: false
  private _maxNumberOfPrefixesVariable?: string; 
  public get maxNumberOfPrefixesVariable() {
    return this.getStringAttribute('max_number_of_prefixes_variable');
  }
  public set maxNumberOfPrefixesVariable(value: string) {
    this._maxNumberOfPrefixesVariable = value;
  }
  public resetMaxNumberOfPrefixesVariable() {
    this._maxNumberOfPrefixesVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNumberOfPrefixesVariableInput() {
    return this._maxNumberOfPrefixesVariable;
  }

  // out_route_policy_id - computed: false, optional: true, required: false
  private _outRoutePolicyId?: string; 
  public get outRoutePolicyId() {
    return this.getStringAttribute('out_route_policy_id');
  }
  public set outRoutePolicyId(value: string) {
    this._outRoutePolicyId = value;
  }
  public resetOutRoutePolicyId() {
    this._outRoutePolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outRoutePolicyIdInput() {
    return this._outRoutePolicyId;
  }

  // policy_type - computed: false, optional: true, required: false
  private _policyType?: string; 
  public get policyType() {
    return this.getStringAttribute('policy_type');
  }
  public set policyType(value: string) {
    this._policyType = value;
  }
  public resetPolicyType() {
    this._policyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyTypeInput() {
    return this._policyType;
  }

  // restart_interval - computed: false, optional: true, required: false
  private _restartInterval?: number; 
  public get restartInterval() {
    return this.getNumberAttribute('restart_interval');
  }
  public set restartInterval(value: number) {
    this._restartInterval = value;
  }
  public resetRestartInterval() {
    this._restartInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restartIntervalInput() {
    return this._restartInterval;
  }

  // restart_interval_variable - computed: false, optional: true, required: false
  private _restartIntervalVariable?: string; 
  public get restartIntervalVariable() {
    return this.getStringAttribute('restart_interval_variable');
  }
  public set restartIntervalVariable(value: string) {
    this._restartIntervalVariable = value;
  }
  public resetRestartIntervalVariable() {
    this._restartIntervalVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restartIntervalVariableInput() {
    return this._restartIntervalVariable;
  }

  // threshold - computed: false, optional: true, required: false
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  public resetThreshold() {
    this._threshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }

  // threshold_variable - computed: false, optional: true, required: false
  private _thresholdVariable?: string; 
  public get thresholdVariable() {
    return this.getStringAttribute('threshold_variable');
  }
  public set thresholdVariable(value: string) {
    this._thresholdVariable = value;
  }
  public resetThresholdVariable() {
    this._thresholdVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdVariableInput() {
    return this._thresholdVariable;
  }
}

export class TransportRoutingBgpFeatureIpv6NeighborsAddressFamiliesList extends cdktf.ComplexList {
  public internalValue? : TransportRoutingBgpFeatureIpv6NeighborsAddressFamilies[] | cdktf.IResolvable

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
  public get(index: number): TransportRoutingBgpFeatureIpv6NeighborsAddressFamiliesOutputReference {
    return new TransportRoutingBgpFeatureIpv6NeighborsAddressFamiliesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TransportRoutingBgpFeatureIpv6Neighbors {
  /**
  * Set IPv6 neighbor address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#address TransportRoutingBgpFeature#address}
  */
  readonly address?: string;
  /**
  * Set IPv6 BGP address family
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#address_families TransportRoutingBgpFeature#address_families}
  */
  readonly addressFamilies?: TransportRoutingBgpFeatureIpv6NeighborsAddressFamilies[] | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#address_variable TransportRoutingBgpFeature#address_variable}
  */
  readonly addressVariable?: string;
  /**
  * The number of accept as-path with my AS present in it
  *   - Range: `1`-`10`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#allowas_in_number TransportRoutingBgpFeature#allowas_in_number}
  */
  readonly allowasInNumber?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#allowas_in_number_variable TransportRoutingBgpFeature#allowas_in_number_variable}
  */
  readonly allowasInNumberVariable?: string;
  /**
  * Override matching AS-number while sending update
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#as_override TransportRoutingBgpFeature#as_override}
  */
  readonly asOverride?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#as_override_variable TransportRoutingBgpFeature#as_override_variable}
  */
  readonly asOverrideVariable?: string;
  /**
  * Set description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#description TransportRoutingBgpFeature#description}
  */
  readonly description?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#description_variable TransportRoutingBgpFeature#description_variable}
  */
  readonly descriptionVariable?: string;
  /**
  * Set TTL value for peers that are not directly connected
  *   - Range: `1`-`255`
  *   - Default value: `1`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#ebgp_multihop TransportRoutingBgpFeature#ebgp_multihop}
  */
  readonly ebgpMultihop?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#ebgp_multihop_variable TransportRoutingBgpFeature#ebgp_multihop_variable}
  */
  readonly ebgpMultihopVariable?: string;
  /**
  * Interval (seconds) not receiving a keepalive message declares a BGP peer down
  *   - Range: `0`-`65535`
  *   - Default value: `180`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#hold_time TransportRoutingBgpFeature#hold_time}
  */
  readonly holdTime?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#hold_time_variable TransportRoutingBgpFeature#hold_time_variable}
  */
  readonly holdTimeVariable?: string;
  /**
  * Interval (seconds) of keepalive messages sent to its BGP peer
  *   - Range: `0`-`65535`
  *   - Default value: `60`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#keepalive_time TransportRoutingBgpFeature#keepalive_time}
  */
  readonly keepaliveTime?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#keepalive_time_variable TransportRoutingBgpFeature#keepalive_time_variable}
  */
  readonly keepaliveTimeVariable?: string;
  /**
  * Set local autonomous system number,Local-AS cannot have the local BGP protocol AS number or the AS number of the remote peer.The local-as is valid only if the peer is a true eBGP peer. It does not work for two peers in different sub-ASs in a confederation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#local_as TransportRoutingBgpFeature#local_as}
  */
  readonly localAs?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#local_as_variable TransportRoutingBgpFeature#local_as_variable}
  */
  readonly localAsVariable?: string;
  /**
  * Set router to be next hop for routes advertised to neighbor
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#next_hop_self TransportRoutingBgpFeature#next_hop_self}
  */
  readonly nextHopSelf?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#next_hop_self_variable TransportRoutingBgpFeature#next_hop_self_variable}
  */
  readonly nextHopSelfVariable?: string;
  /**
  * Set MD5 password on TCP connection with BGP peer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#password TransportRoutingBgpFeature#password}
  */
  readonly password?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#password_variable TransportRoutingBgpFeature#password_variable}
  */
  readonly passwordVariable?: string;
  /**
  * Set remote autonomous system number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#remote_as TransportRoutingBgpFeature#remote_as}
  */
  readonly remoteAs?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#remote_as_variable TransportRoutingBgpFeature#remote_as_variable}
  */
  readonly remoteAsVariable?: string;
  /**
  * Send community attribute
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#send_community TransportRoutingBgpFeature#send_community}
  */
  readonly sendCommunity?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#send_community_variable TransportRoutingBgpFeature#send_community_variable}
  */
  readonly sendCommunityVariable?: string;
  /**
  * Send extended community attribute
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#send_extended_community TransportRoutingBgpFeature#send_extended_community}
  */
  readonly sendExtendedCommunity?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#send_extended_community_variable TransportRoutingBgpFeature#send_extended_community_variable}
  */
  readonly sendExtendedCommunityVariable?: string;
  /**
  * Enable or disable a BGP neighbor
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#shutdown TransportRoutingBgpFeature#shutdown}
  */
  readonly shutdown?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#shutdown_variable TransportRoutingBgpFeature#shutdown_variable}
  */
  readonly shutdownVariable?: string;
  /**
  * Source interface name for BGP neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#update_source_interface TransportRoutingBgpFeature#update_source_interface}
  */
  readonly updateSourceInterface?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#update_source_interface_variable TransportRoutingBgpFeature#update_source_interface_variable}
  */
  readonly updateSourceInterfaceVariable?: string;
}

export function transportRoutingBgpFeatureIpv6NeighborsToTerraform(struct?: TransportRoutingBgpFeatureIpv6Neighbors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    address_families: cdktf.listMapper(transportRoutingBgpFeatureIpv6NeighborsAddressFamiliesToTerraform, false)(struct!.addressFamilies),
    address_variable: cdktf.stringToTerraform(struct!.addressVariable),
    allowas_in_number: cdktf.numberToTerraform(struct!.allowasInNumber),
    allowas_in_number_variable: cdktf.stringToTerraform(struct!.allowasInNumberVariable),
    as_override: cdktf.booleanToTerraform(struct!.asOverride),
    as_override_variable: cdktf.stringToTerraform(struct!.asOverrideVariable),
    description: cdktf.stringToTerraform(struct!.description),
    description_variable: cdktf.stringToTerraform(struct!.descriptionVariable),
    ebgp_multihop: cdktf.numberToTerraform(struct!.ebgpMultihop),
    ebgp_multihop_variable: cdktf.stringToTerraform(struct!.ebgpMultihopVariable),
    hold_time: cdktf.numberToTerraform(struct!.holdTime),
    hold_time_variable: cdktf.stringToTerraform(struct!.holdTimeVariable),
    keepalive_time: cdktf.numberToTerraform(struct!.keepaliveTime),
    keepalive_time_variable: cdktf.stringToTerraform(struct!.keepaliveTimeVariable),
    local_as: cdktf.numberToTerraform(struct!.localAs),
    local_as_variable: cdktf.stringToTerraform(struct!.localAsVariable),
    next_hop_self: cdktf.booleanToTerraform(struct!.nextHopSelf),
    next_hop_self_variable: cdktf.stringToTerraform(struct!.nextHopSelfVariable),
    password: cdktf.stringToTerraform(struct!.password),
    password_variable: cdktf.stringToTerraform(struct!.passwordVariable),
    remote_as: cdktf.numberToTerraform(struct!.remoteAs),
    remote_as_variable: cdktf.stringToTerraform(struct!.remoteAsVariable),
    send_community: cdktf.booleanToTerraform(struct!.sendCommunity),
    send_community_variable: cdktf.stringToTerraform(struct!.sendCommunityVariable),
    send_extended_community: cdktf.booleanToTerraform(struct!.sendExtendedCommunity),
    send_extended_community_variable: cdktf.stringToTerraform(struct!.sendExtendedCommunityVariable),
    shutdown: cdktf.booleanToTerraform(struct!.shutdown),
    shutdown_variable: cdktf.stringToTerraform(struct!.shutdownVariable),
    update_source_interface: cdktf.stringToTerraform(struct!.updateSourceInterface),
    update_source_interface_variable: cdktf.stringToTerraform(struct!.updateSourceInterfaceVariable),
  }
}


export function transportRoutingBgpFeatureIpv6NeighborsToHclTerraform(struct?: TransportRoutingBgpFeatureIpv6Neighbors | cdktf.IResolvable): any {
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
    address_families: {
      value: cdktf.listMapperHcl(transportRoutingBgpFeatureIpv6NeighborsAddressFamiliesToHclTerraform, false)(struct!.addressFamilies),
      isBlock: true,
      type: "list",
      storageClassType: "TransportRoutingBgpFeatureIpv6NeighborsAddressFamiliesList",
    },
    address_variable: {
      value: cdktf.stringToHclTerraform(struct!.addressVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    allowas_in_number: {
      value: cdktf.numberToHclTerraform(struct!.allowasInNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    allowas_in_number_variable: {
      value: cdktf.stringToHclTerraform(struct!.allowasInNumberVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    as_override: {
      value: cdktf.booleanToHclTerraform(struct!.asOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    as_override_variable: {
      value: cdktf.stringToHclTerraform(struct!.asOverrideVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
    ebgp_multihop: {
      value: cdktf.numberToHclTerraform(struct!.ebgpMultihop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ebgp_multihop_variable: {
      value: cdktf.stringToHclTerraform(struct!.ebgpMultihopVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hold_time: {
      value: cdktf.numberToHclTerraform(struct!.holdTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hold_time_variable: {
      value: cdktf.stringToHclTerraform(struct!.holdTimeVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keepalive_time: {
      value: cdktf.numberToHclTerraform(struct!.keepaliveTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    keepalive_time_variable: {
      value: cdktf.stringToHclTerraform(struct!.keepaliveTimeVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_as: {
      value: cdktf.numberToHclTerraform(struct!.localAs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    local_as_variable: {
      value: cdktf.stringToHclTerraform(struct!.localAsVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    next_hop_self: {
      value: cdktf.booleanToHclTerraform(struct!.nextHopSelf),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    next_hop_self_variable: {
      value: cdktf.stringToHclTerraform(struct!.nextHopSelfVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password_variable: {
      value: cdktf.stringToHclTerraform(struct!.passwordVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_as: {
      value: cdktf.numberToHclTerraform(struct!.remoteAs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    remote_as_variable: {
      value: cdktf.stringToHclTerraform(struct!.remoteAsVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    send_community: {
      value: cdktf.booleanToHclTerraform(struct!.sendCommunity),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    send_community_variable: {
      value: cdktf.stringToHclTerraform(struct!.sendCommunityVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    send_extended_community: {
      value: cdktf.booleanToHclTerraform(struct!.sendExtendedCommunity),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    send_extended_community_variable: {
      value: cdktf.stringToHclTerraform(struct!.sendExtendedCommunityVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shutdown: {
      value: cdktf.booleanToHclTerraform(struct!.shutdown),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    shutdown_variable: {
      value: cdktf.stringToHclTerraform(struct!.shutdownVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update_source_interface: {
      value: cdktf.stringToHclTerraform(struct!.updateSourceInterface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update_source_interface_variable: {
      value: cdktf.stringToHclTerraform(struct!.updateSourceInterfaceVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TransportRoutingBgpFeatureIpv6NeighborsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TransportRoutingBgpFeatureIpv6Neighbors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._addressFamilies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressFamilies = this._addressFamilies?.internalValue;
    }
    if (this._addressVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressVariable = this._addressVariable;
    }
    if (this._allowasInNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowasInNumber = this._allowasInNumber;
    }
    if (this._allowasInNumberVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowasInNumberVariable = this._allowasInNumberVariable;
    }
    if (this._asOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.asOverride = this._asOverride;
    }
    if (this._asOverrideVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.asOverrideVariable = this._asOverrideVariable;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._descriptionVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.descriptionVariable = this._descriptionVariable;
    }
    if (this._ebgpMultihop !== undefined) {
      hasAnyValues = true;
      internalValueResult.ebgpMultihop = this._ebgpMultihop;
    }
    if (this._ebgpMultihopVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.ebgpMultihopVariable = this._ebgpMultihopVariable;
    }
    if (this._holdTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.holdTime = this._holdTime;
    }
    if (this._holdTimeVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.holdTimeVariable = this._holdTimeVariable;
    }
    if (this._keepaliveTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepaliveTime = this._keepaliveTime;
    }
    if (this._keepaliveTimeVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepaliveTimeVariable = this._keepaliveTimeVariable;
    }
    if (this._localAs !== undefined) {
      hasAnyValues = true;
      internalValueResult.localAs = this._localAs;
    }
    if (this._localAsVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.localAsVariable = this._localAsVariable;
    }
    if (this._nextHopSelf !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextHopSelf = this._nextHopSelf;
    }
    if (this._nextHopSelfVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextHopSelfVariable = this._nextHopSelfVariable;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._passwordVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordVariable = this._passwordVariable;
    }
    if (this._remoteAs !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteAs = this._remoteAs;
    }
    if (this._remoteAsVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteAsVariable = this._remoteAsVariable;
    }
    if (this._sendCommunity !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendCommunity = this._sendCommunity;
    }
    if (this._sendCommunityVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendCommunityVariable = this._sendCommunityVariable;
    }
    if (this._sendExtendedCommunity !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendExtendedCommunity = this._sendExtendedCommunity;
    }
    if (this._sendExtendedCommunityVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendExtendedCommunityVariable = this._sendExtendedCommunityVariable;
    }
    if (this._shutdown !== undefined) {
      hasAnyValues = true;
      internalValueResult.shutdown = this._shutdown;
    }
    if (this._shutdownVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.shutdownVariable = this._shutdownVariable;
    }
    if (this._updateSourceInterface !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateSourceInterface = this._updateSourceInterface;
    }
    if (this._updateSourceInterfaceVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateSourceInterfaceVariable = this._updateSourceInterfaceVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransportRoutingBgpFeatureIpv6Neighbors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._addressFamilies.internalValue = undefined;
      this._addressVariable = undefined;
      this._allowasInNumber = undefined;
      this._allowasInNumberVariable = undefined;
      this._asOverride = undefined;
      this._asOverrideVariable = undefined;
      this._description = undefined;
      this._descriptionVariable = undefined;
      this._ebgpMultihop = undefined;
      this._ebgpMultihopVariable = undefined;
      this._holdTime = undefined;
      this._holdTimeVariable = undefined;
      this._keepaliveTime = undefined;
      this._keepaliveTimeVariable = undefined;
      this._localAs = undefined;
      this._localAsVariable = undefined;
      this._nextHopSelf = undefined;
      this._nextHopSelfVariable = undefined;
      this._password = undefined;
      this._passwordVariable = undefined;
      this._remoteAs = undefined;
      this._remoteAsVariable = undefined;
      this._sendCommunity = undefined;
      this._sendCommunityVariable = undefined;
      this._sendExtendedCommunity = undefined;
      this._sendExtendedCommunityVariable = undefined;
      this._shutdown = undefined;
      this._shutdownVariable = undefined;
      this._updateSourceInterface = undefined;
      this._updateSourceInterfaceVariable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._addressFamilies.internalValue = value.addressFamilies;
      this._addressVariable = value.addressVariable;
      this._allowasInNumber = value.allowasInNumber;
      this._allowasInNumberVariable = value.allowasInNumberVariable;
      this._asOverride = value.asOverride;
      this._asOverrideVariable = value.asOverrideVariable;
      this._description = value.description;
      this._descriptionVariable = value.descriptionVariable;
      this._ebgpMultihop = value.ebgpMultihop;
      this._ebgpMultihopVariable = value.ebgpMultihopVariable;
      this._holdTime = value.holdTime;
      this._holdTimeVariable = value.holdTimeVariable;
      this._keepaliveTime = value.keepaliveTime;
      this._keepaliveTimeVariable = value.keepaliveTimeVariable;
      this._localAs = value.localAs;
      this._localAsVariable = value.localAsVariable;
      this._nextHopSelf = value.nextHopSelf;
      this._nextHopSelfVariable = value.nextHopSelfVariable;
      this._password = value.password;
      this._passwordVariable = value.passwordVariable;
      this._remoteAs = value.remoteAs;
      this._remoteAsVariable = value.remoteAsVariable;
      this._sendCommunity = value.sendCommunity;
      this._sendCommunityVariable = value.sendCommunityVariable;
      this._sendExtendedCommunity = value.sendExtendedCommunity;
      this._sendExtendedCommunityVariable = value.sendExtendedCommunityVariable;
      this._shutdown = value.shutdown;
      this._shutdownVariable = value.shutdownVariable;
      this._updateSourceInterface = value.updateSourceInterface;
      this._updateSourceInterfaceVariable = value.updateSourceInterfaceVariable;
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

  // address_families - computed: false, optional: true, required: false
  private _addressFamilies = new TransportRoutingBgpFeatureIpv6NeighborsAddressFamiliesList(this, "address_families", false);
  public get addressFamilies() {
    return this._addressFamilies;
  }
  public putAddressFamilies(value: TransportRoutingBgpFeatureIpv6NeighborsAddressFamilies[] | cdktf.IResolvable) {
    this._addressFamilies.internalValue = value;
  }
  public resetAddressFamilies() {
    this._addressFamilies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressFamiliesInput() {
    return this._addressFamilies.internalValue;
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

  // allowas_in_number - computed: false, optional: true, required: false
  private _allowasInNumber?: number; 
  public get allowasInNumber() {
    return this.getNumberAttribute('allowas_in_number');
  }
  public set allowasInNumber(value: number) {
    this._allowasInNumber = value;
  }
  public resetAllowasInNumber() {
    this._allowasInNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowasInNumberInput() {
    return this._allowasInNumber;
  }

  // allowas_in_number_variable - computed: false, optional: true, required: false
  private _allowasInNumberVariable?: string; 
  public get allowasInNumberVariable() {
    return this.getStringAttribute('allowas_in_number_variable');
  }
  public set allowasInNumberVariable(value: string) {
    this._allowasInNumberVariable = value;
  }
  public resetAllowasInNumberVariable() {
    this._allowasInNumberVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowasInNumberVariableInput() {
    return this._allowasInNumberVariable;
  }

  // as_override - computed: false, optional: true, required: false
  private _asOverride?: boolean | cdktf.IResolvable; 
  public get asOverride() {
    return this.getBooleanAttribute('as_override');
  }
  public set asOverride(value: boolean | cdktf.IResolvable) {
    this._asOverride = value;
  }
  public resetAsOverride() {
    this._asOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asOverrideInput() {
    return this._asOverride;
  }

  // as_override_variable - computed: false, optional: true, required: false
  private _asOverrideVariable?: string; 
  public get asOverrideVariable() {
    return this.getStringAttribute('as_override_variable');
  }
  public set asOverrideVariable(value: string) {
    this._asOverrideVariable = value;
  }
  public resetAsOverrideVariable() {
    this._asOverrideVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asOverrideVariableInput() {
    return this._asOverrideVariable;
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

  // ebgp_multihop - computed: false, optional: true, required: false
  private _ebgpMultihop?: number; 
  public get ebgpMultihop() {
    return this.getNumberAttribute('ebgp_multihop');
  }
  public set ebgpMultihop(value: number) {
    this._ebgpMultihop = value;
  }
  public resetEbgpMultihop() {
    this._ebgpMultihop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebgpMultihopInput() {
    return this._ebgpMultihop;
  }

  // ebgp_multihop_variable - computed: false, optional: true, required: false
  private _ebgpMultihopVariable?: string; 
  public get ebgpMultihopVariable() {
    return this.getStringAttribute('ebgp_multihop_variable');
  }
  public set ebgpMultihopVariable(value: string) {
    this._ebgpMultihopVariable = value;
  }
  public resetEbgpMultihopVariable() {
    this._ebgpMultihopVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebgpMultihopVariableInput() {
    return this._ebgpMultihopVariable;
  }

  // hold_time - computed: false, optional: true, required: false
  private _holdTime?: number; 
  public get holdTime() {
    return this.getNumberAttribute('hold_time');
  }
  public set holdTime(value: number) {
    this._holdTime = value;
  }
  public resetHoldTime() {
    this._holdTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get holdTimeInput() {
    return this._holdTime;
  }

  // hold_time_variable - computed: false, optional: true, required: false
  private _holdTimeVariable?: string; 
  public get holdTimeVariable() {
    return this.getStringAttribute('hold_time_variable');
  }
  public set holdTimeVariable(value: string) {
    this._holdTimeVariable = value;
  }
  public resetHoldTimeVariable() {
    this._holdTimeVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get holdTimeVariableInput() {
    return this._holdTimeVariable;
  }

  // keepalive_time - computed: false, optional: true, required: false
  private _keepaliveTime?: number; 
  public get keepaliveTime() {
    return this.getNumberAttribute('keepalive_time');
  }
  public set keepaliveTime(value: number) {
    this._keepaliveTime = value;
  }
  public resetKeepaliveTime() {
    this._keepaliveTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepaliveTimeInput() {
    return this._keepaliveTime;
  }

  // keepalive_time_variable - computed: false, optional: true, required: false
  private _keepaliveTimeVariable?: string; 
  public get keepaliveTimeVariable() {
    return this.getStringAttribute('keepalive_time_variable');
  }
  public set keepaliveTimeVariable(value: string) {
    this._keepaliveTimeVariable = value;
  }
  public resetKeepaliveTimeVariable() {
    this._keepaliveTimeVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepaliveTimeVariableInput() {
    return this._keepaliveTimeVariable;
  }

  // local_as - computed: false, optional: true, required: false
  private _localAs?: number; 
  public get localAs() {
    return this.getNumberAttribute('local_as');
  }
  public set localAs(value: number) {
    this._localAs = value;
  }
  public resetLocalAs() {
    this._localAs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localAsInput() {
    return this._localAs;
  }

  // local_as_variable - computed: false, optional: true, required: false
  private _localAsVariable?: string; 
  public get localAsVariable() {
    return this.getStringAttribute('local_as_variable');
  }
  public set localAsVariable(value: string) {
    this._localAsVariable = value;
  }
  public resetLocalAsVariable() {
    this._localAsVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localAsVariableInput() {
    return this._localAsVariable;
  }

  // next_hop_self - computed: false, optional: true, required: false
  private _nextHopSelf?: boolean | cdktf.IResolvable; 
  public get nextHopSelf() {
    return this.getBooleanAttribute('next_hop_self');
  }
  public set nextHopSelf(value: boolean | cdktf.IResolvable) {
    this._nextHopSelf = value;
  }
  public resetNextHopSelf() {
    this._nextHopSelf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopSelfInput() {
    return this._nextHopSelf;
  }

  // next_hop_self_variable - computed: false, optional: true, required: false
  private _nextHopSelfVariable?: string; 
  public get nextHopSelfVariable() {
    return this.getStringAttribute('next_hop_self_variable');
  }
  public set nextHopSelfVariable(value: string) {
    this._nextHopSelfVariable = value;
  }
  public resetNextHopSelfVariable() {
    this._nextHopSelfVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopSelfVariableInput() {
    return this._nextHopSelfVariable;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // password_variable - computed: false, optional: true, required: false
  private _passwordVariable?: string; 
  public get passwordVariable() {
    return this.getStringAttribute('password_variable');
  }
  public set passwordVariable(value: string) {
    this._passwordVariable = value;
  }
  public resetPasswordVariable() {
    this._passwordVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordVariableInput() {
    return this._passwordVariable;
  }

  // remote_as - computed: false, optional: true, required: false
  private _remoteAs?: number; 
  public get remoteAs() {
    return this.getNumberAttribute('remote_as');
  }
  public set remoteAs(value: number) {
    this._remoteAs = value;
  }
  public resetRemoteAs() {
    this._remoteAs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteAsInput() {
    return this._remoteAs;
  }

  // remote_as_variable - computed: false, optional: true, required: false
  private _remoteAsVariable?: string; 
  public get remoteAsVariable() {
    return this.getStringAttribute('remote_as_variable');
  }
  public set remoteAsVariable(value: string) {
    this._remoteAsVariable = value;
  }
  public resetRemoteAsVariable() {
    this._remoteAsVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteAsVariableInput() {
    return this._remoteAsVariable;
  }

  // send_community - computed: false, optional: true, required: false
  private _sendCommunity?: boolean | cdktf.IResolvable; 
  public get sendCommunity() {
    return this.getBooleanAttribute('send_community');
  }
  public set sendCommunity(value: boolean | cdktf.IResolvable) {
    this._sendCommunity = value;
  }
  public resetSendCommunity() {
    this._sendCommunity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendCommunityInput() {
    return this._sendCommunity;
  }

  // send_community_variable - computed: false, optional: true, required: false
  private _sendCommunityVariable?: string; 
  public get sendCommunityVariable() {
    return this.getStringAttribute('send_community_variable');
  }
  public set sendCommunityVariable(value: string) {
    this._sendCommunityVariable = value;
  }
  public resetSendCommunityVariable() {
    this._sendCommunityVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendCommunityVariableInput() {
    return this._sendCommunityVariable;
  }

  // send_extended_community - computed: false, optional: true, required: false
  private _sendExtendedCommunity?: boolean | cdktf.IResolvable; 
  public get sendExtendedCommunity() {
    return this.getBooleanAttribute('send_extended_community');
  }
  public set sendExtendedCommunity(value: boolean | cdktf.IResolvable) {
    this._sendExtendedCommunity = value;
  }
  public resetSendExtendedCommunity() {
    this._sendExtendedCommunity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendExtendedCommunityInput() {
    return this._sendExtendedCommunity;
  }

  // send_extended_community_variable - computed: false, optional: true, required: false
  private _sendExtendedCommunityVariable?: string; 
  public get sendExtendedCommunityVariable() {
    return this.getStringAttribute('send_extended_community_variable');
  }
  public set sendExtendedCommunityVariable(value: string) {
    this._sendExtendedCommunityVariable = value;
  }
  public resetSendExtendedCommunityVariable() {
    this._sendExtendedCommunityVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendExtendedCommunityVariableInput() {
    return this._sendExtendedCommunityVariable;
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

  // update_source_interface - computed: false, optional: true, required: false
  private _updateSourceInterface?: string; 
  public get updateSourceInterface() {
    return this.getStringAttribute('update_source_interface');
  }
  public set updateSourceInterface(value: string) {
    this._updateSourceInterface = value;
  }
  public resetUpdateSourceInterface() {
    this._updateSourceInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateSourceInterfaceInput() {
    return this._updateSourceInterface;
  }

  // update_source_interface_variable - computed: false, optional: true, required: false
  private _updateSourceInterfaceVariable?: string; 
  public get updateSourceInterfaceVariable() {
    return this.getStringAttribute('update_source_interface_variable');
  }
  public set updateSourceInterfaceVariable(value: string) {
    this._updateSourceInterfaceVariable = value;
  }
  public resetUpdateSourceInterfaceVariable() {
    this._updateSourceInterfaceVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateSourceInterfaceVariableInput() {
    return this._updateSourceInterfaceVariable;
  }
}

export class TransportRoutingBgpFeatureIpv6NeighborsList extends cdktf.ComplexList {
  public internalValue? : TransportRoutingBgpFeatureIpv6Neighbors[] | cdktf.IResolvable

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
  public get(index: number): TransportRoutingBgpFeatureIpv6NeighborsOutputReference {
    return new TransportRoutingBgpFeatureIpv6NeighborsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TransportRoutingBgpFeatureIpv6Networks {
  /**
  * Configure the prefixes for BGP to announce
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#network_prefix TransportRoutingBgpFeature#network_prefix}
  */
  readonly networkPrefix?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#network_prefix_variable TransportRoutingBgpFeature#network_prefix_variable}
  */
  readonly networkPrefixVariable?: string;
}

export function transportRoutingBgpFeatureIpv6NetworksToTerraform(struct?: TransportRoutingBgpFeatureIpv6Networks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network_prefix: cdktf.stringToTerraform(struct!.networkPrefix),
    network_prefix_variable: cdktf.stringToTerraform(struct!.networkPrefixVariable),
  }
}


export function transportRoutingBgpFeatureIpv6NetworksToHclTerraform(struct?: TransportRoutingBgpFeatureIpv6Networks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network_prefix: {
      value: cdktf.stringToHclTerraform(struct!.networkPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_prefix_variable: {
      value: cdktf.stringToHclTerraform(struct!.networkPrefixVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TransportRoutingBgpFeatureIpv6NetworksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TransportRoutingBgpFeatureIpv6Networks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkPrefix = this._networkPrefix;
    }
    if (this._networkPrefixVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkPrefixVariable = this._networkPrefixVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransportRoutingBgpFeatureIpv6Networks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._networkPrefix = undefined;
      this._networkPrefixVariable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._networkPrefix = value.networkPrefix;
      this._networkPrefixVariable = value.networkPrefixVariable;
    }
  }

  // network_prefix - computed: false, optional: true, required: false
  private _networkPrefix?: string; 
  public get networkPrefix() {
    return this.getStringAttribute('network_prefix');
  }
  public set networkPrefix(value: string) {
    this._networkPrefix = value;
  }
  public resetNetworkPrefix() {
    this._networkPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkPrefixInput() {
    return this._networkPrefix;
  }

  // network_prefix_variable - computed: false, optional: true, required: false
  private _networkPrefixVariable?: string; 
  public get networkPrefixVariable() {
    return this.getStringAttribute('network_prefix_variable');
  }
  public set networkPrefixVariable(value: string) {
    this._networkPrefixVariable = value;
  }
  public resetNetworkPrefixVariable() {
    this._networkPrefixVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkPrefixVariableInput() {
    return this._networkPrefixVariable;
  }
}

export class TransportRoutingBgpFeatureIpv6NetworksList extends cdktf.ComplexList {
  public internalValue? : TransportRoutingBgpFeatureIpv6Networks[] | cdktf.IResolvable

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
  public get(index: number): TransportRoutingBgpFeatureIpv6NetworksOutputReference {
    return new TransportRoutingBgpFeatureIpv6NetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TransportRoutingBgpFeatureIpv6Redistributes {
  /**
  * Set the protocol to redistribute routes from
  *   - Choices: `static`, `connected`, `ospf`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#protocol TransportRoutingBgpFeature#protocol}
  */
  readonly protocol?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#protocol_variable TransportRoutingBgpFeature#protocol_variable}
  */
  readonly protocolVariable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#route_policy_id TransportRoutingBgpFeature#route_policy_id}
  */
  readonly routePolicyId?: string;
}

export function transportRoutingBgpFeatureIpv6RedistributesToTerraform(struct?: TransportRoutingBgpFeatureIpv6Redistributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    protocol: cdktf.stringToTerraform(struct!.protocol),
    protocol_variable: cdktf.stringToTerraform(struct!.protocolVariable),
    route_policy_id: cdktf.stringToTerraform(struct!.routePolicyId),
  }
}


export function transportRoutingBgpFeatureIpv6RedistributesToHclTerraform(struct?: TransportRoutingBgpFeatureIpv6Redistributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
    route_policy_id: {
      value: cdktf.stringToHclTerraform(struct!.routePolicyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TransportRoutingBgpFeatureIpv6RedistributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TransportRoutingBgpFeatureIpv6Redistributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._protocolVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocolVariable = this._protocolVariable;
    }
    if (this._routePolicyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.routePolicyId = this._routePolicyId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransportRoutingBgpFeatureIpv6Redistributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._protocol = undefined;
      this._protocolVariable = undefined;
      this._routePolicyId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._protocol = value.protocol;
      this._protocolVariable = value.protocolVariable;
      this._routePolicyId = value.routePolicyId;
    }
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

  // route_policy_id - computed: false, optional: true, required: false
  private _routePolicyId?: string; 
  public get routePolicyId() {
    return this.getStringAttribute('route_policy_id');
  }
  public set routePolicyId(value: string) {
    this._routePolicyId = value;
  }
  public resetRoutePolicyId() {
    this._routePolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routePolicyIdInput() {
    return this._routePolicyId;
  }
}

export class TransportRoutingBgpFeatureIpv6RedistributesList extends cdktf.ComplexList {
  public internalValue? : TransportRoutingBgpFeatureIpv6Redistributes[] | cdktf.IResolvable

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
  public get(index: number): TransportRoutingBgpFeatureIpv6RedistributesOutputReference {
    return new TransportRoutingBgpFeatureIpv6RedistributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TransportRoutingBgpFeatureMplsInterfaces {
  /**
  * Interface Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#interface_name TransportRoutingBgpFeature#interface_name}
  */
  readonly interfaceName?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#interface_name_variable TransportRoutingBgpFeature#interface_name_variable}
  */
  readonly interfaceNameVariable?: string;
}

export function transportRoutingBgpFeatureMplsInterfacesToTerraform(struct?: TransportRoutingBgpFeatureMplsInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interface_name: cdktf.stringToTerraform(struct!.interfaceName),
    interface_name_variable: cdktf.stringToTerraform(struct!.interfaceNameVariable),
  }
}


export function transportRoutingBgpFeatureMplsInterfacesToHclTerraform(struct?: TransportRoutingBgpFeatureMplsInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TransportRoutingBgpFeatureMplsInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TransportRoutingBgpFeatureMplsInterfaces | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interfaceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceName = this._interfaceName;
    }
    if (this._interfaceNameVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceNameVariable = this._interfaceNameVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransportRoutingBgpFeatureMplsInterfaces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interfaceName = undefined;
      this._interfaceNameVariable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interfaceName = value.interfaceName;
      this._interfaceNameVariable = value.interfaceNameVariable;
    }
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
}

export class TransportRoutingBgpFeatureMplsInterfacesList extends cdktf.ComplexList {
  public internalValue? : TransportRoutingBgpFeatureMplsInterfaces[] | cdktf.IResolvable

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
  public get(index: number): TransportRoutingBgpFeatureMplsInterfacesOutputReference {
    return new TransportRoutingBgpFeatureMplsInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature sdwan_transport_routing_bgp_feature}
*/
export class TransportRoutingBgpFeature extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_transport_routing_bgp_feature";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TransportRoutingBgpFeature resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TransportRoutingBgpFeature to import
  * @param importFromId The id of the existing TransportRoutingBgpFeature that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TransportRoutingBgpFeature to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_transport_routing_bgp_feature", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_routing_bgp_feature sdwan_transport_routing_bgp_feature} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TransportRoutingBgpFeatureConfig
  */
  public constructor(scope: Construct, id: string, config: TransportRoutingBgpFeatureConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_transport_routing_bgp_feature',
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
    this._alwaysCompareMed = config.alwaysCompareMed;
    this._alwaysCompareMedVariable = config.alwaysCompareMedVariable;
    this._asNumber = config.asNumber;
    this._asNumberVariable = config.asNumberVariable;
    this._compareRouterId = config.compareRouterId;
    this._compareRouterIdVariable = config.compareRouterIdVariable;
    this._description = config.description;
    this._deterministicMed = config.deterministicMed;
    this._deterministicMedVariable = config.deterministicMedVariable;
    this._externalRoutesDistance = config.externalRoutesDistance;
    this._externalRoutesDistanceVariable = config.externalRoutesDistanceVariable;
    this._featureProfileId = config.featureProfileId;
    this._holdTime = config.holdTime;
    this._holdTimeVariable = config.holdTimeVariable;
    this._internalRoutesDistance = config.internalRoutesDistance;
    this._internalRoutesDistanceVariable = config.internalRoutesDistanceVariable;
    this._ipv4AggregateAddresses.internalValue = config.ipv4AggregateAddresses;
    this._ipv4EibgpMaximumPaths = config.ipv4EibgpMaximumPaths;
    this._ipv4EibgpMaximumPathsVariable = config.ipv4EibgpMaximumPathsVariable;
    this._ipv4Neighbors.internalValue = config.ipv4Neighbors;
    this._ipv4Networks.internalValue = config.ipv4Networks;
    this._ipv4Originate = config.ipv4Originate;
    this._ipv4OriginateVariable = config.ipv4OriginateVariable;
    this._ipv4Redistributes.internalValue = config.ipv4Redistributes;
    this._ipv4TableMapFilter = config.ipv4TableMapFilter;
    this._ipv4TableMapFilterVariable = config.ipv4TableMapFilterVariable;
    this._ipv4TableMapRoutePolicyId = config.ipv4TableMapRoutePolicyId;
    this._ipv6AggregateAddresses.internalValue = config.ipv6AggregateAddresses;
    this._ipv6EibgpMaximumPaths = config.ipv6EibgpMaximumPaths;
    this._ipv6EibgpMaximumPathsVariable = config.ipv6EibgpMaximumPathsVariable;
    this._ipv6Neighbors.internalValue = config.ipv6Neighbors;
    this._ipv6Networks.internalValue = config.ipv6Networks;
    this._ipv6Originate = config.ipv6Originate;
    this._ipv6OriginateVariable = config.ipv6OriginateVariable;
    this._ipv6Redistributes.internalValue = config.ipv6Redistributes;
    this._ipv6TableMapFilter = config.ipv6TableMapFilter;
    this._ipv6TableMapFilterVariable = config.ipv6TableMapFilterVariable;
    this._ipv6TableMapRoutePolicyId = config.ipv6TableMapRoutePolicyId;
    this._keepaliveTime = config.keepaliveTime;
    this._keepaliveTimeVariable = config.keepaliveTimeVariable;
    this._localRoutesDistance = config.localRoutesDistance;
    this._localRoutesDistanceVariable = config.localRoutesDistanceVariable;
    this._missingMedAsWorst = config.missingMedAsWorst;
    this._missingMedAsWorstVariable = config.missingMedAsWorstVariable;
    this._mplsInterfaces.internalValue = config.mplsInterfaces;
    this._multipathRelax = config.multipathRelax;
    this._multipathRelaxVariable = config.multipathRelaxVariable;
    this._name = config.name;
    this._propagateAsPath = config.propagateAsPath;
    this._propagateAsPathVariable = config.propagateAsPathVariable;
    this._propagateCommunity = config.propagateCommunity;
    this._propagateCommunityVariable = config.propagateCommunityVariable;
    this._routerId = config.routerId;
    this._routerIdVariable = config.routerIdVariable;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // always_compare_med - computed: false, optional: true, required: false
  private _alwaysCompareMed?: boolean | cdktf.IResolvable; 
  public get alwaysCompareMed() {
    return this.getBooleanAttribute('always_compare_med');
  }
  public set alwaysCompareMed(value: boolean | cdktf.IResolvable) {
    this._alwaysCompareMed = value;
  }
  public resetAlwaysCompareMed() {
    this._alwaysCompareMed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alwaysCompareMedInput() {
    return this._alwaysCompareMed;
  }

  // always_compare_med_variable - computed: false, optional: true, required: false
  private _alwaysCompareMedVariable?: string; 
  public get alwaysCompareMedVariable() {
    return this.getStringAttribute('always_compare_med_variable');
  }
  public set alwaysCompareMedVariable(value: string) {
    this._alwaysCompareMedVariable = value;
  }
  public resetAlwaysCompareMedVariable() {
    this._alwaysCompareMedVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alwaysCompareMedVariableInput() {
    return this._alwaysCompareMedVariable;
  }

  // as_number - computed: false, optional: true, required: false
  private _asNumber?: number; 
  public get asNumber() {
    return this.getNumberAttribute('as_number');
  }
  public set asNumber(value: number) {
    this._asNumber = value;
  }
  public resetAsNumber() {
    this._asNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asNumberInput() {
    return this._asNumber;
  }

  // as_number_variable - computed: false, optional: true, required: false
  private _asNumberVariable?: string; 
  public get asNumberVariable() {
    return this.getStringAttribute('as_number_variable');
  }
  public set asNumberVariable(value: string) {
    this._asNumberVariable = value;
  }
  public resetAsNumberVariable() {
    this._asNumberVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asNumberVariableInput() {
    return this._asNumberVariable;
  }

  // compare_router_id - computed: false, optional: true, required: false
  private _compareRouterId?: boolean | cdktf.IResolvable; 
  public get compareRouterId() {
    return this.getBooleanAttribute('compare_router_id');
  }
  public set compareRouterId(value: boolean | cdktf.IResolvable) {
    this._compareRouterId = value;
  }
  public resetCompareRouterId() {
    this._compareRouterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compareRouterIdInput() {
    return this._compareRouterId;
  }

  // compare_router_id_variable - computed: false, optional: true, required: false
  private _compareRouterIdVariable?: string; 
  public get compareRouterIdVariable() {
    return this.getStringAttribute('compare_router_id_variable');
  }
  public set compareRouterIdVariable(value: string) {
    this._compareRouterIdVariable = value;
  }
  public resetCompareRouterIdVariable() {
    this._compareRouterIdVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compareRouterIdVariableInput() {
    return this._compareRouterIdVariable;
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

  // deterministic_med - computed: false, optional: true, required: false
  private _deterministicMed?: boolean | cdktf.IResolvable; 
  public get deterministicMed() {
    return this.getBooleanAttribute('deterministic_med');
  }
  public set deterministicMed(value: boolean | cdktf.IResolvable) {
    this._deterministicMed = value;
  }
  public resetDeterministicMed() {
    this._deterministicMed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deterministicMedInput() {
    return this._deterministicMed;
  }

  // deterministic_med_variable - computed: false, optional: true, required: false
  private _deterministicMedVariable?: string; 
  public get deterministicMedVariable() {
    return this.getStringAttribute('deterministic_med_variable');
  }
  public set deterministicMedVariable(value: string) {
    this._deterministicMedVariable = value;
  }
  public resetDeterministicMedVariable() {
    this._deterministicMedVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deterministicMedVariableInput() {
    return this._deterministicMedVariable;
  }

  // external_routes_distance - computed: false, optional: true, required: false
  private _externalRoutesDistance?: number; 
  public get externalRoutesDistance() {
    return this.getNumberAttribute('external_routes_distance');
  }
  public set externalRoutesDistance(value: number) {
    this._externalRoutesDistance = value;
  }
  public resetExternalRoutesDistance() {
    this._externalRoutesDistance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalRoutesDistanceInput() {
    return this._externalRoutesDistance;
  }

  // external_routes_distance_variable - computed: false, optional: true, required: false
  private _externalRoutesDistanceVariable?: string; 
  public get externalRoutesDistanceVariable() {
    return this.getStringAttribute('external_routes_distance_variable');
  }
  public set externalRoutesDistanceVariable(value: string) {
    this._externalRoutesDistanceVariable = value;
  }
  public resetExternalRoutesDistanceVariable() {
    this._externalRoutesDistanceVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalRoutesDistanceVariableInput() {
    return this._externalRoutesDistanceVariable;
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

  // hold_time - computed: false, optional: true, required: false
  private _holdTime?: number; 
  public get holdTime() {
    return this.getNumberAttribute('hold_time');
  }
  public set holdTime(value: number) {
    this._holdTime = value;
  }
  public resetHoldTime() {
    this._holdTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get holdTimeInput() {
    return this._holdTime;
  }

  // hold_time_variable - computed: false, optional: true, required: false
  private _holdTimeVariable?: string; 
  public get holdTimeVariable() {
    return this.getStringAttribute('hold_time_variable');
  }
  public set holdTimeVariable(value: string) {
    this._holdTimeVariable = value;
  }
  public resetHoldTimeVariable() {
    this._holdTimeVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get holdTimeVariableInput() {
    return this._holdTimeVariable;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // internal_routes_distance - computed: false, optional: true, required: false
  private _internalRoutesDistance?: number; 
  public get internalRoutesDistance() {
    return this.getNumberAttribute('internal_routes_distance');
  }
  public set internalRoutesDistance(value: number) {
    this._internalRoutesDistance = value;
  }
  public resetInternalRoutesDistance() {
    this._internalRoutesDistance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalRoutesDistanceInput() {
    return this._internalRoutesDistance;
  }

  // internal_routes_distance_variable - computed: false, optional: true, required: false
  private _internalRoutesDistanceVariable?: string; 
  public get internalRoutesDistanceVariable() {
    return this.getStringAttribute('internal_routes_distance_variable');
  }
  public set internalRoutesDistanceVariable(value: string) {
    this._internalRoutesDistanceVariable = value;
  }
  public resetInternalRoutesDistanceVariable() {
    this._internalRoutesDistanceVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalRoutesDistanceVariableInput() {
    return this._internalRoutesDistanceVariable;
  }

  // ipv4_aggregate_addresses - computed: false, optional: true, required: false
  private _ipv4AggregateAddresses = new TransportRoutingBgpFeatureIpv4AggregateAddressesList(this, "ipv4_aggregate_addresses", false);
  public get ipv4AggregateAddresses() {
    return this._ipv4AggregateAddresses;
  }
  public putIpv4AggregateAddresses(value: TransportRoutingBgpFeatureIpv4AggregateAddresses[] | cdktf.IResolvable) {
    this._ipv4AggregateAddresses.internalValue = value;
  }
  public resetIpv4AggregateAddresses() {
    this._ipv4AggregateAddresses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AggregateAddressesInput() {
    return this._ipv4AggregateAddresses.internalValue;
  }

  // ipv4_eibgp_maximum_paths - computed: false, optional: true, required: false
  private _ipv4EibgpMaximumPaths?: number; 
  public get ipv4EibgpMaximumPaths() {
    return this.getNumberAttribute('ipv4_eibgp_maximum_paths');
  }
  public set ipv4EibgpMaximumPaths(value: number) {
    this._ipv4EibgpMaximumPaths = value;
  }
  public resetIpv4EibgpMaximumPaths() {
    this._ipv4EibgpMaximumPaths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4EibgpMaximumPathsInput() {
    return this._ipv4EibgpMaximumPaths;
  }

  // ipv4_eibgp_maximum_paths_variable - computed: false, optional: true, required: false
  private _ipv4EibgpMaximumPathsVariable?: string; 
  public get ipv4EibgpMaximumPathsVariable() {
    return this.getStringAttribute('ipv4_eibgp_maximum_paths_variable');
  }
  public set ipv4EibgpMaximumPathsVariable(value: string) {
    this._ipv4EibgpMaximumPathsVariable = value;
  }
  public resetIpv4EibgpMaximumPathsVariable() {
    this._ipv4EibgpMaximumPathsVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4EibgpMaximumPathsVariableInput() {
    return this._ipv4EibgpMaximumPathsVariable;
  }

  // ipv4_neighbors - computed: false, optional: true, required: false
  private _ipv4Neighbors = new TransportRoutingBgpFeatureIpv4NeighborsList(this, "ipv4_neighbors", false);
  public get ipv4Neighbors() {
    return this._ipv4Neighbors;
  }
  public putIpv4Neighbors(value: TransportRoutingBgpFeatureIpv4Neighbors[] | cdktf.IResolvable) {
    this._ipv4Neighbors.internalValue = value;
  }
  public resetIpv4Neighbors() {
    this._ipv4Neighbors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4NeighborsInput() {
    return this._ipv4Neighbors.internalValue;
  }

  // ipv4_networks - computed: false, optional: true, required: false
  private _ipv4Networks = new TransportRoutingBgpFeatureIpv4NetworksList(this, "ipv4_networks", false);
  public get ipv4Networks() {
    return this._ipv4Networks;
  }
  public putIpv4Networks(value: TransportRoutingBgpFeatureIpv4Networks[] | cdktf.IResolvable) {
    this._ipv4Networks.internalValue = value;
  }
  public resetIpv4Networks() {
    this._ipv4Networks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4NetworksInput() {
    return this._ipv4Networks.internalValue;
  }

  // ipv4_originate - computed: false, optional: true, required: false
  private _ipv4Originate?: boolean | cdktf.IResolvable; 
  public get ipv4Originate() {
    return this.getBooleanAttribute('ipv4_originate');
  }
  public set ipv4Originate(value: boolean | cdktf.IResolvable) {
    this._ipv4Originate = value;
  }
  public resetIpv4Originate() {
    this._ipv4Originate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4OriginateInput() {
    return this._ipv4Originate;
  }

  // ipv4_originate_variable - computed: false, optional: true, required: false
  private _ipv4OriginateVariable?: string; 
  public get ipv4OriginateVariable() {
    return this.getStringAttribute('ipv4_originate_variable');
  }
  public set ipv4OriginateVariable(value: string) {
    this._ipv4OriginateVariable = value;
  }
  public resetIpv4OriginateVariable() {
    this._ipv4OriginateVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4OriginateVariableInput() {
    return this._ipv4OriginateVariable;
  }

  // ipv4_redistributes - computed: false, optional: true, required: false
  private _ipv4Redistributes = new TransportRoutingBgpFeatureIpv4RedistributesList(this, "ipv4_redistributes", false);
  public get ipv4Redistributes() {
    return this._ipv4Redistributes;
  }
  public putIpv4Redistributes(value: TransportRoutingBgpFeatureIpv4Redistributes[] | cdktf.IResolvable) {
    this._ipv4Redistributes.internalValue = value;
  }
  public resetIpv4Redistributes() {
    this._ipv4Redistributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4RedistributesInput() {
    return this._ipv4Redistributes.internalValue;
  }

  // ipv4_table_map_filter - computed: false, optional: true, required: false
  private _ipv4TableMapFilter?: boolean | cdktf.IResolvable; 
  public get ipv4TableMapFilter() {
    return this.getBooleanAttribute('ipv4_table_map_filter');
  }
  public set ipv4TableMapFilter(value: boolean | cdktf.IResolvable) {
    this._ipv4TableMapFilter = value;
  }
  public resetIpv4TableMapFilter() {
    this._ipv4TableMapFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4TableMapFilterInput() {
    return this._ipv4TableMapFilter;
  }

  // ipv4_table_map_filter_variable - computed: false, optional: true, required: false
  private _ipv4TableMapFilterVariable?: string; 
  public get ipv4TableMapFilterVariable() {
    return this.getStringAttribute('ipv4_table_map_filter_variable');
  }
  public set ipv4TableMapFilterVariable(value: string) {
    this._ipv4TableMapFilterVariable = value;
  }
  public resetIpv4TableMapFilterVariable() {
    this._ipv4TableMapFilterVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4TableMapFilterVariableInput() {
    return this._ipv4TableMapFilterVariable;
  }

  // ipv4_table_map_route_policy_id - computed: false, optional: true, required: false
  private _ipv4TableMapRoutePolicyId?: string; 
  public get ipv4TableMapRoutePolicyId() {
    return this.getStringAttribute('ipv4_table_map_route_policy_id');
  }
  public set ipv4TableMapRoutePolicyId(value: string) {
    this._ipv4TableMapRoutePolicyId = value;
  }
  public resetIpv4TableMapRoutePolicyId() {
    this._ipv4TableMapRoutePolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4TableMapRoutePolicyIdInput() {
    return this._ipv4TableMapRoutePolicyId;
  }

  // ipv6_aggregate_addresses - computed: false, optional: true, required: false
  private _ipv6AggregateAddresses = new TransportRoutingBgpFeatureIpv6AggregateAddressesList(this, "ipv6_aggregate_addresses", false);
  public get ipv6AggregateAddresses() {
    return this._ipv6AggregateAddresses;
  }
  public putIpv6AggregateAddresses(value: TransportRoutingBgpFeatureIpv6AggregateAddresses[] | cdktf.IResolvable) {
    this._ipv6AggregateAddresses.internalValue = value;
  }
  public resetIpv6AggregateAddresses() {
    this._ipv6AggregateAddresses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AggregateAddressesInput() {
    return this._ipv6AggregateAddresses.internalValue;
  }

  // ipv6_eibgp_maximum_paths - computed: false, optional: true, required: false
  private _ipv6EibgpMaximumPaths?: number; 
  public get ipv6EibgpMaximumPaths() {
    return this.getNumberAttribute('ipv6_eibgp_maximum_paths');
  }
  public set ipv6EibgpMaximumPaths(value: number) {
    this._ipv6EibgpMaximumPaths = value;
  }
  public resetIpv6EibgpMaximumPaths() {
    this._ipv6EibgpMaximumPaths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6EibgpMaximumPathsInput() {
    return this._ipv6EibgpMaximumPaths;
  }

  // ipv6_eibgp_maximum_paths_variable - computed: false, optional: true, required: false
  private _ipv6EibgpMaximumPathsVariable?: string; 
  public get ipv6EibgpMaximumPathsVariable() {
    return this.getStringAttribute('ipv6_eibgp_maximum_paths_variable');
  }
  public set ipv6EibgpMaximumPathsVariable(value: string) {
    this._ipv6EibgpMaximumPathsVariable = value;
  }
  public resetIpv6EibgpMaximumPathsVariable() {
    this._ipv6EibgpMaximumPathsVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6EibgpMaximumPathsVariableInput() {
    return this._ipv6EibgpMaximumPathsVariable;
  }

  // ipv6_neighbors - computed: false, optional: true, required: false
  private _ipv6Neighbors = new TransportRoutingBgpFeatureIpv6NeighborsList(this, "ipv6_neighbors", false);
  public get ipv6Neighbors() {
    return this._ipv6Neighbors;
  }
  public putIpv6Neighbors(value: TransportRoutingBgpFeatureIpv6Neighbors[] | cdktf.IResolvable) {
    this._ipv6Neighbors.internalValue = value;
  }
  public resetIpv6Neighbors() {
    this._ipv6Neighbors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6NeighborsInput() {
    return this._ipv6Neighbors.internalValue;
  }

  // ipv6_networks - computed: false, optional: true, required: false
  private _ipv6Networks = new TransportRoutingBgpFeatureIpv6NetworksList(this, "ipv6_networks", false);
  public get ipv6Networks() {
    return this._ipv6Networks;
  }
  public putIpv6Networks(value: TransportRoutingBgpFeatureIpv6Networks[] | cdktf.IResolvable) {
    this._ipv6Networks.internalValue = value;
  }
  public resetIpv6Networks() {
    this._ipv6Networks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6NetworksInput() {
    return this._ipv6Networks.internalValue;
  }

  // ipv6_originate - computed: false, optional: true, required: false
  private _ipv6Originate?: boolean | cdktf.IResolvable; 
  public get ipv6Originate() {
    return this.getBooleanAttribute('ipv6_originate');
  }
  public set ipv6Originate(value: boolean | cdktf.IResolvable) {
    this._ipv6Originate = value;
  }
  public resetIpv6Originate() {
    this._ipv6Originate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6OriginateInput() {
    return this._ipv6Originate;
  }

  // ipv6_originate_variable - computed: false, optional: true, required: false
  private _ipv6OriginateVariable?: string; 
  public get ipv6OriginateVariable() {
    return this.getStringAttribute('ipv6_originate_variable');
  }
  public set ipv6OriginateVariable(value: string) {
    this._ipv6OriginateVariable = value;
  }
  public resetIpv6OriginateVariable() {
    this._ipv6OriginateVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6OriginateVariableInput() {
    return this._ipv6OriginateVariable;
  }

  // ipv6_redistributes - computed: false, optional: true, required: false
  private _ipv6Redistributes = new TransportRoutingBgpFeatureIpv6RedistributesList(this, "ipv6_redistributes", false);
  public get ipv6Redistributes() {
    return this._ipv6Redistributes;
  }
  public putIpv6Redistributes(value: TransportRoutingBgpFeatureIpv6Redistributes[] | cdktf.IResolvable) {
    this._ipv6Redistributes.internalValue = value;
  }
  public resetIpv6Redistributes() {
    this._ipv6Redistributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6RedistributesInput() {
    return this._ipv6Redistributes.internalValue;
  }

  // ipv6_table_map_filter - computed: false, optional: true, required: false
  private _ipv6TableMapFilter?: boolean | cdktf.IResolvable; 
  public get ipv6TableMapFilter() {
    return this.getBooleanAttribute('ipv6_table_map_filter');
  }
  public set ipv6TableMapFilter(value: boolean | cdktf.IResolvable) {
    this._ipv6TableMapFilter = value;
  }
  public resetIpv6TableMapFilter() {
    this._ipv6TableMapFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6TableMapFilterInput() {
    return this._ipv6TableMapFilter;
  }

  // ipv6_table_map_filter_variable - computed: false, optional: true, required: false
  private _ipv6TableMapFilterVariable?: string; 
  public get ipv6TableMapFilterVariable() {
    return this.getStringAttribute('ipv6_table_map_filter_variable');
  }
  public set ipv6TableMapFilterVariable(value: string) {
    this._ipv6TableMapFilterVariable = value;
  }
  public resetIpv6TableMapFilterVariable() {
    this._ipv6TableMapFilterVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6TableMapFilterVariableInput() {
    return this._ipv6TableMapFilterVariable;
  }

  // ipv6_table_map_route_policy_id - computed: false, optional: true, required: false
  private _ipv6TableMapRoutePolicyId?: string; 
  public get ipv6TableMapRoutePolicyId() {
    return this.getStringAttribute('ipv6_table_map_route_policy_id');
  }
  public set ipv6TableMapRoutePolicyId(value: string) {
    this._ipv6TableMapRoutePolicyId = value;
  }
  public resetIpv6TableMapRoutePolicyId() {
    this._ipv6TableMapRoutePolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6TableMapRoutePolicyIdInput() {
    return this._ipv6TableMapRoutePolicyId;
  }

  // keepalive_time - computed: false, optional: true, required: false
  private _keepaliveTime?: number; 
  public get keepaliveTime() {
    return this.getNumberAttribute('keepalive_time');
  }
  public set keepaliveTime(value: number) {
    this._keepaliveTime = value;
  }
  public resetKeepaliveTime() {
    this._keepaliveTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepaliveTimeInput() {
    return this._keepaliveTime;
  }

  // keepalive_time_variable - computed: false, optional: true, required: false
  private _keepaliveTimeVariable?: string; 
  public get keepaliveTimeVariable() {
    return this.getStringAttribute('keepalive_time_variable');
  }
  public set keepaliveTimeVariable(value: string) {
    this._keepaliveTimeVariable = value;
  }
  public resetKeepaliveTimeVariable() {
    this._keepaliveTimeVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepaliveTimeVariableInput() {
    return this._keepaliveTimeVariable;
  }

  // local_routes_distance - computed: false, optional: true, required: false
  private _localRoutesDistance?: number; 
  public get localRoutesDistance() {
    return this.getNumberAttribute('local_routes_distance');
  }
  public set localRoutesDistance(value: number) {
    this._localRoutesDistance = value;
  }
  public resetLocalRoutesDistance() {
    this._localRoutesDistance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localRoutesDistanceInput() {
    return this._localRoutesDistance;
  }

  // local_routes_distance_variable - computed: false, optional: true, required: false
  private _localRoutesDistanceVariable?: string; 
  public get localRoutesDistanceVariable() {
    return this.getStringAttribute('local_routes_distance_variable');
  }
  public set localRoutesDistanceVariable(value: string) {
    this._localRoutesDistanceVariable = value;
  }
  public resetLocalRoutesDistanceVariable() {
    this._localRoutesDistanceVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localRoutesDistanceVariableInput() {
    return this._localRoutesDistanceVariable;
  }

  // missing_med_as_worst - computed: false, optional: true, required: false
  private _missingMedAsWorst?: boolean | cdktf.IResolvable; 
  public get missingMedAsWorst() {
    return this.getBooleanAttribute('missing_med_as_worst');
  }
  public set missingMedAsWorst(value: boolean | cdktf.IResolvable) {
    this._missingMedAsWorst = value;
  }
  public resetMissingMedAsWorst() {
    this._missingMedAsWorst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get missingMedAsWorstInput() {
    return this._missingMedAsWorst;
  }

  // missing_med_as_worst_variable - computed: false, optional: true, required: false
  private _missingMedAsWorstVariable?: string; 
  public get missingMedAsWorstVariable() {
    return this.getStringAttribute('missing_med_as_worst_variable');
  }
  public set missingMedAsWorstVariable(value: string) {
    this._missingMedAsWorstVariable = value;
  }
  public resetMissingMedAsWorstVariable() {
    this._missingMedAsWorstVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get missingMedAsWorstVariableInput() {
    return this._missingMedAsWorstVariable;
  }

  // mpls_interfaces - computed: false, optional: true, required: false
  private _mplsInterfaces = new TransportRoutingBgpFeatureMplsInterfacesList(this, "mpls_interfaces", false);
  public get mplsInterfaces() {
    return this._mplsInterfaces;
  }
  public putMplsInterfaces(value: TransportRoutingBgpFeatureMplsInterfaces[] | cdktf.IResolvable) {
    this._mplsInterfaces.internalValue = value;
  }
  public resetMplsInterfaces() {
    this._mplsInterfaces.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mplsInterfacesInput() {
    return this._mplsInterfaces.internalValue;
  }

  // multipath_relax - computed: false, optional: true, required: false
  private _multipathRelax?: boolean | cdktf.IResolvable; 
  public get multipathRelax() {
    return this.getBooleanAttribute('multipath_relax');
  }
  public set multipathRelax(value: boolean | cdktf.IResolvable) {
    this._multipathRelax = value;
  }
  public resetMultipathRelax() {
    this._multipathRelax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multipathRelaxInput() {
    return this._multipathRelax;
  }

  // multipath_relax_variable - computed: false, optional: true, required: false
  private _multipathRelaxVariable?: string; 
  public get multipathRelaxVariable() {
    return this.getStringAttribute('multipath_relax_variable');
  }
  public set multipathRelaxVariable(value: string) {
    this._multipathRelaxVariable = value;
  }
  public resetMultipathRelaxVariable() {
    this._multipathRelaxVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multipathRelaxVariableInput() {
    return this._multipathRelaxVariable;
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

  // propagate_as_path - computed: false, optional: true, required: false
  private _propagateAsPath?: boolean | cdktf.IResolvable; 
  public get propagateAsPath() {
    return this.getBooleanAttribute('propagate_as_path');
  }
  public set propagateAsPath(value: boolean | cdktf.IResolvable) {
    this._propagateAsPath = value;
  }
  public resetPropagateAsPath() {
    this._propagateAsPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propagateAsPathInput() {
    return this._propagateAsPath;
  }

  // propagate_as_path_variable - computed: false, optional: true, required: false
  private _propagateAsPathVariable?: string; 
  public get propagateAsPathVariable() {
    return this.getStringAttribute('propagate_as_path_variable');
  }
  public set propagateAsPathVariable(value: string) {
    this._propagateAsPathVariable = value;
  }
  public resetPropagateAsPathVariable() {
    this._propagateAsPathVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propagateAsPathVariableInput() {
    return this._propagateAsPathVariable;
  }

  // propagate_community - computed: false, optional: true, required: false
  private _propagateCommunity?: boolean | cdktf.IResolvable; 
  public get propagateCommunity() {
    return this.getBooleanAttribute('propagate_community');
  }
  public set propagateCommunity(value: boolean | cdktf.IResolvable) {
    this._propagateCommunity = value;
  }
  public resetPropagateCommunity() {
    this._propagateCommunity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propagateCommunityInput() {
    return this._propagateCommunity;
  }

  // propagate_community_variable - computed: false, optional: true, required: false
  private _propagateCommunityVariable?: string; 
  public get propagateCommunityVariable() {
    return this.getStringAttribute('propagate_community_variable');
  }
  public set propagateCommunityVariable(value: string) {
    this._propagateCommunityVariable = value;
  }
  public resetPropagateCommunityVariable() {
    this._propagateCommunityVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propagateCommunityVariableInput() {
    return this._propagateCommunityVariable;
  }

  // router_id - computed: false, optional: true, required: false
  private _routerId?: string; 
  public get routerId() {
    return this.getStringAttribute('router_id');
  }
  public set routerId(value: string) {
    this._routerId = value;
  }
  public resetRouterId() {
    this._routerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routerIdInput() {
    return this._routerId;
  }

  // router_id_variable - computed: false, optional: true, required: false
  private _routerIdVariable?: string; 
  public get routerIdVariable() {
    return this.getStringAttribute('router_id_variable');
  }
  public set routerIdVariable(value: string) {
    this._routerIdVariable = value;
  }
  public resetRouterIdVariable() {
    this._routerIdVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routerIdVariableInput() {
    return this._routerIdVariable;
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
      always_compare_med: cdktf.booleanToTerraform(this._alwaysCompareMed),
      always_compare_med_variable: cdktf.stringToTerraform(this._alwaysCompareMedVariable),
      as_number: cdktf.numberToTerraform(this._asNumber),
      as_number_variable: cdktf.stringToTerraform(this._asNumberVariable),
      compare_router_id: cdktf.booleanToTerraform(this._compareRouterId),
      compare_router_id_variable: cdktf.stringToTerraform(this._compareRouterIdVariable),
      description: cdktf.stringToTerraform(this._description),
      deterministic_med: cdktf.booleanToTerraform(this._deterministicMed),
      deterministic_med_variable: cdktf.stringToTerraform(this._deterministicMedVariable),
      external_routes_distance: cdktf.numberToTerraform(this._externalRoutesDistance),
      external_routes_distance_variable: cdktf.stringToTerraform(this._externalRoutesDistanceVariable),
      feature_profile_id: cdktf.stringToTerraform(this._featureProfileId),
      hold_time: cdktf.numberToTerraform(this._holdTime),
      hold_time_variable: cdktf.stringToTerraform(this._holdTimeVariable),
      internal_routes_distance: cdktf.numberToTerraform(this._internalRoutesDistance),
      internal_routes_distance_variable: cdktf.stringToTerraform(this._internalRoutesDistanceVariable),
      ipv4_aggregate_addresses: cdktf.listMapper(transportRoutingBgpFeatureIpv4AggregateAddressesToTerraform, false)(this._ipv4AggregateAddresses.internalValue),
      ipv4_eibgp_maximum_paths: cdktf.numberToTerraform(this._ipv4EibgpMaximumPaths),
      ipv4_eibgp_maximum_paths_variable: cdktf.stringToTerraform(this._ipv4EibgpMaximumPathsVariable),
      ipv4_neighbors: cdktf.listMapper(transportRoutingBgpFeatureIpv4NeighborsToTerraform, false)(this._ipv4Neighbors.internalValue),
      ipv4_networks: cdktf.listMapper(transportRoutingBgpFeatureIpv4NetworksToTerraform, false)(this._ipv4Networks.internalValue),
      ipv4_originate: cdktf.booleanToTerraform(this._ipv4Originate),
      ipv4_originate_variable: cdktf.stringToTerraform(this._ipv4OriginateVariable),
      ipv4_redistributes: cdktf.listMapper(transportRoutingBgpFeatureIpv4RedistributesToTerraform, false)(this._ipv4Redistributes.internalValue),
      ipv4_table_map_filter: cdktf.booleanToTerraform(this._ipv4TableMapFilter),
      ipv4_table_map_filter_variable: cdktf.stringToTerraform(this._ipv4TableMapFilterVariable),
      ipv4_table_map_route_policy_id: cdktf.stringToTerraform(this._ipv4TableMapRoutePolicyId),
      ipv6_aggregate_addresses: cdktf.listMapper(transportRoutingBgpFeatureIpv6AggregateAddressesToTerraform, false)(this._ipv6AggregateAddresses.internalValue),
      ipv6_eibgp_maximum_paths: cdktf.numberToTerraform(this._ipv6EibgpMaximumPaths),
      ipv6_eibgp_maximum_paths_variable: cdktf.stringToTerraform(this._ipv6EibgpMaximumPathsVariable),
      ipv6_neighbors: cdktf.listMapper(transportRoutingBgpFeatureIpv6NeighborsToTerraform, false)(this._ipv6Neighbors.internalValue),
      ipv6_networks: cdktf.listMapper(transportRoutingBgpFeatureIpv6NetworksToTerraform, false)(this._ipv6Networks.internalValue),
      ipv6_originate: cdktf.booleanToTerraform(this._ipv6Originate),
      ipv6_originate_variable: cdktf.stringToTerraform(this._ipv6OriginateVariable),
      ipv6_redistributes: cdktf.listMapper(transportRoutingBgpFeatureIpv6RedistributesToTerraform, false)(this._ipv6Redistributes.internalValue),
      ipv6_table_map_filter: cdktf.booleanToTerraform(this._ipv6TableMapFilter),
      ipv6_table_map_filter_variable: cdktf.stringToTerraform(this._ipv6TableMapFilterVariable),
      ipv6_table_map_route_policy_id: cdktf.stringToTerraform(this._ipv6TableMapRoutePolicyId),
      keepalive_time: cdktf.numberToTerraform(this._keepaliveTime),
      keepalive_time_variable: cdktf.stringToTerraform(this._keepaliveTimeVariable),
      local_routes_distance: cdktf.numberToTerraform(this._localRoutesDistance),
      local_routes_distance_variable: cdktf.stringToTerraform(this._localRoutesDistanceVariable),
      missing_med_as_worst: cdktf.booleanToTerraform(this._missingMedAsWorst),
      missing_med_as_worst_variable: cdktf.stringToTerraform(this._missingMedAsWorstVariable),
      mpls_interfaces: cdktf.listMapper(transportRoutingBgpFeatureMplsInterfacesToTerraform, false)(this._mplsInterfaces.internalValue),
      multipath_relax: cdktf.booleanToTerraform(this._multipathRelax),
      multipath_relax_variable: cdktf.stringToTerraform(this._multipathRelaxVariable),
      name: cdktf.stringToTerraform(this._name),
      propagate_as_path: cdktf.booleanToTerraform(this._propagateAsPath),
      propagate_as_path_variable: cdktf.stringToTerraform(this._propagateAsPathVariable),
      propagate_community: cdktf.booleanToTerraform(this._propagateCommunity),
      propagate_community_variable: cdktf.stringToTerraform(this._propagateCommunityVariable),
      router_id: cdktf.stringToTerraform(this._routerId),
      router_id_variable: cdktf.stringToTerraform(this._routerIdVariable),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      always_compare_med: {
        value: cdktf.booleanToHclTerraform(this._alwaysCompareMed),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      always_compare_med_variable: {
        value: cdktf.stringToHclTerraform(this._alwaysCompareMedVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      as_number: {
        value: cdktf.numberToHclTerraform(this._asNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      as_number_variable: {
        value: cdktf.stringToHclTerraform(this._asNumberVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compare_router_id: {
        value: cdktf.booleanToHclTerraform(this._compareRouterId),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      compare_router_id_variable: {
        value: cdktf.stringToHclTerraform(this._compareRouterIdVariable),
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
      deterministic_med: {
        value: cdktf.booleanToHclTerraform(this._deterministicMed),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      deterministic_med_variable: {
        value: cdktf.stringToHclTerraform(this._deterministicMedVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external_routes_distance: {
        value: cdktf.numberToHclTerraform(this._externalRoutesDistance),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      external_routes_distance_variable: {
        value: cdktf.stringToHclTerraform(this._externalRoutesDistanceVariable),
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
      hold_time: {
        value: cdktf.numberToHclTerraform(this._holdTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      hold_time_variable: {
        value: cdktf.stringToHclTerraform(this._holdTimeVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      internal_routes_distance: {
        value: cdktf.numberToHclTerraform(this._internalRoutesDistance),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      internal_routes_distance_variable: {
        value: cdktf.stringToHclTerraform(this._internalRoutesDistanceVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_aggregate_addresses: {
        value: cdktf.listMapperHcl(transportRoutingBgpFeatureIpv4AggregateAddressesToHclTerraform, false)(this._ipv4AggregateAddresses.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TransportRoutingBgpFeatureIpv4AggregateAddressesList",
      },
      ipv4_eibgp_maximum_paths: {
        value: cdktf.numberToHclTerraform(this._ipv4EibgpMaximumPaths),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ipv4_eibgp_maximum_paths_variable: {
        value: cdktf.stringToHclTerraform(this._ipv4EibgpMaximumPathsVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_neighbors: {
        value: cdktf.listMapperHcl(transportRoutingBgpFeatureIpv4NeighborsToHclTerraform, false)(this._ipv4Neighbors.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TransportRoutingBgpFeatureIpv4NeighborsList",
      },
      ipv4_networks: {
        value: cdktf.listMapperHcl(transportRoutingBgpFeatureIpv4NetworksToHclTerraform, false)(this._ipv4Networks.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TransportRoutingBgpFeatureIpv4NetworksList",
      },
      ipv4_originate: {
        value: cdktf.booleanToHclTerraform(this._ipv4Originate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ipv4_originate_variable: {
        value: cdktf.stringToHclTerraform(this._ipv4OriginateVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_redistributes: {
        value: cdktf.listMapperHcl(transportRoutingBgpFeatureIpv4RedistributesToHclTerraform, false)(this._ipv4Redistributes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TransportRoutingBgpFeatureIpv4RedistributesList",
      },
      ipv4_table_map_filter: {
        value: cdktf.booleanToHclTerraform(this._ipv4TableMapFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ipv4_table_map_filter_variable: {
        value: cdktf.stringToHclTerraform(this._ipv4TableMapFilterVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_table_map_route_policy_id: {
        value: cdktf.stringToHclTerraform(this._ipv4TableMapRoutePolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_aggregate_addresses: {
        value: cdktf.listMapperHcl(transportRoutingBgpFeatureIpv6AggregateAddressesToHclTerraform, false)(this._ipv6AggregateAddresses.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TransportRoutingBgpFeatureIpv6AggregateAddressesList",
      },
      ipv6_eibgp_maximum_paths: {
        value: cdktf.numberToHclTerraform(this._ipv6EibgpMaximumPaths),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ipv6_eibgp_maximum_paths_variable: {
        value: cdktf.stringToHclTerraform(this._ipv6EibgpMaximumPathsVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_neighbors: {
        value: cdktf.listMapperHcl(transportRoutingBgpFeatureIpv6NeighborsToHclTerraform, false)(this._ipv6Neighbors.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TransportRoutingBgpFeatureIpv6NeighborsList",
      },
      ipv6_networks: {
        value: cdktf.listMapperHcl(transportRoutingBgpFeatureIpv6NetworksToHclTerraform, false)(this._ipv6Networks.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TransportRoutingBgpFeatureIpv6NetworksList",
      },
      ipv6_originate: {
        value: cdktf.booleanToHclTerraform(this._ipv6Originate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ipv6_originate_variable: {
        value: cdktf.stringToHclTerraform(this._ipv6OriginateVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_redistributes: {
        value: cdktf.listMapperHcl(transportRoutingBgpFeatureIpv6RedistributesToHclTerraform, false)(this._ipv6Redistributes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TransportRoutingBgpFeatureIpv6RedistributesList",
      },
      ipv6_table_map_filter: {
        value: cdktf.booleanToHclTerraform(this._ipv6TableMapFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ipv6_table_map_filter_variable: {
        value: cdktf.stringToHclTerraform(this._ipv6TableMapFilterVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_table_map_route_policy_id: {
        value: cdktf.stringToHclTerraform(this._ipv6TableMapRoutePolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      keepalive_time: {
        value: cdktf.numberToHclTerraform(this._keepaliveTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      keepalive_time_variable: {
        value: cdktf.stringToHclTerraform(this._keepaliveTimeVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      local_routes_distance: {
        value: cdktf.numberToHclTerraform(this._localRoutesDistance),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      local_routes_distance_variable: {
        value: cdktf.stringToHclTerraform(this._localRoutesDistanceVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      missing_med_as_worst: {
        value: cdktf.booleanToHclTerraform(this._missingMedAsWorst),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      missing_med_as_worst_variable: {
        value: cdktf.stringToHclTerraform(this._missingMedAsWorstVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mpls_interfaces: {
        value: cdktf.listMapperHcl(transportRoutingBgpFeatureMplsInterfacesToHclTerraform, false)(this._mplsInterfaces.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TransportRoutingBgpFeatureMplsInterfacesList",
      },
      multipath_relax: {
        value: cdktf.booleanToHclTerraform(this._multipathRelax),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      multipath_relax_variable: {
        value: cdktf.stringToHclTerraform(this._multipathRelaxVariable),
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
      propagate_as_path: {
        value: cdktf.booleanToHclTerraform(this._propagateAsPath),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      propagate_as_path_variable: {
        value: cdktf.stringToHclTerraform(this._propagateAsPathVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      propagate_community: {
        value: cdktf.booleanToHclTerraform(this._propagateCommunity),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      propagate_community_variable: {
        value: cdktf.stringToHclTerraform(this._propagateCommunityVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      router_id: {
        value: cdktf.stringToHclTerraform(this._routerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      router_id_variable: {
        value: cdktf.stringToHclTerraform(this._routerIdVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
